const configMap = {
    'development': () => {
        return require('./webpack.development.config')
    },
    'production': () => {
        return require('./webpack.production.config')
    }
}

module.exports = (env, argv) => {
    return configMap[argv.mode]()
}