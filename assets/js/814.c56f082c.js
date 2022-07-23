"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[814],{2503:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),i=t(3366),r=t(7294),l=t(6010),o=t(5999),c=t(6668),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,i.Z)(e,m),f=(0,c.L)().navbar.hideOnScroll;return"h1"!==n&&t?r.createElement(n,(0,a.Z)({},d,{className:(0,l.Z)("anchor",f?u:s),id:t}),d.children,r.createElement("a",{className:"hash-link",href:"#"+t,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,(0,a.Z)({},d,{id:void 0}))}},5203:function(e,n,t){t.d(n,{Z:function(){return I}});var a=t(7294),i=t(3905),r=t(7462),l=t(3366),o=t(5742),c=["mdxType","originalType"];var s=t(814);var u=t(9960);var m=t(6010),d=t(2389),f=t(6043),v="details_lb9f",h="isBrowser_bmU9",p="collapsibleContent_i85q",g=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function C(e,n){return!!e&&(e===n||C(e.parentElement,n))}function N(e){var n=e.summary,t=e.children,i=(0,l.Z)(e,g),o=(0,d.Z)(),c=(0,a.useRef)(null),s=(0,f.u)({initialState:!i.open}),u=s.collapsed,N=s.setCollapsed,b=(0,a.useState)(i.open),L=b[0],Z=b[1];return a.createElement("details",(0,r.Z)({},i,{ref:c,open:L,"data-collapsed":u,className:(0,m.Z)(v,o&&h,i.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&C(n,c.current)&&(e.preventDefault(),u?(N(!1),Z(!0)):N(!0))}}),null!=n?n:a.createElement("summary",null,"Details"),a.createElement(f.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),Z(!e)}},a.createElement("div",{className:p},t)))}var b="details_b_Ee";function L(e){var n=Object.assign({},e);return a.createElement(N,(0,r.Z)({},n,{className:(0,m.Z)("alert alert--info",b,n.className)}))}var Z=t(2503);function y(e){return a.createElement(Z.Z,e)}var H="containsTaskList_mC6p";var k="img_ev3q";var x=t(5281),T=t(5999),_="admonition_LlT9",z="admonitionHeading_tbUL",M="admonitionIcon_kALy",A="admonitionContent_S0QG";var w={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},O={secondary:"note",important:"info",success:"tip",warning:"danger"};function S(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),i=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:i}}(e.children),i=t.mdxAdmonitionTitle,r=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:i,children:r})}var R={head:function(e){var n=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,i=(t.mdxType,t.originalType,(0,l.Z)(t,c));return a.createElement(e.props.originalType,i)}return e}(e):e}));return a.createElement(o.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?a.createElement("code",e):a.createElement(s.Z,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var n;return a.createElement(s.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),i=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(L,(0,r.Z)({},e,{summary:t}),i)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&H))}));var n},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,k))}));var n},h1:function(e){return a.createElement(y,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(y,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(y,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(y,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(y,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(y,(0,r.Z)({as:"h6"},e))},admonition:function(e){var n=S(e),t=n.children,i=n.type,r=n.title,l=n.icon,o=function(e){var n,t=null!=(n=O[e])?n:e;return w[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),w.info)}(i),c=null!=r?r:o.label,s=o.iconComponent,u=null!=l?l:a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(x.k.common.admonition,x.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,_)},a.createElement("div",{className:z},a.createElement("span",{className:M},u),c),a.createElement("div",{className:A},t))}};function I(e){var n=e.children;return a.createElement(i.Zo,{components:R},n)}},9407:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),i=t(3366),r=t(7294),l=t(6010),o=t(3743),c="tableOfContents_bqdL",s=["className"];function u(e){var n=e.className,t=(0,i.Z)(e,s);return r.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar",n)},r.createElement(o.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(7462),i=t(3366),r=t(7294),l=t(6668),o=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,i.Z)(e,o);t>=0?n[t].children.push(r):a.push(r)})),a}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function m(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return u(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,r.useRef)(0),n=(0,l.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,l=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=m(o,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function v(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?r.createElement("ul",{className:i?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var h=r.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,E=e.maxHeadingLevel,C=(0,i.Z)(e,p),N=(0,l.L)(),b=null!=g?g:N.tableOfContents.minHeadingLevel,L=null!=E?E:N.tableOfContents.maxHeadingLevel,Z=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:L});return f((0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:L}}),[m,v,b,L])),r.createElement(h,(0,a.Z)({toc:Z,className:o,linkClassName:m},C))}}}]);