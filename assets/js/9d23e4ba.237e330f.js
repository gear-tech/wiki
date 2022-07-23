"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2776],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1994:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,sidebar_label:"Getting started"},c="Getting started",l={unversionedId:"api/getting-started",id:"api/getting-started",title:"Getting started",description:"Gear-JS API",source:"@site/docs/api/getting-started.mdx",sourceDirName:"api",slug:"/api/getting-started",permalink:"/api/getting-started",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Crowdsale(ICO)",permalink:"/examples/crowdsale-ico"},next:{title:"Keyring",permalink:"/api/keyring"}},p={},u=[{value:"Gear-JS API",id:"gear-js-api",level:2},{value:"Installation",id:"installation",level:2},{value:"Getting started",id:"getting-started-1",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"gear-js-api"},"Gear-JS API"),(0,o.kt)("p",null,"The Gear-JS API provides a set of utilities, libraries and tools that enable JavaScript applications to interact with smart contracts running in the Gear network via queries to a Gear node."),(0,o.kt)("p",null,"Sections below describe tools that you can use in your JS application to implement basic functions such as managing your key pair (account), calculating gas required for network operations, uploading program in the network, sending a message to a program, reading program's state, getting messages from the user's mailbox, working with metadata and more. Some useful code snippets are provided in the Cookbook section."),(0,o.kt)("p",null,"The basic API is implemented on the Substrate layer and is the same for all Substrate-based networks. The Gear-JS API code is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-js"},"GitHub"),". Complete API overview can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},"Polkadot documentation portal"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @gear-js/api\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @gear-js/api\n")),(0,o.kt)("h2",{id:"getting-started-1"},"Getting started"),(0,o.kt)("p",null,"Start the API connection to the local running RPC node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearApi } from '@gear-js/api';\n\nconst gearApi = await GearApi.create();\n")),(0,o.kt)("p",null,"You can also connect to a different node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const gearApi = await GearApi.create({\n  providerAddress: 'wss://someIP:somePort',\n});\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Below are a few entry points for interact with Gear RPC Node."),(0,o.kt)("p",{parentName:"admonition"},"For connection to local node use:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ws://127.0.0.1:9944\n")),(0,o.kt)("p",{parentName:"admonition"},"For connection to Testnet use:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wss://rpc-node.gear-tech.io:443\n"))),(0,o.kt)("p",null,"Getting node info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const chain = await gearApi.chain();\nconst nodeName = await gearApi.nodeName();\nconst nodeVersion = await gearApi.nodeVersion();\nconst genesis = gearApi.genesisHash.toHex();\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This simple example describes how to subscribe to a new blocks and get chain spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function connect() {\n  const gearApi = await GearApi.create();\n\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    gearApi.chain(),\n    gearApi.nodeName(),\n    gearApi.nodeVersion(),\n  ]);\n\n  console.log(\n    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,\n  );\n\n  const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {\n    console.log(\n      `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,\n    );\n  });\n}\nconnect().catch(console.error);\n")))}g.isMDXComponent=!0}}]);