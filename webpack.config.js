const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
    context: __dirname,
    devtool: false,
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        // make sure they are in the right order !!!
                        'transform-decorators-legacy',
                        'react-html-attrs',
                        'transform-class-properties',
                        ['transform-runtime', {
                            helpers: false,
                            polyfill: false,
                            regenerator: true,
                        }],
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread',
                        'transform-async-to-generator'
                    ],
                }
            },
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};