(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{45:function(e,t,i){},56:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),n=i(19),l=i.n(n),s=i(23),r=(i(45),i(66)),o=i(68),j=i(12),d=i(1),h=function(e){return Object(d.jsxs)(r.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(d.jsx)(j.b,{className:"navbar-brand",to:"/",children:"CV Application"}),Object(d.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(r.a.Collapse,{transition:"false",id:"basic-navbar-nav",children:Object(d.jsxs)(o.a,{className:"mr-auto",children:[Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/personal-info",children:"Home"}),Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/working-experience",children:"Working Exprerience"}),Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/education",children:"Education"}),Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/skills",children:"Skills"}),Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/honors-awards",children:"Honors & Awards"}),Object(d.jsx)(j.b,{className:"nav-item nav-link",to:"/certificate",children:"Certificates"}),Object(d.jsx)(j.c,{className:"nav-item nav-link",to:"/preview",children:"Preview"})]})})]})},E=i(7),b=i(15),m=i(14),I=i(67),x=i(62),p=i(40),u=function(e){var t=Array.isArray(e.defaultValue);return Object(d.jsx)(I.a,{children:e.fieldList.map((function(i){return Object(d.jsx)(I.a.Group,{as:x.a,controlId:i.id,className:"mt-2",children:function(){switch(i.type){case"select":return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(I.a.Control,{as:i.type,size:"sm",name:i.name,placeholder:i.placeholder,onChange:e.onChange,custom:!0,defaultValue:t?e.defaultValue[e.index][i.name]:e.defaultValue[i.name],children:i.options.map((function(e){return Object(d.jsx)("option",{children:e},i.id+e)}))})});case"file":return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I.a.Label,{className:"text-justify",column:!0,sm:2,children:i.placeholder}),Object(d.jsx)(p.a,{sm:10,children:Object(d.jsx)(I.a.File,{size:"sm",name:i.name,type:i.type,label:i.placeholder,onChange:e.onUpload,custom:!0})})]});case"textarea":return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I.a.Label,{column:!0,sm:2,children:i.placeholder}),Object(d.jsx)(p.a,{sm:10,children:Object(d.jsx)(I.a.Control,{size:"sm",as:i.type,name:i.name,placeholder:i.placeholder,onChange:e.onChange,rows:3,defaultValue:t?e.defaultValue[e.index][i.name]:e.defaultValue[i.name]})})]});case"date":default:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I.a.Label,{column:!0,sm:2,children:i.placeholder}),Object(d.jsx)(p.a,{sm:10,children:Object(d.jsx)(I.a.Control,{size:"sm",type:i.type,name:i.name,placeholder:i.placeholder,onChange:e.onChange,defaultValue:t?e.defaultValue[e.index][i.name]:e.defaultValue[i.name]})})]})}}()},i.id)}))})},O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{className:"mt-3",children:e.title}),Object(d.jsx)(u,{onChange:function(t){e.setPersonalInfo(Object(m.a)(Object(m.a)({},e.personalInfo),{},Object(b.a)({},t.target.name,t.target.value)))},onUpload:function(t){e.setPersonalInfo(Object(m.a)(Object(m.a)({},e.personalInfo),{},Object(b.a)({},t.target.name,URL.createObjectURL(t.target.files[0]))))},fieldList:e.fieldList,defaultValue:e.personalInfo})]})},R=i(20),C=i(63),k=i(64),S=i(69),g=function(e){var t=function(t,i){var a=Object(R.a)(e.sectionData);"skill"===t.target.name?a[i].skill=t.target.value:a[i].skillLevel=t.target.value,e.setSectionData(a)},i=function(t){e.setSectionData(Object(R.a)(e.sectionData).concat({skill:"",skillLevel:0,id:Object(S.a)()}))},a=function(t){e.setSectionData(Object(R.a)(e.sectionData).slice(0,e.sectionData.length-1))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{className:"mt-3",children:e.title}),e.sectionData.map((function(c,n){return function(c,n){return Object(d.jsx)(C.a,{children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(p.a,{xs:"12",sm:"12",md:"12",lg:"8",children:Object(d.jsxs)(I.a,{inline:!0,className:"mb-3",children:[Object(d.jsx)(I.a.Label,{className:"my-1 mr-2",children:"Skill"}),Object(d.jsx)(I.a.Control,{className:"my-1 mr-sm-2",d:!0,type:"text",name:"skill",placeholder:"Enter your skill here",onChange:function(e){return t(e,n)}}),Object(d.jsx)(I.a.Label,{className:"my-1 mr-2",htmlFor:"inlineFormCustomSelectPref",children:"Skill Level"}),Object(d.jsxs)(I.a.Control,{onChange:function(e){return t(e,n)},as:"select",name:"skillLevel",className:"my-1 mr-sm-2",id:"inlineFormCustomSelectPref",custom:!0,children:[Object(d.jsx)("option",{value:"0",children:"Choose..."}),Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"6",children:"6"}),Object(d.jsx)("option",{value:"7",children:"7"}),Object(d.jsx)("option",{value:"8",children:"8"}),Object(d.jsx)("option",{value:"9",children:"9"}),Object(d.jsx)("option",{value:"10",children:"10"})]})]})}),Object(d.jsx)(p.a,{xs:12,sm:12,md:12,lg:2,children:Object(d.jsxs)(k.a,{onClick:i,className:"mr-3  mb-2",variant:"primary",block:!0,children:[" ",Object(d.jsx)("i",{className:"fas fa-plus mr-1"}),"New"]})}),Object(d.jsx)(p.a,{xs:12,sm:12,md:12,lg:2,children:Object(d.jsxs)(k.a,{onClick:a,disabled:1===e.sectionData.length,variant:"danger",block:!0,children:[" ",Object(d.jsx)("i",{className:"fas fa-trash-alt mr-1"}),"Delete"]})})]})},c.id)}(c,n)}))]})},J=function(e){return Object(d.jsx)(k.a,{onClick:e.handleDelete,variant:"warning",block:!0,children:"Delete"})},v=function(e){return Object(d.jsx)(k.a,{className:"my-3",onClick:e.handleAdd,variant:"primary",block:!0,children:"Add"})},Q=function(e){var t=function(t){window.confirm("Are you sure you wish to delete this item")&&e.setSectionData(e.sectionData.slice(0,e.sectionData.length-1))};return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("h4",{className:"mt-3",children:e.title}),0!==e.sectionData.length&&e.sectionData.map((function(i,a){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(u,{onUpload:null,onChange:function(t){return function(t,i){var a=Object(R.a)(e.sectionData);a[t]=Object(m.a)(Object(m.a)({},e.sectionData[t]),{},Object(b.a)({},i.target.name,i.target.value)),e.setSectionData(a)}(a,t)},defaultValue:e.sectionData,fieldList:e.fieldList,index:a}),Object(d.jsx)(J,{handleDelete:t})]},a)})),Object(d.jsx)(v,{handleAdd:function(t){e.setSectionData(e.sectionData.concat(e.getSectionField()))}})]})},y=(i(56),i(65)),f=function(e){var t=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getFullYear())};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"preview__header",children:[Object(d.jsx)("div",{className:"preview__header-1",children:""===e.personalInfo.file?Object(d.jsx)(y.a,{className:"preview__header-avatar",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAAISCAMAAACu49aNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQyQzNERDE0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQyQzNERDI0QTgzMTFFMUI0N0FDQ0U5NDgzQTI2NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDJDM0RDRjRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDJDM0REMDRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmY2mEcAAAGAUExURevr7Jydn5ma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"}):Object(d.jsx)(y.a,{className:"preview__header-avatar",src:e.personalInfo.file,rounded:!0})}),Object(d.jsx)("div",{className:"preview__header-2 bg-light",children:Object(d.jsx)("p",{children:e.personalInfo.description})})]}),Object(d.jsx)("div",{className:"preview__header-name",children:e.personalInfo.firstName+" "+e.personalInfo.lastName}),Object(d.jsxs)("div",{className:"preview__body",children:[Object(d.jsxs)("div",{className:"preview__body-1 bg-light",children:[Object(d.jsxs)("div",{className:"preview__body-phone",children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Phone:"})}),Object(d.jsx)("p",{children:e.personalInfo.phoneNumber})]}),Object(d.jsxs)("div",{className:"preview__body-email",children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Email:"})}),Object(d.jsx)("p",{children:e.personalInfo.email})]})]}),Object(d.jsxs)("div",{className:"preview__body-2 ",children:[Object(d.jsxs)("div",{className:"preview__body-experience",children:[Object(d.jsx)("div",{className:"preview__body-experienceText",children:"Experience"}),0!==e.experience.length&&Object(d.jsx)("ul",{children:e.experience.map((function(e,i){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{className:"preview__body-experience-date",children:[Object(d.jsx)("span",{children:"From "+t(e.startDate)}),Object(d.jsx)("span",{children:" To "+t(e.endDate)}),Object(d.jsx)("p",{children:e.city})]}),Object(d.jsxs)("div",{className:"preview__body-experience-title",children:[Object(d.jsx)("span",{children:e.position+" - "}),Object(d.jsx)("span",{children:e.company}),Object(d.jsx)("p",{children:e.summary})]})]},i)}))})]}),Object(d.jsxs)("div",{className:"preview__body-education",children:[Object(d.jsx)("div",{className:"preview__body-educationText",children:"Education"}),0!==e.education.length&&Object(d.jsx)("ul",{children:e.education.map((function(e,i){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{className:"preview__body-education-date",children:[Object(d.jsx)("span",{children:"From "+t(e.startDate)}),Object(d.jsx)("span",{children:" To "+t(e.endDate)})]}),Object(d.jsxs)("div",{className:"preview__body-education-summary",children:[Object(d.jsx)("span",{children:e.degree+" - "}),Object(d.jsx)("span",{children:e.subject}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.universityName+", "}),Object(d.jsx)("span",{children:e.city})]})]},i)}))})]})]})]}),Object(d.jsx)(k.a,{className:"my-3",onClick:e.handlePrint,variant:"success",block:!0,children:"Print to PDF"}),Object(d.jsx)(k.a,{className:"my-2",onClick:e.handleReset,variant:"danger",block:!0,children:"Reset"})]})},A=(i(57),i(58),[{id:Object(S.a)(),name:"firstName",type:"text",placeholder:"First Name"},{id:Object(S.a)(),name:"lastName",type:"text",placeholder:"Last Name"},{id:Object(S.a)(),name:"file",type:"file",placeholder:"Photo"},{id:Object(S.a)(),name:"address",type:"text",placeholder:"Address"},{id:Object(S.a)(),name:"phoneNumber",type:"text",placeholder:"Phone number"},{id:Object(S.a)(),name:"email",type:"email",placeholder:"Email"},{id:Object(S.a)(),name:"description",type:"textarea",placeholder:"Description"},{id:Object(S.a)(),name:"interests",type:"text",placeholder:"Interests"},{id:Object(S.a)(),name:"references",type:"text",placeholder:"References"}]),B=[{id:Object(S.a)(),name:"position",type:"text",placeholder:"Position"},{id:Object(S.a)(),name:"company",type:"text",placeholder:"Company"},{id:Object(S.a)(),name:"city",type:"text",placeholder:"City"},{id:Object(S.a)(),name:"startDate",type:"date",placeholder:"Start Date"},{id:Object(S.a)(),name:"endDate",type:"date",placeholder:"End Date"},{id:Object(S.a)(),name:"summary",type:"textarea",placeholder:"Summary"}],N=[{id:Object(S.a)(),name:"universityName",type:"text",placeholder:"University Name"},{id:Object(S.a)(),name:"city",type:"text",placeholder:"City"},{id:Object(S.a)(),name:"degree",type:"text",placeholder:"Degree"},{id:Object(S.a)(),name:"subject",type:"text",placeholder:"Subject"},{id:Object(S.a)(),name:"startDate",type:"date",placeholder:"Start Date"},{id:Object(S.a)(),name:"endDate",type:"date",placeholder:"End Date"}],D=function(e){return e.map((function(e){return e.name})).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},t,""))}),{})};var F=function(){var e=Object(a.useState)(D(A)),t=Object(s.a)(e,2),i=t[0],n=t[1],l=Object(a.useState)([D(B)]),r=Object(s.a)(l,2),o=r[0],j=r[1],b=Object(a.useState)([D(N)]),m=Object(s.a)(b,2),I=m[0],x=m[1],p=Object(a.useState)([{skill:"",skillLevel:0,id:Object(S.a)()}]),u=Object(s.a)(p,2),R=u[0],C=u[1];return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(h,{title:"My CV Application"}),Object(d.jsxs)("main",{className:"container",children:[" ",Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(E.d,{children:[Object(d.jsx)(E.b,{path:"/personal-info",children:Object(d.jsx)(O,{title:"Personal Information",fieldList:A,personalInfo:i,setPersonalInfo:n})}),Object(d.jsx)(E.b,{path:"/working-experience",children:Object(d.jsx)(Q,{title:"Experience",fieldList:B,sectionData:o,setSectionData:j,getSectionField:function(){return D(B)}})}),Object(d.jsx)(E.b,{path:"/education",children:Object(d.jsx)(Q,{title:"Education",fieldList:N,sectionData:I,setSectionData:x,getSectionField:function(){return D(N)}})}),Object(d.jsx)(E.b,{path:"/skills",children:Object(d.jsx)(g,{title:"Skills",sectionData:R,setSectionData:C})}),Object(d.jsx)(E.b,{path:"/preview",children:Object(d.jsx)(f,{personalInfo:i,experience:o,education:I,handlePrint:function(){console.log("print")},handleReset:function(){window.confirm("Are you sure you wish to reset all fields?")&&(Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""})),n(D(A)),j([D(B)]),x([D(N)]),C([{skill:"",skillLevel:0,id:Object(S.a)()}]))}})}),Object(d.jsx)(E.a,{from:"/",exact:!0,to:"/personal-info"})]})})]})]})};i(59);l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(F,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.917e9930.chunk.js.map