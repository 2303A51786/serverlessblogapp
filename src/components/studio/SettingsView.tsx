import React, { useState, useEffect } from 'react';
import { Settings, Key, Globe, Send, Check, ShieldCheck } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [provider, setProvider] = useState('Cloudflare Workers Edge');
  const [hashnodeToken, setHashnodeToken] = useState('');
  const [devToToken, setDevToToken] = useState('');
  const [customWebhookUrl, setCustomWebhookUrl] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem('AETHER_GEMINI_API_KEY') || '';
    const savedWebhook = localStorage.getItem('AETHER_CUSTOM_WEBHOOK') || '';
    setGeminiApiKey(savedKey);
    setCustomWebhookUrl(savedWebhook);
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('AETHER_GEMINI_API_KEY', geminiApiKey);
    localStorage.setItem('AETHER_CUSTOM_WEBHOOK', customWebhookUrl);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Settings className="w-6 h-6 text-indigo-400" />
          API & Serverless Integration Settings
        </h1>
        <p className="text-xs text-slate-400">
          Configure AI inference API credentials, serverless edge gateways, and automated webhook deployment targets.
        </p>
      </div>

      <form onSubmit={handleSaveSettings} className="space-y-6 max-w-4xl">
        
        {/* Gemini & AI Provider Settings */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h2 className="font-bold text-sm text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Key className="w-4 h-4 text-purple-400" />
            AI Provider Credentials
          </h2>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
              <span>Google Gemini API Key</span>
              <span className="text-[10px] text-indigo-400 font-mono">Stored locally in browser</span>
            </label>
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
            <p className="text-[10px] text-slate-500">
              Get your API Key from Google AI Studio. Used for live generation in Step 3.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">Serverless Edge Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
            >
              <option value="Cloudflare Workers Edge">Cloudflare Workers Edge (Sub-10ms)</option>
              <option value="AWS Lambda @ Edge">AWS Lambda @ Edge (North America / Europe)</option>
              <option value="Vercel Edge Functions">Vercel Edge Functions</option>
            </select>
          </div>
        </div>

        {/* Webhooks & Publishing Destinations */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h2 className="font-bold text-sm text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Send className="w-4 h-4 text-amber-400" />
            Automated CMS Webhooks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Hashnode Personal Token</label>
              <input
                type="password"
                value={hashnodeToken}
                onChange={(e) => setHashnodeToken(e.target.value)}
                placeholder="hn_pat_..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Dev.to API Key</label>
              <input
                type="password"
                value={devToToken}
                onChange={(e) => setDevToToken(e.target.value)}
                placeholder="api_key_..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              Custom Webhook Endpoint URL
            </label>
            <input
              type="url"
              value={customWebhookUrl}
              onChange={(e) => setCustomWebhookUrl(e.target.value)}
              placeholder="https://api.yourdomain.com/webhooks/content"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center gap-2"
        >
          {savedSuccess ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Settings Saved Successfully</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Save Integration Configuration</span>
            </>
          )}
        </button>

      </form>

    </div>
  );
};
