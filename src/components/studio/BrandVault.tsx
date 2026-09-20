import React, { useState } from 'react';
import { ShieldCheck, Plus, Trash2, Check, Sparkles } from 'lucide-react';

interface VoiceProfile {
  id: string;
  name: string;
  description: string;
  targetKeywords: string[];
  bannedWords: string[];
}

export const BrandVault: React.FC = () => {
  const [profiles, setProfiles] = useState<VoiceProfile[]>([
    {
      id: '1',
      name: 'Developer Advocate & Technical Authority',
      description: 'Clear, concise, and code-first. Emphasizes serverless edge execution, architectural trade-offs, and microsecond latencies.',
      targetKeywords: ['serverless', 'edge functions', 'microservices', 'gemini api'],
      bannedWords: ['game-changer', 'revolutionary', 'synergy'],
    },
    {
      id: '2',
      name: 'Thought Leadership & SaaS Growth',
      description: 'Engaging, founder-focused tone highlighting ROI, conversion metrics, and content automation scale.',
      targetKeywords: ['content automation', 'SEO ranking', 'headless cms', 'pipeline'],
      bannedWords: ['hacks', 'cheap', 'easy money'],
    },
  ]);

  const [newProfileName, setNewProfileName] = useState('');
  const [newProfileDesc, setNewProfileDesc] = useState('');
  const [newKeywords, setNewKeywords] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProfileName) return;

    const newProfile: VoiceProfile = {
      id: Date.now().toString(),
      name: newProfileName,
      description: newProfileDesc,
      targetKeywords: newKeywords.split(',').map((k) => k.trim()).filter(Boolean),
      bannedWords: [],
    };

    setProfiles([...profiles, newProfile]);
    setNewProfileName('');
    setNewProfileDesc('');
    setNewKeywords('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleDeleteProfile = (id: string) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          Brand Tone & SEO Guardrails Vault
        </h1>
        <p className="text-xs text-slate-400">
          Save brand voice profiles and SEO keyword rule sets to automatically inject into edge AI generation context.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Create New Voice Profile */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h2 className="font-bold text-sm text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Plus className="w-4 h-4 text-indigo-400" />
            Add New Voice Profile
          </h2>

          <form onSubmit={handleAddProfile} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Profile Name</label>
              <input
                type="text"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                placeholder="e.g. Engineering Lead Persona"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Tone & Guidelines</label>
              <textarea
                value={newProfileDesc}
                onChange={(e) => setNewProfileDesc(e.target.value)}
                placeholder="Describe writing style rules, target reading grade..."
                rows={3}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Required Target Keywords</label>
              <input
                type="text"
                value={newKeywords}
                onChange={(e) => setNewKeywords(e.target.value)}
                placeholder="serverless, edge, nextjs (comma separated)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Profile Saved</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Save Voice Profile</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Existing Vault Profiles */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-bold text-sm text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Active Brand Profiles ({profiles.length})
          </h2>

          <div className="space-y-4">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {profile.name}
                  </h3>
                  <button
                    onClick={() => handleDeleteProfile(profile.id)}
                    className="text-slate-500 hover:text-rose-400 p-1 rounded"
                    title="Remove Profile"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {profile.description}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {profile.targetKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-mono"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
