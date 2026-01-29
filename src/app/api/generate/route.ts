import { openrouter } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.businessType || !body.platform || !body.tone || !body.goal) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const prompt = `
You are a professional marketing copywriter.

You MUST return ONLY valid JSON.
Do NOT include explanations, text, markdown, or comments.
Do NOT wrap the JSON in backticks.

Return exactly this structure:
{
  "headline": "string",
  "caption": "string",
  "cta": "string"
}

Now generate content using:
Business Type: ${body.businessType}
Platform: ${body.platform}
Tone: ${body.tone}
Goal: ${body.goal}
Product Name: ${body.productName || "N/A"}
`;


    const completion = await openrouter.chat.completions.create({
      model: "meta-llama/llama-3.1-70b-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.6,
      max_tokens: 300
    });

    const text = completion.choices[0].message.content!;
    console.log("RAW AI OUTPUT:", text);
    const parsed = JSON.parse(text);

    return Response.json(parsed);
  } catch (error) {
    console.error("OpenRouter error:", error);
    return Response.json(
      { error: "AI generation failed" },
      { status: 500 }
    );
  }
}