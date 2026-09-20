import React, { useState } from 'react';
import { FolderKanban, Search, Download, Trash2, Edit3, ShieldCheck, BookOpen } from 'lucide-react';
import type { DraftItem } from './ContentGenerator';

interface ContentLibraryProps {
  drafts: DraftItem[];
  onOpenDraftInGenerator: (draft: DraftItem) => void;
  onDeleteDraft: (id: string) => void;
}

export const ContentLibrary: React.FC<ContentLibraryProps> = ({
  drafts,
  onOpenDraftInGenerator,
  onDeleteDraft,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredDrafts = drafts.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || item.status === filterStatus;
    return matchesQuery && matchesFilter;
  });

  const handleDownload = (item: DraftItem) => {
    const blob = new Blob([item.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.08]">
        <div>
          <h1 className="font-editorial text-3xl font-black text-slate-900 flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-indigo-600" />
            Content Library & Drafts
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Manage saved stories, inspect SEO quality ratings, and export markdown files.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories..."
              className="pl-9 pr-4 py-2.5 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 w-56 shadow-2xs"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-slate-900 focus:outline-none focus:border-indigo-600 shadow-2xs"
          >
            <option value="All">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Ready to Publish">Ready to Publish</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>

      {/* Drafts List or Warm Empty State */}
      {filteredDrafts.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-black/[0.07] space-y-4 shadow-xs max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center mx-auto text-indigo-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-editorial text-2xl font-bold text-slate-900">No stories yet.</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your first idea could start something wonderful.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-full font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
          >
            Create New Story
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrafts.map((item) => (
            <div
              key={item.id}
              className="editorial-card rounded-3xl p-6 border border-black/[0.07] editorial-card-hover flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] font-bold text-indigo-700 uppercase font-mono">
                    {item.type}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> {item.seoScore}/100 SEO
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-slate-900 line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>Words: {item.wordCount}</span>
                  <span>Model: {item.model}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-slate-500">
                <span className="text-[10px] font-mono">{item.createdAt}</span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenDraftInGenerator(item)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-black/[0.06]"
                    title="Edit Story"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDownload(item)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-black/[0.06]"
                    title="Export Markdown"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDeleteDraft(item.id)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-black/[0.06]"
                    title="Delete Story"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
