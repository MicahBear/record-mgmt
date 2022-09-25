const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home");

// render landing page @controllers>home
router.get('/', homeController.getIndex);



module.exports = router;
