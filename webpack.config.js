const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [ {
	  test: /\.js$/,
	  exclude: /node_modules/,
	  use : [
	    { loader: "eslint-loader" },
	    { loader: "babel-loader", query : { presets: ["es2015"]} }
	  ]
    },
    {
        test: /\.less/,
        exclude: /node_modules/,
        use: [ "style-loader","css-loader","postcss-loader","less-loader" ]
    } ]
  }
};