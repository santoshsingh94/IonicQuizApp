(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uD4h:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=e("gIcY"),i=e("6blF"),o=e("mrSG"),r=function(n){function l(l,e){var t=n.call(this,l,e)||this;return t.scheduler=l,t.work=e,t.pending=!1,t}return o.d(l,n),l.prototype.schedule=function(n,l){if(void 0===l&&(l=0),this.closed)return this;this.state=n;var e=this.id,t=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(t,e,l)),this.pending=!0,this.delay=l,this.id=this.id||this.requestAsyncId(t,this.id,l),this},l.prototype.requestAsyncId=function(n,l,e){return void 0===e&&(e=0),setInterval(n.flush.bind(n,this),e)},l.prototype.recycleAsyncId=function(n,l,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return l;clearInterval(l)},l.prototype.execute=function(n,l){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(n,l);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},l.prototype._execute=function(n,l){var e=!1,t=void 0;try{this.work(n)}catch(u){e=!0,t=!!u&&u||new Error(u)}if(e)return this.unsubscribe(),t},l.prototype._unsubscribe=function(){var n=this.id,l=this.scheduler,e=l.actions,t=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==t&&e.splice(t,1),null!=n&&(this.id=this.recycleAsyncId(l,n,null)),this.delay=null},l}(function(n){function l(l,e){return n.call(this)||this}return o.d(l,n),l.prototype.schedule=function(n,l){return void 0===l&&(l=0),this},l}(e("pugT").a)),s=function(){function n(l,e){void 0===e&&(e=n.now),this.SchedulerAction=l,this.now=e}return n.prototype.schedule=function(n,l,e){return void 0===l&&(l=0),new this.SchedulerAction(this,n).schedule(e,l)},n.now=function(){return Date.now()},n}(),c=new(function(n){function l(e,t){void 0===t&&(t=s.now);var u=n.call(this,e,function(){return l.delegate&&l.delegate!==u?l.delegate.now():t()})||this;return u.actions=[],u.active=!1,u.scheduled=void 0,u}return o.d(l,n),l.prototype.schedule=function(e,t,u){return void 0===t&&(t=0),l.delegate&&l.delegate!==this?l.delegate.schedule(e,t,u):n.prototype.schedule.call(this,e,t,u)},l.prototype.flush=function(n){var l=this.actions;if(this.active)l.push(n);else{var e;this.active=!0;do{if(e=n.execute(n.state,n.delay))break}while(n=l.shift());if(this.active=!1,e){for(;n=l.shift();)n.unsubscribe();throw e}}},l}(s))(r),a=e("isby");function d(n){return!Object(a.a)(n)&&n-parseFloat(n)+1>=0}var b=e("nkY7");function h(n,l,e){void 0===n&&(n=0);var t=-1;return d(l)?t=Number(l)<1?1:Number(l):Object(b.a)(l)&&(e=l),Object(b.a)(e)||(e=c),new i.a(function(l){var u=d(n)?n:+n-e.now();return e.schedule(p,u,{index:0,period:t,subscriber:l})})}function p(n){var l=n.index,e=n.period,t=n.subscriber;if(t.next(l),!t.closed){if(-1===e)return t.complete();n.index=l+1,this.schedule(n,e)}}var f=e("ZZ/e"),g=function(){function n(n,l,e,t){this.formBuilder=n,this.route=l,this.navCtrl=e,this.loadingCtrl=t,this.tempValidCode="ABC0123",this.isValidCode=!0,this.verifyCodeForm=this.formBuilder.group({code:[null,u.r.required]})}return n.prototype.ngOnInit=function(){this.mobile=this.route.snapshot.paramMap.get("mobile"),this.startTimer()},n.prototype.startTimer=function(n){var l=this;void 0===n&&(n=30),this.resendCodeSeconds=n,this.timer$=h(1e3,1e3).subscribe(function(n){l.resendCodeSeconds<1&&l.endTimer(),--l.resendCodeSeconds})},n.prototype.endTimer=function(){this.timer$.unsubscribe()},n.prototype.resendCode=function(){this.startTimer()},n.prototype.verifyCode=function(){return n=this,void 0,e=function(){var n,l,e,t=this;return function(n,l){var e,t,u,i,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,t&&(u=2&i[0]?t.return:i[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,i[1])).done)return u;switch(t=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,t=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){o.label=i[1];break}if(6===i[0]&&o.label<u[1]){o.label=u[1],u=i;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(i);break}u[2]&&o.ops.pop(),o.trys.pop();continue}i=l.call(n,o)}catch(r){i=[6,r],t=0}finally{e=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({message:"Verifying...",spinner:"crescent"})];case 1:return(n=u.sent()).present(),l=1e3*Math.random()+1e3,e=this.verifyCodeForm.get("code").value,h(l).subscribe(function(n){e===t.tempValidCode?(t.isValidCode=!0,t.navCtrl.navigateRoot("/profile")):t.isValidCode=!1},function(n){},function(){n.dismiss()}),[2]}})},new((l=void 0)||(l=Promise))(function(t,u){function i(n){try{r(e.next(n))}catch(l){u(l)}}function o(n){try{r(e.throw(n))}catch(l){u(l)}}function r(n){n.done?t(n.value):new l(function(l){l(n.value)}).then(i,o)}r((e=e.apply(n,[])).next())});var n,l,e},n}(),m=function(){return function(){}}(),v=e("pMnS"),y=e("oBZk"),C=e("Ip0R"),x=e("ZYCi"),w=t.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{max-width:16em;margin:0 auto}.container[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%]{font-size:.88em}"]],data:{}});function k(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"p",[["class","input-error"]],null,null,null,null,null)),(n()(),t.Db(-1,null,[" Please enter a valid verification code. "]))],null,null)}function z(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,4,"p",[["class","resend-text"]],null,null,null,null,null)),(n()(),t.Db(-1,null,[" Resend code in "])),(n()(),t.pb(2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Db(3,null,["",""])),(n()(),t.Db(-1,null,[" seconds. "]))],null,function(n,l){n(l,3,0,l.component.resendCodeSeconds)})}function I(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.resendCode()&&t),t},y.w,y.d)),t.ob(2,49152,null,0,f.k,[t.h,t.k,t.z],{shape:[0,"shape"],size:[1,"size"]},null),(n()(),t.Db(-1,0,["Resend Code"]))],function(n,l){n(l,2,0,"round","small")},null)}function E(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,11,"ion-header",[],null,null,null,y.B,y.i)),t.ob(1,49152,null,0,f.B,[t.h,t.k,t.z],null,null),(n()(),t.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,y.L,y.s)),t.ob(3,49152,null,0,f.Cb,[t.h,t.k,t.z],null,null),(n()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,y.x,y.e)),t.ob(5,49152,null,0,f.l,[t.h,t.k,t.z],null,null),(n()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/welcome"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,8).onClick(e)&&u),u},y.v,y.c)),t.ob(7,49152,null,0,f.g,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,f.h,[[2,f.ib],f.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,y.K,y.r)),t.ob(10,49152,null,0,f.Ab,[t.h,t.k,t.z],null,null),(n()(),t.Db(-1,0,["Verify Mobile"])),(n()(),t.pb(12,0,null,null,38,"ion-content",[["padding",""],["text-center",""]],null,null,null,y.z,y.g)),t.ob(13,49152,null,0,f.u,[t.h,t.k,t.z],null,null),t.ob(14,16384,null,0,f.d,[t.k],null,null),(n()(),t.pb(15,0,null,0,35,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.pb(16,0,null,null,30,"section",[],null,null,null,null,null)),(n()(),t.pb(17,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t.Db(-1,null,[" Please enter the verification code sent to"])),(n()(),t.pb(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Db(20,null,[" "," "])),(n()(),t.pb(21,0,null,null,25,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0,i=n.component;return"submit"===l&&(u=!1!==t.zb(n,23).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.zb(n,23).onReset()&&u),"ngSubmit"===l&&(u=!1!==i.verifyCode()&&u),u},null,null)),t.ob(22,16384,null,0,u.t,[],null,null),t.ob(23,540672,null,0,u.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ab(2048,null,u.b,null,[u.f]),t.ob(25,16384,null,0,u.n,[[4,u.b]],null,null),(n()(),t.pb(26,0,null,null,12,"ion-item",[],null,null,null,y.E,y.l)),t.ob(27,49152,null,0,f.H,[t.h,t.k,t.z],null,null),(n()(),t.pb(28,0,null,0,10,"ion-input",[["formControlName","code"],["maxlength","8"],["minlength","4"],["placeholder","Enter Verification Code"],["text-center",""],["type","text"]],[[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.zb(n,32)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.zb(n,32)._handleInputEvent(e.target)&&u),u},y.D,y.k)),t.ob(29,540672,null,0,u.i,[],{minlength:[0,"minlength"]},null),t.ob(30,540672,null,0,u.h,[],{maxlength:[0,"maxlength"]},null),t.Ab(1024,null,u.j,function(n,l){return[n,l]},[u.i,u.h]),t.ob(32,16384,null,0,f.Nb,[t.k],null,null),t.Ab(1024,null,u.k,function(n){return[n]},[f.Nb]),t.ob(34,671744,null,0,u.e,[[3,u.b],[6,u.j],[8,null],[6,u.k],[2,u.v]],{name:[0,"name"]},null),t.Ab(2048,null,u.l,null,[u.e]),t.ob(36,16384,null,0,u.m,[[4,u.l]],null,null),t.ob(37,49152,null,0,f.G,[t.h,t.k,t.z],{maxlength:[0,"maxlength"],minlength:[1,"minlength"],placeholder:[2,"placeholder"],type:[3,"type"]},null),t.ob(38,16384,null,0,f.d,[t.k],null,null),(n()(),t.gb(16777216,null,null,1,null,k)),t.ob(40,16384,null,0,C.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,z)),t.ob(42,16384,null,0,C.i,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.gb(0,[["elseBlock",2]],null,0,null,I)),(n()(),t.pb(44,0,null,null,2,"ion-button",[["class","next bordered"],["shape","round"],["strong","true"],["type","submit"]],null,null,null,y.w,y.d)),t.ob(45,49152,null,0,f.k,[t.h,t.k,t.z],{disabled:[0,"disabled"],shape:[1,"shape"],strong:[2,"strong"],type:[3,"type"]},null),(n()(),t.Db(-1,0,[" Next "])),(n()(),t.pb(47,0,null,null,3,"section",[["text-center",""]],null,null,null,null,null)),t.ob(48,16384,null,0,f.d,[t.k],null,null),(n()(),t.pb(49,0,null,null,0,"img",[["alt","Qfy Logo"],["class","page-bottom-logo"],["src","assets/qfy-logo-white.png"]],null,null,null,null,null)),(n()(),t.pb(50,0,null,null,0,"br",[],null,null,null,null,null))],function(n,l){var e=l.component;n(l,7,0,"/welcome"),n(l,8,0,"/welcome"),n(l,23,0,e.verifyCodeForm),n(l,29,0,"4"),n(l,30,0,"8"),n(l,34,0,"code"),n(l,37,0,"8","4","Enter Verification Code","text"),n(l,40,0,!e.isValidCode),n(l,42,0,e.resendCodeSeconds>0,t.zb(l,43)),n(l,45,0,!e.verifyCodeForm.valid,"round","true","submit")},function(n,l){n(l,20,0,l.component.mobile),n(l,21,0,t.zb(l,25).ngClassUntouched,t.zb(l,25).ngClassTouched,t.zb(l,25).ngClassPristine,t.zb(l,25).ngClassDirty,t.zb(l,25).ngClassValid,t.zb(l,25).ngClassInvalid,t.zb(l,25).ngClassPending),n(l,28,0,t.zb(l,29).minlength?t.zb(l,29).minlength:null,t.zb(l,30).maxlength?t.zb(l,30).maxlength:null,t.zb(l,36).ngClassUntouched,t.zb(l,36).ngClassTouched,t.zb(l,36).ngClassPristine,t.zb(l,36).ngClassDirty,t.zb(l,36).ngClassValid,t.zb(l,36).ngClassInvalid,t.zb(l,36).ngClassPending)})}function S(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-verify-mobile",[],null,null,null,E,w)),t.ob(1,114688,null,0,g,[u.d,x.a,f.Ib,f.Gb],null,null)],function(n,l){n(l,1,0)},null)}var A=t.lb("app-verify-mobile",g,S,{},{},[]);e.d(l,"VerifyMobilePageModuleNgFactory",function(){return D});var D=t.mb(m,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[v.a,A]],[3,t.j],t.x]),t.xb(4608,C.k,C.j,[t.u,[2,C.q]]),t.xb(4608,u.u,u.u,[]),t.xb(4608,f.b,f.b,[t.z,t.g]),t.xb(4608,f.Hb,f.Hb,[f.b,t.j,t.q]),t.xb(4608,f.Kb,f.Kb,[f.b,t.j,t.q]),t.xb(4608,u.d,u.d,[]),t.xb(1073742336,C.b,C.b,[]),t.xb(1073742336,u.s,u.s,[]),t.xb(1073742336,u.g,u.g,[]),t.xb(1073742336,f.Eb,f.Eb,[]),t.xb(1073742336,u.p,u.p,[]),t.xb(1073742336,x.o,x.o,[[2,x.u],[2,x.m]]),t.xb(1073742336,m,m,[]),t.xb(1024,x.k,function(){return[[{path:"",component:g}]]},[])])})}}]);