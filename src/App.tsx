import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ArchitectureSection } from './components/ArchitectureSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

import { StudioSidebar, type StudioTab } from './components/studio/StudioSidebar';
import { ContentGenerator, type DraftItem } from './components/studio/ContentGenerator';
import { ContentLibrary } from './components/studio/ContentLibrary';
import { BrandVault } from './components/studio/BrandVault';
import { SettingsView } from './components/studio/SettingsView';

import { Sparkles, X, CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'studio'>('landing');
  const [studioTab, setStudioTab] = useState<StudioTab>('generator');
  const [activeModal, setActiveModal] = useState<{ title: string; message: string } | null>(null);

  // Shared State for Saved Drafts
  const [drafts, setDrafts] = useState<DraftItem[]>([
    {
      id: '1',
      title: 'Building Edge-Native Microservices with Serverless AI',
      type: 'Technical Guide',
      model: 'Gemini 3.5 Flash',
      content: `## Executive Summary\nServerless edge computing empowers engineering teams to execute AI inferencing nearest to the client without managing container clusters or cold start penalties.`,
      wordCount: 380,
      seoScore: 98,
      status: 'Ready to Publish',
      createdAt: '2026-09-20',
    },
    {
      id: '2',
      title: 'Comparing Serverless Cold Starts Across AWS Lambda vs Cloudflare Workers',
      type: 'Deep-Dive Blog Post',
      model: 'Claude 3.5 Sonnet',
      content: `# Serverless Cold Start Benchmarks 2026\n\n### Overview\nCold start latency directly impacts conversion rates on developer platforms...`,
      wordCount: 650,
      seoScore: 95,
      status: 'Draft',
      createdAt: '2026-09-19',
    },
  ]);

  const handleOpenStudio = () => {
    setCurrentView('studio');
    setStudioTab('generator');
  };

  const handleSelectPlan = (planName: string) => {
    setActiveModal({
      title: `${planName} Plan Selected`,
      message: `You selected the ${planName} Plan! Opening the Creator Studio Workspace.`
    });
  };

  const handleSaveDraft = (newDraft: Omit<DraftItem, 'id' | 'createdAt'>) => {
    const item: DraftItem = {
      ...newDraft,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setDrafts([item, ...drafts]);
  };

  const handleDeleteDraft = (id: string) => {
    setDrafts(drafts.filter((d) => d.id !== id));
  };

  const handleOpenDraftInGenerator = (_draft: DraftItem) => {
    setStudioTab('generator');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans">
      
      {currentView === 'landing' ? (
        <div className="flex flex-col min-h-screen">
          {/* Top Navbar */}
          <Navbar onOpenApp={handleOpenStudio} />

          {/* Main Landing Sections */}
          <main className="flex-1">
            <Hero onGetStarted={handleOpenStudio} />
            <FeatureGrid />
            <InteractiveDemo onLaunchApp={handleOpenStudio} />
            <ArchitectureSection />
            <Pricing onSelectPlan={handleSelectPlan} />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      ) : (
        /* Creator Studio Workspace View */
        <div className="flex min-h-screen bg-[#07090e]">
          <StudioSidebar
            activeTab={studioTab}
            onSelectTab={setStudioTab}
            onBackToLanding={() => setCurrentView('landing')}
            savedDraftsCount={drafts.length}
          />

          <main className="flex-1 overflow-y-auto">
            {studioTab === 'generator' && (
              <ContentGenerator onSaveDraft={handleSaveDraft} />
            )}
            {studioTab === 'library' && (
              <ContentLibrary
                drafts={drafts}
                onOpenDraftInGenerator={handleOpenDraftInGenerator}
                onDeleteDraft={handleDeleteDraft}
              />
            )}
            {studioTab === 'vault' && <BrandVault />}
            {studioTab === 'settings' && <SettingsView />}
          </main>
        </div>
      )}

      {/* Action Notification Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md glass-card rounded-2xl p-6 border border-indigo-500/40 shadow-2xl glow-indigo space-y-4">
            <button
              onClick={() => {
                setActiveModal(null);
                handleOpenStudio();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {activeModal.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModal.message}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <CheckCircle2 className="w-4 h-4" /> Creator Studio Workspace Ready
            </div>

            <button
              onClick={() => {
                setActiveModal(null);
                handleOpenStudio();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all"
            >
              Enter Studio Workspace →
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
