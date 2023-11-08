# Largest Contentful Paint (LCP) 最大内容填充


`metadata:`

**链接:** https://web.dev/articles/lcp

---

:::info
注：最大内容填充（LCP）是 Core Web Vital 用来衡量感知加载速度的一个重要而稳定的指标，因为它标志着页面加载时间轴上的一个点，此时页面的主要内容很可能已经加载完毕--快速的 LCP 有助于向用户保证页面是有用的。
:::

一直以来，衡量网页主要内容的加载速度和用户的可见度是网络开发人员面临的一项挑战。

像[load](https://developer.mozilla.org/docs/Web/Events/load)或 [DOMContentLoaded ](https://developer.mozilla.org/docs/Web/Events/DOMContentLoaded)这样的旧指标并不好，因为它们并不一定与用户在屏幕上看到的内容相对应。而较新的、以用户为中心的性能指标（如 [First Contentful Paint (FCP)](https://web.dev/articles/fcp)）只能捕捉到加载体验的开端。如果一个页面显示闪屏或显示加载指示器，那么这个时刻与用户的关系并不大。(加载指示器指loading菊花)

过去，我们曾推荐过 [首次有意义绘制（FMP）](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/)和 [速度指数（SI）](https://developer.chrome.com/docs/lighthouse/performance/speed-index/)（均可在 Lighthouse 中使用）等性能指标，以帮助捕捉首次绘制后的更多加载体验，但这些指标非常复杂，难以解释，而且经常出现错误，也就是说，它们仍然无法确定页面的主要内容何时加载完毕。

有时，越简单越好。根据 [W3C 网页性能工作组](https://www.w3.org/webperf/)的讨论和 Google 的研究，我们发现衡量网页主要内容加载时间的更准确方法是查看最大元素的呈现时间。

## 什么是 LCP？
Largest Contentful Paint (LCP) 指标报告的是视口中可见的[最大图像或文本块](https://web.dev/articles/lcp#what_elements_are_considered)的呈现时间，相对于页面[首次开始加载的时间](https://w3c.github.io/hr-time/#timeorigin-attribute)。


什么是良好的 LCP 分数？
为了提供良好的用户体验，网站应努力将最大内容绘制时间控制在 2.5 秒或更短。为确保大多数用户都能达到这一目标，一个很好的衡量阈值是页面加载的第 75 百分位数，并在移动和桌面设备上进行细分。

![20231106231624](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231106231624.png)

:::info
注：要了解本建议背后的研究和方法的更多信息，请参阅：[定义核心网络生命体征指标阈值](https://web.dev/articles/defining-core-web-vitals-thresholds)
:::

### 考虑哪些元素？
根据 [Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/) 目前的规定，Largest Contentful Paint 考虑的元素类型包括

- `<img>` 元素
- `<svg>` 元素内的 `<image>` 元素
- 带有海报图像的 `<video>` 元素（使用海报图像加载时间）
- 通过 [url()](https://developer.mozilla.org/docs/Web/CSS/url()) 函数加载背景图片的元素（与 [CSS 梯度](https://developer.mozilla.org/docs/Web/CSS/CSS_Images/Using_CSS_gradients)相反）
- 包含文本节点或其他内联文本元素子元素的[块级元素](https://developer.mozilla.org/docs/Web/HTML/Block-level_elements)。
- 为自动播放的 `<video>` 元素绘制的第一帧（截至 [2023 年 8 月](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/lcp.md)）
- 动画图像格式（如动画 GIF）的第一帧（截至 [2023 年 8 月](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/lcp.md)）

请注意，将元素限制在这一有限的集合中是有意为之，以便在开始时保持简单。随着研究的深入，未来可能会添加更多元素（如完整的 `<svg>` 支持）。

除了只考虑某些元素外，我们还应用了某些判例来排除某些可能被用户视为 "无争议 "的元素。对于基于 Chromium 的浏览器，这些元素包括

- 不透明度为 0，用户看不到的元素
- 覆盖整个视口的元素，可能被视为背景而非内容
- 占位符图像或其他熵值较低的图像，这些图像可能无法反映页面的真实内容

浏览器可能会继续改进这些启发式方法，以确保我们符合用户对最大内容元素的期望。

这些 "有内容 "的启发式方法可能与 [First Contentful Paint (FCP)](https://web.dev/articles/fcp) 使用的方法不同，后者可能会考虑其中一些元素，如占位符图像或全视角图像，即使它们不符合 LCP 候选条件。尽管名称中都使用了 "有内容"，但这些指标的目的是不同的。FCP 衡量的是任何内容被绘制到屏幕上的情况，而 LCP 衡量的是主要内容（有意义的内容）被绘制到屏幕上的情况，因此 LCP 的目的是更具选择性。

### 如何确定元素的大小？

为最大内容绘制报告的元素大小通常是用户在视口内可见的大小。如果元素超出了视口，或者元素的任何部分被剪切或有不可见的溢出，这些部分都不计入元素的大小。（意思是超出首屏的部分不计入元素大小）

对于从其固有尺寸调整过大小的图像元素，报告的尺寸要么是可见尺寸，要么是固有尺寸，以较小者为准。例如，缩小到比固有尺寸小得多的图像将只报告其显示的尺寸，而拉伸或扩展到较大尺寸的图像将只报告其固有尺寸。

对于文本元素，只考虑其文本节点的大小（包含所有文本节点的最小矩形）。

对于所有元素，不考虑通过 CSS 应用的任何边距、填充或边框。

:::info
注：确定哪些文本节点属于哪些元素有时会很棘手，特别是对于子元素包括内联元素和纯文本节点以及块级元素的元素。关键的一点是，每个文本节点都属于（且只属于）其最接近的块级祖先元素。用规范术语来说：每个文本节点都属于生成其[包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block)的元素。
:::

### 何时报告最大内容填充？
网页通常分阶段加载，因此页面上最大的元素有可能发生变化。

为了处理这种可能发生的变化，浏览器会在绘制完第一帧后立即分派一个类型为 `largest-contentful-paint` 的 [PerformanceEntry](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)，以标识最大的内容元素。但在渲染后续帧后，只要最大内容元素发生变化，浏览器就会调度另一个[PerformanceEntry](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)。

例如，在一个包含文本和英雄图像的页面上，浏览器最初可能只渲染文本，此时浏览器将调度一个最大内容元素绘制条目，其元素属性可能引用 `<p>` 或 `<h1>`。之后，一旦英雄图片加载完成，浏览器将调度第二个 `largest-contentful-paint` 条目，其元素属性将引用 `<img>`。

需要注意的是，一个元素只有在 "呈现"并对用户可见后，才能被视为最大的内容元素。尚未加载的图片不被视为 "已呈现"。在字体块期间使用网络字体的文本节点也不被视为 "渲染"。在这种情况下，一个较小的元素可能会被报告为最大的内容元素，但一旦较大的元素完成渲染，它就会通过另一个 PerformanceEntry 对象报告。

除了延迟加载图像和字体外，页面还可能在有新内容时向 DOM 添加新元素。如果这些新元素中的任何一个大于之前最大的内容元素，也会报告一个新的 PerformanceEntry。

如果将当前最大内容元素从视口中移除（甚至从 DOM 中移除），除非呈现出更大的元素，否则该元素仍将是最大内容元素。

:::info
注：在 Chrome 浏览器 88 之前，移除的元素不被视为最大内容元素，移除当前候选元素会触发一个新的最大内容绘制条目被派发。不过，由于流行的用户界面模式（如经常移除 DOM 元素的图片传送带），该指标已进行了更新，以更准确地反映用户的体验。有关详细信息，请参阅[更改日志](https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/2020_11_lcp.md)。
:::

一旦用户与页面交互（通过点击、滚动或按键），浏览器就会停止报告新条目，因为用户交互往往会改变用户可见的内容（滚动尤其如此）。

出于分析目的，您应该只向分析服务报告最近发送的 PerformanceEntry。

:::warning
由于用户可以在后台标签页中打开页面，因此可能要等到用户聚焦标签页后才会分发 `largest-contentful-paint` 条目，而这可能比用户首次加载页面的时间要晚得多。如果页面是在后台加载的，测量 `LCP` 的谷歌工具不会报告这一指标，因为它不能反映用户感知的加载时间。（加载后台打开的新标签页不会被上报）
:::

### 加载时间 vs 呈现时间

出于安全原因，对于缺少 `Timing-Allow-Origin` 标头的跨源图像，不公开图像的渲染时间戳。取而代之的是，只公开其加载时间（因为许多其他网络应用程序接口已经公开了加载时间）。

这可能会导致一种看似不可能的情况，即网络 API 将 `LCP` 报告为早于 `FCP`。事实并非如此，只是由于这种安全限制才显得如此。

在可能的情况下，建议设置 `Timing-Allow-Origin` 标头，这样您的指标会更准确。

### 如何处理元素布局和大小变化？

为了降低计算和分派新性能条目的性能开销，元素大小或位置的变化不会产生新的 `LCP` 候选条目。只考虑元素在视口中的初始大小和位置。

这意味着最初在屏幕外呈现，然后过渡到屏幕上的图像可能不会被报告。这也意味着最初在视口中呈现的元素，如果被下推到视图之外，仍会报告其在视口中的初始尺寸。

### 示例

下面是一些热门网站出现最大内容油漆的示例：

![20231107154132](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107154132.png)

![20231107154158](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107154158.png)

在上述两个时间轴中，最大的元素都会随着内容的加载而改变。在第一个示例中，新内容被添加到 DOM 中，从而改变了最大的元素。在第二个示例中，布局发生了变化，原来最大的内容从视窗中移除。

虽然晚加载的内容往往比页面上已有的内容大，但情况并不一定如此。接下来的两个示例显示了在页面完全加载之前出现的最大内容油漆。

![20231107155129](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107155129.png)

![20231107155228](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107155228.png)

在第一个示例中，Instagram 的徽标加载相对较早，即使其他内容逐渐显示出来，它仍然是最大的元素。在谷歌搜索结果页面示例中，最大的元素是一段文字，它在图片或徽标加载完成之前就已显示。由于所有单独的图片都比这段文字小，因此在整个加载过程中，这段文字一直是最大的元素。

:::info
注：在 Instagram 时间线的第一帧中，您可能会注意到相机徽标周围没有绿框。这是因为它是一个 `<svg>` 元素，而 `<svg>` 元素目前不被视为 `LCP` 候选元素。第一个 `LCP` 候选元素是第二帧中的文字。
:::

## 如何测量 LCP

LCP 可以在实验室或现场进行测量，可使用以下工具：

### Field tools

*   [Chrome User Experience Report](https://developer.chrome.com/docs/crux/)
*   [PageSpeed Insights](https://pagespeed.web.dev/)
*   [Search Console (Core Web Vitals report)](https://support.google.com/webmasters/answer/9205520)
*   [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals)

### Lab tools

*   [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
*   [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
*   [PageSpeed Insights](https://pagespeed.web.dev/)
*   [WebPageTest](https://webpagetest.org/)

### 用 JavaScript 测量 LCP

要在 JavaScript 中测量 LCP，可以使用[Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/)(最大内容涂画 API)。下面的示例展示了如何创建一个 [PerformanceObserver](https://developer.mozilla.org/docs/Web/API/PerformanceObserver)，用于监听 `largest-contentful-paint` 条目并将其记录到控制台。

```js
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```

:::danger
警告：这段代码展示了如何将 `largest-contentful-paint` 条目记录到控制台，但在 JavaScript 中测量 LCP 要复杂得多。详见下文：
:::

在上述示例中，每个记录的 `largest-contentful-paint` 条目都代表当前的 LCP 候选值。一般来说，最后发出的条目的 startTime 值就是 LCP 值，但情况并非总是如此。并不是所有的 `largest-contentful-paint` 条目都能用于测量 LCP。

下一节列出了 API 报告与指标计算方法之间的差异。

### 度量标准与 API 之间的差异

- API 将为在后台标签页中加载的页面调度 `largest-contentful-paint` 条目，但在计算 LCP 时应忽略这些页面。
- API 会在页面进入后台后继续分派 `largest-contentful-paint` 条目，但在计算 LCP 时应忽略这些条目（只有当页面一直处于前台时才会考虑元素）。
- 当页面从[后退/前移缓存](https://web.dev/articles/bfcache#impact_on_core_web_vitals)中恢复时，API 不会报告`largest-contentful-paint`，但在这种情况下应测量 LCP，因为用户会将其视为不同的页面访问。
- API 不会考虑 iframe 中的元素，但指标会考虑，因为它们是页面用户体验的一部分。在 iframe 内有 LCP 的页面中，例如嵌入式视频中的海报图片，这将[显示为 CrUX 和 RUM 之间的差异](https://web.dev/articles/crux-and-rum-differences#iframes)。要正确衡量 LCP，就应该考虑它们。子帧可以使用 API 向父帧报告其`largest-contentful-paint`条目，以便进行汇总。
- 开发人员无需记住所有这些细微差别，可以使用 [web-vitals JavaScript 库](https://github.com/GoogleChrome/web-vitals)来测量 LCP，该库（在可能的情况下）会为您处理这些差异：

```js
import {onLCP} from 'web-vitals';

// Measure and log LCP as soon as it's available.
onLCP(console.log);
```

有关如何在 JavaScript 中测量 LCP 的完整示例，请参阅 [onLCP() 的源代码](https://github.com/GoogleChrome/web-vitals/blob/main/src/onLCP.ts)。

:::info
注：在某些情况下（如跨源 iframe），无法在 JavaScript 中测量 LCP。详情请参见 web-vitals 库的[限制](https://github.com/GoogleChrome/web-vitals#limitations)部分。
:::

### 如果最大的元素不是最重要的元素怎么办？

在某些情况下，页面上最重要的元素（或元素）并不等同于最大的元素，开发人员可能更感兴趣的是测量这些其他元素的呈现时间。使用元素[计时 API](https://wicg.github.io/element-timing/) 就可以做到这一点，详情请参见[自定义指标](https://web.dev/articles/custom-metrics#element_timing_api)文章。


## 如何改进 LCP

关于[优化 LCP](https://web.dev/articles/optimize-lcp) 的完整指南可指导您在田间确定 LCP 时间，并利用实验室数据对其进行深入研究和优化。

## 其他资源

- [Lessons learned from performance monitoring in Chrome](https://youtu.be/ctavZT87syI) by [Annie Sullivan](https://anniesullie.com/) at [performance.now()](https://perfnow.nl/) (2019)

## 更改日志
用于衡量指标的应用程序接口有时会发现错误，有时指标定义本身也会发现错误。因此，有时必须进行更改，这些更改会在内部报告和仪表板中显示为改进或倒退。

为了帮助您管理这些变更，对这些度量标准的实施或定义所做的所有变更都将在此[CHANGELOG](http://bit.ly/chrome-speed-metrics-changelog)中显示。

如果您对这些指标有反馈意见，可以在 [web-vitals-feedback Google group](https://groups.google.com/g/web-vitals-feedback) 中提供。