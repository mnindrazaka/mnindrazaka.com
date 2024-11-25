---
title: Setup Reason for Javascript Development
date: 2021-08-15T05:00:00Z
description: How to setup reason for javascript development using bucklescript
image: https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Takuya Nagaoka](https://unsplash.com/photos/fENvSZUzbzU)
highligted: true
---

Reason is a programming language that can be compiled into javascript using a tool called bucklescript. So, in order to set up reason for javascript development, we need to create a node project, install bucklescript, create a reason file, then compile it to javascript. Let's talk about it in detail one by one :

### 1. Initiate Node Project

The first step that we need to do is initiating a node project, so later we can install bucklescript using npm into the project. To create a node project, we can simply run the following command

```bash
$ npm init -y
```

After initiating the node project, let's move to the next step, installing and setup bucklescript

### 2. Install and Setup BuckleScript

We need bucklescript to compile our reason file into a javascript file. To install bucklescript into our project, we need a package called `bs-platform` :

```bash
$ npm install --save-dev bs-platform
```

After bucklescript is installed, we can make a config file called `bsconfig.json` in the root project :

```json
{
  "name": "hello-reason",
  "sources": [
    {
      "dir": "src",
      "subdirs": true
    }
  ],
  "package-specs": [
    {
      "module": "commonjs",
      "in-source": true
    }
  ],
  "suffix": ".bs.js",
  "namespace": true,
  "refmt": 3
}
```

Here is some important information about the config :

- `name` - the name of the project, you can use any name
- `sources.dir` - the directory where the reason file that wants to be compiled is located
- `sources.subdirs` - tell bucklescript to compile or not to compile the files in the subdirectory
- `package-specs.module` - the javascript module that will be used. You can choose between `commonjs` or `es6`
- `package-specs.in-source` - tell bucklescript to generate javascript files alongside reason files. If you omit it, it'll generate the javascript files into `lib/js`

For the rest schema of `bsconfig.json`, you can read it on its [official website](https://rescript-lang.org/docs/manual/latest/build-configuration)

### 3. Create Reason File

After installing bucklescript, now we can create a reason file. Let's create a file called `index.re` inside the `src` directory that will simply log a message to the console. Please note that it needs to be in the `src` directory because previously we setup bucklescript to compile files inside that directory

```reason
Js.log("hello world")
```

The reason file has been created, now let's compile it to javascript

### 4. Compile Reason to Javascript

To compile reason into javascript using bucklescript, we can run command `bsb -make-world`. But, we can't directly run it on the terminal, because we install bucklescript on node project, so we need to run it from npm script. So, let's modify our `package.json`

```json
{
  ...
  "scripts": {
    "start:re": "bsb -make-world"
  },
  ...
}
```

On `package.json`, we create a new npm script called `start:re` where it will run `bsb -make-world` command. Now, what we need to do is run that script

```bash
$ npm run start:re
```

After we run the script, it will automatically create a javascript file called `index.bs.js` alongside `index.re`. Then we can run it using node

```bash
$ node src/index.bs.js
```

So far, the project setup has been finished, we can create a reason file and compile it to javascript with bucklescript using the `npm run start:re` command. But, there is some improvement that can make our workflow easier. For the rest of the steps, we will talk about it

### 5. Watch and Recompile Reason

In the previous step, we need to run `start:re` every time we change our reason file to compile it to javascript, this is not good. So, to make it get compiled automatically, we need to modify our npm script in `package.json` :

```json
{
  ...
  "scripts": {
    "start:re": "bsb -make-world -w"
  },
  ...
}
```

We add `-w` after `bsb -make-world`. This will tell bucklescript to watch our reason file and automatically compile it to javascript each time there are
changes. Now, we just need to run `npm run start:re` once

### 6. Automatically Run the Javascript File

At this point, we can compile our reason file to javascript automatically every time there are changes, that's cool. But, we also need to run `node src/index.bs.js` every time the javascript file changes. We can use `nodemon` to automatically run `index.bs.js` every time it changes. So let's install it :

```bash
$ npm install --save-dev nodemon
```

Then, we can add a new npm script to run `nodemon`. Lets modify our `package.json` :

```json
{
  ...
  "scripts": {
    "start:re": "bsb -make-world -w",
    "start:js": "nodemon src/index.bs.js"
  },
  ...
}
```

We add a new script called `start:js` to tell `nodemon` to watch `index.bs.js` and run it every time it changes. Now, in the different terminal we only need to run the script :

```bash
$ npm run start:js
```

Here is our workflow so far in order to do development in the project :

1. open a terminal and run `npm run star:re` to watch reason file and compile it to javascript
2. open another terminal and run `npm run start:js` to watch javascript file and run it

So, we need two terminal to do it. In the next step, we will talk about how to improve it

### 7. Run BuckleScript and Nodemon in a Single Terminal

So far so good, we can automatically compile reason to javascript and run it on the terminal. But, to do it, we need two terminals to run the following command :

1. `npm run start:re` - watch changes on reason file and compile it to javascript
2. `npm run start:js` - run javascript file that already compiled from reason

So, can we just use one terminal to run both of them ? yes, we can use `concurrently` to run multiple commands concurrently in a single terminal. Let's install it :

```bash
$ npm install --save-dev concurrently
```

Then, we can add a new npm script that will run `start:re` and `start:js` at the same time. Let's modify our `package.json` :

```json
{
  ...
  "scripts": {
    "start:re": "bsb -make-world -w",
    "start:js": "nodemon src/index.bs.js",
    "start": "concurrently 'npm run start:re' 'npm run start:js'",
  },
  ...
}
```

We add a new script called `start` that will run `start:re` and `start:js` using `concurrently`. So, now we only need to run a single command to run both of them :

```bash
$ npm run start
```
