"use strict";(self.webpackChunkxlsFileRead=self.webpackChunkxlsFileRead||[]).push([[304],{6304:(w,c,e)=>{e.r(c),e.d(c,{LoginModule:()=>O});var s=e(6895),i=e(6438),m=e(8745),o=e(4650),f=e(2843),p=e(590),u=e(262),h=e(2978),x=e(529);let l=(()=>{class n{constructor(t){this.http=t,this._apiUrl=h.t.httpUrl}GetLoginDetails(t){return this.http.get(this._apiUrl+"user/getuser/"+t).pipe((0,p.P)(),(0,u.K)(this.handleError))}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),(0,f._)("Something bad happened; please try again later.")}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(x.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=e(6586),b=e(4859),Z=e(4144),g=e(9549),C=e(6709);const M=[{path:"",component:(()=>{class n{constructor(t,a,d,L){this._service=t,this._route=a,this._router=d,this.jwt=L,this.user="",this._subSink=new m.Y}ngOnInit(){}onSubmit(){}ngOnDestroy(){this._subSink.unsubscribe()}Loginform(){this._router.navigate(["/dashboard"])}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l),o.Y36(i.gz),o.Y36(i.F0),o.Y36(v.Z))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:44,vars:0,consts:[[1,"re-row","reminder-login-container-1"],[1,"re-col-6"],["src","./assets/images/re-logo.png"],[1,"re-row","reminder-login-container"],[1,"re-col-7","re-login-image"],["src","./assets/images/Reminder-login.svg"],[1,"re-col-4","re-login-box"],[1,"re-login-form",3,"ngSubmit"],[1,"re-row",2,"margin-bottom","40px"],[1,"re-col-12"],[1,"re-login-header"],[1,"re-login-text"],[1,"re-row"],["appearance","outline",1,"re-input-felds"],["type","email","matInput","","placeholder","Ex. test@gmail.com","value",""],["type","password","matInput","","placeholder","Ex. ********"],[1,"re-col-6",2,"padding","0"],[1,"example-section"],[1,"example-margin"],[1,"re-col-6",2,"text-align","end","align-self","center","padding","0"],[1,"re-login-para"],["href","#"],[1,"re-col-12","re-loin-btn"],["mat-raised-button","","color","primary"],[1,"re-login-para",2,"margin-top","10px","text-align","center"],[1,"re-col-1"]],template:function(t,a){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o._UZ(3,"div",1),o.qZA(),o.TgZ(4,"div",3)(5,"div",4),o._UZ(6,"img",5),o.qZA(),o.TgZ(7,"div",6)(8,"form",7),o.NdJ("ngSubmit",function(){return a.Loginform()}),o.TgZ(9,"div",8)(10,"div",9)(11,"p",10),o._uU(12,"Welcome Back"),o.qZA(),o.TgZ(13,"p",11),o._uU(14,"Please Connect our Reminder service"),o.qZA()()(),o.TgZ(15,"div",12)(16,"div",9)(17,"mat-form-field",13)(18,"mat-label"),o._uU(19,"Email"),o.qZA(),o._UZ(20,"input",14),o.qZA()(),o.TgZ(21,"div",9)(22,"mat-form-field",13)(23,"mat-label"),o._uU(24,"Password"),o.qZA(),o._UZ(25,"input",15),o.qZA()(),o.TgZ(26,"div",9)(27,"div",12)(28,"div",16)(29,"section",17)(30,"mat-checkbox",18),o._uU(31,"Remember Me"),o.qZA()()(),o.TgZ(32,"div",19)(33,"p",20)(34,"a",21),o._uU(35,"Forgot Password?"),o.qZA()()()()(),o.TgZ(36,"div",22)(37,"button",23),o._uU(38,"Sign In"),o.qZA(),o.TgZ(39,"p",24),o._uU(40," Don\u2019t have an account? "),o.TgZ(41,"a",21),o._uU(42,"Sign Up"),o.qZA()()()()()(),o._UZ(43,"div",25),o.qZA())},dependencies:[b.lW,Z.Nt,g.KE,g.hX,C.oG],styles:[".reminder-login-container-1[_ngcontent-%COMP%]{background-color:transparent;z-index:999}.reminder-login-container-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto!important;padding-left:20px}.reminder-login-container[_ngcontent-%COMP%]{background-color:#d8e9f9;margin-top:-60px;width:100%;min-height:100vh}.re-login-box[_ngcontent-%COMP%]{background-color:#0083ff}.re-login-box[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;padding-top:70px}.re-login-image[_ngcontent-%COMP%]{padding-top:70px;text-align:center;align-self:center}.re-login-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%;text-align:center}.re-login-form[_ngcontent-%COMP%]{align-self:center;padding:50px}.re-login-header[_ngcontent-%COMP%]{font-family:Roboto;font-weight:700;font-size:30px;line-height:30px;text-transform:capitalize;color:#fff;text-align:center}.re-login-text[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400;font-size:18px;line-height:30px;text-transform:capitalize;color:#f5f5f5;text-align:center}.re-login-para[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;color:#f5f5f5}.re-input-felds[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:18px;line-height:30px;color:#4e4c4c;width:100%}.re-loin-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:20px 15px;height:auto;background:#00c4d0;color:#fff;border-radius:5px;font-family:Roboto;font-weight:700;font-size:18px;width:100%;box-shadow:none;margin-top:10px}.re-loin-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:0 4px 30px #00000040}  .mat-mdc-checkbox .mat-mdc-checkbox.mdc-form-field label{font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;color:#f5f5f5}  .mat-mdc-text-field-wrapper{background-color:#fff;border-radius:5px!important}  .mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background{border-color:#00c4d0!important;background-color:#00c4d0!important}  .mdc-checkbox__background{border-color:#fff!important;background-color:#fff!important}  .mat-mdc-checkbox.mat-accent label{color:#fff!important}.re-login-para[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#8ef8ff;font-weight:500}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.Bz.forChild(M),i.Bz]}),n})();var P=e(4417);let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[l],imports:[s.ez,y,P.q]}),n})()}}]);