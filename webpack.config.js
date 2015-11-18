var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './client.js'
    ],
    output: {
        filename: 'public/js/bundle.js'
    },
    debug:true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|server.js)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },

        ]
    }
}