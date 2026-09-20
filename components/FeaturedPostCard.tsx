import Link from 'next/link';
import { PostMetaData } from '@/lib/mdx';

export function FeaturedPostCard({ post }: { post: PostMetaData }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#EAEAE8] bg-[#F4F3F0] p-8 md:p-12 transition-all hover:border-[#86937D]/60 hover:shadow-xs mb-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3 text-xs">
            <span className="rounded-full bg-[#86937D] px-3 py-1 font-semibold text-white uppercase tracking-wider text-[10px]">
              Featured Essay
            </span>
            <span className="text-[#5C5B57]">{post.publishedAt}</span>
            <span className="text-[#5C5B57]">•</span>
            <span className="text-[#5C5B57]">{post.readingTime}</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-[#1A1A1A] group-hover:text-[#86937D] transition-colors">
            <Link href={`/posts/${post.slug}`} className="before:absolute before:inset-0">
              {post.title}
            </Link>
          </h2>

          <p className="text-base md:text-lg text-[#5C5B57] leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex items-center space-x-4 pt-4 border-t border-[#EAEAE8]/80">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover border border-[#EAEAE8]"
            />
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">{post.author.name}</p>
              <p className="text-xs text-[#5C5B57]">Engineering Lead</p>
            </div>

            <div className="ml-auto flex items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#EAEAE8] bg-[#FBFBFA] px-2.5 py-0.5 text-xs text-[#5C5B57]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
