# DOM 大小对交互性的影响有多大，以及您可以采取哪些措施

`metadata:`

**原标题:** How large DOM sizes affect interactivity, and what you can do about it

**链接:** https://web.dev/articles/dom-size-and-interactivity

---

Large DOM sizes have more of an effect on interactivity than you might think. This guide explains why, and what you can do.  

较大的 DOM 大小对交互性的影响比您想象的要大。本指南解释了原因以及您可以执行的操作。

There's no way around it: when you build a web page, that page is going to have a [Document Object Model (DOM)](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). The DOM represents the structure of your page's HTML, and gives JavaScript and CSS access to a page's structure and contents.  

这是没有办法的：当你构建一个网页时，该页面将有一个文档对象模型（DOM）。DOM 表示页面 HTML 的结构，并允许 JavaScript 和 CSS 访问页面的结构和内容。

The problem, however, is that the _size_ of the DOM affects a browser's ability to render a page quickly and efficiently. Generally speaking, the larger a DOM is, the more expensive it is to initially render that page and update its rendering later on in the page lifecycle.  

然而，问题在于 DOM 的大小会影响浏览器快速有效地呈现页面的能力。一般来说，DOM 越大，最初渲染该页面并在页面生命周期的后期更新其渲染的成本就越高。

This becomes problematic in pages with very large DOMs when interactions that modify or update the DOM trigger expensive layout work that affects the ability of the page to respond quickly. Expensive layout work can affect a page's [Interaction to Next Paint (INP)](https://web.dev/articles/inp); If you want a page to respond quickly to user interactions, it's important to ensure your DOM sizes are only as large as necessary.  

在具有非常大 DOM 的页面中，当修改或更新 DOM 的交互触发昂贵的布局工作时，这会成为问题，从而影响页面快速响应的能力。昂贵的布局工作可能会影响页面与下一个绘制 （INP） 的交互;如果您希望页面能够快速响应用户交互，请务必确保 DOM 大小仅与必要的大小一样大。

## When is a page's DOM _too_ large?  页面的 DOM 何时过大？

:::info

**Key term:** It's important to know the difference between DOM elements and DOM nodes. A DOM _element_ refers to a specific [HTML element](https://developer.mozilla.org/docs/Web/API/HTMLElement) in the DOM tree. A [DOM _node_](https://developer.mozilla.org/docs/Web/API/Node) has overlapping meaning with the DOM element term, but its definition is expanded to include comments, whitespace, and text. While the [Lighthouse DOM size audit](https://developer.chrome.com/en/docs/lighthouse/performance/dom-size/) refers to DOM nodes, this guide will refer to DOM elements over nodes whenever possible.  

关键术语：了解 DOM 元素和 DOM 节点之间的区别很重要。DOM 元素是指 DOM 树中的特定 HTML 元素。DOM 节点与 DOM 元素术语具有重叠的含义，但其定义已扩展为包括注释、空格和文本。虽然 Lighthouse DOM 大小审计指的是 DOM 节点，但本指南将尽可能引用 DOM 元素而不是节点。

:::

[According to Lighthouse](https://developer.chrome.com/en/docs/lighthouse/performance/dom-size/#how-the-lighthouse-dom-size-audit-fails), a page's DOM size is excessive when it exceeds 1,400 nodes. Lighthouse will begin to throw warnings when a page's DOM exceeds 800 nodes. Take the following HTML for example:  

根据 Lighthouse 的说法，当页面超过 1,400 个节点时，页面的 DOM 大小就过大了。当页面的 DOM 超过 800 个节点时，Lighthouse 将开始抛出警告。以以下 HTML 为例：

```html
<ul>
  <li>List item one.</li>
  <li>List item two.</li>
  <li>List item three.</li>
</ul>
```

In the above code, there are four DOM elements: the `<ul>` element, and its three `<li>` child elements. Your web page will almost certainly have many more nodes than this, so it's important to understand what you can do to keep DOM sizes in check—as well as other strategies to optimize the rendering work once you've gotten a page's DOM as small as it can be.  

在上面的代码中，有四个 DOM 元素：元素 `<ul>` 及其三个 `<li>` 子元素。你的网页几乎肯定会有比这更多的节点，所以了解你可以做些什么来控制 DOM 大小，以及一旦你让页面的 DOM 尽可能小，就可以优化渲染工作的其他策略是很重要的。

## How do large DOMs affect page performance?  

大型 DOM 如何影响页面性能？

Large DOMs affect page performance in a few ways:  

大型 DOM 以以下几种方式影响页面性能：

1.  During the page's initial render. When CSS is applied to a page, a structure similar to the DOM known as the [CSS Object Model (CSSOM)](https://web.dev/articles/critical-rendering-path/constructing-the-object-model#css_object_model_cssom) is created. As CSS selectors increase in specificity, the CSSOM becomes more complex, and more time is needed to run the necessary layout, styling, compositing, and paint work necessary to draw the web page to the screen. This added work increases interaction latency for interactions that occur early on during page load.  

    在页面的初始呈现期间。将 CSS 应用于页面时，将创建一个类似于 DOM 的结构，称为 CSS 对象模型 （CSSOM）。随着 CSS 选择器的特异性增加，CSSOM 变得更加复杂，并且需要更多时间来运行将网页绘制到屏幕上所需的必要布局、样式、合成和绘制工作。这种增加的工作增加了页面加载期间早期发生的交互的交互延迟。

2.  When interactions modify the DOM, either through element insertion or deletion, or by modifying DOM contents and styles, the work necessary to render that update can result in very costly layout, styling, compositing, and paint work. As is the case with the page's initial render, an increase in CSS selector specificity can add to rendering work when HTML elements are inserted into the DOM as the result of an interaction.  

    当交互通过插入或删除元素或修改 DOM 内容和样式来修改 DOM 时，呈现该更新所需的工作可能会导致非常昂贵的布局、样式、合成和绘画工作。与页面的初始渲染一样，当 HTML 元素作为交互的结果插入到 DOM 中时，CSS 选择器特异性的增加可以增加渲染工作。

3.  When JavaScript queries the DOM, references to DOM elements are stored in memory. For example, if you call [`document.querySelectorAll`](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll) to select all `<div>` elements on a page, the memory cost could be considerable if the result returns a large number of DOM elements.  

    当 JavaScript 查询 DOM 时，对 DOM 元素的引用存储在内存中。例如，如果调用 `document.querySelectorAll` 以选择页面上的所有 `<div>` 元素，则如果结果返回大量 DOM 元素，则内存成本可能会相当大。

![A screenshot of a long task caused by excessive rendering work in the performance panel of Chrome DevTools. The long task's call stack shows significant time spent recalculating page styles, as well as pre-paint.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-a-long-task-a768ec4a643a9.png?imageSlim)

A long task as shown in the performance profiler in Chrome DevTools. The long task shown is caused by inserting DOM elements into a large DOM via JavaScript.  

Chrome DevTools 中的性能探查器中显示的长任务。显示的长任务是由通过 JavaScript 将 DOM 元素插入到大型 DOM 中引起的。

All of these can affect interactivity, but the second item in the list above is of particular importance. If an interaction results in a change to the DOM, it can kick off a lot of work that can contribute to a poor INP on a page.  

所有这些都会影响交互性，但上面列表中的第二项尤为重要。如果交互导致 DOM 发生变化，它可能会启动大量工作，这些工作可能会导致页面上的 INP 不佳。

## How do I measure DOM size?  

如何测量 DOM 大小？

You can measure DOM size in a couple of ways. The first method uses Lighthouse. When you run an audit, statistics on the current page's DOM will be in the "Avoid an excessive DOM size" audit under the "Diagnostics" heading. In this section, you can see the total number of DOM elements, the DOM element containing the most child elements, as well as the deepest DOM element.  

您可以通过几种方式测量 DOM 大小。第一种方法使用 Lighthouse。运行审核时，当前页面的 DOM 上的统计信息将位于“诊断”标题下的“避免 DOM 大小过大”审核中。在本节中，您可以看到 DOM 元素的总数、包含最多子元素的 DOM 元素以及最深的 DOM 元素。

A simpler method involves using the JavaScript console in the developer tools in any major browser. To get the total number of HTML elements in the DOM, you can use the following code in the console after the page has loaded:  

更简单的方法是在任何主要浏览器的开发人员工具中使用 JavaScript 控制台。若要获取 DOM 中 HTML 元素的总数，可以在页面加载后在控制台中使用以下代码：

```js
document.querySelectorAll('*').length;
```

:::info

**Note:** Note that the code snippet above only includes the number of HTML _elements_ in the DOM. It doesn't include all the _nodes_ in the DOM.  

注意：请注意，上面的代码片段仅包含 DOM 中 HTML 元素的数量。它不包括 DOM 中的所有节点。

:::

If you want to see the DOM size update in realtime, you can also use the [performance monitor tool](https://developer.chrome.com/blog/new-in-devtools-64/#perf-monitor). Using this tool, you can correlate layout and styling operations (and other performance aspects) along with the current DOM size.  

如果要实时查看 DOM 大小更新，还可以使用性能监视器工具。使用此工具，您可以将布局和样式操作（以及其他性能方面）与当前 DOM 大小相关联。

![A screenshot of the performance monitor in Chrome DevTools. At left, there are various aspects of page performance that can be continuously monitored during the life of the page. In the screenshot, the number of DOM nodes, layouts per second, and style recalculations per section are actively being monitored.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-the-perform-d46dd7f32a5de.png?imageSlim)

*The performance monitor in Chrome DevTools. In this view, the page's current number of DOM nodes is charted along with layout operations and style recalculations performed per second.*

*Chrome DevTools 中的性能监视器。在此视图中，将绘制页面的当前 DOM 节点数以及每秒执行的布局操作和样式重新计算。*

If the DOM's size is approaching Lighthouse DOM size's warning threshold—or fails altogether—the next step is to figure out how to reduce the DOM's size to improve your page's ability to respond to user interactions so that your website's INP can improve.  

如果 DOM 的大小接近 Lighthouse DOM 大小的警告阈值，或者完全失败，下一步就是弄清楚如何减小 DOM 的大小，以提高页面响应用户交互的能力，从而改善网站的 INP。

## How can I measure the number of DOM elements affected by an interaction?  

如何测量受交互影响的 DOM 元素的数量？

If you're profiling a slow interaction in the lab that you suspect might have something to do with the size of the page's DOM, you can figure out how many DOM elements were affected by selecting any piece of activity in the profiler labeled "Recalculate Style" and observe the contextual data in the bottom panel.  

如果要在实验室中分析缓慢的交互，并且怀疑可能与页面的 DOM 大小有关，则可以通过在标记为“重新计算样式”的探查器中选择任何活动来确定有多少 DOM 元素受到影响，并观察底部面板中的上下文数据。

![A screenshot of selected style recalculation activity in the performance panel of Chrome DevTools. At top, the interactions track shows a click interaction, and the majority of the work is spent doing style recalculation and pre-paint work. At the bottom, a panel shows more detail for the selected activity, which reports that 2,547 DOM elements were affected.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-selected-st-9a6c0cc217aa3.png?imageSlim)

Observing the number of affected elements in the DOM as the result of style recalculation work. Note that the shaded portion of the interaction in the interactions track represents the portion of the interaction duration that was over 200 milliseconds, which is [the designated "good" threshold for INP](https://web.dev/articles/inp#what_is_a_good_inp_score).  

观察 DOM 中受影响的元素的数量，这是样式重新计算工作的结果。请注意，交互跟踪中交互的阴影部分表示交互持续时间超过 200 毫秒的部分，这是 INP 的指定“良好”阈值。

In the above screenshot, observe that the style recalculation of the work—when selected—shows the number of affected elements. While the above screenshot shows an extreme case of the effect of DOM size on rendering work on a page with many DOM elements, this diagnostic info is useful in any case to determine if the size of the DOM is a limiting factor in how long it takes for the next frame to paint in response to an interaction.  

在上面的屏幕截图中，观察到作品的样式重新计算（选中后）显示了受影响元素的数量。虽然上面的屏幕截图显示了 DOM 大小对具有许多 DOM 元素的页面上的呈现工作的影响的极端情况，但在任何情况下，此诊断信息都可用于确定 DOM 的大小是否是下一帧绘制响应交互所需的时间的限制因素。

## How can I reduce DOM size?  

如何减小 DOM 大小？

Beyond auditing your website's HTML for unnecessary markup, the principal way to reduce DOM size is to reduce DOM depth. One signal that your DOM might be unnecessarily deep is if you're seeing markup that looks something like this in the **Elements** tab of your browser's developer tools:  

除了审核网站的 HTML 是否有不必要的标记之外，减小 DOM 大小的主要方法是减少 DOM 深度。你的 DOM 可能不必要地深的一个信号是，如果你在浏览器开发者工具的 Elements 选项卡中看到如下所示的标记：

```html
<div>
  <div>
    <div>
      <div>
        <!-- Contents -->
      </div>
    </div>
  </div>
</div>
```

When you see patterns like this, you can probably simplify them by flattening your DOM structure. Doing so will reduce the number of DOM elements, and likely give you an opportunity to simplify page styles.  

当你看到这样的模式时，你可以通过扁平化你的 DOM 结构来简化它们。这样做将减少 DOM 元素的数量，并可能为您提供简化页面样式的机会。

DOM depth may also be a symptom of the frameworks you use. In particular, component-based frameworks—such as those that rely on [JSX](https://reactjs.org/docs/introducing-jsx.html)—require you to nest multiple components in a parent container.  

DOM 深度也可能是您使用的框架的症状。特别是，基于组件的框架（例如依赖于 JSX 的框架）要求您将多个组件嵌套在父容器中。

However, many frameworks allow you to avoid nesting components by using what are known as fragments. Component-based frameworks that offer fragments as a feature include (but are not limited to) the following:  

但是，许多框架允许您通过使用所谓的片段来避免嵌套组件。提供片段作为功能的基于组件的框架包括（但不限于）以下内容：

*   [React](https://reactjs.org/docs/fragments.html)

*   [Preact](https://preactjs.com/guide/v10/components/#fragments)

*   [Vue](https://v3-migration.vuejs.org/new/fragments.html)

*   [Svelte](https://svelte.dev/tutorial/svelte-fragment)

By using fragments in your framework of choice, you can reduce DOM depth. If you're concerned about the impact flattening DOM structure has on styling, you might benefit from using more modern (and faster) layout modes such as [flexbox](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Flexbox) or [grid](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout).  

通过在您选择的框架中使用片段，您可以减少 DOM 深度。如果您担心扁平化 DOM 结构对样式的影响，您可能会受益于使用更现代（和更快）的布局模式，例如 flexbox 或网格。

## Other strategies to consider  

其他需要考虑的策略

Even if you take pains to flatten your DOM tree and remove unnecessary HTML elements to keep your DOM as small as possible, it can still be quite large and kick off a lot of rendering work as it changes in response to user interactions. If you find yourself in this position, there are some other strategies you can consider to limit rendering work.  

即使你煞费苦心地扁平化你的 DOM 树并删除不必要的 HTML 元素以保持你的 DOM 尽可能小，它仍然可能非常大，并且随着用户交互的变化而变化，它会启动大量的渲染工作。如果您发现自己处于这个位置，您可以考虑一些其他策略来限制渲染工作。

### Consider an additive approach  

考虑加法

You might be in a position where large parts of your page aren't initially visible to the user when it first renders. This could be an opportunity to lazy load HTML by omitting those parts of the DOM on startup, but add them in when the user interacts with the parts of the page that require the initially hidden aspects of the page.  

您可能处于这样的情况：在首次呈现页面时，用户最初看不到页面的大部分内容。这可能是一个机会，通过在启动时省略 DOM 的这些部分来延迟加载 HTML，但在用户与页面中需要页面最初隐藏方面的部分交互时添加它们。

This approach is useful both during the initial load and perhaps even afterwards. For the initial page load, you're taking on less rendering work up front, meaning that your initial HTML payload will be lighter, and will render more quickly. This will give interactions during that crucial period more opportunities to run with less competition for the main thread's attention.  

这种方法在初始加载期间甚至在加载后都很有用。对于初始页面加载，您承担的渲染工作较少，这意味着初始 HTML 有效负载将更轻，并且渲染速度更快。这将为在这个关键时期的交互提供更多机会，减少对主线程注意力的竞争。

If you have many parts of the page that are initially hidden on load, it could also speed up other interactions that trigger re-rendering work. However, as other interactions add more to the DOM, rendering work will increase as the DOM grows throughout the page lifecycle.  

如果页面的许多部分最初在加载时处于隐藏状态，则还可以加快触发重新呈现工作的其他交互速度。但是，随着其他交互向 DOM 添加更多内容，渲染工作将随着 DOM 在整个页面生命周期中的增长而增加。

Adding to the DOM over time can be tricky, and it has its own tradeoffs. If you're going this route, you're likely making network requests to get data to populate the HTML you intend to add to the page in response to a user interaction. While in-flight network requests are not counted towards INP, it can increase perceived latency. If possible, show a loading spinner or other indicator that data is being fetched so that users understand that something is happening.  

随着时间的推移，添加到 DOM 可能会很棘手，并且它有自己的权衡。如果您采用这种方式，您可能会发出网络请求以获取数据，以填充您打算添加到页面以响应用户交互的 HTML。虽然正在进行的网络请求不计入 INP，但它可能会增加感知到的延迟。如果可能，请显示正在提取数据的加载微调器或其他指示器，以便用户了解正在发生某些事情。

### Limit CSS selector complexity  

限制 CSS 选择器的复杂性

When the browser parses selectors in your CSS, it has to traverse the DOM tree to understand how—and if—those selectors apply to the current layout. The more complex these selectors are, the more work the browser has to do in order to perform both the initial rendering of the page, as well as increased style recalculations and layout work if the page changes as the result of an interaction.  

当浏览器解析 CSS 中的选择器时，它必须遍历 DOM 树，以了解这些选择器如何以及是否应用于当前布局。这些选择器越复杂，浏览器必须执行的工作就越多，以便执行页面的初始呈现，以及如果页面因交互而更改，则增加样式重新计算和布局工作。

:::info

**Read to learn more:** [Reduce the scope and complexity of style calculations](https://web.dev/articles/reduce-the-scope-and-complexity-of-style-calculations).  

阅读以了解更多信息：减少样式计算的范围和复杂性。

:::

### Use the `content-visibility` property 使用属性

CSS offers the `content-visibility` property, which is effectively a way to lazily render off-screen DOM elements. As the elements approach the viewport, they're rendered on demand. The benefits of `content-visibility` don't just cut out a significant amount of rendering work on the initial page render, but also skip rendering work for offscreen elements when the page DOM is changed as the result of a user interaction.  

CSS 提供了该 `content-visibility` 属性，这实际上是一种延迟渲染屏幕外 DOM 元素的方法。当元素接近视口时，它们会按需渲染。这样做 `content-visibility` 的好处不仅是在初始页面渲染时减少了大量的渲染工作，而且在页面DOM因用户交互而更改时，还可以跳过屏幕外元素的渲染工作。

:::info

**Read to learn more:** [`content-visibility`: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility).  

阅读以了解更多信息： `content-visibility` ：可提高渲染性能的新 CSS 属性。

:::

## Conclusion 结论

Reducing your DOM size to only what is strictly necessary is a good way to optimize your website's INP. By doing so, you can reduce the amount of time it takes for the browser to perform layout and rendering work when the DOM is updated. Even if you can't meaningfully reduce DOM size, there are some techniques you can use to isolate rendering work to a DOM subtree, such as CSS containment and the `content-visibility` CSS property.  

将 DOM 大小减小到绝对必要的大小是优化网站 INP 的好方法。通过这样做，您可以减少浏览器在更新 DOM 时执行布局和渲染工作所需的时间。即使你不能有意义地减小 DOM 大小，也有一些技术可用于将渲染工作隔离到 DOM 子树中，例如 CSS 包含和 `content-visibility` CSS 属性。

However you go about it, creating an environment where rendering work is minimized—as well as reducing the amount of rendering work your page does in response to interactions—the result will be that your website will feel more responsive to users when they interact with them. That means you'll have a lower INP for your website, and that translates to a better user experience.  

无论你怎么做，创建一个渲染工作最小化的环境，以及减少你的页面为响应交互而做的渲染工作量，结果将是你的网站在用户与他们互动时会感觉对用户的响应速度更快。这意味着您的网站将拥有更低的 INP，从而转化为更好的用户体验。

_Hero image from [Unsplash](https://unsplash.com/), by [Louis Reed](https://unsplash.com/@_louisreed)._
