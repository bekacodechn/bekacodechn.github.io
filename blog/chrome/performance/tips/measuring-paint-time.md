# 检测浏览器何时在 JavaScript 中绘制Frame

`metadata:`

**原标题:** Detecting when the Browser Paints Frames in JavaScript

**链接:** https://webperf.tips/tip/measuring-paint-time/

---
[asdf](./browser-process-model.md)

您的性能测量是否能捕捉到浏览器向用户渲染像素的时间？

很可能不是！根据我的经验，大多数开发人员都是在 React 或其他 JS 代码构建 DOM 的某个任意时间捕获渲染时间指标。

这并不奇怪，因为除了页面加载时的初始帧绘制之外，浏览器并没有提供通知开发人员绘制事件发生的 API。

在本小贴士中，我们将介绍如何在应用程序生命周期的任意时间点测量像素出现在屏幕上的时间，以及它在引擎下的工作原理。

## Why capture Paint time?

捕获绘制时间是衡量用户最重要的场景之一——UI 呈现在他们的屏幕上！

![20231110234109](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234109.png)

它还可以帮助突出显示DOM更新和生成帧之间的任何额外时间或低效率。

![20231110234225](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234225.png)

![20231110234252](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234252.png)

DOM 更新任务和帧之间的不足之处可能包括

- 渲染步骤时间长-您可能需要一个具有许多元素和昂贵视觉属性的复杂UI
- 长JS任务-您的JS DOM更新任务很慢，并且会阻止浏览器生成帧
- 竞争任务-浏览器的任务队列被任务淹没，并在您的任务和生成帧之间运行其他任务

:::tip{title=原文}
*   _Long Render Steps time_ - you may have due a complex UIs with many elements and expensive visual properties
*   [_Long JS Tasks_](https://webperf.tips/tip/long-tasks) - your JS DOM update Tasks are slow and prevent the browser from producing a Frame
*   [_Competing Tasks_](https://webperf.tips/tip/competing-tasks) - the browser's Task Queue is flooded with Tasks, and runs other tasks between your Task and producing a Frame
:::

## When does Paint occur?

浏览器事件循环负责交错执行 JavaScript 任务（如 React DOM 更新）和在浏览器主线程上呈现框架。

这意味着 JavaScript 中的任何 DOM 更新都必须在浏览器将这些更新可视化地呈现给用户之前完成。

例如，假设您有一些 React 渲染功能，用于向用户展示您的用户界面。React 通过 JavaScript 所做的任何更改都要等到 Paint 运行之后才能在视觉上反映出来。

![20231110234747](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234747.png)

## Detecting when Paint occurs 检测 Paint 何时发生

最灵活且跨浏览器兼容的方法是通过以下代码段来检测何时出现帧绘制：

```js
/**
 * Runs `callback` shortly after the next browser Frame is produced.
 */
function runAfterFramePaint(callback) {
    // Queue a "before Render Steps" callback via requestAnimationFrame.
    requestAnimationFrame(() => {
        const messageChannel = new MessageChannel();

        // Setup the callback to run in a Task
        messageChannel.port1.onmessage = callback;

        // Queue the Task on the Task Queue
        messageChannel.port2.postMessage(undefined);
    });
}
```

您需要在执行 DOM 更新的同一个任务中调用 runAfterFramePaint。

例如

```js
function updateDom() {
    const node = document.getElementById('some-node');

    node.innerText = 'Some Text';

    // Other DOM Updates...
}

function main() {
    performance.mark('App_Start');

    // Updates DOM in this Task
    updateDom();

    // Queues a requestAnimationFrame relative to this executing Task
    runAfterFramePaint(() => {
        performance.mark('App_FrameProduced');
        
        const measure = performance.measure('FrameTime', 'App_Start', 'App_FrameProduced');

        console.log(`The Frame was produced after ${measure.duration}ms`);
    });
}

main();
```

如果我们在主线程上可视化这个片段，它将看起来像这样：(后文会将执行原理)

![20231110235021](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110235021.png)

:::tip
Note: requestAnimationFrame is often abbreviated as rAF and verbally pronounced as "raff".
:::

## How does this work?

鉴于我们的目标是测量框架时间，因此乍一看，这里调用的应用程序接口非常奇特：

- 我们没有制作任何动画 -- 为什么要调用 `requestAnimationFrame`！？
- 我们没有发送任何消息 -- 为什么要发布到一个新的 `MessageChannel`！？

不过，了解浏览器是如何表示这两个应用程序接口的，就会豁然开朗了！

### requestAnimationFrame

requestAnimationFrame 允许网络开发人员在浏览器完成下一个渲染步骤任务之前运行回调。这与普通任务不同，普通任务由事件循环交错进行，并从任务队列中提取。

请观察下图，了解 requestAnimationFrame 回调何时运行：

todo: raf的callback是否应该在下一帧执行？图片是否错误？
![20231111003203](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003203.png)

:::tip
For more details on `requestAnimationFrame`, read my [in-depth tip on the API](https://webperf.tips/tip/request-animation-frame).
:::

### MessageChannel

`MessageChannel` 通常用于在浏览器内的线程或进程之间发布消息，但我们在这里并没有将其用于预期目的！

我在这里提取了 `runAfterFramePaint` 的相关部分，以供参考：

```js
const messageChannel = new MessageChannel();

// Setup the callback to run in a Task
messageChannel.port1.onmessage = callback;

// Queue the Task on the Task Queue
messageChannel.port2.postMessage(undefined);
```

`MessageChannel` 在这里被用作向任务队列发布任务的通用机制。

此外，通过 MessageChannel 发布到任务队列的任务优先级高于大多数其他任务。

因此，我们在这里告诉浏览器要做的是以高优先级将回调作为任务运行。

### Putting it together

当我们在 requestAnimationFrame 中调用 postMessage 时，浏览器会被指示在任务队列中排队等待一个高优先级任务。

![20231111003550](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003550.png)

![20231111003601](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003601.png)

任务队列完成后，浏览器将继续通过完成渲染步骤（总是在 requestAnimationFrame 回调完成后运行）来制作框架。

![20231111004128](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004128.png)

渲染步骤完成后，事件循环会重新从任务队列中提取任务，并选择下一个任务，在本例中，是一个高优先级的`onmessage`任务。

![20231111004400](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004400.png)

现在，我们有了一个进入任务的句柄，该任务会在 "画框 "绘制后不久运行！

## How accurate is this?

This method is not 100% accurate, but it's as close as web developers can get with currently available browser APIs.

A few points of note:

*   `requestAnimationFrame` won't run if the page is hidden (i.e. in a background tab), so you should exclude hidden tabs from your measurements.
*   `MessageChannel` `onmessage` callbacks are high priority, but input events like `click` and `keypress` take precedence, and so it won't always run immediately after a Frame is produced.

## Example

```html

<button id="button1">Update UI!</button>

<br />

<div id="output"></div>

<script type="text/javascript">
    function renderDialog() {
        // Simulate some heavy DOM work by blocking the thread.
        const start = Date.now();

        // Do something for 50ms
        while (Date.now() - start < 50) {
            /* Block the Thread */
        }

        const outputText = `UI updated at timestamp: ${performance.now()}.`;
        output.innerText = outputText;
    }

    function runAfterFramePaint(callback) {
        // Queue a "before Render Steps" callback via requestAnimationFrame.
        requestAnimationFrame(() => {
            const messageChannel = new MessageChannel();

            // Setup the callback to run in a Task
            messageChannel.port1.onmessage = callback;

            // Queue the Task on the Task Queue
            messageChannel.port2.postMessage(undefined);
        });
    }

    const button1 = document.getElementById('button1');

    button1.addEventListener('click', () => {
        performance.mark('Button_Clicked');

        renderDialog();

        performance.mark('DialogDOM_Constructed');

        runAfterFramePaint(() => {
            performance.mark('FrameProduced');

            // Measure time to construct DOM
            performance.measure('JavaScript_Constructing_DOM_Time', 'Button_Clicked', 'DialogDOM_Constructed');

            // Measure time waiting for frame to be produced.
            performance.measure('Frame_Time', 'Button_Clicked', 'FrameProduced');
        });
    });
</script>

```

In this example, I capture two measurements:

*   `JavaScript_Constructing_DOM_Time` - represents the time from click to completing all DOM edits
*   `Frame_Time` - represents the time from click to presenting the DOM edits to the user's screen as a Frame

![20231111004648](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004648.png)

One can observe that the `Frame_Time` is longer than the `JavaScript_Constructing_DOM_Time`, because it includes the Render Steps Tasks:

![20231111004704](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004704.png)


## Conclusion

With this knowledge you can ensure your [performance marks and measures](https://webperf.tips/tip/performance-timing-markers) are user-centric, and capture when your key pixels are visualized on your user's screen.

Consider the following tips next:

*   [Capturing Frame paint time in a React app](https://webperf.tips/tip/react-hook-paint)
*   [The browser rendering pipeline](https://webperf.tips/tip/browser-rendering-pipeline)
*   [requestAnimationFrame in depth](https://webperf.tips/tip/request-animation-frame)
*   [Browser scheduling internals](https://webperf.tips/tip/browser-scheduling-internals)
























