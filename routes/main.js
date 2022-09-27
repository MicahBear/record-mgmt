const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const dashController = require("../controllers/dashboard");
const todosController = require('../controllers/todos')
const { ensureAuth } = require("../middleware/auth");

// render landing page @controllers>home
router.get('/', homeController.getIndex);
// render dashboard and ensure auth
router.get('/dashboard', ensureAuth, dashController.getDashboard);
//temp todo routes
router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router;
