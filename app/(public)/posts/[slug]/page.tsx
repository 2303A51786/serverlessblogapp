import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCachedPostBySlug, renderMDX } from '@/lib/mdx';
import { ViewCounter } from '@/components/ViewCounter';
import { MDXComponents } from '@/components/MDXComponents';
import type { Metadata } from 'next';

export const revalidate = 3600; // 1 hour ISR revalidation

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found — Aether',
    };
  }

  return {
    title: `${post.title} — Aether Editorial`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxContent = await renderMDX(post.content);

  // JSON-LD structured data for Google & SEO web indexers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
  };

  return (
    <article className="mx-auto max-w-7xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Back Link */}
      <div className="reading-column mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-medium text-[#5C5B57] hover:text-[#1A1A1A] transition-colors"
        >
          <span>← Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="reading-column mb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#EAEAE8]/60 px-3 py-1 text-xs font-medium text-[#1A1A1A]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-lg md:text-xl text-[#5C5B57] leading-relaxed">
          {post.excerpt}
        </p>

        {/* Metadata row */}
        <div className="flex items-center justify-between border-y border-[#EAEAE8] py-4 text-xs">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover border border-[#EAEAE8]"
            />
            <div>
              <p className="font-semibold text-[#1A1A1A]">{post.author.name}</p>
              <p className="text-[#5C5B57]">{post.publishedAt}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#5C5B57]">{post.readingTime}</span>
            <span className="text-[#5C5B57]">•</span>
            <ViewCounter slug={post.slug} track={true} />
          </div>
        </div>
      </header>

      {/* Article Content — max-w ~680px */}
      <div className="reading-column prose-editorial">
        {mdxContent}
      </div>

      {/* Author Bio Box */}
      <div className="reading-column mt-16 border-t border-[#EAEAE8] pt-8">
        <div className="rounded-2xl border border-[#EAEAE8] bg-[#F4F3F0] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="h-14 w-14 rounded-full object-cover border border-[#EAEAE8]"
          />
          <div>
            <h4 className="font-heading text-lg font-bold text-[#1A1A1A]">
              Written by {post.author.name}
            </h4>
            <p className="text-xs text-[#5C5B57] mt-1 leading-relaxed">
              Cloud Solutions Architect specializing in serverless edge computing, distributed microservices, and modern Web APIs.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
