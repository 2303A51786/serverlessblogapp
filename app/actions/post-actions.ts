'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db/client';
import { posts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export interface PostFormState {
  success?: boolean;
  error?: string;
  slug?: string;
}

export async function createPostAction(prevState: any, formData: FormData): Promise<PostFormState> {
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const excerpt = formData.get('excerpt') as string;
  const mdxContent = formData.get('mdxContent') as string;
  const tagsString = formData.get('tags') as string;
  const status = (formData.get('status') as 'draft' | 'published') || 'draft';

  if (!title || !mdxContent) {
    return { error: 'Title and MDX Content are required.' };
  }

  const tagsArray = tagsString
    ? tagsString.split(',').map((t) => t.trim()).filter(Boolean)
    : ['Architecture'];

  try {
    if (process.env.DATABASE_URL) {
      await db.insert(posts).values({
        title,
        slug,
        excerpt,
        mdxContent,
        status,
        tags: tagsArray,
        publishedAt: status === 'published' ? new Date() : null,
      });
    }

    revalidateTag('posts');
    return { success: true, slug };
  } catch (err: any) {
    return { error: err.message || 'Failed to create post.' };
  }
}

export async function deletePostAction(slug: string) {
  try {
    if (process.env.DATABASE_URL) {
      await db.delete(posts).where(eq(posts.slug, slug));
    }
    revalidateTag('posts');
    return { success: true };
  } catch (err: any) {
    return { error: err.message || 'Failed to delete post.' };
  }
}
