import React from 'react';
import { Cpu, Sparkles, FolderKanban, ShieldCheck, Settings, ArrowLeft, Zap, LogOut } from 'lucide-react';

export type StudioTab = 'generator' | 'library' | 'vault' | 'settings';

interface StudioSidebarProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  onBackToLanding: () => void;
  savedDraftsCount: number;
}

export const StudioSidebar: React.FC<StudioSidebarProps> = ({
  activeTab,
  onSelectTab,
  onBackToLanding,
  savedDraftsCount,
}) => {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 z-30 select-none">
      
      {/* Top Header & Brand */}
      <div className="p-5 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight flex items-center gap-1">
                Aether<span className="text-indigo-400">Studio</span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono">Serverless OS v2.0</p>
            </div>
          </div>
        </div>

        {/* Back to Landing Page Link */}
        <button
          onClick={onBackToLanding}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </button>

        {/* Navigation Section */}
        <nav className="space-y-1.5 pt-2">
          <div className="px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
            Workspace Tools
          </div>

          {/* Generator Tab */}
          <button
            onClick={() => onSelectTab('generator')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'generator'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4" />
              <span>AI Content Studio</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono">LIVE</span>
          </button>

          {/* Library Tab */}
          <button
            onClick={() => onSelectTab('library')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'library'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FolderKanban className="w-4 h-4" />
              <span>Content Library</span>
            </div>
            {savedDraftsCount > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                {savedDraftsCount}
              </span>
            )}
          </button>

          {/* Brand Vault Tab */}
          <button
            onClick={() => onSelectTab('vault')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'vault'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Brand Tone Vault</span>
            </div>
          </button>

          {/* Settings Tab */}
          <button
            onClick={() => onSelectTab('settings')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Settings className="w-4 h-4" />
              <span>API & Webhooks</span>
            </div>
          </button>
        </nav>
      </div>

      {/* Bottom Profile & Status */}
      <div className="p-4 border-t border-slate-800/80 space-y-3">
        {/* Edge Node Status */}
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">Serverless Gateway</span>
            <span className="flex items-center gap-1 text-emerald-400 font-mono font-bold">
              <Zap className="w-3 h-3" /> 14ms
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-[95%]" />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">
              CR
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Chaitra Reddy</p>
              <p className="text-[10px] text-indigo-400">Pro Developer</p>
            </div>
          </div>
          <button
            onClick={onBackToLanding}
            className="text-slate-500 hover:text-slate-300 p-1 rounded-lg"
            title="Exit Studio"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

    </aside>
  );
};
