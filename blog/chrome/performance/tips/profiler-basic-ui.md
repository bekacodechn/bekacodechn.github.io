# Chromium F12 性能分析器的基本概述


`metadata:`

**原标题:** A Basic Overview of the Chromium F12 Performance Profiler

**链接:** https://webperf.tips/tip/profiler-basic-ui/

---

Chromium 性能分析器的 UI 一开始可能会让人不知所措，但一旦您了解了它的设置方式，它实际上就非常直观了。

在本提示中，我将引导你了解 Chromium F12 Profiler UI 的基本组件，以便你开始识别 Web 应用的性能瓶颈！

## Prerequisite 先决条件

您应该[收集跟踪](./collect-a-trace)并确保将其加载到 Chromium Profiler 中。

我在本文中使用的加载配置文件如下所示：

![20231109211923](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109211923.png)

## Layout

有三个主要部分：

1.  Trace Overview 跟踪概述
2.  Selection Analysis Pane 选择分析窗格
3.  Details Bottom Pane 详细信息底部窗格

![20231109212058](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212058.png)

## Section 1: Trace Overview

我把这部分看作是整个捕获的个人资料的“主世界地图”或“小地图”。

:::tip{title=原文}
I think about this section as an "Overworld Map" or "minimap" of the entire captured profile.
:::

无论收集的配置文件的持续时间如何，整个配置文件都将适合此顶部部分。

:::tip{title=原文}
Regardless of the duration of the collected profile, the entire profile will fit in this top section.
:::

它提供了一目了然的可视化效果，可用于在“选择分析窗格”中选择或放大以进行更深入的分析。

### Timestamps 时间戳

在 Profiler UI 中，时间从左到右表示，这意味着跟踪的最左侧部分表示集合的开始，随着时间的流逝，后续捕获的事件将填充到右侧。

最初可能令人困惑的一件事是本节上方和下方的时间戳。

![20231109212542](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212542.png)

用于跟踪概述的时间戳是顶部的时间戳（上面用红色圈出）。这些时间戳将跨越跟踪收集的整个持续时间。

蓝色中的时间戳与“选择分析窗格”相关，并由“选择”驱动。

:::tip{title=原文}
The timestamps that are used for the Trace Overview are the timestamps at the top (circled in Red above). These timestamps will span the entire duration of your trace collection.
:::

### Selection

In order to get more details specific sections of the captured trace, we need to use Selection (or Zooming).

Click and drag in the Trace Overview section in an area of interest:

![20231109220801](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109220801.png)

这将使 "选择分析 "窗格的范围仅限于您刚刚选择的区域。请注意，下面的时间戳（蓝色圈内）会发生变化，以反映您选择的部分：

![20231109221040](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221040.png)

您还可以使用鼠标滚轮、WSAD 键或“选择分析窗格”中的单击并拖动来调整“选择/缩放”区域。

### Screenshot Preview 截图预览

如果在跟踪收集期间启用了屏幕截图（我始终建议这样做！），则将鼠标悬停在“跟踪概述”部分上时，应该会看到 UI 预览。

如果想根据特定的视觉场景来选择范围，这一点尤其有用。

例如，您可能想选择用户单击按钮和屏幕上出现模态之间的部分时间，以查看 CPU 和网络在这些事件发生之间的这段时间内的运行情况。

![20231109221525](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221525.png)

## Section 2: Selection Analysis Pane

This is the most complex(复杂) section of the Profiler, and also where I spend most of my time analyzing profiles.

该窗格的范围与您在 "轨迹概览 "部分中设置的选区一致。它将始终适合您所选的整个区域。

### Sub-panes

该用户界面有多个子面板，可以折叠或展开。

For beginners, I recommend expanding only the Main and Network tab, while collapsing the rest:

![20231109221729](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221729.png)

#### Network Sub-pane 网络子窗格

The **Network sub-pane** shows all networking activity within your selection.

You can inspect the type, order, and durations of network requests made in the time slice of your selection.

![20231109222420](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109222420.png)

有关如何阅读此窗格的详细信息，请参阅我在 [Chromium Profiler 网络窗格](https://webperf.tips/tip/network-profiler-pane)中的详细提示。

#### Main Sub-pane 主子窗格

The **Main sub-pane** refers to the Main UI thread of your web application.

在主 UI 线程上发生的所有 CPU 活动都在此处记录为任务。

![20231109223110](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223110.png)

CPU 活动可以包括但不限于：

*   Parsing of HTML 
*   Execution and compilation of JavaScript  
*   Handling User Input such as Clicks and Keypress events  
*   Style, Layout, and Paint, used to prepare for generation of pixels / frames  

有关如何阅读此窗格的详细信息，请参阅我在 [Chromium Profiler 主线程窗格](https://webperf.tips/tip/main-profiler-pane)中的详细提示。

#### Other panes

其他有用的窗格包括：

*   _Frames_ - a representation of frames generated to the screen over time  
    帧 - 随时间推移生成到屏幕上的帧的表示形式
*   _Timings_ - custom [markers](https://webperf.tips/tip/performance-timing-markers) web developers can place to help measure and annotate profiles  
    计时 - Web 开发人员可以放置的自定义标记来帮助测量和注释配置文件
*   _WebWorker_ or _ServiceWorker_ threads - other JavaScript execution threads  
    WebWorker 或 ServiceWorker 线程 - 其他 JavaScript 执行线程
*   _Compositor_ - activity for compositing graphical layers and preparing frame generation  
    Compositor - 用于合成图形图层和准备帧生成的活动

![20231109223545](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223545.png)

这些内容在我关于[高级探查器UI](https://webperf.tips/tip/profiler-advanced-ui)的详细提示中都有介绍。

## Section 3: Details Bottom Pane

在页面底部，有一个详细信息窗格。与“选择分析”窗格类似，此 UI 中共享的统计信息的范围限定为“跟踪概述”中的选择：

![20231109223730](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223730.png)

### Summary Tab

The **Summary Tab** provides stats on what type of CPU activity is consuming your main thread:

In this example, within the 790ms selection, 592ms is being spent on JavaScript activity:

![20231109224839](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224839.png)

It should be noted that the Summary tab adapts to what entity is selected.

For example, if you select a network request, it will provide a summary of the network resource:

![20231109224917](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224917.png)

### Bottom Up Tab 自下而上选项卡

“自下而上”选项卡从反向调用堆栈的角度提供有关所选内容中各种 CPU/JavaScript 活动所花费的时间的信息。

例如，如果 `function a()` 调用 `function b()` ， `b` 则执行时间显示在顶部：

![20231109225344](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225344.png)

这在我关于[火焰图](https://webperf.tips/tip/flamegraphs-in-depth)的详细提示中进行了深入介绍。

### Call Tree Tab “调用树”选项卡

“调用树”选项卡从自上而下的角度（按调用顺序）提供有关各种 CPU/JavaScript 活动所花费时间的信息：

例如，如果 `function a()` 调用 `function b()` ， `a` 执行的累积时间显示在顶部：

![20231109225727](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225727.png)

这也在我关于[火焰图](https://webperf.tips/tip/flamegraphs-in-depth)的详细提示中进行了深入介绍。

### Event Log Tab “事件日志”选项卡

“事件日志”选项卡按从上到下的顺序显示所选内容中的所有事件。

它从左到右显示与主线程子窗格相同的任务信息，但以列表视图的形式排序：

![20231109225959](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225959.png)

## Conclusion 结论

探查器的 UI 非常强大，不知道从哪里开始可能会令人困惑。

通过完成此提示，您现在可以开始查看 Web 应用程序在 CPU 和网络活动方面的运行情况。

我建议查看以下提示，以帮助您进一步了解探查器：

*   [How to Read Flamegraphs  
    如何阅读火焰图](https://webperf.tips/tip/understanding-flamegraphs)
*   [Advanced Profiler UI 高级探查器 UI](https://webperf.tips/tip/profiler-advanced-ui)
*   [Learn how to use the Profiler Network Pane  
    了解如何使用“Profiler”网络窗格](https://webperf.tips/tip/network-profiler-pane)
*   [Advanced usage on the Profiler Main Pane  
    Profiler 主窗格上的高级用法](https://webperf.tips/tip/main-profiler-pane)
