const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname+'/../', 'build')
  },
  module: {
    rules: [ 
	  {
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
	  }
	]
  }
});