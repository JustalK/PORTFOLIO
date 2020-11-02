const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
			filename: '../index.html',
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
