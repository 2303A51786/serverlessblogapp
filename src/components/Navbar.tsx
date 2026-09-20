import React, { useState } from 'react';
import { Sparkles, Cpu, Layers, DollarSign, Menu, X, ArrowRight, Code } from 'lucide-react';

interface NavbarProps {
  onOpenApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                Aether<span className="text-indigo-400">AI</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
                  v2.0
                </span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono">Serverless Platform</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Features
            </a>
            <a href="#demo" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-400" />
              Live Studio
            </a>
            <a href="#architecture" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-400" />
              Architecture
            </a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-amber-400" />
              Pricing
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              title="GitHub Repository"
            >
              <Code className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenApp}
              className="relative group overflow-hidden px-4 py-2 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Workspace
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-white"
          >
            Live Studio Demo
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-white"
          >
            Architecture
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-white"
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApp?.();
              }}
              className="w-full py-2.5 rounded-lg font-medium text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-600/30"
            >
              Launch Workspace
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
