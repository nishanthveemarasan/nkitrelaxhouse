(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{673:function(e,a,t){"use strict";var n=t(701),c=t(700),r=t(24),l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})})};a.a=function(e){return Object(r.jsx)(r.Fragment,{children:e.control?Object(r.jsxs)(n.a,{variant:e.color,onClick:function(){return e.click(e.input,e.index)},type:e.type,style:{minWidth:e.width},block:e.block,disabled:e.disabled,input:e.input,children:[e.loading&&Object(r.jsx)(l,{})," ",e.name]}):Object(r.jsx)(n.a,{variant:e.color,onClick:e.click,type:e.type,style:{minWidth:e.width},block:e.block,disabled:e.disabled,children:e.loading?Object(r.jsx)(l,{}):e.name})})}},675:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){if(!e)return"";var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();return"".concat(t,"-").concat(n.toString().padStart(2,"0"),"-").concat(c.toString().padStart(2,"0"))}},676:function(e,a,t){"use strict";var n=t(2),c=t.n(n),r=t(24),l=function(e){var a,t,n,c=null===(a=e.body)||void 0===a?void 0:a.to,l=null===(t=e.body)||void 0===t?void 0:t.total,d=null===(n=e.body)||void 0===n?void 0:n.links,i=function(a){e.change(a)};return Object(r.jsxs)("nav",{className:"d-flex justify-content-end",children:[Object(r.jsx)("div",{className:"align-self-center mr-3 font-weight-bold",children:Object(r.jsx)("span",{children:"".concat(c," of ").concat(l)})}),Object(r.jsx)("ul",{className:"pagination",children:d&&d.map((function(e,a){return Object(r.jsxs)("li",{className:"page-item ".concat(e.active&&"active"),children:[0===a&&Object(r.jsx)("span",{className:"page-link",onClick:i.bind(null,e.url),children:"\xab"}),a===d.length-1&&Object(r.jsx)("span",{className:"page-link",onClick:i.bind(null,e.url),children:"\xbb"}),0!==a&&a!==d.length-1&&Object(r.jsx)("span",{className:"page-link",onClick:i.bind(null,e.url),children:e.label})]},a)}))})]})};a.a=c.a.memo(l)},678:function(e,a,t){"use strict";var n=t(716),c=t(24);a.a=function(e){return Object(c.jsx)(n.a,{variant:e.color,children:Object(c.jsx)("div",{className:e.class,children:e.text})})}},680:function(e,a,t){"use strict";var n=t(179),c=t(2);a.a=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(!1),d=Object(n.a)(l,2),i=d[0],s=d[1];return{inputValue:t,setInputValue:r,inputIsTouched:i,inputChangeHandler:function(e){r(e.target.value)},inputBlurHandler:function(e){s(!0)},reset:function(){r(""),s(!1)}}}},681:function(e,a,t){"use strict";var n=t(708),c=t(741),r=t(24);a.a=function(e){return Object(r.jsx)(n.a,{md:e.md,sm:e.sm,children:Object(r.jsxs)(c.a.Group,{children:[e.label&&Object(r.jsx)(c.a.Label,{children:e.label}),Object(r.jsx)(c.a.Control,{type:e.type,readOnly:e.readOnly,onChange:e.change,value:e.value,onBlur:e.blur,list:e.list,placeholder:e.placeHolder})]})})}},685:function(e,a,t){"use strict";var n=t(790),c=t(741),r=t(701),l=t(700),d=t(24);a.a=function(e){return Object(d.jsx)(n.a,{show:e.onShow,onHide:e.onClose,backdrop:"static",keyboard:!1,size:e.size,children:Object(d.jsxs)(c.a,{onSubmit:e.onSubmitHandler,children:[Object(d.jsx)(n.a.Header,{closeButton:!0,children:Object(d.jsx)(n.a.Title,{children:e.heading})}),Object(d.jsx)(n.a.Body,{children:e.children}),Object(d.jsxs)(n.a.Footer,{children:[e.showButton&&Object(d.jsxs)(r.a,{variant:e.variant,type:"submit",style:{width:e.width},children:[e.loading&&Object(d.jsx)(l.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),!e.loading&&e.action]}),Object(d.jsx)(r.a,{variant:"secondary",onClick:e.onClose,children:"Close"})]})]})})}},687:function(e,a,t){"use strict";var n=t(672),c=t(675),r=t(702),l=t.n(r),d=t(24);a.a=function(e){return Object(d.jsxs)(n.h,{children:[Object(d.jsxs)(n.l,{color:e.color,children:[Object(d.jsx)("h5",{className:l.a.cardHeader,children:e.header}),e.subTitle&&Object(d.jsxs)("p",{className:"text-white",children:[" ","By ".concat(e.by," on ").concat(Object(c.a)(e.date))]})]}),Object(d.jsx)(n.i,{children:e.children})]})}},688:function(e,a,t){"use strict";var n=t(682),c=t(24);a.a=function(e){var a=e.header.map((function(e,a){return Object(c.jsx)("th",{children:e},a)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.a,{responsive:"md",striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{className:"thead-light",children:Object(c.jsx)("tr",{children:a})}),Object(c.jsx)("tbody",{children:e.children})]})})}},690:function(e,a,t){"use strict";var n=t(672),c=t(24);a.a=function(e){return Object(c.jsx)(n.m,{sm:12,children:Object(c.jsxs)("div",{className:"form-group",children:[e.label&&Object(c.jsx)("label",{htmlFor:e.id,style:{color:"black"},children:e.label}),Object(c.jsxs)("select",{className:"form-control",id:e.id,value:e.value,onChange:e.change,disabled:e.readOnly&&"readOnly",children:[e.chooseOption&&Object(c.jsx)("option",{children:"Choose One Option"}),e.options.map((function(e,a){return Object(c.jsx)("option",{value:e.toLowerCase(),children:e},a)}))]})]})})}},695:function(e,a,t){"use strict";var n=t(697),c=t(677),r=t(24),l=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.a,{name:e.name,size:"2xl",className:e.class,onClick:e.action})})};a.a=function(e){return Object(r.jsx)(n.a,{value:e.value,children:Object(r.jsx)(l,{class:e.class,name:e.name,action:e.action})})}},698:function(e,a,t){"use strict";var n=t(24);a.a=function(e){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:e.labelName}),Object(n.jsx)("textarea",{className:"form-control",readOnly:e.readOnly,onChange:e.change,value:e.value,rows:e.rows,children:e.children})]})}},702:function(e,a,t){e.exports={cardHeader:"Card_cardHeader__rI94v"}},714:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(708),c=t(741),r=t(24),l=function(e){return Object(r.jsx)(n.a,{md:e.size,children:Object(r.jsx)(c.a.Group,{children:Object(r.jsx)(c.a.Control,{type:e.type,readOnly:e.readOnly,onChange:e.change,value:e.value,onBlur:e.blur,list:e.list,placeholder:e.label})})})}},724:function(e,a,t){"use strict";var n=t(16),c=t(35),r=t(668),l=t.n(r),d=t(2),i=t.n(d),s=t(669),o=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,d=e.noGutters,j=e.as,b=void 0===j?"div":j,O=Object(c.a)(e,o),h=Object(s.a)(t,"row"),m=h+"-cols",p=[];return u.forEach((function(e){var a,t=O[e];delete O[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+m+n+"-"+a)})),i.a.createElement(b,Object(n.a)({ref:a},O,{className:l.a.apply(void 0,[r,h,d&&"no-gutters"].concat(p))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},a.a=j},731:function(e,a,t){"use strict";var n=t(700),c=t(24);a.a=function(e){return Object(c.jsx)("span",{className:e.class,children:Object(c.jsx)(n.a,{animation:"border",size:e.size})})}},769:function(e,a,t){e.exports={delete:"AddOrderItem_delete__FS_R5",view:"AddOrderItem_view__1jpYh"}},770:function(e,a,t){e.exports={delete:"Order_delete__2ebGw",view:"Order_view__2yzWB"}},794:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t(724),r=t(708),l=t(178),d=t(673),i=t(683),s=t(688),o=t(676),u=t(122),j=t(3),b=t(685),O=t(714),h=t(680),m=t(687),p=t(179),x=t(695),v=t(769),f=t.n(v),g=t(24),y=function(){var e=Object(n.useState)(0),a=Object(p.a)(e,2),t=a[0],d=a[1],i=Object(l.c)((function(e){return{addOrder:e.saleStore.addOrder}})),s=Object(l.b)();return Object(g.jsx)(g.Fragment,{children:i.addOrder.orderItem.map((function(e,a){return Object(g.jsxs)(c.a,{children:[Object(g.jsx)(O.a,{type:"text",label:"Product Name",readOnly:!0,value:e.name,change:function(e){return function(e,a){console.log(a)}(0,a)},size:4}),Object(g.jsx)(O.a,{type:"number",label:"Quantity",readOnly:!1,value:e.quantity,change:function(e){return function(e,a){var n=+e.target.value;d(n);var c={id:a,quantity:t};s(j.k.updateOrderItem(c))}(e,a)},size:2}),Object(g.jsx)(r.a,{md:2,children:Object(g.jsx)(x.a,{value:"Remove from List",name:"cil-trash",class:f.a.delete,action:function(){return e=a,console.log(e),void s(j.k.removeOrderItemCart({id:e}));var e}})})]},a)}))})},D=t(681),C=function(e){return Object(g.jsx)("datalist",{id:e.listName,children:e.body.map((function(e,a){return Object(g.jsx)("option",{value:e,children:e},a)}))})},S=t(678),w=function(){var e=Object(h.a)(""),a=e.inputValue,t=e.setInputValue,i=e.inputChangeHandler,s=Object(h.a)(""),o=s.inputValue,p=s.setInputValue,x=s.inputChangeHandler,v=Object(h.a)(1),f=v.inputValue,w=v.setInputValue,M=v.inputChangeHandler,N=Object(l.c)((function(e){return{data:e.saleStore.addSaleModalData,addOrder:e.saleStore.addOrder,refreshORderId:e.saleStore.refreshORderId}})),k=Object(l.b)();Object(n.useEffect)((function(){t(N.data.latestOrderId)}),[t,N.data.latestOrderId]);return Object(g.jsxs)(b.a,{onShow:N.data.isModalOpen,heading:N.data.modalHeading,variant:"primary",action:N.data.modalActionButton,onClose:function(){k(Object(u.a)())},onSubmitHandler:function(e){e.preventDefault();var t={orderId:a,list:N.addOrder.orderItem};t.list.length>0&&k(Object(u.e)(t))},loading:N.addOrder.isLoading,size:"lg",showButton:!0,children:[N.addOrder.orderCreated&&Object(g.jsx)(S.a,{color:N.addOrder.color,text:N.addOrder.msg}),Object(g.jsx)(c.a,{children:Object(g.jsx)(r.a,{children:Object(g.jsx)(D.a,{type:"text",label:"Order Number",readOnly:!0,value:a,change:i,size:"6"})})}),Object(g.jsxs)(m.a,{header:"Add Items To Order",color:"info",children:[Object(g.jsxs)(c.a,{children:[Object(g.jsx)(O.a,{type:"text",label:"Product Name",readOnly:!1,value:o,change:x,size:4,list:"data"}),Object(g.jsx)(C,{body:N.data.productNames,listName:"data"}),Object(g.jsx)(O.a,{type:"number",label:"Quantity",readOnly:!1,size:2,value:f,change:M}),Object(g.jsx)(r.a,{md:3,children:Object(g.jsx)(d.a,{color:"danger",name:"ADD MORE",click:function(){if(o.length>0&&+f>0){var e={name:o,quantity:f};k(j.k.addOrderItemCart({data:e})),p(""),w(1)}},type:"button"})})]}),Object(g.jsx)(y,{})]})]})},M=t(690),N=t(698),k=function(){var e,a=Object(h.a)(),t=a.inputValue,c=a.inputChangeHandler,r=a.setInputValue,d=Object(h.a)(),i=d.inputValue,s=d.inputChangeHandler,o=d.setInputValue,j=Object(h.a)(),O=j.inputValue,m=j.inputChangeHandler,p=j.setInputValue,x=Object(h.a)(),v=x.inputValue,f=x.inputChangeHandler,y=x.setInputValue,C=Object(h.a)(),w=C.inputValue,k=C.inputChangeHandler,_=C.setInputValue,H=Object(l.c)((function(e){return{saleModalData:e.saleStore.saleModalData,updateSaleData:e.saleStore.updateSaleData,saleData:e.saleStore.saleData}}));Object(n.useEffect)((function(){var e,a,t,n,c;"Update"===H.saleModalData.modalAction&&(r(null===(e=H.saleModalData.modalData)||void 0===e?void 0:e.order_number),o(null===(a=H.saleModalData.modalData)||void 0===a?void 0:a.itemname),p(null===(t=H.saleModalData.modalData)||void 0===t?void 0:t.sellcount),y(null===(n=H.saleModalData.modalData)||void 0===n?void 0:n.sell_type),_(null===(c=H.saleModalData.modalData)||void 0===c?void 0:c.note))}),[H.saleModalData,r,o,y,_,p]);var V=Object(l.b)();return Object(g.jsxs)(b.a,{onShow:H.saleModalData.isModalOpen,heading:H.saleModalData.modalHeading,variant:H.saleModalData.variant,action:H.saleModalData.modalAction,size:"md",onClose:function(){V(Object(u.a)())},onSubmitHandler:function(e){if(e.preventDefault(),"Update"===H.saleModalData.modalAction){var a={sell_type:v,sellcount:O,note:w,action:H.saleModalData.modalAction.toLowerCase(),id:H.saleModalData.modalData.id,itemname:i};V(Object(u.h)(a))}else{var t=H.saleModalData.modalData.id,n={id:t,itemname:I(H.saleData.data,t).itemname,action:"delete"};V(Object(u.h)(n))}},loading:H.updateSaleData.isLoading,showButton:!H.updateSaleData.isUpdated||"Cancel"!==H.saleModalData.modalAction,children:[H.updateSaleData.isUpdated&&Object(g.jsx)(S.a,{color:H.updateSaleData.variant,text:H.updateSaleData.msg}),"Cancel"===H.saleModalData.modalAction&&!H.updateSaleData.isUpdated&&Object(g.jsx)(S.a,{color:"danger",text:"please confirm that you are going to Cencel the Order(".concat(null===(e=H.saleModalData.modalData)||void 0===e?void 0:e.order_number," )")}),"Update"===H.saleModalData.modalAction&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D.a,{type:"text",readOnly:!0,label:"Order NUmber",value:t,change:c}),Object(g.jsx)(D.a,{type:"text",readOnly:!0,label:"Product",value:i,change:s}),Object(g.jsx)(D.a,{type:"number",readOnly:!1,label:"Quantity",value:O,change:m}),Object(g.jsx)(M.a,{label:"Order Satus",value:v,change:f,options:["Received","Processing","Packed","Sent"],readOnly:!1}),Object(g.jsx)(N.a,{type:"textarea",labelName:"Note",readOnly:!1,rows:"3",change:k,value:w||" "})]})]})},I=function(e,a){return e.find((function(e){return e.id===a}))},_=t(675),H=t(770),V=t.n(H),z=t(672),R=t(731),A=function(e){var a=Object(l.c)((function(e){return{saleModalData:e.saleStore.saleModalData}})),t=Object(l.b)(),n=function(a){var n={action:"Update",id:e.body[a].id,saleData:e.body[a]};t(Object(u.d)(n))};return Object(g.jsx)(g.Fragment,{children:e.body.map((function(c,r){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:c.id}),Object(g.jsx)("td",{children:c.order_number}),Object(g.jsx)("td",{children:c.itemname}),Object(g.jsx)("td",{children:c.sellcount}),Object(g.jsx)("td",{children:P(c.sell_type)}),Object(g.jsx)("td",{children:Object(_.a)(c.updated_at)}),Object(g.jsxs)("td",{children:[a.saleModalData.saleId===c.id&&"Update"===a.saleModalData.actionType&&(a.saleModalData.isLoading?Object(g.jsx)(R.a,{class:V.a.view,size:"sm"}):Object(g.jsx)(x.a,{value:"Update",class:V.a.view,name:"cil-align-center",action:function(){return n(r)}})),(a.saleModalData.saleId!==c.id||"Update"!==a.saleModalData.actionType)&&Object(g.jsx)(x.a,{value:"Update",class:V.a.view,name:"cil-align-center",action:function(){return n(r)}})," ","|"," ",Object(g.jsx)(x.a,{value:"Delete",class:V.a.delete,name:"cil-trash",action:function(){return function(a){var n={action:"Delete",id:e.body[a].id,saleData:e.body[a]};t(Object(u.d)(n))}(r)}})]})]},r)}))})},P=function(e){switch(e){case"received":return Object(g.jsx)(z.a,{color:"danger",children:"Received"});case"processing":return Object(g.jsx)(z.a,{color:"warning",children:"Processing"});case"packed":return Object(g.jsx)(z.a,{color:"info",children:"Packed"});case"sent":return Object(g.jsx)(z.a,{color:"success",children:"Sent"});default:return!1}};a.default=function(){var e=Object(l.c)((function(e){return{isDataLoaded:e.saleStore.isDataLoaded,saleData:e.saleStore.saleData,reRunComponent:e.saleStore.reRunComponent,addSaleModalData:e.saleStore.addSaleModalData}})),a=Object(l.b)();Object(n.useEffect)((function(){if(e.reRunComponent.isDataChanged){var t={param:e.reRunComponent.queryParam};a(Object(u.c)(t))}}),[e.reRunComponent.isDataChanged,a,e.reRunComponent.queryParam]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(w,{}),Object(g.jsx)(c.a,{children:Object(g.jsx)(r.a,{sm:12,className:"text-right mb-3",children:Object(g.jsx)(d.a,{name:"Add Order",color:"success",click:function(){a(Object(u.f)())},loading:e.addSaleModalData.isLoading})})}),!e.isDataLoaded&&Object(g.jsx)(i.a,{}),e.isDataLoaded&&Object(g.jsx)(s.a,{header:["#","Order ID","Product","Quantity","Order Created","Status","Action"],children:Object(g.jsx)(A,{body:e.saleData.data})}),e.isDataLoaded&&Object(g.jsx)(o.a,{body:e.saleData,change:function(e){var t=e.split("?")[1];a(j.k.updateParam({param:t}));var n={param:t};a(Object(u.c)(n))}})]})}}}]);
//# sourceMappingURL=9.28233b8c.chunk.js.map