# 代理模式

1. 保护代理：保护代理用于控制不同权限的对象对目标对象的访问
2. 虚拟代理：把一些开销很大的对象，延迟到真正需要它的时候才去创建

## 虚拟代理实现图片预加载

```js
const myImage = (function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

// 代理对象proxyImage，通过这个代理对象，在图片被真正加载好之前，页面中将出现一张占位的菊花图loading.gif，来提示用户图片正在加载
const proxyImage = (function () {
  const img = new Image();
  img.onload = function () {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImage.setSrc("/local/loading.jpg");
      img.src = src;
    },
  };
})();

proxyImage.setSrc(
  "https://img2.baidu.com/it/u=635812276,1213380653&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
);
```

通过proxyImage间接地访问MyImage。proxyImage控制了客户对MyImage的访问，并且在此过程中加入一些额外的操作，比如在真正的图片加载好之前，先把img节点的src设置为一张本地的loading图片。