import { Router } from "express";
import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE } from "../knowledge.js";

const router = Router();
const ai = new GoogleGenAI({ apiKey: process.env.LLM_API_KEY });

const SYSTEM_PROMPT = `You are the Cynbit website assistant.
Answer briefly and politely using ONLY the information below.
If the answer is not there, say you are not sure and suggest emailing opportunities@cynbit.in.
Do not make up prices, dates or policies.

${KNOWLEDGE}`;

router.post("/", async (req, res) => {
  const { messages } = req.body;


  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }
  const clean = messages
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }))
    .slice(-10);

  if (clean.length === 0 || clean[0].role !== "user") {
    return res.status(400).json({ error: "conversation must start with a user message" });
  }


  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: clean.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 400,
      },
    });


    res.json({ reply: response.text || "Sorry, I couldn't answer that." });
  } catch (err) {
    console.error("Gemini error:", err.message);
    res.status(500).json({ error: "Chat service failed" });
  }
});

export default router;