import { NextRequest, NextResponse } from 'next/server';
import { generateVideoCaptionsAndHashtags } from '@/lib/caption-generator';
import { ratelimit } from '@/lib/ratelimit';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(`cap_${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many caption requests. Please wait a moment.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { fileName, topic, platform } = body;

    const result = generateVideoCaptionsAndHashtags(fileName, topic, platform);

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to generate video captions and hashtags.' },
      { status: 500 }
    );
  }
}
