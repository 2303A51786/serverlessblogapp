import { getCachedPosts } from '@/lib/mdx';
import { FeaturedPostCard } from '@/components/FeaturedPostCard';
import { PostCard } from '@/components/PostCard';

export const revalidate = 3600; // 1 hour ISR revalidation

export default async function HomePage() {
  const posts = await getCachedPosts();

  const featuredPost = posts.find((p) => p.isFeatured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Hero Header */}
      <section className="mb-12 border-b border-[#EAEAE8] pb-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#86937D]">
            The Serverless Editorial Journal
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
            Engineering Perspectives for the Modern Web.
          </h1>
          <p className="text-lg text-[#5C5B57] leading-relaxed">
            Curated long-form articles on serverless platforms, edge execution, and resilient cloud architectures.
          </p>
        </div>

        {/* Topic Filter Tabs */}
        <div id="topics" className="mt-8 flex flex-wrap items-center gap-2 pt-6">
          <span className="text-xs font-medium text-[#5C5B57] mr-2">Filter Topics:</span>
          <button className="rounded-full bg-[#1A1A1A] px-3.5 py-1.5 text-xs font-medium text-[#FBFBFA] shadow-xs">
            All Articles
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-[#EAEAE8] bg-[#F4F3F0] px-3.5 py-1.5 text-xs font-medium text-[#5C5B57] hover:border-[#86937D] hover:text-[#1A1A1A] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post (Full-bleed / asymmetric layout) */}
      {featuredPost && <FeaturedPostCard post={featuredPost} />}

      {/* Staggered 2-Column Grid */}
      <section>
        <div className="mb-6 flex items-center justify-between border-b border-[#EAEAE8] pb-3">
          <h2 className="font-heading text-2xl font-bold text-[#1A1A1A]">Latest Stories</h2>
          <span className="text-xs text-[#5C5B57]">{regularPosts.length} articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
