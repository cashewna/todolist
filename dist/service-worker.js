if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const o=e=>s(e,r),d={module:{uri:r},exports:t,require:o};i[r]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"d5d72c13dfdc02431bc822393b9d3b8f"},{url:"main.css",revision:"c1872cf7a378a70c3c5e59e59d8c13c8"},{url:"main.js",revision:"611e2449951b43153314536e6c7a85e7"}],{})}));
