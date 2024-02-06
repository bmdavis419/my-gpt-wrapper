import OpenAI from "openai";
import { OpenAIStream } from "ai";
import { z } from "zod";

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user"]),
      content: z.string(),
    })
  ),
});

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event) => {
    const testBody = await readBody(event);
    console.log(testBody);
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
      messages: result.data.messages,
    });

    // Convert the response into a friendly text-stream
    return OpenAIStream(response);
  });
});
