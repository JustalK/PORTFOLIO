# Latsuj with node.js

## Setting the repository with the important tools

* webpack - for creating a good build version optimised for the web
* eslint - for keeping the code in the same style

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










