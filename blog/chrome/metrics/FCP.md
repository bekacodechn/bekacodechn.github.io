# First Contentful Paint (FCP) 首次内容绘制

![20231107163102](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107163102.png)


`metadata:`

**链接:** https://web.dev/articles/fcp

---

:::info
注：First Contentful Paint (FCP) 是一个重要的、以用户为中心的衡量[感知加载速度](https://web.dev/articles/user-centric-performance-metrics#types_of_metrics)的指标，因为它标志着页面加载时间线中用户可以看到屏幕上任何内容的第一个点--快速的 FCP 有助于让用户确信正在[发生](https://web.dev/articles/user-centric-performance-metrics#defining_metrics)什么。
:::

## 什么是 FCP？
First Contentful Paint (FCP) 指标衡量的是从页面开始加载到页面内容的任何部分呈现在屏幕上的时间。在此指标中，"内容 "是指文本、图片（包括背景图片）、`<svg>` 元素或非白色 `<canvas>` 元素。

![20231107163407](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107163407.png)

在上述加载时间线中，FCP 发生在第二帧，因为此时第一批文字和图像元素被呈现到屏幕上。

你会发现，虽然部分内容已经呈现，但并非所有内容都已呈现。这就是首次内容绘制（FCP）和[最大内容填充 (LCP)](chrome/metrics/LCP)之间的重要区别，后者旨在衡量页面的主要内容何时完成加载。

### 什么是良好的 FCP 分数？

为提供良好的用户体验，网站应努力将首次内容绘制时间控制在 1.8 秒或更短。为确保大多数用户都能达到这一目标，一个很好的衡量标准是移动设备和桌面设备页面加载的第 75 百分位数。

![20231107163757](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231107163757.png)

## 如何测量 FCP

FCP 可在实验室或现场进行测量，可通过以下工具进行测量：

### Field tools

*   [PageSpeed Insights](https://pagespeed.web.dev/)
*   [Chrome User Experience Report](https://developer.chrome.com/docs/crux/)
*   [Search Console (Speed Report)](https://webmasters.googleblog.com/2019/11/search-console-speed-report.html)
*   [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals)

### Lab tools

*   [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
*   [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
*   [PageSpeed Insights](https://pagespeed.web.dev/)

### 用 JavaScript 测量 FCP
要在 JavaScript 中测量 FCP，可以使用[Paint Timing API](https://w3c.github.io/paint-timing/)。下面的示例展示了如何创建一个 `PerformanceObserver`，用于监听名称为 `first-contentful-paint` 的`paint`条目并将其记录到控制台。

```js
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
    console.log('FCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'paint', buffered: true});
```

:::danger
警告：这段代码展示了如何将 `first-contentful-paint` 条目记录到控制台，但在 JavaScript 中测量 FCP 要复杂得多。详见下文：
:::

在上例中，记录的 `first-contentful-paint` 条目将告诉您第一个内容元素的绘制时间。不过，在某些情况下，这个条目对测量 FCP 无效。

下一节列出了 API 报告内容与指标计算方法之间的差异。


#### 度量标准与 API 之间的差异
- API 会为在后台标签页中加载的页面发送`first-contentful-paint`条目，但在计算 FCP 时应忽略这些页面（只有当页面一直在前台时才应考虑首次内容绘制时间）。
- 当页面从[后退/前移缓存](https://web.dev/articles/bfcache#impact_on_core_web_vitals)中恢复时，API 不会报告`first-contentful-paint`条目，但在这些情况下应测量 FCP，因为用户会将它们视为不同的页面访问。
- API [可能不会报告跨源代码 iframe 的绘制时间](https://w3c.github.io/paint-timing/#:%7E:text=cross-origin%20iframes)，但要正确测量 FCP，应考虑所有帧。子框架可以使用 API 向父框架报告其绘制时间，以便进行汇总。

开发人员无需记住所有这些细微差别，可以使用 [web-vitals JavaScript 库](https://github.com/GoogleChrome/web-vitals)来测量 FCP，该库（在可能的情况下）会为您处理这些差异：

```js
import {onFCP} from 'web-vitals';

// Measure and log FCP as soon as it's available.
onFCP(console.log);
```

有关如何在 JavaScript 中测量 FCP 的完整示例，请参阅 [onFCP() 的源代码](https://github.com/GoogleChrome/web-vitals/blob/main/src/onFCP.ts)。

:::warning
注：在某些情况下（如跨源 iframe），无法在 JavaScript 中测量 FCP。详情请参见 web-vitals 库的[限制](https://github.com/GoogleChrome/web-vitals#limitations)部分。
:::

## 如何改进 FCP
要了解如何改进特定网站的 FCP，可以运行 Lighthouse性能审计，并关注审计建议的任何具体[机会](https://developer.chrome.com/docs/lighthouse/performance/#opportunities)或[诊断](https://developer.chrome.com/docs/lighthouse/performance/#diagnostics)。

要了解如何全面改进FCP（适用于任何网站），请参阅以下性能指南：


*   [Eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/) (消除妨碍渲染的资源)
*   [Minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/) (最小化 CSS)
*   [Remove unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/) (删除未使用的 CSS)
*   [Remove unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/) (删除未使用的 JavaScript)
*   [Preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) (预连接到所需的来源)
*   [Reduce server response times (TTFB)](https://web.dev/articles/ttfb) (减少服务器响应时间（TTFB）)
*   [Avoid multiple page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/) (避免多个页面重定向)
*   [Preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/) (预加载关键请求)
*   [Avoid enormous network payloads](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/) (避免巨大的网络有效载荷)
*   [Serve static assets with an efficient cache policy](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/) (使用高效的缓存策略提供静态资产)
*   [Avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/) (避免过大的 DOM 大小)
*   [Minimize critical request depth](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/) (尽量减少关键请求深度)
*   [Ensure text remains visible during webfont load](https://developer.chrome.com/docs/lighthouse/performance/font-display/) (确保文本在网络字体加载期间保持可见)
*   [Keep request counts low and transfer sizes small](https://developer.chrome.com/docs/lighthouse/performance/resource-summary/) (保持较低的请求次数和较小的传输大小)