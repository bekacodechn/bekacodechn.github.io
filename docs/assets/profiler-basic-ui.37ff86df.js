import{jsx as n,jsxs as i,Fragment as a}from"react/jsx-runtime";const l=void 0,c=[{id:"prerequisite\u5148\u51B3\u6761\u4EF6",text:"Prerequisite\xA0\u5148\u51B3\u6761\u4EF6",depth:2},{id:"layout",text:"Layout",depth:2},{id:"section-1-trace-overview",text:"Section 1: Trace Overview",depth:2},{id:"timestamps\u65F6\u95F4\u6233",text:"Timestamps\xA0\u65F6\u95F4\u6233",depth:3},{id:"selection",text:"Selection",depth:3},{id:"screenshot-preview\u622A\u56FE\u9884\u89C8",text:"Screenshot Preview\xA0\u622A\u56FE\u9884\u89C8",depth:3},{id:"section-2-selection-analysis-pane",text:"Section 2: Selection Analysis Pane",depth:2},{id:"sub-panes",text:"Sub-panes",depth:3},{id:"network-sub-pane\u7F51\u7EDC\u5B50\u7A97\u683C",text:"Network Sub-pane\xA0\u7F51\u7EDC\u5B50\u7A97\u683C",depth:4},{id:"main-sub-pane\u4E3B\u5B50\u7A97\u683C",text:"Main Sub-pane\xA0\u4E3B\u5B50\u7A97\u683C",depth:4},{id:"other-panes",text:"Other panes",depth:4},{id:"section-3-details-bottom-pane",text:"Section 3: Details Bottom Pane",depth:2},{id:"summary-tab",text:"Summary Tab",depth:3},{id:"bottom-up-tab-\u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361",text:"Bottom Up Tab \u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361",depth:3},{id:"call-tree-tab\u8C03\u7528\u6811\u9009\u9879\u5361",text:"Call Tree Tab\xA0\u201C\u8C03\u7528\u6811\u201D\u9009\u9879\u5361",depth:3},{id:"event-log-tab\u4E8B\u4EF6\u65E5\u5FD7\u9009\u9879\u5361",text:"Event Log Tab\xA0\u201C\u4E8B\u4EF6\u65E5\u5FD7\u201D\u9009\u9879\u5361",depth:3},{id:"conclusion\u7ED3\u8BBA",text:"Conclusion\xA0\u7ED3\u8BBA",depth:2}],s="Chromium F12 \u6027\u80FD\u5206\u6790\u5668\u7684\u57FA\u672C\u6982\u8FF0";function r(t){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",img:"img",ol:"ol",li:"li",div:"div",h3:"h3",h4:"h4",ul:"ul",em:"em",br:"br"},t.components);return i(a,{children:[i(e.h1,{id:"chromium-f12-\u6027\u80FD\u5206\u6790\u5668\u7684\u57FA\u672C\u6982\u8FF0",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chromium-f12-\u6027\u80FD\u5206\u6790\u5668\u7684\u57FA\u672C\u6982\u8FF0",children:"#"}),"Chromium F12 \u6027\u80FD\u5206\u6790\u5668\u7684\u57FA\u672C\u6982\u8FF0"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,i(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," A Basic Overview of the Chromium F12 Performance Profiler"]}),`
`,i(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://webperf.tips/tip/profiler-basic-ui/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/profiler-basic-ui/"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Chromium \u6027\u80FD\u5206\u6790\u5668\u7684 UI \u4E00\u5F00\u59CB\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u4E0D\u77E5\u6240\u63AA\uFF0C\u4F46\u4E00\u65E6\u60A8\u4E86\u89E3\u4E86\u5B83\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u5B83\u5B9E\u9645\u4E0A\u5C31\u975E\u5E38\u76F4\u89C2\u4E86\u3002"}),`
`,n(e.p,{children:"\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u5C06\u5F15\u5BFC\u4F60\u4E86\u89E3 Chromium F12 Profiler UI \u7684\u57FA\u672C\u7EC4\u4EF6\uFF0C\u4EE5\u4FBF\u4F60\u5F00\u59CB\u8BC6\u522B Web \u5E94\u7528\u7684\u6027\u80FD\u74F6\u9888\uFF01"}),`
`,i(e.h2,{id:"prerequisite\u5148\u51B3\u6761\u4EF6",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisite\u5148\u51B3\u6761\u4EF6",children:"#"}),"Prerequisite\xA0\u5148\u51B3\u6761\u4EF6"]}),`
`,i(e.p,{children:["\u60A8\u5E94\u8BE5",n(e.a,{href:"/chrome/performance/tips/collect-a-trace",children:"\u6536\u96C6\u8DDF\u8E2A"}),"\u5E76\u786E\u4FDD\u5C06\u5176\u52A0\u8F7D\u5230 Chromium Profiler \u4E2D\u3002"]}),`
`,n(e.p,{children:"\u6211\u5728\u672C\u6587\u4E2D\u4F7F\u7528\u7684\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\u6240\u793A\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109211923.png",alt:"20231109211923"})}),`
`,i(e.h2,{id:"layout",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#layout",children:"#"}),"Layout"]}),`
`,n(e.p,{children:"\u6709\u4E09\u4E2A\u4E3B\u8981\u90E8\u5206\uFF1A"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Trace Overview\xA0\u8DDF\u8E2A\u6982\u8FF0"}),`
`,n(e.li,{children:"Selection Analysis Pane\xA0\u9009\u62E9\u5206\u6790\u7A97\u683C"}),`
`,n(e.li,{children:"Details Bottom Pane\xA0\u8BE6\u7EC6\u4FE1\u606F\u5E95\u90E8\u7A97\u683C"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212058.png",alt:"20231109212058"})}),`
`,i(e.h2,{id:"section-1-trace-overview",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#section-1-trace-overview",children:"#"}),"Section 1: Trace Overview"]}),`
`,n(e.p,{children:"\u6211\u628A\u8FD9\u90E8\u5206\u770B\u4F5C\u662F\u6574\u4E2A\u6355\u83B7\u7684\u4E2A\u4EBA\u8D44\u6599\u7684\u201C\u4E3B\u4E16\u754C\u5730\u56FE\u201D\u6216\u201C\u5C0F\u5730\u56FE\u201D\u3002"}),`
`,i(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"\u539F\u6587"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:'I think about this section as an "Overworld Map" or "minimap" of the entire captured profile.'})})]}),`
`,n(e.p,{children:"\u65E0\u8BBA\u6536\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u6301\u7EED\u65F6\u95F4\u5982\u4F55\uFF0C\u6574\u4E2A\u914D\u7F6E\u6587\u4EF6\u90FD\u5C06\u9002\u5408\u6B64\u9876\u90E8\u90E8\u5206\u3002"}),`
`,i(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"\u539F\u6587"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Regardless of the duration of the collected profile, the entire profile will fit in this top section."})})]}),`
`,n(e.p,{children:"\u5B83\u63D0\u4F9B\u4E86\u4E00\u76EE\u4E86\u7136\u7684\u53EF\u89C6\u5316\u6548\u679C\uFF0C\u53EF\u7528\u4E8E\u5728\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u4E2D\u9009\u62E9\u6216\u653E\u5927\u4EE5\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u5206\u6790\u3002"}),`
`,i(e.h3,{id:"timestamps\u65F6\u95F4\u6233",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#timestamps\u65F6\u95F4\u6233",children:"#"}),"Timestamps\xA0\u65F6\u95F4\u6233"]}),`
`,n(e.p,{children:"\u5728 Profiler UI \u4E2D\uFF0C\u65F6\u95F4\u4ECE\u5DE6\u5230\u53F3\u8868\u793A\uFF0C\u8FD9\u610F\u5473\u7740\u8DDF\u8E2A\u7684\u6700\u5DE6\u4FA7\u90E8\u5206\u8868\u793A\u96C6\u5408\u7684\u5F00\u59CB\uFF0C\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\uFF0C\u540E\u7EED\u6355\u83B7\u7684\u4E8B\u4EF6\u5C06\u586B\u5145\u5230\u53F3\u4FA7\u3002"}),`
`,n(e.p,{children:"\u6700\u521D\u53EF\u80FD\u4EE4\u4EBA\u56F0\u60D1\u7684\u4E00\u4EF6\u4E8B\u662F\u672C\u8282\u4E0A\u65B9\u548C\u4E0B\u65B9\u7684\u65F6\u95F4\u6233\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212542.png",alt:"20231109212542"})}),`
`,n(e.p,{children:"\u7528\u4E8E\u8DDF\u8E2A\u6982\u8FF0\u7684\u65F6\u95F4\u6233\u662F\u9876\u90E8\u7684\u65F6\u95F4\u6233\uFF08\u4E0A\u9762\u7528\u7EA2\u8272\u5708\u51FA\uFF09\u3002\u8FD9\u4E9B\u65F6\u95F4\u6233\u5C06\u8DE8\u8D8A\u8DDF\u8E2A\u6536\u96C6\u7684\u6574\u4E2A\u6301\u7EED\u65F6\u95F4\u3002"}),`
`,n(e.p,{children:"\u84DD\u8272\u4E2D\u7684\u65F6\u95F4\u6233\u4E0E\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u76F8\u5173\uFF0C\u5E76\u7531\u201C\u9009\u62E9\u201D\u9A71\u52A8\u3002"}),`
`,i(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"\u539F\u6587"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"The timestamps that are used for the Trace Overview are the timestamps at the top (circled in Red above). These timestamps will span the entire duration of your trace collection."})})]}),`
`,i(e.h3,{id:"selection",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#selection",children:"#"}),"Selection"]}),`
`,n(e.p,{children:"In order to get more details specific sections of the captured trace, we need to use Selection (or Zooming)."}),`
`,n(e.p,{children:"Click and drag in the Trace Overview section in an area of interest:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109220801.png",alt:"20231109220801"})}),`
`,n(e.p,{children:'\u8FD9\u5C06\u4F7F "\u9009\u62E9\u5206\u6790 "\u7A97\u683C\u7684\u8303\u56F4\u4EC5\u9650\u4E8E\u60A8\u521A\u521A\u9009\u62E9\u7684\u533A\u57DF\u3002\u8BF7\u6CE8\u610F\uFF0C\u4E0B\u9762\u7684\u65F6\u95F4\u6233\uFF08\u84DD\u8272\u5708\u5185\uFF09\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u4EE5\u53CD\u6620\u60A8\u9009\u62E9\u7684\u90E8\u5206\uFF1A'}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221040.png",alt:"20231109221040"})}),`
`,n(e.p,{children:"\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u3001WSAD \u952E\u6216\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u4E2D\u7684\u5355\u51FB\u5E76\u62D6\u52A8\u6765\u8C03\u6574\u201C\u9009\u62E9/\u7F29\u653E\u201D\u533A\u57DF\u3002"}),`
`,i(e.h3,{id:"screenshot-preview\u622A\u56FE\u9884\u89C8",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#screenshot-preview\u622A\u56FE\u9884\u89C8",children:"#"}),"Screenshot Preview\xA0\u622A\u56FE\u9884\u89C8"]}),`
`,n(e.p,{children:"\u5982\u679C\u5728\u8DDF\u8E2A\u6536\u96C6\u671F\u95F4\u542F\u7528\u4E86\u5C4F\u5E55\u622A\u56FE\uFF08\u6211\u59CB\u7EC8\u5EFA\u8BAE\u8FD9\u6837\u505A\uFF01\uFF09\uFF0C\u5219\u5C06\u9F20\u6807\u60AC\u505C\u5728\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\u4E0A\u65F6\uFF0C\u5E94\u8BE5\u4F1A\u770B\u5230 UI \u9884\u89C8\u3002"}),`
`,n(e.p,{children:"\u5982\u679C\u60F3\u6839\u636E\u7279\u5B9A\u7684\u89C6\u89C9\u573A\u666F\u6765\u9009\u62E9\u8303\u56F4\uFF0C\u8FD9\u4E00\u70B9\u5C24\u5176\u6709\u7528\u3002"}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u60F3\u9009\u62E9\u7528\u6237\u5355\u51FB\u6309\u94AE\u548C\u5C4F\u5E55\u4E0A\u51FA\u73B0\u6A21\u6001\u4E4B\u95F4\u7684\u90E8\u5206\u65F6\u95F4\uFF0C\u4EE5\u67E5\u770B CPU \u548C\u7F51\u7EDC\u5728\u8FD9\u4E9B\u4E8B\u4EF6\u53D1\u751F\u4E4B\u95F4\u7684\u8FD9\u6BB5\u65F6\u95F4\u5185\u7684\u8FD0\u884C\u60C5\u51B5\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221525.png",alt:"20231109221525"})}),`
`,i(e.h2,{id:"section-2-selection-analysis-pane",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#section-2-selection-analysis-pane",children:"#"}),"Section 2: Selection Analysis Pane"]}),`
`,n(e.p,{children:"This is the most complex(\u590D\u6742) section of the Profiler, and also where I spend most of my time analyzing profiles."}),`
`,n(e.p,{children:'\u8BE5\u7A97\u683C\u7684\u8303\u56F4\u4E0E\u60A8\u5728 "\u8F68\u8FF9\u6982\u89C8 "\u90E8\u5206\u4E2D\u8BBE\u7F6E\u7684\u9009\u533A\u4E00\u81F4\u3002\u5B83\u5C06\u59CB\u7EC8\u9002\u5408\u60A8\u6240\u9009\u7684\u6574\u4E2A\u533A\u57DF\u3002'}),`
`,i(e.h3,{id:"sub-panes",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sub-panes",children:"#"}),"Sub-panes"]}),`
`,n(e.p,{children:"\u8BE5\u7528\u6237\u754C\u9762\u6709\u591A\u4E2A\u5B50\u9762\u677F\uFF0C\u53EF\u4EE5\u6298\u53E0\u6216\u5C55\u5F00\u3002"}),`
`,n(e.p,{children:"For beginners, I recommend expanding only the Main and Network tab, while collapsing the rest:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221729.png",alt:"20231109221729"})}),`
`,i(e.h4,{id:"network-sub-pane\u7F51\u7EDC\u5B50\u7A97\u683C",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#network-sub-pane\u7F51\u7EDC\u5B50\u7A97\u683C",children:"#"}),"Network Sub-pane\xA0\u7F51\u7EDC\u5B50\u7A97\u683C"]}),`
`,i(e.p,{children:["The\xA0",n(e.strong,{children:"Network sub-pane"}),"\xA0shows all networking activity within your selection."]}),`
`,n(e.p,{children:"You can inspect the type, order, and durations of network requests made in the time slice of your selection."}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109222420.png",alt:"20231109222420"})}),`
`,i(e.p,{children:["\u6709\u5173\u5982\u4F55\u9605\u8BFB\u6B64\u7A97\u683C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6211\u5728 ",n(e.a,{href:"https://webperf.tips/tip/network-profiler-pane",target:"_blank",rel:"nofollow",children:"Chromium Profiler \u7F51\u7EDC\u7A97\u683C"}),"\u4E2D\u7684\u8BE6\u7EC6\u63D0\u793A\u3002"]}),`
`,i(e.h4,{id:"main-sub-pane\u4E3B\u5B50\u7A97\u683C",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#main-sub-pane\u4E3B\u5B50\u7A97\u683C",children:"#"}),"Main Sub-pane\xA0\u4E3B\u5B50\u7A97\u683C"]}),`
`,i(e.p,{children:["The\xA0",n(e.strong,{children:"Main sub-pane"}),"\xA0refers to the Main UI thread of your web application."]}),`
`,n(e.p,{children:"\u5728\u4E3B UI \u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709 CPU \u6D3B\u52A8\u90FD\u5728\u6B64\u5904\u8BB0\u5F55\u4E3A\u4EFB\u52A1\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223110.png",alt:"20231109223110"})}),`
`,n(e.p,{children:"CPU \u6D3B\u52A8\u53EF\u4EE5\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Parsing of HTML\xA0"}),`
`,n(e.li,{children:"Execution and compilation of JavaScript"}),`
`,n(e.li,{children:"Handling User Input such as Clicks and Keypress events"}),`
`,n(e.li,{children:"Style, Layout, and Paint, used to prepare for generation of pixels / frames"}),`
`]}),`
`,i(e.p,{children:["\u6709\u5173\u5982\u4F55\u9605\u8BFB\u6B64\u7A97\u683C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6211\u5728 ",n(e.a,{href:"https://webperf.tips/tip/main-profiler-pane",target:"_blank",rel:"nofollow",children:"Chromium Profiler \u4E3B\u7EBF\u7A0B\u7A97\u683C"}),"\u4E2D\u7684\u8BE6\u7EC6\u63D0\u793A\u3002"]}),`
`,i(e.h4,{id:"other-panes",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#other-panes",children:"#"}),"Other panes"]}),`
`,n(e.p,{children:"\u5176\u4ED6\u6709\u7528\u7684\u7A97\u683C\u5305\u62EC\uFF1A"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.em,{children:"Frames"}),"\xA0- a representation of frames generated to the screen over time",n(e.br,{}),`
`,"\u5E27 - \u968F\u65F6\u95F4\u63A8\u79FB\u751F\u6210\u5230\u5C4F\u5E55\u4E0A\u7684\u5E27\u7684\u8868\u793A\u5F62\u5F0F"]}),`
`,i(e.li,{children:[n(e.em,{children:"Timings"}),"\xA0- custom\xA0",n(e.a,{href:"https://webperf.tips/tip/performance-timing-markers",target:"_blank",rel:"nofollow",children:"markers"}),"\xA0web developers can place to help measure and annotate profiles",n(e.br,{}),`
`,"\u8BA1\u65F6 - Web \u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u653E\u7F6E\u7684\u81EA\u5B9A\u4E49\u6807\u8BB0\u6765\u5E2E\u52A9\u6D4B\u91CF\u548C\u6CE8\u91CA\u914D\u7F6E\u6587\u4EF6"]}),`
`,i(e.li,{children:[n(e.em,{children:"WebWorker"}),"\xA0or\xA0",n(e.em,{children:"ServiceWorker"}),"\xA0threads - other JavaScript execution threads",n(e.br,{}),`
`,"WebWorker \u6216 ServiceWorker \u7EBF\u7A0B - \u5176\u4ED6 JavaScript \u6267\u884C\u7EBF\u7A0B"]}),`
`,i(e.li,{children:[n(e.em,{children:"Compositor"}),"\xA0- activity for compositing graphical layers and preparing frame generation",n(e.br,{}),`
`,"Compositor - \u7528\u4E8E\u5408\u6210\u56FE\u5F62\u56FE\u5C42\u548C\u51C6\u5907\u5E27\u751F\u6210\u7684\u6D3B\u52A8"]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223545.png",alt:"20231109223545"})}),`
`,i(e.p,{children:["\u8FD9\u4E9B\u5185\u5BB9\u5728\u6211\u5173\u4E8E",n(e.a,{href:"https://webperf.tips/tip/profiler-advanced-ui",target:"_blank",rel:"nofollow",children:"\u9AD8\u7EA7\u63A2\u67E5\u5668UI"}),"\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u90FD\u6709\u4ECB\u7ECD\u3002"]}),`
`,i(e.h2,{id:"section-3-details-bottom-pane",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#section-3-details-bottom-pane",children:"#"}),"Section 3: Details Bottom Pane"]}),`
`,n(e.p,{children:"\u5728\u9875\u9762\u5E95\u90E8\uFF0C\u6709\u4E00\u4E2A\u8BE6\u7EC6\u4FE1\u606F\u7A97\u683C\u3002\u4E0E\u201C\u9009\u62E9\u5206\u6790\u201D\u7A97\u683C\u7C7B\u4F3C\uFF0C\u6B64 UI \u4E2D\u5171\u4EAB\u7684\u7EDF\u8BA1\u4FE1\u606F\u7684\u8303\u56F4\u9650\u5B9A\u4E3A\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u4E2D\u7684\u9009\u62E9\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223730.png",alt:"20231109223730"})}),`
`,i(e.h3,{id:"summary-tab",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#summary-tab",children:"#"}),"Summary Tab"]}),`
`,i(e.p,{children:["The\xA0",n(e.strong,{children:"Summary Tab"}),"\xA0provides stats on what type of CPU activity is consuming your main thread:"]}),`
`,n(e.p,{children:"In this example, within the 790ms selection, 592ms is being spent on JavaScript activity:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224839.png",alt:"20231109224839"})}),`
`,n(e.p,{children:"It should be noted that the Summary tab adapts to what entity is selected."}),`
`,n(e.p,{children:"For example, if you select a network request, it will provide a summary of the network resource:"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224917.png",alt:"20231109224917"})}),`
`,i(e.h3,{id:"bottom-up-tab-\u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#bottom-up-tab-\u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361",children:"#"}),"Bottom Up Tab \u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361"]}),`
`,n(e.p,{children:"\u201C\u81EA\u4E0B\u800C\u4E0A\u201D\u9009\u9879\u5361\u4ECE\u53CD\u5411\u8C03\u7528\u5806\u6808\u7684\u89D2\u5EA6\u63D0\u4F9B\u6709\u5173\u6240\u9009\u5185\u5BB9\u4E2D\u5404\u79CD CPU/JavaScript \u6D3B\u52A8\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u7684\u4FE1\u606F\u3002"}),`
`,i(e.p,{children:["\u4F8B\u5982\uFF0C\u5982\u679C\xA0",n(e.code,{children:"function a()"}),"\xA0\u8C03\u7528\xA0",n(e.code,{children:"function b()"}),"\xA0\uFF0C\xA0",n(e.code,{children:"b"}),"\xA0\u5219\u6267\u884C\u65F6\u95F4\u663E\u793A\u5728\u9876\u90E8\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225344.png",alt:"20231109225344"})}),`
`,i(e.p,{children:["\u8FD9\u5728\u6211\u5173\u4E8E",n(e.a,{href:"https://webperf.tips/tip/flamegraphs-in-depth",target:"_blank",rel:"nofollow",children:"\u706B\u7130\u56FE"}),"\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u8FDB\u884C\u4E86\u6DF1\u5165\u4ECB\u7ECD\u3002"]}),`
`,i(e.h3,{id:"call-tree-tab\u8C03\u7528\u6811\u9009\u9879\u5361",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#call-tree-tab\u8C03\u7528\u6811\u9009\u9879\u5361",children:"#"}),"Call Tree Tab\xA0\u201C\u8C03\u7528\u6811\u201D\u9009\u9879\u5361"]}),`
`,n(e.p,{children:"\u201C\u8C03\u7528\u6811\u201D\u9009\u9879\u5361\u4ECE\u81EA\u4E0A\u800C\u4E0B\u7684\u89D2\u5EA6\uFF08\u6309\u8C03\u7528\u987A\u5E8F\uFF09\u63D0\u4F9B\u6709\u5173\u5404\u79CD CPU/JavaScript \u6D3B\u52A8\u6240\u82B1\u8D39\u65F6\u95F4\u7684\u4FE1\u606F\uFF1A"}),`
`,i(e.p,{children:["\u4F8B\u5982\uFF0C\u5982\u679C\xA0",n(e.code,{children:"function a()"}),"\xA0\u8C03\u7528\xA0",n(e.code,{children:"function b()"}),"\xA0\uFF0C\xA0",n(e.code,{children:"a"}),"\xA0\u6267\u884C\u7684\u7D2F\u79EF\u65F6\u95F4\u663E\u793A\u5728\u9876\u90E8\uFF1A"]}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225727.png",alt:"20231109225727"})}),`
`,i(e.p,{children:["\u8FD9\u4E5F\u5728\u6211\u5173\u4E8E",n(e.a,{href:"https://webperf.tips/tip/flamegraphs-in-depth",target:"_blank",rel:"nofollow",children:"\u706B\u7130\u56FE"}),"\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u8FDB\u884C\u4E86\u6DF1\u5165\u4ECB\u7ECD\u3002"]}),`
`,i(e.h3,{id:"event-log-tab\u4E8B\u4EF6\u65E5\u5FD7\u9009\u9879\u5361",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#event-log-tab\u4E8B\u4EF6\u65E5\u5FD7\u9009\u9879\u5361",children:"#"}),"Event Log Tab\xA0\u201C\u4E8B\u4EF6\u65E5\u5FD7\u201D\u9009\u9879\u5361"]}),`
`,n(e.p,{children:"\u201C\u4E8B\u4EF6\u65E5\u5FD7\u201D\u9009\u9879\u5361\u6309\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u663E\u793A\u6240\u9009\u5185\u5BB9\u4E2D\u7684\u6240\u6709\u4E8B\u4EF6\u3002"}),`
`,n(e.p,{children:"\u5B83\u4ECE\u5DE6\u5230\u53F3\u663E\u793A\u4E0E\u4E3B\u7EBF\u7A0B\u5B50\u7A97\u683C\u76F8\u540C\u7684\u4EFB\u52A1\u4FE1\u606F\uFF0C\u4F46\u4EE5\u5217\u8868\u89C6\u56FE\u7684\u5F62\u5F0F\u6392\u5E8F\uFF1A"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225959.png",alt:"20231109225959"})}),`
`,i(e.h2,{id:"conclusion\u7ED3\u8BBA",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion\u7ED3\u8BBA",children:"#"}),"Conclusion\xA0\u7ED3\u8BBA"]}),`
`,n(e.p,{children:"\u63A2\u67E5\u5668\u7684 UI \u975E\u5E38\u5F3A\u5927\uFF0C\u4E0D\u77E5\u9053\u4ECE\u54EA\u91CC\u5F00\u59CB\u53EF\u80FD\u4F1A\u4EE4\u4EBA\u56F0\u60D1\u3002"}),`
`,n(e.p,{children:"\u901A\u8FC7\u5B8C\u6210\u6B64\u63D0\u793A\uFF0C\u60A8\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u67E5\u770B Web \u5E94\u7528\u7A0B\u5E8F\u5728 CPU \u548C\u7F51\u7EDC\u6D3B\u52A8\u65B9\u9762\u7684\u8FD0\u884C\u60C5\u51B5\u3002"}),`
`,n(e.p,{children:"\u6211\u5EFA\u8BAE\u67E5\u770B\u4EE5\u4E0B\u63D0\u793A\uFF0C\u4EE5\u5E2E\u52A9\u60A8\u8FDB\u4E00\u6B65\u4E86\u89E3\u63A2\u67E5\u5668\uFF1A"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:i(e.a,{href:"https://webperf.tips/tip/understanding-flamegraphs",target:"_blank",rel:"nofollow",children:["How to Read Flamegraphs",n(e.br,{}),`
`,"\u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE"]})}),`
`,n(e.li,{children:n(e.a,{href:"https://webperf.tips/tip/profiler-advanced-ui",target:"_blank",rel:"nofollow",children:"Advanced Profiler UI\xA0\u9AD8\u7EA7\u63A2\u67E5\u5668 UI"})}),`
`,n(e.li,{children:i(e.a,{href:"https://webperf.tips/tip/network-profiler-pane",target:"_blank",rel:"nofollow",children:["Learn how to use the Profiler Network Pane",n(e.br,{}),`
`,"\u4E86\u89E3\u5982\u4F55\u4F7F\u7528\u201CProfiler\u201D\u7F51\u7EDC\u7A97\u683C"]})}),`
`,n(e.li,{children:i(e.a,{href:"https://webperf.tips/tip/main-profiler-pane",target:"_blank",rel:"nofollow",children:["Advanced usage on the Profiler Main Pane",n(e.br,{}),`
`,"Profiler \u4E3B\u7A97\u683C\u4E0A\u7684\u9AD8\u7EA7\u7528\u6CD5"]})}),`
`]})]})}function h(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}const p="2023/11/13 00:40:11",d=`# Chromium F12 \u6027\u80FD\u5206\u6790\u5668\u7684\u57FA\u672C\u6982\u8FF0


\`metadata:\`

**\u539F\u6807\u9898:** A Basic Overview of the Chromium F12 Performance Profiler

**\u94FE\u63A5:** https://webperf.tips/tip/profiler-basic-ui/

---

Chromium \u6027\u80FD\u5206\u6790\u5668\u7684 UI \u4E00\u5F00\u59CB\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u4E0D\u77E5\u6240\u63AA\uFF0C\u4F46\u4E00\u65E6\u60A8\u4E86\u89E3\u4E86\u5B83\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u5B83\u5B9E\u9645\u4E0A\u5C31\u975E\u5E38\u76F4\u89C2\u4E86\u3002

\u5728\u672C\u63D0\u793A\u4E2D\uFF0C\u6211\u5C06\u5F15\u5BFC\u4F60\u4E86\u89E3 Chromium F12 Profiler UI \u7684\u57FA\u672C\u7EC4\u4EF6\uFF0C\u4EE5\u4FBF\u4F60\u5F00\u59CB\u8BC6\u522B Web \u5E94\u7528\u7684\u6027\u80FD\u74F6\u9888\uFF01

## Prerequisite\xA0\u5148\u51B3\u6761\u4EF6

\u60A8\u5E94\u8BE5[\u6536\u96C6\u8DDF\u8E2A](./collect-a-trace)\u5E76\u786E\u4FDD\u5C06\u5176\u52A0\u8F7D\u5230 Chromium Profiler \u4E2D\u3002

\u6211\u5728\u672C\u6587\u4E2D\u4F7F\u7528\u7684\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\u6240\u793A\uFF1A

![20231109211923](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109211923.png)

## Layout

\u6709\u4E09\u4E2A\u4E3B\u8981\u90E8\u5206\uFF1A

1.  Trace Overview\xA0\u8DDF\u8E2A\u6982\u8FF0
2.  Selection Analysis Pane\xA0\u9009\u62E9\u5206\u6790\u7A97\u683C
3.  Details Bottom Pane\xA0\u8BE6\u7EC6\u4FE1\u606F\u5E95\u90E8\u7A97\u683C

![20231109212058](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212058.png)

## Section 1: Trace Overview

\u6211\u628A\u8FD9\u90E8\u5206\u770B\u4F5C\u662F\u6574\u4E2A\u6355\u83B7\u7684\u4E2A\u4EBA\u8D44\u6599\u7684\u201C\u4E3B\u4E16\u754C\u5730\u56FE\u201D\u6216\u201C\u5C0F\u5730\u56FE\u201D\u3002

:::tip{title=\u539F\u6587}
I think about this section as an "Overworld Map" or "minimap" of the entire captured profile.
:::

\u65E0\u8BBA\u6536\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u6301\u7EED\u65F6\u95F4\u5982\u4F55\uFF0C\u6574\u4E2A\u914D\u7F6E\u6587\u4EF6\u90FD\u5C06\u9002\u5408\u6B64\u9876\u90E8\u90E8\u5206\u3002

:::tip{title=\u539F\u6587}
Regardless of the duration of the collected profile, the entire profile will fit in this top section.
:::

\u5B83\u63D0\u4F9B\u4E86\u4E00\u76EE\u4E86\u7136\u7684\u53EF\u89C6\u5316\u6548\u679C\uFF0C\u53EF\u7528\u4E8E\u5728\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u4E2D\u9009\u62E9\u6216\u653E\u5927\u4EE5\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u5206\u6790\u3002

### Timestamps\xA0\u65F6\u95F4\u6233

\u5728 Profiler UI \u4E2D\uFF0C\u65F6\u95F4\u4ECE\u5DE6\u5230\u53F3\u8868\u793A\uFF0C\u8FD9\u610F\u5473\u7740\u8DDF\u8E2A\u7684\u6700\u5DE6\u4FA7\u90E8\u5206\u8868\u793A\u96C6\u5408\u7684\u5F00\u59CB\uFF0C\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\uFF0C\u540E\u7EED\u6355\u83B7\u7684\u4E8B\u4EF6\u5C06\u586B\u5145\u5230\u53F3\u4FA7\u3002

\u6700\u521D\u53EF\u80FD\u4EE4\u4EBA\u56F0\u60D1\u7684\u4E00\u4EF6\u4E8B\u662F\u672C\u8282\u4E0A\u65B9\u548C\u4E0B\u65B9\u7684\u65F6\u95F4\u6233\u3002

![20231109212542](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109212542.png)

\u7528\u4E8E\u8DDF\u8E2A\u6982\u8FF0\u7684\u65F6\u95F4\u6233\u662F\u9876\u90E8\u7684\u65F6\u95F4\u6233\uFF08\u4E0A\u9762\u7528\u7EA2\u8272\u5708\u51FA\uFF09\u3002\u8FD9\u4E9B\u65F6\u95F4\u6233\u5C06\u8DE8\u8D8A\u8DDF\u8E2A\u6536\u96C6\u7684\u6574\u4E2A\u6301\u7EED\u65F6\u95F4\u3002

\u84DD\u8272\u4E2D\u7684\u65F6\u95F4\u6233\u4E0E\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u76F8\u5173\uFF0C\u5E76\u7531\u201C\u9009\u62E9\u201D\u9A71\u52A8\u3002

:::tip{title=\u539F\u6587}
The timestamps that are used for the Trace Overview are the timestamps at the top (circled in Red above). These timestamps will span the entire duration of your trace collection.
:::

### Selection

In order to get more details specific sections of the captured trace, we need to use Selection (or Zooming).

Click and drag in the Trace Overview section in an area of interest:

![20231109220801](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109220801.png)

\u8FD9\u5C06\u4F7F "\u9009\u62E9\u5206\u6790 "\u7A97\u683C\u7684\u8303\u56F4\u4EC5\u9650\u4E8E\u60A8\u521A\u521A\u9009\u62E9\u7684\u533A\u57DF\u3002\u8BF7\u6CE8\u610F\uFF0C\u4E0B\u9762\u7684\u65F6\u95F4\u6233\uFF08\u84DD\u8272\u5708\u5185\uFF09\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u4EE5\u53CD\u6620\u60A8\u9009\u62E9\u7684\u90E8\u5206\uFF1A

![20231109221040](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221040.png)

\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u3001WSAD \u952E\u6216\u201C\u9009\u62E9\u5206\u6790\u7A97\u683C\u201D\u4E2D\u7684\u5355\u51FB\u5E76\u62D6\u52A8\u6765\u8C03\u6574\u201C\u9009\u62E9/\u7F29\u653E\u201D\u533A\u57DF\u3002

### Screenshot Preview\xA0\u622A\u56FE\u9884\u89C8

\u5982\u679C\u5728\u8DDF\u8E2A\u6536\u96C6\u671F\u95F4\u542F\u7528\u4E86\u5C4F\u5E55\u622A\u56FE\uFF08\u6211\u59CB\u7EC8\u5EFA\u8BAE\u8FD9\u6837\u505A\uFF01\uFF09\uFF0C\u5219\u5C06\u9F20\u6807\u60AC\u505C\u5728\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u90E8\u5206\u4E0A\u65F6\uFF0C\u5E94\u8BE5\u4F1A\u770B\u5230 UI \u9884\u89C8\u3002

\u5982\u679C\u60F3\u6839\u636E\u7279\u5B9A\u7684\u89C6\u89C9\u573A\u666F\u6765\u9009\u62E9\u8303\u56F4\uFF0C\u8FD9\u4E00\u70B9\u5C24\u5176\u6709\u7528\u3002

\u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u60F3\u9009\u62E9\u7528\u6237\u5355\u51FB\u6309\u94AE\u548C\u5C4F\u5E55\u4E0A\u51FA\u73B0\u6A21\u6001\u4E4B\u95F4\u7684\u90E8\u5206\u65F6\u95F4\uFF0C\u4EE5\u67E5\u770B CPU \u548C\u7F51\u7EDC\u5728\u8FD9\u4E9B\u4E8B\u4EF6\u53D1\u751F\u4E4B\u95F4\u7684\u8FD9\u6BB5\u65F6\u95F4\u5185\u7684\u8FD0\u884C\u60C5\u51B5\u3002

![20231109221525](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221525.png)

## Section 2: Selection Analysis Pane

This is the most complex(\u590D\u6742) section of the Profiler, and also where I spend most of my time analyzing profiles.

\u8BE5\u7A97\u683C\u7684\u8303\u56F4\u4E0E\u60A8\u5728 "\u8F68\u8FF9\u6982\u89C8 "\u90E8\u5206\u4E2D\u8BBE\u7F6E\u7684\u9009\u533A\u4E00\u81F4\u3002\u5B83\u5C06\u59CB\u7EC8\u9002\u5408\u60A8\u6240\u9009\u7684\u6574\u4E2A\u533A\u57DF\u3002

### Sub-panes

\u8BE5\u7528\u6237\u754C\u9762\u6709\u591A\u4E2A\u5B50\u9762\u677F\uFF0C\u53EF\u4EE5\u6298\u53E0\u6216\u5C55\u5F00\u3002

For beginners, I recommend expanding only the Main and Network tab, while collapsing the rest:

![20231109221729](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109221729.png)

#### Network Sub-pane\xA0\u7F51\u7EDC\u5B50\u7A97\u683C

The\xA0**Network sub-pane**\xA0shows all networking activity within your selection.

You can inspect the type, order, and durations of network requests made in the time slice of your selection.

![20231109222420](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109222420.png)

\u6709\u5173\u5982\u4F55\u9605\u8BFB\u6B64\u7A97\u683C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6211\u5728 [Chromium Profiler \u7F51\u7EDC\u7A97\u683C](https://webperf.tips/tip/network-profiler-pane)\u4E2D\u7684\u8BE6\u7EC6\u63D0\u793A\u3002

#### Main Sub-pane\xA0\u4E3B\u5B50\u7A97\u683C

The\xA0**Main sub-pane**\xA0refers to the Main UI thread of your web application.

\u5728\u4E3B UI \u7EBF\u7A0B\u4E0A\u53D1\u751F\u7684\u6240\u6709 CPU \u6D3B\u52A8\u90FD\u5728\u6B64\u5904\u8BB0\u5F55\u4E3A\u4EFB\u52A1\u3002

![20231109223110](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223110.png)

CPU \u6D3B\u52A8\u53EF\u4EE5\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A

*   Parsing of HTML\xA0
*   Execution and compilation of JavaScript  
*   Handling User Input such as Clicks and Keypress events  
*   Style, Layout, and Paint, used to prepare for generation of pixels / frames  

\u6709\u5173\u5982\u4F55\u9605\u8BFB\u6B64\u7A97\u683C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6211\u5728 [Chromium Profiler \u4E3B\u7EBF\u7A0B\u7A97\u683C](https://webperf.tips/tip/main-profiler-pane)\u4E2D\u7684\u8BE6\u7EC6\u63D0\u793A\u3002

#### Other panes

\u5176\u4ED6\u6709\u7528\u7684\u7A97\u683C\u5305\u62EC\uFF1A

*   _Frames_\xA0- a representation of frames generated to the screen over time  
    \u5E27 - \u968F\u65F6\u95F4\u63A8\u79FB\u751F\u6210\u5230\u5C4F\u5E55\u4E0A\u7684\u5E27\u7684\u8868\u793A\u5F62\u5F0F
*   _Timings_\xA0- custom\xA0[markers](https://webperf.tips/tip/performance-timing-markers)\xA0web developers can place to help measure and annotate profiles  
    \u8BA1\u65F6 - Web \u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u653E\u7F6E\u7684\u81EA\u5B9A\u4E49\u6807\u8BB0\u6765\u5E2E\u52A9\u6D4B\u91CF\u548C\u6CE8\u91CA\u914D\u7F6E\u6587\u4EF6
*   _WebWorker_\xA0or\xA0_ServiceWorker_\xA0threads - other JavaScript execution threads  
    WebWorker \u6216 ServiceWorker \u7EBF\u7A0B - \u5176\u4ED6 JavaScript \u6267\u884C\u7EBF\u7A0B
*   _Compositor_\xA0- activity for compositing graphical layers and preparing frame generation  
    Compositor - \u7528\u4E8E\u5408\u6210\u56FE\u5F62\u56FE\u5C42\u548C\u51C6\u5907\u5E27\u751F\u6210\u7684\u6D3B\u52A8

![20231109223545](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223545.png)

\u8FD9\u4E9B\u5185\u5BB9\u5728\u6211\u5173\u4E8E[\u9AD8\u7EA7\u63A2\u67E5\u5668UI](https://webperf.tips/tip/profiler-advanced-ui)\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u90FD\u6709\u4ECB\u7ECD\u3002

## Section 3: Details Bottom Pane

\u5728\u9875\u9762\u5E95\u90E8\uFF0C\u6709\u4E00\u4E2A\u8BE6\u7EC6\u4FE1\u606F\u7A97\u683C\u3002\u4E0E\u201C\u9009\u62E9\u5206\u6790\u201D\u7A97\u683C\u7C7B\u4F3C\uFF0C\u6B64 UI \u4E2D\u5171\u4EAB\u7684\u7EDF\u8BA1\u4FE1\u606F\u7684\u8303\u56F4\u9650\u5B9A\u4E3A\u201C\u8DDF\u8E2A\u6982\u8FF0\u201D\u4E2D\u7684\u9009\u62E9\uFF1A

![20231109223730](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109223730.png)

### Summary Tab

The\xA0**Summary Tab**\xA0provides stats on what type of CPU activity is consuming your main thread:

In this example, within the 790ms selection, 592ms is being spent on JavaScript activity:

![20231109224839](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224839.png)

It should be noted that the Summary tab adapts to what entity is selected.

For example, if you select a network request, it will provide a summary of the network resource:

![20231109224917](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109224917.png)

### Bottom Up Tab \u81EA\u4E0B\u800C\u4E0A\u9009\u9879\u5361

\u201C\u81EA\u4E0B\u800C\u4E0A\u201D\u9009\u9879\u5361\u4ECE\u53CD\u5411\u8C03\u7528\u5806\u6808\u7684\u89D2\u5EA6\u63D0\u4F9B\u6709\u5173\u6240\u9009\u5185\u5BB9\u4E2D\u5404\u79CD CPU/JavaScript \u6D3B\u52A8\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u7684\u4FE1\u606F\u3002

\u4F8B\u5982\uFF0C\u5982\u679C\xA0\`function a()\`\xA0\u8C03\u7528\xA0\`function b()\`\xA0\uFF0C\xA0\`b\`\xA0\u5219\u6267\u884C\u65F6\u95F4\u663E\u793A\u5728\u9876\u90E8\uFF1A

![20231109225344](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225344.png)

\u8FD9\u5728\u6211\u5173\u4E8E[\u706B\u7130\u56FE](https://webperf.tips/tip/flamegraphs-in-depth)\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u8FDB\u884C\u4E86\u6DF1\u5165\u4ECB\u7ECD\u3002

### Call Tree Tab\xA0\u201C\u8C03\u7528\u6811\u201D\u9009\u9879\u5361

\u201C\u8C03\u7528\u6811\u201D\u9009\u9879\u5361\u4ECE\u81EA\u4E0A\u800C\u4E0B\u7684\u89D2\u5EA6\uFF08\u6309\u8C03\u7528\u987A\u5E8F\uFF09\u63D0\u4F9B\u6709\u5173\u5404\u79CD CPU/JavaScript \u6D3B\u52A8\u6240\u82B1\u8D39\u65F6\u95F4\u7684\u4FE1\u606F\uFF1A

\u4F8B\u5982\uFF0C\u5982\u679C\xA0\`function a()\`\xA0\u8C03\u7528\xA0\`function b()\`\xA0\uFF0C\xA0\`a\`\xA0\u6267\u884C\u7684\u7D2F\u79EF\u65F6\u95F4\u663E\u793A\u5728\u9876\u90E8\uFF1A

![20231109225727](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225727.png)

\u8FD9\u4E5F\u5728\u6211\u5173\u4E8E[\u706B\u7130\u56FE](https://webperf.tips/tip/flamegraphs-in-depth)\u7684\u8BE6\u7EC6\u63D0\u793A\u4E2D\u8FDB\u884C\u4E86\u6DF1\u5165\u4ECB\u7ECD\u3002

### Event Log Tab\xA0\u201C\u4E8B\u4EF6\u65E5\u5FD7\u201D\u9009\u9879\u5361

\u201C\u4E8B\u4EF6\u65E5\u5FD7\u201D\u9009\u9879\u5361\u6309\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u663E\u793A\u6240\u9009\u5185\u5BB9\u4E2D\u7684\u6240\u6709\u4E8B\u4EF6\u3002

\u5B83\u4ECE\u5DE6\u5230\u53F3\u663E\u793A\u4E0E\u4E3B\u7EBF\u7A0B\u5B50\u7A97\u683C\u76F8\u540C\u7684\u4EFB\u52A1\u4FE1\u606F\uFF0C\u4F46\u4EE5\u5217\u8868\u89C6\u56FE\u7684\u5F62\u5F0F\u6392\u5E8F\uFF1A

![20231109225959](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231109225959.png)

## Conclusion\xA0\u7ED3\u8BBA

\u63A2\u67E5\u5668\u7684 UI \u975E\u5E38\u5F3A\u5927\uFF0C\u4E0D\u77E5\u9053\u4ECE\u54EA\u91CC\u5F00\u59CB\u53EF\u80FD\u4F1A\u4EE4\u4EBA\u56F0\u60D1\u3002

\u901A\u8FC7\u5B8C\u6210\u6B64\u63D0\u793A\uFF0C\u60A8\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u67E5\u770B Web \u5E94\u7528\u7A0B\u5E8F\u5728 CPU \u548C\u7F51\u7EDC\u6D3B\u52A8\u65B9\u9762\u7684\u8FD0\u884C\u60C5\u51B5\u3002

\u6211\u5EFA\u8BAE\u67E5\u770B\u4EE5\u4E0B\u63D0\u793A\uFF0C\u4EE5\u5E2E\u52A9\u60A8\u8FDB\u4E00\u6B65\u4E86\u89E3\u63A2\u67E5\u5668\uFF1A

*   [How to Read Flamegraphs  
    \u5982\u4F55\u9605\u8BFB\u706B\u7130\u56FE](https://webperf.tips/tip/understanding-flamegraphs)
*   [Advanced Profiler UI\xA0\u9AD8\u7EA7\u63A2\u67E5\u5668 UI](https://webperf.tips/tip/profiler-advanced-ui)
*   [Learn how to use the Profiler Network Pane  
    \u4E86\u89E3\u5982\u4F55\u4F7F\u7528\u201CProfiler\u201D\u7F51\u7EDC\u7A97\u683C](https://webperf.tips/tip/network-profiler-pane)
*   [Advanced usage on the Profiler Main Pane  
    Profiler \u4E3B\u7A97\u683C\u4E0A\u7684\u9AD8\u7EA7\u7528\u6CD5](https://webperf.tips/tip/main-profiler-pane)
`;export{d as content,h as default,l as frontmatter,p as lastUpdatedTime,s as title,c as toc};
