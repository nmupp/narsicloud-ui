const webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: './src/App',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'narsicloud.bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ],
    resolve: {
        extensions: ['.js','.jsx']
    }
};