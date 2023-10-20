"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(87462),i=(t(67294),t(3905));const a={},r="Join Testnet",l={unversionedId:"beaconchain/develop/node/join-testnet",id:"beaconchain/develop/node/join-testnet",title:"Join Testnet",description:"See the node repo for information on the mainnet,",source:"@site/docs/beaconchain/develop/node/join-testnet.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/join-testnet",permalink:"/docs/beaconchain/develop/node/join-testnet",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/join-testnet.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Join Mainnet",permalink:"/docs/beaconchain/develop/node/join-mainnet"},next:{title:"Different Sync Types",permalink:"/docs/beaconchain/develop/node/synctypes"}},s={},d=[{value:"Minimum System Requirements",id:"minimum-system-requirements",level:2},{value:"Setting Up a New Node",id:"setting-up-a-new-node",level:2},{value:"Additional Configuration",id:"additional-configuration",level:3},{value:"Get Extra Information From Your Fullnode",id:"get-extra-information-from-your-fullnode",level:2},{value:"Monitor Syncing Process",id:"monitor-syncing-process",level:5},{value:"Prometheus Metrics",id:"prometheus-metrics",level:2},{value:"Testnet Tools",id:"testnet-tools",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"join-testnet"},"Join Testnet"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node"},"node repo")," for information on the mainnet,\nincluding the correct version of the binaries to use and details about the genesis file")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You need to install ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/install"},"bnbchaind")," before you go further")),(0,i.kt)("h2",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,i.kt)("p",null,"The hardware must meet certain requirements to run a Full Node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desktop or laptop hardware running recent versions of Mac OS X, Windows, or Linux."),(0,i.kt)("li",{parentName:"ul"},"1 TB of free disk space, accessible at a minimum read/write speed of 100 MB/s."),(0,i.kt)("li",{parentName:"ul"},"4 cores of CPU and 8 gigabytes of memory (RAM)."),(0,i.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of at least 1 megabyte per second.")),(0,i.kt)("h2",{id:"setting-up-a-new-node"},"Setting Up a New Node"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You need to choose a home folder ",(0,i.kt)("inlineCode",{parentName:"li"},"$BNCHOME")," (i.e. ~/.bnbchaind) for BNB Beacon Chain. You can setup this by:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir ~/.bnbchaind\nmkdir ~/.bnbchaind/config\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("inlineCode",{parentName:"li"},"app.toml"),",  ",(0,i.kt)("inlineCode",{parentName:"li"},"config.toml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"genesis.json")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/bnb-chain/node/releases")," and copy them into ",(0,i.kt)("inlineCode",{parentName:"li"},"$BNCHOME/config"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/node/releases/latest |grep browser_ |grep testnet_config |cut -d\\" -f4)\nunzip testnet_config.zip\n')),(0,i.kt)("p",null,"You can edit this moniker later, in the ~/.bnbchaind/config/config.toml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# A custom human readable name for this node\nmoniker = "<your_custom_moniker>"\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable. ")),(0,i.kt)("p",null,"Now your Full Node has been initialized."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"genesis.json")," file will be downloaded along with the other config files in step #2.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to understand genesis file, click ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/learn/genesis"},"here"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Start your Full Node.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bnbchaind start &\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, if you choose a different $BNCHOME location and you are not using the suggested default ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bnbchaind"),", you may start the full node by using below script, where $BNCHOME is your selected directory. "),(0,i.kt)("p",{parentName:"admonition"},"Example: If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/beaconchain-testnet")," as your home directory. Run the Full Node with below command."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bnbchaind start --home /usr/local/beaconchain-testnet &\n"))),(0,i.kt)("p",null,"If you encounter any issue when running a Full Node, you should read the FAQ provided here."),(0,i.kt)("h3",{id:"additional-configuration"},"Additional Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seed node: Your Full Node needs to know how to find peers in the blockchain network. You'll need to add healthy seed nodes to $BNCHOME/config/config.toml. The recommended ",(0,i.kt)("inlineCode",{parentName:"li"},"config.toml")," already contains links to some seed nodes.\nIf those seeds aren't working, you can find more seeds and persistent peers in the HTTP API endpoints: ",(0,i.kt)("a",{parentName:"li",href:"https://testnet-dex.binance.org/api/v1/peers"},"https://testnet-dex.binance.org/api/v1/peers")),(0,i.kt)("li",{parentName:"ul"},"Sync type: By default, new nodes will sync with ",(0,i.kt)("inlineCode",{parentName:"li"},"state-sync")," mode. To change sync mode, read the instructions ",(0,i.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/synctypes"},"here")),(0,i.kt)("li",{parentName:"ul"},"Log: The log file is under ",(0,i.kt)("inlineCode",{parentName:"li"},"home"),"- the directory specified when starting ",(0,i.kt)("inlineCode",{parentName:"li"},"bnbchaind"),".\nThe latest log file is ",(0,i.kt)("inlineCode",{parentName:"li"},"bnc.log"),". The process will create a new log file every one hour.\nTo make sure you have sufficient disk space to keep the log files, we strongly recommend you to change the log location by changing ",(0,i.kt)("inlineCode",{parentName:"li"},"logFileRoot")," option in ",(0,i.kt)("inlineCode",{parentName:"li"},"$BNCHOME/config/app.toml"),"."),(0,i.kt)("li",{parentName:"ul"},"Service Port: RPC service listens on port ",(0,i.kt)("inlineCode",{parentName:"li"},"27147")," and P2P service listens on port ",(0,i.kt)("inlineCode",{parentName:"li"},"27146")," by default.\nMake sure these two ports are open before starting a full node, unless the full node has to listen on other ports."),(0,i.kt)("li",{parentName:"ul"},"Store: All the state and block data will store under ",(0,i.kt)("inlineCode",{parentName:"li"},"$BNCHOME/data"),", do not delete or edit any of these files.")),(0,i.kt)("h2",{id:"get-extra-information-from-your-fullnode"},"Get Extra Information From Your Fullnode"),(0,i.kt)("p",null,"If you have a Full Node running, then you can publish extra messages to local files."),(0,i.kt)("h5",{id:"monitor-syncing-process"},"Monitor Syncing Process"),(0,i.kt)("p",null,"You can verify if state sync is done by ",(0,i.kt)("inlineCode",{parentName:"p"},"curl localhost:27147/status")," several times and see whether ",(0,i.kt)("inlineCode",{parentName:"p"},"latest_block_height")," is increasing in response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"sync_info": {\n  ...\n  "latest_block_height": "878092",\n  "latest_block_time": "2019-04-15T00:01:22.610803768Z",\n  ...\n}\n')),(0,i.kt)("h2",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,i.kt)("p",null,"Prometheus is enabled on port ",(0,i.kt)("inlineCode",{parentName:"p"},"28660")," by default, and the endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics"),"."),(0,i.kt)("h2",{id:"testnet-tools"},"Testnet Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testnet-explorer.bnbchain.org/"},"Explorer"))))}u.isMDXComponent=!0}}]);