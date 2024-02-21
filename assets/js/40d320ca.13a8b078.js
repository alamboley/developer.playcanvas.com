"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2102],{1081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var o=t(85893),i=t(11151);const s={title:"Input",sidebar_position:8},c=void 0,l={id:"user-manual/user-interface/input",title:"Input",description:"The user can interact with Element components, by enabling the useInput field on the Element component:",source:"@site/docs/user-manual/user-interface/input.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/input",permalink:"/user-manual/user-interface/input",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/input.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Input",sidebar_position:8},sidebar:"userManualSidebar",previous:{title:"Layout Groups",permalink:"/user-manual/user-interface/layout-groups"},next:{title:"Localization",permalink:"/user-manual/user-interface/localization"}},a={},r=[{value:"Input Events",id:"input-events",level:2},{value:"mousedown",id:"mousedown",level:3},{value:"mouseup",id:"mouseup",level:3},{value:"mouseenter",id:"mouseenter",level:3},{value:"mouseleave",id:"mouseleave",level:3},{value:"mousemove",id:"mousemove",level:3},{value:"mousewheel",id:"mousewheel",level:3},{value:"click",id:"click",level:3},{value:"touchstart",id:"touchstart",level:3},{value:"touchend",id:"touchend",level:3},{value:"touchmove",id:"touchmove",level:3},{value:"touchcancel",id:"touchcancel",level:3},{value:"Event Handling",id:"event-handling",level:2},{value:"Event bubbling",id:"event-bubbling",level:2},{value:"Mouse and Touch event conflict on Google Chrome",id:"mouse-and-touch-event-conflict-on-google-chrome",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The user can interact with ",(0,o.jsx)(n.a,{href:"/user-manual/scenes/components/element/",children:"Element"})," components, by enabling the ",(0,o.jsx)(n.code,{children:"useInput"})," field on the Element component:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/assets/fonts/use-input.png",alt:"Use Input"})}),"\n",(0,o.jsxs)(n.p,{children:["Also in order for that to work there must be an initialized instance of ",(0,o.jsx)(n.code,{children:"pc.ElementInput"})," for ",(0,o.jsx)(n.code,{children:"pc.Application#elementInput"}),". This is created automatically for you if you are using the Editor. If you are using the Engine only make sure to create an instance ",(0,o.jsx)(n.em,{children:"before"})," the other input devices like ",(0,o.jsx)(n.code,{children:"pc.Mouse"})," or ",(0,o.jsx)(n.code,{children:"pc.TouchDevice"})," like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const app = new pc.Application(canvas, {\n    elementInput: new pc.ElementInput(canvas),\n    mouse: new pc.Mouse(canvas),\n    touch: !!('ontouchstart' in window) ? new pc.TouchDevice(canvas) : null,\n    keyboard: new pc.Keyboard(window),\n    gamepads: new pc.GamePads(),\n    ...\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"input-events",children:"Input Events"}),"\n",(0,o.jsx)(n.p,{children:"When you enable input on an Element component the following events will be fired:"}),"\n",(0,o.jsx)(n.h3,{id:"mousedown",children:"mousedown"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse is pressed while the mouse cursor is on the component."}),"\n",(0,o.jsx)(n.h3,{id:"mouseup",children:"mouseup"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse is released while the mouse cursor is on the component."}),"\n",(0,o.jsx)(n.h3,{id:"mouseenter",children:"mouseenter"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse cursor enters the component."}),"\n",(0,o.jsx)(n.h3,{id:"mouseleave",children:"mouseleave"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse cursor leaves the component."}),"\n",(0,o.jsx)(n.h3,{id:"mousemove",children:"mousemove"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse cursor is moved on the component."}),"\n",(0,o.jsx)(n.h3,{id:"mousewheel",children:"mousewheel"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse wheel is scrolled on the component."}),"\n",(0,o.jsx)(n.h3,{id:"click",children:"click"}),"\n",(0,o.jsx)(n.p,{children:"Fired when the mouse is pressed and released on the component or when a touch starts and ends on the component."}),"\n",(0,o.jsx)(n.h3,{id:"touchstart",children:"touchstart"}),"\n",(0,o.jsx)(n.p,{children:"Fired when a touch starts on the component."}),"\n",(0,o.jsx)(n.h3,{id:"touchend",children:"touchend"}),"\n",(0,o.jsx)(n.p,{children:"Fired when a touch ends on the component."}),"\n",(0,o.jsx)(n.h3,{id:"touchmove",children:"touchmove"}),"\n",(0,o.jsx)(n.p,{children:"Fired when a touch moves after it started touching the component."}),"\n",(0,o.jsx)(n.h3,{id:"touchcancel",children:"touchcancel"}),"\n",(0,o.jsx)(n.p,{children:"Fired when a touch is cancelled on the component."}),"\n",(0,o.jsx)(n.h2,{id:"event-handling",children:"Event Handling"}),"\n",(0,o.jsx)(n.p,{children:"To handle an input event you can listen for it on the Element component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"this.entity.element.on('click', function (event) {\n    console.log('The element ' + event.element.entity.name + ' was clicked.');\n}, this);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"event-bubbling",children:"Event bubbling"}),"\n",(0,o.jsxs)(n.p,{children:["When an input event is fired on an Element component it bubbles up to its parent Elements unless you call ",(0,o.jsx)(n.code,{children:"event.stopPropagation()"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"this.entity.element.on('click', function (event) {\n    // stop bubbling\n    event.stopPropagation();\n\n    console.log('The element ' + event.element.entity.name + ' was clicked.');\n}, this);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"stopPropagation"})," will also stop the event from being handled by the other input devices like ",(0,o.jsx)(n.code,{children:"pc.Mouse"})," or ",(0,o.jsx)(n.code,{children:"pc.TouchDevice"}),". So if for example you are handling mouse input using ",(0,o.jsx)(n.code,{children:"app.mouse.wasPressed"}),", you can call ",(0,o.jsx)(n.code,{children:"stopPropagation"})," on the ",(0,o.jsx)(n.code,{children:"mousedown"})," event to prevent ",(0,o.jsx)(n.code,{children:"app.mouse.wasPressed"})," from returning true. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var InputScript = pc.createScript('inputScript');\n\nInputScript.prototype.initialize = function () {\n    this.entity.element.on('mousedown', function (evt) {\n        evt.stopPropagation();\n    }, this);\n},\n\nInputScript.prototype.update = function (dt) {\n    if (this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) {\n        // do something when the left button was pressed.\n        // this will not be called if the button was pressed on the Element\n        // because we call stopPropagation\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mouse-and-touch-event-conflict-on-google-chrome",children:"Mouse and Touch event conflict on Google Chrome"}),"\n",(0,o.jsx)(n.p,{children:"Google Chrome simulates mouse events also on touch devices. By doing so it could cause some unexpected behavior. For example if you hide a button right after the click event, another UI element that lays behind it could also receive an unwanted click event."}),"\n",(0,o.jsxs)(n.p,{children:["To prevent this behavior you can call the ",(0,o.jsx)(n.code,{children:"preventDefault()"})," method of the native event object on the ",(0,o.jsx)(n.code,{children:"pc.EVENT_TOUCHEND"})," event:"]}),"\n",(0,o.jsx)(n.p,{children:"Here is small script to include once in your scene:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var TouchFix = pc.createScript('touchFix');\n\n// initialize code called once per entity\nTouchFix.prototype.initialize = function() {\n   // Only register touch events if the device supports touch\n   const touch = this.app.touch;\n   if (touch) {\n       touch.on(pc.EVENT_TOUCHEND, function(event) {\n           // This prevents that a mouse click event will be executed after a touch event.\n           event.event.preventDefault();\n       });\n   }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var o=t(67294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);