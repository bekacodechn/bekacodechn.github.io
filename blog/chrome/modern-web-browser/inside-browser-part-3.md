# 现代网络浏览器内幕 — 3

`metadata:`

**原标题:** Inside look at modern web browser (part 3)

**链接:** https://developer.chrome.com/blog/inside-browser-part3/

---

这是探讨浏览器工作原理的 4 篇系列博客中的第 3 篇。在此之前，我们介绍了[多进程架构](./inside-browser-part-1.md)和[导航流程](./inside-browser-part-2.md)。在本篇博文中，我们将探讨渲染器进程内部发生的事情。

渲染器进程涉及网络性能的许多方面。由于渲染器进程内部发生了很多事情，因此本篇文章只是一个总体概述。如果您想深入了解，[Web Fundamentals 的 Performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) 部分有更多资源。

## Renderer processes handle web contents (渲染器进程处理网络内容)

渲染器进程负责标签页内发生的一切。在渲染器进程中，主线程负责处理发送给用户的大部分代码。如果使用 Web Worker 或service worker，有时 JavaScript 的部分代码会由工作线程处理。合成器和光栅线程(Compositor and raster threads)也会在渲染器进程中运行，以高效流畅地呈现页面。

渲染器进程的核心工作是将 HTML、CSS 和 JavaScript 转化为用户可以交互的网页。

![20231113140048](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113140048.png)
*图 1：包含主线程、工作线程、合成器线程和光栅线程的渲染器进程*

## Parsing

### Construction of a DOM (构建 DOM)

当渲染器进程收到导航提交信息并开始接收 HTML 数据时，主线程就会开始解析文本字符串（HTML），并将其转化为文档对象模型（DOM）。

DOM 是浏览器对页面的内部表示，也是网络开发人员可以通过 JavaScript 与之交互的数据结构和 API。

将 HTML 文档解析为 DOM 是由 HTML 标准定义的。您可能已经注意到，向浏览器输入 HTML 从不出错。例如，缺少收尾的 `</p>` 标记就是有效的 HTML。错误的标记如 Hi！`<b>我是 <i>Chrome</b>!<b>我是<i>Chrome</i></b><i>！</i>`。这是因为 HTML 规范旨在优雅地处理这些错误。如果您想知道这些错误是如何处理的，可以阅读 [HTML 规范中的 "解析器中的错误处理和奇怪情况介绍](https://html.spec.whatwg.org/multipage/parsing.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser) "部分。

### Subresource loading 子资源加载

网站通常使用外部资源，如图片、CSS 和 JavaScript。这些文件需要从网络或缓存中加载。主线程可以在解析建立 DOM 时逐个请求找到的文件，但为了加快速度，"预加载扫描器(`preload scanner`) "会同时运行。如果 HTML 文档中有 `<img>` 或 `<link>` 等内容，预加载扫描器就会偷看 HTML 解析器生成的标记，并向浏览器进程中的网络线程发送请求。

![20231113141203](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113141203.png)
*图 2：主线程解析 HTML 并构建 DOM 树*

### JavaScript can block the parsing

当 HTML 解析器发现 `<script>` 标记时，它会暂停对 HTML 文档的解析，然后加载、解析并执行 JavaScript 代码。为什么？因为 JavaScript 可以通过 `document.write()` 等方式改变文档的形状，从而改变整个 DOM 结构（HTML 规范中的[解析模型概述](https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model)有一个很好的示意图）。这就是 HTML 解析器必须等待 JavaScript 运行后才能继续解析 HTML 文档的原因。如果您对 JavaScript 执行过程中发生的事情感到好奇，[V8 团队有相关的讲座和博文](https://mathiasbynens.be/notes/shapes-ics)。

## Hint to browser how you want to load resources 提示浏览器如何加载资源

网络开发人员可以通过多种方式向浏览器发送提示，以便更好地加载资源。如果 JavaScript 不使用 `document.write()`，可以在 `<script>` 标签中添加 `async` 或 `defer` 属性。这样，浏览器就会异步加载并运行 JavaScript 代码，而不会阻塞解析过程。如果合适，也可以使用 [JavaScript 模块](https://developers.google.com/web/fundamentals/primers/modules)。`<link rel="preload">` 是一种告知浏览器当前导航肯定需要该资源，并希望尽快下载的方式。有关这方面的更多信息，请参阅 "[资源优先级--让浏览器帮助您](https://developers.google.com/web/fundamentals/performance/resource-prioritization)"。

## Style calculation

有了 DOM 还不够，因为我们还可以用 CSS 为页面元素设计样式。主线程会解析 CSS 并确定每个 DOM 节点的计算样式。这是关于根据 CSS 选择器对每个元素应用何种样式的信息。您可以在 DevTools 的 `computed` 部分看到这些信息。

![20231113142536](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113142536.png)
*图 3：主线程解析 CSS 以添加计算样式*

即使不提供任何 CSS，每个 DOM 节点都有一个计算样式。`<h1>` 标签的显示尺寸比 `<h2>` 标签大，而且每个元素都定义了边距。这是因为浏览器有一个默认样式表。如果你想知道 Chrome 浏览器的默认 CSS 是什么样的，[请点击此处查看源代码](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/html/resources/html.css)。

## Layout

现在，渲染器进程知道文档的结构和每个节点的样式，但这还不足以渲染页面。想象一下，你正试图通过电话向你的朋友描述一幅画。"有一个红色的大圆和一个蓝色的小方块 "这些信息并不足以让你的朋友知道这幅画到底是什么样子的。

![20231113142825](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113142825.png)
*图 4：一个人站在一幅画前，电话线连接着另一个人*

布局是一个查找元素几何形状的过程。主线程会浏览 DOM 和计算样式，并创建布局树，其中包含 x y 坐标和边界框尺寸等信息。布局树的结构可能与 DOM 树相似，但它只包含与页面上可见内容相关的信息。如果应用了 `display:none`，那么该元素就不属于布局树的一部分（但如果元素的`visibility: hidden`，那么它就在布局树中）。同样，如果应用了内容类似 `p::before{content: "Hi!"}` 的伪类，那么即使 DOM 中没有该元素，布局树中也会包含它。

![20231113143048](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113143048.png)
*图 5：主线程通过计算样式查看 DOM 树并生成布局树*

确定页面布局是一项具有挑战性的任务。即使是最简单的页面布局，如从上到下的块状流程，也要考虑字体的大小和换行的位置，因为这些都会影响段落的大小和形状，进而影响下一个段落的位置。

![Kapture2023-11-13at15.10.07](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/Kapture2023-11-13at15.10.07.gif)

CSS 可以让元素浮动到一侧，遮盖溢出项，改变书写方向。可想而知，布局阶段的任务是多么艰巨。在 Chrome 浏览器中，整个工程师团队都在为布局而努力。如果你想了解他们的工作细节，[BlinkOn 大会](https://www.youtube.com/watch?v=Y5Xa4H2wtVA)上的一些演讲已经录制下来，非常有趣。

## Paint

![20231113151223](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113151223.png)
*图 7：一个人在画布前拿着画笔，纠结是先画圆还是先画方*

有了 DOM、样式和布局还不足以渲染页面。比方说，你正试图再现一幅画。你知道元素的大小、形状和位置，但你仍然需要判断绘制它们的顺序。

例如，可能会为某些元素设置 `z-index`，在这种情况下，按照 HTML 中写入的元素顺序绘制将导致不正确的渲染。

![20231113152043](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113152043.png)
*图 8：按 HTML 标记顺序显示的页面元素，由于未考虑 z 索引，导致呈现的图像错误*

在此绘制步骤中，主线程遍历布局树以创建绘制记录。绘画记录是对绘画过程的记录，“先背景，后文字，再矩形”。如果您使用 JavaScript 在 `<canvas>` 元素上绘图，您可能会熟悉此过程。

![20231113152720](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113152720.png)
*图 9：主线程穿过布局树并生成喷漆记录*

### Updating rendering pipeline is costly 更新渲染管道成本高昂

![Kapture2023-11-13at15.30.26](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/Kapture2023-11-13at15.30.26.gif)
*Figure 10: DOM+Style, Layout, and Paint trees in order it is generated*

渲染流水线中最重要的一点是，每一步都要使用前一步操作的结果来创建新数据。例如，如果布局树中的某些内容发生了变化，那么就需要为文档中受影响的部分重新生成绘制顺序。

如果要对元素进行动画处理，浏览器必须在每一帧之间运行这些操作。我们的大多数显示器每秒刷新屏幕 60 次（60 帧/秒）；当您在每一帧屏幕上移动东西时，人眼会觉得动画很流畅。但是，如果动画错过了中间的帧，页面就会显得 "不流畅"。

![20231113153611](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113153611.png)
*图 11：时间轴上的动画帧*

即使您的渲染操作能跟上屏幕刷新的速度，这些计算也是在主线程上运行的，这意味着当您的应用程序运行 JavaScript 时，它可能会被阻塞。

![20231113153703](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113153703.png)
*图 12：时间轴上的动画帧，但其中一帧被 JavaScript 屏蔽*

您可以使用 requestAnimationFrame() 将 JavaScript 操作分成小块，并安排在每一帧运行。有关此主题的更多信息，请参阅[优化 JavaScript 执行](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)。您还可以在 [Web Worker 中运行 JavaScript](https://www.youtube.com/watch?v=X57mh8tKkgE)，以避免阻塞主线程。

![20231113153901](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113153901.png)
*图 13：带动画帧的时间轴上运行的 JavaScript 小块*

## Compositing 合成

### How would you draw a page?

既然浏览器已经知道了**文档的结构**、**每个元素的样式**、**页面的几何形状**以及**绘制顺序**，那么它是如何绘制页面的呢？将这些信息转化为屏幕上的像素称为**光栅化(rasterizing)**。

![Animation-of-naive-rastering-process](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/Animation-of-naive-rastering-process.gif)
*图 14：天真的光栅化过程动画*

处理这种情况的一个简单方法也许是在视口内栅格化部分内容。如果用户滚动页面，则移动光栅化的框架，并通过更多的光栅化来填充缺失的部分。Chrome 浏览器在发布之初就是这样处理光栅化的。不过，现代浏览器运行的是一种更复杂的程序，称为合成。

### What is compositing(合成)

![202311131613895](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311131613895.gif?imageSlim)
*图 15：合成过程动画*

合成是一种技术，它将页面的各个部分分层，分别栅格化，然后在称为合成器线程的单独线程中合成为一个页面。如果发生滚动，由于图层已经光栅化，只需合成一个新的帧即可。通过移动图层和合成新帧，动画也可以用同样的方法实现。

您可以在 DevTools 中使用 ["层 "面板](https://blog.logrocket.com/eliminate-content-repaints-with-the-new-layers-panel-in-chrome-e2c306d4d752?gi=cd6271834cea)查看网站是如何划分成不同层的。

### Dividing into layers (分层)

为了找出哪些元素需要在哪些图层中，主线程遍历布局树以创建图层树（这部分在DevTools性能面板中称为“更新图层树”）。如果页面中应该是单独图层的某些部分（如幻灯片侧菜单）没有得到一个，那么您可以使用CSS中的`will-change`属性向浏览器提示。

![20231113161743](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113161743.png)
*图16：主线程遍历布局树生成层树*

你可能很想给每个元素都添加图层，但过多的图层中进行合成可能会导致运行速度比每帧光栅化页面的小部分更慢，因此衡量应用程序的渲染性能至关重要。有关此主题的更多信息，请参阅 ["坚持只使用合成器属性 "和 "管理图层数"](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)。

### Raster and composite off of the main thread 主线程的光栅和合成

一旦创建了图层树并确定了绘制顺序，主线程就会将这些信息提交给合成器线程。然后，合成器线程会对每个图层进行光栅化处理。一个图层可能很大，比如整个页面的长度，因此合成器线程会将它们划分为图块，并将每个图块发送给光栅线程。光栅线程对每个图层进行光栅化，并将其存储在 GPU 内存中。

![20231113162334](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113162334.png)
*图 17：光栅线程创建瓦片位图并发送给 GPU*

合成器线程可以优先处理不同的光栅线程，这样视口中（或附近）的内容就可以优先光栅化。一个图层还可针对不同的分辨率设置多个栅格，以处理放大等操作。

一旦平铺完成，合成器线程就会收集称为绘制四边形的平铺信息，以创建合成器框架(compositor frame)。

- Draw quads(绘制四边形): 包含的信息包括磁贴(tile)在内存中的位置，以及在考虑页面合成的情况下在页面的哪个位置绘制磁贴。
- Compositor frame(合成帧): 绘制四边形的集合，表示页面的一个*Frame*。

然后，合成器框架通过 IPC 提交给浏览器进程。此时，可以从 UI 线程添加另一个合成器框架以进行浏览器 UI 更改，或者从其他渲染器进程添加以进行扩展。这些合成器帧被发送到 GPU 以将其显示在屏幕上。如果出现滚动事件，合成器线程将创建另一个合成器帧发送到 GPU。

![20231113163254](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231113163254.png)
*图 18：合成器线程创建合成帧。帧被发送到浏览器进程，然后再发送到 GPU*

**合成的好处是无需主线程参与。合成线程无需等待样式计算或 JavaScript 的执行。这就是为什么[compositing only animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)被认为是性能最流畅的动画。如果布局或绘制需要再次计算，则主线程必须参与。**

## Wrap Up

在这篇文章中，我们介绍了从解析到合成的渲染管道。希望您现在有能力阅读更多有关网站性能优化的内容。

在本系列的下一篇也是最后一篇文章中，我们将更详细地介绍合成器线程，并了解用户输入（如鼠标移动和点击）时发生的情况。
