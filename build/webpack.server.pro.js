const config = require('./config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

const cssSRC = {
    loader: "css-loader",
    options: {
        modules: {
            localIdentName: "[name]_[local]--[hash:base64:5]",
        },
        esModule: false,
    },
};

const lessSRC = {
    loader: 'less-loader',
    options: {
        lessOptions: {
            javascriptEnabled: true
        }
    }
};

const miniCssExtractPlugin = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        emit: false,
    },
}

module.exports = {
    mode: 'production',
    entry: config.webpack.serverEntry,
    output: {
        path: config.webpack.serverOutputPath,
        filename: config.webpack.serverOutputMain,
        publicPath: config.webpack.publicPath,
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    miniCssExtractPlugin,
                    cssSRC
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    miniCssExtractPlugin,
                    cssSRC,
                    lessSRC,
                ]
            },
            {
                test: config.webpack.assetsPattern || /\.(png|jpg|gif|svg)$/,
                use:[
                    {
                        loader: config.webpack.assetsLoader || 'url-loader',
                        options: config.webpack.assetsLoaderOption || {
                            limit: 1024,
                            outputPath: 'assets',
                            emitFile: false,
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
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