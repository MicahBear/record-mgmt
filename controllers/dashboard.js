const Todo = require('../models/Todo')
const Weather = require('../models/Weather')
module.exports = {
    getDashboard: async (req, res) => {
        console.log(req.user)
        try {
            const todoItems = await Todo.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
            res.render('dashboard.ejs', { todos: todoItems, left: itemsLeft, user: req.user, weather: null, error: null })
        } catch (err) {
            console.log(err)
        }
    },
};


// { posts: posts, user: req.user }

// weather: null, error: null

// const todoItems = await Todo.find({ userId: req.user.id })
// const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
// { todos: todoItems, left: itemsLeft, user: req.user }
