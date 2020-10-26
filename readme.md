# PORTFOLIO

![Last version](https://img.shields.io/github/v/tag/justalk/portfolio.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/portfolio.svg?style=flat-square)](https://travis-ci.com/github/JustalK/portfolio)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/PORTFOLIO/badge.svg?branch=dev&style=flat-square)](https://coveralls.io/github/JustalK/PORTFOLIO?branch=dev)
[![Dependency status](http://img.shields.io/david/justalk/portfolio.svg?style=flat-square)](https://david-dm.org/justalk/portfolio.svg)

A project from presenting my professional work to the world in a single page application. As a fullstack developer, I have coded both side of the application. The frontend has been made with `Vue.js` and the backend is made with `Express` and `MongoDB`. The entire project is compiled through `Webpack`.

The entire project follow the official convention for JS. It's checked everyime I compile the project by `EsLint`. Also, the project is checked by `travis` and the test of `Ava` for checking the continuity. Finally, the robustness of the project is assured by `Coveralls` who checked the coverage of the test.

## Prerequisite

For the project to work properly on your computer, you need to have on your machine :

1. A machine with node installed :
https://nodejs.org/en/download/
```
MongoDB
```

2. A working Mongo database : https://docs.mongodb.com/manual/installation/
```
MongoDB
```

In the futur, I will use Docker for having this step cut.

## Installation

After cloning the project, you can install all the dependencies of the project by running this command at the root of the project :
```
$ npm install
```

## Seeding

I am using `mongo-seeding` for automatically populating the database with the right information. You can run it by using this command :

```
npm run seed
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

For running the server with the last build :
```
$ npm run server
```
