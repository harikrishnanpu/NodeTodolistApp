const express = require('express');
const path = require('node:path');
const userRouter = require('./routes/userRouter');
const app = express();
var expressLayouts = require('express-ejs-layouts');




app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.set('layout', 'layouts/layout');



app.use('/',userRouter);


module.exports = app;