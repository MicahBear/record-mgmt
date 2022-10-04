const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

const todosController = require('../controllers/todos')
const { ensureAuth } = require("../middleware/auth");

// render landing page @controllers>home
router.get('/', homeController.getIndex);
// render dashboard and ensure auth
router.get('/dashboard', ensureAuth, todosController.getDashboard);
//temp todo routes
// router.get('/', ensureAuth, todosController.getTodos);
router.post('/createTodo', todosController.createTodo);
router.put('/markComplete', todosController.markComplete);
router.put('/markIncomplete', todosController.markIncomplete);
router.delete('/deleteTodo', todosController.deleteTodo);



module.exports = router;
