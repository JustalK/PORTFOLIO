const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'production';
require('dotenv').config({ path: './env/.env.' + mode });
const base_url = process.env.PROTOCOL + '://' + process.env.HOST + ':' + process.env.PORT;


module.exports = {
	entry: {
		app: './src/index.js'
	},
	resolve: {
		extensions: [ '.js', '.vue', '.json' ],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname+'/../' + process.env.FOLDER + '/'),
		publicPath: base_url + '/'
	},
	plugins: [
		new VueLoaderPlugin(),
		new ESLintPlugin({
			fix: true,
			files: [
				'src/**/*.vue',
				'src/**/**/*.vue',
				'src/*.js',
				'server/*js',
				'server/**/*.js',
				'config/*.js'
			],
			extensions: [ 'js', 'vue' ]
		}),
		new HtmlWebpackPlugin({
			title: 'Custom template',
			filename: '../' + process.env.FOLDER + '/index.html',
			template: 'src/pages/index.html'
		}),
		new StyleLintPlugin({
			fix: true,
			files: [
				'src/**/*.{css,sss,less,scss,sass}',
				'src/**/**/*.{css,sss,less,scss,sass}'
			]
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/assets/imgs', to: 'assets/imgs' },
				{ from: 'src/assets/fonts', to: 'assets/fonts' },
			],
		}),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
			VERSION: JSON.stringify('5fa3b9'),
			BROWSER_SUPPORTS_HTML5: true,
			TWO: '1+1',
			'typeof window': JSON.stringify('object'),
			'process.env': JSON.stringify(process.env),
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
						name: 'assets/fonts/[name].[ext]',
					},
				},
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [ 'style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[ 'postcss-preset-env' ],
							],
						},
					} }, 'less-loader' ]
			}
		]
	}
};
