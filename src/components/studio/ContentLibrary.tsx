import React, { useState } from 'react';
import { FolderKanban, Search, Download, Trash2, Edit3, ShieldCheck, Sparkles } from 'lucide-react';
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
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-indigo-400" />
            Content Library & Saved Drafts
          </h1>
          <p className="text-xs text-slate-400">
            Manage your AI-generated articles, view SEO quality metrics, and export Markdown files.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title or template..."
              className="pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-56"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="All">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Ready to Publish">Ready to Publish</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>

      {/* Drafts List */}
      {filteredDrafts.length === 0 ? (
        <div className="p-12 text-center glass-card rounded-2xl border border-slate-800 space-y-3">
          <Sparkles className="w-8 h-8 text-indigo-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Content Drafts Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Generate articles in the AI Content Studio and save them here to manage your publishing pipeline.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrafts.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-5 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-300">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> {item.seoScore}/100 SEO
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                  <span>Words: {item.wordCount}</span>
                  <span>Model: {item.model}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[10px] font-mono">{item.createdAt}</span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenDraftInGenerator(item)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                    title="Edit in Studio"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDownload(item)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                    title="Export Markdown"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDeleteDraft(item.id)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-900/40 text-slate-400 hover:text-rose-400 border border-slate-800"
                    title="Delete Draft"
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
