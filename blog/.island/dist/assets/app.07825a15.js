import{u as T,s as V,g as Ne,a as ee,_ as we,b as q,T as ye,c as te,i as ke,d as A,e as Se,f as Ce,h as L,j as _,k as H,l as $e,m as $,n as ne,o as Q,p as G,q as W,t as Ee,r as Te,W as Le,v as Z,w as Pe,x as De,y as ae,z as Ie,D as Ae,A as Re}from"../client-entry.js";import*as u from"react";import Me,{useState as N,useRef as j,useCallback as re,useEffect as E,Fragment as ie,useContext as _e,useLayoutEffect as Oe}from"react";import{jsxs as m,jsx as e,Fragment as ce}from"react/jsx-runtime";import{n as P,a as ze,r as He,b as je,C as oe,g as Be,o as se}from"./utils.663312f2.js";import{Link as Fe,useLocation as B,matchRoutes as Ge}from"./index.f6184fce.js";function We(){const{siteData:t}=T();return m("div",{m:"auto t-50",p:"t-16 x-6 b-24 sm:t-24 x-8 b-40",text:"center",flex:"center col",children:[e("p",{text:"6xl",font:"semibold",children:"404"}),e("h1",{pt:"3",text:"xl","leading-5":"",font:"bold",children:"PAGE NOT FOUND"}),e("div",{m:"t-6 x-auto b-4.5",w:"16",style:{height:"1px"},bg:"divider-default"}),e("div",{pt:"5",children:e("a",{"inline-block":"",border:"1px solid brand",rounded:"2xl",p:"y-1 x-4",text:"sm brand","font-medium":"",transition:"border-color duration-300 color duration-300",hover:"border-color-brand-dark color-brand-dark",href:t.base,"aria-label":"go to home",children:"Take me home"})})]})}function Ue(t){var n;return e("button",{className:`${V.switch} ${t.className}`,id:(n=t.id)!=null?n:"",type:"button",role:"switch",...t.onClick?{onClick:t.onClick}:{},children:e("span",{className:V.check,children:e("span",{className:V.icon,children:t.children})})})}const Ke=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...t},u.createElement("path",{d:"M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"}),u.createElement("path",{d:"M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"}),u.createElement("path",{d:"M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"}),u.createElement("path",{d:"M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"}),u.createElement("path",{d:"M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"}),u.createElement("path",{d:"M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"}),u.createElement("path",{d:"M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),u.createElement("path",{d:"M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"}),u.createElement("path",{d:"M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"})),Ve=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...t},u.createElement("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}));function de(t){const n=Ne();return m(Ue,{onClick:n,children:[e(Ke,{className:ee.sun}),e(Ve,{className:ee.moon})]})}const qe=t=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...t},u.createElement("path",{fill:"#888888",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})),Qe=t=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 24 24",...t},u.createElement("g",{fill:"none",stroke:"var(--island-c-brand)",strokeLinecap:"round",strokeWidth:2},u.createElement("path",{strokeDasharray:60,strokeDashoffset:60,strokeOpacity:.3,d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),u.createElement("path",{strokeDasharray:15,strokeDashoffset:15,d:"M12 3C16.9706 3 21 7.02944 21 12"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),u.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"}))));function Ze(t){const{suggestion:n,query:r}=t,a=()=>{if(n.type==="header"){const{header:l,headerHighlightIndex:i}=n,c=l.slice(0,i),d=l.slice(i+r.length);return m("div",{font:"medium",children:[e("span",{children:c}),e("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"text-1",children:r}),e("span",{children:d})]})}else return e("div",{font:"medium",children:n.header})},s=()=>{if(n.type!=="content")return;const{statementHighlightIndex:l,statement:i}=n,c=i.slice(0,l),d=i.slice(l+r.length);return m("div",{font:"normal",text:"sm gray-light",w:"100%",children:[e("span",{children:c}),e("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"[#000]",children:r}),e("span",{children:d})]})};return m("div",{"border-b-1":"","border-t-1":"","table-cell":"",p:"x-3 y-2",hover:"bg-[#f3f4f5] ",text:"#2c3e50",className:`border-right-none border-[#eaecef] ${t.isCurrent?"bg-[#f3f4f5]":"bg-white"}`,transition:"bg duration-200",children:[e("div",{font:"medium",text:"sm",children:a()}),n.type==="content"&&s()]})}const U={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ENTER:"Enter",SEARCH:"KeyK"};function Xe(t){const[n,r]=N(""),[a,s]=N([]),[l,i]=N(!1),[c,d]=N(!1),[o,h]=N(!1),[p,f]=N(-1),x=j(),y=j(),[S,v]=N(!0),b=j(null),k=!l||c,C=!k&&a.length===0,D=re(async()=>{if(x.current)return Promise.resolve();{const{PageSearcher:g}=await we(()=>import("./search.69ff9983.js"),["assets/search.69ff9983.js","client-entry.js","assets/utils.663312f2.js","assets/index.f6184fce.js"]);x.current=new g(t.langRoutePrefix),await x.current.init(),i(!0)}},[t.langRoutePrefix]),I=re(async g=>{const w=g.target.value;r(w),y.current=y.current||D(),await y.current,d(!0);const R=await x.current.match(w);d(!1),s(R)},[D]);return E(()=>{const g=w=>{switch(w.code){case U.SEARCH:(w.ctrlKey||w.metaKey)&&b.current&&(w.preventDefault(),o?(h(!1),b.current.blur()):(h(!0),b.current.focus()));break;case U.ARROW_DOWN:w.preventDefault(),f((p+1)%a.length);break;case U.ARROW_UP:w.preventDefault(),f((p-1+a.length)%a.length);break;case U.ENTER:if(p>=0){const R=a[p];window.location.href=R.link}break}};return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}},[p,o,a]),E(()=>{v(!1)},[]),m("div",{flex:"","items-center":"~",relative:"",mr:"2",font:"semibold",children:[e(qe,{w:"5",h:"5",fill:"currentColor",onClick:()=>{h(!0),b.current.focus()}}),e("input",{disabled:S,cursor:"text focus:auto",placeholder:"Search",height:"8",border:"none",type:"text",text:"sm",p:"t-0 r-2 b-0 l-2",transition:"all duration-200 ease",className:`rounded-sm ${q.searchInput} ${o?q.focus:""}`,"aria-label":"Search",autoComplete:"off",onChange:I,onBlur:()=>setTimeout(()=>h(!1),200),onFocus:()=>{h(!0),y.current=D()},ref:b}),m("div",{m:"r-3",w:"10",h:"6",p:"x-1.5",rounded:"md",border:"1px solid gray-light-3",text:"xs gray-light-3",flex:"~","items-center":"~",justify:"around",className:q.searchCommand,children:[e("span",{children:"\u2318"}),e("span",{children:"K"})]}),o&&n&&m("ul",{pos:"fixed sm:absolute top-12 sm:top-8 left-0",z:"60","border-1":"",p:"2",list:"none",bg:"bg-default",className:"w-100% sm:min-w-500px sm:max-w-700px",children:[a.map((g,w)=>e("li",{rounded:"sm",cursor:"pointer",w:"100%",className:"border-collapse",children:e("a",{block:"",href:g.link,className:"whitespace-normal",children:m("div",{table:"",w:"100%",className:"border-collapse",children:[e("div",{w:"35%","border-t-1":"","border-b-1":"","border-r-1":"","border-left":"none","table-cell":"",align:"middle right",p:"1.2",text:"sm right [#2c3e50]",font:"semibold",className:"bg-[#f5f5f5] border-[#eaecef]",children:g.title}),e(Ze,{suggestion:g,query:n,isCurrent:w===p})]})})},g.title)),C&&e("li",{flex:"center",children:e("div",{p:"2",text:"sm #2c3e50",children:"No results found"})}),k&&e("li",{flex:"center",children:e("div",{p:"2",text:"sm",children:e(Qe,{})})})]})]})}const Ye=/^(https?:)?\/\//;function O(t){const{href:n="/",children:r,className:a=""}=t,s=Ye.test(n),l=ye.some(o=>n.startsWith(o)),i=s&&!l?"_blank":"",c=s?"noopener noreferrer":void 0,d=ke()?window.location.pathname:"";return s?e("a",{href:n,target:i,rel:c,className:`${te.link} ${a}`,children:r}):e(Fe,{className:`${te.link} ${a}`,to:n,rel:c,target:i,state:{from:d},children:r})}function me(t){const{pathname:n}=t,r=new RegExp(t.activeMatch||t.link).test(n);return e("div",{text:"sm",font:"medium",m:"x-3",className:`${r?"text-brand":""}`,children:e(O,{href:P(t.link),children:t.text})},t.text)}const ue=t=>u.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",...t},u.createElement("path",{fill:"currentColor",d:"M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"})),he=t=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...t},u.createElement("path",{fill:"currentColor",d:"M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"})),pe=t=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...t},u.createElement("path",{fill:"currentColor",d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"}));function fe(t){const{activeIndex:n,isTranslation:r}=t,[a,s]=N(!1);return m("div",{relative:"",onMouseLeave:()=>s(!1),children:[m("button",{onMouseEnter:()=>s(!0),flex:"center","nav-h":"mobile sm:desktop",font:"medium",text:"sm text-1 hover:text-2",transition:"color duration-200",className:"nav-menu-group-button",children:[e("span",{mr:"1",text:"sm",font:"medium",children:r?e(pe,{w:"18px",h:"18px"}):t.text}),e(ue,{})]}),e("div",{absolute:"",pos:"top-13 right-0",m:"x-0.8",transition:"opacity duration-300",className:"nav-menu-group-content",style:{opacity:a?1:0,visibility:a?"visible":"hidden"},children:e("div",{p:"3",w:"100%",h:"100%",className:"min-w-128px max-h-100vh","border-1":"",rounded:"xl",bg:"bg-default",style:{boxShadow:"var(--island-shadow-3)",marginRight:"-1.5rem",zIndex:100},children:t.items.map((l,i)=>i===n?e("div",{rounded:"md",p:"y-1.6 l-3",children:e("span",{mr:"1",text:"brand",children:l.text})},l.link):e("div",{font:"medium",children:e(O,{href:l.link,children:e("div",{rounded:"md",hover:"bg-bg-mute",p:"y-1.6 l-3",children:m("div",{flex:"",children:[e("span",{mr:"1",children:l.text}),e(he,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},l.link))})})]})}function F(){var i,c;const t=T(),{pathname:n}=location,r=(c=(i=t==null?void 0:t.siteData)==null?void 0:i.themeConfig)!=null?c:{},a=r==null?void 0:r.locales;if(!a||Object.keys(a).length===0)return{nav:r.nav,sidebar:r.sidebar,prevPageText:r.prevPageText,nextPageText:r.nextPageText};const s=Object.keys(a),l=s.find(d=>n.startsWith(ze(He(d))))||s[0];return{...a[l],routePrefix:l}}function Je(){const{pathname:t}=B(),r=F().sidebar||{},a=[],s=d=>{Array.isArray(d)?d.forEach(o=>{o.items.forEach(h=>{a.push(h)})}):Object.keys(d).forEach(o=>{s(d[o])})};s(r);const l=a.findIndex(d=>d.link===t),i=a[l-1]||null,c=a[l+1]||null;return{prevPage:i,nextPage:c}}function et(t,n){if(!t)return null;const{text:r,pattern:a}=t,s=a.replace(":path",n);return{text:r,link:s}}function X(t,n){return P(t)===P(n)}function tt(t,n){return n?n===""||n==="/"?t===n:t.startsWith(n):!1}function Y(t){var a;const r=(a=F().sidebar)!=null?a:{};for(const s of Object.keys(r)){if(X(s,t))return{group:"",items:r[s]};const l=r[s].find(i=>i.items.some(c=>c.link&&X(c.link,t)));if(l){const i=r[s];return{group:l.text||"",items:i}}}return{group:"",items:[]}}const xe=()=>{const t=T(),[n,r]=N(t.frontmatter);return E(()=>{},[t.routePath]),n};function ge(t,n){const[r,a]=N(t||[]);return E(()=>{},[n]),[r,a]}const ve=t=>u.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},u.createElement("title",null,"GitHub"),u.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}));function be(t){const{activeIndex:n}=t,[r,a]=N(!1);return m("div",{relative:"",className:`${r?A.open:""} ${A.navScreenMenuGroup}`,children:[m("button",{className:A.button,onClick:()=>{a(!r)},children:[e("span",{className:A.buttonSpan,children:t.text}),e(ue,{className:`${r?A.open:""} ${A.down} `})]}),e("div",{children:e("div",{className:A.items,children:t.items.map((s,l)=>l===n?e("div",{className:"pa-1",children:e("span",{mr:"1",text:"brand",children:s.text})},s.link):e("div",{className:"pa-1",font:"medium",children:e(O,{href:s.link,children:e("div",{children:m("div",{flex:"",children:[e("span",{mr:"1",children:s.text}),e(he,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},s.link))})})]})}const nt={github:ve},at=({translationMenuData:t})=>e("div",{className:L.navTranslations,flex:"~",text:"sm",font:"bold",justify:"center",children:e("div",{m:"x-1.5",children:e(be,{...t})})}),rt=({socialLinks:t})=>e("div",{className:"social-links",flex:"","items-center":"",before:"menu-item-before",children:e("div",{flex:"","items-center":"",w:"9",h:"9",transition:"color duration-300",color:"hover:brand",children:t.map(n=>{const r=nt[n.icon];return e("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",w:"5",h:"5",children:e(r,{fill:"currentColor"})},n.link)})})});function st(t){var S;const{isScreenOpen:n,localeData:r,siteData:a,pathname:s}=t,l=j(null),i=Object.values(a.themeConfig.locales||{}),c=i.length>1,d=r.nav||[],o=((S=a==null?void 0:a.themeConfig)==null?void 0:S.socialLinks)||[],h=a.appearance!==!1,p=o.length>0,f=c?{text:e(pe,{w:"18px",h:"18px"}),items:i.map(v=>({text:v.label,link:`/${v.lang}`})),activeIndex:i.findIndex(v=>v.lang===r.lang)}:null,x=()=>e("div",{className:`items-center appearance pa-2 ${L.navAppearance}`,flex:"~",justify:"center",children:e(de,{})}),y=({menuItems:v})=>e("div",{className:L.navMenu,children:v.map((b,k)=>e("div",{w:"100%",className:L.navMenuItem,children:"link"in b?e(me,{pathname:s,...b},k):e("div",{m:"x-3",last:"mr-0",children:e(be,{...b})},k)},k))});return E(()=>(l.current&&n&&Se(l.current,{reserveScrollBarGap:!0}),()=>{Ce()}),[n]),e("div",{className:`${L.navScreen} ${n?L.active:""}`,ref:l,id:"navScreen",children:m("div",{className:L.container,children:[e(y,{menuItems:d}),m("div",{className:L.socialAndAppearance,flex:"~",justify:"center","items-center":"center",children:[h&&e(x,{}),p&&e(rt,{socialLinks:o})]}),c&&e(at,{translationMenuData:f})]})})}function lt(){const[t,n]=N(!1);function r(){n(!0),window.addEventListener("resize",l)}function a(){n(!1),window.removeEventListener("resize",l)}function s(){t?a():r()}function l(){window.outerWidth>=768&&a()}return{isScreenOpen:t,openScreen:r,closeScreen:a,toggleScreen:s}}function it(t){const{localeData:n,siteData:r,pathname:a}=t,{isScreenOpen:s,toggleScreen:l}=lt();return m(ie,{children:[e("button",{onClick:l,className:`${s?_.active:""} ${_.navHamburger}`,children:m("span",{className:_.container,children:[e("span",{className:_.top}),e("span",{className:_.middle}),e("span",{className:_.bottom})]})}),e(st,{isScreenOpen:s,localeData:n,siteData:r,pathname:a})]})}const ct={github:ve},ot=({title:t})=>e("div",{shrink:"0",border:"border t-0 b-1 border-solid transparent",className:`${H.navBarTitle}`,children:e("a",{href:"/",w:"100%",h:"100%",text:"1rem",font:"semibold",transition:"opacity duration-300",hover:"opacity-60",className:"flex items-center",children:e("span",{children:t})})}),dt=({translationMenuData:t})=>e("div",{className:"translation",flex:"~",text:"sm",font:"bold","items-center":"~",before:"menu-item-before",children:e("div",{m:"x-1.5",children:e(fe,{...t,isTranslation:!0,__island:!0})})}),mt=({socialLinks:t})=>e("div",{className:"social-links",flex:"","items-center":"",before:"menu-item-before",children:e("div",{flex:"","items-center":"",w:"9",h:"9",transition:"color duration-300",color:"hover:brand",children:t.map(n=>{const r=ct[n.icon];return e("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",w:"5",h:"5",children:e(r,{fill:"currentColor"})},n.link)})})});function ut(t){var I,g,w,R;const{beforeNavTitle:n,afterNavTitle:r}=t,{siteData:a,pageType:s}=T(),{pathname:l}=B(),{items:i}=Y(l),c=s==="doc"&&i.length>0,d=a.appearance!==!1,o=F(),h=Object.values(a.themeConfig.locales||{}),p=h.length>1,f=p?{items:h.map(M=>({text:M.label,link:`/${M.lang}`})),activeIndex:h.findIndex(M=>M.lang===o.lang)}:null,x=()=>e("div",{className:"appearance",before:"menu-item-before",display:"none sm:flex","items-center":"center",children:e(de,{__island:!0})}),y=({menuItems:M})=>e("div",{className:"menu",children:M.map((K,J)=>"link"in K?e(me,{pathname:l,...K},J):e("div",{m:"x-3",last:"mr-0",children:e(fe,{...K,__island:!0})},J))}),S=o.nav||[],v=((I=a==null?void 0:a.themeConfig)==null?void 0:I.socialLinks)||[],b=v.length>0,k=((g=a==null?void 0:a.themeConfig)==null?void 0:g.search)!==!1,C=(R=(w=o.title)!=null?w:a.themeConfig.siteTitle)!=null?R:a.title,D=()=>m("div",{className:H.rightNav,children:[e(y,{menuItems:S}),p&&e(dt,{translationMenuData:f}),d&&e(x,{}),b&&e(mt,{socialLinks:v})]});return e("header",{relative:"",z:"4",fixed:"md:~",className:"top-0 left-0",w:"100%",children:e("div",{relative:"",p:"l-8 sm:x-8",transition:"background-color duration-500",className:"divider-bottom md:border-b-transparent lg:border-b-transparent","nav-h":"mobile lg:desktop",children:m("div",{flex:"",justify:"between",m:"0 auto","nav-h":"mobile lg:desktop",className:`${H.container}  ${c?H.hasSidebar:""}`,children:[n,e(ot,{title:C}),r,m("div",{className:H.content,flex:"~ 1",justify:"end","items-center":"",children:[k&&e("div",{className:"search",flex:"sm:1",pl:"sm:8",children:e(Xe,{__island:!0,langRoutePrefix:o.routePrefix||""})}),D(),e(it,{localeData:o,siteData:a,pathname:l,__island:!0})]})]})})})}function ht(t){const[n,r]=ge(t.headers||[],t.pagePath),a=n.length>0,s=j(null);E(()=>{s.current&&(s.current.style.opacity="0");const i=$e();return window.scrollTo(0,0),i},[n]),E(()=>{r(t.headers)},[t.headers,r]);const l=i=>e("li",{children:e("a",{href:`#${i.id}`,block:"","leading-7":"",text:"text-2","avoid-text-overflow":"",hover:"text-text-1",transition:"color duration-300",style:{paddingLeft:(i.depth-2)*12},children:i.text})},i.id);return e("div",{flex:"~ col 1",children:e("div",{display:`${a?"lg:block":"none"}`,children:m("div",{relative:"","divider-left":"",p:"l-4",text:"13px","font-medium":"",id:"aside-container",children:[e("div",{absolute:"",pos:"top-33px",opacity:"0",w:"1px",h:"18px",bg:"brand",ref:s,style:{left:"-1px",transition:"top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s"},id:"aside-marker"}),e("div",{block:"~","leading-7":"",text:"13px",font:"semibold",children:t.outlineTitle}),e("nav",{children:e("ul",{relative:"",children:n.map(l)})})]})})})}function pt(){const{siteData:t,relativePagePath:n,lastUpdatedTime:r}=T(),{prevPage:a,nextPage:s}=Je(),l=t.themeConfig,{editLink:i,lastUpdatedText:c,prevPageText:d="Previous Page",nextPageText:o="Next page"}=F(),h=et(i!=null?i:l==null?void 0:l.editLink,n);return m("footer",{mt:"8",children:[m("div",{className:"xs:flex",p:"b-5",justify:"between","items-center":"~",children:[h?e("a",{flex:"~","items-center":"","leading-8":"","font-medium":"~",text:"sm brand",hover:"text-brand-dark",href:h.link,transition:"color duration-300",children:h.text}):null,e("div",{flex:"",text:"sm text-2","leading-6":"~","leading-8":"sm:~","font-medium":"",children:m(ce,{children:[e("p",{className:$.lastUpdated,children:`${c!=null?c:"Last Updated"}: `}),e("span",{children:r})]})})]}),m("div",{flex:"~ col sm:row",justify:"sm:around",gap:"2","divider-top":"",pt:"6",children:[e("div",{flex:"~ col",className:$.prev,children:a?m("a",{href:P(a.link),className:$.pagerLink,children:[e("span",{className:$.desc,children:d}),e("span",{className:$.title,children:a.text})]}):null}),e("div",{flex:"~ col",className:$.next,children:s?m("a",{href:P(s.link),className:`${$.pagerLink} ${$.next}`,children:[e("span",{className:$.desc,children:o}),e("span",{className:$.title,children:s.text})]}):null})]})]})}function ft(t){const{isSidebarOpen:n,langRoutePrefix:r,pathname:a,sidebarData:s}=t,l=(c,d=0)=>{var f;const o=`${d*20}px`;let h=[];"items"in c&&(h=c.items.map(x=>l(x,d+1)));const p=tt(a.replace(r,""),(f=c.link)==null?void 0:f.replace(r,""));return m("div",{style:{marginLeft:o},children:[e("div",{p:"1",block:"~",text:"sm","font-medium":"~",className:`${p?"text-brand":"text-text-2"}`,children:e(O,{href:P(c.link),children:c.text})}),h]})},i=c=>{var d;return m("section",{block:"~","not-first":"divider-top mt-4",children:[e("div",{flex:"~",justify:"between","items-start":"~",children:e("h2",{m:"t-3 b-2",text:"1rem text-1",font:"bold",children:c.text})}),e("div",{mb:"1.4 sm:1",children:(d=c==null?void 0:c.items)==null?void 0:d.map(o=>e("div",{children:l(o)},o.link))})]},c.text)};return e("aside",{className:`${ne.sidebar} ${n?ne.open:""}`,children:e("nav",{children:[s].filter(Boolean).flat().map(c=>i(c))})})}function xt(t){const{langRoutePrefix:n,pathname:r,sidebarData:a}=t,[s,l]=N(!1);function i(){l(!0)}function c(){l(!1)}return m(ie,{children:[e("div",{className:Q.localNav,children:m("button",{flex:"center",onClick:i,className:Q.menu,children:[e("div",{text:"md",mr:"2",className:"i-carbon:menu"}),e("span",{text:"md ",children:"Menu"})]})}),e(ft,{langRoutePrefix:n,pathname:r,sidebarData:a,isSidebarOpen:s}),s?e("div",{onClick:c,className:Q.backDrop}):null]})}function le(t){var I,g;const{beforeDocFooter:n,beforeDoc:r,afterDoc:a,beforeOutline:s,afterOutline:l}=t,{toc:i=[],siteData:c,pagePath:d,frontmatter:o}=T(),[h]=ge(i,d),p=c.themeConfig,f=F(),x=f.sidebar||[],{pathname:y}=B(),{items:S}=Y(y),v=je(f.routePrefix||""),b=(o==null?void 0:o.sidebar)!==!1&&(Array.isArray(x)&&x.length>0||Object.keys(x).length>0),k=(f==null?void 0:f.outlineTitle)||(p==null?void 0:p.outlineTitle)||"ON THIS PAGE",C=h.length>0&&((g=(I=o==null?void 0:o.outline)!=null?I:p==null?void 0:p.outline)!=null?g:!0),D=(o==null?void 0:o.lineNumbers)===void 0?!1:!o.lineNumbers;return m("div",{p:"t-0 x-6 b-24 sm:6",className:G.docLayout,children:[r,b?e(xt,{pathname:y,langRoutePrefix:v,sidebarData:S,__island:!0}):null,m("div",{flex:"~ 1 shrink-0",m:"x-auto",className:`${G.content}`,children:[e("div",{m:"x-auto",flex:"~ col",className:"max-w-100%",children:m("div",{relative:"~",m:"x-auto",p:"l-2",className:`w-100% md:max-w-712px lg:min-w-640px ${C?"":G.contentArticle}`,style:{maxWidth:C?"":"1024px"},children:[e("div",{className:`island-doc ${D?"line-number-disable":""}`,children:e(oe,{})}),n,e(pt,{})]})}),e("div",{relative:"~",display:"none lg:block",order:"2",flex:"1",p:"l-8",className:"max-w-256px",children:e("div",{className:G.asideContainer,children:e("div",{flex:"~ col",p:"b-8",style:{minHeight:"calc(100vh - (var(--island-nav-height-desktop) + 32px))"},children:C?m("div",{children:[s,e(ht,{headers:h,outlineTitle:k,pagePath:d}),l]}):null})})})]}),a]})}function gt(){const{subModules:t=[]}=T(),{pathname:n}=B(),{items:r}=Y(n),a=r.map(i=>({name:i.text||"",items:i.items.map(c=>{const d=t.find(o=>X(o.routePath,c.link||""));return{...c,headers:(d==null?void 0:d.toc).filter(o=>o.depth===2)}})})),[s,l]=N(a);return E(()=>{},[s]),m("div",{className:"api-index max-w-1024px",m:"x-auto",p:"y-16 x-8",children:[e("div",{flex:"","items-center":"",justify:"between",children:e("h1",{children:"API Reference"})}),s.map(i=>m("div",{mb:"16",children:[e("h2",{children:i.name}),e("div",{className:W.apiGroups,children:i.items.map(c=>{var d;return m("div",{className:W.apiGroup,children:[e("h3",{children:c.text}),e("ul",{list:"none",children:(d=c.headers)==null?void 0:d.map(o=>e("li",{className:`${W.apiGroupLi} ${W[`level${o.depth}`]}`,children:e(O,{href:`${P(c.link)}#${o.id}`,children:o.text})},o.id))})]},c.link)})})]},i.name))]})}function vt({backTop:t}){const n=t!=null?t:!0,r=()=>{const l=document.documentElement,i=l.scrollTop;new Te({from:{scrollTop:i},to:{scrollTop:0},easing:"quadIn",duration:500,onUpdate:d=>{l.scrollTop=Number(d==null?void 0:d.scrollTop)}}).start()},[a,s]=N(!1);return E(()=>{const l=Ee(()=>{const c=document.documentElement.scrollTop;s(c>=200)},500);return document.addEventListener("scroll",l),()=>{l.cancel(),document.removeEventListener("scroll",l)}}),n&&a?e("div",{className:"fixed bottom-10 right-30 z-10",display:"none md:block",onClick:r,children:e("button",{className:"w-10 h-10 rounded-full duration-300",style:{backgroundColor:"var(--island-c-bg)"},color:"gray hover:gray-500",bg:"~ gray-200 hover:gray-300",shadow:"sm hover:md",children:e("div",{flex:"~ center",children:e("div",{className:"i-carbon-chevron-up",text:"xl"})})})}):null}const bt=t=>{var C;const{top:n,bottom:r,beforeDocFooter:a,beforeDoc:s,afterDoc:l,beforeOutline:i,afterOutline:c,beforeNavTitle:d,afterNavTitle:o}=t,h={beforeDocFooter:a,beforeDoc:s,afterDoc:l,beforeOutline:i,afterOutline:c},{title:p,frontmatter:f,siteData:x,pageType:y}=T(),{backTop:S}=x.themeConfig,v=((C=f==null?void 0:f.title)!=null?C:p)||(x==null?void 0:x.title),b=(f==null?void 0:f.description)||x.description;return m("div",{style:{height:"100%"},children:[m(Le,{children:[v?e("title",{children:v}):null,b?e("meta",{name:"description",content:b}):null]}),n,e(ut,{beforeNavTitle:d,afterNavTitle:o}),e("section",{style:{paddingTop:"var(--island-nav-height)"},children:(()=>{switch(y){case"home":return e($t,{});case"doc":return e(le,{...h});case"api":return e(gt,{});case"404":return e(We,{});case"custom":return e(oe,{});default:return e(le,{...h})}})()}),r,e(vt,{__island:!0,backTop:S})]})};function Nt(t){const{theme:n="brand",size:r="big",href:a="/"}=t;let s=null;return t.type==="button"?s="button":t.type==="a"&&(s=O),Me.createElement(s!=null?s:"a",{className:`${Z.button} ${Z[n]} ${Z[r]}`,href:a},t.text)}const wt={name:"Island",text:"Island ssg",tagline:"Island ssg",actions:[],image:void 0};function yt(){var a,s;const t=xe(),n=(t==null?void 0:t.hero)||wt,r=n.image!==void 0;return e("div",{m:"auto",p:"t-12 x-6 b-12 sm:t-0 sm:x-8 sm:x-16 md:t-20 md:x-16 md:b-16",children:m("div",{className:"max-w-1152px",m:"auto",flex:"~ col md:row",children:[m("div",{m:"auto md:0",order:"2 md:1",text:"center md:left",flex:"~ col lt-sm:c",className:"max-w-592px",children:[e("h1",{font:"bold",text:"3xl sm:5xl md:6xl",m:"auto md:0",className:"max-w-392px sm:max-w-576px",children:e("span",{className:Pe.clip,children:n.name})}),e("p",{m:"auto md:0",text:"3xl sm:5xl md:6xl",font:"bold",className:"max-w-392px sm:max-w-576px",children:n.text}),e("p",{p:"t-3",m:"auto md:0",text:"sm sm:xl md:2xl text-2",font:"medium",className:"whitespace-pre-wrap max-w-392px sm:max-w-576px",children:n.tagline}),e("div",{flex:"~ wrap",justify:"center md:start",m:"-1.5",p:"t-8",children:n.actions.map(l=>e("div",{p:"1",flex:"shrink-0",children:e(Nt,{type:"a",text:l.text,href:P(l.link),theme:l.theme})},l.link))})]}),r?e("div",{w:"sm:max-96",h:"sm:max-96",flex:"md:center",m:"auto",order:"1 md:2",display:"flex sm:flex md:none lg:flex",children:e("img",{src:(a=n.image)==null?void 0:a.src,alt:(s=n.image)==null?void 0:s.alt})}):null]})})}const kt=t=>{if(t){if(t===2)return"grid2";if(t===3)return"grid3";if(t%3===0)return"grid4";if(t%2===0)return"grid6"}else return""};function St(){const t=xe(),n=t==null?void 0:t.features,r=kt(n==null?void 0:n.length);return e("div",{className:"max-w-1152px",m:"auto",flex:"~ wrap",justify:"between",children:n==null?void 0:n.map(a=>{const{icon:s,title:l,details:i}=a;return e("div",{rounded:"md",pr:"0 md:4",pb:"4",w:"100%",className:`${r?De[r]:""}`,children:m("article",{rounded:"xl",h:"100%",p:"6",bg:"bg-soft",border:"~ bg-soft solid",children:[e("div",{flex:"center",mb:"5",w:"12",h:"12",text:"3xl",bg:"gray-light-4 dark:bg-default",rounded:"md",children:s}),e("h2",{font:"bold",children:l}),e("p",{pt:"2",text:"sm text-2",font:"medium","leading-6":"",children:i})]},l)},l)})})}function Ct(){const{siteData:t}=T(),{message:n,copyright:r}=t.themeConfig.footer||{};return e("footer",{p:"y-8 x-6 sm:8",bg:"bg-default",relative:"",border:"t-1 b-0 solid divider-light",children:m("div",{m:"auto",w:"100%",text:"center",children:[n&&e("div",{font:"medium",text:"sm text-2",children:n}),r&&e("div",{font:"medium",text:"sm text-2",children:r})]})})}function $t(t){const{beforeHero:n,afterHero:r,beforeFeatures:a,afterFeatures:s}=t;return m(ce,{children:[m("div",{className:"pb-12",children:[n,e(yt,{}),r,a,e(St,{}),s]}),e(Ct,{})]})}const z={lang:"en-US",title:"Island",description:"Island",themeConfig:{nav:[{text:"Home",link:"/"}],sidebar:{"/":[{text:"\u6587\u7AE0\u5217\u8868",items:[{text:"Fresh",link:"/article/fresh"},{text:"Astro",link:"/article/astro"}]}]},footer:{message:"Released under the MIT License.",copyright:"Copyright \xA9 2022-present Xingyuan Yang"}},head:[["script",{id:"check-dark-light"},`
        ;(() => {
          const saved = localStorage.getItem('island-theme-appearance')
          const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          if (!saved || saved === 'auto' ? prefereDark : saved === 'dark') {
            document.documentElement.classList.add('dark')
          }
        })()
      `]],base:"/",icon:"",root:"/Users/beka/Desktop/code/bekacodechn.github.io/blog",appearance:!0};async function Et(t){var r,a,s;const n=Ge(ae,t,z.base);if(n){const l=n[0].route,i=await l.preload(),c=Ie(n[0].route.filePath),d=Be(t,c,z.base);if(((r=i==null?void 0:i.frontmatter)==null?void 0:r.api)||((a=i==null?void 0:i.frontmatter)==null?void 0:a.pageType)==="api"){const h=await Promise.all(ae.filter(p=>p.path.startsWith(t)&&p!==l).map(async p=>({...await p.preload(),routePath:p.path})));return{siteData:z,pagePath:c,relativePagePath:d,subModules:h,...se(i,["default"]),pageType:"api",routePath:t}}else return{siteData:z,pagePath:c,relativePagePath:d,...se(i,["default"]),pageType:((s=i==null?void 0:i.frontmatter)==null?void 0:s.pageType)||"doc",routePath:t}}else return{siteData:z,pagePath:"",relativePagePath:"",pageType:"404",routePath:"/404"}}function At({helmetContext:t}){const{pathname:n}=B(),{setData:r}=_e(Ae);return Oe(()=>{async function a(){try{const s=await Et(n);r(s)}catch(s){console.log(s)}}a()},[n,r]),e(Re,{context:t,children:e(bt,{})})}export{At as App,Et as waitForApp};
