(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),r=a.n(l),o=(a(32),a(1)),s=a(2),m=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Blog"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/blog"},"Blog")))))},i=function(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(m,null),t)},u=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{class:"display-4"},"Welcome to Blogs"),c.a.createElement("p",{class:"lead"},"We make all kinds of awesome blogs about various topics."),c.a.createElement("hr",{class:"my-4"}),c.a.createElement("p",null,"Click the button below to check out our blogs."),c.a.createElement(o.b,{class:"btn btn-primary btn-lg",to:"/blog",role:"button"},"Check it out")))},d=a(6),p=a.n(d),b=a(8),g=a(7),E=a(9),v=a.n(E),h=function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)([]),m=Object(g.a)(s,2),i=m[0],u=m[1];Object(n.useEffect)((function(){var t=e.match.params.id;console.log("Category",t),u(d(t));var a={headers:{"Content-Type":"application/json"}};(function(){var e=Object(b.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("".concat("http://localhost:8000","/api/blog/category"),{category:t},a);case 3:n=e.sent,console.log("BlogDetail:",n.data),r(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var d=function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""};return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("h3",{className:"display-4"},i," Category"),c.a.createElement("div",{className:"nav-scroller py-1 mb-2"},c.a.createElement("nav",{className:"nav d-flex justify-content-between"},c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/world"},"World"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/environment"},"Environment"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/technology"},"Technology"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/design"},"Design"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/culture"},"Culture"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/business"},"Business"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/politics"},"Politics"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/opinion"},"Opinion"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/science"},"Science"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/health"},"Health"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/style"},"Style"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/travel"},"Travel"))),function(){var e=[],t=[];l.map((function(t){return e.push(c.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},c.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},c.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},d(t.category)),c.a.createElement("h3",{className:"mb-0"},t.title),c.a.createElement("div",{className:"mb-1 text-muted"},t.month," ",t.day),c.a.createElement("p",{className:"card-text mb-auto"},t.excrept),c.a.createElement(o.b,{to:"/blog/".concat(t.slug),className:"stretched-link"},"Continue reading")),c.a.createElement("div",{className:"col-auto d-none d-lg-block"},c.a.createElement("img",{src:t.thumbnail,width:"200",height:"250",alt:"thumbnail"}))))}));for(var a=0;a<e.length;a+=2)t.push(c.a.createElement("div",{key:a,className:"row mb-2"},c.a.createElement("div",{className:"col-md-6"},e[a]),c.a.createElement("div",{className:"col-md-6"},e[a+1]?e[a+1]:null)));return t}())},N=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),m=s[0],i=s[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("http://localhost:8000","/api/blog/featured"));case 3:t=e.sent,console.log("Featured:",t.data),i(t.data[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("http://localhost:8000","/api/blog/"));case 3:t=e.sent,console.log("Blog:",t.data),l(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("div",{className:"nav-scroller py-1 mb-2"},c.a.createElement("nav",{className:"nav d-flex justify-content-between"},c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/world"},"World"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/environment"},"Environment"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/technology"},"Technology"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/design"},"Design"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/culture"},"Culture"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/business"},"Business"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/politics"},"Politics"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/opinion"},"Opinion"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/science"},"Science"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/health"},"Health"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/style"},"Style"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/travel"},"Travel"))),c.a.createElement("div",{className:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},c.a.createElement("div",{className:"col-md-6 px-0"},c.a.createElement("h1",{className:"display-4 font-italic"},m.title),c.a.createElement("p",{className:"lead my-3"},m.excrept),c.a.createElement("p",{className:"lead mb-0"},c.a.createElement(o.b,{to:"/blog/".concat(m.slug),className:"text-white font-weight-bold"},"Continue reading...")))),function(){var e=[],t=[];a.map((function(t){return e.push(c.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},c.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},c.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},(a=t.category)?a.charAt(0).toUpperCase()+a.slice(1):""),c.a.createElement("h3",{className:"mb-0"},t.title),c.a.createElement("div",{className:"mb-1 text-muted"},t.month," ",t.day),c.a.createElement("p",{className:"card-text mb-auto"},t.excrept),c.a.createElement(o.b,{to:"/blog/".concat(t.slug),className:"stretched-link"},"Continue reading")),c.a.createElement("div",{className:"col-auto d-none d-lg-block"},c.a.createElement("img",{src:t.thumbnail,width:"200",height:"250",alt:"thumbnail"}))));var a}));for(var n=0;n<e.length;n+=2)t.push(c.a.createElement("div",{key:n,className:"row mb-2"},c.a.createElement("div",{className:"col-md-6"},e[n]),c.a.createElement("div",{className:"col-md-6"},e[n+1]?e[n+1]:null)));return t}())},f=function(e){var t=Object(n.useState)({}),a=Object(g.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){var t=e.match.params.id;console.log("Slug",t),function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("http://localhost:8000","/api/blog/").concat(t));case 3:a=e.sent,console.log("BlogDetail:",a.data),r(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[e.match.params.id]);var s;return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("h1",{className:"display-2"},l.title),c.a.createElement("h2",{className:"text-muted mt-3"},"Categoty: ",(s=l.category)?s.charAt(0).toUpperCase()+s.slice(1):""),c.a.createElement("h4",null,l.month," ",l.day),c.a.createElement("div",{className:"mt-5 mb-5",dangerouslySetInnerHTML:{__html:l.content}}),c.a.createElement("hr",null),c.a.createElement("p",{className:"lead mb-5"},c.a.createElement(o.b,{to:"/blog",className:"font-weight-bold"},"Back to Blogs")))};var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(i,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:u}),c.a.createElement(s.a,{exact:!0,path:"/blog",component:N}),c.a.createElement(s.a,{exact:!0,path:"/category/:id",component:h}),c.a.createElement(s.a,{exact:!0,path:"/blog/:id",component:f})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.814683c7.chunk.js.map