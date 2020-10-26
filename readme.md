# Latsuj

![Last version](https://img.shields.io/github/v/tag/justalk/portfolio.svg?style=flat-square)
[![Node version](https://img.shields.io/node/v/@justalk/portfolio.svg?style=flat-square)](https://www.npmjs.com/package/@justalk/portfolio)
[![Travis](https://img.shields.io/travis/com/justalk/portfolio.svg?style=flat-square)](https://travis-ci.com/github/JustalK/portfolio)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/PORTFOLIO/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/JustalK/PORTFOLIO?branch=master)
[![Dependency status](http://img.shields.io/david/justalk/portfolio.svg?style=flat-square)](https://david-dm.org/justalk/portfolio.svg)
![Last version](https://img.shields.io/github/license/justalk/portfolio.svg?style=flat-square)

## Installation

For the first installation of the project
```
$ npm i
```

## Setting

For using this project, a server mongo has to be running
```
$ mongod
```
if an error appear when you run this command that is about the permission of the file :
```
exception in initAndListen: IllegalOperation: Attempted to create a lock file on a read-only directory: /data/db, terminating
```
In this case, use sudo mongod.

## Build

For building the dev or build version
```
$ npm run dev
$ npm run build
```

## Server

For running the server using the last build (dev or build) :
```
$ npm run server
```
