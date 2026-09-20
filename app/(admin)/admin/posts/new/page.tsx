'use client';

import { useActionState } from 'react';
import { createPostAction, PostFormState } from '@/app/actions/post-actions';

const initialState: PostFormState = {};

export default function NewPostPage() {
  const [state, formAction, isPending] = useActionState(createPostAction, initialState);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="border-b border-[#EAEAE8] pb-4">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A]">Create New Article</h1>
        <p className="text-sm text-[#5C5B57] mt-1">
          Compose MDX content with code blocks, headings, and quotes.
        </p>
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
