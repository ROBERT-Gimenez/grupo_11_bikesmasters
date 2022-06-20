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
const bcrypt = require('bcryptjs')

/* routes */
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/admin/adminRouter');

/* Views config */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(bodyParser.json()) 
app.set(bcrypt)

/* session */
/* app.set('trust proxy', 1); */
app.use(session({
    secret:"las bicis son lo mas!!",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieParser());
app.use(cookieSession);


app.use ('/', indexRouter);
app.use('/usuario', userRouter);
app.use('/producto', productRouter);
app.use('/admin', adminRouter);




app.listen(PORT, () => console.log( `Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`))