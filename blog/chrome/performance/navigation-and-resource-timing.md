# 使用导航定时和资源定时评估现场的负载性能

`metadata:`

**原标题:** Assessing loading performance in the field with Navigation Timing and Resource Timing

**链接:** https://web.dev/articles/navigation-and-resource-timing

---

Learn the basics of using the Navigation and Resource Timing APIs to assess loading performance in the field.

了解使用导航和资源计时 API 评估外业加载性能的基础知识。

If you've used connection throttling in the network panel in a browser's developer tools (or Lighthouse in Chrome) to assess loading performance, you know how convenient those tools are for performance tuning. You can quickly measure the impact of performance optimizations with a consistent and stable baseline connection speed. The only problem is that this is synthetic testing, which yields lab data, not field data.

如果您曾在浏览器的开发者工具（或 Chrome 中的 Lighthouse）的网络面板中使用过连接限制来评估加载性能，您就会知道这些工具在性能调整方面是多么方便。您可以使用一致且稳定的基准连接速度快速衡量性能优化的影响。唯一的问题是，这是综合测试，它产生的是实验室数据，而不是现场数据。

Synthetic testing isn't inherently bad, but it's not representative of how fast your website is loading for real users. That requires field data, which you can collect from the Navigation Timing and Resource Timing APIs.

综合测试本身并不坏，但它并不能代表您的网站为真实用户加载的速度。这需要字段数据，您可以从 Navigation Timing 和 Resource Timing API 收集这些数据。

## APIs to help you assess loading performance in the field  (帮助您评估现场装载性能的 API)

Navigation Timing and Resource Timing are two similar APIs with significant overlap that measure two distinct things:  

Navigation Timing 和 Resource Timing 是两个相似的 API，它们有很大的重叠，用于测量两个截然不同的内容：

*   [Navigation Timing](https://w3c.github.io/navigation-timing/) measures the speed of requests for HTML documents (that is, navigation requests).  

    导航计时测量 HTML 文档请求（即导航请求）的速度。
*   [Resource Timing](https://w3c.github.io/resource-timing/) measures the speed of requests for document-dependent resources such as CSS, JavaScript, images, and so on.  

    资源计时测量对文档相关资源（如 CSS、JavaScript、图像等）的请求速度。

These APIs expose their data in a _performance entry buffer_, which can be accessed in the browser with JavaScript. There are multiple ways to query a performance buffer, but a common way is by using [`performance.getEntriesByType`](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType):  

这些 API 在性能条目缓冲区中公开其数据，可以使用 JavaScript 在浏览器中访问该缓冲区。有多种方法可以查询性能缓冲区，但一种常见的方法是使用 `performance.getEntriesByType` ：

```js
// Get Navigation Timing entries:
performance.getEntriesByType('navigation');

// Get Resource Timing entries:
performance.getEntriesByType('resource');
```

`performance.getEntriesByType` accepts a string describing the type of entries you want to retrieve from the performance entry buffer. `'navigation'` and `'resource'` retrieve timings for the Navigation Timing and Resource Timing APIs, respectively.  

`performance.getEntriesByType` 接受一个字符串，该字符串描述要从性能条目缓冲区中检索的条目类型。 `'navigation'` 并 `'resource'` 分别检索 Navigation Timing 和 Resource Timing API 的计时。

:::info
**Note:** Try loading a website and then enter either of the commands in the above code snippet in your browser's console to see actual timings captured by your browser.  

注意：尝试加载网站，然后在浏览器控制台中输入上述代码片段中的任何命令，以查看浏览器捕获的实际计时。
:::

The amount of information these APIs provide can be overwhelming, but they're your key to measuring loading performance in the field, as you can gather these timings from users as they visit your website.  

这些 API 提供的信息量可能会让人不知所措，但它们是衡量现场加载性能的关键，因为您可以在用户访问您的网站时收集这些时间。

## The life and timings of a network request  (网络请求的生存期和计时)

Gathering and analyzing navigation and resource timings is sort of like archeology in that you're reconstructing the fleeting life of a network request after the fact. Sometimes it helps to visualize concepts, and where network requests are concerned, your browser's developer tools can help.  

收集和分析导航和资源时序有点像考古学，因为你是在事后重建网络请求的短暂生命。有时，它有助于可视化概念，而在涉及网络请求时，浏览器的开发人员工具可以提供帮助。

![20231116001628](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116001628.png)

The life of a network request has distinct phases, such as DNS lookup, connection establishment, TLS negotiation, and so on. These timings are represented as a [`DOMHighResTimestamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp). Depending on your browser, the granularity of timings may be down to the microsecond, or be rounded up to milliseconds. Let's examine these phases in detail, and how they relate to Navigation Timing and Resource Timing.  

网络请求的生命周期具有不同的阶段，例如 DNS 查找、连接建立、TLS 协商等。这些计时表示为 `DOMHighResTimestamp` .根据您的浏览器，计时粒度可能低至微秒，或四舍五入到毫秒。让我们详细研究一下这些阶段，以及它们与导航计时和资源计时的关系。

:::info
**Note:** As you read this guide, [this diagram](https://www.w3.org/TR/navigation-timing-2/#processing-model) for both Navigation Timing and Resource Timing may help you to visualize the order of the timings they provide.  

注意：在阅读本指南时，此导航计时和资源计时图可帮助您直观地了解它们提供的计时顺序。
:::

### DNS lookup DNS查询

When a user goes to a URL, the Domain Name System (DNS) is queried to translate a domain to an IP address. This process may take significant time—time you'll want to measure in the field, even. Navigation Timing and Resource Timing expose two DNS-related timings:  

当用户转到 URL 时，将查询域名系统 （DNS） 以将域转换为 IP 地址。此过程可能需要大量时间，甚至需要在现场测量。“导航计时”和“资源计时”公开了两个与 DNS 相关的计时：

*   `domainLookupStart` is when DNS lookup begins.  

    `domainLookupStart` 是 DNS 查找开始的时间。
*   `domainLookupEnd` is when DNS lookup ends.  

    `domainLookupEnd` 是 DNS 查找结束的时间。

Calculating total DNS lookup time can be done by subtracting the start metric from the end metric:  

可以通过从结束指标中减去开始指标来计算总 DNS 查找时间：

```js
// Measuring DNS lookup time
const [pageNav] = performance.getEntriesByType('navigation');
const totalLookupTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;
```

:::warning
**Caution:** You can't _always_ rely on timings to be populated. Timings provided in both APIs will have a value of `0` in some cases. For example, a DNS lookup may be served by a local cache. Additionally, any timings for cross-origin requests may be unavailable if those origins don't set a [`Timing-Allow-Origin` response header](https://developer.mozilla.org/docs/Web/HTTP/Headers/Timing-Allow-Origin).  

注意：您不能总是依赖要填充的时间。在某些情况下，这两个 API 中提供的计时值 `0` 为 。例如，DNS 查找可能由本地缓存提供。此外，如果跨源请求未设置 `Timing-Allow-Origin` 响应标头，则这些请求的任何计时都可能不可用。
:::

### Connection negotiation 连接协商

Another contributing factor to loading performance is connection negotiation, which is latency incurred when connecting to a web server. If HTTPS is involved, this process will also include TLS negotiation time. The connection phase consists of three timings:  

影响加载性能的另一个因素是连接协商，这是连接到 Web 服务器时产生的延迟。如果涉及 HTTPS，则此过程还将包括 TLS 协商时间。连接阶段包括三个计时：

*   `connectStart` is when the browser starts to open a connection to a web server.  

    `connectStart` 是浏览器开始打开与 Web 服务器的连接时。
*   `secureConnectionStart` marks when the client begins TLS negotiation.  

    `secureConnectionStart` 标记客户端何时开始 TLS 协商。
*   `connectEnd` is when the connection to the web server has been established.  

    `connectEnd` 是与 Web 服务器建立连接的时间。

Measuring total connection time is similar to measuring total DNS lookup time: you subtract the start timing from the end timing. However, there's an additional `secureConnectionStart` property that may be `0` if HTTPS isn't used or [if the connection is persistent](https://en.wikipedia.org/wiki/HTTP_persistent_connection). If you want to measure TLS negotiation time, you'll need to keep that in mind:  

测量总连接时间与测量总 DNS 查找时间类似：从结束时间中减去开始时间。但是， `0` 如果不使用 HTTPS 或连接是持久的，则可能还有一个附加 `secureConnectionStart` 属性。如果要测量 TLS 协商时间，需要牢记这一点：

```js
// Quantifying total connection time
const [pageNav] = performance.getEntriesByType('navigation');
const connectionTime = pageNav.connectEnd - pageNav.connectStart;
let tlsTime = 0; // <-- Assume 0 to start with

// Was there TLS negotiation?
if (pageNav.secureConnectionStart > 0) {
  // Awesome! Calculate it!
  tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart;
}
```

Once DNS lookup and connection negotiation ends, timings related to fetching documents and their dependent resources come into play.  

一旦 DNS 查找和连接协商结束，与获取文档及其依赖资源相关的时间就会发挥作用。

### Requests and responses 请求和响应

Loading performance is affected by two types of factors:  

加载性能受以下两种因素的影响：

*   **Extrinsic factors:** These are things like latency and bandwidth. Beyond choosing a hosting company and a CDN, they're (mostly) out of our control, as users can access the web from anywhere.  

    外部因素：这些因素包括延迟和带宽等因素。除了选择托管公司和 CDN 之外，它们（大部分）超出了我们的控制范围，因为用户可以从任何地方访问网络。
*   **Intrinsic factors:** These are things like server and client-side architectures, as well as resource size and our ability to optimize for those things, which are within our control.  

    内在因素：这些因素包括服务器和客户端架构，以及资源大小和我们针对这些因素进行优化的能力，这些因素都在我们的控制范围内。

Both types of factors affect loading performance. Timings related to these factors are vital, as they describe how long resources take to download. Both Navigation Timing and Resource Timing describe loading performance with the following metrics:  

这两种类型的因素都会影响加载性能。与这些因素相关的时间至关重要，因为它们描述了下载资源所需的时间。“导航计时”和“资源计时”都使用以下指标描述加载性能：

*   `fetchStart` marks when the browser begins to fetch a resource (Resource Timing) or a document for a navigation request (Navigation Timing). This precedes the actual request, and is the point at which the browser is checking caches (for example, HTTP and [`Cache` instances](https://developer.mozilla.org/docs/Web/API/Cache)).  

    `fetchStart` 标记浏览器何时开始获取资源（资源计时）或导航请求的文档（导航计时）。这先于实际请求，并且是浏览器检查缓存（例如，HTTP 和 `Cache` 实例）的点。
*   `workerStart` marks when a request starts being handled within a service worker's [`fetch` event handler](https://developer.mozilla.org/docs/Web/API/FetchEvent). This will be `0` when no service worker is controlling the current page.  

    `workerStart` 标记何时开始在 Service Worker `fetch` 的事件处理程序中处理请求。这将是当没有 Service Worker 控制当前页面 `0` 时。
*   `requestStart` is when the browser makes the request.  

    `requestStart` 是浏览器发出请求的时间。
*   `responseStart` is when the first byte of the response arrives.  

    `responseStart` 是响应的第一个字节到达的时间。
*   `responseEnd` is when the last byte of the response arrives.  

    `responseEnd` 是响应的最后一个字节到达的时间。

These timings allow you to measure multiple aspects of loading performance, such as cache lookup within a service worker _and_ download time:  

这些计时允许您衡量加载性能的多个方面，例如 Service Worker 中的缓存查找和下载时间：

```js
// Cache seek plus response time of the current document
const [pageNav] = performance.getEntriesByType('navigation');
const fetchTime = pageNav.responseEnd - pageNav.fetchStart;

// Service worker time plus response time
let workerTime = 0;

if (pageNav.workerStart > 0) {
  workerTime = pageNav.responseEnd - pageNav.workerStart;
}
```

You can also measure other aspects of request/response latency:  

您还可以测量请求/响应延迟的其他方面：

```js
const [pageNav] = performance.getEntriesByType('navigation');

// Request time only (excluding redirects, DNS, and connection/TLS time)
const requestTime = pageNav.responseStart - pageNav.requestStart;

// Response time only (download)
const responseTime = pageNav.responseEnd - pageNav.responseStart;

// Request + response time
const requestResponseTime = pageNav.responseEnd - pageNav.requestStart;
```

### Other measurements you can make  (您可以进行的其他测量)

Navigation Timing and Resource Timing is useful for more than what the examples above outline. Here are some other situations with relevant timings that may be worth exploring:  

导航计时和资源计时的用途远不止上述示例所概述的。以下是一些其他情况，这些情况可能值得探讨：

*   **Page redirects:** Redirects are an overlooked source of added latency, especially redirect chains. Latency gets added in a number of ways, such as HTTP-to-HTTPs hops, as well as 302/uncached 301 redirects. The `redirectStart`, `redirectEnd`, and `redirectCount` timings are helpful in assessing redirect latency.  

    页面重定向：重定向是导致延迟增加的一个被忽视的来源，尤其是重定向链。延迟以多种方式增加，例如 HTTP 到 HTTPs 跃点，以及 302/未缓存的 301 重定向。 `redirectStart` 、 `redirectEnd` 和 `redirectCount` 计时有助于评估重定向延迟。
*   **Document unloading:** In pages that run code in an [`unload` event handler](https://developer.mozilla.org/docs/Web/Events/unload), the browser must execute that code before it can navigate to the next page. `unloadEventStart` and `unloadEventEnd` measure document unloading.  

    文档卸载：在 `unload` 事件处理程序中运行代码的页面中，浏览器必须先执行该代码，然后才能导航到下一页。 `unloadEventStart` 并 `unloadEventEnd` 测量文档卸载。
*   **Document processing:** Document processing time may not be consequential unless your website sends very large HTML payloads. If this describes your situation, the `domInteractive`, `domContentLoadedEventStart`, `domContentLoadedEventEnd`, and `domComplete` timings may be of interest.  

    文档处理：除非您的网站发送非常大的 HTML 有效负载，否则文档处理时间可能无关紧要。如果这描述了您的情况，则 、 `domInteractive` 、 `domContentLoadedEventStart` `domContentLoadedEventEnd` 和 `domComplete` 时间可能会引起您的兴趣。

:::warning
**Warning:** Timings related to document unloading and processing are available only in Navigation Timing, as they only apply to navigation requests.  

警告：与文档卸载和处理相关的计时仅在导航计时中可用，因为它们仅适用于导航请求。
:::

## Acquiring timings in application code  (在应用程序代码中获取时序)

All of the examples shown so far use `performance.getEntriesByType`, but there are other ways to query the performance entry buffer, such as [`performance.getEntriesByName`](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName) and [`performance.getEntries`](https://developer.mozilla.org/docs/Web/API/Performance/getEntries). These methods are fine when only light analysis is needed. In other situations, though, they can introduce excessive main thread work by iterating over a large number of entries, or even repeatedly polling the performance buffer to find new entries.  

到目前为止，显示的所有示例都使用 `performance.getEntriesByType` ，但还有其他方法可以查询性能条目缓冲区，例如 `performance.getEntriesByName` 和 `performance.getEntries` 。当只需要光分析时，这些方法很好。但是，在其他情况下，它们可能会通过迭代大量条目，甚至重复轮询性能缓冲区以查找新条目来引入过多的主线程工作。

The recommended approach for collecting entries from the performance entry buffer is to use a [`PerformanceObserver`](https://developer.mozilla.org/docs/Web/API/PerformanceObserver). `PerformanceObserver` listens for performance entries, and provides them as they're added to the buffer:  

从性能条目缓冲区收集条目的推荐方法是使用 `PerformanceObserver` . `PerformanceObserver` 侦听性能条目，并在将它们添加到缓冲区时提供它们：

```js
// Create the performance observer:
const perfObserver = new PerformanceObserver((observedEntries) => {
  // Get all resource entries collected so far:
  const entries = observedEntries.getEntries();

  // Iterate over entries:
  for (let i = 0; i < entries.length; i++) {
    // Do the work!
  }
});

// Run the observer for Navigation Timing entries:
perfObserver.observe({
  type: 'navigation',
  buffered: true
});

// Run the observer for Resource Timing entries:
perfObserver.observe({
  type: 'resource',
  buffered: true
});
```

:::info
**Note:** Adding the `buffered` option to a performance observer's `observe` event ensures that performance entries added to the buffer prior to the instantiation of the performance observer are observable.  

注： 将选项 `buffered` 添加到性能观察程序 `observe` 的事件可确保在性能观察程序实例化之前添加到缓冲区的性能条目是可观察的。
:::

This method of collecting timings may feel awkward when compared to directly accessing the performance entry buffer, but it's preferable to tying up the main thread with work that doesn't serve a critical and user-facing purpose.  

与直接访问性能输入缓冲区相比，这种收集计时的方法可能会让人感到尴尬，但最好不要将主线程与不用于关键和面向用户的工作捆绑在一起。

## Phoning home 给家里打电话

Once you've collected all the timings you need, you can send them to an endpoint for further analysis. Two ways to do this are with either [`navigator.sendBeacon`](https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon) or a [`fetch` with the `keepalive` option](https://developer.mozilla.org/docs/Web/API/fetch) set. Both methods will send a request to a specified endpoint in a non-blocking way, and the request will be queued in a way that outlives the current page session if need be:  

收集所需的所有计时后，可以将它们发送到终结点进行进一步分析。执行此操作的两种方法是使用 `keepalive` 选项集或 `navigator.sendBeacon` 选项 `fetch` 集。这两种方法都将以非阻塞方式向指定的终结点发送请求，如果需要，请求将以比当前页面会话更长的方式排队：

```js
// Caution: If you have lots of performance entries, don't
// do this. This is an example for illustrative purposes.
const data = JSON.stringify(performance.getEntries()));

// The endpoint to transmit the encoded data to
const endpoint = '/analytics';

// Check for fetch keepalive support
if ('keepalive' in Request.prototype) {
  fetch(endpoint, {
    method: 'POST',
    body: data,
    keepalive: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} else if ('sendBeacon' in navigator) {
  // Use sendBeacon as a fallback
  navigator.sendBeacon(endpoint, data);
}
```

In this example, the JSON string will arrive in a `POST` payload that you can decode and process/store in an application backend as needed.  

在此示例中，JSON 字符串将到达有效 `POST` 负载中，您可以根据需要在应用程序后端中解码和处理/存储该有效负载。

## Wrapping up 结束语

Once you have metrics collected, it's up to you to figure out how to analyze that field data. When analyzing field data, there are a few general rules to follow to ensure you're drawing meaningful conclusions:  

收集指标后，由您决定如何分析该字段数据。在分析外业数据时，需要遵循一些一般规则，以确保得出有意义的结论：

*   [Avoid averages](https://www.igvita.com/2016/01/12/the-average-page-is-a-myth/), as they're not representative of any one user's experience, and may be skewed by outliers.  

    避免使用平均值，因为它们不能代表任何一个用户的体验，并且可能会因异常值而出现偏差。
*   Rely on percentiles. In datasets of time-based performance metrics, lower is better. This means that when you prioritize low percentiles, you're only paying attention to the fastest experiences.  

    依靠百分位数。在基于时间的性能指标数据集中，越低越好。这意味着，当您优先考虑低百分位数时，您只会关注最快的体验。
*   [Prioritize the long tail of values](https://timkadlec.com/remembers/2018-06-07-prioritizing-the-long-tail-of-performance/). When you prioritize experiences at the 75th percentile or higher, you're putting your focus where it belongs: on the slowest experiences.  

    优先考虑值的长尾。当您将体验的优先级排在第 75 个百分位或更高时，您就将重点放在了它所属的地方：最慢的体验上。

This guide isn't meant to be an exhaustive resource on Navigation or Resource Timing, but a starting point. Below are some additional resources you may find helpful:  
本指南并不是有关导航或资源计时的详尽资源，而是一个起点。以下是一些可能对您有帮助的其他资源：

*   [Navigation Timing Spec](https://www.w3.org/TR/navigation-timing-2/). 导航时序规范

*   [Resource Timing Spec](https://www.w3.org/TR/resource-timing-2/). 资源计时规范

*   [ResourceTiming in Practice](https://nicj.net/resourcetiming-in-practice/).  

    ResourceTiming 在实践中。
*   [Navigation Timing API (MDN)  

    导航计时 API （MDN）](https://developer.mozilla.org/docs/Web/API/Navigation_timing_API)
*   [Resource Timing API (MDN)  

    资源计时 API （MDN）](https://developer.mozilla.org/docs/Web/API/Resource_Timing_API)

With these APIs and the data they provide, you'll be better equipped to understand how loading performance is experienced by real users, which will give you more confidence in diagnosing and addressing loading performance problems in the field.  

借助这些 API 及其提供的数据，您将能够更好地了解真实用户对加载性能的体验，这将使您在现场诊断和解决加载性能问题时更有信心。
