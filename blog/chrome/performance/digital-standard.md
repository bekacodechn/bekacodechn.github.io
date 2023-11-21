# 建议的指标

## 外部script大小

`<script/>`标签引入的外部`js`文件：

由于设备的功能各不相同，因此很难定义单个脚本的大小限制。为了在压缩效率、下载时间和脚本评估时间之间取得适当的平衡，每个脚本 `100 KB` 的限制是一个很好的目标。

## DOM 个数

根据 Lighthouse 的说法，当页面超过 1,400 个节点时，页面的 DOM 大小就过大了。当页面的 DOM 超过 800 个节点时，Lighthouse 将开始抛出警告。

```html
<ul>
  <li>List item one.</li>
  <li>List item two.</li>
  <li>List item three.</li>
</ul>
```

在上面的代码中，有四个 DOM 元素：元素 `<ul>` 及其三个 `<li>` 子元素。

