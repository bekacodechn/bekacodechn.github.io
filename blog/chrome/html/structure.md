## 文档结构

`metadata:`

**链接:** https://web.dev/learn/html/document-structure?hl=zh-cn

---

### \<!DOCTYPE html>

`<!DOCTYPE html>`不是`HTML`元素，而是一种名为“doctype”的特殊节点。DOCTYPE 告知浏览器使用标准模式。如果省略此参数，浏览器将使用不同的呈现模式，称为[怪异模式](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。包含 DOCTYPE 有助于防止怪异模式。


### `<html>`
`<html>` 元素是 HTML 文档的根元素。它是 `<head>` 和 `<body>` 的父级，包含 HTML 文档中除 DOCTYPE 以外的所有内容。

### Content language 内容语言

添加到 <html> 标记的 lang 语言属性用于定义文档的主要语言。lang 属性的值是两个或三个字母的 ISO 语言代码，后跟区域。区域是可选项，但建议设置，因为不同区域的语言可能差别很大。例如，加拿大 (fr-CA) 和布基纳法索 (fr-BF) 的法语就大不相同。`此语言声明可让屏幕阅读器、搜索引擎和翻译服务了解文档语言`。

lang 属性不限于 <html> 标记。如果网页中的文本所用的语言与主文档的语言不同，则应使用 lang 属性来标识文档中主要语言的例外情况。就像包含在头中一样，正文中的 lang 属性也没有视觉效果。它只会添加语义，让辅助技术和自动化服务能够了解受影响内容的语言。

除了设置文档的语言以及该基本语言的例外情况之外，此属性还可用于 CSS 选择器。可以使用属性和语言选择器 [`[lang|="fr"]`](https://developer.mozilla.org/docs/Web/CSS/Attribute_selectors#attrvalue_3) 和 [`:lang(fr)`](https://developer.mozilla.org/docs/Web/CSS/:lang) 来定位 `<span lang="fr-fr">Ceci n'est pas une pipe.</span>`。

### \<head>
```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
  </head>
  <body>
  </body>
</html>
```

\<head>（即文档元数据标头）包含网站或应用的所有元数据。正文包含可见内容。

## `<head>` 中的必需组件

文档元数据（包括文档标题、字符集、视口设置、说明、基准网址、样式表链接和图标）位于 `<head>` 元素中。虽然您可能并不需要全部这些功能，但**一定要添加字符集、标题和视口设置**。

### 字符编码

`<head>` 中的第一个元素应该是 `charset` 字符编码声明。它位于标题之前，以确保浏览器可以呈现标题中的字符以及文档其余部分的所有字符。

大多数浏览器中的[默认编码](https://html.spec.whatwg.org/multipage/parsing.html#documentEncoding)为 `windows-1252`，具体取决于语言区域。不过，您应该使用 [`UTF-8`](https://developer.mozilla.org/docs/Glossary/UTF-8)，因为它可以对所有字符进行 1 到 4 字节编码，甚至包括您甚至不知道存在的字符。此外，它也是 HTML5 所需的编码类型。

如需将字符编码设置为 UTF-8，请添加以下代码：
```html
  <meta charset="utf-8" />
```

通过声明 `UTF-8`（不区分大小写），您甚至可以在标题中包含表情符号（但请勿执行此操作）。

字符编码会继承到文档中的所有内容，包括 `<style>` 和 `<script>`。这个小声明意味着您可以在类名称和 selectorAPI 中添加表情符号（再次说明，请勿添加）。如果您[使用表情符号](https://readabilityguidelines.co.uk/images/emojis/)，请确保使用它们可提高易用性，同时不会影响无障碍功能。

### 文档标题

您的首页和其他所有页面都应使用独特的标题。文档标题的内容（起始和结束标记 `<title>` 之间的文本）会显示在**浏览器标签页、打开的窗口列表、历史记录、搜索结果以及社交媒体卡片中**（除非使用 [`<meta>` 标记](https://web.dev/learn/html/metadata?hl=zh-cn)重新定义）。

```html
<title>Machine Learning Workshop</title>
```

### 视口元数据
另一个必不可少的元标记是 viewport 元标记，它可帮助网站响应速度，无论视口宽度如何，内容在默认情况下都能呈现良好。
到目前为止，我们的 HTML 文件的大纲如下：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Machine Learning Workshop</title>
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>

  </body>
</html>
```

## 其他 `<head>` 内容

### CSS

可以通过以下三种方式添加 CSS：<link>、<style> 和 style 属性。

`<link>` 标记是添加样式表的首选方法。关联一个或几个外部样式表对开发者体验和网站性能都有好处：您可以在一个位置维护 CSS，而不是将其分散到所有地方，并且浏览器可以缓存外部文件，这意味着您无需在每次进行网页导航时都重新下载。

语法为 `<link rel="stylesheet" href="styles.css">`，其中 styles.css 是您的样式表的网址。您经常会看到 type="text/css"。不需要！如果您要添加使用 CSS 以外的其他语言编写的样式，则需要 type，但由于没有任何其他类型的属性，因此不需要此属性。rel 属性定义了关系：在本例中为 stylesheet。如果省略此值，系统不会关联您的 CSS。

很快就会发现其他一些 rel 值，不过我们先来讨论添加 CSS 的其他方式。

### \<link> 元素的其他用途

link 元素用于在 HTML 文档与外部资源之间创建关系。部分资源可供下载，其他资源仅供参考。关系类型由 `rel` 属性的值定义。目前，[`rel` 属性有 25 个可用值](https://html.spec.whatwg.org/multipage/links.html#linkTypes)，这些值可与 `<link>`、`<a>` 和 `<area>` 或 `<form>` 一起使用，但有几个值可与所有值一起使用。

#### 网站图标

结合使用 `<link>` 标记和 `rel="icon"` 属性/值对，以标识要用于文档的网站图标。网站图标是显示在浏览器标签页上的非常小的图标，一般位于文档标题的左侧。当您打开的标签页数量过多时，标签页会缩小，且标题可能会完全消失，但图标始终可见。大多数网站图标都是公司或应用的徽标。

如果您没有声明网站图标，浏览器会在顶级目录（网站的根文件夹）中查找名为 `favicon.ico` 的文件。借助 `<link>`，您可以使用不同的文件名和位置：

```html
<link rel="icon" sizes="16x16 32x32 48x48" type="image/png" href="/images/mlwicon.png" />
```

上述代码指出“在适合使用 16px、32px 或 48px 的情况下，使用 `mlwicon.png` 作为图标”。尺寸属性接受可缩放图标的 `any` 值或以空格分隔的方形 `widthXheight` 值列表；如果宽度值和高度值在相应几何图形序列中是 16、32、48 或更大的值，则系统会省略像素单位，且 X 不区分大小写。

```html
    <link rel="apple-touch-icon" sizes="180x180" href="/images/mlwicon.png" /><link rel="mask-icon" href="/images/mlwicon.svg" color="#226DAA" />
```

Safari 浏览器有两种特殊的非标准图标：`apple-touch-icon` 用于 iOS 设备，`mask-icon` 用于 macOS 上的固定标签页。仅当用户将网站添加到主屏幕时，系统才会应用 `apple-touch-icon`：您可以为不同的设备指定多个具有不同 `sizes` 的图标。仅当用户在桌面版 Safari 中固定标签页时才会使用 `mask-icon`：图标本身应该是单色 SVG，并且 `color` 属性会使用所需的颜色填充图标。

### 脚本

```html
<script>
  document.getElementById('switch').addEventListener('click', function() {
    document.body.classList.toggle('black');
  });
</script>
```
我们会在 `<body>` 的底部添加 `<script>`，而不是在 `<head>` 中添加。因为我们不是基于 [DOMContentLoad 事件](https://developer.mozilla.org/docs/Web/API/Document/DOMContentLoaded_event)。主要原因在于，JavaScript 不仅[阻止呈现](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/?hl=zh-cn)，而且会在下载脚本时停止下载所有素材资源，并在 JavaScript 执行完毕后继续下载其他素材资源。因此，您经常会在文档末尾（而不是标头）发现 JavaScript 请求。



有两个属性可以减少 JavaScript 下载和执行时出现的阻塞性：`defer` 和 `async`。使用 `defer` 时，系统不会在下载期间阻止 HTML 呈现，并且 JavaScript 仅在文档呈现完毕后才执行。使用 `async` 时，下载期间也不会阻止呈现，但一旦脚本下载完成后，呈现会在执行 JavaScript 时暂停。

![20231106190348](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231106190348.png)

