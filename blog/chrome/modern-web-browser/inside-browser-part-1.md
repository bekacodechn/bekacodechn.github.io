# 现代网络浏览器内幕 — 1

`metadata:`

**原标题:** Inside look at modern web browser (part 1)

**链接:** https://developer.chrome.com/blog/inside-browser-part1/

---

##  CPU, GPU, Memory, and multi-process architecture (中央处理器、图形处理器、内存和多进程架构)

在这个由 4 部分组成的博客系列中，我们将深入了解 Chrome 浏览器，从高级架构到渲染管道的具体细节。如果您曾想知道浏览器是如何将您的代码转化为功能性网站的，或者您不清楚为什么建议使用特定技术来提高性能，那么本系列就是为您量身打造的。

作为本系列的第一部分，我们将介绍核心计算术语和 Chrome 浏览器的多进程架构。

## 计算机的核心是 CPU 和 GPU

为了了解浏览器的运行环境，我们需要了解一些计算机部件及其作用。

### CUP

首先是中央处理器，简称 CPU(**C**entral **P**rocessing **U**nit)。中央处理器可以说是电脑的大脑。图中的 CPU 核心是一名办公室工作人员，它可以逐一处理许多不同的任务。它可以处理从数学到艺术的所有任务，同时知道如何回复客户来电。过去，大多数 CPU 都是一个芯片。一个内核就像住在同一芯片中的另一个 CPU。而在现代硬件中，通常会有一个以上的内核，为手机和笔记本电脑提供更强的计算能力。

![20231112194004](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112194004.png)
*图 1：4 个 CPU 内核就像坐在每张办公桌前的办公人员，随时处理送来的任务*

### GPU

图形处理单元GPU(**G**raphics **P**rocessing **U**nit)是计算机的另一部分。与CPU不同，GPU擅长处理简单的任务，但同时跨越多个内核。顾名思义，它最初是为了处理图形而开发的。这就是为什么在图形的上下文中，“使用GPU”或“GPU支持”与快速渲染和流畅交互相关联。近年来，随着GPU加速计算，越来越多的计算仅在GPU上成为可能。

当您在计算机或手机上启动应用程序时，CPU和GPU是为应用程序提供动力的。通常，应用程序使用操作系统提供的机制在CPU和GPU上运行。

![20231112194439](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112194439.png)
*图 2：许多 GPU 内核的扳手表明它们只能处理有限的任务*

![20231112194621](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112194621.png)
***图 3：计算机架构的三个层次。机器硬件在底部，操作系统在中间，应用程序在顶部。***

## Executing program on Process and Thread (在进程和线程上执行程序)

在深入研究浏览器架构之前，还需要掌握另一个概念，那就是进程（Process）和线程（Thread）。进程可以描述为应用程序的执行程序。线程则是住在进程中并执行其进程程序任何部分的程序。

启动应用程序时，会创建一个进程。程序可能会创建线程来帮助它工作，但这是可选的。操作系统会为进程提供一个内存 "板块"，所有应用程序的状态都保存在这个私有内存空间中。关闭程序时，进程也会消失，操作系统会释放内存。

![20231112200931](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112200931.png)
*图 4：进程是一个边界框，线程是进程内游动的抽象鱼类*

![20231112201013](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112201013.png)
*图 5：使用内存空间和存储应用程序数据的进程示意图*

一个进程可以要求操作系统启动另一个进程来运行不同的任务。此时，内存的不同部分将分配给新进程。如果两个进程需要对话，它们可以通过使用进程间通信（IPC）来实现。许多应用程序都是这样设计的，这样如果一个工作进程没有响应，就可以重新启动它，而无需停止其他运行中的其他进程。

![20231112201428](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112201428.png)
*图 6：通过 IPC 进行通信的独立进程示意图*

## Browser Architecture

那么，网络浏览器是如何使用进程和线程构建的呢？可以是一个进程包含多个不同的线程，也可以是多个不同的进程包含几个线程，通过 IPC 进行通信。

![20231112201541](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112201541.png)
*图 7：进程/线程图中的不同浏览器架构*

这里需要注意的是，这些不同的架构都是实施细节。目前还没有关于如何构建网络浏览器的标准规范。一个浏览器的方法可能与另一个完全不同。

在本系列博客中，我们将使用下图中描述的 Chrome 浏览器最新架构。

顶部是浏览器进程，与负责应用程序不同部分的其他进程进行协调。对于渲染器进程(renderer process)，会创建多个进程并将其分配给每个选项卡。直到最近，Chrome 还在可能的情况下为每个选项卡提供了一个进程。现在，它尝试为每个站点提供自己的进程，包括 iframe（请参阅站点隔离）。

![20231112201925](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112201925.png)
*图 8：Chrome 浏览器的多进程架构图。渲染器进程下显示了多个图层，代表 Chrome 浏览器为每个标签页运行多个渲染器进程。*

## Which process controls what? (哪个程序控制什么？)

下表介绍了 Chrome 浏览器的每个程序及其控制内容：

**Process and What it controls**:

| Process | Description |
| ----------- | ----------- |
| Browser |Controls "chrome" part of the application including address bar, bookmarks, back and forward buttons.  Also handles the invisible, privileged parts of a web browser such as network requests and file access. |
| Renderer | Controls anything inside of the tab where a website is displayed. |
| Plugin | Controls any plugins used by the website, for example, flash. |
| GPU | Handles GPU tasks in isolation from other processes. It is separated into different process because GPUs handles requests from multiple apps and draw them in the same surface.(处理与其他进程隔离的 GPU 任务。它被分离成不同的进程，因为 GPU 会处理来自多个应用程序的请求，并在同一表面绘制它们。) |

![20231112204145](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112204145.png)
*图 9：指向浏览器用户界面不同部分的不同进程*

There are even more processes like the Extension process and utility processes. If you want to see how many processes are running in your Chrome, click the options menu icon more_vert at the top right corner, select More Tools, then select Task Manager. This opens up a window with a list of processes that are currently running and how much CPU/Memory they are using.

## The benefit of multi-process architecture in Chrome(多进程架构在 Chrome 浏览器中的优势)

前面我提到 Chrome 浏览器使用了多个渲染器进程。在最简单的情况下，你可以想象每个标签页都有自己的渲染器进程。假设你打开了 3 个标签页，每个标签页都由一个独立的渲染器进程运行。如果有一个标签页没有响应，那么你可以关闭没有响应的标签页，然后继续打开其他标签页。如果所有标签页都在一个进程上运行，当一个标签页无响应时，所有标签页都会无响应。这太可悲了。

![20231112205211](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112205211.png)
*图 10：显示每个选项卡运行多个进程的示意图*

将浏览器的工作分离成多个进程的另一个好处是安全性和沙盒。由于操作系统提供了限制进程权限的方法，因此浏览器可以对某些进程的某些功能进行沙箱化。例如，Chrome 浏览器会限制处理任意用户输入的进程（如渲染器进程）的任意文件访问权限。

由于进程拥有自己的私有内存空间，因此它们通常包含通用基础架构的副本（如 Chrome 浏览器的 JavaScript 引擎 V8）。这意味着内存使用量会增加，因为它们无法像同一进程内的线程那样共享。为了节省内存，Chrome 浏览器会限制进程的数量。该限制根据设备的内存和 CPU 容量而有所不同，但当 Chrome 浏览器达到限制时，它就会开始在一个进程中运行来自同一网站的多个标签页。

## Saving more memory - Servicification in Chrome (节省更多内存 - Chrome 浏览器中的服务化功能)

同样的方法也适用于浏览器进程。Chrome 浏览器正在进行架构调整，以便将浏览器程序的每个部分作为服务运行，从而可以轻松拆分为不同的进程或合并为一个进程。

总体思路是，当 Chrome 浏览器运行在功能强大的硬件上时，它可以将每个服务拆分为不同的进程，从而提高稳定性；但如果运行在资源有限的设备上，Chrome 浏览器则会将服务合并为一个进程，以节省内存占用。类似的合并进程以减少内存使用量的方法，在这一改变之前已经在安卓等平台上使用过。

![20231112205935](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112205935.png)
*图 11：Chrome 浏览器的服务化示意图，将不同服务移入多个进程和单一浏览器进程中*

## Per-frame renderer processes - Site Isolation (每帧渲染器进程 - 站点隔离)

站点隔离（[Site Isolation](https://developers.google.com//web/updates/2018/07/site-isolation)）是 Chrome 浏览器最近推出的一项功能，可为每个跨站 iframe 运行单独的渲染器进程。我们一直在讨论每个标签页一个渲染器进程的模式，这种模式允许跨站 iframe 在一个渲染器进程中运行，不同网站共享内存空间。在同一个渲染器进程中运行 a.com 和 b.com 看起来似乎没什么问题。[同源策略](https://developer.mozilla.org/docs/Web/Security/Same-origin_policy)是网络的核心安全模式；它确保一个网站在未经同意的情况下不能访问其他网站的数据。绕过这一策略是安全攻击的主要目标。进程隔离是分离网站的最有效方法。随着 [Meltdown 和 Spectre](https://developers.google.com/web/updates/2018/02/meltdown-spectre) 的出现，我们需要使用进程隔离网站的必要性变得更加明显。自 Chrome 浏览器 67 在桌面上默认启用 "站点隔离 "后，标签页中的每个跨站 iframe 都会获得一个独立的渲染器进程。

![20231112210406](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112210406.png)
*图 12：站点隔离示意图；站点内指向 iframe 的多个渲染器进程*

启用站点隔离是一项多年的工程工作。站点隔离并不像分配不同的渲染器进程那么简单；它从根本上改变了 iframe 相互通信的方式。在页面上打开 devtools，并且 iframe 在不同进程上运行，这意味着 devtools 必须实现幕后工作才能使其看起来无缝。即使运行简单的 Ctrl+F 在页面中查找单词也意味着在不同的渲染器进程中进行搜索。您可以看到为什么浏览器工程师将站点隔离的发布视为一个重大里程碑！

## Wrap-up

在这篇文章中，我们介绍了浏览器架构的高级视图，并介绍了多进程架构的优势。我们还介绍了 Chrome 浏览器中与多进程架构密切相关的服务化和站点隔离。在下一篇文章中，我们将开始深入探讨这些进程和线程之间为显示网站而发生的事情。
