const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config();
const port = 4000;

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));


/* routes */
const indexRouter = require('./routes/indexRouter');


app.use(express.static(path.join(__dirname, 'public')))
//Middlewares de Rutas
app.use ('/',indexRouter);    //home-contact//

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}
http://localhost:${port}`))