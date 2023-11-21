# 什么是 requestAnimationFrame

`metadata:`

**原标题:** 什么是 requestAnimationFrame

**链接:** https://hentaicracker.github.io/2020/rAF.html#_1-%E4%BB%80%E4%B9%88%E6%98%AF-requestanimationframe

---

> window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

根据以上 [MDN (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)的定义，`requestAnimationFrame` 是浏览器提供的一个按帧对网页进行重绘的 API 。先看下面这个例子，了解一下它是如何使用并运行的：

```js
    const test = document.querySelector<HTMLDivElement>("#test")!;
    
    let i = 0;
    function animation() {
      if (i > 200) return;
    
      test.style.marginLeft = `${i}px`;
    
      window.requestAnimationFrame(animation);
    
      i++;
    }
    
    window.requestAnimationFrame(animation);
```

上面的代码 1s 大约执行 60 次，因为一般的屏幕硬件设备的刷新频率都是 `60Hz`，然后每执行一次大约是 `16.6ms`。使用 `requestAnimationFrame` 的时候，只需要反复调用它就可以实现动画效果。

同时 `requestAnimationFrame` 会返回一个请求 ID，是回调函数列表中的一个唯一值，可以使用 `cancelAnimationFrame` 通过传入该请求 ID 取消回调函数。

```js
    const test = document.querySelector<HTMLDivElement>("#test")!;
    
    let i = 0;
    let requestId: number;
    function animation() {
      test.style.marginLeft = `${i}px`;
    
      requestId = requestAnimationFrame(animation);
    
      i++;
    
      if (i > 200) {
        cancelAnimationFrame(requestId);
      }
    }
    
    animation();
```

下图1是上面例子的执行结果：

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311201804897.gif?imageSlim)

## 2.requestAnimationFrame 执行的困惑

使用 JavaScript 实现动画的方式还可以使用 `setTimeout` ，下面是实现的代码：

```js
    const test = document.querySelector<HTMLDivElement>("#test")!;
    
    let i = 0;
    let timerId: number;
    function animation() {
      test.style.marginLeft = `${i}px`;
    
      // 执行间隔设置为 0，来模仿 requestAnimationFrame
      timerId = setTimeout(animation, 0);
    
      i++;
    
      if (i > 200) {
        clearTimeout(timerId);
      }
    }
    
    animation();
```

在这里将 `setTimeout` 的执行间隔设置为 0，来模仿 `requestAnimationFrame`。

单单从代码上实现的方式，看不出有什么区别，但是从下面具体的实现结果就可以看出很明显的差距了。

下图2是 `setTimeout` 执行结果：

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311201805325.gif?imageSlim)

完整的例子戳 [codesandbox (opens new window)](https://codesandbox.io/s/raf-ycqc3)。

很明显能看出，`setTimeout` 比 `requestAnimationFrame` 实现的动画“快”了很多。这是什么原因呢？

可能你也猜到了，`Event Loop` 和 `requestAnimationFrame` 在执行的时候有些特殊的机制，下面就来探究一下 `Event Loop` 和 `requestAnimationFrame` 的关系。

## [#](https://hentaicracker.github.io/2020/rAF.html#_3-event-loop-%E4%B8%8E-requestanimationframe)3.Event Loop 与 requestAnimationFrame

`Event Loop`（事件循环）是用来协调事件、用户交互、脚本、渲染、网络的一种浏览器内部机制。

`Event Loop` 在浏览器内也分几种：

*   `window event loop`

*   `worker event loop`

*   `worklet event loop`

我们这里主要讨论的是 `window event loop`。也就是浏览器一个渲染进程内主线程所控制的 `Event Loop`。

### [#](https://hentaicracker.github.io/2020/rAF.html#_3-1-task-queue)3.1 **task queue**

一个 `Event Loop` 有一个或多个 `task queues`。一个 `task queue` 是一系列 tasks 的集合。

> 注：一个 task queue 在数据结构上是一个集合，而不是队列，因为事件循环处理模型会从选定的 task queue 中获取第一个**可运行任务（runnable task）**，而不是使第一个 task 出队。

上述内容来自 [HTML规范 (opens new window)](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)。这里让人迷惑的是，明明是集合，为啥还叫“queue”啊 T.T

### [#](https://hentaicracker.github.io/2020/rAF.html#_3-2-task)3.2 **task**

一个 task 可以有多种 `task sources` (任务源)，有哪些任务源呢？来看下规范里的 [Gerneric task sources (opens new window)](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources)：

*   DOM 操作任务源，比如一个元素以非阻塞的方式插入文档

*   用户交互任务源，用户操作（比如 click）事件

*   网络任务源，网络 I/O 响应回调

*   history traversal 任务源，比如 history.back()

除此之外还有像 `Timers` (`setTimeout`、`setInterval`等)、`IndexDB` 操作也是 `task source`。

### [#](https://hentaicracker.github.io/2020/rAF.html#_3-3-microtask)3.3 **microtask**

一个 `event loop` 有一个 `microtask queue`，不过这个 “queue” 它确实就是那个 “`FIFO`” 的队列。

规范里没有指明哪些是 microtask 的任务源，通常认为以下几个是 microtask：

*   promises

*   MutationObserver

*   Object.observe

*   process.nextTick (这个东西是 Node.js 的 API，暂且不讨论)

### [#](https://hentaicracker.github.io/2020/rAF.html#_3-4-event-loop-%E5%A4%84%E7%90%86%E8%BF%87%E7%A8%8B)3.4 **Event Loop 处理过程**

1.  在所选 task queue (taskQueue)中约定必须包含一个可运行任务。如果没有此类 task queue，则跳转至下面 microtasks 步骤。

2.  让 taskQueue 中最老的 task (oldestTask) 变成第一个可执行任务，然后从 taskQueue 中删掉它。

3.  将上面 oldestTask 设置为 event loop 中正在运行的 task。

4.  执行 oldestTask。

5.  将 event loop 中正在运行的 task 设置为 null。

6.  执行 microtasks 检查点（也就是执行 microtasks 队列中的任务）。

7.  设置 hasARenderingOpportunity 为 false。

8.  更新渲染。

9.  如果当前是 `window event loop` 且 task queues 里没有 task 且 microtask queue 是空的，同时渲染时机变量 hasARenderingOpportunity 为 false ，去执行 idle period（`requestIdleCallback`）。

10.  返回到第一步。

以上是来自规范关于 `event loop` 处理过程的精简版整理，省略了部分内容，完整版在[这里 (opens new window)](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)。

大体上来说，`event loop` 就是不停地找 task queues 里是否有可执行的 task ，如果存在即将其推入到 `call stack` （执行栈）里执行，并且在合适的时机更新渲染。

下图3（[源 (opens new window)](https://medium.com/@francesco_rizzi/javascript-main-thread-dissected-43c85fce7e23)）是 `event loop` 在浏览器主线程上运行的一个清晰的流程：

![主线程 event loop](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a4978046b0321eeb.jpg?imageSlim)

关于主线程做了些什么，这又是一个宏大的话题，感兴趣的同学可以看看[浏览器内部揭秘系列文章 (opens new window)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)。

在上面规范的说明中，渲染的流程是在执行 microtasks 队列之后，更进一步，再来看看渲染的处理过程。

### [#](https://hentaicracker.github.io/2020/rAF.html#_3-5-%E6%9B%B4%E6%96%B0%E6%B8%B2%E6%9F%93)3.5 **更新渲染**

1.  遍历当前浏览上下文中所有的 document ，必须按在列表中找到的顺序处理每个 document 。

2.  **渲染时机（Rendering opportunities）**：如果当前浏览上下文中没有到渲染时机则将所有 docs 删除，取消渲染（此处是否存在渲染时机由浏览器自行判断，根据硬件刷新率限制、页面性能或页面是否在后台等因素）。

3.  如果当前文档不为空，设置 hasARenderingOpportunity 为 true 。

4.  不必要的渲染（Unnecessary rendering）：如果浏览器认为更新文档的浏览上下文的呈现不会产生可见效果且文档的 animation frame callbacks 是空的，则取消渲染。（终于看见 requestAnimationFrame 的身影了

5.  从 docs 中删除浏览器认为出于其他原因最好跳过更新渲染的文档。

6.  如果文档的浏览上下文是顶级浏览上下文，则刷新该文档的自动对焦候选对象。

7.  处理 resize 事件，传入一个 performance.now() 时间戳。

8.  处理 scroll 事件，传入一个 performance.now() 时间戳。

9.  处理媒体查询，传入一个 performance.now() 时间戳。

10.  运行 CSS 动画，传入一个 performance.now() 时间戳。

11.  处理全屏事件，传入一个 performance.now() 时间戳。

12.  **执行 requestAnimationFrame 回调，传入一个 performance.now() 时间戳**。

13.  执行 intersectionObserver 回调，传入一个 performance.now() 时间戳。

14.  对每个 document 进行绘制。

15.  更新 ui 并呈现。

下图4（[源 (opens new window)](https://zhuanlan.zhihu.com/p/64917985)）是该过程一个比较清晰的流程：

![life of a frame](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/9f86c81e18fd5bc4.png?imageSlim)

至此，`requestAnimationFrame` 的回调时机就清楚了，它会在 `style/layout/paint` 之前调用。

再回到文章开始提到的 `setTimeout` 动画比 `requestAnimationFrame` 动画更快的问题，这就很好解释了。

首先，**浏览器渲染有个渲染时机（Rendering opportunity）的问题，也就是浏览器会根据当前的浏览上下文判断是否进行渲染，它会尽量高效，只有必要的时候才进行渲染，如果没有界面的改变，就不会渲染**。按照规范里说的一样，因为考虑到硬件的刷新频率限制、页面性能以及页面是否存在后台等等因素，有可能执行完 `setTimeout` 这个 task 之后，发现还没到渲染时机，所以 `setTimeout` 回调了几次之后才进行渲染，此时设置的 marginLeft 和上一次渲染前 marginLeft 的差值要大于 1px 的。

下图5是 `setTimeout` 执行情况，红色圆圈处是两次渲染，中间四次是处理 `setTimout task`，因为屏幕的刷新频率是 60 Hz，所以大致在 16.6ms 之内执行了多次 `setTimeout task` 之后才到了渲染时机并执行渲染。

![两次渲染之间大概执行了4次](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/fc7d3d5e9e6ef6de.png?imageSlim)

`requestAnimationFrame` 帧动画不同之处在于，每次渲染之前都会调用，此时设置的 marginLeft 和上一次渲染前 marginLeft 的差值为 1px 。

下图6是 `requestAnimationFrame` 执行情况，每次调用完都会执行渲染：

![每次调用raf均渲染](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/1e44c1ed9856b085.png?imageSlim)

![调用渲染](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/662ba95b43b7d6f6.png?imageSlim)

所以看上去 `setTimeout` “快”了很多。

## [#](https://hentaicracker.github.io/2020/rAF.html#_4-%E4%B8%8D%E5%90%8C%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0)4.不同浏览器的实现

上面的例子都是在 `Chrome` 下测试的，这个例子基本在所有浏览器下呈现的结果都是一致的，看看下面这个例子，它来自 [jake archilbald (opens new window)](https://jakearchibald.com/)早在 2017 年提出的[这个问题 (opens new window)](https://github.com/whatwg/html/issues/2569)：

```js
    test.style.transform = 'translate(0, 0)';
    
    document.querySelector('button').addEventListener('click', () => {
      const test = document.querySelector('.test');
      test.style.transform = 'translate(400px, 0)';
      
      requestAnimationFrame(() => {
        test.style.transition = 'transform 3s linear';
        test.style.transform = 'translate(200px, 0)';
      });
    });
```

这段代码在 Chrome 、Firefox 执行情况如下图7：

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311201806428.gif?imageSlim)

简单解释一下，该例中 `requestAnimationFrame` 回调里设置的 transform 覆盖了 click listener 里设置的 transform，因为 `requestAnimationFrame` 是在计算 css (style) 之前调用的，所以动画向右移动了 200 px。

> 注：上面代码是在 Chrome 隐藏模式下执行的，当你的 Chrome 浏览器有很多插件或者打开了很多 tab 时，也可能出现从右往左滑动的现象。

在 safari 执行情况如下图8：

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311201806595.gif?imageSlim)

edge 之前也是也是和 safari 一样的执行结果，不过现在已经修复了。

造成这样结果的原因是 **safari 在执行 requestAnimationFrame 回调的时机是在 1 帧渲染之后，所以当前帧调用的 requestAnimationFrame 会在下一帧呈现**。所以 safari 一开始渲染的位置就到了右边 400px 的位置，然后朝着左边 200px 的位置移动。

关于 event loop 和 `requestAnimationFrame` 更详细的执行机制解释，jake 在 jsconf 里有过[专题演讲 (opens new window)](https://www.youtube.com/watch?v=cCOL7MC4Pl0)，推荐小伙伴们看一看。

## [#](https://hentaicracker.github.io/2020/rAF.html#_5-%E5%85%B6%E4%BB%96%E6%89%A7%E8%A1%8C%E8%A7%84%E5%88%99)5.其他执行规则

继续看前面 jake 提出的例子，如果在标准规范实现下，想要实现 safari 呈现的效果（也就是从右往左移动）需要怎么做？

答案是再加一层 `requestAnimationFrame` 调用：

```js
    test.style.transform = 'translate(0, 0)';
    
    document.querySelector('button').addEventListener('click', () => {
      const test = document.querySelector('.test');
      test.style.transform = 'translate(400px, 0)';
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          test.style.transition = 'transform 3s linear';
          test.style.transform = 'translate(200px, 0)';
        });
      });
    });
```

上面这段代码的执行结果和 safari 一致，原因是 `requestAnimationFrame` 每帧只执行 1 次，新定义的 `requestAnimationFrame` 会在下一帧渲染前执行。

## [#](https://hentaicracker.github.io/2020/rAF.html#_6-%E5%85%B6%E4%BB%96%E5%BA%94%E7%94%A8)6.其他应用

从上面的例子我们得知：使用 `setTimeout` 来执行动画之类的视觉变化，很可能导致丢帧，导致卡顿，所以应尽量避免使用 `setTimeout` 来执行动画，推荐使用 `requestAnimationFrame` 来替换它。

`requestAnimationFrame` 除了用来实现动画的效果，还可以用来实现对大任务的分拆执行。

从图 4 的渲染流程图可以得知：**执行 JavaScript task 是在渲染之前，如果在一帧之内 JavaScript 执行时间过长就会阻塞渲染，同样会导致丢帧、卡顿**。

针对这种情况可以将 JavaScript task 划分为各个小块，并使用 `requestAnimationFrame()` 在每个帧上运行。如下例（[源 (opens new window)](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)）所示：

```js
    var taskList = breakBigTaskIntoMicroTasks(monsterTaskList);
    requestAnimationFrame(processTaskList);
    
    function processTaskList(taskStartTime) {
      var taskFinishTime;
    
      do {
        // 假设下一个任务被压入 call stack
        var nextTask = taskList.pop();
    
        // 执行下一个 task
        processTask(nextTask);
    
        // 如何时间足够继续执行下一个
        taskFinishTime = window.performance.now();
      } while (taskFinishTime - taskStartTime < 3);
    
      if (taskList.length > 0) {
        requestAnimationFrame(processTaskList);
      }
    }
```

## 7.参考资料

[WHATWG HTML Standard(opens new window)](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

[现代浏览器内部揭秘(opens new window)](https://developers.google.com/web/updates/2018/09/inside-browser-part3)

[JavaScript main thread. Dissected.(opens new window)](https://medium.com/@francesco_rizzi/javascript-main-thread-dissected-43c85fce7e23)

[requestAnimationFrame Scheduling For Nerds(opens new window)](https://medium.com/@paul_irish/requestanimationframe-scheduling-for-nerds-9c57f7438ef4)

[jake jsconf 演讲(opens new window)](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

[optimize javascript execution(opens new window)](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)

[从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
