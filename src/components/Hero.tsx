import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Bot, Clock, BookOpen } from 'lucide-react';

const PROMPT_PRESETS = [
  {
    title: "Serverless Edge Functions in 2026",
    type: "Blog Article",
    model: "Gemini 3.5 Flash",
    content: `## The Next Evolution of Serverless Edge Computation

Serverless architecture has evolved beyond simple request-reply Lambdas. Modern edge computing enables microsecond cold starts and real-time AI inference at scale.

### Key Architectural Benefits
1. **Sub-10ms Latency**: Code runs directly at edge locations nearest to your user base.
2. **Zero Idle Costs**: Scale automatically from zero to millions of invocations.
3. **AI Pipeline Integration**: Direct streaming from Gemini & Claude APIs without gateway timeouts.

\`\`\`typescript
import { createServerlessAI } from '@aether/sdk';

export default async function handler(req: Request) {
  const ai = createServerlessAI({ model: 'gemini-3.5-flash' });
  return await ai.streamContent({ prompt: req.body.prompt });
}
\`\`\`
`
  }
];

interface HeroProps {
  onGetStarted?: () => void;
  onReadArticle?: (article: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onReadArticle }) => {
  const [displayedText] = useState(PROMPT_PRESETS[0].content);

  const featuredArticle = {
    title: "Building Edge-Native Microservices with Serverless AI",
    type: "Technical Architecture",
    excerpt: "Discover how engineering teams combine serverless edge functions with Gemini AI streaming pipelines to execute microsecond inferencing nearest to the user.",
    content: PROMPT_PRESETS[0].content,
    wordCount: 420,
    createdAt: "Sep 20, 2026",
    model: "Gemini 3.5 Flash",
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      
      {/* Background Soft Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Editorial Hero Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-2xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-700 font-mono tracking-wide">
              Serverless AI Editorial Platform
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Ideas worth <span className="italic text-indigo-600 font-normal">slowing down</span> for.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover thoughtful technical stories, architectural guides, and AI-powered ideas from a community of curious engineering writers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2.5 group active:scale-95"
            >
              <span>Start Writing & Publishing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-300" />
            </button>
            <button
              onClick={() => onReadArticle?.(featuredArticle)}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-black/[0.08] shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Read Featured Story</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold font-mono">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sub-15ms Edge Latency</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Google Gemini Stream</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Multi-CMS Webhook Dispatch</span>
          </div>
        </div>

        {/* Featured Story Spotlight Card (High Editorial Weight) */}
        <div className="max-w-5xl mx-auto editorial-card rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-xl relative overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wide font-mono">
                  ★ Featured Editorial Story
                </span>
                <span className="text-xs font-mono text-slate-400">Sep 20, 2026</span>
              </div>

              <h2 
                onClick={() => onReadArticle?.(featuredArticle)}
                className="font-editorial text-2xl sm:text-3xl font-black text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors leading-snug"
              >
                {featuredArticle.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-normal line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">
                    CR
                  </div>
                  <span className="text-slate-900 font-bold">Chaitra Reddy</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> 3 min read
                  </span>
                  <button
                    onClick={() => onReadArticle?.(featuredArticle)}
                    className="flex items-center gap-1 text-indigo-600 font-bold hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Generator Mini Preview Console */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-5 text-slate-200 font-mono text-xs leading-relaxed border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  Gemini Edge Generator
                </span>
                <span className="text-emerald-400 font-bold">STREAM_ACTIVE</span>
              </div>

              <pre className="whitespace-pre-wrap font-mono text-slate-300 max-h-48 overflow-y-auto">
                {displayedText.slice(0, 240)}...
              </pre>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Speed: <strong className="text-indigo-300">148 t/s</strong></span>
                <button
                  onClick={() => onReadArticle?.(featuredArticle)}
                  className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
                >
                  <span>Open Full Reader</span> →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
