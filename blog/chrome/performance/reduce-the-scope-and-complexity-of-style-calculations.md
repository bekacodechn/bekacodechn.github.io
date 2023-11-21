# 减少样式计算的范围和复杂性

`metadata:`

**原标题:** Reduce the scope and complexity of style calculations

**链接:** https://web.dev/articles/reduce-the-scope-and-complexity-of-style-calculations

---

JavaScript is often the trigger for visual changes. Sometimes that's directly through style manipulations, and sometimes it's calculations that will result in visual changes, like searching or sorting some data. Badly-timed or long-running JavaScript can be a common cause of performance issues, and you should look to minimize its impact where you can.

JavaScript 通常是视觉变化的触发因素。有时，这是直接通过样式操作实现的，有时则是计算导致视觉变化，例如搜索或对某些数据进行排序。不合时宜或长时间运行的 JavaScript 可能是导致性能问题的常见原因，您应该尽可能减少其影响。

Changing the DOM, through adding and removing elements, changing attributes, classes, or through animation, will all cause the browser to recalculate element styles and, in many cases, layout (or reflow) the page, or parts of it. This process is called computed style calculation.

通过添加和删除元素、更改属性、类或通过动画来更改DOM，都将导致浏览器重新计算元素样式，并且在许多情况下，布局（或回流）页面或页面的一部分。这个过程称为`computed style calculation`。

The first part of computing styles is to create a set of matching selectors, which is essentially the browser figuring out which classes, pseudo-selectors, and IDs apply to any given element.

计算样式的第一部分是创建一组匹配的选择器，这本质上是浏览器弄清楚哪些类、伪选择器和ID适用于任何给定元素。

The second part of the process involves taking all the style rules from the matching selectors and figuring out what final styles the element has.

该过程的第二部分涉及从匹配的选择器中获取所有样式规则并找出元素具有的最终样式。

:::info

**Note:** Roughly half of the time used in Blink (the rendering engine used in Chromium and derived browsers) to calculate the computed style for an element is used to match selectors, and the other half of the time is used to construct the RenderStyle (computed style representation) from the matched rules. Rune Lillesveen, Opera / [Style Invalidation in Blink](https://docs.google.com/document/d/1vEW86DaeVs4uQzNFI5R-_xS9TcS1Cs_EUsHRSgCHGu8/view)

注意：在Blink（Chromium和派生浏览器中使用的渲染引擎）中，计算元素计算样式的大约一半时间用于匹配选择器，另一半时间用于根据匹配的规则构建RenderStyle（计算样式表示）。Rune Lillesveen，Opera/Style Blink中的无效

:::

## Summary

*   How reducing style calculation costs can lower interaction latency.

  降低样式计算成本如何降低交互延迟。

*   Reduce the complexity of your selectors; use a class-centric methodology (BEM, for example).

  降低选择器的复杂性；使用以类为中心的方法论（例如BEM）。

*   Reduce the number of elements on which style calculation must be calculated.

  减少必须计算样式计算的元素数量。

## Style recalculation time and interaction latency 样式重新计算时间和交互延迟

The [Interaction to Next Paint (INP)](https://web.dev/articles/inp) is a user-centric runtime performance metric that assesses a page's overall responsiveness to user input. When interaction latency is assessed by this metric, it measures the time starting from when the user interacts with the page, up until the browser paints the next frame showing the corresponding visual updates made to the user interface.

交互到下一个绘制（INP）是一个以用户为中心的运行时性能指标，用于评估页面对用户输入的整体响应能力。当交互延迟由该指标评估时，它测量从用户与页面交互开始到浏览器绘制下一帧显示对用户交互界面所做的相应视觉更新的时间。

A significant component of an interaction is the time it takes to paint the next frame. Rendering work done to present the next frame is made up of many parts, including calculation of page styles that occur just prior to layout, paint, and compositing work. While this article focuses solely on style calculation costs, it's important to emphasize that reducing any part of the rendering phase inherent to interaction will reduce its total latency—style calculation included.

交互的一个重要组成部分是绘制下一帧所需的时间。呈现下一帧的渲染工作由许多部分组成，包括在布局、绘制和合成工作之前发生的页面样式的计算。虽然本文只关注样式计算成本，但重要的是要强调，减少交互固有的渲染阶段的任何部分都将减少其总延迟——包括样式计算。

## Reduce the complexity of your selectors 降低选择器的复杂性

In the simplest case, you can reference an element in your CSS with just a class:

在最简单的情况下，您可以仅使用一个类引用CSS中的元素：

```scss
.title {
  /* styles */
}
```

But, as any project grows, it will likely result in more complex CSS, such that you may end up with selectors that look like this:

但是，随着任何项目的发展，它可能会导致更复杂的CSS，因此您最终可能会得到如下所示的选择器：

```scss
.box:nth-last-child(-n+1) .title {
  /* styles */
}
```

In order to know how these styles apply to the page, the browser has to effectively ask "is this an element with a class of `title` which has a parent who happens to be the minus nth child plus 1 element with a class of `box`?" Figuring this out _can_ take a lot of time, depending on the selector used as well as the browser in question. The intended behavior of the selector could instead be changed to a class:

为了知道这些样式如何应用于页面，浏览器必须有效地询问“这是一个具有标题类的元素吗？它的父元素碰巧是负第n个子元素加上1个带有box类的元素？”弄清楚这一点可能需要很多时间，具体取决于使用的选择器以及相关的浏览器。选择器的预期行为可以改为一个类：

```scss
.final-box-title {
  /* styles */
}
```

You can take issue with the name of the class, but the job just got a lot simpler for the browser. In the previous version, in order to know, for example, that the element is the last of its type, the browser must first know everything about all the other elements and whether the are any elements that come after it that would be the `nth-last-child`, which is potentially more expensive than simply matching up the selector to the element because its class matches.

您可以对类的名称提出异议，但对浏览器来说，这项工作变得简单多了。在以前的版本中，例如，为了知道元素是其类型的最后一个，浏览器必须首先知道所有其他元素的一切，以及在它之后是否有任何元素是第n个last-child，这可能比简单地将选择器与元素匹配更昂贵，因为它的类匹配。

## Reduce the number of elements being styled 减少被设置样式的元素数量

Another performance consideration—which is typically _the more important factor for many style updates_—is the sheer volume of work that needs to be carried out when an element changes.

另一个性能考虑因素——这通常是许多样式更新中更重要的因素——是元素更改时需要执行的大量工作。

In general terms, the worst case cost of calculating the computed style of elements is the number of elements multiplied by the selector count, because each element needs to be at least checked once against every style to see if it matches.

一般来说，计算元素的计算样式的最坏情况成本是元素的数量乘以选择器计数，因为每个元素至少需要针对每个样式检查一次以查看它是否匹配。

:::info

**Note:** It used to be the case that if you changed a class on—say—the body element, that all the children in the page would need to have their computed styles recalculated. Thankfully that is no longer the case; some browsers instead maintain a small collection of rules unique to each element that, if changed, cause the element's styles to be recalculated. That means that an element may or may not need to be recalculated depending on where it is in the tree, and what specifically got changed.

注意：过去的情况是，如果你改变了一个类，比如body元素，页面中的所有子元素都需要重新计算它们的计算样式。幸运的是，现在情况不再是这样了；一些浏览器会维护一个小集合，这些规则是每个元素独有的，如果改变，会导致元素的样式被重新计算。这意味着一个元素可能需要也可能不需要重新计算，这取决于它在树中的位置，以及具体改变了什么。

:::

Style calculations can often be targeted to a few elements directly rather than invalidating the page as a whole. In modern browsers, this tends to be less of an issue because the browser doesn't necessarily need to check all the elements potentially affected by a change. Older browsers, on the other hand, aren't necessarily as optimized for such tasks. Where you can, you should **reduce the number of invalidated elements**.

样式计算通常可以直接针对几个元素，而不是使整个页面无效。在现代浏览器中，这往往不是一个问题，因为浏览器不一定需要检查所有可能受更改影响的元素。另一方面，旧浏览器不一定针对此类任务进行了优化。在可能的情况下，您应该减少无效元素的数量。

:::info

**Note:** If you're into Web Components, it's worth noting that style calculations here are a little different, since by default styles do not cross the Shadow DOM boundary, and are scoped to individual components rather than the tree as a whole. Overall, however, the same concept still applies: smaller trees with simpler rules are more efficiently processed than larger trees with more complex rules.

注意：如果你喜欢Web组件，值得注意的是，这里的样式计算有点不同，因为默认情况下样式不会跨越Shadow DOM 边界，并且范围是单个组件，而不是整个树。然而，总的来说，同样的概念仍然适用：具有更简单规则的较小树比具有更复杂规则的较大树处理效率更高。

:::

## Measure your style recalculation cost 衡量您的样式重新计算成本

One way to measure the cost of style recalculations is to use the performance panel in Chrome DevTools. To begin, open DevTools, go to the tab labeled **Performance**, hit record, and interact with the page. When you stop recording, you'll see something like the image below:

衡量样式重新计算成本的一种方法是使用ChromeDevTools中的性能面板。首先，打开DevTools，转到标有性能的选项卡，点击记录，然后与页面交互。停止录制后，您会看到如下图：

![DevTools showing style calculations.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/devtools-showing-style-ca-2cc07caa90f6e.png?imageSlim)

The strip at the top is a miniature flame chart that also plots frames per second. The closer the activity is to the bottom of the strip, the faster frames are being painted by the browser. If you see the flame chart leveling out at the top with red strips above it, then you have work that's causing long running frames.

顶部的条形图是一个微型火焰图，同时也绘制了每秒帧数。活动越接近条形图的底部，浏览器绘制帧的速度就越快。如果您看到火焰图在顶部趋于平稳，上方有红色条纹，那么就说明有工作导致了帧的长时间运行。

![Zooming in on a trouble area in Chrome DevTools in the activity summary of the populated performance panel in Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/zooming-on-trouble-area-16c06721266c6.png?imageSlim)

If you have a long running frame during an interaction like scrolling, then it bears further scrutiny. If you have a large purple block, zoom in on the activity and select any work labeled **Recalculate Style** to get more information on potentially expensive style recalculation work.

如果您在滚动等交互过程中有一个长时间运行的*Frame*，那么它需要进一步审查。如果您有一个大的紫色块，请放大活动并选择任何标有重新计算样式的工作，以获取有关潜在昂贵样式重新计算工作的更多信息。

![Getting the details of long-running style calculations, including vital information such as the amount of elements affected by the style recalculation work.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/getting-details-long-ru-995bd5d17169.png?imageSlim)

In this grab there is long-running style recalculation work that is taking just over 25ms.

在这个抓取中，有一个长时间运行的重新计算工作，需要超过25毫秒。

If you click the event itself, you are given a call stack. If the rendering work was due to a user interaction, the place in your JavaScript that is responsible for triggering the style change will be called out. In addition to that, you also get the number of elements that have been affected by the change—just over 900 elements in this case—and how long it took to do the style calculation work. You can use this information to start trying to find a fix in your code.

如果您单击事件本身，您将获得一个调用堆栈。如果呈现工作是由于用户交互，则JavaScript中负责触发样式更改的位置将被调用。除此之外，您还可以获得受更改影响的元素数量——在本例中仅超过900个元素——以及完成样式计算工作所需的时间。您可以使用此信息开始尝试在代码中找到修复程序。

## Use Block, Element, Modifier 使用块、元素、修饰符

Approaches to coding like [BEM (Block, Element, Modifier)](https://bem.info/) actually bake in the selector matching performance benefits above, because it recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well:

像BEM（块、元素、修饰符）这样的编码方法实际上包含了与上述性能优势相匹配的选择器，因为它建议所有内容都有一个类，并且，在您需要层次结构的地方，它也会被烘焙到类的名称中：

```scss
.list {
  /* Styles */
}

.list__list-item {
  /* Styles */
}
```

If you need some modifier, like in the above where we want to do something special for the last child, you can add that like so:

如果你需要一些修饰符，比如上面我们想为最后一个孩子做一些特别的事情，你可以像这样添加：

```scss
.list__list-item--last-child {
  /* Styles */
}
```

If you're looking for a good way to organize your CSS, BEM is a good starting point, both from a structure point-of-view, and also because of the simplifications of style lookup the methodology promotes.

如果您正在寻找一种组织CSS的好方法，BEM是一个很好的起点，无论是从结构的角度来看，还是因为方法论促进了样式查找的简化。

If you don't like BEM, there are other ways to approach your CSS, but the performance considerations should be assessed alongside the ergonomics of the approach.

如果您不喜欢BEM，还有其他方法可以处理您的CSS，但性能考虑因素应与该方法的人机工程学一起评估。

## Resources

*   [Style invalidation in Blink](https://docs.google.com/document/d/1vEW86DaeVs4uQzNFI5R-_xS9TcS1Cs_EUsHRSgCHGu8/edit)

*   [BEM (Block, Element, Modifier)](https://bem.info/)

_Hero image from [Unsplash](https://unsplash.com/), by [Markus Spiske](https://unsplash.com/@markusspiske)._
