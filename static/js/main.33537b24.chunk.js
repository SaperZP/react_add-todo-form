(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=a(1),l=(a(14),a(8)),d=a.n(l),u=a(0),m=function(e){var t=e.todo;return Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title})},j=function(e){var t=e.user;return t?Object(u.jsx)("a",{className:"UserInfo",href:"mailto:Sincere@april.biz",children:"".concat(t.name," (").concat(t.username,")")}):Object(u.jsx)("p",{children:"task is not asigned"})},b=function(e){var t=e.todos;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsxs)("article",{"data-id":e.id,className:d()("TodoInfo",{"TodoInfo--completed":e.completed}),children:[Object(u.jsx)(m,{todo:e}),Object(u.jsx)(j,{user:e.user})]},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=h.find((function(t){return t.id===e.userId}))||null;return Object(c.a)(Object(c.a)({},e),{},{user:t})})),f=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(!1),j=Object(s.a)(m,2),f=j[0],p=j[1],x=Object(o.useState)(0),v=Object(s.a)(x,2),S=v[0],y=v[1],g=Object(o.useState)(!1),N=Object(s.a)(g,2),I=N[0],C=N[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t={id:a.sort((function(e,t){return e.id-t.id}))[a.length-1].id+1,title:l,completed:!1,userId:S,user:h.find((function(e){return e.id===S}))||null};p(!l),C(!S),l&&S&&(n([].concat(Object(r.a)(a),[t])),d(""),y(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{"data-cy":"titleInput",onChange:function(e){p(!1),d(e.target.value)},value:l,type:"text",placeholder:"Enter a title"}),f&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){y(+e.target.value),C(!1)},value:S,children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.username},e.id)}))]}),I&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)("section",{className:"TodoList",children:Object(u.jsx)(b,{todos:a})})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.33537b24.chunk.js.map