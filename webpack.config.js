module.exports = {
    entry: './client.js',
    output: {
        filename: 'public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|server.js)/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
}