# 渲染性能

`metadata:`

**原标题:** Rendering Performance

**链接:** https://web.dev/articles/rendering-performance

---

Users notice if sites and apps don't run well, so optimizing rendering performance is crucial!

如果网站和应用程序运行不畅，用户就会察觉，因此优化呈现性能至关重要！

Users of today’s web [expect that the pages they visit will be interactive and smooth](https://paul.kinlan.me/what-news-readers-want/) and that’s where you need to increasingly focus your time and effort. Pages should not only load quickly, but also run well; scrolling should be stick-to-finger fast, and animations and interactions should be silky smooth.

当今的网络用户希望他们访问的网页具有交互性和流畅性，而这正是你需要投入越来越多时间和精力的地方。网页不仅要加载速度快，而且要运行良好；滚动速度要从手指到手指快，动画和交互要如丝般顺滑。

To write performant sites and apps you need to understand how HTML, JavaScript and CSS is handled by the browser, and ensure that the code you write (and the other 3rd party code you include) runs as efficiently as possible.

要编写性能出色的网站和应用程序，您需要了解浏览器是如何处理 HTML、JavaScript 和 CSS 的，并确保您编写的代码（以及您包含的其他第三方代码）尽可能高效地运行。

## 60fps and Device Refresh Rates (60fps 和设备刷新率)

![20231117210746](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117210746.png)

Most devices today refresh their screens **60 times a second**. If there’s an animation or transition running, or the user is scrolling the pages, the browser needs to match the device’s refresh rate and put up 1 new picture, or frame, for each of those screen refreshes.

如今，大多数设备每秒刷新屏幕 60 次。如果有动画或过渡效果正在运行，或者用户正在滚动页面，浏览器就需要匹配设备的刷新率，并在每次屏幕刷新时显示一张新图片或帧。

Each of those frames has a budget of just over 16ms (1 second / 60 = 16.66ms). In reality, however, the browser has maintenance work to do, so all of your work needs to be completed inside **10ms**. When you fail to meet this budget the frame rate drops, and the content judders on screen. This is often referred to as **jank**, and it negatively impacts the user's experience.

每个帧的预算略高于 16 毫秒（1 秒/60 = 16.66 毫秒）。但实际上，浏览器还有维护工作要做，因此所有工作都必须在 10 毫秒内完成。如果达不到这个预算，帧速率就会下降，屏幕上的内容就会抖动。这通常被称为 "抖动"，会对用户体验造成负面影响。

## The pixel pipeline 像素管道

There are five major areas that you need to know about and be mindful of when you work. They are areas you have the most control over, and key points in the pixels-to-screen pipeline:

在工作中，您需要了解并注意五个主要领域。它们是你最能控制的区域，也是像素到屏幕流水线的关键点：

![20231117210844](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117210844.png)

*   **JavaScript**. Typically JavaScript is used to handle work that will result in visual changes, whether it’s jQuery’s `animate` function, sorting a data set, or adding DOM elements to the page. It doesn’t have to be JavaScript that triggers a visual change, though: CSS Animations, Transitions, and the Web Animations API are also commonly used.

JavaScript: 通常情况下，JavaScript 用于处理会导致视觉变化的工作，无论是 jQuery 的动画功能、数据集排序，还是向页面添加 DOM 元素。不过，触发视觉变化的不一定是 JavaScript：CSS 动画、过渡效果和 Web 动画 API 也很常用。

*   **Style calculations**. This is the process of figuring out which CSS rules apply to which elements based on matching selectors, for example, `.headline` or `.nav > .nav__item`. From there, once rules are known, they are applied and the final styles for each element are calculated.

样式计算: 这是一个根据匹配选择器（例如 .headline 或 .nav > .nav__item ）计算出哪些 CSS 规则适用于哪些元素的过程。在此基础上，一旦知道规则，就会应用这些规则，并计算出每个元素的最终样式。

*   **Layout**. Once the browser knows which rules apply to an element it can begin to calculate how much space it takes up and where it is on screen. The web’s layout model means that one element can affect others, for example the width of the `<body>` element typically affects its children’s widths and so on all the way up and down the tree, so the process can be quite involved for the browser.

布局: 一旦浏览器知道哪些规则适用于某个元素，它就可以开始计算该元素所占的空间以及在屏幕上的位置。网页的布局模型意味着一个元素会影响到其他元素，例如 <body> 元素的宽度通常会影响到其子元素的宽度，以此类推，整个树状结构中的每一个元素都会受到影响，因此浏览器的计算过程可能会非常复杂。

*   **Paint**. Painting is the process of filling in pixels. It involves drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements. The drawing is typically done onto multiple surfaces, often called layers.

绘制: 绘制是填充像素的过程。它包括绘制文字、颜色、图像、边框和阴影，基本上是元素的每一个视觉部分。绘制通常在多个表面上进行，通常称为图层。

*   **Compositing**. Since the parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order so that the page renders correctly. This is especially important for elements that overlap another, since a mistake could result in one element appearing over the top of another incorrectly.

合成: 由于页面的各个部分可能被绘制到多个图层中，因此需要按照正确的顺序将它们绘制到屏幕上，这样页面才能正确渲染。这对于重叠的元素尤为重要，因为一个错误可能导致一个元素不正确地出现在另一个元素之上。

Each of these parts of the pipeline represents an opportunity to introduce jank, so it's important to understand exactly what parts of the pipeline your code triggers.

流水线的每个部分都是引入卡顿的机会，因此准确了解代码会触发流水线的哪些部分非常重要。

Sometimes you may hear the term "rasterize" used in conjunction with paint. This is because painting is actually two tasks: 1) creating a list of draw calls, and 2) filling in the pixels.

有时，你可能会听到 "光栅化 "一词与 "绘制 "连用。这是因为绘制实际上是两项任务：1）创建绘制调用列表；2）填充像素。

The latter is called "rasterization" and so whenever you see paint records in DevTools, you should think of it as including rasterization. (In some architectures creating the list of draw calls and rasterizing are done in different threads, but that isn't something under developer control.)

后者被称为 "光栅化"，因此当您在 DevTools 中看到绘制记录时，应将其视为包括光栅化。(在某些架构中，创建绘制调用列表和光栅化是在不同的线程中完成的，但这并不在开发人员的控制范围内）。

You won’t always necessarily touch every part of the pipeline on every frame. In fact, there are three ways the pipeline _normally_ plays out for a given frame when you make a visual change, either with JavaScript, CSS, or Web Animations:

你并不一定会在每一帧都接触到流水线的每一部分。事实上，在使用 JavaScript、CSS 或网页动画进行可视化更改时，管道通常会在特定帧中以三种方式运行：

### 1. JS / CSS \> Style \> Layout \> Paint \> Composite

![20231117211330](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117211330.png)

If you change a “layout” property, so that’s one that changes an element’s geometry, like its width, height, or its position with left or top, the browser will have to check all the other elements and “reflow” the page. Any affected areas will need to be repainted, and the final painted elements will need to be composited back together.

如果更改了 "布局 "属性，也就是更改了元素的几何形状，如宽度、高度、左侧或顶部位置，浏览器就必须检查所有其他元素并 "回流 "页面。任何受影响的区域都需要重新绘制，最后绘制的元素需要重新合成在一起。

### 2. JS / CSS \> Style \> Paint \> Composite

![20231117211411](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117211411.png)

If you changed a “paint only” property, like a background image, text color, or shadows, in other words one that does not affect the layout of the page, then the browser skips layout, but it will still do paint.

如果您更改了 "仅绘制 "属性，如背景图片、文本颜色或阴影，换句话说，就是不影响页面布局的属性，那么浏览器就会跳过布局，但仍会进行绘制。

### 3. JS / CSS \> Style \> Composite

![20231117211451](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231117211451.png)

If you change a property that requires neither layout nor paint, and the browser jumps to just do compositing.

如果更改了一个既不需要布局也不需要绘制的属性，浏览器就会跳转到直接进行合成。

This final version is the cheapest and most desirable for high pressure points in an app's lifecycle, like animations or scrolling.

对于应用程序生命周期中的高压点（如动画或滚动）来说，这种最终版本是最便宜、最理想的。

:::info
**Note:** If you want the fast track to high performance animations, read the section on [changing compositor-only properties](https://web.dev/articles/stick-to-compositor-only-properties-and-manage-layer-count).

注：如果您想快速获得高性能动画，请阅读有关更改合成器属性的章节。
:::

Performance is the art of avoiding work, and making any work you do as efficient as possible. In many cases it's about working with the browser, not against it. It’s worth bearing in mind that the work listed above in the pipeline differ in terms of computational cost; some tasks are more expensive than others!

性能是一门避免工作的艺术，也是一门尽可能提高工作效率的艺术。在很多情况下，这就是与浏览器合作，而不是对抗浏览器。值得注意的是，管道中的上述工作在计算成本方面存在差异；有些任务比其他任务更昂贵！

Let’s take a dive into the different parts of the pipeline. We’ll take a look at the common issues, as well how to diagnose and fix them.

让我们深入了解管道的各个部分。我们将了解常见问题，以及如何诊断和解决这些问题。

## Browser Rendering Optimizations 浏览器渲染优化

Performance matters to users. Web developers need to build apps that react quickly and render smoothly. Google performance guru Paul Lewis is here to help you destroy jank and create web apps that maintain 60 frames per second performance. You'll leave this course with the tools you need to profile apps and identify the causes of jank. You'll explore the browser's rendering pipeline and uncover patterns that make it easy to build performant apps.

对用户而言，性能至关重要。网络开发人员需要构建反应快速、渲染流畅的应用程序。谷歌性能大师保罗-刘易斯（Paul Lewis）将在这里帮助您消除性能缺陷，创建保持每秒 60 帧性能的网络应用程序。在本课程结束时，您将掌握对应用程序进行剖析和识别 jank 原因所需的工具。您将探索浏览器的渲染管道，并发现可轻松构建高性能应用程序的模式。

This is a free course offered through [Udacity](https://www.udacity.com/)

本课程通过 Udacity 免费提供

[Take Course](https://www.udacity.com/course/browser-rendering-optimization--ud860)











