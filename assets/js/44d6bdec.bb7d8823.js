"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9519],{99343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(74848),a=n(28453);const r={title:"Scripting",sidebar_position:11},s=void 0,o={id:"user-manual/scripting/index",title:"Scripting",description:"Scripts are how you make your PlayCanvas application interactive. They are written in regular JavaScript the same programming language that is used to program web pages.",source:"@site/docs/user-manual/scripting/index.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/",permalink:"/user-manual/scripting/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Scripting",sidebar_position:11},sidebar:"userManualSidebar",previous:{title:"Using the Engine Standalone",permalink:"/user-manual/engine/standalone"},next:{title:"Creating new scripts",permalink:"/user-manual/scripting/creating-new"}},c={},p=[{value:"Terminology",id:"terminology",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Scripts are how you make your PlayCanvas application interactive. They are written in regular ",(0,i.jsx)(t.strong,{children:"JavaScript"})," the same programming language that is used to program web pages."]}),"\n",(0,i.jsx)(t.p,{children:"You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which are often specific to your application or re-usable chunks that provide useful behaviors."}),"\n",(0,i.jsx)(t.p,{children:"Generally you won't have to worry about the engine code, it's a single JavaScript file included into your application. If you're rewriting parts of the engine you probably don't need this introduction to scripting."}),"\n",(0,i.jsx)(t.p,{children:'Here is an example of a simple script. It is called "rotate" and it rotates the entity that it is attached to by 10\xb0 every second.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'var Rotate = pc.createScript("rotate");\n\nRotate.prototype.update = function (dt) {\n    this.entity.rotate(0, 10*dt, 0);\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Scripts are defined by the name given when they are created and they are attached to ",(0,i.jsx)(t.a,{href:"/user-manual/scenes/components/script/",children:"Script Component"})," via the Editor or by adding a script component to an Entity in your code."]}),"\n",(0,i.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(t.p,{children:"Lets define a few pieces of terminology."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Script"})})," A script is a Javascript file that contains one or more definitions of Script Objects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Script Component"})})," The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"ScriptType"})})," A ScriptType is a JavaScript object created using the ",(0,i.jsx)(t.code,{children:"pc.createScript"})," function. It is essentially a new class which will be instantiated when it is added to an Entity."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Script Instance"})})," A script instance is an instance of a ScriptType. One script instance is created for every Entity that has a ScriptType attached to a script component."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);