const express = require('express');
const path = require('node:path');
const userRouter = require('./routes/userRouter');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const coockieParser = require('cookie-parser');


app.use(express.json()); // ==> json ==> req.body
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.set('layout', 'layouts/layout');


app.use(coockieParser());


app.use('/',userRouter);


module.exports = app;