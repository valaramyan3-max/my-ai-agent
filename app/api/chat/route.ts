// app/api/route.ts

// Ensure these packages are installed:
// npm install ai @ai-sdk/openai --legacy-peer-deps
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai'; // Use the correct provider

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Prompt is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await streamText({
      model: openai('gpt-3.5-turbo'), // Use the provider's model
      prompt: prompt,
      // Add other options as needed
      // temperature: 0.7,
      // maxTokens: 1000,
    });

    // Return the streaming response
    return result.toDataStreamResponse(); // Or result.toTextStreamResponse() depending on needs
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}