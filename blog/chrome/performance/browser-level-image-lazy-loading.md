# Web 的浏览器级图像延迟加载

`metadata:`

**原标题:** Browser-level image lazy loading for the web

**链接:** https://web.dev/articles/browser-level-image-lazy-loading

---

Built-in lazy loading is finally here!  

内置延迟加载终于来了！

Browser-level support for lazy loading images is now supported on the web! This video shows a [demo](https://mathiasbynens.be/demo/img-loading-lazy) of the feature:  

Web 现在支持对延迟加载图像的浏览器级支持！此视频显示了该功能的演示：

【视频 略】

You can use the `loading` attribute to lazy-load images without the need to write custom lazy loading code or use a separate JavaScript library. Let's dive into the details.  

您可以使用该 `loading` 属性延迟加载图像，而无需编写自定义延迟加载代码或使用单独的 JavaScript 库。让我们深入了解细节。

## Browser compatibility 浏览器兼容性

Browser Support 

![20231121174326](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231121174326.png)

Browsers that do not support the `loading` attribute simply ignore it without side effects.  

不支持该 `loading` 属性的浏览器会忽略它而不会产生副作用。

## Why browser-level lazy loading?  

为什么浏览器级延迟加载？

According to the [HTTP Archive](https://httparchive.org/reports/page-weight), images are the most requested asset type for most websites and usually take up more bandwidth than any other resource. At the 90th percentile, sites send over 5 MB of images on desktop and mobile. That's a lot of [cat pictures](https://en.wikipedia.org/wiki/Cats_and_the_Internet).  

根据 HTTP Archive 的说法，图像是大多数网站最需要的资产类型，通常比任何其他资源占用更多的带宽。在第 90 个百分位，网站在桌面和移动设备上发送超过 5 MB 的图像。那是很多猫的照片。

Previously, there were two ways to defer the loading of off-screen images:  

以前，有两种方法可以延迟屏幕外图像的加载：

*   Using the [Intersection Observer API](https://developer.chrome.com/blog/intersectionobserver/)  

    使用 Intersection Observer API

*   Using `scroll`, `resize`, or `orientationchange` [event handlers](https://web.dev/articles/lazy-loading-images)  

    使用 `scroll` 、 `resize` 或 `orientationchange` 事件处理程序

Either option can let developers include lazy loading functionality, and many developers have built third-party libraries to provide abstractions that are even easier to use. With lazy loading supported directly by the browser, however, there's no need for an external library. Browser-level lazy loading also ensures that deferred loading of images still works even if JavaScript is disabled on the client.  

任何一个选项都可以让开发人员包含延迟加载功能，并且许多开发人员已经构建了第三方库来提供更易于使用的抽象。但是，由于浏览器直接支持延迟加载，因此不需要外部库。浏览器级延迟加载还可以确保即使在客户端上禁用了 JavaScript 时，图像的延迟加载仍然有效。

## The `loading` attribute 属性 `loading` 

Chrome loads images at different priorities depending on where they're located with respect to the device viewport. Images below the viewport are loaded with a lower priority, but they're still fetched as the page loads.  

Chrome 会根据图片相对于设备视口的位置，以不同的优先级加载图片。视口下方的图像以较低的优先级加载，但仍会在页面加载时提取。

You can use the `loading` attribute to completely defer the loading of offscreen images that are reached by scrolling:  

您可以使用该 `loading` 属性来完全延迟通过滚动到达的屏幕外图像的加载：

```html
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```

Here are the supported values for the `loading` attribute:  

以下是该 `loading` 属性支持的值：

*   `lazy`: Defer loading of the resource until it reaches a [calculated distance](https://web.dev/articles/browser-level-image-lazy-loading#distance-from-viewport_thresholds) from the viewport.  

    `lazy` ：延迟加载资源，直到它达到与视口的计算距离。

*   `eager`: Default loading behavior of the browser, which is the same as not including the attribute and means the image is loaded regardless of where it's located on the page. While this is the default, it can be useful to explicitly set this if your tooling automatically adds `loading="lazy"` if there is no explicit value, or if your linter complains if it is not explicitly set.  

    `eager` ：浏览器的默认加载行为，与不包含属性相同，意味着无论图像在页面上的位置如何，都会加载图像。虽然这是默认设置，但如果工具在没有显式值时自动添加 `loading="lazy"` ，或者 linter 在未显式设置时抱怨，则显式设置此值会很有用。

:::warning

**Caution:** Images that are highly likely to be in-viewport, and in particular [LCP](https://web.dev/articles/lcp) images, [should not be lazy-loaded](https://web.dev/articles/browser-level-image-lazy-loading#avoid_lazy_loading_images_that_are_in_the_first_visible_viewport).  

注意：极有可能位于视口内的图像，尤其是 LCP 图像，不应延迟加载。

:::

### Relationship between the `loading` attribute and fetch priority  

`loading` 属性与提取优先级之间的关系

The `eager` value is simply an instruction to load the image as usual, without delaying the load further if it is off-screen. It does not imply that the image is loaded any quicker than another image without the `loading="eager"` attribute.  

该 `eager` 值只是照常加载图像的指令，如果图像不在屏幕，则不会进一步延迟加载。这并不意味着图像的加载速度比没有该 `loading="eager"` 属性的另一个图像快。

Browsers prioritize resources based on various heuristics, and the `loading` attribute just states _when_ the image resource is queued, not _how_ it is prioritized in that queue. `eager` just implies the usual eager queueing browsers use by default.  

浏览器根据各种启发式方法对资源进行优先级排序，该 `loading` 属性仅说明图像资源何时排队，而不是在该队列中如何确定其优先级。 `eager` 只是暗示浏览器默认使用的通常急切排队。

If you want to increase the fetch priority of an important image (for example the LCP image), then [Fetch Priority](https://web.dev/articles/fetch-priority) should be used with `fetchpriority="high"`.  

如果要提高重要映像（例如 LCP 映像）的读取优先级，则应将 Fetch Priority 与 `fetchpriority="high"` 一起使用。

Note that an image with `loading="lazy"` and `fetchpriority="high"` will still be delayed while it is off-screen, and then fetched with a high priority when it is nearly within the viewport. It would likely be fetched with a high priority in this case anyway, so this combination should not really be needed nor used.  

请注意，带有 `loading="lazy"` 和 `fetchpriority="high"` 的图像在屏幕外时仍会延迟，然后在接近视口时以高优先级获取。无论如何，在这种情况下，它可能会以高优先级获取，因此实际上不应该使用这种组合。

### Distance-from-viewport thresholds  距视口的距离阈值

All images that are above the fold—that is, immediately viewable without scrolling—load normally. Those that are far below the device viewport are only fetched when the user scrolls near them.  

所有首屏图像（即无需滚动即可立即查看）均可正常加载。仅当用户滚动到设备视口附近时，才会获取远低于设备视口的视口。

Chromium's implementation of lazy loading tries to ensure that offscreen images are loaded early enough so that they have finished loading once the user scrolls near to them. By fetching nearby images well before they become visible in the viewport, we maximize the chance they are already loaded by the time they become visible.  

Chromium 的延迟加载实现试图确保足够早地加载屏幕外图像，以便在用户滚动到它们附近时它们就完成了加载。通过在附近的图像在视口中可见之前获取它们，我们可以最大限度地提高它们在可见时已经加载的可能性。

Compared to JavaScript lazy loading libraries, the thresholds for fetching images that scroll into view may be considered conservative.  

与 JavaScript 延迟加载库相比，获取滚动到视图中的图像的阈值可能被认为是保守的。

:::info

**Note:** Experiments conducted using Chrome on Android suggest that on 4G, 97.5% of below-the-fold images that are lazy-loaded were fully loaded within 10ms of becoming visible. Even on slow 2G networks, 92.6% of below-the-fold images were fully loaded within 10ms. This means browser-level lazy loading offers a stable experience regarding the visibility of elements that are scrolled into view.  

注意：在 Android 上使用 Chrome 进行的实验表明，在 4G 上，97.5% 的延迟加载的首屏图像在可见后的 10 毫秒内就完全加载了。即使在慢速 2G 网络上，92.6% 的首屏图像也能在 10 毫秒内满载。这意味着浏览器级延迟加载在滚动到视图中的元素的可见性方面提供了稳定的体验。

:::

The distance threshold is not fixed and varies depending on several factors:  

距离阈值不是固定的，并且取决于以下几个因素：

*   The type of image resource being fetched  

    正在提取的图像资源的类型

*   The [effective connection type](https://googlechrome.github.io/samples/network-information/)  

    有效连接类型

You can find the default values for the different effective connection types in the [Chromium source](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/frame/settings.json5;l=963-995). These numbers, and even the approach of fetching only when a certain distance from the viewport is reached, may change in the future as the Chrome team improves heuristics to determine when to begin loading.  

您可以在 Chromium 源中找到不同有效连接类型的默认值。这些数字，甚至仅在距视口一定距离时才提取的方法，将来可能会发生变化，因为 Chrome 团队改进了启发式方法以确定何时开始加载。

:::info

**Note:** You can experiment with these different thresholds by [throttling the network](https://developer.chrome.com/docs/devtools/network/#throttle) in DevTools.  

注意：可以通过在 DevTools 中限制网络来试验这些不同的阈值。

:::

## Improved data-savings and distance-from-viewport thresholds

As of July 2020, Chrome has made significant improvements to align the image lazy loading distance-from-viewport thresholds to better meet developer expectations.  

截至 2020 年 7 月，Chrome 进行了重大改进，以调整图像延迟加载与视口的距离阈值，以更好地满足开发者的期望。

On fast connections (4G), we reduced Chrome's distance-from-viewport thresholds from `3000px` to `1250px` and on slower connections (3G or lower), changed the threshold from `4000px` to `2500px`. This change achieves two things:  

在快速连接 （4G） 上，我们将 Chrome 的视口距离阈值从 to `1250px` 降低到，在速度较慢的连接（3G 或更低）上，将阈值从 `4000px` `3000px` 更改为 `2500px` 。此更改实现了两件事：

*   `<img loading=lazy>` behaves closer to the experience offered by JavaScript lazy loading libraries.  

    `<img loading=lazy>` 行为更接近 JavaScript 延迟加载库提供的体验。

*   The new distance-from-viewport thresholds still allow us to guarantee images have probably loaded by the time a user has scrolled to them.  

    新的与视口的距离阈值仍然允许我们保证图像在用户滚动到它们时可能已经加载。

You can find a comparison between the old vs. new distance-from-viewport thresholds for one of our demos on a fast connection (4G) below:  

您可以在下面找到我们关于快速连接 （4G） 的演示之一的旧与新视口距离阈值之间的比较：

Old thresholds. vs new thresholds:  

旧阈值。与新阈值相比：

![The new and improved thresholds for image lazy loading, reducing the distance-from-viewport thresholds for fast connections from 3000px down to 1250px](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-and-improved-thresho-a20c669983f73.png?imageSlim)

and the new thresholds vs. LazySizes (a popular JS lazy loading library):  

以及与 LazySizes（一个流行的 JS 延迟加载库）相比的新阈值：

![The new  distance-from-viewport thresholds in Chrome loading 90KB of images compared to LazySizes loading in 70KB under the same network conditions](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-distance-viewport-b99ee22471f28.png?imageSlim)

We are committed to working with the web standards community to explore better alignment in how distance-from-viewport thresholds are approached across different browsers.  

我们致力于与 Web 标准社区合作，探索在不同浏览器之间如何接近视口距离阈值方面更好地保持一致。

### Images should include dimension attributes  

图片应包含维度属性

While the browser loads an image, it does not immediately know the image's dimensions, unless these are explicitly specified. To enable the browser to reserve sufficient space on a page for images, it is recommended that all `<img>` tags include both `width` and `height` attributes. Without dimensions specified, [layout shifts](https://web.dev/articles/cls) can occur, which are more noticeable on pages that take some time to load.  

当浏览器加载图像时，它不会立即知道图像的尺寸，除非明确指定这些尺寸。要使浏览器能够在页面上为图像保留足够的空间，建议所有 `<img>` 标记都包含 `width` 和 `height` 属性。如果未指定尺寸，则可能会发生布局偏移，这在需要一些时间才能加载的页面上更为明显。

```html
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```

Alternatively, specify their values directly in an inline style:  

或者，直接在内联样式中指定其值：

```html
<img src="image.png" loading="lazy" alt="…" style="height:200px; width:200px;">
```

The best practice of setting dimensions applies to `<img>` tags regardless of whether or not they are being loaded lazily. With lazy loading, this can become more relevant. Setting `width` and `height` on images in modern browsers also allows browsers to infer their intrinsic size.  

设置维度的最佳实践适用于 `<img>` 标签，无论标签是否延迟加载。使用延迟加载，这可能变得更加相关。在现代浏览器中设置 `width` 和 `height` 设置图像还允许浏览器推断其固有大小。

In most scenarios images still lazy-load if dimensions are not included, but there are a few edge cases you should be aware of. Without `width` and `height` specified, image dimensions are 0×0 pixels at first. If you have a gallery of such images, the browser may conclude that all of them fit inside the viewport at the start, as each takes up practically no space and no image is pushed offscreen. In this case the browser determines that all of them are visible to the user and decides to load everything.  

在大多数情况下，如果不包括尺寸，图像仍会延迟加载，但应注意一些边缘情况。如果没有 `width` 指定， `height` 图像尺寸最初为 0×0 像素。如果您有一个此类图像的图库，浏览器可能会得出结论，它们在开始时都适合视口，因为每个图像几乎不占用空间，并且不会将图像推出屏幕。在这种情况下，浏览器确定所有这些内容对用户可见，并决定加载所有内容。

Also, [specifying image dimensions decreases the chances of layout shifts happening](https://www.youtube.com/watch?v=4-d_SoCHeWE). If you are unable to include dimensions for your images, lazy loading them can be a trade-off between saving network resources and potentially being more at risk of layout shift.  

此外，指定图像尺寸可以减少发生布局偏移的可能性。如果无法为图像添加尺寸，则延迟加载它们可能是在节省网络资源和可能面临更多布局偏移风险之间的权衡。

While lazy loading in Chromium is implemented in a way such that images are likely to be loaded once they are visible, there is still a small chance that they might not be loaded yet. In this case, missing `width` and `height` attributes on such images increase their impact on Cumulative Layout Shift.  

虽然 Chromium 中的延迟加载是以一种方式实现的，即图像一旦可见就可能会被加载，但它们仍可能尚未加载的可能性很小。在这种情况下，此类图像上的缺失 `width` 和 `height` 属性会增加它们对累积布局偏移的影响。

:::info

**Note:** Take a look at this [demo](https://mathiasbynens.be/demo/img-loading-lazy) to see how the `loading` attribute works with 100 pictures.  

注意：请看一下这个演示，看看该 `loading` 属性是如何处理 100 张图片的。

:::

Images that are defined using the `<picture>` element can also be lazy-loaded:  

使用该 `<picture>` 元素定义的图像也可以延迟加载：

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg 1x, larger.jpg 2x">
  <img src="photo.jpg" loading="lazy">
</picture>
```

Although a browser will decide which image to load from any of the `<source>` elements, the `loading` attribute only needs to be included to the fallback `<img>` element.  

尽管浏览器将决定从任何元素加载哪个图像，但该 `loading` 属性只需要包含在回退 `<img>` `<source>` 元素中。

## Avoid lazy loading images that are in the first visible viewport

You should avoid setting `loading=lazy` for any images that are in the first visible viewport. This is particularly relevant for LCP images. See the article [The performance effects of too much lazy-loading](https://web.dev/articles/lcp-lazy-loading) for more information.  

应避免对第一个可见视口中的任何图像进行设置 `loading=lazy` 。这与LCP图像尤其相关。有关详细信息，请参阅文章延迟加载过多对性能的影响。

It is recommended to only add `loading=lazy` to images which are positioned below the fold, if possible. Images that are eagerly loaded can be fetched right away, while images which are loaded lazily the browser currently needs to wait until it knows where the image is positioned on the page, which relies on the `IntersectionObserver` to be available.  

如果可能，建议仅添加到 `loading=lazy` 位于首屏下方的图像中。急切加载的图像可以立即获取，而延迟加载的图像浏览器目前需要等到它知道图像在页面上的位置，这依赖于 `IntersectionObserver` 可用。

Generally, any images within the viewport should be loaded eagerly using the browser's defaults. You do not need to specify `loading=eager` for this to be the case for in-viewport images.  

通常，视口中的任何图像都应使用浏览器的默认值快速加载。您无需指定 `loading=eager` 视口内图像就是这种情况。

```html
<!-- visible in the viewport -->
<img src="product-1.jpg" alt="..." width="200" height="200">
<img src="product-2.jpg" alt="..." width="200" height="200">
<img src="product-3.jpg" alt="..." width="200" height="200">

<!-- offscreen images -->
<img src="product-4.jpg" loading="lazy" alt="..." width="200" height="200">
<img src="product-5.jpg" loading="lazy" alt="..." width="200" height="200">
<img src="product-6.jpg" loading="lazy" alt="..." width="200" height="200">
```

## Graceful degradation 优雅降级

Browsers that do not support the `loading` attribute will ignore its presence. While these browsers will of course not get the benefits of lazy loading, including the attribute has no negative impact on them.  

不支持该 `loading` 属性的浏览器将忽略它的存在。虽然这些浏览器当然不会获得延迟加载的好处，但包括属性对它们没有负面影响。

## FAQ

### Are there plans to automatically lazy-load images in Chrome?

Previously, Chromium automatically lazy-loaded any images that were well suited to being deferred if [Lite mode](https://blog.chromium.org/2019/04/data-saver-is-now-lite-mode.html) was enabled on Chrome for Android and the `loading` attribute was either not provided or set as `loading="auto"`. However, [Lite mode has been deprecated](https://support.google.com/chrome/thread/151853370/sunsetting-chrome-lite-mode-in-m100-and-older) (as was the non-standard `loading="auto"`) and there are currently no plans to provide automatically lazy-load of images in Chrome.  

以前，如果 Chrome for Android 上启用了精简模式，并且未提供该属性或将该 `loading` 属性设置为 `loading="auto"` ，则 Chromium 会自动延迟加载任何非常适合延迟的图片。但是，精简模式已被弃用（与非标准 `loading="auto"` 模式一样），目前没有计划在Chrome中提供自动延迟加载图像。

### Can I change how close an image needs to be before a load is triggered?  

我可以更改在触发加载之前图像需要的接近程度吗？

These values are hardcoded and can't be changed through the API. However, they may change in the future as browsers experiment with different threshold distances and variables.  

这些值是硬编码的，无法通过 API 进行更改。但是，随着浏览器尝试不同的阈值距离和变量，它们将来可能会发生变化。

### Can CSS background images take advantage of the `loading` attribute?

No, it can currently only be used with `<img>` tags.  

不可以，它目前只能与标签一起使用 `<img>` 。

### Is there a downside to lazy loading images that are within the device viewport?  

延迟加载设备视口中的图像是否有缺点？

It is safer to avoid putting `loading=lazy` on above-the-fold images, as Chrome won't preload `loading=lazy` images in the [preload scanner](https://web.dev/articles/preload-scanner) and will also delay fetching such images until all layout is complete. See [Avoid lazy-loading images that are in the first visible viewport](https://web.dev/articles/browser-level-image-lazy-loading#avoid_lazy_loading_images_that_are_in_the_first_visible_viewport) for more information.  

避免使用 `loading=lazy` 首屏图像会更安全，因为 Chrome 不会在预加载扫描器中预加载 `loading=lazy` 图像，并且还会延迟获取此类图像，直到所有布局完成。有关详细信息，请参阅避免延迟加载第一个可见视口中的图像。

### How does the `loading` attribute work with images that are in the viewport but not immediately visible (for example: behind a carousel, or hidden by CSS for certain screen sizes)?  

该属性如何处理视口中但未立即可见的图像（例如：在轮播后面，或在某些屏幕尺寸下被 CSS 隐藏）？

Using `loading="lazy"` _may_ prevent them being loaded when they are not visible but within the [calculated-distance](https://web.dev/articles/browser-level-image-lazy-loading#distance-from-viewport_thresholds). For example, Chrome, Safari and Firefox do not load images using `display: none;` styling—either on the image element or on a parent element. However, other techniques to hide images—such as using `opacity:0` styling—will still result in the images being loaded. Always test your implementation thoroughly to ensure it's acting as intended.  

当它们不可见但在计算距离内时，使用 `loading="lazy"` 可能会阻止它们被加载。例如，Chrome、Safari 和 Firefox 不会使用 `display: none;` 样式加载图像，无论是在图像元素上还是在父元素上。但是，隐藏图像的其他技术（例如使用 `opacity:0` 样式）仍会导致加载图像。始终彻底测试您的实现，以确保其按预期运行。

### What if I'm already using a third-party library or a script to lazy-load images?

With full support of native lazy loading now available in modern browsers, you may wish to reconsider if you still need a third-party library or script to lazy-load images.  

由于现代浏览器现在完全支持本机延迟加载，您可能希望重新考虑是否仍然需要第三方库或脚本来延迟加载图像。

One reason to continue to use a third-party library along with `loading="lazy"` is to provide a polyfill for browsers that do not support the attribute, or to have more control over when lazy loading is triggered.  

继续使用第三方库 `loading="lazy"` 的一个原因是为不支持该属性的浏览器提供 polyfill，或者更好地控制何时触发延迟加载。

### How do I handle browsers that don't support lazy loading?

Create a polyfill or use a third-party library to lazy-load images on your site. The `loading` property can be used to detect if the feature is supported in the browser:  

创建 polyfill 或使用第三方库在您的网站上延迟加载图像。该属性可用于检测浏览器是否支持该 `loading` 功能：

```js
if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
} else {
  // fetch polyfill/third-party library
}
```

For example, [lazysizes](https://github.com/aFarkas/lazysizes) is a popular JavaScript lazy loading library. You can detect support for the `loading` attribute to load lazysizes as a fallback library only when `loading` isn't supported. This works as follows:  

例如，lazysizes 是一个流行的 JavaScript 延迟加载库。只有在不支持时 `loading` ，才能检测对 `loading` 属性的支持，以便将 lazysizes 加载为回退库。其工作原理如下：

*   Replace `<img src>` with `<img data-src>` to avoid an eager load in unsupported browsers. If the `loading` attribute is supported, swap `data-src` for `src`.  

    替换为 `<img src>` `<img data-src>` 以避免在不受支持的浏览器中快速加载。如果支持该 `loading` 属性，请换 `data-src` 成 `src` .

*   If `loading` is not supported, load a fallback (lazysizes) and initiate it. As per lazysizes docs, you use the `lazyload` class as a way to indicate to lazysizes which images to lazy-load.  

    如果 `loading` 不支持，请加载回退 （lazysizes） 并启动它。根据 lazysizes 文档，您可以使用该 `lazyload` 类来指示 lazysizes 要延迟加载哪些图像。

```html
<!-- Let's load this in-viewport image normally -->
<img src="hero.jpg" alt="…">

<!-- Let's lazy-load the rest of these images -->
<img data-src="unicorn.jpg" alt="…" loading="lazy" class="lazyload">
<img data-src="cats.jpg" alt="…" loading="lazy" class="lazyload">
<img data-src="dogs.jpg" alt="…" loading="lazy" class="lazyload">

<script>
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
</script>
```

Here's a [demo](https://lazy-loading.firebaseapp.com/lazy_loading_lib.html) of this pattern. Try it out in an older browser to see the fallback in action.  

下面是此模式的演示。在较旧的浏览器中尝试一下，看看回退的实际效果。

:::info

**Note:** The lazysizes library also provides a [loading plugin](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading) that uses browser-level lazy loading when available but falls back to the library's custom functionality when needed.  

注意：lazysizes 库还提供了一个加载插件，该插件在可用时使用浏览器级延迟加载，但在需要时回退到库的自定义功能。

:::

### Is lazy loading for iframes also supported in browsers?  浏览器是否也支持 iframe 的延迟加载？

Browser Support 

![20231121174646](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231121174646.png)

`<iframe loading=lazy>` has also been standardized and is already implemented in Chromium and Safari. This allows you to lazy-load iframes using the `loading` attribute. See [this dedicated article about iframe lazy-loading](https://web.dev/articles/iframe-lazy-loading) for more information.  

`<iframe loading=lazy>` 也已标准化，并已在 Chromium 和 Safari 中实现。这允许您使用该 `loading` 属性延迟加载 iframe。有关详细信息，请参阅这篇关于 iframe 延迟加载的专门文章。

### How does browser-level lazy loading affect advertisements on a web page?

All ads displayed to the user in the form of an image or iframe lazy-load just like any other image or iframe.  

所有广告都以图片或 iframe 的形式延迟加载，就像任何其他图片或 iframe 一样。

### How are images handled when a web page is printed?  

打印网页时如何处理图像？

All images and iframes are immediately loaded if the page is printed. See [issue #875403](https://bugs.chromium.org/p/chromium/issues/detail?id=875403) for details.  

如果打印页面，则会立即加载所有图像和 iframe。有关详细信息，请参阅问题 #875403。

### Does Lighthouse recognize browser-level lazy loading?

[Lighthouse 6.0](https://web.dev/articles/lighthouse-whats-new-6) and above factor in approaches for offscreen image lazy loading that may use different thresholds, allowing them to pass the [Defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/) audit.  

Lighthouse 6.0 及更高版本考虑了可能使用不同阈值的屏幕外图像延迟加载方法，从而允许它们通过延迟屏幕外图像审核。

## Conclusion 结论

Baking in support for lazy loading images can make it significantly easier for you to improve the performance of your web pages.  

烘焙对延迟加载图像的支持可以使你更容易提高网页的性能。
