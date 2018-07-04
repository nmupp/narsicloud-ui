const app = require('./app')
const webpackConfig = require('./webpack.config')

if(process.env.NODE_ENV !== 'production') {
    console.log('dev mode')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpack = require('webpack')
    const middlewareOptions = {
        stats: {colors: true},
        noInfo: false, // Comment this out for more verbose webpack information
    }
    app.use(webpackDevMiddleware(webpack(webpackConfig('',{mode: 'development'})), middlewareOptions))

}

const port = process.env.PORT || 3001

app.listen(port)

console.log('Server started at port', port)