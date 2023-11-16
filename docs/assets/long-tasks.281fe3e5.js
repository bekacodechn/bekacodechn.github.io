import{jsx as e,jsxs as i,Fragment as t}from"react/jsx-runtime";const s=void 0,l=[{id:"prerequisites",text:"Prerequisites",depth:2},{id:"what-is-considered-a-long-task",text:"What is considered a Long Task?",depth:2},{id:"how-long-tasks-degrade-the-main-thread-\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD",text:"How Long Tasks degrade the Main Thread (\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD)",depth:2},{id:"frame-degradation\u5E27\u964D\u7EA7",text:"Frame Degradation\xA0\u5E27\u964D\u7EA7",depth:3},{id:"problem-delaying-your-initial-frame-\u5EF6\u8FDF\u521D\u59CB\u5E27",text:"Problem: Delaying your Initial Frame (\u5EF6\u8FDF\u521D\u59CB\u5E27)",depth:3},{id:"problem-degrading-interactivity-\u964D\u4F4E\u4EA4\u4E92\u6027",text:"Problem: Degrading Interactivity (\u964D\u4F4E\u4EA4\u4E92\u6027)",depth:3},{id:"what-causes-long-tasks",text:"What causes Long Tasks?",depth:2},{id:"identifying-long-tasks-in-the-profiler-\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1",text:"Identifying Long Tasks In the Profiler (\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1)",depth:2},{id:"conclusion",text:"Conclusion",depth:2}],c="\u957F\u4EFB\u52A1\uFF1A\u5B83\u4EEC\u662F\u4EC0\u4E48\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC";function a(r){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",ul:"ul",li:"li",em:"em",h2:"h2",img:"img",h3:"h3",br:"br"},r.components);return i(t,{children:[i(n.h1,{id:"\u957F\u4EFB\u52A1\u5B83\u4EEC\u662F\u4EC0\u4E48\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u957F\u4EFB\u52A1\u5B83\u4EEC\u662F\u4EC0\u4E48\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC",children:"#"}),"\u957F\u4EFB\u52A1\uFF1A\u5B83\u4EEC\u662F\u4EC0\u4E48\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC"]}),`
`,e(n.p,{children:e(n.code,{children:"metadata:"})}),`
`,i(n.p,{children:[e(n.strong,{children:"\u539F\u6807\u9898:"})," Long Tasks: What they are and why you should avoid them"]}),`
`,i(n.p,{children:[e(n.strong,{children:"\u94FE\u63A5:"})," ",e(n.a,{href:"https://webperf.tips/tip/long-tasks/",target:"_blank",rel:"nofollow",children:"https://webperf.tips/tip/long-tasks/"})]}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"\u6240\u6709\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u90FD\u6709\u4E00\u4E2A\u5355\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u7EBF\u7A0B\uFF0C\u5B83\u8D1F\u8D23"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"\u5904\u7406\u7528\u6237\u8F93\u5165\u4E8B\u4EF6\uFF0C\u5982\u70B9\u51FB\u548C\u952E\u76D8\u4E8B\u4EF6"}),`
`,e(n.li,{children:"\u8FD0\u884C JavaScript \u4EFB\u52A1\uFF0C\u5982 React \u6216\u5176\u4ED6\u5BA2\u6237\u7AEF\u4E1A\u52A1\u903B\u8F91"}),`
`,i(n.li,{children:["\u751F\u6210\u5411\u7528\u6237\u5C55\u793A\u50CF\u7D20\u7684",e(n.em,{children:"Frame"})]}),`
`]}),`
`,e(n.p,{children:'\u8FD9\u4E9B\u64CD\u4F5C\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u5728\u6240\u8C13\u7684 "\u4EFB\u52A1 "\u4E2D\u6267\u884C\u3002'}),`
`,e(n.p,{children:"\u7531\u4E8E\u53EA\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\u8D1F\u8D23\u6240\u6709\u8FD9\u4E9B\u4EFB\u52A1\uFF0C\u56E0\u6B64\u4EFB\u4F55\u6267\u884C\u65F6\u95F4\u7279\u522B\u957F\u7684\u4EFB\u52A1\u90FD\u4F1A\u5835\u585E\u7EBF\u7A0B\uFF0C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002"}),`
`,e(n.p,{children:'\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u8FD9\u4E9B\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u4EFB\u52A1\uFF08\u79F0\u4E3A "\u957F\u4EFB\u52A1"\uFF09\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8981\u907F\u514D\u5B83\u4EEC\u3002'}),`
`,i(n.h2,{id:"prerequisites",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisites",children:"#"}),"Prerequisites"]}),`
`,i(n.h2,{id:"what-is-considered-a-long-task",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-considered-a-long-task",children:"#"}),"What is considered a Long Task?"]}),`
`,i(n.p,{children:["A Task is considered a Long Task if it takes longer than\xA0",e(n.strong,{children:"50ms"}),"."]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110151036.png",alt:"20231110151036"})}),`
`,i(n.h2,{id:"how-long-tasks-degrade-the-main-thread-\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-long-tasks-degrade-the-main-thread-\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD",children:"#"}),"How Long Tasks degrade the Main Thread (\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD)"]}),`
`,i(n.p,{children:["\u4ECE\u6211\u5173\u4E8E\u6D4F\u89C8\u5668",e(n.a,{href:"/chrome/performance/tips/event-loop",children:"\u4E8B\u4EF6\u5FAA\u73AF"}),"\u7684\u63D0\u793A\u4E2D\u6211\u4EEC\u77E5\u9053\uFF0C\u4E3B\u7EBF\u7A0B\u4E00\u6B21\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u4EFB\u52A1\u3002\u4EFB\u4F55\u672A\u8FD0\u884C\u7684\u4EFB\u52A1\u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\uFF1A"]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110153633.png",alt:"20231110153633"})}),`
`,e(n.p,{children:"While a Task is executing on the Main Thread, the Event Loop can not unload other queued Tasks from the Task Queue onto the thread."}),`
`,e(n.p,{children:"\u957F\u4EFB\u52A1\u7684\u95EE\u9898\u5C24\u5176\u4E25\u91CD\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5728\u8F83\u957F\u7684\u65F6\u95F4\u5185\u963B\u6B62\u4E8B\u4EF6\u5FAA\u73AF\u5378\u8F7D\u4EFB\u52A1\u961F\u5217\uFF1B\u5B83\u57FA\u672C\u4E0A\u4F1A\u963B\u6B62\u4E8B\u4EF6\u5FAA\u73AF\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u4EFB\u4F55\u8FDB\u4E00\u6B65\u7684\u5DE5\u4F5C\u3002"}),`
`,i(n.h3,{id:"frame-degradation\u5E27\u964D\u7EA7",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#frame-degradation\u5E27\u964D\u7EA7",children:"#"}),"Frame Degradation\xA0\u5E27\u964D\u7EA7"]}),`
`,e(n.p,{children:"\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u5076\u5C14\u4F1A\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u9009\u62E9\u4EFB\u52A1\u3002\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u8D1F\u8D23\u5C06\u5E27\u5448\u73B0\u5230\u7528\u6237\u7684\u5C4F\u5E55\u3002"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154111.png",alt:"20231110154111"})}),`
`,i(n.p,{children:["\u4E0E\u5176\u4ED6\u4EFB\u52A1\u4E00\u6837\uFF0C\u5F53\u7EBF\u7A0B\u4E0A\u6B63\u5728\u8FD0\u884C\u53E6\u4E00\u4E2A\u4EFB\u52A1\u65F6\uFF0C\u6E32\u67D3\u6B65\u9AA4\u65E0\u6CD5\u8FD0\u884C\u3002\u56E0\u6B64\uFF0C\u957F\u4EFB\u52A1\u53EF\u80FD\u4F1A\u4E25\u91CD\u964D\u4F4E\u6D4F\u89C8\u5668\u5411\u7528\u6237\u751F\u6210\u5E27\u7684\u80FD\u529B\uFF1A(16.7ms\u5185\u8981\u5B8C\u6210task\u548Cstyle\u3001layout\u3001paint\u7B49\u4EFB\u52A1\u624D\u80FD\u987A\u5229\u751F\u6210",e(n.em,{children:"Frame"}),")"]}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154212.png",alt:"20231110154212"})}),`
`,i(n.h3,{id:"problem-delaying-your-initial-frame-\u5EF6\u8FDF\u521D\u59CB\u5E27",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#problem-delaying-your-initial-frame-\u5EF6\u8FDF\u521D\u59CB\u5E27",children:"#"}),"Problem: Delaying your Initial Frame (\u5EF6\u8FDF\u521D\u59CB\u5E27)"]}),`
`,e(n.p,{children:"\u5982\u679C Web \u5E94\u7528\u7A0B\u5E8F\u4F9D\u8D56\u4E8E JavaScript \u5728\u9875\u9762\u52A0\u8F7D\u65F6\u751F\u6210\u521D\u59CB UI\uFF0C\u5219\u5448\u73B0\u5173\u952E\u5E27\u7684\u901F\u5EA6\u5C06\u53D6\u51B3\u4E8E\u5448\u73B0\u5173\u952E\u5E27\u6240\u9700\u7684 JavaScript \u901F\u5EA6\u3002"}),`
`,e(n.p,{children:"\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u7684\u5E94\u7528\u4F9D\u8D56\u4E8E React \u6765\u5448\u73B0\u5176\u521D\u59CB\u5E27\uFF0C\u90A3\u4E48 React \u5FC5\u987B\u6784\u9020 DOM\uFF0C\u7136\u540E\u5FC5\u987B\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\uFF0C\u6700\u540E\u4F60\u7684\u7528\u6237\u624D\u80FD\u770B\u5230\u4F60\u7684 UI\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154428.png",alt:"20231110154428"})}),`
`,e(n.p,{children:"\u5728\u751F\u6210 Frame \u4E4B\u524D\uFF0C\u7528\u6237\u65E0\u6CD5\u770B\u5230 UI\uFF0C\u56E0\u6B64\u5FC5\u987B\u51CF\u5C0F Long Task \u7684\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u6D4F\u89C8\u5668\u53EF\u4EE5\u66F4\u5FEB\u5730\u751F\u6210 Frame\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154458.png",alt:"20231110154458"})}),`
`,i(n.h3,{id:"problem-degrading-interactivity-\u964D\u4F4E\u4EA4\u4E92\u6027",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#problem-degrading-interactivity-\u964D\u4F4E\u4EA4\u4E92\u6027",children:"#"}),"Problem: Degrading Interactivity (\u964D\u4F4E\u4EA4\u4E92\u6027)"]}),`
`,e(n.p,{children:"\u8BA9\u6211\u4EEC\u8003\u8651\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u7528\u6237\u6B63\u5728\u8F93\u5165\u6846\u4E2D\u952E\u5165\u5185\u5BB9\u3002"}),`
`,e(n.p,{children:"\u6BCF\u4E2A\u6309\u952E\u4E8B\u4EF6\u90FD\u5728\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\uFF0C\u7136\u540E\u653E\u7F6E\u5230\u4E3B\u7EBF\u7A0B\u4E0A\uFF0C\u7531\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u3002\u7136\u540E\uFF0C\u6309\u952E\u901A\u8FC7 Frame \u5728\u5C4F\u5E55\u4E0A\u8868\u793A\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154553.png",alt:"20231110154553"})}),`
`,e(n.p,{children:"\u6211\u4EEC\u5E0C\u671B\u8F93\u5165\u5BF9\u7528\u6237\u6765\u8BF4\u54CD\u5E94\u8FC5\u901F\u4E14\u6D41\u7545\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks10.gif",alt:"LongTasks10"})}),`
`,e(n.p,{children:"\u8BF7\u6CE8\u610F\uFF0C\u7528\u6237\u7684\u6BCF\u6B21\u6309\u952E\u90FD\u4F1A\u7ACB\u5373\u901A\u8FC7 Frame \u5728\u5C4F\u5E55\u4E0A\u8868\u793A\u4E3A\u50CF\u7D20\u3002"}),`
`,e(n.p,{children:"\u5982\u679C\u5728\u952E\u5165\u65F6\u53D1\u751F\u957F\u4EFB\u52A1\uFF0C\u7528\u6237\u5C06\u9047\u5230\u5361\u987F\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155320.png",alt:"20231110155320"})}),`
`,e(n.p,{children:"\u5BF9\u4E8E\u7528\u6237\uFF0C\u8F93\u5165\u5361\u987F\u5C06\u8868\u73B0\u4E3A\u5EF6\u8FDF\u5E27\uFF0C\u4EE5\u53CD\u6620\u5176\u8F93\u5165\u4E8B\u4EF6\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks09.gif",alt:"LongTasks09"})}),`
`,i(n.h2,{id:"what-causes-long-tasks",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-causes-long-tasks",children:"#"}),"What causes Long Tasks?"]}),`
`,e(n.p,{children:"Long Tasks typically arise from heavy, slow, or inefficient JavaScript codepaths that are synchronous within a Task.(\u957F\u4EFB\u52A1\u901A\u5E38\u6E90\u4E8E\u4EFB\u52A1\u4E2D\u540C\u6B65\u7684\u7E41\u91CD\u3001\u7F13\u6162\u6216\u4F4E\u6548\u7684 JavaScript \u4EE3\u7801\u8DEF\u5F84\u3002)"}),`
`,e(n.p,{children:"\u8FD9\u4E9B\u4EE3\u7801\u8DEF\u5F84\u7684\u5E38\u89C1\u793A\u4F8B\u5305\u62EC\uFF1A"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"while"}),"\xA0/\xA0",e(n.code,{children:"for"}),"\xA0loops with a high iteration count",e(n.br,{}),`
`,e(n.code,{children:"while"}),"\xA0/\xA0",e(n.code,{children:"for"}),"\xA0\u5177\u6709\u9AD8\u8FED\u4EE3\u6B21\u6570\u7684\u5FAA\u73AF"]}),`
`,i(n.li,{children:["Synchronous JavaScript work, often in high frequency, such as:",e(n.br,{}),`
`,"\u540C\u6B65 JavaScript \u5DE5\u4F5C\uFF0C\u901A\u5E38\u9891\u7387\u5F88\u9AD8\uFF0C\u4F8B\u5982\uFF1A",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["String parsing, decoding, concatenation, etc.",e(n.br,{}),`
`,"\u5B57\u7B26\u4E32\u89E3\u6790\u3001\u89E3\u7801\u3001\u4E32\u8054\u7B49"]}),`
`,e(n.li,{children:"Updates to the DOM\xA0DOM \u66F4\u65B0"}),`
`,i(n.li,{children:["Compilation of large scripts",e(n.br,{}),`
`,"\u5927\u578B\u811A\u672C\u7684\u7F16\u8BD1"]}),`
`]}),`
`]}),`
`,i(n.li,{children:["Inefficient querying of element positioning information, inducing\xA0",e(n.a,{href:"https://webperf.tips/tip/layout-thrashing",target:"_blank",rel:"nofollow",children:"Layout Thrashing"}),e(n.br,{}),`
`,"\u5143\u7D20\u5B9A\u4F4D\u4FE1\u606F\u67E5\u8BE2\u6548\u7387\u4F4E\u4E0B\uFF0C\u5BFC\u81F4\u5E03\u5C40\u6296\u52A8"]}),`
`,i(n.li,{children:["Heavy or frequent\xA0",e(n.a,{href:"https://webperf.tips/tip/microtasks",target:"_blank",rel:"nofollow",children:"Microtasks"}),", usually from resolved\xA0",e(n.code,{children:"Promise"}),"s",e(n.br,{}),`
`,"\u7E41\u91CD\u6216\u9891\u7E41\u7684\u5FAE\u4EFB\u52A1\uFF0C\u901A\u5E38\u6765\u81EA\u5DF2\u89E3\u51B3\xA0",e(n.code,{children:"Promise"}),"\xA0\u7684"]}),`
`]}),`
`,e(n.p,{children:"\u957F\u4EFB\u52A1\u4E0D\u4EC5\u4F53\u73B0\u5728\u4E0E JavaScript \u76F8\u5173\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u800C\u4E14\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u8FD9\u662F\u5B83\u4EEC\u6700\u5E38\u89C1\u7684\u6765\u6E90\u3002"}),`
`,i(n.h2,{id:"identifying-long-tasks-in-the-profiler-\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#identifying-long-tasks-in-the-profiler-\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1",children:"#"}),"Identifying Long Tasks In the Profiler (\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1)"]}),`
`,e(n.p,{children:"\u5982\u679C\u60A8\u6536\u96C6\u4E86 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\uFF0CChromium F12 Profiler \u5C06\u901A\u8FC7\u5728 UI \u4E2D\u6807\u8BB0\u957F\u4EFB\u52A1\u6765\u5E2E\u52A9\u60A8\u8BC6\u522B\u5B83\u4EEC\uFF1A"}),`
`,e(n.p,{children:e(n.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155956.png",alt:"20231110155956"})}),`
`,i(n.p,{children:["\u63A2\u67E5\u5668\u5C06\u628A\u201C\u957F\u4EFB\u52A1\u201D\u8868\u793A\u4E3A\u706B\u7130\u56FE\u3002\u6309\u7167\u6211",e(n.a,{href:"https://webperf.tips/tip/understanding-flamegraphs/",target:"_blank",rel:"nofollow",children:"\u5173\u4E8E\u7406\u89E3\u706B\u7130\u56FE"}),"\u7684\u63D0\u793A\u6765\u5B66\u4E60\u5982\u4F55\u9605\u8BFB\u8FD9\u4E9B\u56FE\uFF0C\u5E76\u8BC6\u522B\u4EFB\u52A1\u4E2D\u7684\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u3002"]}),`
`,i(n.h2,{id:"conclusion",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,e(n.p,{children:"\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u4EC0\u4E48\u662F\u957F\u4EFB\u52A1\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC\u3002"}),`
`,e(n.p,{children:"\u63A2\u7D22\u4EE5\u4E0B\u6709\u5173\u5982\u4F55\u4F18\u5316\u957F\u4EFB\u52A1\u548C\u6539\u5584\u7528\u6237\u4F53\u9A8C\u7684\u63D0\u793A\uFF1A"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/shrink-tasks",target:"_blank",rel:"nofollow",children:["Remove inefficient work from Tasks",e(n.br,{}),`
`,"\u4ECE\u4EFB\u52A1\u4E2D\u5220\u9664\u4F4E\u6548\u5DE5\u4F5C"]})}),`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/defer-noncritical-work",target:"_blank",rel:"nofollow",children:["Defer non-critical work from your critical path",e(n.br,{}),`
`,"\u4ECE\u5173\u952E\u8DEF\u5F84\u4E2D\u63A8\u8FDF\u975E\u5173\u952E\u5DE5\u4F5C"]})}),`
`,e(n.li,{children:i(n.a,{href:"https://webperf.tips/tip/task-splitting",target:"_blank",rel:"nofollow",children:["Decompose Long Tasks into smaller tasks",e(n.br,{}),`
`,"\u5C06\u957F\u4EFB\u52A1\u5206\u89E3\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1"]})}),`
`]})]})}function h(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(a,r)})):a(r)}const d="2023/11/13 00:40:11",p=`# \u957F\u4EFB\u52A1\uFF1A\u5B83\u4EEC\u662F\u4EC0\u4E48\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC


\`metadata:\`

**\u539F\u6807\u9898:** Long Tasks: What they are and why you should avoid them

**\u94FE\u63A5:** https://webperf.tips/tip/long-tasks/

---

\u6240\u6709\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u90FD\u6709\u4E00\u4E2A\u5355\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u7EBF\u7A0B\uFF0C\u5B83\u8D1F\u8D23

- \u5904\u7406\u7528\u6237\u8F93\u5165\u4E8B\u4EF6\uFF0C\u5982\u70B9\u51FB\u548C\u952E\u76D8\u4E8B\u4EF6
- \u8FD0\u884C JavaScript \u4EFB\u52A1\uFF0C\u5982 React \u6216\u5176\u4ED6\u5BA2\u6237\u7AEF\u4E1A\u52A1\u903B\u8F91
- \u751F\u6210\u5411\u7528\u6237\u5C55\u793A\u50CF\u7D20\u7684*Frame*

\u8FD9\u4E9B\u64CD\u4F5C\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u5728\u6240\u8C13\u7684 "\u4EFB\u52A1 "\u4E2D\u6267\u884C\u3002

\u7531\u4E8E\u53EA\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\u8D1F\u8D23\u6240\u6709\u8FD9\u4E9B\u4EFB\u52A1\uFF0C\u56E0\u6B64\u4EFB\u4F55\u6267\u884C\u65F6\u95F4\u7279\u522B\u957F\u7684\u4EFB\u52A1\u90FD\u4F1A\u5835\u585E\u7EBF\u7A0B\uFF0C\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002

\u5728\u672C\u5C0F\u8D34\u58EB\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u8FD9\u4E9B\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u4EFB\u52A1\uFF08\u79F0\u4E3A "\u957F\u4EFB\u52A1"\uFF09\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8981\u907F\u514D\u5B83\u4EEC\u3002

## Prerequisites

## What is considered a Long Task?

A Task is considered a Long Task if it takes longer than\xA0**50ms**.

![20231110151036](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110151036.png)

## How Long Tasks degrade the Main Thread (\u957F\u4EFB\u52A1\u5982\u4F55\u964D\u4F4E\u4E3B\u7EBF\u7A0B\u7684\u6027\u80FD)

\u4ECE\u6211\u5173\u4E8E\u6D4F\u89C8\u5668[\u4E8B\u4EF6\u5FAA\u73AF](./event-loop.md)\u7684\u63D0\u793A\u4E2D\u6211\u4EEC\u77E5\u9053\uFF0C\u4E3B\u7EBF\u7A0B\u4E00\u6B21\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u4EFB\u52A1\u3002\u4EFB\u4F55\u672A\u8FD0\u884C\u7684\u4EFB\u52A1\u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\uFF1A

![20231110153633](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110153633.png)

While a Task is executing on the Main Thread, the Event Loop can not unload other queued Tasks from the Task Queue onto the thread.

\u957F\u4EFB\u52A1\u7684\u95EE\u9898\u5C24\u5176\u4E25\u91CD\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5728\u8F83\u957F\u7684\u65F6\u95F4\u5185\u963B\u6B62\u4E8B\u4EF6\u5FAA\u73AF\u5378\u8F7D\u4EFB\u52A1\u961F\u5217\uFF1B\u5B83\u57FA\u672C\u4E0A\u4F1A\u963B\u6B62\u4E8B\u4EF6\u5FAA\u73AF\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u4EFB\u4F55\u8FDB\u4E00\u6B65\u7684\u5DE5\u4F5C\u3002

### Frame Degradation\xA0\u5E27\u964D\u7EA7

\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF\u5076\u5C14\u4F1A\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u9009\u62E9\u4EFB\u52A1\u3002\u6E32\u67D3\u6B65\u9AA4\u4EFB\u52A1\u8D1F\u8D23\u5C06\u5E27\u5448\u73B0\u5230\u7528\u6237\u7684\u5C4F\u5E55\u3002

![20231110154111](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154111.png)

\u4E0E\u5176\u4ED6\u4EFB\u52A1\u4E00\u6837\uFF0C\u5F53\u7EBF\u7A0B\u4E0A\u6B63\u5728\u8FD0\u884C\u53E6\u4E00\u4E2A\u4EFB\u52A1\u65F6\uFF0C\u6E32\u67D3\u6B65\u9AA4\u65E0\u6CD5\u8FD0\u884C\u3002\u56E0\u6B64\uFF0C\u957F\u4EFB\u52A1\u53EF\u80FD\u4F1A\u4E25\u91CD\u964D\u4F4E\u6D4F\u89C8\u5668\u5411\u7528\u6237\u751F\u6210\u5E27\u7684\u80FD\u529B\uFF1A(16.7ms\u5185\u8981\u5B8C\u6210task\u548Cstyle\u3001layout\u3001paint\u7B49\u4EFB\u52A1\u624D\u80FD\u987A\u5229\u751F\u6210*Frame*)

![20231110154212](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154212.png)

### Problem: Delaying your Initial Frame (\u5EF6\u8FDF\u521D\u59CB\u5E27)

\u5982\u679C Web \u5E94\u7528\u7A0B\u5E8F\u4F9D\u8D56\u4E8E JavaScript \u5728\u9875\u9762\u52A0\u8F7D\u65F6\u751F\u6210\u521D\u59CB UI\uFF0C\u5219\u5448\u73B0\u5173\u952E\u5E27\u7684\u901F\u5EA6\u5C06\u53D6\u51B3\u4E8E\u5448\u73B0\u5173\u952E\u5E27\u6240\u9700\u7684 JavaScript \u901F\u5EA6\u3002

\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u7684\u5E94\u7528\u4F9D\u8D56\u4E8E React \u6765\u5448\u73B0\u5176\u521D\u59CB\u5E27\uFF0C\u90A3\u4E48 React \u5FC5\u987B\u6784\u9020 DOM\uFF0C\u7136\u540E\u5FC5\u987B\u8FD0\u884C\u6E32\u67D3\u6B65\u9AA4\uFF0C\u6700\u540E\u4F60\u7684\u7528\u6237\u624D\u80FD\u770B\u5230\u4F60\u7684 UI\uFF1A

![20231110154428](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154428.png)

\u5728\u751F\u6210 Frame \u4E4B\u524D\uFF0C\u7528\u6237\u65E0\u6CD5\u770B\u5230 UI\uFF0C\u56E0\u6B64\u5FC5\u987B\u51CF\u5C0F Long Task \u7684\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u6D4F\u89C8\u5668\u53EF\u4EE5\u66F4\u5FEB\u5730\u751F\u6210 Frame\uFF1A

![20231110154458](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154458.png)

### Problem: Degrading Interactivity (\u964D\u4F4E\u4EA4\u4E92\u6027)

\u8BA9\u6211\u4EEC\u8003\u8651\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u7528\u6237\u6B63\u5728\u8F93\u5165\u6846\u4E2D\u952E\u5165\u5185\u5BB9\u3002

\u6BCF\u4E2A\u6309\u952E\u4E8B\u4EF6\u90FD\u5728\u6D4F\u89C8\u5668\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u6392\u961F\uFF0C\u7136\u540E\u653E\u7F6E\u5230\u4E3B\u7EBF\u7A0B\u4E0A\uFF0C\u7531\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u3002\u7136\u540E\uFF0C\u6309\u952E\u901A\u8FC7 Frame \u5728\u5C4F\u5E55\u4E0A\u8868\u793A\uFF1A

![20231110154553](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110154553.png)

\u6211\u4EEC\u5E0C\u671B\u8F93\u5165\u5BF9\u7528\u6237\u6765\u8BF4\u54CD\u5E94\u8FC5\u901F\u4E14\u6D41\u7545\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A

![LongTasks10](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks10.gif)

\u8BF7\u6CE8\u610F\uFF0C\u7528\u6237\u7684\u6BCF\u6B21\u6309\u952E\u90FD\u4F1A\u7ACB\u5373\u901A\u8FC7 Frame \u5728\u5C4F\u5E55\u4E0A\u8868\u793A\u4E3A\u50CF\u7D20\u3002

\u5982\u679C\u5728\u952E\u5165\u65F6\u53D1\u751F\u957F\u4EFB\u52A1\uFF0C\u7528\u6237\u5C06\u9047\u5230\u5361\u987F\uFF1A

![20231110155320](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155320.png)

\u5BF9\u4E8E\u7528\u6237\uFF0C\u8F93\u5165\u5361\u987F\u5C06\u8868\u73B0\u4E3A\u5EF6\u8FDF\u5E27\uFF0C\u4EE5\u53CD\u6620\u5176\u8F93\u5165\u4E8B\u4EF6\uFF1A

![LongTasks09](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/LongTasks09.gif)

## What causes Long Tasks? 

Long Tasks typically arise from heavy, slow, or inefficient JavaScript codepaths that are synchronous within a Task.(\u957F\u4EFB\u52A1\u901A\u5E38\u6E90\u4E8E\u4EFB\u52A1\u4E2D\u540C\u6B65\u7684\u7E41\u91CD\u3001\u7F13\u6162\u6216\u4F4E\u6548\u7684 JavaScript \u4EE3\u7801\u8DEF\u5F84\u3002)

\u8FD9\u4E9B\u4EE3\u7801\u8DEF\u5F84\u7684\u5E38\u89C1\u793A\u4F8B\u5305\u62EC\uFF1A

*   \`while\`\xA0/\xA0\`for\`\xA0loops with a high iteration count  
    \`while\`\xA0/\xA0\`for\`\xA0\u5177\u6709\u9AD8\u8FED\u4EE3\u6B21\u6570\u7684\u5FAA\u73AF
*   Synchronous JavaScript work, often in high frequency, such as:  
    \u540C\u6B65 JavaScript \u5DE5\u4F5C\uFF0C\u901A\u5E38\u9891\u7387\u5F88\u9AD8\uFF0C\u4F8B\u5982\uFF1A
    *   String parsing, decoding, concatenation, etc.  
        \u5B57\u7B26\u4E32\u89E3\u6790\u3001\u89E3\u7801\u3001\u4E32\u8054\u7B49
    *   Updates to the DOM\xA0DOM \u66F4\u65B0
    *   Compilation of large scripts  
        \u5927\u578B\u811A\u672C\u7684\u7F16\u8BD1
*   Inefficient querying of element positioning information, inducing\xA0[Layout Thrashing](https://webperf.tips/tip/layout-thrashing)  
    \u5143\u7D20\u5B9A\u4F4D\u4FE1\u606F\u67E5\u8BE2\u6548\u7387\u4F4E\u4E0B\uFF0C\u5BFC\u81F4\u5E03\u5C40\u6296\u52A8
*   Heavy or frequent\xA0[Microtasks](https://webperf.tips/tip/microtasks), usually from resolved\xA0\`Promise\`s  
    \u7E41\u91CD\u6216\u9891\u7E41\u7684\u5FAE\u4EFB\u52A1\uFF0C\u901A\u5E38\u6765\u81EA\u5DF2\u89E3\u51B3\xA0\`Promise\`\xA0\u7684

\u957F\u4EFB\u52A1\u4E0D\u4EC5\u4F53\u73B0\u5728\u4E0E JavaScript \u76F8\u5173\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u800C\u4E14\u6839\u636E\u6211\u7684\u7ECF\u9A8C\uFF0C\u8FD9\u662F\u5B83\u4EEC\u6700\u5E38\u89C1\u7684\u6765\u6E90\u3002

## Identifying Long Tasks In the Profiler (\u5728\u63A2\u67E5\u5668\u4E2D\u8BC6\u522B\u957F\u4EFB\u52A1)

\u5982\u679C\u60A8\u6536\u96C6\u4E86 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\uFF0CChromium F12 Profiler \u5C06\u901A\u8FC7\u5728 UI \u4E2D\u6807\u8BB0\u957F\u4EFB\u52A1\u6765\u5E2E\u52A9\u60A8\u8BC6\u522B\u5B83\u4EEC\uFF1A

![20231110155956](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231110155956.png)

\u63A2\u67E5\u5668\u5C06\u628A\u201C\u957F\u4EFB\u52A1\u201D\u8868\u793A\u4E3A\u706B\u7130\u56FE\u3002\u6309\u7167\u6211[\u5173\u4E8E\u7406\u89E3\u706B\u7130\u56FE](https://webperf.tips/tip/understanding-flamegraphs/)\u7684\u63D0\u793A\u6765\u5B66\u4E60\u5982\u4F55\u9605\u8BFB\u8FD9\u4E9B\u56FE\uFF0C\u5E76\u8BC6\u522B\u4EFB\u52A1\u4E2D\u7684\u6162\u901F\u4EE3\u7801\u8DEF\u5F84\u3002

## Conclusion

\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u4EC0\u4E48\u662F\u957F\u4EFB\u52A1\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u907F\u514D\u5B83\u4EEC\u3002

\u63A2\u7D22\u4EE5\u4E0B\u6709\u5173\u5982\u4F55\u4F18\u5316\u957F\u4EFB\u52A1\u548C\u6539\u5584\u7528\u6237\u4F53\u9A8C\u7684\u63D0\u793A\uFF1A

*   [Remove inefficient work from Tasks  
    \u4ECE\u4EFB\u52A1\u4E2D\u5220\u9664\u4F4E\u6548\u5DE5\u4F5C](https://webperf.tips/tip/shrink-tasks)
*   [Defer non-critical work from your critical path  
    \u4ECE\u5173\u952E\u8DEF\u5F84\u4E2D\u63A8\u8FDF\u975E\u5173\u952E\u5DE5\u4F5C](https://webperf.tips/tip/defer-noncritical-work)
*   [Decompose Long Tasks into smaller tasks  
    \u5C06\u957F\u4EFB\u52A1\u5206\u89E3\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1](https://webperf.tips/tip/task-splitting)`;export{p as content,h as default,s as frontmatter,d as lastUpdatedTime,c as title,l as toc};
