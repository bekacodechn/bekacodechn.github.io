import{jsx as n,jsxs as r,Fragment as s}from"react/jsx-runtime";const d=void 0,c=[{id:"prerequisites\u5148\u51B3\u6761\u4EF6",text:"Prerequisites\xA0\u5148\u51B3\u6761\u4EF6",depth:2},{id:"step-1-open-the-network-tab",text:"Step 1: Open the Network Tab",depth:2},{id:"step-2-navigate-to-your-web-app",text:"Step 2: Navigate to your Web App",depth:2},{id:"step-3-enable-large-request-rows",text:"Step 3: Enable Large Request Rows",depth:2},{id:"step-4-adjust-your-resource-filters",text:"Step 4: Adjust your Resource Filters",depth:2},{id:"step-5-add-a-headers-filters",text:"Step 5: Add a Headers Filters",depth:2},{id:"content-encoding-header\u5185\u5BB9\u7F16\u7801\u6807\u5934",text:"Content-Encoding Header\xA0\u5185\u5BB9\u7F16\u7801\u6807\u5934",depth:3},{id:"filtering-the-ui",text:"Filtering the UI",depth:3},{id:"step-6-invert",text:"Step 6: Invert",depth:2},{id:"step-7-sort-by-size",text:"Step 7: Sort by Size",depth:2}],l="\u8BC6\u522B Web \u5E94\u7528\u4E2D\u7684\u672A\u538B\u7F29\u8D44\u6E90";function t(i){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",ul:"ul",li:"li",em:"em",div:"div",h3:"h3",button:"button",span:"span",pre:"pre"},i.components);return r(s,{children:[r(e.h1,{id:"\u8BC6\u522B-web-\u5E94\u7528\u4E2D\u7684\u672A\u538B\u7F29\u8D44\u6E90",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BC6\u522B-web-\u5E94\u7528\u4E2D\u7684\u672A\u538B\u7F29\u8D44\u6E90",children:"#"}),"\u8BC6\u522B Web \u5E94\u7528\u4E2D\u7684\u672A\u538B\u7F29\u8D44\u6E90"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,r(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Identifying Uncompressed Resources in your Web App"]}),`
`,r(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/validating-compression/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/validating-compression/"})]}),`
`,n(e.hr,{}),`
`,r(e.p,{children:["\u5C06 gzip \u6216 brotli \u7B49\u538B\u7F29\u7B97\u6CD5\u5E94\u7528\u4E8E\u901A\u8FC7\u7F51\u7EDC",n(e.a,{href:"/chrome/performance/tips/resource-size-vs-transfer-size",children:"\u4F20\u8F93\u7684\u8D44\u6E90"}),"\u5BF9\u4E8E\u786E\u4FDD\u6700\u4F73\u4F20\u8F93\u5927\u5C0F\u548C\u7F51\u7EDC\u5E26\u5BBD\u5229\u7528\u7387\u81F3\u5173\u91CD\u8981\u3002"]}),`
`,n(e.p,{children:"\u8BB8\u591A\u751F\u4EA7 Web \u670D\u52A1\u5668\u548C CDN \u4F1A\u81EA\u52A8\u4E3A\u60A8\u6267\u884C\u6B64\u64CD\u4F5C\uFF0C\u4F46\u503C\u5F97\u786E\u4FDD\u9875\u9762\u4E0A\u7684\u6240\u6709\u53EF\u538B\u7F29\u8D44\u4EA7\u786E\u5B9E\u5728\u5E94\u7528\u9002\u5F53\u7684\u538B\u7F29\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u4EA4\u4ED8\u3002"}),`
`,r(e.h2,{id:"prerequisites\u5148\u51B3\u6761\u4EF6",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisites\u5148\u51B3\u6761\u4EF6",children:"#"}),"Prerequisites\xA0\u5148\u51B3\u6761\u4EF6"]}),`
`,n(e.p,{children:"\u60A8\u5E94\u8BE5\u719F\u6089 Chromium \u7F51\u7EDC\u6807\u7B7E\u9875\u3002"}),`
`,r(e.h2,{id:"step-1-open-the-network-tab",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-1-open-the-network-tab",children:"#"}),"Step 1: Open the Network Tab"]}),`
`,n(e.p,{children:"\u60A8\u9700\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u901A\u8FC7 F12 \u6253\u5F00\u201C\u7F51\u7EDC\u201D\u9009\u9879\u5361\uFF0C\u7136\u540E\u9009\u62E9\u201C\u7F51\u7EDC\u201D\u9009\u9879\u5361\u3002"}),`
`,n(e.p,{children:"\u786E\u4FDD\u60A8\u5DF2\u9009\u62E9\u201C\u7981\u7528\u7F13\u5B58\u201D\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162811.png",alt:"20231109162811"})}),`
`,r(e.h2,{id:"step-2-navigate-to-your-web-app",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-2-navigate-to-your-web-app",children:"#"}),"Step 2: Navigate to your Web App"]}),`
`,n(e.p,{children:"DevTools \u7F51\u7EDC\u9009\u9879\u5361\u5E94\u81EA\u52A8\u8BB0\u5F55\u7F51\u7EDC\u6D41\u91CF\u3002\u7EE7\u7EED\u5237\u65B0\u6216\u5BFC\u822A\u5230\u201C\u6D4F\u89C8\u5668\u201D\u9009\u9879\u5361\u4E2D\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002"}),`
`,r(e.h2,{id:"step-3-enable-large-request-rows",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-3-enable-large-request-rows",children:"#"}),"Step 3: Enable Large Request Rows"]}),`
`,n(e.p,{children:"\u9009\u62E9\u201C\u8BBE\u7F6E\u9F7F\u8F6E\u201D\uFF0C\u7136\u540E\u9009\u62E9\u201C\u4F7F\u7528\u5927\u578B\u8BF7\u6C42\u884C\u201D\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162851.png",alt:"20231109162851"})}),`
`,n(e.p,{children:"\u8FD9\u5C06\u6709\u52A9\u4E8E\u4EE5\u540E\u5FEB\u901F\u6BD4\u8F83\u8D44\u6E90\u548C\u4F20\u8F93\u5927\u5C0F\u3002"}),`
`,r(e.h2,{id:"step-4-adjust-your-resource-filters",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-4-adjust-your-resource-filters",children:"#"}),"Step 4: Adjust your Resource Filters"]}),`
`,n(e.p,{children:"\u4F7F\u7528 Ctrl + \u5DE6\u952E\u5355\u51FB\u9009\u62E9\u4EE5\u4E0B\u53EF\u538B\u7F29\u8D44\u6E90\uFF1A"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:n(e.em,{children:"Fetch/XHR"})}),`
`,n(e.li,{children:n(e.em,{children:"CSS"})}),`
`,n(e.li,{children:n(e.em,{children:"JS"})}),`
`,n(e.li,{children:n(e.em,{children:"Doc"})}),`
`]}),`
`,n(e.p,{children:"\u6211\u6545\u610F\u6392\u9664\u56FE\u50CF\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u662F\u4E8C\u8FDB\u5236\u8D44\u4EA7\uFF0C\u800C gzip \u548C brotli \u7B49\u538B\u7F29\u7B97\u6CD5\u4E0D\u9002\u7528\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162957.png",alt:"20231109162957"})}),`
`,r(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),n(e.div,{className:"island-directive-content",children:r(e.p,{children:["\u6CE8\u610F\uFF1ASVG \u56FE\u50CF\u662F\u57FA\u4E8E\u6587\u672C\u7684\uFF0C\u53EF\u80FD\u4F1A\u53D7\u76CA\u4E8E\u538B\u7F29\u3002\u5982\u679C\u60A8\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528 SVG\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u9009\u4E2D\u201C\u56FE\u50CF\u201D\uFF0C\u4F46\u5E94\u5FFD\u7565\u5206\u6790\u4E2D\u7684\u4E8C\u8FDB\u5236\u56FE\u50CF\u683C\u5F0F\uFF08\u4F8B\u5982\xA0",n(e.code,{children:".jpeg"}),"\xA0\u6216\xA0",n(e.code,{children:".png"}),"\xA0\u56FE\u50CF\uFF09"]})})]}),`
`,r(e.h2,{id:"step-5-add-a-headers-filters",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-5-add-a-headers-filters",children:"#"}),"Step 5: Add a Headers Filters"]}),`
`,r(e.h3,{id:"content-encoding-header\u5185\u5BB9\u7F16\u7801\u6807\u5934",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#content-encoding-header\u5185\u5BB9\u7F16\u7801\u6807\u5934",children:"#"}),"Content-Encoding Header\xA0\u5185\u5BB9\u7F16\u7801\u6807\u5934"]}),`
`,n(e.p,{children:"\u5982\u679C\u8D44\u6E90\u5E94\u7528\u4E86\u7528\u4E8E\u7F51\u7EDC\u4F20\u8F93\u7684\u538B\u7F29\u7B97\u6CD5\uFF0C\u5219\u670D\u52A1\u5668\u5C06\u5728\u54CD\u5E94\u4E2D\u5305\u542B Content-Encoding \u6807\u5934\u4EE5\u53CA\u6307\u5B9A\u7684\u7F16\u7801\u7B97\u6CD5\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u4F7F\u7528 gzip \u538B\u7F29\u7684\u8D44\u6E90\u5728\u5176\u54CD\u5E94\u4E2D\u5C06\u5177\u6709\u4EE5\u4E0B\u6807\u5934\uFF1A"}),`
`,r(e.div,{className:"language-json line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  Content-Encoding: gzip"})}),`
`,n(e.span,{className:"line"})]})}),n(e.div,{className:"line-numbers-wrapper",children:n(e.span,{className:"line-number",children:"1"})})]}),`
`,r(e.h3,{id:"filtering-the-ui",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#filtering-the-ui",children:"#"}),"Filtering the UI"]}),`
`,n(e.p,{children:"\u5728\u7B5B\u9009\u5668\u6846\u4E2D\uFF0C\u5E94\u7528\u4EE5\u4E0B\u6587\u672C\uFF1A"}),`
`,r(e.div,{className:"language-json line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  has-response-header:content-encoding"})}),`
`,n(e.span,{className:"line"})]})}),n(e.div,{className:"line-numbers-wrapper",children:n(e.span,{className:"line-number",children:"1"})})]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163201.png",alt:"20231109163201"})}),`
`,n(e.p,{children:"\u8FD9\u4F1A\u5C06\u6240\u6709\u8BF7\u6C42\u884C\u7B5B\u9009\u5230\u5E94\u7528\u4E86\u538B\u7F29\u7B97\u6CD5\u7684\u8D44\u6E90\u3002"}),`
`,r(e.h2,{id:"step-6-invert",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-6-invert",children:"#"}),"Step 6: Invert"]}),`
`,n(e.p,{children:"\u63A5\u4E0B\u6765\uFF0C\u68C0\u67E5 \u53CD\u8F6C \u9009\u9879\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163235.png",alt:"20231109163235"})}),`
`,n(e.p,{children:"\u8FD9\u4F1A\u5C06\u6240\u6709\u8BF7\u6C42\u884C\u7B5B\u9009\u5230\u672A\u5E94\u7528\u538B\u7F29\u7B97\u6CD5\u7684\u8D44\u6E90\u3002"}),`
`,r(e.h2,{id:"step-7-sort-by-size",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-7-sort-by-size",children:"#"}),"Step 7: Sort by Size"]}),`
`,n(e.p,{children:"\u5355\u51FB\u201C\u5927\u5C0F\u201D\u8868\u6807\u9898\uFF0C\u4F7F\u5176\u6309\u964D\u5E8F\u6392\u5E8F\u3002\u8FD9\u5C06\u7A81\u51FA\u663E\u793A Web \u5E94\u7528\u4E2D\u6700\u5927\u7684\u672A\u538B\u7F29\u8D44\u6E90\u3002"}),`
`,n(e.p,{children:"\u8BF7\u6CE8\u610F\uFF0C\u5BF9\u4E8E\u672A\u538B\u7F29\u7684\u8D44\u6E90\uFF0C\u201C\u8D44\u6E90\u5927\u5C0F\u201D\u548C\u201C\u4F20\u8F93\u5927\u5C0F\u201D\u51E0\u4E4E\u76F8\u7B49\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163319.png",alt:"20231109163319"})}),`
`,n(e.p,{children:"\u67E5\u627E\u672A\u5E94\u7528\u538B\u7F29\u7684\u5927\u578B\u8D44\u4EA7\uFF08\u5927\u4E8E\u51E0 kB \u5DE6\u53F3\uFF09\uFF0C\u5E76\u8DDF\u8E2A\u8BE5\u670D\u52A1\u5668\u6216 CDN \u7684\u538B\u7F29\u8BBE\u7F6E\uFF0C\u4EE5\u786E\u4FDD\u6B63\u786E\u538B\u7F29\u8D44\u6E90\uFF01"})]})}function o(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(t,i)})):t(i)}const h="Invalid Date",p=`# \u8BC6\u522B Web \u5E94\u7528\u4E2D\u7684\u672A\u538B\u7F29\u8D44\u6E90

\`metadata:\`

**\u539F\u6807\u9898:** Identifying Uncompressed Resources in your Web App

**\u94FE\u63A5:** https://webperf.tips/tip/validating-compression/

---

\u5C06 gzip \u6216 brotli \u7B49\u538B\u7F29\u7B97\u6CD5\u5E94\u7528\u4E8E\u901A\u8FC7\u7F51\u7EDC[\u4F20\u8F93\u7684\u8D44\u6E90](chrome/performance/tips/resource-size-vs-transfer-size)\u5BF9\u4E8E\u786E\u4FDD\u6700\u4F73\u4F20\u8F93\u5927\u5C0F\u548C\u7F51\u7EDC\u5E26\u5BBD\u5229\u7528\u7387\u81F3\u5173\u91CD\u8981\u3002

\u8BB8\u591A\u751F\u4EA7 Web \u670D\u52A1\u5668\u548C CDN \u4F1A\u81EA\u52A8\u4E3A\u60A8\u6267\u884C\u6B64\u64CD\u4F5C\uFF0C\u4F46\u503C\u5F97\u786E\u4FDD\u9875\u9762\u4E0A\u7684\u6240\u6709\u53EF\u538B\u7F29\u8D44\u4EA7\u786E\u5B9E\u5728\u5E94\u7528\u9002\u5F53\u7684\u538B\u7F29\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u4EA4\u4ED8\u3002

## Prerequisites\xA0\u5148\u51B3\u6761\u4EF6

\u60A8\u5E94\u8BE5\u719F\u6089 Chromium \u7F51\u7EDC\u6807\u7B7E\u9875\u3002

## Step 1: Open the Network Tab

\u60A8\u9700\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u901A\u8FC7 F12 \u6253\u5F00\u201C\u7F51\u7EDC\u201D\u9009\u9879\u5361\uFF0C\u7136\u540E\u9009\u62E9\u201C\u7F51\u7EDC\u201D\u9009\u9879\u5361\u3002

\u786E\u4FDD\u60A8\u5DF2\u9009\u62E9\u201C\u7981\u7528\u7F13\u5B58\u201D\uFF1A

![20231109162811](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162811.png)

## Step 2: Navigate to your Web App

DevTools \u7F51\u7EDC\u9009\u9879\u5361\u5E94\u81EA\u52A8\u8BB0\u5F55\u7F51\u7EDC\u6D41\u91CF\u3002\u7EE7\u7EED\u5237\u65B0\u6216\u5BFC\u822A\u5230\u201C\u6D4F\u89C8\u5668\u201D\u9009\u9879\u5361\u4E2D\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002

## Step 3: Enable Large Request Rows

\u9009\u62E9\u201C\u8BBE\u7F6E\u9F7F\u8F6E\u201D\uFF0C\u7136\u540E\u9009\u62E9\u201C\u4F7F\u7528\u5927\u578B\u8BF7\u6C42\u884C\u201D\uFF1A

![20231109162851](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162851.png)

\u8FD9\u5C06\u6709\u52A9\u4E8E\u4EE5\u540E\u5FEB\u901F\u6BD4\u8F83\u8D44\u6E90\u548C\u4F20\u8F93\u5927\u5C0F\u3002

## Step 4: Adjust your Resource Filters

\u4F7F\u7528 Ctrl + \u5DE6\u952E\u5355\u51FB\u9009\u62E9\u4EE5\u4E0B\u53EF\u538B\u7F29\u8D44\u6E90\uFF1A

*   *Fetch/XHR*
*   *CSS*
*   *JS*
*   *Doc*

\u6211\u6545\u610F\u6392\u9664\u56FE\u50CF\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u662F\u4E8C\u8FDB\u5236\u8D44\u4EA7\uFF0C\u800C gzip \u548C brotli \u7B49\u538B\u7F29\u7B97\u6CD5\u4E0D\u9002\u7528\u3002

![20231109162957](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109162957.png)

:::info
\u6CE8\u610F\uFF1ASVG \u56FE\u50CF\u662F\u57FA\u4E8E\u6587\u672C\u7684\uFF0C\u53EF\u80FD\u4F1A\u53D7\u76CA\u4E8E\u538B\u7F29\u3002\u5982\u679C\u60A8\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528 SVG\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u9009\u4E2D\u201C\u56FE\u50CF\u201D\uFF0C\u4F46\u5E94\u5FFD\u7565\u5206\u6790\u4E2D\u7684\u4E8C\u8FDB\u5236\u56FE\u50CF\u683C\u5F0F\uFF08\u4F8B\u5982\xA0\`.jpeg\`\xA0\u6216\xA0\`.png\`\xA0\u56FE\u50CF\uFF09
:::

## Step 5: Add a Headers Filters

### Content-Encoding Header\xA0\u5185\u5BB9\u7F16\u7801\u6807\u5934

\u5982\u679C\u8D44\u6E90\u5E94\u7528\u4E86\u7528\u4E8E\u7F51\u7EDC\u4F20\u8F93\u7684\u538B\u7F29\u7B97\u6CD5\uFF0C\u5219\u670D\u52A1\u5668\u5C06\u5728\u54CD\u5E94\u4E2D\u5305\u542B Content-Encoding \u6807\u5934\u4EE5\u53CA\u6307\u5B9A\u7684\u7F16\u7801\u7B97\u6CD5\u3002

\u4F8B\u5982\uFF0C\u4F7F\u7528 gzip \u538B\u7F29\u7684\u8D44\u6E90\u5728\u5176\u54CD\u5E94\u4E2D\u5C06\u5177\u6709\u4EE5\u4E0B\u6807\u5934\uFF1A

\`\`\`json
  Content-Encoding: gzip
\`\`\`

### Filtering the UI

\u5728\u7B5B\u9009\u5668\u6846\u4E2D\uFF0C\u5E94\u7528\u4EE5\u4E0B\u6587\u672C\uFF1A

\`\`\`json
  has-response-header:content-encoding
\`\`\`

![20231109163201](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163201.png)

\u8FD9\u4F1A\u5C06\u6240\u6709\u8BF7\u6C42\u884C\u7B5B\u9009\u5230\u5E94\u7528\u4E86\u538B\u7F29\u7B97\u6CD5\u7684\u8D44\u6E90\u3002

## Step 6: Invert

\u63A5\u4E0B\u6765\uFF0C\u68C0\u67E5 \u53CD\u8F6C \u9009\u9879\uFF1A

![20231109163235](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163235.png)

\u8FD9\u4F1A\u5C06\u6240\u6709\u8BF7\u6C42\u884C\u7B5B\u9009\u5230\u672A\u5E94\u7528\u538B\u7F29\u7B97\u6CD5\u7684\u8D44\u6E90\u3002

## Step 7: Sort by Size

\u5355\u51FB\u201C\u5927\u5C0F\u201D\u8868\u6807\u9898\uFF0C\u4F7F\u5176\u6309\u964D\u5E8F\u6392\u5E8F\u3002\u8FD9\u5C06\u7A81\u51FA\u663E\u793A Web \u5E94\u7528\u4E2D\u6700\u5927\u7684\u672A\u538B\u7F29\u8D44\u6E90\u3002

\u8BF7\u6CE8\u610F\uFF0C\u5BF9\u4E8E\u672A\u538B\u7F29\u7684\u8D44\u6E90\uFF0C\u201C\u8D44\u6E90\u5927\u5C0F\u201D\u548C\u201C\u4F20\u8F93\u5927\u5C0F\u201D\u51E0\u4E4E\u76F8\u7B49\uFF1A

![20231109163319](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109163319.png)

\u67E5\u627E\u672A\u5E94\u7528\u538B\u7F29\u7684\u5927\u578B\u8D44\u4EA7\uFF08\u5927\u4E8E\u51E0 kB \u5DE6\u53F3\uFF09\uFF0C\u5E76\u8DDF\u8E2A\u8BE5\u670D\u52A1\u5668\u6216 CDN \u7684\u538B\u7F29\u8BBE\u7F6E\uFF0C\u4EE5\u786E\u4FDD\u6B63\u786E\u538B\u7F29\u8D44\u6E90\uFF01








































`;export{p as content,o as default,d as frontmatter,h as lastUpdatedTime,l as title,c as toc};
