"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[737],{235:function(t,n,e){e.d(n,{II:function(){return v},K8:function(){return s},Ty:function(){return i},VJ:function(){return h},WE:function(){return l},cX:function(){return m},i2:function(){return f},v3:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="https://gopractice.ru/wp-content/uploads/2015/11/o-THE-ART-OF-SAYING-NO-facebook.jpg",o="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg",s="https://image.tmdb.org/t/p/w500/",p="6e9a81a407105e7aedf1637991fa6ef2";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/trending/all/day?api_key=".concat(p));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},737:function(t,n,e){e.r(n);var r=e(885),a=e(791),c=e(689),u=e(235),i=e(905),o=e(184);n.default=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),s=e[0],p=e[1];return(0,a.useEffect)((function(){(0,u.cX)(t).then((function(t){return p(t.cast)}))}),[t]),s.length>0?(0,o.jsx)("ul",{className:i.Z.list,children:s.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{className:i.Z.image,src:t.profile_path?"".concat(u.K8).concat(t.profile_path):"https://museum-literature.odessa.ua/wp-content/uploads/2019/05/no-photo.png",alt:t.name}),(0,o.jsx)("p",{children:t.name})]},t.cast_id)}))}):"Not information"}},905:function(t,n){n.Z={list:"Casts_list__ARra8",image:"Casts_image__vyRNC",listReview:"Casts_listReview__jwDOo"}}}]);
//# sourceMappingURL=737.916a0a7a.chunk.js.map