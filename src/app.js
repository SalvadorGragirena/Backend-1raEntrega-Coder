const express = require('express');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.listen(8080, () => {
    console.log("Escuchando servidor en el puerto 8080");
});

app.use('/api/products/', productsRouter);
app.use('/api/cartProducts/', cartsRouter);
