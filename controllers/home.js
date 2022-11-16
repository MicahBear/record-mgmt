module.exports = {
    getIndex: (req, res) => {
        console.log(req)
        res.render("index.ejs");
    }
};

// try {
//     console.log('landing page rendered.')
//     res.render('index.ejs')
// } catch (error) {
//     console.log(`${error} + landing page not rendering`)
// }

