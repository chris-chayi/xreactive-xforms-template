(self.webpackChunkformValidation=self.webpackChunkformValidation||[]).push([[1571],{1571:function(e,t,o){"use strict";o.r(t),o.d(t,{startTapClick:function(){return i}});var n=o(1843);const i=e=>{let t,o,i,v,f=10*-u,p=0;const m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=e=>{f=(0,n.o)(e),g(e)},E=()=>{clearTimeout(v),v=void 0,o&&(S(!1),o=void 0)},w=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,k(s(e),e))},g=e=>{k(void 0,e)},k=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,n.p)(t);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(c)||T(o,i,s),S(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{T(e,i,s),v=void 0},o)}o=e},T=(e,t,o)=>{p=Date.now(),e.classList.add(c);const n=m&&r(e);n&&n.addRipple&&(b(),i=n.addRipple(t,o))},b=()=>{void 0!==i&&(i.then(e=>e()),i=void 0)},S=e=>{b();const t=o;if(!t)return;const n=l-Date.now()+p;if(e&&n>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),L.delete(t)},l);L.set(t,e)}else t.classList.remove(c)},C=document;C.addEventListener("ionScrollStart",e=>{t=e.target,E()}),C.addEventListener("ionScrollEnd",()=>{t=void 0}),C.addEventListener("ionGestureCaptured",E),C.addEventListener("touchstart",e=>{f=(0,n.o)(e),w(e)},!0),C.addEventListener("touchcancel",h,!0),C.addEventListener("touchend",h,!0),C.addEventListener("mousedown",e=>{const t=(0,n.o)(e)-u;f<t&&w(e)},!0),C.addEventListener("mouseup",e=>{const t=(0,n.o)(e)-u;f<t&&g(e)},!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);