const askGemini = require('../services/gemini');
const Phone = require('../models/phones');

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    // STEP 1: Extract Filters
    const extractionPrompt = `
Return ONLY a JSON object.

No explanations.
No markdown.
No code blocks.

Example:
{"brand":"Samsung","maxPrice":30000}

Query:
${message}
`;

    const result = await askGemini(extractionPrompt);

    const jsonMatch = result.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No JSON found in Gemini response");
    }

    const filters = JSON.parse(jsonMatch[0]);

    // STEP 2: Build Mongo Query
    const query = {};

    if (filters.brand) {
    query.brand = new RegExp(
  `^${filters.brand}$`,
  'i'
);
    }

    if (filters.maxPrice) {
      query.price = {
        $lte: filters.maxPrice
      };
    }

    // STEP 3: Search Phones
    const phones = await Phone.find(query);

    // STEP 4: Generate Recommendation
    const recommendationPrompt = `
User Query:
${message}

Available Phones:
${JSON.stringify(phones)}

Recommend the best phone in 3 lines.
`;

    const recommendation = await askGemini(recommendationPrompt);

    res.json({
      filters,
      recommendation,
      phones
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { chat };