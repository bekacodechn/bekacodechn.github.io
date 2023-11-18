# INP: 将交互推进到下一种绘制

`metadata:`

**原标题:** Advancing Interaction to Next Paint

**链接:** https://web.dev/blog/inp-cwv

---

INP is no longer experimental. Learn about Chrome's plan to make it a Core Web Vital in 2024.  

INP 不再是实验性的。了解 Chrome 计划在 2024 年使其成为 Core Web Vital。

Chrome's mission with the [Web Vitals program](https://web.dev/articles/vitals) is to help developers focus on the metrics that are essential to great user experiences—the Core Web Vitals. One important aspect of the user experience that we've been focusing on is responsiveness, which is the ability of a web page to react quickly to user interactions.  

Chrome 的 Web Vitals 计划的使命是帮助开发者专注于对出色用户体验至关重要的指标，即 Core Web Vitals。我们一直关注的用户体验的一个重要方面是响应能力，即网页对用户交互做出快速反应的能力。

[First Input Delay (FID)](https://web.dev/articles/fid) is the Core Web Vital metric that measures responsiveness, but as we've written in the past, there are [known limitations of FID](https://web.dev/articles/better-responsiveness-metric). This led us to explore and seek feedback on a (then) [experimental metric](https://web.dev/articles/responsiveness) that addresses these limitations more effectively. In 2022, we announced [Interaction to Next Paint (INP)](https://web.dev/articles/inp) as that new metric, made it widely available in our tools, and started working with the community to test its efficacy.  

首次输入延迟 （FID） 是衡量响应能力的核心 Web Vital 指标，但正如我们过去所写的那样，FID 存在已知的局限性。这促使我们探索并寻求对（当时）实验指标的反馈，以更有效地解决这些限制。2022 年，我们宣布 Interaction to Next Paint （INP） 作为新指标，在我们的工具中广泛使用，并开始与社区合作测试其功效。

After another year of testing and gathering feedback from the community, we're ready to take the training wheels off and announce that INP is no longer experimental. Furthermore, effective March 2024, we're also committed to promoting INP as the new Core Web Vital metric for responsiveness, replacing FID.  

经过一年的测试和收集社区的反馈，我们准备取消训练轮，并宣布 INP 不再是实验性的。此外，自 2024 年 3 月起，我们还致力于将 INP 推广为新的 Core Web Vital 响应能力指标，以取代 FID。

In this post, we'll cover more about the motivation behind the decision, exactly what's changing, and how to get started. For more on how this affects Google Search, refer to [their blog post](https://developers.google.com/search/blog/2023/05/introducing-inp).  

在这篇文章中，我们将更多地介绍这个决定背后的动机、到底发生了什么变化以及如何开始。如需详细了解这对 Google 搜索有何影响，请参阅他们的博客文章。

## A better responsiveness metric  更好的响应能力指标

FID was a huge step forward when we [introduced](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html) it as a Core Web Vital in 2020. It offered developers a new way to measure responsiveness _as real users experience it_, which has always been an important part of the Web Vitals program. Unlike similar metrics that only approximate page interactivity—like [Total Blocking Time (TBT)](https://web.dev/articles/tbt) and [Time To Interactive (TTI)](https://web.dev/articles/tti)—FID directly measures the user experience. Crucially, a page could have slow TBT or TTI and still be perceived as responsive, because of the way real users interact with the page.  

当我们在 2020 年将其作为 Core Web Vital 推出时，FID 向前迈出了一大步。它为开发人员提供了一种新方法来衡量真实用户体验的响应能力，这一直是 Web Vitals 计划的重要组成部分。与仅近似页面交互性的类似指标（如总阻塞时间 （TBT） 和交互时间 （TTI））不同，FID 直接衡量用户体验。至关重要的是，由于真实用户与页面的交互方式，页面可能具有较慢的 TBT 或 TTI，但仍被视为响应式。

While it did improve the way we measure responsiveness, FID wasn't without limitations. The name itself actually gives away two such limitations: "first input" and "delay". FID only reports the responsiveness of the _first_ time a user interacts with the page. Even though first impressions are important, the first interaction is not necessarily representative of _all_ interactions throughout the life of a page. Further, FID only measures the _input delay_ portion of the first interaction, which is the amount of time the browser had to wait (due to main thread busyness) before even beginning to handle the interaction.  
虽然它确实改善了我们衡量响应能力的方式，但 FID 并非没有局限性。这个名字本身实际上给出了两个这样的限制：“第一个输入”和“延迟”。FID 仅报告用户首次与页面交互时的响应能力。尽管第一印象很重要，但第一次交互并不一定代表页面整个生命周期中的所有交互。此外，FID 仅测量第一次交互的输入延迟部分，即浏览器在开始处理交互之前必须等待的时间（由于主线程繁忙）。


Enter INP. Rather than only measuring the first interaction, INP takes [_all_ interactions](https://web.dev/articles/inp#whats_in_an_interaction) into account, reporting one of the slowest over the entire lifetime of the page. And, rather than only measuring the delay portion, INP measures the full duration from the start of the interaction, through the event handler, and until the browser is able to paint the next frame. Hence, Interaction to _Next Paint_. These implementation details make INP a much more comprehensive measure of user-perceived responsiveness than FID.  

输入 INP。INP 不仅衡量了第一次互动，还考虑了所有互动，报告了页面整个生命周期中最慢的互动之一。而且，INP 不仅测量延迟部分，还测量从交互开始到事件处理程序的整个持续时间，直到浏览器能够绘制下一帧。因此，与下一幅画的交互。这些实现细节使 INP 成为比 FID 更全面的用户感知响应能力度量。

## Evolving INP 不断发展的 INP

Starting today, INP is no longer experimental and will instead be considered a [_pending_ Core Web Vital metric](https://web.dev/articles/vitals#lifecycle). This is a new designation to indicate that INP has proven its readiness to replace FID—but we're not making the change just yet. To give the ecosystem time to adjust, INP will officially become a stable Core Web Vital metric in March 2024.  

从今天开始，INP 不再是实验性的，而是将被视为待定的核心 Web Vital 指标。这是一个新名称，表明 INP 已证明已准备好取代 FID，但我们尚未做出改变。为了让生态系统有时间进行调整，INP 将于 2024 年 3 月正式成为稳定的核心 Web Vital 指标。

![20231116205559](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116205559.png)
*Graphic showing the timeline of INP phases.* *(显示 INP 阶段时间线的图形。)*

Across our tools, you'll start to see INP without the `experimental` prefix or icon. If you programmatically consume INP data from any of the following APIs, you'll need to update your code to switch over to the non-experimental INP field.  

在我们的工具中，您将开始看到没有前缀或图标的 `experimental` INP。如果以编程方式使用来自以下任何 API 的 INP 数据，则需要更新代码以切换到非实验性 INP 字段。

| Syntax | Description |
| ----------- | ----------- |
|xx|yy|

| Tool 工具 | Deprecated field 已弃用的字段 | New field 新字段 |
| ----------- | ----------- | ------------|
|CrUX API | `experimental_interaction_to_next_paint` | `interaction_to_next_paint` |
| CrUX History API CrUX 历史 API | `experimental_interaction_to_next_paint` | `interaction_to_next_paint` |
| CrUX BigQuery | `experimental.interaction_to_next_paint` | `interaction_to_next_paint` |
| PageSpeed Insights API PageSpeed 见解 API | `experimental_interaction_to_next_paint` | `interaction_to_next_paint` |
| Lighthouse report\* 灯塔报告\* | `experimental-interaction-to-next-paint` | `interaction-to-next-paint` |

*Map of APIs to their old and new INP field name.* *(将 API 映射到其新旧 INP 字段名称。)*
\* Lighthouse will stop using the experimental INP field in version 11.  

\* Lighthouse 将在版本 11 中停止使用实验性 INP 字段。

To ease the transition and avoid breaking any downstream applications, these APIs will continue to serve the experimental INP field for another 90 days. API support for the experimental INP field will end on August 8, 2023.  

为了简化过渡并避免中断任何下游应用程序，这些 API 将继续为实验性 INP 领域服务 90 天。对实验性 INP 字段的 API 支持将于 2023 年 8 月 8 日结束。

Meanwhile, FID will remain a Core Web Vital until March 2024. At that time, INP will join [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) and [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls) as the three stable Core Web Vitals. In a future update, we'll share more information about the precise timing of the change and the plan for FID after it's replaced as a Core Web Vital.  

同时，FID 将在 2024 年 3 月之前仍然是 Core Web Vital。届时，INP 将加入 Largest Contentful Paint （LCP） 和 Cumulative Layout Shift （CLS） 作为三个稳定的核心 Web 指标。在未来的更新中，我们将分享有关更改的确切时间以及 FID 被替换为 Core Web Vital 后的计划的更多信息。

## Getting started with INP  
INP 入门

![20231116220853](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116220853.png)

Don't wait for INP to become a Core Web Vital in 2024 to start improving it. Your website may very well be in the [93%](https://httparchive.org/reports/chrome-ux-report#cruxFastFid) of sites that have good FID performance on mobile devices; however, you might be surprised to learn that only [65%](https://httparchive.org/reports/chrome-ux-report#cruxFastInp) of sites have good INP on mobile devices. INP paints a much more accurate picture of responsiveness, so these numbers help us to more clearly see the room for improvement ahead of us.  

不要等到 INP 在 2024 年成为 Core Web Vital 才开始改进它。您的网站很可能在 93% 的移动设备上具有良好 FID 性能的网站中;但是，您可能会惊讶地发现，只有 65% 的网站在移动设备上具有良好的 INP。INP 描绘了更准确的响应能力图景，因此这些数字有助于我们更清楚地看到我们面前的改进空间。

To find out whether your site has INP issues, how to address them, and all things INP, the best place to start is the [INP optimization guide](https://web.dev/articles/optimize-inp). Whether you're learning about responsiveness for the first time or you're a performance expert, we've added a lot of new guidance to make it as easy as possible for everyone to learn how to measure and optimize INP.  

要了解您的网站是否存在 INP 问题、如何解决这些问题以及 INP 的所有问题，最好的起点是 INP 优化指南。无论您是第一次了解响应能力，还是性能专家，我们都添加了许多新指南，让每个人都能尽可能轻松地学习如何衡量和优化 INP。

INP might take some time to learn, and that's just fine. To help you focus on the optimizations with the biggest ROI, earlier this year we published [a blog post](https://web.dev/blog/top-cwv-2023) to distill our guidance down to the most effective recommendations to improve Core Web Vitals. Specifically, we wrote about three must-know techniques that apply equally to optimizing FID and INP: avoid or break up long tasks, avoid unnecessary JavaScript, and avoid large rendering updates. You can learn more about these and many other INP optimization techniques in [our documentation](https://web.dev/articles/optimize-inp).  
INP 可能需要一些时间来学习，这很好。为了帮助您专注于具有最大投资回报率的优化，今年早些时候，我们发布了一篇博客文章，将我们的指导提炼为最有效的建议，以改进 Core Web Vitals。具体来说，我们写了三种必须知道的技术，它们同样适用于优化 FID 和 INP：避免或分解冗长的任务，避免不必要的 JavaScript，以及避免大规模的渲染更新。您可以在我们的文档中了解有关这些和许多其他 INP 优化技术的更多信息。


## The road ahead 前方的道路

A new bar for responsiveness has been set, and we're excited to see the community rise to the challenge for a better user experience. The early [feedback](https://groups.google.com/g/web-vitals-feedback) and [case studies](https://web.dev/tags/case-study) have been promising, but we know that for many, it may be a long and unfamiliar road ahead. We strive to make that journey as easy as possible with improved [diagnostics](https://github.com/w3c/longtasks/blob/main/loaf-explainer.md), [tools](https://web.dev/articles/vitals-tools), and [documentation](https://web.dev/articles/optimize-inp) to help developers along the way.  

响应能力的新标准已经设定，我们很高兴看到社区迎接挑战，以获得更好的用户体验。早期的反馈和案例研究很有希望，但我们知道，对许多人来说，这可能是一条漫长而陌生的道路。我们努力通过改进诊断、工具和文档来帮助开发人员，使这一过程尽可能简单。

Stay tuned for updates on INP's exact graduation date in March 2024. And even though the metric is not experimental anymore, we're always open to feedback at [web-vitals-feedback@googlegroups.com](mailto:web-vitals-feedback@googlegroups.com) to help us improve INP and the Web Vitals program as a whole.  

请继续关注 INP 2024 年 3 月确切毕业日期的最新消息。尽管该指标不再是实验性的，但我们始终愿意接受 web-vitals-feedback@googlegroups.com 反馈，以帮助我们改进 INP 和整个 Web 指标计划。
