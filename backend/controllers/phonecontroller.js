const Phone = require('../models/phones');

const getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


const searchPhones = async (req, res) => {
  try {
    const { brand ,maxPrice} = req.query;

    const query = {};

    if (brand) {
      query.brand = brand;
    }
    if (maxPrice) {
      query.price = {
        $lte: Number(maxPrice)
      };
    }

    const phones = await Phone.find(query);

    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports =  {getAllPhones, searchPhones} ;