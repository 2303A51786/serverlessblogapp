import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const Pricing: React.FC<{ onSelectPlan?: (planName: string) => void }> = ({ onSelectPlan }) => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Serverless Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Plans for <span className="text-gradient-purple-cyan">Every Creator</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Start for free, scale infinitely with zero server management or hidden infrastructure costs.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm ${!annual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 rounded-full bg-slate-800 p-1 transition-colors border border-slate-700"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform ${
                  annual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm flex items-center gap-1.5 ${annual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              Annual Billing
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Starter Developer */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
                Free Developer
              </div>
              <div>
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm"> / forever</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Perfect for hobbyists and individual developers exploring serverless AI pipelines.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>50 AI Article Generations / mo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Gemini 3.5 Flash Model Access</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sub-15ms Serverless Execution</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Standard Markdown Export</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan?.('Starter')}
              className="w-full py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              Get Started Free
            </button>
          </div>

          {/* Card 2: Pro Creator (Highlighted) */}
          <div className="glass-card rounded-2xl p-8 border-2 border-indigo-500/80 flex flex-col justify-between space-y-6 relative glow-indigo scale-105 z-10 bg-slate-900/90">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
              Most Popular
            </div>

            <div className="space-y-4 pt-2">
              <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                Pro Creator
              </div>
              <div>
                <span className="text-4xl font-extrabold text-white">
                  ${annual ? '24' : '29'}
                </span>
                <span className="text-slate-400 text-sm"> / month</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                For growth marketers, technical writers, and content teams who need automated publishing.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>1,500</strong> AI Generations / mo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Gemini 3.5, Claude 3.5 & GPT-4o</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct CMS Webhook Sync</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>SEO Keyword & Readability Guardrails</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Live Web Search Grounding</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan?.('Pro')}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 group"
            >
              Start Pro 14-Day Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: Enterprise Engine */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-300">
                Enterprise Engine
              </div>
              <div>
                <span className="text-4xl font-extrabold text-white">
                  ${annual ? '79' : '99'}
                </span>
                <span className="text-slate-400 text-sm"> / month</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated serverless throughput, custom LLM fine-tuning, and SLA guarantees.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>Unlimited</strong> Serverless Invocations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Private Edge Gateway</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom Fine-Tuned Tone Models</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7 Priority Support & 99.99% SLA</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan?.('Enterprise')}
              className="w-full py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              Contact Enterprise Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
