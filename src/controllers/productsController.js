const path = require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname, '../data/products.json');   //agrega la lista json de productos
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const products = JSON.parse(productsJson);

const { render } = require("ejs")

let controller = {
    home: (req, res) => {
        res.render('home', {productos: products});
    },
    detail: (req, res) => {
        res.render('detail', {productos: products});
    }
}

module.exports = controller;