import Link from 'next/link';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer id="newsletter" className="border-t border-[#EAEAE8] bg-[#F4F3F0] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-[#EAEAE8] pb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86937D]">
              Weekly Editorial Digest
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#1A1A1A] mt-2 mb-3">
              Deep Technical Insights, Delivered Calmly.
            </h3>
            <p className="text-sm text-[#5C5B57] max-w-md">
              No clickbait or AI fluff. Just thoughtful long-form essays on cloud architecture, edge microservices, and modern web infrastructure.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#5C5B57] gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-heading text-base font-bold text-[#1A1A1A]">Aether</span>
            <span>— Serverless Editorial Platform</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
              Feed
            </Link>
            <Link href="/rss.xml" className="hover:text-[#1A1A1A] transition-colors">
              RSS Feed
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#1A1A1A] transition-colors">
              Sitemap
            </Link>
            <Link href="/admin/posts" className="hover:text-[#1A1A1A] transition-colors">
              Admin Portal
            </Link>
          </div>

          <p>© {new Date().getFullYear()} Aether Publishing. Built with Next.js 15 & Neon Serverless.</p>
        </div>
      </div>
    </footer>
  );
}
