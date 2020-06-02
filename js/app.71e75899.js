(function(t){function e(e){for(var i,n,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"05f0":function(t,e,a){t.exports=a.p+"img/self.b77a3eea.jpg"},"0bf2":function(t,e,a){"use strict";var i=a("6fb2"),s=a.n(i);s.a},"15fd":function(t,e,a){},"1dbe":function(t,e,a){"use strict";var i=a("15fd"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Aboutme",{attrs:{id:"about"}}),a("Education",{attrs:{id:"education"}}),a("Skills",{attrs:{id:"skills"}}),a("Project",{attrs:{id:"project"}}),a("Contact",{attrs:{id:"contact"}}),a("Footer")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"text-gray-700 bg-white body-font sticky w-full z-20 top-0 overflow-auto",attrs:{id:"header"}},[a("div",{staticClass:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},[a("a",{staticClass:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",attrs:{href:"../Portfolio/index.html"}},[a("svg",{staticClass:"w-10 h-10 text-white bg-indigo-500 rounded-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",viewBox:"0 0 30 30"}},[a("text",{attrs:{x:"4",y:"21"}},[t._v("AD")])]),a("span",{staticClass:"ml-3 text-xl"},[t._v("Portfolio")])]),t._m(0)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base"},[a("a",{staticClass:"mr-5 hover:text-gray-900",attrs:{href:"#about"}},[t._v("About me")]),a("a",{staticClass:"mr-5 hover:text-gray-900",attrs:{href:"#education"}},[t._v("Education")]),a("a",{staticClass:"mr-5 hover:text-gray-900",attrs:{href:"#skills"}},[t._v("Skills")]),a("a",{staticClass:"mr-5 hover:text-gray-900",attrs:{href:"#project"}},[t._v("Projects")]),a("a",{staticClass:"mr-0 hover:text-gray-900",attrs:{href:"#contact"}},[t._v("Contact")])])}],o={name:"Navbar",mounted:function(){var t=window.scrollY,e=document.getElementById("header");function a(){e.classList.add("shadow")}function i(){e.classList.remove("shadow")}window.addEventListener("scroll",(function(){t=window.scrollY,t>50?a():i()}))}},c=o,d=(a("1dbe"),a("2877")),u=Object(d["a"])(c,n,l,!1,null,"2795004d",null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-gray-700 body-font"},[a("div",{staticClass:"container px-5 py-10 mx-auto flex flex-col"},[a("SectionHeader",{attrs:{headerTitle:"About Me",id:"aboutmeheader"}}),t._m(0)],1)])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lg:w-4/6 mx-auto"},[i("div",{staticClass:"rounded-lg h-64 overflow-hidden"},[i("img",{staticClass:"object-cover object-center h-full w-full",attrs:{alt:"content",src:"https://source.unsplash.com/1200x500/?javascript,html"}})]),i("div",{staticClass:"flex flex-col sm:flex-row mt-10"},[i("div",{staticClass:"sm:w-1/3 text-center sm:pr-8 sm:py-8"},[i("div",{staticClass:"w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"},[i("img",{staticClass:"rounded-full",attrs:{src:a("05f0"),loading:"lazy"}})]),i("div",{staticClass:"flex flex-col items-center text-center justify-center"},[i("h2",{staticClass:"font-medium title-font mt-4 text-gray-900 text-lg"},[t._v("Anandita Dubey")]),i("div",{staticClass:"w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"}),i("p",{staticClass:"text-base text-gray-600"},[t._v(" Software Engineer, "),i("br"),i("a",{staticClass:"text-indigo-500",attrs:{href:"https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-03-09&ci=AWS01267545"}},[t._v("AWS Solution Architect")]),i("br"),t._v("and ML enthusiast ")])])]),i("div",{staticClass:"sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"},[i("p",{staticClass:"leading-relaxed text-lg mb-4"},[t._v(" An enthusiastic full stack software engineer with strong knowledge of Python programming, Object oriented programming concepts, deep learning, web technologies, AWS services and databases looking for a full-time opportunity. Expertise in data structures & software engineering practices. ")])])])])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col text-center w-full mb-20"},[a("h1",{staticClass:"text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"},[t._v(t._s(t.headerTitle))]),a("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base"},[t._v(t._s(t.headerDescription))])])},g=[],x={name:"ProjectHeader",props:{headerTitle:String,headerDescription:String}},v=x,y=(a("0bf2"),Object(d["a"])(v,h,g,!1,null,null,null)),b=y.exports,w={name:"Aboutme",components:{SectionHeader:b}},C=w,k=(a("6f0f"),Object(d["a"])(C,m,f,!1,null,"77554352",null)),_=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-gray-700 body-font"},[a("div",{staticClass:"container px-5 py-24 mx-auto"},[a("SectionHeader",{attrs:{headerTitle:t.headerTitle,headerDescription:t.headerDescription}}),a("div",{staticClass:"flex flex-wrap -m-4"},t._l(t.projects,(function(t){return a("ProjectBody",{key:t.id,attrs:{projectTitle:t.project.title,projectType:t.project.projectType,projectDescription:t.project.description,applicationlink:t.project.applicationlink,githublink:t.project.githublink,imageurl:t.project.imageurl}})})),1)],1)])},S=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-4 lg:w-1/2"},[a("div",{staticClass:"h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"},[a("img",{staticClass:"flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4",attrs:{alt:"team",src:""+t.imageurl,loading:"lazy"}}),a("div",{staticClass:"flex-grow sm:pl-8"},[a("h2",{staticClass:"title-font font-medium text-lg text-gray-900"},[t._v(t._s(t.projectTitle))]),a("h3",{staticClass:"text-gray-500 mb-3"},[t._v(t._s(t.projectType))]),a("p",{staticClass:"mb-4 text-justify"},[t._v(t._s(t.projectDescription))]),a("span",{staticClass:"inline-flex"},[a("a",{staticClass:"text-indigo-500",attrs:{href:t.application,id:"applink"}},[t._v("Application")]),a("a",{staticClass:"ml-2 text-indigo-500",attrs:{href:""+t.githublink}},[t._v("GitHub")])])])])])},T=[],E={name:"ProjectBody",props:{projectTitle:String,projectType:String,projectDescription:String,applicationlink:String,githublink:String,imageurl:String},computed:{application:function(){return this.applicationlink||null}}},P=E,B=Object(d["a"])(P,D,T,!1,null,null,null),A=B.exports,M={name:"Project",components:{SectionHeader:b,ProjectBody:A},data:function(){return{projects:[{project:{title:"Brain Tumor Detector",type:"Python Flask, Tensorflow",description:"Designed and Implemented Machine Learning based Brain Tumor Detection software with prediction accuracy > 97% achieved through training of more than 700 MRI Images of patients.",applicationlink:"http://braintumordetection-env-1.eba-mkngepaq.us-east-2.elasticbeanstalk.com/",githublink:"https://github.com/anandita-dubey/brain-tumor-detection",imageurl:"https://source.unsplash.com/200x200/?javascript"}},{project:{title:"Covid-19 Live",type:"Vue.js",description:"A Webapp that monitors the situation in your country and around the world regarding Covid-19.",applicationlink:"https://covid-19-detector-179b8.web.app/",githublink:"https://github.com/anandita-dubey/Covid-19-live",imageurl:"https://source.unsplash.com/200x200/?javascript"}},{project:{title:"Face Detection and Face Recognition using Past image tags",type:"Python Flask, Automation",description:"The Tags are predicted by a Progressive Machine Learning Model, which learns every time it discovers a new image with new facial features.",applicationlink:"https://sjangir1.pythonanywhere.com/",githublink:"https://github.com/anandita-dubey/Face-Detection-and-Face-Recognition-using-Past-image-tags",imageurl:"https://source.unsplash.com/200x200/?javascript"}},{project:{title:"Naive Bayes Classifier for Sentimental Analysis",type:"Python",description:"The Tags are predicted by a Progressive Machine Learning Model, which learns every time it discovers a new image with new facial features.",applicationlink:"",githublink:"https://github.com/anandita-dubey/Sentiment-Analysis-for-Amazon-Reviews-without-any-libraries-used.",imageurl:"https://source.unsplash.com/200x200/?javascript"}}],headerTitle:"Projects",headerDescription:"Explore my projects where I have used my skills from different domains like Web development, Machine Learning, Programming, Cloud."}}},O=M,L=Object(d["a"])(O,j,S,!1,null,null,null),$=L.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-gray-700 body-font"},[a("div",{staticClass:"container px-5 py-24 mx-auto flex flex-wrap"},[a("SectionHeader",{attrs:{headerTitle:t.headerTitle,headerDescription:t.headerDescription}}),t._l(t.degrees,(function(t){return a("EducationBody",{key:t.id,attrs:{degreeType:t.degree.type,degreeCollege:t.degree.college,degreeDescription:t.degree.description}})}))],2)])},H=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"},[t._m(0),a("div",{staticClass:"flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"}),a("div",{staticClass:"flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"},[a("div",{staticClass:"flex-grow sm:pl-6 mt-6 sm:mt-0"},[a("h2",{staticClass:"font-medium title-font text-gray-900 mb-1 text-xl"},[t._v(t._s(t.degreeType))]),a("p",{staticClass:"leading-relaxed text-indigo-500"},[t._v(t._s(t.degreeCollege))]),a("p",{staticClass:"leading-relaxed"},[t._v(t._s(t.degreeDescription))])])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-full w-6 absolute inset-0 flex items-center justify-center"},[a("div",{staticClass:"h-full w-1 bg-gray-200 pointer-events-none"})])}],R={name:"EducationBody",props:{degreeType:String,degreeCollege:String,degreeDescription:String}},W=R,I=Object(d["a"])(W,z,N,!1,null,null,null),G=I.exports,J={name:"Education",components:{SectionHeader:b,EducationBody:G},data:function(){return{degrees:[{degree:{type:"Master's in Computer Science",college:"Georgia State University",description:"Start Date: Fall-2018 Graduated: Spring-2020"}},{degree:{type:"Bachelor’s in Computer Engineering",college:"Shri Govindram Seksaria Institute of Technology and Science",description:"Start Date: July-2013 Graduated: May-2017"}}],headerTitle:"Education",headerDescription:"Education has played an important role in the development of my Technical knowledge, Personality (shy to confident being). Apart from self-learning, Education has always directed me towards the right path."}}},V=J,Y=Object(d["a"])(V,F,H,!1,null,null,null),Q=Y.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-gray-700 body-font relative"},[a("div",{staticClass:"container px-5 py-24 mx-auto"},[t._m(0),a("div",{staticClass:"lg:w-1/2 md:w-2/3 mx-auto"},[a("div",{staticClass:"flex flex-wrap -m-2"},[a("div",{staticClass:"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"},[a("a",{staticClass:"text-indigo-500 mx-3",attrs:{href:"mailto:anandita123dubey@gmail.com"}},[t._v("anandita123dubey@gmail.com")]),a("br"),a("span",{staticClass:"inline-flex my-5"},[a("a",{staticClass:"text-gray-500",attrs:{href:"https://m.facebook.com/anandita123dubey/"}},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"Black","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}})])]),a("a",{staticClass:"ml-4 text-gray-500",attrs:{href:"https://twitter.com/dubey_anandita"}},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"Black","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}})])]),a("a",{staticClass:"ml-4 text-gray-500",attrs:{href:"https://www.instagram.com/anandita123dubey/"}},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"Black",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[a("rect",{attrs:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}}),a("path",{attrs:{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}})])]),a("a",{staticClass:"ml-4 text-gray-500",attrs:{href:"https://github.com/anandita-dubey"}},[a("svg",{staticClass:"w-5 h-5",attrs:{role:"img",fill:"Black",stroke:"Black","stroke-width":"1",viewBox:"0 0 28 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])])])])])])])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col text-center w-full mb-12"},[a("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"},[t._v("Contact")]),a("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base"},[t._v("Follow me on Social media. For Professional work contact me through Email.")])])}],K={name:"Contact"},X=K,Z=Object(d["a"])(X,U,q,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-gray-700 body-font"},[a("div",{staticClass:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center"},[a("a",{staticClass:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",attrs:{href:"../Portfolio/index.html"}},[a("svg",{staticClass:"w-10 h-10 text-white bg-indigo-500 rounded-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",viewBox:"0 0 30 30"}},[a("text",{attrs:{x:"4",y:"21"}},[t._v("AD")])]),a("span",{staticClass:"ml-3 text-xl"},[t._v("Portfilio")])]),t._m(0)])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"},[t._v(" © 2020 Anandita Dubey — "),a("a",{staticClass:"text-gray-600 ml-1",attrs:{href:"https://www.linkedin.com/in/anandita-dubey/",rel:"noopener noreferrer",target:"_blank"}},[t._v("@anandita-dubey")])])}],it={name:"Footer"},st=it,rt=Object(d["a"])(st,et,at,!1,null,null,null),nt=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-white-500 bg-gray-900 body-font"},[a("div",{staticClass:"container px-5 py-24 mx-auto"},[a("SectionHeaderDark",{attrs:{headerTitle:t.headerTitle,headerDescription:t.headerDescription}}),a("div",{staticClass:"flex flex-wrap -m-4"},[a("SkillBody")],1)],1)])},ot=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col text-center w-full mb-20"},[a("h1",{staticClass:"text-2xl font-medium title-font mb-4 text-white tracking-widest"},[t._v(t._s(t.headerTitle))]),a("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base text-white"},[t._v(t._s(t.headerDescription))])])},dt=[],ut={name:"SectionHeaderDark",props:{headerTitle:String,headerDescription:String}},pt=ut,mt=Object(d["a"])(pt,ct,dt,!1,null,null,null),ft=mt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid gap-4 grid-cols-3",attrs:{id:"skillbody"}},t._l(t.skills,(function(e){return a("div",{key:e.id,staticClass:"p-4 lg:w-1/1"},[a("div",{staticClass:"h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"},[a("h1",{staticClass:"title-font sm:text-2xl text-xl font-medium text-white mb-3"},[t._v(t._s(e.skill.type))]),t._l(e.skill.list,(function(t){return a("SkillList",{key:t.id,attrs:{skill:t}})}))],2)])})),0)},gt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-2 sm:w-1/1 w-full"},[a("div",{staticClass:"bg-gray-900 rounded flex p-4 h-full items-center text-left"},[a("svg",{staticClass:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}}),a("path",{attrs:{d:"M22 4L12 14.01l-3-3"}})]),a("span",{staticClass:"title-font font-medium text-white"},[t._v(t._s(t.skill))])])])},vt=[],yt={name:"SkillList",props:{skill:String}},bt=yt,wt=Object(d["a"])(bt,xt,vt,!1,null,null,null),Ct=wt.exports,kt={name:"SkillBody",components:{SkillList:Ct},data:function(){return{skills:[{skill:{type:"Programming Languages",list:["JavaScript","Python","Java","PHP"]}},{skill:{type:"Web Development",list:["HTML, CSS","Vue.js","React","jQuery","Flask"]}},{skill:{type:"Cloud Services",list:["Public Cloud","Iaas","Paas","Saas","Serverless"]}},{skill:{type:"AWS Cloud Platform",list:["EC2, S3","RDS, IAM","Lambda, Redshift","ROUTE53, DynamoDB","ElasticBeanstalk"]}},{skill:{type:"Machine Learning",list:["Regression, Naive Bayes","SVM, K-means","Neural Networks, Fuzzy Logic","kNN, Decision Tree"]}},{skill:{type:"Database",list:["MYSQL","Firebase","MongoDB"]}},{skill:{type:"Other",list:["Microservices, Command Line","Git, Shell script","Terraform","Heroku","Firebase Hosting"]}}]}}},_t=kt,jt=(a("5702"),Object(d["a"])(_t,ht,gt,!1,null,"fdff8392",null)),St=jt.exports,Dt={name:"Skills",components:{SectionHeaderDark:ft,SkillBody:St},data:function(){return{headerTitle:"Skills",headerDescription:"Dive into this section and explore my skill set from different domains namely Web Development, Cloud, AWS, Machine Learning, Automation, Database."}}},Tt=Dt,Et=Object(d["a"])(Tt,lt,ot,!1,null,null,null),Pt=Et.exports,Bt={name:"App",components:{Navbar:p,Aboutme:_,Education:Q,Skills:Pt,Project:$,Contact:tt,Footer:nt}},At=Bt,Mt=(a("034f"),Object(d["a"])(At,s,r,!1,null,null,null)),Ot=Mt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Ot)}}).$mount("#app")},5702:function(t,e,a){"use strict";var i=a("c78e"),s=a.n(i);s.a},"6f0f":function(t,e,a){"use strict";var i=a("c07b"),s=a.n(i);s.a},"6fb2":function(t,e,a){},"85ec":function(t,e,a){},c07b:function(t,e,a){},c78e:function(t,e,a){}});
//# sourceMappingURL=app.71e75899.js.map
