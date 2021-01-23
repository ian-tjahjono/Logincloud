(this["webpackJsonpappointment-login-app"]=this["webpackJsonpappointment-login-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),i=n.n(o),r=n(18),s=n.n(r),a=(n(50),n(29),n(51),n(19)),j=n(6),l=n(12),d=n(15),b=n.n(d),h=n(88),O=n(82),u=n(87),x=n(83),p=n(84),g=n(86);var f=function(e){var t=Object(j.f)(),n=Object(o.useState)([]),i=Object(l.a)(n,2),r=i[0],s=i[1],a=Object(o.useState)(0),d=Object(l.a)(a,2),f=d[0],m=d[1];Object(o.useEffect)((function(){b.a.post("/login/home",{nric:e.nric}).then((function(e){s(e.data)})).catch((function(e){console.log(e.response)}))}),[f]);var v=Object(o.useState)(""),C=Object(l.a)(v,2),y=C[0],k=C[1],S=Object(o.useState)(""),M=Object(l.a)(S,2),L=M[0],A=M[1],P=Object(o.useState)(""),I=Object(l.a)(P,2),T=I[0],w=I[1],N=Object(o.useState)(""),D=Object(l.a)(N,2),K=D[0],B=D[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:" Covid19 Appointment Management System"}),Object(c.jsx)(O.a,{className:"float-right",variant:"danger",onClick:function(){t.push("/")},children:"Logout"}),Object(c.jsxs)(u.a,{defaultActiveKey:"booking",children:[Object(c.jsxs)(x.a,{eventKey:"booking",title:"View Bookings",children:[Object(c.jsxs)("h3",{children:["List of Booking: ",e.name]}),Object(c.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,variant:"=outlined-dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Category"}),Object(c.jsx)("th",{children:"Location"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Time"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:r.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.category}),Object(c.jsx)("td",{children:e.location}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.time}),Object(c.jsx)("td",{children:Object(c.jsx)(O.a,{onClick:function(e){return function(e){var t=e.currentTarget;b.a.delete("/login/home/"+t.id).then((function(e){204===e.status?m(f+1):alert("can't delete")})).catch((function(e){console.log(e.response)}))}(e)},id:e.id,variant:"danger",children:"Delete"})})]},e.id)}))})]})]}),Object(c.jsxs)(x.a,{eventKey:"addbooking",title:"Book Appointment",children:[Object(c.jsx)("br",{}),Object(c.jsxs)(h.a,{className:"bg-light mx-auto",style:{width:"40rem"},children:[Object(c.jsx)(h.a.Header,{children:"Add Booking"}),Object(c.jsxs)(g.a,{onSubmit:function(t){return function(t){t.preventDefault(),b.a.post("/login/home/booking",{name:e.name,nric:e.nric,category:y,location:L,date:T,time:K}).then((function(e){alert(JSON.stringify(e.data)),m(f+1)})).catch((function(e){console.log(e.response)}))}(t)},children:[Object(c.jsxs)(g.a.Group,{controlId:"category",children:[Object(c.jsx)(g.a.Label,{children:"Category"}),Object(c.jsxs)(g.a.Control,{as:"select",value:y,onChange:function(e){return k(e.target.value)},children:[Object(c.jsx)("option",{children:"Choose..."}),Object(c.jsx)("option",{children:"Masks"}),Object(c.jsx)("option",{children:"Token"}),Object(c.jsx)("option",{children:"Vaccination"})]})]}),Object(c.jsxs)(g.a.Group,{controlId:"location",children:[Object(c.jsx)(g.a.Label,{children:"Location"}),Object(c.jsxs)(g.a.Control,{as:"select",value:L,onChange:function(e){return A(e.target.value)},children:[Object(c.jsx)("option",{children:"Choose..."}),Object(c.jsx)("option",{children:"Jurong"}),Object(c.jsx)("option",{children:"Changi"}),Object(c.jsx)("option",{children:"Punggol"})]})]}),Object(c.jsxs)(g.a.Group,{controlId:"date",children:[Object(c.jsx)(g.a.Label,{children:"Date"}),Object(c.jsxs)(g.a.Control,{as:"select",value:T,onChange:function(e){return w(e.target.value)},children:[Object(c.jsx)("option",{children:"Choose..."}),Object(c.jsx)("option",{children:"25/01/2021"}),Object(c.jsx)("option",{children:"26/01/2021"}),Object(c.jsx)("option",{children:"27/01/2021"}),Object(c.jsx)("option",{children:"28/01/2021"}),Object(c.jsx)("option",{children:"29/01/2021"}),Object(c.jsx)("option",{children:"30/01/2021"}),Object(c.jsx)("option",{children:"31/01/2021"})]})]}),Object(c.jsxs)(g.a.Group,{controlId:"time",children:[Object(c.jsx)(g.a.Label,{children:"Time"}),Object(c.jsxs)(g.a.Control,{as:"select",value:K,onChange:function(e){return B(e.target.value)},children:[Object(c.jsx)("option",{children:"Choose..."}),Object(c.jsx)("option",{children:"10AM"}),Object(c.jsx)("option",{children:"11AM"}),Object(c.jsx)("option",{children:"12PM"}),Object(c.jsx)("option",{children:"1PM"}),Object(c.jsx)("option",{children:"2PM"}),Object(c.jsx)("option",{children:"3PM"}),Object(c.jsx)("option",{children:"4PM"}),Object(c.jsx)("option",{children:"5PM"}),Object(c.jsx)("option",{children:"6PM"})]})]}),Object(c.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})]})]})]})]})};var m=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(j.g)();return Object(o.useEffect)((function(){b.a.post("/login/user",{nric:r.state.nric}).then((function(e){i(e.data[0].name)})).catch((function(e){console.log(e.response),alert(JSON.stringify(e.response.data))}))})),Object(c.jsx)(h.a,{children:Object(c.jsx)(f,{name:n,nric:r.state.nric})})},v=n(85);var C=function(){return Object(c.jsx)(h.a,{className:"cardAnnouncement",children:Object(c.jsxs)(u.a,{defaultActiveKey:"mask",children:[Object(c.jsxs)(x.a,{eventKey:"mask",title:"Mask",children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Mask Announcements"})]}),Object(c.jsxs)(x.a,{eventKey:"token",title:"TT Token",children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Token Announcements"})]}),Object(c.jsxs)(x.a,{eventKey:"vaccine",title:"Vaccine",children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Vaccine Announcements"})]})]})})};var y=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(""),s=Object(l.a)(r,2),a=s[0],d=s[1],u=Object(j.f)();return Object(c.jsxs)(h.a,{className:"cardLogin",children:[Object(c.jsx)("h2",{children:"Login"}),Object(c.jsxs)(g.a,{onSubmit:function(e){return function(e){e.preventDefault(),b.a.post("/login",{nric:n,password:a}).then((function(e){u.push("/home",{nric:n})})).catch((function(e){console.log(e.response),404===e.response.status&&alert("User not found!"),401===e.response.status&&alert("Incorrect Password!")}))}(e)},children:[Object(c.jsx)(g.a.Group,{controlId:"nric",className:"text-align-left",children:Object(c.jsx)(g.a.Control,{type:"text",value:n,placeholder:"Singpass ID",onChange:function(e){return i(e.target.value)},required:!0})}),Object(c.jsx)(g.a.Group,{controlId:"password",children:Object(c.jsx)(g.a.Control,{type:"password",value:a,placeholder:"Password",onChange:function(e){return d(e.target.value)},required:!0})}),Object(c.jsx)(O.a,{variant:"primary",type:"submit",children:"Login"})]})]})};var k=function(){return Object(c.jsxs)(v.a,{className:"carddeck",children:[Object(c.jsx)(C,{}),Object(c.jsx)(y,{})]})};var S=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(a.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/home",children:Object(c.jsx)(m,{})}),Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(k,{})})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),M()}},[[80,1,2]]]);
//# sourceMappingURL=main.450f3045.chunk.js.map