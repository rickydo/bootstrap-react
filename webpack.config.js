const path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        inline: true, 
        contentBase:'./public',
        port:3000
    }
};