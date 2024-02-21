"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6376],{3112:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),t=n(28453);const i={title:"AR",sidebar_position:20},s=void 0,o={id:"user-manual/xr/ar/index",title:"AR",description:"PlayCanvas lets you create Augmented Reality (AR) applications for mobile and HMD devices through the WebXR API, as well as through integrations with popular AR frameworks.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/index.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/",permalink:"/ja/user-manual/xr/ar/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"AR",sidebar_position:20},sidebar:"userManualSidebar",previous:{title:"WebXR\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u9069\u5316",permalink:"/ja/user-manual/xr/optimizing-webxr"},next:{title:"Anchors",permalink:"/ja/user-manual/xr/ar/anchors"}},l={},c=[{value:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",level:2},{value:"WebXR AR\u306e\u958b\u59cb",id:"webxr-ar\u306e\u958b\u59cb",level:2},{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"PlayCanvas lets you create Augmented Reality (AR) applications for mobile and HMD devices through the WebXR API, as well as through integrations with popular AR frameworks."}),"\n",(0,r.jsx)(a.h2,{id:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",children:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"}),"\n",(0,r.jsxs)(a.p,{children:["AR capabilities are available using the Android Chrome Browser, Meta Quest Browser, Magic Leap Helio, Samsung Internet, Microsoft Edge and many others. Additionally, frameworks such as ",(0,r.jsx)(a.a,{href:"/user-manual/xr/ar/8th-wall-integration/",children:"8th Wall"})," and ",(0,r.jsx)(a.a,{href:"/user-manual/xr/ar/zappar-integration/",children:"Zappar"})," allow users to experience AR content in most mobile browsers, including Safari."]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"The aforementioned frameworks are external and have separate licensing, available on their respective websites."})}),"\n",(0,r.jsx)(a.h2,{id:"webxr-ar\u306e\u958b\u59cb",children:"WebXR AR\u306e\u958b\u59cb"}),"\n",(0,r.jsx)(a.p,{children:"PlayCanvas\u306e\u7d44\u307f\u8fbc\u307fAR\u30b5\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30b7\u30fc\u30f3\u306e\u4e3b\u8981\u30ab\u30e1\u30e9\u306e\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u306f\u900f\u660e\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"/images/user-manual/xr/ar/transparent-clear-color.png",alt:"Transparent Clear Color"})}),"\n",(0,r.jsx)(a.p,{children:"AR\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30b5\u30dd\u30fc\u30c8\u3068\u5229\u7528\u53ef\u80fd\u6027\u3092\u307e\u305a\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u64cd\u4f5c(\u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u306a\u3069)\u306b\u5fdc\u3058\u3066\u3001AR\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // check if XR is supported and AR is available\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {\n        // start AR using a camera component\n        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR);\n    }\n});\n"})}),"\n",(0,r.jsx)(a.p,{children:"Once the user is done, the AR session can be exited by calling:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,r.jsx)(a.p,{children:"Augmented Reality allows blending of the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with a special projection of a rendered buffer on see-through glasses. Usually, it is provided with spatial tracking relative to the real-world environment."}),"\n",(0,r.jsxs)(a.p,{children:["Suitable reference space: ",(0,r.jsx)(a.code,{children:"pc.XRSPACE_LOCALFLOOR"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",children:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8"}),"\n",(0,r.jsx)(a.p,{children:"PlayCanvas provides several \u2018Starter Kit\u2019 projects to help you and your AR experiences get up and running faster. When creating a new project, simply select from the dialog the template that suits you best."})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var r=n(96540);const t={},i=r.createContext(t);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);