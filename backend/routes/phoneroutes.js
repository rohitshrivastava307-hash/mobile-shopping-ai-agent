const express = require('express');
const router = express.Router();

const {getAllPhones}=require('../controllers/phonecontroller');

router.get('/', getAllPhones);

module.exports = router;