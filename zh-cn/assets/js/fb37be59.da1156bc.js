"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8051],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_label:"\u90e8\u7f72",sidebar_position:5},p="\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",c={unversionedId:"developing-contracts/deploy",id:"developing-contracts/deploy",title:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",description:"\u9075\u5faa Actor \u6a21\u578b\u7684\u901a\u4fe1\u539f\u5219\uff0c\u521b\u5efa\u4e00\u4e2a\u53ea\u5305\u542b WASM \u6587\u4ef6\u7a0b\u5e8f\uff0c\u4f5c\u4e3a\u6709\u6548\u8f7d\u8377\u7684\u5177\u4f53\u4ea4\u6613\u7c7b\u578b\u4e4b\u4e00\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developing-contracts/deploy.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/deploy",permalink:"/zh-cn/developing-contracts/deploy",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/deploy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\u90e8\u7f72",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5408\u7ea6\u6d4b\u8bd5",permalink:"/zh-cn/developing-contracts/testing"},next:{title:"\u524d\u671f\u51c6\u5907",permalink:"/zh-cn/examples/prerequisites"}},s={},u=[{value:"\u901a\u8fc7\u7a0b\u5e8f\u63d0\u4ea4\u4e8b\u4ef6",id:"\u901a\u8fc7\u7a0b\u5e8f\u63d0\u4ea4\u4e8b\u4ef6",level:2},{value:"\u5982\u4f55\u90e8\u7f72",id:"\u5982\u4f55\u90e8\u7f72",level:2},{value:"\u901a\u8fc7 Gear GUI \u4e0a\u4f20",id:"\u901a\u8fc7-gear-gui-\u4e0a\u4f20",level:3},{value:"\u901a\u8fc7 Polkadot.js.org \u4e0a\u4f20",id:"\u901a\u8fc7-polkadotjsorg-\u4e0a\u4f20",level:3},{value:"\u901a\u8fc7 gear-js \u5e93\u4e0a\u4f20",id:"\u901a\u8fc7-gear-js-\u5e93\u4e0a\u4f20",level:3}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6"},"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6"),(0,i.kt)("p",null,"\u9075\u5faa Actor \u6a21\u578b\u7684\u901a\u4fe1\u539f\u5219\uff0c\u521b\u5efa\u4e00\u4e2a\u53ea\u5305\u542b WASM \u6587\u4ef6\u7a0b\u5e8f\uff0c\u4f5c\u4e3a\u6709\u6548\u8f7d\u8377\u7684\u5177\u4f53\u4ea4\u6613\u7c7b\u578b\u4e4b\u4e00\u3002"),(0,i.kt)("p",null,"\u5411\u533a\u5757\u94fe\u4e0a\u4f20\u4e00\u4e2a\u65b0\u7684\u7a0b\u5e8f\uff08\u667a\u80fd\u5408\u7ea6\uff09\u662f\u901a\u8fc7\u8c03\u7528\u81ea\u5b9a\u4e49 extrinsic ",(0,i.kt)("inlineCode",{parentName:"p"},"gear.submitProgram(code, salt, initPayload, gasLimit, value)"),"\u6765\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("p",null,"\u5b57\u6bb5\u542b\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"code: Bytes")," - \u4e8c\u8fdb\u5236 WASM \u4ee3\u7801\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"salt: Bytes")," - \u968f\u673a\u6570\u636e\uff0c\u4ee5\u786e\u5b9a\u5176\u552f\u4e00\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initPayload: Bytes")," - \u5728\u7a0b\u5e8f\u521d\u59cb\u5316\u671f\u95f4\u5c06\u7531 init() \u51fd\u6570\u5904\u7406\u7684 init \u4fe1\u606f\u6709\u6548\u8f7d\u8377\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit: u64")," -\u662f\u6307\u7528\u6237\u613f\u610f\u82b1\u5728\u5904\u7406\u4e0a\u4f20\u65b0\u7a0b\u5e8f\u4e0a\u7684 gas\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"value: u128")," - \u50cf\u65b0\u8d26\u6237\u8f6c\u8d26\u7684\u6570\u91cf\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u7a0b\u5e8f\u63d0\u4ea4\u4e8b\u4ef6"},"\u901a\u8fc7\u7a0b\u5e8f\u63d0\u4ea4\u4e8b\u4ef6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5916\u5728\u56e0\u7d20\u4ee3\u8868\u6765\u81ea\u5916\u90e8\u4e16\u754c\u7684\u4fe1\u606f\uff0c\u800c\u4e8b\u4ef6\u4ee3\u8868\u6765\u81ea\u94fe\u7684\u4fe1\u606f\u3002\u5916\u5728\u56e0\u7d20\u53ef\u4ee5\u89e6\u53d1\u4e8b\u4ef6\u3002")),(0,i.kt)("p",null,"\u4e3a\u63d0\u4ea4\u7a0b\u5e8f\u800c\u8c03\u7528\u7684\u5916\u5728\u56e0\u7d20\u4f1a\u89e6\u53d1\u4e00\u7cfb\u5217\u7684\u4e8b\u4ef6\u3002\u5b83\u4eec\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u51fa\u73b0\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gear \u7f51\u7edc\u8bd5\u56fe\u5728\u961f\u5217\u4e2d\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff0c\u76ee\u7684\u662f\u9a8c\u8bc1\u6e90\u8d26\u6237\u6709\u8db3\u591f\u7684\u4f59\u989d\u6765\u652f\u4ed8 ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"gas_limit")," \u7684\u53d1\u9001\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gear \u7f51\u7edc\u7684\u533a\u5757\u751f\u4ea7\u8005\u5c06\u4fe1\u606f\u53d1\u5e03\u5230\u533a\u5757\u4e2d\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gear \u7f51\u7edc\u9884\u7559\u4e86\u7528\u6237\u6307\u5b9a\u7684\u6700\u5927 gas \u91cf\uff0c\u7528\u4e8e\u7a0b\u5e8f\u521d\u59cb\u5316\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7a0b\u5e8f\u521b\u5efa\u548c\u521d\u59cb\u5316\u6d88\u606f\u5165\u961f\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"MessageInfo example:\n\n{\n  messageId: 0x4b92a8589e06def4ce06257138ae6fd16c44d065abee9580b4b607fe3c85baa2\n  programId: 0xf33843d1481416928d0a432cf357ee3e4dc562a2a963505a8efec75febb4f9de\n  origin: 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d\n}\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u521d\u59cb\u5316\u8fc7\u7a0b\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"gear.InitSuccess")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"gear.InitFailure")," \u4e8b\u4ef6\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"programId")," \u662f\u7a0b\u5e8f\u7684\u552f\u4e00\u5730\u5740\u3002")),(0,i.kt)("h2",{id:"\u5982\u4f55\u90e8\u7f72"},"\u5982\u4f55\u90e8\u7f72"),(0,i.kt)("p",null,"\u6709\u51e0\u79cd\u90e8\u7f72\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"\u901a\u8fc7-gear-gui-\u4e0a\u4f20"},"\u901a\u8fc7 Gear GUI \u4e0a\u4f20"),(0,i.kt)("p",null,"\u90e8\u7f72\u7a0b\u5e8f\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u5b98\u7f51 ",(0,i.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io"},"idea.gear-tech.io")," \u4e2d\u7684\u201cUpload program\u201d\u9009\u9879\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(4219).Z,width:"3077",height:"1730"})),(0,i.kt)("h3",{id:"\u901a\u8fc7-polkadotjsorg-\u4e0a\u4f20"},"\u901a\u8fc7 Polkadot.js.org \u4e0a\u4f20"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org"},"polkadot{.js}")," \u63d0\u4ea4\u7a0b\u5e8f\u3002\u5728 Developer -> Extrinsic \u83dc\u5355\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"gear.submitProgram")," extrinsic\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(4392).Z,width:"2872",height:"1418"})),(0,i.kt)("h3",{id:"\u901a\u8fc7-gear-js-\u5e93\u4e0a\u4f20"},"\u901a\u8fc7 gear-js \u5e93\u4e0a\u4f20"),(0,i.kt)("p",null,"Gear-js \u5e93\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u76f4\u89c2\u7684\u65b9\u5f0f\u6765\u8fde\u63a5 GEAR \u7ec4\u4ef6 API\uff0c\u5305\u62ec\u4e0e\u7a0b\u5e8f\u7684\u4ea4\u4e92\u3002\u66f4\u591a\u8be6\u60c5\u8bf7\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/api/connect"},"Gear API"),"\u3002"))}m.isMDXComponent=!0},4219:function(e,t,n){t.Z=n.p+"assets/images/idea-upload-b5c7b24d0e0f65ba59ecf94a306a7961.png"},4392:function(e,t,n){t.Z=n.p+"assets/images/polkadot-gui-451dfaa4c075e0aeb8710a85a802a89b.png"}}]);