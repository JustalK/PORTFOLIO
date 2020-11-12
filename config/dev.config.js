const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname+'/../dev/', 'dev')
	},
	module: {
		rules: [ {
			test: /\.(png|jpg|jpeg|gif)$/,
			use: [ {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/imgs/'
				}
			} ]
		} ]
	}
});
