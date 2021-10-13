const path = require('path');


module.exports = {
    mode: 'development',
    entry: './js/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
}