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

Respond with ONLY raw JSON.
Do not include explanations, markdown, or extra text.

Example response:
{
  "headline": "Example headline",
  "caption": "Example caption",
  "cta": "Example call to action"
}

Details:
Business Type: ${body.businessType}
Platform: ${body.platform}
Tone: ${body.tone}
Goal: ${body.goal}
Product Name: ${body.productName || "N/A"}
`;

    const completion = await openrouter.chat.completions.create({
      model: "meta-llama/llama-3.1-70b-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content!;
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