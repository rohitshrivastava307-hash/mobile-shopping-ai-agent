const express = require('express');
const router = express.Router();

const {getAllPhones, searchPhones}=require('../controllers/phonecontroller');
router.get('/search', searchPhones);
router.get('/', getAllPhones);
router.get('/gemini-test', async (req, res) => {
  const askGemini = require('../services/gemini');

  const result = await askGemini(
    'Best camera phone under 30000'
  );

  res.json({ result });
});

module.exports = router;