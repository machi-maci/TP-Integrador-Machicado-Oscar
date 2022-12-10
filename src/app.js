const path = require('path');
const express = require('express');
const app = express();
//Sistema de Rutas

const main = require('./routes/main');
app.use('/', main);
const users = require('./routes/users');
app.use('/users', users);

/*
app.get('/', (req, res) => {
        res.send('Hola Amigo!!!');
})  
app.get('/home', (req, res) => {
    res.send('HOME');
}) // la barra ('/') hace referencia a la raiz de una ruta!!!
app.get('/productos', (req, res) => {
    res.send('LISTA DE PRODUCTOS');
}) */

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'))