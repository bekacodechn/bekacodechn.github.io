import{jsx as e,jsxs as i,Fragment as a}from"react/jsx-runtime";const o=void 0,l=[{id:"representing-time\u8868\u793A\u65F6\u95F4",text:"Representing Time\xA0\u8868\u793A\u65F6\u95F4",depth:2},{id:"tasks",text:"Tasks",depth:2},{id:"thread-inactivity\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B",text:"Thread Inactivity\xA0(\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B)",depth:2},{id:"task-colorization\u4EFB\u52A1\u7740\u8272",text:"Task Colorization\xA0(\u4EFB\u52A1\u7740\u8272)",depth:2},{id:"parsing",text:"Parsing",depth:3},{id:"javascript-tasks",text:"javaScript Tasks",depth:3},{id:"browser-apis",text:"Browser APIs",depth:3},{id:"style-and-layout",text:"Style and Layout",depth:3},{id:"paint-and-compositing-\u7ED8\u753B\u548C\u5408\u6210",text:"Paint and Compositing (\u7ED8\u753B\u548C\u5408\u6210)",depth:3},{id:"tying-back-to-the-trace-overview-\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0",text:"Tying Back to the Trace Overview (\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0)",depth:2}],d="Chromium F12 Profiler\uFF1A\u4E3B\u7EBF\u7A0B\u7A97\u683C";function t(r){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",div:"div",ul:"ul",li:"li",img:"img",h2:"h2",h3:"h3",em:"em"},r.components);return i(a,{children:[i(n.h1,{id:"chromium-f12-profiler\u4E3B\u7EBF\u7A0B\u7A97\u683C",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chromium-f12-profiler\u4E3B\u7EBF\u7A0B\u7A97\u683C",children:"#"}),"Chromium F12 Profiler\uFF1A\u4E3B\u7EBF\u7A0B\u7A97\u683C"]}),`
`,e(n.p,{children:e(n.code,{children:"metadata:"})}),`
`,i(n.p,{children:[e(n.strong,{children:"\u539F\u6807\u9898:"})," Chromium F12 Profiler: The Main Thread Pane"]}),`
`,i(n.p,{children:[e(n.strong,{children:"\u94FE\u63A5:"})," ",e(n.a,{href:"https://webperf.tips/tip/main-profiler-pane/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/main-profiler-pane/"})]}),`
`,i(n.p,{children:[e(n.strong,{children:"\u6587\u7AE0\u526F\u6807\u9898:"})," performance \u67E5\u770B\u4E3B\u7EBF\u7A0B\uFF08\u989C\u8272\u542B\u4E49\uFF09"]}),`
`,e(n.hr,{}),`
`,i(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title",children:"\u706B\u7130\u56FE\u989C\u8272\u8BF4\u660E\uFF1A"}),e(n.div,{className:"island-directive-content",children:i(n.ul,{children:[`
`,i(n.li,{children:["Parsing Html or Css: ",e(n.strong,{children:"\u84DD\u8272"})]}),`
`,i(n.li,{children:["JavaScript Tasks: ",e(n.strong,{children:"\u6A59\u8272"})]}),`
`,i(n.li,{children:["Browser APIs\uFF0Cex:\xA0",e(n.code,{children:"setTimeout"}),"\xA0\u6216\xA0",e(n.code,{children:"createElement"}),": ",e(n.strong,{children:"\u68D5\u8272"})]}),`
`,i(n.li,{children:["Style and Layout: ",e(n.strong,{children:"\u7D2B\u8272"})]}),`
`,i(n.li,{children:["Paint and Compositing: ",e(n.strong,{children:"\u7EFF\u8272"})]}),`
`]})})]}),`
`,e(n.p,{children:"\u6211\u82B1\u5728\u5206\u6790 Web \u5E94\u7528\u7A0B\u5E8F\u6027\u80FD\u8DDF\u8E2A\u7684 CPU \u7EC4\u4EF6\u4E0A\u7684\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728 Chromium F12 Profiler \u7684\u4E3B\u7A97\u683C\u4E2D\u3002"}),`
`,e(n.p,{children:"\u6B64\u7A97\u683C\u53EF\u89C6\u5316\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709 CPU \u6D3B\u52A8\uFF0C\u5305\u62EC\u4EFB\u52A1\u548C\u6E32\u67D3\u5E27\u3002"}),`
`,e(n.p,{children:"\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u8BA8\u8BBA\u6B64\u4E3B\u7A97\u683C\uFF0C\u4EE5\u53CA\u5982\u4F55\u6709\u6548\u5730\u9605\u8BFB\u5B83\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185412.png",alt:"20231110185412"})}),`
`,i(n.h2,{id:"representing-time\u8868\u793A\u65F6\u95F4",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#representing-time\u8868\u793A\u65F6\u95F4",children:"#"}),"Representing Time\xA0\u8868\u793A\u65F6\u95F4"]}),`
`,e(n.p,{children:"\u4E0E Chromium F12 \u6027\u80FD\u5206\u6790\u5668\u4E2D\u7684\u6240\u6709\u7A97\u683C\u4E00\u6837\uFF0C\u65F6\u95F4\u4ECE\u5DE6\u5230\u53F3\u8868\u793A\u3002\u8FD9\u610F\u5473\u7740\u5728\u8DDF\u8E2A\u671F\u95F4\u6536\u96C6\u7684\u65E9\u671F\u4E8B\u4EF6\u663E\u793A\u5728\u5DE6\u4FA7\uFF0C\u540E\u9762\u7684\u4E8B\u4EF6\u4ECE\u5DE6\u5230\u53F3\u586B\u5145\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185503.png",alt:"20231110185503"})}),`
`,i(n.h2,{id:"tasks",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tasks",children:"#"}),"Tasks"]}),`
`,e(n.p,{children:"\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6BCF\u4E2A\u6267\u884C\u5355\u5143\u90FD\u79F0\u4E3A\u4E00\u4E2A\u4EFB\u52A1\u3002"}),`
`,e(n.p,{children:"\u4EFB\u52A1\u4EE5\u7070\u8272\u5757\u7684\u5F62\u5F0F\u53EF\u89C6\u5316\uFF08\u8868\u793A\u5176\u6267\u884C\u65F6\u95F4\uFF09\u3002JavaScript \u4EFB\u52A1\u8FD8\u5C06\u5177\u6709\u8BE6\u7EC6\u7684\u8C03\u7528\u5806\u6808\u4FE1\u606F\uFF0C\u4EE5\u706B\u7130\u56FE\u7684\u5F62\u5F0F\u53EF\u89C6\u5316\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185551.png",alt:"20231110185551"})}),`
`,e(n.p,{children:"\u5E76\u975E\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709\u4EFB\u52A1\u90FD\u662F JavaScript \u4EFB\u52A1\uFF0C\u56E0\u6B64\uFF0C\u5E76\u975E\u6240\u6709\u4EFB\u52A1\u5728 F12 Profiler \u4E2D\u90FD\u6709\u8BE6\u7EC6\u7684\u706B\u7130\u56FE\u3002"}),`
`,e(n.p,{children:"\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06\u9F20\u6807\u60AC\u505C\u5728\u6839\u4EFB\u52A1\u6CE2\u6BB5\u4E0A\u6765\u67E5\u770B\u6267\u884C\u4EFB\u52A1\u6240\u9700\u7684\u65F6\u95F4\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185607.png",alt:"20231110185607"})}),`
`,i(n.h2,{id:"thread-inactivity\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#thread-inactivity\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B",children:"#"}),"Thread Inactivity\xA0(\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B)"]}),`
`,e(n.p,{children:"\u5982\u679C\u4E3B\u7EBF\u7A0B\u4E0A\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u4EFB\u52A1\uFF0C\u5219 Profiler UI \u4F1A\u5C06\u8BE5\u65F6\u95F4\u6BB5\u4FDD\u7559\u4E3A\u7A7A\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185633.png",alt:"20231110185633"})}),`
`,e(n.p,{children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u7684\u8BBE\u8BA1\u662F\u6709\u610F\u7684\u975E\u963B\u585E\u3002\u5982\u679C\u5B58\u5728\u76F8\u5F53\u5927\u7684\u95F4\u9699\u8868\u793A\u4E3B\u7EBF\u7A0B\u4E0D\u6D3B\u52A8\uFF0C\u8FD9\u53EF\u80FD\u8868\u660E\u60A8\u6CA1\u6709\u7ED9\u6D4F\u89C8\u5668\u4EFB\u4F55\u5DE5\u4F5C\u8981\u505A\u3002"}),`
`,i(n.div,{className:"island-directive info",children:[e(n.p,{className:"island-directive-title",children:"INFO"}),e(n.div,{className:"island-directive-content",children:i(n.p,{children:["\u6CE8\u610F\uFF1A\u6839\u636E\u60A8\u7684\u60C5\u51B5\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u4E5F\u53EF\u80FD\u4E0D\u5E0C\u671B\u4E3B\u7EBF\u7A0B\u6709\u4E00\u6BB5\u65F6\u95F4\u4E0D\u6D3B\u52A8\u3002\u5728\u6211\u5173\u4E8E",e(n.a,{href:"https://webperf.tips/tip/main-thread-inactivity",target:"_blank",rel:"nofollow",children:"\u4E3B\u7EBF\u7A0B\u4E0D\u6D3B\u52A8"}),"\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002"]})})]}),`
`,i(n.h2,{id:"task-colorization\u4EFB\u52A1\u7740\u8272",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#task-colorization\u4EFB\u52A1\u7740\u8272",children:"#"}),"Task Colorization\xA0(\u4EFB\u52A1\u7740\u8272)"]}),`
`,e(n.p,{children:"\u5728 Chromium F12 \u4E3B\u7EBF\u7A0B\u9762\u677F\u4E2D\u663E\u793A\u7684\u4EFB\u52A1\u4E2D\uFF0C\u63A2\u67E5\u5668\u5C06\u5BF9\u67D0\u4E9B\u6D3B\u52A8\u8FDB\u884C\u4E00\u81F4\u7684\u7740\u8272\uFF0C\u4EE5\u4FBF\u4E8E\u76F4\u89C2\u5730\u53D1\u73B0\u74F6\u9888\u6216\u6548\u7387\u4F4E\u4E0B\u3002"}),`
`,i(n.h3,{id:"parsing",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parsing",children:"#"}),"Parsing"]}),`
`,i(n.p,{children:["HTML \u548C CSS \u89E3\u6790\u88AB\u7740\u8272\u4E3A",e(n.strong,{children:"\u84DD\u8272"})]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190142.png",alt:"20231110190142"})}),`
`,i(n.h3,{id:"javascript-tasks",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#javascript-tasks",children:"#"}),"javaScript Tasks"]}),`
`,e(n.p,{children:"\u4E0E JavaScript \u5F15\u64CE\u76F8\u5173\u7684\u4EFB\u52A1\u901A\u5E38\u5728\u5E95\u90E8\u7740\u8272\u4E3A\u6A59\u8272\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190310.png",alt:"20231110190310"})}),`
`,e(n.p,{children:"\u4E0E JavaScript \u5F15\u64CE\u76F8\u5173\u7684\u4EFB\u52A1\u5305\u62EC\u811A\u672C\u7F16\u8BD1\u3001\u6267\u884C\u4E8B\u4EF6\u4FA6\u542C\u5668\u3001\u89E6\u53D1\u8BA1\u65F6\u5668\u3001\u5783\u573E\u56DE\u6536\u4EE5\u53CA\u4EFB\u4F55\u5176\u4ED6\u4E0E JavaScript \u76F8\u5173\u7684\u5DE5\u4F5C\u3002"}),`
`,e(n.p,{children:"\u5728\u4E0E\u5F15\u64CE\u76F8\u5173\u7684\u6CE2\u6BB5\u4E0B\u65B9\uFF0CJavaScript \u8C03\u7528\u5806\u6808\u4F1A\u6839\u636E\u5728\u706B\u7130\u56FE\u4E2D\u6267\u884C\u6355\u83B7\u7684\u5806\u6808\u5E27\u7684\u811A\u672C\u4E00\u81F4\u5730\u7740\u8272\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190431.png",alt:"20231110190431"})}),`
`,e(n.p,{children:"\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u8C03\u7528\u5806\u6808\u4E2D\u5305\u542B\u591A\u4E2A\u811A\u672C\u3002\u5728 Profiler \u4E2D\uFF0C\u6BCF\u4E2A\u811A\u672C\u90FD\u4F1A\u5728\u6E90\u81EA\u5B83\u7684\u6BCF\u4E2A\u5806\u6808\u5E27\u7684\u8DDF\u8E2A\u4E2D\u5206\u914D\u4E00\u81F4\u7684\u989C\u8272\u3002"}),`
`,i(n.h3,{id:"browser-apis",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-apis",children:"#"}),"Browser APIs"]}),`
`,i(n.p,{children:["\u5728 JavaScript \u8C03\u7528\u5806\u6808\u4E2D\uFF0C\u6709\u65F6\u60A8\u4F1A\u770B\u5230\u68D5\u8272\u3002\u8FD9\u8868\u793A\u6B63\u5728\u8FDB\u884C\u7684\u5DE5\u4F5C\u662F\u6D4F\u89C8\u5668 API\uFF0C\u4F8B\u5982\xA0",e(n.code,{children:"setTimeout"}),"\xA0\u6216\xA0",e(n.code,{children:"createElement"}),"\xA0\uFF1A"]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190609.png",alt:"20231110190609"})}),`
`,i(n.h3,{id:"style-and-layout",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style-and-layout",children:"#"}),"Style and Layout"]}),`
`,i(n.p,{children:["\u4F5C\u4E3A\u6D4F\u89C8\u5668",e(n.a,{href:"https://webperf.tips/tip/browser-rendering-pipeline",target:"_blank",rel:"nofollow",children:"Render Pipeline"}),"\u7684\u4E00\u90E8\u5206\uFF0C\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u548C\u5E03\u5C40\u5C06\u95F4\u6B47\u6027\u5730\u8FD0\u884C\u3002\u8FD9\u4E9B\u5C06\u88AB\u7740\u8272\u4E3A\u7D2B\u8272\uFF1A"]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190838.png",alt:"20231110190838"})}),`
`,e(n.p,{children:"\u7D2B\u8272\u901A\u5E38\u4E0E\u66F4\u65B0\u6216\u4E0E\u652F\u6301\u9875\u9762\u4E0A\u89C6\u89C9\u5143\u7D20\u7684\u6570\u636E\u7ED3\u6784\u4EA4\u4E92\u7684\u4EFB\u4F55\u5DE5\u4F5C\u6709\u5173\u3002"}),`
`,i(n.h3,{id:"paint-and-compositing-\u7ED8\u753B\u548C\u5408\u6210",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#paint-and-compositing-\u7ED8\u753B\u548C\u5408\u6210",children:"#"}),"Paint and Compositing (\u7ED8\u753B\u548C\u5408\u6210)"]}),`
`,e(n.p,{children:"\u5728\u201C\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u548C\u5E03\u5C40\u201D\u8FD0\u884C\u540E\u4E0D\u4E45\uFF0C\u6D4F\u89C8\u5668\u901A\u5E38\u4F1A\u8FD0\u884C\u4E00\u4E2A\u201C\u7ED8\u5236\u201D\u4E8B\u4EF6\uFF0C\u6709\u65F6\u8FD8\u4F1A\u8FD0\u884C\u4E00\u4E9B\u989D\u5916\u7684\u590D\u5408\u56FE\u5C42\u3002\u8FD9\u4E9B\u5C06\u88AB\u6D82\u6210\u7EFF\u8272\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192011.png",alt:"20231110192011"})}),`
`,i(n.p,{children:["\u7740\u8272\u4E3A\u7EFF\u8272\u7684\u5DE5\u4F5C\u901A\u5E38\u8868\u793A\u6D4F\u89C8\u5668\u6B63\u51C6\u5907\u5411\u7528\u6237\u754C\u9762\u751F\u6210\u50CF\u7D20\uFF0C\u5E76\u6B63\u5728\u6267\u884C\uFF08\u6216\u51C6\u5907\u6267\u884C\uFF09\u67D0\u79CD\u4E0E\u56FE\u5F62\u76F8\u5173\u7684\u5DE5\u4F5C\u4EE5\u663E\u793A",e(n.em,{children:"Frame"}),"\u3002"]}),`
`,i(n.h2,{id:"tying-back-to-the-trace-overview-\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tying-back-to-the-trace-overview-\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0",children:"#"}),"Tying Back to the Trace Overview (\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0)"]}),`
`,e(n.p,{children:"\u5728\u63A2\u67E5\u5668\u7684\u9876\u90E8\uFF0C\u6709\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192119.png",alt:"20231110192119"})}),`
`,e(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5BF9 Profiler \u989C\u8272\u7684\u6269\u5C55\u77E5\u8BC6\u6765\u5FEB\u901F\u53D1\u73B0\u6D3B\u52A8\u6216\u4E0D\u6D3B\u52A8\u533A\u57DF\uFF0C\u5E76\u731C\u6D4B\u6B63\u5728\u53D1\u751F\u7684\u6D3B\u52A8\u7C7B\u578B\u3002"}),`
`,e(n.p,{children:"\u4F8B\u5982\uFF0C\u5728\u6211\u7684\u8DDF\u8E2A\u4E2D\uFF0C\u6211\u53EF\u4EE5\u5728\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\u5FEB\u901F\u67E5\u770B\u4E3B\u8981\u53D1\u751F\u7684\u5DE5\u4F5C\u7C7B\u578B\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192150.png",alt:"20231110192150"})}),`
`,e(n.p,{children:"\u6B64\u5916\uFF0C\u6211\u8FD8\u53EF\u4EE5\u4F7F\u7528 Profiler \u7684 Selection \u529F\u80FD\u6765\u94BB\u53D6\u611F\u5174\u8DA3\u7684\u533A\u57DF\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u60F3\u67E5\u770B\u6211\u4E0A\u9762\u63D0\u5230\u7684 CSS \u6216 HTML \u89E3\u6790\u5757\u4E2D\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u6211\u53EF\u4EE5\u5C06\u9009\u62E9\u8303\u56F4\u9650\u5B9A\u4E3A\u5B83\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192207.png",alt:"20231110192207"})}),`
`,e(n.p,{children:"\u5728\u8FD9\u91CC\uFF0C\u6211\u53EF\u4EE5\u770B\u5230\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728\u89E3\u6790\u6837\u5F0F\u8868\u3002"})]})}function h(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}const s="Invalid Date",p=`# Chromium F12 Profiler\uFF1A\u4E3B\u7EBF\u7A0B\u7A97\u683C

\`metadata:\`

**\u539F\u6807\u9898:** Chromium F12 Profiler: The Main Thread Pane

**\u94FE\u63A5:** https://webperf.tips/tip/main-profiler-pane/

**\u6587\u7AE0\u526F\u6807\u9898:** performance \u67E5\u770B\u4E3B\u7EBF\u7A0B\uFF08\u989C\u8272\u542B\u4E49\uFF09

---

:::tip{title=\u706B\u7130\u56FE\u989C\u8272\u8BF4\u660E\uFF1A}
- Parsing Html or Css: **\u84DD\u8272**
- JavaScript Tasks: **\u6A59\u8272**
- Browser APIs\uFF0Cex:\xA0\`setTimeout\`\xA0\u6216\xA0\`createElement\`: **\u68D5\u8272**
- Style and Layout: **\u7D2B\u8272**
- Paint and Compositing: **\u7EFF\u8272**
:::

\u6211\u82B1\u5728\u5206\u6790 Web \u5E94\u7528\u7A0B\u5E8F\u6027\u80FD\u8DDF\u8E2A\u7684 CPU \u7EC4\u4EF6\u4E0A\u7684\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728 Chromium F12 Profiler \u7684\u4E3B\u7A97\u683C\u4E2D\u3002

\u6B64\u7A97\u683C\u53EF\u89C6\u5316\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709 CPU \u6D3B\u52A8\uFF0C\u5305\u62EC\u4EFB\u52A1\u548C\u6E32\u67D3\u5E27\u3002

\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u8BA8\u8BBA\u6B64\u4E3B\u7A97\u683C\uFF0C\u4EE5\u53CA\u5982\u4F55\u6709\u6548\u5730\u9605\u8BFB\u5B83\u3002

![20231110185412](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185412.png)

## Representing Time\xA0\u8868\u793A\u65F6\u95F4

\u4E0E Chromium F12 \u6027\u80FD\u5206\u6790\u5668\u4E2D\u7684\u6240\u6709\u7A97\u683C\u4E00\u6837\uFF0C\u65F6\u95F4\u4ECE\u5DE6\u5230\u53F3\u8868\u793A\u3002\u8FD9\u610F\u5473\u7740\u5728\u8DDF\u8E2A\u671F\u95F4\u6536\u96C6\u7684\u65E9\u671F\u4E8B\u4EF6\u663E\u793A\u5728\u5DE6\u4FA7\uFF0C\u540E\u9762\u7684\u4E8B\u4EF6\u4ECE\u5DE6\u5230\u53F3\u586B\u5145\uFF1A

![20231110185503](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185503.png)

## Tasks

\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6BCF\u4E2A\u6267\u884C\u5355\u5143\u90FD\u79F0\u4E3A\u4E00\u4E2A\u4EFB\u52A1\u3002

\u4EFB\u52A1\u4EE5\u7070\u8272\u5757\u7684\u5F62\u5F0F\u53EF\u89C6\u5316\uFF08\u8868\u793A\u5176\u6267\u884C\u65F6\u95F4\uFF09\u3002JavaScript \u4EFB\u52A1\u8FD8\u5C06\u5177\u6709\u8BE6\u7EC6\u7684\u8C03\u7528\u5806\u6808\u4FE1\u606F\uFF0C\u4EE5\u706B\u7130\u56FE\u7684\u5F62\u5F0F\u53EF\u89C6\u5316\u3002

![20231110185551](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185551.png)

\u5E76\u975E\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709\u4EFB\u52A1\u90FD\u662F JavaScript \u4EFB\u52A1\uFF0C\u56E0\u6B64\uFF0C\u5E76\u975E\u6240\u6709\u4EFB\u52A1\u5728 F12 Profiler \u4E2D\u90FD\u6709\u8BE6\u7EC6\u7684\u706B\u7130\u56FE\u3002

\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06\u9F20\u6807\u60AC\u505C\u5728\u6839\u4EFB\u52A1\u6CE2\u6BB5\u4E0A\u6765\u67E5\u770B\u6267\u884C\u4EFB\u52A1\u6240\u9700\u7684\u65F6\u95F4\uFF1A

![20231110185607](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185607.png)

## Thread Inactivity\xA0(\u4E0D\u6D3B\u52A8\u7684\u7EBF\u7A0B)

\u5982\u679C\u4E3B\u7EBF\u7A0B\u4E0A\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u4EFB\u52A1\uFF0C\u5219 Profiler UI \u4F1A\u5C06\u8BE5\u65F6\u95F4\u6BB5\u4FDD\u7559\u4E3A\u7A7A\uFF1A

![20231110185633](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110185633.png)

\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u7684\u8BBE\u8BA1\u662F\u6709\u610F\u7684\u975E\u963B\u585E\u3002\u5982\u679C\u5B58\u5728\u76F8\u5F53\u5927\u7684\u95F4\u9699\u8868\u793A\u4E3B\u7EBF\u7A0B\u4E0D\u6D3B\u52A8\uFF0C\u8FD9\u53EF\u80FD\u8868\u660E\u60A8\u6CA1\u6709\u7ED9\u6D4F\u89C8\u5668\u4EFB\u4F55\u5DE5\u4F5C\u8981\u505A\u3002

:::info
\u6CE8\u610F\uFF1A\u6839\u636E\u60A8\u7684\u60C5\u51B5\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u4E5F\u53EF\u80FD\u4E0D\u5E0C\u671B\u4E3B\u7EBF\u7A0B\u6709\u4E00\u6BB5\u65F6\u95F4\u4E0D\u6D3B\u52A8\u3002\u5728\u6211\u5173\u4E8E[\u4E3B\u7EBF\u7A0B\u4E0D\u6D3B\u52A8](https://webperf.tips/tip/main-thread-inactivity)\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002
:::

## Task Colorization\xA0(\u4EFB\u52A1\u7740\u8272)

\u5728 Chromium F12 \u4E3B\u7EBF\u7A0B\u9762\u677F\u4E2D\u663E\u793A\u7684\u4EFB\u52A1\u4E2D\uFF0C\u63A2\u67E5\u5668\u5C06\u5BF9\u67D0\u4E9B\u6D3B\u52A8\u8FDB\u884C\u4E00\u81F4\u7684\u7740\u8272\uFF0C\u4EE5\u4FBF\u4E8E\u76F4\u89C2\u5730\u53D1\u73B0\u74F6\u9888\u6216\u6548\u7387\u4F4E\u4E0B\u3002

### Parsing

HTML \u548C CSS \u89E3\u6790\u88AB\u7740\u8272\u4E3A**\u84DD\u8272**

![20231110190142](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190142.png)

### javaScript Tasks

\u4E0E JavaScript \u5F15\u64CE\u76F8\u5173\u7684\u4EFB\u52A1\u901A\u5E38\u5728\u5E95\u90E8\u7740\u8272\u4E3A\u6A59\u8272\uFF1A

![20231110190310](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190310.png)

\u4E0E JavaScript \u5F15\u64CE\u76F8\u5173\u7684\u4EFB\u52A1\u5305\u62EC\u811A\u672C\u7F16\u8BD1\u3001\u6267\u884C\u4E8B\u4EF6\u4FA6\u542C\u5668\u3001\u89E6\u53D1\u8BA1\u65F6\u5668\u3001\u5783\u573E\u56DE\u6536\u4EE5\u53CA\u4EFB\u4F55\u5176\u4ED6\u4E0E JavaScript \u76F8\u5173\u7684\u5DE5\u4F5C\u3002

\u5728\u4E0E\u5F15\u64CE\u76F8\u5173\u7684\u6CE2\u6BB5\u4E0B\u65B9\uFF0CJavaScript \u8C03\u7528\u5806\u6808\u4F1A\u6839\u636E\u5728\u706B\u7130\u56FE\u4E2D\u6267\u884C\u6355\u83B7\u7684\u5806\u6808\u5E27\u7684\u811A\u672C\u4E00\u81F4\u5730\u7740\u8272\uFF1A

![20231110190431](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190431.png)

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u8C03\u7528\u5806\u6808\u4E2D\u5305\u542B\u591A\u4E2A\u811A\u672C\u3002\u5728 Profiler \u4E2D\uFF0C\u6BCF\u4E2A\u811A\u672C\u90FD\u4F1A\u5728\u6E90\u81EA\u5B83\u7684\u6BCF\u4E2A\u5806\u6808\u5E27\u7684\u8DDF\u8E2A\u4E2D\u5206\u914D\u4E00\u81F4\u7684\u989C\u8272\u3002

### Browser APIs

\u5728 JavaScript \u8C03\u7528\u5806\u6808\u4E2D\uFF0C\u6709\u65F6\u60A8\u4F1A\u770B\u5230\u68D5\u8272\u3002\u8FD9\u8868\u793A\u6B63\u5728\u8FDB\u884C\u7684\u5DE5\u4F5C\u662F\u6D4F\u89C8\u5668 API\uFF0C\u4F8B\u5982\xA0\`setTimeout\`\xA0\u6216\xA0\`createElement\`\xA0\uFF1A

![20231110190609](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190609.png)

### Style and Layout

\u4F5C\u4E3A\u6D4F\u89C8\u5668[Render Pipeline](https://webperf.tips/tip/browser-rendering-pipeline)\u7684\u4E00\u90E8\u5206\uFF0C\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u548C\u5E03\u5C40\u5C06\u95F4\u6B47\u6027\u5730\u8FD0\u884C\u3002\u8FD9\u4E9B\u5C06\u88AB\u7740\u8272\u4E3A\u7D2B\u8272\uFF1A

![20231110190838](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110190838.png)

\u7D2B\u8272\u901A\u5E38\u4E0E\u66F4\u65B0\u6216\u4E0E\u652F\u6301\u9875\u9762\u4E0A\u89C6\u89C9\u5143\u7D20\u7684\u6570\u636E\u7ED3\u6784\u4EA4\u4E92\u7684\u4EFB\u4F55\u5DE5\u4F5C\u6709\u5173\u3002

### Paint and Compositing (\u7ED8\u753B\u548C\u5408\u6210)

\u5728\u201C\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u548C\u5E03\u5C40\u201D\u8FD0\u884C\u540E\u4E0D\u4E45\uFF0C\u6D4F\u89C8\u5668\u901A\u5E38\u4F1A\u8FD0\u884C\u4E00\u4E2A\u201C\u7ED8\u5236\u201D\u4E8B\u4EF6\uFF0C\u6709\u65F6\u8FD8\u4F1A\u8FD0\u884C\u4E00\u4E9B\u989D\u5916\u7684\u590D\u5408\u56FE\u5C42\u3002\u8FD9\u4E9B\u5C06\u88AB\u6D82\u6210\u7EFF\u8272\uFF1A

![20231110192011](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192011.png)

\u7740\u8272\u4E3A\u7EFF\u8272\u7684\u5DE5\u4F5C\u901A\u5E38\u8868\u793A\u6D4F\u89C8\u5668\u6B63\u51C6\u5907\u5411\u7528\u6237\u754C\u9762\u751F\u6210\u50CF\u7D20\uFF0C\u5E76\u6B63\u5728\u6267\u884C\uFF08\u6216\u51C6\u5907\u6267\u884C\uFF09\u67D0\u79CD\u4E0E\u56FE\u5F62\u76F8\u5173\u7684\u5DE5\u4F5C\u4EE5\u663E\u793A*Frame*\u3002

## Tying Back to the Trace Overview (\u56DE\u6EAF\u5230\u8DDF\u8E2A\u6982\u8FF0)

\u5728\u63A2\u67E5\u5668\u7684\u9876\u90E8\uFF0C\u6709\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\uFF1A

![20231110192119](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192119.png)

\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5BF9 Profiler \u989C\u8272\u7684\u6269\u5C55\u77E5\u8BC6\u6765\u5FEB\u901F\u53D1\u73B0\u6D3B\u52A8\u6216\u4E0D\u6D3B\u52A8\u533A\u57DF\uFF0C\u5E76\u731C\u6D4B\u6B63\u5728\u53D1\u751F\u7684\u6D3B\u52A8\u7C7B\u578B\u3002

\u4F8B\u5982\uFF0C\u5728\u6211\u7684\u8DDF\u8E2A\u4E2D\uFF0C\u6211\u53EF\u4EE5\u5728\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\u5FEB\u901F\u67E5\u770B\u4E3B\u8981\u53D1\u751F\u7684\u5DE5\u4F5C\u7C7B\u578B\uFF1A

![20231110192150](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192150.png)

\u6B64\u5916\uFF0C\u6211\u8FD8\u53EF\u4EE5\u4F7F\u7528 Profiler \u7684 Selection \u529F\u80FD\u6765\u94BB\u53D6\u611F\u5174\u8DA3\u7684\u533A\u57DF\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u60F3\u67E5\u770B\u6211\u4E0A\u9762\u63D0\u5230\u7684 CSS \u6216 HTML \u89E3\u6790\u5757\u4E2D\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u6211\u53EF\u4EE5\u5C06\u9009\u62E9\u8303\u56F4\u9650\u5B9A\u4E3A\u5B83\uFF1A

![20231110192207](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110192207.png)

\u5728\u8FD9\u91CC\uFF0C\u6211\u53EF\u4EE5\u770B\u5230\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728\u89E3\u6790\u6837\u5F0F\u8868\u3002

`;export{p as content,h as default,o as frontmatter,s as lastUpdatedTime,d as title,l as toc};
