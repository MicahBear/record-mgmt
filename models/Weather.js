const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    description: String

})

module.exports = mongoose.model('Weather', WeatherSchema)