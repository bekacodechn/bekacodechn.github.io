# 使用 Web Worker 在浏览器主线程之外运行 JavaScript

`metadata:`

**原标题:** Use web workers to run JavaScript off the browser's main thread

**链接:** https://web.dev/articles/off-main-thread

---

An off-main-thread architecture can significantly improve your app's reliability and user experience.

非主线程架构可以显著提高应用的可靠性和用户体验。

In the past 20 years, the web has evolved dramatically from static documents with a few styles and images to complex, dynamic applications. However, one thing has remained largely unchanged: we have just one thread per browser tab (with some exceptions) to do the work of rendering our sites and running our JavaScript.  

在过去的 20 年里，Web 已经从具有一些样式和图像的静态文档发展到复杂的动态应用程序。然而，有一件事基本保持不变：我们每个浏览器选项卡只有一个线程（有一些例外）来完成渲染我们的网站和运行我们的 JavaScript 的工作。

As a result, the main thread has become incredibly overworked. And as web apps grow in complexity, the main thread becomes a significant bottleneck for performance. To make matters worse, the amount of time it takes to run code on the main thread for a given user is **almost completely unpredictable** because device capabilities have a massive effect on performance. That unpredictability will only grow as users access the web from an increasingly diverse set of devices, from hyper-constrained feature phones to high-powered, high-refresh-rate flagship machines.  

结果，主线程变得非常超负荷。随着 Web 应用程序复杂性的增加，主线程成为性能的重大瓶颈。更糟糕的是，在给定用户主线程上运行代码所需的时间几乎是完全不可预测的，因为设备功能对性能有巨大影响。随着用户从越来越多样化的设备访问网络，从超受限的功能手机到高功率、高刷新率的旗舰机，这种不可预测性只会增加。

If we want sophisticated web apps to reliably meet performance guidelines like the [Core Web Vitals](https://web.dev/articles/vitals)—which is based on empirical data about human perception and psychology—we need ways to execute our code **off the main thread (OMT)**.  

如果我们希望复杂的 Web 应用程序能够可靠地满足性能准则，例如 Core Web Vitals（基于有关人类感知和心理的经验数据），我们需要在主线程 （OMT） 之外执行代码的方法。

:::info

**Note:** If you want to hear more about the case for an OMT architecture, watch my CDS 2019 talk below.  

注意：如果您想了解有关 OMT 架构案例的更多信息，请观看下面的 CDS 2019 演讲。

:::

[The main thread is overworked & underpaid (Chrome Dev Summit 2019)](https://www.youtube.com/watch?v=7Rrv9qFMWNM)

## Why web workers? 为什么选择 Web Worker？

JavaScript is, by default, a single-threaded language that runs [tasks](https://web.dev/articles/optimize-long-tasks#what_is_a_task) on [the main thread](https://web.dev/articles/optimize-long-tasks#what_is_the_main_thread). However, web workers provide a sort of escape hatch from the main thread by allowing developers to spin up separate threads to handle work off of the main thread. While the scope of web workers is limited and doesn't offer direct access to the DOM, they can be hugely beneficial if there is considerable work that needs to be done that would otherwise overwhelm the main thread.  

默认情况下，JavaScript 是一种在主线程上运行任务的单线程语言。然而，Web Worker 通过允许开发人员启动单独的线程来处理主线程的工作，从而提供了一种从主线程中逃脱的舱口。虽然 Web Worker 的范围是有限的，并且不提供对 DOM 的直接访问，但如果有大量工作需要完成，否则会压倒主线程，它们可能会非常有益。

Where [Core Web Vitals](https://web.dev/articles/vitals) are concerned, running work off the main thread can be beneficial. In particular, offloading work from the main thread to web workers can reduce contention for the main thread, which can improve important responsiveness metrics such as [Interaction to Next Paint (INP)](https://web.dev/articles/inp) and [First Input Delay (FID)](https://web.dev/articles/fid). When the main thread has less work to process, it can respond more quickly to user interactions.  

就 Core Web Vitals 而言，在主线程上运行工作可能是有益的。特别是，将工作从主线程卸载到 Web Worker 可以减少对主线程的争用，从而可以提高重要的响应能力指标，例如与下一个绘制的交互 （INP） 和首次输入延迟 （FID）。当主线程需要处理的工作较少时，它可以更快地响应用户交互。

Less main thread work—especially during startup—also carries a potential benefit for [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) by reducing long tasks. Rendering an LCP element requires main thread time—either for rendering text or images, which are frequent and common LCP elements—and by reducing main thread work overall, you can ensure that your page's LCP element is less likely to be blocked by expensive work that a web worker could handle instead.  

减少主线程工作（尤其是在启动期间）也通过减少长时间任务为最大内容绘制 （LCP） 带来了潜在好处。呈现 LCP 元素需要主线程时间（无论是用于渲染文本还是图像，这些都是常见且常见的 LCP 元素），并且通过减少整体主线程工作，可以确保页面的 LCP 元素不太可能被 Web Worker 可以处理的昂贵工作阻止。

## Threading with web workers  

使用 Web Worker 进行线程处理

Other platforms typically support parallel work by allowing you to give a thread a function, which runs in parallel with the rest of your program. You can access the same variables from both threads, and access to these shared resources can be synchronized with mutexes and semaphores to prevent race conditions.  

其他平台通常通过允许您为线程提供一个函数来支持并行工作，该函数与程序的其余部分并行运行。您可以从两个线程访问相同的变量，并且对这些共享资源的访问可以与互斥锁和信号量同步，以防止出现争用条件。

In JavaScript, we can get roughly similar functionality from web workers, which have been around since 2007 and supported across all major browsers since 2012. Web workers run in parallel with the main thread, but unlike OS threading, they can't share variables.  

在 JavaScript 中，我们可以从 Web Worker 获得大致类似的功能，这些功能自 2007 年以来一直存在，自 2012 年以来在所有主要浏览器中都支持。Web Worker 与主线程并行运行，但与操作系统线程不同，它们不能共享变量。

:::info

**Note:** Don't confuse web workers with [service workers](https://web.dev/articles/service-workers-cache-storage) or [worklets](https://developer.mozilla.org/docs/Web/API/Worklet). While the names are similar, the functionality and uses are different.  

注意：不要将 Web Worker 与 Service Worker 或 Worklet 混淆。虽然名称相似，但功能和用途不同。

:::

To create a web worker, pass a file to the worker constructor, which starts running that file in a separate thread:  

要创建 Web Worker，请将文件传递给 worker 构造函数，该构造函数开始在单独的线程中运行该文件：

```js
const worker = new Worker("./worker.js");
```

Communicate with the web worker by sending messages via the [`postMessage` API](https://developer.mozilla.org/docs/Web/API/Window/postMessage). Pass the message value as a parameter in the `postMessage` call and then add a message event listener to the worker:  

通过 `postMessage` API 发送消息与 Web Worker 进行通信。在 `postMessage` 调用中将消息值作为参数传递，然后向工作线程添加消息事件侦听器：

### `main.js`

```js
const worker = new Worker('./worker.js');
worker.postMessage([40, 2]);
```

### `worker.js`

```js
addEventListener('message', event => {
  const [a, b] = event.data;

  // Do stuff with the message
  // ...
});
```

To send a message back to the main thread, use the same `postMessage` API in the web worker and set up an event listener on the main thread:  

要将消息发送回主线程，请在 Web Worker 中使用相同的 `postMessage` API，并在主线程上设置事件侦听器：

### `main.js`

```js
const worker = new Worker('./worker.js');

worker.postMessage([40, 2]);
worker.addEventListener('message', event => {
  console.log(event.data);
});
```

### `worker.js`

```js
addEventListener('message', event => {
  const [a, b] = event.data;

  // Do stuff with the message
  postMessage(a + b);
});
```

Admittedly, this approach is somewhat limited. Historically, web workers have mainly been used for moving a single piece of heavy work off the main thread. Trying to handle multiple operations with a single web worker gets unwieldy quickly: you have to encode not only the parameters but also the operation in the message, and you have to do bookkeeping to match responses to requests. That complexity is likely why web workers haven't been adopted more widely.  

诚然，这种方法在某种程度上是有限的。从历史上看，Web Worker 主要用于将单个繁重的工作从主线程中移出。尝试使用单个 Web Worker 处理多个操作很快就会变得笨拙：您不仅要对参数进行编码，还要对消息中的操作进行编码，并且必须进行簿记以匹配对请求的响应。这种复杂性可能是 Web 工作者没有被更广泛采用的原因。

But if we could remove some of the difficulty of communicating between the main thread and web workers, this model could be a great fit for many use cases. And, luckily, there's a library that does just that!  

但是，如果我们能够消除主线程和 Web Worker 之间通信的一些困难，那么这个模型可能非常适合许多用例。而且，幸运的是，有一个图书馆可以做到这一点！

## Comlink: making web workers less work

[Comlink](http://npm.im/comlink) is a library whose goal is to let you use web workers without having to think about the details of `postMessage`. Comlink lets you to share variables between web workers and the main thread almost like other programming languages that support threading.  

Comlink 是一个库，其目标是让您使用 Web Worker，而不必考虑 `postMessage` .Comlink 允许您在 Web Worker 和主线程之间共享变量，就像其他支持线程的编程语言一样。

You set up Comlink by importing it in a web worker and defining a set of functions to expose to the main thread. You then import Comlink on the main thread, wrap the worker, and get access to the exposed functions:  

您可以通过将 Comlink 导入 Web Worker 并定义一组要向主线程公开的函数来设置 Comlink。然后，在主线程上导入 Comlink，包装工作线程，并访问公开的函数：

### `worker.js`

```js
import {expose} from 'comlink';

const api = {
  someMethod() {
    // ...
  }
}

expose(api);
```

### `main.js`

```js
import {wrap} from 'comlink';

const worker = new Worker('./worker.js');
const api = wrap(worker);
```

The `api` variable on main thread behaves the same as the one in the web worker, except that every function returns a promise for a value rather than the value itself.

## What code should you move to a web worker?

Web workers don't have access to the DOM and many APIs like [WebUSB](https://developer.mozilla.org/docs/Web/API/USB), [WebRTC](https://developer.mozilla.org/docs/Web/API/WebRTC_API), or [Web Audio](https://developer.mozilla.org/docs/Web/API/Web_Audio_API), so you can't put pieces of your app that rely on such access in a worker. Still, every small piece of code moved to a worker buys more headroom on the main thread for stuff that _has_ to be there—like updating the user interface.  

Web Worker 无权访问 DOM 和许多 API（如 WebUSB、WebRTC 或 Web Audio），因此您不能将依赖于此类访问权限的应用程序部分放在 Worker 中。尽管如此，每一小段代码都转移到了工作人员身上，从而在主线程上为必须存在的东西（例如更新用户界面）购买了更多的空间。


:::info

**Note:** Restricting UI access to the main thread is actually typical in other languages. In fact, both iOS and Android call the main thread the _UI thread_.  

注意：限制对主线程的 UI 访问实际上是其他语言的典型做法。事实上，iOS 和 Android 都将主线程称为 UI 线程。

:::

One problem for web developers is that most web apps rely on a UI framework like Vue or React to orchestrate everything in the app; everything is a component of the framework and so is inherently tied to the DOM. That would seem to make it difficult to migrate to an OMT architecture.  

Web 开发人员面临的一个问题是，大多数 Web 应用程序都依赖于 Vue 或 React 等 UI 框架来编排应用程序中的所有内容;一切都是框架的组成部分，因此与 DOM 有着内在的联系。这似乎使迁移到 OMT 体系结构变得困难。

However, if we shift to a model in which UI concerns are separated from other concerns, like state management, web workers can be quite useful even with framework-based apps. That's exactly the approach taken with PROXX.  

但是，如果我们转向将 UI 关注点与其他关注点（如状态管理）分开的模型，那么即使使用基于框架的应用程序，Web Worker 也会非常有用。这正是 PROXX 所采用的方法。

## PROXX: an OMT case study  

PROXX：OMT 案例研究

The Google Chrome team developed [PROXX](https://web.dev/articles/load-faster-like-proxx) as a Minesweeper clone that meets [Progressive Web App](https://web.dev/learn/pwa) requirements, including working offline and having an engaging user experience. Unfortunately, early versions of the game performed poorly on constrained devices like feature phones, which led the team to realize that the main thread was a bottleneck.  

Google Chrome 团队将 PROXX 开发为扫雷克隆版，满足渐进式 Web 应用程序要求，包括离线工作和具有引人入胜的用户体验。不幸的是，游戏的早期版本在功能手机等受限设备上表现不佳，这导致团队意识到主线程是一个瓶颈。

The team decided to use web workers to separate the game's visual state from its logic:  

该团队决定使用 Web Worker 将游戏的视觉状态与其逻辑分开：

*   The main thread handles rendering of animations and transitions.  

    主线程处理动画和过渡的渲染。

*   A web worker handles game logic, which is purely computational.  

    Web Worker 处理游戏逻辑，这纯粹是计算性的。

:::info
**Note:** This approach is similar to the Redux [Flux pattern](https://facebook.github.io/flux/), so many Flux apps may be able to migrate fairly easily to an OMT architecture. Take a look at [this blog post](http://dassur.ma/things/react-redux-comlink/) to read more about applying OMT to a Redux app.  
注意：这种方法类似于 Redux Flux 模式，因此许多 Flux 应用程序可能能够相当容易地迁移到 OMT 架构。看看这篇博文，了解更多关于将 OMT 应用于 Redux 应用的信息。
:::

OMT had interesting effects on PROXX's feature phone performance. In the non-OMT version, the UI is frozen for six seconds after the user interacts with it. There's no feedback, and the user has to wait for the full six seconds before being able to do something else.


[UI response time in the non-OMT version of PROXX.](https://web.dev/static/articles/off-main-thread/video/web-dev-assets/off-main-thread/proxx-nonomt.webm)

In the OMT version, however, the game takes _twelve_ seconds to complete a UI update. While that seems like a performance loss, it actually leads to increased feedback to the user. The slowdown occurs because the app is shipping more frames than the non-OMT version, which isn't shipping any frames at all. The user therefore knows that something is happening and can continue playing as the UI updates, making the game feel considerably better.  

然而，在 OMT 版本中，游戏需要 12 秒才能完成 UI 更新。虽然这似乎是性能损失，但它实际上会导致对用户的反馈增加。之所以出现速度变慢，是因为应用发布的帧数多于非 OMT 版本，而非 OMT 版本根本没有发布任何帧。因此，用户知道正在发生某些事情，并且可以随着 UI 更新而继续玩，从而使游戏感觉好得多。

[UI response time in the OMT version of PROXX.](https://web.dev/static/articles/off-main-thread/video/web-dev-assets/off-main-thread/proxx-omt.webm)


This is a conscious tradeoff: we give users of constrained devices an experience that _feels_ better without penalizing users of high-end devices.  

这是一个有意识的权衡：我们为受限设备的用户提供感觉更好的体验，而不会惩罚高端设备的用户。

## Implications of an OMT architecture  (OMT 体系结构的含义)

As the PROXX example shows, OMT makes your app reliably run on a wider range of devices, but it doesn't make your app faster:  

正如 PROXX 示例所示，OMT 使你的应用在更广泛的设备上可靠地运行，但它不会使你的应用更快：

*   You're just moving work from the main thread, not reducing the work.  

    你只是把工作从主线程上移开，而不是减少工作。

*   The extra communication overhead between the web worker and the main thread can sometimes make things marginally slower.  

    Web Worker 和主线程之间的额外通信开销有时会使事情稍微变慢。

### Considering the tradeoffs

Since the main thread is free to process user interactions like scrolling while JavaScript is running, there are fewer dropped frames even though total wait time may be marginally longer. Making the user wait a bit is preferable to dropping a frame because the margin of error is smaller for dropped frames: dropping a frame happens in milliseconds, while you have _hundreds_ of milliseconds before a user perceives wait time.  

由于主线程可以自由地处理用户交互，例如在 JavaScript 运行时滚动，因此即使总等待时间可能稍长，丢帧也会更少。让用户稍等片刻比丢帧更可取，因为丢帧的误差幅度较小：丢帧以毫秒为单位，而用户在感知等待时间之前有数百毫秒的时间。

Because of the unpredictability of performance across devices, the goal of OMT architecture is really about **reducing risk**—making your app more robust in the face of highly variable runtime conditions—not about the performance benefits of parallelization. The increase in resilience and the improvements to UX are more than worth any small tradeoff in speed.  

由于跨设备性能的不可预测性，OMT 体系结构的目标实际上是降低风险，使应用在面对高度可变的运行时条件时更加可靠，而不是并行化的性能优势。弹性的提高和用户体验的改进都值得在速度上做出任何小小的权衡。

:::info

**Note:** Developers are sometimes concerned about the cost of copying complex objects across the main thread and web workers. There's more detail in the talk, but, in general, you shouldn't break your performance budget if your object's stringified JSON representation is less than 10 KB. If you need to copy larger objects, consider using [ArrayBuffer](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or [WebAssembly](https://webassembly.org/). You can read more about this issue in [this blog post about `postMessage` performance](https://dassur.ma/things/is-postmessage-slow).  

注意：开发人员有时会担心在主线程和 Web Worker 之间复制复杂对象的成本。演讲中有更多细节，但一般来说，如果对象的字符串化 JSON 表示形式小于 10 KB，则不应超出性能预算。如果需要复制较大的对象，请考虑使用 ArrayBuffer 或 WebAssembly。您可以在这篇有关性能的博客文章中阅读有关 `postMessage` 此问题的更多信息。

:::

### A note about tooling

Web workers aren't yet mainstream, so most module tools—like [webpack](https://webpack.js.org/) and [Rollup](https://github.com/rollup/rollup)—don't support them out of the box. ([Parcel](https://parceljs.org/) does though!) Luckily, there are plugins to make web workers, well, _work_ with webpack and Rollup:  

Web Worker 还不是主流，因此大多数模块工具（如 webpack 和 Rollup）都不支持开箱即用。（虽然包裹确实如此！幸运的是，有一些插件可以让 Web Worker 与 webpack 和 Rollup 一起工作：

*   [worker-plugin](https://github.com/GoogleChromeLabs/worker-plugin) for webpack  

    webpack 的 worker-plugin

*   [rollup-plugin-off-main-thread](https://github.com/surma/rollup-plugin-off-main-thread) for Rollup  

    rollup-plugin-off-main-thread 用于 Rollup

## Summing up 总结

To make sure our apps are as reliable and accessible as possible, especially in an increasingly globalized marketplace, we need to support constrained devices—they're how most users are accessing the web globally. OMT offers a promising way to increase performance on such devices without adversely affecting users of high-end devices.  

为了确保我们的应用程序尽可能可靠和易于访问，尤其是在日益全球化的市场中，我们需要支持受限设备 - 这是大多数用户在全球范围内访问网络的方式。OMT 提供了一种很有前途的方法来提高此类设备的性能，而不会对高端设备的用户产生不利影响。

Also, OMT has secondary benefits:  

此外，OMT 还有次要好处：

*   It moves JavaScript execution costs to a separate thread.  

    它将 JavaScript 执行成本转移到一个单独的线程上。

*   It moves _parsing_ costs, meaning UI might boot up faster. That might reduce [First Contentful Paint](https://web.dev/articles/fcp) or even [Time to Interactive](https://web.dev/articles/tti), which can in turn increase your [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) score.  

    它增加了解析成本，这意味着 UI 可能会启动得更快。这可能会减少 First Contentful Paint 甚至 Time to Interactive，这反过来又可以提高您的 Lighthouse 分数。

Web workers don't have to be scary. Tools like Comlink are taking the work out of workers and making them a viable choice for a wide range of web applications.  

Web 工作者不必害怕。像 Comlink 这样的工具正在减轻工人的工作，使他们成为各种 Web 应用程序的可行选择。

_Hero image from [Unsplash](https://unsplash.com/), by [James Peacock](https://unsplash.com/@jimmyp9751).  

主图片来自 Unsplash，作者：James Peacock。_
