import{j as s}from"./jsx-runtime.CRkqtJS5.js";import{r as j}from"./index.B52nOzfP.js";import{g as N,S as H,P as W,N as Y,a as z}from"./pagination.DTJuI9NF.js";function G(T){let{swiper:e,extendParams:b,on:l,emit:r,params:d}=T;e.autoplay={running:!1,paused:!1,timeLeft:0},b({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,n,y=d&&d.autoplay?d.autoplay.delay:3e3,x=d&&d.autoplay?d.autoplay.delay:3e3,i,g=new Date().getTime(),S,h,m,M,L,p,D;function O(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",O),!(D||t.detail&&t.detail.bySwiperTouchMove)&&f())}const P=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?S=!0:S&&(x=i,S=!1);const t=e.autoplay.paused?i:g+x-new Date().getTime();e.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/y),n=requestAnimationFrame(()=>{P()})},B=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(a=>a.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},E=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(n),P();let u=typeof t>"u"?e.params.autoplay.delay:t;y=e.params.autoplay.delay,x=e.params.autoplay.delay;const a=B();!Number.isNaN(a)&&a>0&&typeof t>"u"&&(u=a,y=a,x=a),i=u;const w=e.params.speed,C=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(w,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,w,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(w,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,w,!0,!0),r("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return u>0?(clearTimeout(o),o=setTimeout(()=>{C()},u)):requestAnimationFrame(()=>{C()}),u},I=()=>{g=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},v=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(n),r("autoplayStop")},c=(t,u)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),t||(p=!0);const a=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",O):f()};if(e.autoplay.paused=!0,u){L&&(i=e.params.autoplay.delay),L=!1,a();return}i=(i||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&i<0&&!e.params.loop)&&(i<0&&(i=0),a())},f=()=>{e.isEnd&&i<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),p?(p=!1,E(i)):E(),e.autoplay.paused=!1,r("autoplayResume"))},A=()=>{if(e.destroyed||!e.autoplay.running)return;const t=N();t.visibilityState==="hidden"&&(p=!0,c(!0)),t.visibilityState==="visible"&&f()},F=t=>{t.pointerType==="mouse"&&(p=!0,D=!0,!(e.animating||e.autoplay.paused)&&c(!0))},R=t=>{t.pointerType==="mouse"&&(D=!1,e.autoplay.paused&&f())},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",F),e.el.addEventListener("pointerleave",R))},V=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",F),e.el.removeEventListener("pointerleave",R))},_=()=>{N().addEventListener("visibilitychange",A)},$=()=>{N().removeEventListener("visibilitychange",A)};l("init",()=>{e.params.autoplay.enabled&&(q(),_(),I())}),l("destroy",()=>{V(),$(),e.autoplay.running&&v()}),l("_freeModeStaticRelease",()=>{(m||p)&&f()}),l("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?v():c(!0,!0)}),l("beforeTransitionStart",(t,u,a)=>{e.destroyed||!e.autoplay.running||(a||!e.params.autoplay.disableOnInteraction?c(!0,!0):v())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){v();return}h=!0,m=!1,p=!1,M=setTimeout(()=>{p=!0,m=!0,c(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(M),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,h=!1;return}m&&e.params.cssMode&&f(),m=!1,h=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(L=!0)}),Object.assign(e.autoplay,{start:I,stop:v,pause:c,resume:f})}function U({title:T,subtitle:e,tracks:b,from:l}){const[r,d]=j.useState(!1),o=j.useRef(null);return j.useEffect(()=>{if(!o.current)return;function n(){window.scrollY+window.innerHeight>o.current.offsetTop&&(d(!0),window.removeEventListener("scroll",()=>{}))}return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[o]),s.jsxs("div",{className:`flex flex-col gap-8 ${l==="left"?"transition-from-left":"transition-from-right"} ${r&&"loaded"}`,ref:o,children:[s.jsx("h2",{className:"text-3xl font-semibold transition-colors hover:text-cyan-200 text-center",children:T}),s.jsx(H,{loop:!0,autoplay:!0,className:"w-full lg:w-[50rem] bg-cyan-400/80 rounded-md m-auto",slidesPerView:1,modules:[W,Y,G],grabCursor:!0,children:b.map((n,y)=>s.jsx(z,{children:s.jsxs("div",{className:"flex flex-col gap-4 items-center py-8 lg:py-16 px-6 md:px-16 ",children:[s.jsxs("div",{className:"flex justify-between w-full text-2xl md:text-3xl",style:{fontFamily:"Raleway"},children:[s.jsxs("div",{children:[s.jsx("h3",{children:n.title}),e&&s.jsx("h4",{className:"text-sm text-neutral-200/80 mt-2",children:e})]}),s.jsxs("h3",{children:[n.mts," Mts"]})]}),s.jsx("img",{src:n.image,alt:n.title})]})},y))})]})}export{U as default};
