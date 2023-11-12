import{jsx as l,jsxs as e,Fragment as r}from"react/jsx-runtime";const i=void 0,o=[{id:"a-simple-example",text:"A Simple Example",depth:2},{id:"more-complex-examples\u66F4\u590D\u6742\u7684\u793A\u4F8B",text:"More complex examples\xA0\u66F4\u590D\u6742\u7684\u793A\u4F8B",depth:2},{id:"traditional-flamegraphs-vs-chromium-profiler-icicle-graphs--\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E-chromium-profiler-\u51B0\u67F1\u56FE",text:"Traditional Flamegraphs vs. Chromium Profiler Icicle Graphs  (\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E Chromium Profiler \u51B0\u67F1\u56FE)",depth:2},{id:"looking-at-a-real-graph-\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868",text:"Looking at a real graph (\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868)",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],h="\u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE \u{1F525}";function c(s){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",img:"img",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",ul:"ul",li:"li"},s.components);return e(r,{children:[e(n.h1,{id:"\u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE-",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE-",children:"#"}),"\u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE \u{1F525}"]}),`
`,l(n.p,{children:l(n.code,{children:"metadata:"})}),`
`,e(n.p,{children:[l(n.strong,{children:"\u539F\u6807\u9898:"})," How to Read Flamegraphs \u{1F525}"]}),`
`,e(n.p,{children:[l(n.strong,{children:"\u94FE\u63A5:"})," ",l(n.a,{href:"https://webperf.tips/tip/understanding-flamegraphs/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/understanding-flamegraphs/"})]}),`
`,l(n.hr,{}),`
`,l(n.p,{children:"\u706B\u7130\u56FE\u662F\u76F4\u89C2\u5730\u8868\u793A\u8FD0\u884C\u65F6\u4EE3\u7801\u5806\u6808\u8DDF\u8E2A\u53CA\u5176\u5404\u81EA\u4F5C\u4E3A\u5C42\u6B21\u7ED3\u6784\u6267\u884C\u7684\u65F6\u95F4\u7684\u884C\u4E1A\u6807\u51C6\u65B9\u6CD5\u3002"}),`
`,l(n.p,{children:"\u8FD9\u4E9B\u56FE\u5F62\u65E8\u5728\u5E2E\u52A9\u5DE5\u7A0B\u5E08\u5FEB\u901F\u8BC6\u522B\u74F6\u9888\u5E76\u9891\u7E41\u8FD0\u884C\u4EE3\u7801\u8DEF\u5F84\u3002"}),`
`,l(n.p,{children:"\u4EE5\u4E0B\u662F Chromium Profiler \u751F\u6210\u7684\u706B\u7130\u56FE\u793A\u4F8B\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110160858.png",alt:"20231110160858"})}),`
`,e(n.h2,{id:"a-simple-example",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#a-simple-example",children:"#"}),"A Simple Example"]}),`
`,l(n.p,{children:"\u8BF7\u8003\u8651\u4EE5\u4E0B\u529F\u80FD\uFF1A"}),`
`,e(n.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// Do something for 50ms"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"while"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"() "}),l(n.span,{style:{color:"#81A1C1"},children:"-"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"50"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#616E88"},children:"/* block the thread */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line"})]})}),e(n.div,{className:"line-numbers-wrapper",children:[l(n.span,{className:"line-number",children:"1"}),l(n.span,{className:"line-number",children:"2"}),l(n.span,{className:"line-number",children:"3"}),l(n.span,{className:"line-number",children:"4"}),l(n.span,{className:"line-number",children:"5"}),l(n.span,{className:"line-number",children:"6"}),l(n.span,{className:"line-number",children:"7"}),l(n.span,{className:"line-number",children:"8"}),l(n.span,{className:"line-number",children:"9"}),l(n.span,{className:"line-number",children:"10"}),l(n.span,{className:"line-number",children:"11"}),l(n.span,{className:"line-number",children:"12"}),l(n.span,{className:"line-number",children:"13"}),l(n.span,{className:"line-number",children:"14"}),l(n.span,{className:"line-number",children:"15"}),l(n.span,{className:"line-number",children:"16"}),l(n.span,{className:"line-number",children:"17"})]})]}),`
`,e(n.p,{children:["\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\xA0",l(n.code,{children:"function a()"}),"\xA0\u8C03\u7528\xA0",l(n.code,{children:"function b()"}),"\xA0\u548C\xA0",l(n.code,{children:"function b()"}),"\xA0\u8C03\u7528\xA0",l(n.code,{children:"function c()"}),"\xA0\u3002"]}),`
`,e(n.p,{children:["\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\xA0",l(n.code,{children:"function c()"}),"\xA0\u9700\u8981 50 \u6BEB\u79D2\u624D\u80FD\u5B8C\u6210\u3002"]}),`
`,l(n.p,{children:"\u4E3A\u4E86\u5C06\u6B64\u8C03\u7528\u5806\u6808\u8868\u793A\u4E3A\u706B\u7130\u56FE\uFF0C\u6211\u4EEC\u5C06\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110161609.png",alt:"20231110161609"})}),`
`,e(n.h2,{id:"more-complex-examples\u66F4\u590D\u6742\u7684\u793A\u4F8B",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#more-complex-examples\u66F4\u590D\u6742\u7684\u793A\u4F8B",children:"#"}),"More complex examples\xA0\u66F4\u590D\u6742\u7684\u793A\u4F8B"]}),`
`,e(n.p,{children:["\u8BA9\u6211\u4EEC\u8C03\u6574\xA0",l(n.code,{children:"function b()"}),"\xA0\u4E3A\u8C03\u7528\xA0",l(n.code,{children:"function c()"}),"\xA03 \u6B21\uFF0C\u800C\u4E0D\u662F\u53EA\u8C03\u7528\u4E00\u6B21\u3002"]}),`
`,e(n.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// Do something for 50ms"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"while"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"() "}),l(n.span,{style:{color:"#81A1C1"},children:"-"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"50"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#616E88"},children:"/* block the thread */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line"})]})}),e(n.div,{className:"line-numbers-wrapper",children:[l(n.span,{className:"line-number",children:"1"}),l(n.span,{className:"line-number",children:"2"}),l(n.span,{className:"line-number",children:"3"}),l(n.span,{className:"line-number",children:"4"}),l(n.span,{className:"line-number",children:"5"}),l(n.span,{className:"line-number",children:"6"}),l(n.span,{className:"line-number",children:"7"}),l(n.span,{className:"line-number",children:"8"}),l(n.span,{className:"line-number",children:"9"}),l(n.span,{className:"line-number",children:"10"}),l(n.span,{className:"line-number",children:"11"}),l(n.span,{className:"line-number",children:"12"}),l(n.span,{className:"line-number",children:"13"}),l(n.span,{className:"line-number",children:"14"}),l(n.span,{className:"line-number",children:"15"}),l(n.span,{className:"line-number",children:"16"}),l(n.span,{className:"line-number",children:"17"}),l(n.span,{className:"line-number",children:"18"}),l(n.span,{className:"line-number",children:"19"})]})]}),`
`,e(n.p,{children:["\u8FD9\u5C06\u542F\u52A8 3 \u6B21\xA0",l(n.code,{children:"function c()"}),"\xA0\u8C03\u7528\uFF0C\u6BCF\u6B21\u8C03\u7528\u9700\u8981 50 \u6BEB\u79D2\u3002"]}),`
`,l(n.p,{children:"\u751F\u6210\u7684\u706B\u7130\u56FE\u5C06\u5982\u4E0B\u6240\u793A\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162006.png",alt:"20231110162006"})}),`
`,l(n.p,{children:"\u8BF7\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[l(n.code,{children:"function c()"}),"\xA0\u7528 3 \u4E2A\u72EC\u7ACB\u7684 50ms \u5757\u8868\u793A\uFF0C\u6BCF\u4E2A\u5757\u6709 50ms \u7684\u7D2F\u79EF\u65F6\u95F4\u3002"]}),`
`,e(n.li,{children:[l(n.code,{children:"function b()"}),"\xA0\u8868\u793A\u4E3A 1\u4E2A 150ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 150ms\u3002"]}),`
`,e(n.li,{children:[l(n.code,{children:"function a()"}),"\xA0\u8868\u793A\u4E3A 1\u4E2A 150ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 150ms\u3002"]}),`
`]}),`
`,e(n.div,{className:"island-directive warning",children:[l(n.p,{className:"island-directive-title",children:"WARNING"}),l(n.div,{className:"island-directive-content",children:e(n.p,{children:["\u4F46\u5B9E\u6D4B\u5355\u4E2A",l(n.code,{children:"c"}),"\u7684",l(n.code,{children:"50ms"}),"\u88AB\u5206\u6210\u4E86\u591A\u4E2A\u5757\uFF0C\u6BCF\u4E2A\u4E0D\u8DB3",l(n.code,{children:"50ms"}),"\uFF0C\u603B\u5171\u591A\u4E2A3\u4E2A\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\uFF1F"]})})]}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162327.png",alt:"20231110162327"})}),`
`,e(n.p,{children:["\u8BA9\u6211\u4EEC\u518D\u8FDB\u884C\u4E00\u6B21\u8C03\u6574\u5E76\u751F\u6210\u53E6\u4E00\u4E2A\u706B\u7130\u56FE\uFF0C\u8FD9\u6B21\u662F\xA0",l(n.code,{children:"function a()"}),"\xA0."]}),`
`,e(n.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// Do something for 50ms"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"while"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"() "}),l(n.span,{style:{color:"#81A1C1"},children:"-"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"50"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#616E88"},children:"/* block the thread */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line"})]})}),e(n.div,{className:"line-numbers-wrapper",children:[l(n.span,{className:"line-number",children:"1"}),l(n.span,{className:"line-number",children:"2"}),l(n.span,{className:"line-number",children:"3"}),l(n.span,{className:"line-number",children:"4"}),l(n.span,{className:"line-number",children:"5"}),l(n.span,{className:"line-number",children:"6"}),l(n.span,{className:"line-number",children:"7"}),l(n.span,{className:"line-number",children:"8"}),l(n.span,{className:"line-number",children:"9"}),l(n.span,{className:"line-number",children:"10"}),l(n.span,{className:"line-number",children:"11"}),l(n.span,{className:"line-number",children:"12"}),l(n.span,{className:"line-number",children:"13"}),l(n.span,{className:"line-number",children:"14"}),l(n.span,{className:"line-number",children:"15"}),l(n.span,{className:"line-number",children:"16"}),l(n.span,{className:"line-number",children:"17"}),l(n.span,{className:"line-number",children:"18"}),l(n.span,{className:"line-number",children:"19"}),l(n.span,{className:"line-number",children:"20"})]})]}),`
`,e(n.p,{children:["\u73B0\u5728\uFF0C\xA0",l(n.code,{children:"function a()"}),"\xA0\u8C03\u7528\xA0",l(n.code,{children:"function b()"}),"\xA0\u4E24\u6B21\u3002"]}),`
`,l(n.p,{children:"\u751F\u6210\u7684\u706B\u7130\u56FE\u5C06\u5982\u4E0B\u6240\u793A\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162602.png",alt:"20231110162602"})}),`
`,l(n.p,{children:"\u8BF7\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[l(n.code,{children:"function c()"}),"\xA0\u4EE5 6 \u4E2A\u72EC\u7ACB\u7684 50ms \u5757\u8868\u793A\uFF0C\u6BCF\u4E2A\u5757\u6709 50ms \u7684\u7D2F\u79EF\u65F6\u95F4\u3002"]}),`
`,e(n.li,{children:[l(n.code,{children:"function b()"}),"\xA0\u8868\u793A\u4E3A2\u4E2A150ms\u5757\uFF0C\u6BCF\u4E2A\u5757\u7684\u7D2F\u8BA1\u65F6\u95F4\u4E3A150ms\u3002"]}),`
`,e(n.li,{children:[l(n.code,{children:"function a()"}),"\xA0\u8868\u793A\u4E3A 1 300ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 300ms\u3002"]}),`
`]}),`
`,e(n.p,{children:[`\u5B9E\u9645\u8FD0\u884C\u56FE\uFF1A
`,l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162811.png",alt:"20231110162811"})]}),`
`,e(n.h2,{id:"traditional-flamegraphs-vs-chromium-profiler-icicle-graphs--\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E-chromium-profiler-\u51B0\u67F1\u56FE",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#traditional-flamegraphs-vs-chromium-profiler-icicle-graphs--\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E-chromium-profiler-\u51B0\u67F1\u56FE",children:"#"}),"Traditional Flamegraphs vs. Chromium Profiler Icicle Graphs  (\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E Chromium Profiler \u51B0\u67F1\u56FE)"]}),`
`,l(n.p,{children:"\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u5728\u793A\u4F8B\u4E2D\u5C55\u793A\u7684\u706B\u7130\u56FE\u662F\u4F20\u7EDF\u7684\u706B\u7130\u56FE\u3002\u8BB8\u591A\u6027\u80FD\u63A2\u67E5\u5668\u5C06\u751F\u6210\u4E0E\u6211\u6240\u5C55\u793A\u7684\u5B8C\u5168\u76F8\u540C\u7684\u56FE\u5F62\u3002"}),`
`,e(n.p,{children:["\u4F46\u662F\uFF0CChromium F12 \u6027\u80FD\u5206\u6790\u5668\u4F1A\u751F\u6210\u4F20\u7EDF\u706B\u7130\u56FE\u7684\u53D8\u4F53\uFF0C\u79F0\u4E3A",l(n.strong,{children:"\u51B0\u67F1\u56FE"}),"\u3002"]}),`
`,l(n.p,{children:"\u51B0\u67F1\u56FE\u663E\u793A\u7684\u6570\u636E\u4E0E\u706B\u7130\u56FE\u5B8C\u5168\u76F8\u540C\uFF0C\u53EA\u662F\u7FFB\u8F6C\u4E86 y \u8F74\u65B9\u5411\u3002"}),`
`,l(n.p,{children:"\u4F8B\u5982\uFF0C\u5728\u6700\u540E\u4E00\u4E2A\u793A\u4F8B\u4E2D\uFF0CChromium F12 \u6027\u80FD\u5206\u6790\u5668\u51B0\u67F1\u56FE\u5982\u4E0B\u6240\u793A\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162906.png",alt:"20231110162906"})}),`
`,e(n.h2,{id:"looking-at-a-real-graph-\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#looking-at-a-real-graph-\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868",children:"#"}),"Looking at a real graph (\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868)"]}),`
`,l(n.p,{children:"\u6211\u6355\u83B7\u4E86\u6211\u4EEC\u5F15\u7528\u7684\u793A\u4F8B\u4EE3\u7801\u7684 Chromium \u6027\u80FD\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u5C31\u662F\u751F\u6210\u7684\u51B0\u67F1\u56FE\uFF01"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110163015.png",alt:"20231110163015"})}),`
`,e(n.p,{children:["\u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8E\u5206\u6790\u5668\u5728\u8FD0\u884C\u65F6\u8DDF\u8E2A\u6D4F\u89C8\u5668\u65F6\u6536\u96C6\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5728\u201C\u4E3B\u201D\u7A97\u683C\u4E2D\u770B\u4E0D\u5230 50 \u6BEB\u79D2\u7684\xA0",l(n.code,{children:"function c()"}),"\xA0\u5757\u548C\xA0",l(n.code,{children:"function b()"}),"\xA0\u8C03\u7528\u3002\u56E0\u6B64\u6DFB\u52A0",l(n.a,{href:"/chrome/performance/tips/performance-timing-markers",children:"\u81EA\u5B9A\u4E49\u6027\u80FD\u8BA1\u65F6\u6807\u8BB0"}),"\u53EF\u4EE5\u5C06\u5206\u6790\u5668\u6536\u96C6\u7684\u5185\u5BB9\u4E0E\u201C\u8BA1\u65F6\u201D\u7A97\u683C\u4E2D\u6355\u83B7\u7684\u66F4\u7CBE\u786E\u7684\u81EA\u5B9A\u4E49\u6807\u8BB0\u8FDB\u884C\u6BD4\u8F83\u3002"]}),`
`,e(n.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line highlighted",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"let"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"i"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"0"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line highlighted",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"performance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"mark"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#A3BE8C"},children:"c() called "}),l(n.span,{style:{color:"#81A1C1"},children:"${"}),l(n.span,{style:{color:"#D8DEE9"},children:"i"}),l(n.span,{style:{color:"#81A1C1"},children:"++"}),l(n.span,{style:{color:"#81A1C1"},children:"}"}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"      "}),l(n.span,{style:{color:"#616E88"},children:"// Do something for 50ms"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"while"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"Date"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"now"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"() "}),l(n.span,{style:{color:"#81A1C1"},children:"-"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"start"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"50"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#616E88"},children:"/* block the thread */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"c"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"b"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line highlighted",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"performance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"mark"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"c() called end"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"a"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line"})]})}),e(n.div,{className:"line-numbers-wrapper",children:[l(n.span,{className:"line-number",children:"1"}),l(n.span,{className:"line-number",children:"2"}),l(n.span,{className:"line-number",children:"3"}),l(n.span,{className:"line-number",children:"4"}),l(n.span,{className:"line-number",children:"5"}),l(n.span,{className:"line-number",children:"6"}),l(n.span,{className:"line-number",children:"7"}),l(n.span,{className:"line-number",children:"8"}),l(n.span,{className:"line-number",children:"9"}),l(n.span,{className:"line-number",children:"10"}),l(n.span,{className:"line-number",children:"11"}),l(n.span,{className:"line-number",children:"12"}),l(n.span,{className:"line-number",children:"13"}),l(n.span,{className:"line-number",children:"14"}),l(n.span,{className:"line-number",children:"15"}),l(n.span,{className:"line-number",children:"16"}),l(n.span,{className:"line-number",children:"17"}),l(n.span,{className:"line-number",children:"18"}),l(n.span,{className:"line-number",children:"19"}),l(n.span,{className:"line-number",children:"20"}),l(n.span,{className:"line-number",children:"21"}),l(n.span,{className:"line-number",children:"22"}),l(n.span,{className:"line-number",children:"23"})]})]}),`
`,l(n.p,{children:"\u5B9E\u6D4B\u56FE\uFF1A"}),`
`,l(n.p,{children:l(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110164309.png",alt:"20231110164309"})}),`
`,l(n.p,{children:"\u8FD9\u91CC\u771F\u6B63\u91CD\u8981\u7684\u662F\uFF0C\u60A8\u53EF\u4EE5\u68C0\u67E5\u8C03\u7528\u5806\u6808\u4E2D\u6BCF\u4E2A\u51FD\u6570\u7684\u7D2F\u79EF\u65F6\u95F4\uFF0C\u5E76\u67E5\u770B\u54EA\u4E9B\u51FD\u6570\u8C03\u7528\u52A0\u8D77\u6765\u8FBE\u5230 302.42 \u6BEB\u79D2\u7684\u7D2F\u79EF\u65F6\u95F4\u3002"}),`
`,l(n.p,{children:"\u4ECE\u4E3B\u7A97\u683C\u4E2D\u6355\u83B7\u7684\u56FE\u5F62\u4E2D\u53EF\u4EE5\u6E05\u695A\u5730\u770B\u51FA\u4EC0\u4E48\uFF1A"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"\u6709\u4E00\u4E2A JavaScript \u6267\u884C\u4EFB\u52A1\uFF0C\u7D2F\u8BA1\u65F6\u95F4\u4E3A 302.42ms"}),`
`,e(n.li,{children:["\u6B64\u4EFB\u52A1\u5177\u6709\u76F8\u5F53\u77ED\u7684\u8C03\u7528\u5806\u6808\uFF084 \u4E2A\u5806\u6808\u5E27\uFF09\uFF1A\xA0",l(n.code,{children:"(anonymous)"}),"\xA0\u3001\u3001\xA0",l(n.code,{children:"a"}),"\xA0\u548C\xA0",l(n.code,{children:"b"}),"\xA0",l(n.code,{children:"c"})]}),`
`,e(n.li,{children:["\u5806\u6808\u5E27\xA0",l(n.code,{children:"c"}),"\xA0\u4EE5\u9AD8\u9891\u7387\u8C03\u7528\uFF0C\u5E76\u4E14\u662F JavaScript \u4EFB\u52A1 302.42ms \u7D2F\u79EF\u65F6\u95F4\u7684\u552F\u4E00\u8D21\u732E\u8005\u3002"]}),`
`]}),`
`,e(n.h2,{id:"conclusion",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,l(n.p,{children:"\u60A8\u73B0\u5728\u4E86\u89E3\u5E76\u53EF\u4EE5\u9605\u8BFB\u57FA\u672C\u7684\u706B\u7130\u56FE\uFF01"}),`
`,e(n.p,{children:["\u8003\u8651",l(n.a,{href:"https://webperf.tips/tip/flamegraphs-in-depth",target:"_blank",rel:"nofollow",children:"\u6DF1\u5165\u706B\u7130\u56FE\u63D0\u793A"}),"\uFF0C\u4EE5\u9605\u8BFB\u66F4\u591A\u9AD8\u7EA7\u706B\u7130\u56FE\uFF01"]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?l(n,Object.assign({},s,{children:l(c,s)})):c(s)}const p="Invalid Date",t=`# \u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE \u{1F525}

\`metadata:\`

**\u539F\u6807\u9898:** How to Read Flamegraphs \u{1F525}

**\u94FE\u63A5:** https://webperf.tips/tip/understanding-flamegraphs/

---

\u706B\u7130\u56FE\u662F\u76F4\u89C2\u5730\u8868\u793A\u8FD0\u884C\u65F6\u4EE3\u7801\u5806\u6808\u8DDF\u8E2A\u53CA\u5176\u5404\u81EA\u4F5C\u4E3A\u5C42\u6B21\u7ED3\u6784\u6267\u884C\u7684\u65F6\u95F4\u7684\u884C\u4E1A\u6807\u51C6\u65B9\u6CD5\u3002

\u8FD9\u4E9B\u56FE\u5F62\u65E8\u5728\u5E2E\u52A9\u5DE5\u7A0B\u5E08\u5FEB\u901F\u8BC6\u522B\u74F6\u9888\u5E76\u9891\u7E41\u8FD0\u884C\u4EE3\u7801\u8DEF\u5F84\u3002

\u4EE5\u4E0B\u662F Chromium Profiler \u751F\u6210\u7684\u706B\u7130\u56FE\u793A\u4F8B\uFF1A

![20231110160858](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110160858.png)

## A Simple Example

\u8BF7\u8003\u8651\u4EE5\u4E0B\u529F\u80FD\uFF1A

\`\`\`js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
}

function a() {
    b();
}

a();
\`\`\`

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\xA0\`function a()\`\xA0\u8C03\u7528\xA0\`function b()\`\xA0\u548C\xA0\`function b()\`\xA0\u8C03\u7528\xA0\`function c()\`\xA0\u3002

\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\xA0\`function c()\`\xA0\u9700\u8981 50 \u6BEB\u79D2\u624D\u80FD\u5B8C\u6210\u3002

\u4E3A\u4E86\u5C06\u6B64\u8C03\u7528\u5806\u6808\u8868\u793A\u4E3A\u706B\u7130\u56FE\uFF0C\u6211\u4EEC\u5C06\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A

![20231110161609](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110161609.png)

## More complex examples\xA0\u66F4\u590D\u6742\u7684\u793A\u4F8B

\u8BA9\u6211\u4EEC\u8C03\u6574\xA0\`function b()\`\xA0\u4E3A\u8C03\u7528\xA0\`function c()\`\xA03 \u6B21\uFF0C\u800C\u4E0D\u662F\u53EA\u8C03\u7528\u4E00\u6B21\u3002

\`\`\`js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
    c();
    c();
}

function a() {
    b();
}

a();
\`\`\`

\u8FD9\u5C06\u542F\u52A8 3 \u6B21\xA0\`function c()\`\xA0\u8C03\u7528\uFF0C\u6BCF\u6B21\u8C03\u7528\u9700\u8981 50 \u6BEB\u79D2\u3002

\u751F\u6210\u7684\u706B\u7130\u56FE\u5C06\u5982\u4E0B\u6240\u793A\uFF1A

![20231110162006](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162006.png)

\u8BF7\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A

*   \`function c()\`\xA0\u7528 3 \u4E2A\u72EC\u7ACB\u7684 50ms \u5757\u8868\u793A\uFF0C\u6BCF\u4E2A\u5757\u6709 50ms \u7684\u7D2F\u79EF\u65F6\u95F4\u3002
*   \`function b()\`\xA0\u8868\u793A\u4E3A 1\u4E2A 150ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 150ms\u3002
*   \`function a()\`\xA0\u8868\u793A\u4E3A 1\u4E2A 150ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 150ms\u3002

:::warning
\u4F46\u5B9E\u6D4B\u5355\u4E2A\`c\`\u7684\`50ms\`\u88AB\u5206\u6210\u4E86\u591A\u4E2A\u5757\uFF0C\u6BCF\u4E2A\u4E0D\u8DB3\`50ms\`\uFF0C\u603B\u5171\u591A\u4E2A3\u4E2A\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\uFF1F
:::

![20231110162327](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162327.png)


\u8BA9\u6211\u4EEC\u518D\u8FDB\u884C\u4E00\u6B21\u8C03\u6574\u5E76\u751F\u6210\u53E6\u4E00\u4E2A\u706B\u7130\u56FE\uFF0C\u8FD9\u6B21\u662F\xA0\`function a()\`\xA0.

\`\`\`js
function c() {
    // Do something for 50ms
    const start = Date.now();
    while (Date.now() - start < 50) {
        /* block the thread */
    }
}

function b() {
    c();
    c();
    c();
}

function a() {
    b();
    b();
}

a();
\`\`\`
\u73B0\u5728\uFF0C\xA0\`function a()\`\xA0\u8C03\u7528\xA0\`function b()\`\xA0\u4E24\u6B21\u3002

\u751F\u6210\u7684\u706B\u7130\u56FE\u5C06\u5982\u4E0B\u6240\u793A\uFF1A

![20231110162602](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162602.png)

\u8BF7\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A

*   \`function c()\`\xA0\u4EE5 6 \u4E2A\u72EC\u7ACB\u7684 50ms \u5757\u8868\u793A\uFF0C\u6BCF\u4E2A\u5757\u6709 50ms \u7684\u7D2F\u79EF\u65F6\u95F4\u3002
*   \`function b()\`\xA0\u8868\u793A\u4E3A2\u4E2A150ms\u5757\uFF0C\u6BCF\u4E2A\u5757\u7684\u7D2F\u8BA1\u65F6\u95F4\u4E3A150ms\u3002
*   \`function a()\`\xA0\u8868\u793A\u4E3A 1 300ms \u5757\uFF0C\u56E0\u6B64\u5176\u7D2F\u8BA1\u65F6\u95F4\u4E3A 300ms\u3002

\u5B9E\u9645\u8FD0\u884C\u56FE\uFF1A
![20231110162811](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162811.png)

## Traditional Flamegraphs vs. Chromium Profiler Icicle Graphs  (\u4F20\u7EDF\u706B\u7130\u56FE\u4E0E Chromium Profiler \u51B0\u67F1\u56FE)

\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u5728\u793A\u4F8B\u4E2D\u5C55\u793A\u7684\u706B\u7130\u56FE\u662F\u4F20\u7EDF\u7684\u706B\u7130\u56FE\u3002\u8BB8\u591A\u6027\u80FD\u63A2\u67E5\u5668\u5C06\u751F\u6210\u4E0E\u6211\u6240\u5C55\u793A\u7684\u5B8C\u5168\u76F8\u540C\u7684\u56FE\u5F62\u3002

\u4F46\u662F\uFF0CChromium F12 \u6027\u80FD\u5206\u6790\u5668\u4F1A\u751F\u6210\u4F20\u7EDF\u706B\u7130\u56FE\u7684\u53D8\u4F53\uFF0C\u79F0\u4E3A**\u51B0\u67F1\u56FE**\u3002

\u51B0\u67F1\u56FE\u663E\u793A\u7684\u6570\u636E\u4E0E\u706B\u7130\u56FE\u5B8C\u5168\u76F8\u540C\uFF0C\u53EA\u662F\u7FFB\u8F6C\u4E86 y \u8F74\u65B9\u5411\u3002

\u4F8B\u5982\uFF0C\u5728\u6700\u540E\u4E00\u4E2A\u793A\u4F8B\u4E2D\uFF0CChromium F12 \u6027\u80FD\u5206\u6790\u5668\u51B0\u67F1\u56FE\u5982\u4E0B\u6240\u793A\uFF1A

![20231110162906](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110162906.png)

## Looking at a real graph (\u770B\u4E00\u4E2A\u771F\u5B9E\u7684\u56FE\u8868)

\u6211\u6355\u83B7\u4E86\u6211\u4EEC\u5F15\u7528\u7684\u793A\u4F8B\u4EE3\u7801\u7684 Chromium \u6027\u80FD\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u5C31\u662F\u751F\u6210\u7684\u51B0\u67F1\u56FE\uFF01

![20231110163015](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110163015.png)

\u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8E\u5206\u6790\u5668\u5728\u8FD0\u884C\u65F6\u8DDF\u8E2A\u6D4F\u89C8\u5668\u65F6\u6536\u96C6\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5728\u201C\u4E3B\u201D\u7A97\u683C\u4E2D\u770B\u4E0D\u5230 50 \u6BEB\u79D2\u7684\xA0\`function c()\`\xA0\u5757\u548C\xA0\`function b()\`\xA0\u8C03\u7528\u3002\u56E0\u6B64\u6DFB\u52A0[\u81EA\u5B9A\u4E49\u6027\u80FD\u8BA1\u65F6\u6807\u8BB0](./performance-timing-markers.md)\u53EF\u4EE5\u5C06\u5206\u6790\u5668\u6536\u96C6\u7684\u5185\u5BB9\u4E0E\u201C\u8BA1\u65F6\u201D\u7A97\u683C\u4E2D\u6355\u83B7\u7684\u66F4\u7CBE\u786E\u7684\u81EA\u5B9A\u4E49\u6807\u8BB0\u8FDB\u884C\u6BD4\u8F83\u3002

\`\`\`js{1,3,20}
    let i = 0;
    function c() {
      performance.mark(\`c() called \${i++}\`)
      // Do something for 50ms
      const start = Date.now();
      while (Date.now() - start < 50) {
        /* block the thread */
      }
    }

    function b() {
      c();
      c();
      c();
    }

    function a() {
      b();
      b();
      performance.mark('c() called end')
    }

    a();
\`\`\`
\u5B9E\u6D4B\u56FE\uFF1A

![20231110164309](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110164309.png)

\u8FD9\u91CC\u771F\u6B63\u91CD\u8981\u7684\u662F\uFF0C\u60A8\u53EF\u4EE5\u68C0\u67E5\u8C03\u7528\u5806\u6808\u4E2D\u6BCF\u4E2A\u51FD\u6570\u7684\u7D2F\u79EF\u65F6\u95F4\uFF0C\u5E76\u67E5\u770B\u54EA\u4E9B\u51FD\u6570\u8C03\u7528\u52A0\u8D77\u6765\u8FBE\u5230 302.42 \u6BEB\u79D2\u7684\u7D2F\u79EF\u65F6\u95F4\u3002

\u4ECE\u4E3B\u7A97\u683C\u4E2D\u6355\u83B7\u7684\u56FE\u5F62\u4E2D\u53EF\u4EE5\u6E05\u695A\u5730\u770B\u51FA\u4EC0\u4E48\uFF1A

*   \u6709\u4E00\u4E2A JavaScript \u6267\u884C\u4EFB\u52A1\uFF0C\u7D2F\u8BA1\u65F6\u95F4\u4E3A 302.42ms
*   \u6B64\u4EFB\u52A1\u5177\u6709\u76F8\u5F53\u77ED\u7684\u8C03\u7528\u5806\u6808\uFF084 \u4E2A\u5806\u6808\u5E27\uFF09\uFF1A\xA0\`(anonymous)\`\xA0\u3001\u3001\xA0\`a\`\xA0\u548C\xA0\`b\`\xA0\`c\`
*   \u5806\u6808\u5E27\xA0\`c\`\xA0\u4EE5\u9AD8\u9891\u7387\u8C03\u7528\uFF0C\u5E76\u4E14\u662F JavaScript \u4EFB\u52A1 302.42ms \u7D2F\u79EF\u65F6\u95F4\u7684\u552F\u4E00\u8D21\u732E\u8005\u3002

## Conclusion

\u60A8\u73B0\u5728\u4E86\u89E3\u5E76\u53EF\u4EE5\u9605\u8BFB\u57FA\u672C\u7684\u706B\u7130\u56FE\uFF01

\u8003\u8651[\u6DF1\u5165\u706B\u7130\u56FE\u63D0\u793A](https://webperf.tips/tip/flamegraphs-in-depth)\uFF0C\u4EE5\u9605\u8BFB\u66F4\u591A\u9AD8\u7EA7\u706B\u7130\u56FE\uFF01
`;export{t as content,d as default,i as frontmatter,p as lastUpdatedTime,h as title,o as toc};
