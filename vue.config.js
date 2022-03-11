module.exports = {
    integrity: process.env.NODE_ENV === 'production',
    configureWebpack: {
        optimization: {
            realContentHash: true
        }
    }
}
