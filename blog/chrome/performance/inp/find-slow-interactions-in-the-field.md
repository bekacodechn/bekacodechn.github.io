# 在现场发现缓慢的相互作用

`metadata:`

**原标题:** Find slow interactions in the field

**链接:** https://web.dev/articles/find-slow-interactions-in-the-field

---

Learn how to find slow interactions in your website's field data so you can find opportunities to improve its Interaction to Next Paint.  
了解如何在网站的字段数据中查找缓慢的交互，以便找到改进其与下一个绘制的交互的机会。

[Field data](https://web.dev/articles/lab-and-field-data-differences#field_data) is _the_ authoritative source when it comes to how actual users are experiencing your website. It teases out issues you may not see in [lab data](https://web.dev/articles/lab-and-field-data-differences#lab_data) alone. While interactions can be simulated in lab-based tools, you're not going to be able to reproduce every single interaction in the lab in the way that users in the field experience them. Gathering field data for [Interaction to Next Paint (INP)](https://web.dev/articles/inp) is critical to understanding how responsive your page is to real users, and it contains the clues to make their experience even better.  

当涉及到实际用户如何体验您的网站时，现场数据是权威来源。它梳理了您可能仅在实验室数据中看不到的问题。虽然可以在基于实验室的工具中模拟交互，但您将无法以现场用户体验的方式重现实验室中的每一个交互。收集用于 Interaction to Next Paint （INP） 的字段数据对于了解页面对真实用户的响应程度至关重要，并且它包含使他们的体验更好的线索。

## What you should collect in the field and why  您应该在现场收集什么以及为什么

When collecting INP data in the field, you'll want to capture the following to give context to why interactions were slow:  

在现场收集 INP 数据时，您需要捕获以下内容，以提供交互缓慢的原因：

*   **The INP value.** This is the key piece of data you'll need to collect. The distribution of these values will determine whether the page meets [the INP thresholds](https://web.dev/articles/inp#what_is_a_good_inp_score).  

    INP 值。这是您需要收集的关键数据。这些值的分布将决定页面是否满足 INP 阈值。
*   **The element selector string responsible for the page's INP.** Knowing a page's INP is good, but not good enough by itself. Without knowing what element was responsible for it, you'll be in the dark. By logging element selector strings, you’ll know exactly what elements are responsible for interactions.  

    负责页面 INP 的元素选择器字符串。知道一个页面的INP是件好事，但本身还不够好。如果不知道是什么元素导致了它，你就会被蒙在鼓里。通过记录元素选择器字符串，您将确切地知道哪些元素负责交互。
*   **The loading state of the page for the interaction that is the page's INP.** When a page is loading, it's reasonable to assume that there's more main thread activity occurring that could result in higher interaction latency. During page load, there's HTML parsing, stylesheet parsing, and JavaScript evaluation and execution going on. Knowing whether an interaction has taken place during page load or afterwards helps you to figure out if you need to optimize for faster startup so interactions have more room on the main thread to run quickly, or if the interaction responsible for the page's INP in itself is slow regardless.  

    交互页面的加载状态，即页面的 INP。加载页面时，可以合理地假设发生了更多的主线程活动，这可能会导致更高的交互延迟。在页面加载期间，将进行 HTML 解析、样式表解析以及 JavaScript 评估和执行。了解交互是在页面加载期间还是之后发生的，有助于您确定是否需要优化以加快启动速度，以便交互在主线程上有更多的空间来快速运行，或者负责页面 INP 本身的交互是否无论如何都很慢。
*   **The interaction's `startTime`.** Logging the interaction's [`startTime`](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime) lets you know exactly when the interaction occurred on the performance timeline.  

    交互的 `startTime` .通过记录交互，您可以确切地知道交互 `startTime` 在性能时间轴上发生的时间。
*   **The event type.** The [event type](https://developer.mozilla.org/docs/Web/API/Event/type) is good to know, as it will tell you whether the interaction was the result of a `click`, `keypress`, or other eligible event type. A user interaction may contain multiple callbacks, and can help you to pinpoint exactly which event callback in the interaction took the longest to run.  

    事件类型。最好了解事件类型，因为它会告诉您交互是 `click` 、 `keypress` 还是其他符合条件的事件类型的结果。用户交互可能包含多个回调，可以帮助您准确确定交互中哪个事件回调的运行时间最长。

While this all seems like a lot to take into account, you don't have to reinvent the wheel to get there. Thankfully, this data is exposed in the [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals), and you'll learn how to gather it in the next section.  

虽然这一切似乎需要考虑很多，但您不必重新发明轮子即可到达那里。值得庆幸的是，这些数据在 JavaScript 库中 `web-vitals` 公开，您将在下一节中学习如何收集它。

## Measure interactions in the field with the `web-vitals` JavaScript library  使用 `web-vitals` JavaScript 库测量现场的交互

The `web-vitals` JavaScript library is a great way to find slow interactions in the field, thanks in large part to its ability to provide [attribution](https://github.com/GoogleChrome/web-vitals#attribution-build) for what's causing them. INP can be collected in browsers that support the [Event Timing API](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming) and its [`interactionId` property](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming/interactionId).  

`web-vitals` JavaScript 库是在该领域发现缓慢交互的好方法，这在很大程度上要归功于它能够为导致它们的原因提供归因。INP 可以在支持事件计时 API 及其 `interactionId` 属性的浏览器中收集。

Browser Support 浏览器支持:

![20231117163926](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117163926.png)

Using a [Real User Monitoring (RUM)](https://en.wikipedia.org/wiki/Real_user_monitoring) provider to get INP is most convenient, but not always an option. If that's your case, for example, you can use the `web-vitals` JavaScript library to collect and transmit INP data to Google Analytics for later evaluation:  

使用真实用户监控 （RUM） 提供程序获取 INP 是最方便的，但并不总是一种选择。例如，如果您是这种情况，则可以使用 `web-vitals` JavaScript 库收集 INP 数据并将其传输到 Google Analytics（分析）以供日后评估：

```js
// Be sure to import from the attribution build:
import {onINP} from 'web-vitals/attribution';

function sendToGoogleAnalytics ({name, value, id, attribution}) {
  // Destructure the attribution object:
  const {eventEntry, eventTarget, eventType, loadState} = attribution;

  // Get timings from the event timing entry:
  const {startTime, processingStart, processingEnd, duration, interactionId} = eventEntry;

  const eventParams = {
    // The page's INP value:
    metric_inp_value: value,
    // A unique ID for the page session, which is useful
    // for computing totals when you group by the ID.
    metric_id: id,
    // The event target (a CSS selector string pointing
    // to the element responsible for the interaction):
    metric_inp_event_target: eventTarget,
    // The type of event that triggered the interaction:
    metric_inp_event_type: eventType,
    // Whether the page was loaded when the interaction
    // took place. Useful for identifying startup versus
    // post-load interactions:
    metric_inp_load_state: loadState,
    // The time (in milliseconds) after page load when
    // the interaction took place:
    metric_inp_start_time: startTime,
    // When processing of the event callbacks in the
    // interaction started to run:
    metric_inp_processing_start: processingStart,
    // When processing of the event callbacks in the
    // interaction finished:
    metric_inp_processing_end: processingEnd,
    // The total duration of the interaction. Note: this
    // value is rounded to 8 milliseconds of granularity:
    metric_inp_duration: duration,
    // The interaction ID assigned to the interaction by
    // the Event Timing API. This could be useful in cases
    // where you might want to aggregate related events:
    metric_inp_interaction_id: interactionId
  };

  // Send to Google Analytics
  gtag('event', name, eventParams);
}

// Pass the reporting function to the web-vitals INP reporter:
onINP(sendToGoogleAnalytics);
```

:::info
**Key point:** Where element attribution is concerned, not every interaction can be attributed to a specific element. This is due to a limitation of the underlying [Event Timing API](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming), which is used to calculate the page's INP. In this API, [the event target](https://developer.mozilla.org/docs/Web/API/Event/target) may be absent if the element responsible for the interaction was disconnected from the DOM, or if the element was in the [shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Using_shadow_DOM).  

关键点：就元素归因而言，并非每次交互都可以归因于特定元素。这是由于底层事件计时 API 的限制，该 API 用于计算页面的 INP。在此 API 中，如果负责交互的元素与 DOM 断开连接，或者该元素位于影子 DOM 中，则事件目标可能不存在。
:::

If you have Google Analytics and run the preceding code on your website, you'll get a detailed reporting of not just the page's INP, but also useful contextual information that can give you a better sense of where to begin optimizing slow interactions.  

如果您有 Google Analytics 并在您的网站上运行上述代码，您不仅会获得页面 INP 的详细报告，还会获得有用的上下文信息，这些信息可以让您更好地了解从哪里开始优化缓慢的交互。

### Monitor full session duration, not just up to `onload`  监控整个会话持续时间，而不仅仅是 `onload`

Using the `web-vitals` JavaScript library, as previously mentioned, may result in multiple analytics events being sent to Google Analytics. This is fine, as the ID `web-vitals` generates for the current page will stay the same, and Google Analytics will allow you to overwrite previous data.  

如前所述，使用 `web-vitals` JavaScript 库可能会导致向 Google Analytics 发送多个分析事件。这很好，因为为当前页面生成的 ID `web-vitals` 将保持不变，并且 Google Analytics 将允许您覆盖以前的数据。

However, not all RUM providers operate this way, so if you're building your own RUM collection solution, you'll need to take this into account. If your current analytics provider won't allow overwrites of existing records, you'll need to record all the `delta` values—that is, the difference between a metric's past and current states— for a metric and transmit them using the same ID provided by the `web-vitals` library; then you can sum those changes by grouping on the ID. For more more information, consult the `web-vitals` documentation's [section on handling deltas](https://github.com/GoogleChrome/web-vitals#report-only-the-delta-of-changes).  

但是，并非所有 RUM 提供商都以这种方式运作，因此，如果您正在构建自己的 RUM 收集解决方案，则需要考虑到这一点。如果当前的分析提供商不允许覆盖现有记录，则需要记录指标的所有 `delta` 值（即指标过去状态和当前状态之间的差异），并使用 `web-vitals` 库提供的相同 ID 传输这些值;然后，您可以通过对 ID 进行分组来对这些更改进行求和。有关详细信息，请参阅 `web-vitals` 文档中有关处理增量的部分。

## Get field data quickly with CrUX  使用 CrUX 快速获取现场数据

The [Chrome UX Report (CrUX)](https://developer.chrome.com/docs/crux/) is the official dataset of the Web Vitals program. While data from CrUX alone doesn't give you all the information you need to troubleshoot specific INP issues, it does let you know whether you have a problem in the first place. Even if you're already collecting field data through a RUM provider, consider contrasting it with CrUX data for your website (if available), as there are [differences in the methodologies they use](https://web.dev/articles/crux-and-rum-differences).  

Chrome UX Report （CrUX） 是 Web Vitals 计划的官方数据集。虽然仅来自 CrUX 的数据并不能为您提供解决特定 INP 问题所需的所有信息，但它确实可以让您首先知道是否有问题。即使您已经通过 RUM 提供商收集现场数据，也可以考虑将其与您网站的 CrUX 数据（如果可用）进行对比，因为他们使用的方法存在差异。

You can evaluate your website's INP and view its CrUX data using [PageSpeed Insights (PSI)](https://pagespeed.web.dev/). PageSpeed Insights may provide page-level field data for websites that are included in the CrUX dataset. To audit a URL with PageSpeed Insights, go to [https://pagespeed.web.dev/](https://pagespeed.web.dev/), enter a URL to test, and click the **Analyze** button.  

您可以使用 PageSpeed Insights （PSI） 评估您网站的 INP 并查看其 CrUX 数据。PageSpeed Insights 可以为 CrUX 数据集中包含的网站提供页面级字段数据。要使用 PageSpeed Insights 审核 URL，请转到 https://pagespeed.web.dev/，输入要测试的 URL，然后单击“分析”按钮。

:::info
**Key point:** The URL you enter [may not be eligible for CrUX](https://developer.chrome.com/docs/crux/methodology/#eligibility). If this is the case, you'll need to collect your own field data, which is explained in the previous section. Also, where page-level data is not available for the given URL in PageSpeed Insights, the provided field data will be aggregated over the entire website.  

关键点：您输入的 URL 可能不符合 CrUX 的条件。如果是这种情况，则需要收集自己的字段数据，如上一节所述。此外，如果PageSpeed Insights中给定的URL没有页面级数据，则提供的字段数据将在整个网站上聚合。
:::

Once the assessment begins, CrUX data will be available instantly as Lighthouse (a [lab tool](https://web.dev/articles/lab-and-field-data-differences#lab_data)) runs.  

评估开始后，CrUX 数据将在 Lighthouse（实验室工具）运行时立即可用。

![20231117164022](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117164022.png)
*The distribution of INP experiences as seen in PageSpeed Insights.*

*(在 PageSpeed Insights 中看到的 INP 体验分布。)*

When Lighthouse has finished running its assessment, PSI will populate the assessment with Lighthouse audits.  

Lighthouse 完成评估运行后，PSI 将使用 Lighthouse 审核填充评估。

:::info
**Key point:** Because PageSpeed Insights is not scripted to interact with the page, there will be no audits relevant to INP. However, [Total Blocking Time (TBT)](https://web.dev/articles/tbt) is [highly correlated with INP](https://almanac.httparchive.org/en/2022/performance#inp-and-tbt). Therefore, you can filter audits by TBT to find opportunities to reduce the amount of time a page blocks the main thread during the test.  

关键点：由于 PageSpeed Insights 没有编写脚本来与页面交互，因此不会有与 INP 相关的审核。然而，总阻塞时间（TBT）与INP高度相关。因此，您可以按 TBT 筛选审核，以寻找机会减少页面在测试期间阻塞主线程的时间。
:::

![20231117164059](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117164059.png)
*Audits for Total Blocking Time* *(总阻塞时间审核)*

## What if I don't have field data?  如果我没有字段数据怎么办？

You might be in a situation where you don't have or can’t even collect field data. If this describes your situation, then you'll be entirely dependent on lab tools in order to find slow interactions. For more information on lab testing, read [How to manually diagnose what's causing poor INP in the lab](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab).  

您可能处于没有或甚至无法收集字段数据的情况。如果这描述了您的情况，那么您将完全依赖实验室工具来查找缓慢的交互。有关实验室检测的更多信息，请参阅如何在实验室中手动诊断导致 INP 不佳的原因。

## Conclusion 结论

Field data is the best source of information you can draw on when it comes to understanding which interactions are problematic for actual users in the field. By drawing on information available in PageSpeed Insights, or relying on field data collection tools such as the `web-vitals` JavaScript library (or your RUM provider), you can be more confident about which interactions are most problematic, and then move on to [reproducing problematic interactions in the lab](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab) and then go about fixing them.  

在了解哪些交互对现场实际用户有问题时，现场数据是您可以利用的最佳信息来源。通过利用 PageSpeed Insights 中提供的信息，或依靠 JavaScript 库（或您的 RUM 提供程序）等现场数据收集工具， `web-vitals` 您可以更有信心地确定哪些交互最有问题，然后继续在实验室中重现有问题的交互，然后着手修复它们。

































































