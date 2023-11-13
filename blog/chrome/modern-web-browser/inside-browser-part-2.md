# 现代网络浏览器内幕 — 2

`metadata:`

**原标题:** Inside look at modern web browser (part 2)

**链接:** https://developer.chrome.com/blog/inside-browser-part2/

---

## What happens in navigation

本文是 Chrome 浏览器内部工作原理 4 篇系列博客的第二部分。在[上一篇文章](./inside-browser-part-1.md)中，我们介绍了不同进程和线程如何处理浏览器的不同部分。在本篇博文中，我们将深入探讨各个进程和线程是如何通信以显示网站的。

让我们来看一个简单的网页浏览用例：在浏览器中输入 URL，然后浏览器从互联网获取数据并显示页面。在本篇文章中，我们将重点讨论用户请求网站和浏览器准备呈现页面（也称为导航）的部分。

## It starts with a browser process (从浏览器进程开始)

正如我们在第 1 部分中所介绍的：CPU、GPU、内存和多进程架构，标签页之外的一切都由浏览器进程处理。浏览器进程有多个线程，如绘制浏览器按钮和输入框的UI线程、处理网络堆栈以接收互联网数据的网络线程、控制文件访问的存储线程等。当你在地址栏中输入 URL 时，浏览器进程的UI线程会处理你的输入。

![20231112214232](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112214232.png)
*图 1：顶部为浏览器用户界面，底部为浏览器进程示意图，其中包含用户界面、网络和存储线程*

## A simple navigation

### Step 1: Handling input

当用户开始在地址栏中输入时，UI线程首先会询问 "这是搜索查询还是 URL？在 Chrome 浏览器中，地址栏也是一个搜索输入框，因此UI线程需要解析并决定是将您发送到搜索引擎，还是发送到您请求的网站。

![20231112214406](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112214406.png)
*图 1：UI线程询问输入是搜索查询还是 URL*

### Step 2: Start navigation

当用户点击回车键时，UI线程会启动网络调用以获取网站内容。加载旋转器会显示在标签页的角落，网络线程会执行相应的协议，如 DNS 查找和为请求建立 TLS 连接。

![20231112214510](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112214510.png)
*图 2：UI线程与网络线程对话，以导航到 mysite.com*

此时，网络线程可能会收到类似 HTTP 301 的服务器重定向头。在这种情况下，网络线程会与UI线程通信，告知服务器正在请求重定向。然后，将启动另一个 URL 请求。

### Step 3: Read response

![20231112214827](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112214827.png)
*图 3：包含 Content-Type 和有效载荷（实际数据）的响应标头*

一旦响应体（有效负载）开始输入，网络线程就会在必要时查看数据流的前几个字节。响应的 Content-Type 标头应说明数据类型，但由于它可能缺失或出错，因此在这里进行 [MIME 类型](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types)嗅探。正如源代码中注释的那样，这是一项 "棘手的工作"。您可以[阅读注释](https://cs.chromium.org/chromium/src/net/base/mime_sniffer.cc?sq=package:chromium&dr=CS&l=5)，了解不同浏览器如何处理内容类型/payload 对。

如果响应是 HTML 文件，那么下一步就是将数据传递给渲染器进程，但如果是压缩文件或其他文件，则意味着这是一个下载请求，因此他们需要将数据传递给下载管理器。

![20231112214851](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112214851.png)
*图 4：询问响应数据是否来自安全网站 HTML 的网络线程*

这也是进行[安全浏览](https://safebrowsing.google.com/)检查的地方。如果域和响应数据似乎与已知的恶意网站相匹配，网络线程就会发出警报，显示警告页面。此外，还会进行跨源读取阻塞（[Cross Origin Read Blocking (CORB)](https://www.chromium.org/Home/chromium-security/corb-for-developers)）检查，以确保敏感的跨站点数据不会进入渲染器进程。

### Step 4: Find a renderer process

一旦完成所有检查，网络线程确信浏览器可以导航到请求的网站，网络线程就会告诉UI线程数据已准备就绪。然后，UI线程会找到一个渲染器进程，继续呈现网页。

![20231112215230](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112215230.png)
*图 5：网络线程通知UI线程(UI thread)查找渲染器进程*

由于网络请求可能需要几百毫秒才能得到响应，因此需要进行优化以加快这一过程。当UI线程在第 2 步向网络线程发送 URL 请求时，它已经知道他们正在导航到哪个网站。UI线程会尝试主动查找或启动一个与网络请求并行的渲染器进程。这样，如果一切按预期进行，当网络线程收到数据时，渲染器进程已经处于待机状态。如果导航跨站重定向，这个备用进程可能不会被使用，在这种情况下可能需要另一个进程。

### Step 5: Commit navigation

现在数据和渲染器进程都已准备就绪，浏览器进程会向渲染器进程发送 IPC，以提交导航。同时，它还会传递数据流，以便渲染器进程能继续接收 HTML 数据。一旦浏览器进程听到渲染器进程确认已提交，导航就完成了，文档加载阶段就开始了。

此时，地址栏会更新，安全指示器和网站设置用户界面也会反映新页面的网站信息。标签页的会话历史将被更新，因此后退/前进按钮将在刚刚导航到的网站上进行。为便于在关闭标签页或窗口时恢复标签页/会话，会话历史记录会存储在磁盘上。

![20231112215554](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112215554.png)
*图 6：浏览器和渲染器进程之间的 IPC，请求呈现页面*

### Extra Step: Initial load complete

导航提交后，渲染器进程将继续加载资源并呈现页面。我们将在下一篇文章中详细介绍这一阶段发生的事情。一旦渲染器进程 "完成 "呈现，它就会向浏览器进程发送 IPC（这是在页面中所有框架的 onload 事件都已触发并执行完毕之后）。此时，UI 线程会停止标签页上的加载旋转器。

我之所以说 "完成"，是因为客户端 JavaScript 在这之后仍可加载其他资源并呈现新视图。

![20231112215820](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112215820.png)
*图 7：从渲染器到浏览器进程的 IPC，用于通知页面已 "加载"。*

## Navigating to a different site

简单的导航就完成了！但是，如果用户再次在地址栏中输入不同的 URL，会发生什么情况呢？那么，浏览器会通过相同的步骤导航到不同的网站。但在此之前，它需要检查当前渲染的网站是否关心 [beforeunload](https://developer.mozilla.org/docs/Web/Events/beforeunload) 事件。

`beforeunload` 会在你试图离开或关闭标签页时创建 "离开此网站？"警报。标签页内的所有内容（包括 JavaScript 代码）都由渲染器进程处理，因此当有新的导航请求时，浏览器进程必须与当前渲染器进程进行检查。

:::warning
注意事项

不要添加无条件的`beforeunload`处理程序。这会造成更多延迟，因为处理程序需要在导航开始前执行。只有在需要时，例如需要警告用户可能会丢失他们在页面上输入的数据时，才应添加此事件处理程序。(意思是离开页面是浏览器进程和渲染器进程会通信，确实是否有`beforeunload`事件需要执行)
:::

![20231112220337](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112220337.png)
*图 8：从浏览器进程到渲染器进程的 IPC，告诉它即将导航到另一个网站*

如果导航是从渲染器进程启动的（如用户点击了链接或客户端 JavaScript 已运行 `window.location="https://newsite.com"`），渲染器进程会首先检查卸载前处理程序。然后，它会经历与浏览器进程启动导航相同的过程。唯一不同的是，导航请求是从渲染器进程向浏览器进程发起的。

当新的导航指向与当前呈现的网站不同的网站时，会调用一个单独的呈现进程来处理新的导航，而当前的呈现进程会继续处理卸载等事件。如需了解更多信息，请参[阅页面生命周期状态概述](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#overview_of_page_lifecycle_states_and_events)以及如何使用页面[生命周期 API ](https://developers.google.com/web/updates/2018/07/page-lifecycle-api)挂钩事件。


![20231112220915](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112220915.png)
*图 9：从浏览器进程到新渲染器进程的 2 个 IPC，要求渲染页面并要求卸载旧渲染器进程*

## In case of Service Worker

这一导航过程最近的一个变化是引入了service worker（[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/)）。Service Worker 是在应用程序代码中编写网络代理的一种方法；它允许网络开发人员**对本地缓存的内容和何时从网络获取新数据进行更多控制**。如果将 Service Worker 设置为从缓存中加载页面，则无需从网络请求数据。

需要记住的重要部分是，service worker 是在渲染器进程中运行的 JavaScript 代码。但是，当导航请求进来时，浏览器进程如何知道网站有`service worker`呢？

![20231112221213](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112221213.png)
*图 10：浏览器进程中的网络线程在查找service worker范围*

当service worker被注册时，service worker的作用域将作为参考保留（有关作用域的更多信息，请参阅 "[service worker生命周期](https://web.dev/articles/service-worker-lifecycle) "一文）。当导航发生时，网络线程会根据已注册的service worker范围检查域，如果该 URL 已注册service worker，UI线程就会找到渲染器进程，以便执行service worker代码。service worker可以从缓存中加载数据，从而无需从网络请求数据，也可以从网络请求新资源。

![20231112221614](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112221614.png)
*图 11：浏览器进程中的UI线程启动渲染器进程来处理service worker；然后渲染器进程中的工作者线程从网络请求数据*

## Navigation Preload (导航预加载)

您可以看到，如果service worker最终决定从网络请求数据，浏览器进程和渲染器进程之间的这种往返可能会导致延迟。[导航预加载](https://developers.google.com/web/updates/2017/02/navigation-preload)是一种通过在service worker启动时并行加载资源来加快这一过程的机制。它用一个标头标记这些请求，允许服务器决定为这些请求发送不同的内容；例如，只发送更新的数据，而不是完整的文档。

![20231112222559](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112222559.png)
*图12：浏览器进程中的UI线程启动渲染器进程以处理Service Worker，同时并行启动网络请求*

## Wrap-up

在这篇文章中，我们研究了导航过程中会发生什么，以及您的Web应用程序代码（如响应标头和客户端JavaScript）如何与浏览器交互。了解浏览器从网络获取数据的步骤可以更容易地理解为什么开发了导航预加载等API。在下一篇文章中，我们将深入探讨浏览器如何评估我们的 HTML/CSS/JavaScript来呈现页面。











