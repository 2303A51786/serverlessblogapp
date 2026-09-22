'use client';

import { useActionState, useState } from 'react';
import { createPostAction, PostFormState } from '@/app/actions/post-actions';

const initialState: PostFormState = {};

export default function NewPostPage() {
  const [state, formAction, isPending] = useActionState(createPostAction, initialState);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [mdxContent, setMdxContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleAIGenerate() {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: title || 'Serverless Architecture & Cloud Performance' }),
      });

      if (!res.ok) throw new Error('AI Generation failed');

      const data = await res.json();
      setTitle(data.title);
      setExcerpt(data.excerpt);
      setTags(data.tags);
      setMdxContent(data.mdxContent);
      if (!slug) {
        setSlug(data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
      }
    } catch (err) {
      // Fallback draft if API offline
      setTitle('Architecting High-Throughput Serverless Systems');
      setExcerpt('An in-depth technical exploration into building serverless edge applications with sub-10ms latency.');
      setTags('Architecture, Serverless, Next.js 15');
      setMdxContent(`## Introduction\n\nServerless architecture enables microsecond cold starts and real-time computation near users.\n\n\`\`\`typescript\nexport async function handler() {\n  return { status: "ok" };\n}\n\`\`\``);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAEAE8] pb-4 gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#1A1A1A]">Create New Article</h1>
          <p className="text-sm text-[#5C5B57] mt-1">
            Compose MDX content manually or generate with AI assistant.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAIGenerate}
          disabled={isGenerating}
          className="rounded-full border border-[#86937D] bg-[#86937D]/10 px-5 py-2.5 text-xs font-semibold text-[#86937D] hover:bg-[#86937D]/20 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
        >
          {isGenerating ? 'Drafting with AI...' : '✨ Auto-Generate AI Draft'}
        </button>
      </div>

      {state?.error && (
        <div className="rounded-lg border border-[#C28C7E] bg-[#C28C7E]/10 p-4 text-xs font-medium text-[#C28C7E]">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="rounded-lg border border-[#86937D] bg-[#86937D]/10 p-4 text-xs font-medium text-[#86937D]">
          Article published successfully! Redirecting...
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
            Article Title
          </label>
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Building Edge-Native Microservices"
            className="w-full rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] px-4 py-3 text-base text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
            Slug (URL path)
          </label>
          <input
            type="text"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="leave empty to auto-generate"
            className="w-full rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] px-4 py-2.5 text-sm text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
            Excerpt / Summary
          </label>
          <textarea
            name="excerpt"
            rows={2}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief 1-2 sentence description for feed preview..."
            className="w-full rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Architecture, Serverless, Edge"
            className="w-full rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] px-4 py-2.5 text-sm text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
            MDX Content
          </label>
          <textarea
            name="mdxContent"
            required
            rows={14}
            value={mdxContent}
            onChange={(e) => setMdxContent(e.target.value)}
            placeholder="## Introduction&#10;&#10;Write your MDX content here using markdown headers and code fences..."
            className="w-full rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] p-4 text-sm font-mono text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#EAEAE8]">
          <select
            name="status"
            className="rounded-lg border border-[#EAEAE8] bg-[#FBFBFA] px-4 py-2 text-xs font-medium text-[#1A1A1A]"
          >
            <option value="published">Status: Published</option>
            <option value="draft">Status: Draft</option>
          </select>

          <button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-[#1A1A1A] px-7 py-3 text-sm font-semibold text-[#FBFBFA] hover:bg-[#333333] disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            {isPending ? 'Publishing...' : 'Publish Article'}
          </button>
        </div>
      </form>
    </div>
  );
}
