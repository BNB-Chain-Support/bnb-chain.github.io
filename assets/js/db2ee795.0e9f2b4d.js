"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1950],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),k=n,N=d["".concat(i,".").concat(k)]||d[k]||h[k]||p;return a?r.createElement(N,l(l({ref:e},s),{},{components:a})):r.createElement(N,l({ref:e},s))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,l=new Array(p);l[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61340:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const p={sidebar_label:"Tools",sidebar_position:2,hide_table_of_contents:!1},l="BNB Chain Development Tools",o={unversionedId:"learn/ecosystem",id:"learn/ecosystem",title:"BNB Chain Development Tools",description:"In order to check the latest updates on the ecosystem of BNB Chain, visit our official GitHub Page.",source:"@site/docs/learn/ecosystem.md",sourceDirName:"learn",slug:"/learn/ecosystem",permalink:"/docs/learn/ecosystem",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/ecosystem.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Tools",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Governance of BSC",permalink:"/docs/learn/bsc-gov"},next:{title:"RPC",permalink:"/docs/rpc"}},i={},m=[{value:"About",id:"about",level:2},{value:"Layers of BSC Stack",id:"layers-of-bsc-stack",level:2},{value:"Explorer and Wallets",id:"explorer-and-wallets",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tools, APIs and Languages",id:"tools-apis-and-languages",level:3},{value:"Dapps infra",id:"dapps-infra",level:3}],s={toc:m},d="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bnb-chain-development-tools"},"BNB Chain Development Tools"),(0,n.kt)("p",null,"In order to check the latest updates on the ecosystem of BNB Chain, visit our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-ecosystem"},"official GitHub Page"),"."),(0,n.kt)("p",null,"The goal of this page is to provide the current status of the open-source BNB Smart Chain Tech Stack and highlight the potential interesting projects that are most demanded by the BSC community and ecosystem.  "),(0,n.kt)("h2",{id:"about"},"About"),(0,n.kt)("p",null,"BNB Smart Chain is a 100% EVM compatible blockchain, and is one of the prime choices for decentralized application (dApp) development within many possible verticals including DeFi, NFT, Gaming, and many others."),(0,n.kt)("p",null,"To get a better understanding of the current BSC landscope, we divide each of the layers into the various components which we feel are most important. We then highlight some of the existing projects as well as ",(0,n.kt)("strong",{parentName:"p"},"some potentially interesting")," projects that we would like to fund by Binance Accelerator Funds. If you see a component with 0 or 1 existing projects then it's likely that we would consider grant support in this area. By describing our areas of priority in detail we do not wish to preclude grant applications that address different areas that we may not have thought of. We would like to fund all projects that bring value to the ecosystem."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,n.kt)("em",{parentName:"p"},"This is a living document and we are relying on our community to contribute to this and help maintain it. Please feel free to make edits and additions via pull requests."))),(0,n.kt)("h2",{id:"layers-of-bsc-stack"},"Layers of BSC Stack"),(0,n.kt)("p",null,"In the below sections you can find a list of different layers of the BSC Stack."),(0,n.kt)("h3",{id:"explorer-and-wallets"},"Explorer and Wallets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Components")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Existing Projects")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Potentially Interesting Projects")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Desktop Wallets")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://smart-binance.portonvictor.org/"},"Wise Safe")," (a port of Gnosis Safe), ",(0,n.kt)("a",{parentName:"td",href:"https://www.tokenpocket.pro/en/download/pc"},"TokenPocket"),", ",(0,n.kt)("a",{parentName:"td",href:"https://infinitywallet.io/download/"},"infinity Wallet")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Browser Extensions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp"},"Binance Wallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://metamask.io/"},"MetaMask"),", ",(0,n.kt)("a",{parentName:"td",href:"https://mathwallet.xyz/en/"},"MathWallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.safepal.io/"},"SafePal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bitkeep.com/"},"BitKeep"),", ",(0,n.kt)("a",{parentName:"td",href:"https://coin98.com/wallet"},"Coin98"),", ",(0,n.kt)("a",{parentName:"td",href:"https://rabby.io/"},"Rabby Wallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://onto.app/"},"Onto"),", ",(0,n.kt)("a",{parentName:"td",href:"https://slope.finance/"},"Slope")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Mobile Wallets")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mathwallet.xyz/en/"},"MathWallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://trustwallet.com/"},"TrustWallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bitkeep.com/"},"BitKeep"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.tokenpocket.pro/"},"TokenPocket"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.safepal.io/"},"SafePal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.onto.app/en"},"ONTO Wallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://1inch.io/wallet/"},"1Inch Wallet"),", ",(0,n.kt)("a",{parentName:"td",href:"https://coin98.com/wallet"},"Coin98"),", ",(0,n.kt)("a",{parentName:"td",href:"https://onto.app/"},"Onto"),", ",(0,n.kt)("a",{parentName:"td",href:"https://slope.finance/"},"Slope")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Web (burner) Wallets")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://toruswallet.io/"},"Torus"),",",(0,n.kt)("a",{parentName:"td",href:"https://www.myetherwallet.com/"},"MyEtherWallet (MEW)"),", ",(0,n.kt)("a",{parentName:"td",href:"https://guarda.com/coins/binance-coin-wallet/"},"Guarda")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"CLI Wallet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/bsc"},"geth"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/dapphub/dapptools/tree/master/src/seth"},"Seth")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Wallet SDKs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/aragon/use-wallet/tree/master/examples"},"BSC Connector"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.venly.io/product-wallet"},"Venly"),", ",(0,n.kt)("a",{parentName:"td",href:"https://sequence.app/"},"Sequence.app"),", ",(0,n.kt)("a",{parentName:"td",href:"https://web3auth.io/"},"Web3Auth"),", ",(0,n.kt)("a",{parentName:"td",href:"https://particle.network/"},"Particle Network")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Multisignature Wallets")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gnosis/MultiSigWallet"},"MultiSigWallet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://gnosis-safe.io/"},"Gnosis"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.qredo.com/"},"Qredo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Hardware Wallets")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.ledger.com/ethereum-wallet"},"Ledger"),", ",(0,n.kt)("a",{parentName:"td",href:"https://trezor.io/"},"Trezor"),", ",(0,n.kt)("a",{parentName:"td",href:"https://safepal.io/"},"SafePal")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Block Explorers")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/"},"BSCScan"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bsctrace.com/"},"BSCtrace"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bnb.nftscan.com/"},"NFTscan"),", ",(0,n.kt)("a",{parentName:"td",href:"https://binance.mintscan.io/"},"Mintscan")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Validator Dashboards")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/validatorset/"},"BSCScan"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.binance.org/en/staking"},"BSC-Staking")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Governance Dashboards")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"UI for BSC proposal/vote")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BNBChain List Explorer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.bnbchainlist.org/"},"BNBChain List")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Components")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Existing Projects")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Potentially Interesting Projects")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"API/Node Access")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nodereal.io/"},"Nodereal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.ankr.com/"},"Ankr"),", ",(0,n.kt)("a",{parentName:"td",href:"https://chainstack.com/build-better-with-binance-smart-chain/"},"Chainstack"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nownodes.io/blog/binance-smart-chain-an-introduction"},"NowNodes"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.quicknode.com/"},"QuickNode"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.covalenthq.com/"},"Covalent"),", ",(0,n.kt)("a",{parentName:"td",href:"https://infstones.com/"},"Infstones"),", ",(0,n.kt)("a",{parentName:"td",href:"http://moralis.io/"},"Moralis")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"NFT APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bnb.nftscan.com/"},"NFTScan"),", ",(0,n.kt)("a",{parentName:"td",href:"https://blockvision.org/"},"BlockVision"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.venly.io/"},"Venly"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.gomu.co/"},"Gomu"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bounce.finance/"},"Bounce Finance"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nftrade.com/"},"NFTrade")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Archive Node Service")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://chainstack.com/build-better-with-binance-smart-chain/"},"Chainstack"),", ",(0,n.kt)("a",{parentName:"td",href:"https://infstones.com/"},"InfStones"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.quicknode.com/"},"QuickNode"),", ",(0,n.kt)("a",{parentName:"td",href:"https://docs.nodereal.io/nodereal/meganode/archive-node"},"Nodereal\u2019s Meganode")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Public RPC Endpoints")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.bnbchain.org/docs/rpc"},"RPC Endpoints")),(0,n.kt)("td",{parentName:"tr",align:null},"More public nodes are encouraged")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Community Polling Dashboard")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Gas Station Network")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://opengsn.org/"},"opengsn")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Faucet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://testnet.bnbchain.org/faucet-smart"},"BSC Test Faucet")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Browser")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.opera.com/crypto/"},"Opera")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Dapp Store")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://dappbay.bnbchain.org/"},"Dapp Bay"),", ",(0,n.kt)("a",{parentName:"td",href:"https://magicsquare.io/"},"Magic Square")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"tools-apis-and-languages"},"Tools, APIs and Languages"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Components")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Existing Projects")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Potentially Interesting Projects")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Smart Contract Languages")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://solidity.readthedocs.io/en/latest/"},"Solidity"),", ",(0,n.kt)("a",{parentName:"td",href:"https://vyper.readthedocs.io/en/latest/"},"Vyper")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Dev Frameworks")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://trufflesuite.com/"},"Truffle"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/embark-framework/embark"},"Embark"),", ",(0,n.kt)("a",{parentName:"td",href:"https://getwaffle.io/"},"Waffle"),", ",(0,n.kt)("a",{parentName:"td",href:"https://dapp.tools/dapp/"},"Dapp"),", ",(0,n.kt)("a",{parentName:"td",href:"https://openzeppelin.com/sdk/"},"OpenZeppelin SDK"),",",(0,n.kt)("a",{parentName:"td",href:"https://hardhat.org/"},"hardhat"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.starton.io/"},"Starton")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"IDEs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ObsidianLabs/BSC-Studio"},"BSC Studio"),",",(0,n.kt)("a",{parentName:"td",href:"https://remix.ethereum.org/"},"Remix"),",",(0,n.kt)("a",{parentName:"td",href:"https://jetbrains.com/idea/"},"Intellij Solidity Plugin"),", ",(0,n.kt)("a",{parentName:"td",href:"https://eth.chainide.com/project/welcome"},"ChainIDE")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Lint Tools")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/protofire/solhint"},"Solhint"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/duaraghav8/Ethlint"},"Ethlint"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/trailofbits/manticore"},"Manticore"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/crytic/slither"},"Slither"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/crytic/echidna"},"Echidna")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Testing Tools")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/0xProject/0x-monorepo/tree/development/packages/sol-coverage"},"Solidity code coverage"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/EricR/sol-function-profiler"},"Solidity function profiler"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethereum/eth-tester"},"eth-tester")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Test Blockchain Networks")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.bnbchain.org/smart-chain/developer/fullnode.html"},"bscnode"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/trufflesuite/ganache"},"Ganache")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Security Tools")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mythx.io/"},"MythX"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ConsenSys/mythril"},"Mythril"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/melonproject/oyente"},"Oyente"),", ",(0,n.kt)("a",{parentName:"td",href:"https://securify.chainsecurity.com/"},"Securify"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/raineorshine/solgraph"},"Solgraph"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/SRI-CSL/solidity/"},"solc-verify")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ABI (Application Binary Interface) Tools")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ConsenSys/abi-decoder"},"ABI decoder"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/0xProject/0x-monorepo/tree/development/packages/abi-gen"},"ABI-gen"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/hiddentao/ethereum-abi-ui"},"Ethereum ABI UI")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Monitoring")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Neufund/smart-contract-watch"},"Neufund - Smart Contract Watch"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/poanetwork/blockscout"},"BlockScout"),", ",(0,n.kt)("a",{parentName:"td",href:"https://terminal.co/"},"Terminal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/HydroProtocol/ethereum-watcher"},"Ethereum-watcher")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Frontend BSC APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethereum/web3.js/"},"Web3.js"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethjs"},"Eth.js"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethers-io/ethers.js/"},"Ethers.js"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/paritytech/js-libs/tree/master/packages/light.js"},"light.js")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Backend BSC APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethereum/web3.py"},"Web3.py"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/sc0Vu/web3.php"},"Web3.php"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/web3j/web3j"},"Java Web3"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nethereum.com/"},"Net Web3"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/EthWorks/ethereum.rb"},"Ruby Web3")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Goto ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-ecosystem/blob/master/BSC_Develop_Ecosystem.md"},"BSC Developer Ecosystem")," to navigate the full list."),(0,n.kt)("h3",{id:"dapps-infra"},"Dapps infra"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Components")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Existing Projects")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Potentially Interesting Projects")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Data Analytics & Visualization")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://thegraph.com/en/"},"The Graph"),",",(0,n.kt)("a",{parentName:"td",href:"https://dappradar.com/rankings/protocol/binance-smart-chain"},"DappRadar"),",",(0,n.kt)("a",{parentName:"td",href:"https://www.dapp.com/search_product?chain=BSC"},"dapp.com"),",",(0,n.kt)("a",{parentName:"td",href:"https://coinmarketcap.com/yield-farming/"},"CMC"),",",(0,n.kt)("a",{parentName:"td",href:"https://dapp.review/explore/bsc"},"dapp.review"),",",(0,n.kt)("a",{parentName:"td",href:"https://www.defistation.io/"},"DefiStation"),",",(0,n.kt)("a",{parentName:"td",href:"https://bitquery.io/"},"BitQuery"),",",(0,n.kt)("a",{parentName:"td",href:"https://www.parsiq.io/"},"PARSIQ"),", ",(0,n.kt)("a",{parentName:"td",href:"https://cryptoslam.io/"},"CryptoSlam"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nakji.network/"},"Nakji"),", ",(0,n.kt)("a",{parentName:"td",href:"http://dune.com/"},"Dune"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.yieldwatch.net/"},"YeildWatch"),", ",(0,n.kt)("a",{parentName:"td",href:"http://debank.com/"},"DeBank"),", ",(0,n.kt)("a",{parentName:"td",href:"http://bloxy.info/"},"Bloxy"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.footprint.network/about"},"Footprint Analytics"),", ",(0,n.kt)("a",{parentName:"td",href:"https://web3go.xyz/"},"Web3Go")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"NFT Marketplaces")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://rareboard.com/"},"Rareboard"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.venly.io/"},"Venly"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nftrade.com/"},"NFTrade"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.element.market/bsc"},"Element")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Oracle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://oracle.binance.com/"},"Binance Oracle"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bandprotocol.com/"},"Band Protocol"),", ",(0,n.kt)("a",{parentName:"td",href:"https://chain.link/"},"ChainLink"),", ",(0,n.kt)("a",{parentName:"td",href:"https://pyth.network/"},"Pyth")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Archive Data")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://infstones.com/"},"InfStones")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Decentralized Storage")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ipfs.io/"},"IPFS"),", ",(0,n.kt)("a",{parentName:"td",href:"https://filecoin.io/build/"},"Filecoin"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.arweave.org/"},"Arweave"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.pinata.cloud/"},"pinata.cloud")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Cross Chain Bridges")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://renproject.io/"},"renVM"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nerve.network/"},"NerveNetwork"),",",(0,n.kt)("a",{parentName:"td",href:"https://www.poly.network/"},"PolyNetwork"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bridge.orbitchain.io/"},"Orbit Bridge"),", ",(0,n.kt)("a",{parentName:"td",href:"https://cbridge.celer.network/"},"Celer cbridge"),", ",(0,n.kt)("a",{parentName:"td",href:"https://chainhop.exchange/"},"ChainHop"),", ",(0,n.kt)("a",{parentName:"td",href:"https://layerzero.network/"},"LayerZero"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.hashflow.com/"},"HashFlow")," , ",(0,n.kt)("a",{parentName:"td",href:"https://axelar.network/"},"Axelar")),(0,n.kt)("td",{parentName:"tr",align:null},"Decentralized, trustless, Open Access")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Automation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.gelato.network/"},"Gelato")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Browsers")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://brave.com/"},"Brave"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.opera.com/"},"Opera")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Identity/DID/Credentials")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ont.io/"},"Ontology"),", ",(0,n.kt)("a",{parentName:"td",href:"https://galaxy.eco/"},"Galaxy"),", ",(0,n.kt)("a",{parentName:"td",href:"https://space.id/"},"Space ID"),", ",(0,n.kt)("a",{parentName:"td",href:"https://cyberconnect.me/"},"CyberConnect")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Easy Wallet Onboarding")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3auth.io/"},"Web3auth"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.venly.io/"},"Venly"),", ",(0,n.kt)("a",{parentName:"td",href:"https://sequence.xyz/"},"Sequence")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Social Networking")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://prometeus.io/"},"Prometeus"),", ",(0,n.kt)("a",{parentName:"td",href:"https://cyberconnect.me/"},"CyberConnect")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Gasless Solutions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://biconomy.io/"},"Biconomy")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Governance/DAO")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.tally.xyz/"},"Tally"),", ",(0,n.kt)("a",{parentName:"td",href:"https://collab.land/"},"Collab.Land"),", ",(0,n.kt)("a",{parentName:"td",href:"https://coinshift.xyz/"},"Coinshift"),", ",(0,n.kt)("a",{parentName:"td",href:"https://snapshot.org/#/"},"Snapshot"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.hq.xyz/"},"HQ.xyz")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Gaming Related Infrastructure")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://carv.io/"},"Carv (Gaming Credential)"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.communitygaming.io/"},"Community Gaming (Tournament)"),", ",(0,n.kt)("a",{parentName:"td",href:"https://game.space/"},"GameSpace")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Security Audit")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.certik.com/"},"Certik"),", ",(0,n.kt)("a",{parentName:"td",href:"https://peckshield.com/"},"PeckShield"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.slowmist.com/"},"SlowMist"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.staginglabs.io/"},"Staging Labs"),", ",(0,n.kt)("a",{parentName:"td",href:"https://gopluslabs.io/"},"Go+ / Plus"),", ",(0,n.kt)("a",{parentName:"td",href:"https://audit.verichains.io/"},"Verichains"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.hashdit.io/"},"HashDit"),", ",(0,n.kt)("a",{parentName:"td",href:"https://halborn.com/"},"Halborn"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.trailofbits.com/"},"Trail of Bits"),", ",(0,n.kt)("a",{parentName:"td",href:"https://consensys.net/diligence/"},"Consensys Diligence"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.zokyo.io/"},"Zokyo")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Payment")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.swft.pro/zh-pc/#/home"},"SWFT"),", ",(0,n.kt)("a",{parentName:"td",href:"https://multisender.app/"},"MultiSender")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.celer.network/"},"Celer Network"),", ",(0,n.kt)("a",{parentName:"td",href:"https://connext.network/"},"Connext"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Payment Gateway")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.binancecnt.com/en"},"Binance Connect"),", ",(0,n.kt)("a",{parentName:"td",href:"https://okse.io/"},"Okse"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.kado.money/"},"Kado"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.superfluid.finance/home"},"SuperFluid"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.getpip.com/"},"Pip"),", ",(0,n.kt)("a",{parentName:"td",href:"https://bifinity.com"},"Bifinity"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.moonpay.com/"},"MoonPay"),", ",(0,n.kt)("a",{parentName:"td",href:"https://transak.com/"},"Transak")),(0,n.kt)("td",{parentName:"tr",align:null})))))}h.isMDXComponent=!0}}]);