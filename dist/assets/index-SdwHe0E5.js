(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="166",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kl=0,ya=1,Vl=2,zo=1,Ho=2,ln=3,Dn=0,Tt=1,cn=2,Pn=0,Mi=1,Ea=2,ba=3,Aa=4,Gl=5,Gn=100,Wl=101,Xl=102,Yl=103,jl=104,ql=200,$l=201,Kl=202,Zl=203,Ss=204,ys=205,Jl=206,Ql=207,ec=208,tc=209,nc=210,ic=211,rc=212,sc=213,ac=214,oc=0,lc=1,cc=2,Tr=3,uc=4,hc=5,dc=6,fc=7,ko=0,pc=1,mc=2,Ln=0,gc=1,_c=2,vc=3,Vo=4,xc=5,Mc=6,Sc=7,Go=300,Ei=301,bi=302,Cr=303,Es=304,Fr=306,bs=1e3,hn=1001,As=1002,wt=1003,yc=1004,$i=1005,xt=1006,Wr=1007,Rn=1008,pn=1009,Wo=1010,Xo=1011,Vi=1012,ia=1013,Yn=1014,Ot=1015,dn=1016,ra=1017,sa=1018,Ai=1020,Yo=35902,jo=1021,qo=1022,Wt=1023,$o=1024,Ko=1025,Si=1026,wi=1027,Zo=1028,aa=1029,Jo=1030,oa=1031,la=1033,Sr=33776,yr=33777,Er=33778,br=33779,ws=35840,Ts=35841,Cs=35842,Rs=35843,Ps=36196,Ls=37492,Ds=37496,Is=37808,Us=37809,Ns=37810,Fs=37811,Os=37812,Bs=37813,zs=37814,Hs=37815,ks=37816,Vs=37817,Gs=37818,Ws=37819,Xs=37820,Ys=37821,Ar=36492,js=36494,qs=36495,Qo=36283,$s=36284,Ks=36285,Zs=36286,Ec=3200,el=3201,tl=0,bc=1,Cn="",Xt="srgb",gn="srgb-linear",ca="display-p3",Or="display-p3-linear",Rr="linear",Je="srgb",Pr="rec709",Lr="p3",Qn=7680,wa=519,Ac=512,wc=513,Tc=514,nl=515,Cc=516,Rc=517,Pc=518,Lc=519,Ta=35044,Ca="300 es",fn=2e3,Dr=2001;class $n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const Hi=Math.PI/180,Gi=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function ua(i,e){return(i%e+e)%e}function Dc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ic(i,e,t){return i!==e?(t-i)/(e-i):0}function ki(i,e,t){return(1-t)*i+t*e}function Uc(i,e,t,n){return ki(i,e,1-Math.exp(-t*n))}function Nc(i,e=1){return e-Math.abs(ua(i,e*2)-e)}function Fc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Oc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zc(i,e){return i+Math.random()*(e-i)}function Hc(i){return i*(.5-Math.random())}function kc(i){i!==void 0&&(Ra=i);let e=Ra+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vc(i){return i*Hi}function Gc(i){return i*Gi}function Wc(i){return(i&i-1)===0&&i!==0}function Xc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),m=s((e-n)/2),g=a((e-n)/2),_=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*d,c*m,c*g,o*l);break;case"YZY":i.set(c*g,o*d,c*m,o*l);break;case"ZXZ":i.set(c*m,c*g,o*d,o*l);break;case"XZX":i.set(o*d,c*x,c*_,o*l);break;case"YXY":i.set(c*_,o*d,c*x,o*l);break;case"ZYZ":i.set(c*x,c*_,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const il={DEG2RAD:Hi,RAD2DEG:Gi,generateUUID:Ri,clamp:gt,euclideanModulo:ua,mapLinear:Dc,inverseLerp:Ic,lerp:ki,damp:Uc,pingpong:Nc,smoothstep:Fc,smootherstep:Oc,randInt:Bc,randFloat:zc,randFloatSpread:Hc,seededRandom:kc,degToRad:Vc,radToDeg:Gc,isPowerOfTwo:Wc,ceilPowerOfTwo:Xc,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:jc,normalize:St,denormalize:vi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],m=n[7],g=n[2],_=n[5],x=n[8],b=r[0],f=r[3],h=r[6],S=r[1],M=r[4],T=r[7],N=r[2],E=r[5],A=r[8];return s[0]=a*b+o*S+c*N,s[3]=a*f+o*M+c*E,s[6]=a*h+o*T+c*A,s[1]=l*b+d*S+m*N,s[4]=l*f+d*M+m*E,s[7]=l*h+d*T+m*A,s[2]=g*b+_*S+x*N,s[5]=g*f+_*M+x*E,s[8]=g*h+_*T+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=d*a-o*l,g=o*c-d*s,_=l*s-a*c,x=t*m+n*g+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=m*b,e[1]=(r*l-d*n)*b,e[2]=(o*n-r*a)*b,e[3]=g*b,e[4]=(d*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=_*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ge;function rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qc(){const i=Ir("canvas");return i.style.display="block",i}const Pa={};function sl(i){i in Pa||(Pa[i]=!0,console.warn(i))}function $c(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const La=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[gn]:{transfer:Rr,primaries:Pr,toReference:i=>i,fromReference:i=>i},[Xt]:{transfer:Je,primaries:Pr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:Rr,primaries:Lr,toReference:i=>i.applyMatrix3(Da),fromReference:i=>i.applyMatrix3(La)},[ca]:{transfer:Je,primaries:Lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Da),fromReference:i=>i.applyMatrix3(La).convertLinearToSRGB()}},Kc=new Set([gn,Or]),Ze={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ki[e].toReference,r=Ki[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ki[i].primaries},getTransfer:function(i){return i===Cn?Rr:Ki[i].transfer}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class Zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Ir("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jc=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jr(r[a].image)):s.push(jr(r[a]))}else s=jr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qc=0;class Et extends $n{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=hn,r=hn,s=xt,a=Rn,o=Wt,c=pn,l=Et.DEFAULT_ANISOTROPY,d=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Ri(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Go;Et.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],m=c[8],g=c[1],_=c[5],x=c[9],b=c[2],f=c[6],h=c[10];if(Math.abs(d-g)<.01&&Math.abs(m-b)<.01&&Math.abs(x-f)<.01){if(Math.abs(d+g)<.1&&Math.abs(m+b)<.1&&Math.abs(x+f)<.1&&Math.abs(l+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(_+1)/2,N=(h+1)/2,E=(d+g)/4,A=(m+b)/4,v=(x+f)/4;return M>T&&M>N?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=A/n):T>N?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=E/r,s=v/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=A/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((f-x)*(f-x)+(m-b)*(m-b)+(g-d)*(g-d));return Math.abs(S)<.001&&(S=1),this.x=(f-x)/S,this.y=(m-b)/S,this.z=(g-d)/S,this.w=Math.acos((l+_+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends $n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ol extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],m=n[r+3];const g=s[a+0],_=s[a+1],x=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m;return}if(o===1){e[t+0]=g,e[t+1]=_,e[t+2]=x,e[t+3]=b;return}if(m!==b||c!==g||l!==_||d!==x){let f=1-o;const h=c*g+l*_+d*x+m*b,S=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const N=Math.sqrt(M),E=Math.atan2(N,h*S);f=Math.sin(f*E)/N,o=Math.sin(o*E)/N}const T=o*S;if(c=c*f+g*T,l=l*f+_*T,d=d*f+x*T,m=m*f+b*T,f===1-o){const N=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=N,l*=N,d*=N,m*=N}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],m=s[a],g=s[a+1],_=s[a+2],x=s[a+3];return e[t]=o*x+d*m+c*_-l*g,e[t+1]=c*x+d*g+l*m-o*_,e[t+2]=l*x+d*_+o*g-c*m,e[t+3]=d*x-o*m-c*g-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),m=o(s/2),g=c(n/2),_=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=g*d*m+l*_*x,this._y=l*_*m-g*d*x,this._z=l*d*x+g*_*m,this._w=l*d*m-g*_*x;break;case"YXZ":this._x=g*d*m+l*_*x,this._y=l*_*m-g*d*x,this._z=l*d*x-g*_*m,this._w=l*d*m+g*_*x;break;case"ZXY":this._x=g*d*m-l*_*x,this._y=l*_*m+g*d*x,this._z=l*d*x+g*_*m,this._w=l*d*m-g*_*x;break;case"ZYX":this._x=g*d*m-l*_*x,this._y=l*_*m+g*d*x,this._z=l*d*x-g*_*m,this._w=l*d*m+g*_*x;break;case"YZX":this._x=g*d*m+l*_*x,this._y=l*_*m+g*d*x,this._z=l*d*x-g*_*m,this._w=l*d*m-g*_*x;break;case"XZY":this._x=g*d*m-l*_*x,this._y=l*_*m-g*d*x,this._z=l*d*x+g*_*m,this._w=l*d*m+g*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],m=t[10],g=n+o+m;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(d-c)*_,this._y=(s-l)*_,this._z=(a-r)*_}else if(n>o&&n>m){const _=2*Math.sqrt(1+n-o-m);this._w=(d-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+l)/_}else if(o>m){const _=2*Math.sqrt(1+o-n-m);this._w=(s-l)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+d)/_}else{const _=2*Math.sqrt(1+m-n-o);this._w=(a-r)/_,this._x=(s+l)/_,this._y=(c+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),m=Math.sin((1-t)*d)/l,g=Math.sin(t*d)/l;return this._w=a*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+c*l+a*m-o*d,this.y=n+c*d+o*l-s*m,this.z=r+c*m+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new G,Ia=new qn;class Xi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),Ji.subVectors(this.max,Ii),ti.subVectors(e.a,Ii),ni.subVectors(e.b,Ii),ii.subVectors(e.c,Ii),Mn.subVectors(ni,ti),Sn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Fn.z,Fn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Fn.z,0,-Fn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Fn.y,Fn.x,0];return!$r(t,ti,ni,ii,Ji)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,ti,ni,ii,Ji))?!1:(Qi.crossVectors(Mn,Sn),t=[Qi.x,Qi.y,Qi.z],$r(t,ti,ni,ii,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new G,new G,new G,new G,new G,new G,new G,new G],Ht=new G,Zi=new Xi,ti=new G,ni=new G,ii=new G,Mn=new G,Sn=new G,Fn=new G,Ii=new G,Ji=new G,Qi=new G,On=new G;function $r(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){On.fromArray(i,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=t.dot(On),d=n.dot(On);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const nu=new Xi,Ui=new G,Kr=new G;class ha{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ui,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(Kr)),this.expandByPoint(Ui.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new G,Zr=new G,er=new G,yn=new G,Jr=new G,tr=new G,Qr=new G;class ll{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=yn.dot(this.direction),c=-yn.dot(er),l=yn.lengthSq(),d=Math.abs(1-a*a);let m,g,_,x;if(d>0)if(m=a*c-o,g=a*o-c,x=s*d,m>=0)if(g>=-x)if(g<=x){const b=1/d;m*=b,g*=b,_=m*(m+a*g+2*o)+g*(a*m+g+2*c)+l}else g=s,m=Math.max(0,-(a*g+o)),_=-m*m+g*(g+2*c)+l;else g=-s,m=Math.max(0,-(a*g+o)),_=-m*m+g*(g+2*c)+l;else g<=-x?(m=Math.max(0,-(-a*s+o)),g=m>0?-s:Math.min(Math.max(-s,-c),s),_=-m*m+g*(g+2*c)+l):g<=x?(m=0,g=Math.min(Math.max(-s,-c),s),_=g*(g+2*c)+l):(m=Math.max(0,-(a*s+o)),g=m>0?s:Math.min(Math.max(-s,-c),s),_=-m*m+g*(g+2*c)+l);else g=a>0?-s:s,m=Math.max(0,-(a*g+o)),_=-m*m+g*(g+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Zr).addScaledVector(er,g),_}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,g=this.origin;return l>=0?(n=(e.min.x-g.x)*l,r=(e.max.x-g.x)*l):(n=(e.max.x-g.x)*l,r=(e.min.x-g.x)*l),d>=0?(s=(e.min.y-g.y)*d,a=(e.max.y-g.y)*d):(s=(e.max.y-g.y)*d,a=(e.min.y-g.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-g.z)*m,c=(e.max.z-g.z)*m):(o=(e.max.z-g.z)*m,c=(e.min.z-g.z)*m),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,s){Jr.subVectors(t,e),tr.subVectors(n,e),Qr.crossVectors(Jr,tr);let a=this.direction.dot(Qr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,e);const c=o*this.direction.dot(tr.crossVectors(yn,tr));if(c<0)return null;const l=o*this.direction.dot(Jr.cross(yn));if(l<0||c+l>a)return null;const d=-o*yn.dot(Qr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,a,o,c,l,d,m,g,_,x,b,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,m,g,_,x,b,f)}set(e,t,n,r,s,a,o,c,l,d,m,g,_,x,b,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=m,h[14]=g,h[3]=_,h[7]=x,h[11]=b,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=a*d,_=a*m,x=o*d,b=o*m;t[0]=c*d,t[4]=-c*m,t[8]=l,t[1]=_+x*l,t[5]=g-b*l,t[9]=-o*c,t[2]=b-g*l,t[6]=x+_*l,t[10]=a*c}else if(e.order==="YXZ"){const g=c*d,_=c*m,x=l*d,b=l*m;t[0]=g+b*o,t[4]=x*o-_,t[8]=a*l,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=_*o-x,t[6]=b+g*o,t[10]=a*c}else if(e.order==="ZXY"){const g=c*d,_=c*m,x=l*d,b=l*m;t[0]=g-b*o,t[4]=-a*m,t[8]=x+_*o,t[1]=_+x*o,t[5]=a*d,t[9]=b-g*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const g=a*d,_=a*m,x=o*d,b=o*m;t[0]=c*d,t[4]=x*l-_,t[8]=g*l+b,t[1]=c*m,t[5]=b*l+g,t[9]=_*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const g=a*c,_=a*l,x=o*c,b=o*l;t[0]=c*d,t[4]=b-g*m,t[8]=x*m+_,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=_*m+x,t[10]=g-b*m}else if(e.order==="XZY"){const g=a*c,_=a*l,x=o*c,b=o*l;t[0]=c*d,t[4]=-m,t[8]=l*d,t[1]=g*m+b,t[5]=a*d,t[9]=_*m-x,t[2]=x*m-_,t[6]=o*d,t[10]=b*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,ru)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),En.crossVectors(n,Pt),En.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),En.crossVectors(n,Pt)),En.normalize(),nr.crossVectors(Pt,En),r[0]=En.x,r[4]=nr.x,r[8]=Pt.x,r[1]=En.y,r[5]=nr.y,r[9]=Pt.y,r[2]=En.z,r[6]=nr.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],m=n[5],g=n[9],_=n[13],x=n[2],b=n[6],f=n[10],h=n[14],S=n[3],M=n[7],T=n[11],N=n[15],E=r[0],A=r[4],v=r[8],p=r[12],u=r[1],w=r[5],D=r[9],O=r[13],z=r[2],k=r[6],F=r[10],X=r[14],j=r[3],se=r[7],te=r[11],pe=r[15];return s[0]=a*E+o*u+c*z+l*j,s[4]=a*A+o*w+c*k+l*se,s[8]=a*v+o*D+c*F+l*te,s[12]=a*p+o*O+c*X+l*pe,s[1]=d*E+m*u+g*z+_*j,s[5]=d*A+m*w+g*k+_*se,s[9]=d*v+m*D+g*F+_*te,s[13]=d*p+m*O+g*X+_*pe,s[2]=x*E+b*u+f*z+h*j,s[6]=x*A+b*w+f*k+h*se,s[10]=x*v+b*D+f*F+h*te,s[14]=x*p+b*O+f*X+h*pe,s[3]=S*E+M*u+T*z+N*j,s[7]=S*A+M*w+T*k+N*se,s[11]=S*v+M*D+T*F+N*te,s[15]=S*p+M*O+T*X+N*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],m=e[6],g=e[10],_=e[14],x=e[3],b=e[7],f=e[11],h=e[15];return x*(+s*c*m-r*l*m-s*o*g+n*l*g+r*o*_-n*c*_)+b*(+t*c*_-t*l*g+s*a*g-r*a*_+r*l*d-s*c*d)+f*(+t*l*m-t*o*_-s*a*m+n*a*_+s*o*d-n*l*d)+h*(-r*o*d-t*c*m+t*o*g+r*a*m-n*a*g+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=e[9],g=e[10],_=e[11],x=e[12],b=e[13],f=e[14],h=e[15],S=m*f*l-b*g*l+b*c*_-o*f*_-m*c*h+o*g*h,M=x*g*l-d*f*l-x*c*_+a*f*_+d*c*h-a*g*h,T=d*b*l-x*m*l+x*o*_-a*b*_-d*o*h+a*m*h,N=x*m*c-d*b*c-x*o*g+a*b*g+d*o*f-a*m*f,E=t*S+n*M+r*T+s*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=S*A,e[1]=(b*g*s-m*f*s-b*r*_+n*f*_+m*r*h-n*g*h)*A,e[2]=(o*f*s-b*c*s+b*r*l-n*f*l-o*r*h+n*c*h)*A,e[3]=(m*c*s-o*g*s-m*r*l+n*g*l+o*r*_-n*c*_)*A,e[4]=M*A,e[5]=(d*f*s-x*g*s+x*r*_-t*f*_-d*r*h+t*g*h)*A,e[6]=(x*c*s-a*f*s-x*r*l+t*f*l+a*r*h-t*c*h)*A,e[7]=(a*g*s-d*c*s+d*r*l-t*g*l-a*r*_+t*c*_)*A,e[8]=T*A,e[9]=(x*m*s-d*b*s-x*n*_+t*b*_+d*n*h-t*m*h)*A,e[10]=(a*b*s-x*o*s+x*n*l-t*b*l-a*n*h+t*o*h)*A,e[11]=(d*o*s-a*m*s-d*n*l+t*m*l+a*n*_-t*o*_)*A,e[12]=N*A,e[13]=(d*b*r-x*m*r+x*n*g-t*b*g-d*n*f+t*m*f)*A,e[14]=(x*o*r-a*b*r-x*n*c+t*b*c+a*n*f-t*o*f)*A,e[15]=(a*m*r-d*o*r+d*n*c-t*m*c-a*n*g+t*o*g)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,m=o+o,g=s*l,_=s*d,x=s*m,b=a*d,f=a*m,h=o*m,S=c*l,M=c*d,T=c*m,N=n.x,E=n.y,A=n.z;return r[0]=(1-(b+h))*N,r[1]=(_+T)*N,r[2]=(x-M)*N,r[3]=0,r[4]=(_-T)*E,r[5]=(1-(g+h))*E,r[6]=(f+S)*E,r[7]=0,r[8]=(x+M)*A,r[9]=(f-S)*A,r[10]=(1-(g+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const a=ri.set(r[4],r[5],r[6]).length(),o=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const l=1/s,d=1/a,m=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=m,kt.elements[9]*=m,kt.elements[10]*=m,t.setFromRotationMatrix(kt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=fn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-r),m=(t+e)/(t-e),g=(n+r)/(n-r);let _,x;if(o===fn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Dr)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=fn){const c=this.elements,l=1/(t-e),d=1/(n-r),m=1/(a-s),g=(t+e)*l,_=(n+r)*d;let x,b;if(o===fn)x=(a+s)*m,b=-2*m;else if(o===Dr)x=s*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new G,kt=new rt,iu=new G(0,0,0),ru=new G(1,1,1),En=new G,nr=new G,Pt=new G,Ua=new rt,Na=new qn;class Jt{constructor(e=0,t=0,n=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],m=r[2],g=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const Fa=new G,si=new qn,rn=new rt,ir=new G,Ni=new G,au=new G,ou=new qn,Oa=new G(1,0,0),Ba=new G(0,1,0),za=new G(0,0,1),Ha={type:"added"},lu={type:"removed"},ai={type:"childadded",child:null},es={type:"childremoved",child:null};class Mt extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new G,t=new Jt,n=new qn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Oa,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oa,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ni,ir,this.up):rn.lookAt(ir,Ni,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(rn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ha),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),es.child=e,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ha),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),m=a(e.shapes),g=a(e.skeletons),_=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new G(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new G,sn=new G,ts=new G,an=new G,oi=new G,li=new G,ka=new G,ns=new G,is=new G,rs=new G;class jt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),sn.subVectors(n,t),ts.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(sn),c=Vt.dot(ts),l=sn.dot(sn),d=sn.dot(ts),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const g=1/m,_=(l*c-o*d)*g,x=(a*d-o*c)*g;return s.set(1-_-x,x,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c)}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),sn.subVectors(e,t),Vt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Vt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;oi.subVectors(r,n),li.subVectors(s,n),ns.subVectors(e,n);const c=oi.dot(ns),l=li.dot(ns);if(c<=0&&l<=0)return t.copy(n);is.subVectors(e,r);const d=oi.dot(is),m=li.dot(is);if(d>=0&&m<=d)return t.copy(r);const g=c*m-d*l;if(g<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(oi,a);rs.subVectors(e,s);const _=oi.dot(rs),x=li.dot(rs);if(x>=0&&_<=x)return t.copy(s);const b=_*l-c*x;if(b<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(li,o);const f=d*x-_*m;if(f<=0&&m-d>=0&&_-x>=0)return ka.subVectors(s,r),o=(m-d)/(m-d+(_-x)),t.copy(r).addScaledVector(ka,o);const h=1/(f+b+g);return a=b*h,o=g*h,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ss(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=ua(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ss(a,s,e+1/3),this.g=ss(a,s,e),this.b=ss(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ze.fromWorkingColorSpace(vt.copy(this),e),Math.round(gt(vt.r*255,0,255))*65536+Math.round(gt(vt.g*255,0,255))*256+Math.round(gt(vt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Xt){Ze.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(rr);const n=ki(bn.h,rr.h,t),r=ki(bn.s,rr.s,t),s=ki(bn.l,rr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new We;We.NAMES=ul;let cu=0;class Pi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ss,this.blendDst=ys,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ss&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class hl extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=uu();function uu(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,d=0;for(;!(l&8388608);)l<<=1,d-=8388608;l&=-8388609,d+=947912704,s[c]=l|d}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function hu(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=gt(i,-65504,65504),un.floatView[0]=i;const e=un.uint32View[0],t=e>>23&511;return un.baseTable[t]+((e&8388607)>>un.shiftTable[t])}function du(i){const e=i>>10;return un.uint32View[0]=un.mantissaTable[un.offsetTable[e]+(i&1023)]+un.exponentTable[e],un.floatView[0]}const sr={toHalfFloat:hu,fromHalfFloat:du},ot=new G,ar=new Ie;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class dl extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fu=0;const Ut=new rt,as=new Mt,ci=new G,Lt=new Xi,Fi=new Xi,ft=new G;class Un extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rl(e)?fl:dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Lt.min,Fi.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Fi.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Fi.min),Lt.expandByPoint(Fi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ft.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(e,l),ft.add(ci)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new G,c[v]=new G;const l=new G,d=new G,m=new G,g=new Ie,_=new Ie,x=new Ie,b=new G,f=new G;function h(v,p,u){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,p),m.fromBufferAttribute(n,u),g.fromBufferAttribute(s,v),_.fromBufferAttribute(s,p),x.fromBufferAttribute(s,u),d.sub(l),m.sub(l),_.sub(g),x.sub(g);const w=1/(_.x*x.y-x.x*_.y);isFinite(w)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(m,-_.y).multiplyScalar(w),f.copy(m).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(w),o[v].add(b),o[p].add(b),o[u].add(b),c[v].add(f),c[p].add(f),c[u].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,p=S.length;v<p;++v){const u=S[v],w=u.start,D=u.count;for(let O=w,z=w+D;O<z;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new G,T=new G,N=new G,E=new G;function A(v){N.fromBufferAttribute(r,v),E.copy(N);const p=o[v];M.copy(p),M.sub(N.multiplyScalar(N.dot(p))).normalize(),T.crossVectors(E,p);const w=T.dot(c[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,w)}for(let v=0,p=S.length;v<p;++v){const u=S[v],w=u.start,D=u.count;for(let O=w,z=w+D;O<z;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,d=new G,m=new G;if(e)for(let g=0,_=e.count;g<_;g+=3){const x=e.getX(g+0),b=e.getX(g+1),f=e.getX(g+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,f),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,f),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let g=0,_=t.count;g<_;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,m=o.normalized,g=new l.constructor(c.length*d);let _=0,x=0;for(let b=0,f=c.length;b<f;b++){o.isInterleavedBufferAttribute?_=c[b]*o.data.stride+o.offset:_=c[b]*d;for(let h=0;h<d;h++)g[x++]=l[_++]}return new $t(g,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,m=l.length;d<m;d++){const g=l[d],_=e(g,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let m=0,g=l.length;m<g;m++){const _=l[m];d.push(_.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],m=s[l];for(let g=0,_=m.length;g<_;g++)d.push(m[g].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new rt,Bn=new ll,or=new ha,Ga=new G,ui=new G,hi=new G,di=new G,os=new G,lr=new G,cr=new Ie,ur=new Ie,hr=new Ie,Wa=new G,Xa=new G,Ya=new G,dr=new G,fr=new G;class qt extends Mt{constructor(e=new Un,t=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],m=s[c];d!==0&&(os.fromBufferAttribute(m,e),a?lr.addScaledVector(os,d):lr.addScaledVector(os.sub(t),d))}t.add(lr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(or.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(or,Ga)===null||Bn.origin.distanceToSquared(Ga)>(e.far-e.near)**2))&&(Va.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,g=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=g.length;x<b;x++){const f=g[x],h=a[f.materialIndex],S=Math.max(f.start,_.start),M=Math.min(o.count,Math.min(f.start+f.count,_.start+_.count));for(let T=S,N=M;T<N;T+=3){const E=o.getX(T),A=o.getX(T+1),v=o.getX(T+2);r=pr(this,h,e,n,l,d,m,E,A,v),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),b=Math.min(o.count,_.start+_.count);for(let f=x,h=b;f<h;f+=3){const S=o.getX(f),M=o.getX(f+1),T=o.getX(f+2);r=pr(this,a,e,n,l,d,m,S,M,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=g.length;x<b;x++){const f=g[x],h=a[f.materialIndex],S=Math.max(f.start,_.start),M=Math.min(c.count,Math.min(f.start+f.count,_.start+_.count));for(let T=S,N=M;T<N;T+=3){const E=T,A=T+1,v=T+2;r=pr(this,h,e,n,l,d,m,E,A,v),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),b=Math.min(c.count,_.start+_.count);for(let f=x,h=b;f<h;f+=3){const S=f,M=f+1,T=f+2;r=pr(this,a,e,n,l,d,m,S,M,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function pu(i,e,t,n,r,s,a,o){let c;if(e.side===Tt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Dn,o),c===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fr);return l<t.near||l>t.far?null:{distance:l,point:fr.clone(),object:i}}function pr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,ui),i.getVertexPosition(c,hi),i.getVertexPosition(l,di);const d=pu(i,e,t,n,ui,hi,di,dr);if(d){r&&(cr.fromBufferAttribute(r,o),ur.fromBufferAttribute(r,c),hr.fromBufferAttribute(r,l),d.uv=jt.getInterpolation(dr,ui,hi,di,cr,ur,hr,new Ie)),s&&(cr.fromBufferAttribute(s,o),ur.fromBufferAttribute(s,c),hr.fromBufferAttribute(s,l),d.uv1=jt.getInterpolation(dr,ui,hi,di,cr,ur,hr,new Ie)),a&&(Wa.fromBufferAttribute(a,o),Xa.fromBufferAttribute(a,c),Ya.fromBufferAttribute(a,l),d.normal=jt.getInterpolation(dr,ui,hi,di,Wa,Xa,Ya,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:c,c:l,normal:new G,materialIndex:0};jt.getNormal(ui,hi,di,m.normal),d.face=m}return d}class Yi extends Un{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],m=[];let g=0,_=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(m,2));function x(b,f,h,S,M,T,N,E,A,v,p){const u=T/A,w=N/v,D=T/2,O=N/2,z=E/2,k=A+1,F=v+1;let X=0,j=0;const se=new G;for(let te=0;te<F;te++){const pe=te*w-O;for(let Pe=0;Pe<k;Pe++){const Ue=Pe*u-D;se[b]=Ue*S,se[f]=pe*M,se[h]=z,l.push(se.x,se.y,se.z),se[b]=0,se[f]=0,se[h]=E>0?1:-1,d.push(se.x,se.y,se.z),m.push(Pe/A),m.push(1-te/v),X+=1}}for(let te=0;te<v;te++)for(let pe=0;pe<A;pe++){const Pe=g+pe+k*te,Ue=g+pe+k*(te+1),J=g+(pe+1)+k*(te+1),le=g+(pe+1)+k*te;c.push(Pe,Ue,le),c.push(Ue,J,le),j+=6}o.addGroup(_,j,p),_+=j,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const r in n)e[r]=n[r]}return e}function mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const gu={clone:Ti,merge:yt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ml extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new G,ja=new Ie,qa=new Ie;class Ft extends ml{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,ja,qa),t.subVectors(qa,ja)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class xu extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new Ft(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new Ft(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Ft(fi,pi,e,t);o.layers=this.layers,this.add(o);const c=new Ft(fi,pi,e,t);c.layers=this.layers,this.add(c);const l=new Ft(fi,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(m,g,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class gl extends Et{constructor(e,t,n,r,s,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Pn});s.uniforms.tEquirect.value=t;const a=new qt(r,s),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=xt),new xu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ls=new G,Su=new G,yu=new Ge;class Tn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ls.subVectors(n,t).cross(Su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ls),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yu.getNormalMatrix(e),r=this.coplanarPoint(ls).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new ha,mr=new G;class da{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],d=r[5],m=r[6],g=r[7],_=r[8],x=r[9],b=r[10],f=r[11],h=r[12],S=r[13],M=r[14],T=r[15];if(n[0].setComponents(c-s,g-l,f-_,T-h).normalize(),n[1].setComponents(c+s,g+l,f+_,T+h).normalize(),n[2].setComponents(c+a,g+d,f+x,T+S).normalize(),n[3].setComponents(c-a,g-d,f-x,T-S).normalize(),n[4].setComponents(c-o,g-m,f-b,T-M).normalize(),t===fn)n[5].setComponents(c+o,g+m,f+b,T+M).normalize();else if(t===Dr)n[5].setComponents(o,m,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Eu(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,m=l.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,l,d),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const d=c.array,m=c._updateRange,g=c.updateRanges;if(i.bindBuffer(l,o),m.count===-1&&g.length===0&&i.bufferSubData(l,0,d),g.length!==0){for(let _=0,x=g.length;_<x;_++){const b=g[_];i.bufferSubData(l,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}m.count!==-1&&(i.bufferSubData(l,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count),m.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Br extends Un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,m=e/o,g=t/c,_=[],x=[],b=[],f=[];for(let h=0;h<d;h++){const S=h*g-a;for(let M=0;M<l;M++){const T=M*m-s;x.push(T,-S,0),b.push(0,0,1),f.push(M/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){const M=S+l*h,T=S+l*(h+1),N=S+1+l*(h+1),E=S+1+l*h;_.push(M,T,E),_.push(T,N,E)}this.setIndex(_),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
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
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,$u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`
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
}`,nh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
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
}`,dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,_h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sh=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Eh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ih=`#if defined( USE_POINTS_UV )
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
#endif`,Uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
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
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Dd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vd=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wd=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Yd=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qd=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$d=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kd=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zd=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Jd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ef=`uniform vec3 color;
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
}`,tf=`uniform float rotation;
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
}`,nf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ve={alphahash_fragment:bu,alphahash_pars_fragment:Au,alphamap_fragment:wu,alphamap_pars_fragment:Tu,alphatest_fragment:Cu,alphatest_pars_fragment:Ru,aomap_fragment:Pu,aomap_pars_fragment:Lu,batching_pars_vertex:Du,batching_vertex:Iu,begin_vertex:Uu,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Vu,color_fragment:Gu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:Yu,common:ju,cube_uv_reflection_fragment:qu,defaultnormal_vertex:$u,displacementmap_pars_vertex:Ku,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:eh,colorspace_pars_fragment:th,envmap_fragment:nh,envmap_common_pars_fragment:ih,envmap_pars_fragment:rh,envmap_pars_vertex:sh,envmap_physical_pars_fragment:gh,envmap_vertex:ah,fog_vertex:oh,fog_pars_vertex:lh,fog_fragment:ch,fog_pars_fragment:uh,gradientmap_pars_fragment:hh,lightmap_pars_fragment:dh,lights_lambert_fragment:fh,lights_lambert_pars_fragment:ph,lights_pars_begin:mh,lights_toon_fragment:_h,lights_toon_pars_fragment:vh,lights_phong_fragment:xh,lights_phong_pars_fragment:Mh,lights_physical_fragment:Sh,lights_physical_pars_fragment:yh,lights_fragment_begin:Eh,lights_fragment_maps:bh,lights_fragment_end:Ah,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Ch,logdepthbuf_vertex:Rh,map_fragment:Ph,map_pars_fragment:Lh,map_particle_fragment:Dh,map_particle_pars_fragment:Ih,metalnessmap_fragment:Uh,metalnessmap_pars_fragment:Nh,morphinstance_vertex:Fh,morphcolor_vertex:Oh,morphnormal_vertex:Bh,morphtarget_pars_vertex:zh,morphtarget_vertex:Hh,normal_fragment_begin:kh,normal_fragment_maps:Vh,normal_pars_fragment:Gh,normal_pars_vertex:Wh,normal_vertex:Xh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:Kh,opaque_fragment:Zh,packing:Jh,premultiplied_alpha_fragment:Qh,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:ud,skinning_vertex:hd,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:yd,background_vert:Ed,background_frag:bd,backgroundCube_vert:Ad,backgroundCube_frag:wd,cube_vert:Td,cube_frag:Cd,depth_vert:Rd,depth_frag:Pd,distanceRGBA_vert:Ld,distanceRGBA_frag:Dd,equirect_vert:Id,equirect_frag:Ud,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:Bd,meshlambert_vert:zd,meshlambert_frag:Hd,meshmatcap_vert:kd,meshmatcap_frag:Vd,meshnormal_vert:Gd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:Yd,meshphysical_vert:jd,meshphysical_frag:qd,meshtoon_vert:$d,meshtoon_frag:Kd,points_vert:Zd,points_frag:Jd,shadow_vert:Qd,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},fe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yt={basic:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:yt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:yt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:yt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:yt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:yt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:yt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:yt([fe.common,fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:yt([fe.lights,fe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yt.physical={uniforms:yt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const gr={r:0,b:0,g:0},Hn=new Jt,rf=new rt;function sf(i,e,t,n,r,s,a){const o=new We(0);let c=s===!0?0:1,l,d,m=null,g=0,_=null;function x(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function b(S){let M=!1;const T=x(S);T===null?h(o,c):T&&T.isColor&&(h(T,1),M=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,M){const T=x(M);T&&(T.isCubeTexture||T.mapping===Fr)?(d===void 0&&(d=new qt(new Yi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ti(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Hn.copy(M.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(Hn)),d.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Je,(m!==T||g!==T.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,m=T,g=T.version,_=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new qt(new Br(2,2),new In({name:"BackgroundMaterial",uniforms:Ti(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Je,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||g!==T.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,m=T,g=T.version,_=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,M){S.getRGB(gr,pl(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),c=M,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:b,addToRenderList:f}}function af(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(u,w,D,O,z){let k=!1;const F=m(O,D,w);s!==F&&(s=F,l(s.object)),k=_(u,O,D,z),k&&x(u,O,D,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,T(u,w,D,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(u){return i.bindVertexArray(u)}function d(u){return i.deleteVertexArray(u)}function m(u,w,D){const O=D.wireframe===!0;let z=n[u.id];z===void 0&&(z={},n[u.id]=z);let k=z[w.id];k===void 0&&(k={},z[w.id]=k);let F=k[O];return F===void 0&&(F=g(c()),k[O]=F),F}function g(u){const w=[],D=[],O=[];for(let z=0;z<t;z++)w[z]=0,D[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:D,attributeDivisors:O,object:u,attributes:{},index:null}}function _(u,w,D,O){const z=s.attributes,k=w.attributes;let F=0;const X=D.getAttributes();for(const j in X)if(X[j].location>=0){const te=z[j];let pe=k[j];if(pe===void 0&&(j==="instanceMatrix"&&u.instanceMatrix&&(pe=u.instanceMatrix),j==="instanceColor"&&u.instanceColor&&(pe=u.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function x(u,w,D,O){const z={},k=w.attributes;let F=0;const X=D.getAttributes();for(const j in X)if(X[j].location>=0){let te=k[j];te===void 0&&(j==="instanceMatrix"&&u.instanceMatrix&&(te=u.instanceMatrix),j==="instanceColor"&&u.instanceColor&&(te=u.instanceColor));const pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),z[j]=pe,F++}s.attributes=z,s.attributesNum=F,s.index=O}function b(){const u=s.newAttributes;for(let w=0,D=u.length;w<D;w++)u[w]=0}function f(u){h(u,0)}function h(u,w){const D=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;D[u]=1,O[u]===0&&(i.enableVertexAttribArray(u),O[u]=1),z[u]!==w&&(i.vertexAttribDivisor(u,w),z[u]=w)}function S(){const u=s.newAttributes,w=s.enabledAttributes;for(let D=0,O=w.length;D<O;D++)w[D]!==u[D]&&(i.disableVertexAttribArray(D),w[D]=0)}function M(u,w,D,O,z,k,F){F===!0?i.vertexAttribIPointer(u,w,D,z,k):i.vertexAttribPointer(u,w,D,O,z,k)}function T(u,w,D,O){b();const z=O.attributes,k=D.getAttributes(),F=w.defaultAttributeValues;for(const X in k){const j=k[X];if(j.location>=0){let se=z[X];if(se===void 0&&(X==="instanceMatrix"&&u.instanceMatrix&&(se=u.instanceMatrix),X==="instanceColor"&&u.instanceColor&&(se=u.instanceColor)),se!==void 0){const te=se.normalized,pe=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;const Ue=Pe.buffer,J=Pe.type,le=Pe.bytesPerElement,xe=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===ia;if(se.isInterleavedBufferAttribute){const me=se.data,Q=me.stride,R=se.offset;if(me.isInstancedInterleavedBuffer){for(let I=0;I<j.locationSize;I++)h(j.location+I,me.meshPerAttribute);u.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let I=0;I<j.locationSize;I++)f(j.location+I);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let I=0;I<j.locationSize;I++)M(j.location+I,pe/j.locationSize,J,te,Q*le,(R+pe/j.locationSize*I)*le,xe)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<j.locationSize;me++)h(j.location+me,se.meshPerAttribute);u.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<j.locationSize;me++)f(j.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let me=0;me<j.locationSize;me++)M(j.location+me,pe/j.locationSize,J,te,pe*le,pe/j.locationSize*me*le,xe)}}else if(F!==void 0){const te=F[X];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(j.location,te);break;case 3:i.vertexAttrib3fv(j.location,te);break;case 4:i.vertexAttrib4fv(j.location,te);break;default:i.vertexAttrib1fv(j.location,te)}}}}S()}function N(){v();for(const u in n){const w=n[u];for(const D in w){const O=w[D];for(const z in O)d(O[z].object),delete O[z];delete w[D]}delete n[u]}}function E(u){if(n[u.id]===void 0)return;const w=n[u.id];for(const D in w){const O=w[D];for(const z in O)d(O[z].object),delete O[z];delete w[D]}delete n[u.id]}function A(u){for(const w in n){const D=n[w];if(D[u.id]===void 0)continue;const O=D[u.id];for(const z in O)d(O[z].object),delete O[z];delete D[u.id]}}function v(){p(),a=!0,s!==r&&(s=r,l(s.object))}function p(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:v,resetDefaultState:p,dispose:N,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:f,disableUnusedAttributes:S}}function of(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,m){m!==0&&(i.drawArraysInstanced(n,l,d,m),t.update(d,n,m))}function o(l,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}function c(l,d,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<l.length;x++)a(l[x],d[x],g[x]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,d,0,g,0,m);let x=0;for(let b=0;b<m;b++)x+=d[b];for(let b=0;b<g.length;b++)t.update(x,n,g[b])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Wt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ot&&!A)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const m=t.logarithmicDepthBuffer===!0,g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:b,maxAttributes:f,maxVertexUniforms:h,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:T,maxSamples:N}}function cf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Tn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const _=m.length!==0||g||n!==0||r;return r=g,n=m.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=d(m,g,0)},this.setState=function(m,g,_){const x=m.clippingPlanes,b=m.clipIntersection,f=m.clipShadows,h=i.get(m);if(!r||x===null||x.length===0||s&&!f)s?d(null):l();else{const S=s?0:n,M=S*4;let T=h.clippingState||null;c.value=T,T=d(x,g,M,_);for(let N=0;N!==M;++N)T[N]=t[N];h.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,g,_,x){const b=m!==null?m.length:0;let f=null;if(b!==0){if(f=c.value,x!==!0||f===null){const h=_+b*4,S=g.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<h)&&(f=new Float32Array(h));for(let M=0,T=_;M!==b;++M,T+=4)a.copy(m[M]).applyMatrix4(S,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,f}}function uf(i){let e=new WeakMap;function t(a,o){return o===Cr?a.mapping=Ei:o===Es&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cr||o===Es)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vl extends ml{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,$a=[.125,.215,.35,.446,.526,.582],Wn=20,cs=new vl,Ka=new We;let us=null,hs=0,ds=0,fs=!1;const Vn=(1+Math.sqrt(5))/2,mi=1/Vn,Za=[new G(-Vn,mi,0),new G(Vn,mi,0),new G(-mi,0,Vn),new G(mi,0,Vn),new G(0,Vn,-mi),new G(0,Vn,mi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){us=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us,hs,ds),this._renderer.xr.enabled=fs,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:dn,format:Wt,colorSpace:gn,depthBuffer:!1},r=Qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(s)),this._blurMaterial=df(s,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,r){const o=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,g=d.toneMapping;d.getClearColor(Ka),d.toneMapping=Ln,d.autoClear=!1;const _=new hl({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),x=new qt(new Yi,_);let b=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,b=!0):(_.color.copy(Ka),b=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):S===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const M=this._cubeSize;_r(r,S*M,h>2?M:0,M,M),d.setRenderTarget(r),b&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=g,d.autoClear=m,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Za[(r-s-1)%Za.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new qt(this._lodPlanes[r],l),g=l.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Wn-1),b=s/x,f=isFinite(s)?1+Math.floor(d*b):Wn;f>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wn}`);const h=[];let S=0;for(let A=0;A<Wn;++A){const v=A/b,p=Math.exp(-v*v/2);h.push(p),A===0?S+=p:A<f&&(S+=2*p)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;g.envMap.value=e.texture,g.samples.value=f,g.weights.value=h,g.latitudinal.value=a==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:M}=this;g.dTheta.value=x,g.mipInt.value=M-n;const T=this._sizeLods[r],N=3*T*(r>M-xi?r-M+xi:0),E=4*(this._cubeSize-T);_r(t,N,E,3*T,2*T),c.setRenderTarget(t),c.render(m,cs)}}function hf(i){const e=[],t=[],n=[];let r=i;const s=i-xi+1+$a.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-xi?c=$a[a-i+xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,m=1+l,g=[d,d,m,d,m,m,d,d,m,m,d,m],_=6,x=6,b=3,f=2,h=1,S=new Float32Array(b*x*_),M=new Float32Array(f*x*_),T=new Float32Array(h*x*_);for(let E=0;E<_;E++){const A=E%3*2/3-1,v=E>2?0:-1,p=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];S.set(p,b*x*E),M.set(g,f*x*E);const u=[E,E,E,E,E,E];T.set(u,h*x*E)}const N=new Un;N.setAttribute("position",new $t(S,b)),N.setAttribute("uv",new $t(M,f)),N.setAttribute("faceIndex",new $t(T,h)),e.push(N),r>xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qa(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function df(i,e,t){const n=new Float32Array(Wn),r=new G(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function eo(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function to(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function ff(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cr||c===Es,d=c===Ei||c===bi;if(l||d){let m=e.get(o);const g=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Ja(i)),m=l?t.fromEquirectangular(o,m):t.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),m.texture;if(m!==void 0)return m.texture;{const _=o.image;return l&&_&&_.height>0||d&&_&&r(_)?(t===null&&(t=new Ja(i)),m=l?t.fromEquirectangular(o):t.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,e.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sl("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mf(i,e,t,n){const r={},s=new WeakMap;function a(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);for(const x in g.morphAttributes){const b=g.morphAttributes[x];for(let f=0,h=b.length;f<h;f++)e.remove(b[f])}g.removeEventListener("dispose",a),delete r[g.id];const _=s.get(g);_&&(e.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(m,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,t.memory.geometries++),g}function c(m){const g=m.attributes;for(const x in g)e.update(g[x],i.ARRAY_BUFFER);const _=m.morphAttributes;for(const x in _){const b=_[x];for(let f=0,h=b.length;f<h;f++)e.update(b[f],i.ARRAY_BUFFER)}}function l(m){const g=[],_=m.index,x=m.attributes.position;let b=0;if(_!==null){const S=_.array;b=_.version;for(let M=0,T=S.length;M<T;M+=3){const N=S[M+0],E=S[M+1],A=S[M+2];g.push(N,E,E,A,A,N)}}else if(x!==void 0){const S=x.array;b=x.version;for(let M=0,T=S.length/3-1;M<T;M+=3){const N=M+0,E=M+1,A=M+2;g.push(N,E,E,A,A,N)}}else return;const f=new(rl(g)?fl:dl)(g,1);f.version=b;const h=s.get(m);h&&e.remove(h),s.set(m,f)}function d(m){const g=s.get(m);if(g){const _=m.index;_!==null&&g.version<_.version&&l(m)}else l(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:d}}function gf(i,e,t){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function c(g,_){i.drawElements(n,_,s,g*a),t.update(_,n,1)}function l(g,_,x){x!==0&&(i.drawElementsInstanced(n,_,s,g*a,x),t.update(_,n,x))}function d(g,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,g,0,x);let f=0;for(let h=0;h<x;h++)f+=_[h];t.update(f,n,1)}function m(g,_,x,b){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<g.length;h++)l(g[h]/a,_[h],b[h]);else{f.multiDrawElementsInstancedWEBGL(n,_,0,s,g,0,b,0,x);let h=0;for(let S=0;S<x;S++)h+=_[S];for(let S=0;S<b.length;S++)t.update(h,n,b[S])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _f(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vf(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let g=n.get(o);if(g===void 0||g.count!==m){let u=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",u)};var _=u;g!==void 0&&g.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;x===!0&&(T=1),b===!0&&(T=2),f===!0&&(T=3);let N=o.attributes.position.count*T,E=1;N>e.maxTextureSize&&(E=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*E*4*m),v=new ol(A,N,E,m);v.type=Ot,v.needsUpdate=!0;const p=T*4;for(let w=0;w<m;w++){const D=h[w],O=S[w],z=M[w],k=N*E*4*w;for(let F=0;F<D.count;F++){const X=F*p;x===!0&&(r.fromBufferAttribute(D,F),A[k+X+0]=r.x,A[k+X+1]=r.y,A[k+X+2]=r.z,A[k+X+3]=0),b===!0&&(r.fromBufferAttribute(O,F),A[k+X+4]=r.x,A[k+X+5]=r.y,A[k+X+6]=r.z,A[k+X+7]=0),f===!0&&(r.fromBufferAttribute(z,F),A[k+X+8]=r.x,A[k+X+9]=r.y,A[k+X+10]=r.z,A[k+X+11]=z.itemSize===4?r.w:1)}}g={count:m,texture:v,size:new Ie(N,E)},n.set(o,g),o.addEventListener("dispose",u)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let f=0;f<l.length;f++)x+=l[f];const b=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function xf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,m=e.get(c,d);if(r.get(m)!==l&&(e.update(m),r.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==l&&(g.update(),r.set(g,l))}return m}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class xl extends Et{constructor(e,t,n,r,s,a,o,c,l,d=Si){if(d!==Si&&d!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Si&&(n=Yn),n===void 0&&d===wi&&(n=Ai),super(null,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ml=new Et,no=new xl(1,1),Sl=new ol,yl=new tu,El=new gl,io=[],ro=[],so=new Float32Array(16),ao=new Float32Array(9),oo=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=io[r];if(s===void 0&&(s=new Float32Array(r),io[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=ro[e];t===void 0&&(t=new Int32Array(e),ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;oo.set(n),i.uniformMatrix2fv(this.addr,!1,oo),dt(t,n)}}function Af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ao.set(n),i.uniformMatrix3fv(this.addr,!1,ao),dt(t,n)}}function wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;so.set(n),i.uniformMatrix4fv(this.addr,!1,so),dt(t,n)}}function Tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(no.compareFunction=nl,s=no):s=Ml,t.setTexture2D(e||s,r)}function Ff(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yl,r)}function Of(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||El,r)}function Bf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sl,r)}function zf(i){switch(i){case 5126:return Mf;case 35664:return Sf;case 35665:return yf;case 35666:return Ef;case 35674:return bf;case 35675:return Af;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Cf;case 35668:case 35672:return Rf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return Df;case 36295:return If;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Bf}}function Hf(i,e){i.uniform1fv(this.addr,e)}function kf(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function Vf(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function Gf(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function Wf(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xf(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yf(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jf(i,e){i.uniform1iv(this.addr,e)}function qf(i,e){i.uniform2iv(this.addr,e)}function $f(i,e){i.uniform3iv(this.addr,e)}function Kf(i,e){i.uniform4iv(this.addr,e)}function Zf(i,e){i.uniform1uiv(this.addr,e)}function Jf(i,e){i.uniform2uiv(this.addr,e)}function Qf(i,e){i.uniform3uiv(this.addr,e)}function ep(i,e){i.uniform4uiv(this.addr,e)}function tp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ml,s[a])}function np(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yl,s[a])}function ip(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||El,s[a])}function rp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sl,s[a])}function sp(i){switch(i){case 5126:return Hf;case 35664:return kf;case 35665:return Vf;case 35666:return Gf;case 35674:return Wf;case 35675:return Xf;case 35676:return Yf;case 5124:case 35670:return jf;case 35667:case 35671:return qf;case 35668:case 35672:return $f;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zf(t.type)}}class op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function lo(i,e){i.seq.push(e),i.map[e.id]=e}function cp(i,e,t){const n=i.name,r=n.length;for(ps.lastIndex=0;;){const s=ps.exec(n),a=ps.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){lo(t,l===void 0?new ap(o,i,e):new op(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new lp(o),lo(t,m)),t=m}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const up=37297;let hp=0;function dp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function fp(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Lr&&t===Pr?n="LinearDisplayP3ToLinearSRGB":e===Pr&&t===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case Or:return[n,"LinearTransferOETF"];case Xt:case ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dp(i.getShaderSource(e),a)}else return r}function pp(i,e){const t=fp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mp(i,e){let t;switch(e){case gc:t="Linear";break;case _c:t="Reinhard";break;case vc:t="OptimizedCineon";break;case Vo:t="ACESFilmic";break;case Mc:t="AgX";break;case Sc:t="Neutral";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function _p(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zi(i){return i!==""}function ho(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(i){return i.replace(xp,Sp)}const Mp=new Map;function Sp(i,e){let t=Ve[e];if(t===void 0){const n=Mp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Js(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function po(i){return i.replace(yp,Ep)}function Ep(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Ap(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case bi:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case mc:e="ENVMAP_BLENDING_ADD";break}return e}function Cp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=bp(t),l=Ap(t),d=wp(t),m=Tp(t),g=Cp(t),_=gp(t),x=_p(s),b=r.createProgram();let f,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zi).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zi).join(`
`),h.length>0&&(h+=`
`)):(f=[mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),h=[mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ln?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,pp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Js(a),a=ho(a,t),a=fo(a,t),o=Js(o),o=ho(o,t),o=fo(o,t),a=po(a),o=po(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=S+f+a,T=S+h+o,N=co(r,r.VERTEX_SHADER,M),E=co(r,r.FRAGMENT_SHADER,T);r.attachShader(b,N),r.attachShader(b,E),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(w){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(b).trim(),O=r.getShaderInfoLog(N).trim(),z=r.getShaderInfoLog(E).trim();let k=!0,F=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,N,E);else{const X=uo(r,N,"vertex"),j=uo(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+X+`
`+j)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||z==="")&&(F=!1);F&&(w.diagnostics={runnable:k,programLog:D,vertexShader:{log:O,prefix:f},fragmentShader:{log:z,prefix:h}})}r.deleteShader(N),r.deleteShader(E),v=new wr(r,b),p=vp(r,b)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let p;this.getAttributes=function(){return p===void 0&&A(this),p};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=r.getProgramParameter(b,up)),u},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hp++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=E,this}let Pp=0;class Lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}}class Dp{constructor(e){this.id=Pp++,this.code=e,this.usedTimes=0}}function Ip(i,e,t,n,r,s,a){const o=new cl,c=new Lp,l=new Set,d=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(p){return l.add(p),p===0?"uv":`uv${p}`}function f(p,u,w,D,O){const z=D.fog,k=O.geometry,F=p.isMeshStandardMaterial?D.environment:null,X=(p.isMeshStandardMaterial?t:e).get(p.envMap||F),j=X&&X.mapping===Fr?X.image.height:null,se=x[p.type];p.precision!==null&&(_=r.getMaxPrecision(p.precision),_!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",_,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=te!==void 0?te.length:0;let Pe=0;k.morphAttributes.position!==void 0&&(Pe=1),k.morphAttributes.normal!==void 0&&(Pe=2),k.morphAttributes.color!==void 0&&(Pe=3);let Ue,J,le,xe;if(se){const Ye=Yt[se];Ue=Ye.vertexShader,J=Ye.fragmentShader}else Ue=p.vertexShader,J=p.fragmentShader,c.update(p),le=c.getVertexShaderID(p),xe=c.getFragmentShaderID(p);const me=i.getRenderTarget(),Q=O.isInstancedMesh===!0,R=O.isBatchedMesh===!0,I=!!p.map,B=!!p.matcap,L=!!X,ee=!!p.aoMap,ne=!!p.lightMap,Me=!!p.bumpMap,he=!!p.normalMap,ke=!!p.displacementMap,Ae=!!p.emissiveMap,be=!!p.metalnessMap,U=!!p.roughnessMap,C=p.anisotropy>0,W=p.clearcoat>0,ie=p.dispersion>0,ae=p.iridescence>0,re=p.sheen>0,Ce=p.transmission>0,de=C&&!!p.anisotropyMap,_e=W&&!!p.clearcoatMap,He=W&&!!p.clearcoatNormalMap,ce=W&&!!p.clearcoatRoughnessMap,ve=ae&&!!p.iridescenceMap,Xe=ae&&!!p.iridescenceThicknessMap,Le=re&&!!p.sheenColorMap,Se=re&&!!p.sheenRoughnessMap,Ne=!!p.specularMap,ze=!!p.specularColorMap,Qe=!!p.specularIntensityMap,y=Ce&&!!p.transmissionMap,Y=Ce&&!!p.thicknessMap,q=!!p.gradientMap,Z=!!p.alphaMap,oe=p.alphaTest>0,we=!!p.alphaHash,Fe=!!p.extensions;let it=Ln;p.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(it=i.toneMapping);const lt={shaderID:se,shaderType:p.type,shaderName:p.name,vertexShader:Ue,fragmentShader:J,defines:p.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:_,batching:R,batchingColor:R&&O._colorsTexture!==null,instancing:Q,instancingColor:Q&&O.instanceColor!==null,instancingMorph:Q&&O.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gn,alphaToCoverage:!!p.alphaToCoverage,map:I,matcap:B,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:j,aoMap:ee,lightMap:ne,bumpMap:Me,normalMap:he,displacementMap:g&&ke,emissiveMap:Ae,normalMapObjectSpace:he&&p.normalMapType===bc,normalMapTangentSpace:he&&p.normalMapType===tl,metalnessMap:be,roughnessMap:U,anisotropy:C,anisotropyMap:de,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:Ne,specularColorMap:ze,specularIntensityMap:Qe,transmission:Ce,transmissionMap:y,thicknessMap:Y,gradientMap:q,opaque:p.transparent===!1&&p.blending===Mi&&p.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:we,combine:p.combine,mapUv:I&&b(p.map.channel),aoMapUv:ee&&b(p.aoMap.channel),lightMapUv:ne&&b(p.lightMap.channel),bumpMapUv:Me&&b(p.bumpMap.channel),normalMapUv:he&&b(p.normalMap.channel),displacementMapUv:ke&&b(p.displacementMap.channel),emissiveMapUv:Ae&&b(p.emissiveMap.channel),metalnessMapUv:be&&b(p.metalnessMap.channel),roughnessMapUv:U&&b(p.roughnessMap.channel),anisotropyMapUv:de&&b(p.anisotropyMap.channel),clearcoatMapUv:_e&&b(p.clearcoatMap.channel),clearcoatNormalMapUv:He&&b(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&b(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&b(p.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&b(p.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(p.sheenColorMap.channel),sheenRoughnessMapUv:Se&&b(p.sheenRoughnessMap.channel),specularMapUv:Ne&&b(p.specularMap.channel),specularColorMapUv:ze&&b(p.specularColorMap.channel),specularIntensityMapUv:Qe&&b(p.specularIntensityMap.channel),transmissionMapUv:y&&b(p.transmissionMap.channel),thicknessMapUv:Y&&b(p.thicknessMap.channel),alphaMapUv:Z&&b(p.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(he||C),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(I||Z),fog:!!z,useFog:p.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Pe,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:I&&p.map.isVideoTexture===!0&&Ze.getTransfer(p.map.colorSpace)===Je,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===cn,flipSided:p.side===Tt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Fe&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&p.extensions.multiDraw===!0||R)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function h(p){const u=[];if(p.shaderID?u.push(p.shaderID):(u.push(p.customVertexShaderID),u.push(p.customFragmentShaderID)),p.defines!==void 0)for(const w in p.defines)u.push(w),u.push(p.defines[w]);return p.isRawShaderMaterial===!1&&(S(u,p),M(u,p),u.push(i.outputColorSpace)),u.push(p.customProgramCacheKey),u.join()}function S(p,u){p.push(u.precision),p.push(u.outputColorSpace),p.push(u.envMapMode),p.push(u.envMapCubeUVHeight),p.push(u.mapUv),p.push(u.alphaMapUv),p.push(u.lightMapUv),p.push(u.aoMapUv),p.push(u.bumpMapUv),p.push(u.normalMapUv),p.push(u.displacementMapUv),p.push(u.emissiveMapUv),p.push(u.metalnessMapUv),p.push(u.roughnessMapUv),p.push(u.anisotropyMapUv),p.push(u.clearcoatMapUv),p.push(u.clearcoatNormalMapUv),p.push(u.clearcoatRoughnessMapUv),p.push(u.iridescenceMapUv),p.push(u.iridescenceThicknessMapUv),p.push(u.sheenColorMapUv),p.push(u.sheenRoughnessMapUv),p.push(u.specularMapUv),p.push(u.specularColorMapUv),p.push(u.specularIntensityMapUv),p.push(u.transmissionMapUv),p.push(u.thicknessMapUv),p.push(u.combine),p.push(u.fogExp2),p.push(u.sizeAttenuation),p.push(u.morphTargetsCount),p.push(u.morphAttributeCount),p.push(u.numDirLights),p.push(u.numPointLights),p.push(u.numSpotLights),p.push(u.numSpotLightMaps),p.push(u.numHemiLights),p.push(u.numRectAreaLights),p.push(u.numDirLightShadows),p.push(u.numPointLightShadows),p.push(u.numSpotLightShadows),p.push(u.numSpotLightShadowsWithMaps),p.push(u.numLightProbes),p.push(u.shadowMapType),p.push(u.toneMapping),p.push(u.numClippingPlanes),p.push(u.numClipIntersection),p.push(u.depthPacking)}function M(p,u){o.disableAll(),u.supportsVertexTextures&&o.enable(0),u.instancing&&o.enable(1),u.instancingColor&&o.enable(2),u.instancingMorph&&o.enable(3),u.matcap&&o.enable(4),u.envMap&&o.enable(5),u.normalMapObjectSpace&&o.enable(6),u.normalMapTangentSpace&&o.enable(7),u.clearcoat&&o.enable(8),u.iridescence&&o.enable(9),u.alphaTest&&o.enable(10),u.vertexColors&&o.enable(11),u.vertexAlphas&&o.enable(12),u.vertexUv1s&&o.enable(13),u.vertexUv2s&&o.enable(14),u.vertexUv3s&&o.enable(15),u.vertexTangents&&o.enable(16),u.anisotropy&&o.enable(17),u.alphaHash&&o.enable(18),u.batching&&o.enable(19),u.dispersion&&o.enable(20),u.batchingColor&&o.enable(21),p.push(o.mask),o.disableAll(),u.fog&&o.enable(0),u.useFog&&o.enable(1),u.flatShading&&o.enable(2),u.logarithmicDepthBuffer&&o.enable(3),u.skinning&&o.enable(4),u.morphTargets&&o.enable(5),u.morphNormals&&o.enable(6),u.morphColors&&o.enable(7),u.premultipliedAlpha&&o.enable(8),u.shadowMapEnabled&&o.enable(9),u.doubleSided&&o.enable(10),u.flipSided&&o.enable(11),u.useDepthPacking&&o.enable(12),u.dithering&&o.enable(13),u.transmission&&o.enable(14),u.sheen&&o.enable(15),u.opaque&&o.enable(16),u.pointsUvs&&o.enable(17),u.decodeVideoTexture&&o.enable(18),u.alphaToCoverage&&o.enable(19),p.push(o.mask)}function T(p){const u=x[p.type];let w;if(u){const D=Yt[u];w=gu.clone(D.uniforms)}else w=p.uniforms;return w}function N(p,u){let w;for(let D=0,O=d.length;D<O;D++){const z=d[D];if(z.cacheKey===u){w=z,++w.usedTimes;break}}return w===void 0&&(w=new Rp(i,u,p,s),d.push(w)),w}function E(p){if(--p.usedTimes===0){const u=d.indexOf(p);d[u]=d[d.length-1],d.pop(),p.destroy()}}function A(p){c.remove(p)}function v(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:T,acquireProgram:N,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:v}}function Up(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function go(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _o(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(m,g,_,x,b,f){let h=i[e];return h===void 0?(h={id:m.id,object:m,geometry:g,material:_,groupOrder:x,renderOrder:m.renderOrder,z:b,group:f},i[e]=h):(h.id=m.id,h.object=m,h.geometry=g,h.material=_,h.groupOrder=x,h.renderOrder=m.renderOrder,h.z=b,h.group=f),e++,h}function o(m,g,_,x,b,f){const h=a(m,g,_,x,b,f);_.transmission>0?n.push(h):_.transparent===!0?r.push(h):t.push(h)}function c(m,g,_,x,b,f){const h=a(m,g,_,x,b,f);_.transmission>0?n.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function l(m,g){t.length>1&&t.sort(m||Np),n.length>1&&n.sort(g||go),r.length>1&&r.sort(g||go)}function d(){for(let m=e,g=i.length;m<g;m++){const _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Fp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new _o,i.set(n,[a])):r>=s.length?(a=new _o,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Op(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new We};break;case"SpotLight":t={position:new G,direction:new G,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zp=0;function Hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kp(i){const e=new Op,t=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new rt,a=new rt;function o(l){let d=0,m=0,g=0;for(let p=0;p<9;p++)n.probe[p].set(0,0,0);let _=0,x=0,b=0,f=0,h=0,S=0,M=0,T=0,N=0,E=0,A=0;l.sort(Hp);for(let p=0,u=l.length;p<u;p++){const w=l[p],D=w.color,O=w.intensity,z=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=D.r*O,m+=D.g*O,g+=D.b*O;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],O);A++}else if(w.isDirectionalLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const X=w.shadow,j=t.get(w);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[_]=j,n.directionalShadowMap[_]=k,n.directionalShadowMatrix[_]=w.shadow.matrix,S++}n.directional[_]=F,_++}else if(w.isSpotLight){const F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(D).multiplyScalar(O),F.distance=z,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[b]=F;const X=w.shadow;if(w.map&&(n.spotLightMap[N]=w.map,N++,X.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[b]=X.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=k,T++}b++}else if(w.isRectAreaLight){const F=e.get(w);F.color.copy(D).multiplyScalar(O),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=F,f++}else if(w.isPointLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){const X=w.shadow,j=t.get(w);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=w.shadow.matrix,M++}n.point[x]=F,x++}else if(w.isHemisphereLight){const F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(O),F.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[h]=F,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const v=n.hash;(v.directionalLength!==_||v.pointLength!==x||v.spotLength!==b||v.rectAreaLength!==f||v.hemiLength!==h||v.numDirectionalShadows!==S||v.numPointShadows!==M||v.numSpotShadows!==T||v.numSpotMaps!==N||v.numLightProbes!==A)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=f,n.point.length=x,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+N-E,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,v.directionalLength=_,v.pointLength=x,v.spotLength=b,v.rectAreaLength=f,v.hemiLength=h,v.numDirectionalShadows=S,v.numPointShadows=M,v.numSpotShadows=T,v.numSpotMaps=N,v.numLightProbes=A,n.version=zp++)}function c(l,d){let m=0,g=0,_=0,x=0,b=0;const f=d.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){const M=l[h];if(M.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),m++}else if(M.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(M.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),g++}else if(M.isHemisphereLight){const T=n.hemi[b];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),b++}}}return{setup:o,setupView:c,state:n}}function vo(i){const e=new kp(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Vp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vo(i),e.set(r,[o])):s>=a.length?(o=new vo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class bl extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
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
}`;function Yp(i,e,t){let n=new da;const r=new Ie,s=new Ie,a=new ut,o=new bl({depthPacking:el}),c=new Gp,l={},d=t.maxTextureSize,m={[Dn]:Tt,[Tt]:Dn,[cn]:cn},g=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const x=new Un;x.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qt(x,g),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let h=this.type;this.render=function(E,A,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const p=i.getRenderTarget(),u=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Pn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=h!==ln&&this.type===ln,z=h===ln&&this.type!==ln;for(let k=0,F=E.length;k<F;k++){const X=E[k],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const se=j.getFrameExtents();if(r.multiply(se),s.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/se.x),r.x=s.x*se.x,j.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/se.y),r.y=s.y*se.y,j.mapSize.y=s.y)),j.map===null||O===!0||z===!0){const pe=this.type!==ln?{minFilter:wt,magFilter:wt}:{};j.map!==null&&j.map.dispose(),j.map=new jn(r.x,r.y,pe),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const te=j.getViewportCount();for(let pe=0;pe<te;pe++){const Pe=j.getViewport(pe);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),D.viewport(a),j.updateMatrices(X,pe),n=j.getFrustum(),T(A,v,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===ln&&S(j,v),j.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(p,u,w)};function S(E,A){const v=e.update(b);g.defines.VSM_SAMPLES!==E.blurSamples&&(g.defines.VSM_SAMPLES=E.blurSamples,_.defines.VSM_SAMPLES=E.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jn(r.x,r.y)),g.uniforms.shadow_pass.value=E.map.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,g,b,null),_.uniforms.shadow_pass.value=E.mapPass.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,_,b,null)}function M(E,A,v,p){let u=null;const w=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)u=w;else if(u=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=u.uuid,O=A.uuid;let z=l[D];z===void 0&&(z={},l[D]=z);let k=z[O];k===void 0&&(k=u.clone(),z[O]=k,A.addEventListener("dispose",N)),u=k}if(u.visible=A.visible,u.wireframe=A.wireframe,p===ln?u.side=A.shadowSide!==null?A.shadowSide:A.side:u.side=A.shadowSide!==null?A.shadowSide:m[A.side],u.alphaMap=A.alphaMap,u.alphaTest=A.alphaTest,u.map=A.map,u.clipShadows=A.clipShadows,u.clippingPlanes=A.clippingPlanes,u.clipIntersection=A.clipIntersection,u.displacementMap=A.displacementMap,u.displacementScale=A.displacementScale,u.displacementBias=A.displacementBias,u.wireframeLinewidth=A.wireframeLinewidth,u.linewidth=A.linewidth,v.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const D=i.properties.get(u);D.light=v}return u}function T(E,A,v,p,u){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&u===ln)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),z=E.material;if(Array.isArray(z)){const k=O.groups;for(let F=0,X=k.length;F<X;F++){const j=k[F],se=z[j.materialIndex];if(se&&se.visible){const te=M(E,se,p,u);E.onBeforeShadow(i,E,A,v,O,te,j),i.renderBufferDirect(v,null,O,te,E,j),E.onAfterShadow(i,E,A,v,O,te,j)}}}else if(z.visible){const k=M(E,z,p,u);E.onBeforeShadow(i,E,A,v,O,k,null),i.renderBufferDirect(v,null,O,k,E,null),E.onAfterShadow(i,E,A,v,O,k,null)}}const D=E.children;for(let O=0,z=D.length;O<z;O++)T(D[O],A,v,p,u)}function N(E){E.target.removeEventListener("dispose",N);for(const v in l){const p=l[v],u=E.target.uuid;u in p&&(p[u].dispose(),delete p[u])}}}function jp(i){function e(){let y=!1;const Y=new ut;let q=null;const Z=new ut(0,0,0,0);return{setMask:function(oe){q!==oe&&!y&&(i.colorMask(oe,oe,oe,oe),q=oe)},setLocked:function(oe){y=oe},setClear:function(oe,we,Fe,it,lt){lt===!0&&(oe*=it,we*=it,Fe*=it),Y.set(oe,we,Fe,it),Z.equals(Y)===!1&&(i.clearColor(oe,we,Fe,it),Z.copy(Y))},reset:function(){y=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let y=!1,Y=null,q=null,Z=null;return{setTest:function(oe){oe?xe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(oe){Y!==oe&&!y&&(i.depthMask(oe),Y=oe)},setFunc:function(oe){if(q!==oe){switch(oe){case oc:i.depthFunc(i.NEVER);break;case lc:i.depthFunc(i.ALWAYS);break;case cc:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case hc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=oe}},setLocked:function(oe){y=oe},setClear:function(oe){Z!==oe&&(i.clearDepth(oe),Z=oe)},reset:function(){y=!1,Y=null,q=null,Z=null}}}function n(){let y=!1,Y=null,q=null,Z=null,oe=null,we=null,Fe=null,it=null,lt=null;return{setTest:function(Ye){y||(Ye?xe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){Y!==Ye&&!y&&(i.stencilMask(Ye),Y=Ye)},setFunc:function(Ye,ct,st){(q!==Ye||Z!==ct||oe!==st)&&(i.stencilFunc(Ye,ct,st),q=Ye,Z=ct,oe=st)},setOp:function(Ye,ct,st){(we!==Ye||Fe!==ct||it!==st)&&(i.stencilOp(Ye,ct,st),we=Ye,Fe=ct,it=st)},setLocked:function(Ye){y=Ye},setClear:function(Ye){lt!==Ye&&(i.clearStencil(Ye),lt=Ye)},reset:function(){y=!1,Y=null,q=null,Z=null,oe=null,we=null,Fe=null,it=null,lt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,f=null,h=null,S=null,M=null,T=null,N=null,E=new We(0,0,0),A=0,v=!1,p=null,u=null,w=null,D=null,O=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=F>=2);let j=null,se={};const te=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Pe=new ut().fromArray(te),Ue=new ut().fromArray(pe);function J(y,Y,q,Z){const oe=new Uint8Array(4),we=i.createTexture();i.bindTexture(y,we),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<q;Fe++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Y+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return we}const le={};le[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),s.setFunc(Tr),Me(!1),he(ya),xe(i.CULL_FACE),ee(Pn);function xe(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function me(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function Q(y,Y){return d[y]!==Y?(i.bindFramebuffer(y,Y),d[y]=Y,y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Y),y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function R(y,Y){let q=g,Z=!1;if(y){q=m.get(Y),q===void 0&&(q=[],m.set(Y,q));const oe=y.textures;if(q.length!==oe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Fe=oe.length;we<Fe;we++)q[we]=i.COLOR_ATTACHMENT0+we;q.length=oe.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function I(y){return _!==y?(i.useProgram(y),_=y,!0):!1}const B={[Gn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};B[Yl]=i.MIN,B[jl]=i.MAX;const L={[ql]:i.ZERO,[$l]:i.ONE,[Kl]:i.SRC_COLOR,[Ss]:i.SRC_ALPHA,[nc]:i.SRC_ALPHA_SATURATE,[ec]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[Zl]:i.ONE_MINUS_SRC_COLOR,[ys]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[ic]:i.CONSTANT_COLOR,[rc]:i.ONE_MINUS_CONSTANT_COLOR,[sc]:i.CONSTANT_ALPHA,[ac]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(y,Y,q,Z,oe,we,Fe,it,lt,Ye){if(y===Pn){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(xe(i.BLEND),x=!0),y!==Gl){if(y!==b||Ye!==v){if((f!==Gn||M!==Gn)&&(i.blendEquation(i.FUNC_ADD),f=Gn,M=Gn),Ye)switch(y){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}h=null,S=null,T=null,N=null,E.set(0,0,0),A=0,b=y,v=Ye}return}oe=oe||Y,we=we||q,Fe=Fe||Z,(Y!==f||oe!==M)&&(i.blendEquationSeparate(B[Y],B[oe]),f=Y,M=oe),(q!==h||Z!==S||we!==T||Fe!==N)&&(i.blendFuncSeparate(L[q],L[Z],L[we],L[Fe]),h=q,S=Z,T=we,N=Fe),(it.equals(E)===!1||lt!==A)&&(i.blendColor(it.r,it.g,it.b,lt),E.copy(it),A=lt),b=y,v=!1}function ne(y,Y){y.side===cn?me(i.CULL_FACE):xe(i.CULL_FACE);let q=y.side===Tt;Y&&(q=!q),Me(q),y.blending===Mi&&y.transparent===!1?ee(Pn):ee(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const Z=y.stencilWrite;a.setTest(Z),Z&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ae(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(y){p!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),p=y)}function he(y){y!==kl?(xe(i.CULL_FACE),y!==u&&(y===ya?i.cullFace(i.BACK):y===Vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),u=y}function ke(y){y!==w&&(k&&i.lineWidth(y),w=y)}function Ae(y,Y,q){y?(xe(i.POLYGON_OFFSET_FILL),(D!==Y||O!==q)&&(i.polygonOffset(Y,q),D=Y,O=q)):me(i.POLYGON_OFFSET_FILL)}function be(y){y?xe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function U(y){y===void 0&&(y=i.TEXTURE0+z-1),j!==y&&(i.activeTexture(y),j=y)}function C(y,Y,q){q===void 0&&(j===null?q=i.TEXTURE0+z-1:q=j);let Z=se[q];Z===void 0&&(Z={type:void 0,texture:void 0},se[q]=Z),(Z.type!==y||Z.texture!==Y)&&(j!==q&&(i.activeTexture(q),j=q),i.bindTexture(y,Y||le[y]),Z.type=y,Z.texture=Y)}function W(){const y=se[j];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Le(y){Pe.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),Pe.copy(y))}function Se(y){Ue.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),Ue.copy(y))}function Ne(y,Y){let q=c.get(Y);q===void 0&&(q=new WeakMap,c.set(Y,q));let Z=q.get(y);Z===void 0&&(Z=i.getUniformBlockIndex(Y,y.name),q.set(y,Z))}function ze(y,Y){const Z=c.get(Y).get(y);o.get(Y)!==Z&&(i.uniformBlockBinding(Y,Z,y.__bindingPointIndex),o.set(Y,Z))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},j=null,se={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,f=null,h=null,S=null,M=null,T=null,N=null,E=new We(0,0,0),A=0,v=!1,p=null,u=null,w=null,D=null,O=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:xe,disable:me,bindFramebuffer:Q,drawBuffers:R,useProgram:I,setBlending:ee,setMaterial:ne,setFlipSided:Me,setCullFace:he,setLineWidth:ke,setPolygonOffset:Ae,setScissorTest:be,activeTexture:U,bindTexture:C,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Xe,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:He,texStorage3D:ce,texSubImage2D:re,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Le,viewport:Se,reset:Qe}}function xo(i,e,t,n){const r=qp(n);switch(t){case jo:return i*e;case $o:return i*e;case Ko:return i*e*2;case Zo:return i*e/r.components*r.byteLength;case aa:return i*e/r.components*r.byteLength;case Jo:return i*e*2/r.components*r.byteLength;case oa:return i*e*2/r.components*r.byteLength;case qo:return i*e*3/r.components*r.byteLength;case Wt:return i*e*4/r.components*r.byteLength;case la:return i*e*4/r.components*r.byteLength;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ts:case Rs:return Math.max(i,16)*Math.max(e,8)/4;case ws:case Cs:return Math.max(i,8)*Math.max(e,8)/2;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ns:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ys:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ar:case js:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qo:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case Zs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(i){switch(i){case pn:case Wo:return{byteLength:1,components:1};case Vi:case Xo:case dn:return{byteLength:2,components:1};case ra:case sa:return{byteLength:2,components:4};case Yn:case ia:case Ot:return{byteLength:4,components:1};case Yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $p(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,d=new WeakMap;let m;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,C){return _?new OffscreenCanvas(U,C):Ir("canvas")}function b(U,C,W){let ie=1;const ae=be(U);if((ae.width>W||ae.height>W)&&(ie=W/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const re=Math.floor(ie*ae.width),Ce=Math.floor(ie*ae.height);m===void 0&&(m=x(re,Ce));const de=C?x(re,Ce):m;return de.width=re,de.height=Ce,de.getContext("2d").drawImage(U,0,0,re,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Ce+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function f(U){return U.generateMipmaps&&U.minFilter!==wt&&U.minFilter!==xt}function h(U){i.generateMipmap(U)}function S(U,C,W,ie,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let re=C;if(C===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8)),C===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),C===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8)),C===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RG8UI),W===i.UNSIGNED_SHORT&&(re=i.RG16UI),W===i.UNSIGNED_INT&&(re=i.RG32UI),W===i.BYTE&&(re=i.RG8I),W===i.SHORT&&(re=i.RG16I),W===i.INT&&(re=i.RG32I)),C===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),C===i.RGBA){const Ce=ae?Rr:Ze.getTransfer(ie);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=Ce===Je?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(U,C){let W;return U?C===null||C===Yn||C===Ai?W=i.DEPTH24_STENCIL8:C===Ot?W=i.DEPTH32F_STENCIL8:C===Vi&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Yn||C===Ai?W=i.DEPTH_COMPONENT24:C===Ot?W=i.DEPTH_COMPONENT32F:C===Vi&&(W=i.DEPTH_COMPONENT16),W}function T(U,C){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==wt&&U.minFilter!==xt?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function N(U){const C=U.target;C.removeEventListener("dispose",N),A(C),C.isVideoTexture&&d.delete(C)}function E(U){const C=U.target;C.removeEventListener("dispose",E),p(C)}function A(U){const C=n.get(U);if(C.__webglInit===void 0)return;const W=U.source,ie=g.get(W);if(ie){const ae=ie[C.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&v(U),Object.keys(ie).length===0&&g.delete(W)}n.remove(U)}function v(U){const C=n.get(U);i.deleteTexture(C.__webglTexture);const W=U.source,ie=g.get(W);delete ie[C.__cacheKey],a.memory.textures--}function p(U){const C=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(C.__webglFramebuffer[ie]))for(let ae=0;ae<C.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(C.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(C.__webglFramebuffer[ie]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ie])}else{if(Array.isArray(C.__webglFramebuffer))for(let ie=0;ie<C.__webglFramebuffer.length;ie++)i.deleteFramebuffer(C.__webglFramebuffer[ie]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ie=0;ie<C.__webglColorRenderbuffer.length;ie++)C.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ie]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const W=U.textures;for(let ie=0,ae=W.length;ie<ae;ie++){const re=n.get(W[ie]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(W[ie])}n.remove(U)}let u=0;function w(){u=0}function D(){const U=u;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),u+=1,U}function O(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function z(U,C){const W=n.get(U);if(U.isVideoTexture&&ke(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(W,U,C);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+C)}function k(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ue(W,U,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+C)}function F(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ue(W,U,C);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+C)}function X(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){J(W,U,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+C)}const j={[bs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},se={[wt]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[$i]:i.NEAREST_MIPMAP_LINEAR,[xt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},te={[Ac]:i.NEVER,[Lc]:i.ALWAYS,[wc]:i.LESS,[nl]:i.LEQUAL,[Tc]:i.EQUAL,[Pc]:i.GEQUAL,[Cc]:i.GREATER,[Rc]:i.NOTEQUAL};function pe(U,C){if(C.type===Ot&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===xt||C.magFilter===Wr||C.magFilter===$i||C.magFilter===Rn||C.minFilter===xt||C.minFilter===Wr||C.minFilter===$i||C.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,j[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,j[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,j[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,se[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===wt||C.minFilter!==$i&&C.minFilter!==Rn||C.type===Ot&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Pe(U,C){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",N));const ie=C.source;let ae=g.get(ie);ae===void 0&&(ae={},g.set(ie,ae));const re=O(C);if(re!==U.__cacheKey){ae[re]===void 0&&(ae[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ae[re].usedTimes++;const Ce=ae[U.__cacheKey];Ce!==void 0&&(ae[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&v(C)),U.__cacheKey=re,U.__webglTexture=ae[re].texture}return W}function Ue(U,C,W){let ie=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=i.TEXTURE_3D);const ae=Pe(U,C),re=C.source;t.bindTexture(ie,U.__webglTexture,i.TEXTURE0+W);const Ce=n.get(re);if(re.version!==Ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=C.colorSpace===Cn?null:Ze.getPrimaries(C.colorSpace),He=C.colorSpace===Cn||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ce=b(C.image,!1,r.maxTextureSize);ce=Ae(C,ce);const ve=s.convert(C.format,C.colorSpace),Xe=s.convert(C.type);let Le=S(C.internalFormat,ve,Xe,C.colorSpace,C.isVideoTexture);pe(ie,C);let Se;const Ne=C.mipmaps,ze=C.isVideoTexture!==!0,Qe=Ce.__version===void 0||ae===!0,y=re.dataReady,Y=T(C,ce);if(C.isDepthTexture)Le=M(C.format===wi,C.type),Qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Le,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Le,ce.width,ce.height,0,ve,Xe,null));else if(C.isDataTexture)if(Ne.length>0){ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,Y,Le,Ne[0].width,Ne[0].height);for(let q=0,Z=Ne.length;q<Z;q++)Se=Ne[q],ze?y&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,ve,Xe,Se.data):t.texImage2D(i.TEXTURE_2D,q,Le,Se.width,Se.height,0,ve,Xe,Se.data);C.generateMipmaps=!1}else ze?(Qe&&t.texStorage2D(i.TEXTURE_2D,Y,Le,ce.width,ce.height),y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Xe,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ce.width,ce.height,0,ve,Xe,ce.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ze&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Le,Ne[0].width,Ne[0].height,ce.depth);for(let q=0,Z=Ne.length;q<Z;q++)if(Se=Ne[q],C.format!==Wt)if(ve!==null)if(ze){if(y)if(C.layerUpdates.size>0){const oe=xo(Se.width,Se.height,C.format,C.type);for(const we of C.layerUpdates){const Fe=Se.data.subarray(we*oe/Se.data.BYTES_PER_ELEMENT,(we+1)*oe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,we,Se.width,Se.height,1,ve,Fe,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ce.depth,ve,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Le,Se.width,Se.height,ce.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ce.depth,ve,Xe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Le,Se.width,Se.height,ce.depth,0,ve,Xe,Se.data)}else{ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,Y,Le,Ne[0].width,Ne[0].height);for(let q=0,Z=Ne.length;q<Z;q++)Se=Ne[q],C.format!==Wt?ve!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?y&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,ve,Xe,Se.data):t.texImage2D(i.TEXTURE_2D,q,Le,Se.width,Se.height,0,ve,Xe,Se.data)}else if(C.isDataArrayTexture)if(ze){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Le,ce.width,ce.height,ce.depth),y)if(C.layerUpdates.size>0){const q=xo(ce.width,ce.height,C.format,C.type);for(const Z of C.layerUpdates){const oe=ce.data.subarray(Z*q/ce.data.BYTES_PER_ELEMENT,(Z+1)*q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ce.width,ce.height,1,ve,Xe,oe)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Xe,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,ve,Xe,ce.data);else if(C.isData3DTexture)ze?(Qe&&t.texStorage3D(i.TEXTURE_3D,Y,Le,ce.width,ce.height,ce.depth),y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Xe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,ve,Xe,ce.data);else if(C.isFramebufferTexture){if(Qe)if(ze)t.texStorage2D(i.TEXTURE_2D,Y,Le,ce.width,ce.height);else{let q=ce.width,Z=ce.height;for(let oe=0;oe<Y;oe++)t.texImage2D(i.TEXTURE_2D,oe,Le,q,Z,0,ve,Xe,null),q>>=1,Z>>=1}}else if(Ne.length>0){if(ze&&Qe){const q=be(Ne[0]);t.texStorage2D(i.TEXTURE_2D,Y,Le,q.width,q.height)}for(let q=0,Z=Ne.length;q<Z;q++)Se=Ne[q],ze?y&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve,Xe,Se):t.texImage2D(i.TEXTURE_2D,q,Le,ve,Xe,Se);C.generateMipmaps=!1}else if(ze){if(Qe){const q=be(ce);t.texStorage2D(i.TEXTURE_2D,Y,Le,q.width,q.height)}y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Xe,ce)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Xe,ce);f(C)&&h(ie),Ce.__version=re.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function J(U,C,W){if(C.image.length!==6)return;const ie=Pe(U,C),ae=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const re=n.get(ae);if(ae.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const Ce=Ze.getPrimaries(Ze.workingColorSpace),de=C.colorSpace===Cn?null:Ze.getPrimaries(C.colorSpace),_e=C.colorSpace===Cn||Ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=C.isCompressedTexture||C.image[0].isCompressedTexture,ce=C.image[0]&&C.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!He&&!ce?ve[Z]=b(C.image[Z],!0,r.maxCubemapSize):ve[Z]=ce?C.image[Z].image:C.image[Z],ve[Z]=Ae(C,ve[Z]);const Xe=ve[0],Le=s.convert(C.format,C.colorSpace),Se=s.convert(C.type),Ne=S(C.internalFormat,Le,Se,C.colorSpace),ze=C.isVideoTexture!==!0,Qe=re.__version===void 0||ie===!0,y=ae.dataReady;let Y=T(C,Xe);pe(i.TEXTURE_CUBE_MAP,C);let q;if(He){ze&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Ne,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){q=ve[Z].mipmaps;for(let oe=0;oe<q.length;oe++){const we=q[oe];C.format!==Wt?Le!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,we.width,we.height,Le,Se,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ne,we.width,we.height,0,Le,Se,we.data)}}}else{if(q=C.mipmaps,ze&&Qe){q.length>0&&Y++;const Z=be(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Ne,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Le,Se,ve[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ne,ve[Z].width,ve[Z].height,0,Le,Se,ve[Z].data);for(let oe=0;oe<q.length;oe++){const Fe=q[oe].image[Z].image;ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Fe.width,Fe.height,Le,Se,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ne,Fe.width,Fe.height,0,Le,Se,Fe.data)}}else{ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,Se,ve[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ne,Le,Se,ve[Z]);for(let oe=0;oe<q.length;oe++){const we=q[oe];ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Le,Se,we.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ne,Le,Se,we.image[Z])}}}f(C)&&h(i.TEXTURE_CUBE_MAP),re.__version=ae.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function le(U,C,W,ie,ae,re){const Ce=s.convert(W.format,W.colorSpace),de=s.convert(W.type),_e=S(W.internalFormat,Ce,de,W.colorSpace);if(!n.get(C).__hasExternalTextures){const ce=Math.max(1,C.width>>re),ve=Math.max(1,C.height>>re);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,re,_e,ce,ve,C.depth,0,Ce,de,null):t.texImage2D(ae,re,_e,ce,ve,0,Ce,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),he(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,n.get(W).__webglTexture,0,Me(C)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,n.get(W).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,C,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){const ie=C.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,re=M(C.stencilBuffer,ae),Ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Me(C);he(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,re,C.width,C.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,re,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,re,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const ie=C.textures;for(let ae=0;ae<ie.length;ae++){const re=ie[ae],Ce=s.convert(re.format,re.colorSpace),de=s.convert(re.type),_e=S(re.internalFormat,Ce,de,re.colorSpace),He=Me(C);W&&he(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,_e,C.width,C.height):he(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,_e,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,_e,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const ie=n.get(C.depthTexture).__webglTexture,ae=Me(C);if(C.depthTexture.format===Si)he(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(C.depthTexture.format===wi)he(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Q(U){const C=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");me(C.__webglFramebuffer,U)}else if(W){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]=i.createRenderbuffer(),xe(C.__webglDepthbuffer[ie],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),xe(C.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function R(U,C,W){const ie=n.get(U);C!==void 0&&le(ie.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Q(U)}function I(U){const C=U.texture,W=n.get(U),ie=n.get(C);U.addEventListener("dispose",E);const ae=U.textures,re=U.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=C.version,a.memory.textures++),re){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let _e=0;_e<C.mipmaps.length;_e++)W.__webglFramebuffer[de][_e]=i.createFramebuffer()}else W.__webglFramebuffer[de]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<C.mipmaps.length;de++)W.__webglFramebuffer[de]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let de=0,_e=ae.length;de<_e;de++){const He=n.get(ae[de]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&he(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const _e=ae[de];W.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const He=s.convert(_e.format,_e.colorSpace),ce=s.convert(_e.type),ve=S(_e.internalFormat,He,ce,_e.colorSpace,U.isXRRenderTarget===!0),Xe=Me(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ve,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,W.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),pe(i.TEXTURE_CUBE_MAP,C);for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)le(W.__webglFramebuffer[de][_e],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else le(W.__webglFramebuffer[de],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);f(C)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,_e=ae.length;de<_e;de++){const He=ae[de],ce=n.get(He);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),pe(i.TEXTURE_2D,He),le(W.__webglFramebuffer,U,He,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),f(He)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),pe(de,C),C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)le(W.__webglFramebuffer[_e],U,C,i.COLOR_ATTACHMENT0,de,_e);else le(W.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,de,0);f(C)&&h(de),t.unbindTexture()}U.depthBuffer&&Q(U)}function B(U){const C=U.textures;for(let W=0,ie=C.length;W<ie;W++){const ae=C[W];if(f(ae)){const re=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(ae).__webglTexture;t.bindTexture(re,Ce),h(re),t.unbindTexture()}}}const L=[],ee=[];function ne(U){if(U.samples>0){if(he(U)===!1){const C=U.textures,W=U.width,ie=U.height;let ae=i.COLOR_BUFFER_BIT;const re=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),de=C.length>1;if(de)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(C[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,ae,i.NEAREST),c===!0&&(L.length=0,ee.length=0,L.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(L.push(re),ee.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(C[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Me(U){return Math.min(r.maxSamples,U.samples)}function he(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ke(U){const C=a.render.frame;d.get(U)!==C&&(d.set(U,C),U.update())}function Ae(U,C){const W=U.colorSpace,ie=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==gn&&W!==Cn&&(Ze.getTransfer(W)===Je?(ie!==Wt||ae!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),C}function be(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=R,this.setupRenderTarget=I,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function Kp(i,e){function t(n,r=Cn){let s;const a=Ze.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===Vi)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Ot)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===jo)return i.ALPHA;if(n===qo)return i.RGB;if(n===Wt)return i.RGBA;if(n===$o)return i.LUMINANCE;if(n===Ko)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===Jo)return i.RG;if(n===oa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===Sr||n===yr||n===Er||n===br)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ws||n===Ts||n===Cs||n===Rs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ws)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ps||n===Ls||n===Ds)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ps||n===Ls)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ds)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Is||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Hs||n===ks||n===Vs||n===Gs||n===Ws||n===Xs||n===Ys)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Is)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Us)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ns)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Os)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ks)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ws)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ys)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===js||n===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ar)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===$s||n===Ks||n===Zs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ar)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Zp extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jp={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const f=t.getJointPose(b,n),h=this._getHandJoint(l,b);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],g=d.position.distanceTo(m.position),_=.02,x=.005;l.inputState.pinching&&g>_+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&g<=_-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Et,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:Qp,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nm extends $n{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,m=null,g=null,_=null,x=null;const b=new tm,f=t.getContextAttributes();let h=null,S=null;const M=[],T=[],N=new Ie;let E=null;const A=new Ft;A.layers.enable(1),A.viewport=new ut;const v=new Ft;v.layers.enable(2),v.viewport=new ut;const p=[A,v],u=new Zp;u.layers.enable(1),u.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=M[J];return le===void 0&&(le=new ms,M[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=M[J];return le===void 0&&(le=new ms,M[J]=le),le.getGripSpace()},this.getHand=function(J){let le=M[J];return le===void 0&&(le=new ms,M[J]=le),le.getHandSpace()};function O(J){const le=T.indexOf(J.inputSource);if(le===-1)return;const xe=M[le];xe!==void 0&&(xe.update(J.inputSource,J.frame,l||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let J=0;J<M.length;J++){const le=T[J];le!==null&&(T[J]=null,M[J].disconnect(le))}w=null,D=null,b.reset(),e.setRenderTarget(h),_=null,g=null,m=null,r=null,S=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const le={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new jn(_.framebufferWidth,_.framebufferHeight,{format:Wt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let le=null,xe=null,me=null;f.depth&&(me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=f.stencil?wi:Si,xe=f.stencil?Ai:Yn);const Q={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};m=new XRWebGLBinding(r,t),g=m.createProjectionLayer(Q),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),S=new jn(g.textureWidth,g.textureHeight,{format:Wt,type:pn,depthTexture:new xl(g.textureWidth,g.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(J){for(let le=0;le<J.removed.length;le++){const xe=J.removed[le],me=T.indexOf(xe);me>=0&&(T[me]=null,M[me].disconnect(xe))}for(let le=0;le<J.added.length;le++){const xe=J.added[le];let me=T.indexOf(xe);if(me===-1){for(let R=0;R<M.length;R++)if(R>=T.length){T.push(xe),me=R;break}else if(T[R]===null){T[R]=xe,me=R;break}if(me===-1)break}const Q=M[me];Q&&Q.connect(xe)}}const F=new G,X=new G;function j(J,le,xe){F.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const me=F.distanceTo(X),Q=le.projectionMatrix.elements,R=xe.projectionMatrix.elements,I=Q[14]/(Q[10]-1),B=Q[14]/(Q[10]+1),L=(Q[9]+1)/Q[5],ee=(Q[9]-1)/Q[5],ne=(Q[8]-1)/Q[0],Me=(R[8]+1)/R[0],he=I*ne,ke=I*Me,Ae=me/(-ne+Me),be=Ae*-ne;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(be),J.translateZ(Ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const U=I+Ae,C=B+Ae,W=he-be,ie=ke+(me-be),ae=L*B/C*U,re=ee*B/C*U;J.projectionMatrix.makePerspective(W,ie,ae,re,U,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function se(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;b.texture!==null&&(J.near=b.depthNear,J.far=b.depthFar),u.near=v.near=A.near=J.near,u.far=v.far=A.far=J.far,(w!==u.near||D!==u.far)&&(r.updateRenderState({depthNear:u.near,depthFar:u.far}),w=u.near,D=u.far,A.near=w,A.far=D,v.near=w,v.far=D,A.updateProjectionMatrix(),v.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,xe=u.cameras;se(u,le);for(let me=0;me<xe.length;me++)se(xe[me],le);xe.length===2?j(u,A,v):u.projectionMatrix.copy(A.projectionMatrix),te(J,u,le)};function te(J,le,xe){xe===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(g===null&&_===null))return c},this.setFoveation=function(J){c=J,g!==null&&(g.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(u)};let pe=null;function Pe(J,le){if(d=le.getViewerPose(l||a),x=le,d!==null){const xe=d.views;_!==null&&(e.setRenderTargetFramebuffer(S,_.framebuffer),e.setRenderTarget(S));let me=!1;xe.length!==u.cameras.length&&(u.cameras.length=0,me=!0);for(let R=0;R<xe.length;R++){const I=xe[R];let B=null;if(_!==null)B=_.getViewport(I);else{const ee=m.getViewSubImage(g,I);B=ee.viewport,R===0&&(e.setRenderTargetTextures(S,ee.colorTexture,g.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(S))}let L=p[R];L===void 0&&(L=new Ft,L.layers.enable(R),L.viewport=new ut,p[R]=L),L.matrix.fromArray(I.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(I.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(B.x,B.y,B.width,B.height),R===0&&(u.matrix.copy(L.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),me===!0&&u.cameras.push(L)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const R=m.getDepthInformation(xe[0]);R&&R.isValid&&R.texture&&b.init(e,R,r.renderState)}}for(let xe=0;xe<M.length;xe++){const me=T[xe],Q=M[xe];me!==null&&Q!==void 0&&Q.update(me,le,l||a)}pe&&pe(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),x=null}const Ue=new _l;Ue.setAnimationLoop(Pe),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const kn=new Jt,im=new rt;function rm(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,pl(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,S,M,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),m(f,h)):h.isMeshPhongMaterial?(s(f,h),d(f,h)):h.isMeshStandardMaterial?(s(f,h),g(f,h),h.isMeshPhysicalMaterial&&_(f,h,T)):h.isMeshMatcapMaterial?(s(f,h),x(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),b(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,S,M):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Tt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Tt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const S=e.get(h),M=S.envMap,T=S.envMapRotation;M&&(f.envMap.value=M,kn.copy(T),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),f.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(kn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,S,M){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*S,f.scale.value=M*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function m(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function g(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function _(f,h,S){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,h){h.matcap&&(f.matcap.value=h.matcap)}function b(f,h){const S=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function l(S,M){let T=r[S.id];T===void 0&&(x(S),T=d(S),r[S.id]=T,S.addEventListener("dispose",f));const N=M.program;n.updateUBOMapping(S,N);const E=e.render.frame;s[S.id]!==E&&(g(S),s[S.id]=E)}function d(S){const M=m();S.__bindingPointIndex=M;const T=i.createBuffer(),N=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(S){const M=r[S.id],T=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,A=T.length;E<A;E++){const v=Array.isArray(T[E])?T[E]:[T[E]];for(let p=0,u=v.length;p<u;p++){const w=v[p];if(_(w,E,p,N)===!0){const D=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let k=0;k<O.length;k++){const F=O[k],X=b(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+z,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(S,M,T,N){const E=S.value,A=M+"_"+T;if(N[A]===void 0)return typeof E=="number"||typeof E=="boolean"?N[A]=E:N[A]=E.clone(),!0;{const v=N[A];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return N[A]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function x(S){const M=S.uniforms;let T=0;const N=16;for(let A=0,v=M.length;A<v;A++){const p=Array.isArray(M[A])?M[A]:[M[A]];for(let u=0,w=p.length;u<w;u++){const D=p[u],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,k=O.length;z<k;z++){const F=O[z],X=b(F),j=T%N;j!==0&&N-j<X.boundary&&(T+=N-j),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=X.storage}}}const E=T%N;return E>0&&(T+=N-E),S.__size=T,S.__cache={},this}function b(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){const M=S.target;M.removeEventListener("dispose",f);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class am{constructor(e={}){const{canvas:t=qc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=new Uint32Array(4),x=new Int32Array(4);let b=null,f=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Ln,this.toneMappingExposure=1;const M=this;let T=!1,N=0,E=0,A=null,v=-1,p=null;const u=new ut,w=new ut;let D=null;const O=new We(0);let z=0,k=t.width,F=t.height,X=1,j=null,se=null;const te=new ut(0,0,k,F),pe=new ut(0,0,k,F);let Pe=!1;const Ue=new da;let J=!1,le=!1;const xe=new rt,me=new G,Q=new ut,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function B(){return A===null?X:1}let L=n;function ee(P,H){return t.getContext(P,H)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const H="webgl2";if(L=ee(H,P),L===null)throw ee(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,Me,he,ke,Ae,be,U,C,W,ie,ae,re,Ce,de,_e,He,ce,ve,Xe,Le,Se,Ne,ze,Qe;function y(){ne=new pf(L),ne.init(),Ne=new Kp(L,ne),Me=new lf(L,ne,e,Ne),he=new jp(L),ke=new _f(L),Ae=new Up,be=new $p(L,ne,he,Ae,Me,Ne,ke),U=new uf(M),C=new ff(M),W=new Eu(L),ze=new af(L,W),ie=new mf(L,W,ke,ze),ae=new xf(L,ie,W,ke),Xe=new vf(L,Me,be),He=new cf(Ae),re=new Ip(M,U,C,ne,Me,ze,He),Ce=new rm(M,Ae),de=new Fp,_e=new Vp(ne),ve=new sf(M,U,C,he,ae,g,c),ce=new Yp(M,ae,Me),Qe=new sm(L,ke,Me,he),Le=new of(L,ne,ke),Se=new gf(L,ne,ke),ke.programs=re.programs,M.capabilities=Me,M.extensions=ne,M.properties=Ae,M.renderLists=de,M.shadowMap=ce,M.state=he,M.info=ke}y();const Y=new nm(M,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(k,F,!1))},this.getSize=function(P){return P.set(k,F)},this.setSize=function(P,H,$=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,F=H,t.width=Math.floor(P*X),t.height=Math.floor(H*X),$===!0&&(t.style.width=P+"px",t.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(k*X,F*X).floor()},this.setDrawingBufferSize=function(P,H,$){k=P,F=H,X=$,t.width=Math.floor(P*$),t.height=Math.floor(H*$),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(u)},this.getViewport=function(P){return P.copy(te)},this.setViewport=function(P,H,$,K){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,H,$,K),he.viewport(u.copy(te).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,H,$,K){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,H,$,K),he.scissor(w.copy(pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(P){he.setScissorTest(Pe=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(P=!0,H=!0,$=!0){let K=0;if(P){let V=!1;if(A!==null){const ue=A.texture.format;V=ue===la||ue===oa||ue===aa}if(V){const ue=A.texture.type,ge=ue===pn||ue===Yn||ue===Vi||ue===Ai||ue===ra||ue===sa,ye=ve.getClearColor(),Ee=ve.getClearAlpha(),De=ye.r,Oe=ye.g,Re=ye.b;ge?(_[0]=De,_[1]=Oe,_[2]=Re,_[3]=Ee,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=De,x[1]=Oe,x[2]=Re,x[3]=Ee,L.clearBufferiv(L.COLOR,0,x))}else K|=L.COLOR_BUFFER_BIT}H&&(K|=L.DEPTH_BUFFER_BIT),$&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),_e.dispose(),Ae.dispose(),U.dispose(),C.dispose(),ae.dispose(),ze.dispose(),Qe.dispose(),re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",st),Y.removeEventListener("sessionend",vn),pt.stop()};function q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=ke.autoReset,H=ce.enabled,$=ce.autoUpdate,K=ce.needsUpdate,V=ce.type;y(),ke.autoReset=P,ce.enabled=H,ce.autoUpdate=$,ce.needsUpdate=K,ce.type=V}function oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function we(P){const H=P.target;H.removeEventListener("dispose",we),Fe(H)}function Fe(P){it(P),Ae.remove(P)}function it(P){const H=Ae.get(P).programs;H!==void 0&&(H.forEach(function($){re.releaseProgram($)}),P.isShaderMaterial&&re.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,$,K,V,ue){H===null&&(H=R);const ge=V.isMesh&&V.matrixWorld.determinant()<0,ye=Ol(P,H,$,K,V);he.setMaterial(K,ge);let Ee=$.index,De=1;if(K.wireframe===!0){if(Ee=ie.getWireframeAttribute($),Ee===void 0)return;De=2}const Oe=$.drawRange,Re=$.attributes.position;let je=Oe.start*De,tt=(Oe.start+Oe.count)*De;ue!==null&&(je=Math.max(je,ue.start*De),tt=Math.min(tt,(ue.start+ue.count)*De)),Ee!==null?(je=Math.max(je,0),tt=Math.min(tt,Ee.count)):Re!=null&&(je=Math.max(je,0),tt=Math.min(tt,Re.count));const nt=tt-je;if(nt<0||nt===1/0)return;ze.setup(V,K,ye,$,Ee);let Ct,qe=Le;if(Ee!==null&&(Ct=W.get(Ee),qe=Se,qe.setIndex(Ct)),V.isMesh)K.wireframe===!0?(he.setLineWidth(K.wireframeLinewidth*B()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(V.isLine){let Te=K.linewidth;Te===void 0&&(Te=1),he.setLineWidth(Te*B()),V.isLineSegments?qe.setMode(L.LINES):V.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else V.isPoints?qe.setMode(L.POINTS):V.isSprite&&qe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)qe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))qe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Te=V._multiDrawStarts,mt=V._multiDrawCounts,$e=V._multiDrawCount,zt=Ee?W.get(Ee).bytesPerElement:1,Kn=Ae.get(K).currentProgram.getUniforms();for(let Rt=0;Rt<$e;Rt++)Kn.setValue(L,"_gl_DrawID",Rt),qe.render(Te[Rt]/zt,mt[Rt])}else if(V.isInstancedMesh)qe.renderInstances(je,nt,V.count);else if($.isInstancedBufferGeometry){const Te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,mt=Math.min($.instanceCount,Te);qe.renderInstances(je,nt,mt)}else qe.render(je,nt)};function lt(P,H,$){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Tt,P.needsUpdate=!0,qi(P,H,$),P.side=Dn,P.needsUpdate=!0,qi(P,H,$),P.side=cn):qi(P,H,$)}this.compile=function(P,H,$=null){$===null&&($=P),f=_e.get($),f.init(H),S.push(f),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),P!==$&&P.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const K=new Set;return P.traverse(function(V){const ue=V.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const ye=ue[ge];lt(ye,$,V),K.add(ye)}else lt(ue,$,V),K.add(ue)}),S.pop(),f=null,K},this.compileAsync=function(P,H,$=null){const K=this.compile(P,H,$);return new Promise(V=>{function ue(){if(K.forEach(function(ge){Ae.get(ge).currentProgram.isReady()&&K.delete(ge)}),K.size===0){V(P);return}setTimeout(ue,10)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function ct(P){Ye&&Ye(P)}function st(){pt.stop()}function vn(){pt.start()}const pt=new _l;pt.setAnimationLoop(ct),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(P){Ye=P,Y.setAnimationLoop(P),P===null?pt.stop():pt.start()},Y.addEventListener("sessionstart",st),Y.addEventListener("sessionend",vn),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,H,A),f=_e.get(P,S.length),f.init(H),S.push(f),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ue.setFromProjectionMatrix(xe),le=this.localClippingEnabled,J=He.init(this.clippingPlanes,le),b=de.get(P,h.length),b.init(),h.push(b),Y.enabled===!0&&Y.isPresenting===!0){const ue=M.xr.getDepthSensingMesh();ue!==null&&en(ue,H,-1/0,M.sortObjects)}en(P,H,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(j,se),I=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,I&&ve.addToRenderList(b,P),this.info.render.frame++,J===!0&&He.beginShadows();const $=f.state.shadowsArray;ce.render($,P,H),J===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=b.opaque,V=b.transmissive;if(f.setupLights(),H.isArrayCamera){const ue=H.cameras;if(V.length>0)for(let ge=0,ye=ue.length;ge<ye;ge++){const Ee=ue[ge];Di(K,V,P,Ee)}I&&ve.render(P);for(let ge=0,ye=ue.length;ge<ye;ge++){const Ee=ue[ge];Nn(b,P,Ee,Ee.viewport)}}else V.length>0&&Di(K,V,P,H),I&&ve.render(P),Nn(b,P,H);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(M,P,H),ze.resetDefaultState(),v=-1,p=null,S.pop(),S.length>0?(f=S[S.length-1],J===!0&&He.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?b=h[h.length-1]:b=null};function en(P,H,$,K){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ue.intersectsSprite(P)){K&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);const ge=ae.update(P),ye=P.material;ye.visible&&b.push(P,ge,ye,$,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ue.intersectsObject(P))){const ge=ae.update(P),ye=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Q.copy(P.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Q.copy(ge.boundingSphere.center)),Q.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(ye)){const Ee=ge.groups;for(let De=0,Oe=Ee.length;De<Oe;De++){const Re=Ee[De],je=ye[Re.materialIndex];je&&je.visible&&b.push(P,ge,je,$,Q.z,Re)}}else ye.visible&&b.push(P,ge,ye,$,Q.z,null)}}const ue=P.children;for(let ge=0,ye=ue.length;ge<ye;ge++)en(ue[ge],H,$,K)}function Nn(P,H,$,K){const V=P.opaque,ue=P.transmissive,ge=P.transparent;f.setupLightsView($),J===!0&&He.setGlobalState(M.clippingPlanes,$),K&&he.viewport(u.copy(K)),V.length>0&&ji(V,H,$),ue.length>0&&ji(ue,H,$),ge.length>0&&ji(ge,H,$),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Di(P,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?dn:pn,minFilter:Rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=f.state.transmissionRenderTarget[K.id],ge=K.viewport||u;ue.setSize(ge.z,ge.w);const ye=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor(O),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),I?ve.render($):M.clear();const Ee=M.toneMapping;M.toneMapping=Ln;const De=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),J===!0&&He.setGlobalState(M.clippingPlanes,K),ji(P,$,K),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Re=0,je=H.length;Re<je;Re++){const tt=H[Re],nt=tt.object,Ct=tt.geometry,qe=tt.material,Te=tt.group;if(qe.side===cn&&nt.layers.test(K.layers)){const mt=qe.side;qe.side=Tt,qe.needsUpdate=!0,va(nt,$,K,Ct,qe,Te),qe.side=mt,qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue))}M.setRenderTarget(ye),M.setClearColor(O,z),De!==void 0&&(K.viewport=De),M.toneMapping=Ee}function ji(P,H,$){const K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ue=P.length;V<ue;V++){const ge=P[V],ye=ge.object,Ee=ge.geometry,De=K===null?ge.material:K,Oe=ge.group;ye.layers.test($.layers)&&va(ye,H,$,Ee,De,Oe)}}function va(P,H,$,K,V,ue){P.onBeforeRender(M,H,$,K,V,ue),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=Tt,V.needsUpdate=!0,M.renderBufferDirect($,H,K,V,P,ue),V.side=Dn,V.needsUpdate=!0,M.renderBufferDirect($,H,K,V,P,ue),V.side=cn):M.renderBufferDirect($,H,K,V,P,ue),P.onAfterRender(M,H,$,K,V,ue)}function qi(P,H,$){H.isScene!==!0&&(H=R);const K=Ae.get(P),V=f.state.lights,ue=f.state.shadowsArray,ge=V.state.version,ye=re.getParameters(P,V.state,ue,H,$),Ee=re.getProgramCacheKey(ye);let De=K.programs;K.environment=P.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(P.isMeshStandardMaterial?C:U).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,De===void 0&&(P.addEventListener("dispose",we),De=new Map,K.programs=De);let Oe=De.get(Ee);if(Oe!==void 0){if(K.currentProgram===Oe&&K.lightsStateVersion===ge)return Ma(P,ye),Oe}else ye.uniforms=re.getUniforms(P),P.onBeforeCompile(ye,M),Oe=re.acquireProgram(ye,Ee),De.set(Ee,Oe),K.uniforms=ye.uniforms;const Re=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Re.clippingPlanes=He.uniform),Ma(P,ye),K.needsLights=zl(P),K.lightsStateVersion=ge,K.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMap.value=V.state.directionalShadowMap,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotShadowMap.value=V.state.spotShadowMap,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMap.value=V.state.pointShadowMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Oe,K.uniformsList=null,Oe}function xa(P){if(P.uniformsList===null){const H=P.currentProgram.getUniforms();P.uniformsList=wr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function Ma(P,H){const $=Ae.get(P);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ol(P,H,$,K,V){H.isScene!==!0&&(H=R),be.resetTextureUnits();const ue=H.fog,ge=K.isMeshStandardMaterial?H.environment:null,ye=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gn,Ee=(K.isMeshStandardMaterial?C:U).get(K.envMap||ge),De=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Oe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Re=!!$.morphAttributes.position,je=!!$.morphAttributes.normal,tt=!!$.morphAttributes.color;let nt=Ln;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=M.toneMapping);const Ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qe=Ct!==void 0?Ct.length:0,Te=Ae.get(K),mt=f.state.lights;if(J===!0&&(le===!0||P!==p)){const It=P===p&&K.id===v;He.setState(K,P,It)}let $e=!1;K.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==mt.state.version||Te.outputColorSpace!==ye||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Ee||K.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==He.numPlanes||Te.numIntersection!==He.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==Oe||Te.morphTargets!==Re||Te.morphNormals!==je||Te.morphColors!==tt||Te.toneMapping!==nt||Te.morphTargetsCount!==qe)&&($e=!0):($e=!0,Te.__version=K.version);let zt=Te.currentProgram;$e===!0&&(zt=qi(K,H,V));let Kn=!1,Rt=!1,kr=!1;const at=zt.getUniforms(),xn=Te.uniforms;if(he.useProgram(zt.program)&&(Kn=!0,Rt=!0,kr=!0),K.id!==v&&(v=K.id,Rt=!0),Kn||p!==P){at.setValue(L,"projectionMatrix",P.projectionMatrix),at.setValue(L,"viewMatrix",P.matrixWorldInverse);const It=at.map.cameraPosition;It!==void 0&&It.setValue(L,me.setFromMatrixPosition(P.matrixWorld)),Me.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&at.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),p!==P&&(p=P,Rt=!0,kr=!0)}if(V.isSkinnedMesh){at.setOptional(L,V,"bindMatrix"),at.setOptional(L,V,"bindMatrixInverse");const It=V.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),at.setValue(L,"boneTexture",It.boneTexture,be))}V.isBatchedMesh&&(at.setOptional(L,V,"batchingTexture"),at.setValue(L,"batchingTexture",V._matricesTexture,be),at.setOptional(L,V,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",V._indirectTexture,be),at.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",V._colorsTexture,be));const Vr=$.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&Xe.update(V,$,zt),(Rt||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,at.setValue(L,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=Ee,xn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(xn.envMapIntensity.value=H.environmentIntensity),Rt&&(at.setValue(L,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Bl(xn,kr),ue&&K.fog===!0&&Ce.refreshFogUniforms(xn,ue),Ce.refreshMaterialUniforms(xn,K,X,F,f.state.transmissionRenderTarget[P.id]),wr.upload(L,xa(Te),xn,be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(wr.upload(L,xa(Te),xn,be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&at.setValue(L,"center",V.center),at.setValue(L,"modelViewMatrix",V.modelViewMatrix),at.setValue(L,"normalMatrix",V.normalMatrix),at.setValue(L,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const It=K.uniformsGroups;for(let Gr=0,Hl=It.length;Gr<Hl;Gr++){const Sa=It[Gr];Qe.update(Sa,zt),Qe.bind(Sa,zt)}}return zt}function Bl(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function zl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,H,$){Ae.get(P.texture).__webglTexture=H,Ae.get(P.depthTexture).__webglTexture=$;const K=Ae.get(P);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,H){const $=Ae.get(P);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,$=0){A=P,N=H,E=$;let K=!0,V=null,ue=!1,ge=!1;if(P){const Ee=Ae.get(P);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(L.FRAMEBUFFER,null),K=!1):Ee.__webglFramebuffer===void 0?be.setupRenderTarget(P):Ee.__hasExternalTextures&&be.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);const De=P.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const Oe=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?V=Oe[H][$]:V=Oe[H],ue=!0):P.samples>0&&be.useMultisampledRTT(P)===!1?V=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[$]:V=Oe,u.copy(P.viewport),w.copy(P.scissor),D=P.scissorTest}else u.copy(te).multiplyScalar(X).floor(),w.copy(pe).multiplyScalar(X).floor(),D=Pe;if(he.bindFramebuffer(L.FRAMEBUFFER,V)&&K&&he.drawBuffers(P,V),he.viewport(u),he.scissor(w),he.setScissorTest(D),ue){const Ee=Ae.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ee.__webglTexture,$)}else if(ge){const Ee=Ae.get(P.texture),De=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,$||0,De)}v=-1},this.readRenderTargetPixels=function(P,H,$,K,V,ue,ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){he.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Ee=P.texture,De=Ee.format,Oe=Ee.type;if(!Me.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-K&&$>=0&&$<=P.height-V&&L.readPixels(H,$,K,V,Ne.convert(De),Ne.convert(Oe),ue)}finally{const Ee=A!==null?Ae.get(A).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(P,H,$,K,V,ue,ge){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){he.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Ee=P.texture,De=Ee.format,Oe=Ee.type;if(!Me.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=P.width-K&&$>=0&&$<=P.height-V){const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(H,$,K,V,Ne.convert(De),Ne.convert(Oe),0),L.flush();const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await $c(L,je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Re),L.deleteSync(je)}return ue}}finally{const Ee=A!==null?Ae.get(A).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(P,H=null,$=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,P=arguments[1]);const K=Math.pow(2,-$),V=Math.floor(P.image.width*K),ue=Math.floor(P.image.height*K),ge=H!==null?H.x:0,ye=H!==null?H.y:0;be.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,ge,ye,V,ue),he.unbindTexture()},this.copyTextureToTexture=function(P,H,$=null,K=null,V=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1],H=arguments[2],V=arguments[3]||0,$=null);let ue,ge,ye,Ee,De,Oe;$!==null?(ue=$.max.x-$.min.x,ge=$.max.y-$.min.y,ye=$.min.x,Ee=$.min.y):(ue=P.image.width,ge=P.image.height,ye=0,Ee=0),K!==null?(De=K.x,Oe=K.y):(De=0,Oe=0);const Re=Ne.convert(H.format),je=Ne.convert(H.type);be.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ct=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=P.isCompressedTexture?P.mipmaps[V]:P.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,De,Oe,ue,ge,Re,je,mt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,De,Oe,mt.width,mt.height,Re,mt.data):L.texSubImage2D(L.TEXTURE_2D,V,De,Oe,ue,ge,Re,je,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),V===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(P,H,$=null,K=null,V=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,P=arguments[2],H=arguments[3],V=arguments[4]||0);let ue,ge,ye,Ee,De,Oe,Re,je,tt;const nt=P.isCompressedTexture?P.mipmaps[V]:P.image;$!==null?(ue=$.max.x-$.min.x,ge=$.max.y-$.min.y,ye=$.max.z-$.min.z,Ee=$.min.x,De=$.min.y,Oe=$.min.z):(ue=nt.width,ge=nt.height,ye=nt.depth,Ee=0,De=0,Oe=0),K!==null?(Re=K.x,je=K.y,tt=K.z):(Re=0,je=0,tt=0);const Ct=Ne.convert(H.format),qe=Ne.convert(H.type);let Te;if(H.isData3DTexture)be.setTexture3D(H,0),Te=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)be.setTexture2DArray(H,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zt=L.getParameter(L.UNPACK_SKIP_PIXELS),Kn=L.getParameter(L.UNPACK_SKIP_ROWS),Rt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Te,V,Re,je,tt,ue,ge,ye,Ct,qe,nt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,V,Re,je,tt,ue,ge,ye,Ct,nt.data):L.texSubImage3D(Te,V,Re,je,tt,ue,ge,ye,Ct,qe,nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt),V===0&&H.generateMipmaps&&L.generateMipmap(Te),he.unbindTexture()},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&be.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?be.setTextureCube(P,0):P.isData3DTexture?be.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?be.setTexture2DArray(P,0):be.setTexture2D(P,0),he.unbindTexture()},this.resetState=function(){N=0,E=0,A=null,he.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ca?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Or?"display-p3":"srgb"}}class om extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lm extends Et{constructor(e=null,t=1,n=1,r,s,a,o,c,l=wt,d=wt,m,g){super(null,a,o,c,l,d,r,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa extends Un{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),d(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new G,T=new G,N=new G;for(let E=0;E<t.length;E+=3)_(t[E+0],M),_(t[E+1],T),_(t[E+2],N),c(M,T,N,S)}function c(S,M,T,N){const E=N+1,A=[];for(let v=0;v<=E;v++){A[v]=[];const p=S.clone().lerp(T,v/E),u=M.clone().lerp(T,v/E),w=E-v;for(let D=0;D<=w;D++)D===0&&v===E?A[v][D]=p:A[v][D]=p.clone().lerp(u,D/w)}for(let v=0;v<E;v++)for(let p=0;p<2*(E-v)-1;p++){const u=Math.floor(p/2);p%2===0?(g(A[v][u+1]),g(A[v+1][u]),g(A[v][u])):(g(A[v][u+1]),g(A[v+1][u+1]),g(A[v+1][u]))}}function l(S){const M=new G;for(let T=0;T<s.length;T+=3)M.x=s[T+0],M.y=s[T+1],M.z=s[T+2],M.normalize().multiplyScalar(S),s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}function d(){const S=new G;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];const T=f(S)/2/Math.PI+.5,N=h(S)/Math.PI+.5;a.push(T,1-N)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){const M=a[S+0],T=a[S+2],N=a[S+4],E=Math.max(M,T,N),A=Math.min(M,T,N);E>.9&&A<.1&&(M<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),N<.2&&(a[S+4]+=1))}}function g(S){s.push(S.x,S.y,S.z)}function _(S,M){const T=S*3;M.x=e[T+0],M.y=e[T+1],M.z=e[T+2]}function x(){const S=new G,M=new G,T=new G,N=new G,E=new Ie,A=new Ie,v=new Ie;for(let p=0,u=0;p<s.length;p+=9,u+=6){S.set(s[p+0],s[p+1],s[p+2]),M.set(s[p+3],s[p+4],s[p+5]),T.set(s[p+6],s[p+7],s[p+8]),E.set(a[u+0],a[u+1]),A.set(a[u+2],a[u+3]),v.set(a[u+4],a[u+5]),N.copy(S).add(M).add(T).divideScalar(3);const w=f(N);b(E,u+0,S,w),b(A,u+2,M,w),b(v,u+4,T,w)}}function b(S,M,T,N){N<0&&S.x===1&&(a[M]=S.x-1),T.x===0&&T.z===0&&(a[M]=N/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.vertices,e.indices,e.radius,e.details)}}class ma extends pa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class cm extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Mo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class um{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){const m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,g=l.length;m<g;m+=2){const _=l[m],x=l[m+1];if(_.global&&(_.lastIndex=0),_.test(d))return x}return null}}}const hm=new um;class ga{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ga.DEFAULT_MATERIAL_NAME="__DEFAULT";const on={};class dm extends Error{constructor(e,t){super(e),this.response=t}}class fm extends ga{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:n,onError:r});return}on[e]=[],on[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=on[e],m=l.body.getReader(),g=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),_=g?parseInt(g):0,x=_!==0;let b=0;const f=new ReadableStream({start(h){S();function S(){m.read().then(({done:M,value:T})=>{if(M)h.close();else{b+=T.byteLength;const N=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:_});for(let E=0,A=d.length;E<A;E++){const v=d[E];v.onProgress&&v.onProgress(N)}h.enqueue(T),S()}},M=>{h.error(M)})}}});return new Response(f)}else throw new dm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const m=/charset="?([^;"\s]*)"?/i.exec(o),g=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(g);return l.arrayBuffer().then(x=>_.decode(x))}}}).then(l=>{Mo.add(e,l);const d=on[e];delete on[e];for(let m=0,g=d.length;m<g;m++){const _=d[m];_.onLoad&&_.onLoad(l)}}).catch(l=>{const d=on[e];if(d===void 0)throw this.manager.itemError(e),l;delete on[e];for(let m=0,g=d.length;m<g;m++){const _=d[m];_.onError&&_.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pm extends ga{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new lm,o=new fm(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:hn,a.wrapT=l.wrapT!==void 0?l.wrapT:hn,a.magFilter=l.magFilter!==void 0?l.magFilter:xt,a.minFilter=l.minFilter!==void 0?l.minFilter:xt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Rn),l.mipmapCount===1&&(a.minFilter=xt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,r),a}}class mm extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const gs=new rt,So=new G,yo=new G;class gm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _m extends gm{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends mm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new _m}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eo(){return(typeof performance>"u"?Date:performance).now()}class Nt{constructor(e){this.value=e}clone(){return new Nt(this.value.clone===void 0?this.value:this.value.clone())}}class bo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);const Ao={type:"change"},_s={type:"start"},wo={type:"end"},xr=new ll,To=new Tn,Mm=Math.cos(70*il.DEG2RAD);class Sm extends $n{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",_e),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ao),n.update(),s=r.NONE},this.update=function(){const y=new G,Y=new qn().setFromUnitVectors(e.up,new G(0,1,0)),q=Y.clone().invert(),Z=new G,oe=new qn,we=new G,Fe=2*Math.PI;return function(lt=null){const Ye=n.object.position;y.copy(Ye).sub(n.target),y.applyQuaternion(Y),o.setFromVector3(y),n.autoRotate&&s===r.NONE&&D(u(lt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ct=n.minAzimuthAngle,st=n.maxAzimuthAngle;isFinite(ct)&&isFinite(st)&&(ct<-Math.PI?ct+=Fe:ct>Math.PI&&(ct-=Fe),st<-Math.PI?st+=Fe:st>Math.PI&&(st-=Fe),ct<=st?o.theta=Math.max(ct,Math.min(st,o.theta)):o.theta=o.theta>(ct+st)/2?Math.max(ct,o.theta):Math.min(st,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let vn=!1;if(n.zoomToCursor&&E||n.object.isOrthographicCamera)o.radius=te(o.radius);else{const pt=o.radius;o.radius=te(o.radius*l),vn=pt!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(q),Ye.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&E){let pt=null;if(n.object.isPerspectiveCamera){const en=y.length();pt=te(en*l);const Nn=en-pt;n.object.position.addScaledVector(T,Nn),n.object.updateMatrixWorld(),vn=!!Nn}else if(n.object.isOrthographicCamera){const en=new G(N.x,N.y,0);en.unproject(n.object);const Nn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),vn=Nn!==n.object.zoom;const Di=new G(N.x,N.y,0);Di.unproject(n.object),n.object.position.sub(Di).add(en),n.object.updateMatrixWorld(),pt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pt).add(n.object.position):(xr.origin.copy(n.object.position),xr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xr.direction))<Mm?e.lookAt(n.target):(To.setFromNormalAndCoplanarPoint(n.object.up,n.target),xr.intersectPlane(To,n.target))))}else if(n.object.isOrthographicCamera){const pt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),pt!==n.object.zoom&&(n.object.updateProjectionMatrix(),vn=!0)}return l=1,E=!1,vn||Z.distanceToSquared(n.object.position)>a||8*(1-oe.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>a?(n.dispatchEvent(Ao),Z.copy(n.object.position),oe.copy(n.object.quaternion),we.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new bo,c=new bo;let l=1;const d=new G,m=new Ie,g=new Ie,_=new Ie,x=new Ie,b=new Ie,f=new Ie,h=new Ie,S=new Ie,M=new Ie,T=new G,N=new Ie;let E=!1;const A=[],v={};let p=!1;function u(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function w(y){const Y=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*Y)}function D(y){c.theta-=y}function O(y){c.phi-=y}const z=function(){const y=new G;return function(q,Z){y.setFromMatrixColumn(Z,0),y.multiplyScalar(-q),d.add(y)}}(),k=function(){const y=new G;return function(q,Z){n.screenSpacePanning===!0?y.setFromMatrixColumn(Z,1):(y.setFromMatrixColumn(Z,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(q),d.add(y)}}(),F=function(){const y=new G;return function(q,Z){const oe=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;y.copy(we).sub(n.target);let Fe=y.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),z(2*q*Fe/oe.clientHeight,n.object.matrix),k(2*Z*Fe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(q*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),k(Z*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(y,Y){if(!n.zoomToCursor)return;E=!0;const q=n.domElement.getBoundingClientRect(),Z=y-q.left,oe=Y-q.top,we=q.width,Fe=q.height;N.x=Z/we*2-1,N.y=-(oe/Fe)*2+1,T.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function pe(y){m.set(y.clientX,y.clientY)}function Pe(y){se(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function Ue(y){x.set(y.clientX,y.clientY)}function J(y){g.set(y.clientX,y.clientY),_.subVectors(g,m).multiplyScalar(n.rotateSpeed);const Y=n.domElement;D(2*Math.PI*_.x/Y.clientHeight),O(2*Math.PI*_.y/Y.clientHeight),m.copy(g),n.update()}function le(y){S.set(y.clientX,y.clientY),M.subVectors(S,h),M.y>0?X(w(M.y)):M.y<0&&j(w(M.y)),h.copy(S),n.update()}function xe(y){b.set(y.clientX,y.clientY),f.subVectors(b,x).multiplyScalar(n.panSpeed),F(f.x,f.y),x.copy(b),n.update()}function me(y){se(y.clientX,y.clientY),y.deltaY<0?j(w(y.deltaY)):y.deltaY>0&&X(w(y.deltaY)),n.update()}function Q(y){let Y=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Y=!0;break}Y&&(y.preventDefault(),n.update())}function R(y){if(A.length===1)m.set(y.pageX,y.pageY);else{const Y=ze(y),q=.5*(y.pageX+Y.x),Z=.5*(y.pageY+Y.y);m.set(q,Z)}}function I(y){if(A.length===1)x.set(y.pageX,y.pageY);else{const Y=ze(y),q=.5*(y.pageX+Y.x),Z=.5*(y.pageY+Y.y);x.set(q,Z)}}function B(y){const Y=ze(y),q=y.pageX-Y.x,Z=y.pageY-Y.y,oe=Math.sqrt(q*q+Z*Z);h.set(0,oe)}function L(y){n.enableZoom&&B(y),n.enablePan&&I(y)}function ee(y){n.enableZoom&&B(y),n.enableRotate&&R(y)}function ne(y){if(A.length==1)g.set(y.pageX,y.pageY);else{const q=ze(y),Z=.5*(y.pageX+q.x),oe=.5*(y.pageY+q.y);g.set(Z,oe)}_.subVectors(g,m).multiplyScalar(n.rotateSpeed);const Y=n.domElement;D(2*Math.PI*_.x/Y.clientHeight),O(2*Math.PI*_.y/Y.clientHeight),m.copy(g)}function Me(y){if(A.length===1)b.set(y.pageX,y.pageY);else{const Y=ze(y),q=.5*(y.pageX+Y.x),Z=.5*(y.pageY+Y.y);b.set(q,Z)}f.subVectors(b,x).multiplyScalar(n.panSpeed),F(f.x,f.y),x.copy(b)}function he(y){const Y=ze(y),q=y.pageX-Y.x,Z=y.pageY-Y.y,oe=Math.sqrt(q*q+Z*Z);S.set(0,oe),M.set(0,Math.pow(S.y/h.y,n.zoomSpeed)),X(M.y),h.copy(S);const we=(y.pageX+Y.x)*.5,Fe=(y.pageY+Y.y)*.5;se(we,Fe)}function ke(y){n.enableZoom&&he(y),n.enablePan&&Me(y)}function Ae(y){n.enableZoom&&he(y),n.enableRotate&&ne(y)}function be(y){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",C)),!Se(y)&&(Xe(y),y.pointerType==="touch"?He(y):W(y)))}function U(y){n.enabled!==!1&&(y.pointerType==="touch"?ce(y):ie(y))}function C(y){switch(Le(y),A.length){case 0:n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(wo),s=r.NONE;break;case 1:const Y=A[0],q=v[Y];He({pointerId:Y,pageX:q.x,pageY:q.y});break}}function W(y){let Y;switch(y.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Zn.DOLLY:if(n.enableZoom===!1)return;Pe(y),s=r.DOLLY;break;case Zn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Ue(y),s=r.PAN}else{if(n.enableRotate===!1)return;pe(y),s=r.ROTATE}break;case Zn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;pe(y),s=r.ROTATE}else{if(n.enablePan===!1)return;Ue(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_s)}function ie(y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(y);break;case r.DOLLY:if(n.enableZoom===!1)return;le(y);break;case r.PAN:if(n.enablePan===!1)return;xe(y);break}}function ae(y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(y.preventDefault(),n.dispatchEvent(_s),me(re(y)),n.dispatchEvent(wo))}function re(y){const Y=y.deltaMode,q={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(Y){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return y.ctrlKey&&!p&&(q.deltaY*=10),q}function Ce(y){y.key==="Control"&&(p=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(y){y.key==="Control"&&(p=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function _e(y){n.enabled===!1||n.enablePan===!1||Q(y)}function He(y){switch(Ne(y),A.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;R(y),s=r.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;I(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(y),s=r.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_s)}function ce(y){switch(Ne(y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ne(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Me(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(y),n.update();break;default:s=r.NONE}}function ve(y){n.enabled!==!1&&y.preventDefault()}function Xe(y){A.push(y.pointerId)}function Le(y){delete v[y.pointerId];for(let Y=0;Y<A.length;Y++)if(A[Y]==y.pointerId){A.splice(Y,1);return}}function Se(y){for(let Y=0;Y<A.length;Y++)if(A[Y]==y.pointerId)return!0;return!1}function Ne(y){let Y=v[y.pointerId];Y===void 0&&(Y=new Ie,v[y.pointerId]=Y),Y.set(y.pageX,y.pageY)}function ze(y){const Y=y.pointerId===A[0]?A[1]:A[0];return v[Y]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}class ym extends pm{constructor(e){super(e),this.type=dn}parse(e){const a=function(v,p){switch(v){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(p||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(p||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(p||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(p||""))}},d=`
`,m=function(v,p,u){p=p||1024;let D=v.pos,O=-1,z=0,k="",F=String.fromCharCode.apply(null,new Uint16Array(v.subarray(D,D+128)));for(;0>(O=F.indexOf(d))&&z<p&&D<v.byteLength;)k+=F,z+=F.length,D+=128,F+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(D,D+128)));return-1<O?(v.pos+=z+O+1,k+F.slice(0,O)):!1},g=function(v){const p=/^#\?(\S+)/,u=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,F;for((v.pos>=v.byteLength||!(k=m(v)))&&a(1,"no header found"),(F=k.match(p))||a(3,"bad initial token"),z.valid|=1,z.programtype=F[1],z.string+=k+`
`;k=m(v),k!==!1;){if(z.string+=k+`
`,k.charAt(0)==="#"){z.comments+=k+`
`;continue}if((F=k.match(u))&&(z.gamma=parseFloat(F[1])),(F=k.match(w))&&(z.exposure=parseFloat(F[1])),(F=k.match(D))&&(z.valid|=2,z.format=F[1]),(F=k.match(O))&&(z.valid|=4,z.height=parseInt(F[1],10),z.width=parseInt(F[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},_=function(v,p,u){const w=p;if(w<8||w>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);w!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const D=new Uint8Array(4*p*u);D.length||a(4,"unable to allocate buffer space");let O=0,z=0;const k=4*w,F=new Uint8Array(4),X=new Uint8Array(k);let j=u;for(;j>0&&z<v.byteLength;){z+4>v.byteLength&&a(1),F[0]=v[z++],F[1]=v[z++],F[2]=v[z++],F[3]=v[z++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=w)&&a(3,"bad rgbe scanline format");let se=0,te;for(;se<k&&z<v.byteLength;){te=v[z++];const Pe=te>128;if(Pe&&(te-=128),(te===0||se+te>k)&&a(3,"bad scanline data"),Pe){const Ue=v[z++];for(let J=0;J<te;J++)X[se++]=Ue}else X.set(v.subarray(z,z+te),se),se+=te,z+=te}const pe=w;for(let Pe=0;Pe<pe;Pe++){let Ue=0;D[O]=X[Pe+Ue],Ue+=w,D[O+1]=X[Pe+Ue],Ue+=w,D[O+2]=X[Pe+Ue],Ue+=w,D[O+3]=X[Pe+Ue],O+=4}j--}return D},x=function(v,p,u,w){const D=v[p+3],O=Math.pow(2,D-128)/255;u[w+0]=v[p+0]*O,u[w+1]=v[p+1]*O,u[w+2]=v[p+2]*O,u[w+3]=1},b=function(v,p,u,w){const D=v[p+3],O=Math.pow(2,D-128)/255;u[w+0]=sr.toHalfFloat(Math.min(v[p+0]*O,65504)),u[w+1]=sr.toHalfFloat(Math.min(v[p+1]*O,65504)),u[w+2]=sr.toHalfFloat(Math.min(v[p+2]*O,65504)),u[w+3]=sr.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const h=g(f),S=h.width,M=h.height,T=_(f.subarray(f.pos),S,M);let N,E,A;switch(this.type){case Ot:A=T.length/4;const v=new Float32Array(A*4);for(let u=0;u<A;u++)x(T,u*4,v,u*4);N=v,E=Ot;break;case dn:A=T.length/4;const p=new Uint16Array(A*4);for(let u=0;u<A;u++)b(T,u*4,p,u*4);N=p,E=dn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:M,data:N,header:h.string,gamma:h.gamma,exposure:h.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case Ot:case dn:a.colorSpace=gn,a.minFilter=xt,a.magFilter=xt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}function Hr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Mr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Al={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function a(l,d){if(!r[l]){if(!n[l]){var m=typeof Mr=="function"&&Mr;if(!d&&m)return m(l,!0);if(o)return o(l,!0);throw new Error("Cannot find module '"+l+"'")}d=r[l]={exports:{}},n[l][0].call(d.exports,function(g){var _=n[l][1][g];return a(_||g)},d,d.exports,t,n,r,s)}return r[l].exports}for(var o=typeof Mr=="function"&&Mr,c=0;c<s.length;c++)a(s[c]);return a}({1:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){var x=t("crypto");function b(E,A){A=S(E,A);var v;return(v=A.algorithm!=="passthrough"?x.createHash(A.algorithm):new N).write===void 0&&(v.write=v.update,v.end=v.update),T(A,v).dispatch(E),v.update||v.end(""),v.digest?v.digest(A.encoding==="buffer"?void 0:A.encoding):(E=v.read(),A.encoding!=="buffer"?E.toString(A.encoding):E)}(r=n.exports=b).sha1=function(E){return b(E)},r.keys=function(E){return b(E,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(E){return b(E,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(E){return b(E,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=x.getHashes?x.getHashes().slice():["sha1","md5"],h=(f.push("passthrough"),["buffer","hex","binary","base64"]);function S(E,A){var v={};if(v.algorithm=(A=A||{}).algorithm||"sha1",v.encoding=A.encoding||"hex",v.excludeValues=!!A.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=A.ignoreUnknown===!0,v.respectType=A.respectType!==!1,v.respectFunctionNames=A.respectFunctionNames!==!1,v.respectFunctionProperties=A.respectFunctionProperties!==!1,v.unorderedArrays=A.unorderedArrays===!0,v.unorderedSets=A.unorderedSets!==!1,v.unorderedObjects=A.unorderedObjects!==!1,v.replacer=A.replacer||void 0,v.excludeKeys=A.excludeKeys||void 0,E===void 0)throw new Error("Object argument required.");for(var p=0;p<f.length;++p)f[p].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=f[p]);if(f.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+f.join(", "));if(h.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+h.join(", "));return v}function M(E){if(typeof E=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(E))!=null}function T(E,A,v){v=v||[];function p(u){return A.update?A.update(u,"utf8"):A.write(u,"utf8")}return{dispatch:function(u){return this["_"+((u=E.replacer?E.replacer(u):u)===null?"null":typeof u)](u)},_object:function(u){var w,D=Object.prototype.toString.call(u),O=/\[object (.*)\]/i.exec(D);if(O=(O=O?O[1]:"unknown:["+D+"]").toLowerCase(),0<=(D=v.indexOf(u)))return this.dispatch("[CIRCULAR:"+D+"]");if(v.push(u),o!==void 0&&o.isBuffer&&o.isBuffer(u))return p("buffer:"),p(u);if(O==="object"||O==="function"||O==="asyncfunction")return D=Object.keys(u),E.unorderedObjects&&(D=D.sort()),E.respectType===!1||M(u)||D.splice(0,0,"prototype","__proto__","constructor"),E.excludeKeys&&(D=D.filter(function(z){return!E.excludeKeys(z)})),p("object:"+D.length+":"),w=this,D.forEach(function(z){w.dispatch(z),p(":"),E.excludeValues||w.dispatch(u[z]),p(",")});if(!this["_"+O]){if(E.ignoreUnknown)return p("["+O+"]");throw new Error('Unknown object type "'+O+'"')}this["_"+O](u)},_array:function(u,z){z=z!==void 0?z:E.unorderedArrays!==!1;var D=this;if(p("array:"+u.length+":"),!z||u.length<=1)return u.forEach(function(k){return D.dispatch(k)});var O=[],z=u.map(function(k){var F=new N,X=v.slice();return T(E,F,X).dispatch(k),O=O.concat(X.slice(v.length)),F.read().toString()});return v=v.concat(O),z.sort(),this._array(z,!1)},_date:function(u){return p("date:"+u.toJSON())},_symbol:function(u){return p("symbol:"+u.toString())},_error:function(u){return p("error:"+u.toString())},_boolean:function(u){return p("bool:"+u.toString())},_string:function(u){p("string:"+u.length+":"),p(u.toString())},_function:function(u){p("fn:"),M(u)?this.dispatch("[native]"):this.dispatch(u.toString()),E.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(u.name)),E.respectFunctionProperties&&this._object(u)},_number:function(u){return p("number:"+u.toString())},_xml:function(u){return p("xml:"+u.toString())},_null:function(){return p("Null")},_undefined:function(){return p("Undefined")},_regexp:function(u){return p("regex:"+u.toString())},_uint8array:function(u){return p("uint8array:"),this.dispatch(Array.prototype.slice.call(u))},_uint8clampedarray:function(u){return p("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(u))},_int8array:function(u){return p("int8array:"),this.dispatch(Array.prototype.slice.call(u))},_uint16array:function(u){return p("uint16array:"),this.dispatch(Array.prototype.slice.call(u))},_int16array:function(u){return p("int16array:"),this.dispatch(Array.prototype.slice.call(u))},_uint32array:function(u){return p("uint32array:"),this.dispatch(Array.prototype.slice.call(u))},_int32array:function(u){return p("int32array:"),this.dispatch(Array.prototype.slice.call(u))},_float32array:function(u){return p("float32array:"),this.dispatch(Array.prototype.slice.call(u))},_float64array:function(u){return p("float64array:"),this.dispatch(Array.prototype.slice.call(u))},_arraybuffer:function(u){return p("arraybuffer:"),this.dispatch(new Uint8Array(u))},_url:function(u){return p("url:"+u.toString())},_map:function(u){return p("map:"),u=Array.from(u),this._array(u,E.unorderedSets!==!1)},_set:function(u){return p("set:"),u=Array.from(u),this._array(u,E.unorderedSets!==!1)},_file:function(u){return p("file:"),this.dispatch([u.name,u.size,u.type,u.lastModfied])},_blob:function(){if(E.ignoreUnknown)return p("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return p("domwindow")},_bigint:function(u){return p("bigint:"+u.toString())},_process:function(){return p("process")},_timer:function(){return p("timer")},_pipe:function(){return p("pipe")},_tcp:function(){return p("tcp")},_udp:function(){return p("udp")},_tty:function(){return p("tty")},_statwatcher:function(){return p("statwatcher")},_securecontext:function(){return p("securecontext")},_connection:function(){return p("connection")},_zlib:function(){return p("zlib")},_context:function(){return p("context")},_nodescript:function(){return p("nodescript")},_httpparser:function(){return p("httpparser")},_dataview:function(){return p("dataview")},_signal:function(){return p("signal")},_fsevent:function(){return p("fsevent")},_tlswrap:function(){return p("tlswrap")}}}function N(){return{buf:"",write:function(E){this.buf+=E},end:function(E){this.buf+=E},read:function(){return this.buf}}}r.writeToStream=function(E,A,v){return v===void 0&&(v=A,A={}),T(A=S(E,A),v).dispatch(E)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){(function(x){var b=typeof Uint8Array<"u"?Uint8Array:Array,f=43,h=47,S=48,M=97,T=65,N=45,E=95;function A(v){return v=v.charCodeAt(0),v===f||v===N?62:v===h||v===E?63:v<S?-1:v<S+10?v-S+26+26:v<T+26?v-T:v<M+26?v-M+26:void 0}x.toByteArray=function(v){var p,u;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var w=v.length,w=v.charAt(w-2)==="="?2:v.charAt(w-1)==="="?1:0,D=new b(3*v.length/4-w),O=0<w?v.length-4:v.length,z=0;function k(F){D[z++]=F}for(p=0;p<O;p+=4,0)k((16711680&(u=A(v.charAt(p))<<18|A(v.charAt(p+1))<<12|A(v.charAt(p+2))<<6|A(v.charAt(p+3))))>>16),k((65280&u)>>8),k(255&u);return w==2?k(255&(u=A(v.charAt(p))<<2|A(v.charAt(p+1))>>4)):w==1&&(k((u=A(v.charAt(p))<<10|A(v.charAt(p+1))<<4|A(v.charAt(p+2))>>2)>>8&255),k(255&u)),D},x.fromByteArray=function(v){var p,u,w,D,O=v.length%3,z="";function k(F){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(F)}for(p=0,w=v.length-O;p<w;p+=3)u=(v[p]<<16)+(v[p+1]<<8)+v[p+2],z+=k((D=u)>>18&63)+k(D>>12&63)+k(D>>6&63)+k(63&D);switch(O){case 1:z=(z+=k((u=v[v.length-1])>>2))+k(u<<4&63)+"==";break;case 2:z=(z=(z+=k((u=(v[v.length-2]<<8)+v[v.length-1])>>10))+k(u>>4&63))+k(u<<2&63)+"="}return z}})(r===void 0?this.base64js={}:r)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,r){(function(s,a,f,c,l,d,m,g,_){var x=t("base64-js"),b=t("ieee754");function f(R,I,B){if(!(this instanceof f))return new f(R,I,B);var L,ee,ne,Me,he=typeof R;if(I==="base64"&&he=="string")for(R=(Me=R).trim?Me.trim():Me.replace(/^\s+|\s+$/g,"");R.length%4!=0;)R+="=";if(he=="number")L=j(R);else if(he=="string")L=f.byteLength(R,I);else{if(he!="object")throw new Error("First argument needs to be a number, array or string.");L=j(R.length)}if(f._useTypedArrays?ee=f._augment(new Uint8Array(L)):((ee=this).length=L,ee._isBuffer=!0),f._useTypedArrays&&typeof R.byteLength=="number")ee._set(R);else if(se(Me=R)||f.isBuffer(Me)||Me&&typeof Me=="object"&&typeof Me.length=="number")for(ne=0;ne<L;ne++)f.isBuffer(R)?ee[ne]=R.readUInt8(ne):ee[ne]=R[ne];else if(he=="string")ee.write(R,0,I);else if(he=="number"&&!f._useTypedArrays&&!B)for(ne=0;ne<L;ne++)ee[ne]=0;return ee}function h(R,I,B,L){return f._charsWritten=Ue(function(ee){for(var ne=[],Me=0;Me<ee.length;Me++)ne.push(255&ee.charCodeAt(Me));return ne}(I),R,B,L)}function S(R,I,B,L){return f._charsWritten=Ue(function(ee){for(var ne,Me,he=[],ke=0;ke<ee.length;ke++)Me=ee.charCodeAt(ke),ne=Me>>8,Me=Me%256,he.push(Me),he.push(ne);return he}(I),R,B,L)}function M(R,I,B){var L="";B=Math.min(R.length,B);for(var ee=I;ee<B;ee++)L+=String.fromCharCode(R[ee]);return L}function T(R,I,B,ne){ne||(Q(typeof B=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+1<R.length,"Trying to read beyond buffer length"));var ee,ne=R.length;if(!(ne<=I))return B?(ee=R[I],I+1<ne&&(ee|=R[I+1]<<8)):(ee=R[I]<<8,I+1<ne&&(ee|=R[I+1])),ee}function N(R,I,B,ne){ne||(Q(typeof B=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+3<R.length,"Trying to read beyond buffer length"));var ee,ne=R.length;if(!(ne<=I))return B?(I+2<ne&&(ee=R[I+2]<<16),I+1<ne&&(ee|=R[I+1]<<8),ee|=R[I],I+3<ne&&(ee+=R[I+3]<<24>>>0)):(I+1<ne&&(ee=R[I+1]<<16),I+2<ne&&(ee|=R[I+2]<<8),I+3<ne&&(ee|=R[I+3]),ee+=R[I]<<24>>>0),ee}function E(R,I,B,L){if(L||(Q(typeof B=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+1<R.length,"Trying to read beyond buffer length")),!(R.length<=I))return L=T(R,I,B,!0),32768&L?-1*(65535-L+1):L}function A(R,I,B,L){if(L||(Q(typeof B=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+3<R.length,"Trying to read beyond buffer length")),!(R.length<=I))return L=N(R,I,B,!0),2147483648&L?-1*(4294967295-L+1):L}function v(R,I,B,L){return L||(Q(typeof B=="boolean","missing or invalid endian"),Q(I+3<R.length,"Trying to read beyond buffer length")),b.read(R,I,B,23,4)}function p(R,I,B,L){return L||(Q(typeof B=="boolean","missing or invalid endian"),Q(I+7<R.length,"Trying to read beyond buffer length")),b.read(R,I,B,52,8)}function u(R,I,B,L,ee){if(ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+1<R.length,"trying to write beyond buffer length"),le(I,65535)),ee=R.length,!(ee<=B))for(var ne=0,Me=Math.min(ee-B,2);ne<Me;ne++)R[B+ne]=(I&255<<8*(L?ne:1-ne))>>>8*(L?ne:1-ne)}function w(R,I,B,L,ee){if(ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+3<R.length,"trying to write beyond buffer length"),le(I,4294967295)),ee=R.length,!(ee<=B))for(var ne=0,Me=Math.min(ee-B,4);ne<Me;ne++)R[B+ne]=I>>>8*(L?ne:3-ne)&255}function D(R,I,B,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+1<R.length,"Trying to write beyond buffer length"),xe(I,32767,-32768)),R.length<=B||u(R,0<=I?I:65535+I+1,B,L,ee)}function O(R,I,B,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+3<R.length,"Trying to write beyond buffer length"),xe(I,2147483647,-2147483648)),R.length<=B||w(R,0<=I?I:4294967295+I+1,B,L,ee)}function z(R,I,B,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+3<R.length,"Trying to write beyond buffer length"),me(I,34028234663852886e22,-34028234663852886e22)),R.length<=B||b.write(R,I,B,L,23,4)}function k(R,I,B,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(B!=null,"missing offset"),Q(B+7<R.length,"Trying to write beyond buffer length"),me(I,17976931348623157e292,-17976931348623157e292)),R.length<=B||b.write(R,I,B,L,52,8)}r.Buffer=f,r.SlowBuffer=f,r.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var R=new ArrayBuffer(0),I=new Uint8Array(R);return I.foo=function(){return 42},I.foo()===42&&typeof I.subarray=="function"}catch{return!1}}(),f.isEncoding=function(R){switch(String(R).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.isBuffer=function(R){return!(R==null||!R._isBuffer)},f.byteLength=function(R,I){var B;switch(R+="",I||"utf8"){case"hex":B=R.length/2;break;case"utf8":case"utf-8":B=pe(R).length;break;case"ascii":case"binary":case"raw":B=R.length;break;case"base64":B=Pe(R).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=2*R.length;break;default:throw new Error("Unknown encoding")}return B},f.concat=function(R,I){if(Q(se(R),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),R.length===0)return new f(0);if(R.length===1)return R[0];if(typeof I!="number")for(ee=I=0;ee<R.length;ee++)I+=R[ee].length;for(var B=new f(I),L=0,ee=0;ee<R.length;ee++){var ne=R[ee];ne.copy(B,L),L+=ne.length}return B},f.prototype.write=function(R,I,B,L){isFinite(I)?isFinite(B)||(L=B,B=void 0):(ke=L,L=I,I=B,B=ke),I=Number(I)||0;var ee,ne,Me,he,ke=this.length-I;switch((!B||ke<(B=Number(B)))&&(B=ke),L=String(L||"utf8").toLowerCase()){case"hex":ee=function(Ae,be,U,C){U=Number(U)||0;var W=Ae.length-U;(!C||W<(C=Number(C)))&&(C=W),Q((W=be.length)%2==0,"Invalid hex string"),W/2<C&&(C=W/2);for(var ie=0;ie<C;ie++){var ae=parseInt(be.substr(2*ie,2),16);Q(!isNaN(ae),"Invalid hex string"),Ae[U+ie]=ae}return f._charsWritten=2*ie,ie}(this,R,I,B);break;case"utf8":case"utf-8":ne=this,Me=I,he=B,ee=f._charsWritten=Ue(pe(R),ne,Me,he);break;case"ascii":case"binary":ee=h(this,R,I,B);break;case"base64":ne=this,Me=I,he=B,ee=f._charsWritten=Ue(Pe(R),ne,Me,he);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ee=S(this,R,I,B);break;default:throw new Error("Unknown encoding")}return ee},f.prototype.toString=function(R,I,B){var L,ee,ne,Me,he=this;if(R=String(R||"utf8").toLowerCase(),I=Number(I)||0,(B=B!==void 0?Number(B):he.length)===I)return"";switch(R){case"hex":L=function(ke,Ae,be){var U=ke.length;(!Ae||Ae<0)&&(Ae=0),(!be||be<0||U<be)&&(be=U);for(var C="",W=Ae;W<be;W++)C+=te(ke[W]);return C}(he,I,B);break;case"utf8":case"utf-8":L=function(ke,Ae,be){var U="",C="";be=Math.min(ke.length,be);for(var W=Ae;W<be;W++)ke[W]<=127?(U+=J(C)+String.fromCharCode(ke[W]),C=""):C+="%"+ke[W].toString(16);return U+J(C)}(he,I,B);break;case"ascii":case"binary":L=M(he,I,B);break;case"base64":ee=he,Me=B,L=(ne=I)===0&&Me===ee.length?x.fromByteArray(ee):x.fromByteArray(ee.slice(ne,Me));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=function(ke,Ae,be){for(var U=ke.slice(Ae,be),C="",W=0;W<U.length;W+=2)C+=String.fromCharCode(U[W]+256*U[W+1]);return C}(he,I,B);break;default:throw new Error("Unknown encoding")}return L},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(R,I,B,L){if(I=I||0,(L=L||L===0?L:this.length)!==(B=B||0)&&R.length!==0&&this.length!==0){Q(B<=L,"sourceEnd < sourceStart"),Q(0<=I&&I<R.length,"targetStart out of bounds"),Q(0<=B&&B<this.length,"sourceStart out of bounds"),Q(0<=L&&L<=this.length,"sourceEnd out of bounds"),L>this.length&&(L=this.length);var ee=(L=R.length-I<L-B?R.length-I+B:L)-B;if(ee<100||!f._useTypedArrays)for(var ne=0;ne<ee;ne++)R[ne+I]=this[ne+B];else R._set(this.subarray(B,B+ee),I)}},f.prototype.slice=function(R,I){var B=this.length;if(R=X(R,B,0),I=X(I,B,B),f._useTypedArrays)return f._augment(this.subarray(R,I));for(var L=I-R,ee=new f(L,void 0,!0),ne=0;ne<L;ne++)ee[ne]=this[ne+R];return ee},f.prototype.get=function(R){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(R)},f.prototype.set=function(R,I){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(R,I)},f.prototype.readUInt8=function(R,I){if(I||(Q(R!=null,"missing offset"),Q(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return this[R]},f.prototype.readUInt16LE=function(R,I){return T(this,R,!0,I)},f.prototype.readUInt16BE=function(R,I){return T(this,R,!1,I)},f.prototype.readUInt32LE=function(R,I){return N(this,R,!0,I)},f.prototype.readUInt32BE=function(R,I){return N(this,R,!1,I)},f.prototype.readInt8=function(R,I){if(I||(Q(R!=null,"missing offset"),Q(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return 128&this[R]?-1*(255-this[R]+1):this[R]},f.prototype.readInt16LE=function(R,I){return E(this,R,!0,I)},f.prototype.readInt16BE=function(R,I){return E(this,R,!1,I)},f.prototype.readInt32LE=function(R,I){return A(this,R,!0,I)},f.prototype.readInt32BE=function(R,I){return A(this,R,!1,I)},f.prototype.readFloatLE=function(R,I){return v(this,R,!0,I)},f.prototype.readFloatBE=function(R,I){return v(this,R,!1,I)},f.prototype.readDoubleLE=function(R,I){return p(this,R,!0,I)},f.prototype.readDoubleBE=function(R,I){return p(this,R,!1,I)},f.prototype.writeUInt8=function(R,I,B){B||(Q(R!=null,"missing value"),Q(I!=null,"missing offset"),Q(I<this.length,"trying to write beyond buffer length"),le(R,255)),I>=this.length||(this[I]=R)},f.prototype.writeUInt16LE=function(R,I,B){u(this,R,I,!0,B)},f.prototype.writeUInt16BE=function(R,I,B){u(this,R,I,!1,B)},f.prototype.writeUInt32LE=function(R,I,B){w(this,R,I,!0,B)},f.prototype.writeUInt32BE=function(R,I,B){w(this,R,I,!1,B)},f.prototype.writeInt8=function(R,I,B){B||(Q(R!=null,"missing value"),Q(I!=null,"missing offset"),Q(I<this.length,"Trying to write beyond buffer length"),xe(R,127,-128)),I>=this.length||(0<=R?this.writeUInt8(R,I,B):this.writeUInt8(255+R+1,I,B))},f.prototype.writeInt16LE=function(R,I,B){D(this,R,I,!0,B)},f.prototype.writeInt16BE=function(R,I,B){D(this,R,I,!1,B)},f.prototype.writeInt32LE=function(R,I,B){O(this,R,I,!0,B)},f.prototype.writeInt32BE=function(R,I,B){O(this,R,I,!1,B)},f.prototype.writeFloatLE=function(R,I,B){z(this,R,I,!0,B)},f.prototype.writeFloatBE=function(R,I,B){z(this,R,I,!1,B)},f.prototype.writeDoubleLE=function(R,I,B){k(this,R,I,!0,B)},f.prototype.writeDoubleBE=function(R,I,B){k(this,R,I,!1,B)},f.prototype.fill=function(R,I,B){if(I=I||0,B=B||this.length,Q(typeof(R=typeof(R=R||0)=="string"?R.charCodeAt(0):R)=="number"&&!isNaN(R),"value is not a number"),Q(I<=B,"end < start"),B!==I&&this.length!==0){Q(0<=I&&I<this.length,"start out of bounds"),Q(0<=B&&B<=this.length,"end out of bounds");for(var L=I;L<B;L++)this[L]=R}},f.prototype.inspect=function(){for(var R=[],I=this.length,B=0;B<I;B++)if(R[B]=te(this[B]),B===r.INSPECT_MAX_BYTES){R[B+1]="...";break}return"<Buffer "+R.join(" ")+">"},f.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var R=new Uint8Array(this.length),I=0,B=R.length;I<B;I+=1)R[I]=this[I];return R.buffer};var F=f.prototype;function X(R,I,B){return typeof R!="number"?B:I<=(R=~~R)?I:0<=R||0<=(R+=I)?R:0}function j(R){return(R=~~Math.ceil(+R))<0?0:R}function se(R){return(Array.isArray||function(I){return Object.prototype.toString.call(I)==="[object Array]"})(R)}function te(R){return R<16?"0"+R.toString(16):R.toString(16)}function pe(R){for(var I=[],B=0;B<R.length;B++){var L=R.charCodeAt(B);if(L<=127)I.push(R.charCodeAt(B));else for(var ee=B,ne=(55296<=L&&L<=57343&&B++,encodeURIComponent(R.slice(ee,B+1)).substr(1).split("%")),Me=0;Me<ne.length;Me++)I.push(parseInt(ne[Me],16))}return I}function Pe(R){return x.toByteArray(R)}function Ue(R,I,B,L){for(var ee=0;ee<L&&!(ee+B>=I.length||ee>=R.length);ee++)I[ee+B]=R[ee];return ee}function J(R){try{return decodeURIComponent(R)}catch{return"�"}}function le(R,I){Q(typeof R=="number","cannot write a non-number as a number"),Q(0<=R,"specified a negative value for writing an unsigned value"),Q(R<=I,"value is larger than maximum value for type"),Q(Math.floor(R)===R,"value has a fractional component")}function xe(R,I,B){Q(typeof R=="number","cannot write a non-number as a number"),Q(R<=I,"value larger than maximum allowed value"),Q(B<=R,"value smaller than minimum allowed value"),Q(Math.floor(R)===R,"value has a fractional component")}function me(R,I,B){Q(typeof R=="number","cannot write a non-number as a number"),Q(R<=I,"value larger than maximum allowed value"),Q(B<=R,"value smaller than minimum allowed value")}function Q(R,I){if(!R)throw new Error(I||"Failed assertion")}f._augment=function(R){return R._isBuffer=!0,R._get=R.get,R._set=R.set,R.get=F.get,R.set=F.set,R.write=F.write,R.toString=F.toString,R.toLocaleString=F.toString,R.toJSON=F.toJSON,R.copy=F.copy,R.slice=F.slice,R.readUInt8=F.readUInt8,R.readUInt16LE=F.readUInt16LE,R.readUInt16BE=F.readUInt16BE,R.readUInt32LE=F.readUInt32LE,R.readUInt32BE=F.readUInt32BE,R.readInt8=F.readInt8,R.readInt16LE=F.readInt16LE,R.readInt16BE=F.readInt16BE,R.readInt32LE=F.readInt32LE,R.readInt32BE=F.readInt32BE,R.readFloatLE=F.readFloatLE,R.readFloatBE=F.readFloatBE,R.readDoubleLE=F.readDoubleLE,R.readDoubleBE=F.readDoubleBE,R.writeUInt8=F.writeUInt8,R.writeUInt16LE=F.writeUInt16LE,R.writeUInt16BE=F.writeUInt16BE,R.writeUInt32LE=F.writeUInt32LE,R.writeUInt32BE=F.writeUInt32BE,R.writeInt8=F.writeInt8,R.writeInt16LE=F.writeInt16LE,R.writeInt16BE=F.writeInt16BE,R.writeInt32LE=F.writeInt32LE,R.writeInt32BE=F.writeInt32BE,R.writeFloatLE=F.writeFloatLE,R.writeFloatBE=F.writeFloatBE,R.writeDoubleLE=F.writeDoubleLE,R.writeDoubleBE=F.writeDoubleBE,R.fill=F.fill,R.inspect=F.inspect,R.toArrayBuffer=F.toArrayBuffer,R}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,r){(function(s,a,x,c,l,d,m,g,_){var x=t("buffer").Buffer,b=4,f=new x(b);f.fill(0),n.exports={hash:function(h,S,M,T){for(var N=S(function(u,w){u.length%b!=0&&(D=u.length+(b-u.length%b),u=x.concat([u,f],D));for(var D,O=[],z=w?u.readInt32BE:u.readInt32LE,k=0;k<u.length;k+=b)O.push(z.call(u,k));return O}(h=x.isBuffer(h)?h:new x(h),T),8*h.length),S=T,E=new x(M),A=S?E.writeInt32BE:E.writeInt32LE,v=0;v<N.length;v++)A.call(E,N[v],4*v,!0);return E}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,r){(function(s,a,x,c,l,d,m,g,_){var x=t("buffer").Buffer,b=t("./sha"),f=t("./sha256"),h=t("./rng"),S={sha1:b,sha256:f,md5:t("./md5")},M=64,T=new x(M);function N(u,w){var D=S[u=u||"sha1"],O=[];return D||E("algorithm:",u,"is not yet supported"),{update:function(z){return x.isBuffer(z)||(z=new x(z)),O.push(z),z.length,this},digest:function(z){var k=x.concat(O),k=w?function(F,X,j){x.isBuffer(X)||(X=new x(X)),x.isBuffer(j)||(j=new x(j)),X.length>M?X=F(X):X.length<M&&(X=x.concat([X,T],M));for(var se=new x(M),te=new x(M),pe=0;pe<M;pe++)se[pe]=54^X[pe],te[pe]=92^X[pe];return j=F(x.concat([se,j])),F(x.concat([te,j]))}(D,w,k):D(k);return O=null,z?k.toString(z):k}}}function E(){var u=[].slice.call(arguments).join(" ");throw new Error([u,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}T.fill(0),r.createHash=function(u){return N(u)},r.createHmac=N,r.randomBytes=function(u,w){if(!w||!w.call)return new x(h(u));try{w.call(this,void 0,new x(h(u)))}catch(D){w(D)}};var A,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],p=function(u){r[u]=function(){E("sorry,",u,"is not implemented yet")}};for(A in v)p(v[A])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){var x=t("./helpers");function b(E,A){E[A>>5]|=128<<A%32,E[14+(A+64>>>9<<4)]=A;for(var v=1732584193,p=-271733879,u=-1732584194,w=271733878,D=0;D<E.length;D+=16){var O=v,z=p,k=u,F=w,v=h(v,p,u,w,E[D+0],7,-680876936),w=h(w,v,p,u,E[D+1],12,-389564586),u=h(u,w,v,p,E[D+2],17,606105819),p=h(p,u,w,v,E[D+3],22,-1044525330);v=h(v,p,u,w,E[D+4],7,-176418897),w=h(w,v,p,u,E[D+5],12,1200080426),u=h(u,w,v,p,E[D+6],17,-1473231341),p=h(p,u,w,v,E[D+7],22,-45705983),v=h(v,p,u,w,E[D+8],7,1770035416),w=h(w,v,p,u,E[D+9],12,-1958414417),u=h(u,w,v,p,E[D+10],17,-42063),p=h(p,u,w,v,E[D+11],22,-1990404162),v=h(v,p,u,w,E[D+12],7,1804603682),w=h(w,v,p,u,E[D+13],12,-40341101),u=h(u,w,v,p,E[D+14],17,-1502002290),v=S(v,p=h(p,u,w,v,E[D+15],22,1236535329),u,w,E[D+1],5,-165796510),w=S(w,v,p,u,E[D+6],9,-1069501632),u=S(u,w,v,p,E[D+11],14,643717713),p=S(p,u,w,v,E[D+0],20,-373897302),v=S(v,p,u,w,E[D+5],5,-701558691),w=S(w,v,p,u,E[D+10],9,38016083),u=S(u,w,v,p,E[D+15],14,-660478335),p=S(p,u,w,v,E[D+4],20,-405537848),v=S(v,p,u,w,E[D+9],5,568446438),w=S(w,v,p,u,E[D+14],9,-1019803690),u=S(u,w,v,p,E[D+3],14,-187363961),p=S(p,u,w,v,E[D+8],20,1163531501),v=S(v,p,u,w,E[D+13],5,-1444681467),w=S(w,v,p,u,E[D+2],9,-51403784),u=S(u,w,v,p,E[D+7],14,1735328473),v=M(v,p=S(p,u,w,v,E[D+12],20,-1926607734),u,w,E[D+5],4,-378558),w=M(w,v,p,u,E[D+8],11,-2022574463),u=M(u,w,v,p,E[D+11],16,1839030562),p=M(p,u,w,v,E[D+14],23,-35309556),v=M(v,p,u,w,E[D+1],4,-1530992060),w=M(w,v,p,u,E[D+4],11,1272893353),u=M(u,w,v,p,E[D+7],16,-155497632),p=M(p,u,w,v,E[D+10],23,-1094730640),v=M(v,p,u,w,E[D+13],4,681279174),w=M(w,v,p,u,E[D+0],11,-358537222),u=M(u,w,v,p,E[D+3],16,-722521979),p=M(p,u,w,v,E[D+6],23,76029189),v=M(v,p,u,w,E[D+9],4,-640364487),w=M(w,v,p,u,E[D+12],11,-421815835),u=M(u,w,v,p,E[D+15],16,530742520),v=T(v,p=M(p,u,w,v,E[D+2],23,-995338651),u,w,E[D+0],6,-198630844),w=T(w,v,p,u,E[D+7],10,1126891415),u=T(u,w,v,p,E[D+14],15,-1416354905),p=T(p,u,w,v,E[D+5],21,-57434055),v=T(v,p,u,w,E[D+12],6,1700485571),w=T(w,v,p,u,E[D+3],10,-1894986606),u=T(u,w,v,p,E[D+10],15,-1051523),p=T(p,u,w,v,E[D+1],21,-2054922799),v=T(v,p,u,w,E[D+8],6,1873313359),w=T(w,v,p,u,E[D+15],10,-30611744),u=T(u,w,v,p,E[D+6],15,-1560198380),p=T(p,u,w,v,E[D+13],21,1309151649),v=T(v,p,u,w,E[D+4],6,-145523070),w=T(w,v,p,u,E[D+11],10,-1120210379),u=T(u,w,v,p,E[D+2],15,718787259),p=T(p,u,w,v,E[D+9],21,-343485551),v=N(v,O),p=N(p,z),u=N(u,k),w=N(w,F)}return Array(v,p,u,w)}function f(E,A,v,p,u,w){return N((A=N(N(A,E),N(p,w)))<<u|A>>>32-u,v)}function h(E,A,v,p,u,w,D){return f(A&v|~A&p,E,A,u,w,D)}function S(E,A,v,p,u,w,D){return f(A&p|v&~p,E,A,u,w,D)}function M(E,A,v,p,u,w,D){return f(A^v^p,E,A,u,w,D)}function T(E,A,v,p,u,w,D){return f(v^(A|~p),E,A,u,w,D)}function N(E,A){var v=(65535&E)+(65535&A);return(E>>16)+(A>>16)+(v>>16)<<16|65535&v}n.exports=function(E){return x.hash(E,b,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){n.exports=function(x){for(var b,f=new Array(x),h=0;h<x;h++)!(3&h)&&(b=4294967296*Math.random()),f[h]=b>>>((3&h)<<3)&255;return f}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){var x=t("./helpers");function b(S,M){S[M>>5]|=128<<24-M%32,S[15+(M+64>>9<<4)]=M;for(var T,N,E,A=Array(80),v=1732584193,p=-271733879,u=-1732584194,w=271733878,D=-1009589776,O=0;O<S.length;O+=16){for(var z=v,k=p,F=u,X=w,j=D,se=0;se<80;se++){A[se]=se<16?S[O+se]:h(A[se-3]^A[se-8]^A[se-14]^A[se-16],1);var te=f(f(h(v,5),(te=p,N=u,E=w,(T=se)<20?te&N|~te&E:!(T<40)&&T<60?te&N|te&E|N&E:te^N^E)),f(f(D,A[se]),(T=se)<20?1518500249:T<40?1859775393:T<60?-1894007588:-899497514)),D=w,w=u,u=h(p,30),p=v,v=te}v=f(v,z),p=f(p,k),u=f(u,F),w=f(w,X),D=f(D,j)}return Array(v,p,u,w,D)}function f(S,M){var T=(65535&S)+(65535&M);return(S>>16)+(M>>16)+(T>>16)<<16|65535&T}function h(S,M){return S<<M|S>>>32-M}n.exports=function(S){return x.hash(S,b,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){function x(M,T){var N=(65535&M)+(65535&T);return(M>>16)+(T>>16)+(N>>16)<<16|65535&N}function b(M,T){var N,E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),A=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);M[T>>5]|=128<<24-T%32,M[15+(T+64>>9<<4)]=T;for(var p,u,w=0;w<M.length;w+=16){for(var D=A[0],O=A[1],z=A[2],k=A[3],F=A[4],X=A[5],j=A[6],se=A[7],te=0;te<64;te++)v[te]=te<16?M[te+w]:x(x(x((u=v[te-2],h(u,17)^h(u,19)^S(u,10)),v[te-7]),(u=v[te-15],h(u,7)^h(u,18)^S(u,3))),v[te-16]),N=x(x(x(x(se,h(u=F,6)^h(u,11)^h(u,25)),F&X^~F&j),E[te]),v[te]),p=x(h(p=D,2)^h(p,13)^h(p,22),D&O^D&z^O&z),se=j,j=X,X=F,F=x(k,N),k=z,z=O,O=D,D=x(N,p);A[0]=x(D,A[0]),A[1]=x(O,A[1]),A[2]=x(z,A[2]),A[3]=x(k,A[3]),A[4]=x(F,A[4]),A[5]=x(X,A[5]),A[6]=x(j,A[6]),A[7]=x(se,A[7])}return A}var f=t("./helpers"),h=function(M,T){return M>>>T|M<<32-T},S=function(M,T){return M>>>T};n.exports=function(M){return f.hash(M,b,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){r.read=function(x,b,f,h,w){var M,T,N=8*w-h-1,E=(1<<N)-1,A=E>>1,v=-7,p=f?w-1:0,u=f?-1:1,w=x[b+p];for(p+=u,M=w&(1<<-v)-1,w>>=-v,v+=N;0<v;M=256*M+x[b+p],p+=u,v-=8);for(T=M&(1<<-v)-1,M>>=-v,v+=h;0<v;T=256*T+x[b+p],p+=u,v-=8);if(M===0)M=1-A;else{if(M===E)return T?NaN:1/0*(w?-1:1);T+=Math.pow(2,h),M-=A}return(w?-1:1)*T*Math.pow(2,M-h)},r.write=function(x,b,f,h,S,D){var T,N,E=8*D-S-1,A=(1<<E)-1,v=A>>1,p=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=h?0:D-1,w=h?1:-1,D=b<0||b===0&&1/b<0?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(N=isNaN(b)?1:0,T=A):(T=Math.floor(Math.log(b)/Math.LN2),b*(h=Math.pow(2,-T))<1&&(T--,h*=2),2<=(b+=1<=T+v?p/h:p*Math.pow(2,1-v))*h&&(T++,h/=2),A<=T+v?(N=0,T=A):1<=T+v?(N=(b*h-1)*Math.pow(2,S),T+=v):(N=b*Math.pow(2,v-1)*Math.pow(2,S),T=0));8<=S;x[f+u]=255&N,u+=w,N/=256,S-=8);for(T=T<<S|N,E+=S;0<E;x[f+u]=255&T,u+=w,T/=256,E-=8);x[f+u-w]|=128*D}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,r){(function(s,a,o,c,l,d,m,g,_){var x,b,f;function h(){}(s=n.exports={}).nextTick=(b=typeof window<"u"&&window.setImmediate,f=typeof window<"u"&&window.postMessage&&window.addEventListener,b?function(S){return window.setImmediate(S)}:f?(x=[],window.addEventListener("message",function(S){var M=S.source;M!==window&&M!==null||S.data!=="process-tick"||(S.stopPropagation(),0<x.length&&x.shift()())},!0),function(S){x.push(S),window.postMessage("process-tick","*")}):function(S){setTimeout(S,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.binding=function(S){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(S){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Al);var Em=Al.exports;const bm=Hr(Em);var wl=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Am=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Tl=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],wm=wl,Tm=wm.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Qs=Tl;Qs=Qs.slice().filter(function(i){return!/^(gl\_|texture)/.test(i)});var Cm=Qs.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Rm=zm,Pm=wl,Co=Am,Lm=Tl,Dm=Tm,Im=Cm,Gt=999,Ro=9999,vs=0,xs=1,Po=2,Lo=3,Do=4,Oi=5,Um=6,Nm=7,Fm=8,Io=9,Om=10,Uo=11,Bm=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function zm(i){var e=0,t=0,n=Gt,r,s,a=[],o=[],c=1,l=0,d=0,m=!1,g=!1,_="",x;i=i||{};var b=Lm,f=Pm;i.version==="300 es"&&(b=Im,f=Dm);for(var h={},S={},e=0;e<b.length;e++)h[b[e]]=!0;for(var e=0;e<f.length;e++)S[f[e]]=!0;return function(X){return o=[],X!==null?T(X):N()};function M(X){X.length&&o.push({type:Bm[n],data:X,position:d,line:c,column:l})}function T(X){e=0,X.toString&&(X=X.toString()),_+=X.replace(/\r\n/g,`
`),x=_.length;for(var j;r=_[e],e<x;){switch(j=e,n){case vs:e=u();break;case xs:e=p();break;case Po:e=v();break;case Lo:e=w();break;case Do:e=z();break;case Uo:e=O();break;case Oi:e=k();break;case Ro:e=F();break;case Io:e=A();break;case Gt:e=E();break}if(j!==e)switch(_[j]){case`
`:l=0,++c;break;default:++l;break}}return t+=e,_=_.slice(e),o}function N(X){return a.length&&M(a.join("")),n=Om,M("(eof)"),o}function E(){return a=a.length?[]:a,s==="/"&&r==="*"?(d=t+e-1,n=vs,s=r,e+1):s==="/"&&r==="/"?(d=t+e-1,n=xs,s=r,e+1):r==="#"?(n=Po,d=t+e,e):/\s/.test(r)?(n=Io,d=t+e,e):(m=/\d/.test(r),g=/[^\w_]/.test(r),d=t+e,n=m?Do:g?Lo:Ro,e)}function A(){return/[^\s]/g.test(r)?(M(a.join("")),n=Gt,e):(a.push(r),s=r,e+1)}function v(){return(r==="\r"||r===`
`)&&s!=="\\"?(M(a.join("")),n=Gt,e):(a.push(r),s=r,e+1)}function p(){return v()}function u(){return r==="/"&&s==="*"?(a.push(r),M(a.join("")),n=Gt,e+1):(a.push(r),s=r,e+1)}function w(){if(s==="."&&/\d/.test(r))return n=Oi,e;if(s==="/"&&r==="*")return n=vs,e;if(s==="/"&&r==="/")return n=xs,e;if(r==="."&&a.length){for(;D(a););return n=Oi,e}if(r===";"||r===")"||r==="("){if(a.length)for(;D(a););return M(r),n=Gt,e+1}var X=a.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||X){for(;D(a););return n=Gt,e}return a.push(r),s=r,e+1}function D(X){var j=0,se,te;do{if(se=Co.indexOf(X.slice(0,X.length+j).join("")),te=Co[se],se===-1){if(j--+X.length>0)continue;te=X.slice(0,1).join("")}return M(te),d+=te.length,a=a.slice(te.length),a.length}while(!0)}function O(){return/[^a-fA-F0-9]/.test(r)?(M(a.join("")),n=Gt,e):(a.push(r),s=r,e+1)}function z(){return r==="."||/[eE]/.test(r)?(a.push(r),n=Oi,s=r,e+1):r==="x"&&a.length===1&&a[0]==="0"?(n=Uo,a.push(r),s=r,e+1):/[^\d]/.test(r)?(M(a.join("")),n=Gt,e):(a.push(r),s=r,e+1)}function k(){return r==="f"&&(a.push(r),s=r,e+=1),/[eE]/.test(r)||(r==="-"||r==="+")&&/[eE]/.test(s)?(a.push(r),s=r,e+1):/[^\d]/.test(r)?(M(a.join("")),n=Gt,e):(a.push(r),s=r,e+1)}function F(){if(/[^\d\w_]/.test(r)){var X=a.join("");return S[X]?n=Fm:h[X]?n=Nm:n=Um,M(a.join("")),n=Gt,e}return a.push(r),s=r,e+1}}var Hm=Rm,km=Vm;function Vm(i,e){var t=Hm(e),n=[];return n=n.concat(t(i)),n=n.concat(t(null)),n}const Gm=Hr(km);var Wm=Xm;function Xm(i){for(var e=[],t=0;t<i.length;t++)i[t].type!=="eof"&&e.push(i[t].data);return e.join("")}const No=Hr(Wm);var Ym=jm;function jm(i){var e=null,t=null,n=0,r=0,s=0,a=0,o=0,c=[],l,d,m;for(l=0,d;l<i.length;l++)if(m=i[l],m.data==="{"){if(n&&n++||(d=_(l,wn(")"),wn()),d<0)||(a=d,d=_(d,wn("("),wn(")")),d<0)||(o=d,d=_(d,Bi),d<0)||i[d].type!=="ident"||(t=i[d].data,d=_(d,Bi),d<0))continue;n=1,r=l,e=i[d].data,s=d;var g=_(d,Bi);switch(i[g]&&i[g].data){case"lowp":case"highp":case"mediump":s=g}}else if(n&&m.data==="}"){if(--n)continue;c.push({name:t,type:e,body:[r+1,l],args:[o,a+1],outer:[s,l+1]})}for(l=0;l<i.length;l++)if(m=i[l],m.data===";"){if(d=_(l,wn(")"),wn()),d<0||(a=d,d=_(d,wn("("),wn(")")),d<0)||(o=d,d=_(d,Bi),d<0)||i[d].type!=="ident"||(t=i[d].data,d=_(d,Bi),d<0)||i[d].type==="operator"||i[d].data==="return")continue;e=i[d].data,c.push({name:t,type:e,body:!1,args:[o,a+1],outer:[d,l+1]})}return c.sort(function(x,b){return x.outer[0]-b.outer[0]});function _(x,b,f){for(var h=x-1;h>=0;h--){if(b(i[h]))return h;if(f&&f(i[h]))return-1}return-1}}function wn(i){return function(e){return e.type==="operator"&&(!i||e.data===i)}}function Bi(i){return i.type!=="whitespace"}const qm=Hr(Ym);function $m(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Cl(i){var e=$m(i,"string");return typeof e=="symbol"?e:String(e)}function Ke(i,e,t){return e=Cl(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Fo(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function gi(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fo(Object(t),!0).forEach(function(n){Ke(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Fo(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Km(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function Zm(i,e){if(i==null)return{};var t=Km(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function Jm(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Qm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Cl(n.key),n)}}function eg(i,e,t){return e&&Qm(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Rl(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ea(i,e){return ea=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ea(i,e)}function tg(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&ea(i,e)}function Ur(i){return Ur=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ur(i)}function ng(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ig(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rl(i)}function rg(i){var e=ng();return function(){var n=Ur(i),r;if(e){var s=Ur(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return ig(this,r)}}var Be={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},bt,_i,sg=(bt={},Ke(bt,"".concat(Be.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Be.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),Ke(bt,"".concat(Be.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Be.position,`;
  `)}),Ke(bt,"".concat(Be.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Be.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),Ke(bt,"".concat(Be.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Be.pointSize,`;
    `)}),Ke(bt,"".concat(Be.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Be.diffuseColor,`;
  `)}),Ke(bt,"".concat(Be.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Be.fragColor,`;
  `)}),Ke(bt,"".concat(Be.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Be.emissive,`;
    `)}),Ke(bt,"".concat(Be.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Be.roughness,`;
    `)}),Ke(bt,"".concat(Be.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Be.metalness,`;
    `)}),Ke(bt,"".concat(Be.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Be.ao,`;
    `)}),Ke(bt,"".concat(Be.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Be.bump," - (dot(").concat(Be.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),Ke(bt,"".concat(Be.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Be.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Be.depthAlpha,`;
    `)}),bt),ag=(_i={},Ke(_i,"".concat(Be.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Be.position,`, 1.0 );
  `)}),Ke(_i,"".concat(Be.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Be.position,`;
  `)}),Ke(_i,"".concat(Be.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Be.diffuseColor,`;
  `)}),Ke(_i,"".concat(Be.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Be.fragColor,`;
  `)}),_i),og=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,lg=`
    varying mat4 csm_internal_vModelViewMatrix;
`,cg=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,ug=`
    varying mat4 csm_internal_vModelViewMatrix;
`,hg=`
    
`,At,dg=(At={},Ke(At,"".concat(Be.position),"*"),Ke(At,"".concat(Be.positionRaw),"*"),Ke(At,"".concat(Be.normal),"*"),Ke(At,"".concat(Be.pointSize),["PointsMaterial"]),Ke(At,"".concat(Be.diffuseColor),"*"),Ke(At,"".concat(Be.fragColor),"*"),Ke(At,"".concat(Be.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(At,"".concat(Be.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(At,"".concat(Be.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(At,"".concat(Be.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),Ke(At,"".concat(Be.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),Ke(At,"".concat(Be.depthAlpha),"*"),At),fg=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],pg=function(e,t,n){return e.split(t).join(n)},mg=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},gg=function(e,t){return new RegExp("\\b".concat(mg(t),"\\b")).test(e)};function _g(i){try{new i}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function vg(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",a=typeof r[1].set=="function",o=typeof r[1].value=="function",c=r[0]==="constructor";return(s||a||o)&&!c}).forEach(function(r){if(typeof i[r[0]]=="function"){t||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function xg(i){var e=i.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function Oo(i){return i.replace(/\s/g,"")}function Mg(i,e,t){var n=i.lastIndexOf(e);return n===-1?i:i.substring(0,n)+t+i.substring(n+e.length)}var Pl=function(i){tg(t,i);var e=rg(t);function t(n){var r,s=n.baseMaterial,a=n.fragmentShader,o=n.vertexShader,c=n.uniforms,l=n.patchMap,d=n.cacheKey,m=n.silent,g=Zm(n,fg);Jm(this,t);var _;if(_g(s)?_=new s(g):(_=s,Object.assign(_,g)),_.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=e.call(this),vg(Rl(r),_,m),r.__csm={patchMap:l||{},fragmentShader:a||"",vertexShader:o||"",cacheKey:d,baseMaterial:s,instanceID:il.generateUUID(),type:_.type,isAlreadyExtended:!xg(_.onBeforeCompile),cacheHash:"",silent:m},r.uniforms=gi(gi({},r.uniforms||{}),c||{});{var x=r.__csm,b=x.fragmentShader,f=x.vertexShader,h=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(b,f,h)}return r}return eg(t,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,a=s.fragmentShader,o=s.vertexShader,c=this.uniforms,l=this.getCacheHash();this.__csm.cacheHash=l,this.generateMaterial(a,o,c)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,a=r.vertexShader,o=this.uniforms,c=Object.values(o).reduce(function(d,m){var g=m.value;return d+JSON.stringify(g)},""),l=Oo(s)+Oo(a)+c;return l.trim().length>0?bm(l):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,a){var o=this,c=this.parseShader(r),l=this.parseShader(s);this.uniforms=a||{},this.customProgramCacheKey=function(){return o.__csm.cacheHash};var d=function(_){try{if(c){var x=o.patchShader(c,_.fragmentShader,!0);_.fragmentShader=o.getMaterialDefine()+x}if(l){var b=o.patchShader(l,_.vertexShader);_.vertexShader=`#define IS_VERTEX;
`+b,_.vertexShader=o.getMaterialDefine()+_.vertexShader}_.uniforms=gi(gi({},_.uniforms),o.uniforms),o.uniforms=_.uniforms}catch(f){console.error(f)}};if(this.__csm.isAlreadyExtended){var m=this.onBeforeCompile;this.onBeforeCompile=function(g,_){m(g,_),d(g)}}else this.onBeforeCompile=d;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,a){var o=this,c=s,l=gi(gi({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(l).forEach(function(g){Object.keys(l[g]).forEach(function(_){var x=dg[g],b=o.__csm.type;if(g==="*"||gg(r.main,g))if(!x||Array.isArray(x)&&x.includes(b)||x==="*")c=pg(c,_,l[g][_]);else throw new Error("CSM: ".concat(g," is not available in ").concat(b,". Shader cannot compile."))})}),c=c.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(a?ug:lg,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(og,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(a?hg:cg,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var d=this.__csm.isAlreadyExtended,m=c.includes("// CSM_END");return d&&m?c=Mg(c,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):c=c.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),c=r.defines+c,c}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),a=Gm(s),o=qm(a),c=o.map(function(m){return m.name}).indexOf("main"),l=No(a.slice(0,c>=0?o[c].outer[0]:void 0)),d=c>=0?this.getShaderFromIndex(a,o[c].body):"";return{defines:"",header:l,main:d}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return ag;default:return sg}}},{key:"getShaderFromIndex",value:function(r,s){return No(r.slice(s[0],s[1]))}}]),t}(Pi);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Zt{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Zt.nextNameID=Zt.nextNameID||0,this.$name.id=`lil-gui-name-${++Zt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Sg extends Zt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ta(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const yg={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ta,toHexString:ta},Wi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Eg={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Wi.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Wi.toHexString(r)}},bg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Wi.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Wi.toHexString(r)}},Ag=[yg,Wi,Eg,bg];function wg(i){return Ag.find(e=>e.match(i))}class Tg extends Zt{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=wg(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ta(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ms extends Zt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Cg extends Zt{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+S),this.$input.value=this.getValue())},r=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},s=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let a=!1,o,c,l,d,m;const g=5,_=S=>{o=S.clientX,c=l=S.clientY,a=!0,d=this.getValue(),m=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",b)},x=S=>{if(a){const M=S.clientX-o,T=S.clientY-c;Math.abs(T)>g?(S.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>g&&b()}if(!a){const M=S.clientY-l;m-=M*this._step*this._arrowKeyMultiplier(S),d+m>this._max?m=this._max-d:d+m<this._min&&(m=this._min-d),this._snapClampSetValue(d+m)}l=S.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",b)},f=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,S,M,T,N)=>(h-S)/(M-S)*(N-T)+T,t=h=>{const S=this.$slider.getBoundingClientRect();let M=e(h,S.left,S.right,this._min,this._max);this._snapClampSetValue(M)},n=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=h=>{t(h.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,c;const l=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),a=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(o=h.touches[0].clientX,c=h.touches[0].clientY,a=!0):l(h),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",g))},m=h=>{if(a){const S=h.touches[0].clientX-o,M=h.touches[0].clientY-c;Math.abs(S)>Math.abs(M)?l(h):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g))}else h.preventDefault(),t(h.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g)},_=this._callOnFinishChange.bind(this),x=400;let b;const f=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const M=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(_,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Rg extends Zt{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Pg extends Zt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Lg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Dg(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Bo=!1;class _a{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Bo&&o&&(Dg(Lg),Bo=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new Rg(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Cg(this,e,t,n,r,s);case"boolean":return new Sg(this,e,t);case"string":return new Pg(this,e,t);case"function":return new Ms(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Tg(this,e,t,n)}addFolder(e){const t=new _a({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ms||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ms)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Ll=`attribute vec4 tangent;

uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)
{
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v)
{
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getWobble(vec3 position)
{
    vec3 warpedPosition = position;
    warpedPosition += simplexNoise4d(vec4(
        position,
        uTime * uTimeFrequency
    ));

    float wobble = simplexNoise4d(vec4(
        position * uPositionFrequency, 
        uTime * uTimeFrequency         
    )) * uStrength;
  
    wobble += simplexNoise4d(vec4(
        warpedPosition * uPositionFrequency*2.0, 
        uTime * uTimeFrequency         
    )) * uStrength*0.5;

    return pow(abs(wobble), 2.0) * sign(wobble)* -1.0;
}

void main()
{
  vec3 originalPosition = csm_Position;
  vec3 biTangent = cross(normal, tangent.xyz);

  
  float shift = 0.01;
  vec3 positionA = csm_Position + tangent.xyz * shift;
  vec3 positionB = csm_Position + biTangent * shift;

  
  float elevation = getWobble(csm_Position);
  csm_Position += elevation * normal;
  positionA += getWobble(positionA)*normal;
  positionB += getWobble(positionB)*normal;

  
  vec3 toA = normalize(positionA - csm_Position);
  vec3 toB = normalize(positionB - csm_Position);
  csm_Normal = normalize(cross(toA, toB));

  
  vElevation = elevation;
  vPosition = csm_Position;
  vSurfaceNormal = csm_Normal;

}`,Dl=`uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)
{
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v)
{
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

void main() 
{
  
  vec3 color = vec3(1.0);

  
  float surfaceWaterMix = smoothstep(-0.2, -0.1, vElevation);
  color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);

  
  float sandMix = step(-0.1, vElevation);
  color = mix(color, uColorSand, sandMix);

  
  float grassMix = step(-0.06, vElevation);
  color = mix(color, uColorGrass, grassMix);

  
  float rockMixOn = step(-0.01, vElevation);
  vec3 normalizedPosition = normalize(vPosition);
  float verticalness = 1.0 - abs(dot(vSurfaceNormal, normalizedPosition));
  float rockThreshold = 0.2;
  float rockMix = smoothstep(rockThreshold, rockThreshold + 0.1, verticalness);
  color = mix(color, uColorRock, rockMix*(rockMixOn));

  
  float snowThreshold = 0.35;
  snowThreshold += simplexNoise4d(vec4(vPosition*15.5, 0.0))*0.1;
  float snowMix = step(snowThreshold, vElevation);
  color = mix(color, uColorSnow, snowMix);

   csm_DiffuseColor = vec4(color, 1.0);
}
}`;function Ig(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let a=0;const o=Object.keys(i.attributes),c={},l={},d=[],m=["getX","getY","getZ","getW"],g=["setX","setY","setZ","setW"];for(let S=0,M=o.length;S<M;S++){const T=o[S],N=i.attributes[T];c[T]=new N.constructor(new N.array.constructor(N.count*N.itemSize),N.itemSize,N.normalized);const E=i.morphAttributes[T];E&&(l[T]||(l[T]=[]),E.forEach((A,v)=>{const p=new A.array.constructor(A.count*A.itemSize);l[T][v]=new A.constructor(p,A.itemSize,A.normalized)}))}const _=e*.5,x=Math.log10(1/e),b=Math.pow(10,x),f=_*b;for(let S=0;S<s;S++){const M=n?n.getX(S):S;let T="";for(let N=0,E=o.length;N<E;N++){const A=o[N],v=i.getAttribute(A),p=v.itemSize;for(let u=0;u<p;u++)T+=`${~~(v[m[u]](M)*b+f)},`}if(T in t)d.push(t[T]);else{for(let N=0,E=o.length;N<E;N++){const A=o[N],v=i.getAttribute(A),p=i.morphAttributes[A],u=v.itemSize,w=c[A],D=l[A];for(let O=0;O<u;O++){const z=m[O],k=g[O];if(w[k](a,v[z](M)),p)for(let F=0,X=p.length;F<X;F++)D[F][k](a,p[F][z](M))}}t[T]=a,d.push(a),a++}}const h=i.clone();for(const S in i.attributes){const M=c[S];if(h.setAttribute(S,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),S in l)for(let T=0;T<l[S].length;T++){const N=l[S][T];h.morphAttributes[S][T]=new N.constructor(N.array.slice(0,a*N.itemSize),N.itemSize,N.normalized)}}return h.setIndex(d),h}const _n=new _a({width:325}),et={},Il=document.querySelector("canvas.webgl"),Xn=new om,Ug=new ym;et.colorWaterDeep="#0b75a2";et.colorWaterSurface="#97cff2";et.colorSand="#cec5a6";et.colorGrass="#8abd56";et.colorSnow="#ffffff";et.colorRock="#868574";const Bt={uTime:new Nt(0),uPositionFrequency:new Nt(.28),uTimeFrequency:new Nt(.02),uStrength:new Nt(.7),uColorWaterDeep:new Nt(new We(et.colorWaterDeep)),uColorWaterSurface:new Nt(new We(et.colorWaterSurface)),uColorSand:new Nt(new We(et.colorSand)),uColorGrass:new Nt(new We(et.colorGrass)),uColorSnow:new Nt(new We(et.colorSnow)),uColorRock:new Nt(new We(et.colorRock))};_n.add(Bt.uPositionFrequency,"value",0,2,.001).name("uPositionFrequency");_n.add(Bt.uTimeFrequency,"value",0,2,.001).name("uTimeFrequency");_n.add(Bt.uStrength,"value",0,2,.001).name("uStrength");_n.addColor(et,"colorWaterDeep").onChange(()=>Bt.uColorWaterDeep.value.set(et.colorWaterDeep));_n.addColor(et,"colorWaterSurface").onChange(()=>Bt.uColorWaterSurface.value.set(et.colorWaterSurface));_n.addColor(et,"colorSand").onChange(()=>Bt.uColorSand.value.set(et.colorSand));_n.addColor(et,"colorGrass").onChange(()=>Bt.uColorGrass.value.set(et.colorGrass));_n.addColor(et,"colorSnow").onChange(()=>Bt.uColorSnow.value.set(et.colorSnow));_n.addColor(et,"colorRock").onChange(()=>Bt.uColorRock.value.set(et.colorRock));Ug.load("/spruit_sunrise.hdr",i=>{i.mapping=Cr,Xn.background=i,Xn.backgroundBlurriness=.5,Xn.environment=i});const Ng=new Pl({baseMaterial:cm,vertexShader:Ll,fragmentShader:Dl,uniforms:Bt,silent:!0,metalness:0,roughness:.5,color:"#85d534"}),Fg=new Pl({baseMaterial:bl,vertexShader:Ll,fragmentShader:Dl,uniforms:Bt,silent:!0,depthPacking:el});let Nr=new ma(2.5,250);Nr=Ig(Nr);Nr.computeTangents();const Ul=new qt(Nr,Ng);Ul.CustomShaderMaterial=Fg;Xn.add(Ul);const Qt=new vm("#ffffff",2);Qt.position.set(6.25,3,4);Qt.castShadow=!0;Qt.shadow.mapSize.set(1024,1024);Qt.shadow.camera.near=.1;Qt.shadow.camera.far=30;Qt.shadow.camera.top=8;Qt.shadow.camera.right=8;Qt.shadow.camera.bottom=-8;Qt.shadow.camera.left=-8;Xn.add(Qt);const Dt={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{Dt.width=window.innerWidth,Dt.height=window.innerHeight,Dt.pixelRatio=Math.min(window.devicePixelRatio,2),Ci.aspect=Dt.width/Dt.height,Ci.updateProjectionMatrix(),mn.setSize(Dt.width,Dt.height),mn.setPixelRatio(Dt.pixelRatio)});const Ci=new Ft(35,Dt.width/Dt.height,.1,100);Ci.position.set(-10,6,-2);Xn.add(Ci);const Nl=new Sm(Ci,Il);Nl.enableDamping=!0;const mn=new am({canvas:Il,antialias:!0});mn.shadowMap.enabled=!0;mn.shadowMap.type=Ho;mn.toneMapping=Vo;mn.toneMappingExposure=1;mn.setSize(Dt.width,Dt.height);mn.setPixelRatio(Dt.pixelRatio);const Og=new xm,Fl=()=>{const i=Og.getElapsedTime();Bt.uTime.value=i,Nl.update(),mn.render(Xn,Ci),window.requestAnimationFrame(Fl)};Fl();
//# sourceMappingURL=index-SdwHe0E5.js.map
