# asdf

LCP作为关键指标

---

现场数据、实验室数据

---

简称：
- DCL: DOMContentLoaded
## 要衡量的重要指标

-   **[First Contentful Paint (FCP)](https://web.dev/articles/fcp?hl=zh-cn)**：衡量从网页开始加载到网页任何部分内容呈现在屏幕上所用的时间。*（[lab](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn&bookmark=true#in_the_lab)
-   **[Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=zh-cn)**：衡量从网页开始加载到最大的文本块或图片元素在屏幕上呈现所用的时间。
-   **[First Input Delay (FID)](https://web.dev/articles/fid?hl=zh-cn)**：用于衡量从用户首次与您的网站互动（点击链接、点按按钮或使用由 JavaScript 提供支持的自定义控件）到浏览器实际能够响应此次互动所用的时间。
-   **[Interaction to Next Paint (INP)](https://web.dev/articles/inp?hl=zh-cn)**：测量与网页进行的每次点按、点击或键盘交互的延迟时间，并根据交互次数选择页面中最差的互动延迟时间（或接近最高延迟时间）作为单个有代表性的值，以描述网页的整体响应速度。
-   **[可交互时间 (TTI)](https://web.dev/articles/tti?hl=zh-cn)**：衡量从网页开始加载到视觉呈现、其初始脚本（如有）已加载且能够快速可靠地响应用户输入的时间。
-   **[总阻塞时间 (TBT)](https://web.dev/articles/tbt?hl=zh-cn)**：测量 FCP 和 TTI 之间的总阻塞时间，这段时间内主线程处于阻塞状态的时间足够长，足以阻止输入响应。
-   **[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls?hl=zh-cn)**：衡量从页面开始加载到其[生命周期状态](https://developer.chrome.com/blog/page-lifecycle-api/?hl=zh-cn)更改为隐藏之间发生的所有意外布局偏移的累计分数。
-   **[首字节时间 (TTFB)](https://web.dev/articles/ttfb?hl=zh-cn)**：测量网络使用资源的第一个字节响应用户请求所需的时间。

为了应对此类情况，网页性能工作组还对较低级别的 API 进行了标准化，这可能有助于实现您自己的自定义指标：

-   [User Timing API](https://w3c.github.io/user-timing/)
-   [Long Tasks API](https://w3c.github.io/longtasks/)
-   [Element Timing API](https://wicg.github.io/element-timing/)
-   [Navigation Timing API](https://w3c.github.io/navigation-timing/)
-   [Resource Timing API](https://w3c.github.io/resource-timing/)
-   [服务器计时](https://w3c.github.io/server-timing/)

---


[Vodafone：LCP 提升 31%，销售额增加了 8%](https://web.dev/case-studies/vodafone?hl=zh-cn)

---

核心网页指标: [以用户为中心的效果指标](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn)

事实是效果是相对的：

- 网站对一位用户来说可能速度很快（在连接速度较快且设备性能很强的网络上），而对其他用户来说，网站速度可能较慢（在使用低端设备的网速较慢时）。
- 两个网站完成加载所需的时间可能完全相同，但其中一个网站的加载速度似乎更快（如果网站是逐步加载内容，而不是等到最后显示任何内容）。
- 网站的加载速度可能很快，但对用户互动的响应速度较慢（或根本不响应）。

---

