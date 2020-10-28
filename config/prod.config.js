const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname + '/../', 'build')
	},
	module: {
		rules: [ {
			test: /\.html$/,
			use: {
				loader: 'html-minifier-loader',
				options: {
					'html-minifier-loader': {
						removeComments: false,
						collapseWhitespace: true,
						conservativeCollapse: false,
						preserveLineBreaks: false
					}
				}
			}
		},
		{
			test: /\.(png|jpg|jpeg|gif)$/,
			use: [ {
				loader: 'lqip-loader',
				options: {
					base64: true,
					palette: false
				}
			}, {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/imgs/'
				}
			}, {
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						progressive: true,
						quality: 65
					},
					optipng: {
						enabled: false,
					},
					pngquant: {
						quality: '20',
						speed: 4
					}
				}
			} ]
		} ]
	}
});
