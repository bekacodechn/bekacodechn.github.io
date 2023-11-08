# Web 浏览器如何逐步工作 — 高级体系结构（第 1 部分）



`metadata:`

**原标题:** How web browser works step by step — high-level architecture (part 1) 

**链接:** https://cabulous.medium.com/how-browser-works-part-i-process-and-thread-f63a9111bae9

---



![20231108153330](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108153330.png)

对我来说，浏览器是一个黑匣子。它吃掉了我的 HTML、CSS 和 JavaScript 文件，并显示一个页面。不知何故，它起作用了。

直到有一天，我决定坐下来找出原因。

在网上搜索时，我找不到太多信息。塔利·加西尔（Tali Garsiel）在2011年写了[一本很好的书](https://www.taligarsiel.com/Projects/howbrowserswork1.htm)。从那时起，浏览器架构发生了变化。Chrome在2013年从WebKit分叉出来，通过其Blink引擎占据了约65%的市场份额。在接下来的 6 年里，Chrome 已经演变成一种不同的架构。

但是，浏览器的基本部分并没有太大变化。它们都基于进程和线程。

![20231108160336](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108160336.png)

使用 Chrome 打开一个网站，然后查看其任务管理器。您可以看到当前正在运行的进程列表。

为什么它有这么多进程，只打开一个选项卡？这就是破译黑匣子的问题。

## Processes and threads 进程和线程

![20231108160436](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108160436.png)

在单线程的进程中，只有一个线程。它也是该进程的主线程。线程是一个队列，一个接一个地处理任务。下一个任务必须等到前面的任务完成。

有什么风险？如果一个任务出现问题并崩溃，则整个线程将停止，并导致整个进程终止。

![20231108160553](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108160553.png)

在多线程进程中，任务可以同时在多个线程中更快地处理。所有线程共享内存中的数据。

如果其中一个线程停止，则进程将终止并存在。

## Browser in early age 早年的浏览器

![20231108160635](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108160635.png)

在现代浏览器出现之前，我们使用的是单进程浏览器。IE6 是最受欢迎的一个。

IE6 中没有选项卡。由于单进程限制，每个网页都分配了一个窗口。

在单进程浏览器中，进程需要处理所有事情，包括页面呈现、JavaScript 执行等。

这种架构带来了三个问题：不稳定、性能低下和不安全。

## Instability 不稳定

当线程崩溃时，进程将停止，整个浏览器将冻结。

JavaScript 和 Flash 插件以崩溃页面线程而闻名。发生这种情况时，强制浏览器退出是唯一的解决方案。这就是我们的 IE6 体验所发生的事情。

## Low performance 性能低下

有些 JavaScript 需要一段时间才能完成。执行脚本时，它会阻止页面呈现线程。浏览器必须等到脚本完成执行，然后才能继续显示页面。最坏的情况是 JavaScript 中的无限循环。

此外，内存泄漏会导致性能问题。浏览器内核很复杂。垃圾回收有时无法正常工作。您使用浏览器的时间越长，从系统中占用的内存就越多，您会觉得浏览器的响应时间越来越长。

## Insecurity 不安全

邪恶的插件可以通过单进程浏览器以管理员权限轻松访问您的操作系统。此外，当您与浏览器交互时，JavaScript 可以读取敏感信息，例如在您输入密码时读取输入。

解决方案是什么？开发人员制作了多进程浏览器，也称为现代浏览器。

## Multiprocess browser 多进程浏览器

![20231108161017](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108161017.png)

在多进程浏览器中，我们有多个进程。在进程之间，它们通过进程间通信 （ Inter-process communication, IPC） 进行通信。每个进程都运行不同的线程。

![20231108161047](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108161047.png)

如今，我们在浏览器中运行了以下进程：

- Browser process - 浏览器进程
- Renderer process - 渲染器进程
- Plugin process - 插件进程
- GPU process - GPU 进程
- Network process - 网络进程
- Device process - 设备进程
- Video process (one of the utility processes) 视频进程（实用程序进程之一）
- Audio process (one of the utility processes) 音频进程（实用程序进程之一）

看起来很多，但让我们来看看三个基本过程：浏览器进程、渲染器进程和插件进程。

以下是浏览器上的进程及其“区域”的图示。

![20231108161214](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108161214.png)

多进程体系结构中有两个重大变化。

- 将渲染器和插件进程与浏览器进程分开。
- 将渲染器和插件进程放置在沙箱中。

让我们看看这些更改如何解决单进程浏览器中的问题。

## Fight against the instability 与不稳定作斗争

现代浏览器将渲染器和插件进程与浏览器进程分开。

渲染器进程负责页面渲染和 JavaScript 执行。当它崩溃时，只有相应的浏览器选项卡停止。您仍然可以浏览其他选项卡，因为浏览器进程保持不变。

这种分离处理也适用于插件。每个插件都有一个单独的过程。例如，如果 Flash 插件崩溃，它不会再影响您的浏览体验。

## Improve the low performance 改善低性能

每个选项卡都有一个单独的渲染器进程。当我们打开多个选项卡时，浏览器会创建多个渲染器进程。

来自不同页面的 JavaScript 在它们自己的渲染器进程中运行。如果其中一个页面存在阻止其进程的 JavaScript 问题，则该问题确实会阻止其他选项卡中的页面呈现。多个插件进程以相同的方式提供帮助。

:::danger
上面这局有疑问。【如果其中一个页面存在阻止其进程的 JavaScript 问题，则该问题确实会阻止其他选项卡中的页面呈现。】这句话对吗？

原文：

JavaScript from different pages are running in their own renderer process. If one of the pages has a JavaScript issue blocking its process, the problem does block page rendering in other tabs. Multiple plugin processes help in the same way.
:::

内存泄漏怎么样？关闭选项卡会触发垃圾回收。系统将释放所有占用的内存。

## Security with sandboxing 沙盒的安全性

所有高风险组件都将移动到渲染器进程并在沙盒中运行，包括 HTML 解析、JavaScript 虚拟机和文档对象模型 （DOM）。

同时，系统功能被放置在浏览器进程中，包括持久化存储、用户交互和网络。

渲染器和插件进程中的恶性代码很难触及您的操作系统。

例如，渲染器进程或插件进程不能直接在沙箱中从网络和文件系统请求资源。浏览器进程将处理请求，并确保以安全的方法进行。

以下是 [Chromium 浏览器的安全架构](http://seclab.stanford.edu/websec/chromium/chromium-security-architecture.pdf)中渲染器进程和浏览器进程的完整列表。

渲染器进程负责
- HTML parsing - HTML 解析
- CSS parsing - CSS解析
- Image decoding - 图像解码
- JavaScript interpreter - JavaScript 解释器
- Regular expressions - 正则表达式
- Layout -布局
- Document Object Model - 文档对象模型
- Rendering -渲染
- SVG - SVG
- XML parsing - XML 解析
- XSLT - XSLT

浏览器进程负责
- Cookie database - Cookie数据库
- History database - 历史数据库
- Password database - 密码数据库
- Window management - 窗口管理
- Location bar - 位置栏
- Safe Browsing blacklist 安全浏览黑名单
- Network stack - 网络堆栈
- SSL/TLS - SSL/TLS协议
- Disk cache - 磁盘缓存
- Download manager - 下载管理器
- Clipboard -剪贴板

## Latest improvements on the browser architecture 浏览器架构的最新改进

## Site isolation 站点隔离

2018 年，Chrome 发布了 [站点隔离]（https://www.chromium.org/Home/chromium-security/site-isolation） 功能，以保护用户免受安全漏洞的侵害。

用于在页面上共享相同呈现器进程的跨站点 iframe，这意味着它可以访问相同的内存空间。借助 [Meltdown 和 Spectre](https://developers.google.com/web/updates/2018/02/meltdown-spectre)，跨站点 iframe 可以绕过[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)。

![20231108164628](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108164628.png)

从 Chrome 67 开始，所有跨站点 iframe 都会获得一个独立的渲染器进程。2019 年，Firefox 启动了 Project Fission，这是一个与集成站点隔离功能相关的项目。

## Same-site shares the renderer process 同一站点共享渲染器进程

多个渲染器进程需要计算机中的更多资源，因为每个渲染器进程在内存中保存共享基础结构的副本。 

在某种程度上，这些副本在内存中是冗余的。同时，它们是安全性和性能的权衡。在浏览器中打开 1,000 个选项卡时，1,000 个渲染器进程可能会导致性能问题。

为了最大程度地减少对性能的影响，当您访问具有相同域的网站时，浏览器会尝试重用现有的呈现器进程。

例如，当您访问 [Medium](http://medium.com) 网站时，您的浏览器会为其创建一个渲染器进程。然后你点击网站上的一个链接，打开一个新标签，浏览器将重用相同的渲染器进程。

当您手动打开新标签页并输入来自同一网域的网址时，此规则不适用。在这种情况下，浏览器会为其创建一个新的渲染器进程。

## Architecture in 2021 and the future (2021 年的建筑和未来)

Chrome 现在有更多进程单独运行。

除了浏览器、渲染器和插件进程之外，该团队还将 GPU、网络和实用程序进程与浏览器进程分开。这就是为什么我们看到许多进程只需打开一个选项卡即可运行的原因。

通过解耦进程，我们制作了一个更快、更安全的浏览器。Chrome 团队决定在这条道路上走得更远。

面向服务的架构由 Chrome 团队初始化，在架构中引入了 Chrome Foundation Service。它是一种模块化架构。

![20231108165040](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108165040.png)

在这个架构中，我们有更多的流程，其中大多数都应用了沙盒。更多的渲染器进程意味着从您的计算机中获取更多资源。当笔记本电脑没有足够的资源时，该团队还引入了优雅的降级。

SOA 是一个大胆的举动，团队需要数年时间才能完成这一变化。目前，该团队正在逐步改进浏览器，使其朝着 SOA 的方向发展。

## What is the takeaway? 有什么收获？

浏览器由进程和线程组成。复杂的浏览器机制建立在它们之上。
