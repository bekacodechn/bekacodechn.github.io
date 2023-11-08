# 使用 Chromium 网络标签页获取性能详情


`metadata:`

**原标题:** Using the Chromium Network Tab for Performance Insights

**链接:** https://webperf.tips/tip/network-tab/

---

Chromium 网络选项卡具有许多功能，包括有效负载预览、请求阻止和重放、流量过滤等等！

我喜欢将 Chromium 网络选项卡视为浏览器集成的 Fiddler。

虽然我主要在 Chromium 性能分析器网络窗格中进行网络性能分析，但我确实会不时在性能分析中使用 Chromium 网络选项卡的一些功能。

## Size Metadata 大小元数据

[资源大小](https://webperf.tips/tip/resource-size-vs-transfer-size)直接影响页面性能，包括传输时间以及解析或解码时间。因此，我经常检查此表的 Size 列：

![20231108232959](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108232959.png)

列中显示的大小是“传输大小”或“通过网络发送的压缩字节数”。

:::tip
大多数生产 Web 应用程序（应该！）在将资源提供给用户之前对其进行压缩。常见的压缩算法包括 gzip 和 brotli。
:::

将鼠标悬停在“大小”表单元格上将显示实际的“资源大小”（解压缩大小）：

![20231108233044](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233044.png)

### Cache 缓存

如果资源是从磁盘缓存、Service Worker 缓存或其他浏览器缓存加载的，则表单元格将表示该资源，而不是提供传输大小（因为没有通过网络传输的字节）。

若要查看从缓存加载的文件的“资源大小”，请将鼠标悬停在同一表单元格上：

![20231108233115](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233115.png)

## Time and Waterfall 时间和瀑布

在“时间”列中，“网络”选项卡记录了网络请求从初始请求到完全下载所花费的时间。

![20231108233137](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233137.png)

将鼠标悬停在瀑布列单元格上可以深入了解该时间是如何花费的。

![20231108233148](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233148.png)

或者，您也可以通过单击请求并选择“计时”选项卡来访问请求瀑布。

![20231108233200](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233200.png)

## Protocol 协议

如果默认情况下未显示此表头，请右键单击表头，然后选择“协议”：

![20231108233224](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233224.png)

通常，关键资源应使用 HTTP/2.0 来最大化并行连接并最大限度地减少排队时间。

HTTP/2.0 连接显示为 h2。

## Disable Cache 禁用缓存

浏览器缓存网络资源，以最大程度地减少重复访问的网络依赖性。但是，如果要模拟用户在未填充浏览器缓存的情况下访问您的页面（例如，首次访问场景），则可以选中“禁用缓存”选项：

![20231108233257](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233257.png)

## Throttling 节流

很多时候，我们的开发计算机连接到快速网络，因此在我们分析 Web 应用程序时，网络性能问题不会显现出来。

可以使用“限制”下拉列表来模拟较慢的连接：

![20231108233351](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233351.png)

将此选项与“禁用缓存”结合使用，可以真正突出显示应用的网络依赖关系和瓶颈。

## HAR Import and Export (HAR 导入和导出)

与[性能探查器](https://webperf.tips/tip/collect-a-trace)不同，“网络”选项卡将捕获的会话导入和导出为 HTTP 存档文件或 `.har` 文件。

### Export

如果要与团队共享“网络”选项卡中的一些发现，可以通过“导出 HAR”选项导出整个日志会话：

![20231108233504](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233504.png)

### Import

您还可以通过“导入 HAR”按钮导入 `.har` 文件：

![20231108233606](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108233606.png)

## Conclusion

虽然 Chromium F12 网络选项卡有许多强大的功能，但这些功能涵盖了我用于网络性能分析的功能。
