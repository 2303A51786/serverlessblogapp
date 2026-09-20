import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Tradeoff Note: We use Upstash Redis REST API with sliding window rate limiting.
// In local/fallback environments without REST credentials, we provide an in-memory fallback pass-through.
const hasUpstashConfig =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

export const ratelimit = hasUpstashConfig
  ? new Ratelimit({
      redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      }),
      limiter: Ratelimit.slidingWindow(10, '10 s'),
      analytics: true,
    })
  : {
      limit: async (_identifier: string) => ({
        success: true,
        limit: 10,
        remaining: 9,
        reset: Date.now() + 10000,
      }),
    };

