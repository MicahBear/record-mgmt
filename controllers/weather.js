const fetch = require('node-fetch');
require('dotenv').config({ path: '../config/.env' })
// const User = require('../models/User');

module.exports = {
    postWeather: async (req, res) => {
        const apiKey = `${process.env.WEATHER_API}`;
        try {
            let city = req.body.city;
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(url)
            const body = await response.json()
            console.log(body)
        } catch (error) {
            console.log(error);
        }
    }
}