# 深度讲解火焰图 🔥🔥

`metadata:`

**原标题:** Flamegraphs In Depth 🔥🔥

**链接:** https://webperf.tips/tip/flamegraphs-in-depth/

---

现代 Web 应用程序的性能配置文件通常会产生非常复杂的火焰图。

在本提示中，我们将查看 Chromium F12 Profiler 生成的更复杂的火焰图，并学习读取它们的有用技术。

:::tip
请注意，尽管 Chromium Profiler 在技术上会生成冰柱图，但我仅将它们称为火焰图。(火焰图的调用栈自下而上，冰柱图是自上而下，因此冰柱图更准确，但为了和其他平台统一名称都叫火焰图)
:::

## Tasks

在 Chromium F12 分析器中，通常会为主 UI 线程上发生的每个 JavaScript 任务生成火焰图。

冗长且效率低下的任务可能会延迟浏览器生成帧的能力，从而降低用户体验。

## Shape

火焰图（或火焰图的子部分）的形状可以为线程上的 CPU 瓶颈提供很好的线索。

调用堆栈上的第一个函数表示为火焰图的底部，调用堆栈上的最后一个函数表示在尖端。(和调用栈的`Y`轴相反)

![20231110165337](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165337.png)

### Wide Shape

如果火焰图距底座或其他子部分很宽，这表明线程上正在进行同步、缓慢或繁重的工作。

下面是一个宽火焰图的例子，它的底部很宽，靠近顶端的部分也很宽：

![20231110165621](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165621.png)

一般情况下，我建议从宽幅火焰图部分的底部开始，沿着最宽的波段向顶端追踪图形（在 Chromium F12 剖析器中从上到下）。这将帮助您找到低效部分中最大的机会区域。

考虑以下示例火焰图：

![20231110165752](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165752.png)

1.  Start looking at `function a()` at the base  
2.  Notice it calls `function b()` and `function x()`. `b()` looks wider, so I'd investigate(调查) that next.  
3.  Notice `function b()` calls `function c()`  
4.  Notice `function c()` calls `function d()` and `function e()`  
5.  Investigate what `d()` is doing, because `d()` is wider.  

根据我的经验，宽带的常见罪魁祸首是：

*   `while` or `for` Loops with a high iteration count  
*   Highly computational work

### Narrow Shape 窄形状

类似于窄尖峰的火焰图表示执行时间很短，但调用堆栈很深。

以下是一些窄形火焰图示例：

窄尖峰并不一定单独表示 CPU 存在瓶颈，但有时高频率的窄尖峰可能会产生瓶颈。这通常在分析器中表现为一个宽频带，上面有许多窄尖峰。

![20231110170209](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170209.png)

The inefficient（低效） / interesting parts of a narrow spike(窄尖峰) are often near the tip of the spike:

![20231110170400](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170400.png)

在这个例子中，每个尖峰都在执行一些大约 0.14ms 的微操作，比如 `toArray()` 和 `stringify` 等，我们可以在每个尖峰的顶端找到这些信息。

我们看到的基本上是下面的例子：

![20231110170432](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170432.png)

Notice in this example, `d()` is invoked in high frequency, which invokes `e()` and `f()` in high frequency, creating a bottleneck(瓶颈) in `c()`.

Usual suspects I find at the tips of narrow spikes often include:

*   Browser APIs like `createElement`, `setTimeout`, etc.  
*   `RegExp` testing
*   String operations (like URL parsing, `JSON.stringify`)  
*   `for` or `while` loops with a low iteration count  

## Colors

Chromium 性能分析器将根据正在执行的脚本对 JavaScript 堆栈跟踪进行着色。

现代 Web 应用程序通常会对其 JavaScript 有效负载进行代码拆分，因此，将有多个脚本在同一个调用堆栈中执行函数。

请看下面的例子：

![20231110170816](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170816.png)

脚本 1 被着色为蓝色，位于火焰图的底部。脚本 2 被着色为绿色，是脚本 1 的被叫方，位于火焰图的下方和尖端。

:::tip
蓝色部分是火焰图的底部，绿色部分是火焰图的尖端，就像火焰🔥倒挂着一样。
:::

乍一看，可能会将此任务的 CPU 时间归因于脚本 1，因为它位于火焰图的底部。但是，由于脚本 2 显然对大部分工作做出了贡献（大部分火焰图是绿色的，尤其是在尖端），我们可以推断脚本 2 中的代码路径可能是此任务中效率低下的罪魁祸首。

如果您看到高频率的图案或形状似乎是由特定颜色产生的，这可以帮助您快速确定哪个脚本或应用程序的一部分导致了瓶颈。

在下面的示例中，有一个明显的模式，即 Green 脚本调用一个颜色为 Brown 的调用堆栈，该堆栈看起来很慢且运行频率很高。

![20231110171813](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171813.png)

:::tip
还有一组保[留颜色，归因于某些浏览器任务](https://webperf.tips/tip/main-profiler-pane)，可以帮助您发现浏览器 API 的低效调用，例如 Layout 或 `setTimeout` .
:::

## Script and Function Name

选择调用堆栈帧将在“摘要”窗格中显示正在执行的脚本：

![20231110171929](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171929.png)

Chromium Profiler 会将火焰图中的每个堆栈帧映射到正在执行的函数的名称：

![20231110171946](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171946.png)

在上面的此示例中，是函数的名称， `a` 它位于脚本中 `client-runtime...` 。

生产 Web 应用程序应用缩小，因此名称通常很短且不具有描述性。

有关如何将范围限定为火焰图中感兴趣的特定代码路径的详细信息，请遵循有关在探查器中[将范围限定为代码路径](https://webperf.tips/tip/codepath-scoping)的提示。

## Conclusion 结论

我们已经介绍了一些常见的现实世界火焰图图案和形状。

我们还研究了 Chromium Profiler 如何通过对调用堆栈进行着色和标记来帮助我们的分析。

您应该在 Web 应用程序跟踪中看到类似的火焰图，并且现在可以了解这些复杂火焰图中发生的情况。

接下来考虑这些提示！

*   [The Chromium Main Profiler Pane explained  
    Chromium 主性能分析器窗格说明](https://webperf.tips/tip/main-profiler-pane)
*   [Scoping to codepaths in the profiler  
    在探查器中限定代码路径的范围](https://webperf.tips/tip/codepath-scoping)
*   [The Browser Event Loop  
    浏览器事件循环](https://webperf.tips/tip/event-loop)
*   [Code Splitting 代码拆分](https://webperf.tips/tip/code-splitting)
*   [Minification 缩小](https://webperf.tips/tip/resource-minification)