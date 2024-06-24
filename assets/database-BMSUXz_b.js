var Ue=Object.defineProperty;var Be=(t,n,e)=>n in t?Ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var vt=(t,n,e)=>Be(t,typeof n!="symbol"?n+"":n,e);import{m as We,n as K,A as He,p as Ge}from"./index-BeqEi1ys.js";function _n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?_n(Object(e),!0).forEach(function(a){E(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_n(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ct(t)}function Xe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ve(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Je(t,n,e){return n&&Ve(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function vn(t,n){return qe(t)||Ze(t,n)||ie(t,n)||na()}function ct(t){return Ke(t)||Qe(t)||ie(t)||ta()}function Ke(t){if(Array.isArray(t))return Jt(t)}function qe(t){if(Array.isArray(t))return t}function Qe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ze(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function ie(t,n){if(t){if(typeof t=="string")return Jt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Jt(t,n)}}function Jt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ta(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function na(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pn=function(){},pn={},oe={},se=null,fe={mark:Pn,measure:Pn};try{typeof window<"u"&&(pn=window),typeof document<"u"&&(oe=document),typeof MutationObserver<"u"&&(se=MutationObserver),typeof performance<"u"&&(fe=performance)}catch{}var ea=pn.navigator||{},In=ea.userAgent,Cn=In===void 0?"":In,B=pn,x=oe,Tn=se,pt=fe;B.document;var $=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",le=~Cn.indexOf("MSIE")||~Cn.indexOf("Trident/"),bt,ht,gt,yt,wt,z="___FONT_AWESOME___",Kt=16,ue="fa",ce="svg-inline--fa",V="data-fa-i2svg",qt="data-fa-pseudo-element",aa="data-fa-pseudo-element-pending",bn="data-prefix",hn="data-icon",Nn="fontawesome-i2svg",ra="async",ia=["HTML","HEAD","STYLE","SCRIPT"],me=function(){try{return!0}catch{return!1}}(),k="classic",S="sharp",gn=[k,S];function mt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[k]}})}var it=mt((bt={},E(bt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(bt,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bt)),ot=mt((ht={},E(ht,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(ht,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ht)),st=mt((gt={},E(gt,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(gt,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),oa=mt((yt={},E(yt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(yt,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yt)),sa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,de="fa-layers-text",fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,la=mt((wt={},E(wt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(wt,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wt)),ve=[1,2,3,4,5,6,7,8,9,10],ua=ve.concat([11,12,13,14,15,16,17,18,19,20]),ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(ot[k]).map(ft.add.bind(ft));Object.keys(ot[S]).map(ft.add.bind(ft));var ma=[].concat(gn,ct(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(ve.map(function(t){return"".concat(t,"x")})).concat(ua.map(function(t){return"w-".concat(t)})),at=B.FontAwesomeConfig||{};function da(t){var n=x.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(x&&typeof x.querySelector=="function"){var pa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pa.forEach(function(t){var n=vn(t,2),e=n[0],a=n[1],r=va(da(e));r!=null&&(at[a]=r)})}var pe={styleDefault:"solid",familyDefault:"classic",cssPrefix:ue,replacementClass:ce,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);var tt=m(m({},pe),at);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(pe).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){tt[t]=e,rt.forEach(function(a){return a(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){tt.cssPrefix=n,rt.forEach(function(e){return e(d)})},get:function(){return tt.cssPrefix}});B.FontAwesomeConfig=d;var rt=[];function ba(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var U=Kt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ha(t){if(!(!t||!$)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=x.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(n,a),t}}var ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var t=12,n="";t-- >0;)n+=ga[Math.random()*62|0];return n}function nt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function yn(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ya(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(be(t[e]),'" ')},"").trim()}function Mt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function wn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function wa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function ka(t){var n=t.transform,e=t.width,a=e===void 0?Kt:e,r=t.height,i=r===void 0?Kt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&le?f+="translate(".concat(n.x/U-a/2,"em, ").concat(n.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/U,"em), calc(-50% + ").concat(n.y/U,"em)) "):f+="translate(".concat(n.x/U,"em, ").concat(n.y/U,"em) "),f+="scale(".concat(n.size/U*(n.flipX?-1:1),", ").concat(n.size/U*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var xa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function he(){var t=ue,n=ce,e=d.cssPrefix,a=d.replacementClass,r=xa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var jn=!1;function Yt(){d.autoAddCss&&!jn&&(ha(he()),jn=!0)}var Sa={mixout:function(){return{dom:{css:he,insertCss:Yt}}},hooks:function(){return{beforeDOMElementCreation:function(){Yt()},beforeI2svg:function(){Yt()}}}},F=B||{};F[z]||(F[z]={});F[z].styles||(F[z].styles={});F[z].hooks||(F[z].hooks={});F[z].shims||(F[z].shims=[]);var N=F[z],ge=[],Aa=function t(){x.removeEventListener("DOMContentLoaded",t),Tt=1,ge.map(function(n){return n()})},Tt=!1;$&&(Tt=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Tt||x.addEventListener("DOMContentLoaded",Aa));function Oa(t){$&&(Tt?setTimeout(t,0):ge.push(t))}function dt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?be(t):"<".concat(n," ").concat(ya(a),">").concat(i.map(dt).join(""),"</").concat(n,">")}function Mn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ut=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=e,f,l,u;for(a===void 0?(f=1,u=n[i[0]]):(f=0,u=a);f<o;f++)l=i[f],u=s(u,n[l],l,n);return u};function Ea(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Qt(t){var n=Ea(t);return n.length===1?n[0].toString(16):null}function _a(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ln(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Zt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Ln(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,Ln(n)):N.styles[t]=m(m({},N.styles[t]||{}),i),t==="fas"&&Zt("fa",n)}var kt,xt,St,q=N.styles,Pa=N.shims,Ia=(kt={},E(kt,k,Object.values(st[k])),E(kt,S,Object.values(st[S])),kt),kn=null,ye={},we={},ke={},xe={},Se={},Ca=(xt={},E(xt,k,Object.keys(it[k])),E(xt,S,Object.keys(it[S])),xt);function Ta(t){return~ma.indexOf(t)}function Na(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Ta(r)?r:null}var Ae=function(){var n=function(i){return Ut(q,function(o,s,f){return o[f]=Ut(s,i,{}),o},{})};ye=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),we=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Se=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in q||d.autoFetchSvg,a=Ut(Pa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ke=a.names,xe=a.unicodes,kn=Lt(d.styleDefault,{family:d.familyDefault})};ba(function(t){kn=Lt(t.styleDefault,{family:d.familyDefault})});Ae();function xn(t,n){return(ye[t]||{})[n]}function ja(t,n){return(we[t]||{})[n]}function X(t,n){return(Se[t]||{})[n]}function Oe(t){return ke[t]||{prefix:null,iconName:null}}function Ma(t){var n=xe[t],e=xn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return kn}var Sn=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?k:e,r=it[a][t],i=ot[a][t]||ot[a][r],o=t in N.styles?t:null;return i||o||null}var Rn=(St={},E(St,k,Object.keys(st[k])),E(St,S,Object.keys(st[S])),St);function Rt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},E(n,k,"".concat(d.cssPrefix,"-").concat(k)),E(n,S,"".concat(d.cssPrefix,"-").concat(S)),n),o=null,s=k;(t.includes(i[k])||t.some(function(l){return Rn[k].includes(l)}))&&(s=k),(t.includes(i[S])||t.some(function(l){return Rn[S].includes(l)}))&&(s=S);var f=t.reduce(function(l,u){var c=Na(d.cssPrefix,u);if(q[u]?(u=Ia[s].includes(u)?oa[s][u]:u,o=u,l.prefix=u):Ca[s].indexOf(u)>-1?(o=u,l.prefix=Lt(u,{family:s})):c?l.iconName=c:u!==d.replacementClass&&u!==i[k]&&u!==i[S]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var h=o==="fa"?Oe(l.iconName):{},v=X(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||v||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},Sn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===S&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var La=function(){function t(){Xe(this,t),this.definitions={}}return Je(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),Zt(s,o[s]);var f=st[k][s];f&&Zt(f,o[s]),Ae()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(e[s][c]=l)}),e[s][f]=l}),e}}]),t}(),zn=[],Q={},Z={},Ra=Object.keys(Z);function za(t,n){var e=n.mixoutsTo;return zn=t,Q={},Object.keys(Z).forEach(function(a){Ra.indexOf(a)===-1&&delete Z[a]}),zn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Ct(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(Z)}),e}function tn(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function J(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,e)})}function D(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,n):void 0}function nn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||W();if(n)return n=X(e,n)||n,Mn(Ee.definitions,e,n)||Mn(N.styles,e,n)}var Ee=new La,Fa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},Da={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(J("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Oa(function(){Ya({autoReplaceSvgRoot:e}),J("watch",n)})}},$a={icon:function(n){if(n===null)return null;if(Ct(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Lt(n[0]);return{prefix:a,iconName:X(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(sa))){var r=Rt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:X(i,n)||n}}}},C={noAuto:Fa,config:d,dom:Da,parse:$a,library:Ee,findIconDefinition:nn,toHtml:dt},Ya=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?x:e;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function zt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ua(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(wn(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=Mt(m(m({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ba(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function An(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,u=t.titleId,c=t.extra,h=t.watchable,v=h===void 0?!1:h,y=a.found?a:e,g=y.width,P=y.height,p=r==="fak",b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(Y){return c.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(c.classes).join(" "),w={children:[],attributes:m(m({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(P)})},A=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(g/P*16*.0625,"em")}:{};v&&(w.attributes[V]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||lt())},children:[f]}),delete w.attributes.title);var O=m(m({},w),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:m(m({},A),c.styles)}),j=a.found&&e.found?D("generateAbstractMask",O)||{children:[],attributes:{}}:D("generateAbstractIcon",O)||{children:[],attributes:{}},T=j.children,$t=j.attributes;return O.children=T,O.attributes=$t,s?Ba(O):Ua(O)}function Fn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[V]="");var u=m({},o.styles);wn(r)&&(u.transform=ka({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var c=Mt(u);c.length>0&&(l.style=c);var h=[];return h.push({tag:"span",attributes:l,children:[n]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Wa(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Mt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Bt=N.styles;function en(t){var n=t[0],e=t[1],a=t.slice(4),r=vn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Ha={found:!1,width:512,height:512};function Ga(t,n){!me&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function an(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=W()),new Promise(function(a,r){if(D("missingIconAbstract"),e==="fa"){var i=Oe(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Bt[n]&&Bt[n][t]){var o=Bt[n][t];return a(en(o))}Ga(t,n),a(m(m({},Ha),{},{icon:d.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var Dn=function(){},rn=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Dn,measure:Dn},et='FA "6.5.2"',Xa=function(n){return rn.mark("".concat(et," ").concat(n," begins")),function(){return _e(n)}},_e=function(n){rn.mark("".concat(et," ").concat(n," ends")),rn.measure("".concat(et," ").concat(n),"".concat(et," ").concat(n," begins"),"".concat(et," ").concat(n," ends"))},On={begin:Xa,end:_e},Et=function(){};function $n(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function Va(t){var n=t.getAttribute?t.getAttribute(bn):null,e=t.getAttribute?t.getAttribute(hn):null;return n&&e}function Ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ka(){if(d.autoReplaceSvg===!0)return _t.replace;var t=_t[d.autoReplaceSvg];return t||_t.replace}function qa(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Qa(t){return x.createElement(t)}function Pe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?qa:Qa:e;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Pe(o,{ceFn:a}))}),r}function Za(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var _t={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Pe(r),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){var a=x.createComment(Za(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~yn(e).indexOf(d.replacementClass))return _t.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return dt(s)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function Yn(t){t()}function Ie(t,n){var e=typeof n=="function"?n:Et;if(t.length===0)e();else{var a=Yn;d.mutateApproach===ra&&(a=B.requestAnimationFrame||Yn),a(function(){var r=Ka(),i=On.begin("mutate");t.map(r),i(),e()})}}var En=!1;function Ce(){En=!0}function on(){En=!1}var Nt=null;function Un(t){if(Tn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?Et:n,a=t.nodeCallback,r=a===void 0?Et:a,i=t.pseudoElementsCallback,o=i===void 0?Et:i,s=t.observeMutationsRoot,f=s===void 0?x:s;Nt=new Tn(function(l){if(!En){var u=W();nt(l).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!$n(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&$n(c.target)&&~ca.indexOf(c.attributeName))if(c.attributeName==="class"&&Va(c.target)){var h=Rt(yn(c.target)),v=h.prefix,y=h.iconName;c.target.setAttribute(bn,v||u),y&&c.target.setAttribute(hn,y)}else Ja(c.target)&&r(c.target)})}}),$&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tr(){Nt&&Nt.disconnect()}function nr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function er(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Rt(yn(t));return r.prefix||(r.prefix=W()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ja(r.prefix,t.innerText)||xn(r.prefix,Qt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ar(t){var n=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||lt()):(n["aria-hidden"]="true",n.focusable="false")),n}function rr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=er(t),a=e.iconName,r=e.prefix,i=e.rest,o=ar(t),s=tn("parseNodeAttributes",{},t),f=n.styleParser?nr(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var ir=N.styles;function Te(t){var n=d.autoReplaceSvg==="nest"?Bn(t,{styleParser:!1}):Bn(t);return~n.extra.classes.indexOf(de)?D("generateLayersText",t,n):D("generateSvgReplacementMutation",t,n)}var H=new Set;gn.map(function(t){H.add("fa-".concat(t))});Object.keys(it[k]).map(H.add.bind(H));Object.keys(it[S]).map(H.add.bind(H));H=ct(H);function Wn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=x.documentElement.classList,a=function(c){return e.add("".concat(Nn,"-").concat(c))},r=function(c){return e.remove("".concat(Nn,"-").concat(c))},i=d.autoFetchSvg?H:gn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ir));i.includes("fa")||i.push("fa");var o=[".".concat(de,":not([").concat(V,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=On.begin("onTree"),l=s.reduce(function(u,c){try{var h=Te(c);h&&u.push(h)}catch(v){me||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,c){Promise.all(l).then(function(h){Ie(h,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(h){f(),c(h)})})}function or(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Te(t).then(function(e){e&&Ie([e],n)})}function sr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:nn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:nn(r||{})),t(a,m(m({},e),{},{mask:r}))}}var fr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?M:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,u=l===void 0?null:l,c=e.title,h=c===void 0?null:c,v=e.titleId,y=v===void 0?null:v,g=e.classes,P=g===void 0?[]:g,p=e.attributes,b=p===void 0?{}:p,w=e.styles,A=w===void 0?{}:w;if(n){var O=n.prefix,j=n.iconName,T=n.icon;return zt(m({type:"icon"},n),function(){return J("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(h?b["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(y||lt()):(b["aria-hidden"]="true",b.focusable="false")),An({icons:{main:en(T),mask:f?en(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:j,transform:m(m({},M),r),symbol:o,title:h,maskId:u,titleId:y,extra:{attributes:b,styles:A,classes:P}})})}},lr={mixout:function(){return{icon:sr(fr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Wn,e.nodeCallback=or,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?x:a,i=e.callback,o=i===void 0?function(){}:i;return Wn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,u=a.mask,c=a.maskId,h=a.extra;return new Promise(function(v,y){Promise.all([an(r,s),u.iconName?an(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var P=vn(g,2),p=P[0],b=P[1];v([e,An({icons:{main:p,mask:b},prefix:s,iconName:r,transform:f,symbol:l,maskId:c,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Mt(s);f.length>0&&(r.style=f);var l;return wn(o)&&(l=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},ur={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ct(i)).join(" ")},children:o}]})}}}},cr={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,u=a.styles,c=u===void 0?{}:u;return zt({type:"counter",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),Wa({content:e.toString(),title:i,extra:{attributes:l,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ct(s))}})})}}}},mr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,u=a.attributes,c=u===void 0?{}:u,h=a.styles,v=h===void 0?{}:h;return zt({type:"text",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),Fn({content:e,transform:m(m({},M),i),title:s,extra:{attributes:c,styles:v,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ct(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(le){var l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/l,f=u.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Fn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},dr=new RegExp('"',"ug"),Hn=[1105920,1112319];function vr(t){var n=t.replace(dr,""),e=_a(n,0),a=e>=Hn[0]&&e<=Hn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Qt(r?n[0]:n),isSecondary:a||r}}function Gn(t,n){var e="".concat(aa).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=nt(t.children),o=i.filter(function(T){return T.getAttribute(qt)===n})[0],s=B.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(fa),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?S:k,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ot[h][f[2].toLowerCase()]:la[h][l],y=vr(c),g=y.value,P=y.isSecondary,p=f[0].startsWith("FontAwesome"),b=xn(v,g),w=b;if(p){var A=Ma(g);A.iconName&&A.prefix&&(b=A.iconName,v=A.prefix)}if(b&&!P&&(!o||o.getAttribute(bn)!==v||o.getAttribute(hn)!==w)){t.setAttribute(e,w),o&&t.removeChild(o);var O=rr(),j=O.extra;j.attributes[qt]=n,an(b,v).then(function(T){var $t=An(m(m({},O),{},{icons:{main:T,mask:Sn()},prefix:v,iconName:w,extra:j,watchable:!0})),Y=x.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=$t.map(function(Ye){return dt(Ye)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function pr(t){return Promise.all([Gn(t,"::before"),Gn(t,"::after")])}function br(t){return t.parentNode!==document.head&&!~ia.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xn(t){if($)return new Promise(function(n,e){var a=nt(t.querySelectorAll("*")).filter(br).map(pr),r=On.begin("searchPseudoElements");Ce(),Promise.all(a).then(function(){r(),on(),n()}).catch(function(){r(),on(),e()})})}var hr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Xn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?x:a;d.searchPseudoElements&&Xn(r)}}},Vn=!1,gr={mixout:function(){return{dom:{unwatch:function(){Ce(),Vn=!0}}}},hooks:function(){return{bootstrap:function(){Un(tn("mutationObserverCallbacks",{}))},noAuto:function(){tr()},watch:function(e){var a=e.observeMutationsRoot;Vn?on():Un(tn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Jn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},yr={mixout:function(){return{parse:{transform:function(e){return Jn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Jn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:c,path:h};return{tag:"g",attributes:m({},v.outer),children:[{tag:"g",attributes:m({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),v.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function Kn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function wr(t){return t.tag==="g"?t.children:[t]}var kr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Rt(r.split(" ").map(function(o){return o.trim()})):Sn();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,u=i.icon,c=o.width,h=o.icon,v=wa({transform:f,containerWidth:c,iconWidth:l}),y={tag:"rect",attributes:m(m({},Wt),{},{fill:"white"})},g=u.children?{children:u.children.map(Kn)}:{},P={tag:"g",attributes:m({},v.inner),children:[Kn(m({tag:u.tag,attributes:m(m({},u.attributes),v.path)},g))]},p={tag:"g",attributes:m({},v.outer),children:[P]},b="mask-".concat(s||lt()),w="clip-".concat(s||lt()),A={tag:"mask",attributes:m(m({},Wt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:wr(h)},A]};return a.push(O,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},Wt)}),{children:a,attributes:r}}}},xr={provides:function(n){var e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Ar=[Sa,lr,ur,cr,mr,hr,gr,yr,kr,xr,Sr];za(Ar,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var sn=C.parse;C.findIconDefinition;C.toHtml;var Or=C.icon;C.layer;C.text;C.counter;function qn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(e),!0).forEach(function(a){I(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):qn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Er(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function _r(t){var n=Er(t,"string");return typeof n=="symbol"?n:n+""}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function I(t,n,e){return n=_r(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Pr(t,n){if(t==null)return{};var e={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(n.indexOf(a)>=0)continue;e[a]=t[a]}return e}function Ir(t,n){if(t==null)return{};var e=Pr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ne={exports:{}};(function(t){(function(n){var e=function(p,b,w){if(!l(b)||c(b)||h(b)||v(b)||f(b))return b;var A,O=0,j=0;if(u(b))for(A=[],j=b.length;O<j;O++)A.push(e(p,b[O],w));else{A={};for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&(A[p(T,w)]=e(p,b[T],w))}return A},a=function(p,b){b=b||{};var w=b.separator||"_",A=b.split||/(?=[A-Z])/;return p.split(A).join(w)},r=function(p){return y(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(b,w){return w?w.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var b=r(p);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(p,b){return a(p,b).toLowerCase()},s=Object.prototype.toString,f=function(p){return typeof p=="function"},l=function(p){return p===Object(p)},u=function(p){return s.call(p)=="[object Array]"},c=function(p){return s.call(p)=="[object Date]"},h=function(p){return s.call(p)=="[object RegExp]"},v=function(p){return s.call(p)=="[object Boolean]"},y=function(p){return p=p-0,p===p},g=function(p,b){var w=b&&"process"in b?b.process:b;return typeof w!="function"?p:function(A,O){return w(A,p,O)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(p,b){return e(g(r,b),p)},decamelizeKeys:function(p,b){return e(g(o,b),p,b)},pascalizeKeys:function(p,b){return e(g(i,b),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:n.humps=P})(Cr)})(Ne);var Tr=Ne.exports,Nr=["class","style"];function jr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Tr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function Mr(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function je(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return je(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,l){var u=t.attributes[l];switch(l){case"class":f.class=Mr(u);break;case"style":f.style=jr(u);break;default:f.attrs[l]=u}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=Ir(e,Nr);return Ge(t.tag,L(L(L({},n),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),a)}var Me=!1;try{Me=!0}catch{}function Lr(){if(!Me&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ht(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?I({},t,n):{}}function Rr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(I(I(I(I(I(I(I(I(I(n,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),I(I(n,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Qn(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sn.icon)return sn.icon(t);if(t===null)return null;if(jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ei=We({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=K(function(){return Qn(n.icon)}),i=K(function(){return Ht("classes",Rr(n))}),o=K(function(){return Ht("transform",typeof n.transform=="string"?sn.transform(n.transform):n.transform)}),s=K(function(){return Ht("mask",Qn(n.mask))}),f=K(function(){return Or(r.value,L(L(L(L({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});He(f,function(u){if(!u)return Lr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=K(function(){return f.value?je(f.value.abstract[0],{},a):null});return function(){return l.value}}}),_=[];for(var Gt=0;Gt<256;++Gt)_.push((Gt+256).toString(16).slice(1));function zr(t,n=0){return(_[t[n+0]]+_[t[n+1]]+_[t[n+2]]+_[t[n+3]]+"-"+_[t[n+4]]+_[t[n+5]]+"-"+_[t[n+6]]+_[t[n+7]]+"-"+_[t[n+8]]+_[t[n+9]]+"-"+_[t[n+10]]+_[t[n+11]]+_[t[n+12]]+_[t[n+13]]+_[t[n+14]]+_[t[n+15]]).toLowerCase()}var At,Fr=new Uint8Array(16);function Dr(){if(!At&&(At=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!At))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return At(Fr)}var $r=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Zn={randomUUID:$r};function Yr(t,n,e){if(Zn.randomUUID&&!n&&!t)return Zn.randomUUID();t=t||{};var a=t.random||(t.rng||Dr)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,zr(a)}var fn=function(t,n){return fn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])},fn(t,n)};function Ft(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");fn(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function ai(t,n,e,a){function r(i){return i instanceof e?i:new e(function(o){o(i)})}return new(e||(e=Promise))(function(i,o){function s(u){try{l(a.next(u))}catch(c){o(c)}}function f(u){try{l(a.throw(u))}catch(c){o(c)}}function l(u){u.done?i(u.value):r(u.value).then(s,f)}l((a=a.apply(t,n||[])).next())})}function ri(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,r,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(l){return function(u){return f([l,u])}}function f(l){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(e=0)),e;)try{if(a=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,r=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){e.label=l[1];break}if(l[0]===6&&e.label<i[1]){e.label=i[1],i=l;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(l);break}i[2]&&e.ops.pop(),e.trys.pop();continue}l=n.call(t,e)}catch(u){l=[6,u],r=0}finally{a=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ut(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],a=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ln(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var a=e.call(t),r,i=[],o;try{for(;(n===void 0||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i}function un(t,n,e){if(e||arguments.length===2)for(var a=0,r=n.length,i;a<r;a++)(i||!(a in n))&&(i||(i=Array.prototype.slice.call(n,0,a)),i[a]=n[a]);return t.concat(i||Array.prototype.slice.call(n))}function cn(t){return this instanceof cn?(this.v=t,this):new cn(t)}function ii(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=e.apply(t,n||[]),r,i=[];return r={},s("next"),s("throw"),s("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(v){return function(y){return Promise.resolve(y).then(v,c)}}function s(v,y){a[v]&&(r[v]=function(g){return new Promise(function(P,p){i.push([v,g,P,p])>1||f(v,g)})},y&&(r[v]=y(r[v])))}function f(v,y){try{l(a[v](y))}catch(g){h(i[0][3],g)}}function l(v){v.value instanceof cn?Promise.resolve(v.value.v).then(u,c):h(i[0][2],v)}function u(v){f("next",v)}function c(v){f("throw",v)}function h(v,y){v(y),i.shift(),i.length&&f(i[0][0],i[0][1])}}function oi(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof ut=="function"?ut(t):t[Symbol.iterator](),e={},a("next"),a("throw"),a("return"),e[Symbol.asyncIterator]=function(){return this},e);function a(i){e[i]=t[i]&&function(o){return new Promise(function(s,f){o=t[i](o),r(s,f,o.done,o.value)})}}function r(i,o,s,f){Promise.resolve(f).then(function(l){i({value:l,done:s})},o)}}function R(t){return typeof t=="function"}function Le(t){var n=function(a){Error.call(a),a.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Xt=Le(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(a,r){return r+1+") "+a.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function mn(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Dt=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,a,r,i;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var s=ut(o),f=s.next();!f.done;f=s.next()){var l=f.value;l.remove(this)}}catch(g){n={error:g}}finally{try{f&&!f.done&&(e=s.return)&&e.call(s)}finally{if(n)throw n.error}}else o.remove(this);var u=this.initialTeardown;if(R(u))try{u()}catch(g){i=g instanceof Xt?g.errors:[g]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var h=ut(c),v=h.next();!v.done;v=h.next()){var y=v.value;try{te(y)}catch(g){i=i??[],g instanceof Xt?i=un(un([],ln(i)),ln(g.errors)):i.push(g)}}}catch(g){a={error:g}}finally{try{v&&!v.done&&(r=h.return)&&r.call(h)}finally{if(a)throw a.error}}}if(i)throw new Xt(i)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)te(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&mn(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&mn(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),Re=Dt.EMPTY;function ze(t){return t instanceof Dt||t&&"closed"in t&&R(t.remove)&&R(t.add)&&R(t.unsubscribe)}function te(t){R(t)?t():t.unsubscribe()}var Fe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},De={setTimeout:function(t,n){for(var e=[],a=2;a<arguments.length;a++)e[a-2]=arguments[a];return setTimeout.apply(void 0,un([t,n],ln(e)))},clearTimeout:function(t){var n=De.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function Ur(t){De.setTimeout(function(){throw t})}function ne(){}function Pt(t){t()}var $e=function(t){Ft(n,t);function n(e){var a=t.call(this)||this;return a.isStopped=!1,e?(a.destination=e,ze(e)&&e.add(a)):a.destination=Gr,a}return n.create=function(e,a,r){return new dn(e,a,r)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Dt),Br=Function.prototype.bind;function Vt(t,n){return Br.call(t,n)}var Wr=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(a){Ot(a)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(a){Ot(a)}else Ot(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){Ot(e)}},t}(),dn=function(t){Ft(n,t);function n(e,a,r){var i=t.call(this)||this,o;if(R(e)||!e)o={next:e??void 0,error:a??void 0,complete:r??void 0};else{var s;i&&Fe.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=function(){return i.unsubscribe()},o={next:e.next&&Vt(e.next,s),error:e.error&&Vt(e.error,s),complete:e.complete&&Vt(e.complete,s)}):o=e}return i.destination=new Wr(o),i}return n}($e);function Ot(t){Ur(t)}function Hr(t){throw t}var Gr={closed:!0,next:ne,error:Hr,complete:ne},Xr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Vr(t){return t}function Jr(t){return t.length===0?Vr:t.length===1?t[0]:function(e){return t.reduce(function(a,r){return r(a)},e)}}var ee=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,a){var r=this,i=qr(n)?n:new dn(n,e,a);return Pt(function(){var o=r,s=o.operator,f=o.source;i.add(s?s.call(i,f):f?r._subscribe(i):r._trySubscribe(i))}),i},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var a=this;return e=ae(e),new e(function(r,i){var o=new dn({next:function(s){try{n(s)}catch(f){i(f),o.unsubscribe()}},error:i,complete:r});a.subscribe(o)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[Xr]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Jr(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=ae(n),new n(function(a,r){var i;e.subscribe(function(o){return i=o},function(o){return r(o)},function(){return a(i)})})},t.create=function(n){return new t(n)},t}();function ae(t){var n;return(n=t??Fe.Promise)!==null&&n!==void 0?n:Promise}function Kr(t){return t&&R(t.next)&&R(t.error)&&R(t.complete)}function qr(t){return t&&t instanceof $e||Kr(t)&&ze(t)}var Qr=Le(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),It=function(t){Ft(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var a=new re(this,this);return a.operator=e,a},n.prototype._throwIfClosed=function(){if(this.closed)throw new Qr},n.prototype.next=function(e){var a=this;Pt(function(){var r,i;if(a._throwIfClosed(),!a.isStopped){a.currentObservers||(a.currentObservers=Array.from(a.observers));try{for(var o=ut(a.currentObservers),s=o.next();!s.done;s=o.next()){var f=s.value;f.next(e)}}catch(l){r={error:l}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}}})},n.prototype.error=function(e){var a=this;Pt(function(){if(a._throwIfClosed(),!a.isStopped){a.hasError=a.isStopped=!0,a.thrownError=e;for(var r=a.observers;r.length;)r.shift().error(e)}})},n.prototype.complete=function(){var e=this;Pt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var a=e.observers;a.length;)a.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var a=this,r=this,i=r.hasError,o=r.isStopped,s=r.observers;return i||o?Re:(this.currentObservers=null,s.push(e),new Dt(function(){a.currentObservers=null,mn(s,e)}))},n.prototype._checkFinalizedStatuses=function(e){var a=this,r=a.hasError,i=a.thrownError,o=a.isStopped;r?e.error(i):o&&e.complete()},n.prototype.asObservable=function(){var e=new ee;return e.source=this,e},n.create=function(e,a){return new re(e,a)},n}(ee),re=function(t){Ft(n,t);function n(e,a){var r=t.call(this)||this;return r.destination=e,r.source=a,r}return n.prototype.next=function(e){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.next)===null||r===void 0||r.call(a,e)},n.prototype.error=function(e){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.error)===null||r===void 0||r.call(a,e)},n.prototype.complete=function(){var e,a;(a=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||a===void 0||a.call(e)},n.prototype._subscribe=function(e){var a,r;return(r=(a=this.source)===null||a===void 0?void 0:a.subscribe(e))!==null&&r!==void 0?r:Re},n}(It);class Zr{constructor(){vt(this,"onDocumentInserted$",new It);vt(this,"onDocumentUpdated$",new It);vt(this,"onDocumentDeleted$",new It)}get(n){return JSON.parse(localStorage.getItem(n))}getAll(n){const e=localStorage.getItem(`${n}_ids`)||"[]";return JSON.parse(e).map(r=>JSON.parse(localStorage.getItem(r)))}getByFilter(n,e){const a=localStorage.getItem(`${n}_ids`)||"[]";return JSON.parse(a).map(i=>JSON.parse(localStorage.getItem(i))).filter(e)}insert(n,e){e.id=`${n}_${Yr()}`;const a=localStorage.getItem(`${n}_ids`)||"[]",r=JSON.parse(a);r.push(e.id),localStorage.setItem(`${n}_ids`,JSON.stringify(r)),localStorage.setItem(e.id,JSON.stringify(e)),this.onDocumentInserted$.next({table:n,document:e})}update(n){localStorage.setItem(n.id,JSON.stringify(n)),this.onDocumentUpdated$.next(n)}updateFields(n,e,a=!0){console.log("updateFields",n,e);const r=JSON.parse(localStorage.getItem(n));Object.assign(r,e),localStorage.setItem(n,JSON.stringify(r)),a&&this.onDocumentUpdated$.next(r)}delete(n,e){const a=localStorage.getItem(`${n}_ids`)||"[]",r=JSON.parse(a),i=r.indexOf(e);r.splice(i,1),localStorage.setItem(`${n}_ids`,JSON.stringify(r)),localStorage.removeItem(e),this.onDocumentDeleted$.next(e)}deleteByFilter(n,e){this.getByFilter(n,e).forEach(r=>this.delete(n,r.id))}}const si=new Zr;export{ei as F,ee as O,$e as S,Ft as _,ii as a,ri as b,cn as c,si as d,ut as e,ai as f,oi as g,It as h,R as i,ne as n,Xr as o,Ur as r};
