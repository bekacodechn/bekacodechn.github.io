# 浏览器如何逐步工作 — 渲染阶段（第 3 部分）


`metadata:`

**原标题:** How does browser work step by step [latest] — rendering phase (part 3)

**链接:** https://cabulous.medium.com/how-does-browser-work-in-2019-part-iii-rendering-phase-i-850c8935958f

---

![20231108180639](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108180639.png)

在上一篇文章中，我们看到了导航阶段。三个流程协同工作，为下一阶段交付文档。

在这篇文章中，我们将打开渲染阶段的盒子，看看里面有什么。

## From document to web page — 8 sub-phases 从文档到网页 — 8 个子阶段

![20231108180816](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108180816.png)

渲染阶段包括 8 个子阶段：

1.  DOM construction **DOM 构造**
2.  Style computation 样式计算
3.  Layout 布局
4.  Layer 层
5.  Paint 绘制
6.  Tilling 耕作
7.  Raster 网 格
8.  Draw Quad and display 绘制四边形并显示

渲染器进程中的两个线程涉及：

- 主线程负责 1-5 个阶段
- 合成器线程管理 6-8 个阶段

![20231108181205](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108181205.png)

## Phase 1: DOM construction 第 1 阶段：DOM 构建

![20231108181234](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108181234.png)

输入是网络进程中的 HTML 文档，输出是 DOM 树。

为什么要使用 DOM 树？浏览器不会说 HTML。渲染过程首先需要将 HTML 文档 "翻译 "成浏览器可以理解的内容。

这就是 DOM 树。

让我们看一个例子。

```html
<html>
<body>
   <h1>Hello world!</h1>
   <div>
       <p>
           It is a message from
           <span>the web</span>
       </p>
   </div>
</body>
</html>
```

![20231108181419](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108181419.png)

该示例的DOM树如图所示。

DOM 树是 HTML 代码的表示形式。我们可以通过在 Chrome 浏览器控制台中输入 "document "来访问它。

DOM 树存在于内存中。因此，JavaScript 可以访问和编辑它。

## Phase 2: Style computation 第 2 阶段：样式计算

![20231108181607](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108181607.png)

输入是 CSS 样式，输出是计算后的样式结构。

它有三个步骤。

### Step 1: “Translating” CSS 第 1 步：“翻译”CSS

与 HTML 相似，浏览器不会说 CSS。翻译的结果就是样式表。

在 Chrome 浏览器控制台中输入 "document.styleSheets"，我们就能看到所有已解析的样式表。

这些样式表来自

- a source linked in the <link> tag, (在 `<link>` 标记中链接的源代码、)
- styles inside of a <style>, and (内的样式，以及)
- inline styles (内联样式)

与 DOM 树一样，样式表看起来像 JavaScript 对象结构，可以在内存中访问和编辑。

![20231108182010](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108182010.png)

以 Medium 主页为例。它有 11 个样式表。第一个来自 `<link>` 标签，其余的都是 `<style>` 标签内的样式。

### Step 2: standardizing values and unites 步骤 2：统一价值观和统一标准

我们在 CSS 中使用各种数值和单位。

- 宽度： 50%
- padding：2em 0
- font-size: 1rem

它们是相对值。

在这一步，所有相对值都会转换为绝对值，即像素。

为什么是像素？在渲染阶段结束时，浏览器会在屏幕上显示位图。位图由像素组成。

现在是计算的时候了。

在标准化结束时，先前的 CSS 值将变为以下值：

- width: 500px（假设其父元素的宽度为 1000px。）
- padding：32px 0（假设元素的字体大小为 16px。）
- font-size: 16px（假设根元素的字体大小为 16px。）

### Step 3: style computation 步骤 3：样式计算

![20231108182642](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108182642.png)

最后，渲染器程序会计算所计算的样式，并将其附加到每个元素上。

为什么要计算样式？CSS 是层叠样式表的缩写。层叠是指元素从其祖先那里继承一些样式，并用自己的样式覆盖其中的一部分。

渲染器程序会根据层叠规则计算所有样式。然后，它会为每个元素生成一个最终计算样式的列表。

例如，一个元素从其祖先那里继承了 font-size: 16px。其自身的字体大小为 32px。计算出的字体大小样式就是 font-size: 32px。

![20231108182859](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108182859.png)

图片显示的是 Medium 主页上 h2 元素的计算样式列表。

计算完成后，最终结果是一个计算样式列表。我们可以在 Chrome 浏览器控制台中查看。

## Phase 3: Layout 布局

![20231108183005](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108183005.png)

在此阶段，输入是 DOM 树和计算出的样式。输出则是包含计算布局信息的布局树。

### Step 1: constructing the layout tree 步骤 1：构建布局树

布局树看起来就像 DOM 树的复制品。

有哪些不同之处呢？首先，DOM 树中的 "不可见 "元素不会包含在布局树中。

例如，布局树中不会包含 display: none 的元素。这与 `<header>` 标签内的所有元素一样。但有一个例外：在布局树中包含 visibility: hidden; 的元素。

其次，某些 CSS 属性会将内容添加到布局中。

以伪类为例，`div::after {content：'我在这里';}`会创建一个包含在布局树中的内容，尽管它并不存在于 DOM 树中。

### Step 2: calculating the geometry information 步骤 2：计算几何体信息

要在空白的画布上画出一个盒子，我们需要知道：

- 起始 x、y 坐标，以及
- 方框的大小

布局树中的每个元素都是一个方框。

计算每个元素的最终几何形状是一项艰巨的工作。想一想吧。在 CSS 中，有许多属性可以修改元素的几何形状。

- float: left；
- 宽度： 100px；
- display: absolute；
- 以及更多...

要设计一个有效的布局系统与之配合使用，是一项具有挑战性的工作。[BlinkOn 的开发人员与我们分享了一些知识](https://www.youtube.com/watch?v=Y5Xa4H2wtVA)，如果你感兴趣的话。

主线程为我们完成了繁重的工作，并完成了所有计算。

现在，它有了一个布局树。在布局树上，每个元素都有精确的坐标和尺寸信息。

## Phase 4: Layer 图层

![20231108184128](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108184128.png)

输入是布局树，输出是图层树。

第三层是关于层的。

我们都喜欢 CSS 中的 3D 变换效果和方便的 `z-index` 属性。它们都与层有关。

如果你用过 Photoshop 或 Sketch，你一定会对图层很熟悉。浏览器中的层也有同样的概念。

而图层树则与绘制顺序有关。我们为什么要关心绘制顺序？

例如，有两个重叠的元素，元素 A 和元素 B。A 的 `z-index`是 9，比没有 z-index 属性的 B 更重要。渲染器会先在画布上绘制 B，然后再在其上绘制 A。这是一种绘制顺序。

绘制顺序对于准确显示网页至关重要。

图层树是怎样的？

![20231108184419](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108184419.png)

**从图中我们可以看到，并非所有元素都有自己的图层。绘制图层的成本很高。为了提高性能，渲染器进程只在需要时才创建图层。**

何时需要？渲染器进程会考虑两种元素。

### 具有堆叠上下文的元素

*   z-index
*   position: absolute
*   transform
*   will-change

以上是一些与堆叠上下文相关的 CSS 属性。渲染器处理过程会为具有这些属性的元素创建一个层。

你可以在 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)中查看影响层树的 CSS 属性的完整列表。

Chrome 浏览器允许我们查看网页上的层。

### 剪切元素

溢出文本元素是剪切元素的典型案例。

假设我们有一个 300px * 300px 的 div。div 框中的长文本会溢出。在给方框设置 `overflow: auto;` 时，我们知道文字在 div 中可以滚动。

当看到溢出的文本元素时，渲染器会创建三个层。

- 一个用于剪切文本，在 300px * 300px 区域内可见。
- 一个用于显示全文内容，以便滚动浏览。
- 一个用于滚动条

在控制台中查看更容易理解这种机制。

在 Chrome 浏览器中运行以下 HTML。

```html
<html>
<body>
    <h1>Hell world!</h1>
    <div class=“box” style=“width: 300px; height: 300px; overflow: auto;”>
        <p>Lorem ipsum vel viverra elementum ut et parturient placerat curae at vestibulum ullamcorper a ullamcorper mattis nascetur ullamcorper ut mollis rhoncus sed parturient in vestibulum vestibulum. Leo nec nisi nec erat a purus aliquam habitasse a sem id nisi ullamcorper viverra suspendisse mollis fringilla a dis a suspendisse parturient a. A commodo scelerisque mi dictum non orci suspendisse felis velit dapibus a sit facilisis velit mi libero ultrices leo consectetur tempus montes quis consequat condimentum a ullamcorper amet. Donec orci fames id consectetur nascetur parturient et magnis nunc lacinia aliquet nec dolor dictumst conubia a hac nibh consectetur habitant vel a cras.</p>
</div>
</body>
</html>
```

打开图层面板看一看。图层显示在图层面板中。尝试滚动框中的文字，你就会明白了。

![20231108185209](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108185209.png)

但实践中，只有 1. 一个用于显示全文内容，以便滚动浏览。  2. 一个用于滚动条。 左侧列表也只有3个item，比文中给出的示例少一个。
![20231108190307](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108190307.png)

最后，在完成所有计算后，渲染器进程就可以得到图层树了。

## Phase 5: Paint 绘制

![20231108190755](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108190755.png)

在这一阶段，输入是布局树和图层树，输出是 paint record.

paint record 是什么样的？

它由三部分组成：

*   Action
*   Position, including the coordinates (x, y) and the size (width, height). 位置，包括坐标（x、y）和尺寸（宽、高）。
*   Styles

For example, a paint record looks like the following:

*   Action: Draw Rect
*   Pos: 0, 0, 300, 300
*   backgroundColor: red

这是一条在（0，0）处绘制 300px * 300px 红色矩形的绘画记录。

绘制记录就像浏览器执行绘制的注释。

绘画记录是这些注释的列表，按照我们在图层树中确认的顺序排列，比如 "先背景，后矩形，再文本"。

在下一步中，合成器线程将继承主线程的工作，开始根据绘画记录生成位图。

## Phase 6: Tilling 耕作？？？

![20231108192332](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108192332.png)

平铺时，图层被分成图块，浏览器根据视口位置优先渲染。

这里有三个关键字：图层、图块和视口。

让我们以 Medium 主页为例。从 DevTools 的图层面板中，我们可以看到它有三个图层：

*   document
*   header
*   scroll bar

![20231108192510](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108192510.png)

“文档”层被分成图块。通常，图块大小为256px*256px或512px*512px。

![20231108192638](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108192638.png)

渲染所有图块都很昂贵。当前在视口中的可见图块具有优先级。

## Phase 7: Raster 第7阶段：光栅

![20231108192718](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108192718.png)

输入是图块，输出是位图。

了解图块后，合成器线程创建一个光栅线程池。多个光栅线程同时进行光栅图块。

![20231108192825](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108192825.png)

为了加快进程，光栅线程通过 IPC 向 GPU 进程发送图块。然后，GPU 进程根据图块生成位图，并将位图保存在 GPU 内存中。

位图准备就绪后，GPU 进程会将其传送回渲染进程中的合成线程，以便进行下一步处理。

## Phase 8: Draw Quad and Display  第 8 阶段： 绘制四边形并显示

![20231108193018](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108193018.png)

输入是位图，输出是合成帧。

当所有需要的位图都处理完毕后，合成器线程会向浏览器进程发送一条名为 "绘制四边形 "的命令。

在浏览器进程内部，“viz”组件接收Draw Quad命令，执行Display Compositor命令，并将合成器帧“绘制”到我们的计算机内存中。

![20231108193213](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108193213.png)

最后，浏览器进程在浏览器中显示合成器帧(compositor frame)。

令人印象深刻的是，在现代浏览器中，整个8个阶段都在1/60秒内发生。也就是16.67毫秒。

## What is the takeaway? 有什么启示？

![20231108193347](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108193347.png)

渲染的8个阶段：

1.  The main thread in the renderer process “translates” the HTML document to **DOM tree**
2.  It conveys(传送) CSS into the **computed style**
3.  It creates a **layout tree** based on the DOM tree and computed style
4.  From a layout tree, it generates a **layer tree**
5.  Lastly, it establishes **paint records**
6.  The compositor thread(合成线程) carries over the paint records, starts **tilling** based on the current viewport
7.  Multiple raster threads **raster** tiles into bitmaps with the help of the GPU process.
8.  The browser process receives the **Draw Quad** command from the browser process, then it displays a frame of the page in front of us.

## 2019 年，渲染树不再重要

如果你听说过 "渲染树"，那么它在 2019 年已不再适用。类似的概念还有图层树。

:::danger
原文：

## Render tree is not relevant in 2019

If you heard of render tree, it is not relevant anymore in 2019. A similar concept here is the layer tree.

为什么说不适用？
:::


## References

*   [Inside look at modern web browser (part 3) | Google Developers](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
*   [Understanding CSS z-index — CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
