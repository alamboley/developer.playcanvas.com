"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5570],{30786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const o={title:"Elements",sidebar_position:3},r=void 0,a={id:"user-manual/user-interface/elements",title:"Elements",description:"Elements are the individual pieces that make up a user interface screen. A user interface element is added by attaching an Element component to an entity and adding that entity as a child or descendent of the Screen entity. An element that is part of a Screen differs from a regular entity in the way that its transform is calculated and hence the way that it is positioned on screen.",source:"@site/docs/user-manual/user-interface/elements.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/elements",permalink:"/user-manual/user-interface/elements",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/elements.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Elements",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Screens",permalink:"/user-manual/user-interface/screens"},next:{title:"Group Elements",permalink:"/user-manual/user-interface/group-elements"}},l={},d=[{value:"Element Positioning",id:"element-positioning",level:2},{value:"Element Resizing",id:"element-resizing",level:2},{value:"Pivot",id:"pivot",level:2},{value:"Anchor",id:"anchor",level:2},{value:"Split Anchors",id:"split-anchors",level:2},{value:"Margin",id:"margin",level:2},{value:"Loose Elements",id:"loose-elements",level:2}];function A(e){const t={code:"code",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Elements are the individual pieces that make up a user interface screen. A user interface element is added by attaching an Element component to an entity and adding that entity as a child or descendent of the Screen entity. An element that is part of a Screen differs from a regular entity in the way that its transform is calculated and hence the way that it is positioned on screen."}),"\n",(0,i.jsx)(t.p,{children:"In addition to the local position, rotation and scale which are used to calculate an entity's position relative to its parent, Element components also use the anchor, pivot and margin properties to determine, where the local position should be measured against, where the center point of the Element rectangle should be and the distance between the edges of the Element rectangle and the anchors."}),"\n",(0,i.jsx)(t.p,{children:"These new properties give you the plenty of control to layout your user interfaces, including align them with other Elements or position them with fixed distances to Elements."}),"\n",(0,i.jsx)(t.h2,{id:"element-positioning",children:"Element Positioning"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Element Guide",src:n(75791).A+"",width:"663",height:"343"})}),"\n",(0,i.jsx)(t.h2,{id:"element-resizing",children:"Element Resizing"}),"\n",(0,i.jsx)(t.p,{children:"To resize your Element activate the Resize gizmo or press '4':"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resize Gizmo Toolbar",src:n(85533).A+"",width:"300",height:"587"})}),"\n",(0,i.jsx)(t.p,{children:"Then drag the corners around to adjust the size of the Element:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resize Gizmo Viewport",src:n(88186).A+"",width:"572",height:"192"})}),"\n",(0,i.jsx)(t.h2,{id:"pivot",children:"Pivot"}),"\n",(0,i.jsxs)(t.p,{children:["The pivot property of an Element determines at which point the position, rotation and scale. The pivot is defined by two numbers between 0 and 1 which determine the pivots position in the X and Y direction along the total width and height of the element. For example, ",(0,i.jsx)(t.code,{children:"[0,0]"})," sets the pivot to the bottom left of the element, ",(0,i.jsx)(t.code,{children:"[1,1]"})," sets the pivot to the top right of the element."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Pivot",src:n(3316).A+"",width:"250",height:"108"})}),"\n",(0,i.jsx)(t.h2,{id:"anchor",children:"Anchor"}),"\n",(0,i.jsxs)(t.p,{children:["The anchor property determines where the point or points on the parent that the Element's position is calculated from. The anchor value is specified by two points ",(0,i.jsx)(t.code,{children:"[minX, minY]"})," and ",(0,i.jsx)(t.code,{children:"[maxX, maxY]"}),". In the Editor this is displayed as 4 numbers: [minX, minY, maxX, maxY]"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Anchor",src:n(35239).A+"",width:"314",height:"34"})}),"\n",(0,i.jsxs)(t.p,{children:["For example, setting the anchor to ",(0,i.jsx)(t.code,{children:"[0,0,0,0]"})," will anchor the element to the bottom left of its parent. The position of the element will set the offset from the bottom left of the parent"]}),"\n",(0,i.jsx)(t.h2,{id:"split-anchors",children:"Split Anchors"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes it is useful to anchor different edges of an element to different places. For example, if you wish to make a element that stretches to fill the screen whatever the resolution. You can do this by splitting the anchor's min and max values."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Split Anchor",src:n(4360).A+"",width:"753",height:"535"})}),"\n",(0,i.jsxs)(t.p,{children:["In this image the Anchor is set to ",(0,i.jsx)(t.code,{children:"[0,0,1,1]"})," so we are anchoring the edges of the element to the edges of the parent. Each edge has a margin of 50 pixels so the Element is fixed to fill the parent with 50 pixels from edge."]}),"\n",(0,i.jsx)(t.h2,{id:"margin",children:"Margin"}),"\n",(0,i.jsxs)(t.p,{children:["The margin property is only available when the anchor value is split in one axis. The margin sets the number of Screen component pixels from the anchor that the edge of the element will be. Shortcuts to the margin values are available in scripts on the Element component as the properties ",(0,i.jsx)(t.code,{children:"left"}),", ",(0,i.jsx)(t.code,{children:"right"}),", ",(0,i.jsx)(t.code,{children:"top"})," and ",(0,i.jsx)(t.code,{children:"bottom"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"loose-elements",children:"Loose Elements"}),"\n",(0,i.jsx)(t.p,{children:"Whilst the primary use-case of Elements is to be part of a User Interface Screen Component. It is valid to have an Element component which is not part of a screen. For example, a single in-world piece of text."}),"\n",(0,i.jsx)(t.p,{children:"Sizes and positioning for Elements that do not have a Screen behaves slightly differently. Whereas for a screen a 32x32 Element is 32 pixels a Screen-less Element will be 32m by 32m. Adjust your sizes accordingly."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},35239:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},75791:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/element-guide-4f2901944da4d74594c852daca027d5c.png"},88186:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gizmo-resize-viewport-a8986c54727ebbac9bab32c907a5dd16.png"},85533:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gizmo-resize-909ccb57a2865bba581974c34b764265.png"},3316:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},4360:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/split-anchor-a1e5dd8b10632348a95c08dabc36c38f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);