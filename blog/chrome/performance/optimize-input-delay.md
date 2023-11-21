# 优化输入延迟

`metadata:`

**原标题:** Optimize input delay

**链接:** https://web.dev/articles/optimize-input-delay

---

Find out what input delay is, and learn techniques to reduce it for faster interactivity.

了解什么是输入延迟，并学习减少输入延迟以提高交互速度的技术。

Interactions on the web are complicated things, with all sorts of activity occurring in the browser to drive them. What they all have in common, though, is that they incur some input delay before their event callbacks begin to run. In this guide, you'll learn what input delay is, and what you can do to minimize it so your website's interactions run faster.  

网络上的交互是一件复杂的事情，浏览器中发生了各种各样的活动来驱动它们。但是，它们的共同点是，在事件回调开始运行之前，它们都会产生一些输入延迟。在本指南中，您将了解什么是输入延迟，以及您可以采取哪些措施来最大程度地减少它，以便您网站的交互运行得更快。

## What is input delay? 什么是输入延迟？

_Input delay_ is the period of time beginning from when the user first interacts with a page—such as tapping on a screen, clicking with a mouse, or pressing a key—up to when the event callbacks for the interaction begin to run. Every interaction begins with some amount of input delay.  

输入延迟是指从用户首次与页面交互（例如点击屏幕、使用鼠标单击或按键）开始到交互的事件回调开始运行的时间段。每次交互都从一定程度的输入延迟开始。

![A simplified visualization of input delay. At left, there is line art of a mouse cursor with a starburst behind it, signifying the start of an interaction. To the right is line art of a cogwheel, signifying when the event handlers for an interaction begin to run. The space in between is noted as the input delay with a curly brace.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-simplified-visualizatio-d1514b424d9ec.png?imageSlim)

The mechanics behind input delay. When an input is received by the operating system, it must be passed to the browser before the interaction starts. This takes a certain amount of time, and can be increased by existing main thread work.  

输入延迟背后的机制。当操作系统收到输入时，必须在交互开始之前将其传递给浏览器。这需要一定的时间，并且可以通过现有的主线程工作来增加。

Some portion of the input delay is unavoidable: it always takes some amount of time for the operating system to recognize an input event and pass it to the browser. However, that portion of the input delay is often not even noticeable, and there are other things that happen on the page itself that can make input delays long enough to cause problems.  

输入延迟的某些部分是不可避免的：操作系统总是需要一些时间来识别输入事件并将其传递给浏览器。但是，输入延迟的那部分通常甚至不明显，并且页面本身还发生了其他事情，这些事情可能会使输入延迟足够长，从而导致问题。

## How to think about input delay  如何考虑输入延迟

Generally speaking, you want to keep every part of an interaction as short as possible so that your website has the best chance of meeting [the Interaction to Next Paint (INP) metric's "good" threshold](https://web.dev/articles/inp#what_is_a_good_inp_score), regardless of the user's device. Keeping input delay in check is just one part of meeting that threshold.  

一般来说，您希望尽可能缩短交互的每个部分，以便您的网站最有可能满足“下一个绘制交互”（INP） 指标的“良好”阈值，而不管用户使用何种设备。控制输入延迟只是满足该阈值的一部分。

You might be tempted to look to [the First Input Delay (FID) thresholds](https://web.dev/articles/fid#what_is_a_good_fid_score) to determine an allowance for input delays—but the "good" threshold for FID is **100 milliseconds or less**. If you go by this threshold, you'd be allotting half of your budget for INP to input delay alone. This is inadvisable when you consider that an interaction also requires time to run event callbacks and for the browser to paint the next frame.  

您可能很想查看首次输入延迟 （FID） 阈值来确定输入延迟的容许值，但 FID 的“良好”阈值为 100 毫秒或更短。如果达到这个阈值，则将 INP 预算的一半分配给输入延迟。当您考虑到交互还需要时间来运行事件回调和浏览器绘制下一帧时，这是不可取的。

To meet INP's "good" threshold, you'll want to aim for the shortest input delay possible, but you shouldn't expect to eliminate it entirely, as that is impossible. As long as you're avoiding excessive main thread work while users are attempting to interact with your page, your input delay should be low enough to avoid problems.  

为了达到INP的“良好”阈值，您需要尽可能缩短输入延迟，但不应期望完全消除它，因为这是不可能的。只要在用户尝试与页面交互时避免过多的主线程工作，您的输入延迟就应该足够低以避免出现问题。

## How to minimize input delay  如何最小化输入延迟

As said previously, some input delay is unavoidable, but on the other hand, some input delay _is_ avoidable. Here are some things to consider if you're struggling with long input delays.  

如前所述，一些输入延迟是不可避免的，但另一方面，一些输入延迟是可以避免的。如果您正在为长时间的输入延迟而苦苦挣扎，请考虑以下几点。

### Avoid recurring timers that kick off excessive main thread work  避免重复的计时器启动过多的主线程工作

There are two commonly used timer functions in JavaScript that can contribute to input delay: [`setTimeout`](https://developer.mozilla.org/docs/Web/API/setTimeout) and [`setInterval`](https://developer.mozilla.org/docs/Web/API/setInterval). The difference between the two is that `setTimeout` schedules a callback to run after a specified time. `setInterval`, on the other hand, schedules a callback to run every _n_ milliseconds in perpetuity, or until the timer is stopped with [`clearInterval`](https://developer.mozilla.org/docs/Web/API/clearInterval).  

JavaScript 中有两个常用的计时器函数会导致输入延迟： `setTimeout` 和 `setInterval` 。两者的区别在于，将 `setTimeout` 回调安排在指定时间后运行。 `setInterval` 另一方面，调度回调永久每 n 毫秒运行一次，或者直到计时器停止 `clearInterval` 为 。

`setTimeout` is not problematic in itself—in fact, it can be helpful in [avoiding long tasks](https://web.dev/articles/optimize-input-delay#avoid_long_tasks). However, it depends on _when_ the timeout occurs, and whether the user attempts to interact with the page when the timeout callback runs.  

`setTimeout` 本身没有问题——事实上，它有助于避免长时间的任务。但是，这取决于超时发生的时间，以及用户在超时回调运行时是否尝试与页面交互。

Additionally, `setTimeout` can be run in a loop or recursively, where it acts more like `setInterval`, though preferably not scheduling the next iteration until the previous one is completed. While this means the loop will yield to the main thread every time `setTimeout` is called, you should take care to ensure its callback doesn't end up doing excessive work.  

此外，可以在循环中运行或递归运行，它的行为更像是 `setInterval` ， `setTimeout` 但最好不要在上一次迭代完成之前安排下一次迭代。虽然这意味着每次 `setTimeout` 调用时循环都会屈服于主线程，但您应该注意确保其回调不会最终执行过多的工作。

`setInterval` runs a callback on an interval, and is therefore much more likely to get in the way of interactions. This is because—unlike a single instance of a `setTimeout` call, which is a one-off callback that _may_ get in the way of a user interaction—`setInterval`'s recurring nature makes it much more likely that it _will_ get in the way of an interaction, thus increasing the interaction's input delay.  

`setInterval` 按间隔运行回调，因此更有可能妨碍交互。这是因为，与调用的单个实例不同， `setTimeout` 调用是可能会妨碍用户交互的一次性回调，其重复性使其更有可能妨碍交互， `setInterval` 从而增加交互的输入延迟。

![A screenshot of the performance profiler in Chrome DevTools demonstrating input delay. A task fired by a timer function occurs just before a user initiates a click interaction. However, the timer extends the input delay, causing the interaction's event callbacks to run later than they otherwise would.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-screenshot-the-perform-0955d1c357d1f.png?imageSlim)

A timer registered by a previous `setInterval` call contributing to input delay as depicted in the performance panel of Chrome DevTools. The added input delay causes the event callbacks for the interaction to run later than they otherwise could.  

由上一次 `setInterval` 调用注册的计时器，导致输入延迟，如 Chrome DevTools 的性能面板中所述。增加的输入延迟会导致交互的事件回调运行时间晚于其他方式。

If timers are occurring in first-party code, then you have control over them. Evaluate whether you need them, or do your best to reduce the work in them as much as possible. However, timers in third-party scripts are a different story. You often don't have control over what a third-party script does, and fixing performance issues in third-party code often involves working with stakeholders to determine whether a given third-party script is necessary, and if so, establish contact with a third-party script vendor to determine what can done to fix performance issues they may cause on your website.  

如果计时器出现在第一方代码中，则可以控制它们。评估您是否需要它们，或者尽最大努力减少其中的工作量。但是，第三方脚本中的计时器是另一回事。您通常无法控制第三方脚本的功能，修复第三方代码中的性能问题通常涉及与利益相关者合作，以确定是否需要给定的第三方脚本，如果是，请与第三方脚本供应商建立联系，以确定可以采取哪些措施来修复它们可能在您网站上导致的性能问题。

### Avoid long tasks 避免长时间的任务

One way to mitigate long input delays is to avoid long tasks. When you have excessive main thread work that blocks the main thread during interactions, that will add to the input delay for them before the long tasks have had a chance to finish.  

缓解长时间输入延迟的一种方法是避免长时间的任务。当您有过多的主线程工作在交互期间阻塞主线程时，这将在长任务有机会完成之前增加它们的输入延迟。

![A visualization of how long tasks extend input delay. At top, an interaction occurs shortly after a single long task runs, causing significant input delay that causes event callbacks to run much later than they should. At bottom, an interaction occurs at roughly the same time, but the long task is broken up into several smaller ones by yielding, allowing the interaction's event callbacks to run much sooner.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-visualization-how-long-af65d3963b8fb.png?imageSlim)

A visualization of what happens to interactions when tasks are too long and the browser can't respond quickly enough to interactions, versus when longer tasks are broken up into smaller tasks.  

当任务太长且浏览器无法足够快地响应交互时，与将较长的任务分解为较小的任务时，交互会发生什么情况的可视化。

Besides minimizing the amount of work you do in a task—and you should _always_ strive to do as little work as possible on the main thread—you can improve responsiveness to user input by [breaking up long tasks](https://web.dev/articles/optimize-long-tasks).  

除了尽量减少在任务中所做的工作量（并且应始终努力在主线程上执行尽可能少的工作）之外，还可以通过分解长任务来提高对用户输入的响应能力。

:::info

**Note:** Yielding isn't foolproof, as tasks from third-party JavaScript can still make their way in between first-party tasks after yielding. This can still contribute to input delay for future interactions, and you'll need to be mindful of third-party tasks that may run on an interval, as described in the previous section. This is a problem that [the proposed `scheduler.yield` API](https://github.com/WICG/scheduling-apis/blob/main/explainers/yield-and-continuation.md) is looking to solve.  

注意：生成并非万无一失，因为来自第三方 JavaScript 的任务在生成后仍可以在第一方任务之间传输。这仍可能导致未来交互的输入延迟，并且需要注意可能在一定时间间隔上运行的第三方任务，如上一节所述。这是提议 `scheduler.yield` 的 API 希望解决的问题。

:::

### Be mindful of interaction overlap  

注意交互重叠

A particularly challenging part of optimizing INP can be if you have interactions that overlap. Interaction overlap means that after you've interacted with one element, you make another interaction with the page before the initial interaction has had a chance to render the next frame.  

优化 INP 的一个特别具有挑战性的部分是，如果交互存在重叠。交互重叠意味着在与一个元素交互后，在初始交互有机会呈现下一帧之前，与页面进行另一次交互。

![A depiction of when tasks can overlap to produce long input delays. In this depiction, a click interaction overlaps with a keydown interaction to increase the input delay for the keydown interaction.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-depiction-when-tasks-8c6449133de24.png?imageSlim)

A visualization of two concurrent interactions in the performance profiler in Chrome's DevTools. The rendering work in the initial click interaction causes an input delay for the subsequent keyboard interaction.  

Chrome DevTools 中性能探查器中两个并发交互的可视化效果。初始单击交互中的渲染工作会导致后续键盘交互的输入延迟。

Sources of interaction overlap may be as simple as users making many interactions in a short period of time. This can occur when users type in form fields, where many keyboard interactions can occur in a very short period of time. If the work on a key event is especially expensive—such as in the common case of autocomplete fields where network requests are made to a back end—you have a couple of options:  

交互重叠的来源可能就像用户在短时间内进行多次交互一样简单。当用户在表单字段中键入内容时，可能会发生这种情况，因为在表单字段中，许多键盘交互可能会在很短的时间内发生。如果关键事件的工作成本特别高（例如，在自动完成字段的常见情况下，网络请求是向后端发出的），则有几个选项：

*   Consider [debouncing](https://web.dev/articles/debounce-your-input-handlers) inputs to limit the amount of times an event callback executes in a given period of time.  

    考虑对输入进行去抖动，以限制事件回调在给定时间段内执行的次数。

*   Use [`AbortController`](https://developer.mozilla.org/docs/Web/API/AbortController/abort) to cancel outgoing `fetch` requests so the main thread doesn't become congested handling `fetch` callbacks. Note: an `AbortController` instance's `signal` property can also be used to [abort events](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event).  

    用于 `AbortController` 取消传出 `fetch` 请求，以便主线程在处理 `fetch` 回调时不会变得拥塞。注意： `AbortController` 实例的 `signal` 属性也可用于中止事件。

Another source of increased input delay due to overlapping interactions can be expensive animations. In particular, animations in JavaScript may fire many [`requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame) calls, which may get in the way of user interactions. To get around this, use CSS animations whenever possible to avoid queueing potentially expensive animation frames—but if you do this, make sure you [avoid non-composited animations](https://developer.chrome.com/en/docs/lighthouse/performance/non-composited-animations/) so that animations run mainly on the GPU and compositor threads, and not on the main thread.  

由于重叠交互而导致输入延迟增加的另一个来源可能是昂贵的动画。特别是，JavaScript 中的动画可能会触发许多 `requestAnimationFrame` 调用，这可能会妨碍用户交互。为了解决这个问题，请尽可能使用 CSS 动画来避免对可能昂贵的动画帧进行排队，但如果这样做，请确保避免使用非合成动画，以便动画主要在 GPU 和合成器线程上运行，而不是在主线程上运行。

## Conclusion 结论 结论

While input delays may not represent the majority of the time your interactions take to run, it's important to understand that every part of an interaction takes up an amount of time that you can reduce. If you're [observing long input delay](https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab#how_to_identify_long_input_delays), then you have opportunities to reduce it. Avoiding recurring timer callbacks, breaking up long tasks, and being aware of potential interaction overlap can all help you to reduce input delay, leading to faster interactivity for your website's users.  

虽然输入延迟可能并不代表交互运行所需的大部分时间，但请务必了解交互的每个部分都会占用可以减少的时间。如果您观察到较长的输入延迟，那么您就有机会减少它。避免重复的计时器回调、分解长任务以及了解潜在的交互重叠都可以帮助您减少输入延迟，从而加快网站用户的交互速度。