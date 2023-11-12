# Web 上的多进程：浏览器进程模型

`metadata:`

**原标题:** Multi-process on the Web: The Browser Process Model

**链接:** https://webperf.tips/tip/browser-process-model/

---

虽然 Web 应用程序被授予单个线程（主线程）来运行其大部分应用程序和 UI 逻辑，但 Web 浏览器绝对不是单线程（或单进程）环境。

在本技巧中，我将讨论 Web 浏览器如何管理跨进程和线程的 Web 应用程序和其他工作，同时考虑安全性和性能。

## Web Application

Web 应用程序是用 HTML、JavaScript 和 CSS 编写的。它们通过网络从远程服务器发送给用户。

一旦加载并显示了远程代码，用户就可以在浏览器标签页或窗口中与应用程序进行交互。

![20231110181552](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110181552.png)

## Browsers

Web浏览器是一个经过编译的 C++ 二进制文件（即 chrome.exe），安装在用户设备上并从设备启动。

它负责与各种资源进行交互。一些例子包括

*   The device's filesystem, for loading user preferences, history, favorites, etc.
*   The network, to load and deliver remote data
*   The OS's input events, such as clicking and typing
*   The GPU and display, to present pixels on-screen
*   Remote code loaded for a web application, such as HTML, JavaScript, and CSS files defined by a web application

网络浏览器还必须支持在浏览器标签页或 Windows 中同时运行多个不同的Web 应用程序。

![20231110181803](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110181803.png)

## Processes vs. Threads

网络开发人员很少接触系统级的进程和线程概念。为了快速复习，请看下图：

![20231110181825](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110181825.png)

进程是软件在操作系统上执行的地方。进程在执行过程中可专门访问一个内存块，用于存储运行时状态。进程不能访问操作系统上另一个正在执行的进程所使用的内存。

一个进程可能有一个或多个线程，供程序执行指令。线程共享访问其所含进程专用的内存块。

由于进程需要专用的内存块，因此创建一个新进程比创建一个新线程消耗更多内存。

### Process Communication

进程之间可以通过进程间通信（简称 IPC, **Inter-Process Communication**）进行通信。线程也可以在其包含的进程内相互通信，但不能直接与其他进程中的线程通信。

一般来说，进程间通信比进程内线程间通信要慢。

![20231110181953](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110181953.png)

### Process Security

进程可以被授予不同级别的系统资源访问权限。例如，进程可以在低权限级别下运行，从而无法访问文件系统或注册表。

同样，一个进程可以在高权限级别下运行，并能更新主机系统的敏感部分。这些进程功能强大，一旦被利用或破坏，将十分危险。

![20231110182032](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110182032.png)

## Processes and the Browser

虽然每个浏览器（如 WebKit、Chromium、Firefox）在进程模型的具体实现上各不相同，但它们都遵循类似的模式。

一般来说，浏览器会:

- 为运行Web 应用程序分配低权限、沙盒化的 WebContent 进程
- 使用单个浏览器进程执行高权限操作。例子包括
  - 接受用户输入
  - 访问保存的密码
  - 更新书签和收藏夹
- 有一个网络进程，用于连接网络和浏览器缓存
- 其他专用进程，用于连接音频、图形/GPU 等。

:::tip{title=原文}
*   Allocate low-privilege, sandboxed **WebContent Processes** for running Web Applications
*   Have a single **Browser Process** for high-privilege actions. Examples include:
    *   Accepting User Input
    *   Accessing Saved Passwords
    *   Updating Bookmarks and Favorites
*   Have a single **Network Process** for interfacing with the Network and Browser Cache
*   Other dedicated processes, for interfacing with Audio, Graphics / GPU, etc.
:::

专用进程的具体数量及其职责/权限因浏览器的实施而异。

![20231110182259](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110182259.png)

:::tip
注意：根据浏览器的不同，WebContent 进程会有不同的名称。

例如，在 Chromium 中，它被称为渲染器进程。在 WebKit 中，它被称为 WebProcess。
:::

## Multi-Process Model Motivation

这种进程模型是有意为之；它的设计有助于实现可靠、高效和安全的网络浏览器体验。

### Security Benefits (安全优势)

从安全的角度来看，限制对高权限操作的访问，可以减少恶意行为者利用的表面区域。

就 WebContent(chrome中的渲染进程) 进程而言，在此进程中执行的代码是从任意第三方获取的未知远程代码。在用户设备上安全执行这些代码的唯一方法就是使用尽可能低的权限。

![20231110182505](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110182505.png)

你能想象从任何网站加载的 JavaScript 都能写入你的文件系统吗？😱

### Reliability Benefits (可靠的优势)

从可靠性的角度来看，通过为浏览器标签页中的每个Web 应用程序分配单独的进程，Web 应用程序就不会相互崩溃。

例如，如果有两个标签页分别打开不同的Web 应用程序，其中一个进程的崩溃/分离故障不会影响到其他标签页或浏览器进程。

![20231110182619](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110182619.png)

此外，如果浏览器内部进程（如网络进程）崩溃，浏览器可以在用户没有察觉到崩溃的情况下重新启动该进程！

:::info
注意：我说大致*，是因为不同的浏览器有不同的算法来决定何时创建进程。在 `<iframe>` 元素和打开新标签页链接等情况下，浏览器的行为往往各不相同。
:::

### Performance Benefits (性能优势)

与可靠性类似，从性能角度来看，将Web 应用程序和浏览器相关工作移至各自的专用进程中，也有助于减少线程时间的竞争。

例如，如果所有进程共享同一个主UI线程，那么一个Web 应用程序中的任何繁重工作都会降低整个浏览器的速度和响应速度！

![20231110182756](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110182756.png)

## Browser Process Communication

虽然Web 应用程序和核心浏览器内部工作（如网络）都是跨进程封装的，并有适当的权限范围，但它们之间经常通过 IPC 进行通信。

IPC 通道允许进程暴露功能供其他进程使用。这样既能保持前面所述的多进程优势，又能将核心功能暴露给系统中的其他进程。

![20231110183056](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110183056.png)

例如，WebContent 进程中的网络应用程序可以通过 IPC 通道向网络进程通知所需的 URL 和方法，从而请求网络数据。当数据返回时，网络进程可使用 IPC 通道通知 WebContent 进程。

再比如，浏览器进程可以通知 WebContent 进程，用户从键盘上键入了一个字符。WebContent 进程可处理该输入，并向其 JavaScript 事件监听器发送按键事件。

## Performance Trade-offs (性能权衡)

虽然我们已经讨论过浏览器多进程模式的性能优势，但也存在相关的成本和权衡。

### Memory Overhead (内存开销)

虽然进程提供了强大的安全边界，但启动新进程需要额外的内存分配。

这意味着用户打开的标签页越多，创建的进程就越多，浏览器消耗的内存也就越多。

虽然浏览器在内存受限的环境中采取了缓解措施来帮助减轻这一成本，但内存消耗增加的总体趋势依然存在。

浏览器为帮助提高内存利用率而采取的缓解措施包括

- 将过期标签页的内存消耗到磁盘上
- 在内存高度紧张的环境（如低端安卓设备）中合并进程

### Process Creation Overhead (进程创建开销)

创建一个新进程并不一定很昂贵，但对于高负载的低端设备来说，创建一个新进程比在现有进程中创建一个新线程更昂贵。

浏览器在这方面也有缓解措施，包括

- 保留一个备用的 WebContent 进程供新标签页或窗口使用
- 在创建新标签页或窗口时，将导航请求与进程创建并行，以并行处理网络和 CPU 活动

### IPC Overhead (IPC开销)

跨进程通信比在单个进程内完全本地化通信要慢。

此外，如果通信通道堵塞，IPC 消息就会延迟，降低用户体验。

为了减少这种情况，浏览器中的每个进程通常都有一个专门用于 IPC 消息传递的线程，其设计尽可能轻量级和反应灵敏。消息格式也进行了优化，以尽量减少进程间的传输时间。

我将在下一篇关于[查看 Chromium 进程内部运作](https://webperf.tips/tip/inside-browser-processes)的小贴士中详细介绍这一点。

## Real Examples

### Chromium

你有没有打开过任务管理器，并注意到 Chrome 浏览器正在使用多少进程和多少内存？现在你知道原因了！你可能打开了很多标签页！

以安全和稳定为名，Chromium 是所有浏览器中占用进程最多的。

在设备的任务管理器（或 Mac 的活动监视器）中可以查看你正在使用的进程数量：

![20231110183556](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110183556.png)

在该视图中，可以看到每个标签页的每个进程，以及网络和 GPU 的内部浏览器进程。每个 PID 以及每个进程的资源消耗情况都一目了然：

![20231110183626](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110183626.png)

尝试创建和关闭标签页，并观察该监视器中的进程！

### WebKit / Safari

虽然 Windows 上没有 Safari，但我可以通过 Playwright 运行 WebKit 实例（Safari 的浏览器引擎

在 WebKit 浏览器中打开多个窗口会为每个窗口生成一个 WebProcess。WebKit 使用共享的 WebkitNetworkProcess 和浏览器进程，但不会像 Chromium 那样产生那么多其他进程：

![20231110183725](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110183725.png)

在 Mac 的 Safari 中，你会看到类似的内容，尽管进程名称在活动监视器中看起来有所不同。
