"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=d(a),f=o,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return a?l.createElement(m,i(i({ref:t},h),{},{components:a})):l.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var d=2;d<n;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var l=a(87462),o=(a(67294),a(3905));const n={sidebar_label:"Slashing Fee",hide_table_of_contents:!1,sidebar_position:2},i="Slashing Fee and Evidence Validation",r={unversionedId:"validator/slash-fee",id:"validator/slash-fee",title:"Slashing Fee and Evidence Validation",description:"Double Sign",source:"@site/docs/validator/slash-fee.md",sourceDirName:"validator",slug:"/validator/slash-fee",permalink:"/docs/validator/slash-fee",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/slash-fee.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Slashing Fee",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Unjail",permalink:"/docs/validator/unjail"},next:{title:"Submit Slash Evidence",permalink:"/docs/validator/send-slash-evidence"}},s={},d=[{value:"Double Sign",id:"double-sign",level:2},{value:"Evidence Validation",id:"evidence-validation",level:3},{value:"Malicious Vote",id:"malicious-vote",level:2},{value:"Unavailability",id:"unavailability",level:2}],h={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slashing-fee-and-evidence-validation"},"Slashing Fee and Evidence Validation"),(0,o.kt)("h2",{id:"double-sign"},"Double Sign"),(0,o.kt)("p",null,"Anyone can submit a slash request on BC with the evidence of Double Sign of BSC"),(0,o.kt)("h3",{id:"evidence-validation"},"Evidence Validation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Two block headers have the same height and the same parent block hash"),(0,o.kt)("li",{parentName:"ul"},"Two block headers are sealed by the same validator"),(0,o.kt)("li",{parentName:"ul"},"Two signatures of these two blocks must not be the same"),(0,o.kt)("li",{parentName:"ul"},"The time of these two blocks must be within the validity of the evidence, which is 24 hours")),(0,o.kt)("p",null,"If the evidence is valid:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"10,000BNB")," would be slashed from the ",(0,o.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,o.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 10,000BNB, then the unbonded delegation balance would be slashed if it exists until totally 10,000BNB slashed from the self-delegator of the validator. However, if all the slashed BNB is less than 10,000, all the remaining stake of the self-delegator will be slashed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"1000")," of slashed BNB would allocate to the submitter as a reward"),(0,o.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with a duration of 292 years, and remove it from validator set by an instance BSC validator set update Cross-Chain update")),(0,o.kt)("h2",{id:"malicious-vote"},"Malicious Vote"),(0,o.kt)("p",null,"Only relayers can submit a slash request on BSC with the evidence of Malicious Vote of BSC for now. Open access to anyone is planned."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The target number voted by two votes lags behind the block header of the canonical chain by no more than 256"),(0,o.kt)("li",{parentName:"ul"},"The source numbers of the two votes are both smaller than their respective target numbers"),(0,o.kt)("li",{parentName:"ul"},"The source hash and target hash of the two votes are both not equal"),(0,o.kt)("li",{parentName:"ul"},"The target number of the two votes is the same or the span of one vote includes the span of the other vote"),(0,o.kt)("li",{parentName:"ul"},"The two votes are signed by the same voting key, and the verification of signatures are both passed"),(0,o.kt)("li",{parentName:"ul"},"The voting key used for signing is in the list sent by the last two breathe blocks")),(0,o.kt)("p",null,"If the evidence is valid:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"10,000BNB")," would be slashed from the ",(0,o.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,o.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 10,000BNB, then the unbonded delegation balance would be slashed if it exists until totally 10,000BNB slashed from the self-delegator of the validator. However, if all the slashed BNB is less than 10,000, all the remaining stake of the self-delegator will be slashed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"50BNB")," would allocate to the submitter from the systemreward contract as a reward if the validator is active when the evidence submitted"),(0,o.kt)("li",{parentName:"ol"},"The slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the slashed BNB will allocate to validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with a duration of 292 years, and remove it from validator set by an instance BSC validator set update Cross-Chain update")),(0,o.kt)("h2",{id:"unavailability"},"Unavailability"),(0,o.kt)("p",null,"There can be an internal smart contract responsible for recording the missed blocking metrics of each validator."),(0,o.kt)("p",null,"If a validator missed more than 50 blocks in 24h, the blocking reward for the validator will not be relayed to BC for distribution but shared with other better validators. If it missed more than 150 blocks in 24h, then this will be propagated back to BC where another Slashing will happen:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"50BNB")," would be slashed from the  ",(0,o.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,o.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 50BNB, then the unbonded delegation balance would be slashed if it exists until totally ",(0,o.kt)("strong",{parentName:"li"},"50BNB")," slashed from self-delegator of the validator. However, if all the slashed BNB is less than 50, all the remaining stake of the self-delegator will be slashed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"10")," of slashed BNB would allocate to the validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with a duration of 2 days, and remove it from validator set by an instance BSC validator set update Cross-Chain update")))}u.isMDXComponent=!0}}]);