(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(t,e,n){t.exports={myInp:"MyInp_myInp__15B7W"}},20:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(8),i=n.n(r),s=n(13),o=n(6),a=n(3),l=n.n(a),u=n(4),j=n(14),b=n(9),d=n.n(b),p=n(0),O=function(t){var e=t.children,n=Object(j.a)(t,["children"]);return Object(p.jsx)("button",Object(u.a)(Object(u.a)({},n),{},{className:d.a.my_btn,children:e}))},f=function(t){var e=t.post,n=e.title,c=e.body,r=t.number,i=t.remove,s=t.post;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:l.a.list,children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("h6",{children:[r," ",n]}),Object(p.jsx)("div",{children:c})]}),Object(p.jsx)("div",{children:Object(p.jsx)(O,{onClick:function(){return i(s)},children:"Delete"})})]})})},v=function(t){var e=t.posts,n=t.title,c=t.remove;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n}),e.map((function(t,e){return Object(p.jsx)(f,{number:e+1,post:t,remove:c},t.id)}))]})},x=n(10),h=n.n(x),m=function(t){return Object(p.jsx)("input",Object(u.a)({className:h.a.myInp},t))},_=n(11),y=n(12),g=function(){function t(){Object(_.a)(this,t)}return Object(y.a)(t,null,[{key:"set",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"get",value:function(t){return JSON.parse(localStorage.getItem(t))}}]),t}(),N=function(t){var e=t.create,n=Object(c.useState)(""),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){var t=g.get("title")||"";s(t)}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)(m,{value:i,const:!0,onChange:function(t){g.set("title",t.target.value),s(t.target.value)},type:"text",placeholder:"Create your TodoList"}),Object(p.jsx)(O,{onClick:function(t){return t.preventDefault(),e(i),s(""),g.set("title",""),i},children:"Create"})]})})};var k=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useCallback)((function(t){r((function(e){var c;return[].concat(Object(s.a)(e),[{id:((null===(c=n[n.length-1])||void 0===c?void 0:c.id)||0)+1,title:t,body:"value"}])}))}),[n]);return Object(c.useEffect)((function(){var t=g.get("list")||[];r(t)}),[]),Object(c.useEffect)((function(){g.set("list",n)}),[n]),Object(p.jsxs)("div",{className:l.a.App,children:[Object(p.jsx)(N,{create:i}),n.length?Object(p.jsx)(v,{posts:n,title:"List",remove:function(t){var e=t.id;r(n.filter((function(t){return t.id!==e})))}}):Object(p.jsx)("div",{className:l.a.NoListText,children:"Please create your own TodoLists !"})]})};i.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))},3:function(t,e,n){t.exports={App:"App_App__3R4rg",root:"App_root__2d7eG",list:"App_list__1wewk",NoListText:"App_NoListText__2uZC7",form:"App_form__2otOY"}},9:function(t,e,n){t.exports={my_btn:"MyBtn_my_btn__30kZE"}}},[[20,1,2]]]);
//# sourceMappingURL=main.84597c14.chunk.js.map