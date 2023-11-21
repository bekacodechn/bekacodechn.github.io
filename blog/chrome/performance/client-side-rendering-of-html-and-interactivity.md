# 客户端渲染 HTML 和交互性

`metadata:`

**原标题:** Client-side rendering of HTML and interactivity

**链接:** https://web.dev/articles/client-side-rendering-of-html-and-interactivity

---

Parsing and rendering of HTML is something that browsers do very well by default for websites that use the browser's built-in navigation logic—sometimes called "traditional page loads" or "hard navigations". Such websites are sometimes called multi-page applications (MPAs).  

默认情况下，对于使用浏览器内置导航逻辑（有时称为“传统页面加载”或“硬导航”）的网站，浏览器可以很好地解析和呈现 HTML。此类网站有时称为多页应用程序 （MPA）。

However, developers may work around browser defaults to suit their application needs. This is certainly the case for websites using the [single page application (SPA) pattern](https://en.wikipedia.org/wiki/Single-page_application), which dynamically creates large parts of the HTML/DOM on the client with JavaScript. Client-side rendering is the name for this design pattern, and it can have effects on your website's [Interaction to Next Paint (INP)](https://web.dev/articles/inp) if the work involved is excessive.  

但是，开发人员可以解决浏览器默认值以满足其应用程序需求。对于使用单页应用程序 （SPA） 模式的网站来说，情况确实如此，该模式使用 JavaScript 在客户端上动态创建大部分 HTML/DOM。客户端渲染是这种设计模式的名称，如果涉及的工作过多，它可能会对您网站的 Interaction to Next Paint （INP） 产生影响。

This guide will help you weigh the difference between using HTML sent by the server to the browser versus creating it on the client with JavaScript, and how the latter can result in high interaction latency at crucial moments.  

本指南将帮助您权衡使用服务器发送到浏览器的 HTML 与使用 JavaScript 在客户端上创建 HTML 之间的区别，以及后者如何在关键时刻导致高交互延迟。

## How the browser renders HTML provided by the server  

浏览器如何呈现服务器提供的 HTML

The navigation pattern used in traditional page loads involves receiving HTML from the server on every navigation. If you enter a URL in the address bar of your browser or click on a link in an MPA, the following series of events occurs:  

传统页面加载中使用的导航模式涉及在每次导航时从服务器接收 HTML。如果在浏览器的地址栏中输入 URL 或单击 MPA 中的链接，则会发生以下一系列事件：

1.  The browser sends a navigation request for the URL provided.  

    浏览器为提供的 URL 发送导航请求。

2.  The server responds with HTML in chunks.  

    服务器以块的形式使用 HTML 进行响应。

The last step of these is key. It's also one of the most fundamental performance optimizations in the server/browser exchange, and is known as _streaming_. If the server can begin sending HTML as soon as possible, and the browser doesn't wait for the entire response to arrive, the browser can process HTML in chunks as it arrives.  

最后一步是关键。它也是服务器/浏览器交换中最基本的性能优化之一，被称为流式处理。如果服务器可以尽快开始发送 HTML，并且浏览器不等待整个响应到达，则浏览器可以在 HTML 到达时分块处理 HTML。

![A screenshot of parsing of HTML sent by the server visualized in the performance panel of Chrome DevTools. As the HTML streams in, chunks of it are processed across multiple shorter tasks, and rendering is incremental.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-parsing-ht-f2443fe1b1888.png?imageSlim)

Parsing and rendering of HTML provided by the server as visualized in the performance panel of Chrome DevTools. The tasks involved in parsing HTML and rendering it are split into chunks.  

解析和呈现服务器提供的 HTML，如 Chrome DevTools 的性能面板所示。解析 HTML 和呈现 HTML 所涉及的任务被拆分为多个块。

Like most things that happen in the browser, parsing HTML occurs within tasks. When HTML is streamed from the server to the browser, the browser optimizes parsing of that HTML by doing so a bit at a time as bits of that stream arrive in chunks. The consequence is that the browser yields to the main thread periodically after processing each chunk, which avoids [long tasks](https://web.dev/articles/long-tasks-devtools#what_are_long_tasks). This means that other work can occur while HTML is being parsed, including the incremental rendering work necessary to present a page to the user, as well as processing user interactions that may occur during the page's crucial startup period. This approach translates to a better [Interaction to Next Paint (INP)](https://web.dev/articles/inp) score for the page.

像浏览器中发生的大多数事情一样，解析超文本标记语言发生在任务中。当超文本标记语言从服务器流式传输到浏览器时，浏览器通过在流的比特以块的形式到达时一次执行一点来优化超文本标记语言的解析。结果是浏览器在处理每个块后定期屈服于主线程，从而避免了长时间的任务。这意味着在解析超标记语言时可能会发生其他工作，包括向用户呈现页面所需的增量渲染工作，以及处理页面关键启动期间可能发生的用户交互。这种方法转化为页面更好的交互到下一个绘制（INP）分数。

The takeaway? When you stream HTML from the server, **you get incremental parsing and rendering of HTML and automatic yielding to the main thread for free.** You don't get that with client-side rendering.

当你从服务器流式传输超文本标记语言时，你会得到超文本标记语言的增量解析和渲染，并自动免费屈服于主线程。你不能通过客户端渲染得到这些。

## How the browser renders HTML provided by JavaScript  

浏览器如何呈现 JavaScript 提供的 HTML

While every navigation request to a page requires some amount of HTML to be provided by the server, some websites will use the SPA pattern. This approach often involves a minimal initial payload of HTML is provided by the server, but then the client will populate the main content area of a page with HTML assembled from data fetched from the server. Subsequent navigations—sometimes referred to as "soft navigations" in this case—are handled entirely by JavaScript to populate the page with new HTML.  

虽然对页面的每个导航请求都需要服务器提供一定数量的 HTML，但某些网站将使用 SPA 模式。这种方法通常涉及服务器提供的 HTML 的最小初始有效负载，但随后客户端将使用从服务器获取的数据组装的 HTML 填充页面的主要内容区域。后续导航（在本例中有时称为“软导航”）完全由 JavaScript 处理，以使用新的 HTML 填充页面。

Client-side rendering may also occur in non-SPAs in more limited cases where HTML is dynamically added to the DOM through JavaScript.  

在更有限的情况下，客户端呈现也可能发生在非 SPA 中，其中 HTML 是通过 JavaScript 动态添加到 DOM 的。

There are a few common ways of creating HTML or adding to the DOM through JavaScript:  

有几种常见的方法可以通过 JavaScript 创建 HTML 或添加到 DOM：

1.  The [`innerHTML` property](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) allows you to set the content on an existing element via a string, which the browser parses into DOM.  

    该 `innerHTML` 属性允许您通过字符串在现有元素上设置内容，浏览器将其解析为 DOM。

2.  The [`document.createElement` method](https://developer.mozilla.org/docs/Web/API/Document/createElement) allows you to create new elements to be added to the DOM without using any browser HTML parsing.  

    该 `document.createElement` 方法允许您创建要添加到 DOM 的新元素，而无需使用任何浏览器 HTML 解析。

3.  The [`document.write` method](https://developer.mozilla.org/docs/Web/API/Document/write) allows you to write HTML to the document (and the browser parses it, just like in approach #1). Due to [a number of reasons](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()), however, **usage of `document.write` is strongly discouraged.**  

    该 `document.write` 方法允许您将 HTML 写入文档（浏览器会解析它，就像在方法 #1 中一样）。然而，由于多种原因， `document.write` 强烈建议不要使用

![A screenshot of parsing of HTML rendered via JavaScript visualized in the performance panel of Chrome DevTools. The work occurs in a single, long task that blocks the main thread.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-parsing-ht-7b89c1ab03511.png?imageSlim)

Parsing and rendering of HTML through JavaScript on the client as visualized in the performance panel of Chrome DevTools. The tasks involved in parsing and rendering it are not chunked up, resulting in a long task that blocks the main thread.  

在客户端上通过 JavaScript 解析和呈现 HTML，如 Chrome DevTools 的性能面板所示。解析和呈现它所涉及的任务不会被分块，从而导致一个阻塞主线程的长任务。

The consequences of creating HTML/DOM through client-side JavaScript can be significant:  

通过客户端 JavaScript 创建 HTML/DOM 的后果可能很严重：

*   Unlike HTML streamed by the server in response to a navigation request, JavaScript tasks on the client are not automatically chunked up, which may result in long tasks that block the main thread. This means that your page's INP can be negatively affected if you're creating too much HTML/DOM at a time on the client.  

    与服务器为响应导航请求而流式传输的 HTML 不同，客户端上的 JavaScript 任务不会自动分块，这可能会导致长时间的任务阻塞主线程。这意味着，如果您在客户端上一次创建过多的 HTML/DOM，您的页面的 INP 可能会受到负面影响。

*   If HTML is created on the client during startup, resources referenced within it [will _not_ be discovered by the browser preload scanner](https://web.dev/articles/preload-scanner#rendering_markup_with_client-side_javascript). This will certainly have a negative effect on a page's [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp). While this is not a runtime performance issue (instead it's an issue of network delay in fetching important resources), you don't want your website's LCP to be affected by sidestepping this fundamental browser performance optimization.  

    如果在启动期间在客户端上创建了 HTML，则浏览器预加载扫描程序不会发现其中引用的资源。这肯定会对页面的最大内容绘制 （LCP） 产生负面影响。虽然这不是运行时性能问题（而是获取重要资源的网络延迟问题），但您不希望网站的 LCP 因回避这一基本的浏览器性能优化而受到影响。

## What you can do about the performance impact of client-side rendering  

如何应对客户端呈现对性能的影响

If your website depends heavily on client-side rendering and you've observed [poor INP values in your field data](https://web.dev/articles/find-slow-interactions-in-the-field), you might be wondering if client-side rendering has anything to do with the problem. For example, if your website is an SPA, your field data may reveal interactions responsible for considerable rendering work.  

如果您的网站严重依赖客户端渲染，并且您在字段数据中观察到较差的 INP 值，您可能想知道客户端渲染是否与该问题有关。例如，如果您的网站是 SPA，则您的字段数据可能会显示负责大量渲染工作的交互。

Whatever the cause, here are some potential causes you can explore to help get things back on track.  

无论原因是什么，您可以探索以下一些潜在原因，以帮助事情重回正轨。

### Provide as much HTML from the server as possible  

从服务器提供尽可能多的 HTML

As mentioned earlier, the browser handles HTML from the server in a very performant way by default. It will break up parsing and rendering of HTML in a way that avoids long tasks, and optimizes the amount of total main thread time. This leads to a lower [Total Blocking Time (TBT)](https://web.dev/articles/tbt), and TBT is [strongly correlated with INP](https://almanac.httparchive.org/en/2022/performance#inp-and-tbt).  

如前所述，默认情况下，浏览器以非常高性能的方式处理来自服务器的 HTML。它将以一种避免冗长任务的方式分解 HTML 的解析和呈现，并优化主线程的总时间量。这导致较低的总阻断时间 （TBT），并且 TBT 与 INP 密切相关。

You may be relying on a frontend framework to build your website. If so, you'll want to make sure you're rendering component HTML on the server. This will limit the amount of initial client-side rendering your website will require, and should result in a better experience.  

您可能依靠前端框架来构建您的网站。如果是这样，您需要确保在服务器上呈现组件 HTML。这将限制您的网站所需的初始客户端渲染量，并应带来更好的体验。

*   For React, you'll want to make use of the [Server DOM API](https://react.dev/reference/react-dom/server) to render HTML on the server. But be aware: the traditional method of server-side rendering uses [a synchronous approach](https://react.dev/reference/react-dom/server#server-apis-for-non-streaming-environments), which can lead to a longer [Time to First Byte (TTFB)](https://web.dev/articles/ttfb), as well as subsequent metrics such as [First Contentful Paint (FCP)](https://web.dev/articles/fcp) and LCP. Where possible, make sure you're using the streaming APIs for [Node.js](https://react.dev/reference/react-dom/server#server-apis-for-nodejs-streams) or [other JavaScript runtimes](https://react.dev/reference/react-dom/server#server-apis-for-web-streams) so that the server can begin streaming HTML to the browser as soon as possible. Next.js—a React-based framework—provides many best practices by default. In addition to automatically rendering HTML on the server, it can also statically generate HTML for pages that don't change based on user context (such as authentication).  

    对于 React，您需要使用服务器 DOM API 在服务器上呈现 HTML。但请注意：传统的服务器端渲染方法使用同步方法，这可能会导致更长的首字节时间 （TTFB） 以及后续指标，例如首次内容绘制 （FCP） 和 LCP。如果可能，请确保使用适用于 Node.js 或其他 JavaScript 运行时的流式处理 API，以便服务器可以尽快开始将 HTML 流式传输到浏览器。Next.js 是一个基于 React 的框架，默认情况下提供了许多最佳实践。除了在服务器上自动呈现 HTML 之外，它还可以为不会根据用户上下文（例如身份验证）更改的页面静态生成 HTML。

*   Vue also performs client-side rendering by default. However, like React, Vue can also [render your component HTML on the server](https://vuejs.org/guide/scaling-up/ssr.html). Either take advantage of these server-side APIs where possible, or consider a [higher-level abstraction](https://vuejs.org/guide/scaling-up/ssr.html#higher-level-solutions) for your Vue project to make the best practices easier to implement.  

    默认情况下，Vue 还执行客户端渲染。但是，与 React 一样，Vue 也可以在服务器上渲染您的组件 HTML。在可能的情况下利用这些服务器端 API，或者考虑对 Vue 项目进行更高级别的抽象，以使最佳实践更易于实现。

*   Svelte [renders HTML on the server](https://learn.svelte.dev/tutorial/ssr) by default—although if your component code needs access to browser-exclusive namespaces (`window`, for example), you may not be able to render that component's HTML on the server. Explore alternative approaches wherever possible so that you're not causing unnecessary client-side rendering. [SvelteKit](https://kit.svelte.dev/)—which is to Svelte as Next.js is to React—embeds many best practices into your Svelte projects as possible, so you can avoid potential pitfalls in projects that use Svelte alone.  

    默认情况下，Svelte 在服务器上呈现 HTML，但如果组件代码需要访问浏览器专用命名空间（ `window` 例如），则可能无法在服务器上呈现该组件的 HTML。尽可能探索替代方法，以免导致不必要的客户端渲染。SvelteKit（对 Svelte 来说就像 Next.js 对 React 一样）尽可能地将许多最佳实践嵌入到 Svelte 项目中，因此您可以避免单独使用 Svelte 的项目中的潜在陷阱。

:::info

**Key point:** If your application uses either of these frameworks and requires interactivity on the client, you'll still need to [hydrate your components on the client](https://web.dev/articles/rendering-on-the-web#combining_server-side_rendering_and_client-side_rendering_via_rehydration) so that they'll be interactive. For a comprehensive evaluation of the different approaches to rendering HTML, and for some advice on how to handle component hydration on the client with performance in mind, read [Rendering on the web](https://web.dev/articles/rendering-on-the-web).  

关键点：如果应用程序使用这些框架中的任何一个，并且需要在客户端上进行交互，则仍需要在客户端上对组件进行水合，以便它们具有交互性。若要全面评估呈现 HTML 的不同方法，以及如何在考虑性能的情况下处理客户端上的组件冻结的一些建议，请阅读 Web 上的呈现。

:::

### Limit the amount of DOM nodes created on the client  

限制在客户端上创建的 DOM 节点数量

When DOMs are large, the amount of processing time required to render them tends to increase. Whether your website is a full-fledged SPA, or is injecting new nodes into an existing DOM as the result of an interaction for an MPA, consider keeping those DOMs as small as possible. This will help reduce the work required during client-side rendering to display that HTML, hopefully helping to keep your website's INP lower.  

当 DOM 很大时，渲染它们所需的处理时间往往会增加。无论您的网站是成熟的 SPA，还是作为 MPA 交互的结果将新节点注入现有 DOM，请考虑将这些 DOM 保持在尽可能小的范围内。这将有助于减少客户端渲染期间显示该 HTML 所需的工作，希望有助于降低您网站的 INP。

:::info

**Read to learn more:** [DOM size and interactivity](https://web.dev/articles/dom-size-and-interactivity).  

阅读以了解更多信息：DOM 大小和交互性。

:::

### Consider a streaming service worker architecture  

考虑流式处理服务辅助角色体系结构

This is an advanced technique—one that may not work easily with every use case—but it's one that can turn your MPA into a website that feels like it's loading instantly when users navigate from one page to the next. You can use a service worker to precache the static parts of your website in [`CacheStorage`](https://developer.mozilla.org/docs/Web/API/CacheStorage) while using the [`ReadableStream` API](https://developer.mozilla.org/docs/Web/API/ReadableStream) to fetch the rest of a page's HTML from the server.  

这是一种先进的技术，可能并非在每个用例中都可以轻松使用，但它可以将您的 MPA 变成一个网站，当用户从一个页面导航到下一个页面时，感觉就像它立即加载一样。您可以使用 Service Worker 预缓存网站的静态部分， `CacheStorage` 同时使用 `ReadableStream` API 从服务器获取页面的 HTML 的其余部分。

When you use this technique successfully, you aren't creating HTML on the client, but the instant loading of content partials from the cache will give the impression that your site is loading quickly. Websites using this approach can feel almost like an SPA, but without the downfalls of client-side rendering. It also [reduces the amount of HTML you're requesting from the server](https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/).  

当您成功使用此技术时，您不会在客户端上创建 HTML，但从缓存中即时加载内容部分会给人一种您的网站正在快速加载的印象。使用这种方法的网站感觉几乎像一个 SPA，但没有客户端渲染的缺点。它还减少了您从服务器请求的 HTML 数量。

In short, a streaming service worker architecture doesn't _replace_ the browser's built-in navigation logic—it _adds_ to it. For more information on how to achieve this with [Workbox](https://developer.chrome.com/docs/workbox/), read [Faster multipage applications with streams](https://developer.chrome.com/docs/workbox/faster-multipage-applications-with-streams/).  

简而言之，流式处理服务辅助角色架构不会取代浏览器的内置导航逻辑，而是对其进行了补充。有关如何使用 Workbox 实现此目的的详细信息，请参阅使用流实现更快的多页应用程序。

## Conclusion 结论

How your website receives and renders HTML has an impact on performance. When you rely on the server to send all (or the bulk of) the HTML required for your website to function, you're getting a lot for free: incremental parsing and rendering, and automatic yielding to the main thread to avoid long tasks.  

您的网站接收和呈现 HTML 的方式会影响性能。当您依靠服务器发送网站运行所需的全部（或大部分）HTML 时，您将免费获得很多：增量解析和渲染，以及自动屈服于主线程以避免冗长的任务。

Client-side HTML rendering introduces a number of potential performance issues that can be avoidable in many cases. Due to each individual website's requirements, however, it's not entirely avoidable 100% of the time. To mitigate the potential long tasks that can result from excessive client-site rendering, make sure you're sending as much of your website's HTML from the server whenever possible, keep your DOM sizes as small as possible for HTML that must be rendered on the client, and consider alternative architectures to speed the delivery of HTML to the client while also taking advantage of the incremental parsing and rendering the browser provides for HTML loaded from the server.  

客户端 HTML 呈现引入了许多潜在的性能问题，这些问题在许多情况下是可以避免的。但是，由于每个网站的要求，这并非完全可以 100% 避免。为了减轻过多的客户端-站点渲染可能导致的潜在冗长任务，请确保尽可能从服务器发送尽可能多的网站 HTML，对于必须在客户端上渲染的 HTML，使 DOM 大小尽可能小，并考虑替代体系结构以加快 HTML 向客户端的交付速度，同时利用浏览器为从服务器。

If you can get your website's client-side rendering to be as minimal as possible, you'll improve not just your website's INP, but other metrics such as LCP, TBT, and possibly even your TTFB in some cases.  

如果你能使你网站的客户端渲染尽可能少，你不仅可以改善你网站的INP，还可以改善其他指标，如LCP、TBT，在某些情况下甚至可能改善你的TTFB。

_Hero image from [Unsplash](https://unsplash.com/), by [Maik Jonietz](https://unsplash.com/de/fotos/nZcMWOKAJrY)._
