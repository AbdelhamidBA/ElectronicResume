(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(10),i=c.n(a),s=c(4),l=(c(37),c(38),c.p+"static/media/userpic1.a4ceb612.jpg"),o=c(7),d=c.n(o),j=c(0),u=function(){return Object(j.jsxs)("div",{className:"credentials",children:[Object(j.jsx)("i",{className:"fas fa-times fa-lg",id:"closeInfo"}),Object(j.jsx)("div",{id:"picture",children:Object(j.jsx)("img",{src:l,alt:"",id:"userpic"})}),Object(j.jsx)("p",{id:"username",children:"Abdelhamid Ben Abdelfettah"}),Object(j.jsx)("p",{id:"speciality",children:"Software Engineer"}),Object(j.jsx)("p",{id:"currentjob",children:"Game Developer"})]})},b=function(e){var t=e.languages.languages.map((function(e,t){return Object(j.jsxs)("div",{className:"circular-progress",children:[Object(j.jsxs)("div",{className:"percent",children:[Object(j.jsxs)("svg",{children:[Object(j.jsx)("circle",{id:"0",cx:"30",cy:"30",r:"30"}),Object(j.jsx)("circle",{id:"70",cx:"30",cy:"30",r:"30"})]}),Object(j.jsx)("div",{className:"percent-number",children:Object(j.jsxs)("h2",{id:"perc-val",children:[e.level,"%"]})})]}),Object(j.jsx)("h2",{id:"circle-title",children:e.language})]},t)}));return Object(j.jsxs)("div",{className:"p-sec",id:"languages-data",children:[Object(j.jsx)("h3",{id:"title",children:"Languages"}),Object(j.jsx)("div",{id:"languages",children:t})]})},p=function(e){var t=e.experties.experties.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{className:"experties-info",children:[Object(j.jsx)("p",{children:e.title}),Object(j.jsxs)("p",{id:"exp-percentage",children:[e.level,"%"]})]}),Object(j.jsx)("span",{className:"bar",children:Object(j.jsx)("span",{className:"experties-bar",id:e.level})})]},t)}));return Object(j.jsxs)("div",{className:"p-sec",id:"experties-data",children:[Object(j.jsx)("h3",{id:"title",children:"Experties"}),Object(j.jsx)("div",{id:"experties",children:Object(j.jsx)("ul",{children:t})})]})},f=function(e){var t=e.knowledges.knowledges.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-check fa-sm"}),e]},t)}));return Object(j.jsxs)("div",{className:"p-sec",id:"knowledge-data",children:[Object(j.jsx)("h3",{id:"title",children:"Knowledge"}),Object(j.jsx)("div",{id:"knowledge",children:Object(j.jsx)("ul",{children:t})})]})},h=function(e){var t=e.link;return Object(j.jsx)("div",{className:"p-sec",id:"download-cv",children:Object(j.jsx)("span",{id:"cv-download",children:Object(j.jsxs)("a",{href:t.cv_link,children:["DOWNLOAD RESUME ",Object(j.jsx)("i",{className:"fas fa-download"})]},"0")})})},O=function(){return Object(j.jsx)("div",{className:"socials",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/abdelhamid-ben-abdelfettah-1a130b128/",children:Object(j.jsx)("i",{className:"fab fa-linkedin fa-lg"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/AbdelhamidBA",children:Object(j.jsx)("i",{className:"fab fa-github-square fa-lg"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.facebook.com/AbdelhamidBA0218/",children:Object(j.jsx)("i",{className:"fab fa-facebook-square fa-lg"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://twitter.com/AbdelhamidBA02",children:Object(j.jsx)("i",{className:"fab fa-twitter-square fa-lg"})})})]})})},x=function(e){var t=e.general_info;return Object(j.jsxs)("div",{className:"personal-info",children:[Object(j.jsx)(b,{languages:t.data[0]}),Object(j.jsx)(p,{experties:t.data[0]}),Object(j.jsx)(f,{knowledges:t.data[0]}),Object(j.jsx)(h,{link:t.data[0]})]})},g=c(5),v=c.n(g),m=c(8),y="GET_GENERAL_INFO",N="GENERAL_INFO_ERROR",w="GET_EXPERIENCE",E="EXPERIENCE_ERROR",k="GET_EDUCATION",_="EDUCATION_ERROR",R="GET_CERTIFICATE",T="CERTIFICATE_ERROR",A="GET_PROJECT",C="PROJECT_ERROR",I=c(2),L=c.n(I),q=function(e){var t=e.getGeneralInfo,c=e.general_info,r=(e.error,e.loading);return Object(n.useEffect)((function(){t()}),[]),Object(n.useEffect)((function(){L()(document).ready((function(){L()("circle").each((function(){var e=this.id;0==e?L()(this).css("stroke-dashoffset","0"):L()(this).css("stroke-dashoffset","calc(190 - (190 * "+e+") / 100)")})),L()("#experties ul li").each((function(){var e=L()(this).children(".experties-info"),t=L()(this).children(".bar").children(".experties-bar"),c=e.children("#exp-percentage").html();t.animate({width:c},2500)})),L()("[id^=viewimg]").on("click",(function(){console.log("HELOOLLOLO");var e=L()(this).parent().parent().children("#projimg").attr("src"),t=L()(".img-previewer");t.css("display","flex"),L()("#imgprev").attr("src",e),L()("#closePreviewer").on("click",(function(){t.css("display","none")}))})),L()("#toggleinfo").on("click",(function(){L()(".generalinfo").css("display","flex"),L()(".generalinfo").animate({left:"0"},1e3),L()(".screen-cover").css("display","block"),L()(".screen-cover").animate({opacity:"1"},1e3)})),L()("#closeInfo").on("click",(function(){L()(".screen-cover").animate({opacity:"0"},1e3,(function(){L()(".screen-cover").css("display","none")})),L()(".generalinfo").animate({left:"-290px"},1e3,(function(){L()(".generalinfo").css("display","none")}))}))}))})),0==r&&c!={}?Object(j.jsxs)("div",{className:"generalinfo",children:[Object(j.jsx)(u,{}),Object(j.jsx)(x,{general_info:c}),Object(j.jsx)(O,{})]}):Object(j.jsx)("div",{})};q.defaultProps={general_info:{}};var G=Object(s.b)((function(e){return{general_info:e.infoReducer.general_info,loading:e.infoReducer.loading,error:e.infoReducer.error}}),{getGeneralInfo:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/owner/owner");case 3:c=e.sent,t({type:y,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:N,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(q),P=c(3),S={certificate:{},error:{},loading:!0},D=Object(s.b)((function(e){return{certificate:e.certificate.certificate,loading:e.certificate.loading,error:e.certificate.error}}),{getCertificate:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/certificate/certificate");case 3:c=e.sent,t({type:R,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:T,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getCertificate,c=e.certificate,r=e.loading;e.error;Object(n.useEffect)((function(){t()}),[]);var a="";return!1===r&&c!=={}&&(a=c.data.map((function(e,t){return Object(j.jsx)("div",{className:"certificat",children:Object(j.jsx)("h3",{children:e.certificate_title})},t)}))),Object(j.jsxs)("div",{className:"cv-section",id:"certificat-info",children:[Object(j.jsx)("h3",{children:"Trainings & Certificates"}),Object(j.jsx)("div",{id:"certificat-section",children:a})]})})),F=c(11),M=c(26),B=c(25),J=function(){var e=Object(n.useState)({name:"",email:"",subject:""}),t=Object(M.a)(e,2),c=t[0],r=t[1],a=function(e){r(Object(P.a)(Object(P.a)({},c),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"cv-section",id:"contactform",children:[Object(j.jsx)("h3",{children:"Get in Touch"}),Object(j.jsxs)("div",{id:"contact-section",children:[Object(j.jsxs)("div",{className:"contact-details",children:[Object(j.jsxs)("div",{id:"contact-info",children:[Object(j.jsx)("h3",{children:"Contact Info"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-map-marker-alt fa-lg"})," Rue Okba ibnou Nafaa 5080, Teboulba, Monastir"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-envelope fa-lg"})," benabdelfettah.abdelhamid@gmail.com"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-phone fa-lg"})," +21626922402"]})]})]}),Object(j.jsx)("iframe",{id:"googlemap",loading:"lazy",allowfullscreen:!0,src:"https://www.google.com/maps/embed/v1/place?q=35.63842981805207, 10.973676669602625&key=AIzaSyAgVKHOvTy74eZKWrVXm4ddL3nWvMquBYM"})]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("h3",{children:"Contact Form"}),Object(j.jsxs)("form",{name:"contact",onSubmit:function(e){return function(e){e.preventDefault(),B.a.sendForm("service_ffmjrrh","template_iq3dd4j",e.target,"user_jwnUJq8tzsZXHYVqeCnyT").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}(e)},children:[Object(j.jsx)("input",{type:"text",name:"name",onChange:function(e){return a(e)},value:c.name,placeholder:"Your Name",required:!0}),Object(j.jsx)("input",{type:"email",name:"email",onChange:function(e){return a(e)},value:c.email,placeholder:"Your Email",required:!0}),Object(j.jsx)("textarea",{name:"subject",onChange:function(e){return a(e)},value:c.subject,placeholder:"Subject"}),Object(j.jsx)("input",{type:"submit",name:"submit",className:"button",value:"SEND EMAIL"})]})]})]})]})},z=Object(s.b)((function(e){return{education:e.education.education,loading:e.education.loading,error:e.education.error}}),{getEducation:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/education/education");case 3:c=e.sent,t({type:k,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:_,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getEducation,c=e.education,r=e.loading;e.error;Object(n.useEffect)((function(){t()}),[]);var a="";return r||c=={}||(a=c.data.map((function(e,t){return Object(j.jsxs)("div",{className:"education",children:[Object(j.jsx)("h3",{children:e.degree}),Object(j.jsx)("p",{id:"university",children:e.university}),Object(j.jsxs)("p",{id:"edu-date",children:[e.start_year," - ",e.end_year]})]},t)}))),Object(j.jsxs)("div",{className:"cv-section",id:"education-info",children:[Object(j.jsx)("h3",{children:"Education"}),Object(j.jsx)("div",{id:"edu-section",children:a})]})})),H=Object(s.b)((function(e){return{experience:e.experience.experience,loading:e.experience.loading,error:e.experience.error}}),{getExperience:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/experience/experience");case 3:c=e.sent,t({type:w,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:E,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getExperience,c=e.experience,r=e.loading;e.error;Object(n.useEffect)((function(){t()}),[]);var a="";return r||c=={}||(a=c.data.map((function(e,t){return Object(j.jsxs)("div",{className:"experience",children:[Object(j.jsx)("h3",{children:e.experience_title}),Object(j.jsx)("p",{id:"workplace",children:e.experience_role}),Object(j.jsxs)("p",{id:"exp-date",children:[e.start_period," - ",e.end_period]})]},t)}))),Object(j.jsxs)("div",{className:"cv-section",id:"experience-info",children:[Object(j.jsx)("h3",{children:"Experiences"}),Object(j.jsx)("div",{id:"exp-section",children:a})]})})),U=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"quote",children:[Object(j.jsx)("h2",{children:"\u201cEverybody should learn to program a computer, because it teaches you how to think.\u201d"}),Object(j.jsx)("p",{children:"Steve Jobs"})]})})},W=Object(s.b)((function(e){return{project:e.project.project,loading:e.project.loading,error:e.project.error}}),{getProject:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/project/project");case 3:c=e.sent,t({type:A,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:C,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getProject,c=e.project,r=e.loading;e.error;Object(n.useEffect)((function(){t(),L()("[id^=viewimg]").on("click",(function(){console.log("HELOOLLOLO");var e=L()(this).parent().parent().children("#projimg").attr("src"),t=L()(".img-previewer");t.css("display","flex"),L()("#imgprev").attr("src",e),L()("#closePreviewer").on("click",(function(){t.css("display","none")}))}))}),[c]);var a="";return!1===r&&c!=={}&&(a=c.data.map((function(e,t){return Object(j.jsxs)("div",{className:"image",children:[Object(j.jsx)("img",{src:"uploads/".concat(e.project_img),id:"projimg"}),Object(j.jsxs)("div",{className:"image-info",children:[Object(j.jsx)("i",{className:"fas fa-expand fa-lg zlatan",id:"viewimg"}),Object(j.jsx)("p",{children:e.project_desc})]})]},t)}))),Object(j.jsxs)("div",{className:"cv-section",id:"gallery-info",children:[Object(j.jsx)("h3",{children:"Projects"}),Object(j.jsx)("div",{id:"gallery-section",children:a})]})})),X=function(){return Object(j.jsxs)("div",{className:"cv-info",children:[Object(j.jsx)("div",{className:"screen-cover"}),Object(j.jsx)("div",{className:"menubar",children:Object(j.jsx)("i",{className:"fas fa-ellipsis-v",id:"toggleinfo"})}),Object(j.jsx)(U,{}),Object(j.jsx)(z,{}),Object(j.jsx)(H,{}),Object(j.jsx)(D,{}),Object(j.jsx)(W,{}),Object(j.jsx)(J,{}),Object(j.jsx)("div",{className:"copyright",children:Object(j.jsx)("p",{children:"\xa9 2021 - 2021 Abdelhamid - All Rights Reserved."})})]})},Y=c(9),K=c(23),V=c(24),Z={general_info:{},error:{},loading:!0},Q={education:{},error:{},loading:!0},$={experience:{},error:{},loading:!0},ee={project:{},error:{},loading:!0},te=Object(Y.combineReducers)({infoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case y:return Object(P.a)(Object(P.a)({},e),{},{general_info:n,loading:!1});case N:return Object(P.a)(Object(P.a)({},e),{},{error:n,loading:!0});default:return e}},education:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case k:return Object(P.a)(Object(P.a)({},e),{},{education:n,loading:!1});case _:return Object(P.a)(Object(P.a)({},e),{},{error:n,loading:!0});default:return e}},experience:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case w:return Object(P.a)(Object(P.a)({},e),{},{experience:n,loading:!1});case E:return Object(P.a)(Object(P.a)({},e),{},{error:n,loading:!0});default:return e}},certificate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case R:return Object(P.a)(Object(P.a)({},e),{},{certificate:n,loading:!1});case T:return Object(P.a)(Object(P.a)({},e),{},{error:n,loading:!0});default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case A:return Object(P.a)(Object(P.a)({},e),{},{project:n,loading:!1});case C:return Object(P.a)(Object(P.a)({},e),{},{error:n,loading:!0});default:return e}}}),ce=[V.a],ne=Object(Y.createStore)(te,{},Object(K.composeWithDevTools)(Y.applyMiddleware.apply(void 0,ce))),re=function(){return Object(j.jsx)(s.a,{store:ne,children:Object(j.jsx)(n.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"mainsection",children:[Object(j.jsx)(G,{}),Object(j.jsx)(X,{})]}),Object(j.jsxs)("div",{className:"img-previewer",children:[Object(j.jsx)("i",{className:"fas fa-times fa-lg",id:"closePreviewer"}),Object(j.jsx)("img",{id:"imgprev",src:"./images/header1.jpg"})]})]})})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.7f803ec6.chunk.js.map