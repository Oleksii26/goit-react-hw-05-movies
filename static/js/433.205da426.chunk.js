"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{235:function(t,n,e){e.d(n,{II:function(){return m},K8:function(){return s},Ty:function(){return o},VJ:function(){return d},WE:function(){return l},cX:function(){return v},i2:function(){return f},v3:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="https://gopractice.ru/wp-content/uploads/2015/11/o-THE-ART-OF-SAYING-NO-facebook.jpg",i="https://us.123rf.com/450wm/solarus/solarus2112/solarus211200026/solarus211200026.jpg?ver=6",s="https://image.tmdb.org/t/p/w500/",p="6e9a81a407105e7aedf1637991fa6ef2";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/trending/all/day?api_key=".concat(p));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},433:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(861),a=e(885),c=e(757),u=e.n(c),o={link:"Home_link__nk6bm",container:"Home_container__MGYYT",title:"Home_title__XLxL1",list:"Home_list__axoM8",item:"Home_item__KHBnP",popular:"Home_popular__iitcd",text:"Home_text__zy214",filmInformation:"Home_filmInformation__9DLPs"},i=e(731),s=e(689),p=e(791),f=e(235),l=e(184),m=function(){var t=(0,s.TH)(),n=(0,p.useState)([]),e=(0,a.Z)(n,2),c=e[0],m=e[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.i2)();case 3:n=t.sent,m(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Something went wrong");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{className:o.container,children:[(0,l.jsx)("h2",{className:o.title,children:"Trending today"}),(0,l.jsx)("div",{className:o.popular,children:c.map((function(n,e){return(0,l.jsx)("div",{className:o.filmInformation,children:(0,l.jsxs)(i.rU,{className:o.link,to:"movies/".concat(n.id),state:{from:t},children:[(0,l.jsx)("img",{className:o.cover,src:"".concat(f.K8).concat(n.backdrop_path),alt:n.name||n.title,width:400}),(0,l.jsx)("p",{className:o.text,children:n.name||n.title})]})},n.id+e)}))})]})}}}]);
//# sourceMappingURL=433.205da426.chunk.js.map