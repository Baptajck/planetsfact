const Lc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(l){if(l.ep)return;l.ep=!0;const t=r(l);fetch(l.href,t)}};Lc();const v={},Oc=(c,e)=>c===e,S=Symbol("solid-proxy"),kc=Symbol("solid-track"),D={equals:Oc};let Pc=$c;const C={},L=1,j=2,ac={owned:null,cleanups:null,context:null,owner:null};var m=null;let T=null,a=null,P=null,d=null,b=null,W=0;function Fc(c,e){const r=a,i=m,l=c.length===0,t=l?ac:{owned:null,cleanups:null,context:null,owner:e||i},n=l?c:()=>c(()=>G(t));m=t,a=null;try{return z(n,!0)}finally{a=r,m=i}}function dc(c,e){e=e?Object.assign({},D,e):D;const r={value:c,observers:null,observerSlots:null,pending:C,comparator:e.equals||void 0},i=l=>(typeof l=="function"&&(l=l(r.pending!==C?r.pending:r.value)),X(r,l));return[mc.bind(r),i]}function $(c,e,r){const i=wc(c,e,!1,L);K(i)}function Mc(c,e,r){r=r?Object.assign({},D,r):D;const i=wc(c,e,!0,0);return i.pending=C,i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,K(i),mc.bind(i)}function xc(c){if(P)return c();let e;const r=P=[];try{e=c()}finally{P=null}return z(()=>{for(let i=0;i<r.length;i+=1){const l=r[i];if(l.pending!==C){const t=l.pending;l.pending=C,X(l,t)}}},!1),e}function hc(c){let e,r=a;return a=null,e=c(),a=r,e}function gc(){return a}function mc(){const c=T;if(this.sources&&(this.state||c)){const e=d;d=null,this.state===L||c?K(this):B(this),d=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function X(c,e,r){if(P)return c.pending===C&&P.push(c),c.pending=e,e;if(c.comparator&&c.comparator(c.value,e))return e;let i=!1;return c.value=e,c.observers&&c.observers.length&&z(()=>{for(let l=0;l<c.observers.length;l+=1){const t=c.observers[l];i&&T.disposed.has(t),(i&&!t.tState||!i&&!t.state)&&(t.pure?d.push(t):b.push(t),t.observers&&bc(t)),i||(t.state=L)}if(d.length>1e6)throw d=[],new Error},!1),e}function K(c){if(!c.fn)return;G(c);const e=m,r=a,i=W;a=m=c,Tc(c,c.value,i),a=r,m=e}function Tc(c,e,r){let i;try{i=c.fn(e)}catch(l){vc(l)}(!c.updatedAt||c.updatedAt<=r)&&(c.observers&&c.observers.length?X(c,i):c.value=i,c.updatedAt=r)}function wc(c,e,r,i=L,l){const t={fn:c,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:m,context:null,pure:r};return m===null||m!==ac&&(m.owned?m.owned.push(t):m.owned=[t]),t}function _c(c){const e=T;if(c.state===0||e)return;if(c.state===j||e)return B(c);if(c.suspense&&hc(c.suspense.inFallback))return c.suspense.effects.push(c);const r=[c];for(;(c=c.owner)&&(!c.updatedAt||c.updatedAt<W);)(c.state||e)&&r.push(c);for(let i=r.length-1;i>=0;i--)if(c=r[i],c.state===L||e)K(c);else if(c.state===j||e){const l=d;d=null,B(c,r[0]),d=l}}function z(c,e){if(d)return c();let r=!1;e||(d=[]),b?r=!0:b=[],W++;try{const i=c();return Dc(r),i}catch(i){d||(b=null),vc(i)}}function Dc(c){d&&($c(d),d=null),!c&&(b.length?xc(()=>{Pc(b),b=null}):b=null)}function $c(c){for(let e=0;e<c.length;e++)_c(c[e])}function B(c,e){const r=T;c.state=0;for(let i=0;i<c.sources.length;i+=1){const l=c.sources[i];l.sources&&(l.state===L||r?l!==e&&_c(l):(l.state===j||r)&&B(l,e))}}function bc(c){const e=T;for(let r=0;r<c.observers.length;r+=1){const i=c.observers[r];(!i.state||e)&&(i.state=j,i.pure?d.push(i):b.push(i),i.observers&&bc(i))}}function G(c){let e;if(c.sources)for(;c.sources.length;){const r=c.sources.pop(),i=c.sourceSlots.pop(),l=r.observers;if(l&&l.length){const t=l.pop(),n=r.observerSlots.pop();i<l.length&&(t.sourceSlots[n]=i,l[i]=t,r.observerSlots[i]=n)}}if(c.owned){for(e=0;e<c.owned.length;e++)G(c.owned[e]);c.owned=null}if(c.cleanups){for(e=0;e<c.cleanups.length;e++)c.cleanups[e]();c.cleanups=null}c.state=0,c.context=null}function vc(c){throw c}function F(c,e){return hc(()=>c(e||{}))}const jc=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Bc=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...jc]),Ic=new Set(["innerHTML","textContent","innerText","children"]),qc={className:"class",htmlFor:"for"},nc={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Hc=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Kc={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Rc(c,e){return Mc(c,void 0,e?void 0:{equals:e})}function Uc(c,e,r){let i=r.length,l=e.length,t=i,n=0,s=0,o=e[l-1].nextSibling,f=null;for(;n<l||s<t;){if(e[n]===r[s]){n++,s++;continue}for(;e[l-1]===r[t-1];)l--,t--;if(l===n){const y=t<i?s?r[s-1].nextSibling:r[t-s]:o;for(;s<t;)c.insertBefore(r[s++],y)}else if(t===s)for(;n<l;)(!f||!f.has(e[n]))&&e[n].remove(),n++;else if(e[n]===r[t-1]&&r[s]===e[l-1]){const y=e[--l].nextSibling;c.insertBefore(r[s++],e[n++].nextSibling),c.insertBefore(r[--t],y),e[l]=r[t]}else{if(!f){f=new Map;let u=s;for(;u<t;)f.set(r[u],u++)}const y=f.get(e[n]);if(y!=null)if(s<y&&y<t){let u=n,h=1,w;for(;++u<l&&u<t&&!((w=f.get(e[u]))==null||w!==y+h);)h++;if(h>y-s){const O=e[n];for(;s<y;)c.insertBefore(r[s++],O)}else c.replaceChild(r[s++],e[n++])}else n++;else e[n++].remove()}}}const sc="_$DX_DELEGATE";function Vc(c,e,r){let i;return Fc(l=>{i=l,e===document?c():A(e,c(),e.firstChild?null:void 0,r)}),()=>{i(),e.textContent=""}}function p(c,e,r){const i=document.createElement("template");i.innerHTML=c;let l=i.content.firstChild;return r&&(l=l.firstChild),l}function pc(c,e=window.document){const r=e[sc]||(e[sc]=new Set);for(let i=0,l=c.length;i<l;i++){const t=c[i];r.has(t)||(r.add(t),e.addEventListener(t,Yc))}}function R(c,e,r){r==null?c.removeAttribute(e):c.setAttribute(e,r)}function Wc(c,e,r,i){i==null?c.removeAttributeNS(e,r):c.setAttributeNS(e,r,i)}function g(c,e){e==null?c.removeAttribute("class"):c.className=e}function Xc(c,e,r,i){if(i)Array.isArray(r)?(c[`$$${e}`]=r[0],c[`$$${e}Data`]=r[1]):c[`$$${e}`]=r;else if(Array.isArray(r)){const l=r[0];c.addEventListener(e,r[0]=t=>l.call(c,r[1],t))}else c.addEventListener(e,r)}function zc(c,e,r={}){const i=Object.keys(e||{}),l=Object.keys(r);let t,n;for(t=0,n=l.length;t<n;t++){const s=l[t];!s||s==="undefined"||e[s]||(oc(c,s,!1),delete r[s])}for(t=0,n=i.length;t<n;t++){const s=i[t],o=!!e[s];!s||s==="undefined"||r[s]===o||!o||(oc(c,s,!0),r[s]=o)}return r}function Gc(c,e,r={}){const i=c.style,l=typeof r=="string";if(e==null&&l||typeof e=="string")return i.cssText=e;l&&(i.cssText=void 0,r={}),e||(e={});let t,n;for(n in r)e[n]==null&&i.removeProperty(n),delete r[n];for(n in e)t=e[n],t!==r[n]&&(i.setProperty(n,t),r[n]=t);return r}function J(c,e,r,i){typeof e=="function"?$(l=>uc(c,e(),l,r,i)):uc(c,e,void 0,r,i)}function A(c,e,r,i){if(r!==void 0&&!i&&(i=[]),typeof e!="function")return E(c,e,i,r);$(l=>E(c,e(),l,r),i)}function Jc(c,e,r,i,l={},t=!1){e||(e={});for(const n in l)if(!(n in e)){if(n==="children")continue;fc(c,n,null,l[n],r,t)}for(const n in e){if(n==="children"){i||E(c,e.children);continue}const s=e[n];l[n]=fc(c,n,s,l[n],r,t)}}function Qc(c){return c.toLowerCase().replace(/-([a-z])/g,(e,r)=>r.toUpperCase())}function oc(c,e,r){const i=e.trim().split(/\s+/);for(let l=0,t=i.length;l<t;l++)c.classList.toggle(i[l],r)}function fc(c,e,r,i,l,t){let n,s,o;if(e==="style")return Gc(c,r,i);if(e==="classList")return zc(c,r,i);if(r===i)return i;if(e==="ref")t||r(c);else if(e.slice(0,3)==="on:"){const f=e.slice(3);i&&c.removeEventListener(f,i),r&&c.addEventListener(f,r)}else if(e.slice(0,10)==="oncapture:"){const f=e.slice(10);i&&c.removeEventListener(f,i,!0),r&&c.addEventListener(f,r,!0)}else if(e.slice(0,2)==="on"){const f=e.slice(2).toLowerCase(),y=Hc.has(f);if(!y&&i){const u=Array.isArray(i)?i[0]:i;c.removeEventListener(f,u)}(y||r)&&(Xc(c,f,r,y),y&&pc([f]))}else if((o=Ic.has(e))||!l&&(nc[e]||(s=Bc.has(e)))||(n=c.nodeName.includes("-")))e==="class"||e==="className"?g(c,r):n&&!s&&!o?c[Qc(e)]=r:c[nc[e]||e]=r;else{const f=l&&e.indexOf(":")>-1&&Kc[e.split(":")[0]];f?Wc(c,f,e,r):R(c,qc[e]||e,r)}return r}function Yc(c){const e=`$$${c.type}`;let r=c.composedPath&&c.composedPath()[0]||c.target;for(c.target!==r&&Object.defineProperty(c,"target",{configurable:!0,value:r}),Object.defineProperty(c,"currentTarget",{configurable:!0,get(){return r||document}}),v.registry&&!v.done&&(v.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));r!==null;){const i=r[e];if(i&&!r.disabled){const l=r[`${e}Data`];if(l!==void 0?i.call(r,l,c):i.call(r,c),c.cancelBubble)return}r=r.host&&r.host!==r&&r.host instanceof Node?r.host:r.parentNode}}function uc(c,e,r={},i,l){return e||(e={}),!l&&"children"in e&&$(()=>r.children=E(c,e.children,r.children)),e.ref&&e.ref(c),$(()=>Jc(c,e,i,!0,r,!0)),r}function E(c,e,r,i,l){for(v.context&&!r&&(r=[...c.childNodes]);typeof r=="function";)r=r();if(e===r)return r;const t=typeof e,n=i!==void 0;if(c=n&&r[0]&&r[0].parentNode||c,t==="string"||t==="number"){if(v.context)return r;if(t==="number"&&(e=e.toString()),n){let s=r[0];s&&s.nodeType===3?s.data=e:s=document.createTextNode(e),r=N(c,r,i,s)}else r!==""&&typeof r=="string"?r=c.firstChild.data=e:r=c.textContent=e}else if(e==null||t==="boolean"){if(v.context)return r;r=N(c,r,i)}else{if(t==="function")return $(()=>{let s=e();for(;typeof s=="function";)s=s();r=E(c,s,r,i)}),()=>r;if(Array.isArray(e)){const s=[],o=r&&Array.isArray(r);if(U(s,e,r,l))return $(()=>r=E(c,s,r,i,!0)),()=>r;if(v.context){for(let f=0;f<s.length;f++)if(s[f].parentNode)return r=s}if(s.length===0){if(r=N(c,r,i),n)return r}else o?r.length===0?yc(c,s,i):Uc(c,r,s):(r&&N(c),yc(c,s));r=s}else if(e instanceof Node){if(v.context&&e.parentNode)return r=n?[e]:e;if(Array.isArray(r)){if(n)return r=N(c,r,i,e);N(c,r,null,e)}else r==null||r===""||!c.firstChild?c.appendChild(e):c.replaceChild(e,c.firstChild);r=e}}return r}function U(c,e,r,i){let l=!1;for(let t=0,n=e.length;t<n;t++){let s=e[t],o=r&&r[t];if(s instanceof Node)c.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))l=U(c,s,o)||l;else if(typeof s=="function")if(i){for(;typeof s=="function";)s=s();l=U(c,Array.isArray(s)?s:[s],o)||l}else c.push(s),l=!0;else{const f=String(s);o&&o.nodeType===3&&o.data===f?c.push(o):c.push(document.createTextNode(f))}}return l}function yc(c,e,r){for(let i=0,l=e.length;i<l;i++)c.insertBefore(e[i],r)}function N(c,e,r,i){if(r===void 0)return c.textContent="";const l=i||document.createTextNode("");if(e.length){let t=!1;for(let n=e.length-1;n>=0;n--){const s=e[n];if(l!==s){const o=s.parentNode===c;!t&&!n?o?c.replaceChild(l,s):c.insertBefore(l,r):o&&s.remove()}else t=!0}}else c.insertBefore(l,r);return[l]}const Ac=Symbol("store-raw"),I=Symbol("store-node"),Zc=Symbol("store-name");function Nc(c,e){let r=c[S];if(!r){Object.defineProperty(c,S,{value:r=new Proxy(c,re)});const i=Object.keys(c),l=Object.getOwnPropertyDescriptors(c);for(let t=0,n=i.length;t<n;t++){const s=i[t];if(l[s].get){const o=l[s].get.bind(r);Object.defineProperty(c,s,{get:o})}}}return r}function q(c){let e;return c!=null&&typeof c=="object"&&(c[S]||!(e=Object.getPrototypeOf(c))||e===Object.prototype||Array.isArray(c))}function M(c,e=new Set){let r,i,l,t;if(r=c!=null&&c[Ac])return r;if(!q(c)||e.has(c))return c;if(Array.isArray(c)){Object.isFrozen(c)?c=c.slice(0):e.add(c);for(let n=0,s=c.length;n<s;n++)l=c[n],(i=M(l,e))!==l&&(c[n]=i)}else{Object.isFrozen(c)?c=Object.assign({},c):e.add(c);const n=Object.keys(c),s=Object.getOwnPropertyDescriptors(c);for(let o=0,f=n.length;o<f;o++)t=n[o],!s[t].get&&(l=c[t],(i=M(l,e))!==l&&(c[t]=i))}return c}function Q(c){let e=c[I];return e||Object.defineProperty(c,I,{value:e={}}),e}function V(c,e,r){return c[e]||(c[e]=Cc(r,!0))}function ce(c,e){const r=Reflect.getOwnPropertyDescriptor(c,e);return!r||r.get||!r.configurable||e===S||e===I||e===Zc||(delete r.value,delete r.writable,r.get=()=>c[S][e]),r}function Sc(c){if(gc()){const e=Q(c);(e._||(e._=Cc()))()}}function ee(c){return Sc(c),Reflect.ownKeys(c)}function Cc(c,e){const[r,i]=dc(c,e?{internal:!0}:{equals:!1,internal:!0});return r.$=i,r}const re={get(c,e,r){if(e===Ac)return c;if(e===S)return r;if(e===kc)return Sc(c);const i=Q(c),l=i[e];let t=l?i[e]():c[e];if(e===I||e==="__proto__")return t;if(!l){const n=Object.getOwnPropertyDescriptor(c,e);gc()&&(typeof t!="function"||c.hasOwnProperty(e))&&!(n&&n.get)&&(t=V(i,e,t)())}return q(t)?Nc(t):t},set(){return!0},deleteProperty(){return!0},ownKeys:ee,getOwnPropertyDescriptor:ce};function H(c,e,r){if(c[e]===r)return;const i=c[e],l=c.length;r===void 0?delete c[e]:c[e]=r;let t=Q(c),n;(n=V(t,e,i))&&n.$(()=>r),Array.isArray(c)&&c.length!==l&&(n=V(t,"length",l))&&n.$(c.length),(n=t._)&&n.$()}function Ec(c,e){const r=Object.keys(e);for(let i=0;i<r.length;i+=1){const l=r[i];H(c,l,e[l])}}function ie(c,e){if(typeof e=="function"&&(e=e(c)),e=M(e),Array.isArray(e)){if(c===e)return;let r=0,i=e.length;for(;r<i;r++){const l=e[r];c[r]!==l&&H(c,r,l)}H(c,"length",i)}else Ec(c,e)}function k(c,e,r=[]){let i,l=c;if(e.length>1){i=e.shift();const n=typeof i,s=Array.isArray(c);if(Array.isArray(i)){for(let o=0;o<i.length;o++)k(c,[i[o]].concat(e),r);return}else if(s&&n==="function"){for(let o=0;o<c.length;o++)i(c[o],o)&&k(c,[o].concat(e),r);return}else if(s&&n==="object"){const{from:o=0,to:f=c.length-1,by:y=1}=i;for(let u=o;u<=f;u+=y)k(c,[u].concat(e),r);return}else if(e.length>1){k(c[i],e,[i].concat(r));return}l=c[i],r=[i].concat(r)}let t=e[0];typeof t=="function"&&(t=t(l,r),t===l)||i===void 0&&t==null||(t=M(t),i===void 0||q(l)&&q(t)&&!Array.isArray(t)?Ec(l,t):H(c,i,t))}function le(...[c,e]){const r=M(c||{}),i=Array.isArray(r),l=Nc(r);function t(...n){xc(()=>{i&&n.length===1?ie(r,n[0]):k(r,n)})}return[l,t]}const te="_containerMenu_1gs8y_1",ne="_iconMenu_1gs8y_9",se="_title_1gs8y_18",oe="_containerLink_1gs8y_25",fe="_planetList_1gs8y_35",ue="_fadein_1gs8y_1",ye="_planetItem_1gs8y_44",ae="_planetName_1gs8y_56",de="_roundColor_1gs8y_60",xe="_planetLink_1gs8y_67";var _={containerMenu:te,iconMenu:ne,title:se,containerLink:oe,planetList:fe,fadein:ue,planetItem:ye,planetName:ae,roundColor:de,planetLink:xe};const he=p('<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="m1 0 4 4-4 4"></path></svg>');var ge=(c={})=>(()=>{const e=he.cloneNode(!0);return J(e,c,!0,!0),e})();const me=p('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill="#FFF" fill-rule="evenodd"></path></svg>');var we=(c={})=>(()=>{const e=me.cloneNode(!0);return J(e,c,!0,!0),e})();const _e=p("<div><div><p>the planets</p><span></span></div></div>"),$e=p("<div><ul></ul></div>"),be=p("<li><a><div><div></div></div></a></li>");function ve(){const[c,e]=le([{name:"Mercury",color:"#DEF4FC",link:"/mercury"},{name:"Venus",color:"#F7CC7F",link:"/venus"},{name:"Earth",color:"#545BFE",link:"/earth"},{name:"Mars",color:"#FF6A45",link:"/mars"},{name:"Jupiter",color:"#ECAD7A",link:"/jupiter"},{name:"Saturn",color:"#FCC86B",link:"/saturn"},{name:"Uranus",color:"#65F0D5",link:"/uranus"},{name:"Neptune",color:"#497EFA",link:"/neptune"}]),[r,i]=dc(!1);return(()=>{const l=_e.cloneNode(!0),t=l.firstChild,n=t.firstChild,s=n.nextSibling;return s.$$click=()=>i(!r()),A(s,F(we,{})),A(l,(()=>{const o=Rc(()=>!!r(),!0);return()=>o()&&(()=>{const f=$e.cloneNode(!0),y=f.firstChild;return A(y,()=>c.map(u=>(()=>{const h=be.cloneNode(!0),w=h.firstChild,O=w.firstChild,Y=O.firstChild;return A(O,()=>u.name,null),A(w,F(ge,{}),null),$(x=>{const Z=u.name,cc=_.planetItem,ec=u.link,rc=_.planetLink,ic=_.planetName,lc=_.roundColor,tc=u.color;return Z!==x._v$7&&R(h,"key",x._v$7=Z),cc!==x._v$8&&g(h,x._v$8=cc),ec!==x._v$9&&R(w,"href",x._v$9=ec),rc!==x._v$10&&g(w,x._v$10=rc),ic!==x._v$11&&g(O,x._v$11=ic),lc!==x._v$12&&g(Y,x._v$12=lc),tc!==x._v$13&&Y.style.setProperty("background-color",x._v$13=tc),x},{_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),h})())),$(u=>{const h=_.containerLink,w=_.planetList;return h!==u._v$5&&g(f,u._v$5=h),w!==u._v$6&&g(y,u._v$6=w),u},{_v$5:void 0,_v$6:void 0}),f})()})(),null),$(o=>{const f=_.navbar,y=_.containerMenu,u=_.title,h=_.iconMenu;return f!==o._v$&&g(l,o._v$=f),y!==o._v$2&&g(t,o._v$2=y),u!==o._v$3&&g(n,o._v$3=u),h!==o._v$4&&g(s,o._v$4=h),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),l})()}pc(["click"]);const pe=p('<svg xmlns="http://www.w3.org/2000/svg" width="1532" height="1291"><g fill="#FFF" fill-rule="evenodd" opacity=".202"><circle cx="1155.5" cy="369.5" r="3.5"></circle><circle cx="1145.5" cy="372.5" r="1.5"></circle><circle cx="1167.5" cy="329.5" r="1.5"></circle><circle cx="1148.5" cy="298.5" r="1.5"></circle><circle cx="1225.5" cy="169.5" r="1.5"></circle><circle cx="1222" cy="174" r="2"></circle><circle cx="1199.5" cy="156.5" r="1.5"></circle><circle cx="1192.5" cy="210.5" r="1.5"></circle><circle cx="1344" cy="192" r="2"></circle><circle cx="1336" cy="332" r="2"></circle><circle cx="1362.5" cy="350.5" r="1.5"></circle><circle cx="1164.5" cy="57.5" r="2.5"></circle><circle cx="1237.5" cy="64.5" r="1.5"></circle><circle cx="1164.5" cy="35.5" r="1.5"></circle><circle cx="1016.5" cy="76.5" r="1.5"></circle><circle cx="1017" cy="32" r="2"></circle><circle cx="966.5" cy="8.5" r="3.5"></circle><circle cx="957.5" cy="54.5" r="2.5"></circle><circle cx="860.5" cy="58.5" r="3.5"></circle><circle cx="921" cy="34" r="2"></circle><circle cx="965" cy="229" r="2"></circle><circle cx="934" cy="269" r="2"></circle><circle cx="885.5" cy="287.5" r="1.5"></circle><circle cx="874.5" cy="302.5" r="1.5"></circle><circle cx="963" cy="410" r="4"></circle><circle cx="852" cy="372" r="2"></circle><circle cx="805" cy="331" r="2"></circle><circle cx="812.5" cy="256.5" r="1"></circle><circle cx="766.5" cy="281.5" r="1.5"></circle><circle cx="1510" cy="17" r="2"></circle><circle cx="1516.5" cy="20.5" r="2.5"></circle><circle cx="1457" cy="200" r="2"></circle><circle cx="1431.5" cy="75.5" r="1.5"></circle><circle cx="1420.5" cy="89.5" r="1.5"></circle><circle cx="1357.5" cy="43.5" r="1"></circle><circle cx="1310.5" cy="70.5" r="1.5"></circle><circle cx="805.5" cy="474.5" r="2.5"></circle><circle cx="1490" cy="409" r="2"></circle><circle cx="1508.5" cy="356.5" r="1.5"></circle><circle cx="1072.5" cy="334.5" r="1.5"></circle><circle cx="1109" cy="417" r="2"></circle><circle cx="1207" cy="446" r="2"></circle><circle cx="1266" cy="431" r="2"></circle><circle cx="1234.5" cy="523.5" r="2.5"></circle><circle cx="1274" cy="505" r="2"></circle><circle cx="1403.5" cy="481.5" r="1.5"></circle><circle cx="1417" cy="525" r="2"></circle><circle cx="1251" cy="562" r="2"></circle><circle cx="1326" cy="578" r="2"></circle><circle cx="1417.5" cy="661.5" r="2.5"></circle><circle cx="1396" cy="696" r="2"></circle><circle cx="1427.5" cy="677.5" r="1.5"></circle><circle cx="1258.5" cy="643.5" r="1.5"></circle><circle cx="1343.5" cy="758.5" r="2.5"></circle><circle cx="1498" cy="673" r="2"></circle><circle cx="1529.5" cy="633.5" r="2.5"></circle><circle cx="1440.5" cy="575.5" r="1"></circle><circle cx="1306.5" cy="918.5" r="1.5"></circle><circle cx="1499" cy="911" r="2"></circle><circle cx="1467.5" cy="923.5" r="1.5"></circle><circle cx="1497" cy="1029" r="2"></circle><circle cx="1432.5" cy="1044.5" r="1.5"></circle><circle cx="824" cy="34" r="2"></circle><circle cx="602" cy="140" r="2"></circle><circle cx="640.5" cy="314.5" r="1.5"></circle><circle cx="606" cy="365" r="2"></circle><circle cx="466" cy="8" r="2"></circle><circle cx="576" cy="8" r="2"></circle><circle cx="552.5" cy="17.5" r="3.5"></circle><circle cx="464" cy="61" r="2"></circle><circle cx="218" cy="78" r="2"></circle><circle cx="419.5" cy="17.5" r="1.5"></circle><circle cx="461.5" cy="288.5" r="3.5"></circle><circle cx="440.5" cy="279.5" r="1.5"></circle><circle cx="386" cy="332" r="2"></circle><circle cx="404" cy="342" r="2"></circle><circle cx="378" cy="270" r="2"></circle><circle cx="362" cy="365" r="2"></circle><circle cx="373.5" cy="433.5" r="3.5"></circle><circle cx="511.5" cy="464.5" r="1.5"></circle><circle cx="627.5" cy="474.5" r="1.5"></circle><circle cx="644" cy="492" r="2"></circle><circle cx="117.5" cy="199.5" r="1.5"></circle><circle cx="118" cy="207" r="2"></circle><circle cx="89.5" cy="9.5" r="2.5"></circle><circle cx="110.5" cy="23.5" r="2.5"></circle><circle cx="196.5" cy=".5" r="1"></circle><circle cx="274" cy="12" r="2"></circle><circle cx="283" cy="60" r="2"></circle><circle cx="63.5" cy="127.5" r="2.5"></circle><circle cx="24" cy="60" r="2"></circle><circle cx="65.5" cy="35.5" r="1"></circle><circle cx="28" cy="163" r="2"></circle><circle cx="22.5" cy="204.5" r="2.5"></circle><circle cx="99" cy="268" r="4"></circle><circle cx="50.5" cy="228.5" r="1"></circle><circle cx="37.5" cy="257.5" r="1.5"></circle><circle cx="85" cy="291" r="2"></circle><circle cx="11.5" cy="47.5" r="1"></circle><circle cx="138" cy="426" r="4"></circle><circle cx="262.5" cy="486.5" r="3.5"></circle><circle cx="269.5" cy="452.5" r="1.5"></circle><circle cx="134.5" cy="547.5" r="2.5"></circle><circle cx="3.5" cy="560.5" r="3.5"></circle><circle cx="429.5" cy="573.5" r="1.5"></circle><circle cx="486" cy="564" r="2"></circle><circle cx="511" cy="597" r="2"></circle><circle cx="352.5" cy="635.5" r="3.5"></circle><circle cx="345" cy="709" r="2"></circle><circle cx="256.5" cy="776.5" r="3.5"></circle><circle cx="235.5" cy="811.5" r="3.5"></circle><circle cx="229.5" cy="664.5" r="1.5"></circle><circle cx="233.5" cy="746.5" r="1.5"></circle><circle cx="42.5" cy="811.5" r="2.5"></circle><circle cx="77.5" cy="980.5" r="2.5"></circle><circle cx="255" cy="938" r="2"></circle><circle cx="32.5" cy="938.5" r="3.5"></circle><circle cx="23.5" cy="1086.5" r="1.5"></circle><circle cx="108.5" cy="1238.5" r="3.5"></circle><circle cx="159.5" cy="1159.5" r="2.5"></circle><circle cx="90.5" cy="1192.5" r="1"></circle><circle cx="300.5" cy="1081.5" r="3.5"></circle><circle cx="388.5" cy="1154.5" r="3.5"></circle><circle cx="343" cy="1124" r="2"></circle><circle cx="467.5" cy="1072.5" r="1.5"></circle><circle cx="532.5" cy="1146.5" r="2.5"></circle><circle cx="555.5" cy="1153.5" r="2.5"></circle><circle cx="546.5" cy="1137.5" r="1"></circle><circle cx="318" cy="1199" r="4"></circle><circle cx="301.5" cy="1186.5" r="1.5"></circle><circle cx="408" cy="1230" r="2"></circle><circle cx="491.5" cy="1210.5" r="1"></circle><circle cx="565.5" cy="1178.5" r="1.5"></circle><circle cx="656.5" cy="1235.5" r="3.5"></circle><circle cx="709" cy="1285" r="2"></circle><circle cx="324.5" cy="1289.5" r="1.5"></circle><circle cx="332.5" cy="1278.5" r="1.5"></circle><circle cx="819.5" cy="1028.5" r="2.5"></circle><circle cx="875" cy="1157" r="2"></circle><circle cx="963.5" cy="1152.5" r="2.5"></circle><circle cx="962" cy="1145" r="2"></circle><circle cx="1069.5" cy="1181.5" r="11.5"></circle><circle cx="1003.5" cy="1152.5" r="2.5"></circle><circle cx="940.5" cy="1193.5" r="2.5"></circle><circle cx="907" cy="1068" r="2"></circle><circle cx="945" cy="925" r="2"></circle><circle cx="1204" cy="1186" r="2"></circle><circle cx="691.5" cy="848.5" r="1.5"></circle><circle cx="831" cy="1013" r="2"></circle><circle cx="833.5" cy="1082.5" r="2.5"></circle><circle cx="833" cy="1190" r="2"></circle><circle cx="1155.5" cy="1022.5" r="3.5"></circle><circle cx="908" cy="595" r="4"></circle><circle cx="1012.5" cy="528.5" r="3.5"></circle><circle cx="992.5" cy="547.5" r="1.5"></circle><circle cx="577" cy="960" r="2"></circle><circle cx="599.5" cy="939.5" r="1.5"></circle><circle cx="446" cy="959" r="2"></circle><circle cx="868" cy="534" r="2"></circle><circle cx="683.5" cy="574.5" r="1.5"></circle><circle cx="694.5" cy="526.5" r="1.5"></circle><circle cx="462.5" cy="659.5" r="3.5"></circle><circle cx="458.5" cy="738.5" r="1.5"></circle><circle cx="587" cy="764" r="2"></circle><circle cx="602.5" cy="690.5" r="2.5"></circle><circle cx="529.5" cy="669.5" r="1.5"></circle><circle cx="900.5" cy="851.5" r="3.5"></circle><circle cx="926.5" cy="796.5" r="3.5"></circle><circle cx="816" cy="823" r="2"></circle><circle cx="1003" cy="672" r="2"></circle></g></svg>');var Ae=(c={})=>(()=>{const e=pe.cloneNode(!0);return J(e,c,!0,!0),e})();const Ne="_bgc_d2ow7_1";var Se={bgc:Ne};const Ce=p("<div></div>"),Ee=p("<div><h1>Home</h1></div>");function Le(){return[(()=>{const c=Ce.cloneNode(!0);return A(c,F(Ae,{})),$(()=>g(c,Se.bgc)),c})(),F(ve,{}),Ee.cloneNode(!0)]}Vc(()=>F(Le,{}),document.getElementById("root"));