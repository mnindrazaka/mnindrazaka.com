---
title: Javascript Function .call() and .apply()
date: 2021-02-14T05:00:00Z
description: Understanding the Different between .call() and .apply() function
image: https://images.unsplash.com/photo-1527536087702-9b50b4c3771f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80
caption: Photo by [James Padolsey](https://unsplash.com/photos/fBn27VI9rgc)
---

After I finish learning on [Epic React](https://epicreact.dev/), I decided to get a deeper knowledge about React by reading and understanding [its code](https://github.com/facebook/react). As [kent c dodds](https://twitter.com/kentcdodds) says in [his article](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me), the awesome things that happen when we read the open-source code is we know the javascript API that previously we think didn't exist. So, here I will share with you the javascript API that I just learned, `.call()` and `.apply()`

### What is .call() function ?

To understand what is `.call()` function, let's take a look at the following example code

```javascript {linenos=table}
const book1 = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  printInfo: function () {
    console.log(
      "the book title is " + this.title + " and written by " + this.author
    );
  },
};

book1.printInfo(); // the book title is Ego is the Enemy and written by Ryan Holiday
```

We have an object called `book1`, it has `title`, `author` and a function called `printInfo()` to print the info of the book to console. The `printInfo()` function use `this` keyword to access the `title` and `author` of current book object

Next, we create another object called `book2`, it also has `title` and `author` with a different value. But, it doesn't have `printInfo()` function

```javascript {linenos=table}
const book2 = {
  title: "Grit : The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};
```

Since `book2` doesn't has `printInfo()` function, how can we print the info of its property ? can we "borrow" the `printInfo()` function in `book1` and use it for `book2` ? Yes, we can do it using `.call()`. Take a look at following code

```javascript {linenos=table}
const book1 = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  printInfo: function () {
    console.log(
      "the book title is " + this.title + " and written by " + this.author
    );
  },
};

const book2 = {
  title: "Grit : The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// use .call() to use the function for another object
book1.printInfo.call(book2); // the book title is Grit : The Power of Passion and Perseverance and written by Angela Duckworth
```

We can use another object's function and use it on a different object using `.call()`. We just need to pass the object we want to use (for example `book2`) as the `.call()` function argument. So, instead of printing the info of the `book1` object, now it will print the info of the `book2` object

### .call() with arguments

So, how if `printInfo()` function has arguments ? let say, we need to pass the `store` and `price` of the book when we want to print the info of the book :

```javascript {linenos=table}
const book1 = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  printInfo: function (store, price) {
    console.log(
      "the book title is " +
        this.title +
        " and written by " +
        this.author +
        ". You can buy it on " +
        store +
        " for " +
        price
    );
  },
};

// pass the store and price of the book as function arguments
book1.printInfo("amazon", "$10"); // the book title is Ego is the Enemy and written by Ryan Holiday. You can buy it on amazon for $10
```

So, if `printInfo()` function has arguments, we just need to pass the value when we call it. But, how about if we want to use `printInfo()` function on `book2` object ? We can also pass function arguments when using `.call()` :

```javascript {linenos=table}
const book1 = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  printInfo: function (store, price) {
    console.log(
      "the book title is " +
        this.title +
        " and written by " +
        this.author +
        ". You can buy it on " +
        store +
        " for " +
        price
    );
  },
};

const book2 = {
  title: "Grit : The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// use .call() using arguments
book1.printInfo.call(book2, "amazon", "$10"); // the book title is Grit : The Power of Passion and Perseverance and written by Angela Duckworth. You can buy it on amazon for $10
```

### How about .apply() function ?

`.apply()` is similar with `.call()`, we can use another object's function to another object. The difference between `.apply()` and `.call()` is the way we pass the function arguments to it, we use array in `.apply()`

```javascript {linenos=table}
const book1 = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  printInfo: function (store, price) {
    console.log(
      "the book title is " +
        this.title +
        " and written by " +
        this.author +
        ". You can buy it on " +
        store +
        " for " +
        price
    );
  },
};

const book2 = {
  title: "Grit : The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// we don't use array as function arguments when using .call()
book1.printInfo.apply(book2, "amazon", "$10"); // the book title is Grit : The Power of Passion and Perseverance and written by Angela Duckworth. You can buy it on amazon for $10

// we use array as function arguments when using .apply()
book1.printInfo.apply(book2, ["amazon", "$10"]); // the book title is Grit : The Power of Passion and Perseverance and written by Angela Duckworth. You can buy it on amazon for $10
```
