import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAEAE8] bg-[#FBFBFA]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="group flex items-center space-x-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#86937D] text-white font-heading font-bold text-lg shadow-xs group-hover:bg-[#74816b] transition-colors">
            Æ
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-[#1A1A1A]">
              Aether
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#86937D] font-medium">
              Editorial Platform
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#5C5B57]">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
            Feed
          </Link>
          <Link href="/studio/video-captions" className="hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5 font-semibold text-[#86937D]">
            <span className="flex h-2 w-2 rounded-full bg-[#C28C7E] animate-pulse"></span>
            Video Reach AI
          </Link>
          <Link href="/#topics" className="hover:text-[#1A1A1A] transition-colors">
            Topics
          </Link>
          <Link href="/rss.xml" className="hover:text-[#1A1A1A] transition-colors">
            RSS Feed
          </Link>
          <Link
            href="/admin/posts"
            className="rounded-full border border-[#EAEAE8] bg-[#F4F3F0] px-4 py-1.5 text-xs text-[#1A1A1A] hover:border-[#86937D] transition-all"
          >
            Admin Dashboard
          </Link>
        </nav>

        {/* Quick action button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/studio/video-captions"
            className="hidden sm:inline-block rounded-full border border-[#86937D] bg-[#86937D]/10 px-4 py-2 text-xs font-semibold text-[#86937D] hover:bg-[#86937D]/20 transition-colors"
          >
            Hashtag AI Studio
          </Link>
          <a
            href="#newsletter"
            className="rounded-full bg-[#1A1A1A] px-5 py-2 text-xs font-medium text-[#FBFBFA] hover:bg-[#333333] transition-colors shadow-xs"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
