const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function askGemini(message) {

  const prompt = `
You are a JSON API.

Extract phone search filters.

Return ONLY valid JSON.

Example:
{"brand":"Samsung","maxPrice":30000}

Query:
${message}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json"
    }
  });

  return response.text;
}

module.exports = askGemini;