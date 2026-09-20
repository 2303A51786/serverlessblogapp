import React from 'react';
import { Cpu, Zap, Search, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-white/40 border-t border-b border-slate-200/80">
      
      {/* Soft Ambient Pastel Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200/50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-200/50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-200/50 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Engineered for Modern Content Teams
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need for <br className="hidden sm:inline" />
            <span className="text-gradient-pastel">Autonomous Content Engine</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Combine serverless speed with state-of-the-art LLMs to research, write, optimize, and publish content at scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Serverless Edge Engine (Large 2-column card) */}
          <div className="md:col-span-2 rounded-3xl glass-card p-6 sm:p-8 border border-pink-100 glass-card-hover flex flex-col justify-between group relative overflow-hidden shadow-lg">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center shadow-xs">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Serverless Microsecond Execution
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl">
                No server management, no cold starts. Deploy AI prompts to edge functions globally with execution latencies under 15ms. Pay strictly for actual token compute.
              </p>
            </div>

            {/* Micro Graphic Preview */}
            <div className="mt-8 p-4 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800 font-bold">
                <span>EVENT LOG</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: 200 OK
                </span>
              </div>
              <div className="flex justify-between items-center text-pink-300 font-semibold">
                <span>POST /api/v1/generate-post</span>
                <span className="text-sky-300">12ms</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Model: Gemini 3.5 Flash</span>
                <span className="text-emerald-400 font-bold">$0.0002 / invocation</span>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-LLM Smart Router */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-purple-100 glass-card-hover flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center shadow-xs">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Multi-Model LLM Gateway
              </h3>
              <p className="text-slate-600 text-sm">
                Dynamically routes prompts between Gemini 3.5, Claude 3.5, and GPT-4o based on tone requirements and latency SLAs.
              </p>
            </div>
            
            <div className="space-y-2 pt-2 font-semibold">
              <div className="flex items-center justify-between p-2.5 bg-white/90 rounded-xl border border-emerald-200 text-xs">
                <span className="text-slate-800">Gemini 3.5 Flash</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">Fastest</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white/90 rounded-xl border border-purple-200 text-xs">
                <span className="text-slate-800">Claude 3.5 Sonnet</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-mono">Nuanced</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white/90 rounded-xl border border-sky-200 text-xs">
                <span className="text-slate-800">GPT-4o Engine</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-mono">Reasoning</span>
              </div>
            </div>
          </div>

          {/* Card 3: SEO Guardrails */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-emerald-100 glass-card-hover flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Built-in SEO & Voice Matching
              </h3>
              <p className="text-slate-600 text-sm">
                Enforces keyword density, heading hierarchy, and brand tone guidelines automatically before output streaming.
              </p>
            </div>

            <div className="p-3 bg-white/90 rounded-2xl border border-emerald-200 text-xs space-y-2">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-700">Keyword Density</span>
                <span className="text-emerald-700">2.4% (Ideal)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-sky-500 h-full w-[75%]" />
              </div>
            </div>
          </div>

          {/* Card 4: Web Search Grounding */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-sky-100 glass-card-hover flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center shadow-xs">
                <Search className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Live Web Grounding
              </h3>
              <p className="text-slate-600 text-sm">
                Fetches current documentation, web sources, and API specs in real-time so your posts are never hallucinated or out-of-date.
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 bg-white/90 rounded-xl border border-sky-200 text-xs text-sky-700 font-semibold">
              <Search className="w-4 h-4 text-sky-600" />
              <span className="truncate">Searching latest React 19 & Vite 8 specs...</span>
            </div>
          </div>

          {/* Card 5: Instant CMS Webhook */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-amber-100 glass-card-hover flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shadow-xs">
                <Send className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Instant Multi-Channel Sync
              </h3>
              <p className="text-slate-600 text-sm">
                Publish approved articles straight to Dev.to, Hashnode, WordPress, Ghost, or your custom headless Webhook endpoints.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-700 font-mono font-bold pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-purple-700">Hashnode</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-sky-700">Dev.to</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-700">Ghost</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-700">+Webhooks</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
