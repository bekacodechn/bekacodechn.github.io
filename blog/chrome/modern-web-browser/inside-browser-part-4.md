# 现代网络浏览器内幕 — 4

`metadata:`

**原标题:** Inside look at modern web browser (part 4)

**链接:** https://developer.chrome.com/blog/inside-browser-part4/

---

## Input is coming to the Compositor 输入到合成器

这是 Chrome 浏览器四部曲系列博客的最后一篇，探讨了 Chrome 浏览器是如何处理我们的代码以显示网站的。在上一篇文章中，我们了解了[渲染过程并学习了合成器](./inside-browser-part-3.md)。在本篇博文中，我们将了解合成器如何在用户输入时实现流畅的交互。

## Input events from the browser's point of view 从浏览器角度看输入事件

当您听到 "输入事件 "时，您可能只会想到在文本框中打字或点击鼠标，但从浏览器的角度来看，输入意味着用户的任何手势。鼠标滚轮滚动是一个输入事件，触摸或鼠标移过也是一个输入事件。

当用户在屏幕上做出触摸等手势时，浏览器进程会首先接收到该手势。不过，浏览器进程只知道手势发生的位置，因为标签页内的内容是由呈现器进程处理的。因此，浏览器进程会向呈现器进程发送事件类型（如 touchstart）及其坐标。呈现器进程通过查找事件目标和运行附加的事件监听器来适当处理该事件。

![20231113164433](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113164433.png)
*图 1：输入事件通过浏览器进程传递到呈现器进程*

## Compositor receives input events 合成器接收输入事件

![202311131647540](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311131647540.gif?imageSlim)

在上一篇文章中，我们了解了合成器如何通过合成光栅化图层来平滑处理滚动。如果页面上没有附加输入事件侦听器，合成器线程就可以完全独立于主线程创建新的合成帧。但如果页面上有一些事件监听器呢？合成器线程如何确定事件是否需要处理？

![20231113164955](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113164955.png)
*图 3：描述输入到非快速滚动区域的示意图*

### Be aware when you write event handlers 编写事件处理程序时要注意

网络开发中常见的事件处理模式是事件委托。由于事件会冒泡，因此可以在最顶层的元素上附加一个事件处理程序，然后根据事件目标委托任务。您可能见过或写过类似下面这样的代码。

```js
document.body.addEventListener('touchstart', event => {
    if (event.target === area) {
        event.preventDefault();
    }
});
```

由于只需为所有元素编写一个事件处理程序，因此这种事件委托模式非常符合人体工程学。但是，如果从浏览器的角度来看这段代码，现在整个页面都被标记为不可快速滚动区域。这意味着，即使您的应用程序不关心页面某些部分的输入，合成器线程也必须与主线程通信，并在每次输入事件到来时等待主线程。这样，合成器的平滑滚动功能就无法实现了。

![20231113165223](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113165223.png)
*图 4：对覆盖整个页面的非快速滚动区域的描述输入示意图*

为了避免这种情况发生，您可以在事件监听器中使用 passive: true 选项。这样浏览器就会知道你仍想在主线程中监听事件，但合成器也可以继续合成新帧。

```js
document.body.addEventListener('touchstart', event => {
    if (event.target === area) {
        event.preventDefault()
    }
 }, {passive: true});
```

## Check if the event is cancelable 检查事件是否可取消

试想一下，如果您想将页面中的一个方框的滚动方向限制为只能横向滚动，您会怎么做呢？

![20231113165516](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113165516.png)
*图 5：部分页面固定为水平滚动的网页*

在指针事件中使用 `passive: true` 选项意味着页面滚动可以平滑，但当您想要`preventDefault`以限制滚动方向时，垂直滚动可能已经开始。您可以使用 `event.cancelable` 方法来检查这一点

```js
document.body.addEventListener('pointermove', event => {
    if (event.cancelable) {
        event.preventDefault(); // block the native scroll
        /*
        *  do what you want the application to do here
        */
    }
}, {passive: true});
```

或者，您也可以使用 CSS 规则（如 `touch-action`）来完全消除事件处理程序。

```scss
    #area {  touch-action: pan-x;}
```

## Finding the event target

![20231113170030](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113170030.png)
*图 6：主线程查看绘制记录，询问在 x.y 点上绘制了什么。*

当合成器线程将输入事件发送到主线程时，首先要运行的是找到事件目标的命中测试。命中测试使用渲染过程中生成的绘制记录数据来找出事件发生的点坐标下的内容。

:::tip{title=原文}
When the compositor thread sends an input event to the main thread, the first thing to run is a hit test to find the event target. Hit test uses paint records data that was generated in the rendering process to find out what is underneath the point coordinates in which the event occurred.
:::

## Minimizing event dispatches to the main thread 尽量减少主线程的事件派发

在上一篇文章中，我们讨论了典型显示器每秒刷新屏幕 60 次的情况，以及我们需要如何跟上节奏以实现流畅的动画效果。在输入方面，典型的触摸屏设备每秒会产生 60-120 次触摸事件，而典型的鼠标每秒会产生 100 次事件。输入事件的保真度高于我们的屏幕刷新速度。

如果像 `touchmove` 这样的连续事件每秒向主线程发送 120 次，那么与屏幕刷新的速度相比，可能会触发过多的命中测试(hit test)和 JavaScript 执行。

![20231113170425](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113170425.png)
*Figure 7: Events flooding(洪水) the frame timeline causing page jank(事件太多导致页面卡顿)*

为了尽量减少对主线程的过多调用，Chrome 浏览器会将连续事件（如`wheel`, `mousewheel`, `mousemove`, `pointermove`, `touchmove`）聚合在一起，并将分派延迟到下一个 `requestAnimationFrame` 之前。

![20231113170824](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113170824.png)
*图 8：时间线与之前相同，但事件正在凝聚和延迟*

任何离散事件，如`keydown`, `keyup`, `mouseup`, `mousedown`, `touchstart`, 和 `touchend`，都会立即被派发。

## Use `getCoalescedEvents` to get intra-frame events (使用 getCoalescedEvents 获取帧内事件)

对于大多数网络应用程序来说，凝聚事件足以提供良好的用户体验。但是，如果您正在构建绘图应用程序并根据 `touchmove` 坐标绘制路径，您可能会丢失中间的坐标来绘制平滑的线条。在这种情况下，您可以使用指针事件中的 `getCoalescedEvents` 方法来获取有关这些聚合事件的信息。

![20231113171116](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113171116.png)
*图 9：左侧是平滑的触摸手势路径，右侧是凝聚的有限路径*

```js
window.addEventListener('pointermove', event => {
    const events = event.getCoalescedEvents();
    for (let event of events) {
        const x = event.pageX;
        const y = event.pageY;
        // draw a line using x and y coordinates.
    }
});
```

## Next steps

在本系列中，我们介绍了网络浏览器的内部工作原理。如果您从未想过 DevTools 为什么建议在事件处理程序中添加 `{passive: true}` 或为什么要在脚本标签中写入 `async` 属性，我希望本系列能让您了解浏览器为什么需要这些信息来提供更快、更流畅的网络体验。

### Use Lighthouse

如果你想让自己的代码对浏览器更友好，但又不知道从何下手，那么 [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) 是一款可以对任何网站进行审计的工具，它能为你提供一份报告，说明哪些做法是正确的，哪些需要改进。阅读审核列表还能让你了解浏览器关注哪些方面。

### Learn how to measure performance

不同网站的性能调整可能会有所不同，因此您必须测量网站的性能并决定最适合您网站的调整。Chrome DevTools 团队有一些关于[如何衡量网站性能](https://developers.google.com/web/tools/chrome-devtools/speed/get-started)的教程。

### Add Feature Policy to your site

如果您想多走一步，[功能策略](https://developers.google.com/web/updates/2018/06/feature-policy)是一项新的网络平台功能，它可以在您创建项目时为您提供保护。打开功能策略可以保证应用程序的特定行为，防止您犯错。例如，如果你想确保你的应用程序永远不会阻塞解析，你可以在同步脚本策略下运行你的应用程序。当启用 `sync-script：none` 时，会阻止阻塞解析器的 JavaScript 执行。这样，您的任何代码都不会阻塞解析器，浏览器也无需担心会暂停解析器。

## Wrap up

![20231113171720](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113171720.png)

当我开始创建网站时，我几乎只关心如何编写代码以及怎样才能提高工作效率。这些都很重要，但我们还应该考虑浏**览器如何使用我们编写的代码**。现代浏览器已经并将继续致力于为用户提供更好的网络体验。通过组织我们的代码来善待浏览器，反过来也能改善用户体验。我希望您和我一起努力，善待浏览器！













