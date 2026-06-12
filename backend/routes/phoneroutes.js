const express = require('express');
const router = express.Router();

const {getAllPhones, searchPhones}=require('../controllers/phonecontroller');
router.get('/search', searchPhones);
router.get('/', getAllPhones);


module.exports = router;