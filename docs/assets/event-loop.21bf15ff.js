import{jsx as n,jsxs as l,Fragment as i}from"react/jsx-runtime";const c=void 0,t=[{id:"the-main-thread",text:"The Main Thread",depth:2},{id:"tasks",text:"Tasks",depth:2},{id:"task-queue",text:"Task Queue",depth:2},{id:"the-render-steps-task-and-frames-\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27",text:"The Render Steps Task and Frames (\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27)",depth:2},{id:"the-event-loop",text:"The Event Loop",depth:2},{id:"non-blocking",text:"Non-Blocking",depth:2},{id:"example-timer",text:"Example: Timer",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],o="\u4E8B\u4EF6\u5FAA\u73AF\u57FA\u7840\u77E5\u8BC6";function r(s){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",div:"div",ul:"ul",li:"li",em:"em",ol:"ol",button:"button",span:"span",pre:"pre"},s.components);return l(i,{children:[l(e.h1,{id:"\u4E8B\u4EF6\u5FAA\u73AF\u57FA\u7840\u77E5\u8BC6",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8B\u4EF6\u5FAA\u73AF\u57FA\u7840\u77E5\u8BC6",children:"#"}),"\u4E8B\u4EF6\u5FAA\u73AF\u57FA\u7840\u77E5\u8BC6"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,l(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Event Loop Fundamentals"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/event-loop/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/event-loop/"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u80FD\u662F\u9700\u8981\u638C\u63E1\u7684\u6700\u91CD\u8981\u7684\u524D\u7AEF\u6027\u80FD\u6982\u5FF5\u3002\u5B83\u7684\u884C\u4E3A\u51B3\u5B9A\u4E86 Web \u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u7684\u884C\u4E3A\u65B9\u5F0F\u3002"}),`
`,l(e.h2,{id:"the-main-thread",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-main-thread",children:"#"}),"The Main Thread"]}),`
`,n(e.p,{children:"\u5728\u8BA8\u8BBA\u4E8B\u4EF6\u5FAA\u73AF\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u4ECB\u7ECD\u4E00\u4E9B\u5173\u952E\u6982\u5FF5\u3002\u8BA9\u6211\u4EEC\u4ECE\u4E3B\u7EBF\u7A0B\u5F00\u59CB\u3002"}),`
`,n(e.p,{children:"Web \u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u5728\u6B64\u5355\u4E2A\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u67D0\u4E9B\u5173\u952E\u64CD\u4F5C\u3002\u5BFC\u822A\u5230 Web \u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u521B\u5EFA\u5E76\u5411\u5E94\u7528\u7A0B\u5E8F\u6388\u4E88\u6B64\u7EBF\u7A0B\uFF0C\u4EE5\u4FBF\u4EE3\u7801\u5728\u5176\u4E0A\u6267\u884C\u3002"}),`
`,n(e.p,{children:"\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u7684\u5927\u90E8\u5206\u8FD0\u884C\u65F6\u6D3B\u52A8\u90FD\u5728\u8FD9\u4E2A\u5355\u7EBF\u7A0B\u4E0A\u8FDB\u884C\uFF0C\u7EBF\u7A0B\u4E0A\u7684\u6BCF\u4E2A\u6D3B\u52A8\u90FD\u5728\u4EFB\u52A1\u4E2D\u8C03\u7528\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010507.png",alt:"20231110010507"})}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:l(e.p,{children:["\u6CE8\u610F\uFF1A\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u6D4F\u89C8\u5668\uFF08\u5373 Chrome\uFF09\u662F\u5355\u7EBF\u7A0B\u7684\u3002\u73B0\u4EE3\u6D4F\u89C8\u5668\u65E2\u662F\u591A",n(e.a,{href:"https://webperf.tips/tip/browser-process-model/",target:"_blank",rel:"nofollow",children:"\u8FDB\u7A0B\u7684\uFF0C\u4E5F\u662F\u591A\u7EBF\u7A0B\u7684"}),"\u3002"]})})]}),`
`,l(e.h2,{id:"tasks",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tasks",children:"#"}),"Tasks"]}),`
`,n(e.p,{children:"\u4EFB\u52A1\u662F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u7684\u8FD0\u884C\u65F6\u6267\u884C\u5355\u5143\u3002"}),`
`,n(e.p,{children:"\u4EFB\u52A1\u7684\u4E00\u4E9B\u5E38\u89C1\u793A\u4F8B\u5305\u62EC\uFF1A"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"Parsing of HTML or CSS"}),`
`,n(e.li,{children:"User Input Handling, such as clicking or typing"}),`
`,n(e.li,{children:"Compiling and Executing JavaScript"}),`
`,n(e.li,{children:"Receiving Network Data"}),`
`,n(e.li,{children:"The Render Steps (Style, Layout, and Paint; discussed later)"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010725.png",alt:"20231110010725"})}),`
`,n(e.p,{children:"\u67D0\u4E9B\u4EFB\u52A1\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\u3002\u4F8B\u5982\uFF0C\u4EFB\u4F55\u76F4\u63A5\u9700\u8981\u8BBF\u95EE DOM\uFF08\u5373\u6587\u6863\uFF09\u7684\u4EFB\u52A1\u90FD\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\uFF08\u56E0\u4E3A DOM \u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF09\u3002\u8FD9\u5305\u62EC\u5927\u591A\u6570\u4E0E\u7528\u6237\u754C\u9762\u76F8\u5173\u7684\u4EE3\u7801\u3002"}),`
`,n(e.p,{children:"\u4E3B\u7EBF\u7A0B\u4E0A\u4E00\u6B21\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u4EFB\u52A1\u3002"}),`
`,n(e.p,{children:'\u6B64\u5916\uFF0C\u4E00\u4E2A\u4EFB\u52A1\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\u5B8C\u6210\u540E\uFF0C\u624D\u80FD\u8FD0\u884C\u53E6\u4E00\u4E2A\u4EFB\u52A1\u3002\u6D4F\u89C8\u5668\u6CA1\u6709 "\u90E8\u5206 "\u6267\u884C\u4EFB\u52A1\u7684\u673A\u5236--\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u662F\u5B8C\u6574\u8FD0\u884C\u7684\u3002'}),`
`,n(e.p,{children:"\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u4E24\u4E2A\u4EFB\u52A1\u4F9D\u6B21\u8FD0\u884C\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u5B8C\u6210\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010916.png",alt:"20231110010916"})}),`
`,l(e.h2,{id:"task-queue",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#task-queue",children:"#"}),"Task Queue"]}),`
`,n(e.p,{children:"\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u4E0D\u53EF\u80FD\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u4EFB\u52A1\uFF0C\u56E0\u6B64\u4EFB\u4F55\u672A\u4E3B\u52A8\u8FD0\u884C\u7684\u4EFB\u52A1\u90FD\u4F1A\u9A7B\u7559\u5728\u4E00\u4E2A\u540D\u4E3A\u4EFB\u52A1\u961F\u5217\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011042.png",alt:"20231110011042"})}),`
`,n(e.p,{children:"\u5F53\u60A8\u7684Web\u5E94\u7528\u7A0B\u5E8F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u4EFB\u52A1\u6392\u961F\u5230\u6B64\u6570\u636E\u7ED3\u6784\u4E2D\u3002"}),`
`,n(e.p,{children:"\u5F53\u4E3B\u7EBF\u7A0B\u51C6\u5907\u597D\u6267\u884C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4F1A\u4ECE\u8BE5\u961F\u5217\u4E2D\u8BFB\u53D6\u6570\u636E\u3002"}),`
`,l(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),l(e.div,{className:"island-directive-content",children:[l(e.p,{children:["\u6CE8\u610F\uFF1A\u4EFB\u52A1\u961F\u5217\u4E0D\u662F\u5148\u8FDB\u5148\u51FA\u961F\u5217\u3002\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u91C7\u7528",n(e.strong,{children:"\u542F\u53D1\u5F0F\u8C03\u5EA6\u903B\u8F91"}),"\uFF0C\u5C06\u67D0\u4E9B\u4EFB\u52A1\u6392\u5728\u5176\u4ED6\u4EFB\u52A1\u4E4B\u524D\u3002"]}),l(e.p,{children:[n(e.strong,{children:"\u542F\u53D1\u5F0F\u8C03\u5EA6"}),"\u662F\u4EC0\u4E48\u6837\u7684\uFF1F"]})]})]}),`
`,l(e.h2,{id:"the-render-steps-task-and-frames-\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-render-steps-task-and-frames-\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27",children:"#"}),"The Render Steps Task and Frames (\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27)"]}),`
`,n(e.p,{children:"\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u8D1F\u8D23\u5C06\u6D3B\u52A8 DOM \u548C CSS \u6837\u5F0F\u8F6C\u6362\u4E3A\u7528\u6237\u5C4F\u5E55\u4E0A\u7684\u53EF\u89C6\u50CF\u7D20\u3002"}),`
`,l(e.p,{children:["\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u5B8C\u6210\u540E\u751F\u6210\u7684\u5185\u5BB9\u79F0\u4E3A ",n(e.em,{children:"Frame"}),"\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011446.png",alt:"20231110011446"})}),`
`,n(e.p,{children:l(e.strong,{children:["\u5BF9\u7F51\u9875 DOM \u6216 CSS \u6837\u5F0F\u7684\u7F16\u8F91\u4F1A\u901A\u77E5\u6D4F\u89C8\u5668\u9700\u8981\u751F\u6210",n(e.em,{children:"Frame"}),"\u3002\u5F53\u6D4F\u89C8\u5668\u68C0\u6D4B\u5230\u9700\u8981\u751F\u6210",n(e.em,{children:"Frame"}),"\u65F6\uFF0C\u5B83\u4F1A\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u8FD0\u884C\u4EFB\u52A1\uFF1A"]})}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011553.png",alt:"20231110011553"})}),`
`,n(e.p,{children:"There are generally 3 key steps for the Render Steps to complete:"}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:[n(e.em,{children:"Style"})," - Assign CSS colors, fonts, and other styling properties to visual elements"]}),`
`,l(e.li,{children:[n(e.em,{children:"Layout"}),"\xA0- Position visual elements with precise coordinates(\u7CBE\u786E\u5750\u6807)"]}),`
`,l(e.li,{children:[n(e.em,{children:"Paint"}),"\xA0- Instruct graphics(\u56FE\u5F62) libraries on how to draw positioned, styled visual elements"]}),`
`]}),`
`,l(e.p,{children:["For more details on each step, check out my detailed tip on ",n(e.a,{href:"https://webperf.tips/tip/browser-rendering-pipeline",target:"_blank",rel:"nofollow",children:"the browser rendering pipeline"}),"."]}),`
`,l(e.h2,{id:"the-event-loop",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-event-loop",children:"#"}),"The Event Loop"]}),`
`,n(e.p,{children:'\u6700\u540E\uFF0C\u5728\u4ECB\u7ECD\u4E86\u6240\u6709\u8FD9\u4E9B\u57FA\u7840\u4E3B\u9898\u540E\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u53EF\u4EE5\u8BA8\u8BBA "\u4E8B\u4EF6\u5FAA\u73AF "\u4E86\uFF01'}),`
`,n(e.p,{children:"\u4E8B\u4EF6\u5FAA\u73AF\u662F\u8FD9\u4E9B\u57FA\u7840\u90E8\u5206\u4E4B\u95F4\u7684\u534F\u8C03\u8005\u3002"}),`
`,n(e.p,{children:"\u5B83\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\uFF0C\u8D1F\u8D23\u4EE5\u4E0B\u5DE5\u4F5C\uFF1A"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u9009\u62E9\u4E00\u4E2A\u53EF\u7528\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u4E3B\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u5B8C\u6210"}),`
`,l(e.li,{children:['\u5076\u5C14\u9009\u62E9 "\u6E32\u67D3\u6B65\u9AA4 "\u4EFB\u52A1\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u8BFB\u53D6\u6765\u751F\u6210',n(e.em,{children:"Frame"})]}),`
`]}),`
`,n(e.p,{children:"\u8FD9\u4E2A\u4F2A\u4EE3\u7801\u7247\u6BB5\u603B\u7ED3\u4E86\u4E8B\u4EF6\u5FAA\u73AF\uFF1A"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"var"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"nextTask"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// The browser notifies the Event Loop"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// when it's time to render a frame"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#88C0D0"},children:"shouldRenderFrame"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()) "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"nextTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"getRenderStepsTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"else"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// If it's not ready for a frame,"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// the Event Loop should run the"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// next Task."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"nextTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"taskQueue"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"next"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Run Task to completion"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"runOnMainThread"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"nextTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"})]})]}),`
`,l(e.p,{children:["\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684\u6BCF\u4E00\u8F6E\u4E2D\uFF0C\u5B83\u90FD\u4F1A\u51B3\u5B9A\u662F\u9009\u62E9\u4E00\u9879\u4EFB\u52A1\u8FD8\u662F\u5728\u5C4F\u5E55\u4E0A\u5448\u73B0\u4E00\u4E2A",n(e.em,{children:"Frame"}),"\u3002"]}),`
`,l(e.p,{children:["\u9700\u8981\u4E86\u89E3\u7684\u5173\u952E\u662F\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u8FD0\u884C\u4EFB\u52A1\u6216\u751F\u6210",n(e.em,{children:"Frame"}),"\uFF0C\u4F46\u4E0D\u80FD\u540C\u65F6\u8FD0\u884C\u4EFB\u52A1\u548C",n(e.em,{children:"Frame"}),"\u3002(\u8FD9\u4E00\u70B9\u6709\u5C11\u6570\u4F8B\u5916\uFF0C\u4F46\u6211\u4E0D\u4F1A\u5728\u672C\u63D0\u793A\u4E2D\u8BA8\u8BBA\uFF09\u3002"]}),`
`,n(e.p,{children:"\u65E0\u8BBA\u54EA\u4E2A\u4EFB\u52A1\u6700\u7EC8\u8FD0\u884C\uFF0C\u90FD\u8981\u8FD0\u884C\u5230\u5B8C\u6210\u4E3A\u6B62\u3002"}),`
`,l(e.p,{children:["\u4E00\u822C\u6765\u8BF4\uFF0C\u4EFB\u52A1\u6301\u7EED\u65F6\u95F4\u5E94\u8BE5\u8F83\u77ED\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u80FD\u66F4\u5FEB\u5730\u8C03\u7528\u6E32\u67D3\u6B65\u9AA4\uFF0C\u4E3A\u7528\u6237\u751F\u6210\u4E00\u4E2A",n(e.em,{children:"Frame"}),"\u3002\u6211\u7684",n(e.a,{href:"https://webperf.tips/tip/long-tasks",target:"_blank",rel:"nofollow",children:"\u907F\u514D\u957F\u4EFB\u52A1"}),"\u63D0\u793A\u4E2D\u5BF9\u6B64\u6709\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u3002"]}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"TIP"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:'\u6CE8\uFF1A"\u4E8B\u4EF6\u5FAA\u73AF"\uFF08Event Loop\uFF09\u662F\u4E00\u79CD C++ \u7ED3\u6784\uFF0C\u5E76\u4E0D\u662F\u7528 JavaScript \u7F16\u5199\u7684\uFF0C\u6211\u53EA\u662F\u78B0\u5DE7\u5728\u8FD9\u4E2A\u4F2A\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86\u5B83\u3002'})})]}),`
`,l(e.h2,{id:"non-blocking",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#non-blocking",children:"#"}),"Non-Blocking"]}),`
`,n(e.p,{children:"\u6839\u636E\u8BBE\u8BA1\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4ECE\u4E0D\u6682\u505C\u6216\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF1B\u5B83\u5C06\u4E0D\u65AD\u5FAA\u73AF\u8FD0\u884C\u4EFB\u52A1\u5E76\u4EA7\u751F\u5E27\u3002"}),`
`,n(e.p,{children:"\u4F46\u662F\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u6267\u884C\u5F02\u6B65\u4EFB\u52A1\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u8BF7\u6C42\u7F51\u7EDC\u6570\u636E\u6216\u4F7F\u7528\u5B9A\u65F6\u5668\uFF0C\u90A3\u4E48\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F"}),`
`,n(e.p,{children:"\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u6BCF\u4E2A\u5F02\u6B65\u57FA\u5143\u90FD\u8868\u793A\u4E3A\u4E0E\u4E8B\u4EF6\u5FAA\u73AF\u6267\u884C\u6A21\u578B\u517C\u5BB9\u7684\u4EFB\u52A1\u3002"}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"\u539F\u6587"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Each asynchronous primitive provided by the browser is represented as a Task that is compatible with the Event Loop execution model."})})]}),`
`,n(e.p,{children:"\u5F02\u6B65\u6D4F\u89C8\u5668 API \u793A\u4F8B\u5305\u62EC"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["Loading network data via\xA0",n(e.code,{children:"XMLHttpRequest"}),"\xA0or\xA0",n(e.code,{children:"fetch"})]}),`
`,l(e.li,{children:["Responding to events via\xA0",n(e.code,{children:"addEventListener(...)"})]}),`
`,l(e.li,{children:["Timers like\xA0",n(e.code,{children:"setTimeout"}),"\xA0or\xA0",n(e.code,{children:"setInterval"})]}),`
`]}),`
`,l(e.p,{children:["For example, utilizing\xA0",n(e.code,{children:"setTimeout(callback, 500)"}),"\xA0does not block the Main Thread, but tells the browser to queue a Task to run\xA0",n(e.code,{children:"callback"}),"\xA0on the Task Queue after 500ms. (500ms\u540E\u653E\u5165\u4EFB\u52A1\u961F\u5217)"]}),`
`,l(e.h2,{id:"example-timer",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-timer",children:"#"}),"Example: Timer"]}),`
`,n(e.p,{children:"\u8BA9\u6211\u4EEC\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u6211\u4EEC\u6240\u5B66\u5230\u7684\u4E00\u5207\u3002"}),`
`,n(e.p,{children:"\u6211\u4EEC\u7684\u793A\u4F8B\u5C06\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u811A\u672C\uFF0C\u6BCF 500ms \u5728\u5B9A\u65F6\u5668\u56DE\u8C03\u4E2D\u7F16\u8F91\u4E00\u6B21 DOM\u3002"}),`
`,l(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"let"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"    "})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Queue a Task on the Task Queue every 500ms"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"setInterval"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// This code runs in a Task"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#81A1C1"},children:"++;"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"node"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getElementById"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"output"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#D8DEE9"},children:"node"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"innerText"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#A3BE8C"},children:" Timers Fired!"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"500"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),l(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"})]})]}),`
`,n(e.p,{children:"Since this edits the DOM in a Task, the browser will need to generate a Frame to represent the changes as pixels."}),`
`,n(e.p,{children:"Initially, after this script is evaluated, our Main Thread will be free, and the Task Queue will be empty. The browser has been directed to queue a Task after 500ms."}),`
`,n(e.p,{children:"Though the thread has no activity happening during this 500ms waiting time, it is free and able to respond to clicking, typing, or other Tasks if there were any queued."}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013457.png",alt:"20231110013457"})}),`
`,n(e.p,{children:"After 500ms, the browser will queue a Task for running our callback for editing the DOM:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013531.png",alt:"20231110013531"})}),`
`,n(e.p,{children:"The Event Loop detects a Task queued to be run, and moves it from the Queue to the Main Thread to run (since the Main Thread is not busy doing anything else)."}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013624.png",alt:"20231110013624"})}),`
`,n(e.p,{children:"This task is run and edits the DOM, which notifies the Event Loop to run the Render Steps:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013737.png",alt:"20231110013737"})}),`
`,l(e.p,{children:["\u8BE5",n(e.em,{children:"Frame"}),"\u5236\u4F5C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u66F4\u65B0\u7684\u6587\u672C\u5C31\u4F1A\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\uFF01"]}),`
`,n(e.p,{children:"\u6BCF\u9694 500 \u6BEB\u79D2\uFF0C\u8FD9\u4E9B\u786E\u5207\u7684\u9636\u6BB5\u5C06\u6301\u7EED\u8FDB\u884C\uFF0C\u540C\u65F6\u961F\u5217\u4E2D\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5B9A\u65F6\u5668\u4EFB\u52A1\u3002\u4E8B\u4EF6\u5FAA\u73AF\u5C06\u4ECE\u961F\u5217\u4E2D\u79FB\u9664\u6BCF\u4E2A\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u4E3B\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u3002\u8FD9\u5C06\u5BFC\u81F4\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u5E76\u751F\u6210\u5E27\u3002"}),`
`,n(e.p,{children:"\u60A8\u53EF\u4EE5\u5BF9\u8BE5\u793A\u4F8B\u8FDB\u884C\u5206\u6790\uFF0C\u5E76\u5728\u5206\u6790\u5668\u4E2D\u67E5\u770B\u4EFB\u52A1\u548C\u5E27\u7684\u751F\u6210\u60C5\u51B5\uFF01"}),`
`,n(e.p,{children:"Here's a screenshot of it happening in the Profiler:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015231.png",alt:"20231110015231"})}),`
`,l(e.p,{children:[`\u5B9E\u6D4B\u56FE\uFF1A
`,n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015618.png",alt:"20231110015618"})]}),`
`,n(e.p,{children:"\u867D\u7136\u8FD9\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u53EA\u662F\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u4F46\u60A8\u53EF\u4EE5\u5C06\u5176\u63A8\u5E7F\u5230\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u65E0\u8BBA\u662F\u70B9\u51FB\u6309\u94AE\u8FD8\u662F\u63A5\u6536\u7F51\u7EDC\u6570\u636E\u3002"}),`
`,n(e.p,{children:"Consider these tips next:"}),`
`,l(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/browser-process-model",target:"_blank",rel:"nofollow",children:"Browser Process Model"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/browser-scheduling-internals",target:"_blank",rel:"nofollow",children:"Browser Scheduling Logic"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/browser-rendering-pipeline",target:"_blank",rel:"nofollow",children:"Browser Rendering Pipeline"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/long-tasks",target:"_blank",rel:"nofollow",children:"Long Tasks and Performance"})}),`
`]})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(r,s)})):r(s)}const h="Invalid Date",p=`# \u4E8B\u4EF6\u5FAA\u73AF\u57FA\u7840\u77E5\u8BC6


\`metadata:\`

**\u539F\u6807\u9898:** Event Loop Fundamentals

**\u94FE\u63A5:** https://webperf.tips/tip/event-loop/

---

\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u80FD\u662F\u9700\u8981\u638C\u63E1\u7684\u6700\u91CD\u8981\u7684\u524D\u7AEF\u6027\u80FD\u6982\u5FF5\u3002\u5B83\u7684\u884C\u4E3A\u51B3\u5B9A\u4E86 Web \u5E94\u7528\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u7684\u884C\u4E3A\u65B9\u5F0F\u3002

## The Main Thread

\u5728\u8BA8\u8BBA\u4E8B\u4EF6\u5FAA\u73AF\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u4ECB\u7ECD\u4E00\u4E9B\u5173\u952E\u6982\u5FF5\u3002\u8BA9\u6211\u4EEC\u4ECE\u4E3B\u7EBF\u7A0B\u5F00\u59CB\u3002

Web \u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u5728\u6B64\u5355\u4E2A\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u67D0\u4E9B\u5173\u952E\u64CD\u4F5C\u3002\u5BFC\u822A\u5230 Web \u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u521B\u5EFA\u5E76\u5411\u5E94\u7528\u7A0B\u5E8F\u6388\u4E88\u6B64\u7EBF\u7A0B\uFF0C\u4EE5\u4FBF\u4EE3\u7801\u5728\u5176\u4E0A\u6267\u884C\u3002

\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u7684\u5927\u90E8\u5206\u8FD0\u884C\u65F6\u6D3B\u52A8\u90FD\u5728\u8FD9\u4E2A\u5355\u7EBF\u7A0B\u4E0A\u8FDB\u884C\uFF0C\u7EBF\u7A0B\u4E0A\u7684\u6BCF\u4E2A\u6D3B\u52A8\u90FD\u5728\u4EFB\u52A1\u4E2D\u8C03\u7528\u3002

![20231110010507](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010507.png)

:::tip
\u6CE8\u610F\uFF1A\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u6D4F\u89C8\u5668\uFF08\u5373 Chrome\uFF09\u662F\u5355\u7EBF\u7A0B\u7684\u3002\u73B0\u4EE3\u6D4F\u89C8\u5668\u65E2\u662F\u591A[\u8FDB\u7A0B\u7684\uFF0C\u4E5F\u662F\u591A\u7EBF\u7A0B\u7684](https://webperf.tips/tip/browser-process-model/)\u3002
:::

## Tasks

\u4EFB\u52A1\u662F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u7684\u8FD0\u884C\u65F6\u6267\u884C\u5355\u5143\u3002

\u4EFB\u52A1\u7684\u4E00\u4E9B\u5E38\u89C1\u793A\u4F8B\u5305\u62EC\uFF1A

*   Parsing of HTML or CSS  
*   User Input Handling, such as clicking or typing  
*   Compiling and Executing JavaScript  
*   Receiving Network Data
*   The Render Steps (Style, Layout, and Paint; discussed later)  

![20231110010725](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010725.png)

\u67D0\u4E9B\u4EFB\u52A1\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\u3002\u4F8B\u5982\uFF0C\u4EFB\u4F55\u76F4\u63A5\u9700\u8981\u8BBF\u95EE DOM\uFF08\u5373\u6587\u6863\uFF09\u7684\u4EFB\u52A1\u90FD\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\uFF08\u56E0\u4E3A DOM \u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF09\u3002\u8FD9\u5305\u62EC\u5927\u591A\u6570\u4E0E\u7528\u6237\u754C\u9762\u76F8\u5173\u7684\u4EE3\u7801\u3002

\u4E3B\u7EBF\u7A0B\u4E0A\u4E00\u6B21\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u4EFB\u52A1\u3002

\u6B64\u5916\uFF0C\u4E00\u4E2A\u4EFB\u52A1\u5FC5\u987B\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u8FD0\u884C\u5B8C\u6210\u540E\uFF0C\u624D\u80FD\u8FD0\u884C\u53E6\u4E00\u4E2A\u4EFB\u52A1\u3002\u6D4F\u89C8\u5668\u6CA1\u6709 "\u90E8\u5206 "\u6267\u884C\u4EFB\u52A1\u7684\u673A\u5236--\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u662F\u5B8C\u6574\u8FD0\u884C\u7684\u3002

\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u4E24\u4E2A\u4EFB\u52A1\u4F9D\u6B21\u8FD0\u884C\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u5B8C\u6210\uFF1A

![20231110010916](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110010916.png)

## Task Queue

\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u4E0D\u53EF\u80FD\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u4EFB\u52A1\uFF0C\u56E0\u6B64\u4EFB\u4F55\u672A\u4E3B\u52A8\u8FD0\u884C\u7684\u4EFB\u52A1\u90FD\u4F1A\u9A7B\u7559\u5728\u4E00\u4E2A\u540D\u4E3A\u4EFB\u52A1\u961F\u5217\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u3002

![20231110011042](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011042.png)

\u5F53\u60A8\u7684Web\u5E94\u7528\u7A0B\u5E8F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u4EFB\u52A1\u6392\u961F\u5230\u6B64\u6570\u636E\u7ED3\u6784\u4E2D\u3002

\u5F53\u4E3B\u7EBF\u7A0B\u51C6\u5907\u597D\u6267\u884C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4F1A\u4ECE\u8BE5\u961F\u5217\u4E2D\u8BFB\u53D6\u6570\u636E\u3002

:::info
\u6CE8\u610F\uFF1A\u4EFB\u52A1\u961F\u5217\u4E0D\u662F\u5148\u8FDB\u5148\u51FA\u961F\u5217\u3002\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u91C7\u7528**\u542F\u53D1\u5F0F\u8C03\u5EA6\u903B\u8F91**\uFF0C\u5C06\u67D0\u4E9B\u4EFB\u52A1\u6392\u5728\u5176\u4ED6\u4EFB\u52A1\u4E4B\u524D\u3002

**\u542F\u53D1\u5F0F\u8C03\u5EA6**\u662F\u4EC0\u4E48\u6837\u7684\uFF1F
:::

## The Render Steps Task and Frames (\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u548C\u5E27)

\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u8D1F\u8D23\u5C06\u6D3B\u52A8 DOM \u548C CSS \u6837\u5F0F\u8F6C\u6362\u4E3A\u7528\u6237\u5C4F\u5E55\u4E0A\u7684\u53EF\u89C6\u50CF\u7D20\u3002

\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u5B8C\u6210\u540E\u751F\u6210\u7684\u5185\u5BB9\u79F0\u4E3A *Frame*\u3002

![20231110011446](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011446.png)

**\u5BF9\u7F51\u9875 DOM \u6216 CSS \u6837\u5F0F\u7684\u7F16\u8F91\u4F1A\u901A\u77E5\u6D4F\u89C8\u5668\u9700\u8981\u751F\u6210*Frame*\u3002\u5F53\u6D4F\u89C8\u5668\u68C0\u6D4B\u5230\u9700\u8981\u751F\u6210*Frame*\u65F6\uFF0C\u5B83\u4F1A\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u8FD0\u884C\u4EFB\u52A1\uFF1A**

![20231110011553](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110011553.png)

There are generally 3 key steps for the Render Steps to complete:

1.  *Style* - Assign CSS colors, fonts, and other styling properties to visual elements
2.  *Layout*\xA0- Position visual elements with precise coordinates(\u7CBE\u786E\u5750\u6807)
3.  *Paint*\xA0- Instruct graphics(\u56FE\u5F62) libraries on how to draw positioned, styled visual elements

For more details on each step, check out my detailed tip on [the browser rendering pipeline](https://webperf.tips/tip/browser-rendering-pipeline).

## The Event Loop

\u6700\u540E\uFF0C\u5728\u4ECB\u7ECD\u4E86\u6240\u6709\u8FD9\u4E9B\u57FA\u7840\u4E3B\u9898\u540E\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u53EF\u4EE5\u8BA8\u8BBA "\u4E8B\u4EF6\u5FAA\u73AF "\u4E86\uFF01

\u4E8B\u4EF6\u5FAA\u73AF\u662F\u8FD9\u4E9B\u57FA\u7840\u90E8\u5206\u4E4B\u95F4\u7684\u534F\u8C03\u8005\u3002

\u5B83\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\uFF0C\u8D1F\u8D23\u4EE5\u4E0B\u5DE5\u4F5C\uFF1A

- \u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u9009\u62E9\u4E00\u4E2A\u53EF\u7528\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u4E3B\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u5B8C\u6210
- \u5076\u5C14\u9009\u62E9 "\u6E32\u67D3\u6B65\u9AA4 "\u4EFB\u52A1\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u8BFB\u53D6\u6765\u751F\u6210*Frame*

\u8FD9\u4E2A\u4F2A\u4EE3\u7801\u7247\u6BB5\u603B\u7ED3\u4E86\u4E8B\u4EF6\u5FAA\u73AF\uFF1A

\`\`\`js
while (true) {
    var nextTask;

    // The browser notifies the Event Loop
    // when it's time to render a frame
    if (shouldRenderFrame()) {
        nextTask = getRenderStepsTask();
    } else {
        // If it's not ready for a frame,
        // the Event Loop should run the
        // next Task.
        nextTask = taskQueue.next();
    }

    // Run Task to completion
    runOnMainThread(nextTask);
}
\`\`\`

\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684\u6BCF\u4E00\u8F6E\u4E2D\uFF0C\u5B83\u90FD\u4F1A\u51B3\u5B9A\u662F\u9009\u62E9\u4E00\u9879\u4EFB\u52A1\u8FD8\u662F\u5728\u5C4F\u5E55\u4E0A\u5448\u73B0\u4E00\u4E2A*Frame*\u3002

\u9700\u8981\u4E86\u89E3\u7684\u5173\u952E\u662F\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u8FD0\u884C\u4EFB\u52A1\u6216\u751F\u6210*Frame*\uFF0C\u4F46\u4E0D\u80FD\u540C\u65F6\u8FD0\u884C\u4EFB\u52A1\u548C*Frame*\u3002(\u8FD9\u4E00\u70B9\u6709\u5C11\u6570\u4F8B\u5916\uFF0C\u4F46\u6211\u4E0D\u4F1A\u5728\u672C\u63D0\u793A\u4E2D\u8BA8\u8BBA\uFF09\u3002

\u65E0\u8BBA\u54EA\u4E2A\u4EFB\u52A1\u6700\u7EC8\u8FD0\u884C\uFF0C\u90FD\u8981\u8FD0\u884C\u5230\u5B8C\u6210\u4E3A\u6B62\u3002

\u4E00\u822C\u6765\u8BF4\uFF0C\u4EFB\u52A1\u6301\u7EED\u65F6\u95F4\u5E94\u8BE5\u8F83\u77ED\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u80FD\u66F4\u5FEB\u5730\u8C03\u7528\u6E32\u67D3\u6B65\u9AA4\uFF0C\u4E3A\u7528\u6237\u751F\u6210\u4E00\u4E2A*Frame*\u3002\u6211\u7684[\u907F\u514D\u957F\u4EFB\u52A1](https://webperf.tips/tip/long-tasks)\u63D0\u793A\u4E2D\u5BF9\u6B64\u6709\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u3002

:::tip
\u6CE8\uFF1A"\u4E8B\u4EF6\u5FAA\u73AF"\uFF08Event Loop\uFF09\u662F\u4E00\u79CD C++ \u7ED3\u6784\uFF0C\u5E76\u4E0D\u662F\u7528 JavaScript \u7F16\u5199\u7684\uFF0C\u6211\u53EA\u662F\u78B0\u5DE7\u5728\u8FD9\u4E2A\u4F2A\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86\u5B83\u3002
:::

## Non-Blocking

\u6839\u636E\u8BBE\u8BA1\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4ECE\u4E0D\u6682\u505C\u6216\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF1B\u5B83\u5C06\u4E0D\u65AD\u5FAA\u73AF\u8FD0\u884C\u4EFB\u52A1\u5E76\u4EA7\u751F\u5E27\u3002

\u4F46\u662F\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u6267\u884C\u5F02\u6B65\u4EFB\u52A1\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u8BF7\u6C42\u7F51\u7EDC\u6570\u636E\u6216\u4F7F\u7528\u5B9A\u65F6\u5668\uFF0C\u90A3\u4E48\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F

\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u6BCF\u4E2A\u5F02\u6B65\u57FA\u5143\u90FD\u8868\u793A\u4E3A\u4E0E\u4E8B\u4EF6\u5FAA\u73AF\u6267\u884C\u6A21\u578B\u517C\u5BB9\u7684\u4EFB\u52A1\u3002

:::tip{title=\u539F\u6587}
Each asynchronous primitive provided by the browser is represented as a Task that is compatible with the Event Loop execution model.
:::

\u5F02\u6B65\u6D4F\u89C8\u5668 API \u793A\u4F8B\u5305\u62EC

*   Loading network data via\xA0\`XMLHttpRequest\`\xA0or\xA0\`fetch\`
*   Responding to events via\xA0\`addEventListener(...)\`
*   Timers like\xA0\`setTimeout\`\xA0or\xA0\`setInterval\`

For example, utilizing\xA0\`setTimeout(callback, 500)\`\xA0does not block the Main Thread, but tells the browser to queue a Task to run\xA0\`callback\`\xA0on the Task Queue after 500ms. (500ms\u540E\u653E\u5165\u4EFB\u52A1\u961F\u5217)

## Example: Timer

\u8BA9\u6211\u4EEC\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u6211\u4EEC\u6240\u5B66\u5230\u7684\u4E00\u5207\u3002

\u6211\u4EEC\u7684\u793A\u4F8B\u5C06\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u811A\u672C\uFF0C\u6BCF 500ms \u5728\u5B9A\u65F6\u5668\u56DE\u8C03\u4E2D\u7F16\u8F91\u4E00\u6B21 DOM\u3002

\`\`\`js
    let count = 0;
    
    // Queue a Task on the Task Queue every 500ms
    setInterval(() => {
        // This code runs in a Task
        count++;
        const node = document.getElementById('output');
        node.innerText = \`\${count} Timers Fired!\`
    }, 500);
\`\`\`

Since this edits the DOM in a Task, the browser will need to generate a Frame to represent the changes as pixels.

Initially, after this script is evaluated, our Main Thread will be free, and the Task Queue will be empty. The browser has been directed to queue a Task after 500ms.

Though the thread has no activity happening during this 500ms waiting time, it is free and able to respond to clicking, typing, or other Tasks if there were any queued.

![20231110013457](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013457.png)

After 500ms, the browser will queue a Task for running our callback for editing the DOM:

![20231110013531](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013531.png)

The Event Loop detects a Task queued to be run, and moves it from the Queue to the Main Thread to run (since the Main Thread is not busy doing anything else).

![20231110013624](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013624.png)

This task is run and edits the DOM, which notifies the Event Loop to run the Render Steps:

![20231110013737](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110013737.png)

\u8BE5*Frame*\u5236\u4F5C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u66F4\u65B0\u7684\u6587\u672C\u5C31\u4F1A\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\uFF01

\u6BCF\u9694 500 \u6BEB\u79D2\uFF0C\u8FD9\u4E9B\u786E\u5207\u7684\u9636\u6BB5\u5C06\u6301\u7EED\u8FDB\u884C\uFF0C\u540C\u65F6\u961F\u5217\u4E2D\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5B9A\u65F6\u5668\u4EFB\u52A1\u3002\u4E8B\u4EF6\u5FAA\u73AF\u5C06\u4ECE\u961F\u5217\u4E2D\u79FB\u9664\u6BCF\u4E2A\u4EFB\u52A1\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u4E3B\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u3002\u8FD9\u5C06\u5BFC\u81F4\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u5E76\u751F\u6210\u5E27\u3002

\u60A8\u53EF\u4EE5\u5BF9\u8BE5\u793A\u4F8B\u8FDB\u884C\u5206\u6790\uFF0C\u5E76\u5728\u5206\u6790\u5668\u4E2D\u67E5\u770B\u4EFB\u52A1\u548C\u5E27\u7684\u751F\u6210\u60C5\u51B5\uFF01

Here's a screenshot of it happening in the Profiler:

![20231110015231](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015231.png)

\u5B9E\u6D4B\u56FE\uFF1A
![20231110015618](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110015618.png)

\u867D\u7136\u8FD9\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u53EA\u662F\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u4F46\u60A8\u53EF\u4EE5\u5C06\u5176\u63A8\u5E7F\u5230\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u65E0\u8BBA\u662F\u70B9\u51FB\u6309\u94AE\u8FD8\u662F\u63A5\u6536\u7F51\u7EDC\u6570\u636E\u3002

Consider these tips next:

## Conclusion

*   [Browser Process Model](https://webperf.tips/tip/browser-process-model)
*   [Browser Scheduling Logic](https://webperf.tips/tip/browser-scheduling-internals)
*   [Browser Rendering Pipeline](https://webperf.tips/tip/browser-rendering-pipeline)
*   [Long Tasks and Performance](https://webperf.tips/tip/long-tasks)
`;export{p as content,d as default,c as frontmatter,h as lastUpdatedTime,o as title,t as toc};
