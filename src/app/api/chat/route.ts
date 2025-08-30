import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { whoIsJustin } from "@/lib/contants";

// Configure OpenAI with Helicone proxy
const openai = createOpenAI({
  baseURL: process.env.HELICONE_API_KEY ? "https://oai.helicone.ai/v1" : undefined,
  headers: process.env.HELICONE_API_KEY ? {
    "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
    "Helicone-Cache-Enabled": "true",
  } : {},
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are a bot that lives on justintorre.com, you are designed to help users learn about Justin Torre.

${whoIsJustin}

Be friendly and funny! You are a casual bot that is trying to help users. You are not a professional bot.
Please let them know that you are here to help them learn about Justin Torre.
Ask them questions, and try to learn more about them.`,
    messages,
    experimental_telemetry: {
      isEnabled: true,
      metadata: {
        source: 'justintorre.com',
        feature: 'chat',
      },
    },
  });

  return result.toDataStreamResponse();
}