import React from 'react';
import { Cpu, Zap, Database, Globe, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 relative bg-slate-950/80 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            Cloud Native Serverless Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How the <span className="text-gradient-purple-cyan">Serverless AI Engine</span> Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High performance, zero server management, sub-15ms cold start guarantees across global edge locations.
          </p>
        </div>

        {/* Diagram Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Step 1 */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative group hover:border-indigo-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
              01
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                Edge Ingress
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Incoming HTTP requests or webhook events land on Cloudflare Workers & AWS Lambda Edge.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-indigo-400 font-mono">
              <Zap className="w-3 h-3" /> Sub-5ms Ingress Latency
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative group hover:border-purple-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
              02
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                Prompt Sanitizer
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applies SEO guardrails, tone profiles, and security filtering to the prompt context payload.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-purple-400 font-mono">
              <CheckCircle2 className="w-3 h-3" /> Auto Tone Validation
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative group hover:border-sky-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm">
              03
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                AI Inference Stream
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Streams tokens back directly from Gemini 3.5 & LLM gateways with HTTP Chunked Transfer Encoding.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-sky-400 font-mono">
              <Sparkles className="w-3 h-3" /> Real-time Streaming
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative group hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
              04
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Persistence & Webhook
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stores generated assets in DynamoDB / S3 and triggers webhooks to your CMS, Hashnode, or Dev.to.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <CheckCircle2 className="w-3 h-3" /> Multi-CMS Dispatch
            </div>
          </div>

        </div>

        {/* Technical Specification Summary Bar */}
        <div className="mt-12 p-6 glass-card rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <p className="text-xs text-slate-500 font-mono uppercase">Global Edge Regions</p>
            <p className="text-xl font-bold text-white">310+ Pop Locations</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <p className="text-xs text-slate-500 font-mono uppercase">Cold Start Overhead</p>
            <p className="text-xl font-bold text-emerald-400">&lt; 15 ms</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <p className="text-xs text-slate-500 font-mono uppercase">Concurrency Ceiling</p>
            <p className="text-xl font-bold text-indigo-400">Unlimited (Serverless)</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <p className="text-xs text-slate-500 font-mono uppercase">Uptime Guarantee</p>
            <p className="text-xl font-bold text-purple-400">99.99% SLA</p>
          </div>
        </div>

      </div>
    </section>
  );
};
