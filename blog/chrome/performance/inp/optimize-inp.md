# 优化 INP

`metadata:`

**原标题:** Optimize Interaction to Next Paint

**链接:** https://web.dev/articles/optimize-inp

---

[Interaction to Next Paint (INP)](https://web.dev/articles/inp) is a [pending](https://web.dev/articles/vitals#pending) Core Web Vital metric that assesses a page's overall responsiveness to user interactions by observing the latency of all [qualifying interactions](https://web.dev/articles/inp#whats_in_an_interaction) that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed (sometimes ignoring outliers).  

INP 是一个待处理的核心 Web Vital 指标，它通过观察用户访问页面的整个生命周期中发生的所有合格交互的延迟来评估页面对用户交互的整体响应能力。最终的 INP 值是观察到的最长交互作用（有时忽略异常值）。

To provide a good user experience, websites should strive to have an Interaction to Next Paint of **200 milliseconds or less**. To ensure you're hitting this target for most of your users, a good threshold to measure is the **75th percentile of page loads**, segmented across mobile and desktop devices.  

为了提供良好的用户体验，网站应努力实现 200 毫秒或更短的 INP。为确保大多数用户达到此目标，一个好的衡量阈值是页面加载的第 75 个百分位数，跨移动和桌面设备进行细分。

![20231117152110](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117152110.png)

Depending on the website, there may be few to no interactions—such as pages of mostly text and images with few to no interactive elements. Or, in the case of websites such as text editors or games, there could be hundreds—even thousands—of interactions. In either case, where there's a high INP, the user experience is at risk.  

根据网站的不同，可能很少或根本没有交互，例如页面主要是文本和图像，几乎没有交互元素。或者，对于文本编辑器或游戏等网站，可能会有数百甚至数千次交互。无论哪种情况，如果 INP 较高，用户体验就会面临风险。

:::info
**Objective:** **Read to learn more:** [Interaction to Next Paint (INP)](https://web.dev/articles/inp).  

目标：阅读以了解更多信息：与下一个油漆的交互 （INP）。
:::

It takes time and effort to improve INP, but the reward is a better user experience. In this guide, a path to improving INP will be explored.  

改进 INP 需要时间和精力，但回报是更好的用户体验。在本指南中，将探讨改善 INP 的途径。

## Figure out what's causing poor INP  找出导致 INP 不佳的原因

Before you can fix slow interactions, you'll need data to tell you if your website's INP is poor or needs improvement. Once you have that information, you can move into the lab to begin diagnosing slow interactions, and work your way toward a solution.  

在修复缓慢的交互之前，您需要数据来告诉您网站的 INP 是否较差或需要改进。一旦你掌握了这些信息，你就可以进入实验室，开始诊断缓慢的交互，并努力找到解决方案。

### Find slow interactions in the field  在现场发现缓慢的相互作用

Ideally, your journey in optimizing INP will start with [field data](https://web.dev/articles/lab-and-field-data-differences#field_data). At its best, field data from a Real User Monitoring (RUM) provider will give you not only a page's INP value, but also contextual data that highlights what specific interaction was responsible for the INP value itself, whether the interaction occurred during or after page load, the type of interaction (click, keypress, or tap), and other valuable information.  

理想情况下，优化 INP 的旅程将从现场数据开始。在最好的情况下，来自真实用户监控 （RUM） 提供商的字段数据不仅会为您提供页面的 INP 值，还会提供上下文数据，这些数据突出显示了对 INP 值本身负责的特定交互、交互是在页面加载期间还是之后发生的、交互类型（单击、按键或点击）以及其他有价值的信息。

:::info
**Read to learn more:** [Find slow interactions in the field](https://web.dev/articles/find-slow-interactions-in-the-field).  

阅读以了解更多信息：在现场查找缓慢的交互。
:::

If you're not relying on a RUM provider to get field data, the [INP field data guide](https://web.dev/articles/find-slow-interactions-in-the-field) advises [using the Chrome User Experience Report (CrUX) via PageSpeed Insights](https://web.dev/articles/find-slow-interactions-in-the-field#get_field_data_quickly_with_crux) to help fill in the gaps. CrUX is the official dataset of the Core Web Vitals program and provides a high-level summary of metrics for millions of websites, including INP. However, CrUX often does not provide the contextual data you'd get from a RUM provider to help you to analyze issues. Because of this, we still recommend that sites use a RUM provider when possible, or implement their own RUM solution to supplement what is available in CrUX.  

如果您不依赖 RUM 提供商来获取字段数据，INP 字段数据指南建议您通过 PageSpeed Insights 使用 Chrome 用户体验报告 （CrUX） 来帮助填补空白。CrUX 是 Core Web Vitals 计划的官方数据集，为包括 INP 在内的数百万个网站提供指标的高级摘要。但是，CrUX 通常不会提供您从 RUM 提供商处获得的上下文数据来帮助您分析问题。因此，我们仍然建议站点尽可能使用 RUM 提供程序，或实施自己的 RUM 解决方案来补充 CrUX 中可用的内容。

### Diagnose slow interactions in the lab  诊断实验室中的缓慢交互

Ideally, you'll want to start testing in the lab once you have field data that suggests you have slow interactions. In the absence of field data, there are some strategies for identifying slow interactions in the lab. Such strategies include following common user flows and testing interactions along the way, as well as interacting with the page during load—when the main thread is often busiest—in order to surface slow interactions during that crucial part of the user experience.  

理想情况下，一旦您有现场数据表明您的交互速度较慢，您就希望在实验室中开始测试。在缺乏现场数据的情况下，有一些策略可以识别实验室中的缓慢相互作用。这些策略包括遵循常见的用户流程并在此过程中测试交互，以及在加载期间（当主线程通常最繁忙时）与页面交互，以便在用户体验的关键部分显示缓慢的交互。

:::info
**Objective:** **Read to learn more:** [Diagnose slow interactions in the lab](https://web.dev/articles/diagnose-slow-interactions-in-the-lab).  

目标：阅读以了解更多信息：在实验室中诊断缓慢的相互作用。
:::

## Optimize interactions 优化交互

Once you've identified a slow interaction and [can manually reproduce it in the lab](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab), the next step is to optimize it. Interactions can be broken down into three phases:  

一旦您确定了缓慢的交互并可以在实验室中手动重现它，下一步就是对其进行优化。交互可以分为三个阶段：

1.  The input delay, which starts when the user initiates an interaction with the page, and ends when the event callbacks for the interaction begin to run.  

    输入延迟，从用户发起与页面的交互时开始，到交互的事件回调开始运行时结束。
2.  The processing time, which consists of the time it takes for event callbacks to run to completion.  

    处理时间，包括事件回调运行到完成所需的时间。
3.  The presentation delay, which is the time it takes for the browser to present the next frame which contains the visual result of the interaction.  

    演示延迟，即浏览器呈现包含交互视觉结果的下一帧所需的时间。

The sum of these three phases is the total interaction latency. Every single phase of an interaction contributes some amount of time to total interaction latency, so it's important to know how you can optimize each part of the interaction so it runs for as little time as possible.  

这三个阶段的总和就是总交互延迟。交互的每个阶段都会为总交互延迟贡献一定的时间，因此了解如何优化交互的每个部分以使其运行尽可能短的时间非常重要。

:::info
**Key point:** When optimizing interactions, it's important to understand that each [browsing context](https://developer.mozilla.org/docs/Glossary/Browsing_context) will have its own main thread. This means that the top-level page will have a main thread, but each `<iframe>` element on the page will have its own main thread as well. INP will be reported at the page-level including any slow interactions on the page or any iframes within that page. Ensure you understand which frame an interaction is happening in, to understand which main thread to look at. However, even with multiple main threads, resource-constrained devices can result in impact being felt across these seemingly independent threads.  

关键点：在优化交互时，请务必了解每个浏览上下文都有自己的主线程。这意味着顶级页面将有一个主线程，但页面上的每个 `<iframe>` 元素也将有自己的主线程。INP 将在页面级别报告，包括页面上的任何缓慢交互或该页面中的任何 iframe。确保您了解交互发生在哪个框架中，以了解要查看的主线程。但是，即使有多个主线程，资源受限的设备也可能导致这些看似独立的线程受到影响。
:::

### Identify and reduce input delay  识别并减少输入延迟

When a user interacts with a page, the first part of that interaction is the _input delay_. Depending on other activity on the page, input delays can be considerable in length. This could be due to activity occurring on the main thread (perhaps due to scripts loading, parsing and compiling), fetch handling, timer functions, or even from other interactions that occur in quick succession and overlap with one another.  

当用户与页面交互时，该交互的第一部分是输入延迟。根据页面上的其他活动，输入延迟的长度可能相当长。这可能是由于主线程上发生的活动（可能是由于脚本加载、解析和编译）、获取处理、计时器函数，甚至是来自快速连续发生并相互重叠的其他交互。

Whatever the source of an interaction's input delay, you'll want to reduce input delay to a minimum so that interactions can begin running event callbacks as soon as possible.  

无论交互的输入延迟来源是什么，您都希望将输入延迟降至最低，以便交互可以尽快开始运行事件回调。

:::info
**Read to learn more:** [Optimize input delay](https://web.dev/articles/optimize-input-delay).  

阅读以了解更多信息：优化输入延迟。
:::

#### The relationship between script evaluation and long tasks during startup  启动期间脚本评估与长任务的关系

A critical aspect of interactivity in the page lifecycle is during startup. As a page loads, it will initially render, but it's important to remember that just because a page has _rendered_, doesn't mean that the page is finished _loading_. Depending on how many resources a page requires to become fully functional, it's possible that users may attempt to interact with the page while it's still loading.  

在页面生命周期中，交互性的一个关键方面是在启动期间。当页面加载时，它最初会呈现，但重要的是要记住，仅仅因为页面已呈现，并不意味着页面已完成加载。根据页面需要多少资源才能完全正常运行，用户可能会在页面仍在加载时尝试与页面进行交互。

One thing that can extend an interaction's input delay while a page loads is script evaluation. After a JavaScript file has been fetched from the network, the browser still has work to do before that JavaScript can run; that work includes parsing a script to ensure its syntax is valid, compiling it into bytecode, and then finally executing it.  

脚本评估可以在页面加载时延长交互的输入延迟。从网络获取 JavaScript 文件后，浏览器在运行 JavaScript 之前仍有工作要做;这项工作包括解析脚本以确保其语法有效，将其编译为字节码，然后最终执行它。

Depending on the size of a script, this work can introduce long tasks on the main thread, which will delay the browser from responding to other user interactions. To keep your page responsive to user input during page load, it's important to understand what you can do to reduce the likelihood of long tasks during page load so the page stays snappy.  

根据脚本的大小，这项工作可能会在主线程上引入较长的任务，这将延迟浏览器响应其他用户交互。为了让页面在页面加载期间响应用户输入，请务必了解如何减少页面加载期间执行长任务的可能性，从而使页面保持活泼。

:::info
**Objective:** **Read to learn more:** [Script evaluation and long tasks](https://web.dev/articles/script-evaluation-and-long-tasks).  

目标：阅读以了解更多信息：脚本评估和长任务。
:::

### Optimize event callbacks 优化事件回调

The input delay is only the first part of what INP measures. You'll also need to make sure that the event callbacks that run in response to a user interaction can complete as quickly as possible.  

输入延迟只是 INP 测量的第一部分。您还需要确保为响应用户交互而运行的事件回调能够尽快完成。

#### Yield to the main thread often  经常让步于主线

The best general advice in optimizing event callbacks is to do as little work as possible in them. However, your interaction logic may be complex, and you may only be able to marginally reduce the work they do.  

优化事件回调的最佳一般建议是尽可能少地在事件回调中做工作。但是，您的交互逻辑可能很复杂，您可能只能略微减少他们所做的工作。

If you find this is the case for your website, the next thing you can try is to break up the work in event callbacks into separate tasks. This prevents the collective work from becoming a long task that blocks the main thread, which allows other interactions that otherwise would be waiting on the main thread to run sooner.  

如果你发现你的网站是这种情况，你可以尝试的下一件事是将事件回调中的工作分解为单独的任务。这样可以防止集体工作成为阻塞主线程的冗长任务，从而允许其他原本在主线程上等待的交互更快地运行。

`setTimeout` is one way to break up tasks, because the callback passed to it runs in a new task. You can [use `setTimeout` by itself](https://web.dev/articles/optimize-long-tasks#manually_defer_code_execution) or abstract its use into a separate function [for more ergonomic yielding](https://web.dev/articles/optimize-long-tasks#use_asyncawait_to_create_yield_points).  

`setTimeout` 是分解任务的一种方法，因为传递给它的回调在新任务中运行。您可以单独使用，也可以将其使用 `setTimeout` 抽象为单独的功能，以实现更符合人体工程学的效果。

:::info
**Read to learn more:** [Optimize long tasks](https://web.dev/articles/optimize-long-tasks).  

阅读以了解更多信息：优化长任务。
:::

Yielding indiscriminately is better than not yielding at all—however, there is a more nuanced way of yielding to the main thread, and that involves only yielding immediately after an event callback that updates the user interface so rendering logic can run sooner.  

不分青红皂白地让步总比完全不让步要好，但是，有一种更微妙的让步于主线程的方法，它只涉及在更新用户界面的事件回调后立即让步，以便渲染逻辑可以更快地运行。

#### Yield to allow rendering work to occur sooner

A more advanced yielding technique involves structuring the code in your event callbacks to limit what gets run to just the logic required to apply visual updates for the next frame. Everything else can be deferred to a subsequent task. This not only keeps callbacks light and nimble, but it also improves rendering time for interactions by not allowing visual updates to block on event callback code.  

一种更高级的生成技术涉及在事件回调中构建代码，以将运行的内容限制为仅应用下一帧视觉更新所需的逻辑。其他一切都可以推迟到后续任务。这不仅使回调保持轻巧和灵活，而且还通过不允许视觉更新阻塞事件回调代码来缩短交互的渲染时间。

For example, imagine a rich text editor that formats text as you type, but also updates other aspects of the UI in response to what you've written (such as word count, highlighting spelling mistakes, and other important visual feedback). In addition, the application may also need to save what you've written so that if you leave and return, you haven't lost any work.  

例如，假设有一个富文本编辑器，它会在你键入时设置文本格式，但也会根据你编写的内容（如字数统计、突出显示拼写错误和其他重要的视觉反馈）更新 UI 的其他方面。此外，应用程序可能还需要保存您编写的内容，以便在您离开并返回时不会丢失任何工作。

In this example, the following four things need to happen in response to characters typed by the user. However, only the first item needs to be done before the next frame is presented.  

在此示例中，需要执行以下四项操作以响应用户键入的字符。但是，在显示下一帧之前，只需要完成第一项。

1.  Update the text box with what the user typed and apply any required formatting.  

    使用用户键入的内容更新文本框，并应用任何所需的格式。
2.  Update the part of the UI that displays the current word count.  

    更新显示当前字数统计的 UI 部分。
3.  Run logic to check for spelling mistakes.  

    运行逻辑以检查拼写错误。
4.  Save the most recent changes (either locally or to a remote database).  

    保存最新的更改（本地或远程数据库）。

The code to do this might look something like the following:  

执行此操作的代码可能如下所示：

```js
textBox.addEventListener('input', (inputEvent) => {
  // Update the UI immediately, so the changes the user made
  // are visible as soon as the next frame is presented.
  updateTextBox(inputEvent);

  // Use `setTimeout` to defer all other work until at least the next
  // frame by queuing a task in a `requestAnimationFrame()` callback.
  requestAnimationFrame(() => {
    setTimeout(() => {
      const text = textBox.textContent;
      updateWordCount(text);
      checkSpelling(text);
      saveChanges(text);
    }, 0);
  });
});
```

The following visualization shows how deferring any non-critical updates until after the next frame can reduce the processing time and thus the overall interaction latency.  

以下可视化效果显示了将任何非关键更新推迟到下一帧之后如何减少处理时间，从而减少整体交互延迟。

![20231117152434](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117152434.png)
*Click the above figure to see a high-resolution version.* *(点击上图查看高分辨率版本。)*

While the use of `setTimeout()` inside a `requestAnimationFrame()` call in the previous code example is admittedly a bit esoteric, it is an effective method that works in all browsers to ensure that the non-critical code does not block the next frame.  

虽然在前面的代码示例中使用 `setTimeout()` inside a `requestAnimationFrame()` call 确实有点深奥，但它是一种有效的方法，适用于所有浏览器，以确保非关键代码不会阻止下一帧。

#### Avoid layout thrashing 避免布局抖动

Layout thrashing—sometimes called forced synchronous layout—is a rendering performance problem where layout occurs synchronously. It occurs when you update styles in JavaScript, and then read them in the same task—and [there are many properties in JavaScript that can cause layout thrashing](https://gist.github.com/paulirish/5d52fb081b3570c81e3a).  

布局抖动（有时称为强制同步布局）是布局同步发生的渲染性能问题。当您在 JavaScript 中更新样式，然后在同一任务中读取它们时，就会发生这种情况，并且 JavaScript 中有许多属性可能会导致布局抖动。

![20231117152514](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117152514.png)
*An example of layout thrashing, as shown in the performance panel of Chrome DevTools. Rendering tasks that involve layout thrashing will be noted with a red triangle at the upper right corner of the portion of the call stack, often labeled **Recalculate Style** or **Layout**.*

*(布局抖动示例，如 Chrome DevTools 的性能面板所示。涉及布局抖动的渲染任务将在调用堆栈部分的右上角用红色三角形表示，通常标记为“重新计算样式”或“布局”。)*

Layout thrashing is a performance bottleneck because by updating styles and then immediately requesting the values of those styles in JavaScript, the browser is forced to do synchronous layout work it otherwise could have waited to perform asynchronously later on after event callbacks have finished running.  

布局抖动是一个性能瓶颈，因为通过更新样式，然后立即在 JavaScript 中请求这些样式的值，浏览器被迫执行同步布局工作，否则它可能会等待在事件回调完成运行后异步执行。

:::info
**Objective:** **Read to learn more:** [Avoid large, complex layouts and layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing).  

目标：阅读以了解更多信息：避免大型、复杂的布局和布局抖动。
:::

### Minimize presentation delay  最大限度减少演示延迟

The _presentation delay_ of an interaction marks spans from when an interaction's event callbacks have finished running, up to the point at which the browser is able to paint the next frame that shows the resulting visual changes.  

交互标记的呈现延迟范围从交互的事件回调完成运行，到浏览器能够绘制显示生成的视觉更改的下一帧。

#### Minimize DOM size 最小化 DOM 大小

When a page's DOM is small, rendering work usually finishes quickly. However, when DOMs get very large, rendering work tends to scale with increasing DOM size. The relationship between rendering work and DOM size isn't a linear one, but large DOMs do require more work to render than small DOMs. A large DOM is problematic in two cases:  

当页面的 DOM 较小时，渲染工作通常会很快完成。但是，当 DOM 变得非常大时，渲染工作往往会随着 DOM 大小的增加而扩展。渲染工作和 DOM 大小之间的关系不是线性的，但大型 DOM 确实比小型 DOM 需要更多的工作来渲染。大型 DOM 在两种情况下是有问题的：

1.  During the initial page render, where a large DOM requires a lot of work to render the page's initial state.  

    在初始页面渲染期间，大型 DOM 需要大量工作来渲染页面的初始状态。
2.  In response to a user interaction, where a large DOM can cause rendering updates to be very expensive, and therefore increase the time it takes for the browser to present the next frame.  

    为了响应用户交互，大型 DOM 可能会导致渲染更新非常昂贵，从而增加浏览器呈现下一帧所需的时间。

:::info
**Read to learn more:** [DOM size and interactivity](https://web.dev/articles/dom-size-and-interactivity).  

阅读以了解更多信息：DOM 大小和交互性。
:::

Bear in mind that there are instances in which large DOMs can't be significantly reduced. While there are approaches you can take to reduce DOM size, such as [flattening your DOM](https://web.dev/articles/dom-size-and-interactivity#how_can_i_reduce_dom_size) or [add to the DOM during user interactions](https://web.dev/articles/dom-size-and-interactivity#consider_an_additive_approach) to keep your initial DOM size small, those techniques may only go so far.  

请记住，在某些情况下，大型 DOM 无法显著减少。虽然您可以采取一些方法来减小 DOM 大小，例如扁平化 DOM 或在用户交互期间添加到 DOM 以保持初始 DOM 大小较小，但这些技术可能只能到此为止。

#### Use `content-visibility` to lazily render off-screen elements  用于延迟呈现屏幕外元素

One way you can limit the amount of both rendering work during page load and rendering work in response to user interactions is to lean on the CSS `content-visibility` property, which effectively amounts to lazily rendering elements as they approach the viewport. While `content-visibility` can take some practice to use effectively, it's worth investigating if the result is lower rendering time that can improve your page's INP.  

限制页面加载期间的渲染工作量和响应用户交互的渲染工作的一种方法是依靠 CSS `content-visibility` 属性，这实际上相当于在元素接近视口时延迟渲染元素。虽然 `content-visibility` 可能需要一些练习才能有效使用，但值得研究的结果是否是可以改善页面的 INP 的更短的渲染时间。

:::info
**Read to learn more:** [`content-visibility`: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility).  

阅读以了解更多信息： `content-visibility` ：可提高渲染性能的新 CSS 属性。
:::

#### Be aware of performance costs when rendering HTML using JavaScript  

使用 JavaScript 呈现 HTML 时要注意性能成本

Where there's HTML, there's HTML parsing, and after the browser has finished parsing HTML into a DOM, it must apply styles to it, perform layout calculations, and subsequently render that layout. This is an unavoidable cost, but _how_ you go about rendering HTML matters.  

哪里有 HTML，哪里就有 HTML 解析，在浏览器将 HTML 解析为 DOM 后，它必须对其应用样式，执行布局计算，然后呈现该布局。这是不可避免的成本，但如何呈现 HTML 很重要。

When the server sends HTML, it arrives in the browser as a stream. Streaming means that the HTML response from the server is arriving in chunks. The browser optimizes how it handles a stream by incrementally parsing chunks of that stream as they arrive, and rendering them bit by bit. This is a performance optimization in that the browser implicitly yields periodically and automatically during page load, and you get that for free.  

当服务器发送 HTML 时，它会以流的形式到达浏览器。流式处理意味着来自服务器的 HTML 响应是以块形式到达的。浏览器通过在流到达时以增量方式解析流块并逐位呈现它们来优化其处理流的方式。这是一种性能优化，因为浏览器在页面加载期间会定期自动隐式生成，并且您可以免费获得。

While the first visit to any website will always involve _some_ amount of HTML, a common approach starts with a minimal initial bit of HTML, and then JavaScript is used to populate the content area. Subsequent updates to that content area also occur as the result of user interactions. This is usually called the [single-page application (SPA) model](https://en.wikipedia.org/wiki/Single-page_application). One drawback of this pattern is that, by rendering HTML with JavaScript on the client, you not only get the cost of the JavaScript processing to create that HTML, but also the browser will _not_ yield until it has finished parsing that HTML, and rendering it.  

虽然第一次访问任何网站总是会涉及一定数量的 HTML，但一种常见的方法从最少的初始 HTML 位开始，然后使用 JavaScript 来填充内容区域。该内容区域的后续更新也会作为用户交互的结果而发生。这通常称为单页应用程序 （SPA） 模型。这种模式的一个缺点是，通过在客户端上使用 JavaScript 呈现 HTML，您不仅会获得创建该 HTML 的 JavaScript 处理成本，而且浏览器在完成对该 HTML 的解析和渲染之前不会让步。

It's vital to remember though, that even websites that _aren't_ SPAs will probably involve some amount of HTML rendering through JavaScript as the result of interactions. This is generally fine, so long as you're not rendering large amounts of HTML on the client, which can delay presentation of the next frame. However, it's important to understand the performance implications of this approach to rendering HTML in the browser, and how it can impact the responsiveness of your website to user input if you are rendering a lot of HTML via JavaScript.  

但重要的是要记住，即使是不是 SPA 的网站，作为交互的结果，也可能通过 JavaScript 进行一定程度的 HTML 渲染。这通常没问题，只要您不在客户端上呈现大量 HTML，这可能会延迟下一帧的呈现。但是，重要的是要了解这种在浏览器中呈现 HTML 的方法对性能的影响，以及如果您通过 JavaScript 渲染大量 HTML，它将如何影响您的网站对用户输入的响应能力。


:::info
**Read to learn more:** [Client-side rendering of HTML and interactivity](https://web.dev/articles/client-side-rendering-of-html-and-interactivity).  

阅读以了解更多信息：HTML 的客户端呈现和交互性。
:::

## Conclusion 结论

Improving your site's INP is an iterative process. When you fix a slow interaction in the field, the chances are good that—especially if your website provides lots of interactivity—you'll start to find other slow interactions, and you'll need to optimize them too.  

改进您网站的 INP 是一个迭代过程。当你在现场修复一个缓慢的交互时，很有可能--特别是如果你的网站提供了大量的交互性--你会开始发现其他缓慢的交互，你也需要优化它们。

The key to improving INP is persistence. In time, you can get your page's responsiveness to a place where users are happy with the experience you're providing them. The chances are also good that as you develop new features for your users, you may need to go through the same process in optimizing interactions specific to them. It will take time and effort, but it's time and effort well spent.  

改善INP的关键是持久性。随着时间的推移，你可以让你的页面的响应能力达到一个用户对你提供的体验感到满意的地方。当您为用户开发新功能时，您可能需要经历相同的过程来优化特定于他们的交互。这需要时间和精力，但时间和精力都花得很值。




































