# 浏览器如何逐步工作 — 加载阶段的优化（第 4 部分）

`metadata:`

**原标题:** How does browser work step by step — optimization in the loading stage (part 4)

**链接:** https://cabulous.medium.com/how-does-browser-work-in-2019-part-4-more-about-rendering-phase-fbba0d94a174

---

了解浏览器的工作原理有什么意义？我们可以自信地提高性能。

在使用浏览器时，通常，我们会打开一个URL，与页面交互，并在获取我们需要的内容后关闭选项卡。

以下是用户与浏览器之间整个交互过程中的三个阶段：

1. 加载阶段 — 当我们输入 URL 时，它就开始了。
2. 交互阶段 — 当我们可以浏览、点击页面并与页面交互时，它就开始了。
3. 关闭阶段 — 当我们单击选项卡上的关闭按钮时，它就开始了。

Web 前端优化侧重于加载和交互阶段。

从导航到渲染阶段，关键的优化点是 DOM 构建阶段。许多因素可能会阻碍 HTML 解析并延长整个渲染阶段。当它发生时，作为用户，我们不得不盯着白屏看一会儿。

## DOM construction blocking (DOM 构造阻塞)

在上一篇文章中，我们专注于渲染阶段，并跳过了 HTML 解析的一些细节。

HTML 文档包含的不仅仅是 HTML，包括 CSS 样式和 JavaScript 文件。两者都可能阻塞 DOM 构建并降低 Web 性能。

### How JavaScript blocks the DOM construction?  (JavaScript 如何阻止 DOM 构造？)

让我们从一个简单的例子开始，一个内联 JavaScript。

```html
<div id='target'>old text</div>
<script>
  const elem = document.getElementById('target')；
  elem.innerText = 'new text';
</script>
```

在此示例中，脚本替换元素的内部文本。它修改了 DOM 树。

![20231108200019](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200019.png)

HTML 解析器负责“翻译”HTML 文档。当看到 JavaScript 脚本时，HTML 会停止解析 DOM 并立即执行它。执行完成后，HTML 解析器将继续解析 HTML 文档的其余部分。

如果它是链接到脚本标签的 JavaScript 文件怎么办？

```html
<div id='target'>old Text</div>
<script src='script.js'></script>
```

![20231108200446](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200446.png)

当看到链接的脚本文件时，HTML 解析器会再次停止 DOM 树构造。同时，渲染器进程与网络进程通信，要求从服务器下载 JavaScript 文件。当网络进程传送数据时，渲染器进程会先执行脚本，然后再继续解析 HTML 文件。

下载过程增加了在浏览器执行 JavaScript 的时间之上构建 DOM 树的时间。

### How CSS blocks the DOM construction?  (CSS 如何阻止 DOM 构造？)

CSS 不会阻塞 DOM 构造。当与 JavaScript 结合使用时，它确实如此。

```html
<style src='styles.css'></style>
<div id='target'>Old text</div>
<script>
  const elem = document.getElementById('target')；
  elem.style.color= 'blue':
</script>
```

在这种情况下，HTML 中引用了 CSS 样式文件，JavaScript 修改了“styles.css”文件中的样式。

**渲染器进程需要准备好计算样式，然后才能执行 JavaScript 来修改样式。因此，在解析 CSS 文件并完成 JavaScript 文件执行之前，HTML 解析器无法继续。**

在开发网站时，我们的 HTML 文档中不可避免地会包含链接文件。

为了加快该过程，**预加载扫描程序**在构建 DOM 树时同时快速扫描文档数据。如果预加载扫描程序找到任何链接的文件（例如 CSS 和 JavaScript 文件），它会创建与网络进程的 IPC 连接，并从服务器请求数据。

渲染器进程何时恢复 DOM 结构？这取决于下载时间最长的文件。

:::danger
原文：

When does the renderer process resume the DOM structuring? It depends on the file taking the most extended length of download time.

...这取决于下载时间最长的文件。 

疑问：下载不是通过预加载扫描程序发现后和构建DOM的过程并行下载的吗？为什么还会阻塞DOM结构(的构建?)？
:::

假设需要下载两个文件。一个文件需要 1 秒，另一个文件需要 3 秒。总计为 3 秒。

## Optimization in the loading stage is about reducing the download time (加载阶段的优化是为了减少下载时间)

在构建 DOM 树时，最耗时的部分是下载链接文件和执行 JavaScript。

### Key indicator — round-trip delay time (RTD) 【关键指标 — 往返延迟时间 （RTD）】

在优化方面，我们需要一个关键指标来衡量它，这样我们才能知道解决方案是否有效。

[往返延迟时间 （RTD）](https://en.wikipedia.org/wiki/Round-trip_delay_time) 或往返时间 （RTT） 是电信中的通用术语，用于测量发送和接收信号所需的时间长度。

在我们的上下文中，时间测量从网络进程向服务器发送请求时开始，到收到来自服务器的完整确认时结束。RTD 是完成此过程所需的总时间长度。

由于 TCP 的功能，数据是以块形式发送的。以CSS文件为例，大小为0.1M。通过 HTTP 发送的每个分块数据包的大小通常约为 14KB。一个 0.1M 的文件分为 8 个包。我们可以说 CSS 文件需要 8 个 RTD 才能完成。

下载两个文件怎么样？一个 CSS 文件是 9KB，因此需要 1 RTD 才能下载。另一个 JavaScript 文件是 15KB，需要 2 RTD 才能完成下载。由于下载是并行进行的，因此总时间为 2 RTD。

这里的计算并不完全准确，因为我们忽略了 TCP 连接时间和服务器响应时间，但你明白了。

考虑到RTD，现在我们可以谈谈优化：

*   Reduce the number of key resources  
    减少关键资源的数量
*   Minimize the size of key resources  
    最小化关键资源的大小

### Reduce the number of key resources (减少关键资源的数量)

有哪些关键资源？加载页面时需要任何 CSS 和 JavaScript 文件。没有它们，您的网站就坏了。

为了减少链接文件，我们可以将基本的 CSS 和 JavaScript 数据直接移动到 HTML 文件中，以避免下载过程。(意思是用内联的方式书写)

如果某些链接的 JavaScript 文件没有改变 DOM 树和样式，请用“defer”和/或“async”标记它们，这样它们就不会阻止 DOM 构造。

defer script 在 DOM 准备就绪时但在“DOMContentLoaded”事件之前执行。async script 独立于其他脚本和事件。一旦可用，它就会运行。

一些人认为，根据媒体查询将大型CSS文件分成较小的文件会有所帮助。这并不完全正确。即使查询返回false，带有媒体查询的样式表仍然会下载。只是内容没有应用样式。因此，它不会减少下载请求。

### Reduce the size of key resources (减小关键资源的大小)

文件大小越小，RTD越少。我们可以通过压缩 CSS 和 JavaScript 文件来实现它。此外，大多数压缩工具会删除数据中的注释，这有助于减小文件大小。

## References 引用

*   [Inside look at modern web browser (part 3)  
    现代 Web 浏览器内部介绍（第 3 部分）](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
*   [Inside look at modern web browser (part 4)  
    深入了解现代 Web 浏览器（第 4 部分）](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
































































