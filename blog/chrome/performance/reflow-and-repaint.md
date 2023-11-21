# 网页性能管理详解

`metadata:`

**原标题:** 网页性能管理详解

**链接:** https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html

---

**本文将详细介绍性能问题的出现原因，以及解决方法。**

## 一、网页生成的过程

要理解网页性能为什么不好，就要了解网页是怎么生成的。

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/bg2015091501.png?imageSlim)

网页的生成过程，大致可以分成五步。

1.  HTML代码转化成DOM
2.  CSS代码转化成CSSOM（CSS Object Model）
3.  结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）
4.  生成布局（layout），即将所有渲染树的所有节点进行平面合成
5.  将布局绘制（paint）在屏幕上

这五步里面，第一步到第三步都非常快，耗时的是第四步和第五步。

**"生成布局"（flow）和"绘制"（paint）这两步，合称为"渲染"（render）。**

![](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/bg2015091502.png?imageSlim)

## 二、重排和重绘

**网页生成的时候，至少会渲染一次。用户访问的过程中，还会不断重新渲染。**

以下三种情况，会导致网页重新渲染。

*   修改DOM
*   修改样式表
*   用户事件（比如鼠标悬停、页面滚动、输入框键入文字、改变窗口大小等等）

**重新渲染，就需要重新生成布局和重新绘制。前者叫做"重排"（reflow），后者叫做"重绘"（repaint）。**

需要注意的是，**"重绘"不一定需要"重排"**，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。但是，**"重排"必然导致"重绘"**，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。

## 三、对于性能的影响

重排和重绘会不断触发，这是不可避免的。但是，它们非常耗费资源，是导致网页性能低下的根本原因。

**提高网页性能，就是要降低"重排"和"重绘"的频率和成本，尽量少触发重新渲染。**

前面提到，DOM变动和样式变动，都会触发重新渲染。但是，浏览器已经很智能了，会尽量把所有的变动集中在一起，排成一个队列，然后一次性执行，尽量避免多次重新渲染。

```js
div.style.color = 'blue';
div.style.marginTop = '30px';
```

上面代码中，div元素有两个样式变动，但是浏览器只会触发一次重排和重绘。

如果写得不好，就会触发两次重排和重绘。

```js
div.style.color = 'blue';
var margin = parseInt(div.style.marginTop);
div.style.marginTop = (margin + 10) + 'px';
```

上面代码对div元素设置背景色以后，第二行要求浏览器给出该元素的位置，所以浏览器不得不立即重排。

一般来说，样式的写操作之后，如果有下面这些属性的读操作，都会引发浏览器立即重新渲染。

*   offsetTop/offsetLeft/offsetWidth/offsetHeight
*   scrollTop/scrollLeft/scrollWidth/scrollHeight
*   clientTop/clientLeft/clientWidth/clientHeight
*   getComputedStyle()

所以，从性能角度考虑，尽量不要把读操作和写操作，放在一个语句里面。

```js
// bad
div.style.left = div.offsetLeft + 10 + "px";
div.style.top = div.offsetTop + 10 + "px";

// good
var left = div.offsetLeft;
var top  = div.offsetTop;
div.style.left = left + 10 + "px";
div.style.top = top + 10 + "px";
```

一般的规则是：

*   样式表越简单，重排和重绘就越快。
*   重排和重绘的DOM元素层级越高，成本就越高。
*   table元素的重排和重绘成本，要高于div元素

## 四、提高性能的九个技巧

有一些技巧，可以降低浏览器重新渲染的频率和成本。

**第一条**是上一节说到的，DOM 的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。

**第二条**，如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。

**第三条**，不要一条条地改变样式，而要通过改变class，或者csstext属性，一次性地改变样式。

```js
// bad
var left = 10;
var top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";

// good 
el.className += " theclassname";

// good
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```
    


**第四条**，尽量使用离线DOM，而不是真实的网面DOM，来改变元素样式。比如，操作Document Fragment对象，完成后再把这个对象加入DOM。再比如，使用 cloneNode() 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。

**第五条**，先将元素设为`display: none`（需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。

**第六条**，position属性为`absolute`或`fixed`的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。

**第七条**，只在必要的时候，才将元素的display属性为可见，因为不可见的元素不影响重排和重绘。另外，`visibility : hidden`的元素只对重绘有影响，不影响重排。

**第八条**，使用虚拟DOM的脚本库，比如React等。

**第九条**，使用 window.requestAnimationFrame()、window.requestIdleCallback() 这两个方法调节重新渲染（详见后文）。

## 五、window.requestAnimationFrame()

有一些JavaScript方法可以调节重新渲染，大幅提高网页性能。

其中最重要的，就是 window.requestAnimationFrame() 方法。它可以将某些代码放到下一次重新渲染时执行。

```js
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  element.style.height = (currentHeight * 2) + 'px';
}
elements.forEach(doubleHeight);
```

:::tip
代码解释：

1. 只要读取元素的几何属性，如`element.clientHeight`等，都会执行执行`Recalculate Style`和`Layout`
2. 执行`element.style.height = (currentHeight * 2) + 'px'`会导致布局更改，但浏览器做了优化，不会立即绘制，多次的布局更新会在后期批量进行
3. 因第二步布局已更改，虽然没有绘制，但再次执行`element.clientHeight`时还要再次计算最新的元素高度，所以会进行`Recalculate Style`和`Layout`
4. 因此在`forEach`循环中执行多次重排。

如果只有`element.clientHeight`读取操作，没有`element.style.height = xxx`的写入操作，在`forEach`循环中重排（`Recalculate Style`和`Layout`）只执行一次

:::

上面的代码使用循环操作，将每个元素的高度都增加一倍。可是，每次循环都是，读操作后面跟着一个写操作。这会在短时间内触发大量的重新渲染，显然对于网页性能很不利。

### 读写造成的重排

#### 1. 读写不分离

```html
<body>
  <p class="p">p1</p>
  <p class="p">p2</p>
  <p class="p">p3</p>

  <script>
    function doubleHeight(element, index) {
      performance.mark('double-mark' + index)
      // 读取元素的几何高度，导致必须先重排(Layout)，这样才能获取准确值
      var currentHeight = element.clientHeight;
      // 修改了元素的高度，导致布局更改，虽然不会马上绘制（存到了内存），导致下次有元素的读取几何高度时需要再次重排(Layout)
      element.style.height = (currentHeight * 2) + 'px';
    }

    const elements = Array.from(document.querySelectorAll('.p'))
    elements.forEach(doubleHeight);
  </script>
</body>
```

对3个`p`元素的读写不分离造成了3次重排。

![20231119185316](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231119185316.png)

#### 2. 读取其间只要修改，下次读取就要重排

```html{16}
<body>
  <p class="p">p1</p>
  <p class="p">p2</p>
  <p class="p">p3</p>

  <p id="p2">p</p>
  <script>

    const p2 = document.querySelector('#p2')

    function doubleHeight(element, index) {
      performance.mark('double-mark' + index)

      var currentHeight = element.clientHeight;
      // 并非一定要修改`element`的高度，只要有元素的几何大小改变，下次读取`element.clientHeight`都会造成重排
      p2.style.height = index + 'px'
    }

    const elements = Array.from(document.querySelectorAll('.p'))
    elements.forEach(doubleHeight);

  </script>
</body>
```

**读取其间只要修改，下次读取就要重排。**

![20231119190320](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231119190320.png)

#### 3. 只读取，不写入

```html
<body>
  <p class="p">p1</p>
  <p class="p">p2</p>
  <p class="p">p3</p>
  <script>

    function doubleHeight(element, index) {
      performance.mark('double-mark' + index)
      var currentHeight = element.clientHeight;
    }

    const elements = Array.from(document.querySelectorAll('.p'))
    elements.forEach(doubleHeight);

  </script>
</body>
```
虽然`forEach`循环了3次，但只读取，不写入意味着第一次读取`element.clientHeight`会执行重排，但接下来的循环没必要再重排。

![20231119190904](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231119190904.png)

#### 4. requestAnimationFrame分离读写操作

我们可以使用`window.requestAnimationFrame()`，让读操作和写操作分离，把所有的写操作放到下一次重新渲染。

```html
<body>
  <p class="p">p1</p>
  <p class="p">p2</p>
  <p class="p">p3</p>
  <script>

    function doubleHeight(element) {
      var currentHeight = element.clientHeight;
      window.requestAnimationFrame(function () {
        element.style.height = (currentHeight * 2) + 'px';
      });
    }
    const elements = Array.from(document.querySelectorAll('.p'))
    elements.forEach(doubleHeight);

  </script>
</body>
```

![20231119191413](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231119191413.png)


页面滚动事件（scroll）的监听函数，就很适合用 window.requestAnimationFrame() ，推迟到下一次重新渲染。

```js
$(window).on('scroll', function() {
  window.requestAnimationFrame(scrollHandler);
});
```
     

当然，最适用的场合还是网页动画。下面是一个旋转动画的例子，元素每一帧旋转1度。

```js
var rAF = window.requestAnimationFrame;

var degrees = 0;
function update() {
  div.style.transform = "rotate(" + degrees + "deg)";
  console.log('updated to degrees ' + degrees);
  degrees = degrees + 1;
  rAF(update);
}
rAF(update);
```
     

## 六、window.requestIdleCallback()

还有一个函数[window.requestIdleCallback()](https://w3c.github.io/requestidlecallback/)，也可以用来调节重新渲染。

它指定只有当一帧的末尾有空闲时间，才会执行回调函数。

```js
requestIdleCallback(fn);
```
     

上面代码中，只有当前帧的运行时间小于16.66ms时，函数fn才会执行。否则，就推迟到下一帧，如果下一帧也没有空闲时间，就推迟到下下一帧，以此类推。

它还可以接受第二个参数，表示指定的毫秒数。如果在指定 的这段时间之内，每一帧都没有空闲时间，那么函数fn将会强制执行。

```js
requestIdleCallback(fn, 5000);
```

上面的代码表示，函数fn最迟会在5000毫秒之后执行。

函数 fn 可以接受一个 deadline 对象作为参数。

```js
requestIdleCallback(function someHeavyComputation(deadline) {
  while(deadline.timeRemaining() > 0) {
    doWorkIfNeeded();
  }

  if(thereIsMoreWorkToDo) {
    requestIdleCallback(someHeavyComputation);
  }
});
```
     

上面代码中，回调函数 someHeavyComputation 的参数是一个 deadline 对象。

deadline对象有一个方法和一个属性：timeRemaining() 和 didTimeout。

**（1）timeRemaining() 方法**

timeRemaining() 方法返回当前帧还剩余的毫秒。这个方法只能读，不能写，而且会动态更新。因此可以不断检查这个属性，如果还有剩余时间的话，就不断执行某些任务。一旦这个属性等于0，就把任务分配到下一轮`requestIdleCallback`。

前面的示例代码之中，只要当前帧还有空闲时间，就不断调用doWorkIfNeeded方法。一旦没有空闲时间，但是任务还没有全执行，就分配到下一轮`requestIdleCallback`。

**（2）didTimeout属性**

deadline对象的 `didTimeout` 属性会返回一个布尔值，表示指定的时间是否过期。这意味着，如果回调函数由于指定时间过期而触发，那么你会得到两个结果。

*   timeRemaining方法返回0
*   didTimeout 属性等于 true

因此，如果回调函数执行了，无非是两种原因：当前帧有空闲时间，或者指定时间到了。

```js
function myNonEssentialWork (deadline) {
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0)
    doWorkIfNeeded();

  if (tasks.length > 0)
    requestIdleCallback(myNonEssentialWork);
}

requestIdleCallback(myNonEssentialWork, 5000);
```
     

上面代码确保了，doWorkIfNeeded 函数一定会在将来某个比较空闲的时间（或者在指定时间过期后）得到反复执行。

requestIdleCallback 是一个很新的函数，刚刚引入标准，目前只有Chrome支持，不过其他浏览器可以用[垫片库](https://gist.github.com/paullewis/55efe5d6f05434a96c36)。

## 七、参考链接

*   Domenico De Felice, [How browsers work](http://domenicodefelice.blogspot.sg/2015/08/how-browsers-work.html)
*   Stoyan Stefanov, [Rendering: repaint, reflow/relayout, restyle](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
*   Addy Osmani, [Improving Web App Performance With the Chrome DevTools Timeline and Profiles](http://addyosmani.com/blog/performance-optimisation-with-timeline-profiles/)
*   Tom Wiltzius, [Jank Busting for Better Rendering Performance](http://www.html5rocks.com/en/tutorials/speed/rendering/)
*   Paul Lewis, [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/27/using-requestidlecallback?hl=en)