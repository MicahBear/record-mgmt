const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home");

// controller > home > getIndex
router.get('/', homeController.getIndex);


module.exports = router;
