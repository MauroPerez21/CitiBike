(this["webpackJsonpciti-bike"]=this["webpackJsonpciti-bike"]||[]).push([[0],{106:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},226:function(e,t,c){"use strict";c.r(t);var i=c(2),a=c.n(i),n=c(16),r=c.n(n),s=(c(106),c(5)),l=c(93),o=c.n(l),d=c(1),j=function(){var e=a.a.useState(!0),t=Object(s.a)(e,1)[0],c=a.a.useState(["#61dafb","#3366ff","#f1f1f1","#ff00ff","#00ff00","orange","#282c34","#ffff00","#61dafb","#009900","#cc33ff"][Math.ceil(10*Math.random())]),i=Object(s.a)(c,1)[0];return Object(d.jsx)("div",{className:"hashCenter",children:Object(d.jsx)(o.a,{color:i,loading:t,size:150})})},b=c(11),m=c(10),p="ADD_TO_CART",h="REMOVE_FROM_CART",u="ADJUST_QTY",O="LOAD_CURRENT",x="FILTER_CURRENT_ITEM",f=function(e){return{type:p,payload:{id:e}}},g=c(8),v=c(96),N=c.n(v),k=Object(m.connect)(null,(function(e){return{addToCart:function(t){return e(f(t))},loadCurrent:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t=e.productData,c=e.addToCart,i=e.loadCurrent,a=new Intl.NumberFormat("es-sp",{currency:"COP",style:"currency"});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("style",{jsx:!0,children:"\n            .loaderOuter{\n                padding:4em 4em;\n                font-size:2em;\n            }\n            "}),Object(d.jsxs)("div",{className:"cardContainer",children:[Object(d.jsx)("div",{className:"cardHeader",children:Object(d.jsx)("h2",{children:t.title})}),Object(d.jsx)("div",{className:"cardBody",children:t.image?Object(d.jsx)("img",{src:t.image,alt:t.title}):Object(d.jsx)("div",{className:"loaderOuter",children:Object(d.jsx)(N.a,{})})}),Object(d.jsxs)("div",{className:"cardBox",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Producto:\xa0"}),Object(d.jsx)("p",{children:t.title})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Descripci\xf3n:\xa0"}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Precio:\xa0"}),Object(d.jsxs)("p",{children:["$","".concat(a.format(t.price))]})]})]}),Object(d.jsxs)("div",{className:"cardFooter",children:[Object(d.jsx)(b.b,{to:"/producto/".concat(t.id),children:Object(d.jsxs)("button",{onClick:function(){return i(t)},children:[Object(d.jsx)("i",{children:Object(d.jsx)(g.e,{})}),"\xa0ver"]})}),Object(d.jsxs)("button",{onClick:function(){return c(t.id)},children:["agregar",Object(d.jsxs)("i",{children:["\xa0",Object(d.jsx)(g.b,{})]})]})]})]})]})})),_=c(20);function y(e,t){var c=a.a.useRef(e),i=a.a.useRef();a.a.useEffect((function(){e.current=e}),[e]);var n=a.a.useCallback((function(){i.current=setTimeout((function(){return c.current()}),t)}),[t]),r=a.a.useCallback((function(){i.current&&clearTimeout(i.current)}),[]);return a.a.useEffect((function(){return n(),r}),[t,n,r]),{reset:a.a.useCallback((function(){r(),n()}),[r,n]),clear:r}}c(116);var C=Object(m.connect)((function(e){return{products:e.shop.filteredItems}}),(function(e){return{filterItems:function(t){return e({type:x,payload:{catg:t}})}}}))((function(e){var t=e.products,c=e.filterItems;document.getElementById("title").innerHTML="Citi Bike | categorias ",document.documentElement.scrollTop=0;var i=a.a.useState(!0),n=Object(s.a)(i,2),r=n[0],l=n[1];return y((function(){return l(!1)}),1e3),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"glass",children:Object(d.jsxs)("div",{className:"productContainer",children:[Object(d.jsxs)("div",{className:"dashboard",children:[Object(d.jsx)("div",{className:"navaLinks",children:Object(d.jsxs)(b.b,{to:"/productos",children:[Object(d.jsx)("i",{children:Object(d.jsx)(_.d,{})}),"\xa0Productos"]})}),Object(d.jsx)("div",{className:"sidenav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("1")},href:"#",children:Object(d.jsx)("span",{children:"bicicletas"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("2")},href:"#",children:Object(d.jsx)("span",{children:"rines"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("3")},children:Object(d.jsx)("span",{className:"title",children:"tenedores"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("4")},children:Object(d.jsx)("span",{children:"direcci\xf3n"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("5")},children:Object(d.jsx)("span",{className:"title",children:"grupos"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return c("6")},children:Object(d.jsx)("span",{children:"art\xedculos"})})})]})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Categorias"}),r?Object(d.jsx)(j,{}):Object(d.jsx)("div",{className:"kard",children:t.map((function(e){return Object(d.jsx)(k,{productData:e},e.id)}))})]})]})})})})),w=(c(117),c(41)),I=c(29),E=c(21);function B(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("div",{className:"footerContainer",children:[Object(d.jsx)(D,{}),Object(d.jsx)(F,{}),Object(d.jsx)(R,{}),Object(d.jsx)(T,{})]}),Object(d.jsx)(S,{})]}),Object(d.jsx)("h3",{className:"code",children:"\xa9 Copyright ~ 2022"})]})}var T=function(){return Object(d.jsxs)("div",{className:"siteMap",children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("i",{className:"icoGreen",children:Object(d.jsx)(E.b,{})}),"\xa0Mapa del sitio:"]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)(b.b,{to:"/",children:[Object(d.jsx)(g.g,{}),"\xa0Contacto"]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(b.b,{to:"/productos",children:[Object(d.jsx)(g.f,{}),"\xa0Cat\xe1logo"]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(b.b,{to:"/carrito",children:[Object(d.jsx)(g.a,{}),"\xa0compras"]})})]})]})},F=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("i",{className:"icoRed",children:Object(d.jsx)(I.a,{})}),"\xa0Direcci\xf3n:"]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"Ciudad:"}),Object(d.jsx)("p",{children:"\xa0La Ceja"})]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"Provincia:"}),Object(d.jsx)("p",{children:"\xa0Antioquia"})]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"Pa\xeds:"}),Object(d.jsx)("p",{children:"\xa0Colombia"})]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"C\xf3digo postal:"}),Object(d.jsx)("p",{children:"\xa0500240"})]})]})},R=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("i",{className:"icoPearl",children:Object(d.jsx)(I.b,{})}),"\xa0Atenci\xf3n:"]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"Horas:"}),Object(d.jsx)("p",{children:"\xa09am a 5pm"})]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"Dias:"}),Object(d.jsx)("p",{children:"\xa0lunes a viernes"})]}),Object(d.jsxs)("div",{className:"listInfo",children:[Object(d.jsx)("h4",{children:"S\xe1bado:"}),Object(d.jsx)("p",{children:"\xa08am a 1pm"})]})]})},S=function(){return Object(d.jsx)("section",{className:"footerRow",children:Object(d.jsx)("div",{className:"footerInnerRow",children:Object(d.jsxs)("div",{className:"code",children:[Object(d.jsx)("p",{className:"codeSpacing",children:"Citi-Bike mec\xe1nica y repuestos"}),Object(d.jsxs)("form",{children:["Suscribirse:",Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),alert("la funcion esta deshabilitada")},children:"enviar"})]}),Object(d.jsx)("div",{className:"footerStrong",children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Email:\xa0"}),"infocitibike@gmail.com"]})})]})})})},D=function(){return Object(d.jsxs)("div",{className:"icon",children:[Object(d.jsx)("p",{children:"Citi"}),Object(d.jsx)("span",{children:Object(d.jsx)(w.a,{})}),Object(d.jsx)("p",{children:"Bike"})]})},L=function(){return a.a.useEffect((function(){!function(){var e=document.getElementById("target").childNodes[0],t=e.data;setInterval((function(){t=t[t.length-1]+t.substring(0,t.length-1),e.data=t}),250)}()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:Object(d.jsx)("em",{children:Object(d.jsx)("strong",{id:"target",children:"\xa0\xa0Citi\xa0Bike\xa0\xa0"})})})})]})},M=Object(m.connect)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;document.getElementById("title").innerHTML="Citi Bike | productos ",document.documentElement.scrollTop=0;var c=a.a.useState(!0),i=Object(s.a)(c,2),n=i[0],r=i[1];return y((function(){return r(!1)}),1e3),Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(L,{}):Object(d.jsx)("div",{className:"glass",children:Object(d.jsxs)("div",{className:"productContainer",children:[Object(d.jsx)("div",{className:"dashboard",children:Object(d.jsx)("div",{className:"navaLinks",children:Object(d.jsxs)(b.b,{to:"/filtros",children:[Object(d.jsx)("i",{children:Object(d.jsx)(_.e,{})}),"\xa0Categorias"]})})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Productos"}),Object(d.jsx)("div",{className:"kard",children:t.map((function(e){return Object(d.jsx)(k,{productData:e},e.id)}))})]})]})})})}));function q(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(L,{})})}c(118);var z=c(6),A=["adjustQty","removeFromCart"],H=Object(m.connect)(null,(function(e){return{removeFromCart:function(t){return e({type:h,payload:{id:t}})},adjustQty:function(t,c){return e(function(e,t){return{type:u,payload:{id:e,qty:t}}}(t,c))}}}))((function(e){var t=e.adjustQty,c=e.removeFromCart,i=Object(z.a)(e,A),n=a.a.useState(i.itemData.qty),r=Object(s.a)(n,2),l=r[0],o=r[1],j=i.itemData.qty*i.itemData.price;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{"data-label":"t\xedtulo",children:i.itemData.title}),Object(d.jsx)("td",{"data-label":"descripci\xf3n",children:i.itemData.description}),Object(d.jsx)("td",{"data-label":"cantidad",children:Object(d.jsx)("input",{type:"number",min:"1",id:"qty",value:l,onChange:function(e){o(e.target.value),t(i.itemData.id,e.target.value)}})}),Object(d.jsx)("td",{"data-label":"precio",children:i.itemData.price}),Object(d.jsx)("td",{"data-label":"subtotal",children:j}),Object(d.jsx)("td",{children:Object(d.jsxs)("button",{type:"button",onClick:function(){return c(i.itemData.id)},children:[Object(d.jsx)(g.j,{}),"\xa0borrar"]})})]})})),P=c(9),W=function(){var e=Object(P.g)();return y((function(){return e.push("/")}),2e3),Object(d.jsx)("div",{className:"cartOuter",children:Object(d.jsxs)("div",{className:"cartInner",children:[Object(d.jsx)("i",{children:Object(d.jsx)(_.c,{})}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"alertFonts",children:"no se han seleccionado art\xedculos"})]})})},J=Object(m.connect)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=a.a.useState(!0),i=Object(s.a)(c,2),n=i[0],r=i[1];y((function(){return r(!1)}),1e3),document.getElementById("title").innerHTML="Citi Bike | carrito ",document.documentElement.scrollTop=0;var l=a.a.useState(0),o=Object(s.a)(l,2),j=o[0],b=o[1],m=a.a.useState(0),p=Object(s.a)(m,2),h=p[0],u=p[1];return a.a.useEffect((function(){var e=0,c=0;t.forEach((function(t){e+=t.qty,c+=t.qty*t.price})),b(c),u(e)}),[t,j,h,b,u]),Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(L,{}):0===j?Object(d.jsx)(W,{}):Object(d.jsx)("div",{className:"tableContainer",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"heading",children:[Object(d.jsx)("th",{children:"nombre"}),Object(d.jsx)("th",{children:"descripci\xf3n"}),Object(d.jsx)("th",{children:"unidades"}),Object(d.jsx)("th",{children:"precio/unidad"}),Object(d.jsx)("th",{children:"subtotal"}),Object(d.jsx)("th",{children:"eliminar"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(H,{itemData:e},e.id)}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{"data-label":"#"}),Object(d.jsx)("td",{"data-label":"-",children:"unidades:"}),Object(d.jsx)("td",{"data-label":"-",children:h}),Object(d.jsx)("td",{"data-label":"-",children:"total:"}),Object(d.jsx)("td",{"data-label":"-",children:j}),Object(d.jsx)("td",{"data-label":"-"})]})})]})})})})),Q=function(){return Object(d.jsxs)("div",{className:"bannerContainer",children:[Object(d.jsx)("div",{className:"bigFontsize",id:"about",children:Object(d.jsxs)("em",{className:"orange",children:[Object(d.jsx)("strong",{className:"firstLetter",children:"Citi\xa0"}),Object(d.jsx)("strong",{className:"firstLetter",children:"Bike\xa0"})]})}),Object(d.jsx)("h2",{className:"centerBanner",children:"MANTENIMIENTO Y REPARACI\xd3N"})]})},U=(c(119),c(43)),Y=c(101);c(120);var G=Object(m.connect)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=a.a.useState(0),i=Object(s.a)(c,2),n=i[0],r=i[1];return a.a.useEffect((function(){U.a.pageview(window.location.pathname);var e=0;t.forEach((function(t){e+=t.qty})),r(e)}),[t,n]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Y.a,{className:"g-nav index999",expand:"lg",sticky:"top",children:Object(d.jsx)("div",{className:"topNav",children:Object(d.jsx)("div",{className:"navWrapper",children:Object(d.jsxs)("nav",{className:"navContainer",children:[Object(d.jsxs)(b.b,{to:"/nosotros",className:"navLinks",children:[Object(d.jsx)(g.g,{}),"\xa0inicio"]}),Object(d.jsxs)(b.b,{to:"/productos",className:"navLinks",children:[Object(d.jsx)(g.f,{}),"\xa0cat\xe1logo"]}),Object(d.jsxs)(b.b,{to:"/carrito",className:"navLinks",children:[Object(d.jsx)(g.a,{}),Object(d.jsx)("span",{className:"exponent",children:0===n?Object(d.jsx)(d.Fragment,{}):n})]})]})})})})})}));var V=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{}),Object(d.jsx)("header",{children:Object(d.jsx)(Q,{})})]})},$=function(e){var t=a.a.useState(e),c=Object(s.a)(t,2),i=c[0],n=c[1];return[i,function(e){n((function(t){return"boolean"===typeof e?e:!t}))}]},K=(c(123),function(){var e=$(!1),t=Object(s.a)(e,2),c=t[0],i=t[1],n=a.a.useRef(),r=a.a.useRef();return a.a.useLayoutEffect((function(){if(setTimeout((function(){i(!1)}),4e3),null!=n.current&&null!=r.current){var e=r.current.getBoundingClientRect().top;n.current.style.top="".concat(e-20,"px")}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"fixed-wpp",ref:r,onMouseOver:i,children:Object(d.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+573106323631",className:"icon-wpp",children:Object(d.jsx)(E.c,{})})}),c&&Object(d.jsx)("div",{className:"overlay",ref:n,children:"Envia un mensaje"})]})});c(124);function X(){var e=a.a.useRef(),t=a.a.useState(0),c=Object(s.a)(t,2),i=c[0],n=c[1],r=function(){n(document.documentElement.scrollTop)};return a.a.useLayoutEffect((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[i]),Object(d.jsx)(d.Fragment,{children:i>240?Object(d.jsxs)("div",{ref:e,className:"topBtn",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:[Object(d.jsx)("div",{className:"icoTop",children:Object(d.jsx)(g.d,{})}),Object(d.jsx)("div",{className:"top",children:Object(d.jsx)("p",{className:"topText",children:"Ir al principio"})})]}):""})}function Z(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)(V,{}),Object(d.jsx)("main",{children:Object(d.jsx)(P.d,{children:t})}),Object(d.jsx)(B,{})]}),Object(d.jsx)(K,{}),Object(d.jsx)(X,{})]})}var ee=Object(m.connect)((function(e){return{currentItem:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(f(t))}}}))((function(e){var t=e.currentItem,c=e.addToCart;document.getElementById("title").innerHTML="Citi Bike | #producto ",document.documentElement.scrollTop=0;var i=Object(P.g)();return Object(d.jsx)("div",{className:"glass",children:Object(d.jsxs)("div",{className:"singleItem",children:[Object(d.jsx)("h1",{children:t.title}),Object(d.jsx)("img",{src:t.image,alt:t.catg.name}),Object(d.jsxs)("div",{className:"btnRow",children:[Object(d.jsx)("button",{className:"orange",onClick:function(){return i.goBack()},children:"\xab\xa0volver"}),Object(d.jsx)("button",{className:"lime",onClick:function(){return c(t.id)},children:"agregar\xa0\xbb"})]})]})})})),te=(c(64),c(42)),ce=(c(125),function(){return Object(d.jsx)("div",{className:"iconsContainer",children:Object(d.jsxs)("div",{className:"iconsContainer-dflex",children:[Object(d.jsx)("a",{className:"aref",href:"https://www.facebook.com/mauricio.b.perez.982",children:Object(d.jsx)(g.c,{className:"network-facebook"})}),Object(d.jsx)("a",{className:"aref",href:"https://www.instagram.com/",children:Object(d.jsx)(g.h,{className:"network"})}),Object(d.jsx)("a",{className:"aref",href:"https://www.youtube.com/@TheNanamitv",children:Object(d.jsx)(g.l,{className:"network-wine"})})]})})}),ie=function(e){var t=e.bool;return Object(d.jsx)("div",{className:"modalBg",children:Object(d.jsxs)("div",{className:"modalWdw",children:[Object(d.jsxs)("div",{className:"modalHeader",children:[Object(d.jsxs)("h5",{className:"modalHeading",children:[Object(d.jsx)(te.a,{}),"INFO"]}),Object(d.jsx)("button",{className:"closeBtn",onClick:t,children:Object(d.jsx)(E.a,{style:{marginBottom:"-3px"}})})]}),Object(d.jsxs)("div",{className:"modalContent",children:[Object(d.jsx)("p",{children:"Encuentranos en redes sociales"}),Object(d.jsx)(ce,{})]}),Object(d.jsx)("div",{className:"modalActions",children:Object(d.jsxs)("div",{className:"actionsContainer",children:[Object(d.jsx)("button",{className:"callBtn",children:Object(d.jsxs)("a",{href:"tel:+573106323631",children:[Object(d.jsx)("i",{children:Object(d.jsx)(g.i,{})}),"\xa0llamar"]})}),Object(d.jsx)("button",{className:"wppBtn",children:Object(d.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=+573106323631",children:[Object(d.jsx)("i",{children:Object(d.jsx)(g.k,{})}),"\xa0mensaje"]})})]})})]})})},ae=function(e){var t=e.bool,c=a.a.useRef();return Object(d.jsx)("div",{className:"modalBg",children:Object(d.jsxs)("div",{className:"modalWdw",children:[Object(d.jsxs)("div",{className:"modalHeader",children:[Object(d.jsxs)("h5",{className:"modalHeading",children:[Object(d.jsx)(te.a,{}),"INFO"]}),Object(d.jsx)("button",{className:"closeBtn",onClick:t,children:Object(d.jsx)(E.a,{style:{marginBottom:"-3px"}})})]}),Object(d.jsx)("div",{className:"gMap",children:Object(d.jsx)("iframe",{title:"mapa",ref:c,width:"100%",height:"400px",src:"https://maps.google.com/maps?q=6.0273633,-75.4271104&z=15&output=embed "})})]})})},ne=c.p+"static/media/nicolas-picard-JjBQLWs2UPA-unsplash.9bc58e32.jpg",re=function(e){var t=e.Map,c=$(!1),i=Object(s.a)(c,2),a=i[0],n=i[1],r=function(){n()};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"rowr",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Ciclopaseos"}),Object(d.jsx)("i",{className:"iconBiglime",children:Object(d.jsx)(_.a,{})}),Object(d.jsx)("p",{children:"\u2714\xa0Ecoturismo, cross-country y ruta"})]}),Object(d.jsxs)("button",{className:"mapBtn",onClick:r,children:[Object(d.jsx)(I.a,{}),"\xa0mapa"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Servicio t\xe9cnico"}),Object(d.jsx)("i",{className:"iconBigrosso",children:Object(d.jsx)(_.b,{})}),Object(d.jsx)("p",{children:"\u2714\xa0Servicio en el taller y a domicilio"})]})]}),Object(d.jsx)("div",{className:"textAlign",children:Object(d.jsxs)("div",{className:"inlineBlock",children:[Object(d.jsx)("h3",{children:"Misi\xf3n:"}),Object(d.jsxs)("p",{children:["fabricamos y vendemos bicicletas, hacemos ciclopaseos, buscamos promover el ejercicio al aire libre y el transporte urbano con cero emisiones de CO ",Object(d.jsx)("small",{children:"2"})]})]})}),a&&Object(d.jsx)(t,{bool:r})]})};function se(){document.getElementById("title").innerHTML="Citi Bike | inicio ",document.documentElement.scrollTop=0;var e=a.a.useState(!0),t=Object(s.a)(e,2),c=t[0],i=t[1];y((function(){return i(!1)}),1e3);var n=$(!1),r=Object(s.a)(n,2),l=r[0],o=r[1];return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)(L,{}):Object(d.jsx)(le,{toggle:o,display:l})})}var le=function(e){var t=e.toggle,c=e.display,i={backgroundImage:"linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(".concat(ne,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("style",{jsx:!0,children:"\n        .subHeading{\n            padding:12px 24px\n        }\n        "}),Object(d.jsx)("div",{className:"subHeading",children:Object(d.jsx)("strong",{className:"firstLetter",children:"lo mejor para ti"})}),Object(d.jsx)("section",{className:"glass",children:Object(d.jsxs)("div",{className:"outer",children:[Object(d.jsx)("h3",{children:Object(d.jsx)("em",{children:"En el Oriente Antioque\xf1o "})}),Object(d.jsxs)("div",{className:"inner",style:i,children:[Object(d.jsx)(w.a,{className:"iconApp"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"servicio a domicilio"}),Object(d.jsx)("li",{children:"mec\xe1nico 24/7"}),Object(d.jsx)("li",{children:"bici alquiler"})]}),Object(d.jsx)("button",{className:"btn-banner",onClick:t,children:"llamar"})]})]})}),c&&Object(d.jsx)(ie,{bool:t}),!c&&Object(d.jsx)(re,{Map:ae})]})};U.a.initialize("UA-00000000-3");var oe=Object(m.connect)((function(e){return{currentItem:e.shop.currentItem}}))((function(e){var t=e.currentItem;return console.log(t),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(Z,{children:[Object(d.jsx)(P.b,{exact:!0,path:"/",component:q}),Object(d.jsx)(P.b,{exact:!0,path:"/nosotros",component:se}),Object(d.jsx)(P.b,{exact:!0,path:"/productos",component:M}),Object(d.jsx)(P.b,{exact:!0,path:"/carrito",component:J}),Object(d.jsx)(P.b,{exact:!0,path:"/filtros",component:C}),null===t?Object(d.jsx)(P.a,{to:"/"}):Object(d.jsx)(P.b,{exact:!0,path:"/producto/:id",component:ee})]})})})),de=c(44),je=c(25),be=c(3),me={products:[{id:1,description:"bicicleta 2022",title:'mtb 29"',marca:"cannondale",price:10,catg:{id:"1",name:"mtb"},image:"https://live.staticflickr.com/65535/52565620425_5122aba64f_c.jpg"},{id:2,description:"bicicleta 2021",title:'mtb 27,5"',marca:"gw",price:20,catg:{id:"1",name:"mtb"},image:"https://live.staticflickr.com/65535/52565448854_5f84f88677_b.jpg"},{id:3,description:"bicicleta 2023",title:'mtb 26"',marca:"u-bike",price:20,catg:{id:"1",name:"mtb"},image:"https://live.staticflickr.com/65535/52594748776_1a4936b8fd_m.jpg"},{id:4,description:"bicicleta 2022",title:'bmx 20"',marca:"gw",price:20,catg:{id:"1",name:"bmx"},image:"https://live.staticflickr.com/65535/52564706867_d60180efca_c.jpg"},{id:5,description:"bicicleta 2021",title:'bmx 20"',marca:"mongoose",price:20,catg:{id:"1",name:"bmx"},image:"https://live.staticflickr.com/65535/52565697538_98606847fe_z.jpg"},{id:6,description:"par y posterior manzana casette",title:'rin 20"',marca:"gw",price:20,catg:{id:"2",name:"plano"},image:"https://live.staticflickr.com/65535/52593851291_04b9709f55_m.jpg"},{id:7,description:"par y posterior manzana rosca",title:'rin 24"',marca:"gw",price:20,catg:{id:"2",name:"plano"},image:"https://live.staticflickr.com/65535/52596325152_147223591a_m.jpg"},{id:8,description:"unidad trasero y manzana rosca",title:'rin 26"',marca:"gw",price:20,catg:{id:"2",name:"piramide"},image:"https://live.staticflickr.com/65535/52594370368_72ccc2f96e_m.jpg"},{id:9,description:"par y posterior manzana casette",title:'rin 27.5"',marca:"gw",price:20,catg:{id:"2",name:"piramide"},image:"https://live.staticflickr.com/65535/52593368677_1dfba99d77_n.jpg"},{id:10,description:"rin hojas de aluminio",title:' 29" x 50mm',marca:"Jones spec.",price:20,catg:{id:"2",name:"piramide"},image:"https://live.staticflickr.com/65535/52597075759_e1113e6a2e_m.jpg"},{id:11,description:'tenedor 20"',title:"suspension frontal",marca:"rock shock",price:20,catg:{id:"3",name:"forks"},image:"https://live.staticflickr.com/65535/52594275310_85b2575db5_n.jpg"},{id:12,description:'tenedor 27.5"',title:"rigido",marca:"cannondale",price:20,catg:{id:"3",name:"forks"},image:"https://live.staticflickr.com/65535/52593851201_d0560968f9_m.jpg"},{id:13,description:'tenedor 26"',title:"izquierdo",marca:"cannondale",price:20,catg:{id:"3",name:"forks"},image:"https://live.staticflickr.com/65535/52594370438_103aeb2cba_m.jpg"},{id:14,description:'tenedor 24"',title:"suspension frontal",marca:"fox",price:20,catg:{id:"3",name:"forks"},image:"https://live.staticflickr.com/65535/52597084824_6ce3f5d217_m.jpg"},{id:15,description:'tenedor 24"',title:"rigido",marca:"gw",price:20,catg:{id:"3",name:"forks"},image:"https://live.staticflickr.com/65535/52594370403_a058e6cb73_m.jpg"},{id:16,description:"espiga bmx",title:"soporte direccional",marca:"drive",price:20,catg:{id:"4",name:"handlebar"},image:"https://live.staticflickr.com/65535/52595204213_fe9b6f1a35_c.jpg"},{id:18,description:'espiga mtb oversize"',title:"soporte direccional",marca:"gw",price:20,catg:{id:"4",name:"handlebar"},image:"https://live.staticflickr.com/65535/52594683076_e8f9642368_n.jpg"},{id:19,description:'manubrio bmx"',title:"barra direccional",marca:"gw",price:20,catg:{id:"4",name:"handlebar"},image:"https://live.staticflickr.com/65535/52595107005_f777f644e0_h.jpg"},{id:20,description:'manubrio mtb"',title:"barra direccional",marca:"gw",price:20,catg:{id:"4",name:"handlebar"},image:"https://live.staticflickr.com/65535/52595204203_b7f597359e_m.jpg"},{id:21,description:'grupo xtr"',title:"10 velocidades",marca:"shimano",price:20,catg:{id:"5",name:"triplato"},image:"https://live.staticflickr.com/65535/52595136140_3be8260906_m.jpg"},{id:22,description:'grupo xtr"',title:"24 velocidades",marca:"shimano",price:20,catg:{id:"5",name:"sprockets"},image:"https://live.staticflickr.com/65535/52594972834_3e83581d16_m.jpg"},{id:23,description:"modelo 2021",title:'urban bike 26"',marca:"u-bike",price:20,catg:{id:"1",name:"urban"},image:"https://live.staticflickr.com/65535/50174208216_bc84fce781_c.jpg"},{id:24,description:"motor 36v (350W)",title:'e-bike 20"',marca:"OneBot",price:20,catg:{id:"1",name:"urban"},image:"https://live.staticflickr.com/65535/52595019869_d16b481f34_m.jpg"},{id:25,description:"accesorios",title:"carga trasera",marca:"gw",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52594778651_d1d75f5fbd_m.jpg"},{id:26,description:"parrilla trasera",title:"soporte carga",marca:"chino",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52594779351_97d3a887f3_m.jpg"},{id:27,description:"parrilla frontal",title:"soporte carga",marca:"chino",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52595312383_27632ef6c4_c.jpg"},{id:28,description:"accesorios",title:"casco",marca:"smith",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52596310547_d4a776715d_z.jpg"},{id:29,description:"frenos",title:"v-brake",marca:"logan",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52594321930_5af6deb63f_c.jpg"},{id:30,description:"frenos",title:"disco",marca:"shimano",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52593413477_bd2ec85cf0_z.jpg"},{id:31,description:"accesorios",title:"guantes",marca:"-",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52596799251_8df7b4aa80_z.jpg"},{id:32,description:"asiento",title:"galapago prostatico",marca:"gw",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52594265017_34d9454894_m.jpg"},{id:33,description:"asiento",title:"galapago amortiguado",marca:"gw",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52595009669_b0df5f9609_s.jpg"},{id:34,description:"accesorio",title:"carima\xf1ola aluminio",marca:"-",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52594783171_6ce584c1da_n.jpg"},{id:35,description:"accesorio",title:"porta carima\xf1ola",marca:"-",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52595308333_ba3f2f07cb_m.jpg"},{id:36,description:"grupo xtr",title:"cadena",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52595136175_28b882ffb7_m.jpg"},{id:37,description:"grupo xtr",title:"sprocket",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52594972904_d601dd7055_m.jpg"},{id:38,description:"grupo xtr",title:"tensor",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52595232543_9d41105f3b_m.jpg"},{id:39,description:"grupo xtr",title:"descarrilador",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52595136190_d2c3d03581_m.jpg"},{id:40,description:"grupo xtr",title:"palanca biela",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52594972864_737a30f9ea_m.jpg"},{id:41,description:"grupo xtr",title:"palanca sprocket",marca:"shimano",price:20,catg:{id:"5",name:"items"},image:"https://live.staticflickr.com/65535/52595136165_c7ddbcfaa9_m.jpg"},{id:42,description:"accesorios",title:"inflador",marca:"-",price:20,catg:{id:"6",name:"items"},image:"https://live.staticflickr.com/65535/52597322273_b8bd542ef6_m.jpg"}],filteredItems:[],cart:[],currentItem:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var c=e.products.find((function(e){return e.id===t.payload.id})),i=e.cart.find((function(e){return e.id===t.payload.id}));return Object(be.a)(Object(be.a)({},e),{},{cart:i?e.cart.map((function(e){return e.id===t.payload.id?Object(be.a)(Object(be.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(je.a)(e.cart),[Object(be.a)(Object(be.a)({},c),{},{qty:1})])});case h:return Object(be.a)(Object(be.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case u:return Object(be.a)(Object(be.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(be.a)(Object(be.a)({},e),{},{qty:+t.payload.qty}):e}))});case O:return Object(be.a)(Object(be.a)({},e),{},{currentItem:t.payload});case x:var a=e.products.filter((function(e){return e.catg.id===t.payload.catg}));return Object(be.a)(Object(be.a)({},e),{},{filteredItems:a});default:return e}},he=Object(de.a)({shop:pe}),ue=c(99),Oe=Object(de.b)(he,ue.composeWithDevTools),xe=document.getElementById("root");xe.hasChildNodes()?r.a.hydrate(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m.Provider,{store:Oe,children:Object(d.jsx)(oe,{})})}),xe):r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m.Provider,{store:Oe,children:Object(d.jsx)(oe,{})})}),xe)},64:function(e,t,c){}},[[226,1,2]]]);
//# sourceMappingURL=main.a1e506e0.chunk.js.map