import { unstable_cache } from 'next/cache';
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

// Tradeoff Note: We support both DB-stored MDX posts and static fallback MDX content.
// `unstable_cache` with `revalidateTag('posts')` handles ISR on Edge/Vercel.

export interface PostMetaData {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  tags: string[];
  readingTime: string;
  isFeatured?: boolean;
}

export interface PostDetail extends PostMetaData {
  content: string;
}

const SAMPLE_POSTS: PostDetail[] = [
  {
    slug: 'building-edge-native-microservices-with-serverless-ai',
    title: 'Building Edge-Native Microservices with Serverless AI',
    excerpt: 'Discover how modern engineering teams marry serverless edge functions with Gemini AI streaming pipelines to execute microsecond inferencing nearest to the user.',
    publishedAt: '2026-09-20',
    author: {
      name: 'Chaitra Reddy',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    },
    tags: ['Architecture', 'Serverless', 'AI Edge'],
    readingTime: '4 min read',
    isFeatured: true,
    content: `## The Next Evolution of Serverless Edge Computation

Serverless architecture has evolved beyond simple request-reply Lambdas. Modern edge computing enables microsecond cold starts and real-time AI inference at scale without managing container clusters.

### Key Architectural Benefits
1. **Sub-10ms Cold Starts**: Code runs directly at edge locations nearest to your user base.
2. **Zero Idle Infrastructure Costs**: Scale automatically from zero to millions of invocations.
3. **Direct AI Streaming**: Real-time HTTP Chunked transfer from Gemini 3.5 & Claude APIs.

\`\`\`typescript
import { createServerlessAI } from '@aether/sdk';

export default async function handler(req: Request) {
  const ai = createServerlessAI({ model: 'gemini-3.5-flash' });
  return await ai.streamContent({ prompt: req.body.prompt });
}
\`\`\`

> "Architecture is not about making things complicated; it is about finding the simplest path to execution at scale."

### Implementation Checklist
- Configure global edge ingress endpoints.
- Enforce rate-limiting middleware at edge routers.
- Cache MDX content tags via ISR revalidation.
`,
  },
  {
    slug: 'comparing-serverless-cold-starts-2026',
    title: 'Comparing Serverless Cold Starts: AWS Lambda vs Cloudflare Workers',
    excerpt: 'An empirical benchmark analyzing cold start latency distributions across edge execution providers in high-throughput environments.',
    publishedAt: '2026-09-18',
    author: {
      name: 'Chaitra Reddy',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    },
    tags: ['Performance', 'Cloud'],
    readingTime: '6 min read',
    isFeatured: false,
    content: `## Empirical Benchmark Setup

In high-concurrency cloud platforms, cold start latency directly influences conversion metrics. We ran 100,000 requests across global POP locations.

### Results Overview
- Cloudflare Workers: 4.2ms median latency
- AWS Lambda Edge: 14.8ms median latency
- Vercel Edge Functions: 8.1ms median latency
`,
  },
  {
    slug: 'seo-content-strategy-for-developer-tooling',
    title: 'SEO & Content Engine Strategy for Developer Platforms',
    excerpt: 'How to structure high-density technical articles that rank organically while remaining genuinely valuable to senior engineers.',
    publishedAt: '2026-09-15',
    author: {
      name: 'Chaitra Reddy',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    },
    tags: ['SEO', 'Growth'],
    readingTime: '5 min read',
    isFeatured: false,
    content: `## Write for Engineers First, Search Engines Second

Developer audiences possess high sensitivity to fluff. Technical articles must offer runnable code samples, architecture diagrams, and honest benchmarks.
`,
  },
];

export const getCachedPosts = unstable_cache(
  async (): Promise<PostMetaData[]> => {
    return SAMPLE_POSTS.map(({ content, ...meta }) => meta);
  },
  ['all-posts-cache-key'],
  { revalidate: 3600, tags: ['posts'] }
);

export const getCachedPostBySlug = unstable_cache(
  async (slug: string): Promise<PostDetail | null> => {
    const post = SAMPLE_POSTS.find((p) => p.slug === slug);
    return post || null;
  },
  ['post-detail-cache-key'],
  { revalidate: 3600, tags: ['posts'] }
);

export async function renderMDX(source: string) {
  const { content } = matter(source);
  const compiled = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });
  return compiled.content;
}
