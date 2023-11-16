import{jsx as n,jsxs as s,Fragment as a}from"react/jsx-runtime";const t=void 0,o=[{id:"what-is-a-task\u4EC0\u4E48\u662F\u4EFB\u52A1",text:"What is a task?\xA0\u4EC0\u4E48\u662F\u4EFB\u52A1\uFF1F",depth:2},{id:"what-is-the-main-thread--\u4E3B\u7EBF\u662F\u4EC0\u4E48",text:"What is the main thread?  \u4E3B\u7EBF\u662F\u4EC0\u4E48\uFF1F",depth:2},{id:"task-management-strategies--\u4EFB\u52A1\u7BA1\u7406\u7B56\u7565",text:"Task management strategies  \u4EFB\u52A1\u7BA1\u7406\u7B56\u7565",depth:2},{id:"manually-defer-code-execution--\u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C",text:"Manually defer code execution  \u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C",depth:3},{id:"useasyncawaitto-create-yield-points--\u4F7F\u7528--\u521B\u5EFA\u5C48\u670D\u70B9",text:"Use\xA0async/await\xA0to create yield points  (\u4F7F\u7528 / \u521B\u5EFA\u5C48\u670D\u70B9)",depth:3},{id:"yield-only-when-necessary--\u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D",text:"Yield only when necessary  \u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D",depth:3},{id:"gaps-in-current-apis",text:"Gaps in current APIs",depth:2},{id:"a-dedicated-scheduler-api--\u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F-api",text:"A dedicated scheduler API  \u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F API",depth:3},{id:"built-in-yield-with-continuation-via-\u5185\u7F6E\u4EA7\u91CF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EEDscheduleryield",text:"Built-in yield with continuation via (\u5185\u7F6E\u4EA7\u91CF\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EEDscheduler.yield)",depth:3},{id:"conclusion",text:"Conclusion",depth:2}],c="\u4F18\u5316\u957F\u4EFB\u52A1";function i(l){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",ul:"ul",li:"li",em:"em",h2:"h2",img:"img",br:"br",div:"div",button:"button",span:"span",pre:"pre",h3:"h3"},l.components);return s(a,{children:[s(e.h1,{id:"\u4F18\u5316\u957F\u4EFB\u52A1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F18\u5316\u957F\u4EFB\u52A1",children:"#"}),"\u4F18\u5316\u957F\u4EFB\u52A1"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,s(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Optimize long tasks"]}),`
`,s(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://web.dev/articles/optimize-long-tasks",target:"_blank",rel:"nofollow",children:"https://web.dev/articles/optimize-long-tasks"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:`You've been told "don't block the main thread" and "break up your long tasks", but what does it mean to do those things?`}),`
`,n(e.p,{children:"\u4F60\u88AB\u544A\u77E5\u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u201D\u548C\u201C\u5206\u89E3\u4F60\u7684\u957F\u4EFB\u52A1\u201D\uFF0C\u4F46\u662F\u505A\u8FD9\u4E9B\u4E8B\u60C5\u610F\u5473\u7740\u4EC0\u4E48\u5462\uFF1F"}),`
`,n(e.p,{children:"If you read lots of stuff about web performance, the advice for keeping your JavaScript apps fast tends to involve some of these tidbits:"}),`
`,n(e.p,{children:"\u5982\u679C\u4F60\u8BFB\u8FC7\u5F88\u591A\u5173\u4E8E Web \u6027\u80FD\u7684\u6587\u7AE0\uFF0C\u90A3\u4E48\u4FDD\u6301 JavaScript \u5E94\u7528\u7A0B\u5E8F\u5FEB\u901F\u8FD0\u884C\u7684\u5EFA\u8BAE\u5F80\u5F80\u4F1A\u6D89\u53CA\u4EE5\u4E0B\u4E00\u4E9B\u82B1\u7D6E\uFF1A"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:[`
`,n(e.p,{children:`"Don't block the main thread."`}),`
`,n(e.p,{children:"\u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u3002\u201D"}),`
`]}),`
`,s(e.li,{children:[`
`,n(e.p,{children:'"Break up your long tasks."'}),`
`,n(e.p,{children:"\u201C\u5206\u89E3\u4F60\u7684\u957F\u671F\u4EFB\u52A1\u3002\u201D"}),`
`]}),`
`]}),`
`,s(e.p,{children:["What does any of that mean? Shipping\xA0",n(e.em,{children:"less"}),"\xA0JavaScript is good, but does that automatically equate to snappier user interfaces throughout the page lifecycle? Maybe, but maybe not."]}),`
`,n(e.p,{children:"\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u51CF\u5C11 JavaScript \u7684\u53D1\u5E03\u662F\u4EF6\u597D\u4E8B\uFF0C\u4F46\u8FD9\u662F\u5426\u81EA\u52A8\u7B49\u540C\u4E8E\u5728\u6574\u4E2A\u9875\u9762\u751F\u547D\u5468\u671F\u4E2D\u63D0\u4F9B\u66F4\u5FEB\u6377\u7684\u7528\u6237\u754C\u9762\uFF1F\u4E5F\u8BB8\uFF0C\u4F46\u4E5F\u8BB8\u4E0D\u662F\u3002"}),`
`,n(e.p,{children:"To get your head around why it's important to optimize tasks in JavaScript, you need to understand the role of tasks and how the browser handles them\u2014and that starts with understanding what a task is."}),`
`,n(e.p,{children:"\u8981\u5F04\u6E05\u695A\u4E3A\u4EC0\u4E48\u5728 JavaScript \u4E2D\u4F18\u5316\u4EFB\u52A1\u5F88\u91CD\u8981\uFF0C\u60A8\u9700\u8981\u4E86\u89E3\u4EFB\u52A1\u7684\u89D2\u8272\u4EE5\u53CA\u6D4F\u89C8\u5668\u5982\u4F55\u5904\u7406\u5B83\u4EEC\u2014\u2014\u8FD9\u9996\u5148\u8981\u4E86\u89E3\u4EFB\u52A1\u662F\u4EC0\u4E48\u3002"}),`
`,s(e.h2,{id:"what-is-a-task\u4EC0\u4E48\u662F\u4EFB\u52A1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-a-task\u4EC0\u4E48\u662F\u4EFB\u52A1",children:"#"}),"What is a task?\xA0\u4EC0\u4E48\u662F\u4EFB\u52A1\uFF1F"]}),`
`,s(e.p,{children:["A\xA0",n(e.em,{children:"task"}),"\xA0is any discrete piece of work that the browser does. Tasks involve work such as rendering, parsing HTML and CSS, running the JavaScript code you write, and other things you may not have direct control over. Of all of this, the JavaScript you write and deploy to the web is a major source of tasks."]}),`
`,n(e.p,{children:"\u4EFB\u52A1\u662F\u6D4F\u89C8\u5668\u6267\u884C\u7684\u4EFB\u4F55\u79BB\u6563\u5DE5\u4F5C\u3002\u4EFB\u52A1\u6D89\u53CA\u6E32\u67D3\u3001\u89E3\u6790 HTML \u548C CSS\u3001\u8FD0\u884C\u60A8\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u4EE5\u53CA\u60A8\u53EF\u80FD\u65E0\u6CD5\u76F4\u63A5\u63A7\u5236\u7684\u5176\u4ED6\u5DE5\u4F5C\u3002\u5728\u6240\u6709\u8FD9\u4E9B\u4E2D\uFF0C\u60A8\u7F16\u5199\u5E76\u90E8\u7F72\u5230 Web \u7684 JavaScript \u662F\u4EFB\u52A1\u7684\u4E3B\u8981\u6765\u6E90\u3002"}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193519.png",alt:"20231116193519"}),`
`,s(e.em,{children:["A depiction of a task kicked off by a\xA0",n(e.code,{children:"click"}),"\xA0event handler in the performance profiler in Chrome DevTools."]}),`
(`,s(e.em,{children:["\u5BF9\u7531 Chrome DevTools \u4E2D\u6027\u80FD\u63A2\u67E5\u5668\u4E2D\u7684\xA0",n(e.code,{children:"click"}),"\xA0\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u542F\u52A8\u7684\u4EFB\u52A1\u7684\u63CF\u8FF0\u3002"]}),")"]}),`
`,s(e.p,{children:["Tasks impact performance in a couple of ways. For example, when a browser downloads a JavaScript file during startup, it queues tasks to parse and compile that JavaScript so it can be executed. Later on in the page lifecycle, tasks are kicked off when your JavaScript does work such as driving interactions through event handlers, JavaScript-driven animations, and background activity such as analytics collection. All of this stuff\u2014with the exception of\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"nofollow",children:"web workers"}),"\xA0and similar APIs\u2014happens on the main thread.",n(e.br,{}),`
`,"\u4EFB\u52A1\u4EE5\u591A\u79CD\u65B9\u5F0F\u5F71\u54CD\u6027\u80FD\u3002\u4F8B\u5982\uFF0C\u5F53\u6D4F\u89C8\u5668\u5728\u542F\u52A8\u671F\u95F4\u4E0B\u8F7D JavaScript \u6587\u4EF6\u65F6\uFF0C\u5B83\u4F1A\u5C06\u4EFB\u52A1\u6392\u961F\u4EE5\u89E3\u6790\u548C\u7F16\u8BD1\u8BE5 JavaScript\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u6267\u884C\u5B83\u3002\u5728\u9875\u9762\u751F\u547D\u5468\u671F\u7684\u540E\u671F\uFF0C\u5F53 JavaScript \u6B63\u5E38\u5DE5\u4F5C\u65F6\uFF0C\u4EFB\u52A1\u5C06\u542F\u52A8\uFF0C\u4F8B\u5982\u901A\u8FC7\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u3001JavaScript \u9A71\u52A8\u7684\u52A8\u753B\u548C\u540E\u53F0\u6D3B\u52A8\uFF08\u5982\u5206\u6790\u6536\u96C6\uFF09\u9A71\u52A8\u4EA4\u4E92\u3002\u9664\u4E86 Web Worker \u548C\u7C7B\u4F3C\u7684 API \u4E4B\u5916\uFF0C\u6240\u6709\u8FD9\u4E9B\u4E1C\u897F\u90FD\u53D1\u751F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u3002"]}),`
`,s(e.h2,{id:"what-is-the-main-thread--\u4E3B\u7EBF\u662F\u4EC0\u4E48",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-the-main-thread--\u4E3B\u7EBF\u662F\u4EC0\u4E48",children:"#"}),"What is the main thread?  \u4E3B\u7EBF\u662F\u4EC0\u4E48\uFF1F"]}),`
`,s(e.p,{children:["The\xA0",n(e.em,{children:"main thread"}),"\xA0is where most tasks are run in the browser. It's called the main thread for a reason: it's the one thread where nearly all the JavaScript you write does its work."]}),`
`,n(e.p,{children:"\u4E3B\u7EBF\u7A0B\u662F\u5927\u591A\u6570\u4EFB\u52A1\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u5730\u65B9\u3002\u5B83\u88AB\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\u662F\u6709\u539F\u56E0\u7684\uFF1A\u5B83\u662F\u4F60\u7F16\u5199\u7684\u51E0\u4E4E\u6240\u6709 JavaScript \u90FD\u5B8C\u6210\u5176\u5DE5\u4F5C\u7684\u7EBF\u7A0B\u3002"}),`
`,s(e.p,{children:["The main thread can only process one task at a time. When tasks stretch beyond a certain point\u201450 milliseconds to be exact\u2014they're classified as\xA0",n(e.em,{children:"long tasks"}),". If the user is attempting to interact with the page while a long task runs\u2014or if an important rendering update needs to happen\u2014the browser will be delayed in handling that work. This results in interaction or rendering latency."]}),`
`,n(e.p,{children:"\u4E3B\u7EBF\u7A0B\u4E00\u6B21\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u4EFB\u52A1\u3002\u5F53\u4EFB\u52A1\u8D85\u8FC7\u67D0\u4E2A\u70B9\uFF08\u51C6\u786E\u5730\u8BF4\u662F 50 \u6BEB\u79D2\uFF09\u65F6\uFF0C\u5B83\u4EEC\u88AB\u5F52\u7C7B\u4E3A\u957F\u4EFB\u52A1\u3002\u5982\u679C\u7528\u6237\u5728\u957F\u65F6\u95F4\u4EFB\u52A1\u8FD0\u884C\u65F6\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\uFF0C\u6216\u8005\u9700\u8981\u8FDB\u884C\u91CD\u8981\u7684\u5448\u73B0\u66F4\u65B0\uFF0C\u5219\u6D4F\u89C8\u5668\u5728\u5904\u7406\u8BE5\u5DE5\u4F5C\u65F6\u5C06\u5EF6\u8FDF\u3002\u8FD9\u4F1A\u5BFC\u81F4\u4EA4\u4E92\u6216\u6E32\u67D3\u5EF6\u8FDF\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193905.png",alt:"20231116193905"})}),`
`,n(e.p,{children:n(e.em,{children:"A long task as depicted in Chrome's performance profiler. Long tasks are indicated by a red triangle in the corner of the task, with the blocking portion of the task filled in with a pattern of diagonal red stripes."})}),`
`,n(e.p,{children:n(e.em,{children:"\u8FD9\u662F\u4E00\u9879\u6F2B\u957F\u7684\u4EFB\u52A1\uFF0C\u5982 Chrome \u7684\u6027\u80FD\u5206\u6790\u5668\u4E2D\u6240\u8FF0\u3002\u957F\u4EFB\u52A1\u7531\u4EFB\u52A1\u4E00\u89D2\u7684\u7EA2\u8272\u4E09\u89D2\u5F62\u8868\u793A\uFF0C\u4EFB\u52A1\u7684\u963B\u585E\u90E8\u5206\u7528\u5BF9\u89D2\u7EBF\u7EA2\u8272\u6761\u7EB9\u56FE\u6848\u586B\u5145\u3002"})}),`
`,s(e.p,{children:["You need to\xA0",n(e.em,{children:"break up"}),"\xA0tasks. This means taking a single long task and dividing it into smaller tasks that take less time to run individually."]}),`
`,n(e.p,{children:"\u60A8\u9700\u8981\u5206\u89E3\u4EFB\u52A1\u3002\u8FD9\u610F\u5473\u7740\u5C06\u5355\u4E2A\u957F\u4EFB\u52A1\u5212\u5206\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u5355\u72EC\u8FD0\u884C\u6240\u9700\u7684\u65F6\u95F4\u66F4\u5C11\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193949.png",alt:"20231116193949"})}),`
`,n(e.p,{children:n(e.em,{children:"A visualization of a single long task versus that same task broken up into five shorter tasks."})}),`
`,n(e.p,{children:n(e.em,{children:"\u5355\u4E2A\u957F\u4EFB\u52A1\u4E0E\u540C\u4E00\u4EFB\u52A1\u7684\u53EF\u89C6\u5316\uFF0C\u5206\u89E3\u4E3A\u4E94\u4E2A\u8F83\u77ED\u7684\u4EFB\u52A1\u3002"})}),`
`,n(e.p,{children:"This matters because when tasks are broken up, the browser has more opportunities to respond to higher-priority work\u2014and that includes user interactions."}),`
`,n(e.p,{children:"\u8FD9\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5F53\u4EFB\u52A1\u88AB\u5206\u89E3\u65F6\uFF0C\u6D4F\u89C8\u5668\u6709\u66F4\u591A\u673A\u4F1A\u54CD\u5E94\u66F4\u9AD8\u4F18\u5148\u7EA7\u7684\u5DE5\u4F5C\uFF0C\u5176\u4E2D\u5305\u62EC\u7528\u6237\u4EA4\u4E92\u3002"}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194020.png",alt:"20231116194020"}),`
`,n(e.em,{children:"A visualization of what happens to interactions when tasks are too long and the browser can't respond quickly enough to interactions, versus when longer tasks are broken up into smaller tasks."})]}),`
`,n(e.p,{children:n(e.em,{children:"\u5F53\u4EFB\u52A1\u592A\u957F\u4E14\u6D4F\u89C8\u5668\u65E0\u6CD5\u8DB3\u591F\u5FEB\u5730\u54CD\u5E94\u4EA4\u4E92\u65F6\uFF0C\u4E0E\u5C06\u8F83\u957F\u7684\u4EFB\u52A1\u5206\u89E3\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1\u65F6\uFF0C\u4EA4\u4E92\u4F1A\u53D1\u751F\u4EC0\u4E48\u60C5\u51B5\u7684\u53EF\u89C6\u5316\u3002"})}),`
`,s(e.p,{children:["At the top of the preceding figure, an event handler queued up by a user interaction had to wait for a single long task before it could run, This delays the interaction from taking place. At the bottom, the event handler has a chance to run sooner. Because the event handler had an opportunity to run in between smaller tasks, it runs sooner than if it had to wait for a long task to finish. In the top example, the user might have noticed lag; in the bottom, the interaction might have felt\xA0",n(e.em,{children:"instant"}),"."]}),`
`,n(e.p,{children:"\u5728\u4E0A\u56FE\u7684\u9876\u90E8\uFF0C\u7531\u7528\u6237\u4EA4\u4E92\u6392\u961F\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5FC5\u987B\u7B49\u5F85\u5355\u4E2A\u957F\u4EFB\u52A1\u624D\u80FD\u8FD0\u884C\uFF0C\u8FD9\u4F1A\u5EF6\u8FDF\u4EA4\u4E92\u7684\u53D1\u751F\u3002\u5728\u5E95\u90E8\uFF0C\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u6709\u673A\u4F1A\u66F4\u5FEB\u5730\u8FD0\u884C\u3002\u7531\u4E8E\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u6709\u673A\u4F1A\u5728\u8F83\u5C0F\u7684\u4EFB\u52A1\u4E4B\u95F4\u8FD0\u884C\uFF0C\u56E0\u6B64\u5B83\u6BD4\u5FC5\u987B\u7B49\u5F85\u957F\u65F6\u95F4\u4EFB\u52A1\u5B8C\u6210\u65F6\u8FD0\u884C\u5F97\u66F4\u5FEB\u3002\u5728\u9876\u90E8\u793A\u4F8B\u4E2D\uFF0C\u7528\u6237\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\u5EF6\u8FDF;\u5728\u5E95\u90E8\uFF0C\u4EA4\u4E92\u53EF\u80FD\u611F\u89C9\u662F\u5373\u65F6\u7684\u3002"}),`
`,s(e.p,{children:[`The problem, though, is that the advice of "break up your long tasks" and "don't block the main thread" isn't specific enough unless you already know\xA0`,n(e.em,{children:"how"}),"\xA0to do those things. That's what this guide will explain."]}),`
`,n(e.p,{children:"\u7136\u800C\uFF0C\u95EE\u9898\u5728\u4E8E\uFF0C\u201C\u5206\u89E3\u4F60\u7684\u957F\u4EFB\u52A1\u201D\u548C\u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u201D\u7684\u5EFA\u8BAE\u4E0D\u591F\u5177\u4F53\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u77E5\u9053\u5982\u4F55\u505A\u8FD9\u4E9B\u4E8B\u60C5\u3002\u8FD9\u5C31\u662F\u672C\u6307\u5357\u5C06\u8981\u89E3\u91CA\u7684\u5185\u5BB9\u3002"}),`
`,s(e.h2,{id:"task-management-strategies--\u4EFB\u52A1\u7BA1\u7406\u7B56\u7565",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#task-management-strategies--\u4EFB\u52A1\u7BA1\u7406\u7B56\u7565",children:"#"}),"Task management strategies  \u4EFB\u52A1\u7BA1\u7406\u7B56\u7565"]}),`
`,n(e.p,{children:"A common bit of advice in software architecture is to break up your work into smaller functions. This gives you the benefits of better code readability, and project maintainability. This also makes tests easier to write."}),`
`,n(e.p,{children:"\u8F6F\u4EF6\u67B6\u6784\u4E2D\u4E00\u4E2A\u5E38\u89C1\u7684\u5EFA\u8BAE\u662F\u5C06\u4F60\u7684\u5DE5\u4F5C\u5206\u89E3\u6210\u66F4\u5C0F\u7684\u529F\u80FD\u3002\u8FD9\u4E3A\u60A8\u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u4EE3\u7801\u53EF\u8BFB\u6027\u548C\u9879\u76EE\u53EF\u7EF4\u62A4\u6027\u7684\u597D\u5904\u3002\u8FD9\u4E5F\u4F7F\u6D4B\u8BD5\u66F4\u6613\u4E8E\u7F16\u5199\u3002"}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"validateForm"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"showSpinner"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"saveToDatabase"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"updateUI"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"sendAnalytics"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"})]})]}),`
`,s(e.p,{children:["In this example, there's a function named\xA0",n(e.code,{children:"saveSettings()"}),"\xA0that calls five functions within it to do the work, such as validating a form, showing a spinner, sending data, and so on. Conceptually, this is well architected. If you need to debug one of these functions, you can traverse the project tree to figure out what each function does."]}),`
`,s(e.p,{children:["\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u6709\u4E00\u4E2A\u540D\u4E3A\u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528\u5176\u4E2D\u7684\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u4E94\u4E2A\u51FD\u6570\u6765\u6267\u884C\u5DE5\u4F5C\uFF0C\u4F8B\u5982\u9A8C\u8BC1\u8868\u5355\u3001\u663E\u793A\u5FAE\u8C03\u5668\u3001\u53D1\u9001\u6570\u636E\u7B49\u3002\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u8FD9\u662F\u5F88\u597D\u7684\u67B6\u6784\u3002\u5982\u679C\u9700\u8981\u8C03\u8BD5\u5176\u4E2D\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u904D\u5386\u9879\u76EE\u6811\u4EE5\u627E\u51FA\u6BCF\u4E2A\u51FD\u6570\u7684\u4F5C\u7528\u3002"]}),`
`,s(e.p,{children:["The problem, however, is that JavaScript doesn't run each of these functions as separate tasks because they are being executed within the\xA0",n(e.code,{children:"saveSettings()"}),"\xA0function.\xA0",n(e.strong,{children:"This means that all five functions run as a single task."})]}),`
`,s(e.p,{children:["\u7136\u800C\uFF0C\u95EE\u9898\u5728\u4E8E JavaScript \u4E0D\u4F1A\u5C06\u8FD9\u4E9B\u51FD\u6570\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4F5C\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u8FD0\u884C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u5728\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u51FD\u6570\u4E2D\u6267\u884C\u7684\u3002\u8FD9\u610F\u5473\u7740\u6240\u6709\u4E94\u4E2A\u51FD\u6570\u90FD\u4F5C\u4E3A\u5355\u4E2A\u4EFB\u52A1\u8FD0\u884C\u3002"]}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Key point:"}),"\xA0JavaScript works this way because it uses the\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/JavaScript/EventLoop#run-to-completion",target:"_blank",rel:"nofollow",children:"run-to-completion model"}),"\xA0of task execution. This means that each task will run until it finishes, regardless of how long it blocks the main thread."]}),n(e.p,{children:"\u5173\u952E\u70B9\uFF1AJavaScript \u4E4B\u6240\u4EE5\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5DE5\u4F5C\uFF0C\u662F\u56E0\u4E3A\u5B83\u4F7F\u7528\u4EFB\u52A1\u6267\u884C\u7684\u8FD0\u884C\u5230\u5B8C\u6210\u6A21\u578B\u3002\u8FD9\u610F\u5473\u7740\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5C06\u8FD0\u884C\u76F4\u5230\u5B8C\u6210\uFF0C\u65E0\u8BBA\u5B83\u963B\u585E\u4E3B\u7EBF\u7A0B\u591A\u957F\u65F6\u95F4\u3002"})]})]}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194228.png",alt:"20231116194228"}),`
`,s(e.em,{children:["A single function\xA0",n(e.code,{children:"saveSettings()"}),"\xA0that calls five functions. The work is run as part of one long monolithic task."]})]}),`
`,n(e.p,{children:s(e.em,{children:["\u8C03\u7528\u4E94\u4E2A\u51FD\u6570\u7684\u5355\u4E2A\u51FD\u6570\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u3002\u8BE5\u5DE5\u4F5C\u5C06\u4F5C\u4E3A\u4E00\u9879\u957F\u671F\u6574\u4F53\u4EFB\u52A1\u7684\u4E00\u90E8\u5206\u8FD0\u884C\u3002"]})}),`
`,n(e.p,{children:"In the best case scenario, even just one of those functions can contribute 50 milliseconds or more to the total length of the task. In the worst case, more of those tasks can run quite a bit longer\u2014especially on resource-constrained devices. What follows is a set of strategies you can use to break up and prioritize tasks."}),`
`,n(e.p,{children:"\u5728\u6700\u597D\u7684\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u53EA\u6709\u4E00\u4E2A\u51FD\u6570\u4E5F\u4F1A\u4E3A\u4EFB\u52A1\u7684\u603B\u957F\u5EA6\u8D21\u732E 50 \u6BEB\u79D2\u6216\u66F4\u591A\u3002\u5728\u6700\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u4E2D\u7684\u66F4\u591A\u4EFB\u52A1\u53EF\u80FD\u4F1A\u8FD0\u884C\u66F4\u957F\u7684\u65F6\u95F4\uFF0C\u5C24\u5176\u662F\u5728\u8D44\u6E90\u53D7\u9650\u7684\u8BBE\u5907\u4E0A\u3002\u4EE5\u4E0B\u662F\u4E00\u7EC4\u53EF\u7528\u4E8E\u5206\u89E3\u4EFB\u52A1\u5E76\u786E\u5B9A\u4EFB\u52A1\u4F18\u5148\u7EA7\u7684\u7B56\u7565\u3002"}),`
`,s(e.h3,{id:"manually-defer-code-execution--\u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-defer-code-execution--\u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C",children:"#"}),"Manually defer code execution  \u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C"]}),`
`,s(e.p,{children:["One method developers have used to break up tasks into smaller ones involves\xA0",n(e.code,{children:"setTimeout()"}),". With this technique, you pass the function to\xA0",n(e.code,{children:"setTimeout()"}),". This postpones execution of the callback into a separate task, even if you specify a timeout of\xA0",n(e.code,{children:"0"}),"."]}),`
`,s(e.p,{children:["\u5F00\u53D1\u4EBA\u5458\u7528\u6765\u5C06\u4EFB\u52A1\u5206\u89E3\u4E3A\u66F4\u5C0F\u4EFB\u52A1\u7684\u4E00\u79CD\u65B9\u6CD5\u5305\u62EC\xA0",n(e.code,{children:"setTimeout()"}),"\xA0.\u4F7F\u7528\u6B64\u6280\u672F\uFF0C\u53EF\u4EE5\u5C06\u51FD\u6570\u4F20\u9012\u7ED9\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\u3002\u8FD9\u4F1A\u5C06\u56DE\u8C03\u7684\u6267\u884C\u63A8\u8FDF\u5230\u5355\u72EC\u7684\u4EFB\u52A1\u4E2D\uFF0C\u5373\u4F7F\u60A8\u6307\u5B9A\u4E86\u8D85\u65F6\xA0",n(e.code,{children:"0"}),"\xA0\u3002"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Do critical work that is user-visible:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"validateForm"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"showSpinner"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"updateUI"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Defer work that isn't user-visible to a separate task:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"setTimeout"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"saveToDatabase"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"sendAnalytics"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"})]})]}),`
`,n(e.p,{children:"This works well if you have a series of functions that need to run sequentially, but your code may not always be organized this way. For example, you could have a large amount of data that needs to be processed in a loop, and that task could take a very long time if you have millions of items."}),`
`,n(e.p,{children:"\u5982\u679C\u60A8\u6709\u4E00\u7CFB\u5217\u9700\u8981\u6309\u987A\u5E8F\u8FD0\u884C\u7684\u51FD\u6570\uFF0C\u8FD9\u5F88\u6709\u6548\uFF0C\u4F46\u60A8\u7684\u4EE3\u7801\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u7EC4\u7EC7\u3002\u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u6709\u5927\u91CF\u6570\u636E\u9700\u8981\u5728\u5FAA\u73AF\u4E2D\u5904\u7406\uFF0C\u5982\u679C\u60A8\u6709\u6570\u767E\u4E07\u4E2A\u9879\u76EE\uFF0C\u5219\u8BE5\u4EFB\u52A1\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\u3002"}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"processData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"for"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"item"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"of"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"largeDataArray"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Process the individual item here."})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"})]})]}),`
`,s(e.p,{children:["Using\xA0",n(e.code,{children:"setTimeout()"}),"\xA0here is problematic, because the ergonomics of it make it difficult to implement, and the entire array of data could take a very long time to process, even if each item can be processed very quickly. It all adds up, and\xA0",n(e.code,{children:"setTimeout()"}),"\xA0isn't the right tool for the job\u2014at least not when used this way."]}),`
`,s(e.p,{children:["\u5728\u8FD9\u91CC\u4F7F\u7528\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\u662F\u6709\u95EE\u9898\u7684\uFF0C\u56E0\u4E3A\u5B83\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\u4F7F\u5176\u96BE\u4EE5\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6574\u4E2A\u6570\u636E\u6570\u7EC4\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\u624D\u80FD\u5904\u7406\uFF0C\u5373\u4F7F\u6BCF\u4E2A\u9879\u76EE\u90FD\u53EF\u4EE5\u975E\u5E38\u5FEB\u901F\u5730\u5904\u7406\u3002\u8FD9\u4E00\u5207\u52A0\u8D77\u6765\uFF0C\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\u5E76\u4E0D\u662F\u8FD9\u9879\u5DE5\u4F5C\u7684\u6B63\u786E\u5DE5\u5177\u2014\u2014\u81F3\u5C11\u5728\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u7528\u65F6\u4E0D\u662F\u3002"]}),`
`,s(e.p,{children:["In addition to\xA0",n(e.code,{children:"setTimeout()"}),", there are a few other APIs that allow you to defer code execution to a subsequent task. One\xA0",s(e.a,{href:"https://dbaron.org/log/20100309-faster-timeouts",target:"_blank",rel:"nofollow",children:["involves using\xA0",n(e.code,{children:"postMessage()"}),"\xA0for faster timeouts"]}),". You can also break up work using\xA0",n(e.code,{children:"requestIdleCallback()"}),"\u2014but beware!\u2014",n(e.code,{children:"requestIdleCallback()"}),"\xA0schedules tasks at the lowest possible priority, and only during browser idle time. When the main thread is congested, tasks scheduled with\xA0",n(e.code,{children:"requestIdleCallback()"}),"\xA0may never get to run."]}),`
`,s(e.p,{children:["\u9664\u4E86\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6 API \u5141\u8BB8\u60A8\u5C06\u4EE3\u7801\u6267\u884C\u63A8\u8FDF\u5230\u540E\u7EED\u4EFB\u52A1\u3002\u4E00\u79CD\u662F\u7528\u4E8E\xA0",n(e.code,{children:"postMessage()"}),"\xA0\u66F4\u5FEB\u7684\u8D85\u65F6\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\uFF08\u4F46\u8981\u6CE8\u610F\uFF09\xA0",n(e.code,{children:"requestIdleCallback()"}),"\xA0\u4EE5\xA0",n(e.code,{children:"requestIdleCallback()"}),"\xA0\u5C3D\u53EF\u80FD\u4F4E\u7684\u4F18\u5148\u7EA7\u5B89\u6392\u4EFB\u52A1\uFF0C\u5E76\u4E14\u4EC5\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u95F4\u5B89\u6392\u4EFB\u52A1\u6765\u5206\u89E3\u5DE5\u4F5C\u3002\u5F53\u4E3B\u7EBF\u7A0B\u62E5\u585E\u65F6\uFF0C\u8BA1\u5212\u7684\u4EFB\u52A1\xA0",n(e.code,{children:"requestIdleCallback()"}),"\xA0\u53EF\u80FD\u6C38\u8FDC\u65E0\u6CD5\u8FD0\u884C\u3002"]}),`
`,s(e.h3,{id:"useasyncawaitto-create-yield-points--\u4F7F\u7528--\u521B\u5EFA\u5C48\u670D\u70B9",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#useasyncawaitto-create-yield-points--\u4F7F\u7528--\u521B\u5EFA\u5C48\u670D\u70B9",children:"#"}),"Use\xA0",n(e.code,{children:"async"}),"/",n(e.code,{children:"await"}),"\xA0to create yield points  (\u4F7F\u7528 / \u521B\u5EFA\u5C48\u670D\u70B9)"]}),`
`,n(e.p,{children:`A phrase you'll see throughout the rest of this guide is "yield to the main thread"\u2014but what does that mean? Why should you do it? When should you do it?`}),`
`,n(e.p,{children:"\u5728\u672C\u6307\u5357\u7684\u5176\u4F59\u90E8\u5206\uFF0C\u60A8\u5C06\u770B\u5230\u4E00\u53E5\u8BDD\u662F\u201C\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u201D\u2014\u2014\u4F46\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\uFF1F\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u505A\uFF1F"}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Key point:"}),"\xA0When you\xA0",n(e.em,{children:"yield"}),"\xA0to the main thread, you're giving it an opportunity to handle more important tasks than the ones that are currently queued up. Ideally, you should yield to the main thread whenever you have some crucial user-facing work that needs to execute sooner than if you didn't yield.\xA0",n(e.strong,{children:"Yielding to the main thread creates opportunities for critical work to run sooner."})]}),n(e.p,{children:"\u5173\u952E\u70B9\uFF1A\u5F53\u4F60\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u65F6\uFF0C\u4F60\u5C31\u7ED9\u4E86\u5B83\u4E00\u4E2A\u673A\u4F1A\u6765\u5904\u7406\u6BD4\u5F53\u524D\u6392\u961F\u7684\u4EFB\u52A1\u66F4\u91CD\u8981\u7684\u4EFB\u52A1\u3002\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u5F53\u60A8\u6709\u4E00\u4E9B\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u5DE5\u4F5C\u9700\u8981\u6BD4\u4E0D\u8BA9\u6B65\u65F6\u66F4\u5FEB\u5730\u6267\u884C\u65F6\uFF0C\u60A8\u90FD\u5E94\u8BE5\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u4E3A\u5173\u952E\u5DE5\u4F5C\u521B\u9020\u4E86\u66F4\u5FEB\u8FD0\u884C\u7684\u673A\u4F1A\u3002"})]})]}),`
`,s(e.p,{children:["When tasks are broken up, other tasks can be prioritized better by the browser's internal prioritization scheme. One way to yield to the main thread involves using a combination of a\xA0",n(e.code,{children:"Promise"}),"\xA0that resolves with a call to\xA0",n(e.code,{children:"setTimeout()"}),":"]}),`
`,s(e.p,{children:["\u5F53\u4EFB\u52A1\u88AB\u5206\u89E3\u65F6\uFF0C\u6D4F\u89C8\u5668\u7684\u5185\u90E8\u4F18\u5148\u7EA7\u65B9\u6848\u53EF\u4EE5\u66F4\u597D\u5730\u786E\u5B9A\u5176\u4ED6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u3002\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u7684\u4E00\u79CD\u65B9\u6CD5\u6D89\u53CA\u4F7F\u7528 a\xA0",n(e.code,{children:"Promise"}),"\xA0\u7684\u7EC4\u5408\uFF0C\u8BE5\u7EC4\u5408\u901A\u8FC7\u8C03\u7528 to \u89E3\u6790\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\uFF1A"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"yieldToMain"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"Promise"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"resolve"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"setTimeout"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"resolve"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"})]})]}),`
`,s(e.div,{className:"island-directive warning",children:[n(e.p,{className:"island-directive-title",children:"WARNING"}),s(e.div,{className:"island-directive-content",children:[n(e.p,{children:"Caution: While this code example returns a Promise that resolves after a call to setTimeout(), it's not the Promise that is responsible for running the rest of the code in a new task, it's the setTimeout() call. Promise callbacks run as microtasks rather than tasks, and therefore don't yield to the main thread."}),n(e.p,{children:"\u6CE8\u610F\uFF1A\u867D\u7136\u6B64\u4EE3\u7801\u793A\u4F8B\u8FD4\u56DE\u5728\u8C03\u7528setTimeout\uFF08\uFF09\u540E\u89E3\u6790\u7684Promise\uFF0C\u4F46\u4E0D\u662FPromise\u8D1F\u8D23\u5728\u65B0\u4EFB\u52A1\u4E2D\u8FD0\u884C\u5176\u4F59\u4EE3\u7801\uFF0C\u800C\u662FsetTimeout\uFF08\uFF09\u8C03\u7528\u3002Promise\u56DE\u8C03\u4F5C\u4E3A\u5FAE\u4EFB\u52A1\u800C\u4E0D\u662F\u4EFB\u52A1\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002"})]})]}),`
`,s(e.p,{children:["In the\xA0",n(e.code,{children:"saveSettings()"}),"\xA0function, you can yield to the main thread after each bit of work if you\xA0",n(e.code,{children:"await"}),"\xA0the\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0function after each function call:"]}),`
`,s(e.p,{children:["\u5728\u51FD\u6570\u4E2D\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\uFF0C\u5982\u679C\xA0",n(e.code,{children:"await"}),"\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0\u51FD\u6570\u5728\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u53EF\u4EE5\u5728\u6BCF\u6B21\u4F4D\u5DE5\u4F5C\u540E\u8BA9\u6B65\u7ED9\u4E3B\u7EBF\u7A0B\uFF1A"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Create an array of functions to run:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"validateForm"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"showSpinner"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"saveToDatabase"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"updateUI"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"sendAnalytics"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"})}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Loop over the tasks:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"length "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Shift the first task off the tasks array:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"shift"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Run the task:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Yield to the main thread:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"yieldToMain"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"})]})]}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Key point:"}),"\xA0You don't have to yield after\xA0",n(e.em,{children:"every"}),"\xA0function call. For example, if you run two functions that result in critical updates to the user interface, you probably don't want to yield in between them. If you can, let that work run first,\xA0",n(e.em,{children:"then"}),"\xA0consider yielding in between functions that do less critical or background work that the user doesn't see."]}),n(e.p,{children:"\u60A8\u4E0D\u5FC5\u5728_\u6BCF\u4E2A_\u51FD\u6570\u8C03\u7528\u540E\u5C48\u670D\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u8FD0\u884C\u4E24\u4E2A\u5BFC\u81F4\u7528\u6237\u754C\u9762\u53D1\u751F\u5173\u952E\u66F4\u65B0\u7684\u51FD\u6570\uFF0C\u60A8\u53EF\u80FD\u4E0D\u5E0C\u671B\u5728\u5B83\u4EEC\u4E4B\u95F4\u505A\u51FA\u8BA9\u6B65\u3002\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u8BF7\u5148\u8FD0\u884C\u8BE5\u5DE5\u4F5C\uFF0C\u7136\u540E\u8003\u8651\u5728\u6267\u884C\u7528\u6237\u770B\u4E0D\u5230\u7684\u4E0D\u592A\u91CD\u8981\u6216\u540E\u53F0\u5DE5\u4F5C\u7684\u51FD\u6570\u4E4B\u95F4\u8FDB\u884C\u8BA9\u6B65\u3002"})]})]}),`
`,n(e.p,{children:"The result is that the once-monolithic task is now broken up into separate tasks."}),`
`,n(e.p,{children:"\u7ED3\u679C\u662F\uFF0C\u66FE\u7ECF\u5355\u4E00\u7684\u4EFB\u52A1\u73B0\u5728\u88AB\u5206\u89E3\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u3002"}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195416.png",alt:"20231116195416"}),`
`,s(e.em,{children:["The\xA0",n(e.code,{children:"saveSettings()"}),"\xA0function now executes its child functions as separate tasks."]})]}),`
`,n(e.p,{children:s(e.em,{children:["\u8BE5\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u51FD\u6570\u73B0\u5728\u5C06\u5176\u5B50\u51FD\u6570\u4F5C\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u6267\u884C\u3002"]})}),`
`,s(e.p,{children:["The benefit of using a promise-based approach to yielding rather than manual use of\xA0",n(e.code,{children:"setTimeout()"}),"\xA0is better ergonomics. Yield points become declarative, and therefore easier to write, read, and understand."]}),`
`,s(e.p,{children:["\u4F7F\u7528\u57FA\u4E8E\u627F\u8BFA\u7684\u5C48\u670D\u65B9\u6CD5\u800C\u4E0D\u662F\u624B\u52A8\u4F7F\u7528\u7684\u597D\u5904\xA0",n(e.code,{children:"setTimeout()"}),"\xA0\u662F\u66F4\u597D\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\u3002\u5C48\u670D\u70B9\u53D8\u5F97\u5177\u6709\u58F0\u660E\u6027\uFF0C\u56E0\u6B64\u66F4\u6613\u4E8E\u7F16\u5199\u3001\u9605\u8BFB\u548C\u7406\u89E3\u3002"]}),`
`,s(e.h3,{id:"yield-only-when-necessary--\u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#yield-only-when-necessary--\u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D",children:"#"}),"Yield only when necessary  \u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D"]}),`
`,s(e.p,{children:["What if you have a bunch of tasks, but you only want to yield if the user attempts to interact with the page? That's the kind of thing that\xA0",n(e.a,{href:"https://developer.chrome.com/articles/isinputpending/",target:"_blank",rel:"nofollow",children:n(e.code,{children:"isInputPending()"})}),"\xA0was made for."]}),`
`,s(e.p,{children:["\u5982\u679C\u4F60\u6709\u4E00\u5806\u4EFB\u52A1\uFF0C\u4F46\u4F60\u53EA\u60F3\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u8BA9\u6B65\uFF0C\u8BE5\u600E\u4E48\u529E\uFF1F\u8FD9\u5C31\u662F\u4E3A\u4E4B\u800C\u751F\u7684\u90A3\u79CD\u4E1C\u897F\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u3002"]}),`
`,s(e.p,{children:[n(e.code,{children:"isInputPending()"}),"\xA0is a function you can run at any time to determine if the user is attempting to interact with a page element: a call to\xA0",n(e.code,{children:"isInputPending()"}),"\xA0will return\xA0",n(e.code,{children:"true"}),". It returns\xA0",n(e.code,{children:"false"}),"\xA0otherwise."]}),`
`,s(e.p,{children:[n(e.code,{children:"isInputPending()"}),"\xA0\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u60A8\u53EF\u4EE5\u968F\u65F6\u8FD0\u884C\u4EE5\u786E\u5B9A\u7528\u6237\u662F\u5426\u6B63\u5728\u5C1D\u8BD5\u4E0E\u9875\u9762\u5143\u7D20\u8FDB\u884C\u4EA4\u4E92\uFF1A\u5BF9\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u7684\u8C03\u7528\u5C06\u8FD4\u56DE\xA0",n(e.code,{children:"true"}),"\xA0\u3002\u5426\u5219\u8FD4\u56DE\xA0",n(e.code,{children:"false"}),"\xA0\u3002"]}),`
`,s(e.p,{children:["Say you have a queue of tasks you need to run, but you don't want to get in the way of any inputs. This code\u2014which uses both\xA0",n(e.code,{children:"isInputPending()"}),"\xA0and our custom\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0function\u2014ensures that an input won't be delayed while the user is trying to interact with the page:"]}),`
`,s(e.p,{children:["\u5047\u8BBE\u60A8\u6709\u4E00\u4E2A\u9700\u8981\u8FD0\u884C\u7684\u4EFB\u52A1\u961F\u5217\uFF0C\u4F46\u60A8\u4E0D\u60F3\u59A8\u788D\u4EFB\u4F55\u8F93\u5165\u3002\u6B64\u4EE3\u7801\uFF08\u540C\u65F6\u4F7F\u7528\u4E24\u8005\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u548C\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0\u51FD\u6570\uFF09\u53EF\u786E\u4FDD\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u8F93\u5165\u4E0D\u4F1A\u5EF6\u8FDF\uFF1A"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// A task queue of functions"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"validateForm"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"showSpinner"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"saveToDatabase"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"updateUI"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"sendAnalytics"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  "})}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"length "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Yield to a pending user input:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"navigator"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduling"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"isInputPending"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()) "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// There's a pending user input. Yield here:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"yieldToMain"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"else"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Shift the task out of the queue:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"shift"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Run the task:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"}),n(e.span,{className:"line-number",children:"24"})]})]}),`
`,s(e.p,{children:["While\xA0",n(e.code,{children:"saveSettings()"}),"\xA0runs, it will loop over the tasks in the queue. If\xA0",n(e.code,{children:"isInputPending()"}),"\xA0returns\xA0",n(e.code,{children:"true"}),"\xA0during the loop,\xA0",n(e.code,{children:"saveSettings()"}),"\xA0will call\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0so the user input can be handled. Otherwise, it will shift the next task off the front of the queue and run it continuously. It will do this until no more tasks are left."]}),`
`,s(e.p,{children:["\u5728\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u8FD0\u884C\u65F6\uFF0C\u5B83\u5C06\u904D\u5386\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002\u5982\u679C\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u5728\u5FAA\u73AF\u671F\u95F4\u8FD4\u56DE\xA0",n(e.code,{children:"true"}),"\xA0\uFF0C\xA0",n(e.code,{children:"saveSettings()"}),"\xA0\u5C06\u8C03\u7528\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0\u4EE5\u4FBF\u53EF\u4EE5\u5904\u7406\u7528\u6237\u8F93\u5165\u3002\u5426\u5219\uFF0C\u5B83\u4F1A\u5C06\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u4ECE\u961F\u5217\u7684\u524D\u9762\u79FB\u5F00\u5E76\u8FDE\u7EED\u8FD0\u884C\u3002\u5B83\u5C06\u8FD9\u6837\u505A\uFF0C\u76F4\u5230\u6CA1\u6709\u66F4\u591A\u4EFB\u52A1\u7559\u4E0B\u3002"]}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195750.png",alt:"20231116195750"}),`
`,s(e.em,{children:[n(e.code,{children:"saveSettings()"}),"\xA0runs a task queue for five tasks, but the user has clicked to open a menu while the second work item was running.\xA0",n(e.code,{children:"isInputPending()"}),"\xA0yields to the main thread to handle the interaction, and resume running the rest of the tasks."]})]}),`
`,n(e.p,{children:s(e.em,{children:[n(e.code,{children:"saveSettings()"}),"\xA0\u4E3A\u4E94\u4E2A\u4EFB\u52A1\u8FD0\u884C\u4EFB\u52A1\u961F\u5217\uFF0C\u4F46\u7528\u6237\u5728\u7B2C\u4E8C\u4E2A\u5DE5\u4F5C\u9879\u8FD0\u884C\u65F6\u5355\u51FB\u4EE5\u6253\u5F00\u83DC\u5355\u3002\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u6765\u5904\u7406\u4EA4\u4E92\uFF0C\u5E76\u7EE7\u7EED\u8FD0\u884C\u5176\u4F59\u4EFB\u52A1\u3002"]})}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0",n(e.code,{children:"isInputPending()"}),"\xA0may not always return\xA0",n(e.code,{children:"true"}),"\xA0immediately after user input. This is because it takes time for the operating system to tell the browser that the interaction occurred. This means that other code may have already started executing (as you can see with the\xA0",n(e.code,{children:"saveToDatabase()"}),"\xA0function in the above screenshot). Even if you use\xA0",n(e.code,{children:"isInputPending()"}),"\xA0it's still crucial that you limit the amount of work you do in each function."]}),s(e.p,{children:["\u6CE8\u610F\uFF1A\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u7528\u6237\u8F93\u5165\u540E\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u7ACB\u5373\u8FD4\u56DE\xA0",n(e.code,{children:"true"}),"\xA0\u3002\u8FD9\u662F\u56E0\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u65F6\u95F4\u6765\u544A\u77E5\u6D4F\u89C8\u5668\u53D1\u751F\u4E86\u4EA4\u4E92\u3002\u8FD9\u610F\u5473\u7740\u5176\u4ED6\u4EE3\u7801\u53EF\u80FD\u5DF2\u7ECF\u5F00\u59CB\u6267\u884C\uFF08\u5982\u4E0A\u9762\u5C4F\u5E55\u622A\u56FE\u4E2D\u7684\xA0",n(e.code,{children:"saveToDatabase()"}),"\xA0\u51FD\u6570\u6240\u793A\uFF09\u3002\u5373\u4F7F\u4F60\u4F7F\u7528\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\uFF0C\u9650\u5236\u4F60\u5728\u6BCF\u4E2A\u529F\u80FD\u4E2D\u6240\u505A\u7684\u5DE5\u4F5C\u91CF\u4ECD\u7136\u5F88\u91CD\u8981\u3002"]})]})]}),`
`,s(e.p,{children:["Using\xA0",n(e.code,{children:"isInputPending()"}),"\xA0in combination with a yielding mechanism is a great way to get the browser to stop whatever tasks it's processing so that it can respond to critical user-facing interactions. That can help improve your page's ability to respond to the user in many situations when a lot of tasks are in flight."]}),`
`,s(e.p,{children:["\u4E0E\u751F\u6210\u673A\u5236\u7ED3\u5408\u4F7F\u7528\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u662F\u8BA9\u6D4F\u89C8\u5668\u505C\u6B62\u5B83\u6B63\u5728\u5904\u7406\u7684\u4EFB\u4F55\u4EFB\u52A1\u7684\u597D\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u54CD\u5E94\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u4EA4\u4E92\u3002\u8FD9\u6709\u52A9\u4E8E\u63D0\u9AD8\u9875\u9762\u5728\u5927\u91CF\u4EFB\u52A1\u6B63\u5728\u4F20\u8F93\u7684\u60C5\u51B5\u4E0B\u54CD\u5E94\u7528\u6237\u7684\u80FD\u529B\u3002"]}),`
`,s(e.p,{children:["Another way to use\xA0",n(e.code,{children:"isInputPending()"}),"\u2014particularly if you're concerned about providing a fallback for browsers that don't support it\u2014is to use a time-based approach in conjunction with the\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"nofollow",children:"optional chaining operator"}),":"]}),`
`,s(e.p,{children:["\u53E6\u4E00\u79CD\u4F7F\u7528\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u65B9\u5F0F\uFF08\u7279\u522B\u662F\u5982\u679C\u60A8\u62C5\u5FC3\u4E3A\u4E0D\u652F\u6301\u5B83\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u56DE\u9000\uFF09\u662F\u5C06\u57FA\u4E8E\u65F6\u95F4\u7684\u65B9\u6CD5\u4E0E\u53EF\u9009\u7684\u94FE\u63A5\u8FD0\u7B97\u7B26\u7ED3\u5408\u4F7F\u7528\uFF1A"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// A task queue of functions"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"validateForm"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"showSpinner"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"saveToDatabase"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"updateUI"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"sendAnalytics"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  "})}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"let"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"deadline"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"() "}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"50"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"length "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Optional chaining operator used here helps to avoid"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// errors in browsers that don't support `isInputPending`:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"navigator"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduling"}),n(e.span,{style:{color:"#ECEFF4"},children:"?."}),n(e.span,{style:{color:"#88C0D0"},children:"isInputPending"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"() "}),n(e.span,{style:{color:"#81A1C1"},children:"||"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"() "}),n(e.span,{style:{color:"#81A1C1"},children:">="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"deadline"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// There's a pending user input, or the"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// deadline has been reached. Yield here:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"yieldToMain"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Extend the deadline:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#D8DEE9"},children:"deadline"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"now"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"() "}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"50"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Stop the execution of the current loop and"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// move onto the next iteration:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"continue;"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Shift the task out of the queue:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"shift"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Run the task:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"}),n(e.span,{className:"line-number",children:"24"}),n(e.span,{className:"line-number",children:"25"}),n(e.span,{className:"line-number",children:"26"}),n(e.span,{className:"line-number",children:"27"}),n(e.span,{className:"line-number",children:"28"}),n(e.span,{className:"line-number",children:"29"}),n(e.span,{className:"line-number",children:"30"}),n(e.span,{className:"line-number",children:"31"}),n(e.span,{className:"line-number",children:"32"}),n(e.span,{className:"line-number",children:"33"}),n(e.span,{className:"line-number",children:"34"}),n(e.span,{className:"line-number",children:"35"})]})]}),`
`,s(e.p,{children:["With this approach, you get a fallback for browsers that don't support\xA0",n(e.code,{children:"isInputPending()"}),"\xA0by using a time-based approach that uses (and adjusts) a deadline so that work will be broken up where necessary, whether by yielding to user input, or by a certain point in time."]}),`
`,s(e.p,{children:["\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u57FA\u4E8E\u65F6\u95F4\u7684\u65B9\u6CD5\u4E3A\u4E0D\u652F\u6301\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u56DE\u9000\uFF0C\u8BE5\u65B9\u6CD5\u4F7F\u7528\uFF08\u5E76\u8C03\u6574\uFF09\u622A\u6B62\u65F6\u95F4\uFF0C\u4EE5\u4FBF\u5728\u5FC5\u8981\u65F6\u5206\u89E3\u5DE5\u4F5C\uFF0C\u65E0\u8BBA\u662F\u901A\u8FC7\u5C48\u670D\u4E8E\u7528\u6237\u8F93\u5165\uFF0C\u8FD8\u662F\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u3002"]}),`
`,s(e.h2,{id:"gaps-in-current-apis",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gaps-in-current-apis",children:"#"}),"Gaps in current APIs"]}),`
`,s(e.p,{children:["The APIs mentioned so far can help you break up tasks, but they have a significant downside: when you yield to the main thread by deferring code to run in a subsequent task, that code gets added to the very end of the task queue.",n(e.br,{}),`
`,"\u5230\u76EE\u524D\u4E3A\u6B62\u63D0\u5230\u7684 API \u53EF\u4EE5\u5E2E\u52A9\u60A8\u5206\u89E3\u4EFB\u52A1\uFF0C\u4F46\u5B83\u4EEC\u6709\u4E00\u4E2A\u660E\u663E\u7684\u7F3A\u70B9\uFF1A\u5F53\u60A8\u901A\u8FC7\u5C06\u4EE3\u7801\u5EF6\u8FDF\u5230\u540E\u7EED\u4EFB\u52A1\u4E2D\u8FD0\u884C\u65F6\u6765\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u65F6\uFF0C\u8BE5\u4EE3\u7801\u4F1A\u88AB\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u7684\u6700\u672B\u5C3E\u3002"]}),`
`,s(e.p,{children:["If you control all the code on your page, it's possible to create your own scheduler with the ability to prioritize tasks, but third-party scripts won't use your scheduler. In effect, you're not really able to\xA0",n(e.em,{children:"prioritize"}),"\xA0work in such environments. You can only chunk it up, or explicitly yield to user interactions.",n(e.br,{}),`
`,"\u5982\u679C\u60A8\u63A7\u5236\u9875\u9762\u4E0A\u7684\u6240\u6709\u4EE3\u7801\uFF0C\u5219\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u8BA1\u5212\u7A0B\u5E8F\uFF0C\u5E76\u80FD\u591F\u786E\u5B9A\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u4F46\u7B2C\u4E09\u65B9\u811A\u672C\u4E0D\u4F1A\u4F7F\u7528\u60A8\u7684\u8BA1\u5212\u7A0B\u5E8F\u3002\u5B9E\u9645\u4E0A\uFF0C\u5728\u8FD9\u6837\u7684\u73AF\u5883\u4E2D\uFF0C\u60A8\u5B9E\u9645\u4E0A\u65E0\u6CD5\u786E\u5B9A\u5DE5\u4F5C\u7684\u4F18\u5148\u7EA7\u3002\u60A8\u53EA\u80FD\u5C06\u5176\u5206\u5757\uFF0C\u6216\u663E\u5F0F\u5730\u5C48\u670D\u4E8E\u7528\u6237\u4EA4\u4E92\u3002"]}),`
`,s(e.p,{children:["Fortunately, there is a dedicated scheduler API that is currently in development that addresses these problems.",n(e.br,{}),`
`,"\u5E78\u8FD0\u7684\u662F\uFF0C\u76EE\u524D\u6B63\u5728\u5F00\u53D1\u4E00\u4E2A\u4E13\u7528\u7684\u8C03\u5EA6\u7A0B\u5E8F API \u6765\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002"]}),`
`,s(e.h3,{id:"a-dedicated-scheduler-api--\u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F-api",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#a-dedicated-scheduler-api--\u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F-api",children:"#"}),"A dedicated scheduler API  \u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F API"]}),`
`,s(e.p,{children:["The scheduler API currently offers the\xA0",n(e.code,{children:"postTask()"}),"\xA0function which, at the time of writing, is available in Chromium browsers, and in Firefox behind a flag.\xA0",n(e.code,{children:"postTask()"}),"\xA0allows for finer-grained scheduling of tasks, and is one way to help the browser prioritize work so that low priority tasks yield to the main thread.\xA0",n(e.code,{children:"postTask()"}),"\xA0uses promises, and accepts a\xA0",n(e.code,{children:"priority"}),"\xA0setting."]}),`
`,s(e.p,{children:["\u8C03\u5EA6\u7A0B\u5E8F API \u76EE\u524D\u63D0\u4F9B\u4E86\u8BE5\xA0",n(e.code,{children:"postTask()"}),"\xA0\u529F\u80FD\uFF0C\u5728\u64B0\u5199\u672C\u6587\u65F6\uFF0C\u8BE5\u529F\u80FD\u5728 Chromium \u6D4F\u89C8\u5668\u548C Firefox \u4E2D\u53EF\u7528\u3002\xA0",n(e.code,{children:"postTask()"}),"\xA0\u5141\u8BB8\u5BF9\u4EFB\u52A1\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u8C03\u5EA6\uFF0C\u5E76\u4E14\u662F\u5E2E\u52A9\u6D4F\u89C8\u5668\u786E\u5B9A\u5DE5\u4F5C\u4F18\u5148\u7EA7\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u3002\xA0",n(e.code,{children:"postTask()"}),"\xA0\u4F7F\u7528 promises\uFF0C\u5E76\u63A5\u53D7\u8BBE\u7F6E\xA0",n(e.code,{children:"priority"}),"\xA0\u3002"]}),`
`,s(e.p,{children:["The\xA0",n(e.code,{children:"postTask()"}),"\xA0API has three priorities you can use:"]}),`
`,s(e.p,{children:["\u8BE5\xA0",n(e.code,{children:"postTask()"}),"\xA0API \u6709\u4E09\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684\u4F18\u5148\u7EA7\uFF1A"]}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:[`
`,s(e.p,{children:[n(e.code,{children:"'background'"}),"\xA0for the lowest priority tasks."]}),`
`,s(e.p,{children:[n(e.code,{children:"'background'"}),"\xA0\u5BF9\u4E8E\u4F18\u5148\u7EA7\u6700\u4F4E\u7684\u4EFB\u52A1\u3002"]}),`
`]}),`
`,s(e.li,{children:[`
`,s(e.p,{children:[n(e.code,{children:"'user-visible'"}),"\xA0for medium priority tasks. This is the default if no\xA0",n(e.code,{children:"priority"}),"\xA0is set."]}),`
`,s(e.p,{children:[n(e.code,{children:"'user-visible'"}),"\xA0\u5BF9\u4E8E\u4E2D\u7B49\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 no\xA0",n(e.code,{children:"priority"}),"\xA0\uFF0C\u5219\u8FD9\u662F\u9ED8\u8BA4\u503C\u3002"]}),`
`]}),`
`,s(e.li,{children:[`
`,s(e.p,{children:[n(e.code,{children:"'user-blocking'"}),"\xA0for critical tasks that need to run at high priority."]}),`
`,s(e.p,{children:[n(e.code,{children:"'user-blocking'"}),"\xA0\u9002\u7528\u4E8E\u9700\u8981\u4EE5\u9AD8\u4F18\u5148\u7EA7\u8FD0\u884C\u7684\u5173\u952E\u4EFB\u52A1\u3002"]}),`
`]}),`
`]}),`
`,s(e.p,{children:["Take the following code as an example, where the\xA0",n(e.code,{children:"postTask()"}),"\xA0API is used to run three tasks at the highest possible priority, and the remaining two tasks at the lowest possible priority."]}),`
`,s(e.p,{children:["\u4EE5\u4EE5\u4E0B\u4EE3\u7801\u4E3A\u4F8B\uFF0C\xA0",n(e.code,{children:"postTask()"}),"\xA0\u5176\u4E2D API \u7528\u4E8E\u4EE5\u5C3D\u53EF\u80FD\u9AD8\u7684\u4F18\u5148\u7EA7\u8FD0\u884C\u4E09\u4E2A\u4EFB\u52A1\uFF0C\u5E76\u4EE5\u5C3D\u53EF\u80FD\u4F4E\u7684\u4F18\u5148\u7EA7\u8FD0\u884C\u5176\u4F59\u4E24\u4E2A\u4EFB\u52A1\u3002"]}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Validate the form at high priority"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"validateForm"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"priority"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"user-blocking"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Show the spinner at high priority:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"showSpinner"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"priority"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"user-blocking"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Update the database in the background:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"saveToDatabase"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"priority"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"background"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Update the user interface at high priority:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"updateUI"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"priority"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"user-blocking"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Send analytics data in the background:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"postTask"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"sendAnalytics"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"priority"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"background"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"})]})]}),`
`,n(e.p,{children:"Here, the priority of tasks is scheduled in such a way that browser-prioritized tasks\u2014such as user interactions\u2014can work their way in."}),`
`,n(e.p,{children:"\u5728\u8FD9\u91CC\uFF0C\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u662F\u4EE5\u8FD9\u6837\u4E00\u79CD\u65B9\u5F0F\u5B89\u6392\u7684\uFF0C\u5373\u6D4F\u89C8\u5668\u4F18\u5148\u7684\u4EFB\u52A1\uFF08\u4F8B\u5982\u7528\u6237\u4EA4\u4E92\uFF09\u53EF\u4EE5\u53D1\u6325\u4F5C\u7528\u3002"}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116200045.png",alt:"20231116200045"}),`
`,s(e.em,{children:["When\xA0",n(e.code,{children:"saveSettings()"}),"\xA0is run, the function schedules the individual functions using\xA0",n(e.code,{children:"postTask()"}),". The critical user-facing work is scheduled at high priority, while work the user doesn't know about is scheduled to run in the background. This allows for user interactions to execute more quickly, as the work is both broken up\xA0",n(e.em,{children:"and"}),"\xA0prioritized appropriately."]})]}),`
`,n(e.p,{children:s(e.em,{children:[n(e.code,{children:"saveSettings()"}),"\xA0\u8FD0\u884C\u65F6\uFF0C\u8BE5\u51FD\u6570\u4F7F\u7528\xA0",n(e.code,{children:"postTask()"}),"\xA0\u8C03\u5EA6\u5404\u4E2A\u51FD\u6570\u3002\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u5DE5\u4F5C\u88AB\u5B89\u6392\u4E3A\u9AD8\u4F18\u5148\u7EA7\uFF0C\u800C\u7528\u6237\u4E0D\u77E5\u9053\u7684\u5DE5\u4F5C\u88AB\u5B89\u6392\u5728\u540E\u53F0\u8FD0\u884C\u3002\u8FD9\u5141\u8BB8\u7528\u6237\u4EA4\u4E92\u66F4\u5FEB\u5730\u6267\u884C\uFF0C\u56E0\u4E3A\u5DE5\u4F5C\u88AB\u9002\u5F53\u5730\u5206\u89E3\u548C\u786E\u5B9A\u4F18\u5148\u7EA7\u3002"]})}),`
`,s(e.p,{children:["This is a simplistic example of how\xA0",n(e.code,{children:"postTask()"}),"\xA0can be used. It's possible to instantiate different\xA0",n(e.code,{children:"TaskController"}),"\xA0objects that can share priorities between tasks, including the ability to change priorities for different\xA0",n(e.code,{children:"TaskController"}),"\xA0instances as needed."]}),`
`,s(e.p,{children:["\u8FD9\u662F\u4E00\u4E2A\u5982\u4F55\u4F7F\u7528\u7684\u7B80\u5355\u793A\u4F8B\xA0",n(e.code,{children:"postTask()"}),"\xA0\u3002\u53EF\u4EE5\u5B9E\u4F8B\u5316\u53EF\u4EE5\u5728\u4EFB\u52A1\u4E4B\u95F4\u5171\u4EAB\u4F18\u5148\u7EA7\u7684\u4E0D\u540C\xA0",n(e.code,{children:"TaskController"}),"\xA0\u5BF9\u8C61\uFF0C\u5305\u62EC\u6839\u636E\u9700\u8981\u66F4\u6539\u4E0D\u540C\xA0",n(e.code,{children:"TaskController"}),"\xA0\u5B9E\u4F8B\u7684\u4F18\u5148\u7EA7\u7684\u80FD\u529B\u3002"]}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Key point:"}),"\xA0",s(e.a,{href:"https://caniuse.com/mdn-api_scheduler_posttask",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"postTask()"}),"\xA0is not supported in all browsers"]}),". You can use feature detection to see if it's available, or consider using\xA0",n(e.a,{href:"https://www.npmjs.com/package/scheduler-polyfill",target:"_blank",rel:"nofollow",children:"a polyfill"}),"."]}),s(e.p,{children:["\u5173\u952E\u70B9\uFF1A\xA0",n(e.code,{children:"postTask()"}),"\xA0\u5E76\u975E\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u7279\u5F81\u68C0\u6D4B\u6765\u67E5\u770B\u5B83\u662F\u5426\u53EF\u7528\uFF0C\u6216\u8005\u8003\u8651\u4F7F\u7528 polyfill\u3002"]})]})]}),`
`,s(e.h3,{id:"built-in-yield-with-continuation-via-\u5185\u7F6E\u4EA7\u91CF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EEDscheduleryield",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#built-in-yield-with-continuation-via-\u5185\u7F6E\u4EA7\u91CF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EEDscheduleryield",children:"#"}),"Built-in yield with continuation via (\u5185\u7F6E\u4EA7\u91CF\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EED",n(e.code,{children:"scheduler.yield"}),")"]}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),s(e.div,{className:"island-directive-content",children:[s(e.p,{children:[n(e.strong,{children:"Key point:"}),"\xA0For a more detailed explanation on\xA0",n(e.code,{children:"scheduler.yield"}),", read\xA0",n(e.a,{href:"https://developer.chrome.com/blog/introducing-scheduler-yield-origin-trial/",target:"_blank",rel:"nofollow",children:"this post about its origin trial"}),", as well as\xA0",n(e.a,{href:"https://github.com/WICG/scheduling-apis/blob/main/explainers/yield-and-continuation.md",target:"_blank",rel:"nofollow",children:"its explainer"}),"."]}),s(e.p,{children:["\u5173\u952E\u70B9\uFF1A\u6709\u5173\u66F4\xA0",n(e.code,{children:"scheduler.yield"}),"\xA0\u8BE6\u7EC6\u7684\u89E3\u91CA\uFF0C\u8BF7\u9605\u8BFB\u8FD9\u7BC7\u5173\u4E8E\u5176\u8D77\u6E90\u8BD5\u9A8C\u53CA\u5176\u89E3\u91CA\u5668\u7684\u6587\u7AE0\u3002"]})]})]}),`
`,n(e.p,{children:s(e.em,{children:["One proposed part of the scheduler API is\xA0",n(e.code,{children:"scheduler.yield"}),", an API specifically designed for yielding to the main thread in the browser\xA0",n(e.a,{href:"https://developer.chrome.com/origintrials/#/view_trial/836543630784069633",target:"_blank",rel:"nofollow",children:"which is currently available to try as an origin trial"}),". Its use resembles the\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0function demonstrated earlier in this article:"]})}),`
`,n(e.p,{children:s(e.em,{children:["\u8C03\u5EA6\u7A0B\u5E8F API \u7684\u4E00\u4E2A\u5EFA\u8BAE\u90E8\u5206\u662F \uFF0C\u8BE5 API \u4E13\u95E8\u8BBE\u8BA1\u7528\u4E8E\u5C48\u670D\u4E8E\u6D4F\u89C8\u5668\u4E2D\u7684\u4E3B\u7EBF\u7A0B\xA0",n(e.code,{children:"scheduler.yield"}),"\xA0\uFF0C\u76EE\u524D\u53EF\u4F5C\u4E3A\u6E90\u8BD5\u7528\u8FDB\u884C\u5C1D\u8BD5\u3002\u5B83\u7684\u7528\u6CD5\u7C7B\u4F3C\u4E8E\u672C\u6587\u524D\u9762\u6F14\u793A\u7684\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0\u51FD\u6570\uFF1A"]})}),`
`,s(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:s(e.code,{className:"",children:[s(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"function"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"saveSettings"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Create an array of functions to run:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"validateForm"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"showSpinner"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"saveToDatabase"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"updateUI"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"sendAnalytics"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"})}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Loop over the tasks:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"while"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"length "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Shift the first task off the tasks array:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tasks"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"shift"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Run the task:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"task"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Yield to the main thread with the scheduler"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// API's own yielding mechanism:"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"scheduler"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"yield"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,s(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),s(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"}),n(e.span,{className:"line-number",children:"23"})]})]}),`
`,s(e.p,{children:["You'll note that the code above is largely familiar, but instead of using\xA0",n(e.code,{children:"yieldToMain()"}),", you call and\xA0",n(e.code,{children:"await scheduler.yield()"}),"\xA0instead."]}),`
`,s(e.p,{children:["\u60A8\u4F1A\u6CE8\u610F\u5230\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u662F\u719F\u6089\u7684\uFF0C\u4F46\u4E0D\u662F\u4F7F\u7528\xA0",n(e.code,{children:"yieldToMain()"}),"\xA0\uFF0C\u800C\u662F\u8C03\u7528 \u548C\xA0",n(e.code,{children:"await scheduler.yield()"}),"\xA0\u3002"]}),`
`,s(e.p,{children:[n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116201606.png",alt:"20231116201606"}),`
`,s(e.em,{children:["A visualization of task execution without yielding, with yielding, and with yielding and continuation. When\xA0",n(e.code,{children:"scheduler.yield()"}),"\xA0is used, task execution picks up where it left off even after the yield point."]})]}),`
`,n(e.p,{children:s(e.em,{children:["\u4EFB\u52A1\u6267\u884C\u7684\u53EF\u89C6\u5316\uFF0C\u4E0D\u5C48\u670D\uFF0C\u5C48\u670D\uFF0C\u5C48\u670D\u548C\u5EF6\u7EED\u3002\u4F7F\u7528\u65F6\xA0",n(e.code,{children:"scheduler.yield()"}),"\xA0\uFF0C\u5373\u4F7F\u5728\u5C48\u670D\u70B9\u4E4B\u540E\uFF0C\u4EFB\u52A1\u6267\u884C\u4E5F\u4F1A\u4ECE\u4E2D\u65AD\u7684\u5730\u65B9\u7EE7\u7EED\u6267\u884C\u3002"]})}),`
`,s(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),n(e.div,{className:"island-directive-content",children:s(e.p,{children:["\u4F7F\u7528",n(e.code,{children:"scheduler.yield()"}),"\u5206\u5272\u7684\u4EFB\u52A1\u5728\u7D27\u6025\u4EFB\u52A1\uFF08\u5982\u7528\u6237\u4EA4\u4E92\uFF09\u7ED3\u675F\u540E\u4F1A\u63A5\u7740\u8FD0\u884C\uFF0C\u4F46\u662F\u88AB",n(e.code,{children:"yieldToMain()"}),"\u548C",n(e.code,{children:"await scheduler.yield()"}),"\u5206\u5272\u7684\u4EFB\u52A1\u4F1A\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E\u3002"]})})]}),`
`,s(e.p,{children:["The benefit of\xA0",n(e.code,{children:"scheduler.yield()"}),"\xA0is continuation, which means that if you yield in the middle of a set of tasks, the other scheduled tasks will continue in the same order after the yield point.\xA0",n(e.strong,{children:"This avoids code from third-party scripts from usurping the order of your code's execution."})]}),`
`,s(e.p,{children:["\u8FD9\u6837\u505A\u7684\u597D\u5904\xA0",n(e.code,{children:"scheduler.yield()"}),"\xA0\u662F\u5EF6\u7EED\uFF0C\u8FD9\u610F\u5473\u7740\u5982\u679C\u60A8\u5728\u4E00\u7EC4\u4EFB\u52A1\u7684\u4E2D\u95F4\u8BA9\u6B65\uFF0C\u5176\u4ED6\u8BA1\u5212\u4EFB\u52A1\u5C06\u5728\u8BA9\u6B65\u70B9\u4E4B\u540E\u4EE5\u76F8\u540C\u7684\u987A\u5E8F\u7EE7\u7EED\u3002\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u6765\u81EA\u7B2C\u4E09\u65B9\u811A\u672C\u7684\u4EE3\u7801\u7BE1\u593A\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u3002"]}),`
`,s(e.h2,{id:"conclusion",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#conclusion",children:"#"}),"Conclusion"]}),`
`,n(e.p,{children:"Managing tasks is challenging, but doing so helps your page respond more quickly to user interactions. There's no one single piece of advice for managing and prioritizing tasks. Rather, it's a number of different techniques. To reiterate, these are the main things you'll want to consider when managing tasks:"}),`
`,n(e.p,{children:"\u7BA1\u7406\u4EFB\u52A1\u5177\u6709\u6311\u6218\u6027\uFF0C\u4F46\u8FD9\u6837\u505A\u6709\u52A9\u4E8E\u9875\u9762\u66F4\u5FEB\u5730\u54CD\u5E94\u7528\u6237\u4EA4\u4E92\u3002\u6CA1\u6709\u4E00\u6761\u5173\u4E8E\u7BA1\u7406\u548C\u786E\u5B9A\u4EFB\u52A1\u4F18\u5148\u7EA7\u7684\u5EFA\u8BAE\u3002\u76F8\u53CD\uFF0C\u5B83\u662F\u8BB8\u591A\u4E0D\u540C\u7684\u6280\u672F\u3002\u91CD\u7533\u4E00\u4E0B\uFF0C\u8FD9\u4E9B\u662F\u7BA1\u7406\u4EFB\u52A1\u65F6\u8981\u8003\u8651\u7684\u4E3B\u8981\u4E8B\u9879\uFF1A"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:[`
`,n(e.p,{children:"Yield to the main thread for critical, user-facing tasks."}),`
`,n(e.p,{children:"\u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u6267\u884C\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u4EFB\u52A1\u3002"}),`
`]}),`
`,s(e.li,{children:[`
`,s(e.p,{children:["Use\xA0",n(e.code,{children:"isInputPending()"}),"\xA0to yield to the main thread when the user is trying to interact with the page."]}),`
`,s(e.p,{children:["\u7528\u4E8E\xA0",n(e.code,{children:"isInputPending()"}),"\xA0\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002"]}),`
`]}),`
`,s(e.li,{children:[`
`,s(e.p,{children:["Prioritize tasks with\xA0",n(e.code,{children:"postTask()"}),"."]}),`
`,s(e.p,{children:["\u4F7F\u7528\xA0",n(e.code,{children:"postTask()"}),"\xA0\u786E\u5B9A\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u3002"]}),`
`]}),`
`,s(e.li,{children:[`
`,s(e.p,{children:["Finally,\xA0",n(e.strong,{children:"do as little work as possible in your functions."})]}),`
`,n(e.p,{children:"\u6700\u540E\uFF0C\u5728\u51FD\u6570\u4E2D\u5C3D\u53EF\u80FD\u5C11\u5730\u505A\u5DE5\u4F5C\u3002"}),`
`]}),`
`]}),`
`,n(e.p,{children:"With one or more of these tools, you should be able to structure the work in your application so that it prioritizes the user's needs, while ensuring that less critical work still gets done. That's going to create a better user experience which is more responsive and more enjoyable to use."}),`
`,n(e.p,{children:"\u4F7F\u7528\u8FD9\u4E9B\u5DE5\u5177\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\uFF0C\u60A8\u5E94\u8BE5\u80FD\u591F\u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5DE5\u4F5C\uFF0C\u4EE5\u4FBF\u5B83\u4F18\u5148\u8003\u8651\u7528\u6237\u7684\u9700\u6C42\uFF0C\u540C\u65F6\u786E\u4FDD\u4ECD\u7136\u5B8C\u6210\u4E0D\u592A\u91CD\u8981\u7684\u5DE5\u4F5C\u3002\u8FD9\u5C06\u521B\u9020\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u54CD\u5E94\u901F\u5EA6\u66F4\u5FEB\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u6109\u5FEB\u3002"}),`
`,s(e.p,{children:["_Special thanks to\xA0",n(e.a,{href:"https://philipwalton.com/",target:"_blank",rel:"nofollow",children:"Philip Walton"}),"\xA0for his technical vetting of this article."]}),`
`,n(e.p,{children:"\u7279\u522B\u611F\u8C22 Philip Walton \u5BF9\u672C\u6587\u7684\u6280\u672F\u5BA1\u67E5\u3002_"}),`
`,s(e.p,{children:["_Hero image sourced from\xA0",n(e.a,{href:"https://unsplash.com/",target:"_blank",rel:"nofollow",children:"Unsplash"}),", courtesy of\xA0",n(e.a,{href:"https://unsplash.com/@amir_v_ali",target:"_blank",rel:"nofollow",children:"Amirali Mirhashemian"}),"."]}),`
`,n(e.p,{children:"\u4E3B\u56FE\u7247\u6765\u81EA Unsplash\uFF0C\u7531 Amirali Mirhashemian \u63D0\u4F9B\u3002_"})]})}function h(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}const d="2023/11/16 20:32:02",p=`# \u4F18\u5316\u957F\u4EFB\u52A1

\`metadata:\`

**\u539F\u6807\u9898:** Optimize long tasks

**\u94FE\u63A5:** https://web.dev/articles/optimize-long-tasks

---

You've been told "don't block the main thread" and "break up your long tasks", but what does it mean to do those things?

\u4F60\u88AB\u544A\u77E5\u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u201D\u548C\u201C\u5206\u89E3\u4F60\u7684\u957F\u4EFB\u52A1\u201D\uFF0C\u4F46\u662F\u505A\u8FD9\u4E9B\u4E8B\u60C5\u610F\u5473\u7740\u4EC0\u4E48\u5462\uFF1F

If you read lots of stuff about web performance, the advice for keeping your JavaScript apps fast tends to involve some of these tidbits:  

\u5982\u679C\u4F60\u8BFB\u8FC7\u5F88\u591A\u5173\u4E8E Web \u6027\u80FD\u7684\u6587\u7AE0\uFF0C\u90A3\u4E48\u4FDD\u6301 JavaScript \u5E94\u7528\u7A0B\u5E8F\u5FEB\u901F\u8FD0\u884C\u7684\u5EFA\u8BAE\u5F80\u5F80\u4F1A\u6D89\u53CA\u4EE5\u4E0B\u4E00\u4E9B\u82B1\u7D6E\uFF1A

*   "Don't block the main thread."  

    \u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u3002\u201D
*   "Break up your long tasks."  

    \u201C\u5206\u89E3\u4F60\u7684\u957F\u671F\u4EFB\u52A1\u3002\u201D

What does any of that mean? Shipping\xA0_less_\xA0JavaScript is good, but does that automatically equate to snappier user interfaces throughout the page lifecycle? Maybe, but maybe not.  

\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u51CF\u5C11 JavaScript \u7684\u53D1\u5E03\u662F\u4EF6\u597D\u4E8B\uFF0C\u4F46\u8FD9\u662F\u5426\u81EA\u52A8\u7B49\u540C\u4E8E\u5728\u6574\u4E2A\u9875\u9762\u751F\u547D\u5468\u671F\u4E2D\u63D0\u4F9B\u66F4\u5FEB\u6377\u7684\u7528\u6237\u754C\u9762\uFF1F\u4E5F\u8BB8\uFF0C\u4F46\u4E5F\u8BB8\u4E0D\u662F\u3002

To get your head around why it's important to optimize tasks in JavaScript, you need to understand the role of tasks and how the browser handles them\u2014and that starts with understanding what a task is.  

\u8981\u5F04\u6E05\u695A\u4E3A\u4EC0\u4E48\u5728 JavaScript \u4E2D\u4F18\u5316\u4EFB\u52A1\u5F88\u91CD\u8981\uFF0C\u60A8\u9700\u8981\u4E86\u89E3\u4EFB\u52A1\u7684\u89D2\u8272\u4EE5\u53CA\u6D4F\u89C8\u5668\u5982\u4F55\u5904\u7406\u5B83\u4EEC\u2014\u2014\u8FD9\u9996\u5148\u8981\u4E86\u89E3\u4EFB\u52A1\u662F\u4EC0\u4E48\u3002

## What is a task?\xA0\u4EC0\u4E48\u662F\u4EFB\u52A1\uFF1F

A\xA0_task_\xA0is any discrete piece of work that the browser does. Tasks involve work such as rendering, parsing HTML and CSS, running the JavaScript code you write, and other things you may not have direct control over. Of all of this, the JavaScript you write and deploy to the web is a major source of tasks.  

\u4EFB\u52A1\u662F\u6D4F\u89C8\u5668\u6267\u884C\u7684\u4EFB\u4F55\u79BB\u6563\u5DE5\u4F5C\u3002\u4EFB\u52A1\u6D89\u53CA\u6E32\u67D3\u3001\u89E3\u6790 HTML \u548C CSS\u3001\u8FD0\u884C\u60A8\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u4EE5\u53CA\u60A8\u53EF\u80FD\u65E0\u6CD5\u76F4\u63A5\u63A7\u5236\u7684\u5176\u4ED6\u5DE5\u4F5C\u3002\u5728\u6240\u6709\u8FD9\u4E9B\u4E2D\uFF0C\u60A8\u7F16\u5199\u5E76\u90E8\u7F72\u5230 Web \u7684 JavaScript \u662F\u4EFB\u52A1\u7684\u4E3B\u8981\u6765\u6E90\u3002

![20231116193519](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193519.png)
*A depiction of a task kicked off by a\xA0\`click\`\xA0event handler in the performance profiler in Chrome DevTools.*
(*\u5BF9\u7531 Chrome DevTools \u4E2D\u6027\u80FD\u63A2\u67E5\u5668\u4E2D\u7684\xA0\`click\`\xA0\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u542F\u52A8\u7684\u4EFB\u52A1\u7684\u63CF\u8FF0\u3002*)

Tasks impact performance in a couple of ways. For example, when a browser downloads a JavaScript file during startup, it queues tasks to parse and compile that JavaScript so it can be executed. Later on in the page lifecycle, tasks are kicked off when your JavaScript does work such as driving interactions through event handlers, JavaScript-driven animations, and background activity such as analytics collection. All of this stuff\u2014with the exception of\xA0[web workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers)\xA0and similar APIs\u2014happens on the main thread.  
\u4EFB\u52A1\u4EE5\u591A\u79CD\u65B9\u5F0F\u5F71\u54CD\u6027\u80FD\u3002\u4F8B\u5982\uFF0C\u5F53\u6D4F\u89C8\u5668\u5728\u542F\u52A8\u671F\u95F4\u4E0B\u8F7D JavaScript \u6587\u4EF6\u65F6\uFF0C\u5B83\u4F1A\u5C06\u4EFB\u52A1\u6392\u961F\u4EE5\u89E3\u6790\u548C\u7F16\u8BD1\u8BE5 JavaScript\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u6267\u884C\u5B83\u3002\u5728\u9875\u9762\u751F\u547D\u5468\u671F\u7684\u540E\u671F\uFF0C\u5F53 JavaScript \u6B63\u5E38\u5DE5\u4F5C\u65F6\uFF0C\u4EFB\u52A1\u5C06\u542F\u52A8\uFF0C\u4F8B\u5982\u901A\u8FC7\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u3001JavaScript \u9A71\u52A8\u7684\u52A8\u753B\u548C\u540E\u53F0\u6D3B\u52A8\uFF08\u5982\u5206\u6790\u6536\u96C6\uFF09\u9A71\u52A8\u4EA4\u4E92\u3002\u9664\u4E86 Web Worker \u548C\u7C7B\u4F3C\u7684 API \u4E4B\u5916\uFF0C\u6240\u6709\u8FD9\u4E9B\u4E1C\u897F\u90FD\u53D1\u751F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u3002

## What is the main thread?  \u4E3B\u7EBF\u662F\u4EC0\u4E48\uFF1F

The\xA0_main thread_\xA0is where most tasks are run in the browser. It's called the main thread for a reason: it's the one thread where nearly all the JavaScript you write does its work.  

\u4E3B\u7EBF\u7A0B\u662F\u5927\u591A\u6570\u4EFB\u52A1\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u5730\u65B9\u3002\u5B83\u88AB\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\u662F\u6709\u539F\u56E0\u7684\uFF1A\u5B83\u662F\u4F60\u7F16\u5199\u7684\u51E0\u4E4E\u6240\u6709 JavaScript \u90FD\u5B8C\u6210\u5176\u5DE5\u4F5C\u7684\u7EBF\u7A0B\u3002

The main thread can only process one task at a time. When tasks stretch beyond a certain point\u201450 milliseconds to be exact\u2014they're classified as\xA0_long tasks_. If the user is attempting to interact with the page while a long task runs\u2014or if an important rendering update needs to happen\u2014the browser will be delayed in handling that work. This results in interaction or rendering latency.  

\u4E3B\u7EBF\u7A0B\u4E00\u6B21\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u4EFB\u52A1\u3002\u5F53\u4EFB\u52A1\u8D85\u8FC7\u67D0\u4E2A\u70B9\uFF08\u51C6\u786E\u5730\u8BF4\u662F 50 \u6BEB\u79D2\uFF09\u65F6\uFF0C\u5B83\u4EEC\u88AB\u5F52\u7C7B\u4E3A\u957F\u4EFB\u52A1\u3002\u5982\u679C\u7528\u6237\u5728\u957F\u65F6\u95F4\u4EFB\u52A1\u8FD0\u884C\u65F6\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\uFF0C\u6216\u8005\u9700\u8981\u8FDB\u884C\u91CD\u8981\u7684\u5448\u73B0\u66F4\u65B0\uFF0C\u5219\u6D4F\u89C8\u5668\u5728\u5904\u7406\u8BE5\u5DE5\u4F5C\u65F6\u5C06\u5EF6\u8FDF\u3002\u8FD9\u4F1A\u5BFC\u81F4\u4EA4\u4E92\u6216\u6E32\u67D3\u5EF6\u8FDF\u3002

![20231116193905](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193905.png)

*A long task as depicted in Chrome's performance profiler. Long tasks are indicated by a red triangle in the corner of the task, with the blocking portion of the task filled in with a pattern of diagonal red stripes.*

*\u8FD9\u662F\u4E00\u9879\u6F2B\u957F\u7684\u4EFB\u52A1\uFF0C\u5982 Chrome \u7684\u6027\u80FD\u5206\u6790\u5668\u4E2D\u6240\u8FF0\u3002\u957F\u4EFB\u52A1\u7531\u4EFB\u52A1\u4E00\u89D2\u7684\u7EA2\u8272\u4E09\u89D2\u5F62\u8868\u793A\uFF0C\u4EFB\u52A1\u7684\u963B\u585E\u90E8\u5206\u7528\u5BF9\u89D2\u7EBF\u7EA2\u8272\u6761\u7EB9\u56FE\u6848\u586B\u5145\u3002*

You need to\xA0_break up_\xA0tasks. This means taking a single long task and dividing it into smaller tasks that take less time to run individually.  

\u60A8\u9700\u8981\u5206\u89E3\u4EFB\u52A1\u3002\u8FD9\u610F\u5473\u7740\u5C06\u5355\u4E2A\u957F\u4EFB\u52A1\u5212\u5206\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u5355\u72EC\u8FD0\u884C\u6240\u9700\u7684\u65F6\u95F4\u66F4\u5C11\u3002

![20231116193949](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116193949.png)

*A visualization of a single long task versus that same task broken up into five shorter tasks.*

*\u5355\u4E2A\u957F\u4EFB\u52A1\u4E0E\u540C\u4E00\u4EFB\u52A1\u7684\u53EF\u89C6\u5316\uFF0C\u5206\u89E3\u4E3A\u4E94\u4E2A\u8F83\u77ED\u7684\u4EFB\u52A1\u3002*

This matters because when tasks are broken up, the browser has more opportunities to respond to higher-priority work\u2014and that includes user interactions.  

\u8FD9\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5F53\u4EFB\u52A1\u88AB\u5206\u89E3\u65F6\uFF0C\u6D4F\u89C8\u5668\u6709\u66F4\u591A\u673A\u4F1A\u54CD\u5E94\u66F4\u9AD8\u4F18\u5148\u7EA7\u7684\u5DE5\u4F5C\uFF0C\u5176\u4E2D\u5305\u62EC\u7528\u6237\u4EA4\u4E92\u3002

![20231116194020](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194020.png)
*A visualization of what happens to interactions when tasks are too long and the browser can't respond quickly enough to interactions, versus when longer tasks are broken up into smaller tasks.*

*\u5F53\u4EFB\u52A1\u592A\u957F\u4E14\u6D4F\u89C8\u5668\u65E0\u6CD5\u8DB3\u591F\u5FEB\u5730\u54CD\u5E94\u4EA4\u4E92\u65F6\uFF0C\u4E0E\u5C06\u8F83\u957F\u7684\u4EFB\u52A1\u5206\u89E3\u4E3A\u8F83\u5C0F\u7684\u4EFB\u52A1\u65F6\uFF0C\u4EA4\u4E92\u4F1A\u53D1\u751F\u4EC0\u4E48\u60C5\u51B5\u7684\u53EF\u89C6\u5316\u3002*

At the top of the preceding figure, an event handler queued up by a user interaction had to wait for a single long task before it could run, This delays the interaction from taking place. At the bottom, the event handler has a chance to run sooner. Because the event handler had an opportunity to run in between smaller tasks, it runs sooner than if it had to wait for a long task to finish. In the top example, the user might have noticed lag; in the bottom, the interaction might have felt\xA0_instant_.  

\u5728\u4E0A\u56FE\u7684\u9876\u90E8\uFF0C\u7531\u7528\u6237\u4EA4\u4E92\u6392\u961F\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5FC5\u987B\u7B49\u5F85\u5355\u4E2A\u957F\u4EFB\u52A1\u624D\u80FD\u8FD0\u884C\uFF0C\u8FD9\u4F1A\u5EF6\u8FDF\u4EA4\u4E92\u7684\u53D1\u751F\u3002\u5728\u5E95\u90E8\uFF0C\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u6709\u673A\u4F1A\u66F4\u5FEB\u5730\u8FD0\u884C\u3002\u7531\u4E8E\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u6709\u673A\u4F1A\u5728\u8F83\u5C0F\u7684\u4EFB\u52A1\u4E4B\u95F4\u8FD0\u884C\uFF0C\u56E0\u6B64\u5B83\u6BD4\u5FC5\u987B\u7B49\u5F85\u957F\u65F6\u95F4\u4EFB\u52A1\u5B8C\u6210\u65F6\u8FD0\u884C\u5F97\u66F4\u5FEB\u3002\u5728\u9876\u90E8\u793A\u4F8B\u4E2D\uFF0C\u7528\u6237\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\u5EF6\u8FDF;\u5728\u5E95\u90E8\uFF0C\u4EA4\u4E92\u53EF\u80FD\u611F\u89C9\u662F\u5373\u65F6\u7684\u3002

The problem, though, is that the advice of "break up your long tasks" and "don't block the main thread" isn't specific enough unless you already know\xA0_how_\xA0to do those things. That's what this guide will explain.  

\u7136\u800C\uFF0C\u95EE\u9898\u5728\u4E8E\uFF0C\u201C\u5206\u89E3\u4F60\u7684\u957F\u4EFB\u52A1\u201D\u548C\u201C\u4E0D\u8981\u963B\u585E\u4E3B\u7EBF\u7A0B\u201D\u7684\u5EFA\u8BAE\u4E0D\u591F\u5177\u4F53\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u77E5\u9053\u5982\u4F55\u505A\u8FD9\u4E9B\u4E8B\u60C5\u3002\u8FD9\u5C31\u662F\u672C\u6307\u5357\u5C06\u8981\u89E3\u91CA\u7684\u5185\u5BB9\u3002

## Task management strategies  \u4EFB\u52A1\u7BA1\u7406\u7B56\u7565

A common bit of advice in software architecture is to break up your work into smaller functions. This gives you the benefits of better code readability, and project maintainability. This also makes tests easier to write.  

\u8F6F\u4EF6\u67B6\u6784\u4E2D\u4E00\u4E2A\u5E38\u89C1\u7684\u5EFA\u8BAE\u662F\u5C06\u4F60\u7684\u5DE5\u4F5C\u5206\u89E3\u6210\u66F4\u5C0F\u7684\u529F\u80FD\u3002\u8FD9\u4E3A\u60A8\u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u4EE3\u7801\u53EF\u8BFB\u6027\u548C\u9879\u76EE\u53EF\u7EF4\u62A4\u6027\u7684\u597D\u5904\u3002\u8FD9\u4E5F\u4F7F\u6D4B\u8BD5\u66F4\u6613\u4E8E\u7F16\u5199\u3002

\`\`\`js
function saveSettings () {
  validateForm();
  showSpinner();
  saveToDatabase();
  updateUI();
  sendAnalytics();
}
\`\`\`

In this example, there's a function named\xA0\`saveSettings()\`\xA0that calls five functions within it to do the work, such as validating a form, showing a spinner, sending data, and so on. Conceptually, this is well architected. If you need to debug one of these functions, you can traverse the project tree to figure out what each function does.  

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u6709\u4E00\u4E2A\u540D\u4E3A\u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528\u5176\u4E2D\u7684\xA0\`saveSettings()\`\xA0\u4E94\u4E2A\u51FD\u6570\u6765\u6267\u884C\u5DE5\u4F5C\uFF0C\u4F8B\u5982\u9A8C\u8BC1\u8868\u5355\u3001\u663E\u793A\u5FAE\u8C03\u5668\u3001\u53D1\u9001\u6570\u636E\u7B49\u3002\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u8FD9\u662F\u5F88\u597D\u7684\u67B6\u6784\u3002\u5982\u679C\u9700\u8981\u8C03\u8BD5\u5176\u4E2D\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u904D\u5386\u9879\u76EE\u6811\u4EE5\u627E\u51FA\u6BCF\u4E2A\u51FD\u6570\u7684\u4F5C\u7528\u3002

The problem, however, is that JavaScript doesn't run each of these functions as separate tasks because they are being executed within the\xA0\`saveSettings()\`\xA0function.\xA0**This means that all five functions run as a single task.**  

\u7136\u800C\uFF0C\u95EE\u9898\u5728\u4E8E JavaScript \u4E0D\u4F1A\u5C06\u8FD9\u4E9B\u51FD\u6570\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4F5C\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u8FD0\u884C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u5728\xA0\`saveSettings()\`\xA0\u51FD\u6570\u4E2D\u6267\u884C\u7684\u3002\u8FD9\u610F\u5473\u7740\u6240\u6709\u4E94\u4E2A\u51FD\u6570\u90FD\u4F5C\u4E3A\u5355\u4E2A\u4EFB\u52A1\u8FD0\u884C\u3002

:::info
**Key point:**\xA0JavaScript works this way because it uses the\xA0[run-to-completion model](https://developer.mozilla.org/docs/Web/JavaScript/EventLoop#run-to-completion)\xA0of task execution. This means that each task will run until it finishes, regardless of how long it blocks the main thread.  

\u5173\u952E\u70B9\uFF1AJavaScript \u4E4B\u6240\u4EE5\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5DE5\u4F5C\uFF0C\u662F\u56E0\u4E3A\u5B83\u4F7F\u7528\u4EFB\u52A1\u6267\u884C\u7684\u8FD0\u884C\u5230\u5B8C\u6210\u6A21\u578B\u3002\u8FD9\u610F\u5473\u7740\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5C06\u8FD0\u884C\u76F4\u5230\u5B8C\u6210\uFF0C\u65E0\u8BBA\u5B83\u963B\u585E\u4E3B\u7EBF\u7A0B\u591A\u957F\u65F6\u95F4\u3002
:::

![20231116194228](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116194228.png)
*A single function\xA0\`saveSettings()\`\xA0that calls five functions. The work is run as part of one long monolithic task.*

*\u8C03\u7528\u4E94\u4E2A\u51FD\u6570\u7684\u5355\u4E2A\u51FD\u6570\xA0\`saveSettings()\`\xA0\u3002\u8BE5\u5DE5\u4F5C\u5C06\u4F5C\u4E3A\u4E00\u9879\u957F\u671F\u6574\u4F53\u4EFB\u52A1\u7684\u4E00\u90E8\u5206\u8FD0\u884C\u3002*

In the best case scenario, even just one of those functions can contribute 50 milliseconds or more to the total length of the task. In the worst case, more of those tasks can run quite a bit longer\u2014especially on resource-constrained devices. What follows is a set of strategies you can use to break up and prioritize tasks.  

\u5728\u6700\u597D\u7684\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u53EA\u6709\u4E00\u4E2A\u51FD\u6570\u4E5F\u4F1A\u4E3A\u4EFB\u52A1\u7684\u603B\u957F\u5EA6\u8D21\u732E 50 \u6BEB\u79D2\u6216\u66F4\u591A\u3002\u5728\u6700\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u4E2D\u7684\u66F4\u591A\u4EFB\u52A1\u53EF\u80FD\u4F1A\u8FD0\u884C\u66F4\u957F\u7684\u65F6\u95F4\uFF0C\u5C24\u5176\u662F\u5728\u8D44\u6E90\u53D7\u9650\u7684\u8BBE\u5907\u4E0A\u3002\u4EE5\u4E0B\u662F\u4E00\u7EC4\u53EF\u7528\u4E8E\u5206\u89E3\u4EFB\u52A1\u5E76\u786E\u5B9A\u4EFB\u52A1\u4F18\u5148\u7EA7\u7684\u7B56\u7565\u3002

### Manually defer code execution  \u624B\u52A8\u5EF6\u8FDF\u4EE3\u7801\u6267\u884C

One method developers have used to break up tasks into smaller ones involves\xA0\`setTimeout()\`. With this technique, you pass the function to\xA0\`setTimeout()\`. This postpones execution of the callback into a separate task, even if you specify a timeout of\xA0\`0\`.  

\u5F00\u53D1\u4EBA\u5458\u7528\u6765\u5C06\u4EFB\u52A1\u5206\u89E3\u4E3A\u66F4\u5C0F\u4EFB\u52A1\u7684\u4E00\u79CD\u65B9\u6CD5\u5305\u62EC\xA0\`setTimeout()\`\xA0.\u4F7F\u7528\u6B64\u6280\u672F\uFF0C\u53EF\u4EE5\u5C06\u51FD\u6570\u4F20\u9012\u7ED9\xA0\`setTimeout()\`\xA0\u3002\u8FD9\u4F1A\u5C06\u56DE\u8C03\u7684\u6267\u884C\u63A8\u8FDF\u5230\u5355\u72EC\u7684\u4EFB\u52A1\u4E2D\uFF0C\u5373\u4F7F\u60A8\u6307\u5B9A\u4E86\u8D85\u65F6\xA0\`0\`\xA0\u3002

\`\`\`js
function saveSettings () {
  // Do critical work that is user-visible:
  validateForm();
  showSpinner();
  updateUI();

  // Defer work that isn't user-visible to a separate task:
  setTimeout(() => {
    saveToDatabase();
    sendAnalytics();
  }, 0);
}
\`\`\`

This works well if you have a series of functions that need to run sequentially, but your code may not always be organized this way. For example, you could have a large amount of data that needs to be processed in a loop, and that task could take a very long time if you have millions of items.  

\u5982\u679C\u60A8\u6709\u4E00\u7CFB\u5217\u9700\u8981\u6309\u987A\u5E8F\u8FD0\u884C\u7684\u51FD\u6570\uFF0C\u8FD9\u5F88\u6709\u6548\uFF0C\u4F46\u60A8\u7684\u4EE3\u7801\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u7EC4\u7EC7\u3002\u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u6709\u5927\u91CF\u6570\u636E\u9700\u8981\u5728\u5FAA\u73AF\u4E2D\u5904\u7406\uFF0C\u5982\u679C\u60A8\u6709\u6570\u767E\u4E07\u4E2A\u9879\u76EE\uFF0C\u5219\u8BE5\u4EFB\u52A1\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\u3002

\`\`\`js
function processData () {
  for (const item of largeDataArray) {
    // Process the individual item here.
  }
}
\`\`\`

Using\xA0\`setTimeout()\`\xA0here is problematic, because the ergonomics of it make it difficult to implement, and the entire array of data could take a very long time to process, even if each item can be processed very quickly. It all adds up, and\xA0\`setTimeout()\`\xA0isn't the right tool for the job\u2014at least not when used this way.  

\u5728\u8FD9\u91CC\u4F7F\u7528\xA0\`setTimeout()\`\xA0\u662F\u6709\u95EE\u9898\u7684\uFF0C\u56E0\u4E3A\u5B83\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\u4F7F\u5176\u96BE\u4EE5\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6574\u4E2A\u6570\u636E\u6570\u7EC4\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\u624D\u80FD\u5904\u7406\uFF0C\u5373\u4F7F\u6BCF\u4E2A\u9879\u76EE\u90FD\u53EF\u4EE5\u975E\u5E38\u5FEB\u901F\u5730\u5904\u7406\u3002\u8FD9\u4E00\u5207\u52A0\u8D77\u6765\uFF0C\xA0\`setTimeout()\`\xA0\u5E76\u4E0D\u662F\u8FD9\u9879\u5DE5\u4F5C\u7684\u6B63\u786E\u5DE5\u5177\u2014\u2014\u81F3\u5C11\u5728\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u7528\u65F6\u4E0D\u662F\u3002

In addition to\xA0\`setTimeout()\`, there are a few other APIs that allow you to defer code execution to a subsequent task. One\xA0[involves using\xA0\`postMessage()\`\xA0for faster timeouts](https://dbaron.org/log/20100309-faster-timeouts). You can also break up work using\xA0\`requestIdleCallback()\`\u2014but beware!\u2014\`requestIdleCallback()\`\xA0schedules tasks at the lowest possible priority, and only during browser idle time. When the main thread is congested, tasks scheduled with\xA0\`requestIdleCallback()\`\xA0may never get to run.  

\u9664\u4E86\xA0\`setTimeout()\`\xA0\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6 API \u5141\u8BB8\u60A8\u5C06\u4EE3\u7801\u6267\u884C\u63A8\u8FDF\u5230\u540E\u7EED\u4EFB\u52A1\u3002\u4E00\u79CD\u662F\u7528\u4E8E\xA0\`postMessage()\`\xA0\u66F4\u5FEB\u7684\u8D85\u65F6\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\uFF08\u4F46\u8981\u6CE8\u610F\uFF09\xA0\`requestIdleCallback()\`\xA0\u4EE5\xA0\`requestIdleCallback()\`\xA0\u5C3D\u53EF\u80FD\u4F4E\u7684\u4F18\u5148\u7EA7\u5B89\u6392\u4EFB\u52A1\uFF0C\u5E76\u4E14\u4EC5\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u95F4\u5B89\u6392\u4EFB\u52A1\u6765\u5206\u89E3\u5DE5\u4F5C\u3002\u5F53\u4E3B\u7EBF\u7A0B\u62E5\u585E\u65F6\uFF0C\u8BA1\u5212\u7684\u4EFB\u52A1\xA0\`requestIdleCallback()\`\xA0\u53EF\u80FD\u6C38\u8FDC\u65E0\u6CD5\u8FD0\u884C\u3002

### Use\xA0\`async\`/\`await\`\xA0to create yield points  (\u4F7F\u7528 / \u521B\u5EFA\u5C48\u670D\u70B9)

A phrase you'll see throughout the rest of this guide is "yield to the main thread"\u2014but what does that mean? Why should you do it? When should you do it?  

\u5728\u672C\u6307\u5357\u7684\u5176\u4F59\u90E8\u5206\uFF0C\u60A8\u5C06\u770B\u5230\u4E00\u53E5\u8BDD\u662F\u201C\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u201D\u2014\u2014\u4F46\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\uFF1F\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u505A\uFF1F

:::info
**Key point:**\xA0When you\xA0_yield_\xA0to the main thread, you're giving it an opportunity to handle more important tasks than the ones that are currently queued up. Ideally, you should yield to the main thread whenever you have some crucial user-facing work that needs to execute sooner than if you didn't yield.\xA0**Yielding to the main thread creates opportunities for critical work to run sooner.**  

\u5173\u952E\u70B9\uFF1A\u5F53\u4F60\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u65F6\uFF0C\u4F60\u5C31\u7ED9\u4E86\u5B83\u4E00\u4E2A\u673A\u4F1A\u6765\u5904\u7406\u6BD4\u5F53\u524D\u6392\u961F\u7684\u4EFB\u52A1\u66F4\u91CD\u8981\u7684\u4EFB\u52A1\u3002\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u5F53\u60A8\u6709\u4E00\u4E9B\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u5DE5\u4F5C\u9700\u8981\u6BD4\u4E0D\u8BA9\u6B65\u65F6\u66F4\u5FEB\u5730\u6267\u884C\u65F6\uFF0C\u60A8\u90FD\u5E94\u8BE5\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u4E3A\u5173\u952E\u5DE5\u4F5C\u521B\u9020\u4E86\u66F4\u5FEB\u8FD0\u884C\u7684\u673A\u4F1A\u3002
:::

When tasks are broken up, other tasks can be prioritized better by the browser's internal prioritization scheme. One way to yield to the main thread involves using a combination of a\xA0\`Promise\`\xA0that resolves with a call to\xA0\`setTimeout()\`:  

\u5F53\u4EFB\u52A1\u88AB\u5206\u89E3\u65F6\uFF0C\u6D4F\u89C8\u5668\u7684\u5185\u90E8\u4F18\u5148\u7EA7\u65B9\u6848\u53EF\u4EE5\u66F4\u597D\u5730\u786E\u5B9A\u5176\u4ED6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u3002\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u7684\u4E00\u79CD\u65B9\u6CD5\u6D89\u53CA\u4F7F\u7528 a\xA0\`Promise\`\xA0\u7684\u7EC4\u5408\uFF0C\u8BE5\u7EC4\u5408\u901A\u8FC7\u8C03\u7528 to \u89E3\u6790\xA0\`setTimeout()\`\xA0\uFF1A

\`\`\`js
function yieldToMain () {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
\`\`\`

:::warning
Caution: While this code example returns a Promise that resolves after a call to setTimeout(), it's not the Promise that is responsible for running the rest of the code in a new task, it's the setTimeout() call. Promise callbacks run as microtasks rather than tasks, and therefore don't yield to the main thread.

\u6CE8\u610F\uFF1A\u867D\u7136\u6B64\u4EE3\u7801\u793A\u4F8B\u8FD4\u56DE\u5728\u8C03\u7528setTimeout\uFF08\uFF09\u540E\u89E3\u6790\u7684Promise\uFF0C\u4F46\u4E0D\u662FPromise\u8D1F\u8D23\u5728\u65B0\u4EFB\u52A1\u4E2D\u8FD0\u884C\u5176\u4F59\u4EE3\u7801\uFF0C\u800C\u662FsetTimeout\uFF08\uFF09\u8C03\u7528\u3002Promise\u56DE\u8C03\u4F5C\u4E3A\u5FAE\u4EFB\u52A1\u800C\u4E0D\u662F\u4EFB\u52A1\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002
:::

In the\xA0\`saveSettings()\`\xA0function, you can yield to the main thread after each bit of work if you\xA0\`await\`\xA0the\xA0\`yieldToMain()\`\xA0function after each function call:  

\u5728\u51FD\u6570\u4E2D\xA0\`saveSettings()\`\xA0\uFF0C\u5982\u679C\xA0\`await\`\xA0\`yieldToMain()\`\xA0\u51FD\u6570\u5728\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u53EF\u4EE5\u5728\u6BCF\u6B21\u4F4D\u5DE5\u4F5C\u540E\u8BA9\u6B65\u7ED9\u4E3B\u7EBF\u7A0B\uFF1A

\`\`\`js
async function saveSettings () {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ]

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread:
    await yieldToMain();
  }
}
\`\`\`

:::info
**Key point:**\xA0You don't have to yield after\xA0_every_\xA0function call. For example, if you run two functions that result in critical updates to the user interface, you probably don't want to yield in between them. If you can, let that work run first,\xA0_then_\xA0consider yielding in between functions that do less critical or background work that the user doesn't see.  

\u60A8\u4E0D\u5FC5\u5728_\u6BCF\u4E2A_\u51FD\u6570\u8C03\u7528\u540E\u5C48\u670D\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u8FD0\u884C\u4E24\u4E2A\u5BFC\u81F4\u7528\u6237\u754C\u9762\u53D1\u751F\u5173\u952E\u66F4\u65B0\u7684\u51FD\u6570\uFF0C\u60A8\u53EF\u80FD\u4E0D\u5E0C\u671B\u5728\u5B83\u4EEC\u4E4B\u95F4\u505A\u51FA\u8BA9\u6B65\u3002\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u8BF7\u5148\u8FD0\u884C\u8BE5\u5DE5\u4F5C\uFF0C\u7136\u540E\u8003\u8651\u5728\u6267\u884C\u7528\u6237\u770B\u4E0D\u5230\u7684\u4E0D\u592A\u91CD\u8981\u6216\u540E\u53F0\u5DE5\u4F5C\u7684\u51FD\u6570\u4E4B\u95F4\u8FDB\u884C\u8BA9\u6B65\u3002
:::

The result is that the once-monolithic task is now broken up into separate tasks.  

\u7ED3\u679C\u662F\uFF0C\u66FE\u7ECF\u5355\u4E00\u7684\u4EFB\u52A1\u73B0\u5728\u88AB\u5206\u89E3\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u3002

![20231116195416](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195416.png)
*The\xA0\`saveSettings()\`\xA0function now executes its child functions as separate tasks.*

*\u8BE5\xA0\`saveSettings()\`\xA0\u51FD\u6570\u73B0\u5728\u5C06\u5176\u5B50\u51FD\u6570\u4F5C\u4E3A\u5355\u72EC\u7684\u4EFB\u52A1\u6267\u884C\u3002*

The benefit of using a promise-based approach to yielding rather than manual use of\xA0\`setTimeout()\`\xA0is better ergonomics. Yield points become declarative, and therefore easier to write, read, and understand.  

\u4F7F\u7528\u57FA\u4E8E\u627F\u8BFA\u7684\u5C48\u670D\u65B9\u6CD5\u800C\u4E0D\u662F\u624B\u52A8\u4F7F\u7528\u7684\u597D\u5904\xA0\`setTimeout()\`\xA0\u662F\u66F4\u597D\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\u3002\u5C48\u670D\u70B9\u53D8\u5F97\u5177\u6709\u58F0\u660E\u6027\uFF0C\u56E0\u6B64\u66F4\u6613\u4E8E\u7F16\u5199\u3001\u9605\u8BFB\u548C\u7406\u89E3\u3002

### Yield only when necessary  \u4EC5\u5728\u5FC5\u8981\u65F6\u624D\u5C48\u670D

What if you have a bunch of tasks, but you only want to yield if the user attempts to interact with the page? That's the kind of thing that\xA0[\`isInputPending()\`](https://developer.chrome.com/articles/isinputpending/)\xA0was made for.  

\u5982\u679C\u4F60\u6709\u4E00\u5806\u4EFB\u52A1\uFF0C\u4F46\u4F60\u53EA\u60F3\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u8BA9\u6B65\uFF0C\u8BE5\u600E\u4E48\u529E\uFF1F\u8FD9\u5C31\u662F\u4E3A\u4E4B\u800C\u751F\u7684\u90A3\u79CD\u4E1C\u897F\xA0\`isInputPending()\`\xA0\u3002

\`isInputPending()\`\xA0is a function you can run at any time to determine if the user is attempting to interact with a page element: a call to\xA0\`isInputPending()\`\xA0will return\xA0\`true\`. It returns\xA0\`false\`\xA0otherwise.  

\`isInputPending()\`\xA0\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u60A8\u53EF\u4EE5\u968F\u65F6\u8FD0\u884C\u4EE5\u786E\u5B9A\u7528\u6237\u662F\u5426\u6B63\u5728\u5C1D\u8BD5\u4E0E\u9875\u9762\u5143\u7D20\u8FDB\u884C\u4EA4\u4E92\uFF1A\u5BF9\xA0\`isInputPending()\`\xA0\u7684\u8C03\u7528\u5C06\u8FD4\u56DE\xA0\`true\`\xA0\u3002\u5426\u5219\u8FD4\u56DE\xA0\`false\`\xA0\u3002

Say you have a queue of tasks you need to run, but you don't want to get in the way of any inputs. This code\u2014which uses both\xA0\`isInputPending()\`\xA0and our custom\xA0\`yieldToMain()\`\xA0function\u2014ensures that an input won't be delayed while the user is trying to interact with the page:  

\u5047\u8BBE\u60A8\u6709\u4E00\u4E2A\u9700\u8981\u8FD0\u884C\u7684\u4EFB\u52A1\u961F\u5217\uFF0C\u4F46\u60A8\u4E0D\u60F3\u59A8\u788D\u4EFB\u4F55\u8F93\u5165\u3002\u6B64\u4EE3\u7801\uFF08\u540C\u65F6\u4F7F\u7528\u4E24\u8005\xA0\`isInputPending()\`\xA0\u548C\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\xA0\`yieldToMain()\`\xA0\u51FD\u6570\uFF09\u53EF\u786E\u4FDD\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u8F93\u5165\u4E0D\u4F1A\u5EF6\u8FDF\uFF1A

\`\`\`js
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  while (tasks.length > 0) {
    // Yield to a pending user input:
    if (navigator.scheduling.isInputPending()) {
      // There's a pending user input. Yield here:
      await yieldToMain();
    } else {
      // Shift the task out of the queue:
      const task = tasks.shift();

      // Run the task:
      task();
    }
  }
}
\`\`\`

While\xA0\`saveSettings()\`\xA0runs, it will loop over the tasks in the queue. If\xA0\`isInputPending()\`\xA0returns\xA0\`true\`\xA0during the loop,\xA0\`saveSettings()\`\xA0will call\xA0\`yieldToMain()\`\xA0so the user input can be handled. Otherwise, it will shift the next task off the front of the queue and run it continuously. It will do this until no more tasks are left.  

\u5728\xA0\`saveSettings()\`\xA0\u8FD0\u884C\u65F6\uFF0C\u5B83\u5C06\u904D\u5386\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002\u5982\u679C\xA0\`isInputPending()\`\xA0\u5728\u5FAA\u73AF\u671F\u95F4\u8FD4\u56DE\xA0\`true\`\xA0\uFF0C\xA0\`saveSettings()\`\xA0\u5C06\u8C03\u7528\xA0\`yieldToMain()\`\xA0\u4EE5\u4FBF\u53EF\u4EE5\u5904\u7406\u7528\u6237\u8F93\u5165\u3002\u5426\u5219\uFF0C\u5B83\u4F1A\u5C06\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u4ECE\u961F\u5217\u7684\u524D\u9762\u79FB\u5F00\u5E76\u8FDE\u7EED\u8FD0\u884C\u3002\u5B83\u5C06\u8FD9\u6837\u505A\uFF0C\u76F4\u5230\u6CA1\u6709\u66F4\u591A\u4EFB\u52A1\u7559\u4E0B\u3002

![20231116195750](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116195750.png)
*\`saveSettings()\`\xA0runs a task queue for five tasks, but the user has clicked to open a menu while the second work item was running.\xA0\`isInputPending()\`\xA0yields to the main thread to handle the interaction, and resume running the rest of the tasks.*

*\`saveSettings()\`\xA0\u4E3A\u4E94\u4E2A\u4EFB\u52A1\u8FD0\u884C\u4EFB\u52A1\u961F\u5217\uFF0C\u4F46\u7528\u6237\u5728\u7B2C\u4E8C\u4E2A\u5DE5\u4F5C\u9879\u8FD0\u884C\u65F6\u5355\u51FB\u4EE5\u6253\u5F00\u83DC\u5355\u3002\xA0\`isInputPending()\`\xA0\u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u6765\u5904\u7406\u4EA4\u4E92\uFF0C\u5E76\u7EE7\u7EED\u8FD0\u884C\u5176\u4F59\u4EFB\u52A1\u3002*

:::info
**Note:**\xA0\`isInputPending()\`\xA0may not always return\xA0\`true\`\xA0immediately after user input. This is because it takes time for the operating system to tell the browser that the interaction occurred. This means that other code may have already started executing (as you can see with the\xA0\`saveToDatabase()\`\xA0function in the above screenshot). Even if you use\xA0\`isInputPending()\`\xA0it's still crucial that you limit the amount of work you do in each function.  

\u6CE8\u610F\uFF1A\xA0\`isInputPending()\`\xA0\u7528\u6237\u8F93\u5165\u540E\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u7ACB\u5373\u8FD4\u56DE\xA0\`true\`\xA0\u3002\u8FD9\u662F\u56E0\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u65F6\u95F4\u6765\u544A\u77E5\u6D4F\u89C8\u5668\u53D1\u751F\u4E86\u4EA4\u4E92\u3002\u8FD9\u610F\u5473\u7740\u5176\u4ED6\u4EE3\u7801\u53EF\u80FD\u5DF2\u7ECF\u5F00\u59CB\u6267\u884C\uFF08\u5982\u4E0A\u9762\u5C4F\u5E55\u622A\u56FE\u4E2D\u7684\xA0\`saveToDatabase()\`\xA0\u51FD\u6570\u6240\u793A\uFF09\u3002\u5373\u4F7F\u4F60\u4F7F\u7528\xA0\`isInputPending()\`\xA0\uFF0C\u9650\u5236\u4F60\u5728\u6BCF\u4E2A\u529F\u80FD\u4E2D\u6240\u505A\u7684\u5DE5\u4F5C\u91CF\u4ECD\u7136\u5F88\u91CD\u8981\u3002
:::

Using\xA0\`isInputPending()\`\xA0in combination with a yielding mechanism is a great way to get the browser to stop whatever tasks it's processing so that it can respond to critical user-facing interactions. That can help improve your page's ability to respond to the user in many situations when a lot of tasks are in flight.  

\u4E0E\u751F\u6210\u673A\u5236\u7ED3\u5408\u4F7F\u7528\xA0\`isInputPending()\`\xA0\u662F\u8BA9\u6D4F\u89C8\u5668\u505C\u6B62\u5B83\u6B63\u5728\u5904\u7406\u7684\u4EFB\u4F55\u4EFB\u52A1\u7684\u597D\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u54CD\u5E94\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u4EA4\u4E92\u3002\u8FD9\u6709\u52A9\u4E8E\u63D0\u9AD8\u9875\u9762\u5728\u5927\u91CF\u4EFB\u52A1\u6B63\u5728\u4F20\u8F93\u7684\u60C5\u51B5\u4E0B\u54CD\u5E94\u7528\u6237\u7684\u80FD\u529B\u3002

Another way to use\xA0\`isInputPending()\`\u2014particularly if you're concerned about providing a fallback for browsers that don't support it\u2014is to use a time-based approach in conjunction with the\xA0[optional chaining operator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining):  

\u53E6\u4E00\u79CD\u4F7F\u7528\xA0\`isInputPending()\`\xA0\u65B9\u5F0F\uFF08\u7279\u522B\u662F\u5982\u679C\u60A8\u62C5\u5FC3\u4E3A\u4E0D\u652F\u6301\u5B83\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u56DE\u9000\uFF09\u662F\u5C06\u57FA\u4E8E\u65F6\u95F4\u7684\u65B9\u6CD5\u4E0E\u53EF\u9009\u7684\u94FE\u63A5\u8FD0\u7B97\u7B26\u7ED3\u5408\u4F7F\u7528\uFF1A

\`\`\`js
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  let deadline = performance.now() + 50;

  while (tasks.length > 0) {
    // Optional chaining operator used here helps to avoid
    // errors in browsers that don't support \`isInputPending\`:
    if (navigator.scheduling?.isInputPending() || performance.now() >= deadline) {
      // There's a pending user input, or the
      // deadline has been reached. Yield here:
      await yieldToMain();

      // Extend the deadline:
      deadline = performance.now() + 50;

      // Stop the execution of the current loop and
      // move onto the next iteration:
      continue;
    }

    // Shift the task out of the queue:
    const task = tasks.shift();

    // Run the task:
    task();
  }
}
\`\`\`

With this approach, you get a fallback for browsers that don't support\xA0\`isInputPending()\`\xA0by using a time-based approach that uses (and adjusts) a deadline so that work will be broken up where necessary, whether by yielding to user input, or by a certain point in time.  

\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u57FA\u4E8E\u65F6\u95F4\u7684\u65B9\u6CD5\u4E3A\u4E0D\u652F\u6301\xA0\`isInputPending()\`\xA0\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u56DE\u9000\uFF0C\u8BE5\u65B9\u6CD5\u4F7F\u7528\uFF08\u5E76\u8C03\u6574\uFF09\u622A\u6B62\u65F6\u95F4\uFF0C\u4EE5\u4FBF\u5728\u5FC5\u8981\u65F6\u5206\u89E3\u5DE5\u4F5C\uFF0C\u65E0\u8BBA\u662F\u901A\u8FC7\u5C48\u670D\u4E8E\u7528\u6237\u8F93\u5165\uFF0C\u8FD8\u662F\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u3002

## Gaps in current APIs

The APIs mentioned so far can help you break up tasks, but they have a significant downside: when you yield to the main thread by deferring code to run in a subsequent task, that code gets added to the very end of the task queue.  
\u5230\u76EE\u524D\u4E3A\u6B62\u63D0\u5230\u7684 API \u53EF\u4EE5\u5E2E\u52A9\u60A8\u5206\u89E3\u4EFB\u52A1\uFF0C\u4F46\u5B83\u4EEC\u6709\u4E00\u4E2A\u660E\u663E\u7684\u7F3A\u70B9\uFF1A\u5F53\u60A8\u901A\u8FC7\u5C06\u4EE3\u7801\u5EF6\u8FDF\u5230\u540E\u7EED\u4EFB\u52A1\u4E2D\u8FD0\u884C\u65F6\u6765\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u65F6\uFF0C\u8BE5\u4EE3\u7801\u4F1A\u88AB\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u7684\u6700\u672B\u5C3E\u3002

If you control all the code on your page, it's possible to create your own scheduler with the ability to prioritize tasks, but third-party scripts won't use your scheduler. In effect, you're not really able to\xA0_prioritize_\xA0work in such environments. You can only chunk it up, or explicitly yield to user interactions.  
\u5982\u679C\u60A8\u63A7\u5236\u9875\u9762\u4E0A\u7684\u6240\u6709\u4EE3\u7801\uFF0C\u5219\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u8BA1\u5212\u7A0B\u5E8F\uFF0C\u5E76\u80FD\u591F\u786E\u5B9A\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u4F46\u7B2C\u4E09\u65B9\u811A\u672C\u4E0D\u4F1A\u4F7F\u7528\u60A8\u7684\u8BA1\u5212\u7A0B\u5E8F\u3002\u5B9E\u9645\u4E0A\uFF0C\u5728\u8FD9\u6837\u7684\u73AF\u5883\u4E2D\uFF0C\u60A8\u5B9E\u9645\u4E0A\u65E0\u6CD5\u786E\u5B9A\u5DE5\u4F5C\u7684\u4F18\u5148\u7EA7\u3002\u60A8\u53EA\u80FD\u5C06\u5176\u5206\u5757\uFF0C\u6216\u663E\u5F0F\u5730\u5C48\u670D\u4E8E\u7528\u6237\u4EA4\u4E92\u3002

Fortunately, there is a dedicated scheduler API that is currently in development that addresses these problems.  
\u5E78\u8FD0\u7684\u662F\uFF0C\u76EE\u524D\u6B63\u5728\u5F00\u53D1\u4E00\u4E2A\u4E13\u7528\u7684\u8C03\u5EA6\u7A0B\u5E8F API \u6765\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002

### A dedicated scheduler API  \u4E13\u7528\u8C03\u5EA6\u7A0B\u5E8F API

The scheduler API currently offers the\xA0\`postTask()\`\xA0function which, at the time of writing, is available in Chromium browsers, and in Firefox behind a flag.\xA0\`postTask()\`\xA0allows for finer-grained scheduling of tasks, and is one way to help the browser prioritize work so that low priority tasks yield to the main thread.\xA0\`postTask()\`\xA0uses promises, and accepts a\xA0\`priority\`\xA0setting.  

\u8C03\u5EA6\u7A0B\u5E8F API \u76EE\u524D\u63D0\u4F9B\u4E86\u8BE5\xA0\`postTask()\`\xA0\u529F\u80FD\uFF0C\u5728\u64B0\u5199\u672C\u6587\u65F6\uFF0C\u8BE5\u529F\u80FD\u5728 Chromium \u6D4F\u89C8\u5668\u548C Firefox \u4E2D\u53EF\u7528\u3002\xA0\`postTask()\`\xA0\u5141\u8BB8\u5BF9\u4EFB\u52A1\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u8C03\u5EA6\uFF0C\u5E76\u4E14\u662F\u5E2E\u52A9\u6D4F\u89C8\u5668\u786E\u5B9A\u5DE5\u4F5C\u4F18\u5148\u7EA7\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u3002\xA0\`postTask()\`\xA0\u4F7F\u7528 promises\uFF0C\u5E76\u63A5\u53D7\u8BBE\u7F6E\xA0\`priority\`\xA0\u3002

The\xA0\`postTask()\`\xA0API has three priorities you can use:  

\u8BE5\xA0\`postTask()\`\xA0API \u6709\u4E09\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684\u4F18\u5148\u7EA7\uFF1A

*   \`'background'\`\xA0for the lowest priority tasks.  

    \`'background'\`\xA0\u5BF9\u4E8E\u4F18\u5148\u7EA7\u6700\u4F4E\u7684\u4EFB\u52A1\u3002
*   \`'user-visible'\`\xA0for medium priority tasks. This is the default if no\xA0\`priority\`\xA0is set.  

    \`'user-visible'\`\xA0\u5BF9\u4E8E\u4E2D\u7B49\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 no\xA0\`priority\`\xA0\uFF0C\u5219\u8FD9\u662F\u9ED8\u8BA4\u503C\u3002
*   \`'user-blocking'\`\xA0for critical tasks that need to run at high priority.  

    \`'user-blocking'\`\xA0\u9002\u7528\u4E8E\u9700\u8981\u4EE5\u9AD8\u4F18\u5148\u7EA7\u8FD0\u884C\u7684\u5173\u952E\u4EFB\u52A1\u3002

Take the following code as an example, where the\xA0\`postTask()\`\xA0API is used to run three tasks at the highest possible priority, and the remaining two tasks at the lowest possible priority.  

\u4EE5\u4EE5\u4E0B\u4EE3\u7801\u4E3A\u4F8B\uFF0C\xA0\`postTask()\`\xA0\u5176\u4E2D API \u7528\u4E8E\u4EE5\u5C3D\u53EF\u80FD\u9AD8\u7684\u4F18\u5148\u7EA7\u8FD0\u884C\u4E09\u4E2A\u4EFB\u52A1\uFF0C\u5E76\u4EE5\u5C3D\u53EF\u80FD\u4F4E\u7684\u4F18\u5148\u7EA7\u8FD0\u884C\u5176\u4F59\u4E24\u4E2A\u4EFB\u52A1\u3002

\`\`\`js
function saveSettings () {
  // Validate the form at high priority
  scheduler.postTask(validateForm, {priority: 'user-blocking'});

  // Show the spinner at high priority:
  scheduler.postTask(showSpinner, {priority: 'user-blocking'});

  // Update the database in the background:
  scheduler.postTask(saveToDatabase, {priority: 'background'});

  // Update the user interface at high priority:
  scheduler.postTask(updateUI, {priority: 'user-blocking'});

  // Send analytics data in the background:
  scheduler.postTask(sendAnalytics, {priority: 'background'});
};
\`\`\`

Here, the priority of tasks is scheduled in such a way that browser-prioritized tasks\u2014such as user interactions\u2014can work their way in.  

\u5728\u8FD9\u91CC\uFF0C\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u662F\u4EE5\u8FD9\u6837\u4E00\u79CD\u65B9\u5F0F\u5B89\u6392\u7684\uFF0C\u5373\u6D4F\u89C8\u5668\u4F18\u5148\u7684\u4EFB\u52A1\uFF08\u4F8B\u5982\u7528\u6237\u4EA4\u4E92\uFF09\u53EF\u4EE5\u53D1\u6325\u4F5C\u7528\u3002

![20231116200045](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116200045.png)
*When\xA0\`saveSettings()\`\xA0is run, the function schedules the individual functions using\xA0\`postTask()\`. The critical user-facing work is scheduled at high priority, while work the user doesn't know about is scheduled to run in the background. This allows for user interactions to execute more quickly, as the work is both broken up\xA0_and_\xA0prioritized appropriately.*

*\`saveSettings()\`\xA0\u8FD0\u884C\u65F6\uFF0C\u8BE5\u51FD\u6570\u4F7F\u7528\xA0\`postTask()\`\xA0\u8C03\u5EA6\u5404\u4E2A\u51FD\u6570\u3002\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u5DE5\u4F5C\u88AB\u5B89\u6392\u4E3A\u9AD8\u4F18\u5148\u7EA7\uFF0C\u800C\u7528\u6237\u4E0D\u77E5\u9053\u7684\u5DE5\u4F5C\u88AB\u5B89\u6392\u5728\u540E\u53F0\u8FD0\u884C\u3002\u8FD9\u5141\u8BB8\u7528\u6237\u4EA4\u4E92\u66F4\u5FEB\u5730\u6267\u884C\uFF0C\u56E0\u4E3A\u5DE5\u4F5C\u88AB\u9002\u5F53\u5730\u5206\u89E3\u548C\u786E\u5B9A\u4F18\u5148\u7EA7\u3002*

This is a simplistic example of how\xA0\`postTask()\`\xA0can be used. It's possible to instantiate different\xA0\`TaskController\`\xA0objects that can share priorities between tasks, including the ability to change priorities for different\xA0\`TaskController\`\xA0instances as needed.  

\u8FD9\u662F\u4E00\u4E2A\u5982\u4F55\u4F7F\u7528\u7684\u7B80\u5355\u793A\u4F8B\xA0\`postTask()\`\xA0\u3002\u53EF\u4EE5\u5B9E\u4F8B\u5316\u53EF\u4EE5\u5728\u4EFB\u52A1\u4E4B\u95F4\u5171\u4EAB\u4F18\u5148\u7EA7\u7684\u4E0D\u540C\xA0\`TaskController\`\xA0\u5BF9\u8C61\uFF0C\u5305\u62EC\u6839\u636E\u9700\u8981\u66F4\u6539\u4E0D\u540C\xA0\`TaskController\`\xA0\u5B9E\u4F8B\u7684\u4F18\u5148\u7EA7\u7684\u80FD\u529B\u3002

:::info
**Key point:**\xA0[\`postTask()\`\xA0is not supported in all browsers](https://caniuse.com/mdn-api_scheduler_posttask). You can use feature detection to see if it's available, or consider using\xA0[a polyfill](https://www.npmjs.com/package/scheduler-polyfill).  

\u5173\u952E\u70B9\uFF1A\xA0\`postTask()\`\xA0\u5E76\u975E\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u7279\u5F81\u68C0\u6D4B\u6765\u67E5\u770B\u5B83\u662F\u5426\u53EF\u7528\uFF0C\u6216\u8005\u8003\u8651\u4F7F\u7528 polyfill\u3002
:::

### Built-in yield with continuation via (\u5185\u7F6E\u4EA7\u91CF\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5EF6\u7EED\`scheduler.yield\`)

:::info
**Key point:**\xA0For a more detailed explanation on\xA0\`scheduler.yield\`, read\xA0[this post about its origin trial](https://developer.chrome.com/blog/introducing-scheduler-yield-origin-trial/), as well as\xA0[its explainer](https://github.com/WICG/scheduling-apis/blob/main/explainers/yield-and-continuation.md).  

\u5173\u952E\u70B9\uFF1A\u6709\u5173\u66F4\xA0\`scheduler.yield\`\xA0\u8BE6\u7EC6\u7684\u89E3\u91CA\uFF0C\u8BF7\u9605\u8BFB\u8FD9\u7BC7\u5173\u4E8E\u5176\u8D77\u6E90\u8BD5\u9A8C\u53CA\u5176\u89E3\u91CA\u5668\u7684\u6587\u7AE0\u3002
:::

*One proposed part of the scheduler API is\xA0\`scheduler.yield\`, an API specifically designed for yielding to the main thread in the browser\xA0[which is currently available to try as an origin trial](https://developer.chrome.com/origintrials/#/view_trial/836543630784069633). Its use resembles the\xA0\`yieldToMain()\`\xA0function demonstrated earlier in this article:*

*\u8C03\u5EA6\u7A0B\u5E8F API \u7684\u4E00\u4E2A\u5EFA\u8BAE\u90E8\u5206\u662F \uFF0C\u8BE5 API \u4E13\u95E8\u8BBE\u8BA1\u7528\u4E8E\u5C48\u670D\u4E8E\u6D4F\u89C8\u5668\u4E2D\u7684\u4E3B\u7EBF\u7A0B\xA0\`scheduler.yield\`\xA0\uFF0C\u76EE\u524D\u53EF\u4F5C\u4E3A\u6E90\u8BD5\u7528\u8FDB\u884C\u5C1D\u8BD5\u3002\u5B83\u7684\u7528\u6CD5\u7C7B\u4F3C\u4E8E\u672C\u6587\u524D\u9762\u6F14\u793A\u7684\xA0\`yieldToMain()\`\xA0\u51FD\u6570\uFF1A*

\`\`\`js
async function saveSettings () {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ]

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread with the scheduler
    // API's own yielding mechanism:
    await scheduler.yield();
  }
}
\`\`\`

You'll note that the code above is largely familiar, but instead of using\xA0\`yieldToMain()\`, you call and\xA0\`await scheduler.yield()\`\xA0instead.  

\u60A8\u4F1A\u6CE8\u610F\u5230\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u662F\u719F\u6089\u7684\uFF0C\u4F46\u4E0D\u662F\u4F7F\u7528\xA0\`yieldToMain()\`\xA0\uFF0C\u800C\u662F\u8C03\u7528 \u548C\xA0\`await scheduler.yield()\`\xA0\u3002

![20231116201606](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116201606.png)
*A visualization of task execution without yielding, with yielding, and with yielding and continuation. When\xA0\`scheduler.yield()\`\xA0is used, task execution picks up where it left off even after the yield point.*

*\u4EFB\u52A1\u6267\u884C\u7684\u53EF\u89C6\u5316\uFF0C\u4E0D\u5C48\u670D\uFF0C\u5C48\u670D\uFF0C\u5C48\u670D\u548C\u5EF6\u7EED\u3002\u4F7F\u7528\u65F6\xA0\`scheduler.yield()\`\xA0\uFF0C\u5373\u4F7F\u5728\u5C48\u670D\u70B9\u4E4B\u540E\uFF0C\u4EFB\u52A1\u6267\u884C\u4E5F\u4F1A\u4ECE\u4E2D\u65AD\u7684\u5730\u65B9\u7EE7\u7EED\u6267\u884C\u3002*

:::info
\u4F7F\u7528\`scheduler.yield()\`\u5206\u5272\u7684\u4EFB\u52A1\u5728\u7D27\u6025\u4EFB\u52A1\uFF08\u5982\u7528\u6237\u4EA4\u4E92\uFF09\u7ED3\u675F\u540E\u4F1A\u63A5\u7740\u8FD0\u884C\uFF0C\u4F46\u662F\u88AB\`yieldToMain()\`\u548C\`await scheduler.yield()\`\u5206\u5272\u7684\u4EFB\u52A1\u4F1A\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E\u3002
:::

The benefit of\xA0\`scheduler.yield()\`\xA0is continuation, which means that if you yield in the middle of a set of tasks, the other scheduled tasks will continue in the same order after the yield point.\xA0**This avoids code from third-party scripts from usurping the order of your code's execution.**  

\u8FD9\u6837\u505A\u7684\u597D\u5904\xA0\`scheduler.yield()\`\xA0\u662F\u5EF6\u7EED\uFF0C\u8FD9\u610F\u5473\u7740\u5982\u679C\u60A8\u5728\u4E00\u7EC4\u4EFB\u52A1\u7684\u4E2D\u95F4\u8BA9\u6B65\uFF0C\u5176\u4ED6\u8BA1\u5212\u4EFB\u52A1\u5C06\u5728\u8BA9\u6B65\u70B9\u4E4B\u540E\u4EE5\u76F8\u540C\u7684\u987A\u5E8F\u7EE7\u7EED\u3002\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u6765\u81EA\u7B2C\u4E09\u65B9\u811A\u672C\u7684\u4EE3\u7801\u7BE1\u593A\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u3002

## Conclusion

Managing tasks is challenging, but doing so helps your page respond more quickly to user interactions. There's no one single piece of advice for managing and prioritizing tasks. Rather, it's a number of different techniques. To reiterate, these are the main things you'll want to consider when managing tasks:  

\u7BA1\u7406\u4EFB\u52A1\u5177\u6709\u6311\u6218\u6027\uFF0C\u4F46\u8FD9\u6837\u505A\u6709\u52A9\u4E8E\u9875\u9762\u66F4\u5FEB\u5730\u54CD\u5E94\u7528\u6237\u4EA4\u4E92\u3002\u6CA1\u6709\u4E00\u6761\u5173\u4E8E\u7BA1\u7406\u548C\u786E\u5B9A\u4EFB\u52A1\u4F18\u5148\u7EA7\u7684\u5EFA\u8BAE\u3002\u76F8\u53CD\uFF0C\u5B83\u662F\u8BB8\u591A\u4E0D\u540C\u7684\u6280\u672F\u3002\u91CD\u7533\u4E00\u4E0B\uFF0C\u8FD9\u4E9B\u662F\u7BA1\u7406\u4EFB\u52A1\u65F6\u8981\u8003\u8651\u7684\u4E3B\u8981\u4E8B\u9879\uFF1A

*   Yield to the main thread for critical, user-facing tasks.  

    \u8BA9\u4F4D\u4E8E\u4E3B\u7EBF\u7A0B\u6267\u884C\u9762\u5411\u7528\u6237\u7684\u5173\u952E\u4EFB\u52A1\u3002
*   Use\xA0\`isInputPending()\`\xA0to yield to the main thread when the user is trying to interact with the page.  

    \u7528\u4E8E\xA0\`isInputPending()\`\xA0\u5728\u7528\u6237\u5C1D\u8BD5\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u5C48\u670D\u4E8E\u4E3B\u7EBF\u7A0B\u3002
*   Prioritize tasks with\xA0\`postTask()\`.  

    \u4F7F\u7528\xA0\`postTask()\`\xA0\u786E\u5B9A\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u3002
*   Finally,\xA0**do as little work as possible in your functions.**  

    \u6700\u540E\uFF0C\u5728\u51FD\u6570\u4E2D\u5C3D\u53EF\u80FD\u5C11\u5730\u505A\u5DE5\u4F5C\u3002

With one or more of these tools, you should be able to structure the work in your application so that it prioritizes the user's needs, while ensuring that less critical work still gets done. That's going to create a better user experience which is more responsive and more enjoyable to use.  

\u4F7F\u7528\u8FD9\u4E9B\u5DE5\u5177\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\uFF0C\u60A8\u5E94\u8BE5\u80FD\u591F\u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5DE5\u4F5C\uFF0C\u4EE5\u4FBF\u5B83\u4F18\u5148\u8003\u8651\u7528\u6237\u7684\u9700\u6C42\uFF0C\u540C\u65F6\u786E\u4FDD\u4ECD\u7136\u5B8C\u6210\u4E0D\u592A\u91CD\u8981\u7684\u5DE5\u4F5C\u3002\u8FD9\u5C06\u521B\u9020\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u54CD\u5E94\u901F\u5EA6\u66F4\u5FEB\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u6109\u5FEB\u3002

_Special thanks to\xA0[Philip Walton](https://philipwalton.com/)\xA0for his technical vetting of this article.  

\u7279\u522B\u611F\u8C22 Philip Walton \u5BF9\u672C\u6587\u7684\u6280\u672F\u5BA1\u67E5\u3002_

_Hero image sourced from\xA0[Unsplash](https://unsplash.com/), courtesy of\xA0[Amirali Mirhashemian](https://unsplash.com/@amir_v_ali).  

\u4E3B\u56FE\u7247\u6765\u81EA Unsplash\uFF0C\u7531 Amirali Mirhashemian \u63D0\u4F9B\u3002_
`;export{p as content,h as default,t as frontmatter,d as lastUpdatedTime,c as title,o as toc};
