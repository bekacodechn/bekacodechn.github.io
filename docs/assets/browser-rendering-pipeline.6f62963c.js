import{jsx as n,jsxs as l,Fragment as i}from"react/jsx-runtime";const a=void 0,o=[{id:"the-overall-process-\u6574\u4F53\u6D41\u7A0B",text:"The Overall Process \u6574\u4F53\u6D41\u7A0B",depth:2},{id:"html-parsing",text:"HTML Parsing",depth:2},{id:"css-object-model",text:"CSS Object Model",depth:2},{id:"style-and-the-render-tree",text:"Style and The Render Tree",depth:2},{id:"the-render-tree",text:"The Render Tree",depth:3},{id:"computedstyle",text:"ComputedStyle",depth:3},{id:"tree-construction-\u6784\u5EFA\u6E32\u67D3\u6811",text:"Tree Construction (\u6784\u5EFA\u6E32\u67D3\u6811)",depth:3},{id:"layout",text:"Layout",depth:2},{id:"paint",text:"Paint",depth:2},{id:"when-does-rendering-run",text:"When does Rendering Run?",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],d="Browser Rendering Pipeline";function c(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",div:"div",button:"button",span:"span",pre:"pre",h3:"h3",ol:"ol",li:"li",ul:"ul"},r.components);return l(i,{children:[l(e.h1,{id:"browser-rendering-pipeline",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-rendering-pipeline",children:"#"}),"Browser Rendering Pipeline"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,l(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," An Introduction to the Browser Rendering Pipeline"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/browser-rendering-pipeline/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/browser-rendering-pipeline/"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"\u7528\u6237\u559C\u6B22\u4EE5\u6700\u5FEB\u7684\u901F\u5EA6\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u50CF\u7D20\uFF08\u5E27\uFF09\uFF0C\u8FD9\u5C31\u662F\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u8BA9\u4EBA\u611F\u89C9\u5FEB\u901F\u7684\u539F\u56E0\uFF01"}),`
`,n(e.p,{children:"HTML \u548C CSS \u662F\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u7528\u6765\u6784\u5EFA\u7F51\u7EDC\u89C6\u89C9\u4F53\u9A8C\u7684\u57FA\u7840\u6A21\u5757\u3002\u4F46\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u5C06 HTML \u548C CSS \u8F6C\u6362\u6210\u50CF\u7D20\u7684\u5462\uFF1F"}),`
`,n(e.p,{children:"\u6D4F\u89C8\u5668\u5C06 HTML \u548C CSS \u8F6C\u6362\u4E3A\u50CF\u7D20\u7684\u8FC7\u7A0B\u76F8\u5F53\u4E0D\u900F\u660E\uFF0C\u56E0\u6B64\u5927\u591A\u6570\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u90FD\u4E0D\u4F1A\u8003\u8651\u5B83\u662F\u5982\u4F55\u6216\u4F55\u65F6\u8FD0\u884C\u7684\u3002"}),`
`,n(e.p,{children:"\u4E86\u89E3\u8FD9\u4E00\u8FC7\u7A0B\u662F\u6784\u5EFA\u9AD8\u6027\u80FD\u7F51\u7EDC\u5E94\u7528\u7684\u5173\u952E\uFF0C\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u5C06\u5E2E\u52A9\u60A8\u63ED\u5F00\u5B83\u7684\u795E\u79D8\u9762\u7EB1\u3002"}),`
`,l(e.h2,{id:"the-overall-process-\u6574\u4F53\u6D41\u7A0B",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-overall-process-\u6574\u4F53\u6D41\u7A0B",children:"#"}),"The Overall Process \u6574\u4F53\u6D41\u7A0B"]}),`
`,n(e.p,{children:"\u4ECE\u539F\u59CB\u7684 HTML \u548C CSS \u6587\u672C\u5230\u53EF\u89C6\u5316\u7684\u5C4F\u5E55\u50CF\u7D20\uFF0C\u8FD9\u4E00\u8DEF\u4E0A\u6709\u8BB8\u591A\u6B65\u9AA4\u548C\u4E2D\u95F4\u72B6\u6001\u3002\u5728\u8FD9\u4E2A\u9002\u5408\u521D\u5B66\u8005\u7684\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110202719.png",alt:"20231110202719"})}),`
`,l(e.h2,{id:"html-parsing",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#html-parsing",children:"#"}),"HTML Parsing"]}),`
`,n(e.p,{children:"\u5F53\u7528\u6237\u6D4F\u89C8\u7F51\u9875\u65F6\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u662F\u4EE5\u6587\u672C\u6587\u4EF6\u5F62\u5F0F\u63D0\u4F9B\u7ED9\u7528\u6237\u7684 HTML \u6587\u6863\u3002"}),`
`,l(e.p,{children:["\u6D4F\u89C8\u5668\u5229\u7528\u5176 ",n(e.a,{href:"https://webperf.tips/tip/html-parser",target:"_blank",rel:"nofollow",children:"HTML \u89E3\u6790\u5668"}),"\u5C06 HTML \u6587\u672C\u8F6C\u6362\u4E3A\u6587\u6863\u5BF9\u8C61\u6A21\u578B\u6216 DOM\u3002"]}),`
`,n(e.p,{children:"DOM \u662F\u4E00\u68F5\u6811\uFF0C\u5B9A\u4E49\u4E86\u6587\u6863\u7684\u7ED3\u6784\u3002DOM \u6811\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668\u5BF9\u8C61\uFF0C\u53EF\u6620\u5C04\u56DE HTML \u6587\u672C\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u76EE\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684 HTML \u6587\u672C\uFF1A"}),`
`,n(e.p,{children:"For example, consider the following HTML text:"}),`
`,l(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<!DOCTYPE"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"html"}),n(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<html>"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<head>"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<title>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Example Document"}),n(e.span,{style:{color:"#81A1C1"},children:"</title>"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<link"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"rel"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"stylesheet"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"href"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"styles.css"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"</head>"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<body>"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<div>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Example Div 1"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<div>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Example Div 2"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<div>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Example Div 3"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"</body>"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"</html>"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"})]})]}),`
`,n(e.p,{children:"HTML \u89E3\u6790\u5668\u5B8C\u6210\u5DE5\u4F5C\u540E\uFF0C\u5C31\u4F1A\u751F\u6210\u4E0B\u9762\u7684 DOM \u6811\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203120.png",alt:"20231110203120"})}),`
`,n(e.p,{children:"\u5C06 HTML \u89E3\u6790\u5230 DOM \u4E2D\u662F\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u4E00\u9879\u4EFB\u52A1\u3002\u5B83\u4F1A\u4EE5\u7C7B\u4F3C\u8FD9\u6837\u7684\u8DDF\u8E2A\u65B9\u5F0F\u76F4\u89C2\u5730\u663E\u793A\u51FA\u6765\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203153.png",alt:"20231110203153"})}),`
`,l(e.h2,{id:"css-object-model",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-object-model",children:"#"}),"CSS Object Model"]}),`
`,n(e.p,{children:"HTML \u5728\u5B9A\u4E49\u6587\u6863\u7ED3\u6784\u7684\u540C\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u5F15\u7528 CSS \u6837\u5F0F\u8868\u6765\u5B9A\u4E49\u6587\u6863\u7684\u89C6\u89C9\u6548\u679C\u3002"}),`
`,l(e.p,{children:["\u8FD9\u4E9B\u6837\u5F0F\u8868\u901A\u5E38\u901A\u8FC7 ",n(e.code,{children:'<link rel="stylesheet" />'})," \u6807\u8BB0\u6765\u5B9A\u4E49\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5185\u8054 ",n(e.code,{children:"<style>"})," \u8282\u70B9\u6765\u5B9A\u4E49\u3002"]}),`
`,l(e.p,{children:["CSS \u6837\u5F0F\u8868\u5B9A\u4E49\u4E86\u7531\u9009\u62E9\u5668\u548C\u58F0\u660E\u7EC4\u6210\u7684\u89C4\u5219\u3002\u4F8B\u5982\uFF0C\u8BF7\u770B ",n(e.code,{children:"styles.css"}),"\uFF1A"]}),`
`,l(e.div,{className:"language-scss line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"scss"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"background-color"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"red;"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"})]})]}),`
`,l(e.p,{children:["\u5728\u672C\u4F8B\u4E2D\uFF0C",n(e.code,{children:"div"})," \u662F\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C",n(e.code,{children:"background-color: red"})," \u662F\u4E00\u4E2A\u58F0\u660E\u3002\u6574\u4E2A\u4EE3\u7801\u5757\u88AB\u89C6\u4E3A\u4E00\u6761\u89C4\u5219\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203508.png",alt:"20231110203508"})}),`
`,n(e.p,{children:"\u4E00\u4E2A\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u5F15\u7528\u8BB8\u591A\u6837\u5F0F\u8868\uFF0C\u800C\u4E00\u4E2A\u6837\u5F0F\u8868\u53EF\u80FD\u4F1A\u5B9A\u4E49\u8BB8\u591A\u89C4\u5219\uFF08\u901A\u5E38\u6709\u8BB8\u591A\u58F0\u660E\uFF01\uFF09\u3002"}),`
`,l(e.p,{children:["\u6D4F\u89C8\u5668\u4F1A\u5C06\u8FD9\u4E9B\u6837\u5F0F\u8868\u89E3\u6790\u4E3A\u4E00\u79CD\u5185\u5B58\u6548\u7387\u9AD8\u3001\u67E5\u627E\u6548\u7387\u9AD8\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u79F0\u4E3A CSS \u5BF9\u8C61\u6A21\u578B\u6216 ",n(e.code,{children:"CSSOM"}),"\u3002\u5176\u4E3B\u8981\u76EE\u7684\u662F\u6C47\u603B\u89C4\u5219\uFF0C\u5E76\u63D0\u4F9B\u9AD8\u6548\u7684\u67E5\u627E\u529F\u80FD\uFF0C\u4EE5\u4FBF\u5C06\u9009\u62E9\u5668\u4E0E\u5176\u58F0\u660E\u7684\u6837\u5F0F\u76F8\u5339\u914D\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203701.png",alt:"20231110203701"})}),`
`,l(e.p,{children:["\u4E0B\u8F7D\u7684\u6587\u672C\u6837\u5F0F\u8868\u4F1A\u88AB\u89E3\u6790\u5E76\u6C47\u603B\u5230\u4E3B\u7EBF\u7A0B\u4E2D\u7684 ",n(e.code,{children:"CSSOM"}),' \u4EFB\u52A1\u4E2D\u3002\u8FD9\u5C06\u5728\u8DDF\u8E2A\u4E2D\u8868\u73B0\u4E3A "\u89E3\u6790\u6837\u5F0F\u8868\u4EFB\u52A1"\uFF1A']}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211022.png",alt:"20231110211022"})}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0The CSSOM's exact backing structure is browser-specific and worth a dedicated article on its own. While I won't cover it in this tip, you can imagine it's a memory-efficient tree optimized for fast lookup. You can explore the\xA0",n(e.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/css/style_engine.cc;drc=ebf6be4eaa77a47b813aece108e06523a3f7ddde",target:"_blank",rel:"nofollow",children:"StyleEngine source code"}),"\xA0for in-depth details."]})})]}),`
`,l(e.h2,{id:"style-and-the-render-tree",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#style-and-the-render-tree",children:"#"}),"Style and The Render Tree"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u82B1\u70B9\u65F6\u95F4\u6765\u7814\u7A76\u4E00\u4E0B\u6574\u4E2A\u6D41\u7A0B\u56FE\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211201.png",alt:"20231110211201"})}),`
`,l(e.p,{children:["\u4E00\u65E6\u6784\u5EFA\u4E86 ",n(e.code,{children:"DOM"})," \u548C ",n(e.code,{children:"CSSOM"}),"\uFF0C\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u5F00\u59CB\u4E0B\u4E00\u9636\u6BB5\u7684\u5DE5\u4F5C\uFF1A\u6837\u5F0F\u8FD9\u4E00\u9636\u6BB5\u6709\u65F6\u79F0\u4E3A\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F( Recalculate Style )\u6216\u6E32\u67D3\u6811( Render Tree)\u66F4\u65B0\u3002"]}),`
`,l(e.h3,{id:"the-render-tree",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-render-tree",children:"#"}),"The Render Tree"]}),`
`,l(e.p,{children:["\u6E32\u67D3\u6811\uFF08\u6709\u65F6\u4E5F\u79F0\u4E3A\u5E03\u5C40\u6811(",n(e.strong,{children:"Layout Tree"}),")\uFF09\u662F\u6D4F\u89C8\u5668\u5185\u90E8\u7684 C++ \u6570\u636E\u7ED3\u6784\uFF0C\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u5B83\u3002"]}),`
`,n(e.p,{children:"\u5B83\u662F\u4E00\u4E2A\u72EC\u7ACB\u4E8E DOM \u7684\u6811\uFF0C\u4F46\u901A\u5E38\u4F1A\u53CD\u6620 DOM \u7684\u7ED3\u6784\u3002\u6BCF\u4E2A\u8282\u70B9\u901A\u5E38\u5F15\u7528\u4E00\u4E2A DOM \u8282\u70B9\u548C\u4E00\u4E2A\u8BA1\u7B97\u6837\u5F0F\u3002\u5B83\u57FA\u672C\u4E0A\u7531\u6BCF\u4E00\u4E2A\u5E94\u5728\u7528\u6237\u5C4F\u5E55\u4E0A\u76F4\u89C2\u5448\u73B0\u7684 DOM \u8282\u70B9\u7EC4\u6210\u3002"}),`
`,l(e.p,{children:["\u8BF7\u770B\u8FD9\u4E2A\u7B80\u5316\u7684\u6E32\u67D3\u6811\u8282\u70B9\uFF0C\u5B83\u88AB\u79F0\u4E3A\u6E32\u67D3\u5BF9\u8C61\uFF08",n(e.strong,{children:"RenderObject"}),"\uFF09\uFF1A"]}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"class"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"RenderObject"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        private"}),n(e.span,{style:{color:"#81A1C1"},children:":"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Reference to the DOM Node being represented"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"DOMNode"}),n(e.span,{style:{color:"#81A1C1"},children:"*"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" domNode"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"    "})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Reference to the CSS Styles resolved for this DOM node."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"ComputedStyle"}),n(e.span,{style:{color:"#81A1C1"},children:"*"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" style"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"            "})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// RenderTree structural pointers"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"RenderObject"}),n(e.span,{style:{color:"#81A1C1"},children:"*"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" parent"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"RenderObjectList"}),n(e.span,{style:{color:"#81A1C1"},children:"*"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" children"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"})]})]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211512.png",alt:"20231110211512"})}),`
`,l(e.p,{children:["\u6E32\u67D3\u6811\u8FD8\u8D1F\u8D23\u5176\u4ED6\u4E0E ",n(e.code,{children:"DOM"})," \u65E0\u5173\u7684\u89C6\u89C9\u5143\u7D20\uFF0C\u5982\u6EDA\u52A8\u6761\u548C\u6587\u672C\u9009\u62E9\u3002"]}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),l(e.div,{className:"island-directive-content",children:[l(e.p,{children:["Consider reading through Chromium's\xA0",n(e.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/layout/layout_object.h;l=184-279;drc=f7f2dcfbd24f7ee74a0b306043bc757da65f64a6",target:"_blank",rel:"nofollow",children:"LayoutTree implementation"}),"\xA0for more in-depth details on this data structure."]}),l(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0Notable exclusions from the Render Tree include\xA0",n(e.code,{children:"<head>"}),"\xA0and its children, anything that is marked as\xA0",n(e.code,{children:"display: none"}),", and\xA0",n(e.code,{children:"<script>"}),"\xA0elements because they are not presented to the user's screen."]})]})]}),`
`,l(e.h3,{id:"computedstyle",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#computedstyle",children:"#"}),"ComputedStyle"]}),`
`,n(e.p,{children:"\u8003\u8651\u5230 DOM \u8282\u70B9\u7684\u9009\u62E9\u5668\u3001CSS \u7279\u6027\u4EE5\u53CA CSSOM \u4E2D\u7684\u805A\u5408\u89C4\u5219\uFF0CComputedStyle \u5B9E\u9645\u4E0A\u5C31\u662F\u9002\u7528\u4E8E\u8BE5 DOM \u8282\u70B9\u7684 CSS \u58F0\u660E\u5217\u8868\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u6211\u6709\u4E00\u4E2A HTML \u5143\u7D20\u793A\u4F8B\uFF1A"}),`
`,l(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"<div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"class"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"center-text"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Example"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line"})]})}),n(e.div,{className:"line-numbers-wrapper",children:n(e.span,{className:"line-number",children:"1"})})]}),`
`,n(e.p,{children:"\u548C\u6837\u5F0F\u662F\u8FD9\u6837\u5B9A\u4E49\u7684\uFF1A"}),`
`,l(e.div,{className:"language-scss line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"scss"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#8FBCBB"},children:"center-text"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"text-align"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"center;"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"background-color"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"red;"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"})]})]}),`
`,n(e.p,{children:"\u6211\u7684\u5143\u7D20\u7684\u8BA1\u7B97\u6837\u5F0F\u5C06\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6784\u5EFA\uFF1A"}),`
`,l(e.ol,{children:[`
`,n(e.li,{children:"\u9488\u5BF9 CSSOM \u4E2D div \u5143\u7D20\u7684\u805A\u5408\u89C4\u5219\u67E5\u8BE2 CSS \u9009\u62E9\u5668\uFF0C\u4EE5\u83B7\u5F97\u9002\u7528\u7684\u89C4\u5219"}),`
`,l(e.li,{children:["\u89E3\u51B3\u4E0E\u6700\u7EC8\u5E94\u7528\u7684\u58F0\u660E\u96C6\u4E4B\u95F4\u7684\u4EFB\u4F55 CSS \u7279\u6027\u51B2\u7A81\uFF0C\u672C\u4F8B\u4E2D\u7684\u58F0\u660E\u96C6\u4E3A",`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"text-align: center"})}),`
`,n(e.li,{children:n(e.code,{children:"background-color: red"})}),`
`,n(e.li,{children:"\u6D4F\u89C8\u5668\u5B9A\u4E49\u7684\u4EFB\u4F55\u9ED8\u8BA4\u6837\u5F0F"}),`
`]}),`
`]}),`
`]}),`
`,l(e.h3,{id:"tree-construction-\u6784\u5EFA\u6E32\u67D3\u6811",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-construction-\u6784\u5EFA\u6E32\u67D3\u6811",children:"#"}),"Tree Construction (\u6784\u5EFA\u6E32\u67D3\u6811)"]}),`
`,n(e.p,{children:'\u8981\u5EFA\u7ACB "\u6E32\u67D3\u6811"\uFF0C\u6D4F\u89C8\u5668\u5C06'}),`
`,l(e.ol,{children:[`
`,n(e.li,{children:"\u9012\u5F52\u904D\u5386 DOM\uFF0C\u641C\u7D22\u53EF\u89C1\u5143\u7D20"}),`
`,n(e.li,{children:"\u6784\u5EFA/\u66F4\u65B0\u6307\u5411 DOM \u8282\u70B9\u7684\u6E32\u67D3\u6811\u8282\u70B9"}),`
`,n(e.li,{children:"\u4E3A DOM \u8282\u70B9\u63A8\u5BFC\u8BA1\u7B97\u6837\u5F0F\uFF0C\u5E76\u4E0E DOM \u8282\u70B9\u548C\u6E32\u67D3\u6811\u8282\u70B9\u5173\u8054"}),`
`]}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:["\u6211\u7684\u7406\u89E3\u662F\uFF1A\u6E32\u67D3\u6811\u548C\u7ED3\u6784\u548C",n(e.code,{children:"DOM"}),"\u6811\u5F88\u76F8\u4F3C\uFF0C\u4F46\u5173\u8054\u4E86\u6837\u5F0F\u3002"]})})]}),`
`,n(e.p,{children:"\u6700\u7EC8\uFF0C\u6211\u4EEC\u5C06\u5411\u7528\u6237\u5C55\u793A\u4E00\u4E2A\u7531\u89C6\u89C9\u5143\u7D20\u7EC4\u6210\u7684\u98CE\u683C\u5316\u6E32\u67D3\u6811\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212828.png",alt:"20231110212828"})}),`
`,l(e.p,{children:["\u5728 Chromium Profiler \u4E2D\uFF0C\u8FD9\u5C06\u663E\u793A\u4E3A",n(e.code,{children:"Recalculate Style"}),"(\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F)\u4EFB\u52A1\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212914.png",alt:"20231110212914"})}),`
`,l(e.h2,{id:"layout",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#layout",children:"#"}),"Layout"]}),`
`,n(e.p,{children:n(e.strong,{children:"\u867D\u7136\u6E32\u67D3\u6811\u5305\u542B\u4E86\u9875\u9762\u4E0A\u6BCF\u4E2A\u53EF\u89C6\u5143\u7D20\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u3001\u989C\u8272\u7B49\u6240\u6709 CSS \u58F0\u660E\uFF0C\u4F46\u6D4F\u89C8\u5668\u5E76\u672A\u4E3A\u5143\u7D20\u5206\u914D\u4EFB\u4F55\u51E0\u4F55\u56FE\u5F62\u6216\u5750\u6807\u3002"})}),`
`,n(e.p,{children:"\u5E03\u5C40\u6D41\u7A0B\uFF08\u6709\u65F6\u4E5F\u79F0\u4E3A\u56DE\u6D41\uFF09\u4F1A\u9012\u5F52\u904D\u5386\u65B0\u6784\u5EFA/\u66F4\u65B0\u7684\u6E32\u67D3\u6811\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u8282\u70B9\u5206\u914D\u7CBE\u786E\u7684\u6D6E\u70B9\u4F4D\u7F6E\u548C\u51E0\u4F55\u56FE\u5F62\u3002"}),`
`,n(e.p,{children:'\u5E03\u5C40\u662F\u4E00\u4E2A\u975E\u5E38\u6DF1\u5965\u548C\u590D\u6742\u7684\u8BDD\u9898\u3002\u5C31\u672C\u5C0F\u8D34\u58EB\u800C\u8A00\uFF0C\u6700\u91CD\u8981\u7684\u662F\u8981\u77E5\u9053 "\u5E03\u5C40 "\u5C06\u4E3A\u6E32\u67D3\u6811\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u521B\u5EFA\u548C\u5B9A\u4F4D\u76D2\u5B50\u3002'}),`
`,n(e.p,{children:'\u4F8B\u5982\uFF0C\u5728\u6211\u4EEC\u7684 "\u6E32\u67D3\u6811 "\u793A\u4F8B\u4E2D\uFF1A'}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:["\u6D4F\u89C8\u5668\u4F1A\u4E3A ",n(e.code,{children:"body"})," \u5143\u7D20\u521B\u5EFA\u5E76\u5206\u914D\u4E00\u4E2A\u76D2\u5B50\u3002\u5B83\u7684\u5BBD\u5EA6\u662F\u6574\u4E2A\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF0C\u56E0\u4E3A\u5B83\u662F\u4E00\u4E2A\u5757"]}),`
`,n(e.li,{children:"\u8981\u83B7\u5F97\u9AD8\u5EA6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u904D\u5386 body \u5143\u7D20\u7684\u5B50\u5143\u7D20\uFF08\u4E09\u4E2A div \u5143\u7D20\uFF0C\u4E5F\u662F\u5757\u76D2\u5B50\uFF09"}),`
`,l(e.li,{children:["\u6BCF\u4E2A div \u5757\u7684\u9AD8\u5EA6\u90FD\u6765\u81EA\u5176\u5B50\u5143\u7D20 ",n(e.code,{children:"TextNode"})]}),`
`,n(e.li,{children:"\u5411\u4E0A\u9012\u5F52\u6C47\u603B\u9AD8\u5EA6\uFF0C\u5E76\u5206\u914D\u7CBE\u786E\u7684\u5750\u6807\u548C\u9AD8\u5EA6"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110213346.png",alt:"20231110213346"})}),`
`,l(e.p,{children:[n(e.a,{href:"https://youtu.be/ZTnIxIA5KGw",target:"_blank",rel:"nofollow",children:"\u8FD9\u6BB5\u5F88\u9177\u7684\u89C6\u9891\u5C55\u793A\u4E86\u6D4F\u89C8\u5668\u901A\u8FC7\u5E03\u5C40\u6D41\u7A0B\u9012\u5F52\u5206\u914D\u51E0\u4F55\u56FE\u5F62\u7684\u8FC7\u7A0B"}),":"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214436.png",alt:"20231110214436"})}),`
`,n(e.p,{children:'\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C"\u5E03\u5C40 "\u8FC7\u7A0B\u53EF\u80FD\u76F8\u5F53\u6602\u8D35\uFF0C\u56E0\u6B64\u6D4F\u89C8\u5668\u4F1A\u4F7F\u7528\u5927\u91CF\u7F13\u5B58\u6765\u907F\u514D\u4E0D\u5FC5\u8981\u5730\u91CD\u65B0\u8BA1\u7B97 "\u5E03\u5C40"\u3002'}),`
`,n(e.p,{children:"\u5E03\u5C40\u901A\u5E38\u4F1A\u5728\u6E32\u67D3\u9636\u6BB5\u51FA\u73B0\u5728\u5206\u6790\u5668\u4E2D\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214554.png",alt:"20231110214554"})}),`
`,l(e.p,{children:["\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C",n(e.a,{href:"https://webperf.tips/tip/layout-thrashing",target:"_blank",rel:"nofollow",children:"\u5F3A\u5236\u540C\u6B65\u56DE\u6D41"}),"\uFF0C\u6709\u53EF\u80FD\u4F1A\u5728 JavaScript \u4EFB\u52A1\u4E2D\u51FA\u73B0\u5E03\u5C40\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214634.png",alt:"20231110214634"})}),`
`,l(e.h2,{id:"paint",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#paint",children:"#"}),"Paint"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u6211\u4EEC\u7684\u6574\u4F53\u6D41\u7A0B\u56FE\uFF08\u6211\u4EEC\u5C31\u5FEB\u6210\u529F\u4E86\uFF01\uFF09\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214722.png",alt:"20231110214722"})}),`
`,n(e.p,{children:"\u4E00\u65E6\u6211\u4EEC\u6709\u4E86\u4E00\u7EC4\u98CE\u683C\u5316\u3001\u5B9A\u4F4D\u597D\u7684\u6E32\u67D3\u6811\u8282\u70B9\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u5229\u7528\u8BA1\u7B97\u56FE\u5F62\u5E93\uFF0C\u4EE5\u50CF\u7D20\u7684\u5F62\u5F0F\u901A\u8FC7\u7F16\u7A0B\u7ED8\u5236\u6E32\u67D3\u6811\u8282\u70B9\u3002"}),`
`,n(e.p,{children:"\u8FD9\u4E2A\u8FC7\u7A0B\u76F8\u5F53\u5FAE\u5999\uFF0C\u4F46\u4ECE\u9AD8\u5C42\u6765\u770B\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9012\u5F52\u904D\u5386\u65B0\u5B9A\u4F4D\u7684\u6E32\u67D3\u6811\uFF0C\u5E76\u6267\u884C\u7ED8\u5236\u6BCF\u4E2A\u6E32\u67D3\u6811\u8282\u70B9\u7684\u6307\u4EE4\u3002"}),`
`,n(e.p,{children:"\u8FD9\u4E00\u9636\u6BB5\u8D1F\u8D23\u786E\u4FDD\u6BCF\u4E2A\u53EF\u89C1\u5143\u7D20\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u7ED8\u5236\uFF08\u4F8B\u5982\uFF0C\u89E3\u51B3 z-index \u548C\u6EDA\u52A8\u5BB9\u5668\u7B49\u95EE\u9898\uFF09\u3002"}),`
`,n(e.p,{children:"Chromium \u5229\u7528 Skia \u5E93\u6765\u4FC3\u8FDB\u7ED8\u5236\uFF0CSkia \u5C06\u4E0E GPU \u63A5\u53E3\uFF0C\u4EE5\u83B7\u53D6\u8F83\u4F4E\u7EA7\u522B\u7684 OpenGL / DirectX \u56FE\u5F62\u6307\u4EE4\u3002"}),`
`,n(e.p,{children:"\u4E00\u65E6 GPU \u751F\u6210\u7EB9\u7406\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u5C06\u5B83\u4EEC\u805A\u5408\u5230\u4E00\u4E2A Frame \u4E2D\uFF0C\u5E76\u5C06\u8BE5 Frame \u63D0\u4EA4\u5230\u7528\u6237\u7684\u663E\u793A\u5668\uFF01"}),`
`,l(e.p,{children:[n(e.code,{children:"Paint"}),"\u4EFB\u52A1\u7684\u7279\u6B8A\u6027\u5728\u4E8E\u9700\u8981\u8DE8\u8D8A\u591A\u4E2A\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u624D\u80FD\u5B8C\u6210\uFF0C\u4F46\u4E00\u822C\u6765\u8BF4\uFF0C\u5B83\u5728 Chromium Profiler \u4E2D\u7684\u8868\u73B0\u662F\u8FD9\u6837\u7684\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110215027.png",alt:"20231110215027"})}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:['\u6CE8\u610F\uFF1A\u6211\u6709\u610F\u5FFD\u7565\u4E86\u56FE\u5C42\u548C\u5408\u6210\u7684\u9AD8\u7EA7\u7EC6\u8282\u3002\u8BF7\u53C2\u8003\u6211\u7684 "',n(e.a,{href:"https://webperf.tips/tip/layers-compositing",target:"_blank",rel:"nofollow",children:"\u56FE\u5C42\u4E0E\u5408\u6210"}),' "\u5C0F\u8D34\u58EB\uFF0C\u4E86\u89E3\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u3002']})})]}),`
`,l(e.h2,{id:"when-does-rendering-run",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#when-does-rendering-run",children:"#"}),"When does Rendering Run?"]}),`
`,n(e.p,{children:"\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u4F46\u5B83\u4F55\u65F6\u8FD0\u884C\u5462\uFF1F"}),`
`,l(e.p,{children:["\u6709\u5173\u7B54\u6848\uFF0C\u8BF7\u9605\u8BFB\u6211\u5173\u4E8E",n(e.a,{href:"/chrome/performance/tips/event-loop",children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF"}),"\u7684\u5C0F\u8D34\u58EB\u3002"]}),`
`,l(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,n(e.p,{children:"\u4F5C\u4E3A\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\uFF0C\u6211\u4EEC\u5FC5\u987B\u660E\u767D\uFF0C\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u8FD9\u4E9B\u9636\u6BB5\u4E4B\u524D\uFF0C\u6211\u4EEC\u6700\u559C\u6B22\u7684 CSS\u3001HTML\u3001React \u7EC4\u4EF6\u7B49\u90FD\u65E0\u6CD5\u76F4\u89C2\u5730\u5448\u73B0\u7ED9\u7528\u6237\u3002"}),`
`,n(e.p,{children:"\u63A5\u4E0B\u6765\u8003\u8651\u5982\u4F55\u6D4B\u91CF\u5E27\u7ED8\u5236\u65F6\u95F4\uFF01"})]})}function t(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(c,r)})):c(r)}const h="Invalid Date",p=`# Browser Rendering Pipeline

\`metadata:\`

**\u539F\u6807\u9898:** An Introduction to the Browser Rendering Pipeline

**\u94FE\u63A5:** https://webperf.tips/tip/browser-rendering-pipeline/

---

\u7528\u6237\u559C\u6B22\u4EE5\u6700\u5FEB\u7684\u901F\u5EA6\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u50CF\u7D20\uFF08\u5E27\uFF09\uFF0C\u8FD9\u5C31\u662F\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u8BA9\u4EBA\u611F\u89C9\u5FEB\u901F\u7684\u539F\u56E0\uFF01

HTML \u548C CSS \u662F\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u7528\u6765\u6784\u5EFA\u7F51\u7EDC\u89C6\u89C9\u4F53\u9A8C\u7684\u57FA\u7840\u6A21\u5757\u3002\u4F46\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u5C06 HTML \u548C CSS \u8F6C\u6362\u6210\u50CF\u7D20\u7684\u5462\uFF1F

\u6D4F\u89C8\u5668\u5C06 HTML \u548C CSS \u8F6C\u6362\u4E3A\u50CF\u7D20\u7684\u8FC7\u7A0B\u76F8\u5F53\u4E0D\u900F\u660E\uFF0C\u56E0\u6B64\u5927\u591A\u6570\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u90FD\u4E0D\u4F1A\u8003\u8651\u5B83\u662F\u5982\u4F55\u6216\u4F55\u65F6\u8FD0\u884C\u7684\u3002

\u4E86\u89E3\u8FD9\u4E00\u8FC7\u7A0B\u662F\u6784\u5EFA\u9AD8\u6027\u80FD\u7F51\u7EDC\u5E94\u7528\u7684\u5173\u952E\uFF0C\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u5C06\u5E2E\u52A9\u60A8\u63ED\u5F00\u5B83\u7684\u795E\u79D8\u9762\u7EB1\u3002

## The Overall Process \u6574\u4F53\u6D41\u7A0B

\u4ECE\u539F\u59CB\u7684 HTML \u548C CSS \u6587\u672C\u5230\u53EF\u89C6\u5316\u7684\u5C4F\u5E55\u50CF\u7D20\uFF0C\u8FD9\u4E00\u8DEF\u4E0A\u6709\u8BB8\u591A\u6B65\u9AA4\u548C\u4E2D\u95F4\u72B6\u6001\u3002\u5728\u8FD9\u4E2A\u9002\u5408\u521D\u5B66\u8005\u7684\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u4EE5\u4E0B\u5185\u5BB9\uFF1A

![20231110202719](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110202719.png)

## HTML Parsing

\u5F53\u7528\u6237\u6D4F\u89C8\u7F51\u9875\u65F6\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u662F\u4EE5\u6587\u672C\u6587\u4EF6\u5F62\u5F0F\u63D0\u4F9B\u7ED9\u7528\u6237\u7684 HTML \u6587\u6863\u3002

\u6D4F\u89C8\u5668\u5229\u7528\u5176 [HTML \u89E3\u6790\u5668](https://webperf.tips/tip/html-parser)\u5C06 HTML \u6587\u672C\u8F6C\u6362\u4E3A\u6587\u6863\u5BF9\u8C61\u6A21\u578B\u6216 DOM\u3002

DOM \u662F\u4E00\u68F5\u6811\uFF0C\u5B9A\u4E49\u4E86\u6587\u6863\u7684\u7ED3\u6784\u3002DOM \u6811\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668\u5BF9\u8C61\uFF0C\u53EF\u6620\u5C04\u56DE HTML \u6587\u672C\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u76EE\u3002

\u4F8B\u5982\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684 HTML \u6587\u672C\uFF1A

For example, consider the following HTML text:

\`\`\`html
<!DOCTYPE html>
<html>

<head>
    <title>Example Document</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div>Example Div 1</div>
    <div>Example Div 2</div>
    <div>Example Div 3</div>
</body>
</html>
\`\`\`

HTML \u89E3\u6790\u5668\u5B8C\u6210\u5DE5\u4F5C\u540E\uFF0C\u5C31\u4F1A\u751F\u6210\u4E0B\u9762\u7684 DOM \u6811\uFF1A

![20231110203120](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203120.png)

\u5C06 HTML \u89E3\u6790\u5230 DOM \u4E2D\u662F\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u4E00\u9879\u4EFB\u52A1\u3002\u5B83\u4F1A\u4EE5\u7C7B\u4F3C\u8FD9\u6837\u7684\u8DDF\u8E2A\u65B9\u5F0F\u76F4\u89C2\u5730\u663E\u793A\u51FA\u6765\uFF1A

![20231110203153](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203153.png)

## CSS Object Model

HTML \u5728\u5B9A\u4E49\u6587\u6863\u7ED3\u6784\u7684\u540C\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u5F15\u7528 CSS \u6837\u5F0F\u8868\u6765\u5B9A\u4E49\u6587\u6863\u7684\u89C6\u89C9\u6548\u679C\u3002

\u8FD9\u4E9B\u6837\u5F0F\u8868\u901A\u5E38\u901A\u8FC7 \`<link rel="stylesheet" />\` \u6807\u8BB0\u6765\u5B9A\u4E49\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5185\u8054 \`<style>\` \u8282\u70B9\u6765\u5B9A\u4E49\u3002

CSS \u6837\u5F0F\u8868\u5B9A\u4E49\u4E86\u7531\u9009\u62E9\u5668\u548C\u58F0\u660E\u7EC4\u6210\u7684\u89C4\u5219\u3002\u4F8B\u5982\uFF0C\u8BF7\u770B \`styles.css\`\uFF1A

\`\`\`scss
div {
    background-color: red;
}
\`\`\`

\u5728\u672C\u4F8B\u4E2D\uFF0C\`div\` \u662F\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\`background-color: red\` \u662F\u4E00\u4E2A\u58F0\u660E\u3002\u6574\u4E2A\u4EE3\u7801\u5757\u88AB\u89C6\u4E3A\u4E00\u6761\u89C4\u5219\uFF1A

![20231110203508](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203508.png)

\u4E00\u4E2A\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u5F15\u7528\u8BB8\u591A\u6837\u5F0F\u8868\uFF0C\u800C\u4E00\u4E2A\u6837\u5F0F\u8868\u53EF\u80FD\u4F1A\u5B9A\u4E49\u8BB8\u591A\u89C4\u5219\uFF08\u901A\u5E38\u6709\u8BB8\u591A\u58F0\u660E\uFF01\uFF09\u3002

\u6D4F\u89C8\u5668\u4F1A\u5C06\u8FD9\u4E9B\u6837\u5F0F\u8868\u89E3\u6790\u4E3A\u4E00\u79CD\u5185\u5B58\u6548\u7387\u9AD8\u3001\u67E5\u627E\u6548\u7387\u9AD8\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u79F0\u4E3A CSS \u5BF9\u8C61\u6A21\u578B\u6216 \`CSSOM\`\u3002\u5176\u4E3B\u8981\u76EE\u7684\u662F\u6C47\u603B\u89C4\u5219\uFF0C\u5E76\u63D0\u4F9B\u9AD8\u6548\u7684\u67E5\u627E\u529F\u80FD\uFF0C\u4EE5\u4FBF\u5C06\u9009\u62E9\u5668\u4E0E\u5176\u58F0\u660E\u7684\u6837\u5F0F\u76F8\u5339\u914D\u3002

![20231110203701](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110203701.png)

\u4E0B\u8F7D\u7684\u6587\u672C\u6837\u5F0F\u8868\u4F1A\u88AB\u89E3\u6790\u5E76\u6C47\u603B\u5230\u4E3B\u7EBF\u7A0B\u4E2D\u7684 \`CSSOM\` \u4EFB\u52A1\u4E2D\u3002\u8FD9\u5C06\u5728\u8DDF\u8E2A\u4E2D\u8868\u73B0\u4E3A "\u89E3\u6790\u6837\u5F0F\u8868\u4EFB\u52A1"\uFF1A

![20231110211022](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211022.png)

:::tip
**Note:**\xA0The CSSOM's exact backing structure is browser-specific and worth a dedicated article on its own. While I won't cover it in this tip, you can imagine it's a memory-efficient tree optimized for fast lookup. You can explore the\xA0[StyleEngine source code](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/css/style_engine.cc;drc=ebf6be4eaa77a47b813aece108e06523a3f7ddde)\xA0for in-depth details.
:::

## Style and The Render Tree

\u8BA9\u6211\u4EEC\u82B1\u70B9\u65F6\u95F4\u6765\u7814\u7A76\u4E00\u4E0B\u6574\u4E2A\u6D41\u7A0B\u56FE\uFF1A

![20231110211201](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211201.png)

\u4E00\u65E6\u6784\u5EFA\u4E86 \`DOM\` \u548C \`CSSOM\`\uFF0C\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u5F00\u59CB\u4E0B\u4E00\u9636\u6BB5\u7684\u5DE5\u4F5C\uFF1A\u6837\u5F0F\u8FD9\u4E00\u9636\u6BB5\u6709\u65F6\u79F0\u4E3A\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F( Recalculate Style )\u6216\u6E32\u67D3\u6811( Render Tree)\u66F4\u65B0\u3002

### The Render Tree

\u6E32\u67D3\u6811\uFF08\u6709\u65F6\u4E5F\u79F0\u4E3A\u5E03\u5C40\u6811(**Layout Tree**)\uFF09\u662F\u6D4F\u89C8\u5668\u5185\u90E8\u7684 C++ \u6570\u636E\u7ED3\u6784\uFF0C\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u5B83\u3002

\u5B83\u662F\u4E00\u4E2A\u72EC\u7ACB\u4E8E DOM \u7684\u6811\uFF0C\u4F46\u901A\u5E38\u4F1A\u53CD\u6620 DOM \u7684\u7ED3\u6784\u3002\u6BCF\u4E2A\u8282\u70B9\u901A\u5E38\u5F15\u7528\u4E00\u4E2A DOM \u8282\u70B9\u548C\u4E00\u4E2A\u8BA1\u7B97\u6837\u5F0F\u3002\u5B83\u57FA\u672C\u4E0A\u7531\u6BCF\u4E00\u4E2A\u5E94\u5728\u7528\u6237\u5C4F\u5E55\u4E0A\u76F4\u89C2\u5448\u73B0\u7684 DOM \u8282\u70B9\u7EC4\u6210\u3002

\u8BF7\u770B\u8FD9\u4E2A\u7B80\u5316\u7684\u6E32\u67D3\u6811\u8282\u70B9\uFF0C\u5B83\u88AB\u79F0\u4E3A\u6E32\u67D3\u5BF9\u8C61\uFF08**RenderObject**\uFF09\uFF1A

\`\`\`js
    class RenderObject {
        private:
            // Reference to the DOM Node being represented
            DOMNode* domNode;
    
            // Reference to the CSS Styles resolved for this DOM node.
            ComputedStyle* style
            
            // RenderTree structural pointers
            RenderObject* parent;
            RenderObjectList* children;
    }
\`\`\`

![20231110211512](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110211512.png)

\u6E32\u67D3\u6811\u8FD8\u8D1F\u8D23\u5176\u4ED6\u4E0E \`DOM\` \u65E0\u5173\u7684\u89C6\u89C9\u5143\u7D20\uFF0C\u5982\u6EDA\u52A8\u6761\u548C\u6587\u672C\u9009\u62E9\u3002

:::tip
Consider reading through Chromium's\xA0[LayoutTree implementation](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/layout/layout_object.h;l=184-279;drc=f7f2dcfbd24f7ee74a0b306043bc757da65f64a6)\xA0for more in-depth details on this data structure.

**Note:**\xA0Notable exclusions from the Render Tree include\xA0\`<head>\`\xA0and its children, anything that is marked as\xA0\`display: none\`, and\xA0\`<script>\`\xA0elements because they are not presented to the user's screen.
:::

### ComputedStyle

\u8003\u8651\u5230 DOM \u8282\u70B9\u7684\u9009\u62E9\u5668\u3001CSS \u7279\u6027\u4EE5\u53CA CSSOM \u4E2D\u7684\u805A\u5408\u89C4\u5219\uFF0CComputedStyle \u5B9E\u9645\u4E0A\u5C31\u662F\u9002\u7528\u4E8E\u8BE5 DOM \u8282\u70B9\u7684 CSS \u58F0\u660E\u5217\u8868\u3002

\u4F8B\u5982\uFF0C\u6211\u6709\u4E00\u4E2A HTML \u5143\u7D20\u793A\u4F8B\uFF1A

\`\`\`html
    <div class="center-text">Example</div>
\`\`\`

\u548C\u6837\u5F0F\u662F\u8FD9\u6837\u5B9A\u4E49\u7684\uFF1A

\`\`\`scss
.center-text {
    text-align: center;
}

div {
    background-color: red;
}
\`\`\`

\u6211\u7684\u5143\u7D20\u7684\u8BA1\u7B97\u6837\u5F0F\u5C06\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6784\u5EFA\uFF1A

1. \u9488\u5BF9 CSSOM \u4E2D div \u5143\u7D20\u7684\u805A\u5408\u89C4\u5219\u67E5\u8BE2 CSS \u9009\u62E9\u5668\uFF0C\u4EE5\u83B7\u5F97\u9002\u7528\u7684\u89C4\u5219
2. \u89E3\u51B3\u4E0E\u6700\u7EC8\u5E94\u7528\u7684\u58F0\u660E\u96C6\u4E4B\u95F4\u7684\u4EFB\u4F55 CSS \u7279\u6027\u51B2\u7A81\uFF0C\u672C\u4F8B\u4E2D\u7684\u58F0\u660E\u96C6\u4E3A
   - \`text-align: center\`
   - \`background-color: red\`
   - \u6D4F\u89C8\u5668\u5B9A\u4E49\u7684\u4EFB\u4F55\u9ED8\u8BA4\u6837\u5F0F

### Tree Construction (\u6784\u5EFA\u6E32\u67D3\u6811)

\u8981\u5EFA\u7ACB "\u6E32\u67D3\u6811"\uFF0C\u6D4F\u89C8\u5668\u5C06

1. \u9012\u5F52\u904D\u5386 DOM\uFF0C\u641C\u7D22\u53EF\u89C1\u5143\u7D20
2. \u6784\u5EFA/\u66F4\u65B0\u6307\u5411 DOM \u8282\u70B9\u7684\u6E32\u67D3\u6811\u8282\u70B9
3. \u4E3A DOM \u8282\u70B9\u63A8\u5BFC\u8BA1\u7B97\u6837\u5F0F\uFF0C\u5E76\u4E0E DOM \u8282\u70B9\u548C\u6E32\u67D3\u6811\u8282\u70B9\u5173\u8054

:::tip
\u6211\u7684\u7406\u89E3\u662F\uFF1A\u6E32\u67D3\u6811\u548C\u7ED3\u6784\u548C\`DOM\`\u6811\u5F88\u76F8\u4F3C\uFF0C\u4F46\u5173\u8054\u4E86\u6837\u5F0F\u3002
:::

\u6700\u7EC8\uFF0C\u6211\u4EEC\u5C06\u5411\u7528\u6237\u5C55\u793A\u4E00\u4E2A\u7531\u89C6\u89C9\u5143\u7D20\u7EC4\u6210\u7684\u98CE\u683C\u5316\u6E32\u67D3\u6811\uFF1A

![20231110212828](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212828.png)

\u5728 Chromium Profiler \u4E2D\uFF0C\u8FD9\u5C06\u663E\u793A\u4E3A\`Recalculate Style\`(\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F)\u4EFB\u52A1\uFF1A

![20231110212914](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110212914.png)

## Layout

**\u867D\u7136\u6E32\u67D3\u6811\u5305\u542B\u4E86\u9875\u9762\u4E0A\u6BCF\u4E2A\u53EF\u89C6\u5143\u7D20\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u3001\u989C\u8272\u7B49\u6240\u6709 CSS \u58F0\u660E\uFF0C\u4F46\u6D4F\u89C8\u5668\u5E76\u672A\u4E3A\u5143\u7D20\u5206\u914D\u4EFB\u4F55\u51E0\u4F55\u56FE\u5F62\u6216\u5750\u6807\u3002**

\u5E03\u5C40\u6D41\u7A0B\uFF08\u6709\u65F6\u4E5F\u79F0\u4E3A\u56DE\u6D41\uFF09\u4F1A\u9012\u5F52\u904D\u5386\u65B0\u6784\u5EFA/\u66F4\u65B0\u7684\u6E32\u67D3\u6811\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u8282\u70B9\u5206\u914D\u7CBE\u786E\u7684\u6D6E\u70B9\u4F4D\u7F6E\u548C\u51E0\u4F55\u56FE\u5F62\u3002

\u5E03\u5C40\u662F\u4E00\u4E2A\u975E\u5E38\u6DF1\u5965\u548C\u590D\u6742\u7684\u8BDD\u9898\u3002\u5C31\u672C\u5C0F\u8D34\u58EB\u800C\u8A00\uFF0C\u6700\u91CD\u8981\u7684\u662F\u8981\u77E5\u9053 "\u5E03\u5C40 "\u5C06\u4E3A\u6E32\u67D3\u6811\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u521B\u5EFA\u548C\u5B9A\u4F4D\u76D2\u5B50\u3002

\u4F8B\u5982\uFF0C\u5728\u6211\u4EEC\u7684 "\u6E32\u67D3\u6811 "\u793A\u4F8B\u4E2D\uFF1A

1. \u6D4F\u89C8\u5668\u4F1A\u4E3A \`body\` \u5143\u7D20\u521B\u5EFA\u5E76\u5206\u914D\u4E00\u4E2A\u76D2\u5B50\u3002\u5B83\u7684\u5BBD\u5EA6\u662F\u6574\u4E2A\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF0C\u56E0\u4E3A\u5B83\u662F\u4E00\u4E2A\u5757
2. \u8981\u83B7\u5F97\u9AD8\u5EA6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u904D\u5386 body \u5143\u7D20\u7684\u5B50\u5143\u7D20\uFF08\u4E09\u4E2A div \u5143\u7D20\uFF0C\u4E5F\u662F\u5757\u76D2\u5B50\uFF09
3. \u6BCF\u4E2A div \u5757\u7684\u9AD8\u5EA6\u90FD\u6765\u81EA\u5176\u5B50\u5143\u7D20 \`TextNode\`
4. \u5411\u4E0A\u9012\u5F52\u6C47\u603B\u9AD8\u5EA6\uFF0C\u5E76\u5206\u914D\u7CBE\u786E\u7684\u5750\u6807\u548C\u9AD8\u5EA6

![20231110213346](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110213346.png)

[\u8FD9\u6BB5\u5F88\u9177\u7684\u89C6\u9891\u5C55\u793A\u4E86\u6D4F\u89C8\u5668\u901A\u8FC7\u5E03\u5C40\u6D41\u7A0B\u9012\u5F52\u5206\u914D\u51E0\u4F55\u56FE\u5F62\u7684\u8FC7\u7A0B](https://youtu.be/ZTnIxIA5KGw):

![20231110214436](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214436.png)

\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C"\u5E03\u5C40 "\u8FC7\u7A0B\u53EF\u80FD\u76F8\u5F53\u6602\u8D35\uFF0C\u56E0\u6B64\u6D4F\u89C8\u5668\u4F1A\u4F7F\u7528\u5927\u91CF\u7F13\u5B58\u6765\u907F\u514D\u4E0D\u5FC5\u8981\u5730\u91CD\u65B0\u8BA1\u7B97 "\u5E03\u5C40"\u3002

\u5E03\u5C40\u901A\u5E38\u4F1A\u5728\u6E32\u67D3\u9636\u6BB5\u51FA\u73B0\u5728\u5206\u6790\u5668\u4E2D\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A

![20231110214554](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214554.png)

\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C[\u5F3A\u5236\u540C\u6B65\u56DE\u6D41](https://webperf.tips/tip/layout-thrashing)\uFF0C\u6709\u53EF\u80FD\u4F1A\u5728 JavaScript \u4EFB\u52A1\u4E2D\u51FA\u73B0\u5E03\u5C40\uFF1A

![20231110214634](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214634.png)

## Paint

\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u6211\u4EEC\u7684\u6574\u4F53\u6D41\u7A0B\u56FE\uFF08\u6211\u4EEC\u5C31\u5FEB\u6210\u529F\u4E86\uFF01\uFF09\uFF1A

![20231110214722](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110214722.png)

\u4E00\u65E6\u6211\u4EEC\u6709\u4E86\u4E00\u7EC4\u98CE\u683C\u5316\u3001\u5B9A\u4F4D\u597D\u7684\u6E32\u67D3\u6811\u8282\u70B9\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u5229\u7528\u8BA1\u7B97\u56FE\u5F62\u5E93\uFF0C\u4EE5\u50CF\u7D20\u7684\u5F62\u5F0F\u901A\u8FC7\u7F16\u7A0B\u7ED8\u5236\u6E32\u67D3\u6811\u8282\u70B9\u3002

\u8FD9\u4E2A\u8FC7\u7A0B\u76F8\u5F53\u5FAE\u5999\uFF0C\u4F46\u4ECE\u9AD8\u5C42\u6765\u770B\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9012\u5F52\u904D\u5386\u65B0\u5B9A\u4F4D\u7684\u6E32\u67D3\u6811\uFF0C\u5E76\u6267\u884C\u7ED8\u5236\u6BCF\u4E2A\u6E32\u67D3\u6811\u8282\u70B9\u7684\u6307\u4EE4\u3002

\u8FD9\u4E00\u9636\u6BB5\u8D1F\u8D23\u786E\u4FDD\u6BCF\u4E2A\u53EF\u89C1\u5143\u7D20\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u7ED8\u5236\uFF08\u4F8B\u5982\uFF0C\u89E3\u51B3 z-index \u548C\u6EDA\u52A8\u5BB9\u5668\u7B49\u95EE\u9898\uFF09\u3002

Chromium \u5229\u7528 Skia \u5E93\u6765\u4FC3\u8FDB\u7ED8\u5236\uFF0CSkia \u5C06\u4E0E GPU \u63A5\u53E3\uFF0C\u4EE5\u83B7\u53D6\u8F83\u4F4E\u7EA7\u522B\u7684 OpenGL / DirectX \u56FE\u5F62\u6307\u4EE4\u3002

\u4E00\u65E6 GPU \u751F\u6210\u7EB9\u7406\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u5C06\u5B83\u4EEC\u805A\u5408\u5230\u4E00\u4E2A Frame \u4E2D\uFF0C\u5E76\u5C06\u8BE5 Frame \u63D0\u4EA4\u5230\u7528\u6237\u7684\u663E\u793A\u5668\uFF01

\`Paint\`\u4EFB\u52A1\u7684\u7279\u6B8A\u6027\u5728\u4E8E\u9700\u8981\u8DE8\u8D8A\u591A\u4E2A\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u624D\u80FD\u5B8C\u6210\uFF0C\u4F46\u4E00\u822C\u6765\u8BF4\uFF0C\u5B83\u5728 Chromium Profiler \u4E2D\u7684\u8868\u73B0\u662F\u8FD9\u6837\u7684\uFF1A

![20231110215027](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110215027.png)

:::tip
\u6CE8\u610F\uFF1A\u6211\u6709\u610F\u5FFD\u7565\u4E86\u56FE\u5C42\u548C\u5408\u6210\u7684\u9AD8\u7EA7\u7EC6\u8282\u3002\u8BF7\u53C2\u8003\u6211\u7684 "[\u56FE\u5C42\u4E0E\u5408\u6210](https://webperf.tips/tip/layers-compositing) "\u5C0F\u8D34\u58EB\uFF0C\u4E86\u89E3\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u3002
:::

## When does Rendering Run?

\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u4F46\u5B83\u4F55\u65F6\u8FD0\u884C\u5462\uFF1F

\u6709\u5173\u7B54\u6848\uFF0C\u8BF7\u9605\u8BFB\u6211\u5173\u4E8E[\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF](./event-loop.md)\u7684\u5C0F\u8D34\u58EB\u3002

## Conclusion

\u4F5C\u4E3A\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\uFF0C\u6211\u4EEC\u5FC5\u987B\u660E\u767D\uFF0C\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u8FD9\u4E9B\u9636\u6BB5\u4E4B\u524D\uFF0C\u6211\u4EEC\u6700\u559C\u6B22\u7684 CSS\u3001HTML\u3001React \u7EC4\u4EF6\u7B49\u90FD\u65E0\u6CD5\u76F4\u89C2\u5730\u5448\u73B0\u7ED9\u7528\u6237\u3002

\u63A5\u4E0B\u6765\u8003\u8651\u5982\u4F55\u6D4B\u91CF\u5E27\u7ED8\u5236\u65F6\u95F4\uFF01






`;export{p as content,t as default,a as frontmatter,h as lastUpdatedTime,d as title,o as toc};
