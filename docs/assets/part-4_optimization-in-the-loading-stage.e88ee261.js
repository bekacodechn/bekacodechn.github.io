import{jsx as n,jsxs as r,Fragment as s}from"react/jsx-runtime";const o=void 0,t=[{id:"dom-construction-blocking-dom-\u6784\u9020\u963B\u585E",text:"DOM construction blocking (DOM \u6784\u9020\u963B\u585E)",depth:2},{id:"how-javascript-blocks-the-dom-construction--javascript-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",text:"How JavaScript blocks the DOM construction?  (JavaScript \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)",depth:3},{id:"how-css-blocks-the-dom-construction--css-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",text:"How CSS blocks the DOM construction?  (CSS \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)",depth:3},{id:"optimization-in-the-loading-stage-is-about-reducing-the-download-time-\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4",text:"Optimization in the loading stage is about reducing the download time (\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4)",depth:2},{id:"key-indicator--round-trip-delay-time-rtd-\u5173\u952E\u6307\u6807--\u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4-rtd",text:"Key indicator \u2014 round-trip delay time (RTD) \u3010\u5173\u952E\u6307\u6807 \u2014 \u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4 \uFF08RTD\uFF09\u3011",depth:3},{id:"reduce-the-number-of-key-resources-\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF",text:"Reduce the number of key resources (\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF)",depth:3},{id:"reduce-the-size-of-key-resources-\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F",text:"Reduce the size of key resources (\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F)",depth:3},{id:"references\u5F15\u7528",text:"References\xA0\u5F15\u7528",depth:2}],a="\u6D4F\u89C8\u5668\u5982\u4F55\u9010\u6B65\u5DE5\u4F5C \u2014 \u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\uFF08\u7B2C 4 \u90E8\u5206\uFF09";function c(l){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",ol:"ol",li:"li",h2:"h2",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",img:"img",ul:"ul",br:"br"},l.components);return r(s,{children:[r(e.h1,{id:"\u6D4F\u89C8\u5668\u5982\u4F55\u9010\u6B65\u5DE5\u4F5C--\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u7B2C-4-\u90E8\u5206",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6D4F\u89C8\u5668\u5982\u4F55\u9010\u6B65\u5DE5\u4F5C--\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u7B2C-4-\u90E8\u5206",children:"#"}),"\u6D4F\u89C8\u5668\u5982\u4F55\u9010\u6B65\u5DE5\u4F5C \u2014 \u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\uFF08\u7B2C 4 \u90E8\u5206\uFF09"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,r(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," How does browser work step by step \u2014 optimization in the loading stage (part 4)"]}),`
`,r(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://cabulous.medium.com/how-does-browser-work-in-2019-part-4-more-about-rendering-phase-fbba0d94a174",target:"_blank",rel:"nofollow",children:"https://cabulous.medium.com/how-does-browser-work-in-2019-part-4-more-about-rendering-phase-fbba0d94a174"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"\u4E86\u89E3\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F\u6211\u4EEC\u53EF\u4EE5\u81EA\u4FE1\u5730\u63D0\u9AD8\u6027\u80FD\u3002"}),`
`,n(e.p,{children:"\u5728\u4F7F\u7528\u6D4F\u89C8\u5668\u65F6\uFF0C\u901A\u5E38\uFF0C\u6211\u4EEC\u4F1A\u6253\u5F00\u4E00\u4E2AURL\uFF0C\u4E0E\u9875\u9762\u4EA4\u4E92\uFF0C\u5E76\u5728\u83B7\u53D6\u6211\u4EEC\u9700\u8981\u7684\u5185\u5BB9\u540E\u5173\u95ED\u9009\u9879\u5361\u3002"}),`
`,n(e.p,{children:"\u4EE5\u4E0B\u662F\u7528\u6237\u4E0E\u6D4F\u89C8\u5668\u4E4B\u95F4\u6574\u4E2A\u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1A"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"\u52A0\u8F7D\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u8F93\u5165 URL \u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002"}),`
`,n(e.li,{children:"\u4EA4\u4E92\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u53EF\u4EE5\u6D4F\u89C8\u3001\u70B9\u51FB\u9875\u9762\u5E76\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002"}),`
`,n(e.li,{children:"\u5173\u95ED\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u5355\u51FB\u9009\u9879\u5361\u4E0A\u7684\u5173\u95ED\u6309\u94AE\u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002"}),`
`]}),`
`,n(e.p,{children:"Web \u524D\u7AEF\u4F18\u5316\u4FA7\u91CD\u4E8E\u52A0\u8F7D\u548C\u4EA4\u4E92\u9636\u6BB5\u3002"}),`
`,n(e.p,{children:"\u4ECE\u5BFC\u822A\u5230\u6E32\u67D3\u9636\u6BB5\uFF0C\u5173\u952E\u7684\u4F18\u5316\u70B9\u662F DOM \u6784\u5EFA\u9636\u6BB5\u3002\u8BB8\u591A\u56E0\u7D20\u53EF\u80FD\u4F1A\u963B\u788D HTML \u89E3\u6790\u5E76\u5EF6\u957F\u6574\u4E2A\u6E32\u67D3\u9636\u6BB5\u3002\u5F53\u5B83\u53D1\u751F\u65F6\uFF0C\u4F5C\u4E3A\u7528\u6237\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u76EF\u7740\u767D\u5C4F\u770B\u4E00\u4F1A\u513F\u3002"}),`
`,r(e.h2,{id:"dom-construction-blocking-dom-\u6784\u9020\u963B\u585E",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dom-construction-blocking-dom-\u6784\u9020\u963B\u585E",children:"#"}),"DOM construction blocking (DOM \u6784\u9020\u963B\u585E)"]}),`
`,n(e.p,{children:"\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E13\u6CE8\u4E8E\u6E32\u67D3\u9636\u6BB5\uFF0C\u5E76\u8DF3\u8FC7\u4E86 HTML \u89E3\u6790\u7684\u4E00\u4E9B\u7EC6\u8282\u3002"}),`
`,n(e.p,{children:"HTML \u6587\u6863\u5305\u542B\u7684\u4E0D\u4EC5\u4EC5\u662F HTML\uFF0C\u5305\u62EC CSS \u6837\u5F0F\u548C JavaScript \u6587\u4EF6\u3002\u4E24\u8005\u90FD\u53EF\u80FD\u963B\u585E DOM \u6784\u5EFA\u5E76\u964D\u4F4E Web \u6027\u80FD\u3002"}),`
`,r(e.h3,{id:"how-javascript-blocks-the-dom-construction--javascript-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-javascript-blocks-the-dom-construction--javascript-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",children:"#"}),"How JavaScript blocks the DOM construction?  (JavaScript \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u5F00\u59CB\uFF0C\u4E00\u4E2A\u5185\u8054 JavaScript\u3002"}),`
`,r(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:r(e.code,{className:"",children:[r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"id"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"target"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"old text"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<script>"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"elem"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getElementById"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"target"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")\uFF1B"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"elem"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"innerText"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"new text"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<\/script>"})}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"})]})]}),`
`,n(e.p,{children:"\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u811A\u672C\u66FF\u6362\u5143\u7D20\u7684\u5185\u90E8\u6587\u672C\u3002\u5B83\u4FEE\u6539\u4E86 DOM \u6811\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200019.png",alt:"20231108200019"})}),`
`,n(e.p,{children:"HTML \u89E3\u6790\u5668\u8D1F\u8D23\u201C\u7FFB\u8BD1\u201DHTML \u6587\u6863\u3002\u5F53\u770B\u5230 JavaScript \u811A\u672C\u65F6\uFF0CHTML \u4F1A\u505C\u6B62\u89E3\u6790 DOM \u5E76\u7ACB\u5373\u6267\u884C\u5B83\u3002\u6267\u884C\u5B8C\u6210\u540E\uFF0CHTML \u89E3\u6790\u5668\u5C06\u7EE7\u7EED\u89E3\u6790 HTML \u6587\u6863\u7684\u5176\u4F59\u90E8\u5206\u3002"}),`
`,n(e.p,{children:"\u5982\u679C\u5B83\u662F\u94FE\u63A5\u5230\u811A\u672C\u6807\u7B7E\u7684 JavaScript \u6587\u4EF6\u600E\u4E48\u529E\uFF1F"}),`
`,r(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:r(e.code,{className:"",children:[r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"id"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"target"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"old Text"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<script"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"src"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"script.js"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"})]})]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200446.png",alt:"20231108200446"})}),`
`,n(e.p,{children:"\u5F53\u770B\u5230\u94FE\u63A5\u7684\u811A\u672C\u6587\u4EF6\u65F6\uFF0CHTML \u89E3\u6790\u5668\u4F1A\u518D\u6B21\u505C\u6B62 DOM \u6811\u6784\u9020\u3002\u540C\u65F6\uFF0C\u6E32\u67D3\u5668\u8FDB\u7A0B\u4E0E\u7F51\u7EDC\u8FDB\u7A0B\u901A\u4FE1\uFF0C\u8981\u6C42\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D JavaScript \u6587\u4EF6\u3002\u5F53\u7F51\u7EDC\u8FDB\u7A0B\u4F20\u9001\u6570\u636E\u65F6\uFF0C\u6E32\u67D3\u5668\u8FDB\u7A0B\u4F1A\u5148\u6267\u884C\u811A\u672C\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u89E3\u6790 HTML \u6587\u4EF6\u3002"}),`
`,n(e.p,{children:"\u4E0B\u8F7D\u8FC7\u7A0B\u589E\u52A0\u4E86\u5728\u6D4F\u89C8\u5668\u6267\u884C JavaScript \u7684\u65F6\u95F4\u4E4B\u4E0A\u6784\u5EFA DOM \u6811\u7684\u65F6\u95F4\u3002"}),`
`,r(e.h3,{id:"how-css-blocks-the-dom-construction--css-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-css-blocks-the-dom-construction--css-\u5982\u4F55\u963B\u6B62-dom-\u6784\u9020",children:"#"}),"How CSS blocks the DOM construction?  (CSS \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)"]}),`
`,n(e.p,{children:"CSS \u4E0D\u4F1A\u963B\u585E DOM \u6784\u9020\u3002\u5F53\u4E0E JavaScript \u7ED3\u5408\u4F7F\u7528\u65F6\uFF0C\u5B83\u786E\u5B9E\u5982\u6B64\u3002"}),`
`,r(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:r(e.code,{className:"",children:[r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<style"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"src"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"styles.css"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:"></style>"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"id"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"target"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Old text"}),n(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<script>"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"elem"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getElementById"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"target"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")\uFF1B"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"elem"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"style"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"color"}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"blue"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:":"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<\/script>"})}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"})]})]}),`
`,n(e.p,{children:"\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CHTML \u4E2D\u5F15\u7528\u4E86 CSS \u6837\u5F0F\u6587\u4EF6\uFF0CJavaScript \u4FEE\u6539\u4E86\u201Cstyles.css\u201D\u6587\u4EF6\u4E2D\u7684\u6837\u5F0F\u3002"}),`
`,n(e.p,{children:n(e.strong,{children:"\u6E32\u67D3\u5668\u8FDB\u7A0B\u9700\u8981\u51C6\u5907\u597D\u8BA1\u7B97\u6837\u5F0F\uFF0C\u7136\u540E\u624D\u80FD\u6267\u884C JavaScript \u6765\u4FEE\u6539\u6837\u5F0F\u3002\u56E0\u6B64\uFF0C\u5728\u89E3\u6790 CSS \u6587\u4EF6\u5E76\u5B8C\u6210 JavaScript \u6587\u4EF6\u6267\u884C\u4E4B\u524D\uFF0CHTML \u89E3\u6790\u5668\u65E0\u6CD5\u7EE7\u7EED\u3002"})}),`
`,n(e.p,{children:"\u5728\u5F00\u53D1\u7F51\u7AD9\u65F6\uFF0C\u6211\u4EEC\u7684 HTML \u6587\u6863\u4E2D\u4E0D\u53EF\u907F\u514D\u5730\u4F1A\u5305\u542B\u94FE\u63A5\u6587\u4EF6\u3002"}),`
`,r(e.p,{children:["\u4E3A\u4E86\u52A0\u5FEB\u8BE5\u8FC7\u7A0B\uFF0C",n(e.strong,{children:"\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F"}),"\u5728\u6784\u5EFA DOM \u6811\u65F6\u540C\u65F6\u5FEB\u901F\u626B\u63CF\u6587\u6863\u6570\u636E\u3002\u5982\u679C\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F\u627E\u5230\u4EFB\u4F55\u94FE\u63A5\u7684\u6587\u4EF6\uFF08\u4F8B\u5982 CSS \u548C JavaScript \u6587\u4EF6\uFF09\uFF0C\u5B83\u4F1A\u521B\u5EFA\u4E0E\u7F51\u7EDC\u8FDB\u7A0B\u7684 IPC \u8FDE\u63A5\uFF0C\u5E76\u4ECE\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\u3002"]}),`
`,n(e.p,{children:"\u6E32\u67D3\u5668\u8FDB\u7A0B\u4F55\u65F6\u6062\u590D DOM \u7ED3\u6784\uFF1F\u8FD9\u53D6\u51B3\u4E8E\u4E0B\u8F7D\u65F6\u95F4\u6700\u957F\u7684\u6587\u4EF6\u3002"}),`
`,r(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"DANGER"}),r(e.div,{className:"island-directive-content",children:[n(e.p,{children:"\u539F\u6587\uFF1A"}),n(e.p,{children:"When does the renderer process resume the DOM structuring? It depends on the file taking the most extended length of download time."}),n(e.p,{children:"...\u8FD9\u53D6\u51B3\u4E8E\u4E0B\u8F7D\u65F6\u95F4\u6700\u957F\u7684\u6587\u4EF6\u3002"}),n(e.p,{children:"\u7591\u95EE\uFF1A\u4E0B\u8F7D\u4E0D\u662F\u901A\u8FC7\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F\u53D1\u73B0\u540E\u548C\u6784\u5EFADOM\u7684\u8FC7\u7A0B\u5E76\u884C\u4E0B\u8F7D\u7684\u5417\uFF1F\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u963B\u585EDOM\u7ED3\u6784(\u7684\u6784\u5EFA?)\uFF1F"})]})]}),`
`,n(e.p,{children:"\u5047\u8BBE\u9700\u8981\u4E0B\u8F7D\u4E24\u4E2A\u6587\u4EF6\u3002\u4E00\u4E2A\u6587\u4EF6\u9700\u8981 1 \u79D2\uFF0C\u53E6\u4E00\u4E2A\u6587\u4EF6\u9700\u8981 3 \u79D2\u3002\u603B\u8BA1\u4E3A 3 \u79D2\u3002"}),`
`,r(e.h2,{id:"optimization-in-the-loading-stage-is-about-reducing-the-download-time-\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#optimization-in-the-loading-stage-is-about-reducing-the-download-time-\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4",children:"#"}),"Optimization in the loading stage is about reducing the download time (\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4)"]}),`
`,n(e.p,{children:"\u5728\u6784\u5EFA DOM \u6811\u65F6\uFF0C\u6700\u8017\u65F6\u7684\u90E8\u5206\u662F\u4E0B\u8F7D\u94FE\u63A5\u6587\u4EF6\u548C\u6267\u884C JavaScript\u3002"}),`
`,r(e.h3,{id:"key-indicator--round-trip-delay-time-rtd-\u5173\u952E\u6307\u6807--\u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4-rtd",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#key-indicator--round-trip-delay-time-rtd-\u5173\u952E\u6307\u6807--\u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4-rtd",children:"#"}),"Key indicator \u2014 round-trip delay time (RTD) \u3010\u5173\u952E\u6307\u6807 \u2014 \u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4 \uFF08RTD\uFF09\u3011"]}),`
`,n(e.p,{children:"\u5728\u4F18\u5316\u65B9\u9762\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5173\u952E\u6307\u6807\u6765\u8861\u91CF\u5B83\uFF0C\u8FD9\u6837\u6211\u4EEC\u624D\u80FD\u77E5\u9053\u89E3\u51B3\u65B9\u6848\u662F\u5426\u6709\u6548\u3002"}),`
`,r(e.p,{children:[n(e.a,{href:"https://en.wikipedia.org/wiki/Round-trip_delay_time",target:"_blank",rel:"nofollow",children:"\u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4 \uFF08RTD\uFF09"})," \u6216\u5F80\u8FD4\u65F6\u95F4 \uFF08RTT\uFF09 \u662F\u7535\u4FE1\u4E2D\u7684\u901A\u7528\u672F\u8BED\uFF0C\u7528\u4E8E\u6D4B\u91CF\u53D1\u9001\u548C\u63A5\u6536\u4FE1\u53F7\u6240\u9700\u7684\u65F6\u95F4\u957F\u5EA6\u3002"]}),`
`,n(e.p,{children:"\u5728\u6211\u4EEC\u7684\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u65F6\u95F4\u6D4B\u91CF\u4ECE\u7F51\u7EDC\u8FDB\u7A0B\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u65F6\u5F00\u59CB\uFF0C\u5230\u6536\u5230\u6765\u81EA\u670D\u52A1\u5668\u7684\u5B8C\u6574\u786E\u8BA4\u65F6\u7ED3\u675F\u3002RTD \u662F\u5B8C\u6210\u6B64\u8FC7\u7A0B\u6240\u9700\u7684\u603B\u65F6\u95F4\u957F\u5EA6\u3002"}),`
`,n(e.p,{children:"\u7531\u4E8E TCP \u7684\u529F\u80FD\uFF0C\u6570\u636E\u662F\u4EE5\u5757\u5F62\u5F0F\u53D1\u9001\u7684\u3002\u4EE5CSS\u6587\u4EF6\u4E3A\u4F8B\uFF0C\u5927\u5C0F\u4E3A0.1M\u3002\u901A\u8FC7 HTTP \u53D1\u9001\u7684\u6BCF\u4E2A\u5206\u5757\u6570\u636E\u5305\u7684\u5927\u5C0F\u901A\u5E38\u7EA6\u4E3A 14KB\u3002\u4E00\u4E2A 0.1M \u7684\u6587\u4EF6\u5206\u4E3A 8 \u4E2A\u5305\u3002\u6211\u4EEC\u53EF\u4EE5\u8BF4 CSS \u6587\u4EF6\u9700\u8981 8 \u4E2A RTD \u624D\u80FD\u5B8C\u6210\u3002"}),`
`,n(e.p,{children:"\u4E0B\u8F7D\u4E24\u4E2A\u6587\u4EF6\u600E\u4E48\u6837\uFF1F\u4E00\u4E2A CSS \u6587\u4EF6\u662F 9KB\uFF0C\u56E0\u6B64\u9700\u8981 1 RTD \u624D\u80FD\u4E0B\u8F7D\u3002\u53E6\u4E00\u4E2A JavaScript \u6587\u4EF6\u662F 15KB\uFF0C\u9700\u8981 2 RTD \u624D\u80FD\u5B8C\u6210\u4E0B\u8F7D\u3002\u7531\u4E8E\u4E0B\u8F7D\u662F\u5E76\u884C\u8FDB\u884C\u7684\uFF0C\u56E0\u6B64\u603B\u65F6\u95F4\u4E3A 2 RTD\u3002"}),`
`,n(e.p,{children:"\u8FD9\u91CC\u7684\u8BA1\u7B97\u5E76\u4E0D\u5B8C\u5168\u51C6\u786E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5FFD\u7565\u4E86 TCP \u8FDE\u63A5\u65F6\u95F4\u548C\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4\uFF0C\u4F46\u4F60\u660E\u767D\u4E86\u3002"}),`
`,n(e.p,{children:"\u8003\u8651\u5230RTD\uFF0C\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u8C08\u8C08\u4F18\u5316\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Reduce the number of key resources",n(e.br,{}),`
`,"\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF"]}),`
`,r(e.li,{children:["Minimize the size of key resources",n(e.br,{}),`
`,"\u6700\u5C0F\u5316\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F"]}),`
`]}),`
`,r(e.h3,{id:"reduce-the-number-of-key-resources-\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#reduce-the-number-of-key-resources-\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF",children:"#"}),"Reduce the number of key resources (\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF)"]}),`
`,n(e.p,{children:"\u6709\u54EA\u4E9B\u5173\u952E\u8D44\u6E90\uFF1F\u52A0\u8F7D\u9875\u9762\u65F6\u9700\u8981\u4EFB\u4F55 CSS \u548C JavaScript \u6587\u4EF6\u3002\u6CA1\u6709\u5B83\u4EEC\uFF0C\u60A8\u7684\u7F51\u7AD9\u5C31\u574F\u4E86\u3002"}),`
`,n(e.p,{children:"\u4E3A\u4E86\u51CF\u5C11\u94FE\u63A5\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u57FA\u672C\u7684 CSS \u548C JavaScript \u6570\u636E\u76F4\u63A5\u79FB\u52A8\u5230 HTML \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u907F\u514D\u4E0B\u8F7D\u8FC7\u7A0B\u3002(\u610F\u601D\u662F\u7528\u5185\u8054\u7684\u65B9\u5F0F\u4E66\u5199)"}),`
`,n(e.p,{children:"\u5982\u679C\u67D0\u4E9B\u94FE\u63A5\u7684 JavaScript \u6587\u4EF6\u6CA1\u6709\u6539\u53D8 DOM \u6811\u548C\u6837\u5F0F\uFF0C\u8BF7\u7528\u201Cdefer\u201D\u548C/\u6216\u201Casync\u201D\u6807\u8BB0\u5B83\u4EEC\uFF0C\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u4F1A\u963B\u6B62 DOM \u6784\u9020\u3002"}),`
`,n(e.p,{children:"defer script \u5728 DOM \u51C6\u5907\u5C31\u7EEA\u65F6\u4F46\u5728\u201CDOMContentLoaded\u201D\u4E8B\u4EF6\u4E4B\u524D\u6267\u884C\u3002async script \u72EC\u7ACB\u4E8E\u5176\u4ED6\u811A\u672C\u548C\u4E8B\u4EF6\u3002\u4E00\u65E6\u53EF\u7528\uFF0C\u5B83\u5C31\u4F1A\u8FD0\u884C\u3002"}),`
`,n(e.p,{children:"\u4E00\u4E9B\u4EBA\u8BA4\u4E3A\uFF0C\u6839\u636E\u5A92\u4F53\u67E5\u8BE2\u5C06\u5927\u578BCSS\u6587\u4EF6\u5206\u6210\u8F83\u5C0F\u7684\u6587\u4EF6\u4F1A\u6709\u6240\u5E2E\u52A9\u3002\u8FD9\u5E76\u4E0D\u5B8C\u5168\u6B63\u786E\u3002\u5373\u4F7F\u67E5\u8BE2\u8FD4\u56DEfalse\uFF0C\u5E26\u6709\u5A92\u4F53\u67E5\u8BE2\u7684\u6837\u5F0F\u8868\u4ECD\u7136\u4F1A\u4E0B\u8F7D\u3002\u53EA\u662F\u5185\u5BB9\u6CA1\u6709\u5E94\u7528\u6837\u5F0F\u3002\u56E0\u6B64\uFF0C\u5B83\u4E0D\u4F1A\u51CF\u5C11\u4E0B\u8F7D\u8BF7\u6C42\u3002"}),`
`,r(e.h3,{id:"reduce-the-size-of-key-resources-\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#reduce-the-size-of-key-resources-\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F",children:"#"}),"Reduce the size of key resources (\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F)"]}),`
`,n(e.p,{children:"\u6587\u4EF6\u5927\u5C0F\u8D8A\u5C0F\uFF0CRTD\u8D8A\u5C11\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u538B\u7F29 CSS \u548C JavaScript \u6587\u4EF6\u6765\u5B9E\u73B0\u5B83\u3002\u6B64\u5916\uFF0C\u5927\u591A\u6570\u538B\u7F29\u5DE5\u5177\u4F1A\u5220\u9664\u6570\u636E\u4E2D\u7684\u6CE8\u91CA\uFF0C\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F\u3002"}),`
`,r(e.h2,{id:"references\u5F15\u7528",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#references\u5F15\u7528",children:"#"}),"References\xA0\u5F15\u7528"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:r(e.a,{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part3",target:"_blank",rel:"nofollow",children:["Inside look at modern web browser (part 3)",n(e.br,{}),`
`,"\u73B0\u4EE3 Web \u6D4F\u89C8\u5668\u5185\u90E8\u4ECB\u7ECD\uFF08\u7B2C 3 \u90E8\u5206\uFF09"]})}),`
`,n(e.li,{children:r(e.a,{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part4",target:"_blank",rel:"nofollow",children:["Inside look at modern web browser (part 4)",n(e.br,{}),`
`,"\u6DF1\u5165\u4E86\u89E3\u73B0\u4EE3 Web \u6D4F\u89C8\u5668\uFF08\u7B2C 4 \u90E8\u5206\uFF09"]})}),`
`]})]})}function d(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(c,l)})):c(l)}const h="2023/11/9 01:52:20",p=`# \u6D4F\u89C8\u5668\u5982\u4F55\u9010\u6B65\u5DE5\u4F5C \u2014 \u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\uFF08\u7B2C 4 \u90E8\u5206\uFF09

\`metadata:\`

**\u539F\u6807\u9898:** How does browser work step by step \u2014 optimization in the loading stage (part 4)

**\u94FE\u63A5:** https://cabulous.medium.com/how-does-browser-work-in-2019-part-4-more-about-rendering-phase-fbba0d94a174

---

\u4E86\u89E3\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F\u6211\u4EEC\u53EF\u4EE5\u81EA\u4FE1\u5730\u63D0\u9AD8\u6027\u80FD\u3002

\u5728\u4F7F\u7528\u6D4F\u89C8\u5668\u65F6\uFF0C\u901A\u5E38\uFF0C\u6211\u4EEC\u4F1A\u6253\u5F00\u4E00\u4E2AURL\uFF0C\u4E0E\u9875\u9762\u4EA4\u4E92\uFF0C\u5E76\u5728\u83B7\u53D6\u6211\u4EEC\u9700\u8981\u7684\u5185\u5BB9\u540E\u5173\u95ED\u9009\u9879\u5361\u3002

\u4EE5\u4E0B\u662F\u7528\u6237\u4E0E\u6D4F\u89C8\u5668\u4E4B\u95F4\u6574\u4E2A\u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1A

1. \u52A0\u8F7D\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u8F93\u5165 URL \u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002
2. \u4EA4\u4E92\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u53EF\u4EE5\u6D4F\u89C8\u3001\u70B9\u51FB\u9875\u9762\u5E76\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002
3. \u5173\u95ED\u9636\u6BB5 \u2014 \u5F53\u6211\u4EEC\u5355\u51FB\u9009\u9879\u5361\u4E0A\u7684\u5173\u95ED\u6309\u94AE\u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u4E86\u3002

Web \u524D\u7AEF\u4F18\u5316\u4FA7\u91CD\u4E8E\u52A0\u8F7D\u548C\u4EA4\u4E92\u9636\u6BB5\u3002

\u4ECE\u5BFC\u822A\u5230\u6E32\u67D3\u9636\u6BB5\uFF0C\u5173\u952E\u7684\u4F18\u5316\u70B9\u662F DOM \u6784\u5EFA\u9636\u6BB5\u3002\u8BB8\u591A\u56E0\u7D20\u53EF\u80FD\u4F1A\u963B\u788D HTML \u89E3\u6790\u5E76\u5EF6\u957F\u6574\u4E2A\u6E32\u67D3\u9636\u6BB5\u3002\u5F53\u5B83\u53D1\u751F\u65F6\uFF0C\u4F5C\u4E3A\u7528\u6237\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u76EF\u7740\u767D\u5C4F\u770B\u4E00\u4F1A\u513F\u3002

## DOM construction blocking (DOM \u6784\u9020\u963B\u585E)

\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E13\u6CE8\u4E8E\u6E32\u67D3\u9636\u6BB5\uFF0C\u5E76\u8DF3\u8FC7\u4E86 HTML \u89E3\u6790\u7684\u4E00\u4E9B\u7EC6\u8282\u3002

HTML \u6587\u6863\u5305\u542B\u7684\u4E0D\u4EC5\u4EC5\u662F HTML\uFF0C\u5305\u62EC CSS \u6837\u5F0F\u548C JavaScript \u6587\u4EF6\u3002\u4E24\u8005\u90FD\u53EF\u80FD\u963B\u585E DOM \u6784\u5EFA\u5E76\u964D\u4F4E Web \u6027\u80FD\u3002

### How JavaScript blocks the DOM construction?  (JavaScript \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)

\u8BA9\u6211\u4EEC\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u5F00\u59CB\uFF0C\u4E00\u4E2A\u5185\u8054 JavaScript\u3002

\`\`\`html
<div id='target'>old text</div>
<script>
  const elem = document.getElementById('target')\uFF1B
  elem.innerText = 'new text';
<\/script>
\`\`\`

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u811A\u672C\u66FF\u6362\u5143\u7D20\u7684\u5185\u90E8\u6587\u672C\u3002\u5B83\u4FEE\u6539\u4E86 DOM \u6811\u3002

![20231108200019](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200019.png)

HTML \u89E3\u6790\u5668\u8D1F\u8D23\u201C\u7FFB\u8BD1\u201DHTML \u6587\u6863\u3002\u5F53\u770B\u5230 JavaScript \u811A\u672C\u65F6\uFF0CHTML \u4F1A\u505C\u6B62\u89E3\u6790 DOM \u5E76\u7ACB\u5373\u6267\u884C\u5B83\u3002\u6267\u884C\u5B8C\u6210\u540E\uFF0CHTML \u89E3\u6790\u5668\u5C06\u7EE7\u7EED\u89E3\u6790 HTML \u6587\u6863\u7684\u5176\u4F59\u90E8\u5206\u3002

\u5982\u679C\u5B83\u662F\u94FE\u63A5\u5230\u811A\u672C\u6807\u7B7E\u7684 JavaScript \u6587\u4EF6\u600E\u4E48\u529E\uFF1F

\`\`\`html
<div id='target'>old Text</div>
<script src='script.js'><\/script>
\`\`\`

![20231108200446](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231108200446.png)

\u5F53\u770B\u5230\u94FE\u63A5\u7684\u811A\u672C\u6587\u4EF6\u65F6\uFF0CHTML \u89E3\u6790\u5668\u4F1A\u518D\u6B21\u505C\u6B62 DOM \u6811\u6784\u9020\u3002\u540C\u65F6\uFF0C\u6E32\u67D3\u5668\u8FDB\u7A0B\u4E0E\u7F51\u7EDC\u8FDB\u7A0B\u901A\u4FE1\uFF0C\u8981\u6C42\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D JavaScript \u6587\u4EF6\u3002\u5F53\u7F51\u7EDC\u8FDB\u7A0B\u4F20\u9001\u6570\u636E\u65F6\uFF0C\u6E32\u67D3\u5668\u8FDB\u7A0B\u4F1A\u5148\u6267\u884C\u811A\u672C\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u89E3\u6790 HTML \u6587\u4EF6\u3002

\u4E0B\u8F7D\u8FC7\u7A0B\u589E\u52A0\u4E86\u5728\u6D4F\u89C8\u5668\u6267\u884C JavaScript \u7684\u65F6\u95F4\u4E4B\u4E0A\u6784\u5EFA DOM \u6811\u7684\u65F6\u95F4\u3002

### How CSS blocks the DOM construction?  (CSS \u5982\u4F55\u963B\u6B62 DOM \u6784\u9020\uFF1F)

CSS \u4E0D\u4F1A\u963B\u585E DOM \u6784\u9020\u3002\u5F53\u4E0E JavaScript \u7ED3\u5408\u4F7F\u7528\u65F6\uFF0C\u5B83\u786E\u5B9E\u5982\u6B64\u3002

\`\`\`html
<style src='styles.css'></style>
<div id='target'>Old text</div>
<script>
  const elem = document.getElementById('target')\uFF1B
  elem.style.color= 'blue':
<\/script>
\`\`\`

\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CHTML \u4E2D\u5F15\u7528\u4E86 CSS \u6837\u5F0F\u6587\u4EF6\uFF0CJavaScript \u4FEE\u6539\u4E86\u201Cstyles.css\u201D\u6587\u4EF6\u4E2D\u7684\u6837\u5F0F\u3002

**\u6E32\u67D3\u5668\u8FDB\u7A0B\u9700\u8981\u51C6\u5907\u597D\u8BA1\u7B97\u6837\u5F0F\uFF0C\u7136\u540E\u624D\u80FD\u6267\u884C JavaScript \u6765\u4FEE\u6539\u6837\u5F0F\u3002\u56E0\u6B64\uFF0C\u5728\u89E3\u6790 CSS \u6587\u4EF6\u5E76\u5B8C\u6210 JavaScript \u6587\u4EF6\u6267\u884C\u4E4B\u524D\uFF0CHTML \u89E3\u6790\u5668\u65E0\u6CD5\u7EE7\u7EED\u3002**

\u5728\u5F00\u53D1\u7F51\u7AD9\u65F6\uFF0C\u6211\u4EEC\u7684 HTML \u6587\u6863\u4E2D\u4E0D\u53EF\u907F\u514D\u5730\u4F1A\u5305\u542B\u94FE\u63A5\u6587\u4EF6\u3002

\u4E3A\u4E86\u52A0\u5FEB\u8BE5\u8FC7\u7A0B\uFF0C**\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F**\u5728\u6784\u5EFA DOM \u6811\u65F6\u540C\u65F6\u5FEB\u901F\u626B\u63CF\u6587\u6863\u6570\u636E\u3002\u5982\u679C\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F\u627E\u5230\u4EFB\u4F55\u94FE\u63A5\u7684\u6587\u4EF6\uFF08\u4F8B\u5982 CSS \u548C JavaScript \u6587\u4EF6\uFF09\uFF0C\u5B83\u4F1A\u521B\u5EFA\u4E0E\u7F51\u7EDC\u8FDB\u7A0B\u7684 IPC \u8FDE\u63A5\uFF0C\u5E76\u4ECE\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\u3002

\u6E32\u67D3\u5668\u8FDB\u7A0B\u4F55\u65F6\u6062\u590D DOM \u7ED3\u6784\uFF1F\u8FD9\u53D6\u51B3\u4E8E\u4E0B\u8F7D\u65F6\u95F4\u6700\u957F\u7684\u6587\u4EF6\u3002

:::danger
\u539F\u6587\uFF1A

When does the renderer process resume the DOM structuring? It depends on the file taking the most extended length of download time.

...\u8FD9\u53D6\u51B3\u4E8E\u4E0B\u8F7D\u65F6\u95F4\u6700\u957F\u7684\u6587\u4EF6\u3002 

\u7591\u95EE\uFF1A\u4E0B\u8F7D\u4E0D\u662F\u901A\u8FC7\u9884\u52A0\u8F7D\u626B\u63CF\u7A0B\u5E8F\u53D1\u73B0\u540E\u548C\u6784\u5EFADOM\u7684\u8FC7\u7A0B\u5E76\u884C\u4E0B\u8F7D\u7684\u5417\uFF1F\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u963B\u585EDOM\u7ED3\u6784(\u7684\u6784\u5EFA?)\uFF1F
:::

\u5047\u8BBE\u9700\u8981\u4E0B\u8F7D\u4E24\u4E2A\u6587\u4EF6\u3002\u4E00\u4E2A\u6587\u4EF6\u9700\u8981 1 \u79D2\uFF0C\u53E6\u4E00\u4E2A\u6587\u4EF6\u9700\u8981 3 \u79D2\u3002\u603B\u8BA1\u4E3A 3 \u79D2\u3002

## Optimization in the loading stage is about reducing the download time (\u52A0\u8F7D\u9636\u6BB5\u7684\u4F18\u5316\u662F\u4E3A\u4E86\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4)

\u5728\u6784\u5EFA DOM \u6811\u65F6\uFF0C\u6700\u8017\u65F6\u7684\u90E8\u5206\u662F\u4E0B\u8F7D\u94FE\u63A5\u6587\u4EF6\u548C\u6267\u884C JavaScript\u3002

### Key indicator \u2014 round-trip delay time (RTD) \u3010\u5173\u952E\u6307\u6807 \u2014 \u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4 \uFF08RTD\uFF09\u3011

\u5728\u4F18\u5316\u65B9\u9762\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5173\u952E\u6307\u6807\u6765\u8861\u91CF\u5B83\uFF0C\u8FD9\u6837\u6211\u4EEC\u624D\u80FD\u77E5\u9053\u89E3\u51B3\u65B9\u6848\u662F\u5426\u6709\u6548\u3002

[\u5F80\u8FD4\u5EF6\u8FDF\u65F6\u95F4 \uFF08RTD\uFF09](https://en.wikipedia.org/wiki/Round-trip_delay_time) \u6216\u5F80\u8FD4\u65F6\u95F4 \uFF08RTT\uFF09 \u662F\u7535\u4FE1\u4E2D\u7684\u901A\u7528\u672F\u8BED\uFF0C\u7528\u4E8E\u6D4B\u91CF\u53D1\u9001\u548C\u63A5\u6536\u4FE1\u53F7\u6240\u9700\u7684\u65F6\u95F4\u957F\u5EA6\u3002

\u5728\u6211\u4EEC\u7684\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u65F6\u95F4\u6D4B\u91CF\u4ECE\u7F51\u7EDC\u8FDB\u7A0B\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u65F6\u5F00\u59CB\uFF0C\u5230\u6536\u5230\u6765\u81EA\u670D\u52A1\u5668\u7684\u5B8C\u6574\u786E\u8BA4\u65F6\u7ED3\u675F\u3002RTD \u662F\u5B8C\u6210\u6B64\u8FC7\u7A0B\u6240\u9700\u7684\u603B\u65F6\u95F4\u957F\u5EA6\u3002

\u7531\u4E8E TCP \u7684\u529F\u80FD\uFF0C\u6570\u636E\u662F\u4EE5\u5757\u5F62\u5F0F\u53D1\u9001\u7684\u3002\u4EE5CSS\u6587\u4EF6\u4E3A\u4F8B\uFF0C\u5927\u5C0F\u4E3A0.1M\u3002\u901A\u8FC7 HTTP \u53D1\u9001\u7684\u6BCF\u4E2A\u5206\u5757\u6570\u636E\u5305\u7684\u5927\u5C0F\u901A\u5E38\u7EA6\u4E3A 14KB\u3002\u4E00\u4E2A 0.1M \u7684\u6587\u4EF6\u5206\u4E3A 8 \u4E2A\u5305\u3002\u6211\u4EEC\u53EF\u4EE5\u8BF4 CSS \u6587\u4EF6\u9700\u8981 8 \u4E2A RTD \u624D\u80FD\u5B8C\u6210\u3002

\u4E0B\u8F7D\u4E24\u4E2A\u6587\u4EF6\u600E\u4E48\u6837\uFF1F\u4E00\u4E2A CSS \u6587\u4EF6\u662F 9KB\uFF0C\u56E0\u6B64\u9700\u8981 1 RTD \u624D\u80FD\u4E0B\u8F7D\u3002\u53E6\u4E00\u4E2A JavaScript \u6587\u4EF6\u662F 15KB\uFF0C\u9700\u8981 2 RTD \u624D\u80FD\u5B8C\u6210\u4E0B\u8F7D\u3002\u7531\u4E8E\u4E0B\u8F7D\u662F\u5E76\u884C\u8FDB\u884C\u7684\uFF0C\u56E0\u6B64\u603B\u65F6\u95F4\u4E3A 2 RTD\u3002

\u8FD9\u91CC\u7684\u8BA1\u7B97\u5E76\u4E0D\u5B8C\u5168\u51C6\u786E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5FFD\u7565\u4E86 TCP \u8FDE\u63A5\u65F6\u95F4\u548C\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4\uFF0C\u4F46\u4F60\u660E\u767D\u4E86\u3002

\u8003\u8651\u5230RTD\uFF0C\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u8C08\u8C08\u4F18\u5316\uFF1A

*   Reduce the number of key resources  
    \u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF
*   Minimize the size of key resources  
    \u6700\u5C0F\u5316\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F

### Reduce the number of key resources (\u51CF\u5C11\u5173\u952E\u8D44\u6E90\u7684\u6570\u91CF)

\u6709\u54EA\u4E9B\u5173\u952E\u8D44\u6E90\uFF1F\u52A0\u8F7D\u9875\u9762\u65F6\u9700\u8981\u4EFB\u4F55 CSS \u548C JavaScript \u6587\u4EF6\u3002\u6CA1\u6709\u5B83\u4EEC\uFF0C\u60A8\u7684\u7F51\u7AD9\u5C31\u574F\u4E86\u3002

\u4E3A\u4E86\u51CF\u5C11\u94FE\u63A5\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u57FA\u672C\u7684 CSS \u548C JavaScript \u6570\u636E\u76F4\u63A5\u79FB\u52A8\u5230 HTML \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u907F\u514D\u4E0B\u8F7D\u8FC7\u7A0B\u3002(\u610F\u601D\u662F\u7528\u5185\u8054\u7684\u65B9\u5F0F\u4E66\u5199)

\u5982\u679C\u67D0\u4E9B\u94FE\u63A5\u7684 JavaScript \u6587\u4EF6\u6CA1\u6709\u6539\u53D8 DOM \u6811\u548C\u6837\u5F0F\uFF0C\u8BF7\u7528\u201Cdefer\u201D\u548C/\u6216\u201Casync\u201D\u6807\u8BB0\u5B83\u4EEC\uFF0C\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u4F1A\u963B\u6B62 DOM \u6784\u9020\u3002

defer script \u5728 DOM \u51C6\u5907\u5C31\u7EEA\u65F6\u4F46\u5728\u201CDOMContentLoaded\u201D\u4E8B\u4EF6\u4E4B\u524D\u6267\u884C\u3002async script \u72EC\u7ACB\u4E8E\u5176\u4ED6\u811A\u672C\u548C\u4E8B\u4EF6\u3002\u4E00\u65E6\u53EF\u7528\uFF0C\u5B83\u5C31\u4F1A\u8FD0\u884C\u3002

\u4E00\u4E9B\u4EBA\u8BA4\u4E3A\uFF0C\u6839\u636E\u5A92\u4F53\u67E5\u8BE2\u5C06\u5927\u578BCSS\u6587\u4EF6\u5206\u6210\u8F83\u5C0F\u7684\u6587\u4EF6\u4F1A\u6709\u6240\u5E2E\u52A9\u3002\u8FD9\u5E76\u4E0D\u5B8C\u5168\u6B63\u786E\u3002\u5373\u4F7F\u67E5\u8BE2\u8FD4\u56DEfalse\uFF0C\u5E26\u6709\u5A92\u4F53\u67E5\u8BE2\u7684\u6837\u5F0F\u8868\u4ECD\u7136\u4F1A\u4E0B\u8F7D\u3002\u53EA\u662F\u5185\u5BB9\u6CA1\u6709\u5E94\u7528\u6837\u5F0F\u3002\u56E0\u6B64\uFF0C\u5B83\u4E0D\u4F1A\u51CF\u5C11\u4E0B\u8F7D\u8BF7\u6C42\u3002

### Reduce the size of key resources (\u51CF\u5C0F\u5173\u952E\u8D44\u6E90\u7684\u5927\u5C0F)

\u6587\u4EF6\u5927\u5C0F\u8D8A\u5C0F\uFF0CRTD\u8D8A\u5C11\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u538B\u7F29 CSS \u548C JavaScript \u6587\u4EF6\u6765\u5B9E\u73B0\u5B83\u3002\u6B64\u5916\uFF0C\u5927\u591A\u6570\u538B\u7F29\u5DE5\u5177\u4F1A\u5220\u9664\u6570\u636E\u4E2D\u7684\u6CE8\u91CA\uFF0C\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F\u3002

## References\xA0\u5F15\u7528

*   [Inside look at modern web browser (part 3)  
    \u73B0\u4EE3 Web \u6D4F\u89C8\u5668\u5185\u90E8\u4ECB\u7ECD\uFF08\u7B2C 3 \u90E8\u5206\uFF09](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
*   [Inside look at modern web browser (part 4)  
    \u6DF1\u5165\u4E86\u89E3\u73B0\u4EE3 Web \u6D4F\u89C8\u5668\uFF08\u7B2C 4 \u90E8\u5206\uFF09](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
































































`;export{p as content,d as default,o as frontmatter,h as lastUpdatedTime,a as title,t as toc};
