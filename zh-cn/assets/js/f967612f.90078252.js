"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7260],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"\u5f00\u53d1\u7f51\u7edc",sidebar_position:4},l="\u8fd0\u884c\u4e00\u4e2a Gear \u5f00\u53d1\u8282\u70b9",p={unversionedId:"node/dev-net",id:"node/dev-net",title:"\u8fd0\u884c\u4e00\u4e2a Gear \u5f00\u53d1\u8282\u70b9",description:"\u5f00\u53d1\u8282\u70b9\u5bf9\u4e8e\u5f00\u53d1\u548c\u8c03\u8bd5\u667a\u80fd\u5408\u7ea6\u975e\u5e38\u6709\u7528\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0a\u4f20\u7a0b\u5e8f\u5230\u672c\u5730\u8282\u70b9\uff0c\u5411\u7a0b\u5e8f\u53d1\u9001\u6d88\u606f\uff0c\u5e76\u9a8c\u8bc1\u7a0b\u5e8f\u7684\u903b\u8f91\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/node/dev-net.md",sourceDirName:"node",slug:"/node/dev-net",permalink:"/zh-cn/node/dev-net",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/dev-net.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u5f00\u53d1\u7f51\u7edc",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Backup and Restore",permalink:"/zh-cn/node/backup-restore"},next:{title:"\u591a\u8282\u70b9\u6a21\u5f0f",permalink:"/zh-cn/node/multi-node"}},u={},s=[],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fd0\u884c\u4e00\u4e2a-gear-\u5f00\u53d1\u8282\u70b9"},"\u8fd0\u884c\u4e00\u4e2a Gear \u5f00\u53d1\u8282\u70b9"),(0,o.kt)("p",null,"\u5f00\u53d1\u8282\u70b9\u5bf9\u4e8e\u5f00\u53d1\u548c\u8c03\u8bd5\u667a\u80fd\u5408\u7ea6\u975e\u5e38\u6709\u7528\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0a\u4f20\u7a0b\u5e8f\u5230\u672c\u5730\u8282\u70b9\uff0c\u5411\u7a0b\u5e8f\u53d1\u9001\u6d88\u606f\uff0c\u5e76\u9a8c\u8bc1\u7a0b\u5e8f\u7684\u903b\u8f91\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c Gear \u8282\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/zh-cn/node/setting-up/"},"https://wiki.gear-tech.io/zh-cn/node/setting-up/")," \u4e2d\u7684\u63cf\u8ff0\uff0c\u4e3a\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u7f16\u8bd1\u6216\u4e0b\u8f7d\u6700\u65b0\u6784\u5efa\u7248\u672c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c\u8282\u70b9\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gear-node --dev --tmp\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io/"},"https://idea.gear-tech.io/")," \u5e76\u8fde\u63a5\u5230\u672c\u5730\u5f00\u53d1\u8282\u70b9\u3002\u901a\u8fc7\u5de6\u4e0a\u65b9\u7684\u6309\u94ae\u70b9\u51fb\u7f51\u7edc\u5207\u6362\uff0c\u9009\u62e9 Development -> Local node\uff0c\u7136\u540e\u70b9\u51fb\u5207\u6362\u6309\u94ae\u3002\u4f7f\u7528 Idea \u53d1\u9001\u6d88\u606f\uff0c\u8bfb\u53d6\u7a0b\u5e8f\u72b6\u6001\u7b49\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u6e05\u9664\u5f00\u53d1\u94fe\u7684\u8282\u70b9\u6570\u636e\uff0c\u8bf7\u4f7f\u7528\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gear-node purge-chain --dev\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u8981\u8fd0\u884c\u4e00\u4e2a\u6709\u8be6\u7ec6\u65e5\u5fd7\u7684\u5f00\u53d1\u94fe\uff0c\u8bf7\u4f7f\u7528\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RUST_LOG=debug RUST_BACKTRACE=1 ./gear-node -lruntime=debug --dev\n")))}m.isMDXComponent=!0}}]);