const path = require('path')

module.exports = {
    entry: {
        'a' :'./js/index.js',
        'b' :'./js/bot.js',
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}