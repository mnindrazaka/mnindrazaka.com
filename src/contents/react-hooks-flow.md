---
title: React Hooks Flow
date: 2021-01-17T05:00:00Z
description: Understanding React hooks flow
image: https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1666&q=80
caption: Photo by [Mike Lewis HeadSmart Media](https://unsplash.com/photos/waAAaeC9hns)
highligted: true
---

February 16, 2019, the React team has introduced React hooks, special functions that can make developers use features that previously only available on the class component (e.g, state, lifecycle) in the function component. React hooks make community to migrate from class component to function component

One of the common hooks is `useEffect` that can enable side effect in function component. So it can imitate the functionality of lifecycle method like `componentWillMount`, `componentDidMount`, `componentWillReceiveProps`, `shouldComponentUpdate`, `componentDidUpdate`, and `componentWillUnmount` that we usually use in class component

After we replace all lifecycle method with `useEffect`, is that function component still has lifecycle ? The answer is yes, and here is the diagram that explains lifecycle of the function component that we call "Hooks Flow"

![react hook flow](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

Confuse ? ok, lets explain it one by one

### Mount Phase

Mount phase is the phase that happens when a component is rendered for the first time. Here is what happens when a component is mounting :

#### 1. Run lazy initializers

At this step, we run lazy initializers, the function that we pass to `useState` and `useReducer`

#### 2. Render

React will render the component that we create, and doing [reconcilation](https://reactjs.org/docs/reconciliation.html) to know what is the difference between React component object and the DOM

#### 3. React Update DOM

After React know what is the difference between the component object and the DOM, React will commit that difference to the DOM

#### 4. Run Layout Effect

Layout effect is the function that we write in `useLayoutEffect`. So this function will be called before the browser paint the changes that we made to the screen

#### 5. Browser Paint Screen

After running the layout effect, the browser will paint the changes that we made to the screen

#### 6. Run Effect

The screen is changed, now is the time to run the function that we write in `useEffect`

### Update Phase

Update phase happens when a component is rerendered, whatever it rerendered because of changes of the props, changes of the state, or because the parent component is rerendered. Here is what happens when a component is updating

#### 1. Render

React will render the component function to get the component object and doing [reconcilation](https://reactjs.org/docs/reconciliation.html) to know what is the difference between React component object and the DOM

#### 2. React Update DOM

After React know what is the difference between the component object and the DOM, React will commit that difference to the DOM

#### 3. Cleanup Layout Effect

At the update phase, before we run the layout effect, we have to clean up the layout effect by running the function that we returned at `useLayoutEffect`

#### 4. Run Layout Effect

Layout effect is the function that we write in `useLayoutEffect`. So this function will be called before the browser paint the changes that we made to the screen

#### 5. Browser Paint Screen

After running the layout effect, the browser will paint the changes that we made to the screen

#### 6. Cleanup Effect

At the update phase, before we run effect, we have to clean up the effect by running the function that we returned at `useEffect`

#### 7. Run Effect

The screen is changed, now is the time to run the function that we write in `useEffect`

### Unmount Phase

Unmount phase happens when a component is removed from DOM. Here is what happens

#### 1. Cleanup Layout Effect

Before the component removed, React will run the cleanup layout effect by running the returned function inside `useLayoutEffect`

#### 2. Cleanup Effect

After running the layout effect, React will run the cleanup effect by running the returned function inside `useEffect`
