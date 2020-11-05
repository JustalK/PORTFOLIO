![Alt text](documentation/imgs/project/portfolio.jpg?raw=true "PORTFOLIO-PORTFOLIO")

![Last version](https://img.shields.io/github/v/tag/justalk/portfolio.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/portfolio.svg?style=flat-square)](https://travis-ci.com/github/JustalK/portfolio)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/PORTFOLIO/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/JustalK/PORTFOLIO?branch=master)
[![Dependency status](http://img.shields.io/david/justalk/portfolio.svg?style=flat-square)](https://david-dm.org/justalk/portfolio.svg)
[![Maintainability Status](https://api.codeclimate.com/v1/badges/45c256d13f79636ec78f/maintainability)](https://codeclimate.com/github/JustalK/PORTFOLIO/maintainability)

A project for presenting my professional work to the world in a single page application. As a fullstack developer, I have coded both side of the application. The frontend has been made with `Vue.js` and the backend is made with `Express` and `MongoDB`. The entire project is compiled through `Webpack`.

The entire project follow the official convention for JS. It's checked everyime I compile the project by `EsLint`. Also, the project is checked by `travis` and the test of `Ava` for checking the continuity. Finally, the robustness of the project is assured by `Coveralls` who checked the coverage of the test.

## Database ERD

![Alt text](documentation/management/src/database.jpg?raw=true "PORTFOLIO-ERD")

## Prerequisite

For the project to work properly on your computer, you need to have on your machine :

1. A machine with node installed :
https://nodejs.org/en/download/

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

## Build

For building the dev or build version
```
$ npm run dev
$ npm run build
```

## Watching

For watching the project while developing
```
$ npm run watch
$ npm run watch-server
```

The project can be access at the port 8080 by default :
http://localhost:8080/

![Alt text](documentation/imgs/project/home.jpg?raw=true "PORTFOLIO-HOME")

The documentation of the API (`swagger`) can be access at this url :
http://localhost:8080/api/documentation/index.html

![Alt text](documentation/imgs/project/api.jpg?raw=true "PORTFOLIO-PORTFOLIO")

## Server

For running the server with the last build :
```
$ npm run server
```
