(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5e359c"],{"2cfd":function(e,a,t){"use strict";var s=t("e314"),r=t.n(s);r.a},"73cf":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h2",[e._v("Register")]),t("div",{staticClass:"row"},[t("div",{staticClass:"card mx-auto"},[e._m(0),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.registerUser(a)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{id:"username",type:"text",placeholder:"Enter Username",name:"username"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:"Enter Name",name:"name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"text",placeholder:"Enter Email Address",name:"email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter Password",name:"password",id:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"confirm_password"}},[e._v("Confirm Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Re-enter Password",name:"confirm_password",id:"confirm_password"},domProps:{value:e.confirm_password},on:{input:function(a){a.target.composing||(e.confirm_password=a.target.value)}}})]),t("button",{staticClass:"btn btn-primary"},[e._v("Register")]),e._v(" "),t("router-link",{staticClass:"card-link",attrs:{to:"/login"}},[e._v("Already hanve an Account?")])],1)])])])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card-header text-white bg-primary"},[t("h4",[e._v("Register")])])}],o=(t("b0c0"),t("5530")),n=t("2f62"),i={data:function(){return{username:"",password:"",confirm_password:"",name:"",email:""}},methods:Object(o["a"])({},Object(n["b"])(["register"]),{registerUser:function(){var e=this,a={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,name:this.name};this.register(a).then((function(a){a.data.success&&e.$router.push("login")}))}})},m=i,l=(t("2cfd"),t("2877")),c=Object(l["a"])(m,s,r,!1,null,null,null);a["default"]=c.exports},b0c0:function(e,a,t){var s=t("83ab"),r=t("9bf2").f,o=Function.prototype,n=o.toString,i=/^\s*function ([^ (]*)/,m="name";s&&!(m in o)&&r(o,m,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},e314:function(e,a,t){}}]);
//# sourceMappingURL=chunk-5a5e359c.45631a04.js.map