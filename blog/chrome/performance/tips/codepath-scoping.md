# 在 Chromium 探查器中识别慢速代码路径的来源

`metadata:`

**原标题:** Identifying the source of slow codepaths in the Chromium Profiler

**链接:** https://webperf.tips/tip/codepath-scoping/

**文章副标题:** 通过火焰图找到有问题的代码

---

Chromium Profiler 通过火焰图生成非常有用的可视化效果，以帮助我们了解线程任务中消耗 CPU 时间的内容。

在本提示中，我们将演练如何在分析器中找到感兴趣的区域后映射回 Web 应用程序中的代码路径。

## Step 1: Identify a Region in the Flamegraph (识别火焰图中的区域)

在探查器 UI 中，应加载 Web 应用程序的跟踪。

例如，我加载了一个如下所示的跟踪：

![20231110172732](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110172732.png)

利用我对火焰图形状的了解，我注意到这里正在执行一个高频代码路径：

我对应用程序代码中的这种高频操作很感兴趣，因此我可以应用优化并减少总体任务时间。

## Step 2: Zooming to Region (缩放到区域)

根据感兴趣的区域调整探查器选择。

就我而言，我对其中一个狭窄的尖峰感兴趣，所以我将继续放大它：

![20231110173125](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173125.png)

## Step 3: Selecting a Band

在尖峰的火焰图中，我们看到了尖峰顶端 `o` 的功能，因此我可能会从这里开始调查。

生产 Web 应用利用缩小来减小其有效负载大小，因此在跟踪探查器范围时不太可能在探查器波段中看到有用的名称。(因为生产环境经过了压缩和混淆，此时名称没有了意义)

就我而言，我将单击 o 函数的条带，并在“摘要”窗格中显示脚本详细信息。

![20231110173350](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173350.png)

## Step 4: Select the Script

在底部，您会看到一个指向脚本名称的蓝色链接。单击此链接将转到包含此函数的代码文件。

例如，如果我单击 `clients-root-desktop-43f...js:27165` ，它将带我转到“源”窗格中的该代码文件。

![20231110173418](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173418.png)

:::info
注意：如果您不是自己收集此配置文件（即它已导入），那么这将不起作用，但不幸的是，当您尝试单击时，Chromium 不会表示这一点。
:::

## Step 5: Beautify in Sources

单击代码路径后，你将看到“源”窗格打开，其中包含一个缩小的脚本。

在左下角，有一个非常小的按钮，可以很好地格式化此代码供您检查。

![20231110173506](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173506.png)

## Step 6: Observe Codepath

代码路径的格式应该很好，你可以检查它：

![20231110173527](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173527.png)

现在我们可以看到我们的 `o` 函数实际上在做什么了！

如果您或您的团队拥有您正在分析的 Web 应用程序，则美化缩小的代码应该看起来足够熟悉，可以映射回代码库中的某些内容。如果不是，它可能是捆绑的依赖项，因此您可能需要通过调用堆栈进行调试，以查看此代码的执行方式和时间。

## Step 7: Identify Inefficiencies (识别低效率)

### DOMParser.parseFromString

在这个特定示例中，我看到 `o` 正在高频执行。此外，我可以看到该 `o` 函数正在创建一个新 `DOMParser` 对象，并调用 ，这是一个浏览器 API，如果以高频率运行 `parseFromString` ，通常会很慢：

![20231110173823](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173823.png)

### Loops and String Operations

我还在这里看到 `o` invokes `e` ，它调用了一个 lambda（函数 `(anonymous)` ），它调用了 `r` 和 `n` ：

![20231110173934](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173934.png)

在检查 `r` 和 `n`时，我发现它们都在执行同步工作，特别是 `for`循环和带字符串修剪的 `reduce`。除了在火焰图中选择 `r` 或 `n`外，我对这些函数的作用域与步骤 4 中对 `o`函数的作用域相同。

![20231110174207](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110174207.png)

这两个操作都是同步的，尽管它们单独运行起来并不繁重，但它们的运行频率导致了此任务的总体瓶颈。

## Conclusion

通过利用火焰图和我们在本提示中概述的代码范围界定技术，您可以快速确定哪些代码块对线程上的 CPU 时间有贡献。

在“源”选项卡中确定代码块后，可以将其映射回源代码并应用[优化](https://webperf.tips/tip/optimization-types)！

这就是这个提示的全部内容！感谢您的阅读！发现更多匹配初学者和 CPU 的类似技巧。
