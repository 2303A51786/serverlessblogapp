import { NextResponse } from 'next/server';
import { getCachedPosts } from '@/lib/mdx';

export const runtime = 'edge';

export async function GET() {
  const posts = await getCachedPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serverlessblogapp.vercel.app';

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/posts/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/posts/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author><![CDATA[${post.author.name}]]></author>
    </item>`
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aether — Serverless Editorial Platform</title>
    <link>${baseUrl}</link>
    <description>Thoughtful stories, perspectives, and ideas on cloud architecture and edge execution.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
