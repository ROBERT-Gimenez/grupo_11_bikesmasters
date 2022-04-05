const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config();
const port = 4000;

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')))

/* routes */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html/')))
app.get('/Login', (req, res) => res.sendFile(path.join(__dirname, '/views/Login.html/')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html/')))
app.get('/productCard', (req, res) => res.sendFile(path.join(__dirname, '/views/productCard.html/')))
app.get('/detalle', (req, res) => res.sendFile(path.join(__dirname, '/views/detalle.html/')))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}
http://localhost:${port}`))