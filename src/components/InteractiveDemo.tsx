import React, { useState } from 'react';
import { Sparkles, Sliders, Play, Copy, Check, FileText, Zap, Tag, Bot } from 'lucide-react';

export const InteractiveDemo: React.FC<{ onLaunchApp?: () => void }> = ({ onLaunchApp }) => {
  const [topic, setTopic] = useState('Building a Serverless RAG Application with Gemini');
  const [audience, setAudience] = useState('Full Stack Engineers & Cloud Architects');
  const [tone, setTone] = useState('Technical & Authoritative');
  const [model, setModel] = useState('Gemini 3.5 Flash');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState(`## Executive Summary
Serverless Retrieval-Augmented Generation (RAG) allows engineers to query enterprise knowledge bases without maintaining dedicated vector server infrastructure.

### Architecture Highlights
- **Ingestion**: Document chunks are stored in serverless vector databases (Pinecone / Supabase Vector).
- **Embedding Generation**: Gemini Text-Embedding API computes dense vector representations on demand.
- **Context Injection**: Edge functions stream grounded prompts to Gemini 3.5 Flash.

\`\`\`typescript
// Edge Function Serverless Handler
import { GoogleGenerativeAI } from '@google/generative-ai';

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
export async function POST(req: Request) {
  const { query } = await req.json();
  const context = fontVectorSearch(query);
  const model = ai.getGenerativeModel({ model: "gemini-3.5-flash" });
  return model.generateContentStream([context, query]);
}
\`\`\`
`);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedOutput("");

    const mockResult = `# ${topic}

*Target Audience: ${audience}* | *Tone: ${tone}* | *Engine: ${model}*

---

### Introduction
In modern software engineering, deploying content pipelines requires high throughput, minimal overhead, and instant scaling. By marrying **Serverless Edge Microservices** with **${model}**, engineering teams can automate content creation with microsecond execution speed.

### Core Implementation Steps
1. **Define Schema**: Establish standard metadata tags (title, slug, keywords, canonical URLs).
2. **Execute Edge Function**: Trigger serverless worker with context payload.
3. **Parse & Format**: Transform raw LLM streaming buffers into clean Markdown.
4. **Publish**: Webhook push to headless CMS targets.

\`\`\`json
{
  "status": "success",
  "topic": "${topic}",
  "tokens_processed": 1420,
  "execution_time_ms": 16.4
}
\`\`\`
`;

    let currentLength = 0;
    const timer = setInterval(() => {
      currentLength += 12;
      if (currentLength >= mockResult.length) {
        setGeneratedOutput(mockResult);
        setIsGenerating(false);
        clearInterval(timer);
      } else {
        setGeneratedOutput(mockResult.slice(0, currentLength));
      }
    }, 25);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            Interactive Studio Playground
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test the Generation Engine <span className="text-gradient-purple-cyan">Live</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Customize topic inputs, target audience personas, and model parameters to see instant output.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Configuration Form */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                Prompt Parameters
              </h3>
              <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-mono">
                Serverless Ready
              </span>
            </div>

            {/* Topic Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                Content Topic or Prompt
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Enter topic or title..."
              />
            </div>

            {/* Target Audience Profile */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-purple-400" />
                Target Audience Profile
              </label>
              <input
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="e.g. Senior Developers, Founders"
              />
            </div>

            {/* Tone Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Writing Tone & Persona</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="Technical & Authoritative">Technical & Authoritative</option>
                <option value="Developer-Focused & Engaging">Developer-Focused & Engaging</option>
                <option value="Casual & Thought Leadership">Casual & Thought Leadership</option>
                <option value="SEO Concise Brief">SEO Concise Brief</option>
              </select>
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                AI Inference Engine
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="Gemini 3.5 Flash">Gemini 3.5 Flash (Sub-15ms)</option>
                <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Deep Prose)</option>
                <option value="GPT-4o Engine">GPT-4o Engine (Reasoning)</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-3">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin" />
                    Generating via Edge Function...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    Run AI Edge Pipeline
                  </>
                )}
              </button>

              <button
                onClick={onLaunchApp}
                className="w-full py-2.5 rounded-xl font-medium text-xs text-slate-300 bg-slate-950 border border-slate-800 hover:text-white hover:bg-slate-900 transition-all"
              >
                Open Full Studio App →
              </button>
            </div>
          </div>

          {/* Right Panel: Output Console */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col h-[520px] shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-semibold text-sm text-white">Streamed Markdown Output</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-xs text-slate-300 border border-slate-800 hover:text-white"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Output Display Area */}
            <div className="flex-1 bg-slate-950/90 rounded-xl p-5 border border-slate-800/80 my-3 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
              <pre className="whitespace-pre-wrap font-mono">
                {generatedOutput}
                {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-indigo-400 animate-pulse" />}
              </pre>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
              <span>Status: <strong className="text-emerald-400">STREAM_COMPLETE</strong></span>
              <span>Words: <strong className="text-slate-200">{generatedOutput.split(/\s+/).length}</strong></span>
              <span>Latency: <strong className="text-indigo-400">14ms</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
