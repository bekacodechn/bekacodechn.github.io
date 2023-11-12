# 如何收集 Web 性能跟踪

`metadata:`

**原标题:** How to Collect a Web Performance Trace

**链接:** https://webperf.tips/tip/collect-a-trace/

---

每当我与有兴趣提高其 Web 产品性能的团队合作时，我问的第一件事就是您是否分析了您的 Web 应用程序？

收集性能跟踪是了解 Web 应用在浏览器上运行方式的最佳方式之一，有助于识别效率低下和瓶颈。

## What is a Trace?

:::tip
Note: I use the terms Profile and Trace interchangeably.

注意：我交替使用术语“配置文件”和“跟踪”。
:::

跟踪（或配置文件）允许开发人员通过 Profiler 从主机进程收集的统计数据，"查看 "其网络应用程序在运行时的执行情况。

这些统计信息被聚合为结构化格式，随后可以加载到可视化中，例如火焰图。

我最常使用的 Profiler 是 Chromium F12 Performance Profiler。

下面是从 Chromium Profiler 生成的可视化效果示例：

![20231109172425](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172425.png)

## Opening the Profiler 打开探查器

打开开发人员工具后，导航到“性能”选项卡。

![20231109172552](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172552.png)

探查器与打开探查器的进程（即在大多数情况下，浏览器选项卡）相关联。

## Start Collecting a Trace 开始收集跟踪

在录制之前，我建议始终检查 截图 选项。

若要开始收集，请单击 UI 中的“录制”按钮。

![20231109172631](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172631.png)

这将开始跟踪该过程。

## Capture your Scenario 捕获方案

开始收集跟踪后，返回到最初为其打开 Chromium DevTools 的选项卡中的 Web 应用。

### Interactivity Scenarios 交互方案

交互式方案包括：

*   Typing
*   Clicking or dragging an in-app UI element  
*   Opening a JavaScript modal or dialog  
*   Navigating between routes of your JavaScript SPA (these are not the same as full page load scenarios)  
    在 JavaScript SPA 的路由之间导航（这些与完整页面加载方案不同）

这些很容易捕获;只需在探查器录制时继续执行方案即可。

### Page Loads 页面加载

对于整页加载方案，我建议在开始收集配置文件之前导航到 `about:blank` 。

这将确保你不会捕获任何无关的 `unload` JavaScript 事件处理程序，并且在导航到 Web 应用时，跟踪更能代表你的实际用户方案。

需要明确的是：

1.  Open the F12 Chromium Profiler  
2.  Navigate the tab to `about:blank`  
3.  Begin recording in the Profiler  
4.  Navigate to the page you want to profile  
5.  Let the page fully load  

## End Recording 结束录制

完成方案的制定后，单击 Profiler 中的 Stop。

![20231109173040](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173040.png)

它将在 Profiler UI 中填充收集到的场景结果。

## Exporting a Trace 导出跟踪

导出跟踪可以方便地与其他工程师共享您的集合以进行团队分析。

若要导出跟踪，请在 Profiler UI 中选择“保存配置文件...”：

![20231109173144](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173144.png)

这将生成一个 `.json` 文件。将其保存在任何地方。

这些 `.json` 跟踪很容易在团队成员之间共享，以便调查性能问题。

## Importing a Trace 导入跟踪

如果要重新访问以前收集的跟踪或从团队成员导入跟踪，请选择“加载配置文件...”按钮：

![20231109173223](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173223.png)

选择一个兼容 `.json` 的文件，它将加载到 UI 中。



















