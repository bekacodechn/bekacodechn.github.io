# 在实验室发现 INP

`metadata:`

**原标题:** Manually diagnose slow interactions in the lab

**链接:** https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab

---

Learn how to take your field data into the lab to reproduce and identify the causes behind slow interactions through manual testing.  

了解如何将现场数据带入实验室，通过手动测试重现和确定交互缓慢背后的原因。

A challenging part of optimizing [Interaction to Next Paint (INP)](https://web.dev/articles/inp) is figuring out what's causing poor INP. There's a large variety of potential causes: third-party scripts that schedule many tasks on the main thread, [large DOM sizes](https://web.dev/articles/dom-size-and-interactivity), expensive event callbacks, and more.  

优化 Interaction to Next Paint （INP） 的一个具有挑战性的部分是找出导致 INP 不佳的原因。潜在原因有很多：在主线程上调度许多任务的第三方脚本、较大的 DOM 大小、昂贵的事件回调等等。

Finding ways to fix poor INP can be difficult. To start, you have to know which interactions tend to be responsible for a page's INP. If you don't know which interactions on your website tend to be the slowest from a real user perspective, first read [Find slow interactions in the field](https://web.dev/articles/find-slow-interactions-in-the-field). Once you have field data to guide you, you can test those specific interactions manually in lab tools to work out why those interactions are slow.  

找到解决不良 INP 的方法可能很困难。首先，您必须知道哪些交互往往负责页面的 INP。如果您不知道从真实用户的角度来看，您网站上的哪些互动往往是最慢的，请先阅读查找字段中的慢速互动。一旦您有现场数据来指导您，您就可以在实验室工具中手动测试这些特定的交互，以找出这些交互速度较慢的原因。

## What if you don't have field data?  如果您没有字段数据怎么办？

Having field data is vital, as it saves you a lot of time trying to figure out which interactions need to be optimized. You might be in a position where you don't have field data, though. If that describes your situation, it's still possible to find interactions to improve, although it requires a bit more effort and a different approach.  

拥有现场数据至关重要，因为它可以为您节省大量时间，以找出需要优化的交互。但是，您可能处于没有字段数据的位置。如果这描述了您的情况，仍然可以找到改进的互动，尽管这需要更多的努力和不同的方法。

[Total Blocking Time (TBT)](https://web.dev/articles/tbt) is a lab metric that assesses page responsiveness during load, and [it correlates very well with INP](https://almanac.httparchive.org/en/2022/performance#inp-and-tbt). If your page has a high TBT, that's an important signal that your page may not be very responsive to user interactions during the initial page load.  

总阻塞时间 （TBT） 是一个实验室指标，用于评估加载期间的页面响应能力，它与 INP 非常相关。如果您的网页具有较高的 TBT，则这是一个重要信号，表明您的网页在初始页面加载期间可能对用户交互的响应速度不快。

To figure out your page's TBT, you can use either [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) or [PageSpeed Insights](https://pagespeed.web.dev/). If a page's TBT doesn't meet the "good" threshold, there's a good chance that the main thread is too busy during page load, and that can affect how quickly interactions occur during that crucial time in the page lifecycle.  

要计算页面的 TBT，您可以使用 Lighthouse 或 PageSpeed Insights。如果页面的 TBT 未达到“良好”阈值，则很有可能在页面加载期间主线程过于繁忙，这可能会影响页面生命周期中关键时间内交互发生的速度。

To find slow interactions _after_ the page has loaded, you might need to rely on other types of data, such as common user flows that you may already have identified in your website's analytics. If you work on an ecommerce website, for example, a common user flow would be the actions users take when they're adding items to an online shopping cart and subsequently going through the checkout process.  

若要在页面加载后发现缓慢的交互，可能需要依赖其他类型的数据，例如您可能已在网站分析中识别的常见用户流。例如，如果您在电子商务网站上工作，则常见的用户流程是用户在将商品添加到在线购物车并随后完成结帐流程时所采取的操作。

Whether or not you have field data, the next step is to manually test and reproduce slow interactions—because it's only when you're able to conclusively identify a slow interaction that you can fix it.  

无论您是否有现场数据，下一步都是手动测试和重现慢速交互，因为只有当您能够最终确定慢速交互时，才能修复它。

## Reproduce slow interactions in the lab  在实验室中重现缓慢的交互

There are a number of ways you can reproduce slow interactions in the lab through manual testing, but the following is a framework you can use to reproduce slow interactions in a lab setting while minimizing cognitive effort.  

您可以通过多种方式通过手动测试在实验室中重现慢速交互，但以下是一个框架，可用于在实验室环境中重现慢速交互，同时最大限度地减少认知工作量。

### Don't reach for the performance profiler right away  不要立即伸手去拿性能探查器

If you're already familiar with Chrome's performance profiler, you know that it provides tons of useful diagnostic information when troubleshooting page performance issues. It's a useful tool with many upsides.  

如果您已经熟悉 Chrome 的性能分析器，您就会知道它在排查网页性能问题时提供了大量有用的诊断信息。这是一个有用的工具，有很多好处。

However, the downside is that Chrome's performance profiler doesn't provide a live view while interacting with the page. It takes significant time to use it, and there are more efficient ways to manually test interactions first. The idea is to spend the minimum amount of time and effort to reproduce slow interactions and—once a slow interaction has been conclusively identified—_then_ you should use the performance profiler to dive deep into the cause(s) behind it.  

但是，缺点是 Chrome 的性能分析器在与页面交互时不提供实时视图。使用它需要花费大量时间，并且有更有效的方法可以首先手动测试交互。这个想法是花费最少的时间和精力来重现慢速交互，一旦最终确定了慢速交互，就应该使用性能分析器来深入研究其背后的原因。

#### Use the Web Vitals Chrome Extension  使用 Web Vitals Chrome 扩展程序

The [Web Vitals Chrome Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma) involves the lowest amount of effort in manually testing interaction latency. Once installed, the extension displays interaction data in the [DevTools console](https://developer.chrome.com/docs/devtools/console/), provided you do the following first:  

Web Vitals Chrome 扩展程序在手动测试交互延迟方面的工作量最少。安装后，扩展将在 DevTools 控制台中显示交互数据，前提是先执行以下操作：

1.  In Chrome, click the extensions icon to the right of the address bar.  

    在 Chrome 中，点击地址栏右侧的扩展程序图标。
2.  Locate the Web Vitals extension in the drop-down menu.  

    在下拉菜单中找到 Web Vitals 扩展。
3.  Click the icon at the right to open the extension's settings.  

    单击右侧的图标以打开扩展程序的设置。
4.  Click **Options**. 单击“选项”。

5.  Enable the **Console logging** checkbox in the resulting screen, and then click **Save**.  

    在出现的屏幕中启用“控制台日志记录”复选框，然后单击“保存”。

Once this has been done, open the console in Chrome DevTools, and begin testing suspect interactions on your website. As you interact with the page, useful diagnostic data appears in the console.  

完成此操作后，在 Chrome DevTools 中打开控制台，然后开始测试您网站上的可疑交互。当您与页面交互时，有用的诊断数据将显示在控制台中。

![20231117195704](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117195704.png)
*A console entry from the Web Vitals extension when console logging is turned on. Each qualifying interaction will log interaction data to the console.*

*(打开控制台日志记录时来自 Web 指标扩展的控制台条目。每个符合条件的交互都会将交互数据记录到控制台。)*

#### Use a JavaScript snippet 使用 JavaScript 代码段

As useful as it may be, the Web Vitals extension may not be a viable option for everyone. Browser extensions can be blocked in some environments due to device security policies. Extensions also can't be installed on mobile devices. The latter is problematic if you want to manually test on a physical Android-powered device with [remote debugging](https://developer.chrome.com/docs/devtools/remote-debugging/).  

尽管 Web Vitals 扩展可能很有用，但可能并非每个人都可行。由于设备安全策略，浏览器扩展程序可能会在某些环境中被阻止。扩展程序也无法安装在移动设备上。如果您想通过远程调试在由 Android 驱动的物理设备上手动测试，后者是有问题的。

An alternative method to using the Web Vital extension involves copying and pasting some JavaScript into the DevTools console. The following code gives you the same console output as the Web Vitals extension for every interaction:  

使用 Web Vital 扩展的另一种方法是将一些 JavaScript 复制并粘贴到 DevTools 控制台中。对于每次交互，以下代码为您提供与 Web 指标扩展相同的控制台输出：

```js
let worstInp = 0;

const observer = new PerformanceObserver((list, obs, options) => {
  for (let entry of list.getEntries()) {
    if (!entry.interactionId) continue;

    entry.renderTime = entry.startTime + entry.duration;
    worstInp = Math.max(entry.duration, worstInp);

    console.log('[Interaction]', entry.duration, `type: ${entry.name} interactionCount: ${performance.interactionCount}, worstInp: ${worstInp}`, entry, options);
  }
});

observer.observe({
  type: 'event',
  durationThreshold: 0, // 16 minimum by spec
  buffered: true
});
```

:::info
**Note:** A more convenient way of using the preceding code is to use the [snippets feature in Chrome DevTools](https://developer.chrome.com/docs/devtools/javascript/snippets/).  
注意：使用上述代码更方便的方法是使用 Chrome DevTools 中的代码片段功能。
:::

Once you've determined that an interaction is reliably slow, you can then profile the interaction in the performance profiler to get detailed information on _why_ it's slow.  

确定交互速度确实很慢后，就可以在性能探查器中分析交互，以获取有关其速度较慢的原因的详细信息。

#### What if you can't reproduce a slow interaction?  如果无法重现缓慢的交互怎么办？

What if your field data suggests a particular interaction is slow, but you can't manually reproduce the problem the lab? There are a couple of reasons why this could be the case, and it's a common challenge in troubleshooting performance issues of any kind.  

如果您的现场数据表明特定交互速度较慢，但您无法在实验室中手动重现该问题，该怎么办？出现这种情况的原因有很多，这是解决任何类型的性能问题的常见挑战。

For once, your circumstances as you test interactions are dependent on the hardware and network connection you're using. After all, you may be using a fast device on a fast connection—but that doesn't mean your users are so lucky. You can do one of three things if this situation applies in your case:  

这一次，测试交互时的情况取决于所使用的硬件和网络连接。毕竟，您可能在快速连接上使用快速设备，但这并不意味着您的用户如此幸运。如果这种情况适用于您的情况，您可以执行以下三项操作之一：

1.  If you have a physical Android-powered device, use [remote debugging](https://developer.chrome.com/docs/devtools/remote-debugging/) to open a Chrome DevTools instance on your host machine and try to reproduce slow interactions there. Mobile devices are often not as fast as laptops or desktop machines, so slow interactions may be more readily observed in such conditions.  

    如果您有一台由 Android 驱动的物理设备，请使用远程调试在主机上打开 Chrome DevTools 实例，并尝试在该实例中重现缓慢的交互。移动设备通常不如笔记本电脑或台式机快，因此在这种情况下可能更容易观察到缓慢的交互。
2.  If you don't have a physical device, [enable the CPU throttling feature in Chrome DevTools](https://umaar.com/dev-tips/88-cpu-throttling/).  

    如果您没有物理设备，请在 Chrome DevTools 中启用 CPU 限制功能。
3.  Try both steps 1 and 2 together, as you can also enable CPU throttling on the DevTools instance for a physical Android-powered device.  

    同时尝试步骤 1 和 2，因为你还可以在 DevTools 实例上为物理 Android 驱动的设备启用 CPU 限制。

Another cause could be that you're waiting for a page to load _before_ interacting with it, but your users are not. If you're on a fast network, simulate slower network conditions by enabling [network throttling](https://developer.chrome.com/docs/devtools/settings/throttling/), _then_ interact with the page as soon as it paints. You should do this because the main thread is often busiest during startup, and testing at that time may reveal what your users are experiencing.  

另一个原因可能是您在与页面交互之前正在等待页面加载，但您的用户没有。如果您使用的是快速网络，请通过启用网络限制来模拟较慢的网络条件，然后在页面绘制后立即与页面进行交互。您应该这样做，因为主线程在启动期间通常是最繁忙的，此时的测试可能会揭示您的用户正在经历什么。

### Record a trace 记录跟踪

To get more information on why an interaction is slow, the next step is to [use the performance profiler in Chrome DevTools](https://developer.chrome.com/docs/devtools/performance/). To profile an interaction in Chrome's performance profiler, do the following:  

要详细了解交互速度缓慢的原因，下一步是使用 Chrome DevTools 中的性能分析器。要在 Chrome 的性能分析器中分析互动，请执行以下操作：

1.  Have the page you need to test open.  

    打开需要测试的页面。
2.  Open Chrome DevTools and go to the **Performance** panel.  

    打开 Chrome DevTools 并转到“性能”面板。
3.  Click the **Record** button at the upper left of the panel to start tracing.  

    单击面板左上角的“录制”按钮开始跟踪。
4.  Perform the interaction(s) you want to profile.  

    执行要分析的交互。
5.  Click the **Record** button again to stop tracing.  

    再次单击“录制”按钮以停止跟踪。

When the profiler populates, the first place to look should be the activity summary at the top of the profiler. The activity summary shows red bars at the top where long tasks occurred in the recording. This lets you quickly zoom in on problem areas.  

当探查器填充时，首先要查看的位置应该是探查器顶部的活动摘要。活动摘要在顶部显示记录中发生长任务的红色条。这使您可以快速放大问题区域。

![20231117195832](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117195832.png)
*The activity summary at the top of Chrome's performance profiler. Long tasks are highlighted in red above the activity flame chart. In this case, significant scripting work was responsible for most of the work in the long task.*

*(Chrome 性能分析器顶部的活动摘要。长任务在活动火焰图上方以红色突出显示。在这种情况下，大量的脚本工作负责长期任务中的大部分工作。)*

You can quickly focus on problem areas by dragging and selecting a region in the activity summary. Once you've focused to where the interaction occurred, the **Interactions** track helps you line up the interaction and the activity that occurred in the main thread track beneath it:  

您可以通过在活动摘要中拖动并选择一个区域来快速关注问题区域。将焦点放在交互发生的位置后，“交互”轨道可帮助您将交互及其下方的主线程轨道中发生的活动对齐：

![20231117195858](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117195858.png)
*An interaction profiled in the performance profiler in Chrome's DevTools. The **Interactions** track shows a series of events that correspond to a click interaction. The Interactions track entries span across the tasks responsible for driving the interaction.*

*(在 Chrome 的 DevTools 的性能探查器中分析的交互。“交互”跟踪显示与点击交互相对应的一系列事件。“交互”跟踪条目跨越负责推动交互的任务。)*

From here, it's a matter of digging deeper into the problem causing the slow interaction. There are many things that can contribute to high interaction latency—some of which is covered further on in this guide.  

从这里开始，需要更深入地挖掘导致交互缓慢的问题。有许多因素会导致高交互延迟，本指南将进一步介绍其中的一些因素。

:::info
**Note:** The first interaction in a performance trace can incur some "Profiling Overhead" as the profiler starts up, which can make that main thread activity take longer than it normally would. To avoid this noise, click some text or perform another basic interaction before profiling the interaction you intend to dig into.  

注意：性能跟踪中的第一次交互可能会在探查器启动时产生一些“性能分析开销”，这可能会使主线程活动花费的时间比平时更长。要避免这种干扰，请在分析要深入研究的交互之前单击某些文本或执行其他基本交互。

![20231117195945](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117195945.png)
*An example of **Profiling Overhead** in a performance trace.*

*(性能跟踪中的分析开销示例。)*
:::

### Use Lighthouse timespans as an alternative to tracing  使用 Lighthouse 时间跨度作为跟踪的替代方法

Chrome's performance profiler—while rich with diagnostic information—can be a bit intimidating to the uninitiated. One alternative to the performance profiler is Lighthouse's timespan mode. To use this mode, do the following:  

Chrome 的性能分析器虽然包含丰富的诊断信息，但对于外行来说可能有点吓人。性能探查器的另一种替代方法是 Lighthouse 的时间跨度模式。要使用此模式，请执行以下操作：

1.  With DevTools open, go to the **Lighthouse** tab in DevTools.  

    打开 DevTools 后，转到 DevTools 中的“Lighthouse”选项卡。
2.  Under the section labeled **Mode**, select the **Timespan** option.  

    在标有“模式”的部分下，选择“时间跨度”选项。
3.  Select either the **Desktop** or **Mobile** device type under the section labeled **Device**.  

    在标记为“设备”的部分下选择“桌面”或“移动设备”类型。
4.  Ensure at least the checkbox labeled **Performance** is selected under the **Categories** label.  

    确保至少选中了“类别”标签下标记为“性能”的复选框。
5.  Click the **Start timespan** button.  

    单击“开始时间跨度”按钮。
6.  Test the interaction(s) on the page you want to get data for.  

    测试要获取其数据的页面上的互动。
7.  Click the **End timespan** button and wait for the audit to appear  

    单击“结束时间跨度”按钮，然后等待审核出现
8.  Once the audit populates in the Lighthouse tab, you can filter the audits by INP by clicking the **INP** link next to the label which reads **Show audits relevant to**.  

    在“Lighthouse”选项卡中填充审核后，可以通过单击标签旁边的“INP”链接来按 INP 筛选审核，该标签上显示“显示与审核相关的审核”。

At this point, a drop-down list for audits that have failed or passed should appear. When you expand that drop-down, there should be a breakdown of time spent during the interaction.  

此时，应显示已失败或已通过的审核的下拉列表。当您展开该下拉列表时，应该会细分交互期间花费的时间。

![20231117200020](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117200020.png)
*An interaction profiled in Lighthouse's timespan mode. When interactions are made with the page, Lighthouse provides an audit detailing where the time during an interaction was spent, and breaks it down by input delay, processing delay, and presentation delay.*

*(在 Lighthouse 的时间跨度模式下分析的交互。当与页面进行交互时，Lighthouse 会提供审核，详细说明交互期间花费的时间，并按输入延迟、处理延迟和呈现延迟对其进行细分。)*

:::info
**Note:** If you want to further investigate the cause behind a slow interaction, you can do so by clicking the **View Trace** button just above the filmstrip. This will take you to the performance profiler that shows interactions details for the interactions that you tested in the timespan mode.  

注意：如果要进一步调查交互缓慢背后的原因，可以通过单击胶片显示窗格上方的“查看跟踪”按钮来实现。这会将你带到性能探查器，该探查器显示你在时间跨度模式下测试的交互的交互详细信息。
:::

## How to identify long input delays  如何识别长输入延迟

One thing that could be contributing to high interaction latency is input delay. The _input delay_ is the first phase of an interaction. This is the period of time from when the user action is first received by the operating system to the point at which the browser is able to start processing the first event triggered by that input. The input delay ends right as the event callbacks for the interaction begin to run.  

可能导致高交互延迟的一件事是输入延迟。输入延迟是交互的第一阶段。这是从操作系统首次收到用户操作到浏览器能够开始处理由该输入触发的第一个事件的时间点的时间段。当交互的事件回调开始运行时，输入延迟就结束了。

Identifying input delays in Chrome's performance profiler can be done by locating the start of an interaction in the interactions track, and then finding the beginning of when the event callbacks for that interaction start to run.  

要识别 Chrome 性能分析器中的输入延迟，可以在交互跟踪中找到交互的开始，然后查找该交互的事件回调开始运行的开始时间。

Some amount of input delay should always be expected, as it takes some time for the operating system to pass the input event to the browser—but you do have some control over how _long_ the input delay is. **The key is to figure out if there is work running on the main thread that's preventing your callbacks from running.**  

应该始终存在一定程度的输入延迟，因为操作系统需要一些时间才能将输入事件传递给浏览器，但您可以控制输入延迟的长度。关键是要弄清楚主线程上是否有工作在运行，导致回调无法运行。

![20231117200101](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117200101.png)
*Input delay caused by a task fired by a timer from a third-party script.*

*(由第三方脚本的计时器触发的任务导致的输入延迟。)*

In the previous figure, a task from a third-party script is running as the user attempts to interact with the page, and therefore extends the input delay. The extended input delay affects the interaction's latency, and could therefore affect the page's INP.  

在上图中，当用户尝试与页面交互时，来自第三方脚本的任务正在运行，因此延长了输入延迟。延长的输入延迟会影响交互的延迟，因此可能会影响页面的 INP。

:::info
**Read to learn more:** For more information on how you can resolve long input delays, read about how you can [identify and reduce input delay](https://web.dev/articles/optimize-input-delay).  

阅读以了解更多信息：有关如何解决长时间输入延迟的更多信息，请阅读有关如何识别和减少输入延迟的信息。
:::

## How to identify expensive event callbacks  如何识别代价高昂的事件回调

Event callbacks run immediately after the input delay. If an event callback runs for too long, it delays the browser from presenting the next frame, and can add significantly to an interaction's total latency. Long-running event callbacks can be the result of computationally expensive first-party or third-party JavaScript—and in some cases, both.  

事件回调在输入延迟后立即运行。如果事件回调运行时间过长，则会延迟浏览器显示下一帧，并可能显著增加交互的总延迟。长时间运行的事件回调可能是计算成本高昂的第一方或第三方 JavaScript 的结果，在某些情况下，两者兼而有之。

![20231117200139](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117200139.png)
*The event callbacks that run in response to a click interaction, as shown in the performance profiler in Chrome DevTools. Note the red triangle in the upper right corner of both the **Event: pointerdown** and **Event: click** entries, which identifies expensive event callbacks.*

*(为响应点击交互而运行的事件回调，如 Chrome DevTools 中的性能探查器中所示。请注意 Event： pointerdown 和 Event： click 条目右上角的红色三角形，用于标识代价高昂的事件回调。)*

Finding expensive event callbacks can be done by observing the following in a trace for a specific interaction:  

可以通过在特定交互的跟踪中观察以下内容来查找代价高昂的事件回调：

1.  Determine whether the task associated with the event callbacks is a [long task](https://web.dev/articles/long-tasks-devtools#what_are_long_tasks). To reveal long tasks in a lab setting more reliably, you may need to [enable CPU throttling](https://developer.chrome.com/blog/new-in-devtools-61/#throttling) in the performance panel, or connect a low to mid-tier Android-powered device and use [remote debugging](https://developer.chrome.com/docs/devtools/remote-debugging/).  

    确定与事件回调关联的任务是否为长任务。为了更可靠地显示实验室设置中的长任务，您可能需要在性能面板中启用 CPU 限制，或者连接中低端 Android 设备并使用远程调试。
2.  If the task that runs the event callbacks is a long task, look for event handler entries—for example,entries with names such as **Event: click**—in the call stack that have a red triangle at the upper right corner of the entry. These are expensive event callbacks.  

    如果运行事件回调的任务是一个长任务，请在调用堆栈中查找名称为 Event： click 等名称的条目，这些条目的右上角有一个红色三角形。这些是代价高昂的事件回调。

To address expensive event callbacks, try one of the following strategies:  
要解决代价高昂的事件回调，请尝试以下策略之一：

1.  **Do as little work as possible.** Is everything that happens in an expensive event callback strictly necessary? If not, consider removing that code altogether if you can, or deferring its execution to a later point in time if you can't. You can also take advantage of framework features to help. For example, React's [`PureComponent` class](https://beta.reactjs.org/reference/react/PureComponent) and [memoization feature](https://react.dev/reference/react/memo) can skip unnecessary rendering work when props and state haven't changed for a component.  

    尽可能少地做工作。在代价高昂的事件回调中发生的一切是否都是绝对必要的？如果没有，请考虑完全删除该代码（如果可以），或者如果不能，则将其执行推迟到以后的时间点。您还可以利用框架功能来提供帮助。例如，当组件的 props 和 state 没有改变时，React 的 `PureComponent` 类和记忆功能可以跳过不必要的渲染工作。
2.  **Defer non-rendering work in the event callback to a later point in time.** Long tasks can be broken up by [yielding to the main thread](https://web.dev/articles/optimize-long-tasks#use_asyncawait_to_create_yield_points). Whenever you yield to the main thread, you're ending execution of the current task and breaking up the remainder of the work into a separate task. This gives the renderer a chance to process updates to the user interface that were performed earlier in the event callback. If you happen to be using React, its [transitions feature](https://react.dev/reference/react/useTransition) can do this for you.  

    将事件回调中的非渲染工作推迟到以后的时间点。可以通过屈服于主线程来分解长任务。每当你屈服于主线程时，你就会结束当前任务的执行，并将剩余的工作分解为一个单独的任务。这使渲染器有机会处理之前在事件回调中执行的用户界面更新。如果你碰巧在使用 React，它的过渡功能可以为你做到这一点。

By employing these strategies, you should be able to get your event callbacks in a place where they're responding more quickly to user input.  

通过采用这些策略，您应该能够在事件回调更快地响应用户输入的位置获得事件回调。

## How to identify presentation delays  如何识别演示延迟

Long input delays and expensive event callbacks aren't the only possible culprits of poor INP. Sometimes the rendering updates that occur in response to even small amounts of event callback code can be expensive. The time it takes for the browser to render visual updates to the user interface to reflect the result of an interaction is known as _presentation delay_.  

长时间的输入延迟和代价高昂的事件回调并不是 INP 不佳的唯一可能罪魁祸首。有时，为响应少量事件回调代码而进行的呈现更新可能会很昂贵。浏览器向用户界面呈现视觉更新以反映交互结果所需的时间称为呈现延迟。

:::info
**Important:** The [rendering performance guide](https://web.dev/articles/rendering-performance) is a good primer on understanding how the browser renders a page. [Life of a pixel](https://www.youtube.com/watch?v=K2QHdgAKP-s) goes further in depth on how rendering works in Chromium-based browsers.  

重要提示：呈现性能指南是了解浏览器如何呈现页面的良好入门指南。像素的生命周期更深入地介绍了在基于 Chromium 的浏览器中呈现的工作原理。
:::

![20231117200218](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117200218.png)
*Rendering tasks as shown in Chrome's performance profiler. The rendering work is shown in purple, with paint work in green.*

*(呈现任务，如 Chrome 的性能分析器中所示。渲染工作以紫色显示，油漆工作以绿色显示。)*

:::info
**Important:** When profiling slow interactions due to expensive rendering work, you should enable the **Screenshots** checkbox at the top of the performance profiler. This will help you to line up user interface updates with the corresponding rendering work on the main thread.  

重要提示：在分析由于渲染工作成本高昂而导致的交互速度较慢时，应启用性能探查器顶部的“屏幕截图”复选框。这将帮助您将用户界面更新与主线程上的相应渲染工作保持一致。
:::

Of all the possible causes of high interaction latency, rendering work can be the most difficult to troubleshoot and fix, but the result is worth the effort. Excessive rendering work could be caused by any of the following:  

在交互延迟高的所有可能原因中，渲染工作可能是最难排查和修复的，但结果是值得的。过多的渲染工作可能是由以下任何原因引起的：

*   **Large DOM sizes.** The rendering work required to update a page's presentation often increases along with the size of the page's DOM. For more information, read [How large DOM sizes affect interactivity—and what you can do about it](https://web.dev/articles/dom-size-and-interactivity).  

    大型 DOM 大小。更新页面演示文稿所需的渲染工作通常随着页面 DOM 的大小而增加。有关详细信息，请参阅较大的 DOM 大小如何影响交互性，以及您可以采取哪些措施。
*   **Forced reflows.** This happens when you apply style changes to elements in JavaScript, and _then_ query the results of that work. The result is that the browser has to perform the layout work before doing anything else, so that the browser can return the updated styles. For more information and tips on avoiding forced reflows, read [Avoid large, complex layouts and layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing).  

    强制回流焊。当您将样式更改应用于 JavaScript 中的元素，然后查询该工作的结果时，会发生这种情况。结果是浏览器必须在执行任何其他操作之前执行布局工作，以便浏览器可以返回更新的样式。有关避免强制重排的详细信息和提示，请阅读避免大型复杂布局和布局抖动。
*   **Excessive or unnecessary work in [`requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame) callbacks.** `requestAnimationFrame()` callbacks are run during the rendering phase of the event loop, and must complete before the next frame can be presented. If you're using `requestAnimationFrame()` to do work that doesn't involve changes to the user interface, understand that you could be delaying the next frame.  

    回调中 `requestAnimationFrame` 过多或不必要的工作。 `requestAnimationFrame()` 回调在事件循环的渲染阶段运行，必须在下一帧显示之前完成。如果您用于 `requestAnimationFrame()` 执行不涉及更改用户界面的工作，请了解您可能会延迟下一帧。
*   **[`ResizeObserver`](https://developer.mozilla.org/docs/Web/API/ResizeObserver) callbacks.** Such callbacks run prior to rendering, and may delay presentation of the next frame if the work in them is expensive. As with event callbacks, defer any logic not needed for the next frame.  

    `ResizeObserver` 回调。此类回调在渲染之前运行，如果其中的工作成本很高，则可能会延迟下一帧的呈现。与事件回调一样，延迟下一帧不需要的任何逻辑。

:::info
**Important:** Troubleshooting might be made easier by enabling the **Timeline: event initiators** experiment in Chrome DevTools. Enabling this experiment will draw an arrow from any style recalculation task to the JavaScript task that kicked it off. To enable this experiment, go into the Chrome DevTools settings, click **Experiments** in the left hand menu, then click the checkbox labeled **Timeline: event initiators**, then restart DevTools.  

重要提示：在 Chrome DevTools 中启用时间轴：事件发起者实验，可以更轻松地进行问题排查。启用此实验会从任何样式重新计算任务到启动该任务的 JavaScript 任务绘制一个箭头。若要启用此实验，请转到 Chrome DevTools 设置，单击左侧菜单中的“实验”，然后单击标记为“时间轴：事件发起者”的复选框，然后重新启动 DevTools。
:::

## Troubleshooting INP is an iterative process  INP 故障排除是一个迭代过程

Finding out what's causing high interaction latency that contributes to poor INP takes a lot of work—but if you can pin down the causes, you're halfway there. By following a methodical approach to troubleshooting poor INP, you can reliably pin down what's causing a problem, and arrive more quickly to the right fix. To review:  

找出导致 INP 不佳的高交互延迟的原因需要做很多工作，但如果你能找出原因，你就成功了一半。通过遵循有条不紊的方法来排除不良的 INP 故障，您可以可靠地确定导致问题的原因，并更快地找到正确的解决方案。要查看：

*   [Rely on field data to find slow interactions](https://web.dev/articles/find-slow-interactions-in-the-field).  

    依靠现场数据来查找缓慢的交互。
*   Manually test problematic field interactions in the lab to see if they're reproducible.  

    在实验室中手动测试有问题的现场相互作用，看看它们是否可重现。
*   Identify whether the cause is due to long input delay, expensive event callbacks, or expensive rendering work.  

    确定原因是由于输入延迟过长、成本高昂的事件回调还是成本高昂的渲染工作。
*   Repeat. 重复。

The last of these is the most important. Like most other work you do to improve page performance, troubleshooting and improving INP is a cyclical process. When you fix one slow interaction, move onto the next, and repeat until you start to see results. Stay vigilant!  
其中最后一个是最重要的。与为提高页面性能所做的大多数其他工作一样，故障排除和改进 INP 是一个周期性过程。当您修复一个缓慢的交互时，转到下一个，然后重复，直到您开始看到结果。保持警惕！
