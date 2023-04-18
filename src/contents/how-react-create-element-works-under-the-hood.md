---
title: How React.createElement() works under the hood
date: 2021-03-17T05:00:00Z
description: Step-by-step explanation about the things that happen under the hood when we call React.createElement()
image: https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Lenny Kuhne](https://unsplash.com/photos/jHZ70nRk7Ns)
highligted: true
---

After I learn how to develop a frontend using React in [Epic React](https://epicreact.dev/), I want to be able to contribute to React. So I started taking the first steps to be able to contribute, which was understanding the code. I start by understanding `React.createElement` function. When we call `React.createElement`, there are many things that happen, so I write it here to remind me later and hopefully can also help other people that want to start to contribute too. Here are the things that happen when we call `React.createElement` :

### 1. Validating the type of element

The first thing that happens when we call `React.createElement` is validating the element type. This only happens in the development environment. [Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElementValidator.js#L414) at the time I write this article. 

We pass the element type as the first argument of `React.createElement`

```javascript
// h1 is the element type
React.createElement('h1', { children: "Hello World" })
```

in that example, h1 is the type of element that we create. There is a couple of types that will be considered valid :

#### 1.1. String

If we pass a string as an element type, it will be considered as a valid type. We use string as a type if we want to create a pure HTML element like h1. 

```javascript
React.createElement('h1', { children: "Hello World" })
```

#### 1.2. Function

We can also pass a function as the element type. We use a function as a type if we want to create a custom component. The function that we pass must return something that renderable, for example, a string, number, or another React element

```javascript
const Heading = () => React.createElement('h1', { children: "Hello World" })

// notice that Heading is a function
React.createElement(Heading)
```

In the above example, we create a custom component called `Heading`, then we create an element using that custom component. Notice that `Heading` that we pass as a type is a function

#### 1.3. Symbol

In React, a symbol is used for tagging React element-like types, such as `Fragment`, `StrictMode`, `Profiler`, etc. So if we pass a known symbol as element type, it will be considered as valid

```jsx
// React.Fragment is a symbol
React.createElement(React.Fragment, { children: "Hello World" })

// We usually use JSX instead
<React.Fragment>Hello World</React.Fragment>
```

#### 1.4. Object

There are some cases that we might pass an object as a type. For example, if we wrap our component using `React.memo` to memoize the component.

```javascript
const Heading = () => React.createElement("h1", { children: "Hello world" })

// React.memo will return an object
const MemoizedHeading = React.memo(Heading)

console.log(MemoizedHeading) // { type: function, $$typeof: Symbol.for("react.memo") }

// MemoizedHeading is an object
React.createElement(MemoizedHeading)
```

If `React.createElement` receive an object as a type, it will check if there is a `$$typeof` property that contains a symbol. Then, it will check if the symbol is known. If it a known symbol, then the type is considered valid

Other than the types mentioned above, it will be considered as invalid, for example, `null` or `undefined`. React will show this warning if the type that we pass is invalid

> Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: null.

### 2. Creating the React element

After validating the type of element, React will create the element object, but before it, there is a couple of things that happen:

#### 2.1. Moving children arguments to props object

There 2 ways to add children into the element using `React.createElement`. The first way is by inserting the children into props objects. The second way is passing the children as the third argument of `React.createElement`

```javascript
// insert children into props object
React.createElement("div", { children: ["children 1", "children 2", "children 3"] })

// pass children as the third argument
React.createElement("div", null, "children 1", "children 2", "children 3")
```

If we pass children as the third argument of `React.createElement`, it will be moved to the props object under the hood

```javascript
// insert 3 children into div element
const element = React.createElement(
    "div", 
    { id: "container" }, 
    "children 1", 
    "children 2", 
    "children 3"
)


// that 3 children is moved to props object
console.log(element) 
/* 
{ 
    type: "div", 
    props: {  
        id: "container",
        children: [ "children 1", "children 2", "children 3" ] 
    } 
}
*/
```

If we pass children on props object and as the third argument, the children in the third argument will be prioritized

```javascript
const element = React.createElement(
    "div", 
    // pass children inside props object
    { children: ["children A", "children B", "children C"] }, 
    // also, pass children as third argument
    "children 1", 
    "children 2", 
    "children 3"
)

// the children that we pass in props object is replaced
console.log(element) 
/*
{ 
    type: "div", 
    props: {  
        children: [ "children 1", "children 2", "children 3" ] 
    } 
}
*/
```

[Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElement.js#L386-L402) at the time I write this article

#### 2.2. Set default props value

We can add default props to our component by setting the `defaultProps` property, React will move the value in `defaultProps` to `props`

```javascript
class Message extends React.Component {
    render (
        <div>{this.props.title}</div>
    )
}

// set the default props
Message.defaultProps = {
    title: "Welcome"
}

// create React element without passing props value
const message = React.createElement(Message)

// the props is filled by the value in default props
console.log(message) // { type: function, props: { title: "Welcome" } }

// create React element with props
const message2 = React.createElement(Message, { title: "Hey yo" })

// the default props will be ignored
console.log(message2) // { type: function, props: { title: "Hey yo" } }
```

[Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElement.js#L404-L412) at the time I write this article

#### 2.3. Set warning when accessing key props

We will get a warning if we access the key props inside a component

```jsx
const ListItem = (props) => {
    // we are accessing the key props here, this will trigger warning
    console.log(props.key)
    return <div>{props.children}</h1>
}

const List = () => {
    const items = ["eat", "sleep", "repeat"]
    return (
        <div>
            {items.map((item) => (
                // giving the key props
                <ListItem key={item}>{item}</ListItem>
            ))}
        </div>
    )
}

React.createElement(List)
```

React do this by modifying the access of key property on props object by adding a warning function. So whenever we access the key property, it will show this warning

> Warning: ListItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.

[Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElement.js#L404-L412) at the time I write this article

#### 2.4. Set warning when accessing ref props

We will also get a warning if we access the ref props inside a component

```jsx
const Message = (props) => {
    // we are accessing the ref props here, this will trigger warning
    console.log(props.ref)
    return <h1>{props.children}</h1>
}

const Wrapper = () => {
    // create the ref
    const ref = React.useRef()
    return (
        <div>
            {/* passing the ref */}
           <Message ref={ref}>Hello Everyone</Message>
        </div>
    )
}

React.createElement(Wrapper)
```

React do this by modifying the access of ref property on props object by adding a warning function. So whenever we access the ref property, it will show this warning

> Warning: Message: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.

[Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElement.js#L422-L424) at the time I write this article

#### 2.5. Creating the React element

After doing a couple of things before, React will create the React element. React element is an object that contains the following properties

```javascript
{
    $$typeof,
    type, 
    key, 
    ref,
    props,
    _owner
};
```

React will also add `$$typeof` property that has value `Symbol.for('react.element')`. This helps React for [securing from injection attack](https://overreacted.io/why-do-react-elements-have-typeof-property/). The React element object will also have `_owner` property for recording who is the parent of that element. [Here is where React create the React Element](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElement.js#L427-L435) at the time I write this article

### 3. Validate child key

After React create the React element object, then we will move to the next step, validating the children inside the props object. [Here is where it happens](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElementValidator.js#L475-L479) when I write this article. This step is consist of two smaller step

#### 3.1. Validate is the children is a valid element

React will validate if the children are a valid element. It will be considered as valid if the children is an object that has a `$$typeof` property with value `Symbol.for('react.element')`.

#### 3.2. Validate is the children have key props

If the children are a valid element, React will check if the children have `key` props. If the children don't have `key` props, React will log this warning in the console

> Warning: Each child in a list should have a unique "key" prop.

### 4. Validating fragment props

If the element type that we create is a fragment, it will check the props. A fragment may only have `children` and `key` props on it. 

```javascript
// this will show a warning
React.createElement(React.Fragment, { title: "tes" });
```

If we pass other props except `children` and `key`, React will log this warning in the console

> Warning: Invalid prop `title` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.

[Here is where React validate the fragment props](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElementValidator.js#L481-L482) at the time I write this article

### 5. Validate props type

If the element type is not a fragment and we set the `propTypes` property on the component, React will validate the props value and log a warning if the type of value is not suited with `propTypes`

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// set the propTypes
Greeting.propTypes = {
  name: PropTypes.string
};

// give invalid value to name props
React.createElement(Greeting, { name: 5 });
```

> Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Greeting`, expected `string`.

[Here is where React validate the props type](https://github.com/facebook/react/blob/1d1e49cfa453b58769e87c3c8d321024d58c948f/packages/react/src/ReactElementValidator.js#L484) when I write this article

There are so many things that happen under the hood when we call `React.createElement`. I could have missed something, if I do, I will add it later when I more familiar with the codebase. Hopefully, this can help me to understand the code base and help you too, thanks

