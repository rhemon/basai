(this.webpackJsonpbasai=this.webpackJsonpbasai||[]).push([[0],{36:function(e,a,t){e.exports=t(72)},41:function(e,a,t){},42:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},43:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),o=t.n(r),c=(t(41),t(42),t(43),t(3)),s=t(4),i=t(6),m=t(5),u=t(7),p=t(13),d=t(15),h=t(2),f=t(14),b=t(1),g=t.n(b),E=function(e){function a(e){var t;Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={email:"",password:"",errormsg:""},t.handleCredChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))};var n={headers:{"Content-Type":"application/json"}};return t.onSubmit=function(e){e.preventDefault(),console.log(t.state.email),console.log(t.state.password),g.a.post("/api/auth/login/",{username:t.state.email,password:t.state.password},n).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("isAuth","true"),t.setState({errormsg:""}),window.location.reload()})).catch((function(e){t.setState({errormsg:"Wrong credentials."})}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"===localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/profile"}):l.a.createElement("div",{className:"App-header"},l.a.createElement("h3",null," B A S A I "),l.a.createElement("form",{id:"home-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"email",id:"email",name:"email",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"password"},"Password:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"password",id:"password",name:"password",className:"form-control"})),l.a.createElement("button",{onClick:this.onSubmit,className:"primarybtn btn btn-primary form-control"},"Log In"),l.a.createElement("p",{className:"ca-text"},"No Account ? ",l.a.createElement("a",{href:"/signup"},"Sign Up")," ",l.a.createElement("br",null)," ",l.a.createElement("a",{href:"/forgot-pass"},"Forgot Password ?")),l.a.createElement("p",null,this.state.errormsg)))}}]),a}(n.Component),v=Object(f.b)(E),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={fname:"",lname:"",email:"",phone:"",password:"",password2:"",errormsg:"",token:"",isauth:!1,userid:""},t.handleCredChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){if(e.preventDefault(),t.state.password===t.state.password2){g.a.post("/api/auth/signup/",{username:t.state.email,email:t.state.email,phone:t.state.phone,first_name:t.state.fname,last_name:t.state.lname,password:t.state.password},{headers:{"Content-Type":"application/json"}}).then((function(e){t.setState({errormsg:""}),localStorage.setItem("token",e.data.token),localStorage.setItem("isAuth","true"),window.location.reload()})).catch((function(e){t.setState({errormsg:"User with email already exists"})}))}else t.setState({errormsg:"Passwords must match."})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"===localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/profile"}):l.a.createElement("div",{className:"App-header sign-up-page"},l.a.createElement("h3",null," B A S A I "),l.a.createElement("form",{id:"home-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"fname"},"First name:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"text",id:"fname",name:"fname",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"lname"},"Last name:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"text",id:"lname",name:"lname",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"phone"},"Phone:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"text",id:"phone",name:"phone",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"email",id:"email",name:"email",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"password"},"Password:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"password",id:"password",name:"password",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"password2"},"Confirm Password:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"password",id:"password2",name:"password2",className:"form-control"})),l.a.createElement("button",{onClick:this.onSubmit,className:"primarybtn form-control btn btn-primary"},"Sign Up"),l.a.createElement("p",{className:"ca-text"},"Already have account ? ",l.a.createElement("a",{href:"/"},"Log in")),l.a.createElement("p",null,this.state.errormsg)))}}]),a}(n.Component),y=Object(f.b)(j),C=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={edit:!1,fname:"Ridhwanul",lname:"Haque",phone:"07731752014",email:"rhemon19@gmail.com",cvname:"None uploaded yet.",cvchange:!1,cvFile:null,errormsg:"",disabled:"",cvUrl:""},t.toggleEditMode=function(e){e.preventDefault(),t.setState((function(e){return{edit:!0}}))},t.handleDetailChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.saveChangedDetail=function(e){if(e.preventDefault()," disabled"!==t.state.disabled&&(g.a.post("/api/auth/update/",{email:t.state.email,phone:t.state.phone,first_name:t.state.fname,last_name:t.state.lname,token:localStorage.getItem("token")},{headers:{"Content-Type":"application/json"}}).then((function(e){t.setState({edit:!1})})).catch((function(e){t.setState({errormsg:"Account with email exist"})})),t.state.cvchange)){var a=new FormData,n=t.state.cvFile;a.append("cvFile",n),a.append("token",localStorage.getItem("token")),g.a.post("/api/auth/cv/",a,{headers:{"Content-Type":"multipart/form-data"}})}},t.handleCVFileChange=function(e){var a=e.target.files[0].name.substring(e.target.files[0].name.length-4);console.log(a),".pdf"===a?t.setState({cvFile:e.target.files[0],cvchange:!0,cvname:e.target.files[0].name,disabled:"",cvUrl:""}):t.setState({errormsg:"File format for CV must be pdf.",disabled:" disabled"})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.a.get("/api/auth/user/?token="+localStorage.getItem("token")).then((function(a){e.setState({email:a.data.email,fname:a.data.first_name,lname:a.data.last_name,phone:a.data.phone})})).catch((function(e){console.log(e)})),g.a.get("/api/auth/cv/?token="+localStorage.getItem("token")).then((function(a){e.setState({cvname:a.data.cvFileName,cvUrl:a.data.cvFileUrl})}))}},{key:"render",value:function(){var e,a,t,n;return l.a.createElement("div",null,l.a.createElement("h1",null,"Your Details"),this.state.edit?l.a.createElement("form",{className:"user-detail"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"fname"},"First name:"),l.a.createElement("input",(e={onChange:this.handleCredChange,value:this.state.fname},Object(h.a)(e,"onChange",this.handleDetailChange),Object(h.a)(e,"type","text"),Object(h.a)(e,"id","fname"),Object(h.a)(e,"name","fname"),Object(h.a)(e,"className","form-control"),e))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"lname"},"Last name:"),l.a.createElement("input",(a={onChange:this.handleCredChange,value:this.state.lname},Object(h.a)(a,"onChange",this.handleDetailChange),Object(h.a)(a,"type","text"),Object(h.a)(a,"id","lname"),Object(h.a)(a,"name","lname"),Object(h.a)(a,"className","form-control"),a))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"phone"},"Phone:"),l.a.createElement("input",(t={onChange:this.handleCredChange,value:this.state.phone},Object(h.a)(t,"onChange",this.handleDetailChange),Object(h.a)(t,"type","text"),Object(h.a)(t,"id","phone"),Object(h.a)(t,"name","phone"),Object(h.a)(t,"className","form-control"),t))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",(n={onChange:this.handleCredChange,value:this.state.email},Object(h.a)(n,"onChange",this.handleDetailChange),Object(h.a)(n,"type","email"),Object(h.a)(n,"id","email"),Object(h.a)(n,"name","email"),Object(h.a)(n,"className","form-control"),n))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Last updated CV: "),l.a.createElement("p",null,"CV File: ",l.a.createElement("a",{href:this.state.cvUrl},this.state.cvname))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"cv"},"CV:"),l.a.createElement("input",{onChange:this.handleCVFileChange,type:"file",id:"cv",name:"cv",className:"form-control-file"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{onClick:this.saveChangedDetail,className:"primarybtn btn edit-ud"+this.state.disabled}," Save ")),l.a.createElement("p",null,this.state.errormsg)):l.a.createElement("div",{className:"contianer user-detail"},l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"First Name: ",this.state.fname)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Last Name: ",this.state.lname)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Email: ",this.state.email)),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Phone: ",this.state.phone)),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Last updated CV "),l.a.createElement("p",null,l.a.createElement("a",{href:this.state.cvUrl},this.state.cvname))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{onClick:this.toggleEditMode,className:"primarybtn btn btn-primary edit-ud"}," Edit ")))))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={jobs:[]},g.a.get("/api/job/user/?token="+localStorage.getItem("token")).then((function(e){t.setState({jobs:e.data.jobs})})),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"job-post-header"},l.a.createElement("div",{className:"float-left"},l.a.createElement("h3",null,"Jobs You Posted")),l.a.createElement("div",{className:"float-right"},l.a.createElement("a",{href:"/job/new",className:"btn btn-success"},"New Post")),l.a.createElement("div",{className:"clearfix"})),this.state.jobs.length>0?l.a.createElement("div",{className:"job-posts"},this.state.jobs.map((function(e){return l.a.createElement("div",{className:"joblist"},l.a.createElement("div",{className:"float-left ml-auto"},l.a.createElement("p",{className:"jobtitle"},e.title)),l.a.createElement("div",{className:"float-right jobbuttons"},l.a.createElement("a",{className:"primarybtn btn btn-primary",href:"/applicants/"+e.id},"Applicants")," \xa0",l.a.createElement("a",{className:"primarybtn btn btn-primary",href:"/job/edit/"+e.id},"Edit")),l.a.createElement("div",{className:"clearfix"}))}))):l.a.createElement("div",{className:"no-job-post"},l.a.createElement("p",null," You have no job posted. ")))}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).logOut=function(e){e.preventDefault();localStorage.getItem("token");g.a.get("/api/auth/logout/?token="+localStorage.getItem("token")).then((function(e){localStorage.setItem("token",""),localStorage.setItem("isAuth",""),window.location.reload()})).catch((function(e){console.log(e)}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"BASAI"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/jobs"},"Jobs")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/profile"},"Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"",onClick:this.logOut},"Log out")))))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(c.a)(this,a),t=Object(i.a)(this,Object(m.a)(a).call(this,e)),console.log(localStorage.getItem("isAuth")),console.log(localStorage.getItem("token")),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("br",null),l.a.createElement(C,null)),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(N,null)))))}}]),a}(n.Component),w=Object(f.b)(S),k=function(e){function a(e){var t;Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={title:"",company:"",description:"",annual_salary:"",unauthorized:!1};var n=t.props.match.params.id;return"undefined"!==typeof n&&g.a.get("/api/job/details/?id="+n+"&token="+localStorage.getItem("token")).then((function(e){t.setState({title:e.data.title,company:e.data.company,description:e.data.description,annual_salary:e.data.annual_salary,unauthorized:!e.data.writeauth})})),t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.submitJob=function(e){e.preventDefault(),"undefined"===typeof n?g.a.post("/api/job/new/",{title:t.state.title,description:t.state.description,company:t.state.company,annual_salary:t.state.annual_salary,token:localStorage.getItem("token")},{headers:{"Content-Type":"application/json"}}).then((function(e){window.location.href="/jobs"})).catch((function(e){console.log(e)})):g.a.post("/api/job/details/?id="+n,{title:t.state.title,description:t.state.description,company:t.state.company,annual_salary:t.state.annual_salary,token:localStorage.getItem("token")},{headers:{"Content-Type":"application/json"}}).then((function(e){window.location.href="/jobs"})).catch((function(e){console.log("Unauthorized attempt to change details")}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/"}):this.state.unauthorized?l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("h3",null," Page not found "))):l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("div",{class:"container"},l.a.createElement("br",null),l.a.createElement("h3",null,"Job Details"),l.a.createElement("form",{onSubmit:this.submitJob},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Job Title:"),l.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.title,id:"title",name:"title",className:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"company"},"Company:"),l.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.company,id:"company",name:"company",className:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"description"},"Job Description:"),l.a.createElement("textarea",{type:"text",onChange:this.handleChange,value:this.state.description,id:"description",name:"description",className:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"annual_salary"},"Approximate Annual Salary:"),l.a.createElement("input",{type:"number",onChange:this.handleChange,value:this.state.annual_salary,id:"annual_salary",name:"annual_salary",className:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"submit",value:"Save",className:"primarybtn btn btn-primary form-control"})))))}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={jobs:[]},g.a.get("/api/job/all/").then((function(e){t.setState({jobs:e.data.jobs})})),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/"}):l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},this.state.jobs.length>0?l.a.createElement("div",null,this.state.jobs.map((function(e){return l.a.createElement("div",null,l.a.createElement("a",{className:"job-item",href:"/job/"+e.id},l.a.createElement("p",null,l.a.createElement("h3",null,e.title)),l.a.createElement("p",null,l.a.createElement("h5",null,"@ ",e.company)),l.a.createElement("p",null,"Approximate Salary: ",e.annual_salary)),l.a.createElement("br",null),l.a.createElement("br",null))}))):l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"Currently, there are no active job post."))))}}]),a}(n.Component),I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={fname:"",lname:"",phone:"",email:"",cvname:"No CV Uploaded Yet",cvUrl:"",disabled:"",errormsg:"",cvchange:!1},g.a.get("/api/auth/user/?token="+localStorage.getItem("token")).then((function(e){t.setState({fname:e.data.first_name,lname:e.data.last_name,email:e.data.email,phone:e.data.phone})})),g.a.get("/api/auth/cv/?token="+localStorage.getItem("token")).then((function(e){t.setState({cvname:e.data.cvFileName,cvUrl:e.data.cvFileUrl})})).catch((function(e){t.setState({disabled:" disabled"})})),t.cvFileChange=function(e){".pdf"===e.target.files[0].name.substring(e.target.files[0].name.length-4)?t.setState({cvFile:e.target.files[0],cvchange:!0,cvname:e.target.files[0].name,disabled:"",errormsg:"",cvUrl:""}):t.setState({errormsg:"File format for CV must be pdf.",disabled:" disabled"})},t.applyForJob=function(e){if(e.preventDefault()," disabled"!==t.state.disabled)if(t.state.cvchange){var a=new FormData;a.append("cvFile",t.state.cvFile),a.append("token",localStorage.getItem("token")),g.a.post("/api/auth/cv/",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){g.a.get("/api/job/apply/?id="+t.props.pk+"&token="+localStorage.getItem("token")).then((function(e){window.location.reload()}))}))}else g.a.get("/api/job/apply/?id="+t.props.pk+"&token="+localStorage.getItem("token")).then((function(e){window.location.reload()}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"First name: ",this.state.fname),l.a.createElement("p",null,"Last name: ",this.state.lname),l.a.createElement("p",null,"Phone: ",this.state.phone),l.a.createElement("p",null,"Email: ",this.state.email),l.a.createElement("p",null,"Last CV: ",l.a.createElement("a",{href:this.state.cvUrl},this.state.cvname)),l.a.createElement("form",{onSubmit:this.applyForJob},l.a.createElement("input",{type:"hidden",name:"job_id",value:this.props.pk}),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"cv"},"Upload new CV"),l.a.createElement("input",{type:"file",onChange:this.cvFileChange,id:"cv",name:"cv",className:"form-control-file"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"submit",value:"Apply",className:"form-control btn btn-success"+this.state.disabled})),l.a.createElement("p",null,this.state.errormsg)))}}]),a}(n.Component),x=t(35),_=new(t.n(x).a)({ALLOWED_TAGS:["a","strong","p","br","img","ul","ol","li"],ALLOWED_ATTRIBUTES:["href","class","src"]}),F=function(e){function a(e){var t;Object(c.a)(this,a);var n=(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).props.match.params.id;return t.state={id:n,title:"",description:"",annual_salary:"",company:"",applied:!1},g.a.get("/api/job/details/?id="+n+"&token="+localStorage.getItem("token")).then((function(e){t.setState({title:e.data.title,description:e.data.description,annual_salary:e.data.annual_salary,company:e.data.company,applied:e.data.applied})})),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/"}):l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8"},l.a.createElement("h3",null,this.state.title),l.a.createElement("h5",null,"@ ",this.state.company),l.a.createElement("h6",null,"Approximate Salary: ",this.state.annual_salary),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"description"},_.transform(this.state.description))),l.a.createElement("br",null)),l.a.createElement("div",{class:"col-md-4"},l.a.createElement("h3",null,"Apply to this job"),l.a.createElement("br",null),this.state.applied?l.a.createElement("p",null,"You have already applied here."):l.a.createElement(I,{pk:this.state.id})))))}}]),a}(n.Component),D=function(e){function a(e){var t;Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={applicants:[],title:"Full Stack Developer",company:"Neritic Ltd.",unauthorized:!1};var n=t.props.match.params.id;return g.a.get("/api/job/applicants/?id="+n+"&token="+localStorage.getItem("token")).then((function(e){t.setState({applicants:e.data.applicants,title:e.data.title,company:e.data.company})})).catch((function(e){t.setState({unauthorized:!0})})),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isAuth")?l.a.createElement(d.a,{to:"/"}):this.state.unauthorized?l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,"Page not found"))):l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,"Applicants for ",this.state.title," @ ",this.state.company),l.a.createElement("br",null),l.a.createElement("div",{class:"row"},this.state.applicants.map((function(e){return l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{class:"col-md-12 job-card"},l.a.createElement("p",null,"First name: ",e.fname),l.a.createElement("p",null,"Last name: ",e.lname),l.a.createElement("p",null,"Phone: ",e.phone),l.a.createElement("p",null,"Email: ",e.email),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary primarybtn",href:e.cvUrl},"Applicant's Resume"))),l.a.createElement("br",null))}))),0==this.state.applicants.length?l.a.createElement("p",null,"There are no applicants yet."):l.a.createElement("div",null)))}}]),a}(n.Component),U=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={errormsg:"",email:""},t.handleCredChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),g.a.post("/api/auth/forgot-pass/",{email:t.state.email},{headers:{"Content-Type":"application/json"}}).then((function(e){localStorage.setItem("verify_code",e.data.verify_code),t.setState({errormsg:""}),window.location.href="/verify-code"})).catch((function(e){t.setState({errormsg:"User with this email does not exist."})}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App-header"},l.a.createElement("h3",null," B A S A I "),l.a.createElement("form",{id:"home-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"email",id:"email",name:"email",className:"form-control"})),l.a.createElement("button",{onClick:this.onSubmit,className:"primarybtn btn btn-primary form-control"},"Send Reset Code"),l.a.createElement("p",{className:"ca-text"}," ",l.a.createElement("a",{href:"/"},"Go Back")),l.a.createElement("p",null,this.state.errormsg)))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={errormsg:"",email:"",code:"",password:"",password2:""},t.handleCredChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.state.password!==t.state.password2?t.setState({errormsg:"Password must match"}):g.a.post("/api/auth/verify-code/",{email:t.state.email,verify_code:t.state.code,password:t.state.password},{headers:{"Content-Type":"application/json"}}).then((function(e){localStorage.setItem("verify_code",""),t.setState({errormsg:""}),window.location.href="/"})).catch((function(e){t.setState({errormsg:"Wrong credentials used."})}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App-header"},l.a.createElement("h3",null," B A S A I "),l.a.createElement("form",{id:"home-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"email",id:"email",name:"email",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"code"},"Reset Code:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"text",id:"code",name:"code",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"password"},"New Password:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"password",id:"password",name:"password",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"password2"},"Confirm Password:"),l.a.createElement("input",{onChange:this.handleCredChange,type:"password",id:"password2",name:"password2",className:"form-control"})),l.a.createElement("button",{onClick:this.onSubmit,className:"primarybtn btn btn-primary form-control"},"Reset Password"),l.a.createElement("p",{className:"ca-text"}," ",l.a.createElement("a",{href:"/"},"Go Back")),l.a.createElement("p",null,this.state.errormsg)))}}]),a}(n.Component),L=function(e){function a(e){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",component:v}),l.a.createElement(d.b,{exact:!0,path:"/signup",component:y}),l.a.createElement(d.b,{exact:!0,path:"/profile",component:w}),l.a.createElement(d.b,{exact:!0,path:"/job/edit/:id",component:k}),l.a.createElement(d.b,{exact:!0,path:"/job/new",component:k}),l.a.createElement(d.b,{exact:!0,path:"/jobs",component:A}),l.a.createElement(d.b,{exact:!0,path:"/applicants/:id",component:D}),l.a.createElement(d.b,{exact:!0,path:"/job/:id",component:F}),l.a.createElement(d.b,{exact:!0,path:"/forgot-pass",component:U}),l.a.createElement(d.b,{exact:!0,path:"/verify-code",component:P})))}}]),a}(n.Component);var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f.a,{globalState:{token:"",isAuth:!1}},l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.db58a763.chunk.js.map