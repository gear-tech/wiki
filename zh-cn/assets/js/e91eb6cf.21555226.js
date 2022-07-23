"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2441],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,k=s["".concat(l,".").concat(d)]||s[d]||c[d]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6151:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],u={sidebar_label:"gMT (ERC-1155)",sidebar_position:5},l="Gear Multiple Token (gMT)",p={unversionedId:"examples/gmt-1155",id:"examples/gmt-1155",title:"Gear Multiple Token (gMT)",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/examples/gmt-1155.md",sourceDirName:"examples",slug:"/examples/gmt-1155",permalink:"/zh-cn/examples/gmt-1155",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/gmt-1155.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"gMT (ERC-1155)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"gNFT (ERC-721)",permalink:"/zh-cn/examples/gnft-721"},next:{title:"Gear Feeds",permalink:"/zh-cn/examples/feeds"}},m={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"multitoken \u5b9e\u73b0",id:"multitoken-\u5b9e\u73b0",level:2},{value:"\u90e8\u7f72 multitoken \u5408\u7ea6",id:"\u90e8\u7f72-multitoken-\u5408\u7ea6",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-multiple-token-gmt"},"Gear Multiple Token (gMT)"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406\u591a\u79cd\u4ee3\u5e01\u7c7b\u578b\u7684\u5408\u7ea6\u7684\u6807\u51c6\u63a5\u53e3\u3002\u5355\u4e2a\u5408\u7ea6\u53ef\u4ee5\u5305\u62ec\u540c\u8d28\u5316\u4ee3\u5e01\u3001\u975e\u540c\u8d28\u5316\u4ee3\u5e01\u6216\u5176\u4ed6\u914d\u7f6e\uff08\u5982\u534a\u540c\u8d28\u5316\u4ee3\u5e01\uff09\u7684\u4efb\u4f55\u7ec4\u5408\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u60f3\u6cd5\u5f88\u7b80\u5355\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u4ee3\u8868\u548c\u63a7\u5236\u4efb\u4f55\u6570\u91cf\u7684\u540c\u8d28\u5316\u548c\u975e\u540c\u8d28\u5316\u7684\u4ee3\u5e01\u7c7b\u578b\u3002\u8fd9\u6837\u4e00\u6765\uff0cgMT \u4ee3\u5e01\u53ef\u4ee5\u5177\u6709\u4e0e GFT \u548c GNFT \u4ee3\u5e01\u76f8\u540c\u7684\u529f\u80fd\uff0c\u751a\u81f3\u53ef\u4ee5\u540c\u65f6\u517c\u5bb9\u4e24\u8005\u3002gMT \u4e0e ERC-1155 \u662f\u76f8\u4f3c\u7684\u3002"),(0,o.kt)("h2",{id:"multitoken-\u5b9e\u73b0"},"multitoken \u5b9e\u73b0"),(0,o.kt)("p",null,"\u6bcf\u4e2a multi-token \u5408\u7ea6\u5fc5\u987b\u652f\u6301\u7684\u51fd\u6570\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"mint(to, []token_id, []metadata, []amounts)")," \u662f\u4e00\u4e2a\u521b\u5efa\u5355\u4e2a/\u591a\u4e2a\u65b0\u4ee3\u5e01\u7684\u51fd\u6570\uff08\u4e0e\u91d1\u989d\u6570\u7ec4\u4e2d\u7684\u76f8\u5e94\u4f9b\u5e94\uff09\u3002\u5143\u6570\u636e\u53ef\u4ee5\u5305\u62ec\u5173\u4e8e\u4ee3\u5e01\u7684\u4efb\u4f55\u4fe1\u606f\uff1a\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u6307\u5411\u7279\u5b9a\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u4e5f\u53ef\u4ee5\u662f\u4ee3\u5e01\u7684\u63cf\u8ff0\uff0c\u7b49\u7b49\u3002\u5143\u6570\u636e\u53ea\u5b58\u50a8\u5728NFTs\u4e2d\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"burn(from, []token_id, []amounts)")," - \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u4ece\u5408\u7ea6\u4e2d\u5220\u9664\u6307\u5b9a\u6570\u91cf\u7684\u5177\u6709\u6b64 id \u7684\u4ee3\u5e01;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"transfer(to, []token_id, []amounts)")," - \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5141\u8bb8\u4f60\u5c06 token \u4e0e token_id \u8f6c\u79fb\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," \u5e10\u6237;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"approve/revoke approval(approved account, token_id)")," - \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5141\u8bb8\u4f60\u5c06\u5904\u7f6e\u4ee4\u724c\u7684\u6743\u5229\u4ea4\u7ed9\u6307\u5b9a\u7684\u6279\u51c6\u7684\u8d26\u6237\u3002\u8fd9\u4e2a\u529f\u80fd\u5728\u5e02\u573a\u6216\u62cd\u5356\u4f1a\u4e0a\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5f53\u6240\u6709\u8005\u60f3\u51fa\u552e\u4ed6\u7684\u4ee3\u5e01\u65f6\uff0c\u4ed6\u4eec\u53ef\u4ee5\u628a\u5b83\u653e\u5728\u5e02\u573a/\u62cd\u5356\u4f1a\u4e0a\uff0c\u6240\u4ee5\u5408\u7ea6\u5c06\u80fd\u591f\u5728\u67d0\u4e2a\u65f6\u5019\u5c06\u8fd9\u4e2a\u4ee3\u5e01\u53d1\u9001\u7ed9\u65b0\u7684\u6240\u6709\u8005\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"balance(account)")," - \u662f\u8fd4\u56de\u7528\u6237\u62e5\u6709\u7684\u4e0d\u540c\u4ee4\u724c\u7684 ID \u548c\u6570\u91cf\u7684\u51fd\u6570\uff1b"))),(0,o.kt)("p",null,"gMT \u5408\u7ea6\u7684\u5b9e\u73b0\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/src/multitoken"},"gear-lib/multitoken"),"\u3002"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528\u9ed8\u8ba4\u5b9e\u73b0\u9700\u8981\u5728 ",(0,o.kt)("em",{parentName:"p"},"Cargo.toml")," \u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'gear-contract-libraries = { path = "https://github.com/gear-dapps/gear-lib" }\nderive_traits = { path = "https://github.com/gear-dapps/gear-lib/tree/master/derive" }\n')),(0,o.kt)("p",null,"multitoken \u5408\u7ea6\u7684\u5b58\u50a8\u72b6\u6001\u5728\u7ed3\u6784 ",(0,o.kt)("inlineCode",{parentName:"p"},"MTKState")," \u4e2d\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default)]\npub struct MTKState {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n    pub balances: BTreeMap<TokenId, BTreeMap<ActorId, u128>>,\n    pub approvals: BTreeMap<ActorId, BTreeMap<ActorId, bool>>,\n    pub token_metadata: BTreeMap<TokenId, TokenMetadata>,\n    // owner for nft\n    pub owners: BTreeMap<TokenId, ActorId>,\n}\n")),(0,o.kt)("p",null,"\u8981\u91cd\u590d\u4f7f\u7528\u9ed8\u8ba4\u7ed3\u6784\uff0c\u4f60\u9700\u8981\u6d3e\u751f\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"MTKTokenState"),"\uff0c\u5e76\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"#[MTKStateKeeper]")," \u5c5e\u6027\u6807\u8bb0\u76f8\u5e94\u7684\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 MTK \u5408\u7ea6\u4e2d\u6dfb\u52a0\u5b57\u6bb5\u3002\u4f8b\u5982\uff0c\u5728\u5408\u7ea6\u4e2d\u6dfb\u52a0\u6240\u6709\u8005\u7684\u5730\u5740\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," \u5c06\u8ddf\u8e2a\u5f53\u524d\u7684\u4ee3\u5e01\u6570\u91cf\uff0c\u4f9b\u5e94\u91cf\u50a8\u5b58\u4e0d\u540c\u4ee3\u5e01\u7684\u94f8\u9020\u6570\u91cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use derive_traits::{MTKCore, MTKTokenState, StateKeeper};\nuse gear_contract_libraries::multitoken::{io::*, mtk_core::*, state::*};\n\n#[derive(Debug, Default, MTKTokenState, MTKCore, StateKeeper)]\npub struct SimpleMTK {\n    #[MTKStateKeeper]\n    pub tokens: MTKState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub supply: BTreeMap<TokenId, u128>,\n}\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u7ee7\u627f\u9ed8\u8ba4\u7684\u903b\u8f91\u529f\u80fd\uff0c\u4f60\u9700\u8981\u6d3e\u751f\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"MTKCore")," \u3002\u76f8\u5e94\u5730\uff0c\u4e3a\u4e86\u8bfb\u53d6\u5408\u7ea6\u72b6\u6001\uff0c\u4f60\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"MTKTokenState"),"\u3002\n\u8ba9\u6211\u4eec\u6765\u7f16\u5199 MTK \u5408\u7ea6\u7684\u6574\u4f53\u5b9e\u73b0\u3002\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u6d88\u606f\uff0c\u5b83\u5c06\u521d\u59cb\u5316\u5408\u7ea6\u548c\u5408\u7ea6\u5c06\u5904\u7406\u7684\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitMTK {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n}\n\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum MTKAction {\n    Mint {\n        token_id: TokenId,\n        amount: u128,\n        token_metadata: Option<TokenMetadata>,\n    },\n    Burn {\n        token_id: TokenId,\n        amount: u128,\n    },\n    BalanceOf {\n        account: ActorId,\n        id: TokenId,\n    },\n    BalanceOfBatch {\n        accounts: Vec<ActorId>,\n        ids: Vec<TokenId>,\n    },\n    MintBatch {\n        ids: Vec<TokenId>,\n        amounts: Vec<u128>,\n        tokens_metadata: Vec<Option<TokenMetadata>>,\n    },\n    TransferFrom {\n        from: ActorId,\n        to: ActorId,\n        id: TokenId,\n        amount: u128,\n    },\n    BatchTransferFrom {\n        from: ActorId,\n        to: ActorId,\n        ids: Vec<TokenId>,\n        amounts: Vec<u128>,\n    },\n    BurnBatch {\n        ids: Vec<TokenId>,\n        amounts: Vec<u128>,\n    },\n    Approve {\n        account: ActorId,\n    },\n    RevokeApproval {\n        account: ActorId,\n    },\n}\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684 MTK \u5408\u7ea6\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, MTKTokenState, MTKCore, StateKeeper)]\npub struct SimpleMTK {\n    #[MTKStateKeeper]\n    pub tokens: MTKState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub supply: BTreeMap<TokenId, u128>,\n}\n\nstatic mut CONTRACT: Option<SimpleMTK> = None;\n\n#[no_mangle]\npub unsafe extern "C" fn init() {\n    let config: InitMTK = msg::load().expect("Unable to decode InitConfig");\n    let mut multi_token = SimpleMTK::default();\n    multi_token.tokens.name = config.name;\n    multi_token.tokens.symbol = config.symbol;\n    multi_token.tokens.base_uri = config.base_uri;\n    multi_token.owner = msg::source();\n    CONTRACT = Some(multi_token);\n}\n\n#[no_mangle]\npub unsafe extern "C" fn handle() {\n    let action: MTKAction = msg::load().expect("Could not load msg");\n    let multi_token = CONTRACT.get_or_insert(SimpleMTK::default());\n    match action {\n        MTKAction::Mint {\n            amount,\n            token_metadata,\n        } => MTKCore::mint(multi_token, token_id, amount, token_metadata),\n        MTKAction::Burn { token_id, amount } => MTKCore::burn(multi_token, token_id, amount),\n        MTKAction::BalanceOf { account, id } => {\n            MTKCore::balance_of(multi_token, vec![account], vec![id])\n        }\n        MTKAction::BalanceOfBatch { accounts, ids } => {\n            MTKCore::balance_of(multi_token, accounts, ids)\n        }\n        MTKAction::MintBatch {\n            ids,\n            amounts,\n            tokens_metadata,\n        } => MTKCore::mint(multi_token, &msg::source(), ids, amounts, tokens_metadata),\n        MTKAction::TransferFrom {\n            from,\n            to,\n            id,\n            amount,\n        } => MTKCore::transfer_from(multi_token, &from, &to, vec![id], vec![amount]),\n        MTKAction::BatchTransferFrom {\n            from,\n            to,\n            ids,\n            amounts,\n        } => MTKCore::transfer_from(multi_token, &from, &to, ids, amounts),\n        MTKAction::BurnBatch { ids, amounts } => MTKCore::burn(multi_token, ids, amounts),\n        MTKAction::Approve { account } => MTKCore::approve(multi_token, &account),\n        MTKAction::RevokeApproval { account } => MTKCore::revoke_approval(multi_token, &account),\n    }\n}\n')),(0,o.kt)("h2",{id:"\u90e8\u7f72-multitoken-\u5408\u7ea6"},"\u90e8\u7f72 multitoken \u5408\u7ea6"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u91cd\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"burn")," \u51fd\u6570\u7684\u5b9e\u73b0\u3002mint \u51fd\u6570\u5c06\u4e3a\u53d1\u9001 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," \u6d88\u606f\u7684\u8d26\u6237\u521b\u5efa\u4ee3\u5e01\uff0c\u5e76\u628a\u5143\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u3002\u81f3\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"burn")," \u529f\u80fd - \u5c06\u4e0e\u9ed8\u8ba4\u529f\u80fd\u76f8\u540c\uff0c\u4f46\u6211\u4eec\u5c06\u5176\u8986\u76d6\uff0c\u56e0\u4e3a\u6211\u4eec\u5e0c\u671b\u4ece\u5408\u7ea6\u4e2d\u9500\u6bc1\u4ee3\u5e01\u65f6\u5904\u7406\u4f9b\u5e94\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MTKAction {\n    Mint {\n        amount: u128,\n        token_metadata: Option<TokenMetadata>,\n    },\n    Burn {\n        id: TokenId,\n        amount: u128,\n    },\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," \u540c\u6837\u5b9a\u4e49\u5728 gear NFT library\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, Encode, Decode, Clone, TypeInfo)]\npub struct TokenMetadata {\n    // ex. "CryptoKitty #100"\n    pub name: String,\n    // free-form description\n    pub description: String,\n    // URL to associated media, preferably to decentralized, content-addressed storage\n    pub media: String,\n    // URL to an off-chain JSON file with more info.\n    pub reference: String,\n}\n')),(0,o.kt)("p",null,"\u5b9a\u4e49 1 \u4e2a\u65b0\u65b9\u6cd5\uff0c\u5b83\u5c06\u6269\u5c55\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"MTKCore"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait SimpleMTKCore: MTKCore {\n    fn mint(&mut self, amount: u128, token_metadata: Option<TokenMetadata>);\n\n    fn burn(&mut self, id: TokenId, amount: u128);\n}\n")),(0,o.kt)("p",null,"\u7f16\u5199\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl SimpleMTKCore for SimpleMTK {\n    fn mint(&mut self, amount: u128, token_metadata: Option<TokenMetadata>) {\n        MTKCore::mint(\n            self,\n            &msg::source(),\n            vec![(self.token_id)],\n            vec![amount],\n            vec![token_metadata],\n        );\n        self.supply.insert(self.token_id, amount);\n        self.token_id = self.token_id.saturating_add(1);\n    }\n\n    fn burn(&mut self, id: TokenId, amount: u128) {\n        MTKCore::burn(self, vec![id], vec![amount]);\n        let sup = self.supply(id);\n        let mut _balance = self\n            .supply\n            .insert(self.token_id, sup.saturating_sub(amount));\n    }\n}\n")),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," \u51fd\u6570\u8fdb\u884c\u4fee\u6539\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // code before remains the same...\n    MTKAction::Mint {\n        amount,\n        token_metadata,\n    } => SimpleMTKCore::mint(multi_token, amount, token_metadata),\n    MTKAction::Burn { id, amount } => SimpleMTKCore::burn(multi_token, id, amount),\n    // code after remains the same...\n")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"Gear \u4e3a gMT \u534f\u8bae\u7684\u6838\u5fc3\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u5e93\u3002\u901a\u8fc7\u4f7f\u7528\u5bf9\u8c61\u7ec4\u5408\uff0c\u8be5\u5e93\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u7684 gMT/MTK \u5408\u7ea6\u5b9e\u73b0\u4e2d\u4f7f\u7528\uff0c\u51cf\u5c11\u53ef\u91cd\u590d\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u7531 Gear \u63d0\u4f9b\u7684\u667a\u80fd\u5408\u7ea6\u6e90\u7801\u5728 Github \u4e0a\u53ef\u4ee5\u627e\u5230\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/src/multitoken"},(0,o.kt)("inlineCode",{parentName:"a"},"gear-lib/src/multitoken")),"\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e multitoken \u6e90\u7801\u5728\u7684 Github \u4e0a\u53ef\u4ee5\u627e\u5230\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multitoken/tree/master/src"},(0,o.kt)("inlineCode",{parentName:"a"},"multitoken/src")),"\u3002"),(0,o.kt)("p",null,"\u540c\u6837\u53ef\u4ee5\u627e\u5230\u57fa\u4e8e gtest \u5b9e\u73b0\u7684\u667a\u80fd\u5408\u7ea6\u6d4b\u8bd5\u8303\u4f8b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/multitoken/tree/master/tests"},(0,o.kt)("inlineCode",{parentName:"a"},"multitoken/tests")),"\u3002"),(0,o.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u5728 Gear \u4e0a\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6\u7684\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/zh-cn/developing-contracts/testing/"},"\u7a0b\u5e8f\u6d4b\u8bd5"),"\u3002"))}d.isMDXComponent=!0}}]);