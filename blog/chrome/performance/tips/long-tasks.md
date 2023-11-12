# 长任务：它们是什么以及为什么应该避免它们


`metadata:`

**原标题:** Long Tasks: What they are and why you should avoid them

**链接:** https://webperf.tips/tip/long-tasks/

---

所有网络应用程序都有一个单线程，即主线程，它负责

- 处理用户输入事件，如点击和键盘事件
- 运行 JavaScript 任务，如 React 或其他客户端业务逻辑
- 生成向用户展示像素的*Frame*

这些操作中的每一个都在所谓的 "任务 "中执行。

由于只有一个主线程负责所有这些任务，因此任何执行时间特别长的任务都会堵塞线程，降低用户体验。

在本小贴士中，我们将探讨这些长时间运行的任务（称为 "长任务"），以及为什么要避免它们。

## Prerequisites

## What is considered a Long Task?

A Task is considered a Long Task if it takes longer than **50ms**.

![20231110151036](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110151036.png)

## How Long Tasks degrade the Main Thread (长任务如何降低主线程的性能)

从我关于浏览器[事件循环](./event-loop.md)的提示中我们知道，主线程一次只能运行一个任务。任何未运行的任务都会在浏览器的任务队列中排队：

![20231110153633](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110153633.png)

While a Task is executing on the Main Thread, the Event Loop can not unload other queued Tasks from the Task Queue onto the thread.

长任务的问题尤其严重，因为它会在较长的时间内阻止事件循环卸载任务队列；它基本上会阻止事件循环在主线程上执行任何进一步的工作。

### Frame Degradation 帧降级

浏览器事件循环偶尔会运行渲染步骤，而不是从任务队列中选择任务。渲染步骤任务负责将帧呈现到用户的屏幕。

![20231110154111](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154111.png)

与其他任务一样，当线程上正在运行另一个任务时，渲染步骤无法运行。因此，长任务可能会严重降低浏览器向用户生成帧的能力：(16.7ms内要完成task和style、layout、paint等任务才能顺利生成*Frame*)

![20231110154212](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154212.png)

### Problem: Delaying your Initial Frame (延迟初始帧)

如果 Web 应用程序依赖于 JavaScript 在页面加载时生成初始 UI，则呈现关键帧的速度将取决于呈现关键帧所需的 JavaScript 速度。

例如，如果你的应用依赖于 React 来呈现其初始帧，那么 React 必须构造 DOM，然后必须运行渲染步骤，最后你的用户才能看到你的 UI：

![20231110154428](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154428.png)

在生成 Frame 之前，用户无法看到 UI，因此必须减小 Long Task 的大小，以便浏览器可以更快地生成 Frame：

![20231110154458](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154458.png)

### Problem: Degrading Interactivity (降低交互性)

让我们考虑另一个例子：用户正在输入框中键入内容。

每个按键事件都在浏览器的任务队列中排队，然后放置到主线程上，由事件循环运行。然后，按键通过 Frame 在屏幕上表示：

![20231110154553](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154553.png)

我们希望输入对用户来说响应迅速且流畅，如下所示：

![LongTasks10](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks10.gif)

请注意，用户的每次按键都会立即通过 Frame 在屏幕上表示为像素。

如果在键入时发生长任务，用户将遇到卡顿：

![20231110155320](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155320.png)

对于用户，输入卡顿将表现为延迟帧，以反映其输入事件：

![LongTasks09](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks09.gif)

## What causes Long Tasks? 

Long Tasks typically arise from heavy, slow, or inefficient JavaScript codepaths that are synchronous within a Task.(长任务通常源于任务中同步的繁重、缓慢或低效的 JavaScript 代码路径。)

这些代码路径的常见示例包括：

*   `while` / `for` loops with a high iteration count  
    `while` / `for` 具有高迭代次数的循环
*   Synchronous JavaScript work, often in high frequency, such as:  
    同步 JavaScript 工作，通常频率很高，例如：
    *   String parsing, decoding, concatenation, etc.  
        字符串解析、解码、串联等
    *   Updates to the DOM DOM 更新
    *   Compilation of large scripts  
        大型脚本的编译
*   Inefficient querying of element positioning information, inducing [Layout Thrashing](https://webperf.tips/tip/layout-thrashing)  
    元素定位信息查询效率低下，导致布局抖动
*   Heavy or frequent [Microtasks](https://webperf.tips/tip/microtasks), usually from resolved `Promise`s  
    繁重或频繁的微任务，通常来自已解决 `Promise` 的

长任务不仅体现在与 JavaScript 相关的工作中，而且根据我的经验，这是它们最常见的来源。

## Identifying Long Tasks In the Profiler (在探查器中识别长任务)

如果您收集了 Web 应用程序的跟踪，Chromium F12 Profiler 将通过在 UI 中标记长任务来帮助您识别它们：

![20231110155956](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155956.png)

探查器将把“长任务”表示为火焰图。按照我[关于理解火焰图](https://webperf.tips/tip/understanding-flamegraphs/)的提示来学习如何阅读这些图，并识别任务中的慢速代码路径。

## Conclusion

我们已经介绍了什么是长任务，以及为什么你应该避免它们。

探索以下有关如何优化长任务和改善用户体验的提示：

*   [Remove inefficient work from Tasks  
    从任务中删除低效工作](https://webperf.tips/tip/shrink-tasks)
*   [Defer non-critical work from your critical path  
    从关键路径中推迟非关键工作](https://webperf.tips/tip/defer-noncritical-work)
*   [Decompose Long Tasks into smaller tasks  
    将长任务分解为较小的任务](https://webperf.tips/tip/task-splitting)