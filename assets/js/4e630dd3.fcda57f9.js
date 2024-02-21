"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2372],{59822:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(74848),a=t(28453);const i={title:"Introduction",sidebar_position:1},o=void 0,s={id:"shader-editor/introduction",title:"Introduction",description:"What is Shader Editor?",source:"@site/docs/shader-editor/introduction.md",sourceDirName:"shader-editor",slug:"/shader-editor/introduction",permalink:"/shader-editor/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/shader-editor/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"shaderEditorSidebar",previous:{title:"Shader Editor",permalink:"/shader-editor/"},next:{title:"Overview",permalink:"/shader-editor/overview/"}},d={},c=[{value:"What is Shader Editor?",id:"what-is-shader-editor",level:2},{value:"Example",id:"example",level:3},{value:"Next steps",id:"next-steps",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"what-is-shader-editor",children:"What is Shader Editor?"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Shader Editor"})," is a web-based visual programming tool for creating shader materials and effects."]}),"\n",(0,n.jsxs)(r.p,{children:["Instead of writing shader programs directly, in ",(0,n.jsx)(r.strong,{children:"Shader Editor"})," you construct shader graphs. These graphs comprise a network of nodes connected together with edges. ",(0,n.jsx)(r.strong,{children:"Shader Editor"})," will convert a completed graph to the equivalent shader program for use at runtime."]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["For example, the following effect animates multiple surface normal maps and combines them with special effect lighting:\n",(0,n.jsx)(r.img,{src:"/images/shader-editor/sample-effect.gif",alt:"sample effect"})]}),"\n",(0,n.jsxs)(r.p,{children:["The effect is made up of various graphs, including the following one. This graph takes care of unpacking the normals in a normal map:\n",(0,n.jsx)(r.img,{src:"/images/shader-editor/sample-graph.png",alt:"sample graph"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Shader Editor"})," will convert this graph into a shader program, which is executed on a GPU at runtime:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"void func_unpackNormal(in vec3 usr_rawNormal, out vec3 usr_unpackedNormal) {\n    float var_ = float(2);\n    vec3 var_0 = vec3(var_,var_,var_);\n    vec3 var_1 = var_0 * usr_rawNormal;\n    float var_2 = float(-1);\n    vec3 var_3 = vec3(var_2,var_2,var_2);\n    vec3 var_4 = var_1 + var_3;\n    usr_unpackedNormal = var_4;\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(r.p,{children:["Learn more about Shader Editor in general in the ",(0,n.jsx)(r.a,{href:"/shader-editor/overview",children:"Overview"})," section."]}),"\n",(0,n.jsxs)(r.p,{children:["Find out more about the window layout in the ",(0,n.jsx)(r.a,{href:"/shader-editor/window-layout",children:"Window Layout"})," section."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var n=t(96540);const a={},i=n.createContext(a);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);