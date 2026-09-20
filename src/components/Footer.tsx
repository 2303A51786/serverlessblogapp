import React, { useState } from 'react';
import { Cpu, Code, Globe, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Aether<span className="text-indigo-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The high-performance Serverless AI Content Engine. Orchestrating Gemini 3.5 & LLM edge pipelines for autonomous creation, SEO optimization, and instant multi-channel sync.
            </p>

            {/* Live Status Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All 310+ Edge Nodes Operational (99.99%)</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider font-mono">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Serverless Edge</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multi-LLM Gateway</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">SEO Guardrails</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Webhook Engine</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider font-mono">Developers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#architecture" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Edge SDK Specs</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Free Tier Limits</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider font-mono">Stay Updated</h4>
            <p className="text-xs text-slate-400">Get weekly updates on serverless AI patterns & LLM updates.</p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AetherAI Serverless Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              <Code className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
