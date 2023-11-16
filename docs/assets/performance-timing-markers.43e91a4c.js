import{jsx as n,jsxs as l,Fragment as a}from"react/jsx-runtime";const o=void 0,i=[{id:"prerequisites\u5148\u51B3\u6761\u4EF6",text:"Prerequisites\xA0\u5148\u51B3\u6761\u4EF6",depth:2},{id:"the-performance-object",text:"The performance object",depth:2},{id:"performancemark",text:"performance.mark()",depth:2},{id:"performancemeasure",text:"performance.measure()",depth:2},{id:"asynchronous-tasks",text:"Asynchronous Tasks",depth:2},{id:"profiler-visualizationprofiler-\u53EF\u89C6\u5316",text:"Profiler Visualization\xA0(Profiler \u53EF\u89C6\u5316)",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],t="\u4F7F\u7528\u6027\u80FD\u65F6\u5E8F\u6807\u8BB0\u8FDB\u884C\u{1F4CF}\u6D4B\u91CF";function s(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",img:"img",ol:"ol"},r.components);return l(a,{children:[l(e.h1,{id:"\u4F7F\u7528\u6027\u80FD\u65F6\u5E8F\u6807\u8BB0\u8FDB\u884C\u6D4B\u91CF",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u6027\u80FD\u65F6\u5E8F\u6807\u8BB0\u8FDB\u884C\u6D4B\u91CF",children:"#"}),"\u4F7F\u7528\u6027\u80FD\u65F6\u5E8F\u6807\u8BB0\u8FDB\u884C\u{1F4CF}\u6D4B\u91CF"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,l(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Measuring with Performance Timing Markers \u{1F4CF}"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/performance-timing-markers/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/performance-timing-markers/"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"\u901A\u8FC7\u6D4B\u91CF\uFF0C\u5DE5\u7A0B\u5E08\u53EF\u4EE5\u786E\u5B9A\u5176\u5E94\u7528\u5728\u8FD0\u884C\u65F6\u7684\u65F6\u95F4\u662F\u5982\u4F55\u82B1\u8D39\u7684\u3002"}),`
`,n(e.p,{children:"\u8BBE\u7F6E\u6B63\u786E\u7684\u6D4B\u91CF\u6709\u52A9\u4E8E\uFF1A"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"\u5EFA\u7ACB\u57FA\u7EBF\u4EE5\u6BD4\u8F83\u672A\u6765\u7684\u4F18\u5316\u6216\u56DE\u5F52"}),`
`,n(e.li,{children:"\u5C06\u5173\u952E\u7528\u6237\u573A\u666F\u63D0\u70BC\u4E3A\u5229\u76CA\u76F8\u5173\u8005\u7684\u53EF\u62A5\u544A\u6307\u6807"}),`
`,n(e.li,{children:"\u91CF\u5316\u65F6\u95F4\u7684\u82B1\u8D39\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u9700\u8981\u6539\u8FDB\u7684\u9886\u57DF"}),`
`]}),`
`,n(e.p,{children:"\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u7528\u6237\u8BA1\u65F6 API\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B API \u6765\u8861\u91CF Web \u5E94\u7528\u7684\u6027\u80FD\u3002"}),`
`,l(e.h2,{id:"prerequisites\u5148\u51B3\u6761\u4EF6",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisites\u5148\u51B3\u6761\u4EF6",children:"#"}),"Prerequisites\xA0\u5148\u51B3\u6761\u4EF6"]}),`
`,n(e.p,{children:"\u6211\u5EFA\u8BAE\u719F\u6089\uFF1A"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["The browser's\xA0",n(e.a,{href:"https://webperf.tips/tip/event-loop",target:"_blank",rel:"nofollow",children:"Event Loop"}),"\xA0\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF"]}),`
`,l(e.li,{children:["The basics of the\xA0",n(e.a,{href:"https://webperf.tips/tip/profiler-basic-ui",target:"_blank",rel:"nofollow",children:"Chromium F12 Profiler"})]}),`
`]}),`
`,l(e.h2,{id:"the-performance-object",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-performance-object",children:"#"}),"The performance object"]}),`
`,l(e.p,{children:["\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u4E00\u4E2A\xA0",n(e.code,{children:"window.performance"}),"\xA0JavaScript \u53EF\u8BBF\u95EE\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B\u5404\u79CD\u4E0E\u6027\u80FD\u76F8\u5173\u7684\u5E2E\u52A9\u7A0B\u5E8F\u3002"]}),`
`,n(e.p,{children:"\u867D\u7136\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u6709\u8BB8\u591A\u6709\u8DA3\u7684\u5C5E\u6027\u9700\u8981\u63A2\u7D22\uFF0C\u4F46\u5728\u8FD9\u4E2A\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u53EA\u8BA8\u8BBA\u4E24\u4E2A\uFF1A"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"performance.mark()"}),"\xA0- used to mark named timestamps"]}),`
`,l(e.li,{children:[n(e.code,{children:"performance.measure()"}),"\xA0- used to measure between named timestamps"]}),`
`]}),`
`,l(e.h2,{id:"performancemark",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#performancemark",children:"#"}),"performance.mark()"]}),`
`,l(e.p,{children:[n(e.code,{children:"performance.mark()"}),"\xA0\u5141\u8BB8 Web \u5F00\u53D1\u4EBA\u5458\u5728\u5E94\u7528\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u4F7F\u7528\u9AD8\u7CBE\u5EA6\u65F6\u95F4\u6233\u5B9A\u4E49\u65F6\u95F4\u70B9\u3002"]}),`
`,l(e.p,{children:["\u5B83\u63A5\u53D7\u4E00\u4E2A\xA0",n(e.code,{children:"name"}),"\xA0\u53C2\u6570\uFF0C\u7528\u4E8E\u6807\u8BC6\u6807\u8BB0\u3002"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"doWork"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the start of Function 1."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"doFunction1"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the end of Function 1."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the start of Function 2."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"doFunction2"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the end of Function 2."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"})]})]}),`
`,l(e.p,{children:["\u6BCF\u6B21\u8C03\u7528 ",n(e.code,{children:"performance.mark()"})," \u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u6761\u76EE\u3002\u6BCF\u4E2A\u6761\u76EE\u90FD\u4F1A\u4FDD\u7559\u8C03\u7528 ",n(e.code,{children:"mark()"})," \u65F6\u7684\u65F6\u95F4\u6233\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110001743.png",alt:"20231110001743"})}),`
`,n(e.p,{children:"\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6027\u80FD\u6807\u8BB0\u4E0D\u4EE3\u8868\u6301\u7EED\u65F6\u95F4\uFF0C\u800C\u4EE3\u8868\u65F6\u95F4\u70B9\u3002"}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:["\u6CE8\u610F\uFF1A\u8BF7\u52FF\u5C06 Date.now() \uFF08\u6216\u7C7B\u4F3C Date \u65B9\u6CD5\uFF09\u7528\u4E8E\u4E0E\u6027\u80FD\u76F8\u5173\u7684\u8BA1\u65F6\u3002 Date \u65F6\u95F4\u6233\u4E0D\u5177\u6709 performance.mark() ",n(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp",target:"_blank",rel:"nofollow",children:"\u9AD8\u5206\u8FA8\u7387\u65F6\u95F4\u6233"}),"\u6240\u5177\u6709\u7684\u9AD8\u7CBE\u5EA6\u7279\u5F81\u3002"]})})]}),`
`,l(e.h2,{id:"performancemeasure",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#performancemeasure",children:"#"}),"performance.measure()"]}),`
`,l(e.p,{children:["\u901A\u8FC7 ",n(e.code,{children:"performance.measure()"})," API\uFF0C\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5728 ",n(e.code,{children:"performance.mark()"})," \u8BBE\u7F6E\u7684\u6807\u8BB0\u4E4B\u95F4\u8FDB\u884C\u6D4B\u91CF\u3002"]}),`
`,l(e.p,{children:["\u9664\u4E86\u4E24\u4E2A\u6807\u8BB0\u4E4B\u5916\uFF0C\u5B83\u8FD8\u63A5\u53D7\u4E00\u4E2A\xA0",n(e.code,{children:"name"}),"\xA0\u53C2\u6570\uFF0C\u7528\u4E8E\u6807\u8BC6\u5EA6\u91CF\u503C\uFF0C\u5E76\u4E14\xA0",n(e.code,{children:"end"}),"\xA0\uFF0C\xA0",n(e.code,{children:"start"}),"\xA0\u5B83\u5E94\u8BE5\u5728\u8FD9\u4E24\u4E2A\u53C2\u6570\u4E4B\u95F4\u8FDB\u884C\u6D4B\u91CF\u3002"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u770B\u4E00\u4E0B\u540C\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5176\u4E2D\u6DFB\u52A0\u4E86\u65B0\u7684\u6027\u80FD\u5EA6\u91CF\uFF1A"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"doWork"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the start of Function 1."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"doFunction1"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the end of Function 1."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the start of Function 2."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"doFunction2"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Mark the end of Function 2."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Now that marks are set, we can measure between them!"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Measure between Function1_Start and Function1_End as a new measure named Measure1 "})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"measure1"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Measure1"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function1_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"log"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Measure1: "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"measure1"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"duration"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Measure between Function2_Start and Function2_End as a new measure named Measure2 "})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"measure2"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Measure2"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Function2_End"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"log"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Measure2: "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"measure2"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"duration"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"}),n(e.span,{className:"line-number",children:"24"}),n(e.span,{className:"line-number",children:"25"}),n(e.span,{className:"line-number",children:"26"}),n(e.span,{className:"line-number",children:"27"}),n(e.span,{className:"line-number",children:"28"}),n(e.span,{className:"line-number",children:"29"})]})]}),`
`,l(e.p,{children:["Each invocation of\xA0",n(e.code,{children:"performance.measure()"}),"\xA0creates a new performance measure, and adds it to the browser's performance timing buffer. It also returns a\xA0",n(e.code,{children:"PerformanceMeasure"}),"\xA0object which has a handy\xA0",n(e.code,{children:"duration"}),"\xA0property, you can send to your telemetry system."]}),`
`,n(e.p,{children:"\u5982\u679C\u6211\u4EEC\u8981\u53EF\u89C6\u5316\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5B83\u770B\u8D77\u6765\u662F\u8FD9\u6837\u7684\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002151.png",alt:"20231110002151"})}),`
`,l(e.h2,{id:"asynchronous-tasks",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#asynchronous-tasks",children:"#"}),"Asynchronous Tasks"]}),`
`,n(e.p,{children:"\u5F53\u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u6267\u884C\u64CD\u4F5C\u65F6\uFF0C\u53EF\u80FD\u4F1A\u8C03\u7528\u4E00\u4E9B\u5F02\u6B65 API\uFF0C\u4F8B\u5982\u8BF7\u6C42\u7F51\u7EDC\u6570\u636E\u6216\u54CD\u5E94\u4E8B\u4EF6\u3002"}),`
`,n(e.p,{children:"\u8FD9\u4E9B API \u5C06\u5BF9\u4EFB\u52A1\u8FDB\u884C\u6392\u961F\uFF0C\u5E76\u5728\u7A0D\u540E\u5728\u7EBF\u7A0B\u4E0A\u6267\u884C\u3002"}),`
`,l(e.p,{children:["You can use\xA0",n(e.code,{children:"performance.mark()"}),"\xA0and\xA0",n(e.code,{children:"performance.measure()"}),"\xA0to understand how long it takes to complete these scenarios across asynchronous operations!"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u8003\u8651\u8FD9\u4E2A\u4F8B\u5B50\uFF1A"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"button"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addEventListener"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"click"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"ButtonClicked"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"fetch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"data.json"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"then"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"res"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"res"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"json"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"())"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"then"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DataRetrieved"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#88C0D0"},children:"renderDialog"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DialogRendered"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Measure time waiting for data to arrive on the thread."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"WaitingForData"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"ButtonClicked"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DataRetrieved"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Measure time required to render the modal once data arrived."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"RenderTime"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DataRetrieved"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DialogRendered"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"})]})]}),`
`,n(e.p,{children:"\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u6D4B\u91CF\u4E24\u4E2A\u65F6\u95F4\u6BB5\uFF0C"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"WaitingForData"}),"\xA0- The time between a user clicking a button and data arriving on the thread"]}),`
`,l(e.li,{children:[n(e.code,{children:"RenderTime"}),"\xA0- The time between data arriving and the DOM updates being completed."]}),`
`]}),`
`,n(e.p,{children:"\u5982\u679C\u6211\u4EEC\u8981\u53EF\u89C6\u5316\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5B83\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002354.png",alt:"20231110002354"})}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),l(e.div,{className:"island-directive-content",children:[l(e.p,{children:[n(e.strong,{children:"Note"}),": Measuring network dependency (",n(e.code,{children:"data.json"}),"\xA0in this example) time in this way doesn't just measure network time -- it measures time for a network resource to be available on the main thread."]}),l(e.p,{children:["Learn more about the differences in this\xA0",n(e.a,{href:"https://webperf.tips/tip/advanced-network-resource-loading",target:"_blank",rel:"nofollow",children:"advanced tip about loading network resources"})]}),l(e.p,{children:[n(e.strong,{children:"Note 2"}),": While we are measuring the time to create the DOM here, we are not including the time for the pixels to appear on the screen. Learn more in my\xA0",n(e.a,{href:"https://webperf.tips/tip/measuring-paint-time",target:"_blank",rel:"nofollow",children:"tip on measuring frame paint time"}),"."]})]})]}),`
`,l(e.h2,{id:"profiler-visualizationprofiler-\u53EF\u89C6\u5316",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#profiler-visualizationprofiler-\u53EF\u89C6\u5316",children:"#"}),"Profiler Visualization\xA0(Profiler \u53EF\u89C6\u5316)"]}),`
`,n(e.p,{children:"\u5728\u5206\u6790\u7528\u6237\u65B9\u6848\u65F6\uFF0C\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\u503C\u975E\u5E38\u65B9\u4FBF\u3002Chromium Profiler \u5B9E\u9645\u4E0A\u4F1A\u5728\u201C\u5206\u6790\u7A97\u683C\u201D\u4E2D\u53EF\u89C6\u5316\u8FD9\u4E9B\u5185\u5BB9\u3002"}),`
`,l(e.p,{children:["\u6211\u5728\u6B64\u6F14\u793A\u9875\u9762\u4E2D\u6C47\u603B\u4E86",n(e.a,{href:"https://webperf.tips/examples/performance-timing-markers/example1/",target:"_blank",rel:"nofollow",children:"\u4E0A\u8FF0\u793A\u4F8B"}),"\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u5206\u6790\u3002"]}),`
`,n(e.p,{children:"\u5982\u679C\u5728\u6536\u96C6\u914D\u7F6E\u6587\u4EF6\u65F6\u5355\u51FB\u793A\u4F8B\u4E2D\u7684\u6309\u94AE\uFF0C\u60A8\u5C06\u5728 Profiler \u7684\u9009\u62E9\u5206\u6790\u7A97\u683C\u7684 Timings \u7A97\u683C\u4E2D\u770B\u5230\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004503.png",alt:"20231110004503"})}),`
`,l(e.p,{children:[`\u540C\u4E0A
`,n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004411.png",alt:"20231110004411"})]}),`
`,n(e.p,{children:"\u53EF\u770B\u51FA\uFF1A"}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:["\u6807\u8BB0\u5C06\u663E\u793A\u5728",n(e.code,{children:"Timings"}),"\u5217\u8868\u3002"]}),`
`,l(e.li,{children:[n(e.code,{children:"performance.measure(name, 'mark1', 'mark2')"}),"\u4E2D\u7684",n(e.code,{children:"name"}),"\u4F1A\u53D8\u4E3A\u957F\u6761\uFF0C\u4E24\u8FB9\u662F\u5F00\u59CB\u548C\u7ED3\u675F\u7684",n(e.code,{children:"mark"})]}),`
`]}),`
`,n(e.p,{children:"\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u6807\u8BB0\u7684\u5EA6\u91CF\u503C\uFF0C\u5E76\u4E14\u6807\u8BB0\u4E5F\u5728\u90A3\u91CC\uFF0C\u5C3D\u7BA1\u5F88\u5C0F\uFF0C\u5E76\u4E14\u9700\u8981\u60AC\u505C\u624D\u80FD\u8BC6\u522B\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004708.png",alt:"20231110004708"})}),`
`,l(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,n(e.p,{children:"\u6709\u4E86\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\uFF0C\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u91CF\u5316\u5E94\u7528\u65B9\u6848\u5728\u8FD0\u884C\u65F6\u7684\u901F\u5EA6\u3002"}),`
`,n(e.p,{children:"You can connect the duration properties of your measures to your telemetry system to build an understanding for how fast scenarios are for real users."})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}const h="2023/11/13 00:40:11",p=`# \u4F7F\u7528\u6027\u80FD\u65F6\u5E8F\u6807\u8BB0\u8FDB\u884C\u{1F4CF}\u6D4B\u91CF


\`metadata:\`

**\u539F\u6807\u9898:** Measuring with Performance Timing Markers \u{1F4CF}

**\u94FE\u63A5:** https://webperf.tips/tip/performance-timing-markers/

---

\u901A\u8FC7\u6D4B\u91CF\uFF0C\u5DE5\u7A0B\u5E08\u53EF\u4EE5\u786E\u5B9A\u5176\u5E94\u7528\u5728\u8FD0\u884C\u65F6\u7684\u65F6\u95F4\u662F\u5982\u4F55\u82B1\u8D39\u7684\u3002

\u8BBE\u7F6E\u6B63\u786E\u7684\u6D4B\u91CF\u6709\u52A9\u4E8E\uFF1A

- \u5EFA\u7ACB\u57FA\u7EBF\u4EE5\u6BD4\u8F83\u672A\u6765\u7684\u4F18\u5316\u6216\u56DE\u5F52
- \u5C06\u5173\u952E\u7528\u6237\u573A\u666F\u63D0\u70BC\u4E3A\u5229\u76CA\u76F8\u5173\u8005\u7684\u53EF\u62A5\u544A\u6307\u6807
- \u91CF\u5316\u65F6\u95F4\u7684\u82B1\u8D39\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u9700\u8981\u6539\u8FDB\u7684\u9886\u57DF

\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u7528\u6237\u8BA1\u65F6 API\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B API \u6765\u8861\u91CF Web \u5E94\u7528\u7684\u6027\u80FD\u3002

## Prerequisites\xA0\u5148\u51B3\u6761\u4EF6

\u6211\u5EFA\u8BAE\u719F\u6089\uFF1A

*   The browser's\xA0[Event Loop](https://webperf.tips/tip/event-loop)\xA0\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF
*   The basics of the\xA0[Chromium F12 Profiler](https://webperf.tips/tip/profiler-basic-ui)  

## The performance object

\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u4E00\u4E2A\xA0\`window.performance\`\xA0JavaScript \u53EF\u8BBF\u95EE\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B\u5404\u79CD\u4E0E\u6027\u80FD\u76F8\u5173\u7684\u5E2E\u52A9\u7A0B\u5E8F\u3002

\u867D\u7136\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u6709\u8BB8\u591A\u6709\u8DA3\u7684\u5C5E\u6027\u9700\u8981\u63A2\u7D22\uFF0C\u4F46\u5728\u8FD9\u4E2A\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u53EA\u8BA8\u8BBA\u4E24\u4E2A\uFF1A

*   \`performance.mark()\`\xA0- used to mark named timestamps  
*   \`performance.measure()\`\xA0- used to measure between named timestamps  

## performance.mark()

\`performance.mark()\`\xA0\u5141\u8BB8 Web \u5F00\u53D1\u4EBA\u5458\u5728\u5E94\u7528\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u4F7F\u7528\u9AD8\u7CBE\u5EA6\u65F6\u95F4\u6233\u5B9A\u4E49\u65F6\u95F4\u70B9\u3002

\u5B83\u63A5\u53D7\u4E00\u4E2A\xA0\`name\`\xA0\u53C2\u6570\uFF0C\u7528\u4E8E\u6807\u8BC6\u6807\u8BB0\u3002

\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A

\`\`\`js
function doWork() {
    // Mark the start of Function 1.
    performance.mark('Function1_Start');

    doFunction1();

    // Mark the end of Function 1.
    performance.mark('Function1_End');

    // Mark the start of Function 2.
    performance.mark('Function2_Start');

    doFunction2();

    // Mark the end of Function 2.
    performance.mark('Function2_End');
}
\`\`\`

\u6BCF\u6B21\u8C03\u7528 \`performance.mark()\` \u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u6761\u76EE\u3002\u6BCF\u4E2A\u6761\u76EE\u90FD\u4F1A\u4FDD\u7559\u8C03\u7528 \`mark()\` \u65F6\u7684\u65F6\u95F4\u6233\u3002

![20231110001743](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110001743.png)

\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6027\u80FD\u6807\u8BB0\u4E0D\u4EE3\u8868\u6301\u7EED\u65F6\u95F4\uFF0C\u800C\u4EE3\u8868\u65F6\u95F4\u70B9\u3002

:::tip
\u6CE8\u610F\uFF1A\u8BF7\u52FF\u5C06 Date.now() \uFF08\u6216\u7C7B\u4F3C Date \u65B9\u6CD5\uFF09\u7528\u4E8E\u4E0E\u6027\u80FD\u76F8\u5173\u7684\u8BA1\u65F6\u3002 Date \u65F6\u95F4\u6233\u4E0D\u5177\u6709 performance.mark() [\u9AD8\u5206\u8FA8\u7387\u65F6\u95F4\u6233](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp)\u6240\u5177\u6709\u7684\u9AD8\u7CBE\u5EA6\u7279\u5F81\u3002
:::

## performance.measure()

\u901A\u8FC7 \`performance.measure()\` API\uFF0C\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5728 \`performance.mark()\` \u8BBE\u7F6E\u7684\u6807\u8BB0\u4E4B\u95F4\u8FDB\u884C\u6D4B\u91CF\u3002

\u9664\u4E86\u4E24\u4E2A\u6807\u8BB0\u4E4B\u5916\uFF0C\u5B83\u8FD8\u63A5\u53D7\u4E00\u4E2A\xA0\`name\`\xA0\u53C2\u6570\uFF0C\u7528\u4E8E\u6807\u8BC6\u5EA6\u91CF\u503C\uFF0C\u5E76\u4E14\xA0\`end\`\xA0\uFF0C\xA0\`start\`\xA0\u5B83\u5E94\u8BE5\u5728\u8FD9\u4E24\u4E2A\u53C2\u6570\u4E4B\u95F4\u8FDB\u884C\u6D4B\u91CF\u3002

\u8BA9\u6211\u4EEC\u770B\u4E00\u4E0B\u540C\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5176\u4E2D\u6DFB\u52A0\u4E86\u65B0\u7684\u6027\u80FD\u5EA6\u91CF\uFF1A

\`\`\`js
function doWork() {
    // Mark the start of Function 1.
    performance.mark('Function1_Start');

    doFunction1();

    // Mark the end of Function 1.
    performance.mark('Function1_End');

    // Mark the start of Function 2.
    performance.mark('Function2_Start');

    doFunction2();

    // Mark the end of Function 2.
    performance.mark('Function2_End');

    // Now that marks are set, we can measure between them!

    // Measure between Function1_Start and Function1_End as a new measure named Measure1 
    const measure1 = performance.measure('Measure1', 'Function1_Start', 'Function1_End');

    console.log('Measure1: ' + measure1.duration);

    // Measure between Function2_Start and Function2_End as a new measure named Measure2 
    const measure2 = performance.measure('Measure2', 'Function2_Start', 'Function2_End');

    console.log('Measure2: ' + measure2.duration);
}
\`\`\`

Each invocation of\xA0\`performance.measure()\`\xA0creates a new performance measure, and adds it to the browser's performance timing buffer. It also returns a\xA0\`PerformanceMeasure\`\xA0object which has a handy\xA0\`duration\`\xA0property, you can send to your telemetry system.

\u5982\u679C\u6211\u4EEC\u8981\u53EF\u89C6\u5316\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5B83\u770B\u8D77\u6765\u662F\u8FD9\u6837\u7684\uFF1A

![20231110002151](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002151.png)

## Asynchronous Tasks

\u5F53\u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u6267\u884C\u64CD\u4F5C\u65F6\uFF0C\u53EF\u80FD\u4F1A\u8C03\u7528\u4E00\u4E9B\u5F02\u6B65 API\uFF0C\u4F8B\u5982\u8BF7\u6C42\u7F51\u7EDC\u6570\u636E\u6216\u54CD\u5E94\u4E8B\u4EF6\u3002

\u8FD9\u4E9B API \u5C06\u5BF9\u4EFB\u52A1\u8FDB\u884C\u6392\u961F\uFF0C\u5E76\u5728\u7A0D\u540E\u5728\u7EBF\u7A0B\u4E0A\u6267\u884C\u3002

You can use\xA0\`performance.mark()\`\xA0and\xA0\`performance.measure()\`\xA0to understand how long it takes to complete these scenarios across asynchronous operations!

\u8BA9\u6211\u4EEC\u8003\u8651\u8FD9\u4E2A\u4F8B\u5B50\uFF1A

\`\`\`js
button.addEventListener('click', () => {
    performance.mark('ButtonClicked');

    fetch('data.json').then(res => res.json()).then(data => {
        performance.mark('DataRetrieved');

        renderDialog(data);

        performance.mark('DialogRendered');

        // Measure time waiting for data to arrive on the thread.
        performance.measure('WaitingForData', 'ButtonClicked', 'DataRetrieved');

        // Measure time required to render the modal once data arrived.
        performance.measure('RenderTime', 'DataRetrieved', 'DialogRendered');
    });
});
\`\`\`

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u6D4B\u91CF\u4E24\u4E2A\u65F6\u95F4\u6BB5\uFF0C

- \`WaitingForData\`\xA0- The time between a user clicking a button and data arriving on the thread
- \`RenderTime\`\xA0- The time between data arriving and the DOM updates being completed.

\u5982\u679C\u6211\u4EEC\u8981\u53EF\u89C6\u5316\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5B83\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A

![20231110002354](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110002354.png)

:::tip
**Note**: Measuring network dependency (\`data.json\`\xA0in this example) time in this way doesn't just measure network time -- it measures time for a network resource to be available on the main thread.  

Learn more about the differences in this\xA0[advanced tip about loading network resources](https://webperf.tips/tip/advanced-network-resource-loading)  

**Note 2**: While we are measuring the time to create the DOM here, we are not including the time for the pixels to appear on the screen. Learn more in my\xA0[tip on measuring frame paint time](https://webperf.tips/tip/measuring-paint-time).  
:::

## Profiler Visualization\xA0(Profiler \u53EF\u89C6\u5316)

\u5728\u5206\u6790\u7528\u6237\u65B9\u6848\u65F6\uFF0C\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\u503C\u975E\u5E38\u65B9\u4FBF\u3002Chromium Profiler \u5B9E\u9645\u4E0A\u4F1A\u5728\u201C\u5206\u6790\u7A97\u683C\u201D\u4E2D\u53EF\u89C6\u5316\u8FD9\u4E9B\u5185\u5BB9\u3002

\u6211\u5728\u6B64\u6F14\u793A\u9875\u9762\u4E2D\u6C47\u603B\u4E86[\u4E0A\u8FF0\u793A\u4F8B](https://webperf.tips/examples/performance-timing-markers/example1/)\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u5206\u6790\u3002

\u5982\u679C\u5728\u6536\u96C6\u914D\u7F6E\u6587\u4EF6\u65F6\u5355\u51FB\u793A\u4F8B\u4E2D\u7684\u6309\u94AE\uFF0C\u60A8\u5C06\u5728 Profiler \u7684\u9009\u62E9\u5206\u6790\u7A97\u683C\u7684 Timings \u7A97\u683C\u4E2D\u770B\u5230\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\uFF1A

![20231110004503](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004503.png)

\u540C\u4E0A
![20231110004411](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004411.png)

\u53EF\u770B\u51FA\uFF1A
1. \u6807\u8BB0\u5C06\u663E\u793A\u5728\`Timings\`\u5217\u8868\u3002
2. \`performance.measure(name, 'mark1', 'mark2')\`\u4E2D\u7684\`name\`\u4F1A\u53D8\u4E3A\u957F\u6761\uFF0C\u4E24\u8FB9\u662F\u5F00\u59CB\u548C\u7ED3\u675F\u7684\`mark\`

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u6807\u8BB0\u7684\u5EA6\u91CF\u503C\uFF0C\u5E76\u4E14\u6807\u8BB0\u4E5F\u5728\u90A3\u91CC\uFF0C\u5C3D\u7BA1\u5F88\u5C0F\uFF0C\u5E76\u4E14\u9700\u8981\u60AC\u505C\u624D\u80FD\u8BC6\u522B\uFF1A

![20231110004708](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110004708.png)

## Conclusion

\u6709\u4E86\u6027\u80FD\u6807\u8BB0\u548C\u5EA6\u91CF\uFF0C\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u91CF\u5316\u5E94\u7528\u65B9\u6848\u5728\u8FD0\u884C\u65F6\u7684\u901F\u5EA6\u3002

You can connect the duration properties of your measures to your telemetry system to build an understanding for how fast scenarios are for real users.















`;export{p as content,d as default,o as frontmatter,h as lastUpdatedTime,t as title,i as toc};
