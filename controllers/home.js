module.exports = {
    getIndex: async (req, res) => {
        try {
            console.log('landing page rendered.')
            res.render('index.ejs')
        } catch (error) {
            console.log(error)
        }
    }
};
