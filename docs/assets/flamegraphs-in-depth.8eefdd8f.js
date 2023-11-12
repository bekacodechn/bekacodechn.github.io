import{jsx as e,jsxs as i,Fragment as c}from"react/jsx-runtime";const l=void 0,h=[{id:"tasks",text:"Tasks",depth:2},{id:"shape",text:"Shape",depth:2},{id:"wide-shape",text:"Wide Shape",depth:3},{id:"narrow-shape\u7A84\u5F62\u72B6",text:"Narrow Shape\xA0\u7A84\u5F62\u72B6",depth:3},{id:"colors",text:"Colors",depth:2},{id:"script-and-function-name",text:"Script and Function Name",depth:2},{id:"conclusion\u7ED3\u8BBA",text:"Conclusion\xA0\u7ED3\u8BBA",depth:2}],d="\u6DF1\u5EA6\u8BB2\u89E3\u706B\u7130\u56FE \u{1F525}\u{1F525}";function r(t){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",div:"div",h2:"h2",img:"img",h3:"h3",ol:"ol",li:"li",ul:"ul",br:"br"},t.components);return i(c,{children:[i(n.h1,{id:"\u6DF1\u5EA6\u8BB2\u89E3\u706B\u7130\u56FE-",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DF1\u5EA6\u8BB2\u89E3\u706B\u7130\u56FE-",children:"#"}),"\u6DF1\u5EA6\u8BB2\u89E3\u706B\u7130\u56FE \u{1F525}\u{1F525}"]}),`
`,e(n.p,{children:e(n.code,{children:"metadata:"})}),`
`,i(n.p,{children:[e(n.strong,{children:"\u539F\u6807\u9898:"})," Flamegraphs In Depth \u{1F525}\u{1F525}"]}),`
`,i(n.p,{children:[e(n.strong,{children:"\u94FE\u63A5:"})," ",e(n.a,{href:"https://webperf.tips/tip/flamegraphs-in-depth/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/flamegraphs-in-depth/"})]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"\u73B0\u4EE3 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F1A\u4EA7\u751F\u975E\u5E38\u590D\u6742\u7684\u706B\u7130\u56FE\u3002"}),`
`,e(n.p,{children:"\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u67E5\u770B Chromium F12 Profiler \u751F\u6210\u7684\u66F4\u590D\u6742\u7684\u706B\u7130\u56FE\uFF0C\u5E76\u5B66\u4E60\u8BFB\u53D6\u5B83\u4EEC\u7684\u6709\u7528\u6280\u672F\u3002"}),`
`,i(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title",children:"TIP"}),e(n.div,{className:"island-directive-content",children:e(n.p,{children:"\u8BF7\u6CE8\u610F\uFF0C\u5C3D\u7BA1 Chromium Profiler \u5728\u6280\u672F\u4E0A\u4F1A\u751F\u6210\u51B0\u67F1\u56FE\uFF0C\u4F46\u6211\u4EC5\u5C06\u5B83\u4EEC\u79F0\u4E3A\u706B\u7130\u56FE\u3002(\u706B\u7130\u56FE\u7684\u8C03\u7528\u6808\u81EA\u4E0B\u800C\u4E0A\uFF0C\u51B0\u67F1\u56FE\u662F\u81EA\u4E0A\u800C\u4E0B\uFF0C\u56E0\u6B64\u51B0\u67F1\u56FE\u66F4\u51C6\u786E\uFF0C\u4F46\u4E3A\u4E86\u548C\u5176\u4ED6\u5E73\u53F0\u7EDF\u4E00\u540D\u79F0\u90FD\u53EB\u706B\u7130\u56FE)"})})]}),`
`,i(n.h2,{id:"tasks",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tasks",children:"#"}),"Tasks"]}),`
`,e(n.p,{children:"\u5728 Chromium F12 \u5206\u6790\u5668\u4E2D\uFF0C\u901A\u5E38\u4F1A\u4E3A\u4E3B UI \u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6BCF\u4E2A JavaScript \u4EFB\u52A1\u751F\u6210\u706B\u7130\u56FE\u3002"}),`
`,e(n.p,{children:"\u5197\u957F\u4E14\u6548\u7387\u4F4E\u4E0B\u7684\u4EFB\u52A1\u53EF\u80FD\u4F1A\u5EF6\u8FDF\u6D4F\u89C8\u5668\u751F\u6210\u5E27\u7684\u80FD\u529B\uFF0C\u4ECE\u800C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002"}),`
`,i(n.h2,{id:"shape",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#shape",children:"#"}),"Shape"]}),`
`,e(n.p,{children:"\u706B\u7130\u56FE\uFF08\u6216\u706B\u7130\u56FE\u7684\u5B50\u90E8\u5206\uFF09\u7684\u5F62\u72B6\u53EF\u4EE5\u4E3A\u7EBF\u7A0B\u4E0A\u7684 CPU \u74F6\u9888\u63D0\u4F9B\u5F88\u597D\u7684\u7EBF\u7D22\u3002"}),`
`,i(n.p,{children:["\u8C03\u7528\u5806\u6808\u4E0A\u7684\u7B2C\u4E00\u4E2A\u51FD\u6570\u8868\u793A\u4E3A\u706B\u7130\u56FE\u7684\u5E95\u90E8\uFF0C\u8C03\u7528\u5806\u6808\u4E0A\u7684\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u8868\u793A\u5728\u5C16\u7AEF\u3002(\u548C\u8C03\u7528\u6808\u7684",e(n.code,{children:"Y"}),"\u8F74\u76F8\u53CD)"]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165337.png",alt:"20231110165337"})}),`
`,i(n.h3,{id:"wide-shape",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#wide-shape",children:"#"}),"Wide Shape"]}),`
`,e(n.p,{children:"\u5982\u679C\u706B\u7130\u56FE\u8DDD\u5E95\u5EA7\u6216\u5176\u4ED6\u5B50\u90E8\u5206\u5F88\u5BBD\uFF0C\u8FD9\u8868\u660E\u7EBF\u7A0B\u4E0A\u6B63\u5728\u8FDB\u884C\u540C\u6B65\u3001\u7F13\u6162\u6216\u7E41\u91CD\u7684\u5DE5\u4F5C\u3002"}),`
`,e(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u5BBD\u706B\u7130\u56FE\u7684\u4F8B\u5B50\uFF0C\u5B83\u7684\u5E95\u90E8\u5F88\u5BBD\uFF0C\u9760\u8FD1\u9876\u7AEF\u7684\u90E8\u5206\u4E5F\u5F88\u5BBD\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165621.png",alt:"20231110165621"})}),`
`,e(n.p,{children:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u5EFA\u8BAE\u4ECE\u5BBD\u5E45\u706B\u7130\u56FE\u90E8\u5206\u7684\u5E95\u90E8\u5F00\u59CB\uFF0C\u6CBF\u7740\u6700\u5BBD\u7684\u6CE2\u6BB5\u5411\u9876\u7AEF\u8FFD\u8E2A\u56FE\u5F62\uFF08\u5728 Chromium F12 \u5256\u6790\u5668\u4E2D\u4ECE\u4E0A\u5230\u4E0B\uFF09\u3002\u8FD9\u5C06\u5E2E\u52A9\u60A8\u627E\u5230\u4F4E\u6548\u90E8\u5206\u4E2D\u6700\u5927\u7684\u673A\u4F1A\u533A\u57DF\u3002"}),`
`,e(n.p,{children:"\u8003\u8651\u4EE5\u4E0B\u793A\u4F8B\u706B\u7130\u56FE\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165752.png",alt:"20231110165752"})}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["Start looking at\xA0",e(n.code,{children:"function a()"}),"\xA0at the base"]}),`
`,i(n.li,{children:["Notice it calls\xA0",e(n.code,{children:"function b()"}),"\xA0and\xA0",e(n.code,{children:"function x()"}),".\xA0",e(n.code,{children:"b()"}),"\xA0looks wider, so I'd investigate(\u8C03\u67E5) that next."]}),`
`,i(n.li,{children:["Notice\xA0",e(n.code,{children:"function b()"}),"\xA0calls\xA0",e(n.code,{children:"function c()"})]}),`
`,i(n.li,{children:["Notice\xA0",e(n.code,{children:"function c()"}),"\xA0calls\xA0",e(n.code,{children:"function d()"}),"\xA0and\xA0",e(n.code,{children:"function e()"})]}),`
`,i(n.li,{children:["Investigate what\xA0",e(n.code,{children:"d()"}),"\xA0is doing, because\xA0",e(n.code,{children:"d()"}),"\xA0is wider."]}),`
`]}),`
`,e(n.p,{children:"\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u5BBD\u5E26\u7684\u5E38\u89C1\u7F6A\u9B41\u7978\u9996\u662F\uFF1A"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"while"}),"\xA0or\xA0",e(n.code,{children:"for"}),"\xA0Loops with a high iteration count"]}),`
`,e(n.li,{children:"Highly computational work"}),`
`]}),`
`,i(n.h3,{id:"narrow-shape\u7A84\u5F62\u72B6",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#narrow-shape\u7A84\u5F62\u72B6",children:"#"}),"Narrow Shape\xA0\u7A84\u5F62\u72B6"]}),`
`,e(n.p,{children:"\u7C7B\u4F3C\u4E8E\u7A84\u5C16\u5CF0\u7684\u706B\u7130\u56FE\u8868\u793A\u6267\u884C\u65F6\u95F4\u5F88\u77ED\uFF0C\u4F46\u8C03\u7528\u5806\u6808\u5F88\u6DF1\u3002"}),`
`,e(n.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E9B\u7A84\u5F62\u706B\u7130\u56FE\u793A\u4F8B\uFF1A"}),`
`,e(n.p,{children:"\u7A84\u5C16\u5CF0\u5E76\u4E0D\u4E00\u5B9A\u5355\u72EC\u8868\u793A CPU \u5B58\u5728\u74F6\u9888\uFF0C\u4F46\u6709\u65F6\u9AD8\u9891\u7387\u7684\u7A84\u5C16\u5CF0\u53EF\u80FD\u4F1A\u4EA7\u751F\u74F6\u9888\u3002\u8FD9\u901A\u5E38\u5728\u5206\u6790\u5668\u4E2D\u8868\u73B0\u4E3A\u4E00\u4E2A\u5BBD\u9891\u5E26\uFF0C\u4E0A\u9762\u6709\u8BB8\u591A\u7A84\u5C16\u5CF0\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170209.png",alt:"20231110170209"})}),`
`,e(n.p,{children:"The inefficient\uFF08\u4F4E\u6548\uFF09 / interesting parts of a narrow spike(\u7A84\u5C16\u5CF0) are often near the tip of the spike:"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170400.png",alt:"20231110170400"})}),`
`,i(n.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u5C16\u5CF0\u90FD\u5728\u6267\u884C\u4E00\u4E9B\u5927\u7EA6 0.14ms \u7684\u5FAE\u64CD\u4F5C\uFF0C\u6BD4\u5982\xA0",e(n.code,{children:"toArray()"}),"\xA0\u548C\xA0",e(n.code,{children:"stringify"}),"\xA0\u7B49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5C16\u5CF0\u7684\u9876\u7AEF\u627E\u5230\u8FD9\u4E9B\u4FE1\u606F\u3002"]}),`
`,e(n.p,{children:"\u6211\u4EEC\u770B\u5230\u7684\u57FA\u672C\u4E0A\u662F\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170432.png",alt:"20231110170432"})}),`
`,i(n.p,{children:["Notice in this example,\xA0",e(n.code,{children:"d()"}),"\xA0is invoked in high frequency, which invokes\xA0",e(n.code,{children:"e()"}),"\xA0and\xA0",e(n.code,{children:"f()"}),"\xA0in high frequency, creating a bottleneck(\u74F6\u9888) in\xA0",e(n.code,{children:"c()"}),"."]}),`
`,e(n.p,{children:"Usual suspects I find at the tips of narrow spikes often include:"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Browser APIs like\xA0",e(n.code,{children:"createElement"}),",\xA0",e(n.code,{children:"setTimeout"}),", etc."]}),`
`,i(n.li,{children:[e(n.code,{children:"RegExp"}),"\xA0testing"]}),`
`,i(n.li,{children:["String operations (like URL parsing,\xA0",e(n.code,{children:"JSON.stringify"}),")"]}),`
`,i(n.li,{children:[e(n.code,{children:"for"}),"\xA0or\xA0",e(n.code,{children:"while"}),"\xA0loops with a low iteration count"]}),`
`]}),`
`,i(n.h2,{id:"colors",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#colors",children:"#"}),"Colors"]}),`
`,e(n.p,{children:"Chromium \u6027\u80FD\u5206\u6790\u5668\u5C06\u6839\u636E\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u5BF9 JavaScript \u5806\u6808\u8DDF\u8E2A\u8FDB\u884C\u7740\u8272\u3002"}),`
`,e(n.p,{children:"\u73B0\u4EE3 Web \u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u4F1A\u5BF9\u5176 JavaScript \u6709\u6548\u8D1F\u8F7D\u8FDB\u884C\u4EE3\u7801\u62C6\u5206\uFF0C\u56E0\u6B64\uFF0C\u5C06\u6709\u591A\u4E2A\u811A\u672C\u5728\u540C\u4E00\u4E2A\u8C03\u7528\u5806\u6808\u4E2D\u6267\u884C\u51FD\u6570\u3002"}),`
`,e(n.p,{children:"\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170816.png",alt:"20231110170816"})}),`
`,e(n.p,{children:"\u811A\u672C 1 \u88AB\u7740\u8272\u4E3A\u84DD\u8272\uFF0C\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u5E95\u90E8\u3002\u811A\u672C 2 \u88AB\u7740\u8272\u4E3A\u7EFF\u8272\uFF0C\u662F\u811A\u672C 1 \u7684\u88AB\u53EB\u65B9\uFF0C\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u4E0B\u65B9\u548C\u5C16\u7AEF\u3002"}),`
`,i(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title",children:"TIP"}),e(n.div,{className:"island-directive-content",children:e(n.p,{children:"\u84DD\u8272\u90E8\u5206\u662F\u706B\u7130\u56FE\u7684\u5E95\u90E8\uFF0C\u7EFF\u8272\u90E8\u5206\u662F\u706B\u7130\u56FE\u7684\u5C16\u7AEF\uFF0C\u5C31\u50CF\u706B\u7130\u{1F525}\u5012\u6302\u7740\u4E00\u6837\u3002"})})]}),`
`,e(n.p,{children:"\u4E4D\u4E00\u770B\uFF0C\u53EF\u80FD\u4F1A\u5C06\u6B64\u4EFB\u52A1\u7684 CPU \u65F6\u95F4\u5F52\u56E0\u4E8E\u811A\u672C 1\uFF0C\u56E0\u4E3A\u5B83\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u5E95\u90E8\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u811A\u672C 2 \u663E\u7136\u5BF9\u5927\u90E8\u5206\u5DE5\u4F5C\u505A\u51FA\u4E86\u8D21\u732E\uFF08\u5927\u90E8\u5206\u706B\u7130\u56FE\u662F\u7EFF\u8272\u7684\uFF0C\u5C24\u5176\u662F\u5728\u5C16\u7AEF\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u65AD\u811A\u672C 2 \u4E2D\u7684\u4EE3\u7801\u8DEF\u5F84\u53EF\u80FD\u662F\u6B64\u4EFB\u52A1\u4E2D\u6548\u7387\u4F4E\u4E0B\u7684\u7F6A\u9B41\u7978\u9996\u3002"}),`
`,e(n.p,{children:"\u5982\u679C\u60A8\u770B\u5230\u9AD8\u9891\u7387\u7684\u56FE\u6848\u6216\u5F62\u72B6\u4F3C\u4E4E\u662F\u7531\u7279\u5B9A\u989C\u8272\u4EA7\u751F\u7684\uFF0C\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5FEB\u901F\u786E\u5B9A\u54EA\u4E2A\u811A\u672C\u6216\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u90E8\u5206\u5BFC\u81F4\u4E86\u74F6\u9888\u3002"}),`
`,e(n.p,{children:"\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6709\u4E00\u4E2A\u660E\u663E\u7684\u6A21\u5F0F\uFF0C\u5373 Green \u811A\u672C\u8C03\u7528\u4E00\u4E2A\u989C\u8272\u4E3A Brown \u7684\u8C03\u7528\u5806\u6808\uFF0C\u8BE5\u5806\u6808\u770B\u8D77\u6765\u5F88\u6162\u4E14\u8FD0\u884C\u9891\u7387\u5F88\u9AD8\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171813.png",alt:"20231110171813"})}),`
`,i(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title",children:"TIP"}),e(n.div,{className:"island-directive-content",children:i(n.p,{children:["\u8FD8\u6709\u4E00\u7EC4\u4FDD",e(n.a,{href:"https://webperf.tips/tip/main-profiler-pane",target:"_blank",rel:"nofollow",children:"\u7559\u989C\u8272\uFF0C\u5F52\u56E0\u4E8E\u67D0\u4E9B\u6D4F\u89C8\u5668\u4EFB\u52A1"}),"\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u60A8\u53D1\u73B0\u6D4F\u89C8\u5668 API \u7684\u4F4E\u6548\u8C03\u7528\uFF0C\u4F8B\u5982 Layout \u6216\xA0",e(n.code,{children:"setTimeout"}),"\xA0."]})})]}),`
`,i(n.h2,{id:"script-and-function-name",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#script-and-function-name",children:"#"}),"Script and Function Name"]}),`
`,e(n.p,{children:"\u9009\u62E9\u8C03\u7528\u5806\u6808\u5E27\u5C06\u5728\u201C\u6458\u8981\u201D\u7A97\u683C\u4E2D\u663E\u793A\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171929.png",alt:"20231110171929"})}),`
`,e(n.p,{children:"Chromium Profiler \u4F1A\u5C06\u706B\u7130\u56FE\u4E2D\u7684\u6BCF\u4E2A\u5806\u6808\u5E27\u6620\u5C04\u5230\u6B63\u5728\u6267\u884C\u7684\u51FD\u6570\u7684\u540D\u79F0\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171946.png",alt:"20231110171946"})}),`
`,i(n.p,{children:["\u5728\u4E0A\u9762\u7684\u6B64\u793A\u4F8B\u4E2D\uFF0C\u662F\u51FD\u6570\u7684\u540D\u79F0\uFF0C\xA0",e(n.code,{children:"a"}),"\xA0\u5B83\u4F4D\u4E8E\u811A\u672C\u4E2D\xA0",e(n.code,{children:"client-runtime..."}),"\xA0\u3002"]}),`
`,e(n.p,{children:"\u751F\u4EA7 Web \u5E94\u7528\u7A0B\u5E8F\u5E94\u7528\u7F29\u5C0F\uFF0C\u56E0\u6B64\u540D\u79F0\u901A\u5E38\u5F88\u77ED\u4E14\u4E0D\u5177\u6709\u63CF\u8FF0\u6027\u3002"}),`
`,i(n.p,{children:["\u6709\u5173\u5982\u4F55\u5C06\u8303\u56F4\u9650\u5B9A\u4E3A\u706B\u7130\u56FE\u4E2D\u611F\u5174\u8DA3\u7684\u7279\u5B9A\u4EE3\u7801\u8DEF\u5F84\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u9075\u5FAA\u6709\u5173\u5728\u63A2\u67E5\u5668\u4E2D",e(n.a,{href:"https://webperf.tips/tip/codepath-scoping",target:"_blank",rel:"nofollow",children:"\u5C06\u8303\u56F4\u9650\u5B9A\u4E3A\u4EE3\u7801\u8DEF\u5F84"}),"\u7684\u63D0\u793A\u3002"]}),`
`,i(n.h2,{id:"conclusion\u7ED3\u8BBA",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion\u7ED3\u8BBA",children:"#"}),"Conclusion\xA0\u7ED3\u8BBA"]}),`
`,e(n.p,{children:"\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u73B0\u5B9E\u4E16\u754C\u706B\u7130\u56FE\u56FE\u6848\u548C\u5F62\u72B6\u3002"}),`
`,e(n.p,{children:"\u6211\u4EEC\u8FD8\u7814\u7A76\u4E86 Chromium Profiler \u5982\u4F55\u901A\u8FC7\u5BF9\u8C03\u7528\u5806\u6808\u8FDB\u884C\u7740\u8272\u548C\u6807\u8BB0\u6765\u5E2E\u52A9\u6211\u4EEC\u7684\u5206\u6790\u3002"}),`
`,e(n.p,{children:"\u60A8\u5E94\u8BE5\u5728 Web \u5E94\u7528\u7A0B\u5E8F\u8DDF\u8E2A\u4E2D\u770B\u5230\u7C7B\u4F3C\u7684\u706B\u7130\u56FE\uFF0C\u5E76\u4E14\u73B0\u5728\u53EF\u4EE5\u4E86\u89E3\u8FD9\u4E9B\u590D\u6742\u706B\u7130\u56FE\u4E2D\u53D1\u751F\u7684\u60C5\u51B5\u3002"}),`
`,e(n.p,{children:"\u63A5\u4E0B\u6765\u8003\u8651\u8FD9\u4E9B\u63D0\u793A\uFF01"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/main-profiler-pane",target:"_blank",rel:"nofollow",children:["The Chromium Main Profiler Pane explained",e(n.br,{}),`
`,"Chromium \u4E3B\u6027\u80FD\u5206\u6790\u5668\u7A97\u683C\u8BF4\u660E"]})}),`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/codepath-scoping",target:"_blank",rel:"nofollow",children:["Scoping to codepaths in the profiler",e(n.br,{}),`
`,"\u5728\u63A2\u67E5\u5668\u4E2D\u9650\u5B9A\u4EE3\u7801\u8DEF\u5F84\u7684\u8303\u56F4"]})}),`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/event-loop",target:"_blank",rel:"nofollow",children:["The Browser Event Loop",e(n.br,{}),`
`,"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF"]})}),`
`,e(n.li,{children:e(n.a,{href:"https://webperf.tips/tip/code-splitting",target:"_blank",rel:"nofollow",children:"Code Splitting\xA0\u4EE3\u7801\u62C6\u5206"})}),`
`,e(n.li,{children:e(n.a,{href:"https://webperf.tips/tip/resource-minification",target:"_blank",rel:"nofollow",children:"Minification\xA0\u7F29\u5C0F"})}),`
`]})]})}function a(t={}){const{wrapper:n}=t.components||{};return n?e(n,Object.assign({},t,{children:e(r,t)})):r(t)}const p="Invalid Date",s=`# \u6DF1\u5EA6\u8BB2\u89E3\u706B\u7130\u56FE \u{1F525}\u{1F525}

\`metadata:\`

**\u539F\u6807\u9898:** Flamegraphs In Depth \u{1F525}\u{1F525}

**\u94FE\u63A5:** https://webperf.tips/tip/flamegraphs-in-depth/

---

\u73B0\u4EE3 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F1A\u4EA7\u751F\u975E\u5E38\u590D\u6742\u7684\u706B\u7130\u56FE\u3002

\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u67E5\u770B Chromium F12 Profiler \u751F\u6210\u7684\u66F4\u590D\u6742\u7684\u706B\u7130\u56FE\uFF0C\u5E76\u5B66\u4E60\u8BFB\u53D6\u5B83\u4EEC\u7684\u6709\u7528\u6280\u672F\u3002

:::tip
\u8BF7\u6CE8\u610F\uFF0C\u5C3D\u7BA1 Chromium Profiler \u5728\u6280\u672F\u4E0A\u4F1A\u751F\u6210\u51B0\u67F1\u56FE\uFF0C\u4F46\u6211\u4EC5\u5C06\u5B83\u4EEC\u79F0\u4E3A\u706B\u7130\u56FE\u3002(\u706B\u7130\u56FE\u7684\u8C03\u7528\u6808\u81EA\u4E0B\u800C\u4E0A\uFF0C\u51B0\u67F1\u56FE\u662F\u81EA\u4E0A\u800C\u4E0B\uFF0C\u56E0\u6B64\u51B0\u67F1\u56FE\u66F4\u51C6\u786E\uFF0C\u4F46\u4E3A\u4E86\u548C\u5176\u4ED6\u5E73\u53F0\u7EDF\u4E00\u540D\u79F0\u90FD\u53EB\u706B\u7130\u56FE)
:::

## Tasks

\u5728 Chromium F12 \u5206\u6790\u5668\u4E2D\uFF0C\u901A\u5E38\u4F1A\u4E3A\u4E3B UI \u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6BCF\u4E2A JavaScript \u4EFB\u52A1\u751F\u6210\u706B\u7130\u56FE\u3002

\u5197\u957F\u4E14\u6548\u7387\u4F4E\u4E0B\u7684\u4EFB\u52A1\u53EF\u80FD\u4F1A\u5EF6\u8FDF\u6D4F\u89C8\u5668\u751F\u6210\u5E27\u7684\u80FD\u529B\uFF0C\u4ECE\u800C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002

## Shape

\u706B\u7130\u56FE\uFF08\u6216\u706B\u7130\u56FE\u7684\u5B50\u90E8\u5206\uFF09\u7684\u5F62\u72B6\u53EF\u4EE5\u4E3A\u7EBF\u7A0B\u4E0A\u7684 CPU \u74F6\u9888\u63D0\u4F9B\u5F88\u597D\u7684\u7EBF\u7D22\u3002

\u8C03\u7528\u5806\u6808\u4E0A\u7684\u7B2C\u4E00\u4E2A\u51FD\u6570\u8868\u793A\u4E3A\u706B\u7130\u56FE\u7684\u5E95\u90E8\uFF0C\u8C03\u7528\u5806\u6808\u4E0A\u7684\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u8868\u793A\u5728\u5C16\u7AEF\u3002(\u548C\u8C03\u7528\u6808\u7684\`Y\`\u8F74\u76F8\u53CD)

![20231110165337](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165337.png)

### Wide Shape

\u5982\u679C\u706B\u7130\u56FE\u8DDD\u5E95\u5EA7\u6216\u5176\u4ED6\u5B50\u90E8\u5206\u5F88\u5BBD\uFF0C\u8FD9\u8868\u660E\u7EBF\u7A0B\u4E0A\u6B63\u5728\u8FDB\u884C\u540C\u6B65\u3001\u7F13\u6162\u6216\u7E41\u91CD\u7684\u5DE5\u4F5C\u3002

\u4E0B\u9762\u662F\u4E00\u4E2A\u5BBD\u706B\u7130\u56FE\u7684\u4F8B\u5B50\uFF0C\u5B83\u7684\u5E95\u90E8\u5F88\u5BBD\uFF0C\u9760\u8FD1\u9876\u7AEF\u7684\u90E8\u5206\u4E5F\u5F88\u5BBD\uFF1A

![20231110165621](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165621.png)

\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u5EFA\u8BAE\u4ECE\u5BBD\u5E45\u706B\u7130\u56FE\u90E8\u5206\u7684\u5E95\u90E8\u5F00\u59CB\uFF0C\u6CBF\u7740\u6700\u5BBD\u7684\u6CE2\u6BB5\u5411\u9876\u7AEF\u8FFD\u8E2A\u56FE\u5F62\uFF08\u5728 Chromium F12 \u5256\u6790\u5668\u4E2D\u4ECE\u4E0A\u5230\u4E0B\uFF09\u3002\u8FD9\u5C06\u5E2E\u52A9\u60A8\u627E\u5230\u4F4E\u6548\u90E8\u5206\u4E2D\u6700\u5927\u7684\u673A\u4F1A\u533A\u57DF\u3002

\u8003\u8651\u4EE5\u4E0B\u793A\u4F8B\u706B\u7130\u56FE\uFF1A

![20231110165752](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110165752.png)

1.  Start looking at\xA0\`function a()\`\xA0at the base  
2.  Notice it calls\xA0\`function b()\`\xA0and\xA0\`function x()\`.\xA0\`b()\`\xA0looks wider, so I'd investigate(\u8C03\u67E5) that next.  
3.  Notice\xA0\`function b()\`\xA0calls\xA0\`function c()\`  
4.  Notice\xA0\`function c()\`\xA0calls\xA0\`function d()\`\xA0and\xA0\`function e()\`  
5.  Investigate what\xA0\`d()\`\xA0is doing, because\xA0\`d()\`\xA0is wider.  

\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u5BBD\u5E26\u7684\u5E38\u89C1\u7F6A\u9B41\u7978\u9996\u662F\uFF1A

*   \`while\`\xA0or\xA0\`for\`\xA0Loops with a high iteration count  
*   Highly computational work

### Narrow Shape\xA0\u7A84\u5F62\u72B6

\u7C7B\u4F3C\u4E8E\u7A84\u5C16\u5CF0\u7684\u706B\u7130\u56FE\u8868\u793A\u6267\u884C\u65F6\u95F4\u5F88\u77ED\uFF0C\u4F46\u8C03\u7528\u5806\u6808\u5F88\u6DF1\u3002

\u4EE5\u4E0B\u662F\u4E00\u4E9B\u7A84\u5F62\u706B\u7130\u56FE\u793A\u4F8B\uFF1A

\u7A84\u5C16\u5CF0\u5E76\u4E0D\u4E00\u5B9A\u5355\u72EC\u8868\u793A CPU \u5B58\u5728\u74F6\u9888\uFF0C\u4F46\u6709\u65F6\u9AD8\u9891\u7387\u7684\u7A84\u5C16\u5CF0\u53EF\u80FD\u4F1A\u4EA7\u751F\u74F6\u9888\u3002\u8FD9\u901A\u5E38\u5728\u5206\u6790\u5668\u4E2D\u8868\u73B0\u4E3A\u4E00\u4E2A\u5BBD\u9891\u5E26\uFF0C\u4E0A\u9762\u6709\u8BB8\u591A\u7A84\u5C16\u5CF0\u3002

![20231110170209](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170209.png)

The inefficient\uFF08\u4F4E\u6548\uFF09 / interesting parts of a narrow spike(\u7A84\u5C16\u5CF0) are often near the tip of the spike:

![20231110170400](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170400.png)

\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u5C16\u5CF0\u90FD\u5728\u6267\u884C\u4E00\u4E9B\u5927\u7EA6 0.14ms \u7684\u5FAE\u64CD\u4F5C\uFF0C\u6BD4\u5982\xA0\`toArray()\`\xA0\u548C\xA0\`stringify\`\xA0\u7B49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5C16\u5CF0\u7684\u9876\u7AEF\u627E\u5230\u8FD9\u4E9B\u4FE1\u606F\u3002

\u6211\u4EEC\u770B\u5230\u7684\u57FA\u672C\u4E0A\u662F\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A

![20231110170432](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170432.png)

Notice in this example,\xA0\`d()\`\xA0is invoked in high frequency, which invokes\xA0\`e()\`\xA0and\xA0\`f()\`\xA0in high frequency, creating a bottleneck(\u74F6\u9888) in\xA0\`c()\`.

Usual suspects I find at the tips of narrow spikes often include:

*   Browser APIs like\xA0\`createElement\`,\xA0\`setTimeout\`, etc.  
*   \`RegExp\`\xA0testing
*   String operations (like URL parsing,\xA0\`JSON.stringify\`)  
*   \`for\`\xA0or\xA0\`while\`\xA0loops with a low iteration count  

## Colors

Chromium \u6027\u80FD\u5206\u6790\u5668\u5C06\u6839\u636E\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u5BF9 JavaScript \u5806\u6808\u8DDF\u8E2A\u8FDB\u884C\u7740\u8272\u3002

\u73B0\u4EE3 Web \u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u4F1A\u5BF9\u5176 JavaScript \u6709\u6548\u8D1F\u8F7D\u8FDB\u884C\u4EE3\u7801\u62C6\u5206\uFF0C\u56E0\u6B64\uFF0C\u5C06\u6709\u591A\u4E2A\u811A\u672C\u5728\u540C\u4E00\u4E2A\u8C03\u7528\u5806\u6808\u4E2D\u6267\u884C\u51FD\u6570\u3002

\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A

![20231110170816](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110170816.png)

\u811A\u672C 1 \u88AB\u7740\u8272\u4E3A\u84DD\u8272\uFF0C\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u5E95\u90E8\u3002\u811A\u672C 2 \u88AB\u7740\u8272\u4E3A\u7EFF\u8272\uFF0C\u662F\u811A\u672C 1 \u7684\u88AB\u53EB\u65B9\uFF0C\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u4E0B\u65B9\u548C\u5C16\u7AEF\u3002

:::tip
\u84DD\u8272\u90E8\u5206\u662F\u706B\u7130\u56FE\u7684\u5E95\u90E8\uFF0C\u7EFF\u8272\u90E8\u5206\u662F\u706B\u7130\u56FE\u7684\u5C16\u7AEF\uFF0C\u5C31\u50CF\u706B\u7130\u{1F525}\u5012\u6302\u7740\u4E00\u6837\u3002
:::

\u4E4D\u4E00\u770B\uFF0C\u53EF\u80FD\u4F1A\u5C06\u6B64\u4EFB\u52A1\u7684 CPU \u65F6\u95F4\u5F52\u56E0\u4E8E\u811A\u672C 1\uFF0C\u56E0\u4E3A\u5B83\u4F4D\u4E8E\u706B\u7130\u56FE\u7684\u5E95\u90E8\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u811A\u672C 2 \u663E\u7136\u5BF9\u5927\u90E8\u5206\u5DE5\u4F5C\u505A\u51FA\u4E86\u8D21\u732E\uFF08\u5927\u90E8\u5206\u706B\u7130\u56FE\u662F\u7EFF\u8272\u7684\uFF0C\u5C24\u5176\u662F\u5728\u5C16\u7AEF\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u65AD\u811A\u672C 2 \u4E2D\u7684\u4EE3\u7801\u8DEF\u5F84\u53EF\u80FD\u662F\u6B64\u4EFB\u52A1\u4E2D\u6548\u7387\u4F4E\u4E0B\u7684\u7F6A\u9B41\u7978\u9996\u3002

\u5982\u679C\u60A8\u770B\u5230\u9AD8\u9891\u7387\u7684\u56FE\u6848\u6216\u5F62\u72B6\u4F3C\u4E4E\u662F\u7531\u7279\u5B9A\u989C\u8272\u4EA7\u751F\u7684\uFF0C\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5FEB\u901F\u786E\u5B9A\u54EA\u4E2A\u811A\u672C\u6216\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u90E8\u5206\u5BFC\u81F4\u4E86\u74F6\u9888\u3002

\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6709\u4E00\u4E2A\u660E\u663E\u7684\u6A21\u5F0F\uFF0C\u5373 Green \u811A\u672C\u8C03\u7528\u4E00\u4E2A\u989C\u8272\u4E3A Brown \u7684\u8C03\u7528\u5806\u6808\uFF0C\u8BE5\u5806\u6808\u770B\u8D77\u6765\u5F88\u6162\u4E14\u8FD0\u884C\u9891\u7387\u5F88\u9AD8\u3002

![20231110171813](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171813.png)

:::tip
\u8FD8\u6709\u4E00\u7EC4\u4FDD[\u7559\u989C\u8272\uFF0C\u5F52\u56E0\u4E8E\u67D0\u4E9B\u6D4F\u89C8\u5668\u4EFB\u52A1](https://webperf.tips/tip/main-profiler-pane)\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u60A8\u53D1\u73B0\u6D4F\u89C8\u5668 API \u7684\u4F4E\u6548\u8C03\u7528\uFF0C\u4F8B\u5982 Layout \u6216\xA0\`setTimeout\`\xA0.
:::

## Script and Function Name

\u9009\u62E9\u8C03\u7528\u5806\u6808\u5E27\u5C06\u5728\u201C\u6458\u8981\u201D\u7A97\u683C\u4E2D\u663E\u793A\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\uFF1A

![20231110171929](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171929.png)

Chromium Profiler \u4F1A\u5C06\u706B\u7130\u56FE\u4E2D\u7684\u6BCF\u4E2A\u5806\u6808\u5E27\u6620\u5C04\u5230\u6B63\u5728\u6267\u884C\u7684\u51FD\u6570\u7684\u540D\u79F0\uFF1A

![20231110171946](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110171946.png)

\u5728\u4E0A\u9762\u7684\u6B64\u793A\u4F8B\u4E2D\uFF0C\u662F\u51FD\u6570\u7684\u540D\u79F0\uFF0C\xA0\`a\`\xA0\u5B83\u4F4D\u4E8E\u811A\u672C\u4E2D\xA0\`client-runtime...\`\xA0\u3002

\u751F\u4EA7 Web \u5E94\u7528\u7A0B\u5E8F\u5E94\u7528\u7F29\u5C0F\uFF0C\u56E0\u6B64\u540D\u79F0\u901A\u5E38\u5F88\u77ED\u4E14\u4E0D\u5177\u6709\u63CF\u8FF0\u6027\u3002

\u6709\u5173\u5982\u4F55\u5C06\u8303\u56F4\u9650\u5B9A\u4E3A\u706B\u7130\u56FE\u4E2D\u611F\u5174\u8DA3\u7684\u7279\u5B9A\u4EE3\u7801\u8DEF\u5F84\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u9075\u5FAA\u6709\u5173\u5728\u63A2\u67E5\u5668\u4E2D[\u5C06\u8303\u56F4\u9650\u5B9A\u4E3A\u4EE3\u7801\u8DEF\u5F84](https://webperf.tips/tip/codepath-scoping)\u7684\u63D0\u793A\u3002

## Conclusion\xA0\u7ED3\u8BBA

\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u73B0\u5B9E\u4E16\u754C\u706B\u7130\u56FE\u56FE\u6848\u548C\u5F62\u72B6\u3002

\u6211\u4EEC\u8FD8\u7814\u7A76\u4E86 Chromium Profiler \u5982\u4F55\u901A\u8FC7\u5BF9\u8C03\u7528\u5806\u6808\u8FDB\u884C\u7740\u8272\u548C\u6807\u8BB0\u6765\u5E2E\u52A9\u6211\u4EEC\u7684\u5206\u6790\u3002

\u60A8\u5E94\u8BE5\u5728 Web \u5E94\u7528\u7A0B\u5E8F\u8DDF\u8E2A\u4E2D\u770B\u5230\u7C7B\u4F3C\u7684\u706B\u7130\u56FE\uFF0C\u5E76\u4E14\u73B0\u5728\u53EF\u4EE5\u4E86\u89E3\u8FD9\u4E9B\u590D\u6742\u706B\u7130\u56FE\u4E2D\u53D1\u751F\u7684\u60C5\u51B5\u3002

\u63A5\u4E0B\u6765\u8003\u8651\u8FD9\u4E9B\u63D0\u793A\uFF01

*   [The Chromium Main Profiler Pane explained  
    Chromium \u4E3B\u6027\u80FD\u5206\u6790\u5668\u7A97\u683C\u8BF4\u660E](https://webperf.tips/tip/main-profiler-pane)
*   [Scoping to codepaths in the profiler  
    \u5728\u63A2\u67E5\u5668\u4E2D\u9650\u5B9A\u4EE3\u7801\u8DEF\u5F84\u7684\u8303\u56F4](https://webperf.tips/tip/codepath-scoping)
*   [The Browser Event Loop  
    \u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF](https://webperf.tips/tip/event-loop)
*   [Code Splitting\xA0\u4EE3\u7801\u62C6\u5206](https://webperf.tips/tip/code-splitting)
*   [Minification\xA0\u7F29\u5C0F](https://webperf.tips/tip/resource-minification)`;export{s as content,a as default,l as frontmatter,p as lastUpdatedTime,d as title,h as toc};
