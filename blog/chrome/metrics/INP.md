# INP: 与下一个Paint交互

`metadata:`

**原标题:** Interaction to Next Paint (INP)

**链接:** https://web.dev/articles/inp      

---

:::info
**Note:** Interaction to Next Paint (INP) is a [pending](https://web.dev/articles/vitals#pending) Core Web Vital metric that will [replace First Input Delay (FID)](https://web.dev/blog/inp-cwv) in March 2024. INP assesses responsiveness using data from the Event Timing API. When an interaction causes a page to become unresponsive, that is a poor user experience. INP observes the latency of all interactions a user has made with the page, and reports a single value which all (or nearly all) interactions were below. A low INP means the page was consistently able to respond quickly to all—or the vast majority—of user interactions.  

注意：Interaction to Next Paint （INP） 是一项待定的核心 Web Vital 指标，将于 2024 年 3 月取代首次输入延迟 （FID）。INP 使用来自事件计时 API 的数据评估响应能力。当交互导致页面无响应时，这就是糟糕的用户体验。INP 会观察用户与页面进行的所有交互的延迟，并报告所有（或几乎所有）交互都低于该值的单个值。低 INP 意味着页面始终能够快速响应所有（或绝大多数）用户交互。
:::

Chrome usage data shows that 90% of a user's time on a page is spent _after_ it loads, Thus, careful measurement of responsiveness _throughout_ the page lifecycle is important. This is what the INP metric assesses.  

Chrome 使用数据显示，用户在页面上 90% 的时间是在页面加载后花费的，因此，在整个页面生命周期中仔细测量响应能力非常重要。这就是 INP 指标评估的内容。

Good responsiveness means that a page responds quickly to interactions made with it. When a page responds to an interaction, the result is _visual feedback_, which is presented by the browser in the next frame the browser presents. Visual feedback tells you if, for example, an item you add to an online shopping cart is indeed being added, whether a mobile navigation menu has opened, if a login form's contents are being authenticated by the server, and so forth.  

良好的响应能力意味着页面可以快速响应与其进行的交互。当页面响应交互时，结果是视觉反馈，该反馈由浏览器在浏览器呈现的下一帧中呈现。例如，视觉反馈会告诉您添加到在线购物车中的商品是否确实正在添加、移动导航菜单是否已打开、服务器是否正在验证登录表单的内容等。

Some interactions will naturally take longer than others, but for especially complex interactions, it's important to quickly present some initial visual feedback as a cue to the user that something is _happening_. The time until the next paint is the earliest opportunity to do this. Therefore, the intent of INP is not to measure all the eventual effects of the interaction (such as network fetches and UI updates from other asynchronous operations), but the time in which the _next_ paint is being blocked. By delaying visual feedback, you may be giving users the impression that the page is not responding to their actions.  

有些交互自然会比其他交互花费更长的时间，但对于特别复杂的交互，重要的是要快速呈现一些初始视觉反馈，作为向用户提示正在发生的事情。距离下一次油漆的时间是最早的机会。因此，INP 的目的不是测量交互的所有最终影响（例如网络提取和来自其他异步操作的 UI 更新），而是测量下一个绘制被阻止的时间。通过延迟视觉反馈，您可能会给用户留下页面没有响应其操作的印象。

The goal of INP is to ensure the time from when a user initiates an interaction until the next frame is painted is as short as possible, for all or most interactions the user makes.  

INP 的目标是确保从用户发起交互到绘制下一帧的时间尽可能短，用于用户进行的所有或大部分交互。

In the following video, the example on the right gives immediate visual feedback that an accordion is opening. It also demonstrates how poor responsiveness can cause multiple unintended responses to input because the user thinks the experience is broken.  

在下面的视频中，右边的示例提供了手风琴正在打开的即时视觉反馈。它还演示了较差的响应能力如何导致对输入的多个意外响应，因为用户认为体验已损坏。

![INP操作](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311170047275.gif?imageSlim)

*veness. At left, long tasks block the accordion from opening. This causes the user to click multiple times, thinking the experience is broken. When the main thread catches up, it processes the delayed inputs, resulting in the accordion opening and closing unexpectedly.*

*响应能力差与好的一个例子。在左边，长时间的任务阻止了手风琴的打开。这会导致用户多次单击，认为体验已损坏。当主线程赶上时，它会处理延迟的输入，导致手风琴意外打开和关闭。*

This article explains how INP works, how to measure it, and points to resources for improving it.  

本文解释了 INP 的工作原理、如何衡量它，并指出了改进它的资源。

## What is INP? 什么是INP？

INP is a metric that assesses a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed, ignoring outliers.  

INP 是一个指标，它通过观察用户访问页面的整个生命周期内发生的所有单击、点击和键盘交互的延迟来评估页面对用户交互的整体响应能力。最终的 INP 值是观察到的最长交互作用，忽略异常值。

与 FID 对比，INP 不仅衡量了第一次互动，还考虑了所有互动，报告了页面整个生命周期中最慢的互动之一。而且，INP 不仅测量延迟部分，还测量从交互开始到事件处理程序的整个持续时间，直到浏览器能够绘制下一帧。

:::info

 > A note on how INP is calculated  
  关于如何计算INP的说明

  As stated above, INP is calculated by observing all the interactions made with a page. For most sites the interaction with the worst latency is reported as INP. However, for pages with large numbers of interactions, random hiccups can result in an unusually high interaction on an otherwise responsive site. The more interactions, the more likely this is to happen. To counter this, and give a better measure of the actual responsiveness for those types of pages, we ignore one highest interaction for every 50 interactions. The vast majority of page experiences do not have over 50 interactions so will report the worst interaction. The 75th percentile of all the page views is then reported as usual, which further removes outliers to give a value that the vast majority of users experience or better.  

  如上所述，INP 是通过观察与页面进行的所有交互来计算的。对于大多数站点，延迟最差的交互报告为 INP。但是，对于具有大量交互的页面，随机打嗝可能会导致在其他响应迅速的网站上出现异常高的交互。互动越多，发生这种情况的可能性就越大。为了解决这个问题，并更好地衡量这些类型页面的实际响应能力，我们忽略了每 50 次交互中一次最高的交互。绝大多数页面体验的交互次数不超过 50 次，因此会报告最差的交互。然后像往常一样报告所有页面浏览量的第 75 个百分位数，这进一步删除了异常值，以提供绝大多数用户体验或更好的值。

  An _interaction_ is a group of event handlers that fire during the same logical user gesture. For example, "tap" interactions on a touchscreen device include multiple events, such as `pointerup`, `pointerdown`, and `click`. An interaction can be driven by JavaScript, CSS, built-in browser controls (such as form elements), or a combination thereof.  

  交互是在同一逻辑用户手势期间触发的一组事件处理程序。例如，触摸屏设备上的“点击”交互包括多个事件，例如 `pointerup` 、 `pointerdown` 和 `click` 。交互可以由 JavaScript、CSS、内置浏览器控件（如表单元素）或它们的组合驱动。

  An interaction's latency consists of the single longest [duration](https://w3c.github.io/event-timing/#ref-for-dom-performanceentry-duration%E2%91%A1:%7E:text=The%20Event%20Timing%20API%20exposes%20a%20duration%20value%2C%20which%20is%20meant%20to%20be%20the%20time%20from%20when%20user%20interaction%20occurs%20(estimated%20via%20the%20Event%27s%20timeStamp)%20to%20the%20next%20time%20the%20rendering%20of%20the%20Event%27s%20relevant%20global%20object%27s%20associated%20Document%E2%80%99s%20is%20updated) of a group of event handlers that drives the interaction, from the time the user begins the interaction to the moment the next frame is presented with visual feedback.  

  交互的延迟由驱动交互的一组事件处理程序的单个最长持续时间组成，从用户开始交互到下一帧呈现视觉反馈的那一刻。
:::

**Key point:** For more details on how INP is measured, read the ["What's in an interaction?"](https://web.dev/articles/inp#whats_in_an_interaction) section.  

关键点：有关如何测量 INP 的更多详细信息，请阅读“交互作用中的内容”部分。

### What is a good INP score?  什么是好的 INP 分数？

Pinning labels such as "good" or "poor" on a responsiveness metric is difficult. On one hand, you want to encourage development practices that prioritize good responsiveness. On the other hand, you must account for the fact that there's considerable variability in the capabilities of devices people use to set achievable development expectations.  

在响应能力指标上固定“好”或“差”等标签是很困难的。一方面，您希望鼓励优先考虑良好响应能力的开发实践。另一方面，您必须考虑到这样一个事实，即人们用来设置可实现的开发预期的设备的功能存在相当大的差异。

To ensure you're delivering user experiences with good responsiveness, a good threshold to measure is the **75th percentile** of page loads recorded in the field, segmented across mobile and desktop devices:  

为确保您提供具有良好响应能力的用户体验，一个好的衡量阈值是现场记录的页面加载的第 75 个百分位数，跨移动和桌面设备进行细分：

*   An INP below or at **200 milliseconds** means that your page has **good responsiveness**.  

    INP 低于或等于 200 毫秒意味着您的页面具有良好的响应能力。
*   An INP above **200 milliseconds** and below or at **500 milliseconds** means that your page's responsiveness **needs improvement**.  

    INP 高于 200 毫秒且低于 500 毫秒或等于 500 毫秒意味着页面的响应能力需要改进。
*   An INP above **500 milliseconds** means that your page has **poor responsiveness**.  

    INP 高于 500 毫秒意味着您的页面响应能力较差。

![20231117005357](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117005357.png)

### What's in an interaction?

![20231117010042](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117010042.png)
*The life of an interaction. An input delay occurs until event handlers begin running, which may be caused by factors such as long tasks on the main thread. The interaction's event handlers then run, and a delay occurs before the next frame is presented.*

*互动的生命周期。在事件处理程序开始运行之前，会发生输入延迟，这可能是由主线程上的长任务等因素引起的。然后，交互的事件处理程序将运行，并在显示下一帧之前发生延迟。*

The primary driver of interactivity is often JavaScript, though browsers do provide interactivity through controls _not_ powered by JavaScript, such as checkboxes, radio buttons, and controls powered by CSS.  

交互性的主要驱动力通常是 JavaScript，尽管浏览器确实通过非 JavaScript 驱动的控件（例如复选框、单选按钮和由 CSS 提供支持的控件）提供交互性。

As far as INP goes, **only the following interaction types are observed:**  

就 INP 而言，仅观察到以下交互类型：

*   Clicking with a mouse.  

    用鼠标点击。
*   Tapping on a device with a touchscreen.  

    点击带有触摸屏的设备。
*   Pressing a key on either a physical or onscreen keyboard.  

    按下物理键盘或屏幕键盘上的键。

**Key point:** Hovering and scrolling does not factor into INP. However, scrolling with the keyboard (space bar, page up, page down, and so forth) involves a keystroke, which may trigger other events that INP _does_ measure. Any resulting scrolling is _not_ factored into how INP is calculated.  

关键点：悬停和滚动不计入 INP。但是，使用键盘滚动（空格键、向上翻页、向下翻页等）涉及击键，这可能会触发 INP 测量的其他事件。任何由此产生的滚动都不会计入 INP 的计算方式。

Interactions happen in the main document or in iframes embedded in the document—for example clicking play on an embedded video. End users will not be aware what is in an iframe or not. Therefore, INP within iframes are needed to measure the user experience for the top level page. Note JavaScript Web APIs will not have access to the iframe contents so may not be able to measure INP within an iframe and this will [show as a difference between CrUX and RUM](https://web.dev/articles/crux-and-rum-differences#iframes).  

交互发生在主文档或文档中嵌入的 iframe 中，例如，单击嵌入视频的播放。最终用户不会知道 iframe 中的内容。因此，需要 iframe 中的 INP 来衡量顶级页面的用户体验。注意 JavaScript Web API 将无法访问 iframe 内容，因此可能无法在 iframe 中测量 INP，这将显示为 CrUX 和 RUM 之间的差异。

Interactions may consist of two parts, each with multiple events. For example, a keystroke consists of the `keydown`, `keypress`, and `keyup` events. Tap interactions contain `pointerup` and `pointerdown` events. The event with the longest duration within the interaction is chosen as the interaction's latency.  

交互可能由两部分组成，每部分都有多个事件。例如，击键由 `keydown` 、 `keypress` 和 `keyup` 事件组成。点按互动包含 `pointerup` 和 `pointerdown` 事件。交互中持续时间最长的事件被选为交互的延迟。

![20231117005945](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117005945.png)
*A depiction of an interaction with multiple event handlers. The first part of the interaction receives an input when the user clicks down on a mouse button. However, before they release the mouse button, a frame is presented. When the user releases the mouse button, another series of event handlers must run before the next frame is presented.*

*描述与多个事件处理程序的交互。交互的第一部分在用户单击鼠标按钮时接收输入。但是，在他们松开鼠标按钮之前，会显示一个框架。当用户释放鼠标按钮时，在显示下一帧之前，必须运行另一组事件处理程序。*

INP is calculated when the user leaves the page, resulting in a single value that is representative of the page's overall responsiveness throughout the entire page's lifecycle. **A low INP means that a page is reliably responsive to user input.**  

INP 是在用户离开页面时计算的，从而生成一个值，该值代表页面在整个页面生命周期中的整体响应能力。低 INP 意味着页面能够可靠地响应用户输入。

### How is INP different from First Input Delay (FID)?  INP 与首次输入延迟 （FID） 有何不同？

Where INP considers _all_ page interactions, [First Input Delay (FID)](https://web.dev/articles/fid) only accounts for the _first_ interaction. It also only measures the first interaction's _input delay_, not the time it takes to run event handlers, or the delay in presenting the next frame.  

如果 INP 考虑所有页面交互，则首次输入延迟 （FID） 仅考虑首次交互。它还只测量第一次交互的输入延迟，而不测量运行事件处理程序所需的时间，也不测量显示下一帧的延迟。

Given that FID is also a [load responsiveness metric](https://web.dev/articles/user-centric-performance-metrics#types_of_metrics), the rationale behind it is that if the first interaction made with a page in the loading phase has little to no perceptible input delay, the page has made a good first impression.  

鉴于 FID 也是一个加载响应能力指标，其背后的基本原理是，如果在加载阶段与页面进行的第一次交互几乎没有可察觉的输入延迟，则该页面给人留下了良好的第一印象。

INP is more than about first impressions. By sampling all interactions, responsiveness can be assessed comprehensively, making INP a more reliable indicator of overall responsiveness than FID.  

INP不仅仅是第一印象。通过对所有交互作用进行抽样，可以全面评估反应能力，使 INP 成为比 FID 更可靠的整体反应能力指标。

### What if no INP value is reported?  如果没有报告INP值怎么办？

It's possible that a page can return no INP value. This can happen for a number of reasons:  

页面可能不返回任何 INP 值。发生这种情况的原因有很多：

*   The page was loaded, but the user never clicked, tapped, or pressed a key on their keyboard.  

    页面已加载，但用户从未单击、点击或按下键盘上的键。
*   The page was loaded, but the user interacted with the page using gestures that did not involve clicking, tapping, or using the keyboard. For example, scrolling or hovering over elements does not factor into how INP is calculated.  

    页面已加载，但用户使用不涉及单击、点击或使用键盘的手势与页面进行交互。例如，滚动或悬停在元素上不会影响 INP 的计算方式。
*   The page is being accessed by a bot such as a search crawler or headless browser that has not been scripted to interact with the page.  

    该页面正由机器人（如搜索爬网程序或无头浏览器）访问，该机器人尚未编写脚本以与页面交互。

## How to measure INP 如何测量INP

INP can be measured both in [the field](https://web.dev/articles/lab-and-field-data-differences#field_data) and in [the lab](https://web.dev/articles/lab-and-field-data-differences#lab_data) through a variety of tools.  

INP可以通过各种工具在现场和实验室中进行测量。

:::info
**Key point:** The best way to measure your website's INP is by gathering metrics from actual users in the field. If you're accustomed to relying on lab data for assessing performance, take some time to read [Why lab and field data can be different (and what to do about it)](https://web.dev/articles/lab-and-field-data-differences).  

关键点：衡量您网站的 INP 的最佳方法是从该领域的实际用户那里收集指标。如果您习惯于依赖实验室数据来评估性能，请花一些时间阅读为什么实验室和现场数据可能不同（以及如何应对）。
:::

### In the field 在现场

Ideally, your journey in optimizing INP will start with field data. At its best, field data from Real User Monitoring (RUM) will give you not only a page's INP value, but also contextual data that highlights what specific interaction was responsible for the INP value itself, whether the interaction occurred during or after page load, the type of interaction (click, keypress, or tap), and other valuable information.  

理想情况下，优化 INP 的旅程将从现场数据开始。在最好的情况下，来自真实用户监控 （RUM） 的字段数据不仅会为您提供页面的 INP 值，还会提供上下文数据，这些数据突出显示了对 INP 值本身负责的特定交互、交互是在页面加载期间还是之后发生的、交互类型（单击、按键或点击）以及其他有价值的信息。

:::info
**Read to learn more:** [Find slow interactions in the field](https://web.dev/articles/find-slow-interactions-in-the-field).  

阅读以了解更多信息：在现场查找缓慢的交互。
:::

If your website qualifies for inclusion in the [Chrome User Experience Report (CrUX)](https://developer.chrome.com/docs/crux/), you can quickly get field data for INP [via CrUX in PageSpeed Insights](https://web.dev/articles/find-slow-interactions-in-the-field#get_field_data_quickly_with_crux) (and other Core Web Vitals). At a minimum, you can get an origin-level picture of your website's INP, but in some cases, you can also get page-level data as well.  

如果您的网站符合 Chrome 用户体验报告 （CrUX） 的条件，您可以通过 PageSpeed Insights（和其他 Core Web Vitals）中的 CrUX 快速获取 INP 的字段数据。至少，您可以获得网站INP的原始级别图片，但在某些情况下，您也可以获得页面级别的数据。

However, while CrUX is useful to tell you that there _is_ a problem at a high level, it often doesn't provide enough detail to help fully understand what the problem is. A RUM solution can help you drill down into more detail as to the pages, users or user interactions which are experiencing slow interactions. Being able to attribute INP to individual interactions avoids guesswork and wasted effort.  

但是，虽然 CrUX 可以告诉您存在较高层次的问题，但它通常无法提供足够的详细信息来帮助充分了解问题所在。RUM 解决方案可以帮助您深入了解交互速度较慢的页面、用户或用户交互的更多详细信息。能够将 INP 归因于个人互动可以避免猜测和浪费精力。

### In the lab 在实验室里

Optimally, you'll want to start testing in the lab once you have field data that suggests you have slow interactions. In the absence of field data, however, there are some strategies for reproducing slow interactions in the lab. Such strategies include following common user flows and testing interactions along the way, as well as interacting with the page during load—when the main thread is often busiest—in order to surface slow interactions during that crucial part of the user experience.  

理想情况下，一旦有现场数据表明交互速度较慢，您就需要在实验室中开始测试。然而，在缺乏现场数据的情况下，有一些策略可以在实验室中重现缓慢的相互作用。这些策略包括遵循常见的用户流程并在此过程中测试交互，以及在加载期间（当主线程通常最繁忙时）与页面交互，以便在用户体验的关键部分显示缓慢的交互。

:::info
**Read to learn more:** [Manually diagnose slow interactions in the lab](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab).  

阅读以了解更多信息：在实验室中手动诊断缓慢的交互。
:::

## How to improve INP 如何改善INP

A [collection of guides on optimizing INP](https://web.dev/articles/optimize-inp) is available to guide you through the process of identifying slow interactions in the field and using lab data to drill down and optimize them in a variety of ways.  

有关优化 INP 的指南集合可指导您完成识别现场缓慢交互的过程，并使用实验室数据以各种方式深入和优化它们。
