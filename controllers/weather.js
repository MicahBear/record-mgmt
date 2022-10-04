const fetch = require('node-fetch');
require('dotenv').config({ path: '../config/.env' })
// const User = require('../models/User');


exports.postWeather = async (req, res) => {
    try {
        const apiKey = `${process.env.WEATHER_API}`;
        let city = req.body.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
        const response = await fetch(url)
        const weather = await response.json()
        city = weather.name;
        let temp = Math.round(weather.main.temp)
        let des = weather.weather[0].description


        res.render('./partials/weather.ejs', { city, temp, des });

        console.log(city, temp, des)
    } catch (error) {
        console.log(error);
    }
}





