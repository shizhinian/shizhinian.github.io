import{d,u as _,a as u,c as m,b as p,o as a,e as l,f as t,t as s,g as r,F as h,r as f,n as g,h as v,i as x,j as b,k as y,l as N,m as k,_ as P}from"./index-l7H9k5us.js";import{N as w}from"./NoteDisplay-yLmQho8b.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},j={class:"font-bold flex gap-2"},B={class:"opacity-50"},F=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(C){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>v.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(a(),l("div",{id:"page-root",style:g(r(k))},[t("div",V,[t("div",D,[t("h1",L,s(r(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(a(!0),l(h,null,f(i.value,(e,c)=>(a(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",j,[t("div",B,s(e==null?void 0:e.no)+"/"+s(r(x)),1),b(" "+s(e==null?void 0:e.title)+" ",1),F])]),y(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),l("hr",H)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","D:/Program Files/nodejs/node_global/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
