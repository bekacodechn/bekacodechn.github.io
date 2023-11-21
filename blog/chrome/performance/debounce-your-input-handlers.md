# 取消输入处理程序的抖动

`metadata:`

**原标题:** Debounce your input handlers

**链接:** https://web.dev/articles/debounce-your-input-handlers

---

Input handlers are a potential cause of performance problems in your apps, as they can block frames from completing, and can cause additional and unnecessary layout work.  

输入处理程序是导致应用中出现性能问题的潜在原因，因为它们可能会阻止帧完成，并可能导致额外和不必要的布局工作。

## Summary 总结

*   Avoid long-running input handlers; they can block scrolling.  

    避免长时间运行的输入处理程序;它们可以阻止滚动。

*   Do not make style changes in input handlers.  

    不要在输入处理程序中更改样式。

*   Debounce your handlers; store event values and deal with style changes in the next requestAnimationFrame callback.  

    去抖动你的处理程序;存储事件值，并在下一个 requestAnimationFrame 回调中处理样式更改。

## Avoid long-running input handlers  

避免长时间运行的输入处理程序

In the fastest possible case, when a user interacts with the page, the page’s compositor thread can take the user’s touch input and simply move the content around. This requires no work by the main thread, where JavaScript, layout, styles, or paint are done.  

在最快的情况下，当用户与页面交互时，页面的合成器线程可以接受用户的触摸输入，并简单地移动内容。这不需要主线程的工作，其中 JavaScript、布局、样式或绘制已经完成。

![Lightweight scrolling; compositor only.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/lightweight-scrolling-co-d1e531e7414ca.jpg?imageSlim)

If, however, you attach an input handler, like `touchstart`, `touchmove`, or `touchend`, the compositor thread must wait for this handler to finish executing because you may choose to call `preventDefault()` and stop the touch scroll from taking place. Even if you don’t call `preventDefault()` the compositor must wait, and as such the user’s scroll is blocked, which can result in stuttering and missed frames.  

但是，如果附加了输入处理程序（如 `touchstart` 、 `touchmove` 或 `touchend` ），则合成器线程必须等待此处理程序完成执行，因为您可以选择调用 `preventDefault()` 并停止触摸滚动的发生。即使您不调用 `preventDefault()` 合成器也必须等待，因此用户的滚动被阻止，这可能会导致卡顿和丢失帧。

![Heavy scrolling; compositor is blocked on JavaScript.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/heavy-scrolling-composit-2d22d7b7e1daa.jpg?imageSlim)

In short, you should make sure that any input handlers you run should execute quickly and allow the compositor to do its job.  

简而言之，您应该确保您运行的任何输入处理程序都应该快速执行，并允许合成器完成其工作。

## Avoid style changes in input handlers  

避免输入处理程序中的样式更改

Input handlers, like those for scroll and touch, are scheduled to run just before any `requestAnimationFrame` callbacks.  

输入处理程序（如用于滚动和触摸的处理程序）计划在任何 `requestAnimationFrame` 回调之前运行。

If you make a visual change inside one of those handlers, then at the start of the `requestAnimationFrame`, there will be style changes pending. If you _then_ read visual properties at the start of the requestAnimationFrame callback, as the advice in “[Avoid large, complex layouts and layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)” suggests, you will trigger a forced synchronous layout!  

如果在其中一个处理程序中进行视觉更改，则在 `requestAnimationFrame` 开始时，将有待处理的样式更改。如果随后在 requestAnimationFrame 回调开始时读取视觉属性，则按照“避免大型、复杂的布局和布局抖动”中的建议，将触发强制同步布局！

![Heavy scrolling; compositor is blocked on JavaScript.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/heavy-scrolling-composit-151ee35865c54.jpg?imageSlim)

## Debounce your scroll handlers  

取消滚动处理程序的抖动

The solution to both of the problems above is the same: you should always debounce visual changes to the next `requestAnimationFrame` callback:  

上述两个问题的解决方案是相同的：您应该始终将视觉更改退回到下一个 `requestAnimationFrame` 回调：

```js
let scheduledAnimationFrame = false;

function onScroll (evt) {

    // Store the scroll value for laterz.
    lastScrollY = window.scrollY;

    // Prevent multiple rAF callbacks.
    if (scheduledAnimationFrame) return;

    scheduledAnimationFrame = true;

    requestAnimationFrame((timestamp) => {
      scheduledAnimationFrame = false;
      readAndUpdatePage(timestamp)
    });
}

window.addEventListener('scroll', onScroll);
```

Doing this also has the added benefit of keeping your input handlers light, which is awesome because now you’re not blocking things like scrolling or touch on computationally expensive code!  

这样做还有一个额外的好处，就是让你的输入处理程序保持轻量级，这真是太棒了，因为现在你不会阻止滚动或触摸计算成本高昂的代码！
