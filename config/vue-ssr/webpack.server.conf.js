const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('../compiler.js')('src')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(baseWebpackConfig,{
    entry: './src/entry-server.js',
    devtool:'source-map',
    target:'node',
    output:{
        filename:'server-bundle.js',
        libraryTarget:'commonjs2'
    },
    externals: [nodeExternals({
        // do not externalize CSS files in case we need to import it from a dep
        whitelist: /\.css$/
    })],
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
          }),

        new VueSSRServerPlugin()
    ]
})