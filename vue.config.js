const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity')

module.exports = {
    configureWebpack: {
        optimization: {
            realContentHash: true
        },
        output: {
            crossOriginLoading: "anonymous"
        },
        plugins: [
            new SubresourceIntegrityPlugin()
        ]
    }
}
