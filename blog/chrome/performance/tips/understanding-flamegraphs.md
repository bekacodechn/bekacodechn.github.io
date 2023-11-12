# 如何阅读火焰图 🔥

`metadata:`

**原标题:** How to Read Flamegraphs 🔥

**链接:** https://webperf.tips/tip/understanding-flamegraphs/

---

火焰图是直观地表示运行时代码堆栈跟踪及其各自作为层次结构执行的时间的行业标准方法。

这些图形旨在帮助工程师快速识别瓶颈并频繁运行代码路径。

以下是 Chromium Profiler 生成的火焰图示例：

![20231110160858](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110160858.png)

## A Simple Example

请考虑以下功能：

```js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
}

function a() {
    b();
}

a();
```

在此示例中， `function a()` 调用 `function b()` 和 `function b()` 调用 `function c()` 。

值得注意的是， `function c()` 需要 50 毫秒才能完成。

为了将此调用堆栈表示为火焰图，我们将执行以下操作：

![20231110161609](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110161609.png)

## More complex examples 更复杂的示例

让我们调整 `function b()` 为调用 `function c()` 3 次，而不是只调用一次。

```js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
    c();
    c();
}

function a() {
    b();
}

a();
```

这将启动 3 次 `function c()` 调用，每次调用需要 50 毫秒。

生成的火焰图将如下所示：

![20231110162006](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162006.png)

请注意以下几点：

*   `function c()` 用 3 个独立的 50ms 块表示，每个块有 50ms 的累积时间。
*   `function b()` 表示为 1个 150ms 块，因此其累计时间为 150ms。
*   `function a()` 表示为 1个 150ms 块，因此其累计时间为 150ms。

:::warning
但实测单个`c`的`50ms`被分成了多个块，每个不足`50ms`，总共多个3个，这是为什么？
:::

![20231110162327](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162327.png)


让我们再进行一次调整并生成另一个火焰图，这次是 `function a()` .

```js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
    c();
    c();
}

function a() {
    b();
    b();
}

a();
```
现在， `function a()` 调用 `function b()` 两次。

生成的火焰图将如下所示：

![20231110162602](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162602.png)

请注意以下几点：

*   `function c()` 以 6 个独立的 50ms 块表示，每个块有 50ms 的累积时间。
*   `function b()` 表示为2个150ms块，每个块的累计时间为150ms。
*   `function a()` 表示为 1 300ms 块，因此其累计时间为 300ms。

实际运行图：
![20231110162811](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162811.png)

## Traditional Flamegraphs vs. Chromium Profiler Icicle Graphs  (传统火焰图与 Chromium Profiler 冰柱图)

到目前为止，我在示例中展示的火焰图是传统的火焰图。许多性能探查器将生成与我所展示的完全相同的图形。

但是，Chromium F12 性能分析器会生成传统火焰图的变体，称为**冰柱图**。

冰柱图显示的数据与火焰图完全相同，只是翻转了 y 轴方向。

例如，在最后一个示例中，Chromium F12 性能分析器冰柱图如下所示：

![20231110162906](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162906.png)

## Looking at a real graph (看一个真实的图表)

我捕获了我们引用的示例代码的 Chromium 性能配置文件，这就是生成的冰柱图！

![20231110163015](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110163015.png)

请注意，由于分析器在运行时跟踪浏览器时收集数据的方式，因此在“主”窗格中看不到 50 毫秒的 `function c()` 块和 `function b()` 调用。因此添加[自定义性能计时标记](./performance-timing-markers.md)可以将分析器收集的内容与“计时”窗格中捕获的更精确的自定义标记进行比较。

```js{1,3,20}
    let i = 0;
    function c() {
      performance.mark(`c() called ${i++}`)
      // Do something for 50ms
      const start = Date.now();
      while (Date.now() - start < 50) {
        /* block the thread */
      }
    }

    function b() {
      c();
      c();
      c();
    }

    function a() {
      b();
      b();
      performance.mark('c() called end')
    }

    a();
```
实测图：

![20231110164309](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110164309.png)

这里真正重要的是，您可以检查调用堆栈中每个函数的累积时间，并查看哪些函数调用加起来达到 302.42 毫秒的累积时间。

从主窗格中捕获的图形中可以清楚地看出什么：

*   有一个 JavaScript 执行任务，累计时间为 302.42ms
*   此任务具有相当短的调用堆栈（4 个堆栈帧）： `(anonymous)` 、、 `a` 和 `b` `c`
*   堆栈帧 `c` 以高频率调用，并且是 JavaScript 任务 302.42ms 累积时间的唯一贡献者。

## Conclusion

您现在了解并可以阅读基本的火焰图！

考虑[深入火焰图提示](https://webperf.tips/tip/flamegraphs-in-depth)，以阅读更多高级火焰图！
