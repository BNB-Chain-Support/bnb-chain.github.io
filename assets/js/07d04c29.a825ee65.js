"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1221],{3905:(e,t,o)=>{o.d(t,{Zo:()=>f,kt:()=>u});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)o=d[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)o=d[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),b=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},f=function(e){var t=b(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,d=e.originalType,i=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),s=b(o),p=n,u=s["".concat(i,".").concat(p)]||s[p]||l[p]||d;return o?a.createElement(u,c(c({ref:t},f),{},{components:o})):a.createElement(u,c({ref:t},f))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=o.length,c=new Array(d);c[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[s]="string"==typeof e?e:n,c[1]=r;for(var b=2;b<d;b++)c[b]=o[b];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7199:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>r,toc:()=>b});var a=o(87462),n=(o(67294),o(3905));const d={title:"Boot Nodes",sidebar_label:"Boot Nodes",sidebar_position:2,hide_table_of_contents:!1},c=void 0,r={unversionedId:"boot-nodes",id:"boot-nodes",title:"Boot Nodes",description:"Through the maintenance release v1.2.12 4, Boot Nodes were introduced on the BSC mainnet. BSC Boot Nodes are similar to Ethereum Boot Nodes, refer here for more details. The main benefit of Boot Nodes is that it would be easier for user to connect to the BSC network. Users would no longer need to setup the StaticNodes in config.toml, just leave it empty and make sure delete the BootstrapNodes field in config.toml.",source:"@site/docs/boot-nodes.md",sourceDirName:".",slug:"/boot-nodes",permalink:"/docs/boot-nodes",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/boot-nodes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Boot Nodes",sidebar_label:"Boot Nodes",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Fast Node",permalink:"/docs/BSC-fast-node"},next:{title:"Using ChainIDE",permalink:"/docs/chainide"}},i={},b=[{value:"Impact To Users",id:"impact-to-users",level:2},{value:"Static Nodes Could Be Stopped",id:"static-nodes-could-be-stopped",level:3},{value:"To Join The Network With BootNodes",id:"to-join-the-network-with-bootnodes",level:3},{value:"To Run A Boot Node",id:"to-run-a-boot-node",level:3},{value:"Help",id:"help",level:2}],f={toc:b},s="wrapper";function l(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Through the maintenance release ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/tag/v1.2.12"},"v1.2.12 4"),", Boot Nodes were introduced on the BSC mainnet. BSC Boot Nodes are similar to Ethereum Boot Nodes, refer ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/bootnodes/"},"here")," for more details. The main benefit of Boot Nodes is that it would be easier for user to connect to the BSC network. Users would no longer need to setup the ",(0,n.kt)("inlineCode",{parentName:"p"},"StaticNodes")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.toml"),", just leave it empty and make sure delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"BootstrapNodes")," field in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.toml"),". "),(0,n.kt)("h2",{id:"impact-to-users"},"Impact To Users"),(0,n.kt)("h3",{id:"static-nodes-could-be-stopped"},"Static Nodes Could Be Stopped"),(0,n.kt)("p",null,"Previously, BSC provides a list of ",(0,n.kt)("inlineCode",{parentName:"p"},"StaticNodes")," for users to connect to the network, they are working as a full node and also serving the P2P discovery protocol. New BSC nodes connect to the BSC network through these ",(0,n.kt)("inlineCode",{parentName:"p"},"StaticNodes"),". It works, but is not quite stable, since they could have very heavy workload."),(0,n.kt)("p",null,"These static nodes could be stopped and replaced by Boot Nodes in the future. And the ",(0,n.kt)("inlineCode",{parentName:"p"},"StaticNodes")," list provided before could no longer be available. Like the list provided in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/tag/v1.2.11"},"v1.2.11 5"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'StaticNodes = [\n"enode://fe0bb07eae29e8cfaa5bb15b0db8c386a45b7da2c94e1dabd7ca58b6327eee0c27bdcea4f08db19ea07b9a1391e5496a28c675c6eee578154edae4fa44640c5d@54.228.2.74:30311",\n"enode://c307b4cddec0aea2188eafddedb0a076b9289402c63217b4c81eb7f34761c7cfaf6b075e93d7357169e226ff1bb4aa3bd71869b4c76cf261e2991005ddb4d4aa@3.81.81.182:30311",\n"enode://84a76ad1fab6164cbb00179dd07c96755141ffb75d5d387f45295e6ecfcc9e12a720f1f3dca8318449eeff768d13e9d49a414d2b522d1bcf2919aebf4852ab46@44.198.58.179:30311",\n"enode://41d57b0f00d83016e1bb4eccff0f3034aa49345301b7be96c6bb23a0a852b9b87b9ed11827c188ad409019fb0e578917d722f318665f198340b8a15ae8beff36@34.252.87.229:30311",\n"enode://accbc0a5af0af03e1ec3b5e80544bdceea48011a6928cd82d2c1a9c38b65fd48ec970ba17bd8c0b0ec21a28faec9efe1d1ce55134784b9207146e2f62d8932ba@54.162.32.1:30311",\n"enode://e333532e47a14dba7603c9ab0598e68be2c0822200855844edd45f50bfba481451ca5ee5247dbca2b54fe522e74a658edc15c8eed917360e1a289b3ab78ecf4c@3.250.36.7:30311",\n"enode://9f005be9111a6152884fd575abb55bddb1e7f726510c96cddde57a9bba84ffa4952a89d7632c9c9dd50d3750f83966a73a0f7ed793f253a3691b84a687b29b6c@3.88.177.211:30311",\n"enode://5451251a9902e658154456ea98ebdd93313e54496ce0a6ca2242fe4db882940d78d758c85a36485af54b0841270f2bdbff64d66c45976f3ed1dd912f7649c831@3.236.189.129:30311",\n"enode://a232f92d1e76447b93306ece2f6a55ac70ca4633fae0938d71a100757eaf8526e6bbf720aa70cba1e6d186be17291ad1ee851a35596ec6caa2fdf135ce4b6b68@107.20.124.16:30311",\n"enode://62c516645635f0389b4c851bfc4545720fac0607de74942e4ea7e923f4fa2ac0c438c146e2f0721c8ce06dca4e7f30f5c0136569d9f4b6a827c62b980fd53272@52.215.57.20:30311",\n"enode://c014bbf48209cdf8ca6d3bf3ff5cf2fade45104283dcfc079df6c64e0f4b65e4afe28040fa1731a0732bd9cbb90786cf78f0174b5de7bd5b303088e80d8e6a83@54.74.101.143:30311",\n"enode://710ed272e03b92c803cd165e5fa071da015815d312f17d107a43ad3b12b0f05c830c58ced2df7547294f5365fe76cdcf1a58f923ee5612d247a6d5b80cfe16a8@34.245.31.55:30311",\n"enode://768af449287561c0f17bb5dc5d98a1c6a4b1798cb41159bd0a7bfebdc179e39ad8076d7292caa9344eecb94a5f7499e632c29cc4edbdf2e8ada3f7c8c7b2a64b@3.95.173.72:30311",\n"enode://8428650e034341479d0ca3142bcd412f400ba47454bb7caeb88cfeb9bb60c21e45153eddf3e334d5d94ae67609ec2ac44816b346a2b3216d94a7c095883141e3@54.195.188.155:30311"\n]\n')),(0,n.kt)("h3",{id:"to-join-the-network-with-bootnodes"},"To Join The Network With BootNodes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are using BSC release before ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.2.12"),", you can also try BootNodes without upgrading to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.2.12"),", you can just set up the ",(0,n.kt)("inlineCode",{parentName:"li"},"BootstrapNodes")," field in your ",(0,n.kt)("inlineCode",{parentName:"li"},"config.toml")," and restart. The six ",(0,n.kt)("inlineCode",{parentName:"li"},"BootstrapNodes")," items listed below can be used directly, they are the current default ",(0,n.kt)("inlineCode",{parentName:"li"},"BootstrapNodes")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.2.12"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'...\n[Node.P2P]\nMaxPeers = 200\nNoDiscovery = false\nBootstrapNodes = [\n"enode://433c8bfdf53a3e2268ccb1b829e47f629793291cbddf0c76ae626da802f90532251fc558e2e0d10d6725e759088439bf1cd4714716b03a259a35d4b2e4acfa7f@52.69.102.73:30311",\n"enode://571bee8fb902a625942f10a770ccf727ae2ba1bab2a2b64e121594a99c9437317f6166a395670a00b7d93647eacafe598b6bbcef15b40b6d1a10243865a3e80f@35.73.84.120:30311",\n"enode://fac42fb0ba082b7d1eebded216db42161163d42e4f52c9e47716946d64468a62da4ba0b1cac0df5e8bf1e5284861d757339751c33d51dfef318be5168803d0b5@18.203.152.54:30311",\n"enode://3063d1c9e1b824cfbb7c7b6abafa34faec6bb4e7e06941d218d760acdd7963b274278c5c3e63914bd6d1b58504c59ec5522c56f883baceb8538674b92da48a96@34.250.32.100:30311",\n"enode://ad78c64a4ade83692488aa42e4c94084516e555d3f340d9802c2bf106a3df8868bc46eae083d2de4018f40e8d9a9952c32a0943cd68855a9bc9fd07aac982a6d@34.204.214.24:30311",\n"enode://5db798deb67df75d073f8e2953dad283148133acb520625ea804c9c4ad09a35f13592a762d8f89056248f3889f6dcc33490c145774ea4ff2966982294909b37a@107.20.191.97:30311"\n]\nStaticNodes = []\nListenAddr = ":30311"\n...\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are using BSC release ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.2.12")," or later, you no longer need to setup the ",(0,n.kt)("inlineCode",{parentName:"li"},"BootstrapNodes ")," field, but you can not just leave it empty, make sure you delete it from ",(0,n.kt)("inlineCode",{parentName:"li"},"config.toml"),". It would be preferred to delete it and use the default value in case there could be any update to the boot node list in the future. The ",(0,n.kt)("inlineCode",{parentName:"li"},"config.toml")," would look like as follow:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'...\n[Node.P2P]\nMaxPeers = 200\nNoDiscovery = false\nStaticNodes = []\nListenAddr = ":30311"\n..\n')),(0,n.kt)("h3",{id:"to-run-a-boot-node"},"To Run A Boot Node"),(0,n.kt)("p",null,"Boot nodes are super-lightweight nodes, they can be ran by a very cheap device, like: ",(0,n.kt)("inlineCode",{parentName:"p"},"2 cores, 2GB memory, 20GB disk"),". \\\nIf you want to support the BSC ecosystem by providing new boot nodes, you can follow ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc#running-a-bootnode"},"this")," guide to do it."),(0,n.kt)("h2",{id:"help"},"Help"),(0,n.kt)("p",null,"Since boot nodes have been introduced recently, if you get any problem in using it, please let us know. You may just create new issue in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/issues"},"BSC GitHub repo"),"."))}l.isMDXComponent=!0}}]);