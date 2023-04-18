---
title: Why Redux Need Immutability
date: 2021-03-07T05:00:00Z
description: Understanding why redux reducer is not allowed to mutate the previous state and must return a new object
image: https://images.unsplash.com/photo-1586661615438-349a276d098b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Georg Bommeli](https://unsplash.com/photos/ybtUqjybcjE)
highligted: true
---

{{< figure src="/images/post/why-reducer-need-immutability.jpeg" caption="Photo by [Georg Bommeli](https://unsplash.com/photos/ybtUqjybcjE)" >}}

When we working on a redux reducer, we need to make sure that we don't mutate the previous state object. Instead, we need to create a new object : 

```javascript {linenos=table}
function bookReducer(prevState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      // create a new object
      return { ...prevState, title: action.title };
    default:
      throw new Error();
  }
}
```

On that reducer, if we want to set the title of the book, we need to create a new object that will spread the previous state and set the title property. So, why we dont just edit the title of the previous state object ? for example :

```javascript {linenos=table}
function bookReducer(prevState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      // edit the title of previous state object
      prevState.title = action.title
      return prevState
    default:
      throw new Error();
  }
}
```

It will be easier. But, if we do it, the component that consumes that reducer will not be rerendered because redux not aware that there is an update in the state

### Why Redux Not Aware of The State Update If We Just Change The Previous State?

This happens because redux using a shallow equality check to compare the previous state and the current state, this means, it just compares the reference of the state object. If it a new reference (a new object), so there is an update in the state. But if it the same reference (the same object), so the state is not changed at all. See the comparison below :

```javascript {linenos=table}
function booksReducer(prevState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      // This will create a new reference. Component will rerendered
      return { ...prevState, title: action.title };

      // This will use the previous reference. Component will not rerendered
      prevState.title = action.title
      return prevState

    default:
      throw new Error();
  }
}
```

### Why Redux Using the Shallow Equality Check?

The next question is, why redux use shallow equality check to determine if the state is changed or not? why don't just compare by its value instead (deep equality check)? If redux compares the state by its value instead of reference, it will take a longer time to determine if there is an update or not. Because it needs to check every property of the state one by one.

### Summary 

The reducer needs to return a new object because redux using shallow equality check, which means it check the reference of the state to determine if there is an update on the state or not. It uses the shallow equality check to make the checking process faster, so it doesn't need to compare the object by the value that needs a longer time. You can read more about it here : https://redux.js.org/faq/immutable-data