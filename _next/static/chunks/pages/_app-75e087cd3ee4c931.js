(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9714)}])},627:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return o},ACTION_SERVER_ACTION:function(){return s},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let u="refresh",l="navigate",o="restore",f="server-patch",a="prefetch",c="hmr-refresh",s="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(7677),u=r(4848),l=n._(r(6540)),o=r(6847),f=r(7785),a=r(2772),c=r(1278),s=r(6185),i=r(7644),d=r(9258),p=r(6334),h=r(5157),b=r(296),_=r(627),y=r(1903),v=new Set;function j(e,t,r,n,u,l){if(l||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!l){let u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(u))return;v.add(u)}(async()=>l?e.prefetch(t,u):e.prefetch(t,r,n))().catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:g,prefetch:m=null,passHref:O,replace:E,shallow:P,scroll:C,locale:M,onClick:R,onMouseEnter:T,onTouchStart:N,legacyBehavior:A=!1,...k}=e;r=g,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let I=l.default.useContext(i.RouterContext),w=l.default.useContext(d.AppRouterContext),L=null!=I?I:w,S=!I,U=!1!==m,H=null===m?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:K,as:F}=l.default.useMemo(()=>{if(!I){let e=x(a);return{href:e,as:v?x(v):e}}let[e,t]=(0,o.resolveHref)(I,a,!0);return{href:e,as:v?(0,o.resolveHref)(I,v):t||e}},[I,a,v]),D=l.default.useRef(K),V=l.default.useRef(F);A&&(n=l.default.Children.only(r));let X=A?n&&"object"==typeof n&&n.ref:t,[Y,q,z]=(0,p.useIntersection)({rootMargin:"200px"}),B=l.default.useCallback(e=>{(V.current!==F||D.current!==K)&&(z(),V.current=F,D.current=K),Y(e)},[F,K,z,Y]),G=(0,y.useMergedRef)(B,X);l.default.useEffect(()=>{L&&q&&U&&j(L,K,F,{locale:M},{kind:H},S)},[F,K,q,M,U,null==I?void 0:I.locale,L,S,H]);let J={ref:G,onClick(e){A||"function"!=typeof R||R(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,u,o,a,c,s){let{nodeName:i}=e.currentTarget;if("A"===i.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,f.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:o,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};s?l.default.startTransition(d):d()}(e,L,K,F,E,P,C,M,S)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(U||!S)&&j(L,K,F,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:H},S)},onTouchStart:function(e){A||"function"!=typeof N||N(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(U||!S)&&j(L,K,F,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:H},S)}};if((0,c.isAbsoluteUrl)(F))J.href=F;else if(!A||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);J.href=t||(0,b.addBasePath)((0,s.addLocale)(F,e,null==I?void 0:I.defaultLocale))}return A?l.default.cloneElement(n,J):(0,u.jsx)("a",{...k,...J,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6540),u=r(4959),l="function"==typeof IntersectionObserver,o=new Map,f=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!l,[s,i]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},f.push(r),o.set(r,t),t}(r);return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),o.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&i(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,u.requestIdleCallback)(()=>i(!0));return()=>(0,u.cancelIdleCallback)(e)}},[c,r,t,s,d.current]),[p,s,(0,n.useCallback)(()=>{i(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let n=r(6540);function u(e,t){let r=(0,n.useRef)(()=>{}),u=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),u.current()):(r.current=l(e,n),u.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(4848);r(4472);var u=r(9864);function l(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(u.default,{children:(0,n.jsx)(t,{...r})})}},9864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4848),u=r(1106),l=r.n(u);let o=e=>{let{children:t}=e;return(0,n.jsxs)("div",{className:"bg-nosferatu flex flex-col min-h-screen",children:[(0,n.jsx)("header",{className:"bg-nosferatu-800 text-white p-4 text-purple",children:(0,n.jsxs)("nav",{className:"container mx-auto flex justify-between",children:[(0,n.jsx)(l(),{href:"/",className:"hover:underline",children:"About Me"}),(0,n.jsxs)("div",{className:"space-x-4",children:[(0,n.jsx)(l(),{href:"/experience",className:"hover:underline",children:"Experience"}),(0,n.jsx)(l(),{href:"/projects",className:"hover:underline",children:"Projects"})]})]})}),(0,n.jsx)("main",{className:"flex-grow container mx-auto p-6",children:t}),(0,n.jsx)("footer",{className:"bg-nosferatu-800 text-center p-4",children:(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Liam Toye"]})})]})}},4472:()=>{},1106:(e,t,r)=>{e.exports=r(6397)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);