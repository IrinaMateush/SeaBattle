var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/battleship.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}