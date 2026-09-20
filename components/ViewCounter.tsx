'use client';

import { useEffect, useState } from 'react';

export function ViewCounter({ slug, track = false }: { slug: string; track?: boolean }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function handleViews() {
      try {
        const method = track ? 'POST' : 'GET';
        const res = await fetch(`/api/views/${slug}`, { method });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && typeof data.views === 'number') {
          setViews(data.views);
        }
      } catch (err) {
        // Fallback silently if API is offline
      }
    }

    handleViews();

    return () => {
      isMounted = false;
    };
  }, [slug, track]);

  return (
    <span className="inline-flex items-center gap-1 text-xs text-[#5C5B57]">
      <svg
        className="h-3.5 w-3.5 text-[#86937D]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      {views !== null ? `${views.toLocaleString()} views` : '--- views'}
    </span>
  );
}
