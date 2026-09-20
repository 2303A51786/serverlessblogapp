import React, { useState, useEffect } from 'react';
import { Search, X, Command, ArrowRight, Sparkles, Clock } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: any) => void;
  articles: any[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  articles,
}) => {
  const [query, setQuery] = useState('');
  const [recentSearches] = useState(['Serverless Edge', 'Gemini AI Integration', 'SEO Content Strategy']);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.type.toLowerCase().includes(query.toLowerCase()) ||
    (a.excerpt && a.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-black/[0.08] bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, topics, or serverless guides..."
            className="w-full bg-transparent text-slate-900 text-base font-medium placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono font-semibold text-slate-400 bg-white border border-black/[0.08] rounded-md shadow-2xs">
              <Command className="w-3 h-3" /> K
            </kbd>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[420px] overflow-y-auto p-6 space-y-6">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5" /> Recent Queries
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-black/[0.04]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Stories Found ({filteredArticles.length})
              </div>
              {filteredArticles.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <Sparkles className="w-8 h-8 text-indigo-400 mx-auto" />
                  <p className="text-sm font-semibold text-slate-800">No stories match your search</p>
                  <p className="text-xs text-slate-500">Try searching for "serverless", "edge", or "gemini".</p>
                </div>
              ) : (
                filteredArticles.map((article, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-4 rounded-2xl bg-white hover:bg-slate-50 border border-black/[0.06] hover:border-indigo-200 transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                          {article.type}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {article.createdAt || 'Recent'}
                        </span>
                      </div>
                      <h4 className="font-editorial text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {article.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF9F6] border-t border-black/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Search powered by Aether Serverless Index</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
};
