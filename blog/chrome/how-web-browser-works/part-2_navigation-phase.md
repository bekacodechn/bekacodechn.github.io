# Web 浏览器如何逐步工作 — 导航阶段（第 2 部分）

`metadata:`

**原标题:** How web browser works step by step — navigation phase (part 2)

**链接:** https://cabulous.medium.com/how-does-browser-work-in-2019-part-ii-navigation-342b27e56d7b

---

![20231108165339](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108165339.png)

在上一篇文章中，我们知道 Web 浏览器由各种进程组成。它是 Web 浏览器架构的静态视图。

但是，浏览器不是静态的。它是对用户交互的主动响应。当我们与浏览器交互时，不同的进程开始作为一个团队一起工作，最后在我们面前显示一个网页。

在这篇文章中，我们将看到流程如何在导航中协同工作。

导航是我们将深入研究的下一个黑匣子。输入是 URL，输出是网页。

## A high-level view of 5 steps 5 个步骤的高级视图

简而言之，这 5 个步骤是：

1.  Handling user input 处理用户输入
2.  Sending a URL request 发送 URL 请求
3.  Preparing a renderer process  准备渲染器进程
4.  Committing navigation 提交导航
5.  Rendering page “渲染”页

![20231108170604](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108170604.png)

在这些步骤中，涉及浏览器中的三个进程：

- 浏览器进程处理用户输入（步骤 1）。此外，它还管理其他进程（步骤 3）。
- 网络进程负责处理 URL 请求（步骤 2）。
- 渲染器进程侧重于呈现页面（步骤 4 和 5）。

导航从步骤 2 开始到步骤 4。

更具体地说，它在发送 URL 请求时开始，在浏览器开始呈现页面时结束。

## Step 1: Handling user input 处理用户输入

在导航开始之前，浏览器进程会分析用户输入。更具体地说，它是浏览器进程中的一个 UI 线程来完成这项工作。

![20231108170952](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108170952.png)

当用户在地址栏中输入内容时，存在两种可能性：

*   a search query, or 搜索查询，或者
*   A URL

如果浏览器进程认为用户输入是搜索查询，它会分析关键字，使用搜索查询编写 URL，然后初始化 URL 请求。

如果它是 URL，例如 medium.com，则地址栏会根据规则将协议（HTTP 或 HTTPS）附加到它。使用该协议，地址栏现在具有完整的 URL https://medium.com。

当用户点击回车键时，浏览器进程会从地址栏中读取 URL。它通过[进程间通信 （ inter-process communication, IPC）](https://en.wikipedia.org/wiki/Inter-process_communication) 将 URL 请求发送到网络进程。

此时，将触发“beforeunload”事件。标签图标变为加载旋转器。网页保持不变。

## Step 2: Sending a URL request 发送 URL 请求

现在，网络进程从浏览器进程接收命令以处理 URL 请求。

![20231108171435](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108171435.png)

在连接到互联网之前，网络进程首先查看浏览器缓存，并查看请求的资源是否已保存在本地。如果是这样，网络进程会将缓存的资源返回给浏览器进程。

如果没有，它就会开始连接互联网，初始化 DNS 查询，接收 IP 地址，并根据 IP 地址建立 TLS（传输层安全）连接。

最后，它将 URL 请求发送到服务器。

服务器在收到请求时，会根据请求生成响应，包括响应头、响应体等信息。最后，服务器将其响应发送到浏览器中的网络进程。

现在，网络进程开始解析响应标头。

## Safe Browsing and CORB 安全浏览和 CORB

此时，Chrome 会检查域和响应数据，尝试将它们与其恶意站点数据库进行匹配。

如果存在匹配项，网络进程将向浏览器发出警报并显示警告页面。

同时，[跨域读取阻塞 （ Cross Origin Read Blocking, CORB）](https://www.chromium.org/Home/chromium-security/corb-for-developers) 检查可以防止侧信道攻击。

:::tip{title=原文}
Meanwhile, a [Cross Origin Read Blocking (CORB)](https://www.chromium.org/Home/chromium-security/corb-for-developers) check happens to prevent side-channel attacks.
:::

此时，网络进程可能会遇到不同的情况。

### Case 1 — redirection 案例 1 — 重定向

根据不同的[状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)，网络进程会做出不同的选择。其中之一是重定向。

如果网络进程在响应标头中看到 301 或 302 状态代码，它将根据正确的地址发起另一个 URL 请求。确切地址位于响应标头的 Location 中。

将重复该步骤，并再次从 DNS 查找开始。

### Case 2 — Content-Type is not text/html 案例 2 — Content-Type 不是 text/html

Content-Type 存在于响应标头中，告知网络进程其响应正文中数据的数据类型。

网络进程将决定如何对响应正文做出反应。

如果 Content-Type 是 text/html，它会告诉网络进程数据是 HTML。

如果 Content-Type 是 application/octet-stream，则表示数据是字节流。通常，浏览器将其视为下载请求，并将其提交给其下载管理器。

导航结束。

### Case 3 — status code is 200 and the Content-Type is text/html 案例 3 — 状态代码为 200，Content-Type 为 text/html

网络进程继续导航。

它告诉浏览器进程一切顺利，它将开始下载文档数据。

收到此消息后，浏览器进程将进入下一步，并开始准备渲染器进程。

## Step 3: Preparing a renderer process 步骤 3：准备渲染器进程

![20231108174219](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108174219.png)

浏览器进程创建一个渲染器进程，等待来自渲染器进程的就绪信号。

同时，网络进程不断下载渲染器进程的文档。

当渲染器进程处于待机位置时，将启动下一步。

## Step 4: Committing navigation 第 4 步：提交导航

浏览器进程和渲染器进程开始协同工作，以用新文档替换旧文档。

![20231108174528](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108174528.png)

更具体地说，它有以下步骤。

1. 当渲染进程准备就绪时，它会向浏览器进程发送“提交导航”消息。该消息通知浏览器进程渲染器进程已准备好分析文档数据。
2. 收到消息后，浏览器进程开始清除旧文档。
3. 然后，从浏览器进程向渲染器进程发送确认，让它知道提交已完成。
4. 同时，浏览器进程会更新其 UI 状态。
5. 渲染器进程接收确认并开始从网络进程接收文档。
6. 渲染器进程(render process)与浏览器进程确认文档已提交。
7. 导航完成。


关于浏览器进程中的状态更新，它包括：

*   safety status (the lock icon next to the URL)  
    安全状态（URL 旁边的锁定图标）
*   address bar URL 
    地址栏网址
*   history status (the forward and back buttons)  
    历史记录状态（前进和后退按钮）
*   web page (the old page is gone and turns white)  
    网页（旧页面消失并变白）
*   store the session history on disk to facilitate the tab restore  
    将会话历史记录存储在磁盘上以方便选项卡还原

这就是为什么当我们在地址栏中输入 URL 时，上一页内容会停留一段时间的原因。在此之前，最后一页将被删除。

当渲染器进程收到提交时，它会开始解析数据、请求下载子资源和其他任务。导航完成，页面呈现阶段开始。

## Step 5: Rendering page 第 5 步：渲染页面

渲染器进程收到确认。它继续解析从网络进程中流出的文档数据，并在您面前显示一个页面。

在渲染结束时，渲染器进程会告诉浏览器进程渲染已完成。

UI线程会用网站的 favicon 替换其标签页中的加载旋转器。卸载 "事件被触发。

## Network and storage threads are not relevant in 2019 网络和存储线程与 2019 年无关

在 [Google 的一篇文章](https://developers.google.com/web/updates/2018/09/inside-browser-part2)中，网络和存储线程在 2018 年的浏览器进程中运行。

根据 [Chromium 文档](https://chromium.googlesource.com/chromium/src/+/master/services/README.md)，两者现在已分离并作为进程运行。

只有当环境没有足够的资源时，浏览器才会优雅地降级到以前的体系结构，其中网络和存储作为线程工作。

## What is the takeaway? 有什么收获？

![20231108175556](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108175556.png)

显示页面有五个步骤：

1. 浏览器进程**处理用户输入**，编写 URL 请求。
2. 网络进程发送 URL 请求。导航开始。
3. 浏览器进程在收到服务器响应后创建渲染器进程。渲染器进程处于待机位置，网络进程接收到文档。
4. 浏览器进程**提交导航**。网络进程开始将文档数据发送到渲染器进程。导航结束。
5. 渲染器进程呈现文档。

## References 引用

*   [Inside look at modern web browser (part 2) | Google Developers  
    现代 Web 浏览器内部介绍（第 2 部分） |Google 开发者](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
*   [What is a byte stream actually? — Software Engineering Stack Exchange  
    字节流到底是什么？— 软件工程堆栈交换](https://softwareengineering.stackexchange.com/questions/216597/what-is-a-byte-stream-actually#216600)
*   [Safe Browsing — Google Safe Browsing  
    安全浏览 — Google 安全浏览](https://safebrowsing.google.com/)
*   [Cross-Origin Read Blocking for Web Developers — The Chromium Projects  
    面向 Web 开发人员的跨域读取阻止 — Chromium 项目](https://www.chromium.org/Home/chromium-security/corb-for-developers)
