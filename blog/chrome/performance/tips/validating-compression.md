# 识别 Web 应用中的未压缩资源

`metadata:`

**原标题:** Identifying Uncompressed Resources in your Web App

**链接:** https://webperf.tips/tip/validating-compression/

---

将 gzip 或 brotli 等压缩算法应用于通过网络[传输的资源](chrome/performance/tips/resource-size-vs-transfer-size)对于确保最佳传输大小和网络带宽利用率至关重要。

许多生产 Web 服务器和 CDN 会自动为您执行此操作，但值得确保页面上的所有可压缩资产确实在应用适当的压缩算法的情况下交付。

## Prerequisites 先决条件

您应该熟悉 Chromium 网络标签页。

## Step 1: Open the Network Tab

您需要做的第一件事是通过 F12 打开“网络”选项卡，然后选择“网络”选项卡。

确保您已选择“禁用缓存”：

![20231109162811](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162811.png)

## Step 2: Navigate to your Web App

DevTools 网络选项卡应自动记录网络流量。继续刷新或导航到“浏览器”选项卡中的 Web 应用程序。

## Step 3: Enable Large Request Rows

选择“设置齿轮”，然后选择“使用大型请求行”：

![20231109162851](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162851.png)

这将有助于以后快速比较资源和传输大小。

## Step 4: Adjust your Resource Filters

使用 Ctrl + 左键单击选择以下可压缩资源：

*   *Fetch/XHR*
*   *CSS*
*   *JS*
*   *Doc*

我故意排除图像，因为这些是二进制资产，而 gzip 和 brotli 等压缩算法不适用。

![20231109162957](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162957.png)

:::info
注意：SVG 图像是基于文本的，可能会受益于压缩。如果您的 Web 应用程序使用 SVG，您可能希望选中“图像”，但应忽略分析中的二进制图像格式（例如 `.jpeg` 或 `.png` 图像）
:::

## Step 5: Add a Headers Filters

### Content-Encoding Header 内容编码标头

如果资源应用了用于网络传输的压缩算法，则服务器将在响应中包含 Content-Encoding 标头以及指定的编码算法。

例如，使用 gzip 压缩的资源在其响应中将具有以下标头：

```json
  Content-Encoding: gzip
```

### Filtering the UI

在筛选器框中，应用以下文本：

```json
  has-response-header:content-encoding
```

![20231109163201](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163201.png)

这会将所有请求行筛选到应用了压缩算法的资源。

## Step 6: Invert

接下来，检查 反转 选项：

![20231109163235](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163235.png)

这会将所有请求行筛选到未应用压缩算法的资源。

## Step 7: Sort by Size

单击“大小”表标题，使其按降序排序。这将突出显示 Web 应用中最大的未压缩资源。

请注意，对于未压缩的资源，“资源大小”和“传输大小”几乎相等：

![20231109163319](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163319.png)

查找未应用压缩的大型资产（大于几 kB 左右），并跟踪该服务器或 CDN 的压缩设置，以确保正确压缩资源！








































