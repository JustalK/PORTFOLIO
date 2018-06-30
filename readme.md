# Latsuj with node.js

## Setting the repository with node.js

```
npm init --yes
npm i express -S
npm i webpack -D
```

Running "webpack" and that does not work...
> webpack command not found
https://stackoverflow.com/questions/38788166/webpack-command-not-working
```
npm i webpack -g
```

Well...Ok, now ! I have just to install the webpack-cli needed for the "webpack" command
```
npm i webpack-cli -g
```

And...
> Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
https://stackoverflow.com/questions/45273988/webpack3-jshint-loader-does-not-work/45274620#45274620

> Can't resolve 'jshint-loader'
https://github.com/webpack-contrib/jshint-loader
```
npm i jshint-loader --save-dev
```

> Cannot find module 'jshint'
https://stackoverflow.com/questions/37229195/gulp-error-cannot-find-module-jshint
```
npm i jshint -g
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
npm i http-server -g
```

Then, we go to the directory of the project and run the following command :
```
http-server
```









