const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const configMap = {
    development: () => {
        baseConfig.plugins = [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("development")
            })
        ]
        baseConfig.devtool = "source-map"
        return baseConfig
    },
    production: () => {
        const config = {
            plugins: [
                new UglifyJsPlugin(),
                new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("production")}),
                new webpack.optimize.ModuleConcatenationPlugin(),
                new webpack.NoEmitOnErrorsPlugin()
            ],
        }
        return Object.assign(baseConfig, config)
    }
}

module.exports = (env, argv) => {
    return configMap[argv.mode]()
}