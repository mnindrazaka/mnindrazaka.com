---
title: Why We Can't Use If Statement In JSX
date: 2020-12-15T05:00:00Z
description: Understanding why if statement can't be used in JSX
image: https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Bruce Mars](https://unsplash.com/photos/xj8qrWvuOEs)
---

When I first started to learn React, i have a case to display an element in JSX based on condition. I started to think "Ok, i want to display this element based on condition, so i am gonna use if statement". So, my component look like this :

```jsx {linenos=table,hl_lines=[4]}
const Toggle = () => {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return <button onClick={toggle}>the button is { if (on) return 'on' else return 'off' }</button>
}
```

It is a simple toggle component, that has a button that says "on" and "off" based on a value of the state.

I want the button has "on" text if the state is `true`, otherwise, it will display "off" text. Unfortunately, after I write the if statement, I start to get an error message like this

```jsx
Unexpected token (4:50)
```

Why I get that error? I think it's logically correct. I want to display a text based on condition. So, why I get that error ?. Then, I refactor that if statement using ternary operator

```jsx {linenos=table,hl_lines=[4]}
const Toggle = () => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return <button onClick={toggle}>the button is {on ? "on" : "off"}</button>;
};
```

And boom ! I notice that it is working correctly. But why? it is using the same logic, I just change the if statement to the ternary operator and it is magically working. I was confused and stopped questioning that problem by just using the ternary operator. Fortunately, [Kent C Dodds](https://twitter.com/kentcdodds) explains the reason in [Epic React](https://epicreact.dev/). So, I just want to share it

### JSX is just sugar syntax to React.createElement()

Before I explain the problem, we need to understand how JSX works. JSX is just a sugar syntax to help us write `React.createElement()` faster. So if we write JSX code like this

```jsx {linenos=table,hl_lines=[2]}
const name = 'aka'
<div id="message">hello {name}</div>
```

It will get translated by babel and become like this

```javascript {linenos=table,hl_lines=[2]}
const name = "aka";
React.createElement("div", { id: "message" }, "hello ", name);
```

`React.createElement` need 3 parameter or more. The first parameter is the kind of HTML element you want to render, which is a `div`. The second parameter is the props you want to give to that element, which is `{ id: 'message' }`. And for the rest, is the children you want to put inside that element, which is `hello world` and `name` variable. You can put as many parameters as you want, it will considered as children of the element

If you want to know more about this, you can read my detailed explanation about [JSX](https://mnindrazaka.com/how-to-enter-jsx-world-smoothly/)

### If statement in JSX

Ok, let's get back to the problem, we want to know why we can't use the if statement in JSX. Let's get back to the previous example of a component that uses if statement within it

```jsx {linenos=table}
const Toggle = () => {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return <button onClick={toggle}>the button is { if (on) return 'on' else return 'off' }</button>
}
```

Now, let's think about how it will get translated into `React.createElement` syntax. It will get translated into this

```jsx {linenos=table, hl_lines=[8]}
const Toggle = () => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return React.createElement(
    "button",
    { onClick: toggle },
    "the button is ",
    if (on) return 'on' else return 'off'
  );
};
```

So, the first parameter is `button`, because we want to render a button element. The second parameter is the props `{ onClick: toggle }`. And for the rest, is the children which is a text `the button is ` and if statement that will return `on` and `off` text based on a condition

See the problem? no ? ok, I will help you. The problem is that the if statement will be written to the `React.createElement` last parameter. And technically, we can't write if statement as a function parameter. So it break our code

### Ternary operator in JSX

Ok, now let's try if we use the ternary operator. Here is the same component but using ternary operator instead

```jsx {linenos=table}
const Toggle = () => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return <button onClick={toggle}>the button is {on ? "on" : "off"}</button>;
};
```

Now, lets translate it into `React.createElement`

```jsx {linenos=table, hl_lines=[8]}
const Toggle = () => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return React.createElement(
    "button",
    { onClick: toggle },
    "the button is ",
    on ? "on" : "off"
  );
};
```

You will see that after we translate it, we get a result similar to when we used the if statement. The only difference is it will use the ternary operator in the `React.createElement` last parameter. And, technically, we can use the ternary operator as a function parameter. So our code will work

### Summary

The summary is, we cant use the if statement in JSX because that if statement will be written as a function parameter of `React.createElement`, and we cant do that. This is the same reason why we can't use the `switch case` and `for` statement inside JSX. Hopefully, my explanation will help you to understand why we can't write if statement in JSX
