const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
require('dotenv').config();
const PORT = /*  process.env.PORT  || */ 4000;
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const google = require('./middlewares/Google');
const passport = require('passport')
const loginRouter = require('./controllers/userController')

/* routes */
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/admin/adminRouter');
const apiAdmin = require('./routes/Apis/ApiAdminRoutes')

//>>API ROUTES<<//



/* Views config */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));
app.use(bodyParser.json()) 
app.set(bcrypt);
app.use(express.json());
app.use(cors())

/* session */
/* app.set('trust proxy', 1); */
app.use(session({
    secret:"las bicis son lo mas!!",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(express.json());
app.use(cookieParser());
app.use(cookieSession);

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.use ('/', indexRouter);
app.use('/usuario', userRouter);
app.use('/producto', productRouter);
app.use('/admin', adminRouter);


const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}


// Auth Routes
app.get('usuario/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('usuario/google/callback', passport.authenticate('google', { failureRedirect: '/usuario/login' }),
  function(req, res) {
    res.redirect('/');
  }
);
///Ruta de APIS///

app.use('/api' , apiAdmin);
app.use((req, res, next) => {
    res.status(404).render('not-found')
})




app.listen(PORT, () => console.log( `Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`))

module.exports=app;