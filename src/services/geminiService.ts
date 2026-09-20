import { GoogleGenAI } from '@google/genai';

export interface GenerateContentParams {
  title: string;
  contentType: string;
  audience: string;
  tone: string;
  keywords: string;
  model: string;
  webGrounding: boolean;
  apiKey?: string;
  onChunk: (chunk: string) => void;
}

export async function streamGeminiContent(params: GenerateContentParams): Promise<string> {
  const { title, contentType, audience, tone, keywords, model, webGrounding, apiKey, onChunk } = params;
  const effectiveKey = apiKey || localStorage.getItem('AETHER_GEMINI_API_KEY') || '';

  // If a valid key exists, run live Google Gen AI API call
  if (effectiveKey && effectiveKey.trim().length > 5) {
    try {
      const ai = new GoogleGenAI({ apiKey: effectiveKey.trim() });
      const geminiModel = model.includes('Pro') ? 'gemini-2.5-pro' : 'gemini-2.5-flash';

      const promptText = `Write a high-quality ${contentType} about "${title}".
Target Audience: ${audience}
Writing Tone: ${tone}
Required SEO Keywords: ${keywords}
Web Search Grounding Enabled: ${webGrounding}

Formatting Requirements:
- Use clean Markdown headers (##, ###), bullet points, and code snippets where appropriate.
- Ensure 95%+ SEO readiness and clear technical explanations.`;

      const responseStream = await ai.models.generateContentStream({
        model: geminiModel,
        contents: promptText,
        config: {
          temperature: 0.7,
        },
      });

      let fullText = '';
      for await (const chunk of responseStream) {
        const text = chunk.text || '';
        fullText += text;
        onChunk(fullText);
      }
      return fullText;
    } catch (err: any) {
      console.warn('Gemini API call warning/fallback:', err);
      // Fallback gracefully if API key error occurs
    }
  }

  // Graceful Demo Streaming Engine when no API Key is provided
  const fallbackTemplate = `# ${title}

> ⚡ **Aether Edge Engine (Demo Mode)** | Model: ${model} | Target: ${audience} | Search Grounding: ${webGrounding ? 'Active' : 'Disabled'}

---

## Executive Overview
Deploying modern serverless architectures with **${model}** requires microsecond execution boundaries, zero cold starts, and automated content pipelines.

### Primary SEO Keywords Integrated
- \`${keywords}\`

### Core Architectural Blueprint
1. **Edge Ingress**: Route HTTP webhooks directly to edge worker nodes.
2. **Prompt Sanitizer**: Apply tone guardrails (\`${tone}\`) and brand rules.
3. **Chunked Stream**: Stream markdown tokens directly to headless CMS destinations.

\`\`\`typescript
// Serverless Edge AI Handler
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  return await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
}
\`\`\`

### Summary
By eliminating idle server overhead, your content pipeline scales automatically from 1 to 100,000 invocations with sub-15ms cold start guarantees.
`;

  let accumulated = '';
  let currentPos = 0;
  const chunkSize = 16;

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      currentPos += chunkSize;
      if (currentPos >= fallbackTemplate.length) {
        accumulated = fallbackTemplate;
        onChunk(accumulated);
        clearInterval(interval);
        resolve(accumulated);
      } else {
        accumulated = fallbackTemplate.slice(0, currentPos);
        onChunk(accumulated);
      }
    }, 20);
  });
}
