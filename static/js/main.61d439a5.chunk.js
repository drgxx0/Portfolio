(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/profile.96dbc23c.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/cssgradientgenerator.f15e38fa.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/robofriends.854a118e.jpg"},147:function(e,t,a){e.exports=a.p+"static/media/faceapp.7505b075.jpg"},148:function(e,t,a){e.exports=a.p+"static/media/learnkorean.c99d85c3.jpg"},158:function(e,t,a){e.exports=a(302)},163:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/head.9a29976e.jpg"},300:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),l=a.n(c),i=(a(163),a(54)),o=a(55),m=a(63),s=a(56),u=a(65),d=a(317),E=a(286),p=a(319),g=a(61),h=function(e){return e.children},v=a(314),b=a(310),f=a(316),y=function(e){var t=e.onHandleActiveItem,a=e.activeItem,n=e.device,c=e.onSideBarManage,l=["home","about","projects","contact"].map(function(e){return r.a.createElement(b.a.Item,{key:e,name:e,active:a===e,as:f.a,exact:!0,to:"home"===e?"/":"/".concat(e),onClick:"desktop"===n?t:"mobile"===n?function(){return c(!1)}:null,style:{textTransform:"capitalize"}},e)});return r.a.createElement(h,null,l)},I=function(e){var t=e.children,a=e.sideBar,n=e.onSideBarManage;return r.a.createElement(v.a.Pushable,null,r.a.createElement(v.a,{as:b.a,animation:"overlay",inverted:!0,vertical:!0,visible:a},r.a.createElement(y,{device:"mobile",onSideBarManage:n})),r.a.createElement(v.a.Pusher,{dimmed:a,style:{minHeight:"100vh"},onClick:function(){a&&n(!1)}},r.a.createElement("div",null,t)))},x=a(308),w=a(318),j=a(307),A=function(e){var t=e.onHandleActiveItem,a=e.activeItem;return r.a.createElement(w.a,{inverted:!0,textAlign:"center",vertical:!0},r.a.createElement(b.a,{fixed:null,inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(j.a,null,r.a.createElement(y,{device:"desktop",onHandleActiveItem:t,activeItem:a}))))},S=a(129),k=function(e){var t=e.onSideBarManage;return r.a.createElement("div",null,r.a.createElement(w.a,{inverted:!0,textAlign:"center",vertical:!0},r.a.createElement(j.a,null,r.a.createElement(b.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(b.a.Item,{onClick:function(){return t(!0)}},r.a.createElement(S.a,{name:"sidebar"}))))))},W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onHandleActiveItem=function(e,t){var n=t.name;a.props.onActiveItem(n)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSideBarManage,a=e.activeItem;return r.a.createElement(h,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(A,{activeItem:a,onHandleActiveItem:this.onHandleActiveItem})),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(k,{onSideBarManage:t})))}}]),t}(n.Component),B=a(315),R=a(313),C=a(311),O=a(27),T=a.n(O),M=function(e){var t=e.mobile,a=e.onActiveItem;return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:t?"80vh":""}},r.a.createElement(j.a,{text:!0},r.a.createElement(B.a,{as:"h2",content:"Full-Stack Web Developer",style:{color:"#fff",fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"2em":"3em"}}),r.a.createElement(B.a,{as:"h3",content:"React+Redux Frontend / Nodejs+Expressjs Backend",style:{color:"#fff",fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"1em":"1.5em"}}),r.a.createElement(R.a,{centered:!0,padded:!0},r.a.createElement(C.a,{onClick:function(){return a("projects")},as:f.a,to:"/projects",primary:!0,size:"huge",style:{marginBottom:t?"2em":"9em",marginTop:t?"3em":""}},"Projects",r.a.createElement(S.a,{name:"right arrow"})))))},z=function(e){var t=e.onActiveItem;return r.a.createElement(h,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(M,{onActiveItem:t})),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(M,{onActiveItem:t,mobile:!0})))},_=a(303),D=a(144),J=a.n(D),H=function(e){var t=e.mobile;return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:"80vh"}},r.a.createElement(R.a,{columns:t?1:2,centered:!0},r.a.createElement(R.a.Column,{verticalAlign:"middle"},r.a.createElement(w.a,{style:{marginTop:t?"5em":"10em"}},r.a.createElement("div",{style:{display:"grid",justifyContent:"center"}},r.a.createElement(_.a,{src:J.a,size:t?"tiny":"small",circular:!0})),r.a.createElement(R.a.Row,null,r.a.createElement(B.a,{as:"h2",style:{marginTop:"1em"}},"Alejandro Fuenmayor"),r.a.createElement(B.a.Content,null,"Full Stack Web Developer with high knowledge in: ReactJs, Redux/Saga, NodeJs, ExpressJs, Mysql and Postgresql"))))))},P=function(){return r.a.createElement(h,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(H,null)),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(H,{mobile:!0})))},N=a(309),F=a(145),U=a.n(F),V=a(146),X=a.n(V),q=a(147),G=a.n(q),L=a(148),K=a.n(L),$=function(){return r.a.createElement(h,null,r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover"}},r.a.createElement(N.a.Group,{itemsPerRow:2,centered:!0,stackable:!0,doubling:!0,style:{margin:"5px"}},r.a.createElement(N.a,{href:"https://drgxx0.github.io/cssgradientgenerator.github.io/"},r.a.createElement(_.a,{src:U.a,size:"huge"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,"Css Gradient Generator"),r.a.createElement(N.a.Description,null,"A fun project with CSS3 and JavaScript that provides a powerfull design tool"))),r.a.createElement(N.a,{href:"https://drgxx0.github.io/robofriendsapp/"},r.a.createElement(_.a,{src:X.a,size:"huge"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,"RoboFriends"),r.a.createElement(N.a.Description,null,"Web App in Reactjs, Responsive, and connected to an API"))),r.a.createElement(N.a,{href:"https://smart-app-face.herokuapp.com/"},r.a.createElement(_.a,{src:G.a,size:"huge"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,"FaceApp"),r.a.createElement(N.a.Description,null,"Advanced Web App with signin and signup forms connected to a server develop in Nodejs+ExpressJs and that store data in a Postgresql's database. Also It's connected to an API to Face recognition"))),r.a.createElement(N.a,{href:"https://drgxx0.github.io/learnkorean/"},r.a.createElement(_.a,{src:K.a,size:"huge"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,"Learn Korean"),r.a.createElement(N.a.Description,null,"Web App to education that show a simple single page with a singup and signin form, this project was made with ReactJs+Redux and It's connected to a NodeJs+ExpressJs server made by me too"))))))},Q=function(){return r.a.createElement(w.a,{inverted:!0,vertical:!0,style:{background:"linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(".concat(T.a,") center center no-repeat"),backgroundSize:"cover",height:"80vh"}},r.a.createElement(R.a,null,r.a.createElement(R.a.Row,null),r.a.createElement(R.a.Row,null,r.a.createElement(R.a.Column,{width:3}),r.a.createElement(R.a.Column,{width:10},r.a.createElement(w.a,null,r.a.createElement(j.a,{textAlign:"center"},r.a.createElement(B.a,{as:"h1",content:"Contact me"})),r.a.createElement(j.a,{textAlign:"center",style:{marginTop:"2em"}},r.a.createElement(S.a,{name:"mail",size:"big"}),"alejandroff91@gmail.com",r.a.createElement("br",null),r.a.createElement(S.a,{name:"github",size:"big"}),"https://github.com/drgxx0"))),r.a.createElement(R.a.Column,{width:3})),r.a.createElement(R.a.Row,null)))},Y=(a(300),function(){return r.a.createElement(h,null,r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("strong",null,"\xa9WebPage")," by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved"))),r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement("div",{className:"footerM"},r.a.createElement("p",null,r.a.createElement("strong",null,"\xa9WebPage")," by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved"))))}),Z=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sideBar,a=e.onActiveItem,n=e.onSideBarManage,c=e.activeItem;return r.a.createElement(h,null,r.a.createElement(I,{sideBar:t,onSideBarManage:n},r.a.createElement(W,{activeItem:c,onSideBarManage:n,onActiveItem:a}),r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement(z,{onActiveItem:a})}}),r.a.createElement(E.a,{path:"/about",component:P}),r.a.createElement(E.a,{path:"/projects",component:$}),r.a.createElement(E.a,{path:"/contact",component:Q})),r.a.createElement(Y,null)))}}]),t}(n.Component),ee=Object(p.a)(Object(g.b)(function(e){return{sideBar:e.sideBar,activeItem:e.activeItem}},function(e){return{onSideBarManage:function(t){return e({type:"SIDEBAR",stat:t})},onActiveItem:function(t){return e({type:"ACTIVE_ITEM",item:t})}}})(Z));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(58),ae=a(312),ne=a(91),re={sideBar:!1,activeItem:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR":return Object(ne.a)({},e,{sideBar:t.stat});case"ACTIVE_ITEM":return Object(ne.a)({},e,{activeItem:t.item});default:return e}},le=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ie=Object(te.b)(ce,le),oe=r.a.createElement(g.a,{store:ie},r.a.createElement(ae.a,{basename:"/Portfolio"},r.a.createElement(ee,null)));l.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,2,1]]]);
//# sourceMappingURL=main.61d439a5.chunk.js.map