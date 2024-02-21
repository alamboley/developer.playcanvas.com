"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8649],{30639:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=s(74848),a=s(28453);const r={title:"\u8272\u76f8\u30fb\u5f69\u5ea6\u30a8\u30d5\u30a7\u30af\u30c8",sidebar_position:4},i=void 0,c={id:"user-manual/graphics/posteffects/hue_saturation",title:"\u8272\u76f8\u30fb\u5f69\u5ea6\u30a8\u30d5\u30a7\u30af\u30c8",description:"\u8272\u76f8 (Hue) \u5f69\u5ea6 (Saturation) \u30a8\u30d5\u30a7\u30af\u30c8\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u8272\u76f8\u3068\u5f69\u5ea6\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/posteffects/hue_saturation.md",sourceDirName:"user-manual/graphics/posteffects",slug:"/user-manual/graphics/posteffects/hue_saturation",permalink:"/ja/user-manual/graphics/posteffects/hue_saturation",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/posteffects/hue_saturation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u8272\u76f8\u30fb\u5f69\u5ea6\u30a8\u30d5\u30a7\u30af\u30c8",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"FXAA\u30a8\u30d5\u30a7\u30af\u30c8",permalink:"/ja/user-manual/graphics/posteffects/fxaa"},next:{title:"\u30bb\u30d4\u30a2\u30a8\u30d5\u30a7\u30af\u30c8",permalink:"/ja/user-manual/graphics/posteffects/sepia"}},o={},u=[];function p(e){const t={a:"a",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u8272\u76f8 (Hue) \u5f69\u5ea6 (Saturation) \u30a8\u30d5\u30a7\u30af\u30c8\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u8272\u76f8\u3068\u5f69\u5ea6\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u308c\u306f\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u304b\u3051\u3066\u3044\u306a\u3044\u753b\u50cf\u3067\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image without effect",src:s(44409).A+"",width:"666",height:"378"})}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u308c\u304c\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u304b\u3051\u3066\u8272\u8abf\u3068\u5f69\u5ea6\u3092\u8abf\u6574\u3057\u305f\u753b\u50cf\u3067\u3059:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image with effect",src:s(30470).A+"",width:"667",height:"377"})}),"\n",(0,n.jsx)(t.p,{children:"\u30d3\u30eb\u30c8\u30a4\u30f3\u306e\u8272\u8abf-\u5f69\u5ea6\u30a8\u30d5\u30a7\u30af\u30c8\u306f\u4ee5\u4e0b\u306e\u69d8\u306a\u5c5e\u6027\u5024\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hue"}),": \u753b\u50cf\u306e\u8272\u8abf\u3067\u3059\u3002-1\u304b\u30891\u306e\u7bc4\u56f2\u306e\u5024\u3092\u3068\u308a\u307e\u3059\u3002(-1\u306f\u30de\u30a4\u30ca\u30b9180\u5ea6\u30010\u306f\u5909\u5316\u306a\u3057\u30011\u306f180\u5ea6\u3068\u306a\u308a\u307e\u3059)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Saturation"}),": \u753b\u50cf\u306e\u5f69\u5ea6\u3067\u3059\u3002-1\u304b\u30891\u306e\u7bc4\u56f2\u306e\u5024\u3092\u3068\u308a\u307e\u3059\u3002(-1\u306f\u7070\u8272\u3067\u5857\u308a\u3064\u3076\u3057\u305f\u72b6\u614b\u30010\u306f\u5909\u5316\u306a\u3057\u30011\u306f\u6700\u5927\u306e\u5f69\u5ea6\u3068\u306a\u308a\u307e\u3059)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8\u30b9\u30af\u30ea\u30d7\u30c8\u306f",(0,n.jsx)(t.a,{href:"https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-huesaturation.js",children:"GitHub"}),"\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},30470:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/with-hue-saturation-c4ce4b64d276b439287c329ea7cf78b2.png"},44409:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/without-effects-5d6f8b77be49d343d0aef079ffc11b75.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);