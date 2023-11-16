import{jsx as n,jsxs as r,Fragment as i}from"react/jsx-runtime";const a=void 0,t=[{id:"apis-to-help-you-assess-loading-performance-in-the-field--\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684-api",text:"APIs to help you assess loading performance in the field  (\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684 API)",depth:2},{id:"the-life-and-timings-of-a-network-request--\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6",text:"The life and timings of a network request  (\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6)",depth:2},{id:"dns-lookupdns\u67E5\u8BE2",text:"DNS lookup\xA0DNS\u67E5\u8BE2",depth:3},{id:"connection-negotiation\u8FDE\u63A5\u534F\u5546",text:"Connection negotiation\xA0\u8FDE\u63A5\u534F\u5546",depth:3},{id:"requests-and-responses\u8BF7\u6C42\u548C\u54CD\u5E94",text:"Requests and responses\xA0\u8BF7\u6C42\u548C\u54CD\u5E94",depth:3},{id:"other-measurements-you-can-make--\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF",text:"Other measurements you can make  (\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF)",depth:3},{id:"acquiring-timings-in-application-code--\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F",text:"Acquiring timings in application code  (\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F)",depth:2},{id:"phoning-home\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD",text:"Phoning home\xA0\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD",depth:2},{id:"wrapping-up\u7ED3\u675F\u8BED",text:"Wrapping up\xA0\u7ED3\u675F\u8BED",depth:2}],c="\u4F7F\u7528\u5BFC\u822A\u5B9A\u65F6\u548C\u8D44\u6E90\u5B9A\u65F6\u8BC4\u4F30\u73B0\u573A\u7684\u8D1F\u8F7D\u6027\u80FD";function s(l){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",h2:"h2",ul:"ul",li:"li",em:"em",div:"div",button:"button",span:"span",pre:"pre",img:"img",h3:"h3",br:"br"},l.components);return r(i,{children:[r(e.h1,{id:"\u4F7F\u7528\u5BFC\u822A\u5B9A\u65F6\u548C\u8D44\u6E90\u5B9A\u65F6\u8BC4\u4F30\u73B0\u573A\u7684\u8D1F\u8F7D\u6027\u80FD",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u5BFC\u822A\u5B9A\u65F6\u548C\u8D44\u6E90\u5B9A\u65F6\u8BC4\u4F30\u73B0\u573A\u7684\u8D1F\u8F7D\u6027\u80FD",children:"#"}),"\u4F7F\u7528\u5BFC\u822A\u5B9A\u65F6\u548C\u8D44\u6E90\u5B9A\u65F6\u8BC4\u4F30\u73B0\u573A\u7684\u8D1F\u8F7D\u6027\u80FD"]}),`
`,n(e.p,{children:n(e.code,{children:"metadata:"})}),`
`,r(e.p,{children:[n(e.strong,{children:"\u539F\u6807\u9898:"})," Assessing loading performance in the field with Navigation Timing and Resource Timing"]}),`
`,r(e.p,{children:[n(e.strong,{children:"\u94FE\u63A5:"})," ",n(e.a,{href:"https://web.dev/articles/navigation-and-resource-timing",target:"_blank",rel:"nofollow",children:"https://web.dev/articles/navigation-and-resource-timing"})]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Learn the basics of using the Navigation and Resource Timing APIs to assess loading performance in the field."}),`
`,n(e.p,{children:"\u4E86\u89E3\u4F7F\u7528\u5BFC\u822A\u548C\u8D44\u6E90\u8BA1\u65F6 API \u8BC4\u4F30\u5916\u4E1A\u52A0\u8F7D\u6027\u80FD\u7684\u57FA\u7840\u77E5\u8BC6\u3002"}),`
`,n(e.p,{children:"If you've used connection throttling in the network panel in a browser's developer tools (or Lighthouse in Chrome) to assess loading performance, you know how convenient those tools are for performance tuning. You can quickly measure the impact of performance optimizations with a consistent and stable baseline connection speed. The only problem is that this is synthetic testing, which yields lab data, not field data."}),`
`,n(e.p,{children:"\u5982\u679C\u60A8\u66FE\u5728\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u8005\u5DE5\u5177\uFF08\u6216 Chrome \u4E2D\u7684 Lighthouse\uFF09\u7684\u7F51\u7EDC\u9762\u677F\u4E2D\u4F7F\u7528\u8FC7\u8FDE\u63A5\u9650\u5236\u6765\u8BC4\u4F30\u52A0\u8F7D\u6027\u80FD\uFF0C\u60A8\u5C31\u4F1A\u77E5\u9053\u8FD9\u4E9B\u5DE5\u5177\u5728\u6027\u80FD\u8C03\u6574\u65B9\u9762\u662F\u591A\u4E48\u65B9\u4FBF\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4E00\u81F4\u4E14\u7A33\u5B9A\u7684\u57FA\u51C6\u8FDE\u63A5\u901F\u5EA6\u5FEB\u901F\u8861\u91CF\u6027\u80FD\u4F18\u5316\u7684\u5F71\u54CD\u3002\u552F\u4E00\u7684\u95EE\u9898\u662F\uFF0C\u8FD9\u662F\u7EFC\u5408\u6D4B\u8BD5\uFF0C\u5B83\u4EA7\u751F\u7684\u662F\u5B9E\u9A8C\u5BA4\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u73B0\u573A\u6570\u636E\u3002"}),`
`,n(e.p,{children:"Synthetic testing isn't inherently bad, but it's not representative of how fast your website is loading for real users. That requires field data, which you can collect from the Navigation Timing and Resource Timing APIs."}),`
`,n(e.p,{children:"\u7EFC\u5408\u6D4B\u8BD5\u672C\u8EAB\u5E76\u4E0D\u574F\uFF0C\u4F46\u5B83\u5E76\u4E0D\u80FD\u4EE3\u8868\u60A8\u7684\u7F51\u7AD9\u4E3A\u771F\u5B9E\u7528\u6237\u52A0\u8F7D\u7684\u901F\u5EA6\u3002\u8FD9\u9700\u8981\u5B57\u6BB5\u6570\u636E\uFF0C\u60A8\u53EF\u4EE5\u4ECE Navigation Timing \u548C Resource Timing API \u6536\u96C6\u8FD9\u4E9B\u6570\u636E\u3002"}),`
`,r(e.h2,{id:"apis-to-help-you-assess-loading-performance-in-the-field--\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684-api",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#apis-to-help-you-assess-loading-performance-in-the-field--\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684-api",children:"#"}),"APIs to help you assess loading performance in the field  (\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684 API)"]}),`
`,n(e.p,{children:"Navigation Timing and Resource Timing are two similar APIs with significant overlap that measure two distinct things:"}),`
`,n(e.p,{children:"Navigation Timing \u548C Resource Timing \u662F\u4E24\u4E2A\u76F8\u4F3C\u7684 API\uFF0C\u5B83\u4EEC\u6709\u5F88\u5927\u7684\u91CD\u53E0\uFF0C\u7528\u4E8E\u6D4B\u91CF\u4E24\u4E2A\u622A\u7136\u4E0D\u540C\u7684\u5185\u5BB9\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://w3c.github.io/navigation-timing/",target:"_blank",rel:"nofollow",children:"Navigation Timing"}),"\xA0measures the speed of requests for HTML documents (that is, navigation requests)."]}),`
`,n(e.p,{children:"\u5BFC\u822A\u8BA1\u65F6\u6D4B\u91CF HTML \u6587\u6863\u8BF7\u6C42\uFF08\u5373\u5BFC\u822A\u8BF7\u6C42\uFF09\u7684\u901F\u5EA6\u3002"}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://w3c.github.io/resource-timing/",target:"_blank",rel:"nofollow",children:"Resource Timing"}),"\xA0measures the speed of requests for document-dependent resources such as CSS, JavaScript, images, and so on."]}),`
`,n(e.p,{children:"\u8D44\u6E90\u8BA1\u65F6\u6D4B\u91CF\u5BF9\u6587\u6863\u76F8\u5173\u8D44\u6E90\uFF08\u5982 CSS\u3001JavaScript\u3001\u56FE\u50CF\u7B49\uFF09\u7684\u8BF7\u6C42\u901F\u5EA6\u3002"}),`
`]}),`
`]}),`
`,r(e.p,{children:["These APIs expose their data in a\xA0",n(e.em,{children:"performance entry buffer"}),", which can be accessed in the browser with JavaScript. There are multiple ways to query a performance buffer, but a common way is by using\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType",target:"_blank",rel:"nofollow",children:n(e.code,{children:"performance.getEntriesByType"})}),":"]}),`
`,r(e.p,{children:["\u8FD9\u4E9B API \u5728\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u516C\u5F00\u5176\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 JavaScript \u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u8BE5\u7F13\u51B2\u533A\u3002\u6709\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u67E5\u8BE2\u6027\u80FD\u7F13\u51B2\u533A\uFF0C\u4F46\u4E00\u79CD\u5E38\u89C1\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\xA0",n(e.code,{children:"performance.getEntriesByType"}),"\xA0\uFF1A"]}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Get Navigation Timing entries:"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Get Resource Timing entries:"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"resource"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"})]})]}),`
`,r(e.p,{children:[n(e.code,{children:"performance.getEntriesByType"}),"\xA0accepts a string describing the type of entries you want to retrieve from the performance entry buffer.\xA0",n(e.code,{children:"'navigation'"}),"\xA0and\xA0",n(e.code,{children:"'resource'"}),"\xA0retrieve timings for the Navigation Timing and Resource Timing APIs, respectively."]}),`
`,r(e.p,{children:[n(e.code,{children:"performance.getEntriesByType"}),"\xA0\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8BE5\u5B57\u7B26\u4E32\u63CF\u8FF0\u8981\u4ECE\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u68C0\u7D22\u7684\u6761\u76EE\u7C7B\u578B\u3002\xA0",n(e.code,{children:"'navigation'"}),"\xA0\u5E76\xA0",n(e.code,{children:"'resource'"}),"\xA0\u5206\u522B\u68C0\u7D22 Navigation Timing \u548C Resource Timing API \u7684\u8BA1\u65F6\u3002"]}),`
`,r(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),r(e.div,{className:"island-directive-content",children:[r(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0Try loading a website and then enter either of the commands in the above code snippet in your browser's console to see actual timings captured by your browser."]}),n(e.p,{children:"\u6CE8\u610F\uFF1A\u5C1D\u8BD5\u52A0\u8F7D\u7F51\u7AD9\uFF0C\u7136\u540E\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u4E2D\u8F93\u5165\u4E0A\u8FF0\u4EE3\u7801\u7247\u6BB5\u4E2D\u7684\u4EFB\u4F55\u547D\u4EE4\uFF0C\u4EE5\u67E5\u770B\u6D4F\u89C8\u5668\u6355\u83B7\u7684\u5B9E\u9645\u8BA1\u65F6\u3002"})]})]}),`
`,n(e.p,{children:"The amount of information these APIs provide can be overwhelming, but they're your key to measuring loading performance in the field, as you can gather these timings from users as they visit your website."}),`
`,n(e.p,{children:"\u8FD9\u4E9B API \u63D0\u4F9B\u7684\u4FE1\u606F\u91CF\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u4E0D\u77E5\u6240\u63AA\uFF0C\u4F46\u5B83\u4EEC\u662F\u8861\u91CF\u73B0\u573A\u52A0\u8F7D\u6027\u80FD\u7684\u5173\u952E\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u5728\u7528\u6237\u8BBF\u95EE\u60A8\u7684\u7F51\u7AD9\u65F6\u6536\u96C6\u8FD9\u4E9B\u65F6\u95F4\u3002"}),`
`,r(e.h2,{id:"the-life-and-timings-of-a-network-request--\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-life-and-timings-of-a-network-request--\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6",children:"#"}),"The life and timings of a network request  (\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6)"]}),`
`,n(e.p,{children:"Gathering and analyzing navigation and resource timings is sort of like archeology in that you're reconstructing the fleeting life of a network request after the fact. Sometimes it helps to visualize concepts, and where network requests are concerned, your browser's developer tools can help."}),`
`,n(e.p,{children:"\u6536\u96C6\u548C\u5206\u6790\u5BFC\u822A\u548C\u8D44\u6E90\u65F6\u5E8F\u6709\u70B9\u50CF\u8003\u53E4\u5B66\uFF0C\u56E0\u4E3A\u4F60\u662F\u5728\u4E8B\u540E\u91CD\u5EFA\u7F51\u7EDC\u8BF7\u6C42\u7684\u77ED\u6682\u751F\u547D\u3002\u6709\u65F6\uFF0C\u5B83\u6709\u52A9\u4E8E\u53EF\u89C6\u5316\u6982\u5FF5\uFF0C\u800C\u5728\u6D89\u53CA\u7F51\u7EDC\u8BF7\u6C42\u65F6\uFF0C\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u53EF\u4EE5\u63D0\u4F9B\u5E2E\u52A9\u3002"}),`
`,n(e.p,{children:n(e.img,{src:"https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116001628.png",alt:"20231116001628"})}),`
`,r(e.p,{children:["The life of a network request has distinct phases, such as DNS lookup, connection establishment, TLS negotiation, and so on. These timings are represented as a\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp",target:"_blank",rel:"nofollow",children:n(e.code,{children:"DOMHighResTimestamp"})}),". Depending on your browser, the granularity of timings may be down to the microsecond, or be rounded up to milliseconds. Let's examine these phases in detail, and how they relate to Navigation Timing and Resource Timing."]}),`
`,r(e.p,{children:["\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u547D\u5468\u671F\u5177\u6709\u4E0D\u540C\u7684\u9636\u6BB5\uFF0C\u4F8B\u5982 DNS \u67E5\u627E\u3001\u8FDE\u63A5\u5EFA\u7ACB\u3001TLS \u534F\u5546\u7B49\u3002\u8FD9\u4E9B\u8BA1\u65F6\u8868\u793A\u4E3A\xA0",n(e.code,{children:"DOMHighResTimestamp"}),"\xA0.\u6839\u636E\u60A8\u7684\u6D4F\u89C8\u5668\uFF0C\u8BA1\u65F6\u7C92\u5EA6\u53EF\u80FD\u4F4E\u81F3\u5FAE\u79D2\uFF0C\u6216\u56DB\u820D\u4E94\u5165\u5230\u6BEB\u79D2\u3002\u8BA9\u6211\u4EEC\u8BE6\u7EC6\u7814\u7A76\u4E00\u4E0B\u8FD9\u4E9B\u9636\u6BB5\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u4E0E\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u7684\u5173\u7CFB\u3002"]}),`
`,r(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),r(e.div,{className:"island-directive-content",children:[r(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0As you read this guide,\xA0",n(e.a,{href:"https://www.w3.org/TR/navigation-timing-2/#processing-model",target:"_blank",rel:"nofollow",children:"this diagram"}),"\xA0for both Navigation Timing and Resource Timing may help you to visualize the order of the timings they provide."]}),n(e.p,{children:"\u6CE8\u610F\uFF1A\u5728\u9605\u8BFB\u672C\u6307\u5357\u65F6\uFF0C\u6B64\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u56FE\u53EF\u5E2E\u52A9\u60A8\u76F4\u89C2\u5730\u4E86\u89E3\u5B83\u4EEC\u63D0\u4F9B\u7684\u8BA1\u65F6\u987A\u5E8F\u3002"})]})]}),`
`,r(e.h3,{id:"dns-lookupdns\u67E5\u8BE2",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dns-lookupdns\u67E5\u8BE2",children:"#"}),"DNS lookup\xA0DNS\u67E5\u8BE2"]}),`
`,n(e.p,{children:"When a user goes to a URL, the Domain Name System (DNS) is queried to translate a domain to an IP address. This process may take significant time\u2014time you'll want to measure in the field, even. Navigation Timing and Resource Timing expose two DNS-related timings:"}),`
`,n(e.p,{children:"\u5F53\u7528\u6237\u8F6C\u5230 URL \u65F6\uFF0C\u5C06\u67E5\u8BE2\u57DF\u540D\u7CFB\u7EDF \uFF08DNS\uFF09 \u4EE5\u5C06\u57DF\u8F6C\u6362\u4E3A IP \u5730\u5740\u3002\u6B64\u8FC7\u7A0B\u53EF\u80FD\u9700\u8981\u5927\u91CF\u65F6\u95F4\uFF0C\u751A\u81F3\u9700\u8981\u5728\u73B0\u573A\u6D4B\u91CF\u3002\u201C\u5BFC\u822A\u8BA1\u65F6\u201D\u548C\u201C\u8D44\u6E90\u8BA1\u65F6\u201D\u516C\u5F00\u4E86\u4E24\u4E2A\u4E0E DNS \u76F8\u5173\u7684\u8BA1\u65F6\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"domainLookupStart"}),"\xA0is when DNS lookup begins."]}),`
`,r(e.p,{children:[n(e.code,{children:"domainLookupStart"}),"\xA0\u662F DNS \u67E5\u627E\u5F00\u59CB\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"domainLookupEnd"}),"\xA0is when DNS lookup ends."]}),`
`,r(e.p,{children:[n(e.code,{children:"domainLookupEnd"}),"\xA0\u662F DNS \u67E5\u627E\u7ED3\u675F\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Calculating total DNS lookup time can be done by subtracting the start metric from the end metric:"}),`
`,n(e.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u4ECE\u7ED3\u675F\u6307\u6807\u4E2D\u51CF\u53BB\u5F00\u59CB\u6307\u6807\u6765\u8BA1\u7B97\u603B DNS \u67E5\u627E\u65F6\u95F4\uFF1A"}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Measuring DNS lookup time"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"]"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"totalLookupTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"domainLookupEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"domainLookupStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"})]})]}),`
`,r(e.div,{className:"island-directive warning",children:[n(e.p,{className:"island-directive-title",children:"WARNING"}),r(e.div,{className:"island-directive-content",children:[r(e.p,{children:[n(e.strong,{children:"Caution:"}),"\xA0You can't\xA0",n(e.em,{children:"always"}),"\xA0rely on timings to be populated. Timings provided in both APIs will have a value of\xA0",n(e.code,{children:"0"}),"\xA0in some cases. For example, a DNS lookup may be served by a local cache. Additionally, any timings for cross-origin requests may be unavailable if those origins don't set a\xA0",r(e.a,{href:"https://developer.mozilla.org/docs/Web/HTTP/Headers/Timing-Allow-Origin",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"Timing-Allow-Origin"}),"\xA0response header"]}),"."]}),r(e.p,{children:["\u6CE8\u610F\uFF1A\u60A8\u4E0D\u80FD\u603B\u662F\u4F9D\u8D56\u8981\u586B\u5145\u7684\u65F6\u95F4\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E24\u4E2A API \u4E2D\u63D0\u4F9B\u7684\u8BA1\u65F6\u503C\xA0",n(e.code,{children:"0"}),"\xA0\u4E3A \u3002\u4F8B\u5982\uFF0CDNS \u67E5\u627E\u53EF\u80FD\u7531\u672C\u5730\u7F13\u5B58\u63D0\u4F9B\u3002\u6B64\u5916\uFF0C\u5982\u679C\u8DE8\u6E90\u8BF7\u6C42\u672A\u8BBE\u7F6E\xA0",n(e.code,{children:"Timing-Allow-Origin"}),"\xA0\u54CD\u5E94\u6807\u5934\uFF0C\u5219\u8FD9\u4E9B\u8BF7\u6C42\u7684\u4EFB\u4F55\u8BA1\u65F6\u90FD\u53EF\u80FD\u4E0D\u53EF\u7528\u3002"]})]})]}),`
`,r(e.h3,{id:"connection-negotiation\u8FDE\u63A5\u534F\u5546",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#connection-negotiation\u8FDE\u63A5\u534F\u5546",children:"#"}),"Connection negotiation\xA0\u8FDE\u63A5\u534F\u5546"]}),`
`,n(e.p,{children:"Another contributing factor to loading performance is connection negotiation, which is latency incurred when connecting to a web server. If HTTPS is involved, this process will also include TLS negotiation time. The connection phase consists of three timings:"}),`
`,n(e.p,{children:"\u5F71\u54CD\u52A0\u8F7D\u6027\u80FD\u7684\u53E6\u4E00\u4E2A\u56E0\u7D20\u662F\u8FDE\u63A5\u534F\u5546\uFF0C\u8FD9\u662F\u8FDE\u63A5\u5230 Web \u670D\u52A1\u5668\u65F6\u4EA7\u751F\u7684\u5EF6\u8FDF\u3002\u5982\u679C\u6D89\u53CA HTTPS\uFF0C\u5219\u6B64\u8FC7\u7A0B\u8FD8\u5C06\u5305\u62EC TLS \u534F\u5546\u65F6\u95F4\u3002\u8FDE\u63A5\u9636\u6BB5\u5305\u62EC\u4E09\u4E2A\u8BA1\u65F6\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"connectStart"}),"\xA0is when the browser starts to open a connection to a web server."]}),`
`,r(e.p,{children:[n(e.code,{children:"connectStart"}),"\xA0\u662F\u6D4F\u89C8\u5668\u5F00\u59CB\u6253\u5F00\u4E0E Web \u670D\u52A1\u5668\u7684\u8FDE\u63A5\u65F6\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"secureConnectionStart"}),"\xA0marks when the client begins TLS negotiation."]}),`
`,r(e.p,{children:[n(e.code,{children:"secureConnectionStart"}),"\xA0\u6807\u8BB0\u5BA2\u6237\u7AEF\u4F55\u65F6\u5F00\u59CB TLS \u534F\u5546\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"connectEnd"}),"\xA0is when the connection to the web server has been established."]}),`
`,r(e.p,{children:[n(e.code,{children:"connectEnd"}),"\xA0\u662F\u4E0E Web \u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`]}),`
`,r(e.p,{children:["Measuring total connection time is similar to measuring total DNS lookup time: you subtract the start timing from the end timing. However, there's an additional\xA0",n(e.code,{children:"secureConnectionStart"}),"\xA0property that may be\xA0",n(e.code,{children:"0"}),"\xA0if HTTPS isn't used or\xA0",n(e.a,{href:"https://en.wikipedia.org/wiki/HTTP_persistent_connection",target:"_blank",rel:"nofollow",children:"if the connection is persistent"}),". If you want to measure TLS negotiation time, you'll need to keep that in mind:"]}),`
`,r(e.p,{children:["\u6D4B\u91CF\u603B\u8FDE\u63A5\u65F6\u95F4\u4E0E\u6D4B\u91CF\u603B DNS \u67E5\u627E\u65F6\u95F4\u7C7B\u4F3C\uFF1A\u4ECE\u7ED3\u675F\u65F6\u95F4\u4E2D\u51CF\u53BB\u5F00\u59CB\u65F6\u95F4\u3002\u4F46\u662F\uFF0C\xA0",n(e.code,{children:"0"}),"\xA0\u5982\u679C\u4E0D\u4F7F\u7528 HTTPS \u6216\u8FDE\u63A5\u662F\u6301\u4E45\u7684\uFF0C\u5219\u53EF\u80FD\u8FD8\u6709\u4E00\u4E2A\u9644\u52A0\xA0",n(e.code,{children:"secureConnectionStart"}),"\xA0\u5C5E\u6027\u3002\u5982\u679C\u8981\u6D4B\u91CF TLS \u534F\u5546\u65F6\u95F4\uFF0C\u9700\u8981\u7262\u8BB0\u8FD9\u4E00\u70B9\uFF1A"]}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Quantifying total connection time"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"]"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"connectionTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"connectEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"connectStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"let"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"tlsTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// <-- Assume 0 to start with"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Was there TLS negotiation?"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"secureConnectionStart"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Awesome! Calculate it!"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"tlsTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"connectEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"secureConnectionStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"})]})]}),`
`,n(e.p,{children:"Once DNS lookup and connection negotiation ends, timings related to fetching documents and their dependent resources come into play."}),`
`,n(e.p,{children:"\u4E00\u65E6 DNS \u67E5\u627E\u548C\u8FDE\u63A5\u534F\u5546\u7ED3\u675F\uFF0C\u4E0E\u83B7\u53D6\u6587\u6863\u53CA\u5176\u4F9D\u8D56\u8D44\u6E90\u76F8\u5173\u7684\u65F6\u95F4\u5C31\u4F1A\u53D1\u6325\u4F5C\u7528\u3002"}),`
`,r(e.h3,{id:"requests-and-responses\u8BF7\u6C42\u548C\u54CD\u5E94",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#requests-and-responses\u8BF7\u6C42\u548C\u54CD\u5E94",children:"#"}),"Requests and responses\xA0\u8BF7\u6C42\u548C\u54CD\u5E94"]}),`
`,n(e.p,{children:"Loading performance is affected by two types of factors:"}),`
`,n(e.p,{children:"\u52A0\u8F7D\u6027\u80FD\u53D7\u4EE5\u4E0B\u4E24\u79CD\u56E0\u7D20\u7684\u5F71\u54CD\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:"Extrinsic factors:"}),"\xA0These are things like latency and bandwidth. Beyond choosing a hosting company and a CDN, they're (mostly) out of our control, as users can access the web from anywhere."]}),`
`,n(e.p,{children:"\u5916\u90E8\u56E0\u7D20\uFF1A\u8FD9\u4E9B\u56E0\u7D20\u5305\u62EC\u5EF6\u8FDF\u548C\u5E26\u5BBD\u7B49\u56E0\u7D20\u3002\u9664\u4E86\u9009\u62E9\u6258\u7BA1\u516C\u53F8\u548C CDN \u4E4B\u5916\uFF0C\u5B83\u4EEC\uFF08\u5927\u90E8\u5206\uFF09\u8D85\u51FA\u4E86\u6211\u4EEC\u7684\u63A7\u5236\u8303\u56F4\uFF0C\u56E0\u4E3A\u7528\u6237\u53EF\u4EE5\u4ECE\u4EFB\u4F55\u5730\u65B9\u8BBF\u95EE\u7F51\u7EDC\u3002"}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:"Intrinsic factors:"}),"\xA0These are things like server and client-side architectures, as well as resource size and our ability to optimize for those things, which are within our control."]}),`
`,n(e.p,{children:"\u5185\u5728\u56E0\u7D20\uFF1A\u8FD9\u4E9B\u56E0\u7D20\u5305\u62EC\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u67B6\u6784\uFF0C\u4EE5\u53CA\u8D44\u6E90\u5927\u5C0F\u548C\u6211\u4EEC\u9488\u5BF9\u8FD9\u4E9B\u56E0\u7D20\u8FDB\u884C\u4F18\u5316\u7684\u80FD\u529B\uFF0C\u8FD9\u4E9B\u56E0\u7D20\u90FD\u5728\u6211\u4EEC\u7684\u63A7\u5236\u8303\u56F4\u5185\u3002"}),`
`]}),`
`]}),`
`,n(e.p,{children:"Both types of factors affect loading performance. Timings related to these factors are vital, as they describe how long resources take to download. Both Navigation Timing and Resource Timing describe loading performance with the following metrics:"}),`
`,n(e.p,{children:"\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u56E0\u7D20\u90FD\u4F1A\u5F71\u54CD\u52A0\u8F7D\u6027\u80FD\u3002\u4E0E\u8FD9\u4E9B\u56E0\u7D20\u76F8\u5173\u7684\u65F6\u95F4\u81F3\u5173\u91CD\u8981\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u63CF\u8FF0\u4E86\u4E0B\u8F7D\u8D44\u6E90\u6240\u9700\u7684\u65F6\u95F4\u3002\u201C\u5BFC\u822A\u8BA1\u65F6\u201D\u548C\u201C\u8D44\u6E90\u8BA1\u65F6\u201D\u90FD\u4F7F\u7528\u4EE5\u4E0B\u6307\u6807\u63CF\u8FF0\u52A0\u8F7D\u6027\u80FD\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"fetchStart"}),"\xA0marks when the browser begins to fetch a resource (Resource Timing) or a document for a navigation request (Navigation Timing). This precedes the actual request, and is the point at which the browser is checking caches (for example, HTTP and\xA0",r(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Cache",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"Cache"}),"\xA0instances"]}),")."]}),`
`,r(e.p,{children:[n(e.code,{children:"fetchStart"}),"\xA0\u6807\u8BB0\u6D4F\u89C8\u5668\u4F55\u65F6\u5F00\u59CB\u83B7\u53D6\u8D44\u6E90\uFF08\u8D44\u6E90\u8BA1\u65F6\uFF09\u6216\u5BFC\u822A\u8BF7\u6C42\u7684\u6587\u6863\uFF08\u5BFC\u822A\u8BA1\u65F6\uFF09\u3002\u8FD9\u5148\u4E8E\u5B9E\u9645\u8BF7\u6C42\uFF0C\u5E76\u4E14\u662F\u6D4F\u89C8\u5668\u68C0\u67E5\u7F13\u5B58\uFF08\u4F8B\u5982\uFF0CHTTP \u548C\xA0",n(e.code,{children:"Cache"}),"\xA0\u5B9E\u4F8B\uFF09\u7684\u70B9\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"workerStart"}),"\xA0marks when a request starts being handled within a service worker's\xA0",r(e.a,{href:"https://developer.mozilla.org/docs/Web/API/FetchEvent",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"fetch"}),"\xA0event handler"]}),". This will be\xA0",n(e.code,{children:"0"}),"\xA0when no service worker is controlling the current page."]}),`
`,r(e.p,{children:[n(e.code,{children:"workerStart"}),"\xA0\u6807\u8BB0\u4F55\u65F6\u5F00\u59CB\u5728 Service Worker\xA0",n(e.code,{children:"fetch"}),"\xA0\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u5904\u7406\u8BF7\u6C42\u3002\u8FD9\u5C06\u662F\u5F53\u6CA1\u6709 Service Worker \u63A7\u5236\u5F53\u524D\u9875\u9762\xA0",n(e.code,{children:"0"}),"\xA0\u65F6\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"requestStart"}),"\xA0is when the browser makes the request."]}),`
`,r(e.p,{children:[n(e.code,{children:"requestStart"}),"\xA0\u662F\u6D4F\u89C8\u5668\u53D1\u51FA\u8BF7\u6C42\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"responseStart"}),"\xA0is when the first byte of the response arrives."]}),`
`,r(e.p,{children:[n(e.code,{children:"responseStart"}),"\xA0\u662F\u54CD\u5E94\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u5230\u8FBE\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.code,{children:"responseEnd"}),"\xA0is when the last byte of the response arrives."]}),`
`,r(e.p,{children:[n(e.code,{children:"responseEnd"}),"\xA0\u662F\u54CD\u5E94\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u8282\u5230\u8FBE\u7684\u65F6\u95F4\u3002"]}),`
`]}),`
`]}),`
`,r(e.p,{children:["These timings allow you to measure multiple aspects of loading performance, such as cache lookup within a service worker\xA0",n(e.em,{children:"and"}),"\xA0download time:"]}),`
`,n(e.p,{children:"\u8FD9\u4E9B\u8BA1\u65F6\u5141\u8BB8\u60A8\u8861\u91CF\u52A0\u8F7D\u6027\u80FD\u7684\u591A\u4E2A\u65B9\u9762\uFF0C\u4F8B\u5982 Service Worker \u4E2D\u7684\u7F13\u5B58\u67E5\u627E\u548C\u4E0B\u8F7D\u65F6\u95F4\uFF1A"}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Cache seek plus response time of the current document"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"]"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"fetchTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"fetchStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Service worker time plus response time"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"let"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"workerTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"workerStart"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"workerTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"workerStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"})]})]}),`
`,n(e.p,{children:"You can also measure other aspects of request/response latency:"}),`
`,n(e.p,{children:"\u60A8\u8FD8\u53EF\u4EE5\u6D4B\u91CF\u8BF7\u6C42/\u54CD\u5E94\u5EF6\u8FDF\u7684\u5176\u4ED6\u65B9\u9762\uFF1A"}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"]"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntriesByType"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Request time only (excluding redirects, DNS, and connection/TLS time)"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"requestTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseStart"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"requestStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Response time only (download)"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"responseTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Request + response time"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"requestResponseTime"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"responseEnd"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"pageNav"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"requestStart"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"})]})]}),`
`,r(e.h3,{id:"other-measurements-you-can-make--\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#other-measurements-you-can-make--\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF",children:"#"}),"Other measurements you can make  (\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF)"]}),`
`,n(e.p,{children:"Navigation Timing and Resource Timing is useful for more than what the examples above outline. Here are some other situations with relevant timings that may be worth exploring:"}),`
`,n(e.p,{children:"\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u7684\u7528\u9014\u8FDC\u4E0D\u6B62\u4E0A\u8FF0\u793A\u4F8B\u6240\u6982\u8FF0\u7684\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5176\u4ED6\u60C5\u51B5\uFF0C\u8FD9\u4E9B\u60C5\u51B5\u53EF\u80FD\u503C\u5F97\u63A2\u8BA8\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:"Page redirects:"}),"\xA0Redirects are an overlooked source of added latency, especially redirect chains. Latency gets added in a number of ways, such as HTTP-to-HTTPs hops, as well as 302/uncached 301 redirects. The\xA0",n(e.code,{children:"redirectStart"}),",\xA0",n(e.code,{children:"redirectEnd"}),", and\xA0",n(e.code,{children:"redirectCount"}),"\xA0timings are helpful in assessing redirect latency."]}),`
`,r(e.p,{children:["\u9875\u9762\u91CD\u5B9A\u5411\uFF1A\u91CD\u5B9A\u5411\u662F\u5BFC\u81F4\u5EF6\u8FDF\u589E\u52A0\u7684\u4E00\u4E2A\u88AB\u5FFD\u89C6\u7684\u6765\u6E90\uFF0C\u5C24\u5176\u662F\u91CD\u5B9A\u5411\u94FE\u3002\u5EF6\u8FDF\u4EE5\u591A\u79CD\u65B9\u5F0F\u589E\u52A0\uFF0C\u4F8B\u5982 HTTP \u5230 HTTPs \u8DC3\u70B9\uFF0C\u4EE5\u53CA 302/\u672A\u7F13\u5B58\u7684 301 \u91CD\u5B9A\u5411\u3002\xA0",n(e.code,{children:"redirectStart"}),"\xA0\u3001\xA0",n(e.code,{children:"redirectEnd"}),"\xA0\u548C\xA0",n(e.code,{children:"redirectCount"}),"\xA0\u8BA1\u65F6\u6709\u52A9\u4E8E\u8BC4\u4F30\u91CD\u5B9A\u5411\u5EF6\u8FDF\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:"Document unloading:"}),"\xA0In pages that run code in an\xA0",r(e.a,{href:"https://developer.mozilla.org/docs/Web/Events/unload",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"unload"}),"\xA0event handler"]}),", the browser must execute that code before it can navigate to the next page.\xA0",n(e.code,{children:"unloadEventStart"}),"\xA0and\xA0",n(e.code,{children:"unloadEventEnd"}),"\xA0measure document unloading."]}),`
`,r(e.p,{children:["\u6587\u6863\u5378\u8F7D\uFF1A\u5728\xA0",n(e.code,{children:"unload"}),"\xA0\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u9875\u9762\u4E2D\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u5148\u6267\u884C\u8BE5\u4EE3\u7801\uFF0C\u7136\u540E\u624D\u80FD\u5BFC\u822A\u5230\u4E0B\u4E00\u9875\u3002\xA0",n(e.code,{children:"unloadEventStart"}),"\xA0\u5E76\xA0",n(e.code,{children:"unloadEventEnd"}),"\xA0\u6D4B\u91CF\u6587\u6863\u5378\u8F7D\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:"Document processing:"}),"\xA0Document processing time may not be consequential unless your website sends very large HTML payloads. If this describes your situation, the\xA0",n(e.code,{children:"domInteractive"}),",\xA0",n(e.code,{children:"domContentLoadedEventStart"}),",\xA0",n(e.code,{children:"domContentLoadedEventEnd"}),", and\xA0",n(e.code,{children:"domComplete"}),"\xA0timings may be of interest."]}),`
`,r(e.p,{children:["\u6587\u6863\u5904\u7406\uFF1A\u9664\u975E\u60A8\u7684\u7F51\u7AD9\u53D1\u9001\u975E\u5E38\u5927\u7684 HTML \u6709\u6548\u8D1F\u8F7D\uFF0C\u5426\u5219\u6587\u6863\u5904\u7406\u65F6\u95F4\u53EF\u80FD\u65E0\u5173\u7D27\u8981\u3002\u5982\u679C\u8FD9\u63CF\u8FF0\u4E86\u60A8\u7684\u60C5\u51B5\uFF0C\u5219 \u3001\xA0",n(e.code,{children:"domInteractive"}),"\xA0\u3001\xA0",n(e.code,{children:"domContentLoadedEventStart"}),"\xA0",n(e.code,{children:"domContentLoadedEventEnd"}),"\xA0\u548C\xA0",n(e.code,{children:"domComplete"}),"\xA0\u65F6\u95F4\u53EF\u80FD\u4F1A\u5F15\u8D77\u60A8\u7684\u5174\u8DA3\u3002"]}),`
`]}),`
`]}),`
`,r(e.div,{className:"island-directive warning",children:[n(e.p,{className:"island-directive-title",children:"WARNING"}),r(e.div,{className:"island-directive-content",children:[r(e.p,{children:[n(e.strong,{children:"Warning:"}),"\xA0Timings related to document unloading and processing are available only in Navigation Timing, as they only apply to navigation requests."]}),n(e.p,{children:"\u8B66\u544A\uFF1A\u4E0E\u6587\u6863\u5378\u8F7D\u548C\u5904\u7406\u76F8\u5173\u7684\u8BA1\u65F6\u4EC5\u5728\u5BFC\u822A\u8BA1\u65F6\u4E2D\u53EF\u7528\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4EC5\u9002\u7528\u4E8E\u5BFC\u822A\u8BF7\u6C42\u3002"})]})]}),`
`,r(e.h2,{id:"acquiring-timings-in-application-code--\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#acquiring-timings-in-application-code--\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F",children:"#"}),"Acquiring timings in application code  (\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F)"]}),`
`,r(e.p,{children:["All of the examples shown so far use\xA0",n(e.code,{children:"performance.getEntriesByType"}),", but there are other ways to query the performance entry buffer, such as\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName",target:"_blank",rel:"nofollow",children:n(e.code,{children:"performance.getEntriesByName"})}),"\xA0and\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Performance/getEntries",target:"_blank",rel:"nofollow",children:n(e.code,{children:"performance.getEntries"})}),". These methods are fine when only light analysis is needed. In other situations, though, they can introduce excessive main thread work by iterating over a large number of entries, or even repeatedly polling the performance buffer to find new entries."]}),`
`,r(e.p,{children:["\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u663E\u793A\u7684\u6240\u6709\u793A\u4F8B\u90FD\u4F7F\u7528\xA0",n(e.code,{children:"performance.getEntriesByType"}),"\xA0\uFF0C\u4F46\u8FD8\u6709\u5176\u4ED6\u65B9\u6CD5\u53EF\u4EE5\u67E5\u8BE2\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\uFF0C\u4F8B\u5982\xA0",n(e.code,{children:"performance.getEntriesByName"}),"\xA0\u548C\xA0",n(e.code,{children:"performance.getEntries"}),"\xA0\u3002\u5F53\u53EA\u9700\u8981\u5149\u5206\u6790\u65F6\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5F88\u597D\u3002\u4F46\u662F\uFF0C\u5728\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4F1A\u901A\u8FC7\u8FED\u4EE3\u5927\u91CF\u6761\u76EE\uFF0C\u751A\u81F3\u91CD\u590D\u8F6E\u8BE2\u6027\u80FD\u7F13\u51B2\u533A\u4EE5\u67E5\u627E\u65B0\u6761\u76EE\u6765\u5F15\u5165\u8FC7\u591A\u7684\u4E3B\u7EBF\u7A0B\u5DE5\u4F5C\u3002"]}),`
`,r(e.p,{children:["The recommended approach for collecting entries from the performance entry buffer is to use a\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/PerformanceObserver",target:"_blank",rel:"nofollow",children:n(e.code,{children:"PerformanceObserver"})}),".\xA0",n(e.code,{children:"PerformanceObserver"}),"\xA0listens for performance entries, and provides them as they're added to the buffer:"]}),`
`,r(e.p,{children:["\u4ECE\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u6536\u96C6\u6761\u76EE\u7684\u63A8\u8350\u65B9\u6CD5\u662F\u4F7F\u7528\xA0",n(e.code,{children:"PerformanceObserver"}),"\xA0.\xA0",n(e.code,{children:"PerformanceObserver"}),"\xA0\u4FA6\u542C\u6027\u80FD\u6761\u76EE\uFF0C\u5E76\u5728\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230\u7F13\u51B2\u533A\u65F6\u63D0\u4F9B\u5B83\u4EEC\uFF1A"]}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Create the performance observer:"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"perfObserver"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"PerformanceObserver"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"observedEntries"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Get all resource entries collected so far:"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"entries"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"observedEntries"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntries"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Iterate over entries:"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"for"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#81A1C1"},children:"let"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"i"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"i"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"<"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"entries"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"i"}),n(e.span,{style:{color:"#81A1C1"},children:"++"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Do the work!"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Run the observer for Navigation Timing entries:"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"perfObserver"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"observe"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"type"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"navigation"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"buffered"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Run the observer for Resource Timing entries:"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"perfObserver"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"observe"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"type"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"resource"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"buffered"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"}),n(e.span,{className:"line-number",children:"22"})]})]}),`
`,r(e.div,{className:"island-directive info",children:[n(e.p,{className:"island-directive-title",children:"INFO"}),r(e.div,{className:"island-directive-content",children:[r(e.p,{children:[n(e.strong,{children:"Note:"}),"\xA0Adding the\xA0",n(e.code,{children:"buffered"}),"\xA0option to a performance observer's\xA0",n(e.code,{children:"observe"}),"\xA0event ensures that performance entries added to the buffer prior to the instantiation of the performance observer are observable."]}),r(e.p,{children:["\u6CE8\uFF1A \u5C06\u9009\u9879\xA0",n(e.code,{children:"buffered"}),"\xA0\u6DFB\u52A0\u5230\u6027\u80FD\u89C2\u5BDF\u7A0B\u5E8F\xA0",n(e.code,{children:"observe"}),"\xA0\u7684\u4E8B\u4EF6\u53EF\u786E\u4FDD\u5728\u6027\u80FD\u89C2\u5BDF\u7A0B\u5E8F\u5B9E\u4F8B\u5316\u4E4B\u524D\u6DFB\u52A0\u5230\u7F13\u51B2\u533A\u7684\u6027\u80FD\u6761\u76EE\u662F\u53EF\u89C2\u5BDF\u7684\u3002"]})]})]}),`
`,n(e.p,{children:"This method of collecting timings may feel awkward when compared to directly accessing the performance entry buffer, but it's preferable to tying up the main thread with work that doesn't serve a critical and user-facing purpose."}),`
`,n(e.p,{children:"\u4E0E\u76F4\u63A5\u8BBF\u95EE\u6027\u80FD\u8F93\u5165\u7F13\u51B2\u533A\u76F8\u6BD4\uFF0C\u8FD9\u79CD\u6536\u96C6\u8BA1\u65F6\u7684\u65B9\u6CD5\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u611F\u5230\u5C34\u5C2C\uFF0C\u4F46\u6700\u597D\u4E0D\u8981\u5C06\u4E3B\u7EBF\u7A0B\u4E0E\u4E0D\u7528\u4E8E\u5173\u952E\u548C\u9762\u5411\u7528\u6237\u7684\u5DE5\u4F5C\u6346\u7ED1\u5728\u4E00\u8D77\u3002"}),`
`,r(e.h2,{id:"phoning-home\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#phoning-home\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD",children:"#"}),"Phoning home\xA0\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD"]}),`
`,r(e.p,{children:["Once you've collected all the timings you need, you can send them to an endpoint for further analysis. Two ways to do this are with either\xA0",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon",target:"_blank",rel:"nofollow",children:n(e.code,{children:"navigator.sendBeacon"})}),"\xA0or a\xA0",r(e.a,{href:"https://developer.mozilla.org/docs/Web/API/fetch",target:"_blank",rel:"nofollow",children:[n(e.code,{children:"fetch"}),"\xA0with the\xA0",n(e.code,{children:"keepalive"}),"\xA0option"]}),"\xA0set. Both methods will send a request to a specified endpoint in a non-blocking way, and the request will be queued in a way that outlives the current page session if need be:"]}),`
`,r(e.p,{children:["\u6536\u96C6\u6240\u9700\u7684\u6240\u6709\u8BA1\u65F6\u540E\uFF0C\u53EF\u4EE5\u5C06\u5B83\u4EEC\u53D1\u9001\u5230\u7EC8\u7ED3\u70B9\u8FDB\u884C\u8FDB\u4E00\u6B65\u5206\u6790\u3002\u6267\u884C\u6B64\u64CD\u4F5C\u7684\u4E24\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528\xA0",n(e.code,{children:"keepalive"}),"\xA0\u9009\u9879\u96C6\u6216\xA0",n(e.code,{children:"navigator.sendBeacon"}),"\xA0\u9009\u9879\xA0",n(e.code,{children:"fetch"}),"\xA0\u96C6\u3002\u8FD9\u4E24\u79CD\u65B9\u6CD5\u90FD\u5C06\u4EE5\u975E\u963B\u585E\u65B9\u5F0F\u5411\u6307\u5B9A\u7684\u7EC8\u7ED3\u70B9\u53D1\u9001\u8BF7\u6C42\uFF0C\u5982\u679C\u9700\u8981\uFF0C\u8BF7\u6C42\u5C06\u4EE5\u6BD4\u5F53\u524D\u9875\u9762\u4F1A\u8BDD\u66F4\u957F\u7684\u65B9\u5F0F\u6392\u961F\uFF1A"]}),`
`,r(e.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:r(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Caution: If you have lots of performance entries, don't"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// do this. This is an example for illustrative purposes."})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"JSON"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"stringify"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"performance"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"getEntries"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()))"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// The endpoint to transmit the encoded data to"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"endpoint"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"/analytics"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Check for fetch keepalive support"})}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"keepalive"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"in"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"Request"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9FF"},children:"prototype) "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"fetch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"endpoint"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"method"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"POST"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"body"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"keepalive"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#88C0D0"},children:"headers"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"Content-Type"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"application/json"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"else"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"sendBeacon"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"in"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"navigator"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Use sendBeacon as a fallback"})]}),`
`,r(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"navigator"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"sendBeacon"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"endpoint"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),r(e.div,{className:"line-numbers-wrapper",children:[n(e.span,{className:"line-number",children:"1"}),n(e.span,{className:"line-number",children:"2"}),n(e.span,{className:"line-number",children:"3"}),n(e.span,{className:"line-number",children:"4"}),n(e.span,{className:"line-number",children:"5"}),n(e.span,{className:"line-number",children:"6"}),n(e.span,{className:"line-number",children:"7"}),n(e.span,{className:"line-number",children:"8"}),n(e.span,{className:"line-number",children:"9"}),n(e.span,{className:"line-number",children:"10"}),n(e.span,{className:"line-number",children:"11"}),n(e.span,{className:"line-number",children:"12"}),n(e.span,{className:"line-number",children:"13"}),n(e.span,{className:"line-number",children:"14"}),n(e.span,{className:"line-number",children:"15"}),n(e.span,{className:"line-number",children:"16"}),n(e.span,{className:"line-number",children:"17"}),n(e.span,{className:"line-number",children:"18"}),n(e.span,{className:"line-number",children:"19"}),n(e.span,{className:"line-number",children:"20"}),n(e.span,{className:"line-number",children:"21"})]})]}),`
`,r(e.p,{children:["In this example, the JSON string will arrive in a\xA0",n(e.code,{children:"POST"}),"\xA0payload that you can decode and process/store in an application backend as needed."]}),`
`,r(e.p,{children:["\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0CJSON \u5B57\u7B26\u4E32\u5C06\u5230\u8FBE\u6709\u6548\xA0",n(e.code,{children:"POST"}),"\xA0\u8D1F\u8F7D\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u5728\u5E94\u7528\u7A0B\u5E8F\u540E\u7AEF\u4E2D\u89E3\u7801\u548C\u5904\u7406/\u5B58\u50A8\u8BE5\u6709\u6548\u8D1F\u8F7D\u3002"]}),`
`,r(e.h2,{id:"wrapping-up\u7ED3\u675F\u8BED",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#wrapping-up\u7ED3\u675F\u8BED",children:"#"}),"Wrapping up\xA0\u7ED3\u675F\u8BED"]}),`
`,n(e.p,{children:"Once you have metrics collected, it's up to you to figure out how to analyze that field data. When analyzing field data, there are a few general rules to follow to ensure you're drawing meaningful conclusions:"}),`
`,n(e.p,{children:"\u6536\u96C6\u6307\u6807\u540E\uFF0C\u7531\u60A8\u51B3\u5B9A\u5982\u4F55\u5206\u6790\u8BE5\u5B57\u6BB5\u6570\u636E\u3002\u5728\u5206\u6790\u5916\u4E1A\u6570\u636E\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u4E00\u4E9B\u4E00\u822C\u89C4\u5219\uFF0C\u4EE5\u786E\u4FDD\u5F97\u51FA\u6709\u610F\u4E49\u7684\u7ED3\u8BBA\uFF1A"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://www.igvita.com/2016/01/12/the-average-page-is-a-myth/",target:"_blank",rel:"nofollow",children:"Avoid averages"}),", as they're not representative of any one user's experience, and may be skewed by outliers."]}),`
`,n(e.p,{children:"\u907F\u514D\u4F7F\u7528\u5E73\u5747\u503C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u80FD\u4EE3\u8868\u4EFB\u4F55\u4E00\u4E2A\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u56E0\u5F02\u5E38\u503C\u800C\u51FA\u73B0\u504F\u5DEE\u3002"}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"Rely on percentiles. In datasets of time-based performance metrics, lower is better. This means that when you prioritize low percentiles, you're only paying attention to the fastest experiences."}),`
`,n(e.p,{children:"\u4F9D\u9760\u767E\u5206\u4F4D\u6570\u3002\u5728\u57FA\u4E8E\u65F6\u95F4\u7684\u6027\u80FD\u6307\u6807\u6570\u636E\u96C6\u4E2D\uFF0C\u8D8A\u4F4E\u8D8A\u597D\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u60A8\u4F18\u5148\u8003\u8651\u4F4E\u767E\u5206\u4F4D\u6570\u65F6\uFF0C\u60A8\u53EA\u4F1A\u5173\u6CE8\u6700\u5FEB\u7684\u4F53\u9A8C\u3002"}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://timkadlec.com/remembers/2018-06-07-prioritizing-the-long-tail-of-performance/",target:"_blank",rel:"nofollow",children:"Prioritize the long tail of values"}),". When you prioritize experiences at the 75th percentile or higher, you're putting your focus where it belongs: on the slowest experiences."]}),`
`,n(e.p,{children:"\u4F18\u5148\u8003\u8651\u503C\u7684\u957F\u5C3E\u3002\u5F53\u60A8\u5C06\u4F53\u9A8C\u7684\u4F18\u5148\u7EA7\u6392\u5728\u7B2C 75 \u4E2A\u767E\u5206\u4F4D\u6216\u66F4\u9AD8\u65F6\uFF0C\u60A8\u5C31\u5C06\u91CD\u70B9\u653E\u5728\u4E86\u5B83\u6240\u5C5E\u7684\u5730\u65B9\uFF1A\u6700\u6162\u7684\u4F53\u9A8C\u4E0A\u3002"}),`
`]}),`
`]}),`
`,r(e.p,{children:["This guide isn't meant to be an exhaustive resource on Navigation or Resource Timing, but a starting point. Below are some additional resources you may find helpful:",n(e.br,{}),`
`,"\u672C\u6307\u5357\u5E76\u4E0D\u662F\u6709\u5173\u5BFC\u822A\u6216\u8D44\u6E90\u8BA1\u65F6\u7684\u8BE6\u5C3D\u8D44\u6E90\uFF0C\u800C\u662F\u4E00\u4E2A\u8D77\u70B9\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53EF\u80FD\u5BF9\u60A8\u6709\u5E2E\u52A9\u7684\u5176\u4ED6\u8D44\u6E90\uFF1A"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://www.w3.org/TR/navigation-timing-2/",target:"_blank",rel:"nofollow",children:"Navigation Timing Spec"}),".\xA0\u5BFC\u822A\u65F6\u5E8F\u89C4\u8303"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://www.w3.org/TR/resource-timing-2/",target:"_blank",rel:"nofollow",children:"Resource Timing Spec"}),".\xA0\u8D44\u6E90\u8BA1\u65F6\u89C4\u8303"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.a,{href:"https://nicj.net/resourcetiming-in-practice/",target:"_blank",rel:"nofollow",children:"ResourceTiming in Practice"}),"."]}),`
`,n(e.p,{children:"ResourceTiming \u5728\u5B9E\u8DF5\u4E2D\u3002"}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"[Navigation Timing API (MDN)"}),`
`,r(e.p,{children:["\u5BFC\u822A\u8BA1\u65F6 API \uFF08MDN\uFF09](",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Navigation_timing_API",target:"_blank",rel:"nofollow",children:"https://developer.mozilla.org/docs/Web/API/Navigation_timing_API"}),")"]}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"[Resource Timing API (MDN)"}),`
`,r(e.p,{children:["\u8D44\u6E90\u8BA1\u65F6 API \uFF08MDN\uFF09](",n(e.a,{href:"https://developer.mozilla.org/docs/Web/API/Resource_Timing_API",target:"_blank",rel:"nofollow",children:"https://developer.mozilla.org/docs/Web/API/Resource_Timing_API"}),")"]}),`
`]}),`
`]}),`
`,n(e.p,{children:"With these APIs and the data they provide, you'll be better equipped to understand how loading performance is experienced by real users, which will give you more confidence in diagnosing and addressing loading performance problems in the field."}),`
`,n(e.p,{children:"\u501F\u52A9\u8FD9\u4E9B API \u53CA\u5176\u63D0\u4F9B\u7684\u6570\u636E\uFF0C\u60A8\u5C06\u80FD\u591F\u66F4\u597D\u5730\u4E86\u89E3\u771F\u5B9E\u7528\u6237\u5BF9\u52A0\u8F7D\u6027\u80FD\u7684\u4F53\u9A8C\uFF0C\u8FD9\u5C06\u4F7F\u60A8\u5728\u73B0\u573A\u8BCA\u65AD\u548C\u89E3\u51B3\u52A0\u8F7D\u6027\u80FD\u95EE\u9898\u65F6\u66F4\u6709\u4FE1\u5FC3\u3002"})]})}function d(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(s,l)})):s(l)}const h="2023/11/16 20:32:02",p=`# \u4F7F\u7528\u5BFC\u822A\u5B9A\u65F6\u548C\u8D44\u6E90\u5B9A\u65F6\u8BC4\u4F30\u73B0\u573A\u7684\u8D1F\u8F7D\u6027\u80FD

\`metadata:\`

**\u539F\u6807\u9898:** Assessing loading performance in the field with Navigation Timing and Resource Timing

**\u94FE\u63A5:** https://web.dev/articles/navigation-and-resource-timing

---

Learn the basics of using the Navigation and Resource Timing APIs to assess loading performance in the field.

\u4E86\u89E3\u4F7F\u7528\u5BFC\u822A\u548C\u8D44\u6E90\u8BA1\u65F6 API \u8BC4\u4F30\u5916\u4E1A\u52A0\u8F7D\u6027\u80FD\u7684\u57FA\u7840\u77E5\u8BC6\u3002

If you've used connection throttling in the network panel in a browser's developer tools (or Lighthouse in Chrome) to assess loading performance, you know how convenient those tools are for performance tuning. You can quickly measure the impact of performance optimizations with a consistent and stable baseline connection speed. The only problem is that this is synthetic testing, which yields lab data, not field data.

\u5982\u679C\u60A8\u66FE\u5728\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u8005\u5DE5\u5177\uFF08\u6216 Chrome \u4E2D\u7684 Lighthouse\uFF09\u7684\u7F51\u7EDC\u9762\u677F\u4E2D\u4F7F\u7528\u8FC7\u8FDE\u63A5\u9650\u5236\u6765\u8BC4\u4F30\u52A0\u8F7D\u6027\u80FD\uFF0C\u60A8\u5C31\u4F1A\u77E5\u9053\u8FD9\u4E9B\u5DE5\u5177\u5728\u6027\u80FD\u8C03\u6574\u65B9\u9762\u662F\u591A\u4E48\u65B9\u4FBF\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4E00\u81F4\u4E14\u7A33\u5B9A\u7684\u57FA\u51C6\u8FDE\u63A5\u901F\u5EA6\u5FEB\u901F\u8861\u91CF\u6027\u80FD\u4F18\u5316\u7684\u5F71\u54CD\u3002\u552F\u4E00\u7684\u95EE\u9898\u662F\uFF0C\u8FD9\u662F\u7EFC\u5408\u6D4B\u8BD5\uFF0C\u5B83\u4EA7\u751F\u7684\u662F\u5B9E\u9A8C\u5BA4\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u73B0\u573A\u6570\u636E\u3002

Synthetic testing isn't inherently bad, but it's not representative of how fast your website is loading for real users. That requires field data, which you can collect from the Navigation Timing and Resource Timing APIs.

\u7EFC\u5408\u6D4B\u8BD5\u672C\u8EAB\u5E76\u4E0D\u574F\uFF0C\u4F46\u5B83\u5E76\u4E0D\u80FD\u4EE3\u8868\u60A8\u7684\u7F51\u7AD9\u4E3A\u771F\u5B9E\u7528\u6237\u52A0\u8F7D\u7684\u901F\u5EA6\u3002\u8FD9\u9700\u8981\u5B57\u6BB5\u6570\u636E\uFF0C\u60A8\u53EF\u4EE5\u4ECE Navigation Timing \u548C Resource Timing API \u6536\u96C6\u8FD9\u4E9B\u6570\u636E\u3002

## APIs to help you assess loading performance in the field  (\u5E2E\u52A9\u60A8\u8BC4\u4F30\u73B0\u573A\u88C5\u8F7D\u6027\u80FD\u7684 API)

Navigation Timing and Resource Timing are two similar APIs with significant overlap that measure two distinct things:  

Navigation Timing \u548C Resource Timing \u662F\u4E24\u4E2A\u76F8\u4F3C\u7684 API\uFF0C\u5B83\u4EEC\u6709\u5F88\u5927\u7684\u91CD\u53E0\uFF0C\u7528\u4E8E\u6D4B\u91CF\u4E24\u4E2A\u622A\u7136\u4E0D\u540C\u7684\u5185\u5BB9\uFF1A

*   [Navigation Timing](https://w3c.github.io/navigation-timing/)\xA0measures the speed of requests for HTML documents (that is, navigation requests).  

    \u5BFC\u822A\u8BA1\u65F6\u6D4B\u91CF HTML \u6587\u6863\u8BF7\u6C42\uFF08\u5373\u5BFC\u822A\u8BF7\u6C42\uFF09\u7684\u901F\u5EA6\u3002
*   [Resource Timing](https://w3c.github.io/resource-timing/)\xA0measures the speed of requests for document-dependent resources such as CSS, JavaScript, images, and so on.  

    \u8D44\u6E90\u8BA1\u65F6\u6D4B\u91CF\u5BF9\u6587\u6863\u76F8\u5173\u8D44\u6E90\uFF08\u5982 CSS\u3001JavaScript\u3001\u56FE\u50CF\u7B49\uFF09\u7684\u8BF7\u6C42\u901F\u5EA6\u3002

These APIs expose their data in a\xA0_performance entry buffer_, which can be accessed in the browser with JavaScript. There are multiple ways to query a performance buffer, but a common way is by using\xA0[\`performance.getEntriesByType\`](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType):  

\u8FD9\u4E9B API \u5728\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u516C\u5F00\u5176\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 JavaScript \u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u8BE5\u7F13\u51B2\u533A\u3002\u6709\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u67E5\u8BE2\u6027\u80FD\u7F13\u51B2\u533A\uFF0C\u4F46\u4E00\u79CD\u5E38\u89C1\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\xA0\`performance.getEntriesByType\`\xA0\uFF1A

\`\`\`js
// Get Navigation Timing entries:
performance.getEntriesByType('navigation');

// Get Resource Timing entries:
performance.getEntriesByType('resource');
\`\`\`

\`performance.getEntriesByType\`\xA0accepts a string describing the type of entries you want to retrieve from the performance entry buffer.\xA0\`'navigation'\`\xA0and\xA0\`'resource'\`\xA0retrieve timings for the Navigation Timing and Resource Timing APIs, respectively.  

\`performance.getEntriesByType\`\xA0\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8BE5\u5B57\u7B26\u4E32\u63CF\u8FF0\u8981\u4ECE\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u4E2D\u68C0\u7D22\u7684\u6761\u76EE\u7C7B\u578B\u3002\xA0\`'navigation'\`\xA0\u5E76\xA0\`'resource'\`\xA0\u5206\u522B\u68C0\u7D22 Navigation Timing \u548C Resource Timing API \u7684\u8BA1\u65F6\u3002

:::info
**Note:**\xA0Try loading a website and then enter either of the commands in the above code snippet in your browser's console to see actual timings captured by your browser.  

\u6CE8\u610F\uFF1A\u5C1D\u8BD5\u52A0\u8F7D\u7F51\u7AD9\uFF0C\u7136\u540E\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u4E2D\u8F93\u5165\u4E0A\u8FF0\u4EE3\u7801\u7247\u6BB5\u4E2D\u7684\u4EFB\u4F55\u547D\u4EE4\uFF0C\u4EE5\u67E5\u770B\u6D4F\u89C8\u5668\u6355\u83B7\u7684\u5B9E\u9645\u8BA1\u65F6\u3002
:::

The amount of information these APIs provide can be overwhelming, but they're your key to measuring loading performance in the field, as you can gather these timings from users as they visit your website.  

\u8FD9\u4E9B API \u63D0\u4F9B\u7684\u4FE1\u606F\u91CF\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u4E0D\u77E5\u6240\u63AA\uFF0C\u4F46\u5B83\u4EEC\u662F\u8861\u91CF\u73B0\u573A\u52A0\u8F7D\u6027\u80FD\u7684\u5173\u952E\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u5728\u7528\u6237\u8BBF\u95EE\u60A8\u7684\u7F51\u7AD9\u65F6\u6536\u96C6\u8FD9\u4E9B\u65F6\u95F4\u3002

## The life and timings of a network request  (\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u5B58\u671F\u548C\u8BA1\u65F6)

Gathering and analyzing navigation and resource timings is sort of like archeology in that you're reconstructing the fleeting life of a network request after the fact. Sometimes it helps to visualize concepts, and where network requests are concerned, your browser's developer tools can help.  

\u6536\u96C6\u548C\u5206\u6790\u5BFC\u822A\u548C\u8D44\u6E90\u65F6\u5E8F\u6709\u70B9\u50CF\u8003\u53E4\u5B66\uFF0C\u56E0\u4E3A\u4F60\u662F\u5728\u4E8B\u540E\u91CD\u5EFA\u7F51\u7EDC\u8BF7\u6C42\u7684\u77ED\u6682\u751F\u547D\u3002\u6709\u65F6\uFF0C\u5B83\u6709\u52A9\u4E8E\u53EF\u89C6\u5316\u6982\u5FF5\uFF0C\u800C\u5728\u6D89\u53CA\u7F51\u7EDC\u8BF7\u6C42\u65F6\uFF0C\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u53EF\u4EE5\u63D0\u4F9B\u5E2E\u52A9\u3002

![20231116001628](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116001628.png)

The life of a network request has distinct phases, such as DNS lookup, connection establishment, TLS negotiation, and so on. These timings are represented as a\xA0[\`DOMHighResTimestamp\`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp). Depending on your browser, the granularity of timings may be down to the microsecond, or be rounded up to milliseconds. Let's examine these phases in detail, and how they relate to Navigation Timing and Resource Timing.  

\u7F51\u7EDC\u8BF7\u6C42\u7684\u751F\u547D\u5468\u671F\u5177\u6709\u4E0D\u540C\u7684\u9636\u6BB5\uFF0C\u4F8B\u5982 DNS \u67E5\u627E\u3001\u8FDE\u63A5\u5EFA\u7ACB\u3001TLS \u534F\u5546\u7B49\u3002\u8FD9\u4E9B\u8BA1\u65F6\u8868\u793A\u4E3A\xA0\`DOMHighResTimestamp\`\xA0.\u6839\u636E\u60A8\u7684\u6D4F\u89C8\u5668\uFF0C\u8BA1\u65F6\u7C92\u5EA6\u53EF\u80FD\u4F4E\u81F3\u5FAE\u79D2\uFF0C\u6216\u56DB\u820D\u4E94\u5165\u5230\u6BEB\u79D2\u3002\u8BA9\u6211\u4EEC\u8BE6\u7EC6\u7814\u7A76\u4E00\u4E0B\u8FD9\u4E9B\u9636\u6BB5\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u4E0E\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u7684\u5173\u7CFB\u3002

:::info
**Note:**\xA0As you read this guide,\xA0[this diagram](https://www.w3.org/TR/navigation-timing-2/#processing-model)\xA0for both Navigation Timing and Resource Timing may help you to visualize the order of the timings they provide.  

\u6CE8\u610F\uFF1A\u5728\u9605\u8BFB\u672C\u6307\u5357\u65F6\uFF0C\u6B64\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u56FE\u53EF\u5E2E\u52A9\u60A8\u76F4\u89C2\u5730\u4E86\u89E3\u5B83\u4EEC\u63D0\u4F9B\u7684\u8BA1\u65F6\u987A\u5E8F\u3002
:::

### DNS lookup\xA0DNS\u67E5\u8BE2

When a user goes to a URL, the Domain Name System (DNS) is queried to translate a domain to an IP address. This process may take significant time\u2014time you'll want to measure in the field, even. Navigation Timing and Resource Timing expose two DNS-related timings:  

\u5F53\u7528\u6237\u8F6C\u5230 URL \u65F6\uFF0C\u5C06\u67E5\u8BE2\u57DF\u540D\u7CFB\u7EDF \uFF08DNS\uFF09 \u4EE5\u5C06\u57DF\u8F6C\u6362\u4E3A IP \u5730\u5740\u3002\u6B64\u8FC7\u7A0B\u53EF\u80FD\u9700\u8981\u5927\u91CF\u65F6\u95F4\uFF0C\u751A\u81F3\u9700\u8981\u5728\u73B0\u573A\u6D4B\u91CF\u3002\u201C\u5BFC\u822A\u8BA1\u65F6\u201D\u548C\u201C\u8D44\u6E90\u8BA1\u65F6\u201D\u516C\u5F00\u4E86\u4E24\u4E2A\u4E0E DNS \u76F8\u5173\u7684\u8BA1\u65F6\uFF1A

*   \`domainLookupStart\`\xA0is when DNS lookup begins.  

    \`domainLookupStart\`\xA0\u662F DNS \u67E5\u627E\u5F00\u59CB\u7684\u65F6\u95F4\u3002
*   \`domainLookupEnd\`\xA0is when DNS lookup ends.  

    \`domainLookupEnd\`\xA0\u662F DNS \u67E5\u627E\u7ED3\u675F\u7684\u65F6\u95F4\u3002

Calculating total DNS lookup time can be done by subtracting the start metric from the end metric:  

\u53EF\u4EE5\u901A\u8FC7\u4ECE\u7ED3\u675F\u6307\u6807\u4E2D\u51CF\u53BB\u5F00\u59CB\u6307\u6807\u6765\u8BA1\u7B97\u603B DNS \u67E5\u627E\u65F6\u95F4\uFF1A

\`\`\`js
// Measuring DNS lookup time
const [pageNav] = performance.getEntriesByType('navigation');
const totalLookupTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;
\`\`\`

:::warning
**Caution:**\xA0You can't\xA0_always_\xA0rely on timings to be populated. Timings provided in both APIs will have a value of\xA0\`0\`\xA0in some cases. For example, a DNS lookup may be served by a local cache. Additionally, any timings for cross-origin requests may be unavailable if those origins don't set a\xA0[\`Timing-Allow-Origin\`\xA0response header](https://developer.mozilla.org/docs/Web/HTTP/Headers/Timing-Allow-Origin).  

\u6CE8\u610F\uFF1A\u60A8\u4E0D\u80FD\u603B\u662F\u4F9D\u8D56\u8981\u586B\u5145\u7684\u65F6\u95F4\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E24\u4E2A API \u4E2D\u63D0\u4F9B\u7684\u8BA1\u65F6\u503C\xA0\`0\`\xA0\u4E3A \u3002\u4F8B\u5982\uFF0CDNS \u67E5\u627E\u53EF\u80FD\u7531\u672C\u5730\u7F13\u5B58\u63D0\u4F9B\u3002\u6B64\u5916\uFF0C\u5982\u679C\u8DE8\u6E90\u8BF7\u6C42\u672A\u8BBE\u7F6E\xA0\`Timing-Allow-Origin\`\xA0\u54CD\u5E94\u6807\u5934\uFF0C\u5219\u8FD9\u4E9B\u8BF7\u6C42\u7684\u4EFB\u4F55\u8BA1\u65F6\u90FD\u53EF\u80FD\u4E0D\u53EF\u7528\u3002
:::

### Connection negotiation\xA0\u8FDE\u63A5\u534F\u5546

Another contributing factor to loading performance is connection negotiation, which is latency incurred when connecting to a web server. If HTTPS is involved, this process will also include TLS negotiation time. The connection phase consists of three timings:  

\u5F71\u54CD\u52A0\u8F7D\u6027\u80FD\u7684\u53E6\u4E00\u4E2A\u56E0\u7D20\u662F\u8FDE\u63A5\u534F\u5546\uFF0C\u8FD9\u662F\u8FDE\u63A5\u5230 Web \u670D\u52A1\u5668\u65F6\u4EA7\u751F\u7684\u5EF6\u8FDF\u3002\u5982\u679C\u6D89\u53CA HTTPS\uFF0C\u5219\u6B64\u8FC7\u7A0B\u8FD8\u5C06\u5305\u62EC TLS \u534F\u5546\u65F6\u95F4\u3002\u8FDE\u63A5\u9636\u6BB5\u5305\u62EC\u4E09\u4E2A\u8BA1\u65F6\uFF1A

*   \`connectStart\`\xA0is when the browser starts to open a connection to a web server.  

    \`connectStart\`\xA0\u662F\u6D4F\u89C8\u5668\u5F00\u59CB\u6253\u5F00\u4E0E Web \u670D\u52A1\u5668\u7684\u8FDE\u63A5\u65F6\u3002
*   \`secureConnectionStart\`\xA0marks when the client begins TLS negotiation.  

    \`secureConnectionStart\`\xA0\u6807\u8BB0\u5BA2\u6237\u7AEF\u4F55\u65F6\u5F00\u59CB TLS \u534F\u5546\u3002
*   \`connectEnd\`\xA0is when the connection to the web server has been established.  

    \`connectEnd\`\xA0\u662F\u4E0E Web \u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\u3002

Measuring total connection time is similar to measuring total DNS lookup time: you subtract the start timing from the end timing. However, there's an additional\xA0\`secureConnectionStart\`\xA0property that may be\xA0\`0\`\xA0if HTTPS isn't used or\xA0[if the connection is persistent](https://en.wikipedia.org/wiki/HTTP_persistent_connection). If you want to measure TLS negotiation time, you'll need to keep that in mind:  

\u6D4B\u91CF\u603B\u8FDE\u63A5\u65F6\u95F4\u4E0E\u6D4B\u91CF\u603B DNS \u67E5\u627E\u65F6\u95F4\u7C7B\u4F3C\uFF1A\u4ECE\u7ED3\u675F\u65F6\u95F4\u4E2D\u51CF\u53BB\u5F00\u59CB\u65F6\u95F4\u3002\u4F46\u662F\uFF0C\xA0\`0\`\xA0\u5982\u679C\u4E0D\u4F7F\u7528 HTTPS \u6216\u8FDE\u63A5\u662F\u6301\u4E45\u7684\uFF0C\u5219\u53EF\u80FD\u8FD8\u6709\u4E00\u4E2A\u9644\u52A0\xA0\`secureConnectionStart\`\xA0\u5C5E\u6027\u3002\u5982\u679C\u8981\u6D4B\u91CF TLS \u534F\u5546\u65F6\u95F4\uFF0C\u9700\u8981\u7262\u8BB0\u8FD9\u4E00\u70B9\uFF1A

\`\`\`js
// Quantifying total connection time
const [pageNav] = performance.getEntriesByType('navigation');
const connectionTime = pageNav.connectEnd - pageNav.connectStart;
let tlsTime = 0; // <-- Assume 0 to start with

// Was there TLS negotiation?
if (pageNav.secureConnectionStart > 0) {
  // Awesome! Calculate it!
  tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart;
}
\`\`\`

Once DNS lookup and connection negotiation ends, timings related to fetching documents and their dependent resources come into play.  

\u4E00\u65E6 DNS \u67E5\u627E\u548C\u8FDE\u63A5\u534F\u5546\u7ED3\u675F\uFF0C\u4E0E\u83B7\u53D6\u6587\u6863\u53CA\u5176\u4F9D\u8D56\u8D44\u6E90\u76F8\u5173\u7684\u65F6\u95F4\u5C31\u4F1A\u53D1\u6325\u4F5C\u7528\u3002

### Requests and responses\xA0\u8BF7\u6C42\u548C\u54CD\u5E94

Loading performance is affected by two types of factors:  

\u52A0\u8F7D\u6027\u80FD\u53D7\u4EE5\u4E0B\u4E24\u79CD\u56E0\u7D20\u7684\u5F71\u54CD\uFF1A

*   **Extrinsic factors:**\xA0These are things like latency and bandwidth. Beyond choosing a hosting company and a CDN, they're (mostly) out of our control, as users can access the web from anywhere.  

    \u5916\u90E8\u56E0\u7D20\uFF1A\u8FD9\u4E9B\u56E0\u7D20\u5305\u62EC\u5EF6\u8FDF\u548C\u5E26\u5BBD\u7B49\u56E0\u7D20\u3002\u9664\u4E86\u9009\u62E9\u6258\u7BA1\u516C\u53F8\u548C CDN \u4E4B\u5916\uFF0C\u5B83\u4EEC\uFF08\u5927\u90E8\u5206\uFF09\u8D85\u51FA\u4E86\u6211\u4EEC\u7684\u63A7\u5236\u8303\u56F4\uFF0C\u56E0\u4E3A\u7528\u6237\u53EF\u4EE5\u4ECE\u4EFB\u4F55\u5730\u65B9\u8BBF\u95EE\u7F51\u7EDC\u3002
*   **Intrinsic factors:**\xA0These are things like server and client-side architectures, as well as resource size and our ability to optimize for those things, which are within our control.  

    \u5185\u5728\u56E0\u7D20\uFF1A\u8FD9\u4E9B\u56E0\u7D20\u5305\u62EC\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u67B6\u6784\uFF0C\u4EE5\u53CA\u8D44\u6E90\u5927\u5C0F\u548C\u6211\u4EEC\u9488\u5BF9\u8FD9\u4E9B\u56E0\u7D20\u8FDB\u884C\u4F18\u5316\u7684\u80FD\u529B\uFF0C\u8FD9\u4E9B\u56E0\u7D20\u90FD\u5728\u6211\u4EEC\u7684\u63A7\u5236\u8303\u56F4\u5185\u3002

Both types of factors affect loading performance. Timings related to these factors are vital, as they describe how long resources take to download. Both Navigation Timing and Resource Timing describe loading performance with the following metrics:  

\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u56E0\u7D20\u90FD\u4F1A\u5F71\u54CD\u52A0\u8F7D\u6027\u80FD\u3002\u4E0E\u8FD9\u4E9B\u56E0\u7D20\u76F8\u5173\u7684\u65F6\u95F4\u81F3\u5173\u91CD\u8981\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u63CF\u8FF0\u4E86\u4E0B\u8F7D\u8D44\u6E90\u6240\u9700\u7684\u65F6\u95F4\u3002\u201C\u5BFC\u822A\u8BA1\u65F6\u201D\u548C\u201C\u8D44\u6E90\u8BA1\u65F6\u201D\u90FD\u4F7F\u7528\u4EE5\u4E0B\u6307\u6807\u63CF\u8FF0\u52A0\u8F7D\u6027\u80FD\uFF1A

*   \`fetchStart\`\xA0marks when the browser begins to fetch a resource (Resource Timing) or a document for a navigation request (Navigation Timing). This precedes the actual request, and is the point at which the browser is checking caches (for example, HTTP and\xA0[\`Cache\`\xA0instances](https://developer.mozilla.org/docs/Web/API/Cache)).  

    \`fetchStart\`\xA0\u6807\u8BB0\u6D4F\u89C8\u5668\u4F55\u65F6\u5F00\u59CB\u83B7\u53D6\u8D44\u6E90\uFF08\u8D44\u6E90\u8BA1\u65F6\uFF09\u6216\u5BFC\u822A\u8BF7\u6C42\u7684\u6587\u6863\uFF08\u5BFC\u822A\u8BA1\u65F6\uFF09\u3002\u8FD9\u5148\u4E8E\u5B9E\u9645\u8BF7\u6C42\uFF0C\u5E76\u4E14\u662F\u6D4F\u89C8\u5668\u68C0\u67E5\u7F13\u5B58\uFF08\u4F8B\u5982\uFF0CHTTP \u548C\xA0\`Cache\`\xA0\u5B9E\u4F8B\uFF09\u7684\u70B9\u3002
*   \`workerStart\`\xA0marks when a request starts being handled within a service worker's\xA0[\`fetch\`\xA0event handler](https://developer.mozilla.org/docs/Web/API/FetchEvent). This will be\xA0\`0\`\xA0when no service worker is controlling the current page.  

    \`workerStart\`\xA0\u6807\u8BB0\u4F55\u65F6\u5F00\u59CB\u5728 Service Worker\xA0\`fetch\`\xA0\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u5904\u7406\u8BF7\u6C42\u3002\u8FD9\u5C06\u662F\u5F53\u6CA1\u6709 Service Worker \u63A7\u5236\u5F53\u524D\u9875\u9762\xA0\`0\`\xA0\u65F6\u3002
*   \`requestStart\`\xA0is when the browser makes the request.  

    \`requestStart\`\xA0\u662F\u6D4F\u89C8\u5668\u53D1\u51FA\u8BF7\u6C42\u7684\u65F6\u95F4\u3002
*   \`responseStart\`\xA0is when the first byte of the response arrives.  

    \`responseStart\`\xA0\u662F\u54CD\u5E94\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u5230\u8FBE\u7684\u65F6\u95F4\u3002
*   \`responseEnd\`\xA0is when the last byte of the response arrives.  

    \`responseEnd\`\xA0\u662F\u54CD\u5E94\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u8282\u5230\u8FBE\u7684\u65F6\u95F4\u3002

These timings allow you to measure multiple aspects of loading performance, such as cache lookup within a service worker\xA0_and_\xA0download time:  

\u8FD9\u4E9B\u8BA1\u65F6\u5141\u8BB8\u60A8\u8861\u91CF\u52A0\u8F7D\u6027\u80FD\u7684\u591A\u4E2A\u65B9\u9762\uFF0C\u4F8B\u5982 Service Worker \u4E2D\u7684\u7F13\u5B58\u67E5\u627E\u548C\u4E0B\u8F7D\u65F6\u95F4\uFF1A

\`\`\`js
// Cache seek plus response time of the current document
const [pageNav] = performance.getEntriesByType('navigation');
const fetchTime = pageNav.responseEnd - pageNav.fetchStart;

// Service worker time plus response time
let workerTime = 0;

if (pageNav.workerStart > 0) {
  workerTime = pageNav.responseEnd - pageNav.workerStart;
}
\`\`\`

You can also measure other aspects of request/response latency:  

\u60A8\u8FD8\u53EF\u4EE5\u6D4B\u91CF\u8BF7\u6C42/\u54CD\u5E94\u5EF6\u8FDF\u7684\u5176\u4ED6\u65B9\u9762\uFF1A

\`\`\`js
const [pageNav] = performance.getEntriesByType('navigation');

// Request time only (excluding redirects, DNS, and connection/TLS time)
const requestTime = pageNav.responseStart - pageNav.requestStart;

// Response time only (download)
const responseTime = pageNav.responseEnd - pageNav.responseStart;

// Request + response time
const requestResponseTime = pageNav.responseEnd - pageNav.requestStart;
\`\`\`

### Other measurements you can make  (\u60A8\u53EF\u4EE5\u8FDB\u884C\u7684\u5176\u4ED6\u6D4B\u91CF)

Navigation Timing and Resource Timing is useful for more than what the examples above outline. Here are some other situations with relevant timings that may be worth exploring:  

\u5BFC\u822A\u8BA1\u65F6\u548C\u8D44\u6E90\u8BA1\u65F6\u7684\u7528\u9014\u8FDC\u4E0D\u6B62\u4E0A\u8FF0\u793A\u4F8B\u6240\u6982\u8FF0\u7684\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5176\u4ED6\u60C5\u51B5\uFF0C\u8FD9\u4E9B\u60C5\u51B5\u53EF\u80FD\u503C\u5F97\u63A2\u8BA8\uFF1A

*   **Page redirects:**\xA0Redirects are an overlooked source of added latency, especially redirect chains. Latency gets added in a number of ways, such as HTTP-to-HTTPs hops, as well as 302/uncached 301 redirects. The\xA0\`redirectStart\`,\xA0\`redirectEnd\`, and\xA0\`redirectCount\`\xA0timings are helpful in assessing redirect latency.  

    \u9875\u9762\u91CD\u5B9A\u5411\uFF1A\u91CD\u5B9A\u5411\u662F\u5BFC\u81F4\u5EF6\u8FDF\u589E\u52A0\u7684\u4E00\u4E2A\u88AB\u5FFD\u89C6\u7684\u6765\u6E90\uFF0C\u5C24\u5176\u662F\u91CD\u5B9A\u5411\u94FE\u3002\u5EF6\u8FDF\u4EE5\u591A\u79CD\u65B9\u5F0F\u589E\u52A0\uFF0C\u4F8B\u5982 HTTP \u5230 HTTPs \u8DC3\u70B9\uFF0C\u4EE5\u53CA 302/\u672A\u7F13\u5B58\u7684 301 \u91CD\u5B9A\u5411\u3002\xA0\`redirectStart\`\xA0\u3001\xA0\`redirectEnd\`\xA0\u548C\xA0\`redirectCount\`\xA0\u8BA1\u65F6\u6709\u52A9\u4E8E\u8BC4\u4F30\u91CD\u5B9A\u5411\u5EF6\u8FDF\u3002
*   **Document unloading:**\xA0In pages that run code in an\xA0[\`unload\`\xA0event handler](https://developer.mozilla.org/docs/Web/Events/unload), the browser must execute that code before it can navigate to the next page.\xA0\`unloadEventStart\`\xA0and\xA0\`unloadEventEnd\`\xA0measure document unloading.  

    \u6587\u6863\u5378\u8F7D\uFF1A\u5728\xA0\`unload\`\xA0\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u9875\u9762\u4E2D\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u5148\u6267\u884C\u8BE5\u4EE3\u7801\uFF0C\u7136\u540E\u624D\u80FD\u5BFC\u822A\u5230\u4E0B\u4E00\u9875\u3002\xA0\`unloadEventStart\`\xA0\u5E76\xA0\`unloadEventEnd\`\xA0\u6D4B\u91CF\u6587\u6863\u5378\u8F7D\u3002
*   **Document processing:**\xA0Document processing time may not be consequential unless your website sends very large HTML payloads. If this describes your situation, the\xA0\`domInteractive\`,\xA0\`domContentLoadedEventStart\`,\xA0\`domContentLoadedEventEnd\`, and\xA0\`domComplete\`\xA0timings may be of interest.  

    \u6587\u6863\u5904\u7406\uFF1A\u9664\u975E\u60A8\u7684\u7F51\u7AD9\u53D1\u9001\u975E\u5E38\u5927\u7684 HTML \u6709\u6548\u8D1F\u8F7D\uFF0C\u5426\u5219\u6587\u6863\u5904\u7406\u65F6\u95F4\u53EF\u80FD\u65E0\u5173\u7D27\u8981\u3002\u5982\u679C\u8FD9\u63CF\u8FF0\u4E86\u60A8\u7684\u60C5\u51B5\uFF0C\u5219 \u3001\xA0\`domInteractive\`\xA0\u3001\xA0\`domContentLoadedEventStart\`\xA0\`domContentLoadedEventEnd\`\xA0\u548C\xA0\`domComplete\`\xA0\u65F6\u95F4\u53EF\u80FD\u4F1A\u5F15\u8D77\u60A8\u7684\u5174\u8DA3\u3002

:::warning
**Warning:**\xA0Timings related to document unloading and processing are available only in Navigation Timing, as they only apply to navigation requests.  

\u8B66\u544A\uFF1A\u4E0E\u6587\u6863\u5378\u8F7D\u548C\u5904\u7406\u76F8\u5173\u7684\u8BA1\u65F6\u4EC5\u5728\u5BFC\u822A\u8BA1\u65F6\u4E2D\u53EF\u7528\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4EC5\u9002\u7528\u4E8E\u5BFC\u822A\u8BF7\u6C42\u3002
:::

## Acquiring timings in application code  (\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u83B7\u53D6\u65F6\u5E8F)

All of the examples shown so far use\xA0\`performance.getEntriesByType\`, but there are other ways to query the performance entry buffer, such as\xA0[\`performance.getEntriesByName\`](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName)\xA0and\xA0[\`performance.getEntries\`](https://developer.mozilla.org/docs/Web/API/Performance/getEntries). These methods are fine when only light analysis is needed. In other situations, though, they can introduce excessive main thread work by iterating over a large number of entries, or even repeatedly polling the performance buffer to find new entries.  

\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u663E\u793A\u7684\u6240\u6709\u793A\u4F8B\u90FD\u4F7F\u7528\xA0\`performance.getEntriesByType\`\xA0\uFF0C\u4F46\u8FD8\u6709\u5176\u4ED6\u65B9\u6CD5\u53EF\u4EE5\u67E5\u8BE2\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\uFF0C\u4F8B\u5982\xA0\`performance.getEntriesByName\`\xA0\u548C\xA0\`performance.getEntries\`\xA0\u3002\u5F53\u53EA\u9700\u8981\u5149\u5206\u6790\u65F6\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5F88\u597D\u3002\u4F46\u662F\uFF0C\u5728\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4F1A\u901A\u8FC7\u8FED\u4EE3\u5927\u91CF\u6761\u76EE\uFF0C\u751A\u81F3\u91CD\u590D\u8F6E\u8BE2\u6027\u80FD\u7F13\u51B2\u533A\u4EE5\u67E5\u627E\u65B0\u6761\u76EE\u6765\u5F15\u5165\u8FC7\u591A\u7684\u4E3B\u7EBF\u7A0B\u5DE5\u4F5C\u3002

The recommended approach for collecting entries from the performance entry buffer is to use a\xA0[\`PerformanceObserver\`](https://developer.mozilla.org/docs/Web/API/PerformanceObserver).\xA0\`PerformanceObserver\`\xA0listens for performance entries, and provides them as they're added to the buffer:  

\u4ECE\u6027\u80FD\u6761\u76EE\u7F13\u51B2\u533A\u6536\u96C6\u6761\u76EE\u7684\u63A8\u8350\u65B9\u6CD5\u662F\u4F7F\u7528\xA0\`PerformanceObserver\`\xA0.\xA0\`PerformanceObserver\`\xA0\u4FA6\u542C\u6027\u80FD\u6761\u76EE\uFF0C\u5E76\u5728\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230\u7F13\u51B2\u533A\u65F6\u63D0\u4F9B\u5B83\u4EEC\uFF1A

\`\`\`js
// Create the performance observer:
const perfObserver = new PerformanceObserver((observedEntries) => {
  // Get all resource entries collected so far:
  const entries = observedEntries.getEntries();

  // Iterate over entries:
  for (let i = 0; i < entries.length; i++) {
    // Do the work!
  }
});

// Run the observer for Navigation Timing entries:
perfObserver.observe({
  type: 'navigation',
  buffered: true
});

// Run the observer for Resource Timing entries:
perfObserver.observe({
  type: 'resource',
  buffered: true
});
\`\`\`

:::info
**Note:**\xA0Adding the\xA0\`buffered\`\xA0option to a performance observer's\xA0\`observe\`\xA0event ensures that performance entries added to the buffer prior to the instantiation of the performance observer are observable.  

\u6CE8\uFF1A \u5C06\u9009\u9879\xA0\`buffered\`\xA0\u6DFB\u52A0\u5230\u6027\u80FD\u89C2\u5BDF\u7A0B\u5E8F\xA0\`observe\`\xA0\u7684\u4E8B\u4EF6\u53EF\u786E\u4FDD\u5728\u6027\u80FD\u89C2\u5BDF\u7A0B\u5E8F\u5B9E\u4F8B\u5316\u4E4B\u524D\u6DFB\u52A0\u5230\u7F13\u51B2\u533A\u7684\u6027\u80FD\u6761\u76EE\u662F\u53EF\u89C2\u5BDF\u7684\u3002
:::

This method of collecting timings may feel awkward when compared to directly accessing the performance entry buffer, but it's preferable to tying up the main thread with work that doesn't serve a critical and user-facing purpose.  

\u4E0E\u76F4\u63A5\u8BBF\u95EE\u6027\u80FD\u8F93\u5165\u7F13\u51B2\u533A\u76F8\u6BD4\uFF0C\u8FD9\u79CD\u6536\u96C6\u8BA1\u65F6\u7684\u65B9\u6CD5\u53EF\u80FD\u4F1A\u8BA9\u4EBA\u611F\u5230\u5C34\u5C2C\uFF0C\u4F46\u6700\u597D\u4E0D\u8981\u5C06\u4E3B\u7EBF\u7A0B\u4E0E\u4E0D\u7528\u4E8E\u5173\u952E\u548C\u9762\u5411\u7528\u6237\u7684\u5DE5\u4F5C\u6346\u7ED1\u5728\u4E00\u8D77\u3002

## Phoning home\xA0\u7ED9\u5BB6\u91CC\u6253\u7535\u8BDD

Once you've collected all the timings you need, you can send them to an endpoint for further analysis. Two ways to do this are with either\xA0[\`navigator.sendBeacon\`](https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon)\xA0or a\xA0[\`fetch\`\xA0with the\xA0\`keepalive\`\xA0option](https://developer.mozilla.org/docs/Web/API/fetch)\xA0set. Both methods will send a request to a specified endpoint in a non-blocking way, and the request will be queued in a way that outlives the current page session if need be:  

\u6536\u96C6\u6240\u9700\u7684\u6240\u6709\u8BA1\u65F6\u540E\uFF0C\u53EF\u4EE5\u5C06\u5B83\u4EEC\u53D1\u9001\u5230\u7EC8\u7ED3\u70B9\u8FDB\u884C\u8FDB\u4E00\u6B65\u5206\u6790\u3002\u6267\u884C\u6B64\u64CD\u4F5C\u7684\u4E24\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528\xA0\`keepalive\`\xA0\u9009\u9879\u96C6\u6216\xA0\`navigator.sendBeacon\`\xA0\u9009\u9879\xA0\`fetch\`\xA0\u96C6\u3002\u8FD9\u4E24\u79CD\u65B9\u6CD5\u90FD\u5C06\u4EE5\u975E\u963B\u585E\u65B9\u5F0F\u5411\u6307\u5B9A\u7684\u7EC8\u7ED3\u70B9\u53D1\u9001\u8BF7\u6C42\uFF0C\u5982\u679C\u9700\u8981\uFF0C\u8BF7\u6C42\u5C06\u4EE5\u6BD4\u5F53\u524D\u9875\u9762\u4F1A\u8BDD\u66F4\u957F\u7684\u65B9\u5F0F\u6392\u961F\uFF1A

\`\`\`js
// Caution: If you have lots of performance entries, don't
// do this. This is an example for illustrative purposes.
const data = JSON.stringify(performance.getEntries()));

// The endpoint to transmit the encoded data to
const endpoint = '/analytics';

// Check for fetch keepalive support
if ('keepalive' in Request.prototype) {
  fetch(endpoint, {
    method: 'POST',
    body: data,
    keepalive: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} else if ('sendBeacon' in navigator) {
  // Use sendBeacon as a fallback
  navigator.sendBeacon(endpoint, data);
}
\`\`\`

In this example, the JSON string will arrive in a\xA0\`POST\`\xA0payload that you can decode and process/store in an application backend as needed.  

\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0CJSON \u5B57\u7B26\u4E32\u5C06\u5230\u8FBE\u6709\u6548\xA0\`POST\`\xA0\u8D1F\u8F7D\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u5728\u5E94\u7528\u7A0B\u5E8F\u540E\u7AEF\u4E2D\u89E3\u7801\u548C\u5904\u7406/\u5B58\u50A8\u8BE5\u6709\u6548\u8D1F\u8F7D\u3002

## Wrapping up\xA0\u7ED3\u675F\u8BED

Once you have metrics collected, it's up to you to figure out how to analyze that field data. When analyzing field data, there are a few general rules to follow to ensure you're drawing meaningful conclusions:  

\u6536\u96C6\u6307\u6807\u540E\uFF0C\u7531\u60A8\u51B3\u5B9A\u5982\u4F55\u5206\u6790\u8BE5\u5B57\u6BB5\u6570\u636E\u3002\u5728\u5206\u6790\u5916\u4E1A\u6570\u636E\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u4E00\u4E9B\u4E00\u822C\u89C4\u5219\uFF0C\u4EE5\u786E\u4FDD\u5F97\u51FA\u6709\u610F\u4E49\u7684\u7ED3\u8BBA\uFF1A

*   [Avoid averages](https://www.igvita.com/2016/01/12/the-average-page-is-a-myth/), as they're not representative of any one user's experience, and may be skewed by outliers.  

    \u907F\u514D\u4F7F\u7528\u5E73\u5747\u503C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u80FD\u4EE3\u8868\u4EFB\u4F55\u4E00\u4E2A\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u56E0\u5F02\u5E38\u503C\u800C\u51FA\u73B0\u504F\u5DEE\u3002
*   Rely on percentiles. In datasets of time-based performance metrics, lower is better. This means that when you prioritize low percentiles, you're only paying attention to the fastest experiences.  

    \u4F9D\u9760\u767E\u5206\u4F4D\u6570\u3002\u5728\u57FA\u4E8E\u65F6\u95F4\u7684\u6027\u80FD\u6307\u6807\u6570\u636E\u96C6\u4E2D\uFF0C\u8D8A\u4F4E\u8D8A\u597D\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u60A8\u4F18\u5148\u8003\u8651\u4F4E\u767E\u5206\u4F4D\u6570\u65F6\uFF0C\u60A8\u53EA\u4F1A\u5173\u6CE8\u6700\u5FEB\u7684\u4F53\u9A8C\u3002
*   [Prioritize the long tail of values](https://timkadlec.com/remembers/2018-06-07-prioritizing-the-long-tail-of-performance/). When you prioritize experiences at the 75th percentile or higher, you're putting your focus where it belongs: on the slowest experiences.  

    \u4F18\u5148\u8003\u8651\u503C\u7684\u957F\u5C3E\u3002\u5F53\u60A8\u5C06\u4F53\u9A8C\u7684\u4F18\u5148\u7EA7\u6392\u5728\u7B2C 75 \u4E2A\u767E\u5206\u4F4D\u6216\u66F4\u9AD8\u65F6\uFF0C\u60A8\u5C31\u5C06\u91CD\u70B9\u653E\u5728\u4E86\u5B83\u6240\u5C5E\u7684\u5730\u65B9\uFF1A\u6700\u6162\u7684\u4F53\u9A8C\u4E0A\u3002

This guide isn't meant to be an exhaustive resource on Navigation or Resource Timing, but a starting point. Below are some additional resources you may find helpful:  
\u672C\u6307\u5357\u5E76\u4E0D\u662F\u6709\u5173\u5BFC\u822A\u6216\u8D44\u6E90\u8BA1\u65F6\u7684\u8BE6\u5C3D\u8D44\u6E90\uFF0C\u800C\u662F\u4E00\u4E2A\u8D77\u70B9\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53EF\u80FD\u5BF9\u60A8\u6709\u5E2E\u52A9\u7684\u5176\u4ED6\u8D44\u6E90\uFF1A

*   [Navigation Timing Spec](https://www.w3.org/TR/navigation-timing-2/).\xA0\u5BFC\u822A\u65F6\u5E8F\u89C4\u8303

*   [Resource Timing Spec](https://www.w3.org/TR/resource-timing-2/).\xA0\u8D44\u6E90\u8BA1\u65F6\u89C4\u8303

*   [ResourceTiming in Practice](https://nicj.net/resourcetiming-in-practice/).  

    ResourceTiming \u5728\u5B9E\u8DF5\u4E2D\u3002
*   [Navigation Timing API (MDN)  

    \u5BFC\u822A\u8BA1\u65F6 API \uFF08MDN\uFF09](https://developer.mozilla.org/docs/Web/API/Navigation_timing_API)
*   [Resource Timing API (MDN)  

    \u8D44\u6E90\u8BA1\u65F6 API \uFF08MDN\uFF09](https://developer.mozilla.org/docs/Web/API/Resource_Timing_API)

With these APIs and the data they provide, you'll be better equipped to understand how loading performance is experienced by real users, which will give you more confidence in diagnosing and addressing loading performance problems in the field.  

\u501F\u52A9\u8FD9\u4E9B API \u53CA\u5176\u63D0\u4F9B\u7684\u6570\u636E\uFF0C\u60A8\u5C06\u80FD\u591F\u66F4\u597D\u5730\u4E86\u89E3\u771F\u5B9E\u7528\u6237\u5BF9\u52A0\u8F7D\u6027\u80FD\u7684\u4F53\u9A8C\uFF0C\u8FD9\u5C06\u4F7F\u60A8\u5728\u73B0\u573A\u8BCA\u65AD\u548C\u89E3\u51B3\u52A0\u8F7D\u6027\u80FD\u95EE\u9898\u65F6\u66F4\u6709\u4FE1\u5FC3\u3002
`;export{p as content,d as default,a as frontmatter,h as lastUpdatedTime,c as title,t as toc};
