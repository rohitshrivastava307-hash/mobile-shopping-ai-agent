const askGemini = require('../services/gemini');
const Phone = require('../models/phones');

const chat = async (req, res) => {
  try {

    const { message } = req.body;

    const result = await askGemini(message);

    const filters = JSON.parse(result);

    const query = {};

    if (filters.brand) {
      query.brand = filters.brand;
    }

    if (filters.maxPrice) {
      query.price = {
        $lte: filters.maxPrice
      };
    }

    const phones = await Phone.find(query);

    res.json({
      filters,
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