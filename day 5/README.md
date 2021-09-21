# CRUD with fs module

- JS that we used in front-end can only access our browsers.

- Node has access to our system.

## FS Module

FS : File System Module

## CRUD Commands

> get inside node

```js
node;
```

> importing fs module

```js
var fs = require("fs");
```

## CREATE

> create folder in the directory named test

```js
fs.mkdirSync("test");
```

> creates file named hello.txt inside test <br>
> with content Hello awesome people <br>
> arrow function for error check

```js
fs.writeFileSync('test/hello.txt','Hello awesome people',(err)=> {
... if(err){
..... console.log(err)
..... }
... });
```

## READ

> reads the file and returns the data <br>
> must include utf-8 otherwise u'll get buffer

```js
fs.readFileSync("test/hello.txt", "utf-8");
```

## UPDATE

> appends hello.txt with content (appended part)

```js
fs.appendFileSync("test/hello.txt", " (appended part) ");
```

> renames the file <br>
> specifying the full path is important

```js
fs.renameSync("test/hello.txt", "test/hello1.txt");
```

## DELETE

- before deleting the folders we have to delete the files inside it

> deletes the file

```js
fs.unlinkSync("test/hello1.txt");
```

> deletes the folder

```js
fs.rmdirSync("test");
```
