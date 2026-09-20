import React, { useState } from 'react';
import { Sparkles, Cpu, Layers, DollarSign, Menu, X, ArrowRight, Code } from 'lucide-react';

interface NavbarProps {
  onOpenApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-2xl transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo with Soft Pastel Gradient */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-pink-400 to-sky-400 p-[1.5px] shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/35 transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-violet-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                Aether<span className="text-gradient-pastel">AI</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold bg-violet-100 text-violet-700 rounded-md border border-violet-200">
                  v2.0
                </span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider font-mono font-semibold">Serverless Platform</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors flex items-center gap-1.5 group">
              <Sparkles className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span>Features</span>
            </a>
            <a href="#demo" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-1.5 group">
              <Layers className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
              <span>Live Studio</span>
            </a>
            <a href="#architecture" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1.5 group">
              <Cpu className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span>Architecture</span>
            </a>
            <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-1.5 group">
              <DollarSign className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>Pricing</span>
            </a>
          </nav>

          {/* Desktop Pastel CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/2303A51786/serverlessblogapp" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="GitHub Repository"
            >
              <Code className="w-5 h-5 text-violet-600" />
            </a>
            <button
              onClick={onOpenApp}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 shadow-md shadow-violet-500/25 hover:shadow-lg hover:shadow-violet-500/35 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Workspace
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-pink-600" /> : <Menu className="w-6 h-6 text-violet-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-violet-600"
          >
            ✨ Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-sky-600"
          >
            ⚡ Live Studio Demo
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-emerald-600"
          >
            🌐 Architecture
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-700 hover:text-amber-600"
          >
            💎 Pricing
          </a>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApp?.();
              }}
              className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 shadow-md shadow-violet-500/20"
            >
              Launch Workspace
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
