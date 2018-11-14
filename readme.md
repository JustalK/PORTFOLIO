# Latsuj

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