(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{673:function(t,e,a){"use strict";var n=a(701),s=a(700),c=a(24),o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})})};e.a=function(t){return Object(c.jsx)(c.Fragment,{children:t.control?Object(c.jsxs)(n.a,{variant:t.color,onClick:function(){return t.click(t.input,t.index)},type:t.type,style:{minWidth:t.width},block:t.block,disabled:t.disabled,input:t.input,children:[t.loading&&Object(c.jsx)(o,{})," ",t.name]}):Object(c.jsx)(n.a,{variant:t.color,onClick:t.click,type:t.type,style:{minWidth:t.width},block:t.block,disabled:t.disabled,children:t.loading?Object(c.jsx)(o,{}):t.name})})}},675:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(t){if(!t)return"";var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate();return"".concat(a,"-").concat(n.toString().padStart(2,"0"),"-").concat(s.toString().padStart(2,"0"))}},676:function(t,e,a){"use strict";var n=a(2),s=a.n(n),c=a(24),o=function(t){var e,a,n,s=null===(e=t.body)||void 0===e?void 0:e.to,o=null===(a=t.body)||void 0===a?void 0:a.total,i=null===(n=t.body)||void 0===n?void 0:n.links,r=function(e){t.change(e)};return Object(c.jsxs)("nav",{className:"d-flex justify-content-end",children:[Object(c.jsx)("div",{className:"align-self-center mr-3 font-weight-bold",children:Object(c.jsx)("span",{children:"".concat(s," of ").concat(o)})}),Object(c.jsx)("ul",{className:"pagination",children:i&&i.map((function(t,e){return Object(c.jsxs)("li",{className:"page-item ".concat(t.active&&"active"),children:[0===e&&Object(c.jsx)("span",{className:"page-link",onClick:r.bind(null,t.url),children:"\xab"}),e===i.length-1&&Object(c.jsx)("span",{className:"page-link",onClick:r.bind(null,t.url),children:"\xbb"}),0!==e&&e!==i.length-1&&Object(c.jsx)("span",{className:"page-link",onClick:r.bind(null,t.url),children:t.label})]},e)}))})]})};e.a=s.a.memo(o)},678:function(t,e,a){"use strict";var n=a(716),s=a(24);e.a=function(t){return Object(s.jsx)(n.a,{variant:t.color,children:Object(s.jsx)("div",{className:t.class,children:t.text})})}},680:function(t,e,a){"use strict";var n=a(179),s=a(2);e.a=function(){var t=Object(s.useState)(""),e=Object(n.a)(t,2),a=e[0],c=e[1],o=Object(s.useState)(!1),i=Object(n.a)(o,2),r=i[0],l=i[1];return{inputValue:a,setInputValue:c,inputIsTouched:r,inputChangeHandler:function(t){c(t.target.value)},inputBlurHandler:function(t){l(!0)},reset:function(){c(""),l(!1)}}}},681:function(t,e,a){"use strict";var n=a(708),s=a(741),c=a(24);e.a=function(t){return Object(c.jsx)(n.a,{md:t.md,sm:t.sm,children:Object(c.jsxs)(s.a.Group,{children:[t.label&&Object(c.jsx)(s.a.Label,{children:t.label}),Object(c.jsx)(s.a.Control,{type:t.type,readOnly:t.readOnly,onChange:t.change,value:t.value,onBlur:t.blur,list:t.list,placeholder:t.placeHolder})]})})}},685:function(t,e,a){"use strict";var n=a(790),s=a(741),c=a(701),o=a(700),i=a(24);e.a=function(t){return Object(i.jsx)(n.a,{show:t.onShow,onHide:t.onClose,backdrop:"static",keyboard:!1,size:t.size,children:Object(i.jsxs)(s.a,{onSubmit:t.onSubmitHandler,children:[Object(i.jsx)(n.a.Header,{closeButton:!0,children:Object(i.jsx)(n.a.Title,{children:t.heading})}),Object(i.jsx)(n.a.Body,{children:t.children}),Object(i.jsxs)(n.a.Footer,{children:[t.showButton&&Object(i.jsxs)(c.a,{variant:t.variant,type:"submit",style:{width:t.width},children:[t.loading&&Object(i.jsx)(o.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),!t.loading&&t.action]}),Object(i.jsx)(c.a,{variant:"secondary",onClick:t.onClose,children:"Close"})]})]})})}},688:function(t,e,a){"use strict";var n=a(682),s=a(24);e.a=function(t){var e=t.header.map((function(t,e){return Object(s.jsx)("th",{children:t},e)}));return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(n.a,{responsive:"md",striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{className:"thead-light",children:Object(s.jsx)("tr",{children:e})}),Object(s.jsx)("tbody",{children:t.children})]})})}},690:function(t,e,a){"use strict";var n=a(672),s=a(24);e.a=function(t){return Object(s.jsx)(n.m,{sm:12,children:Object(s.jsxs)("div",{className:"form-group",children:[t.label&&Object(s.jsx)("label",{htmlFor:t.id,style:{color:"black"},children:t.label}),Object(s.jsxs)("select",{className:"form-control",id:t.id,value:t.value,onChange:t.change,disabled:t.readOnly&&"readOnly",children:[t.chooseOption&&Object(s.jsx)("option",{children:"Choose One Option"}),t.options.map((function(t,e){return Object(s.jsx)("option",{value:t.toLowerCase(),children:t},e)}))]})]})})}},695:function(t,e,a){"use strict";var n=a(697),s=a(677),c=a(24),o=function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.a,{name:t.name,size:"2xl",className:t.class,onClick:t.action})})};e.a=function(t){return Object(c.jsx)(n.a,{value:t.value,children:Object(c.jsx)(o,{class:t.class,name:t.name,action:t.action})})}},696:function(t,e,a){"use strict";var n=a(717),s=a(24);e.a=function(t){return Object(s.jsx)(n.a,{variant:t.color,style:{fontSize:t.size},onClick:t.click,children:t.value})}},698:function(t,e,a){"use strict";var n=a(24);e.a=function(t){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:t.labelName}),Object(n.jsx)("textarea",{className:"form-control",readOnly:t.readOnly,onChange:t.change,value:t.value,rows:t.rows,children:t.children})]})}},717:function(t,e,a){"use strict";var n=a(16),s=a(35),c=a(668),o=a.n(c),i=a(2),r=a.n(i),l=a(669),d=["bsPrefix","variant","pill","className","as"],u=r.a.forwardRef((function(t,e){var a=t.bsPrefix,c=t.variant,i=t.pill,u=t.className,j=t.as,b=void 0===j?"span":j,p=Object(s.a)(t,d),h=Object(l.a)(a,"badge");return r.a.createElement(b,Object(n.a)({ref:e},p,{className:o()(u,h,i&&h+"-pill",c&&h+"-"+c)}))}));u.displayName="Badge",u.defaultProps={pill:!1},e.a=u},724:function(t,e,a){"use strict";var n=a(16),s=a(35),c=a(668),o=a.n(c),i=a(2),r=a.n(i),l=a(669),d=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],j=r.a.forwardRef((function(t,e){var a=t.bsPrefix,c=t.className,i=t.noGutters,j=t.as,b=void 0===j?"div":j,p=Object(s.a)(t,d),h=Object(l.a)(a,"row"),O=h+"-cols",f=[];return u.forEach((function(t){var e,a=p[t];delete p[t];var n="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+O+n+"-"+e)})),r.a.createElement(b,Object(n.a)({ref:e},p,{className:o.a.apply(void 0,[c,h,i&&"no-gutters"].concat(f))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},e.a=j},732:function(t,e,a){"use strict";var n=a(695),s=a(178),c=a(675),o=a(733),i=a.n(o),r=a(119),l=a(696),d=a(673),u=a(21),j=a(24);e.a=function(t){var e=Object(s.c)((function(t){return{singlePostData:t.postStore.singlePostData}})),a=Object(u.g)(),o=Object(s.b)(),l=function(t){o(Object(r.f)(t,"post")),a.push("/admin/singlePost")};return Object(j.jsx)(j.Fragment,{children:t.body.map((function(a,s){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:a.id}),Object(j.jsx)("td",{children:a.name}),Object(j.jsx)("td",{children:a.title}),Object(j.jsx)("td",{children:Object(j.jsx)(d.a,{color:"primary",name:"View Post",type:"button",size:"20%",loading:e.singlePostData.isDataReceived,click:l.bind(null,a.id)})}),Object(j.jsx)("td",{children:Object(c.a)(a.updated_at)}),Object(j.jsx)("td",{children:a.comments_count}),Object(j.jsx)("td",{children:a.likes_count}),Object(j.jsx)("td",{children:b(a.status)}),Object(j.jsx)("td",{children:b(a.type)}),Object(j.jsxs)("td",{children:[Object(j.jsx)(n.a,{value:"Edit Post",class:i.a.view,name:"cil-align-center",action:function(){return function(e){var a={id:t.body[e].id,postData:t.body[e],status:"update",action:"Update"};o(Object(r.h)(a))}(s)}})," ","| ",p(a.id,a.type,o)]})]},s)}))})};var b=function(t){switch(t){case"publish":return Object(j.jsx)(l.a,{color:"primary",value:"Published",size:"100%"});case"draft":return Object(j.jsx)(l.a,{color:"warning",value:"Draft",size:"100%"});case"active":return Object(j.jsx)(l.a,{color:"success",value:"Active",size:"100%"});case"disabled":return Object(j.jsx)(l.a,{color:"danger",value:"Inactive",size:"100%"});default:return!1}},p=function(t,e,a){var n=function(t,e){var n={id:t,status:e,action:"Delete"};a(Object(r.h)(n))};switch(e){case"active":return Object(j.jsx)(d.a,{color:"danger",name:"Disable",type:"button",size:"20%",loading:!1,click:n.bind(null,t,"disabled")});case"disabled":return Object(j.jsx)(d.a,{color:"success",name:"Enable",type:"button",size:"20%",loading:!1,click:n.bind(null,t,"active")});default:return!1}}},733:function(t,e,a){t.exports={delete:"Posts_delete__1ECHf",view:"Posts_view__3s4Hd",edit:"Posts_edit__23Ahf"}},734:function(t,e,a){"use strict";var n=a(2),s=a(178),c=a(678),o=a(681),i=a(690),r=a(698),l=a(685),d=a(680),u=a(119),j=a(24);e.a=function(){var t=Object(d.a)(),e=t.inputValue,a=t.setInputValue,b=t.inputChangeHandler,p=t.inputBlurHandler,h=Object(d.a)(),O=h.inputValue,f=h.setInputValue,m=h.inputChangeHandler,x=h.inputBlurHandler,v=Object(d.a)(),g=v.inputValue,D=v.setInputValue,y=v.inputChangeHandler,P=v.inputBlurHandler,M=Object(d.a)(),C=M.inputValue,w=M.setInputValue,k=M.inputChangeHandler,N=M.inputBlurHandler,S=Object(s.c)((function(t){return{postModalData:t.postStore.postModalData,updatePostModalData:t.postStore.updatePostModalData}}));Object(n.useEffect)((function(){"Update"===S.postModalData.ModalAction&&(a(S.postModalData.postData.name),f(S.postModalData.postData.title),D(S.postModalData.postData.content),w(S.postModalData.postData.status))}),[S.postModalData,a,f,D,w]);var H=Object(s.b)();return Object(j.jsxs)(l.a,{onShow:S.postModalData.isModalOpen,heading:S.postModalData.ModalHeading,variant:S.postModalData.variant,showButton:S.postModalData.showButton,action:"Update"===S.postModalData.ModalAction?"Update":"success"===S.postModalData.ModalAction?"success":"active"===S.postModalData.status?"Enable":"Disable",onClose:function(){H(Object(u.b)())},size:"lg",onSubmitHandler:function(t){if(t.preventDefault(),"Update"===S.postModalData.ModalAction){var e={id:S.postModalData.postId,title:O,content:g,status:C};H(Object(u.i)(e))}else{var a={id:S.postModalData.postId,action:S.postModalData.status};H(Object(u.d)(a))}},loading:S.updatePostModalData.isLoading,children:[S.updatePostModalData.isUpdated&&Object(j.jsx)(c.a,{color:S.updatePostModalData.variant,text:S.updatePostModalData.msg}),"Delete"===S.postModalData.ModalAction&&!S.updatePostModalData.isUpdated&&Object(j.jsx)(c.a,{color:"active"===S.postModalData.status?"success":"danger",text:"active"===S.postModalData.status?"please confirm that you are going to ENABLE the post":"please confirm that you are going to DISABLE the post"}),"Update"===S.postModalData.ModalAction&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{type:"text",readOnly:!0,label:"Author Name",value:e,change:b,blur:p}),Object(j.jsx)(o.a,{type:"text",readOnly:!1,label:"Post Title",value:O,change:m,blur:x}),Object(j.jsx)(r.a,{type:"textarea",labelName:"Post Content",readOnly:!1,rows:"5",change:y,value:g,blur:P}),Object(j.jsx)(i.a,{label:"Post Type",value:C,change:k,options:["Publish","Draft"],blur:N})]})]})}},786:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a(724),c=a(708),o=a(178),i=a(673),r=a(683),l=a(688),d=a(676),u=a(119),j=a(3),b=a(732),p=a(734),h=a(24);e.default=function(){var t=Object(o.c)((function(t){return{isPostDataLoaded:t.postStore.isPostDataLoaded,postData:t.postStore.postData,reRunPostComponent:t.postStore.reRunPostComponent,userId:t.userStore.reRunComponent.postId}})),e=Object(o.b)();Object(n.useEffect)((function(){if(t.reRunPostComponent.isDataChanged){var a={id:t.userId,param:t.reRunPostComponent.queryParam};e(Object(u.e)(a))}}),[t.reRunPostComponent.isDataChanged,e,t.reRunPostComponent.queryParam,t.reRunPostComponent.id]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{}),Object(h.jsx)(s.a,{children:Object(h.jsx)(c.a,{sm:12,className:"text-right mb-3",children:Object(h.jsx)(i.a,{name:"Add Post",color:"success",click:function(){e(Object(u.g)())}})})}),!t.isPostDataLoaded&&Object(h.jsx)(r.a,{}),t.isPostDataLoaded&&Object(h.jsx)(l.a,{header:["#","Author","Title","Content","Date Created","Comments","Likes","Published","Status","Action"],children:Object(h.jsx)(b.a,{body:t.postData.data})}),t.isPostDataLoaded&&Object(h.jsx)(d.a,{body:t.postData,change:function(a){if(a){var n=a.split("?")[1];e(j.f.updateParam({param:n}));var s={id:t.userId,param:n};e(Object(u.e)(s))}}})]})}}}]);
//# sourceMappingURL=11.31116360.chunk.js.map