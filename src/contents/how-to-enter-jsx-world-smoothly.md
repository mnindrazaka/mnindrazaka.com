---
title: How to Enter JSX World Smoothly
date: 2020-11-09T05:00:00Z
description: Understand what and why of JSX
image: https://images.unsplash.com/photo-1482939968273-b388a71b768f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Sid Leigh](https://unsplash.com/photos/YxqLwUeS0Bs)
---

One problem that has to be faced by the new engineer when learning about React for the first time is understanding what is JSX and why we need it. When someone asks me to teach them about react, I always hard to explain JSX

Last week, I joined the [Epic React](https://epicreact.dev/) course created by [Kent C Dodds](https://twitter.com/kentcdodds). He explained how we can smoothly move from HTML to JSX, and he did an awesome job explaining it. After I finish the React fundamental topic, now I clearly understand what is JSX and why we need that. Also, if anyone asks me about JSX, I will never confuse about how to explain it to them

So, here is my explanation about JSX based on what I get from Epic React. Hopefully, it can help you to feel a smooth learning experience

### Todays, HTML is generated in the browser by javascript

Back in the old days, HTML is generated on the server-side and sent to the client browser. So that the document sent by the server is containing complete HTML structure

But today, the server is just sending a prototype structure of HTML, and let the frontend framework generate the complete HTML structure on the client-side. For example, here is the HTML sent by the server

```html
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

As we can see here, the server just sending an HTML with an empty div with `id="root"`. So, our job is to generate the rest of the HTML structure on the client with javascript

### Programmatically add HTML element with javascript

If the server just sending a prototype structure of HTML, so in the client, we can generate the complete structure with javascript. So, how can we do that? We can simply use javascript DOM API to create a new element

```html
<html>
  <body>
    <div id="root"></div>
    <script>
      const newElement = document.createElement("div");
      newElement.textContent = "Hello World";
    </script>
  </body>
</html>
```

We can create a new HTML element with `document.createElement` and passing the kind of element that we want to create. After that, we can fill the content of that element by assigning the `.textContent` property. In that example, we create a div with text content `Hello World`

Ok, we have done with creating a new element, next job is to add that element in the `root` div element

```html
<html>
  <body>
    <div id="root"></div>
    <script>
      const newElement = document.createElement("div");
      newElement.textContent = "Hello World";
      const rootElement = document.getElementById("root");
      rootElement.append(newElement);
    </script>
  </body>
</html>
```

First, we get the `root` div element using `document.getElementById` and passing the id of the element that we want to get, which is `root`. And then, we append the div element that we already create before using `.append`

### Let's do it in React way

Let's get into React, before we use JSX, we can create an element using purely React API. So, before we refactor the previous code, we need to import React using CDN to our HTML

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script>
      const newElement = document.createElement("div");
      newElement.textContent = "Hello World";
      const rootElement = document.getElementById("root");
      rootElement.append(div);
    </script>
  </body>
</html>
```

We need to import two things here. First is `react`, we need this package to create a new React element. Second is `react-dom`, we need this package to render the element that already created to the DOM

We have done importing React to our HTML file, lets move to the next job to create a new element using React

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script>
      const newElement = React.createElement("div", {
        children: "Hello World",
      });
      const rootElement = document.getElementById("root");
      rootElement.append(newElement);
    </script>
  </body>
</html>
```

We can create a React element using `React.createElement` and passing the kind of element that we want to create as a first argument. Then, we can add the props of that element as a second argument. In this example, we need to add `Hello World` as text content. So, we add `children` as props of that element

And then, we can render the element that we created like this

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script>
      const newElement = React.createElement("div", {
        children: "Hello World",
      });
      const rootElement = document.getElementById("root");
      ReactDOM.render(newElement, rootElement);
    </script>
  </body>
</html>
```

We can use `ReactDOM.render` to put the React element that we already create to the DOM. For the first argument, we need to pass the element that we want to render, which is `newElement`. For the second argument, we need to pass where we want to put that element, which is `rootElement`

### Tired of writing many syntaxes? you can use JSX instead

From the previous point, we already know that we can create an element using `React.createElement`. But, imagine that we need to build a full website layout using that function. It will make us extremely tired. So JSX comes to the rescue. How if I tell you that instead of using `React.createElement` to create react element, we can use JSX syntax like this

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script>
      const newElement = <div>Hello World</div>;
      const rootElement = document.getElementById("root");
      ReactDOM.render(newElement, rootElement);
    </script>
  </body>
</html>
```

Instead of using `React.createElement`, we use HTML like syntax in javascript. Yes, we already know if that syntax name is `JSX`.

But, how can our browser understand that `JSX` syntax? because basically, we write an HTML-like syntax in javascript. Don't worry, that's why we need [babel](https://babeljs.io/) to translate that `JSX` syntax to `React.createElement`. So, we need to import babel to our HTML file to translate `JSX` to `React.createElement`

```html
<html>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <script type="text/babel">
      const newElement = <div>Hello World</div>;
      const rootElement = document.getElementById("root");
      ReactDOM.render(newElement, rootElement);
    </script>
  </body>
</html>
```

We can import babel to our HTML file from CDN. Also, don't forget to add `type="text/babel"` on the `script` tag, this is how we tell babel to compile our script. Babel will create a compiled script on the `head` tag of our HTML file

### Summary

So there it is, `JSX` is a sugar syntax to create a new React element. So, instead of using `React.createElement`, we can use HTML-like syntax that we already familiar with. And, with help of babel, we can translate that `JSX` syntax back to the `React.createElement`. So, the browser still understand what we write

That's what I get from Epic React. I love how Kent explains JSX. That makes the barrier to understand JSX breakable. And we don't realize that we already learn React and JSX

Want to know more? just go to the [Epic React website](https://epicreact.dev/) and purchase the course. It's totally worth it
