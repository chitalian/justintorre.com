import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { whoIsJustin } from "@/lib/contants";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-3.5-turbo'),
    system: `You are a bot that lives on justintorre.com, you are designed to help users learn about Justin Torre.

${whoIsJustin}

Be friendly and funny! You are a casual bot that is trying to help users. You are not a professional bot.
Please let them know that you are here to help them learn about Justin Torre.
Ask them questions, and try to learn more about them.`,
    messages,
  });

  return result.toDataStreamResponse();
}