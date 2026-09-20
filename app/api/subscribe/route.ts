import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { subscribers } from '@/lib/db/schema';
import { ratelimit } from '@/lib/ratelimit';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many subscription attempts. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    if (process.env.DATABASE_URL) {
      try {
        await db.insert(subscribers).values({ email }).onConflictDoNothing();
      } catch (e) {
        // Ignore duplicate inserts gracefully
      }
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the Aether editorial digest!' },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
