# 使用 RAIL 模型衡量性能

`metadata:`

**原标题:** Measure performance with the RAIL model

**链接:** https://web.dev/articles/rail

---

**RAIL** is a **user-centric** performance model that provides a structure for thinking about performance. The model breaks down the user's experience into key actions (for example, tap, scroll, load) and helps you define performance goals for each of them.  

RAIL 是一个以用户为中心的性能模型，它提供了一种用于思考性能的结构。该模型将用户体验分解为关键操作（例如，点击、滚动、加载），并帮助您为每个操作定义性能目标。

:::info

**Key point:** [Core Web Vitals](https://web.dev/articles/vitals) is a newer initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. It is the recommended approach for defining performance goals over RAIL, and has [different thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) than those detailed here.  

关键点：Core Web Vitals 是 Google 的一项新举措，旨在为质量信号提供统一指导，这对于在网络上提供出色的用户体验至关重要。它是通过 RAIL 定义性能目标的推荐方法，其阈值与此处详述的阈值不同。

:::

RAIL stands for four distinct aspects of web app life cycle: response, animation, idle, and load. Users have different performance expectations for each of these contexts, so performance goals are defined based on the context and [UX research on how users perceive delays](https://www.nngroup.com/articles/response-times-3-important-limits/).  

RAIL 代表 Web 应用程序生命周期的四个不同方面：响应、动画、空闲和加载。用户对每个上下文都有不同的性能期望，因此性能目标是根据上下文和对用户如何看待延迟的用户体验研究来定义的。

![The 4 parts of the RAIL performance model: response, animation, idle, and load.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-4-parts-the-rail-per-0bf45984bc75a.png?imageSlim)

The 4 parts of the RAIL performance model  

RAIL性能模型的4个部分

## Focus on the user 以用户为中心

Make users the focal point of your performance effort. The table below describes key metrics of how users perceive performance delays:  

让用户成为绩效工作的焦点。下表描述了用户如何看待性能延迟的关键指标：

User perception of performance delays  

用户对性能延迟的感知

0 to 16 ms:

Users are exceptionally good at tracking motion, and they dislike it when animations aren't smooth. They perceive animations as smooth so long as 60 new frames are rendered every second. That's 16 ms per frame, including the time it takes for the browser to paint the new frame to the screen, leaving an app about 10 ms to produce a frame.  

用户非常擅长跟踪运动，当动画不流畅时，他们不喜欢它。他们认为动画是流畅的，只要每秒渲染 60 个新帧。这是每帧 16 毫秒，包括浏览器将新帧绘制到屏幕上所需的时间，使应用程序生成一帧大约需要 10 毫秒。

---

0 to 100 ms:

Respond to user actions within this time window and users feel like the result is immediate. Any longer, and the connection between action and reaction is broken.  

在此时间窗口内响应用户操作，用户会觉得结果是立竿见影的。再这样下去，行动和反应之间的联系就被打破了。

---

100 to 1000 ms:

Within this window, things feel part of a natural and continuous progression of tasks. For most users on the web, loading pages or changing views represents a task.  

在这个窗口内，事情感觉是任务自然和连续进展的一部分。对于 Web 上的大多数用户来说，加载页面或更改视图是一项任务。

---

1000 ms or more:

Beyond 1000 milliseconds (1 second), users lose focus on the task they are performing.  

超过 1000 毫秒（1 秒），用户将失去对他们正在执行的任务的关注。

---

10000 ms or more

Beyond 10000 milliseconds (10 seconds), users are frustrated and are likely to abandon tasks. They may or may not come back later.  

超过 10000 毫秒（10 秒），用户会感到沮丧，并可能放弃任务。他们可能会也可能不会回来。

---

:::info

**Note:** Users perceive performance delays differently, depending on network conditions and hardware. For example, loading sites on a powerful desktop machine over a fast Wi-Fi connection commonly happens in under 1 s and users have grown accustomed to that. Loading sites on mobile devices with slow 3G connections takes more time, so mobile users are generally more patient and loading in 5 s on mobile is a more realistic goal.  

注意：用户对性能延迟的感知因网络条件和硬件而异。例如，通过快速 Wi-Fi 连接在功能强大的台式计算机上加载站点通常在 1 秒内完成，用户已经习惯了这一点。在 3G 连接速度较慢的移动设备上加载网站需要更多时间，因此移动用户通常更有耐心，在移动设备上加载 5 秒是一个更现实的目标。

:::

## Goals and guidelines 目标和准则

In the context of RAIL, the terms **goals** and **guidelines** have specific meanings:  

在 RAIL 的上下文中，术语目标和准则具有特定含义：

*   **Goals**. Key performance metrics related to user experience. For example, tap to paint in under 100 milliseconds. Since human perception is relatively constant, these goals are unlikely to change any time soon.  

    目标。与用户体验相关的关键性能指标。例如，点击即可在 100 毫秒内完成绘画。由于人类的感知是相对恒定的，这些目标不太可能很快改变。
    
*   **Guidelines**. Recommendations that help you achieve goals. These may be specific to current hardware and network connection conditions, and therefore may change over time.  

    指引。帮助您实现目标的建议。这些可能特定于当前的硬件和网络连接条件，因此可能会随时间而变化。
    

## Response: process events in under 50ms  

响应：在 50 毫秒内处理事件

**Goal**: Complete a transition initiated by user input within 100 ms, so users feel like the interactions are instantaneous.  

目标：在 100 毫秒内完成由用户输入启动的转换，让用户感觉交互是即时的。

**Guidelines**: 指引：

*   To ensure a visible response within 100 ms, process user input events within 50 ms. This applies to most inputs, such as clicking buttons, toggling form controls, or starting animations. This does not apply to touch drags or scrolls.  

    为确保在 100 毫秒内获得可见响应，请在 50 毫秒内处理用户输入事件。这适用于大多数输入，例如单击按钮、切换窗体控件或启动动画。这不适用于触摸拖动或滚动。
    
*   Though it may sound counterintuitive, it's not always the right call to respond to user input immediately. You can use this 100 ms window to do other expensive work, but be careful not to block the user. If possible, do work in the background.  

    虽然这听起来可能违反直觉，但立即响应用户输入并不总是正确的调用。您可以使用这 100 毫秒窗口执行其他成本高昂的工作，但请注意不要阻止用户。如果可能，请在后台工作。
    
*   For actions that take longer than 50 ms to complete, always provide feedback.  

    对于完成时间超过 50 毫秒的操作，请始终提供反馈。
    

### 50 ms or 100 ms? 50 毫秒还是 100 毫秒？

The goal is to respond to input in under 100 ms, so why is our budget only 50 ms? This is because there is generally other work being done in addition to input handling, and that work takes up part of the time available for acceptable input response. If an application is performing work in the recommended 50 ms chunks during idle time, that means input can be queued for up to 50 ms if it occurs during one of those chunks of work. Accounting for this, it's safe to assume only the remaining 50 ms is available for actual input handling. This effect is visualized in the diagram below which shows how input received during an idle task is queued, reducing the available processing time:  

目标是在 100 毫秒内响应输入，那么为什么我们的预算只有 50 毫秒？这是因为除了输入处理之外，通常还会执行其他工作，并且该工作占用了可用于可接受输入响应的部分时间。如果应用程序在空闲时间以建议的 50 毫秒块执行工作，这意味着如果输入发生在其中一个工作块期间，则最多可以排队 50 毫秒。考虑到这一点，可以安全地假设只有剩余的 50 毫秒可用于实际输入处理。下图显示了此效果，该图显示了在空闲任务期间收到的输入如何排队，从而减少了可用的处理时间：

![Diagram showing how input received during an idle task is queued, reducing available input processing time to 50ms](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/diagram-showing-input-re-2349b4a3db617.png?imageSlim)

How idle tasks affect input response budget.  

空闲任务如何影响输入响应预算。

## Animation: produce a frame in 10 ms  

动画：在 10 毫秒内生成一帧

**Goals**: 目标：

*   Produce each frame in an animation in 10 ms or less. Technically, the maximum budget for each frame is 16 ms (1000 ms / 60 frames per second ≈ 16 ms), but browsers need about 6 ms to render each frame, hence the guideline of 10 ms per frame.  

    在 10 毫秒或更短的时间内生成动画中的每一帧。从技术上讲，每帧的最大预算为 16 毫秒（1000 毫秒/每秒 60 帧≈ 16 毫秒），但浏览器需要大约 6 毫秒来渲染每一帧，因此每帧 10 毫秒的准则。
    
*   Aim for visual smoothness. Users notice when frame rates vary.  

    以视觉流畅度为目标。当帧速率发生变化时，用户会注意到。
    

**Guidelines**: 指引：

*   In high pressure points like animations, the key is to do nothing where you can, and the absolute minimum where you can't. Whenever possible, make use of the 100 ms response to pre-calculate expensive work so that you maximize your chances of hitting 60 fps.  

    在像动画这样的高压点中，关键是不能做任何事情，不能做绝对最小的事情。尽可能利用 100 毫秒的响应来预先计算昂贵的工作，以便最大限度地提高达到 60 fps 的机会。
    
*   See [Rendering Performance](https://web.dev/articles/rendering-performance) for various animation optimization strategies.  

    有关各种动画优化策略，请参阅渲染性能。

:::info

**Note:** Recognize all the types of animations. Animations aren't just fancy UI effects. Each of these interactions are considered animations:  

注意：识别所有类型的动画。动画不仅仅是花哨的UI效果。这些交互中的每一个都被视为动画：

:::

*   Visual animations, such as entrances and exits, [tweens](https://www.webopedia.com/TERM/T/tweening.html), and loading indicators.  

    视觉动画，例如入口和出口、补间和加载指示器。

*   Scrolling. This includes flinging, which is when the user starts scrolling, then lets go, and the page continues scrolling.  

    滚动。这包括甩动，即用户开始滚动，然后松开，页面继续滚动。

*   Dragging. Animations often follow user interactions, such as panning a map or pinching to zoom.  

    拖动。动画通常跟随用户交互，例如平移地图或捏合缩放。

## Idle: maximize idle time 空闲：最大化空闲时间

**Goal**: Maximize idle time to increase the odds that the page responds to user input within 50 ms.  

目标：最大限度地延长空闲时间，以增加页面在 50 毫秒内响应用户输入的几率。

**Guidelines**: 指引：

*   Use idle time to complete deferred work. For example, for the initial page load, load as little data as possible, then use [idle time](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback) to load the rest.  

    利用空闲时间完成延迟的工作。例如，对于初始页面加载，加载尽可能少的数据，然后利用空闲时间加载其余数据。
    
*   Perform work during idle time in 50 ms or less. Any longer, and you risk interfering with the app's ability to respond to user input within 50 ms.  

    在空闲时间内以 50 毫秒或更短的时间执行工作。如果时间再长，你就有可能干扰应用在 50 毫秒内响应用户输入的能力。
    
*   If a user interacts with a page during idle time work, the user interaction should always take the highest priority and interrupt the idle time work.  

    如果用户在空闲时间工作期间与页面交互，则用户交互应始终具有最高优先级，并中断空闲时间工作。
    

## Load: deliver content and become interactive in under 5 seconds  

加载：在 5 秒内交付内容并实现交互

When pages load slowly, user attention wanders, and users perceive the task as broken. Sites that load quickly have [longer average sessions, lower bounce rates, and higher ad viewability](https://www.thinkwithgoogle.com/intl/en-154/insights-inspiration/research-data/need-mobile-speed-how-mobile-latency-impacts-publisher-revenue/).  

当页面加载缓慢时，用户的注意力会分散，并且用户会认为任务已损坏。加载速度快的网站平均会话时间更长，跳出率更低，广告可见度更高。

**Goals**: 目标：

*   Optimize for fast loading performance relative to the device and network capabilities of your users. Currently, a good target for first loads is to load the page and be [interactive](https://web.dev/articles/tti) in [5 seconds or less on mid-range mobile devices with slow 3G connections](https://web.dev/articles/performance-budgets-101#establish_a_baseline).  

    针对用户的设备和网络功能进行优化，以实现快速加载性能。目前，首次加载的一个很好的目标是在 5 秒或更短的时间内加载页面并在 3G 连接速度较慢的中端移动设备上进行交互。
    
*   For subsequent loads, a good target is to load the page in under 2 seconds.  

    对于后续加载，一个好的目标是在 2 秒内加载页面。

:::info

**Note:** Be aware that these targets may change over time.  

注意：请注意，这些目标可能会随时间而变化。

:::

**Guidelines**: 指引：

*   Test your load performance on the mobile devices and network connections that are common among your users. You can use [Chrome User Experience Report](https://web.dev/articles/chrome-ux-report) to find out the [connection distribution](https://developer.chrome.com/blog/chrome-ux-report-looker-studio-dashboard/#using-the-dashboard) of your users. If the data is not available for your site, [The Mobile Economy 2019](https://www.gsma.com/mobileeconomy/) suggests that a good global baseline is a mid-range Android phone, such as a Moto G4, and a slow 3G network (defined as 400 ms RTT and 400 kbps transfer speed). This combination is available on [WebPageTest](https://www.webpagetest.org/easy).  

    在用户中常见的移动设备和网络连接上测试负载性能。您可以使用 Chrome 用户体验报告来了解用户的连接分布情况。如果数据不适用于您的网站，那么 2019 年移动经济建议，良好的全球基准是中端 Android 手机（如 Moto G4）和慢速 3G 网络（定义为 400 毫秒 RTT 和 400 kbps 传输速度）。此组合在 WebPageTest 上可用。
    
*   Keep in mind that although your typical mobile user's device might claim that it's on a 2G, 3G, or 4G connection, in reality the [effective connection speed](https://web.dev/articles/adaptive-serving-based-on-network-quality#how_it_works) is often significantly slower, due to packet loss and network variance.  

    请记住，尽管典型移动用户的设备可能声称它使用的是 2G、3G 或 4G 连接，但实际上，由于数据包丢失和网络差异，有效连接速度通常要慢得多。
    
*   [Eliminate render blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).  

    消除渲染阻塞资源。
    
*   You don't have to load everything in under 5 seconds to produce the perception of a complete load. Consider [lazy loading images](https://web.dev/articles/browser-level-image-lazy-loading), [code-splitting JavaScript bundles](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting), and other [optimizations suggested on web.dev](https://web.dev/explore/fast).  

    您不必在 5 秒内加载所有内容即可产生完整负载的感觉。考虑延迟加载图像、代码拆分 JavaScript 包以及 web.dev 上建议的其他优化。

:::info

**Note:  注意：**

Recognize the factors that affect page load performance:  

识别影响页面加载性能的因素：

*   Network speed and latency  

    网络速度和延迟

*   Hardware (slower CPUs, for example)  

    硬件（例如，速度较慢的 CPU）

*   Cache eviction 缓存逐出

*   Differences in L2/L3 caching  

    L2/L3 缓存的差异

*   Parsing JavaScript 解析 JavaScript

:::

## Tools for measuring RAIL 测量 RAIL 的工具

There are a few tools to help you automate your RAIL measurements. Which one you use depends on what type of information you need, and what type of workflow you prefer.  

有一些工具可以帮助您自动执行 RAIL 测量。使用哪一种取决于所需的信息类型以及您喜欢的工作流类型。

### Chrome DevTools Chrome 开发者工具

[Chrome DevTools](https://developer.chrome.com/docs/devtools/) provides in-depth analysis on everything that happens while your page loads or runs. See [Get Started With Analyzing Runtime Performance](https://developer.chrome.com/docs/devtools/evaluate-performance/) to get familiar with the **Performance** panel UI.  

Chrome DevTools 可对页面加载或运行时发生的所有情况进行深入分析。请参阅分析运行时性能入门以熟悉“性能”面板 UI。

The following DevTools features are especially relevant:  

以下 DevTools 功能特别相关：

*   [Throttle your CPU](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#cpu-throttle) to simulate a less-powerful device.  

    限制 CPU 以模拟功能较弱的设备。
    
*   [Throttle the network](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#network-throttle) to simulate slower connections.  

    限制网络以模拟较慢的连接。
    
*   [View main thread activity](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#main) to view every event that occurred on the main thread while you were recording.  

    查看主线程活动可查看录制时主线程上发生的每个事件。
    
*   [View main thread activities in a table](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#activities) to sort activities based on which ones took up the most time.  

    在表格中查看主线程活动，以根据哪些活动占用的时间最多对活动进行排序。
    
*   [Analyze frames per second (FPS)](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#fps) to measure whether your animations truly run smoothly.  

    分析每秒帧数 （FPS） 以衡量动画是否真正流畅运行。
    
*   [Monitor CPU usage, JS heap size, DOM nodes, layouts per second, and more](https://developer.chrome.com/blog/new-in-devtools-64/#perf-monitor) in real-time with the **Performance Monitor**.  

    使用性能监视器实时监控 CPU 使用率、JS 堆大小、DOM 节点、每秒布局等。
    
*   [Visualize network requests](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#network) that occurred while you were recording with the **Network** section.  

    使用“网络”部分可视化录制时发生的网络请求。
    
*   [Capture screenshots while recording](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#screenshots) to play back exactly how the page looked while the page loaded, or an animation fired, and so on.  

    在录制时捕获屏幕截图，以准确回放页面加载或触发动画等时页面的外观。
    
*   [View interactions](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#interactions) to quickly identify what happened on a page after a user interacted with it.  

    查看交互以快速识别用户与页面交互后页面上发生的情况。
    
*   [Find scroll performance issues in real-time](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#scrolling-performance-issues) by highlighting the page whenever a potentially problematic listener fires.  

    每当有潜在问题的侦听器触发时，通过突出显示页面来实时查找滚动性能问题。
    
*   [View paint events in real-time](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#paint-flashing) to identify costly paint events that may be harming the performance of your animations.  

    实时查看绘制事件，以识别可能损害动画性能的代价高昂的绘制事件。
    

### Lighthouse 灯塔

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) is available in Chrome DevTools, at [PageSpeed Insights](https://pagespeed.web.dev/), as a Chrome Extension, as a Node.js module, and within WebPageTest. You give it a URL, it simulates a mid-range device with a slow 3G connection, runs a series of audits on the page, and then gives you a report on load performance, as well as suggestions on how to improve.  

Lighthouse 可在 Chrome DevTools、PageSpeed Insights、Chrome 扩展、Node.js 模块和 WebPageTest 中使用。你给它一个 URL，它模拟一个 3G 连接速度较慢的中端设备，在页面上运行一系列审计，然后给你一份关于负载性能的报告，以及关于如何改进的建议。

The following audits are especially relevant:  

以下审计尤为重要：

**Response 响应**

*   [Max Potential First Input Delay](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/). Estimates how long your app will take to respond to user input, based on main thread idle time.  

    最大潜在首次输入延迟。根据主线程空闲时间估计应用响应用户输入所需的时间。
    
*   [Does not use passive listeners to improve scrolling performance](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).  

    不使用被动侦听器来提高滚动性能。
    
*   [Total Blocking Time](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/). Measures the total amount of time that a page is blocked from responding to user input, such as mouse clicks, screen taps, or keyboard presses.  

    总阻塞时间。测量阻止页面响应用户输入（如鼠标单击、屏幕点击或键盘按下）的总时间。
    
*   [Time To Interactive](https://developer.chrome.com/docs/lighthouse/performance/interactive/). Measures when a user can consistently interact with all page elements.  

    互动时间。度量用户何时可以始终如一地与所有页面元素进行交互。
    

**Load 负荷**

*   [Does not register a service worker that controls page and start\_url](https://developer.chrome.com/docs/lighthouse/pwa/service-worker/). A service worker can cache common resources on a user's device, reducing time spent fetching resources over the network.  

    不注册控制页面和start\_url的 Service Worker。Service Worker 可以在用户的设备上缓存公共资源，从而减少通过网络获取资源所花费的时间。
    
*   [Page load is not fast enough on mobile networks](https://developer.chrome.com/docs/lighthouse/pwa/load-fast-enough-for-pwa/).  

    在移动网络上，页面加载速度不够快。
    
*   [Eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).  

    消除渲染阻塞资源。
    
*   [Defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/). Defer the loading of offscreen images until they're needed.  

    延迟屏幕外图像。将屏幕外图像的加载推迟到需要时。
    
*   [Properly size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/). Don't serve images that are significantly larger than the size that's rendered in the mobile viewport.  

    正确调整图像大小。不要提供明显大于在移动视口中呈现的大小的图像。
    
*   [Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).  

    避免链接关键请求。
    
*   [Does not use HTTP/2 for all of its resources](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/).  

    不将 HTTP/2 用于其所有资源。
    
*   [Efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).  

    高效编码图像。
    
*   [Enable text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).  

    启用文本压缩。
    
*   [Avoid enormous network payloads](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).  

    避免巨大的网络有效负载。
    
*   [Avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/). Reduce network bytes by only shipping DOM nodes that are needed for rendering the page.  

    避免 DOM 大小过大。通过仅传送呈现页面所需的 DOM 节点来减少网络字节。
    

### WebPageTest 网页测试

WebPageTest is a web performance tool that uses real browsers to access web pages and collect timing metrics. Enter a URL at [webpagetest.org/easy](https://webpagetest.org/easy) to get a detailed report on the page's load performance on a real Moto G4 device with a slow 3G connection. You can also configure it to include a Lighthouse audit.  

WebPageTest 是一种 Web 性能工具，它使用真实的浏览器访问网页并收集计时指标。在 webpagetest.org/easy 处输入 URL，以获取有关在 4G 连接速度较慢的真实 Moto G3 设备上的页面加载性能的详细报告。您还可以将其配置为包括 Lighthouse 审核。

## Summary 总结

RAIL is a lens for looking at a website's user experience as a journey composed of distinct interactions. Understand how users perceive your site in order to set performance goals with the greatest impact on user experience.  

RAIL是一个镜头，用于将网站的用户体验视为由不同交互组成的旅程。了解用户如何看待您的网站，以便设定对用户体验影响最大的性能目标。

*   Focus on the user. 以用户为中心。
    
*   Respond to user input in under 100 ms.  

    在 100 毫秒内响应用户输入。
    
*   Produce a frame in under 10 ms when animating or scrolling.  

    在制作动画或滚动时，在 10 毫秒内生成一帧。
    
*   Maximize main thread idle time.  

    最大限度地延长主线程空闲时间。
    
*   Load interactive content in under 5000 ms.  

    在 5000 毫秒内加载交互式内容。
