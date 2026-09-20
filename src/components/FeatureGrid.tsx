import React from 'react';
import { Cpu, Zap, Search, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-white/60 border-t border-b border-black/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Platform Capabilities
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for <span className="italic font-normal text-indigo-600">Thoughtful Content</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Combine serverless edge execution with Google Gemini AI to research, write, format, and push content to your publishing pipelines.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Serverless Edge Engine (Large 2-column card) */}
          <div className="md:col-span-2 editorial-card rounded-3xl p-8 sm:p-10 border border-black/[0.07] editorial-card-hover flex flex-col justify-between group space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-slate-900">
                Serverless Microsecond Execution
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                No server management, no cold starts. Deploy AI prompts to edge functions globally with execution latencies under 15ms. Pay strictly for actual token compute.
              </p>
            </div>

            {/* Graphic Micro Preview */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2 shadow-inner">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800 font-bold">
                <span>EVENT LOG</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  STATUS: 200 OK
                </span>
              </div>
              <div className="flex justify-between items-center text-indigo-300 font-semibold">
                <span>POST /api/v1/generate-post</span>
                <span className="text-slate-400">12ms</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Model: Gemini 3.5 Flash</span>
                <span className="text-emerald-400 font-bold">$0.0002 / invocation</span>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-LLM Smart Router */}
          <div className="editorial-card rounded-3xl p-8 border border-black/[0.07] editorial-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                Multi-Model Gateway
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dynamically routes prompts between Gemini 3.5, Claude 3.5, and GPT-4o based on tone requirements and latency SLAs.
              </p>
            </div>
            
            <div className="space-y-2 pt-2 font-semibold">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-black/[0.04] text-xs">
                <span className="text-slate-900 font-bold">Gemini 3.5 Flash</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-mono font-bold">Sub-15ms</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-black/[0.04] text-xs">
                <span className="text-slate-900 font-bold">Claude 3.5 Sonnet</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 font-mono font-bold">Nuanced</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-black/[0.04] text-xs">
                <span className="text-slate-900 font-bold">GPT-4o Engine</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 font-mono font-bold">Reasoning</span>
              </div>
            </div>
          </div>

          {/* Card 3: SEO & Voice Guardrails */}
          <div className="editorial-card rounded-3xl p-8 border border-black/[0.07] editorial-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                Built-in SEO & Voice Matching
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enforces keyword density, heading hierarchy, and brand tone guidelines automatically before output streaming.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-black/[0.04] text-xs space-y-2">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-700">Keyword Density</span>
                <span className="text-emerald-700">2.4% (Optimal)</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[75%]" />
              </div>
            </div>
          </div>

          {/* Card 4: Live Web Grounding */}
          <div className="editorial-card rounded-3xl p-8 border border-black/[0.07] editorial-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center">
                <Search className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                Live Web Grounding
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fetches current documentation, web sources, and API specs in real-time so your posts are never hallucinated or out-of-date.
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-black/[0.04] text-xs text-sky-800 font-bold">
              <Search className="w-4 h-4 text-sky-600" />
              <span className="truncate">Searching latest React 19 & Vite 8 specs...</span>
            </div>
          </div>

          {/* Card 5: Instant CMS Webhook */}
          <div className="editorial-card rounded-3xl p-8 border border-black/[0.07] editorial-card-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <Send className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                Instant Multi-Channel Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Publish approved articles straight to Dev.to, Hashnode, WordPress, Ghost, or your custom headless Webhook endpoints.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-700 font-mono font-bold pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-black/[0.04]">Hashnode</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-black/[0.04]">Dev.to</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-black/[0.04]">Ghost</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-black/[0.04]">+Webhooks</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
