const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
require('dotenv').config();
const PORT = process.env.PORT || 3500;
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');
const adminSession = require('./middlewares/adminSession');

/* Views config */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(bodyParser.json()) 
/* session */

app.use(cookieParser());
app.use(cookieSession);
app.set('trust proxy', 1);
app.use(session({
    secret:"formar",
    resave: true,
    saveUninitialized: true,
    cookie: {}
}));


/* routes */
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/admin/adminRouter');


app.use ('/', indexRouter);
app.use('/carrito', userRouter) ;
app.use('/detalle', productRouter);
app.use('/admin', adminRouter);




app.listen(PORT, () => console.log( `Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`))

/* module.exports = app; */