(this["webpackJsonpmusica-app"]=this["webpackJsonpmusica-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),i=a(2),s=a.n(i),m=a(3),o=a(7),u=a(4),d=a(1);a(14);var p=function(e){var t=e.onCheckOutBtnClick,a=e.count;return c.a.createElement("div",{className:"additional-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"additional-header-container"},c.a.createElement("div",{className:"icons"},c.a.createElement("img",{src:"/images/Icons/facebook.png",alt:"facebook"}),c.a.createElement("img",{src:"/images/Icons/dribble.png",alt:"dribble"}),c.a.createElement("img",{src:"/images/Icons/twitter.png",alt:"twitter"}),c.a.createElement("img",{src:"/images/Icons/mail.png",alt:"mail"}),c.a.createElement("img",{src:"/images/Icons/vimeo.png",alt:"vimeo"})),c.a.createElement("div",{className:"link-button"},c.a.createElement("p",{className:"link",href:"#"},"Login"),c.a.createElement("p",null,"/"),c.a.createElement("p",{className:"link",href:"#"},"Register"),c.a.createElement("button",{className:"card-btn",onClick:t},c.a.createElement("img",{src:"/images/Icons/card.png",alt:"card"}),c.a.createElement("p",null,"Card"),c.a.createElement("p",null,"(",a,")"))))))};var E=function(){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"main-header-container"},c.a.createElement("img",{src:"/images/logo.png",alt:"logo"}),c.a.createElement("ul",{className:"main-header-links"},c.a.createElement("li",null,"Home"),c.a.createElement("li",null,"CD`s"),c.a.createElement("li",null,"Listen"),c.a.createElement("li",null,"About"),c.a.createElement("li",null,"Contact")))))},g=["/images/SlideImages/main.png","/images/SlideImages/main2.png","/images/SlideImages/main3.png","/images/SlideImages/main4.png","/images/SlideImages/main5.png"],v=null;var b=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v&&clearTimeout(v),v=setTimeout((function(){r(4===a?function(e){return e-4}:function(e){return e+1})}),5e3)})),c.a.createElement("div",{className:"image-section"},c.a.createElement("div",{className:"arrow-btn-container"},c.a.createElement("button",{className:"left-btn",onClick:function(){a>=1&&r((function(e){return e-1}))}},c.a.createElement("img",{src:"/images/Icons/arrows/left.png",alt:"arrow-left"})),c.a.createElement("button",{className:"right-btn",onClick:function(){a<g.length-1&&r((function(e){return e+1}))}},c.a.createElement("img",{src:"/images/Icons/arrows/right.png",alt:"arrow-right"}))),c.a.createElement("div",{className:"image-container"},c.a.createElement("div",{className:"card-slider active-card-".concat(a)},c.a.createElement("div",{className:"card-slider-wrapper",style:{width:"".concat(100*g.length,"%"),transform:"translateX(-".concat(a*(100/g.length),"%)")}},g.map((function(e,t){return c.a.createElement("img",{src:e,key:t,id:"card-".concat(t),alt:"section"})}))))))};var h=function(){return c.a.createElement("div",{className:"body-heading"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"body-heading-container"},c.a.createElement("img",{src:"/images/line.png",alt:"line"}),c.a.createElement("p",null,"welcome to ",c.a.createElement("span",null,"Musica,")," check our latest albums"),c.a.createElement("img",{src:"/images/line.png",alt:"line"})),c.a.createElement("div",{className:"big-buttons"},c.a.createElement("div",{className:"big-btn-item"},c.a.createElement("div",null,c.a.createElement("img",{src:"/images/Icons/body-heading-btn/cd.png",alt:"cd"}),c.a.createElement("p",null,"CHECK OUR CD COLLECTION")),c.a.createElement("p",null,"Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim justo, lorem ipsum.")),c.a.createElement("div",{className:"big-btn-item red"},c.a.createElement("div",null,c.a.createElement("img",{src:"/images/Icons/body-heading-btn/headphone.png",alt:"headphone"}),c.a.createElement("p",null,"LISTEN BEFORE PURCHASE")),c.a.createElement("p",null,"Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim justo, lorem ipsum.")),c.a.createElement("div",{className:"big-btn-item upcoming"},c.a.createElement("div",null,c.a.createElement("img",{src:"/images/Icons/body-heading-btn/calendar.png",alt:"headphone"}),c.a.createElement("p",null,"UPCOMING EVENTS")),c.a.createElement("p",null,"Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim justo, lorem ipsum.")))))};var f=function(e){var t=e.id,a=e.title,r=e.artist,l=e.rate,i=e.description,s=e.price,m=e.imgPath,o=e.onClickAddBtn,u=e.salePrice,p=void 0===u?null:u,E=Object(n.useState)(!1),g=Object(d.a)(E,2),v=g[0],b=g[1],h=function(){return b(!v)};return c.a.createElement("div",{className:"main-card"},c.a.createElement("img",{src:m,alt:"main-img"}),c.a.createElement("div",{className:"card-title-artist"},c.a.createElement("p",{className:"card-title"},a),c.a.createElement("p",{className:"card-artist"},r)),c.a.createElement("div",{className:"star-container"},v?c.a.createElement("svg",{onClickCapture:h,className:"active-star",viewBox:"64 64 896 896",focusable:"false","data-icon":"star",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})):c.a.createElement("svg",{onClickCapture:h,className:"nonactive-star",viewBox:"64 64 896 896",focusable:"false","data-icon":"star",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}))),c.a.createElement("p",{className:"card-description"},i),c.a.createElement("div",{className:"price-discount-div"},p?c.a.createElement("p",{className:"card-price-old"},"$",s):c.a.createElement("p",{className:"card-price"},"$",s),p&&c.a.createElement("p",{className:"card-sale-price"},"$",p),c.a.createElement("button",{onClick:function(e){o(e,{id:t,title:a,artist:r,rate:l,description:i,price:s,salePrice:p,imgPath:m})}},"Add to card")))},N="https://my-json-server.typicode.com/ulvibashir/DB";function k(e,t){return function(){var a=Object(m.a)(s.a.mark((function a(){var n,c,r,l,i=arguments;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1&&void 0!==i[1]?i[1]:{},r={headers:{"Content-Type":"application/json"}},"GET"!==t&&(r.method=t,r.body=JSON.stringify(c)),a.next=6,fetch("".concat(N).concat(e).concat(n),r);case 6:return l=a.sent,a.abrupt("return",l.json());case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()}var C=k("/musics","GET"),O=k("/card","GET"),j=k("/card","POST"),w=k("/card","PUT"),y=k("/card","DELETE");var I=function(e){var t=e.onClickAddBtn,a=Object(n.useState)([]),r=Object(d.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)(0),u=Object(d.a)(o,2),p=u[0],E=u[1];return Object(n.useEffect)((function(){Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),c.a.createElement("div",{className:"latest-arrival-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("p",null,"Latest Arrivals in Musica"),c.a.createElement("div",{className:"section-line-img"},c.a.createElement("img",{src:"/images/line.png",alt:"line"})),c.a.createElement("div",null,0!==p&&c.a.createElement("button",{onClick:function(){p>0&&E((function(e){return e-1}))}},"\u2190"),p!==l.length-4&&c.a.createElement("button",{onClick:function(){p<l.length-4&&E((function(e){return e+1}))}},"\u2192"))),c.a.createElement("div",{className:"cards-div-slider"},c.a.createElement("div",{className:"cards-div-slider-wrapper",style:{transform:"translateX(-".concat(303*p,"px)")}},l.map((function(e){var a=e.id,n=e.title,r=e.artist,l=e.rate,i=e.description,s=e.price,m=e.salePrice,o=e.imgPath;return c.a.createElement(f,{id:a,title:n,artist:r,rate:l,description:i,price:s,salePrice:m,imgPath:o,key:a,onClickAddBtn:t})}))))))};var P=function(e){var t=e.onClickAddBtn,a=Object(n.useState)([]),r=Object(d.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)(0),u=Object(d.a)(o,2),p=u[0],E=u[1];return Object(n.useEffect)((function(){Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:(t=e.sent).reverse(),i(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),c.a.createElement("div",{className:"albums-currently-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("p",null,"Albums Currently on Sale"),c.a.createElement("div",{className:"section-line-img"},c.a.createElement("img",{src:"/images/line.png",alt:"line"})),c.a.createElement("div",null,0!==p&&c.a.createElement("button",{onClick:function(){p>0&&E((function(e){return e-1}))}},"\u2190"),p!==l.length-4&&c.a.createElement("button",{onClick:function(){p<l.length-4&&E((function(e){return e+1}))}},"\u2192"))),c.a.createElement("div",{className:"cards-div-slider"},c.a.createElement("div",{className:"cards-div-slider-wrapper",style:{transform:"translateX(-".concat(303*p,"px)")}},l.map((function(e){var a=e.id,n=e.title,r=e.artist,l=e.rate,i=e.description,s=e.price,m=e.salePrice,o=e.imgPath;return c.a.createElement(f,{id:a,title:n,artist:r,rate:l,description:i,price:s,salePrice:m,imgPath:o,key:a,onClickAddBtn:t})}))))))};var S=function(){return c.a.createElement("div",{className:"important-publisher-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("p",null,"Our Most Important Publishers"),c.a.createElement("div",{className:"section-line-img"},c.a.createElement("img",{src:"/images/line.png",alt:"line"}))),c.a.createElement("div",{className:"publisher-container"},c.a.createElement("img",{src:"/images/our_publishers/pic1.png",alt:"publisher"}),c.a.createElement("img",{src:"/images/our_publishers/pic2.png",alt:"publisher"}),c.a.createElement("img",{src:"/images/our_publishers/pic3.png",alt:"publisher"}),c.a.createElement("img",{src:"/images/our_publishers/pic4.png",alt:"publisher"}),c.a.createElement("img",{src:"/images/our_publishers/pic5.png",alt:"publisher"}),c.a.createElement("img",{src:"/images/our_publishers/pic6.png",alt:"publisher"}))))};var B=function(){return c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-container"},c.a.createElement("div",{className:"little-about-us part"},c.a.createElement("p",null,"Little about us"),c.a.createElement("p",null,c.a.createElement("span",null,"Sed posuere")," consectetur  est at. Nulla vitae elit libero, a pharetra. Lorem ipsum ",c.a.createElement("span",null,"dolor sit")," amet, conse ctetuer adipiscing elit."),c.a.createElement("p",null,"Socialize with us"),c.a.createElement("div",{className:"about-icon-container"},c.a.createElement("img",{src:"/images/Icons/footer/facebook.png",alt:"icon"}),c.a.createElement("img",{src:"/images/Icons/footer/twitter.png",alt:"icon"}),c.a.createElement("img",{src:"/images/Icons/footer/globe.png",alt:"icon"}),c.a.createElement("img",{src:"/images/Icons/footer/dribble.png",alt:"icon"}),c.a.createElement("img",{src:"/images/Icons/footer/mail.png",alt:"icon"}))),c.a.createElement("div",{className:"our-archives part"},c.a.createElement("p",null,"Our archives"),c.a.createElement("p",null,"March 2012"),c.a.createElement("p",null,"..............................................................."),c.a.createElement("p",null,"February 2012"),c.a.createElement("p",null,"..............................................................."),c.a.createElement("p",null,"January 2012"),c.a.createElement("p",null,"..............................................................."),c.a.createElement("p",null,"December 2011")),c.a.createElement("div",{className:"popular-posts part"},c.a.createElement("div",{className:"popular-inner-container"},c.a.createElement("p",null,"Popular Posts"),c.a.createElement("div",{className:"post"},c.a.createElement("img",{className:"post-image",src:"/images/footer/image-1.png",alt:"post-1"}),c.a.createElement("div",{className:"right-div"},c.a.createElement("p",null,"Great Album"),c.a.createElement("div",{className:"comment-div"},c.a.createElement("img",{src:"/images/Icons/footer/comment.png",alt:"comment"}),c.a.createElement("p",null,"12 Comments")))),c.a.createElement("div",{className:"post"},c.a.createElement("img",{className:"post-image",src:"/images/footer/image.png",alt:"comment"}),c.a.createElement("div",{className:"right-div"},c.a.createElement("p",null,"Great Album"),c.a.createElement("div",{className:"comment-div"},c.a.createElement("img",{src:"/images/Icons/footer/comment.png",alt:"comment"}),c.a.createElement("p",null,"12 Comments")))))),c.a.createElement("div",{className:"search-our-site part"},c.a.createElement("p",null,"Search our Site"),c.a.createElement("input",{placeholder:"Enter Search ..."}),c.a.createElement("p",null,"Tag Cloud"),c.a.createElement("div",{className:"btn-container-footer"},c.a.createElement("button",null,"Audio CD"),c.a.createElement("button",null,"Video"),c.a.createElement("button",null,"Playlist"),c.a.createElement("button",null,"Avantgarde"),c.a.createElement("button",null,"Melancholic"))))),c.a.createElement("p",{className:"go-top"},"^"))};var A=function(e){var t=e.id,a=e.title,n=e.artist,r=(e.rate,e.price),l=e.imgPath,i=e.salePrice,s=void 0===i?null:i,m=e.count,o=e.onClickRemoveBtn;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("img",{src:l,alt:"checkout-img"}),c.a.createElement("div",{className:"checkout-about"},c.a.createElement("div",{className:"checkout-title-artist-price-div"},c.a.createElement("p",{className:"checkout-title"},m,"x ",a),c.a.createElement("p",{className:"checkout-artist"},n),s?c.a.createElement("p",{className:"checkout-price"},"$",s):c.a.createElement("p",{className:"checkout-price"},"$",r)),c.a.createElement("div",{className:"rate-button"},c.a.createElement("button",{onClick:function(e){return o(e,{id:t,count:m})}},"X"))))};var x=function(e){var t=e.cards,a=e.onClickRemoveBtn;return c.a.createElement("div",{className:"container-checkout"},c.a.createElement("div",{className:"inner-container"},c.a.createElement("div",{className:"checkout-panel"},t.map((function(e){var t=e.id,n=e.title,r=e.artist,l=e.rate,i=e.price,s=e.imgPath,m=e.salePrice,o=e.count;return c.a.createElement(A,{id:t,title:n,artist:r,rate:l,price:i,imgPath:s,salePrice:m,count:o,key:t,onClickRemoveBtn:a})})),c.a.createElement("div",{className:"total-price"},c.a.createElement("p",{className:"total-text"},"Total delivery cost: "),c.a.createElement("p",{className:"total-value"},"$",Math.round(100*function(){var e=0,a=!0,n=!1,c=void 0;try{for(var r,l=t[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var i=r.value;null!==i.salePrice?e+=Number(i.salePrice)*i.count:e+=Number(i.price)*i.count}}catch(s){n=!0,c=s}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}return e}())/100)),c.a.createElement("div",{className:"checkout-btn"},c.a.createElement("button",null,"View Card -\u2192"),c.a.createElement("button",null,"Proceed to Checkout -\u2192")))))};var L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(d.a)(l,2),g=i[0],v=i[1],f=function(e,t){var a=g.find((function(e){return e.id===t.id}));v(a?function(e){return e.map((function(e){return e.id===t.id?(w("/".concat(t.id),Object(u.a)({},e,{count:e.count+1})),Object(u.a)({},e,{count:e.count+1})):e}))}:function(e){return j("",Object(u.a)({},t,{count:1})),[].concat(Object(o.a)(e),[Object(u.a)({},t,{count:1})])}),console.log(t)};return Object(n.useEffect)((function(){Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(p,{onCheckOutBtnClick:function(){return r(!a)},count:g.length}),a&&c.a.createElement(x,{cards:g,onClickRemoveBtn:function(e,t){t.count>1?v((function(e){return e.map((function(e){return e.id===t.id?(w("/".concat(t.id),Object(u.a)({},e,{count:e.count-1})),Object(u.a)({},e,{count:e.count-1})):e}))})):(y("/".concat(t.id)),v((function(e){return e.filter((function(e){return e.id!==t.id}))})))}}),c.a.createElement(E,null),c.a.createElement(b,null),c.a.createElement(h,null),c.a.createElement(I,{onClickAddBtn:f}),c.a.createElement(P,{onClickAddBtn:f}),c.a.createElement(S,null),c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2cdbc916.chunk.js.map