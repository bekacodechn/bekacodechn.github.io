# 使用 Fetch Priority API 优化资源加载

`metadata:`

**原标题:** Optimizing resource loading with the Fetch Priority API

**链接:** https://web.dev/articles/fetch-priority

**文章副标题:** 

---

The Fetch Priority API indicates the relative priority of resources to the browser. It can enable optimal loading and improve Core Web Vitals.
Fetch Priority API 向浏览器显示资源的相对优先级。它可以实现最佳加载并改进核心网络生命周期。

:::info
**Note:** This feature was originally called Priority Hints but was renamed to Fetch Priority after standardization. See [History](https://web.dev/articles/fetch-priority#history) below for more details.
注：该功能最初称为 "优先级提示"，标准化后更名为 "获取优先级"。有关详情，请参阅下面的历史记录。
:::

When a browser parses a web page and begins to discover and download resources such as images, scripts, or CSS, it assigns them a fetch `priority` in an attempt to download resources in an optimal order. These priorities can depend on the kind of resource and where it is in the document. For example, in-viewport images may have a `High` priority while the priority for early loaded, render-blocking CSS via `<link>`s in the `<head>` could be `Very High`. Browsers are pretty good at assigning priorities that work well but may not be optimal in all cases.
当浏览器解析网页并开始发现和下载图片、脚本或 CSS 等资源时，它会为这些资源分配一个获取优先级，以便以最佳顺序下载资源。这些优先级取决于资源的种类和在文档中的位置。例如，视口内图像的优先级可能是 "高"，而通过 `<head>` 中的 `<link>s` 提前加载的、妨碍渲染的 CSS 的优先级可能是 "非常高"。浏览器在分配优先级方面非常擅长，虽然效果不错，但并非在所有情况下都是最佳的。

In this article, we'll discuss the Fetch Priority API and the `fetchpriority` HTML attribute, which allow you to hint at the relative priority of a resource (`high` or `low`). Fetch Priority can help optimize the Core Web Vitals.
在本文中，我们将讨论 Fetch Priority API 和 fetchpriority HTML 属性，它们允许您提示资源的相对优先级（高或低）。Fetch Priority 可帮助优化 Core Web Vitals。

![A filmstrip view comparing two tests of the Google Flights homepage. At bottom, Fetch Priority are used to boost the priority of the hero image, resulting in a 0.7 second decrease in LCP.
](https://web.dev/static/articles/fetch-priority/image/a-filmstrip-view-comparin-298b8fe7eedbb.png)

*Fetch Priority improving Largest Contentful Paint from 2.6 s to 1.9 s in a test of Google Flights*
*(在对 Google Flights 的测试中，撷取优先级从 2.6 秒降至 1.9 秒，从而提高了最大内容涂料的撷取优先级)*

## Summary

**A few key areas where Fetch Priority can help:**
Fetch Priority 可以在几个关键领域提供帮助：

*   Boost the priority of the LCP image by specifying `fetchpriority="high"` on the image element, causing LCP to happen sooner.
    通过在图像元素上指定 fetchpriority="high"，提高 LCP 图像的优先级，从而使 LCP 更快发生。
*   Increase the priority of `async` scripts using better semantics than the current hack that is commonly used (inserting a `<link rel="preload">` for the `async` script).
    提高异步脚本的优先级，使用比目前常用的黑客手段（为异步脚本插入 <link rel="preload"> ）更好的语义。
*   Decrease the priority of late-body scripts to allow for better sequencing with images.
    降低后期正文脚本的优先级，以便更好地与图片排序。

Historically, developers have had some, but limited, influence over resource priority using [preload](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/) and [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/). Fetch Priority complements these [Resource Hints](https://www.w3.org/TR/resource-hints/), but it's essential to understand where they all fit in. Preload lets you tell the browser about critical resources you want to load early before they are discovered naturally. This is especially useful for resources that are not easily discovered, such as fonts included in stylesheets, background images, or resources loaded from a script. Preconnect helps warm up connections to cross-origin servers and can help improve metrics like [Time-to-first-byte](https://web.dev/articles/ttfb) and is useful when you know an origin but not necessarily the exact URL of a resource that will be needed.
一直以来，开发人员通过预加载和预连接对资源优先级有一定的影响，但影响有限。撷取优先级与这些资源提示相辅相成，但了解它们之间的关系至关重要。通过预加载，您可以在关键资源被自然发现之前将其提前加载到浏览器中。这对于不易被发现的资源尤其有用，例如样式表中的字体、背景图片或从脚本加载的资源。预连接可帮助预热与跨源代码服务器的连接，并有助于改善时间到第一字节（Time-to-first-byte）等指标，在知道源代码但不一定知道所需资源的准确 URL 时非常有用。

Fetch Priority is a markup-based signal (available through the `fetchpriority` attribute) that developers can use to indicate the relative priority of a particular resource. You can also use these hints via JavaScript and the [Fetch API](https://web.dev/articles/introduction-to-fetch) with the `priority` property to influence the priority of resource fetches made for data. Fetch Priority can also complement preload. Take a Largest Contentful Paint image, which, when preloaded, will still get a low priority. If it is pushed back by other early low-priority resources, using Fetch Priority can help how soon the image gets loaded.
获取优先级是一种基于标记的信号（可通过 fetchpriority 属性获得），开发人员可以用它来指示特定资源的相对优先级。您还可以通过 JavaScript 和带有优先级属性的 Fetch API 使用这些提示，以影响数据资源获取的优先级。撷取优先级还可以补充预加载。以最大内容的油漆图片为例，在预加载时，该图片的优先级仍然较低。如果它被其他早期低优先级资源推后，使用 "fetchpriority "可以帮助加快图片加载的速度。

Fetch Priority is [available](https://www.chromestatus.com/feature/5273474901737472) in Chrome 101 or later.
Fetch Priority 可在 Chrome 浏览器 101 或更高版本中使用。

## Resource priority

The resource download sequence depends on the browser's assigned priority for every resource on the page. Different factors can affect priority computation logic. For example,
资源下载顺序取决于浏览器为页面上每个资源分配的优先级。不同的因素会影响优先级计算逻辑。例如

*   CSS, fonts, scripts, images, and third-party resources are assigned different priorities.
    CSS、字体、脚本、图像和第三方资源会被分配不同的优先级。
*   The location or order in which you reference resources in the document also affects the priority of resources.
    在文档中引用资源的位置或顺序也会影响资源的优先级。
*   The [`preload`](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/) resource hint helps the browser to discover a resource faster and thus load it before the document loads it and affects priority.
    预加载资源提示有助于浏览器更快地发现资源，从而在文档加载资源之前加载它，并影响优先级。
*   Priority computation changes for [`async` or `defer`](https://web.dev/articles/efficiently-load-third-party-javascript#use_async_or_defer) scripts.
    异步或延迟脚本的优先级计算会发生变化。

The following table considers such factors to show how most resources are currently prioritized and sequenced in Chrome.
下表考虑了这些因素，显示了目前 Chrome 浏览器中大多数资源的优先级和排序方式。

![20231122193327](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122193327.png)

:::info
**Notes:**  
**\*** Preload using `"as"` or [fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API) using a specific `"destination"` use the priority of the destination they are requesting. For example, preload `as="style"` will use Highest priority. With no explicit destintation, fetch will be prioritized like an async XHR.  
*使用“as”预加载或使用特定“目标”获取使用他们请求的目标的优先级。例如，preload as="style"将使用最高优先级。没有明确的目的地，fetch将像异步XHR一样优先。

**\*\*** "Early" is defined as being requested before any non-preloaded images have been requested ("late" is after).  
**\*\*** "Early" 定义为在请求任何非预加载图像之前请求（"late" is after）。

**\*\*\*** CSS where the media type doesn't match is not fetched by the preload scanner and is only processed when the main parser reaches it, which usually means it will be fetched very late and with a "late" priority.  
媒体类型不匹配的 **\*\*\*** CSS 不会被预加载扫描器获取，只有当主解析器到达时才会对其进行处理，这通常意味着它会很晚才被获取，并且优先级为 "late"。

Images by default start at "Low" priority and then at layout time are boosted to "High" if within the viewport. As of Chrome 117, the first 5 large images are set to "Medium" to speed this up and two of these can be fetched in parallel during the initial "tight mode". By tagging important images in markup using `fetchpriority="high"`, they can start at "High" immediately and load much faster.
默认情况下，图片从 "低 "优先级开始，如果在视口范围内，则在布局时会提升到 "高 "优先级。从 Chrome 117 开始，前 5 张大图片的优先级被设置为 "中"，以加快速度，其中两张可在初始 "紧缩模式 "下并行获取。通过使用 fetchpriority="high" 在标记中标记重要图片，它们可以立即从 "高 "开始，加载速度会更快。
:::

The browser downloads resources with the same computed priority in the order they are discovered. You can check the priority assigned to different resources when loading a page under the Chrome Dev Tools **Network** tab. (Ensure that you include the priority column by right-clicking on the table headings).
浏览器会按照发现资源的顺序下载计算优先级相同的资源。您可以在 Chrome 浏览器开发工具网络选项卡下查看加载页面时分配给不同资源的优先级。(右键单击表格标题，确保包含优先级列）。

![A screenshot of assets listed in the network tab of Chrome's DevTools. The columns read, from left to right: name, status, type, initiator, size, time, and priority.](https://web.dev/static/articles/fetch-priority/image/a-screenshot-assets-list-fdcb380583bdd.png)

*Priority for resource `type = "font"` on BBC news detail page*
*(BBC 新闻详细页面上资源类型 ="字体 "的优先级)*

![A screenshot of assets listed in the network tab of Chrome's DevTools. The columns read, from left to right: name, status, type, initiator, size, time, and priority.](https://web.dev/static/articles/fetch-priority/image/a-screenshot-assets-list-f556ffc3eb8e4.png)

*Priority for resource type = "script" on BBC news detail page*
*(BBC 新闻详细页面上资源类型 ="脚本 "的优先级)*

Where priorities change, you can use the **Big request rows** setting to view both the initial and final priority. The same is shown in a tooltip regardless of the **Big request rows** setting.
当优先级发生变化时，可以使用大请求行设置来查看初始和最终优先级。无论是否使用大请求行设置，都会在工具提示中显示相同的优先级。

![A screenshot of assets listed in the network tab of Chrome's DevTools. The 'Big request rows' setting is ticked and the Priority column shows the first image with a prioruty of High, and a different initial priority of medium below. The same is shown in the tooltip.](https://web.dev/static/articles/fetch-priority/image/initial-final-priority.png)

Seeing both initial and final priority in DevTools

## When would you need Fetch Priority?

Knowledge of the browser's prioritization logic provides you with a few existing knobs to tweak the order of downloads. You can
了解了浏览器的优先级逻辑后，您就可以使用一些现有的旋钮来调整下载顺序。您可以

1.  Place resource tags such as `<script>` and `<link>` depending on the order you want to download them. Resources with the same priority are generally loaded in the order they are discovered.
    根据下载顺序放置资源标记，如 `<script>` 和 `<link>`。具有相同优先级的资源一般会按照被发现的顺序加载。
2.  [Use the `preload` resource hint](https://web.dev/articles/preload-critical-assets) to download necessary resources earlier, particularly for resources that are not easily discovered early by the browser.
    使用预加载资源提示来提前下载必要的资源，尤其是浏览器不容易提前发现的资源。
3.  Use [`async` or `defer`](https://web.dev/articles/efficiently-load-third-party-javascript#use_async_or_defer) to download scripts without blocking other resources.
    使用 async 或 defer 下载脚本，而不会阻塞其他资源。
4.  Lazy-load below-the-fold content so that the browser can use the available bandwidth for more critical above-the-fold resources.
    懒加载折叠以下的内容，以便浏览器将可用带宽用于更重要的折叠以上资源。

These techniques help to control the browser's priority computation, thereby improving performance and [Core Web Vitals](https://web.dev/articles/vitals). For example, when a critical background image is preloaded, it can be discovered much earlier, improving the Largest Contentful Paint ([LCP](https://web.dev/articles/lcp)).
这些技术有助于控制浏览器的优先级计算，从而提高性能和 Core Web Vitals。例如，当预载关键背景图片时，可以更早地发现它，从而提高最大内容画质（LCP）。

Sometimes these handles may not be enough to prioritize resources optimally for your application. Here are some of the scenarios where Fetch Priority could be helpful:
有时，这些句柄可能不足以为应用程序优化资源优先级。以下是 Fetch Priority 可能会有所帮助的一些情况：

1.  You have several above-the-fold images, but all of them need not have the same priority. For example, in an image carousel, only the first visible image needs a higher priority compared to the others.
    您有多张折叠式图片，但所有图片的优先级不一定相同。例如，在图片传送带中，只有第一张可见图片需要比其他图片有更高的优先级。
2.  Hero images inside the viewport typically start at a "Low" priority (note a change in Chrome 117 sets the first five large images to "Medium" but this may or may not include your hero image). After the layout is complete, Chrome discovers they are in the viewport and boosts their priority. This usually adds a significant delay to loading the image. Providing the Fetch Priority in markup lets the image start at a "High" priority and start loading much earlier.  
    视口中的英雄图片通常从 "低 "优先级开始（注意 Chrome 浏览器 117 中的一项更改将前五张大图片设置为 "中"，但这可能包括也可能不包括你的英雄图片）。布局完成后，Chrome 浏览器会发现它们位于视口中，并提高它们的优先级。这通常会大大延迟图片的加载。在标记中提供 "撷取优先级 "可以让图片从 "高 "优先级开始，并更早地开始加载。
      
    Note that preload is still required for the early discovery of LCP images included as CSS backgrounds and can be combined with Fetch Priority by including the `fetchpriority='high'` on the preload, otherwise it will still start with a "Low" or "Medium" priority for images.
    请注意，在早期发现作为 CSS 背景的 LCP 图像时，仍需要进行预加载，而且可以通过在预加载中加入 fetchpriority='high'，将预加载与 "获取优先级 "结合起来，否则仍会以 "低 "或 "中 "优先级开始加载图像。
3.  Declaring scripts as `async` or `defer` tells the browser to load them asynchronously. However, as seen in the [previous table](https://web.dev/articles/fetch-priority#resource_priority), these scripts are also assigned a "Low" priority. You may want to bump up their priority while ensuring asynchronous download, particularly for any scripts that are critical for the user experience.
    将脚本声明为 async 或 defer 会告诉浏览器以异步方式加载脚本。不过，正如上表所示，这些脚本的优先级也是 "低"。在确保异步下载的同时，您可能希望提高它们的优先级，尤其是对用户体验至关重要的脚本。
4.  You may use the JavaScript [`fetch()`](https://web.dev/articles/introduction-to-fetch) API to fetch resources or data asynchronously. Fetch is assigned a "High" priority by the browser. There may be situations where you do not want all your fetches to be executed with "High" priority and prefer using different Fetch Priority instead. This can be helpful when running background API calls and mixing them with API calls that are responding to user input, like with autocomplete. The background API calls can be tagged as "Low" priority and the interactive API calls marked as "High" priority.
    您可以使用 JavaScript fetch() API 异步获取资源或数据。浏览器会为获取分配一个 "高 "优先级。在某些情况下，您可能不希望所有获取都以 "高 "优先级执行，而希望使用不同的 "获取优先级"。当运行后台 API 调用并将其与响应用户输入（如自动完成）的 API 调用混合时，这可能会有所帮助。可以将后台 API 调用标记为 "低 "优先级，而将交互式 API 调用标记为 "高 "优先级。
5.  The browser assigns CSS and fonts a "High" priority, but all such resources may not be equally important or required for LCP. You can use Fetch Priority to lower the priority of some of these resources.
    浏览器会将 CSS 和字体指定为 "高 "优先级，但并非所有此类资源对 LCP 都同样重要或必需。您可以使用 "撷取优先级 "来降低其中一些资源的优先级。

## The `fetchpriority` attribute

You can provide a Fetch Priority using the `fetchpriority` HTML attribute. You can use the attribute with `link`, `img`, and `script` tags. The attribute allows you to specify the priority for resource types such as CSS, fonts, scripts, and images when downloaded using the supported tags. The `fetchpriority` attribute accepts one of three values:
您可以使用 fetchpriority HTML 属性提供 "撷取优先级"。该属性可与 link、img 和 script 标签一起使用。通过该属性，您可以指定 CSS、字体、脚本和图像等资源类型在使用支持的标记下载时的优先级。fetchpriority 属性可接受三种值之一：

*   `high`: You consider the resource a high priority and want the browser to prioritize it as long as the browser's heuristics don't prevent that from happening.
    `high`：您认为该资源的优先级较高，并希望浏览器在浏览器的启发式算法不阻止的情况下优先处理该资源。
*   `low`: You consider the resource a low priority and want the browser to deprioritize it if it's heuristics permit.
*   `auto`: This is the default value where you don't have a preference and let the browser decide the appropriate priority.

Here are a few examples of using the `fetchpriority` attribute in markup and the script-equivalent `priority` property.

```html
<!-- We don't want a high priority for this above-the-fold image(首屏图片) -->
<img src="/images/in_viewport_but_not_important.svg" fetchpriority="low" alt="I'm an unimportant image!">

<!-- We want to initiate an early fetch for a resource, but also deprioritize it -->
<!-- 我们希望启动资源的早期获取，但也要取消它的优先级 -->
<link rel="preload" href="/js/script.js" as="script" fetchpriority="low">

<script>
  fetch('https://example.com/', {priority: 'low'})
  .then(data => {
    // Trigger a low priority fetch
  });
</script>
```

### Browser priority and `fetchpriority`

You can apply the `fetchpriority` attribute to different resources as shown in the following figure to potentially increase or reduce their computed priority. `fetchpriority="auto"` (◉) in each row denotes the default priority for that type of resource (also available [as a Google Doc](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit)).
如下图所示，您可以将 fetchpriority 属性应用于不同的资源，以提高或降低其计算优先级。每行中的 fetchpriority="auto" (◉) 表示该类型资源的默认优先级（也可作为 Google 文档提供）。

![20231122193416](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122193416.png)

:::info
**Note:**  
**\*** Preload using `"as"` or [fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API) using a specific `"destination"` use the priority of the destination they are requesting. For example, preload `as="style"` will use Highest priority. With no explicit destintation, fetch will be prioritized like an async XHR.  
**\*\*** "Early" is defined as being requested before any non-preloaded images have been requested ("late" is after).  
**\*\*\*** CSS where the media type doesn't match is not fetched by the preload scanner and is only processed when the main parser reaches it, which usually means it will be fetched very late and with a "late" priority.  
◉: `fetchpriority="auto"`  
⬆: `fetchpriority="high"`  
⬇: `fetchpriority="low"`  
Images by default start at "Low" priority and then at layout time are boosted to "High" if within the viewport. As of Chrome 117, the first 5 large images are set to "Medium" to speed this up and two of these can be fetched in parallel during the initial "tight mode". By tagging important images in markup using `fetchpriority="high"`, they can start at "High" immediately and load much faster.``

使用 "as "预加载或使用特定 "目标 "获取时，会使用所请求目标的优先级。例如，预载 as="style" 将使用最高优先级。在没有明确目的地的情况下，获取的优先级与异步 XHR 类似。
**\*\*** "Early" 被定义为在请求任何非预加载图像之前（"late" is after)。
**\*\*\*** 媒体类型不匹配的CSS不会被预加载扫描仪获取，并且仅在主解析器到达它时才进行处理，这通常意味着它将被获取到很晚并且具有“late”优先级。
◉: fetchpriority="auto"
⬆：fetchpriority="high"
⬇: fetchpriority="low" 
默认情况下，图像从 "低 "优先级开始，如果在视口范围内，则在布局时会提升到 "高 "优先级。从 Chrome 117 开始，前 5 张大图片被设置为 "中"，以加快速度，其中两张可在初始 "紧缩模式 "下并行获取。通过使用 fetchpriority="high" 在标记中标记重要图片，它们可以立即从 "高 "开始，加载速度会更快。
:::

Note that `fetchpriority` sets the _relative priority_—that is it raises or lowers the default priority by an appropriate amount, rather than explicitly setting the priority to "High" or "Low" and the browser decides the relative priority. Often this is "High" or "Low", but not always. For example, critical CSS with `fetchpriority="high"` will still retain the "VeryHigh"/"Highest" priority, and using `fetchpriority="low"` on these will still retain the "High" priority—in neither case is the Priority explicitly set to "High" or "Low".

:::info
请注意，fetchpriority 设置的是相对优先级，即它会适当提高或降低默认优先级，而不是显式地将优先级设置为 "高 "或 "低"，然后由浏览器决定相对优先级。通常是 "高 "或 "低"，但并不总是这样。例如，使用 fetchpriority="high" 的关键 CSS 仍将保留 "VeryHigh"/"Highest "优先级，而在这些 CSS 上使用 fetchpriority="low" 仍将保留 "High "优先级--在这两种情况下，优先级都没有明确设置为 "High "或 "Low"。
:::

### Use cases

You can use the `fetchpriority` attribute to address scenarios where you may wish to provide the browser with an extra hint as to what priority to fetch a resource with.
您可以使用 fetchpriority 属性来解决您可能希望为浏览器提供额外提示的情况，即以何种优先级获取资源。

#### Increase the priority of the LCP image

You can specify `fetchpriority="high"` to boost the priority of the LCP or other critical images.
您可以指定 fetchpriority="high"，以提高 LCP 或其他关键图像的优先级。

```html
<img src="lcp-image.jpg" fetchpriority="high">
```

The following comparison shows the Google Flights page with an LCP background image loaded with and without Fetch Priority. With the priority set to high, the [LCP improved from 2.6s to 1.9s](https://www.webpagetest.org/video/compare.php?tests=211006_AiDcG3_40871b05d6040112a05be4524565cf5d%2C211006_BiDcHR_bebed947f1b6607f2d97e8a899fdc36b&thumbSize=200&ival=100&end=visual).
下面的对比显示了加载了 LCP 背景图片的 Google Flights 页面，有无 Fetch Priority。优先级设置为高时，LCP 从 2.6 秒缩短到 1.9 秒。

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/202311221937406.gif?imageSlim)

An experiment conducted using Cloudflare workers to rewrite the Google Flights page to use Fetch Priority.

#### Lower the priority of above-the-fold images 降低首屏图像的优先级

You can use `fetchpriority="low"` to lower the priority of above-the-fold images that may not be initially important, for example in an image carousel.

```html
<ul class="carousel">
  <img src="img/carousel-1.jpg" fetchpriority="high">
  <img src="img/carousel-2.jpg" fetchpriority="low">
  <img src="img/carousel-3.jpg" fetchpriority="low">
  <img src="img/carousel-4.jpg" fetchpriority="low">
</ul>
```

In an earlier experiment with the [Oodle](https://github.com/google/oodle-demo) app, we used this to lower the priority of images that do not appear on load. It helped to cut down the load time by 2 seconds.
在早些时候对 Oodle 应用程序进行的实验中，我们用它来降低加载时不出现的图片的优先级。这有助于将加载时间缩短 2 秒。

![A side-by-side comparison of Fetch Priority when used on the Oodle app's image carousel. On the left, the browser sets default priorities for carousel images, but downloads and paints those images around two seconds slower than the example on the right, which sets a higher priority on only the first carousel image.](https://web.dev/static/articles/fetch-priority/image/a-side-side-comparison-54fe14438a5c2.png)

#### Lower the priority of preloaded resources 降低预加载资源的优先级

To stop preloaded resources from competing with other critical resources, you could provide a hint to reduce their priority. You can use this technique with images, scripts, and CSS.
为了防止预加载的资源与其他重要资源竞争，可以提供一个提示来降低它们的优先级。您可以将此技术用于图像、脚本和 CSS。

```html
<!-- Lower priority only for non-critical preloaded scripts -->
<!-- 仅非关键预加载脚本的优先级较低 -->
<link rel="preload" as="script" href="critical-script.js">
<link rel="preload" as="script" href="/js/script.js"  fetchpriority="low">

<!-- Preload CSS without blocking other resources -->
<!-- 预加载CSS而不阻塞其他资源 -->
<link rel="preload" as="style" href="theme.css" fetchpriority="low" onload="this.rel='stylesheet'">
```

#### Reprioritize scripts 重新优先化脚本

Scripts required to make some parts of the page interactive are essential but should not block other resources. You can mark these as async with high priority.
使页面的某些部分具有交互性所需的脚本是必不可少的，但不应阻止其他资源。您可以将这些标记为具有高优先级的异步。

```html
<script src="async_but_important.js" async fetchpriority="high"></script>
```

Scripts cannot be marked as async if they rely on specific DOM states. However if they are lower down on the page, they may be downloaded with a lower priority as shown.
如果脚本依赖于特定的 DOM 状态，则不能将其标记为异步。不过，如果它们在页面的较低位置，则可以较低的优先级下载，如图所示。

```html
<script src="blocking_but_unimportant.js" fetchpriority="low"></script>
```

#### Lower the priority for non-critical data fetches 降低非关键数据获取的优先级

The browser executes `fetch` with a high priority. If you have multiple fetches that may be fired simultaneously, you can use the high default priority for the more critical data fetches and lower it for less critical data.
浏览器以高优先级执行`fetch`。如果您有多个获取可能同时触发，您可以对更关键的数据获取使用高默认优先级，对不太关键的数据降低它。

```html
// Important validation data (high by default)
let authenticate = await fetch('/user');

// Less important content data (suggested low)
let suggestedContent = await fetch('/content/suggested', {priority: 'low'});
```

## Fetch Priority implementation notes 获取优先级实现说明

Fetch Priority can improve performance in specific use cases, as discussed above. There are some things to be aware of:
如上文所述，"获取优先级 "可以提高特定使用情况下的性能。有一些事项需要注意：

*   The `fetchpriority` attribute is a hint and not a directive. The browser will try to respect the developer's preference. It is also possible that the browser will apply its preferences for resource priority as deemed necessary in case of conflicts.
    fetchpriority 属性是一个提示，而不是指令。浏览器会尽量尊重开发人员的偏好。也有可能在发生冲突时，浏览器会根据需要应用其对资源优先级的偏好。
*   Fetch Priority should not be confused with a preload. They are both distinct because:
    获取优先级不应与预加载混淆。它们都是不同的，因为
    
    *   Preload is a mandatory fetch and not a hint.
        **预加载是强制获取，而不是提示。**
    *   Preload allows the browser to discover the resource early, but it will still fetch it with the default priority. Conversely, Fetch Priority does not aid discoverability, but does allow you to increase or decrease the fetch priority.
        预加载允许浏览器提前发现资源，但仍会以默认优先级获取资源。相反，"获取优先级 "不会帮助发现资源，但可以增加或减少获取优先级。
    *   It is easier to observe and measure the effects of a preload.
        这样更容易观察和衡量预加载的效果。
    
    Fetch Priority can complement preloads by increasing the granularity of prioritization. If you had already specified a preload as one of the first items in the `<head>` for an LCP image, then a `high` Fetch Priority may not result in significant gains. However, if the preload was after other resources, then a `high` Fetch Priority can improve the LCP. If a critical image is a CSS background image, you should preload it with `fetchpriority = "high"`.
    获取优先级可以通过增加优先级的颗粒度来补充预加载。如果您已经将预加载指定为LCP图像的`<head>`中的第一个项目之一，那么“高”获取优先级可能不会带来显着的收益。但是，如果预加载是在其他资源之后，那么“高”获取优先级可以改善LCP。如果关键图像是CSS背景图像，您应该使用`fetchpriority = "high"`预加载它。
    
*   The noticeable gains due to prioritization will be more relevant in environments where more resources contend for the available network bandwidth. This is common for HTTP/1.x connections where parallel downloads are not possible or in low bandwidth HTTP/2 connections. Prioritization can resolve bottlenecks in these conditions.
    在有更多资源争夺可用网络带宽的环境中，优先级带来的明显收益会更大。这常见于无法并行下载的 HTTP/1.x 连接或低带宽 HTTP/2 连接。在这些情况下，优先化可以解决瓶颈问题。
    
*   CDNs do [not uniformly implement HTTP/2 prioritization](https://github.com/andydavies/http2-prioritization-issues#cdns--cloud-hosting-services). Even if the browser communicates the priority suggested using Fetch Priority; the CDN may not reprioritize resources in the required order. This makes testing of Fetch Priority difficult. The priorities are applied both internally within the browser and with protocols that support prioritization (HTTP/2 and HTTP/3). It is still worth using even for just the internal browser prioritization independent of CDN or origin support, as that will often change when resources are requested by the browser—for example low priority resources like images are often held back from being requested while the browser processes the critical `<head>` items.
CDN 并未统一实施 HTTP/2 优先级。即使浏览器传达了使用 "撷取优先级 "建议的优先级，CDN 也可能不会按照要求的顺序重新安排资源的优先级。这就给 Fetch Priority 的测试带来了困难。优先级既适用于浏览器内部，也适用于支持优先级的协议（HTTP/2 和 HTTP/3）。即使只是浏览器内部的优先级设置，也值得使用，因为当浏览器请求资源时，优先级往往会发生变化--例如，当浏览器处理关键的 `<head>` 项时，像图片这样的低优先级资源往往会暂缓请求。
    
*   It may not be possible to introduce Fetch Priority as a best practice in your initial design. It is an optimization that you can apply later in the development cycle. You can check the priorities being assigned to different resources on the page, and if they do not match your expectations, you could introduce Fetch Priority for further optimization.
    在您的初始设计中可能无法引入获取优先级作为最佳实践。这是一种优化，您可以在开发周期的后期应用。您可以检查页面上分配给不同资源的优先级，如果它们不符合您的期望，您可以引入获取优先级以进行进一步优化。
    

### Using Preload after Chrome 95

The Fetch Priority feature was available for trial in Chrome 73 to 76 but was not released due to prioritization issues with preloads fixed in Chrome 95. Prior to Chrome 95, requests issued via `<link rel=preload>` always start before other requests seen by the preload scanner, even if the other requests have a higher priority.
获取优先级功能在Chrome73至76年试用，但由于Chrome 95修复的预加载的优先级问题而未发布。在Chrome 95 之前，通过`<link rel=preload>`发出的请求总是在预加载扫描仪看到的其他请求之前启动，即使其他请求具有更高的优先级。

With the fix in Chrome 95 and the enhancement for Fetch Priority, we hope that developers will start using preload for its [intended purpose](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/#loading-of-late-discovered-resources)—to preload resources not detected by the parser (fonts, imports, background LCP images). The placement of the `preload` hint will affect when the resource is preloaded. Some key points on using preload are:
通过 Chrome 95 中的修复和对 "获取优先级 "的增强，我们希望开发人员能够开始将预加载用于其预期目的--预加载解析器未检测到的资源（字体、导入、背景 LCP 图像）。预加载提示的位置将影响资源的预加载时间。使用预加载的一些要点如下

*   Including the preload in HTTP headers will cause it to jump ahead of everything else.
    在 HTTP 标头中包含预加载会使其跳转到其他所有内容之前。
*   Generally, preloads will load in the order the parser gets to them for anything above "Medium" priority—so be careful if you are including preloads at the beginning of the HTML.
    一般来说，对于优先级高于 "中等 "的资源，预加载会按照解析器的顺序加载，因此如果在 HTML 开头加入预加载，一定要小心。
*   Font preloads will probably work best towards the end of the head or beginning of the body.
    字体预载最好放在头部的末尾或正文的开头。
*   Import preloads (dynamic `import()` or `modulepreload`) should be done after the script tag that needs the import (so the actual script gets loaded/parsed first). Basically, if the script tag loads a script that will trigger the load of dependencies, make sure the `<link rel=preload>` for the dependencies is after the parent script tag, otherwise the dependencies may end up loading before the main script. In the proper order, the main script can be parsed/eval'd while the dependencies are loading.
    导入预加载（动态'import（）'或'modulepreload'）应该在需要导入的脚本标记之后完成（因此实际脚本首先被加载/解析）。基本上，如果脚本标记加载了一个将触发依赖项加载的脚本，请确保依赖项的`<link rel=preload>`在父脚本标记之后，否则依赖项可能会在主脚本之前加载。按照正确的顺序，可以在加载依赖项时解析/eval'd主脚本。
*   Image preloads have a "Low" or "Medium" priority (without Fetch Priority) and should be ordered relative to async scripts and other low or lowest priority tags.
    图像预加载具有“低”或“中”优先级（没有获取优先级），应相对于异步脚本和其他低或最低优先级标签进行排序。

## History

Fetch Priority was first experimented with in Chrome as an origin trial in 2018 and then again in 2021 using the `importance` attribute. At that time it was known as [Priority Hints](https://github.com/WICG/priority-hints). The interface has since changed to `fetchpriority` for HTML and `priority` for JavaScript's Fetch API as part of the web standards process. To reduce confusion we now refer to this API as Fetch Priority.

## Browser compatibility

Browser Support

![20231122193939](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231122193939.png)

As of this writing, Fetch Priority is only available in Chromium-based browsers, though it is being worked on for Safari and Firefox. Other browser engines or earlier versions of Chromium browsers will ignore the attribute and use their default prioritization heuristics. Until another browser implements Fetch Priority, you may notice some references—[such as MDN](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/fetchPriority)—mark this as [_Experimental_](https://developer.mozilla.org/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), however Fetch Priority is now standardized and included in the [HTML living standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attributes) and [Fetch living standard](https://fetch.spec.whatwg.org/#request-priority).

## Conclusion

Developers are likely to be interested in Fetch Priority with the fixes in preload behavior and the recent focus on Core Web Vitals and LCP. They now have additional knobs available to achieve their desired loading sequence.



































































