# Time to First Byte (TTFB) 首次字节加载时间

链接：https://web.dev/articles/ttfb?hl=zh-cn

## 定义

:::info
注：首字节时间 (TTFB) 是实验室和现场测量连接建立时间和网络服务器响应速度的基本指标。它有助于识别网络服务器对请求的响应速度是否过慢。在导航请求（即 HTML 文档请求）的情况下，它先于其他所有有意义的加载性能指标。
:::

## 什么是 TTFB？
TTFB 是指从导航请求开始到客户端收到服务器响应的第一个字节的时间。它包括网络设置时间（SSL、DNS、TCP）和服务器端处理时间。

![20231106150301](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231106150301.png)
*网络请求阶段及其相关时序图。TTFB 测量 startTime 与 responseStart 之间的耗时。该指标等同于 performance.getEntriesByType('navigation')[0].responseStart*

TTFB 是以下请求阶段的总和：

- 重定向时间
- 服务工作者启动时间（如适用）
- DNS 查找
- 连接和 TLS 协商
- 请求，直到响应的第一个字节到达为止
- 减少连接建立时间和后端的延迟将有助于降低 TTFB。

### 什么是良好的 TTFB 分数？
由于 TTFB 优先于[以用户为中心的指标](https://web.dev/articles/user-centric-performance-metrics)，如 "[首次内容填充"（FCP）](https://web.dev/articles/fcp)和 "[最大内容填充"（LCP）](https://web.dev/articles/lcp)，因此建议您的服务器足够快地响应导航请求，以便第 75 百分位数的用户体验到 "良好 "阈值内的 FCP。作为粗略的指导，大多数网站应努力将第一个字节的时间控制在 0.8 秒或更短。

![20231106151052](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231106151052.png)

:::info
TTFB 并非[核心网站生命值指标](https://web.dev/articles/vitals)，因此网站并不绝对需要达到 "良好 "的 TTFB 门槛，只要不妨碍其在重要指标上取得好成绩即可。

网站提供内容的方式各不相同。低 TTFB 对于尽快向客户提供标记至关重要。但是，如果网站快速交付了初始标记，但该标记需要 JavaScript 来填充有意义的内容（如单页面应用程序 (SPA)），那么实现尽可能低的 TTFB 就显得尤为重要，这样客户端就可以更快地渲染标记。

相反，服务器渲染的网站不需要那么多客户端工作，其 TTFB 可能更高，但 FCP 和 LCP 值却比完全客户端渲染的体验更好。这就是为什么 TTFB 临界值只是一个 "粗略的指南"，需要根据网站提供核心内容的方式进行权衡。
:::

## 如何测量 TTFB
TTFB 可通过以下方法在[实验室](https://web.dev/articles/user-centric-performance-metrics#in_the_lab)或[实地](https://web.dev/articles/user-centric-performance-metrics#in_the_field)进行测量。

现场工具
- [Chrome 浏览器用户体验报告](https://developer.chrome.com/docs/crux/)
- [web-vitals JavaScript 库](https://github.com/GoogleChrome/web-vitals)

实验室工具
- 在 Chrome 浏览器 DevTools 的[网络面板](https://developer.chrome.com/docs/devtools/network/)中
- [网页测试](https://www.webpagetest.org/)

### 如何判断？快速、平均、慢速？
快速/平均/慢速 TTFB 的阈值是：快速 TTFB 的上限为 800 毫秒，慢速 TTFB 的下限为 1800 毫秒。

对每个网站的第 75 百分位数 (p75) TTFB 进行分析，根据其在这些阈值之间的位置来确定是快还是慢。

每台主机的百分比计算方法是：将 p75 TTFB 为快速、平均和慢速的网站数量分别除以网站总数。

### 在 JavaScript 中测量 TTFB
您可以使用[导航定时 API](https://developer.mozilla.org/docs/Web/API/Navigation_timing_API) 测量浏览器中[导航请求](https://developer.mozilla.org/docs/Web/API/Request/mode)的 TTFB。下面的示例展示了如何创建一个 PerformanceObserver，用于监听导航条目并将其记录到控制台：

```js
new PerformanceObserver((entryList) => {
  const [pageNav] = entryList.getEntriesByType('navigation');

  console.log(`TTFB: ${pageNav.responseStart}`);
}).observe({
  type: 'navigation',
  buffered: true
});
```

::danger
注意并非所有浏览器都支持 PerformanceObserver 或其缓冲标志。要获得尽可能多的浏览器支持，请考虑采用 web-vitals 软件包，下文将对此进行讨论。
:::

[web-vitals JavaScript 库](https://github.com/GoogleChrome/web-vitals)也可以在浏览器中测量 TTFB，但复杂程度较低：

```js
import {onTTFB} from 'web-vitals';

// Measure and log TTFB as soon as it's available.
onTTFB(console.log);
```

### 衡量资源请求

TTFB 适用于所有请求，而不仅仅是导航请求。尤其是托管在跨源服务器上的资源，由于需要建立与这些服务器的连接，因此会产生延迟。要测量现场资源的 TTFB，请使用 PerformanceObserver 中的[资源定时 API](https://developer.mozilla.org/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)：

```js
new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();

  for (const entry of entries) {
    // Some resources may have a responseStart value of 0, due
    // to the resource being cached, or a cross-origin resource
    // being served without a Timing-Allow-Origin header set.
    if (entry.responseStart > 0) {
      console.log(`TTFB: ${entry.responseStart}`, entry.name);
    }
  }
}).observe({
  type: 'resource',
  buffered: true
});
```

输出结果:
![20231106225827](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231106225827.png)

上面的代码片段类似于用于测量导航请求的TTFB的代码片段，，只是查询的不是 "导航 "条目，而是 "资源 "条目。由于连接已经打开，或资源是从缓存中即时获取的，因此从主源加载的某些资源可能会返回 0 值，这也是该代码段考虑到的事实。

## 如何提高 TTFB
我们发布了关于[优化 TTFB](https://web.dev/articles/optimize-ttfb) 的深度指南，为您提供更多改善网站 TTFB 的指导。