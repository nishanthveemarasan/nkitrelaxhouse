(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{675:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){if(!e)return"";var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return"".concat(a,"-").concat(r.toString().padStart(2,"0"),"-").concat(n.toString().padStart(2,"0"))}},676:function(e,t,a){"use strict";var r=a(2),n=a.n(r),c=a(24),o=function(e){var t,a,r,n=null===(t=e.body)||void 0===t?void 0:t.to,o=null===(a=e.body)||void 0===a?void 0:a.total,i=null===(r=e.body)||void 0===r?void 0:r.links,s=function(t){e.change(t)};return Object(c.jsxs)("nav",{className:"d-flex justify-content-end",children:[Object(c.jsx)("div",{className:"align-self-center mr-3 font-weight-bold",children:Object(c.jsx)("span",{children:"".concat(n," of ").concat(o)})}),Object(c.jsx)("ul",{className:"pagination",children:i&&i.map((function(e,t){return Object(c.jsxs)("li",{className:"page-item ".concat(e.active&&"active"),children:[0===t&&Object(c.jsx)("span",{className:"page-link",onClick:s.bind(null,e.url),children:"\xab"}),t===i.length-1&&Object(c.jsx)("span",{className:"page-link",onClick:s.bind(null,e.url),children:"\xbb"}),0!==t&&t!==i.length-1&&Object(c.jsx)("span",{className:"page-link",onClick:s.bind(null,e.url),children:e.label})]},t)}))})]})};t.a=n.a.memo(o)},690:function(e,t,a){"use strict";var r=a(672),n=a(24);t.a=function(e){return Object(n.jsx)(r.m,{sm:12,children:Object(n.jsxs)("div",{className:"form-group",children:[e.label&&Object(n.jsx)("label",{htmlFor:e.id,style:{color:"black"},children:e.label}),Object(n.jsxs)("select",{className:"form-control",id:e.id,value:e.value,onChange:e.change,disabled:e.readOnly&&"readOnly",children:[e.chooseOption&&Object(n.jsx)("option",{children:"Choose One Option"}),e.options.map((function(e,t){return Object(n.jsx)("option",{value:e.toLowerCase(),children:e},t)}))]})]})})}},695:function(e,t,a){"use strict";var r=a(697),n=a(677),c=a(24),o=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(n.a,{name:e.name,size:"2xl",className:e.class,onClick:e.action})})};t.a=function(e){return Object(c.jsx)(r.a,{value:e.value,children:Object(c.jsx)(o,{class:e.class,name:e.name,action:e.action})})}},696:function(e,t,a){"use strict";var r=a(717),n=a(24);t.a=function(e){return Object(n.jsx)(r.a,{variant:e.color,style:{fontSize:e.size},onClick:e.click,children:e.value})}},713:function(e,t,a){"use strict";var r=a(682),n=a(24);t.a=function(e){var t=e.header.map((function(e,t){return Object(n.jsx)("th",{children:e},t)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(r.a,{responsive:"lg",striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{variant:"info",children:Object(n.jsx)("tr",{children:t})}),Object(n.jsx)("tbody",{children:e.children})]})})}},714:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(708),n=a(741),c=a(24),o=function(e){return Object(c.jsx)(r.a,{md:e.size,children:Object(c.jsx)(n.a.Group,{children:Object(c.jsx)(n.a.Control,{type:e.type,readOnly:e.readOnly,onChange:e.change,value:e.value,onBlur:e.blur,list:e.list,placeholder:e.label})})})}},774:function(e,t,a){},775:function(e,t,a){e.exports={dropDown:"FIlterOrder_dropDown__SSXtZ",searchBox:"FIlterOrder_searchBox__1MzSD",content:"FIlterOrder_content__33weO"}},800:function(e,t,a){"use strict";a.r(t);var r=a(178),n=a(2),c=a(123),o=a(683),i=a(713),s=a(695),d=a(696),l=a(675),u=a(774),j=a.n(u),b=a(24),O=function(e){var t=e.body;return Object(b.jsx)(b.Fragment,{children:t.map((function(t,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.order_id}),Object(b.jsx)("td",{children:h(t.customer_details)}),Object(b.jsx)("td",{children:t.amount}),Object(b.jsx)("td",{children:m(t.status)}),Object(b.jsx)("td",{children:v(t.pay_method)}),Object(b.jsx)("td",{children:p(t.delivery_status)}),Object(b.jsx)("td",{children:Object(l.a)(t.created_at)}),Object(b.jsx)("td",{children:Object(b.jsx)(s.a,{value:"Edit Product",class:j.a.view,name:"cil-align-center",action:function(){return e.action(a)}})})]},a)}))})},h=function(e){return"".concat(e.firstName," ").concat(e.lastName)},m=function(e){switch(e){case"paid":return Object(b.jsx)(d.a,{color:"success",value:"Paid"});default:return!1}},v=function(e){switch(e){case"credit_card":return Object(b.jsx)(d.a,{color:"danger",value:"Credit Card"});case"stripe":return Object(b.jsx)(d.a,{color:"primary",value:"Stripe Payment"});case"paypal":return Object(b.jsx)(d.a,{color:"secondary",value:"Paypal"});default:return!1}},p=function(e){switch(e){case"processing":return Object(b.jsx)(d.a,{color:"info",value:"Processing"});case"packed":return Object(b.jsx)(d.a,{color:"primary",value:"Packed"});case"delivered":return Object(b.jsx)(d.a,{color:"secondary",value:"Delivered"});default:return!1}},f=a(3),x=a(676),g=a(21),y=a(181),D=a(1),S=a(179),C=a(672),_=a(714),k=a(690),P=a(775),N=a.n(P),w=function(e){var t=Object(r.c)((function(e){return{data:e.shopStore.orderIdArray.data}}));return Object(b.jsx)(b.Fragment,{children:t.data.length>0&&t.data.map((function(t,a){return Object(b.jsx)("li",{onClick:function(){return e.idChange(t.order_id)},children:t.order_id},a)}))})},F=function(e){var t,a=Object(r.c)((function(e){return{orderData:e.shopStore.order,reRunComponent:e.shopStore.reRunComponent.isDataChanged}})),o=Object(r.b)(),i=Object(n.useState)({payMethod:"all",payStatus:"all",deliveryStatus:"all"}),s=Object(S.a)(i,2),d=s[0],l=s[1],u=Object(n.useState)({value:"",touched:!1}),j=Object(S.a)(u,2),O=j[0],h=j[1];Object(n.useEffect)((function(){var e;return O.touched&&(e=setTimeout((function(){o(Object(c.b)(O.value))}),500)),function(){clearTimeout(e)}}),[O]);return Object(b.jsxs)(C.H,{children:[Object(b.jsx)(C.m,{sm:12,md:3,children:Object(b.jsx)(k.a,{label:"Pay Status",options:["All","Paid","Refund"],value:d.payStatus,change:function(e){var t=e.target.value;console.log(t),l((function(e){return Object(D.a)(Object(D.a)({},e),{},{payStatus:t})})),h((function(e){return Object(D.a)(Object(D.a)({},e),{},{value:"",touched:!1})})),o(f.l.updatePayStatus({status:t})),o(Object(c.d)(a.orderData.param,t,a.orderData.method,a.orderData.orderStatus))}})}),Object(b.jsx)(C.m,{sm:12,md:3,children:Object(b.jsx)(k.a,{label:"Pay Method",options:["All","Credit Card","Stripe","Paypal"],value:d.payMethod,change:function(e){var t=e.target.value;h((function(e){return Object(D.a)(Object(D.a)({},e),{},{value:"",touched:!1})})),l((function(e){return Object(D.a)(Object(D.a)({},e),{},{payMethod:t})}));var r=e.target.value.split(" ").join("_");o(f.l.updatePayMethod({method:r})),o(Object(c.d)(a.orderData.param,a.orderData.status,r,a.orderData.orderStatus))}})}),Object(b.jsx)(C.m,{sm:12,md:3,children:Object(b.jsx)(k.a,{label:"Order Status",options:["All","Processing","Packed","Delivered"],value:d.deliveryStatus,change:function(e){var t=e.target.value;h((function(e){return Object(D.a)(Object(D.a)({},e),{},{value:"",touched:!1})})),l((function(e){return Object(D.a)(Object(D.a)({},e),{},{deliveryStatus:t})})),o(f.l.updateDeliveryStatus({status:t})),o(Object(c.d)(a.orderData.param,a.orderData.status,a.orderData.method,t))}})}),Object(b.jsx)(C.m,{sm:12,md:3,children:Object(b.jsx)("div",{className:N.a.dropDown,children:Object(b.jsxs)("div",{className:N.a.searchBox,children:[Object(b.jsx)("div",{style:{marginBottom:"2.5%"},children:"Search"}),Object(b.jsx)(_.a,(t={label:!1},Object(y.a)(t,"label","Search Order ID"),Object(y.a)(t,"value",O.value),Object(y.a)(t,"change",(function(e){var t=e.target.value;l((function(e){return Object(D.a)(Object(D.a)({},e),{},{payMethod:"all",payStatus:"all",deliveryStatus:"all"})})),h((function(e){return Object(D.a)(Object(D.a)({},e),{},{value:t,touched:!0})}))})),t)),Object(b.jsx)("div",{className:N.a.content,children:Object(b.jsx)(w,{idChange:function(e){o(f.l.clearOrderIdArray()),h((function(t){return Object(D.a)(Object(D.a)({},t),{},{value:e,touched:!1})})),o(Object(c.e)(e))}})})]})})})]})};t.default=function(){var e=Object(g.g)(),t=Object(r.c)((function(e){return{orderData:e.shopStore.order,reRunComponent:e.shopStore.reRunComponent.isDataChanged}})),a=Object(r.b)();Object(n.useEffect)((function(){t.reRunComponent&&a(Object(c.d)(t.orderData.param,t.orderData.status,t.orderData.method,t.orderData.orderStatus))}),[t.reRunComponent,a]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"bg-white mb-3 pt-3",children:Object(b.jsx)(F,{})}),!t.orderData.isDataReceived&&Object(b.jsx)(o.a,{}),t.orderData.isDataReceived&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{header:["#","order_id","Customer","Total Amount","Payment Status","Pay Method","Order Status","Order Date","Action"],children:Object(b.jsx)(O,{body:t.orderData.data.data,action:function(r){var n=t.orderData.data.data[r];a(f.l.getSingleOrder({data:n})),e.push("/admin/store/order-edit")}})})}),t.orderData.isDataReceived&&t.orderData.data.to&&Object(b.jsx)(x.a,{body:t.orderData.data,change:function(e){if(e){var r=e.split("?")[1];a(f.l.updateOrderParam({param:r})),a(Object(c.d)(r,t.orderData.status,t.orderData.method,t.orderData.orderStatus))}}})]})}}}]);
//# sourceMappingURL=19.3e302f4c.chunk.js.map