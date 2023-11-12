# Browser Rendering Pipeline

`metadata:`

**原标题:** An Introduction to the Browser Rendering Pipeline

**链接:** https://webperf.tips/tip/browser-rendering-pipeline/

---

用户喜欢以最快的速度在屏幕上显示像素（帧），这就是网络应用程序让人感觉快速的原因！

HTML 和 CSS 是网络开发人员用来构建网络视觉体验的基础模块。但浏览器是如何将 HTML 和 CSS 转换成像素的呢？

浏览器将 HTML 和 CSS 转换为像素的过程相当不透明，因此大多数网络开发人员都不会考虑它是如何或何时运行的。

了解这一过程是构建高性能网络应用的关键，在本小贴士中，我将帮助您揭开它的神秘面纱。

## The Overall Process 整体流程

从原始的 HTML 和 CSS 文本到可视化的屏幕像素，这一路上有许多步骤和中间状态。在这个适合初学者的小贴士中，我们将讨论以下内容：

![20231110202719](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110202719.png)

## HTML Parsing

当用户浏览网页时，应用程序的入口是以文本文件形式提供给用户的 HTML 文档。

浏览器利用其 [HTML 解析器](https://webperf.tips/tip/html-parser)将 HTML 文本转换为文档对象模型或 DOM。

DOM 是一棵树，定义了文档的结构。DOM 树中的每个节点都是一个浏览器对象，可映射回 HTML 文本文件中指定的目。

例如，请看下面的 HTML 文本：

For example, consider the following HTML text:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Example Document</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div>Example Div 1</div>
    <div>Example Div 2</div>
    <div>Example Div 3</div>
</body>
</html>
```

HTML 解析器完成工作后，就会生成下面的 DOM 树：

![20231110203120](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203120.png)

将 HTML 解析到 DOM 中是主线程上的一项任务。它会以类似这样的跟踪方式直观地显示出来：

![20231110203153](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203153.png)

## CSS Object Model

HTML 在定义文档结构的同时，还可以引用 CSS 样式表来定义文档的视觉效果。

这些样式表通常通过 `<link rel="stylesheet" />` 标记来定义，但也可以通过内联 `<style>` 节点来定义。

CSS 样式表定义了由选择器和声明组成的规则。例如，请看 `styles.css`：

```scss
div {
    background-color: red;
}
```

在本例中，`div` 是一个选择器，`background-color: red` 是一个声明。整个代码块被视为一条规则：

![20231110203508](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203508.png)

一个网络应用程序可能会引用许多样式表，而一个样式表可能会定义许多规则（通常有许多声明！）。

浏览器会将这些样式表解析为一种内存效率高、查找效率高的数据结构，称为 CSS 对象模型或 `CSSOM`。其主要目的是汇总规则，并提供高效的查找功能，以便将选择器与其声明的样式相匹配。

![20231110203701](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203701.png)

下载的文本样式表会被解析并汇总到主线程中的 `CSSOM` 任务中。这将在跟踪中表现为 "解析样式表任务"：

![20231110211022](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211022.png)

:::tip
**Note:** The CSSOM's exact backing structure is browser-specific and worth a dedicated article on its own. While I won't cover it in this tip, you can imagine it's a memory-efficient tree optimized for fast lookup. You can explore the [StyleEngine source code](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/css/style_engine.cc;drc=ebf6be4eaa77a47b813aece108e06523a3f7ddde) for in-depth details.
:::

## Style and The Render Tree

让我们花点时间来研究一下整个流程图：

![20231110211201](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211201.png)

一旦构建了 `DOM` 和 `CSSOM`，浏览器就可以开始下一阶段的工作：样式这一阶段有时称为重新计算样式( Recalculate Style )或渲染树( Render Tree)更新。

### The Render Tree

渲染树（有时也称为布局树(**Layout Tree**)）是浏览器内部的 C++ 数据结构，网络开发人员不会直接修改它。

它是一个独立于 DOM 的树，但通常会反映 DOM 的结构。每个节点通常引用一个 DOM 节点和一个计算样式。它基本上由每一个应在用户屏幕上直观呈现的 DOM 节点组成。

请看这个简化的渲染树节点，它被称为渲染对象（**RenderObject**）：

```js
    class RenderObject {
        private:
            // Reference to the DOM Node being represented
            DOMNode* domNode;
    
            // Reference to the CSS Styles resolved for this DOM node.
            ComputedStyle* style
            
            // RenderTree structural pointers
            RenderObject* parent;
            RenderObjectList* children;
    }
```

![20231110211512](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211512.png)

渲染树还负责其他与 `DOM` 无关的视觉元素，如滚动条和文本选择。

:::tip
Consider reading through Chromium's [LayoutTree implementation](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/layout/layout_object.h;l=184-279;drc=f7f2dcfbd24f7ee74a0b306043bc757da65f64a6) for more in-depth details on this data structure.

**Note:** Notable exclusions from the Render Tree include `<head>` and its children, anything that is marked as `display: none`, and `<script>` elements because they are not presented to the user's screen.
:::

### ComputedStyle

考虑到 DOM 节点的选择器、CSS 特性以及 CSSOM 中的聚合规则，ComputedStyle 实际上就是适用于该 DOM 节点的 CSS 声明列表。

例如，我有一个 HTML 元素示例：

```html
    <div class="center-text">Example</div>
```

和样式是这样定义的：

```scss
.center-text {
    text-align: center;
}

div {
    background-color: red;
}
```

我的元素的计算样式将通过以下方式构建：

1. 针对 CSSOM 中 div 元素的聚合规则查询 CSS 选择器，以获得适用的规则
2. 解决与最终应用的声明集之间的任何 CSS 特性冲突，本例中的声明集为
   - `text-align: center`
   - `background-color: red`
   - 浏览器定义的任何默认样式

### Tree Construction (构建渲染树)

要建立 "渲染树"，浏览器将

1. 递归遍历 DOM，搜索可见元素
2. 构建/更新指向 DOM 节点的渲染树节点
3. 为 DOM 节点推导计算样式，并与 DOM 节点和渲染树节点关联

:::tip
我的理解是：渲染树和结构和`DOM`树很相似，但关联了样式。
:::

最终，我们将向用户展示一个由视觉元素组成的风格化渲染树：

![20231110212828](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212828.png)

在 Chromium Profiler 中，这将显示为`Recalculate Style`(重新计算样式)任务：

![20231110212914](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212914.png)

## Layout

**虽然渲染树包含了页面上每个可视元素的宽度、高度、颜色等所有 CSS 声明，但浏览器并未为元素分配任何几何图形或坐标。**

布局流程（有时也称为回流）会递归遍历新构建/更新的渲染树，并为每个节点分配精确的浮点位置和几何图形。

布局是一个非常深奥和复杂的话题。就本小贴士而言，最重要的是要知道 "布局 "将为渲染树中的每个节点创建和定位盒子。

例如，在我们的 "渲染树 "示例中：

1. 浏览器会为 `body` 元素创建并分配一个盒子。它的宽度是整个屏幕的宽度，因为它是一个块
2. 要获得高度，浏览器会遍历 body 元素的子元素（三个 div 元素，也是块盒子）
3. 每个 div 块的高度都来自其子元素 `TextNode`
4. 向上递归汇总高度，并分配精确的坐标和高度

![20231110213346](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110213346.png)

[这段很酷的视频展示了浏览器通过布局流程递归分配几何图形的过程](https://youtu.be/ZTnIxIA5KGw):

![20231110214436](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214436.png)

这里需要注意的一点是，"布局 "过程可能相当昂贵，因此浏览器会使用大量缓存来避免不必要地重新计算 "布局"。

布局通常会在渲染阶段出现在分析器中，就像下面这样：

![20231110214554](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214554.png)

在某些情况下，如果[强制同步回流](https://webperf.tips/tip/layout-thrashing)，有可能会在 JavaScript 任务中出现布局：

![20231110214634](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214634.png)

## Paint

让我们来看看我们的整体流程图（我们就快成功了！）：

![20231110214722](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214722.png)

一旦我们有了一组风格化、定位好的渲染树节点，浏览器就会利用计算图形库，以像素的形式通过编程绘制渲染树节点。

这个过程相当微妙，但从高层来看，浏览器会递归遍历新定位的渲染树，并执行绘制每个渲染树节点的指令。

这一阶段负责确保每个可见元素以正确的顺序绘制（例如，解决 z-index 和滚动容器等问题）。

Chromium 利用 Skia 库来促进绘制，Skia 将与 GPU 接口，以获取较低级别的 OpenGL / DirectX 图形指令。

一旦 GPU 生成纹理，浏览器就会将它们聚合到一个 Frame 中，并将该 Frame 提交到用户的显示器！

`Paint`任务的特殊性在于需要跨越多个线程和进程才能完成，但一般来说，它在 Chromium Profiler 中的表现是这样的：

![20231110215027](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110215027.png)

:::tip
注意：我有意忽略了图层和合成的高级细节。请参考我的 "[图层与合成](https://webperf.tips/tip/layers-compositing) "小贴士，了解更多相关信息。
:::

## When does Rendering Run?

我们已经介绍了浏览器的渲染方式，但它何时运行呢？

有关答案，请阅读我关于[浏览器事件循环](./event-loop.md)的小贴士。

## Conclusion

作为网络开发人员，我们必须明白，在浏览器完成这些阶段之前，我们最喜欢的 CSS、HTML、React 组件等都无法直观地呈现给用户。

接下来考虑如何测量帧绘制时间！






