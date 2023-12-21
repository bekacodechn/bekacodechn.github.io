# Tasks, microtasks, queues and schedules

`metadata:`

**链接:** https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

---

:::info

在原文可交互式的执行代码，并带有说明

:::

Actually, if video's more your thing, [Philip Roberts](https://twitter.com/philip_roberts) gave a [great talk at JSConf on the event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) - microtasks aren't covered, but it's a great introduction to the rest. Anyway, on with the show…

实际上，如果你更喜欢视频，菲利普-罗伯茨（Philip Roberts）在 JSConf 上做了一个关于事件循环的精彩演讲，虽然没有涉及微任务，但对其他内容做了很好的介绍。总之，节目继续...

Take this little bit of JavaScript:

就拿 JavaScript 来说吧：

```js
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');
```

结果是:

```js
script start
script end
promise1
promise2
setTimeout
```

The correct answer: `script start`, `script end`, `promise1`, `promise2`, `setTimeout`, but it's pretty wild out there in terms of browser support.

正确答案是：`script start`, `script end`, `promise1`, `promise2`, `setTimeout`，但就浏览器支持而言，这是个非常复杂的问题。

Microsoft Edge, Firefox 40, iOS Safari and desktop Safari 8.0.8 log `setTimeout` before `promise1` and `promise2` - although it appears to be a race condition. This is really weird, as Firefox 39 and Safari 8.0.7 get it consistently right.

Microsoft Edge、Firefox 40、iOS Safari 和桌面 Safari 8.0.8 会在 promise1 和 promise2 之前记录 setTimeout，不过这似乎是一个竞赛条件。这真的很奇怪，因为 Firefox 39 和 Safari 8.0.7 一直都能正确执行。

## Why this happens

To understand this you need to know how the event loop handles tasks and microtasks. This can be a lot to get your head around the first time you encounter it. Deep breath…

要理解这一点，你需要知道事件循环是如何处理任务和微任务的。第一次遇到这种情况时，你可能会有很多困惑。深呼吸...

Each 'thread' gets its own **event loop**, so each web worker gets its own, so it can execute independently, whereas all windows on the same origin share an event loop as they can synchronously communicate. The event loop runs continually, executing any tasks queued. An event loop has multiple task sources which guarantees execution order within that source (specs [such as IndexedDB](http://w3c.github.io/IndexedDB/#database-access-task-source) define their own), but the browser gets to pick which source to take a task from on each turn of the loop. This allows the browser to give preference to performance sensitive tasks such as user-input. Ok ok, stay with me…

每个 "线程 "都有自己的事件循环，因此每个 Web Worker 都有自己的事件循环，可以独立执行任务，而同源所有窗口则共享一个事件循环，因为它们可以同步通信。事件循环持续运行，执行队列中的任何任务。事件循环有多个任务源，可保证任务源内的执行顺序（IndexedDB 等规格自行定义），但浏览器可以在循环的每一轮中选择从哪个任务源执行任务。这就允许浏览器优先处理对性能敏感的任务，如用户输入。好吧好吧，听我说......

**Tasks** are scheduled so the browser can get from its internals into JavaScript/DOM land and ensures these actions happen sequentially. Between tasks, the browser _may_ render updates. Getting from a mouse click to an event callback requires scheduling a task, as does parsing HTML, and in the above example, `setTimeout`.

安排任务是为了让浏览器从内部进入 JavaScript/DOM 区域，并确保这些操作按顺序进行。在任务之间，浏览器可能会渲染更新。从鼠标点击到事件回调需要调度任务，解析 HTML 也是如此，在上面的示例中，setTimeout 也是如此。

`setTimeout` waits for a given delay then schedules a new task for its callback. This is why `setTimeout` is logged after `script end`, as logging `script end` is part of the first task, and `setTimeout` is logged in a separate task. Right, we're almost through this, but I need you to stay strong for this next bit…

setTimeout 会等待给定的延迟，然后为其回调调度一个新任务。这就是 setTimeout 在脚本结束后被记录的原因，因为记录脚本结束是第一个任务的一部分，而 setTimeout 则在另一个任务中记录。好了，我们就快讲完了，但我需要你在接下来的部分保持坚强...

**Microtasks** are usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task. The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task. Any additional microtasks queued during microtasks are added to the end of the queue and also processed. Microtasks include mutation observer callbacks, and as in the above example, promise callbacks.

微任务通常安排在当前执行脚本之后，用于处理应直接发生的事情，例如对批量操作做出反应，或使某些事情异步，而不需要执行全新的任务。只要没有其他 JavaScript 正在执行中，微任务队列就会在回调后以及每个任务结束时进行处理。在微任务期间排队的任何其他微任务都会被添加到队列末尾，也会被处理。微任务包括mutation observer callbacks，以及上例中的承诺回调。

Once a promise settles, or if it has already settled, it queues a _microtask_ for its reactionary callbacks. This ensures promise callbacks are async even if the promise has already settled. So calling `.then(yey, nay)` against a settled promise immediately queues a microtask. This is why `promise1` and `promise2` are logged after `script end`, as the currently running script must finish before microtasks are handled. `promise1` and `promise2` are logged before `setTimeout`, as microtasks always happen before the next task.

一旦承诺确定，或者如果已经确定，它就会为其反应回调排队等候微任务。这确保了承诺回调是异步的，即使承诺已经结算。因此，针对已解决的承诺调用 .then(yey, nay) 会立即排队等待微任务。这就是为什么 promise1 和 promise2 会在脚本结束后被记录的原因，因为当前运行的脚本必须在微任务处理之前结束。promise1 和 promise2 会在 setTimeout 之前被记录，因为微任务总是发生在下一个任务之前。

So, step by step:

![20231122181155](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122181155.png)

```html
<div class="outer">
  <div class="inner"></div>
</div>

<script>
  // Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function () {
  console.log('mutate');
}).observe(outer, {
  attributes: true,
});

// Here's a click listener…
function onClick() {
  console.log('click');

  setTimeout(function () {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function () {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
</script>
```

点击`inner`后的执行结果：

```js
click
promise
mutate
click
promise
mutate
timeout
timeout
```

![20231122181515](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122181515.png)

如果用程序执行点击操作，如下

```js
inner.click()
```

结果将是:

```js
click
// JS stack里还有未执行完的 script，所以微任务不会执行，包括promise、mutate
click
promise
// 在微任务队列有 mutate 还未执行，不会再次添加到微任务队列
mutate
promise
timeout
timeout
```

![20231122182539](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122182539.png)

:::info

更多查看原文，交互演示很好!

:::
