import{j as l}from"./jsx-runtime.CRkqtJS5.js";import{r as o}from"./index.B52nOzfP.js";import{b as i}from"./index.DtyLJM_g.js";import"./iconBase.BimQ2q1R.js";function f(){const t=o.useRef(null),[r,e]=o.useState(0);o.useEffect(()=>{if(!t.current)return;function n(){window.scrollY>=200?e(100):e(0)}return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t,e]);const s=o.useCallback(()=>{!t.current||r===0||window.scrollTo({behavior:"smooth",top:0})},[t,r]);return l.jsx("button",{className:`
        right-0 
        bottom-0 
        -translate-x-10 
        -translate-y-10 
        fixed 
        py-2 px-2 
        rounded-lg 
        bg-cyan-400/80 hover:bg-cyan-500/80 
        transition-opacity 
        text-lg`,style:{opacity:r,cursor:r===0?"default":"pointer"},ref:t,onClick:()=>s(),"aria-label":"Volver al inicio",children:l.jsx(i,{})})}export{f as default};
