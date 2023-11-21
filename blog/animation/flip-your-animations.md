# 翻转你的动画

`metadata:`

**原标题:** FLIP Your Animations

**链接:** https://aerotwist.com/blog/flip-your-animations/  

---

Animations in your web app should run at 60fps. Not always easy to achieve that, and it really depends on what you're trying to do, but I'm here to help. With FLIP.  

Web 应用中的动画应以 60fps 的速度运行。实现这一目标并不总是那么容易，这真的取决于你想做什么，但我是来帮忙的。使用 FLIP.

**Update 17th May, 2022 - The lovely folks at GSAP have made their [FLIP Plugin](https://greensock.com/docs/v3/Plugins/Flip/) freely available - check it out!  

2022 年 5 月 17 日更新 - GSAP 的可爱家伙已经免费提供他们的 FLIP 插件 - 看看吧！**

Recently I've had the pleasure of being part of the team that built the [Google I/O 2015 website](https://events.google.com/io2015/), and last year I built the [Chrome Dev Summit site](https://developer.chrome.com/devsummit/). On both sites we used **FLIP**, which is essentially a principle, and not a framework or a library. It is a way of thinking about animations, and attempting to keep them as cheap as possible for the browser which, all being well, should translate over to 60fps animations.  

最近，我有幸成为构建 Google I/O 2015 网站的团队的一员，去年我构建了 Chrome 开发者峰会网站。在这两个网站上，我们都使用了 FLIP，它本质上是一个原则，而不是一个框架或库。这是一种思考动画的方式，并试图使它们对浏览器来说尽可能便宜，如果一切顺利，应该转换为 60fps 的动画。

If you prefer watching to reading, this is my talk from Chrome Dev Summit, where I explain **FLIP** (without naming it explicitly) in lots of detail:  

如果你更喜欢观看而不是阅读，这是我在 Chrome 开发者峰会上的演讲，我在演讲中详细解释了 FLIP（没有明确命名）：

https://youtu.be/RCFQu0hK6bU

# The general approach  一般方法

What we're trying and do is to turn animations on their head (flip, see? Sorry) and, instead of animating “straight ahead” and potentially doing expensive calculations on every single frame we _precalculate_ the animation dynamically and let it play out cheaply.  

我们正在尝试和做的是将动画颠倒过来（翻转，看到吗？对不起），而不是“直接”制作动画，并可能对每一帧进行昂贵的计算，我们动态地预先计算动画，并让它廉价地播放。

**FLIP** stands for **F**irst, **L**ast, **I**nvert, **P**lay.  

FLIP 代表 First、 Last、 Invert、 Play。

Let's break it down:  

让我们分解一下：

*   **First**: the initial state of the element(s) involved in the transition.  

    第一：转换中涉及的元素的初始状态。

*   **Last**: the final state of the element(s).  

    Last：元素的最终状态。

*   **Invert**: here's the fun bit. You figure out from the first and last how the element has changed, so - say - its width, height, opacity. Next you apply `transform`s and `opacity` changes to reverse, or invert, them. If the element has moved 90px down between First and Last, you would apply a transform of -90px in Y. This makes the elements appear as though they're still in the First position but, crucially, they're not.  

    反转：这是有趣的一点。你从第一个和最后一个开始就知道元素是如何变化的，所以 - 比如说 - 它的宽度、高度、不透明度。接下来，应用 `transform` s 和 `opacity` 更改来反转或反转它们。如果元素在 First 和 Last 之间向下移动了 90px，则将在 Y 中应用 -90px 的变换。这使得元素看起来好像它们仍然处于第一位置，但至关重要的是，它们不是。

*   **Play**: switch on transitions for any of the properties you changed, and then remove the inversion changes. Because the element or elements are in their final position removing the transforms and opacities will ease them from their faux First position, out to the Last position.  

    播放：为您更改的任何属性打开过渡，然后删除反转更改。由于一个或多个元素处于其最终位置，因此删除变换和不透明度将使它们从其虚假的“第一个”位置缓和到“最后一个”位置。

Ta daaaaa! 哒哒哒！

# Got Code?  有代码吗？

Why yes I do. Here's that same breakdown in code:  

为什么是的，我这样做。下面是代码中的相同细分：

```js
// Get the first position.
var first = el.getBoundingClientRect();

// Now set the element to the last position.
el.classList.add('totes-at-the-end');

// Read again. This forces a sync
// layout, so be careful.
var last = el.getBoundingClientRect();

// You can do this for other computed
// styles as well, if needed. Just be
// sure to stick to compositor-only
// props like transform and opacity
// where possible.
var invert = first.top - last.top;

// Invert.
el.style.transform =
    `translateY(${invert}px)`;

// Wait for the next frame so we
// know all the style changes have
// taken hold.
requestAnimationFrame(function() {

  // Switch on animations.
  el.classList.add('animate-on-transforms');

  // GO GO GOOOOOO!
  el.style.transform = '';
});

// Capture the end with transitionend
el.addEventListener('transitionend',
    tidyUpAnimations);

```

However, you can also do this with the upcoming [Web Animations API](http://w3c.github.io/web-animations/), which can make things even easier:  

但是，您也可以使用即将推出的 Web 动画 API 来执行此操作，这可以使事情变得更加容易：

```js
// Get the first position.
var first = el.getBoundingClientRect();

// Move it to the end.
el.classList.add('totes-at-the-end');

// Get the last position.
var last = el.getBoundingClientRect();

// Invert.
var invert = first.top - last.top;

// Go from the inverted position to last.
var player = el.animate([
  { transform: `translateY(${invert}px)` },
  { transform: 'translateY(0)' }
], {
  duration: 300,
  easing: 'cubic-bezier(0,0,0.32,1)',
});

// Do any tidy up at the end
// of the animation.
player.addEventListener('finish',
    tidyUpAnimations);
```

Right now you'll need the [Web Animations API polyfill](https://github.com/web-animations/web-animations-js) to use the code above, though, but it's pretty lightweight and does make life a lot easier!  

不过，现在您需要 Web Animations API polyfill 才能使用上面的代码，但它非常轻量级，确实让生活变得轻松多了！

If you want a more “in-production” context for **FLIP** [check out the GSAP FLIP Plugin](https://greensock.com/docs/v3/Plugins/Flip/).  

如果您想要 FLIP 的更多“生产中”上下文，请查看 GSAP FLIP 插件。

# What is it good for?  它有什么好处？

It's absolutely superb for times where you are responding to user input and then animating something in response. So, for example, in the case of Chrome Dev Summit, I was expanding cards that the user tapped on. Often the start and end locations and dimensions of the elements aren't known, because - say - the site is responsive and things move around. This will help you because it's explicitly measuring elements and giving you the correct values at runtime.

当您响应用户输入然后制作动画作为响应时，这绝对是极好的。因此，例如，在 Chrome Dev Summit 的案例中，我正在扩展用户点击的卡片。通常，元素的开始和结束位置以及尺寸是未知的，因为 - 比如说 - 站点是响应式的，并且事物会四处移动。这将对您有所帮助，因为它显式测量元素并在运行时为您提供正确的值。

The reason you can afford to do this relatively expensive precalculation is because there is a window of 100ms after someone interacts with your site where you're able to do work without them noticing. If you're inside that window users will feel like the site responded instantly! It's only when things are moving that you need to maintain 60fps.  

你之所以能负担得起这种相对昂贵的预计算，是因为在有人与你的网站互动后，有一个100毫秒的窗口，你可以在他们不注意的情况下完成工作。如果你在那个窗口中，用户会觉得网站会立即做出回应！只有当事情在移动时，您才需要保持 60fps。

![Taking advantage of user perception.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/window.jpg?imageSlim)

Taking advantage of user perception.  

利用用户感知。

We can use that window of time to do all that `getBoundingClientRect` work (or `getComputedStyle` if that's your poison) in JavaScript, and from there we make sure that we're reducing the animation down to nice-and-fast, compositor-friendly, look-ma-no-paints `transform` and `opacity` changes. (Why just those? Check out my [Pixels are Expensive](https://aerotwist.com/blog/pixels-are-expensive/) post.)  

我们可以利用这个时间窗口在 JavaScript 中完成所有这些 `getBoundingClientRect` 工作（或者 `getComputedStyle` 如果这是你的毒药），从那里我们确保我们将动画减少到漂亮、快速、合成器友好、看起来没有绘画 `transform` 和 `opacity` 更改。（为什么只是那些？看看我的 像素很贵 帖子。

> Animations that can be remapped to transform and opacity changes are the perfect fit.  

> 可以重新映射以转换和不透明度更改的动画是完美的选择。

Animations that _can_ be remapped to `transform` and `opacity` changes are the perfect fit. If you're already limiting to those properties in your JS or CSS animations then you're probably good to go; this technique works best when you're changing layout properties (like width and height, left and top) and you want to remap them to cheaper properties.

可以重新映射 `transform` 和 `opacity` 更改的动画是完美的选择。如果您已经在 JS 或 CSS 动画中限制了这些属性，那么您可能已经准备好了;当您更改布局属性（如宽度和高度、左侧和顶部）并希望将它们重新映射到更便宜的属性时，此技术效果最佳。

Sometimes you will need to rethink your animations to fit this model, and on many occasions I've separated and animated elements individually just so that I can animate them without distortion, and **FLIP** as much as possible. You may feel like that's overkill, but to me it's not, and for two reasons:  

有时你需要重新考虑你的动画以适应这个模型，在很多情况下，我把元素单独分开并制作动画，这样我就可以在不失真的情况下对它们进行动画处理，并尽可能地翻转。你可能会觉得这有点矫枉过正，但对我来说并非如此，原因有两个：

1.  **People want this.** My colleague and friend [Paul Kinlan recently ran a survey on what people want from a news app](http://paul.kinlan.me/what-news-readers-want/). The most popular answer (which was a surprise to him, at least) wasn't offline support, sync, notifications, or anything like that. It was _smooth navigation_. Smooth, like no jank, no stutter, no judder. (/me mutters something about #perfmatters.)  

    人们想要这个。我的同事兼朋友保罗·金兰（Paul Kinlan）最近进行了一项调查，了解人们对新闻应用的需求。最受欢迎的答案（至少对他来说是一个惊喜）不是离线支持、同步、通知或类似的东西。这是流畅的导航。光滑，没有卡顿，没有卡顿，没有抖动。（/me 嘀咕着一些关于 #perfmatters 的事情。

2.  **Native app devs do this.** Of course this is a sliding scale and subjective, but I've heard many times of native developers spending days on end getting the transitions in their apps _just right_. Those “little touches” are a differentiator and, as we get faster loading sites through Service Worker, we're going to be in the same boat. People will judge our sites based on how well they feel when they're running.  

    原生应用程序开发人员会这样做。当然，这是一个滑动比例和主观的，但我听说过很多次原生开发人员花了几天时间在他们的应用程序中进行恰到好处的过渡。这些“小细节”是一个差异化因素，随着我们通过 Service Worker 更快地加载站点，我们将在同一条船上。人们会根据他们运行时的感觉来判断我们的网站。

# Some caveats  一些注意事项

There are a couple of things to bear in mind if you **FLIP**:  

如果您 FLIP，请记住以下几点：

1.  **Don't exceed the 100ms window.** It's important to remember that you shouldn't exceed that window, because your app will appear non-responsive if you do. Keep an eye on it through DevTools to know if you're busting that budget.  

    不要超过 100 毫秒窗口。请务必记住，不应超过该窗口，因为如果超过该窗口，您的应用将显示为无响应。通过 DevTools 密切关注它，以了解你是否超出了预算。

2.  **Orchestrate your animations carefully.** Imagine, if you will, that you're running one of these animations all transformy and opacity-y and then you decide to do another, which requires a bunch of precalculation. That's going to interrupt the animation that's in flight, which is bad. The key here is to make sure your precalculation work is done in idle or the “response window” I talked about, and that two animations don't stomp over each other.  

    仔细编排动画。想象一下，如果你愿意的话，你正在运行其中一个动画，都是变形的和不透明的，然后你决定做另一个，这需要大量的预计算。这会打断正在播放的动画，这很糟糕。这里的关键是确保你的预计算工作是在空闲或我谈到的“响应窗口”下完成的，并且两个动画不会相互踩踏。

3.  **Content can get distorted**. When you're working in a scale and transform world some elements can get distorted. As I said above I've been known to restructure my markup a little to allow me to **FLIP** without distortion, but it can end up being quite the wrangle.  

    内容可能会失真。当您在缩放和变换世界中工作时，某些元素可能会失真。正如我上面所说，众所周知，我会稍微调整我的标记，以允许我在不失真的情况下进行翻转，但这最终可能会成为一场争吵。

# FLIP on, as it were...  

翻开，可以说是......

I've come to love **FLIP** as a way of thinking about animations, because it's a good match of JavaScript and CSS. Calculate in JavaScript, but let CSS handle the animations for you. You don't have to use CSS to do the animations, though, you could just as easily use the Web Animations API or JavaScript itself, whatever's easiest. The main point is that you're reducing the per-frame complexity and cost (which normally means `transform` and `opacity`) to try and give the user the best possible experience.  

我开始喜欢 FLIP 作为思考动画的一种方式，因为它是 JavaScript 和 CSS 的一个很好的匹配。用 JavaScript 计算，但让 CSS 为您处理动画。不过，您不必使用 CSS 来制作动画，您可以轻松地使用 Web 动画 API 或 JavaScript 本身，只要最简单。要点是，您正在降低每帧的复杂性和成本（这通常意味着 `transform` 和 `opacity` ），以尝试为用户提供最佳体验。

I have more to tell you about **FLIP** and a broader, unified model of performance, but that's going to be the next blog post or so I'd say!  

关于 FLIP 和更广泛、更统一的性能模型，我还有更多要告诉你的，但我想说的是，这将是下一篇博文！
