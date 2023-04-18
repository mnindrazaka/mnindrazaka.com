---
title: Javascript Object.freeze() Function
date: 2021-03-02T05:00:00Z
description: Understanding what is Object.freeze() and why we need it
image: https://images.unsplash.com/photo-1549522398-8a1b78f43af9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Should Wang](https://unsplash.com/photos/eGa8CozDfVc)
---

`Object.freeze()` is javascript API to make an object property cannot be changed. To explain more about `Object.freeze()`, we will create an object that cannot be reassigned or get its property edited. Here we have `book` object that has `title` and `author` as its property :

```javascript {linenos=table}
let book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// we can reassign the object
book = {
  title: "Grit: The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// we can also change the value of the object property
book.title:Rich Dad Poor Dad";

// we can also add a new property to the object
book.price = "$15"
```

We create the `book` object using the `let` keyword, so we can reassign it to another object, change the value of its property, or add a new property. Our goal is to make the object cannot be reassigned or get its property edited

### Step 1: use const to make the object cannot be reassigned

The first step is using the `const` keyword when we declare the object, so we can't reassign the object anymore

```javascript {linenos=table,hl_lines=[1]}
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// we can't reassign the object because it is declared using the const keyword. This will throw an error
book = {
  title: "Grit: The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// but we still can change the value of the object property
book.title:Rich Dad Poor Dad";

// we can also add a new property to the object
book.price = "$15"
```

But, as you can see, we can still change the object property, we will fix this in step 2

### Step 2 : use Object.freeze() to prevent the object property get changed

We can use `Object.freeze()` to prevent the object property get changed

```javascript {linenos=table,hl_lines=[13]}
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// we can't reassign the object because it is declared using the const keyword. This will throw an error
book = {
  title: "Grit: The Power of Passion and Perseverance",
  author: "Angela Duckworth",
};

// freeze the object
Object.freeze(book);

// we can't change the value of the object property. This statement will be ignored
book.title:Rich Dad Poor Dad";

// we can't add a new property to the object. This statement will be ignored
book.price = "$15"
```

We run `Object.freeze()` using `book` object as its parameter. This will freeze the `book` object, which means we can't change its property again

### Summary

we can use `Object.freeze()` to make an object property that cannot be changed. It is used in React under the hood to freeze the `props` object
