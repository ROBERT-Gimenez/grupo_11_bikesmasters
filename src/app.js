const express = require('express')
const app = express()
const path = require('path')
const process = require('process')
require('dotenv').config();
const PORT = process.env.PORT || 3500;

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '../public')))

/* routes */
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/admin/adminRouter')


app.use ('/', indexRouter);
app.use('/carrito', userRouter) 
app.use('/detalle', productRouter)
app.use('/admin', adminRouter)



app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`))