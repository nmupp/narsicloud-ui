const path = require("path")

module.exports = {
    entry: {
        app: './src/App',
        html: './src/index.html'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                loader: "file-loader?name=assets/[name].[ext]"
            },
        ]
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
            },
        },
    },
    resolve: {
        extensions: ['.js','.jsx']
    }
};