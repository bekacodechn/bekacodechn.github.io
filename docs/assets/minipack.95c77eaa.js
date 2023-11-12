import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";const o=void 0,i=[],t="minipack";function c(s){const l=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",hr:"hr",div:"div",button:"button",span:"span",pre:"pre"},s.components);return e(r,{children:[e(l.h1,{id:"minipack",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#minipack",children:"#"}),"minipack"]}),`
`,n(l.p,{children:n(l.code,{children:"metadata:"})}),`
`,e(l.p,{children:[n(l.strong,{children:"\u539F\u6807\u9898:"})," minipack-explain"]}),`
`,e(l.p,{children:[n(l.strong,{children:"\u94FE\u63A5:"})," ",n(l.a,{href:"https://github.com/chinanf-boy/minipack-explain/tree/master",target:"_blank",rel:"nofollow",children:"https://github.com/chinanf-boy/minipack-explain/tree/master"})]}),`
`,n(l.p,{children:n(l.strong,{children:"\u6587\u7AE0\u526F\u6807\u9898:"})}),`
`,n(l.hr,{}),`
`,n(l.p,{children:"\u7528javascript\u7F16\u5199\u7684\u73B0\u4EE3\u6A21\u5757\u6253\u5305\u5668\u7684\u7B80\u5316\u793A\u4F8B\uFF0C\u5B66\u4E60\u81EA minipack-explain\u3002"}),`
`,n(l.p,{children:"\u5C0F\u4F18\u5316\uFF1A\u5728\u6784\u5EFA\u4F9D\u8D56\u56FE\u65F6\u907F\u514D\u4E86\u91CD\u590D\u6536\u96C6\u4F9D\u8D56\u3002"}),`
`,e(l.div,{className:"language-js line-numbers-mode",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"//"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u6A21\u5757\u6346\u7ED1\u5668 \u5C06 \u5C0F\u5757\u4EE3\u7801 \u7F16\u8BD1\u6210 \u66F4\u5927\u548C\u66F4\u590D\u6742\u7684\u4EE3\u7801,\u53EF\u4EE5\u8FD0\u884C\u5728Web\u6D4F\u89C8\u5668\u4E2D."})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u8FD9\u4E9B\u5C0F\u5757\u53EA\u662FJavaScript\u6587\u4EF6\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB,\u800C\u8FD9\u6B63\u662F\u7531\u6A21\u5757\u7CFB\u7EDF\u8868\u793A"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// https://webpack.js.org/concepts/modules"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u6A21\u5757\u6346\u7ED1\u5668\u5177\u6709 \u5165\u53E3\u6587\u4EF6 \u7684\u6982\u5FF5,\u800C\u4E0D\u662F\u6DFB\u52A0\u4E00\u4E9B\u811A\u672C\u6807\u7B7E\u5728\u6D4F\u89C8\u5668\u4E2D\u5E76\u8BA9\u5B83\u4EEC\u8FD0\u884C,\u6211\u4EEC\u8BA9 \u6346\u7ED1\u5668 \u77E5\u9053"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u54EA\u4E2A\u6587\u4EF6\u662F\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u7684\u4E3B\u8981\u6587\u4EF6.\u8BE5\u6587\u4EF6\u80FD\u5F15\u5BFC\u6211\u4EEC\u7684\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F."})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u6211\u4EEC\u7684\u6253\u5305\u7A0B\u5E8F\u5C06\u4ECE\u8BE5\u5165\u53E3\u6587\u4EF6\u5F00\u59CB,\u5E76\u5C1D\u8BD5\u7406\u89E3\u5B83\u4F9D\u8D56\u4E8E\u54EA\u4E9B\u6587\u4EF6. \u7136\u540E,\u5B83\u4F1A\u5C1D\u8BD5\u4E86\u89E3\u54EA\u4E9B\u6587\u4EF6"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u4F9D\u8D56\u5173\u7CFB\u53D6\u51B3\u4E8E\u5B83,\u5B83\u4F1A\u7EE7\u7EED\u8FD9\u6837\u505A,\u76F4\u5230\u5B83\u53D1\u73B0\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684 \u6BCF\u4E2A\u6A21\u5757,\u4EE5\u53CA\u5B83\u4EEC\u5982\u4F55 \u76F8\u4E92\u4F9D\u8D56."})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u8FD9\u79CD\u5BF9\u9879\u76EE\u7684\u7406\u89E3\u88AB\u79F0\u4E3A`\u4F9D\u8D56\u56FE`."})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D,\u6211\u4EEC\u5C06\u521B\u5EFA\u4E00\u4E2A \u4F9D\u8D56\u5173\u7CFB\u56FE \u5E76\u5C06\u5176\u7528\u4E8E\u6253\u5305"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u5B83\u7684\u6240\u6709\u6A21\u5757\u90FD\u6346\u7ED1\u5728\u4E00\u8D77."})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u8BA9\u6211\u4EEC\u5F00\u59CB : )"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// >\u8BF7\u6CE8\u610F: \u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u7B80\u5316\u7684\u4F8B\u5B50"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u8FD9\u4E9B\u4F8B\u5B50\u4EC5\u4EC5\u6267\u884C\u4E00\u6B21\u5FAA\u73AF\u4F9D\u8D56,\u7F13\u5B58\u6A21\u5757\u5BFC\u51FA\u548C\u89E3\u6790\u6BCF\u4E2A\u6A21\u5757"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u5176\u4ED6\u65B9\u9762\u7684\u5904\u7406\u90FD\u8DF3\u8FC7,\u4F7F\u8FD9\u4E2A\u4F8B\u5B50\u5C3D\u53EF\u80FD\u7B80\u5355."})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"path"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"require"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"path"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"require"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"parse"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"traverse"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"transformFromAst"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"require"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"@babel/core"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"let"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ID"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"imported"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Map"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" *"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:" * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#8FBCBB"},children:"param"}),n(l.span,{style:{color:"#616E88"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#616E88"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#616E88"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#616E88"},children:" \u5165\u53E3\u8DEF\u5F84"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:" * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#8FBCBB"},children:"returns"}),n(l.span,{style:{color:"#616E88"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#616E88"},children:" id: number, code: string, filename: string, dependencies: string[], loaded: boolean "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" * id: \u6A21\u5757ID\u3001 code: \u6A21\u5757\u6E90\u7801\u3001 filename: \u6587\u4EF6\u540D\u3001 dependencies: \u5F53\u524D\u6A21\u5757\u7684\u4F9D\u8D56\u3001 loaded: \u5426\u52A0\u8F7D\u8FC7\u5F53\u524D\u6A21\u5757"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createAsset"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u52A0\u8F7D\u8FC7\u6B64\u6587\u4EF6\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u53EF\u4EE5\u9632\u6B62ID\u53D8\u5316"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"imported"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"has"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"imported"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"get"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"content"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"readFileSync"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"utf-8"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ast"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"parse"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"content"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"sourceType"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"module"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#88C0D0"},children:"traverse"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"ast"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#88C0D0"},children:"ImportDeclaration"}),n(l.span,{style:{color:"#ECEFF4"},children:"({"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"node"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"})"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"source"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"node"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"source"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"push"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"source"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ID"}),n(l.span,{style:{color:"#81A1C1"},children:"++;"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u8F6C\u4E3Ababel\u9884\u8BBE\u7684ES5"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"code"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"transformFromAst"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"ast"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"content"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#88C0D0"},children:"presets"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"@babel/preset-env"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"code"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#88C0D0"},children:"loaded"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#D8DEE9"},children:"imported"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"set"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createGraph"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"entryAsset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createAsset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#D8DEE9"},children:"entryAsset"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"loaded"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u4E0B\u9762\u4E24\u884C\u7684\u505A\u6CD5\u5F88\u5DE7\u5999\uFF0C\u53EF\u4EE5\u8FBE\u5230\u9012\u5F52\u6784\u5EFA\u4F9D\u8D56\u56FE\u7684\u4F5C\u7528"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"queue"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#D8DEE9"},children:"entryAsset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"of"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"queue"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"mapping"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{}"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dirname"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"path"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"dirname"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"filename"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"forEach"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"relativePath"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"absolutePath"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"path"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"join"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dirname"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"relativePath"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createAsset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"absolutePath"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"loaded"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"			"}),n(l.span,{style:{color:"#616E88"},children:"// { [path: string]: number } \u8BB0\u5F55\u4F9D\u8D56\u548C\u4F9D\u8D56ID"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#D8DEE9"},children:"asset"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"mapping"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"relativePath"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"] "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"!"}),n(l.span,{style:{color:"#D8DEE9"},children:"loaded"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"				"}),n(l.span,{style:{color:"#616E88"},children:"// \u6807\u8BB0\u52A0\u8F7D\u8FC7\u6B64\u6587\u4EF6"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"				"}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"loaded"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"				"}),n(l.span,{style:{color:"#D8DEE9"},children:"queue"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"push"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"			"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"queue"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u62FC\u63A5bundle\u7684\u4EE3\u7801(\u5B57\u7B26\u4E32)"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"bundle"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"graph"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"let"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"modules"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'""'}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#D8DEE9"},children:"graph"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"forEach"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"mod"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"code"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"mapping"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"mod"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"		"}),n(l.span,{style:{color:"#616E88"},children:"//  \u56FE\u8868\u4E2D\u7684\u6BCF\u4E2A\u6A21\u5757\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u90FD\u6709\u4E00\u4E2A`entry`. \u6211\u4EEC\u4F7F\u7528`\u6A21\u5757\u7684id`\u4F5C\u4E3A`key`\u548C\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A`value` (\u7528\u6570\u7EC4\u56E0\u4E3A\u6211\u4EEC\u5728\u6BCF\u4E2A\u6A21\u5757\u4E2D\u67092\u4E2A\u503C) ."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"		"}),n(l.span,{style:{color:"#616E88"},children:"// \u7B2C\u4E00\u4E2A\u503C\u662F\u7528\u51FD\u6570\u5305\u88C5\u7684\u6BCF\u4E2A\u6A21\u5757\u7684\u4EE3\u7801. \u8FD9\u662F\u56E0\u4E3A\u6A21\u5757\u5E94\u8BE5\u88AB \u9650\u5B9A\u8303\u56F4: \u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\u5B9A\u4E49\u53D8\u91CF\u4E0D\u4F1A\u5F71\u54CD \u5176\u4ED6\u6A21\u5757 \u6216 \u5168\u5C40\u8303\u56F4."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"		"}),n(l.span,{style:{color:"#616E88"},children:"// \u6211\u4EEC\u7684\u6A21\u5757\u5728\u6211\u4EEC\u5C06\u5B83\u4EEC`\u8F6C\u6362{\u88AB babel \u8F6C\u8BD1}`\u540E, \u4F7F\u7528`commonjs`\u6A21\u5757\u7CFB\u7EDF: \u4ED6\u4EEC\u671F\u671B\u4E00\u4E2A`require`, \u4E00\u4E2A`module`\u548C`exports`\u5BF9\u8C61\u53EF\u7528. \u90A3\u4E9B\u5728\u6D4F\u89C8\u5668\u4E2D\u901A\u5E38\u4E0D\u53EF\u7528,\u6240\u4EE5\u6211\u4EEC\u5C06\u5B83\u4EEC\u5B9E\u73B0\u5E76\u5C06\u5B83\u4EEC\u6CE8\u5165\u5230\u51FD\u6570\u5305\u88C5\u4E2D."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"		"}),n(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u4E8E\u7B2C\u4E8C\u4E2A\u503C,\u6211\u4EEC\u7528`stringify`\u89E3\u6790\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\u4E4B\u95F4\u7684\u5173\u7CFB(\u4E5F\u5C31\u662F\u4E0A\u6587\u7684asset.mapping). \u89E3\u6790\u540E\u7684\u5BF9\u8C61\u770B\u8D77\u6765\u50CF\u8FD9\u6837: `{'./relative/path': 1}`."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"		"}),n(l.span,{style:{color:"#616E88"},children:"// \u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u6A21\u5757\u7684\u88AB\u8F6C\u6362\u540E\u4F1A\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u6765\u8C03\u7528`require()`. \u5F53\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u65F6,\u6211\u4EEC\u5E94\u8BE5\u80FD\u591F\u77E5\u9053\u4F9D\u8D56\u56FE\u4E2D\u7684\u54EA\u4E2A\u6A21\u5757\u5BF9\u5E94\u4E8E\u8BE5\u6A21\u5757\u7684\u76F8\u5BF9\u8DEF\u5F84."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"		"}),n(l.span,{style:{color:"#D8DEE9"},children:"modules"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#81A1C1"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"id"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:": ["})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#A3BE8C"},children:"      function (require, module, exports) { "}),n(l.span,{style:{color:"#81A1C1"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"code"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:" },"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#A3BE8C"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"JSON"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"stringify"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"mapping"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#A3BE8C"},children:"    ],"}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"//   \u6700\u540E,\u6211\u4EEC\u5B9E\u73B0\u81EA\u8C03\u51FD\u6570\u7684\u4E3B\u4F53."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"//   \u6211\u4EEC\u9996\u5148\u521B\u5EFA\u4E00\u4E2A`require()`\u23F0\u51FD\u6570: \u5B83\u63A5\u53D7\u4E00\u4E2A `\u6A21\u5757ID` \u5E76\u5728\u6211\u4EEC\u4E4B\u524D\u6784\u5EFA\u7684`\u6A21\u5757`\u5BF9\u8C61\u67E5\u627E\u5B83."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"//   \u901A\u8FC7\u89E3\u6784`const [fn, mapping] = modules[id]`\u6765\u83B7\u5F97\u6211\u4EEC\u7684\u5305\u88C5\u51FD\u6570 \u548C`mappings`\u5BF9\u8C61."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"//   \u6211\u4EEC\u6A21\u5757\u7684\u4EE3\u7801\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u800C\u4E0D\u662F\u6A21\u5757ID\u8C03\u7528`require()`."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u4F46\u6211\u4EEC\u7684`require`\u{1F31F}\u51FD\u6570\u63A5\u6536 `\u6A21\u5757ID`. \u53E6\u5916,\u4E24\u4E2A\u6A21\u5757\u53EF\u80FD`require()`\u76F8\u540C\u7684\u76F8\u5BF9\u8DEF\u5F84,\u4F46\u610F\u5473\u7740\u4E24\u4E2A\u4E0D\u540C\u7684\u6A21\u5757."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"//     \u8981\u5904\u7406\u8FD9\u4E2A\u95EE\u9898,\u5F53\u9700\u8981\u4E00\u4E2A\u6A21\u5757\u65F6,\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684,\u4E13\u7528\u7684`require`\u51FD\u6570\u4F9B\u5B83\u4F7F\u7528."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u5B83\u5C06\u662F\u7279\u5B9A\u7684,\u5E76\u5C06\u77E5\u9053\u901A\u8FC7\u4F7F\u7528`\u6A21\u5757\u7684mapping\u5BF9\u8C61`\u5C06 `\u5176\u76F8\u5BF9\u8DEF\u5F84` \u8F6C\u6362\u4E3A`ID`."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u8BE5mapping\u5BF9\u8C61\u6070\u597D\u662F\u8BE5\u7279\u5B9A\u6A21\u5757\u7684`\u76F8\u5BF9\u8DEF\u5F84\u548C\u6A21\u5757ID`\u4E4B\u95F4\u7684\u6620\u5C04."})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// \u6700\u540E,\u4F7F\u7528`commonjs`,\u5F53\u6A21\u5757\u9700\u8981\u88AB\u5BFC\u51FA\u65F6,\u5B83\u53EF\u4EE5\u901A\u8FC7\u6539\u53D8exports\u5BF9\u8C61\u6765\u66B4\u9732\u6A21\u5757\u7684\u503C."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"	"}),n(l.span,{style:{color:"#616E88"},children:"// require\u51FD\u6570\u6700\u540E\u4F1A\u8FD4\u56DEexports\u5BF9\u8C61."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"result"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"    (function(modules) {"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"      function require(id) {"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        const [ fn, mapping ] = modules[id]"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        function localRequire(name) {"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"          return require(mapping[name])"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        }"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        const module = { exports: {} }"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        fn(localRequire, module, module.exports)"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"        return module.exports"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"      };"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#A3BE8C"},children:"      require(0);"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#A3BE8C"},children:"    })({ "}),n(l.span,{style:{color:"#81A1C1"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"modules"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:" })"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#A3BE8C"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"	"}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"result"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"graph"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createGraph"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"./example/entry.js"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"console"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"graph"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"graph"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"result"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"bundle"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"graph"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dist"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"path"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"resolve"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"process"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cwd"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"./dist"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"existsSync"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dist"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"rmSync"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dist"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"recursive"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"mkdirSync"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dist"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"fs"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"writeFileSync"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"path"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"resolve"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dist"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"./bundle.js"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"result"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line"})]})}),e(l.div,{className:"line-numbers-wrapper",children:[n(l.span,{className:"line-number",children:"1"}),n(l.span,{className:"line-number",children:"2"}),n(l.span,{className:"line-number",children:"3"}),n(l.span,{className:"line-number",children:"4"}),n(l.span,{className:"line-number",children:"5"}),n(l.span,{className:"line-number",children:"6"}),n(l.span,{className:"line-number",children:"7"}),n(l.span,{className:"line-number",children:"8"}),n(l.span,{className:"line-number",children:"9"}),n(l.span,{className:"line-number",children:"10"}),n(l.span,{className:"line-number",children:"11"}),n(l.span,{className:"line-number",children:"12"}),n(l.span,{className:"line-number",children:"13"}),n(l.span,{className:"line-number",children:"14"}),n(l.span,{className:"line-number",children:"15"}),n(l.span,{className:"line-number",children:"16"}),n(l.span,{className:"line-number",children:"17"}),n(l.span,{className:"line-number",children:"18"}),n(l.span,{className:"line-number",children:"19"}),n(l.span,{className:"line-number",children:"20"}),n(l.span,{className:"line-number",children:"21"}),n(l.span,{className:"line-number",children:"22"}),n(l.span,{className:"line-number",children:"23"}),n(l.span,{className:"line-number",children:"24"}),n(l.span,{className:"line-number",children:"25"}),n(l.span,{className:"line-number",children:"26"}),n(l.span,{className:"line-number",children:"27"}),n(l.span,{className:"line-number",children:"28"}),n(l.span,{className:"line-number",children:"29"}),n(l.span,{className:"line-number",children:"30"}),n(l.span,{className:"line-number",children:"31"}),n(l.span,{className:"line-number",children:"32"}),n(l.span,{className:"line-number",children:"33"}),n(l.span,{className:"line-number",children:"34"}),n(l.span,{className:"line-number",children:"35"}),n(l.span,{className:"line-number",children:"36"}),n(l.span,{className:"line-number",children:"37"}),n(l.span,{className:"line-number",children:"38"}),n(l.span,{className:"line-number",children:"39"}),n(l.span,{className:"line-number",children:"40"}),n(l.span,{className:"line-number",children:"41"}),n(l.span,{className:"line-number",children:"42"}),n(l.span,{className:"line-number",children:"43"}),n(l.span,{className:"line-number",children:"44"}),n(l.span,{className:"line-number",children:"45"}),n(l.span,{className:"line-number",children:"46"}),n(l.span,{className:"line-number",children:"47"}),n(l.span,{className:"line-number",children:"48"}),n(l.span,{className:"line-number",children:"49"}),n(l.span,{className:"line-number",children:"50"}),n(l.span,{className:"line-number",children:"51"}),n(l.span,{className:"line-number",children:"52"}),n(l.span,{className:"line-number",children:"53"}),n(l.span,{className:"line-number",children:"54"}),n(l.span,{className:"line-number",children:"55"}),n(l.span,{className:"line-number",children:"56"}),n(l.span,{className:"line-number",children:"57"}),n(l.span,{className:"line-number",children:"58"}),n(l.span,{className:"line-number",children:"59"}),n(l.span,{className:"line-number",children:"60"}),n(l.span,{className:"line-number",children:"61"}),n(l.span,{className:"line-number",children:"62"}),n(l.span,{className:"line-number",children:"63"}),n(l.span,{className:"line-number",children:"64"}),n(l.span,{className:"line-number",children:"65"}),n(l.span,{className:"line-number",children:"66"}),n(l.span,{className:"line-number",children:"67"}),n(l.span,{className:"line-number",children:"68"}),n(l.span,{className:"line-number",children:"69"}),n(l.span,{className:"line-number",children:"70"}),n(l.span,{className:"line-number",children:"71"}),n(l.span,{className:"line-number",children:"72"}),n(l.span,{className:"line-number",children:"73"}),n(l.span,{className:"line-number",children:"74"}),n(l.span,{className:"line-number",children:"75"}),n(l.span,{className:"line-number",children:"76"}),n(l.span,{className:"line-number",children:"77"}),n(l.span,{className:"line-number",children:"78"}),n(l.span,{className:"line-number",children:"79"}),n(l.span,{className:"line-number",children:"80"}),n(l.span,{className:"line-number",children:"81"}),n(l.span,{className:"line-number",children:"82"}),n(l.span,{className:"line-number",children:"83"}),n(l.span,{className:"line-number",children:"84"}),n(l.span,{className:"line-number",children:"85"}),n(l.span,{className:"line-number",children:"86"}),n(l.span,{className:"line-number",children:"87"}),n(l.span,{className:"line-number",children:"88"}),n(l.span,{className:"line-number",children:"89"}),n(l.span,{className:"line-number",children:"90"}),n(l.span,{className:"line-number",children:"91"}),n(l.span,{className:"line-number",children:"92"}),n(l.span,{className:"line-number",children:"93"}),n(l.span,{className:"line-number",children:"94"}),n(l.span,{className:"line-number",children:"95"}),n(l.span,{className:"line-number",children:"96"}),n(l.span,{className:"line-number",children:"97"}),n(l.span,{className:"line-number",children:"98"}),n(l.span,{className:"line-number",children:"99"}),n(l.span,{className:"line-number",children:"100"}),n(l.span,{className:"line-number",children:"101"}),n(l.span,{className:"line-number",children:"102"}),n(l.span,{className:"line-number",children:"103"}),n(l.span,{className:"line-number",children:"104"}),n(l.span,{className:"line-number",children:"105"}),n(l.span,{className:"line-number",children:"106"}),n(l.span,{className:"line-number",children:"107"}),n(l.span,{className:"line-number",children:"108"}),n(l.span,{className:"line-number",children:"109"}),n(l.span,{className:"line-number",children:"110"}),n(l.span,{className:"line-number",children:"111"}),n(l.span,{className:"line-number",children:"112"}),n(l.span,{className:"line-number",children:"113"}),n(l.span,{className:"line-number",children:"114"}),n(l.span,{className:"line-number",children:"115"}),n(l.span,{className:"line-number",children:"116"}),n(l.span,{className:"line-number",children:"117"}),n(l.span,{className:"line-number",children:"118"}),n(l.span,{className:"line-number",children:"119"}),n(l.span,{className:"line-number",children:"120"}),n(l.span,{className:"line-number",children:"121"}),n(l.span,{className:"line-number",children:"122"}),n(l.span,{className:"line-number",children:"123"}),n(l.span,{className:"line-number",children:"124"}),n(l.span,{className:"line-number",children:"125"}),n(l.span,{className:"line-number",children:"126"}),n(l.span,{className:"line-number",children:"127"}),n(l.span,{className:"line-number",children:"128"}),n(l.span,{className:"line-number",children:"129"}),n(l.span,{className:"line-number",children:"130"}),n(l.span,{className:"line-number",children:"131"}),n(l.span,{className:"line-number",children:"132"}),n(l.span,{className:"line-number",children:"133"}),n(l.span,{className:"line-number",children:"134"}),n(l.span,{className:"line-number",children:"135"}),n(l.span,{className:"line-number",children:"136"}),n(l.span,{className:"line-number",children:"137"}),n(l.span,{className:"line-number",children:"138"}),n(l.span,{className:"line-number",children:"139"}),n(l.span,{className:"line-number",children:"140"}),n(l.span,{className:"line-number",children:"141"}),n(l.span,{className:"line-number",children:"142"}),n(l.span,{className:"line-number",children:"143"}),n(l.span,{className:"line-number",children:"144"}),n(l.span,{className:"line-number",children:"145"}),n(l.span,{className:"line-number",children:"146"}),n(l.span,{className:"line-number",children:"147"}),n(l.span,{className:"line-number",children:"148"}),n(l.span,{className:"line-number",children:"149"}),n(l.span,{className:"line-number",children:"150"}),n(l.span,{className:"line-number",children:"151"}),n(l.span,{className:"line-number",children:"152"}),n(l.span,{className:"line-number",children:"153"}),n(l.span,{className:"line-number",children:"154"}),n(l.span,{className:"line-number",children:"155"}),n(l.span,{className:"line-number",children:"156"}),n(l.span,{className:"line-number",children:"157"}),n(l.span,{className:"line-number",children:"158"}),n(l.span,{className:"line-number",children:"159"}),n(l.span,{className:"line-number",children:"160"}),n(l.span,{className:"line-number",children:"161"}),n(l.span,{className:"line-number",children:"162"}),n(l.span,{className:"line-number",children:"163"}),n(l.span,{className:"line-number",children:"164"}),n(l.span,{className:"line-number",children:"165"}),n(l.span,{className:"line-number",children:"166"}),n(l.span,{className:"line-number",children:"167"}),n(l.span,{className:"line-number",children:"168"}),n(l.span,{className:"line-number",children:"169"}),n(l.span,{className:"line-number",children:"170"}),n(l.span,{className:"line-number",children:"171"})]})]})]})}function p(s={}){const{wrapper:l}=s.components||{};return l?n(l,Object.assign({},s,{children:n(c,s)})):c(s)}const d="2023/11/9 01:52:20",h=`# minipack


\`metadata:\`

**\u539F\u6807\u9898:** minipack-explain

**\u94FE\u63A5:** https://github.com/chinanf-boy/minipack-explain/tree/master

**\u6587\u7AE0\u526F\u6807\u9898:** 

---

\u7528javascript\u7F16\u5199\u7684\u73B0\u4EE3\u6A21\u5757\u6253\u5305\u5668\u7684\u7B80\u5316\u793A\u4F8B\uFF0C\u5B66\u4E60\u81EA minipack-explain\u3002

\u5C0F\u4F18\u5316\uFF1A\u5728\u6784\u5EFA\u4F9D\u8D56\u56FE\u65F6\u907F\u514D\u4E86\u91CD\u590D\u6536\u96C6\u4F9D\u8D56\u3002

\`\`\`js
//
// \u6A21\u5757\u6346\u7ED1\u5668 \u5C06 \u5C0F\u5757\u4EE3\u7801 \u7F16\u8BD1\u6210 \u66F4\u5927\u548C\u66F4\u590D\u6742\u7684\u4EE3\u7801,\u53EF\u4EE5\u8FD0\u884C\u5728Web\u6D4F\u89C8\u5668\u4E2D.

// \u8FD9\u4E9B\u5C0F\u5757\u53EA\u662FJavaScript\u6587\u4EF6\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB,\u800C\u8FD9\u6B63\u662F\u7531\u6A21\u5757\u7CFB\u7EDF\u8868\u793A
// https://webpack.js.org/concepts/modules

// \u6A21\u5757\u6346\u7ED1\u5668\u5177\u6709 \u5165\u53E3\u6587\u4EF6 \u7684\u6982\u5FF5,\u800C\u4E0D\u662F\u6DFB\u52A0\u4E00\u4E9B\u811A\u672C\u6807\u7B7E\u5728\u6D4F\u89C8\u5668\u4E2D\u5E76\u8BA9\u5B83\u4EEC\u8FD0\u884C,\u6211\u4EEC\u8BA9 \u6346\u7ED1\u5668 \u77E5\u9053
// \u54EA\u4E2A\u6587\u4EF6\u662F\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u7684\u4E3B\u8981\u6587\u4EF6.\u8BE5\u6587\u4EF6\u80FD\u5F15\u5BFC\u6211\u4EEC\u7684\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F.

// \u6211\u4EEC\u7684\u6253\u5305\u7A0B\u5E8F\u5C06\u4ECE\u8BE5\u5165\u53E3\u6587\u4EF6\u5F00\u59CB,\u5E76\u5C1D\u8BD5\u7406\u89E3\u5B83\u4F9D\u8D56\u4E8E\u54EA\u4E9B\u6587\u4EF6. \u7136\u540E,\u5B83\u4F1A\u5C1D\u8BD5\u4E86\u89E3\u54EA\u4E9B\u6587\u4EF6
// \u4F9D\u8D56\u5173\u7CFB\u53D6\u51B3\u4E8E\u5B83,\u5B83\u4F1A\u7EE7\u7EED\u8FD9\u6837\u505A,\u76F4\u5230\u5B83\u53D1\u73B0\u6211\u4EEC\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684 \u6BCF\u4E2A\u6A21\u5757,\u4EE5\u53CA\u5B83\u4EEC\u5982\u4F55 \u76F8\u4E92\u4F9D\u8D56.
// \u8FD9\u79CD\u5BF9\u9879\u76EE\u7684\u7406\u89E3\u88AB\u79F0\u4E3A\`\u4F9D\u8D56\u56FE\`.

// \u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D,\u6211\u4EEC\u5C06\u521B\u5EFA\u4E00\u4E2A \u4F9D\u8D56\u5173\u7CFB\u56FE \u5E76\u5C06\u5176\u7528\u4E8E\u6253\u5305
// \u5B83\u7684\u6240\u6709\u6A21\u5757\u90FD\u6346\u7ED1\u5728\u4E00\u8D77.

// \u8BA9\u6211\u4EEC\u5F00\u59CB : )

// >\u8BF7\u6CE8\u610F: \u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u7B80\u5316\u7684\u4F8B\u5B50
// \u5BF9\u8FD9\u4E9B\u4F8B\u5B50\u4EC5\u4EC5\u6267\u884C\u4E00\u6B21\u5FAA\u73AF\u4F9D\u8D56,\u7F13\u5B58\u6A21\u5757\u5BFC\u51FA\u548C\u89E3\u6790\u6BCF\u4E2A\u6A21\u5757
// \u5176\u4ED6\u65B9\u9762\u7684\u5904\u7406\u90FD\u8DF3\u8FC7,\u4F7F\u8FD9\u4E2A\u4F8B\u5B50\u5C3D\u53EF\u80FD\u7B80\u5355.
const path = require("path");
const fs = require("fs");
const { parse, traverse, transformFromAst } = require("@babel/core");

let ID = 0;
const imported = new Map();

/**
 *
 * @param {string} filename \u5165\u53E3\u8DEF\u5F84
 * @returns { id: number, code: string, filename: string, dependencies: string[], loaded: boolean }
 * id: \u6A21\u5757ID\u3001 code: \u6A21\u5757\u6E90\u7801\u3001 filename: \u6587\u4EF6\u540D\u3001 dependencies: \u5F53\u524D\u6A21\u5757\u7684\u4F9D\u8D56\u3001 loaded: \u5426\u52A0\u8F7D\u8FC7\u5F53\u524D\u6A21\u5757
 */
function createAsset(filename) {
	// \u52A0\u8F7D\u8FC7\u6B64\u6587\u4EF6\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u53EF\u4EE5\u9632\u6B62ID\u53D8\u5316
	if (imported.has(filename)) {
		return imported.get(filename);
	}
	const content = fs.readFileSync(filename, "utf-8");

	const ast = parse(content, { sourceType: "module" });

	const dependencies = [];

	traverse(ast, {
		ImportDeclaration({ node }) {
			const source = node.source.value;
			dependencies.push(source);
		},
	});

	const id = ID++;

	// \u8F6C\u4E3Ababel\u9884\u8BBE\u7684ES5
	const { code } = transformFromAst(ast, content, {
		presets: ["@babel/preset-env"],
	});

	const asset = {
		id,
		code,
		filename,
		dependencies,
		loaded: false,
	};
	imported.set(filename, asset);
	return asset;
}

function createGraph(filename) {
	const entryAsset = createAsset(filename);

	entryAsset.loaded = true;
	// \u4E0B\u9762\u4E24\u884C\u7684\u505A\u6CD5\u5F88\u5DE7\u5999\uFF0C\u53EF\u4EE5\u8FBE\u5230\u9012\u5F52\u6784\u5EFA\u4F9D\u8D56\u56FE\u7684\u4F5C\u7528
	const queue = [entryAsset];
	for (const asset of queue) {
		asset.mapping = {};

		const { filename, dependencies } = asset;
		const dirname = path.dirname(filename);

		dependencies.forEach((relativePath) => {
			const absolutePath = path.join(dirname, relativePath);
			const child = createAsset(absolutePath);
			const { id, loaded } = child;

			// { [path: string]: number } \u8BB0\u5F55\u4F9D\u8D56\u548C\u4F9D\u8D56ID
			asset.mapping[relativePath] = id;

			if (!loaded) {
				// \u6807\u8BB0\u52A0\u8F7D\u8FC7\u6B64\u6587\u4EF6
				child.loaded = true;
				queue.push(child);
			}
		});
	}

	return queue;
}

// \u62FC\u63A5bundle\u7684\u4EE3\u7801(\u5B57\u7B26\u4E32)
function bundle(graph) {
	let modules = "";

	graph.forEach((mod) => {
		const { id, code, mapping } = mod;
		//  \u56FE\u8868\u4E2D\u7684\u6BCF\u4E2A\u6A21\u5757\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u90FD\u6709\u4E00\u4E2A\`entry\`. \u6211\u4EEC\u4F7F\u7528\`\u6A21\u5757\u7684id\`\u4F5C\u4E3A\`key\`\u548C\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\`value\` (\u7528\u6570\u7EC4\u56E0\u4E3A\u6211\u4EEC\u5728\u6BCF\u4E2A\u6A21\u5757\u4E2D\u67092\u4E2A\u503C) .

		// \u7B2C\u4E00\u4E2A\u503C\u662F\u7528\u51FD\u6570\u5305\u88C5\u7684\u6BCF\u4E2A\u6A21\u5757\u7684\u4EE3\u7801. \u8FD9\u662F\u56E0\u4E3A\u6A21\u5757\u5E94\u8BE5\u88AB \u9650\u5B9A\u8303\u56F4: \u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\u5B9A\u4E49\u53D8\u91CF\u4E0D\u4F1A\u5F71\u54CD \u5176\u4ED6\u6A21\u5757 \u6216 \u5168\u5C40\u8303\u56F4.

		// \u6211\u4EEC\u7684\u6A21\u5757\u5728\u6211\u4EEC\u5C06\u5B83\u4EEC\`\u8F6C\u6362{\u88AB babel \u8F6C\u8BD1}\`\u540E, \u4F7F\u7528\`commonjs\`\u6A21\u5757\u7CFB\u7EDF: \u4ED6\u4EEC\u671F\u671B\u4E00\u4E2A\`require\`, \u4E00\u4E2A\`module\`\u548C\`exports\`\u5BF9\u8C61\u53EF\u7528. \u90A3\u4E9B\u5728\u6D4F\u89C8\u5668\u4E2D\u901A\u5E38\u4E0D\u53EF\u7528,\u6240\u4EE5\u6211\u4EEC\u5C06\u5B83\u4EEC\u5B9E\u73B0\u5E76\u5C06\u5B83\u4EEC\u6CE8\u5165\u5230\u51FD\u6570\u5305\u88C5\u4E2D.

		// \u5BF9\u4E8E\u7B2C\u4E8C\u4E2A\u503C,\u6211\u4EEC\u7528\`stringify\`\u89E3\u6790\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\u4E4B\u95F4\u7684\u5173\u7CFB(\u4E5F\u5C31\u662F\u4E0A\u6587\u7684asset.mapping). \u89E3\u6790\u540E\u7684\u5BF9\u8C61\u770B\u8D77\u6765\u50CF\u8FD9\u6837: \`{'./relative/path': 1}\`.

		// \u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u6A21\u5757\u7684\u88AB\u8F6C\u6362\u540E\u4F1A\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u6765\u8C03\u7528\`require()\`. \u5F53\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u65F6,\u6211\u4EEC\u5E94\u8BE5\u80FD\u591F\u77E5\u9053\u4F9D\u8D56\u56FE\u4E2D\u7684\u54EA\u4E2A\u6A21\u5757\u5BF9\u5E94\u4E8E\u8BE5\u6A21\u5757\u7684\u76F8\u5BF9\u8DEF\u5F84.
		modules += \`\${id}: [
      function (require, module, exports) { \${code} },
      \${JSON.stringify(mapping)}
    ],\`;
	});

	//   \u6700\u540E,\u6211\u4EEC\u5B9E\u73B0\u81EA\u8C03\u51FD\u6570\u7684\u4E3B\u4F53.

	//   \u6211\u4EEC\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\`require()\`\u23F0\u51FD\u6570: \u5B83\u63A5\u53D7\u4E00\u4E2A \`\u6A21\u5757ID\` \u5E76\u5728\u6211\u4EEC\u4E4B\u524D\u6784\u5EFA\u7684\`\u6A21\u5757\`\u5BF9\u8C61\u67E5\u627E\u5B83.

	//   \u901A\u8FC7\u89E3\u6784\`const [fn, mapping] = modules[id]\`\u6765\u83B7\u5F97\u6211\u4EEC\u7684\u5305\u88C5\u51FD\u6570 \u548C\`mappings\`\u5BF9\u8C61.

	//   \u6211\u4EEC\u6A21\u5757\u7684\u4EE3\u7801\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u800C\u4E0D\u662F\u6A21\u5757ID\u8C03\u7528\`require()\`.

	// \u4F46\u6211\u4EEC\u7684\`require\`\u{1F31F}\u51FD\u6570\u63A5\u6536 \`\u6A21\u5757ID\`. \u53E6\u5916,\u4E24\u4E2A\u6A21\u5757\u53EF\u80FD\`require()\`\u76F8\u540C\u7684\u76F8\u5BF9\u8DEF\u5F84,\u4F46\u610F\u5473\u7740\u4E24\u4E2A\u4E0D\u540C\u7684\u6A21\u5757.

	//     \u8981\u5904\u7406\u8FD9\u4E2A\u95EE\u9898,\u5F53\u9700\u8981\u4E00\u4E2A\u6A21\u5757\u65F6,\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684,\u4E13\u7528\u7684\`require\`\u51FD\u6570\u4F9B\u5B83\u4F7F\u7528.

	// \u5B83\u5C06\u662F\u7279\u5B9A\u7684,\u5E76\u5C06\u77E5\u9053\u901A\u8FC7\u4F7F\u7528\`\u6A21\u5757\u7684mapping\u5BF9\u8C61\`\u5C06 \`\u5176\u76F8\u5BF9\u8DEF\u5F84\` \u8F6C\u6362\u4E3A\`ID\`.

	// \u8BE5mapping\u5BF9\u8C61\u6070\u597D\u662F\u8BE5\u7279\u5B9A\u6A21\u5757\u7684\`\u76F8\u5BF9\u8DEF\u5F84\u548C\u6A21\u5757ID\`\u4E4B\u95F4\u7684\u6620\u5C04.

	// \u6700\u540E,\u4F7F\u7528\`commonjs\`,\u5F53\u6A21\u5757\u9700\u8981\u88AB\u5BFC\u51FA\u65F6,\u5B83\u53EF\u4EE5\u901A\u8FC7\u6539\u53D8exports\u5BF9\u8C61\u6765\u66B4\u9732\u6A21\u5757\u7684\u503C.
	// require\u51FD\u6570\u6700\u540E\u4F1A\u8FD4\u56DEexports\u5BF9\u8C61.
	const result = \`
    (function(modules) {
      function require(id) {
        const [ fn, mapping ] = modules[id]

        function localRequire(name) {
          return require(mapping[name])
        }

        const module = { exports: {} }

        fn(localRequire, module, module.exports)

        return module.exports
      };
      require(0);
    })({ \${modules} })
  \`;

	return result;
}

const graph = createGraph("./example/entry.js");
console.log("graph", graph);
const result = bundle(graph);

const dist = path.resolve(process.cwd(), "./dist");
fs.existsSync(dist) && fs.rmSync(dist, { recursive: true });
fs.mkdirSync(dist);
fs.writeFileSync(path.resolve(dist, "./bundle.js"), result);

\`\`\``;export{h as content,p as default,o as frontmatter,d as lastUpdatedTime,t as title,i as toc};