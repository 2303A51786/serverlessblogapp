'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage('Thank you for subscribing! Check your inbox soon.');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
      <div className="relative w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          disabled={status === 'loading' || status === 'success'}
          className="w-full rounded-full border border-[#EAEAE8] bg-[#FBFBFA] px-5 py-3 text-sm text-[#1A1A1A] placeholder-[#86937D] focus:border-[#86937D] focus:outline-none transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full sm:w-auto rounded-full bg-[#1A1A1A] px-7 py-3 text-sm font-medium text-[#FBFBFA] hover:bg-[#333333] disabled:opacity-50 transition-colors whitespace-nowrap cursor-pointer"
      >
        {status === 'loading' ? 'Joining...' : status === 'success' ? 'Subscribed' : 'Join Digest'}
      </button>

      {message && (
        <p className={`w-full text-xs mt-2 ${status === 'error' ? 'text-[#C28C7E]' : 'text-[#86937D]'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
