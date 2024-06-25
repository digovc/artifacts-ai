var Un=Object.defineProperty;var Bn=(t,e,n)=>e in t?Un(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var vt=(t,e,n)=>Bn(t,typeof e!="symbol"?e+"":e,n);import{l as Wn,m as K,s as Hn,n as Gn}from"./index-Cppm4vTW.js";function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(a){E(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Xn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vn(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Jn(t,e,n){return e&&Vn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function de(t,e){return qn(t)||Zn(t,e)||rn(t,e)||ea()}function ct(t){return Kn(t)||Qn(t)||rn(t)||ta()}function Kn(t){if(Array.isArray(t))return Jt(t)}function qn(t){if(Array.isArray(t))return t}function Qn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function rn(t,e){if(t){if(typeof t=="string")return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}}function Jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ta(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _e=function(){},ve={},on={},sn=null,fn={mark:_e,measure:_e};try{typeof window<"u"&&(ve=window),typeof document<"u"&&(on=document),typeof MutationObserver<"u"&&(sn=MutationObserver),typeof performance<"u"&&(fn=performance)}catch{}var na=ve.navigator||{},Pe=na.userAgent,Ie=Pe===void 0?"":Pe,B=ve,x=on,Ce=sn,pt=fn;B.document;var $=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ln=~Ie.indexOf("MSIE")||~Ie.indexOf("Trident/"),bt,ht,gt,yt,wt,D="___FONT_AWESOME___",Kt=16,un="fa",cn="svg-inline--fa",V="data-fa-i2svg",qt="data-fa-pseudo-element",aa="data-fa-pseudo-element-pending",pe="data-prefix",be="data-icon",Te="fontawesome-i2svg",ra="async",ia=["HTML","HEAD","STYLE","SCRIPT"],mn=function(){try{return!1}catch{return!1}}(),k="classic",S="sharp",he=[k,S];function mt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var it=mt((bt={},E(bt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(bt,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bt)),ot=mt((ht={},E(ht,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(ht,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ht)),st=mt((gt={},E(gt,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(gt,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),oa=mt((yt={},E(yt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(yt,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yt)),sa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,dn="fa-layers-text",fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,la=mt((wt={},E(wt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(wt,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wt)),vn=[1,2,3,4,5,6,7,8,9,10],ua=vn.concat([11,12,13,14,15,16,17,18,19,20]),ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(ot[k]).map(ft.add.bind(ft));Object.keys(ot[S]).map(ft.add.bind(ft));var ma=[].concat(he,ct(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(vn.map(function(t){return"".concat(t,"x")})).concat(ua.map(function(t){return"w-".concat(t)})),at=B.FontAwesomeConfig||{};function da(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(x&&typeof x.querySelector=="function"){var pa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pa.forEach(function(t){var e=de(t,2),n=e[0],a=e[1],r=va(da(n));r!=null&&(at[a]=r)})}var pn={styleDefault:"solid",familyDefault:"classic",cssPrefix:un,replacementClass:cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);var tt=m(m({},pn),at);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(pn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){tt[t]=n,rt.forEach(function(a){return a(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){tt.cssPrefix=e,rt.forEach(function(n){return n(d)})},get:function(){return tt.cssPrefix}});B.FontAwesomeConfig=d;var rt=[];function ba(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var U=Kt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ha(t){if(!(!t||!$)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}}var ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var t=12,e="";t-- >0;)e+=ga[Math.random()*62|0];return e}function et(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ge(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ya(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bn(t[n]),'" ')},"").trim()}function Mt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ye(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function wa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function ka(t){var e=t.transform,n=t.width,a=n===void 0?Kt:n,r=t.height,i=r===void 0?Kt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ln?f+="translate(".concat(e.x/U-a/2,"em, ").concat(e.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):f+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),f+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var xa=`:root, :host {
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
}`;function hn(){var t=un,e=cn,n=d.cssPrefix,a=d.replacementClass,r=xa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ne=!1;function Yt(){d.autoAddCss&&!Ne&&(ha(hn()),Ne=!0)}var Sa={mixout:function(){return{dom:{css:hn,insertCss:Yt}}},hooks:function(){return{beforeDOMElementCreation:function(){Yt()},beforeI2svg:function(){Yt()}}}},z=B||{};z[D]||(z[D]={});z[D].styles||(z[D].styles={});z[D].hooks||(z[D].hooks={});z[D].shims||(z[D].shims=[]);var N=z[D],gn=[],Aa=function t(){x.removeEventListener("DOMContentLoaded",t),Tt=1,gn.map(function(e){return e()})},Tt=!1;$&&(Tt=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Tt||x.addEventListener("DOMContentLoaded",Aa));function Oa(t){$&&(Tt?setTimeout(t,0):gn.push(t))}function dt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?bn(t):"<".concat(e," ").concat(ya(a),">").concat(i.map(dt).join(""),"</").concat(e,">")}function je(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ut=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,f,l,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<o;f++)l=i[f],u=s(u,e[l],l,e);return u};function Ea(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Qt(t){var e=Ea(t);return e.length===1?e[0].toString(16):null}function _a(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Zt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Me(e);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,Me(e)):N.styles[t]=m(m({},N.styles[t]||{}),i),t==="fas"&&Zt("fa",e)}var kt,xt,St,q=N.styles,Pa=N.shims,Ia=(kt={},E(kt,k,Object.values(st[k])),E(kt,S,Object.values(st[S])),kt),we=null,yn={},wn={},kn={},xn={},Sn={},Ca=(xt={},E(xt,k,Object.keys(it[k])),E(xt,S,Object.keys(it[S])),xt);function Ta(t){return~ma.indexOf(t)}function Na(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ta(r)?r:null}var An=function(){var e=function(i){return Ut(q,function(o,s,f){return o[f]=Ut(s,i,{}),o},{})};yn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),wn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Sn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in q||d.autoFetchSvg,a=Ut(Pa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});kn=a.names,xn=a.unicodes,we=Lt(d.styleDefault,{family:d.familyDefault})};ba(function(t){we=Lt(t.styleDefault,{family:d.familyDefault})});An();function ke(t,e){return(yn[t]||{})[e]}function ja(t,e){return(wn[t]||{})[e]}function X(t,e){return(Sn[t]||{})[e]}function On(t){return kn[t]||{prefix:null,iconName:null}}function Ma(t){var e=xn[t],n=ke("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return we}var xe=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=it[a][t],i=ot[a][t]||ot[a][r],o=t in N.styles?t:null;return i||o||null}var Le=(St={},E(St,k,Object.keys(st[k])),E(St,S,Object.keys(st[S])),St);function Rt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},E(e,k,"".concat(d.cssPrefix,"-").concat(k)),E(e,S,"".concat(d.cssPrefix,"-").concat(S)),e),o=null,s=k;(t.includes(i[k])||t.some(function(l){return Le[k].includes(l)}))&&(s=k),(t.includes(i[S])||t.some(function(l){return Le[S].includes(l)}))&&(s=S);var f=t.reduce(function(l,u){var c=Na(d.cssPrefix,u);if(q[u]?(u=Ia[s].includes(u)?oa[s][u]:u,o=u,l.prefix=u):Ca[s].indexOf(u)>-1?(o=u,l.prefix=Lt(u,{family:s})):c?l.iconName=c:u!==d.replacementClass&&u!==i[k]&&u!==i[S]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var h=o==="fa"?On(l.iconName):{},v=X(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||v||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},xe());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===S&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var La=function(){function t(){Xn(this,t),this.definitions={}}return Jn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Zt(s,o[s]);var f=st[k][s];f&&Zt(f,o[s]),An()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(n[s][c]=l)}),n[s][f]=l}),n}}]),t}(),Re=[],Q={},Z={},Ra=Object.keys(Z);function Da(t,e){var n=e.mixoutsTo;return Re=t,Q={},Object.keys(Z).forEach(function(a){Ra.indexOf(a)===-1&&delete Z[a]}),Re.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ct(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(Z)}),n}function te(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function F(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function ee(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(e)return e=X(n,e)||e,je(En.definitions,n,e)||je(N.styles,n,e)}var En=new La,za=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},Fa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(J("beforeI2svg",e),F("pseudoElements2svg",e),F("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Oa(function(){Ya({autoReplaceSvgRoot:n}),J("watch",e)})}},$a={icon:function(e){if(e===null)return null;if(Ct(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Lt(e[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(sa))){var r=Rt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:X(i,e)||e}}}},C={noAuto:za,config:d,dom:Fa,parse:$a,library:En,findIconDefinition:ee,toHtml:dt},Ya=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function Dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ua(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ye(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Mt(m(m({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ba(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function Se(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,u=t.titleId,c=t.extra,h=t.watchable,v=h===void 0?!1:h,y=a.found?a:n,g=y.width,P=y.height,p=r==="fak",b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(Y){return c.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(c.classes).join(" "),w={children:[],attributes:m(m({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(P)})},A=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(g/P*16*.0625,"em")}:{};v&&(w.attributes[V]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||lt())},children:[f]}),delete w.attributes.title);var O=m(m({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:m(m({},A),c.styles)}),j=a.found&&n.found?F("generateAbstractMask",O)||{children:[],attributes:{}}:F("generateAbstractIcon",O)||{children:[],attributes:{}},T=j.children,$t=j.attributes;return O.children=T,O.attributes=$t,s?Ba(O):Ua(O)}function De(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[V]="");var u=m({},o.styles);ye(r)&&(u.transform=ka({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var c=Mt(u);c.length>0&&(l.style=c);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Wa(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Mt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bt=N.styles;function ne(t){var e=t[0],n=t[1],a=t.slice(4),r=de(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ha={found:!1,width:512,height:512};function Ga(t,e){!mn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ae(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=W()),new Promise(function(a,r){if(F("missingIconAbstract"),n==="fa"){var i=On(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Bt[e]&&Bt[e][t]){var o=Bt[e][t];return a(ne(o))}Ga(t,e),a(m(m({},Ha),{},{icon:d.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var ze=function(){},re=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:ze,measure:ze},nt='FA "6.5.2"',Xa=function(e){return re.mark("".concat(nt," ").concat(e," begins")),function(){return _n(e)}},_n=function(e){re.mark("".concat(nt," ").concat(e," ends")),re.measure("".concat(nt," ").concat(e),"".concat(nt," ").concat(e," begins"),"".concat(nt," ").concat(e," ends"))},Ae={begin:Xa,end:_n},Et=function(){};function Fe(t){var e=t.getAttribute?t.getAttribute(V):null;return typeof e=="string"}function Va(t){var e=t.getAttribute?t.getAttribute(pe):null,n=t.getAttribute?t.getAttribute(be):null;return e&&n}function Ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ka(){if(d.autoReplaceSvg===!0)return _t.replace;var t=_t[d.autoReplaceSvg];return t||_t.replace}function qa(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Qa(t){return x.createElement(t)}function Pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?qa:Qa:n;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Pn(o,{ceFn:a}))}),r}function Za(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var _t={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Pn(r),n)}),n.getAttribute(V)===null&&d.keepOriginalSource){var a=x.createComment(Za(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ge(n).indexOf(d.replacementClass))return _t.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return dt(s)}).join(`
`);n.setAttribute(V,""),n.innerHTML=o}};function $e(t){t()}function In(t,e){var n=typeof e=="function"?e:Et;if(t.length===0)n();else{var a=$e;d.mutateApproach===ra&&(a=B.requestAnimationFrame||$e),a(function(){var r=Ka(),i=Ae.begin("mutate");t.map(r),i(),n()})}}var Oe=!1;function Cn(){Oe=!0}function ie(){Oe=!1}var Nt=null;function Ye(t){if(Ce&&d.observeMutations){var e=t.treeCallback,n=e===void 0?Et:e,a=t.nodeCallback,r=a===void 0?Et:a,i=t.pseudoElementsCallback,o=i===void 0?Et:i,s=t.observeMutationsRoot,f=s===void 0?x:s;Nt=new Ce(function(l){if(!Oe){var u=W();et(l).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Fe(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Fe(c.target)&&~ca.indexOf(c.attributeName))if(c.attributeName==="class"&&Va(c.target)){var h=Rt(ge(c.target)),v=h.prefix,y=h.iconName;c.target.setAttribute(pe,v||u),y&&c.target.setAttribute(be,y)}else Ja(c.target)&&r(c.target)})}}),$&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tr(){Nt&&Nt.disconnect()}function er(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function nr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Rt(ge(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ja(r.prefix,t.innerText)||ke(r.prefix,Qt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ar(t){var e=et(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function rr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nr(t),a=n.iconName,r=n.prefix,i=n.rest,o=ar(t),s=te("parseNodeAttributes",{},t),f=e.styleParser?er(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var ir=N.styles;function Tn(t){var e=d.autoReplaceSvg==="nest"?Ue(t,{styleParser:!1}):Ue(t);return~e.extra.classes.indexOf(dn)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}var H=new Set;he.map(function(t){H.add("fa-".concat(t))});Object.keys(it[k]).map(H.add.bind(H));Object.keys(it[S]).map(H.add.bind(H));H=ct(H);function Be(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var n=x.documentElement.classList,a=function(c){return n.add("".concat(Te,"-").concat(c))},r=function(c){return n.remove("".concat(Te,"-").concat(c))},i=d.autoFetchSvg?H:he.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ir));i.includes("fa")||i.push("fa");var o=[".".concat(dn,":not([").concat(V,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Ae.begin("onTree"),l=s.reduce(function(u,c){try{var h=Tn(c);h&&u.push(h)}catch(v){mn||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,c){Promise.all(l).then(function(h){In(h,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(h){f(),c(h)})})}function or(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tn(t).then(function(n){n&&In([n],e)})}function sr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ee(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ee(r||{})),t(a,m(m({},n),{},{mask:r}))}}var fr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,c=n.title,h=c===void 0?null:c,v=n.titleId,y=v===void 0?null:v,g=n.classes,P=g===void 0?[]:g,p=n.attributes,b=p===void 0?{}:p,w=n.styles,A=w===void 0?{}:w;if(e){var O=e.prefix,j=e.iconName,T=e.icon;return Dt(m({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(h?b["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(y||lt()):(b["aria-hidden"]="true",b.focusable="false")),Se({icons:{main:ne(T),mask:f?ne(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:j,transform:m(m({},M),r),symbol:o,title:h,maskId:u,titleId:y,extra:{attributes:b,styles:A,classes:P}})})}},lr={mixout:function(){return{icon:sr(fr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Be,n.nodeCallback=or,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?x:a,i=n.callback,o=i===void 0?function(){}:i;return Be(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,u=a.mask,c=a.maskId,h=a.extra;return new Promise(function(v,y){Promise.all([ae(r,s),u.iconName?ae(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var P=de(g,2),p=P[0],b=P[1];v([n,Se({icons:{main:p,mask:b},prefix:s,iconName:r,transform:f,symbol:l,maskId:c,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Mt(s);f.length>0&&(r.style=f);var l;return ye(o)&&(l=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},ur={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Dt({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ct(i)).join(" ")},children:o}]})}}}},cr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,u=a.styles,c=u===void 0?{}:u;return Dt({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Wa({content:n.toString(),title:i,extra:{attributes:l,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ct(s))}})})}}}},mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,u=a.attributes,c=u===void 0?{}:u,h=a.styles,v=h===void 0?{}:h;return Dt({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),De({content:n,transform:m(m({},M),i),title:s,extra:{attributes:c,styles:v,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ct(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ln){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,f=u.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,De({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},dr=new RegExp('"',"ug"),We=[1105920,1112319];function vr(t){var e=t.replace(dr,""),n=_a(e,0),a=n>=We[0]&&n<=We[1],r=e.length===2?e[0]===e[1]:!1;return{value:Qt(r?e[0]:e),isSecondary:a||r}}function He(t,e){var n="".concat(aa).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=et(t.children),o=i.filter(function(T){return T.getAttribute(qt)===e})[0],s=B.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(fa),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?S:k,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ot[h][f[2].toLowerCase()]:la[h][l],y=vr(c),g=y.value,P=y.isSecondary,p=f[0].startsWith("FontAwesome"),b=ke(v,g),w=b;if(p){var A=Ma(g);A.iconName&&A.prefix&&(b=A.iconName,v=A.prefix)}if(b&&!P&&(!o||o.getAttribute(pe)!==v||o.getAttribute(be)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var O=rr(),j=O.extra;j.attributes[qt]=e,ae(b,v).then(function(T){var $t=Se(m(m({},O),{},{icons:{main:T,mask:xe()},prefix:v,iconName:w,extra:j,watchable:!0})),Y=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=$t.map(function(Yn){return dt(Yn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function pr(t){return Promise.all([He(t,"::before"),He(t,"::after")])}function br(t){return t.parentNode!==document.head&&!~ia.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ge(t){if($)return new Promise(function(e,n){var a=et(t.querySelectorAll("*")).filter(br).map(pr),r=Ae.begin("searchPseudoElements");Cn(),Promise.all(a).then(function(){r(),ie(),e()}).catch(function(){r(),ie(),n()})})}var hr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ge,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;d.searchPseudoElements&&Ge(r)}}},Xe=!1,gr={mixout:function(){return{dom:{unwatch:function(){Cn(),Xe=!0}}}},hooks:function(){return{bootstrap:function(){Ye(te("mutationObserverCallbacks",{}))},noAuto:function(){tr()},watch:function(n){var a=n.observeMutationsRoot;Xe?ie():Ye(te("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ve=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},yr={mixout:function(){return{parse:{transform:function(n){return Ve(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ve(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:c,path:h};return{tag:"g",attributes:m({},v.outer),children:[{tag:"g",attributes:m({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),v.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function Je(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wr(t){return t.tag==="g"?t.children:[t]}var kr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Rt(r.split(" ").map(function(o){return o.trim()})):xe();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,u=i.icon,c=o.width,h=o.icon,v=wa({transform:f,containerWidth:c,iconWidth:l}),y={tag:"rect",attributes:m(m({},Wt),{},{fill:"white"})},g=u.children?{children:u.children.map(Je)}:{},P={tag:"g",attributes:m({},v.inner),children:[Je(m({tag:u.tag,attributes:m(m({},u.attributes),v.path)},g))]},p={tag:"g",attributes:m({},v.outer),children:[P]},b="mask-".concat(s||lt()),w="clip-".concat(s||lt()),A={tag:"mask",attributes:m(m({},Wt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:wr(h)},A]};return a.push(O,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},Wt)}),{children:a,attributes:r}}}},xr={provides:function(e){var n=!1;B.matchMedia&&(n=B.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ar=[Sa,lr,ur,cr,mr,hr,gr,yr,kr,xr,Sr];Da(Ar,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var oe=C.parse;C.findIconDefinition;C.toHtml;var Or=C.icon;C.layer;C.text;C.counter;function Ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Er(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _r(t){var e=Er(t,"string");return typeof e=="symbol"?e:e+""}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jt(t)}function I(t,e,n){return e=_r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Ir(t,e){if(t==null)return{};var n=Pr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nn={exports:{}};(function(t){(function(e){var n=function(p,b,w){if(!l(b)||c(b)||h(b)||v(b)||f(b))return b;var A,O=0,j=0;if(u(b))for(A=[],j=b.length;O<j;O++)A.push(n(p,b[O],w));else{A={};for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&(A[p(T,w)]=n(p,b[T],w))}return A},a=function(p,b){b=b||{};var w=b.separator||"_",A=b.split||/(?=[A-Z])/;return p.split(A).join(w)},r=function(p){return y(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(b,w){return w?w.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var b=r(p);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(p,b){return a(p,b).toLowerCase()},s=Object.prototype.toString,f=function(p){return typeof p=="function"},l=function(p){return p===Object(p)},u=function(p){return s.call(p)=="[object Array]"},c=function(p){return s.call(p)=="[object Date]"},h=function(p){return s.call(p)=="[object RegExp]"},v=function(p){return s.call(p)=="[object Boolean]"},y=function(p){return p=p-0,p===p},g=function(p,b){var w=b&&"process"in b?b.process:b;return typeof w!="function"?p:function(A,O){return w(A,p,O)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(p,b){return n(g(r,b),p)},decamelizeKeys:function(p,b){return n(g(o,b),p,b)},pascalizeKeys:function(p,b){return n(g(i,b),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(Cr)})(Nn);var Tr=Nn.exports,Nr=["class","style"];function jr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Tr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Mr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function jn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return jn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,l){var u=t.attributes[l];switch(l){case"class":f.class=Mr(u);break;case"style":f.style=jr(u);break;default:f.attrs[l]=u}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ir(n,Nr);return Gn(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),a)}var Mn=!1;try{Mn=!1}catch{}function Lr(){if(!Mn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ht(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?I({},t,e):{}}function Rr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(I(I(I(I(I(I(I(I(I(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),I(I(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function qe(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(oe.icon)return oe.icon(t);if(t===null)return null;if(jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ni=Wn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=K(function(){return qe(e.icon)}),i=K(function(){return Ht("classes",Rr(e))}),o=K(function(){return Ht("transform",typeof e.transform=="string"?oe.transform(e.transform):e.transform)}),s=K(function(){return Ht("mask",qe(e.mask))}),f=K(function(){return Or(r.value,L(L(L(L({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Hn(f,function(u){if(!u)return Lr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=K(function(){return f.value?jn(f.value.abstract[0],{},a):null});return function(){return l.value}}}),_=[];for(var Gt=0;Gt<256;++Gt)_.push((Gt+256).toString(16).slice(1));function Dr(t,e=0){return(_[t[e+0]]+_[t[e+1]]+_[t[e+2]]+_[t[e+3]]+"-"+_[t[e+4]]+_[t[e+5]]+"-"+_[t[e+6]]+_[t[e+7]]+"-"+_[t[e+8]]+_[t[e+9]]+"-"+_[t[e+10]]+_[t[e+11]]+_[t[e+12]]+_[t[e+13]]+_[t[e+14]]+_[t[e+15]]).toLowerCase()}var At,zr=new Uint8Array(16);function Fr(){if(!At&&(At=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!At))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return At(zr)}var $r=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Qe={randomUUID:$r};function Yr(t,e,n){if(Qe.randomUUID&&!e&&!t)return Qe.randomUUID();t=t||{};var a=t.random||(t.rng||Fr)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,Dr(a)}var se=function(t,e){return se=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])},se(t,e)};function zt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");se(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function ai(t,e,n,a){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function s(u){try{l(a.next(u))}catch(c){o(c)}}function f(u){try{l(a.throw(u))}catch(c){o(c)}}function l(u){u.done?i(u.value):r(u.value).then(s,f)}l((a=a.apply(t,e||[])).next())})}function ri(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,r,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(l){return function(u){return f([l,u])}}function f(l){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(n=0)),n;)try{if(a=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,r=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],r=0}finally{a=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ut(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],a=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fe(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var a=n.call(t),r,i=[],o;try{for(;(e===void 0||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function le(t,e,n){if(n||arguments.length===2)for(var a=0,r=e.length,i;a<r;a++)(i||!(a in e))&&(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))}function ue(t){return this instanceof ue?(this.v=t,this):new ue(t)}function ii(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(t,e||[]),r,i=[];return r={},s("next"),s("throw"),s("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(v){return function(y){return Promise.resolve(y).then(v,c)}}function s(v,y){a[v]&&(r[v]=function(g){return new Promise(function(P,p){i.push([v,g,P,p])>1||f(v,g)})},y&&(r[v]=y(r[v])))}function f(v,y){try{l(a[v](y))}catch(g){h(i[0][3],g)}}function l(v){v.value instanceof ue?Promise.resolve(v.value.v).then(u,c):h(i[0][2],v)}function u(v){f("next",v)}function c(v){f("throw",v)}function h(v,y){v(y),i.shift(),i.length&&f(i[0][0],i[0][1])}}function oi(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof ut=="function"?ut(t):t[Symbol.iterator](),n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n);function a(i){n[i]=t[i]&&function(o){return new Promise(function(s,f){o=t[i](o),r(s,f,o.done,o.value)})}}function r(i,o,s,f){Promise.resolve(f).then(function(l){i({value:l,done:s})},o)}}function R(t){return typeof t=="function"}function Ln(t){var e=function(a){Error.call(a),a.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Xt=Ln(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(a,r){return r+1+") "+a.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function ce(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ft=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,a,r,i;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var s=ut(o),f=s.next();!f.done;f=s.next()){var l=f.value;l.remove(this)}}catch(g){e={error:g}}finally{try{f&&!f.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(R(u))try{u()}catch(g){i=g instanceof Xt?g.errors:[g]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var h=ut(c),v=h.next();!v.done;v=h.next()){var y=v.value;try{Ze(y)}catch(g){i=i??[],g instanceof Xt?i=le(le([],fe(i)),fe(g.errors)):i.push(g)}}}catch(g){a={error:g}}finally{try{v&&!v.done&&(r=h.return)&&r.call(h)}finally{if(a)throw a.error}}}if(i)throw new Xt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Ze(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&ce(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&ce(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Rn=Ft.EMPTY;function Dn(t){return t instanceof Ft||t&&"closed"in t&&R(t.remove)&&R(t.add)&&R(t.unsubscribe)}function Ze(t){R(t)?t():t.unsubscribe()}var zn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Fn={setTimeout:function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];return setTimeout.apply(void 0,le([t,e],fe(n)))},clearTimeout:function(t){var e=Fn.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function Ur(t){Fn.setTimeout(function(){throw t})}function tn(){}function Pt(t){t()}var $n=function(t){zt(e,t);function e(n){var a=t.call(this)||this;return a.isStopped=!1,n?(a.destination=n,Dn(n)&&n.add(a)):a.destination=Gr,a}return e.create=function(n,a,r){return new me(n,a,r)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ft),Br=Function.prototype.bind;function Vt(t,e){return Br.call(t,e)}var Wr=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(a){Ot(a)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(a){Ot(a)}else Ot(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Ot(n)}},t}(),me=function(t){zt(e,t);function e(n,a,r){var i=t.call(this)||this,o;if(R(n)||!n)o={next:n??void 0,error:a??void 0,complete:r??void 0};else{var s;i&&zn.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},o={next:n.next&&Vt(n.next,s),error:n.error&&Vt(n.error,s),complete:n.complete&&Vt(n.complete,s)}):o=n}return i.destination=new Wr(o),i}return e}($n);function Ot(t){Ur(t)}function Hr(t){throw t}var Gr={closed:!0,next:tn,error:Hr,complete:tn},Xr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Vr(t){return t}function Jr(t){return t.length===0?Vr:t.length===1?t[0]:function(n){return t.reduce(function(a,r){return r(a)},n)}}var en=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,a){var r=this,i=qr(e)?e:new me(e,n,a);return Pt(function(){var o=r,s=o.operator,f=o.source;i.add(s?s.call(i,f):f?r._subscribe(i):r._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var a=this;return n=nn(n),new n(function(r,i){var o=new me({next:function(s){try{e(s)}catch(f){i(f),o.unsubscribe()}},error:i,complete:r});a.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Xr]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Jr(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=nn(e),new e(function(a,r){var i;n.subscribe(function(o){return i=o},function(o){return r(o)},function(){return a(i)})})},t.create=function(e){return new t(e)},t}();function nn(t){var e;return(e=t??zn.Promise)!==null&&e!==void 0?e:Promise}function Kr(t){return t&&R(t.next)&&R(t.error)&&R(t.complete)}function qr(t){return t&&t instanceof $n||Kr(t)&&Dn(t)}var Qr=Ln(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),It=function(t){zt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var a=new an(this,this);return a.operator=n,a},e.prototype._throwIfClosed=function(){if(this.closed)throw new Qr},e.prototype.next=function(n){var a=this;Pt(function(){var r,i;if(a._throwIfClosed(),!a.isStopped){a.currentObservers||(a.currentObservers=Array.from(a.observers));try{for(var o=ut(a.currentObservers),s=o.next();!s.done;s=o.next()){var f=s.value;f.next(n)}}catch(l){r={error:l}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(n){var a=this;Pt(function(){if(a._throwIfClosed(),!a.isStopped){a.hasError=a.isStopped=!0,a.thrownError=n;for(var r=a.observers;r.length;)r.shift().error(n)}})},e.prototype.complete=function(){var n=this;Pt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var a=n.observers;a.length;)a.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var a=this,r=this,i=r.hasError,o=r.isStopped,s=r.observers;return i||o?Rn:(this.currentObservers=null,s.push(n),new Ft(function(){a.currentObservers=null,ce(s,n)}))},e.prototype._checkFinalizedStatuses=function(n){var a=this,r=a.hasError,i=a.thrownError,o=a.isStopped;r?n.error(i):o&&n.complete()},e.prototype.asObservable=function(){var n=new en;return n.source=this,n},e.create=function(n,a){return new an(n,a)},e}(en),an=function(t){zt(e,t);function e(n,a){var r=t.call(this)||this;return r.destination=n,r.source=a,r}return e.prototype.next=function(n){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.next)===null||r===void 0||r.call(a,n)},e.prototype.error=function(n){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.error)===null||r===void 0||r.call(a,n)},e.prototype.complete=function(){var n,a;(a=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||a===void 0||a.call(n)},e.prototype._subscribe=function(n){var a,r;return(r=(a=this.source)===null||a===void 0?void 0:a.subscribe(n))!==null&&r!==void 0?r:Rn},e}(It);class Zr{constructor(){vt(this,"onDocumentInserted$",new It);vt(this,"onDocumentUpdated$",new It);vt(this,"onDocumentDeleted$",new It)}get(e){return JSON.parse(localStorage.getItem(e))}getAll(e){const n=localStorage.getItem(`${e}_ids`)||"[]";return JSON.parse(n).map(r=>JSON.parse(localStorage.getItem(r)))}getByFilter(e,n){const a=localStorage.getItem(`${e}_ids`)||"[]";return JSON.parse(a).map(i=>JSON.parse(localStorage.getItem(i))).filter(n)}insert(e,n){n.id=`${e}_${Yr()}`,n.createdAt=new Date().toISOString(),n.updatedAt=new Date().toISOString();const a=localStorage.getItem(`${e}_ids`)||"[]",r=JSON.parse(a);r.push(n.id),localStorage.setItem(`${e}_ids`,JSON.stringify(r)),localStorage.setItem(n.id,JSON.stringify(n)),this.onDocumentInserted$.next({table:e,document:n})}update(e){e.updatedAt=new Date().toISOString(),localStorage.setItem(e.id,JSON.stringify(e)),this.onDocumentUpdated$.next(e)}updateFields(e,n,a=!0){console.log("updateFields",e,n);const r=JSON.parse(localStorage.getItem(e));Object.assign(r,n),r.updatedAt=new Date().toISOString(),localStorage.setItem(e,JSON.stringify(r)),a&&this.onDocumentUpdated$.next(r)}delete(e,n){const a=localStorage.getItem(`${e}_ids`)||"[]",r=JSON.parse(a),i=r.indexOf(n);r.splice(i,1),localStorage.setItem(`${e}_ids`,JSON.stringify(r)),localStorage.removeItem(n),this.onDocumentDeleted$.next(n)}deleteByFilter(e,n){this.getByFilter(e,n).forEach(r=>this.delete(e,r.id))}}const si=new Zr;export{ni as F,en as O,$n as S,zt as _,ii as a,ri as b,ue as c,si as d,ut as e,ai as f,oi as g,It as h,R as i,tn as n,Xr as o,Ur as r};
