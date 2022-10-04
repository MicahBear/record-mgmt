const express = require('express');
require('dotenv').config({ path: './config/.env' });
// const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require("express-flash");
const morgan = require('morgan')
const connectDB = require('./config/database');
// render @index.ejs
const mainRoute = require('./routes/main');
// render-post-get authState and pages @contllers>authState
const authRoutes = require('./routes/authRoutes');
// render-post weather@routes-weather-weather.js
const weatherRoute = require('./routes/weather');
// passport config
require("./config/passport")(passport);

connectDB()

app.set("view engine", "ejs");
// app.use(cors())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for  info
app.use(flash());



app.use('/', mainRoute);
app.use('/state', authRoutes);
app.use('/weather', weatherRoute);


app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})   