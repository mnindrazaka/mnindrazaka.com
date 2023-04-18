---
title: Persisting React State to Local Storage
date: 2021-02-07T05:00:00Z
description: How i persist React state to local storage and keep them sync
image: https://images.unsplash.com/photo-1607437817193-3b3b029b5b75?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80
caption: Photo by [Monirul Islam Shakil](https://unsplash.com/photos/uuhD96VBp4k)
---

Last week, I develop a feature that needs to persist state into local storage. Here I want to share with you how I do it. To simplify my explanation, I will use the button counter component for example. It can increase and decrease the value of the counter by clicking the button. As the counter state changes, it will persist the state to local storage. Here is the simple approach to do it :

```jsx {linenos=table}
const ButtonCounter = () => {
  const defaultCounter = localStorage.getItem("counter");

  const [counter, setCounter] = React.useState(
    defaultCounter ? JSON.parse(defaultCounter) : 0
  );

  const handlePlusButtonClick = () => {
    setCounter(counter + 1);
    localStorage.setItem("counter", JSON.stringify(counter + 1));
  };

  const handleMinusButtonClick = () => {
    setCounter(counter - 1);
    localStorage.setItem("counter", JSON.stringify(counter - 1));
  };

  return (
    <>
      <p>counter : ${counter}</p>
      <button onClick={handlePlusButtonClick}>+</button>
      <button onClick={handleMinusButtonClick}>-</button>
    </>
  );
};
```

So far, there is no critical problem that can cause a bug. But, as you can see, we need to change the local storage item manually whenever we change the state on each event handler. How if we forget to change the local storage item? the value of the state and the local storage will be different. This can easily happen if our component getting bigger and the number of states that we maintain is increasing.

### Keep state and local storage sync using useEffect

To solve the previous problem, we need to find a way to automatically change the local storage item whenever the state changes. There is a way to do it using React useEffect hook. We just need to move the `localStorage.setItem` into useEffect :

```jsx {linenos=table}
const ButtonCounter = () => {
  const defaultCounter = localStorage.getItem("counter");

  const [counter, setCounter] = React.useState(
    defaultCounter ? JSON.parse(defaultCounter) : 0
  );

  React.useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const handlePlusButtonClick = () => {
    setCounter(counter + 1);
  };

  const handleMinusButtonClick = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>counter : ${counter}</p>
      <button onClick={handlePlusButtonClick}>+</button>
      <button onClick={handleMinusButtonClick}>-</button>
    </>
  );
};
```

Whenever the counter state is changed, it will run the side effect that will persist the counter state to local storage. And boom, we don't need to bother changing the local storage manually on each event handler, we just need to focus on the state, and useEffect will do its job to save the state to local storage

### Even better, make it to custom hook

To make our persisting logic reusable on other component, we can make a custom hook called `useLocalStorageState` that can persist any state into local storage. It receive key for the local storage and initial value for the state :

```jsx {linenos=table}
const useLocalStorageState = (key, initialValue) => {
  const defaultValue = localStorage.getItem(key);
  const [state, setState] = React.useState(
    defaultValue ? JSON.parse(defaultValue) : initialValue
  );

  React.useEffect(() => {
    if (state !== undefined) localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const ButtonCounter = () => {
  const [counter, setCounter] = useLocalStorageState("counter", 0);

  const handlePlusButtonClick = () => {
    setCounter(counter + 1);
  };

  const handleMinusButtonClick = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>counter : ${counter}</p>
      <button onClick={handlePlusButtonClick}>+</button>
      <button onClick={handleMinusButtonClick}>-</button>
    </>
  );
};
```

Using this hook, we can persist any state that we want to local storage on any component without even touching the `localStorage` API, cool! So, that how I persist React state to local storage, thanks
