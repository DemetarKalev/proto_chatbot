import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';
import z from 'zod';

// In-memory conversation storage (will reset on cold starts)
const conversationStore = new Map<string, string>();

const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt Is Required.')
      .max(1000, 'Prompt Is Too Long(max 1000 characters)'),
   conversationId: z.string().uuid(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
   // Only allow POST requests
   if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
   }

   // Validate request body
   const parseResult = chatSchema.safeParse(req.body);
   if (!parseResult.success) {
      return res.status(400).json(parseResult.error.format());
   }

   try {
      const { prompt, conversationId } = req.body;

      // Initialize OpenAI client
      const client = new OpenAI({
         apiKey: process.env.OPENAI_API_KEY, // You'll set this in Vercel
      });

      // Get previous response ID from conversation store
      const previousResponseId = conversationStore.get(conversationId);

      // Call OpenAI API
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 200,
         previous_response_id: previousResponseId,
      });

      // Store the new response ID
      conversationStore.set(conversationId, response.id);

      return res.json({ message: response.output_text });
   } catch (error) {
      console.error('OpenAI API error:', error);
      return res.status(500).json({ error: 'Failed To Generate A Response.' });
   }
}
