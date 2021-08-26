const config = require('./config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require("terser-webpack-plugin");

const babelOptions = {
    presets: [
        ["@babel/preset-env", {
            targets: {
                node: true,
            }
        }], 
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
    ].filter(Boolean),
};

module.exports = {
    mode: 'production',
    entry: config.webpack.serverEntry,
    output: {
        path: config.webpack.serverOutputPath,
        filename: config.webpack.serverOutputMain,
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    resolve:{
        alias: config.webpack.alias || {},
    },
    node: {
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions,
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false
          }),
          '...',
        ],
    },
}