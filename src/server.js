const express = require('express');
const app = express();
const port = 8080;
const routes = require('./controller/routes/products.routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/html', express.static(__dirname + '/html'));

app.use('/api/productos', routes)

app.listen(port, err => {
    if (err) {
        console.log(`Error al iniciar el servidor en el puerto ${err}`);
    } else {
        console.log(`Servidor escuchando el puerto ${port}`);
    }
});
