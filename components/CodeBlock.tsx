'use client';

import { useState } from 'react';

export function CodeBlock({ children, language }: { children: React.ReactNode; language?: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const text = typeof children === 'string' ? children : String(children);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group my-6 overflow-hidden rounded-xl border border-[#EAEAE8] bg-[#1A1A1A]">
      <div className="flex items-center justify-between border-b border-[#333333] bg-[#222222] px-4 py-2 text-xs text-[#EAEAE8]">
        <span className="font-mono text-[11px] uppercase text-[#86937D]">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="rounded-md border border-[#444444] bg-[#2B2B2B] px-2.5 py-1 text-[11px] text-[#F4F3F0] hover:bg-[#3A3A3A] transition-colors cursor-pointer"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-[#F4F3F0] overflow-x-auto leading-relaxed">
        {children}
      </pre>
    </div>
  );
}
