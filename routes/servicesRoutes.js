const express = require('express');
const { getWeather, convertCurrency } = require('../controllers/servicesController');
const { apiKeyAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/weather', apiKeyAuth, getWeather);
router.get('/currency', apiKeyAuth, convertCurrency);

module.exports = router;
