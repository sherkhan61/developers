(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{300:function(t,e,s){"use strict";s.r(e);var r=s(3),a=s(41),p=s(42),o=s(44),i=s(43),u=s(0),h=s(1),n=s.n(h),c=s(143),f=s(71),d=s(10),l=s(12),m=s(17),b=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(p.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(u.jsx)(c.a,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(n.a.Component);e.default=Object(d.d)(Object(m.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:f.c,getStatus:f.d,updateStatus:f.g,savePhoto:f.e,saveProfile:f.f}),l.f)(b)}}]);
//# sourceMappingURL=4.e9c5ad84.chunk.js.map