(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),s=n.n(c),i=(n(148),n(20)),o=(n(149),n(1)),l=n.n(o),j=n(4),d="/login",u="/home",b=n(124),p=n(30),h=Object(b.a)({apiKey:"AIzaSyAlOgaPGvP_ZNMOzJO3cq2zK_xfNYq1hJ0",authDomain:"react-login-155ab.firebaseapp.com",projectId:"react-login-155ab",storageBucket:"react-login-155ab.appspot.com",messagingSenderId:"608543717346",appId:"1:608543717346:web:2dd273eaa41861422dabbb",measurementId:"G-HH73YMQYYD"}),m=Object(p.b)(h),O=n(282),x=n(285),v=n(286),g=n(291),f=n(62),w=n(10),y=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(p.c)(m,(function(e){r(e)}));var c=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(m);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(O.a,{position:"static",children:Object(w.jsxs)(x.a,{variant:"dense",children:[Object(w.jsx)(v.a,{children:null===n||void 0===n?void 0:n.email}),Object(w.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:n?Object(w.jsx)(g.a,{variant:"outlined",onClick:c,children:"Logout"}):Object(w.jsx)(f.b,{to:d,children:Object(w.jsx)(g.a,{variant:"contained",children:"Login"})})})]})})},C=n(24),k=n(287),B=n(288),I=n(290),S=n(289),q=n(134),E=n(83),H=E.a({email:E.b("Enter your email").email("Enter a valid email").required("Email is required"),password:E.b("Enter your password").min(6,"Password should be of minimum 6 characters length").required("Password is required")}),N=Object(k.a)((function(e){return{textField:{marginRight:e.spacing(3)},buttonBlock:{marginTop:e.spacing(2)}}})),P=[{path:d,Component:function(){var e=N(),t=Object(q.a)({initialValues:{email:"",password:""},validationSchema:H,onSubmit:function(e){console.log(e)}}),n=function(){var e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.a)(m,t.values.email,t.values.password);case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.e)(m,t.values.email,t.values.password);case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(B.a,{children:Object(w.jsx)(v.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justifyContent:"center",children:Object(w.jsxs)(v.a,{style:{width:600},container:!0,alignItems:"center",justifyContent:"center",direction:"column",children:[Object(w.jsx)(I.a,{children:Object(w.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(w.jsx)(S.a,{className:e.textField,id:"email",name:"email",label:"Email",value:t.values.email,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(w.jsx)(S.a,{id:"password",name:"password",label:"Password",type:"password",value:t.values.password,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password})]})}),Object(w.jsxs)(I.a,{className:e.buttonBlock,children:[Object(w.jsx)(g.a,{color:"primary",type:"submit",onClick:a,children:"Login"}),Object(w.jsx)(g.a,{color:"secondary",type:"submit",onClick:n,children:"Register"})]})]})})})}}],J=[{path:u,Component:function(){return Object(w.jsx)("div",{children:"Home"})}}],Y=n(80),z=function(){var e=Object(Y.a)(m);return Object(i.a)(e,1)[0]?Object(w.jsxs)(C.d,{children:[J.map((function(e){var t=e.path,n=e.Component;return Object(w.jsx)(C.b,{path:t,component:n,exact:!0},t)})),Object(w.jsx)(C.a,{to:u})]}):Object(w.jsxs)(C.d,{children:[P.map((function(e){var t=e.path,n=e.Component;return Object(w.jsx)(C.b,{path:t,component:n,exact:!0},t)})),Object(w.jsx)(C.a,{to:d})]})},L=function(){return Object(w.jsx)(B.a,{children:Object(w.jsx)(v.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justifyContent:"center",children:Object(w.jsx)(v.a,{container:!0,alignItems:"center",direction:"column",children:Object(w.jsxs)("div",{className:"lds-spinner",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]})})})})};var M=function(){var e=Object(Y.a)(m),t=Object(i.a)(e,3),n=(t[0],t[1]);return t[2],n?Object(w.jsx)(L,{}):Object(w.jsxs)(f.a,{basename:"/react-login",children:[Object(w.jsx)(y,{}),Object(w.jsx)(z,{})]})};s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.5ae3dc3b.chunk.js.map