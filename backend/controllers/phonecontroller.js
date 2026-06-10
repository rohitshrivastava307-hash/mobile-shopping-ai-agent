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

module.exports =  {getAllPhones} ;