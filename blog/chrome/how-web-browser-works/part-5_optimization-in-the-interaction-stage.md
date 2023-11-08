# 浏览器如何一步一步地工作 — 交互阶段的优化（第 5 部分）

`metadata:`

**原标题:** How does browser work step by step [latest] — optimization in the interaction stage (part 5)

**链接:** https://cabulous.medium.com/how-does-browser-work-in-2019-part-5-optimization-in-the-interaction-stage-66b53b8ec0ad

---

交互阶段的优化是关于优化帧。

与页面交互时，用户会触发事件。一些事件会修改页面布局和样式。根据脚本的不同，浏览器可能需要多次经历渲染阶段，以不断地向我们的屏幕交付新的位图或合成帧。

## FPS and lag (FPS 和延迟)

人眼最多可以看到每秒 1,000 帧 （FPS）。在慢速或静态场景中，我们很少分辨出超过 30 FPS 的差异。但是，它在动态场景中变得很明显，例如玩第一人称射击视频游戏。如今，大多数显示器的刷新率为 60 FPS 或 60 赫兹。

理想情况下，浏览器需要完成渲染阶段并在 1/60 秒内交付一帧。即 16.67 毫秒。如果是这样，用户将看到流畅的动画，并且不会感到滞后。

在交互阶段，通常通过执行JavaScript来触发页面更新。大多数时候，它可能会触发回流和重新绘制。

## Reflow and repaint (回流和重绘)

当一行 JavaScript 更改元素高度时会发生什么？

高度修改不会影响 DOM 树。相反，它需要样式计算。

![20231108203608](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108203608.png)

在样式计算结束时，渲染过程将高度变化反映到布局阶段，从而导致元素几何信息的转换。因此，需要生成布局树。

布局树是其余阶段的依赖关系，因此渲染流程需要经历所有步骤。

此过程称为回流。 

在 JavaScript 中调用时，许多属性检查可能会触发重排，例如“element.offsetLeft”。这是它们的[完整列表](chrome/how-web-browser-works/what-forces-layout-reflow)。

![20231108212931](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108212931.png)

重排的最坏情况是修改 DOM。例如“document.body.appendChild（node）”。回流过程从第一阶段开始，构建 DOM 树。

如何更改元素的背景颜色？

![20231108213013](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108213013.png)

同样，让我们从样式计算开始。新的背景颜色不会修改元素的几何图形信息，因此渲染进程会跳过它。它也不会创建新图层，因此让我们跳过图层阶段。在绘制阶段，渲染进程需要生成新的绘制记录以反映背景颜色更新。然后，它经历了其余的阶段。

此过程称为重绘。

重排和重绘都会降低渲染性能，原因有二：

- The reflow and repaint process is happening in the main thread, so it cannot take care of any events triggered by users’ interaction. When it happens, the users feel lagging.  
重排和重绘过程发生在主线程中，因此它无法处理用户交互触发的任何事件。当它发生时，用户会感到滞后。
- computation process in the layout, layer, and paint phases are expensive.
  重排和绘制阶段的计算过程非常昂贵。

Since the repaint skips the layout and layer phases, it is a relatively better option than reflow.

## Are there any changes that don’t trigger reflow and repaint at all?  (是否有任何更改根本不会触发重排和重绘？)

是的。CSS动画就是一个很好的例子。

A typical CSS animation uses a “transform” property. Modifying “transform” value skips the layout, layer, and paint phases, and starts with the tilling in the compositor thread(合成线程).

Without occupying the main thread, CSS animation doesn’t block users’ interaction. It is the reason that you still see smooth CSS animation even if the page freezes.(在不占用主线程的情况下，CSS动画不会阻止用户的交互。这就是为什么即使页面冻结，您仍然可以看到流畅的CSS动画的原因。)

## Optimization in the interaction stage is about increasing the speed of frame generation (交互阶段的优化是关于提高帧生成速度)

JavaScript 执行、重排和重绘可能会减慢帧生成速度。

执行时，JavaScript 在主线程中运行。这里的想法是尽可能少地使用主线程。

### Reduce the length of time executing JavaScript  (缩短执行 JavaScript 的时间长度)

例如，一个重要的函数可能需要数百毫秒才能完成。它会阻塞主线程并降低性能。

我们可以将函数分成较小的函数，因此每个函数都不会花费很长时间。浏览器有助于在运行函数时优化任务。

Web Worker 是另一种选择。您可以在渲染器进程中将其作为独立线程进行操作。当脚本在 Web Worker 中运行时，主线程是空闲的。如果一段 JavaScript 没有访问 DOM 和样式表，您可以将其移动到 Web Worker。

### Avoid the reflow and repaint when executing JavaScript (避免在执行 JavaScript 时重排和重绘)

当 DOM 树被修改时，渲染器进程将重新计算样式和布局。通常，计算在另一个任务中异步运行。

让我们看一个例子。

![20231108214535](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108214535.png)

![20231108214543](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108214543.png)

第一个任务完成JavaScript执行。然后另一个任务异步运行以计算样式和布局。

如果我们检查脚本末尾的元素高度会怎样？

![20231108214926](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108214926.png)

当计算元素“offsetHeight”时，该值仍然是旧的，因为渲染器进程尚未计算样式和布局。渲染器进程同步开始计算，以便它可以接收更新的值。

:::tip{title=原文}
When evaluating the element “offsetHeight,” the value is still the old one because the renderer process has not yet computed the style and layout. The renderer process starts the calculation synchronously so it can receive the updated value.

意思是因为计算样式和布局是异步执行的，所以获取`offsetHeight`时是旧值，所以渲染进程不得已同步计算了一遍？
:::

![20231108215719](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108215719.png)

在这种情况下，我们强制在 JavaScript 执行任务中进行样式和布局计算。计算会阻塞主线程，直到执行完成。

更糟糕的是？我们在for循环中评估属性。上一个过程会持续发生，直到执行结束。大多数情况下，页面上会出现明显的延迟。

在现实生活中的项目中，很难完全避免评估属性。但是，我们可以尝试尽量减少使用量。

## Using CSS animation and “will-change” (使用 CSS 动画和“will-change”)

CSS动画根本不使用主线程，所以我们可以尽可能多地使用它。

同时，我们可以将“will-change”属性附加到动画元素上。具有“意志更改”的元素将渲染在层树中的独立层上，从而进一步优化合成器线程中的帧生成。

# References

*   [Inside look at modern web browser (part 3)  
    现代 Web 浏览器内部介绍（第 3 部分）](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
*   [High Performance Animations — HTML5 Rocks  
    高性能动画 — HTML5 Rocks](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
*   [What is the highest frame rate (fps) that can be recognized by human perception?  
    人类感知可以识别的最高帧率（fps）是多少？](https://www.quora.com/What-is-the-highest-frame-rate-fps-that-can-be-recognized-by-human-perception-At-what-rate-do-we-essentially-stop-noticing-the-difference)






































