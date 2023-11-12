import{jsx as n,jsxs as i,Fragment as r}from"react/jsx-runtime";const d=void 0,h=[{id:"step-1-identify-a-region-in-the-flamegraph-\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF",text:"Step 1: Identify a Region in the Flamegraph (\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF)",depth:2},{id:"step-2-zooming-to-region-\u7F29\u653E\u5230\u533A\u57DF",text:"Step 2: Zooming to Region (\u7F29\u653E\u5230\u533A\u57DF)",depth:2},{id:"step-3-selecting-a-band",text:"Step 3: Selecting a Band",depth:2},{id:"step-4-select-the-script",text:"Step 4: Select the Script",depth:2},{id:"step-5-beautify-in-sources",text:"Step 5: Beautify in Sources",depth:2},{id:"step-6-observe-codepath",text:"Step 6: Observe Codepath",depth:2},{id:"step-7-identify-inefficiencies-\u8BC6\u522B\u4F4E\u6548\u7387",text:"Step 7: Identify Inefficiencies (\u8BC6\u522B\u4F4E\u6548\u7387)",depth:2},{id:"domparserparsefromstring",text:"DOMParser.parseFromString",depth:3},{id:"loops-and-string-operations",text:"Loops and String Operations",depth:3},{id:"conclusion",text:"Conclusion",depth:2}],p="\u5728 Chromium \u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u7684\u6765\u6E90";function t(o){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",div:"div",h3:"h3"},o.components);return i(r,{children:[i(e.h1,{id:"\u5728-chromium-\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u7684\u6765\u6E90",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728-chromium-\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u7684\u6765\u6E90",children:"#"}),"\u5728 Chromium \u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u7684\u6765\u6E90"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,i(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Identifying the source of slow codepaths in the Chromium Profiler"]}),`
`,i(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/codepath-scoping/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/codepath-scoping/"})]}),`
`,i(e.p,{children:[n(e.strong,{children:"\u6587\u7AE0\u526F\u6807\u9898:"})," \u901A\u8FC7\u706B\u7130\u56FE\u627E\u5230\u6709\u95EE\u9898\u7684\u4EE3\u7801"]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Chromium Profiler \u901A\u8FC7\u706B\u7130\u56FE\u751F\u6210\u975E\u5E38\u6709\u7528\u7684\u53EF\u89C6\u5316\u6548\u679C\uFF0C\u4EE5\u5E2E\u52A9\u6211\u4EEC\u4E86\u89E3\u7EBF\u7A0B\u4EFB\u52A1\u4E2D\u6D88\u8017 CPU \u65F6\u95F4\u7684\u5185\u5BB9\u3002"}),`
`,n(e.p,{children:"\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6F14\u7EC3\u5982\u4F55\u5728\u5206\u6790\u5668\u4E2D\u627E\u5230\u611F\u5174\u8DA3\u7684\u533A\u57DF\u540E\u6620\u5C04\u56DE Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4EE3\u7801\u8DEF\u5F84\u3002"}),`
`,i(e.h2,{id:"step-1-identify-a-region-in-the-flamegraph-\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-1-identify-a-region-in-the-flamegraph-\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF",children:"#"}),"Step 1: Identify a Region in the Flamegraph (\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF)"]}),`
`,n(e.p,{children:"\u5728\u63A2\u67E5\u5668 UI \u4E2D\uFF0C\u5E94\u52A0\u8F7D Web \u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u6211\u52A0\u8F7D\u4E86\u4E00\u4E2A\u5982\u4E0B\u6240\u793A\u7684\u8DDF\u8E2A\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110172732.png",alt:"20231110172732"})}),`
`,n(e.p,{children:"\u5229\u7528\u6211\u5BF9\u706B\u7130\u56FE\u5F62\u72B6\u7684\u4E86\u89E3\uFF0C\u6211\u6CE8\u610F\u5230\u8FD9\u91CC\u6B63\u5728\u6267\u884C\u4E00\u4E2A\u9AD8\u9891\u4EE3\u7801\u8DEF\u5F84\uFF1A"}),`
`,n(e.p,{children:"\u6211\u5BF9\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u7684\u8FD9\u79CD\u9AD8\u9891\u64CD\u4F5C\u5F88\u611F\u5174\u8DA3\uFF0C\u56E0\u6B64\u6211\u53EF\u4EE5\u5E94\u7528\u4F18\u5316\u5E76\u51CF\u5C11\u603B\u4F53\u4EFB\u52A1\u65F6\u95F4\u3002"}),`
`,i(e.h2,{id:"step-2-zooming-to-region-\u7F29\u653E\u5230\u533A\u57DF",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-2-zooming-to-region-\u7F29\u653E\u5230\u533A\u57DF",children:"#"}),"Step 2: Zooming to Region (\u7F29\u653E\u5230\u533A\u57DF)"]}),`
`,n(e.p,{children:"\u6839\u636E\u611F\u5174\u8DA3\u7684\u533A\u57DF\u8C03\u6574\u63A2\u67E5\u5668\u9009\u62E9\u3002"}),`
`,n(e.p,{children:"\u5C31\u6211\u800C\u8A00\uFF0C\u6211\u5BF9\u5176\u4E2D\u4E00\u4E2A\u72ED\u7A84\u7684\u5C16\u5CF0\u611F\u5174\u8DA3\uFF0C\u6240\u4EE5\u6211\u5C06\u7EE7\u7EED\u653E\u5927\u5B83\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173125.png",alt:"20231110173125"})}),`
`,i(e.h2,{id:"step-3-selecting-a-band",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-3-selecting-a-band",children:"#"}),"Step 3: Selecting a Band"]}),`
`,i(e.p,{children:["\u5728\u5C16\u5CF0\u7684\u706B\u7130\u56FE\u4E2D\uFF0C\u6211\u4EEC\u770B\u5230\u4E86\u5C16\u5CF0\u9876\u7AEF\xA0",n(e.code,{children:"o"}),"\xA0\u7684\u529F\u80FD\uFF0C\u56E0\u6B64\u6211\u53EF\u80FD\u4F1A\u4ECE\u8FD9\u91CC\u5F00\u59CB\u8C03\u67E5\u3002"]}),`
`,n(e.p,{children:"\u751F\u4EA7 Web \u5E94\u7528\u5229\u7528\u7F29\u5C0F\u6765\u51CF\u5C0F\u5176\u6709\u6548\u8D1F\u8F7D\u5927\u5C0F\uFF0C\u56E0\u6B64\u5728\u8DDF\u8E2A\u63A2\u67E5\u5668\u8303\u56F4\u65F6\u4E0D\u592A\u53EF\u80FD\u5728\u63A2\u67E5\u5668\u6CE2\u6BB5\u4E2D\u770B\u5230\u6709\u7528\u7684\u540D\u79F0\u3002(\u56E0\u4E3A\u751F\u4EA7\u73AF\u5883\u7ECF\u8FC7\u4E86\u538B\u7F29\u548C\u6DF7\u6DC6\uFF0C\u6B64\u65F6\u540D\u79F0\u6CA1\u6709\u4E86\u610F\u4E49)"}),`
`,n(e.p,{children:"\u5C31\u6211\u800C\u8A00\uFF0C\u6211\u5C06\u5355\u51FB o \u51FD\u6570\u7684\u6761\u5E26\uFF0C\u5E76\u5728\u201C\u6458\u8981\u201D\u7A97\u683C\u4E2D\u663E\u793A\u811A\u672C\u8BE6\u7EC6\u4FE1\u606F\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173350.png",alt:"20231110173350"})}),`
`,i(e.h2,{id:"step-4-select-the-script",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-4-select-the-script",children:"#"}),"Step 4: Select the Script"]}),`
`,n(e.p,{children:"\u5728\u5E95\u90E8\uFF0C\u60A8\u4F1A\u770B\u5230\u4E00\u4E2A\u6307\u5411\u811A\u672C\u540D\u79F0\u7684\u84DD\u8272\u94FE\u63A5\u3002\u5355\u51FB\u6B64\u94FE\u63A5\u5C06\u8F6C\u5230\u5305\u542B\u6B64\u51FD\u6570\u7684\u4EE3\u7801\u6587\u4EF6\u3002"}),`
`,i(e.p,{children:["\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u5355\u51FB\xA0",n(e.code,{children:"clients-root-desktop-43f...js:27165"}),"\xA0\uFF0C\u5B83\u5C06\u5E26\u6211\u8F6C\u5230\u201C\u6E90\u201D\u7A97\u683C\u4E2D\u7684\u8BE5\u4EE3\u7801\u6587\u4EF6\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173418.png",alt:"20231110173418"})}),`
`,i(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"\u6CE8\u610F\uFF1A\u5982\u679C\u60A8\u4E0D\u662F\u81EA\u5DF1\u6536\u96C6\u6B64\u914D\u7F6E\u6587\u4EF6\uFF08\u5373\u5B83\u5DF2\u5BFC\u5165\uFF09\uFF0C\u90A3\u4E48\u8FD9\u5C06\u4E0D\u8D77\u4F5C\u7528\uFF0C\u4F46\u4E0D\u5E78\u7684\u662F\uFF0C\u5F53\u60A8\u5C1D\u8BD5\u5355\u51FB\u65F6\uFF0CChromium \u4E0D\u4F1A\u8868\u793A\u8FD9\u4E00\u70B9\u3002"})})]}),`
`,i(e.h2,{id:"step-5-beautify-in-sources",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-5-beautify-in-sources",children:"#"}),"Step 5: Beautify in Sources"]}),`
`,n(e.p,{children:"\u5355\u51FB\u4EE3\u7801\u8DEF\u5F84\u540E\uFF0C\u4F60\u5C06\u770B\u5230\u201C\u6E90\u201D\u7A97\u683C\u6253\u5F00\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A\u7F29\u5C0F\u7684\u811A\u672C\u3002"}),`
`,n(e.p,{children:"\u5728\u5DE6\u4E0B\u89D2\uFF0C\u6709\u4E00\u4E2A\u975E\u5E38\u5C0F\u7684\u6309\u94AE\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u683C\u5F0F\u5316\u6B64\u4EE3\u7801\u4F9B\u60A8\u68C0\u67E5\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173506.png",alt:"20231110173506"})}),`
`,i(e.h2,{id:"step-6-observe-codepath",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-6-observe-codepath",children:"#"}),"Step 6: Observe Codepath"]}),`
`,n(e.p,{children:"\u4EE3\u7801\u8DEF\u5F84\u7684\u683C\u5F0F\u5E94\u8BE5\u5F88\u597D\uFF0C\u4F60\u53EF\u4EE5\u68C0\u67E5\u5B83\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173527.png",alt:"20231110173527"})}),`
`,i(e.p,{children:["\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u7684\xA0",n(e.code,{children:"o"}),"\xA0\u51FD\u6570\u5B9E\u9645\u4E0A\u5728\u505A\u4EC0\u4E48\u4E86\uFF01"]}),`
`,n(e.p,{children:"\u5982\u679C\u60A8\u6216\u60A8\u7684\u56E2\u961F\u62E5\u6709\u60A8\u6B63\u5728\u5206\u6790\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5219\u7F8E\u5316\u7F29\u5C0F\u7684\u4EE3\u7801\u5E94\u8BE5\u770B\u8D77\u6765\u8DB3\u591F\u719F\u6089\uFF0C\u53EF\u4EE5\u6620\u5C04\u56DE\u4EE3\u7801\u5E93\u4E2D\u7684\u67D0\u4E9B\u5185\u5BB9\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5B83\u53EF\u80FD\u662F\u6346\u7ED1\u7684\u4F9D\u8D56\u9879\uFF0C\u56E0\u6B64\u60A8\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u8C03\u7528\u5806\u6808\u8FDB\u884C\u8C03\u8BD5\uFF0C\u4EE5\u67E5\u770B\u6B64\u4EE3\u7801\u7684\u6267\u884C\u65B9\u5F0F\u548C\u65F6\u95F4\u3002"}),`
`,i(e.h2,{id:"step-7-identify-inefficiencies-\u8BC6\u522B\u4F4E\u6548\u7387",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-7-identify-inefficiencies-\u8BC6\u522B\u4F4E\u6548\u7387",children:"#"}),"Step 7: Identify Inefficiencies (\u8BC6\u522B\u4F4E\u6548\u7387)"]}),`
`,i(e.h3,{id:"domparserparsefromstring",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#domparserparsefromstring",children:"#"}),"DOMParser.parseFromString"]}),`
`,i(e.p,{children:["\u5728\u8FD9\u4E2A\u7279\u5B9A\u793A\u4F8B\u4E2D\uFF0C\u6211\u770B\u5230\xA0",n(e.code,{children:"o"}),"\xA0\u6B63\u5728\u9AD8\u9891\u6267\u884C\u3002\u6B64\u5916\uFF0C\u6211\u53EF\u4EE5\u770B\u5230\u8BE5\xA0",n(e.code,{children:"o"}),"\xA0\u51FD\u6570\u6B63\u5728\u521B\u5EFA\u4E00\u4E2A\u65B0\xA0",n(e.code,{children:"DOMParser"}),"\xA0\u5BF9\u8C61\uFF0C\u5E76\u8C03\u7528 \uFF0C\u8FD9\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668 API\uFF0C\u5982\u679C\u4EE5\u9AD8\u9891\u7387\u8FD0\u884C\xA0",n(e.code,{children:"parseFromString"}),"\xA0\uFF0C\u901A\u5E38\u4F1A\u5F88\u6162\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173823.png",alt:"20231110173823"})}),`
`,i(e.h3,{id:"loops-and-string-operations",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#loops-and-string-operations",children:"#"}),"Loops and String Operations"]}),`
`,i(e.p,{children:["\u6211\u8FD8\u5728\u8FD9\u91CC\u770B\u5230\xA0",n(e.code,{children:"o"}),"\xA0invokes\xA0",n(e.code,{children:"e"}),"\xA0\uFF0C\u5B83\u8C03\u7528\u4E86\u4E00\u4E2A lambda\uFF08\u51FD\u6570\xA0",n(e.code,{children:"(anonymous)"}),"\xA0\uFF09\uFF0C\u5B83\u8C03\u7528\u4E86\xA0",n(e.code,{children:"r"}),"\xA0\u548C\xA0",n(e.code,{children:"n"}),"\xA0\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173934.png",alt:"20231110173934"})}),`
`,i(e.p,{children:["\u5728\u68C0\u67E5 ",n(e.code,{children:"r"})," \u548C ",n(e.code,{children:"n"}),"\u65F6\uFF0C\u6211\u53D1\u73B0\u5B83\u4EEC\u90FD\u5728\u6267\u884C\u540C\u6B65\u5DE5\u4F5C\uFF0C\u7279\u522B\u662F ",n(e.code,{children:"for"}),"\u5FAA\u73AF\u548C\u5E26\u5B57\u7B26\u4E32\u4FEE\u526A\u7684 ",n(e.code,{children:"reduce"}),"\u3002\u9664\u4E86\u5728\u706B\u7130\u56FE\u4E2D\u9009\u62E9 ",n(e.code,{children:"r"})," \u6216 ",n(e.code,{children:"n"}),"\u5916\uFF0C\u6211\u5BF9\u8FD9\u4E9B\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E0E\u6B65\u9AA4 4 \u4E2D\u5BF9 ",n(e.code,{children:"o"}),"\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u76F8\u540C\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110174207.png",alt:"20231110174207"})}),`
`,n(e.p,{children:"\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u5C3D\u7BA1\u5B83\u4EEC\u5355\u72EC\u8FD0\u884C\u8D77\u6765\u5E76\u4E0D\u7E41\u91CD\uFF0C\u4F46\u5B83\u4EEC\u7684\u8FD0\u884C\u9891\u7387\u5BFC\u81F4\u4E86\u6B64\u4EFB\u52A1\u7684\u603B\u4F53\u74F6\u9888\u3002"}),`
`,i(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,n(e.p,{children:"\u901A\u8FC7\u5229\u7528\u706B\u7130\u56FE\u548C\u6211\u4EEC\u5728\u672C\u63D0\u793A\u4E2D\u6982\u8FF0\u7684\u4EE3\u7801\u8303\u56F4\u754C\u5B9A\u6280\u672F\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u786E\u5B9A\u54EA\u4E9B\u4EE3\u7801\u5757\u5BF9\u7EBF\u7A0B\u4E0A\u7684 CPU \u65F6\u95F4\u6709\u8D21\u732E\u3002"}),`
`,i(e.p,{children:["\u5728\u201C\u6E90\u201D\u9009\u9879\u5361\u4E2D\u786E\u5B9A\u4EE3\u7801\u5757\u540E\uFF0C\u53EF\u4EE5\u5C06\u5176\u6620\u5C04\u56DE\u6E90\u4EE3\u7801\u5E76\u5E94\u7528",n(e.a,{href:"https://webperf.tips/tip/optimization-types",target:"_blank",rel:"nofollow",children:"\u4F18\u5316"}),"\uFF01"]}),`
`,n(e.p,{children:"\u8FD9\u5C31\u662F\u8FD9\u4E2A\u63D0\u793A\u7684\u5168\u90E8\u5185\u5BB9\uFF01\u611F\u8C22\u60A8\u7684\u9605\u8BFB\uFF01\u53D1\u73B0\u66F4\u591A\u5339\u914D\u521D\u5B66\u8005\u548C CPU \u7684\u7C7B\u4F3C\u6280\u5DE7\u3002"})]})}function a(o={}){const{wrapper:e}=o.components||{};return e?n(e,Object.assign({},o,{children:n(t,o)})):t(o)}const l="Invalid Date",s=`# \u5728 Chromium \u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u7684\u6765\u6E90

\`metadata:\`

**\u539F\u6807\u9898:** Identifying the source of slow codepaths in the Chromium Profiler

**\u94FE\u63A5:** https://webperf.tips/tip/codepath-scoping/

**\u6587\u7AE0\u526F\u6807\u9898:** \u901A\u8FC7\u706B\u7130\u56FE\u627E\u5230\u6709\u95EE\u9898\u7684\u4EE3\u7801

---

Chromium Profiler \u901A\u8FC7\u706B\u7130\u56FE\u751F\u6210\u975E\u5E38\u6709\u7528\u7684\u53EF\u89C6\u5316\u6548\u679C\uFF0C\u4EE5\u5E2E\u52A9\u6211\u4EEC\u4E86\u89E3\u7EBF\u7A0B\u4EFB\u52A1\u4E2D\u6D88\u8017 CPU \u65F6\u95F4\u7684\u5185\u5BB9\u3002

\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6F14\u7EC3\u5982\u4F55\u5728\u5206\u6790\u5668\u4E2D\u627E\u5230\u611F\u5174\u8DA3\u7684\u533A\u57DF\u540E\u6620\u5C04\u56DE Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4EE3\u7801\u8DEF\u5F84\u3002

## Step 1: Identify a Region in the Flamegraph (\u8BC6\u522B\u706B\u7130\u56FE\u4E2D\u7684\u533A\u57DF)

\u5728\u63A2\u67E5\u5668 UI \u4E2D\uFF0C\u5E94\u52A0\u8F7D Web \u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\u3002

\u4F8B\u5982\uFF0C\u6211\u52A0\u8F7D\u4E86\u4E00\u4E2A\u5982\u4E0B\u6240\u793A\u7684\u8DDF\u8E2A\uFF1A

![20231110172732](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110172732.png)

\u5229\u7528\u6211\u5BF9\u706B\u7130\u56FE\u5F62\u72B6\u7684\u4E86\u89E3\uFF0C\u6211\u6CE8\u610F\u5230\u8FD9\u91CC\u6B63\u5728\u6267\u884C\u4E00\u4E2A\u9AD8\u9891\u4EE3\u7801\u8DEF\u5F84\uFF1A

\u6211\u5BF9\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u7684\u8FD9\u79CD\u9AD8\u9891\u64CD\u4F5C\u5F88\u611F\u5174\u8DA3\uFF0C\u56E0\u6B64\u6211\u53EF\u4EE5\u5E94\u7528\u4F18\u5316\u5E76\u51CF\u5C11\u603B\u4F53\u4EFB\u52A1\u65F6\u95F4\u3002

## Step 2: Zooming to Region (\u7F29\u653E\u5230\u533A\u57DF)

\u6839\u636E\u611F\u5174\u8DA3\u7684\u533A\u57DF\u8C03\u6574\u63A2\u67E5\u5668\u9009\u62E9\u3002

\u5C31\u6211\u800C\u8A00\uFF0C\u6211\u5BF9\u5176\u4E2D\u4E00\u4E2A\u72ED\u7A84\u7684\u5C16\u5CF0\u611F\u5174\u8DA3\uFF0C\u6240\u4EE5\u6211\u5C06\u7EE7\u7EED\u653E\u5927\u5B83\uFF1A

![20231110173125](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173125.png)

## Step 3: Selecting a Band

\u5728\u5C16\u5CF0\u7684\u706B\u7130\u56FE\u4E2D\uFF0C\u6211\u4EEC\u770B\u5230\u4E86\u5C16\u5CF0\u9876\u7AEF\xA0\`o\`\xA0\u7684\u529F\u80FD\uFF0C\u56E0\u6B64\u6211\u53EF\u80FD\u4F1A\u4ECE\u8FD9\u91CC\u5F00\u59CB\u8C03\u67E5\u3002

\u751F\u4EA7 Web \u5E94\u7528\u5229\u7528\u7F29\u5C0F\u6765\u51CF\u5C0F\u5176\u6709\u6548\u8D1F\u8F7D\u5927\u5C0F\uFF0C\u56E0\u6B64\u5728\u8DDF\u8E2A\u63A2\u67E5\u5668\u8303\u56F4\u65F6\u4E0D\u592A\u53EF\u80FD\u5728\u63A2\u67E5\u5668\u6CE2\u6BB5\u4E2D\u770B\u5230\u6709\u7528\u7684\u540D\u79F0\u3002(\u56E0\u4E3A\u751F\u4EA7\u73AF\u5883\u7ECF\u8FC7\u4E86\u538B\u7F29\u548C\u6DF7\u6DC6\uFF0C\u6B64\u65F6\u540D\u79F0\u6CA1\u6709\u4E86\u610F\u4E49)

\u5C31\u6211\u800C\u8A00\uFF0C\u6211\u5C06\u5355\u51FB o \u51FD\u6570\u7684\u6761\u5E26\uFF0C\u5E76\u5728\u201C\u6458\u8981\u201D\u7A97\u683C\u4E2D\u663E\u793A\u811A\u672C\u8BE6\u7EC6\u4FE1\u606F\u3002

![20231110173350](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173350.png)

## Step 4: Select the Script

\u5728\u5E95\u90E8\uFF0C\u60A8\u4F1A\u770B\u5230\u4E00\u4E2A\u6307\u5411\u811A\u672C\u540D\u79F0\u7684\u84DD\u8272\u94FE\u63A5\u3002\u5355\u51FB\u6B64\u94FE\u63A5\u5C06\u8F6C\u5230\u5305\u542B\u6B64\u51FD\u6570\u7684\u4EE3\u7801\u6587\u4EF6\u3002

\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u5355\u51FB\xA0\`clients-root-desktop-43f...js:27165\`\xA0\uFF0C\u5B83\u5C06\u5E26\u6211\u8F6C\u5230\u201C\u6E90\u201D\u7A97\u683C\u4E2D\u7684\u8BE5\u4EE3\u7801\u6587\u4EF6\u3002

![20231110173418](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173418.png)

:::info
\u6CE8\u610F\uFF1A\u5982\u679C\u60A8\u4E0D\u662F\u81EA\u5DF1\u6536\u96C6\u6B64\u914D\u7F6E\u6587\u4EF6\uFF08\u5373\u5B83\u5DF2\u5BFC\u5165\uFF09\uFF0C\u90A3\u4E48\u8FD9\u5C06\u4E0D\u8D77\u4F5C\u7528\uFF0C\u4F46\u4E0D\u5E78\u7684\u662F\uFF0C\u5F53\u60A8\u5C1D\u8BD5\u5355\u51FB\u65F6\uFF0CChromium \u4E0D\u4F1A\u8868\u793A\u8FD9\u4E00\u70B9\u3002
:::

## Step 5: Beautify in Sources

\u5355\u51FB\u4EE3\u7801\u8DEF\u5F84\u540E\uFF0C\u4F60\u5C06\u770B\u5230\u201C\u6E90\u201D\u7A97\u683C\u6253\u5F00\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A\u7F29\u5C0F\u7684\u811A\u672C\u3002

\u5728\u5DE6\u4E0B\u89D2\uFF0C\u6709\u4E00\u4E2A\u975E\u5E38\u5C0F\u7684\u6309\u94AE\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u683C\u5F0F\u5316\u6B64\u4EE3\u7801\u4F9B\u60A8\u68C0\u67E5\u3002

![20231110173506](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173506.png)

## Step 6: Observe Codepath

\u4EE3\u7801\u8DEF\u5F84\u7684\u683C\u5F0F\u5E94\u8BE5\u5F88\u597D\uFF0C\u4F60\u53EF\u4EE5\u68C0\u67E5\u5B83\uFF1A

![20231110173527](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173527.png)

\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u7684\xA0\`o\`\xA0\u51FD\u6570\u5B9E\u9645\u4E0A\u5728\u505A\u4EC0\u4E48\u4E86\uFF01

\u5982\u679C\u60A8\u6216\u60A8\u7684\u56E2\u961F\u62E5\u6709\u60A8\u6B63\u5728\u5206\u6790\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5219\u7F8E\u5316\u7F29\u5C0F\u7684\u4EE3\u7801\u5E94\u8BE5\u770B\u8D77\u6765\u8DB3\u591F\u719F\u6089\uFF0C\u53EF\u4EE5\u6620\u5C04\u56DE\u4EE3\u7801\u5E93\u4E2D\u7684\u67D0\u4E9B\u5185\u5BB9\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5B83\u53EF\u80FD\u662F\u6346\u7ED1\u7684\u4F9D\u8D56\u9879\uFF0C\u56E0\u6B64\u60A8\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u8C03\u7528\u5806\u6808\u8FDB\u884C\u8C03\u8BD5\uFF0C\u4EE5\u67E5\u770B\u6B64\u4EE3\u7801\u7684\u6267\u884C\u65B9\u5F0F\u548C\u65F6\u95F4\u3002

## Step 7: Identify Inefficiencies (\u8BC6\u522B\u4F4E\u6548\u7387)

### DOMParser.parseFromString

\u5728\u8FD9\u4E2A\u7279\u5B9A\u793A\u4F8B\u4E2D\uFF0C\u6211\u770B\u5230\xA0\`o\`\xA0\u6B63\u5728\u9AD8\u9891\u6267\u884C\u3002\u6B64\u5916\uFF0C\u6211\u53EF\u4EE5\u770B\u5230\u8BE5\xA0\`o\`\xA0\u51FD\u6570\u6B63\u5728\u521B\u5EFA\u4E00\u4E2A\u65B0\xA0\`DOMParser\`\xA0\u5BF9\u8C61\uFF0C\u5E76\u8C03\u7528 \uFF0C\u8FD9\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668 API\uFF0C\u5982\u679C\u4EE5\u9AD8\u9891\u7387\u8FD0\u884C\xA0\`parseFromString\`\xA0\uFF0C\u901A\u5E38\u4F1A\u5F88\u6162\uFF1A

![20231110173823](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173823.png)

### Loops and String Operations

\u6211\u8FD8\u5728\u8FD9\u91CC\u770B\u5230\xA0\`o\`\xA0invokes\xA0\`e\`\xA0\uFF0C\u5B83\u8C03\u7528\u4E86\u4E00\u4E2A lambda\uFF08\u51FD\u6570\xA0\`(anonymous)\`\xA0\uFF09\uFF0C\u5B83\u8C03\u7528\u4E86\xA0\`r\`\xA0\u548C\xA0\`n\`\xA0\uFF1A

![20231110173934](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110173934.png)

\u5728\u68C0\u67E5 \`r\` \u548C \`n\`\u65F6\uFF0C\u6211\u53D1\u73B0\u5B83\u4EEC\u90FD\u5728\u6267\u884C\u540C\u6B65\u5DE5\u4F5C\uFF0C\u7279\u522B\u662F \`for\`\u5FAA\u73AF\u548C\u5E26\u5B57\u7B26\u4E32\u4FEE\u526A\u7684 \`reduce\`\u3002\u9664\u4E86\u5728\u706B\u7130\u56FE\u4E2D\u9009\u62E9 \`r\` \u6216 \`n\`\u5916\uFF0C\u6211\u5BF9\u8FD9\u4E9B\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E0E\u6B65\u9AA4 4 \u4E2D\u5BF9 \`o\`\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u76F8\u540C\u3002

![20231110174207](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110174207.png)

\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u5C3D\u7BA1\u5B83\u4EEC\u5355\u72EC\u8FD0\u884C\u8D77\u6765\u5E76\u4E0D\u7E41\u91CD\uFF0C\u4F46\u5B83\u4EEC\u7684\u8FD0\u884C\u9891\u7387\u5BFC\u81F4\u4E86\u6B64\u4EFB\u52A1\u7684\u603B\u4F53\u74F6\u9888\u3002

## Conclusion

\u901A\u8FC7\u5229\u7528\u706B\u7130\u56FE\u548C\u6211\u4EEC\u5728\u672C\u63D0\u793A\u4E2D\u6982\u8FF0\u7684\u4EE3\u7801\u8303\u56F4\u754C\u5B9A\u6280\u672F\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u786E\u5B9A\u54EA\u4E9B\u4EE3\u7801\u5757\u5BF9\u7EBF\u7A0B\u4E0A\u7684 CPU \u65F6\u95F4\u6709\u8D21\u732E\u3002

\u5728\u201C\u6E90\u201D\u9009\u9879\u5361\u4E2D\u786E\u5B9A\u4EE3\u7801\u5757\u540E\uFF0C\u53EF\u4EE5\u5C06\u5176\u6620\u5C04\u56DE\u6E90\u4EE3\u7801\u5E76\u5E94\u7528[\u4F18\u5316](https://webperf.tips/tip/optimization-types)\uFF01

\u8FD9\u5C31\u662F\u8FD9\u4E2A\u63D0\u793A\u7684\u5168\u90E8\u5185\u5BB9\uFF01\u611F\u8C22\u60A8\u7684\u9605\u8BFB\uFF01\u53D1\u73B0\u66F4\u591A\u5339\u914D\u521D\u5B66\u8005\u548C CPU \u7684\u7C7B\u4F3C\u6280\u5DE7\u3002
`;export{s as content,a as default,d as frontmatter,l as lastUpdatedTime,p as title,h as toc};
