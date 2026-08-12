const __vite__fileDeps=["./CmsBackground.D_qVNAVH.js","./scheduler.B7VbuxnL.js","./index.BwH00N0G.js","./each.CFoKlTR7.js","./Ripple.BpdaH9m_.js","./entry.Djqt94Hr.js","./paths.CFfQa_KG.js","./OrcamSections.CR8t_FT5.js","./OrcamRichTextComponent.C1YrdiOv.js","./preload-helper.D6kgxu3v.js","../assets/OrcamRichTextComponent.hS1D_J9V.css","./index.3V93nIW5.js","../assets/OrcamSections.BpP1ybh3.css","../assets/CmsBackground.CYOU1PUu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Ld=Object.defineProperty;var Id=(i,e,t)=>e in i?Ld(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Pt=(i,e,t)=>(Id(i,typeof e!="symbol"?e+"":e,t),t);import{_ as Dd}from"./preload-helper.D6kgxu3v.js";import{au as Pd,s as St,e as te,t as it,b as ne,d as ae,f as rt,h as U,q as H,i as fe,j as Y,k as Rt,n as ct,l as Ft,J as Nr,N as ji,G as an,m as Ee,o as Se,T as lt,I as In,M as Nn,r as ul,x as At,X as ga,z as wt,ah as vn,av as Nd,L as Ur,p as fl,K as Es,c as Da,v as _a,w as va,u as Pa,g as Na,a as Ua,E as Un,F as ai,U as Wl,V as Xl,W as Ud,A as ql,B as Od,C as jl,al as Fd,aj as rs,ak as ss,$ as hl,y as Yl}from"./scheduler.B7VbuxnL.js";import{f as fs,h as kd,u as Bd}from"./index.3V93nIW5.js";import{S as bt,i as Tt,c as Le,b as Ne,m as Ie,t as ee,a as ce,d as De,g as _t,e as vt,f as Or,h as xa,j as Hd}from"./index.BwH00N0G.js";import{p as zd}from"./stores.BzECrkp1.js";import{i as ya,_ as Gd,k as Kl,q as Vd,M as Wd,a as Zl,n as Xd,g as qd,f as jd,l as nh,e as Yd}from"./Ripple.BpdaH9m_.js";import{e as xn,u as dl,o as pl}from"./each.CFoKlTR7.js";import{w as vr}from"./timer.CaZAoFyz.js";import{a as Kd,P as Zd,b as Jd,c as Qd}from"./public.DwpBClAv.js";import{w as Mn}from"./entry.Djqt94Hr.js";import{p as ih,g as ml,O as $d}from"./OrcamSections.CR8t_FT5.js";import{g as ep}from"./globals.D0QH3NT1.js";import{D as rh}from"./Actions.l7OQMXxp.js";import{b as Oa,O as Fa,B as gl,a as Ss,c as sh}from"./OrcamRichTextComponent.C1YrdiOv.js";import{S as ah,c as _l,I as tp,a as np,O as ip}from"./OrcamInput.CKEnqShX.js";import rp from"./OrcamAccordionRichText.CegQAyh4.js";import{g as sp}from"./util.CCLmXqMe.js";import{C as ap}from"./ActionIcons.1han43Rn.js";import{d as op}from"./utils.5-PlsUYn.js";import{i as Ls}from"./Utils.xQ-m8aHC.js";var Ot=(i=>(i.TOP="top",i.TOP_SPEAKING="top-speaking",i.BOTTOM="bottom",i.BOTTOM_SPEAKING="bottom-speaking",i.BOTTOM_MOVING="bottom-moving",i))(Ot||{}),zn=(i=>(i.BOOK_SELECTION="choose Book",i.BOOK_OPEN="Book Open",i.BOOK_DONE="Done",i.BOOK_EMAIL="Email",i.REPORTS="Reports",i))(zn||{}),It=(i=>(i.TEXT_IDLE="Text Idle",i.DEVICE_READING_TEXT="Device reading text",i.TEXT_CROP="Text Crop",i.TEXT_USER_READING="User Reading",i.TEXT_CURSOR="Cursor",i.TEXT_USER_ANSWERING="User Answering",i))(It||{}),Wt=(i=>(i.IDLE="idle",i.PAUSED="paused",i.PLAYING="playing",i.ENDED="ended",i))(Wt||{}),Ze=(i=>(i.BACKGROUND="backgroundPlayer",i.DEVICE="devicePlayer",i.EFFECTS="effectsPlayer",i))(Ze||{}),Mt=(i=>(i.IDLE="idle",i.READING="reading",i.QUITE="quite",i.MUMBLING="mumbling",i.STOP_READING_SESSION_STOPPED="stop_reading_session_stopped",i.TROUBLE_SHOOTING_ON="trouble_shooting_on",i.DONE="done",i))(Mt||{}),as=(i=>(i.AUDIO="audio",i.INTERNAL="internal",i.TIMEOUT="timeout",i))(as||{});function lp(i){return i.length===0?-1:i.map((e,t)=>[e,t]).reduce((e,t)=>t[0]>e[0]?t:e)[1]}function cp(i){return i.length===0?-1:i.map((e,t)=>[e,t]).reduce((e,t)=>t[0]<e[0]?t:e)[1]}function up(i,e){const t=Array(e.length+1).fill(null).map(()=>Array(i.length+1).fill(null));for(let n=0;n<=i.length;n+=1)t[0][n]=n;for(let n=0;n<=e.length;n+=1)t[n][0]=n;for(let n=1;n<=e.length;n+=1)for(let r=1;r<=i.length;r+=1){const s=i[r-1]===e[n-1]?0:1;t[n][r]=Math.min(t[n][r-1]+1,t[n-1][r]+1,t[n-1][r-1]+s)}return t[e.length][i.length]}function fp(i,e,t=.1){const n={};i.forEach(u=>{n[u]=[]}),i.forEach((u,f)=>{n[u].push(f)});const r=Array(e.length).fill(-1).map(()=>Array(i.length).fill(0));for(let u=0;u<e.length;u+=1)for(let f=0;f<i.length;f+=1)r[u][f]=up(e[u],i[f]);const s=[];if(e.forEach((u,f)=>{const h=i[cp(r[f])];n[h].forEach(d=>{let g=1,_=-1;s.forEach((m,p)=>{const y=m.score+1-(d-m.bindex)*t-.1*r[f][d];m.bindex<d&&m.qindex<f&&g<=y&&(_=p,g=y)}),s.push({bindex:d,qindex:f,score:g,prev:_})})}),s.length===0)return[[],[]];const a=lp(s.map(u=>u.score));let o=s[a];const l=[o.bindex],c=[o.qindex];for(;o.prev>-1;)o=s[o.prev],l.push(o.bindex),c.push(o.qindex);return l.reverse(),c.reverse(),console.log("base path matching = ",l.map(u=>i[u])),[l,c]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="152",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hp=0,Jl=1,dp=2,oh=1,pp=2,ii=3,oi=0,sn=1,Gn=2,yi=0,xr=1,Ql=2,$l=3,ec=4,mp=5,gr=100,gp=101,_p=102,tc=103,nc=104,vp=200,xp=201,yp=202,Mp=203,lh=204,ch=205,Ep=206,Sp=207,bp=208,Tp=209,Ap=210,wp=0,Rp=1,Cp=2,Oo=3,Lp=4,Ip=5,Dp=6,Pp=7,uh=0,Np=1,Up=2,si=0,Op=1,Fp=2,kp=3,Bp=4,Hp=5,fh=300,br=301,Tr=302,Fo=303,ko=304,ka=306,Ar=1e3,mn=1001,Ma=1002,Gt=1003,Bo=1004,ua=1005,nn=1006,hh=1007,Hi=1008,zi=1009,zp=1010,Gp=1011,dh=1012,Vp=1013,Ii=1014,xi=1015,hs=1016,Wp=1017,Xp=1018,yr=1020,qp=1021,gn=1023,jp=1024,Yp=1025,Ui=1026,wr=1027,Kp=1028,Zp=1029,Jp=1030,Qp=1031,$p=1033,Ka=33776,Za=33777,Ja=33778,Qa=33779,ic=35840,rc=35841,sc=35842,ac=35843,em=36196,oc=37492,lc=37496,cc=37808,uc=37809,fc=37810,hc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Ec=37821,$a=36492,tm=36283,Sc=36284,bc=36285,Tc=36286,ds=2300,Rr=2301,eo=2302,Ac=2400,wc=2401,Rc=2402,nm=2500,im=0,ph=1,Ho=2,mh=3e3,Oi=3001,rm=3200,sm=3201,gh=0,am=1,Fi="",He="srgb",Xn="srgb-linear",_h="display-p3",to=7680,om=519,zo=35044,Cc="300 es",Go=1035;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const os=Math.PI/180,Cr=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function xl(i,e){return(i%e+e)%e}function lm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function cm(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function um(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function fm(i,e=1){return e-Math.abs(xl(i,e*2)-e)}function hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mm(i,e){return i+Math.random()*(e-i)}function gm(i){return i*(.5-Math.random())}function _m(i){i!==void 0&&(Lc=i);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(i){return i*os}function xm(i){return i*Cr}function Vo(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ym(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mm={DEG2RAD:os,RAD2DEG:Cr,generateUUID:Dn,clamp:Vt,euclideanModulo:xl,mapLinear:lm,inverseLerp:cm,lerp:ls,damp:um,pingpong:fm,smoothstep:hm,smootherstep:dm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:_m,degToRad:vm,radToDeg:xm,isPowerOfTwo:Vo,ceilPowerOfTwo:vh,floorPowerOfTwo:xh,setQuaternionFromProperEuler:ym,normalize:pt,denormalize:ri};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],M=r[4],S=r[7],x=r[2],b=r[5],N=r[8];return s[0]=a*_+o*y+l*x,s[3]=a*m+o*M+l*b,s[6]=a*p+o*S+l*N,s[1]=c*_+u*y+f*x,s[4]=c*m+u*M+f*b,s[7]=c*p+u*S+f*N,s[2]=h*_+d*y+g*x,s[5]=h*m+d*M+g*b,s[8]=h*p+d*S+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(no.makeScale(e,t)),this}rotate(e){return this.premultiply(no.makeRotation(-e)),this}translate(e,t){return this.premultiply(no.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const no=new $e;function yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Ic={};function cs(i){i in Ic||(Ic[i]=!0,console.warn(i))}function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Em=new $e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Sm=new $e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bm(i){return i.convertSRGBToLinear().applyMatrix3(Sm)}function Tm(i){return i.applyMatrix3(Em).convertLinearToSRGB()}const Am={[Xn]:i=>i,[He]:i=>i.convertSRGBToLinear(),[_h]:bm},wm={[Xn]:i=>i,[He]:i=>i.convertLinearToSRGB(),[_h]:Tm},Sn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Xn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Am[e],r=wm[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Qi;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ps("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Eh{constructor(e=null){this.isSource=!0,this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ro(r[a].image)):s.push(ro(r[a]))}else s=ro(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Xt extends Yi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=mn,r=mn,s=nn,a=Hi,o=gn,l=zi,c=Xt.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Dn(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Oi?He:Fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Oi:mh}set encoding(e){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?He:Fi}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=fh;Xt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,x=(p+1)/2,b=(u+h)/4,N=(f+_)/4,w=(g+m)/4;return M>S&&M>x?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=N/n):S>x?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=w/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=N/s,r=w/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gi extends Yi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oi?He:Fi),this.texture=new Xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sh extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cm extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const x=Math.sqrt(M),b=Math.atan2(x,p*y);m=Math.sin(m*b)/x,o=Math.sin(o*b)/x}const S=o*y;if(l=l*m+h*S,c=c*m+d*S,u=u*m+g*S,f=f*m+_*S,m===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,f=l*r+s*n-a*t,h=-s*t-a*n-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new k,Dc=new qn;class On{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Zn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else r.boundingBox===null&&r.computeBoundingBox(),$i.copy(r.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Is.subVectors(this.max,zr),er.subVectors(e.a,zr),tr.subVectors(e.b,zr),nr.subVectors(e.c,zr),fi.subVectors(tr,er),hi.subVectors(nr,tr),bi.subVectors(er,nr);let t=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-bi.z,bi.y,fi.z,0,-fi.x,hi.z,0,-hi.x,bi.z,0,-bi.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-bi.y,bi.x,0];return!ao(t,er,tr,nr,Is)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,er,tr,nr,Is))?!1:(Ds.crossVectors(fi,hi),t=[Ds.x,Ds.y,Ds.z],ao(t,er,tr,nr,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,$i=new On,er=new k,tr=new k,nr=new k,fi=new k,hi=new k,bi=new k,zr=new k,Is=new k,Ds=new k,Ti=new k;function ao(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ti.fromArray(i,s);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lm=new On,Gr=new k,oo=new k;class ci{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(oo)),this.expandByPoint(Gr.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new k,lo=new k,Ps=new k,di=new k,co=new k,Ns=new k,uo=new k;class yl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lo.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),di.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=di.dot(this.direction),l=-di.dot(Ps),c=di.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lo).addScaledVector(Ps,h),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,s){co.subVectors(t,e),Ns.subVectors(n,e),uo.crossVectors(co,Ns);let a=this.direction.dot(uo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(di,Ns));if(l<0)return null;const c=o*this.direction.dot(co.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(uo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Dm)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),Us.crossVectors(ln,pi),r[0]=pi.x,r[4]=Us.x,r[8]=ln.x,r[1]=pi.y,r[5]=Us.y,r[9]=ln.y,r[2]=pi.z,r[6]=Us.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],M=n[7],S=n[11],x=n[15],b=r[0],N=r[4],w=r[8],v=r[12],E=r[1],I=r[5],z=r[9],R=r[13],O=r[2],B=r[6],Q=r[10],Z=r[14],P=r[3],q=r[7],le=r[11],ye=r[15];return s[0]=a*b+o*E+l*O+c*P,s[4]=a*N+o*I+l*B+c*q,s[8]=a*w+o*z+l*Q+c*le,s[12]=a*v+o*R+l*Z+c*ye,s[1]=u*b+f*E+h*O+d*P,s[5]=u*N+f*I+h*B+d*q,s[9]=u*w+f*z+h*Q+d*le,s[13]=u*v+f*R+h*Z+d*ye,s[2]=g*b+_*E+m*O+p*P,s[6]=g*N+_*I+m*B+p*q,s[10]=g*w+_*z+m*Q+p*le,s[14]=g*v+_*R+m*Z+p*ye,s[3]=y*b+M*E+S*O+x*P,s[7]=y*N+M*I+S*B+x*q,s[11]=y*w+M*z+S*Q+x*le,s[15]=y*v+M*R+S*Z+x*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,M=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,S=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,x=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,b=t*y+n*M+r*S+s*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/b;return e[0]=y*N,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*N,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*N,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*N,e[4]=M*N,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*N,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*N,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*N,e[8]=S*N,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*N,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*N,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*N,e[12]=x*N,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*N,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*N,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,y=l*c,M=l*u,S=l*f,x=n.x,b=n.y,N=n.z;return r[0]=(1-(_+p))*x,r[1]=(d+S)*x,r[2]=(g-M)*x,r[3]=0,r[4]=(d-S)*b,r[5]=(1-(h+p))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(g+M)*N,r[9]=(m-y)*N,r[10]=(1-(h+_))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const a=ir.set(r[4],r[5],r[6]).length(),o=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/a,f=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),f=(t+e)*l,h=(n+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new k,bn=new Je,Im=new k(0,0,0),Dm=new k(1,1,1),pi=new k,Us=new k,ln=new k,Pc=new Je,Nc=new qn;class Ba{constructor(e=0,t=0,n=0,r=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const Uc=new k,rr=new qn,Qn=new Je,Os=new k,Vr=new k,Nm=new k,Um=new qn,Oc=new k(1,0,0),Fc=new k(0,1,0),kc=new k(0,0,1),Om={type:"added"},Bc={type:"removed"};class Et extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new k,t=new Ba,n=new qn,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Vr,Os,this.up):Qn.lookAt(Os,Vr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Qn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new k(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new k,$n=new k,fo=new k,ei=new k,sr=new k,ar=new k,Hc=new k,ho=new k,po=new k,mo=new k;let Fs=!1;class Cn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Tn.subVectors(r,t),$n.subVectors(n,t),fo.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot($n),l=Tn.dot(fo),c=$n.dot($n),u=$n.dot(fo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,r,s,a,o,l){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ei),l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l}static isFrontFacing(e,t,n,r){return Tn.subVectors(n,t),$n.subVectors(e,t),Tn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),Cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;sr.subVectors(r,n),ar.subVectors(s,n),ho.subVectors(e,n);const l=sr.dot(ho),c=ar.dot(ho);if(l<=0&&c<=0)return t.copy(n);po.subVectors(e,r);const u=sr.dot(po),f=ar.dot(po);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(sr,a);mo.subVectors(e,s);const d=sr.dot(mo),g=ar.dot(mo);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ar,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Hc.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Hc,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fm=0;class Vn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=xr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ks={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Sn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Sn.workingColorSpace){if(e=xl(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=go(a,s,e+1/3),this.g=go(a,s,e),this.b=go(a,s,e-1/3)}return Sn.toWorkingColorSpace(this,r),this}setStyle(e,t=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Sn.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Vt(Yt.r*255,0,255))*65536+Math.round(Vt(Yt.g*255,0,255))*256+Math.round(Vt(Yt.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Sn.workingColorSpace){Sn.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Sn.workingColorSpace){return Sn.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=He){Sn.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),An.h+=e,An.s+=t,An.l+=n,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(ks);const n=ls(An.h,ks.h,t),r=ls(An.s,ks.s,t),s=ls(An.l,ks.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Yt=new qe;qe.NAMES=Th;class Di extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new k,Bs=new Ve;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ah extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wh extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pn extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let km=0;const dn=new Je,_o=new Et,or=new k,cn=new On,Wr=new On,zt=new k;class yn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?wh:Ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(cn.min,Wr.min),cn.expandByPoint(zt),zt.addVectors(cn.max,Wr.max),cn.expandByPoint(zt)):(cn.expandByPoint(Wr.min),cn.expandByPoint(Wr.max))}cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),zt.add(or)),r=Math.max(r,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new k,u[E]=new k;const f=new k,h=new k,d=new k,g=new Ve,_=new Ve,m=new Ve,p=new k,y=new k;function M(E,I,z){f.fromArray(r,E*3),h.fromArray(r,I*3),d.fromArray(r,z*3),g.fromArray(a,E*2),_.fromArray(a,I*2),m.fromArray(a,z*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const R=1/(_.x*m.y-m.x*_.y);isFinite(R)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(R),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(R),c[E].add(p),c[I].add(p),c[z].add(p),u[E].add(y),u[I].add(y),u[z].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,I=S.length;E<I;++E){const z=S[E],R=z.start,O=z.count;for(let B=R,Q=R+O;B<Q;B+=3)M(n[B+0],n[B+1],n[B+2])}const x=new k,b=new k,N=new k,w=new k;function v(E){N.fromArray(s,E*3),w.copy(N);const I=c[E];x.copy(I),x.sub(N.multiplyScalar(N.dot(I))).normalize(),b.crossVectors(w,I);const R=b.dot(u[E])<0?-1:1;l[E*4]=x.x,l[E*4+1]=x.y,l[E*4+2]=x.z,l[E*4+3]=R}for(let E=0,I=S.length;E<I;++E){const z=S[E],R=z.start,O=z.count;for(let B=R,Q=R+O;B<Q;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Je,Bn=new yl,Hs=new ci,Gc=new k,lr=new k,cr=new k,ur=new k,vo=new k,zs=new k,Gs=new Ve,Vs=new Ve,Ws=new Ve,Vc=new k,Wc=new k,Xc=new k,Xs=new k,qs=new k;class _n extends Et{constructor(e=new yn,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(vo.fromBufferAttribute(f,e),a?zs.addScaledVector(vo,u):zs.addScaledVector(vo.sub(t),u))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(Hs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Hs,Gc)===null||Bn.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(zc.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const _=f[d],m=s[_.materialIndex],p=Math.max(_.start,h.start),y=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let M=p,S=y;M<S;M+=3){const x=a.getX(M),b=a.getX(M+1),N=a.getX(M+2);n=js(this,m,e,Bn,l,c,u,x,b,N),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=d,m=g;_<m;_+=3){const p=a.getX(_),y=a.getX(_+1),M=a.getX(_+2);n=js(this,s,e,Bn,l,c,u,p,y,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const _=f[d],m=s[_.materialIndex],p=Math.max(_.start,h.start),y=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let M=p,S=y;M<S;M+=3){const x=M,b=M+1,N=M+2;n=js(this,m,e,Bn,l,c,u,x,b,N),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=d,m=g;_<m;_+=3){const p=_,y=_+1,M=_+2;n=js(this,s,e,Bn,l,c,u,p,y,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Bm(i,e,t,n,r,s,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===oi,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function js(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,ur);const u=Bm(i,e,t,n,lr,cr,ur,Xs);if(u){r&&(Gs.fromBufferAttribute(r,o),Vs.fromBufferAttribute(r,l),Ws.fromBufferAttribute(r,c),u.uv=Cn.getInterpolation(Xs,lr,cr,ur,Gs,Vs,Ws,new Ve)),s&&(Gs.fromBufferAttribute(s,o),Vs.fromBufferAttribute(s,l),Ws.fromBufferAttribute(s,c),u.uv1=Cn.getInterpolation(Xs,lr,cr,ur,Gs,Vs,Ws,new Ve),u.uv2=u.uv1),a&&(Vc.fromBufferAttribute(a,o),Wc.fromBufferAttribute(a,l),Xc.fromBufferAttribute(a,c),u.normal=Cn.getInterpolation(Xs,lr,cr,ur,Vc,Wc,Xc,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};Cn.getNormal(lr,cr,ur,f.normal),u.face=f}return u}class bs extends yn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(f,2));function g(_,m,p,y,M,S,x,b,N,w,v){const E=S/N,I=x/w,z=S/2,R=x/2,O=b/2,B=N+1,Q=w+1;let Z=0,P=0;const q=new k;for(let le=0;le<Q;le++){const ye=le*I-R;for(let ge=0;ge<B;ge++){const J=ge*E-z;q[_]=J*y,q[m]=ye*M,q[p]=O,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(ge/N),f.push(1-le/w),Z+=1}}for(let le=0;le<w;le++)for(let ye=0;ye<N;ye++){const ge=h+ye+B*le,J=h+ye+B*(le+1),oe=h+(ye+1)+B*(le+1),pe=h+(ye+1)+B*le;l.push(ge,J,pe),l.push(J,oe,pe),P+=6}o.addGroup(d,P,v),d+=P,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Hm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rh(i){return i.getRenderTarget()===null?i.outputColorSpace:Xn}const zm={clone:Lr,merge:$t};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ch extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Ch{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,hr=1;class Wm extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new en(fr,hr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new en(fr,hr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new en(fr,hr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new en(fr,hr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new en(fr,hr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new en(fr,hr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=si,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Lh extends Xt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?He:Fi),this.texture=new Lh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bs(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:yi});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=nn),new Wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const xo=new k,qm=new k,jm=new $e;class wi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xo.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jm.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new ci,Ys=new k;class Ml{constructor(e=new wi,t=new wi,n=new wi,r=new wi,s=new wi,a=new wi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],_=n[11],m=n[12],p=n[13],y=n[14],M=n[15];return t[0].setComponents(o-r,f-l,_-h,M-m).normalize(),t[1].setComponents(o+r,f+l,_+h,M+m).normalize(),t[2].setComponents(o+s,f+c,_+d,M+p).normalize(),t[3].setComponents(o-s,f-c,_-d,M-p).normalize(),t[4].setComponents(o-a,f-u,_-g,M-y).normalize(),t[5].setComponents(o+a,f+u,_+g,M+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ym(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class El extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let M=0;M<c;M++){const S=M*f-s;g.push(S,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,S=y+c*(p+1),x=y+1+c*(p+1),b=y+1+c*p;d.push(M,S,b),d.push(S,x,b)}this.setIndex(d),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg="vec3 transformed = vec3( position );",ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pg=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,kg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,Wg=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Xg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
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
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,__=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C_=`float getShadowMask() {
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
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,N_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,B_=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,H_=`#ifdef USE_UV
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
#endif`,z_=`#ifdef USE_UV
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
#endif`,G_=`#ifdef USE_UV
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
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q_=`#define DISTANCE
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
}`,$_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,d0=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:Km,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:Qm,aomap_fragment:$m,aomap_pars_fragment:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:ag,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:hg,color_vertex:dg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:_g,displacementmap_vertex:vg,emissivemap_fragment:xg,emissivemap_pars_fragment:yg,encodings_fragment:Mg,encodings_pars_fragment:Eg,envmap_fragment:Sg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:kg,envmap_vertex:wg,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Lg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Dg,lightmap_fragment:Pg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:Hg,lights_phong_fragment:zg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:jg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:$g,map_particle_fragment:e_,map_particle_pars_fragment:t_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:a_,morphtarget_vertex:o_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:f_,normal_vertex:h_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:g_,iridescence_pars_fragment:__,output_fragment:v_,packing:x_,premultiplied_alpha_fragment:y_,project_vertex:M_,dithering_fragment:E_,dithering_pars_fragment:S_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:w_,shadowmap_vertex:R_,shadowmask_pars_fragment:C_,skinbase_vertex:L_,skinning_pars_vertex:I_,skinning_vertex:D_,skinnormal_vertex:P_,specularmap_fragment:N_,specularmap_pars_fragment:U_,tonemapping_fragment:O_,tonemapping_pars_fragment:F_,transmission_fragment:k_,transmission_pars_fragment:B_,uv_pars_fragment:H_,uv_pars_vertex:z_,uv_vertex:G_,worldpos_vertex:V_,background_vert:W_,background_frag:X_,backgroundCube_vert:q_,backgroundCube_frag:j_,cube_vert:Y_,cube_frag:K_,depth_vert:Z_,depth_frag:J_,distanceRGBA_vert:Q_,distanceRGBA_frag:$_,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:h0,meshphong_frag:d0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:v0,points_frag:x0,shadow_vert:y0,shadow_frag:M0,sprite_vert:E0,sprite_frag:S0},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:$t([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:$t([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:$t([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:$t([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:$t([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:$t([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:$t([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:$t([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ks={r:0,b:0,g:0};function b0(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let y=!1,M=p.isScene===!0?p.background:null;switch(M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ka)?(u===void 0&&(u=new _n(new bs(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Lr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,N,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=M.colorSpace!==He,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new _n(new El(2,2),new Vi({name:"BackgroundMaterial",uniforms:Lr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=M.colorSpace!==He,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ks,Rh(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function T0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(O,B,Q,Z,P){let q=!1;if(a){const le=_(Z,Q,B);c!==le&&(c=le,d(c.object)),q=p(O,Z,Q,P),q&&y(O,Z,Q,P)}else{const le=B.wireframe===!0;(c.geometry!==Z.id||c.program!==Q.id||c.wireframe!==le)&&(c.geometry=Z.id,c.program=Q.id,c.wireframe=le,q=!0)}P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,w(O,B,Q,Z),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,B,Q){const Z=Q.wireframe===!0;let P=o[O.id];P===void 0&&(P={},o[O.id]=P);let q=P[B.id];q===void 0&&(q={},P[B.id]=q);let le=q[Z];return le===void 0&&(le=m(h()),q[Z]=le),le}function m(O){const B=[],Q=[],Z=[];for(let P=0;P<r;P++)B[P]=0,Q[P]=0,Z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:Z,object:O,attributes:{},index:null}}function p(O,B,Q,Z){const P=c.attributes,q=B.attributes;let le=0;const ye=Q.getAttributes();for(const ge in ye)if(ye[ge].location>=0){const oe=P[ge];let pe=q[ge];if(pe===void 0&&(ge==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),ge==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;le++}return c.attributesNum!==le||c.index!==Z}function y(O,B,Q,Z){const P={},q=B.attributes;let le=0;const ye=Q.getAttributes();for(const ge in ye)if(ye[ge].location>=0){let oe=q[ge];oe===void 0&&(ge==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),ge==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),P[ge]=pe,le++}c.attributes=P,c.attributesNum=le,c.index=Z}function M(){const O=c.newAttributes;for(let B=0,Q=O.length;B<Q;B++)O[B]=0}function S(O){x(O,0)}function x(O,B){const Q=c.newAttributes,Z=c.enabledAttributes,P=c.attributeDivisors;Q[O]=1,Z[O]===0&&(i.enableVertexAttribArray(O),Z[O]=1),P[O]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),P[O]=B)}function b(){const O=c.newAttributes,B=c.enabledAttributes;for(let Q=0,Z=B.length;Q<Z;Q++)B[Q]!==O[Q]&&(i.disableVertexAttribArray(Q),B[Q]=0)}function N(O,B,Q,Z,P,q){n.isWebGL2===!0&&(Q===i.INT||Q===i.UNSIGNED_INT)?i.vertexAttribIPointer(O,B,Q,P,q):i.vertexAttribPointer(O,B,Q,Z,P,q)}function w(O,B,Q,Z){if(n.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const P=Z.attributes,q=Q.getAttributes(),le=B.defaultAttributeValues;for(const ye in q){const ge=q[ye];if(ge.location>=0){let J=P[ye];if(J===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){const oe=J.normalized,pe=J.itemSize,_e=t.get(J);if(_e===void 0)continue;const D=_e.buffer,we=_e.type,be=_e.bytesPerElement;if(J.isInterleavedBufferAttribute){const K=J.data,ve=K.stride,Fe=J.offset;if(K.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ge.locationSize;Ce++)x(ge.location+Ce,K.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ce=0;Ce<ge.locationSize;Ce++)S(ge.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Ce=0;Ce<ge.locationSize;Ce++)N(ge.location+Ce,pe/ge.locationSize,we,oe,ve*be,(Fe+pe/ge.locationSize*Ce)*be)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<ge.locationSize;K++)x(ge.location+K,J.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<ge.locationSize;K++)S(ge.location+K);i.bindBuffer(i.ARRAY_BUFFER,D);for(let K=0;K<ge.locationSize;K++)N(ge.location+K,pe/ge.locationSize,we,oe,pe*be,pe/ge.locationSize*K*be)}}else if(le!==void 0){const oe=le[ye];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(ge.location,oe);break;case 3:i.vertexAttrib3fv(ge.location,oe);break;case 4:i.vertexAttrib4fv(ge.location,oe);break;default:i.vertexAttrib1fv(ge.location,oe)}}}}b()}function v(){z();for(const O in o){const B=o[O];for(const Q in B){const Z=B[Q];for(const P in Z)g(Z[P].object),delete Z[P];delete B[Q]}delete o[O]}}function E(O){if(o[O.id]===void 0)return;const B=o[O.id];for(const Q in B){const Z=B[Q];for(const P in Z)g(Z[P].object),delete Z[P];delete B[Q]}delete o[O.id]}function I(O){for(const B in o){const Q=o[B];if(Q[O.id]===void 0)continue;const Z=Q[O.id];for(const P in Z)g(Z[P].object),delete Z[P];delete Q[O.id]}}function z(){R(),u=!0,c!==l&&(c=l,d(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:b}}function A0(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function w0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,S=a||e.has("OES_texture_float"),x=M&&S,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:b}}function R0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new wi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,M=y*4;let S=p.clippingState||null;l.value=S,S=u(g,h,M,d);for(let x=0;x!==M;++x)S[x]=t[x];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==_;++M,S+=4)a.copy(f[M]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function C0(i){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=br:o===ko&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fo||o===ko)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xm(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Sl extends Ch{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,qc=[.125,.215,.35,.446,.526,.582],Li=20,yo=new Sl,jc=new qe;let Mo=null;const Ri=(1+Math.sqrt(5))/2,dr=1/Ri,Yc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Ri,dr),new k(0,Ri,-dr),new k(dr,0,Ri),new k(-dr,0,Ri),new k(Ri,dr,0),new k(-Ri,dr,0)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:hs,format:gn,colorSpace:Xn,depthBuffer:!1},r=Zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=I0(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,r){const o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jc),u.toneMapping=si,u.autoClear=!1;const d=new Di({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new _n(new bs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(jc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Zs(r,y*M,p>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===br||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yc[(r-1)%Yc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Li-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let y=0;for(let N=0;N<Li;++N){const w=N/_,v=Math.exp(-w*w/2);p.push(v),N===0?y+=v:N<m&&(y+=2*v)}for(let N=0;N<p.length;N++)p[N]=p[N]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const S=this._sizeLods[r],x=3*S*(r>M-_r?r-M+_r:0),b=4*(this._cubeSize-S);Zs(t,x,b,3*S,2*S),l.setRenderTarget(t),l.render(f,yo)}}function L0(i){const e=[],t=[],n=[];let r=i;const s=i-_r+1+qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-_r?l=qc[a-i+_r-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),M=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let b=0;b<d;b++){const N=b%3*2/3-1,w=b>2?0:-1,v=[N,w,0,N+2/3,w,0,N+2/3,w+1,0,N,w,0,N+2/3,w+1,0,N,w+1,0];y.set(v,_*g*b),M.set(h,m*g*b);const E=[b,b,b,b,b,b];S.set(E,p*g*b)}const x=new yn;x.setAttribute("position",new tn(y,_)),x.setAttribute("uv",new tn(M,m)),x.setAttribute("faceIndex",new tn(S,p)),e.push(x),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zc(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function I0(i,e,t){const n=new Float32Array(Li),r=new k(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jc(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Qc(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function D0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===ko,u=l===br||l===Tr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Kc(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Kc(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function P0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function N0(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,S=y.length;M<S;M+=3){const x=y[M+0],b=y[M+1],N=y[M+2];h.push(x,b,b,N,N,x)}}else{const y=g.array;_=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const x=M+0,b=M+1,N=M+2;h.push(x,b,b,N,N,x)}}const m=new(yh(h)?wh:Ah)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function U0(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function O0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F0(i,e){return i[0]-e[0]}function k0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function B0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let O=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let v=u.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const I=new Float32Array(v*E*4*g),z=new Sh(I,v,E,g);z.type=xi,z.needsUpdate=!0;const R=w*4;for(let B=0;B<g;B++){const Q=x[B],Z=b[B],P=N[B],q=v*E*4*B;for(let le=0;le<Q.count;le++){const ye=le*R;y===!0&&(a.fromBufferAttribute(Q,le),I[q+ye+0]=a.x,I[q+ye+1]=a.y,I[q+ye+2]=a.z,I[q+ye+3]=0),M===!0&&(a.fromBufferAttribute(Z,le),I[q+ye+4]=a.x,I[q+ye+5]=a.y,I[q+ye+6]=a.z,I[q+ye+7]=0),S===!0&&(a.fromBufferAttribute(P,le),I[q+ye+8]=a.x,I[q+ye+9]=a.y,I[q+ye+10]=a.z,I[q+ye+11]=P.itemSize===4?a.w:1)}}_={count:g,texture:z,size:new Ve(v,E)},s.set(u,_),u.addEventListener("dispose",O)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let M=0;M<d;M++)g[M]=[M,0];n[u.id]=g}for(let M=0;M<d;M++){const S=g[M];S[0]=M,S[1]=h[M]}g.sort(k0);for(let M=0;M<8;M++)M<d&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(F0);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const S=o[M],x=S[0],b=S[1];x!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+M)!==_[x]&&u.setAttribute("morphTarget"+M,_[x]),m&&u.getAttribute("morphNormal"+M)!==m[x]&&u.setAttribute("morphNormal"+M,m[x]),r[M]=b,p+=b):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function H0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Dh=new Xt,Ph=new Sh,Nh=new Cm,Uh=new Lh,$c=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$c[r];if(s===void 0&&(s=new Float32Array(r),$c[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function X0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),Bt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),Bt(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),Bt(t,n)}}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function nv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Dh,r)}function iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nh,r)}function rv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Uh,r)}function sv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ph,r)}function av(i){switch(i){case 5126:return z0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return j0;case 5124:case 35670:return Y0;case 35667:case 35671:return K0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return $0;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function ov(i,e){i.uniform1fv(this.addr,e)}function lv(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function cv(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function uv(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function fv(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hv(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dv(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pv(i,e){i.uniform1iv(this.addr,e)}function mv(i,e){i.uniform2iv(this.addr,e)}function gv(i,e){i.uniform3iv(this.addr,e)}function _v(i,e){i.uniform4iv(this.addr,e)}function vv(i,e){i.uniform1uiv(this.addr,e)}function xv(i,e){i.uniform2uiv(this.addr,e)}function yv(i,e){i.uniform3uiv(this.addr,e)}function Mv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dh,s[a])}function Sv(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nh,s[a])}function bv(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Uh,s[a])}function Tv(i,e,t){const n=this.cache,r=e.length,s=Ha(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ph,s[a])}function Av(i){switch(i){case 5126:return ov;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return fv;case 35675:return hv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return xv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Tv}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=av(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Av(t.type)}}class Cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function Lv(i,e,t){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),a=Eo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ru(t,c===void 0?new wv(o,i,e):new Rv(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Cv(o),ru(t,f)),t=f}}}class fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Lv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function su(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Iv=0;function Dv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Pv(i){switch(i){case Xn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function au(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dv(i.getShaderSource(e),a)}else return r}function Nv(i,e){const t=Pv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uv(i,e){let t;switch(e){case Op:t="Linear";break;case Fp:t="Reinhard";break;case kp:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case Hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ov(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function Fv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qr(i){return i!==""}function ou(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(Bv,Hv)}function Hv(i,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wo(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(zv,Gv)}function Gv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function jv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vv(t),c=Wv(t),u=Xv(t),f=qv(t),h=jv(t),d=t.isWebGL2?"":Ov(t),g=Fv(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),p=[d,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(m=[uu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[d,uu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Xe.tonemapping_pars_fragment:"",t.toneMapping!==si?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),a=Wo(a),a=ou(a,t),a=lu(a,t),o=Wo(o),o=ou(o,t),o=lu(o,t),a=cu(a),o=cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,S=y+p+o,x=su(r,r.VERTEX_SHADER,M),b=su(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,x),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const v=r.getProgramInfoLog(_).trim(),E=r.getShaderInfoLog(x).trim(),I=r.getShaderInfoLog(b).trim();let z=!0,R=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,b);else{const O=au(r,x,"vertex"),B=au(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+O+`
`+B)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(E===""||I==="")&&(R=!1);R&&(this.diagnostics={runnable:z,programLog:v,vertexShader:{log:E,prefix:m},fragmentShader:{log:I,prefix:p}})}r.deleteShader(x),r.deleteShader(b);let N;this.getUniforms=function(){return N===void 0&&(N=new fa(r,_)),N};let w;return this.getAttributes=function(){return w===void 0&&(w=kv(r,_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=b,this}let Kv=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jv(e),t.set(e,n)),n}}class Jv{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Qv(i,e,t,n,r,s,a){const o=new bh,l=new Zv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,E,I,z,R){const O=z.fog,B=R.geometry,Q=v.isMeshStandardMaterial?z.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),P=Z&&Z.mapping===ka?Z.image.height:null,q=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=le!==void 0?le.length:0;let ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let J,oe,pe,_e;if(q){const ht=Hn[q];J=ht.vertexShader,oe=ht.fragmentShader}else J=v.vertexShader,oe=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const D=i.getRenderTarget(),we=R.isInstancedMesh===!0,be=!!v.map,K=!!v.matcap,ve=!!Z,Fe=!!v.aoMap,Ce=!!v.lightMap,Be=!!v.bumpMap,ut=!!v.normalMap,ft=!!v.displacementMap,xt=!!v.emissiveMap,yt=!!v.metalnessMap,et=!!v.roughnessMap,st=v.clearcoat>0,Ut=v.iridescence>0,C=v.sheen>0,T=v.transmission>0,$=st&&!!v.clearcoatMap,ue=st&&!!v.clearcoatNormalMap,he=st&&!!v.clearcoatRoughnessMap,j=Ut&&!!v.iridescenceMap,L=Ut&&!!v.iridescenceThicknessMap,X=C&&!!v.sheenColorMap,G=C&&!!v.sheenRoughnessMap,me=!!v.specularMap,Me=!!v.specularColorMap,Re=!!v.specularIntensityMap,Te=T&&!!v.transmissionMap,Pe=T&&!!v.thicknessMap,ze=!!v.gradientMap,je=!!v.alphaMap,Ct=v.alphaTest>0,F=!!v.extensions,ie=!!B.attributes.uv1,de=!!B.attributes.uv2,Ae=!!B.attributes.uv3;return{isWebGL2:u,shaderID:q,shaderName:v.type,vertexShader:J,fragmentShader:oe,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:we,instancingColor:we&&R.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xn,map:be,matcap:K,envMap:ve,envMapMode:ve&&Z.mapping,envMapCubeUVHeight:P,aoMap:Fe,lightMap:Ce,bumpMap:Be,normalMap:ut,displacementMap:h&&ft,emissiveMap:xt,normalMapObjectSpace:ut&&v.normalMapType===am,normalMapTangentSpace:ut&&v.normalMapType===gh,metalnessMap:yt,roughnessMap:et,clearcoat:st,clearcoatMap:$,clearcoatNormalMap:ue,clearcoatRoughnessMap:he,iridescence:Ut,iridescenceMap:j,iridescenceThicknessMap:L,sheen:C,sheenColorMap:X,sheenRoughnessMap:G,specularMap:me,specularColorMap:Me,specularIntensityMap:Re,transmission:T,transmissionMap:Te,thicknessMap:Pe,gradientMap:ze,opaque:v.transparent===!1&&v.blending===xr,alphaMap:je,alphaTest:Ct,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:Fe&&_(v.aoMap.channel),lightMapUv:Ce&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:ut&&_(v.normalMap.channel),displacementMapUv:ft&&_(v.displacementMap.channel),emissiveMapUv:xt&&_(v.emissiveMap.channel),metalnessMapUv:yt&&_(v.metalnessMap.channel),roughnessMapUv:et&&_(v.roughnessMap.channel),clearcoatMapUv:$&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:L&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(v.sheenRoughnessMap.channel),specularMapUv:me&&_(v.specularMap.channel),specularColorMapUv:Me&&_(v.specularColorMap.channel),specularIntensityMapUv:Re&&_(v.specularIntensityMap.channel),transmissionMapUv:Te&&_(v.transmissionMap.channel),thicknessMapUv:Pe&&_(v.thicknessMap.channel),alphaMapUv:je&&_(v.alphaMap.channel),vertexTangents:ut&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:de,vertexUv3s:Ae,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(be||je),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:si,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:F&&v.extensions.derivatives===!0,extensionFragDepth:F&&v.extensions.fragDepth===!0,extensionDrawBuffers:F&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(y(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),v.push(o.mask)}function S(v){const E=g[v.type];let I;if(E){const z=Hn[E];I=zm.clone(z.uniforms)}else I=v.uniforms;return I}function x(v,E){let I;for(let z=0,R=c.length;z<R;z++){const O=c[z];if(O.cacheKey===E){I=O,++I.usedTimes;break}}return I===void 0&&(I=new Yv(i,E,v,s),c.push(I)),I}function b(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function N(v){l.remove(v)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:b,releaseShaderCache:N,programs:c,dispose:w}}function $v(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||ex),n.length>1&&n.sort(h||fu),r.length>1&&r.sort(h||fu)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function tx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new hu,i.set(n,[a])):r>=s.length?(a=new hu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new qe};break;case"SpotLight":t={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rx=0;function sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ax(i,e){const t=new nx,n=ix(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,a=new Je,o=new Je;function l(u,f){let h=0,d=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,m=0,p=0,y=0,M=0,S=0,x=0,b=0,N=0,w=0;u.sort(sx);const v=f===!0?Math.PI:1;for(let I=0,z=u.length;I<z;I++){const R=u[I],O=R.color,B=R.intensity,Q=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*B*v,d+=O.g*B*v,g+=O.b*B*v;else if(R.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(R.sh.coefficients[P],B);else if(R.isDirectionalLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity*v),R.castShadow){const q=R.shadow,le=n.get(R);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,r.directionalShadow[_]=le,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=R.shadow.matrix,S++}r.directional[_]=P,_++}else if(R.isSpotLight){const P=t.get(R);P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(O).multiplyScalar(B*v),P.distance=Q,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,r.spot[p]=P;const q=R.shadow;if(R.map&&(r.spotLightMap[N]=R.map,N++,q.updateMatrices(R),R.castShadow&&w++),r.spotLightMatrix[p]=q.matrix,R.castShadow){const le=n.get(R);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,r.spotShadow[p]=le,r.spotShadowMap[p]=Z,b++}p++}else if(R.isRectAreaLight){const P=t.get(R);P.color.copy(O).multiplyScalar(B),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),r.rectArea[y]=P,y++}else if(R.isPointLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity*v),P.distance=R.distance,P.decay=R.decay,R.castShadow){const q=R.shadow,le=n.get(R);le.shadowBias=q.bias,le.shadowNormalBias=q.normalBias,le.shadowRadius=q.radius,le.shadowMapSize=q.mapSize,le.shadowCameraNear=q.camera.near,le.shadowCameraFar=q.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=R.shadow.matrix,x++}r.point[m]=P,m++}else if(R.isHemisphereLight){const P=t.get(R);P.skyColor.copy(R.color).multiplyScalar(B*v),P.groundColor.copy(R.groundColor).multiplyScalar(B*v),r.hemi[M]=P,M++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==S||E.numPointShadows!==x||E.numSpotShadows!==b||E.numSpotMaps!==N)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=b+N-w,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=w,E.directionalLength=_,E.pointLength=m,E.spotLength=p,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=S,E.numPointShadows=x,E.numSpotShadows=b,E.numSpotMaps=N,r.version=rx++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let y=0,M=u.length;y<M;y++){const S=u[y];if(S.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(S.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const x=r.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=r.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function du(i,e){const t=new ax(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ox(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new du(i,e),t.set(s,[l])):a>=o.length?(l=new du(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class lx extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cx extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function hx(i,e,t){let n=new Ml;const r=new Ve,s=new Ve,a=new mt,o=new lx({depthPacking:sm}),l=new cx,c={},u=t.maxTextureSize,f={[oi]:sn,[sn]:oi,[Gn]:Gn},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ux,fragmentShader:fx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let p=this.type;this.render=function(x,b,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const w=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==ii&&this.type===ii,R=p===ii&&this.type!==ii;for(let O=0,B=x.length;O<B;O++){const Q=x[O],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const P=Z.getFrameExtents();if(r.multiply(P),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/P.x),r.x=s.x*P.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/P.y),r.y=s.y*P.y,Z.mapSize.y=s.y)),Z.map===null||z===!0||R===!0){const le=this.type!==ii?{minFilter:Gt,magFilter:Gt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Gi(r.x,r.y,le),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const q=Z.getViewportCount();for(let le=0;le<q;le++){const ye=Z.getViewport(le);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),I.viewport(a),Z.updateMatrices(Q,le),n=Z.getFrustum(),S(b,N,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ii&&y(Z,N),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,v,E)};function y(x,b){const N=e.update(_);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Gi(r.x,r.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,N,h,_,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,N,d,_,null)}function M(x,b,N,w){let v=null;const E=N.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(E!==void 0)v=E;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=v.uuid,z=b.uuid;let R=c[I];R===void 0&&(R={},c[I]=R);let O=R[z];O===void 0&&(O=v.clone(),R[z]=O),v=O}if(v.visible=b.visible,v.wireframe=b.wireframe,w===ii?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=N}return v}function S(x,b,N,w,v){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===ii)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);const z=e.update(x),R=x.material;if(Array.isArray(R)){const O=z.groups;for(let B=0,Q=O.length;B<Q;B++){const Z=O[B],P=R[Z.materialIndex];if(P&&P.visible){const q=M(x,P,w,v);i.renderBufferDirect(N,null,z,q,x,Z)}}}else if(R.visible){const O=M(x,R,w,v);i.renderBufferDirect(N,null,z,O,x,null)}}const I=x.children;for(let z=0,R=I.length;z<R;z++)S(I[z],b,N,w,v)}}function dx(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ie=new mt;let de=null;const Ae=new mt(0,0,0,0);return{setMask:function(Ue){de!==Ue&&!F&&(i.colorMask(Ue,Ue,Ue,Ue),de=Ue)},setLocked:function(Ue){F=Ue},setClear:function(Ue,ht,dt,qt,ui){ui===!0&&(Ue*=qt,ht*=qt,dt*=qt),ie.set(Ue,ht,dt,qt),Ae.equals(ie)===!1&&(i.clearColor(Ue,ht,dt,qt),Ae.copy(ie))},reset:function(){F=!1,de=null,Ae.set(-1,0,0,0)}}}function s(){let F=!1,ie=null,de=null,Ae=null;return{setTest:function(Ue){Ue?D(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ue){ie!==Ue&&!F&&(i.depthMask(Ue),ie=Ue)},setFunc:function(Ue){if(de!==Ue){switch(Ue){case wp:i.depthFunc(i.NEVER);break;case Rp:i.depthFunc(i.ALWAYS);break;case Cp:i.depthFunc(i.LESS);break;case Oo:i.depthFunc(i.LEQUAL);break;case Lp:i.depthFunc(i.EQUAL);break;case Ip:i.depthFunc(i.GEQUAL);break;case Dp:i.depthFunc(i.GREATER);break;case Pp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ue}},setLocked:function(Ue){F=Ue},setClear:function(Ue){Ae!==Ue&&(i.clearDepth(Ue),Ae=Ue)},reset:function(){F=!1,ie=null,de=null,Ae=null}}}function a(){let F=!1,ie=null,de=null,Ae=null,Ue=null,ht=null,dt=null,qt=null,ui=null;return{setTest:function(Lt){F||(Lt?D(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Lt){ie!==Lt&&!F&&(i.stencilMask(Lt),ie=Lt)},setFunc:function(Lt,hn,kn){(de!==Lt||Ae!==hn||Ue!==kn)&&(i.stencilFunc(Lt,hn,kn),de=Lt,Ae=hn,Ue=kn)},setOp:function(Lt,hn,kn){(ht!==Lt||dt!==hn||qt!==kn)&&(i.stencilOp(Lt,hn,kn),ht=Lt,dt=hn,qt=kn)},setLocked:function(Lt){F=Lt},setClear:function(Lt){ui!==Lt&&(i.clearStencil(Lt),ui=Lt)},reset:function(){F=!1,ie=null,de=null,Ae=null,Ue=null,ht=null,dt=null,qt=null,ui=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,M=null,S=null,x=null,b=null,N=null,w=null,v=!1,E=null,I=null,z=null,R=null,O=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Z=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(P)[1]),Q=Z>=1):P.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Q=Z>=2);let q=null,le={};const ye=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),J=new mt().fromArray(ye),oe=new mt().fromArray(ge);function pe(F,ie,de,Ae){const Ue=new Uint8Array(4),ht=i.createTexture();i.bindTexture(F,ht),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<de;dt++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(ie+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return ht}const _e={};_e[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(i.DEPTH_TEST),l.setFunc(Oo),ft(!1),xt(Jl),D(i.CULL_FACE),Be(yi);function D(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function we(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function be(F,ie){return d[F]!==ie?(i.bindFramebuffer(F,ie),d[F]=ie,n&&(F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function K(F,ie){let de=_,Ae=!1;if(F)if(de=g.get(ie),de===void 0&&(de=[],g.set(ie,de)),F.isWebGLMultipleRenderTargets){const Ue=F.texture;if(de.length!==Ue.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,dt=Ue.length;ht<dt;ht++)de[ht]=i.COLOR_ATTACHMENT0+ht;de.length=Ue.length,Ae=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Ae=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function ve(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const Fe={[gr]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};if(n)Fe[tc]=i.MIN,Fe[nc]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Fe[tc]=F.MIN_EXT,Fe[nc]=F.MAX_EXT)}const Ce={[vp]:i.ZERO,[xp]:i.ONE,[yp]:i.SRC_COLOR,[lh]:i.SRC_ALPHA,[Ap]:i.SRC_ALPHA_SATURATE,[bp]:i.DST_COLOR,[Ep]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[Tp]:i.ONE_MINUS_DST_COLOR,[Sp]:i.ONE_MINUS_DST_ALPHA};function Be(F,ie,de,Ae,Ue,ht,dt,qt){if(F===yi){p===!0&&(we(i.BLEND),p=!1);return}if(p===!1&&(D(i.BLEND),p=!0),F!==mp){if(F!==y||qt!==v){if((M!==gr||b!==gr)&&(i.blendEquation(i.FUNC_ADD),M=gr,b=gr),qt)switch(F){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,x=null,N=null,w=null,y=F,v=qt}return}Ue=Ue||ie,ht=ht||de,dt=dt||Ae,(ie!==M||Ue!==b)&&(i.blendEquationSeparate(Fe[ie],Fe[Ue]),M=ie,b=Ue),(de!==S||Ae!==x||ht!==N||dt!==w)&&(i.blendFuncSeparate(Ce[de],Ce[Ae],Ce[ht],Ce[dt]),S=de,x=Ae,N=ht,w=dt),y=F,v=!1}function ut(F,ie){F.side===Gn?we(i.CULL_FACE):D(i.CULL_FACE);let de=F.side===sn;ie&&(de=!de),ft(de),F.blending===xr&&F.transparent===!1?Be(yi):Be(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Ae=F.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function xt(F){F!==hp?(D(i.CULL_FACE),F!==I&&(F===Jl?i.cullFace(i.BACK):F===dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),I=F}function yt(F){F!==z&&(Q&&i.lineWidth(F),z=F)}function et(F,ie,de){F?(D(i.POLYGON_OFFSET_FILL),(R!==ie||O!==de)&&(i.polygonOffset(ie,de),R=ie,O=de)):we(i.POLYGON_OFFSET_FILL)}function st(F){F?D(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Ut(F){F===void 0&&(F=i.TEXTURE0+B-1),q!==F&&(i.activeTexture(F),q=F)}function C(F,ie,de){de===void 0&&(q===null?de=i.TEXTURE0+B-1:de=q);let Ae=le[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},le[de]=Ae),(Ae.type!==F||Ae.texture!==ie)&&(q!==de&&(i.activeTexture(de),q=de),i.bindTexture(F,ie||_e[F]),Ae.type=F,Ae.texture=ie)}function T(){const F=le[q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){J.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),J.copy(F))}function Pe(F){oe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function ze(F,ie){let de=f.get(ie);de===void 0&&(de=new WeakMap,f.set(ie,de));let Ae=de.get(F);Ae===void 0&&(Ae=i.getUniformBlockIndex(ie,F.name),de.set(F,Ae))}function je(F,ie){const Ae=f.get(ie).get(F);u.get(ie)!==Ae&&(i.uniformBlockBinding(ie,Ae,F.__bindingPointIndex),u.set(ie,Ae))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,le={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,M=null,S=null,x=null,b=null,N=null,w=null,v=!1,E=null,I=null,z=null,R=null,O=null,J.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:D,disable:we,bindFramebuffer:be,drawBuffers:K,useProgram:ve,setBlending:Be,setMaterial:ut,setFlipSided:ft,setCullFace:xt,setLineWidth:yt,setPolygonOffset:et,setScissorTest:st,activeTexture:Ut,bindTexture:C,unbindTexture:T,compressedTexImage2D:$,compressedTexImage3D:ue,texImage2D:Me,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:je,texStorage2D:G,texStorage3D:me,texSubImage2D:he,texSubImage3D:j,compressedTexSubImage2D:L,compressedTexSubImage3D:X,scissor:Te,viewport:Pe,reset:Ct}}function px(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,T){return p?new OffscreenCanvas(C,T):ps("canvas")}function M(C,T,$,ue){let he=1;if((C.width>ue||C.height>ue)&&(he=ue/Math.max(C.width,C.height)),he<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const j=T?xh:Math.floor,L=j(he*C.width),X=j(he*C.height);_===void 0&&(_=y(L,X));const G=$?y(L,X):_;return G.width=L,G.height=X,G.getContext("2d").drawImage(C,0,0,L,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+L+"x"+X+")."),G}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return Vo(C.width)&&Vo(C.height)}function x(C){return o?!1:C.wrapS!==mn||C.wrapT!==mn||C.minFilter!==Gt&&C.minFilter!==nn}function b(C,T){return C.generateMipmaps&&T&&C.minFilter!==Gt&&C.minFilter!==nn}function N(C){i.generateMipmap(C)}function w(C,T,$,ue,he=!1){if(o===!1)return T;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=T;return T===i.RED&&($===i.FLOAT&&(j=i.R32F),$===i.HALF_FLOAT&&(j=i.R16F),$===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RG&&($===i.FLOAT&&(j=i.RG32F),$===i.HALF_FLOAT&&(j=i.RG16F),$===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RGBA&&($===i.FLOAT&&(j=i.RGBA32F),$===i.HALF_FLOAT&&(j=i.RGBA16F),$===i.UNSIGNED_BYTE&&(j=ue===He&&he===!1?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)),(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(C,T,$){return b(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){return C===Gt||C===Bo||C===ua?i.NEAREST:i.LINEAR}function I(C){const T=C.target;T.removeEventListener("dispose",I),R(T),T.isVideoTexture&&g.delete(T)}function z(C){const T=C.target;T.removeEventListener("dispose",z),B(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const $=C.source,ue=m.get($);if(ue){const he=ue[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(C),Object.keys(ue).length===0&&m.delete($)}n.remove(C)}function O(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const $=C.source,ue=m.get($);delete ue[T.__cacheKey],a.memory.textures--}function B(C){const T=C.texture,$=n.get(C),ue=n.get(T);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)i.deleteFramebuffer($.__webglFramebuffer[he]),$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[he]);else{if(i.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let he=0;he<$.__webglColorRenderbuffer.length;he++)$.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[he]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,j=T.length;he<j;he++){const L=n.get(T[he]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(T[he])}n.remove(T),n.remove(C)}let Q=0;function Z(){Q=0}function P(){const C=Q;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Q+=1,C}function q(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function le(C,T){const $=n.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const ue=C.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we($,C,T);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function ye(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){we($,C,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function ge(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){we($,C,T);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function J(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){be($,C,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const oe={[Ar]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},pe={[Gt]:i.NEAREST,[Bo]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[hh]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR};function _e(C,T,$){if($?(i.texParameteri(C,i.TEXTURE_WRAP_S,oe[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[T.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==mn||T.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(T.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Gt&&T.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Gt||T.minFilter!==ua&&T.minFilter!==Hi||T.type===xi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(C,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function D(C,T){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",I));const ue=T.source;let he=m.get(ue);he===void 0&&(he={},m.set(ue,he));const j=q(T);if(j!==C.__cacheKey){he[j]===void 0&&(he[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),he[j].usedTimes++;const L=he[C.__cacheKey];L!==void 0&&(he[C.__cacheKey].usedTimes--,L.usedTimes===0&&O(T)),C.__cacheKey=j,C.__webglTexture=he[j].texture}return $}function we(C,T,$){let ue=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=i.TEXTURE_3D);const he=D(C,T),j=T.source;t.bindTexture(ue,C.__webglTexture,i.TEXTURE0+$);const L=n.get(j);if(j.version!==L.__version||he===!0){t.activeTexture(i.TEXTURE0+$),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const X=x(T)&&S(T.image)===!1;let G=M(T.image,X,!1,u);G=Ut(T,G);const me=S(G)||o,Me=s.convert(T.format,T.colorSpace);let Re=s.convert(T.type),Te=w(T.internalFormat,Me,Re,T.colorSpace);_e(ue,T,me);let Pe;const ze=T.mipmaps,je=o&&T.isVideoTexture!==!0,Ct=L.__version===void 0||he===!0,F=v(T,G,me);if(T.isDepthTexture)Te=i.DEPTH_COMPONENT,o?T.type===xi?Te=i.DEPTH_COMPONENT32F:T.type===Ii?Te=i.DEPTH_COMPONENT24:T.type===yr?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:T.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ui&&Te===i.DEPTH_COMPONENT&&T.type!==dh&&T.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ii,Re=s.convert(T.type)),T.format===wr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,T.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=yr,Re=s.convert(T.type))),Ct&&(je?t.texStorage2D(i.TEXTURE_2D,1,Te,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,Te,G.width,G.height,0,Me,Re,null));else if(T.isDataTexture)if(ze.length>0&&me){je&&Ct&&t.texStorage2D(i.TEXTURE_2D,F,Te,ze[0].width,ze[0].height);for(let ie=0,de=ze.length;ie<de;ie++)Pe=ze[ie],je?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Re,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Me,Re,Pe.data);T.generateMipmaps=!1}else je?(Ct&&t.texStorage2D(i.TEXTURE_2D,F,Te,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,Me,Re,G.data)):t.texImage2D(i.TEXTURE_2D,0,Te,G.width,G.height,0,Me,Re,G.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,F,Te,ze[0].width,ze[0].height,G.depth);for(let ie=0,de=ze.length;ie<de;ie++)Pe=ze[ie],T.format!==gn?Me!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,G.depth,Me,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Pe.width,Pe.height,G.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,G.depth,Me,Re,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Pe.width,Pe.height,G.depth,0,Me,Re,Pe.data)}else{je&&Ct&&t.texStorage2D(i.TEXTURE_2D,F,Te,ze[0].width,ze[0].height);for(let ie=0,de=ze.length;ie<de;ie++)Pe=ze[ie],T.format!==gn?Me!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Re,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Pe.width,Pe.height,0,Me,Re,Pe.data)}else if(T.isDataArrayTexture)je?(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,F,Te,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Me,Re,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,G.width,G.height,G.depth,0,Me,Re,G.data);else if(T.isData3DTexture)je?(Ct&&t.texStorage3D(i.TEXTURE_3D,F,Te,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Me,Re,G.data)):t.texImage3D(i.TEXTURE_3D,0,Te,G.width,G.height,G.depth,0,Me,Re,G.data);else if(T.isFramebufferTexture){if(Ct)if(je)t.texStorage2D(i.TEXTURE_2D,F,Te,G.width,G.height);else{let ie=G.width,de=G.height;for(let Ae=0;Ae<F;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Te,ie,de,0,Me,Re,null),ie>>=1,de>>=1}}else if(ze.length>0&&me){je&&Ct&&t.texStorage2D(i.TEXTURE_2D,F,Te,ze[0].width,ze[0].height);for(let ie=0,de=ze.length;ie<de;ie++)Pe=ze[ie],je?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Me,Re,Pe):t.texImage2D(i.TEXTURE_2D,ie,Te,Me,Re,Pe);T.generateMipmaps=!1}else je?(Ct&&t.texStorage2D(i.TEXTURE_2D,F,Te,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Re,G)):t.texImage2D(i.TEXTURE_2D,0,Te,Me,Re,G);b(T,me)&&N(ue),L.__version=j.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function be(C,T,$){if(T.image.length!==6)return;const ue=D(C,T),he=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);const j=n.get(he);if(he.version!==j.__version||ue===!0){t.activeTexture(i.TEXTURE0+$),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const L=T.isCompressedTexture||T.image[0].isCompressedTexture,X=T.image[0]&&T.image[0].isDataTexture,G=[];for(let ie=0;ie<6;ie++)!L&&!X?G[ie]=M(T.image[ie],!1,!0,c):G[ie]=X?T.image[ie].image:T.image[ie],G[ie]=Ut(T,G[ie]);const me=G[0],Me=S(me)||o,Re=s.convert(T.format,T.colorSpace),Te=s.convert(T.type),Pe=w(T.internalFormat,Re,Te,T.colorSpace),ze=o&&T.isVideoTexture!==!0,je=j.__version===void 0||ue===!0;let Ct=v(T,me,Me);_e(i.TEXTURE_CUBE_MAP,T,Me);let F;if(L){ze&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Pe,me.width,me.height);for(let ie=0;ie<6;ie++){F=G[ie].mipmaps;for(let de=0;de<F.length;de++){const Ae=F[de];T.format!==gn?Re!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,Ae.width,Ae.height,Re,Te,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,Pe,Ae.width,Ae.height,0,Re,Te,Ae.data)}}}else{F=T.mipmaps,ze&&je&&(F.length>0&&Ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Pe,G[0].width,G[0].height));for(let ie=0;ie<6;ie++)if(X){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,G[ie].width,G[ie].height,Re,Te,G[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Pe,G[ie].width,G[ie].height,0,Re,Te,G[ie].data);for(let de=0;de<F.length;de++){const Ue=F[de].image[ie].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,Ue.width,Ue.height,Re,Te,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,Pe,Ue.width,Ue.height,0,Re,Te,Ue.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Te,G[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Pe,Re,Te,G[ie]);for(let de=0;de<F.length;de++){const Ae=F[de];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,Re,Te,Ae.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,Pe,Re,Te,Ae.image[ie])}}}b(T,Me)&&N(i.TEXTURE_CUBE_MAP),j.__version=he.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function K(C,T,$,ue,he){const j=s.convert($.format,$.colorSpace),L=s.convert($.type),X=w($.internalFormat,j,L,$.colorSpace);n.get(T).__hasExternalTextures||(he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,0,X,T.width,T.height,T.depth,0,j,L,null):t.texImage2D(he,0,X,T.width,T.height,0,j,L,null)),t.bindFramebuffer(i.FRAMEBUFFER,C),et(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,he,n.get($).__webglTexture,0,yt(T)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,he,n.get($).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(C,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let ue=i.DEPTH_COMPONENT16;if($||et(T)){const he=T.depthTexture;he&&he.isDepthTexture&&(he.type===xi?ue=i.DEPTH_COMPONENT32F:he.type===Ii&&(ue=i.DEPTH_COMPONENT24));const j=yt(T);et(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,ue,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ue,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const ue=yt(T);$&&et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):et(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ue=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let he=0;he<ue.length;he++){const j=ue[he],L=s.convert(j.format,j.colorSpace),X=s.convert(j.type),G=w(j.internalFormat,L,X,j.colorSpace),me=yt(T);$&&et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,G,T.width,T.height):et(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,G,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,G,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const ue=n.get(T.depthTexture).__webglTexture,he=yt(T);if(T.depthTexture.format===Ui)et(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===wr)et(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const T=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Fe(T.__webglFramebuffer,C)}else if($){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]=i.createRenderbuffer(),ve(T.__webglDepthbuffer[ue],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),ve(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(C,T,$){const ue=n.get(C);T!==void 0&&K(ue.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),$!==void 0&&Ce(C)}function ut(C){const T=C.texture,$=n.get(C),ue=n.get(T);C.addEventListener("dispose",z),C.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=T.version,a.memory.textures++);const he=C.isWebGLCubeRenderTarget===!0,j=C.isWebGLMultipleRenderTargets===!0,L=S(C)||o;if(he){$.__webglFramebuffer=[];for(let X=0;X<6;X++)$.__webglFramebuffer[X]=i.createFramebuffer()}else{if($.__webglFramebuffer=i.createFramebuffer(),j)if(r.drawBuffers){const X=C.texture;for(let G=0,me=X.length;G<me;G++){const Me=n.get(X[G]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&et(C)===!1){const X=j?T:[T];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let G=0;G<X.length;G++){const me=X[G];$.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[G]);const Me=s.convert(me.format,me.colorSpace),Re=s.convert(me.type),Te=w(me.internalFormat,Me,Re,me.colorSpace,C.isXRRenderTarget===!0),Pe=yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,$.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ve($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),_e(i.TEXTURE_CUBE_MAP,T,L);for(let X=0;X<6;X++)K($.__webglFramebuffer[X],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X);b(T,L)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){const X=C.texture;for(let G=0,me=X.length;G<me;G++){const Me=X[G],Re=n.get(Me);t.bindTexture(i.TEXTURE_2D,Re.__webglTexture),_e(i.TEXTURE_2D,Me,L),K($.__webglFramebuffer,C,Me,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D),b(Me,L)&&N(i.TEXTURE_2D)}t.unbindTexture()}else{let X=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?X=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,ue.__webglTexture),_e(X,T,L),K($.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,X),b(T,L)&&N(X),t.unbindTexture()}C.depthBuffer&&Ce(C)}function ft(C){const T=S(C)||o,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ue=0,he=$.length;ue<he;ue++){const j=$[ue];if(b(j,T)){const L=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,X=n.get(j).__webglTexture;t.bindTexture(L,X),N(L),t.unbindTexture()}}}function xt(C){if(o&&C.samples>0&&et(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,ue=C.height;let he=i.COLOR_BUFFER_BIT;const j=[],L=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(C),G=C.isWebGLMultipleRenderTargets===!0;if(G)for(let me=0;me<T.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let me=0;me<T.length;me++){j.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&j.push(L);const Me=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[me]),Me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[L]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])),G){const Re=n.get(T[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,$,ue,0,0,$,ue,he,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let me=0;me<T.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const Me=n.get(T[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}}function yt(C){return Math.min(f,C.samples)}function et(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(C){const T=a.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function Ut(C,T){const $=C.colorSpace,ue=C.format,he=C.type;return C.isCompressedTexture===!0||C.format===Go||$!==Xn&&$!==Fi&&($===He?o===!1?e.has("EXT_sRGB")===!0&&ue===gn?(C.format=Go,C.minFilter=nn,C.generateMipmaps=!1):T=Mh.sRGBToLinear(T):(ue!==gn||he!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=le,this.setTexture2DArray=ye,this.setTexture3D=ge,this.setTextureCube=J,this.rebindTextures=Be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=et}function mx(i,e,t){const n=t.isWebGL2;function r(s,a=Fi){let o;if(s===zi)return i.UNSIGNED_BYTE;if(s===Wp)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Xp)return i.UNSIGNED_SHORT_5_5_5_1;if(s===zp)return i.BYTE;if(s===Gp)return i.SHORT;if(s===dh)return i.UNSIGNED_SHORT;if(s===Vp)return i.INT;if(s===Ii)return i.UNSIGNED_INT;if(s===xi)return i.FLOAT;if(s===hs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qp)return i.ALPHA;if(s===gn)return i.RGBA;if(s===jp)return i.LUMINANCE;if(s===Yp)return i.LUMINANCE_ALPHA;if(s===Ui)return i.DEPTH_COMPONENT;if(s===wr)return i.DEPTH_STENCIL;if(s===Go)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Kp)return i.RED;if(s===Zp)return i.RED_INTEGER;if(s===Jp)return i.RG;if(s===Qp)return i.RG_INTEGER;if(s===$p)return i.RGBA_INTEGER;if(s===Ka||s===Za||s===Ja||s===Qa)if(a===He)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ic||s===rc||s===sc||s===ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ic)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===em)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oc||s===lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===oc)return a===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===lc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===yc||s===Mc||s===Ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===cc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_c)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ec)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$a)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===$a)return a===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===tm||s===Sc||s===bc||s===Tc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===$a)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class gx extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vx extends Xt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=Ii),n===void 0&&u===wr&&(n=yr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class xx extends Yi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],M=[],S=new Set,x=new Map,b=new en;b.layers.enable(1),b.viewport=new mt;const N=new en;N.layers.enable(2),N.viewport=new mt;const w=[b,N],v=new gx;v.layers.enable(1),v.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=y[J];return oe===void 0&&(oe=new So,y[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=y[J];return oe===void 0&&(oe=new So,y[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=y[J];return oe===void 0&&(oe=new So,y[J]=oe),oe.getHandSpace()};function z(J){const oe=M.indexOf(J.inputSource);if(oe===-1)return;const pe=y[oe];pe!==void 0&&(pe.update(J.inputSource,J.frame,c||a),pe.dispatchEvent({type:J.type,data:J.inputSource}))}function R(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",O);for(let J=0;J<y.length;J++){const oe=M[J];oe!==null&&(M[J]=null,y[J].disconnect(oe))}E=null,I=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,ge.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",R),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),p=new Gi(d.framebufferWidth,d.framebufferHeight,{format:gn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,pe=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?wr:Ui,pe=_.stencil?yr:Ii);const D={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(D),r.updateRenderState({layers:[h]}),p=new Gi(h.textureWidth,h.textureHeight,{format:gn,type:zi,depthTexture:new vx(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(J){for(let oe=0;oe<J.removed.length;oe++){const pe=J.removed[oe],_e=M.indexOf(pe);_e>=0&&(M[_e]=null,y[_e].disconnect(pe))}for(let oe=0;oe<J.added.length;oe++){const pe=J.added[oe];let _e=M.indexOf(pe);if(_e===-1){for(let we=0;we<y.length;we++)if(we>=M.length){M.push(pe),_e=we;break}else if(M[we]===null){M[we]=pe,_e=we;break}if(_e===-1)break}const D=y[_e];D&&D.connect(pe)}}const B=new k,Q=new k;function Z(J,oe,pe){B.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const _e=B.distanceTo(Q),D=oe.projectionMatrix.elements,we=pe.projectionMatrix.elements,be=D[14]/(D[10]-1),K=D[14]/(D[10]+1),ve=(D[9]+1)/D[5],Fe=(D[9]-1)/D[5],Ce=(D[8]-1)/D[0],Be=(we[8]+1)/we[0],ut=be*Ce,ft=be*Be,xt=_e/(-Ce+Be),yt=xt*-Ce;oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(yt),J.translateZ(xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const et=be+xt,st=K+xt,Ut=ut-yt,C=ft+(_e-yt),T=ve*K/st*et,$=Fe*K/st*et;J.projectionMatrix.makePerspective(Ut,C,T,$,et,st),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function P(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;v.near=N.near=b.near=J.near,v.far=N.far=b.far=J.far,(E!==v.near||I!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,I=v.far);const oe=J.parent,pe=v.cameras;P(v,oe);for(let _e=0;_e<pe.length;_e++)P(pe[_e],oe);pe.length===2?Z(v,b,N):v.projectionMatrix.copy(b.projectionMatrix),q(J,v,oe)};function q(J,oe,pe){pe===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const _e=J.children;for(let D=0,we=_e.length;D<we;D++)_e[D].updateMatrixWorld(!0);J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.getPlanes=function(){return S};let le=null;function ye(J,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let D=0;D<pe.length;D++){const we=pe[D];let be=null;if(d!==null)be=d.getViewport(we);else{const ve=f.getViewSubImage(h,we);be=ve.viewport,D===0&&(e.setRenderTargetTextures(p,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}let K=w[D];K===void 0&&(K=new en,K.layers.enable(D),K.viewport=new mt,w[D]=K),K.matrix.fromArray(we.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(we.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(be.x,be.y,be.width,be.height),D===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(K)}}for(let pe=0;pe<y.length;pe++){const _e=M[pe],D=y[pe];_e!==null&&D!==void 0&&D.update(_e,oe,c||a)}if(le&&le(J,oe),oe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let pe=null;for(const _e of S)oe.detectedPlanes.has(_e)||(pe===null&&(pe=[]),pe.push(_e));if(pe!==null)for(const _e of pe)S.delete(_e),x.delete(_e),n.dispatchEvent({type:"planeremoved",data:_e});for(const _e of oe.detectedPlanes)if(!S.has(_e))S.add(_e),x.set(_e,oe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:_e});else{const D=x.get(_e);_e.lastChangedTime>D&&(x.set(_e,_e.lastChangedTime),n.dispatchEvent({type:"planechanged",data:_e}))}}g=null}const ge=new Ih;ge.setAnimationLoop(ye),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}}function yx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Mx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function c(y,M){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",m));const x=M.program;n.updateUBOMapping(y,x);const b=e.render.frame;s[y.id]!==b&&(h(y),s[y.id]=b)}function u(y){const M=f();y.__bindingPointIndex=M;const S=i.createBuffer(),x=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,x,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],S=y.uniforms,x=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,N=S.length;b<N;b++){const w=S[b];if(d(w,b,x)===!0){const v=w.__offset,E=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let z=0;z<E.length;z++){const R=E[z],O=_(R);typeof R=="number"?(w.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,v+I,w.__data)):R.isMatrix3?(w.__data[0]=R.elements[0],w.__data[1]=R.elements[1],w.__data[2]=R.elements[2],w.__data[3]=R.elements[0],w.__data[4]=R.elements[3],w.__data[5]=R.elements[4],w.__data[6]=R.elements[5],w.__data[7]=R.elements[0],w.__data[8]=R.elements[6],w.__data[9]=R.elements[7],w.__data[10]=R.elements[8],w.__data[11]=R.elements[0]):(R.toArray(w.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,v,w.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,S){const x=y.value;if(S[M]===void 0){if(typeof x=="number")S[M]=x;else{const b=Array.isArray(x)?x:[x],N=[];for(let w=0;w<b.length;w++)N.push(b[w].clone());S[M]=N}return!0}else if(typeof x=="number"){if(S[M]!==x)return S[M]=x,!0}else{const b=Array.isArray(S[M])?S[M]:[S[M]],N=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const v=b[w];if(v.equals(N[w])===!1)return v.copy(N[w]),!0}}return!1}function g(y){const M=y.uniforms;let S=0;const x=16;let b=0;for(let N=0,w=M.length;N<w;N++){const v=M[N],E={boundary:0,storage:0},I=Array.isArray(v.value)?v.value:[v.value];for(let z=0,R=I.length;z<R;z++){const O=I[z],B=_(O);E.boundary+=B.boundary,E.storage+=B.storage}if(v.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=S,N>0){b=S%x;const z=x-b;b!==0&&z-E.boundary<0&&(S+=x-b,v.__offset=S)}S+=E.storage}return b=S%x,b>0&&(S+=x-b),y.__size=S,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}function Ex(){const i=ps("canvas");return i.style.display="block",i}class Oh{constructor(e={}){const{canvas:t=Ex(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;let d=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=si,this.toneMappingExposure=1;const p=this;let y=!1,M=0,S=0,x=null,b=-1,N=null;const w=new mt,v=new mt;let E=null,I=t.width,z=t.height,R=1,O=null,B=null;const Q=new mt(0,0,I,z),Z=new mt(0,0,I,z);let P=!1;const q=new Ml;let le=!1,ye=!1,ge=null;const J=new Je,oe=new k,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return x===null?R:1}let D=n;function we(A,W){for(let re=0;re<A.length;re++){const V=A[re],se=t.getContext(V,W);if(se!==null)return se}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",je,!1),D===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),D=we(W,A),D===null)throw we(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,K,ve,Fe,Ce,Be,ut,ft,xt,yt,et,st,Ut,C,T,$,ue,he,j,L,X,G,me,Me;function Re(){be=new P0(D),K=new w0(D,be,e),be.init(K),G=new mx(D,be,K),ve=new dx(D,be,K),Fe=new O0(D),Ce=new $v,Be=new px(D,be,ve,Ce,K,G,Fe),ut=new C0(p),ft=new D0(p),xt=new Ym(D,K),me=new T0(D,be,xt,K),yt=new N0(D,xt,Fe,me),et=new H0(D,yt,xt,Fe),j=new B0(D,K,Be),$=new R0(Ce),st=new Qv(p,ut,ft,be,K,me,$),Ut=new yx(p,Ce),C=new tx,T=new ox(be,K),he=new b0(p,ut,ft,ve,et,h,l),ue=new hx(p,et,K),Me=new Mx(D,Fe,K,ve),L=new A0(D,be,Fe,K),X=new U0(D,be,Fe,K),Fe.programs=st.programs,p.capabilities=K,p.extensions=be,p.properties=Ce,p.renderLists=C,p.shadowMap=ue,p.state=ve,p.info=Fe}Re();const Te=new xx(p,D);this.xr=Te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(A){A!==void 0&&(R=A,this.setSize(I,z,!1))},this.getSize=function(A){return A.set(I,z)},this.setSize=function(A,W,re=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,z=W,t.width=Math.floor(A*R),t.height=Math.floor(W*R),re===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(I*R,z*R).floor()},this.setDrawingBufferSize=function(A,W,re){I=A,z=W,R=re,t.width=Math.floor(A*re),t.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,W,re,V){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,W,re,V),ve.viewport(w.copy(Q).multiplyScalar(R).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,W,re,V){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,W,re,V),ve.scissor(v.copy(Z).multiplyScalar(R).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(A){ve.setScissorTest(P=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(A=!0,W=!0,re=!0){let V=0;A&&(V|=D.COLOR_BUFFER_BIT),W&&(V|=D.DEPTH_BUFFER_BIT),re&&(V|=D.STENCIL_BUFFER_BIT),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",je,!1),C.dispose(),T.dispose(),Ce.dispose(),ut.dispose(),ft.dispose(),et.dispose(),me.dispose(),Me.dispose(),st.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ue),Te.removeEventListener("sessionend",ht),ge&&(ge.dispose(),ge=null),dt.stop()};function Pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Fe.autoReset,W=ue.enabled,re=ue.autoUpdate,V=ue.needsUpdate,se=ue.type;Re(),Fe.autoReset=A,ue.enabled=W,ue.autoUpdate=re,ue.needsUpdate=V,ue.type=se}function je(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ct(A){const W=A.target;W.removeEventListener("dispose",Ct),F(W)}function F(A){ie(A),Ce.remove(A)}function ie(A){const W=Ce.get(A).programs;W!==void 0&&(W.forEach(function(re){st.releaseProgram(re)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,V,se,Oe){W===null&&(W=pe);const ke=se.isMesh&&se.matrixWorld.determinant()<0,Ge=Ad(A,W,re,V,se);ve.setMaterial(V,ke);let We=re.index,Ye=1;V.wireframe===!0&&(We=yt.getWireframeAttribute(re),Ye=2);const Ke=re.drawRange,Qe=re.attributes.position;let ot=Ke.start*Ye,Zt=(Ke.start+Ke.count)*Ye;Oe!==null&&(ot=Math.max(ot,Oe.start*Ye),Zt=Math.min(Zt,(Oe.start+Oe.count)*Ye)),We!==null?(ot=Math.max(ot,0),Zt=Math.min(Zt,We.count)):Qe!=null&&(ot=Math.max(ot,0),Zt=Math.min(Zt,Qe.count));const En=Zt-ot;if(En<0||En===1/0)return;me.setup(se,V,Ge,re,We);let Mi,Dt=L;if(We!==null&&(Mi=xt.get(We),Dt=X,Dt.setIndex(Mi)),se.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*_e()),Dt.setMode(D.LINES)):Dt.setMode(D.TRIANGLES);else if(se.isLine){let tt=V.linewidth;tt===void 0&&(tt=1),ve.setLineWidth(tt*_e()),se.isLineSegments?Dt.setMode(D.LINES):se.isLineLoop?Dt.setMode(D.LINE_LOOP):Dt.setMode(D.LINE_STRIP)}else se.isPoints?Dt.setMode(D.POINTS):se.isSprite&&Dt.setMode(D.TRIANGLES);if(se.isInstancedMesh)Dt.renderInstances(ot,En,se.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xa=Math.min(re.instanceCount,tt);Dt.renderInstances(ot,En,Xa)}else Dt.render(ot,En)},this.compile=function(A,W){function re(V,se,Oe){V.transparent===!0&&V.side===Gn&&V.forceSinglePass===!1?(V.side=sn,V.needsUpdate=!0,Cs(V,se,Oe),V.side=oi,V.needsUpdate=!0,Cs(V,se,Oe),V.side=Gn):Cs(V,se,Oe)}g=T.get(A),g.init(),m.push(g),A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(p.useLegacyLights),A.traverse(function(V){const se=V.material;if(se)if(Array.isArray(se))for(let Oe=0;Oe<se.length;Oe++){const ke=se[Oe];re(ke,A,V)}else re(se,A,V)}),m.pop(),g=null};let de=null;function Ae(A){de&&de(A)}function Ue(){dt.stop()}function ht(){dt.start()}const dt=new Ih;dt.setAnimationLoop(Ae),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(A){de=A,Te.setAnimationLoop(A),A===null?dt.stop():dt.start()},Te.addEventListener("sessionstart",Ue),Te.addEventListener("sessionend",ht),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,W,x),g=T.get(A,m.length),g.init(),m.push(g),J.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(J),ye=this.localClippingEnabled,le=$.init(this.clippingPlanes,ye),d=C.get(A,_.length),d.init(),_.push(d),qt(A,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(O,B),le===!0&&$.beginShadows();const re=g.state.shadowsArray;if(ue.render(re,A,W),le===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(d,A),g.setupLights(p.useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let se=0,Oe=V.length;se<Oe;se++){const ke=V[se];ui(d,A,ke,ke.viewport)}}else ui(d,A,W);x!==null&&(Be.updateMultisampleRenderTarget(x),Be.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(p,A,W),me.resetDefaultState(),b=-1,N=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?d=_[_.length-1]:d=null};function qt(A,W,re,V){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const ke=et.update(A),Ge=A.material;Ge.visible&&d.push(A,ke,Ge,re,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Fe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Fe.render.frame);const ke=et.update(A),Ge=A.material;if(V&&(ke.boundingSphere===null&&ke.computeBoundingSphere(),oe.copy(ke.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Ge)){const We=ke.groups;for(let Ye=0,Ke=We.length;Ye<Ke;Ye++){const Qe=We[Ye],ot=Ge[Qe.materialIndex];ot&&ot.visible&&d.push(A,ke,ot,re,oe.z,Qe)}}else Ge.visible&&d.push(A,ke,Ge,re,oe.z,null)}}const Oe=A.children;for(let ke=0,Ge=Oe.length;ke<Ge;ke++)qt(Oe[ke],W,re,V)}function ui(A,W,re,V){const se=A.opaque,Oe=A.transmissive,ke=A.transparent;g.setupLightsView(re),le===!0&&$.setGlobalState(p.clippingPlanes,re),Oe.length>0&&Lt(se,Oe,W,re),V&&ve.viewport(w.copy(V)),se.length>0&&hn(se,W,re),Oe.length>0&&hn(Oe,W,re),ke.length>0&&hn(ke,W,re),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Lt(A,W,re,V){if(ge===null){const Ge=K.isWebGL2;ge=new Gi(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?hs:zi,minFilter:Hi,samples:Ge&&o===!0?4:0})}const se=p.getRenderTarget();p.setRenderTarget(ge),p.clear();const Oe=p.toneMapping;p.toneMapping=si,hn(A,re,V),Be.updateMultisampleRenderTarget(ge),Be.updateRenderTargetMipmap(ge);let ke=!1;for(let Ge=0,We=W.length;Ge<We;Ge++){const Ye=W[Ge],Ke=Ye.object,Qe=Ye.geometry,ot=Ye.material,Zt=Ye.group;if(ot.side===Gn&&Ke.layers.test(V.layers)){const En=ot.side;ot.side=sn,ot.needsUpdate=!0,kn(Ke,re,V,Qe,ot,Zt),ot.side=En,ot.needsUpdate=!0,ke=!0}}ke===!0&&(Be.updateMultisampleRenderTarget(ge),Be.updateRenderTargetMipmap(ge)),p.setRenderTarget(se),p.toneMapping=Oe}function hn(A,W,re){const V=W.isScene===!0?W.overrideMaterial:null;for(let se=0,Oe=A.length;se<Oe;se++){const ke=A[se],Ge=ke.object,We=ke.geometry,Ye=V===null?ke.material:V,Ke=ke.group;Ge.layers.test(re.layers)&&kn(Ge,W,re,We,Ye,Ke)}}function kn(A,W,re,V,se,Oe){A.onBeforeRender(p,W,re,V,se,Oe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(p,W,re,V,A,Oe),se.transparent===!0&&se.side===Gn&&se.forceSinglePass===!1?(se.side=sn,se.needsUpdate=!0,p.renderBufferDirect(re,W,V,se,A,Oe),se.side=oi,se.needsUpdate=!0,p.renderBufferDirect(re,W,V,se,A,Oe),se.side=Gn):p.renderBufferDirect(re,W,V,se,A,Oe),A.onAfterRender(p,W,re,V,se,Oe)}function Cs(A,W,re){W.isScene!==!0&&(W=pe);const V=Ce.get(A),se=g.state.lights,Oe=g.state.shadowsArray,ke=se.state.version,Ge=st.getParameters(A,se.state,Oe,W,re),We=st.getProgramCacheKey(Ge);let Ye=V.programs;V.environment=A.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(A.isMeshStandardMaterial?ft:ut).get(A.envMap||V.environment),Ye===void 0&&(A.addEventListener("dispose",Ct),Ye=new Map,V.programs=Ye);let Ke=Ye.get(We);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===ke)return zl(A,Ge),Ke}else Ge.uniforms=st.getUniforms(A),A.onBuild(re,Ge,p),A.onBeforeCompile(Ge,p),Ke=st.acquireProgram(Ge,We),Ye.set(We,Ke),V.uniforms=Ge.uniforms;const Qe=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=$.uniform),zl(A,Ge),V.needsLights=Rd(A),V.lightsStateVersion=ke,V.needsLights&&(Qe.ambientLightColor.value=se.state.ambient,Qe.lightProbe.value=se.state.probe,Qe.directionalLights.value=se.state.directional,Qe.directionalLightShadows.value=se.state.directionalShadow,Qe.spotLights.value=se.state.spot,Qe.spotLightShadows.value=se.state.spotShadow,Qe.rectAreaLights.value=se.state.rectArea,Qe.ltc_1.value=se.state.rectAreaLTC1,Qe.ltc_2.value=se.state.rectAreaLTC2,Qe.pointLights.value=se.state.point,Qe.pointLightShadows.value=se.state.pointShadow,Qe.hemisphereLights.value=se.state.hemi,Qe.directionalShadowMap.value=se.state.directionalShadowMap,Qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Qe.spotShadowMap.value=se.state.spotShadowMap,Qe.spotLightMatrix.value=se.state.spotLightMatrix,Qe.spotLightMap.value=se.state.spotLightMap,Qe.pointShadowMap.value=se.state.pointShadowMap,Qe.pointShadowMatrix.value=se.state.pointShadowMatrix);const ot=Ke.getUniforms(),Zt=fa.seqWithValue(ot.seq,Qe);return V.currentProgram=Ke,V.uniformsList=Zt,Ke}function zl(A,W){const re=Ce.get(A);re.outputColorSpace=W.outputColorSpace,re.instancing=W.instancing,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Ad(A,W,re,V,se){W.isScene!==!0&&(W=pe),Be.resetTextureUnits();const Oe=W.fog,ke=V.isMeshStandardMaterial?W.environment:null,Ge=x===null?p.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Xn,We=(V.isMeshStandardMaterial?ft:ut).get(V.envMap||ke),Ye=V.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!V.normalMap&&!!re.attributes.tangent,Qe=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,Zt=!!re.morphAttributes.color,En=V.toneMapped?p.toneMapping:si,Mi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Dt=Mi!==void 0?Mi.length:0,tt=Ce.get(V),Xa=g.state.lights;if(le===!0&&(ye===!0||A!==N)){const on=A===N&&V.id===b;$.setState(V,A,on)}let Ht=!1;V.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xa.state.version||tt.outputColorSpace!==Ge||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||tt.envMap!==We||V.fog===!0&&tt.fog!==Oe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==$.numPlanes||tt.numIntersection!==$.numIntersection)||tt.vertexAlphas!==Ye||tt.vertexTangents!==Ke||tt.morphTargets!==Qe||tt.morphNormals!==ot||tt.morphColors!==Zt||tt.toneMapping!==En||K.isWebGL2===!0&&tt.morphTargetsCount!==Dt)&&(Ht=!0):(Ht=!0,tt.__version=V.version);let Ei=tt.currentProgram;Ht===!0&&(Ei=Cs(V,W,se));let Gl=!1,Hr=!1,qa=!1;const Jt=Ei.getUniforms(),Si=tt.uniforms;if(ve.useProgram(Ei.program)&&(Gl=!0,Hr=!0,qa=!0),V.id!==b&&(b=V.id,Hr=!0),Gl||N!==A){if(Jt.setValue(D,"projectionMatrix",A.projectionMatrix),K.logarithmicDepthBuffer&&Jt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),N!==A&&(N=A,Hr=!0,qa=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const on=Jt.map.cameraPosition;on!==void 0&&on.setValue(D,oe.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Jt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||se.isSkinnedMesh)&&Jt.setValue(D,"viewMatrix",A.matrixWorldInverse)}if(se.isSkinnedMesh){Jt.setOptional(D,se,"bindMatrix"),Jt.setOptional(D,se,"bindMatrixInverse");const on=se.skeleton;on&&(K.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Jt.setValue(D,"boneTexture",on.boneTexture,Be),Jt.setValue(D,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ja=re.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0&&K.isWebGL2===!0)&&j.update(se,re,Ei),(Hr||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Jt.setValue(D,"receiveShadow",se.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Si.envMap.value=We,Si.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Hr&&(Jt.setValue(D,"toneMappingExposure",p.toneMappingExposure),tt.needsLights&&wd(Si,qa),Oe&&V.fog===!0&&Ut.refreshFogUniforms(Si,Oe),Ut.refreshMaterialUniforms(Si,V,R,z,ge),fa.upload(D,tt.uniformsList,Si,Be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fa.upload(D,tt.uniformsList,Si,Be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Jt.setValue(D,"center",se.center),Jt.setValue(D,"modelViewMatrix",se.modelViewMatrix),Jt.setValue(D,"normalMatrix",se.normalMatrix),Jt.setValue(D,"modelMatrix",se.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let Ya=0,Cd=on.length;Ya<Cd;Ya++)if(K.isWebGL2){const Vl=on[Ya];Me.update(Vl,Ei),Me.bind(Vl,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function wd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Rd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,W,re){Ce.get(A.texture).__webglTexture=W,Ce.get(A.depthTexture).__webglTexture=re;const V=Ce.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=re===void 0,V.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const re=Ce.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){x=A,M=W,S=re;let V=!0,se=null,Oe=!1,ke=!1;if(A){const We=Ce.get(A);We.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(D.FRAMEBUFFER,null),V=!1):We.__webglFramebuffer===void 0?Be.setupRenderTarget(A):We.__hasExternalTextures&&Be.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ke=!0);const Ke=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(se=Ke[W],Oe=!0):K.isWebGL2&&A.samples>0&&Be.useMultisampledRTT(A)===!1?se=Ce.get(A).__webglMultisampledFramebuffer:se=Ke,w.copy(A.viewport),v.copy(A.scissor),E=A.scissorTest}else w.copy(Q).multiplyScalar(R).floor(),v.copy(Z).multiplyScalar(R).floor(),E=P;if(ve.bindFramebuffer(D.FRAMEBUFFER,se)&&K.drawBuffers&&V&&ve.drawBuffers(A,se),ve.viewport(w),ve.scissor(v),ve.setScissorTest(E),Oe){const We=Ce.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,re)}else if(ke){const We=Ce.get(A.texture),Ye=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,re||0,Ye)}b=-1},this.readRenderTargetPixels=function(A,W,re,V,se,Oe,ke){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){ve.bindFramebuffer(D.FRAMEBUFFER,Ge);try{const We=A.texture,Ye=We.format,Ke=We.type;if(Ye!==gn&&G.convert(Ye)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ke===hs&&(be.has("EXT_color_buffer_half_float")||K.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ke!==zi&&G.convert(Ke)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===xi&&(K.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-V&&re>=0&&re<=A.height-se&&D.readPixels(W,re,V,se,G.convert(Ye),G.convert(Ke),Oe)}finally{const We=x!==null?Ce.get(x).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(A,W,re=0){const V=Math.pow(2,-re),se=Math.floor(W.image.width*V),Oe=Math.floor(W.image.height*V);Be.setTexture2D(W,0),D.copyTexSubImage2D(D.TEXTURE_2D,re,0,0,A.x,A.y,se,Oe),ve.unbindTexture()},this.copyTextureToTexture=function(A,W,re,V=0){const se=W.image.width,Oe=W.image.height,ke=G.convert(re.format),Ge=G.convert(re.type);Be.setTexture2D(re,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,re.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,re.unpackAlignment),W.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,A.x,A.y,se,Oe,ke,Ge,W.image.data):W.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,ke,W.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,V,A.x,A.y,ke,Ge,W.image),V===0&&re.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,W,re,V,se=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=A.max.x-A.min.x+1,ke=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,We=G.convert(V.format),Ye=G.convert(V.type);let Ke;if(V.isData3DTexture)Be.setTexture3D(V,0),Ke=D.TEXTURE_3D;else if(V.isDataArrayTexture)Be.setTexture2DArray(V,0),Ke=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=D.getParameter(D.UNPACK_SKIP_PIXELS),En=D.getParameter(D.UNPACK_SKIP_ROWS),Mi=D.getParameter(D.UNPACK_SKIP_IMAGES),Dt=re.isCompressedTexture?re.mipmaps[0]:re.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,A.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,A.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A.min.z),re.isDataTexture||re.isData3DTexture?D.texSubImage3D(Ke,se,W.x,W.y,W.z,Oe,ke,Ge,We,Ye,Dt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ke,se,W.x,W.y,W.z,Oe,ke,Ge,We,Dt.data)):D.texSubImage3D(Ke,se,W.x,W.y,W.z,Oe,ke,Ge,We,Ye,Dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,En),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mi),se===0&&V.generateMipmaps&&D.generateMipmap(Ke),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){M=0,S=0,x=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Oi:mh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?He:Xn}}class Sx extends Oh{}Sx.prototype.isWebGL1Renderer=!0;class bx extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Tx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new k;class Tl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pu=new k,mu=new mt,gu=new mt,Ax=new k,_u=new Je,pr=new k;class wx extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)pr.fromBufferAttribute(t,n),this.applyBoneTransform(n,pr),this.boundingBox.expandByPoint(pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)pr.fromBufferAttribute(t,n),this.applyBoneTransform(n,pr),this.boundingSphere.expandByPoint(pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;mu.fromBufferAttribute(r.attributes.skinIndex,e),gu.fromBufferAttribute(r.attributes.skinWeight,e),pu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=gu.getComponent(s);if(a!==0){const o=mu.getComponent(s);_u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ax.copy(pu).applyMatrix4(_u),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Fh extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rx extends Xt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Gt,u=Gt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new Je,Cx=new Je;class Al{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Cx;vu.multiplyMatrices(o,t[s]),vu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=vh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rx(t,e,e,gn,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fh),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class xu extends tn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new Je,yu=new Je,Js=[],Mu=new On,Lx=new Je,Xr=new _n,qr=new ci;class Ix extends _n{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Lx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Mu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),qr.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),yu.multiplyMatrices(n,mr),Xr.matrixWorld=yu,Xr.raycast(e,Js);for(let a=0,o=Js.length;a<o;a++){const l=Js[a];l.instanceId=s,l.object=this,t.push(l)}Js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class wl extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new k,Su=new k,bu=new Je,bo=new yl,Qs=new ci;class ms extends Et{constructor(e=new yn,t=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Eu.fromBufferAttribute(t,r-1),Su.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Eu.distanceTo(Su);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;bu.copy(r).invert(),bo.copy(e.ray).applyMatrix4(bu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,f=new k,h=new k,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let M=p,S=y-1;M<S;M+=d){const x=g.getX(M),b=g.getX(M+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,b),bo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=p,S=y-1;M<S;M+=d){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),bo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Tu=new k,Au=new k;class Dx extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Tu.fromBufferAttribute(t,r),Au.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tu.distanceTo(Au);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Px extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kh extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new Je,Xo=new yl,$s=new ci,ea=new k;class Nx extends Et{constructor(e=new yn,t=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;wu.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(wu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ea.fromBufferAttribute(f,m),Ru(ea,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)ea.fromBufferAttribute(f,g),Ru(ea,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ru(i,e,t,n,r,s,a){const o=Xo.distanceSqToPoint(i);if(o<t){const l=new k;Xo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Rl extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ki extends Rl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mi(i,e,t){return Bh(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ta(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ux(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Cu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Hh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Ts{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ox extends Ts{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:s=e,o=2*t-n;break;case Rc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:a=e,l=2*n-t;break;case Rc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let x=0;x!==o;++x)s[x]=p*a[u+x]+y*a[c+x]+M*a[l+x]+S*a[f+x];return s}}class Fx extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class kx extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ox(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=mi(n,s,a),this.values=mi(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Bh(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=mi(this.times),t=mi(this.values),n=this.getValueSize(),r=this.getInterpolation()===eo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=mi(e,0,a),this.values=mi(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=mi(this.times,0),t=mi(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Rr;class kr extends jn{}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ds;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class zh extends jn{}zh.prototype.ValueTypeName="color";class gs extends jn{}gs.prototype.ValueTypeName="number";class Bx extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)qn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Wi extends jn{InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=Rr;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends jn{}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ds;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends jn{}_s.prototype.ValueTypeName="vector";class Hx{constructor(e,t=-1,n,r=nm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Gx(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(jn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ux(l);l=Cu(l,1,u),c=Cu(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];Hh(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const M=h[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}r.push(new gs(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[f].name+"]";n(_s,d+".position",h,"pos",r),n(Wi,d+".quaternion",h,"rot",r),n(_s,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return zh;case"quaternion":return Wi;case"bool":case"boolean":return kr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zx(i.type);if(i.times===void 0){const t=[],n=[];Hh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ir={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vx{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Wx=new Vx;class As{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ti={};class Xx extends Error{constructor(e,t){super(e),this.response=t}}class Gh extends As{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:r});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:M,value:S})=>{if(M)p.close();else{_+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,N=u.length;b<N;b++){const w=u[b];w.onProgress&&w.onProgress(x)}p.enqueue(S),y()}})}}});return new Response(m)}else throw new Xx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ir.add(e,c);const u=ti[e];delete ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qx extends As{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ps("img");function l(){u(),Ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class jx extends As{constructor(e){super(e)}load(e,t,n,r){const s=new Xt,a=new qx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class za extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const To=new Je,Lu=new k,Iu=new k;class Cl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yx extends Cl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kx extends za{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Yx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new Je,jr=new k,Ao=new k;class Zx extends Cl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Ao.copy(n.position),Ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ao),n.updateMatrixWorld(),r.makeTranslation(-jr.x,-jr.y,-jr.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}}class Jx extends za{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qx extends Cl{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $r extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $x extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ey extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ir.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Ll="\\[\\]\\.:\\/",ty=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",ny="[^"+Ll.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",Il),ry=/(WCOD+)?/.source.replace("WCOD",ny),sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),oy=new RegExp("^"+iy+ry+sy+ay+"$"),ly=["material","materials","bones","map"];class cy{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(e){const t=oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);ly.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=cy;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nu=new k,na=new k,Uu=new k;class ia extends Et{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new yn;r.setAttribute("position",new Pn([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new wl({fog:!1,toneMapped:!1});this.lightPlane=new ms(r,s),this.add(this.lightPlane),r=new yn,r.setAttribute("position",new Pn([0,0,0,0,0,1],3)),this.targetLine=new ms(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Nu.setFromMatrixPosition(this.light.matrixWorld),na.setFromMatrixPosition(this.light.target.matrixWorld),Uu.subVectors(na,Nu),this.lightPlane.lookAt(na),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(na),this.targetLine.scale.z=Uu.length()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);const Ou={type:"change"},wo={type:"start"},Fu={type:"end"};class uy extends Yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",st),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ou),n.update(),s=r.NONE},this.update=function(){const L=new k,X=new qn().setFromUnitVectors(e.up,new k(0,1,0)),G=X.clone().invert(),me=new k,Me=new qn,Re=2*Math.PI;return function(){const Pe=n.object.position;L.copy(Pe).sub(n.target),L.applyQuaternion(X),o.setFromVector3(L),n.autoRotate&&s===r.NONE&&v(N()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ze=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(je)&&(ze<-Math.PI?ze+=Re:ze>Math.PI&&(ze-=Re),je<-Math.PI?je+=Re:je>Math.PI&&(je-=Re),ze<=je?o.theta=Math.max(ze,Math.min(je,o.theta)):o.theta=o.theta>(ze+je)/2?Math.max(ze,o.theta):Math.min(je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(o),L.applyQuaternion(G),Pe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||me.distanceToSquared(n.object.position)>a||8*(1-Me.dot(n.object.quaternion))>a?(n.dispatchEvent(Ou),me.copy(n.object.position),Me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",ft),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Pu,l=new Pu;let c=1;const u=new k;let f=!1;const h=new Ve,d=new Ve,g=new Ve,_=new Ve,m=new Ve,p=new Ve,y=new Ve,M=new Ve,S=new Ve,x=[],b={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function v(L){l.theta-=L}function E(L){l.phi-=L}const I=function(){const L=new k;return function(G,me){L.setFromMatrixColumn(me,0),L.multiplyScalar(-G),u.add(L)}}(),z=function(){const L=new k;return function(G,me){n.screenSpacePanning===!0?L.setFromMatrixColumn(me,1):(L.setFromMatrixColumn(me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(G),u.add(L)}}(),R=function(){const L=new k;return function(G,me){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;L.copy(Re).sub(n.target);let Te=L.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),I(2*G*Te/Me.clientHeight,n.object.matrix),z(2*me*Te/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(G*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),z(me*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(L){h.set(L.clientX,L.clientY)}function Z(L){y.set(L.clientX,L.clientY)}function P(L){_.set(L.clientX,L.clientY)}function q(L){d.set(L.clientX,L.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const X=n.domElement;v(2*Math.PI*g.x/X.clientHeight),E(2*Math.PI*g.y/X.clientHeight),h.copy(d),n.update()}function le(L){M.set(L.clientX,L.clientY),S.subVectors(M,y),S.y>0?O(w()):S.y<0&&B(w()),y.copy(M),n.update()}function ye(L){m.set(L.clientX,L.clientY),p.subVectors(m,_).multiplyScalar(n.panSpeed),R(p.x,p.y),_.copy(m),n.update()}function ge(L){L.deltaY<0?B(w()):L.deltaY>0&&O(w()),n.update()}function J(L){let X=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),X=!0;break}X&&(L.preventDefault(),n.update())}function oe(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),X=.5*(x[0].pageY+x[1].pageY);h.set(L,X)}}function pe(){if(x.length===1)_.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),X=.5*(x[0].pageY+x[1].pageY);_.set(L,X)}}function _e(){const L=x[0].pageX-x[1].pageX,X=x[0].pageY-x[1].pageY,G=Math.sqrt(L*L+X*X);y.set(0,G)}function D(){n.enableZoom&&_e(),n.enablePan&&pe()}function we(){n.enableZoom&&_e(),n.enableRotate&&oe()}function be(L){if(x.length==1)d.set(L.pageX,L.pageY);else{const G=j(L),me=.5*(L.pageX+G.x),Me=.5*(L.pageY+G.y);d.set(me,Me)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const X=n.domElement;v(2*Math.PI*g.x/X.clientHeight),E(2*Math.PI*g.y/X.clientHeight),h.copy(d)}function K(L){if(x.length===1)m.set(L.pageX,L.pageY);else{const X=j(L),G=.5*(L.pageX+X.x),me=.5*(L.pageY+X.y);m.set(G,me)}p.subVectors(m,_).multiplyScalar(n.panSpeed),R(p.x,p.y),_.copy(m)}function ve(L){const X=j(L),G=L.pageX-X.x,me=L.pageY-X.y,Me=Math.sqrt(G*G+me*me);M.set(0,Me),S.set(0,Math.pow(M.y/y.y,n.zoomSpeed)),O(S.y),y.copy(M)}function Fe(L){n.enableZoom&&ve(L),n.enablePan&&K(L)}function Ce(L){n.enableZoom&&ve(L),n.enableRotate&&be(L)}function Be(L){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ut),n.domElement.addEventListener("pointerup",ft)),$(L),L.pointerType==="touch"?Ut(L):xt(L))}function ut(L){n.enabled!==!1&&(L.pointerType==="touch"?C(L):yt(L))}function ft(L){ue(L),x.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",ft)),n.dispatchEvent(Fu),s=r.NONE}function xt(L){let X;switch(L.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Zi.DOLLY:if(n.enableZoom===!1)return;Z(L),s=r.DOLLY;break;case Zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;P(L),s=r.PAN}else{if(n.enableRotate===!1)return;Q(L),s=r.ROTATE}break;case Zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Q(L),s=r.ROTATE}else{if(n.enablePan===!1)return;P(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(wo)}function yt(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(L);break;case r.DOLLY:if(n.enableZoom===!1)return;le(L);break;case r.PAN:if(n.enablePan===!1)return;ye(L);break}}function et(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(wo),ge(L),n.dispatchEvent(Fu))}function st(L){n.enabled===!1||n.enablePan===!1||J(L)}function Ut(L){switch(he(L),x.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;oe(),s=r.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;pe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(),s=r.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(wo)}function C(L){switch(he(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;K(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(L),n.update();break;default:s=r.NONE}}function T(L){n.enabled!==!1&&L.preventDefault()}function $(L){x.push(L)}function ue(L){delete b[L.pointerId];for(let X=0;X<x.length;X++)if(x[X].pointerId==L.pointerId){x.splice(X,1);return}}function he(L){let X=b[L.pointerId];X===void 0&&(X=new Ve,b[L.pointerId]=X),X.set(L.pageX,L.pageY)}function j(L){const X=L.pointerId===x[0].pointerId?x[1]:x[0];return b[X.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",et,{passive:!1}),this.update()}}async function fy(i){return new Promise((e,t)=>{const n=new FileReader;n.onerror=t,n.onload=()=>{const r=n.result;typeof r=="string"&&e(r.split(",")[1])},n.readAsDataURL(i)})}class hy{constructor(e){this.trymeUrl=e}async request(e,t={},n="GET",r=null){const s=new URL(e,this.trymeUrl);Object.entries(t).forEach(([l,c])=>{s.searchParams.set(l,c)});const a=Date.now().toString();console.info("requesting ",e,"requestId = ",a);const o=[["authorization",'T$Kptr8"R_!WdXtl1*52S]D!IX$1]C'],["request_id",a]];return fetch(new Request(s,{method:n,body:r,headers:o}))}async sendAudio(e,t){try{return await(await this.request("",{},"post",JSON.stringify({audio_base64:e,original_text:t,request_id:"for_test"}))).json()}catch(n){console.error("Request failed",n)}}}const dy=new hy(Jd);async function py(i){const e=Zd,t={method:"post",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(i)};return await fetch(new Request(`${e}/hubspot/send-try-me-form`,t)).then(r=>r.ok).catch(r=>console.error(`failed to send form to hubspot, error: ${r==null?void 0:r.message}`))}async function my(i){const e={"content-type":"application/json"};return fetch(new Request(`${Kd}/email/send-open`,{method:"post",body:JSON.stringify(i),headers:e}))}function gy(i,e){return i=Math.ceil(i),e=Math.floor(e),Math.floor(Math.random()*(e-i)+i)}function _y(){return[{goal:100,value:0},{goal:100,value:0},{goal:100,value:0}]}function Kt(i,e){var t;return(t=i.find(n=>n.name===e))==null?void 0:t.value}function vy(i){const e=Kt(i,"correctWords"),t=Kt(i,"readingTime");return t?e/(t/60):0}function xy(i){const e=Kt(i,"correctSightWords"),t=Kt(i,"totalSightWords");return(t>0?e/t:1)*100}function yy(i){const e=Kt(i,"numOfDots"),t=Kt(i,"numOfCommas"),n=Kt(i,"waitsAfterDots"),r=Kt(i,"waitsAfterCommas"),s=e+t,a=n+r;return(s>0?a/s:1)*100}function My(i){const e=Kt(i,"correctShortWords"),t=Kt(i,"totalShortWords");return(t>0?e/t:1)*100}function Ey(i){const e=Kt(i,"correctLongWords"),t=Kt(i,"totalLongWords");return(t>0?e/t:1)*100}const Ro={1:{min:13.5,max:106.5},2:{min:33.7,max:130},3:{min:55,max:153.7},4:{min:71.3,max:168.3},5:{min:83.3,max:185.7},6:{min:90.3,max:194.7},7:{min:90.3,max:194.7},8:{min:90.3,max:194.7},9:{min:90.3,max:194.7},10:{min:90.3,max:194.7},11:{min:90.3,max:194.7},12:{min:90.3,max:194.7}};function Sy(){const i=Date.now();return{api_ver:2,continue_to_quiz:!0,exit_reason:"tryMe",readable_date:new Date(i).toDateString(),reports_unique_key:"",session_id:0,timestamp:Math.floor(i/1e3),timestamp_ms:i,user_speech_timeout_overall:0,metrics:[{name:"readingTime",unit:"second",value:0},{name:"correctSentences",unit:"sentence",value:0},{name:"correctWords",unit:"word",value:0},{name:"textStatistics",unit:"unit",value:{num_sentences:0}},{name:"readWordsLength",unit:"word",value:[]},{name:"correctLongWords",unit:"word",value:0},{name:"hardWordsSyllables",unit:"word",value:[]},{name:"totalLongWords",unit:"word",value:0},{name:"omittedWords",unit:"word",value:[]},{name:"insertedWords",unit:"word",value:[]},{name:"readingRate",unit:"wpm",value:[0]},{name:"readingFluency",unit:"wpm",value:[0]},{name:"wcpmPerSession",unit:"wpm",value:0},{name:"readWords",unit:"word",value:0},{name:"readSentences",unit:"sentence",value:0},{name:"totalWords",unit:"word",value:0},{name:"correctShortWords",unit:"word",value:0},{name:"totalShortWords",unit:"word",value:0},{name:"totalSightWords",unit:"word",value:[]},{name:"correctSightWords",unit:"word",value:[]},{name:"longestSpan",unit:"word",value:0},{name:"waitsAfterCommas",unit:"unit",value:0},{name:"waitsAfterDots",unit:"unit",value:0},{name:"numOfDots",unit:"unit",value:0},{name:"numOfCommas",unit:"unit",value:0},{name:"mispronouncedWords",unit:"word",value:[]}]}}function by(){return{correctAnswers:0,totalQuestions:0,difficulty:50}}function Ty(){return{minutes:0,difficulty:50,wordsCount:0,category:""}}function Dl(i){return{goal:i,value:0}}const Vh=Mn(Dl(5)),Wh=Mn(Dl(5)),jo=Mn(Dl(3)),Xh=Mn(Sy()),qh=Mn(Ty()),Yo=Mn(by()),jh=Mn(),Yh=Mn(),Co=Mn(),Pl=Mn(),Ko=Mn(),us=1500,ha=1,ra=.2;class Lo{constructor(){Pt(this,"track");Pt(this,"trackState");Pt(this,"fadeInterval");Pt(this,"enabled",!0);Pt(this,"_muted");this.track=new Audio,this.trackState=Mn(Wt.IDLE),this.fadeInterval=null,this._muted=!1}get muted(){return this._muted}mute(){this.fadeInterval&&clearInterval(this.fadeInterval),this.setVolume(0),this._muted=!0}unmute(e=ha){this.fadeInterval&&clearInterval(this.fadeInterval),this.setVolume(e),this._muted=!1}setAudio(e,t=!0,n=!1,r=1){this.track.src=e,this.track.autoplay=t,this.track.loop=n,this.track.playbackRate=r,this.track.load()}async play(){this.track.src!==""&&this.track.play()}pause(){this.track.src!==""&&this.track.pause()}setVolume(e){this.track.volume=e}getVolume(){return this.track.volume}fade(e,t=us){return this._muted?Promise.resolve(!1):(this.fadeInterval&&clearInterval(this.fadeInterval),new Promise((n,r)=>{let a=t/100;const o=(e-this.track.volume)/a;if(o===0){n(!0);return}const l=setInterval(()=>{if(this.track.volume+o<0||this.track.volume+o>1){clearInterval(l),n(!0);return}this.track.volume+=o,--a==0&&(clearInterval(l),n(!0))},100);this.fadeInterval=l}))}}var gt;(i=>{i.players=new Map,i.bgEnabled=!0,e();function e(){ya()&&(i.players=new Map([[Ze.BACKGROUND,new Lo],[Ze.DEVICE,new Lo],[Ze.EFFECTS,new Lo]]));for(const[h,d]of i.players)d.track.onplay=()=>{if(d.trackState.set(Wt.PLAYING),h===Ze.DEVICE){const g=i.players.get(Ze.BACKGROUND);!g.muted&&g.getVolume()>ra&&f(Ze.BACKGROUND,ra)}},d.track.onpause=()=>{d.trackState.set(Wt.PAUSED)},d.track.onended=()=>{if(d.trackState.set(Wt.ENDED),h===Ze.DEVICE){const g=i.players.get(Ze.BACKGROUND);!g.muted&&(g==null?void 0:g.getVolume())<ha&&u(Ze.BACKGROUND)}}}i.init=e;async function t({playerType:h,src:d,playAudio:g=!0,loop:_=!1,playbackRate:m=1}){var p;h===Ze.DEVICE&&await f(Ze.BACKGROUND),(p=i.players.get(h))==null||p.setAudio(d,g,_,m)}i.setAudio=t;function n(h){const d=i.players.get(h);!d||!d.enabled||d.mute()}i.mute=n;function r(h,d=ha){const g=i.players.get(h);if(!g||!g.enabled)return;Pd(i.players.get(Ze.DEVICE).trackState)===Wt.PLAYING&&(d=ra),g.unmute(d)}i.unmute=r;function s(){for(const h of i.players.values())h.play()}i.playAll=s;function a(){for(const h of i.players.values())h.pause()}i.pauseAll=a;function o(h){const d=i.players.get(h);if(d)d.play(),d.enabled=!0;else return}i.play=o;async function l(h,d=0){const g=i.players.get(h);if(g)g.enabled=!1,d&&await g.fade(0,us),g.pause();else return}i.pause=l;function c(h){var d;return(d=i.players.get(h))==null?void 0:d.trackState}i.getState=c;function u(h,d=ha,g=us){const _=i.players.get(h);if(_)return _.enabled?_.fade(d,g):(console.log("Not Enabled "),Promise.resolve(!0))}i.fadeIn=u;function f(h,d=ra,g=us){const _=i.players.get(h);if(_)return _.enabled?_.fade(d,g):(console.log("Not Enabled "),Promise.resolve(!0))}i.fadeOut=f})(gt||(gt={}));const Ay=(i,e)=>{const t=new uy(e,i.domElement);return t.enabled=!1,t},wy=(i,e)=>{const t=i/e,n=50,r=1,s=1e3,a=new en(n,t,r,s);return a.position.set(250,50,0),a},Ry=(i,{startRotation:e,endRotation:t},{startScale:n,endScale:r},s)=>{if(!i)return Promise.resolve();const a=performance.now(),o=a+s;let l=0,c;const u=new Promise(d=>{c=d});return requestAnimationFrame(f),u;function f(d){const g=d||performance.now();l=Math.min((g-a)/s,1),h(!0,e,t),h(!1,n,r),Kh(i),g<o?requestAnimationFrame(f):c()}function h(d,g,_){const m=Io(g.x,_.x,l),p=Io(g.y,_.y,l),y=Io(g.z,_.z,l);d?i.rotation.set(m,p,y):i.scale.set(m,p,y)}};function Io(i,e,t){return(1-t)*i+t*e}const Kh=i=>{const t=new On().setFromObject(i).getCenter(new k);i.position.sub(t)};function Cy(i,e){switch(i){case Mt.QUITE:return e.speechRecognitionQuiteMsg;case Mt.MUMBLING:return e.speechRecognitionMumblingMsg;default:return null}}function Ly(i){const e=i[0].length,t=ku(i[1]),n=i[1].findIndex(o=>o===t[0]),r=i[1].findIndex(o=>o===t[t.length-1]),s=i[0].slice(n,r+1);return ku(s).length,e}const ku=i=>{let e=[];return i.reduce((t,n)=>{if(t.length===0)return t.concat([n]);{const r=t.at(-1);if(r&&n-r===1){const a=t.concat([n]);return a.length>e.length&&(e=a),a}else return t.length>e.length&&(e=t),[n]}},[]),e};function es(i,e,t,n="black",r="var(--orcam-04-solid-blue)"){i&&isFinite(e)&&isFinite(t)&&Array.from(i).forEach((s,a)=>{s.style.color=a>=e&&a<=t?r:n})}function Zo(i,e){Array.from(i||{}).forEach(t=>t.classList.remove("ball")),i&&isFinite(e)&&e<i.length&&i[e].classList.add("ball")}function Bu(i,e){return i.replace(/[’]/g,"'").replace(/[^\p{Letter}\p{Mark}\s']/gu,"").replace(/\s+/g," ").toLocaleLowerCase()===e.toLocaleLowerCase()}function Xi(i=""){return i.replace(/[’]/g,"'").replace(/[^\p{Letter}\p{Mark}\s']/gu,"").replace(/(^\w|\s\w)(\S*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()).replaceAll(/\s/g,"")}async function Iy(i,e){return dy.sendAudio(await fy(i),Dy(e))}function Dy(i){const e=i.match(/\S+/g);return e?e.join(" ").trim():""}function Py(i,e,t,n,r){const s=Math.ceil((Date.now()-i)/Zh),a=e/s;return Wh.set({goal:t??5,value:s}),qh.set({minutes:s,difficulty:n??50,wordsCount:e,category:r??""}),a}function Ny(i,e){e&&es(i,0,i.length-1),Zo(i,i.length),gt.setAudio({playerType:Ze.EFFECTS,src:"/sounds/well-done.mp3"})}function Uy(i,e,t,n,r){var u,f,h,d,g,_,m,p,y,M,S,x,b,N;let s=(u=e.positiveReadingFeedbackData)==null?void 0:u.generalPositiveFeedbackMsg,a=(f=e.negativeReadingFeedbackData)==null?void 0:f.generalNegativeFeedbackMsg;const o=(i-(t==null?void 0:t.fluencyAvarageMin))/((t==null?void 0:t.fluencyAvarageMax)??194.7-(t==null?void 0:t.fluencyAvarageMin)??90.3);let l=((d=(h=e.positiveReadingFeedbackData)==null?void 0:h.hardWordMsgData)==null?void 0:d.hardWordToFind)??"";n.includes(l.trim().toLocaleLowerCase())?s=(_=(g=e.positiveReadingFeedbackData)==null?void 0:g.hardWordMsgData)==null?void 0:_.hardWordMsg:o>=.5?s=(m=e.positiveReadingFeedbackData)==null?void 0:m.highFluencyMsg:s=(p=e.positiveReadingFeedbackData)==null?void 0:p.generalPositiveFeedbackMsg,l=((M=(y=e.negativeReadingFeedbackData)==null?void 0:y.hardWordMsgData)==null?void 0:M.hardWordToFind)??"",n.includes(l.trim().toLocaleLowerCase())?o<.5?a=(b=e.negativeReadingFeedbackData)==null?void 0:b.lowFluencyMsg:a=(N=e.negativeReadingFeedbackData)==null?void 0:N.generalNegativeFeedbackMsg:a=(x=(S=e.negativeReadingFeedbackData)==null?void 0:S.hardWordMsgData)==null?void 0:x.hardWordMsg;const c=[r,s,a];return console.log("FEEDBACK ARR",c),c}function Oy(i){ih("on_enter",{step:i,related_product:"OrCam Learn"})}function ki(i){ih("on_click",{component:i,related_product:"OrCam Learn"})}const Zh=6e4,Hu=6,zu=3;var Ci=(i=>(i.updateHeaderTitle="updateHeaderTitle",i.selectedBook="selectedBook",i.audioEnd="audioEnd",i.updateHeaderTopText="updateHeaderTopText",i))(Ci||{});function sa(i){return JSON.stringify(i)}function aa(i){return JSON.parse(i)}class Fy{constructor(e){Pt(this,"request");this.request=ky(Qd,e)}list(){return this.request("/documents").then(e=>e.documents).catch(()=>{})}async createDocument(e){return this.request("/document/"+encodeURIComponent(e),{method:"PUT"}).then(()=>!0).catch(()=>!1)}async deleteDocument(e){return this.request("/document/"+encodeURIComponent(e),{method:"DELETE"}).then(()=>!0).catch(()=>!1)}collections(e){return this.request("/document/"+encodeURIComponent(e),{method:"GET"}).then(t=>t.collections).catch(()=>{})}async createCollection(e,t){return this.request(`/collection/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,{method:"PUT"}).then(()=>!0).catch(()=>!1)}getItem(e,t,n){return this.request(`/item/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,{method:"GET"}).then(r=>r.item).catch(()=>{})}async setItem(e,t,n,r){return this.request(`/item/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,{method:"PUT",json:{value:r}}).then(()=>!0).catch(()=>!1)}async delItem(e,t,n){return this.request(`/item/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,{method:"DELETE"}).then(()=>!0).catch(()=>!1)}async contains(e,t,n){return this.getItem(e,t,n).then(r=>r!==void 0)}clear(e,t){return this.request(`/collection/${encodeURIComponent(e)}/${encodeURIComponent(t)}/clear`,{method:"POST"}).then(()=>!0).catch(()=>!1)}count(e,t){return this.request(`/collection/${encodeURIComponent(e)}/${encodeURIComponent(t)}/count`,{method:"GET"}).then(n=>n.count).catch(()=>{})}keys(e,t,n=void 0,r=-1){const s={};return n&&(s.afterKey=n),r!==-1&&(s.count=r.toString()),this.request(`/collection/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,{method:"GET",params:s}).then(a=>a.keys).catch(()=>{})}async items(e,t,n=void 0,r=-1){const s={};return n&&(s.afterKey=n),r!==-1&&(s.count=r.toString()),this.request(`/items/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,{method:"GET",params:s}).then(a=>a.items).catch(()=>{})}async typedKeys(e,t,n=void 0,r=-1){const s=await this.keys(e,t,n,r);return s==null?void 0:s.map(a=>aa(a))}async typedItems(e,t,n=void 0,r=-1){const s=await this.items(e,t,n,r);return s==null?void 0:s.map(a=>({key:aa(a.key),value:aa(a.value)}))}setTypedItem(e,t,n,r){return this.setItem(e,t,sa(n),sa(r))}async getTypedItem(e,t,n){const r=await this.getItem(e,t,sa(n));if(r)return aa(r)}delTypedItem(e,t,n){return this.delItem(e,t,sa(n))}async getDocId(e,t){if(!t)return;const n=`metadata_2_${t}`;return await this.getTypedItem(n,"core_documents",e)}}function ky(i,e,t=!0,n=()=>({})){return async function(s,a,o=t){const l=new URL(i+s);a!=null&&a.params&&(l.search=new URLSearchParams(a==null?void 0:a.params).toString());const c=a!=null&&a.json?JSON.stringify(a==null?void 0:a.json):null,u=n();u["Content-Type"]="application/json",o&&e&&(u.Authorization="accessToken "+e);const f=(a==null?void 0:a.method)||"GET",h=await fetch(l.toString(),{method:f,body:c,headers:u}),d=await h.json();if(h.status===200)return d;throw d}}class Jh{constructor(e){Pt(this,"dbClient");Pt(this,"metadataDocId");Pt(this,"coreColId","core_documents");Pt(this,"remoteId","");this.config=e,e.demoType==="exhibition"&&(this.dbClient=new Fy(this.config.credentials.accessToken),this.metadataDocId=`metadata_2_${this.config.credentials.userHash}`)}async createMetadata(e){var n;if(this.config.demoType!=="exhibition"||!this.dbClient||!this.metadataDocId)return"";const t=`${e}_${this.config.credentials.studentId}`;if((n=await this.dbClient.list())!=null&&n.includes(this.metadataDocId)||(await this.dbClient.createDocument(this.metadataDocId),await this.dbClient.createCollection(this.metadataDocId,this.coreColId)),this.remoteId=await this.dbClient.getTypedItem(this.metadataDocId,this.coreColId,t)||"",!this.remoteId){const r=ml(new Date);await this.dbClient.setTypedItem(this.metadataDocId,this.coreColId,t,`${t}_${r}`),this.remoteId=`${t}_${r}`}return this.remoteId}}class Gu{constructor(){Pt(this,"quiz",{questions_data:[],timestamp_ms:0})}}const La=class La extends Jh{constructor(t){super(t);Pt(this,"sessionColId","session");Pt(this,"sessionV2ColId","session_v2");Pt(this,"quizColId","quiz_session");this.config.demoType==="exhibition"&&this.createMissingDocsAndCols()}static getInstance(t){return this.db||(this.db=new La(t)),this.db}async createMissingDocsAndCols(){var n;if(this.config.demoType!=="exhibition"||!this.dbClient)return;const t=await super.createMetadata("reading_reports");(n=await this.dbClient.list())!=null&&n.includes(t)||(await this.dbClient.createDocument(t),await Promise.all([this.dbClient.createCollection(t,this.sessionColId),this.dbClient.createCollection(t,this.sessionV2ColId),this.dbClient.createCollection(t,this.quizColId)]))}async uploadReadingPalSession(t,n){this.config.demoType!=="exhibition"||!this.dbClient||await Promise.all([this.dbClient.setTypedItem(this.remoteId,this.sessionColId,t,n),this.dbClient.setTypedItem(this.remoteId,this.sessionV2ColId,t,n)])}async uploadQuizSession(t,n){this.config.demoType!=="exhibition"||!this.dbClient||await this.dbClient.setTypedItem(this.remoteId,this.quizColId,n,t.quiz)}};Pt(La,"db");let Jo=La;function By(i){let e,t,n;return{c(){e=te("div"),t=te("p"),n=it(i[0]),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);t=ne(s,"P",{});var a=ae(t);n=rt(a,i[0]),a.forEach(U),s.forEach(U),this.h()},h(){H(e,"class","book_text svelte-xqsde3")},m(r,s){fe(r,e,s),Y(e,t),Y(t,n),i[23](t)},p(r,s){s[0]&1&&Rt(n,r[0])},i:ct,o:ct,d(r){r&&U(e),i[23](null)}}}function Hy(i,e,t){var he;let n,r,s,a,o,l,c;Ft(i,Ko,j=>t(20,s=j)),Ft(i,Yo,j=>t(39,a=j)),Ft(i,jo,j=>t(40,o=j)),Ft(i,Pl,j=>t(22,c=j));let{onNext:u=()=>{}}=e,{stepContent:f}=e,{speechRecognitionMessages:h}=e,{reportsData:d}=e,{text:g=""}=e,{book:_}=e,{delay:m=1e3}=e,{config:p}=e,y=new Gu,M=Date.now(),S=g.replace(/[\W_-]/g," ").toLocaleLowerCase().split(" ").filter(j=>j.length>0),x,b=null,N,w=!1,v="",E=Mt.IDLE,I,z;const R=[];let O=0,B,Q=0,Z=0,P=0,q=0,le="",ye="",ge=zu,J=0,oe=0,pe=0;const _e=(he=gt.players.get(Ze.DEVICE))==null?void 0:he.trackState;Ft(i,_e,j=>t(21,l=j));const D=navigator.userAgent.match(/Android/i),we=Nr();let be;async function K(j,L){const X=new Date(Q),G={api_ver:2,continue_to_quiz:!0,exit_reason:"tryme_end",metrics:j,readable_date:X.toString(),reports_unique_key:L,session_id:0,timestamp:Math.floor(Q/1e3),timestamp_ms:Q,user_speech_timeout_overall:0};Xh.set(G),await(n==null?void 0:n.uploadReadingPalSession(L,G))}function ve(){if(console.log("Starting session. "," recognition is on = ",w),w||x.start(),(b==null?void 0:b.state)!=="recording")try{b==null||b.start()}catch(j){console.error(j)}}function Fe(){console.log("Stopping session. recorder state = ",b==null?void 0:b.state," recognition is on = ",w),w&&x.stop(),b==null||b.stop()}function Ce(){console.log("Pausing session. recorder state = ",b==null?void 0:b.state," recognition is on = ",w),w&&x.stop(),(b==null?void 0:b.state)==="recording"&&(b==null||b.pause())}function Be(){console.log("Resuming session. recorder state = ",b==null?void 0:b.state," recognition is on = ",w),w||x.start(),(b==null?void 0:b.state)==="paused"&&(b==null||b.resume())}function ut(j){const L=j[0],X=Math.min.apply(Math,L),G=Math.max.apply(Math,L);es(I,X,G),Zo(I,G+1);const me=xt(L),Me=L.findLast(Re=>Re<=S.length-1&&Re>=S.length-zu);Me?ft(Me,j):me&&R.length===Hu?E!==Mt.MUMBLING&&t(13,E=Mt.MUMBLING):E!==Mt.READING&&t(13,E=Mt.READING)}function ft(j,L){const X=L[0];j===S.length-1||ge===0?(P=Ly(L),clearTimeout(B),B=void 0,t(13,E=Mt.DONE)):(X.length<=J?ge--:ge=S.length-j,J=X.length)}function xt(j){const L=ye.split(" "),X=j.length/L.length*100;return q!==L.length?(q=L.length,R.length<Hu||R.shift(),R.push(X)):R[R.length-1]=X,console.log("accuracyLevel = ",R,j.length,L.length),R.every(function(G,me){return me===0||G<=R[me-1]&&G<100})}async function yt(j,L,X=!1){var me;if((p==null?void 0:p.demoType)!=="exhibition"){let Me=o.value+j,Re=a.correctAnswers+j;jo.set({goal:(d==null?void 0:d.understandingGoal)??3,value:Me}),Yo.set({correctAnswers:Re,totalQuestions:_==null?void 0:_.questions.length,difficulty:((me=_.questions[pe])==null?void 0:me.questionsDifficulty)??50})}let G=3e3;pe===(_==null?void 0:_.questions.length)-1?(we(Ci.updateHeaderTitle,{title:[L],triggerNextOnAudioEnd:!0}),G=6e3,et()):we(Ci.updateHeaderTitle,{title:[L]}),X&&setTimeout(()=>{t(17,pe++,pe)},G)}async function et(){y.quiz.timestamp_ms=Date.now(),await(n==null?void 0:n.uploadQuizSession(y,be)),M=Date.now(),y=new Gu}function st(j=!0){Fe(),Ny(I,j);const L=Py(Q,P,d==null?void 0:d.readingGoal,_.textDifficulty,_.bookCategory);u({Title:Uy(L,_,d,ye.split(" "),h.speechRecognitionDoneMsg),DoOnComplete:()=>es(I,-1,-1)})}function Ut(){const j=Math.ceil((Date.now()-Z)/Zh);Vh.set({goal:(d==null?void 0:d.listeningGoal)??5,value:j}),u()}function C(){var L,X,G;const j=_.questions[pe];if(r===It.TEXT_USER_ANSWERING&&j){const me=Date.now();es(I,-1,-1);const Me=Bu(this.innerHTML,j.answer);y.quiz.questions_data[pe]?y.quiz.questions_data[pe].responses_data.push({answer_result:Me?"CORRECT":"INCORRECT",user_response_time_ms:me-M,user_response_time_sec:Math.floor((me-M)/1e3)}):y.quiz.questions_data.push({question_data:{question:((G=(X=(L=j.questionMsg.text[1])==null?void 0:L.children)==null?void 0:X.at(0))==null?void 0:G.text)||""},responses_data:[{answer_result:Me?"CORRECT":"INCORRECT",user_response_time_ms:me-M,user_response_time_sec:Math.floor((me-M)/1e3)}]}),Me?(this.style.color="blue",yt(1,j.correctAnswerMsg,!0),gt.setAudio({playerType:Ze.EFFECTS,src:"/sounds/well-done.mp3"}),O=0):(this.style.color="red",O++,O===2?(yt(0,j.incorrectAnswerMsg,!0),setTimeout(()=>{this.style.color="black",Array.from(I).forEach(function(Re){Bu(Re.innerHTML,j.answer)&&(Re.style.color="blue")})},2e3),O=0):(M=me,we(Ci.updateHeaderTitle,{title:[j.tryAgainMsg]}),setTimeout(()=>{this.style.color="black"},2e3)))}}function T(){E!==Mt.DONE&&E!==Mt.TROUBLE_SHOOTING_ON&&r===It.TEXT_USER_READING&&t(13,E=Mt.QUITE),clearTimeout(B),B=void 0}function $(j){if(D){const L=j.item(j.length-1)[0];let X=v.slice(0,oe)??"";X+=L.transcript+" ",L.confidence>0&&(oe=X.length),v=X}else{v=le?le+" ":"";for(let L=0;L<j.length;L++)v+=j.item(L)[0].transcript}}ji(async()=>{const j=window.SpeechRecognition||window.webkitSpeechRecognition,L=window.SpeechGrammarList||window.webkitSpeechGrammarList;if(t(10,x=new j),L){N=new L;const X="#JSGF V1.0; grammar textWords; public <textWords> = "+S.join(" | ")+" ;";N.addFromString(X,1),t(10,x.grammars=N,x)}if(t(10,x.continuous=!0,x),t(10,x.interimResults=!0,x),t(10,x.lang="en-US",x),t(10,x.onresult=X=>{clearTimeout(B),B=void 0,E!==Mt.DONE&&(B=setTimeout(()=>{T()},7*1e3),$(X.results),ye!=v.toLocaleLowerCase()&&(console.log("spoken text = ",v.toLocaleLowerCase().split(" ").filter(G=>!!G)),t(16,ye=v.toLocaleLowerCase()),ut(fp(S,ye.split(" ").filter(G=>!!G)))))},x),t(10,x.onspeechend=()=>{console.log("recognition event onspeechend"),(E===Mt.READING||E===Mt.IDLE)&&t(13,E=Mt.STOP_READING_SESSION_STOPPED)},x),t(10,x.onaudioend=()=>{console.log("recognition event onaudioend"),(E===Mt.READING||E===Mt.IDLE)&&t(13,E=Mt.STOP_READING_SESSION_STOPPED)},x),t(10,x.onend=()=>{console.log("recognition event onend"),t(12,w=!1)},x),t(10,x.onstart=()=>{console.log("recognition event onstart"),t(12,w=!0)},x),!s){let X=await navigator.mediaDevices.getUserMedia({audio:!0});Ko.set(X)}});function ue(j){an[j?"unshift":"push"](()=>{z=j,t(1,z),t(14,I),t(0,g)})}return i.$$set=j=>{"onNext"in j&&t(3,u=j.onNext),"stepContent"in j&&t(4,f=j.stepContent),"speechRecognitionMessages"in j&&t(5,h=j.speechRecognitionMessages),"reportsData"in j&&t(6,d=j.reportsData),"text"in j&&t(0,g=j.text),"book"in j&&t(7,_=j.book),"delay"in j&&t(8,m=j.delay),"config"in j&&t(9,p=j.config)},i.$$.update=()=>{var j,L;if(i.$$.dirty[0]&512&&(n=p?Jo.getInstance(p):void 0),i.$$.dirty[0]&16&&t(19,r=f.textState),i.$$.dirty[0]&524288&&r===It.TEXT_USER_ANSWERING&&(M=Date.now()),i.$$.dirty[0]&16386&&z&&(t(1,z.innerHTML=z.innerHTML.replace(/([^\s<>]+)(?:(?=\s)|$)/g,'<span class="word">$1</span>'),z),t(14,I=z.getElementsByTagName("span")),Array.from(I).forEach(function(X){X.onclick=C})),i.$$.dirty[0]&3&&!g&&z&&t(1,z.innerHTML="",z),i.$$.dirty[0]&2017409&&r&&(r===It.TEXT_CROP&&gt.setAudio({playerType:Ze.EFFECTS,src:"/sounds/capture.wav"}),r===It.TEXT_USER_READING?(Zo(I,0),t(15,Q=Date.now()),t(18,be=ml(new Date(Q))),D?s==null||s.getTracks().forEach(X=>{X.stop()}):s&&b===null&&(t(11,b=new MediaRecorder(s)),t(11,b.ondataavailable=async X=>{console.log("Audio from recorder",X.data),s.getTracks().forEach(G=>{G.stop()}),Iy(X.data,g).then(async G=>{console.log("Received answer from TryMe API",G),G!=null&&G.stats&&await K(G.stats,be)})},b))):r===It.TEXT_USER_ANSWERING?we(Ci.updateHeaderTitle,{title:[((L=(j=_.questions)==null?void 0:j[pe])==null?void 0:L.questionMsg)||""]}):r===It.DEVICE_READING_TEXT&&(gt.setAudio({playerType:Ze.DEVICE,src:_.bookText.url}),Z=Date.now())),i.$$.dirty[0]&527360&&x&&(D||b)&&r===It.TEXT_USER_READING&&ve(),i.$$.dirty[0]&536608&&r===It.TEXT_USER_READING&&E){console.log("SpeechRecognition state is",E);const X=Cy(E,h);X&&!D?(t(13,E=Mt.TROUBLE_SHOOTING_ON),Ce(),we(Ci.updateHeaderTopText,{title:X})):E===Mt.DONE?st():E===Mt.STOP_READING_SESSION_STOPPED&&!w&&Be()}i.$$.dirty[0]&4718600&&c&&(r===It.TEXT_USER_READING?st(!1):r===It.DEVICE_READING_TEXT?Ut():r===It.TEXT_USER_ANSWERING&&u()),i.$$.dirty[0]&2621440&&l===Wt.ENDED&&r===It.DEVICE_READING_TEXT&&Ut(),i.$$.dirty[0]&2695168&&l===Wt.ENDED&&r===It.TEXT_USER_READING&&E===Mt.TROUBLE_SHOOTING_ON&&(we(Ci.updateHeaderTopText,{title:null}),le=ye,Be(),t(13,E=Mt.IDLE)),i.$$.dirty[0]&147456&&es(I,-1,-1)},[g,z,_e,u,f,h,d,_,m,p,x,b,w,E,I,Q,ye,pe,be,r,s,l,c,ue]}class zy extends bt{constructor(e){super(),Tt(this,e,Hy,By,St,{onNext:3,stepContent:4,speechRecognitionMessages:5,reportsData:6,text:0,book:7,delay:8,config:9},null,[-1,-1])}}function Vu(i){let e,t,n;return{c(){e=te("div"),t=Ee(),n=te("div"),this.h()},l(r){e=ne(r,"DIV",{class:!0,style:!0}),ae(e).forEach(U),t=Se(r),n=ne(r,"DIV",{class:!0,style:!0}),ae(n).forEach(U),this.h()},h(){H(e,"class","try-me-book__top-lasers svelte-1n0nuyl"),At(e,"--book-top-laser-height",i[17](i[13],"top")+"px"),At(e,"--book-top-laser-angle",i[18](i[13])+"rad"),H(n,"class","try-me-book__bottom-lasers svelte-1n0nuyl"),At(n,"--book-bottom-laser-height",i[17](i[13],"bottom")+"px")},m(r,s){fe(r,e,s),fe(r,t,s),fe(r,n,s)},p(r,s){s&8192&&At(e,"--book-top-laser-height",r[17](r[13],"top")+"px"),s&8192&&At(e,"--book-top-laser-angle",r[18](r[13])+"rad"),s&8192&&At(n,"--book-bottom-laser-height",r[17](r[13],"bottom")+"px")},d(r){r&&(U(e),U(t),U(n))}}}function Wu(i){let e,t;return{c(){e=te("img"),this.h()},l(n){e=ne(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){In(e.src,t=i[0])||H(e,"src",t),H(e,"alt","book cover"),H(e,"class","svelte-1n0nuyl")},m(n,r){fe(n,e,r)},p(n,r){r&1&&!In(e.src,t=n[0])&&H(e,"src",t)},d(n){n&&U(e)}}}function Gy(i){let e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m,p,y,M,S,x,b,N,w,v=i[2].textState===It.TEXT_CROP&&Vu(i);l=new zy({props:{stepContent:i[2],text:i[6].text,onNext:i[8],book:i[7],speechRecognitionMessages:i[9],delay:i[3],reportsData:i[10],config:i[11]}}),l.$on("updateHeaderTitle",i[20]),l.$on("updateHeaderTopText",i[21]);let E=i[0]&&Wu(i);return{c(){e=te("div"),t=te("div"),n=te("div"),r=Ee(),s=te("div"),a=te("div"),v&&v.c(),o=Ee(),Le(l.$$.fragment),c=Ee(),u=te("img"),h=Ee(),d=te("div"),g=te("div"),_=Ee(),m=te("button"),E&&E.c(),p=Ee(),y=te("div"),M=te("div"),S=te("img"),this.h()},l(I){e=ne(I,"DIV",{class:!0});var z=ae(e);t=ne(z,"DIV",{class:!0});var R=ae(t);n=ne(R,"DIV",{class:!0}),ae(n).forEach(U),r=Se(R),s=ne(R,"DIV",{class:!0});var O=ae(s);a=ne(O,"DIV",{class:!0});var B=ae(a);v&&v.l(B),o=Se(B),Ne(l.$$.fragment,B),B.forEach(U),c=Se(O),u=ne(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach(U),R.forEach(U),h=Se(z),d=ne(z,"DIV",{class:!0});var Q=ae(d);g=ne(Q,"DIV",{class:!0}),ae(g).forEach(U),_=Se(Q),m=ne(Q,"BUTTON",{class:!0});var Z=ae(m);E&&E.l(Z),Z.forEach(U),p=Se(Q),y=ne(Q,"DIV",{class:!0});var P=ae(y);M=ne(P,"DIV",{class:!0});var q=ae(M);S=ne(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(U),P.forEach(U),Q.forEach(U),z.forEach(U),this.h()},h(){var I,z;H(n,"class","try-me-book__extra-paper svelte-1n0nuyl"),H(a,"class","try-me-book__content-text svelte-1n0nuyl"),lt(a,"try-me-book__crop-laser",i[2].textState===It.TEXT_CROP),H(u,"class","try-me-book__bottom-image mt-auto svelte-1n0nuyl"),In(u.src,f=(I=i[5])==null?void 0:I.url)||H(u,"src",f),H(u,"alt","small bottom"),H(s,"class","try-me-book__content svelte-1n0nuyl"),H(t,"class","try-me-book__page try-me-book__page--2 svelte-1n0nuyl"),H(g,"class","try-me-book__extra-paper svelte-1n0nuyl"),H(m,"class","try-me-book__page-front svelte-1n0nuyl"),H(S,"class","fill-width ma-auto svelte-1n0nuyl"),In(S.src,x=(z=i[4])==null?void 0:z.url)||H(S,"src",x),H(S,"alt","big left"),H(M,"class","try-me-book__content svelte-1n0nuyl"),H(y,"class","try-me-book__page-back svelte-1n0nuyl"),H(d,"class","try-me-book__page try-me-book__page--1 svelte-1n0nuyl"),lt(d,"try-me-book__page--transition",i[1]),H(e,"class","try-me-book svelte-1n0nuyl"),lt(e,"try-me-book--open",i[1]),lt(e,"try-me-book--user-answering",i[14])},m(I,z){fe(I,e,z),Y(e,t),Y(t,n),Y(t,r),Y(t,s),Y(s,a),v&&v.m(a,null),Y(a,o),Ie(l,a,null),i[22](a),Y(s,c),Y(s,u),Y(e,h),Y(e,d),Y(d,g),Y(d,_),Y(d,m),E&&E.m(m,null),Y(d,p),Y(d,y),Y(y,M),Y(M,S),b=!0,N||(w=[Nn(window,"resize",i[16]),Nn(m,"click",i[23])],N=!0)},p(I,[z]){var O,B;I[2].textState===It.TEXT_CROP?v?v.p(I,z):(v=Vu(I),v.c(),v.m(a,o)):v&&(v.d(1),v=null);const R={};z&4&&(R.stepContent=I[2]),z&64&&(R.text=I[6].text),z&256&&(R.onNext=I[8]),z&128&&(R.book=I[7]),z&512&&(R.speechRecognitionMessages=I[9]),z&8&&(R.delay=I[3]),z&1024&&(R.reportsData=I[10]),z&2048&&(R.config=I[11]),l.$set(R),(!b||z&4)&&lt(a,"try-me-book__crop-laser",I[2].textState===It.TEXT_CROP),(!b||z&32&&!In(u.src,f=(O=I[5])==null?void 0:O.url))&&H(u,"src",f),I[0]?E?E.p(I,z):(E=Wu(I),E.c(),E.m(m,null)):E&&(E.d(1),E=null),(!b||z&16&&!In(S.src,x=(B=I[4])==null?void 0:B.url))&&H(S,"src",x),(!b||z&2)&&lt(d,"try-me-book__page--transition",I[1]),(!b||z&2)&&lt(e,"try-me-book--open",I[1]),(!b||z&16384)&&lt(e,"try-me-book--user-answering",I[14])},i(I){b||(ee(l.$$.fragment,I),b=!0)},o(I){ce(l.$$.fragment,I),b=!1},d(I){I&&U(e),v&&v.d(),De(l),i[22](null),E&&E.d(),N=!1,ul(w)}}}function Vy(i,e,t){let n,r,s,{fullCover:a=""}=e,{openBook:o=!1}=e,{stepContent:l}=e,{delay:c=1e3}=e,{firstPageImage:u}=e,{secondPageImage:f}=e,{text:h}=e,{book:d}=e,{onNext:g}=e,{speechRecognitionMessages:_}=e,{reportsData:m}=e,{config:p}=e,y;const M=Nr(),S=async()=>{var Q,Z,P;if(await vr(c),!y)return;const I=y.getBoundingClientRect(),{top:z,height:R}=I,O=ya()&&((Q=document.getElementById("mainBody"))==null?void 0:Q.scrollTop)||0,B=ya()&&((P=(Z=document.getElementById("header"))==null?void 0:Z.getBoundingClientRect())==null?void 0:P.height)||0;Yh.set(z-B+R+O),t(13,s=y==null?void 0:y.getBoundingClientRect())},x=(I,z)=>{if(!I)return 0;const{left:R,right:O,top:B,bottom:Q,width:Z}=I,P=50,q=O,le=z==="bottom"?Q:B,ye=R+Z/2,ge=Q+P;return J(q,le,ye,ge);function J(oe,pe,_e,D){const we=_e-oe,be=D-pe;return Math.floor(Math.sqrt(we**2+be**2))}},b=I=>{if(!I)return"0";const{height:z,width:R}=I;return Math.atan2(R,2*z+50).toFixed(3)};function N(I){ga.call(this,i,I)}function w(I){ga.call(this,i,I)}function v(I){an[I?"unshift":"push"](()=>{y=I,t(12,y)})}const E=()=>M("coverClick");return i.$$set=I=>{"fullCover"in I&&t(0,a=I.fullCover),"openBook"in I&&t(1,o=I.openBook),"stepContent"in I&&t(2,l=I.stepContent),"delay"in I&&t(3,c=I.delay),"firstPageImage"in I&&t(4,u=I.firstPageImage),"secondPageImage"in I&&t(5,f=I.secondPageImage),"text"in I&&t(6,h=I.text),"book"in I&&t(7,d=I.book),"onNext"in I&&t(8,g=I.onNext),"speechRecognitionMessages"in I&&t(9,_=I.speechRecognitionMessages),"reportsData"in I&&t(10,m=I.reportsData),"config"in I&&t(11,p=I.config)},i.$$.update=()=>{i.$$.dirty&4&&t(14,n=l.textState===It.TEXT_USER_ANSWERING),i.$$.dirty&4&&t(19,r=l.bookState!==zn.BOOK_SELECTION),i.$$.dirty&4096&&t(13,s=y==null?void 0:y.getBoundingClientRect()),i.$$.dirty&528384&&y&&r&&S()},[a,o,l,c,u,f,h,d,g,_,m,p,y,s,n,M,S,x,b,r,N,w,v,E]}class Wy extends bt{constructor(e){super(),Tt(this,e,Vy,Gy,St,{fullCover:0,openBook:1,stepContent:2,delay:3,firstPageImage:4,secondPageImage:5,text:6,book:7,onNext:8,speechRecognitionMessages:9,reportsData:10,config:11})}}function Xu(i,e,t){const n=i.slice();return n[23]=e[t],n[25]=t,n}function qu(i){var f;let e,t,n,r,s,a,o,l;function c(){return i[20](i[25])}t=new Wy({props:{fullCover:(f=i[23].bookImage)==null?void 0:f.url,openBook:i[9],stepContent:i[2],config:i[7],firstPageImage:i[23].firstPageImage,secondPageImage:i[23].secondPageImage,text:i[6]?{text:"",url:""}:i[23].bookText,book:i[23],speechRecognitionMessages:i[4],reportsData:i[5],onNext:i[1],delay:i[3]}}),t.$on("updateHeaderTitle",i[18]),t.$on("updateHeaderTopText",i[19]),t.$on("coverClick",c);function u(){return i[21](i[23])}return{c(){e=te("div"),Le(t.$$.fragment),n=Ee(),this.h()},l(h){e=ne(h,"DIV",{id:!0,class:!0});var d=ae(e);Ne(t.$$.fragment,d),n=Se(d),d.forEach(U),this.h()},h(){H(e,"id",r="try-me__book_"+i[25]),H(e,"class",s=vn(`try-me-book-cards__card
                     try-me-book-cards__card--${i[25]}
                    ${i[8]===i[25]?" try-me-book-cards__card--active-"+i[8]:""}`)+" svelte-y3yl3x"),lt(e,"try-me-book-cards__card--chosen",i[13]),lt(e,"try-me-book-cards__card--extend",i[11]),lt(e,"try-me-book-cards__card--hover",i[12])},m(h,d){fe(h,e,d),Ie(t,e,null),Y(e,n),a=!0,o||(l=[Nn(e,"mouseenter",u),Nn(e,"mouseleave",i[16])],o=!0)},p(h,d){var _;i=h;const g={};d&1&&(g.fullCover=(_=i[23].bookImage)==null?void 0:_.url),d&512&&(g.openBook=i[9]),d&4&&(g.stepContent=i[2]),d&128&&(g.config=i[7]),d&1&&(g.firstPageImage=i[23].firstPageImage),d&1&&(g.secondPageImage=i[23].secondPageImage),d&65&&(g.text=i[6]?{text:"",url:""}:i[23].bookText),d&1&&(g.book=i[23]),d&16&&(g.speechRecognitionMessages=i[4]),d&32&&(g.reportsData=i[5]),d&2&&(g.onNext=i[1]),d&8&&(g.delay=i[3]),t.$set(g),(!a||d&1&&r!==(r="try-me__book_"+i[25]))&&H(e,"id",r),(!a||d&257&&s!==(s=vn(`try-me-book-cards__card
                     try-me-book-cards__card--${i[25]}
                    ${i[8]===i[25]?" try-me-book-cards__card--active-"+i[8]:""}`)+" svelte-y3yl3x"))&&H(e,"class",s),(!a||d&8449)&&lt(e,"try-me-book-cards__card--chosen",i[13]),(!a||d&2305)&&lt(e,"try-me-book-cards__card--extend",i[11]),(!a||d&4353)&&lt(e,"try-me-book-cards__card--hover",i[12])},i(h){a||(ee(t.$$.fragment,h),a=!0)},o(h){ce(t.$$.fragment,h),a=!1},d(h){h&&U(e),De(t),o=!1,ul(l)}}}function ju(i,e){let t,n,r,s=(e[10]===-1||e[10]===e[25])&&qu(e);return{key:i,first:null,c(){t=wt(),s&&s.c(),n=wt(),this.h()},l(a){t=wt(),s&&s.l(a),n=wt(),this.h()},h(){this.first=t},m(a,o){fe(a,t,o),s&&s.m(a,o),fe(a,n,o),r=!0},p(a,o){e=a,e[10]===-1||e[10]===e[25]?s?(s.p(e,o),o&1025&&ee(s,1)):(s=qu(e),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(_t(),ce(s,1,1,()=>{s=null}),vt())},i(a){r||(ee(s),r=!0)},o(a){ce(s),r=!1},d(a){a&&(U(t),U(n)),s&&s.d(a)}}}function Xy(i){let e,t,n=[],r=new Map,s,a=xn(i[0]||[]);const o=l=>l[25];for(let l=0;l<a.length;l+=1){let c=Xu(i,a,l),u=o(c);r.set(u,n[l]=ju(u,c))}return{c(){e=te("div"),t=te("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=ne(l,"DIV",{class:!0});var c=ae(e);t=ne(c,"DIV",{class:!0});var u=ae(t);for(let f=0;f<n.length;f+=1)n[f].l(u);u.forEach(U),c.forEach(U),this.h()},h(){H(t,"class","try-me-book-cards svelte-y3yl3x"),H(e,"class","relative")},m(l,c){fe(l,e,c),Y(e,t);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);s=!0},p(l,[c]){c&131071&&(a=xn(l[0]||[]),_t(),n=dl(n,c,o,1,l,a,r,t,pl,ju,null,Xu),vt())},i(l){if(!s){for(let c=0;c<a.length;c+=1)ee(n[c]);s=!0}},o(l){for(let c=0;c<n.length;c+=1)ce(n[c]);s=!1},d(l){l&&U(e);for(let c=0;c<n.length;c+=1)n[c].d()}}}function qy(i,e,t){let n,{books:r}=e,{onNext:s}=e,{stepContent:a}=e,{delay:o=1e3}=e,{speechRecognitionMessages:l}=e,{reportsData:c}=e,{hideText:u=!1}=e,{config:f}=e,{selectedBook:h}=e,d=-1,g=-1,_=!1,m=!1,p=!1;const y=Nr(),M=async E=>{var I,z;ki(`try_me__book_${E}`),t(17,h=E),(z=(I=r[E])==null?void 0:I.backgroundSound)!=null&&z.url&&gt.play(Ze.BACKGROUND),t(8,d=E),await vr(o),t(10,g=E),t(11,m=!0),s({Title:[r[E].greetingMessage]})},S=E=>{t(12,p=!0),!n&&y("hoverBookSelection",E)},x=()=>{t(12,p=!1),!n&&y("leaveHoverBookSelection",r==null?void 0:r[1])};function b(E){ga.call(this,i,E)}function N(E){ga.call(this,i,E)}const w=E=>M(E),v=E=>S(E);return i.$$set=E=>{"books"in E&&t(0,r=E.books),"onNext"in E&&t(1,s=E.onNext),"stepContent"in E&&t(2,a=E.stepContent),"delay"in E&&t(3,o=E.delay),"speechRecognitionMessages"in E&&t(4,l=E.speechRecognitionMessages),"reportsData"in E&&t(5,c=E.reportsData),"hideText"in E&&t(6,u=E.hideText),"config"in E&&t(7,f=E.config),"selectedBook"in E&&t(17,h=E.selectedBook)},i.$$.update=()=>{i.$$.dirty&256&&t(13,n=d!==-1),i.$$.dirty&12&&(a==null?void 0:a.bookState)!==zn.BOOK_SELECTION&&vr(o).then(()=>{t(9,_=!0)}),i.$$.dirty&520&&_&&(gt.setAudio({playerType:Ze.EFFECTS,src:"/sounds/book-open.mp3",playbackRate:.7}),vr(o).then(()=>{y("bookOpened")}))},[r,s,a,o,l,c,u,f,d,_,g,m,p,n,M,S,x,h,b,N,w,v]}class jy extends bt{constructor(e){super(),Tt(this,e,qy,Xy,St,{books:0,onNext:1,stepContent:2,delay:3,speechRecognitionMessages:4,reportsData:5,hideText:6,config:7,selectedBook:17})}}function Yu(i,e){if(e===im)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ho||e===ph){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ho)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Yy extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $y(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new uM(t)})}load(e,t,n,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=qo.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Gh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qh){try{a[nt.KHR_BINARY_GLTF]=new fM(e)}catch(f){r&&r(f);return}s=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case nt.KHR_MATERIALS_UNLIT:a[f]=new Jy;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[f]=new hM(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[f]=new dM;break;case nt.KHR_MESH_QUANTIZATION:a[f]=new pM;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zy{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $r(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jx(u),c.distance=f;break;case"spot":c=new Kx(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Jy{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Di}extendParams(e,t,n){const r=[];e.color=new qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,He))}return Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $y{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(s)}}class eM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class tM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,He)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class iM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new qe(o[0],o[1],o[2]),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new qe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,He)),Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class oM{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lM{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cM{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class uM{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new Je,m=new k,p=new qn,y=new k(1,1,1),M=new Ix(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,_.compose(m,p,y));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Et.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Qh="glTF",Yr=12,Ku={JSON:1313821514,BIN:5130562};class fM{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Yr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Yr,s=new DataView(e,Yr);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ku.JSON){const c=new Uint8Array(e,Yr+a,o);this.content=n.decode(c)}else if(l===Ku.BIN){const c=Yr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Qo[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Qo[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Er[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const g=h.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}f(h)},o,c)})})}}class dM{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pM{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class $h extends Ts{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,y=1-m,M=p-h+f;for(let S=0;S!==o;S++){const x=a[_+S+o],b=a[_+S+l]*u,N=a[g+S+o],w=a[g+S]*u;s[S]=y*x+M*b+m*N+p*w}return s}}const mM=new qn;class gM extends $h{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return mM.fromArray(s).normalize().toArray(s),s}}const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zu={9728:Gt,9729:nn,9984:Bo,9985:hh,9986:ua,9987:Hi},Ju={33071:mn,33648:Ma,10497:Ar},Do={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_M={CUBICSPLINE:void 0,LINEAR:Rr,STEP:ds},Po={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Kr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function yM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(i){const e=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Qu(e.attributes):t=i.indices+":"+Qu(i.attributes)+":"+i.mode,t}function Qu(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $o(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SM=new Je;class bM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new jx(this.options.manager):this.textureLoader=new ey(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};Kr(s,o,r),_i(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(qo.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Do[r.type],o=Er[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new tn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Do[r.type],c=Er[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(y);M||(_=new c(o,p*d,r.count*d/u),M=new Tx(_,d/u),t.cache.add(y,M)),m=new Tl(M,l,h%d/u,g)}else o===null?_=new c(r.count*l):_=new c(o,h,r.count*l),m=new tn(_,l,g);if(r.sparse!==void 0){const p=Do.SCALAR,y=Er[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,x=new y(a[1],M,r.sparse.count*p),b=new c(a[2],S,r.sparse.count*l);o!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized));for(let N=0,w=x.length;N<w;N++){const v=x[N];if(m.setX(v,b[N*l]),l>=2&&m.setY(v,b[N*l+1]),l>=3&&m.setZ(v,b[N*l+2]),l>=4&&m.setW(v,b[N*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Zu[h.magFilter]||nn,u.minFilter=Zu[h.minFilter]||Hi,u.wrapS=Ju[h.wrapS]||Ar,u.wrapT=Ju[h.wrapT]||Ar,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Xt(_);m.needsUpdate=!0,h(m)}),t.load(qo.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||EM(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new kh,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new wl,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rl}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const f=r[nt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,He)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Gn);const u=s.alphaMode||Po.OPAQUE;if(u===Po.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Po.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Di&&(o.emissive=new qe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Di&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,He)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),_i(f,s),t.associations.set(f,{materials:e}),s.extensions&&Kr(r,f,s),f})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $u(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=MM(c),f=r[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=$u(new yn,c,t),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?vM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const y=c[d];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new wx(_,y):new _n(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?p.geometry=Yu(p.geometry,ph):m.mode===pn.TRIANGLE_FAN&&(p.geometry=Yu(p.geometry,Ho));else if(m.mode===pn.LINES)p=new Dx(_,y);else if(m.mode===pn.LINE_STRIP)p=new ms(_,y);else if(m.mode===pn.LINE_LOOP)p=new Px(_,y);else if(m.mode===pn.POINTS)p=new Nx(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&yM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),_i(p,s),m.extensions&&Kr(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const h=new Pi;t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Mm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Sl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new Je;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Al(o,l)})}loadAnimation(e){const n=this.json.animations[e],r=n.name?n.name:"animation_"+e,s=[],a=[],o=[],l=[],c=[];for(let u=0,f=n.channels.length;u<f;u++){const h=n.channels[u],d=n.samplers[h.sampler],g=h.target,_=g.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;g.node!==void 0&&(s.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(d),c.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const f=u[0],h=u[1],d=u[2],g=u[3],_=u[4],m=[];for(let p=0,y=f.length;p<y;p++){const M=f[p],S=h[p],x=d[p],b=g[p],N=_[p];if(M===void 0)continue;M.updateMatrix();let w;switch(gi[N.path]){case gi.weights:w=gs;break;case gi.rotation:w=Wi;break;case gi.position:case gi.scale:default:w=_s;break}const v=M.name?M.name:M.uuid,E=b.interpolation!==void 0?_M[b.interpolation]:Rr,I=[];gi[N.path]===gi.weights?M.traverse(function(R){R.morphTargetInfluences&&I.push(R.name?R.name:R.uuid)}):I.push(v);let z=x.array;if(x.normalized){const R=$o(z.constructor),O=new Float32Array(z.length);for(let B=0,Q=z.length;B<Q;B++)O[B]=z[B]*R;z=O}for(let R=0,O=I.length;R<O;R++){const B=new w(I[R]+"."+gi[N.path],S.array,z,E);b.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(Z){const P=this instanceof Wi?gM:$h;return new P(this.times,this.values,this.getValueSize()/3,Z)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(B)}}return new Hx(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,SM)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Fh:c.length>1?u=new Pi:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),_i(u,s),s.extensions&&Kr(n,u,s),s.matrix!==void 0){const f=new Je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Pi;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&Kr(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof Vn||h instanceof Xt)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}}function TM(i,e,t){const n=e.attributes,r=new On;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=$o(Er[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=$o(Er[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new ci;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function $u(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Qo[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return _i(i,e),TM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?xM(i,e.targets,t):i})}const{window:AM}=ep;function ef(i){let e,t,n;return{c(){e=te("button"),this.h()},l(r){e=ne(r,"BUTTON",{class:!0}),ae(e).forEach(U),this.h()},h(){H(e,"class","try-me-device__capture-button svelte-1a7ssj4")},m(r,s){fe(r,e,s),t||(n=Nn(e,"click",i[9]),t=!0)},p:ct,d(r){r&&U(e),t=!1,n()}}}function tf(i){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{class:!0}),ae(e).forEach(U),this.h()},h(){H(e,"class","try-me-device__voice-effect svelte-1a7ssj4")},m(t,n){fe(t,e,n)},d(t){t&&U(e)}}}function wM(i){let e,t,n,r,s,a,o,l,c=i[0]===Ot.BOTTOM_SPEAKING&&ef(i),u=(i[7]===Wt.PLAYING&&i[0]===Ot.TOP||i[0]===Ot.BOTTOM_SPEAKING)&&tf();return{c(){e=te("div"),t=te("div"),n=te("div"),r=Ee(),c&&c.c(),s=Ee(),u&&u.c(),this.h()},l(f){e=ne(f,"DIV",{class:!0,style:!0});var h=ae(e);t=ne(h,"DIV",{class:!0});var d=ae(t);n=ne(d,"DIV",{}),ae(n).forEach(U),r=Se(d),c&&c.l(d),s=Se(d),u&&u.l(d),d.forEach(U),h.forEach(U),this.h()},h(){H(t,"class","relative svelte-1a7ssj4"),H(e,"class",a=vn(`try-me-device try-me-device--${i[4]}`)+" svelte-1a7ssj4"),At(e,"--device-bottom",(i[6]-Ea/4-30).toFixed(0)+"px"),lt(e,"try-me-device--transition-end",i[3]),lt(e,"no-events",i[1]),lt(e,"try-me-device--floating",i[3]&&i[0]===Ot.BOTTOM)},m(f,h){fe(f,e,h),Y(e,t),Y(t,n),i[15](n),Y(t,r),c&&c.m(t,null),Y(t,s),u&&u.m(t,null),o||(l=Nn(AM,"mousemove",i[8]),o=!0)},p(f,h){f[0]===Ot.BOTTOM_SPEAKING?c?c.p(f,h):(c=ef(f),c.c(),c.m(t,s)):c&&(c.d(1),c=null),f[7]===Wt.PLAYING&&f[0]===Ot.TOP||f[0]===Ot.BOTTOM_SPEAKING?u||(u=tf(),u.c(),u.m(t,null)):u&&(u.d(1),u=null),h[0]&16&&a!==(a=vn(`try-me-device try-me-device--${f[4]}`)+" svelte-1a7ssj4")&&H(e,"class",a),h[0]&64&&At(e,"--device-bottom",(f[6]-Ea/4-30).toFixed(0)+"px"),h[0]&24&&lt(e,"try-me-device--transition-end",f[3]),h[0]&18&&lt(e,"no-events",f[1]),h[0]&25&&lt(e,"try-me-device--floating",f[3]&&f[0]===Ot.BOTTOM)},i:ct,o:ct,d(f){f&&U(e),i[15](null),c&&c.d(),u&&u.d(),o=!1,l()}}}let nf=660,Ea=600;function RM(){let i=document.getElementById("mainBody"),e=(i==null?void 0:i.scrollHeight)||1,t=(i==null?void 0:i.scrollTop)||1,n=(i==null?void 0:i.clientHeight)||1;return e-(t+n)||1}function CM(i,e,t){let n,r,s,a=ct,o=()=>(a(),a=Nd(n,D=>t(7,s=D)),n);Ft(i,Yh,D=>t(6,r=D)),i.$$.on_destroy.push(()=>a());let{state:l=Ot.TOP}=e,{delay:c=1e3}=e,{isBookOpened:u=!1}=e,{isUserAnswering:f=!1}=e,{onNext:h}=e,{generalDb:d}=e,{book:g}=e,_=l;const m=new bx;let p,y,M,S,x,b=!0;const N={x:1.8,y:1.8,z:1.8},w={x:1,y:1,z:1},v={x:-1.57,y:.2,z:Math.PI},E={x:0,y:-1.2,z:0};let I=Q(l);ji(async()=>{p=wy(nf,Ea),le(),J(),ye(),S.appendChild(y.domElement),M=Ay(y,p)});const z=async()=>{t(3,b=!1),t(4,I=Q(l)),await Ry(x,Z(),P(),c*2),t(3,b=!0)},R=()=>O(_)&&B(l)||B(_)&&O(l),O=D=>!!D.includes("top"),B=D=>!!D.includes("bottom");function Q(D){switch(D){case Ot.TOP:case Ot.TOP_SPEAKING:return"top";default:return"bottom"}}const Z=()=>{switch(l){case Ot.TOP:case Ot.TOP_SPEAKING:return{startRotation:v,endRotation:E};default:return{startRotation:E,endRotation:v}}},P=()=>{switch(l){case Ot.TOP:case Ot.TOP_SPEAKING:return{startScale:N,endScale:w};default:return{startScale:w,endScale:N}}},q=()=>{let D={x:0,y:0,z:0};switch(l){case Ot.TOP:case Ot.TOP_SPEAKING:{D=E;break}default:{D=v;break}}const{x:we,y:be,z:K}=D;x.rotation.set(we,be,K);const Fe=new On().setFromObject(x).getCenter(new k);x.position.sub(Fe)},le=()=>{const D=new $r(16777215,2.5),we=new $r(16777215,1.5),be=new $r(16777215,1.5),K=new $r(16777215,1.5),ve=new $x(16777215,.15);D.position.set(200,-200,550),we.position.set(-200,200,-550),be.position.set(500,200,-50),K.position.set(-500,-200,50),new ia(D,50),new ia(we,50),new ia(be,50),new ia(K,50),m.add(D,we,be,K,ve)},ye=()=>{y=new Oh({alpha:!0,antialias:!0}),y.setSize(nf,Ea),y.setAnimationLoop(ge),y.shadowMap.enabled=!0},ge=()=>{M.update(),y.render(m,p)},J=()=>{new Yy().load("/3d/02.glb",function(we){const be=we.scene;be.traverse(function(K){K.isMesh&&K.material.color.set(9539510)}),x=be,q(),m.add(be)})};function oe(D){if(l!==Ot.BOTTOM_MOVING||!b||!ya())return;let we=RM(),{scrollTop:be,scrollHeight:K}=document.getElementById("mainBody")||{scrollTop:1,scrollHeight:1};const ve=(we+be)/2||1,Fe=v.x,Ce=v.y-((D.clientY+(be>ve?ve*.5:-ve))/K-.5),Be=v.z-(D.clientX/window.innerWidth-.5);x.rotation.set(Fe,Ce,Be),Kh(x)}async function pe(){g&&await(d==null?void 0:d.uploadSpeakingData(g)),h()}function _e(D){an[D?"unshift":"push"](()=>{S=D,t(2,S)})}return i.$$set=D=>{"state"in D&&t(0,l=D.state),"delay"in D&&t(10,c=D.delay),"isBookOpened"in D&&t(11,u=D.isBookOpened),"isUserAnswering"in D&&t(1,f=D.isUserAnswering),"onNext"in D&&t(12,h=D.onNext),"generalDb"in D&&t(13,d=D.generalDb),"book"in D&&t(14,g=D.book)},i.$$.update=()=>{i.$$.dirty[0]&2049&&u&&R()&&(z(),_=l)},o(t(5,n=gt.getState(Ze.DEVICE))),[l,f,S,b,I,n,r,s,oe,pe,c,u,h,d,g,_e]}class LM extends bt{constructor(e){super(),Tt(this,e,CM,wM,St,{state:0,delay:10,isBookOpened:11,isUserAnswering:1,onNext:12,generalDb:13,book:14},null,[-1,-1])}}function rf(i,e,t){const n=i.slice();return n[31]=e[t],n[33]=t,n}function sf(i,e,t){const n=i.slice();return n[34]=e[t],n}function af(i,e,t){const n=i.slice();return n[34]=e[t],n}function of(i){var g,_;let e,t,n=((g=i[1].testContent)==null?void 0:g.title)+"",r,s,a,o,l,c;const u=[DM,IM],f=[];function h(m,p){var y,M;return((y=m[1].testContent)==null?void 0:y.testType)==="output"?0:((M=m[1].testContent)==null?void 0:M.testType)==="input"?1:-1}~(a=h(i))&&(o=f[a]=u[a](i));let d=((_=i[1].testContent)==null?void 0:_.troubleShooting)&&uf(i);return{c(){e=te("div"),t=te("p"),r=it(n),s=Ee(),o&&o.c(),l=Ee(),d&&d.c(),this.h()},l(m){e=ne(m,"DIV",{class:!0});var p=ae(e);t=ne(p,"P",{class:!0});var y=ae(t);r=rt(y,n),y.forEach(U),s=Se(p),o&&o.l(p),l=Se(p),d&&d.l(p),p.forEach(U),this.h()},h(){H(t,"class","p2 medium"),H(e,"class","text-start pa-3")},m(m,p){fe(m,e,p),Y(e,t),Y(t,r),Y(e,s),~a&&f[a].m(e,null),Y(e,l),d&&d.m(e,null),c=!0},p(m,p){var M,S;(!c||p[0]&2)&&n!==(n=((M=m[1].testContent)==null?void 0:M.title)+"")&&Rt(r,n);let y=a;a=h(m),a===y?~a&&f[a].p(m,p):(o&&(_t(),ce(f[y],1,1,()=>{f[y]=null}),vt()),~a?(o=f[a],o?o.p(m,p):(o=f[a]=u[a](m),o.c()),ee(o,1),o.m(e,l)):o=null),(S=m[1].testContent)!=null&&S.troubleShooting?d?(d.p(m,p),p[0]&2&&ee(d,1)):(d=uf(m),d.c(),ee(d,1),d.m(e,null)):d&&(_t(),ce(d,1,1,()=>{d=null}),vt())},i(m){c||(ee(o),ee(d),c=!0)},o(m){ce(o),ce(d),c=!1},d(m){m&&U(e),~a&&f[a].d(),d&&d.d()}}}function IM(i){var d,g;let e,t,n,r,s,a,o,l,c,u;t=new Fa({props:{htmlId:"try-me__"+Xi((d=i[1].testContent)==null?void 0:d.cta),variant:gl.SECONDARY,color:Ss.PURPLE,size:sh.MEDIUM,text:(g=i[1].testContent)==null?void 0:g.cta}}),t.$on("click",i[12]);function f(_){i[19](_)}let h={class:"p3",variant:"outlined",$$slots:{default:[NM]},$$scope:{ctx:i}};return i[8]!==void 0&&(h.value=i[8]),r=new ah({props:h}),an.push(()=>Or(r,"value",f)),{c(){e=te("div"),Le(t.$$.fragment),n=Ee(),Le(r.$$.fragment),a=Ee(),o=te("div"),l=it("Output level: "),c=te("meter"),this.h()},l(_){e=ne(_,"DIV",{class:!0});var m=ae(e);Ne(t.$$.fragment,m),n=Se(m),Ne(r.$$.fragment,m),m.forEach(U),a=Se(_),o=ne(_,"DIV",{class:!0});var p=ae(o);l=rt(p,"Output level: "),c=ne(p,"METER",{class:!0,high:!0,max:!0,min:!0}),ae(c).forEach(U),p.forEach(U),this.h()},h(){H(e,"class","d-flex padding-y-24 svelte-13qxdtj"),H(c,"class","m-inline-start-15 flex-1 svelte-13qxdtj"),H(c,"high","0.25"),H(c,"max","1"),c.value="0",H(c,"min","0"),H(o,"class","d-flex")},m(_,m){fe(_,e,m),Ie(t,e,null),Y(e,n),Ie(r,e,null),fe(_,a,m),fe(_,o,m),Y(o,l),Y(o,c),i[20](c),u=!0},p(_,m){var M,S;const p={};m[0]&2&&(p.htmlId="try-me__"+Xi((M=_[1].testContent)==null?void 0:M.cta)),m[0]&2&&(p.text=(S=_[1].testContent)==null?void 0:S.cta),t.$set(p);const y={};m[0]&32|m[1]&256&&(y.$$scope={dirty:m,ctx:_}),!s&&m[0]&256&&(s=!0,y.value=_[8],Ur(()=>s=!1)),r.$set(y)},i(_){u||(ee(t.$$.fragment,_),ee(r.$$.fragment,_),u=!0)},o(_){ce(t.$$.fragment,_),ce(r.$$.fragment,_),u=!1},d(_){_&&(U(e),U(a),U(o)),De(t),De(r),i[20](null)}}}function DM(i){var d,g;let e,t,n,r,s,a,o,l,c,u;t=new Fa({props:{htmlId:"try-me__"+Xi((d=i[1].testContent)==null?void 0:d.cta),variant:gl.SECONDARY,color:Ss.PURPLE,size:sh.MEDIUM,text:(g=i[1].testContent)==null?void 0:g.cta}}),t.$on("click",i[11]);function f(_){i[17](_)}let h={class:"p3",variant:"outlined",$$slots:{default:[OM]},$$scope:{ctx:i}};return i[7]!==void 0&&(h.value=i[7]),r=new ah({props:h}),an.push(()=>Or(r,"value",f)),{c(){e=te("div"),Le(t.$$.fragment),n=Ee(),Le(r.$$.fragment),a=Ee(),o=te("div"),l=it("Output level: "),c=te("meter"),this.h()},l(_){e=ne(_,"DIV",{class:!0});var m=ae(e);Ne(t.$$.fragment,m),n=Se(m),Ne(r.$$.fragment,m),m.forEach(U),a=Se(_),o=ne(_,"DIV",{class:!0});var p=ae(o);l=rt(p,"Output level: "),c=ne(p,"METER",{class:!0,high:!0,max:!0,min:!0}),ae(c).forEach(U),p.forEach(U),this.h()},h(){H(e,"class","d-flex padding-y-24 svelte-13qxdtj"),H(c,"class","m-inline-start-15 flex-1 svelte-13qxdtj"),H(c,"high","0.25"),H(c,"max","1"),c.value="0",H(c,"min","0"),H(o,"class","d-flex")},m(_,m){fe(_,e,m),Ie(t,e,null),Y(e,n),Ie(r,e,null),fe(_,a,m),fe(_,o,m),Y(o,l),Y(o,c),i[18](c),u=!0},p(_,m){var M,S;const p={};m[0]&2&&(p.htmlId="try-me__"+Xi((M=_[1].testContent)==null?void 0:M.cta)),m[0]&2&&(p.text=(S=_[1].testContent)==null?void 0:S.cta),t.$set(p);const y={};m[0]&32|m[1]&256&&(y.$$scope={dirty:m,ctx:_}),!s&&m[0]&128&&(s=!0,y.value=_[7],Ur(()=>s=!1)),r.$set(y)},i(_){u||(ee(t.$$.fragment,_),ee(r.$$.fragment,_),u=!0)},o(_){ce(t.$$.fragment,_),ce(r.$$.fragment,_),u=!1},d(_){_&&(U(e),U(a),U(o)),De(t),De(r),i[18](null)}}}function PM(i){let e=i[34].label+"",t;return{c(){t=it(e)},l(n){t=rt(n,e)},m(n,r){fe(n,t,r)},p(n,r){r[0]&32&&e!==(e=n[34].label+"")&&Rt(t,e)},d(n){n&&U(t)}}}function lf(i){let e,t;return e=new _l({props:{value:i[34].deviceId,$$slots:{default:[PM]},$$scope:{ctx:i}}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r[0]&32&&(s.value=n[34].deviceId),r[0]&32|r[1]&256&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function NM(i){let e,t,n=xn(i[5].filter(df)),r=[];for(let a=0;a<n.length;a+=1)r[a]=lf(sf(i,n,a));const s=a=>ce(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=wt()},l(a){for(let o=0;o<r.length;o+=1)r[o].l(a);e=wt()},m(a,o){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(a,o);fe(a,e,o),t=!0},p(a,o){if(o[0]&32){n=xn(a[5].filter(df));let l;for(l=0;l<n.length;l+=1){const c=sf(a,n,l);r[l]?(r[l].p(c,o),ee(r[l],1)):(r[l]=lf(c),r[l].c(),ee(r[l],1),r[l].m(e.parentNode,e))}for(_t(),l=n.length;l<r.length;l+=1)s(l);vt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)ee(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)ce(r[o]);t=!1},d(a){a&&U(e),fl(r,a)}}}function UM(i){let e=i[34].label+"",t;return{c(){t=it(e)},l(n){t=rt(n,e)},m(n,r){fe(n,t,r)},p(n,r){r[0]&32&&e!==(e=n[34].label+"")&&Rt(t,e)},d(n){n&&U(t)}}}function cf(i){let e,t;return e=new _l({props:{value:i[34].deviceId,$$slots:{default:[UM]},$$scope:{ctx:i}}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r[0]&32&&(s.value=n[34].deviceId),r[0]&32|r[1]&256&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function OM(i){let e,t,n,r;e=new _l({props:{value:"default"}});let s=xn(i[5].filter(hf)),a=[];for(let l=0;l<s.length;l+=1)a[l]=cf(af(i,s,l));const o=l=>ce(a[l],1,1,()=>{a[l]=null});return{c(){Le(e.$$.fragment),t=Ee();for(let l=0;l<a.length;l+=1)a[l].c();n=wt()},l(l){Ne(e.$$.fragment,l),t=Se(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=wt()},m(l,c){Ie(e,l,c),fe(l,t,c);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(l,c);fe(l,n,c),r=!0},p(l,c){if(c[0]&32){s=xn(l[5].filter(hf));let u;for(u=0;u<s.length;u+=1){const f=af(l,s,u);a[u]?(a[u].p(f,c),ee(a[u],1)):(a[u]=cf(f),a[u].c(),ee(a[u],1),a[u].m(n.parentNode,n))}for(_t(),u=s.length;u<a.length;u+=1)o(u);vt()}},i(l){if(!r){ee(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)ee(a[c]);r=!0}},o(l){ce(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)ce(a[c]);r=!1},d(l){l&&(U(t),U(n)),De(e,l),fl(a,l)}}}function uf(i){var o,l;let e,t,n="Not working?",r,s,a;return s=new rp({props:{rows:(l=(o=i[1].testContent)==null?void 0:o.troubleShooting)==null?void 0:l.rows}}),{c(){e=te("div"),t=te("p"),t.textContent=n,r=Ee(),Le(s.$$.fragment),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);t=ne(u,"P",{class:!0,"data-svelte-h":!0}),Es(t)!=="svelte-260zkf"&&(t.textContent=n),r=Se(u),Ne(s.$$.fragment,u),u.forEach(U),this.h()},h(){H(t,"class","p2 bold"),H(e,"class","padding-y-24 svelte-13qxdtj")},m(c,u){fe(c,e,u),Y(e,t),Y(e,r),Ie(s,e,null),a=!0},p(c,u){var h,d;const f={};u[0]&2&&(f.rows=(d=(h=c[1].testContent)==null?void 0:h.troubleShooting)==null?void 0:d.rows),s.$set(f)},i(c){a||(ee(s.$$.fragment,c),a=!0)},o(c){ce(s.$$.fragment,c),a=!1},d(c){c&&U(e),De(s)}}}function FM(i){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{class:!0}),ae(e).forEach(U),this.h()},h(){H(e,"class","dot svelte-13qxdtj")},m(t,n){fe(t,e,n)},d(t){t&&U(e)}}}function kM(i){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{class:!0,style:!0}),ae(e).forEach(U),this.h()},h(){H(e,"class","dot svelte-13qxdtj"),At(e,"background",Ss.PURPLE)},m(t,n){fe(t,e,n)},d(t){t&&U(e)}}}function ff(i){let e;function t(s,a){return s[33]===s[6]?kM:FM}let n=t(i),r=n(i);return{c(){r.c(),e=wt()},l(s){r.l(s),e=wt()},m(s,a){r.m(s,a),fe(s,e,a)},p(s,a){n!==(n=t(s))&&(r.d(1),r=n(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&U(e),r.d(s)}}}function BM(i){let e,t,n=i[1].title+"",r,s,a,o,l,c,u,f,h,d;o=new Oa({props:{content:i[1].description}});let g=i[1].stepType==="test"&&of(i);u=new Fa({props:{htmlId:"try-me__"+Xi(i[1].cta),class:"mt-1 mx-auto mb-7",variant:gl.PRIMARY,color:Ss.PURPLE,rounded:!0,text:i[9]?"Skip test":i[1].cta}}),u.$on("click",i[10]);let _=xn(i[0]),m=[];for(let p=0;p<_.length;p+=1)m[p]=ff(rf(i,_,p));return{c(){e=te("div"),t=te("h4"),r=it(n),s=Ee(),a=te("div"),Le(o.$$.fragment),l=Ee(),g&&g.c(),c=Ee(),Le(u.$$.fragment),f=Ee(),h=te("div");for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=ne(p,"DIV",{class:!0});var y=ae(e);t=ne(y,"H4",{class:!0});var M=ae(t);r=rt(M,n),M.forEach(U),s=Se(y),a=ne(y,"DIV",{class:!0});var S=ae(a);Ne(o.$$.fragment,S),S.forEach(U),l=Se(y),g&&g.l(y),c=Se(y),Ne(u.$$.fragment,y),f=Se(y),h=ne(y,"DIV",{class:!0});var x=ae(h);for(let b=0;b<m.length;b+=1)m[b].l(x);x.forEach(U),y.forEach(U),this.h()},h(){H(t,"class","title bold my-auto"),H(a,"class","padding-y-24 svelte-13qxdtj"),H(h,"class","dots svelte-13qxdtj"),H(e,"class","sound-test text-center svelte-13qxdtj")},m(p,y){fe(p,e,y),Y(e,t),Y(t,r),Y(e,s),Y(e,a),Ie(o,a,null),Y(e,l),g&&g.m(e,null),Y(e,c),Ie(u,e,null),Y(e,f),Y(e,h);for(let M=0;M<m.length;M+=1)m[M]&&m[M].m(h,null);d=!0},p(p,y){(!d||y[0]&2)&&n!==(n=p[1].title+"")&&Rt(r,n);const M={};y[0]&2&&(M.content=p[1].description),o.$set(M),p[1].stepType==="test"?g?(g.p(p,y),y[0]&2&&ee(g,1)):(g=of(p),g.c(),ee(g,1),g.m(e,c)):g&&(_t(),ce(g,1,1,()=>{g=null}),vt());const S={};if(y[0]&2&&(S.htmlId="try-me__"+Xi(p[1].cta)),y[0]&514&&(S.text=p[9]?"Skip test":p[1].cta),u.$set(S),y[0]&65){_=xn(p[0]);let x;for(x=0;x<_.length;x+=1){const b=rf(p,_,x);m[x]?m[x].p(b,y):(m[x]=ff(b),m[x].c(),m[x].m(h,null))}for(;x<m.length;x+=1)m[x].d(1);m.length=_.length}},i(p){d||(ee(o.$$.fragment,p),ee(g),ee(u.$$.fragment,p),d=!0)},o(p){ce(o.$$.fragment,p),ce(g),ce(u.$$.fragment,p),d=!1},d(p){p&&U(e),De(o),g&&g.d(),De(u),fl(m,p)}}}function HM(i){let e,t,n,r;function s(o){i[21](o)}let a={scrimClickAction:"",escapeKeyAction:"",$$slots:{default:[BM]},$$scope:{ctx:i}};return i[4]!==void 0&&(a.open=i[4]),t=new rh({props:a}),an.push(()=>Or(t,"open",s)),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(o){e=ne(o,"DIV",{class:!0});var l=ae(e);Ne(t.$$.fragment,l),l.forEach(U),this.h()},h(){H(e,"class","dialog-sound-test svelte-13qxdtj")},m(o,l){fe(o,e,l),Ie(t,e,null),r=!0},p(o,l){const c={};l[0]&1007|l[1]&256&&(c.$$scope={dirty:l,ctx:o}),!n&&l[0]&16&&(n=!0,c.open=o[4],Ur(()=>n=!1)),t.$set(c)},i(o){r||(ee(t.$$.fragment,o),r=!0)},o(o){ce(t.$$.fragment,o),r=!1},d(o){o&&U(e),De(t)}}}const hf=i=>i.kind==="audiooutput",df=i=>i.kind==="audioinput";function zM(i,e,t){let n,{audioUrl:r}=e,{steps:s=[]}=e,{denied:a}=e;const o=Nr();let l,c,u,f,h,d,g,_=!0,m=[],p=0,y=s[p],M=!1,S=!1,x="default",b="default";ji(()=>{navigator.mediaDevices.ondevicechange=()=>{var P;(P=navigator.mediaDevices)==null||P.enumerateDevices().then(q=>t(5,m=q))},l=new Audio,h=new(window.AudioContext||window.webkitAudioContext),g=h.createAnalyser()});const N=()=>{var P,q;ki(`try-me__${Xi(y.cta)}`),y.stepType==="test"?((P=y.testContent)==null?void 0:P.testType)==="output"?(d&&d.disconnect(),g&&g.disconnect(),h.suspend(),t(15,M=!0)):((q=y.testContent)==null?void 0:q.testType)==="input"&&(h.suspend(),t(16,S=!0)):y.stepType==="permissions"&&w(),p===s.length-1?z():(t(6,p++,p),t(1,y=s[p]))};async function w(){try{c=await navigator.mediaDevices.getUserMedia({audio:!0}),Ko.set(c),navigator.mediaDevices.enumerateDevices().then(P=>{t(5,m=P)})}catch(P){t(1,y=a),console.error(P)}}function v(P){const q=new Float32Array(g.fftSize),le=()=>{g.getFloatTimeDomainData(q);let ye=0;for(const ge of q)ye+=ge*ge;P&&(P.value=+Math.sqrt(ye/q.length).toFixed(2)),window.requestAnimationFrame(le)};window.requestAnimationFrame(le)}async function E(){ki("try-me__test_speaker"),l.src=r,h.sinkId!==x&&x!=="default"&&await h.setSinkId(x),d||(d=h.createMediaElementSource(l)),d.connect(g).connect(h.destination),v(f),h.state==="suspended"&&h.resume(),l.play().then(()=>t(9,n=!1))}async function I(){ki("try-me__test_mic"),c.getTracks().forEach(q=>q.stop()),c=await navigator.mediaDevices.getUserMedia({audio:{deviceId:b}}),h.state==="suspended"&&h.resume(),h.createMediaStreamSource(c).connect(g),v(u),t(9,n=!1)}function z(){t(4,_=!1),h.state!=="closed"&&h.close(),o("soundTestClosed")}function R(P){x=P,t(7,x)}function O(P){an[P?"unshift":"push"](()=>{f=P,t(3,f)})}function B(P){b=P,t(8,b)}function Q(P){an[P?"unshift":"push"](()=>{u=P,t(2,u)})}function Z(P){_=P,t(4,_)}return i.$$set=P=>{"audioUrl"in P&&t(13,r=P.audioUrl),"steps"in P&&t(0,s=P.steps),"denied"in P&&t(14,a=P.denied)},i.$$.update=()=>{i.$$.dirty[0]&2&&t(9,n=(y==null?void 0:y.stepType)==="test"),i.$$.dirty[0]&98304&&M&&S&&o("soundTestPassed")},[s,y,u,f,_,m,p,x,b,n,N,E,I,r,a,M,S,R,O,B,Q,Z]}class GM extends bt{constructor(e){super(),Tt(this,e,zM,HM,St,{audioUrl:13,steps:0,denied:14},null,[-1,-1])}}var VM={value:()=>{}};function ed(){for(var i=0,e=arguments.length,t={},n;i<e;++i){if(!(n=arguments[i]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new da(t)}function da(i){this._=i}function WM(i,e){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}da.prototype=ed.prototype={constructor:da,on:function(i,e){var t=this._,n=WM(i+"",t),r,s=-1,a=n.length;if(arguments.length<2){for(;++s<a;)if((r=(i=n[s]).type)&&(r=XM(t[r],i.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(i=n[s]).type)t[r]=pf(t[r],i.name,e);else if(e==null)for(r in t)t[r]=pf(t[r],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new da(i)},call:function(i,e){if((r=arguments.length-2)>0)for(var t=new Array(r),n=0,r,s;n<r;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(e,t)}};function XM(i,e){for(var t=0,n=i.length,r;t<n;++t)if((r=i[t]).name===e)return r.value}function pf(i,e,t){for(var n=0,r=i.length;n<r;++n)if(i[n].name===e){i[n]=VM,i=i.slice(0,n).concat(i.slice(n+1));break}return t!=null&&i.push({name:e,value:t}),i}var el="http://www.w3.org/1999/xhtml";const mf={svg:"http://www.w3.org/2000/svg",xhtml:el,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ga(i){var e=i+="",t=e.indexOf(":");return t>=0&&(e=i.slice(0,t))!=="xmlns"&&(i=i.slice(t+1)),mf.hasOwnProperty(e)?{space:mf[e],local:i}:i}function qM(i){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===el&&e.documentElement.namespaceURI===el?e.createElement(i):e.createElementNS(t,i)}}function jM(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function td(i){var e=Ga(i);return(e.local?jM:qM)(e)}function YM(){}function Nl(i){return i==null?YM:function(){return this.querySelector(i)}}function KM(i){typeof i!="function"&&(i=Nl(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=n[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new fn(n,this._parents)}function ZM(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function JM(){return[]}function nd(i){return i==null?JM:function(){return this.querySelectorAll(i)}}function QM(i){return function(){return ZM(i.apply(this,arguments))}}function $M(i){typeof i=="function"?i=QM(i):i=nd(i);for(var e=this._groups,t=e.length,n=[],r=[],s=0;s<t;++s)for(var a=e[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(n.push(i.call(l,l.__data__,c,a)),r.push(l));return new fn(n,r)}function id(i){return function(){return this.matches(i)}}function rd(i){return function(e){return e.matches(i)}}var eE=Array.prototype.find;function tE(i){return function(){return eE.call(this.children,i)}}function nE(){return this.firstElementChild}function iE(i){return this.select(i==null?nE:tE(typeof i=="function"?i:rd(i)))}var rE=Array.prototype.filter;function sE(){return Array.from(this.children)}function aE(i){return function(){return rE.call(this.children,i)}}function oE(i){return this.selectAll(i==null?sE:aE(typeof i=="function"?i:rd(i)))}function lE(i){typeof i!="function"&&(i=id(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new fn(n,this._parents)}function sd(i){return new Array(i.length)}function cE(){return new fn(this._enter||this._groups.map(sd),this._parents)}function Sa(i,e){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=e}Sa.prototype={constructor:Sa,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,e){return this._parent.insertBefore(i,e)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function uE(i){return function(){return i}}function fE(i,e,t,n,r,s){for(var a=0,o,l=e.length,c=s.length;a<c;++a)(o=e[a])?(o.__data__=s[a],n[a]=o):t[a]=new Sa(i,s[a]);for(;a<l;++a)(o=e[a])&&(r[a]=o)}function hE(i,e,t,n,r,s,a){var o,l,c=new Map,u=e.length,f=s.length,h=new Array(u),d;for(o=0;o<u;++o)(l=e[o])&&(h[o]=d=a.call(l,l.__data__,o,e)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<f;++o)d=a.call(i,s[o],o,s)+"",(l=c.get(d))?(n[o]=l,l.__data__=s[o],c.delete(d)):t[o]=new Sa(i,s[o]);for(o=0;o<u;++o)(l=e[o])&&c.get(h[o])===l&&(r[o]=l)}function dE(i){return i.__data__}function pE(i,e){if(!arguments.length)return Array.from(this,dE);var t=e?hE:fE,n=this._parents,r=this._groups;typeof i!="function"&&(i=uE(i));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],f=r[c],h=f.length,d=mE(i.call(u,u&&u.__data__,c,n)),g=d.length,_=o[c]=new Array(g),m=a[c]=new Array(g),p=l[c]=new Array(h);t(u,f,_,m,p,d,e);for(var y=0,M=0,S,x;y<g;++y)if(S=_[y]){for(y>=M&&(M=y+1);!(x=m[M])&&++M<g;);S._next=x||null}}return a=new fn(a,n),a._enter=o,a._exit=l,a}function mE(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function gE(){return new fn(this._exit||this._groups.map(sd),this._parents)}function _E(i,e,t){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?s.remove():t(s),n&&r?n.merge(r).order():r}function vE(i){for(var e=i.selection?i.selection():i,t=this._groups,n=e._groups,r=t.length,s=n.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=t[l],u=n[l],f=c.length,h=o[l]=new Array(f),d,g=0;g<f;++g)(d=c[g]||u[g])&&(h[g]=d);for(;l<r;++l)o[l]=t[l];return new fn(o,this._parents)}function xE(){for(var i=this._groups,e=-1,t=i.length;++e<t;)for(var n=i[e],r=n.length-1,s=n[r],a;--r>=0;)(a=n[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function yE(i){i||(i=ME);function e(f,h){return f&&h?i(f.__data__,h.__data__):!f-!h}for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s){for(var a=t[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(e)}return new fn(r,this._parents).order()}function ME(i,e){return i<e?-1:i>e?1:i>=e?0:NaN}function EE(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function SE(){return Array.from(this)}function bE(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var n=i[e],r=0,s=n.length;r<s;++r){var a=n[r];if(a)return a}return null}function TE(){let i=0;for(const e of this)++i;return i}function AE(){return!this.node()}function wE(i){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,a=r.length,o;s<a;++s)(o=r[s])&&i.call(o,o.__data__,s,r);return this}function RE(i){return function(){this.removeAttribute(i)}}function CE(i){return function(){this.removeAttributeNS(i.space,i.local)}}function LE(i,e){return function(){this.setAttribute(i,e)}}function IE(i,e){return function(){this.setAttributeNS(i.space,i.local,e)}}function DE(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(i):this.setAttribute(i,t)}}function PE(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,t)}}function NE(i,e){var t=Ga(i);if(arguments.length<2){var n=this.node();return t.local?n.getAttributeNS(t.space,t.local):n.getAttribute(t)}return this.each((e==null?t.local?CE:RE:typeof e=="function"?t.local?PE:DE:t.local?IE:LE)(t,e))}function ad(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function UE(i){return function(){this.style.removeProperty(i)}}function OE(i,e,t){return function(){this.style.setProperty(i,e,t)}}function FE(i,e,t){return function(){var n=e.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,t)}}function kE(i,e,t){return arguments.length>1?this.each((e==null?UE:typeof e=="function"?FE:OE)(i,e,t??"")):Dr(this.node(),i)}function Dr(i,e){return i.style.getPropertyValue(e)||ad(i).getComputedStyle(i,null).getPropertyValue(e)}function BE(i){return function(){delete this[i]}}function HE(i,e){return function(){this[i]=e}}function zE(i,e){return function(){var t=e.apply(this,arguments);t==null?delete this[i]:this[i]=t}}function GE(i,e){return arguments.length>1?this.each((e==null?BE:typeof e=="function"?zE:HE)(i,e)):this.node()[i]}function od(i){return i.trim().split(/^|\s+/)}function Ul(i){return i.classList||new ld(i)}function ld(i){this._node=i,this._names=od(i.getAttribute("class")||"")}ld.prototype={add:function(i){var e=this._names.indexOf(i);e<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var e=this._names.indexOf(i);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function cd(i,e){for(var t=Ul(i),n=-1,r=e.length;++n<r;)t.add(e[n])}function ud(i,e){for(var t=Ul(i),n=-1,r=e.length;++n<r;)t.remove(e[n])}function VE(i){return function(){cd(this,i)}}function WE(i){return function(){ud(this,i)}}function XE(i,e){return function(){(e.apply(this,arguments)?cd:ud)(this,i)}}function qE(i,e){var t=od(i+"");if(arguments.length<2){for(var n=Ul(this.node()),r=-1,s=t.length;++r<s;)if(!n.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?XE:e?VE:WE)(t,e))}function jE(){this.textContent=""}function YE(i){return function(){this.textContent=i}}function KE(i){return function(){var e=i.apply(this,arguments);this.textContent=e??""}}function ZE(i){return arguments.length?this.each(i==null?jE:(typeof i=="function"?KE:YE)(i)):this.node().textContent}function JE(){this.innerHTML=""}function QE(i){return function(){this.innerHTML=i}}function $E(i){return function(){var e=i.apply(this,arguments);this.innerHTML=e??""}}function eS(i){return arguments.length?this.each(i==null?JE:(typeof i=="function"?$E:QE)(i)):this.node().innerHTML}function tS(){this.nextSibling&&this.parentNode.appendChild(this)}function nS(){return this.each(tS)}function iS(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function rS(){return this.each(iS)}function sS(i){var e=typeof i=="function"?i:td(i);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function aS(){return null}function oS(i,e){var t=typeof i=="function"?i:td(i),n=e==null?aS:typeof e=="function"?e:Nl(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})}function lS(){var i=this.parentNode;i&&i.removeChild(this)}function cS(){return this.each(lS)}function uS(){var i=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function fS(){var i=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function hS(i){return this.select(i?fS:uS)}function dS(i){return arguments.length?this.property("__data__",i):this.node().__data__}function pS(i){return function(e){i.call(this,e,this.__data__)}}function mS(i){return i.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function gS(i){return function(){var e=this.__on;if(e){for(var t=0,n=-1,r=e.length,s;t<r;++t)s=e[t],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):e[++n]=s;++n?e.length=n:delete this.__on}}}function _S(i,e,t){return function(){var n=this.__on,r,s=pS(e);if(n){for(var a=0,o=n.length;a<o;++a)if((r=n[a]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=t),r.value=e;return}}this.addEventListener(i.type,s,t),r={type:i.type,name:i.name,value:e,listener:s,options:t},n?n.push(r):this.__on=[r]}}function vS(i,e,t){var n=mS(i+""),r,s=n.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=n[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=e?_S:gS,r=0;r<s;++r)this.each(o(n[r],e,t));return this}function fd(i,e,t){var n=ad(i),r=n.CustomEvent;typeof r=="function"?r=new r(e,t):(r=n.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),i.dispatchEvent(r)}function xS(i,e){return function(){return fd(this,i,e)}}function yS(i,e){return function(){return fd(this,i,e.apply(this,arguments))}}function MS(i,e){return this.each((typeof e=="function"?yS:xS)(i,e))}function*ES(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var n=i[e],r=0,s=n.length,a;r<s;++r)(a=n[r])&&(yield a)}var hd=[null];function fn(i,e){this._groups=i,this._parents=e}function ws(){return new fn([[document.documentElement]],hd)}function SS(){return this}fn.prototype=ws.prototype={constructor:fn,select:KM,selectAll:$M,selectChild:iE,selectChildren:oE,filter:lE,data:pE,enter:cE,exit:gE,join:_E,merge:vE,selection:SS,order:xE,sort:yE,call:EE,nodes:SE,node:bE,size:TE,empty:AE,each:wE,attr:NE,style:kE,property:GE,classed:qE,text:ZE,html:eS,raise:nS,lower:rS,append:sS,insert:oS,remove:cS,clone:hS,datum:dS,on:vS,dispatch:MS,[Symbol.iterator]:ES};function bS(i){return typeof i=="string"?new fn([[document.querySelector(i)]],[document.documentElement]):new fn([[i]],hd)}function Ol(i,e,t){i.prototype=e.prototype=t,t.constructor=i}function dd(i,e){var t=Object.create(i.prototype);for(var n in e)t[n]=e[n];return t}function Rs(){}var vs=.7,ba=1/vs,Sr="\\s*([+-]?\\d+)\\s*",xs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",TS=/^#([0-9a-f]{3,8})$/,AS=new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`),wS=new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`),RS=new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${xs}\\)$`),CS=new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${xs}\\)$`),LS=new RegExp(`^hsl\\(${xs},${Wn},${Wn}\\)$`),IS=new RegExp(`^hsla\\(${xs},${Wn},${Wn},${xs}\\)$`),gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ol(Rs,ys,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:_f,formatHex:_f,formatHex8:DS,formatHsl:PS,formatRgb:vf,toString:vf});function _f(){return this.rgb().formatHex()}function DS(){return this.rgb().formatHex8()}function PS(){return pd(this).formatHsl()}function vf(){return this.rgb().formatRgb()}function ys(i){var e,t;return i=(i+"").trim().toLowerCase(),(e=TS.exec(i))?(t=e[1].length,e=parseInt(e[1],16),t===6?xf(e):t===3?new rn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?oa(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?oa(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=AS.exec(i))?new rn(e[1],e[2],e[3],1):(e=wS.exec(i))?new rn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=RS.exec(i))?oa(e[1],e[2],e[3],e[4]):(e=CS.exec(i))?oa(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=LS.exec(i))?Ef(e[1],e[2]/100,e[3]/100,1):(e=IS.exec(i))?Ef(e[1],e[2]/100,e[3]/100,e[4]):gf.hasOwnProperty(i)?xf(gf[i]):i==="transparent"?new rn(NaN,NaN,NaN,0):null}function xf(i){return new rn(i>>16&255,i>>8&255,i&255,1)}function oa(i,e,t,n){return n<=0&&(i=e=t=NaN),new rn(i,e,t,n)}function NS(i){return i instanceof Rs||(i=ys(i)),i?(i=i.rgb(),new rn(i.r,i.g,i.b,i.opacity)):new rn}function tl(i,e,t,n){return arguments.length===1?NS(i):new rn(i,e,t,n??1)}function rn(i,e,t,n){this.r=+i,this.g=+e,this.b=+t,this.opacity=+n}Ol(rn,tl,dd(Rs,{brighter(i){return i=i==null?ba:Math.pow(ba,i),new rn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?vs:Math.pow(vs,i),new rn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new rn(Bi(this.r),Bi(this.g),Bi(this.b),Ta(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:yf,formatHex:yf,formatHex8:US,formatRgb:Mf,toString:Mf}));function yf(){return`#${Ni(this.r)}${Ni(this.g)}${Ni(this.b)}`}function US(){return`#${Ni(this.r)}${Ni(this.g)}${Ni(this.b)}${Ni((isNaN(this.opacity)?1:this.opacity)*255)}`}function Mf(){const i=Ta(this.opacity);return`${i===1?"rgb(":"rgba("}${Bi(this.r)}, ${Bi(this.g)}, ${Bi(this.b)}${i===1?")":`, ${i})`}`}function Ta(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Bi(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Ni(i){return i=Bi(i),(i<16?"0":"")+i.toString(16)}function Ef(i,e,t,n){return n<=0?i=e=t=NaN:t<=0||t>=1?i=e=NaN:e<=0&&(i=NaN),new Ln(i,e,t,n)}function pd(i){if(i instanceof Ln)return new Ln(i.h,i.s,i.l,i.opacity);if(i instanceof Rs||(i=ys(i)),!i)return new Ln;if(i instanceof Ln)return i;i=i.rgb();var e=i.r/255,t=i.g/255,n=i.b/255,r=Math.min(e,t,n),s=Math.max(e,t,n),a=NaN,o=s-r,l=(s+r)/2;return o?(e===s?a=(t-n)/o+(t<n)*6:t===s?a=(n-e)/o+2:a=(e-t)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new Ln(a,o,l,i.opacity)}function OS(i,e,t,n){return arguments.length===1?pd(i):new Ln(i,e,t,n??1)}function Ln(i,e,t,n){this.h=+i,this.s=+e,this.l=+t,this.opacity=+n}Ol(Ln,OS,dd(Rs,{brighter(i){return i=i==null?ba:Math.pow(ba,i),new Ln(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?vs:Math.pow(vs,i),new Ln(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,e=isNaN(i)||isNaN(this.s)?0:this.s,t=this.l,n=t+(t<.5?t:1-t)*e,r=2*t-n;return new rn(No(i>=240?i-240:i+120,r,n),No(i,r,n),No(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new Ln(Sf(this.h),la(this.s),la(this.l),Ta(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Ta(this.opacity);return`${i===1?"hsl(":"hsla("}${Sf(this.h)}, ${la(this.s)*100}%, ${la(this.l)*100}%${i===1?")":`, ${i})`}`}}));function Sf(i){return i=(i||0)%360,i<0?i+360:i}function la(i){return Math.max(0,Math.min(1,i||0))}function No(i,e,t){return(i<60?e+(t-e)*i/60:i<180?t:i<240?e+(t-e)*(240-i)/60:e)*255}const md=i=>()=>i;function FS(i,e){return function(t){return i+t*e}}function kS(i,e,t){return i=Math.pow(i,t),e=Math.pow(e,t)-i,t=1/t,function(n){return Math.pow(i+n*e,t)}}function BS(i){return(i=+i)==1?gd:function(e,t){return t-e?kS(e,t,i):md(isNaN(e)?t:e)}}function gd(i,e){var t=e-i;return t?FS(i,t):md(isNaN(i)?e:i)}const bf=function i(e){var t=BS(e);function n(r,s){var a=t((r=tl(r)).r,(s=tl(s)).r),o=t(r.g,s.g),l=t(r.b,s.b),c=gd(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return n.gamma=i,n}(1);function vi(i,e){return i=+i,e=+e,function(t){return i*(1-t)+e*t}}var nl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Uo=new RegExp(nl.source,"g");function HS(i){return function(){return i}}function zS(i){return function(e){return i(e)+""}}function GS(i,e){var t=nl.lastIndex=Uo.lastIndex=0,n,r,s,a=-1,o=[],l=[];for(i=i+"",e=e+"";(n=nl.exec(i))&&(r=Uo.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),o[a]?o[a]+=s:o[++a]=s),(n=n[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:vi(n,r)})),t=Uo.lastIndex;return t<e.length&&(s=e.slice(t),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?zS(l[0].x):HS(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)o[(f=l[u]).i]=f.x(c);return o.join("")})}var Tf=180/Math.PI,il={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _d(i,e,t,n,r,s){var a,o,l;return(a=Math.sqrt(i*i+e*e))&&(i/=a,e/=a),(l=i*t+e*n)&&(t-=i*l,n-=e*l),(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o,l/=o),i*n<e*t&&(i=-i,e=-e,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(e,i)*Tf,skewX:Math.atan(l)*Tf,scaleX:a,scaleY:o}}var ca;function VS(i){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return e.isIdentity?il:_d(e.a,e.b,e.c,e.d,e.e,e.f)}function WS(i){return i==null||(ca||(ca=document.createElementNS("http://www.w3.org/2000/svg","g")),ca.setAttribute("transform",i),!(i=ca.transform.baseVal.consolidate()))?il:(i=i.matrix,_d(i.a,i.b,i.c,i.d,i.e,i.f))}function vd(i,e,t,n){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,h,d,g){if(c!==f||u!==h){var _=d.push("translate(",null,e,null,t);g.push({i:_-4,x:vi(c,f)},{i:_-2,x:vi(u,h)})}else(f||h)&&d.push("translate("+f+e+h+t)}function a(c,u,f,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:f.push(r(f)+"rotate(",null,n)-2,x:vi(c,u)})):u&&f.push(r(f)+"rotate("+u+n)}function o(c,u,f,h){c!==u?h.push({i:f.push(r(f)+"skewX(",null,n)-2,x:vi(c,u)}):u&&f.push(r(f)+"skewX("+u+n)}function l(c,u,f,h,d,g){if(c!==f||u!==h){var _=d.push(r(d)+"scale(",null,",",null,")");g.push({i:_-4,x:vi(c,f)},{i:_-2,x:vi(u,h)})}else(f!==1||h!==1)&&d.push(r(d)+"scale("+f+","+h+")")}return function(c,u){var f=[],h=[];return c=i(c),u=i(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,h),a(c.rotate,u.rotate,f,h),o(c.skewX,u.skewX,f,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,h),c=u=null,function(d){for(var g=-1,_=h.length,m;++g<_;)f[(m=h[g]).i]=m.x(d);return f.join("")}}}var XS=vd(VS,"px, ","px)","deg)"),qS=vd(WS,", ",")",")"),Pr=0,ts=0,Zr=0,xd=1e3,Aa,ns,wa=0,qi=0,Va=0,Ms=typeof performance=="object"&&performance.now?performance:Date,yd=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Fl(){return qi||(yd(jS),qi=Ms.now()+Va)}function jS(){qi=0}function Ra(){this._call=this._time=this._next=null}Ra.prototype=Md.prototype={constructor:Ra,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?Fl():+t)+(e==null?0:+e),!this._next&&ns!==this&&(ns?ns._next=this:Aa=this,ns=this),this._call=i,this._time=t,rl()},stop:function(){this._call&&(this._call=null,this._time=1/0,rl())}};function Md(i,e,t){var n=new Ra;return n.restart(i,e,t),n}function YS(){Fl(),++Pr;for(var i=Aa,e;i;)(e=qi-i._time)>=0&&i._call.call(void 0,e),i=i._next;--Pr}function Af(){qi=(wa=Ms.now())+Va,Pr=ts=0;try{YS()}finally{Pr=0,ZS(),qi=0}}function KS(){var i=Ms.now(),e=i-wa;e>xd&&(Va-=e,wa=i)}function ZS(){for(var i,e=Aa,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:Aa=t);ns=i,rl(n)}function rl(i){if(!Pr){ts&&(ts=clearTimeout(ts));var e=i-qi;e>24?(i<1/0&&(ts=setTimeout(Af,i-Ms.now()-Va)),Zr&&(Zr=clearInterval(Zr))):(Zr||(wa=Ms.now(),Zr=setInterval(KS,xd)),Pr=1,yd(Af))}}function sl(i,e,t){var n=new Ra;return e=e==null?0:+e,n.restart(r=>{n.stop(),i(r+e)},e,t),n}var JS=ed("start","end","cancel","interrupt"),QS=[],Ed=0,wf=1,al=2,pa=3,Rf=4,ol=5,ma=6;function Wa(i,e,t,n,r,s){var a=i.__transition;if(!a)i.__transition={};else if(t in a)return;$S(i,t,{name:e,index:n,group:r,on:JS,tween:QS,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Ed})}function kl(i,e){var t=Fn(i,e);if(t.state>Ed)throw new Error("too late; already scheduled");return t}function Yn(i,e){var t=Fn(i,e);if(t.state>pa)throw new Error("too late; already running");return t}function Fn(i,e){var t=i.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function $S(i,e,t){var n=i.__transition,r;n[e]=t,t.timer=Md(s,0,t.time);function s(c){t.state=wf,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,f,h,d;if(t.state!==wf)return l();for(u in n)if(d=n[u],d.name===t.name){if(d.state===pa)return sl(a);d.state===Rf?(d.state=ma,d.timer.stop(),d.on.call("interrupt",i,i.__data__,d.index,d.group),delete n[u]):+u<e&&(d.state=ma,d.timer.stop(),d.on.call("cancel",i,i.__data__,d.index,d.group),delete n[u])}if(sl(function(){t.state===pa&&(t.state=Rf,t.timer.restart(o,t.delay,t.time),o(c))}),t.state=al,t.on.call("start",i,i.__data__,t.index,t.group),t.state===al){for(t.state=pa,r=new Array(h=t.tween.length),u=0,f=-1;u<h;++u)(d=t.tween[u].value.call(i,i.__data__,t.index,t.group))&&(r[++f]=d);r.length=f+1}}function o(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=ol,1),f=-1,h=r.length;++f<h;)r[f].call(i,u);t.state===ol&&(t.on.call("end",i,i.__data__,t.index,t.group),l())}function l(){t.state=ma,t.timer.stop(),delete n[e];for(var c in n)return;delete i.__transition}}function eb(i,e){var t=i.__transition,n,r,s=!0,a;if(t){e=e==null?null:e+"";for(a in t){if((n=t[a]).name!==e){s=!1;continue}r=n.state>al&&n.state<ol,n.state=ma,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete t[a]}s&&delete i.__transition}}function tb(i){return this.each(function(){eb(this,i)})}function nb(i,e){var t,n;return function(){var r=Yn(this,i),s=r.tween;if(s!==t){n=t=s;for(var a=0,o=n.length;a<o;++a)if(n[a].name===e){n=n.slice(),n.splice(a,1);break}}r.tween=n}}function ib(i,e,t){var n,r;if(typeof t!="function")throw new Error;return function(){var s=Yn(this,i),a=s.tween;if(a!==n){r=(n=a).slice();for(var o={name:e,value:t},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function rb(i,e){var t=this._id;if(i+="",arguments.length<2){for(var n=Fn(this.node(),t).tween,r=0,s=n.length,a;r<s;++r)if((a=n[r]).name===i)return a.value;return null}return this.each((e==null?nb:ib)(t,i,e))}function Bl(i,e,t){var n=i._id;return i.each(function(){var r=Yn(this,n);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return Fn(r,n).value[e]}}function Sd(i,e){var t;return(typeof e=="number"?vi:e instanceof ys?bf:(t=ys(e))?(e=t,bf):GS)(i,e)}function sb(i){return function(){this.removeAttribute(i)}}function ab(i){return function(){this.removeAttributeNS(i.space,i.local)}}function ob(i,e,t){var n,r=t+"",s;return function(){var a=this.getAttribute(i);return a===r?null:a===n?s:s=e(n=a,t)}}function lb(i,e,t){var n,r=t+"",s;return function(){var a=this.getAttributeNS(i.space,i.local);return a===r?null:a===n?s:s=e(n=a,t)}}function cb(i,e,t){var n,r,s;return function(){var a,o=t(this),l;return o==null?void this.removeAttribute(i):(a=this.getAttribute(i),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=e(n=a,o)))}}function ub(i,e,t){var n,r,s;return function(){var a,o=t(this),l;return o==null?void this.removeAttributeNS(i.space,i.local):(a=this.getAttributeNS(i.space,i.local),l=o+"",a===l?null:a===n&&l===r?s:(r=l,s=e(n=a,o)))}}function fb(i,e){var t=Ga(i),n=t==="transform"?qS:Sd;return this.attrTween(i,typeof e=="function"?(t.local?ub:cb)(t,n,Bl(this,"attr."+i,e)):e==null?(t.local?ab:sb)(t):(t.local?lb:ob)(t,n,e))}function hb(i,e){return function(t){this.setAttribute(i,e.call(this,t))}}function db(i,e){return function(t){this.setAttributeNS(i.space,i.local,e.call(this,t))}}function pb(i,e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&db(i,s)),t}return r._value=e,r}function mb(i,e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&hb(i,s)),t}return r._value=e,r}function gb(i,e){var t="attr."+i;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var n=Ga(i);return this.tween(t,(n.local?pb:mb)(n,e))}function _b(i,e){return function(){kl(this,i).delay=+e.apply(this,arguments)}}function vb(i,e){return e=+e,function(){kl(this,i).delay=e}}function xb(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?_b:vb)(e,i)):Fn(this.node(),e).delay}function yb(i,e){return function(){Yn(this,i).duration=+e.apply(this,arguments)}}function Mb(i,e){return e=+e,function(){Yn(this,i).duration=e}}function Eb(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?yb:Mb)(e,i)):Fn(this.node(),e).duration}function Sb(i,e){if(typeof e!="function")throw new Error;return function(){Yn(this,i).ease=e}}function bb(i){var e=this._id;return arguments.length?this.each(Sb(e,i)):Fn(this.node(),e).ease}function Tb(i,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;Yn(this,i).ease=t}}function Ab(i){if(typeof i!="function")throw new Error;return this.each(Tb(this._id,i))}function wb(i){typeof i!="function"&&(i=id(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=n[r]=[],l,c=0;c<a;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&o.push(l);return new li(n,this._parents,this._name,this._id)}function Rb(i){if(i._id!==this._id)throw new Error;for(var e=this._groups,t=i._groups,n=e.length,r=t.length,s=Math.min(n,r),a=new Array(n),o=0;o<s;++o)for(var l=e[o],c=t[o],u=l.length,f=a[o]=new Array(u),h,d=0;d<u;++d)(h=l[d]||c[d])&&(f[d]=h);for(;o<n;++o)a[o]=e[o];return new li(a,this._parents,this._name,this._id)}function Cb(i){return(i+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function Lb(i,e,t){var n,r,s=Cb(e)?kl:Yn;return function(){var a=s(this,i),o=a.on;o!==n&&(r=(n=o).copy()).on(e,t),a.on=r}}function Ib(i,e){var t=this._id;return arguments.length<2?Fn(this.node(),t).on.on(i):this.each(Lb(t,i,e))}function Db(i){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==i)return;e&&e.removeChild(this)}}function Pb(){return this.on("end.remove",Db(this._id))}function Nb(i){var e=this._name,t=this._id;typeof i!="function"&&(i=Nl(i));for(var n=this._groups,r=n.length,s=new Array(r),a=0;a<r;++a)for(var o=n[a],l=o.length,c=s[a]=new Array(l),u,f,h=0;h<l;++h)(u=o[h])&&(f=i.call(u,u.__data__,h,o))&&("__data__"in u&&(f.__data__=u.__data__),c[h]=f,Wa(c[h],e,t,h,c,Fn(u,t)));return new li(s,this._parents,e,t)}function Ub(i){var e=this._name,t=this._id;typeof i!="function"&&(i=nd(i));for(var n=this._groups,r=n.length,s=[],a=[],o=0;o<r;++o)for(var l=n[o],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var h=i.call(u,u.__data__,f,l),d,g=Fn(u,t),_=0,m=h.length;_<m;++_)(d=h[_])&&Wa(d,e,t,_,h,g);s.push(h),a.push(u)}return new li(s,a,e,t)}var Ob=ws.prototype.constructor;function Fb(){return new Ob(this._groups,this._parents)}function kb(i,e){var t,n,r;return function(){var s=Dr(this,i),a=(this.style.removeProperty(i),Dr(this,i));return s===a?null:s===t&&a===n?r:r=e(t=s,n=a)}}function bd(i){return function(){this.style.removeProperty(i)}}function Bb(i,e,t){var n,r=t+"",s;return function(){var a=Dr(this,i);return a===r?null:a===n?s:s=e(n=a,t)}}function Hb(i,e,t){var n,r,s;return function(){var a=Dr(this,i),o=t(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(i),Dr(this,i))),a===l?null:a===n&&l===r?s:(r=l,s=e(n=a,o))}}function zb(i,e){var t,n,r,s="style."+e,a="end."+s,o;return function(){var l=Yn(this,i),c=l.on,u=l.value[s]==null?o||(o=bd(e)):void 0;(c!==t||r!==u)&&(n=(t=c).copy()).on(a,r=u),l.on=n}}function Gb(i,e,t){var n=(i+="")=="transform"?XS:Sd;return e==null?this.styleTween(i,kb(i,n)).on("end.style."+i,bd(i)):typeof e=="function"?this.styleTween(i,Hb(i,n,Bl(this,"style."+i,e))).each(zb(this._id,i)):this.styleTween(i,Bb(i,n,e),t).on("end.style."+i,null)}function Vb(i,e,t){return function(n){this.style.setProperty(i,e.call(this,n),t)}}function Wb(i,e,t){var n,r;function s(){var a=e.apply(this,arguments);return a!==r&&(n=(r=a)&&Vb(i,a,t)),n}return s._value=e,s}function Xb(i,e,t){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,Wb(i,e,t??""))}function qb(i){return function(){this.textContent=i}}function jb(i){return function(){var e=i(this);this.textContent=e??""}}function Yb(i){return this.tween("text",typeof i=="function"?jb(Bl(this,"text",i)):qb(i==null?"":i+""))}function Kb(i){return function(e){this.textContent=i.call(this,e)}}function Zb(i){var e,t;function n(){var r=i.apply(this,arguments);return r!==t&&(e=(t=r)&&Kb(r)),e}return n._value=i,n}function Jb(i){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(i==null)return this.tween(e,null);if(typeof i!="function")throw new Error;return this.tween(e,Zb(i))}function Qb(){for(var i=this._name,e=this._id,t=Td(),n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=Fn(l,e);Wa(l,i,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new li(n,this._parents,i,t)}function $b(){var i,e,t=this,n=t._id,r=t.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};t.each(function(){var c=Yn(this,n),u=c.on;u!==i&&(e=(i=u).copy(),e._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),c.on=e}),r===0&&s()})}var eT=0;function li(i,e,t,n){this._groups=i,this._parents=e,this._name=t,this._id=n}function Td(){return++eT}var ni=ws.prototype;li.prototype={constructor:li,select:Nb,selectAll:Ub,selectChild:ni.selectChild,selectChildren:ni.selectChildren,filter:wb,merge:Rb,selection:Fb,transition:Qb,call:ni.call,nodes:ni.nodes,node:ni.node,size:ni.size,empty:ni.empty,each:ni.each,on:Ib,attr:fb,attrTween:gb,style:Gb,styleTween:Xb,text:Yb,textTween:Jb,remove:Pb,tween:rb,delay:xb,duration:Eb,ease:bb,easeVarying:Ab,end:$b,[Symbol.iterator]:ni[Symbol.iterator]};function tT(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var nT={time:null,delay:0,duration:250,ease:tT};function iT(i,e){for(var t;!(t=i.__transition)||!(t=t[e]);)if(!(i=i.parentNode))throw new Error(`transition ${e} not found`);return t}function rT(i){var e,t;i instanceof li?(e=i._id,i=i._name):(e=Td(),(t=nT).time=Fl(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var a=n[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Wa(l,i,e,c,a,t||iT(l,e));return new li(n,this._parents,i,e)}ws.prototype.interrupt=tb;ws.prototype.transition=rT;function is(i,e,t){this.k=i,this.x=e,this.y=t}is.prototype={constructor:is,scale:function(i){return i===1?this:new is(this.k*i,this.x,this.y)},translate:function(i,e){return i===0&e===0?this:new is(this.k,this.x+this.k*i,this.y+this.k*e)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};is.prototype;function sT(i){let e,t;return{c(){e=te("span"),t=it(i[0]),this.h()},l(n){e=ne(n,"SPAN",{class:!0});var r=ae(e);t=rt(r,i[0]),r.forEach(U),this.h()},h(){H(e,"class","svelte-2364du")},m(n,r){fe(n,e,r),Y(e,t)},p(n,r){r&1&&Rt(t,n[0])},d(n){n&&U(e)}}}function aT(i){let e,t,n,r,s,a;const o=i[17].default,l=Da(o,i,i[16],null),c=l||sT(i);return{c(){e=te("div"),t=_a("svg"),n=_a("path"),r=Ee(),c&&c.c(),this.h()},l(u){e=ne(u,"DIV",{class:!0});var f=ae(e);t=va(f,"svg",{id:!0,viewBox:!0,class:!0});var h=ae(t);n=va(h,"path",{d:!0,class:!0}),ae(n).forEach(U),h.forEach(U),r=Se(f),c&&c.l(f),f.forEach(U),this.h()},h(){H(n,"d","M50,5A45 45 0 1 1 49.9999 5"),H(n,"class","svelte-2364du"),H(t,"id","svg_container"+i[1]),H(t,"viewBox","0 0 100 100"),H(t,"class","svelte-2364du"),H(e,"class",s=vn(`progress-circle-gradient ${i[2].class||""}`)+" svelte-2364du")},m(u,f){fe(u,e,f),Y(e,t),Y(t,n),Y(e,r),c&&c.m(e,null),a=!0},p(u,[f]){l?l.p&&(!a||f&65536)&&Pa(l,o,u,u[16],a?Ua(o,u[16],f,null):Na(u[16]),null):c&&c.p&&(!a||f&1)&&c.p(u,a?f:-1),(!a||f&4&&s!==(s=vn(`progress-circle-gradient ${u[2].class||""}`)+" svelte-2364du"))&&H(e,"class",s)},i(u){a||(ee(c,u),a=!0)},o(u){ce(c,u),a=!1},d(u){u&&U(e),c&&c.d(u)}}}function oT(i,e){const t=Math.PI*2*(i/e),n=50+Math.cos(t-Math.PI/2)*45,r=50+Math.sin(t-Math.PI/2)*45;let s="M50,5";return t>Math.PI&&(s+="A45 45 0 0 1 50 95"),s+=`A45 45 0 0 1 ${n} ${r}`,s}function lT(i,e,t){let n,r,{$$slots:s={},$$scope:a}=e,{value:o=0}=e,{max:l=100}=e,{y2:c="0"}=e,{gradientTransform:u=""}=e,{width:f="5px"}=e,{text:h=""}=e,{isVerticalGradient:d=!1}=e,{gradientStartColor:g}=e,{gradientStopColor:_}=e,{gradientStartOffset:m}=e,{gradientStopOffset:p}=e;const y=`${Date.now()}${gy(0,1e3)}`;let M=!1;ji(()=>{t(13,M=!0)});function S(){var w;const x=bS(`#svg_container${y}`);x.selectAll(`#progress_Path${y}`).remove(),(w=x.select(`#progress_Path_overlap${y}`))==null||w.remove(),x.select(`#svg_defs${y}`).remove();const N=x.append("defs").attr("id",`svg_defs${y}`).append("linearGradient").attr("id",`svgGradient_${y}`).attr("x1",d?"0":"1").attr("x2","0").attr("y1",d?"1":"0").attr("y2",c).attr("gradientTransform",u);N.append("stop").attr("class","start").attr("offset",m).attr("stop-color",g).attr("stop-opacity",1),N.append("stop").attr("class","end").attr("offset",p).attr("stop-color",_).attr("stop-opacity",1),x.append("path").attr("id",`progress_Path${y}`).attr("d",oT(n,r)).attr("stroke",`url(#svgGradient_${y})`).attr("fill","none").attr("stroke-width",f)}return i.$$set=x=>{t(2,e=Un(Un({},e),ai(x))),"value"in x&&t(3,o=x.value),"max"in x&&t(4,l=x.max),"y2"in x&&t(5,c=x.y2),"gradientTransform"in x&&t(6,u=x.gradientTransform),"width"in x&&t(7,f=x.width),"text"in x&&t(0,h=x.text),"isVerticalGradient"in x&&t(8,d=x.isVerticalGradient),"gradientStartColor"in x&&t(9,g=x.gradientStartColor),"gradientStopColor"in x&&t(10,_=x.gradientStopColor),"gradientStartOffset"in x&&t(11,m=x.gradientStartOffset),"gradientStopOffset"in x&&t(12,p=x.gradientStopOffset),"$$scope"in x&&t(16,a=x.$$scope)},i.$$.update=()=>{i.$$.dirty&24&&t(15,n=o<0?0:o>l?l:o),i.$$.dirty&16&&t(14,r=l>0?l:1),i.$$.dirty&57344&&M&&r&&n>=0&&S()},e=ai(e),[h,y,e,o,l,c,u,f,d,g,_,m,p,M,r,n,a,s]}class cT extends bt{constructor(e){super(),Tt(this,e,lT,aT,St,{value:3,max:4,y2:5,gradientTransform:6,width:7,text:0,isVerticalGradient:8,gradientStartColor:9,gradientStopColor:10,gradientStartOffset:11,gradientStopOffset:12})}}function Cf(i,e,t){const n=i.slice();return n[8]=e[t].goal,n[9]=e[t].value,n[11]=t,n}function Lf(i){let e,t;const n=i[5].default,r=Da(n,i,i[7],null);return{c(){e=te("div"),r&&r.c(),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);r&&r.l(a),a.forEach(U),this.h()},h(){H(e,"class","report-circles-progress__content svelte-1nlcqeu")},m(s,a){fe(s,e,a),r&&r.m(e,null),t=!0},p(s,a){r&&r.p&&(!t||a&128)&&Pa(r,n,s,s[7],t?Ua(n,s[7],a,null):Na(s[7]),null)},i(s){t||(ee(r,s),t=!0)},o(s){ce(r,s),t=!1},d(s){s&&U(e),r&&r.d(s)}}}function uT(i){let e,t,n=i[11]===i[0].length-1&&Lf(i);return{c(){n&&n.c(),e=wt()},l(r){n&&n.l(r),e=wt()},m(r,s){n&&n.m(r,s),fe(r,e,s),t=!0},p(r,s){r[11]===r[0].length-1?n?(n.p(r,s),s&1&&ee(n,1)):(n=Lf(r),n.c(),ee(n,1),n.m(e.parentNode,e)):n&&(_t(),ce(n,1,1,()=>{n=null}),vt())},i(r){t||(ee(n),t=!0)},o(r){ce(n),t=!1},d(r){r&&U(e),n&&n.d(r)}}}function If(i,e){let t,n,r,s,a;return n=new cT({props:{class:`report-circles-progress__circle${e[11]+1}`,gradientStartOffset:"0%",gradientStopOffset:`${e[9]/e[8]>.5?20:40}%`,gradientStartColor:e[2][e[11]].startColor,gradientStopColor:e[2][e[11]].endColor,max:e[8],value:e[9],y2:"4",gradientTransform:`rotate(${e[9]/e[8]>.5?-10:-105})`,width:e[3](e[11])+"px",$$slots:{default:[uT]},$$scope:{ctx:e}}}),{key:i,first:null,c(){t=te("div"),Le(n.$$.fragment),r=Ee(),this.h()},l(o){t=ne(o,"DIV",{class:!0,style:!0});var l=ae(t);Ne(n.$$.fragment,l),r=Se(l),l.forEach(U),this.h()},h(){H(t,"class","fit-height"),H(t,"style",s=`--progress-trackwidth: ${e[3](e[11])}px; --progress-trackcolor: ${e[2][e[11]].trackColor};`),this.first=t},m(o,l){fe(o,t,l),Ie(n,t,null),Y(t,r),a=!0},p(o,l){e=o;const c={};l&1&&(c.class=`report-circles-progress__circle${e[11]+1}`),l&1&&(c.gradientStopOffset=`${e[9]/e[8]>.5?20:40}%`),l&1&&(c.gradientStartColor=e[2][e[11]].startColor),l&1&&(c.gradientStopColor=e[2][e[11]].endColor),l&1&&(c.max=e[8]),l&1&&(c.value=e[9]),l&1&&(c.gradientTransform=`rotate(${e[9]/e[8]>.5?-10:-105})`),l&1&&(c.width=e[3](e[11])+"px"),l&129&&(c.$$scope={dirty:l,ctx:e}),n.$set(c),(!a||l&1&&s!==(s=`--progress-trackwidth: ${e[3](e[11])}px; --progress-trackcolor: ${e[2][e[11]].trackColor};`))&&H(t,"style",s)},i(o){a||(ee(n.$$.fragment,o),a=!0)},o(o){ce(n.$$.fragment,o),a=!1},d(o){o&&U(t),De(n)}}}function fT(i){let e,t=[],n=new Map,r,s,a,o,l=xn(i[0]);const c=u=>u[11];for(let u=0;u<l.length;u+=1){let f=Cf(i,l,u),h=c(f);n.set(h,t[u]=If(h,f))}return{c(){e=te("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=ne(u,"DIV",{class:!0,"aria-hidden":!0});var f=ae(e);for(let h=0;h<t.length;h+=1)t[h].l(f);f.forEach(U),this.h()},h(){H(e,"class",r=vn(`mt-1 report-circles-progress ${i[4].class||""}`)+" svelte-1nlcqeu"),H(e,"aria-hidden","true")},m(u,f){fe(u,e,f);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,null);s=!0,a||(o=Nn(e,"click",i[6]),a=!0)},p(u,[f]){f&141&&(l=xn(u[0]),_t(),t=dl(t,f,c,1,u,l,n,e,pl,If,null,Cf),vt()),(!s||f&16&&r!==(r=vn(`mt-1 report-circles-progress ${u[4].class||""}`)+" svelte-1nlcqeu"))&&H(e,"class",r)},i(u){if(!s){for(let f=0;f<l.length;f+=1)ee(t[f]);s=!0}},o(u){for(let f=0;f<t.length;f+=1)ce(t[f]);s=!1},d(u){u&&U(e);for(let f=0;f<t.length;f+=1)t[f].d();a=!1,o()}}}function hT(i,e,t){let{$$slots:n={},$$scope:r}=e,{circles:s=_y()}=e;const a=Nr(),o=[{startColor:"#b43d63",endColor:"#fe3083",trackColor:"#fff0f5"},{startColor:"#26037e",endColor:"#6036c9",trackColor:"#f4f3ff"},{startColor:"#002669",endColor:"#53b9f2",trackColor:"#def3ff"}],l=u=>7+2*u,c=()=>a("click");return i.$$set=u=>{t(4,e=Un(Un({},e),ai(u))),"circles"in u&&t(0,s=u.circles),"$$scope"in u&&t(7,r=u.$$scope)},e=ai(e),[s,a,o,l,e,n,c,r]}class dT extends bt{constructor(e){super(),Tt(this,e,hT,fT,St,{circles:0})}}/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var un={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},wn={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Jr={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pT=function(i){Gd(e,i);function e(t){var n=i.call(this,Kl(Kl({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return un},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(un.INDETERMINATE_CLASS),this.adapter.addClass(un.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var r,s;if(!t.determinate)try{for(var a=Vd(n),o=a.next();!o.done;o=a.next()){var l=o.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(c){r={error:c}}finally{try{o&&!o.done&&(s=a.return)&&s.call(a)}finally{if(r)throw r.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(un.INDETERMINATE_CLASS),this.adapter.setAttribute(wn.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(wn.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(wn.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(un.INDETERMINATE_CLASS),this.adapter.removeAttribute(wn.ARIA_VALUENOW),this.adapter.removeAttribute(wn.ARIA_VALUEMAX),this.adapter.removeAttribute(wn.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(wn.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(un.CLOSED_CLASS),this.adapter.removeClass(un.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(wn.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(un.CLOSED_CLASS),this.adapter.setAttribute(wn.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(un.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(un.CLOSED_CLASS)&&this.adapter.addClass(un.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(un.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(un.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",r=typeof window<"u"?sp(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(r,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(wn.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*Jr.PRIMARY_HALF,r=t*Jr.PRIMARY_FULL,s=t*Jr.SECONDARY_QUARTER,a=t*Jr.SECONDARY_HALF,o=t*Jr.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(Wd);function mT(i){let e,t,n,r,s,a,o,l,c,u,f,h,d='<span class="mdc-linear-progress__bar-inner"></span>',g,_,m,p,y,M,S,x,b=[{class:g=Zl({[i[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":i[3],"mdc-linear-progress--closed":i[4],"mdc-data-table__linear-progress":i[14]==="data-table",...i[8]})},{style:_=Object.entries(i[10]).map(Nf).concat([i[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":m=0},{"aria-valuemax":p=1},{"aria-valuenow":y=i[3]?void 0:i[5]},i[9],i[16]],N={};for(let w=0;w<b.length;w+=1)N=Un(N,b[w]);return{c(){e=te("div"),t=te("div"),n=te("div"),s=Ee(),a=te("div"),o=Ee(),l=te("div"),c=te("span"),f=Ee(),h=te("div"),h.innerHTML=d,this.h()},l(w){e=ne(w,"DIV",{class:!0,style:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var v=ae(e);t=ne(v,"DIV",{class:!0});var E=ae(t);n=ne(E,"DIV",{class:!0,style:!0}),ae(n).forEach(U),s=Se(E),a=ne(E,"DIV",{class:!0}),ae(a).forEach(U),E.forEach(U),o=Se(v),l=ne(v,"DIV",{class:!0,style:!0});var I=ae(l);c=ne(I,"SPAN",{class:!0}),ae(c).forEach(U),I.forEach(U),f=Se(v),h=ne(v,"DIV",{class:!0,"data-svelte-h":!0}),Es(h)!=="svelte-4eyba6"&&(h.innerHTML=d),v.forEach(U),this.h()},h(){H(n,"class","mdc-linear-progress__buffer-bar"),H(n,"style",r=Object.entries(i[11]).map(Df).join(" ")),H(a,"class","mdc-linear-progress__buffer-dots"),H(t,"class","mdc-linear-progress__buffer"),H(c,"class","mdc-linear-progress__bar-inner"),H(l,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),H(l,"style",u=Object.entries(i[12]).map(Pf).join(" ")),H(h,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),Wl(e,N)},m(w,v){fe(w,e,v),Y(e,t),Y(t,n),Y(t,s),Y(t,a),Y(e,o),Y(e,l),Y(l,c),Y(e,f),Y(e,h),i[19](e),S||(x=[Xl(M=Xd.call(null,e,i[0])),Xl(i[13].call(null,e)),Nn(e,"transitionend",i[20])],S=!0)},p(w,[v]){v&2048&&r!==(r=Object.entries(w[11]).map(Df).join(" "))&&H(n,"style",r),v&4096&&u!==(u=Object.entries(w[12]).map(Pf).join(" "))&&H(l,"style",u),Wl(e,N=qd(b,[v&282&&g!==(g=Zl({[w[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":w[3],"mdc-linear-progress--closed":w[4],"mdc-data-table__linear-progress":w[14]==="data-table",...w[8]}))&&{class:g},v&1028&&_!==(_=Object.entries(w[10]).map(Nf).concat([w[2]]).join(" "))&&{style:_},{role:"progressbar"},{"aria-valuemin":m},{"aria-valuemax":p},v&40&&y!==(y=w[3]?void 0:w[5])&&{"aria-valuenow":y},v&512&&w[9],v&65536&&w[16]])),M&&Ud(M.update)&&v&1&&M.update.call(null,w[0])},i:ct,o:ct,d(w){w&&U(e),i[19](null),S=!1,ul(x)}}}const Df=([i,e])=>`${i}: ${e};`,Pf=([i,e])=>`${i}: ${e};`,Nf=([i,e])=>`${i}: ${e};`;function gT(i,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let r=ql(e,n),s;const a=jd(Od());let{use:o=[]}=e,{class:l=""}=e,{style:c=""}=e,{indeterminate:u=!1}=e,{closed:f=!1}=e,{progress:h=0}=e,{buffer:d=void 0}=e,g,_,m={},p={},y={},M={},S={},x=jl("SMUI:linear-progress:context"),b=jl("SMUI:linear-progress:closed");Ft(i,b,P=>t(21,s=P)),ji(()=>(t(6,_=new pT({addClass:w,forceLayout:()=>{B().getBoundingClientRect()},setBufferBarStyle:R,setPrimaryBarStyle:O,hasClass:N,removeAttribute:I,removeClass:v,setAttribute:E,setStyle:z,attachResizeObserver:P=>{const q=window.ResizeObserver;if(q){const le=new q(P);return le.observe(B()),le}return null},getWidth:()=>B().offsetWidth})),_.init(),()=>{_.destroy()}));function N(P){return P in m?m[P]:B().classList.contains(P)}function w(P){m[P]||t(8,m[P]=!0,m)}function v(P){(!(P in m)||m[P])&&t(8,m[P]=!1,m)}function E(P,q){p[P]!==q&&t(9,p[P]=q,p)}function I(P){(!(P in p)||p[P]!=null)&&t(9,p[P]=void 0,p)}function z(P,q){y[P]!=q&&(q===""||q==null?(delete y[P],t(10,y)):t(10,y[P]=q,y))}function R(P,q){M[P]!=q&&(q===""||q==null?(delete M[P],t(11,M)):t(11,M[P]=q,M))}function O(P,q){S[P]!=q&&(q===""||q==null?(delete S[P],t(12,S)):t(12,S[P]=q,S))}function B(){return g}function Q(P){an[P?"unshift":"push"](()=>{g=P,t(7,g)})}const Z=()=>_&&_.handleTransitionEnd();return i.$$set=P=>{e=Un(Un({},e),ai(P)),t(16,r=ql(e,n)),"use"in P&&t(0,o=P.use),"class"in P&&t(1,l=P.class),"style"in P&&t(2,c=P.style),"indeterminate"in P&&t(3,u=P.indeterminate),"closed"in P&&t(4,f=P.closed),"progress"in P&&t(5,h=P.progress),"buffer"in P&&t(17,d=P.buffer)},i.$$.update=()=>{i.$$.dirty&16&&b&&Fd(b,s=f,s),i.$$.dirty&72&&_&&_.isDeterminate()!==!u&&_.setDeterminate(!u),i.$$.dirty&96&&_&&_.getProgress()!==h&&_.setProgress(h),i.$$.dirty&131136&&_&&(d==null?_.setBuffer(1):_.setBuffer(d)),i.$$.dirty&80&&_&&(f?_.close():_.open())},[o,l,c,u,f,h,_,g,m,p,y,M,S,a,x,b,r,d,B,Q,Z]}class _T extends bt{constructor(e){super(),Tt(this,e,gT,mT,St,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}function vT(i){let e,t,n,r,s,a,o,l,c,u;return l=new _T({props:{class:"mt-2",progress:i[2]/i[3]}}),{c(){e=te("div"),t=te("div"),n=it(i[0]),r=Ee(),s=te("div"),a=it(i[4]),o=Ee(),Le(l.$$.fragment),this.h()},l(f){e=ne(f,"DIV",{class:!0});var h=ae(e);t=ne(h,"DIV",{class:!0});var d=ae(t);n=rt(d,i[0]),d.forEach(U),r=Se(h),s=ne(h,"DIV",{class:!0,style:!0});var g=ae(s);a=rt(g,i[4]),g.forEach(U),o=Se(h),Ne(l.$$.fragment,h),h.forEach(U),this.h()},h(){H(t,"class","report-linear-progress__title p2 svelte-1tmfluq"),H(s,"class","report-linear-progress__values mt-1 svelte-1tmfluq"),At(s,"color",i[1]),H(e,"class",c=vn(`report-linear-progress ${i[5].class||""}`)+" svelte-1tmfluq")},m(f,h){fe(f,e,h),Y(e,t),Y(t,n),Y(e,r),Y(e,s),Y(s,a),Y(e,o),Ie(l,e,null),u=!0},p(f,[h]){(!u||h&1)&&Rt(n,f[0]),(!u||h&16)&&Rt(a,f[4]),(!u||h&2)&&At(s,"color",f[1]);const d={};h&12&&(d.progress=f[2]/f[3]),l.$set(d),(!u||h&32&&c!==(c=vn(`report-linear-progress ${f[5].class||""}`)+" svelte-1tmfluq"))&&H(e,"class",c)},i(f){u||(ee(l.$$.fragment,f),u=!0)},o(f){ce(l.$$.fragment,f),u=!1},d(f){f&&U(e),De(l)}}}function xT(i,e,t){let{title:n}=e,{color:r}=e,{value:s}=e,{max:a}=e,{display:o}=e;return i.$$set=l=>{t(5,e=Un(Un({},e),ai(l))),"title"in l&&t(0,n=l.title),"color"in l&&t(1,r=l.color),"value"in l&&t(2,s=l.value),"max"in l&&t(3,a=l.max),"display"in l&&t(4,o=l.display)},e=ai(e),[n,r,s,a,o,e]}class yT extends bt{constructor(e){super(),Tt(this,e,xT,vT,St,{title:0,color:1,value:2,max:3,display:4})}}function Uf(i,e,t){const n=i.slice();return n[5]=e[t].goal,n[6]=e[t].value,n[8]=t,n}function Of(i,e){let t,n,r,s;return n=new yT({props:{class:"my-2",title:e[1][e[8]],color:e[2][e[8]],max:e[5],value:e[6],display:e[6]+"/"+e[5]+(e[8]<2?"m":"")}}),{key:i,first:null,c(){t=te("div"),Le(n.$$.fragment),r=Ee(),this.h()},l(a){t=ne(a,"DIV",{class:!0,style:!0});var o=ae(t);Ne(n.$$.fragment,o),r=Se(o),o.forEach(U),this.h()},h(){H(t,"class","linear-container svelte-kpk462"),At(t,"--progress-color",e[2][e[8]]),At(t,"--track-color",e[3][e[8]]),this.first=t},m(a,o){fe(a,t,o),Ie(n,t,null),Y(t,r),s=!0},p(a,o){e=a;const l={};o&1&&(l.title=e[1][e[8]]),o&1&&(l.color=e[2][e[8]]),o&1&&(l.max=e[5]),o&1&&(l.value=e[6]),o&1&&(l.display=e[6]+"/"+e[5]+(e[8]<2?"m":"")),n.$set(l),(!s||o&1)&&At(t,"--progress-color",e[2][e[8]]),(!s||o&1)&&At(t,"--track-color",e[3][e[8]])},i(a){s||(ee(n.$$.fragment,a),s=!0)},o(a){ce(n.$$.fragment,a),s=!1},d(a){a&&U(t),De(n)}}}function MT(i){let e,t=[],n=new Map,r,s,a=xn(i[0]);const o=l=>l[8];for(let l=0;l<a.length;l+=1){let c=Uf(i,a,l),u=o(c);n.set(u,t[l]=Of(u,c))}return{c(){e=te("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=ne(l,"DIV",{class:!0});var c=ae(e);for(let u=0;u<t.length;u+=1)t[u].l(c);c.forEach(U),this.h()},h(){H(e,"class",r=vn(`report-linears ${i[4].class||""}`)+" svelte-kpk462")},m(l,c){fe(l,e,c);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s=!0},p(l,[c]){c&15&&(a=xn(l[0]),_t(),t=dl(t,c,o,1,l,a,n,e,pl,Of,null,Uf),vt()),(!s||c&16&&r!==(r=vn(`report-linears ${l[4].class||""}`)+" svelte-kpk462"))&&H(e,"class",r)},i(l){if(!s){for(let c=0;c<a.length;c+=1)ee(t[c]);s=!0}},o(l){for(let c=0;c<t.length;c+=1)ce(t[c]);s=!1},d(l){l&&U(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function ET(i,e,t){let{linears:n=[]}=e;const r=["Listening","Reading","Understanding"],s=["#fe3083","#6036c9","#53b9f2"],a=["#fff0f5","#f4f3ff","#def3ff"];return i.$$set=o=>{t(4,e=Un(Un({},e),ai(o))),"linears"in o&&t(0,n=o.linears)},e=ai(e),[n,r,s,a,e]}class ST extends bt{constructor(e){super(),Tt(this,e,ET,MT,St,{linears:0})}}function bT(i){let e,t='<h3 class="bold pre-line">Your<br/>Learning</h3>';return{c(){e=te("div"),e.innerHTML=t,this.h()},l(n){e=ne(n,"DIV",{class:!0,"data-svelte-h":!0}),Es(e)!=="svelte-vdw50h"&&(e.innerHTML=t),this.h()},h(){H(e,"class","text-center")},m(n,r){fe(n,e,r)},p:ct,d(n){n&&U(e)}}}function TT(i){let e,t,n,r,s="Daily Achievements",a,o,l;return t=new dT({props:{class:"mx-auto",circles:i[0],$$slots:{default:[bT]},$$scope:{ctx:i}}}),o=new ST({props:{class:"pb-3 mt-1",linears:i[0]}}),{c(){e=te("div"),Le(t.$$.fragment),n=Ee(),r=te("h5"),r.textContent=s,a=Ee(),Le(o.$$.fragment),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);Ne(t.$$.fragment,u),n=Se(u),r=ne(u,"H5",{class:!0,"data-svelte-h":!0}),Es(r)!=="svelte-1ahe1dy"&&(r.textContent=s),a=Se(u),Ne(o.$$.fragment,u),u.forEach(U),this.h()},h(){H(r,"class","my-2 bold pre-line achievements svelte-8sstrb"),H(e,"class","main-progress-container svelte-8sstrb")},m(c,u){fe(c,e,u),Ie(t,e,null),Y(e,n),Y(e,r),Y(e,a),Ie(o,e,null),l=!0},p(c,[u]){const f={};u&1&&(f.circles=c[0]),u&2&&(f.$$scope={dirty:u,ctx:c}),t.$set(f);const h={};u&1&&(h.linears=c[0]),o.$set(h)},i(c){l||(ee(t.$$.fragment,c),ee(o.$$.fragment,c),l=!0)},o(c){ce(t.$$.fragment,c),ce(o.$$.fragment,c),l=!1},d(c){c&&U(e),De(t),De(o)}}}function AT(i,e,t){let{data:n}=e;return i.$$set=r=>{"data"in r&&t(0,n=r.data)},[n]}class wT extends bt{constructor(e){super(),Tt(this,e,AT,TT,St,{data:0})}}function RT(i){let e,t,n,r,s,a,o,l,c,u;const f=i[4].default,h=Da(f,i,i[5],null);return{c(){e=te("div"),t=new rs(!1),n=Ee(),r=te("div"),s=new rs(!1),a=Ee(),o=te("div"),l=new rs(!1),c=Ee(),h&&h.c(),this.h()},l(d){e=ne(d,"DIV",{class:!0});var g=ae(e);t=ss(g,!1),g.forEach(U),n=Se(d),r=ne(d,"DIV",{class:!0,style:!0});var _=ae(r);s=ss(_,!1),_.forEach(U),a=Se(d),o=ne(d,"DIV",{class:!0});var m=ae(o);l=ss(m,!1),m.forEach(U),c=Se(d),h&&h.l(d),this.h()},h(){t.a=null,H(e,"class","title svelte-k5f9sq"),s.a=null,H(r,"class","main-text svelte-k5f9sq"),At(r,"color",i[3]),l.a=null,H(o,"class","mt-3 p2 bold sub-text")},m(d,g){fe(d,e,g),t.m(i[0],e),fe(d,n,g),fe(d,r,g),s.m(i[1],r),fe(d,a,g),fe(d,o,g),l.m(i[2],o),fe(d,c,g),h&&h.m(d,g),u=!0},p(d,g){(!u||g&1)&&t.p(d[0]),(!u||g&2)&&s.p(d[1]),(!u||g&8)&&At(r,"color",d[3]),(!u||g&4)&&l.p(d[2]),h&&h.p&&(!u||g&32)&&Pa(h,f,d,d[5],u?Ua(f,d[5],g,null):Na(d[5]),null)},i(d){u||(ee(h,d),u=!0)},o(d){ce(h,d),u=!1},d(d){d&&(U(e),U(n),U(r),U(a),U(o),U(c)),h&&h.d(d)}}}function CT(i){let e,t,n;return t=new ap({props:{class:"sessions-details-card__card h4 mt-2",$$slots:{default:[RT]},$$scope:{ctx:i}}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);Ne(t.$$.fragment,s),s.forEach(U),this.h()},h(){H(e,"class","sessions-details-card svelte-k5f9sq")},m(r,s){fe(r,e,s),Ie(t,e,null),n=!0},p(r,[s]){const a={};s&47&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){ce(t.$$.fragment,r),n=!1},d(r){r&&U(e),De(t)}}}function LT(i,e,t){let{$$slots:n={},$$scope:r}=e,{title:s}=e,{mainText:a}=e,{subText:o}=e,{mainColor:l}=e;return i.$$set=c=>{"title"in c&&t(0,s=c.title),"mainText"in c&&t(1,a=c.mainText),"subText"in c&&t(2,o=c.subText),"mainColor"in c&&t(3,l=c.mainColor),"$$scope"in c&&t(5,r=c.$$scope)},[s,a,o,l,n,r]}class Hl extends bt{constructor(e){super(),Tt(this,e,LT,CT,St,{title:0,mainText:1,subText:2,mainColor:3})}}const IT=i=>({}),Ff=i=>({class:"value"});function DT(i){let e,t,n,r,s,a;const o=i[2].default,l=Da(o,i,i[1],Ff);return{c(){e=te("div"),t=te("div"),n=te("div"),r=new rs(!1),s=Ee(),l&&l.c(),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);t=ne(u,"DIV",{class:!0});var f=ae(t);n=ne(f,"DIV",{class:!0});var h=ae(n);r=ss(h,!1),h.forEach(U),f.forEach(U),s=Se(u),l&&l.l(u),u.forEach(U),this.h()},h(){r.a=null,H(n,"class","name svelte-12oovlq"),H(t,"class","title mb-1 svelte-12oovlq"),H(e,"class","detail svelte-12oovlq")},m(c,u){fe(c,e,u),Y(e,t),Y(t,n),r.m(i[0],n),Y(e,s),l&&l.m(e,null),a=!0},p(c,[u]){(!a||u&1)&&r.p(c[0]),l&&l.p&&(!a||u&2)&&Pa(l,o,c,c[1],a?Ua(o,c[1],u,IT):Na(c[1]),Ff)},i(c){a||(ee(l,c),a=!0)},o(c){ce(l,c),a=!1},d(c){c&&U(e),l&&l.d(c)}}}function PT(i,e,t){let{$$slots:n={},$$scope:r}=e,{name:s}=e;return i.$$set=a=>{"name"in a&&t(0,s=a.name),"$$scope"in a&&t(1,r=a.$$scope)},[s,r,n]}class Rn extends bt{constructor(e){super(),Tt(this,e,PT,DT,St,{name:0})}}function kf(i){let e,t;return{c(){e=te("div"),t=new rs(!1),this.h()},l(n){e=ne(n,"DIV",{class:!0});var r=ae(e);t=ss(r,!1),r.forEach(U),this.h()},h(){t.a=null,H(e,"class","avg svelte-1fmtj10")},m(n,r){fe(n,e,r),t.m(i[5],e)},p(n,r){r&32&&t.p(n[5])},d(n){n&&U(e)}}}function Bf(i){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{class:!0,style:!0}),ae(e).forEach(U),this.h()},h(){H(e,"class","thumb svelte-1fmtj10"),At(e,"background-color",i[6]),At(e,"left","calc("+(i[7]-i[0])/(i[1]-i[0])*100+"%)")},m(t,n){fe(t,e,n)},p(t,n){n&64&&At(e,"background-color",t[6]),n&131&&At(e,"left","calc("+(t[7]-t[0])/(t[1]-t[0])*100+"%)")},d(t){t&&U(e)}}}function NT(i){let e,t,n,r,s,a,o=i[4]&&kf(i),l=(i[2]||i[2]===0)&&Bf(i);return{c(){e=te("div"),t=te("div"),n=Ee(),o&&o.c(),r=Ee(),s=te("div"),a=Ee(),l&&l.c(),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);t=ne(u,"DIV",{class:!0}),ae(t).forEach(U),n=Se(u),o&&o.l(u),r=Se(u),s=ne(u,"DIV",{class:!0,style:!0}),ae(s).forEach(U),a=Se(u),l&&l.l(u),u.forEach(U),this.h()},h(){H(t,"class","line svelte-1fmtj10"),H(s,"class","rail svelte-1fmtj10"),At(s,"height",i[3]+"px"),H(e,"class","progress svelte-1fmtj10")},m(c,u){fe(c,e,u),Y(e,t),Y(e,n),o&&o.m(e,null),Y(e,r),Y(e,s),Y(e,a),l&&l.m(e,null)},p(c,[u]){c[4]?o?o.p(c,u):(o=kf(c),o.c(),o.m(e,r)):o&&(o.d(1),o=null),u&8&&At(s,"height",c[3]+"px"),c[2]||c[2]===0?l?l.p(c,u):(l=Bf(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:ct,o:ct,d(c){c&&U(e),o&&o.d(),l&&l.d()}}}function UT(i,e,t){let n,{min:r=0}=e,{max:s=100}=e,{value:a=70}=e,{sliderHeight:o=8}=e,{showCenterLine:l=!0}=e,{centerName:c="Grade<br />Level"}=e,{thumbColor:u="#FE3083"}=e;return i.$$set=f=>{"min"in f&&t(0,r=f.min),"max"in f&&t(1,s=f.max),"value"in f&&t(2,a=f.value),"sliderHeight"in f&&t(3,o=f.sliderHeight),"showCenterLine"in f&&t(4,l=f.showCenterLine),"centerName"in f&&t(5,c=f.centerName),"thumbColor"in f&&t(6,u=f.thumbColor)},i.$$.update=()=>{i.$$.dirty&7&&t(7,n=a>s?s:a<r?r:a)},[r,s,a,o,l,c,u,n]}class OT extends bt{constructor(e){super(),Tt(this,e,UT,NT,St,{min:0,max:1,value:2,sliderHeight:3,showCenterLine:4,centerName:5,thumbColor:6})}}function FT(i){let e,t,n,r,s,a,o,l;return o=new OT({props:{thumbColor:i[3],showCenterLine:i[1],centerName:i[2],min:i[5],max:i[6],value:i[4]}}),{c(){e=te("div"),t=te("div"),n=te("div"),r=it(i[0]),s=Ee(),a=te("div"),Le(o.$$.fragment),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);t=ne(u,"DIV",{"aria-hidden":!0,class:!0});var f=ae(t);n=ne(f,"DIV",{class:!0});var h=ae(n);r=rt(h,i[0]),h.forEach(U),s=Se(f),a=ne(f,"DIV",{class:!0});var d=ae(a);Ne(o.$$.fragment,d),d.forEach(U),f.forEach(U),u.forEach(U),this.h()},h(){H(n,"class","title p2 svelte-1winjnw"),H(a,"class","progress svelte-1winjnw"),H(t,"aria-hidden","true"),H(t,"class","card svelte-1winjnw"),H(e,"class","progress-container svelte-1winjnw")},m(c,u){fe(c,e,u),Y(e,t),Y(t,n),Y(n,r),Y(t,s),Y(t,a),Ie(o,a,null),l=!0},p(c,[u]){(!l||u&1)&&Rt(r,c[0]);const f={};u&8&&(f.thumbColor=c[3]),u&2&&(f.showCenterLine=c[1]),u&4&&(f.centerName=c[2]),u&32&&(f.min=c[5]),u&64&&(f.max=c[6]),u&16&&(f.value=c[4]),o.$set(f)},i(c){l||(ee(o.$$.fragment,c),l=!0)},o(c){ce(o.$$.fragment,c),l=!1},d(c){c&&U(e),De(o)}}}function kT(i,e,t){let{title:n}=e,{showCenterLine:r}=e,{centerName:s=""}=e,{thumbColor:a="#FE3083"}=e,{value:o=0}=e,{min:l=0}=e,{max:c=100}=e;return i.$$set=u=>{"title"in u&&t(0,n=u.title),"showCenterLine"in u&&t(1,r=u.showCenterLine),"centerName"in u&&t(2,s=u.centerName),"thumbColor"in u&&t(3,a=u.thumbColor),"value"in u&&t(4,o=u.value),"min"in u&&t(5,l=u.min),"max"in u&&t(6,c=u.max)},[n,r,s,a,o,l,c]}class Ca extends bt{constructor(e){super(),Tt(this,e,kT,FT,St,{title:0,showCenterLine:1,centerName:2,thumbColor:3,value:4,min:5,max:6})}}function BT(i){let e,t=i[0].listening.wordsCount+"",n;return{c(){e=te("div"),n=it(t),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);n=rt(s,t),s.forEach(U),this.h()},h(){H(e,"class","value svelte-3kneo")},m(r,s){fe(r,e,s),Y(e,n)},p(r,s){s&1&&t!==(t=r[0].listening.wordsCount+"")&&Rt(n,t)},d(r){r&&U(e)}}}function HT(i){let e,t=i[0].listening.category+"",n;return{c(){e=te("div"),n=it(t),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);n=rt(s,t),s.forEach(U),this.h()},h(){H(e,"class","value svelte-3kneo")},m(r,s){fe(r,e,s),Y(e,n)},p(r,s){s&1&&t!==(t=r[0].listening.category+"")&&Rt(n,t)},d(r){r&&U(e)}}}function zT(i){let e,t,n,r,s,a,o;return e=new Ca({props:{title:"Difficulty",showCenterLine:!0,centerName:"Grade<br/>Level",thumbColor:"#FE3083",value:i[0].listening.difficulty}}),r=new Rn({props:{name:"Words",$$slots:{default:[BT]},$$scope:{ctx:i}}}),a=new Rn({props:{name:"Category",$$slots:{default:[HT]},$$scope:{ctx:i}}}),{c(){Le(e.$$.fragment),t=Ee(),n=te("div"),Le(r.$$.fragment),s=Ee(),Le(a.$$.fragment),this.h()},l(l){Ne(e.$$.fragment,l),t=Se(l),n=ne(l,"DIV",{class:!0});var c=ae(n);Ne(r.$$.fragment,c),s=Se(c),Ne(a.$$.fragment,c),c.forEach(U),this.h()},h(){H(n,"class","details-grid svelte-3kneo")},m(l,c){Ie(e,l,c),fe(l,t,c),fe(l,n,c),Ie(r,n,null),Y(n,s),Ie(a,n,null),o=!0},p(l,c){const u={};c&1&&(u.value=l[0].listening.difficulty),e.$set(u);const f={};c&5&&(f.$$scope={dirty:c,ctx:l}),r.$set(f);const h={};c&5&&(h.$$scope={dirty:c,ctx:l}),a.$set(h)},i(l){o||(ee(e.$$.fragment,l),ee(r.$$.fragment,l),ee(a.$$.fragment,l),o=!0)},o(l){ce(e.$$.fragment,l),ce(r.$$.fragment,l),ce(a.$$.fragment,l),o=!1},d(l){l&&(U(t),U(n)),De(e,l),De(r),De(a)}}}function GT(i){let e,t,n;return t=new Hl({props:{title:"Listening",mainText:Math.ceil(i[0].listening.minutes)+"m",subText:i[1],mainColor:"#FE3083",$$slots:{default:[zT]},$$scope:{ctx:i}}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);Ne(t.$$.fragment,s),s.forEach(U),this.h()},h(){H(e,"class","report-card listening svelte-3kneo")},m(r,s){fe(r,e,s),Ie(t,e,null),n=!0},p(r,[s]){const a={};s&1&&(a.mainText=Math.ceil(r[0].listening.minutes)+"m"),s&5&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){ce(t.$$.fragment,r),n=!1},d(r){r&&U(e),De(t)}}}function VT(i,e,t){let{sessionData:n}=e,r="You listened to the OrCam Learn more today than yesterday";return i.$$set=s=>{"sessionData"in s&&t(0,n=s.sessionData)},[n,r]}class WT extends bt{constructor(e){super(),Tt(this,e,VT,GT,St,{sessionData:0})}}function XT(i){let e,t=Math.round(i[0].reading.accuracy)+"",n,r;return{c(){e=te("div"),n=it(t),r=it("%"),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);n=rt(a,t),r=rt(a,"%"),a.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(s,a){fe(s,e,a),Y(e,n),Y(e,r)},p(s,a){a&1&&t!==(t=Math.round(s[0].reading.accuracy)+"")&&Rt(n,t)},d(s){s&&U(e)}}}function qT(i){let e,t=Math.round(i[0].reading.wcpm)+"",n;return{c(){e=te("div"),n=it(t),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);n=rt(s,t),s.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(r,s){fe(r,e,s),Y(e,n)},p(r,s){s&1&&t!==(t=Math.round(r[0].reading.wcpm)+"")&&Rt(n,t)},d(r){r&&U(e)}}}function jT(i){let e,t=Math.round(i[0].reading.readWords)+"",n;return{c(){e=te("div"),n=it(t),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);n=rt(s,t),s.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(r,s){fe(r,e,s),Y(e,n)},p(r,s){s&1&&t!==(t=Math.round(r[0].reading.readWords)+"")&&Rt(n,t)},d(r){r&&U(e)}}}function YT(i){let e,t=Math.round(i[0].reading.highFreq)+"",n,r;return{c(){e=te("div"),n=it(t),r=it("%"),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);n=rt(a,t),r=rt(a,"%"),a.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(s,a){fe(s,e,a),Y(e,n),Y(e,r)},p(s,a){a&1&&t!==(t=Math.round(s[0].reading.highFreq)+"")&&Rt(n,t)},d(s){s&&U(e)}}}function KT(i){let e,t=Math.round(i[0].reading.omissions)+"",n;return{c(){e=te("div"),n=it(t),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);n=rt(s,t),s.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(r,s){fe(r,e,s),Y(e,n)},p(r,s){s&1&&t!==(t=Math.round(r[0].reading.omissions)+"")&&Rt(n,t)},d(r){r&&U(e)}}}function ZT(i){let e,t=Math.round(i[0].reading.punctuations)+"",n,r;return{c(){e=te("div"),n=it(t),r=it("%"),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);n=rt(a,t),r=rt(a,"%"),a.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(s,a){fe(s,e,a),Y(e,n),Y(e,r)},p(s,a){a&1&&t!==(t=Math.round(s[0].reading.punctuations)+"")&&Rt(n,t)},d(s){s&&U(e)}}}function JT(i){let e,t=Math.round(i[0].reading.twoSyllables)+"",n,r;return{c(){e=te("div"),n=it(t),r=it("%"),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);n=rt(a,t),r=rt(a,"%"),a.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(s,a){fe(s,e,a),Y(e,n),Y(e,r)},p(s,a){a&1&&t!==(t=Math.round(s[0].reading.twoSyllables)+"")&&Rt(n,t)},d(s){s&&U(e)}}}function QT(i){let e,t=Math.round(i[0].reading.threeSyllables)+"",n,r;return{c(){e=te("div"),n=it(t),r=it("%"),this.h()},l(s){e=ne(s,"DIV",{class:!0});var a=ae(e);n=rt(a,t),r=rt(a,"%"),a.forEach(U),this.h()},h(){H(e,"class","value svelte-1oypocl")},m(s,a){fe(s,e,a),Y(e,n),Y(e,r)},p(s,a){a&1&&t!==(t=Math.round(s[0].reading.threeSyllables)+"")&&Rt(n,t)},d(s){s&&U(e)}}}function $T(i){let e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m,p,y,M,S,x,b,N;return n=new Ca({props:{title:"Difficulty",showCenterLine:!0,centerName:"Grade<br/>Level",thumbColor:"#6036C9",value:i[0].reading.textLevel,min:-6,max:6}}),s=new Ca({props:{title:"Fluency",showCenterLine:!0,centerName:"Avg.",thumbColor:"#6036C9",value:i[0].reading.fluency,min:-1,max:1}}),l=new Rn({props:{name:"Accuracy",$$slots:{default:[XT]},$$scope:{ctx:i}}}),u=new Rn({props:{name:"WCPM",$$slots:{default:[qT]},$$scope:{ctx:i}}}),h=new Rn({props:{name:"Words",$$slots:{default:[jT]},$$scope:{ctx:i}}}),g=new Rn({props:{name:"High-frequency<br/>words accuracy",$$slots:{default:[YT]},$$scope:{ctx:i}}}),m=new Rn({props:{name:"Omissions",$$slots:{default:[KT]},$$scope:{ctx:i}}}),y=new Rn({props:{name:"Punctuations",$$slots:{default:[ZT]},$$scope:{ctx:i}}}),S=new Rn({props:{name:"Two-syllables<br/>accuracy",$$slots:{default:[JT]},$$scope:{ctx:i}}}),b=new Rn({props:{name:"Three+ syllable<br/>accuracy",$$slots:{default:[QT]},$$scope:{ctx:i}}}),{c(){e=te("div"),t=te("div"),Le(n.$$.fragment),r=Ee(),Le(s.$$.fragment),a=Ee(),o=te("div"),Le(l.$$.fragment),c=Ee(),Le(u.$$.fragment),f=Ee(),Le(h.$$.fragment),d=Ee(),Le(g.$$.fragment),_=Ee(),Le(m.$$.fragment),p=Ee(),Le(y.$$.fragment),M=Ee(),Le(S.$$.fragment),x=Ee(),Le(b.$$.fragment),this.h()},l(w){e=ne(w,"DIV",{class:!0});var v=ae(e);t=ne(v,"DIV",{class:!0});var E=ae(t);Ne(n.$$.fragment,E),r=Se(E),Ne(s.$$.fragment,E),E.forEach(U),a=Se(v),o=ne(v,"DIV",{class:!0});var I=ae(o);Ne(l.$$.fragment,I),c=Se(I),Ne(u.$$.fragment,I),f=Se(I),Ne(h.$$.fragment,I),d=Se(I),Ne(g.$$.fragment,I),_=Se(I),Ne(m.$$.fragment,I),p=Se(I),Ne(y.$$.fragment,I),M=Se(I),Ne(S.$$.fragment,I),x=Se(I),Ne(b.$$.fragment,I),I.forEach(U),v.forEach(U),this.h()},h(){H(t,"class","progresses svelte-1oypocl"),H(o,"class","details-grid svelte-1oypocl"),H(e,"class","all-details svelte-1oypocl")},m(w,v){fe(w,e,v),Y(e,t),Ie(n,t,null),Y(t,r),Ie(s,t,null),Y(e,a),Y(e,o),Ie(l,o,null),Y(o,c),Ie(u,o,null),Y(o,f),Ie(h,o,null),Y(o,d),Ie(g,o,null),Y(o,_),Ie(m,o,null),Y(o,p),Ie(y,o,null),Y(o,M),Ie(S,o,null),Y(o,x),Ie(b,o,null),N=!0},p(w,v){const E={};v&1&&(E.value=w[0].reading.textLevel),n.$set(E);const I={};v&1&&(I.value=w[0].reading.fluency),s.$set(I);const z={};v&5&&(z.$$scope={dirty:v,ctx:w}),l.$set(z);const R={};v&5&&(R.$$scope={dirty:v,ctx:w}),u.$set(R);const O={};v&5&&(O.$$scope={dirty:v,ctx:w}),h.$set(O);const B={};v&5&&(B.$$scope={dirty:v,ctx:w}),g.$set(B);const Q={};v&5&&(Q.$$scope={dirty:v,ctx:w}),m.$set(Q);const Z={};v&5&&(Z.$$scope={dirty:v,ctx:w}),y.$set(Z);const P={};v&5&&(P.$$scope={dirty:v,ctx:w}),S.$set(P);const q={};v&5&&(q.$$scope={dirty:v,ctx:w}),b.$set(q)},i(w){N||(ee(n.$$.fragment,w),ee(s.$$.fragment,w),ee(l.$$.fragment,w),ee(u.$$.fragment,w),ee(h.$$.fragment,w),ee(g.$$.fragment,w),ee(m.$$.fragment,w),ee(y.$$.fragment,w),ee(S.$$.fragment,w),ee(b.$$.fragment,w),N=!0)},o(w){ce(n.$$.fragment,w),ce(s.$$.fragment,w),ce(l.$$.fragment,w),ce(u.$$.fragment,w),ce(h.$$.fragment,w),ce(g.$$.fragment,w),ce(m.$$.fragment,w),ce(y.$$.fragment,w),ce(S.$$.fragment,w),ce(b.$$.fragment,w),N=!1},d(w){w&&U(e),De(n),De(s),De(l),De(u),De(h),De(g),De(m),De(y),De(S),De(b)}}}function eA(i){let e,t,n;return t=new Hl({props:{title:"Reading",mainText:Math.round(i[0].reading.readingTime)+"m",subText:i[1].replace(" '","'"),mainColor:"#6036C9",$$slots:{default:[$T]},$$scope:{ctx:i}}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);Ne(t.$$.fragment,s),s.forEach(U),this.h()},h(){H(e,"class","report-card reading svelte-1oypocl")},m(r,s){fe(r,e,s),Ie(t,e,null),n=!0},p(r,[s]){const a={};s&1&&(a.mainText=Math.round(r[0].reading.readingTime)+"m"),s&5&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){ce(t.$$.fragment,r),n=!1},d(r){r&&U(e),De(t)}}}function tA(i,e,t){let{sessionData:n}=e,r="Your reading time today is more than yesterday";return i.$$set=s=>{"sessionData"in s&&t(0,n=s.sessionData)},[n,r]}class nA extends bt{constructor(e){super(),Tt(this,e,tA,eA,St,{sessionData:0})}}function iA(i){let e,t;return{c(){e=_a("svg"),t=_a("path"),this.h()},l(n){e=va(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var r=ae(e);t=va(r,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),ae(t).forEach(U),r.forEach(U),this.h()},h(){H(t,"d","M1 6L5.125 11L12 1"),H(t,"stroke",i[0]),H(t,"stroke-width","1.5"),H(t,"stroke-linecap","round"),H(t,"stroke-linejoin","round"),H(e,"width","13"),H(e,"height","12"),H(e,"viewBox","0 0 13 12"),H(e,"fill","none"),H(e,"xmlns","http://www.w3.org/2000/svg")},m(n,r){fe(n,e,r),Y(e,t)},p(n,[r]){r&1&&H(t,"stroke",n[0])},i:ct,o:ct,d(n){n&&U(e)}}}function rA(i,e,t){let{color:n="#9A96E5"}=e;return i.$$set=r=>{"color"in r&&t(0,n=r.color)},[n]}class sA extends bt{constructor(e){super(),Tt(this,e,rA,iA,St,{color:0})}}function aA(i){let e,t,n=i[0].understanding.correctAnswers+"",r,s,a=i[0].understanding.totalQuestions+"",o,l,c,u;return c=new sA({props:{color:"#232323"}}),{c(){e=te("div"),t=te("div"),r=it(n),s=it("/"),o=it(a),l=Ee(),Le(c.$$.fragment),this.h()},l(f){e=ne(f,"DIV",{class:!0});var h=ae(e);t=ne(h,"DIV",{class:!0});var d=ae(t);r=rt(d,n),s=rt(d,"/"),o=rt(d,a),d.forEach(U),l=Se(h),Ne(c.$$.fragment,h),h.forEach(U),this.h()},h(){H(t,"class","value me-1 svelte-taul6u"),H(e,"class","d-flex align-center")},m(f,h){fe(f,e,h),Y(e,t),Y(t,r),Y(t,s),Y(t,o),Y(e,l),Ie(c,e,null),u=!0},p(f,h){(!u||h&1)&&n!==(n=f[0].understanding.correctAnswers+"")&&Rt(r,n),(!u||h&1)&&a!==(a=f[0].understanding.totalQuestions+"")&&Rt(o,a)},i(f){u||(ee(c.$$.fragment,f),u=!0)},o(f){ce(c.$$.fragment,f),u=!1},d(f){f&&U(e),De(c)}}}function oA(i){let e,t,n,r,s,a,o,l,c;return e=new Ca({props:{title:"Difficulty",showCenterLine:!0,centerName:"Grade<br/>Level",thumbColor:"#53B9F2",value:i[0].understanding.difficulty}}),a=new Rn({props:{name:"Answered correctly",$$slots:{default:[aA]},$$scope:{ctx:i}}}),{c(){Le(e.$$.fragment),t=Ee(),n=te("div"),r=te("div"),s=Ee(),Le(a.$$.fragment),o=Ee(),l=te("div"),this.h()},l(u){Ne(e.$$.fragment,u),t=Se(u),n=ne(u,"DIV",{class:!0});var f=ae(n);r=ne(f,"DIV",{class:!0}),ae(r).forEach(U),s=Se(f),Ne(a.$$.fragment,f),o=Se(f),l=ne(f,"DIV",{class:!0}),ae(l).forEach(U),f.forEach(U),this.h()},h(){H(r,"class","mt-3"),H(l,"class","mt-3"),H(n,"class","details svelte-taul6u")},m(u,f){Ie(e,u,f),fe(u,t,f),fe(u,n,f),Y(n,r),Y(n,s),Ie(a,n,null),Y(n,o),Y(n,l),c=!0},p(u,f){const h={};f&1&&(h.value=u[0].understanding.difficulty),e.$set(h);const d={};f&5&&(d.$$scope={dirty:f,ctx:u}),a.$set(d)},i(u){c||(ee(e.$$.fragment,u),ee(a.$$.fragment,u),c=!0)},o(u){ce(e.$$.fragment,u),ce(a.$$.fragment,u),c=!1},d(u){u&&(U(t),U(n)),De(e,u),De(a)}}}function lA(i){let e,t,n;return t=new Hl({props:{title:"Understanding",mainText:i[0].understanding.totalQuestions+" questions",subText:i[1],mainColor:"#53B9F2",$$slots:{default:[oA]},$$scope:{ctx:i}}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);Ne(t.$$.fragment,s),s.forEach(U),this.h()},h(){H(e,"class","report-card understanding svelte-taul6u")},m(r,s){fe(r,e,s),Ie(t,e,null),n=!0},p(r,[s]){const a={};s&1&&(a.mainText=r[0].understanding.totalQuestions+" questions"),s&5&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){ce(t.$$.fragment,r),n=!1},d(r){r&&U(e),De(t)}}}function cA(i,e,t){let{sessionData:n}=e,r="You answered more questions correctly today than yesterday";return i.$$set=s=>{"sessionData"in s&&t(0,n=s.sessionData)},[n,r]}class uA extends bt{constructor(e){super(),Tt(this,e,cA,lA,St,{sessionData:0})}}function Hf(i){let e,t;return e=new WT({props:{sessionData:i[0]}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.sessionData=n[0]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function zf(i){let e,t;return e=new uA({props:{sessionData:i[0]}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.sessionData=n[0]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Gf(i){let e,t;return e=new nA({props:{sessionData:i[0]}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.sessionData=n[0]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function fA(i){let e,t,n,r,s=i[0].listening.minutes&&Hf(i),a=i[0].understanding.totalQuestions&&zf(i),o=i[0].reading.readingTime&&Gf(i);return{c(){e=te("div"),s&&s.c(),t=Ee(),a&&a.c(),n=Ee(),o&&o.c(),this.h()},l(l){e=ne(l,"DIV",{class:!0});var c=ae(e);s&&s.l(c),t=Se(c),a&&a.l(c),n=Se(c),o&&o.l(c),c.forEach(U),this.h()},h(){H(e,"class","report-cards svelte-ml2wp0")},m(l,c){fe(l,e,c),s&&s.m(e,null),Y(e,t),a&&a.m(e,null),Y(e,n),o&&o.m(e,null),r=!0},p(l,[c]){l[0].listening.minutes?s?(s.p(l,c),c&1&&ee(s,1)):(s=Hf(l),s.c(),ee(s,1),s.m(e,t)):s&&(_t(),ce(s,1,1,()=>{s=null}),vt()),l[0].understanding.totalQuestions?a?(a.p(l,c),c&1&&ee(a,1)):(a=zf(l),a.c(),ee(a,1),a.m(e,n)):a&&(_t(),ce(a,1,1,()=>{a=null}),vt()),l[0].reading.readingTime?o?(o.p(l,c),c&1&&ee(o,1)):(o=Gf(l),o.c(),ee(o,1),o.m(e,null)):o&&(_t(),ce(o,1,1,()=>{o=null}),vt())},i(l){r||(ee(s),ee(a),ee(o),r=!0)},o(l){ce(s),ce(a),ce(o),r=!1},d(l){l&&U(e),s&&s.d(),a&&a.d(),o&&o.d()}}}function hA(i,e,t){let{sessionData:n}=e;return i.$$set=r=>{"sessionData"in r&&t(0,n=r.sessionData)},[n]}class dA extends bt{constructor(e){super(),Tt(this,e,hA,fA,St,{sessionData:0})}}const pA=`
.reports-container {
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    padding-bottom: 118px;
}
.reports-container .reports-body {
    width: 60%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-content: center;
}
.main-progress-container {
    padding: 16px;
}
.report-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.report-circles-progress {
    position: relative;
    width: 502px;
    height: 502px;
}
.mx-auto {
    margin-inline-start: auto !important;
    margin-inline-end: auto !important;
}
.mt-1 {
    margin-top: 4px !important;
}
.main-progress-container .achievements {
    color: #000;
}
.pre-line {
    white-space: pre-line;
}
.bold {
    font-weight: bold !important;
}
.my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
}

h5 {
    font-size: max(24px,1.28vw) !important;
    line-height: max(34px,1.82vw) !important;
}
h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.report-linears {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.fit-height {
    height: fit-content !important;
}
.progress-circle-gradient {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.progress-circle-gradient svg {
    fill: var(--progress-fill, transparent);
    height: 100%;
    stroke-linecap: var(--progress-linecap, round);
    width: 100%;
}
.report-circles-progress .report-circles-progress__circle1 svg {
    width: 100% !important;
    height: 100% !important;
}

.report-circles-progress .report-circles-progress__circle2 svg {
    width: 82% !important;
    height: 82% !important;
}

.report-circles-progress .report-circles-progress__circle3 svg {
    width: 64% !important;
    height: 64% !important;
}
.report-linears .linear-container {
    width: 30%;
}
.report-linear-progress__title {
    font-family: Roboto, serif;
    color: #7e7f83;
}
.report-linear-progress__values {
    font-size: 25px;
    line-height: 15px;
    font-family: proxima-soft, serif;
    font-weight: 500;
    letter-spacing: -0.02em !important;
}
.report-linears .mdc-linear-progress {
    border-radius: 15px;
}
.mdc-linear-progress__buffer {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
}
.listening {
    width: calc(50% - 5px) !important;
}
.understanding {
    width: calc(50% - 5px) !important;
}
.reading {
    width: 100%;
}
.sessions-details-card s-WB9IwNkoD4Mf .sessions-details-card__card {
    background: red;
    border-radius: 10px;
    box-shadow: initial !important;
    padding: 16px;
}
.sessions-details-card .title {
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7f83;
}
.sessions-details-card .main-text {
    font-family: proxima-soft, serif;
    font-size: 30px;
    line-height: 20px;
    letter-spacing: -0.02em;
    margin-top: 8px;
}
@media screen and (min-width: 961px)
.p2 {
    font-size: max(17px,.91vw) !important;
    line-height: max(25px,1.34vw) !important;
}
.mt-3 {
    margin-top: 12px !important;
}
.progress-container {
    position: relative;
    height: 70px;
}
.progress-container .card {
    display: flex;
    height: 100%;
    font-size: 16px;
    color: #7e7f83;
    align-items: center;
    justify-content: space-between;
}
.progress-container .card .title {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7f83;
}
.progress-container .card .progress {
    width: 75%;
    display: flex;
    justify-content: center;
    height: 100%;
    margin-inline-end: 12px;
}
.progress {
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.line {
    position: absolute;
    border-left: 1px dashed #dbdbdc;
    height: 45%;
}
.avg {
    position: absolute;
    bottom: -5px;
    color: #dbdbdc;
    font-size: 11px;
    height: 27.5%;
    display: flex;
    align-items: center;
    line-height: initial;
}
.rail {
    width: 100%;
    position: absolute;
    background: #f5f5f5;
    border-radius: 30px;
}
.thumb {
    position: absolute;
    height: 45%;
    width: 3px;
    top: 50%;
    left: 0;
    border-radius: 3px;
    transform: translate(-50%, -50%);
}
.listening .details-grid {
    margin-top: 23px;
    display: grid;
    grid-template-columns: [first] 50% [line2] 50% [end];
    grid-auto-rows: 80px;
}
.detail .title {
    display: flex;
    align-items: center;
    height: 32px;
}
.detail .name {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7f83;
}
.listening .details-grid .value {
    font-family: proxima-soft, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #232323;
}
.sessions-details-card .sessions-details-card__card {
    background: #fbfbfd;
    border-radius: 10px;
    box-shadow: initial !important;
    padding: 16px;
}
.mdc-card {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.sessions-details-card .title {
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7f83;
}
.sessions-details-card .main-text {
    font-family: proxima-soft, serif;
    font-size: 30px;
    line-height: 20px;
    letter-spacing: -0.02em;
    margin-top: 8px;
}
.progress-container {
    position: relative;
    height: 70px;
}
.progress-container .card {
    display: flex;
    height: 100%;
    font-size: 16px;
    color: #7e7f83;
    align-items: center;
    justify-content: space-between;
}
.understanding .details {
    margin-top: 23px;
    display: inline;
}
.mt-3 {
    margin-top: 12px !important;
}
.d-flex {
    display: flex;
}
.align-center {
    align-items: center;
}
.understanding .details .value {
    font-family: proxima-soft, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #232323;
}
.me-1 {
    margin-inline-end: 4px !important;
}
.mt-3 {
    margin-top: 12px !important;
}
.reading .all-details {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.reading .all-details .progresses {
    width: 30%;
    display: flex;
    flex-direction: column;
}
.progress-container {
    position: relative;
    height: 70px;
}
.progress-container .card {
    display: flex;
    height: 100%;
    font-size: 16px;
    color: #7e7f83;
    align-items: center;
    justify-content: space-between;
}
.progress-container .card .title {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7f83;
}
.reading .all-details .details-grid {
    display: grid;
    grid-template-rows: [first] 50% [line2] 50% [end];
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    width: 65%;
}
.detail .title {
    display: flex;
    align-items: center;
    height: 32px;
}
.reading .all-details .details-grid .value {
    font-family: proxima-soft, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #232323;
}
.progress-circle-gradient path:first-child {
    stroke: var(--progress-trackcolor, grey);
    stroke-width: var(--progress-trackwidth, 9px);
}
.progress-circle-gradient span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.text-center {
    text-align: center;
}
.report-circles-progress__content {
    position: absolute;
}
.main-progress-container .achievements {
    color: #000000;
}
`,mA=`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rufina:wght@400;700&display=swap" rel="stylesheet">
`;function Vf(i){var u;let e,t,n,r,s,a,o,l;n=new wT({props:{data:i[4]}}),s=new dA({props:{sessionData:i[1]}});let c=((u=i[0])==null?void 0:u.length)&&Wf(i);return{c(){e=te("div"),t=te("div"),Le(n.$$.fragment),r=Ee(),Le(s.$$.fragment),a=Ee(),c&&c.c(),o=wt(),this.h()},l(f){e=ne(f,"DIV",{class:!0});var h=ae(e);t=ne(h,"DIV",{class:!0});var d=ae(t);Ne(n.$$.fragment,d),r=Se(d),Ne(s.$$.fragment,d),d.forEach(U),h.forEach(U),a=Se(f),c&&c.l(f),o=wt(),this.h()},h(){H(t,"class","reports-body svelte-nul1r9"),H(e,"class","reports-container svelte-nul1r9")},m(f,h){fe(f,e,h),Y(e,t),Ie(n,t,null),Y(t,r),Ie(s,t,null),i[15](t),fe(f,a,h),c&&c.m(f,h),fe(f,o,h),l=!0},p(f,h){var _;const d={};h&16&&(d.data=f[4]),n.$set(d);const g={};h&2&&(g.sessionData=f[1]),s.$set(g),(_=f[0])!=null&&_.length?c?(c.p(f,h),h&1&&ee(c,1)):(c=Wf(f),c.c(),ee(c,1),c.m(o.parentNode,o)):c&&(_t(),ce(c,1,1,()=>{c=null}),vt())},i(f){l||(ee(n.$$.fragment,f),ee(s.$$.fragment,f),ee(c),l=!0)},o(f){ce(n.$$.fragment,f),ce(s.$$.fragment,f),ce(c),l=!1},d(f){f&&(U(e),U(a),U(o)),De(n),De(s),i[15](null),c&&c.d(f)}}}function Wf(i){let e,t;return e=new $d({props:{sections:i[0]}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.sections=n[0]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function gA(i){let e,t,n=i[2]&&Vf(i);return{c(){n&&n.c(),e=wt()},l(r){n&&n.l(r),e=wt()},m(r,s){n&&n.m(r,s),fe(r,e,s),t=!0},p(r,[s]){r[2]?n?(n.p(r,s),s&4&&ee(n,1)):(n=Vf(r),n.c(),ee(n,1),n.m(e.parentNode,e)):n&&(_t(),ce(n,1,1,()=>{n=null}),vt())},i(r){t||(ee(n),t=!0)},o(r){ce(n),t=!1},d(r){r&&U(e),n&&n.d(r)}}}function _A(i,e,t){let n,r,s,a,o,l,c,u;Ft(i,Yo,w=>t(8,r=w)),Ft(i,qh,w=>t(9,s=w)),Ft(i,jh,w=>t(10,a=w)),Ft(i,Xh,w=>t(11,o=w)),Ft(i,jo,w=>t(12,l=w)),Ft(i,Wh,w=>t(13,c=w)),Ft(i,Vh,w=>t(14,u=w));let{sections:f=[]}=e,{email:h}=e,{sendPdfSenderName:d}=e,{sendPdfSubject:g}=e,_,m,p,y,M,S=!1;ji(()=>{const w=o.metrics,v=a??5,E=s,I=r;_=vy(w),m=Kt(w,"readWords"),p=Kt(w,"correctWords"),y=(_-Ro[v].min)/(Ro[v].max-Ro[v].min),t(1,M={listening:E,reading:{readingTime:Math.ceil(Kt(w,"readingTime")/60),fluency:y,accuracy:m?Math.ceil(p/m*100):0,wcpm:_,readWords:m,textLevel:0,highFreq:xy(w),punctuations:yy(w),omissions:Kt(w,"omittedWords"),twoSyllables:My(w),threeSyllables:Ey(w)},understanding:I}),t(2,S=!0),sl(b,5e3)});let x;function b(){const w=x.outerHTML,v="<html><head>"+mA+"<style>"+pA+"</style></head><body>"+w+"</body></html>";my({addresses:[h],sender:d,subject:g,emailTemplate:"try-me-template",attachments:[{filename:"TryMeReport.pdf",content:v,type:"pdf"}]})}function N(w){an[w?"unshift":"push"](()=>{x=w,t(3,x)})}return i.$$set=w=>{"sections"in w&&t(0,f=w.sections),"email"in w&&t(5,h=w.email),"sendPdfSenderName"in w&&t(6,d=w.sendPdfSenderName),"sendPdfSubject"in w&&t(7,g=w.sendPdfSubject)},i.$$.update=()=>{i.$$.dirty&28672&&t(4,n=[u,c,l]),i.$$.dirty&2048,i.$$.dirty&512,i.$$.dirty&256,i.$$.dirty&1024},[f,M,S,x,n,h,d,g,r,s,a,o,l,c,u,N]}class vA extends bt{constructor(e){super(),Tt(this,e,_A,gA,St,{sections:0,email:5,sendPdfSenderName:6,sendPdfSubject:7})}}function xA(i){let e,t,n,r,s,a,o;function l(u){i[5](u)}let c={type:tp.EMAIL,label:"Email",variant:np.Filled,required:!0};return i[0]!==void 0&&(c.value=i[0]),n=new ip({props:c}),i[4](n),an.push(()=>Or(n,"value",l)),a=new Fa({props:{htmlId:"try-me__continueToReportBtn",class:"mt-8",text:"Continue",rounded:!0,color:Ss.PURPLE}}),a.$on("click",i[2]),{c(){e=te("div"),t=te("div"),Le(n.$$.fragment),s=Ee(),Le(a.$$.fragment),this.h()},l(u){e=ne(u,"DIV",{class:!0});var f=ae(e);t=ne(f,"DIV",{class:!0});var h=ae(t);Ne(n.$$.fragment,h),h.forEach(U),s=Se(f),Ne(a.$$.fragment,f),f.forEach(U),this.h()},h(){H(t,"class","try-me-mail__input mt-8 mt-16-sm svelte-11z21m0"),H(e,"class","try-me-mail svelte-11z21m0")},m(u,f){fe(u,e,f),Y(e,t),Ie(n,t,null),Y(e,s),Ie(a,e,null),o=!0},p(u,[f]){const h={};!r&&f&1&&(r=!0,h.value=u[0],Ur(()=>r=!1)),n.$set(h)},i(u){o||(ee(n.$$.fragment,u),ee(a.$$.fragment,u),o=!0)},o(u){ce(n.$$.fragment,u),ce(a.$$.fragment,u),o=!1},d(u){u&&U(e),i[4](null),De(n),De(a)}}}function yA(i,e,t){let n;Ft(i,nh,f=>t(6,n=f));let{onNext:r=()=>{}}=e,{email:s=""}=e,a;async function o(){a.validateInput()&&(ki("try-me__continueToReportBtn"),await l(),r())}const l=async()=>{if(a.value===void 0)return;const f={email:a.value,productName:"OrCam Learn",hubspotutk:op("hubspotutk")??"",country:Yd[n.country],urlParams:""};py(f)};function c(f){an[f?"unshift":"push"](()=>{a=f,t(1,a)})}function u(f){s=f,t(0,s)}return i.$$set=f=>{"onNext"in f&&t(3,r=f.onNext),"email"in f&&t(0,s=f.email)},[s,a,o,r,c,u]}class MA extends bt{constructor(e){super(),Tt(this,e,yA,xA,St,{onNext:3,email:0})}}let Xf;function EA(i,e=0){clearTimeout(Xf),Xf=setTimeout(i,e)}function qf(i){let e,t,n,r;return t=new Oa({props:{content:i[0].text}}),{c(){e=te("div"),Le(t.$$.fragment)},l(s){e=ne(s,"DIV",{});var a=ae(e);Ne(t.$$.fragment,a),a.forEach(U)},m(s,a){fe(s,e,a),Ie(t,e,null),r=!0},p(s,a){const o={};a&1&&(o.content=s[0].text),t.$set(o)},i(s){r||(ee(t.$$.fragment,s),hl(()=>{r&&(n||(n=xa(e,fs,{},!0)),n.run(1))}),r=!0)},o(s){ce(t.$$.fragment,s),n||(n=xa(e,fs,{},!1)),n.run(0),r=!1},d(s){s&&U(e),De(t),s&&n&&n.end()}}}function jf(i){let e,t;return e=new Oa({props:{content:i[4].text}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.content=n[4].text),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Yf(i){let e,t,n,r,s,a,o,l=i[3]&&Kf(i);return{c(){e=te("div"),t=te("button"),n=te("img"),s=Ee(),l&&l.c(),this.h()},l(c){e=ne(c,"DIV",{class:!0});var u=ae(e);t=ne(u,"BUTTON",{});var f=ae(t);n=ne(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(U),s=Se(u),l&&l.l(u),u.forEach(U),this.h()},h(){In(n.src,r=i[5]===Wt.PLAYING?"/images/audio-pause-button.svg":"/images/audio-play-button.svg")||H(n,"src",r),H(n,"alt",i[5]),H(n,"class","svelte-1cbzo6q"),H(e,"class","try-me-header__buttons mt-4 mt-8-sm svelte-1cbzo6q"),lt(e,"try-me-header__buttons--full",i[3])},m(c,u){fe(c,e,u),Y(e,t),Y(t,n),Y(e,s),l&&l.m(e,null),a||(o=Nn(t,"click",i[7]),a=!0)},p(c,u){u&32&&!In(n.src,r=c[5]===Wt.PLAYING?"/images/audio-pause-button.svg":"/images/audio-play-button.svg")&&H(n,"src",r),u&32&&H(n,"alt",c[5]),c[3]?l?l.p(c,u):(l=Kf(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null),u&8&&lt(e,"try-me-header__buttons--full",c[3])},d(c){c&&U(e),l&&l.d(),a=!1,o()}}}function Kf(i){let e,t='<img src="/images/forward-icon.svg" alt="forward" class="svelte-1cbzo6q"/>',n,r;return{c(){e=te("button"),e.innerHTML=t},l(s){e=ne(s,"BUTTON",{"data-svelte-h":!0}),Es(e)!=="svelte-1gwo772"&&(e.innerHTML=t)},m(s,a){fe(s,e,a),n||(r=Nn(e,"click",i[8]),n=!0)},p:ct,d(s){s&&U(e),n=!1,r()}}}function SA(i){let e,t,n=i[0]&&Ls(i[0].text),r,s=i[4]&&Ls(i[4].text),a,o,l=n&&qf(i),c=s&&jf(i),u=!i[2]&&Yf(i);return{c(){e=te("div"),t=te("div"),l&&l.c(),r=Ee(),c&&c.c(),a=Ee(),u&&u.c(),this.h()},l(f){e=ne(f,"DIV",{class:!0});var h=ae(e);t=ne(h,"DIV",{class:!0});var d=ae(t);l&&l.l(d),d.forEach(U),r=Se(h),c&&c.l(h),a=Se(h),u&&u.l(h),h.forEach(U),this.h()},h(){H(t,"class","try-me-header__top-text svelte-1cbzo6q"),H(e,"class","try-me-header svelte-1cbzo6q"),lt(e,"try-me-header--book-open",i[1])},m(f,h){fe(f,e,h),Y(e,t),l&&l.m(t,null),Y(e,r),c&&c.m(e,null),Y(e,a),u&&u.m(e,null),o=!0},p(f,[h]){h&1&&(n=f[0]&&Ls(f[0].text)),n?l?(l.p(f,h),h&1&&ee(l,1)):(l=qf(f),l.c(),ee(l,1),l.m(t,null)):l&&(_t(),ce(l,1,1,()=>{l=null}),vt()),h&16&&(s=f[4]&&Ls(f[4].text)),s?c?(c.p(f,h),h&16&&ee(c,1)):(c=jf(f),c.c(),ee(c,1),c.m(e,a)):c&&(_t(),ce(c,1,1,()=>{c=null}),vt()),f[2]?u&&(u.d(1),u=null):u?u.p(f,h):(u=Yf(f),u.c(),u.m(e,null)),(!o||h&2)&&lt(e,"try-me-header--book-open",f[1])},i(f){o||(ee(l),ee(c),o=!0)},o(f){ce(l),ce(c),o=!1},d(f){f&&U(e),l&&l.d(),c&&c.d(),u&&u.d()}}}function bA(i,e,t){let n,r,s;const a=Nr();let{textAndAudio:o}=e,{topHeaderText:l}=e,{isBookOpen:c=!1}=e,{isDone:u=!1}=e,{nextButtonEnabled:f=!1}=e,{advanceAction:h}=e,{onNext:d}=e,g=gt.getState(Ze.DEVICE);Ft(i,g,p=>t(5,s=p));const _=()=>{s===Wt.PLAYING?gt.pause(Ze.DEVICE):gt.play(Ze.DEVICE)},m=()=>{h===as.AUDIO?d():Pl.set(!0)};return i.$$set=p=>{"textAndAudio"in p&&t(9,o=p.textAndAudio),"topHeaderText"in p&&t(0,l=p.topHeaderText),"isBookOpen"in p&&t(1,c=p.isBookOpen),"isDone"in p&&t(2,u=p.isDone),"nextButtonEnabled"in p&&t(3,f=p.nextButtonEnabled),"advanceAction"in p&&t(10,h=p.advanceAction),"onNext"in p&&t(11,d=p.onNext)},i.$$.update=()=>{var p,y;i.$$.dirty&4640&&s===Wt.ENDED&&((o==null?void 0:o.length)<=n+1?(a("audioEnd"),t(12,n=0)):t(12,n++,n)),i.$$.dirty&4608&&t(4,r=(p=o==null?void 0:o.at(n))==null?void 0:p.headerTts),i.$$.dirty&1&&l!=null&&l.playAudio&&((y=gt.players.get(Ze.DEVICE))==null||y.trackState.set(Wt.IDLE),gt.setAudio({playerType:Ze.DEVICE,src:l.url,playAudio:l.playAudio})),i.$$.dirty&16&&r!=null&&r.playAudio&&gt.setAudio({playerType:Ze.DEVICE,src:r.url,playAudio:r.playAudio})},t(12,n=0),[l,c,u,f,r,s,g,_,m,o,h,d,n]}class TA extends bt{constructor(e){super(),Tt(this,e,bA,SA,St,{textAndAudio:9,topHeaderText:0,isBookOpen:1,isDone:2,nextButtonEnabled:3,advanceAction:10,onNext:11})}}function AA(){return`start_${(e=>[...Array(e)].map(()=>Math.floor(Math.random()*16).toString(16)).join(""))(20).toUpperCase()}`}const Ia=class Ia extends Jh{constructor(t){super(t);Pt(this,"systemColId","system");Pt(this,"speakingColId","speaking");Pt(this,"system_uptime",AA());t.demoType==="exhibition"&&this.createMissingDocsAndCols().then(async()=>await this.uploadSystemData())}static getInstance(t){return this.db||(this.db=new Ia(t)),this.db}async createMissingDocsAndCols(){var n;if(this.config.demoType!=="exhibition"||!this.dbClient)return;const t=await super.createMetadata("general");(n=await this.dbClient.list())!=null&&n.includes(t)||(await this.dbClient.createDocument(t),await Promise.all([this.dbClient.createCollection(t,this.systemColId),this.dbClient.createCollection(t,this.speakingColId)]))}async uploadSpeakingData(t){if(this.config.demoType!=="exhibition"||!this.dbClient)return;const n=Date.now(),r=t.bookText.text.trim().replace(/\s+/g," ").split(" "),s=new Audio(t.bookText.url);s.addEventListener("loadedmetadata",async()=>{var o;const a={ocr_word_count_received:r.length,speaking_duration:s.duration,spoken_words:r.length,timestamp:n};await((o=this.dbClient)==null?void 0:o.setTypedItem(this.remoteId,this.speakingColId,ml(new Date(n)),a))})}async uploadSystemData(){if(this.config.demoType!=="exhibition"||!this.dbClient)return;const t=await this.dbClient.getTypedItem(this.remoteId,this.systemColId,this.system_uptime),n=Date.now();await this.dbClient.setTypedItem(this.remoteId,this.systemColId,this.system_uptime,{duration_sec:t!=null&&t.start_timestamp?Math.floor((n-((t==null?void 0:t.start_timestamp)||0))/1e3):0,start_timestamp:(t==null?void 0:t.start_timestamp)||n,timestamp:n})}};Pt(Ia,"db");let ll=Ia;function wA(i){let e,t,n,r,s,a=!i[1].skipAudioTest&&Zf(i);const o=[LA,CA],l=[];function c(u,f){return u[21]?0:1}return t=c(i),n=l[t]=o[t](i),{c(){a&&a.c(),e=Ee(),n.c(),r=wt()},l(u){a&&a.l(u),e=Se(u),n.l(u),r=wt()},m(u,f){a&&a.m(u,f),fe(u,e,f),l[t].m(u,f),fe(u,r,f),s=!0},p(u,f){u[1].skipAudioTest?a&&(_t(),ce(a,1,1,()=>{a=null}),vt()):a?(a.p(u,f),f[0]&2&&ee(a,1)):(a=Zf(u),a.c(),ee(a,1),a.m(e.parentNode,e));let h=t;t=c(u),t===h?l[t].p(u,f):(_t(),ce(l[h],1,1,()=>{l[h]=null}),vt(),n=l[t],n?n.p(u,f):(n=l[t]=o[t](u),n.c()),ee(n,1),n.m(r.parentNode,r))},i(u){s||(ee(a),ee(n),s=!0)},o(u){ce(a),ce(n),s=!1},d(u){u&&(U(e),U(r)),a&&a.d(u),l[t].d(u)}}}function RA(i){let e,t,n;return t=new rh({props:{open:!0,scrimClickAction:"",escapeKeyAction:"",$$slots:{default:[NA]},$$scope:{ctx:i}}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(r){e=ne(r,"DIV",{class:!0});var s=ae(e);Ne(t.$$.fragment,s),s.forEach(U),this.h()},h(){H(e,"class","browser-blocked svelte-4doixc")},m(r,s){fe(r,e,s),Ie(t,e,null),n=!0},p(r,s){const a={};s[0]&1|s[1]&8192&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){ce(t.$$.fragment,r),n=!1},d(r){r&&U(e),De(t)}}}function Zf(i){let e,t;return e=new GM({props:{steps:i[3],denied:i[2],audioUrl:"/sounds/soundtest-1sec.flac"}}),e.$on("soundTestClosed",i[34]),e.$on("soundTestPassed",i[35]),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r[0]&8&&(s.steps=n[3]),r[0]&4&&(s.denied=n[2]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function CA(i){var I,z;let e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m,p,y,M,S=!i[19]&&((I=i[12])==null?void 0:I.length)&&Jf(i),x=(i[1].demoType==="user"||i[1].demoType==="exhibition"&&!i[9])&&Qf(i),b=i[9]&&i[1].demoType==="user"&&$f(i);function N(R){i[38](R)}let w={books:i[4],config:i[1],speechRecognitionMessages:i[5],reportsData:i[6],delay:cl,stepContent:i[7].content,onNext:i[26],hideText:i[22]};i[17]!==void 0&&(w.selectedBook=i[17]),d=new jy({props:w}),an.push(()=>Or(d,"selectedBook",N)),d.$on("updateHeaderTitle",i[27]),d.$on("updateHeaderTopText",i[28]),d.$on("bookOpened",i[39]),d.$on("hoverBookSelection",i[29]),d.$on("leaveHoverBookSelection",i[29]);let v=!i[22]&&eh(i),E=((z=i[7].content)==null?void 0:z.bookState)!==zn.BOOK_SELECTION&&th(i);return{c(){e=te("div"),t=te("button"),n=te("img"),l=Ee(),S&&S.c(),c=Ee(),x&&x.c(),u=Ee(),b&&b.c(),f=Ee(),h=te("div"),Le(d.$$.fragment),_=Ee(),v&&v.c(),m=Ee(),E&&E.c(),this.h()},l(R){e=ne(R,"DIV",{class:!0,style:!0});var O=ae(e);t=ne(O,"BUTTON",{class:!0});var B=ae(t);n=ne(B,"IMG",{src:!0,alt:!0}),B.forEach(U),l=Se(O),S&&S.l(O),c=Se(O),x&&x.l(O),u=Se(O),b&&b.l(O),f=Se(O),h=ne(O,"DIV",{class:!0});var Q=ae(h);Ne(d.$$.fragment,Q),Q.forEach(U),_=Se(O),v&&v.l(O),m=Se(O),E&&E.l(O),O.forEach(U),this.h()},h(){In(n.src,r=i[15]?"/images/unmute_icon.svg":"/images/mute_icon.svg")||H(n,"src",r),H(n,"alt",s=i[15]?"Unmute Background Music button":"Mute Background Music button"),H(t,"class",a="try-me__mute-button "+(i[7].backgroundMusic?"":"disabled")+" svelte-4doixc"),t.disabled=o=!i[7].backgroundMusic,H(h,"class","try-me__content svelte-4doixc"),H(e,"class","try-me svelte-4doixc"),H(e,"style",`--delay: ${cl/1e3}s;`),lt(e,"try-me--done",i[22])},m(R,O){fe(R,e,O),Y(e,t),Y(t,n),Y(e,l),S&&S.m(e,null),Y(e,c),x&&x.m(e,null),Y(e,u),b&&b.m(e,null),Y(e,f),Y(e,h),Ie(d,h,null),Y(e,_),v&&v.m(e,null),Y(e,m),E&&E.m(e,null),p=!0,y||(M=Nn(t,"click",i[30]),y=!0)},p(R,O){var Q,Z;(!p||O[0]&32768&&!In(n.src,r=R[15]?"/images/unmute_icon.svg":"/images/mute_icon.svg"))&&H(n,"src",r),(!p||O[0]&32768&&s!==(s=R[15]?"Unmute Background Music button":"Mute Background Music button"))&&H(n,"alt",s),(!p||O[0]&128&&a!==(a="try-me__mute-button "+(R[7].backgroundMusic?"":"disabled")+" svelte-4doixc"))&&H(t,"class",a),(!p||O[0]&128&&o!==(o=!R[7].backgroundMusic))&&(t.disabled=o),!R[19]&&((Q=R[12])!=null&&Q.length)?S?(S.p(R,O),O[0]&528384&&ee(S,1)):(S=Jf(R),S.c(),ee(S,1),S.m(e,c)):S&&(_t(),ce(S,1,1,()=>{S=null}),vt()),R[1].demoType==="user"||R[1].demoType==="exhibition"&&!R[9]?x?(x.p(R,O),O[0]&514&&ee(x,1)):(x=Qf(R),x.c(),ee(x,1),x.m(e,u)):x&&(_t(),ce(x,1,1,()=>{x=null}),vt()),R[9]&&R[1].demoType==="user"?b?(b.p(R,O),O[0]&514&&ee(b,1)):(b=$f(R),b.c(),ee(b,1),b.m(e,f)):b&&(_t(),ce(b,1,1,()=>{b=null}),vt());const B={};O[0]&16&&(B.books=R[4]),O[0]&2&&(B.config=R[1]),O[0]&32&&(B.speechRecognitionMessages=R[5]),O[0]&64&&(B.reportsData=R[6]),O[0]&128&&(B.stepContent=R[7].content),O[0]&4194304&&(B.hideText=R[22]),!g&&O[0]&131072&&(g=!0,B.selectedBook=R[17],Ur(()=>g=!1)),d.$set(B),R[22]?v&&(_t(),ce(v,1,1,()=>{v=null}),vt()):v?(v.p(R,O),O[0]&4194304&&ee(v,1)):(v=eh(R),v.c(),ee(v,1),v.m(e,m)),((Z=R[7].content)==null?void 0:Z.bookState)!==zn.BOOK_SELECTION?E?E.p(R,O):(E=th(R),E.c(),E.m(e,null)):E&&(E.d(1),E=null),(!p||O[0]&4194304)&&lt(e,"try-me--done",R[22])},i(R){p||(ee(S),ee(x),ee(b),ee(d.$$.fragment,R),ee(v),p=!0)},o(R){ce(S),ce(x),ce(b),ce(d.$$.fragment,R),ce(v),p=!1},d(R){R&&U(e),S&&S.d(),x&&x.d(),b&&b.d(),De(d),v&&v.d(),E&&E.d(),y=!1,M()}}}function LA(i){var s,a;let e,t,n,r;return t=new vA({props:{sections:(a=(s=i[7].content)==null?void 0:s.section)==null?void 0:a.sections,email:i[10],sendPdfSenderName:i[6].sendPdfSenderName,sendPdfSubject:i[6].sendPdfSubject}}),{c(){e=te("div"),Le(t.$$.fragment),this.h()},l(o){e=ne(o,"DIV",{class:!0});var l=ae(e);Ne(t.$$.fragment,l),l.forEach(U),this.h()},h(){H(e,"class","fill-height")},m(o,l){fe(o,e,l),Ie(t,e,null),r=!0},p(o,l){var u,f;const c={};l[0]&128&&(c.sections=(f=(u=o[7].content)==null?void 0:u.section)==null?void 0:f.sections),l[0]&1024&&(c.email=o[10]),l[0]&64&&(c.sendPdfSenderName=o[6].sendPdfSenderName),l[0]&64&&(c.sendPdfSubject=o[6].sendPdfSubject),t.$set(c)},i(o){r||(ee(t.$$.fragment,o),n||hl(()=>{n=Hd(e,fs,{}),n.start()}),r=!0)},o(o){ce(t.$$.fragment,o),r=!1},d(o){o&&U(e),De(t)}}}function Jf(i){let e,t,n,r={ctx:i,current:null,token:null,hasCatch:!1,pending:PA,then:DA,catch:IA,value:43,blocks:[,,,]};return kd(Dd(()=>import("./CmsBackground.D_qVNAVH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),r),{c(){e=te("div"),r.block.c()},l(s){e=ne(s,"DIV",{});var a=ae(e);r.block.l(a),a.forEach(U)},m(s,a){fe(s,e,a),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,n=!0},p(s,a){i=s,Bd(r,i,a)},i(s){n||(ee(r.block),hl(()=>{n&&(t||(t=xa(e,fs,{},!0)),t.run(1))}),n=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];ce(o)}t||(t=xa(e,fs,{},!1)),t.run(0),n=!1},d(s){s&&U(e),r.block.d(),r.token=null,r=null,s&&t&&t.end()}}}function IA(i){return{c:ct,l:ct,m:ct,p:ct,i:ct,o:ct,d:ct}}function DA(i){let e,t,n;var r=i[43].default;function s(a,o){return{props:{background:a[12]}}}return r&&(e=Yl(r,s(i))),{c(){e&&Le(e.$$.fragment),t=wt()},l(a){e&&Ne(e.$$.fragment,a),t=wt()},m(a,o){e&&Ie(e,a,o),fe(a,t,o),n=!0},p(a,o){if(r!==(r=a[43].default)){if(e){_t();const l=e;ce(l.$$.fragment,1,0,()=>{De(l,1)}),vt()}r?(e=Yl(r,s(a)),Le(e.$$.fragment),ee(e.$$.fragment,1),Ie(e,t.parentNode,t)):e=null}else if(r){const l={};o[0]&4096&&(l.background=a[12]),e.$set(l)}},i(a){n||(e&&ee(e.$$.fragment,a),n=!0)},o(a){e&&ce(e.$$.fragment,a),n=!1},d(a){a&&U(t),e&&De(e,a)}}}function PA(i){return{c:ct,l:ct,m:ct,p:ct,i:ct,o:ct,d:ct}}function Qf(i){var n,r;let e,t;return e=new TA({props:{textAndAudio:i[14],topHeaderText:i[13],nextButtonEnabled:(n=i[7])==null?void 0:n.nextButtonEnabled,isBookOpen:i[19],isDone:i[22],advanceAction:(r=i[7])==null?void 0:r.advance,onNext:i[26]}}),e.$on("audioEnd",i[36]),{c(){Le(e.$$.fragment)},l(s){Ne(e.$$.fragment,s)},m(s,a){Ie(e,s,a),t=!0},p(s,a){var l,c;const o={};a[0]&16384&&(o.textAndAudio=s[14]),a[0]&8192&&(o.topHeaderText=s[13]),a[0]&128&&(o.nextButtonEnabled=(l=s[7])==null?void 0:l.nextButtonEnabled),a[0]&524288&&(o.isBookOpen=s[19]),a[0]&4194304&&(o.isDone=s[22]),a[0]&128&&(o.advanceAction=(c=s[7])==null?void 0:c.advance),e.$set(o)},i(s){t||(ee(e.$$.fragment,s),t=!0)},o(s){ce(e.$$.fragment,s),t=!1},d(s){De(e,s)}}}function $f(i){let e,t,n;function r(a){i[37](a)}let s={onNext:i[26]};return i[10]!==void 0&&(s.email=i[10]),e=new MA({props:s}),an.push(()=>Or(e,"email",r)),{c(){Le(e.$$.fragment)},l(a){Ne(e.$$.fragment,a)},m(a,o){Ie(e,a,o),n=!0},p(a,o){const l={};!t&&o[0]&1024&&(t=!0,l.email=a[10],Ur(()=>t=!1)),e.$set(l)},i(a){n||(ee(e.$$.fragment,a),n=!0)},o(a){ce(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function eh(i){let e,t;return e=new LM({props:{state:i[23],delay:cl,isBookOpened:i[11],isUserAnswering:i[20],onNext:i[26],generalDb:i[8],book:i[4][i[17]]}}),{c(){Le(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,r){Ie(e,n,r),t=!0},p(n,r){const s={};r[0]&8388608&&(s.state=n[23]),r[0]&2048&&(s.isBookOpened=n[11]),r[0]&1048576&&(s.isUserAnswering=n[20]),r[0]&256&&(s.generalDb=n[8]),r[0]&131088&&(s.book=n[4][n[17]]),e.$set(s)},i(n){t||(ee(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function th(i){let e,t,n,r;return{c(){e=te("a"),t=te("img"),this.h()},l(s){e=ne(s,"A",{class:!0,"data-sveltekit-reload":!0,href:!0});var a=ae(e);t=ne(a,"IMG",{src:!0,alt:!0}),a.forEach(U),this.h()},h(){In(t.src,n="/images/back-icon.svg")||H(t,"src",n),H(t,"alt","back"),H(e,"class","try-me__back-button svelte-4doixc"),H(e,"data-sveltekit-reload",""),H(e,"href",r=i[25].url.pathname),lt(e,"try-me__flip",i[24].direction==="rtl")},m(s,a){fe(s,e,a),Y(e,t)},p(s,a){a[0]&33554432&&r!==(r=s[25].url.pathname)&&H(e,"href",r),a[0]&16777216&&lt(e,"try-me__flip",s[24].direction==="rtl")},d(s){s&&U(e)}}}function NA(i){let e,t,n=i[0].title+"",r,s,a,o;return a=new Oa({props:{content:i[0].message}}),{c(){e=te("div"),t=te("h4"),r=it(n),s=Ee(),Le(a.$$.fragment),this.h()},l(l){e=ne(l,"DIV",{class:!0});var c=ae(e);t=ne(c,"H4",{class:!0});var u=ae(t);r=rt(u,n),u.forEach(U),s=Se(c),Ne(a.$$.fragment,c),c.forEach(U),this.h()},h(){H(t,"class","title bold my-auto svelte-4doixc"),H(e,"class","blocked-msg svelte-4doixc")},m(l,c){fe(l,e,c),Y(e,t),Y(t,r),Y(e,s),Ie(a,e,null),o=!0},p(l,c){(!o||c[0]&1)&&n!==(n=l[0].title+"")&&Rt(r,n);const u={};c[0]&1&&(u.content=l[0].message),a.$set(u)},i(l){o||(ee(a.$$.fragment,l),o=!0)},o(l){ce(a.$$.fragment,l),o=!1},d(l){l&&U(e),De(a)}}}function UA(i){let e,t,n,r;const s=[RA,wA],a=[];function o(l,c){return l[16]?0:1}return e=o(i),t=a[e]=s[e](i),{c(){t.c(),n=wt()},l(l){t.l(l),n=wt()},m(l,c){a[e].m(l,c),fe(l,n,c),r=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(_t(),ce(a[u],1,1,()=>{a[u]=null}),vt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),ee(t,1),t.m(n.parentNode,n))},i(l){r||(ee(t),r=!0)},o(l){ce(t),r=!1},d(l){l&&U(n),a[e].d(l)}}}let cl=1e3;function OA(i,e,t){let n,r,s,a,o,l,c,u,f,h,d,g,_;Ft(i,Co,K=>t(33,d=K)),Ft(i,nh,K=>t(24,g=K)),Ft(i,zd,K=>t(25,_=K));let{browserBlock:m}=e,{config:p}=e,{permissionsDenied:y}=e,{soundSteps:M=[]}=e,{steps:S}=e,{books:x}=e,{speechRecognitionMessages:b}=e,{reportsData:N}=e,w="",v=!1,E=[],I,z,R=[];const O=gt.players.get(Ze.BACKGROUND);let B=O==null?void 0:O.muted,Q=!1,Z;ji(()=>{var K,ve;navigator.userAgent.toLowerCase().includes("firefox")&&t(16,Q=!0),p.skipAudioTest&&(Co.set(!0),gt.setAudio({playerType:Ze.BACKGROUND,src:((ve=(K=x==null?void 0:x[1])==null?void 0:K.backgroundSound)==null?void 0:ve.url)||"",loop:!0}))});function P(K){var ve;Pl.set(!1),s.doOnComplete&&s.doOnComplete(),!(S.length<=r+1)&&(K&&(K.Title&&t(31,S[r+1].headerTitles=K.Title.map(Fe=>({headerTts:Fe})),S),K.DoOnComplete&&t(31,S[r+1].doOnComplete=K.DoOnComplete,S)),(ve=gt.players.get(Ze.DEVICE))==null||ve.trackState.set(Wt.IDLE),t(32,r++,r),Oy(S[r].name))}const q=K=>{var ve;K.detail.triggerNextOnAudioEnd&&((ve=gt.players.get(Ze.DEVICE))==null||ve.trackState.set(Wt.IDLE),t(18,a=as.AUDIO)),K.detail.title&&t(14,R=K.detail.title.map(Fe=>({headerTts:Fe})))},le=K=>{t(13,z=K.detail.title)},ye=async K=>{const{background:ve,backgroundSound:Fe}=K.detail;Fe!=null&&Fe.url&&JSON.stringify(I)!==JSON.stringify(Fe)&&gt.setAudio({playerType:Ze.BACKGROUND,src:Fe.url,loop:!0}),I=Fe,!(!ve||JSON.stringify(E)===JSON.stringify(ve))&&(t(12,E=[]),await vr(300),t(12,E=ve||[]))},ge=K=>{EA(()=>ye(K),300)},J=()=>{O&&B?(gt.unmute(Ze.BACKGROUND),t(15,B=O==null?void 0:O.muted),ki("try-me__unmute-button")):(ki("try-me__mute-button"),gt.mute(Ze.BACKGROUND),t(15,B=O==null?void 0:O.muted))},oe=()=>Co.set(!0),pe=()=>{var K,ve;return gt.setAudio({playerType:Ze.BACKGROUND,src:((ve=(K=x==null?void 0:x[1])==null?void 0:K.backgroundSound)==null?void 0:ve.url)||"",loop:!0})},_e=()=>a===as.AUDIO&&P();function D(K){w=K,t(10,w)}function we(K){Z=K,t(17,Z)}const be=()=>t(11,v=!0);return i.$$set=K=>{"browserBlock"in K&&t(0,m=K.browserBlock),"config"in K&&t(1,p=K.config),"permissionsDenied"in K&&t(2,y=K.permissionsDenied),"soundSteps"in K&&t(3,M=K.soundSteps),"steps"in K&&t(31,S=K.steps),"books"in K&&t(4,x=K.books),"speechRecognitionMessages"in K&&t(5,b=K.speechRecognitionMessages),"reportsData"in K&&t(6,N=K.reportsData)},i.$$.update=()=>{var K,ve,Fe,Ce,Be,ut;i.$$.dirty[0]&2&&t(8,n=p?ll.getInstance(p):void 0),i.$$.dirty[1]&3&&t(7,s=S[r]),i.$$.dirty[0]&128&&t(18,a=s.advance),i.$$.dirty[0]&128|i.$$.dirty[1]&4&&d&&t(14,R=s.headerTitles),i.$$.dirty[0]&128&&t(23,o=s.deviceState),i.$$.dirty[0]&128&&t(22,l=((K=s.content)==null?void 0:K.bookState)===zn.BOOK_DONE||((ve=s.content)==null?void 0:ve.bookState)===zn.BOOK_EMAIL),i.$$.dirty[0]&128&&t(21,c=((Fe=s.content)==null?void 0:Fe.bookState)===zn.REPORTS),i.$$.dirty[0]&128&&t(20,u=((Ce=s.content)==null?void 0:Ce.textState)===It.TEXT_USER_ANSWERING),i.$$.dirty[0]&128&&t(9,f=((Be=s.content)==null?void 0:Be.bookState)===zn.BOOK_EMAIL),i.$$.dirty[0]&128&&t(19,h=((ut=s.content)==null?void 0:ut.bookState)!==zn.BOOK_SELECTION),i.$$.dirty[0]&770&&f&&p.demoType==="exhibition"&&(n==null||n.uploadSystemData().then(()=>{const ft=new URLSearchParams([["access_token",p.credentials.accessToken],["user_hash",p.credentials.userHash]]),xt=new URL(`/main/users/${p.credentials.studentId}?${ft.toString()}`,p.credentials.learnAdminUrl);window.location.href=xt.toString()})),i.$$.dirty[0]&128&&s.advance===as.TIMEOUT&&s.duration&&vr(s.duration).then(()=>P()),i.$$.dirty[0]&128&&(s.backgroundMusic?gt.play(Ze.BACKGROUND):gt.pause(Ze.BACKGROUND,us)),i.$$.dirty[0]&64&&N&&jh.set((N==null?void 0:N.userGrade)??5)},t(32,r=0),[m,p,y,M,x,b,N,s,n,f,w,v,E,z,R,B,Q,Z,a,h,u,c,l,o,g,_,P,q,le,ge,J,S,r,d,oe,pe,_e,D,we,be]}class s1 extends bt{constructor(e){super(),Tt(this,e,OA,UA,St,{browserBlock:0,config:1,permissionsDenied:2,soundSteps:3,steps:31,books:4,speechRecognitionMessages:5,reportsData:6},null,[-1,-1])}}export{s1 as default};
