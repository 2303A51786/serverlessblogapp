import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, CheckCircle2, Copy, Check, RefreshCw, Bot, Gauge, Flame } from 'lucide-react';

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
  },
  {
    title: "SaaS Launch Announcement Thread",
    type: "Social Thread",
    model: "Claude 3.5 Sonnet",
    content: `🚀 Introducing AetherAI v2.0 - The Serverless AI Content Engine built for modern growth teams.

1/6 Building high-converting technical content usually takes hours of research, SEO formatting, and multi-channel publishing.

2/6 Today, we're changing that. AetherAI orchestrates Gemini 3.5 & GPT-4o over serverless edge workers to auto-generate, format, and push content directly to your headless CMS.

3/6 ⚡ Real-time web search grounding
🎯 Automated SEO keyword density analysis
🔄 Instant Webhook triggers for Hashnode & Dev.to

Try it today -> https://aether.ai`
  },
  {
    title: "Autonomous Content Marketing Strategy",
    type: "SEO Brief",
    model: "GPT-4o",
    content: `# SEO Content Blueprint: Developer Tooling & Serverless

### Search Intent Profile
- **Primary Keywords**: serverless blog app, AI content generator API, edge functions content engine
- **Target Audience**: Technical Founders, Product Engineers, Developer Advocates

### Recommended Outline & Topic Cluster
1. What is a Serverless AI Content Engine? (Target Vol: 14,200/mo)
2. How to Stream AI Responses in Next.js & React (Target Vol: 8,900/mo)
3. Comparing Serverless Cold Starts Across AWS Lambda vs Cloudflare Workers`
  }
];

export const Hero: React.FC<{ onGetStarted?: () => void }> = ({ onGetStarted }) => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [displayedText, setDisplayedText] = useState(PROMPT_PRESETS[0].content);
  const [copied, setCopied] = useState(false);
  const [tokensPerSec] = useState(148);

  const currentPreset = PROMPT_PRESETS[selectedPresetIndex];

  // Handle Preset Switching with simulated streaming
  const handleSelectPreset = (index: number) => {
    if (index === selectedPresetIndex) return;
    setSelectedPresetIndex(index);
    setIsGenerating(true);
    setDisplayedText("");

    const targetContent = PROMPT_PRESETS[index].content;
    let currentLength = 0;

    const interval = setInterval(() => {
      currentLength += Math.floor(Math.random() * 8) + 4;
      if (currentLength >= targetContent.length) {
        setDisplayedText(targetContent);
        setIsGenerating(false);
        clearInterval(interval);
      } else {
        setDisplayedText(targetContent.slice(0, currentLength));
      }
    }, 30);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      
      {/* Soft Pastel Mesh Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/70 via-pink-200/60 to-sky-200/70 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-amber-100/80 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-cyan-100/80 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Badge with Soft Pastel Styling */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-violet-200 shadow-md shadow-violet-500/5 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-pink-500 animate-ping" />
            <span className="flex h-2.5 w-2.5 rounded-full bg-pink-500 absolute" />
            <span className="text-xs font-bold text-slate-700 tracking-wide pl-2">
              Next-Gen Serverless AI Content Platform
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-violet-600 flex items-center gap-1">
              Gemini 3.5 Engine <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            </span>
          </div>

          {/* Main Pastel Gradient Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Craft, Scale & Publish Content with{" "}
            <span className="text-gradient-pastel drop-shadow-xs">
              Serverless AI Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Generate SEO-optimized articles, social campaigns, and documentation in milliseconds. Built on serverless edge functions with zero cold starts.
          </p>

          {/* Pastel Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 hover:from-violet-700 hover:to-sky-600 shadow-xl shadow-violet-500/20 hover:shadow-violet-500/35 transition-all flex items-center justify-center gap-2.5 group active:scale-95"
            >
              Start Generating Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#architecture"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-700 bg-white/90 hover:bg-white border border-slate-200/90 hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              View Architecture
            </a>
          </div>

          {/* Feature Highlights Pill Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sub-15ms Cold Starts</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Multi-Model Routing</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>Direct Headless CMS Sync</span>
            </div>
          </div>
        </div>

        {/* Live Studio Mock Widget with Light Glassmorphism */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl glass-card-vibrant p-3 sm:p-5 shadow-2xl">
          
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white/90 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 ml-2 flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-violet-600" />
                Aether Edge AI Studio
              </span>
            </div>

            {/* Presets Selection Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {PROMPT_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    selectedPresetIndex === idx
                      ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md shadow-violet-500/20'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${selectedPresetIndex === idx ? 'text-white' : 'text-violet-500'}`} />
                  {preset.type}
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-1.5 rounded-xl border border-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-violet-600" />
                  <span>Copy Content</span>
                </>
              )}
            </button>
          </div>

          {/* Model Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 px-1">
            <div className="bg-white/90 rounded-xl p-3 border border-purple-100 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                <Bot className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] text-purple-600 font-mono uppercase font-bold">Active Model</p>
                <p className="text-xs font-extrabold text-slate-800">{currentPreset.model}</p>
              </div>
            </div>

            <div className="bg-white/90 rounded-xl p-3 border border-sky-100 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                <Gauge className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p className="text-[10px] text-sky-600 font-mono uppercase font-bold">Generation Speed</p>
                <p className="text-xs font-extrabold text-slate-800">{tokensPerSec} tokens/sec</p>
              </div>
            </div>

            <div className="bg-white/90 rounded-xl p-3 border border-amber-100 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <Flame className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] text-amber-600 font-mono uppercase font-bold">Latency</p>
                <p className="text-xs font-extrabold text-slate-800">14 ms (Serverless)</p>
              </div>
            </div>

            <div className="bg-white/90 rounded-xl p-3 border border-emerald-100 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-emerald-600 font-mono uppercase font-bold">SEO Rating</p>
                <p className="text-xs font-extrabold text-emerald-600">98/100 (Optimal)</p>
              </div>
            </div>
          </div>

          {/* Interactive Preview Output Console */}
          <div className="relative bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-800 min-h-[260px] font-mono text-sm leading-relaxed overflow-x-auto text-slate-100 shadow-inner">
            {isGenerating && (
              <div className="absolute top-3 right-4 flex items-center gap-2 text-xs font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/30">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-pink-400" />
                <span>Streaming Edge AI...</span>
              </div>
            )}
            <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-200">
              {displayedText}
              {isGenerating && <span className="inline-block w-2.5 h-4 ml-1 bg-pink-500 animate-pulse" />}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
