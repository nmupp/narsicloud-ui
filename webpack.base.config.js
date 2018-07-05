module.exports = {
    entry: {
        app: './src/App',
        html: './src/index.html',
        image: './src/assets/mypic.jpeg'
    },
    output: {
        path: __dirname + '/dist',
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
                test: /\.jpeg$/,
                loader: "file-loader",
                options: {
                    name:'[name].[ext]',
                    outputPath: 'assets/'
                }
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