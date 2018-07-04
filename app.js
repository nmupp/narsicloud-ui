const express = require('express');
const webpack = require('webpack');
const indexRouter = require('./routes/index');
const WebpackDevServer = require('webpack-dev-server')
const config = require("./webpack.config.js")('',{mode: 'development'});
const compiler = webpack(config);
const app = new WebpackDevServer(compiler, {
        stats: {colors: true},
        noInfo: false,
        before: function(app) {
            app.set('views', process.cwd() + '/views')
            app.set('view engine','pug')
            app.use('/dist', express.static('./dist'))
            app.use('/', indexRouter);
        }
    });
module.exports = app;
