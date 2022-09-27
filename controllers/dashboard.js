const Todo = require('../models/Todo')
module.exports = {
    getDashboard: async (req, res) => {
        try {
            const todoItems = await Todo.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
            res.render("dashboard.ejs", { todos: todoItems, left: itemsLeft, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
};


// { posts: posts, user: req.user }