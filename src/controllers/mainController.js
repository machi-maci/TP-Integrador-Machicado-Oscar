const path = require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname, '../data/products.json');   //agrega la lista json de productos
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const products = JSON.parse(productsJson);

module.exports = {
    home: function (req, res) {
        res.render('main', {productos: products}) // LINEA Q DIRECCIONA AL ARCHIVO MAIN.EJS
    }
}