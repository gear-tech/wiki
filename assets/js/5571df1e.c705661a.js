"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5611],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,b=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1577:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"Glossary"},s="Glossary",c={unversionedId:"gear/glossary",id:"gear/glossary",title:"Glossary",description:"Account",source:"@site/docs/gear/glossary.md",sourceDirName:"gear",slug:"/gear/glossary",permalink:"/gear/glossary",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/glossary.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/"},next:{title:"Substrate",permalink:"/gear/introduction"}},d={},u=[{value:"Account",id:"account",level:3},{value:"Actor",id:"actor",level:3},{value:"Actor Model",id:"actor-model",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Block",id:"block",level:3},{value:"Block height",id:"block-height",level:3},{value:"Block hash",id:"block-hash",level:3},{value:"Bridges",id:"bridges",level:3},{value:"Collators",id:"collators",level:3},{value:"Decentralized Application (dApp)",id:"decentralized-application-dapp",level:3},{value:"Decentralized Autonomous Organization (DAO)",id:"decentralized-autonomous-organization-dao",level:3},{value:"Decentralized Finance (DeFi)",id:"decentralized-finance-defi",level:3},{value:"GRB",id:"grb",level:3},{value:"Layer 0 protocol",id:"layer-0-protocol",level:3},{value:"Layer 1 blockchain protocol",id:"layer-1-blockchain-protocol",level:3},{value:"Layer 2 blockchain protocol",id:"layer-2-blockchain-protocol",level:3},{value:"Ledger",id:"ledger",level:3},{value:"Memory Parallelism",id:"memory-parallelism",level:3},{value:"Node",id:"node",level:3},{value:"Non Fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:3},{value:"Parachain",id:"parachain",level:3},{value:"Polkadot",id:"polkadot",level:3},{value:"Relay Chain",id:"relay-chain",level:3},{value:"Rust",id:"rust",level:3},{value:"Sharding",id:"sharding",level:3},{value:"Smart Contracts",id:"smart-contracts",level:3},{value:"Substrate",id:"substrate",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Validator",id:"validator",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Web3",id:"web3",level:3},{value:"WebAssembly (WASM)",id:"webassembly-wasm",level:3}],h={toc:u};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h3",{id:"account"},"Account"),(0,r.kt)("p",null,"In cryptocurrency systems, a user is represented by an account that has address(es) with specific balances associated with their address. Besides that, an account can contain additional details such as contact information, eligibility for rewards, and more."),(0,r.kt)("h3",{id:"actor"},"Actor"),(0,r.kt)("p",null,"A computational entity that, in response to a message it receives, can concurrently: send a finite number of messages to other actors; create a finite number of new actors; designate the behavior to be used for the next message it receives."),(0,r.kt)("h3",{id:"actor-model"},"Actor Model"),(0,r.kt)("p",null,"The principle of the Actor model approach for communication is that programs never share any state and just exchange messages between each other."),(0,r.kt)("h3",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"A blockchain is a decentralized and distributed system of recording information in ways that make it almost impossible to change, hack or manipulate."),(0,r.kt)("h3",{id:"block"},"Block"),(0,r.kt)("p",null,"A data structure in the blockchain database, where transaction data in a cryptocurrency blockchain are permanently recorded. A block records some or all of the most recent transactions not yet validated by the network. Once the data is validated, the block is closed."),(0,r.kt)("h3",{id:"block-height"},"Block height"),(0,r.kt)("p",null,"A number of blocks preceding it in the blockchain."),(0,r.kt)("h3",{id:"block-hash"},"Block hash"),(0,r.kt)("p",null,"A unique hash of the block that is aimed to maintain the integrity of the data stored in the block."),(0,r.kt)("h3",{id:"bridges"},"Bridges"),(0,r.kt)("p",null,"Bridges are ways for two economically sovereign blockchains to communicate with each other."),(0,r.kt)("h3",{id:"collators"},"Collators"),(0,r.kt)("p",null,"Collators maintain parachains by collecting parachain transactions from users and producing state transition proofs for Relay Chain validators."),(0,r.kt)("h3",{id:"decentralized-application-dapp"},"Decentralized Application (dApp)"),(0,r.kt)("p",null,"A Decentralized Application, or dApp for short, is an application that can operate autonomously, typically through the use of smart contracts, that runs on a blockchain network."),(0,r.kt)("h3",{id:"decentralized-autonomous-organization-dao"},"Decentralized Autonomous Organization (DAO)"),(0,r.kt)("p",null,"A Decentralized Autonomous Organization, or DAO for short, is an organization that\u2019s represented by rules encoded in a smart contract that is transparent and controlled by the organization members instead of being influenced by central entities."),(0,r.kt)("h3",{id:"decentralized-finance-defi"},"Decentralized Finance (DeFi)"),(0,r.kt)("p",null,"Decentralized Finance, or DeFi for short, are financial services that are powered by decentralized applications and blockchain technology."),(0,r.kt)("h3",{id:"grb"},"GRB"),(0,r.kt)("p",null,"GRB is Gear\u2019s bonus reward that can be earned by taking part in events or contributing to the Gear protocol."),(0,r.kt)("h3",{id:"layer-0-protocol"},"Layer 0 protocol"),(0,r.kt)("p",null,"The ground floor for all blockchain protocols. Examples of operating Layer 0 blockchains include Kusama and Polkadot."),(0,r.kt)("h3",{id:"layer-1-blockchain-protocol"},"Layer 1 blockchain protocol"),(0,r.kt)("p",null,"A term used to describe the underlying main blockchain architecture. It\u2019s a set of solutions that improve the base protocol itself to make the overall system more scalable. The two approaches proposed for implementing Layer 1 solutions include the consensus protocol and sharding. Examples of operating Layer 1 blockchains include Bitcoin, Ethereum etc."),(0,r.kt)("h3",{id:"layer-2-blockchain-protocol"},"Layer 2 blockchain protocol"),(0,r.kt)("p",null,"A secondary framework or protocol that is built on top of an existing blockchain system. The main goal of these protocols is to solve the transaction speed and scaling difficulties that are being faced by the major cryptocurrency networks."),(0,r.kt)("h3",{id:"ledger"},"Ledger"),(0,r.kt)("p",null,"A list of entries containing transactions signed by account owners. A blockchain is a type of distributed ledger."),(0,r.kt)("h3",{id:"memory-parallelism"},"Memory Parallelism"),(0,r.kt)("p",null,"Memory-level parallelism is a term in computer architecture referring to the ability to have pending multiple memory operations, in particular cache misses or translation lookaside buffer misses, at the same time."),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"A computer device that runs on a blockchain network for message processing; it can also be a validator (block producer). Node makes the information available to everyone via a connected device."),(0,r.kt)("h3",{id:"non-fungible-tokens-nfts"},"Non Fungible Tokens (NFTs)"),(0,r.kt)("p",null,"A Non Fungible Token is a unique unit of data that\u2019s represented as a cryptographic token that\u2019s stored on a blockchain."),(0,r.kt)("h3",{id:"parachain"},"Parachain"),(0,r.kt)("p",null,"Parachains are application specific data structures that are integrated into the Polkadot and Kusama networks by connecting to the main Relay Chain. They enable transactions to be spread out and processed in parallel over an ecosystem."),(0,r.kt)("h3",{id:"polkadot"},"Polkadot"),(0,r.kt)("p",null,"Polkadot is an open-source blockchain network that is aiming to enable cross-chain communication between different blockchain networks."),(0,r.kt)("h3",{id:"relay-chain"},"Relay Chain"),(0,r.kt)("p",null,"The Relay Chain is the central chain of the Polkadot network. It is responsible for the networks' shared security, consensus and transaction settlements."),(0,r.kt)("h3",{id:"rust"},"Rust"),(0,r.kt)("p",null,"A multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++."),(0,r.kt)("h3",{id:"sharding"},"Sharding"),(0,r.kt)("p",null,"Sharding is the process of dividing a blockchain\u2019s database into smaller \u201cshards\u201d to spread the transactional load to help make the network more scalable."),(0,r.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,"A smart contract is a transactional computer program that can execute transactions automatically once certain conditions have been met, without any intervention."),(0,r.kt)("h3",{id:"substrate"},"Substrate"),(0,r.kt)("p",null,"Substrate is the modular framework for building customized blockchains and the foundation for the whole Polkadot ecosystem. Substrate allows developers to quickly build and launch a blockchain that will be capable of connecting to the Polkadot or Kusama networks."),(0,r.kt)("h3",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A record in a digital ledger that represents an atomic event in a blockchain. In case of Gear transactions can be 4 types: create a program; send a message; dequeue messages; balance transfers."),(0,r.kt)("h3",{id:"validator"},"Validator"),(0,r.kt)("p",null,"A node that verifies transactions on a blockchain and produces blocks."),(0,r.kt)("h3",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"A blockchain wallet is an application that allows users to store and manage their cryptocurrencies."),(0,r.kt)("h3",{id:"web3"},"Web3"),(0,r.kt)("p",null,"Web3 is the third evolution of the internet that is heavily supported by blockchain technology and decentralized applications."),(0,r.kt)("h3",{id:"webassembly-wasm"},"WebAssembly (WASM)"),(0,r.kt)("p",null,"WebAssembly is a way to run applications in programming languages other than JavaScript as web pages. Essentially, WASM is just a virtual machine that runs on all modern browsers. But whereas in the past you were required to use JavaScript to run code in a web page, WASM makes it possible to run code in browsers with programming languages other than JavaScript."))}p.isMDXComponent=!0}}]);