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

import { SearchModal } from './components/SearchModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { Sparkles, X, CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'studio'>('landing');
  const [studioTab, setStudioTab] = useState<StudioTab>('generator');
  
  // Modals State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [readingArticle, setReadingArticle] = useState<any | null>(null);
  const [activeModal, setActiveModal] = useState<{ title: string; message: string } | null>(null);

  // Shared State for Saved Drafts & Published Stories
  const [drafts, setDrafts] = useState<DraftItem[]>([
    {
      id: '1',
      title: 'Building Edge-Native Microservices with Serverless AI',
      type: 'Technical Architecture',
      model: 'Gemini 3.5 Flash',
      content: `## Executive Summary
Serverless edge computing empowers engineering teams to execute AI inferencing nearest to the client without managing container clusters or cold start penalties.

### Key Architectural Pillars
1. **Microsecond Edge Cold Starts**: Requests land on global Cloudflare Workers & AWS Edge locations.
2. **Real-Time Gemini AI Streaming**: Tokens stream directly back to client browsers without gateway timeouts.
3. **Automated CMS Webhooks**: Push formatted markdown to Hashnode, Dev.to, and Ghost simultaneously.

\`\`\`typescript
import { createEdgeAI } from '@aether/edge-sdk';

export default async function handler(req: Request) {
  const ai = createEdgeAI({ model: 'gemini-3.5-flash' });
  return await ai.streamResponse({ prompt: req.body.prompt });
}
\`\`\`
`,
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#171717] selection:bg-indigo-600 selection:text-white font-sans">
      
      {currentView === 'landing' ? (
        <div className="flex flex-col min-h-screen">
          {/* Top Editorial Navbar */}
          <Navbar 
            onOpenApp={handleOpenStudio}
            onOpenSearch={() => setIsSearchOpen(true)}
          />

          {/* Main Landing Sections */}
          <main className="flex-1">
            <Hero 
              onGetStarted={handleOpenStudio}
              onReadArticle={(article) => setReadingArticle(article)}
            />
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
        <div className="flex min-h-screen bg-[#FAF9F6]">
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

      {/* ⌘ K Spotlight Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(art) => setReadingArticle(art)}
        articles={drafts}
      />

      {/* Full-Screen Article Reader Experience Modal */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
        onSelectArticle={(art) => setReadingArticle(art)}
      />

      {/* Action Notification Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-7 border border-black/[0.08] shadow-2xl space-y-5">
            <button
              onClick={() => {
                setActiveModal(null);
                handleOpenStudio();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                {activeModal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModal.message}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-700 font-mono font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Creator Studio Ready
            </div>

            <button
              onClick={() => {
                setActiveModal(null);
                handleOpenStudio();
              }}
              className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
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
