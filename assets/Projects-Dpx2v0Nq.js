import{s as C,T as B,B as T}from"./settings-CW6ioI3H.js";import{C as F,M as D,E as N}from"./Empty-DFaqy1VB.js";import{_ as w,u as f,d as j,o as c,e as h,w as n,a as o,t as y,b as v,f as S,g as b,c as P,F as E,h as I,i as d}from"./index-Cl1kTu1z.js";import{d as M,b as O}from"./index-OR6c2DVF.js";import{d as s}from"./database-DkskZLUE.js";import{g as x}from"./global-commands-CYqUEMND.js";const V={__name:"ProjectCard",props:{project:Object},setup(u,{expose:i}){i();const t=f(),e=j(!1),r=u,l={router:t,isDeleted:e,props:r,openProject:()=>{t.push(`/projects/${r.project.id}`)},deleteProject:m=>{const _=r.project.id;s.delete("projects",_);const g=k=>k.projectId===_;return s.deleteByFilter("messages",g),s.deleteByFilter("artifacts",g),s.deleteByFilter("references",g),e.value=!0,m.stopPropagation(),!1},Card:F,get useRouter(){return f},MiniButton:D,get faTrash(){return M},get database(){return s},ref:j};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},A={class:"text-lg uppercase"},R={class:"italic text-sm grow"},L={class:"flex justify-end invisible group-hover:visible"};function q(u,i,t,e,r,p){return e.isDeleted?S("v-if",!0):(c(),h(e.Card,{key:0,onClick:e.openProject,class:"group"},{default:n(()=>[o("div",A,y(t.project.name),1),o("div",R,y(t.project.description),1),o("div",L,[o("div",null,[v(e.MiniButton,{icon:e.faTrash,onClick:e.deleteProject},null,8,["icon"])])])]),_:1}))}const z=w(V,[["render",q],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/views/projects/ProjectCard.vue"]]),G={__name:"Projects",setup(u,{expose:i}){i();const t=j([]),e=f(),r=()=>{const l=s.getAll("projects");t.value=l.sort((m,_)=>new Date(_.created)-new Date(m.created))},p=()=>{x.createProject()};b(()=>{C.isConfigured()?r():e.push("/settings")});const a={projects:t,router:e,loadProjects:r,createProject:p,Title:B,ProjectCard:z,Button:T,get faPlus(){return O},Empty:N,onMounted:b,ref:j,get database(){return s},get globalCommands(){return x},get settings(){return C},get useRouter(){return f}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},H={class:"bg-gray-200 h-full flex flex-col"},J={class:"flex items-center justify-between px-4 py-2"},K={class:"grow overflow-y-auto p-12"},Q={key:0,class:"grid grid-cols-4 gap-8"};function U(u,i,t,e,r,p){return c(),P("div",H,[o("div",J,[o("div",null,[v(e.Title,null,{default:n(()=>[d("Projects")]),_:1})]),o("div",null,[v(e.Button,{icon:e.faPlus,onClick:e.createProject},{default:n(()=>[d(" Create project ")]),_:1},8,["icon"])])]),o("div",K,[e.projects.length?(c(),P("div",Q,[(c(!0),P(E,null,I(e.projects,a=>(c(),h(e.ProjectCard,{key:a.id,project:a},null,8,["project"]))),128))])):(c(),h(e.Empty,{key:1,onOnButtonClick:e.createProject},{title:n(()=>[d(" No projects yet ")]),description:n(()=>[d(" Create a project to get started and collaborate with your AI. The project will contain all the data and artifacts for the AI model. ")]),button:n(()=>[d(" Create project ")]),_:1}))])])}const te=w(G,[["render",U],["__file","/home/runner/work/artifacts-ai/artifacts-ai/src/views/projects/Projects.vue"]]);export{te as default};
