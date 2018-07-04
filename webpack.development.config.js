const path = require('path');

module.exports = {
    entry: './src/App',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'narsicloud.bundle.js'
    },
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