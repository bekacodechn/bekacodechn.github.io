# 优化长任务

`metadata:`

**原标题:** Optimize long tasks

**链接:** https://web.dev/articles/optimize-long-tasks

---

You've been told "don't block the main thread" and "break up your long tasks", but what does it mean to do those things?

你被告知“不要阻塞主线程”和“分解你的长任务”，但是做这些事情意味着什么呢？

If you read lots of stuff about web performance, the advice for keeping your JavaScript apps fast tends to involve some of these tidbits:  

如果你读过很多关于 Web 性能的文章，那么保持 JavaScript 应用程序快速运行的建议往往会涉及以下一些花絮：

*   "Don't block the main thread."  

    “不要阻塞主线程。”
*   "Break up your long tasks."  

    “分解你的长期任务。”

What does any of that mean? Shipping _less_ JavaScript is good, but does that automatically equate to snappier user interfaces throughout the page lifecycle? Maybe, but maybe not.  

这是什么意思？减少 JavaScript 的发布是件好事，但这是否自动等同于在整个页面生命周期中提供更快捷的用户界面？也许，但也许不是。

To get your head around why it's important to optimize tasks in JavaScript, you need to understand the role of tasks and how the browser handles them—and that starts with understanding what a task is.  

要弄清楚为什么在 JavaScript 中优化任务很重要，您需要了解任务的角色以及浏览器如何处理它们——这首先要了解任务是什么。

## What is a task? 什么是任务？

A _task_ is any discrete piece of work that the browser does. Tasks involve work such as rendering, parsing HTML and CSS, running the JavaScript code you write, and other things you may not have direct control over. Of all of this, the JavaScript you write and deploy to the web is a major source of tasks.  

任务是浏览器执行的任何离散工作。任务涉及渲染、解析 HTML 和 CSS、运行您编写的 JavaScript 代码以及您可能无法直接控制的其他工作。在所有这些中，您编写并部署到 Web 的 JavaScript 是任务的主要来源。

![20231116193519](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193519.png)
*A depiction of a task kicked off by a `click` event handler in the performance profiler in Chrome DevTools.*
(*对由 Chrome DevTools 中性能探查器中的 `click` 事件处理程序启动的任务的描述。*)

Tasks impact performance in a couple of ways. For example, when a browser downloads a JavaScript file during startup, it queues tasks to parse and compile that JavaScript so it can be executed. Later on in the page lifecycle, tasks are kicked off when your JavaScript does work such as driving interactions through event handlers, JavaScript-driven animations, and background activity such as analytics collection. All of this stuff—with the exception of [web workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers) and similar APIs—happens on the main thread.  
任务以多种方式影响性能。例如，当浏览器在启动期间下载 JavaScript 文件时，它会将任务排队以解析和编译该 JavaScript，以便可以执行它。在页面生命周期的后期，当 JavaScript 正常工作时，任务将启动，例如通过事件处理程序、JavaScript 驱动的动画和后台活动（如分析收集）驱动交互。除了 Web Worker 和类似的 API 之外，所有这些东西都发生在主线程上。

## What is the main thread?  主线是什么？

The _main thread_ is where most tasks are run in the browser. It's called the main thread for a reason: it's the one thread where nearly all the JavaScript you write does its work.  

主线程是大多数任务在浏览器中运行的地方。它被称为主线程是有原因的：它是你编写的几乎所有 JavaScript 都完成其工作的线程。

The main thread can only process one task at a time. When tasks stretch beyond a certain point—50 milliseconds to be exact—they're classified as _long tasks_. If the user is attempting to interact with the page while a long task runs—or if an important rendering update needs to happen—the browser will be delayed in handling that work. This results in interaction or rendering latency.  

主线程一次只能处理一个任务。当任务超过某个点（准确地说是 50 毫秒）时，它们被归类为长任务。如果用户在长时间任务运行时尝试与页面交互，或者需要进行重要的呈现更新，则浏览器在处理该工作时将延迟。这会导致交互或渲染延迟。

![20231116193905](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193905.png)

*A long task as depicted in Chrome's performance profiler. Long tasks are indicated by a red triangle in the corner of the task, with the blocking portion of the task filled in with a pattern of diagonal red stripes.*

*这是一项漫长的任务，如 Chrome 的性能分析器中所述。长任务由任务一角的红色三角形表示，任务的阻塞部分用对角线红色条纹图案填充。*

You need to _break up_ tasks. This means taking a single long task and dividing it into smaller tasks that take less time to run individually.  

您需要分解任务。这意味着将单个长任务划分为较小的任务，这些任务单独运行所需的时间更少。

![20231116193949](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193949.png)

*A visualization of a single long task versus that same task broken up into five shorter tasks.*

*单个长任务与同一任务的可视化，分解为五个较短的任务。*

This matters because when tasks are broken up, the browser has more opportunities to respond to higher-priority work—and that includes user interactions.  

这很重要，因为当任务被分解时，浏览器有更多机会响应更高优先级的工作，其中包括用户交互。

![20231116194020](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194020.png)
*A visualization of what happens to interactions when tasks are too long and the browser can't respond quickly enough to interactions, versus when longer tasks are broken up into smaller tasks.*

*当任务太长且浏览器无法足够快地响应交互时，与将较长的任务分解为较小的任务时，交互会发生什么情况的可视化。*

At the top of the preceding figure, an event handler queued up by a user interaction had to wait for a single long task before it could run, This delays the interaction from taking place. At the bottom, the event handler has a chance to run sooner. Because the event handler had an opportunity to run in between smaller tasks, it runs sooner than if it had to wait for a long task to finish. In the top example, the user might have noticed lag; in the bottom, the interaction might have felt _instant_.  

在上图的顶部，由用户交互排队的事件处理程序必须等待单个长任务才能运行，这会延迟交互的发生。在底部，事件处理程序有机会更快地运行。由于事件处理程序有机会在较小的任务之间运行，因此它比必须等待长时间任务完成时运行得更快。在顶部示例中，用户可能已经注意到延迟;在底部，交互可能感觉是即时的。

The problem, though, is that the advice of "break up your long tasks" and "don't block the main thread" isn't specific enough unless you already know _how_ to do those things. That's what this guide will explain.  

然而，问题在于，“分解你的长任务”和“不要阻塞主线程”的建议不够具体，除非你已经知道如何做这些事情。这就是本指南将要解释的内容。

## Task management strategies  任务管理策略

A common bit of advice in software architecture is to break up your work into smaller functions. This gives you the benefits of better code readability, and project maintainability. This also makes tests easier to write.  

软件架构中一个常见的建议是将你的工作分解成更小的功能。这为您提供了更好的代码可读性和项目可维护性的好处。这也使测试更易于编写。

```js
function saveSettings () {
  validateForm();
  showSpinner();
  saveToDatabase();
  updateUI();
  sendAnalytics();
}
```

In this example, there's a function named `saveSettings()` that calls five functions within it to do the work, such as validating a form, showing a spinner, sending data, and so on. Conceptually, this is well architected. If you need to debug one of these functions, you can traverse the project tree to figure out what each function does.  

在此示例中，有一个名为的函数，该函数调用其中的 `saveSettings()` 五个函数来执行工作，例如验证表单、显示微调器、发送数据等。从概念上讲，这是很好的架构。如果需要调试其中一个函数，可以遍历项目树以找出每个函数的作用。

The problem, however, is that JavaScript doesn't run each of these functions as separate tasks because they are being executed within the `saveSettings()` function. **This means that all five functions run as a single task.**  

然而，问题在于 JavaScript 不会将这些函数中的每一个作为单独的任务运行，因为它们是在 `saveSettings()` 函数中执行的。这意味着所有五个函数都作为单个任务运行。

:::info
**Key point:** JavaScript works this way because it uses the [run-to-completion model](https://developer.mozilla.org/docs/Web/JavaScript/EventLoop#run-to-completion) of task execution. This means that each task will run until it finishes, regardless of how long it blocks the main thread.  

关键点：JavaScript 之所以以这种方式工作，是因为它使用任务执行的运行到完成模型。这意味着每个任务都将运行直到完成，无论它阻塞主线程多长时间。
:::

![20231116194228](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194228.png)
*A single function `saveSettings()` that calls five functions. The work is run as part of one long monolithic task.*

*调用五个函数的单个函数 `saveSettings()` 。该工作将作为一项长期整体任务的一部分运行。*

In the best case scenario, even just one of those functions can contribute 50 milliseconds or more to the total length of the task. In the worst case, more of those tasks can run quite a bit longer—especially on resource-constrained devices. What follows is a set of strategies you can use to break up and prioritize tasks.  

在最好的情况下，即使只有一个函数也会为任务的总长度贡献 50 毫秒或更多。在最坏的情况下，这些任务中的更多任务可能会运行更长的时间，尤其是在资源受限的设备上。以下是一组可用于分解任务并确定任务优先级的策略。

### Manually defer code execution  手动延迟代码执行

One method developers have used to break up tasks into smaller ones involves `setTimeout()`. With this technique, you pass the function to `setTimeout()`. This postpones execution of the callback into a separate task, even if you specify a timeout of `0`.  

开发人员用来将任务分解为更小任务的一种方法包括 `setTimeout()` .使用此技术，可以将函数传递给 `setTimeout()` 。这会将回调的执行推迟到单独的任务中，即使您指定了超时 `0` 。

```js
function saveSettings () {
  // Do critical work that is user-visible:
  validateForm();
  showSpinner();
  updateUI();

  // Defer work that isn't user-visible to a separate task:
  setTimeout(() => {
    saveToDatabase();
    sendAnalytics();
  }, 0);
}
```

This works well if you have a series of functions that need to run sequentially, but your code may not always be organized this way. For example, you could have a large amount of data that needs to be processed in a loop, and that task could take a very long time if you have millions of items.  

如果您有一系列需要按顺序运行的函数，这很有效，但您的代码可能并不总是以这种方式组织。例如，您可能有大量数据需要在循环中处理，如果您有数百万个项目，则该任务可能需要很长时间。

```js
function processData () {
  for (const item of largeDataArray) {
    // Process the individual item here.
  }
}
```

Using `setTimeout()` here is problematic, because the ergonomics of it make it difficult to implement, and the entire array of data could take a very long time to process, even if each item can be processed very quickly. It all adds up, and `setTimeout()` isn't the right tool for the job—at least not when used this way.  

在这里使用 `setTimeout()` 是有问题的，因为它的人体工程学使其难以实现，并且整个数据数组可能需要很长时间才能处理，即使每个项目都可以非常快速地处理。这一切加起来， `setTimeout()` 并不是这项工作的正确工具——至少在以这种方式使用时不是。

In addition to `setTimeout()`, there are a few other APIs that allow you to defer code execution to a subsequent task. One [involves using `postMessage()` for faster timeouts](https://dbaron.org/log/20100309-faster-timeouts). You can also break up work using `requestIdleCallback()`—but beware!—`requestIdleCallback()` schedules tasks at the lowest possible priority, and only during browser idle time. When the main thread is congested, tasks scheduled with `requestIdleCallback()` may never get to run.  

除了 `setTimeout()` 之外，还有一些其他 API 允许您将代码执行推迟到后续任务。一种是用于 `postMessage()` 更快的超时。您还可以使用（但要注意） `requestIdleCallback()` 以 `requestIdleCallback()` 尽可能低的优先级安排任务，并且仅在浏览器空闲时间安排任务来分解工作。当主线程拥塞时，计划的任务 `requestIdleCallback()` 可能永远无法运行。

### Use `async`/`await` to create yield points  (使用 / 创建屈服点)

A phrase you'll see throughout the rest of this guide is "yield to the main thread"—but what does that mean? Why should you do it? When should you do it?  

在本指南的其余部分，您将看到一句话是“屈服于主线程”——但这是什么意思？为什么要这样做？什么时候应该做？

:::info
**Key point:** When you _yield_ to the main thread, you're giving it an opportunity to handle more important tasks than the ones that are currently queued up. Ideally, you should yield to the main thread whenever you have some crucial user-facing work that needs to execute sooner than if you didn't yield. **Yielding to the main thread creates opportunities for critical work to run sooner.**  

关键点：当你屈服于主线程时，你就给了它一个机会来处理比当前排队的任务更重要的任务。理想情况下，每当您有一些面向用户的关键工作需要比不让步时更快地执行时，您都应该屈服于主线程。屈服于主线程为关键工作创造了更快运行的机会。
:::

When tasks are broken up, other tasks can be prioritized better by the browser's internal prioritization scheme. One way to yield to the main thread involves using a combination of a `Promise` that resolves with a call to `setTimeout()`:  

当任务被分解时，浏览器的内部优先级方案可以更好地确定其他任务的优先级。屈服于主线程的一种方法涉及使用 a `Promise` 的组合，该组合通过调用 to 解析 `setTimeout()` ：

```js
function yieldToMain () {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
```

:::warning
Caution: While this code example returns a Promise that resolves after a call to setTimeout(), it's not the Promise that is responsible for running the rest of the code in a new task, it's the setTimeout() call. Promise callbacks run as microtasks rather than tasks, and therefore don't yield to the main thread.

注意：虽然此代码示例返回在调用setTimeout（）后解析的Promise，但不是Promise负责在新任务中运行其余代码，而是setTimeout（）调用。Promise回调作为微任务而不是任务运行，因此不会屈服于主线程。
:::

In the `saveSettings()` function, you can yield to the main thread after each bit of work if you `await` the `yieldToMain()` function after each function call:  

在函数中 `saveSettings()` ，如果 `await` `yieldToMain()` 函数在每次函数调用后，可以在每次位工作后让步给主线程：

```js
async function saveSettings () {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ]

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread:
    await yieldToMain();
  }
}
```

:::info
**Key point:** You don't have to yield after _every_ function call. For example, if you run two functions that result in critical updates to the user interface, you probably don't want to yield in between them. If you can, let that work run first, _then_ consider yielding in between functions that do less critical or background work that the user doesn't see.  

您不必在_每个_函数调用后屈服。例如，如果您运行两个导致用户界面发生关键更新的函数，您可能不希望在它们之间做出让步。如果可以的话，请先运行该工作，然后考虑在执行用户看不到的不太重要或后台工作的函数之间进行让步。
:::

The result is that the once-monolithic task is now broken up into separate tasks.  

结果是，曾经单一的任务现在被分解为单独的任务。

![20231116195416](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195416.png)
*The `saveSettings()` function now executes its child functions as separate tasks.*

*该 `saveSettings()` 函数现在将其子函数作为单独的任务执行。*

The benefit of using a promise-based approach to yielding rather than manual use of `setTimeout()` is better ergonomics. Yield points become declarative, and therefore easier to write, read, and understand.  

使用基于承诺的屈服方法而不是手动使用的好处 `setTimeout()` 是更好的人体工程学。屈服点变得具有声明性，因此更易于编写、阅读和理解。

### Yield only when necessary  仅在必要时才屈服

What if you have a bunch of tasks, but you only want to yield if the user attempts to interact with the page? That's the kind of thing that [`isInputPending()`](https://developer.chrome.com/articles/isinputpending/) was made for.  

如果你有一堆任务，但你只想在用户尝试与页面交互时让步，该怎么办？这就是为之而生的那种东西 `isInputPending()` 。

`isInputPending()` is a function you can run at any time to determine if the user is attempting to interact with a page element: a call to `isInputPending()` will return `true`. It returns `false` otherwise.  

`isInputPending()` 是一个函数，您可以随时运行以确定用户是否正在尝试与页面元素进行交互：对 `isInputPending()` 的调用将返回 `true` 。否则返回 `false` 。

Say you have a queue of tasks you need to run, but you don't want to get in the way of any inputs. This code—which uses both `isInputPending()` and our custom `yieldToMain()` function—ensures that an input won't be delayed while the user is trying to interact with the page:  

假设您有一个需要运行的任务队列，但您不想妨碍任何输入。此代码（同时使用两者 `isInputPending()` 和我们的自定义 `yieldToMain()` 函数）可确保在用户尝试与页面交互时输入不会延迟：

```js
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  while (tasks.length > 0) {
    // Yield to a pending user input:
    if (navigator.scheduling.isInputPending()) {
      // There's a pending user input. Yield here:
      await yieldToMain();
    } else {
      // Shift the task out of the queue:
      const task = tasks.shift();

      // Run the task:
      task();
    }
  }
}
```

While `saveSettings()` runs, it will loop over the tasks in the queue. If `isInputPending()` returns `true` during the loop, `saveSettings()` will call `yieldToMain()` so the user input can be handled. Otherwise, it will shift the next task off the front of the queue and run it continuously. It will do this until no more tasks are left.  

在 `saveSettings()` 运行时，它将遍历队列中的任务。如果 `isInputPending()` 在循环期间返回 `true` ， `saveSettings()` 将调用 `yieldToMain()` 以便可以处理用户输入。否则，它会将下一个任务从队列的前面移开并连续运行。它将这样做，直到没有更多任务留下。

![20231116195750](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195750.png)
*`saveSettings()` runs a task queue for five tasks, but the user has clicked to open a menu while the second work item was running. `isInputPending()` yields to the main thread to handle the interaction, and resume running the rest of the tasks.*

*`saveSettings()` 为五个任务运行任务队列，但用户在第二个工作项运行时单击以打开菜单。 `isInputPending()` 让位于主线程来处理交互，并继续运行其余任务。*

:::info
**Note:** `isInputPending()` may not always return `true` immediately after user input. This is because it takes time for the operating system to tell the browser that the interaction occurred. This means that other code may have already started executing (as you can see with the `saveToDatabase()` function in the above screenshot). Even if you use `isInputPending()` it's still crucial that you limit the amount of work you do in each function.  

注意： `isInputPending()` 用户输入后可能并不总是立即返回 `true` 。这是因为操作系统需要时间来告知浏览器发生了交互。这意味着其他代码可能已经开始执行（如上面屏幕截图中的 `saveToDatabase()` 函数所示）。即使你使用 `isInputPending()` ，限制你在每个功能中所做的工作量仍然很重要。
:::

Using `isInputPending()` in combination with a yielding mechanism is a great way to get the browser to stop whatever tasks it's processing so that it can respond to critical user-facing interactions. That can help improve your page's ability to respond to the user in many situations when a lot of tasks are in flight.  

与生成机制结合使用 `isInputPending()` 是让浏览器停止它正在处理的任何任务的好方法，以便它可以响应面向用户的关键交互。这有助于提高页面在大量任务正在传输的情况下响应用户的能力。

Another way to use `isInputPending()`—particularly if you're concerned about providing a fallback for browsers that don't support it—is to use a time-based approach in conjunction with the [optional chaining operator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining):  

另一种使用 `isInputPending()` 方式（特别是如果您担心为不支持它的浏览器提供回退）是将基于时间的方法与可选的链接运算符结合使用：

```js
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  let deadline = performance.now() + 50;

  while (tasks.length > 0) {
    // Optional chaining operator used here helps to avoid
    // errors in browsers that don't support `isInputPending`:
    if (navigator.scheduling?.isInputPending() || performance.now() >= deadline) {
      // There's a pending user input, or the
      // deadline has been reached. Yield here:
      await yieldToMain();

      // Extend the deadline:
      deadline = performance.now() + 50;

      // Stop the execution of the current loop and
      // move onto the next iteration:
      continue;
    }

    // Shift the task out of the queue:
    const task = tasks.shift();

    // Run the task:
    task();
  }
}
```

With this approach, you get a fallback for browsers that don't support `isInputPending()` by using a time-based approach that uses (and adjusts) a deadline so that work will be broken up where necessary, whether by yielding to user input, or by a certain point in time.  

使用这种方法，你可以通过使用基于时间的方法为不支持 `isInputPending()` 的浏览器提供回退，该方法使用（并调整）截止时间，以便在必要时分解工作，无论是通过屈服于用户输入，还是在某个时间点。

## Gaps in current APIs

The APIs mentioned so far can help you break up tasks, but they have a significant downside: when you yield to the main thread by deferring code to run in a subsequent task, that code gets added to the very end of the task queue.  
到目前为止提到的 API 可以帮助您分解任务，但它们有一个明显的缺点：当您通过将代码延迟到后续任务中运行时来屈服于主线程时，该代码会被添加到任务队列的最末尾。

If you control all the code on your page, it's possible to create your own scheduler with the ability to prioritize tasks, but third-party scripts won't use your scheduler. In effect, you're not really able to _prioritize_ work in such environments. You can only chunk it up, or explicitly yield to user interactions.  
如果您控制页面上的所有代码，则可以创建自己的计划程序，并能够确定任务的优先级，但第三方脚本不会使用您的计划程序。实际上，在这样的环境中，您实际上无法确定工作的优先级。您只能将其分块，或显式地屈服于用户交互。

Fortunately, there is a dedicated scheduler API that is currently in development that addresses these problems.  
幸运的是，目前正在开发一个专用的调度程序 API 来解决这些问题。

### A dedicated scheduler API  专用调度程序 API

The scheduler API currently offers the `postTask()` function which, at the time of writing, is available in Chromium browsers, and in Firefox behind a flag. `postTask()` allows for finer-grained scheduling of tasks, and is one way to help the browser prioritize work so that low priority tasks yield to the main thread. `postTask()` uses promises, and accepts a `priority` setting.  

调度程序 API 目前提供了该 `postTask()` 功能，在撰写本文时，该功能在 Chromium 浏览器和 Firefox 中可用。 `postTask()` 允许对任务进行更细粒度的调度，并且是帮助浏览器确定工作优先级的一种方式，以便低优先级任务让位于主线程。 `postTask()` 使用 promises，并接受设置 `priority` 。

The `postTask()` API has three priorities you can use:  

该 `postTask()` API 有三个可以使用的优先级：

*   `'background'` for the lowest priority tasks.  

    `'background'` 对于优先级最低的任务。
*   `'user-visible'` for medium priority tasks. This is the default if no `priority` is set.  

    `'user-visible'` 对于中等优先级的任务。如果设置了 no `priority` ，则这是默认值。
*   `'user-blocking'` for critical tasks that need to run at high priority.  

    `'user-blocking'` 适用于需要以高优先级运行的关键任务。

Take the following code as an example, where the `postTask()` API is used to run three tasks at the highest possible priority, and the remaining two tasks at the lowest possible priority.  

以以下代码为例， `postTask()` 其中 API 用于以尽可能高的优先级运行三个任务，并以尽可能低的优先级运行其余两个任务。

```js
function saveSettings () {
  // Validate the form at high priority
  scheduler.postTask(validateForm, {priority: 'user-blocking'});

  // Show the spinner at high priority:
  scheduler.postTask(showSpinner, {priority: 'user-blocking'});

  // Update the database in the background:
  scheduler.postTask(saveToDatabase, {priority: 'background'});

  // Update the user interface at high priority:
  scheduler.postTask(updateUI, {priority: 'user-blocking'});

  // Send analytics data in the background:
  scheduler.postTask(sendAnalytics, {priority: 'background'});
};
```

Here, the priority of tasks is scheduled in such a way that browser-prioritized tasks—such as user interactions—can work their way in.  

在这里，任务的优先级是以这样一种方式安排的，即浏览器优先的任务（例如用户交互）可以发挥作用。

![20231116200045](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116200045.png)
*When `saveSettings()` is run, the function schedules the individual functions using `postTask()`. The critical user-facing work is scheduled at high priority, while work the user doesn't know about is scheduled to run in the background. This allows for user interactions to execute more quickly, as the work is both broken up _and_ prioritized appropriately.*

*`saveSettings()` 运行时，该函数使用 `postTask()` 调度各个函数。面向用户的关键工作被安排为高优先级，而用户不知道的工作被安排在后台运行。这允许用户交互更快地执行，因为工作被适当地分解和确定优先级。*

This is a simplistic example of how `postTask()` can be used. It's possible to instantiate different `TaskController` objects that can share priorities between tasks, including the ability to change priorities for different `TaskController` instances as needed.  

这是一个如何使用的简单示例 `postTask()` 。可以实例化可以在任务之间共享优先级的不同 `TaskController` 对象，包括根据需要更改不同 `TaskController` 实例的优先级的能力。

:::info
**Key point:** [`postTask()` is not supported in all browsers](https://caniuse.com/mdn-api_scheduler_posttask). You can use feature detection to see if it's available, or consider using [a polyfill](https://www.npmjs.com/package/scheduler-polyfill).  

关键点： `postTask()` 并非所有浏览器都支持。您可以使用特征检测来查看它是否可用，或者考虑使用 polyfill。
:::

### Built-in yield with continuation via (内置产量，通过以下方式延续`scheduler.yield`)

:::info
**Key point:** For a more detailed explanation on `scheduler.yield`, read [this post about its origin trial](https://developer.chrome.com/blog/introducing-scheduler-yield-origin-trial/), as well as [its explainer](https://github.com/WICG/scheduling-apis/blob/main/explainers/yield-and-continuation.md).  

关键点：有关更 `scheduler.yield` 详细的解释，请阅读这篇关于其起源试验及其解释器的文章。
:::

*One proposed part of the scheduler API is `scheduler.yield`, an API specifically designed for yielding to the main thread in the browser [which is currently available to try as an origin trial](https://developer.chrome.com/origintrials/#/view_trial/836543630784069633). Its use resembles the `yieldToMain()` function demonstrated earlier in this article:*

*调度程序 API 的一个建议部分是 ，该 API 专门设计用于屈服于浏览器中的主线程 `scheduler.yield` ，目前可作为源试用进行尝试。它的用法类似于本文前面演示的 `yieldToMain()` 函数：*

```js
async function saveSettings () {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ]

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread with the scheduler
    // API's own yielding mechanism:
    await scheduler.yield();
  }
}
```

You'll note that the code above is largely familiar, but instead of using `yieldToMain()`, you call and `await scheduler.yield()` instead.  

您会注意到，上面的代码在很大程度上是熟悉的，但不是使用 `yieldToMain()` ，而是调用 和 `await scheduler.yield()` 。

![20231116201606](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116201606.png)
*A visualization of task execution without yielding, with yielding, and with yielding and continuation. When `scheduler.yield()` is used, task execution picks up where it left off even after the yield point.*

*任务执行的可视化，不屈服，屈服，屈服和延续。使用时 `scheduler.yield()` ，即使在屈服点之后，任务执行也会从中断的地方继续执行。*

:::info
使用`scheduler.yield()`分割的任务在紧急任务（如用户交互）结束后会接着运行，但是被`yieldToMain()`和`await scheduler.yield()`分割的任务会进入事件循环的末尾。
:::

The benefit of `scheduler.yield()` is continuation, which means that if you yield in the middle of a set of tasks, the other scheduled tasks will continue in the same order after the yield point. **This avoids code from third-party scripts from usurping the order of your code's execution.**  

这样做的好处 `scheduler.yield()` 是延续，这意味着如果您在一组任务的中间让步，其他计划任务将在让步点之后以相同的顺序继续。这样可以避免来自第三方脚本的代码篡夺代码的执行顺序。

## Conclusion

Managing tasks is challenging, but doing so helps your page respond more quickly to user interactions. There's no one single piece of advice for managing and prioritizing tasks. Rather, it's a number of different techniques. To reiterate, these are the main things you'll want to consider when managing tasks:  

管理任务具有挑战性，但这样做有助于页面更快地响应用户交互。没有一条关于管理和确定任务优先级的建议。相反，它是许多不同的技术。重申一下，这些是管理任务时要考虑的主要事项：

*   Yield to the main thread for critical, user-facing tasks.  

    让位于主线程执行面向用户的关键任务。
*   Use `isInputPending()` to yield to the main thread when the user is trying to interact with the page.  

    用于 `isInputPending()` 在用户尝试与页面交互时屈服于主线程。
*   Prioritize tasks with `postTask()`.  

    使用 `postTask()` 确定任务的优先级。
*   Finally, **do as little work as possible in your functions.**  

    最后，在函数中尽可能少地做工作。

With one or more of these tools, you should be able to structure the work in your application so that it prioritizes the user's needs, while ensuring that less critical work still gets done. That's going to create a better user experience which is more responsive and more enjoyable to use.  

使用这些工具中的一个或多个，您应该能够构建应用程序中的工作，以便它优先考虑用户的需求，同时确保仍然完成不太重要的工作。这将创造更好的用户体验，响应速度更快，使用起来更愉快。

_Special thanks to [Philip Walton](https://philipwalton.com/) for his technical vetting of this article.  

特别感谢 Philip Walton 对本文的技术审查。_

_Hero image sourced from [Unsplash](https://unsplash.com/), courtesy of [Amirali Mirhashemian](https://unsplash.com/@amir_v_ali).  

主图片来自 Unsplash，由 Amirali Mirhashemian 提供。_
