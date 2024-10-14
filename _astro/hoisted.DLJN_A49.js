if(document.documentElement.classList.contains("mode-auto")){const e=()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},t=()=>{const n=document.getElementById("theme-selector");n&&n.addEventListener("click",()=>{localStorage.theme==="dark"?(localStorage.theme="light",document.documentElement.classList.remove("dark")):(localStorage.theme="dark",document.documentElement.classList.add("dark"))})};document.addEventListener("DOMContentLoaded",()=>{e(),t()}),document.addEventListener("astro:page-loaded",()=>{e(),t()}),document.addEventListener("astro:after-swap",()=>{e(),t()})}else document.documentElement.classList.contains("mode-dark")?document.documentElement.classList.add("dark"):document.documentElement.classList.contains("mode-light")&&document.documentElement.classList.remove("dark");const P=()=>{const e=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("scroll-animated")})});document.querySelectorAll(".scroll-animation .col").forEach(n=>{e.observe(n)})};document.addEventListener("DOMContentLoaded",()=>{P()});document.addEventListener("astro:page-loaded",()=>{P()});document.addEventListener("astro:after-swap",()=>{P()});const b="data-astro-transition-persist";function Q(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function Z(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function ee(e){for(const t of Array.from(document.head.children)){const n=oe(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function te(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&re(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ne=()=>{const e=document.activeElement;if(e?.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>k({activeElement:e,start:t,end:n})}return()=>k({activeElement:e})}else return()=>k({activeElement:null})},k=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},oe=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},re=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ie=e=>{Q(e),Z(e),ee(e);const t=ne();te(e.body,document.body),t()},se="astro:before-preparation",ae="astro:after-preparation",ce="astro:before-swap",le="astro:after-swap",ue=e=>document.dispatchEvent(new Event(e));class q extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,c,d,l){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=c,this.newDocument=d,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class de extends q{formData;loader;constructor(t,n,o,r,s,u,a,c,d,l){super(se,{cancelable:!0},t,n,o,r,s,u,a,c),this.formData=d,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class fe extends q{direction;viewTransition;swap;constructor(t,n){super(ce,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ie(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function me(e,t,n,o,r,s,u,a,c){const d=new de(e,t,n,o,r,s,window.document,u,a,c);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(ue(ae),d.navigationType!=="traverse"&&I({scrollX,scrollY}))),d}function he(e,t){const n=new fe(e,t);return document.dispatchEvent(n),n.swap(),n}const pe=history.pushState.bind(history),T=history.replaceState.bind(history),I=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},x=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,w,A;const B=e=>document.dispatchEvent(new Event(e)),V=()=>B("astro:page-load"),we=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},N="data-astro-transition-persist",H="data-astro-transition",R="data-astro-transition-fallback";let C,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(T({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");async function ge(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function W(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function be(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const j=(e,t,n,o,r)=>{const s=U(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;T({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else pe({...n.state,index:++v,scrollX:0,scrollY:0},"",e.href);if(document.title=u,A=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(T(c,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ve(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function s(c){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(R,c);const p=document.getAnimations().filter(h=>!l.includes(h)&&!d(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=he(e,n.viewTransition);j(a.to,a.from,t,u,o),B(le),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ye(){return f?.controller.abort(),f={controller:new AbortController}}async function K(e,t,n,o,r){const s=ye();if(!O()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&I({scrollX,scrollY}),U(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){j(n,t,o,document.title,r),s===f&&(f=void 0);return}const a=await me(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function c(i){const p=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const g=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ge(p,h);if(m===null){i.preventDefault();return}if(m.redirected){const g=new URL(m.redirected);if(g.origin!==i.to.origin){i.preventDefault();return}i.to=g}if(C??=new DOMParser,i.newDocument=C.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=ve(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function d(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const l=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(H,a.direction),x)l.viewTransition=document.startViewTransition(async()=>await F(a,o,l,r));else{const i=(async()=>{await Promise.resolve(),await F(a,o,l,r,W())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(p=>l.viewTransitionFinished=p),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await be(),V(),we()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===w&&(w=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(H),document.documentElement.removeAttribute(R)});try{await l.viewTransition.updateCallbackDone}catch(i){const p=i;console.log("[astro]",p.name,p.message,p.stack)}}async function X(e,t){await K("forward",A,new URL(e,location.href),t??{})}function Te(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>v?"forward":"back";v=n,K(o,A,new URL(location.href),{},t)}const Y=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&I({scrollX,scrollY})};{if(x||W()!=="none")if(A=new URL(location.href),addEventListener("popstate",Te),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",Y);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,Y();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,E=new WeakSet;let D,G,_=!1;function Ee(e){_||(_=!0,D??=e?.prefetchAll??!1,G??=e?.defaultStrategy??"hover",Ae(),Se(),Le(),Re())}function Ae(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{y(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Se(){let e;document.body.addEventListener("focusin",o=>{y(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),M(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||y(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Le(){let e;M(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||y(t,"viewport")&&(E.add(t),e??=ke(),e.observe(t))})}function ke(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function Re(){M(()=>{for(const e of document.getElementsByTagName("a"))y(e,"load")&&S(e.href)})}function S(e,t){const n=t?.ignoreSlowConnection??!1;if(De(e,n))if(z.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function De(e,t){if(!navigator.onLine||!t&&J())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function y(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&J()?!0:n==null&&D||n===""?t===G:n===t}function J(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function M(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Pe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(x||Pe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),X(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(c==="get"){const l=new URLSearchParams(r),i=new URL(a);i.search=l.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),X(a,d)}),Ee({prefetchAll:!0}));
