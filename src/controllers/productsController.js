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
        products.forEach(product => {
            if ( product.id == req.params.id ) {
                res.render('detail', {producto: product});
            }
        })
        //res.redirect('/404-paged');
        console.log(req.params.id);
    }
}

module.exports = controller;