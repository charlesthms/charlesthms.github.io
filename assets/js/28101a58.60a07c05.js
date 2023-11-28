"use strict";(self.webpackChunkdoc_2=self.webpackChunkdoc_2||[]).push([[729],{5487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(5893),r=t(1151);const a={sidebar_label:"HK",title:"House Keeping"},c=void 0,i={id:"can/hk",title:"House Keeping",description:"La carte Housekeeping est une carte de surveillance dont le but est de collecter les donn\xe9es (temp\xe9ratures, tensions) relev\xe9es par les capteurs et multiplexeurs du nano satellite.",source:"@site/docs/can/hk.md",sourceDirName:"can",slug:"/can/hk",permalink:"/can/hk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HK",title:"House Keeping"},sidebar:"default",previous:{title:"EPS",permalink:"/can/eps"},next:{title:"MTQ",permalink:"/can/mtq"}},o={},l=[{value:"Types",id:"types",level:2},{value:"Fonctions",id:"fonctions",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"La carte Housekeeping est une carte de surveillance dont le but est de collecter les donn\xe9es (temp\xe9ratures, tensions) relev\xe9es par les capteurs et multiplexeurs du nano satellite."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Ce module semble \xeatre fontionnel"})}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct packet_4 {\n  uint16_t arg1;\n  uint16_t arg2;\n  uint16_t arg3;\n  uint16_t arg4;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Structure permettant de repr\xe9senter le champs de donn\xe9es sur ",(0,s.jsx)(n.strong,{children:"64 bits"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct packet_3 {\n  uint16_t arg1;\n  uint16_t arg2;\n  uint16_t arg3;\n  uint8_t pad[2];\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Structure permettant de repr\xe9senter le champs de donn\xe9es sur ",(0,s.jsx)(n.strong,{children:"48 bits"})," en ajoutant un padding"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct trame {\n  uint16_t can_id  // 11 bits\n  uint16_t can_dlc // 4 bits\n  uint64_t data    // 64 bits\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"fonctions",children:"Fonctions"}),"\n",(0,s.jsx)(n.p,{children:"S\xe9rialisation des champs de donn\xe9es pour pouvoir les envoyer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int serialize_packet_4(struct packet_4*, uint8_t *);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int serialize_packet_3(struct packet_3*, uint8_t *)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var s=t(7294);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);