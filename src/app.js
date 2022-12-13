const path = require('path');
const express = require('express');
const app = express();

//Configuracion express
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views')); //IMPORTANTE PARA RE DIRIGIR A VIEWS!!!
app.use(express.static(path.resolve(__dirname,'../public'))); // para encontrar los css y imagenes!!!




//Sistema de Rutas

//app.js --> router --> controller --> view(home)

const main = require('./routes/main');
app.use('/', main);
const users = require('./routes/users');
app.use('/users', users);



const create = require('./routes/create');
app.use('/create', create);

const edit = require('./routes/edit');
app.use('/edit', edit);


const products = require('./routes/products');
app.use('/products', products);

function notFound(params) {

}
//NOT FOUND ---- siempre va al final para que pase primero por las otras rutas
app.use('*', (req, res, next) => {
    res.render('404-page');
})
/*
app.get('/', (req, res) => {
        res.send('Hola Compa!!!');
})  
app.get('/home', (req, res) => {
    res.send('HOME');
}) // la barra ('/') hace referencia a la raiz de una ruta!!!
app.get('/productos', (req, res) => {
    res.send('LISTA DE PRODUCTOS');
}) */

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'))