# 首次输入延迟 （FID）

`metadata:`

**原标题:** First Input Delay (FID)

**链接:** https://web.dev/articles/fid

---

:::info
**Note:** First Input Delay (FID) is the [stable](https://web.dev/articles/vitals#lifecycle) Core Web Vital metric for measuring load responsiveness because it quantifies the experience users feel when trying to interact with unresponsive pages—a low FID helps ensure that the page is usable. FID will be [replaced by Interaction to Next Paint (INP)](https://web.dev/blog/inp-cwv) as a Core Web Vital in March 2024.  

注意：首次输入延迟 （FID） 是用于衡量负载响应能力的稳定 Core Web Vital 指标，因为它量化了用户在尝试与无响应页面交互时的感受 - 低 FID 有助于确保页面可用。FID 将于 2024 年 3 月被 Interaction to Next Paint （INP） 取代，成为核心 Web Vital。
:::

We all know how important it is to make a good first impression. It's important when meeting new people, and it's also important when building experiences on the web.  

我们都知道给人留下良好的第一印象是多么重要。这在结识新朋友时很重要，在网络上构建体验时也很重要。

On the web, a good first impression can make the difference between someone becoming a loyal user or them leaving and never coming back. The question is, what makes for a good impression, and how do you measure what kind of impression you're likely making on your users?  

在网络上，良好的第一印象可以使某人成为忠实用户或他们离开并再也不会回来。问题是，什么能给用户留下良好的印象，你如何衡量你可能给用户留下什么样的印象？

On the web, first impressions can take a lot of different forms—we have first impressions of a site's design and visual appeal as well as first impressions of its speed and responsiveness.  

在网络上，第一印象可以采取许多不同的形式——我们对网站的设计和视觉吸引力有第一印象，也有对其速度和响应能力的第一印象。

While it is hard to measure how much users like a site's design with web APIs, measuring its speed and responsiveness is not!  

虽然很难衡量用户对网站使用 Web API 的设计有多喜欢，但衡量其速度和响应能力却不是！

The first impression users have of how fast your site loads can be measured with [First Contentful Paint (FCP)](https://web.dev/articles/fcp). But how fast your site can paint pixels to the screen is just part of the story. Equally important is how responsive your site is when users try to interact with those pixels!  

用户对您的网站加载速度的第一印象是使用 First Contentful Paint （FCP） 来衡量的。但是，您的网站将像素绘制到屏幕上的速度只是故事的一部分。同样重要的是，当用户尝试与这些像素交互时，您的网站的响应速度如何！

The First Input Delay (FID) metric helps measure your user's first impression of your site's interactivity and responsiveness.  

首次输入延迟 （FID） 指标有助于衡量用户对网站交互性和响应能力的第一印象。

## What is FID? 什么是FID？

FID measures the time from when a user first interacts with a page (that is, when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.  

FID 测量从用户首次与页面交互（即，当他们单击链接、点击按钮或使用自定义的 JavaScript 驱动的控件）到浏览器实际能够开始处理事件处理程序以响应该交互的时间。

### What is a good FID score? 什么是好的 FID 分数？

To provide a good user experience, sites should strive to have a First Input Delay of **100 milliseconds** or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the **75th percentile** of page loads, segmented across mobile and desktop devices.  

为了提供良好的用户体验，网站应努力使首次输入延迟达到 100 毫秒或更短。为确保大多数用户达到此目标，一个好的衡量阈值是页面加载的第 75 个百分位数，跨移动和桌面设备进行细分。

![20231117010159](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117010159.png)

:::info
**Note:** To learn more about the research and methodology behind this recommendation, see: [Defining the Core Web Vitals metrics thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)  

注意：要详细了解此建议背后的研究和方法，请参阅： 定义核心 Web 指标阈值
:::

## FID in detail FID 详细信息

As developers who write code that responds to events, we often assume our code is going to be run immediately—as soon as the event happens. But as users, we've all frequently experienced the opposite—we've loaded a web page on our phone, tried to interact with it, and then been frustrated when nothing happened.  

作为编写响应事件的代码的开发人员，我们通常假设我们的代码将在事件发生后立即运行。但作为用户，我们都经常遇到相反的情况——我们在手机上加载了一个网页，试图与它互动，然后当什么都没发生时感到沮丧。

In general, input delay (a.k.a. input latency) happens because the browser's main thread is busy doing something else, so it can't (yet) respond to the user. One common reason this might happen is the browser is busy parsing and executing a large JavaScript file loaded by your app. While it's doing that, it can't run any event listeners because the JavaScript it's loading might tell it to do something else.  

一般来说，输入延迟（又称输入延迟）的发生是因为浏览器的主线程正忙于做其他事情，所以它（还）不能响应用户。发生这种情况的一个常见原因是浏览器正忙于解析和执行应用加载的大型 JavaScript 文件。当它这样做时，它不能运行任何事件侦听器，因为它加载的 JavaScript 可能会告诉它做其他事情。

:::info
FID only measures the "delay" in event processing. It does not measure the event processing time itself nor the time it takes the browser to update the UI after running event handlers. While this time does affect the user experience, including it as part of FID would incentivize developers to respond to events asynchronously—which would improve the metric but likely make the experience worse. See [why only consider the input delay](https://web.dev/articles/fid#why_only_consider_the_input_delay) below for more details.  

FID 仅测量事件处理中的“延迟”。它不测量事件处理时间本身，也不测量浏览器在运行事件处理程序后更新 UI 所花费的时间。虽然这段时间确实会影响用户体验，但将其作为 FID 的一部分将激励开发人员异步响应事件，这将改善指标，但可能会使体验变得更糟。有关更多详细信息，请参阅下面的为什么只考虑输入延迟。
:::

Consider the following timeline of a typical web page load:  

请考虑以下典型网页加载的时间线：

![20231117010229](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117010229.png)

The above visualization shows a page that's making a couple of network requests for resources (most likely CSS and JS files), and—after those resources are finished downloading—they're processed on the main thread.  

上面的可视化效果显示了一个页面，该页面对资源（很可能是 CSS 和 JS 文件）发出了几个网络请求，并且在这些资源完成下载后，它们在主线程上进行处理。

This results in periods where the main thread is momentarily busy, which is indicated by the beige-colored [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) blocks.  

这会导致主线程暂时繁忙的时期，这由米色任务块表示。

Long first input delays typically occur between [First Contentful Paint (FCP)](https://web.dev/articles/fcp) and [Time to Interactive (TTI)](https://web.dev/articles/tti) because the page has rendered some of its content but isn't yet reliably interactive. To illustrate how this can happen, FCP and TTI have been added to the timeline:  

首次输入延迟通常发生在首次内容绘制 （FCP） 和交互时间 （TTI） 之间，因为页面已呈现其部分内容，但尚未实现可靠的交互。为了说明这是如何发生的，FCP 和 TTI 已添加到时间线中：

![20231117010254](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117010254.png)

You may have noticed that there's a fair amount of time (including three [long tasks](https://web.dev/articles/custom-metrics#long-tasks-api)) between FCP and TTI, if a user tries to interact with the page during that time (for example, by clicking on a link), there will be a delay between when the click is received and when the main thread is able to respond.  

您可能已经注意到，FCP 和 TTI 之间有相当长的时间（包括三个长任务），如果用户在这段时间内尝试与页面交互（例如，通过单击链接），则在收到点击和主线程能够响应之间会有延迟。

Consider what would happen if a user tried to interact with the page near the beginning of the longest task:  

考虑一下，如果用户尝试在最长任务的开头附近与页面进行交互，会发生什么情况：

![20231117010329](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117010329.png)

Because the input occurs while the browser is in the middle of running a task, it has to wait until the task completes before it can respond to the input. The time it must wait is the FID value for this user on this page.  

由于输入发生在浏览器运行任务的过程中，因此它必须等到任务完成才能响应输入。它必须等待的时间是此用户在此页面上的 FID 值。

:::info
**Note:** In this example the user just happened to interact with the page at the beginning of the main thread's most busy period. If the user had interacted with the page just a moment earlier (during the idle period) the browser could have responded right away. This variance in input delay underscores the importance of looking at the distribution of FID values when reporting on the metric. You can read more about this in the section below on analyzing and reporting on FID data.  

注意：在此示例中，用户恰好在主线程最繁忙的时段开始时与页面交互。如果用户在片刻前（在空闲期间）与页面进行了交互，浏览器可能会立即做出响应。输入延迟的这种差异凸显了在报告指标时查看 FID 值分布的重要性。您可以在以下关于分析和报告 FID 数据的部分中阅读更多相关信息。
:::

### What if an interaction doesn't have an event listener? (如果交互没有事件侦听器，该怎么办？)

FID measures the delta between when an input event is received and when the main thread is next idle. This means FID is measured **even in cases where an event listener has not been registered.** The reason is because many user interactions do not require an event listener but _do_ require the main thread to be idle in order to run.  

FID 测量接收到输入事件与主线程下一次空闲之间的增量。这意味着即使在未注册事件侦听器的情况下，也会测量 FID。原因是因为许多用户交互不需要事件侦听器，但需要主线程处于空闲状态才能运行。

For example, all of the following HTML elements need to wait for in-progress tasks on the main thread to complete prior to responding to user interactions:  

例如，在响应用户交互之前，以下所有 HTML 元素都需要等待主线程上正在进行的任务完成：

*   Text fields, checkboxes, and radio buttons (`<input>`, `<textarea>`)  

    文本字段、复选框和单选按钮 （ `<input>` ， `<textarea>` ）
*   Select dropdowns (`<select>`)  

    选择下拉列表 （ `<select>` ）
*   links (`<a>`) 链接 （ `<a>` ）

### Why only consider the first input?  为什么只考虑第一个输入？

While a delay from any input can lead to a bad user experience, we primarily recommend measuring the first input delay for a few reasons:  

虽然任何输入的延迟都可能导致糟糕的用户体验，但我们主要建议测量第一个输入延迟，原因如下：

*   The first input delay will be the user's first impression of your site's responsiveness, and first impressions are critical in shaping our overall impression of a site's quality and reliability.  

    第一个输入延迟将是用户对您网站响应能力的第一印象，而第一印象对于塑造我们对网站质量和可靠性的整体印象至关重要。
*   The biggest interactivity issues we see on the web today occur during page load. Therefore, we believe initially focusing on improving site's first user interaction will have the greatest impact on improving the overall interactivity of the web.  

    我们今天在网络上看到的最大交互性问题发生在页面加载期间。因此，我们认为，最初专注于改善网站的首次用户交互将对提高网络的整体交互性产生最大的影响。
*   The recommended solutions for how sites should fix high first input delays (code splitting, loading less JavaScript upfront, etc.) are not necessarily the same solutions for fixing slow input delays after page load. By separating out these metrics we'll be able to provide more specific performance guidelines to web developers.  

    关于网站应如何修复高首次输入延迟（代码拆分、预先加载较少的 JavaScript 等）的推荐解决方案不一定与修复页面加载后输入延迟缓慢的解决方案相同。通过分离这些指标，我们将能够为 Web 开发人员提供更具体的性能指南。

### What counts as a first input?  什么算作第一个输入？

FID is a metric that measures a page's responsiveness during load. As such, it only focuses on input events from discrete actions like clicks, taps, and key presses.  

FID 是衡量页面在加载期间的响应能力的指标。因此，它只关注来自离散操作（如单击、点击和按键）的输入事件。

Other interactions, like scrolling and zooming, are continuous actions and have completely different performance constraints (also, browsers are often able to hide their latency by running them on a separate thread).  

其他交互，如滚动和缩放，是连续操作，具有完全不同的性能限制（此外，浏览器通常能够通过在单独的线程上运行它们来隐藏其延迟）。

To put this another way, FID focuses on the R (responsiveness) in the [RAIL performance model](https://web.dev/articles/rail), whereas scrolling and zooming are more related to A (animation), and their performance qualities should be evaluated separately.  

换句话说，FID关注的是RAIL性能模型中的R（响应性），而滚动和缩放则与A（动画）更相关，它们的性能质量应该单独评估。

### What if a user never interacts with your site?  如果用户从不与您的网站互动怎么办？

Not all users will interact with your site every time they visit. And not all interactions are relevant to FID (as mentioned in the previous section). In addition, some user's first interactions will be at bad times (when the main thread is busy for an extended period of time), and some user's first interactions will be at good times (when the main thread is completely idle).  

并非所有用户每次访问您的网站时都会与您的网站进行交互。并非所有交互都与 FID 相关（如上一节所述）。此外，一些用户的第一次交互会在不好的时候（当主线程长时间忙碌时），而一些用户的第一次交互会在好的时候（当主线程完全空闲时）。

This means some users will have no FID values, some users will have low FID values, and some users will probably have high FID values.  

这意味着有些用户没有 FID 值，有些用户具有低 FID 值，而有些用户可能具有高 FID 值。

How you track, report on, and analyze FID will probably be quite a bit different from other metrics you may be used to. The next section explains how best to do this.  

您跟踪、报告和分析 FID 的方式可能与您可能习惯的其他指标有很大不同。下一节将介绍如何最好地执行此操作。

### Why only consider the input delay?  为什么只考虑输入延迟？

As mentioned above, FID only measures the "delay" in event processing. It does not measure the event processing time itself nor the time it takes the browser to update the UI after running event handlers.  

如上所述，FID 仅测量事件处理中的“延迟”。它不测量事件处理时间本身，也不测量浏览器在运行事件处理程序后更新 UI 所花费的时间。

Even though this time is important to the user and _does_ affect the experience, it's not included in this metric because doing so could incentivize developers to add workarounds that actually make the experience worse—that is, they could wrap their event handler logic in an asynchronous callback (via `setTimeout()` or `requestAnimationFrame()`) in order to separate it from the task associated with the event. The result would be an improvement in the metric score but a slower response as perceived by the user.  

尽管此时间对用户很重要并且确实会影响体验，但它不包括在此指标中，因为这样做可能会激励开发人员添加实际上使体验变得更糟的变通方法，也就是说，他们可以将其事件处理程序逻辑包装在异步回调中（通过 `setTimeout()` 或 `requestAnimationFrame()` ），以便将其与与事件关联的任务分开。结果将是指标分数的提高，但用户感知到的响应速度较慢。

However, while FID only measure the "delay" portion of event latency, developers who want to track more of the event lifecycle can do so using the [Event Timing API](https://wicg.github.io/event-timing/). See the guide on [custom metrics](https://web.dev/articles/custom-metrics#event_timing_api) for more details.  

但是，虽然 FID 仅测量事件延迟的“延迟”部分，但想要跟踪更多事件生命周期的开发人员可以使用事件计时 API 来实现。有关更多详细信息，请参阅有关自定义指标的指南。


## How to measure FID 如何测量FID

FID is a metric that can only be measured [in the field](https://web.dev/articles/user-centric-performance-metrics#in_the_field), as it requires a real user to interact with your page. You can measure FID with the following tools.  
FID 是一个只能在现场测量的指标，因为它需要真实用户与您的页面进行交互。您可以使用以下工具测量 FID。

:::info
**Note:** FID requires a real user and thus cannot be measured in the lab. However, the [Total Blocking Time (TBT)](https://web.dev/articles/tbt) metric is lab-measurable, correlates well with FID in the field, and also captures issues that affect interactivity. Optimizations that improve TBT in the lab should also improve FID for your users.  

注意：FID 需要真实用户，因此无法在实验室中测量。但是，总阻塞时间 （TBT） 指标是实验室可测量的，与现场的 FID 密切相关，并且还捕获了影响交互性的问题。在实验室中改进 TBT 的优化也应该改善用户的 FID。
:::

### Field tools 

*   [Chrome User Experience Report](https://developer.chrome.com/docs/crux/)

*   [PageSpeed Insights PageSpeed](https://pagespeed.web.dev/)

*   [Search Console (Core Web Vitals report)](https://support.google.com/webmasters/answer/9205520)

*   [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals)


### Measure FID in JavaScript  在 JavaScript 中测量 FID

To measure FID in JavaScript, you can use the [Event Timing API](https://wicg.github.io/event-timing). The following example shows how to create a [`PerformanceObserver`](https://developer.mozilla.org/docs/Web/API/PerformanceObserver) that listens for [`first-input`](https://wicg.github.io/event-timing/#sec-performance-event-timing) entries and logs them to the console:  

要在 JavaScript 中测量 FID，您可以使用事件计时 API。以下示例演示如何创建一个 `PerformanceObserver` 侦听 `first-input` 条目并将其记录到控制台的：

```js
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const delay = entry.processingStart - entry.startTime;
    console.log('FID candidate:', delay, entry);
  }
}).observe({type: 'first-input', buffered: true});
```

```js
**Warning:** This code shows how to log `first-input` entries to the console and calculate their delay. However, measuring FID in JavaScript is more complicated. See below for details:  

警告：此代码显示如何将条目记录 `first-input` 到控制台并计算其延迟。但是，在 JavaScript 中测量 FID 更为复杂。有关详细信息，请参见下文：
```

In the above example, the `first-input` entry's delay value is measured by taking the delta between the entry's `startTime` and `processingStart` timestamps. In most cases this will be the FID value; however, not all `first-input` entries are valid for measuring FID.  

在上面的示例中，条目的延迟值是通过取 `first-input` 条目 `startTime` 和 `processingStart` 时间戳之间的增量来衡量的。在大多数情况下，这将是 FID 值;但是，并非所有 `first-input` 条目都可用于测量 FID。

The following section lists the differences between what the API reports and how the metric is calculated.  

以下部分列出了 API 报告的内容与指标的计算方式之间的差异。

#### Differences between the metric and the API  指标和 API 之间的差异

*   The API will dispatch `first-input` entries for pages loaded in a background tab but those pages should be ignored when calculating FID.  

    API 将为后台选项卡中加载的页面分派 `first-input` 条目，但在计算 FID 时应忽略这些页面。
*   The API will also dispatch `first-input` entries if the page was backgrounded prior to the first input occurring, but those pages should also be ignored when calculating FID (inputs are only considered if the page was in the foreground the entire time).  

    如果页面在第一次输入发生之前处于后台，则 API 还将调度 `first-input` 条目，但在计算 FID 时也应忽略这些页面（仅当页面始终处于前台时才考虑输入）。
*   The API does not report `first-input` entries when the page is restored from the [back/forward cache](https://web.dev/articles/bfcache#impact_on_core_web_vitals), but FID should be measured in these cases since users experience them as distinct page visits.  

    从后退/前向缓存还原页面时，API 不会报告 `first-input` 条目，但在这些情况下应测量 FID，因为用户将它们体验为不同的页面访问。
*   The API does not report inputs that occur within iframes but the metric does as they are part of the user experience of the page. This can [show as a difference between CrUX and RUM](https://web.dev/articles/crux-and-rum-differences#iframes). To properly measure FID you should consider them. Sub-frames can use the API to report their `first-input` entries to the parent frame for aggregation.  

    API 不会报告在 iframe 中发生的输入，但指标会报告，因为它们是页面用户体验的一部分。这可以显示为 CrUX 和 RUM 之间的差异。要正确测量 FID，您应该考虑它们。子帧可以使用 API 将其 `first-input` 条目报告给父帧进行聚合。

Rather than memorizing all these subtle differences, developers can use the [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals) to measure FID, which handles these differences for you (where possible—note the iframe issue is not covered):  

开发人员可以使用 `web-vitals` JavaScript 库来衡量 FID，而不是记住所有这些细微的差异，它会为您处理这些差异（如果可能，请注意 iframe 问题不包括在内）：

```js
import {onFID} from 'web-vitals';

// Measure and log FID as soon as it's available.
onFID(console.log);
```

You can refer to [the source code for `onFID()`](https://github.com/GoogleChrome/web-vitals/blob/main/src/onFID.ts) for a complete example of how to measure FID in JavaScript.  

您可以参考源代码， `onFID()` 了解如何在 JavaScript 中测量 FID 的完整示例。

:::info
**Note:** In some cases (such as cross-origin iframes) it's not possible to measure FID in JavaScript. See the [limitations](https://github.com/GoogleChrome/web-vitals#limitations) section of the `web-vitals` library for details.  

注意：在某些情况下（例如跨域 iframe），无法在 JavaScript 中衡量 FID。有关详细信息， `web-vitals` 请参阅库的限制部分。
:::

### Analyzing and reporting on FID data  分析和报告FID数据

Due to the expected variance in FID values, it's critical that when reporting on FID you look at the distribution of values and focus on the higher percentiles.  

由于 FID 值存在预期差异，因此在报告 FID 时，查看值的分布并关注较高的百分位数至关重要。

While [choice of percentile](https://web.dev/articles/defining-core-web-vitals-thresholds#choice_of_percentile) for all Core Web Vitals thresholds is the 75th, for FID in particular we still strongly recommend looking at the 95th–99th percentiles, as those will correspond to the particularly bad first experiences users are having with your site. And it will show you the areas that need the most improvement.  

虽然所有 Core Web Vitals 阈值的百分位数选择是第 75 个百分位数，但特别是对于 FID，我们仍然强烈建议查看第 95-99 个百分位数，因为这些百分位数与用户对您的网站的特别糟糕的首次体验相对应。它将向您展示最需要改进的领域。

This is true even if you segment your reports by device category or type. For example, if you run separate reports for desktop and mobile, the FID value you care most about on desktop should be the 95th–99th percentile of desktop users, and the FID value you care about most on mobile should be the 95th–99th percentile of mobile users.  

即使您按设备类别或类型对报告进行细分，也是如此。例如，如果您分别针对桌面设备和移动设备生成报表，则您在桌面设备上最关心的 FID 值应为桌面用户的第 95-99 个百分位，而您在移动设备上最关心的 FID 值应为移动用户的第 95-99 个百分位。

## How to improve FID 如何改善FID

A full guide on [optimizing FID](https://web.dev/articles/optimize-fid) is available to guide you through techniques to improve this metric.  

有关优化 FID 的完整指南可指导您完成改进此指标的技术。

## CHANGELOG 更改日志

Occasionally, bugs are discovered in the APIs used to measure metrics, and sometimes in the definitions of the metrics themselves. As a result, changes must sometimes be made, and these changes can show up as improvements or regressions in your internal reports and dashboards.  

有时，在用于衡量指标的 API 中发现错误，有时在指标本身的定义中发现错误。因此，有时必须进行更改，这些更改可能会在内部报表和仪表板中显示为改进或回归。
