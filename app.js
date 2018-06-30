var express = require('express');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', process.cwd() + '/views')
app.set('view engine','pug')
app.use('/dist', express.static('./dist'))

app.use('/', indexRouter);

module.exports = app;
