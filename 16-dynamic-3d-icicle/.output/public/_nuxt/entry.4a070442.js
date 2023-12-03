function gc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const it={},fr=[],dn=()=>{},p_=()=>!1,m_=/^on[^a-z]/,Es=t=>m_.test(t),vc=t=>t.startsWith("onUpdate:"),wt=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},__=Object.prototype.hasOwnProperty,Ze=(t,e)=>__.call(t,e),Be=Array.isArray,hr=t=>aa(t)==="[object Map]",md=t=>aa(t)==="[object Set]",ze=t=>typeof t=="function",ot=t=>typeof t=="string",oa=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",_d=t=>(nt(t)||ze(t))&&ze(t.then)&&ze(t.catch),gd=Object.prototype.toString,aa=t=>gd.call(t),g_=t=>aa(t).slice(8,-1),vd=t=>aa(t)==="[object Object]",yc=t=>ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zr=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v_=/-(\w)/g,Sn=la(t=>t.replace(v_,(e,n)=>n?n.toUpperCase():"")),x_=/\B([A-Z])/g,Nr=la(t=>t.replace(x_,"-$1").toLowerCase()),ca=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=la(t=>t?`on${ca(t)}`:""),Li=(t,e)=>!Object.is(t,e),Ia=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},y_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},b_=t=>{const e=ot(t)?Number(t):NaN;return isNaN(e)?t:e};let pu;const Rl=()=>pu||(pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ua(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ot(i)?w_(i):ua(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ot(t)||nt(t))return t}const M_=/;(?![^(]*\))/g,S_=/:([^]+)/,E_=/\/\*[^]*?\*\//g;function w_(t){const e={};return t.replace(E_,"").split(M_).forEach(n=>{if(n){const i=n.split(S_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ws(t){let e="";if(ot(t))e=t;else if(Be(t))for(let n=0;n<t.length;n++){const i=ws(t[n]);i&&(e+=i+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function T_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ot(e)&&(t.class=ws(e)),n&&(t.style=ua(n)),t}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R_=gc(A_);function xd(t){return!!t||t===""}const C_=t=>ot(t)?t:t==null?"":Be(t)||nt(t)&&(t.toString===gd||!ze(t.toString))?JSON.stringify(t,yd,2):String(t),yd=(t,e)=>e&&e.__v_isRef?yd(t,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:md(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!Be(e)&&!vd(e)?String(e):e;let on;class bd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function P_(t){return new bd(t)}function L_(t,e=on){e&&e.active&&e.effects.push(t)}function N_(){return on}const bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Md=t=>(t.w&li)>0,Sd=t=>(t.n&li)>0,D_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=li},I_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Md(r)&&!Sd(r)?r.delete(t):e[n++]=r,r.w&=~li,r.n&=~li}e.length=n}},No=new WeakMap;let Xr=0,li=1;const Cl=30;let ln;const wi=Symbol(""),Pl=Symbol("");class Mc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,L_(this,i)}run(){if(!this.active)return this.fn();let e=ln,n=ii;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,ii=!0,li=1<<++Xr,Xr<=Cl?D_(this):mu(this),this.fn()}finally{Xr<=Cl&&I_(this),li=1<<--Xr,ln=this.parent,ii=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ii=!0;const Ed=[];function Dr(){Ed.push(ii),ii=!1}function Ir(){const t=Ed.pop();ii=t===void 0?!0:t}function Bt(t,e,n){if(ii&&ln){let i=No.get(t);i||No.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=bc()),wd(r)}}function wd(t,e){let n=!1;Xr<=Cl?Sd(t)||(t.n|=li,n=!Md(t)):n=!t.has(ln),n&&(t.add(ln),ln.deps.push(t))}function Bn(t,e,n,i,r,s){const o=No.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Be(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!oa(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Be(t)?yc(n)&&a.push(o.get("length")):(a.push(o.get(wi)),hr(t)&&a.push(o.get(Pl)));break;case"delete":Be(t)||(a.push(o.get(wi)),hr(t)&&a.push(o.get(Pl)));break;case"set":hr(t)&&a.push(o.get(wi));break}if(a.length===1)a[0]&&Ll(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ll(bc(l))}}function Ll(t,e){const n=Be(t)?t:[...t];for(const i of n)i.computed&&_u(i);for(const i of n)i.computed||_u(i)}function _u(t,e){(t!==ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function U_(t,e){var n;return(n=No.get(t))==null?void 0:n.get(e)}const O_=gc("__proto__,__v_isRef,__isVue"),Td=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(oa)),gu=F_();function F_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Je(this);for(let s=0,o=this.length;s<o;s++)Bt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dr();const i=Je(this)[e].apply(this,n);return Ir(),i}}),t}function B_(t){const e=Je(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Ad{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&i===(r?s?Z_:Ld:s?Pd:Cd).get(e))return e;const o=Be(e);if(!r){if(o&&Ze(gu,n))return Reflect.get(gu,n,i);if(n==="hasOwnProperty")return B_}const a=Reflect.get(e,n,i);return(oa(n)?Td.has(n):O_(n))||(r||Bt(e,"get",n),s)?a:yt(a)?o&&yc(n)?a:a.value:nt(a)?r?Dd(a):Hn(a):a}}class Rd extends Ad{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(Ni(s)&&yt(s)&&!yt(i))return!1;if(!this._shallow&&(!Do(i)&&!Ni(i)&&(s=Je(s),i=Je(i)),!Be(e)&&yt(s)&&!yt(i)))return s.value=i,!0;const o=Be(e)&&yc(n)?Number(n)<e.length:Ze(e,n),a=Reflect.set(e,n,i,r);return e===Je(r)&&(o?Li(i,s)&&Bn(e,"set",n,i):Bn(e,"add",n,i)),a}deleteProperty(e,n){const i=Ze(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Bn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!oa(n)||!Td.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",Be(e)?"length":wi),Reflect.ownKeys(e)}}class H_ extends Ad{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const z_=new Rd,k_=new H_,G_=new Rd(!0),Sc=t=>t,fa=t=>Reflect.getPrototypeOf(t);function Ds(t,e,n=!1,i=!1){t=t.__v_raw;const r=Je(t),s=Je(e);n||(Li(e,s)&&Bt(r,"get",e),Bt(r,"get",s));const{has:o}=fa(r),a=i?Sc:n?Tc:ls;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Is(t,e=!1){const n=this.__v_raw,i=Je(n),r=Je(t);return e||(Li(t,r)&&Bt(i,"has",t),Bt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Us(t,e=!1){return t=t.__v_raw,!e&&Bt(Je(t),"iterate",wi),Reflect.get(t,"size",t)}function vu(t){t=Je(t);const e=Je(this);return fa(e).has.call(e,t)||(e.add(t),Bn(e,"add",t,t)),this}function xu(t,e){e=Je(e);const n=Je(this),{has:i,get:r}=fa(n);let s=i.call(n,t);s||(t=Je(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Li(e,o)&&Bn(n,"set",t,e):Bn(n,"add",t,e),this}function yu(t){const e=Je(this),{has:n,get:i}=fa(e);let r=n.call(e,t);r||(t=Je(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Bn(e,"delete",t,void 0),s}function bu(){const t=Je(this),e=t.size!==0,n=t.clear();return e&&Bn(t,"clear",void 0,void 0),n}function Os(t,e){return function(i,r){const s=this,o=s.__v_raw,a=Je(o),l=e?Sc:t?Tc:ls;return!t&&Bt(a,"iterate",wi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Fs(t,e,n){return function(...i){const r=this.__v_raw,s=Je(r),o=hr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Sc:e?Tc:ls;return!e&&Bt(s,"iterate",l?Pl:wi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function V_(){const t={get(s){return Ds(this,s)},get size(){return Us(this)},has:Is,add:vu,set:xu,delete:yu,clear:bu,forEach:Os(!1,!1)},e={get(s){return Ds(this,s,!1,!0)},get size(){return Us(this)},has:Is,add:vu,set:xu,delete:yu,clear:bu,forEach:Os(!1,!0)},n={get(s){return Ds(this,s,!0)},get size(){return Us(this,!0)},has(s){return Is.call(this,s,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:Os(!0,!1)},i={get(s){return Ds(this,s,!0,!0)},get size(){return Us(this,!0)},has(s){return Is.call(this,s,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Fs(s,!1,!1),n[s]=Fs(s,!0,!1),e[s]=Fs(s,!1,!0),i[s]=Fs(s,!0,!0)}),[t,n,e,i]}const[W_,X_,q_,$_]=V_();function Ec(t,e){const n=e?t?$_:q_:t?X_:W_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ze(n,r)&&r in i?n:i,r,s)}const Y_={get:Ec(!1,!1)},j_={get:Ec(!1,!0)},K_={get:Ec(!0,!1)},Cd=new WeakMap,Pd=new WeakMap,Ld=new WeakMap,Z_=new WeakMap;function J_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q_(t){return t.__v_skip||!Object.isExtensible(t)?0:J_(g_(t))}function Hn(t){return Ni(t)?t:wc(t,!1,z_,Y_,Cd)}function Nd(t){return wc(t,!1,G_,j_,Pd)}function Dd(t){return wc(t,!0,k_,K_,Ld)}function wc(t,e,n,i,r){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Q_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function dr(t){return Ni(t)?dr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ni(t){return!!(t&&t.__v_isReadonly)}function Do(t){return!!(t&&t.__v_isShallow)}function Id(t){return dr(t)||Ni(t)}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function Ud(t){return Lo(t,"__v_skip",!0),t}const ls=t=>nt(t)?Hn(t):t,Tc=t=>nt(t)?Dd(t):t;function Od(t){ii&&ln&&(t=Je(t),wd(t.dep||(t.dep=bc())))}function Fd(t,e){t=Je(t);const n=t.dep;n&&Ll(n)}function yt(t){return!!(t&&t.__v_isRef===!0)}function pr(t){return Bd(t,!1)}function Mu(t){return Bd(t,!0)}function Bd(t,e){return yt(t)?t:new eg(t,e)}class eg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Je(e),this._value=n?e:ls(e)}get value(){return Od(this),this._value}set value(e){const n=this.__v_isShallow||Do(e)||Ni(e);e=n?e:Je(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ls(e),Fd(this))}}function vt(t){return yt(t)?t.value:t}const tg={get:(t,e,n)=>vt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return yt(r)&&!yt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Hd(t){return dr(t)?t:new Proxy(t,tg)}class ng{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return U_(Je(this._object),this._key)}}class ig{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rg(t,e,n){return yt(t)?t:ze(t)?new ig(t):nt(t)&&arguments.length>1?sg(t,e,n):pr(t)}function sg(t,e,n){const i=t[e];return yt(i)?i:new ng(t,e,n)}class og{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Mc(e,()=>{this._dirty||(this._dirty=!0,Fd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Je(this);return Od(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ag(t,e,n=!1){let i,r;const s=ze(t);return s?(i=t,r=dn):(i=t.get,r=t.set),new og(i,r,s||!r,n)}function ri(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Ur(s,e,n)}return r}function pn(t,e,n,i){if(ze(t)){const s=ri(t,e,n,i);return s&&_d(s)&&s.catch(o=>{Ur(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(pn(t[s],e,n,i));return r}function Ur(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[t,o,a]);return}}lg(t,n,r,i)}function lg(t,e,n,i=!0){console.error(t)}let cs=!1,Nl=!1;const Rt=[];let xn=0;const mr=[];let Un=null,yi=0;const zd=Promise.resolve();let Ac=null;function Rc(t){const e=Ac||zd;return t?e.then(this?t.bind(this):t):e}function cg(t){let e=xn+1,n=Rt.length;for(;e<n;){const i=e+n>>>1,r=Rt[i],s=us(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function ha(t){(!Rt.length||!Rt.includes(t,cs&&t.allowRecurse?xn+1:xn))&&(t.id==null?Rt.push(t):Rt.splice(cg(t.id),0,t),kd())}function kd(){!cs&&!Nl&&(Nl=!0,Ac=zd.then(Gd))}function ug(t){const e=Rt.indexOf(t);e>xn&&Rt.splice(e,1)}function Dl(t){Be(t)?mr.push(...t):(!Un||!Un.includes(t,t.allowRecurse?yi+1:yi))&&mr.push(t),kd()}function Su(t,e=cs?xn+1:0){for(;e<Rt.length;e++){const n=Rt[e];n&&n.pre&&(Rt.splice(e,1),e--,n())}}function Io(t){if(mr.length){const e=[...new Set(mr)];if(mr.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((n,i)=>us(n)-us(i)),yi=0;yi<Un.length;yi++)Un[yi]();Un=null,yi=0}}const us=t=>t.id==null?1/0:t.id,fg=(t,e)=>{const n=us(t)-us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gd(t){Nl=!1,cs=!0,Rt.sort(fg);const e=dn;try{for(xn=0;xn<Rt.length;xn++){const n=Rt[xn];n&&n.active!==!1&&ri(n,null,14)}}finally{xn=0,Rt.length=0,Io(),cs=!1,Ac=null,(Rt.length||mr.length)&&Gd()}}function hg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||it;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=n.map(d=>ot(d)?d.trim():d)),f&&(r=n.map(y_))}let a,l=i[a=Da(e)]||i[a=Da(Sn(e))];!l&&s&&(l=i[a=Da(Nr(e))]),l&&pn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pn(c,t,6,r)}}function Vd(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=Vd(c,e,!0);u&&(a=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(nt(t)&&i.set(t,null),null):(Be(s)?s.forEach(l=>o[l]=null):wt(o,s),nt(t)&&i.set(t,o),o)}function da(t,e){return!t||!Es(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(t,e[0].toLowerCase()+e.slice(1))||Ze(t,Nr(e))||Ze(t,e))}let Vt=null,pa=null;function Uo(t){const e=Vt;return Vt=t,pa=t&&t.type.__scopeId||null,e}function IP(t){pa=t}function UP(){pa=null}function Wd(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ou(-1);const s=Uo(e);let o;try{o=t(...r)}finally{Uo(s),i._d&&Ou(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ua(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:x}=t;let m,p;const A=Uo(t);try{if(n.shapeFlag&4){const b=r||i,E=b;m=Zt(u.call(E,b,f,s,d,h,g)),p=l}else{const b=e;m=Zt(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),p=e.props?l:pg(l)}}catch(b){es.length=0,Ur(b,t,1),m=dt(ci)}let _=m;if(p&&x!==!1){const b=Object.keys(p),{shapeFlag:E}=_;b.length&&E&7&&(o&&b.some(vc)&&(p=mg(p,o)),_=Sr(_,p))}return n.dirs&&(_=Sr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,Uo(A),m}function dg(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(Bo(i)){if(i.type!==ci||i.children==="v-if"){if(e)return;e=i}}else return}return e}const pg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Es(n))&&((e||(e={}))[n]=t[n]);return e},mg=(t,e)=>{const n={};for(const i in t)(!vc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _g(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Eu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Eu(i,o,c):!0:!!o;return!1}function Eu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!da(n,s))return!0}return!1}function Cc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pc="components";function OP(t,e){return qd(Pc,t,!0,e)||t}const Xd=Symbol.for("v-ndc");function gg(t){return ot(t)?qd(Pc,t,!1)||t:t||Xd}function qd(t,e,n=!0,i=!1){const r=Vt||ht;if(r){const s=r.type;if(t===Pc){const a=p0(s,!1);if(a&&(a===e||a===Sn(e)||a===ca(Sn(e))))return s}const o=wu(r[t]||s[t],e)||wu(r.appContext[t],e);return!o&&i?s:o}}function wu(t,e){return t&&(t[e]||t[Sn(e)]||t[ca(Sn(e))])}const vg=t=>t.__isSuspense,xg={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){t==null?bg(e,n,i,r,s,o,a,l,c):Mg(t,e,n,i,r,o,a,l,c)},hydrate:Sg,create:Lc,normalize:Eg},yg=xg;function fs(t,e){const n=t.props&&t.props[e];ze(n)&&n()}function bg(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Lc(t,r,i,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(fs(t,"onPending"),fs(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),_r(h,t.ssFallback)):h.resolve(!1,!0)}function Mg(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:x,isInFallback:m,isHydrating:p}=f;if(x)f.pendingBranch=h,ei(h,x)?(l(x,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(l(g,d,n,i,r,null,s,o,a),_r(f,d))):(f.pendingId++,p?(f.isHydrating=!1,f.activeBranch=x):c(x,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,r,null,s,o,a),_r(f,d))):g&&ei(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&ei(h,g))l(g,h,n,i,r,f,s,o,a),_r(f,h);else if(fs(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:A,pendingId:_}=f;A>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},A):A===0&&f.fallback(d)}}function Lc(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:x,remove:m}}=c;let p;const A=wg(t);A&&e!=null&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?b_(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,L=!1){const{vnode:R,activeBranch:z,pendingBranch:M,pendingId:T,effects:k,parentComponent:oe,container:ae}=b;let I=!1;if(b.isHydrating)b.isHydrating=!1;else if(!E){I=z&&M.transition&&M.transition.mode==="out-in",I&&(z.transition.afterLeave=()=>{T===b.pendingId&&(h(M,ae,X,0),Dl(k))});let{anchor:X}=b;z&&(X=g(z),d(z,oe,b,!0)),I||h(M,ae,X,0)}_r(b,M),b.pendingBranch=null,b.isInFallback=!1;let W=b.parent,G=!1;for(;W;){if(W.pendingBranch){W.effects.push(...k),G=!0;break}W=W.parent}!G&&!I&&Dl(k),b.effects=[],A&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!L&&e.resolve()),fs(R,"onResolve")},fallback(E){if(!b.pendingBranch)return;const{vnode:L,activeBranch:R,parentComponent:z,container:M,isSVG:T}=b;fs(L,"onFallback");const k=g(R),oe=()=>{b.isInFallback&&(f(null,E,M,k,z,null,T,a,l),_r(b,E))},ae=E.transition&&E.transition.mode==="out-in";ae&&(R.transition.afterLeave=oe),b.isInFallback=!0,d(R,z,null,!0),ae||oe()},move(E,L,R){b.activeBranch&&h(b.activeBranch,E,L,R),b.container=E},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(E,L){const R=!!b.pendingBranch;R&&b.deps++;const z=E.vnode.el;E.asyncDep.catch(M=>{Ur(M,E,0)}).then(M=>{if(E.isUnmounted||b.isUnmounted||b.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:T}=E;Bl(E,M,!1),z&&(T.el=z);const k=!z&&E.subTree.el;L(E,T,x(z||E.subTree.el),z?null:g(E.subTree),b,o,l),k&&m(k),Cc(E,T.el),R&&--b.deps===0&&b.resolve()})},unmount(E,L){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,E,L),b.pendingBranch&&d(b.pendingBranch,n,E,L)}};return b}function Sg(t,e,n,i,r,s,o,a,l){const c=e.suspense=Lc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function Eg(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Tu(i?n.default:n),t.ssFallback=i?Tu(n.fallback):dt(ci)}function Tu(t){let e;if(ze(t)){const n=Mr&&t._c;n&&(t._d=!1,cn()),t=t(),n&&(t._d=!0,e=tn,up())}return Be(t)&&(t=dg(t)),t=Zt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function $d(t,e){e&&e.pendingBranch?Be(t)?e.effects.push(...t):e.effects.push(t):Dl(t)}function _r(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Cc(i,r))}function wg(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function FP(t,e){return Nc(t,null,e)}const Bs={};function Oa(t,e,n){return Nc(t,e,n)}function Nc(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=it){var a;const l=N_()===((a=ht)==null?void 0:a.scope)?ht:null;let c,u=!1,f=!1;if(yt(t)?(c=()=>t.value,u=Do(t)):dr(t)?(c=()=>t,i=!0):Be(t)?(f=!0,u=t.some(b=>dr(b)||Do(b)),c=()=>t.map(b=>{if(yt(b))return b.value;if(dr(b))return lr(b);if(ze(b))return ri(b,l,2)})):ze(t)?e?c=()=>ri(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),pn(t,l,3,[d])}:c=dn,e&&i){const b=c;c=()=>lr(b())}let h,d=b=>{h=A.onStop=()=>{ri(b,l,4),h=A.onStop=void 0}},g;if(wr)if(d=dn,e?n&&pn(e,l,3,[c(),f?[]:void 0,d]):c(),r==="sync"){const b=x0();g=b.__watcherHandles||(b.__watcherHandles=[])}else return dn;let x=f?new Array(t.length).fill(Bs):Bs;const m=()=>{if(A.active)if(e){const b=A.run();(i||u||(f?b.some((E,L)=>Li(E,x[L])):Li(b,x)))&&(h&&h(),pn(e,l,3,[b,x===Bs?void 0:f&&x[0]===Bs?[]:x,d]),x=b)}else A.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>Ut(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>ha(m));const A=new Mc(c,p);e?n?m():x=A.run():r==="post"?Ut(A.run.bind(A),l&&l.suspense):A.run();const _=()=>{A.stop(),l&&l.scope&&xc(l.scope.effects,A)};return g&&g.push(_),_}function Tg(t,e,n){const i=this.proxy,r=ot(t)?t.includes(".")?Yd(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=ht;Er(this);const a=Nc(r,s.bind(i),n);return o?Er(o):Ti(),a}function Yd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function lr(t,e){if(!nt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),yt(t))lr(t.value,e);else if(Be(t))for(let n=0;n<t.length;n++)lr(t[n],e);else if(md(t)||hr(t))t.forEach(n=>{lr(n,e)});else if(vd(t))for(const n in t)lr(t[n],e);return t}function gn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Dr(),pn(l,n,8,[t.el,a,t,e]),Ir())}}/*! #__NO_SIDE_EFFECTS__ */function Ag(t,e){return ze(t)?(()=>wt({name:t.name},e,{setup:t}))():t}const Jr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Au(t){ze(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((x,m)=>{a(g,()=>x(f()),()=>m(g),u+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Ag({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=ht;if(c)return()=>Fa(c,d);const g=A=>{l=null,Ur(A,d,13,!i)};if(o&&d.suspense||wr)return h().then(A=>()=>Fa(A,d)).catch(A=>(g(A),()=>i?dt(i,{error:A}):null));const x=pr(!1),m=pr(),p=pr(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!x.value&&!m.value){const A=new Error(`Async component timed out after ${s}ms.`);g(A),m.value=A}},s),h().then(()=>{x.value=!0,d.parent&&Dc(d.parent.vnode)&&ha(d.parent.update)}).catch(A=>{g(A),m.value=A}),()=>{if(x.value&&c)return Fa(c,d);if(m.value&&i)return dt(i,{error:m.value});if(n&&!p.value)return dt(n)}}})}function Fa(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=dt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Dc=t=>t.type.__isKeepAlive;function Rg(t,e){jd(t,"a",e)}function Cg(t,e){jd(t,"da",e)}function jd(t,e,n=ht){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Dc(r.parent.vnode)&&Pg(i,e,n,r),r=r.parent}}function Pg(t,e,n,i){const r=ma(e,t,i,!0);Kd(()=>{xc(i[e],r)},n)}function ma(t,e,n=ht,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dr(),Er(n);const a=pn(e,n,t,o);return Ti(),Ir(),a});return i?r.unshift(s):r.push(s),s}}const Gn=t=>(e,n=ht)=>(!wr||t==="sp")&&ma(t,(...i)=>e(...i),n),Lg=Gn("bm"),Ng=Gn("m"),Dg=Gn("bu"),Ig=Gn("u"),Ug=Gn("bum"),Kd=Gn("um"),Og=Gn("sp"),Fg=Gn("rtg"),Bg=Gn("rtc");function Zd(t,e=ht){ma("ec",t,e)}function Hg(t,e,n,i){let r;const s=n&&n[i];if(Be(t)||ot(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(nt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Il=t=>t?mp(t)?Bc(t)||t.proxy:Il(t.parent):null,Qr=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$emit:t=>t.emit,$options:t=>Ic(t),$forceUpdate:t=>t.f||(t.f=()=>ha(t.update)),$nextTick:t=>t.n||(t.n=Rc.bind(t.proxy)),$watch:t=>Tg.bind(t)}),Ba=(t,e)=>t!==it&&!t.__isScriptSetup&&Ze(t,e),zg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ba(i,e))return o[e]=1,i[e];if(r!==it&&Ze(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(n!==it&&Ze(n,e))return o[e]=4,n[e];Ul&&(o[e]=0)}}const u=Qr[e];let f,h;if(u)return e==="$attrs"&&Bt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==it&&Ze(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Ze(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ba(r,e)?(r[e]=n,!0):i!==it&&Ze(i,e)?(i[e]=n,!0):Ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==it&&Ze(t,o)||Ba(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(Qr,o)||Ze(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ru(t){return Be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ul=!0;function kg(t){const e=Ic(t),n=t.proxy,i=t.ctx;Ul=!1,e.beforeCreate&&Cu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:_,unmounted:b,render:E,renderTracked:L,renderTriggered:R,errorCaptured:z,serverPrefetch:M,expose:T,inheritAttrs:k,components:oe,directives:ae,filters:I}=e;if(c&&Gg(c,i,null),o)for(const X in o){const $=o[X];ze($)&&(i[X]=$.bind(n))}if(r){const X=r.call(n,n);nt(X)&&(t.data=Hn(X))}if(Ul=!0,s)for(const X in s){const $=s[X],se=ze($)?$.bind(n,n):ze($.get)?$.get.bind(n,n):dn,ue=!ze($)&&ze($.set)?$.set.bind(n):dn,B=_0({get:se,set:ue});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>B.value,set:Q=>B.value=Q})}if(a)for(const X in a)Jd(a[X],i,n,X);if(l){const X=ze(l)?l.call(n):l;Reflect.ownKeys(X).forEach($=>{ep($,X[$])})}u&&Cu(u,t,"c");function G(X,$){Be($)?$.forEach(se=>X(se.bind(n))):$&&X($.bind(n))}if(G(Lg,f),G(Ng,h),G(Dg,d),G(Ig,g),G(Rg,x),G(Cg,m),G(Zd,z),G(Bg,L),G(Fg,R),G(Ug,A),G(Kd,b),G(Og,M),Be(T))if(T.length){const X=t.exposed||(t.exposed={});T.forEach($=>{Object.defineProperty(X,$,{get:()=>n[$],set:se=>n[$]=se})})}else t.exposed||(t.exposed={});E&&t.render===dn&&(t.render=E),k!=null&&(t.inheritAttrs=k),oe&&(t.components=oe),ae&&(t.directives=ae)}function Gg(t,e,n=dn){Be(t)&&(t=Ol(t));for(const i in t){const r=t[i];let s;nt(r)?"default"in r?s=gr(r.from||i,r.default,!0):s=gr(r.from||i):s=gr(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Cu(t,e,n){pn(Be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jd(t,e,n,i){const r=i.includes(".")?Yd(n,i):()=>n[i];if(ot(t)){const s=e[t];ze(s)&&Oa(r,s)}else if(ze(t))Oa(r,t.bind(n));else if(nt(t))if(Be(t))t.forEach(s=>Jd(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&Oa(r,s,t)}}function Ic(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),nt(e)&&s.set(e,l),l}function Oo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Oo(t,s,n,!0),r&&r.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vg={data:Pu,props:Lu,emits:Lu,methods:qr,computed:qr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:qr,directives:qr,watch:Xg,provide:Pu,inject:Wg};function Pu(t,e){return e?t?function(){return wt(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function Wg(t,e){return qr(Ol(t),Ol(e))}function Ol(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function qr(t,e){return t?wt(Object.create(null),t,e):e}function Lu(t,e){return t?Be(t)&&Be(e)?[...new Set([...t,...e])]:wt(Object.create(null),Ru(t),Ru(e??{})):e}function Xg(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function Qd(){return{app:null,config:{isNativeTag:p_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function $g(t,e){return function(i,r=null){ze(i)||(i=wt({},i)),r!=null&&!nt(r)&&(r=null);const s=Qd(),o=new WeakSet;let a=!1;const l=s.app={_uid:qg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=dt(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Bc(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){hs=l;try{return c()}finally{hs=null}}};return l}}let hs=null;function ep(t,e){if(ht){let n=ht.provides;const i=ht.parent&&ht.parent.provides;i===n&&(n=ht.provides=Object.create(i)),n[t]=e}}function gr(t,e,n=!1){const i=ht||Vt;if(i||hs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:hs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}function tp(){return!!(ht||Vt||hs)}function Yg(t,e,n,i=!1){const r={},s={};Lo(s,_a,1),t.propsDefaults=Object.create(null),np(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Nd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function jg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(t.emitsOptions,h))continue;const d=e[h];if(l)if(Ze(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Sn(h);r[g]=Fl(l,a,g,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{np(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=Nr(f))===f||!Ze(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Fl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Bn(t,"set","$attrs")}function np(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let u;r&&Ze(r,u=Sn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(n),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Fl(r,l,f,c[f],t,!Ze(c,f))}}return o}function Fl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Er(r),i=c[n]=l.call(null,e),Ti())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Nr(n))&&(i=!0))}return i}function ip(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,d]=ip(f,e,!0);wt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return nt(t)&&i.set(t,fr),fr;if(Be(s))for(let u=0;u<s.length;u++){const f=Sn(s[u]);Nu(f)&&(o[f]=it)}else if(s)for(const u in s){const f=Sn(u);if(Nu(f)){const h=s[u],d=o[f]=Be(h)||ze(h)?{type:h}:wt({},h);if(d){const g=Uu(Boolean,d.type),x=Uu(String,d.type);d[0]=g>-1,d[1]=x<0||g<x,(g>-1||Ze(d,"default"))&&a.push(f)}}}const c=[o,a];return nt(t)&&i.set(t,c),c}function Nu(t){return t[0]!=="$"}function Du(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Iu(t,e){return Du(t)===Du(e)}function Uu(t,e){return Be(e)?e.findIndex(n=>Iu(n,t)):ze(e)&&Iu(e,t)?0:-1}const rp=t=>t[0]==="_"||t==="$stable",Uc=t=>Be(t)?t.map(Zt):[Zt(t)],Kg=(t,e,n)=>{if(e._n)return e;const i=Wd((...r)=>Uc(e(...r)),n);return i._c=!1,i},sp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(rp(r))continue;const s=t[r];if(ze(s))e[r]=Kg(r,s,i);else if(s!=null){const o=Uc(s);e[r]=()=>o}}},op=(t,e)=>{const n=Uc(e);t.slots.default=()=>n},Zg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Je(e),Lo(e,"_",n)):sp(e,t.slots={})}else t.slots={},e&&op(t,e);Lo(t.slots,_a,1)},Jg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(wt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,sp(e,r)),o=e}else e&&(op(t,e),o={default:1});if(s)for(const a in r)!rp(a)&&o[a]==null&&delete r[a]};function Fo(t,e,n,i,r=!1){if(Be(t)){t.forEach((h,d)=>Fo(h,e&&(Be(e)?e[d]:e),n,i,r));return}if(Jr(i)&&!r)return;const s=i.shapeFlag&4?Bc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ot(c)?(u[c]=null,Ze(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),ze(l))ri(l,a,12,[o,u]);else{const h=ot(l),d=yt(l);if(h||d){const g=()=>{if(t.f){const x=h?Ze(f,l)?f[l]:u[l]:l.value;r?Be(x)&&xc(x,s):Be(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Ze(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Ze(f,l)&&(f[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ut(g,n)):g()}}}let Wn=!1;const Hs=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",zs=t=>t.nodeType===8;function Qg(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),Io(),b._vnode=_;return}Wn=!1,f(b.firstChild,_,null,null,null),Io(),b._vnode=_,Wn&&console.error("Hydration completed but contains mismatches.")},f=(_,b,E,L,R,z=!1)=>{const M=zs(_)&&_.data==="[",T=()=>x(_,b,E,L,R,M),{type:k,ref:oe,shapeFlag:ae,patchFlag:I}=b;let W=_.nodeType;b.el=_,I===-2&&(z=!1,b.dynamicChildren=null);let G=null;switch(k){case br:W!==3?b.children===""?(l(b.el=r(""),o(_),_),G=_):G=T():(_.data!==b.children&&(Wn=!0,_.data=b.children),G=s(_));break;case ci:A(_)?(G=s(_),p(b.el=_.content.firstChild,_,E)):W!==8||M?G=T():G=s(_);break;case bo:if(M&&(_=s(_),W=_.nodeType),W===1||W===3){G=_;const X=!b.children.length;for(let $=0;$<b.staticCount;$++)X&&(b.children+=G.nodeType===1?G.outerHTML:G.data),$===b.staticCount-1&&(b.anchor=G),G=s(G);return M?s(G):G}else T();break;case Kt:M?G=g(_,b,E,L,R,z):G=T();break;default:if(ae&1)(W!==1||b.type.toLowerCase()!==_.tagName.toLowerCase())&&!A(_)?G=T():G=h(_,b,E,L,R,z);else if(ae&6){b.slotScopeIds=R;const X=o(_);if(M?G=m(_):zs(_)&&_.data==="teleport start"?G=m(_,_.data,"teleport end"):G=s(_),e(b,X,null,E,L,Hs(X),z),Jr(b)){let $;M?($=dt(Kt),$.anchor=G?G.previousSibling:X.lastChild):$=_.nodeType===3?pp(""):dt("div"),$.el=_,b.component.subTree=$}}else ae&64?W!==8?G=T():G=b.type.hydrate(_,b,E,L,R,z,t,d):ae&128&&(G=b.type.hydrate(_,b,E,L,Hs(o(_)),R,z,t,f))}return oe!=null&&Fo(oe,null,L,b),G},h=(_,b,E,L,R,z)=>{z=z||!!b.dynamicChildren;const{type:M,props:T,patchFlag:k,shapeFlag:oe,dirs:ae,transition:I}=b,W=M==="input"||M==="option";if(W||k!==-1){if(ae&&gn(b,null,E,"created"),T)if(W||!z||k&48)for(const $ in T)(W&&($.endsWith("value")||$==="indeterminate")||Es($)&&!Zr($)||$[0]===".")&&i(_,$,null,T[$],!1,void 0,E);else T.onClick&&i(_,"onClick",null,T.onClick,!1,void 0,E);let G;(G=T&&T.onVnodeBeforeMount)&&jt(G,E,b);let X=!1;if(A(_)){X=lp(L,I)&&E&&E.vnode.props&&E.vnode.props.appear;const $=_.content.firstChild;X&&I.beforeEnter($),p($,_,E),b.el=_=$}if(ae&&gn(b,null,E,"beforeMount"),((G=T&&T.onVnodeMounted)||ae||X)&&$d(()=>{G&&jt(G,E,b),X&&I.enter(_),ae&&gn(b,null,E,"mounted")},L),oe&16&&!(T&&(T.innerHTML||T.textContent))){let $=d(_.firstChild,b,_,E,L,R,z);for(;$;){Wn=!0;const se=$;$=$.nextSibling,a(se)}}else oe&8&&_.textContent!==b.children&&(Wn=!0,_.textContent=b.children)}return _.nextSibling},d=(_,b,E,L,R,z,M)=>{M=M||!!b.dynamicChildren;const T=b.children,k=T.length;for(let oe=0;oe<k;oe++){const ae=M?T[oe]:T[oe]=Zt(T[oe]);if(_)_=f(_,ae,L,R,z,M);else{if(ae.type===br&&!ae.children)continue;Wn=!0,n(null,ae,E,null,L,R,Hs(E),z)}}return _},g=(_,b,E,L,R,z)=>{const{slotScopeIds:M}=b;M&&(R=R?R.concat(M):M);const T=o(_),k=d(s(_),b,T,E,L,R,z);return k&&zs(k)&&k.data==="]"?s(b.anchor=k):(Wn=!0,l(b.anchor=c("]"),T,k),k)},x=(_,b,E,L,R,z)=>{if(Wn=!0,b.el=null,z){const k=m(_);for(;;){const oe=s(_);if(oe&&oe!==k)a(oe);else break}}const M=s(_),T=o(_);return a(_),n(null,b,T,M,E,L,Hs(T),R),M},m=(_,b="[",E="]")=>{let L=0;for(;_;)if(_=s(_),_&&zs(_)&&(_.data===b&&L++,_.data===E)){if(L===0)return s(_);L--}return _},p=(_,b,E)=>{const L=b.parentNode;L&&L.replaceChild(_,b);let R=E;for(;R;)R.vnode.el===b&&(R.vnode.el=R.subTree.el=_),R=R.parent},A=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[u,f]}const Ut=$d;function e0(t){return ap(t)}function t0(t){return ap(t,Qg)}function ap(t,e){const n=Rl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=dn,insertStaticContent:g}=t,x=(v,C,P,U=null,D=null,j=null,Y=!1,q=null,te=!!C.dynamicChildren)=>{if(v===C)return;v&&!ei(v,C)&&(U=Ue(v),Q(v,D,j,!0),v=null),C.patchFlag===-2&&(te=!1,C.dynamicChildren=null);const{type:Z,ref:xe,shapeFlag:S}=C;switch(Z){case br:m(v,C,P,U);break;case ci:p(v,C,P,U);break;case bo:v==null&&A(C,P,U,Y);break;case Kt:oe(v,C,P,U,D,j,Y,q,te);break;default:S&1?E(v,C,P,U,D,j,Y,q,te):S&6?ae(v,C,P,U,D,j,Y,q,te):(S&64||S&128)&&Z.process(v,C,P,U,D,j,Y,q,te,Oe)}xe!=null&&D&&Fo(xe,v&&v.ref,j,C||v,!C)},m=(v,C,P,U)=>{if(v==null)i(C.el=a(C.children),P,U);else{const D=C.el=v.el;C.children!==v.children&&c(D,C.children)}},p=(v,C,P,U)=>{v==null?i(C.el=l(C.children||""),P,U):C.el=v.el},A=(v,C,P,U)=>{[v.el,v.anchor]=g(v.children,C,P,U,v.el,v.anchor)},_=({el:v,anchor:C},P,U)=>{let D;for(;v&&v!==C;)D=h(v),i(v,P,U),v=D;i(C,P,U)},b=({el:v,anchor:C})=>{let P;for(;v&&v!==C;)P=h(v),r(v),v=P;r(C)},E=(v,C,P,U,D,j,Y,q,te)=>{Y=Y||C.type==="svg",v==null?L(C,P,U,D,j,Y,q,te):M(v,C,D,j,Y,q,te)},L=(v,C,P,U,D,j,Y,q)=>{let te,Z;const{type:xe,props:S,shapeFlag:y,transition:F,dirs:ne}=v;if(te=v.el=o(v.type,j,S&&S.is,S),y&8?u(te,v.children):y&16&&z(v.children,te,null,U,D,j&&xe!=="foreignObject",Y,q),ne&&gn(v,null,U,"created"),R(te,v,v.scopeId,Y,U),S){for(const le in S)le!=="value"&&!Zr(le)&&s(te,le,null,S[le],j,v.children,U,D,Re);"value"in S&&s(te,"value",null,S.value),(Z=S.onVnodeBeforeMount)&&jt(Z,U,v)}ne&&gn(v,null,U,"beforeMount");const ie=lp(D,F);ie&&F.beforeEnter(te),i(te,C,P),((Z=S&&S.onVnodeMounted)||ie||ne)&&Ut(()=>{Z&&jt(Z,U,v),ie&&F.enter(te),ne&&gn(v,null,U,"mounted")},D)},R=(v,C,P,U,D)=>{if(P&&d(v,P),U)for(let j=0;j<U.length;j++)d(v,U[j]);if(D){let j=D.subTree;if(C===j){const Y=D.vnode;R(v,Y,Y.scopeId,Y.slotScopeIds,D.parent)}}},z=(v,C,P,U,D,j,Y,q,te=0)=>{for(let Z=te;Z<v.length;Z++){const xe=v[Z]=q?Zn(v[Z]):Zt(v[Z]);x(null,xe,C,P,U,D,j,Y,q)}},M=(v,C,P,U,D,j,Y)=>{const q=C.el=v.el;let{patchFlag:te,dynamicChildren:Z,dirs:xe}=C;te|=v.patchFlag&16;const S=v.props||it,y=C.props||it;let F;P&&di(P,!1),(F=y.onVnodeBeforeUpdate)&&jt(F,P,C,v),xe&&gn(C,v,P,"beforeUpdate"),P&&di(P,!0);const ne=D&&C.type!=="foreignObject";if(Z?T(v.dynamicChildren,Z,q,P,U,ne,j):Y||$(v,C,q,null,P,U,ne,j,!1),te>0){if(te&16)k(q,C,S,y,P,U,D);else if(te&2&&S.class!==y.class&&s(q,"class",null,y.class,D),te&4&&s(q,"style",S.style,y.style,D),te&8){const ie=C.dynamicProps;for(let le=0;le<ie.length;le++){const ge=ie[le],fe=S[ge],_e=y[ge];(_e!==fe||ge==="value")&&s(q,ge,fe,_e,D,v.children,P,U,Re)}}te&1&&v.children!==C.children&&u(q,C.children)}else!Y&&Z==null&&k(q,C,S,y,P,U,D);((F=y.onVnodeUpdated)||xe)&&Ut(()=>{F&&jt(F,P,C,v),xe&&gn(C,v,P,"updated")},U)},T=(v,C,P,U,D,j,Y)=>{for(let q=0;q<C.length;q++){const te=v[q],Z=C[q],xe=te.el&&(te.type===Kt||!ei(te,Z)||te.shapeFlag&70)?f(te.el):P;x(te,Z,xe,null,U,D,j,Y,!0)}},k=(v,C,P,U,D,j,Y)=>{if(P!==U){if(P!==it)for(const q in P)!Zr(q)&&!(q in U)&&s(v,q,P[q],null,Y,C.children,D,j,Re);for(const q in U){if(Zr(q))continue;const te=U[q],Z=P[q];te!==Z&&q!=="value"&&s(v,q,Z,te,Y,C.children,D,j,Re)}"value"in U&&s(v,"value",P.value,U.value)}},oe=(v,C,P,U,D,j,Y,q,te)=>{const Z=C.el=v?v.el:a(""),xe=C.anchor=v?v.anchor:a("");let{patchFlag:S,dynamicChildren:y,slotScopeIds:F}=C;F&&(q=q?q.concat(F):F),v==null?(i(Z,P,U),i(xe,P,U),z(C.children,P,xe,D,j,Y,q,te)):S>0&&S&64&&y&&v.dynamicChildren?(T(v.dynamicChildren,y,P,D,j,Y,q),(C.key!=null||D&&C===D.subTree)&&cp(v,C,!0)):$(v,C,P,xe,D,j,Y,q,te)},ae=(v,C,P,U,D,j,Y,q,te)=>{C.slotScopeIds=q,v==null?C.shapeFlag&512?D.ctx.activate(C,P,U,Y,te):I(C,P,U,D,j,Y,te):W(v,C,te)},I=(v,C,P,U,D,j,Y)=>{const q=v.component=l0(v,U,D);if(Dc(v)&&(q.ctx.renderer=Oe),u0(q),q.asyncDep){if(D&&D.registerDep(q,G),!v.el){const te=q.subTree=dt(ci);p(null,te,C,P)}return}G(q,v,C,P,D,j,Y)},W=(v,C,P)=>{const U=C.component=v.component;if(_g(v,C,P))if(U.asyncDep&&!U.asyncResolved){X(U,C,P);return}else U.next=C,ug(U.update),U.update();else C.el=v.el,U.vnode=C},G=(v,C,P,U,D,j,Y)=>{const q=()=>{if(v.isMounted){let{next:xe,bu:S,u:y,parent:F,vnode:ne}=v,ie=xe,le;di(v,!1),xe?(xe.el=ne.el,X(v,xe,Y)):xe=ne,S&&Ia(S),(le=xe.props&&xe.props.onVnodeBeforeUpdate)&&jt(le,F,xe,ne),di(v,!0);const ge=Ua(v),fe=v.subTree;v.subTree=ge,x(fe,ge,f(fe.el),Ue(fe),v,D,j),xe.el=ge.el,ie===null&&Cc(v,ge.el),y&&Ut(y,D),(le=xe.props&&xe.props.onVnodeUpdated)&&Ut(()=>jt(le,F,xe,ne),D)}else{let xe;const{el:S,props:y}=C,{bm:F,m:ne,parent:ie}=v,le=Jr(C);if(di(v,!1),F&&Ia(F),!le&&(xe=y&&y.onVnodeBeforeMount)&&jt(xe,ie,C),di(v,!0),S&&De){const ge=()=>{v.subTree=Ua(v),De(S,v.subTree,v,D,null)};le?C.type.__asyncLoader().then(()=>!v.isUnmounted&&ge()):ge()}else{const ge=v.subTree=Ua(v);x(null,ge,P,U,v,D,j),C.el=ge.el}if(ne&&Ut(ne,D),!le&&(xe=y&&y.onVnodeMounted)){const ge=C;Ut(()=>jt(xe,ie,ge),D)}(C.shapeFlag&256||ie&&Jr(ie.vnode)&&ie.vnode.shapeFlag&256)&&v.a&&Ut(v.a,D),v.isMounted=!0,C=P=U=null}},te=v.effect=new Mc(q,()=>ha(Z),v.scope),Z=v.update=()=>te.run();Z.id=v.uid,di(v,!0),Z()},X=(v,C,P)=>{C.component=v;const U=v.vnode.props;v.vnode=C,v.next=null,jg(v,C.props,U,P),Jg(v,C.children,P),Dr(),Su(),Ir()},$=(v,C,P,U,D,j,Y,q,te=!1)=>{const Z=v&&v.children,xe=v?v.shapeFlag:0,S=C.children,{patchFlag:y,shapeFlag:F}=C;if(y>0){if(y&128){ue(Z,S,P,U,D,j,Y,q,te);return}else if(y&256){se(Z,S,P,U,D,j,Y,q,te);return}}F&8?(xe&16&&Re(Z,D,j),S!==Z&&u(P,S)):xe&16?F&16?ue(Z,S,P,U,D,j,Y,q,te):Re(Z,D,j,!0):(xe&8&&u(P,""),F&16&&z(S,P,U,D,j,Y,q,te))},se=(v,C,P,U,D,j,Y,q,te)=>{v=v||fr,C=C||fr;const Z=v.length,xe=C.length,S=Math.min(Z,xe);let y;for(y=0;y<S;y++){const F=C[y]=te?Zn(C[y]):Zt(C[y]);x(v[y],F,P,null,D,j,Y,q,te)}Z>xe?Re(v,D,j,!0,!1,S):z(C,P,U,D,j,Y,q,te,S)},ue=(v,C,P,U,D,j,Y,q,te)=>{let Z=0;const xe=C.length;let S=v.length-1,y=xe-1;for(;Z<=S&&Z<=y;){const F=v[Z],ne=C[Z]=te?Zn(C[Z]):Zt(C[Z]);if(ei(F,ne))x(F,ne,P,null,D,j,Y,q,te);else break;Z++}for(;Z<=S&&Z<=y;){const F=v[S],ne=C[y]=te?Zn(C[y]):Zt(C[y]);if(ei(F,ne))x(F,ne,P,null,D,j,Y,q,te);else break;S--,y--}if(Z>S){if(Z<=y){const F=y+1,ne=F<xe?C[F].el:U;for(;Z<=y;)x(null,C[Z]=te?Zn(C[Z]):Zt(C[Z]),P,ne,D,j,Y,q,te),Z++}}else if(Z>y)for(;Z<=S;)Q(v[Z],D,j,!0),Z++;else{const F=Z,ne=Z,ie=new Map;for(Z=ne;Z<=y;Z++){const Ae=C[Z]=te?Zn(C[Z]):Zt(C[Z]);Ae.key!=null&&ie.set(Ae.key,Z)}let le,ge=0;const fe=y-ne+1;let _e=!1,N=0;const pe=new Array(fe);for(Z=0;Z<fe;Z++)pe[Z]=0;for(Z=F;Z<=S;Z++){const Ae=v[Z];if(ge>=fe){Q(Ae,D,j,!0);continue}let Ee;if(Ae.key!=null)Ee=ie.get(Ae.key);else for(le=ne;le<=y;le++)if(pe[le-ne]===0&&ei(Ae,C[le])){Ee=le;break}Ee===void 0?Q(Ae,D,j,!0):(pe[Ee-ne]=Z+1,Ee>=N?N=Ee:_e=!0,x(Ae,C[Ee],P,null,D,j,Y,q,te),ge++)}const ce=_e?n0(pe):fr;for(le=ce.length-1,Z=fe-1;Z>=0;Z--){const Ae=ne+Z,Ee=C[Ae],Pe=Ae+1<xe?C[Ae+1].el:U;pe[Z]===0?x(null,Ee,P,Pe,D,j,Y,q,te):_e&&(le<0||Z!==ce[le]?B(Ee,P,Pe,2):le--)}}},B=(v,C,P,U,D=null)=>{const{el:j,type:Y,transition:q,children:te,shapeFlag:Z}=v;if(Z&6){B(v.component.subTree,C,P,U);return}if(Z&128){v.suspense.move(C,P,U);return}if(Z&64){Y.move(v,C,P,Oe);return}if(Y===Kt){i(j,C,P);for(let S=0;S<te.length;S++)B(te[S],C,P,U);i(v.anchor,C,P);return}if(Y===bo){_(v,C,P);return}if(U!==2&&Z&1&&q)if(U===0)q.beforeEnter(j),i(j,C,P),Ut(()=>q.enter(j),D);else{const{leave:S,delayLeave:y,afterLeave:F}=q,ne=()=>i(j,C,P),ie=()=>{S(j,()=>{ne(),F&&F()})};y?y(j,ne,ie):ie()}else i(j,C,P)},Q=(v,C,P,U=!1,D=!1)=>{const{type:j,props:Y,ref:q,children:te,dynamicChildren:Z,shapeFlag:xe,patchFlag:S,dirs:y}=v;if(q!=null&&Fo(q,null,P,v,!0),xe&256){C.ctx.deactivate(v);return}const F=xe&1&&y,ne=!Jr(v);let ie;if(ne&&(ie=Y&&Y.onVnodeBeforeUnmount)&&jt(ie,C,v),xe&6)Se(v.component,P,U);else{if(xe&128){v.suspense.unmount(P,U);return}F&&gn(v,null,C,"beforeUnmount"),xe&64?v.type.remove(v,C,P,D,Oe,U):Z&&(j!==Kt||S>0&&S&64)?Re(Z,C,P,!1,!0):(j===Kt&&S&384||!D&&xe&16)&&Re(te,C,P),U&&be(v)}(ne&&(ie=Y&&Y.onVnodeUnmounted)||F)&&Ut(()=>{ie&&jt(ie,C,v),F&&gn(v,null,C,"unmounted")},P)},be=v=>{const{type:C,el:P,anchor:U,transition:D}=v;if(C===Kt){Me(P,U);return}if(C===bo){b(v);return}const j=()=>{r(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:Y,delayLeave:q}=D,te=()=>Y(P,j);q?q(v.el,j,te):te()}else j()},Me=(v,C)=>{let P;for(;v!==C;)P=h(v),r(v),v=P;r(C)},Se=(v,C,P)=>{const{bum:U,scope:D,update:j,subTree:Y,um:q}=v;U&&Ia(U),D.stop(),j&&(j.active=!1,Q(Y,v,C,P)),q&&Ut(q,C),Ut(()=>{v.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Re=(v,C,P,U=!1,D=!1,j=0)=>{for(let Y=j;Y<v.length;Y++)Q(v[Y],C,P,U,D)},Ue=v=>v.shapeFlag&6?Ue(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),Ne=(v,C,P)=>{v==null?C._vnode&&Q(C._vnode,null,null,!0):x(C._vnode||null,v,C,null,null,null,P),Su(),Io(),C._vnode=v},Oe={p:x,um:Q,m:B,r:be,mt:I,mc:z,pc:$,pbc:T,n:Ue,o:t};let We,De;return e&&([We,De]=e(Oe)),{render:Ne,hydrate:We,createApp:$g(Ne,We)}}function di({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cp(t,e,n=!1){const i=t.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),n||cp(o,a)),a.type===br&&(a.el=o.el)}}function n0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const i0=t=>t.__isTeleport,Kt=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),ci=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),es=[];let tn=null;function cn(t=!1){es.push(tn=t?null:[])}function up(){es.pop(),tn=es[es.length-1]||null}let Mr=1;function Ou(t){Mr+=t}function fp(t){return t.dynamicChildren=Mr>0?tn||fr:null,up(),Mr>0&&tn&&tn.push(t),t}function Mo(t,e,n,i,r,s){return fp(ds(t,e,n,i,r,s,!0))}function or(t,e,n,i,r){return fp(dt(t,e,n,i,r,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const _a="__vInternal",hp=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ot(t)||yt(t)||ze(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function ds(t,e=null,n=null,i=0,r=null,s=t===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hp(e),ref:e&&So(e),scopeId:pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(Oc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ot(n)?8:16),Mr>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const dt=r0;function r0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Xd)&&(t=ci),Bo(t)){const a=Sr(t,e,!0);return n&&Oc(a,n),Mr>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(m0(t)&&(t=t.__vccOpts),e){e=dp(e);let{class:a,style:l}=e;a&&!ot(a)&&(e.class=ws(a)),nt(l)&&(Id(l)&&!Be(l)&&(l=wt({},l)),e.style=ua(l))}const o=ot(t)?1:vg(t)?128:i0(t)?64:nt(t)?4:ze(t)?2:0;return ds(t,e,n,i,r,o,s,!0)}function dp(t){return t?Id(t)||_a in t?wt({},t):t:null}function Sr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?s0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hp(a),ref:e&&e.ref?n&&r?Be(r)?r.concat(So(e)):[r,So(e)]:So(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pp(t=" ",e=0){return dt(br,null,t,e)}function Zt(t){return t==null||typeof t=="boolean"?dt(ci):Be(t)?dt(Kt,null,t.slice()):typeof t=="object"?Zn(t):dt(br,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function Oc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Be(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(_a in e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[pp(e)]):n=8);t.children=e,t.shapeFlag|=n}function s0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ws([e.class,i.class]));else if(r==="style")e.style=ua([e.style,i.style]);else if(Es(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function jt(t,e,n,i=null){pn(t,e,7,[n,i])}const o0=Qd();let a0=0;function l0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||o0,s={uid:a0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(i,r),emitsOptions:Vd(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hg.bind(null,s),t.ce&&t.ce(s),s}let ht=null;const c0=()=>ht||Vt;let Fc,ki,Fu="__VUE_INSTANCE_SETTERS__";(ki=Rl()[Fu])||(ki=Rl()[Fu]=[]),ki.push(t=>ht=t),Fc=t=>{ki.length>1?ki.forEach(e=>e(t)):ki[0](t)};const Er=t=>{Fc(t),t.scope.on()},Ti=()=>{ht&&ht.scope.off(),Fc(null)};function mp(t){return t.vnode.shapeFlag&4}let wr=!1;function u0(t,e=!1){wr=e;const{props:n,children:i}=t.vnode,r=mp(t);Yg(t,n,r,e),Zg(t,i);const s=r?f0(t,e):void 0;return wr=!1,s}function f0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ud(new Proxy(t.ctx,zg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?d0(t):null;Er(t),Dr();const s=ri(i,t,0,[t.props,r]);if(Ir(),Ti(),_d(s)){if(s.then(Ti,Ti),e)return s.then(o=>{Bl(t,o,e)}).catch(o=>{Ur(o,t,0)});t.asyncDep=s}else Bl(t,s,e)}else _p(t,e)}function Bl(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=Hd(e)),_p(t,n)}let Bu;function _p(t,e,n){const i=t.type;if(!t.render){if(!e&&Bu&&!i.render){const r=i.template||Ic(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:s,delimiters:a},o),l);i.render=Bu(r,c)}}t.render=i.render||dn}{Er(t),Dr();try{kg(t)}finally{Ir(),Ti()}}}function h0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}}))}function d0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return h0(t)},slots:t.slots,emit:t.emit,expose:e}}function Bc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hd(Ud(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qr)return Qr[n](t)},has(e,n){return n in e||n in Qr}}))}function p0(t,e=!0){return ze(t)?t.displayName||t.name:t.name||e&&t.__name}function m0(t){return ze(t)&&"__vccOpts"in t}const _0=(t,e)=>ag(t,e,wr);function g0(t,e,n){const i=arguments.length;return i===2?nt(e)&&!Be(e)?Bo(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bo(n)&&(n=[n]),dt(t,e,n))}const v0=Symbol.for("v-scx"),x0=()=>gr(v0),gp="3.3.9",y0="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,Hu=bi&&bi.createElement("template"),b0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?bi.createElementNS(y0,t):bi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>bi.createTextNode(t),createComment:t=>bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Hu.innerHTML=i?`<svg>${t}</svg>`:t;const a=Hu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},M0=Symbol("_vtc");function S0(t,e,n){const i=t[M0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const E0=Symbol("_vod");function w0(t,e,n){const i=t.style,r=ot(n);if(n&&!r){if(e&&!ot(e))for(const s in e)n[s]==null&&Hl(i,s,"");for(const s in n)Hl(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),E0 in t&&(i.display=s)}}const zu=/\s*!important$/;function Hl(t,e,n){if(Be(n))n.forEach(i=>Hl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=T0(t,e);zu.test(n)?t.setProperty(Nr(i),n.replace(zu,""),"important"):t[i]=n}}const ku=["Webkit","Moz","ms"],Ha={};function T0(t,e){const n=Ha[e];if(n)return n;let i=Sn(e);if(i!=="filter"&&i in t)return Ha[e]=i;i=ca(i);for(let r=0;r<ku.length;r++){const s=ku[r]+i;if(s in t)return Ha[e]=s}return e}const Gu="http://www.w3.org/1999/xlink";function A0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gu,e.slice(6,e.length)):t.setAttributeNS(Gu,e,n);else{const s=R_(e);n==null||s&&!xd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function R0(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function C0(t,e,n,i){t.addEventListener(e,n,i)}function P0(t,e,n,i){t.removeEventListener(e,n,i)}const Vu=Symbol("_vei");function L0(t,e,n,i,r=null){const s=t[Vu]||(t[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=N0(e);if(i){const c=s[e]=U0(i,r);C0(t,a,c,l)}else o&&(P0(t,a,o,l),s[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function N0(t){let e;if(Wu.test(t)){e={};let i;for(;i=t.match(Wu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let za=0;const D0=Promise.resolve(),I0=()=>za||(D0.then(()=>za=0),za=Date.now());function U0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;pn(O0(i,n.value),e,5,[i])};return n.value=t,n.attached=I0(),n}function O0(t,e){if(Be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xu=/^on[a-z]/,F0=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?S0(t,i,r):e==="style"?w0(t,n,i):Es(e)?vc(e)||L0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B0(t,e,i,r))?R0(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),A0(t,e,i,r))};function B0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Xu.test(e)&&ze(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xu.test(e)&&ot(n)?!1:e in t}const vp=wt({patchProp:F0},b0);let ts,qu=!1;function H0(){return ts||(ts=e0(vp))}function z0(){return ts=qu?ts:t0(vp),qu=!0,ts}const k0=(...t)=>{const e=H0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=xp(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},G0=(...t)=>{const e=z0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=xp(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function xp(t){return ot(t)?document.querySelector(t):t}const V0=/#/g,W0=/&/g,X0=/=/g,Hc=/\+/g,q0=/%5e/gi,$0=/%60/gi,Y0=/%7c/gi,j0=/%20/gi;function K0(t){return encodeURI(""+t).replace(Y0,"|")}function zl(t){return K0(typeof t=="string"?t:JSON.stringify(t)).replace(Hc,"%2B").replace(j0,"+").replace(V0,"%23").replace(W0,"%26").replace($0,"`").replace(q0,"^")}function ka(t){return zl(t).replace(X0,"%3D")}function Ho(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Z0(t){return Ho(t.replace(Hc," "))}function J0(t){return Ho(t.replace(Hc," "))}function yp(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=Z0(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=J0(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function Q0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ka(t)}=${zl(n)}`).join("&"):`${ka(t)}=${zl(e)}`:ka(t)}function bp(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Q0(e,t[e])).filter(Boolean).join("&")}const ev=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,tv=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,nv=/^([/\\]\s*){2,}[^/\\]/;function ga(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?ev.test(t):tv.test(t)||(e.acceptRelative?nv.test(t):!1)}const iv=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function rv(t){return!!t&&iv.test(t)}const sv=/\/$|\/\?|\/#/;function kl(t="",e){return e?sv.test(t):t.endsWith("/")}function Mp(t="",e){if(!e)return(kl(t)?t.slice(0,-1):t)||"/";if(!kl(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return(s.slice(0,-1)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Gl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(kl(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function ov(t=""){return t.startsWith("/")}function $u(t=""){return ov(t)?t:"/"+t}function av(t,e){if(Ep(e)||ga(t))return t;const n=Mp(e);return t.startsWith(n)?t:Or(n,t)}function lv(t,e){if(Ep(e))return t;const n=Mp(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Sp(t,e){const n=Ts(t),i={...yp(n.search),...e};return n.search=bp(i),wp(n)}function Ep(t){return!t||t==="/"}function cv(t){return t&&t!=="/"}const uv=/^\.?\//;function Or(t,...e){let n=t||"";for(const i of e.filter(r=>cv(r)))if(n){const r=i.replace(uv,"");n=Gl(n)+r}else n=i;return n}function fv(t,e,n={}){return n.trailingSlash||(t=Gl(t),e=Gl(e)),n.leadingSlash||(t=$u(t),e=$u(e)),n.encoding||(t=Ho(t),e=Ho(e)),t===e}function Ts(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!ga(t,{acceptRelative:!0}))return e?Ts(e+t):Yu(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Yu(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u}}function Yu(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function wp(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol?t.protocol+"//":"")+r+s+e+n+i}const hv=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},zo=hv().app,dv=()=>zo.baseURL,pv=()=>zo.buildAssetsDir,zc=(...t)=>Or(Tp(),pv(),...t),Tp=(...t)=>{const e=zo.cdnURL||zo.baseURL;return t.length?Or(e,...t):e};globalThis.__buildAssetsURL=zc,globalThis.__publicAssetsURL=Tp;const mv=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,_v=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,gv=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function vv(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){xv(t);return}return e}function xv(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ko(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.at(-1)==='"'&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!gv.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(mv.test(t)||_v.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,vv)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}class yv extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function bv(t){var l,c,u,f,h;const e=((l=t.error)==null?void 0:l.message)||((c=t.error)==null?void 0:c.toString())||"",n=((u=t.request)==null?void 0:u.method)||((f=t.options)==null?void 0:f.method)||"GET",i=((h=t.request)==null?void 0:h.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new yv(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[g]}});return a}const Mv=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ju(t="GET"){return Mv.has(t.toUpperCase())}function Sv(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Ev=new Set(["image/svg","application/xml","application/xhtml","application/html"]),wv=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Tv(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return wv.test(e)?"json":Ev.has(e)||e.startsWith("text/")?"text":"blob"}function Av(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const Rv=new Set([408,409,425,429,500,502,503,504]),Cv=new Set([101,204,205,304]);function Ap(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=ju(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Rv.has(f))){const h=a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=bv(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){var h;const u={request:l,options:Av(c,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(h=u.options.method)==null?void 0:h.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=av(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=Sp(u.request,{...u.options.params,...u.options.query}))),u.options.body&&ju(u.options.method)&&(Sv(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const d=new i;setTimeout(()=>d.abort(),u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await u.options.onRequestError(u),await r(u)}if(u.response.body&&!Cv.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||Tv(u.response.headers.get("content-type")||"");switch(d){case"json":{const g=await u.response.text(),x=u.options.parseResponse||ko;u.response._data=x(g);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={})=>Ap({...t,defaults:{...t.defaults,...a}}),o}const kc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Pv=kc.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Lv=kc.Headers,Nv=kc.AbortController,Dv=Ap({fetch:Pv,Headers:Lv,AbortController:Nv}),Iv=Dv;globalThis.$fetch||(globalThis.$fetch=Iv.create({baseURL:dv()}));function Vl(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?Vl(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const Uv={run:t=>t()},Ov=()=>Uv,Rp=typeof console.createTask<"u"?console.createTask:Ov;function Fv(t,e){const n=e.shift(),i=Rp(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function Bv(t,e){const n=e.shift(),i=Rp(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function Ga(t,e){for(const n of[...t])n(e)}class Hv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Vl(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=Vl(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Fv,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Bv,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Ga(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Ga(this._after,r)}):(this._after&&r&&Ga(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Cp(){return new Hv}function zv(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;Wl.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{Wl.delete(c)}}}}function kv(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=zv({...t,...i})),e[n],e[n]}}}const Go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ku="__unctx__",Gv=Go[Ku]||(Go[Ku]=kv()),Vv=(t,e={})=>Gv.get(t,e),Zu="__unctx_async_handlers__",Wl=Go[Zu]||(Go[Zu]=new Set);function Pp(t){const e=[];for(const r of Wl){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Lp=Vv("nuxt-app",{asyncContext:!1}),Wv="__nuxt_plugin";function Xv(t){let e=0;const n={_scope:P_(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.8.2"},get vue(){return n.vueApp.version}},payload:Hn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>n._scope.run(()=>Yv(n,r)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Cp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;ks(n,o,s),ks(n.vueApp.config.globalProperties,o,s)},ks(n.vueApp,"$nuxt",n),ks(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||Mt;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=Hn(n.payload.config);return n.provide("config",i),n}async function qv(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function $v(t,e){const n=[],i=[];for(const r of e){const s=qv(t,r);r.parallel?n.push(s.catch(o=>i.push(o))):await s}if(await Promise.all(n),i.length)throw i[0]}/*! @__NO_SIDE_EFFECTS__ */function Bi(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[Wv]:!0}))}function Yv(t,e,n){const i=()=>n?e(...n):e();return Lp.set(t),t.vueApp.runWithContext(i)}/*! @__NO_SIDE_EFFECTS__ */function Mt(){var e;let t;if(tp()&&(t=(e=c0())==null?void 0:e.appContext.app.$nuxt),t=t||Lp.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function Vo(){return Mt().$config}function ks(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const jv="modulepreload",Kv=function(t,e){return t[0]==="."?new URL(t,e).href:t},Ju={},Zv=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Kv(s,i),s in Ju)return;Ju[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":jv,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Qu=(...t)=>Zv(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Jv=-1,Qv=-2,ex=-3,tx=-4,nx=-5,ix=-6;function rx(t,e){return sx(JSON.parse(t),e)}function sx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===Jv)return;if(s===ex)return NaN;if(s===tx)return 1/0;if(s===nx)return-1/0;if(s===ix)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let d=1;d<a.length;d+=1)u.add(r(a[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Qv&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}function ox(t){return Array.isArray(t)?t:[t]}const ax=["title","titleTemplate","script","style","noscript"],Eo=["base","meta","link","style","script","noscript"],lx=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],cx=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Np=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],ux=typeof window<"u";function Gc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ef(t){return t._h||Gc(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Dp(t,e){const{props:n,tag:i}=t;if(cx.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${i}:${s}:${o}`}return!1}function tf(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function fx(t,e,n){const i={tag:t,props:await Ip(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return Np.forEach(r=>{const s=typeof i.props[r]<"u"?i.props[r]:n[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||ax.includes(i.tag))&&(i[r==="children"?"innerHTML":r]=s),delete i.props[r])}),i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function hx(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function Ip(t,e){for(const n of Object.keys(t)){if(n==="class"){t[n]=hx(t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!Np.includes(n)){const i=String(t[n]),r=n.startsWith("data-");i==="true"||i===""?t[n]=r?"true":!0:t[n]||(r&&i==="false"?t[n]="false":delete t[n])}}return t}const dx=10;async function px(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&lx.includes(n)).forEach(([n,i])=>{const r=ox(i);e.push(...r.map(s=>fx(n,s,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<dx)+i,n))}const nf={base:-10,title:10},rf={critical:-80,high:-10,low:20};function Wo(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in nf&&(e=nf[t.tag]),typeof n=="string"&&n in rf?e+rf[n]:e)}const mx=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Up=["onload","onerror","onabort","onprogress","onloadstart"],Xn="%separator";function wo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function i(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=i(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())}),t.includes(Xn)&&(t.endsWith(Xn)&&(t=t.slice(0,-Xn.length).trim()),t.startsWith(Xn)&&(t=t.slice(Xn.length).trim()),t=t.replace(new RegExp(`\\${Xn}\\s*\\${Xn}`,"g"),Xn),t=wo(t,{separator:n},n)),t}async function _x(t){const e={tag:t.tagName.toLowerCase(),props:await Ip(t.getAttributeNames().reduce((n,i)=>({...n,[i]:t.getAttribute(i)}),{})),innerHTML:t.innerHTML};return e._d=Dp(e),e}async function Op(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const i={shouldRender:t.dirty,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const r=(await t.resolveTags()).map(f=>({tag:f,id:Eo.includes(f.tag)?ef(f):f.tag,shouldRender:!0}));let s=t._dom;if(!s){s={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const h=(u=n==null?void 0:n[f])==null?void 0:u.children;for(const d of[...h].filter(g=>Eo.includes(g.tagName.toLowerCase())))s.elMap[d.getAttribute("data-hid")||ef(await _x(d))]=d}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function o(f,h,d){const g=`${f}:${h}`;s.sideEffects[g]=d,delete s.pendingSideEffects[g]}function a({id:f,$el:h,tag:d}){const g=d.tag.endsWith("Attrs");s.elMap[f]=h,g||(["textContent","innerHTML"].forEach(x=>{d[x]&&d[x]!==h[x]&&(h[x]=d[x])}),o(f,"el",()=>{s.elMap[f].remove(),delete s.elMap[f]})),Object.entries(d.props).forEach(([x,m])=>{const p=`attr:${x}`;if(x==="class")for(const A of(m||"").split(" ").filter(Boolean))g&&o(f,`${p}:${A}`,()=>h.classList.remove(A)),!h.classList.contains(A)&&h.classList.add(A);else h.getAttribute(x)!==m&&h.setAttribute(x,m===!0?"":String(m)),g&&o(f,p,()=>h.removeAttribute(x))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:h,shouldRender:d,id:g}=f;if(d){if(h.tag==="title"){n.title=h.textContent;continue}f.$el=f.$el||s.elMap[g],f.$el?a(f):Eo.includes(h.tag)&&l.push(f)}}for(const f of l){const h=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),c[h]=c[h]||n.createDocumentFragment(),c[h].appendChild(f.$el)}for(const f of r)await t.hooks.callHook("dom:renderTag",f,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(s.pendingSideEffects).forEach(f=>f()),t._dom=s,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:r})}async function gx(t,e={}){const n=e.delayFn||(i=>setTimeout(i,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(i=>n(async()=>{await Op(t,e),delete t._domUpdatePromise,i()}))}function vx(t){return e=>{var i,r;const n=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(s){gx(s,t)}}}}}const xx=["templateParams","htmlAttrs","bodyAttrs"],yx={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=Dp(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&xx.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{i.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`)}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(Wo(i)>Wo(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Eo.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n,t.tags=t.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},bx={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Mx=["script","link","bodyAttrs"];function Sx(t){const e={},n={};return Object.entries(t.props).forEach(([i,r])=>{i.startsWith("on")&&typeof r=="function"?(Up.includes(i)&&(e[i]=`this.dataset.${i} = true`),n[i]=r):e[i]=r}),{props:e,eventHandlers:n}}const Ex=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags)if(Mx.includes(n.tag)){const{props:i,eventHandlers:r}=Sx(n);n.props=i,Object.keys(r).length&&((n.props.src||n.props.href)&&(n.key=n.key||Gc(n.props.src||n.props.href)),n._eventHandlers=r)}},"dom:renderTag":function(e,n,i){if(!e.tag._eventHandlers)return;const r=e.tag.tag==="bodyAttrs"?n.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([s,o])=>{const a=`${e.tag._d||e.tag._p}:${s}`,l=s.slice(2).toLowerCase(),c=`data-h-${l}`;if(i(e.id,a,()=>{}),e.$el.hasAttribute(c))return;e.$el.setAttribute(c,"");let u;const f=h=>{o(h),u==null||u.disconnect()};s in e.$el.dataset?f(new Event(s.replace("on",""))):Up.includes(s)&&typeof MutationObserver<"u"?(u=new MutationObserver(h=>{h.some(g=>g.attributeName===`data-${s}`)&&(f(new Event(s.replace("on",""))),u==null||u.disconnect())}),u.observe(e.$el,{attributes:!0})):r.addEventListener(l,f),i(e.id,a,()=>{u==null||u.disconnect(),r.removeEventListener(l,f),e.$el.removeAttribute(c)})})}}}),wx=["link","style","script","noscript"],Tx={hooks:{"tag:normalise":({tag:t})=>{t.key&&wx.includes(t.tag)&&(t.props["data-hid"]=t._h=Gc(t.key))}}},Ax={hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of mx)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>Wo(n)-Wo(i))}}},Rx={meta:"content",link:"href",htmlAttrs:"lang"},Cx=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,i=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,r=n.findIndex(l=>l.tag==="templateParams"),s=r!==-1?n[r].props:{},o=s.separator||"|";delete s.separator,s.pageTitle=wo(s.pageTitle||i||"",s,o);for(const l of n.filter(c=>c.processTemplateParams!==!1)){const c=Rx[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=wo(l.props[c],s,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=wo(l[u],s,o))})}t._templateParams=s,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),Px={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=tf(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=tf(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},Lx={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Fp;function Nx(t={}){const e=Dx(t);return e.use(vx()),Fp=e}function sf(t,e){return!t||t==="server"&&e||t==="client"&&!e}function Dx(t={}){const e=Cp();e.addHooks(t.hooks||{}),t.document=t.document||(ux?document:void 0);const n=!t.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return s},use(l){const c=typeof l=="function"?l(a):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),sf(c.mode,n)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return sf(u.mode,n)&&(s.push(u),i()),{dispose(){s=s.filter(f=>f._i!==u._i),e.callHook("entries:updated",a),i()},patch(f){s=s.map(h=>(h._i===u._i&&(h.input=u.input=f),h)),i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await px(c)){const h={tag:f,entry:c,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[yx,bx,Ex,Tx,Ax,Cx,Px,Lx,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function Ix(){return Fp}const Ux=gp.startsWith("3");function Ox(t){return typeof t=="function"?t():vt(t)}function Xl(t,e=""){if(t instanceof Promise)return t;const n=Ox(t);return!t||!n?n:Array.isArray(n)?n.map(i=>Xl(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,vt(r)]:[i,Xl(r,i)])):n}const Fx={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Xl(e.input)}}},Bp="usehead";function Bx(t){return{install(n){Ux&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Bp,t))}}.install}function Hx(t={}){t.domDelayFn=t.domDelayFn||(n=>Rc(()=>setTimeout(()=>n(),0)));const e=Nx(t);return e.use(Fx),e.install=Bx(e),e}const ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$l="__unhead_injection_handler__";function zx(t){ql[$l]=t}function BP(){if($l in ql)return ql[$l]();const t=gr(Bp);return t||Ix()}function kx(t){return{ctx:{table:t},matchAll:e=>zp(e,t)}}function Hp(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,Hp(r)])):new Map(Object.entries(t[n]));return e}function Gx(t){return kx(Hp(t))}function zp(t,e){const n=[];for(const[r,s]of of(e.wildcard))t.startsWith(r)&&n.push(s);for(const[r,s]of of(e.dynamic))if(t.startsWith(r+"/")){const o="/"+t.slice(r.length).split("/").splice(2).join("/");n.push(...zp(o,s))}const i=e.static.get(t);return i&&n.push(i),n.filter(Boolean)}function of(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Yl(t,e,n=".",i){if(!Va(e))return Yl(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Va(o)&&Va(r[s])?r[s]=Yl(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function Va(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function kp(t){return(...e)=>e.reduce((n,i)=>Yl(n,i,"",t),{})}const Vx=kp(),Wx=kp((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function Xx(t,e){try{return e in t}catch{return!1}}var qx=Object.defineProperty,$x=(t,e,n)=>e in t?qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,vi=(t,e,n)=>($x(t,typeof e!="symbol"?e+"":e,n),n);class jl extends Error{constructor(e,n={}){super(e,n),vi(this,"statusCode",500),vi(this,"fatal",!1),vi(this,"unhandled",!1),vi(this,"statusMessage"),vi(this,"data"),vi(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Kl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Gp(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}vi(jl,"__h3_error__",!0);function Yx(t){if(typeof t=="string")return new jl(t);if(jx(t))return t;const e=new jl(t.message??t.statusMessage??"",{cause:t.cause||t});if(Xx(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Kl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Kl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Gp(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function jx(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Kx=/[^\u0009\u0020-\u007E]/g;function Gp(t=""){return t.replace(Kx,"")}function Kl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Vp=Symbol("route"),Vc=()=>rg(Mt().payload,"error"),Zx=t=>{const e=Wp(t);try{const n=Mt(),i=Vc();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},Jx=async(t={})=>{const e=Mt(),n=Vc();e.callHook("app:error:cleared",t),t.redirect&&await va().replace(t.redirect),n.value=null},Qx=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Wp=t=>{const e=Yx(t);return e.__nuxt_error=!0,e},va=()=>{var t;return(t=Mt())==null?void 0:t.$router},Xp=()=>tp()?gr(Vp,Mt()._route):Mt()._route;/*! @__NO_SIDE_EFFECTS__ */const ey=()=>{try{if(Mt()._processingMiddleware)return!0}catch{return!0}return!1},ty=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Sp(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(e==null?void 0:e.external)||ga(n,{acceptRelative:!0});if(i){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Ts(n).protocol;if(a&&rv(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const r=ey();if(!i&&r)return t;const s=va(),o=Mt();return i?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},ny={nuxt:{buildId:"9f395e7b-568d-4a55-83b4-80c1ab699345"}},iy=Wx(ny);function ry(){const t=Mt();return t._appConfig||(t._appConfig=Hn(iy)),t._appConfig}const HP={componentName:"NuxtLink"},sy="#__nuxt";let To,qp;function oy(){var e;const t=(e=ry().nuxt)==null?void 0:e.buildId;return To=$fetch(zc(`builds/meta/${t}.json`)),To.then(n=>{qp=Gx(n.matcher)}),To}function xa(){return To||oy()}async function $p(t){return await xa(),Vx({},...qp.matchAll(t).reverse())}function af(t,e={}){const n=ay(t,e),i=Mt(),r=i._payloadCache=i._payloadCache||{};return n in r||(r[n]=ly(t).then(s=>s?Yp(n).then(o=>o||(delete r[n],null)):(r[n]=null,null))),r[n]}const lf="json";function ay(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||ga(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():"");return Or(Vo().app.baseURL,n.pathname,i?`_payload.${i}.${lf}`:`_payload.${lf}`)}async function Yp(t){const e=fetch(t).then(n=>n.text().then(jp));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function ly(t=Xp().path){if((await xa()).prerendered.includes(t))return!0;const n=await $p(t);return!!n.prerender&&!n.redirect}let Gs=null;async function cy(){if(Gs)return Gs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=jp(t.textContent||""),n=t.dataset.src?await Yp(t.dataset.src):void 0;return Gs={...e,...n,...window.__NUXT__},Gs}function jp(t){return rx(t,Mt()._payloadRevivers)}function uy(t,e){Mt()._payloadRevivers[t]=e}const cf={NuxtError:t=>Wp(t),EmptyShallowRef:t=>Mu(t==="_"?void 0:t==="0n"?BigInt(0):ko(t)),EmptyRef:t=>pr(t==="_"?void 0:t==="0n"?BigInt(0):ko(t)),ShallowRef:t=>Mu(t),ShallowReactive:t=>Nd(t),Ref:t=>pr(t),Reactive:t=>Hn(t)},fy=Bi({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in cf)uy(i,cf[i]);Object.assign(t.payload,([e,n]=Pp(()=>t.runWithContext(cy)),e=await e,n(),e)),window.__NUXT__=t.payload}}),hy=[],dy=Bi({name:"nuxt:head",enforce:"pre",setup(t){const e=Hx({plugins:hy});zx(()=>Mt().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await Op(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}}),py=async t=>{let e,n;const i=([e,n]=Pp(()=>$p(t.path)),e=await e,n(),e);if(i.redirect)return i.redirect},my=[py];function Wa(t){typeof t=="object"&&(t=wp({pathname:t.path||"",search:bp(t.query||{}),hash:t.hash||""}));const e=Ts(t.toString());return{path:e.pathname,fullPath:t,query:yp(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:t}}const _y=Bi({name:"nuxt:router",enforce:"pre",setup(t){const e=lv(window.location.pathname,Vo().app.baseURL)+window.location.search+window.location.hash,n=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(u,f)=>(i[u].push(f),()=>i[u].splice(i[u].indexOf(f),1)),s=Vo().app.baseURL,o=Hn(Wa(e));async function a(u,f){try{const h=Wa(u);for(const d of i["navigate:before"]){const g=await d(h,o);if(g===!1||g instanceof Error)return;if(typeof g=="string"&&g.length)return a(g,!0)}for(const d of i["resolve:before"])await d(h,o);Object.assign(o,h),window.history[f?"replaceState":"pushState"]({},"",Or(s,h.fullPath)),t.isHydrating||await t.runWithContext(Jx);for(const d of i["navigate:after"])await d(h,o)}catch(h){for(const d of i.error)await d(h)}}const l={currentRoute:o,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>a(u,!1),replace:u=>a(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>r("resolve:before",u),beforeEach:u=>r("navigate:before",u),afterEach:u=>r("navigate:after",u),onError:u=>r("error",u),resolve:Wa,addRoute:(u,f)=>{n.push(f)},getRoutes:()=>n,hasRoute:u=>n.some(f=>f.name===u),removeRoute:u=>{const f=n.findIndex(h=>h.name===u);f!==-1&&n.splice(f,1)}};t.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:f})=>{const h=()=>a(u.to,u.replace);return()=>{var g;const d=l.resolve(u.to);return u.custom?(g=f.default)==null?void 0:g.call(f,{href:u.to,navigate:h,route:d}):g0("a",{href:u.to,onClick:x=>(x.preventDefault(),h())},f)}}}),window.addEventListener("popstate",u=>{const f=u.target.location;l.replace(f.href.replace(f.origin,""))}),t._route=o,t._middleware=t._middleware||{global:[],named:{}};const c=t.payload.state._layout;return t.hooks.hookOnce("app:created",async()=>{l.beforeEach(async(u,f)=>{u.meta=Hn(u.meta||{}),t.isHydrating&&c&&!Ni(u.meta.layout)&&(u.meta.layout=c),t._processingMiddleware=!0;{const h=new Set([...my,...t._middleware.global]);for(const d of h){const g=await t.runWithContext(()=>d(u,f));if(g!==!0&&(g||g===!1))return g}}}),l.afterEach(()=>{delete t._processingMiddleware}),await l.replace(e),fv(o.fullPath,e)||await t.runWithContext(()=>ty(o.fullPath))}),{provide:{route:o,router:l}}}}),uf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),zP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Kp=t=>{const e=Mt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{uf(t)}):uf(t)},gy=Bi({name:"nuxt:payload",setup(t){va().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await af(e.path);i&&Object.assign(t.static.data,i.data)}),Kp(()=>{var e;t.hooks.hook("link:prefetch",async n=>{Ts(n).protocol||await af(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(xa,1e3)})}}),vy=Bi({name:"nuxt:global-components"});function xy(t={}){const e=t.path||window.location.pathname;let n={};try{n=ko(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Mt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const yy=Bi({name:"nuxt:chunk-reload",setup(t){const e=va(),n=Vo(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href.startsWith("#")?n.app.baseURL+s.href:Or(n.app.baseURL,s.fullPath);xy({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),by=Bi(t=>{let e;async function n(){const i=await xa();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);const r=await $fetch(zc("builds/latest.json"));r.id!==i.id&&t.hooks.callHook("app:manifest:update",r)}Kp(()=>{e=setTimeout(n,1e3*60*60)})}),My=[fy,dy,_y,gy,vy,yy,by];class ff extends Map{constructor(e,n=wy){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(hf(this,e))}has(e){return super.has(hf(this,e))}set(e,n){return super.set(Sy(this,e),n)}delete(e){return super.delete(Ey(this,e))}}function hf({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function Sy({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function Ey({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function wy(t){return t!==null&&typeof t=="object"?t.valueOf():t}var Ty={value:()=>{}};function Zp(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ao(n)}function Ao(t){this._=t}function Ay(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ao.prototype=Zp.prototype={constructor:Ao,on:function(t,e){var n=this._,i=Ay(t+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(t=i[s]).type)&&(r=Ry(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=i[s]).type)n[r]=df(n[r],t.name,e);else if(e==null)for(r in n)n[r]=df(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ao(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function Ry(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function df(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=Ty,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Zl="http://www.w3.org/1999/xhtml";const pf={svg:"http://www.w3.org/2000/svg",xhtml:Zl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ya(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),pf.hasOwnProperty(e)?{space:pf[e],local:t}:t}function Cy(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Zl&&e.documentElement.namespaceURI===Zl?e.createElement(t):e.createElementNS(n,t)}}function Py(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Jp(t){var e=ya(t);return(e.local?Py:Cy)(e)}function Ly(){}function Wc(t){return t==null?Ly:function(){return this.querySelector(t)}}function Ny(t){typeof t!="function"&&(t=Wc(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=t.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new qt(i,this._parents)}function Dy(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Iy(){return[]}function Qp(t){return t==null?Iy:function(){return this.querySelectorAll(t)}}function Uy(t){return function(){return Dy(t.apply(this,arguments))}}function Oy(t){typeof t=="function"?t=Uy(t):t=Qp(t);for(var e=this._groups,n=e.length,i=[],r=[],s=0;s<n;++s)for(var o=e[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(t.call(l,l.__data__,c,o)),r.push(l));return new qt(i,r)}function em(t){return function(){return this.matches(t)}}function tm(t){return function(e){return e.matches(t)}}var Fy=Array.prototype.find;function By(t){return function(){return Fy.call(this.children,t)}}function Hy(){return this.firstElementChild}function zy(t){return this.select(t==null?Hy:By(typeof t=="function"?t:tm(t)))}var ky=Array.prototype.filter;function Gy(){return Array.from(this.children)}function Vy(t){return function(){return ky.call(this.children,t)}}function Wy(t){return this.selectAll(t==null?Gy:Vy(typeof t=="function"?t:tm(t)))}function Xy(t){typeof t!="function"&&(t=em(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new qt(i,this._parents)}function nm(t){return new Array(t.length)}function qy(){return new qt(this._enter||this._groups.map(nm),this._parents)}function Xo(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Xo.prototype={constructor:Xo,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function $y(t){return function(){return t}}function Yy(t,e,n,i,r,s){for(var o=0,a,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],i[o]=a):n[o]=new Xo(t,s[o]);for(;o<l;++o)(a=e[o])&&(r[o]=a)}function jy(t,e,n,i,r,s,o){var a,l,c=new Map,u=e.length,f=s.length,h=new Array(u),d;for(a=0;a<u;++a)(l=e[a])&&(h[a]=d=o.call(l,l.__data__,a,e)+"",c.has(d)?r[a]=l:c.set(d,l));for(a=0;a<f;++a)d=o.call(t,s[a],a,s)+"",(l=c.get(d))?(i[a]=l,l.__data__=s[a],c.delete(d)):n[a]=new Xo(t,s[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(h[a])===l&&(r[a]=l)}function Ky(t){return t.__data__}function Zy(t,e){if(!arguments.length)return Array.from(this,Ky);var n=e?jy:Yy,i=this._parents,r=this._groups;typeof t!="function"&&(t=$y(t));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],f=r[c],h=f.length,d=Jy(t.call(u,u&&u.__data__,c,i)),g=d.length,x=a[c]=new Array(g),m=o[c]=new Array(g),p=l[c]=new Array(h);n(u,f,x,m,p,d,e);for(var A=0,_=0,b,E;A<g;++A)if(b=x[A]){for(A>=_&&(_=A+1);!(E=m[_])&&++_<g;);b._next=E||null}}return o=new qt(o,i),o._enter=a,o._exit=l,o}function Jy(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Qy(){return new qt(this._exit||this._groups.map(nm),this._parents)}function eb(t,e,n){var i=this.enter(),r=this,s=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?s.remove():n(s),i&&r?i.merge(r).order():r}function tb(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=n[l],u=i[l],f=c.length,h=a[l]=new Array(f),d,g=0;g<f;++g)(d=c[g]||u[g])&&(h[g]=d);for(;l<r;++l)a[l]=n[l];return new qt(a,this._parents)}function nb(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function ib(t){t||(t=rb);function e(f,h){return f&&h?t(f.__data__,h.__data__):!f-!h}for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var o=n[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(e)}return new qt(r,this._parents).order()}function rb(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function sb(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function ob(){return Array.from(this)}function ab(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function lb(){let t=0;for(const e of this)++t;return t}function cb(){return!this.node()}function ub(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],s=0,o=r.length,a;s<o;++s)(a=r[s])&&t.call(a,a.__data__,s,r);return this}function fb(t){return function(){this.removeAttribute(t)}}function hb(t){return function(){this.removeAttributeNS(t.space,t.local)}}function db(t,e){return function(){this.setAttribute(t,e)}}function pb(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function mb(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function _b(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function gb(t,e){var n=ya(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?hb:fb:typeof e=="function"?n.local?_b:mb:n.local?pb:db)(n,e))}function im(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function vb(t){return function(){this.style.removeProperty(t)}}function xb(t,e,n){return function(){this.style.setProperty(t,e,n)}}function yb(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function bb(t,e,n){return arguments.length>1?this.each((e==null?vb:typeof e=="function"?yb:xb)(t,e,n??"")):Tr(this.node(),t)}function Tr(t,e){return t.style.getPropertyValue(e)||im(t).getComputedStyle(t,null).getPropertyValue(e)}function Mb(t){return function(){delete this[t]}}function Sb(t,e){return function(){this[t]=e}}function Eb(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function wb(t,e){return arguments.length>1?this.each((e==null?Mb:typeof e=="function"?Eb:Sb)(t,e)):this.node()[t]}function rm(t){return t.trim().split(/^|\s+/)}function Xc(t){return t.classList||new sm(t)}function sm(t){this._node=t,this._names=rm(t.getAttribute("class")||"")}sm.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function om(t,e){for(var n=Xc(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function am(t,e){for(var n=Xc(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function Tb(t){return function(){om(this,t)}}function Ab(t){return function(){am(this,t)}}function Rb(t,e){return function(){(e.apply(this,arguments)?om:am)(this,t)}}function Cb(t,e){var n=rm(t+"");if(arguments.length<2){for(var i=Xc(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?Rb:e?Tb:Ab)(n,e))}function Pb(){this.textContent=""}function Lb(t){return function(){this.textContent=t}}function Nb(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Db(t){return arguments.length?this.each(t==null?Pb:(typeof t=="function"?Nb:Lb)(t)):this.node().textContent}function Ib(){this.innerHTML=""}function Ub(t){return function(){this.innerHTML=t}}function Ob(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Fb(t){return arguments.length?this.each(t==null?Ib:(typeof t=="function"?Ob:Ub)(t)):this.node().innerHTML}function Bb(){this.nextSibling&&this.parentNode.appendChild(this)}function Hb(){return this.each(Bb)}function zb(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function kb(){return this.each(zb)}function Gb(t){var e=typeof t=="function"?t:Jp(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Vb(){return null}function Wb(t,e){var n=typeof t=="function"?t:Jp(t),i=e==null?Vb:typeof e=="function"?e:Wc(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Xb(){var t=this.parentNode;t&&t.removeChild(this)}function qb(){return this.each(Xb)}function $b(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Yb(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function jb(t){return this.select(t?Yb:$b)}function Kb(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Zb(t){return function(e){t.call(this,e,this.__data__)}}function Jb(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function Qb(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,s;n<r;++n)s=e[n],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function eM(t,e,n){return function(){var i=this.__on,r,s=Zb(e);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=e;return}}this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function tM(t,e,n){var i=Jb(t+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?eM:Qb,r=0;r<s;++r)this.each(a(i[r],e,n));return this}function lm(t,e,n){var i=im(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function nM(t,e){return function(){return lm(this,t,e)}}function iM(t,e){return function(){return lm(this,t,e.apply(this,arguments))}}function rM(t,e){return this.each((typeof e=="function"?iM:nM)(t,e))}function*sM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var cm=[null];function qt(t,e){this._groups=t,this._parents=e}function As(){return new qt([[document.documentElement]],cm)}function oM(){return this}qt.prototype=As.prototype={constructor:qt,select:Ny,selectAll:Oy,selectChild:zy,selectChildren:Wy,filter:Xy,data:Zy,enter:qy,exit:Qy,join:eb,merge:tb,selection:oM,order:nb,sort:ib,call:sb,nodes:ob,node:ab,size:lb,empty:cb,each:ub,attr:gb,style:bb,property:wb,classed:Cb,text:Db,html:Fb,raise:Hb,lower:kb,append:Gb,insert:Wb,remove:qb,clone:jb,datum:Kb,on:tM,dispatch:rM,[Symbol.iterator]:sM};function mf(t){return typeof t=="string"?new qt([[document.querySelector(t)]],[document.documentElement]):new qt([[t]],cm)}function qc(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function um(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Rs(){}var ps=.7,qo=1/ps,vr="\\s*([+-]?\\d+)\\s*",ms="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",aM=/^#([0-9a-f]{3,8})$/,lM=new RegExp(`^rgb\\(${vr},${vr},${vr}\\)$`),cM=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),uM=new RegExp(`^rgba\\(${vr},${vr},${vr},${ms}\\)$`),fM=new RegExp(`^rgba\\(${bn},${bn},${bn},${ms}\\)$`),hM=new RegExp(`^hsl\\(${ms},${bn},${bn}\\)$`),dM=new RegExp(`^hsla\\(${ms},${bn},${bn},${ms}\\)$`),_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};qc(Rs,_s,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:gf,formatHex:gf,formatHex8:pM,formatHsl:mM,formatRgb:vf,toString:vf});function gf(){return this.rgb().formatHex()}function pM(){return this.rgb().formatHex8()}function mM(){return fm(this).formatHsl()}function vf(){return this.rgb().formatRgb()}function _s(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=aM.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?xf(e):n===3?new Ot(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Vs(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Vs(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=lM.exec(t))?new Ot(e[1],e[2],e[3],1):(e=cM.exec(t))?new Ot(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=uM.exec(t))?Vs(e[1],e[2],e[3],e[4]):(e=fM.exec(t))?Vs(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=hM.exec(t))?Mf(e[1],e[2]/100,e[3]/100,1):(e=dM.exec(t))?Mf(e[1],e[2]/100,e[3]/100,e[4]):_f.hasOwnProperty(t)?xf(_f[t]):t==="transparent"?new Ot(NaN,NaN,NaN,0):null}function xf(t){return new Ot(t>>16&255,t>>8&255,t&255,1)}function Vs(t,e,n,i){return i<=0&&(t=e=n=NaN),new Ot(t,e,n,i)}function _M(t){return t instanceof Rs||(t=_s(t)),t?(t=t.rgb(),new Ot(t.r,t.g,t.b,t.opacity)):new Ot}function Jl(t,e,n,i){return arguments.length===1?_M(t):new Ot(t,e,n,i??1)}function Ot(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}qc(Ot,Jl,um(Rs,{brighter(t){return t=t==null?qo:Math.pow(qo,t),new Ot(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ps:Math.pow(ps,t),new Ot(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Ot(Ai(this.r),Ai(this.g),Ai(this.b),$o(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:yf,formatHex:yf,formatHex8:gM,formatRgb:bf,toString:bf}));function yf(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}`}function gM(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}${Ei((isNaN(this.opacity)?1:this.opacity)*255)}`}function bf(){const t=$o(this.opacity);return`${t===1?"rgb(":"rgba("}${Ai(this.r)}, ${Ai(this.g)}, ${Ai(this.b)}${t===1?")":`, ${t})`}`}function $o(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Ai(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Ei(t){return t=Ai(t),(t<16?"0":"")+t.toString(16)}function Mf(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new un(t,e,n,i)}function fm(t){if(t instanceof un)return new un(t.h,t.s,t.l,t.opacity);if(t instanceof Rs||(t=_s(t)),!t)return new un;if(t instanceof un)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),s=Math.max(e,n,i),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(n-i)/a+(n<i)*6:n===s?o=(i-e)/a+2:o=(e-n)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new un(o,a,l,t.opacity)}function vM(t,e,n,i){return arguments.length===1?fm(t):new un(t,e,n,i??1)}function un(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}qc(un,vM,um(Rs,{brighter(t){return t=t==null?qo:Math.pow(qo,t),new un(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ps:Math.pow(ps,t),new un(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new Ot(Xa(t>=240?t-240:t+120,r,i),Xa(t,r,i),Xa(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new un(Sf(this.h),Ws(this.s),Ws(this.l),$o(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=$o(this.opacity);return`${t===1?"hsl(":"hsla("}${Sf(this.h)}, ${Ws(this.s)*100}%, ${Ws(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Sf(t){return t=(t||0)%360,t<0?t+360:t}function Ws(t){return Math.max(0,Math.min(1,t||0))}function Xa(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const hm=t=>()=>t;function xM(t,e){return function(n){return t+n*e}}function yM(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function bM(t){return(t=+t)==1?dm:function(e,n){return n-e?yM(e,n,t):hm(isNaN(e)?n:e)}}function dm(t,e){var n=e-t;return n?xM(t,n):hm(isNaN(t)?e:t)}const Ef=function t(e){var n=bM(e);function i(r,s){var o=n((r=Jl(r)).r,(s=Jl(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=dm(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i}(1);function Jn(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Ql=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qa=new RegExp(Ql.source,"g");function MM(t){return function(){return t}}function SM(t){return function(e){return t(e)+""}}function EM(t,e){var n=Ql.lastIndex=qa.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Ql.exec(t))&&(r=qa.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:Jn(i,r)})),n=qa.lastIndex;return n<e.length&&(s=e.slice(n),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?SM(l[0].x):MM(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)a[(f=l[u]).i]=f.x(c);return a.join("")})}var wf=180/Math.PI,ec={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function pm(t,e,n,i,r,s){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,t)*wf,skewX:Math.atan(l)*wf,scaleX:o,scaleY:a}}var Xs;function wM(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?ec:pm(e.a,e.b,e.c,e.d,e.e,e.f)}function TM(t){return t==null||(Xs||(Xs=document.createElementNS("http://www.w3.org/2000/svg","g")),Xs.setAttribute("transform",t),!(t=Xs.transform.baseVal.consolidate()))?ec:(t=t.matrix,pm(t.a,t.b,t.c,t.d,t.e,t.f))}function mm(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,h,d,g){if(c!==f||u!==h){var x=d.push("translate(",null,e,null,n);g.push({i:x-4,x:Jn(c,f)},{i:x-2,x:Jn(u,h)})}else(f||h)&&d.push("translate("+f+e+h+n)}function o(c,u,f,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:f.push(r(f)+"rotate(",null,i)-2,x:Jn(c,u)})):u&&f.push(r(f)+"rotate("+u+i)}function a(c,u,f,h){c!==u?h.push({i:f.push(r(f)+"skewX(",null,i)-2,x:Jn(c,u)}):u&&f.push(r(f)+"skewX("+u+i)}function l(c,u,f,h,d,g){if(c!==f||u!==h){var x=d.push(r(d)+"scale(",null,",",null,")");g.push({i:x-4,x:Jn(c,f)},{i:x-2,x:Jn(u,h)})}else(f!==1||h!==1)&&d.push(r(d)+"scale("+f+","+h+")")}return function(c,u){var f=[],h=[];return c=t(c),u=t(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,h),o(c.rotate,u.rotate,f,h),a(c.skewX,u.skewX,f,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,h),c=u=null,function(d){for(var g=-1,x=h.length,m;++g<x;)f[(m=h[g]).i]=m.x(d);return f.join("")}}}var AM=mm(wM,"px, ","px)","deg)"),RM=mm(TM,", ",")",")"),Ar=0,$r=0,zr=0,_m=1e3,Yo,Yr,jo=0,Di=0,ba=0,gs=typeof performance=="object"&&performance.now?performance:Date,gm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function $c(){return Di||(gm(CM),Di=gs.now()+ba)}function CM(){Di=0}function Ko(){this._call=this._time=this._next=null}Ko.prototype=vm.prototype={constructor:Ko,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?$c():+n)+(e==null?0:+e),!this._next&&Yr!==this&&(Yr?Yr._next=this:Yo=this,Yr=this),this._call=t,this._time=n,tc()},stop:function(){this._call&&(this._call=null,this._time=1/0,tc())}};function vm(t,e,n){var i=new Ko;return i.restart(t,e,n),i}function PM(){$c(),++Ar;for(var t=Yo,e;t;)(e=Di-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Ar}function Tf(){Di=(jo=gs.now())+ba,Ar=$r=0;try{PM()}finally{Ar=0,NM(),Di=0}}function LM(){var t=gs.now(),e=t-jo;e>_m&&(ba-=e,jo=t)}function NM(){for(var t,e=Yo,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Yo=n);Yr=t,tc(i)}function tc(t){if(!Ar){$r&&($r=clearTimeout($r));var e=t-Di;e>24?(t<1/0&&($r=setTimeout(Tf,t-gs.now()-ba)),zr&&(zr=clearInterval(zr))):(zr||(jo=gs.now(),zr=setInterval(LM,_m)),Ar=1,gm(Tf))}}function Af(t,e,n){var i=new Ko;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var DM=Zp("start","end","cancel","interrupt"),IM=[],xm=0,Rf=1,nc=2,Ro=3,Cf=4,ic=5,Co=6;function Ma(t,e,n,i,r,s){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;UM(t,n,{name:e,index:i,group:r,on:DM,tween:IM,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:xm})}function Yc(t,e){var n=mn(t,e);if(n.state>xm)throw new Error("too late; already scheduled");return n}function En(t,e){var n=mn(t,e);if(n.state>Ro)throw new Error("too late; already running");return n}function mn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function UM(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=vm(s,0,n.time);function s(c){n.state=Rf,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var u,f,h,d;if(n.state!==Rf)return l();for(u in i)if(d=i[u],d.name===n.name){if(d.state===Ro)return Af(o);d.state===Cf?(d.state=Co,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete i[u]):+u<e&&(d.state=Co,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete i[u])}if(Af(function(){n.state===Ro&&(n.state=Cf,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=nc,n.on.call("start",t,t.__data__,n.index,n.group),n.state===nc){for(n.state=Ro,r=new Array(h=n.tween.length),u=0,f=-1;u<h;++u)(d=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=d);r.length=f+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=ic,1),f=-1,h=r.length;++f<h;)r[f].call(t,u);n.state===ic&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Co,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function OM(t,e){var n=t.__transition,i,r,s=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){s=!1;continue}r=i.state>nc&&i.state<ic,i.state=Co,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}s&&delete t.__transition}}function FM(t){return this.each(function(){OM(this,t)})}function BM(t,e){var n,i;return function(){var r=En(this,t),s=r.tween;if(s!==n){i=n=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function HM(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var s=En(this,t),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function zM(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=mn(this.node(),n).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===t)return o.value;return null}return this.each((e==null?BM:HM)(n,t,e))}function jc(t,e,n){var i=t._id;return t.each(function(){var r=En(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return mn(r,i).value[e]}}function ym(t,e){var n;return(typeof e=="number"?Jn:e instanceof _s?Ef:(n=_s(e))?(e=n,Ef):EM)(t,e)}function kM(t){return function(){this.removeAttribute(t)}}function GM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function VM(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function WM(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function XM(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function qM(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function $M(t,e){var n=ya(t),i=n==="transform"?RM:ym;return this.attrTween(t,typeof e=="function"?(n.local?qM:XM)(n,i,jc(this,"attr."+t,e)):e==null?(n.local?GM:kM)(n):(n.local?WM:VM)(n,i,e))}function YM(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function jM(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function KM(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&jM(t,s)),n}return r._value=e,r}function ZM(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&YM(t,s)),n}return r._value=e,r}function JM(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=ya(t);return this.tween(n,(i.local?KM:ZM)(i,e))}function QM(t,e){return function(){Yc(this,t).delay=+e.apply(this,arguments)}}function eS(t,e){return e=+e,function(){Yc(this,t).delay=e}}function tS(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?QM:eS)(e,t)):mn(this.node(),e).delay}function nS(t,e){return function(){En(this,t).duration=+e.apply(this,arguments)}}function iS(t,e){return e=+e,function(){En(this,t).duration=e}}function rS(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?nS:iS)(e,t)):mn(this.node(),e).duration}function sS(t,e){if(typeof e!="function")throw new Error;return function(){En(this,t).ease=e}}function oS(t){var e=this._id;return arguments.length?this.each(sS(e,t)):mn(this.node(),e).ease}function aS(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;En(this,t).ease=n}}function lS(t){if(typeof t!="function")throw new Error;return this.each(aS(this._id,t))}function cS(t){typeof t!="function"&&(t=em(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new zn(i,this._parents,this._name,this._id)}function uS(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=e[a],c=n[a],u=l.length,f=o[a]=new Array(u),h,d=0;d<u;++d)(h=l[d]||c[d])&&(f[d]=h);for(;a<i;++a)o[a]=e[a];return new zn(o,this._parents,this._name,this._id)}function fS(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function hS(t,e,n){var i,r,s=fS(e)?Yc:En;return function(){var o=s(this,t),a=o.on;a!==i&&(r=(i=a).copy()).on(e,n),o.on=r}}function dS(t,e){var n=this._id;return arguments.length<2?mn(this.node(),n).on.on(t):this.each(hS(n,t,e))}function pS(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function mS(){return this.on("end.remove",pS(this._id))}function _S(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Wc(t));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),u,f,h=0;h<l;++h)(u=a[h])&&(f=t.call(u,u.__data__,h,a))&&("__data__"in u&&(f.__data__=u.__data__),c[h]=f,Ma(c[h],e,n,h,c,mn(u,n)));return new zn(s,this._parents,e,n)}function gS(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Qp(t));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var h=t.call(u,u.__data__,f,l),d,g=mn(u,n),x=0,m=h.length;x<m;++x)(d=h[x])&&Ma(d,e,n,x,h,g);s.push(h),o.push(u)}return new zn(s,o,e,n)}var vS=As.prototype.constructor;function xS(){return new vS(this._groups,this._parents)}function yS(t,e){var n,i,r;return function(){var s=Tr(this,t),o=(this.style.removeProperty(t),Tr(this,t));return s===o?null:s===n&&o===i?r:r=e(n=s,i=o)}}function bm(t){return function(){this.style.removeProperty(t)}}function bS(t,e,n){var i,r=n+"",s;return function(){var o=Tr(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}function MS(t,e,n){var i,r,s;return function(){var o=Tr(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),Tr(this,t))),o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a))}}function SS(t,e){var n,i,r,s="style."+e,o="end."+s,a;return function(){var l=En(this,t),c=l.on,u=l.value[s]==null?a||(a=bm(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(o,r=u),l.on=i}}function ES(t,e,n){var i=(t+="")=="transform"?AM:ym;return e==null?this.styleTween(t,yS(t,i)).on("end.style."+t,bm(t)):typeof e=="function"?this.styleTween(t,MS(t,i,jc(this,"style."+t,e))).each(SS(this._id,t)):this.styleTween(t,bS(t,i,e),n).on("end.style."+t,null)}function wS(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function TS(t,e,n){var i,r;function s(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&wS(t,o,n)),i}return s._value=e,s}function AS(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,TS(t,e,n??""))}function RS(t){return function(){this.textContent=t}}function CS(t){return function(){var e=t(this);this.textContent=e??""}}function PS(t){return this.tween("text",typeof t=="function"?CS(jc(this,"text",t)):RS(t==null?"":t+""))}function LS(t){return function(e){this.textContent=t.call(this,e)}}function NS(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&LS(r)),e}return i._value=t,i}function DS(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,NS(t))}function IS(){for(var t=this._name,e=this._id,n=Mm(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=mn(l,e);Ma(l,t,n,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new zn(i,this._parents,t,n)}function US(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};n.each(function(){var c=En(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&s()})}var OS=0;function zn(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Mm(){return++OS}var Rn=As.prototype;zn.prototype={constructor:zn,select:_S,selectAll:gS,selectChild:Rn.selectChild,selectChildren:Rn.selectChildren,filter:cS,merge:uS,selection:xS,transition:IS,call:Rn.call,nodes:Rn.nodes,node:Rn.node,size:Rn.size,empty:Rn.empty,each:Rn.each,on:dS,attr:$M,attrTween:JM,style:ES,styleTween:AS,text:PS,textTween:DS,remove:mS,tween:zM,delay:tS,duration:rS,ease:oS,easeVarying:lS,end:US,[Symbol.iterator]:Rn[Symbol.iterator]};function FS(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var BS={time:null,delay:0,duration:250,ease:FS};function HS(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function zS(t){var e,n;t instanceof zn?(e=t._id,t=t._name):(e=Mm(),(n=BS).time=$c(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&Ma(l,t,e,c,o,n||HS(l,e));return new zn(i,this._parents,t,e)}As.prototype.interrupt=FM;As.prototype.transition=zS;function kS(t){var e=0,n=t.children,i=n&&n.length;if(!i)e=1;else for(;--i>=0;)e+=n[i].value;t.value=e}function GS(){return this.eachAfter(kS)}function VS(t,e){let n=-1;for(const i of this)t.call(e,i,++n,this);return this}function WS(t,e){for(var n=this,i=[n],r,s,o=-1;n=i.pop();)if(t.call(e,n,++o,this),r=n.children)for(s=r.length-1;s>=0;--s)i.push(r[s]);return this}function XS(t,e){for(var n=this,i=[n],r=[],s,o,a,l=-1;n=i.pop();)if(r.push(n),s=n.children)for(o=0,a=s.length;o<a;++o)i.push(s[o]);for(;n=r.pop();)t.call(e,n,++l,this);return this}function qS(t,e){let n=-1;for(const i of this)if(t.call(e,i,++n,this))return i}function $S(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,i=e.children,r=i&&i.length;--r>=0;)n+=i[r].value;e.value=n})}function YS(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})}function jS(t){for(var e=this,n=KS(e,t),i=[e];e!==n;)e=e.parent,i.push(e);for(var r=i.length;t!==n;)i.splice(r,0,t),t=t.parent;return i}function KS(t,e){if(t===e)return t;var n=t.ancestors(),i=e.ancestors(),r=null;for(t=n.pop(),e=i.pop();t===e;)r=t,t=n.pop(),e=i.pop();return r}function ZS(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e}function JS(){return Array.from(this)}function QS(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t}function eE(){var t=this,e=[];return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e}function*tE(){var t=this,e,n=[t],i,r,s;do for(e=n.reverse(),n=[];t=e.pop();)if(yield t,i=t.children)for(r=0,s=i.length;r<s;++r)n.push(i[r]);while(n.length)}function Kc(t,e){t instanceof Map?(t=[void 0,t],e===void 0&&(e=rE)):e===void 0&&(e=iE);for(var n=new Zo(t),i,r=[n],s,o,a,l;i=r.pop();)if((o=e(i.data))&&(l=(o=Array.from(o)).length))for(i.children=o,a=l-1;a>=0;--a)r.push(s=o[a]=new Zo(o[a])),s.parent=i,s.depth=i.depth+1;return n.eachBefore(oE)}function nE(){return Kc(this).eachBefore(sE)}function iE(t){return t.children}function rE(t){return Array.isArray(t)?t[1]:null}function sE(t){t.data.value!==void 0&&(t.value=t.data.value),t.data=t.data.data}function oE(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function Zo(t){this.data=t,this.depth=this.height=0,this.parent=null}Zo.prototype=Kc.prototype={constructor:Zo,count:GS,each:VS,eachAfter:XS,eachBefore:WS,find:qS,sum:$S,sort:YS,path:jS,ancestors:ZS,descendants:JS,leaves:QS,links:eE,copy:nE,[Symbol.iterator]:tE};function aE(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function lE(t,e,n,i,r){for(var s=t.children,o,a=-1,l=s.length,c=t.value&&(i-e)/t.value;++a<l;)o=s[a],o.y0=n,o.y1=r,o.x0=e,o.x1=e+=o.value*c}function cE(){var t=1,e=1,n=0,i=!1;function r(o){var a=o.height+1;return o.x0=o.y0=n,o.x1=t,o.y1=e/a,o.eachBefore(s(e,a)),i&&o.eachBefore(aE),o}function s(o,a){return function(l){l.children&&lE(l,l.x0,o*(l.depth+1)/a,l.x1,o*(l.depth+2)/a);var c=l.x0,u=l.y0,f=l.x1-n,h=l.y1-n;f<c&&(c=f=(c+f)/2),h<u&&(u=h=(u+h)/2),l.x0=c,l.y0=u,l.x1=f,l.y1=h}}return r.round=function(o){return arguments.length?(i=!!o,r):i},r.size=function(o){return arguments.length?(t=+o[0],e=+o[1],r):[t,e]},r.padding=function(o){return arguments.length?(n=+o,r):n},r}function uE(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const Pf=Symbol("implicit");function Sm(){var t=new ff,e=[],n=[],i=Pf;function r(s){let o=t.get(s);if(o===void 0){if(i!==Pf)return i;t.set(s,o=e.push(s)-1)}return n[o%n.length]}return r.domain=function(s){if(!arguments.length)return e.slice();e=[],t=new ff;for(const o of s)t.has(o)||t.set(o,e.push(o)-1);return r},r.range=function(s){return arguments.length?(n=Array.from(s),r):n.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return Sm(e,n).unknown(i)},uE.apply(r,arguments),r}function fE(t){for(var e=t.length/6|0,n=new Array(e),i=0;i<e;)n[i]="#"+t.slice(i*6,++i*6);return n}const hE=fE("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");function jr(t,e,n){this.k=t,this.x=e,this.y=n}jr.prototype={constructor:jr,scale:function(t){return t===1?this:new jr(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new jr(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};jr.prototype;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="158",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,Lf=1,pE=2,Em=1,mE=2,In=3,ui=0,Ft=1,On=2,si=0,xr=1,Nf=2,Df=3,If=4,_E=5,Mi=100,gE=101,vE=102,Uf=103,Of=104,xE=200,yE=201,bE=202,ME=203,rc=204,sc=205,SE=206,EE=207,wE=208,TE=209,AE=210,RE=211,CE=212,PE=213,LE=214,NE=0,DE=1,IE=2,Jo=3,UE=4,OE=5,FE=6,BE=7,Jc=0,HE=1,zE=2,oi=0,kE=1,GE=2,VE=3,WE=4,XE=5,wm=300,Rr=301,Cr=302,oc=303,ac=304,Sa=306,lc=1e3,fn=1001,cc=1002,It=1003,Ff=1004,$a=1005,Jt=1006,qE=1007,vs=1008,ai=1009,$E=1010,YE=1011,Qc=1012,Tm=1013,ti=1014,ni=1015,xs=1016,Am=1017,Rm=1018,Ri=1020,jE=1021,hn=1023,KE=1024,ZE=1025,Ci=1026,Pr=1027,JE=1028,Cm=1029,QE=1030,Pm=1031,Lm=1033,Ya=33776,ja=33777,Ka=33778,Za=33779,Bf=35840,Hf=35841,zf=35842,kf=35843,ew=36196,Gf=37492,Vf=37496,Wf=37808,Xf=37809,qf=37810,$f=37811,Yf=37812,jf=37813,Kf=37814,Zf=37815,Jf=37816,Qf=37817,eh=37818,th=37819,nh=37820,ih=37821,Ja=36492,rh=36494,sh=36495,tw=36283,oh=36284,ah=36285,lh=36286,Nm=3e3,Pi=3001,nw=3200,iw=3201,Dm=0,rw=1,en="",St="srgb",kn="srgb-linear",eu="display-p3",Ea="display-p3-linear",Qo="linear",tt="srgb",ea="rec709",ta="p3",Wi=7680,ch=519,sw=512,ow=513,aw=514,lw=515,cw=516,uw=517,fw=518,hw=519,uh=35044,fh="300 es",uc=1035,Fn=2e3,na=2001;class Hi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hh=1234567;const ns=Math.PI/180,ys=180/Math.PI;function zi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[t&255]+Tt[t>>8&255]+Tt[t>>16&255]+Tt[t>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[n&63|128]+Tt[n>>8&255]+"-"+Tt[n>>16&255]+Tt[n>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function xt(t,e,n){return Math.max(e,Math.min(n,t))}function tu(t,e){return(t%e+e)%e}function dw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function pw(t,e,n){return t!==e?(n-t)/(e-t):0}function is(t,e,n){return(1-n)*t+n*e}function mw(t,e,n,i){return is(t,e,1-Math.exp(-n*i))}function _w(t,e=1){return e-Math.abs(tu(t,e*2)-e)}function gw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yw(t,e){return t+Math.random()*(e-t)}function bw(t){return t*(.5-Math.random())}function Mw(t){t!==void 0&&(hh=t);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sw(t){return t*ns}function Ew(t){return t*ys}function fc(t){return(t&t-1)===0&&t!==0}function ww(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ia(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Tw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ar(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Aw={DEG2RAD:ns,RAD2DEG:ys,generateUUID:zi,clamp:xt,euclideanModulo:tu,mapLinear:dw,inverseLerp:pw,lerp:is,damp:mw,pingpong:_w,smoothstep:gw,smootherstep:vw,randInt:xw,randFloat:yw,randFloatSpread:bw,seededRandom:Mw,degToRad:Sw,radToDeg:Ew,isPowerOfTwo:fc,ceilPowerOfTwo:ww,floorPowerOfTwo:ia,setQuaternionFromProperEuler:Tw,normalize:Nt,denormalize:ar};class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],A=r[1],_=r[4],b=r[7],E=r[2],L=r[5],R=r[8];return s[0]=o*x+a*A+l*E,s[3]=o*m+a*_+l*L,s[6]=o*p+a*b+l*R,s[1]=c*x+u*A+f*E,s[4]=c*m+u*_+f*L,s[7]=c*p+u*b+f*R,s[2]=h*x+d*A+g*E,s[5]=h*m+d*_+g*L,s[8]=h*p+d*b+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=n*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=d*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qa.makeScale(e,n)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new qe;function Im(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rw(){const t=ra("canvas");return t.style.display="block",t}const dh={};function rs(t){t in dh||(dh[t]=!0,console.warn(t))}const ph=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[kn]:{transfer:Qo,primaries:ea,toReference:t=>t,fromReference:t=>t},[St]:{transfer:tt,primaries:ea,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ea]:{transfer:Qo,primaries:ta,toReference:t=>t.applyMatrix3(mh),fromReference:t=>t.applyMatrix3(ph)},[eu]:{transfer:tt,primaries:ta,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mh),fromReference:t=>t.applyMatrix3(ph).convertLinearToSRGB()}},Cw=new Set([kn,Ea]),Qe={enabled:!0,_workingColorSpace:kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qs[e].toReference,r=qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qs[t].primaries},getTransfer:function(t){return t===en?Qo:qs[t].transfer}};function yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function el(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xi;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=ra("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yr(n[i]/255)*255):n[i]=yr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pw=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tl(r[o].image)):s.push(tl(r[o]))}else s=tl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Um.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lw=0;class Wt extends Hi{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=fn,r=fn,s=Jt,o=vs,a=hn,l=ai,c=Wt.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=zi(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pi?St:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Pi:Nm}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pi?St:en}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=wm;Wt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,b=(d+1)/2,E=(p+1)/2,L=(u+h)/4,R=(f+x)/4,z=(g+m)/4;return _>b&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=L/i,s=R/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=z/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=z/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nw extends Hi{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?St:en),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Om(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Nw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fm extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dw extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*x,A=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),L=Math.atan2(E,p*A);m=Math.sin(m*L)/E,a=Math.sin(a*L)/E}const b=a*A;if(l=l*m+h*b,c=c*m+d*b,u=u*m+g*b,f=f*m+x*b,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*d-c*h,e[n+1]=l*g+u*h+c*f-a*d,e[n+2]=c*g+u*d+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new H,_h=new Ui;class Cs{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ys.subVectors(this.max,kr),qi.subVectors(e.a,kr),$i.subVectors(e.b,kr),Yi.subVectors(e.c,kr),qn.subVectors($i,qi),$n.subVectors(Yi,$i),pi.subVectors(qi,Yi);let n=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-pi.z,pi.y,qn.z,0,-qn.x,$n.z,0,-$n.x,pi.z,0,-pi.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-pi.y,pi.x,0];return!il(n,qi,$i,Yi,Ys)||(n=[1,0,0,0,1,0,0,0,1],!il(n,qi,$i,Yi,Ys))?!1:(js.crossVectors(qn,$n),n=[js.x,js.y,js.z],il(n,qi,$i,Yi,Ys))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new H,new H,new H,new H,new H,new H,new H,new H],nn=new H,$s=new Cs,qi=new H,$i=new H,Yi=new H,qn=new H,$n=new H,pi=new H,kr=new H,Ys=new H,js=new H,mi=new H;function il(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mi.fromArray(t,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=n.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Iw=new Cs,Gr=new H,rl=new H;class wa{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Iw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const n=Gr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(rl)),this.expandByPoint(Gr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new H,sl=new H,Ks=new H,Yn=new H,ol=new H,Zs=new H,al=new H;class nu{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,n),Pn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sl.copy(e).add(n).multiplyScalar(.5),Ks.copy(n).sub(e).normalize(),Yn.copy(this.origin).sub(sl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ks),a=Yn.dot(this.direction),l=-Yn.dot(Ks),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sl).addScaledVector(Ks,h),d}intersectSphere(e,n){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,n,i,r,s){ol.subVectors(n,e),Zs.subVectors(i,e),al.crossVectors(ol,Zs);let o=this.direction.dot(al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(Yn,Zs));if(l<0)return null;const c=a*this.direction.dot(ol.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(al);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,d,g,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,d,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,x=c*f;n[0]=h+x*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-d,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uw,e,Ow)}lookAt(e,n,i){const r=this.elements;return kt.subVectors(e,n),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),jn.crossVectors(i,kt),jn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),jn.crossVectors(i,kt)),jn.normalize(),Js.crossVectors(kt,jn),r[0]=jn.x,r[4]=Js.x,r[8]=kt.x,r[1]=jn.y,r[5]=Js.y,r[9]=kt.y,r[2]=jn.z,r[6]=Js.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],A=i[3],_=i[7],b=i[11],E=i[15],L=r[0],R=r[4],z=r[8],M=r[12],T=r[1],k=r[5],oe=r[9],ae=r[13],I=r[2],W=r[6],G=r[10],X=r[14],$=r[3],se=r[7],ue=r[11],B=r[15];return s[0]=o*L+a*T+l*I+c*$,s[4]=o*R+a*k+l*W+c*se,s[8]=o*z+a*oe+l*G+c*ue,s[12]=o*M+a*ae+l*X+c*B,s[1]=u*L+f*T+h*I+d*$,s[5]=u*R+f*k+h*W+d*se,s[9]=u*z+f*oe+h*G+d*ue,s[13]=u*M+f*ae+h*X+d*B,s[2]=g*L+x*T+m*I+p*$,s[6]=g*R+x*k+m*W+p*se,s[10]=g*z+x*oe+m*G+p*ue,s[14]=g*M+x*ae+m*X+p*B,s[3]=A*L+_*T+b*I+E*$,s[7]=A*R+_*k+b*W+E*se,s[11]=A*z+_*oe+b*G+E*ue,s[15]=A*M+_*ae+b*X+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+n*l*d-n*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+n*c*f-n*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,_=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,b=u*x*c-g*f*c+g*a*d-o*x*d-u*a*p+o*f*p,E=g*f*l-u*x*l-g*a*h+o*x*h+u*a*m-o*f*m,L=n*A+i*_+r*b+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=A*R,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*R,e[4]=_*R,e[5]=(u*m*s-g*h*s+g*r*d-n*m*d-u*r*p+n*h*p)*R,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*d+n*l*d)*R,e[8]=b*R,e[9]=(g*f*s-u*x*s-g*i*d+n*x*d+u*i*p-n*f*p)*R,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*p+n*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*d-n*a*d)*R,e[12]=E*R,e[13]=(u*x*r-g*f*r+g*i*h-n*x*h-u*i*m+n*f*m)*R,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,x=o*u,m=o*f,p=a*f,A=l*c,_=l*u,b=l*f,E=i.x,L=i.y,R=i.z;return r[0]=(1-(x+p))*E,r[1]=(d+b)*E,r[2]=(g-_)*E,r[3]=0,r[4]=(d-b)*L,r[5]=(1-(h+p))*L,r[6]=(m+A)*L,r[7]=0,r[8]=(g+_)*R,r[9]=(m-A)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,n.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,g;if(a===Fn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===na)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*u;let g,x;if(a===Fn)g=(o+s)*f,x=-2*f;else if(a===na)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ji=new H,rn=new lt,Uw=new H(0,0,0),Ow=new H(1,1,1),jn=new H,Js=new H,kt=new H,gh=new lt,vh=new Ui;class Ta{constructor(e=0,n=0,i=0,r=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fw=0;const xh=new H,Ki=new Ui,Ln=new lt,Qs=new H,Vr=new H,Bw=new H,Hw=new Ui,yh=new H(1,0,0),bh=new H(0,1,0),Mh=new H(0,0,1),zw={type:"added"},kw={type:"removed"};class Et extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new H,n=new Ta,i=new Ui,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ki.setFromAxisAngle(e,n),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,n){return Ki.setFromAxisAngle(e,n),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,n){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qs.copy(e):Qs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Vr,Qs,this.up):Ln.lookAt(Qs,Vr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Bw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new H(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new H,Nn=new H,ll=new H,Dn=new H,Zi=new H,Ji=new H,Sh=new H,cl=new H,ul=new H,fl=new H;let eo=!1;class an{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),sn.subVectors(e,n),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){sn.subVectors(r,n),Nn.subVectors(i,n),ll.subVectors(e,n);const o=sn.dot(sn),a=sn.dot(Nn),l=sn.dot(ll),c=Nn.dot(Nn),u=Nn.dot(ll),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,n,i,r,s,o,a,l){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,n,i,r){return sn.subVectors(i,n),Nn.subVectors(e,n),sn.cross(Nn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),sn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return an.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),an.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Zi.subVectors(r,i),Ji.subVectors(s,i),cl.subVectors(e,i);const l=Zi.dot(cl),c=Ji.dot(cl);if(l<=0&&c<=0)return n.copy(i);ul.subVectors(e,r);const u=Zi.dot(ul),f=Ji.dot(ul);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Zi,o);fl.subVectors(e,s);const d=Zi.dot(fl),g=Ji.dot(fl);if(g>=0&&d<=g)return n.copy(s);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ji,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Sh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),n.copy(r).addScaledVector(Sh,a);const p=1/(m+x+h);return o=x*p,a=h*p,n.copy(i).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},to={h:0,s:0,l:0};function hl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=tu(e,1),n=xt(n,0,1),i=xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hl(o,s,e+1/3),this.g=hl(o,s,e),this.b=hl(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=St){const i=Hm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(xt(At.r*255,0,255))*65536+Math.round(xt(At.g*255,0,255))*256+Math.round(xt(At.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),n);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),n),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=St){Qe.fromWorkingColorSpace(At.copy(this),e);const n=At.r,i=At.g,r=At.b;return e!==St?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+n,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Kn),e.getHSL(to);const i=is(Kn.h,to.h,n),r=is(Kn.s,to.s,n),s=is(Kn.l,to.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ke;Ke.NAMES=Hm;let Gw=0;class Fr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=xr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=sc,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rc&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zm extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new H,no=new de;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uh,this.updateRange={offset:0,count:-1},this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)no.fromBufferAttribute(this,n),no.applyMatrix3(e),this.setXY(n,no.x,no.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ar(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ar(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ar(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ar(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class km extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gm extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vw=0;const Yt=new lt,dl=new Et,Qi=new H,Gt=new Cs,Wr=new Cs,gt=new H;class wn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?Gm:km)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,n,i){return Yt.makeTranslation(e,n,i),this.applyMatrix4(Yt),this}scale(e,n,i){return Yt.makeScale(e,n,i),this.applyMatrix4(Yt),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,Wr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,Wr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(Wr.min),Gt.expandByPoint(Wr.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),gt.add(Qi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new H,u[T]=new H;const f=new H,h=new H,d=new H,g=new de,x=new de,m=new de,p=new H,A=new H;function _(T,k,oe){f.fromArray(r,T*3),h.fromArray(r,k*3),d.fromArray(r,oe*3),g.fromArray(o,T*2),x.fromArray(o,k*2),m.fromArray(o,oe*2),h.sub(f),d.sub(f),x.sub(g),m.sub(g);const ae=1/(x.x*m.y-m.x*x.y);isFinite(ae)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(ae),A.copy(d).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(ae),c[T].add(p),c[k].add(p),c[oe].add(p),u[T].add(A),u[k].add(A),u[oe].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,k=b.length;T<k;++T){const oe=b[T],ae=oe.start,I=oe.count;for(let W=ae,G=ae+I;W<G;W+=3)_(i[W+0],i[W+1],i[W+2])}const E=new H,L=new H,R=new H,z=new H;function M(T){R.fromArray(s,T*3),z.copy(R);const k=c[T];E.copy(k),E.sub(R.multiplyScalar(R.dot(k))).normalize(),L.crossVectors(z,k);const ae=L.dot(u[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=ae}for(let T=0,k=b.length;T<k;++T){const oe=b[T],ae=oe.start,I=oe.count;for(let W=ae,G=ae+I;W<G;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gt.fromBufferAttribute(e,n),gt.normalize(),e.setXYZ(n,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new lt,_i=new nu,io=new wa,wh=new H,er=new H,tr=new H,nr=new H,pl=new H,ro=new H,so=new de,oo=new de,ao=new de,Th=new H,Ah=new H,Rh=new H,lo=new H,co=new H;class yn extends Et{constructor(e=new wn,n=new zm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(pl.fromBufferAttribute(f,e),o?ro.addScaledVector(pl,u):ro.addScaledVector(pl.sub(n),u))}n.add(ro)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(io.containsPoint(_i.origin)===!1&&(_i.intersectSphere(io,wh)===null||_i.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,E=_;b<E;b+=3){const L=a.getX(b),R=a.getX(b+1),z=a.getX(b+2);r=uo(this,p,e,i,c,u,f,L,R,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const A=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);r=uo(this,o,e,i,c,u,f,A,_,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,E=_;b<E;b+=3){const L=b,R=b+1,z=b+2;r=uo(this,p,e,i,c,u,f,L,R,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const A=m,_=m+1,b=m+2;r=uo(this,o,e,i,c,u,f,A,_,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ww(t,e,n,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;co.copy(a),co.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(co);return c<n.near||c>n.far?null:{distance:c,point:co.clone(),object:t}}function uo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,er),t.getVertexPosition(l,tr),t.getVertexPosition(c,nr);const u=Ww(t,e,n,i,er,tr,nr,lo);if(u){r&&(so.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,l),ao.fromBufferAttribute(r,c),u.uv=an.getInterpolation(lo,er,tr,nr,so,oo,ao,new de)),s&&(so.fromBufferAttribute(s,a),oo.fromBufferAttribute(s,l),ao.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(lo,er,tr,nr,so,oo,ao,new de),u.uv2=u.uv1),o&&(Th.fromBufferAttribute(o,a),Ah.fromBufferAttribute(o,l),Rh.fromBufferAttribute(o,c),u.normal=an.getInterpolation(lo,er,tr,nr,Th,Ah,Rh,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};an.getNormal(er,tr,nr,f.normal),u.face=f}return u}class Ps extends wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function g(x,m,p,A,_,b,E,L,R,z,M){const T=b/R,k=E/z,oe=b/2,ae=E/2,I=L/2,W=R+1,G=z+1;let X=0,$=0;const se=new H;for(let ue=0;ue<G;ue++){const B=ue*k-ae;for(let Q=0;Q<W;Q++){const be=Q*T-oe;se[x]=be*A,se[m]=B*_,se[p]=I,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[p]=L>0?1:-1,u.push(se.x,se.y,se.z),f.push(Q/R),f.push(1-ue/z),X+=1}}for(let ue=0;ue<z;ue++)for(let B=0;B<R;B++){const Q=h+B+W*ue,be=h+B+W*(ue+1),Me=h+(B+1)+W*(ue+1),Se=h+(B+1)+W*ue;l.push(Q,be,Se),l.push(be,Me,Se),$+=6}a.addGroup(d,$,M),d+=$,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Dt(t){const e={};for(let n=0;n<t.length;n++){const i=Lr(t[n]);for(const r in i)e[r]=i[r]}return e}function Xw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vm(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const qw={clone:Lr,merge:Dt};var $w=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$w,this.fragmentShader=Yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wm extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Fn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Wm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ir=-90,rr=1;class jw extends Et{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ir,rr,e,n);r.layers=this.layers,this.add(r);const s=new Qt(ir,rr,e,n);s.layers=this.layers,this.add(s);const o=new Qt(ir,rr,e,n);o.layers=this.layers,this.add(o);const a=new Qt(ir,rr,e,n);a.layers=this.layers,this.add(a);const l=new Qt(ir,rr,e,n);l.layers=this.layers,this.add(l);const c=new Qt(ir,rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xm extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Rr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kw extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pi?St:en),this.texture=new Xm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ps(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:si});s.uniforms.tEquirect.value=n;const o=new yn(r,s),a=n.minFilter;return n.minFilter===vs&&(n.minFilter=Jt),new jw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ml=new H,Zw=new H,Jw=new qe;class Qn{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ml.subVectors(i,n).cross(Zw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Jw.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new wa,fo=new H;class iu{constructor(e=new Qn,n=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],x=r[10],m=r[11],p=r[12],A=r[13],_=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-d,b-p).normalize(),i[1].setComponents(l+s,h+c,m+d,b+p).normalize(),i[2].setComponents(l+o,h+u,m+g,b+A).normalize(),i[3].setComponents(l-o,h-u,m-g,b-A).normalize(),i[4].setComponents(l-a,h-f,m-x,b-_).normalize(),n===Fn)i[5].setComponents(l+a,h+f,m+x,b+_).normalize();else if(n===na)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Qw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=t.createBuffer();t.bindBuffer(u,d),t.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;t.bindBuffer(f,c),d.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ru extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let _=0;_<c;_++){const b=_*f-s;g.push(b,-A,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const _=A+c*p,b=A+c*(p+1),E=A+1+c*(p+1),L=A+1+c*p;d.push(_,b,L),d.push(b,E,L)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ST=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",CT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ZT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,HA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,x1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:aT,begin_vertex:lT,beginnormal_vertex:cT,bsdfs:uT,iridescence_fragment:fT,bumpmap_pars_fragment:hT,clipping_planes_fragment:dT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:_T,color_fragment:gT,color_pars_fragment:vT,color_pars_vertex:xT,color_vertex:yT,common:bT,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ST,displacementmap_pars_vertex:ET,displacementmap_vertex:wT,emissivemap_fragment:TT,emissivemap_pars_fragment:AT,colorspace_fragment:RT,colorspace_pars_fragment:CT,envmap_fragment:PT,envmap_common_pars_fragment:LT,envmap_pars_fragment:NT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:XT,envmap_vertex:IT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:FT,fog_pars_fragment:BT,gradientmap_pars_fragment:HT,lightmap_fragment:zT,lightmap_pars_fragment:kT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:VT,lights_pars_begin:WT,lights_toon_fragment:qT,lights_toon_pars_fragment:$T,lights_phong_fragment:YT,lights_phong_pars_fragment:jT,lights_physical_fragment:KT,lights_physical_pars_fragment:ZT,lights_fragment_begin:JT,lights_fragment_maps:QT,lights_fragment_end:eA,logdepthbuf_fragment:tA,logdepthbuf_pars_fragment:nA,logdepthbuf_pars_vertex:iA,logdepthbuf_vertex:rA,map_fragment:sA,map_pars_fragment:oA,map_particle_fragment:aA,map_particle_pars_fragment:lA,metalnessmap_fragment:cA,metalnessmap_pars_fragment:uA,morphcolor_vertex:fA,morphnormal_vertex:hA,morphtarget_pars_vertex:dA,morphtarget_vertex:pA,normal_fragment_begin:mA,normal_fragment_maps:_A,normal_pars_fragment:gA,normal_pars_vertex:vA,normal_vertex:xA,normalmap_pars_fragment:yA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:SA,iridescence_pars_fragment:EA,opaque_fragment:wA,packing:TA,premultiplied_alpha_fragment:AA,project_vertex:RA,dithering_fragment:CA,dithering_pars_fragment:PA,roughnessmap_fragment:LA,roughnessmap_pars_fragment:NA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:IA,shadowmap_vertex:UA,shadowmask_pars_fragment:OA,skinbase_vertex:FA,skinning_pars_vertex:BA,skinning_vertex:HA,skinnormal_vertex:zA,specularmap_fragment:kA,specularmap_pars_fragment:GA,tonemapping_fragment:VA,tonemapping_pars_fragment:WA,transmission_fragment:XA,transmission_pars_fragment:qA,uv_pars_fragment:$A,uv_pars_vertex:YA,uv_vertex:jA,worldpos_vertex:KA,background_vert:ZA,background_frag:JA,backgroundCube_vert:QA,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:o1,equirect_vert:a1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:f1,meshbasic_frag:h1,meshlambert_vert:d1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:_1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:y1,meshphysical_vert:b1,meshphysical_frag:M1,meshtoon_vert:S1,meshtoon_frag:E1,points_vert:w1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:P1},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},vn={basic:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};vn.physical={uniforms:Dt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ho={r:0,b:0,g:0};function L1(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let A=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),A=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||A)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sa)?(u===void 0&&(u=new yn(new Ps(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Lr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(_.colorSpace)!==tt,(f!==_||h!==_.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new yn(new ru(2,2),new Oi({name:"BackgroundMaterial",uniforms:Lr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ho,Vm(t)),i.buffers.color.setClear(ho.r,ho.g,ho.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function N1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,W,G,X,$){let se=!1;if(o){const ue=x(X,G,W);c!==ue&&(c=ue,d(c.object)),se=p(I,X,G,$),se&&A(I,X,G,$)}else{const ue=W.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==ue)&&(c.geometry=X.id,c.program=G.id,c.wireframe=ue,se=!0)}$!==null&&n.update($,t.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,z(I,W,G,X),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get($).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,W,G){const X=G.wireframe===!0;let $=a[I.id];$===void 0&&($={},a[I.id]=$);let se=$[W.id];se===void 0&&(se={},$[W.id]=se);let ue=se[X];return ue===void 0&&(ue=m(h()),se[X]=ue),ue}function m(I){const W=[],G=[],X=[];for(let $=0;$<r;$++)W[$]=0,G[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:G,attributeDivisors:X,object:I,attributes:{},index:null}}function p(I,W,G,X){const $=c.attributes,se=W.attributes;let ue=0;const B=G.getAttributes();for(const Q in B)if(B[Q].location>=0){const Me=$[Q];let Se=se[Q];if(Se===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),Me===void 0||Me.attribute!==Se||Se&&Me.data!==Se.data)return!0;ue++}return c.attributesNum!==ue||c.index!==X}function A(I,W,G,X){const $={},se=W.attributes;let ue=0;const B=G.getAttributes();for(const Q in B)if(B[Q].location>=0){let Me=se[Q];Me===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor));const Se={};Se.attribute=Me,Me&&Me.data&&(Se.data=Me.data),$[Q]=Se,ue++}c.attributes=$,c.attributesNum=ue,c.index=X}function _(){const I=c.newAttributes;for(let W=0,G=I.length;W<G;W++)I[W]=0}function b(I){E(I,0)}function E(I,W){const G=c.newAttributes,X=c.enabledAttributes,$=c.attributeDivisors;G[I]=1,X[I]===0&&(t.enableVertexAttribArray(I),X[I]=1),$[I]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),$[I]=W)}function L(){const I=c.newAttributes,W=c.enabledAttributes;for(let G=0,X=W.length;G<X;G++)W[G]!==I[G]&&(t.disableVertexAttribArray(G),W[G]=0)}function R(I,W,G,X,$,se,ue){ue===!0?t.vertexAttribIPointer(I,W,G,$,se):t.vertexAttribPointer(I,W,G,X,$,se)}function z(I,W,G,X){if(i.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const $=X.attributes,se=G.getAttributes(),ue=W.defaultAttributeValues;for(const B in se){const Q=se[B];if(Q.location>=0){let be=$[B];if(be===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),be!==void 0){const Me=be.normalized,Se=be.itemSize,Re=n.get(be);if(Re===void 0)continue;const Ue=Re.buffer,Ne=Re.type,Oe=Re.bytesPerElement,We=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||be.gpuType===Tm);if(be.isInterleavedBufferAttribute){const De=be.data,v=De.stride,C=be.offset;if(De.isInstancedInterleavedBuffer){for(let P=0;P<Q.locationSize;P++)E(Q.location+P,De.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let P=0;P<Q.locationSize;P++)b(Q.location+P);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let P=0;P<Q.locationSize;P++)R(Q.location+P,Se/Q.locationSize,Ne,Me,v*Oe,(C+Se/Q.locationSize*P)*Oe,We)}else{if(be.isInstancedBufferAttribute){for(let De=0;De<Q.locationSize;De++)E(Q.location+De,be.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let De=0;De<Q.locationSize;De++)b(Q.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let De=0;De<Q.locationSize;De++)R(Q.location+De,Se/Q.locationSize,Ne,Me,Se*Oe,Se/Q.locationSize*De*Oe,We)}}else if(ue!==void 0){const Me=ue[B];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(Q.location,Me);break;case 3:t.vertexAttrib3fv(Q.location,Me);break;case 4:t.vertexAttrib4fv(Q.location,Me);break;default:t.vertexAttrib1fv(Q.location,Me)}}}}L()}function M(){oe();for(const I in a){const W=a[I];for(const G in W){const X=W[G];for(const $ in X)g(X[$].object),delete X[$];delete W[G]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const G in W){const X=W[G];for(const $ in X)g(X[$].object),delete X[$];delete W[G]}delete a[I.id]}function k(I){for(const W in a){const G=a[W];if(G[I.id]===void 0)continue;const X=G[I.id];for(const $ in X)g(X[$].object),delete X[$];delete G[I.id]}}function oe(){ae(),u=!0,c!==l&&(c=l,d(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:ae,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:b,disableUnusedAttributes:L}}function D1(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function I1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,b=o||e.has("OES_texture_float"),E=_&&b,L=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:L}}function U1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qn,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,_=A*4;let b=p.clippingState||null;l.value=b,b=u(g,h,_,d);for(let E=0;E!==_;++E)b[E]=n[E];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=d;_!==x;++_,b+=4)o.copy(f[_]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function O1(t){let e=new WeakMap;function n(o,a){return a===oc?o.mapping=Rr:a===ac&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kw(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $m extends Wm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cr=4,Ch=[.125,.215,.35,.446,.526,.582],Si=20,_l=new $m,Ph=new Ke;let gl=null,vl=0,xl=0;const xi=(1+Math.sqrt(5))/2,sr=1/xi,Lh=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,xi,sr),new H(0,xi,-sr),new H(sr,0,xi),new H(-sr,0,xi),new H(xi,sr,0),new H(-xi,sr,0)];class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,vl,xl),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:xs,format:hn,colorSpace:kn,depthBuffer:!1},r=Dh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(s)),this._blurMaterial=B1(s,e,n)}return r}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,_l)}_sceneToCubeUV(e,n,i,r){const a=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ph),u.toneMapping=oi,u.autoClear=!1;const d=new zm({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new yn(new Ps,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Ph),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;po(r,A*_,p>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;po(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_l)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lh[(r-1)%Lh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let A=0;for(let R=0;R<Si;++R){const z=R/x,M=Math.exp(-z*z/2);p.push(M),R===0?A+=M:R<m&&(A+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const b=this._sizeLods[r],E=3*b*(r>_-cr?r-_+cr:0),L=4*(this._cubeSize-b);po(n,E,L,3*b,2*b),l.setRenderTarget(n),l.render(f,_l)}}function F1(t){const e=[],n=[],i=[];let r=t;const s=t-cr+1+Ch.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-cr?l=Ch[o-t+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,A=new Float32Array(x*g*d),_=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let L=0;L<d;L++){const R=L%3*2/3-1,z=L>2?0:-1,M=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];A.set(M,x*g*L),_.set(h,m*g*L);const T=[L,L,L,L,L,L];b.set(T,p*g*L)}const E=new wn;E.setAttribute("position",new Mn(A,x)),E.setAttribute("uv",new Mn(_,m)),E.setAttribute("faceIndex",new Mn(b,p)),e.push(E),r>cr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dh(t,e,n){const i=new Ii(t,e,n);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B1(t,e,n){const i=new Float32Array(Si),r=new H(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ih(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Uh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,u=l===Rr||l===Cr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Nh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Nh(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function z1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const A=d.array;x=d.version;for(let _=0,b=A.length;_<b;_+=3){const E=A[_+0],L=A[_+1],R=A[_+2];h.push(E,L,L,R,R,E)}}else if(g!==void 0){const A=g.array;x=g.version;for(let _=0,b=A.length/3-1;_<b;_+=3){const E=_+0,L=_+1,R=_+2;h.push(E,L,L,R,R,E)}}else return;const m=new(Im(h)?Gm:km)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function G1(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){t.drawElements(s,d,a,h*l),n.update(d,s,1)}function f(h,d,g){if(g===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,d,a,h*l,g),n.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function V1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function W1(t,e){return t[0]-e[0]}function X1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function q1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let x=s.get(u);if(x===void 0||x.count!==g){let I=function(){oe.dispose(),s.delete(u),u.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();const A=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let z=0;A===!0&&(z=1),_===!0&&(z=2),b===!0&&(z=3);let M=u.attributes.position.count*z,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const k=new Float32Array(M*T*4*g),oe=new Fm(k,M,T,g);oe.type=ni,oe.needsUpdate=!0;const ae=z*4;for(let W=0;W<g;W++){const G=E[W],X=L[W],$=R[W],se=M*T*4*W;for(let ue=0;ue<G.count;ue++){const B=ue*ae;A===!0&&(o.fromBufferAttribute(G,ue),k[se+B+0]=o.x,k[se+B+1]=o.y,k[se+B+2]=o.z,k[se+B+3]=0),_===!0&&(o.fromBufferAttribute(X,ue),k[se+B+4]=o.x,k[se+B+5]=o.y,k[se+B+6]=o.z,k[se+B+7]=0),b===!0&&(o.fromBufferAttribute($,ue),k[se+B+8]=o.x,k[se+B+9]=o.y,k[se+B+10]=o.z,k[se+B+11]=$.itemSize===4?o.w:1)}}x={count:g,texture:oe,size:new de(M,T)},s.set(u,x),u.addEventListener("dispose",I)}let m=0;for(let A=0;A<h.length;A++)m+=h[A];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<d;_++){const b=g[_];b[0]=_,b[1]=h[_]}g.sort(X1);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(W1);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const b=a[_],E=b[0],L=b[1];E!==Number.MAX_SAFE_INTEGER&&L?(x&&u.getAttribute("morphTarget"+_)!==x[E]&&u.setAttribute("morphTarget"+_,x[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),r[_]=L,p+=L):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const A=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",A),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Ym=new Wt,jm=new Fm,Km=new Dw,Zm=new Xm,Oh=[],Fh=[],Bh=new Float32Array(16),Hh=new Float32Array(9),zh=new Float32Array(4);function Br(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Oh[r];if(s===void 0&&(s=new Float32Array(r),Oh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Aa(t,e){let n=Fh[e];n===void 0&&(n=new Int32Array(e),Fh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2fv(this.addr,e),mt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pt(n,e))return;t.uniform3fv(this.addr,e),mt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4fv(this.addr,e),mt(n,e)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;zh.set(i),t.uniformMatrix2fv(this.addr,!1,zh),mt(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Hh.set(i),t.uniformMatrix3fv(this.addr,!1,Hh),mt(n,i)}}function eR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Bh.set(i),t.uniformMatrix4fv(this.addr,!1,Bh),mt(n,i)}}function tR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2iv(this.addr,e),mt(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3iv(this.addr,e),mt(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4iv(this.addr,e),mt(n,e)}}function sR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2uiv(this.addr,e),mt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3uiv(this.addr,e),mt(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4uiv(this.addr,e),mt(n,e)}}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ym,r)}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Km,r)}function fR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zm,r)}function hR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jm,r)}function dR(t){switch(t){case 5126:return Y1;case 35664:return j1;case 35665:return K1;case 35666:return Z1;case 35674:return J1;case 35675:return Q1;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return rR;case 5125:return sR;case 36294:return oR;case 36295:return aR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return fR;case 36289:case 36303:case 36311:case 36292:return hR}}function pR(t,e){t.uniform1fv(this.addr,e)}function mR(t,e){const n=Br(e,this.size,2);t.uniform2fv(this.addr,n)}function _R(t,e){const n=Br(e,this.size,3);t.uniform3fv(this.addr,n)}function gR(t,e){const n=Br(e,this.size,4);t.uniform4fv(this.addr,n)}function vR(t,e){const n=Br(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xR(t,e){const n=Br(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yR(t,e){const n=Br(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bR(t,e){t.uniform1iv(this.addr,e)}function MR(t,e){t.uniform2iv(this.addr,e)}function SR(t,e){t.uniform3iv(this.addr,e)}function ER(t,e){t.uniform4iv(this.addr,e)}function wR(t,e){t.uniform1uiv(this.addr,e)}function TR(t,e){t.uniform2uiv(this.addr,e)}function AR(t,e){t.uniform3uiv(this.addr,e)}function RR(t,e){t.uniform4uiv(this.addr,e)}function CR(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);pt(i,s)||(t.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ym,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);pt(i,s)||(t.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Km,s[o])}function LR(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);pt(i,s)||(t.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zm,s[o])}function NR(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);pt(i,s)||(t.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||jm,s[o])}function DR(t){switch(t){case 5126:return pR;case 35664:return mR;case 35665:return _R;case 35666:return gR;case 35674:return vR;case 35675:return xR;case 35676:return yR;case 5124:case 35670:return bR;case 35667:case 35671:return MR;case 35668:case 35672:return SR;case 35669:case 35673:return ER;case 5125:return wR;case 36294:return TR;case 36295:return AR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return CR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return NR}}class IR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=dR(n.type)}}class UR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DR(n.type)}}class OR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function kh(t,e){t.seq.push(e),t.map[e.id]=e}function FR(t,e,n){const i=t.name,r=i.length;for(yl.lastIndex=0;;){const s=yl.exec(i),o=yl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kh(n,c===void 0?new IR(a,t,e):new UR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new OR(a),kh(n,f)),n=f}}}class Po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Gh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const BR=37297;let HR=0;function zR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kR(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===ta&&n===ea?i="LinearDisplayP3ToLinearSRGB":e===ea&&n===ta&&(i="LinearSRGBToLinearDisplayP3"),t){case kn:case Ea:return[i,"LinearTransferOETF"];case St:case eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zR(t.getShaderSource(e),o)}else return r}function GR(t,e){const n=kR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function VR(t,e){let n;switch(e){case kE:n="Linear";break;case GE:n="Reinhard";break;case VE:n="OptimizedCineon";break;case WE:n="ACESFilmic";break;case XE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kr).join(`
`)}function XR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Kr(t){return t!==""}function Wh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $R=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(t){return t.replace($R,jR)}const YR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jR(t,e){let n=Ve[e];if(n===void 0){const i=YR.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hc(n)}const KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(t){return t.replace(KR,ZR)}function ZR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $h(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function QR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function tC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case HE:e="ENVMAP_BLENDING_MIX";break;case zE:e="ENVMAP_BLENDING_ADD";break}return e}function nC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JR(n),c=QR(n),u=eC(n),f=tC(n),h=nC(n),d=n.isWebGL2?"":WR(n),g=XR(s),x=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[$h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[d,$h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==oi?VR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,GR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kr).join(`
`)),o=hc(o),o=Wh(o,n),o=Xh(o,n),a=hc(a),a=Wh(a,n),a=Xh(a,n),o=qh(o),a=qh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=A+m+o,b=A+p+a,E=Gh(r,r.VERTEX_SHADER,_),L=Gh(r,r.FRAGMENT_SHADER,b);r.attachShader(x,E),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(k){if(t.debug.checkShaderErrors){const oe=r.getProgramInfoLog(x).trim(),ae=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(L).trim();let W=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,L);else{const X=Vh(r,E,"vertex"),$=Vh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+X+`
`+$)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ae===""||I==="")&&(G=!1);G&&(k.diagnostics={runnable:W,programLog:oe,vertexShader:{log:ae,prefix:m},fragmentShader:{log:I,prefix:p}})}r.deleteShader(E),r.deleteShader(L),z=new Po(r,x),M=qR(r,x)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,BR)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=L,this}let rC=0;class sC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oC(e),n.set(e,i)),i}}class oC{constructor(e){this.id=rC++,this.code=e,this.usedTimes=0}}function aC(t,e,n,i,r,s,o){const a=new Bm,l=new sC,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,k,oe,ae){const I=oe.fog,W=ae.geometry,G=M.isMeshStandardMaterial?oe.environment:null,X=(M.isMeshStandardMaterial?n:e).get(M.envMap||G),$=X&&X.mapping===Sa?X.image.height:null,se=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,B=ue!==void 0?ue.length:0;let Q=0;W.morphAttributes.position!==void 0&&(Q=1),W.morphAttributes.normal!==void 0&&(Q=2),W.morphAttributes.color!==void 0&&(Q=3);let be,Me,Se,Re;if(se){const ct=vn[se];be=ct.vertexShader,Me=ct.fragmentShader}else be=M.vertexShader,Me=M.fragmentShader,l.update(M),Se=l.getVertexShaderID(M),Re=l.getFragmentShaderID(M);const Ue=t.getRenderTarget(),Ne=ae.isInstancedMesh===!0,Oe=!!M.map,We=!!M.matcap,De=!!X,v=!!M.aoMap,C=!!M.lightMap,P=!!M.bumpMap,U=!!M.normalMap,D=!!M.displacementMap,j=!!M.emissiveMap,Y=!!M.metalnessMap,q=!!M.roughnessMap,te=M.anisotropy>0,Z=M.clearcoat>0,xe=M.iridescence>0,S=M.sheen>0,y=M.transmission>0,F=te&&!!M.anisotropyMap,ne=Z&&!!M.clearcoatMap,ie=Z&&!!M.clearcoatNormalMap,le=Z&&!!M.clearcoatRoughnessMap,ge=xe&&!!M.iridescenceMap,fe=xe&&!!M.iridescenceThicknessMap,_e=S&&!!M.sheenColorMap,N=S&&!!M.sheenRoughnessMap,pe=!!M.specularMap,ce=!!M.specularColorMap,Ae=!!M.specularIntensityMap,Ee=y&&!!M.transmissionMap,Pe=y&&!!M.thicknessMap,Ce=!!M.gradientMap,Te=!!M.alphaMap,$e=M.alphaTest>0,O=!!M.alphaHash,ve=!!M.extensions,he=!!W.attributes.uv1,re=!!W.attributes.uv2,me=!!W.attributes.uv3;let Ie=oi;return M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Ie=t.toneMapping),{isWebGL2:u,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:Me,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ne,instancingColor:Ne&&ae.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:kn,map:Oe,matcap:We,envMap:De,envMapMode:De&&X.mapping,envMapCubeUVHeight:$,aoMap:v,lightMap:C,bumpMap:P,normalMap:U,displacementMap:h&&D,emissiveMap:j,normalMapObjectSpace:U&&M.normalMapType===rw,normalMapTangentSpace:U&&M.normalMapType===Dm,metalnessMap:Y,roughnessMap:q,anisotropy:te,anisotropyMap:F,clearcoat:Z,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:le,iridescence:xe,iridescenceMap:ge,iridescenceThicknessMap:fe,sheen:S,sheenColorMap:_e,sheenRoughnessMap:N,specularMap:pe,specularColorMap:ce,specularIntensityMap:Ae,transmission:y,transmissionMap:Ee,thicknessMap:Pe,gradientMap:Ce,opaque:M.transparent===!1&&M.blending===xr,alphaMap:Te,alphaTest:$e,alphaHash:O,combine:M.combine,mapUv:Oe&&x(M.map.channel),aoMapUv:v&&x(M.aoMap.channel),lightMapUv:C&&x(M.lightMap.channel),bumpMapUv:P&&x(M.bumpMap.channel),normalMapUv:U&&x(M.normalMap.channel),displacementMapUv:D&&x(M.displacementMap.channel),emissiveMapUv:j&&x(M.emissiveMap.channel),metalnessMapUv:Y&&x(M.metalnessMap.channel),roughnessMapUv:q&&x(M.roughnessMap.channel),anisotropyMapUv:F&&x(M.anisotropyMap.channel),clearcoatMapUv:ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:N&&x(M.sheenRoughnessMap.channel),specularMapUv:pe&&x(M.specularMap.channel),specularColorMapUv:ce&&x(M.specularColorMap.channel),specularIntensityMapUv:Ae&&x(M.specularIntensityMap.channel),transmissionMapUv:Ee&&x(M.transmissionMap.channel),thicknessMapUv:Pe&&x(M.thicknessMap.channel),alphaMapUv:Te&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(U||te),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:re,vertexUv3s:me,pointsUvs:ae.isPoints===!0&&!!W.attributes.uv&&(Oe||Te),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ve&&M.extensions.derivatives===!0,extensionFragDepth:ve&&M.extensions.fragDepth===!0,extensionDrawBuffers:ve&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)T.push(k),T.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(A(T,M),_(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function A(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const T=g[M.type];let k;if(T){const oe=vn[T];k=qw.clone(oe.uniforms)}else k=M.uniforms;return k}function E(M,T){let k;for(let oe=0,ae=c.length;oe<ae;oe++){const I=c[oe];if(I.cacheKey===T){k=I,++k.usedTimes;break}}return k===void 0&&(k=new iC(t,T,M,s),c.push(k)),k}function L(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:z}}function lC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,g,x,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,g,x,m){const p=o(f,h,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,g,x,m){const p=o(f,h,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||cC),i.length>1&&i.sort(h||Yh),r.length>1&&r.sort(h||Yh)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function uC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new jh,t.set(i,[o])):r>=s.length?(o=new jh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ke};break;case"SpotLight":n={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function hC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dC=0;function pC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mC(t,e){const n=new fC,i=hC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,o=new lt,a=new lt;function l(u,f){let h=0,d=0,g=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let x=0,m=0,p=0,A=0,_=0,b=0,E=0,L=0,R=0,z=0,M=0;u.sort(pC);const T=f===!0?Math.PI:1;for(let oe=0,ae=u.length;oe<ae;oe++){const I=u[oe],W=I.color,G=I.intensity,X=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*G*T,d+=W.g*G*T,g+=W.b*G*T;else if(I.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(I.sh.coefficients[se],G);M++}else if(I.isDirectionalLight){const se=n.get(I);if(se.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const ue=I.shadow,B=i.get(I);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=$,r.directionalShadowMatrix[x]=I.shadow.matrix,b++}r.directional[x]=se,x++}else if(I.isSpotLight){const se=n.get(I);se.position.setFromMatrixPosition(I.matrixWorld),se.color.copy(W).multiplyScalar(G*T),se.distance=X,se.coneCos=Math.cos(I.angle),se.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),se.decay=I.decay,r.spot[p]=se;const ue=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ue.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[p]=ue.matrix,I.castShadow){const B=i.get(I);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[p]=B,r.spotShadowMap[p]=$,L++}p++}else if(I.isRectAreaLight){const se=n.get(I);se.color.copy(W).multiplyScalar(G),se.halfWidth.set(I.width*.5,0,0),se.halfHeight.set(0,I.height*.5,0),r.rectArea[A]=se,A++}else if(I.isPointLight){const se=n.get(I);if(se.color.copy(I.color).multiplyScalar(I.intensity*T),se.distance=I.distance,se.decay=I.decay,I.castShadow){const ue=I.shadow,B=i.get(I);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=I.shadow.matrix,E++}r.point[m]=se,m++}else if(I.isHemisphereLight){const se=n.get(I);se.skyColor.copy(I.color).multiplyScalar(G*T),se.groundColor.copy(I.groundColor).multiplyScalar(G*T),r.hemi[_]=se,_++}}A>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==p||k.rectAreaLength!==A||k.hemiLength!==_||k.numDirectionalShadows!==b||k.numPointShadows!==E||k.numSpotShadows!==L||k.numSpotMaps!==R||k.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=p,r.rectArea.length=A,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=L+R-z,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=M,k.directionalLength=x,k.pointLength=m,k.spotLength=p,k.rectAreaLength=A,k.hemiLength=_,k.numDirectionalShadows=b,k.numPointShadows=E,k.numSpotShadows=L,k.numSpotMaps=R,k.numLightProbes=M,r.version=dC++)}function c(u,f){let h=0,d=0,g=0,x=0,m=0;const p=f.matrixWorldInverse;for(let A=0,_=u.length;A<_;A++){const b=u[A];if(b.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(b.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const E=r.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Kh(t,e){const n=new mC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _C(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Kh(t,e),n.set(s,[l])):o>=a.length?(l=new Kh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class gC extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vC extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bC(t,e,n){let i=new iu;const r=new de,s=new de,o=new bt,a=new gC({depthPacking:iw}),l=new vC,c={},u=n.maxTextureSize,f={[ui]:Ft,[Ft]:ui,[On]:On},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:xC,fragmentShader:yC}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Em;let p=this.type;this.render=function(E,L,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const z=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),k=t.state;k.setBlending(si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const oe=p!==In&&this.type===In,ae=p===In&&this.type!==In;for(let I=0,W=E.length;I<W;I++){const G=E[I],X=G.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const $=X.getFrameExtents();if(r.multiply($),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,X.mapSize.y=s.y)),X.map===null||oe===!0||ae===!0){const ue=this.type!==In?{minFilter:It,magFilter:It}:{};X.map!==null&&X.map.dispose(),X.map=new Ii(r.x,r.y,ue),X.map.texture.name=G.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const se=X.getViewportCount();for(let ue=0;ue<se;ue++){const B=X.getViewport(ue);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),k.viewport(o),X.updateMatrices(G,ue),i=X.getFrustum(),b(L,R,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===In&&A(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(z,M,T)};function A(E,L){const R=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ii(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(L,null,R,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(L,null,R,d,x,null)}function _(E,L,R,z){let M=null;const T=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const k=M.uuid,oe=L.uuid;let ae=c[k];ae===void 0&&(ae={},c[k]=ae);let I=ae[oe];I===void 0&&(I=M.clone(),ae[oe]=I),M=I}if(M.visible=L.visible,M.wireframe=L.wireframe,z===In?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=t.properties.get(M);k.light=R}return M}function b(E,L,R,z,M){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===In)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),ae=E.material;if(Array.isArray(ae)){const I=oe.groups;for(let W=0,G=I.length;W<G;W++){const X=I[W],$=ae[X.materialIndex];if($&&$.visible){const se=_(E,$,z,M);t.renderBufferDirect(R,null,oe,se,E,X)}}}else if(ae.visible){const I=_(E,ae,z,M);t.renderBufferDirect(R,null,oe,I,E,null)}}const k=E.children;for(let oe=0,ae=k.length;oe<ae;oe++)b(k[oe],L,R,z,M)}}function MC(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const ve=new bt;let he=null;const re=new bt(0,0,0,0);return{setMask:function(me){he!==me&&!O&&(t.colorMask(me,me,me,me),he=me)},setLocked:function(me){O=me},setClear:function(me,Ie,Ye,ct,$t){$t===!0&&(me*=ct,Ie*=ct,Ye*=ct),ve.set(me,Ie,Ye,ct),re.equals(ve)===!1&&(t.clearColor(me,Ie,Ye,ct),re.copy(ve))},reset:function(){O=!1,he=null,re.set(-1,0,0,0)}}}function s(){let O=!1,ve=null,he=null,re=null;return{setTest:function(me){me?Oe(t.DEPTH_TEST):We(t.DEPTH_TEST)},setMask:function(me){ve!==me&&!O&&(t.depthMask(me),ve=me)},setFunc:function(me){if(he!==me){switch(me){case NE:t.depthFunc(t.NEVER);break;case DE:t.depthFunc(t.ALWAYS);break;case IE:t.depthFunc(t.LESS);break;case Jo:t.depthFunc(t.LEQUAL);break;case UE:t.depthFunc(t.EQUAL);break;case OE:t.depthFunc(t.GEQUAL);break;case FE:t.depthFunc(t.GREATER);break;case BE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=me}},setLocked:function(me){O=me},setClear:function(me){re!==me&&(t.clearDepth(me),re=me)},reset:function(){O=!1,ve=null,he=null,re=null}}}function o(){let O=!1,ve=null,he=null,re=null,me=null,Ie=null,Ye=null,ct=null,$t=null;return{setTest:function(et){O||(et?Oe(t.STENCIL_TEST):We(t.STENCIL_TEST))},setMask:function(et){ve!==et&&!O&&(t.stencilMask(et),ve=et)},setFunc:function(et,Ct,_n){(he!==et||re!==Ct||me!==_n)&&(t.stencilFunc(et,Ct,_n),he=et,re=Ct,me=_n)},setOp:function(et,Ct,_n){(Ie!==et||Ye!==Ct||ct!==_n)&&(t.stencilOp(et,Ct,_n),Ie=et,Ye=Ct,ct=_n)},setLocked:function(et){O=et},setClear:function(et){$t!==et&&(t.clearStencil(et),$t=et)},reset:function(){O=!1,ve=null,he=null,re=null,me=null,Ie=null,Ye=null,ct=null,$t=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,x=[],m=null,p=!1,A=null,_=null,b=null,E=null,L=null,R=null,z=null,M=new Ke(0,0,0),T=0,k=!1,oe=null,ae=null,I=null,W=null,G=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,se=0;const ue=t.getParameter(t.VERSION);ue.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ue)[1]),$=se>=1):ue.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),$=se>=2);let B=null,Q={};const be=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Se=new bt().fromArray(be),Re=new bt().fromArray(Me);function Ue(O,ve,he,re){const me=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(O,Ie),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<he;Ye++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ve+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return Ie}const Ne={};Ne[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Jo),Y(!1),q(Lf),Oe(t.CULL_FACE),D(si);function Oe(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function We(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function De(O,ve){return d[O]!==ve?(t.bindFramebuffer(O,ve),d[O]=ve,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ve),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function v(O,ve){let he=x,re=!1;if(O)if(he=g.get(ve),he===void 0&&(he=[],g.set(ve,he)),O.isWebGLMultipleRenderTargets){const me=O.texture;if(he.length!==me.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,Ye=me.length;Ie<Ye;Ie++)he[Ie]=t.COLOR_ATTACHMENT0+Ie;he.length=me.length,re=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,re=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,re=!0);re&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function C(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[Mi]:t.FUNC_ADD,[gE]:t.FUNC_SUBTRACT,[vE]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Uf]=t.MIN,P[Of]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[Uf]=O.MIN_EXT,P[Of]=O.MAX_EXT)}const U={[xE]:t.ZERO,[yE]:t.ONE,[bE]:t.SRC_COLOR,[rc]:t.SRC_ALPHA,[AE]:t.SRC_ALPHA_SATURATE,[wE]:t.DST_COLOR,[SE]:t.DST_ALPHA,[ME]:t.ONE_MINUS_SRC_COLOR,[sc]:t.ONE_MINUS_SRC_ALPHA,[TE]:t.ONE_MINUS_DST_COLOR,[EE]:t.ONE_MINUS_DST_ALPHA,[RE]:t.CONSTANT_COLOR,[CE]:t.ONE_MINUS_CONSTANT_COLOR,[PE]:t.CONSTANT_ALPHA,[LE]:t.ONE_MINUS_CONSTANT_ALPHA};function D(O,ve,he,re,me,Ie,Ye,ct,$t,et){if(O===si){p===!0&&(We(t.BLEND),p=!1);return}if(p===!1&&(Oe(t.BLEND),p=!0),O!==_E){if(O!==A||et!==k){if((_!==Mi||L!==Mi)&&(t.blendEquation(t.FUNC_ADD),_=Mi,L=Mi),et)switch(O){case xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nf:t.blendFunc(t.ONE,t.ONE);break;case Df:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Df:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case If:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,E=null,R=null,z=null,M.set(0,0,0),T=0,A=O,k=et}return}me=me||ve,Ie=Ie||he,Ye=Ye||re,(ve!==_||me!==L)&&(t.blendEquationSeparate(P[ve],P[me]),_=ve,L=me),(he!==b||re!==E||Ie!==R||Ye!==z)&&(t.blendFuncSeparate(U[he],U[re],U[Ie],U[Ye]),b=he,E=re,R=Ie,z=Ye),(ct.equals(M)===!1||$t!==T)&&(t.blendColor(ct.r,ct.g,ct.b,$t),M.copy(ct),T=$t),A=O,k=!1}function j(O,ve){O.side===On?We(t.CULL_FACE):Oe(t.CULL_FACE);let he=O.side===Ft;ve&&(he=!he),Y(he),O.blending===xr&&O.transparent===!1?D(si):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const re=O.stencilWrite;c.setTest(re),re&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):We(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(O){oe!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),oe=O)}function q(O){O!==dE?(Oe(t.CULL_FACE),O!==ae&&(O===Lf?t.cullFace(t.BACK):O===pE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):We(t.CULL_FACE),ae=O}function te(O){O!==I&&($&&t.lineWidth(O),I=O)}function Z(O,ve,he){O?(Oe(t.POLYGON_OFFSET_FILL),(W!==ve||G!==he)&&(t.polygonOffset(ve,he),W=ve,G=he)):We(t.POLYGON_OFFSET_FILL)}function xe(O){O?Oe(t.SCISSOR_TEST):We(t.SCISSOR_TEST)}function S(O){O===void 0&&(O=t.TEXTURE0+X-1),B!==O&&(t.activeTexture(O),B=O)}function y(O,ve,he){he===void 0&&(B===null?he=t.TEXTURE0+X-1:he=B);let re=Q[he];re===void 0&&(re={type:void 0,texture:void 0},Q[he]=re),(re.type!==O||re.texture!==ve)&&(B!==he&&(t.activeTexture(he),B=he),t.bindTexture(O,ve||Ne[O]),re.type=O,re.texture=ve)}function F(){const O=Q[B];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){Se.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function Pe(O){Re.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Re.copy(O))}function Ce(O,ve){let he=f.get(ve);he===void 0&&(he=new WeakMap,f.set(ve,he));let re=he.get(O);re===void 0&&(re=t.getUniformBlockIndex(ve,O.name),he.set(O,re))}function Te(O,ve){const re=f.get(ve).get(O);u.get(ve)!==re&&(t.uniformBlockBinding(ve,re,O.__bindingPointIndex),u.set(ve,re))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,Q={},d={},g=new WeakMap,x=[],m=null,p=!1,A=null,_=null,b=null,E=null,L=null,R=null,z=null,M=new Ke(0,0,0),T=0,k=!1,oe=null,ae=null,I=null,W=null,G=null,Se.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:We,bindFramebuffer:De,drawBuffers:v,useProgram:C,setBlending:D,setMaterial:j,setFlipSided:Y,setCullFace:q,setLineWidth:te,setPolygonOffset:Z,setScissorTest:xe,activeTexture:S,bindTexture:y,unbindTexture:F,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:ce,texImage3D:Ae,updateUBOMapping:Ce,uniformBlockBinding:Te,texStorage2D:N,texStorage3D:pe,texSubImage2D:le,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ee,viewport:Pe,reset:$e}}function SC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,y){return p?new OffscreenCanvas(S,y):ra("canvas")}function _(S,y,F,ne){let ie=1;if((S.width>ne||S.height>ne)&&(ie=ne/Math.max(S.width,S.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const le=y?ia:Math.floor,ge=le(ie*S.width),fe=le(ie*S.height);x===void 0&&(x=A(ge,fe));const _e=F?A(ge,fe):x;return _e.width=ge,_e.height=fe,_e.getContext("2d").drawImage(S,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+fe+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return fc(S.width)&&fc(S.height)}function E(S){return a?!1:S.wrapS!==fn||S.wrapT!==fn||S.minFilter!==It&&S.minFilter!==Jt}function L(S,y){return S.generateMipmaps&&y&&S.minFilter!==It&&S.minFilter!==Jt}function R(S){t.generateMipmap(S)}function z(S,y,F,ne,ie=!1){if(a===!1)return y;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=y;if(y===t.RED&&(F===t.FLOAT&&(le=t.R32F),F===t.HALF_FLOAT&&(le=t.R16F),F===t.UNSIGNED_BYTE&&(le=t.R8)),y===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(le=t.R8UI),F===t.UNSIGNED_SHORT&&(le=t.R16UI),F===t.UNSIGNED_INT&&(le=t.R32UI),F===t.BYTE&&(le=t.R8I),F===t.SHORT&&(le=t.R16I),F===t.INT&&(le=t.R32I)),y===t.RG&&(F===t.FLOAT&&(le=t.RG32F),F===t.HALF_FLOAT&&(le=t.RG16F),F===t.UNSIGNED_BYTE&&(le=t.RG8)),y===t.RGBA){const ge=ie?Qo:Qe.getTransfer(ne);F===t.FLOAT&&(le=t.RGBA32F),F===t.HALF_FLOAT&&(le=t.RGBA16F),F===t.UNSIGNED_BYTE&&(le=ge===tt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(S,y,F){return L(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==It&&S.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){return S===It||S===Ff||S===$a?t.NEAREST:t.LINEAR}function k(S){const y=S.target;y.removeEventListener("dispose",k),ae(y),y.isVideoTexture&&g.delete(y)}function oe(S){const y=S.target;y.removeEventListener("dispose",oe),W(y)}function ae(S){const y=i.get(S);if(y.__webglInit===void 0)return;const F=S.source,ne=m.get(F);if(ne){const ie=ne[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(S),Object.keys(ne).length===0&&m.delete(F)}i.remove(S)}function I(S){const y=i.get(S);t.deleteTexture(y.__webglTexture);const F=S.source,ne=m.get(F);delete ne[y.__cacheKey],o.memory.textures--}function W(S){const y=S.texture,F=i.get(S),ne=i.get(y);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(F.__webglFramebuffer[ie]))for(let le=0;le<F.__webglFramebuffer[ie].length;le++)t.deleteFramebuffer(F.__webglFramebuffer[ie][le]);else t.deleteFramebuffer(F.__webglFramebuffer[ie]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[ie])}else{if(Array.isArray(F.__webglFramebuffer))for(let ie=0;ie<F.__webglFramebuffer.length;ie++)t.deleteFramebuffer(F.__webglFramebuffer[ie]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,le=y.length;ie<le;ie++){const ge=i.get(y[ie]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(y[ie])}i.remove(y),i.remove(S)}let G=0;function X(){G=0}function $(){const S=G;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),G+=1,S}function se(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function ue(S,y){const F=i.get(S);if(S.isVideoTexture&&Z(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const ne=S.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(F,S,y);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+y)}function B(S,y){const F=i.get(S);if(S.version>0&&F.__version!==S.version){Oe(F,S,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+y)}function Q(S,y){const F=i.get(S);if(S.version>0&&F.__version!==S.version){Oe(F,S,y);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+y)}function be(S,y){const F=i.get(S);if(S.version>0&&F.__version!==S.version){We(F,S,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+y)}const Me={[lc]:t.REPEAT,[fn]:t.CLAMP_TO_EDGE,[cc]:t.MIRRORED_REPEAT},Se={[It]:t.NEAREST,[Ff]:t.NEAREST_MIPMAP_NEAREST,[$a]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[qE]:t.LINEAR_MIPMAP_NEAREST,[vs]:t.LINEAR_MIPMAP_LINEAR},Re={[sw]:t.NEVER,[hw]:t.ALWAYS,[ow]:t.LESS,[lw]:t.LEQUAL,[aw]:t.EQUAL,[fw]:t.GEQUAL,[cw]:t.GREATER,[uw]:t.NOTEQUAL};function Ue(S,y,F){if(F?(t.texParameteri(S,t.TEXTURE_WRAP_S,Me[y.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,Me[y.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,Me[y.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Se[y.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Se[y.minFilter])):(t.texParameteri(S,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(S,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==fn||y.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,t.TEXTURE_MAG_FILTER,T(y.magFilter)),t.texParameteri(S,t.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==It&&y.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===It||y.minFilter!==$a&&y.minFilter!==vs||y.type===ni&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===xs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(S,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Ne(S,y){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",k));const ne=y.source;let ie=m.get(ne);ie===void 0&&(ie={},m.set(ne,ie));const le=se(y);if(le!==S.__cacheKey){ie[le]===void 0&&(ie[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[le].usedTimes++;const ge=ie[S.__cacheKey];ge!==void 0&&(ie[S.__cacheKey].usedTimes--,ge.usedTimes===0&&I(y)),S.__cacheKey=le,S.__webglTexture=ie[le].texture}return F}function Oe(S,y,F){let ne=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=Ne(S,y),le=y.source;n.bindTexture(ne,S.__webglTexture,t.TEXTURE0+F);const ge=i.get(le);if(le.version!==ge.__version||ie===!0){n.activeTexture(t.TEXTURE0+F);const fe=Qe.getPrimaries(Qe.workingColorSpace),_e=y.colorSpace===en?null:Qe.getPrimaries(y.colorSpace),N=y.colorSpace===en||fe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const pe=E(y)&&b(y.image)===!1;let ce=_(y.image,pe,!1,u);ce=xe(y,ce);const Ae=b(ce)||a,Ee=s.convert(y.format,y.colorSpace);let Pe=s.convert(y.type),Ce=z(y.internalFormat,Ee,Pe,y.colorSpace,y.isVideoTexture);Ue(ne,y,Ae);let Te;const $e=y.mipmaps,O=a&&y.isVideoTexture!==!0,ve=ge.__version===void 0||ie===!0,he=M(y,ce,Ae);if(y.isDepthTexture)Ce=t.DEPTH_COMPONENT,a?y.type===ni?Ce=t.DEPTH_COMPONENT32F:y.type===ti?Ce=t.DEPTH_COMPONENT24:y.type===Ri?Ce=t.DEPTH24_STENCIL8:Ce=t.DEPTH_COMPONENT16:y.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ci&&Ce===t.DEPTH_COMPONENT&&y.type!==Qc&&y.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ti,Pe=s.convert(y.type)),y.format===Pr&&Ce===t.DEPTH_COMPONENT&&(Ce=t.DEPTH_STENCIL,y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ri,Pe=s.convert(y.type))),ve&&(O?n.texStorage2D(t.TEXTURE_2D,1,Ce,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ce.width,ce.height,0,Ee,Pe,null));else if(y.isDataTexture)if($e.length>0&&Ae){O&&ve&&n.texStorage2D(t.TEXTURE_2D,he,Ce,$e[0].width,$e[0].height);for(let re=0,me=$e.length;re<me;re++)Te=$e[re],O?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Te.width,Te.height,Ee,Pe,Te.data):n.texImage2D(t.TEXTURE_2D,re,Ce,Te.width,Te.height,0,Ee,Pe,Te.data);y.generateMipmaps=!1}else O?(ve&&n.texStorage2D(t.TEXTURE_2D,he,Ce,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Ee,Pe,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,ce.width,ce.height,0,Ee,Pe,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ce,$e[0].width,$e[0].height,ce.depth);for(let re=0,me=$e.length;re<me;re++)Te=$e[re],y.format!==hn?Ee!==null?O?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Te.width,Te.height,ce.depth,Ee,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Ce,Te.width,Te.height,ce.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Te.width,Te.height,ce.depth,Ee,Pe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Ce,Te.width,Te.height,ce.depth,0,Ee,Pe,Te.data)}else{O&&ve&&n.texStorage2D(t.TEXTURE_2D,he,Ce,$e[0].width,$e[0].height);for(let re=0,me=$e.length;re<me;re++)Te=$e[re],y.format!==hn?Ee!==null?O?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,Te.width,Te.height,Ee,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Te.width,Te.height,Ee,Pe,Te.data):n.texImage2D(t.TEXTURE_2D,re,Ce,Te.width,Te.height,0,Ee,Pe,Te.data)}else if(y.isDataArrayTexture)O?(ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ce,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ee,Pe,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ce.width,ce.height,ce.depth,0,Ee,Pe,ce.data);else if(y.isData3DTexture)O?(ve&&n.texStorage3D(t.TEXTURE_3D,he,Ce,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ee,Pe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ce.width,ce.height,ce.depth,0,Ee,Pe,ce.data);else if(y.isFramebufferTexture){if(ve)if(O)n.texStorage2D(t.TEXTURE_2D,he,Ce,ce.width,ce.height);else{let re=ce.width,me=ce.height;for(let Ie=0;Ie<he;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Ce,re,me,0,Ee,Pe,null),re>>=1,me>>=1}}else if($e.length>0&&Ae){O&&ve&&n.texStorage2D(t.TEXTURE_2D,he,Ce,$e[0].width,$e[0].height);for(let re=0,me=$e.length;re<me;re++)Te=$e[re],O?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ee,Pe,Te):n.texImage2D(t.TEXTURE_2D,re,Ce,Ee,Pe,Te);y.generateMipmaps=!1}else O?(ve&&n.texStorage2D(t.TEXTURE_2D,he,Ce,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Pe,ce)):n.texImage2D(t.TEXTURE_2D,0,Ce,Ee,Pe,ce);L(y,Ae)&&R(ne),ge.__version=le.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function We(S,y,F){if(y.image.length!==6)return;const ne=Ne(S,y),ie=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+F);const le=i.get(ie);if(ie.version!==le.__version||ne===!0){n.activeTexture(t.TEXTURE0+F);const ge=Qe.getPrimaries(Qe.workingColorSpace),fe=y.colorSpace===en?null:Qe.getPrimaries(y.colorSpace),_e=y.colorSpace===en||ge===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const N=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!N&&!pe?ce[re]=_(y.image[re],!1,!0,c):ce[re]=pe?y.image[re].image:y.image[re],ce[re]=xe(y,ce[re]);const Ae=ce[0],Ee=b(Ae)||a,Pe=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type),Te=z(y.internalFormat,Pe,Ce,y.colorSpace),$e=a&&y.isVideoTexture!==!0,O=le.__version===void 0||ne===!0;let ve=M(y,Ae,Ee);Ue(t.TEXTURE_CUBE_MAP,y,Ee);let he;if(N){$e&&O&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Te,Ae.width,Ae.height);for(let re=0;re<6;re++){he=ce[re].mipmaps;for(let me=0;me<he.length;me++){const Ie=he[me];y.format!==hn?Pe!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Ie.width,Ie.height,Pe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Te,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Ie.width,Ie.height,Pe,Ce,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Te,Ie.width,Ie.height,0,Pe,Ce,Ie.data)}}}else{he=y.mipmaps,$e&&O&&(he.length>0&&ve++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Te,ce[0].width,ce[0].height));for(let re=0;re<6;re++)if(pe){$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,Pe,Ce,ce[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Te,ce[re].width,ce[re].height,0,Pe,Ce,ce[re].data);for(let me=0;me<he.length;me++){const Ye=he[me].image[re].image;$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Ye.width,Ye.height,Pe,Ce,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Te,Ye.width,Ye.height,0,Pe,Ce,Ye.data)}}else{$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Ce,ce[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Te,Pe,Ce,ce[re]);for(let me=0;me<he.length;me++){const Ie=he[me];$e?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Pe,Ce,Ie.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Te,Pe,Ce,Ie.image[re])}}}L(y,Ee)&&R(t.TEXTURE_CUBE_MAP),le.__version=ie.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function De(S,y,F,ne,ie,le){const ge=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),_e=z(F.internalFormat,ge,fe,F.colorSpace);if(!i.get(y).__hasExternalTextures){const pe=Math.max(1,y.width>>le),ce=Math.max(1,y.height>>le);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,le,_e,pe,ce,y.depth,0,ge,fe,null):n.texImage2D(ie,le,_e,pe,ce,0,ge,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),te(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,i.get(F).__webglTexture,0,q(y)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,i.get(F).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function v(S,y,F){if(t.bindRenderbuffer(t.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||te(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ni?ne=t.DEPTH_COMPONENT32F:ie.type===ti&&(ne=t.DEPTH_COMPONENT24));const le=q(y);te(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ne,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ne,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){const ne=q(y);F&&te(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,y.width,y.height):te(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,S)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<ne.length;ie++){const le=ne[ie],ge=s.convert(le.format,le.colorSpace),fe=s.convert(le.type),_e=z(le.internalFormat,ge,fe,le.colorSpace),N=q(y);F&&te(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,N,_e,y.width,y.height):te(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,_e,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,_e,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ue(y.depthTexture,0);const ne=i.get(y.depthTexture).__webglTexture,ie=q(y);if(y.depthTexture.format===Ci)te(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Pr)te(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function P(S){const y=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");C(y.__webglFramebuffer,S)}else if(F){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=t.createRenderbuffer(),v(y.__webglDepthbuffer[ne],S,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),v(y.__webglDepthbuffer,S,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(S,y,F){const ne=i.get(S);y!==void 0&&De(ne.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&P(S)}function D(S){const y=S.texture,F=i.get(S),ne=i.get(y);S.addEventListener("dispose",oe),S.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=y.version,o.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,ge=b(S)||a;if(ie){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)F.__webglFramebuffer[fe][_e]=t.createFramebuffer()}else F.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)F.__webglFramebuffer[fe]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const fe=S.texture;for(let _e=0,N=fe.length;_e<N;_e++){const pe=i.get(fe[_e]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&te(S)===!1){const fe=le?y:[y];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const N=fe[_e];F.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);const pe=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),Ae=z(N.internalFormat,pe,ce,N.colorSpace,S.isXRRenderTarget===!0),Ee=q(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Ae,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),v(F.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,y,ge);for(let fe=0;fe<6;fe++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)De(F.__webglFramebuffer[fe][_e],S,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else De(F.__webglFramebuffer[fe],S,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(y,ge)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const fe=S.texture;for(let _e=0,N=fe.length;_e<N;_e++){const pe=fe[_e],ce=i.get(pe);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),Ue(t.TEXTURE_2D,pe,ge),De(F.__webglFramebuffer,S,pe,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),L(pe,ge)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?fe=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,ne.__webglTexture),Ue(fe,y,ge),a&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)De(F.__webglFramebuffer[_e],S,y,t.COLOR_ATTACHMENT0,fe,_e);else De(F.__webglFramebuffer,S,y,t.COLOR_ATTACHMENT0,fe,0);L(y,ge)&&R(fe),n.unbindTexture()}S.depthBuffer&&P(S)}function j(S){const y=b(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0,ie=F.length;ne<ie;ne++){const le=F[ne];if(L(le,y)){const ge=S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(le).__webglTexture;n.bindTexture(ge,fe),R(ge),n.unbindTexture()}}}function Y(S){if(a&&S.samples>0&&te(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,ne=S.height;let ie=t.COLOR_BUFFER_BIT;const le=[],ge=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let N=0;N<y.length;N++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let N=0;N<y.length;N++){le.push(t.COLOR_ATTACHMENT0+N),S.depthBuffer&&le.push(ge);const pe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(pe===!1&&(S.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[N]),pe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),_e){const ce=i.get(y[N]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,F,ne,0,0,F,ne,ie,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let N=0;N<y.length;N++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,fe.__webglColorRenderbuffer[N]);const pe=i.get(y[N]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function q(S){return Math.min(f,S.samples)}function te(S){const y=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Z(S){const y=o.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function xe(S,y){const F=S.colorSpace,ne=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===uc||F!==kn&&F!==en&&(Qe.getTransfer(F)===tt?a===!1?e.has("EXT_sRGB")===!0&&ne===hn?(S.format=uc,S.minFilter=Jt,S.generateMipmaps=!1):y=Um.sRGBToLinear(y):(ne!==hn||ie!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=be,this.rebindTextures=U,this.setupRenderTarget=D,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=De,this.useMultisampledRTT=te}function EC(t,e,n){const i=n.isWebGL2;function r(s,o=en){let a;const l=Qe.getTransfer(o);if(s===ai)return t.UNSIGNED_BYTE;if(s===Am)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Rm)return t.UNSIGNED_SHORT_5_5_5_1;if(s===$E)return t.BYTE;if(s===YE)return t.SHORT;if(s===Qc)return t.UNSIGNED_SHORT;if(s===Tm)return t.INT;if(s===ti)return t.UNSIGNED_INT;if(s===ni)return t.FLOAT;if(s===xs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jE)return t.ALPHA;if(s===hn)return t.RGBA;if(s===KE)return t.LUMINANCE;if(s===ZE)return t.LUMINANCE_ALPHA;if(s===Ci)return t.DEPTH_COMPONENT;if(s===Pr)return t.DEPTH_STENCIL;if(s===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===JE)return t.RED;if(s===Cm)return t.RED_INTEGER;if(s===QE)return t.RG;if(s===Pm)return t.RG_INTEGER;if(s===Lm)return t.RGBA_INTEGER;if(s===Ya||s===ja||s===Ka||s===Za)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bf||s===Hf||s===zf||s===kf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ew)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gf||s===Vf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gf)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wf||s===Xf||s===qf||s===$f||s===Yf||s===jf||s===Kf||s===Zf||s===Jf||s===Qf||s===eh||s===th||s===nh||s===ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$f)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qf)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===th)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ih)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ja||s===rh||s===sh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ja)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tw||s===oh||s===ah||s===lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ja)return a.COMPRESSED_RED_RGTC1_EXT;if(s===oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class wC extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TC={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class AC extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ci&&(i=ti),i===void 0&&u===Pr&&(i=Ri),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class RC extends Hi{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const x=n.getContextAttributes();let m=null,p=null;const A=[],_=[],b=new Qt;b.layers.enable(1),b.viewport=new bt;const E=new Qt;E.layers.enable(2),E.viewport=new bt;const L=[b,E],R=new wC;R.layers.enable(1),R.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=A[B];return Q===void 0&&(Q=new bl,A[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=A[B];return Q===void 0&&(Q=new bl,A[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=A[B];return Q===void 0&&(Q=new bl,A[B]=Q),Q.getHandSpace()};function T(B){const Q=_.indexOf(B.inputSource);if(Q===-1)return;const be=A[Q];be!==void 0&&(be.update(B.inputSource,B.frame,c||o),be.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",oe);for(let B=0;B<A.length;B++){const Q=_[B];Q!==null&&(_[B]=null,A[B].disconnect(Q))}z=null,M=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",k),r.addEventListener("inputsourceschange",oe),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:d}),p=new Ii(d.framebufferWidth,d.framebufferHeight,{format:hn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,be=null,Me=null;x.depth&&(Me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=x.stencil?Pr:Ci,be=x.stencil?Ri:ti);const Se={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),p=new Ii(h.textureWidth,h.textureHeight,{format:hn,type:ai,depthTexture:new AC(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function oe(B){for(let Q=0;Q<B.removed.length;Q++){const be=B.removed[Q],Me=_.indexOf(be);Me>=0&&(_[Me]=null,A[Me].disconnect(be))}for(let Q=0;Q<B.added.length;Q++){const be=B.added[Q];let Me=_.indexOf(be);if(Me===-1){for(let Re=0;Re<A.length;Re++)if(Re>=_.length){_.push(be),Me=Re;break}else if(_[Re]===null){_[Re]=be,Me=Re;break}if(Me===-1)break}const Se=A[Me];Se&&Se.connect(be)}}const ae=new H,I=new H;function W(B,Q,be){ae.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(be.matrixWorld);const Me=ae.distanceTo(I),Se=Q.projectionMatrix.elements,Re=be.projectionMatrix.elements,Ue=Se[14]/(Se[10]-1),Ne=Se[14]/(Se[10]+1),Oe=(Se[9]+1)/Se[5],We=(Se[9]-1)/Se[5],De=(Se[8]-1)/Se[0],v=(Re[8]+1)/Re[0],C=Ue*De,P=Ue*v,U=Me/(-De+v),D=U*-De;Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(D),B.translateZ(U),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const j=Ue+U,Y=Ne+U,q=C-D,te=P+(Me-D),Z=Oe*Ne/Y*j,xe=We*Ne/Y*j;B.projectionMatrix.makePerspective(q,te,Z,xe,j,Y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function G(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;R.near=E.near=b.near=B.near,R.far=E.far=b.far=B.far,(z!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,M=R.far);const Q=B.parent,be=R.cameras;G(R,Q);for(let Me=0;Me<be.length;Me++)G(be[Me],Q);be.length===2?W(R,b,E):R.projectionMatrix.copy(b.projectionMatrix),X(B,R,Q)};function X(B,Q,be){be===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(be.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ys*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let $=null;function se(B,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Me=!1;be.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let Se=0;Se<be.length;Se++){const Re=be[Se];let Ue=null;if(d!==null)Ue=d.getViewport(Re);else{const Oe=f.getViewSubImage(h,Re);Ue=Oe.viewport,Se===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,h.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let Ne=L[Se];Ne===void 0&&(Ne=new Qt,Ne.layers.enable(Se),Ne.viewport=new bt,L[Se]=Ne),Ne.matrix.fromArray(Re.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Re.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Se===0&&(R.matrix.copy(Ne.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(Ne)}}for(let be=0;be<A.length;be++){const Me=_[be],Se=A[be];Me!==null&&Se!==void 0&&Se.update(Me,Q,c||o)}$&&$(B,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ue=new qm;ue.setAnimationLoop(se),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}}function CC(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,_){const b=_.program;i.uniformBlockBinding(A,b)}function c(A,_){let b=r[A.id];b===void 0&&(g(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(A,E);const L=e.render.frame;s[A.id]!==L&&(h(A),s[A.id]=L)}function u(A){const _=f();A.__bindingPointIndex=_;const b=t.createBuffer(),E=A.__size,L=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const _=r[A.id],b=A.uniforms,E=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let L=0,R=b.length;L<R;L++){const z=b[L];if(d(z,L,E)===!0){const M=z.__offset,T=Array.isArray(z.value)?z.value:[z.value];let k=0;for(let oe=0;oe<T.length;oe++){const ae=T[oe],I=x(ae);typeof ae=="number"?(z.__data[0]=ae,t.bufferSubData(t.UNIFORM_BUFFER,M+k,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=ae.elements[0],z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=ae.elements[0],z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=ae.elements[0]):(ae.toArray(z.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(A,_,b){const E=A.value;if(b[_]===void 0){if(typeof E=="number")b[_]=E;else{const L=Array.isArray(E)?E:[E],R=[];for(let z=0;z<L.length;z++)R.push(L[z].clone());b[_]=R}return!0}else if(typeof E=="number"){if(b[_]!==E)return b[_]=E,!0}else{const L=Array.isArray(b[_])?b[_]:[b[_]],R=Array.isArray(E)?E:[E];for(let z=0;z<L.length;z++){const M=L[z];if(M.equals(R[z])===!1)return M.copy(R[z]),!0}}return!1}function g(A){const _=A.uniforms;let b=0;const E=16;let L=0;for(let R=0,z=_.length;R<z;R++){const M=_[R],T={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let oe=0,ae=k.length;oe<ae;oe++){const I=k[oe],W=x(I);T.boundary+=W.boundary,T.storage+=W.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,R>0){L=b%E;const oe=E-L;L!==0&&oe-T.boundary<0&&(b+=E-L,M.__offset=b)}b+=T.storage}return L=b%E,L>0&&(b+=E-L),A.__size=b,A.__cache={},this}function x(A){const _={boundary:0,storage:0};return typeof A=="number"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function m(A){const _=A.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Jm{constructor(e={}){const{canvas:n=Rw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let b=!1,E=0,L=0,R=null,z=-1,M=null;const T=new bt,k=new bt;let oe=null;const ae=new Ke(0);let I=0,W=n.width,G=n.height,X=1,$=null,se=null;const ue=new bt(0,0,W,G),B=new bt(0,0,W,G);let Q=!1;const be=new iu;let Me=!1,Se=!1,Re=null;const Ue=new lt,Ne=new de,Oe=new H,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return R===null?X:1}let v=i;function C(w,V){for(let K=0;K<w.length;K++){const J=w[K],ee=n.getContext(J,V);if(ee!==null)return ee}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zc}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",ve,!1),v===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),v=C(V,w),v===null)throw C(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,U,D,j,Y,q,te,Z,xe,S,y,F,ne,ie,le,ge,fe,_e,N,pe,ce,Ae,Ee,Pe;function Ce(){P=new z1(v),U=new I1(v,P,e),P.init(U),Ae=new EC(v,P,U),D=new MC(v,P,U),j=new V1(v),Y=new lC,q=new SC(v,P,D,Y,U,Ae,j),te=new O1(_),Z=new H1(_),xe=new Qw(v,U),Ee=new N1(v,P,xe,U),S=new k1(v,xe,j,Ee),y=new $1(v,S,xe,j),N=new q1(v,U,q),ge=new U1(Y),F=new aC(_,te,Z,P,U,Ee,ge),ne=new CC(_,Y),ie=new uC,le=new _C(P,U),_e=new L1(_,te,Z,D,y,h,l),fe=new bC(_,y,U),Pe=new PC(v,j,U,D),pe=new D1(v,P,j,U),ce=new G1(v,P,j,U),j.programs=F.programs,_.capabilities=U,_.extensions=P,_.properties=Y,_.renderLists=ie,_.shadowMap=fe,_.state=D,_.info=j}Ce();const Te=new RC(_,v);this.xr=Te,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(W,G,!1))},this.getSize=function(w){return w.set(W,G)},this.setSize=function(w,V,K=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,G=V,n.width=Math.floor(w*X),n.height=Math.floor(V*X),K===!0&&(n.style.width=w+"px",n.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(W*X,G*X).floor()},this.setDrawingBufferSize=function(w,V,K){W=w,G=V,X=K,n.width=Math.floor(w*K),n.height=Math.floor(V*K),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,V,K,J){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,V,K,J),D.viewport(T.copy(ue).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,V,K,J){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,V,K,J),D.scissor(k.copy(B).multiplyScalar(X).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){D.setScissorTest(Q=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(w=!0,V=!0,K=!0){let J=0;if(w){let ee=!1;if(R!==null){const we=R.texture.format;ee=we===Lm||we===Pm||we===Cm}if(ee){const we=R.texture.type,Le=we===ai||we===ti||we===Qc||we===Ri||we===Am||we===Rm,Fe=_e.getClearColor(),He=_e.getClearAlpha(),Xe=Fe.r,ke=Fe.g,Ge=Fe.b;Le?(d[0]=Xe,d[1]=ke,d[2]=Ge,d[3]=He,v.clearBufferuiv(v.COLOR,0,d)):(g[0]=Xe,g[1]=ke,g[2]=Ge,g[3]=He,v.clearBufferiv(v.COLOR,0,g))}else J|=v.COLOR_BUFFER_BIT}V&&(J|=v.DEPTH_BUFFER_BIT),K&&(J|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ie.dispose(),le.dispose(),Y.dispose(),te.dispose(),Z.dispose(),y.dispose(),Ee.dispose(),Pe.dispose(),F.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",$t),Te.removeEventListener("sessionend",et),Re&&(Re.dispose(),Re=null),Ct.stop()};function $e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=j.autoReset,V=fe.enabled,K=fe.autoUpdate,J=fe.needsUpdate,ee=fe.type;Ce(),j.autoReset=w,fe.enabled=V,fe.autoUpdate=K,fe.needsUpdate=J,fe.type=ee}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const V=w.target;V.removeEventListener("dispose",he),re(V)}function re(w){me(w),Y.remove(w)}function me(w){const V=Y.get(w).programs;V!==void 0&&(V.forEach(function(K){F.releaseProgram(K)}),w.isShaderMaterial&&F.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,K,J,ee,we){V===null&&(V=We);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=u_(w,V,K,J,ee);D.setMaterial(J,Le);let He=K.index,Xe=1;if(J.wireframe===!0){if(He=S.getWireframeAttribute(K),He===void 0)return;Xe=2}const ke=K.drawRange,Ge=K.attributes.position;let at=ke.start*Xe,Ht=(ke.start+ke.count)*Xe;we!==null&&(at=Math.max(at,we.start*Xe),Ht=Math.min(Ht,(we.start+we.count)*Xe)),He!==null?(at=Math.max(at,0),Ht=Math.min(Ht,He.count)):Ge!=null&&(at=Math.max(at,0),Ht=Math.min(Ht,Ge.count));const _t=Ht-at;if(_t<0||_t===1/0)return;Ee.setup(ee,J,Fe,K,He);let An,st=pe;if(He!==null&&(An=xe.get(He),st=ce,st.setIndex(An)),ee.isMesh)J.wireframe===!0?(D.setLineWidth(J.wireframeLinewidth*De()),st.setMode(v.LINES)):st.setMode(v.TRIANGLES);else if(ee.isLine){let je=J.linewidth;je===void 0&&(je=1),D.setLineWidth(je*De()),ee.isLineSegments?st.setMode(v.LINES):ee.isLineLoop?st.setMode(v.LINE_LOOP):st.setMode(v.LINE_STRIP)}else ee.isPoints?st.setMode(v.POINTS):ee.isSprite&&st.setMode(v.TRIANGLES);if(ee.isInstancedMesh)st.renderInstances(at,_t,ee.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ca=Math.min(K.instanceCount,je);st.renderInstances(at,_t,Ca)}else st.render(at,_t)};function Ie(w,V,K){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=Ft,w.needsUpdate=!0,Ns(w,V,K),w.side=ui,w.needsUpdate=!0,Ns(w,V,K),w.side=On):Ns(w,V,K)}this.compile=function(w,V,K=null){K===null&&(K=w),m=le.get(K),m.init(),A.push(m),K.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),w!==K&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(_._useLegacyLights);const J=new Set;return w.traverse(function(ee){const we=ee.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Fe=we[Le];Ie(Fe,K,ee),J.add(Fe)}else Ie(we,K,ee),J.add(we)}),A.pop(),m=null,J},this.compileAsync=function(w,V,K=null){const J=this.compile(w,V,K);return new Promise(ee=>{function we(){if(J.forEach(function(Le){Y.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){ee(w);return}setTimeout(we,10)}P.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ye=null;function ct(w){Ye&&Ye(w)}function $t(){Ct.stop()}function et(){Ct.start()}const Ct=new qm;Ct.setAnimationLoop(ct),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){Ye=w,Te.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},Te.addEventListener("sessionstart",$t),Te.addEventListener("sessionend",et),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,R),m=le.get(w,A.length),m.init(),A.push(m),Ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),be.setFromProjectionMatrix(Ue),Se=this.localClippingEnabled,Me=ge.init(this.clippingPlanes,Se),x=ie.get(w,p.length),x.init(),p.push(x),_n(w,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort($,se),this.info.render.frame++,Me===!0&&ge.beginShadows();const K=m.state.shadowsArray;if(fe.render(K,w,V),Me===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(x,w),m.setupLights(_._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let ee=0,we=J.length;ee<we;ee++){const Le=J[ee];lu(x,w,Le,Le.viewport)}}else lu(x,w,V);R!==null&&(q.updateMultisampleRenderTarget(R),q.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,V),Ee.resetDefaultState(),z=-1,M=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function _n(w,V,K,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||be.intersectsSprite(w)){J&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ue);const Le=y.update(w),Fe=w.material;Fe.visible&&x.push(w,Le,Fe,K,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||be.intersectsObject(w))){const Le=y.update(w),Fe=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(Ue)),Array.isArray(Fe)){const He=Le.groups;for(let Xe=0,ke=He.length;Xe<ke;Xe++){const Ge=He[Xe],at=Fe[Ge.materialIndex];at&&at.visible&&x.push(w,Le,at,K,Oe.z,Ge)}}else Fe.visible&&x.push(w,Le,Fe,K,Oe.z,null)}}const we=w.children;for(let Le=0,Fe=we.length;Le<Fe;Le++)_n(we[Le],V,K,J)}function lu(w,V,K,J){const ee=w.opaque,we=w.transmissive,Le=w.transparent;m.setupLightsView(K),Me===!0&&ge.setGlobalState(_.clippingPlanes,K),we.length>0&&c_(ee,we,V,K),J&&D.viewport(T.copy(J)),ee.length>0&&Ls(ee,V,K),we.length>0&&Ls(we,V,K),Le.length>0&&Ls(Le,V,K),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function c_(w,V,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const we=U.isWebGL2;Re===null&&(Re=new Ii(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?xs:ai,minFilter:vs,samples:we?4:0})),_.getDrawingBufferSize(Ne),we?Re.setSize(Ne.x,Ne.y):Re.setSize(ia(Ne.x),ia(Ne.y));const Le=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(ae),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Fe=_.toneMapping;_.toneMapping=oi,Ls(w,K,J),q.updateMultisampleRenderTarget(Re),q.updateRenderTargetMipmap(Re);let He=!1;for(let Xe=0,ke=V.length;Xe<ke;Xe++){const Ge=V[Xe],at=Ge.object,Ht=Ge.geometry,_t=Ge.material,An=Ge.group;if(_t.side===On&&at.layers.test(J.layers)){const st=_t.side;_t.side=Ft,_t.needsUpdate=!0,cu(at,K,J,Ht,_t,An),_t.side=st,_t.needsUpdate=!0,He=!0}}He===!0&&(q.updateMultisampleRenderTarget(Re),q.updateRenderTargetMipmap(Re)),_.setRenderTarget(Le),_.setClearColor(ae,I),_.toneMapping=Fe}function Ls(w,V,K){const J=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,we=w.length;ee<we;ee++){const Le=w[ee],Fe=Le.object,He=Le.geometry,Xe=J===null?Le.material:J,ke=Le.group;Fe.layers.test(K.layers)&&cu(Fe,V,K,He,Xe,ke)}}function cu(w,V,K,J,ee,we){w.onBeforeRender(_,V,K,J,ee,we),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(_,V,K,J,w,we),ee.transparent===!0&&ee.side===On&&ee.forceSinglePass===!1?(ee.side=Ft,ee.needsUpdate=!0,_.renderBufferDirect(K,V,J,ee,w,we),ee.side=ui,ee.needsUpdate=!0,_.renderBufferDirect(K,V,J,ee,w,we),ee.side=On):_.renderBufferDirect(K,V,J,ee,w,we),w.onAfterRender(_,V,K,J,ee,we)}function Ns(w,V,K){V.isScene!==!0&&(V=We);const J=Y.get(w),ee=m.state.lights,we=m.state.shadowsArray,Le=ee.state.version,Fe=F.getParameters(w,ee.state,we,V,K),He=F.getProgramCacheKey(Fe);let Xe=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?Z:te).get(w.envMap||J.environment),Xe===void 0&&(w.addEventListener("dispose",he),Xe=new Map,J.programs=Xe);let ke=Xe.get(He);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===Le)return fu(w,Fe),ke}else Fe.uniforms=F.getUniforms(w),w.onBuild(K,Fe,_),w.onBeforeCompile(Fe,_),ke=F.acquireProgram(Fe,He),Xe.set(He,ke),J.uniforms=Fe.uniforms;const Ge=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),fu(w,Fe),J.needsLights=h_(w),J.lightsStateVersion=Le,J.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function uu(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Po.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function fu(w,V){const K=Y.get(w);K.outputColorSpace=V.outputColorSpace,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function u_(w,V,K,J,ee){V.isScene!==!0&&(V=We),q.resetTextureUnits();const we=V.fog,Le=J.isMeshStandardMaterial?V.environment:null,Fe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,He=(J.isMeshStandardMaterial?Z:te).get(J.envMap||Le),Xe=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ke=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,Ht=!!K.morphAttributes.color;let _t=oi;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=_.toneMapping);const An=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=An!==void 0?An.length:0,je=Y.get(J),Ca=m.state.lights;if(Me===!0&&(Se===!0||w!==M)){const zt=w===M&&J.id===z;ge.setState(J,w,zt)}let ut=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ca.state.version||je.outputColorSpace!==Fe||ee.isInstancedMesh&&je.instancing===!1||!ee.isInstancedMesh&&je.instancing===!0||ee.isSkinnedMesh&&je.skinning===!1||!ee.isSkinnedMesh&&je.skinning===!0||ee.isInstancedMesh&&je.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&je.instancingColor===!1&&ee.instanceColor!==null||je.envMap!==He||J.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ge.numPlanes||je.numIntersection!==ge.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==ke||je.morphTargets!==Ge||je.morphNormals!==at||je.morphColors!==Ht||je.toneMapping!==_t||U.isWebGL2===!0&&je.morphTargetsCount!==st)&&(ut=!0):(ut=!0,je.__version=J.version);let fi=je.currentProgram;ut===!0&&(fi=Ns(J,V,ee));let hu=!1,Hr=!1,Pa=!1;const Pt=fi.getUniforms(),hi=je.uniforms;if(D.useProgram(fi.program)&&(hu=!0,Hr=!0,Pa=!0),J.id!==z&&(z=J.id,Hr=!0),hu||M!==w){Pt.setValue(v,"projectionMatrix",w.projectionMatrix),Pt.setValue(v,"viewMatrix",w.matrixWorldInverse);const zt=Pt.map.cameraPosition;zt!==void 0&&zt.setValue(v,Oe.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue(v,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(v,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Hr=!0,Pa=!0)}if(ee.isSkinnedMesh){Pt.setOptional(v,ee,"bindMatrix"),Pt.setOptional(v,ee,"bindMatrixInverse");const zt=ee.skeleton;zt&&(U.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Pt.setValue(v,"boneTexture",zt.boneTexture,q),Pt.setValue(v,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=K.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&U.isWebGL2===!0)&&N.update(ee,K,fi),(Hr||je.receiveShadow!==ee.receiveShadow)&&(je.receiveShadow=ee.receiveShadow,Pt.setValue(v,"receiveShadow",ee.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(hi.envMap.value=He,hi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Hr&&(Pt.setValue(v,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&f_(hi,Pa),we&&J.fog===!0&&ne.refreshFogUniforms(hi,we),ne.refreshMaterialUniforms(hi,J,X,G,Re),Po.upload(v,uu(je),hi,q)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Po.upload(v,uu(je),hi,q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(v,"center",ee.center),Pt.setValue(v,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(v,"normalMatrix",ee.normalMatrix),Pt.setValue(v,"modelMatrix",ee.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const zt=J.uniformsGroups;for(let Na=0,d_=zt.length;Na<d_;Na++)if(U.isWebGL2){const du=zt[Na];Pe.update(du,fi),Pe.bind(du,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function f_(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function h_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,V,K){Y.get(w.texture).__webglTexture=V,Y.get(w.depthTexture).__webglTexture=K;const J=Y.get(w);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){const K=Y.get(w);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,K=0){R=w,E=V,L=K;let J=!0,ee=null,we=!1,Le=!1;if(w){const He=Y.get(w);He.__useDefaultFramebuffer!==void 0?(D.bindFramebuffer(v.FRAMEBUFFER,null),J=!1):He.__webglFramebuffer===void 0?q.setupRenderTarget(w):He.__hasExternalTextures&&q.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const ke=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?ee=ke[V][K]:ee=ke[V],we=!0):U.isWebGL2&&w.samples>0&&q.useMultisampledRTT(w)===!1?ee=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[K]:ee=ke,T.copy(w.viewport),k.copy(w.scissor),oe=w.scissorTest}else T.copy(ue).multiplyScalar(X).floor(),k.copy(B).multiplyScalar(X).floor(),oe=Q;if(D.bindFramebuffer(v.FRAMEBUFFER,ee)&&U.drawBuffers&&J&&D.drawBuffers(w,ee),D.viewport(T),D.scissor(k),D.setScissorTest(oe),we){const He=Y.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,K)}else if(Le){const He=Y.get(w.texture),Xe=V||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,He.__webglTexture,K||0,Xe)}z=-1},this.readRenderTargetPixels=function(w,V,K,J,ee,we,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){D.bindFramebuffer(v.FRAMEBUFFER,Fe);try{const He=w.texture,Xe=He.format,ke=He.type;if(Xe!==hn&&Ae.convert(Xe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===xs&&(P.has("EXT_color_buffer_half_float")||U.isWebGL2&&P.has("EXT_color_buffer_float"));if(ke!==ai&&Ae.convert(ke)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ni&&(U.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&K>=0&&K<=w.height-ee&&v.readPixels(V,K,J,ee,Ae.convert(Xe),Ae.convert(ke),we)}finally{const He=R!==null?Y.get(R).__webglFramebuffer:null;D.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,V,K=0){const J=Math.pow(2,-K),ee=Math.floor(V.image.width*J),we=Math.floor(V.image.height*J);q.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,K,0,0,w.x,w.y,ee,we),D.unbindTexture()},this.copyTextureToTexture=function(w,V,K,J=0){const ee=V.image.width,we=V.image.height,Le=Ae.convert(K.format),Fe=Ae.convert(K.type);q.setTexture2D(K,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,K.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,J,w.x,w.y,ee,we,Le,Fe,V.image.data):V.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,J,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,J,w.x,w.y,Le,Fe,V.image),J===0&&K.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(w,V,K,J,ee=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,He=Ae.convert(J.format),Xe=Ae.convert(J.type);let ke;if(J.isData3DTexture)q.setTexture3D(J,0),ke=v.TEXTURE_3D;else if(J.isDataArrayTexture)q.setTexture2DArray(J,0),ke=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,J.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,J.unpackAlignment);const Ge=v.getParameter(v.UNPACK_ROW_LENGTH),at=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ht=v.getParameter(v.UNPACK_SKIP_PIXELS),_t=v.getParameter(v.UNPACK_SKIP_ROWS),An=v.getParameter(v.UNPACK_SKIP_IMAGES),st=K.isCompressedTexture?K.mipmaps[0]:K.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,st.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,st.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,w.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,w.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?v.texSubImage3D(ke,ee,V.x,V.y,V.z,we,Le,Fe,He,Xe,st.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(ke,ee,V.x,V.y,V.z,we,Le,Fe,He,st.data)):v.texSubImage3D(ke,ee,V.x,V.y,V.z,we,Le,Fe,He,Xe,st),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ge),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,at),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ht),v.pixelStorei(v.UNPACK_SKIP_ROWS,_t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,An),ee===0&&J.generateMipmaps&&v.generateMipmap(ke),D.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),D.unbindTexture()},this.resetState=function(){E=0,L=0,R=null,D.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===eu?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ea?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Pi:Nm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pi?St:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LC extends Jm{}LC.prototype.isWebGL1Renderer=!0;class NC extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Qm extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zh=new H,Jh=new H,Qh=new lt,Ml=new nu,_o=new wa;class DC extends Et{constructor(e=new wn,n=new Qm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zh.fromBufferAttribute(n,r-1),Jh.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zh.distanceTo(Jh);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Qh.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(Qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,f=new H,h=new H,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let _=p,b=A-1;_<b;_+=d){const E=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,L),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||n.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(m.count,o.start+o.count);for(let _=p,b=A-1;_<b;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ed=new H,td=new H;class IC extends DC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ed.fromBufferAttribute(n,r),td.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ed.distanceTo(td);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new H,r=[],s=[],o=[],a=new H,l=new lt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(n===!0){let d=Math.acos(xt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ou extends Tn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class UC extends ou{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const go=new H,Sl=new au,El=new au,wl=new au;class OC extends Tn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(go.subVectors(r[0],r[1]).add(r[0]),c=go);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(go.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),El.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),wl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),El.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),wl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Sl.calc(l),El.calc(l),wl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nd(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function FC(t,e){const n=1-t;return n*n*e}function BC(t,e){return 2*(1-t)*t*e}function HC(t,e){return t*t*e}function ss(t,e,n,i){return FC(t,e)+BC(t,n)+HC(t,i)}function zC(t,e){const n=1-t;return n*n*n*e}function kC(t,e){const n=1-t;return 3*n*n*t*e}function GC(t,e){return 3*(1-t)*t*t*e}function VC(t,e){return t*t*t*e}function os(t,e,n,i,r){return zC(t,e)+kC(t,n)+GC(t,i)+VC(t,r)}class e_ extends Tn{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(os(e,r.x,s.x,o.x,a.x),os(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class WC extends Tn{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(os(e,r.x,s.x,o.x,a.x),os(e,r.y,s.y,o.y,a.y),os(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class t_ extends Tn{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XC extends Tn{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n_ extends Tn{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ss(e,r.x,s.x,o.x),ss(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qC extends Tn{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ss(e,r.x,s.x,o.x),ss(e,r.y,s.y,o.y),ss(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(nd(a,l.x,c.x,u.x,f.x),nd(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var dc=Object.freeze({__proto__:null,ArcCurve:UC,CatmullRomCurve3:OC,CubicBezierCurve:e_,CubicBezierCurve3:WC,EllipseCurve:ou,LineCurve:t_,LineCurve3:XC,QuadraticBezierCurve:n_,QuadraticBezierCurve3:qC,SplineCurve:i_});class $C extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new dc[r.type]().fromJSON(r))}return this}}class id extends $C{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new t_(this.currentPoint.clone(),new de(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new n_(this.currentPoint.clone(),new de(e,n),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new e_(this.currentPoint.clone(),new de(e,n),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new i_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new ou(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pc extends id{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new id().fromJSON(r))}return this}}const YC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=r_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(i&&(s=QC(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return bs(s,o,n,a,l,d,0),o}};function r_(t,e,n,i,r){let s,o;if(r===uP(t,e,n,i)>0)for(s=e;s<n;s+=i)o=rd(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=rd(s,t[s],t[s+1],o);return o&&Ra(o,o.next)&&(Ss(o),o=o.next),o}function Fi(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ra(n,n.next)||rt(n.prev,n,n.next)===0)){if(Ss(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function bs(t,e,n,i,r,s,o){if(!t)return;!o&&s&&rP(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?KC(t,i,r,s):jC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ss(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=ZC(Fi(t),e,n),bs(t,e,n,i,r,s,2)):o===2&&JC(t,e,n,i,r,s):bs(Fi(t),e,n,i,r,s,1);break}}}function jC(t){const e=t.prev,n=t,i=t.next;if(rt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ur(r,a,s,l,o,c,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function KC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,x=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=mc(d,g,e,n,i),A=mc(x,m,e,n,i);let _=t.prevZ,b=t.nextZ;for(;_&&_.z>=p&&b&&b.z<=A;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&ur(a,u,l,f,c,h,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&ur(a,u,l,f,c,h,b.x,b.y)&&rt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&ur(a,u,l,f,c,h,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=A;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&ur(a,u,l,f,c,h,b.x,b.y)&&rt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ZC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Ra(r,s)&&s_(r,i,i.next,s)&&Ms(r,s)&&Ms(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ss(i),Ss(i.next),i=t=s),i=i.next}while(i!==t);return Fi(i)}function JC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aP(o,a)){let l=o_(o,a);o=Fi(o,o.next),l=Fi(l,l.next),bs(o,e,n,i,r,s,0),bs(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function QC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=r_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(oP(c));for(r.sort(eP),s=0;s<r.length;s++)n=tP(r[s],n);return n}function eP(t,e){return t.x-e.x}function tP(t,e){const n=nP(t,e);if(!n)return e;const i=o_(n,t);return Fi(i,i.next),Fi(n,n.next)}function nP(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ur(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Ms(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&iP(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function iP(t,e){return rt(t.prev,t,e.prev)<0&&rt(e.next,t,t.next)<0}function rP(t,e,n,i){let r=t;do r.z===0&&(r.z=mc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,sP(r)}function sP(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function mc(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function oP(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ur(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function aP(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!lP(t,e)&&(Ms(t,e)&&Ms(e,t)&&cP(t,e)&&(rt(t.prev,t,e.prev)||rt(t,e.prev,e))||Ra(t,e)&&rt(t.prev,t,t.next)>0&&rt(e.prev,e,e.next)>0)}function rt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ra(t,e){return t.x===e.x&&t.y===e.y}function s_(t,e,n,i){const r=xo(rt(t,e,n)),s=xo(rt(t,e,i)),o=xo(rt(n,i,t)),a=xo(rt(n,i,e));return!!(r!==s&&o!==a||r===0&&vo(t,n,e)||s===0&&vo(t,i,e)||o===0&&vo(n,t,i)||a===0&&vo(n,e,i))}function vo(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function xo(t){return t>0?1:t<0?-1:0}function lP(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&s_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ms(t,e){return rt(t.prev,t,t.next)<0?rt(t,e,t.next)>=0&&rt(t,t.prev,e)>=0:rt(t,e,t.prev)<0||rt(t,t.next,e)<0}function cP(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function o_(t,e){const n=new _c(t.i,t.x,t.y),i=new _c(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function rd(t,e,n,i){const r=new _c(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ss(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function _c(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uP(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class as{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return as.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];sd(e),od(i,e);let o=e.length;n.forEach(sd);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,od(i,n[l]);const a=YC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function sd(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function od(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class sa extends wn{constructor(e=new pc([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Xt(r,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:d-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,A=n.UVGenerator!==void 0?n.UVGenerator:fP;let _,b=!1,E,L,R,z;p&&(_=p.getSpacedPoints(u),b=!0,h=!1,E=p.computeFrenetFrames(u,!1),L=new H,R=new H,z=new H),h||(m=0,d=0,g=0,x=0);const M=a.extractPoints(c);let T=M.shape;const k=M.holes;if(!as.isClockWise(T)){T=T.reverse();for(let v=0,C=k.length;v<C;v++){const P=k[v];as.isClockWise(P)&&(k[v]=P.reverse())}}const ae=as.triangulateShape(T,k),I=T;for(let v=0,C=k.length;v<C;v++){const P=k[v];T=T.concat(P)}function W(v,C,P){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),v.clone().addScaledVector(C,P)}const G=T.length,X=ae.length;function $(v,C,P){let U,D,j;const Y=v.x-C.x,q=v.y-C.y,te=P.x-v.x,Z=P.y-v.y,xe=Y*Y+q*q,S=Y*Z-q*te;if(Math.abs(S)>Number.EPSILON){const y=Math.sqrt(xe),F=Math.sqrt(te*te+Z*Z),ne=C.x-q/y,ie=C.y+Y/y,le=P.x-Z/F,ge=P.y+te/F,fe=((le-ne)*Z-(ge-ie)*te)/(Y*Z-q*te);U=ne+Y*fe-v.x,D=ie+q*fe-v.y;const _e=U*U+D*D;if(_e<=2)return new de(U,D);j=Math.sqrt(_e/2)}else{let y=!1;Y>Number.EPSILON?te>Number.EPSILON&&(y=!0):Y<-Number.EPSILON?te<-Number.EPSILON&&(y=!0):Math.sign(q)===Math.sign(Z)&&(y=!0),y?(U=-q,D=Y,j=Math.sqrt(xe)):(U=Y,D=q,j=Math.sqrt(xe/2))}return new de(U/j,D/j)}const se=[];for(let v=0,C=I.length,P=C-1,U=v+1;v<C;v++,P++,U++)P===C&&(P=0),U===C&&(U=0),se[v]=$(I[v],I[P],I[U]);const ue=[];let B,Q=se.concat();for(let v=0,C=k.length;v<C;v++){const P=k[v];B=[];for(let U=0,D=P.length,j=D-1,Y=U+1;U<D;U++,j++,Y++)j===D&&(j=0),Y===D&&(Y=0),B[U]=$(P[U],P[j],P[Y]);ue.push(B),Q=Q.concat(B)}for(let v=0;v<m;v++){const C=v/m,P=d*Math.cos(C*Math.PI/2),U=g*Math.sin(C*Math.PI/2)+x;for(let D=0,j=I.length;D<j;D++){const Y=W(I[D],se[D],U);Ue(Y.x,Y.y,-P)}for(let D=0,j=k.length;D<j;D++){const Y=k[D];B=ue[D];for(let q=0,te=Y.length;q<te;q++){const Z=W(Y[q],B[q],U);Ue(Z.x,Z.y,-P)}}}const be=g+x;for(let v=0;v<G;v++){const C=h?W(T[v],Q[v],be):T[v];b?(R.copy(E.normals[0]).multiplyScalar(C.x),L.copy(E.binormals[0]).multiplyScalar(C.y),z.copy(_[0]).add(R).add(L),Ue(z.x,z.y,z.z)):Ue(C.x,C.y,0)}for(let v=1;v<=u;v++)for(let C=0;C<G;C++){const P=h?W(T[C],Q[C],be):T[C];b?(R.copy(E.normals[v]).multiplyScalar(P.x),L.copy(E.binormals[v]).multiplyScalar(P.y),z.copy(_[v]).add(R).add(L),Ue(z.x,z.y,z.z)):Ue(P.x,P.y,f/u*v)}for(let v=m-1;v>=0;v--){const C=v/m,P=d*Math.cos(C*Math.PI/2),U=g*Math.sin(C*Math.PI/2)+x;for(let D=0,j=I.length;D<j;D++){const Y=W(I[D],se[D],U);Ue(Y.x,Y.y,f+P)}for(let D=0,j=k.length;D<j;D++){const Y=k[D];B=ue[D];for(let q=0,te=Y.length;q<te;q++){const Z=W(Y[q],B[q],U);b?Ue(Z.x,Z.y+_[u-1].y,_[u-1].x+P):Ue(Z.x,Z.y,f+P)}}}Me(),Se();function Me(){const v=r.length/3;if(h){let C=0,P=G*C;for(let U=0;U<X;U++){const D=ae[U];Ne(D[2]+P,D[1]+P,D[0]+P)}C=u+m*2,P=G*C;for(let U=0;U<X;U++){const D=ae[U];Ne(D[0]+P,D[1]+P,D[2]+P)}}else{for(let C=0;C<X;C++){const P=ae[C];Ne(P[2],P[1],P[0])}for(let C=0;C<X;C++){const P=ae[C];Ne(P[0]+G*u,P[1]+G*u,P[2]+G*u)}}i.addGroup(v,r.length/3-v,0)}function Se(){const v=r.length/3;let C=0;Re(I,C),C+=I.length;for(let P=0,U=k.length;P<U;P++){const D=k[P];Re(D,C),C+=D.length}i.addGroup(v,r.length/3-v,1)}function Re(v,C){let P=v.length;for(;--P>=0;){const U=P;let D=P-1;D<0&&(D=v.length-1);for(let j=0,Y=u+m*2;j<Y;j++){const q=G*j,te=G*(j+1),Z=C+U+q,xe=C+D+q,S=C+D+te,y=C+U+te;Oe(Z,xe,S,y)}}}function Ue(v,C,P){l.push(v),l.push(C),l.push(P)}function Ne(v,C,P){We(v),We(C),We(P);const U=r.length/3,D=A.generateTopUV(i,r,U-3,U-2,U-1);De(D[0]),De(D[1]),De(D[2])}function Oe(v,C,P,U){We(v),We(C),We(U),We(C),We(P),We(U);const D=r.length/3,j=A.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);De(j[0]),De(j[1]),De(j[3]),De(j[1]),De(j[2]),De(j[3])}function We(v){r.push(l[v*3+0]),r.push(l[v*3+1]),r.push(l[v*3+2])}function De(v){s.push(v.x),s.push(v.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return hP(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new dc[r.type]().fromJSON(r)),new sa(i,e.options)}}const fP={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-f),new de(h,1-g),new de(x,1-p)]:[new de(a,1-l),new de(u,1-f),new de(d,1-g),new de(m,1-p)]}};function hP(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class dP extends Fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dm,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a_ extends Et{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tl=new lt,ad=new H,ld=new H;class pP{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),n.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ld),n.updateMatrixWorld(),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mP extends pP{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _P extends a_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new mP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gP extends a_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cd{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vP extends IC{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new wn;r.setAttribute("position",new Xt(n,3)),r.setAttribute("color",new Xt(i,3));const s=new Qm({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);const ud={type:"change"},Al={type:"start"},fd={type:"end"},yo=new nu,hd=new Qn,xP=Math.cos(70*Aw.DEG2RAD);class yP extends Hi{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",y),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ud),i.update(),s=r.NONE},this.update=function(){const N=new H,pe=new Ui().setFromUnitVectors(e.up,new H(0,1,0)),ce=pe.clone().invert(),Ae=new H,Ee=new Ui,Pe=new H,Ce=2*Math.PI;return function($e=null){const O=i.object.position;N.copy(O).sub(i.target),N.applyQuaternion(pe),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&k(M($e)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ve=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(ve)&&isFinite(he)&&(ve<-Math.PI?ve+=Ce:ve>Math.PI&&(ve-=Ce),he<-Math.PI?he+=Ce:he>Math.PI&&(he-=Ce),ve<=he?a.theta=Math.max(ve,Math.min(he,a.theta)):a.theta=a.theta>(ve+he)/2?Math.max(ve,a.theta):Math.min(he,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?a.radius=se(a.radius):a.radius=se(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(ce),O.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let re=!1;if(i.zoomToCursor&&L){let me=null;if(i.object.isPerspectiveCamera){const Ie=N.length();me=se(Ie*c);const Ye=Ie-me;i.object.position.addScaledVector(b,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ie=new H(E.x,E.y,0);Ie.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0;const Ye=new H(E.x,E.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(Ie),i.object.updateMatrixWorld(),me=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(yo.origin.copy(i.object.position),yo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(yo.direction))<xP?e.lookAt(i.target):(hd.setFromNormalAndCoplanarPoint(i.object.up,i.target),yo.intersectPlane(hd,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0);return c=1,L=!1,re||Ae.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(ud),Ae.copy(i.object.position),Ee.copy(i.object.quaternion),Pe.copy(i.target),re=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ie),i.domElement.removeEventListener("pointerdown",Y),i.domElement.removeEventListener("pointercancel",te),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",te),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new cd,l=new cd;let c=1;const u=new H,f=new de,h=new de,d=new de,g=new de,x=new de,m=new de,p=new de,A=new de,_=new de,b=new H,E=new de;let L=!1;const R=[],z={};function M(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function k(N){l.theta-=N}function oe(N){l.phi-=N}const ae=function(){const N=new H;return function(ce,Ae){N.setFromMatrixColumn(Ae,0),N.multiplyScalar(-ce),u.add(N)}}(),I=function(){const N=new H;return function(ce,Ae){i.screenSpacePanning===!0?N.setFromMatrixColumn(Ae,1):(N.setFromMatrixColumn(Ae,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(ce),u.add(N)}}(),W=function(){const N=new H;return function(ce,Ae){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;N.copy(Pe).sub(i.target);let Ce=N.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ce*Ce/Ee.clientHeight,i.object.matrix),I(2*Ae*Ce/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ce*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),I(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(N){if(!i.zoomToCursor)return;L=!0;const pe=i.domElement.getBoundingClientRect(),ce=N.clientX-pe.left,Ae=N.clientY-pe.top,Ee=pe.width,Pe=pe.height;E.x=ce/Ee*2-1,E.y=-(Ae/Pe)*2+1,b.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function se(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function ue(N){f.set(N.clientX,N.clientY)}function B(N){$(N),p.set(N.clientX,N.clientY)}function Q(N){g.set(N.clientX,N.clientY)}function be(N){h.set(N.clientX,N.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;k(2*Math.PI*d.x/pe.clientHeight),oe(2*Math.PI*d.y/pe.clientHeight),f.copy(h),i.update()}function Me(N){A.set(N.clientX,N.clientY),_.subVectors(A,p),_.y>0?G(T()):_.y<0&&X(T()),p.copy(A),i.update()}function Se(N){x.set(N.clientX,N.clientY),m.subVectors(x,g).multiplyScalar(i.panSpeed),W(m.x,m.y),g.copy(x),i.update()}function Re(N){$(N),N.deltaY<0?X(T()):N.deltaY>0&&G(T()),i.update()}function Ue(N){let pe=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),pe=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),pe=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),pe=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),pe=!0;break}pe&&(N.preventDefault(),i.update())}function Ne(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const N=.5*(R[0].pageX+R[1].pageX),pe=.5*(R[0].pageY+R[1].pageY);f.set(N,pe)}}function Oe(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const N=.5*(R[0].pageX+R[1].pageX),pe=.5*(R[0].pageY+R[1].pageY);g.set(N,pe)}}function We(){const N=R[0].pageX-R[1].pageX,pe=R[0].pageY-R[1].pageY,ce=Math.sqrt(N*N+pe*pe);p.set(0,ce)}function De(){i.enableZoom&&We(),i.enablePan&&Oe()}function v(){i.enableZoom&&We(),i.enableRotate&&Ne()}function C(N){if(R.length==1)h.set(N.pageX,N.pageY);else{const ce=_e(N),Ae=.5*(N.pageX+ce.x),Ee=.5*(N.pageY+ce.y);h.set(Ae,Ee)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;k(2*Math.PI*d.x/pe.clientHeight),oe(2*Math.PI*d.y/pe.clientHeight),f.copy(h)}function P(N){if(R.length===1)x.set(N.pageX,N.pageY);else{const pe=_e(N),ce=.5*(N.pageX+pe.x),Ae=.5*(N.pageY+pe.y);x.set(ce,Ae)}m.subVectors(x,g).multiplyScalar(i.panSpeed),W(m.x,m.y),g.copy(x)}function U(N){const pe=_e(N),ce=N.pageX-pe.x,Ae=N.pageY-pe.y,Ee=Math.sqrt(ce*ce+Ae*Ae);A.set(0,Ee),_.set(0,Math.pow(A.y/p.y,i.zoomSpeed)),G(_.y),p.copy(A)}function D(N){i.enableZoom&&U(N),i.enablePan&&P(N)}function j(N){i.enableZoom&&U(N),i.enableRotate&&C(N)}function Y(N){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",q),i.domElement.addEventListener("pointerup",te)),le(N),N.pointerType==="touch"?F(N):Z(N))}function q(N){i.enabled!==!1&&(N.pointerType==="touch"?ne(N):xe(N))}function te(N){ge(N),R.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",te)),i.dispatchEvent(fd),s=r.NONE}function Z(N){let pe;switch(N.button){case 0:pe=i.mouseButtons.LEFT;break;case 1:pe=i.mouseButtons.MIDDLE;break;case 2:pe=i.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Gi.DOLLY:if(i.enableZoom===!1)return;B(N),s=r.DOLLY;break;case Gi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;Q(N),s=r.PAN}else{if(i.enableRotate===!1)return;ue(N),s=r.ROTATE}break;case Gi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;ue(N),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Al)}function xe(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;be(N);break;case r.DOLLY:if(i.enableZoom===!1)return;Me(N);break;case r.PAN:if(i.enablePan===!1)return;Se(N);break}}function S(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(Al),Re(N),i.dispatchEvent(fd))}function y(N){i.enabled===!1||i.enablePan===!1||Ue(N)}function F(N){switch(fe(N),R.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Ne(),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;v(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Al)}function ne(N){switch(fe(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;C(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;P(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(N),i.update();break;default:s=r.NONE}}function ie(N){i.enabled!==!1&&N.preventDefault()}function le(N){R.push(N)}function ge(N){delete z[N.pointerId];for(let pe=0;pe<R.length;pe++)if(R[pe].pointerId==N.pointerId){R.splice(pe,1);return}}function fe(N){let pe=z[N.pointerId];pe===void 0&&(pe=new de,z[N.pointerId]=pe),pe.set(N.pageX,N.pageY)}function _e(N){const pe=N.pointerId===R[0].pointerId?R[1]:R[0];return z[pe.pointerId]}i.domElement.addEventListener("contextmenu",ie),i.domElement.addEventListener("pointerdown",Y),i.domElement.addEventListener("pointercancel",te),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}const bP=[{Habitat_name:"Forest",color:"#527365",Habitat_type:"terrestrial",Habitat_description:"Forest consists of a continuous stand of trees and includes both forested areas (generally with a closed canopy) and wooded areas.",Habitat_location:"data provided upon request",Above_ground_current_storage:"311415729855.227",Above_ground_potential_storage:"514335905421.954",Above_ground_potential_storage_minus_areas_occupied_by_humans:"412991823491.327","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"202920175566.725"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"134637518488.395"," Below_ground_potential_storage and Below_ground_current_storage":"127613966122.836"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"69780940555.2775"},Normalized_above_ground_current_storage:"54.832273725022",Normalized_above_ground_potential_storage:"90.5612801441162","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"72.7172025716232"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"35.7290064190938"," Below_ground_potential_storage and Below_ground_current_storage":"245.985379911821"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"22.4695262658569"},Below_ground_current_storage:"1676500842755.13",Below_ground_potential_storage:"1804114808877.94",Below_ground_potential_storage_minus_areas_occupied_by_humans:"1397055263531.74",Normalized_Below_ground_current_storage:"295.188535122856",Normalized_Below_ground_potential_storage:"317.658061388708",Area_Habitat:"56794239724025.2",Area_minus_areas_occupied_by_humans:"41539577464153.2",Habitat_threats:` - Deforestation/degredation for timber/firewood followed by agriculture/livestock grazing.
 - Unatural fires
 - Exploitation of natural resources (i.e, animal harvest)
 - Invasive species (plants, animals, insects)
 - Climate change`,Habitat_managment_strategies:` - Assisted regeneration (e.g., seeling planting, direct seeding, enrichment planting when canopy still exists, microbiome restoration).
 - Natural regeneration (i..e, removal of barriers such as fires/non-native grazers to let recovery happen naturally. Needs some intact forest in the surrounding landscape to be possible)
 - Removal or control of invasive species (ie., manual removal, biocontrol)`,"Case_Study_Conservation (NOT FINISHED!)":`Conservation of the �rea de Conservaci�n Guanacaste, Costa Rica. https://crowtherlab.com/flagship-cases/
#11 - Crowther case`,"Case_Study_Regeneration (NOT FINISHED!)":`Regeneration of the Scottish Highlands, Scotland  https://crowtherlab.com/flagship-cases/
#16 - Crowther case`,References:""},{Habitat_name:"Savanna",color:"#FA5E32",Habitat_type:"terrestrial",Habitat_description:"Savannas are transitional between grassland and forests. They are ecosystems dominated by grass ground cover with an overstorey of widely spaced trees and shrubs.",Habitat_location:"data provided upon request",Above_ground_current_storage:"17076498664.4569",Above_ground_potential_storage:"48233596224.5023",Above_ground_potential_storage_minus_areas_occupied_by_humans:"28063372186.2453","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"31157097560.0457"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"16511193478.4245"," Below_ground_potential_storage and Below_ground_current_storage":"29510254103.9026"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"13964846754.6116"},Normalized_above_ground_current_storage:"11.7934350255322",Normalized_above_ground_potential_storage:"33.3112656346474","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"19.3812304840149"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"21.5178306091153"," Below_ground_potential_storage and Below_ground_current_storage":"73.98932738282"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"20.3804814558213"},Below_ground_current_storage:"191895116150.542",Below_ground_potential_storage:"221405370254.443",Below_ground_potential_storage_minus_areas_occupied_by_humans:"107134066326.004",Normalized_Below_ground_current_storage:"132.527318890541",Normalized_Below_ground_potential_storage:"152.907800346361",Area_Habitat:"14479664853782.7",Area_minus_areas_occupied_by_humans:"7035268807473.64",Habitat_threats:` - Deforestation/degredation for timber/firewood followed by agriculture/livestock grazing.
 - Unatural fires
 - Exploitation of natural resources (i.e, animal harvest)
 - Invasive species (plants, animals, insects)
 - Climate change`,Habitat_managment_strategies:` - Assisted regeneration (e.g., seeling planting, direct seeding, enrichment planting when canopy still exists, microbiome restoration).
 - Natural regeneration (i..e, removal of barriers such as fires/non-native grazers to let recovery happen naturally. Needs some intact forest in the surrounding landscape to be possible)
 - Removal or control of invasive species (i.e., manual removal, biocontrol)
 - Farmer-managed natural regeneration (i.e., farmer maintain existing trees in their frams to provide ecological services)`,"Case_Study_Conservation (NOT FINISHED!)":"Conservation of the Savanna, Nambia.  Savmap project.","Case_Study_Regeneration (NOT FINISHED!)":`Reviving traditional land-use practices to restore landscapes and livelihoods in Shinyanga, Tanzania.  https://crowtherlab.com/flagship-cases/
#7 - Crowther case`,References:""},{Habitat_name:"Shrubland",color:"#6D72A0",Habitat_type:"terrestrial",Habitat_description:"Shrublands are ecosystems dominated by woody shrubs - low-lying plants that have several stems instead of a single trunk. Shrublands occur often in areas too harsh for trees, e.g. with unpredictable rain or steep slopes.",Habitat_location:"data provided upon request",Above_ground_current_storage:"11906315862.7556",Above_ground_potential_storage:"31659400958.1418",Above_ground_potential_storage_minus_areas_occupied_by_humans:"19904368937.4633","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"19753085095.3863"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"10769146665.8669"," Below_ground_potential_storage and Below_ground_current_storage":"29683905783.9376"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"12500511940.2587"},Normalized_above_ground_current_storage:"6.42080788111064",Normalized_above_ground_potential_storage:"17.073201612193","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"10.7339776985069"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"10.6523937310825"," Below_ground_potential_storage and Below_ground_current_storage":"111.689921485421"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"16.0078615750364"},Below_ground_current_storage:"319410148252.109",Below_ground_potential_storage:"349094054036.047",Below_ground_potential_storage_minus_areas_occupied_by_humans:"207110305823.661",Normalized_Below_ground_current_storage:"172.250696256029",Normalized_Below_ground_potential_storage:"188.258557831066",Area_Habitat:"18543329878756.8",Area_minus_areas_occupied_by_humans:"9836188174741.47",Habitat_threats:` - Agricutlure/livestock overgrazing.
 - Unatural fires
 - Exploitation of natural resources (i.e, animal harvest)
 - Invasive species (plants, animals, insects)
 - Climate change`,Habitat_managment_strategies:` - Assisted regeneration (e.g., shrub planting, direct seeding, microbiome restoration, planting nurse plant that require shade).
 - Natural regeneration (i..e, removal of barriers such as fires/non-native grazers to let recovery happen naturally. Needs some intact forest in the surrounding landscape to be possible)
 - Removal or control of invasive species (i.e., manual removal, biocontrol)`,"Case_Study_Conservation (NOT FINISHED!)":"Conservation of the Pilbara Shrublands, Australia","Case_Study_Regeneration (NOT FINISHED!)":"Case Study #4. The hidden forest: farmers tend regenerating trees in African Drylands.  https://crowtherlab.com/flagship-cases/",References:""},{Habitat_name:"Grassland",color:"#FDB7C9",Habitat_type:"terrestrial",Habitat_description:"Grasslands occur in regions with warm growing seasons and moderate water shortages. Grasslands are comprised of grasses and broadleaved herbaceous plants, and are either without woody plants or the latter are very sparsely distributed.",Habitat_location:"data provided upon request",Above_ground_current_storage:"5633522704.26477",Above_ground_potential_storage:"22989541028.7624",Above_ground_potential_storage_minus_areas_occupied_by_humans:"15773727192.2812","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"17356018324.4975"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"10996260273.2825"," Below_ground_potential_storage and Below_ground_current_storage":"22977956980.158"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"7071095803.32257"},Normalized_above_ground_current_storage:"3.04846517073068",Normalized_above_ground_potential_storage:"12.4403182158494","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"8.53562867899231"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"9.39185304511864"," Below_ground_potential_storage and Below_ground_current_storage":"278.028533336793"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"12.4340497457357"},Below_ground_current_storage:"695773296595.359",Below_ground_potential_storage:"718751253575.517",Below_ground_potential_storage_minus_areas_occupied_by_humans:"513792996562.543",Normalized_Below_ground_current_storage:"376.503437145948",Normalized_Below_ground_potential_storage:"388.937486891683",Area_Habitat:"18479865731628.1",Area_minus_areas_occupied_by_humans:"11095939265058.7",Habitat_threats:` - Conversion to conventional agriculture
 - Overgrazing by non-native grazers
 - Human created wildfires
 - Invasive species (plants, animals, insects)
 - Climate change`,Habitat_managment_strategies:` - Assisted regeneration (e.g., direct seeding of native grasses/forbs, microbiome restoration).
 - Natural regeneration (i..e, natural ercovery where there is a patch of grassland directly adjacent)
 - Removal or control of invasive species (i.e., manual removal, biocontrol)`,"Case_Study_Conservation (NOT FINISHED!)":`Conservation of Grasslands, Krygyzstan
#5 � UN Case`,"Case_Study_Regeneration (NOT FINISHED!)":`Regeneration of tallgrass prairie in Nachusa Grasslands, Illinois, USA.
#5 � Crowther Case`,References:""},{Habitat_name:"Wetlands",color:"#78B2D9",Habitat_type:"terrestrial",Habitat_description:"Wetlands are areas of land usually saturated with water, such as peatlands, swamps, marshes, bogs etc.",Habitat_location:"data provided upon request",Above_ground_current_storage:"1370210347.46991",Above_ground_potential_storage:"2547675559.98629",Above_ground_potential_storage_minus_areas_occupied_by_humans:"2169416567.52452","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"1177465212.51637"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"891467481.495598"," Below_ground_potential_storage and Below_ground_current_storage":"752435194.18153"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"505335682.380158"},Normalized_above_ground_current_storage:"11.6430995376826",Normalized_above_ground_potential_storage:"21.6483842713742","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"18.4342010560831"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"10.0052847336914"," Below_ground_potential_storage and Below_ground_current_storage":"359.941864857634"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"6.39367369958028"},Below_ground_current_storage:"43821069526.1033",Below_ground_potential_storage:"44573504720.2853",Below_ground_potential_storage_minus_areas_occupied_by_humans:"42359516563.3797",Normalized_Below_ground_current_storage:"372.361130743349",Normalized_Below_ground_potential_storage:"378.754804442933",Area_Habitat:"1176843282182.08",Area_minus_areas_occupied_by_humans:"1049901195782.86",Habitat_threats:` - Pollution from upstream or adjacent sources
 - human conversion to cannals ect.
 - Invasive species (plants, animals, insects)
 - Climate change`,Habitat_managment_strategies:` - Hydrologic restoration (e.g., adding sand/sediment to replace what was removed)
 - Assisted regeneration (e.g., direct seeding or planting of native plants)
 - Natural regeneration is possible but hard
 - Removal or control of invasive species (i.e., manual removal, biocontrol)`,"Case_Study_Conservation (NOT FINISHED!)":"Conservation of the Amazon River Basin. https://www.amazonconservation.org/what-we-do/protect-wild-places/water/","Case_Study_Regeneration (NOT FINISHED!)":"Regeneration of Bosco di Palo Laziale, Rome. https://restor.eco/platform/sites/ae91bc8f-1dbe-4065-b666-567acec00736/",References:""},{Habitat_name:"Desert",color:"#FFCA00",Habitat_type:"terrestrial",Habitat_description:"Desert consists of arid landscapes with a sparse plant cover, except in depressions where water accumulates. The sandy, stony or rocky substrate contributes more to the appearance of the landscape than does the vegetation.",Habitat_location:"data provided upon request",Above_ground_current_storage:"177391257.742186",Above_ground_potential_storage:"628019802.438484",Above_ground_potential_storage_minus_areas_occupied_by_humans:"448969042.423958","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"450628544.696299"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"301354042.969395"," Below_ground_potential_storage and Below_ground_current_storage":"5293444621.10324"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"4103835174.04362"},Normalized_above_ground_current_storage:"0.0534106838227787",Normalized_above_ground_potential_storage:"0.189090305404091","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"0.135179962509613"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"0.135679621581313"," Below_ground_potential_storage and Below_ground_current_storage":"35.1089811224638"," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"1.59380174981361"},Below_ground_current_storage:"137701528402.74",Below_ground_potential_storage:"142994973023.844",Below_ground_potential_storage_minus_areas_occupied_by_humans:"116606376732.147",Normalized_Below_ground_current_storage:"41.4605143964942",Normalized_Below_ground_potential_storage:"43.0543161463081",Area_Habitat:"33212691739874.7",Area_minus_areas_occupied_by_humans:"30671180379670.4",Habitat_threats:` - Overgrazing by non-native grazers
 - Human conversion to agricultural use
 - Invasive species (plants, animals, insects)
 - Wildfires affecting non-native plants
 - Climate change`,Habitat_managment_strategies:` - Assisted regeneration (e.g., direct seeding or planting of native plants - usually with irrigation required, planting nurse plants that can facilitate the growth of plants that require shade)
 - Natural regeneration is possible but hard`,"Case_Study_Conservation (NOT FINISHED!)":`Conservation of Altyn Dala, Kazakhstan
#1 - UN Case`,"Case_Study_Regeneration (NOT FINISHED!)":`Regeneration of the Sahel Great Green Wall
#3 UN Case`,References:""},{Habitat_name:"Blue Carbon Ecosystems",color:"#DBE28F",Habitat_type:"marine",Habitat_description:"Mangroves and seagrass meadows are important habitats and promote biodiversity. These sites are crucial for fisheries production, and protect coastal areas from erosion caused by storms.",Habitat_location:"data provided upon request",Above_ground_current_storage:"2940000000",Above_ground_potential_storage:"3169000000",Above_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant.","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"229000000"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"not relevant."," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Normalized_above_ground_current_storage:"0.00362962962962963",Normalized_above_ground_potential_storage:"0.000282716049382716","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"0.000282716049382716"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"2.82716049382716"," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Below_ground_current_storage:"16500000000",Below_ground_potential_storage:"cannot estimate.",Below_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant.",Normalized_Below_ground_current_storage:"0.0203703703703704",Normalized_Below_ground_potential_storage:"cannot estimate.",Area_Habitat:"810000000000",Area_minus_areas_occupied_by_humans:"not relevant.",Habitat_threats:"Clear-cutting of mangroves (land-use changes: aquaculture  agriculture). Trawling and anchors can remove seagrass meadows. Climate change (heatwaves  storms). Eutrophication.",Habitat_managment_strategies:` - Conservation of mangrove and seagrass meadows (protected areas). 
- Restoration of these environments when posible (not occupied by humans). In the case of mangroves  active restoration can be carried out  but for seagrass  these have been unsuccessful and only natural restoration is possible  albeit slow.`,"Case_Study_Conservation (NOT FINISHED!)":`Conservation of Mangroves in Pred Nai, Thailand
#12 � Crowther Lab`,"Case_Study_Regeneration (NOT FINISHED!)":`Regeneration of mangroves in Denmak, Java, Indonesia
#9 UN Case`,References:"Macreadie et al., 2021, Nature Reviews Earth & Environment, and references within"},{Habitat_name:"Continental margins",color:"#A98467",Habitat_type:"marine",Habitat_description:"Interplay between the continent and the open ocean, consisting of continental shelf, slope, and rise. These areas have high productivtiy due to upwelling currents that bring high nutrients from the deep sea to surface waters, fueling primary productivity in certain margins. Rivers supply significant amounts of nutrients to contintental margins, further promoting primary productivity, as well as providing high inputs of terrigenouc organic carbon. High levels of primary productivity, coupled with high sediment discharge from rivers make these continental margins important sites of carbon burial. Their depth ranges from a few meters in depth to 1000 m.",Habitat_location:"data provided upon request",Above_ground_current_storage:"895821406879.882",Above_ground_potential_storage:"cannot estimate.",Above_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant (no human settlements in ocean)","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"not relevant (no human settlements in ocean)"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"not relevant (no human settlements in ocean)"," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Normalized_above_ground_current_storage:"0.0172929815661739",Normalized_above_ground_potential_storage:"unkown","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"cannot estimate."," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"not relevant (no human settlements in ocean)"," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Below_ground_current_storage:"502776820000",Below_ground_potential_storage:"cannot estimate.",Below_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant.",Normalized_Below_ground_current_storage:"0.0097056290610896",Normalized_Below_ground_potential_storage:"cannot estimate.",Area_Habitat:"51802600000000",Area_minus_areas_occupied_by_humans:"not relevant.",Habitat_threats:`Polar margins
Climate change (rising temperatures, permafrost thawing, coastal erosion) modify the sea-ice extension and algal blooms, as well as increase the input of OC (erosion and permafrost thawing) to this system 

Upwelling margins
Rising temperatures and changes in salinity due to evaporation and river fluxes affect circulation patterns, which may weaken upwelling intensities. 

River-dominated margins
Discharge of nutrients from the use of fertilizers or sewage treatment plants that reach the coast through rivers or groundwater discharge can cause eutrophication and alter the whole system. Construction of river dams reduces the amount of sediment delivered by rivers, reducing the carbon burial offshore rivers, affecting ecosystems, and increasing the risk of coastal erosion.

Other margins
Discharge of nutrients from the use of fertilizers or sewage treatment plants that reach the coast through rivers or groundwater discharge can cause eutrophication and alter the whole system. Sediment disturbance by anthropogenic activities (bottom trawling, cable burial, etc.) can also release carbon sequestered in marine sediments.`,Habitat_managment_strategies:`Polar margins
Avoid increases in temperature (climate change). Limit mining and petrol exploration (destabilizes the soil), avoid overfishing (small fish stocks), regulate marine traffic (which will increase with less sea-ice).

Upwelling margins
Take action to reduce our emissions of CO2 and prevent rising temperatures. 

River-dominated margins
Regulate the use of fertilizers and monitor sewage treatment plants. Study the efficacy (and install) sediment bypass tunnels to allow continuity of sediment and avoid its accumulation in reservoirs.

Other margins
Regulate the use of fertilizers and monitor sewage treatment plants. Establish efficient management strategies that reduce the effect of anthropogenic sediment disturbance (marine protected areas, regulate the intensity of these activities, etc.).`,"Case_Study_Conservation (NOT FINISHED!)":`Case 2# Sediment disturbance by bottom trawling along the Catalan margin is removing 30 % of organic carbon stored in marine sediments. However, recent collaborations between scientists and fishermen identified fishing gears with limited contact with the seabed, reducing sediment erosion by 40%.

Case 3# Stop Bottom trawiling: Brazil�s Supreme Court Upholds Ban on Bottom Trawling in Rio Grande do Sul. https://usa.oceana.org/victories/brazils-supreme-court-upholds-ban-on-bottom-trawling-in-rio-grande-do-sul/`,"Case_Study_Regeneration (NOT FINISHED!)":`Case 1# Rrreefs Project: https://www.rrreefs.com/ 

Case 2# The Three Gorges Dam (TGD) in the Yangtze River in 2003 has reduced the flux of sediment and associated carbon by 73 and 83 % respectively. Instead, this terrestrial organic carbon is trapped in river dams. While this may indicate that there is no overall change in the burial of carbon, the decrease in the flux of sediment to the delta promotes delta erosion (increase of 0.34 Mt OC/yr), re-exposing carbon to be remineralized and degraded. In fact, the delta transformed from a preferential site of carbon burial (3.46 Mt OC/yr) prior to the river damming to a site of carbon erosion (-0.41 Mt/yr) after the construction of the river dam."`,References:`Polar Margins
Atwood et al., 2020; Couture et al., 2018

Upwelling Margins
Atwood et al., 2020; McPhaden et al., 2020

River-dominated Margins
Laruelle et al., 2013; Atwood et al., 2020; Milliman and Farnsworth 2005; Zhao et al., 2021; Boes et al., 2014

Other Margins
Atwood et al., 2020; Paradis et al., 2021`},{Habitat_name:"Open Ocean",color:"#77A8C3",Habitat_type:"marine",Habitat_description:"Areas beyond the continental margin, with big bodies of water that are far below the photic zone. Despite the high productivity in surface waters of certain gyres, the organic matter that can reach the seafloor (as marine snow) is ~1 %, since the majority is degraded during its transit time from surface waters to the seafloor. The seafloor of the open ocean has low OC content and low sedimentation rates, making them less optimal sites of carbon sequestration in the seafloor.",Habitat_location:"data provided upon request",Above_ground_current_storage:"37807178593120.1",Above_ground_potential_storage:"cannot estimate.",Above_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant (no human settlements in ocean)","Difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"not relevant (no human settlements in ocean)"," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"not relevant (no human settlements in ocean)"," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Normalized_above_ground_current_storage:"0.122292349453917",Normalized_above_ground_potential_storage:"n.a.","Normalized_difference btw":{" Above_ground_potential_storage and above_ground_current_storage":"cannot estimate."," Above_ground_potential_storage_minus_areas_occupied_by_humans and Above_ground_current_storage":"not relevant (no human settlements in ocean)"," Below_ground_potential_storage and Below_ground_current_storage":"not relevant."," Below_ground_potential_storage_minus_areas_occupied_by_humans and Below_ground_current_storage":"not relevant."},Below_ground_current_storage:"1608185700000",Below_ground_potential_storage:"cannot estimate.",Below_ground_potential_storage_minus_areas_occupied_by_humans:"not relevant.",Normalized_Below_ground_current_storage:"0.00520189061785692",Normalized_Below_ground_potential_storage:"cannot estimate.",Area_Habitat:"309154078419000",Area_minus_areas_occupied_by_humans:"not relevant.",Habitat_threats:"Very fragile ecosystem! Benthic organisms that live in these areas are slow-growing with low resiliency. These areas have negligible natural disturbances (storms) so the ecosystem is not used to perturbations. This, coupled with the low sedimentation rates and OC fluxes, makes these areas very vulnerable.",Habitat_managment_strategies:"Protection of these fragile ecosystems (i.e., not allowing deep ocean mining).","Case_Study_Conservation (NOT FINISHED!)":`
Whale conservation: https://www.cell.com/trends/ecology-evolution/fulltext/S0169-5347(22)00279-8 

`,"Case_Study_Regeneration (NOT FINISHED!)":"N.A.",References:`Abyssal Plains
Friedlingstein et al., 2022; Atwood et al., 2020`}];const l_=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},MP={data(){return{data:bP,ecosystems:[],filter:[]}},mounted(){const t=this.$refs.canvas;this.ecosystems=Array.from(new Set(this.data.map(_=>_.Habitat_name)));const e={name:"Root",children:this.data.map(_=>({habitat:_.Habitat_name,value:parseFloat(_.Area_Habitat)}))},n=400,i=400,r=mf("body").append("svg").attr("width",n).attr("height",i),s=Kc(e).sum(_=>_.value),o=Sm(hE),l=cE().size([n,i]).padding(1).round(!0)(s).descendants();r.selectAll("rect").data(l.filter(_=>!this.filter.length||this.filter.includes(_.data.habitat))).enter().append("rect").attr("x",_=>_.x0).attr("y",_=>_.y0).attr("fill",_=>o(_.depth)).attr("width",_=>_.x1-_.x0).attr("height",_=>_.y1-_.y0).attr("stroke","white").attr("stroke-width",2);const c=[2200782,16737095,9055202,64154,16766720],u=r.selectAll("rect").nodes(),f=new NC,h=new vP(100);f.add(h),u.forEach((_,b)=>{let E=parseFloat(_.getAttribute("width"))/6,L=parseFloat(_.getAttribute("height"))/6;const R=Math.random()*(30-10)+10,z=new sa(new pc([new de(0,0),new de(E,0),new de(E,L),new de(0,L),new de(0,0)]),{depth:R,bevelEnabled:!1}),M=new sa(new pc([new de(0,0),new de(E,0),new de(E,L),new de(0,L),new de(0,0)]),{depth:Math.abs(R),bevelEnabled:!1}),T=new dP({color:c[b%c.length]}),k=new yn(z,T),oe=new yn(M,T);k.position.set((parseFloat(_.getAttribute("x"))+L)/6-40,-(parseFloat(_.getAttribute("y"))+L/2)/6,0),oe.position.set((parseFloat(_.getAttribute("x"))+L)/6-40,-(parseFloat(_.getAttribute("y"))+L/2)/6,-R),f.add(k),f.add(oe)}),f.background=new Ke(16777215);const d=new gP(16777215,.8);f.add(d);const g=new _P(16777215,1.2);g.position.set(1,1,1).normalize(),f.add(g);const x=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3);x.position.set(0,0,200),f.rotation.x=-Math.PI/3;const m=new Jm({antialias:!0});m.setPixelRatio(window.devicePixelRatio),m.setSize(window.innerWidth,window.innerHeight),t.appendChild(m.domElement);const p=new yP(x,m.domElement);p.enableDamping=!0,p.dampingFactor=.25,p.screenSpacePanning=!1,p.maxPolarAngle=Math.PI/2,p.minPolarAngle=0,p.maxPolarAngle=Math.PI;const A=function(){requestAnimationFrame(A),m.render(f,x),p.update()};A(),x.lookAt(new H(0,0,0))},methods:{toggleEcosystem(t){const e=this.filter.indexOf(t);e===-1?this.filter.push(t):this.filter.splice(e,1),this.updateGraph()},updateGraph(){mf("svg").selectAll("rect").remove()}}},SP={class:"main"},EP={class:"filterBox"},wP=["onClick"],TP={class:"canvas",ref:"canvas"};function AP(t,e,n,i,r,s){return cn(),Mo("div",SP,[ds("div",EP,[(cn(!0),Mo(Kt,null,Hg(r.ecosystems,o=>(cn(),Mo("button",{class:ws(["filterButton",{active:r.filter.includes(o)}]),key:o,onClick:a=>s.toggleEcosystem(o)},C_(o),11,wP))),128))]),ds("div",TP,null,512)])}const RP=l_(MP,[["render",AP]]);const CP={methods:{handleButtonClick(){console.log("Button clicked!")}}},PP={class:"main"};function LP(t,e,n,i,r,s){const o=RP;return cn(),Mo("div",null,[ds("div",PP,[dt(o)])])}const NP=l_(CP,[["render",LP],["__scopeId","data-v-fa9378a5"]]),DP={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?Au(()=>Qu(()=>import("./error-404.ec6edd50.js"),["./error-404.ec6edd50.js","./vue.f36acd1f.48ab0c9b.js","./error-404.7fc72018.css"],import.meta.url).then(f=>f.default||f)):Au(()=>Qu(()=>import("./error-500.ecacee27.js"),["./error-500.ecacee27.js","./vue.f36acd1f.48ab0c9b.js","./error-500.c5df6088.css"],import.meta.url).then(f=>f.default||f));return(f,h)=>(cn(),or(vt(u),T_(dp({statusCode:vt(i),statusMessage:vt(s),description:vt(o),stack:vt(a)})),null,16))}},dd={__name:"nuxt-root",setup(t){const e=()=>null,n=Mt(),i=n.deferHydration(),r=!1;ep(Vp,Xp()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=Vc();Zd((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),Qx(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Zx(a)),!1});const o=!1;return(a,l)=>(cn(),or(yg,{onResolve:vt(i)},{default:Wd(()=>[vt(s)?(cn(),or(vt(DP),{key:0,error:vt(s)},null,8,["error"])):vt(o)?(cn(),or(vt(e),{key:1,context:vt(o)},null,8,["context"])):vt(r)?(cn(),or(gg(vt(r)),{key:2})):(cn(),or(vt(NP),{key:3}))]),_:1},8,["onResolve"]))}};let pd;{let t;pd=async function(){var o,a;if(t)return t;const i=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?G0(dd):k0(dd),r=Xv({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||l}i.config.errorHandler=s;try{await $v(r,My)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(sy),await r.hooks.callHook("app:mounted",i),await Rc()}catch(l){s(l)}return i.config.errorHandler===s&&(i.config.errorHandler=void 0),i},t=pd().catch(e=>{console.error("Error while mounting app:",e)})}export{Wd as A,pp as B,IP as C,UP as D,BP as E,FP as F,Oa as G,Cg as H,Rg as I,Xl as J,c0 as K,l_ as _,Kp as a,uf as b,_0 as c,Ag as d,Ug as e,zP as f,g0 as g,ga as h,OP as i,Or as j,yp as k,Mp as l,Vo as m,HP as n,Ng as o,Ts as p,Mt as q,pr as r,ty as s,cn as t,va as u,Mo as v,Gl as w,ds as x,C_ as y,dt as z};
