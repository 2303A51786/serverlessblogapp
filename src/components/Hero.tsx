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
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-sky-500/20 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner shadow-indigo-500/10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 absolute" />
            <span className="text-xs font-semibold text-slate-200 tracking-wide pl-2">
              Next-Gen Serverless AI Content Platform
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs font-medium text-indigo-400 flex items-center gap-1">
              Gemini & LLM Pipelines <Sparkles className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Craft, Scale & Publish Content with{" "}
            <span className="text-gradient-purple-cyan drop-shadow-sm">
              Serverless AI Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Generate SEO-optimized articles, social campaigns, and documentation in milliseconds. Built on serverless edge functions with zero cold starts.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              Start Generating Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#architecture"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              View Architecture
            </a>
          </div>

          {/* Feature Highlights Pill Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sub-15ms Cold Starts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Multi-Model Routing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Headless CMS Sync</span>
            </div>
          </div>
        </div>

        {/* Live Studio Mock Widget */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl glass-card border border-slate-800/90 p-2 sm:p-4 shadow-2xl shadow-slate-950/80 glow-indigo">
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-950/80 rounded-xl border border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-indigo-400" />
                Aether Edge AI Studio
              </span>
            </div>

            {/* Presets Selection Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {PROMPT_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    selectedPresetIndex === idx
                      ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-indigo-300" />
                  {preset.type}
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Content</span>
                </>
              )}
            </button>
          </div>

          {/* Model Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 px-2">
            <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/50 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase">Active Model</p>
                <p className="text-xs font-semibold text-slate-200">{currentPreset.model}</p>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/50 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-sky-400" />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase">Generation Speed</p>
                <p className="text-xs font-semibold text-slate-200">{tokensPerSec} tokens/sec</p>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/50 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase">Latency</p>
                <p className="text-xs font-semibold text-slate-200">14 ms (Serverless)</p>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase">SEO Rating</p>
                <p className="text-xs font-semibold text-emerald-400">98/100 (Optimal)</p>
              </div>
            </div>
          </div>

          {/* Interactive Preview Output Console */}
          <div className="relative bg-slate-950/90 rounded-xl p-4 sm:p-6 border border-slate-800/80 min-h-[260px] font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
            {isGenerating && (
              <div className="absolute top-3 right-4 flex items-center gap-2 text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Streaming Edge AI...</span>
              </div>
            )}
            <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-200">
              {displayedText}
              {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-indigo-400 animate-pulse" />}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
