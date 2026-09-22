export interface VideoCaptionResult {
  captions: {
    hook: string;
    editorial: string;
    cta: string;
  };
  hashtags: {
    highVolume: string[];
    niche: string[];
    viral: string[];
  };
  analytics: {
    reachScore: number;
    engagementLevel: 'High' | 'Very High' | 'Viral Potential';
    bestPostTime: string;
    targetAudience: string;
    keywords: string[];
  };
}

export function generateVideoCaptionsAndHashtags(
  fileName?: string,
  topic?: string,
  platform: string = 'general'
): VideoCaptionResult {
  const baseContext = topic || fileName?.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') || 'Modern Tech & Cloud Architecture';

  const keywords = baseContext
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .concat(['serverless', 'tech', 'innovation', 'engineering', 'future']);

  const uniqueKeywords = Array.from(new Set(keywords)).slice(0, 6);

  // Platform specific caption tuning
  let hook = `Stop scrolling if you care about modern ${uniqueKeywords[0] || 'tech'} 🚀`;
  let editorial = `Here is a deep dive into ${baseContext}. Building at scale requires moving away from legacy monoliths and embracing high-performance edge architectures.`;
  let cta = `💡 Want more deep technical insights? Tap the link in bio to read the full essay on Aether!`;

  if (platform === 'reels' || platform === 'tiktok') {
    hook = `This 1 trick changed how we build ${uniqueKeywords[0] || 'cloud'} systems forever ⚡️ #shorts`;
    editorial = `Breaking down ${baseContext} in 30 seconds! Here is what every engineer needs to know today.`;
    cta = `Drop a 💬 below if you agree or save this video for your next build!`;
  } else if (platform === 'linkedin') {
    hook = `The future of modern engineering isn't just speed — it's serverless simplicity. Here is why ${baseContext} matters today:`;
    editorial = `In this video, I explore ${baseContext}. Key takeaways:\n\n1. Sub-10ms latency at the edge.\n2. Zero idle infrastructure overhead.\n3. Frictionless developer experience.`;
    cta = `What is your team's approach to edge infrastructure? Let's discuss in the comments!`;
  }

  // Generate category hashtags based on topic
  const highVolume = [
    `#${uniqueKeywords[0] || 'tech'}`,
    `#${uniqueKeywords[1] || 'coding'}`,
    '#softwareengineering',
    '#technology',
    '#developer',
    '#viral',
  ];

  const niche = [
    '#serverless',
    '#cloudarchitecture',
    '#nextjs15',
    '#edgecomputing',
    '#webdev',
    `#${uniqueKeywords[2] || 'fullstack'}`,
  ];

  const viral = [
    '#techtok',
    '#codehumor',
    '#buildinpublic',
    '#devcommunity',
    '#engineeringlife',
  ];

  return {
    captions: {
      hook,
      editorial,
      cta,
    },
    hashtags: {
      highVolume,
      niche,
      viral,
    },
    analytics: {
      reachScore: Math.floor(Math.random() * 8) + 92, // 92% - 99%
      engagementLevel: 'Viral Potential',
      bestPostTime: 'Tue & Thu at 10:00 AM (EST)',
      targetAudience: 'Senior Engineers, Tech Leads, Cloud Architects',
      keywords: uniqueKeywords,
    },
  };
}
