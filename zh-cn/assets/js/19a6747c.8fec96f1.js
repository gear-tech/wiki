"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1423],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1763:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={sidebar_position:7,sidebar_label:"\u8bfb\u53d6\u72b6\u6001"},c="\u8bfb\u53d6\u72b6\u6001",u={unversionedId:"api/read-state",id:"api/read-state",title:"\u8bfb\u53d6\u72b6\u6001",description:"\u4ee5\u4e0b\u67e5\u8be2\u7528\u4e8e\u8bfb\u53d6\u7a0b\u5e8f\u7684\u72b6\u6001\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/read-state.md",sourceDirName:"api",slug:"/api/read-state",permalink:"/zh-cn/api/read-state",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/read-state.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"\u8bfb\u53d6\u72b6\u6001"},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u6d88\u606f",permalink:"/zh-cn/api/send-message"},next:{title:"Metadata & Type Creation",permalink:"/zh-cn/api/metadata-type-creation"}},l={},s=[{value:"Cookbook",id:"cookbook",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8bfb\u53d6\u72b6\u6001"},"\u8bfb\u53d6\u72b6\u6001"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u7528\u4e8e\u8bfb\u53d6\u7a0b\u5e8f\u7684\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const metaWasm = fs.readFileSync('path/to/meta.wasm');\nconst state = await gearApi.programState.read(programId, metaWasm, inputValue?);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"programId")," is a payload if program expects it in ",(0,o.kt)("inlineCode",{parentName:"p"},"meta_state")),(0,o.kt)("p",null,"\u5982\u679c\u7a0b\u5e8f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"meta_state")," \u4e2d\u671f\u5f85 ",(0,o.kt)("inlineCode",{parentName:"p"},"programId"),"\uff0c\u90a3\u4e48",(0,o.kt)("inlineCode",{parentName:"p"},"programId"),"\u5c31\u662f\u4e00\u4e2a\u6d88\u606f\u4f53\u3002"),(0,o.kt)("h2",{id:"cookbook"},"Cookbook"),(0,o.kt)("p",null,"\u8981\u5728\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bfb\u53d6\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"\u6d4f\u89c8\u5668 API \u4ece meta.wasm \u83b7\u53d6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst state = fetch(metaFile)\n      .then((res) => res.arrayBuffer())\n      .then((arrayBuffer) => Buffer.from(arrayBuffer))\n      .then((buffer) =>\n        api.programState.read(ID_CONTRACT_ADDRESS, buffer, {\n          AnyPayload: 'Null',\n        }),\n      )\n      .then((state) => state.toHuman())\n\n")))}m.isMDXComponent=!0}}]);