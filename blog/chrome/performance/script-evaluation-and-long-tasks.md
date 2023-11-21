# 脚本评估和长任务

`metadata:`

**原标题:** Script evaluation and long tasks

**链接:** https://web.dev/articles/script-evaluation-and-long-tasks

---

When loading scripts, it takes time for the browser to evaluate them prior to execution, which can cause long tasks. Learn how script evaluation works, and what you can do to keep it from causing long tasks during page load.  

加载脚本时，浏览器需要时间在执行之前对其进行评估，这可能会导致任务过长。了解脚本评估的工作原理，以及您可以采取哪些措施来防止它在页面加载期间导致长时间的任务。

When it comes to optimizing [Interaction to Next Paint (INP)](https://web.dev/articles/inp), most of the advice you'll encounter is to optimize interactions themselves. For example, in the [optimize long tasks guide](https://web.dev/articles/optimize-long-tasks), techniques such as yielding with `setTimeout`, `isInputPending`, and so forth are discussed. These techniques are beneficial, as they allow the main thread some breathing room by avoiding long tasks, which can allow more opportunities for interactions and other activity to run sooner, rather than if they had to wait for a single long task.  

在优化 Interaction to Next Paint （INP） 时，您会遇到的大多数建议是优化交互本身。例如，在优化长任务指南中，讨论了使用 `setTimeout` 、 `isInputPending` 等进行屈服等技术。这些技术是有益的，因为它们通过避免长时间的任务为主线程提供了一些喘息的空间，这可以允许更多机会更快地进行交互和其他活动，而不是等待一个长时间的任务。

However, what about the long tasks that come from loading scripts themselves? These tasks can interfere with user interactions and affect a page's INP during load. This guide will explore how browsers handle tasks kicked off by script evaluation, and look into what you may be able to do to break up script evaluation work so that your main thread can be more responsive to user input while the page is loading.  

但是，加载脚本本身带来的冗长任务呢？这些任务可能会干扰用户交互，并在加载期间影响页面的 INP。本指南将探讨浏览器如何处理脚本评估启动的任务，并研究您可以采取哪些措施来分解脚本评估工作，以便您的主线程在页面加载时可以更好地响应用户输入。

## What is script evaluation?  

什么是脚本评估？

If you've profiled an application that ships a lot of JavaScript, you may have seen long tasks where the culprit is labeled **Evaluate Script**.  

如果您已经分析了一个提供大量 JavaScript 的应用程序，您可能已经看到过将罪魁祸首标记为 Evaluate Script 的长任务。

![Script evaluation work as visualized in the performance profiler of Chrome DevTools. The work causes a long task during startup, which blocks the main thread's ability to respond to user interactions.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/script-evaluation-as-vis-17dff4e25f1c8.png?imageSlim)

Script evaluation work as shown in the performance profiler in Chrome DevTools. In this case, the work is enough to cause a long task that blocks the main thread from taking on other work—including tasks that drive user interactions.  

脚本评估工作如 Chrome DevTools 中的性能分析器中所示。在这种情况下，该工作足以导致一个长时间的任务，从而阻止主线程承担其他工作，包括驱动用户交互的任务。

Script evaluation is a necessary part of executing JavaScript in the browser, as JavaScript is compiled [just-in-time before execution](https://en.wikipedia.org/wiki/Just-in-time_compilation). When a script is evaluated, it is first parsed for errors. If the parser doesn't find errors, the script is then compiled into [bytecode](https://en.wikipedia.org/wiki/Bytecode), and then can continue onto execution.  

脚本评估是在浏览器中执行 JavaScript 的必要部分，因为 JavaScript 是在执行之前实时编译的。评估脚本时，首先分析脚本是否存在错误。如果分析器未发现错误，则脚本将编译为字节码，然后可以继续执行。

Though necessary, script evaluation can be problematic, as users may try to interact with a page shortly after it initially renders. However, just because a page has _rendered_ doesn't mean that the page has finished _loading_. Interactions that take place during load can be delayed because the page is busy evaluating scripts. While there's no guarantee that the desired interaction can take place at this point in time—as a script responsible for it may not have loaded yet—there could be interactions dependent on JavaScript that _are_ ready, or the interactivity doesn't depend on JavaScript at all.  

尽管有必要，但脚本评估可能会有问题，因为用户可能会在页面最初呈现后不久尝试与页面进行交互。但是，仅仅因为页面已呈现并不意味着页面已完成加载。加载期间发生的交互可能会延迟，因为页面正忙于评估脚本。虽然不能保证所需的交互可以在此时发生（因为负责它的脚本可能尚未加载），但可能存在依赖于 JavaScript 的交互，或者交互性根本不依赖于 JavaScript。

:::info

**Note:** One metric that might give you insight into whether you have excessive script evaluation occurring during page load is [Total Blocking Time (TBT)](https://web.dev/articles/tbt), as it is a [load responsiveness](https://web.dev/articles/user-centric-performance-metrics#types_of_metrics) metric. [Because TBT correlates well with INP](https://almanac.httparchive.org/en/2022/performance#inp-and-tbt), a page with a high TBT is a reasonable indicator that there may be high INP values during load that may be tied to script evaluation work.  

注意：总阻塞时间 （TBT） 是一个指标，可以让您深入了解在页面加载期间是否发生了过多的脚本评估，因为它是一个加载响应能力指标。由于 TBT 与 INP 的相关性很好，因此具有高 TBT 的页面是一个合理的指标，表明在加载期间可能存在高 INP 值，这可能与脚本评估工作有关。

:::

## The relationship between scripts and the tasks that evaluate them  

脚本与评估脚本的任务之间的关系

How tasks responsible for script evaluation are kicked off depends on whether the script you're loading is loaded via a regular `<script>` element, or if a script is a module loaded with the `type=module`. Since browsers have the tendency to handle things differently, how the major browser engines handle script evaluation will be touched upon where script evaluation behaviors across them vary.  

负责脚本计算的任务的启动方式取决于要加载的脚本是通过常规 `<script>` 元素加载的，还是脚本是使用 `type=module` .由于浏览器倾向于以不同的方式处理事情，因此将涉及主要浏览器引擎如何处理脚本评估，其中脚本评估行为各不相同。

### Loading scripts with the `<script>` element  

使用元素加载脚本

:::info

**Key point:** This section deals with loading scripts using the `<script>` element _without_ the `type=module` attribute.  

关键点：本节介绍如何使用不带 `type=module` 属性的 `<script>` 元素加载脚本。

:::

The number of tasks dispatched to evaluate scripts generally has a direct relationship with the number of `<script>` elements on a page. Each `<script>` element kicks off a task to evaluate the requested script so it can be parsed, compiled, and executed. **This is the case for Chromium-based browsers, Safari, _and_ Firefox.**  

为评估脚本而分配的任务数通常与页面上 `<script>` 的元素数有直接关系。每个 `<script>` 元素都会启动一个任务来评估请求的脚本，以便可以对其进行解析、编译和执行。基于 Chromium 的浏览器、Safari 和 Firefox 就是这种情况。

Why does this matter? Let's say you're using a bundler to manage your production scripts, and you've configured it to bundle everything your page needs to run into a single script. If this is the case for your website, you can expect that there will be a single task dispatched to evaluate that script. Is this a bad thing? Not necessarily—unless that script is _huge_.  

为什么这很重要？假设您正在使用捆绑器来管理生产脚本，并且已将其配置为将页面运行所需的所有内容捆绑到单个脚本中。如果您的网站是这种情况，您可以预期将分配一个任务来评估该脚本。这是一件坏事吗？不一定，除非这个剧本很大。

You can break up script evaluation work by avoiding loading large chunks of JavaScript, and load more individual, smaller scripts using additional `<script>` elements.  

您可以通过避免加载大块 JavaScript 来分解脚本评估工作，并使用其他 `<script>` 元素加载更多单独的小型脚本。

:::info

**Key point:** As devices vary in their capability, it's very difficult to define a set limit for how large individual scripts should be. To achieve a decent balance between compression efficiency, download time, and script evaluation time, a limit of 100 kilobytes per individual script is a good target.  

关键点：由于设备的功能各不相同，因此很难定义单个脚本的大小限制。为了在压缩效率、下载时间和脚本评估时间之间取得适当的平衡，每个脚本 100 KB 的限制是一个很好的目标。

:::

While you should always strive to load as little JavaScript as possible during page load, splitting up your scripts ensures that, instead of one large task that may block the main thread, you have a greater number of smaller tasks that won't block the main thread at all—or at least less than what you started with.  

虽然您应该始终努力在页面加载期间加载尽可能少的 JavaScript，但拆分脚本可以确保，您有更多根本不会阻塞主线程的小任务，或者至少少于您开始时的任务，而不是一个可能阻塞主线程的大任务。

![Multiple tasks involving script evaluation as visualized in the performance profiler of Chrome DevTools. Because multiple smaller scripts are loaded instead of fewer larger scripts, tasks are less likely to become long tasks, allowing the main thread to respond to user input more quickly.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/multiple-tasks-involving-744bb86f09b1a.png?imageSlim)

Multiple tasks spawned to evaluate scripts as a result of multiple `<script>` elements present in the page's HTML. This is preferable to sending one large script bundle to users, which is more likely to block the main thread.  

由于页面的 HTML 中存在多个元素，因此生成了多个 `<script>` 任务来评估脚本。这比向用户发送一个大型脚本包更可取，后者更有可能阻塞主线程。

You can think of breaking up tasks for script evaluation as being somewhat similar to [yielding during event callbacks that run during an interaction](https://web.dev/articles/optimize-long-tasks#use_asyncawait_to_create_yield_points). However, with script evaluation, the yielding mechanism breaks up the JavaScript you load into multiple smaller scripts, rather than a smaller number of larger scripts than are more likely to block the main thread.  

您可以认为分解脚本评估任务有点类似于在交互期间运行的事件回调期间的屈服。然而，通过脚本评估，屈服机制将您加载的JavaScript分解为多个较小的脚本，而不是更有可能阻塞主线程的较少数量的较大脚本。

:::info

**Key point:** Currently, Chromium-based browsers will execute all loaded scripts with the `defer` attribute in the same task as the [`DOMContentLoaded` event](https://developer.mozilla.org/docs/Web/API/Window/DOMContentLoaded_event). While this minimizes overall layout work, the cost is the increased likelihood of a longer task, which may cause other performance problems. A potential solution is [currently being explored](https://github.com/whatwg/html/issues/6230). This behavior also takes place with scripts loaded using the `type=module` attribute, as such scripts are deferred by default.  

关键点：目前，基于 Chromium 的浏览器将在与 `DOMContentLoaded` 事件相同的任务中执行所有加载的带有该 `defer` 属性的脚本。虽然这样可以最大程度地减少整体布局工作，但代价是任务时间更长的可能性增加，这可能会导致其他性能问题。目前正在探索一种潜在的解决方案。使用该 `type=module` 属性加载的脚本也会发生此行为，因为默认情况下会延迟此类脚本。

:::

### Loading scripts with the `<script>` element and the `type=module` attribute  

加载带有元素和属性的脚本

:::info

**Key point:** If you're not bundling ES modules and loading them using the `type=module` attribute, you could actually end up slowing down page startup. For more information, read the [trade-offs and considerations section](https://web.dev/articles/script-evaluation-and-long-tasks#trade-offs_and_considerations) later on in this guide.  

关键点：如果你没有捆绑 ES 模块并使用该 `type=module` 属性加载它们，你实际上最终可能会减慢页面启动速度。有关详细信息，请阅读本指南后面的权衡和注意事项部分。

:::

It's now possible to load ES modules natively in the browser with the [`type=module` attribute](https://web.dev/articles/serve-modern-code-to-modern-browsers#use_lessscript_type=modulegreater) on the `<script>` element. This approach to script loading carries some developer experience benefits, such as not having to transform code for production use—especially when used in combination with [import maps](https://developer.mozilla.org/docs/Web/HTML/Element/script/type/importmap). However, loading scripts in this way schedules tasks that differ from browser to browser.  

现在，可以使用 `<script>` 元素上的 `type=module` 属性在浏览器中本地加载 ES 模块。这种脚本加载方法具有一些开发人员体验优势，例如不必转换代码以供生产使用，尤其是在与导入映射结合使用时。但是，以这种方式加载脚本会根据浏览器的不同安排不同的任务。

#### Chromium-based browsers 基于 Chromium 的浏览器

In browsers such as Chrome—or those derived from it—loading ES modules using the `type=module` attribute produces different sorts of tasks than you'd normally see when not using `type=module`. For example, a task for each module script will run that involves activity labeled as **Compile module**.  

在 Chrome 等浏览器（或从其派生的浏览器）中，使用 该 `type=module` 属性加载 ES 模块会生成不同类型的任务，这与不使用 `type=module` 时通常看到的任务类型不同。例如，将运行每个模块脚本的任务，该任务涉及标记为“编译模块”的活动。

![Module compilation work in multiple tasks as visualized in Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/module-compilation-in-mu-724bec674b5df.png?imageSlim)

Module loading behavior in Chromium-based browsers. Each module script will spawn a **Compile module** call to compile their contents prior to evaluation.  

基于 Chromium 的浏览器中的模块加载行为。每个模块脚本将生成一个 Compile 模块调用，以在评估之前编译其内容。

Once the modules have compiled, any code that subsequently runs in them will kick off activity labeled as **Evaluate module**.  

模块编译完成后，随后在其中运行的任何代码都将启动标记为“评估模块”的活动。

![Just-in-time evaluation of a module as visualized in the performance panel of Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/just-time-evaluation-a-660d5e72fb916.png?imageSlim)

When code in a module runs, that module will be evaluated just-in-time.  

当模块中的代码运行时，将实时评估该模块。

The effect here—in Chrome and related browsers, at least—is that the compilation steps are broken up when using ES modules. This is a clear win in terms of managing long tasks; however, the resulting module evaluation work that results still means you're incurring some unavoidable cost. While you should strive to ship as little JavaScript as possible, using ES modules—regardless of the browser—provides the following benefits:  

至少在 Chrome 和相关浏览器中，这里的效果是，使用 ES 模块时，编译步骤被分解了。在管理长期任务方面，这是一个明显的胜利;但是，由此产生的模块评估工作仍然意味着您会产生一些不可避免的成本。虽然您应该努力提供尽可能少的 JavaScript，但无论使用哪种浏览器，使用 ES 模块都具有以下好处：

*   All module code is automatically run in [strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode), which allows potential optimizations by JavaScript engines that couldn't otherwise be made in a non-strict context.  

    所有模块代码都自动在严格模式下运行，这允许 JavaScript 引擎进行潜在的优化，否则这些优化无法在非严格上下文中进行。

*   Scripts loaded using `type=module` are treated as if they were [deferred](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer) by default. It's possible to use the `async` attribute on scripts loaded with `type=module` to change this behavior.  

    默认情况下，使用 `type=module` 加载的脚本被视为延迟。可以在加载的 `type=module` 脚本上使用该 `async` 属性来更改此行为。

#### Safari and Firefox Safari 和 Firefox

When modules are loaded in Safari and Firefox, each of them is evaluated in a separate task. This means you could theoretically load a single top-level module consisting of only [static `import`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import) statements to other modules, and every module loaded will incur a separate network request and task to evaluate it.  

当模块加载到 Safari 和 Firefox 中时，每个模块都会在单独的任务中进行评估。这意味着从理论上讲，您可以将仅包含静态 `import` 语句的单个顶级模块加载到其他模块，并且加载的每个模块都会产生一个单独的网络请求和任务来评估它。

### Loading scripts with dynamic  

加载带有动态的脚本`import()`

[Dynamic `import()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import) is another method for loading scripts. Unlike static `import` statements that are required to be at the top of an ES module, a dynamic `import()` call can appear anywhere in a script to load a chunk of JavaScript on demand. This technique is called [code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting).  

Dynamic `import()` 是加载脚本的另一种方法。与需要位于 ES 模块顶部的静态 `import` 语句不同，动态 `import()` 调用可以出现在脚本中的任何位置，以按需加载 JavaScript 块。这种技术称为代码拆分。

Dynamic `import()` has two advantages when it comes to improving INP:  

在改善INP方面，Dynamic `import()` 有两个优势：

1.  Modules which are deferred to load later reduce main thread contention during startup by reducing the amount of JavaScript loaded at that time. This frees up the main thread so it can be more responsive to user interactions.  

    推迟加载的模块通过减少当时加载的 JavaScript 量来减少启动期间的主线程的使用。这释放了主线程，因此它可以更好地响应用户交互。

2.  When dynamic `import()` calls are made, each call will effectively separate the compilation and evaluation of each module to its own task. Of course, a dynamic `import()` that loads a very large module will kick off a rather large script evaluation task, and that can interfere with the ability of the main thread to respond to user input if the interaction occurs at the same time as the dynamic `import()` call. **Therefore, it's still very important that you load as little JavaScript as possible.**  

    当进行动态import（）调用时，每次调用都会有效地将每个模块的编译和评估分离到自己的任务中。当然，加载一个非常大的模块的动态import（）将启动一个相当大的脚本评估任务，如果交互与动态import（）调用同时发生，这可能会干扰主线程响应用户输入的能力。因此，尽可能少地加载JavaScript仍然非常重要。

Dynamic `import()` calls behave similarly in all major browser engines: the script evaluation tasks that result will be the same as the amount of modules that are dynamically imported.  

动态调用在所有主要浏览器引擎中的行为都类似：生成的脚本评估任务将与动态 `import()` 导入的模块数量相同。

### Loading scripts in a web worker  

在 Web Worker 中加载脚本

[Web workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API) are a special JavaScript use case. Web workers are registered on the main thread, and the code within the worker then runs on its own thread. This is hugely beneficial in the sense that—while the code that registers the web worker runs on the main thread—the code within the web worker doesn't. This reduces main thread congestion, and can help keep the main thread more responsive to user interactions.  

Web Worker 是一个特殊的 JavaScript 用例。Web Worker 在主线程上注册，然后 Worker 中的代码在其自己的线程上运行。从某种意义上说，这是非常有益的，因为虽然注册 Web Worker 的代码在主线程上运行，但 Web Worker 中的代码却不然。这样可以减少主线程拥塞，并有助于使主线程对用户交互的响应速度更快。

In addition to reducing main thread work, web workers _themselves_ can load external scripts to be used in the worker context, either through [`importScripts`](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts) or static `import` statements in browsers that support [module workers](https://web.dev/articles/module-workers). The result is that any script requested by a web worker is evaluated off the main thread.  

除了减少主线程工作之外，Web Worker 本身还可以通过 `importScripts` 支持模块 Worker 的浏览器中的静态 `import` 语句加载要在 Worker 上下文中使用的外部脚本。结果是，Web Worker 请求的任何脚本都会在主线程之外进行评估。

:::info

**Read to learn more:** [Use web workers to run JavaScript off the browser's main thread](https://web.dev/articles/off-main-thread).  

阅读以了解更多信息：使用 Web Worker 在浏览器的主线程上运行 JavaScript。

:::

## Trade-offs and considerations  

权衡和注意事项

While breaking up your scripts into separate, smaller files helps limit long tasks as opposed to loading fewer, much larger files, it's important to take some things into account when deciding how to break scripts up.  

虽然将脚本分解为单独的较小文件有助于限制较长的任务，而不是加载更少、更大的文件，但在决定如何分解脚本时，请务必考虑一些事项。

### Compression efficiency 压缩效率

[Compression](https://web.dev/articles/reduce-network-payloads-using-text-compression) is a factor when it comes to breaking up scripts. When scripts are smaller, compression becomes somewhat less efficient. Larger scripts will benefit much more from compression. While increasing compression efficiency helps to keep load times for scripts as low as possible, it's a bit of a balancing act to ensure that you're breaking up scripts into enough smaller chunks to facilitate better interactivity during startup.  

压缩是分解脚本的一个因素。当脚本较小时，压缩效率会降低。较大的脚本将从压缩中受益更多。虽然提高压缩效率有助于尽可能缩短脚本的加载时间，但要确保将脚本分解为足够小的块，以便在启动期间实现更好的交互性，这是一种平衡行为。

Bundlers are ideal tools for managing the output size for the scripts your website depends on:  

打包器是管理网站所依赖的脚本输出大小的理想工具：

*   Where webpack is concerned, its `SplitChunksPlugin` plugin can help. Consult the [`SplitChunksPlugin` documentation](https://webpack.js.org/plugins/split-chunks-plugin/) for options you can set to help manage asset sizes.  

    就 webpack 而言，它的 `SplitChunksPlugin` 插件可以提供帮助。请参阅文档， `SplitChunksPlugin` 了解您可以设置的选项，以帮助管理资产规模。

*   For other bundlers such as [Rollup](https://rollupjs.org/) and [esbuild](https://esbuild.github.io/), you can manage script file sizes by using dynamic `import()` calls in your code. These bundlers—as well as webpack—will automatically break off the dynamically imported asset into its own file, thus avoiding larger initial bundle sizes.  

    对于其他捆绑程序（如 Rollup 和 esbuild），可以通过在代码中使用动态 `import()` 调用来管理脚本文件大小。这些打包器（以及 webpack）会自动将动态导入的资源分解到自己的文件中，从而避免更大的初始捆绑大小。

### Cache invalidation 缓存失效

Cache invalidation plays a big role in how fast a page loads on repeat visits. When you ship large, monolithic script bundles, you're at a disadvantage when it comes to browser caching. This is because when you update your first-party code—either through updating packages or shipping bug fixes—the entire bundle becomes invalidated and must be downloaded again.  

缓存失效在重复访问时页面加载速度方面起着重要作用。当您发布大型单体脚本包时，在浏览器缓存方面处于劣势。这是因为当您更新第一方代码时（无论是通过更新软件包还是发布错误修复），整个捆绑包将失效，必须重新下载。

By breaking up your scripts, you're not just breaking up script evaluation work across smaller tasks, you're also increasing the likelihood that return visitors will grab more scripts from the browser cache instead of from the network. This translates into an overall faster page load.  

通过分解脚本，您不仅可以将脚本评估工作分解到较小的任务中，还可以增加回访者从浏览器缓存而不是从网络中获取更多脚本的可能性。这意味着整体页面加载速度更快。

:::info

**Key point:** In order for caching to be both efficient and to avoid stale resources from being served from the cache, be sure that your bundler is [generating resources with a hash in the file name](https://bundlers.tooling.report/hashing/).  

关键点：为了使缓存既高效又避免从缓存中提供过时的资源，请确保您的捆绑程序生成的资源在文件名中带有哈希值。

:::

### Nested modules and loading performance  

嵌套模块和加载性能

If you're shipping ES modules in production and loading them with the `type=module` attribute, you need to be aware of how module nesting can impact startup time. Module nesting refers to when an ES module statically imports another ES module that statically imports another ES module:  

如果要在生产环境中交付 ES 模块并使用该 `type=module` 属性加载它们，则需要了解模块嵌套如何影响启动时间。模块嵌套是指一个 ES 模块静态导入另一个 ES 模块，而另一个 ES 模块静态导入另一个 ES 模块：

```js
// a.js
import {b} from './b.js';

// b.js
import {c} from './c.js';
```

If your ES modules are not bundled together, the preceding code results in a network request chain: when `a.js` is requested from a `<script>` element, another network request is dispatched for `b.js`, which then involves _another_ request for `c.js`. One way to avoid this is to use a bundler—but be sure you're configuring your bundler to break up scripts to spread out script evaluation work.  

如果你的 ES 模块没有捆绑在一起，前面的代码就会产生一个网络请求链：当从 `<script>` 元素请求 `a.js` 时，另一个网络请求就会被分派给 `b.js`，然后又涉及到另一个请求 `c.js`。避免这种情况的方法之一是使用捆绑程序，但要确保配置捆绑程序时将脚本分割开来，以分散脚本评估工作。

If you don't want to use a bundler, then another way to get around nested module calls is to use the [`modulepreload` resource hint](https://developer.chrome.com/blog/modulepreload/), which will preload ES modules ahead of time to avoid network request chains.  

如果您不想使用打包器，那么绕过嵌套模块调用的另一种方法是使用 `modulepreload` 资源提示，这将提前预加载 ES 模块以避免网络请求链。

## Conclusion 结论

Optimizing evaluation of scripts in the browser is no doubt a tricky feat. The approach depends on your website's requirements and constraints. However, by splitting up scripts, you're spreading the work of script evaluation over numerous smaller tasks, and therefore giving the main thread the ability to handle user interactions more efficiently, rather than blocking the main thread.  

在浏览器中优化脚本的评估无疑是一项棘手的壮举。该方法取决于您网站的要求和限制。但是，通过拆分脚本，可以将脚本评估工作分散到许多较小的任务中，从而使主线程能够更有效地处理用户交互，而不是阻塞主线程。

To recap, here are some things you can to do to break up large script evaluation tasks:  

回顾一下，您可以执行以下操作来分解大型脚本评估任务：

*   When loading scripts using the `<script>` element without the `type=module` attribute, avoid loading scripts that are very large, as these will kick off resource-intensive script evaluation tasks that block the main thread. Spread out your scripts over more `<script>` elements to break up this work.  

    使用不带属性 `type=module` 的 `<script>` 元素加载脚本时，请避免加载非常大的脚本，因为这些脚本将启动阻塞主线程的资源密集型脚本评估任务。将脚本分散到更多 `<script>` 元素上，以分解这项工作。

*   Using the `type=module` attribute to load ES modules natively in the browser will kick off individual tasks for evaluation for each separate module script.  

    使用 `type=module` 属性在浏览器中加载 ES 模块时，将为每个独立的模块脚本启动单独的评估任务。

*   Reduce the size of your initial bundles by using dynamic `import()` calls. This also works in bundlers, as bundlers will treat each dynamically imported module as a "split point," resulting in a separate script being generated for each dynamically imported module.  

    使用动态 `import()` 调用减小初始捆绑包的大小。这也适用于打包器，因为打包器会将每个动态导入的模块视为一个“分割点”，从而为每个动态导入的模块生成一个单独的脚本。

*   Be sure to weigh trade-offs such as compression efficiency and cache invalidation. Larger scripts will compress better, but are more likely to involve more expensive script evaluation work in fewer tasks, and result in browser cache invalidation, leading to overall lower caching efficiency.  

    请务必权衡压缩效率和缓存失效等利弊。较大的脚本会更好地压缩，但更有可能在更少的任务中涉及更昂贵的脚本评估工作，并导致浏览器缓存失效，从而导致整体缓存效率降低。

*   If using ES modules natively without bundling, use the `modulepreload` resource hint to optimize the loading of them during startup.  

    如果在不捆绑的情况下本机使用 ES 模块，请使用 `modulepreload` 资源提示在启动期间优化它们的加载。

*   As always, ship as little JavaScript as possible.  

    与往常一样，尽可能少地发布 JavaScript。

It's a balancing act for sure—but by breaking up scripts and reducing initial payloads via dynamic `import()`, you can achieve better startup performance and better accommodate user interactions during that crucial startup period. This should help you score better on the INP metric, thus delivering a better user experience.  

这当然是一种平衡行为，但通过分解脚本并通过动态 `import()` 减少初始有效负载，您可以获得更好的启动性能，并在关键的启动期间更好地适应用户交互。这应该可以帮助您在 INP 指标上获得更好的分数，从而提供更好的用户体验。

_Hero image from [Unsplash](https://unsplash.com/), by [Markus Spiske](https://unsplash.com/@markusspiske).  

来自 Unsplash 的英雄图片，作者：Markus Spiske。_


