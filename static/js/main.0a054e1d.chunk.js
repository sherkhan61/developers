(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";var r=n(1),c=n.p+"static/media/Eclipse.6a2995f7.svg";n(0),t.a=function(e){return Object(r.jsx)("img",{src:c})}},114:function(e,t,n){e.exports={paginator:"Paginator_paginator__2zORR",pageNumber:"Paginator_pageNumber__Z2Bu1",selectedPage:"Paginator_selectedPage__1Xfm9"}},134:function(e,t,n){e.exports={loginBlock:"Header_loginBlock__rorxu"}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return S})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return v}));var r=n(12),c=n.n(r),a=n(27),i=n(63),u=n(6),s=n(54),o=n(25),l=function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},j=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},b=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},O={postsData:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"Hi, bro",likesCount:12},{id:3,message:"Bla bla bla",likesCount:12},{id:4,message:"Yo Yo Yo Yo Yo",likesCount:12}],profile:null,status:""},p={addPostActionCreate:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUsersProfile:function(e){return{type:"SN/PROFILE/SET_USERS_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setUsersProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===t.sent.resultCode&&n(p.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(r=t.sent).resultCode&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,b(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(h(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(s.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[n])});case"SN/PROFILE/DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case"SN/PROFILE/SET_USERS_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})})}return e}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(63),c=n(6),a={dialogsData:[{id:1,name:"Sherkhan"},{id:2,name:"Sabyrzhan"},{id:3,name:"Aldiyar"},{id:4,name:"Parasat"},{id:5,name:"Temirbolat"},{id:6,name:"Erbol"},{id:7,name:"Birzhan"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"}]},i={sendMessage:function(e){return{type:"SN/DIALOGS/SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND-MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:3,message:n}])})}return e}},165:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},186:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1FF3y",selectedPage:"Users_selectedPage__3TC18"}},228:function(e,t,n){},229:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(179),i=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"11f6f6da-a19a-4694-bc7f-68eb9e84e954"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},352:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(24),u=n.n(i),s=(n(228),n(94)),o=n(95),l=n(99),d=n(98),j=(n(229),n(230),n(355)),f=n(356),b=n(358),O=n(359),p=n(360),h=n(361),S=n.p+"static/media/logo.6ce24c58.svg",g=n(132),m=n(100),v=n(20),x=n(19),E=n(37),C=n(21),I=n(12),w=n.n(I),R=n(27),P=n(6),N=n(25),U=n(54),y=function(){return N.c.get("auth/me").then((function(e){return e.data}))},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return N.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},k=function(){return N.c.delete("auth/login")},A=function(){return N.c.get("security/get-captcha-url").then((function(e){return e.data}))},F={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},L=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},_=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},G=function(){return function(){var e=Object(R.a)(w.a.mark((function e(t){var n,r,c,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:(n=e.sent).resultCode===N.b.Success&&(r=n.data,c=r.id,a=r.login,i=r.email,t(L(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(R.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,r=n.url,t(_(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},z={initialized:!1},J=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},W=n(143),Y=n(154),q={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return e},K=n(63),H=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},V={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return N.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return N.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return N.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},Z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},Q=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},$=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},ee=function(e){return{type:"SN/USERS/SET_USERS",users:e}},te=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},ne=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},re=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},ce=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},ae=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ie=function(e,t,n){return function(){var r=Object(R.a)(w.a.mark((function r(c){var a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(ce(!0)),c(te(e)),c(re(n)),r.next=5,V.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(ce(!1)),c(ee(a.items)),c(ne(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ue=function(){var e=Object(R.a)(w.a.mark((function e(t,n,r,c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ae(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(ae(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(P.a)(Object(P.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(K.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))})}return e},oe=n(180),le=n(177),de=Object(v.c)({profilePage:W.b,dialogsPage:Y.b,sidebar:X,usersPage:se,auth:D,form:le.a,app:B}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,fe=Object(v.e)(de,je(Object(v.a)(oe.a)));window._store_=fe;var be=fe,Oe=n(134),pe=n.n(Oe),he=n(357),Se=function(e){return Object(r.jsx)("header",{className:pe.a.header,children:Object(r.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login,Object(r.jsx)(he.a.Button,{value:"default",onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(E.b,{to:"/login",children:"Login"})})})},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Se,Object(P.a)({},this.props))}}]),n}(a.a.Component),me=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(R.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:0===e.sent.data.resultCode&&t(L(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ge),ve=function(e){return e.usersPage.users},xe=function(e){return e.usersPage.pageSize},Ee=function(e){return e.usersPage.totalUsersCount},Ce=function(e){return e.usersPage.currentPage},Ie=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},Re=function(e){return e.usersPage.filter},Pe=n(101),Ne=n(142),Ue=n(114),ye=n.n(Ue),Te=n(9),ke=n.n(Te),Ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,i=e.onPageChanged,u=e.portionSize,s=void 0===u?10:u,o=Math.ceil(t/n),l=[],d=1;d<=o;d++)l.push(d);var j=Math.ceil(o/s),f=Object(c.useState)(1),b=Object(Ne.a)(f,2),O=b[0],p=b[1],h=(O-1)*s+1,S=O*s;return Object(r.jsxs)("div",{className:ye.a.paginator,children:[O>1&&Object(r.jsx)("button",{onClick:function(){p(O-1)},children:"Prev"}),l.filter((function(e){return e>=h&&e<=S})).map((function(e){return Object(r.jsx)("span",{className:ke()(Object(Pe.a)({},ye.a.selectedPage,a===e),ye.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),j>O&&Object(r.jsx)("button",{onClick:function(){p(O+1)},children:"Next"})]})},Fe=n(186),Le=n.n(Fe),_e=n(165),Ge=function(e){var t=e.user,n=Object(x.d)(we),c=Object(x.c)(),a=function(e){c(function(e){return function(){var t=Object(R.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n,e,V.follow.bind(V),Q);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},i=function(e){c(function(e){return function(){var t=Object(R.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n,e,V.unfollow.bind(V),$);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(E.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:_e.a,className:Le.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},Me=n(85),De=function(e){return{}},ze=a.a.memo((function(e){var t=Object(x.d)(Re);return Object(r.jsx)("div",{children:Object(r.jsx)(Me.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:De,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(r.jsxs)(Me.b,{children:[Object(r.jsx)(Me.a,{type:"text",name:"term"}),Object(r.jsxs)(Me.a,{as:"select",name:"friend",children:[Object(r.jsx)("option",{value:"null",children:"All"}),Object(r.jsx)("option",{value:"true",children:"Only followed"}),Object(r.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(r.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),Je=n(138),Be=function(){var e=Object(x.d)(Ee),t=Object(x.d)(Ce),n=Object(x.d)(xe),a=Object(x.d)(ve),i=Object(x.d)(Re),u=Object(x.c)(),s=Object(C.f)();Object(c.useEffect)((function(){var e=Je.parse(s.location.search.substr(1)),r=t,c=i;switch(e.page&&(r=Number(e.page)),e.term&&(c=Object(P.a)(Object(P.a)({},c),{},{term:e.term})),e.friend){case"null":c=Object(P.a)(Object(P.a)({},c),{},{friend:null});break;case"true":c=Object(P.a)(Object(P.a)({},c),{},{friend:!0});break;case"false":c=Object(P.a)(Object(P.a)({},c),{},{friend:!1})}u(ie(r,n,c))}),[]),Object(c.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==t&&(e.page=String(t)),s.push({pathname:"/users",search:Je.stringify(e)})}),[i,t]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(ze,{onFilterChanged:function(e){u(ie(1,n,e))}}),Object(r.jsx)(Ae,{totalItemsCount:e,pageSize:n,currentPage:t,onPageChanged:function(e){u(ie(e,n,i))}}),Object(r.jsx)("div",{children:a.map((function(e){return Object(r.jsx)(Ge,{user:e},e.id)}))})]})},We=function(e){var t=Object(x.d)(Ie);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:e.pageTitle}),t?Object(r.jsx)(m.a,{}):null,Object(r.jsx)(Be,{})]})},Ye=n(176),qe=n(47),Xe=n(96),Ke=n(81),He=n.n(Ke),Ve=Object(Ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,c=e.captchaUrl;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(qe.c)("email","email",[Xe.b],qe.a),Object(qe.c)("password","password",[Xe.b],qe.a,{type:"password"}),Object(qe.c)(void 0,"rememberMe",[],qe.a,{type:"checkbox"},"remember me"),c&&Object(r.jsx)("img",{src:c}),c&&Object(qe.c)("symbols from image","captcha",[Xe.b],qe.a),n&&Object(r.jsx)("div",{className:He.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Ze=function(){var e=Object(x.d)((function(e){return e.auth.captchaUrl})),t=Object(x.d)((function(e){return e.auth.isAuth})),n=Object(x.c)();return t?Object(r.jsx)(C.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(Ve,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(R.a)(w.a.mark((function e(n){var i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t,r,c,a);case 2:(i=e.sent).resultCode===N.b.Success?n(G()):(i.resultCode===N.a.CaptchaIsRequired&&n(M()),u=i.messages.length>0?i.messages[0]:"Some error",n(Object(U.a)("login",{_error:u})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},Qe=function(){return Object(r.jsx)("div",{children:"News"})},$e=j.a.Header,et=j.a.Content,tt=j.a.Footer,nt=j.a.Sider,rt=Object(g.a)((function(){return n.e(3).then(n.bind(null,366))})),ct=Object(g.a)((function(){return n.e(4).then(n.bind(null,367))})),at=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(nt,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:S})}),Object(r.jsxs)(f.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],children:[Object(r.jsx)(f.a.Item,{icon:Object(r.jsx)(b.a,{}),children:Object(r.jsx)(E.b,{to:"/profile",children:"Profile"})},"1"),Object(r.jsx)(f.a.Item,{icon:Object(r.jsx)(O.a,{}),children:Object(r.jsx)(E.b,{to:"/dialogs",children:"Messages"})},"2"),Object(r.jsx)(f.a.Item,{icon:Object(r.jsx)(p.a,{}),children:Object(r.jsx)(E.b,{to:"/users",children:"Users"})},"3"),Object(r.jsx)(f.a.Item,{icon:Object(r.jsx)(h.a,{}),children:Object(r.jsx)(E.b,{to:"/news",children:"News"})},"4")]})]}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)($e,{className:"site-layout-sub-header-background",style:{padding:0,background:"#3f5c80"},children:Object(r.jsx)(me,{})}),Object(r.jsx)(et,{style:{margin:"24px 16px 0"},children:Object(r.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(r.jsx)(C.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(rt,{})}}),Object(r.jsx)(C.b,{path:"/dialogs",render:function(){return Object(r.jsx)(ct,{})}}),Object(r.jsx)(C.b,{path:"/users",render:function(){return Object(r.jsx)(We,{pageTitle:"Developers"})}}),Object(r.jsx)(C.b,{path:"/login",render:function(){return Object(r.jsx)(Ze,{})}}),Object(r.jsx)(C.b,{path:"/news",render:function(){return Object(r.jsx)(Qe,{})}})]})}),Object(r.jsx)(tt,{style:{textAlign:"center",background:"#3f5c80"},children:"\xa92021 Created by Sherkhan Tulkibay"})]})]}):Object(r.jsx)(m.a,{})}}]),n}(a.a.Component),it=Object(v.d)(C.g,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(R.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(G());case 2:e.sent,t(J());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(at),ut=function(){return Object(r.jsx)(E.a,{children:Object(r.jsx)(x.a,{store:be,children:Object(r.jsx)(it,{})})})};u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(ut,{})}),document.getElementById("root"))},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(6),c=n(131),a=n(1),i=(n(0),n(81)),u=n.n(i),s=n(130),o=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,i=n&&r;return Object(a.jsxs)("div",{className:u.a.formControl+" "+(i?u.a.error:""),children:[Object(a.jsx)("div",{children:c}),i&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function j(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,Object(r.a)({placeholder:e,name:t,component:c,validate:n},i))," ",u]})}},81:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2VapM",error:"FormsControls_error__1b4rb",formSummaryError:"FormsControls_formSummaryError__J8csc"}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}}},[[352,1,2]]]);
//# sourceMappingURL=main.0a054e1d.chunk.js.map