const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const dashController = require("../controllers/dashboard");
const { ensureAuth } = require("../middleware/auth");

// render landing page @controllers>home
router.get('/', homeController.getIndex);
// render dashboard and ensure auth
router.get('/dashboard', ensureAuth, dashController.getDashboard);


module.exports = router;
