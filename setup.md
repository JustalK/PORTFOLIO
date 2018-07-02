# Latsuj with node.js

## Setting the repository with the important tools

Here a good list of the awesome loader of webpack : https://github.com/webpack-contrib/awesome-webpack

I'm currently using this ones :
* webpack - for creating a good build version optimised for the web
* eslint - for keeping the code in the same style
* babel - for transforming ES6 modern into ES5
* less-loader - for compiling less to css
* postcss - for automaticaly adding the autoprefixer (I'm lazy)
* css-loader - for translating css into commonJs
* style-loader - for creating styles node from js String
* vuejs - for managing the templates and the components of my SPA
* nodemon - For building my dev config on a change in src
* html-webpack-plugin - For automatically create the index.html with the good entry point
* minifier-html - For minifying the html in the prod build
* file-loader - For naming the img file with a specific naming convention
* image-webpack-loader - For reducing the size of the image
* lqip-loader - For creating a low version of the image that we gonna replace later with the original

### webpack

```
$ npm init --yes
$ npm i express -S
$ npm i webpack -D
```

Running "webpack" and that does not work...
> webpack command not found
https://stackoverflow.com/questions/38788166/webpack-command-not-working
```
$ npm i webpack -g
```

Well...Ok, now ! I have just to install the webpack-cli needed for the "webpack" command
```
$ npm i webpack-cli -g
```

> WARNING in configuration - The 'mode' option has not been set
Inside package.json set "scripts"
```
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```
Now for running "webpack" with the mode, I have just to run : "run npm dev" or "run npm build"

For going further, I'm gonna create a config for both the dev and prod, I create a config file inside the repository "config" and change a little my package.json
```
"scripts": {
  "dev": "webpack --mode development --config config/dev.config.js",
  "build": "webpack --mode production --config config/prod.config.js"
}
```

Then, I install the webpack-merge for merge the base config with the prod or the dev
```
npm i webpack-merge --save-dev
```


## Running the dev version

Setting the module http-server once :
```
$ npm i http-server -g
```

Then, we go to the directory of the project and run the following command :
```
$ http-server
```

### eslint

> Error: No ESLint configuration found.
```
$ npm i eslint -g
$ eslint --init
```

Then, I'm setting everything the "eslint-loader"
```
$ npm install eslint-loader --save-dev
```

And in the webpack configuration
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    },
  ],
}
```

### babel
> https://github.com/babel/babel-loader

```
$ npm i babel-core babel-loader --save-dev
```

And the webpack configuration become
```
module: {
  rules: [ {
	test: /\.js$/,
	exclude: /node_modules/,
	use : [
	  { loader: "eslint-loader" },
	  { loader: "babel-loader", query : { presets: ["es2015"]} }
	]
  } ]
}
```

> Couldn't find preset "es2015"
Then we just add the presets :
```
npm i babel-preset-es2015 --save-dev
```

### Css process

```
$ npm i postcss-loader postcss css-loader less less-loader style-loader --save-dev
```

Add the following line in the webpack
```
{
    test: /\.less/,
    exclude: /node_modules/,
    use: [ "style-loader","css-loader","postcss-loader","less-loader" ]
}
```

Then, we can add the import in the component that way :
```
import './assets/less/main.less'
```

>   3:1  error  'require' is not defined  no-undef
For fixing this error, we just have to change one global variable in the eslintrc.yml
```
env:
  amd: true
```

> Cannot read property 'context' of undefined
The autoprefixer that I use at this moment was deprecated, so I switch for postcss
> https://github.com/postcss/postcss-loader

> No PostCSS Config found
Simply add a file "postcss.config.js" at the root of the project with this line inside : "module.exports = {};"

### vue and vue-router

```
$ npm i vue vue-router --save-dev
```

> vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
Since the version 15, a plugin is now required. So in the webpack.config.js we have to add :
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

### nodemon

```
$ npm i nodemon -g
```

And then, I add in my package.json
```
"scripts": {
  "watch": "nodemon --watch src/ -x \"npm run dev\""
}
```

> The nodemon does not look for change other than *js
Look with the option --verbose or just change the -e option
```
"scripts": {
  "watch": "nodemon --watch src/ -x \"npm run dev\" -e *"
}
```

### html-webpack-plugin
> https://github.com/jantimon/html-webpack-plugin

```
$ npm i --save-dev html-webpack-plugin
```

And then, add in the base config 
```
  plugins: [
    new HtmlWebpackPlugin({
    	title: 'Latsuj Plugin',
    	templates: 'src/pages/index.html'
    })
  ],
```

> Module parse failed: Unexpected token 
I have simply forget to add the good loader for the html
```
$ npm i --save-dev html html-loader
```

And then simply add the loader for the html.

### html-minifier

```
$ npm i html-minfier html-minifier-loader --save-dev
```

### File-loader
> https://github.com/webpack-contrib/file-loader

```
$ npm i file-loader --save-dev
```

And then, I add this in my base.config.js
```
  module: {
    rules: [ 
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/imgs/'
            }
          }
        ]
      }
	]
```

### image-webpack-loader - Cannot work without file-loader
> https://github.com/tcoopman/image-webpack-loader

```
$ npm i image-webpack-loader --save-dev
```

And then specify the rules inside base.config.js
```
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/imgs/'
        }
      },
      {
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
    	    quality: '1',
    	    speed: 4
    	  }
        }
      }
    ]
  }
```

### lqip-loader
> https://github.com/zouhir/lqip-loader

```
$ npm i lqip-loader --save-dev
```

Then we can chain that with the file-loader
```
test: /\.(png|jpe?g)$/,
loaders: [
  {
    loader: 'lqip-loader',
    options: {
      base64: true,
      palette: false
    }
  },
  {
  ... The file-loader
  } 
]
```

In the vue, we can then use it like this :
```
<img :src="image" />

<script>
import image from '../assets/imgs/campingcar.png'

export default {
    data: function () {
        return {
            image: image.preSrc
        }
    }
}
</script>
```
