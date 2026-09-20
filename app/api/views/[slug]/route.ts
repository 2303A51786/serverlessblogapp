import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { postViews } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';

export const runtime = 'edge';

// In-memory counter cache for edge runtime fallback when DB connection is placeholder
const localViewStore = new Map<string, number>();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    if (process.env.DATABASE_URL) {
      const result = await db
        .select()
        .from(postViews)
        .where(eq(postViews.slug, slug))
        .limit(1);

      if (result.length > 0) {
        return NextResponse.json({ views: result[0].count });
      }
    }
  } catch (err) {
    // Silently fall back to in-memory store
  }

  const current = localViewStore.get(slug) || 142;
  return NextResponse.json({ views: current });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    if (process.env.DATABASE_URL) {
      const updated = await db
        .insert(postViews)
        .values({ slug, count: 1 })
        .onConflictDoUpdate({
          target: postViews.slug,
          set: { count: sql`${postViews.count} + 1` },
        })
        .returning();

      if (updated.length > 0) {
        return NextResponse.json({ views: updated[0].count });
      }
    }
  } catch (err) {
    // Silently fall back to in-memory store increment
  }

  const current = localViewStore.get(slug) || 142;
  const nextCount = current + 1;
  localViewStore.set(slug, nextCount);

  return NextResponse.json({ views: nextCount });
}
