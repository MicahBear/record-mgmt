const express = require('express');
const router = express.Router();
const authStateController = require('../controllers/authState');


//render login page @controllers>authState
router.get('/login', authStateController.getLogin);
//reach database for login @controllers>authState
// router.post('/login', authStateController.postLogin);
//reach server to terminate login @controllers>authState
// router.get('/logout', authStateController.getLogout);
// render signup page @controllers>authState
// router.get('/signup', authStateController.getSignup);
// reach database to initialize a new user
// router.post('signup', authStateController.postSignup);


module.exports = router;