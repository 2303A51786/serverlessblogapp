import { NextRequest, NextResponse } from 'next/server';
import { ratelimit } from '@/lib/ratelimit';

export const config = {
  matcher: '/api/:path*',
};

export async function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(`mw_${ip}`);

    if (!success) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please slow down.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          },
        }
      );
    }

    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', limit.toString());
    response.headers.set('X-RateLimit-Remaining', remaining.toString());
    response.headers.set('X-RateLimit-Reset', reset.toString());

    return response;
  } catch (err) {
    // If rate limiter fails, allow request through gracefully
    return NextResponse.next();
  }
}
