import { NextRequest, NextResponse } from 'next/server';
import { ratelimit } from '@/lib/ratelimit';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(`gen_post_${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many post generation requests. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { topic } = body;

    const baseTopic = topic || 'Building Edge-Native Microservices with Serverless AI';

    const title = `Architecting ${baseTopic}: A Comprehensive Engineering Guide`;
    const excerpt = `An in-depth technical exploration into building high-availability serverless systems for ${baseTopic.toLowerCase()} with microsecond cold-start latency.`;

    const mdxContent = `## Executive Architecture Summary

Modern cloud infrastructure demands sub-10ms latency and zero idle compute overhead. In this essay, we break down how to implement ${baseTopic} using Next.js 15 App Router, Neon Serverless Postgres, and Upstash Redis.

### Key Performance Benchmarks

1. **Sub-10ms Cold Starts**: Executing code nearest to users on Vercel Edge.
2. **Stateless Database Connectivity**: Using HTTP-based drivers (\`@neondatabase/serverless\`) to eliminate TCP connection limits.
3. **Automated Rate Limiting**: Sliding-window rate limiters executed in edge middleware.

\`\`\`typescript
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Zero connection pool overhead HTTP driver
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
\`\`\`

> "Architecture is not about making things complicated; it is about finding the simplest path to execution at scale."

### Implementation Checklist
- Configure global edge ingress endpoints.
- Enforce sliding-window rate limits at edge middleware routers.
- Implement incremental static regeneration (ISR) with tag revalidation.
`;

    const tags = ['Architecture', 'Serverless', 'AI Edge', 'Next.js 15'];

    return NextResponse.json({
      title,
      excerpt,
      mdxContent,
      tags: tags.join(', '),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to generate AI post content.' },
      { status: 500 }
    );
  }
}
