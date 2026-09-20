import Link from 'next/link';
import { PostMetaData } from '@/lib/mdx';

export function PostCard({ post }: { post: PostMetaData }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-[#EAEAE8] bg-[#FBFBFA] p-6 transition-all hover:border-[#86937D]/50 hover:bg-[#F4F3F0]/50 hover:shadow-xs">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#5C5B57]">
          <div className="flex items-center space-x-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#EAEAE8]/60 px-2.5 py-0.5 font-medium text-[#1A1A1A] text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#86937D] transition-colors leading-snug">
          <Link href={`/posts/${post.slug}`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-[#5C5B57] line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#EAEAE8] text-xs">
        <div className="flex items-center space-x-2.5">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="h-7 w-7 rounded-full object-cover border border-[#EAEAE8]"
          />
          <span className="font-medium text-[#1A1A1A]">{post.author.name}</span>
        </div>
        <span className="text-[#5C5B57]">{post.publishedAt}</span>
      </div>
    </article>
  );
}
