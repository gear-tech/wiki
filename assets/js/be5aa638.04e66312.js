"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4655],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9104:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={sidebar_label:"gFT (ERC-20)",sidebar_position:3},s="Gear Fungible Token",c={unversionedId:"examples/gft-20",id:"examples/gft-20",title:"Gear Fungible Token",description:"What is ERC-20?",source:"@site/docs/examples/gft-20.md",sourceDirName:"examples",slug:"/examples/gft-20",permalink:"/examples/gft-20",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/gft-20.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"gFT (ERC-20)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PING-PONG",permalink:"/examples/ping"},next:{title:"gNFT (ERC-721)",permalink:"/examples/gnft-721"}},l={},p=[{value:"What is ERC-20?",id:"what-is-erc-20",level:2},{value:"Storage Structure",id:"storage-structure",level:2},{value:"<code>Action</code> and <code>Event</code>",id:"action-and-event",level:3},{value:"Message/Reply structures used in <code>Action</code> and <code>Event</code>",id:"messagereply-structures-used-in-action-and-event",level:3},{value:"gFT functions",id:"gft-functions",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-fungible-token"},"Gear Fungible Token"),(0,o.kt)("h2",{id:"what-is-erc-20"},"What is ERC-20?"),(0,o.kt)("p",null,"ERC-20 is a standard that\u2019s used for creating and issuing smart contracts on the Ethereum blockchain. It was created by Ethereum developers on behalf of the Ethereum community in 2015, and it was officially recognised in 2017."),(0,o.kt)("p",null,"These smart contracts can then be used to create tokenized assets that represent anything on the Ethereum blockchain like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In-game currency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Financial instruments like a share in a company")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fiat currencies, like USD for example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ounces of Gold"))),(0,o.kt)("p",null,"These tokenized assets are known as fungible tokens as all instances of a given ERC-20 token are the same and they can be used interchangeably. A token that is unique and can not be interchangeable is known as a Non Fungible Token."),(0,o.kt)("p",null,"Gear provides native implementaion of fungible token (gFT) described in this article. It explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own application and run it on the Gear Network. The source code is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/fungible-token"},"GitHub"),". "),(0,o.kt)("h2",{id:"storage-structure"},"Storage Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"struct FungibleToken {\n    name: String, /// Name of the token.\n    symbol: String,  /// Symbol of the token.\n    total_supply: u128, /// Total supply of the token.\n    balances: BTreeMap<ActorId, u128>, /// Map to hold balances of token holders.\n    allowances: BTreeMap<ActorId, BTreeMap<ActorId, u128>>, /// Map to hold allowance information of token holders.\n}\n")),(0,o.kt)("h3",{id:"action-and-event"},(0,o.kt)("inlineCode",{parentName:"h3"},"Action")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Event")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Event")," is generated when ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," is triggered. ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," enum wraps various ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," structs, ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," wraps ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Decode, Encode, TypeInfo)]\npub enum Action {\n    Mint(u128),\n    Burn(u128),\n    Transfer {\n        from: ActorId,\n        to: ActorId,\n        amount: u128,\n    },\n    Approve {\n        to: ActorId,\n        amount: u128,\n    },\n    TotalSupply,\n    BalanceOf(ActorId),\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum Event {\n    Transfer {\n        from: ActorId,\n        to: ActorId,\n        amount: u128,\n    },\n    Approve {\n        from: ActorId,\n        to: ActorId,\n        amount: u128,\n    },\n    TotalSupply(u128),\n    Balance(u128),\n}\n")),(0,o.kt)("h3",{id:"messagereply-structures-used-in-action-and-event"},"Message/Reply structures used in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Action")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Event")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Decode, Encode, TypeInfo)]\npub struct InitConfig {\n    pub name: String,\n    pub symbol: String,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct ApproveInput {\n    pub spender: ActorId,\n    pub amount: u128,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct ApproveReply {\n    pub owner: ActorId,\n    pub spender: ActorId,\n    pub amount: u128,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Decode, Encode, TypeInfo)]\npub struct TransferInput {\n    pub to: ActorId,\n    pub amount: u128,\n}\n")),(0,o.kt)("h2",{id:"gft-functions"},"gFT functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Minting the specified `amount` of tokens for the account that called this function.\n    fn mint(&mut self, amount: u128)\n\n    /// Burning the specified `amount` of tokens for the `account` that called this function\n    fn burn(&mut self, amount: u128)\n\n    /// Transfers `amount` tokens from `sender` account to `recipient` account.\n    fn transfer(&mut self, from: &ActorId, to: &ActorId, amount: u128)\n\n    /// Adds/Updates allowance entry for `spender` account to tranfer upto `amount` from `owner` account.\n    fn approve(&mut self, to: &ActorId, amount: u128)\n\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"A source code of the contract example provided by Gear is available on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/fungible-token/blob/master/src/lib.rs"},"fungible-token/src/lib.rs"),"."),(0,o.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,o.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/fungible-token/blob/master/src/tests.rs"},"fungible-token/src/tests.rs"),"."),(0,o.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to this article: ",(0,o.kt)("a",{parentName:"p",href:"/developing-contracts/testing"},"Program Testing"),"."))}m.isMDXComponent=!0}}]);