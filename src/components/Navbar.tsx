import React, { useState } from 'react';
import { Sparkles, Cpu, Layers, DollarSign, Menu, X, ArrowRight, Search, Command, PenTool } from 'lucide-react';

interface NavbarProps {
  onOpenApp?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApp, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[0.07] bg-[#FAF9F6]/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Editorial Logo Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10 group-hover:scale-105 transition-all">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial font-black text-xl text-slate-900 tracking-tight flex items-center gap-1.5">
                Aether<span className="text-indigo-600 font-sans font-extrabold text-lg">AI</span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                  Editorial
                </span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono uppercase font-semibold">Serverless Content Platform</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 group">
              <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span>Features</span>
            </a>
            <a href="#demo" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 group">
              <Layers className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span>Live Studio</span>
            </a>
            <a href="#architecture" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 group">
              <Cpu className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span>Architecture</span>
            </a>
            <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 group">
              <DollarSign className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span>Pricing</span>
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* ⌘ K Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-2xs transition-all"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search stories...</span>
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 rounded border border-black/[0.04]">
                <Command className="w-2.5 h-2.5" /> K
              </kbd>
            </button>

            {/* Write / Launch Workspace CTA */}
            <button
              onClick={onOpenApp}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 transition-all active:scale-95"
            >
              <PenTool className="w-3.5 h-3.5 text-indigo-300" />
              <span>Write & Publish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] bg-[#FAF9F6] px-6 py-6 space-y-4 shadow-xl">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch?.();
            }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-black/[0.08] text-xs font-semibold text-slate-700"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-indigo-600" /> Search stories
            </span>
            <kbd className="px-2 py-0.5 font-mono text-[10px] bg-slate-100 rounded">⌘K</kbd>
          </button>

          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
          >
            Live Studio Demo
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
          >
            Architecture
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
          >
            Pricing
          </a>

          <div className="pt-4 border-t border-black/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApp?.();
              }}
              className="w-full py-3 rounded-2xl font-bold text-center text-white bg-slate-900 shadow-md"
            >
              Write & Publish
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
