"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,u=p["".concat(l,".").concat(f)]||p[f]||h[f]||s;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_label:"Ecosystem Players",sidebar_position:2,hide_table_of_contents:!1},a="Ecosystem Players",i={unversionedId:"greenfield/tech-specs/ecosystem-players",id:"greenfield/tech-specs/ecosystem-players",title:"Ecosystem Players",description:"There are several player roles for the whole Greenfield ecosystem.",source:"@site/docs/greenfield/tech-specs/ecosystem-players.md",sourceDirName:"greenfield/tech-specs",slug:"/greenfield/tech-specs/ecosystem-players",permalink:"/docs/greenfield/tech-specs/ecosystem-players",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/tech-specs/ecosystem-players.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Ecosystem Players",sidebar_position:2,hide_table_of_contents:!1}},l={},c=[{value:"Greenfield Validators",id:"greenfield-validators",level:2},{value:"Storage Providers (SPs)",id:"storage-providers-sps",level:2},{value:"Greenfield dApps",id:"greenfield-dapps",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ecosystem-players"},"Ecosystem Players"),(0,o.kt)("p",null,"There are several player roles for the whole Greenfield ecosystem.\n",(0,o.kt)("img",{alt:"players-of-greenfield",src:r(8500).Z,width:"936",height:"820"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null,"All Players of Greenfield")),(0,o.kt)("h2",{id:"greenfield-validators"},"Greenfield Validators"),(0,o.kt)("p",null,"As a PoS blockchain, the Greenfield blockchain has its own validators.\nThese validators are elected based on the Proof-of-Stake logic."),(0,o.kt)("p",null,"These validators are responsible for the security of the Greenfield\nblockchain. They get involved in the governance and staking of the\nblockchain. They form a P2P network that is similar to other PoS\nblockchain networks."),(0,o.kt)("p",null,"Meanwhile, they accept and process transactions to allow users to\noperate their objects stored on Greenfield. They maintain the metadata\nof Greenfield as the blockchain state, which is the control panel for\nboth Storage Providers (SPs) and users. These two parties use and update\nthese states to operate the object storage."),(0,o.kt)("p",null,"Greenfield validators also have the obligation to run the relayer system\nfor cross-chain communication with BSC."),(0,o.kt)("p",null,'The network topology of Greenfield validators is similar to the existing\nsecure validator setup of PoS blockchains. "Sentry Nodes" are used to\ndefend against DDoS and provide a secure private network, as shown in\nthe below diagram.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"greenfield-blockchain-network",src:r(53102).Z,width:"1094",height:"841"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null,"Greenfield Blockchain Network")),(0,o.kt)("h2",{id:"storage-providers-sps"},"Storage Providers (SPs)"),(0,o.kt)("p",null,"Storage Providers are professional individuals and organizations who run\na series of services to provide data services based on the Greenfield\nblockchain."),(0,o.kt)("p",null,"Each SP should have a good connection with the Greenfield network by\nmaintaining its own local full node so that it can watch the state\nchange directly, index data properly, and send transaction requests\ntimely."),(0,o.kt)("p",null,"Different SPs are interconnected as well via both REST APIs and a P2P\nnetwork while providing services to users by responding to their\nrequests in REST APIs or P2P RPCs."),(0,o.kt)("p",null,"The typical network topology of connected SPs is as the below figure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"greenfield-storage-providers",src:r(53102).Z,width:"1094",height:"841"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null,"Greenfield Storage Provider Network")),(0,o.kt)("p",null,"SPs may provide plenty of convenient services for users and dApps to get\ndata about Greenfield."),(0,o.kt)("h2",{id:"greenfield-dapps"},"Greenfield dApps"),(0,o.kt)("p",null,"Greenfield dApps are applications that provide functions based on\nGreenfield storage and its related economic traits to solve some\nproblems of their users."),(0,o.kt)("p",null,"These dApps may interact with Greenfield or interact with both the\nGreenfield blockchain and the SPs, or most commonly, interact with\nGreenfield blockchain, SPs, and BSC."),(0,o.kt)("p",null,"The dApps can read data from all these data sources to facilitate\nusers' interaction with the smart contracts and navigate them through\nthe different kinds of use case scenarios."),(0,o.kt)("p",null,"In Greenfield, similar to other decentralized environments, dApps don't\nneed to ask for registration but communicate with users' wallets to get\nusers' instructions and other information."))}h.isMDXComponent=!0},8500:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/14.1-All-Players-of-Greenfield-f445bdce44dc812f4695ba61c723b9d7.jpg"},53102:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/14.2-Greenfield-Blockchain-Network-198368eb882c58c32d28f807bc5f1d5c.jpg"}}]);