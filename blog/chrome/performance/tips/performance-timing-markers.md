# 使用性能时序标记进行📏测量


`metadata:`

**原标题:** Measuring with Performance Timing Markers 📏

**链接:** https://webperf.tips/tip/performance-timing-markers/

---

通过测量，工程师可以确定其应用在运行时的时间是如何花费的。

设置正确的测量有助于：

- 建立基线以比较未来的优化或回归
- 将关键用户场景提炼为利益相关者的可报告指标
- 量化时间的花费方式，以便确定需要改进的领域

在本提示中，我们将讨论浏览器提供的用户计时 API，以及如何使用这些 API 来衡量 Web 应用的性能。

## Prerequisites 先决条件

我建议熟悉：

*   The browser's [Event Loop](https://webperf.tips/tip/event-loop) 浏览器的事件循环
*   The basics of the [Chromium F12 Profiler](https://webperf.tips/tip/profiler-basic-ui)  

## The performance object

浏览器提供了一个 `window.performance` JavaScript 可访问的全局对象，其中包含各种与性能相关的帮助程序。

虽然在这个对象中有许多有趣的属性需要探索，但在这个提示中，我们只讨论两个：

*   `performance.mark()` - used to mark named timestamps  
*   `performance.measure()` - used to measure between named timestamps  

## performance.mark()

`performance.mark()` 允许 Web 开发人员在应用程序执行期间使用高精度时间戳定义时间点。

它接受一个 `name` 参数，用于标识标记。

让我们看一个例子：

```js
function doWork() {
    // Mark the start of Function 1.
    performance.mark('Function1_Start');

    doFunction1();

    // Mark the end of Function 1.
    performance.mark('Function1_End');

    // Mark the start of Function 2.
    performance.mark('Function2_Start');

    doFunction2();

    // Mark the end of Function 2.
    performance.mark('Function2_End');
}
```

每次调用 `performance.mark()` 都会在浏览器性能条目缓冲区中添加一个新条目。每个条目都会保留调用 `mark()` 时的时间戳。

![20231110001743](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110001743.png)

值得注意的是，性能标记不代表持续时间，而代表时间点。

:::tip
注意：请勿将 Date.now() （或类似 Date 方法）用于与性能相关的计时。 Date 时间戳不具有 performance.mark() [高分辨率时间戳](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp)所具有的高精度特征。
:::

## performance.measure()

通过 `performance.measure()` API，网络开发人员可以在 `performance.mark()` 设置的标记之间进行测量。

除了两个标记之外，它还接受一个 `name` 参数，用于标识度量值，并且 `end` ， `start` 它应该在这两个参数之间进行测量。

让我们看一下同一个例子，其中添加了新的性能度量：

```js
function doWork() {
    // Mark the start of Function 1.
    performance.mark('Function1_Start');

    doFunction1();

    // Mark the end of Function 1.
    performance.mark('Function1_End');

    // Mark the start of Function 2.
    performance.mark('Function2_Start');

    doFunction2();

    // Mark the end of Function 2.
    performance.mark('Function2_End');

    // Now that marks are set, we can measure between them!

    // Measure between Function1_Start and Function1_End as a new measure named Measure1 
    const measure1 = performance.measure('Measure1', 'Function1_Start', 'Function1_End');

    console.log('Measure1: ' + measure1.duration);

    // Measure between Function2_Start and Function2_End as a new measure named Measure2 
    const measure2 = performance.measure('Measure2', 'Function2_Start', 'Function2_End');

    console.log('Measure2: ' + measure2.duration);
}
```

Each invocation of `performance.measure()` creates a new performance measure, and adds it to the browser's performance timing buffer. It also returns a `PerformanceMeasure` object which has a handy `duration` property, you can send to your telemetry system.

如果我们要可视化这个例子，它看起来是这样的：

![20231110002151](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002151.png)

## Asynchronous Tasks

当应用程序在运行时执行操作时，可能会调用一些异步 API，例如请求网络数据或响应事件。

这些 API 将对任务进行排队，并在稍后在线程上执行。

You can use `performance.mark()` and `performance.measure()` to understand how long it takes to complete these scenarios across asynchronous operations!

让我们考虑这个例子：

```js
button.addEventListener('click', () => {
    performance.mark('ButtonClicked');

    fetch('data.json').then(res => res.json()).then(data => {
        performance.mark('DataRetrieved');

        renderDialog(data);

        performance.mark('DialogRendered');

        // Measure time waiting for data to arrive on the thread.
        performance.measure('WaitingForData', 'ButtonClicked', 'DataRetrieved');

        // Measure time required to render the modal once data arrived.
        performance.measure('RenderTime', 'DataRetrieved', 'DialogRendered');
    });
});
```

在此示例中，我们测量两个时间段，

- `WaitingForData` - The time between a user clicking a button and data arriving on the thread
- `RenderTime` - The time between data arriving and the DOM updates being completed.

如果我们要可视化这个例子，它看起来像这样：

![20231110002354](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002354.png)

:::tip
**Note**: Measuring network dependency (`data.json` in this example) time in this way doesn't just measure network time -- it measures time for a network resource to be available on the main thread.  

Learn more about the differences in this [advanced tip about loading network resources](https://webperf.tips/tip/advanced-network-resource-loading)  

**Note 2**: While we are measuring the time to create the DOM here, we are not including the time for the pixels to appear on the screen. Learn more in my [tip on measuring frame paint time](https://webperf.tips/tip/measuring-paint-time).  
:::

## Profiler Visualization (Profiler 可视化)

在分析用户方案时，性能标记和度量值非常方便。Chromium Profiler 实际上会在“分析窗格”中可视化这些内容。

我在此演示页面中汇总了[上述示例](https://webperf.tips/examples/performance-timing-markers/example1/)，以便我们可以对其进行分析。

如果在收集配置文件时单击示例中的按钮，您将在 Profiler 的选择分析窗格的 Timings 窗格中看到性能标记和度量：

![20231110004503](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004503.png)

同上
![20231110004411](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004411.png)

可看出：
1. 标记将显示在`Timings`列表。
2. `performance.measure(name, 'mark1', 'mark2')`中的`name`会变为长条，两边是开始和结束的`mark`

在此示例中，您可以看到标记的度量值，并且标记也在那里，尽管很小，并且需要悬停才能识别：

![20231110004708](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004708.png)

## Conclusion

有了性能标记和度量，现在可以开始量化应用方案在运行时的速度。

You can connect the duration properties of your measures to your telemetry system to build an understanding for how fast scenarios are for real users.















