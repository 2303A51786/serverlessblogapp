import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      <header className="border-b border-[#EAEAE8] bg-[#F4F3F0] px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] font-heading font-bold text-sm text-[#FBFBFA]">
              Æ
            </span>
            <span className="font-heading text-lg font-bold text-[#1A1A1A]">
              Aether Studio
            </span>
            <span className="rounded-md bg-[#86937D]/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#86937D]">
              Admin Portal
            </span>
          </div>

          <nav className="flex items-center space-x-6 text-xs text-[#5C5B57]">
            <Link href="/admin/posts" className="hover:text-[#1A1A1A] transition-colors font-medium">
              All Posts
            </Link>
            <Link href="/admin/posts/new" className="hover:text-[#1A1A1A] transition-colors font-medium">
              + New Post
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#EAEAE8] bg-[#FBFBFA] px-3.5 py-1.5 text-[#1A1A1A] hover:bg-[#EAEAE8] transition-colors"
            >
              ← Back to Reader Site
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
