(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{673:function(e,t,c){"use strict";var a=c(701),i=c(700),r=c(24),n=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})})};t.a=function(e){return Object(r.jsx)(r.Fragment,{children:e.control?Object(r.jsxs)(a.a,{variant:e.color,onClick:function(){return e.click(e.input,e.index)},type:e.type,style:{minWidth:e.width},block:e.block,disabled:e.disabled,input:e.input,children:[e.loading&&Object(r.jsx)(n,{})," ",e.name]}):Object(r.jsx)(a.a,{variant:e.color,onClick:e.click,type:e.type,style:{minWidth:e.width},block:e.block,disabled:e.disabled,children:e.loading?Object(r.jsx)(n,{}):e.name})})}},712:function(e,t,c){"use strict";c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"a",(function(){return r}));var a=function(e){return""!==e.trim()},i=function(e){return""===e.trim()||/^\d+\.?\d{0,2}$/.test(e)},r=function(e){return/^\d+\.?\d{0,2}$/.test(e)}},719:function(e,t,c){"use strict";var a=c(716),i=c(24);t.a=function(e){return Object(i.jsx)(a.a,{variant:e.color,onClose:e.close,dismissible:!0,children:e.msg})}},736:function(e,t,c){"use strict";var a=c(24);t.a=function(e){return Object(a.jsxs)("div",{className:"form-group",children:[e.label&&Object(a.jsx)("label",{htmlFor:e.id,children:e.label}),Object(a.jsxs)("select",{className:"form-control",id:e.id,value:e.value,onChange:function(t){return e.change(t,e.id)},disabled:e.readOnly&&"readOnly",children:[e.chooseOption&&Object(a.jsx)("option",{children:"Choose One Option"}),e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.toLowerCase(),children:e},t)}))]})]})}},737:function(e,t,c){"use strict";var a=c(708),i=c(741),r=c(24);t.a=function(e){return Object(r.jsx)(a.a,{md:e.md,sm:e.sm,children:Object(r.jsxs)(i.a.Group,{children:[e.label&&Object(r.jsx)(i.a.Label,{children:e.label}),Object(r.jsx)(i.a.Control,{type:e.type,readOnly:e.readOnly,onChange:function(t){return e.change(t,e.id)},value:e.value,onBlur:e.blur,list:e.list,placeholder:e.placeHolder})]})})}},738:function(e,t,c){"use strict";var a=c(181),i=c(672),r=c(673),n=c(24);t.a=function(e){var t;return Object(n.jsxs)(i.f,{className:"mr-2",children:[Object(n.jsx)(r.a,Object(a.a)({color:"dark",width:"30%",type:"submit",name:e.color,block:!1},"width","30%")),Object(n.jsx)(r.a,(t={color:"danger",width:"30%",type:"button",name:"X",block:!1},Object(a.a)(t,"width","30%"),Object(a.a)(t,"control",e.control),Object(a.a)(t,"input",e.input),Object(a.a)(t,"index",e.index),Object(a.a)(t,"click",e.click),t))]})}},739:function(e,t,c){"use strict";var a=c(672),i=c(24);t.a=function(e){return Object(i.jsx)(a.m,{sm:12,md:12,children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:e.labelName}),Object(i.jsx)("textarea",{className:"form-control",readOnly:e.readOnly,onChange:function(t){return e.change(t,e.id)},value:e.value,rows:e.rows,children:e.children})]})})}},740:function(e,t,c){e.exports={view:"Product_view__kmx7j",productImage:"Product_productImage__1KzKP"}},789:function(e,t,c){"use strict";c.r(t);var a=c(182),i=c(181),r=c(37),n=c.n(r),s=c(1),l=c(58),o=c(179),d=c(2),j=c(672),u=(c(178),c(741)),b=c(21),m=c(737),O=c(738),h=c(736),v=c(739),p=c(673),f=c(712),x=c(740),g=c.n(x),y=c(8),k=c(719),w=c(683),N=c(24);t.default=function(){var e,t=Object(b.g)(),c=Object(b.i)(),r=Object(d.useState)(!1),x=Object(o.a)(r,2),P=x[0],R=x[1],S=Object(d.useState)({msg:"",status:"",show:!1}),H=Object(o.a)(S,2),C=H[0],D=H[1],_=Object(d.useState)({color:["black"],height:["46cm"]}),F=Object(o.a)(_,2),q=F[0],$=F[1],I=Object(d.useState)({id:"",isDataReceived:!1,isRequestSend:!1}),L=Object(o.a)(I,2),K=L[0],z=L[1],B=Object(d.useState)({name:{value:"",valid:!1,validators:[f.c]},price:{value:"",offerValue:"",valid:!1,validators:[f.c,f.a]},offerPrice:{value:"",valid:!0,validators:[f.b]},color:{value:"black",valid:!0,validators:[f.c]},image:{value:"",file:"",valid:!1,src:"",validators:[f.c]},description:{value:"",valid:!1,validators:[f.c]},height:{value:"46cm",valid:!0,validators:[f.c]},status:{value:"active",valid:!0,validators:[f.c]}}),G=Object(o.a)(B,2),J=G[0],U=G[1];Object(d.useEffect)(Object(l.a)(n.a.mark((function e(){var t,a,i,r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.id,e.prev=1,e.next=4,Object(y.c)("store/get-product-details/".concat(t));case 4:a=e.sent,(i=a.data.data)?(r=i.color,l=i.height,$((function(e){return Object(s.a)(Object(s.a)({},e),{},{color:r.split(","),height:l.split(",")})})),U((function(e){return Object(s.a)(Object(s.a)({},e),{},{name:Object(s.a)(Object(s.a)({},e.name),{},{value:i.name,valid:!0}),price:Object(s.a)(Object(s.a)({},e.price),{},{value:i.price,valid:!0}),offerPrice:Object(s.a)(Object(s.a)({},e.offerPrice),{},{value:i.offer_price?i.offer_price:"",valid:!0}),image:Object(s.a)(Object(s.a)({},e.image),{},{src:i.image_url,valid:!0}),description:Object(s.a)(Object(s.a)({},e.description),{},{value:i.description,valid:!0}),status:Object(s.a)(Object(s.a)({},e.description),{},{value:i.status,valid:!0})})})),z((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:i.id,isDataReceived:!0,isRequestSend:!0})}))):z((function(e){return Object(s.a)(Object(s.a)({},e),{},{isDataReceived:!1,isRequestSend:!0})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[U,$]);var W=function(e,t){var c,r,n=e.target.value;if("color"===t||"height"===t){var l=q[t].slice();l.includes(n)||(l.push(n),$((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t,l))})))}"image"===t&&(c=URL.createObjectURL(e.target.files[0]),r=e.target.files[0],n=e.target.value),U((function(e){var l,o=!0,d=Object(a.a)(e[t].validators);try{for(d.s();!(l=d.n()).done;){var j=l.value;o=o&&j(n)}}catch(u){d.e(u)}finally{d.f()}return"image"===t?Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t,Object(s.a)(Object(s.a)({},e[t]),{},{value:n,file:r,src:c,valid:o}))):Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t,Object(s.a)(Object(s.a)({},e[t]),{},{value:n,valid:o})))}))},A=!0;for(var E in J)A=A&&J[E].valid;var V=function(e,t){var c=q[e].slice();1!==c.length&&(c.splice(t,1),$((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,c))})))},X=function(){var e=Object(l.a)(n.a.mark((function e(t){var c,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("id",K.id),c.append("name",J.name.value),c.append("price",J.price.value),c.append("offerPrice",J.offerPrice.value),c.append("color",q.color),c.append("height",q.height),c.append("description",J.description.value),c.append("status",J.status.value),J.image.file?c.append("file",J.image.file):c.append("image",J.image.src),e.prev=11,R(!0),e.next=15,Object(y.e)("store/update-product",c);case 15:a=e.sent,D((function(e){return Object(s.a)(Object(s.a)({},e),{},{msg:a.data.data.msg,status:"success",show:!0})})),R(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(11),console.log(e.t0.response);case 23:case"end":return e.stop()}}),e,null,[[11,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"text-right mb-3",children:Object(N.jsx)(p.a,{name:"GO BACK",color:"dark",click:function(){t.push("/admin/store/item")}})}),!K.isDataReceived&&!K.isRequestSend&&Object(N.jsx)(w.a,{}),!K.isDataReceived&&K.isRequestSend&&Object(N.jsx)("h1",{children:"No Data Found"}),K.isDataReceived&&K.isRequestSend&&Object(N.jsxs)(N.Fragment,{children:[C.show&&Object(N.jsx)(k.a,{color:C.status,msg:C.msg,close:function(){D((function(e){return Object(s.a)(Object(s.a)({},e),{},{msg:"",status:"",show:!1})}))}}),Object(N.jsx)(u.a,{onSubmit:X,children:Object(N.jsxs)(j.H,{children:[Object(N.jsxs)(j.m,{md:6,sm:12,children:[Object(N.jsx)(j.H,{children:Object(N.jsx)(j.m,{md:8,sm:12,children:Object(N.jsx)(m.a,{md:12,sm:12,label:"Product Name",id:"name",type:"text",readOnly:!1,value:J.name.value,change:W})})}),Object(N.jsxs)(j.H,{children:[Object(N.jsx)(j.m,{md:4,sm:12,children:Object(N.jsx)(m.a,{md:12,sm:12,label:"Price($)",id:"price",type:"text",readOnly:!1,value:J.price.value,change:W})}),Object(N.jsx)(j.m,{md:4,sm:12,children:Object(N.jsx)(m.a,{md:12,sm:12,label:"Offer Price($)",id:"offerPrice",type:"text",placeHolder:"$0.00",readOnly:!1,value:J.offerPrice.value,change:W})})]}),Object(N.jsx)(j.H,{children:Object(N.jsx)(j.m,{className:"mr-1",children:Object(N.jsx)(m.a,{md:12,sm:12,label:"Product Image",id:"image",type:"file",readOnly:!1,value:J.image.value,change:W})})}),Object(N.jsx)(j.H,{children:Object(N.jsxs)(j.m,{className:"ml-3",children:[Object(N.jsx)("div",{className:"mb-2",children:"Product Color"}),q.color.length>0&&Object(N.jsx)(j.g,{children:q.color.map((function(e,t){return Object(N.jsx)("div",{className:"mb-2",children:Object(N.jsx)(O.a,{color:e,control:!0,input:"color",index:t,click:V})},t)}))}),Object(N.jsx)("div",{style:{display:"inline-block"},children:Object(N.jsx)(h.a,{md:4,sm:12,label:!1,id:"color",options:["black","white","walnet","Natural"],change:W})})]})}),Object(N.jsx)(j.H,{children:Object(N.jsxs)(j.m,{className:"ml-3",children:[Object(N.jsx)("div",{className:"mb-2",children:"Product Height"}),q.height.length>0&&Object(N.jsx)(j.g,{children:q.height.map((function(e,t){return Object(N.jsx)("div",{className:"mb-2",children:Object(N.jsx)(O.a,{color:e,control:!0,input:"height",index:t,click:V})},t)}))}),Object(N.jsx)("div",{style:{display:"inline-block"},children:Object(N.jsx)(h.a,{md:12,sm:12,label:!1,id:"height",options:["46cm","68cm","74cm"],change:W})})]})}),Object(N.jsx)(j.H,{children:Object(N.jsx)(j.m,{children:Object(N.jsx)(v.a,{rows:"5",labelName:"Product Description",id:"description",type:"textarea",readOnly:!1,value:J.description.value,change:W})})}),Object(N.jsx)(j.H,{className:"ml-1",children:Object(N.jsx)(j.m,{md:4,sm:12,children:Object(N.jsx)(h.a,{md:12,sm:12,label:"Product Status",id:"status",options:["draft","active"],value:J.status.value,change:W})})}),Object(N.jsx)(j.H,{children:Object(N.jsx)(j.m,{className:"ml-3",children:Object(N.jsx)(p.a,(e={color:"success",width:"30%",type:"submit",name:"Save Product",block:!1},Object(i.a)(e,"width","30%"),Object(i.a)(e,"loading",P),Object(i.a)(e,"disabled",!A),e))})})]}),Object(N.jsx)(j.m,{md:6,sm:12,className:"d-flex",children:Object(N.jsx)(j.m,{xs:4,sm:3,md:4,lg:4,xl:4,className:"mx-auto my-auto",children:J.image.src&&Object(N.jsx)("img",{src:J.image.src,className:g.a.productImage})})})]})})]})]})}}}]);
//# sourceMappingURL=29.ec2c4ee4.chunk.js.map