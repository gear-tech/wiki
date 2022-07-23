"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"\u8377\u5170\u5f0f\u62cd\u5356",sidebar_position:10},u="\u8377\u5170\u5f0f\u62cd\u5356",p={unversionedId:"examples/dutch-auction",id:"examples/dutch-auction",title:"\u8377\u5170\u5f0f\u62cd\u5356",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/dutch-auction.md",sourceDirName:"examples",slug:"/examples/dutch-auction",permalink:"/zh-cn/examples/dutch-auction",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/dutch-auction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"\u8377\u5170\u5f0f\u62cd\u5356",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u5f69\u7968",permalink:"/zh-cn/examples/lottery"},next:{title:"\u4f9b\u5e94\u94fe",permalink:"/zh-cn/examples/supply-chain"}},c={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5408\u7ea6\u8bf4\u660e",id:"\u5408\u7ea6\u8bf4\u660e",level:2},{value:"Actions",id:"actions",level:3},{value:"actions \u7ed3\u6784\uff1a",id:"actions-\u7ed3\u6784",level:4},{value:"Events",id:"events",level:3},{value:"State",id:"state",level:3},{value:"Structures in state replies:",id:"structures-in-state-replies",level:4},{value:"Source code",id:"source-code",level:2}],d={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8377\u5170\u5f0f\u62cd\u5356"},"\u8377\u5170\u5f0f\u62cd\u5356"),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u8377\u5170\u5f0f\u62cd\u5356\u662f\u8d2d\u4e70\u6216\u51fa\u552e\u5546\u54c1\u7684\u51e0\u79cd\u62cd\u5356\u7c7b\u578b\u4e4b\u4e00\u3002\u6700\u5e38\u89c1\u7684\u662f\uff0c\u5728\u62cd\u5356\u4e2d\uff0c\u5728\u51fa\u552e\u8fc7\u7a0b\u4e2d\uff0c\u62cd\u5356\u5e08\u4ee5\u9ad8\u4ef7\u5f00\u59cb\uff0c\u7136\u540e\u964d\u4f4e\u4ef7\u683c\uff0c\u76f4\u5230\u4e00\u4e9b\u53c2\u4e0e\u8005\u63a5\u53d7\u8fd9\u4e2a\u4ef7\u683c\uff0c\u6216\u8005\u8fbe\u5230\u9884\u5b9a\u7684\u5e95\u4ef7\u3002\u8377\u5170\u5f0f\u62cd\u5356\u4e5f\u88ab\u79f0\u4e3a\u65f6\u949f\u62cd\u5356\u6216\u516c\u5f00\u53eb\u4ef7\u964d\u4ef7\u5f0f\u62cd\u5356\u3002\u8fd9\u79cd\u7c7b\u578b\u7684\u62cd\u5356\u5c55\u73b0\u4e86\u901f\u5ea6\u4f18\u52bf\uff0c\u56e0\u4e3a\u4e00\u6b21\u62cd\u5356\u4e0d\u9700\u8981\u8d85\u8fc7\u4e00\u4e2a\u51fa\u4ef7\u3002",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u8be5\u62cd\u5356\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/examples/gnft-721"},"Gear \u975e\u540c\u8d28\u5316\u4ee3\u5e01 (gNFT)"),"\u4f5c\u4e3a\u4ea4\u6613\u5546\u54c1\u3002"),(0,i.kt)("h2",{id:"\u5408\u7ea6\u8bf4\u660e"},"\u5408\u7ea6\u8bf4\u660e"),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Action {\n    Buy,\n    Create(CreateConfig),\n    ForceStop,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Buy")," \u6309\u5f53\u524d\u4ef7\u683c\u8d2d\u4e70 GNFT \u4ee3\u5e01"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Create(CreateConfig)")," \u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u62cd\u5356\uff0c\u5982\u679c\u4e0a\u4e00\u4e2a\u62cd\u5356\u5df2\u7ecf\u7ed3\u675f\uff0c\u6216\u8005\u8fd9\u662f\u8fd9\u4e2a\u5408\u7ea6\u4e2d\u7684\u7b2c\u4e00\u4e2a\u62cd\u5356",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ForceStop")," \u5982\u679c\u5408\u7ea6\u6240\u6709\u8005\u5e0c\u671b\u63d0\u524d\u5b8c\u6210\u62cd\u5356\uff0c\u62cd\u5356\u662f\u5426\u53ef\u4ee5\u5f3a\u884c\u7ec8\u6b62")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note how DutchAuction is composed; that allows users to reuse its functionality over and over again.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8377\u5170\u5f0f\u62cd\u5356\u662f\u5982\u4f55\u7ec4\u6210\u7684;\u8fd9\u5141\u8bb8\u7528\u6237\u53cd\u590d\u4f7f\u7528\u5b83\u7684\u529f\u80fd\u3002")),(0,i.kt)("h4",{id:"actions-\u7ed3\u6784"},"actions \u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CreateConfig {\n    pub nft_contract_actor_id: ActorId,\n    pub token_owner: ActorId,\n    pub token_id: U256,\n    pub starting_price: u128,\n    pub discount_rate: u128,\n    pub duration: Duration,\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u62cd\u5356\uff0c\u9700\u8981\u6709\u4ee5\u4e0b\u5b57\u6bb5\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft_contract_actor_id")," \u662f\u5408\u7ea6\u5730\u5740\uff0c\u62cd\u5356\u5546\u7684 NFT \u5df2\u88ab\u94f8\u9020"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_owner")," \u662f token \u6240\u6709\u8005\u7684\u5730\u5740\uff0c\u5982\u679c\u6709\u4eba\u8d2d\u4e70\u4e86\u4ed6\u7684 NFT\uff0c\u53ef\u4ee5\u7ed9\u4ed6\u53d1\u9001\u5956\u52b1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_id")," \u662f NFT \u7684 id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"starting_price")," \u662f\u62cd\u5356\u8d77\u59cb\u4ef7\u683c\u548c\u5f00\u59cb\u4e0b\u964d\u7684\u4ef7\u683c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"discount_rate")," \u662f\u4ef7\u683c\u968f\u65f6\u95f4\u6bcf\u6beb\u79d2\u4e0b\u964d\u7684\u6570\u91cf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration")," \u7528\u6765\u8bbe\u7f6e\u62cd\u5356\u7684\u6301\u7eed\u65f6\u95f4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Duration {\n    pub days: u64,\n    pub hours: u64,\n    pub minutes: u64,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"days")," \u62cd\u5356\u6301\u7eed\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5929"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hours")," \u62cd\u5356\u6301\u7eed\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5c0f\u65f6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minutes")," \u62cd\u5356\u6301\u7eed\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5206\u949f")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Event {\n    AuctionStarted {\n        token_owner: ActorId,\n        price: u128,\n        token_id: U256,\n    },\n    AuctionStoped {\n        token_owner: ActorId,\n        token_id: U256,\n    },\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AuctionStarted")," \u662f\u5f53\u67d0\u4eba\u6210\u529f\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"Create(CreateConfig)"),"\u65f6\u53d1\u751f\u7684\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AuctionStoped")," \u662f\u5408\u7ea6\u6240\u6709\u8005\u5f3a\u5236\u7ec8\u6b62\u62cd\u5356\u7684\u4e8b\u4ef6")),(0,i.kt)("h3",{id:"state"},"State"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u5408\u7ea6\u8bf7\u6c42\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum State {\n    TokenPrice(),\n    IsActive(),\n    Info(),\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TokenPrice")," \u5f97\u5230 NFT \u7684\u5f53\u524d\u4ef7\u683c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsActive")," \u5f97\u5230\u62cd\u5356\u662f\u5426\u5df2\u7ecf\u7ed3\u675f\u7684\u72b6\u6001\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Info")," \u5411\u7528\u6237\u663e\u793a\u66f4\u591a\u7684\u62cd\u5356\u4fe1\u606f")),(0,i.kt)("p",null,"\u6bcf\u4e2a\u72b6\u6001\u8bf7\u6c42\u90fd\u6709\u4e00\u4e2a\u540c\u540d\u7684\u54cd\u5e94\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6d88\u606f\u56de\u590d\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum StateReply {\n    TokenPrice(u128),\n    IsActive(bool),\n    Info(AuctionInfo),\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TokenPrice")," \u6709\u4e00\u4e2a\u4e0e\u5f53\u524d\u503c\u76f8\u5173\u8054\u7684\u503c\uff0c\u5355\u4f4d\u4e3a units"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsActive")," \u8868\u793a\u62cd\u5356\u5c1a\u672a\u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Info")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"AuctionInfo")," \u7c7b\u578b\u7684\u503c")),(0,i.kt)("h4",{id:"structures-in-state-replies"},"Structures in state replies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct AuctionInfo {\n    pub nft_contract_actor_id: ActorId,\n    pub token_id: U256,\n    pub token_owner: ActorId,\n    pub starting_price: u128,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft_contract_actor_id")," \u662f\u5408\u7ea6\u5730\u5740\uff0c\u62cd\u5356\u5546\u7684 NFT \u5df2\u88ab\u94f8\u9020"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_owner")," \u662f token \u6240\u6709\u8005\u7684\u5730\u5740\uff0c\u5982\u679c\u6709\u4eba\u8d2d\u4e70\u4e86\u4ed6\u7684 NFT\uff0c\u53ef\u4ee5\u7ed9\u4ed6\u53d1\u9001\u5956\u52b1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_id")," \u662f NFT \u7684 id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"starting_price")," \u662f\u62cd\u5356\u8d77\u59cb\u4ef7\u683c\u548c\u5f00\u59cb\u4e0b\u964d\u7684\u4ef7\u683c")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("p",null,"\u8377\u5170\u5f0f\u62cd\u5356\u7684\u5408\u7ea6\u6e90\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction"},"gear-dapps/dutch-auction")," \u627e\u5230\u3002"),(0,i.kt)("p",null,"\u540c\u6837\u53ef\u4ee5\u627e\u5230\u57fa\u4e8e gtest \u5b9e\u73b0\u7684\u667a\u80fd\u5408\u7ea6\u6d4b\u8bd5\u8303\u4f8b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dutch-auction/tree/master/tests"},"gear-dapps/dutch-auction/tree/master/tests"),"\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u5728 Gear \u7684\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6\u7684\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/zh-cn/developing-contracts/testing/"},"\u5e94\u7528\u6d4b\u8bd5"),"\u3002"))}k.isMDXComponent=!0}}]);