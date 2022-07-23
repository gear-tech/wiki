"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[308],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_label:"Program State",sidebar_position:2},s="Gear program state",l={unversionedId:"developing-contracts/gear-program",id:"developing-contracts/gear-program",title:"Gear program state",description:"The program is the main unit of the Gear component. Program code is stored as an immutable WASM blob. Each program has a fixed amount of memory which persists between messagehandling (so-called static area).",source:"@site/docs/developing-contracts/gear-program.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/gear-program",permalink:"/developing-contracts/gear-program",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/gear-program.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Program State",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/node/troubleshooting"},next:{title:"Message Format",permalink:"/developing-contracts/messaging"}},p={},u=[],m={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-program-state"},"Gear program state"),(0,o.kt)("p",null,"The program is the main unit of the Gear component. Program code is stored as an immutable WASM blob. Each program has a fixed amount of memory which persists between messagehandling (so-called static area)."),(0,o.kt)("p",null,"The minimum structure of the Gear program is this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![no_std]\n\nuse gstd::msg;\n\n#[no_mangle]\npub unsafe extern "C" fn handle() {\n    msg::reply(b"Hello world!", 0).unwrap();\n}\n\n#[no_mangle]\npub unsafe extern "C" fn init() {}\n\n')),(0,o.kt)("p",null,"Optional ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function is called only once during program initialization and handles the incoming init payload if any."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," function (also optional) will be called every time the program receives an incoming message. In this case, the payload will be processed."))}g.isMDXComponent=!0}}]);