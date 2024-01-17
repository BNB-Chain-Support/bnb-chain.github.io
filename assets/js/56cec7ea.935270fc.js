"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||s;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},a="TimeLock Management",i={unversionedId:"bcfusion/users/timelocks",id:"bcfusion/users/timelocks",title:"TimeLock Management",description:"A timelock is a feature that allows users to lock their assets for a certain period of time, which is introduced",source:"@site/docs/bcfusion/users/timelocks.md",sourceDirName:"bcfusion/users",slug:"/bcfusion/users/timelocks",permalink:"/docs/bcfusion/users/timelocks",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/users/timelocks.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Atomic Swap Management",permalink:"/docs/bcfusion/users/swaps"},next:{title:"delegations",permalink:"/docs/bcfusion/users/delegations"}},c={},l=[{value:"Query TimeLocks",id:"query-timelocks",level:2},{value:"Handle TimeLocks",id:"handle-timelocks",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timelock-management"},"TimeLock Management"),(0,o.kt)("p",null,"A timelock is a feature that allows users to lock their assets for a certain period of time, which is introduced\nin (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP9.md"},"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP9.md"),").\nFor BC fusion, in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the second sunset\nhardfork"),", all timelocks will be refunded to users' accounts.\nUsers should proactively actionsj to transfer these assets to BSC after receiving the refunds."),(0,o.kt)("h2",{id:"query-timelocks"},"Query TimeLocks"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/develop/api-reference/dex-api/paths#apiv1timelocksaddress"},"time lock api"),"\nis provided to query existing timelocks. Usually, user can provide a\nfrom address to query the related timelocks, for example:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dex.bnbchain.org/api/v1/timelocks/bnb1rmet5j5pwc3xvhd82rwdjkvewzgmreh6we72sf"},"https://dex.bnbchain.org/api/v1/timelocks/bnb1rmet5j5pwc3xvhd82rwdjkvewzgmreh6we72sf")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(62635).Z,width:"1674",height:"556"})),(0,o.kt)("p",null,"The response will contain a lot of useful information, such as id of the\ntimelock, the asset of the timelock, and the unlock time."),(0,o.kt)("h2",{id:"handle-timelocks"},"Handle TimeLocks"),(0,o.kt)("p",null,"Once the timelock is created, the owners cannot access their assets until the unlock time has passed.\nDuring ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the second sunset hardfork"),", all\nexisting timelocks will be automatically refunded to the creators'\naccounts on Beacon Chain. The refund will proceed in many Beacon Chain\nblocks, depending on how many timelocks still exist on the\nblockchain. After refund, users should be able to find the assets in\ntheir accounts. Then users can handle the assets as other BEP2/BEP8\ntokens. For how to cross transfer them to BNB Smart Chain, please\nrefer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/bcfusion/users/assets"},"this tutorial"),"."))}m.isMDXComponent=!0},62635:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-timelock1-be08c54c90c2d0a188e2244f61d02498.png"}}]);