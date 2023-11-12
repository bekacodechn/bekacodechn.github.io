# Chromium F12 Profiler：主线程窗格

`metadata:`

**原标题:** Chromium F12 Profiler: The Main Thread Pane

**链接:** https://webperf.tips/tip/main-profiler-pane/

**文章副标题:** performance 查看主线程（颜色含义）

---

:::tip{title=火焰图颜色说明：}
- Parsing Html or Css: **蓝色**
- JavaScript Tasks: **橙色**
- Browser APIs，ex: `setTimeout` 或 `createElement`: **棕色**
- Style and Layout: **紫色**
- Paint and Compositing: **绿色**
:::

我花在分析 Web 应用程序性能跟踪的 CPU 组件上的大部分时间都在 Chromium F12 Profiler 的主窗格中。

此窗格可视化主线程上发生的所有 CPU 活动，包括任务和渲染帧。

在本提示中，我们将详细讨论此主窗格，以及如何有效地阅读它。

![20231110185412](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185412.png)

## Representing Time 表示时间

与 Chromium F12 性能分析器中的所有窗格一样，时间从左到右表示。这意味着在跟踪期间收集的早期事件显示在左侧，后面的事件从左到右填充：

![20231110185503](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185503.png)

## Tasks

在主线程上发生的每个执行单元都称为一个任务。

任务以灰色块的形式可视化（表示其执行时间）。JavaScript 任务还将具有详细的调用堆栈信息，以火焰图的形式可视化。

![20231110185551](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185551.png)

并非在主线程上发生的所有任务都是 JavaScript 任务，因此，并非所有任务在 F12 Profiler 中都有详细的火焰图。

您可以通过将鼠标悬停在根任务波段上来查看执行任务所需的时间：

![20231110185607](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185607.png)

## Thread Inactivity (不活动的线程)

如果主线程上没有发生任何任务，则 Profiler UI 会将该时间段保留为空：

![20231110185633](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185633.png)

浏览器事件循环的设计是有意的非阻塞。如果存在相当大的间隙表示主线程不活动，这可能表明您没有给浏览器任何工作要做。

:::info
注意：根据您的情况，您可能希望也可能不希望主线程有一段时间不活动。在我关于[主线程不活动](https://webperf.tips/tip/main-thread-inactivity)的详细提示中了解更多信息。
:::

## Task Colorization (任务着色)

在 Chromium F12 主线程面板中显示的任务中，探查器将对某些活动进行一致的着色，以便于直观地发现瓶颈或效率低下。

### Parsing

HTML 和 CSS 解析被着色为**蓝色**

![20231110190142](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190142.png)

### javaScript Tasks

与 JavaScript 引擎相关的任务通常在底部着色为橙色：

![20231110190310](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190310.png)

与 JavaScript 引擎相关的任务包括脚本编译、执行事件侦听器、触发计时器、垃圾回收以及任何其他与 JavaScript 相关的工作。

在与引擎相关的波段下方，JavaScript 调用堆栈会根据在火焰图中执行捕获的堆栈帧的脚本一致地着色：

![20231110190431](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190431.png)

在此示例中，调用堆栈中包含多个脚本。在 Profiler 中，每个脚本都会在源自它的每个堆栈帧的跟踪中分配一致的颜色。

### Browser APIs

在 JavaScript 调用堆栈中，有时您会看到棕色。这表示正在进行的工作是浏览器 API，例如 `setTimeout` 或 `createElement` ：

![20231110190609](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190609.png)

### Style and Layout

作为浏览器[Render Pipeline](https://webperf.tips/tip/browser-rendering-pipeline)的一部分，重新计算样式和布局将间歇性地运行。这些将被着色为紫色：

![20231110190838](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190838.png)

紫色通常与更新或与支持页面上视觉元素的数据结构交互的任何工作有关。

### Paint and Compositing (绘画和合成)

在“重新计算样式和布局”运行后不久，浏览器通常会运行一个“绘制”事件，有时还会运行一些额外的复合图层。这些将被涂成绿色：

![20231110192011](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192011.png)

着色为绿色的工作通常表示浏览器正准备向用户界面生成像素，并正在执行（或准备执行）某种与图形相关的工作以显示*Frame*。

## Tying Back to the Trace Overview (回溯到跟踪概述)

在探查器的顶部，有“跟踪概述”部分：

![20231110192119](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192119.png)

我们可以利用对 Profiler 颜色的扩展知识来快速发现活动或不活动区域，并猜测正在发生的活动类型。

例如，在我的跟踪中，我可以在“跟踪概述”部分快速查看主要发生的工作类型：

![20231110192150](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192150.png)

此外，我还可以使用 Profiler 的 Selection 功能来钻取感兴趣的区域。例如，如果我想查看我上面提到的 CSS 或 HTML 解析块中发生了什么，我可以将选择范围限定为它：

![20231110192207](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192207.png)

在这里，我可以看到大部分时间都在解析样式表。

