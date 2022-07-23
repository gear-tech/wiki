"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7548],{4926:function(e,a,t){t.r(a),t.d(a,{assets:function(){return y},contentTitle:function(){return f},default:function(){return _},frontMatter:function(){return N},metadata:function(){return x},toc:function(){return w}});var n=t(7462),l=t(3366),r=t(7294),i=t(3905),u=t(6010),s=t(2389),o=t(7392),p=t(7094),d=t(2466),m="tabList__CuJ",c="tabItem_LNqP";function g(e){var a,t,l=e.lazy,i=e.block,s=e.defaultValue,g=e.values,k=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),N=(0,o.l)(v,(function(e,a){return e.value===a.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(a=null!=s?s:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:b[0].props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),y=x.tabGroupChoices,w=x.setTabGroupChoices,T=(0,r.useState)(f),_=T[0],C=T[1],z=[],G=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=y[k];null!=S&&S!==_&&v.some((function(e){return e.value===S}))&&C(S)}var E=function(e){var a=e.currentTarget,t=z.indexOf(a),n=v[t].value;n!==_&&(G(a),C(n),null!=k&&w(k,String(n)))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,l=z.indexOf(e.currentTarget)+1;t=null!=(n=z[l])?n:z[0];break;case"ArrowLeft":var r,i=z.indexOf(e.currentTarget)-1;t=null!=(r=z[i])?r:z[z.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var a=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===a?0:-1,"aria-selected":_===a,key:a,ref:function(e){return z.push(e)},onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":_===a})}),null!=t?t:a)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==_})}))))}function k(e){var a=(0,s.Z)();return r.createElement(g,(0,n.Z)({key:String(a)},e))}var h="tabItem_Ymn6";function b(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",className:(0,u.Z)(h,n),hidden:t},a)}t(814);var v=["components"],N={sidebar_label:"\u914d\u7f6e\u8282\u70b9",sidebar_position:1},f="\u914d\u7f6e\u672c\u5730\u8282\u70b9",x={unversionedId:"node/setting-up",id:"node/setting-up",title:"\u914d\u7f6e\u672c\u5730\u8282\u70b9",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/node/setting-up.mdx",sourceDirName:"node",slug:"/node/setting-up",permalink:"/zh-cn/node/setting-up",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/setting-up.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u914d\u7f6e\u8282\u70b9",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u6536 GRB",permalink:"/zh-cn/idea/account/gear-bonus"},next:{title:"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210\u670d\u52a1",permalink:"/zh-cn/node/node-as-service"}},y={},w=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u91c7\u7528\u9884\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u5b89\u88c5",id:"\u91c7\u7528\u9884\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u5b89\u88c5",level:2},{value:"\u81ea\u884c\u7f16\u8bd1 Gear \u8282\u70b9",id:"\u81ea\u884c\u7f16\u8bd1-gear-\u8282\u70b9",level:2},{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",level:3},{value:"\u5b89\u88c5 Rust",id:"\u5b89\u88c5-rust",level:3},{value:"\u5b89\u88c5 WASM Toolchains:",id:"\u5b89\u88c5-wasm-toolchains",level:3},{value:"\u4e0b\u8f7d Gear \u4ee3\u7801",id:"\u4e0b\u8f7d-gear-\u4ee3\u7801",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u8fd0\u884c Gear \u8282\u70b9",id:"\u8fd0\u884c-gear-\u8282\u70b9",level:2},{value:"\u547d\u4ee4\u6807\u8bb0\u548c\u9009\u9879",id:"\u547d\u4ee4\u6807\u8bb0\u548c\u9009\u9879",level:2},{value:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf",id:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf",level:2}],T={toc:w};function _(e){var a=e.components,t=(0,l.Z)(e,v);return(0,i.kt)("wrapper",(0,n.Z)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u914d\u7f6e\u672c\u5730\u8282\u70b9"},"\u914d\u7f6e\u672c\u5730\u8282\u70b9"),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u672c\u6559\u7a0b\u8986\u76d6\u4e86\u5b89\u88c5\u548c\u8fd0\u884c Gear \u8282\u70b9\u6240\u9700\u7684\u6b65\u9aa4\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5f00\u59cb\u8fd0\u884c Gear \u8282\u70b9\u3002\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u597d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u76f4\u63a5\u8fd0\u884c\u3002\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u81ea\u884c\u7f16\u8bd1\u548c\u914d\u7f6e\u3002\u4f7f\u7528\u5df2\u7ecf\u51c6\u5907\u597d\u7684\u7f16\u8bd1\u6587\u4ef6\u662f\u6700\u5feb\u548c\u6700\u4fbf\u6377\u7684\u5f00\u59cb\u65b9\u5f0f\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8bf8\u5982\u5b89\u88c5 Rust\u3001\u5b89\u88c5\u4f9d\u8d56\u548c\u8282\u70b9\u7f16\u8bd1\u7684\u8fc7\u7a0b\u3002\u4ece\u53e6\u4e00\u65b9\u9762\u6765\u8bb2\uff0c\u5982\u679c\u4f60\u51b3\u5b9a\u8981\u91c7\u7528\u81ea\u5df1\u7f16\u8bd1\u7684\u65b9\u5f0f\u6765\u521b\u5efa\u4f60\u7684\u5f00\u53d1\u8282\u70b9\uff0c\u90a3\u4e48\u5b83\u5c06\u82b1\u8d39\u5927\u7ea6 20 \u5206\u949f\u65f6\u95f4\u6216\u8005\u66f4\u591a\uff0c\u8fd9\u4e00\u5207\u53d6\u51b3\u4e8e\u4f60\u7684\u673a\u5668\u914d\u7f6e\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"\u7cfb\u7edf\u914d\u7f6e\u8981\u6c42"},"\u7cfb\u7edf\u914d\u7f6e\u8981\u6c42"),(0,i.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u9700\u8981\u5bf9 AVX \u548c SSE 4.2 \u7684\u652f\u6301\uff0cGear \u8282\u70b9\u4e0d\u80fd\u5728 QEMU \u865a\u62df CPU \u4e0a\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("p",{parentName:"admonition"},"Gear \u8282\u70b9\u5e76\u4e0d\u8981\u6c42\u7279\u6b8a\u7684\u786c\u4ef6\u914d\u7f6e\uff0c\u9664\u4e86\u5efa\u8bae\u4f7f\u7528 SSD \u786c\u76d8\u3002")),(0,i.kt)("h2",{id:"\u91c7\u7528\u9884\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u5b89\u88c5"},"\u91c7\u7528\u9884\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u5b89\u88c5"),(0,i.kt)("p",null,"\u4f9d\u636e\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d Gear \u8282\u70b9\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly build")," \u7248\u672c\uff1a"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(b,{value:"win64",label:"Windows x64",className:"unique-tabs",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://builds.gear.rs/gear-nightly-windows-x86_64.zip\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows x64"),": ",(0,i.kt)("a",{parentName:"p",href:"https://builds.gear.rs/gear-nightly-windows-x86_64.zip"},"gear-nightly-windows-x86_64.zip"))),(0,i.kt)(b,{value:"mac-arm",label:"MacOS ARM",mdxType:"TabItem"},(0,i.kt)("p",null,"Terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://builds.gear.rs/gear-nightly-macos-m1.tar.gz && \\\ntar xvf gear-nightly-macos-m1.tar.gz && \\\nrm gear-nightly-macos-m1.tar.gz && \\\nchmod +x gear-node\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"macOS M1"),": ",(0,i.kt)("a",{parentName:"p",href:"https://builds.gear.rs/gear-nightly-macos-m1.tar.gz"},"gear-nightly-macos-m1.tar.gz"))),(0,i.kt)(b,{value:"mac-intel",label:"MacOS x64",mdxType:"TabItem"},(0,i.kt)("p",null,"Terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://builds.gear.rs/gear-nightly-macos-x86_64.tar.gz && \\\ntar xvf gear-nightly-macos-x86_64.tar.gz && \\\nrm gear-nightly-macos-x86_64.tar.gz && \\\nchmod +x gear-node\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"macOS Intel x64"),": ",(0,i.kt)("a",{parentName:"p",href:"https://builds.gear.rs/gear-nightly-macos-x86_64.tar.gz"},"gear-nightly-macos-x86_64.tar.gz"))),(0,i.kt)(b,{value:"mac-linux",label:"Linux x64",mdxType:"TabItem"},(0,i.kt)("p",null,"Terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://builds.gear.rs/gear-nightly-linux-x86_64.tar.xz && \\\ntar xvf gear-nightly-linux-x86_64.tar.xz && \\\nrm gear-nightly-linux-x86_64.tar.xz && \\\nchmod +x gear-node\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux x64"),": ",(0,i.kt)("a",{parentName:"p",href:"https://builds.gear.rs/gear-nightly-linux-x86_64.tar.xz"},"gear-nightly-linux-x86_64.tar.xz")))),(0,i.kt)("h2",{id:"\u81ea\u884c\u7f16\u8bd1-gear-\u8282\u70b9"},"\u81ea\u884c\u7f16\u8bd1 Gear \u8282\u70b9"),(0,i.kt)("p",null,"\u81ea\u884c\u7f16\u8bd1\u7248\u672c\u9700\u8981\u82b1\u8d39\u4e00\u4e9b\u65f6\u95f4\uff0c\u540c\u65f6\u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u4f9d\u8d56\uff1a"),(0,i.kt)("h3",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,i.kt)("p",null,"Linux \u7528\u6237\u9700\u8981\u4f9d\u7167\u81ea\u5df1\u7684\u53d1\u884c\u7248\u672c\u6765\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"GCC")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Clang"),"\u3002\n\u53e6\u5916\uff0c\u9700\u8981\u5b89\u88c5\u5305\u542b\u6240\u9700\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm-opt")," \u5de5\u5177\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"binaryen"),"\u5de5\u5177\u96c6\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u5728 Ubuntu \u4e0a\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y clang build-essential binaryen\n")),(0,i.kt)("p",null,"\u5728 macOS \u4e0a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5f97\u5230\u7f16\u8bd1\u5668\u5de5\u5177\u96c6\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"binaryen"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\nbrew install binaryen\n")),(0,i.kt)("h3",{id:"\u5b89\u88c5-rust"},"\u5b89\u88c5 Rust"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5 Rust\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,i.kt)("p",null,"\u4e4b\u540e\u4f60\u9700\u8981\u91cd\u542f\u4f60\u7684\u7ec8\u7aef\u3002"),(0,i.kt)("h3",{id:"\u5b89\u88c5-wasm-toolchains"},"\u5b89\u88c5 WASM Toolchains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain add nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n")),(0,i.kt)("h3",{id:"\u4e0b\u8f7d-gear-\u4ee3\u7801"},"\u4e0b\u8f7d Gear \u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gear-tech/gear.git\ncd gear\n")),(0,i.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build -p gear-node --release\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make node-release\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4f60\u5c06\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/gear/target/release/gear-node")," \u627e\u5230\u6700\u7ec8\u7684\u7f16\u8bd1\u8f93\u51fa"),(0,i.kt)("p",{parentName:"admonition"},"\u524d\u5f80\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd target/release\n"))),(0,i.kt)("h2",{id:"\u8fd0\u884c-gear-\u8282\u70b9"},"\u8fd0\u884c Gear \u8282\u70b9"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u4e00\u6b65\u540c\u662f\u5426\u662f\u4e0b\u8f7d\u7684\u9884\u7f16\u8bd1\u7248\u672c\u8fd8\u662f\u81ea\u5df1\u7f16\u8bd1\u7684\u7248\u672c\u65e0\u5173\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"gear-node")," \u5b89\u88c5\u7684\u76ee\u5f55\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u6765\u94fe\u63a5\u6d4b\u8bd5\u7f51\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gear-node\n")),(0,i.kt)("p",null,"\u91c7\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c\u5f00\u53d1\u6a21\u5f0f\u7684 Gear \u8282\u70b9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gear-node --dev --tmp\n")),(0,i.kt)("h2",{id:"\u547d\u4ee4\u6807\u8bb0\u548c\u9009\u9879"},"\u547d\u4ee4\u6807\u8bb0\u548c\u9009\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-code"},"gear-node [flags] [options]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--staging")),(0,i.kt)("p",null,"\u94fe\u63a5\u5230 Gear \u6d4b\u8bd5\u7f51\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--dev")),(0,i.kt)("p",null,"\u8fd0\u884c\u5355\u8282\u70b9 Gear \u5f00\u53d1\u7f51\u7edc\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--tmp")),(0,i.kt)("p",null,"\u91c7\u7528\u4e34\u65f6\u76ee\u5f55\u6765\u8fd0\u884c\u8282\u70b9\u3002\u4e34\u65f6\u76ee\u5f55\u4f1a\u88ab\u521b\u5efa\u51fa\u6765\uff0c\u7528\u6765\u5b58\u50a8\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u4e14\u5728\u8fdb\u7a0b\u7ed3\u675f\u65f6\u88ab\u5220\u9664\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"purge-chain")),(0,i.kt)("p",null,"\u5220\u9664\u9009\u5b9a\u94fe\u7684\u5b58\u50a8\u3002\u9700\u8981\u660e\u786e\u94fe\u7684\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"--staging")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--help")),(0,i.kt)("p",null,"\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf"},"\u7279\u6b8a\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u8fd0\u884c Gear \u8282\u70b9\u65f6\u5f00\u542f\u5408\u7ea6\u65e5\u5fd7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-code"},'RUST_LOG="gwasm=debug" gear-node [flags]\n')))}_.isMDXComponent=!0}}]);