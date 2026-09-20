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

  useEffect(() => {
    const key = localStorage.getItem('AETHER_GEMINI_API_KEY') || '';
    setApiKey(key);
  }, []);

  // Live Generation Handler using geminiService
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
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const wordCount = generatedMarkdown.trim().split(/\s+/).length;
  const tokenCount = Math.floor(wordCount * 1.3);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-pink-500" />
              AI Content Studio
            </h1>

            {/* API Key Status Pill */}
            {apiKey ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold shadow-xs">
                <Key className="w-3.5 h-3.5 text-emerald-600" /> Gemini Live API Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold shadow-xs">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Edge Demo Mode
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500">
            Configure prompt parameters, stream AI prose via Gemini, and export to your library.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveToLibrary}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 shadow-md shadow-violet-500/20 transition-all"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">Saved to Library</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save to Drafts</span>
              </>
            )}
          </button>
          
          <button
            onClick={handleDownloadMd}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200/90 hover:text-slate-900 hover:bg-slate-50 shadow-xs transition-all"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export .MD</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form Controls Column */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200 space-y-5 shadow-lg">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-600" />
              Prompt & Model Configuration
            </h2>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              Ready
            </span>
          </div>

          {/* Article Title */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-violet-600" />
              Article Title / Core Topic
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
            />
          </div>

          {/* Content Template */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Content Template</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
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
            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              Inference LLM Engine
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
            >
              <option value="Gemini 3.5 Flash">Gemini 3.5 Flash (Sub-15ms)</option>
              <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Prose & Nuance)</option>
              <option value="GPT-4o Engine">GPT-4o Engine (Reasoning)</option>
            </select>
          </div>

          {/* Target Audience Profile */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Target Audience Persona</label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
            />
          </div>

          {/* Tone Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Brand Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
            >
              <option value="Technical & Authoritative">Technical & Authoritative</option>
              <option value="Engaging & Conversational">Engaging & Conversational</option>
              <option value="Concise SEO Summary">Concise SEO Summary</option>
            </select>
          </div>

          {/* SEO Keywords Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              Target SEO Keywords (Comma Separated)
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 shadow-xs"
            />
          </div>

          {/* Web Search Grounding Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
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
                webGrounding ? 'bg-violet-600' : 'bg-slate-300'
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
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 hover:from-violet-700 hover:to-sky-600 shadow-lg shadow-violet-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Streaming Gemini AI Output...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Generate Content</span>
              </>
            )}
          </button>

        </div>

        {/* Right Column: Editor Console */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200 flex flex-col min-h-[620px] shadow-lg relative">
          
          {/* Top Metric Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SEO Score: <strong>98/100</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                <Gauge className="w-4 h-4 text-sky-600" />
                <span>Tokens: <strong>{tokenCount}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-700">
                <Zap className="w-4 h-4 text-violet-600" />
                <span>Latency: <strong>14ms</strong></span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 border border-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-violet-600" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Editor Console with High Contrast Code Box */}
          <div className="flex-1 bg-slate-900 rounded-2xl p-5 border border-slate-800 my-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-100 overflow-y-auto max-h-[480px] shadow-inner">
            <pre className="whitespace-pre-wrap font-mono">
              {generatedMarkdown}
              {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-pink-500 animate-pulse" />}
            </pre>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 font-mono pt-2 border-t border-slate-200">
            <span>Words: <strong className="text-slate-900">{wordCount}</strong></span>
            <span>Provider: <strong className="text-violet-600">Google Gen AI SDK</strong></span>
            <span>Status: <strong className="text-emerald-600">Ready to Publish</strong></span>
          </div>

        </div>

      </div>

    </div>
  );
};
