import{_ as c,o,c as n,l as a,a as r,b as _,f as l}from"./index-DRDZ985B.js";import{F as u}from"./index.es-GjlsOHYI.js";const d={},f={class:"font-bold text-3xl"};function p(s,e){return o(),n("div",f,[a(s.$slots,"default")])}const $=c(d,[["render",p],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/components/Title.vue"]]),m={__name:"Button",props:{icon:{type:Object,default:null}},setup(s,{expose:e}){e();const t={get FontAwesomeIcon(){return u}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},g={class:"inline-block"},h={class:"flex space-x-2 bg-gray-600 hover:bg-gray-500 text-white rounded px-4 py-1 cursor-pointer"},v={key:0};function S(s,e,t,i,w,B){return o(),n("div",g,[r("div",h,[t.icon?(o(),n("div",v,[_(i.FontAwesomeIcon,{icon:t.icon},null,8,["icon"])])):l("v-if",!0),r("div",null,[a(s.$slots,"default")])])])}const I=c(m,[["render",S],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/components/Button.vue"]]),x="settings_0";class b{isConfigured(){var t;const e=this.getSettings();return((t=e==null?void 0:e.providers)==null?void 0:t.length)>0}getSettings(){const e=localStorage.getItem(x);return JSON.parse(e)}}const N=new b;export{I as B,x as S,$ as T,N as s};