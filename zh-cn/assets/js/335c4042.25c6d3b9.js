"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1884],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),g=o,f=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5395:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_label:"PING-PONG",sidebar_position:2},p="PING-PONG",l={unversionedId:"examples/ping",id:"examples/ping",title:"PING-PONG",description:"\u4f7f\u7528 Gear \u5199\u4ee3\u7801\u5f88\u5bb9\u6613\uff01",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/ping.md",sourceDirName:"examples",slug:"/examples/ping",permalink:"/zh-cn/examples/ping",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/ping.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"PING-PONG",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u524d\u671f\u51c6\u5907",permalink:"/zh-cn/examples/prerequisites"},next:{title:"gFT (ERC-20)",permalink:"/zh-cn/examples/gft-20"}},c={},u=[],m={toc:u};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ping-pong"},"PING-PONG"),(0,a.kt)("p",null,"\u4f7f\u7528 Gear \u5199\u4ee3\u7801\u5f88\u5bb9\u6613\uff01"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7ecf\u5178\u7684 Ping-pong \u5408\u7ea6\u5c0f\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![no_std]\n\nuse gstd::{debug, msg, prelude::*};\n\nstatic mut MESSAGE_LOG: Vec<String> = vec![];\n\n#[no_mangle]\npub unsafe extern "C" fn handle() {\n    let new_msg = String::from_utf8(msg::load_bytes()).expect("Invalid message");\n\n    if new_msg == "PING" {\n        msg::reply_bytes("PONG", 0).unwrap();\n    }\n\n    MESSAGE_LOG.push(new_msg);\n\n    debug!("{:?} total message(s) stored: ", MESSAGE_LOG.len());\n\n    for log in MESSAGE_LOG.iter() {\n        debug!(log);\n    }\n}\n\n/// and a simple unit test:\n\n#[cfg(test)]\nmod tests {\n    extern crate std;\n\n    use gtest::{Log, Program, System};\n\n    #[test]\n    fn it_works() {\n        let system = System::new();\n        system.init_logger();\n\n        let program = Program::current(&system);\n\n        let res = program.send_bytes(42, "INIT");\n        assert!(res.log().is_empty());\n\n        let res = program.send_bytes(42, "PING");\n        let log = Log::builder().source(1).dest(42).payload_bytes("PONG");\n        assert!(res.contains(&log));\n    }\n}\n')),(0,a.kt)("p",null,"\u8be5\u7a0b\u5e8f\u53ea\u662f\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"PONG")," \u53d1\u56de\u5411\u5b83\u53d1\u9001 ",(0,a.kt)("inlineCode",{parentName:"p"},"PING"),"\u7684\u539f\u59cb\u53d1\u9001\u8005\u3002"),(0,a.kt)("p",null,"GitHub \u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/ping"},"https://github.com/gear-dapps/ping")))}g.isMDXComponent=!0}}]);