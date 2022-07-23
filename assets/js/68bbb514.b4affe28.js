"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1459],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=d(n),p=o,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_label:"RMRK NFT standard",sidebar_position:15},c="RMRK NFT standard",d={unversionedId:"examples/rmrk",id:"examples/rmrk",title:"RMRK NFT standard",description:"Introduction",source:"@site/docs/examples/rmrk.md",sourceDirName:"examples",slug:"/examples/rmrk",permalink:"/examples/rmrk",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/rmrk.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_label:"RMRK NFT standard",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"NFT Marketplace",permalink:"/examples/marketplace"},next:{title:"Staking",permalink:"/examples/staking"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Logic",id:"logic",level:2},{value:"Nesting logic",id:"nesting-logic",level:3},{value:"Multiresource logic",id:"multiresource-logic",level:3},{value:"<strong>Resource storage contract:</strong>",id:"resource-storage-contract",level:4},{value:"<strong>MultiResource in RMRK contract:</strong>",id:"multiresource-in-rmrk-contract",level:4},{value:"Source code",id:"source-code",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rmrk-nft-standard"},"RMRK NFT standard"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"RMRK is an NFT protocol dedicated to establishing a standard NFT cross-chain infrastructure on the Kusama and Polkadot ecosystems. The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rmrk.app/concepts"},"RMRK NFT 2.0 Concepts")," are divided into RMRK legos and RMRK concepts. Legos are primitives that make up complex use cases and enable certain concepts.\nRMRK legos that are already implemented on Gear:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nested NFTs:\nThe ability for any NFT to contain other RMRK NFT."),(0,a.kt)("li",{parentName:"ul"},"Multi-resource NFTs:\nThe ability for an NFT to vary its output depending on the context it is being loaded in.")),(0,a.kt)("p",null,"This article explains the programming interface, data structure, basic functions and explains their purpose. The source code is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/RMRK"},"GitHub"),". "),(0,a.kt)("h2",{id:"logic"},"Logic"),(0,a.kt)("h3",{id:"nesting-logic"},"Nesting logic"),(0,a.kt)("p",null,"The concept of nested NFTs refers to NFTs being able to own other NFTs. So, the NFT owner can be not only an account or a smart contract, but also another NFT. "),(0,a.kt)("p",null,"In the usual NFT standard, NFT owners were stored as mapping from the NFT ids to addresses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"BTreeMap<TokenId, ActorId>\n")),(0,a.kt)("p",null,"In the RMRK NFT standard we store the owners of tokens in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"BTreeMap<TokenId, RMRKOwner>\n\npub struct RMRKOwner {\n    pub token_id: Option<TokenId>,\n    pub owner_id: ActorId,\n}\n\n")),(0,a.kt)("p",null,"If the owner of NFT is another NFT then the field ",(0,a.kt)("inlineCode",{parentName:"p"},"token_id")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Some(parent_token_id)")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"owner_id")," is the address of the parent RMRK contract, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"token_id")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"owner_id")," is the address of an account or another smart contract."),(0,a.kt)("p",null,"RMRK NFT tokens have the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rootowner"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Rootowner")," will always be an account or program where owner can also be an NFT ID in cases where an NFT owns another NFT. For example, if Alice owns ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT A")," which owns ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT B")," then the ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT B")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT A")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"rootowner")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT B")," is Alice."),(0,a.kt)("p",null,"RMRK standard has 2 options of minting tokens. The first one is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mint")," function at usual NFT standard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Mints token to the user or program.\n///\n/// # Requirements:\n/// * The `token_id` must not exist.\n/// * The `to` address should be a non-zero address.\n///\n/// # Arguments:\n/// * `to`: is the address who will own the token.\n/// * `token_id`: is the tokenId of the new RMRK token.\n///\n/// On success reply [`RMRKEvent::MintToRootOwner`].\nMintToRootOwner {\n    to: ActorId,\n    token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"The second ",(0,a.kt)("inlineCode",{parentName:"p"},"mint")," function allows you to create an NFT that will belong to another NFT (or be a child of another NFT):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Mints token that will belong to another token in another RMRK contract.\n///\n/// # Requirements:\n/// * The `parent_id`  must be a deployed RMRK contract.\n/// * The token with id `parent_token_id` must exist in the `parent_id` contract.\n/// * The `token_id` must not exist.\n///\n/// # Arguments:\n/// * `parent_id`: is the address of the RMRK parent contract.\n/// * `parent_token_id`: is the parent RMRK token.\n/// * `token_id`: is the tokenId of the new RMRK token.\n///\n/// On success replies [`RMRKEvent::MintToNft`].\nMintToNft {\n    parent_id: ActorId,\n    parent_token_id: TokenId,\n    token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"When creating a token that will belong to another NFT, the contract sends a message ",(0,a.kt)("inlineCode",{parentName:"p"},"AddChild")," to parent the RMRK contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// That message is designed to be send from another RMRK contracts\n/// when minting an NFT(child_token_id) to another NFT(parent_token_id).\n/// It adds a child to the NFT with tokenId `parent_token_id`\n/// The status of added child is `Pending`.\n///\n/// # Requirements:\n/// * Token with TokenId `parent_token_id` must exist.\n/// * There cannot be two identical children.\n///\n/// # Arguments:\n/// * `parent_token_id`: is the tokenId of the parent NFT.\n/// * `child_token_id`: is the tokenId of the child instance.\n///\n/// On success replies [`RMRKEvent::PendingChild`].\nAddChild {\n    parent_token_id: TokenId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"The root owner or the approved account can accept the child NFT by sending the following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Accepts an RMRK child being in the `Pending` status.\n/// Removes RMRK child from `pending_children` and adds it to `accepted_children`.\n///\n/// # Requirements:\n/// * The `msg::source()` must be an RMRK owner of NFT with tokenId `parent_token_id` or an approved account.\n/// * The indicated NFT with tokenId `child_token_id` must exist in the pending array of `parent_token_id`.\n///\n/// # Arguments:\n/// * `parent_token_id`: is the tokenId of the parent NFT\n/// * `child_token_id`: is the tokenId of the child instance\n///\n/// On success replies [`RMRKEvent::AcceptedChild`]. \nAcceptChild {\n    parent_token_id: TokenId,\n    child_contract_id: ActorId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"or reject the child NFT with the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Rejects an RMRK child being in the `Pending` status.\n/// It sends a message to the child NFT contract to burn the NFT token from it.\n///\n/// # Requirements:\n/// * The `msg::source()` must be an RMRK owner or an approved account.\n/// * The indicated NFT with tokenId `child_token_id` must exist in the pending array of `parent_token_id`.\n///\n/// Arguments:\n/// * `parent_token_id`: is the tokenId of the parent NFT.\n/// * `child_contract_id`: is the address of the child RMRK contract.\n/// * `child_token_id`: is the tokenId of the child instance.\n///\n/// On success replies [`RMRKEvent::RejectedChild`]. \nRejectChild {\n    parent_token_id: TokenId,\n    child_contract_id: ActorId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"The root owner can also remove the already accepted child from his NFT accepted children:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Removes an RMRK child being in the `Accepted` status.\n/// It sends a message to the child NFT contract to burn the NFT token from it.\n///\n/// # Requirements:\n/// * The `msg::source()` must be an RMRK owner or an approved account.\n///\n/// # Arguments:\n/// * `parent_token_id`: is the tokenId of the parent NFT.\n/// * `child_contract_id`: is the address of the child RMRK contract.\n/// * `child_token_id`: is the tokenId of the child instance.\n///\n/// On success replies [`RMRKEvent::RemovedChild`].\nRemoveChild {\n    parent_token_id: TokenId,\n    child_contract_id: ActorId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"If the root owner rejects  or removes the child NFT, the child NFT must be burnt from the child NFT contract. The parent NFT contract sends the corresponding message to the child NFT contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Burns RMRK tokens. It must be called from the RMRK parent contract when the root owner removes or rejects child NFTs.\n/// The input argument is an `BTreeSet<TokenId>` since a parent contract can have multiple children that must be burnt.\n/// It also recursively sends messages [`RMRKAction::BurnFromParent`] to children of burnt tokens if any.\n///\n/// # Requirements:\n/// * The `msg::source()` must be a RMRK parent contract.\n/// * All tokens in `BTreeSet<TokenId>` must exist.\n///\n/// # Arguments:\n/// * `token_ids`: is the tokenIds of the burnt tokens.\n///\n/// On success replies [`RMRKEvent::TokensBurnt`].\nBurnFromParent {\n    child_token_ids: BTreeSet<TokenId>,\n    root_owner: ActorId,\n},\n")),(0,a.kt)("p",null,"The token being burned may also have children in other contracts. When burned, it recursively burns all the children's NFTs."),(0,a.kt)("p",null,"The root owner can also burn the NFT with following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Burns RMRK token.\n/// It recursively burns all the children's NFTs.\n/// It checks whether the token is a child of another token.\n/// If so, it sends a message to the parent NFT  to remove the child.\n///\n/// # Requirements:\n/// * The `msg::source()` must be the root owner of the token.\n///\n/// # Arguments:\n/// * `token_id`: is the tokenId of the burnt token.\n///\n/// On success replies [`RMRKEvent::Transfer`].\nBurn(TokenId),\n")),(0,a.kt)("p",null,"In addition to burning tokens recursively, it also checks whether the burnt NFT belongs to another NFT. In that case, it is necessary to remove the token from the children list in the parent's contract with the following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Burns a child of NFT.\n/// That function must be called from the child RMRK contract during `transfer`, `transfer_to_nft` and `burn` functions.\n///\n/// # Requirements:\n/// * The `msg::source()` must be a child RMRK contract.\n/// * The indicated child must exist on the children list of `parent_token_id`.\n///\n/// # Arguments:\n/// * `parent_token_id`: is the tokenId of the parent NFT.\n/// * `child_token_id`: is the tokenId of the child instance.\n///\n/// On success replies [`RMRKEvent::ChildBurnt`].\nBurnChild {\n    parent_token_id: TokenId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"When NFT is transferred, the destination can be either an account or another NFT. To send an NFT to another account you need to send a message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Transfers NFT to another account.\n/// If the previous owner is another RMRK contract, it sends the message [`RMRKAction::BurnChild`] to the parent contract.\n///\n/// # Requirements:\n/// * The `token_id` must exist.\n/// * The `msg::source()` must be approved by the owner of the token.\n/// * The `to` address should be a non-zero address.\n///\n/// # Arguments:\n/// * `to`: is the receiving address.\n/// * `token_id`: is the tokenId of the transferred token.\n///\n/// On success replies [`RMRKEvent::ChildBurnt`].\nTransfer {\n    to: ActorId,\n    token_id: TokenId,\n},\n")),(0,a.kt)("p",null,"If the previous owner is another NFT it sends a message ",(0,a.kt)("inlineCode",{parentName:"p"},"BurnChild")," to the parent contract. "),(0,a.kt)("p",null,"In case of transferring a token to another NFT, the following message is sent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Transfers NFT to another NFT.\n///\n/// # Requirements:\n/// * The `token_id` must exist.\n/// * The `msg::source()` must be approved by the root owner of the token.\n/// * The `to` address should be a non-zero address\n///\n/// # Arguments:\n/// * `to`: is the address of the new parent RMRK contract.\n/// * `destination_id: is the tokenId of the parent RMRK token.\n/// * `token_id`: is the tokenId of the transferred token.\n///\n/// On success replies [`RMRKEvent::TransferToNft`].\nTransferToNft {\n    to: ActorId,\n    token_id: TokenId,\n    destination_id: TokenId,\n},\n")),(0,a.kt)("p",null,"In this case, 5 scenarios are possible:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Root owner transfers child token from NFT to another his NFT within one contract.\nIn that case child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"TransferChild")," to parent RMRK contract with indicated previous ",(0,a.kt)("inlineCode",{parentName:"li"},"TokenId")," and new ",(0,a.kt)("inlineCode",{parentName:"li"},"TokenId"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// That message is designed to be sent from another RMRK contracts\n/// when the root owner transfers his child to another parent token within one contract.\n/// If root owner transfers child token from NFT to another his NFT\n/// it adds a child to the NFT  with a status that child had before. \n/// If root owner transfers child token from NFT to another NFT that he does not own\n/// it adds a child to the NFT  with a status `Pending`. \n///\n/// # Requirements:\n/// * The `msg::source()` must be a child RMRK contract.\n/// * The `to` must be an existing RMRK token\n/// * The `root_owner` of `to` and `from` must be the same.\n///\n/// # Arguments:\n/// * `from`: RMRK token from which the child token will be transferred.\n/// * `to`: RMRK token to which the child token will be transferred.\n/// * `child_token_id`: is the tokenId of the child in the RMRK child contract.\n///\n/// On success replies [`RMRKEvent::ChildTransferred`].\nTransferChild {\n    from: TokenId,\n    to: TokenId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Root owner transfers child token from RMRK parent token in one contract to another his RMRK token in another contract:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"BurnChild")," to previous parent RMRK contract;"),(0,a.kt)("li",{parentName:"ul"},"Child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"AddAcceptedChild")," to new parent RMRK contract;")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// That function is designed to be called from another RMRK contracts\n/// when the root owner transfers his child NFT to another his NFT in another contract.\n/// It adds a child to the RMRK token with tokenId `parent_token_id` with status `Accepted`.\n///\n/// # Requirements:\n/// * The `msg::source()` must be a child RMRK contract.\n/// * The `parent_token_id` must be an existing RMRK token that must have `child_token_id` in its `accepted_children`.\n///\n/// # Arguments:\n/// * `parent_token_id`: RMRK token to which the child token will be transferred.\n/// * `child_token_id`: is the tokenId of the child of the RMRK child contract.\n///\n/// On success replies [`RMRKEvent::AcceptedChild`].\nAddAcceptedChild {\n    parent_token_id: TokenId,\n    child_token_id: TokenId,\n},\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Root owner transfers child token to RMRK token that belongs to another root account:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"BurnChild")," to previous parent RMRK contract;"),(0,a.kt)("li",{parentName:"ul"},"Child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"AddChild")," to new parent RMRK contract;"))),(0,a.kt)("li",{parentName:"ol"},"Transferred RMRK token belongs directly to root owner and he transfers RMRK token to his another RMRK token: child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"AddAcceptedChild")," to new parent RMRK contract."),(0,a.kt)("li",{parentName:"ol"},"Transferred RMRK token belongs directly to root owner and he transfers RMRK token to another RMRK token that he doesn\u2019t own: child RMRK contract sends message ",(0,a.kt)("inlineCode",{parentName:"li"},"AddChild")," to new parent RMRK contract.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"approve")," function in RMRK NFT standard is similar to the usual nft standard function, except that ",(0,a.kt)("inlineCode",{parentName:"p"},"msg::source")," must the the ",(0,a.kt)("inlineCode",{parentName:"p"},"root_owner"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Approves an account to transfer NFT.\n///\n/// # Requirements:\n/// * The `token_id` must exist.\n/// * The `msg::source()` must be approved by the root owner of the token.\n/// * The `to` address must be a non-zero address\n///\n/// # Arguments:\n/// * `to`: is the address of the approved account.\n/// * `token_id`: is the tokenId of the token.\n///\n/// On success replies [`RMRKEvent::Approval`].\nApprove {\n    to: ActorId,\n    token_id: TokenId,\n},\n")),(0,a.kt)("h3",{id:"multiresource-logic"},"Multiresource logic"),(0,a.kt)("p",null,"The Multi Resource NFT standard is a standalone part of RMRK concepts. The idea is that an NFT can have multiple resources.\nThere are four key use cases for NFT multiresource:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Cross-metaverse compatibility"),":  for example, NFT with several resources can be used in different games."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Multimedia output"),": NFT can be stored in different digital formats (image, video, audio, eBooks or text file)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Media Redundancy"),": many NFTs are minted with metadata centralized on a server somewhere or, in some cases, a hardcoded IPFS gateway which can also go down, instead of just an IPFS hash. By adding the same metadata file as different resources, the resilience of the metadata and its referenced media increases exponentially as the chances of all the protocols going down at once become ever less likely."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"NFT Evolution"),": many NFTs, particularly game related ones, require evolution.\nRMRK contract can create a contract to store its resources.")),(0,a.kt)("h4",{id:"resource-storage-contract"},(0,a.kt)("strong",{parentName:"h4"},"Resource storage contract:")),(0,a.kt)("p",null,"The storage state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default)]\npub struct ResourceStorage {\n    pub name: String,\n    // the admin is the rmrk contract that initializes the storage contract\n    pub admin: ActorId,\n    pub resources: BTreeMap<u8, Resource>,\n    pub all_resources: BTreeSet<Resource>,\n}\n")),(0,a.kt)("p",null,"To add resource to the token the RMRK contract must send the following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Adds resource entry on resource storage contract.\n///\n/// # Requirements:\n/// * The `msg::source()` must be the contract admin (RMRK contract).\n/// * `id` can not be equal to zero.\n/// * Resource with indicated `id` must not exist.\n///\n/// # Arguments:\n/// * `id`: is a resource identifier.\n/// * `src`: a string pointing to the media associated with the resource.\n/// * `thumb`: a string pointing to thumbnail media associated with the resource.\n/// * `metadata_uri`:  a string pointing to a metadata file associated with the resource.\n///\n/// On success replies [`ResourceEvent::ResourceEntryAdded`]. \nAddResourceEntry {\n    id: u8,\n    src: String,\n    thumb: String,\n    metadata_uri: String,\n},\n")),(0,a.kt)("p",null,"To get information about whether such a resource exists in the storage or not, send the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Used to check from the RMRK contract whether the resource with indicated id exists or not.\n///\n/// # Arguments:\n/// * `id`: is a resource identifier.\n///\n/// On success replies [`ResourceEvent::Resource`]. \nGetResource {\n    id: u8,\n},\n")),(0,a.kt)("h4",{id:"multiresource-in-rmrk-contract"},(0,a.kt)("strong",{parentName:"h4"},"MultiResource in RMRK contract:")),(0,a.kt)("p",null,"The RMRK contract admin can add resource to the storage contract through the RMRK contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Adds resource entry on resource storage contract.\n/// It sends a message to the resource storage contract with information about a new resource.\n///\n/// # Requirements:\n/// * The `msg::source()` must be the contract admin.\n///\n/// Arguments:\n/// * `id`: is a resource identifier\n/// * `src`: a string pointing to the media associated with the resource.\n/// * `thumb`: a string pointing to thumbnail media associated with the resource.\n/// * `metadata_uri`:  a string pointing to a metadata file associated with the resource.\n///\n/// On success reply `[RMRKEvent::ResourceEntryAdded]`.\nAddResourceEntry {\n    id: u8,\n    src: String,\n    thumb: String,\n    metadata_uri: String,\n},\n")),(0,a.kt)("p",null,'Anyone can add resource to the existing token in the form of a propose-commit pattern. When adding a resource to a token, it is first placed in the "Pending" array, and must be migrated to the "Active" array by the token owner:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'/// Adds resource to an existing token.\n/// Checks that the resource with indicated id exists in the resource storage contract.\n/// Proposed resource is placed in the "Pending" array.\n/// A pending resource can be also proposed to overwrite an existing resource.\n///\n/// # Requirements\n/// Token with indicated `token_id` must exist.\n/// The proposed resource must not already exist for the token.\n/// The resource that is proposed to be overwritten must exist for the token.\n/// The length of resources in pending status must be less or equal to `MAX_RESOURCE_LEN`.\n///\n/// # Arguments:\n/// * `token_id`: an id of the token.\n/// * `resource_id`: a proposed resource.\n/// * `overwrite_id`: a resource to be overwritten.\n///\n/// On success reply `[RMRKEvent::ResourceAdded]`.\nAddResource {\n    token_id: TokenId,\n    resource_id: u8,\n    overwrite_id: u8,\n},\n')),(0,a.kt)("p",null,"To accept resource the root owner must send the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Accepts resource from pending list.\n/// Moves the resource from the pending array to the accepted array.\n///\n/// # Requirements\n/// Only root owner or approved account can accept a resource.\n/// `resource_id` must exist for the token in the pending array.\n///\n/// # Arguments:\n/// * `token_id`: an id of the token.\n/// * `resource_id`: a resource to be accepted.\n///\n/// On success reply  `[RMRKEvent::ResourceAccepted]`.\nAcceptResource {\n    token_id: TokenId,\n    resource_id: u8,\n},\n")),(0,a.kt)("p",null,"or reject resource with the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Rejects a resource, dropping it from the pending array.\n///\n/// # Requirements\n/// Only root owner or approved account can reject a resource.\n/// `resource_id` must exist for the token in the pending array.\n///\n/// # Arguments:\n/// * `token_id`: an id of the token.\n/// * `resource_id`: a resource to be rejected.\n///\n/// On success reply  `[RMRKEvent::ResourceRejected]`.\nRejectResource {\n    token_id: TokenId,\n    resource_id: u8,\n},\n")),(0,a.kt)("p",null,"An NFT multiple resources are ordered by priority that is set by the root owner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Sets the priority of the active resources array\n/// Priorities have a 1:1 relationship with their corresponding index in\n/// the active resources array. E.G, a priority array of [1, 3, 2] indicates\n///  that the the active resource at index 1 of the active resource array\n///  has a priority of 1, index 2 has a priority of 3, and index 3 has a priority\n///  of 2. There is no validation on priority value input; out of order indexes\n///  must be handled by the frontend.\n///\n/// # Requirements\n/// Only root owner or approved account can set priority\n/// The length of the priorities array must be equal to the present length of the active resources array\n///\n/// # Arguments:\n/// * `token_id`: an id of the token.\n/// * `priorities`: An array of priorities to set.\n///\n/// On success reply `[RMRKEvent::PrioritySet]`.\nSetPriority {\n    token_id: TokenId,\n    priorities: Vec<u8>,\n},\n")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("p",null,"The source code of RMRK implementation and the example of an implementation of its testing is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/RMRK"},"GitHub"),"."),(0,a.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/developing-contracts/testing"},"Program Testing")," article."))}p.isMDXComponent=!0}}]);