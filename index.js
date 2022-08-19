const express = require('express');
const bike = require('./src/app')
const app = express();

const PORT =process.env.PORT || 4000;
app.use( '/' , bike)
app.listen(PORT , () => console.log(`puesto levantado en ${PORT}`))
