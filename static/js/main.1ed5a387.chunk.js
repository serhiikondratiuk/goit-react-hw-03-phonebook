(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={input:"ContactForm_input__1slBd",label:"ContactForm_label__2iVJy",wrapper:"ContactForm_wrapper__ky5DA",button:"ContactForm_button__3OpZD","btn-anim1":"ContactForm_btn-anim1__XOGUL","btn-anim2":"ContactForm_btn-anim2__s8cLD","btn-anim3":"ContactForm_btn-anim3__Kq44E","btn-anim4":"ContactForm_btn-anim4__1eum6"}},,function(t,e,n){t.exports={contact:"ContactList_contact__PqLkw",name:"ContactList_name__3Ffp2",number:"ContactList_number__35RMm",button:"ContactList_button__1-Dvq"}},,,,,function(t,e,n){t.exports={wrapper:"Filter_wrapper__2ohpC",input:"Filter_input__3lMhT",label:"Filter_label__BGSDS"}},function(t,e,n){t.exports={wrapper:"App_wrapper__3uXMA",title:"App_title__pHTHQ"}},,function(t,e,n){t.exports={section:"Section_section__1qTW_",title:"Section_title__KdHD-"}},,,,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(12),r=n.n(s),o=(n(20),n(14)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(11),p=n.n(m),d=n(0),h=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{className:p.a.section,children:[e&&Object(d.jsx)("h2",{className:p.a.title,children:e}),n]})},j=n(13),_=n(1),O=n.n(_),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("input",{className:O.a.input,type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(d.jsx)("label",{className:O.a.label,children:"Name"})]}),Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("input",{className:O.a.input,type:"tel",value:this.state.number,onChange:this.handleInputChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(d.jsx)("label",{className:O.a.label,children:"Number"})]}),Object(d.jsxs)("button",{className:O.a.button,type:"submit",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),"Add contact"]})]})}}]),n}(a.Component),C=f,x=n(3),v=n.n(x),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:v.a.contact,children:[Object(d.jsx)("span",{className:v.a.name,children:a}),Object(d.jsx)("span",{className:v.a.number,children:c}),Object(d.jsx)("button",{className:v.a.button,onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))})},N=n(8),w=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("div",{className:w.a.wrapper,children:[Object(d.jsx)("input",{className:w.a.input,type:"text",value:e,onChange:n,name:"filter"}),Object(d.jsx)("label",{className:w.a.label,children:"Find contacts by name"})]})},S=n(15),F=n(9),k=n.n(F),A=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n={name:e.name,number:e.number,id:Object(S.a)()};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(d.jsxs)("div",{className:k.a.wrapper,children:[Object(d.jsxs)(h,{children:[Object(d.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(d.jsx)(C,{onSubmit:this.addContact})]}),Object(d.jsxs)(h,{children:[Object(d.jsx)("h2",{className:k.a.title,children:"Contacts"}),Object(d.jsx)(y,{value:t,onChange:this.handleFilterChange}),Object(d.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),D=A;r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.1ed5a387.chunk.js.map