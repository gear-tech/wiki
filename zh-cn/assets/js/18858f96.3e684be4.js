"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8442],{3905:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},i=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=a,m=k["".concat(u,".").concat(s)]||k[s]||d[s]||l;return n?r.createElement(m,c(c({ref:e},i),{},{components:n})):r.createElement(m,c({ref:e},i))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9023:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),c=["components"],o={sidebar_label:"\u521b\u5efa\u8d26\u6237",sidebar_position:1},u="\u5982\u4f55\u4f7f\u7528 polkadot.js \u63d2\u4ef6\u6765\u521b\u5efa Substrate \u8d26\u6237",p={unversionedId:"idea/account/create-account",id:"idea/account/create-account",title:"\u5982\u4f55\u4f7f\u7528 polkadot.js \u63d2\u4ef6\u6765\u521b\u5efa Substrate \u8d26\u6237",description:"\u5173\u952e\u4fe1\u606f\u53ca\u5b89\u5168",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/idea/account/create-account.md",sourceDirName:"idea/account",slug:"/idea/account/create-account",permalink:"/zh-cn/idea/account/create-account",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/idea/account/create-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u521b\u5efa\u8d26\u6237",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5728\u7ebf IDE",permalink:"/zh-cn/idea/online-ide"},next:{title:"SS58 \u5730\u5740\u683c\u5f0f",permalink:"/zh-cn/idea/account/ss58"}},i={},d=[{value:"\u5173\u952e\u4fe1\u606f\u53ca\u5b89\u5168",id:"\u5173\u952e\u4fe1\u606f\u53ca\u5b89\u5168",level:2},{value:"\u5b89\u5168\u4fdd\u5b58\u4f60\u7684\u79c1\u94a5",id:"\u5b89\u5168\u4fdd\u5b58\u4f60\u7684\u79c1\u94a5",level:3},{value:"\u4fdd\u5b58\u4f60\u7684\u8d26\u6237 JSON \u6587\u4ef6",id:"\u4fdd\u5b58\u4f60\u7684\u8d26\u6237-json-\u6587\u4ef6",level:3},{value:"Polkadot.js \u6d4f\u89c8\u5668\u63d2\u4ef6",id:"polkadotjs-\u6d4f\u89c8\u5668\u63d2\u4ef6",level:2},{value:"\u5b89\u88c5\u6d4f\u89c8\u5668\u63d2\u4ef6",id:"\u5b89\u88c5\u6d4f\u89c8\u5668\u63d2\u4ef6",level:3},{value:"\u521b\u5efa\u8d26\u6237",id:"\u521b\u5efa\u8d26\u6237",level:3},{value:"\u9009\u62e9\u7f51\u7edc",id:"\u9009\u62e9\u7f51\u7edc",level:3},{value:"\u547d\u540d\u8d26\u6237",id:"\u547d\u540d\u8d26\u6237",level:3},{value:"\u8f93\u5165\u5bc6\u7801",id:"\u8f93\u5165\u5bc6\u7801",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],k={toc:d};function s(t){var e=t.components,o=(0,a.Z)(t,c);return(0,l.kt)("wrapper",(0,r.Z)({},k,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528-polkadotjs-\u63d2\u4ef6\u6765\u521b\u5efa-substrate-\u8d26\u6237"},"\u5982\u4f55\u4f7f\u7528 polkadot.js \u63d2\u4ef6\u6765\u521b\u5efa Substrate \u8d26\u6237"),(0,l.kt)("h2",{id:"\u5173\u952e\u4fe1\u606f\u53ca\u5b89\u5168"},"\u5173\u952e\u4fe1\u606f\u53ca\u5b89\u5168"),(0,l.kt)("p",null,"\u6709\u591a\u79cd\u751f\u6210 Substrate \u6216 Polkadot \u8d26\u6237\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u76ee\u524d\u6700\u7b80\u5355\u5e76\u4e14\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u8fd9\u4e2a\u6d4f\u89c8\u5668\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u7ec4\u6210\u8d26\u6237\u7684\u91cd\u8981\u90e8\u5206\u6709\u4e24\u4e2a\uff1a\u5730\u5740\u548c\u79c1\u94a5\u3002\u5730\u5740\u662f\u8d26\u6237\u516c\u5f00\u7684\u65b9\u9762\uff0c\u5728\u672c\u8d28\u4e0a\u662f\u5411\u5176\u53d1\u9001\u4ea4\u6613\u7684\u4f4d\u7f6e\u3002\u79c1\u94a5\u662f\u8d26\u6237\u7684\u79c1\u6709\u90e8\u5206\uff0c\u4f7f\u4f60\u80fd\u591f\u8bbf\u95ee\u4f60\u7684\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4f60\u8d26\u6237\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u901a\u8fc7\u4f60\u7684\u52a9\u8bb0\u8bcd\uff08mnemonic\uff09\u6216\u4f60\u7684\u8d26\u6237JSON\u6587\u4ef6\u53ca\u5bc6\u7801\u3002\u786e\u4fdd\u8fd9\u4e24\u4e2a\u4fe1\u606f\u6e90\u7684\u5b89\u5168\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u5982\u679c\u4f60\u4e0e\u4efb\u4f55\u4eba\u5206\u4eab\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4ed6\u4eec\u5c31\u53ef\u4ee5\u5b8c\u5168\u8bbf\u95ee\u548c\u63a7\u5236\u4f60\u7684\u8d26\u6237\uff0c\u5305\u62ec\u4f60\u6240\u6709\u7684\u8d44\u91d1\u3002"),(0,l.kt)("h3",{id:"\u5b89\u5168\u4fdd\u5b58\u4f60\u7684\u79c1\u94a5"},"\u5b89\u5168\u4fdd\u5b58\u4f60\u7684\u79c1\u94a5"),(0,l.kt)("p",null,"\u4f60\u7684\u79cd\u5b50\u6216\u52a9\u8bb0\u8bcd\uff08mnemonic\uff09\u662f\u4f60\u7684\u5e10\u6237\u7684\u5173\u952e\u3002\u5982\u679c\u66f4\u6539\u8bbe\u5907\u3001\u5fd8\u8bb0\u5bc6\u7801\u6216\u4e22\u5931JSON\u6587\u4ef6\u4f7f\u4f60\u65e0\u6cd5\u8bbf\u95ee\u4f60\u7684\u5e10\u6237\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u79cd\u5b50\u6062\u590d\u4f60\u7684\u5e10\u6237\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u5982\u679c\u5176\u4ed6\u4eba\u53ef\u4ee5\u8bbf\u95ee\u4f60\u7684\u79cd\u5b50\u7684\u8bdd\uff0c\u4ed6\u4eec\u4e5f\u8bbf\u95ee\u4f60\u7684\u5e10\u6237\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u5c06\u79cd\u5b50\u50a8\u5b58\u5728\u5b89\u5168\u7684\u5730\u65b9\uff0c\u5982\u52a0\u5bc6\u7684\u786c\u76d8\uff0c\u975e\u7535\u5b50\u8bbe\u5907\u6216\u7406\u60f3\u7684\u7eb8\u5f20\u3002\u6211\u4eec\u8fd8\u5efa\u8bae\u91c7\u53d6\u5176\u4ed6\u5b89\u5168\u63aa\u65bd\uff0c\u4ee5\u9632\u6b62\u8be5\u526f\u672c\u7684\u7269\u7406\u635f\u574f\uff0c\u4f8b\u5982\u706b\u707e\u548c\u6c34\uff0c\u5e76\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\u5b58\u50a8\u591a\u4efd\u526f\u672c\u3002"),(0,l.kt)("p",null,"\u4f60\u4e0d\u5e94\u8be5\u5c06\u4f60\u7684\u79cd\u5b50\u5b58\u50a8\u5728\u4e00\u4e2a\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u8bbe\u5907\u4e0a\u3002"),(0,l.kt)("h3",{id:"\u4fdd\u5b58\u4f60\u7684\u8d26\u6237-json-\u6587\u4ef6"},"\u4fdd\u5b58\u4f60\u7684\u8d26\u6237 JSON \u6587\u4ef6"),(0,l.kt)("p",null,"\u4f60\u5e10\u6237\u7684 JSON \u6587\u4ef6\u662f\u7528\u5bc6\u7801\u52a0\u5bc6\u7684\u3002\u8fd9\u610f\u5473\u7740\u5c3d\u7ba1\u4f60\u53ef\u4ee5\u5c06\u5176\u5bfc\u5165\u5230\u4efb\u4f55\u94b1\u5305\u4e2d\uff0c\u4f46\u4f60\u9700\u8981\u4f7f\u7528\u5bc6\u7801\u624d\u80fd\u6210\u529f\u5bfc\u5165\u3002\u56e0\u4e3a\u6709\u8fd9\u4e2a\u989d\u5916\u7684\u5b89\u5168\u5c42\u2014\u2014\u5bc6\u7801\u2014\u2014\u4f60\u4e0d\u5fc5\u5728\u4fdd\u62a4\u5b83\u65f6\u90a3\u4e48\u8c28\u614e\u3002\u7136\u800c\uff0c\u4f7f\u7528\u4e0d\u7528\u4e8e\u5176\u4ed6\u4efb\u4f55\u7528\u9014\u7684\u6781\u5176\u5b89\u5168\u7684\u5bc6\u7801\u662f\u503c\u5f97\u7684\u3002\u4f60\u5e94\u8be5\u79bb\u7ebf\u8bb0\u5f55\u8fd9\u4e2a\u5bc6\u7801\u3002"),(0,l.kt)("h2",{id:"polkadotjs-\u6d4f\u89c8\u5668\u63d2\u4ef6"},"Polkadot.js \u6d4f\u89c8\u5668\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u6d4f\u89c8\u5668\u63d2\u4ef6\u662f\u521b\u5efa Substrate \u8d26\u6237\u7684\u6700\u7b80\u5355\u548c\u6700\u5b89\u5168\u7684\u65b9\u6cd5\u3002\u8fd9\u79cd\u65b9\u6cd5\u9700\u8981\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u6d4f\u89c8\u5668\u63d2\u4ef6\uff0c\u4f7f\u7528\u63d2\u4ef6\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u865a\u62df\u91d1\u5e93")," \u6765\u5c06\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u9001\u4ea4\u6613\u540c\u5b58\u50a8\u79c1\u94a5\u5206\u5f00\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u6d4f\u89c8\u5668\u63d2\u4ef6"},"\u5b89\u88c5\u6d4f\u89c8\u5668\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8be5\u6d4f\u89c8\u5668\u63d2\u4ef6\u53ef\u4ee5\u7528\u4e8e\u57fa\u4e8e Chromium \u548c Firefox \u7684\u6d4f\u89c8\u5668\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u94fe\u63a5\u6765\u5b89\u88c5\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Chromium")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension"},"FireFox")),(0,l.kt)("p",null,"\u4e00\u65e6\u5b89\u88c5\u63d2\u4ef6\u5b8c\u6210\uff0c\u4f60\u5e94\u8be5\u5728\u83dc\u5355\u680f\u770b\u5230\u4e00\u4e2a\u6a59\u8272\u548c\u767d\u8272\u7684 Polkadot \u5fbd\u6807\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(9003).Z,width:"1457",height:"282"})),(0,l.kt)("h3",{id:"\u521b\u5efa\u8d26\u6237"},"\u521b\u5efa\u8d26\u6237"),(0,l.kt)("p",null,"\u901a\u8fc7\u70b9\u51fb\u83dc\u5355\u680f\u4e0a\u7684\u5fbd\u6807\u6253\u5f00\u6269\u5c55\uff0c\u5e76\u5355\u51fb\u5927\u52a0\u53f7\u6309\u94ae\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5e10\u6237\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u5bfc\u822a\u5230\u53f3\u4e0a\u89d2\u8f83\u5c0f\u7684\u52a0\u53f7\u56fe\u6807\uff0c\u5e76\u9009\u62e9\u201c\u521b\u5efa\u65b0\u5e10\u6237\u201d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(4671).Z,width:"689",height:"557"})),(0,l.kt)("p",null,"\u7136\u540e\u6269\u5c55\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u79cd\u5b50\u5e76\u5c55\u793a\u621012\u4e2a\u5355\u8bcd\u7684\u5f62\u5f0f\uff0c\u4ee5\u65b9\u4fbf\u4f60\u8bb0\u5f55\u4e0b\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(8340).Z,width:"688",height:"363"})),(0,l.kt)("p",null,"\u4f60\u5e94\u5f53\u6309\u7167\u672c\u7ae0\u8282\u5f00\u5934\u63d0\u5230\u7684\u65b9\u6cd5\u6765\u5b89\u5168\u4fdd\u5b58\u8fd9\u4e2a\u79cd\u5b50\u77ed\u8bed\u3002"),(0,l.kt)("h3",{id:"\u9009\u62e9\u7f51\u7edc"},"\u9009\u62e9\u7f51\u7edc"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u70b9\u51fb\u201c\u7f51\u7edc\u201d\u4e0b\u62c9\u83dc\u5355\uff0c\u9009\u62e9\u4f60\u60f3\u8981\u521b\u5efa\u5e10\u6237\u7684\u7f51\u7edc\u3002\u5982\u679c\u4f60\u76ee\u524d\u6ca1\u6709\u7f51\u7edc\u9996\u9009\u9879\uff0c\u8bf7\u9009\u62e9\u201c\u5141\u8bb8\u5728\u4efb\u4f55\u94fe\u4e0a\u4f7f\u7528\u201d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(131).Z,width:"665",height:"500"})),(0,l.kt)("h3",{id:"\u547d\u540d\u8d26\u6237"},"\u547d\u540d\u8d26\u6237"),(0,l.kt)("p",null,"\u4f60\u9009\u62e9\u7684\u5e10\u6237\u540d\u79f0\u4ec5\u4f9b\u4f60\u4f7f\u7528\u3002\u5b83\u4e0d\u5b58\u50a8\u5728\u533a\u5757\u94fe\uff0c\u5b83\u5c06\u4e0d\u53ef\u89c1\uff0c\u9664\u4e86\u4f60\u81ea\u5df1\u6216\u4efb\u4f55\u4eba\u6709\u8bbf\u95ee\u8fd9\u4e2a\u5e10\u6237\u3002\u5982\u679c\u4f60\u8ba1\u5212\u4f7f\u7528\u591a\u4e2a\u5e10\u6237\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5c3d\u53ef\u80fd\u8be6\u7ec6\u5730\u586b\u5199\u4f60\u7684\u5e10\u6237\u540d\u79f0\uff0c\u4ee5\u907f\u514d\u5c06\u6765\u7684\u6df7\u6dc6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(5975).Z,width:"665",height:"87"})),(0,l.kt)("h3",{id:"\u8f93\u5165\u5bc6\u7801"},"\u8f93\u5165\u5bc6\u7801"),(0,l.kt)("p",null,"\u4f60\u5728\u6b64\u9009\u62e9\u7684\u5bc6\u7801\u5c06\u7528\u4e8e\u52a0\u5bc6\u8be5\u5e10\u6237\u7684\u4fe1\u606f\u3002\u5f53\u4f60\u8bd5\u56fe\u5904\u7406\u4efb\u4f55\u7c7b\u578b\u7684\u4f20\u51fa\u4e8b\u52a1\u65f6\uff0c\u6216\u8005\u4f7f\u7528\u5b83\u5bf9\u6d88\u606f\u8fdb\u884c\u52a0\u5bc6\u7b7e\u540d\u65f6\uff0c\u4f60\u5c06\u9700\u8981\u91cd\u65b0\u8f93\u5165\u5b83\u3002\u6b64\u5bc6\u7801\u5b58\u50a8\u5728\u672c\u5730\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u5bc6\u7801",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u4e0d\u4fdd\u62a4"),"\u4f60\u7684\u79cd\u5b50\u77ed\u8bed\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img alt",src:n(8648).Z,width:"665",height:"88"})),(0,l.kt)("p",null,"\u8bbe\u7f6e\u597d\u5bc6\u7801\u540e\uff0c\u70b9\u51fb\u201c\u6dfb\u52a0\u5e26\u6709\u751f\u6210\u79cd\u5b50\u7684\u5e10\u6237\u201d\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u5df2\u7ecf\u6210\u529f\u5730\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkado .j")," \u6d4f\u89c8\u5668\u63d2\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u5e10\u6237\u3002"),(0,l.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u8d26\u6237\u662f\u4fbf\u643a\u5f0f\u7684\u5417\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u662f\u7684\uff0c\u53ea\u8981\u4f60\u62e5\u6709\u79cd\u5b50\u77ed\u8bed\u6216\u8005\u8d26\u6237\u7684 JSON \u6587\u4ef6\uff0c\u4f60\u5c31\u80fd\u5728\u4efb\u4f55\u4e0d\u540c\u8bbe\u5907\u548c\u94b1\u5305\u4e0a\u8bbf\u95ee\u4f60\u7684\u8d26\u6237")),(0,l.kt)("p",null,"\u6211\u80fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u6d4f\u89c8\u5668\u63d2\u4ef6\u91cc\u76f4\u63a5\u53d1\u8d77\u4ea4\u6613\u5417\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u6d4f\u89c8\u5668\u63d2\u4ef6\u91cc\u4e0d\u80fd\u76f4\u63a5\u53d1\u8d77\u4ea4\u6613\u3002\u53d1\u8d77\u4ea4\u6613\u9700\u8981\u4f60\u5728\u6d4f\u89c8\u5668\u4e2d\u542f\u52a8",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"polkadot.js apps"),"\u3002\n\u5728\u4f60\u53ef\u4ee5\u53d1\u8d77\u4ea4\u6613\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5141\u8bb8 ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot.js app")," \u8bbf\u95ee\u4f60\u7684\u8d26\u6237\u3002\n\u6d4f\u89c8\u5668\u63d2\u4ef6\u4fdd\u5b58\u4f60\u7684\u8d26\u6237\u4fe1\u606f\uff0c\u4f60\u9700\u8981\u9009\u62e9\u54ea\u4e9b\u7f51\u7ad9\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u4fe1\u606f\u3002")))}s.isMDXComponent=!0},9003:function(t,e,n){e.Z=n.p+"assets/images/create-account-1-c9d818a47ebb75014b8257194bf3cc2a.png"},4671:function(t,e,n){e.Z=n.p+"assets/images/create-account-2-64ad24cb5f4184b318bbc8709d8e54fb.png"},131:function(t,e,n){e.Z=n.p+"assets/images/create-account-3-49a5e9fc0c7166b6b29bdf7ec99002d6.png"},8340:function(t,e,n){e.Z=n.p+"assets/images/create-account-3_-0cd45abefaca61be49928dfe4d3c0558.png"},5975:function(t,e){e.Z="data:image/png;base64,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"},8648:function(t,e){e.Z="data:image/png;base64,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"}}]);