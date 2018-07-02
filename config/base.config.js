const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    new VueLoaderPlugin()
  ],
  module: {
    rules: [ 
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
	    test: /\.js$/,
	    exclude: /node_modules/,
	    use : [
	      { loader: "eslint-loader" },
	      { loader: "babel-loader", query : { presets: ["es2015"] } }
	    ]
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        use: [ "style-loader","css-loader","postcss-loader","less-loader" ]
      } 
    ]
  }
};