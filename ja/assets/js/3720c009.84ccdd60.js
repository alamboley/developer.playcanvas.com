"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4787],{30876:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(96540);var s=a(34164),l=a(69024),r=a(17559),n=a(21312);const c=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(56133),o=a(51107);const g={tag:"tag_Nnez"};var u=a(74848);function h(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function d(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(h,{letterEntry:e},e.letter)))})}var j=a(41463);function m(e){let{title:t}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.be,{title:t}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function p(e){let{tags:t,title:a}=e;return(0,u.jsx)(l.e3,{className:(0,s.A)(r.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:a}),(0,u.jsx)(d,{tags:t})]})})})})}function x(e){const t=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...e,title:t}),(0,u.jsx)(p,{...e,title:t})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(34164),l=a(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(74848);function c(e){let{permalink:t,label:a,count:c}=e;return(0,n.jsxs)(l.A,{href:t,className:(0,s.A)(r.tag,c?r.tagWithCount:r.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}}}]);