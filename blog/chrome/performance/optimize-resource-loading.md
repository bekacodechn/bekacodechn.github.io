# optimize-resource-loading 优化资源负载


`metadata:`

**链接:** https://web.dev/learn/performance/optimize-resource-loading

---

在上一模块中，我们介绍了 [HTML 性能的一般注意事项](./general-html-performance)，如尽量减少重定向、如何测量服务器响应时间、压缩和其他概念。虽然这些都是影响性能的关键因素，但网页不仅仅是 HTML。

页面加载时，HTML 中会引用许多资源，这些资源通过 CSS 提供页面的外观和布局，并通过 JavaScript 提供页面的交互性。本模块将介绍与这些资源相关的一些重要概念，以及它们如何影响页面的加载时间。

## Render blocking 渲染阻塞

CSS 是一种[渲染阻塞](https://web.dev/articles/critical-rendering-path/render-blocking-css)资源，因为它阻止浏览器渲染任何内容，直到 [CSS 对象模型（CSSOM）](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model)构建完成。浏览器阻止渲染是为了防止出现 [Flash of Unstyled Content (FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)(无样式内容闪烁)，从用户体验的角度来看，这是不可取的。

在前面的视频中，有一个简短的 "FOUC"，你可以看到没有任何样式的页面。随后，当页面的 CSS 从网络加载完成后，所有样式都会应用，页面的无样式版本会立即替换为有样式的版本。

![20231108002218](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108002218.png)
视频地址：https://web.dev/static/learn/performance/optimize-resource-loading/video/fouc.mp4


一般来说，FOUC 通常不会出现，但了解这一概念很重要，这样你就能知道为什么浏览器会阻止页面的渲染，直到 CSS 被下载并应用到页面上。渲染阻塞并不一定不可取，但你确实希望通过优化 CSS 来尽量缩短它的持续时间。

:::info{title=理解FOUC}
通俗的讲，Flash of unstyled content（FOUC）就是在加载外部样式表之前，浏览器按默认样式显示了内容，这是因为浏览器在所有资源都下载好前就开始渲染页面了。一旦外部样式被加载，浏览器就会修正样式，但这种修正可能是可见的，也就是FOUC。
:::

## Parser blocking 解析器阻塞

解析器阻塞资源会中断 HTML 解析器，例如没有 async 或 defer 属性的 `<script>` 元素。当解析器遇到 `<script>` 元素时，浏览器需要先评估并执行脚本，然后再继续解析 HTML 的其余部分。这是一种设计，因为脚本可能会在构建 DOM 的过程中修改或访问 DOM。

```json
<!-- This is a parser-blocking script: -->
<script src="/script.js"></script>
```
在使用外部 JavaScript 文件（不使用 async 或 defer）时，解析器从发现文件开始就会被阻塞，直到文件被下载、解析和执行。使用内联 JavaScript 时，解析器同样会被阻塞，直到内联脚本被解析和执行。

:::info
注意：阻塞解析器的 `<script>` 也必须等待任何正在进行的渲染阻塞CSS资源到达并解析后，浏览器才能执行它(如果`<link rel="stylesheet">`请求后未得到响应，即使后面的`<script>`下载完毕了也不会执行。所以阻塞中的`<link>`会阻塞后面的`<script>`执行，但不会阻塞下载。不太明白的一点：样式的解析是指生成`CssOM`还是渲染完毕？)。这也是一种设计，因为脚本可能会访问在呈现阻塞样式表中声明的样式（例如，通过使用 **element.getComputedStyle()**）。
:::

## The preload scanner 预加载扫描器

预加载扫描器是浏览器的一种优化功能，它采用二级 HTML 解析器的形式，可扫描原始 HTML 响应，以便在主 HTML 解析器发现资源之前找到并推测性地获取这些资源。例如，预加载扫描器允许浏览器开始下载 `<img>` 元素中指定的资源，即使 HTML 解析器在获取和处理 CSS 和 JavaScript 等资源时受阻。(这是下载，并非渲染)

要利用预加载扫描器，关键资源应包含在服务器发送的 HTML 标记中。预加载扫描器无法发现以下资源加载模式：

- 通过 CSS 使用 `background-image` 属性加载的图片。这些图片引用位于 CSS 中，无法被预加载扫描程序发现。
- 以 `<script>` 元素标记的形式动态加载的脚本，这些标记使用 JavaScript 或使用动态 import() 加载的模块注入到 DOM 中。
- 使用 JavaScript 在客户端渲染的 HTML。此类标记包含在 JavaScript 资源的字符串中，预加载扫描程序无法发现。(js创建的标签都不行)
- CSS @import 声明。

这些资源加载模式都是后期发现的资源，因此无法从预载扫描器中获益。请尽可能避免使用它们。如果无法避免这些模式，也可以使用预加载提示来避免资源发现延迟。

:::info
注：预加载资源提示将在下一个有关[资源提示的模块](https://web.dev/learn/performance/resource-hints)中介绍。
:::

## CSS
CSS 决定页面的表现形式和布局。如前所述，**CSS 是一种渲染阻塞资源**，因此优化 CSS 对整个页面的加载时间有相当大的影响。



