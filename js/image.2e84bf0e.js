(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["image"],{1092:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return a}));const l="_Your output will appear here_",i="Color keyword or hex code. Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). The Shields.io API will use `blue` as a default if no color is provided.",o="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},"1cf6":function(e,t,n){"use strict";var l=n("7a23");const i=Object(l["f"])("br",null,null,-1);function o(e,t,n,o,a,s){const c=Object(l["z"])("Checkbox");return Object(l["s"])(),Object(l["e"])("div",null,[Object(l["i"])(c,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[0]||(t[0]=t=>e.asHtml=t)},null,8,["modelValue"]),i,Object(l["f"])("pre",null,[Object(l["f"])("code",{ref:"codeBlock",class:"markdown"},Object(l["B"])(e.outputCode),513)])])}var a=n("1487"),s=n.n(a),c=n("7cba"),r=n("7737"),u=Object(l["j"])({name:"Code",components:{Checkbox:r["a"]},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=Object(c["d"])(this.code);return Object(c["a"])(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;s.a.highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),d=n("6b0d"),b=n.n(d);const h=b()(u,[["render",o]]);t["a"]=h},2156:function(e,t,n){"use strict";n("bdd2")},"446e":function(e,t,n){"use strict";var l=n("7a23");const i=["for"],o={key:0,class:"required"},a=["id","value","placeholder","required","disabled"],s={key:0,class:"note"};function c(e,t,n,c,r,u){const d=Object(l["z"])("Markdown");return Object(l["s"])(),Object(l["e"])("div",null,[Object(l["f"])("label",{for:e.slug},[Object(l["h"])(Object(l["B"])(e.label),1),e.isRequired?(Object(l["s"])(),Object(l["e"])("span",o,"*")):Object(l["d"])("",!0)],8,i),Object(l["f"])("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,a),e.note?(Object(l["s"])(),Object(l["e"])("small",s,[Object(l["i"])(d,{content:e.note},null,8,["content"])])):Object(l["d"])("",!0)])}var r=n("84f8"),u=n("e6e0"),d=Object(l["j"])({name:"TextInput",components:{Markdown:u["a"]},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(r["a"])("text",this.label,this.modelValue)}}}),b=(n("2156"),n("6b0d")),h=n.n(b);const p=h()(d,[["render",c],["__scopeId","data-v-de2a2f90"]]);t["a"]=p},7737:function(e,t,n){"use strict";var l=n("7a23");const i=["for"],o=["id","checked"],a={key:0,class:"note"};function s(e,t,n,s,c,r){const u=Object(l["z"])("Markdown");return Object(l["s"])(),Object(l["e"])("div",null,[Object(l["f"])("label",{for:e.slug},Object(l["B"])(e.label),9,i),Object(l["f"])("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,o),e.note?(Object(l["s"])(),Object(l["e"])("small",a,[Object(l["i"])(u,{content:e.note},null,8,["content"])])):Object(l["d"])("",!0)])}var c=n("e6e0"),r=n("84f8"),u=Object(l["j"])({name:"Checkbox",components:{Markdown:c["a"]},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(r["a"])("box",this.label)}}}),d=n("6b0d"),b=n.n(d);const h=b()(u,[["render",s]]);t["a"]=h},8169:function(e,t,n){"use strict";var l=n("7a23");const i=e=>(Object(l["v"])("data-v-58367787"),e=e(),Object(l["t"])(),e),o={class:"app-results"},a=i(()=>Object(l["f"])("h2",null,"Output values",-1)),s=i(()=>Object(l["f"])("h3",null,"Preview",-1)),c=i(()=>Object(l["f"])("br",null,null,-1)),r=i(()=>Object(l["f"])("h3",null,"Code",-1));function u(e,t,n,i,u,d){const b=Object(l["z"])("Markdown"),h=Object(l["z"])("Code");return Object(l["s"])(),Object(l["e"])("div",o,[a,Object(l["f"])("div",null,[s,Object(l["i"])(b,{class:"markdown-preview",content:e.result},null,8,["content"])]),c,Object(l["f"])("div",null,[r,Object(l["i"])(h,{code:e.result},null,8,["code"])])])}var d=n("1cf6"),b=n("e6e0"),h=Object(l["j"])({name:"Results",components:{Markdown:b["a"],Code:d["a"]},props:{result:{type:String,required:!0}}}),p=(n("aa3a"),n("6b0d")),g=n.n(p);const m=g()(h,[["render",u],["__scopeId","data-v-58367787"]]);t["a"]=m},"84f8":function(e,t,n){"use strict";function l(e){return e.replace(/^\/+/,"")}function i(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}))},9117:function(e,t,n){"use strict";n("e89c")},"97c7":function(e,t,n){},aa3a:function(e,t,n){"use strict";n("97c7")},bdd2:function(e,t,n){},ca2c:function(e,t,n){"use strict";var l=n("7a23");const i={class:"app-notes"},o=Object(l["f"])("h2",null,"Notes",-1);function a(e,t,n,a,s,c){const r=Object(l["z"])("Markdown");return Object(l["s"])(),Object(l["e"])("div",i,[o,Object(l["f"])("p",null,[Object(l["i"])(r,{content:e.message},null,8,["content"])])])}var s=n("e6e0"),c=Object(l["j"])({name:"Help",components:{Markdown:s["a"]},props:{message:{type:String,required:!0}}}),r=n("6b0d"),u=n.n(r);const d=u()(c,[["render",a]]);t["a"]=d},e89c:function(e,t,n){},feec:function(e,t,n){"use strict";n.r(t);var l=n("7a23");const i={class:"images container-lg"},o=Object(l["f"])("div",{class:"row"},[Object(l["f"])("div",{class:"col-12"},[Object(l["f"])("h1",null,"Image"),Object(l["f"])("p",null," Add an image to your README.md file, such as your logo or a sample screenshot of your app. This is just a badge section, but displaying an image using markdown and HTML. An image is provided to make it easier to test sizing, but this image will not be used when you reuse the code elsewhere. ")])],-1),a={class:"row"},s={class:"col-6"},c={class:"app-input"},r=Object(l["f"])("h2",null,"Input values",-1),u={name:"links"},d=Object(l["f"])("legend",null,"Links",-1),b=Object(l["f"])("br",null,null,-1),h={name:"text"},p=Object(l["f"])("legend",null,"Text",-1),g=Object(l["f"])("br",null,null,-1),m=Object(l["f"])("br",null,null,-1),f={id:"appearance"},j=Object(l["f"])("legend",null,"Appearance",-1),O=Object(l["f"])("br",null,null,-1),w=Object(l["f"])("br",null,null,-1),v=Object(l["f"])("input",{class:"btn",type:"submit",value:"Submit"},null,-1),k={class:"col-6"},y={class:"row"},T={class:"col-12"};function x(e,t,n,x,V,S){const q=Object(l["z"])("TextInput"),M=Object(l["z"])("Results"),$=Object(l["z"])("Help");return Object(l["s"])(),Object(l["e"])("div",i,[o,Object(l["f"])("div",a,[Object(l["f"])("div",s,[Object(l["f"])("div",c,[r,Object(l["f"])("form",{onSubmit:t[6]||(t[6]=Object(l["H"])((...t)=>e.submit&&e.submit(...t),["prevent"]))},[Object(l["f"])("fieldset",u,[d,Object(l["i"])(q,{label:"Source",modelValue:e.imgSrc,"onUpdate:modelValue":t[0]||(t[0]=t=>e.imgSrc=t),placeholder:"e.g. /sample.png",note:"Local path or URL.",isRequired:""},null,8,["modelValue"]),Object(l["i"])(q,{label:"Click target",modelValue:e.linkTarget,"onUpdate:modelValue":t[1]||(t[1]=t=>e.linkTarget=t),placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},null,8,["modelValue"])]),b,Object(l["f"])("fieldset",h,[p,Object(l["i"])(q,{label:"Alt text",modelValue:e.altText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.altText=t),placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},null,8,["modelValue"]),g,Object(l["i"])(q,{label:"Title",modelValue:e.imgTitle,"onUpdate:modelValue":t[3]||(t[3]=t=>e.imgTitle=t),note:"Text to show on hover. If not set, then the alt text input's value will be used."},null,8,["modelValue"])]),m,Object(l["f"])("fieldset",f,[j,Object(l["i"])(q,{label:"Width",modelValue:e.width,"onUpdate:modelValue":t[4]||(t[4]=t=>e.width=t),placeholder:"e.g. 400",note:"Measured in pixels, but no px symbol is needed. If you set width only, then height will default to 'auto', which works well on mobile and desktop."},null,8,["modelValue"]),O,Object(l["i"])(q,{label:"Height",modelValue:e.height,"onUpdate:modelValue":t[5]||(t[5]=t=>e.height=t),placeholder:"e.g. 400",note:"Warning: You probably don't need to set height. If you set height but not width, then you might get a squashed image on mobile view."},null,8,["modelValue"])]),w,v],32)])]),Object(l["f"])("div",k,[Object(l["i"])(M,{result:e.result},null,8,["result"])])]),Object(l["f"])("div",y,[Object(l["f"])("div",T,[Object(l["i"])($,{message:e.helpMessage},null,8,["message"])])])])}var V=n("84f8");const S={imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:""};var q=n("1092"),M=n("ca2c"),$=n("8169"),I=n("446e"),H=n("7cba");function C(e,t,n,l="",i,o){const a=n?` title="${n}"`:"",s=t?` alt="${t}"`:"",c=i?` width="${i}"`:"",r=o?` height="${o}"`:"";let u=`<img src="${e}"${s}${a}${c}${r}>`;return l&&(u=`<a href="${l}">\n    ${u}\n</a>`),u}const z="<p>\n  Styling has been setup so that images in the preview pane will not\n  extend beyond the width of the preview area, even no width or a\n  large width has been set.\n</p>\n<p>\n  Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n  will also submit.\n</p>\n<p>\n  Setting <i>width</i> and <i>height</i> is optional, but this can\n  help in certain cases. For example, a screenshot or logo will be set\n  by GitHub to <i>100%</i> of the page width making it look large and\n  take up vertical space, so reduce height or width manually.\n</p>\n<p>\n  Setting height can also make sure the height of the tag is set\n  before the image loads, so it reserves the space - if the height is\n  larger than the original image though then the image will looked\n  stretched.\n</p>\n<p>\n  Warning: If you set height only to say 400, then the image in the\n  README.md will look fine on desktop but ends up looking distorted on\n  mobile.\n</p>";var R=Object(l["j"])({name:"ImageView",components:{Help:M["a"],Results:$["a"],TextInput:I["a"]},data(){return{...S,result:q["b"],helpMessage:z}},computed:{altTextOut(){return Object(V["b"])(this.altText||this.imgSrc)},imgTitleOut(){return Object(V["b"])(this.imgTitle)}},methods:{submit(){console.debug("Process inputs and render results");const e=C(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height),t=Object(H["b"])({altText:this.altTextOut,imageTarget:this.imgSrc,linkTarget:this.linkTarget,hoverTitle:this.imgTitleOut});this.result=`_HTML image_\n\n<div align="center">\n    ${e}\n</div>\n\n\n_Markdown image_\n\n<div align="center">\n\n${t}\n\n</div>\n      `}}}),U=(n("9117"),n("6b0d")),_=n.n(U);const L=_()(R,[["render",x]]);t["default"]=L}}]);
//# sourceMappingURL=image.2e84bf0e.js.map