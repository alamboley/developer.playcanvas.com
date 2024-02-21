"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6674],{88499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(74848),r=n(28453);const s={title:"Creating new scripts",sidebar_position:1},a=void 0,c={id:"user-manual/scripting/creating-new",title:"Creating new scripts",description:"To create a new script use the Asset Panel and select New Script. You will be asked to enter a name for for your new script file.",source:"@site/docs/user-manual/scripting/creating-new.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/creating-new",permalink:"/user-manual/scripting/creating-new",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/creating-new.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating new scripts",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Scripting",permalink:"/user-manual/scripting/"},next:{title:"Code Editor",permalink:"/user-manual/scripting/code-editor"}},o={},p=[{value:"Attaching to a script component",id:"attaching-to-a-script-component",level:2},{value:"Adding a script component at run time",id:"adding-a-script-component-at-run-time",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"To create a new script use the Asset Panel and select New Script. You will be asked to enter a name for for your new script file."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/scripting/new-script.png",alt:"New Script"})}),"\n",(0,i.jsx)(t.p,{children:"Double-click the script asset in the panel to open it in the code editor."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/scripting/code-editor-new-script.png",alt:"Code Editor"})}),"\n",(0,i.jsx)(t.h2,{id:"attaching-to-a-script-component",children:"Attaching to a script component"}),"\n",(0,i.jsx)(t.p,{children:"The script component is created in the same way as other components. Once you have a script component you can select a script from your asset list."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/scripting/select-script.png",alt:"Select Script"})}),"\n",(0,i.jsx)(t.p,{children:"Scripts are shown by their name, when you select a script to add it to a component, the script content is parsed and any attributes that have been declared are exposed in the interface."}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-script-component-at-run-time",children:"Adding a script component at run time"}),"\n",(0,i.jsx)(t.p,{children:"If you want to dynamically add scripts while your application is running you can do so from the script component"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'var entity = new pc.Entity();\nentity.addComponent("script");\nentity.script.create("rotate", {\n    attributes: {\n        speed: 20\n    }\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:['Note, that the "rotate" script should already have been loaded at this point. You can load a script using the Asset Registry\'s ',(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html#load",children:"load()"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["To remove a script from a component use the ",(0,i.jsx)(t.code,{children:"destroy"})," method"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'entity.script.destroy("rotate");\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);