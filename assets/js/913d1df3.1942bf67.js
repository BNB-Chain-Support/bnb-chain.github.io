"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5677],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:e},s),{},{components:a})):n.createElement(h,o({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41393:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"NFT Metadata Standard",sidebar_position:1},o="NFT Metadata Standard",l={unversionedId:"nft-metadata-standard",id:"nft-metadata-standard",title:"NFT Metadata Standard",description:"Implementing Token URI",source:"@site/docs/nft-metadata-standard.md",sourceDirName:".",slug:"/nft-metadata-standard",permalink:"/docs/nft-metadata-standard",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/nft-metadata-standard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"NFT Metadata Standard",sidebar_position:1},sidebar:"bscSideBar",previous:{title:"Verify Your Contract on BscScan",permalink:"/docs/verify"},next:{title:"Using Truffle",permalink:"/docs/ERC721"}},p={},d=[{value:"Implementing Token URI",id:"implementing-token-uri",level:2},{value:"Metadata Structure",id:"metadata-structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Numeric Traits",id:"numeric-traits",level:4},{value:"Date",id:"date",level:4}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nft-metadata-standard"},"NFT Metadata Standard"),(0,r.kt)("h2",{id:"implementing-token-uri"},"Implementing Token URI"),(0,r.kt)("p",null,"To facilitate a marketplace on BSC to pull in off-chain metadata for BEP721 assets, the NFT contract will need to return a URI where the metadata can be found. To find this URI, the tokenURI method in ERC721 and the uri method in ERC1155 are used to track your NFT. You should implement the function in the Contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n/**\n * @dev Returns an URI for a given token ID\n */\nfunction tokenURI(uint256 _tokenId) public view returns (string) {\n  return Strings.strConcat(\n      baseTokenURI(),\n      Strings.uint2str(_tokenId)\n  );\n}\n\n")),(0,r.kt)("p",null,"The tokenURI function in your Contract should return an HTTP or IPFS URL. When queried, this URL should in turn return a JSON blob of data with the metadata for your token."),(0,r.kt)("h2",{id:"metadata-structure"},"Metadata Structure"),(0,r.kt)("p",null,"Marketplaces on BSC support metadata that is structured according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md"},"the official ERC721 metadata standard"),". Additionally, several properties for your items are supported, giving you all the sorting and filtering capabilities on BSC Marketplaces.\nThe below metadata structure, allows the BSC Marketplace to read and display the details about the assets which your NFTs represent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n{\n    "name":"NFT Name",\n    "description":"NFT Description",\n    "image":"https://somedomain.com/pic/xxxx.jpg",\n    "external_url":"https://originalsite.io/2",\n    "attributes":[...]\n}\n\n')),(0,r.kt)("p",null,"Here's how each of these properties work:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the item. Max 200 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"A human-readable description of the item. Markdown is supported. Max 500 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the URL to the image of the item. It can be just about any type of image. A 350 x 350 image is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"animation_url"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"animation_type"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the file format of the multi-media attachment provided from animation_url.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_url"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the URL that will appear below the asset's image on the marketplace and will allow users to leave the marketplace and view the item on your site.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"These are the attributes for the item to describe the detail of the NFT. (see array below)")))),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"To present NFT traits, include the following array in the metadata: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n{\n    "attributes":[\n        {\n            "trait_type":"Rarity Class",\n            "value":"Normal"\n        },\n        {\n            "trait_type":"Type",\n            "value":"Male"\n        },\n        {\n            "trait_type":"Face",\n            "value":"Mole"\n        },\n        {\n            "trait_type":"Beard",\n            "value":"Chinstrap"\n        },\n        {\n            "display_type":"boost_number",\n            "trait_type":"Power",\n            "value":"Power"\n        },\n        {\n            "display_type":"boost_percentage",\n            "trait_type":"Health Increase",\n            "value":"20"\n        },\n        {\n            "display_type":"number",\n            "trait_type":"Generation",\n            "value":"3"\n        }\n    ]\n}\n\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"trait_type")," is the name of the trait, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is the value of the trait, and ",(0,r.kt)("inlineCode",{parentName:"p"},"display_type")," is a field indicating how you would like a numeric value should be displayed. For string traits, you don't have to worry about ",(0,r.kt)("inlineCode",{parentName:"p"},"display_type"),".\nAll traits included in the attributes will be displayed in ",(0,r.kt)("inlineCode",{parentName:"p"},"Attribute"),".\nIf you don't want to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"trait_type")," for a particular trait, you can include just a value in the trait and it will be set as a generic attribute."),(0,r.kt)("h4",{id:"numeric-traits"},"Numeric Traits"),(0,r.kt)("p",null,"There are 3 supported options for ",(0,r.kt)("inlineCode",{parentName:"p"},"display_type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," will show the value in pure number, ",(0,r.kt)("inlineCode",{parentName:"p"},"boost_number")," allows you to show the number with Plus or Minus symbol, and ",(0,r.kt)("inlineCode",{parentName:"p"},"boost_percentage")," is similar to boost_number but will show a percent sign behind the number."),(0,r.kt)("h4",{id:"date"},"Date"),(0,r.kt)("p",null,"Marketplace also supports date traits in ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," ",(0,r.kt)("inlineCode",{parentName:"p"},"display_type"),". Pass in a unix timestamp as the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n   {\n      "display_type": "date", \n      "trait_type": "birthday", \n      "value": 1608490000\n    }\n    \n')))}m.isMDXComponent=!0}}]);