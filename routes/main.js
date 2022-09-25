const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home");

// render landing page @controllers>home
router.get('/', homeController.getIndex);
//render login page @controllers>authState
router.get('/login',);
//reach database for login @controllers>authState
router.post('/login',);
//reach server to terminate login @controllers>authState
router.get('/logout',);
// render signup page @controllers>authState
router.get('/signup',);
// reach database to initialize a new user
router.post('signup',);



module.exports = router;
