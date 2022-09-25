const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (request, response) => {
    try {
        console.log('landing page rendered.')
        response.render('login.ejs')
    } catch (error) {
        console.error(error)
    }
};

exports.postLogin = () => { };

exports.getLogout = () => { };

exports.getSignup = () => { };

exports.postSignup = () => { };