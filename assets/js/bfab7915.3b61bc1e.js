"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2935],{61179:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>h,toc:()=>o});var n=t(85893),s=t(11151);const a={title:"Runtime Lightmaps",sidebar_position:5},l=void 0,h={id:"user-manual/graphics/lighting/runtime-lightmaps",title:"Runtime Lightmaps",description:"Sponza",source:"@site/docs/user-manual/graphics/lighting/runtime-lightmaps.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/runtime-lightmaps",permalink:"/user-manual/graphics/lighting/runtime-lightmaps",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/runtime-lightmaps.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Runtime Lightmaps",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Ambient Occlusion",permalink:"/user-manual/graphics/lighting/ambient-occlusion"},next:{title:"Clustered Lighting",permalink:"/user-manual/graphics/lighting/clustered-lighting"}},r={},o=[{value:"Runtime Lightmap Generation",id:"runtime-lightmap-generation",level:2},{value:"Setting Up Lights for Baking",id:"setting-up-lights-for-baking",level:2},{value:"Soft Directional Light",id:"soft-directional-light",level:3},{value:"Baking an Environment Light",id:"baking-an-environment-light",level:2},{value:"Lightmap Filtering",id:"lightmap-filtering",level:2},{value:"Setting Up Models for Baking",id:"setting-up-models-for-baking",level:2},{value:"Common Light Settings",id:"common-light-settings",level:2},{value:"Lightmapping Settings",id:"lightmapping-settings",level:2},{value:"Auto-Unwrapping and UV1 Generation",id:"auto-unwrapping-and-uv1-generation",level:2}];function g(e){const i={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/sponza.jpg",alt:"Sponza"}),"\n",(0,n.jsx)(i.em,{children:"All the lighting in this scene is provided by lightmap textures"})]}),"\n",(0,n.jsx)(i.p,{children:"Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures, which are then applied on materials. This is an efficient and realistic way to light a scene if many of the light sources and geometry are static or environmental."}),"\n",(0,n.jsx)(i.h2,{id:"runtime-lightmap-generation",children:"Runtime Lightmap Generation"}),"\n",(0,n.jsx)(i.p,{children:"PlayCanvas offers a convenient solution to generating lightmaps. Using the standard light components in the Editor, you can choose which lights are used to bake lightmaps and which are used to dynamically light the scene at runtime. The lights that you set to bake will be used when the application generates the lightmaps that light the scene."}),"\n",(0,n.jsx)(i.p,{children:"There are multiple advantages to runtime lightmap generation:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Lighting is not performed at ",(0,n.jsx)(i.strong,{children:"runtime"})]}),"\n",(0,n.jsxs)(i.li,{children:["It is possible to use hundreds of ",(0,n.jsx)(i.strong,{children:"static lights"})," to light your scene"]}),"\n",(0,n.jsxs)(i.li,{children:["In most cases, rendering lightmaps at runtime is ",(0,n.jsx)(i.strong,{children:"faster"})," than downloading many lightmap textures"]}),"\n",(0,n.jsxs)(i.li,{children:["It is possible to mix ",(0,n.jsx)(i.strong,{children:"static and dynamic lights"})," in the Editor"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Rebaking"})," can be performed at runtime"]}),"\n",(0,n.jsxs)(i.li,{children:["Lightmaps are ",(0,n.jsx)(i.strong,{children:"HDR"})]}),"\n",(0,n.jsxs)(i.li,{children:["Both ",(0,n.jsx)(i.strong,{children:"Color"})," and ",(0,n.jsx)(i.strong,{children:"Direction"})," data can be baked, enabling some specularity on baked surfaces"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"However, a disadvantage of runtime lightmap generation is that currently we do not support baking global illumination or some other advanced features of specialized baking tools."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["The use of ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"batching"})," is not compatible with runtime lightmaps, as each lightmapped object requires its own unique lightmap texture."]})}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-lights-for-baking",children:"Setting Up Lights for Baking"}),"\n",(0,n.jsx)(i.p,{children:"Each Light Component contains the following settings to enable lightmap baking. By default, new lights are set to Dynamic."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bake Lightmap"})," \u2013 When enabled, the light will bake lightmaps for any lightmapped model that is in range."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bake Direction"})," \u2013 Specifies whether light contributes to light direction information baking. This affects specularity results if the ",(0,n.jsx)(i.strong,{children:"Color and Direction"})," Lightmapping Mode is chosen in Scene Setting."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-lightmap-bake.png",alt:"Light Component Settings"})}),"\n",(0,n.jsx)(i.p,{children:"There are two other options that modify the lights behavior: Affect Dynamic and Affect Lightmapped. These determine which models the light will affect at runtime. If either of these options are enabled, the light will operate at runtime and incur runtime cost."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Affect Dynamic"})," \u2013 If enabled, the light will affect any model that is ",(0,n.jsx)(i.strong,{children:"not lightmapped"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Affect Lightmapped"})," \u2013 If enabled, the light will also affect any model that ",(0,n.jsx)(i.strong,{children:"is lightmapped"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Note that a light can't have both ",(0,n.jsx)(i.strong,{children:"Bake Lightmap"})," and ",(0,n.jsx)(i.strong,{children:"Affect Lightmapped"})," enabled, as this would generate a lightmap for a model while the light adds the same lighting at runtime (i.e. the same work is done twice)."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-light-shadows.png",alt:"Light Component Shadow Settings"})}),"\n",(0,n.jsxs)(i.p,{children:["Lightmap lights use the same ",(0,n.jsx)(i.strong,{children:"Shadows"})," setting as dynamic lights, except the shadow calculations are done once, when generating the lightmaps. This way, it is much cheaper to enable shadows on lightmap lights. For more information, see the ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/shadows",children:"Shadows"})," page. Note that the Shadow Cascade options are ignored for baking."]}),"\n",(0,n.jsx)(i.h3,{id:"soft-directional-light",children:"Soft Directional Light"}),"\n",(0,n.jsxs)(i.p,{children:["By default, baked lights cast hard shadows. To improve the visual quality, a soft baked shadow is available for ",(0,n.jsx)(i.strong,{children:"Directional"})," lights when the ",(0,n.jsx)(i.strong,{children:"Bake Direction"})," option is not enabled. In this case, two additional options are available:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bake Samples"})," \u2013 Specifies the number of sampled used to bake the light into the lightmap. It defaults to 1 and has a maximum value of 255. The value affects the baking performance and should be set as low as possible (5-20)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bake Area"})," \u2013 Specifies the penumbra angle in degrees, allowing a soft shadow boundary."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-directional-light.png",alt:"Soft Directional Light Settings"})}),"\n",(0,n.jsx)(i.p,{children:"The following images show the difference between hard shadows and soft shadows. The Bake Samples is 15 and the Area is 10."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/shadows-hard-soft.png",alt:"Hard and Soft Shadow Examples"})}),"\n",(0,n.jsx)(i.h2,{id:"baking-an-environment-light",children:"Baking an Environment Light"}),"\n",(0,n.jsxs)(i.p,{children:["PlayCanvas supports two types of environment lighting: ",(0,n.jsx)(i.a,{href:"/user-manual/scenes/settings#ambient-color",children:"Ambient Color"})," and ",(0,n.jsx)(i.a,{href:"/user-manual/scenes/settings#skybox",children:"Skybox"}),". By default, these are both applied at runtime."]}),"\n",(0,n.jsxs)(i.p,{children:["A limitation of runtime environment light application is the lack of ",(0,n.jsx)(i.strong,{children:"Ambient Occlusion"}),". As an alternative, the environment light can be baked into the lightmap, including Ambient Occlusion. This can be configured in the ",(0,n.jsx)(i.a,{href:"/user-manual/scenes/settings#lightmapping",children:"Lightmapping"})," section of the global settings."]}),"\n",(0,n.jsxs)(i.p,{children:["If ",(0,n.jsx)(i.strong,{children:"Ambient Bake"})," is enabled, the contribution of the environment light will be baked to the lightmaps, including this Ambient Occlusion. Note that the ",(0,n.jsx)(i.strong,{children:"Samples"})," setting affects the baking performance and should be set as low as possible (5-20)."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmapping-settings-ambient-bake.png",alt:"Lightmapping Settings"})}),"\n",(0,n.jsx)(i.p,{children:"The following images show the effect of Ambient Color, with and without the Ambient Occlusion."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/ambient-color.png",alt:"Ambient Color Examples"})}),"\n",(0,n.jsx)(i.h2,{id:"lightmap-filtering",children:"Lightmap Filtering"}),"\n",(0,n.jsx)(i.p,{children:"For Soft Directional Light or Environment Light baking, a low number of samples is often used in order to improve the baking performance. This creates some banding artifacts, as you can see in the following image, which uses 15 samples."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-15-samples.png",alt:"Lightmap with 15 samples"})}),"\n",(0,n.jsx)(i.p,{children:"To improve the quality of lightmaps, a higher number of sample can be used. This results in the best quality possible, as you can see in the following image, which uses 100 samples."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-100-samples.png",alt:"Lightmap with 100 samples"})}),"\n",(0,n.jsx)(i.p,{children:"As a more performant alternative, the lightmap can be filtered using a smart bilateral blur for acceptable quality with greater performance. This can be seen in the following image, which uses 15 samples and has filtering enabled."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-filtering.png",alt:"Lightmap with 15 samples and filtering"})}),"\n",(0,n.jsx)(i.p,{children:"Note that the filtering is done on the final baked lightmaps and can create some visible edges over the seams of unwrapped UVs, since the lightmap is not filtered across the seams. Therefore, filtering may not be suitable for every scene. To minimize the artifacts, you should have a good balance between a strong filter and a large number of samples."}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-models-for-baking",children:"Setting Up Models for Baking"}),"\n",(0,n.jsxs)(i.p,{children:["Each ",(0,n.jsx)(i.strong,{children:"Model"})," or ",(0,n.jsx)(i.strong,{children:"Render"})," component must have lightmapping enabled, in order for it to receive lightmaps. Lightmapping can be enabled in the component's properties, by checking the ",(0,n.jsx)(i.strong,{children:"Lightmapped"})," option."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-settings.png",alt:"Model Component Settings"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/render-settings.png",alt:"Render Component Settings"})}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Cast Lightmap Shadows"})," option determines if the model casts shadows in the lightmap. You can see the resolution of the lightmap texture generated and there is also an option to apply a multiplier to the area of UV1 to affect its size. Lightmap size multipliers are discussed below."]}),"\n",(0,n.jsx)(i.h2,{id:"common-light-settings",children:"Common Light Settings"}),"\n",(0,n.jsx)(i.p,{children:"There several combinations of light settings that can be used. Each one has a use case and by using lights with different combinations, you can balance high-quality visuals with performance."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Bake"}),(0,n.jsx)(i.th,{children:"Affect Non-Baked"}),(0,n.jsx)(i.th,{children:"Affect Baked"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"This is the default dynamic light. Affects all non-lightmapped models."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"This light generates lightmaps for lightmapped models and has no cost at runtime. Most static environment lights could use this setting."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"This light generates lightmaps but also affects non-lightmapped models. It is useful if you have dynamic/moving entities that need to be lit with this light. For example, a prominent environment light that also should affect the player character."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"false"}),(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"true"}),(0,n.jsx)(i.td,{children:"This light is a dynamic light which will affect both lightmapped and non-lightmapped models."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"lightmapping-settings",children:"Lightmapping Settings"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Size Multiplier"})," setting affects all Model and Render Components. PlayCanvas will automatically decide what resolution lightmaps are required for a model. It calculates this value based on the scale and geometry area size of the model. You can influence this calculation by modifying the ",(0,n.jsx)(i.strong,{children:"Size Multiplier"})," field in the Model or Render Component's Global Settings."]}),"\n",(0,n.jsx)(i.p,{children:"For example, consider a plane that is 1x1 unit (meter) in size. If the Global Size Multiplier is 16 and the Model Component Multiplier is 2, it will generate a Lightmap Texture size of 32x32 (1 sq/m * 16 * 2). You will have 32x32 pixels on one square meter, which is about 3cm a pixel size."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Max Resolution"})," sets the maximum resolution limit for the generated lightmaps, in order to conserve memory."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Mode"})," allows you to specify what data should be baked (e.g. Diffuse Color or Direction from pixel to light). Direction data is used to simulate simplistic specularity. Only a single direction can be baked, which leads to complexity when multiple lights overlap. Direction baking can be then set on individual lights as well."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmapping-settings.png",alt:"Global Lightmapping Settings"})}),"\n",(0,n.jsx)(i.h2,{id:"auto-unwrapping-and-uv1-generation",children:"Auto-Unwrapping and UV1 Generation"}),"\n",(0,n.jsxs)(i.p,{children:["Lightmaps are always applied using the second set of ",(0,n.jsx)(i.strong,{children:"UV coordinates (UV1)"})," on the model asset. For the best results, we recommend that you add a second UV set from the 3D content tool to your model, before you upload it to PlayCanvas. For more information about lightmap friendly UV's, see the ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping/#uv-mapping",children:"UV Mapping"})," section."]}),"\n",(0,n.jsx)(i.p,{children:"If your model doesn't have a UV1 set, the PlayCanvas Editor can automatically unwrap and generate UV1 co-ordinates for the model."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-uv1-missing.png",alt:"Model Component: UV1 Missing"})}),"\n",(0,n.jsx)(i.p,{children:"If your model is missing a UV1 map, you will see a warning in the Model Component when you enable lightmapping."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/auto-unwrap.jpg",alt:"Model Asset: Auto Unwrap Pipeline"})}),"\n",(0,n.jsxs)(i.p,{children:["To fix the warning, select the model asset and open the ",(0,n.jsx)(i.strong,{children:"Pipeline"})," section. Click the ",(0,n.jsx)(i.strong,{children:"Auto-Unwrap"})," button and wait for the progress bar to complete. Auto-unwrap will edit the model asset, so if you re-import the model from the source (e.g. upload a new FBX) the precomputed UV1 will be lost. If the uploaded model has no UV1, you will need to auto-unwrap the model again."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Padding"})," option determines the space between sections when unwrapping occurs. If you see light bleeding (i.e. light that shouldn't be in the lightmap), you can increase the padding to reduce bleeding."]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>h,a:()=>l});var n=t(67294);const s={},a=n.createContext(s);function l(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);