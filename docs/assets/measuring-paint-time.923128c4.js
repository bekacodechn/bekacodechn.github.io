import{jsx as n,jsxs as l,Fragment as a}from"react/jsx-runtime";const i=void 0,o=[{id:"why-capture-paint-time",text:"Why capture Paint time?",depth:2},{id:"when-does-paint-occur",text:"When does Paint occur?",depth:2},{id:"detecting-when-paint-occurs-\u68C0\u6D4B-paint-\u4F55\u65F6\u53D1\u751F",text:"Detecting when Paint occurs \u68C0\u6D4B Paint \u4F55\u65F6\u53D1\u751F",depth:2},{id:"how-does-this-work",text:"How does this work?",depth:2},{id:"requestanimationframe",text:"requestAnimationFrame",depth:3},{id:"messagechannel",text:"MessageChannel",depth:3},{id:"putting-it-together",text:"Putting it together",depth:3},{id:"how-accurate-is-this",text:"How accurate is this?",depth:2},{id:"example",text:"Example",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],t="\u68C0\u6D4B\u6D4F\u89C8\u5668\u4F55\u65F6\u5728 JavaScript \u4E2D\u7ED8\u5236Frame";function r(s){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",ul:"ul",li:"li",div:"div",em:"em",button:"button",span:"span",pre:"pre",h3:"h3"},s.components);return l(a,{children:[l(e.h1,{id:"\u68C0\u6D4B\u6D4F\u89C8\u5668\u4F55\u65F6\u5728-javascript-\u4E2D\u7ED8\u5236frame",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u68C0\u6D4B\u6D4F\u89C8\u5668\u4F55\u65F6\u5728-javascript-\u4E2D\u7ED8\u5236frame",children:"#"}),"\u68C0\u6D4B\u6D4F\u89C8\u5668\u4F55\u65F6\u5728 JavaScript \u4E2D\u7ED8\u5236Frame"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,l(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Detecting when the Browser Paints Frames in JavaScript"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/measuring-paint-time/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/measuring-paint-time/"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:n(e.a,{href:"/chrome/performance/tips/browser-process-model",children:"asdf"})}),`
`,n(e.p,{children:"\u60A8\u7684\u6027\u80FD\u6D4B\u91CF\u662F\u5426\u80FD\u6355\u6349\u5230\u6D4F\u89C8\u5668\u5411\u7528\u6237\u6E32\u67D3\u50CF\u7D20\u7684\u65F6\u95F4\uFF1F"}),`
`,n(e.p,{children:"\u5F88\u53EF\u80FD\u4E0D\u662F\uFF01\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u5927\u591A\u6570\u5F00\u53D1\u4EBA\u5458\u90FD\u662F\u5728 React \u6216\u5176\u4ED6 JS \u4EE3\u7801\u6784\u5EFA DOM \u7684\u67D0\u4E2A\u4EFB\u610F\u65F6\u95F4\u6355\u83B7\u6E32\u67D3\u65F6\u95F4\u6307\u6807\u3002"}),`
`,n(e.p,{children:"\u8FD9\u5E76\u4E0D\u5947\u602A\uFF0C\u56E0\u4E3A\u9664\u4E86\u9875\u9762\u52A0\u8F7D\u65F6\u7684\u521D\u59CB\u5E27\u7ED8\u5236\u4E4B\u5916\uFF0C\u6D4F\u89C8\u5668\u5E76\u6CA1\u6709\u63D0\u4F9B\u901A\u77E5\u5F00\u53D1\u4EBA\u5458\u7ED8\u5236\u4E8B\u4EF6\u53D1\u751F\u7684 API\u3002"}),`
`,n(e.p,{children:"\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u751F\u547D\u5468\u671F\u7684\u4EFB\u610F\u65F6\u95F4\u70B9\u6D4B\u91CF\u50CF\u7D20\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\u7684\u65F6\u95F4\uFF0C\u4EE5\u53CA\u5B83\u5728\u5F15\u64CE\u4E0B\u7684\u5DE5\u4F5C\u539F\u7406\u3002"}),`
`,l(e.h2,{id:"why-capture-paint-time",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#why-capture-paint-time",children:"#"}),"Why capture Paint time?"]}),`
`,n(e.p,{children:"\u6355\u83B7\u7ED8\u5236\u65F6\u95F4\u662F\u8861\u91CF\u7528\u6237\u6700\u91CD\u8981\u7684\u573A\u666F\u4E4B\u4E00\u2014\u2014UI \u5448\u73B0\u5728\u4ED6\u4EEC\u7684\u5C4F\u5E55\u4E0A\uFF01"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234109.png",alt:"20231110234109"})}),`
`,n(e.p,{children:"\u5B83\u8FD8\u53EF\u4EE5\u5E2E\u52A9\u7A81\u51FA\u663E\u793ADOM\u66F4\u65B0\u548C\u751F\u6210\u5E27\u4E4B\u95F4\u7684\u4EFB\u4F55\u989D\u5916\u65F6\u95F4\u6216\u4F4E\u6548\u7387\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234225.png",alt:"20231110234225"})}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234252.png",alt:"20231110234252"})}),`
`,n(e.p,{children:"DOM \u66F4\u65B0\u4EFB\u52A1\u548C\u5E27\u4E4B\u95F4\u7684\u4E0D\u8DB3\u4E4B\u5904\u53EF\u80FD\u5305\u62EC"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"\u6E32\u67D3\u6B65\u9AA4\u65F6\u95F4\u957F-\u60A8\u53EF\u80FD\u9700\u8981\u4E00\u4E2A\u5177\u6709\u8BB8\u591A\u5143\u7D20\u548C\u6602\u8D35\u89C6\u89C9\u5C5E\u6027\u7684\u590D\u6742UI"}),`
`,n(e.li,{children:"\u957FJS\u4EFB\u52A1-\u60A8\u7684JS DOM\u66F4\u65B0\u4EFB\u52A1\u5F88\u6162\uFF0C\u5E76\u4E14\u4F1A\u963B\u6B62\u6D4F\u89C8\u5668\u751F\u6210\u5E27"}),`
`,n(e.li,{children:"\u7ADE\u4E89\u4EFB\u52A1-\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u88AB\u4EFB\u52A1\u6DF9\u6CA1\uFF0C\u5E76\u5728\u60A8\u7684\u4EFB\u52A1\u548C\u751F\u6210\u5E27\u4E4B\u95F4\u8FD0\u884C\u5176\u4ED6\u4EFB\u52A1"}),`
`]}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"\u539F\u6587"}),n(e.div,{className:"island-directive-content",children:l(e.ul,{children:[`
`,l(e.li,{children:[n(e.em,{children:"Long Render Steps time"}),"\xA0- you may have due a complex UIs with many elements and expensive visual properties"]}),`
`,l(e.li,{children:[n(e.a,{href:"https://webperf.tips/tip/long-tasks",target:"_blank",rel:"nofollow",children:n(e.em,{children:"Long JS Tasks"})}),"\xA0- your JS DOM update Tasks are slow and prevent the browser from producing a Frame"]}),`
`,l(e.li,{children:[n(e.a,{href:"https://webperf.tips/tip/competing-tasks",target:"_blank",rel:"nofollow",children:n(e.em,{children:"Competing Tasks"})}),"\xA0- the browser's Task Queue is flooded with Tasks, and runs other tasks between your Task and producing a Frame"]}),`
`]})})]}),`
`,l(e.h2,{id:"when-does-paint-occur",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#when-does-paint-occur",children:"#"}),"When does Paint occur?"]}),`
`,n(e.p,{children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u8D1F\u8D23\u4EA4\u9519\u6267\u884C JavaScript \u4EFB\u52A1\uFF08\u5982 React DOM \u66F4\u65B0\uFF09\u548C\u5728\u6D4F\u89C8\u5668\u4E3B\u7EBF\u7A0B\u4E0A\u5448\u73B0\u6846\u67B6\u3002"}),`
`,n(e.p,{children:"\u8FD9\u610F\u5473\u7740 JavaScript \u4E2D\u7684\u4EFB\u4F55 DOM \u66F4\u65B0\u90FD\u5FC5\u987B\u5728\u6D4F\u89C8\u5668\u5C06\u8FD9\u4E9B\u66F4\u65B0\u53EF\u89C6\u5316\u5730\u5448\u73B0\u7ED9\u7528\u6237\u4E4B\u524D\u5B8C\u6210\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u5047\u8BBE\u60A8\u6709\u4E00\u4E9B React \u6E32\u67D3\u529F\u80FD\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u5C55\u793A\u60A8\u7684\u7528\u6237\u754C\u9762\u3002React \u901A\u8FC7 JavaScript \u6240\u505A\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u8981\u7B49\u5230 Paint \u8FD0\u884C\u4E4B\u540E\u624D\u80FD\u5728\u89C6\u89C9\u4E0A\u53CD\u6620\u51FA\u6765\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234747.png",alt:"20231110234747"})}),`
`,l(e.h2,{id:"detecting-when-paint-occurs-\u68C0\u6D4B-paint-\u4F55\u65F6\u53D1\u751F",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#detecting-when-paint-occurs-\u68C0\u6D4B-paint-\u4F55\u65F6\u53D1\u751F",children:"#"}),"Detecting when Paint occurs \u68C0\u6D4B Paint \u4F55\u65F6\u53D1\u751F"]}),`
`,n(e.p,{children:"\u6700\u7075\u6D3B\u4E14\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u7684\u65B9\u6CD5\u662F\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u6BB5\u6765\u68C0\u6D4B\u4F55\u65F6\u51FA\u73B0\u5E27\u7ED8\u5236\uFF1A"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:" * Runs `callback` shortly after the next browser Frame is produced."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:" */"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"runAfterFramePaint"}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"callback"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:'// Queue a "before Render Steps" callback via requestAnimationFrame.'})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"requestAnimationFrame"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"MessageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Setup the callback to run in a Task"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port1"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"onmessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"callback"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Queue the Task on the Task Queue"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port2"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postMessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#81A1C1"},children:"undefined"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"})]})]}),`
`,n(e.p,{children:"\u60A8\u9700\u8981\u5728\u6267\u884C DOM \u66F4\u65B0\u7684\u540C\u4E00\u4E2A\u4EFB\u52A1\u4E2D\u8C03\u7528 runAfterFramePaint\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"updateDom"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"node"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getElementById"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"some-node"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"node"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"innerText"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Some Text"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Other DOM Updates..."})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"main"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"App_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Updates DOM in this Task"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"updateDom"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Queues a requestAnimationFrame relative to this executing Task"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"runAfterFramePaint"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"App_FrameProduced"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"        "})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"FrameTime"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"App_Start"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"App_FrameProduced"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"log"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"The Frame was produced after "}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#D8DEE9"},children:"measure"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"duration"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#A3BE8C"},children:"ms"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#88C0D0"},children:"main"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"}),n(e.span,{className:"line-number",children:"24"}),n(e.span,{className:"line-number",children:"25"})]})]}),`
`,n(e.p,{children:"\u5982\u679C\u6211\u4EEC\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53EF\u89C6\u5316\u8FD9\u4E2A\u7247\u6BB5\uFF0C\u5B83\u5C06\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A(\u540E\u6587\u4F1A\u5C06\u6267\u884C\u539F\u7406)"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110235021.png",alt:"20231110235021"})}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:'Note: requestAnimationFrame is often abbreviated as rAF and verbally pronounced as "raff".'})})]}),`
`,l(e.h2,{id:"how-does-this-work",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-does-this-work",children:"#"}),"How does this work?"]}),`
`,n(e.p,{children:"\u9274\u4E8E\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6D4B\u91CF\u6846\u67B6\u65F6\u95F4\uFF0C\u56E0\u6B64\u4E4D\u4E00\u770B\uFF0C\u8FD9\u91CC\u8C03\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u975E\u5E38\u5947\u7279\uFF1A"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["\u6211\u4EEC\u6CA1\u6709\u5236\u4F5C\u4EFB\u4F55\u52A8\u753B -- \u4E3A\u4EC0\u4E48\u8981\u8C03\u7528 ",n(e.code,{children:"requestAnimationFrame"}),"\uFF01\uFF1F"]}),`
`,l(e.li,{children:["\u6211\u4EEC\u6CA1\u6709\u53D1\u9001\u4EFB\u4F55\u6D88\u606F -- \u4E3A\u4EC0\u4E48\u8981\u53D1\u5E03\u5230\u4E00\u4E2A\u65B0\u7684 ",n(e.code,{children:"MessageChannel"}),"\uFF01\uFF1F"]}),`
`]}),`
`,n(e.p,{children:"\u4E0D\u8FC7\uFF0C\u4E86\u89E3\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u8868\u793A\u8FD9\u4E24\u4E2A\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u7684\uFF0C\u5C31\u4F1A\u8C41\u7136\u5F00\u6717\u4E86\uFF01"}),`
`,l(e.h3,{id:"requestanimationframe",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#requestanimationframe",children:"#"}),"requestAnimationFrame"]}),`
`,n(e.p,{children:"requestAnimationFrame \u5141\u8BB8\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u4E0B\u4E00\u4E2A\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u4E4B\u524D\u8FD0\u884C\u56DE\u8C03\u3002\u8FD9\u4E0E\u666E\u901A\u4EFB\u52A1\u4E0D\u540C\uFF0C\u666E\u901A\u4EFB\u52A1\u7531\u4E8B\u4EF6\u5FAA\u73AF\u4EA4\u9519\u8FDB\u884C\uFF0C\u5E76\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u63D0\u53D6\u3002"}),`
`,n(e.p,{children:"\u8BF7\u89C2\u5BDF\u4E0B\u56FE\uFF0C\u4E86\u89E3 requestAnimationFrame \u56DE\u8C03\u4F55\u65F6\u8FD0\u884C\uFF1A"}),`
`,l(e.p,{children:[`todo: raf\u7684callback\u662F\u5426\u5E94\u8BE5\u5728\u4E0B\u4E00\u5E27\u6267\u884C\uFF1F\u56FE\u7247\u662F\u5426\u9519\u8BEF\uFF1F
`,n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003203.png",alt:"20231111003203"})]}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:["For more details on\xA0",n(e.code,{children:"requestAnimationFrame"}),", read my\xA0",n(e.a,{href:"https://webperf.tips/tip/request-animation-frame",target:"_blank",rel:"nofollow",children:"in-depth tip on the API"}),"."]})})]}),`
`,l(e.h3,{id:"messagechannel",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#messagechannel",children:"#"}),"MessageChannel"]}),`
`,l(e.p,{children:[n(e.code,{children:"MessageChannel"})," \u901A\u5E38\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u5185\u7684\u7EBF\u7A0B\u6216\u8FDB\u7A0B\u4E4B\u95F4\u53D1\u5E03\u6D88\u606F\uFF0C\u4F46\u6211\u4EEC\u5728\u8FD9\u91CC\u5E76\u6CA1\u6709\u5C06\u5176\u7528\u4E8E\u9884\u671F\u76EE\u7684\uFF01"]}),`
`,l(e.p,{children:["\u6211\u5728\u8FD9\u91CC\u63D0\u53D6\u4E86 ",n(e.code,{children:"runAfterFramePaint"})," \u7684\u76F8\u5173\u90E8\u5206\uFF0C\u4EE5\u4F9B\u53C2\u8003\uFF1A"]}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"MessageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Setup the callback to run in a Task"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port1"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"onmessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"callback"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Queue the Task on the Task Queue"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port2"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postMessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#81A1C1"},children:"undefined"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"})]})]}),`
`,l(e.p,{children:[n(e.code,{children:"MessageChannel"})," \u5728\u8FD9\u91CC\u88AB\u7528\u4F5C\u5411\u4EFB\u52A1\u961F\u5217\u53D1\u5E03\u4EFB\u52A1\u7684\u901A\u7528\u673A\u5236\u3002"]}),`
`,n(e.p,{children:"\u6B64\u5916\uFF0C\u901A\u8FC7 MessageChannel \u53D1\u5E03\u5230\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5927\u591A\u6570\u5176\u4ED6\u4EFB\u52A1\u3002"}),`
`,n(e.p,{children:"\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u544A\u8BC9\u6D4F\u89C8\u5668\u8981\u505A\u7684\u662F\u4EE5\u9AD8\u4F18\u5148\u7EA7\u5C06\u56DE\u8C03\u4F5C\u4E3A\u4EFB\u52A1\u8FD0\u884C\u3002"}),`
`,l(e.h3,{id:"putting-it-together",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#putting-it-together",children:"#"}),"Putting it together"]}),`
`,n(e.p,{children:"\u5F53\u6211\u4EEC\u5728 requestAnimationFrame \u4E2D\u8C03\u7528 postMessage \u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u88AB\u6307\u793A\u5728\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\u7B49\u5F85\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003550.png",alt:"20231111003550"})}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003601.png",alt:"20231111003601"})}),`
`,n(e.p,{children:"\u4EFB\u52A1\u961F\u5217\u5B8C\u6210\u540E\uFF0C\u6D4F\u89C8\u5668\u5C06\u7EE7\u7EED\u901A\u8FC7\u5B8C\u6210\u6E32\u67D3\u6B65\u9AA4\uFF08\u603B\u662F\u5728 requestAnimationFrame \u56DE\u8C03\u5B8C\u6210\u540E\u8FD0\u884C\uFF09\u6765\u5236\u4F5C\u6846\u67B6\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004128.png",alt:"20231111004128"})}),`
`,l(e.p,{children:["\u6E32\u67D3\u6B65\u9AA4\u5B8C\u6210\u540E\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u91CD\u65B0\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u63D0\u53D6\u4EFB\u52A1\uFF0C\u5E76\u9009\u62E9\u4E0B\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0C\u662F\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u7684",n(e.code,{children:"onmessage"}),"\u4EFB\u52A1\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004400.png",alt:"20231111004400"})}),`
`,n(e.p,{children:'\u73B0\u5728\uFF0C\u6211\u4EEC\u6709\u4E86\u4E00\u4E2A\u8FDB\u5165\u4EFB\u52A1\u7684\u53E5\u67C4\uFF0C\u8BE5\u4EFB\u52A1\u4F1A\u5728 "\u753B\u6846 "\u7ED8\u5236\u540E\u4E0D\u4E45\u8FD0\u884C\uFF01'}),`
`,l(e.h2,{id:"how-accurate-is-this",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-accurate-is-this",children:"#"}),"How accurate is this?"]}),`
`,n(e.p,{children:"This method is not 100% accurate, but it's as close as web developers can get with currently available browser APIs."}),`
`,n(e.p,{children:"A few points of note:"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"requestAnimationFrame"}),"\xA0won't run if the page is hidden (i.e. in a background tab), so you should exclude hidden tabs from your measurements."]}),`
`,l(e.li,{children:[n(e.code,{children:"MessageChannel"}),"\xA0",n(e.code,{children:"onmessage"}),"\xA0callbacks are high priority, but input events like\xA0",n(e.code,{children:"click"}),"\xA0and\xA0",n(e.code,{children:"keypress"}),"\xA0take precedence, and so it won't always run immediately after a Frame is produced."]}),`
`]}),`
`,l(e.h2,{id:"example",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),`
`,l(e.div,{className:"language-html line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"html"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<button"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"id"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"button1"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"Update UI!"}),n(e.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<br"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<div"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"id"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"output"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:"></div>"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"<script"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"type"}),n(e.span,{style:{color:"#ECEFF4"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"text/javascript"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"renderDialog"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Simulate some heavy DOM work by blocking the thread."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"start"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"Date"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// Do something for 50ms"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"Date"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"() "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"start"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"<"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"50"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"/* Block the Thread */"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"outputText"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"UI updated at timestamp: "}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#A3BE8C"},children:"."}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"output"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"innerText"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"outputText"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"runAfterFramePaint"}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"callback"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:'// Queue a "before Render Steps" callback via requestAnimationFrame.'})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#88C0D0"},children:"requestAnimationFrame"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"MessageChannel"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Setup the callback to run in a Task"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port1"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"onmessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"callback"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Queue the Task on the Task Queue"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"messageChannel"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"port2"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postMessage"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#81A1C1"},children:"undefined"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"button1"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getElementById"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"button1"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"button1"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addEventListener"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"click"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Button_Clicked"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#88C0D0"},children:"renderDialog"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DialogDOM_Constructed"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#88C0D0"},children:"runAfterFramePaint"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"mark"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"FrameProduced"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Measure time to construct DOM"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"JavaScript_Constructing_DOM_Time"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Button_Clicked"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DialogDOM_Constructed"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"            "}),n(e.span,{style:{color:"#616E88"},children:"// Measure time waiting for frame to be produced."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"measure"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Frame_Time"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Button_Clicked"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"FrameProduced"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#81A1C1"},children:"<\/script>"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"}),n(e.span,{className:"line-number",children:"24"}),n(e.span,{className:"line-number",children:"25"}),n(e.span,{className:"line-number",children:"26"}),n(e.span,{className:"line-number",children:"27"}),n(e.span,{className:"line-number",children:"28"}),n(e.span,{className:"line-number",children:"29"}),n(e.span,{className:"line-number",children:"30"}),n(e.span,{className:"line-number",children:"31"}),n(e.span,{className:"line-number",children:"32"}),n(e.span,{className:"line-number",children:"33"}),n(e.span,{className:"line-number",children:"34"}),n(e.span,{className:"line-number",children:"35"}),n(e.span,{className:"line-number",children:"36"}),n(e.span,{className:"line-number",children:"37"}),n(e.span,{className:"line-number",children:"38"}),n(e.span,{className:"line-number",children:"39"}),n(e.span,{className:"line-number",children:"40"}),n(e.span,{className:"line-number",children:"41"}),n(e.span,{className:"line-number",children:"42"}),n(e.span,{className:"line-number",children:"43"}),n(e.span,{className:"line-number",children:"44"}),n(e.span,{className:"line-number",children:"45"}),n(e.span,{className:"line-number",children:"46"}),n(e.span,{className:"line-number",children:"47"}),n(e.span,{className:"line-number",children:"48"}),n(e.span,{className:"line-number",children:"49"}),n(e.span,{className:"line-number",children:"50"}),n(e.span,{className:"line-number",children:"51"}),n(e.span,{className:"line-number",children:"52"}),n(e.span,{className:"line-number",children:"53"}),n(e.span,{className:"line-number",children:"54"}),n(e.span,{className:"line-number",children:"55"})]})]}),`
`,n(e.p,{children:"In this example, I capture two measurements:"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.code,{children:"JavaScript_Constructing_DOM_Time"}),"\xA0- represents the time from click to completing all DOM edits"]}),`
`,l(e.li,{children:[n(e.code,{children:"Frame_Time"}),"\xA0- represents the time from click to presenting the DOM edits to the user's screen as a Frame"]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004648.png",alt:"20231111004648"})}),`
`,l(e.p,{children:["One can observe that the\xA0",n(e.code,{children:"Frame_Time"}),"\xA0is longer than the\xA0",n(e.code,{children:"JavaScript_Constructing_DOM_Time"}),", because it includes the Render Steps Tasks:"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004704.png",alt:"20231111004704"})}),`
`,l(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,l(e.p,{children:["With this knowledge you can ensure your\xA0",n(e.a,{href:"https://webperf.tips/tip/performance-timing-markers",target:"_blank",rel:"nofollow",children:"performance marks and measures"}),"\xA0are user-centric, and capture when your key pixels are visualized on your user's screen."]}),`
`,n(e.p,{children:"Consider the following tips next:"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/react-hook-paint",target:"_blank",rel:"nofollow",children:"Capturing Frame paint time in a React app"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/browser-rendering-pipeline",target:"_blank",rel:"nofollow",children:"The browser rendering pipeline"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/request-animation-frame",target:"_blank",rel:"nofollow",children:"requestAnimationFrame in depth"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/browser-scheduling-internals",target:"_blank",rel:"nofollow",children:"Browser scheduling internals"})}),`
`]})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(r,s)})):r(s)}const p="Invalid Date",h=`# \u68C0\u6D4B\u6D4F\u89C8\u5668\u4F55\u65F6\u5728 JavaScript \u4E2D\u7ED8\u5236Frame

\`metadata:\`

**\u539F\u6807\u9898:** Detecting when the Browser Paints Frames in JavaScript

**\u94FE\u63A5:** https://webperf.tips/tip/measuring-paint-time/

---
[asdf](./browser-process-model.md)

\u60A8\u7684\u6027\u80FD\u6D4B\u91CF\u662F\u5426\u80FD\u6355\u6349\u5230\u6D4F\u89C8\u5668\u5411\u7528\u6237\u6E32\u67D3\u50CF\u7D20\u7684\u65F6\u95F4\uFF1F

\u5F88\u53EF\u80FD\u4E0D\u662F\uFF01\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u5927\u591A\u6570\u5F00\u53D1\u4EBA\u5458\u90FD\u662F\u5728 React \u6216\u5176\u4ED6 JS \u4EE3\u7801\u6784\u5EFA DOM \u7684\u67D0\u4E2A\u4EFB\u610F\u65F6\u95F4\u6355\u83B7\u6E32\u67D3\u65F6\u95F4\u6307\u6807\u3002

\u8FD9\u5E76\u4E0D\u5947\u602A\uFF0C\u56E0\u4E3A\u9664\u4E86\u9875\u9762\u52A0\u8F7D\u65F6\u7684\u521D\u59CB\u5E27\u7ED8\u5236\u4E4B\u5916\uFF0C\u6D4F\u89C8\u5668\u5E76\u6CA1\u6709\u63D0\u4F9B\u901A\u77E5\u5F00\u53D1\u4EBA\u5458\u7ED8\u5236\u4E8B\u4EF6\u53D1\u751F\u7684 API\u3002

\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u751F\u547D\u5468\u671F\u7684\u4EFB\u610F\u65F6\u95F4\u70B9\u6D4B\u91CF\u50CF\u7D20\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\u7684\u65F6\u95F4\uFF0C\u4EE5\u53CA\u5B83\u5728\u5F15\u64CE\u4E0B\u7684\u5DE5\u4F5C\u539F\u7406\u3002

## Why capture Paint time?

\u6355\u83B7\u7ED8\u5236\u65F6\u95F4\u662F\u8861\u91CF\u7528\u6237\u6700\u91CD\u8981\u7684\u573A\u666F\u4E4B\u4E00\u2014\u2014UI \u5448\u73B0\u5728\u4ED6\u4EEC\u7684\u5C4F\u5E55\u4E0A\uFF01

![20231110234109](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234109.png)

\u5B83\u8FD8\u53EF\u4EE5\u5E2E\u52A9\u7A81\u51FA\u663E\u793ADOM\u66F4\u65B0\u548C\u751F\u6210\u5E27\u4E4B\u95F4\u7684\u4EFB\u4F55\u989D\u5916\u65F6\u95F4\u6216\u4F4E\u6548\u7387\u3002

![20231110234225](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234225.png)

![20231110234252](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234252.png)

DOM \u66F4\u65B0\u4EFB\u52A1\u548C\u5E27\u4E4B\u95F4\u7684\u4E0D\u8DB3\u4E4B\u5904\u53EF\u80FD\u5305\u62EC

- \u6E32\u67D3\u6B65\u9AA4\u65F6\u95F4\u957F-\u60A8\u53EF\u80FD\u9700\u8981\u4E00\u4E2A\u5177\u6709\u8BB8\u591A\u5143\u7D20\u548C\u6602\u8D35\u89C6\u89C9\u5C5E\u6027\u7684\u590D\u6742UI
- \u957FJS\u4EFB\u52A1-\u60A8\u7684JS DOM\u66F4\u65B0\u4EFB\u52A1\u5F88\u6162\uFF0C\u5E76\u4E14\u4F1A\u963B\u6B62\u6D4F\u89C8\u5668\u751F\u6210\u5E27
- \u7ADE\u4E89\u4EFB\u52A1-\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u88AB\u4EFB\u52A1\u6DF9\u6CA1\uFF0C\u5E76\u5728\u60A8\u7684\u4EFB\u52A1\u548C\u751F\u6210\u5E27\u4E4B\u95F4\u8FD0\u884C\u5176\u4ED6\u4EFB\u52A1

:::tip{title=\u539F\u6587}
*   _Long Render Steps time_\xA0- you may have due a complex UIs with many elements and expensive visual properties
*   [_Long JS Tasks_](https://webperf.tips/tip/long-tasks)\xA0- your JS DOM update Tasks are slow and prevent the browser from producing a Frame
*   [_Competing Tasks_](https://webperf.tips/tip/competing-tasks)\xA0- the browser's Task Queue is flooded with Tasks, and runs other tasks between your Task and producing a Frame
:::

## When does Paint occur?

\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u8D1F\u8D23\u4EA4\u9519\u6267\u884C JavaScript \u4EFB\u52A1\uFF08\u5982 React DOM \u66F4\u65B0\uFF09\u548C\u5728\u6D4F\u89C8\u5668\u4E3B\u7EBF\u7A0B\u4E0A\u5448\u73B0\u6846\u67B6\u3002

\u8FD9\u610F\u5473\u7740 JavaScript \u4E2D\u7684\u4EFB\u4F55 DOM \u66F4\u65B0\u90FD\u5FC5\u987B\u5728\u6D4F\u89C8\u5668\u5C06\u8FD9\u4E9B\u66F4\u65B0\u53EF\u89C6\u5316\u5730\u5448\u73B0\u7ED9\u7528\u6237\u4E4B\u524D\u5B8C\u6210\u3002

\u4F8B\u5982\uFF0C\u5047\u8BBE\u60A8\u6709\u4E00\u4E9B React \u6E32\u67D3\u529F\u80FD\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u5C55\u793A\u60A8\u7684\u7528\u6237\u754C\u9762\u3002React \u901A\u8FC7 JavaScript \u6240\u505A\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u8981\u7B49\u5230 Paint \u8FD0\u884C\u4E4B\u540E\u624D\u80FD\u5728\u89C6\u89C9\u4E0A\u53CD\u6620\u51FA\u6765\u3002

![20231110234747](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110234747.png)

## Detecting when Paint occurs \u68C0\u6D4B Paint \u4F55\u65F6\u53D1\u751F

\u6700\u7075\u6D3B\u4E14\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u7684\u65B9\u6CD5\u662F\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u6BB5\u6765\u68C0\u6D4B\u4F55\u65F6\u51FA\u73B0\u5E27\u7ED8\u5236\uFF1A

\`\`\`js
/**
 * Runs \`callback\` shortly after the next browser Frame is produced.
 */
function runAfterFramePaint(callback) {
    // Queue a "before Render Steps" callback via requestAnimationFrame.
    requestAnimationFrame(() => {
        const messageChannel = new MessageChannel();

        // Setup the callback to run in a Task
        messageChannel.port1.onmessage = callback;

        // Queue the Task on the Task Queue
        messageChannel.port2.postMessage(undefined);
    });
}
\`\`\`

\u60A8\u9700\u8981\u5728\u6267\u884C DOM \u66F4\u65B0\u7684\u540C\u4E00\u4E2A\u4EFB\u52A1\u4E2D\u8C03\u7528 runAfterFramePaint\u3002

\u4F8B\u5982

\`\`\`js
function updateDom() {
    const node = document.getElementById('some-node');

    node.innerText = 'Some Text';

    // Other DOM Updates...
}

function main() {
    performance.mark('App_Start');

    // Updates DOM in this Task
    updateDom();

    // Queues a requestAnimationFrame relative to this executing Task
    runAfterFramePaint(() => {
        performance.mark('App_FrameProduced');
        
        const measure = performance.measure('FrameTime', 'App_Start', 'App_FrameProduced');

        console.log(\`The Frame was produced after \${measure.duration}ms\`);
    });
}

main();
\`\`\`

\u5982\u679C\u6211\u4EEC\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u53EF\u89C6\u5316\u8FD9\u4E2A\u7247\u6BB5\uFF0C\u5B83\u5C06\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A(\u540E\u6587\u4F1A\u5C06\u6267\u884C\u539F\u7406)

![20231110235021](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110235021.png)

:::tip
Note: requestAnimationFrame is often abbreviated as rAF and verbally pronounced as "raff".
:::

## How does this work?

\u9274\u4E8E\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6D4B\u91CF\u6846\u67B6\u65F6\u95F4\uFF0C\u56E0\u6B64\u4E4D\u4E00\u770B\uFF0C\u8FD9\u91CC\u8C03\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u975E\u5E38\u5947\u7279\uFF1A

- \u6211\u4EEC\u6CA1\u6709\u5236\u4F5C\u4EFB\u4F55\u52A8\u753B -- \u4E3A\u4EC0\u4E48\u8981\u8C03\u7528 \`requestAnimationFrame\`\uFF01\uFF1F
- \u6211\u4EEC\u6CA1\u6709\u53D1\u9001\u4EFB\u4F55\u6D88\u606F -- \u4E3A\u4EC0\u4E48\u8981\u53D1\u5E03\u5230\u4E00\u4E2A\u65B0\u7684 \`MessageChannel\`\uFF01\uFF1F

\u4E0D\u8FC7\uFF0C\u4E86\u89E3\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u8868\u793A\u8FD9\u4E24\u4E2A\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u7684\uFF0C\u5C31\u4F1A\u8C41\u7136\u5F00\u6717\u4E86\uFF01

### requestAnimationFrame

requestAnimationFrame \u5141\u8BB8\u7F51\u7EDC\u5F00\u53D1\u4EBA\u5458\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u4E0B\u4E00\u4E2A\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u4E4B\u524D\u8FD0\u884C\u56DE\u8C03\u3002\u8FD9\u4E0E\u666E\u901A\u4EFB\u52A1\u4E0D\u540C\uFF0C\u666E\u901A\u4EFB\u52A1\u7531\u4E8B\u4EF6\u5FAA\u73AF\u4EA4\u9519\u8FDB\u884C\uFF0C\u5E76\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u63D0\u53D6\u3002

\u8BF7\u89C2\u5BDF\u4E0B\u56FE\uFF0C\u4E86\u89E3 requestAnimationFrame \u56DE\u8C03\u4F55\u65F6\u8FD0\u884C\uFF1A

todo: raf\u7684callback\u662F\u5426\u5E94\u8BE5\u5728\u4E0B\u4E00\u5E27\u6267\u884C\uFF1F\u56FE\u7247\u662F\u5426\u9519\u8BEF\uFF1F
![20231111003203](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003203.png)

:::tip
For more details on\xA0\`requestAnimationFrame\`, read my\xA0[in-depth tip on the API](https://webperf.tips/tip/request-animation-frame).
:::

### MessageChannel

\`MessageChannel\` \u901A\u5E38\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u5185\u7684\u7EBF\u7A0B\u6216\u8FDB\u7A0B\u4E4B\u95F4\u53D1\u5E03\u6D88\u606F\uFF0C\u4F46\u6211\u4EEC\u5728\u8FD9\u91CC\u5E76\u6CA1\u6709\u5C06\u5176\u7528\u4E8E\u9884\u671F\u76EE\u7684\uFF01

\u6211\u5728\u8FD9\u91CC\u63D0\u53D6\u4E86 \`runAfterFramePaint\` \u7684\u76F8\u5173\u90E8\u5206\uFF0C\u4EE5\u4F9B\u53C2\u8003\uFF1A

\`\`\`js
const messageChannel = new MessageChannel();

// Setup the callback to run in a Task
messageChannel.port1.onmessage = callback;

// Queue the Task on the Task Queue
messageChannel.port2.postMessage(undefined);
\`\`\`

\`MessageChannel\` \u5728\u8FD9\u91CC\u88AB\u7528\u4F5C\u5411\u4EFB\u52A1\u961F\u5217\u53D1\u5E03\u4EFB\u52A1\u7684\u901A\u7528\u673A\u5236\u3002

\u6B64\u5916\uFF0C\u901A\u8FC7 MessageChannel \u53D1\u5E03\u5230\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5927\u591A\u6570\u5176\u4ED6\u4EFB\u52A1\u3002

\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u544A\u8BC9\u6D4F\u89C8\u5668\u8981\u505A\u7684\u662F\u4EE5\u9AD8\u4F18\u5148\u7EA7\u5C06\u56DE\u8C03\u4F5C\u4E3A\u4EFB\u52A1\u8FD0\u884C\u3002

### Putting it together

\u5F53\u6211\u4EEC\u5728 requestAnimationFrame \u4E2D\u8C03\u7528 postMessage \u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u88AB\u6307\u793A\u5728\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\u7B49\u5F85\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u3002

![20231111003550](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003550.png)

![20231111003601](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111003601.png)

\u4EFB\u52A1\u961F\u5217\u5B8C\u6210\u540E\uFF0C\u6D4F\u89C8\u5668\u5C06\u7EE7\u7EED\u901A\u8FC7\u5B8C\u6210\u6E32\u67D3\u6B65\u9AA4\uFF08\u603B\u662F\u5728 requestAnimationFrame \u56DE\u8C03\u5B8C\u6210\u540E\u8FD0\u884C\uFF09\u6765\u5236\u4F5C\u6846\u67B6\u3002

![20231111004128](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004128.png)

\u6E32\u67D3\u6B65\u9AA4\u5B8C\u6210\u540E\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u91CD\u65B0\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u63D0\u53D6\u4EFB\u52A1\uFF0C\u5E76\u9009\u62E9\u4E0B\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0C\u662F\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u7684\`onmessage\`\u4EFB\u52A1\u3002

![20231111004400](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004400.png)

\u73B0\u5728\uFF0C\u6211\u4EEC\u6709\u4E86\u4E00\u4E2A\u8FDB\u5165\u4EFB\u52A1\u7684\u53E5\u67C4\uFF0C\u8BE5\u4EFB\u52A1\u4F1A\u5728 "\u753B\u6846 "\u7ED8\u5236\u540E\u4E0D\u4E45\u8FD0\u884C\uFF01

## How accurate is this?

This method is not 100% accurate, but it's as close as web developers can get with currently available browser APIs.

A few points of note:

*   \`requestAnimationFrame\`\xA0won't run if the page is hidden (i.e. in a background tab), so you should exclude hidden tabs from your measurements.
*   \`MessageChannel\`\xA0\`onmessage\`\xA0callbacks are high priority, but input events like\xA0\`click\`\xA0and\xA0\`keypress\`\xA0take precedence, and so it won't always run immediately after a Frame is produced.

## Example

\`\`\`html

<button id="button1">Update UI!</button>

<br />

<div id="output"></div>

<script type="text/javascript">
    function renderDialog() {
        // Simulate some heavy DOM work by blocking the thread.
        const start = Date.now();

        // Do something for 50ms
        while (Date.now() - start < 50) {
            /* Block the Thread */
        }

        const outputText = \`UI updated at timestamp: \${performance.now()}.\`;
        output.innerText = outputText;
    }

    function runAfterFramePaint(callback) {
        // Queue a "before Render Steps" callback via requestAnimationFrame.
        requestAnimationFrame(() => {
            const messageChannel = new MessageChannel();

            // Setup the callback to run in a Task
            messageChannel.port1.onmessage = callback;

            // Queue the Task on the Task Queue
            messageChannel.port2.postMessage(undefined);
        });
    }

    const button1 = document.getElementById('button1');

    button1.addEventListener('click', () => {
        performance.mark('Button_Clicked');

        renderDialog();

        performance.mark('DialogDOM_Constructed');

        runAfterFramePaint(() => {
            performance.mark('FrameProduced');

            // Measure time to construct DOM
            performance.measure('JavaScript_Constructing_DOM_Time', 'Button_Clicked', 'DialogDOM_Constructed');

            // Measure time waiting for frame to be produced.
            performance.measure('Frame_Time', 'Button_Clicked', 'FrameProduced');
        });
    });
<\/script>

\`\`\`

In this example, I capture two measurements:

*   \`JavaScript_Constructing_DOM_Time\`\xA0- represents the time from click to completing all DOM edits
*   \`Frame_Time\`\xA0- represents the time from click to presenting the DOM edits to the user's screen as a Frame

![20231111004648](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004648.png)

One can observe that the\xA0\`Frame_Time\`\xA0is longer than the\xA0\`JavaScript_Constructing_DOM_Time\`, because it includes the Render Steps Tasks:

![20231111004704](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231111004704.png)


## Conclusion

With this knowledge you can ensure your\xA0[performance marks and measures](https://webperf.tips/tip/performance-timing-markers)\xA0are user-centric, and capture when your key pixels are visualized on your user's screen.

Consider the following tips next:

*   [Capturing Frame paint time in a React app](https://webperf.tips/tip/react-hook-paint)
*   [The browser rendering pipeline](https://webperf.tips/tip/browser-rendering-pipeline)
*   [requestAnimationFrame in depth](https://webperf.tips/tip/request-animation-frame)
*   [Browser scheduling internals](https://webperf.tips/tip/browser-scheduling-internals)
























`;export{h as content,d as default,i as frontmatter,p as lastUpdatedTime,t as title,o as toc};
