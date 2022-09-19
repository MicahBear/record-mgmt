module.exports = {
    getIndex: async (req, res) => {
        try {
            console.log('testing')
            res.render('index.ejs')
        } catch (error) {
            console.log(error)
        }
    }
};
