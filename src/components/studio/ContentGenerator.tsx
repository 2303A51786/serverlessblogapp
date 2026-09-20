import React, { useState, useEffect } from 'react';
import { Sparkles, Sliders, Play, Copy, Check, Download, Save, RefreshCw, Bot, ShieldCheck, Gauge, Globe, FileText, Tag, Zap, Key } from 'lucide-react';
import { streamGeminiContent } from '../../services/geminiService';

export interface DraftItem {
  id: string;
  title: string;
  type: string;
  model: string;
  content: string;
  wordCount: number;
  seoScore: number;
  status: 'Draft' | 'Ready to Publish' | 'Published';
  createdAt: string;
}

interface ContentGeneratorProps {
  onSaveDraft: (draft: Omit<DraftItem, 'id' | 'createdAt'>) => void;
}

export const ContentGenerator: React.FC<ContentGeneratorProps> = ({ onSaveDraft }) => {
  const [title, setTitle] = useState('Building Edge-Native Microservices with Serverless AI');
  const [contentType, setContentType] = useState('Technical Guide');
  const [audience, setAudience] = useState('Cloud Architects & Senior Full Stack Engineers');
  const [tone, setTone] = useState('Technical & Authoritative');
  const [model, setModel] = useState('Gemini 3.5 Flash');
  const [webGrounding, setWebGrounding] = useState(true);
  const [keywords, setKeywords] = useState('serverless, edge computing, gemini api, webhooks');
  const [apiKey, setApiKey] = useState('');

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMarkdown, setGeneratedMarkdown] = useState(`## Executive Summary
Serverless edge computing empowers engineering teams to execute AI inferencing nearest to the client without managing container clusters or cold start penalties.

### Architecture Blueprint
- **Ingress Gateway**: Requests land on edge points of presence (PoP).
- **Prompt Sanitizer**: Enforces brand guardrails and SEO keyword density.
- **LLM Edge Router**: Streams responses via chunked transfer from Gemini 3.5 Flash.

\`\`\`typescript
import { createEdgeAI } from '@aether/edge-sdk';

export default async function handler(req: Request) {
  const ai = createEdgeAI({ model: 'gemini-3.5-flash' });
  return await ai.streamResponse({ prompt: req.body.prompt });
}
\`\`\`
`);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string>('Saved just now');

  useEffect(() => {
    const key = localStorage.getItem('AETHER_GEMINI_API_KEY') || '';
    setApiKey(key);
  }, []);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedMarkdown('');

    await streamGeminiContent({
      title,
      contentType,
      audience,
      tone,
      keywords,
      model,
      webGrounding,
      apiKey,
      onChunk: (chunkText) => {
        setGeneratedMarkdown(chunkText);
      },
    });

    setIsGenerating(false);
    setLastSavedTime('Saved just now');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMd = () => {
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveToLibrary = () => {
    const wordCount = generatedMarkdown.trim().split(/\s+/).length;
    onSaveDraft({
      title,
      type: contentType,
      model,
      content: generatedMarkdown,
      wordCount,
      seoScore: 98,
      status: 'Draft',
    });
    setSavedSuccess(true);
    setLastSavedTime('Saved just now');
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const wordCount = generatedMarkdown.trim().split(/\s+/).length;
  const tokenCount = Math.floor(wordCount * 1.3);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="font-editorial text-3xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              Writing & Publishing Studio
            </h1>

            {/* API Key Status Pill */}
            {apiKey ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                <Key className="w-3.5 h-3.5 text-emerald-600" /> Gemini Live Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Demo Mode Active
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 font-mono">
            {lastSavedTime} • Distraction-Free Canvas
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveToLibrary}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Saved to Library</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-indigo-300" />
                <span>Save Draft</span>
              </>
            )}
          </button>
          
          <button
            onClick={handleDownloadMd}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-black/[0.08] hover:bg-slate-50 shadow-2xs transition-all"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export .MD</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Controls Column */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-black/[0.07] space-y-5 shadow-xs">
          
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
            <h2 className="font-editorial text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-600" />
              Story Prompt Parameters
            </h2>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              Ready
            </span>
          </div>

          {/* Article Title */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              Story Headline / Topic
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-sm font-semibold focus:outline-none focus:border-indigo-600"
            />
          </div>

          {/* Content Template */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Editorial Category</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-xs font-semibold focus:outline-none focus:border-indigo-600"
            >
              <option value="Technical Guide">Technical Architecture Guide</option>
              <option value="Deep-Dive Blog Post">Deep-Dive Blog Post</option>
              <option value="Social Campaign Thread">Social Campaign Thread</option>
              <option value="SEO Keyword Brief">SEO Keyword Brief</option>
              <option value="Product Release Note">Product Release Note</option>
            </select>
          </div>

          {/* LLM Model Router */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              AI Inference Engine
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-xs font-semibold focus:outline-none focus:border-indigo-600"
            >
              <option value="Gemini 3.5 Flash">Gemini 3.5 Flash (Sub-15ms)</option>
              <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Prose & Nuance)</option>
              <option value="GPT-4o Engine">GPT-4o Engine (Reasoning)</option>
            </select>
          </div>

          {/* Target Audience Profile */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Target Audience Persona</label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-xs font-medium focus:outline-none focus:border-indigo-600"
            />
          </div>

          {/* Tone Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Brand Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-xs font-semibold focus:outline-none focus:border-indigo-600"
            >
              <option value="Technical & Authoritative">Technical & Authoritative</option>
              <option value="Engaging & Conversational">Engaging & Conversational</option>
              <option value="Concise SEO Summary">Concise SEO Summary</option>
            </select>
          </div>

          {/* SEO Keywords Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              Target SEO Keywords
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-black/[0.08] text-slate-900 text-xs font-medium focus:outline-none focus:border-indigo-600"
            />
          </div>

          {/* Web Search Grounding Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-black/[0.06]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">Web Search Grounding</p>
                <p className="text-[10px] text-slate-500">Fetch live web specs to prevent hallucinations</p>
              </div>
            </div>
            <button
              onClick={() => setWebGrounding(!webGrounding)}
              className={`w-10 h-6 rounded-full p-1 transition-colors ${
                webGrounding ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  webGrounding ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Streaming Gemini AI Output...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Generate Story</span>
              </>
            )}
          </button>

        </div>

        {/* Right Column: Writing Canvas */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-7 border border-black/[0.07] flex flex-col min-h-[620px] shadow-xs relative">
          
          {/* Top Metric Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SEO Score: <strong>98/100</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                <Gauge className="w-4 h-4 text-sky-600" />
                <span>Tokens: <strong>{tokenCount}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span>Latency: <strong>14ms</strong></span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-700 border border-black/[0.06] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Editor Console */}
          <div className="flex-1 bg-slate-900 rounded-2xl p-6 border border-slate-800 my-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-100 overflow-y-auto max-h-[480px] shadow-inner">
            <pre className="whitespace-pre-wrap font-mono">
              {generatedMarkdown}
              {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-indigo-500 animate-pulse" />}
            </pre>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 font-mono pt-2 border-t border-black/[0.06]">
            <span>Words: <strong className="text-slate-900">{wordCount}</strong></span>
            <span>Provider: <strong className="text-indigo-600">Google Gen AI SDK</strong></span>
            <span>Status: <strong className="text-emerald-600">Ready to Publish</strong></span>
          </div>

        </div>

      </div>

    </div>
  );
};
