# 坚持只使用合成器属性和管理图层数

`metadata:`

**原标题:** Stick to Compositor-Only Properties and Manage Layer Count

**链接:** https://web.dev/articles/stick-to-compositor-only-properties-and-manage-layer-count

---

Compositing is where the painted parts of the page are put together for displaying on screen.

合成是指将页面的已绘制部分放在一起在屏幕上显示。

There are two key factors in this area that affect page performance: the number of compositor layers that need to be managed, and the properties that you use for animations.

这方面有两个影响页面性能的关键因素：需要管理的合成器层数，以及用于动画的属性。

### Summary

*   Stick to transform and opacity changes for your animations.

  坚持对动画进行`transform`和`opacity`更改。

*   Promote moving elements with `will-change` or `translateZ`.

  用`will-change`或`translateZ`提升移动元素。

*   Avoid overusing promotion rules; layers require memory and management.

  避免过度使用促销规则；`layers`需要内存和管理。

## Use transform and opacity changes for animations

The best-performing version of the pixel pipeline avoids both layout and paint, and only requires compositing changes:

性能最好的像素管道版本避免了布局和绘制，只需要合成更改：

![The pixel pipeline with no layout or paint.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-pixel-pipeline-no-la-96825803c8cec.jpg?imageSlim)

In order to achieve this you will need to stick to changing properties that can be handled by the compositor alone. Today there are only two properties for which that is true - `transform`s and `opacity`:

为了实现这一点，您需要坚持更改可以由合成器单独处理的属性。今天只有两个属性是正确的——`transform`和`opacity`：

![The properties you can animate without triggering layout or paint.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-properties-can-anima-100ed2c7d26a4.jpg?imageSlim)

The caveat for the use of `transform`s and `opacity` is that the element on which you change these properties should be on _its own compositor layer_. In order to make a layer you must promote the element, which we will cover next.

使用`transform`和`opacity`的注意事项是，改变这些属性的元素应在其自己的合成层上。要创建一个图层，就必须提升元素，这一点我们将在下一节中介绍。

:::info

**Note:** If you're concerned that you may not be able to limit your animations to just those properties, take a look at the [FLIP principle](https://aerotwist.com/blog/flip-your-animations), which may help you remap animations to changes in transforms and opacity from more expensive properties.

注意：如果您担心您可能无法将动画限制在这些属性中，请查看FLIP原则，它可以帮助您将动画重新映射到更昂贵属性的变换和不透明度的变化。

:::

## Promote elements that you plan to animate

As we mentioned in the "[Simplify paint complexity and reduce paint areas](https://web.dev/articles/simplify-paint-complexity-and-reduce-paint-areas)" section, you should promote elements that you plan to animate (within reason, don't overdo it!) to their own layer:

正如我们在“简化绘制复杂性并减少绘制区域”部分中提到的，您应该将计划设置动画的元素（在合理范围内，不要过度！）提升到它们自己的图层：

```scss
.moving-element {
  will-change: transform;
}
```

Or, for older browsers, or those that don't support will-change:

或者，对于较旧的浏览器或那些不支持 will-change 的浏览器：

```scss
.moving-element {
  transform: translateZ(0);
}
```

## Manage layers and avoid layer explosions 管理图层并避免图层爆炸

It's perhaps tempting, then, knowing that layers often help performance, to promote all the elements on your page with something like the following:

那么，知道图层通常有助于提高性能，使用如下所示的内容来提升页面上的所有元素可能很诱人：

```scss
* {
  will-change: transform;
  transform: translateZ(0);
}
```

Which is a roundabout way of saying that you'd like to promote every single element on the page. The problem here is that every layer you create requires memory and management, and that's not free. In fact, on devices with limited memory the impact on performance can far outweigh any benefit of creating a layer. Every layer's textures needs to be uploaded to the GPU, so there are further constraints in terms of bandwidth between CPU and GPU, and memory available for textures on the GPU.

这是一种迂回的方式，表示您希望推广页面上的每个元素。这里的问题是您创建的每一层都需要内存和管理，而且这不是免费的。事实上，在内存有限的设备上，对性能的影响可能远远超过创建层的任何好处。每一层的纹理都需要上传到GPU，因此CPU和GPU之间的带宽以及GPU上可用于纹理的内存方面存在进一步的限制。

:::warning

**Warning :** Do not promote elements unnecessarily.

警告：不要提升不必要的元素。

:::

## Use Chrome DevTools to understand the layers in your app

![The toggle for the paint profiler in Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-toggle-the-paint-pro-0bfd1048bb7de.jpg?imageSlim)

To get an understanding of the layers in your application, and why an element has a layer you must enable the Paint profiler in Chrome DevTools' Timeline:

要了解应用程序中的图层以及元素为何具有图层，您必须在 Chrome DevTools 的时间轴中启用 Paint 分析器：

With this switched on you should take a recording. When the recording has finished you will be able to click individual frames, which is found between the frames-per-second bars and the details:

打开此功能后，您应该进行录音。录制完成后，您将能够单击单个帧，该帧位于每秒帧数条和详细信息之间：

![A frame the developer is interested in profiling.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/a-frame-developer-is-int-195784f471018.jpg?imageSlim)

Clicking on this will provide you with a new option in the details: a layer tab.

单击此按钮将为您提供详细信息中的一个新选项：图层选项卡。

![The layer tab button in Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-layer-tab-button-chr-b74ebc86acad5.jpg?imageSlim)

This option will bring up a new view that allows you to pan, scan and zoom in on all the layers during that frame, along with reasons that each layer was created.

此选项将显示一个新视图，允许您平移、扫描和放大该帧期间的所有图层，以及创建每个图层的原因。

![The layer view in Chrome DevTools.](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/the-layer-view-chrome-de-04740f747ced7.jpg?imageSlim)

Using this view you can track the number of layers you have. If you're spending a lot time in compositing during performance-critical actions like scrolling or transitions (you should aim for around **4-5ms**), you can use the information here to see how many layers you have, why they were created, and from there manage layer counts in your app.

使用此视图，您可以跟踪您拥有的层数。如果您在滚动或过渡等性能关键操作期间花费大量时间进行合成（您的目标应该是 4-5 毫秒左右），您可以使用此处的信息来查看您有多少层、创建它们的原因以及从那里开始计算您的应用程序中的管理层。
