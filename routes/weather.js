const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather')



// temp weather route
router.post('/', weatherController.postWeather);

module.exports = router;