const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
    city: {
        type: String,

    },
    temperature: {
        type: Number,

    },
    description: {
        String,
    }
})

module.exports = mongoose.model('Weather', WeatherSchema)