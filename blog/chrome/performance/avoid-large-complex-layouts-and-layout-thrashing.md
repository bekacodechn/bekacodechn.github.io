# 避免大型、复杂的布局和布局抖动

`metadata:`

**原标题:** Avoid large, complex layouts and layout thrashing

**链接:** https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing

---

Layout is where the browser figures out the geometric information for elements - their size and location in the page. Each element will have explicit or implicit sizing information based on the CSS that was used, the contents of the element, or a parent element. The process is called Layout in Chrome.  

布局是浏览器计算元素的几何信息的地方 - 它们的大小和在页面中的位置。每个元素都将具有基于所使用的 CSS、元素内容或父元素的显式或隐式大小调整信息。该过程在 Chrome 中称为布局。

Layout is where the browser figures out the geometric information for elements: their size and location in the page. Each element will have explicit or implicit sizing information based on the CSS that was used, the contents of the element, or a parent element. The process is called Layout in Chrome (and derived browsers such as Edge), and Safari. In Firefox it's called Reflow, but the process is effectively the same.  

布局是浏览器计算元素的几何信息的地方：它们的大小和在页面中的位置。每个元素都将具有基于所使用的 CSS、元素内容或父元素的显式或隐式大小调整信息。该过程在 Chrome（以及 Edge 等派生浏览器）和 Safari 中称为布局。在Firefox中，它被称为Reflow，但过程实际上是相同的。

Similarly to style calculations, the immediate concerns for layout cost are:  

与样式计算类似，布局成本的直接关注点是：

1.  The number of elements that require layout, which is a byproduct of the page's [DOM size](https://web.dev/articles/dom-size-and-interactivity).  

    需要布局的元素数，这是页面 DOM 大小的副产品。

2.  The complexity of those layouts.  

    这些布局的复杂性。

## Summary 总结

*   Layout has a direct effect on interaction latency  

    布局对交互延迟有直接影响

*   Layout is normally scoped to the whole document.  

    布局的范围通常限定为整个文档。

*   The number of DOM elements will affect performance; you should avoid triggering layout wherever possible.  

    DOM 元素的数量会影响性能;应尽可能避免触发布局。

*   Avoid forced synchronous layouts and layout thrashing; read style values then make style changes.  

    避免强制同步布局和布局抖动;读取样式值，然后进行样式更改。

## The effects of layout on interaction latency  

布局对交互延迟的影响

When a user interacts with the page, those interactions should be as fast as possible. The amount of time it takes for an interaction to complete—ending when the browser presents the next frame to show the results of the interaction—is known as _interaction latency_. This is an aspect of page performance that the [Interaction to Next Paint](https://web.dev/articles/inp) metric measures.  

当用户与页面交互时，这些交互应尽可能快。交互完成所需的时间（在浏览器显示下一帧以显示交互结果时结束）称为交互延迟。这是“与下一个绘制的交互”指标衡量的页面性能的一个方面。

The amount of time it takes for the browser to present the next frame in response to a user interaction is known as the interaction's _presentation delay_. The goal of an interaction is to provide visual feedback in order to signal to the user that something has occurred, and visual updates can involve some amount of layout work in order to achieve that goal.  

浏览器为响应用户交互而呈现下一帧所需的时间称为交互的呈现延迟。交互的目标是提供视觉反馈，以便向用户发出信号，表明发生了某些事情，而视觉更新可能涉及一些布局工作，以实现该目标。

In order to keep your website's INP as low as possible, it's important to avoid layout when possible. If it's not possible to avoid layout entirely, it's important to limit that layout work so that the browser can present the next frame quickly.  

为了使您网站的 INP 尽可能低，尽可能避免布局很重要。如果无法完全避免布局，请务必限制布局工作，以便浏览器可以快速显示下一帧。

:::info

**Objective:** **Read to learn more:** [Interaction to Next Paint (INP)](https://web.dev/articles/inp).  

目标：阅读以了解更多信息：与下一个油漆的交互 （INP）。

:::

## Avoid layout wherever possible  

尽可能避免布局

When you change styles the browser checks to see if any of the changes require layout to be calculated, and for that render tree to be updated. Changes to "geometric properties", such as widths, heights, left, or top all require layout.  

当您更改样式时，浏览器会检查是否有任何更改需要计算布局，以及更新该渲染树。对“几何属性”的更改（例如宽度、高度、左侧或顶部）都需要布局。

```js
.box {
  width: 20px;
  height: 20px;
}

/**
  * Changing width and height
  * triggers layout.
  */

.box--expanded {
  width: 200px;
  height: 350px;
}
```

Layout is almost always scoped to the entire document. If you have a lot of elements, it's going to take a long time to figure out the locations and dimensions of them all.  

布局的范围几乎总是限定为整个文档。如果你有很多元素，需要很长时间才能弄清楚它们的位置和尺寸。

If it's not possible to avoid layout then the key is to once again use Chrome DevTools to see how long it's taking, and determine if layout is the cause of a bottleneck. Firstly, open DevTools, go to the Timeline tab, hit record and interact with your site. When you stop recording you'll see a breakdown of how your site performed:  

如果无法避免布局，那么关键是再次使用 Chrome DevTools 查看花费的时间，并确定布局是否是导致瓶颈的原因。首先，打开 DevTools，转到“时间线”选项卡，点击录制并与您的网站进行交互。停止录制后，您会看到网站效果明细：

![DevTools showing a long time in Layout.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/devtools-showing-long-i-9f35099ab9d22.png?imageSlim)

When digging into the trace in the above example, we see that over 28 milliseconds is spent inside layout for each frame, which, when we have 16 milliseconds to get a frame on screen in an animation, is far too high. You can also see that DevTools will tell you the tree size (1,618 elements in this case), and how many nodes were in need of layout (5 in this case).  

在上述示例中深入研究跟踪时，我们看到每帧在布局内部花费了超过 28 毫秒，当我们有 16 毫秒的时间在动画中将一帧放到屏幕上时，这个数字太高了。还可以看到，DevTools 将告诉你树大小（在本例中为 1,618 个元素）以及需要布局的节点数（在本例中为 5 个）。

Keep in mind that the general advice here is to avoid layout _whenever possible_—but it isn't always possible to avoid layout. In cases where you can't avoid layout, know that the cost of layout has a relationship with the size of the DOM. Although the relationship between the two isn't tightly coupled, larger DOMs will generally incur higher layout costs.  

请记住，这里的一般建议是尽可能避免布局，但并不总是可以避免布局。在无法避免布局的情况下，要知道布局的成本与 DOM 的大小有关。尽管两者之间的关系不是紧密耦合的，但较大的 DOM 通常会产生更高的布局成本。

:::info

**Objective:** **Read to learn more:** [DOM size and interactivity](https://web.dev/articles/dom-size-and-interactivity).  

目标：阅读以了解更多信息：DOM 大小和交互性。

:::

## Avoid forced synchronous layouts  避免强制同步布局

Shipping a frame to screen has this order:  

将帧运送到屏幕的顺序如下：

![Using flexbox as layout.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/using-flexbox-layout-0c9955c54a296.jpg?imageSlim)

First the JavaScript runs, _then_ style calculations, _then_ layout. It is, however, possible to force a browser to perform layout earlier with JavaScript. This is called **forced synchronous layout**.  

首先运行 JavaScript，然后是样式计算，然后是布局。但是，可以强制浏览器提前使用 JavaScript 执行布局。这称为强制同步布局。

The first thing to keep in mind is that as the JavaScript runs all the old layout values from the previous frame are known and available for you to query. So if, for example, you want to write out the height of an element (let's call it "box") at the start of the frame you may write some code like this:  

首先要记住的是，当 JavaScript 运行时，上一帧中的所有旧布局值都是已知的，可供您查询。因此，例如，如果你想在*Frame*的开头写出一个元素的高度（我们称之为“盒子”），你可以写一些这样的代码：

```js
// Schedule our function to run at the start of the frame:
requestAnimationFrame(logBoxHeight);

function logBoxHeight () {
  // Gets the height of the box in pixels and logs it out:
  console.log(box.offsetHeight);
}
```

Things get problematic if you've changed the styles of the box _before_ you ask for its height:  

如果您在询问盒子的高度之前更改了盒子的样式，事情就会有问题：

```js
function logBoxHeight () {
  box.classList.add('super-big');

  // Gets the height of the box in pixels and logs it out:
  console.log(box.offsetHeight);
}
```

Now, in order to answer the height question, the browser must _first_ apply the style change (because of adding the `super-big` class), and _then_ run layout. Only then will it be able to return the correct height. This is unnecessary and potentially expensive work.  

现在，为了回答高度问题，浏览器必须首先应用样式更改（因为添加了 `super-big` 类），然后运行布局。只有这样，它才能返回正确的高度。这是不必要且可能昂贵的工作。

:::info

**Key point:** While the example above uses the `offsetHeight` property, there are [many properties to be aware of](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) that can trigger forced synchronous layout.  

关键点：虽然上面的示例使用了该 `offsetHeight` 属性，但有许多属性需要注意，这些属性可能会触发强制同步布局。

:::

Because of this, you should always batch your style reads and do them first (where the browser can use the previous frame's layout values) and then do any writes:  

因此，您应该始终批量读取样式并首先执行它们（浏览器可以使用前一帧的布局值），然后执行任何写入：

Done correctly the above function would be:  

如果操作正确，上述功能将是：

```js
function logBoxHeight () {
  // Gets the height of the box in pixels and logs it out:
  console.log(box.offsetHeight);

  box.classList.add('super-big');
}
```

For the most part you shouldn't need to apply styles and then query values; using the last frame's values should be sufficient. Running the style calculations and layout synchronously and earlier than the browser would like are potential bottlenecks, and not something you will typically want to do.  

在大多数情况下，您不需要先应用样式，然后再查询值;使用最后一帧的值就足够了。以比浏览器希望的更早同步运行样式计算和布局是潜在的瓶颈，而不是您通常想要做的事情。

## Avoid layout thrashing 避免布局抖动

There's a way to make forced synchronous layouts even worse: _do lots of them in quick succession_. Take a look at this code:  

有一种方法可以使强制同步布局变得更糟：快速连续地执行大量同步布局。请看这段代码：

```js
function resizeAllParagraphsToMatchBlockWidth () {
  // Puts the browser into a read-write-read-write cycle.
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.width = `${box.offsetWidth}px`;
  }
}
```

This code loops over a group of paragraphs and sets each paragraph's width to match the width of an element called "box". It looks harmless enough, but the problem is that each iteration of the loop reads a style value (`box.offsetWidth`) and then immediately uses it to update the width of a paragraph (`paragraphs[i].style.width`). On the next iteration of the loop, the browser has to account for the fact that styles have changed since `offsetWidth` was last requested (in the previous iteration), and so it must apply the style changes, and run layout. This will happen on _every single iteration!_.  

此代码遍历一组段落，并设置每个段落的宽度以匹配名为“box”的元素的宽度。它看起来无害，但问题是循环的每次迭代都会读取一个样式值 （ `box.offsetWidth` ），然后立即使用它来更新段落的宽度 （ `paragraphs[i].style.width` ）。在循环的下一次迭代中，浏览器必须考虑自上次请求（在上一次迭代中）以来 `offsetWidth` 样式已更改的事实，因此它必须应用样式更改并运行布局。这将在每次迭代中发生！

The fix for this sample is to once again _read_ and then _write_ values:  

此示例的解决方法是再次读取，然后写入值：

```js
// Read.
const width = box.offsetWidth;

function resizeAllParagraphsToMatchBlockWidth () {
  for (let i = 0; i < paragraphs.length; i++) {
    // Now write.
    paragraphs[i].style.width = `${width}px`;
  }
}
```

If you want to guarantee safety, consider using [FastDOM](https://github.com/wilsonpage/fastdom), which automatically batches your reads and writes for you, and should prevent you from triggering forced synchronous layouts or layout thrashing accidentally.  

如果要保证安全，请考虑使用 FastDOM，它会自动为您批量读取和写入，并防止您意外触发强制同步布局或布局抖动。

_Hero image from [Unsplash](https://unsplash.com/), by [Hal Gatewood](https://unsplash.com/@halacious)._
