"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[126],{99:function(e,t,n){n.d(t,{I9:function(){return r},PL:function(){return o},Wn:function(){return a},t$:function(){return l}});const l="_Your output will appear here_",o="Color keyword or hex code. Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). The Shields.io API will use `blue` as a default if no color is provided.",r="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},6742:function(e,t,n){function l(e){return e.replace(/^\/+/,"")}function o(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(t,{F:function(){return l},l:function(){return o}})},9771:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(6252),o=n(3577);const r=["for"],a=["id","checked"],u={key:0,class:"note"};function s(e,t,n,s,i,d){const c=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("label",{for:e.slug},(0,o.zw)(e.label),9,r),(0,l._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,a),e.note?((0,l.wg)(),(0,l.iD)("small",u,[(0,l.Wm)(c,{content:e.note},null,8,["content"])])):(0,l.kq)("",!0)])}var i=n(3945),d=n(6742),c=(0,l.aZ)({name:"CheckboxItem",components:{Markdown:i.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("box",this.label)}}}),p=n(3744);const m=(0,p.Z)(c,[["render",s]]);var g=m},816:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(6252),o=n(3577);const r=(0,l._)("br",null,null,-1);function a(e,t,n,a,u,s){const i=(0,l.up)("Checkbox");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[0]||(t[0]=t=>e.asHtml=t)},null,8,["modelValue"]),r,(0,l._)("pre",null,[(0,l._)("code",{ref:"codeBlock",class:"markdown"},(0,o.zw)(e.outputCode),513)])])}var u=n(7869),s=n.n(u),i=n(770),d=n(9771),c=(0,l.aZ)({name:"CodeItem",components:{Checkbox:d.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,i.Ae)(this.code);return(0,i.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;s().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),p=n(3744);const m=(0,p.Z)(c,[["render",a]]);var g=m},8526:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(6252);const o={class:"app-notes"},r=(0,l._)("h2",null,"Notes",-1);function a(e,t,n,a,u,s){const i=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",o,[r,(0,l._)("p",null,[(0,l.Wm)(i,{content:e.message},null,8,["content"])])])}var u=n(3945),s=(0,l.aZ)({name:"HelpItem",components:{Markdown:u.Z},props:{message:{type:String,required:!0}}}),i=n(3744);const d=(0,i.Z)(s,[["render",a]]);var c=d},1684:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(6252);const o=e=>((0,l.dD)("data-v-61651334"),e=e(),(0,l.Cn)(),e),r={class:"app-results"},a=o((()=>(0,l._)("h2",null,"Output values",-1))),u=o((()=>(0,l._)("h3",null,"Preview",-1))),s=o((()=>(0,l._)("br",null,null,-1))),i=o((()=>(0,l._)("h3",null,"Code",-1)));function d(e,t,n,o,d,c){const p=(0,l.up)("Markdown"),m=(0,l.up)("Code");return(0,l.wg)(),(0,l.iD)("div",r,[a,(0,l._)("div",null,[u,(0,l.Wm)(p,{class:"markdown-preview",content:e.result},null,8,["content"])]),s,(0,l._)("div",null,[i,(0,l.Wm)(m,{code:e.result},null,8,["code"])])])}var c=n(816),p=n(3945),m=(0,l.aZ)({name:"ResultsItem",components:{Markdown:p.Z,Code:c.Z},props:{result:{type:String,required:!0}}}),g=n(3744);const h=(0,g.Z)(m,[["render",d],["__scopeId","data-v-61651334"]]);var b=h},6688:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(6252),o=n(3577);const r=["for"],a={key:0,class:"required"},u=["id","value","placeholder","required","disabled"],s={key:0,class:"note"};function i(e,t,n,i,d,c){const p=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("label",{for:e.slug},[(0,l.Uk)((0,o.zw)(e.label),1),e.isRequired?((0,l.wg)(),(0,l.iD)("span",a,"*")):(0,l.kq)("",!0)],8,r),(0,l._)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,u),e.note?((0,l.wg)(),(0,l.iD)("small",s,[(0,l.Wm)(p,{content:e.note},null,8,["content"])])):(0,l.kq)("",!0)])}var d=n(6742),c=n(3945),p=(0,l.aZ)({name:"TextInput",components:{Markdown:c.Z},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("text",this.label,this.modelValue)}}}),m=n(3744);const g=(0,m.Z)(p,[["render",i],["__scopeId","data-v-de2a2f90"]]);var h=g},3570:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var l=n(6252),o=n(9963);const r={class:"badges container-lg"},a=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-12"},[(0,l._)("h1",null,"Data badges")])],-1),u={class:"row"},s={class:"col-6"},i={class:"app-input"},d=(0,l._)("h2",null,"Input values",-1),c={name:"text"},p=(0,l._)("legend",null,"Text",-1),m=(0,l._)("br",null,null,-1),g=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),b=(0,l._)("br",null,null,-1),f={name:"links"},w=(0,l._)("legend",null,"Links",-1),y=(0,l._)("br",null,null,-1),v=(0,l._)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),k={class:"col-6"},_={class:"row"},q={class:"col-12"};function C(e,t,n,C,Z,x){const V=(0,l.up)("TextInput"),S=(0,l.up)("Results"),F=(0,l.up)("Help");return(0,l.wg)(),(0,l.iD)("div",r,[a,(0,l._)("div",u,[(0,l._)("div",s,[(0,l._)("div",i,[d,(0,l._)("form",{onSubmit:t[5]||(t[5]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,l._)("fieldset",c,[p,(0,l.Wm)(V,{label:"Label",modelValue:e.label,"onUpdate:modelValue":t[0]||(t[0]=t=>e.label=t),isRequired:"",placeholder:"e.g. keywords",note:"Display text for the left of the badge"},null,8,["modelValue"]),m,(0,l.Wm)(V,{label:"Alt text",modelValue:e.altText,"onUpdate:modelValue":t[1]||(t[1]=t=>e.altText=t),placeholder:"e.g. keywords",note:"Markdown fallback alt text - useful for a broken link. If omitted, the _Label_ will be used."},null,8,["modelValue"]),g,(0,l.Wm)(V,{label:"URL",modelValue:e.url,"onUpdate:modelValue":t[2]||(t[2]=t=>e.url=t),isRequired:"",placeholder:"e.g. https://example.com/foo.json",note:"URL for a public JSON file."},null,8,["modelValue"]),h,(0,l.Wm)(V,{label:"Query",modelValue:e.query,"onUpdate:modelValue":t[3]||(t[3]=t=>e.query=t),isRequired:"",placeholder:"e.g. $.keywords ",note:"JSON query to get a value."},null,8,["modelValue"])]),b,(0,l._)("fieldset",f,[w,(0,l.Wm)(V,{label:"Click target",modelValue:e.target,"onUpdate:modelValue":t[4]||(t[4]=t=>e.target=t),placeholder:"e.g. https://example.com",note:"URL like for your GitHub repo, or a local path like `/docs/`."},null,8,["modelValue"])]),y,v],32)])]),(0,l._)("div",k,[(0,l.Wm)(S,{result:e.result},null,8,["result"])])]),(0,l._)("div",_,[(0,l._)("div",q,[(0,l.Wm)(F,{message:e.note},null,8,["message"])])])])}var Z=n(99),x=n(8526),V=n(1684),S=n(6688),F=n(770),M=n(4879);function R(e,t,n,l="",o=""){if(!e)throw new Error("`label` may not be empty");if(!t)throw new Error("`url` may not be empty");if(!n)throw new Error("`query` may not be empty");o||(o=e);const r=(0,M.MN)({label:e,url:t,query:n});return(0,F.ad)({altText:o,imageTarget:r,linkTarget:l})}const I='\nReference a value in a remote data file. The badge will update as the content there changes. Only the _JSON_ format is supported in this generator.\n\nHelp on form fields:\n\n- Label: A text label to display. e.g.\n    - `keywords`\n    - `vscode` or `VS Code`\n- URL: A raw URL for a JSON file on GitHub, or URL for a JSON file on your REST API server. e.g.\n    - `https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json`\n    - `https://example.com/foo.json`\n- Query: Look-up value within the data structure. For syntax rules, see this [JSON path](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) guide.  e.g.\n    - `$.keywords`\n    - `$.engines["vscode"]`\n\nSample badges:\n\n- Badge Generator package.json - [![node](https://img.shields.io/badge/dynamic/json?label=node&query=%24.engines["node"]&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fbadge-generator%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/badge-generator)\n- AutoCommitMsg package.json - [![keywords](https://img.shields.io/badge/dynamic/json?label=keywords&query=%24.keywords&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/auto-commit-msg)\n- AutoCommitMsg package.json - [![vscode](https://img.shields.io/badge/dynamic/json?label=vscode&query=%24.engines["vscode"]&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/auto-commit-msg/)\n';var j=(0,l.aZ)({name:"DataBadges",components:{Help:x.Z,Results:V.Z,TextInput:S.Z},data(){return{altText:"",label:"",url:"",query:"",target:"",result:Z.t$,note:I}},methods:{submit(){const e=R(this.label,this.url,this.query,this.target);this.result=`_Query parameter badge_\n\n${e}\n      `}}}),T=n(3744);const L=(0,T.Z)(j,[["render",C]]);var U=L}}]);
//# sourceMappingURL=data-legacy.a8358713.js.map