import React, { useState, useEffect } from 'react';
import { X, Bookmark, Share2, ArrowLeft, ArrowRight, Sparkles, Check, Clock, Heart } from 'lucide-react';

interface ArticleReaderModalProps {
  article: any | null;
  onClose: () => void;
  onSelectArticle?: (article: any) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const target = e.target;
      if (target) {
        const totalHeight = target.scrollHeight - target.clientHeight;
        if (totalHeight > 0) {
          const currentProgress = (target.scrollTop / totalHeight) * 100;
          setScrollProgress(currentProgress);
        }
      }
    };
    const modalEl = document.getElementById('article-modal-scroll');
    if (modalEl) {
      modalEl.addEventListener('scroll', handleScroll);
      return () => modalEl.removeEventListener('scroll', handleScroll);
    }
  }, [article]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF9F6] overflow-hidden flex flex-col animate-fade-in">
      
      {/* Sticky Top Reading Bar */}
      <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/[0.08] px-6 py-3 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-full border border-black/[0.08] shadow-2xs transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-indigo-600" />
          <span>Back to Stories</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 font-editorial text-sm font-bold text-slate-800 truncate max-w-md">
          {article.title}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full border transition-all ${
              isLiked ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white text-slate-600 border-black/[0.08] hover:text-slate-900'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full border transition-all ${
              isBookmarked ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-white text-slate-600 border-black/[0.08] hover:text-slate-900'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-indigo-600' : ''}`} />
          </button>

          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full bg-white text-slate-600 hover:text-slate-900 border border-black/[0.08] transition-all"
            title="Share Story"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reading Progress Indicator Bar */}
      <div className="w-full bg-slate-200 h-1 z-40">
        <div
          className="bg-indigo-600 h-full transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Article Body Scroll Container */}
      <div id="article-modal-scroll" className="flex-1 overflow-y-auto px-4 py-12 md:py-16">
        <article className="max-w-4xl mx-auto space-y-10">
          
          {/* Article Header Metadata */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase font-mono">
              {article.type || 'Editorial'}
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {article.excerpt || "An in-depth exploration into serverless architecture, edge functions, and Gemini AI streaming pipelines."}
            </p>

            {/* Author Profile Pill */}
            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-semibold text-slate-600 border-t border-b border-black/[0.06] py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  CR
                </div>
                <span className="text-slate-900 font-bold">Chaitra Reddy</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {Math.ceil((article.wordCount || 500) / 200)} min read
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-slate-500">{article.createdAt || 'Sep 20, 2026'}</span>
            </div>
          </div>

          {/* Centered Comfort Reading Column */}
          <div className="article-prose bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.07] shadow-xl">
            <pre className="whitespace-pre-wrap font-sans text-base sm:text-lg leading-relaxed text-slate-800">
              {article.content}
            </pre>
          </div>

          {/* Author Footer & Next Reading Section */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-black/[0.08] space-y-8">
            <div className="p-6 bg-white rounded-3xl border border-black/[0.07] flex flex-col sm:flex-row items-center gap-5 shadow-xs">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                CR
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-base text-slate-900">Written by Chaitra Reddy</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full Stack Engineer & Cloud Advocate exploring serverless AI edge systems and real-time LLM stream pipelines.
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold font-mono">
                <Sparkles className="w-3.5 h-3.5" /> Continue Reading
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900">Explore More Serverless Stories</h3>
              
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
              >
                Back to Content Library
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </article>
      </div>

    </div>
  );
};
