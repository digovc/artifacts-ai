import{o as s,c as o,a as _,t as c,l as g,g as m,F as y,i as V,e as S,h as w,b as l,w as d,j as b}from"./index-DmrONTsm.js";import{T as x,_ as $}from"./Button-CMrgLxEk.js";import{d as f}from"./database-CQTV1J-z.js";const k={class:"mb-10 border-b pb-4"},K={class:"mb-5 text-xl font-bold"},h={__name:"Group",props:{title:String},setup(e){return(t,u)=>(s(),o("div",k,[_("h2",K,c(e.title),1),g(t.$slots,"default")]))}},A={class:"mb-5"},I={class:"mb-2 text-lg font-semibold"},p={__name:"Subgroup",props:{title:String},setup(e){return(t,u)=>(s(),o("div",A,[_("h3",I,c(e.title),1),g(t.$slots,"default")]))}},N={class:"mb-5 flex space-x-2 items-center"},T=["for"],C=["id","value"],B=["id","value"],F=["id","value"],L=["value"],v={__name:"Field",props:{label:String,type:String,options:Array,modelValue:[String,Number]},emits:["update:modelValue"],setup(e,{emit:t}){const u=t,r=n=>{u("update:modelValue",n.target.value)};return(n,i)=>(s(),o("div",N,[_("label",{for:e.label,class:"block mb-1 whitespace-nowrap"},c(e.label),9,T),e.type==="text"?(s(),o("input",{key:0,id:e.label,value:e.modelValue,onInput:r,class:"w-full p-2 border rounded",type:"text"},null,40,C)):m("",!0),e.type==="password"?(s(),o("input",{key:1,id:e.label,value:e.modelValue,onInput:r,class:"w-full p-2 border rounded",type:"password"},null,40,B)):m("",!0),e.type==="select"?(s(),o("select",{key:2,id:e.label,value:e.modelValue,onChange:r,class:"w-full p-2 border rounded"},[(s(!0),o(y,null,V(e.options,a=>(s(),o("option",{key:a,value:a},c(a),9,L))),128))],40,F)):m("",!0)]))}},P={class:"p-2 space-y-12 w-2/4 m-auto"},j={__name:"Settings",setup(e){const t=S({general:{theme:"light"},providers:{openai:{apiKey:""},anthropic:{apiKey:""}}}),u=()=>{const n=f.get("settings_0");n!=null&&n.id&&(t.value=n)},r=()=>{t.value.id="settings_0",f.update(t.value)};return w(()=>{u()}),(n,i)=>(s(),o("div",P,[l(x,null,{default:d(()=>[b("Settings")]),_:1}),l(h,{title:"General"},{default:d(()=>[l(p,{title:"Theme"},{default:d(()=>[l(v,{modelValue:t.value.general.theme,"onUpdate:modelValue":i[0]||(i[0]=a=>t.value.general.theme=a),options:["light","dark"],label:"Theme",type:"select"},null,8,["modelValue"])]),_:1})]),_:1}),l(h,{title:"LLM Providers"},{default:d(()=>[l(p,{title:"OpenAI"},{default:d(()=>[l(v,{modelValue:t.value.providers.openai.apiKey,"onUpdate:modelValue":i[1]||(i[1]=a=>t.value.providers.openai.apiKey=a),label:"API Key",type:"password"},null,8,["modelValue"])]),_:1}),l(p,{title:"Anthropic"},{default:d(()=>[l(v,{modelValue:t.value.providers.anthropic.apiKey,"onUpdate:modelValue":i[2]||(i[2]=a=>t.value.providers.anthropic.apiKey=a),label:"API Key",type:"password"},null,8,["modelValue"])]),_:1})]),_:1}),l($,{onClick:r},{default:d(()=>[b("Save Settings")]),_:1})]))}};export{j as default};
