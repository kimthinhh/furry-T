"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[648],{8697:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7022),c=t(9743),i=t(2677),a=t.p+"static/media/table.c96637810cb2ae358aca.jpg",l=t(184),o=function(e){var n=e.title;return(0,l.jsxs)("div",{className:"image-container",children:[(0,l.jsx)("img",{src:a,alt:"Product-bg"}),(0,l.jsx)("div",{className:"overlay",children:(0,l.jsx)(r.Z,{children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)("h2",{children:n})})})})})]})}},9135:function(e,n,t){var r=t(9743),c=t(2791),i=t(5434),a=t(184),l=function(e){var n=e.productItems;return(0,c.useEffect)((function(){}),[n]),0===n.length?(0,a.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,a.jsx)(r.Z,{className:"justify-content-center",children:n.map((function(e){return(0,a.jsx)(i.Z,{title:null,productItem:e},e.id)}))})};n.Z=(0,c.memo)(l)},167:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(9439),c=t(7022),i=t(9743),a=t(2677),l=t(1413),o=t(3351),s=t(4783),u=t(184),d=[{value:"sofa",label:"Gh\u1ebf Sofa"},{value:"chair",label:"Gh\u1ebf \u0111\u01a1n"},{value:"watch",label:"\u0110\u1ed3ng H\u1ed3"},{value:"mobile",label:"\u0110i\u1ec7n Tho\u1ea1i"},{value:"wireless",label:"Tai nghe"}],h={control:function(e){return(0,l.Z)((0,l.Z)({},e),{},{backgroundColor:"#0f3460",color:"white",borderRadius:"5px",border:"none",boxShadow:"none",width:"200px",height:"40px"})},option:function(e,n){return(0,l.Z)((0,l.Z)({},e),{},{backgroundColor:n.isSelected?"#0f3460":"white",color:n.isSelected?"white":"#0f3460","&:hover":{backgroundColor:"#0f3460",color:"white"}})},singleValue:function(e){return(0,l.Z)((0,l.Z)({},e),{},{color:"white"})}},f=function(e){var n=e.setFilterList;return(0,u.jsx)(o.ZP,{options:d,defaultValue:{value:"",label:"L\u1ecdc theo danh m\u1ee5c"},styles:h,onChange:function(e){n(s.RB.filter((function(n){return n.category===e.value})))}})},m=t(2791),x=function(e){var n=e.setFilterList,t=(0,m.useState)(null),c=(0,r.Z)(t,2),i=c[0],a=c[1];return(0,u.jsxs)("div",{className:"search-container",children:[(0,u.jsx)("input",{type:"text",placeholder:"T\xecm Ki\u1ebfm...",onChange:function(e){a(e.target.value),n(s.RB.filter((function(e){var n;return null===(n=e.productName)||void 0===n?void 0:n.toLowerCase().includes(null===i||void 0===i?void 0:i.toLowerCase())})))}}),(0,u.jsx)("ion-icon",{name:"search-outline",className:"search-icon"})]})},j=t(9135),v=t(8697),Z=t(76),b=function(){var e=(0,m.useState)(s.RB.filter((function(e){return"sofa"===e.category}))),n=(0,r.Z)(e,2),t=n[0],l=n[1];return(0,Z.Z)(),(0,u.jsxs)(m.Fragment,{children:[(0,u.jsx)(v.Z,{title:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),(0,u.jsxs)("section",{className:"filter-bar",children:[(0,u.jsx)(c.Z,{className:"filter-bar-contianer",children:(0,u.jsxs)(i.Z,{className:"justify-content-center",children:[(0,u.jsx)(a.Z,{md:4,children:(0,u.jsx)(f,{setFilterList:l})}),(0,u.jsx)(a.Z,{md:8,children:(0,u.jsx)(x,{setFilterList:l})})]})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(j.Z,{productItems:t})})]})]})}}}]);
//# sourceMappingURL=648.0ab091c1.chunk.js.map