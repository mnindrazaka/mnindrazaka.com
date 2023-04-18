---
title: Optimize Large List Using Windowing
date: 2021-03-06T05:00:00Z
description: Learn how to optimize render performance of large list using windowing
image: https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80
caption: Photo by [Marc-Olivier Jodoin](https://unsplash.com/photos/NqOInJ-ttqM)
highligted: true
---

If we want to render a large number of items, for example, 10.000 items, it will take a little time before the items show in the browser. Try to hit the show button below and notice that there is a delay before the items show

<iframe src="https://codesandbox.io/embed/snowy-waterfall-0m8nx?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="mnindrazaka-render-large-list"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Did you notice the delay? This happens because the browser needs to create 10.000 DOM nodes and put them into the document. The number of items is too much that causes the browser busy to render it. 

So, we need to reduce the number of items that we render. For example, if you change the item count to only 1.000, it will no longer delay again. Try to change the item count to only 1.000 and hit the show button. Notice that there is no delay.

So reducing the number of items that will be rendered is a working solution, but, how if we still need to render 10.000 items? The solution is using windowing

### What is Windowing

Windowing is a technique to optimize the rendering performance of a large number of items by rendering the items that only visible by the user. When the user scrolls down, the previous items will be changed into the next items. If we need to render 10.000 items, the browser will only render the items that visible to the user, for example, 10 items.

### How is The Comparison

Here is the implementation of windowing using [react-window](https://github.com/bvaughn/react-window). You can see the comparison below

<iframe src="https://codesandbox.io/embed/mnindrazaka-react-window-7qc2q?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mnindrazaka-react-window"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Notice that there will be no delay when we use windowing to render a large number of items. This happens because we just render 11 items, then if we scroll down, the next items will be rendered and change the previous items

### The Disadvantage

Because the next items are rendered as we scrolling, sometimes if we scrolling down too fast, the next items still not rendered, especially when the UI of the item is more complex
