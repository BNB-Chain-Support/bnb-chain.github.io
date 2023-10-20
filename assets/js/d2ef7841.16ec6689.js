"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Tutorials",hide_table_of_contents:!1},l="Tutorials",i={unversionedId:"beaconchain/bc-tutorials",id:"beaconchain/bc-tutorials",title:"Tutorials",description:"In this section, we have provided tutorials on usage of different components of BNB Beacon Chain.",source:"@site/docs/beaconchain/bc-tutorials.md",sourceDirName:"beaconchain",slug:"/beaconchain/bc-tutorials",permalink:"/docs/beaconchain/bc-tutorials",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/bc-tutorials.md",tags:[],version:"current",frontMatter:{sidebar_label:"Tutorials",hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Introduction",permalink:"/docs/learn/beaconIntro"},next:{title:"Architecture",permalink:"/docs/beaconchain/learn/architecture"}},c={},u=[{value:"Full Node",id:"full-node",level:3},{value:"Running Clients",id:"running-clients",level:3},{value:"Wallets",id:"wallets",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"In this section, we have provided tutorials on usage of different components of BNB Beacon Chain."),(0,o.kt)("h3",{id:"full-node"},"Full Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/join-mainnet"},"How to Run Full Node on BNB Beacon Chain Mainnet")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/join-testnet"},"How to Run Full Node on BNB Beacon Chain Testnet")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/extra-info"},"How to Get Extra Info from your Full Node")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/upgrade"},"How to Upgrade your Full Node on BNB Beacon Chain")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"develop/node/localnetwork"},"How to Run a Single Node on a Local Network"))),(0,o.kt)("h3",{id:"running-clients"},"Running Clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/api-reference/cli"},"How to Run BNB Beacon Chain Client")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"/docs/beaconchain/light-client"},"How to Run Light Client on BNB Beacon Chain"))),(0,o.kt)("h3",{id:"wallets"},"Wallets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"wallets"},"List of Supported Wallets")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"wallet/tutorial/how-to-create-a-wallet-on-trustwallet"},"How to Use Trust Wallet with BNB Beacon Chain")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"wallet/tutorial/ledger-nano-s-usage-guide"},"How to Use Ledger Nano S Hardware Wallet with BNB Beacon Chain")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"wallet/tutorial/trezor-model-t-user-guide"},"How to Use Trezor Hardware Wallet with BNB Beacon Chain")),(0,o.kt)("li",{parentName:"ul"},"Tutorial on ",(0,o.kt)("a",{parentName:"li",href:"wallet/tutorial/bep8"},"How to manage your BEP8 tokens in BNB Chain Testnet Web Wallet"))))}d.isMDXComponent=!0}}]);