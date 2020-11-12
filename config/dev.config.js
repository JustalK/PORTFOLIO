const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
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
