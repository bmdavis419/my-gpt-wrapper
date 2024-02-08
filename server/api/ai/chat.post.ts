import OpenAI from "openai";
import { OpenAIStream } from "ai";
import { z } from "zod";

const bodySchema = z.object({
  message: z.string(),
});

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, (body) =>
      bodySchema.safeParse(body)
    );

    if (!result.success) {
      console.log(result.error);
      throw result.error.issues;
    }

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "user",
          content: result.data.message,
        },
      ],
    });

    // Convert the response into a friendly text-stream
    return OpenAIStream(response);
  });
});
