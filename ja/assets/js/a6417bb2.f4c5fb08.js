"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4537],{51680:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(85893),a=r(11151);const s={title:"DOM Overlay",sidebar_position:1},o=void 0,i={id:"user-manual/xr/ar/dom-overlay",title:"DOM Overlay",description:"When using mono screen displays for AR sessions, you can use regular HTML and CSS for the UI. This API provides the ability to overlay DOM elements over the AR application screen.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/dom-overlay.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/dom-overlay",permalink:"/ja/user-manual/xr/ar/dom-overlay",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/dom-overlay.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DOM Overlay",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Depth Sensing",permalink:"/ja/user-manual/xr/ar/depth-sensing"},next:{title:"Hit Testing",permalink:"/ja/user-manual/xr/ar/hit-testing"}},l={},c=[{value:"Support",id:"support",level:2},{value:"\u30a4\u30d9\u30f3\u30c8",id:"\u30a4\u30d9\u30f3\u30c8",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When using mono screen displays for AR sessions, you can use regular HTML and CSS for the UI. This API provides the ability to overlay DOM elements over the AR application screen."}),"\n",(0,t.jsx)(n.p,{children:"Before starting the AR session, you need to provide an element as a root to the DOM Overlay:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.domOverlay.root = element;\napp.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,t.jsx)(n.p,{children:"You can check if the DOM Overlay is supported:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.domOverlay.supported) {\n    // DOM Overlay is supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.domOverlay.available) {\n        // DOM Overlay is available\n    }\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30a4\u30d9\u30f3\u30c8",children:"\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,t.jsxs)(n.p,{children:["You can interact with elements just like with regular HTML. However, the input source's ",(0,t.jsx)(n.code,{children:"select"})," event will still fire in an application. To prevent input source events from passing through DOM elements, you can intercept them:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const buttons = app.xr.domOverlay.querySelectorAll('button');\n\nfor (let i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener('beforexrselect', (evt) => {\n        evt.preventDefault();\n    });\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);