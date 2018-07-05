const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const config = require("./webpack.config.js")('',{mode: 'development'});
const compiler = webpack(config);
const app = new WebpackDevServer(compiler, {
        stats: {colors: true},
        noInfo: false,
    });
module.exports = app;
