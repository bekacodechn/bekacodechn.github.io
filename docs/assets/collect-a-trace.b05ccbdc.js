import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";const o=void 0,l=[{id:"what-is-a-trace",text:"What is a Trace?",depth:2},{id:"opening-the-profiler\u6253\u5F00\u63A2\u67E5\u5668",text:"Opening the Profiler\xA0\u6253\u5F00\u63A2\u67E5\u5668",depth:2},{id:"start-collecting-a-trace\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A",text:"Start Collecting a Trace\xA0\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A",depth:2},{id:"capture-your-scenario\u6355\u83B7\u65B9\u6848",text:"Capture your Scenario\xA0\u6355\u83B7\u65B9\u6848",depth:2},{id:"interactivity-scenarios\u4EA4\u4E92\u65B9\u6848",text:"Interactivity Scenarios\xA0\u4EA4\u4E92\u65B9\u6848",depth:3},{id:"page-loads\u9875\u9762\u52A0\u8F7D",text:"Page Loads\xA0\u9875\u9762\u52A0\u8F7D",depth:3},{id:"end-recording\u7ED3\u675F\u5F55\u5236",text:"End Recording\xA0\u7ED3\u675F\u5F55\u5236",depth:2},{id:"exporting-a-trace\u5BFC\u51FA\u8DDF\u8E2A",text:"Exporting a Trace\xA0\u5BFC\u51FA\u8DDF\u8E2A",depth:2},{id:"importing-a-trace\u5BFC\u5165\u8DDF\u8E2A",text:"Importing a Trace\xA0\u5BFC\u5165\u8DDF\u8E2A",depth:2}],d="\u5982\u4F55\u6536\u96C6 Web \u6027\u80FD\u8DDF\u8E2A";function a(i){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",div:"div",img:"img",h3:"h3",ul:"ul",li:"li",br:"br",ol:"ol"},i.components);return r(t,{children:[r(n.h1,{id:"\u5982\u4F55\u6536\u96C6-web-\u6027\u80FD\u8DDF\u8E2A",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5982\u4F55\u6536\u96C6-web-\u6027\u80FD\u8DDF\u8E2A",children:"#"}),"\u5982\u4F55\u6536\u96C6 Web \u6027\u80FD\u8DDF\u8E2A"]}),`
`,e(n.p,{children:e(n.code,{children:"metadata:"})}),`
`,r(n.p,{children:[e(n.strong,{children:"\u539F\u6807\u9898:"})," How to Collect a Web Performance Trace"]}),`
`,r(n.p,{children:[e(n.strong,{children:"\u94FE\u63A5:"})," ",e(n.a,{href:"https://webperf.tips/tip/collect-a-trace/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/collect-a-trace/"})]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"\u6BCF\u5F53\u6211\u4E0E\u6709\u5174\u8DA3\u63D0\u9AD8\u5176 Web \u4EA7\u54C1\u6027\u80FD\u7684\u56E2\u961F\u5408\u4F5C\u65F6\uFF0C\u6211\u95EE\u7684\u7B2C\u4E00\u4EF6\u4E8B\u5C31\u662F\u60A8\u662F\u5426\u5206\u6790\u4E86\u60A8\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF1F"}),`
`,e(n.p,{children:"\u6536\u96C6\u6027\u80FD\u8DDF\u8E2A\u662F\u4E86\u89E3 Web \u5E94\u7528\u5728\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u65B9\u5F0F\u7684\u6700\u4F73\u65B9\u5F0F\u4E4B\u4E00\uFF0C\u6709\u52A9\u4E8E\u8BC6\u522B\u6548\u7387\u4F4E\u4E0B\u548C\u74F6\u9888\u3002"}),`
`,r(n.h2,{id:"what-is-a-trace",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-a-trace",children:"#"}),"What is a Trace?"]}),`
`,r(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title",children:"TIP"}),r(n.div,{className:"island-directive-content",children:[e(n.p,{children:"Note: I use the terms Profile and Trace interchangeably."}),e(n.p,{children:"\u6CE8\u610F\uFF1A\u6211\u4EA4\u66FF\u4F7F\u7528\u672F\u8BED\u201C\u914D\u7F6E\u6587\u4EF6\u201D\u548C\u201C\u8DDF\u8E2A\u201D\u3002"})]})]}),`
`,e(n.p,{children:'\u8DDF\u8E2A\uFF08\u6216\u914D\u7F6E\u6587\u4EF6\uFF09\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7 Profiler \u4ECE\u4E3B\u673A\u8FDB\u7A0B\u6536\u96C6\u7684\u7EDF\u8BA1\u6570\u636E\uFF0C"\u67E5\u770B "\u5176\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u7684\u6267\u884C\u60C5\u51B5\u3002'}),`
`,e(n.p,{children:"\u8FD9\u4E9B\u7EDF\u8BA1\u4FE1\u606F\u88AB\u805A\u5408\u4E3A\u7ED3\u6784\u5316\u683C\u5F0F\uFF0C\u968F\u540E\u53EF\u4EE5\u52A0\u8F7D\u5230\u53EF\u89C6\u5316\u4E2D\uFF0C\u4F8B\u5982\u706B\u7130\u56FE\u3002"}),`
`,e(n.p,{children:"\u6211\u6700\u5E38\u4F7F\u7528\u7684 Profiler \u662F Chromium F12 Performance Profiler\u3002"}),`
`,e(n.p,{children:"\u4E0B\u9762\u662F\u4ECE Chromium Profiler \u751F\u6210\u7684\u53EF\u89C6\u5316\u6548\u679C\u793A\u4F8B\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172425.png",alt:"20231109172425"})}),`
`,r(n.h2,{id:"opening-the-profiler\u6253\u5F00\u63A2\u67E5\u5668",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#opening-the-profiler\u6253\u5F00\u63A2\u67E5\u5668",children:"#"}),"Opening the Profiler\xA0\u6253\u5F00\u63A2\u67E5\u5668"]}),`
`,e(n.p,{children:"\u6253\u5F00\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u540E\uFF0C\u5BFC\u822A\u5230\u201C\u6027\u80FD\u201D\u9009\u9879\u5361\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172552.png",alt:"20231109172552"})}),`
`,e(n.p,{children:"\u63A2\u67E5\u5668\u4E0E\u6253\u5F00\u63A2\u67E5\u5668\u7684\u8FDB\u7A0B\uFF08\u5373\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6D4F\u89C8\u5668\u9009\u9879\u5361\uFF09\u76F8\u5173\u8054\u3002"}),`
`,r(n.h2,{id:"start-collecting-a-trace\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#start-collecting-a-trace\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A",children:"#"}),"Start Collecting a Trace\xA0\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A"]}),`
`,e(n.p,{children:"\u5728\u5F55\u5236\u4E4B\u524D\uFF0C\u6211\u5EFA\u8BAE\u59CB\u7EC8\u68C0\u67E5 \u622A\u56FE \u9009\u9879\u3002"}),`
`,e(n.p,{children:"\u82E5\u8981\u5F00\u59CB\u6536\u96C6\uFF0C\u8BF7\u5355\u51FB UI \u4E2D\u7684\u201C\u5F55\u5236\u201D\u6309\u94AE\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172631.png",alt:"20231109172631"})}),`
`,e(n.p,{children:"\u8FD9\u5C06\u5F00\u59CB\u8DDF\u8E2A\u8BE5\u8FC7\u7A0B\u3002"}),`
`,r(n.h2,{id:"capture-your-scenario\u6355\u83B7\u65B9\u6848",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#capture-your-scenario\u6355\u83B7\u65B9\u6848",children:"#"}),"Capture your Scenario\xA0\u6355\u83B7\u65B9\u6848"]}),`
`,e(n.p,{children:"\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A\u540E\uFF0C\u8FD4\u56DE\u5230\u6700\u521D\u4E3A\u5176\u6253\u5F00 Chromium DevTools \u7684\u9009\u9879\u5361\u4E2D\u7684 Web \u5E94\u7528\u3002"}),`
`,r(n.h3,{id:"interactivity-scenarios\u4EA4\u4E92\u65B9\u6848",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#interactivity-scenarios\u4EA4\u4E92\u65B9\u6848",children:"#"}),"Interactivity Scenarios\xA0\u4EA4\u4E92\u65B9\u6848"]}),`
`,e(n.p,{children:"\u4EA4\u4E92\u5F0F\u65B9\u6848\u5305\u62EC\uFF1A"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"Typing"}),`
`,e(n.li,{children:"Clicking or dragging an in-app UI element"}),`
`,e(n.li,{children:"Opening a JavaScript modal or dialog"}),`
`,r(n.li,{children:["Navigating between routes of your JavaScript SPA (these are not the same as full page load scenarios)",e(n.br,{}),`
`,"\u5728 JavaScript SPA \u7684\u8DEF\u7531\u4E4B\u95F4\u5BFC\u822A\uFF08\u8FD9\u4E9B\u4E0E\u5B8C\u6574\u9875\u9762\u52A0\u8F7D\u65B9\u6848\u4E0D\u540C\uFF09"]}),`
`]}),`
`,e(n.p,{children:"\u8FD9\u4E9B\u5F88\u5BB9\u6613\u6355\u83B7;\u53EA\u9700\u5728\u63A2\u67E5\u5668\u5F55\u5236\u65F6\u7EE7\u7EED\u6267\u884C\u65B9\u6848\u5373\u53EF\u3002"}),`
`,r(n.h3,{id:"page-loads\u9875\u9762\u52A0\u8F7D",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#page-loads\u9875\u9762\u52A0\u8F7D",children:"#"}),"Page Loads\xA0\u9875\u9762\u52A0\u8F7D"]}),`
`,r(n.p,{children:["\u5BF9\u4E8E\u6574\u9875\u52A0\u8F7D\u65B9\u6848\uFF0C\u6211\u5EFA\u8BAE\u5728\u5F00\u59CB\u6536\u96C6\u914D\u7F6E\u6587\u4EF6\u4E4B\u524D\u5BFC\u822A\u5230\xA0",e(n.code,{children:"about:blank"}),"\xA0\u3002"]}),`
`,r(n.p,{children:["\u8FD9\u5C06\u786E\u4FDD\u4F60\u4E0D\u4F1A\u6355\u83B7\u4EFB\u4F55\u65E0\u5173\u7684\xA0",e(n.code,{children:"unload"}),"\xA0JavaScript \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u5728\u5BFC\u822A\u5230 Web \u5E94\u7528\u65F6\uFF0C\u8DDF\u8E2A\u66F4\u80FD\u4EE3\u8868\u4F60\u7684\u5B9E\u9645\u7528\u6237\u65B9\u6848\u3002"]}),`
`,e(n.p,{children:"\u9700\u8981\u660E\u786E\u7684\u662F\uFF1A"}),`
`,r(n.ol,{children:[`
`,e(n.li,{children:"Open the F12 Chromium Profiler"}),`
`,r(n.li,{children:["Navigate the tab to\xA0",e(n.code,{children:"about:blank"})]}),`
`,e(n.li,{children:"Begin recording in the Profiler"}),`
`,e(n.li,{children:"Navigate to the page you want to profile"}),`
`,e(n.li,{children:"Let the page fully load"}),`
`]}),`
`,r(n.h2,{id:"end-recording\u7ED3\u675F\u5F55\u5236",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#end-recording\u7ED3\u675F\u5F55\u5236",children:"#"}),"End Recording\xA0\u7ED3\u675F\u5F55\u5236"]}),`
`,e(n.p,{children:"\u5B8C\u6210\u65B9\u6848\u7684\u5236\u5B9A\u540E\uFF0C\u5355\u51FB Profiler \u4E2D\u7684 Stop\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173040.png",alt:"20231109173040"})}),`
`,e(n.p,{children:"\u5B83\u5C06\u5728 Profiler UI \u4E2D\u586B\u5145\u6536\u96C6\u5230\u7684\u573A\u666F\u7ED3\u679C\u3002"}),`
`,r(n.h2,{id:"exporting-a-trace\u5BFC\u51FA\u8DDF\u8E2A",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exporting-a-trace\u5BFC\u51FA\u8DDF\u8E2A",children:"#"}),"Exporting a Trace\xA0\u5BFC\u51FA\u8DDF\u8E2A"]}),`
`,e(n.p,{children:"\u5BFC\u51FA\u8DDF\u8E2A\u53EF\u4EE5\u65B9\u4FBF\u5730\u4E0E\u5176\u4ED6\u5DE5\u7A0B\u5E08\u5171\u4EAB\u60A8\u7684\u96C6\u5408\u4EE5\u8FDB\u884C\u56E2\u961F\u5206\u6790\u3002"}),`
`,e(n.p,{children:"\u82E5\u8981\u5BFC\u51FA\u8DDF\u8E2A\uFF0C\u8BF7\u5728 Profiler UI \u4E2D\u9009\u62E9\u201C\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6...\u201D\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173144.png",alt:"20231109173144"})}),`
`,r(n.p,{children:["\u8FD9\u5C06\u751F\u6210\u4E00\u4E2A\xA0",e(n.code,{children:".json"}),"\xA0\u6587\u4EF6\u3002\u5C06\u5176\u4FDD\u5B58\u5728\u4EFB\u4F55\u5730\u65B9\u3002"]}),`
`,r(n.p,{children:["\u8FD9\u4E9B\xA0",e(n.code,{children:".json"}),"\xA0\u8DDF\u8E2A\u5F88\u5BB9\u6613\u5728\u56E2\u961F\u6210\u5458\u4E4B\u95F4\u5171\u4EAB\uFF0C\u4EE5\u4FBF\u8C03\u67E5\u6027\u80FD\u95EE\u9898\u3002"]}),`
`,r(n.h2,{id:"importing-a-trace\u5BFC\u5165\u8DDF\u8E2A",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importing-a-trace\u5BFC\u5165\u8DDF\u8E2A",children:"#"}),"Importing a Trace\xA0\u5BFC\u5165\u8DDF\u8E2A"]}),`
`,e(n.p,{children:"\u5982\u679C\u8981\u91CD\u65B0\u8BBF\u95EE\u4EE5\u524D\u6536\u96C6\u7684\u8DDF\u8E2A\u6216\u4ECE\u56E2\u961F\u6210\u5458\u5BFC\u5165\u8DDF\u8E2A\uFF0C\u8BF7\u9009\u62E9\u201C\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6...\u201D\u6309\u94AE\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173223.png",alt:"20231109173223"})}),`
`,r(n.p,{children:["\u9009\u62E9\u4E00\u4E2A\u517C\u5BB9\xA0",e(n.code,{children:".json"}),"\xA0\u7684\u6587\u4EF6\uFF0C\u5B83\u5C06\u52A0\u8F7D\u5230 UI \u4E2D\u3002"]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}const p="Invalid Date",s=`# \u5982\u4F55\u6536\u96C6 Web \u6027\u80FD\u8DDF\u8E2A

\`metadata:\`

**\u539F\u6807\u9898:** How to Collect a Web Performance Trace

**\u94FE\u63A5:** https://webperf.tips/tip/collect-a-trace/

---

\u6BCF\u5F53\u6211\u4E0E\u6709\u5174\u8DA3\u63D0\u9AD8\u5176 Web \u4EA7\u54C1\u6027\u80FD\u7684\u56E2\u961F\u5408\u4F5C\u65F6\uFF0C\u6211\u95EE\u7684\u7B2C\u4E00\u4EF6\u4E8B\u5C31\u662F\u60A8\u662F\u5426\u5206\u6790\u4E86\u60A8\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF1F

\u6536\u96C6\u6027\u80FD\u8DDF\u8E2A\u662F\u4E86\u89E3 Web \u5E94\u7528\u5728\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u65B9\u5F0F\u7684\u6700\u4F73\u65B9\u5F0F\u4E4B\u4E00\uFF0C\u6709\u52A9\u4E8E\u8BC6\u522B\u6548\u7387\u4F4E\u4E0B\u548C\u74F6\u9888\u3002

## What is a Trace?

:::tip
Note: I use the terms Profile and Trace interchangeably.

\u6CE8\u610F\uFF1A\u6211\u4EA4\u66FF\u4F7F\u7528\u672F\u8BED\u201C\u914D\u7F6E\u6587\u4EF6\u201D\u548C\u201C\u8DDF\u8E2A\u201D\u3002
:::

\u8DDF\u8E2A\uFF08\u6216\u914D\u7F6E\u6587\u4EF6\uFF09\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7 Profiler \u4ECE\u4E3B\u673A\u8FDB\u7A0B\u6536\u96C6\u7684\u7EDF\u8BA1\u6570\u636E\uFF0C"\u67E5\u770B "\u5176\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u7684\u6267\u884C\u60C5\u51B5\u3002

\u8FD9\u4E9B\u7EDF\u8BA1\u4FE1\u606F\u88AB\u805A\u5408\u4E3A\u7ED3\u6784\u5316\u683C\u5F0F\uFF0C\u968F\u540E\u53EF\u4EE5\u52A0\u8F7D\u5230\u53EF\u89C6\u5316\u4E2D\uFF0C\u4F8B\u5982\u706B\u7130\u56FE\u3002

\u6211\u6700\u5E38\u4F7F\u7528\u7684 Profiler \u662F Chromium F12 Performance Profiler\u3002

\u4E0B\u9762\u662F\u4ECE Chromium Profiler \u751F\u6210\u7684\u53EF\u89C6\u5316\u6548\u679C\u793A\u4F8B\uFF1A

![20231109172425](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172425.png)

## Opening the Profiler\xA0\u6253\u5F00\u63A2\u67E5\u5668

\u6253\u5F00\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u540E\uFF0C\u5BFC\u822A\u5230\u201C\u6027\u80FD\u201D\u9009\u9879\u5361\u3002

![20231109172552](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172552.png)

\u63A2\u67E5\u5668\u4E0E\u6253\u5F00\u63A2\u67E5\u5668\u7684\u8FDB\u7A0B\uFF08\u5373\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6D4F\u89C8\u5668\u9009\u9879\u5361\uFF09\u76F8\u5173\u8054\u3002

## Start Collecting a Trace\xA0\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A

\u5728\u5F55\u5236\u4E4B\u524D\uFF0C\u6211\u5EFA\u8BAE\u59CB\u7EC8\u68C0\u67E5 \u622A\u56FE \u9009\u9879\u3002

\u82E5\u8981\u5F00\u59CB\u6536\u96C6\uFF0C\u8BF7\u5355\u51FB UI \u4E2D\u7684\u201C\u5F55\u5236\u201D\u6309\u94AE\u3002

![20231109172631](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109172631.png)

\u8FD9\u5C06\u5F00\u59CB\u8DDF\u8E2A\u8BE5\u8FC7\u7A0B\u3002

## Capture your Scenario\xA0\u6355\u83B7\u65B9\u6848

\u5F00\u59CB\u6536\u96C6\u8DDF\u8E2A\u540E\uFF0C\u8FD4\u56DE\u5230\u6700\u521D\u4E3A\u5176\u6253\u5F00 Chromium DevTools \u7684\u9009\u9879\u5361\u4E2D\u7684 Web \u5E94\u7528\u3002

### Interactivity Scenarios\xA0\u4EA4\u4E92\u65B9\u6848

\u4EA4\u4E92\u5F0F\u65B9\u6848\u5305\u62EC\uFF1A

*   Typing
*   Clicking or dragging an in-app UI element  
*   Opening a JavaScript modal or dialog  
*   Navigating between routes of your JavaScript SPA (these are not the same as full page load scenarios)  
    \u5728 JavaScript SPA \u7684\u8DEF\u7531\u4E4B\u95F4\u5BFC\u822A\uFF08\u8FD9\u4E9B\u4E0E\u5B8C\u6574\u9875\u9762\u52A0\u8F7D\u65B9\u6848\u4E0D\u540C\uFF09

\u8FD9\u4E9B\u5F88\u5BB9\u6613\u6355\u83B7;\u53EA\u9700\u5728\u63A2\u67E5\u5668\u5F55\u5236\u65F6\u7EE7\u7EED\u6267\u884C\u65B9\u6848\u5373\u53EF\u3002

### Page Loads\xA0\u9875\u9762\u52A0\u8F7D

\u5BF9\u4E8E\u6574\u9875\u52A0\u8F7D\u65B9\u6848\uFF0C\u6211\u5EFA\u8BAE\u5728\u5F00\u59CB\u6536\u96C6\u914D\u7F6E\u6587\u4EF6\u4E4B\u524D\u5BFC\u822A\u5230\xA0\`about:blank\`\xA0\u3002

\u8FD9\u5C06\u786E\u4FDD\u4F60\u4E0D\u4F1A\u6355\u83B7\u4EFB\u4F55\u65E0\u5173\u7684\xA0\`unload\`\xA0JavaScript \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u5728\u5BFC\u822A\u5230 Web \u5E94\u7528\u65F6\uFF0C\u8DDF\u8E2A\u66F4\u80FD\u4EE3\u8868\u4F60\u7684\u5B9E\u9645\u7528\u6237\u65B9\u6848\u3002

\u9700\u8981\u660E\u786E\u7684\u662F\uFF1A

1.  Open the F12 Chromium Profiler  
2.  Navigate the tab to\xA0\`about:blank\`  
3.  Begin recording in the Profiler  
4.  Navigate to the page you want to profile  
5.  Let the page fully load  

## End Recording\xA0\u7ED3\u675F\u5F55\u5236

\u5B8C\u6210\u65B9\u6848\u7684\u5236\u5B9A\u540E\uFF0C\u5355\u51FB Profiler \u4E2D\u7684 Stop\u3002

![20231109173040](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173040.png)

\u5B83\u5C06\u5728 Profiler UI \u4E2D\u586B\u5145\u6536\u96C6\u5230\u7684\u573A\u666F\u7ED3\u679C\u3002

## Exporting a Trace\xA0\u5BFC\u51FA\u8DDF\u8E2A

\u5BFC\u51FA\u8DDF\u8E2A\u53EF\u4EE5\u65B9\u4FBF\u5730\u4E0E\u5176\u4ED6\u5DE5\u7A0B\u5E08\u5171\u4EAB\u60A8\u7684\u96C6\u5408\u4EE5\u8FDB\u884C\u56E2\u961F\u5206\u6790\u3002

\u82E5\u8981\u5BFC\u51FA\u8DDF\u8E2A\uFF0C\u8BF7\u5728 Profiler UI \u4E2D\u9009\u62E9\u201C\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6...\u201D\uFF1A

![20231109173144](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173144.png)

\u8FD9\u5C06\u751F\u6210\u4E00\u4E2A\xA0\`.json\`\xA0\u6587\u4EF6\u3002\u5C06\u5176\u4FDD\u5B58\u5728\u4EFB\u4F55\u5730\u65B9\u3002

\u8FD9\u4E9B\xA0\`.json\`\xA0\u8DDF\u8E2A\u5F88\u5BB9\u6613\u5728\u56E2\u961F\u6210\u5458\u4E4B\u95F4\u5171\u4EAB\uFF0C\u4EE5\u4FBF\u8C03\u67E5\u6027\u80FD\u95EE\u9898\u3002

## Importing a Trace\xA0\u5BFC\u5165\u8DDF\u8E2A

\u5982\u679C\u8981\u91CD\u65B0\u8BBF\u95EE\u4EE5\u524D\u6536\u96C6\u7684\u8DDF\u8E2A\u6216\u4ECE\u56E2\u961F\u6210\u5458\u5BFC\u5165\u8DDF\u8E2A\uFF0C\u8BF7\u9009\u62E9\u201C\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6...\u201D\u6309\u94AE\uFF1A

![20231109173223](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109173223.png)

\u9009\u62E9\u4E00\u4E2A\u517C\u5BB9\xA0\`.json\`\xA0\u7684\u6587\u4EF6\uFF0C\u5B83\u5C06\u52A0\u8F7D\u5230 UI \u4E2D\u3002



















`;export{s as content,h as default,o as frontmatter,p as lastUpdatedTime,d as title,l as toc};
