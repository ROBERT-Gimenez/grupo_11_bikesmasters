const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send(path.join(__dirname, '/views/home.ejs/')))
router.get('/Login', (req, res) => res.sendFile(path.join(__dirname, '/views/Login.ejs/')))
router.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.ejs/')))
router.get('/productCard', (req, res) => res.sendFile(path.join(__dirname, '/views/productCard.ejs/')))
router.get('/detalle', (req, res) => res.sendFile(path.join(__dirname, '/views/detalle.ejs/')))