import { VideoCaptionStudio } from '@/components/VideoCaptionStudio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Reach & Trending Hashtags — Aether Studio',
  description: 'Upload video content to generate platform-tuned captions, high-volume hashtags, and reach optimization metrics.',
};

export default function VideoCaptionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 border-b border-[#EAEAE8] pb-8 space-y-3">
        <span className="rounded-full bg-[#C28C7E]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C28C7E]">
          Creator Tool Studio
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          AI Video Reach & Hashtag Generator
        </h1>
        <p className="text-base text-[#5C5B57] max-w-2xl leading-relaxed">
          Drag and drop video content to analyze key themes, generate engaging captions, and discover high-reach trending hashtags to maximize audience reach.
        </p>
      </div>

      <VideoCaptionStudio />
    </div>
  );
}
