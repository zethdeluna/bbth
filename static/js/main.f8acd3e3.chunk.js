(this.webpackJsonpbbth=this.webpackJsonpbbth||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(14),a=n.n(c),o=(n(20),n(2)),r=n(5),l=n(6),d=n(4),j=n(3),b=(n(21),n(9)),h=n.n(b),u=n.p+"static/media/bonbonlogo.00e6ba39.png",m=n(0);var O=function(){return Object(m.jsxs)("div",{id:"navbar",className:"fade-in",children:[Object(m.jsx)("div",{id:"navbarName",children:Object(m.jsx)("h1",{children:Object(m.jsx)(h.a,{href:"#imageGallery",children:"Bon Bon Tea House"})})}),Object(m.jsx)("div",{id:"navbarLogo",children:Object(m.jsx)("img",{id:"logo",alt:"Bon Bon Tea House Logo",src:u})}),Object(m.jsx)("div",{id:"navbarLinks",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.a,{href:"#menu-container",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.a,{href:"#sfv-map",children:"Locations"})}),Object(m.jsx)("li",{children:"About"}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.instagram.com/bonbonteahouse/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{children:Object(m.jsx)("i",{class:"fab fa-instagram"})})})})]})})]})},x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e="hide";return this.props.menuVisibility&&(e="show"),Object(m.jsx)("div",{id:"navButtonContainer",onMouseDown:this.props.handleMouseDown,children:Object(m.jsxs)("div",{id:"navButton",children:[Object(m.jsx)("span",{className:e}),Object(m.jsx)("span",{className:e}),Object(m.jsx)("span",{className:e})]})})}}]),n}(s.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e="hide";return this.props.menuVisibility&&(e="show"),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{id:"flyoutBackground",onMouseDown:this.props.handleMouseDown,className:e}),Object(m.jsxs)("div",{id:"flyoutMenu",onMouseDown:this.props.handleMouseDown,className:e,children:[Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"#",children:"About"})}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"#menuMobile",children:"Menu"})}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"#locationsMobile",children:"Locations"})}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://www.instagram.com/bonbonteahouse/",target:"_blank",rel:"noreferrer",children:"Instagram"})})]})]})}}]),n}(s.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e,i){var s;return Object(o.a)(this,n),(s=t.call(this,e,i)).state={visible:!1},s.toggleMenu=s.toggleMenu.bind(Object(l.a)(s)),s.handleMouseDown=s.handleMouseDown.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible})}},{key:"handleMouseDown",value:function(e){this.toggleMenu(),e.stopPropagation()}},{key:"componentDidMount",value:function(){var e=window.pageYOffset;window.innerWidth<=780&&(window.onscroll=function(){var t=window.pageYOffset;document.getElementById("navbarMobile").style.transform=e>t?"translateY(0)":"translateY(-12vh)",e=t})}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"navbarMobile",className:"fade-in",children:[Object(m.jsx)("div",{id:"navbarLogoMobile",children:Object(m.jsx)(h.a,{children:Object(m.jsx)("img",{id:"logo",alt:"Bon Bon Tea House Logo",src:u})})}),Object(m.jsx)(x,{handleMouseDown:this.handleMouseDown,menuVisibility:this.state.visible}),Object(m.jsx)(g,{handleMouseDown:this.handleMouseDown,menuVisibility:this.state.visible})]})}}]),n}(s.a.Component);var v=function(){return Object(m.jsx)("div",{id:"imageGallery",class:"img-gal-container fade-in",children:Object(m.jsxs)("div",{class:"gallery-wrap",children:[Object(m.jsx)("div",{className:"img-gal gal-img1"}),Object(m.jsx)("div",{className:"img-gal gal-img2"}),Object(m.jsx)("div",{className:"img-gal gal-img3"}),Object(m.jsx)("div",{className:"img-gal gal-img4"}),Object(m.jsx)("div",{className:"img-gal gal-img5"})]})})},p=n(13),w=n(15),k=n(11),M=[{id:0,img:n.p+"static/media/testimg1.3e8d8901.png"},{id:1,img:n.p+"static/media/testimg2.410c2052.jpg"},{id:2,img:n.p+"static/media/testimg3.71af3b8c.jpg"},{id:3,img:n.p+"static/media/testimg4.828cdf39.jpg"},{id:4,img:n.p+"static/media/testimg5.abc7a187.jpg"}],y=function(){var e=Object(i.useState)(0),t=Object(w.a)(e,2),n=t[0],s=t[1],c=Object(k.c)(M[n],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:k.b.molasses});return Object(i.useEffect)((function(){setInterval((function(){return s((function(e){return(e+1)%5}))}),3e3)}),[]),c.map((function(e){var t=e.item,n=e.props,i=e.key;return Object(m.jsx)("div",{id:"imageGalMobileContainer",children:Object(m.jsx)(k.a.div,{class:"imageGalMobile",style:Object(p.a)(Object(p.a)({},n),{},{backgroundImage:"url(".concat(t.img,")")})},i)})}))},N=n.p+"static/media/BonBonMenu.067bfc64.jpg";var L=function(){return Object(m.jsxs)("div",{id:"menu-container",children:[Object(m.jsx)("div",{className:"spacer"}),Object(m.jsx)("img",{src:N})]})},C=n.p+"static/media/BonBonMenuMobile.6d77d62e.jpg";var B=function(){return Object(m.jsxs)("div",{id:"menuMobile",children:[Object(m.jsx)("div",{className:"spacer",children:Object(m.jsx)("h2",{children:"Menu"})}),Object(m.jsx)("img",{id:"menuMobileImage",src:C,alt:"Bon Bon Tea House Menu"})]})},D=n.p+"static/media/sfvMap.7a1ccbd0.png",E=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).onMouseEnterNorthridge=function(e){document.getElementById("img1").classList.add("enlarged")},i.onMouseLeaveNorthridge=function(e){document.getElementById("img1").classList.remove("enlarged")},i.onMouseEnterWinnetka=function(e){document.getElementById("img2").classList.add("enlarged")},i.onMouseLeaveWinnetka=function(e){document.getElementById("img2").classList.remove("enlarged")},i.onMouseEnterChatsworth=function(e){document.getElementById("img3").classList.add("enlarged")},i.onMouseLeaveChatsworth=function(e){document.getElementById("img3").classList.remove("enlarged")},i.onLocationClickNorthridge=function(e){var t=document.getElementById("yelpNorthridge"),n=document.getElementById("facebookNorthridge");i.state.clickActive?(t.classList.remove("fade"),n.classList.remove("fade"),i.setState({clickActive:!1})):(t.classList.add("fade"),n.classList.add("fade"),i.setState({clickActive:!0}))},i.onLocationClickWinnetka=function(e){var t=document.getElementById("yelpWinnetka"),n=document.getElementById("facebookWinnetka");i.state.clickActive?(t.classList.remove("fade"),n.classList.remove("fade"),i.setState({clickActive:!1})):(t.classList.add("fade"),n.classList.add("fade"),i.setState({clickActive:!0}))},i.onLocationClickChatsworth=function(e){var t=document.getElementById("yelpChatsworth"),n=document.getElementById("facebookChatsworth");i.state.clickActive?(t.classList.remove("fade"),n.classList.remove("fade"),i.setState({clickActive:!1})):(t.classList.add("fade"),n.classList.add("fade"),i.setState({clickActive:!0}))},i.state={clickActive:!1},i}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"locations-section",children:[Object(m.jsx)("div",{id:"locations",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{id:"northridge-yelp-link",href:"https://www.yelp.com/biz/bon-bon-tea-house-los-angeles-2?osq=bon+bon+tea+house",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"yelpNorthridge",children:Object(m.jsx)("i",{class:"fab fa-yelp"})})}),Object(m.jsx)("a",{id:"northridge-facebook-link",href:"https://www.facebook.com/bonbonteahouse/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"facebookNorthridge",children:Object(m.jsx)("i",{class:"fab fa-facebook-f"})})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"northridge",onMouseEnter:this.onMouseEnterNorthridge,onMouseLeave:this.onMouseLeaveNorthridge,onClick:this.onLocationClickNorthridge,children:"Northridge"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"9663 Reseda Blvd"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"Northridge, CA 91324"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"(818) 280 - 6677"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{id:"winnetka-yelp-link",href:"https://www.yelp.com/biz/bon-bon-tea-house-canoga-park?osq=bon+bon+tea+house",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"yelpWinnetka",children:Object(m.jsx)("i",{class:"fab fa-yelp"})})}),Object(m.jsx)("a",{id:"winnetka-facebook-link",href:"https://www.facebook.com/Bon-Bon-Tea-House-Canoga-Park-163592660677775/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"facebookWinnetka",children:Object(m.jsx)("i",{class:"fab fa-facebook-f"})})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"winnetka",onMouseEnter:this.onMouseEnterWinnetka,onMouseLeave:this.onMouseLeaveWinnetka,onClick:this.onLocationClickWinnetka,children:"Winnetka"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"8316 Winnetka Ave"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"Winnetka, CA 91306"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"(818) 772 - 6900"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{id:"chatsworth-yelp-link",href:"https://www.yelp.com/biz/bon-bon-tea-house-chatsworth?osq=bon+bon+tea+house",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"yelpChatsworth",children:Object(m.jsx)("i",{class:"fab fa-yelp"})})}),Object(m.jsx)("a",{id:"chatsworth-facebook-link",href:"https://www.facebook.com/Bon-Bon-Tea-House-Chatsworth-278082143082955/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("button",{id:"facebookChatsworth",children:Object(m.jsx)("i",{class:"fab fa-facebook-f"})})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"chatsworth",onMouseEnter:this.onMouseEnterChatsworth,onMouseLeave:this.onMouseLeaveChatsworth,onClick:this.onLocationClickChatsworth,children:"Chatsworth"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"20790 Nordhoff St"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"Chatsworth, CA 91311"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locations-item",children:"(818) 280 - 3362"})]})]})}),Object(m.jsxs)("div",{id:"img-div",children:[Object(m.jsx)("img",{id:"sfv-map",src:D,alt:"Map of the San Fernando Valley"}),Object(m.jsx)("img",{id:"img1",src:u,alt:"Bon Bon Tea House Logo"}),Object(m.jsx)("img",{id:"img2",src:u,alt:"Bon Bon Tea House Logo"}),Object(m.jsx)("img",{id:"img3",src:u,alt:"Bon Bon Tea House Logo"})]})]})}}]),n}(s.a.Component);var A=function(){return Object(m.jsxs)("div",{id:"locationsMobile",children:[Object(m.jsx)("h2",{children:"Locations"}),Object(m.jsxs)("ul",{id:"addresses",children:[Object(m.jsx)("li",{children:Object(m.jsx)("ul",{children:Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"locationName",children:"Northridge"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"9663 Reseda Blvd"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"Northridge, CA 91324"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"(818) 280 - 6677"})]})})}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"locationName",children:"Winnetka"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"8316 Winnetka Ave"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"Winnetka, CA 91306"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"(818) 772 - 6900"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"locationName",children:"Chatsworth"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"20790 Nordhoff St"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"Chatsworth, CA 91311"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"locationDescription",children:"(818) 280 - 3362"})]})]})]})},T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).onMouseMove=function(e){var t=e.clientX,n=e.clientY;i.setState({xMain:t,yMain:n})},i.moveCursor=function(){var e=i.state,t=e.xMain,n=e.yMain,s=e.xTrailing,c=e.yTrailing,a=t-s,o=n-c;i.setState({xTrailing:s+a/7,yTrailing:c+o/7},(function(){i.cursor.current&&(i.cursor.current.style.transform="translate3d(".concat(t,"px, ").concat(n,"px, 0) translate(-50%, -50%)"),i.cursorTrailing.current.style.transform="translate3d(".concat(s,"px, ").concat(c,"px, 0) translate(-50%, -50%)"),i.animationFrame=requestAnimationFrame(i.moveCursor))}))},i.state={xMain:400,yMain:400,xTrailing:400,yTrailing:400,width:0},i.updateDimensions=i.updateDimensions.bind(Object(l.a)(i)),i.cursor=s.a.createRef(),i.cursorTrailing=s.a.createRef(),i.animationFrame=null,i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions),document.addEventListener("mousemove",this.onMouseMove),this.moveCursor()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions),document.removeEventListener("mousemove",this.onMouseMove),cancelAnimationFrame(this.animationFrame)}},{key:"updateDimensions",value:function(){var e="undefined"!==typeof window?window.innerWidth:0;this.setState({width:e})}},{key:"render",value:function(){var e,t,n,i,s=this;this.state.width<780?(e=Object(m.jsx)("div",{children:Object(m.jsx)(f,{})}),t=Object(m.jsx)("div",{children:Object(m.jsx)(y,{})}),n=Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{position:"relative",width:"100vw",height:"100vh",zIndex:"-1"}}),Object(m.jsx)(B,{})]}),i=Object(m.jsx)("div",{children:Object(m.jsx)(A,{})})):(document.querySelectorAll("a,button").forEach((function(e){e.addEventListener("mouseenter",(function(e){s.cursorTrailing.current.classList.add("enlarged")})),e.addEventListener("mouseout",(function(e){s.cursorTrailing.current.classList.remove("enlarged")}))})),window.onmousedown=function(){s.cursor.current.classList.add("clicked")},window.onmouseup=function(){s.cursor.current.classList.remove("clicked")},e=Object(m.jsx)("div",{children:Object(m.jsx)(O,{})}),t=Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"cursors",children:[Object(m.jsx)("div",{className:"cursor fade-in",ref:this.cursor}),Object(m.jsx)("div",{className:"cursor fade-in",ref:this.cursorTrailing})]}),Object(m.jsx)(v,{})]}),n=Object(m.jsx)("div",{children:Object(m.jsx)(L,{})}),i=Object(m.jsx)("div",{children:Object(m.jsx)(E,{})}));return Object(m.jsxs)("div",{className:"App",children:[e,t,n,i]})}}]),n}(i.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),I()}},[[23,1,2]]]);
//# sourceMappingURL=main.f8acd3e3.chunk.js.map