import React from 'react';
import { Cpu, Zap, Search, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-800/60">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Engineered for Modern Content Teams
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need for <br className="hidden sm:inline" />
            <span className="text-gradient-purple-cyan">Autonomous Content Engine</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Combine serverless speed with state-of-the-art LLMs to research, write, optimize, and publish content at scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Serverless Edge Engine (Large 2-column card) */}
          <div className="md:col-span-2 rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Serverless Microsecond Execution
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                No server management, no cold starts. Deploy AI prompts to edge functions globally with execution latencies under 15ms. Pay strictly for actual token compute.
              </p>
            </div>

            {/* Micro Graphic Preview */}
            <div className="mt-8 p-4 bg-slate-950/90 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-800">
                <span>EVENT LOG</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  STATUS: 200 OK
                </span>
              </div>
              <div className="flex justify-between items-center text-indigo-300">
                <span>POST /api/v1/generate-post</span>
                <span className="text-slate-400 font-semibold">12ms</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Model: Gemini 3.5 Flash</span>
                <span className="text-emerald-400 font-semibold">0.0002$ / invocation</span>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-LLM Smart Router */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Multi-Model LLM Gateway
              </h3>
              <p className="text-slate-400 text-sm">
                Dynamically routes prompts between Gemini 3.5, Claude 3.5, and GPT-4o based on tone requirements and latency SLAs.
              </p>
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">Gemini 3.5 Flash</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">Fastest</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">Claude 3.5 Sonnet</span>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono">Nuanced</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">GPT-4o Engine</span>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono">Reasoning</span>
              </div>
            </div>
          </div>

          {/* Card 3: SEO & Tone Guardrails */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Built-in SEO & Voice Matching
              </h3>
              <p className="text-slate-400 text-sm">
                Enforces keyword density, heading hierarchy, and brand tone guidelines automatically before output streaming.
              </p>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Keyword Density</span>
                <span className="text-emerald-400 font-bold">2.4% (Ideal)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[75%]" />
              </div>
            </div>
          </div>

          {/* Card 4: Web Search Grounding */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Live Web Grounding
              </h3>
              <p className="text-slate-400 text-sm">
                Fetches current documentation, web sources, and API specs in real-time so your posts are never hallucinated or out-of-date.
              </p>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-sky-300">
              <Search className="w-3.5 h-3.5" />
              <span className="truncate">Searching latest React 19 & Vite 8 specs...</span>
            </div>
          </div>

          {/* Card 5: Instant CMS Webhook Publisher */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Instant Multi-Channel Sync
              </h3>
              <p className="text-slate-400 text-sm">
                Publish approved articles straight to Dev.to, Hashnode, WordPress, Ghost, or your custom headless Webhook endpoints.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Hashnode</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Dev.to</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Ghost</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">+Webhooks</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
