import{_ as w}from"./WrapperPost.vue_vue_type_script_setup_true_lang-DpTFWvJU.js";import{h as f,j as r,o,a,p as D,k as j,t as B,g as h,v as A,u as k,c as l,w as y,O as T,f as u,F as _,q as g,P as x,s as I,y as O,b as S}from"./app-C3bcAMAN.js";const $="/assets/2021-01-12-DnAwi2Ja.mp4",K=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),Y=["href"],C=["src"],z={class:"prose prose-sm p4 m0 pb3"},P={op50:"","text-sm":"",pt2:""},q=f({__name:"WrapperDemo",props:{frontmatter:{type:Object,required:!0},video:{type:String},date:{type:String,required:!0}},setup(e){return(t,i)=>(o(),r("div",null,[a("a",{border:"~ base rounded-lg",block:"","of-hidden":"",class:"group",hover:"scale-101 shadow-xl z-10","transition-all":"","duration-500":"","bg-base":"",relative:"",href:e.frontmatter.link,target:"_blank"},[e.video?(o(),r("video",{key:0,src:e.video,"w-full":"",autoplay:"",loop:"",muted:"",playsinline:"",border:"b base"},null,8,C)):D("",!0),a("div",z,[j(t.$slots,"default"),a("div",P,B(h(A)(e.date,!1)),1)])],8,Y)]))}}),L={__name:"2021-01-12",setup(e){const t={link:null,meta:[]};return k({link:null,meta:[]}),(c,n)=>{const s=q;return o(),l(s,{frontmatter:t},{default:y(()=>n[0]||(n[0]=[a("div",{class:"prose m-auto slide-enter-content"},[a("p",null,"🚏 Demo will be listed here soon!")],-1)])),_:1})}}},N=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),V=Object.assign({"./2021-01-12.mp4":K}),W=Array.from(Object.entries(Object.assign({"./2021-01-12.md":N}))).map(([e,t])=>({date:e.slice(2,-3),comp:t.default,video:V[`./${e.slice(2,-3)}.mp4`].default})).sort((e,t)=>t.date.localeCompare(e.date)),E={grid:"~ cols-1 lg:cols-2 xl:cols-3 gap-4"},F=f({__name:"ListDemos",setup(e){const t=T(x),i=u(()=>t.xl.value?3:t.lg.value?2:1),c=u(()=>{const n=Array.from({length:i.value},()=>[]);return W.forEach((s,m)=>{n[m%i.value].push(s)}),n});return(n,s)=>(o(),r("div",E,[(o(!0),r(_,null,g(h(c),(m,p)=>(o(),r("div",{key:p,flex:"~ col gap-4"},[(o(!0),r(_,null,g(m,({comp:b,date:d,video:v})=>(o(),l(O(b),{key:d,date:d,video:v,class:"slide-enter",style:I({"--enter-stage":p+1})},null,8,["date","video","style"]))),128))]))),128))]))}}),J={__name:"demos",setup(e){const t={title:"Demos - Bhautik Bavadiya (AKA Yesbhautik)",display:"Demos",subtitle:"Demonstrations for projects I am working on from Tweets",description:"Demonstrations for projects I am working on from Tweets",art:"dots",image:"https://yesbhautik.co.in/og/demos.png",meta:[{property:"og:title",content:"Demos - Bhautik Bavadiya (AKA Yesbhautik)"},{name:"twitter:title",content:"Demos - Bhautik Bavadiya (AKA Yesbhautik)"},{name:"description",content:"Demonstrations for projects I am working on from Tweets"},{property:"og:description",content:"Demonstrations for projects I am working on from Tweets"},{name:"twitter:description",content:"Demonstrations for projects I am working on from Tweets"},{property:"og:image",content:"https://yesbhautik.co.in/og/demos.png"},{name:"twitter:image",content:"https://yesbhautik.co.in/og/demos.png"},{name:"twitter:card",content:"summary_large_image"}]};return k({title:"Demos - Bhautik Bavadiya (AKA Yesbhautik)",meta:[{property:"og:title",content:"Demos - Bhautik Bavadiya (AKA Yesbhautik)"},{name:"twitter:title",content:"Demos - Bhautik Bavadiya (AKA Yesbhautik)"},{name:"description",content:"Demonstrations for projects I am working on from Tweets"},{property:"og:description",content:"Demonstrations for projects I am working on from Tweets"},{name:"twitter:description",content:"Demonstrations for projects I am working on from Tweets"},{property:"og:image",content:"https://yesbhautik.co.in/og/demos.png"},{name:"twitter:image",content:"https://yesbhautik.co.in/og/demos.png"},{name:"twitter:card",content:"summary_large_image"}]}),(c,n)=>{const s=F,m=w;return o(),l(m,{frontmatter:t},{default:y(()=>[a("div",null,[S(s)])]),_:1})}}};export{J as default};
