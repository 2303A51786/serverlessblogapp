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
    <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200/90 flex flex-col justify-between h-screen sticky top-0 z-30 select-none shadow-xs">
      
      {/* Top Header & Brand */}
      <div className="p-5 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-pink-400 to-sky-400 p-[1.5px] shadow-md shadow-violet-500/20">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5 text-violet-600" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight flex items-center gap-1">
                Aether<span className="text-gradient-pastel">Studio</span>
              </span>
              <p className="text-[10px] text-violet-600 font-mono font-bold">Serverless OS v2.0</p>
            </div>
          </div>
        </div>

        {/* Back to Landing Page Link */}
        <button
          onClick={onBackToLanding}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 border border-slate-200 transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-pink-500" />
          <span>Back to Landing Page</span>
        </button>

        {/* Navigation Section */}
        <nav className="space-y-2 pt-2">
          <div className="px-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
            Workspace Tools
          </div>

          {/* Generator Tab */}
          <button
            onClick={() => onSelectTab('generator')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'generator'
                ? 'bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 text-white shadow-md shadow-violet-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className={`w-4 h-4 ${activeTab === 'generator' ? 'text-white' : 'text-pink-500'}`} />
              <span>AI Content Studio</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/25 font-mono">LIVE</span>
          </button>

          {/* Library Tab */}
          <button
            onClick={() => onSelectTab('library')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'library'
                ? 'bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 text-white shadow-md shadow-violet-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FolderKanban className={`w-4 h-4 ${activeTab === 'library' ? 'text-white' : 'text-sky-500'}`} />
              <span>Content Library</span>
            </div>
            {savedDraftsCount > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 font-mono">
                {savedDraftsCount}
              </span>
            )}
          </button>

          {/* Brand Vault Tab */}
          <button
            onClick={() => onSelectTab('vault')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'vault'
                ? 'bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 text-white shadow-md shadow-violet-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className={`w-4 h-4 ${activeTab === 'vault' ? 'text-white' : 'text-emerald-500'}`} />
              <span>Brand Tone Vault</span>
            </div>
          </button>

          {/* Settings Tab */}
          <button
            onClick={() => onSelectTab('settings')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 text-white shadow-md shadow-violet-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-white' : 'text-amber-500'}`} />
              <span>API & Webhooks</span>
            </div>
          </button>
        </nav>
      </div>

      {/* Bottom Profile & Status */}
      <div className="p-4 border-t border-slate-200/90 space-y-3">
        {/* Edge Node Status */}
        <div className="p-3 rounded-xl bg-slate-50 border border-emerald-200 text-[11px] space-y-1 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-semibold">Serverless Gateway</span>
            <span className="flex items-center gap-1 text-emerald-600 font-mono font-bold">
              <Zap className="w-3 h-3" /> 14ms
            </span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-sky-500 h-full w-[95%]" />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 via-pink-400 to-sky-400 flex items-center justify-center font-bold text-xs text-white shadow-xs">
              CR
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Chaitra Reddy</p>
              <p className="text-[10px] text-violet-600 font-semibold">Pro Developer</p>
            </div>
          </div>
          <button
            onClick={onBackToLanding}
            className="text-slate-400 hover:text-pink-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            title="Exit Studio"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

    </aside>
  );
};
