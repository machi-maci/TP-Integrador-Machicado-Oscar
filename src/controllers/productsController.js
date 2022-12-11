const { render } = require("ejs")

let controller = {
    home: (req, res) => {
        res.render('home');
    }
}

module.exports = controller;