(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a.p+"static/media/profile.96dbc23c.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/cssgradientgenerator.f15e38fa.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/robofriends.854a118e.jpg"},199:function(e,t,a){e.exports=a.p+"static/media/faceapp.7505b075.jpg"},200:function(e,t,a){e.exports=a.p+"static/media/learnkorean.c99d85c3.jpg"},201:function(e,t,a){e.exports=a.p+"static/media/expense.1c8609bf.jpg"},202:function(e,t,a){e.exports=a(303)},207:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/head.9a29976e.jpg"},301:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),i=(a(207),a(53)),l=a(54),m=a(80),s=a(55),d=a(82),u=a(318),p=a(189),g=a(319),h=a(74),E=a(314),v=a(312),b=a(317),f=function(e){var t=e.onHandleActiveItem,a=e.activeItem,n=e.device,c=e.onSideBarManage,o=["home","about","projects","contact"].map(function(e){return r.a.createElement(v.a.Item,{key:e,name:e,active:a===e,as:b.a,exact:!0,to:"home"===e?"/":"/".concat(e),onClick:"desktop"===n?t:"mobile"===n?function(){return c(!1)}:null,style:{textTransform:"capitalize"}},e)});return r.a.createElement(r.a.Fragment,null,o)},y=function(e){var t=e.children,a=e.sideBar,n=e.onSideBarManage;return r.a.createElement(E.a.Pushable,null,r.a.createElement(E.a,{as:v.a,animation:"overlay",inverted:!0,vertical:!0,visible:a},r.a.createElement(f,{device:"mobile",onSideBarManage:n})),r.a.createElement(E.a.Pusher,{dimmed:a,style:{minHeight:"100vh"},onClick:function(){a&&n(!1)}},r.a.createElement("div",null,t)))},x=a(309),w=a(320),I=a(308),A=function(e){var t=e.onHandleActiveItem,a=e.activeItem;return r.a.createElement(w.a,{inverted:!0,textAlign:"center",vertical:!0},r.a.createElement(v.a,{fixed:null,inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(I.a,null,r.a.createElement(f,{device:"desktop",onHandleActiveItem:t,activeItem:a}))))},j=a(127),k=function(e){var t=e.onSideBarManage;return r.a.createElement("div",null,r.a.createElement(w.a,{inverted:!0,textAlign:"center",vertical:!0},r.a.createElement(I.a,null,r.a.createElement(v.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(v.a.Item,{onClick:function(){return t(!0)}},r.a.createElement(j.a,{name:"sidebar"}))))))},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onHandleActiveItem=function(e,t){var n=t.name;a.props.onActiveItem(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSideBarManage,a=e.activeItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(A,{activeItem:a,onHandleActiveItem:this.onHandleActiveItem})),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(k,{onSideBarManage:t})))}}]),t}(n.Component),W=a(315),B=a(316),R=a(311),O=a(28),T=a.n(O),M=function(e){var t=e.mobile,a=e.onActiveItem;return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:t?"80vh":""}},r.a.createElement(I.a,{text:!0},r.a.createElement(W.a,{as:"h2",content:"Full-Stack Web Developer",style:{color:"#fff",fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"2em":"3em"}}),r.a.createElement(W.a,{as:"h3",content:"React+Redux Frontend / Nodejs+Expressjs Backend",style:{color:"#fff",fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"1em":"1.5em"}}),r.a.createElement(B.a,{centered:!0,padded:!0},r.a.createElement(R.a,{onClick:function(){return a("projects")},as:b.a,to:"/projects",primary:!0,size:"huge",style:{marginBottom:t?"2em":"9em",marginTop:t?"3em":""}},"Projects",r.a.createElement(j.a,{name:"right arrow"})))))},C=function(e){var t=e.onActiveItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(M,{onActiveItem:t})),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(M,{onActiveItem:t,mobile:!0})))},F=a(304),z=a(196),_=a.n(z),J=function(e){var t=e.mobile;return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:"80vh"}},r.a.createElement(B.a,{columns:t?1:2,centered:!0},r.a.createElement(B.a.Column,{verticalAlign:"middle"},r.a.createElement(w.a,{style:{marginTop:t?"5em":"10em"}},r.a.createElement("div",{style:{display:"grid",justifyContent:"center"}},r.a.createElement(F.a,{src:_.a,size:t?"tiny":"small",circular:!0})),r.a.createElement(B.a.Row,null,r.a.createElement(W.a,{as:"h2",style:{marginTop:"1em"}},"Alejandro Fuenmayor"),r.a.createElement(W.a.Content,null,"Full Stack Web Developer with high knowledge in: ReactJs, Redux/Saga, NodeJs, ExpressJs, Mysql and Postgresql"))))))},P=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(J,null)),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(J,{mobile:!0})))},N=a(310),D=a(197),H=a.n(D),L=a(198),U=a.n(L),V=a(199),X=a.n(V),q=a(200),G=a.n(q),K=a(201),$=a.n(K),Q=function(){var e=[{head:"Css Gradient Generator",src:H.a,href:"https://drgxx0.github.io/cssgradientgenerator.github.io/",desc:"A fun project with CSS3 and JavaScript that provides a powerfull design tool"},{head:"RoboFriends",src:U.a,href:"https://drgxx0.github.io/robofriendsapp/",desc:"Web App in Reactjs, Responsive, and connected to an API"},{head:"FaceApp",src:X.a,href:"https://smart-app-face.herokuapp.com/",desc:"Advanced Web App with signin and signup forms connected to a server develop in Nodejs+ExpressJs and that store data in a Postgresql's database. Also It's connected to an API to Face recognition"},{head:"Learn Korean",src:G.a,href:"https://drgxx0.github.io/learnkorean/",desc:"Web App to education that show a simple single page with a singup and signin form, this project was made with ReactJs+Redux and It's connected to a NodeJs+ExpressJs server made by me too"},{head:"Expense Tracker",src:$.a,href:"https://drgxx0.github.io/expense-tracker/",desc:"App web to track your expenses, show your actual funds, log your expenses and it have and graph to keep record in the most easy way. Make wiht ReactJs+Redux"}].map(function(e){return r.a.createElement(N.a,{href:e.href},r.a.createElement(F.a,{src:e.src,size:"huge"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,e.head),r.a.createElement(N.a.Description,null,e.desc)))});return r.a.createElement(r.a.Fragment,null,e)},Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover"}},r.a.createElement(N.a.Group,{itemsPerRow:2,centered:!0,stackable:!0,doubling:!0,style:{margin:"5px"}},r.a.createElement(Q,null))))},Z=function(){return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:"80vh"}},r.a.createElement(B.a,null,r.a.createElement(B.a.Row,null),r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Column,{width:3}),r.a.createElement(B.a.Column,{width:10},r.a.createElement(w.a,null,r.a.createElement(I.a,{textAlign:"center"},r.a.createElement(W.a,{as:"h1",content:"Contact me"})),r.a.createElement(I.a,{textAlign:"center",style:{marginTop:"2em"}},r.a.createElement(j.a,{name:"mail",size:"big"}),"alejandroff91@gmail.com",r.a.createElement("br",null),r.a.createElement(j.a,{name:"github",size:"big"}),"https://github.com/drgxx0"))),r.a.createElement(B.a.Column,{width:3})),r.a.createElement(B.a.Row,null)))},ee=(a(301),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("strong",null,"\xa9WebPage")," by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved"))),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement("div",{className:"footerM"},r.a.createElement("p",null,r.a.createElement("strong",null,"\xa9WebPage")," by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved"))))}),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).pageLocation=function(){var e=window.location.pathname;e.substr(1),a.props.onActiveItem(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sideBar,a=e.onActiveItem,n=e.onSideBarManage,c=e.activeItem;return window.addEventListener("popstate",this.pageLocation()),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{sideBar:t,onSideBarManage:n},r.a.createElement(S,{activeItem:c,onSideBarManage:n,onActiveItem:a}),r.a.createElement(u.a,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(C,{onActiveItem:a})}}),r.a.createElement(p.a,{path:"/about",component:P}),r.a.createElement(p.a,{path:"/projects",component:Y}),r.a.createElement(p.a,{path:"/contact",component:Z})),r.a.createElement(ee,null)))}}]),t}(n.Component),ae=Object(g.a)(Object(h.b)(function(e){return{sideBar:e.sideBar,activeItem:e.activeItem}},function(e){return{onSideBarManage:function(t){return e({type:"SIDEBAR",stat:t})},onActiveItem:function(t){return e({type:"ACTIVE_ITEM",item:t})}}})(te));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(57),re=a(313),ce=a(191),oe={sideBar:!1,activeItem:""},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR":return Object(ce.a)({},e,{sideBar:t.stat});case"ACTIVE_ITEM":return Object(ce.a)({},e,{activeItem:t.item});default:return e}},le=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),me=Object(ne.b)(ie,le),se=r.a.createElement(h.a,{store:me},r.a.createElement(re.a,{basename:"/Portfolio"},r.a.createElement(ae,null)));o.a.render(se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,2,1]]]);
//# sourceMappingURL=main.26b30d22.chunk.js.map