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

