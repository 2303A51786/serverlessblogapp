import Link from 'next/link';
import { getCachedPosts } from '@/lib/mdx';

export default async function AdminPostsPage() {
  const posts = await getCachedPosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#EAEAE8] pb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#1A1A1A]">Editorial Articles</h1>
          <p className="text-sm text-[#5C5B57] mt-1">
            Manage, edit, and publish long-form MDX essays.
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-xs font-semibold text-[#FBFBFA] hover:bg-[#333333] transition-colors shadow-xs"
        >
          + Write New Post
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#EAEAE8] bg-[#FBFBFA]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F4F3F0] text-xs uppercase text-[#5C5B57] border-b border-[#EAEAE8]">
            <tr>
              <th className="px-6 py-3 font-semibold">Title</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Date</th>
              <th className="px-6 py-3 font-semibold">Tags</th>
              <th className="px-6 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAEAE8]">
            {posts.map((post) => (
              <tr key={post.slug} className="hover:bg-[#F4F3F0]/50 transition-colors">
                <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                  <Link href={`/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-[#86937D]/20 px-2.5 py-0.5 text-xs font-medium text-[#86937D]">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-[#5C5B57]">{post.publishedAt}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-[#EAEAE8] bg-[#F4F3F0] px-1.5 py-0.5 text-[10px] text-[#5C5B57]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-xs">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-[#86937D] font-medium hover:underline mr-4"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
