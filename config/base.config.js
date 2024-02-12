const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'production';
require('dotenv').config({ path: './env/.env.' + mode });
const port = process.env.PORT ? ':' + process.env.PORT : '';
const base_url = process.env.PROTOCOL + '://' + process.env.HOST + port;


module.exports = {
	entry: {
		app: './src/index.js'
	},
	resolve: {
		extensions: [ '.js', '.vue', '.json' ],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		fallback: {
			'http': require.resolve('stream-http'),
			'https': require.resolve('https-browserify'),
			'util': require.resolve('util/'),
			'stream': require.resolve('stream-browserify'),
			'tty': require.resolve('tty-browserify'),
			'zlib': require.resolve('browserify-zlib'),
			'assert': require.resolve('assert/'),
			'fs': false,
			'net': false
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
			fix: false,
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
			url: base_url + '/index.js',
			filename: '../' + process.env.FOLDER + '/index.html',
			template: 'src/pages/index.ejs',
			inject: false
		}),
		new StyleLintPlugin({
			fix: true,
			files: [
				'src/assets/*.{css,sss,less,scss,sass}',
				'src/assets/**/*.{css,sss,less,scss,sass}'
			]
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/assets/imgs', to: 'assets/imgs' },
				{ from: 'src/assets/fonts', to: 'assets/fonts' },
				{ from: 'src/assets/favicon', to: 'assets/favicon' },
				{ from: 'src/assets/sounds', to: 'assets/sounds' },
				{ from: 'src/libs', to: 'libs' },
				{ from: 'src/pages/sitemap.xml', to: './' }
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
				exclude: [ '/node_modules/', '/src/libs/'],
				use: [ 'style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[
									'postcss-preset-env',
									require('autoprefixer')(),
								],
							],
						},
					} }, 'less-loader' ]
			},
			{
				test: /\.svg$/,
				use: [{
					loader: 'svg-url-loader',
					options: {
						limit: 10000,
					},
				}],
			}
		]
	}
};
