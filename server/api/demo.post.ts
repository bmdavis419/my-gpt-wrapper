import OpenAI from "openai";

export default defineEventHandler(async (event) => {
  const apiKey = useRuntimeConfig().openaiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Who won the world series in 2020?" },
      {
        role: "assistant",
        content: "The Los Angeles Dodgers won the World Series in 2020.",
      },
      { role: "user", content: "Where was it played?" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);

  return { hello: "world" };
});
