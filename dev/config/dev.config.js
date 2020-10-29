var merge = require('webpack-merge').merge;
var baseConfig = require('./base.config.js');
var path = require('path');
module.exports = merge(baseConfig, {
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname + '/../', 'dev')
    },
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/imgs/'
                        }
                    }]
            }]
    }
});
