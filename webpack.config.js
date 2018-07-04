const devConfig = require('./webpack.development.config')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const configMap = {
    'development': () => {
        devConfig.plugins = [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("development")
            })
        ]
        devConfig.devtool = "source-map"
        return devConfig
    },
    'production': () => {
        devConfig.plugins = [
            new UglifyJsPlugin(),
            new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
        return devConfig
    }
}

module.exports = (env, argv) => {
    return configMap[argv.mode]()
}