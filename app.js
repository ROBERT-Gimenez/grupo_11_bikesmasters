const express = require('express')
const app = express()
const path = require('path')
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')))

/* routes */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html/')))
app.get('/Login.html', (req, res) => res.sendFile(path.join(__dirname, '/views/Login.html/')))
app.get('/register.html', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html/')))
app.get('/productCard.html', (req, res) => res.sendFile(path.join(__dirname, '/views/productCard.html/')))
app.get('/detalle.html', (req, res) => res.sendFile(path.join(__dirname, '/views/detalle.html/')))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}
http://localhost:${port}`))