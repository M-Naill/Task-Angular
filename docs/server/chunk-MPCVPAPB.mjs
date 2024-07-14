import './polyfills.server.mjs';
import{A as w,B as me,C as x,D as ge,E as l,F as A,H as ye,M as ve,O as J,P as X,R as _e,S as Ce,T as be,U as Ve,X as De,a as le,b as ue,ba as Y,c as de,d as P,e as V,f,g as _,h as D,i as ce,j as p,k as c,l as $,m as he,n as fe,o as z,p as q,q as M,r as d,s as Z,t as y,u as pe,v as K,w as s,x as a,y as u,z as E}from"./chunk-TKJETU5B.mjs";import{a as g,b as v}from"./chunk-VVCT4QZE.mjs";var Xe=[],Me=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Y.forRoot(Xe),Y]});let t=e;return t})();var Pe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(d(Z),d(q))},e.\u0275dir=c({type:e});let t=e;return t})(),Ye=(()=>{let e=class e extends Pe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=z(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[y]});let t=e;return t})(),Ne=new _("");var Qe={provide:Ne,useExisting:V(()=>H),multi:!0};function et(){let t=X()?X().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new _(""),H=(()=>{let e=class e extends Pe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(d(Z),d(q),d(tt,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&x("input",function(m){return o._handleInput(m.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(m){return o._compositionEnd(m.target.value)})},features:[A([Qe]),y]});let t=e;return t})();function nt(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var ee=new _(""),ke=new _("");function it(t){return nt(t.value)?{required:!0}:null}function Ee(t){return null}function je(t){return t!=null}function Ge(t){return ye(t)?le(t):t}function Te(t){let e={};return t.forEach(i=>{e=i!=null?g(g({},e),i):e}),Object.keys(e).length===0?null:e}function Ue(t,e){return e.map(i=>i(t))}function rt(t){return!t.validate}function Be(t){return t.map(e=>rt(e)?e:i=>e.validate(i))}function ot(t){if(!t)return null;let e=t.filter(je);return e.length==0?null:function(i){return Te(Ue(i,e))}}function te(t){return t!=null?ot(Be(t)):null}function st(t){if(!t)return null;let e=t.filter(je);return e.length==0?null:function(i){let n=Ue(i,e).map(Ge);return de(n).pipe(ue(Te))}}function ne(t){return t!=null?st(Be(t)):null}function we(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function at(t){return t._rawValidators}function lt(t){return t._rawAsyncValidators}function Q(t){return t?Array.isArray(t)?t:[t]:[]}function j(t,e){return Array.isArray(t)?t.includes(e):t===e}function xe(t,e){let i=Q(e);return Q(t).forEach(r=>{j(i,r)||i.push(r)}),i}function Ae(t,e){return Q(e).filter(i=>!j(t,i))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},b=class extends G{get formDirective(){return null}get path(){return null}},O=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ut={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qt=v(g({},ut),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{let e=class e extends T{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(O,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&K("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),Le=(()=>{let e=class e extends T{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(b,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&K("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var F="VALID",k="INVALID",C="PENDING",I="DISABLED";function Re(t){return(L(t)?t.validators:t)||null}function dt(t){return Array.isArray(t)?te(t):t||null}function We(t,e){return(L(e)?e.asyncValidators:t)||null}function ct(t){return Array.isArray(t)?ne(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ht(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new P(1e3,"");if(!n[i])throw new P(1001,"")}function ft(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new P(1002,"")})}var U=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===k}get pending(){return this.status==C}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(xe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(n=>{n.disable(v(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(v(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let i=Ge(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(k)?k:F}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=dt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ct(this._rawAsyncValidators)}},B=class extends U{constructor(e,i,n){super(Re(i),We(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){ft(this,!0,e),Object.keys(e).forEach(n=>{ht(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=new _("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function pt(t,e){return[...e.path,t]}function $e(t,e,i=re){ze(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),gt(t,e),vt(t,e),yt(t,e),mt(t,e)}function Fe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function mt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ze(t,e){let i=at(t);e.validator!==null?t.setValidators(we(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=lt(t);e.asyncValidator!==null?t.setAsyncValidators(we(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Fe(e._rawValidators,r),Fe(e._rawAsyncValidators,r)}function gt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qe(t,e)})}function yt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function qe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function vt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function _t(t,e){t==null,ze(t,e)}function Ct(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===Ye}function Vt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Dt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===H?i=o:bt(o)?n=o:r=o}),r||n||i||null}var Mt={provide:b,useExisting:V(()=>oe)},S=Promise.resolve(),oe=(()=>{let e=class e extends b{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new M,this.form=new B({},te(n),ne(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){S.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),$e(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){S.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){S.then(()=>{let r=this._findContainer(n.path),o=new B({});_t(o,n),r.registerControl(n.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){S.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){S.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submitted=!0,Vt(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(d(ee,10),d(ke,10),d(ie,8))},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&x("submit",function(m){return o.onSubmit(m)})("reset",function(){return o.onReset()})},inputs:{options:[D.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[A([Mt]),y]});let t=e;return t})();function Ie(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Se(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Et=class extends U{constructor(e=null,i,n){super(Re(i),We(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Se(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Se(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt={provide:O,useExisting:V(()=>se)},Oe=Promise.resolve(),se=(()=>{let e=class e extends O{constructor(n,r,o,h,m,W){super(),this._changeDetectorRef=m,this.callSetDisabledState=W,this.control=new Et,this._registered=!1,this.name="",this.update=new M,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Dt(this,h)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Ct(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$e(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Oe.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&J(r);Oe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?pt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(d(b,9),d(ee,10),d(ke,10),d(Ne,10),d(ve,8),d(ie,8))},e.\u0275dir=c({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[D.None,"disabled","isDisabled"],model:[D.None,"ngModel","model"],options:[D.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[A([wt]),y,$]});let t=e;return t})(),Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var xt=(()=>{let e=class e{constructor(){this._validator=Ee}ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):Ee,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,features:[$]});let t=e;return t})();var At={provide:ee,useExisting:V(()=>ae),multi:!0};var ae=(()=>{let e=class e extends xt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=J,this.createValidator=n=>it}enabled(n){return n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=z(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&pe("required",o._enabled?"":null)},inputs:{required:"required"},features:[A([At]),y]});let t=e;return t})();var Ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let t=e;return t})();var Ke=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ie,useValue:n.callSetDisabledState??re}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Ft]});let t=e;return t})();var R=(()=>{let e=class e{constructor(n){this.http=n,this.title="Task1"}onContactCreate(n){console.log(n),this.http.post("http://upskilling-egypt.com:3001/contact/contacts.json",n).subscribe(r=>{console.log(r)})}};e.\u0275fac=function(r){return new(r||e)(d(_e))},e.\u0275cmp=ce({type:e,selectors:[["app-root"]],decls:148,vars:0,consts:[["contactForm","ngForm"],[1,"hero","d-flex","justify-content-center"],[1,"container","d-flex","flex-column","justify-content-center","align-items-center"],[1,"logo","d-flex","justify-content-center","align-items-center"],["src","../assets/home/Group 560.svg","alt","",1,""],[1,"hero-content","d-flex","flex-column","align-items-center"],["type","button",1,"btn","experts","d-flex","justify-content-center","px-4"],[1,"d-flex","text-center"],[1,"text-center"],[1,"text-center","w-50","mt-5"],["type","button",1,"btn","btn-help","m-auto","d-flex","justify-content-center","rounded-pill","px-5","py-2"],["id","about",1,"about","my-3","d-flex","flex-column"],[1,"container","d-flex","justify-content-around","pt-3"],[1,"about-left","d-flex","flex-column","w-25","mt-4"],[1,"about-title"],[1,"mt-3"],[1,"img","d-block"],["src","../assets/about/img3.png","alt",""],[1,"about-right","d-flex","flex-column","w-25"],[1,"about-title","text-end","mb-3"],[1,"text-end"],[1,"button","justify-content-center","d-flex","align-items-end"],["type","button",1,"btn","bg-warning","fw-bold","rounded-pill","py-2","px-5","my-auto"],["id","services",1,"services","my-3"],[1,"container"],[1,"row"],[1,"col-md-4","my-3"],[1,"card"],["src","../assets/services/img1.png","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["src","../assets/services/img2.png","alt","...",1,"card-img-top"],["src","../assets/services/img3.jpg","alt","...",1,"card-img-top"],["type","button",1,"btn","btn-help","m-auto","d-flex","rounded-pill","justify-content-center","rounded-pill","py-2","px-5","my-5"],["id","testymonials",1,"testymonials","my-3"],[1,"row","my-5","px-3"],[1,"col-md-6","testymonials-card","p-3","my-3","d-flex"],["src","../assets/Testymonials/img1.png","alt",""],[1,"mx-2"],[1,"fa-solid","fa-star"],[1,"col-md-6","testymonials-card","my-3","p-3","d-flex","justify-content-around"],[1,"col-md-6","testymonials-card","p-3","my-3","d-flex","justify-content-around"],["id","contact",1,"contact"],[3,"ngSubmit"],[1,"d-flex","my-5","py-3","justify-content-center"],[1,"form-input","w-50"],[1,"mb-3"],["type","text","placeholder","Name","name","name","ngModel","","id","name",1,"form-control","rounded-pill","py-3"],["type","email","placeholder","Email","name","email","ngModel","","id","email","aria-describedby","emailHelp",1,"form-control","rounded-pill","py-3"],["type","text","placeholder","Phone","name","phone","ngModel","","id","phone","required","",1,"form-control","rounded-pill","py-3"],[1,"d-flex","justify-content-center","my-3"],["type","submit",1,"btn","rounded-pill","py-3","px-5"],[1,"form-contact"],[1,"d-flex","mt-5","mx-5"],[1,"fa-solid","me-4","mt-1","fa-envelope"],[1,"d-flex","mt-3","mx-5"],[1,"fa-solid","me-4","mt-1","fa-phone"]],template:function(r,o){if(r&1){let h=me();s(0,"header")(1,"div",1)(2,"div",2)(3,"div",3),u(4,"img",4),a(),s(5,"div",5)(6,"button",6),l(7,"Experts"),a(),s(8,"h1",7),l(9,"Lorem"),a(),s(10,"p",8),l(11,"Lorem lorem"),a(),s(12,"p",9),l(13,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore ea, ex voluptatum temporibus illum, culpa deserunt aperiam voluptatem magnam quae quibusdam explicabo necessitatibus itaque maiores exercitationem eligendi? Eum, ipsam."),a(),s(14,"button",10),l(15,"Help Me"),a()()()()(),s(16,"section",11)(17,"div",12)(18,"div",13)(19,"h2",14),l(20,"About Us"),a(),s(21,"p",15),l(22,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "),a(),s(23,"div",16),u(24,"img",17),a()(),s(25,"div",18)(26,"h2",19),l(27,"Where"),a(),s(28,"p",20),l(29," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),a()()(),s(30,"div",21)(31,"button",22),l(32,"Help Me"),a()()(),s(33,"section",23)(34,"div",24)(35,"h2",8),l(36," Services"),a(),s(37,"div",25)(38,"div",26)(39,"div",27),u(40,"img",28),s(41,"div",29)(42,"h5",30),l(43,"Lorem Ipsum"),a(),s(44,"p",31),l(45,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"),a()()()(),s(46,"div",26)(47,"div",27),u(48,"img",32),s(49,"div",29)(50,"h5",30),l(51,"Lorem Ipsum"),a(),s(52,"p",31),l(53,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"),a()()()(),s(54,"div",26)(55,"div",27),u(56,"img",33),s(57,"div",29)(58,"h5",30),l(59,"Lorem Ipsum"),a(),s(60,"p",31),l(61,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"),a()()()()(),s(62,"button",34),l(63,"Help Me"),a()()(),s(64,"section",35)(65,"div",24)(66,"h2",8),l(67," Testymonials"),a(),s(68,"div",36)(69,"div",37),u(70,"img",38),s(71,"div",39)(72,"h4"),l(73,"Courtney Henry"),a(),s(74,"p"),l(75,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book "),a(),E(76),u(77,"i",40)(78,"i",40)(79,"i",40)(80,"i",40)(81,"i",40),w(),a()(),s(82,"div",41),u(83,"img",38),s(84,"div",39)(85,"h4"),l(86,"Courtney Henry"),a(),s(87,"p"),l(88,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book "),a(),E(89),u(90,"i",40)(91,"i",40)(92,"i",40)(93,"i",40)(94,"i",40),w(),a()(),s(95,"div",42),u(96,"img",38),s(97,"div",39)(98,"h4"),l(99,"Courtney Henry"),a(),s(100,"p"),l(101,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book "),a(),E(102),u(103,"i",40)(104,"i",40)(105,"i",40)(106,"i",40)(107,"i",40),w(),a()(),s(108,"div",41),u(109,"img",38),s(110,"div",39)(111,"h4"),l(112,"Courtney Henry"),a(),s(113,"p"),l(114,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book "),a(),E(115),u(116,"i",40)(117,"i",40)(118,"i",40)(119,"i",40)(120,"i",40),w(),a()()()()(),s(121,"section",43)(122,"div",24)(123,"h2",8),l(124," Contact Us"),a(),s(125,"form",44,0),x("ngSubmit",function(){he(h);let W=ge(126);return fe(o.onContactCreate(W.value))}),s(127,"div",45)(128,"div",46)(129,"div",47),u(130,"input",48),a(),s(131,"div",47),u(132,"input",49),a(),s(133,"div",47),u(134,"input",50),a(),s(135,"div",51)(136,"button",52),l(137,"Submit"),a()()(),s(138,"div",53)(139,"div",54),u(140,"i",55),s(141,"span"),l(142," upskilling.eg1@gmail.com"),a()(),s(143,"div",56),u(144,"i",57),s(145,"span"),l(146," +20\xA0115\xA0493\xA02137"),a()()()()()()(),u(147,"footer")}},dependencies:[Ze,H,He,Le,ae,se,oe],styles:['.hero[_ngcontent-%COMP%]{height:840px;display:block;background-image:url("./media/img1-BKVJTFZJ.jpg");background-size:contain;background-repeat:no-repeat;z-index:-2;position:relative}.hero[_ngcontent-%COMP%]:before{content:"";position:absolute;right:0;top:0;width:100%;height:100%;background-color:var(--bg_color);z-index:-1;clip-path:polygon(75% 0,100% 0,100% 100%,39% 100%)}.logo[_ngcontent-%COMP%]{max-height:78px;max-width:449px}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--main_text_color);font-size:96px;font-weight:100}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{font-size:96px;font-weight:900;letter-spacing:-5px;margin-top:0;color:var(--main_text_color);line-height:15px}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){font-size:16px}.btn.experts[_ngcontent-%COMP%]{background-color:#6574f7;color:var(--white);border-radius:20px;margin-top:125px}.btn-help[_ngcontent-%COMP%]{background-color:#5180f6;color:var(--white);font-weight:700;font-size:24px}@media (max-width: 1200px){.hero[_ngcontent-%COMP%]{max-height:100vh;background-color:var(--bg_color);display:block;background-image:none}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:50px;max-height:78px;max-width:300px}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{font-size:64px}}.about[_ngcontent-%COMP%]{background-image:linear-gradient(#6d91ee77,#6d91ee77),url("./media/img2-K6M3U5A6.jpg");background-size:cover;background-repeat:no-repeat;height:840px;position:relative;width:100%;overflow:hidden;z-index:-2}.about[_ngcontent-%COMP%]:before{content:"";position:absolute;right:0;top:0;width:100%;height:100%;background-color:#6d91ee;z-index:-1;clip-path:polygon(75% 0,100% 0,100% 100%,39% 100%)}.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px;max-width:419px;max-height:282px}.about[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:100%;height:100%}.about-title[_ngcontent-%COMP%]{font-weight:900;font-size:64px;color:var(--white)}.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;font-size:18px;color:var(--white)}.about-right[_ngcontent-%COMP%]{margin-top:150px}@media (max-width: 1200px){.about[_ngcontent-%COMP%]{background-image:none;background-color:#6d91ee;height:100vh}.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;flex-basis:100%;flex-wrap:wrap}.about-left[_ngcontent-%COMP%]   .about-right[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-basis:100%;margin:0}.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px}}.services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#6d91ee;font-weight:900}.card-img-top[_ngcontent-%COMP%]{width:385px;height:290px;width:100%;border-radius:30px 30px 0 0;border-top-color:var(--white)}.card-text[_ngcontent-%COMP%]{color:#324473}.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:#324473;font-weight:900}.testymonials-card[_ngcontent-%COMP%]{border-radius:40px;border:1px solid #6D91EE;flex-basis:calc(50% - 20px);margin-right:20px}@media (max-width: 767px){.row[_ngcontent-%COMP%]{flex-wrap:wrap}.testymonials-card[_ngcontent-%COMP%]{flex-basis:100%;margin-bottom:20px}}.testymonials[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#6d91ee;font-weight:900;box-sizing:border-box}.testymonials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%}.testymonials[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#6d91ee;font-weight:700}.testymonials-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6d91ee}.form-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#cedcff}.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#6d91ee;font-weight:900;box-sizing:border-box}.form-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--white);border:solid #5180F6}.form-contact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#5180f6}footer[_ngcontent-%COMP%]{width:100%;height:145px;background-color:var(--footer_color)}']});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[R]}),e.\u0275inj=f({providers:[Ve()],imports:[be,Me,Ke,Ce]});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[R]}),e.\u0275inj=f({imports:[Je,De]});let t=e;return t})();export{St as a};
