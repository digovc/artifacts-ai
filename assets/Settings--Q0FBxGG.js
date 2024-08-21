import{_ as h,o as s,c as n,a as f,t as y,l as F,d as S,f as b,F as M,j as T,i as w,b as i,w as _,h as V,n as U,k as g,e as B}from"./index--jg1AvMt.js";import{S as x,B as C,T as G}from"./settings-BRcGOVDe.js";import{p as O}from"./providers-BPc3q5J3.js";import"./index.es-DXkmdV-M.js";const j={__name:"Group",props:{title:String},setup(c,{expose:r}){r();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},K={class:"mb-4 border-b pb-4 space-y-4"},E={class:"mb-5 text-xl font-bold"};function I(c,r,t,e,u,m){return s(),n("div",K,[f("h2",E,y(t.title),1),F(c.$slots,"default")])}const L=h(j,[["render",I],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/components/Group.vue"]]),A={__name:"Subgroup",props:{title:String},setup(c,{expose:r}){r();const t=S(!1),u={isOpen:t,toggleOpen:()=>{t.value=!t.value},ref:S};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},J={class:"border p-4 rounded-md"},R={key:0},Y={key:1},q={key:0};function z(c,r,t,e,u,m){return s(),n("div",J,[f("h3",{class:"mb-2 text-lg font-semibold cursor-pointer space-x-2",onClick:e.toggleOpen},[e.isOpen?(s(),n("span",R,"▼")):(s(),n("span",Y,"►")),f("span",null,y(t.title),1)]),e.isOpen?(s(),n("div",q,[F(c.$slots,"default")])):b("v-if",!0)])}const D=h(A,[["render",z],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/components/Subgroup.vue"]]),H={__name:"Field",props:{label:String,type:String,options:Array,modelValue:[String,Number]},emits:["update:modelValue"],setup(c,{expose:r,emit:t}){r();const e=t,m={emit:e,updateValue:o=>{e("update:modelValue",o.target.value)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},Q={class:"mb-5 flex space-x-2 items-center"},W=["for"],X=["id","value"],Z=["id","value"],$=["id","value"],ee=["value"];function te(c,r,t,e,u,m){return s(),n("div",Q,[f("label",{for:t.label,class:"block mb-1 whitespace-nowrap w-32"},y(t.label),9,W),t.type==="text"?(s(),n("input",{key:0,id:t.label,value:t.modelValue,onInput:e.updateValue,class:"w-full p-2 border rounded",type:"text"},null,40,X)):b("v-if",!0),t.type==="password"?(s(),n("input",{key:1,id:t.label,value:t.modelValue,onInput:e.updateValue,class:"w-full p-2 border rounded",type:"password"},null,40,Z)):b("v-if",!0),t.type==="select"?(s(),n("select",{key:2,id:t.label,value:t.modelValue,onChange:e.updateValue,class:"w-full p-2 border rounded"},[(s(!0),n(M,null,T(t.options,o=>(s(),n("option",{key:o,value:o},y(o),9,ee))),128))],40,$)):b("v-if",!0)])}const oe=h(H,[["render",te],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/components/Field.vue"]]),le={__name:"Settings",setup(c,{expose:r}){r();const t=S({general:{theme:"light"},providers:[]}),e=O,u=()=>{const l=V.get(x);l!=null&&l.id&&(l.providers=l.providers||[],l.providers=l.providers.map(a=>{const p=e.find(N=>N.label===a.name);return(p?[...p.models,"custom"]:["custom"]).includes(a.model)||(a.customModel=a.model,a.model="custom"),a}),t.value=l)},m=()=>{const l=JSON.parse(JSON.stringify(t.value));l.providers=l.providers.map(a=>{const p=e.find(P=>P.label===a.name);return a.url=p?p.url:"",a.model==="custom"&&(a.model=a.customModel),a}),l.providers.length&&!l.providerSelected&&(l.providerSelected=0),l.id=x,V.update(l),u(),U.showNotification("Settings saved!")},o=()=>{t.value.providers.push({name:"",model:"",customModel:"",apiKey:"",proxyUrl:""})},v=l=>{t.value.providers.splice(l,1)},d=l=>{const a=e.find(p=>p.label===l);return a?[...a.models,"custom"]:["custom"]};w(()=>{u()});const k={settings:t,providerOptions:e,loadSettings:u,saveSettings:m,addProvider:o,removeProvider:v,getModelsForProvider:d,onMounted:w,ref:S,Group:L,Subgroup:D,Field:oe,Button:C,get database(){return V},Title:G,get providers(){return O},get SETTINGS_KEY(){return x},get notification(){return U}};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}},ae={class:"space-y-4 px-96 m-auto h-full overflow-y-auto p-8"},se={class:"flex justify-end"},ne={class:"flex justify-end"};function re(c,r,t,e,u,m){return s(),n("div",ae,[i(e.Title,null,{default:_(()=>[g("Settings")]),_:1}),i(e.Group,{title:"General"},{default:_(()=>[i(e.Subgroup,{title:"Theme"},{default:_(()=>[i(e.Field,{modelValue:e.settings.general.theme,"onUpdate:modelValue":r[0]||(r[0]=o=>e.settings.general.theme=o),options:["light","dark"],label:"Theme",type:"select"},null,8,["modelValue"])]),_:1})]),_:1}),i(e.Group,{title:"LLM Providers"},{default:_(()=>[(s(!0),n(M,null,T(e.settings.providers,(o,v)=>(s(),n("div",{key:v,class:""},[i(e.Subgroup,{title:"Provider "+(v+1)},{default:_(()=>[i(e.Field,{modelValue:o.name,"onUpdate:modelValue":d=>o.name=d,options:e.providerOptions.map(d=>d.label),label:"Provider",type:"select"},null,8,["modelValue","onUpdate:modelValue","options"]),i(e.Field,{modelValue:o.model,"onUpdate:modelValue":d=>o.model=d,options:e.getModelsForProvider(o.name),label:"Model",type:"select"},null,8,["modelValue","onUpdate:modelValue","options"]),o.model==="custom"?(s(),B(e.Field,{key:0,modelValue:o.customModel,"onUpdate:modelValue":d=>o.customModel=d,label:"Custom Model",type:"text"},null,8,["modelValue","onUpdate:modelValue"])):b("v-if",!0),i(e.Field,{modelValue:o.apiKey,"onUpdate:modelValue":d=>o.apiKey=d,label:"API Key",type:"password"},null,8,["modelValue","onUpdate:modelValue"]),i(e.Field,{modelValue:o.proxyUrl,"onUpdate:modelValue":d=>o.proxyUrl=d,label:"Proxy URL",type:"text"},null,8,["modelValue","onUpdate:modelValue"]),i(e.Button,{class:"mt-2",onClick:()=>e.removeProvider(v)},{default:_(()=>[g("Remove")]),_:2},1032,["onClick"])]),_:2},1032,["title"])]))),128)),f("div",se,[i(e.Button,{onClick:e.addProvider},{default:_(()=>[g("Add Provider")]),_:1})])]),_:1}),f("div",ne,[i(e.Button,{onClick:e.saveSettings},{default:_(()=>[g("Save Settings")]),_:1})])])}const me=h(le,[["render",re],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/views/settings/Settings.vue"]]);export{me as default};
