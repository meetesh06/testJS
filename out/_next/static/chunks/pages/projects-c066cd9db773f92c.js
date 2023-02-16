(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{78672:function(e,i,t){"use strict";t.d(i,{ZP:function(){return S}});var o=t(63366),n=t(87462),r=t(94780),a=t(73935),s=t(90948),d=t(71657),l=t(95408),c=t(98700),u=t(59766),m=t(30067),h=t(86010),f=t(67294),g=t(34867);function v(e){return(0,g.Z)("MuiMasonry",e)}(0,t(1588).Z)("MuiMasonry",["root"]);var p=t(85893);const x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],b=e=>Number(e.replace("px","")),y={flexBasis:"100%",width:0,margin:0,padding:0},k=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,i)=>[i.root]})((({ownerState:e,theme:i})=>{let t={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(e.isSSR){const r={},a=b(i.spacing(e.defaultSpacing));for(let i=1;i<=e.defaultColumns;i+=1)r[`&:nth-of-type(${e.defaultColumns}n+${i%e.defaultColumns})`]={order:i};return o.height=e.defaultHeight,o.margin=-a/2,o["& > *"]=(0,n.Z)({},t["& > *"],r,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),(0,n.Z)({},t,o)}const r=(0,l.P$)({values:e.spacing,breakpoints:i.breakpoints.values}),a=(0,c.hB)(i);t=(0,u.Z)(t,(0,l.k9)({theme:i},r,(i=>{let t;if("string"===typeof i&&!Number.isNaN(Number(i))||"number"===typeof i){const e=Number(i);t=(0,c.NA)(a,e)}else t=i;return(0,n.Z)({margin:`calc(0px - (${t} / 2))`,"& > *":{margin:`calc(${t} / 2)`}},e.maxColumnHeight&&{height:"number"===typeof t?Math.ceil(e.maxColumnHeight+b(t)):`calc(${e.maxColumnHeight}px + ${t})`})})));const s=(0,l.P$)({values:e.columns,breakpoints:i.breakpoints.values});return t=(0,u.Z)(t,(0,l.k9)({theme:i},s,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"string"===typeof r&&!Number.isNaN(Number(r))||"number"===typeof r?(0,c.NA)(a,Number(r)):"0px"})`}})))),"object"===typeof r&&(t=(0,u.Z)(t,(0,l.k9)({theme:i},r,((e,i)=>{if(i){const t=Number(e),o=Object.keys(s).pop(),n=(0,c.NA)(a,t);return{"& > *":{width:`calc(${`${(100/("object"===typeof s?s[i]||s[o]:s)).toFixed(2)}%`} - ${n})`}}}return null})))),t}));var S=f.forwardRef((function(e,i){const t=(0,d.Z)({props:e,name:"MuiMasonry"}),{children:s,className:l,component:c="div",columns:u=4,spacing:g=1,defaultColumns:S,defaultHeight:w,defaultSpacing:N}=t,C=(0,o.Z)(t,x),I=f.useRef(),[M,E]=f.useState(),R=!M&&w&&void 0!==S&&void 0!==N,[Z,L]=f.useState(R?S-1:0),j=(0,n.Z)({},t,{spacing:g,columns:u,maxColumnHeight:M,defaultColumns:S,defaultHeight:w,defaultSpacing:N,isSSR:R}),T=(e=>{const{classes:i}=e;return(0,r.Z)({root:["root"]},v,i)})(j),$=f.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!I.current||!e||0===e.length)return;const i=I.current,t=I.current.firstChild,o=i.clientWidth,n=t.clientWidth;if(0===o||0===n)return;const r=window.getComputedStyle(t),s=b(r.marginLeft),d=b(r.marginRight),l=Math.round(o/(n+s+d)),c=new Array(l).fill(0);let u=!1;i.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||u)return;const i=window.getComputedStyle(e),t=b(i.marginTop),o=b(i.marginBottom),n=b(i.height)?Math.ceil(b(i.height))+t+o:0;if(0!==n){for(let i=0;i<e.childNodes.length;i+=1){const t=e.childNodes[i];if("IMG"===t.tagName&&0===t.clientHeight){u=!0;break}}if(!u){const i=c.indexOf(Math.min(...c));c[i]+=n;const t=i+1;e.style.order=t}}else u=!0})),u||(0,a.flushSync)((()=>{E(Math.max(...c)),L(l>0?l-1:0)}))})));f.useEffect((()=>{const e=$.current;if(void 0!==e)return I.current&&I.current.childNodes.forEach((i=>{e.observe(i)})),()=>e?e.disconnect():{}}),[u,g,s]);const H=(0,m.Z)(i,I),P=new Array(Z).fill("").map(((e,i)=>(0,p.jsx)("span",{"data-class":"line-break",style:(0,n.Z)({},y,{order:i+1})},i)));return(0,p.jsxs)(k,(0,n.Z)({as:c,className:(0,h.Z)(T.root,l),ref:H,ownerState:j},C,{children:[s,P]}))}))},9182:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(81042)}])},54496:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var o=t(85893),n=t(9008),r=t.n(n),a=t(78672),s=t(10443),d=t(21121);function l(e){var i=e.title,t=e.description,n=e.gridInfo,l=e.content;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:i}),(0,o.jsx)("meta",{name:"description",content:t})]}),(0,o.jsx)(a.ZP,{component:d.E.div,initial:"hidden",animate:"show",exit:"out",variants:{hidden:{opacity:0,scale:.9},show:{opacity:1,scale:1,transition:{duration:.3}},out:{opacity:0,scale:.9,transition:{duration:.3}}},columns:n,spacing:0,children:l.map((function(e,i){return(0,o.jsx)(s.Z,{title:e.title,links:e.links,index:e.index,imageUri:e.imageUri,href:e.href,id:e.id,text:e.text,textList:e.textList,created:e.created},"home-".concat(i))}))})]})}},81042:function(e,i,t){"use strict";t.r(i),t.d(i,{config:function(){return r},default:function(){return d}});var o=t(85893),n=t(54496),r={disable:!1},a={xs:1,sm:1,md:3,lg:3},s=[{title:"This Blog",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:void 0,textList:[["3rd Feb 2023","Presented Synopsis Seminar"],["29th Nov 2022","Presented Open Seminar"],["29th Oct 2022","Submitted to OOPSLA 2023"]],created:void 0},{title:"Research Interests",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Compilers, JITs, Programming Languages, Security",textList:void 0,created:void 0},{title:"Looking For",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Internship opportunities as a Researcher",textList:void 0,created:void 0},{title:"Something About Me",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I absolutely love everything about computers and love to dive deeper into what makes them tick. I find myself comfortable in very high level abstractions like DSLs or React and also in low level things like code generation, assembly, C++.",textList:void 0,created:void 0},{title:"Skills",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I find myself comfortable in",textList:[["C, C++, Java","Experience in large real world projects"],["React/Native, JS, R","A lot of fun projects like this site. Worked on a JIT compiler for R called Rsh."],["Scripting","Routinely use scripting languages like python, bash, JS, etc."],["Databases","Am comfortable in mongo, SQL, etc."],["Teaching Assistant","CS502 Compiler Design, C302 Paradigms of Programming"]],created:void 0},{title:"Quote",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Logic processed infinitely is emotion.",textList:void 0,created:void 0},{title:"Interests",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I love to go out on long walks and hikes. You will find me listening to music or reading books/articles in my free time. I randomly start new personal projects like making a light controllers using arduino, setting up solar panels around the terrace and so on. If something piques my interest I will give it a shot.",textList:void 0,created:void 0},{title:"Education",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:void 0,textList:[["2020-2023: M.S (by Research) CSE","IIT Mandi School of Computing and Electrical Engineering"],["2020: GATE CSE","Cleared GATE examination."],["2016-2020: B.Tech CSE","MRIIRS, NCR-Faridabad"],["2014-2016: High School","Sri Gayatri Junior College, Hyderabad"],["2004-2014: Primary School","Bharatiya Vidya Bhavans Public School, Hyderabad"]],created:void 0},{title:"Highlights",links:[["https://www.cse.iitb.ac.in/~manas/","Dr. Manas Thakur"],["https://compl.iitmandi.ac.in/","CompL"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Working with Dr. Manas Thakur and the CompL group has been the most rewarding and fulfilling part of my life :) I am proud of.",textList:void 0,created:void 0}];function d(){return(0,o.jsx)(n.Z,{title:"Meetesh's Homepage \ud83c\udff4\u200d\u2620\ufe0f \ud83c\udff4\u200d\u2620\ufe0f \ud83c\udff4\u200d\u2620\ufe0f",description:"Hey there! I'm a research scholar @IIT Mandi working in the area of compilers.",gridInfo:a,content:s})}}},function(e){e.O(0,[774,888,179],(function(){return i=9182,e(e.s=i);var i}));var i=e.O();_N_E=i}]);