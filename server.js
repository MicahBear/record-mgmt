const express = require('express');
require('dotenv').config({ path: './config/.env' });
// const cors = require('cors')
const app = express();
const connectDB = require('./config/database');
// const mainRoutes = require('./routes/main')
const mainRoute = require('./routes/main');


connectDB()

app.set("view engine", "ejs");
// app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoute)


app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})   