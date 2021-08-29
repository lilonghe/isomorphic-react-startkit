const path = require('path');

const config  = {
    webpack: {
        enableESLint: true,
        port: 9990,
        alias: {
            '@services': path.join(__dirname, '../src/services')
        },
        publicPath: '/',
        outputPath: path.join(__dirname, '../dist'),
        serverOutputPath: path.join(__dirname, '../_app'),
        serverOutputMain: 'app.js',
        serverEntry: path.join(__dirname, '../server', 'server.js'),
    }
}
module.exports = config;