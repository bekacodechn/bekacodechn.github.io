# 事件循环基础知识


`metadata:`

**原标题:** Event Loop Fundamentals

**链接:** https://webperf.tips/tip/event-loop/

---

浏览器事件循环可能是需要掌握的最重要的前端性能概念。它的行为决定了 Web 应用程序在运行时的行为方式。

## The Main Thread

在讨论事件循环之前，我们需要介绍一些关键概念。让我们从主线程开始。

Web 应用程序需要在此单个主线程上执行某些关键操作。导航到 Web 应用程序时，浏览器将创建并向应用程序授予此线程，以便代码在其上执行。

网络应用程序的大部分运行时活动都在这个单线程上进行，线程上的每个活动都在任务中调用。

![20231110010507](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010507.png)

:::tip
注意：这并不意味着浏览器（即 Chrome）是单线程的。现代浏览器既是多[进程的，也是多线程的](https://webperf.tips/tip/browser-process-model/)。
:::

## Tasks

任务是在主线程上执行的运行时执行单元。

任务的一些常见示例包括：

*   Parsing of HTML or CSS  
*   User Input Handling, such as clicking or typing  
*   Compiling and Executing JavaScript  
*   Receiving Network Data
*   The Render Steps (Style, Layout, and Paint; discussed later)  

![20231110010725](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010725.png)

某些任务必须在主线程上运行。例如，任何直接需要访问 DOM（即文档）的任务都必须在主线程上运行（因为 DOM 不是线程安全的）。这包括大多数与用户界面相关的代码。

主线程上一次只能运行一个任务。

此外，一个任务必须在主线程上运行完成后，才能运行另一个任务。浏览器没有 "部分 "执行任务的机制--每个任务都是完整运行的。

在下面的示例中，两个任务依次运行，每个任务都在主线程上完成：

![20231110010916](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010916.png)

## Task Queue

在主线程上不可能同时运行多个任务，因此任何未主动运行的任务都会驻留在一个名为任务队列的数据结构中。

![20231110011042](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011042.png)

当您的Web应用程序在主线程上执行时，浏览器会将任务排队到此数据结构中。

当主线程准备好执行下一个任务时，浏览器也会从该队列中读取数据。

:::info
注意：任务队列不是先进先出队列。大多数浏览器都采用**启发式调度逻辑**，将某些任务排在其他任务之前。

**启发式调度**是什么样的？
:::

## The Render Steps Task and Frames (渲染步骤任务和帧)

渲染步骤任务负责将活动 DOM 和 CSS 样式转换为用户屏幕上的可视像素。

渲染步骤任务完成后生成的内容称为 *Frame*。

![20231110011446](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011446.png)

**对网页 DOM 或 CSS 样式的编辑会通知浏览器需要生成*Frame*。当浏览器检测到需要生成*Frame*时，它会运行渲染步骤任务，而不是从任务队列中运行任务：**

![20231110011553](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011553.png)

There are generally 3 key steps for the Render Steps to complete:

1.  *Style* - Assign CSS colors, fonts, and other styling properties to visual elements
2.  *Layout* - Position visual elements with precise coordinates(精确坐标)
3.  *Paint* - Instruct graphics(图形) libraries on how to draw positioned, styled visual elements

For more details on each step, check out my detailed tip on [the browser rendering pipeline](https://webperf.tips/tip/browser-rendering-pipeline).

## The Event Loop

最后，在介绍了所有这些基础主题后，我们终于可以讨论 "事件循环 "了！

事件循环是这些基础部分之间的协调者。

它本质上是一个无限循环，负责以下工作：

- 从任务队列中选择一个可用任务，并将其置于主线程中运行完成
- 偶尔选择 "渲染步骤 "任务，而不是从任务队列中读取来生成*Frame*

这个伪代码片段总结了事件循环：

```js
while (true) {
    var nextTask;

    // The browser notifies the Event Loop
    // when it's time to render a frame
    if (shouldRenderFrame()) {
        nextTask = getRenderStepsTask();
    } else {
        // If it's not ready for a frame,
        // the Event Loop should run the
        // next Task.
        nextTask = taskQueue.next();
    }

    // Run Task to completion
    runOnMainThread(nextTask);
}
```

在事件循环的每一轮中，它都会决定是选择一项任务还是在屏幕上呈现一个*Frame*。

需要了解的关键是，浏览器可以运行任务或生成*Frame*，但不能同时运行任务和*Frame*。(这一点有少数例外，但我不会在本提示中讨论）。

无论哪个任务最终运行，都要运行到完成为止。

一般来说，任务持续时间应该较短，这样浏览器就能更快地调用渲染步骤，为用户生成一个*Frame*。我的[避免长任务](https://webperf.tips/tip/long-tasks)提示中对此有更详细的介绍。

:::tip
注："事件循环"（Event Loop）是一种 C++ 结构，并不是用 JavaScript 编写的，我只是碰巧在这个伪代码中使用了它。
:::

## Non-Blocking

根据设计，事件循环从不暂停或阻塞主线程；它将不断循环运行任务并产生帧。

但是，当我们需要执行异步任务时会发生什么呢？例如，如果我们的网络应用程序请求网络数据或使用定时器，那么在事件循环中会出现什么情况呢？

浏览器提供的每个异步基元都表示为与事件循环执行模型兼容的任务。

:::tip{title=原文}
Each asynchronous primitive provided by the browser is represented as a Task that is compatible with the Event Loop execution model.
:::

异步浏览器 API 示例包括

*   Loading network data via `XMLHttpRequest` or `fetch`
*   Responding to events via `addEventListener(...)`
*   Timers like `setTimeout` or `setInterval`

For example, utilizing `setTimeout(callback, 500)` does not block the Main Thread, but tells the browser to queue a Task to run `callback` on the Task Queue after 500ms. (500ms后放入任务队列)

## Example: Timer

让我们用一个简单的例子来说明我们所学到的一切。

我们的示例将是一个简单的脚本，每 500ms 在定时器回调中编辑一次 DOM。

```js
    let count = 0;
    
    // Queue a Task on the Task Queue every 500ms
    setInterval(() => {
        // This code runs in a Task
        count++;
        const node = document.getElementById('output');
        node.innerText = `${count} Timers Fired!`
    }, 500);
```

Since this edits the DOM in a Task, the browser will need to generate a Frame to represent the changes as pixels.

Initially, after this script is evaluated, our Main Thread will be free, and the Task Queue will be empty. The browser has been directed to queue a Task after 500ms.

Though the thread has no activity happening during this 500ms waiting time, it is free and able to respond to clicking, typing, or other Tasks if there were any queued.

![20231110013457](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013457.png)

After 500ms, the browser will queue a Task for running our callback for editing the DOM:

![20231110013531](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013531.png)

The Event Loop detects a Task queued to be run, and moves it from the Queue to the Main Thread to run (since the Main Thread is not busy doing anything else).

![20231110013624](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013624.png)

This task is run and edits the DOM, which notifies the Event Loop to run the Render Steps:

![20231110013737](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013737.png)

该*Frame*制作完成后，我们更新的文本就会出现在屏幕上！

每隔 500 毫秒，这些确切的阶段将持续进行，同时队列中会出现一个定时器任务。事件循环将从队列中移除每个任务，并将其置于主线程中运行。这将导致事件循环运行渲染步骤任务并生成帧。

您可以对该示例进行分析，并在分析器中查看任务和帧的生成情况！

Here's a screenshot of it happening in the Profiler:

![20231110015231](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015231.png)

实测图：
![20231110015618](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015618.png)

虽然这个简单的示例只是一个定时器，但您可以将其推广到网络应用程序中的任何操作，无论是点击按钮还是接收网络数据。

Consider these tips next:

## Conclusion

*   [Browser Process Model](https://webperf.tips/tip/browser-process-model)
*   [Browser Scheduling Logic](https://webperf.tips/tip/browser-scheduling-internals)
*   [Browser Rendering Pipeline](https://webperf.tips/tip/browser-rendering-pipeline)
*   [Long Tasks and Performance](https://webperf.tips/tip/long-tasks)
