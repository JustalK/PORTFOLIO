const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
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
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/imgs/',
					esModule: false
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
						quality: [0.65, 0.95],
						speed: 4
					}
				}
			} ]
		} ]
	}
});
