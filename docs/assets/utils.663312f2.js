import{y as s,z as c}from"../client-entry.js";import{Suspense as f}from"react";import{jsx as l}from"react/jsx-runtime";import{useRoutes as a,useLocation as u}from"./index.f6184fce.js";const x=()=>{var o;const t=a(s),r=u();let e=null;{const n=(o=r.state)==null?void 0:o.from;e=n?a(s,n):null}return l(f,{fallback:e,children:t})},v=()=>!0,P=(t,r)=>{const e={...t};for(const o of r)delete e[o];return e},R=(t,r,e)=>{const o=r.split(".").pop();let n=c(t);return n.startsWith(e)&&(n=n.slice(e.length)),o&&(n+=`.${o}`),n.replace(/^\//,"")};function i(t){return t.charAt(0)==="/"?t:"/"+t}function m(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function S(t){return m(i(t))}function z(t){return t?t.startsWith("http")?t:i(`${t}`):"/"}export{x as C,i as a,S as b,R as g,v as i,z as n,P as o,m as r};
