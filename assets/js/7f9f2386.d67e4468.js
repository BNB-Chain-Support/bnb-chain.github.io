"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6899],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?t.createElement(b,o(o({ref:a},d),{},{components:n})):t.createElement(b,o({ref:a},d))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51456:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Create Validator",sidebar_position:2,hide_table_of_contents:!1},o="Create Validator",s={unversionedId:"beaconchain/validator/create-val",id:"beaconchain/validator/create-val",title:"Create Validator",description:"Requirements and Responsibility",source:"@site/docs/beaconchain/validator/create-val.md",sourceDirName:"beaconchain/validator",slug:"/beaconchain/validator/create-val",permalink:"/docs/beaconchain/validator/create-val",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/validator/create-val.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create Validator",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/docs/beaconchain/validator/overview"},next:{title:"Run Validator",permalink:"/docs/beaconchain/validator/run-val"}},l={},c=[{value:"Requirements and Responsibility",id:"requirements-and-responsibility",level:2},{value:"Become a Validator Candidate",id:"become-a-validator-candidate",level:2},{value:"Step1: Generate Consensus Key",id:"step1-generate-consensus-key",level:3},{value:"Step2: Send Create Validator Transaction",id:"step2-send-create-validator-transaction",level:3}],d={toc:c},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-validator"},"Create Validator"),(0,r.kt)("h2",{id:"requirements-and-responsibility"},"Requirements and Responsibility"),(0,r.kt)("p",null,"To become a validator, you'll need to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a create-validator-open transaction to declare the candidacy. The minimal self-delegation asset amount is 10000 BNB."),(0,r.kt)("li",{parentName:"ol"},"Make users delegate on your validator. All the validators will be ranked by their accumulated BNB stake amount.\nThere is an on-chain parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"MaxValidators"),". Only the validator candidates whose rank meets the requirement can be elected."),(0,r.kt)("li",{parentName:"ol"},"Run a full node to help produce blocks on BC.")),(0,r.kt)("h2",{id:"become-a-validator-candidate"},"Become a Validator Candidate"),(0,r.kt)("p",null,"You will need ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/api-reference/cli"},"BNB Beacon Chain CLI")," for the commands."),(0,r.kt)("h3",{id:"step1-generate-consensus-key"},"Step1: Generate Consensus Key"),(0,r.kt)("p",null,"Use the command below to generate a consensus key. It will be used in the full node to sign the consensus message if the validator gets bonded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbcli utils gen-consensus-key\nThe consensus key has been generated and saved to ./priv_validator_key.json successfully\nThe consensus pubkey is bcap1zcjduepqg6glk780f4ynvjjk82drnycty7zjl0uz79a6h2depnhavshvg39sm0c5tl\n")),(0,r.kt)("h3",{id:"step2-send-create-validator-transaction"},"Step2: Send Create Validator Transaction"),(0,r.kt)("p",null,"Create or recover an account, make sure the account gets more than 10000 BNB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbcli keys add your_key_name\n\n$ bnbcli keys add your_key_name --recover\n")),(0,r.kt)("p",null,"Send create-validator-open transaction to declare the candidacy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Command for create validator on mainnet  \n$ bnbcli staking create-validator-open \\  \n--address-delegator {wallet address on BC} \\\n--amount 10000000000:BNB \\  \n--pubkey {the concensus pubkey created in step 1} \\\n--commission-rate {10000000 represent 10%} \\  \n--commission-max-rate {20000000 represent 20%} \\  \n--commission-max-change-rate {5000000 represent 5%} \\  \n--moniker {validator name} \\\n--details {validator detailed description} \\  \n--identity {keybase identity} \\  \n--website {website for validator} \\  \n--from {key name} \\  \n--chain-id Binance-Chain-Tigris \\  \n--node https://dataseed5.defibit.io:443  \n\n# Query validators\n./bnbcli staking  validators --chain-id Binance-Chain-Tigris    --node https://dataseed5.defibit.io:443\n  \n# Command for create validator on testnet  \n$ tbnbcli staking create-validator-open \\  \n--address-delegator {wallet address on BC} \\  \n--amount 10000000000:BNB \\\n--pubkey {the concensus pubkey created in step 1} \\\n--commission-rate {10000000 represent 10%} \\  \n--commission-max-rate {20000000 represent 20%} \\  \n--commission-max-change-rate {1000000 represent 1%} \\  \n--moniker {validator name} \\  \n--details {validator detailed description} \\  \n--identity {keybase identity} \\  \n--website {website for validator} \\  \n--from {key name} \\  \n--chain-id Binance-Chain-Ganges \\  \n--node=http://data-seed-pre-2-s1.bnbchain.org:80\n\n## Query validators on testnet\n./tbnbcli staking  validators  --chain-id Binance-Chain-Ganges  --node=http://data-seed-pre-2-s1.bnbchain.org:80\n")))}u.isMDXComponent=!0}}]);