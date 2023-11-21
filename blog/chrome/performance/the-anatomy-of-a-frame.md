# 剖析帧的生成过程 

`metadata:`

**原标题:** The Anatomy of a Frame

**链接:** https://aerotwist.com/blog/the-anatomy-of-a-frame/

---

**Caveat: this is a Blink / Chrome view of the world. Most of the main thread tasks are "shared" in some form by all vendors, like layout or style calcs, but this overall architecture may not be.**

注意：这是一个Blink/Chrome的世界观。大多数主线程任务都以某种形式被所有供应商“共享”，比如布局或样式计算，但这个整体架构可能不是。

## A PICTURE SPEAKS A THOUSAND WORDS 一张照片代表一千个字

It really does, so let's start with one of those:

确实如此，所以让我们从其中一个开始：

![20231121221926](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231121222100.png)

The full process of getting pixels to screen.

获取像素到屏幕的完整过程。

## PROCESSES

That's a lot of content in a small space, so let's define things a little more. It can be helpful to have the diagram above alongside these definitions, so maybe [fire that up image next to this post](https://aerotwist.com/static/blog/the-anatomy-of-a-frame/anatomy-of-a-frame.svg) or, if you're so inclined you could, you know, print it out.

在一个小空间里有很多内容，所以让我们多定义一点。把上面的图表和这些定义放在一起会很有帮助，所以也许可以在这篇文章旁边打开图片，或者，如果你有兴趣，你可以，你知道，打印出来。

Let's start with the processes:

*   **Renderer Process**. The surrounding container for a tab. It contains multiple threads that, together, are responsible for various aspects of getting your page on screen. These threads are the _Compositor_, _Tile Worker_, and _Main_ threads.

    渲染器进程。标签的周围容器。它包含多个线程，它们共同负责将页面放在屏幕上的各个方面。这些线程是Compositor、Tile Worker和Main线程。

*   **GPU Process**. This is the single process that serves all tabs and the surrounding browser process. As frames are committed the GPU process will upload any tiles and other data (like quad vertices and matrices) to the GPU for actually pushing pixels to screen. The GPU Process contains a single thread, called the GPU Thread that actually does the work.

    GPU进程。这是服务于所有选项卡和周围浏览器进程的单一进程。当帧提交时，GPU进程将上传任何图块和其他数据（如四顶点和矩阵）到GPU，以便实际将像素推送到屏幕。GPU进程包含一个线程，称为GPU线程，它实际执行这项工作。

## RENDERER PROCESS THREADS.

Now let's look at the threads in the Renderer Process.

*   **Compositor Thread**. This is the first thread to be informed about the vsync event (which is how the OS tells the browser to make a new frame). It will also receive any input events. The compositor thread will, if it can, avoid going to the main thread and will try and convert input (like - say - scroll flings) to movement on screen. It will do this by updating layer positions and committing frames via the GPU Thread to the GPU directly. If it can't do that because of input event handlers, or other visual work, then the Main thread will be required.

    合成线程。这是第一个被告知vsync事件的线程（这是操作系统告诉浏览器制作新帧的方式）。它还将接收任何输入事件。如果可以的话，合成线程将避免进入主线程，并将尝试将输入（例如滚动翻转）转换为屏幕上的移动。它将通过更新层位置并通过GPU线程直接将帧提交到GPU来做到这一点。如果由于输入事件处理程序或其他视觉工作而无法做到这一点，则需要主线程。

*   **Main Thread**. This is where the browser executes the tasks we all know and love: JavaScript, styles, layout and paint. (That will change in the future under [Houdini](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Houdini), where we will be able to run some code in the Compositor Thread.) This thread wins the award for "most likely to cause jank", largely because of the fact that so much runs here.

    主线程。这是浏览器执行我们都知道和喜欢的任务的地方：JavaScript、样式、布局和绘画。（在Houdini下，这种情况将来会改变，我们将能够在Compositor Thread中运行一些代码。）这个线程赢得了“最有可能导致jank”奖，主要是因为这里运行了很多东西。

*   **Compositor Tile Worker(s)**. One or more workers that are spawned by the Compositor Thread to handle the Rasterization tasks. We'll talk about that a bit more in a moment.

    Compositor Tile Worker。由Compositor Thread生成的一个或多个工作人员来处理光栅化任务。我们稍后会详细讨论这个问题。

In many ways you should consider the Compositor Thread as the "big boss". While it doesn't run the JavaScript, Layout, Paint or any of that, it's the thread that is wholly responsible for initiating main thread work, and then shipping frames to screen. If it doesn't have to wait on input event handlers, it can ship frames while waiting for the Main thread to complete its work.

在许多方面，您应该将Compositor Thread视为“大老板”。虽然它不运行JavaScript、Layout、Paint或任何这些，但它是完全负责启动主线程工作的线程，然后将帧传送到屏幕。如果它不必等待输入事件处理程序，它可以在等待主线程完成工作的同时运送帧。

You can also imagine **Service Workers** and **Web Workers** living in this process, though I'm leaving them out to because it makes things way more complicated.

您也可以想象Service Worker和Web Worker生活在这个过程中，尽管我没有这样做，因为这让事情变得更加复杂。

## THE FLOW OF THINGS. 事物的流动。

![20231121222754](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231121222754.png)

*The main thread in all its glory.* *(所有荣耀的主线。)*

Let's step through the flow, from vsync to pixels, and talk about how things work out in the "full-fat" version of events. It's worth remembering that a browser _need not execute all of these steps_, depending on what's necessary. For example, if there's no new HTML to parse, then Parse HTML won't fire. In fact, oftentimes [the best way to improve performance](https://developers.google.com/web/fundamentals/performance/rendering/#the-pixel-pipeline) is simply to remove the need for parts of the flow to be fired!

让我们逐步浏览流程，从vsync到像素，并讨论在“全脂”版本的事件中事情是如何运作的。值得记住的是，浏览器不需要执行所有这些步骤，这取决于需要什么。例如，如果没有新的超文本标记语言要解析，那么解析超文本标记语言就不会触发。事实上，通常提高性能的最佳方法是简单地消除触发部分流程！

It's also worth noting those red arrows just under styles and layout that seem to point towards `requestAnimationFrame`. It's perfectly possible to trigger both by accident in your code. This is called Forced Synchronous Layout (or Styles, depending), and it's often bad for performance.

还值得注意的是样式和布局下的红色箭头似乎指向requestAnimationFrame。完全有可能在代码中意外触发两者。这称为强制同步布局（或样式，取决于），它通常不利于性能。

1.  **Frame Start**. Vsync is fired, a frame starts.

    帧开始。触发Vsync，帧开始。

2.  **Input event handlers**. Input data is passed from the compositor thread to any input event handlers on the main thread. All input event handlers (`touchmove`, `scroll`, `click`) should fire first, once per frame, but that's not necessarily the case; a scheduler makes best-effort attempts, the success of which varies between Operating Systems. There's also some latency between the user interaction and the event making its way to the main thread to be handled.

    输入事件处理程序。输入数据从合成器线程传递到主线程上的任何输入事件处理程序。所有输入事件处理程序（触摸移动、滚动、单击）都应该首先触发，每帧一次，但情况不一定如此；调度程序进行尽力而为的尝试，其成功程度因操作系统而异。用户交互和事件进入要处理的主线程之间也有一些延迟。

3.  **`requestAnimationFrame`**. This is the ideal place to make visual updates to the screen, since you have fresh input data, and it's as close to vsync as you're going to get. Other visual tasks, like style calculations, are due to come _after_ this task, so it's ideally placed to mutate elements. If you mutate - say - 100 classes, this won't result in 100 style calculations; they will be batched up and handled later. The only caveat is that you don't query any computed styles or layout properties (like `el.style.backgroundImage` or `el.style.offsetWidth`). If you _do_ you'll bring recalc styles, layout, or both, forward, causing [forced synchronous layouts or, worse, layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?hl=en#avoid-layout-thrashing).

    requestAnimationFrame。这是对屏幕进行视觉更新的理想场所，因为您有新的输入数据，并且它将尽可能接近vsync。其他视觉任务，如样式计算，将在此任务之后进行，因此它是改变元素的理想位置。如果你改变——比如说——100个类，这不会导致100个样式计算；它们将被批量处理，稍后再处理。唯一的警告是，你不要查询任何计算的样式或布局属性（如`el.style.backgroundImage`或`el.style.offsetWidth`）。如果你这样做了，你会向前带来recalc样式、布局或两者，导致强制同步布局，或者更糟糕的是，布局颠簸。

4.  **Parse HTML**. Any newly added HTML is processed, and DOM elements created. You're likely to see a lot more of this during page load or after operations like `appendChild`.

    解析超文本标记语言。处理任何新添加的超文本标记语言，并创建DOM元素。您可能会在页面加载期间或appendKids等操作之后看到更多这样的内容。

5.  **Recalc Styles**. Styles are computed for anything that's newly added or mutated. This may be the whole tree, or it can be scoped down, depending on what changed. Changing classes on the body can be far-reaching, for example, but it's worth noting that browsers are already very smart about automatically limiting the scope of style calculations.

    Recalc样式。样式是为新添加或变异的任何内容计算的。这可能是整个树，也可以缩小范围，具体取决于更改的内容。例如，更改主体上的类可能影响深远，但值得注意的是，浏览器在自动限制样式计算的范围方面已经非常聪明了。

6.  **Layout**. The calculation of geometric information (where and what size each element has) for every visible element. It's normally done for the entire document, often making the computational cost proportional to the DOM size.

    布局。计算每个可见元素的几何信息（每个元素的位置和大小）。它通常针对整个文档进行，通常使计算成本与DOM大小成正比。

7.  **Update Layer Tree**. The process of creating the stacking contexts and depth sorting elements.

    更新图层树。创建堆叠上下文和深度排序元素的过程。

8.  **Paint**: This is the first of a two part process: painting is the recording of draw calls (fill a rectangle here, write text there) for any elements that are new or have changed visually. The second part is _Rasterization_ (see below), where the draw calls are executed, and textures get filled in. This part is the recording of draw calls, and is typically far faster than rasterization, but both parts are often collectively referred to as "painting".

    绘制：这是两部分过程中的第一部分：绘制是对任何新元素或视觉上发生变化的元素的绘制调用的记录（在这里填充一个矩形，在那里写入文本）。第二部分是光栅化（见下文），在这里执行绘制调用，并填充纹理。这部分是绘制调用的记录，通常比光栅化快得多，但这两个部分通常统称为“绘制”。

9.  **Composite**: the layer and tile information is calculated and passed back to the compositor thread for it to deal with. This will account for, amongst other things, things like `will-change`, overlapping elements, and any hardware accelerated canvases.

    复合：计算图层和图块信息并将其传递回复合线程以供其处理。这将考虑到，除其他外，诸如意志变化、重叠元素和任何硬件加速画布之类的事情。

10.  **Raster Scheduled** and **Rasterize**: The draw calls recorded in the Paint task are now executed. This is done in _Compositor Tile Workers_, the number of which depends on the platform and device capabilities. For example, on Android you typically find one worker, on desktop you can sometimes find four. The rasterization is done in terms of layers, each of which is made up of tiles.

    光栅计划和光栅化：现在执行绘制任务中记录的绘制调用。这是在Compositor Tile Worker中完成的，其数量取决于平台和设备功能。例如，在Android上，您通常会找到一个Worker，在桌面上，您有时会找到四个。光栅化是根据图层完成的，每个图层都由图块组成。

11.  **Frame End**: With the tiles for the various layers all rasterized, any new tiles are committed, along with input data (which may have been changed in the event handlers), to the GPU Thread.

    帧结束：随着各个层的磁贴全部光栅化，任何新磁贴连同输入数据（可能已在事件处理程序中更改）一起提交到GPU线程。

12.  **Frame Ships**: Last, but by no means least, the tiles are uploaded to the GPU by the GPU Thread. The GPU, using quads and matrices (all the usual GL goodness) will draw the tiles to the screen.

    Frame Ships：最后但并非最不重要的一点是，图块由GPU Thread上传到GPU。GPU使用四边形和矩阵（所有通常的GL优点）将图块绘制到屏幕上。

### Bonus round

*   **requestIdleCallback**: if there's any time Main Thread left at the end of a frame then `requestIdleCallback` can fire. This is a great opportunity to do non-essential work, like beaconing analytics data. If you're new to `requestIdleCallback` have [a primer for it on Google Developers](https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en) that gives a bit more of a breakdown.

    RequestIdleCallback：如果主线程在帧末尾剩余任何时间，那么RequestIdleCallback可以触发。这是做非必要工作的好机会，比如信标分析数据。如果你是请求IdleCallback的新手，请在Google Developers上阅读一本入门书，它会提供更多的细分信息。

## LAYERS AND LAYERS 

There are two versions of depth sorting that crop up in the workflow.

工作流中出现了两个版本的深度排序。

Firstly, there's the Stacking Contexts, like if you have two absolutely positioned divs that overlap. **Update Layer Tree** is the part of the process that ensures that `z-index` and the like is handled.

首先是堆叠上下文，比如如果你有两个绝对定位的div重叠。更新图层树是确保处理z-index等的过程的一部分。

Secondly, there's the Compositor Layers, which is later in the process, and applies more to the idea of painted elements. An element can be promoted to a Compositor Layer with the null transform hack, or `will-change: transform`, which can then be transformed around the place cheaply (good for animation!). But the browser may also have to create additional Compositor Layers to preserve the depth order specified by z-index and the like if there are overlapping elements. Fun stuff!

其次，还有Compositor Layers，这是稍后的过程，它更多地应用于绘制元素的想法。一个元素可以通过null变换hack或will-change：转换提升为Compositor Layer，然后可以廉价地在周围进行转换（对动画有好处！）。但是浏览器也可能必须创建额外的Compositor Layers来保留z-index等指定的深度顺序，如果有重叠元素的话。有趣的东西！

## RIFFING ON A THEME 在一个主题上翻来覆去

Virtually all of the process outlined above _is done on the CPU_. Only the last part, where tiles are uploaded and moved, is done on the GPU.

上面概述的几乎所有过程都是在CPU上完成的。只有上传和移动磁贴的最后一部分是在GPU上完成的。

On Android, however, the pixel flow is a little different when it comes to Rasterization: the GPU is used far more. Instead of Compositor Tile Workers doing the rasterization, the draw calls are executed as GL commands on the GPU in shaders.

然而，在Android上，像素流在光栅化方面略有不同：GPU的使用要多得多。不是Compositor Tile Worker进行光栅化，而是在着色器中作为GPU上的GL命令执行绘制调用。

This is known as **GPU Rasterization**, and it's one way to reduce the cost of paint. You can find out if your page is GPU rasterized by enabling the FPS Meter in Chrome DevTools:

这就是所谓的GPU光栅化，这是降低绘制成本的一种方法。您可以通过在ChromeDevTools中启用FPS Meter来确定您的页面是否经过GPU光栅化：

![The FPS meter indicating GPU Rasterization is in use.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/fps-meter.jpg?imageSlim)

The FPS meter indicating GPU Rasterization is in use.

指示GPU光栅化的FPS仪表正在使用中。

## OTHER RESOURCES

There's a ton of other stuff that you might want to dive into, like how to avoid work on the Main Thread, or how this stuff works at a deeper level. Hopefully these will help you out:

还有很多其他的东西你可能想要深入研究，比如如何避免主线程上的工作，或者这些东西在更深层次上是如何工作的。希望这些会对你有所帮助：

*   **[Compositing in Blink & WebKit](https://www.youtube.com/watch?v=Lpk1dYdo62o)**. A little old now, but still worth a watch.

    在Blink&WebKit中合成。现在有点旧了，但仍然值得一看。

*   **[Browser Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/)** - Google Developers

    浏览器渲染性能-Google Developers

*   **[Browser Rendering Performance](https://www.udacity.com/courses/ud860)** - Udacity Course (totally free!).

    浏览器渲染性能-Udacity课程（完全免费！）。

*   **[Houdini](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Houdini)** - The future, where you get to add more script to more parts of the flow.

    Houdini-未来，您可以将更多脚本添加到流程的更多部分。
