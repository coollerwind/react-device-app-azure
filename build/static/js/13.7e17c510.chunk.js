(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[13],{1245:function(e,t,a){"use strict";a.r(t);var n=a(1196),c=a(231),r=a(0),l=a.n(r),o=a(1219),i=a(123),s=a(1165),d=a(1160),u=a(1110),m=a(198),p=a(1167),f=a(199),b=a(6),h=a(33),E=a(51),g=a(1206);var j=function(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e.auth.user})),n=Object(b.c)((function(e){return e.productApp.products.searchText})),c=Object(b.c)(E.e);return l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{animation:"transition.expandIn",delay:300},l.a.createElement(d.a,{className:"text-32"},"shopping_basket")),l.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(f.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Current Aufzuge"))),l.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},l.a.createElement(p.a,{theme:c},l.a.createElement(i.a,{animation:"transition.slideDownIn",delay:300},l.a.createElement(m.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8 shadow"},l.a.createElement(d.a,{color:"action"},"search"),l.a.createElement(u.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){return t(Object(g.e)(e))}}))))),"admin"===a.role&&l.a.createElement(i.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(s.a,{component:h.a,to:"/apps/product/products/new",className:"whitespace-nowrap normal-case",variant:"contained",color:"secondary"},l.a.createElement("span",{className:"hidden sm:flex"},"Add New Lifts"),l.a.createElement("span",{className:"flex sm:hidden"},"New"))))},x=a(15),O=a(80),w=a(7),v=a(1187),N=a(1233),k=a(1234),C=a(1232),P=a(1246),y=a(1231),S=a(3),I=(a(108),a(46)),A=a(399),B=a(398),R=a(1209),T=a(1109),z=a(1179),D=a(1172),L=a(583),M=a(1162),W=a(1113),_=a(1158),q=a(1230),J=a(1247),H=a(1166),U=[{id:"id",align:"left",disablePadding:!1,label:"_ID",sort:!0},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"eigentumer",align:"left",disablePadding:!1,label:"Eigentumer",sort:!0},{id:"address",align:"left",disablePadding:!1,label:"Address",sort:!0}],F=Object(_.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var G=function(e){var t=F(e),a=Object(b.c)((function(e){return e.auth.user})),n=e.selectedProductIds,c=n.length,o=Object(r.useState)(null),i=Object(x.a)(o,2),s=i[0],u=i[1],m=Object(b.b)();function p(){u(null)}return l.a.createElement(q.a,null,l.a.createElement(y.a,{className:"h-64"},l.a.createElement(C.a,{padding:"none",className:"w-40 md:w-64 text-center z-99"},l.a.createElement(v.a,{indeterminate:c>0&&c<e.rowCount,checked:0!==e.rowCount&&c===e.rowCount,onChange:e.onSelectAllClick}),c>0&&"admin"===a.role&&l.a.createElement("div",{className:Object(S.a)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",t.actionsButtonWrapper)},l.a.createElement(T.a,{"aria-owns":s?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},l.a.createElement(d.a,null,"more_horiz")),l.a.createElement(L.a,{id:"selectedProductsMenu",anchorEl:s,open:Boolean(s),onClose:p},l.a.createElement(W.a,null,l.a.createElement(M.a,{onClick:function(){m(Object(g.c)(n)),e.onMenuItemClick(),p()}},l.a.createElement(z.a,{className:"min-w-40"},l.a.createElement(d.a,null,"delete")),l.a.createElement(D.a,{primary:"Remove"})))))),U.map((function(t){return l.a.createElement(C.a,{className:"p-4 md:p-16",key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&l.a.createElement(H.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(J.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)})},t.label)));var a}),this)))};var K=Object(I.j)((function(e){var t=Object(b.b)(),a=Object(b.c)(R.c),n=Object(b.c)(g.d),c=Object(b.c)((function(e){return e.productApp.products.searchText})),o=Object(b.c)((function(e){return e.auth.user})),i=Object(r.useState)(!0),s=Object(x.a)(i,2),d=s[0],u=s[1],m=Object(r.useState)([]),p=Object(x.a)(m,2),h=p[0],E=p[1],j=Object(r.useState)(n),S=Object(x.a)(j,2),I=S[0],T=S[1],z=Object(r.useState)(0),D=Object(x.a)(z,2),L=D[0],M=D[1],W=Object(r.useState)(10),_=Object(x.a)(W,2),q=_[0],J=_[1],H=Object(r.useState)({direction:"asc",id:null}),U=Object(x.a)(H,2),F=U[0],K=U[1];return Object(r.useEffect)((function(){t(Object(R.b)()),t(Object(g.b)()).then((function(){return u(!1)}))}),[t]),Object(r.useEffect)((function(){var e=n;"producer"===o.role&&(e=w.a.filter(n,(function(e){return e.categories.includes(o.id)}))),0!==c.length?(T(w.a.filter(e,(function(e){return e.name.toLowerCase().includes(c.toLowerCase())}))),M(0)):T(e)}),[n,c]),d?l.a.createElement(A.a,null):0===I.length?l.a.createElement(B.a,{delay:100},l.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},l.a.createElement(f.a,{color:"textSecondary",variant:"h5"},"There are no products!"))):l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement(O.a,{className:"flex-grow overflow-x-auto"},l.a.createElement(N.a,{stickyHeader:!0,className:"","aria-labelledby":"tableTitle"},l.a.createElement(G,{selectedProductIds:h,order:F,onSelectAllClick:function(e){e.target.checked?E(I.map((function(e){return e.id}))):E([])},onRequestSort:function(e,t){var a=t,n="desc";F.id===t&&"desc"===F.direction&&(n="asc"),K({direction:n,id:a})},rowCount:I.length,onMenuItemClick:function(){E([])}}),l.a.createElement(k.a,null,w.a.orderBy(I,[function(e){return F.id,e[F.id]}],[F.direction]).slice(L*q,L*q+q).map((function(t){var n=-1!==h.indexOf(t.id);return l.a.createElement(y.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":n,tabIndex:-1,key:t.id,selected:n,onClick:function(a){return n=t,void e.history.push("/apps/product/products/".concat(n.id,"/").concat(n.uid));var n}},l.a.createElement(C.a,{className:"w-40 md:w-64 text-center",padding:"none"},l.a.createElement(v.a,{checked:n,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=h.indexOf(t),n=[];-1===a?n=n.concat(h,t):0===a?n=n.concat(h.slice(1)):a===h.length-1?n=n.concat(h.slice(0,-1)):a>0&&(n=n.concat(h.slice(0,a),h.slice(a+1))),E(n)}(0,t.id)}})),l.a.createElement(C.a,{className:"p-4 md:p-16",component:"th",scope:"row"},t.uid),l.a.createElement(C.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row"},t.name),l.a.createElement(C.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row"},w.a.map(w.a.filter(a,(function(e){return t.categories.includes(e.id)})),(function(e){return e.label})).join(", ")),l.a.createElement(C.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row"},t.address))}))))),l.a.createElement(P.a,{className:"flex-shrink-0 border-t-1",component:"div",count:I.length,rowsPerPage:q,page:L,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){M(t)},onChangeRowsPerPage:function(e){J(e.target.value)}}))}));t.default=Object(c.a)("productApp",o.a)((function(){return l.a.createElement(n.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:l.a.createElement(j,null),content:l.a.createElement(K,null),innerScroll:!0})}))}}]);