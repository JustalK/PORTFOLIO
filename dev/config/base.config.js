var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ESLintPlugin = require('eslint-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        app: './src/router.ts'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new ESLintPlugin({
            fix: true,
            files: [
                'src/**/*.vue',
                'src/*.js',
                'server/*js',
                'server/**/*.js',
                'config/*.js'
            ],
            extensions: ['js', 'vue']
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: '../index.html',
            template: 'src/pages/index.html'
        }),
        new StyleLintPlugin({
            fix: true,
            files: [
                'src/**/*.{css,sss,less,scss,sass}',
                'src/**/**/*.{css,sss,less,scss,sass}'
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'src/assets/fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env'],
                                ],
                            },
                        }
                    }, 'less-loader']
            }
        ]
    }
};
