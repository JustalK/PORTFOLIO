const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new ESLintPlugin({ fix: true, files: "src/*.js" }),
        new HtmlWebpackPlugin({
    	title: 'Custom template',
    	filename: '../index.html',
    	template: 'src/pages/index.html'
        })
    ],
    module: {
        rules: [
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
                use: [ 'style-loader','css-loader','postcss-loader','less-loader' ]
            }
        ]
    }
};
