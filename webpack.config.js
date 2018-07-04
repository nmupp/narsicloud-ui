const path = require('path');

module.exports = {
    entry: './src/App.jsx',
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
    resolve: {
        extensions: ['.js','.jsx']
    }
};