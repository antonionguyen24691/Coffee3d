import{$ as e,$n as t,An as n,Ar as r,B as i,Bn as a,Br as o,C as s,Cn as c,Cr as l,D as u,Dn as d,Dr as f,E as p,En as m,Er as h,F as g,Fn as _,Fr as v,G as y,Gn as b,Gr as x,Gt as S,H as C,Hn as w,Hr as T,I as E,In as D,Ir as O,J as k,Jn as A,Jr as j,K as M,Kn as ee,Kr as N,Kt as te,L as ne,Ln as P,Lr as re,M as ie,Mn as ae,Mr as F,N as I,Nn as oe,Nr as se,O as L,On as ce,Or as le,Pn as R,Pr as ue,Q as de,Qn as fe,R as pe,Rn as z,Rr as me,S as he,Sn as ge,Sr as _e,T as ve,Tn as B,Tr as ye,U as V,Un as be,Ur as xe,V as Se,Vn as Ce,Vr as we,W as Te,Wn as Ee,Wr as De,Wt as Oe,X as H,Xn as ke,Xt as U,Y as Ae,Yn as W,Yt as je,Z as Me,Zn as G,Zt as K,_ as Ne,_n as Pe,_r as Fe,a as Ie,an as Le,ar as Re,at as ze,b as Be,br as Ve,c as He,cn as Ue,cr as We,d as Ge,dn as Ke,dr as qe,er as Je,et as Ye,f as q,fn as Xe,fr as Ze,g as Qe,gn as $e,gr as et,h as tt,hn as nt,hr as rt,i as it,in as at,ir as ot,it as st,j as ct,jn as lt,jr as ut,k as dt,kn as ft,kr as pt,ln as mt,lr as ht,lt as gt,m as _t,mn as vt,mr as yt,mt as bt,nn as xt,nr as St,nt as Ct,o as wt,or as Tt,ot as Et,p as Dt,pn as Ot,pr as kt,pt as At,q as jt,qn as Mt,qr as Nt,qt as Pt,r as Ft,rn as It,rr as Lt,rt as Rt,s as zt,sn as Bt,sr as Vt,st as Ht,t as Ut,tr as Wt,tt as Gt,u as Kt,un as qt,ur as Jt,v as Yt,vr as Xt,w as Zt,wn as Qt,wr as $t,x as en,xn as tn,xr as nn,y as rn,yn as an,yr as on,z as sn,zn as cn,zr as ln}from"./export-B-SGxvLc.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function un(e){let t={};for(let[n,r]of Object.entries(e))n!==`detail`&&JSON.stringify(r)!==JSON.stringify(ot[n])&&(t[n]=r);return t}var dn=e=>{let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)},fn=e=>{let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))};function pn(e){return dn(x(j(JSON.stringify(un(e))),{level:9}))}function mn(e,t){try{if(e.length>8e3)return null;let n=JSON.parse(Nt(N(fn(e))));return{...ht({...ot,...n}),detail:t}}catch{return null}}function hn(e){return`${location.origin}${location.pathname}#c=${pn(e)}`}async function gn(e,t,n){let r=1200,i=document.createElement(`canvas`);i.width=r,i.height=675;let a=i.getContext(`2d`);a.fillStyle=`#0f1116`,a.fillRect(0,0,r,675);let o=a.createRadialGradient(330,300,40,330,300,520);o.addColorStop(0,`rgba(91,140,255,0.32)`),o.addColorStop(1,`rgba(91,140,255,0)`),a.fillStyle=o,a.fillRect(0,0,r,675);let s=t??{x:0,y:0,w:e.width,h:e.height},c=560/615;if(s.w/s.h<c){let t=Math.min(e.width,s.h*c);s={...s,x:Math.min(Math.max(0,s.x+s.w/2-t/2),e.width-t),w:t}}else{let t=Math.min(e.height,s.w/c);s={...s,y:Math.min(Math.max(0,s.y+s.h/2-t/2),e.height-t),h:t}}let l=Math.min(560/s.w,615/s.h),u=s.w*l,d=s.h*l,f=50+(560-u)/2,p=30+(615-d)/2;a.save(),a.beginPath(),a.roundRect(40,20,580,635,28),a.clip(),a.fillStyle=`#1b2130`,a.fillRect(40,20,580,635),a.drawImage(e,s.x,s.y,s.w,s.h,f,p,u,d),a.restore(),a.strokeStyle=`#2b3446`,a.lineWidth=2,a.beginPath(),a.roundRect(40,20,580,635,28),a.stroke();let m=(e,t)=>`${e} ${t}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;a.fillStyle=`#9db9ff`,a.font=m(700,20),a.fillText(`MADE WITH ARA 3D GEN`,660,150),a.fillStyle=`#ffffff`,a.font=m(800,58);let h=(n.trim()||`My character`).split(/\s+/),g=[],_=``;for(let e of h){let t=_?`${_} ${e}`:e;a.measureText(t).width>480&&_?(g.push(_),_=e):_=t}g.push(_),g.slice(0,3).forEach((e,t)=>a.fillText(e,660,225+t*66));let v=225+Math.min(3,g.length)*66+10;return a.fillStyle=`#c9d3e6`,a.font=m(500,26),a.fillText(`Realistic · rigged · animated`,660,v),a.fillText(`Free and open source`,660,v+38),a.fillStyle=`#5b8cff`,a.beginPath(),a.roundRect(660,525,330,64,32),a.fill(),a.fillStyle=`#ffffff`,a.font=m(700,26),a.fillText(`Create yours free →`,690,566),a.fillStyle=`#8b93a1`,a.font=m(500,20),a.fillText(location.host||`Ara 3D Gen`,660,625),new Promise((e,t)=>i.toBlob(n=>n?e(n):t(Error(`could not render image`)),`image/png`))}var _n=e=>`I just created "${e.trim()||`my character`}" on Ara 3D Gen 🎮 Make your own realistic, rigged 3D character for free. #Ara3DGen #gamedev`,vn=encodeURIComponent,yn=[{id:`x`,label:`X`,url:(e,t)=>`https://x.com/intent/post?text=${vn(e)}&url=${vn(t)}`},{id:`facebook`,label:`Facebook`,url:(e,t)=>`https://www.facebook.com/sharer/sharer.php?u=${vn(t)}`},{id:`linkedin`,label:`LinkedIn`,url:(e,t)=>`https://www.linkedin.com/sharing/share-offsite/?url=${vn(t)}`},{id:`whatsapp`,label:`WhatsApp`,url:(e,t)=>`https://wa.me/?text=${vn(`${e} ${t}`)}`},{id:`reddit`,label:`Reddit`,url:(e,t)=>`https://www.reddit.com/submit?url=${vn(t)}&title=${vn(e)}`},{id:`telegram`,label:`Telegram`,url:(e,t)=>`https://t.me/share/url?url=${vn(t)}&text=${vn(e)}`}],J=e=>document.querySelector(e);function Y(e,t={},...n){let r=document.createElement(e);return Object.assign(r,t),r.append(...n),r}var bn=[`bind`,`idle`,`walk`,`run`];function xn(e){let{store:t,viewer:n}=e,r=J(`#anim-bar`),i=Y(`div`,{className:`anim-progress`},Y(`div`)),a=`idle`,s=new Map,c=e=>{a=e,n.play(e===`bind`?null:o.get(e)??null),s.forEach((t,n)=>t.classList.toggle(`on`,n===e));let r=!bn.includes(e);p.classList.toggle(`on`,r),f.textContent=r?o.get(e).name:`All animations`,m.sync(),t.emit(`clip`,e)};for(let e of bn){let t=Y(`button`,{textContent:e===`bind`?`Bind pose`:o.get(e).name});t.addEventListener(`click`,()=>c(e)),s.set(e,t),r.append(t)}let l=e=>{let t=ln.findIndex(e=>e.id===a);c(ln[(t+e+ln.length)%ln.length].id)},u=Y(`button`,{className:`anim-step`,textContent:`‹`,title:`Previous animation`}),d=Y(`button`,{className:`anim-step`,textContent:`›`,title:`Next animation`});u.addEventListener(`click`,()=>l(-1)),d.addEventListener(`click`,()=>l(1));let f=Y(`span`,{textContent:`All animations`}),p=Y(`button`,{className:`anim-browse`,title:`Browse all ${ln.length} animations`},f,Y(`span`,{className:`caret`,textContent:`▾`}));r.append(u,p,d);let m=Sn(r,p,()=>a,c),h=Y(`input`,{type:`checkbox`});h.addEventListener(`change`,()=>t.setExport({rootMotion:h.checked}));let g=Y(`label`,{className:`acc rm`,title:`Locomotion clips travel forward / sideways (also used for export)`},h,`Root motion`),_=Y(`select`,{title:`Playback speed`});for(let e of[`0.25`,`0.5`,`1`,`1.5`])_.append(new Option(`${e}×`,e));_.value=`1`,_.addEventListener(`change`,()=>n.speed=Number(_.value)),r.append(g,_,i),n.onTick=(e,t)=>{i.firstChild.style.width=e?`${t/e.duration*100}%`:`0%`};let v=()=>h.checked=t.exportSettings.rootMotion;return v(),t.on(`export`,v),t.on(`character`,e=>{r.style.display=e.rig?``:`none`,e.rig&&!n.playing&&a!==`bind`&&c(a)}),{playClip:c,setActive:e=>a=e}}function Sn(e,t,n,i){let a=Y(`div`,{id:`anim-pop`,role:`dialog`,ariaLabel:`Animations`});a.setAttribute(`aria-hidden`,`true`);let o=Y(`input`,{type:`search`,placeholder:`Search ${ln.length} animations…`,className:`anim-search`}),s=Y(`button`,{className:`anim-close`,textContent:`×`,title:`Close`}),c=Y(`div`,{className:`anim-tabs`,role:`tablist`}),l=Y(`div`,{className:`anim-grid`}),u=[...new Set(ln.map(e=>e.category))],d=`All`,f=new Map;for(let e of[`All`,...u]){let t=e===`All`?ln.length:ln.filter(t=>t.category===e).length,n=Y(`button`,{className:`anim-tab`,role:`tab`},e,Y(`span`,{className:`n`,textContent:String(t)}));n.addEventListener(`click`,()=>{d=e,m()}),f.set(e,n),c.append(n)}let p=e=>{let t=Y(`button`,{className:`anim-clip`,title:`${e.name} · ${e.duration.toFixed(1)} s${e.loop?`, loops`:``}`},Y(`span`,{textContent:e.name}),e.loop?Y(`span`,{className:`loop`,textContent:`↻`,title:`Loops`}):``);return t.dataset.id=e.id,t.classList.toggle(`on`,e.id===n()),t.addEventListener(`click`,()=>i(e.id)),t};function m(){f.forEach((e,t)=>{e.classList.toggle(`on`,t===d),e.setAttribute(`aria-selected`,String(t===d))});let e=o.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||t.category.toLowerCase().includes(e)||t.id.includes(e)||(r[le[t.id]]??``).toLowerCase().includes(e);l.replaceChildren();let n=e||d!==`All`?[[e?`Results`:d,ln.filter(n=>(e||n.category===d)&&t(n))]]:u.map(e=>[e,ln.filter(t=>t.category===e)]);for(let[e,t]of n)if(t.length){n.length>1&&l.append(Y(`div`,{className:`anim-group`,textContent:e}));for(let e of t)l.append(p(e))}l.childElementCount||l.append(Y(`div`,{className:`hint`,textContent:`No animations match.`}))}o.addEventListener(`input`,()=>m()),o.addEventListener(`keydown`,e=>{e.key===`Enter`&&l.querySelector(`.anim-clip`)?.click(),e.key===`Escape`&&g(!1)});let h=()=>a.classList.contains(`open`),g=(e=!h())=>{a.classList.toggle(`open`,e),a.setAttribute(`aria-hidden`,String(!e)),t.setAttribute(`aria-expanded`,String(e)),e&&(m(),o.focus({preventScroll:!0}),l.querySelector(`.anim-clip.on`)?.scrollIntoView({block:`nearest`}))};return t.addEventListener(`click`,()=>g()),s.addEventListener(`click`,()=>g(!1)),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&h()&&g(!1)}),a.append(Y(`div`,{className:`anim-pop-head`},Y(`span`,{className:`anim-pop-title`,textContent:`Animations`}),s),o,c,l),e.after(a),{sync:()=>l.querySelectorAll(`.anim-clip`).forEach(e=>e.classList.toggle(`on`,e.dataset.id===n()))}}function Cn(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function wn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new m},probesMax:{value:new m},probesResolution:{value:new m}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Tn={basic:{uniforms:z([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:z([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:z([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:z([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:z([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new q(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:z([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:z([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:z([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:z([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:z([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:z([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:z([Z.common,Z.displacementmap,{referencePosition:{value:new m},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:z([Z.lights,Z.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Tn.physical={uniforms:z([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var En={r:0,b:0,g:0},Dn=new Te,On=new V;On.set(-1,0,0,0,1,0,0,0,1);function kn(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new y(new wt(1,1,1),new Le({name:`BackgroundCubeMaterial`,uniforms:lt(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(On),l.material.toneMapped=Dt.getTransfer(i.colorSpace)!==It,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new y(new ze(2,2),new Le({name:`BackgroundMaterial`,uniforms:lt(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(i.colorSpace)!==It,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(En,D(e)),n.buffers.color.setClear(En.r,En.g,En.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function An(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function jn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Mn(e,t,n,r){let i;function o(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(a(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&a(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Nn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new st,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Pn=4,Fn=6,In=20,Ln=256,Rn=new Ct,zn=new q,Bn=null,Vn=0,Hn=0,Un=!1,Wn=new m,Gn=new m,Kn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wn}=i;Bn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),Hn=this._renderer.getActiveMipmapLevel(),Un=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$n(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bn,Vn,Hn),this._renderer.xr.enabled=Un,e.scissorTest=!1,Yn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),Hn=this._renderer.getActiveMipmapLevel(),Un=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:E,minFilter:E,generateMipmaps:!1,type:ie,format:At,colorSpace:sn,depthBuffer:!1},r=Jn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qn(r)),this._blurMaterial=Zn(r,e,t),this._ggxMaterial=Xn(r,e,t)}return r}_compileMaterial(e){let t=new y(new He,e);this._renderer.compile(t,Rn)}_sceneToCubeUV(e,t,n,r,i){let a=new Rt(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new y(new wt,new M({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(zn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Yn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$n()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Rn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Pn?n-d+Pn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Yn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Rn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Yn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Rn)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Yn(t,3*l*(r>this._lodMax-Pn?r-this._lodMax+Pn:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Rn)}};function qn(e){let t=[],n=[],r=e,i=e-Pn+1+Fn;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Gn.set(1,r,n):e===1?Gn.set(-n,1,-r):e===2?Gn.set(-n,r,1):e===3?Gn.set(-1,r,-n):e===4?Gn.set(-n,-1,r):Gn.set(n,r,-1),Gn.toArray(l,(e*6+t)*3)}}let u=new He;u.setAttribute(`position`,new zt(c,3)),u.setAttribute(`outputDirection`,new zt(l,3)),n.push(new y(u,null)),r>Pn&&r--}return{lodMeshes:n,sizeLods:t}}function Jn(e,t,n){let r=new ft(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xn(e,t,n){return new Le({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:er(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zn(e,t,n){return new Le({name:`SphericalGaussianBlur`,defines:{SAMPLES:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:er(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qn(){return new Le({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:er(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $n(){return new Le({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function er(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tr=class extends ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ne(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),i=new Le({name:`CubemapFromEquirect`,uniforms:lt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new y(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=E),new tt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function nr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new tr(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Kn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Kn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function rr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ce(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ir(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?nt:vt)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ar(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function or(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function sr(e,t,n){let r=new WeakMap,i=new d;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=L,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var lr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ur(e,t,n,r,i,a){let o=new ft(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new He;l.setAttribute(`position`,new u([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new u([0,2,0,0,2,0],2));let d=new te({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new y(l,d),p=new Ct(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new ft(t,n,{type:ie,depthBuffer:!1,stencilBuffer:!1}),c=new ft(t,n,{type:ie,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<b.length;e++){let r=b[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Dt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=lr[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var dr=new Xe,fr=new s(1,1),pr=new rn,mr=new Yt,hr=new Ne,gr=[],_r=[],vr=new Float32Array(16),yr=new Float32Array(9),br=new Float32Array(4);function xr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gr[i];if(a===void 0&&(a=new Float32Array(i),gr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Sr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wr(e,t){let n=_r[t];n===void 0&&(n=new Int32Array(t),_r[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Tr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Er(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sr(n,t))return;e.uniform2fv(this.addr,t),Cr(n,t)}}function Dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sr(n,t))return;e.uniform3fv(this.addr,t),Cr(n,t)}}function Or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sr(n,t))return;e.uniform4fv(this.addr,t),Cr(n,t)}}function kr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cr(n,t)}else{if(Sr(n,r))return;br.set(r),e.uniformMatrix2fv(this.addr,!1,br),Cr(n,r)}}function Ar(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cr(n,t)}else{if(Sr(n,r))return;yr.set(r),e.uniformMatrix3fv(this.addr,!1,yr),Cr(n,r)}}function jr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cr(n,t)}else{if(Sr(n,r))return;vr.set(r),e.uniformMatrix4fv(this.addr,!1,vr),Cr(n,r)}}function Mr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sr(n,t))return;e.uniform2iv(this.addr,t),Cr(n,t)}}function Pr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sr(n,t))return;e.uniform3iv(this.addr,t),Cr(n,t)}}function Fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sr(n,t))return;e.uniform4iv(this.addr,t),Cr(n,t)}}function Ir(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sr(n,t))return;e.uniform2uiv(this.addr,t),Cr(n,t)}}function Rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sr(n,t))return;e.uniform3uiv(this.addr,t),Cr(n,t)}}function zr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sr(n,t))return;e.uniform4uiv(this.addr,t),Cr(n,t)}}function Br(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fr.compareFunction=n.isReversedDepthBuffer()?518:515,a=fr):a=dr,n.setTexture2D(t||a,i)}function Vr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mr,i)}function Hr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||hr,i)}function Ur(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pr,i)}function Wr(e){switch(e){case 5126:return Tr;case 35664:return Er;case 35665:return Dr;case 35666:return Or;case 35674:return kr;case 35675:return Ar;case 35676:return jr;case 5124:case 35670:return Mr;case 35667:case 35671:return Nr;case 35668:case 35672:return Pr;case 35669:case 35673:return Fr;case 5125:return Ir;case 36294:return Lr;case 36295:return Rr;case 36296:return zr;case 35678:case 36198:case 36298:case 36306:case 35682:return Br;case 35679:case 36299:case 36307:return Vr;case 35680:case 36300:case 36308:case 36293:return Hr;case 36289:case 36303:case 36311:case 36292:return Ur}}function Gr(e,t){e.uniform1fv(this.addr,t)}function Kr(e,t){let n=xr(t,this.size,2);e.uniform2fv(this.addr,n)}function qr(e,t){let n=xr(t,this.size,3);e.uniform3fv(this.addr,n)}function Jr(e,t){let n=xr(t,this.size,4);e.uniform4fv(this.addr,n)}function Yr(e,t){let n=xr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xr(e,t){let n=xr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zr(e,t){let n=xr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qr(e,t){e.uniform1iv(this.addr,t)}function $r(e,t){e.uniform2iv(this.addr,t)}function ei(e,t){e.uniform3iv(this.addr,t)}function ti(e,t){e.uniform4iv(this.addr,t)}function ni(e,t){e.uniform1uiv(this.addr,t)}function ri(e,t){e.uniform2uiv(this.addr,t)}function ii(e,t){e.uniform3uiv(this.addr,t)}function ai(e,t){e.uniform4uiv(this.addr,t)}function oi(e,t,n){let r=this.cache,i=t.length,a=wr(n,i);Sr(r,a)||(e.uniform1iv(this.addr,a),Cr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fr:dr;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function si(e,t,n){let r=this.cache,i=t.length,a=wr(n,i);Sr(r,a)||(e.uniform1iv(this.addr,a),Cr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mr,a[e])}function ci(e,t,n){let r=this.cache,i=t.length,a=wr(n,i);Sr(r,a)||(e.uniform1iv(this.addr,a),Cr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||hr,a[e])}function li(e,t,n){let r=this.cache,i=t.length,a=wr(n,i);Sr(r,a)||(e.uniform1iv(this.addr,a),Cr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pr,a[e])}function ui(e){switch(e){case 5126:return Gr;case 35664:return Kr;case 35665:return qr;case 35666:return Jr;case 35674:return Yr;case 35675:return Xr;case 35676:return Zr;case 5124:case 35670:return Qr;case 35667:case 35671:return $r;case 35668:case 35672:return ei;case 35669:case 35673:return ti;case 5125:return ni;case 36294:return ri;case 36295:return ii;case 36296:return ai;case 35678:case 36198:case 36298:case 36306:case 35682:return oi;case 35679:case 36299:case 36307:return si;case 35680:case 36300:case 36308:case 36293:return ci;case 36289:case 36303:case 36311:case 36292:return li}}var di=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wr(t.type)}},fi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ui(t.type)}},pi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},mi=/(\w+)(\])?(\[|\.)?/g;function hi(e,t){e.seq.push(t),e.map[t.id]=t}function gi(e,t,n){let r=e.name,i=r.length;for(mi.lastIndex=0;;){let a=mi.exec(r),o=mi.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){hi(n,l===void 0?new di(s,e,t):new fi(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new pi(s),hi(n,e)),n=e}}}var _i=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);gi(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function vi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var yi=37297,bi=0;function xi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Si=new V;function Ci(e){Dt._getMatrix(Si,Dt.workingColorSpace,e);let t=`mat3( ${Si.elements.map(e=>e.toFixed(4))} )`;switch(Dt.getTransfer(e)){case i:return[t,`LinearTransferOETF`];case It:return[t,`sRGBTransferOETF`];default:return a(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function wi(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+xi(e.getShaderSource(t),r)}return i}function Ti(e,t){let n=Ci(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ei={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Di(e,t){let n=Ei[t];return n===void 0?(a(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Oi=new m;function ki(){return Dt.getLuminanceCoefficients(Oi),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Oi.x.toFixed(4)}, ${Oi.y.toFixed(4)}, ${Oi.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ai(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ni).join(`
`)}function ji(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Mi(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ni(e){return e!==``}function Pi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ii=/^[ \t]*#include +<([\w\d./]+)>/gm;function Li(e){return e.replace(Ii,zi)}var Ri=new Map;function zi(e,t){let n=X[t];if(n===void 0){let e=Ri.get(t);if(e!==void 0)n=X[e],a(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Li(n)}var Bi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vi(e){return e.replace(Bi,Hi)}function Hi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ui(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Wi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Gi(e){return Wi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ki={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function qi(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ki[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ji={302:`ENVMAP_MODE_REFRACTION`};function Yi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ji[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Xi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Zi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Xi[e.combine]||`ENVMAP_BLENDING_NONE`}function Qi(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function $i(e,t,n,r){let i=e.getContext(),o=n.defines,s=n.vertexShader,c=n.fragmentShader,l=Gi(n),u=qi(n),d=Yi(n),f=Zi(n),p=Qi(n),m=Ai(n),h=ji(o),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ni).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ni).join(`
`),v.length>0&&(v+=`
`)):(_=[Ui(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ni).join(`
`),v=[Ui(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Di(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Ti(`linearToOutputTexel`,n.outputColorSpace),ki(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ni).join(`
`)),s=Li(s),s=Pi(s,n),s=Fi(s,n),c=Li(c),c=Pi(c,n),c=Fi(c,n),s=Vi(s),c=Vi(c),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=vi(i,i.VERTEX_SHADER,b),C=vi(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g)||``,r=i.getShaderInfoLog(S)||``,o=i.getShaderInfoLog(C)||``,s=n.trim(),c=r.trim(),l=o.trim(),u=!0,d=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=wi(i,S,`vertex`),n=wi(i,C,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}}else s===``?(c===``||l===``)&&(d=!1):a(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new _i(i,g),E=Mi(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,yi)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bi++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var ea=0,ta=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new na(e),t.set(e,n)),n}},na=class{constructor(e){this.id=ea++,this.code=e,this.usedTimes=0}};function ra(e){return e===1030||e===37490||e===36285}function ia(e,t,n,r,i,o){let s=new g,c=new ta,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(i,s,u,d,g,_){let v=d.fog,y=g.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?d.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&a(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=Tn[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),A=e.id,j=t.id}let M=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),N=g.isInstancedMesh===!0,te=g.isBatchedMesh===!0,ne=!!i.map,P=!!i.matcap,re=!!S,ie=!!i.aoMap,ae=!!i.lightMap,F=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,L=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,R=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,z=i.transmission>0,me=le&&!!i.anisotropyMap,he=R&&!!i.clearcoatMap,ge=R&&!!i.clearcoatNormalMap,_e=R&&!!i.clearcoatRoughnessMap,ve=fe&&!!i.iridescenceMap,B=fe&&!!i.iridescenceThicknessMap,ye=pe&&!!i.sheenColorMap,V=pe&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=z&&!!i.transmissionMap,we=z&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,H=!!i.extensions,ke=0;i.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ke=e.toneMapping);let U={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:te,batchingColor:te&&g._colorsTexture!==null,instancing:N,instancingColor:N&&g.instanceColor!==null,instancingMorph:N&&g.morphTexture!==null,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:P,envMap:re,envMapMode:re&&S.mapping,envMapCubeUVHeight:C,aoMap:ie,lightMap:ae,bumpMap:F,normalMap:I,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&ra(i.normalMap.format),metalnessMap:L,roughnessMap:ce,anisotropy:le,anisotropyMap:me,clearcoat:R,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ve,iridescenceThicknessMap:B,sheen:pe,sheenColorMap:ye,sheenRoughnessMap:V,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:z,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:ne&&h(i.map.channel),aoMapUv:ie&&h(i.aoMap.channel),lightMapUv:ae&&h(i.lightMap.channel),bumpMapUv:F&&h(i.bumpMap.channel),normalMapUv:I&&h(i.normalMap.channel),displacementMapUv:oe&&h(i.displacementMap.channel),emissiveMapUv:se&&h(i.emissiveMap.channel),metalnessMapUv:L&&h(i.metalnessMap.channel),roughnessMapUv:ce&&h(i.roughnessMap.channel),anisotropyMapUv:me&&h(i.anisotropyMap.channel),clearcoatMapUv:he&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:B&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:V&&h(i.sheenRoughnessMap.channel),specularMapUv:be&&h(i.specularMap.channel),specularColorMapUv:xe&&h(i.specularColorMap.channel),specularIntensityMapUv:Se&&h(i.specularIntensityMap.channel),transmissionMapUv:Ce&&h(i.transmissionMap.channel),thicknessMapUv:we&&h(i.thicknessMap.channel),alphaMapUv:Ee&&h(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(I||le),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(ne||Ee),fog:!!v,useFog:i.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||y.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:s.sun.length,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numSunLightShadows:s.sunShadowMap.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Dt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:H&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(H&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function x(e){let t=m[e.type],n;if(t){let e=Tn[t];n=$e.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=d.get(n);return r===void 0?(r=new $i(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function aa(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function oa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ca(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||oa),r.length>1&&r.sort(t||sa),i.length>1&&i.sort(t||sa)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function la(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ca,e.set(t,[i])):n>=r.length?(i=new ca,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ua(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new m,color:new q};break;case`SpotLight`:n={position:new m,direction:new m,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new m,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new m,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new m,halfWidth:new m,halfHeight:new m}}return e[t.id]=n,n}}}function da(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var fa=0;function pa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ma(e){let t=new ua,n=da(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new m);let i=new m,a=new Te,o=new Te;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(pa);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=fa++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ha(e){let t=new ma(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ga(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ha(e),t.set(n,[a])):r>=i.length?(a=new ha(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var _a=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,va=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ya=[new m(1,0,0),new m(-1,0,0),new m(0,1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1)],ba=[new m(0,-1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1),new m(0,-1,0),new m(0,-1,0)],xa=new Te,Sa=new m,Ca=new m;function wa(e,t,n){let r=new dt,i=new B,o=new B,c=new d,l=new jt,u=new k,f={},p=n.maxTextureSize,m={0:1,1:0,2:2},h=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:_a,fragmentShader:va}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new He;_.setAttribute(`position`,new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new y(_,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,n,l){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(a(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=x!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],f=d.shadow;if(f===void 0){a(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();i.multiply(g),o.copy(f.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(o.x=Math.floor(p/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>p&&(o.y=Math.floor(p/g.y),i.y=o.y*g.y,f.mapSize.y=o.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(d.isPointLight){a(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new ft(i.x,i.y,{format:Oe,type:ie,minFilter:E,magFilter:E,generateMipmaps:!1}),f.map.texture.name=d.name+`.shadowMap`,f.map.depthTexture=new s(i.x,i.y,L),f.map.depthTexture.name=d.name+`.shadowMapDepth`,f.map.depthTexture.format=en,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=de,f.map.depthTexture.magFilter=de}else d.isPointLight?(f.map=new tr(i.x),f.map.depthTexture=new Qe(i.x,tn)):(f.map=new ft(i.x,i.y),f.map.depthTexture=new s(i.x,i.y,tn)),f.map.depthTexture.name=d.name+`.shadowMap`,f.map.depthTexture.format=en,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=E,f.map.depthTexture.magFilter=E):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=de,f.map.depthTexture.magFilter=de);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();d.isPointLight!==!0&&f.updateMatrices(d,l);for(let t=0;t<v;t++){let i=f.getCamera(t);if(d.isPointLight){let e=f.camera,n=f.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Sa.setFromMatrixPosition(d.matrixWorld),e.position.copy(Sa),Ca.copy(e.position),Ca.add(ya[t]),e.up.copy(ba[t]),e.lookAt(Ca),e.updateMatrixWorld(),n.makeTranslation(-Sa.x,-Sa.y,-Sa.z),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(xa,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=f.getFrustum(t),w(n,l,i,d,this.type)}f.isPointLightShadow!==!0&&this.type===3&&S(f,l),f.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(u,d,f)};function S(n,r){let a=t.update(v);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,g.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),n.mapPass===null?n.mapPass=new ft(i.x,i.y,{format:Oe,type:ie}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,h,v,null),g.uniforms.shadow_pass.value=n.mapPass.texture,g.uniforms.resolution.value.set(n.map.width,n.map.height),g.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,g,v,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?m[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=C(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=C(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)w(c[e],i,a,o,s)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ta(e,t){function n(){let t=!1,n=new d,r=null,i=new d(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=K[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),N=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),N=te>=1);let P=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),F=new d().fromArray(ie),I=new d().fromArray(ae);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),z(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return g!==t&&(e.useProgram(t),g=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function z(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(ce(e.BLEND),_=!1);else if(_===!1&&(L(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(fe[n],fe[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function me(t,n){t.side===2?ce(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?z(0):z(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ge(t){t===0?ce(e.CULL_FACE):(L(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function _e(t){t!==A&&(N&&e.lineWidth(t),A=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(j=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function B(t){t?L(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function V(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function be(){let t=re[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function H(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function U(t){return f[t]===void 0?e.getParameter(t):f[t]}function Ae(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function W(t){F.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),F.copy(t))}function je(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function G(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},P=null,re={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,F.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:z,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:B,activeTexture:ye,bindTexture:V,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:H,texImage3D:ke,pixelStorei:Ae,getParameter:U,updateUBOMapping:Me,uniformBlockBinding:G,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:W,viewport:je,reset:Ne}}function Ea(t,n,r,o,s,c,l){let u=n.has(`WEBGL_multisampled_render_to_texture`)?n.get(`WEBGL_multisampled_render_to_texture`):null,d=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),f=new B,p=new WeakMap,m=new Set,h,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function y(e,t){return v?new OffscreenCanvas(e,t):oe(`canvas`)}function b(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),o=Math.floor(r*i.height);h===void 0&&(h=y(n,o));let s=t?y(n,o):h;return s.width=n,s.height=o,s.getContext(`2d`).drawImage(e,0,0,n,o),a(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+o+`).`),s}return`data`in e&&a(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function x(e){return e.generateMipmaps}function S(e){t.generateMipmap(e)}function C(e){return e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?t.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(e,r,o,s,c,l=!1){if(e!==null){if(t[e]!==void 0)return t[e];a(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let u;s&&(u=n.get(`EXT_texture_norm16`),u||a(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let d=r;if(r===t.RED&&(o===t.FLOAT&&(d=t.R32F),o===t.HALF_FLOAT&&(d=t.R16F),o===t.UNSIGNED_BYTE&&(d=t.R8),o===t.UNSIGNED_SHORT&&u&&(d=u.R16_EXT),o===t.SHORT&&u&&(d=u.R16_SNORM_EXT)),r===t.RED_INTEGER&&(o===t.UNSIGNED_BYTE&&(d=t.R8UI),o===t.UNSIGNED_SHORT&&(d=t.R16UI),o===t.UNSIGNED_INT&&(d=t.R32UI),o===t.BYTE&&(d=t.R8I),o===t.SHORT&&(d=t.R16I),o===t.INT&&(d=t.R32I)),r===t.RG&&(o===t.FLOAT&&(d=t.RG32F),o===t.HALF_FLOAT&&(d=t.RG16F),o===t.UNSIGNED_BYTE&&(d=t.RG8),o===t.UNSIGNED_SHORT&&u&&(d=u.RG16_EXT),o===t.SHORT&&u&&(d=u.RG16_SNORM_EXT)),r===t.RG_INTEGER&&(o===t.UNSIGNED_BYTE&&(d=t.RG8UI),o===t.UNSIGNED_SHORT&&(d=t.RG16UI),o===t.UNSIGNED_INT&&(d=t.RG32UI),o===t.BYTE&&(d=t.RG8I),o===t.SHORT&&(d=t.RG16I),o===t.INT&&(d=t.RG32I)),r===t.RGB_INTEGER&&(o===t.UNSIGNED_BYTE&&(d=t.RGB8UI),o===t.UNSIGNED_SHORT&&(d=t.RGB16UI),o===t.UNSIGNED_INT&&(d=t.RGB32UI),o===t.BYTE&&(d=t.RGB8I),o===t.SHORT&&(d=t.RGB16I),o===t.INT&&(d=t.RGB32I)),r===t.RGBA_INTEGER&&(o===t.UNSIGNED_BYTE&&(d=t.RGBA8UI),o===t.UNSIGNED_SHORT&&(d=t.RGBA16UI),o===t.UNSIGNED_INT&&(d=t.RGBA32UI),o===t.BYTE&&(d=t.RGBA8I),o===t.SHORT&&(d=t.RGBA16I),o===t.INT&&(d=t.RGBA32I)),r===t.RGB&&(o===t.UNSIGNED_SHORT&&u&&(d=u.RGB16_EXT),o===t.SHORT&&u&&(d=u.RGB16_SNORM_EXT),o===t.UNSIGNED_INT_5_9_9_9_REV&&(d=t.RGB9_E5),o===t.UNSIGNED_INT_10F_11F_11F_REV&&(d=t.R11F_G11F_B10F)),r===t.RGBA){let e=l?i:Dt.getTransfer(c);o===t.FLOAT&&(d=t.RGBA32F),o===t.HALF_FLOAT&&(d=t.RGBA16F),o===t.UNSIGNED_BYTE&&(d=e===`srgb`?t.SRGB8_ALPHA8:t.RGBA8),o===t.UNSIGNED_SHORT&&u&&(d=u.RGBA16_EXT),o===t.SHORT&&u&&(d=u.RGBA16_SNORM_EXT),o===t.UNSIGNED_SHORT_4_4_4_4&&(d=t.RGBA4),o===t.UNSIGNED_SHORT_5_5_5_1&&(d=t.RGB5_A1)}return(d===t.R16F||d===t.R32F||d===t.RG16F||d===t.RG32F||d===t.RGBA16F||d===t.RGBA32F)&&n.get(`EXT_color_buffer_float`),d}function T(e,n){let r;return e?n===null||n===1014||n===1020?r=t.DEPTH24_STENCIL8:n===1015?r=t.DEPTH32F_STENCIL8:n===1012&&(r=t.DEPTH24_STENCIL8,a(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=t.DEPTH_COMPONENT24:n===1015?r=t.DEPTH_COMPONENT32F:n===1012&&(r=t.DEPTH_COMPONENT16),r}function D(e,t){return x(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),A(t),t.isVideoTexture&&p.delete(t),t.isHTMLTexture&&m.delete(t)}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),M(t)}function A(e){let t=o.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=g.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&g.delete(n)}o.remove(e)}function j(e){let n=o.get(e);t.deleteTexture(n.__webglTexture);let r=e.source,i=g.get(r);delete i[n.__cacheKey],l.memory.textures--}function M(e){let n=o.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),o.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let r=0;r<n.__webglFramebuffer[e].length;r++)t.deleteFramebuffer(n.__webglFramebuffer[e][r]);else t.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[e])}else{if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)t.deleteFramebuffer(n.__webglFramebuffer[e]);else t.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&t.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&t.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,n=r.length;e<n;e++){let n=o.get(r[e]);n.__webglTexture&&(t.deleteTexture(n.__webglTexture),l.memory.textures--),o.remove(r[e])}o.remove(e)}let ee=0;function N(){ee=0}function te(){return ee}function P(e){ee=e}function re(){let e=ee;return e>=s.maxTextures&&a(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+s.maxTextures),ee+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(e,n){let i=o.get(e);if(e.isVideoTexture&&H(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&i.__version!==e.version){let t=e.image;if(t===null)a(`WebGLRenderer: Texture marked for update but no image data found.`);else if(t.complete===!1)a(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(i,e,n);return}}else e.isExternalTexture&&(i.__webglTexture=e.sourceTexture?e.sourceTexture:null);r.bindTexture(t.TEXTURE_2D,i.__webglTexture,t.TEXTURE0+n)}function F(e,n){let i=o.get(e);e.isRenderTargetTexture===!1&&e.version>0&&i.__version!==e.version?ge(i,e,n):(e.isExternalTexture&&(i.__webglTexture=e.sourceTexture?e.sourceTexture:null),r.bindTexture(t.TEXTURE_2D_ARRAY,i.__webglTexture,t.TEXTURE0+n))}function I(e,n){let i=o.get(e);e.isRenderTargetTexture===!1&&e.version>0&&i.__version!==e.version?ge(i,e,n):r.bindTexture(t.TEXTURE_3D,i.__webglTexture,t.TEXTURE0+n)}function se(e,n){let i=o.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&i.__version!==e.version?_e(i,e,n):r.bindTexture(t.TEXTURE_CUBE_MAP,i.__webglTexture,t.TEXTURE0+n)}let L={[U]:t.REPEAT,[Ge]:t.CLAMP_TO_EDGE,[Me]:t.MIRRORED_REPEAT},ce={[de]:t.NEAREST,[Ye]:t.NEAREST_MIPMAP_NEAREST,[e]:t.NEAREST_MIPMAP_LINEAR,[E]:t.LINEAR,[pe]:t.LINEAR_MIPMAP_NEAREST,[ne]:t.LINEAR_MIPMAP_LINEAR},le={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ue(e,r){if(r.type===1015&&n.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&a(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),t.texParameteri(e,t.TEXTURE_WRAP_S,L[r.wrapS]),t.texParameteri(e,t.TEXTURE_WRAP_T,L[r.wrapT]),(e===t.TEXTURE_3D||e===t.TEXTURE_2D_ARRAY)&&t.texParameteri(e,t.TEXTURE_WRAP_R,L[r.wrapR]),t.texParameteri(e,t.TEXTURE_MAG_FILTER,ce[r.magFilter]),t.texParameteri(e,t.TEXTURE_MIN_FILTER,ce[r.minFilter]),r.compareFunction&&(t.texParameteri(e,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(e,t.TEXTURE_COMPARE_FUNC,le[r.compareFunction])),n.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&n.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||o.get(r).__currentAnisotropy){let i=n.get(`EXT_texture_filter_anisotropic`);t.texParameterf(e,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,s.getMaxAnisotropy())),o.get(r).__currentAnisotropy=r.anisotropy}}}function fe(e,n){let r=!1;e.__webglInit===void 0&&(e.__webglInit=!0,n.addEventListener(`dispose`,O));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=ie(n);if(o!==e.__cacheKey){a[o]===void 0&&(a[o]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,r=!0),a[o].usedTimes++;let i=a[e.__cacheKey];i!==void 0&&(a[e.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),e.__cacheKey=o,e.__webglTexture=a[o].texture}return r}function z(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(e,n,i,a){let o=e.updateRanges;if(o.length===0)r.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=z(r.start,n.width,4),c=z(t.start,n.width,4);r.start<=i+1&&a===c&&z(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(t.UNPACK_ROW_LENGTH),l=r.getParameter(t.UNPACK_SKIP_PIXELS),u=r.getParameter(t.UNPACK_SKIP_ROWS);r.pixelStorei(t.UNPACK_ROW_LENGTH,n.width);for(let e=0,s=o.length;e<s;e++){let s=o[e],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(t.UNPACK_SKIP_PIXELS,u),r.pixelStorei(t.UNPACK_SKIP_ROWS,d),r.texSubImage2D(t.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}e.clearUpdateRanges(),r.pixelStorei(t.UNPACK_ROW_LENGTH,c),r.pixelStorei(t.UNPACK_SKIP_PIXELS,l),r.pixelStorei(t.UNPACK_SKIP_ROWS,u)}}function ge(e,n,i){let l=t.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(l=t.TEXTURE_2D_ARRAY),n.isData3DTexture&&(l=t.TEXTURE_3D);let u=fe(e,n),d=n.source;r.bindTexture(l,e.__webglTexture,t.TEXTURE0+i);let f=o.get(d);if(d.version!==f.__version||u===!0){if(r.activeTexture(t.TEXTURE0+i),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let e=Dt.getPrimaries(Dt.workingColorSpace),i=n.colorSpace===``?null:Dt.getPrimaries(n.colorSpace),a=n.colorSpace===``||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment);let e=b(n.image,!1,s.maxTextureSize);e=ke(n,e);let o=c.convert(n.format,n.colorSpace),p=c.convert(n.type),h=w(n.internalFormat,o,p,n.normalized,n.colorSpace,n.isVideoTexture);ue(l,n);let g,v=n.mipmaps,y=n.isVideoTexture!==!0,C=f.__version===void 0||u===!0,E=d.dataReady,O=D(n,e);if(n.isDepthTexture)h=T(n.format===he,n.type),C&&(y?r.texStorage2D(t.TEXTURE_2D,1,h,e.width,e.height):r.texImage2D(t.TEXTURE_2D,0,h,e.width,e.height,0,o,p,null));else if(n.isDataTexture){if(v.length>0){y&&C&&r.texStorage2D(t.TEXTURE_2D,O,h,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)g=v[e],y?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,o,p,g.data):r.texImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,o,p,g.data);n.generateMipmaps=!1}else y?(C&&r.texStorage2D(t.TEXTURE_2D,O,h,e.width,e.height),E&&me(n,e,o,p)):r.texImage2D(t.TEXTURE_2D,0,h,e.width,e.height,0,o,p,e.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&C&&r.texStorage3D(t.TEXTURE_2D_ARRAY,O,h,v[0].width,v[0].height,e.depth);for(let i=0,s=v.length;i<s;i++)if(g=v[i],n.format!==1023){if(o!==null){if(y){if(E){if(n.layerUpdates.size>0){let e=_(g.width,g.height,n.format,n.type);for(let a of n.layerUpdates){let n=g.data.subarray(a*e/g.data.BYTES_PER_ELEMENT,(a+1)*e/g.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,o,n)}}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,e.depth,o,g.data)}}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,i,h,g.width,g.height,e.depth,0,g.data,0,0)}else a(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?E&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,e.depth,o,p,g.data):r.texImage3D(t.TEXTURE_2D_ARRAY,i,h,g.width,g.height,e.depth,0,o,p,g.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{y&&C&&r.texStorage2D(t.TEXTURE_2D,O,h,v[0].width,v[0].height);for(let e=0,i=v.length;e<i;e++)g=v[e],n.format===1023?y?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,o,p,g.data):r.texImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,o,p,g.data):o===null?a(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?E&&r.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,o,g.data):r.compressedTexImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,g.data)}}else if(n.isDataArrayTexture){if(y){if(C&&r.texStorage3D(t.TEXTURE_2D_ARRAY,O,h,e.width,e.height,e.depth),E){if(n.layerUpdates.size>0){let i=_(e.width,e.height,n.format,n.type);for(let a of n.layerUpdates){let n=e.data.subarray(a*i/e.data.BYTES_PER_ELEMENT,(a+1)*i/e.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,a,e.width,e.height,1,o,p,n)}n.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,o,p,e.data)}}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,h,e.width,e.height,e.depth,0,o,p,e.data)}else if(n.isData3DTexture)y?(C&&r.texStorage3D(t.TEXTURE_3D,O,h,e.width,e.height,e.depth),E&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,o,p,e.data)):r.texImage3D(t.TEXTURE_3D,0,h,e.width,e.height,e.depth,0,o,p,e.data);else if(n.isFramebufferTexture){if(C){if(y)r.texStorage2D(t.TEXTURE_2D,O,h,e.width,e.height);else{let n=e.width,i=e.height;for(let e=0;e<O;e++)r.texImage2D(t.TEXTURE_2D,e,h,n,i,0,o,p,null),n>>=1,i>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in t){let r=t.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),e.parentNode!==r){r.appendChild(e),m.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,e);else{let n=t.RGBA,r=t.RGBA,i=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,n,r,i,e)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(v.length>0){if(y&&C){let e=Ae(v[0]);r.texStorage2D(t.TEXTURE_2D,O,h,e.width,e.height)}for(let e=0,n=v.length;e<n;e++)g=v[e],y?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,o,p,g):r.texImage2D(t.TEXTURE_2D,e,h,o,p,g);n.generateMipmaps=!1}else if(y){if(C){let n=Ae(e);r.texStorage2D(t.TEXTURE_2D,O,h,n.width,n.height)}E&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,o,p,e)}else r.texImage2D(t.TEXTURE_2D,0,h,o,p,e);x(n)&&S(l),f.__version=d.version,n.onUpdate&&n.onUpdate(n)}e.__version=n.version}function _e(e,n,i){if(n.image.length!==6)return;let l=fe(e,n),u=n.source;r.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture,t.TEXTURE0+i);let d=o.get(u);if(u.version!==d.__version||l===!0){r.activeTexture(t.TEXTURE0+i);let e=Dt.getPrimaries(Dt.workingColorSpace),o=n.colorSpace===``?null:Dt.getPrimaries(n.colorSpace),f=n.colorSpace===``||e===o?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=n.isCompressedTexture||n.image[0].isCompressedTexture,m=n.image[0]&&n.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=b(n.image[e],!0,s.maxCubemapSize):h[e]=m?n.image[e].image:n.image[e],h[e]=ke(n,h[e]);let g=h[0],_=c.convert(n.format,n.colorSpace),v=c.convert(n.type),y=w(n.internalFormat,_,v,n.normalized,n.colorSpace),C=n.isVideoTexture!==!0,T=d.__version===void 0||l===!0,E=u.dataReady,O=D(n,g);ue(t.TEXTURE_CUBE_MAP,n);let k;if(p){C&&T&&r.texStorage2D(t.TEXTURE_CUBE_MAP,O,y,g.width,g.height);for(let e=0;e<6;e++){k=h[e].mipmaps;for(let i=0;i<k.length;i++){let o=k[i];n.format===1023?C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,o.width,o.height,_,v,o.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,y,o.width,o.height,0,_,v,o.data):_===null?a(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,o.width,o.height,_,o.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,y,o.width,o.height,0,o.data)}}}else{if(k=n.mipmaps,C&&T){k.length>0&&O++;let e=Ae(h[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,O,y,e.width,e.height)}for(let e=0;e<6;e++)if(m){C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,h[e].width,h[e].height,_,v,h[e].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,h[e].width,h[e].height,0,_,v,h[e].data);for(let n=0;n<k.length;n++){let i=k[n].image[e].image;C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,0,0,i.width,i.height,_,v,i.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,y,i.width,i.height,0,_,v,i.data)}}else{C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,_,v,h[e]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,_,v,h[e]);for(let n=0;n<k.length;n++){let i=k[n];C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,0,0,_,v,i.image[e]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,y,_,v,i.image[e])}}}x(n)&&S(t.TEXTURE_CUBE_MAP),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}e.__version=n.version}function ve(e,n,i,a,s,l){let d=c.convert(i.format,i.colorSpace),f=c.convert(i.type),p=w(i.internalFormat,d,f,i.normalized,i.colorSpace),m=o.get(n),h=o.get(i);if(h.__renderTarget=n,!m.__hasExternalTextures){let e=Math.max(1,n.width>>l),i=Math.max(1,n.height>>l);s===t.TEXTURE_3D||s===t.TEXTURE_2D_ARRAY?r.texImage3D(s,l,p,e,i,n.depth,0,d,f,null):r.texImage2D(s,l,p,e,i,0,d,f,null)}r.bindFramebuffer(t.FRAMEBUFFER,e),Oe(n)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,a,s,h.__webglTexture,0,De(n)):(s===t.TEXTURE_2D||s>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,a,s,h.__webglTexture,l),r.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(e,n,r){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=T(n.stencilBuffer,a),s=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Oe(n)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De(n),o,n.width,n.height):r?t.renderbufferStorageMultisample(t.RENDERBUFFER,De(n),o,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,o,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,s,t.RENDERBUFFER,e)}else{let e=n.textures;for(let i=0;i<e.length;i++){let a=e[i],o=c.convert(a.format,a.colorSpace),s=c.convert(a.type),l=w(a.internalFormat,o,s,a.normalized,a.colorSpace);Oe(n)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De(n),l,n.width,n.height):r?t.renderbufferStorageMultisample(t.RENDERBUFFER,De(n),l,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,l,n.width,n.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function V(e,n,i){let a=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(t.FRAMEBUFFER,e),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=o.get(n.depthTexture);if(s.__renderTarget=n,(!s.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),a){if(s.__webglInit===void 0&&(s.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,O)),s.__webglTexture===void 0){s.__webglTexture=t.createTexture(),r.bindTexture(t.TEXTURE_CUBE_MAP,s.__webglTexture),ue(t.TEXTURE_CUBE_MAP,n.depthTexture);let e=c.convert(n.depthTexture.format),i=c.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=t.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=t.DEPTH24_STENCIL8);for(let r=0;r<6;r++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,a,n.width,n.height,0,e,i,null)}}else ae(n.depthTexture,0);let l=s.__webglTexture,d=De(n),f=a?t.TEXTURE_CUBE_MAP_POSITIVE_X+i:t.TEXTURE_2D,p=n.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Oe(n)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,p,f,l,0,d):t.framebufferTexture2D(t.FRAMEBUFFER,p,f,l,0);else if(n.depthTexture.format===1027)Oe(n)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,p,f,l,0,d):t.framebufferTexture2D(t.FRAMEBUFFER,p,f,l,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(e){let n=o.get(e),i=e.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==e.depthTexture){let t=e.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),t){let e=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,t.removeEventListener(`dispose`,e)};t.addEventListener(`dispose`,e),n.__depthDisposeCallback=e}n.__boundDepthTexture=t}if(e.depthTexture&&!n.__autoAllocateDepthBuffer){if(i)for(let t=0;t<6;t++)V(n.__webglFramebuffer[t],e,t);else{let t=e.texture.mipmaps;t&&t.length>0?V(n.__webglFramebuffer[0],e,0):V(n.__webglFramebuffer,e,0)}}else if(i){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=t.createRenderbuffer(),ye(n.__webglDepthbuffer[i],e,!1);else{let r=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];t.bindRenderbuffer(t.RENDERBUFFER,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,a)}}else{let i=e.texture.mipmaps;if(i&&i.length>0?r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=t.createRenderbuffer(),ye(n.__webglDepthbuffer,e,!1);else{let r=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,i)}}r.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(e,n,r){let i=o.get(e);n!==void 0&&ve(i.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),r!==void 0&&be(e)}function Se(e){let n=e.texture,i=o.get(e),a=o.get(n);e.addEventListener(`dispose`,k);let s=e.textures,u=e.isWebGLCubeRenderTarget===!0,d=s.length>1;if(d||(a.__webglTexture===void 0&&(a.__webglTexture=t.createTexture()),a.__version=n.version,l.memory.textures++),u){i.__webglFramebuffer=[];for(let e=0;e<6;e++)if(n.mipmaps&&n.mipmaps.length>0){i.__webglFramebuffer[e]=[];for(let r=0;r<n.mipmaps.length;r++)i.__webglFramebuffer[e][r]=t.createFramebuffer()}else i.__webglFramebuffer[e]=t.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){i.__webglFramebuffer=[];for(let e=0;e<n.mipmaps.length;e++)i.__webglFramebuffer[e]=t.createFramebuffer()}else i.__webglFramebuffer=t.createFramebuffer();if(d)for(let e=0,n=s.length;e<n;e++){let n=o.get(s[e]);n.__webglTexture===void 0&&(n.__webglTexture=t.createTexture(),l.memory.textures++)}if(e.samples>0&&Oe(e)===!1){i.__webglMultisampledFramebuffer=t.createFramebuffer(),i.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];i.__webglColorRenderbuffer[n]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=c.convert(r.format,r.colorSpace),o=c.convert(r.type),l=w(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),u=De(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,u,l,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,i.__webglColorRenderbuffer[n])}t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(i.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(i.__webglDepthRenderbuffer,e,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(u){r.bindTexture(t.TEXTURE_CUBE_MAP,a.__webglTexture),ue(t.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)ve(i.__webglFramebuffer[r][a],e,n,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+r,a);else ve(i.__webglFramebuffer[r],e,n,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);x(n)&&S(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(d){for(let n=0,a=s.length;n<a;n++){let a=s[n],c=o.get(a),l=t.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(l=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(l,c.__webglTexture),ue(l,a),ve(i.__webglFramebuffer,e,a,t.COLOR_ATTACHMENT0+n,l,0),x(a)&&S(l)}r.unbindTexture()}else{let o=t.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(o,a.__webglTexture),ue(o,n),n.mipmaps&&n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)ve(i.__webglFramebuffer[r],e,n,t.COLOR_ATTACHMENT0,o,r);else ve(i.__webglFramebuffer,e,n,t.COLOR_ATTACHMENT0,o,0);x(n)&&S(o),r.unbindTexture()}e.depthBuffer&&be(e)}function Ce(e){let t=e.textures;for(let n=0,i=t.length;n<i;n++){let i=t[n];if(x(i)){let t=C(e),n=o.get(i).__webglTexture;r.bindTexture(t,n),S(t),r.unbindTexture()}}}let we=[],Te=[];function Ee(e){if(e.samples>0){if(Oe(e)===!1){let n=e.textures,i=e.width,a=e.height,s=t.COLOR_BUFFER_BIT,c=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,l=o.get(e),u=n.length>1;if(u)for(let e=0;e<n.length;e++)r.bindFramebuffer(t.FRAMEBUFFER,l.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,l.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=e.texture.mipmaps;f&&f.length>0?r.bindFramebuffer(t.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):r.bindFramebuffer(t.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let r=0;r<n.length;r++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(s|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(s|=t.STENCIL_BUFFER_BIT)),u){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l.__webglColorRenderbuffer[r]);let e=o.get(n[r]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}t.blitFramebuffer(0,0,i,a,0,0,i,a,s,t.NEAREST),d===!0&&(we.length=0,Te.length=0,we.push(t.COLOR_ATTACHMENT0+r),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(we.push(c),Te.push(c),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,we))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<n.length;e++){r.bindFramebuffer(t.FRAMEBUFFER,l.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,l.__webglColorRenderbuffer[e]);let i=o.get(n[e]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,l.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,i,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&d){let n=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(s.maxSamples,e.samples)}function Oe(e){let t=o.get(e);return e.samples>0&&n.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function H(e){let t=l.render.frame;p.get(e)!==t&&(p.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Dt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&a(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(f.width=e.naturalWidth||e.width,f.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(f.width=e.displayWidth,f.height=e.displayHeight):(f.width=e.width,f.height=e.height),f}this.allocateTextureUnit=re,this.resetTextureUnits=N,this.getTextureUnits=te,this.setTextureUnits=P,this.setTexture2D=ae,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return r.buffers.depth.getReversed()}}function Da(e,t){function n(n,r=``){let i,a=Dt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Oa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ka=`
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

}`,Aa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Le({vertexShader:Oa,fragmentShader:ka,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new y(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ja=class extends ve{constructor(e,t){super();let r=this,i=null,o=1,c=null,l=`local-floor`,u=1,f=null,h=null,g=null,_=null,v=null,y=null,b=typeof XRWebGLBinding<`u`,x=new Aa,S={},C=t.getContextAttributes(),w=null,T=null,E=[],D=[],O=new B,k=null,A=null,j=new Rt;j.viewport=new d;let M=new Rt;M.viewport=new d;let ee=[j,M],N=new Ft,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new n,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new n,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new n,E[e]=t),t.getHandSpace()};function P(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,f||c),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){i.removeEventListener(`select`,P),i.removeEventListener(`selectstart`,P),i.removeEventListener(`selectend`,P),i.removeEventListener(`squeeze`,P),i.removeEventListener(`squeezestart`,P),i.removeEventListener(`squeezeend`,P),i.removeEventListener(`end`,re),i.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}te=null,ne=null,x.reset();for(let e in S)delete S[e];if(e.setRenderTarget(w),v=null,_=null,g=null,i=null,T=null,le.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,r.isPresenting===!0&&a(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){l=e,r.isPresenting===!0&&a(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(e){f=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(n){if(i=n,i!==null){if(w=e.getRenderTarget(),i.addEventListener(`select`,P),i.addEventListener(`selectstart`,P),i.addEventListener(`selectend`,P),i.addEventListener(`squeeze`,P),i.addEventListener(`squeezestart`,P),i.addEventListener(`squeezeend`,P),i.addEventListener(`end`,re),i.addEventListener(`inputsourceschange`,ie),C.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),b&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,r=null,a=null;C.depth&&(a=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=C.stencil?he:en,r=C.stencil?an:tn);let c={colorFormat:t.RGBA8,depthFormat:a,scaleFactor:o};g=this.getBinding(),_=g.createProjectionLayer(c),i.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new ft(_.textureWidth,_.textureHeight,{format:At,type:Pe,depthTexture:new s(_.textureWidth,_.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let n={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(i,t,n),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new ft(v.framebufferWidth,v.framebufferHeight,{format:At,type:Pe,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await i.requestReferenceSpace(l),le.setContext(i),le.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}let ae=new m,F=new m;function I(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),N.near=M.near=j.near=t,N.far=M.far=j.far=n,(te!==N.near||ne!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,ne=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let r=e.parent,a=N.cameras;oe(N,r);for(let e=0;e<a.length;e++)oe(a[e],r);a.length===2?I(N,j,M):N.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),se(e,N,r)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(_!==null||v!==null)return u},this.setFoveation=function(e){u=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(e){return S[e]};let L=null;function ce(t,n){if(h=n.getViewerPose(f||c),y=n,h!==null){let t=h.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let n=!1;t.length!==N.cameras.length&&(N.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(v!==null)a=v.getViewport(i);else{let t=g.getViewSubImage(_,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=ee[r];o===void 0&&(o=new Rt,o.layers.enable(r),o.viewport=new d,ee[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),n===!0&&N.cameras.push(o)}let a=i.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&b){g=r.getBinding();let e=g.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,i.renderState)}if(a&&a.includes(`camera-access`)&&b){e.state.unbindTexture(),g=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new p,S[n]=e);let t=g.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],r=E[e];t!==null&&r!==void 0&&r.update(t,n,f||c)}L&&L(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),y=null}let le=new Cn;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},Ma=new Te,Na=new V;Na.set(-1,0,0,0,1,0,0,0,1);function Pa(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,D(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ma.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Na),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Fa(e,t,n,r){let i={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let a=i[e.id];a===void 0&&(_(e),a=d(e),i[e.id]=a,e.addEventListener(`dispose`,y));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;o[e.id]!==c&&(p(e),o[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,a);else m(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?a(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):a(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete o[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);s=[],i={},o={}}return{bind:l,update:u,dispose:b}}var Ia=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),La=null;function Ra(){return La===null&&(La=new Be(Ia,16,16,Oe,ie),La.name=`DFG_LUT`,La.minFilter=E,La.magFilter=E,La.wrapS=Ge,La.wrapT=Ge,La.generateMipmaps=!1,La.needsUpdate=!0),La}var za=class{constructor(e={}){let{canvas:t=ae(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Pe}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=o;let v=g,y=new Set([bt,S,je]),b=new Set([Pe,tn,Qt,an,ge,c]),x=new Uint32Array(4),C=new Int32Array(4),w=new m,T=null,E=null,D=[],O=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,j=!1,M=null,ee=null,N=null,te=null;this._outputColorSpace=xt;let re=0,F=0,I=null,oe=-1,se=null,L=new d,le=new d,ue=null,de=new q(0),fe=0,pe=t.width,z=t.height,me=1,he=null,_e=null,ve=new d(0,0,pe,z),B=new d(0,0,pe,z),ye=!1,V=new dt,be=!1,xe=!1,Se=new Te,Ce=new m,we=new d,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return I===null?me:1}let H=n;function ke(e,n){return t.getContext(e,n)}let U,Ae,W,Me,G,K,Ne,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe;try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,$e,!1),t.addEventListener(`webglcontextrestored`,et,!1),t.addEventListener(`webglcontextcreationerror`,tt,!1),H===null){let t=`webgl2`;if(H=ke(t,e),H===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),R(`WebGLRenderer: `+e.message),e}function Ze(){U=new rr(H),U.init(),Je=new Da(H,U),Ae=new Mn(H,U,e,Je),W=new Ta(H,U),Ae.reversedDepthBuffer&&h&&W.buffers.depth.setReversed(!0),ee=H.createFramebuffer(),N=H.createFramebuffer(),te=H.createFramebuffer(),Me=new or(H),G=new aa,K=new Ea(H,U,W,G,Ae,Je,Me),Ne=new nr(A),Fe=new wn(H),Ye=new An(H,Fe),Ie=new ir(H,Fe,Me,Ye),Le=new cr(H,Ie,Fe,Ye,Me),Ge=new sr(H,Ae,K),He=new Nn(G),Re=new ia(A,Ne,U,Ae,Ye,He),ze=new Pa(A,G),Be=new la,Ve=new ga(U),We=new kn(A,Ne,W,Le,_,l),Ue=new wa(A,Le,Ae),Xe=new Fa(H,Me,Ae,W),Ke=new jn(H,U,Me),qe=new ar(H,U,Me),Me.programs=Re.programs,A.capabilities=Ae,A.extensions=U,A.properties=G,A.renderLists=Be,A.shadowMap=Ue,A.state=W,A.info=Me}v!==1009&&(k=new ur(v,t.width,t.height,s,r,i));let Qe=new ja(A,H);this.xr=Qe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=U.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=U.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(pe,z,!1))},this.getSize=function(e){return e.set(pe,z)},this.setSize=function(e,n,r=!0){Qe.isPresenting?a(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,z=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*me,z*me).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,z=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){a(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}k.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(L)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),W.viewport(L.copy(ve).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(B)},this.setScissor=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),W.scissor(le.copy(B).multiplyScalar(me).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){W.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=y.has(t)}if(e){let e=I.texture.type,t=b.has(e),n=We.getClearColor(),r=We.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,H.clearBufferuiv(H.COLOR,0,x)):(C[0]=i,C[1]=a,C[2]=o,C[3]=r,H.clearBufferiv(H.COLOR,0,C))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),We.dispose(),Be.dispose(),Ve.dispose(),G.dispose(),Ne.dispose(),Le.dispose(),Ye.dispose(),Xe.dispose(),Re.dispose(),Qe.dispose(),Qe.removeEventListener(`sessionstart`,ct),Qe.removeEventListener(`sessionend`,lt),ut.stop()};function $e(e){e.preventDefault(),P(`WebGLRenderer: Context Lost.`),j=!0}function et(){P(`WebGLRenderer: Context Restored.`),j=!1;let e=Me.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;Ze(),Me.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function tt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function nt(e){let t=e.target;t.removeEventListener(`dispose`,nt),rt(t)}function rt(e){it(e),G.remove(e)}function it(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ye.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Fe.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(U.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),be===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,vt(e,t,r),e.side=0,e.needsUpdate=!0,vt(e,t,r),e.side=2):vt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),E=Ve.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights(),M!==null&&M.updateLights(E.state.lightsArray),xe=this.localClippingEnabled,be=He.init(this.clippingPlanes,xe),be===!0&&He.setGlobalState(this.clippingPlanes,t),M!==null&&Ue.render(E.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];at(o,n,t,e),r.add(o)}else at(i,n,t,e),r.add(i)}}),E=O.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}U.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function st(e){ot&&ot(e)}function ct(){ut.stop()}function lt(){ut.start()}let ut=new Cn;ut.setAnimationLoop(st),typeof self<`u`&&ut.setContext(self),this.setAnimationLoop=function(e){ot=e,Qe.setAnimationLoop(e),e===null?ut.stop():ut.start()},Qe.addEventListener(`sessionstart`,ct),Qe.addEventListener(`sessionend`,lt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(j===!0)return;M!==null&&M.renderStart(e,t);let n=Qe.enabled===!0&&Qe.isPresenting===!0,r=k!==null&&(I===null||n)&&k.begin(A,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(t),t=Qe.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,I),E=Ve.get(e,O.length),E.init(t),E.state.textureUnits=K.getTextureUnits(),O.push(E),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),V.setFromProjectionMatrix(Se,ce,t.reversedDepth),xe=this.localClippingEnabled,be=He.init(this.clippingPlanes,xe),T=Be.get(e,D.length),T.init(),D.push(T),Qe.enabled===!0&&Qe.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,A.sortObjects)}pt(e,t,0,A.sortObjects),T.finish(),M!==null&&M.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(he,_e),De=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,De&&We.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&He.beginShadows();let i=E.state.shadowsArray;if(Ue.render(i,e,t),be===!0&&He.endShadows(),(r&&k.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}De&&We.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(T,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),De&&We.render(e),mt(T,e,t)}I!==null&&F===0&&(K.updateMultisampleRenderTarget(I),K.updateRenderTargetMipmap(I)),r&&k.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),Ye.resetDefaultState(),oe=-1,se=null,O.pop(),O.length>0?(E=O[O.length-1],K.setTextureUnits(E.state.textureUnits),be===!0&&He.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,M!==null&&M.renderEnd()};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(V)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Le.update(e),a=e.material;a.visible&&T.push(e,i,a,n,we.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(V))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&T.push(e,i,c,n,we.z,s,t)}}else a.visible&&T.push(e,i,a,n,we.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),be===!0&&He.setGlobalState(A.clippingPlanes,n),r&&W.viewport(L.copy(r)),i.length>0&&gt(i,t,n),a.length>0&&gt(a,t,n),o.length>0&&gt(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=U.has(`EXT_color_buffer_half_float`)||U.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new ft(1,1,{generateMipmaps:!0,type:e?ie:Pe,minFilter:ne,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||L;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(de),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),De&&We.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),be===!0&&He.setGlobalState(A.clippingPlanes,r),gt(e,n,r),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),U.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,_t(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(de,fe),d!==void 0&&(r.viewport=d),A.toneMapping=u}function gt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&_t(o,t,n,s,l,c)}}function _t(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function vt(e,t,n){t.isScene!==!0&&(t=Ee);let r=G.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ne.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,nt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Re.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,A),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),St(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function yt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=_i.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Dt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ne.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=E.state.lights;if(be===!0&&(xe===!0||e!==se)){let t=e===se&&r.id===oe;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=vt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(W.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==oe&&(oe=r.id,C=!0),v.needsLights){let e=Ct(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||se!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(H,`projectionMatrix`,e.projectionMatrix),T.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(H,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&T.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(H,`sunShadowMap`,y.state.sunShadowMap,K),y.state.directionalShadowMap.length>0&&T.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&T.setValue(H,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&T.setValue(H,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){T.setOptional(H,i,`bindMatrix`),T.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(H,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(T.setOptional(H,i,`batchingTexture`),T.setValue(H,`batchingTexture`,i._matricesTexture,K),T.setOptional(H,i,`batchingIdTexture`),T.setValue(H,`batchingIdTexture`,i._indirectTexture,K),T.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(H,`batchingColorTexture`,i._colorsTexture,K));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Ge.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Ra()),C){if(T.setValue(H,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&Tt(D,w),a&&r.fog===!0&&ze.refreshFogUniforms(D,a),ze.refreshMaterialUniforms(D,r,me,z,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}_i.upload(H,yt(v),D,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(_i.upload(H,yt(v),D,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(H,`center`,i.center),T.setValue(H,`modelViewMatrix`,i.modelViewMatrix),T.setValue(H,`normalMatrix`,i.normalMatrix),T.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Xe.update(n,x),Xe.bind(n,x)}}return x}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,re=t,F=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),L.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,W.viewport(L),W.scissor(le),W.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,L.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else L.copy(ve).multiplyScalar(me).floor(),le.copy(B).multiplyScalar(me).floor(),ue=ye;if(n!==0&&(r=ee),W.bindFramebuffer(H.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(L),W.scissor(le),W.setScissorTest(ue),i){let r=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Ot(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=I===null?null:G.get(I).__webglFramebuffer;W.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=I===null?null:G.get(I).__webglFramebuffer;W.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cn(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=H.TEXTURE_2D),W.activeTexture(H.TEXTURE0),W.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(H.UNPACK_ROW_LENGTH),b=W.getParameter(H.UNPACK_IMAGE_HEIGHT),x=W.getParameter(H.UNPACK_SKIP_PIXELS),S=W.getParameter(H.UNPACK_SKIP_ROWS),C=W.getParameter(H.UNPACK_SKIP_IMAGES);W.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(H.UNPACK_SKIP_PIXELS,l),W.pixelStorei(H.UNPACK_SKIP_ROWS,u),W.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);W.bindFramebuffer(H.READ_FRAMEBUFFER,null),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(H.READ_FRAMEBUFFER,N),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);W.bindFramebuffer(H.READ_FRAMEBUFFER,null),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(H.UNPACK_ROW_LENGTH,y),W.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(H.UNPACK_SKIP_PIXELS,x),W.pixelStorei(H.UNPACK_SKIP_ROWS,S),W.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){re=0,F=0,I=null,W.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ce}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}};function Ba(e){let{store:t,viewer:n,engine:r}=e,i=()=>({...t.exportSettings,vehiclePreviewClip:n.playing?.id}),a=J(`#export-panel`),o=J(`#export-summary-text`),s=J(`#export-go`);J(`#export-summary`).addEventListener(`click`,()=>{a.hidden=!a.hidden,l()});let c=null;function l(){let n=t.current;if(!n)return;let r=Ee(n,i());if(o.textContent=r.summary,s.dataset.label=`⬇ ${r.download}`,c||(s.textContent=s.dataset.label),s.title=`Download ${r.download}`,u(),a.hidden)return;let l=t.exportSettings,f=t.params,p=t.set.bind(t),m=t.setExport.bind(t),h=e=>Y(`div`,{className:`xp-h`,textContent:e}),g=(e,t,n,r,i={})=>{let a=Y(`button`,{className:`seg`+(e===t?` on`:``),textContent:n,...i});return a.addEventListener(`click`,()=>r(e)),a},_=(e,t,n)=>{let r=Y(`input`,{type:`checkbox`,checked:t});return r.addEventListener(`change`,()=>n(r.checked)),Y(`label`,{className:`acc`},r,e)},v=(e,t,n)=>{let r=Y(`select`);for(let[t,n]of e)r.append(new Option(n,t));return r.value=t,r.addEventListener(`change`,()=>n(r.value)),r},y=[],b=Y(`button`,{className:`xp-close`,textContent:`✕`,title:`Close`});b.addEventListener(`click`,()=>{a.hidden=!0}),y.push(Y(`div`,{className:`xp-title`},Y(`span`,{textContent:`Export`}),b)),y.push(h(`1 · What to export`));let x=Y(`div`,{className:`xp-cards`});for(let e of[`static`,`rigged`,`animated`]){let t=Y(`button`,{className:`xp-card`+(r.settings.mode===e?` on`:``)},Y(`b`,{textContent:be[e].title}),Y(`span`,{textContent:be[e].blurb}));t.addEventListener(`click`,()=>m({mode:e})),x.append(t)}if(y.push(x),l.mode!==`static`&&(y.push(h(`2 · Skeleton`)),y.push(Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:`Skeleton`}),v([`game`,`game_lite`,`full`].map(e=>[e,St[e]]),f.rig===`none`?`game`:f.rig,e=>p({rig:e})))),y.push(Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:`Rest pose`}),v([[`A`,`A-pose (natural)`],[`T`,`T-pose (Mixamo / Unity Humanoid)`]],f.restPose,e=>p({restPose:e})))),y.push(_(`Facial bones (jaw + eyes)`,f.faceBones,e=>p({faceBones:e}))),y.push(_(`Facial blend shapes (expressions, blinking)`,f.faceShapes,e=>p({faceShapes:e}))),f.faceShapes&&y.push(_(`Speech mouth shapes (visemes, ~0.7 MB)`,f.speechShapes,e=>p({speechShapes:e}))),n.rig&&y.push(Y(`div`,{className:`rig-status`,textContent:`✓ Auto-rigged: ${n.rig.bones.length} bones · ${n.rig.restPose}-pose bind · 4 weights per vertex`}))),l.mode===`animated`){y.push(h(`3 · Animations`));let t=Y(`button`,{className:`mini`,textContent:`All`});t.addEventListener(`click`,()=>m({clips:ln.map(e=>e.id)}));let n=Y(`button`,{className:`mini`,textContent:`None`});n.addEventListener(`click`,()=>m({clips:[]})),y.push(Y(`div`,{className:`xp-row`},Y(`span`,{className:`hint`,textContent:`${l.clips.length} of ${ln.length} selected`}),t,n));for(let t of[...new Set(ln.map(e=>e.category))]){let n=Y(`div`,{className:`xp-clips`});for(let r of ln.filter(e=>e.category===t)){let t=l.clips.includes(r.id),i=Y(`input`,{type:`checkbox`,checked:t});i.addEventListener(`change`,()=>m({clips:t?l.clips.filter(e=>e!==r.id):[...l.clips,r.id]}));let a=Y(`button`,{className:`mini`,textContent:`▶`,title:`Preview ${r.name}`});a.addEventListener(`click`,()=>e.playClip(r.id)),n.append(Y(`label`,{className:`xp-clip`},i,Y(`span`,{textContent:r.name}),Y(`small`,{textContent:`${r.duration.toFixed(1)}s ${r.loop?`↻`:``}`}),a))}let r=ln.filter(e=>e.category===t).map(e=>e.id),i=r.every(e=>l.clips.includes(e)),a=Y(`button`,{className:`xp-cat`,textContent:`${t} ${i?`☑`:`☐`}`,title:i?`Deselect all ${t}`:`Select all ${t}`});a.addEventListener(`click`,()=>m({clips:i?l.clips.filter(e=>!r.includes(e)):[...new Set([...l.clips,...r])]})),y.push(a,n)}y.push(Y(`div`,{className:`xp-row`},g(`embedded`,l.packaging,`One file, all clips inside`,e=>m({packaging:e})),g(`separate`,l.packaging,`Zip: one file per clip`,e=>m({packaging:e})))),l.packaging===`separate`&&y.push(_(`Include the mesh in every clip file (bigger; off = skeleton + animation only)`,l.clipMesh,e=>m({clipMesh:e}))),y.push(_(`Root motion (walk / run / strafe travel instead of playing in place)`,l.rootMotion,e=>m({rootMotion:e}))),y.push(_(`Mark looping clips in their names ("Walk-loop", auto-loops in Godot)`,l.loopSuffix,e=>m({loopSuffix:e})))}y.push(h(`${l.mode===`static`?`2`:l.mode===`rigged`?`3`:`4`} · Format`)),y.push(Y(`div`,{className:`xp-row`},g(`glb`,l.format,`GLB`,e=>m({format:e}),{title:`glTF binary: web, Godot, Blender, three.js`}),g(`fbx`,l.format,`FBX`,e=>m({format:e}),{title:`Unity, Unreal, Maya, 3ds Max, Blender`}),g(`obj`,l.format,`OBJ`,e=>m({format:e}),{title:l.mode===`static`?`Wavefront OBJ + textures (static)`:`OBJ cannot store a rig or animations`,disabled:l.mode!==`static`}),g(`all`,l.format,`All formats`,e=>m({format:e}),{title:`Every format in one zip`}))),n.weapon&&(y.push(h(`Weapon`)),y.push(Y(`div`,{className:`xp-row`},g(`held`,l.weaponFile,`In the hand (one file)`,e=>m({weaponFile:e}),{title:`Weapon is part of the character mesh, skinned to the WeaponR bone`}),g(`separate`,l.weaponFile,`Separate prop file`,e=>m({weaponFile:e}),{title:`Character without the weapon + the weapon as its own file, to attach to WeaponR in your engine`})))),n.params.vehicle!==`none`&&y.push(_(`Include fitted vehicle props as separate files`,l.vehicleFile!==!1,e=>m({vehicleFile:e}))),y.push(h(`You will download`));let S=Y(`ul`,{className:`xp-files`});for(let e of r.files)S.append(Y(`li`,{className:e.kind===`meta`?`meta`:``},Y(`code`,{textContent:e.path}),Y(`span`,{textContent:e.desc})));y.push(Y(`div`,{className:`xp-download`},Y(`b`,{textContent:r.download}),Y(`span`,{className:`hint`,textContent:r.zipped?`zip with ${r.files.length} items`:`single file`})),S);for(let e of r.notes)y.push(Y(`div`,{className:`xp-note`,textContent:`ⓘ ${e}`}));let C=Y(`button`,{className:`primary xp-go`,textContent:`⬇ Download ${r.download}`});C.addEventListener(`click`,d),y.push(C),a.replaceChildren(...y),u()}function u(){let e=[s,...a.querySelectorAll(`.xp-go`)];for(let t of e){if(c&&!t.dataset.label&&(t.dataset.label=t.textContent??``),t.classList.toggle(`busy`,!!c&&!c.done&&!c.failed),t.classList.toggle(`done`,!!c?.done),t.classList.toggle(`failed`,!!c?.failed),t.disabled=!!c&&!c.done&&!c.failed,t.style.setProperty(`--p`,`${Math.round((c?.frac??0)*100)}%`),!c){t.dataset.label&&(t.textContent=t.dataset.label);continue}let e=c.done?`✓`:c.failed?`!`:``;t.replaceChildren(e?Y(`span`,{className:`ico`,textContent:e}):Y(`span`,{className:`spin`}),Y(`span`,{className:`lbl`,textContent:c.label}))}}async function d(){if(t.current&&(!c||c.done||c.failed)){c={label:`Preparing…`,frac:0},u();try{await e.whenIdle();let a=i(),o=Ee(t.current,a).zipped?await n.snapshot():void 0,s=await r.export(a,o,(e,t)=>{c={label:`${e}…`,frac:t??c.frac},u()});c={label:`Saved ${s.name}`,frac:1,done:!0},u();let l=URL.createObjectURL(new Blob([s.data],{type:s.mime})),d=Y(`a`,{href:l,download:s.name});document.body.append(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(l),5e3)}catch(e){c={label:`Export failed: ${e.message}`,frac:0,failed:!0},u()}setTimeout(()=>{c=null,u()},c?.failed?4e3:1800)}}return s.addEventListener(`click`,d),t.on(`export`,l),t.on(`character`,l),{open:()=>{a.hidden=!1,l()}}}function Va(){let e=J(`#status`),t=J(`#status-text`),n=J(`#busy-bar`),r=0,i=0,a=!1,o=()=>{i=performance.now(),e.classList.add(`show`),n.classList.add(`show`)};return{start(n){t.textContent=n,!a&&(a=!0,clearTimeout(r),e.classList.contains(`show`)||(r=window.setTimeout(o,160)))},stage(e){t.textContent!==e&&(t.textContent=e,t.classList.remove(`swap`),t.offsetWidth,t.classList.add(`swap`))},end(){a=!1,clearTimeout(r);let t=e.classList.contains(`show`)?Math.max(0,350-(performance.now()-i)):0;r=window.setTimeout(()=>{a||(e.classList.remove(`show`),n.classList.remove(`show`))},t)}}}function Ha(e){let{store:t,engine:n,viewer:r,cat:i}=e,a=Va(),o=!1,s=!1,c=[];async function l(){for(o=!0,a.start(`Updating…`);s;){s=!1;let e=t.params,o=performance.now(),c;try{c=await n.build(e,e=>{a.stage(`${e}…`),t.current||(J(`#loading-text`).textContent=`${e}…`)})}catch(e){console.error(e),a.stage(`Failed: ${e.message}`),t.current||(J(`#loading-text`).textContent=`Could not build the character: ${e.message}`);continue}r.show(c),J(`#loading`).hidden=!0;let l=performance.now()-o,u=e.skin===`auto`?` · skin: ${b(e,i.skins).name}`:``;J(`#stats`).textContent=`${(c.height*100).toFixed(0)} cm · ${Vt(e.age).toFixed(0)} yrs · ${ee(c.mesh).toLocaleString()} tris · ${c.mesh.materials.length} materials · ${l.toFixed(0)} ms${u}`,t.setCharacter(c,e,l)}o=!1,a.end(),c.forEach(e=>e()),c=[]}let u=()=>{s=!0,o||l()};return t.on(`params`,u),{regenerate:u,whenIdle:()=>o?new Promise(e=>c.push(e)):Promise.resolve()}}var Ua={color:{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`},accentColor:{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`},seatColor:{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`},finish:{type:`string`,enum:f},variant:{type:`string`,enum:ut}},Wa=(e,t)=>({type:`number`,minimum:e,maximum:t}),Q=e=>({type:`string`,enum:[...new Set(e)]});function Ga(e){let t={};for(let[e,n]of Object.entries(ot))t[e]=typeof n==`number`?Wa(0,1):typeof n==`boolean`?{type:`boolean`}:typeof n==`string`?{type:`string`,maxLength:80}:{type:`object`};t.seed={type:`integer`,minimum:0,maximum:1e9},t.age=Wa(Jt(12),1),t.ageYears={...Wa(12,90),description:`Human years; use instead of normalized age, never both.`};for(let e of[`skinTint`,`hairTint`,`hairColor`,`outfitTint`,`beardColor`,`tattooInk`])t[e]={type:`string`,pattern:`^#[a-fA-F0-9]{6}$`};let n=t=>e[t].map(e=>e.id),r=e=>G.filter(t=>t.slot===e).map(e=>e.id);return Object.assign(t,{skin:Q([`auto`,...n(`skins`)]),eyes:Q(n(`eyes`)),eyebrows:Q([`none`,...n(`eyebrows`)]),eyelashes:Q([`none`,...n(`eyelashes`)]),hair:Q([`none`,...n(`hair`),...on.map(e=>e.id)]),outfit:Q([`none`,...n(`outfits`),...Mt.map(e=>e.id)]),top:Q([`none`,...r(`top`)]),jacket:Q([`none`,...r(`jacket`)]),bottom:Q([`none`,...r(`bottom`)]),shoes:Q([`none`,`sandals`,`combat_boots`,`flipflops`,...n(`shoes`),...r(`feet`)]),hat:Q([`none`,...n(`hats`),...r(`hat`)]),detail:Q(Re),rig:Q([`none`,`game`,`game_lite`,`full`]),restPose:Q([`A`,`T`]),weapon:Q(nn),carry:Q(v),vehicle:Q(ye),expression:Q(qe),facialHair:Q(Fe),earrings:Q(rt),earringMetal:Q([`gold`,`silver`]),teeth:Q([`none`,...n(`teeth`)]),accessories:{type:`array`},tattoos:{type:`array`},modifiers:{type:`object`},garmentStyles:{type:`object`}}),t}var Ka=e=>!!e&&typeof e==`object`&&!Array.isArray(e);function qa(e,t,n){if(t.type===`number`||t.type===`integer`){if(typeof e!=`number`||!Number.isFinite(e)||t.type===`integer`&&!Number.isInteger(e)||e<(t.minimum??-1/0)||e>(t.maximum??1/0))throw Error(`${n}: use ${t.type===`integer`?`an integer`:`a number`} from ${t.minimum} to ${t.maximum}.`)}else if(t.type===`string`){if(typeof e!=`string`||t.maxLength!==void 0&&e.length>t.maxLength||t.enum&&!t.enum.includes(e)||t.pattern&&!new RegExp(t.pattern).test(e))throw Error(`${n}: use ${t.enum?`an exact ID from the guide`:t.pattern?`a #RRGGBB colour`:`a string of up to 80 characters`}.`)}else if(t.type===`boolean`){if(typeof e!=`boolean`)throw Error(`${n}: use true or false.`)}else if(t.type===`array`){if(!Array.isArray(e))throw Error(`${n}: use an array.`)}else if(!Ka(e))throw Error(`${n}: use an object.`)}function Ja(e){let t=new Map(e.sliders.flatMap(e=>e.sliders.map(e=>[e.id,{label:e.label,minimum:e.bipolar?-1:0,maximum:1}])));for(let e of Object.values(Tt))for(let n of Object.keys(e.modifiers??{}))t.has(n)||t.set(n,{label:n,minimum:-1,maximum:1});return t}function Ya(e,t,n=ot){if(e.length>1e5)throw Error(`Use character JSON smaller than 100 KB.`);let r;try{r=JSON.parse(e.trim().replace(/^```(?:json)?\s*\n([\s\S]*?)\n```$/i,`$1`))}catch{throw Error(`Paste a complete JSON object, without surrounding explanation.`)}if(!Ka(r))throw Error(`Use an Ara character JSON object.`);let i,a=structuredClone(n);if(`kind`in r){if(r.kind!==`ara-character`||r.version!==1)throw Error(`Use ara-character version 1. Studio film JSON belongs in Ara Studio.`);for(let e of Object.keys(r))if(![`kind`,`version`,`preset`,`params`].includes(e))throw Error(`Unsupported character field: ${e}.`);if(`preset`in r){if(typeof r.preset!=`string`||!Object.hasOwn(Tt,r.preset))throw Error(`Choose an exact character preset from the guide.`);a={...a,...structuredClone(Tt[r.preset]),name:r.preset}}if(r.params===void 0&&!(`preset`in r))throw Error(`Provide a preset or params.`);if(r.params!==void 0&&!Ka(r.params))throw Error(`params must be an object.`);i=r.params??{}}else i=r;let o=Ga(t);for(let[e,t]of Object.entries(i)){if(!Object.hasOwn(o,e))throw Error(`Unknown character parameter: ${e}.`);qa(t,o[e],e)}if(`age`in i&&`ageYears`in i)throw Error(`Use either ageYears or age, not both.`);for(let[e,t,n]of[[`accessories`,G.filter(e=>e.slot===`acc`).map(e=>e.id),40],[`tattoos`,kt,20]])if(e in i){let r=i[e];if(r.length>n||new Set(r).size!==r.length||r.some(e=>typeof e!=`string`||!t.includes(e)))throw Error(`${e}: use available IDs from the guide.`)}if(Ka(i.modifiers)){let e=Ja(t);if(Object.keys(i.modifiers).length>400)throw Error(`Use at most 400 detail sliders.`);for(let[t,n]of Object.entries(i.modifiers)){let r=e.get(t);if(!r)throw Error(`Unknown detail slider: ${t}.`);qa(n,Wa(r.minimum,1),`modifiers.${t}`)}}if(Ka(i.vehicleStyle))for(let[e,t]of Object.entries(i.vehicleStyle)){if(!Object.hasOwn(Ua,e))throw Error(`Unsupported vehicle style: ${e}.`);qa(t,Ua[e],`vehicleStyle.${e}`)}if(Ka(i.garmentStyles)){let e=new Map([...G,...Mt].map(e=>[e.id,e]));for(let[t,n]of Object.entries(re))e.set(t,n);for(let t of Object.values(Tt))for(let n of Object.keys(t.garmentStyles??{}))e.has(n)||e.set(n,{patterns:me});if(Object.keys(i.garmentStyles).length>60)throw Error(`Use at most 60 garment style overrides.`);for(let[t,n]of Object.entries(i.garmentStyles)){let r=e.get(t);if(!r||!Ka(n))throw Error(`Unknown garment style: ${t}.`);for(let[e,i]of Object.entries(n)){if(![`pattern`,`color`,`color2`].includes(e))throw Error(`Unsupported style field: ${e}.`);qa(i,e===`pattern`?Q(r.patterns??me):{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`},`garmentStyles.${t}.${e}`)}}}let s={...a,...i,...`ageYears`in i?{age:Jt(i.ageYears)}:{}};return delete s.ageYears,`vehicle`in i&&!(`vehicleStyle`in i)&&(s.vehicleStyle=ue(i.vehicle,a.vehicleStyle)),ht(s)}function Xa(){return{kind:`ara-character`,version:1,preset:`The Adventurer`,params:{name:`Desert explorer`,ageYears:34,hair:`cornrows`,carry:`backpack`,weapon:`none`,expression:`determined`,garmentStyles:{tank_top:{pattern:`solid`,color:`#436b67`},cargo_shorts:{pattern:`khaki`,color:`#9c875f`}}}}}function Za(e){let t={...Ga(e)};return t.vehicleStyle={type:`object`,additionalProperties:!1,properties:Ua},t.accessories={type:`array`,maxItems:40,uniqueItems:!0,items:Q(G.filter(e=>e.slot===`acc`).map(e=>e.id))},t.tattoos={type:`array`,maxItems:20,uniqueItems:!0,items:Q(kt)},t.modifiers={type:`object`,additionalProperties:!1,maxProperties:400,properties:Object.fromEntries([...Ja(e)].map(([e,t])=>[e,{type:`number`,minimum:t.minimum,maximum:t.maximum,description:t.label}]))},t.garmentStyles={type:`object`,maxProperties:60,propertyNames:{enum:[...new Set([...G.map(e=>e.id),...Mt.map(e=>e.id),...Object.keys(re),...Object.values(Tt).flatMap(e=>Object.keys(e.garmentStyles??{}))])]},additionalProperties:{type:`object`,additionalProperties:!1,properties:{pattern:Q(me),color:{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`},color2:{type:`string`,pattern:`^#[a-fA-F0-9]{6}$`}}}},{$schema:`https://json-schema.org/draft/2020-12/schema`,title:`Ara character input`,type:`object`,additionalProperties:!1,required:[`kind`,`version`],anyOf:[{required:[`preset`]},{required:[`params`]}],properties:{kind:{const:`ara-character`},version:{const:1},preset:Q(Object.keys(Tt)),params:{type:`object`,additionalProperties:!1,properties:t,not:{required:[`age`,`ageYears`]}}}}}function Qa(e){let t=e=>JSON.stringify(e,null,2);return`CAPABILITIES
All body controls are normalized 0..1: gender 0 female / 1 male; muscle, weight, height, proportions, breastSize and breastFirmness. Height is a body proportion, not centimetres. Use ageYears 12..90 for age in years, OR normalized age (never both); age 0.5 is 25 years. african/asian/caucasian are blended ancestry weights; use values summing to 1. seed is an integer 0..1e9. Facial and body detail sliders use exact modifiers IDs below, range -1..1 if bipolar, otherwise 0..1.
Choose skin/eye/brow/lash/hair assets, procedural hair and facial hair, tattoos, earrings, expressions, teeth and tongue. Hex colours multiply textures: skinTint/hairTint/outfitTint darken their source; procedural hair uses hairColor. You cannot lighten a dark texture with a tint. Existing age-dependent clothing and tattoo rules still apply (tattoos and removing underwear are adult-only).
Clothing: choose an outfit ID or outfit set; choose outfit none to combine top, jacket, bottom, underwear and accessories. Outfit sets supply their own top/bottom/jacket; standalone jacket applies with separate pieces or a mesh outfit. Garment styles use garment/set/bag IDs and only the patterns offered for that item, with optional color/color2 #RRGGBB overrides. Omit maps to keep preset styling; if you supply a map include all desired overrides. Shoes and hat are independent. Colour/pattern overrides affect procedural pieces, sets and bags. Legacy mesh-style metadata from presets is retained, but does not recolour imported textures; use outfitTint for imported clothing. weapon/carry equip fitted props; vehicle accepts none, auto (match animation), bicycle, car (classic convertible), sports_car (enclosed modern coupe), suv, motorcycle, horse, canoe, kayak, rowboat, motorboat or helicopter (chopper). vehicleStyle uses color (body/coat), accentColor (trim/mane), seatColor (upholstery/tack), finish (matte/satin/gloss) and variant (classic/sport). Use a rig for fitting. The vehicle appears only during its matching riding/driving animation and is exported as a separate fitted prop; animated GLB/FBX exports include its wheels/controls/paddles/tack. Static exports keep the rider in the bind pose; apply the matching rider clip to seat them. Vehicle colours and style preserve all rider contact points. The coupe uses a rounded two-door cabin, solid rear pillars, split grille, sculpted bodywork and alloy wheels. The SUV uses an upright five-door cabin, separate rectangular windows, round LED headlights, flared arches, running boards and a rear spare wheel. The coupe factory appearance is teal gloss with sport trim; the upright SUV factory is red gloss with dark trim; specify vehicleStyle for other colours. Boarding/alighting use explicit matching actions; there is no automatic driving navigation. The character builder does not coordinate multiple occupants; Studio shares vehicles with its own vehicleId/vehicleSeat film fields. Equipped pistol, rifle, sword or knife enable mounted wielding on riding/driving clips, preserving the seat and gait. The left hand keeps the wheel, bar, reins or helicopter collective; paddle strokes pause while armed. Entry/exit hide the weapon to free both hands. Builder previews and character exports use the default wield pose. Studio can additionally aim, fire guns or hide the weapon per action with its film fields; do not put weaponPose/weaponYaw into character params. Matching clips: ${t(le)}. sports_car and suv also support drive_car and sit_passenger. The motorboat has two aft passenger seats. The helicopter has a rounded four-seat cabin, landing skids, working doors and animated main/tail rotors. Use fly_helicopter for the pilot pose, board_helicopter/alight_helicopter for fitted entry/exit. Studio additionally supports shared passengers and flight height; those film controls are not character params. Do not use scene, timeline, subtitle or camera fields here.
Carry parcel adds a cardboard box with packing tape and a shipping label. Use a rig (game/game_lite/full) and weapon none. It is held with two hands during ordinary walk, run, backwards/slouch/model walk, strafes, turns, idle, talk and laugh, as well as the dedicated pickup/carry/put-down performances. The original gait and speed are preserved. Other performances keep their original arm poses. The parcel mesh and its animation bone are included in exports. parcel styles accept solid with color (cardboard) and color2 (tape).
Output settings: detail low/medium/high; rig none/game/game_lite/full; restPose A/T; faceBones, animations, faceShapes and speechShapes booleans. These configure character construction/export capabilities, not a movie or file download. Exports are chosen manually in the builder. Supported parameters are all listed in the schema; unknown keys or invalid asset IDs are rejected before building. No image-to-avatar, custom meshes, arbitrary clothing, external URLs, sounds or scene generation.

DEFAULT CHARACTER PARAMETERS
${t(ot)}

PRESETS AND THEIR SETTINGS
${t(Tt)}

INSTALLED ASSET CATALOGUE
${t(Object.fromEntries([`skins`,`eyes`,`eyebrows`,`eyelashes`,`hair`,`outfits`,`shoes`,`hats`,`teeth`].map(t=>[t,e[t].map(e=>({id:e.id,name:e.name,tags:e.tags}))])))}

PROCEDURAL HAIR
${t(on)}

GARMENTS AND ALLOWED PATTERNS
${t(G.map(e=>({id:e.id,name:e.label,slot:e.slot,patterns:e.patterns,color:e.color,color2:e.color2})))}

OUTFIT SETS
${t(Mt)}

BAG FINISHES
${t(re)}`}function $a(e,t=``,n){let r=e=>JSON.stringify(e,null,2);return`ARA 3D GEN — CHARACTER LLM ASSIST (version 1)
Create ONE character, not a Studio film. Return only a complete JSON object using kind ara-character and version 1. Choose an optional preset as the base, then override its settings with params. Omitted fields keep the preset values or the listed defaults; arrays and maps replace their base values when supplied. The user will paste or open this JSON in Ara 3D Gen. Do not invent asset IDs, sliders, fields or new geometry. If a request exceeds the available builder, explain and suggest a supported alternative before returning JSON.

USER'S BRIEF
${t.trim()||`[Describe the character you want here.]`}

${Qa(e)}

JSON SCHEMA (also lists equipment, expressions, facial hair, tattoos, earrings and every detail slider)
${r(Za(e))}

VALID EXAMPLE
${r(Xa())}${n?`\n\nCURRENT CHARACTER — use as the starting point for this revision; return complete params to preserve unspecified settings\n${r({kind:`ara-character`,version:1,params:n})}`:``}

Generate the character JSON for the user's brief, using only these capabilities.`}function eo(e,t){let n=0,r=!1,i=!1;for(let a=t;a<e.length;a++){let t=e[a];if(r)i?i=!1:t===`\\`?i=!0:t===`"`&&(r=!1);else if(t===`"`)r=!0;else if(t===`{`)n++;else if(t===`}`&&--n===0)return a+1}return-1}var to=e=>{try{return JSON.parse(e),!0}catch{return!1}};function no(e){let t=e.trim().replace(/^﻿/,``);if(t.startsWith(`{`)&&to(t))return t;let n=[];for(let e of t.matchAll(/```[a-z]*[ \t]*\n([\s\S]*?)\n?```/gi))n.push(e[1].trim());for(let e=t.indexOf(`{`);e>=0;e=t.indexOf(`{`,e+1)){let r=eo(t,e);r>0&&(n.push(t.slice(e,r)),e=r-1)}return n.filter(e=>e.startsWith(`{`)&&to(e)).sort((e,t)=>t.length-e.length)[0]??t}var ro=(e,t)=>e.trim()!==t;function io(e,t){return`Ara rejected that ${t} JSON with this error:\n\n${e}\n\nFix that problem (and anything similar) using only the IDs, fields and ranges in the guide, then return the complete corrected JSON object and nothing else.`}var ao=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function oo(e,t,n){let r=[...new Set(n.map(e=>e.category??`Locations`))];return`<div class="ai-reference-picker" data-r="reference-picker" aria-labelledby="`+e+`-reference-label"><span class="ai-reference-label" id="`+e+`-reference-label">`+ao(t)+`</span><input type="hidden" id="`+e+`-reference" data-r="reference"><div class="ai-reference-selection"><button type="button" data-r="reference-expand" class="ai-reference-expand" aria-label="Expand selected location preview" aria-haspopup="dialog" hidden><img data-r="reference-preview" width="96" height="60" alt="" decoding="async"></button><div><span class="ai-reference-selected-label">Selected location</span><strong data-r="reference-name" aria-live="polite"></strong></div></div><p class="ai-reference-description" data-r="reference-description"></p><div class="ai-reference-filters"><label class="sr-only" for="`+e+`-location-search">Search locations</label><input type="search" id="`+e+`-location-search" data-r="reference-search" placeholder="Search `+n.length+` locations…" autocomplete="off"><label class="sr-only" for="`+e+`-location-category">Location category</label><select id="`+e+`-location-category" data-r="reference-category"><option value="">All categories</option>`+r.map(e=>`<option>`+ao(e)+`</option>`).join(``)+`</select></div><div class="ai-reference-strip-heading"><span>Scroll to browse · Click to expand</span><div><button type="button" data-r="reference-previous" aria-label="Scroll to previous locations">←</button><button type="button" data-r="reference-next" aria-label="Scroll to next locations">→</button></div></div><div class="ai-reference-gallery" id="`+e+`-location-gallery" data-r="reference-gallery" role="region" aria-label="Location thumbnails" tabindex="0">`+n.map(t=>`<button type="button" class="ai-reference-card" data-reference-choice="`+ao(t.id)+`" aria-pressed="false" aria-haspopup="dialog" aria-controls="`+e+`-location-preview" title="Expand `+ao(t.name)+`">`+(t.thumbnail?`<img src="`+ao(t.thumbnail)+`" width="240" height="150" loading="lazy" decoding="async" alt="">`:``)+`<span class="ai-reference-card-category">`+ao(t.category??`Locations`)+`</span><span class="ai-reference-card-name">`+ao(t.name)+`</span><span class="ai-reference-tick" aria-hidden="true">✓</span></button>`).join(``)+`</div><p class="ai-note" data-r="reference-empty" hidden>No matching locations. Try another search or category.</p><p class="ai-reference-count" data-r="reference-count" role="status"></p><dialog class="ai-location-preview" id="`+e+`-location-preview" data-r="reference-viewer" aria-labelledby="`+e+`-location-preview-title"><div class="ai-location-preview-top"><div><span data-r="reference-viewer-category"></span><h2 id="`+e+`-location-preview-title" data-r="reference-viewer-title"></h2></div><button type="button" data-r="reference-viewer-close" aria-label="Close location preview">✕</button></div><img data-r="reference-viewer-image" width="960" height="600" decoding="async" alt=""><p data-r="reference-viewer-description"></p><button type="button" class="ai-btn ai-primary ai-wide" data-r="reference-viewer-use">Use this location</button></dialog></div>`}function so(e,t){let n=e.closest(`[data-r=reference-picker]`),r=e=>n.querySelector(`[data-r=`+e+`]`),i=r(`reference-preview`),a=r(`reference-expand`),o=r(`reference-description`),s=r(`reference-search`),c=r(`reference-category`),l=r(`reference-gallery`),u=r(`reference-viewer`),d=[...n.querySelectorAll(`[data-reference-choice]`)],f=new Map(t.map(e=>[e.id,e])),p;function m(){let n=f.get(e.value);a.hidden=!n?.thumbnail,r(`reference-name`).textContent=n?.name??`Choose a location`,a.setAttribute(`aria-label`,`Expand `+(n?.name??`selected location`)+` preview`),n?.thumbnail&&i.getAttribute(`src`)!==n.thumbnail&&(i.src=n.thumbnail),o.textContent=n?.description??``;let u=s.value.normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLowerCase().trim().split(/\s+/).filter(Boolean),p=0;for(let t of d){let n=f.get(t.dataset.referenceChoice),r=(n.name+` `+n.id+` `+(n.category??``)+` `+(n.tags??``)+` `+(n.description??``)).normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLowerCase();t.hidden=!!c.value&&(n.category??`Locations`)!==c.value||!u.every(e=>r.includes(e)),t.setAttribute(`aria-pressed`,String(n.id===e.value)),t.hidden||p++}r(`reference-empty`).hidden=p>0,l.hidden=!p,r(`reference-count`).textContent=p+` of `+t.length+` locations`}function h(t){if(!t||e.disabled)return;p=t,r(`reference-viewer-title`).textContent=t.name,r(`reference-viewer-category`).textContent=t.category??`Locations`,r(`reference-viewer-description`).textContent=t.description??``;let n=r(`reference-viewer-image`),i=t.preview??t.thumbnail;n.hidden=!i,i&&(n.src=i),n.alt=t.name+` set preview`,u.showModal()}s.addEventListener(`input`,()=>{m(),l.scrollLeft=0}),c.addEventListener(`change`,()=>{m(),l.scrollLeft=0});for(let e of d)e.addEventListener(`click`,()=>h(f.get(e.dataset.referenceChoice)));a.addEventListener(`click`,()=>h(f.get(e.value))),r(`reference-viewer-close`).addEventListener(`click`,()=>u.close()),u.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),u.close())}),u.addEventListener(`cancel`,e=>{e.preventDefault(),e.stopPropagation(),u.close()}),r(`reference-viewer-use`).addEventListener(`click`,()=>{p&&!e.disabled&&(e.value=p.id,e.dispatchEvent(new Event(`change`,{bubbles:!0})),u.close())}),n.closest(`dialog`).addEventListener(`close`,()=>{u.open&&u.close()});let g=e=>l.scrollBy({left:e*l.clientWidth*.8,behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`});return r(`reference-previous`).addEventListener(`click`,()=>g(-1)),r(`reference-next`).addEventListener(`click`,()=>g(1)),l.addEventListener(`keydown`,e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let t=d.filter(e=>!e.hidden),n=t.indexOf(document.activeElement),r=e.key===`Home`?0:e.key===`End`?t.length-1:e.key===`ArrowLeft`?Math.max(0,n-1):e.key===`ArrowRight`?Math.min(t.length-1,n+1):void 0;r!==void 0&&(e.preventDefault(),t[r]?.focus())}),m(),m}var co=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),lo=e=>{try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}},uo=e=>e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}k`:String(e);function fo(e){let t=e.id,n=e.noun,r=n[0].toUpperCase()+n.slice(1),i=e.dialog??document.body.appendChild(document.createElement(`dialog`));i.id||=`${t}-dialog`,i.classList.add(`ai-assist`),i.setAttribute(`aria-labelledby`,`${t}-title`),i.innerHTML=`
    <div class="ai-top"><span class="ai-eyebrow">LLM ASSIST · ${co(e.app)}</span><button class="ai-icon" id="${t}-close" data-r="close" aria-label="Close LLM Assist">✕</button></div>
    <h2 id="${t}-title">${co(e.title)}</h2>
    <p class="ai-intro">${co(e.intro)}</p>
    <div class="ai-grid">
      <section class="ai-col" aria-labelledby="${t}-s1">
        <div class="ai-step"><span class="ai-num">1</span><h3 id="${t}-s1">Describe your ${n}</h3></div>
        <label class="sr-only" for="${t}-brief">Describe your ${n}</label>
        <textarea id="${t}-brief" class="ai-brief" data-r="brief" rows="4" maxlength="6000" placeholder="${co(e.placeholder)}"></textarea>
        <label class="ai-check"><input type="checkbox" id="${t}-context" data-r="context" /><span>${co(e.contextLabel)}</span></label>
        ${e.reference?`${oo(t,e.reference.label,e.reference.choices)}<div class="ai-row"><button class="ai-btn" id="${t}-save-map" data-r="save-reference">Save map .json</button>${e.reference.all?`<button class="ai-link" data-r="save-all-references">All location maps</button>`:``}</div><p class="ai-note">The guide includes this set’s full staging map. Choose the location you want to film.</p>`:``}

        <div class="ai-step"><span class="ai-num">2</span><h3>Get the ${n} JSON</h3></div>
        <div class="ai-pane">
          <ol class="ai-howto">
            <li><b>Copy the guide.</b> It holds your description and everything the assistant needs.</li>
            <li>Paste it into ChatGPT, Claude, Gemini or another assistant. If the chat says it's too long, attach the .txt file instead.</li>
            <li>Copy the assistant's whole reply and press <b>Paste reply</b> on the right.</li>
          </ol>
          <div class="ai-row"><button class="ai-btn ai-primary" id="${t}-copy" data-r="copy">Copy guide</button><button class="ai-btn" id="${t}-download" data-r="save">Save as .txt</button></div>
          <p class="ai-note" id="${t}-copy-status" data-r="copy-status" role="status"></p>
          <details id="${t}-guide-details" data-r="guide-details"><summary>Preview the guide</summary><textarea class="ai-guide" id="${t}-guide" data-r="guide" rows="8" readonly spellcheck="false" aria-label="LLM guide text"></textarea></details>
        </div>
      </section>
      <section class="ai-col ai-review" aria-labelledby="${t}-s3">
        <div class="ai-step"><span class="ai-num">3</span><h3 id="${t}-s3">Review and build</h3></div>
        <div class="ai-row"><button class="ai-btn" id="${t}-paste" data-r="paste">Paste reply</button><button class="ai-btn" id="${t}-open" data-r="open">Open file</button><button class="ai-link" id="${t}-example" data-r="example">Try an example</button></div>
        ${e.prepare?`<p class="ai-note">${co(e.prepare.note)}</p>`:``}
        <label class="sr-only" for="${t}-json">${r} JSON</label>
        <textarea id="${t}-json" class="ai-json" data-r="json" rows="12" spellcheck="false" aria-describedby="${t}-status" placeholder="Paste the assistant's whole reply here. Ara finds the JSON in it."></textarea>
        <div class="ai-result" id="${t}-status" data-r="result" role="status" aria-live="polite"></div>
        <div class="ai-preparation" data-r="preparation" hidden><p class="ai-note" id="${t}-speech-status" data-r="preparation-status" role="status"></p><div class="ai-row"><button class="ai-btn" id="${t}-speech-cancel" data-r="preparation-cancel">Stop generation</button><button class="ai-btn" id="${t}-speech-retry" data-r="preparation-retry" hidden>Retry speech generation</button></div></div>
        <button class="ai-btn ai-primary ai-wide ai-build" id="${t}-create" data-r="build" disabled>Build ${n} <span aria-hidden="true">↗</span></button>
        <p class="ai-note">${co(e.footnote)}</p>
      </section>
    </div>
    <input type="file" id="${t}-file" data-r="file" accept=".json,.txt,application/json,text/plain" hidden />`;let a=e=>i.querySelector(`[data-r="${e}"]`),o=a(`brief`),s=a(`context`),c=a(`guide`),l=a(`json`),u=a(`result`),d=a(`build`),f=a(`file`),p=a(`guide-details`),m,h=``,g=!1,_=!1,v=0,y=!0,b=!1,x=0,S=0,C=``,w=!1,T,E=e.reference?a(`reference`):void 0,D=!1;E&&(E.value=e.reference.current());let O=E?so(E,e.reference.choices):()=>{},k=()=>({brief:o.value,json:l.value,context:s.checked,open:i.open,guideOpen:p.open,...E&&D?{reference:E.value}:{}}),A=()=>{if(clearTimeout(v),e.storageKey)try{localStorage.setItem(e.storageKey,JSON.stringify(k()))}catch{}},j=()=>{clearTimeout(v),v=window.setTimeout(A,250)},M=()=>(y&&(c.value=e.guide(o.value,s.checked,E?.value),y=!1,a(`copy-status`).textContent=`About ${uo(Math.round(c.value.length/4))} tokens. Use a capable model for the best results.`),c.value),ee=0,N=(e=0)=>{y=!0,clearTimeout(ee),i.open&&(e?ee=window.setTimeout(M,e):M())};function te(){if(u.className=`ai-result`,m){let{headline:t,facts:n,warnings:r=[]}=e.describe(m);u.classList.add(`ok`),u.innerHTML=`<p class="ai-result-title"><span aria-hidden="true">${b?`…`:`✓`}</span> ${b?`Preparing dialogue voices`:`Ready to build`}</p><p class="ai-headline">${co(t)}</p>
        <ul class="ai-facts">${n.map(e=>`<li>${co(e)}</li>`).join(``)}</ul>${r.length?`<div class="ai-staging-notes"><b>Staging needs review</b><ul>${r.map(e=>`<li>${co(e)}</li>`).join(``)}</ul><button class="ai-btn" data-r="fix-staging">Copy staging fix request</button></div>`:``}${g?`<p class="ai-note">Found the JSON in the reply and ignored the text around it.</p>`:``}`}else h?(u.classList.add(`error`),u.innerHTML=`<p class="ai-result-title"><span aria-hidden="true">!</span> Needs a fix</p><p class="ai-error-text"></p>
        <div class="ai-row"><button class="ai-btn" data-r="fix">Copy fix request</button></div>
        <p class="ai-note" data-r="fix-status">Send the fix request to your assistant, then paste its new reply here.</p>`,u.querySelector(`.ai-error-text`).textContent=h):u.innerHTML=`<p class="ai-note ai-empty">Your ${n} appears here once there's JSON to check.</p>`;re()}function ne(){ae(),m=void 0,h=``,g=!1;let t=l.value;if(t.trim()){let n=no(t);g=ro(t,n);try{m=e.parse(n)}catch(e){h=e.message}}l.setAttribute(`aria-invalid`,String(!!h)),te()}function P(e){let t=no(e),n=t.startsWith(`{`)?lo(t):e;l.value=n,ne(),g=ro(e,t)&&n!==e,te(),j(),F()}function re(){for(let e of i.querySelectorAll(`button,input,select,textarea`))e.disabled=_;d.disabled=_||b||!m,i.setAttribute(`aria-busy`,String(_||b)),ie()}function ie(){e.prepare&&(a(`preparation`).hidden=!C,a(`preparation-status`).textContent=C,a(`preparation-cancel`).hidden=!b,a(`preparation-retry`).hidden=!w)}function ae(t=``){S++,clearTimeout(x),T?.abort(),T=void 0,b=!1,C=t,w=!!t&&!!m&&!!e.prepare?.needed(m),ie()}function F(){if(!e.prepare||!m||!i.open||!e.prepare.needed(m))return;let t=m,n=++S,r=new AbortController;T=r,b=!0,C=`Preparing dialogue voices automatically…`,w=!1,te(),x=window.setTimeout(async()=>{let i=()=>n===S&&!r.signal.aborted,a=t=>{i()&&(m=t,l.value=e.prepare.write(t,no(l.value)),j(),l.dispatchEvent(new Event(`change`,{bubbles:!0})),te())};try{let n=await e.prepare.run(t,{signal:r.signal,progress:e=>{i()&&(C=e,ie())},updated:a});if(!i())return;a(n),b=!1,T=void 0,C=`Dialogue voices are ready and saved on this device.`,te(),A()}catch(e){if(!i())return;b=!1,T=void 0,w=!0,C=e.message+` Completed voices have been kept. Retry, or build the film and use Sound.`,te()}},300)}a(`preparation-cancel`)?.addEventListener(`click`,()=>{ae(`Speech generation stopped. Completed voices have been kept.`),te(),A()}),a(`preparation-retry`)?.addEventListener(`click`,F),a(`copy`).addEventListener(`click`,async()=>{let e=M(),t=a(`copy-status`);try{await navigator.clipboard.writeText(e),t.textContent=`Guide copied. Paste it into your AI assistant, then bring its reply back here.`}catch{p.open=!0,c.focus(),c.select(),t.textContent=`Guide selected. Press Ctrl/Cmd+C to copy it.`}}),a(`save`).addEventListener(`click`,()=>{let t=URL.createObjectURL(new Blob([M()],{type:`text/plain;charset=utf-8`})),n=document.createElement(`a`);n.href=t,n.download=e.guideFile,n.click(),setTimeout(()=>URL.revokeObjectURL(t),6e4),a(`copy-status`).textContent=`Saved ${e.guideFile}. Attach it to your assistant's chat.`});let I=e=>{let t=URL.createObjectURL(new Blob([e.text],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=e.name,n.click(),setTimeout(()=>URL.revokeObjectURL(t),6e4)};E?.addEventListener(`change`,()=>{D=!0,O(),N(),j()}),e.reference&&(a(`save-reference`).addEventListener(`click`,()=>I(e.reference.file(E.value))),e.reference.all&&a(`save-all-references`).addEventListener(`click`,()=>I({name:e.reference.all.name,text:e.reference.all.text()}))),p.addEventListener(`toggle`,()=>{p.open&&i.open&&M(),j()}),u.addEventListener(`click`,async t=>{let r=t.target.closest(`[data-r]`)?.dataset.r;if(r===`fix`){let e=u.querySelector(`[data-r="fix-status"]`);try{await navigator.clipboard.writeText(io(h,n)),e.textContent=`Fix request copied. Send it in the same chat, then paste the new reply here.`}catch{e.textContent=io(h,n)}}if(r===`fix-staging`&&m){let n=`Revise the film JSON to resolve these spatial-staging findings. Use the selected location map, calculate every transition and validate the entire path. Preserve the rest of the film. Return complete importable JSON.\n\n${(e.describe(m).warnings??[]).join(`
`)}\n\nLOCATION REFERENCE\n${e.revisionContext?.(m)??``}\n\nCURRENT JSON\n${l.value}`;try{await navigator.clipboard.writeText(n),t.target.textContent=`Fix request copied`}catch{c.value=n,p.open=!0,c.focus(),c.select()}}}),a(`paste`).addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e.trim())throw Error(`empty`);P(e)}catch{l.focus(),u.className=`ai-result`,u.innerHTML=`<p class="ai-note">Your browser blocked clipboard access. Press Ctrl/Cmd+V to paste here.</p>`}}),l.addEventListener(`paste`,e=>{let t=e.clipboardData?.getData(`text/plain`),n=!l.value.trim()||l.selectionStart===0&&l.selectionEnd===l.value.length;t&&n&&(e.preventDefault(),P(t))}),l.addEventListener(`input`,()=>{ne(),j(),F()}),a(`open`).addEventListener(`click`,()=>f.click()),f.addEventListener(`change`,async()=>{let e=f.files?.[0];f.value=``,e&&(e.size>2e5?(ae(),l.value=``,h=`Use a file smaller than 200 KB.`,m=void 0,te()):P(await e.text()))}),a(`example`).addEventListener(`click`,()=>P(JSON.stringify(e.example()))),d.addEventListener(`click`,async()=>{if(_||b||(ne(),!m))return;_=!0,re();let t=d.innerHTML;d.textContent=`Building your ${n}…`;try{await e.build(m),i.close()}catch(e){h=e.message,m=void 0,te()}finally{_=!1,d.innerHTML=t,ne(),A()}}),o.addEventListener(`input`,()=>{N(300),j()}),s.addEventListener(`change`,()=>{N(),j()}),o.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),a(`copy`).click())}),l.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),d.click())}),a(`close`).addEventListener(`click`,()=>{_||i.close()}),i.addEventListener(`cancel`,e=>{_&&e.preventDefault()}),i.addEventListener(`close`,()=>{ae(),A()}),window.addEventListener(`pagehide`,()=>{ae(),A()});async function oe(){await e.canOpen()&&(E&&!D&&(E.value=e.reference.current()),O(),y=!0,ne(),i.open||i.showModal(),M(),F(),(o.value.trim()?m?d:l:o).focus(),A())}function se(t){o.value=typeof t.brief==`string`?t.brief.slice(0,6e3):``,l.value=typeof t.json==`string`?t.json.slice(0,2e5):``,s.checked=t.context===!0,p.open=t.guideOpen===!0,E&&e.reference.choices.some(e=>e.id===t.reference)&&(E.value=t.reference,D=!0),O(),y=!0,ne()}if(e.storageKey)try{let t=JSON.parse(localStorage.getItem(e.storageKey)||`null`);se(t&&typeof t==`object`?t:{}),t?.open===!0&&oe()}catch{se({})}else se({});return{dialog:i,open:oe,state:k,restore:se}}var po=e=>e.replace(/_/g,` `);function mo(e){let t=e.gender>=.5?`man`:`woman`,n=Math.round(Vt(e.age)),r=e.outfit===`none`?[e.top,e.jacket,e.bottom].filter(e=>e!==`none`).join(` + `)||`no clothing`:e.outfit;return{headline:`${e.name||`Unnamed character`} · ${n}-year-old ${t}`,facts:[po(r),e.hair===`none`?`no hair`:`${po(e.hair)} hair`,...e.facialHair&&e.facialHair!==`none`?[po(e.facialHair)]:[],...e.carry===`none`?[]:[po(e.carry)],...e.weapon===`none`?[]:[po(e.weapon)],`${e.detail} detail`,`${e.rig===`none`?`no`:po(e.rig)} rig`]}}function ho(e){let t=document.body.appendChild(document.createElement(`dialog`));t.id=`character-assist-dialog`;let n=fo({dialog:t,id:`ca`,app:`CHARACTER BUILDER`,noun:`character`,title:`Describe your character`,intro:`Describe someone in your own words. An AI assistant turns it into a character you can keep editing here.`,placeholder:`A confident explorer in her thirties, with cornrows, cargo shorts and a backpack.`,contextLabel:`Start from my current character (to revise it)`,guideFile:`ara-character-llm-guide.txt`,guide:(t,n)=>$a(e.cat,t,n?e.store.params:void 0),parse:t=>Ya(t,e.cat),describe:mo,example:Xa,async build(t){let n=structuredClone(e.store.params);if(await e.whenIdle(),e.store.replaceAll(t),await e.whenIdle(),JSON.stringify(e.store.current?.params)!==JSON.stringify(t))throw e.store.replaceAll(n),await e.whenIdle(),Error(`The character could not be built. Your previous character has been restored.`);let r=new URL(location.href),i=new URLSearchParams(r.hash.slice(1));i.delete(`c`),i.delete(`preset`),i.delete(`detail`),r.hash=i.toString(),window.history.replaceState(window.history.state,``,r)},canOpen:async()=>(await e.whenIdle(),!0),footnote:`Characters only; for scenes and films, use LLM Assist in Ara Studio. Undo restores your previous character.`,storageKey:`ara.character.assist.v1`});J(`#character-assist-btn`).addEventListener(`click`,()=>void n.open())}function go(e){return JSON.stringify({kind:`ara-character`,version:1,params:e},null,2)}function _o(e,t){return Ya(e,t,ot)}function vo(e){return(e.trim().replace(/[^a-zA-Z0-9_-]+/g,`-`).replace(/^-|-$/g,``)||`character`)+`.ara-character.json`}function yo(e){let{store:t,cat:n,viewer:r}=e,i=J(`#character-settings-file`),a=J(`#character-file-status`);J(`#save-character`).addEventListener(`click`,async()=>{await e.whenIdle();let n=URL.createObjectURL(new Blob([go(t.params)],{type:`application/json`})),r=document.createElement(`a`);r.href=n,r.download=vo(t.params.name),r.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4),a.textContent=`Character settings saved. Import this file to add them to Studio.`}),J(`#open-character`).addEventListener(`click`,()=>i.click()),i.addEventListener(`change`,async()=>{let e=i.files?.[0];if(e)try{if(e.size>1e5)throw Error(`Use a character JSON smaller than 100 KB.`);let r=_o(await e.text(),n);t.replaceAll(r),a.textContent=`Opened ${r.name||`your character`}.`}catch(e){a.textContent=e.message}finally{i.value=``}});let o=J(`#preset`);o.append(new Option(`Presets…`,``));for(let e of Object.keys(Tt))o.append(new Option(e,e));o.addEventListener(`change`,()=>{let e=o.value;e&&(o.value=``,t.replaceAll({...ot,...Tt[e],name:e,detail:t.params.detail}))});let s=J(`#name`),c=J(`#seed`);t.on(`sync`,()=>{s.value=t.params.name,c.value=String(t.params.seed)}),s.addEventListener(`input`,()=>t.setQuiet({name:s.value}));let l=e=>t.replaceAll({...We(e,n),detail:t.params.detail,name:`character_${e}`});J(`#randomize`).addEventListener(`click`,()=>l(Math.floor(Math.random()*1e6))),c.addEventListener(`change`,()=>l(Number(c.value)||0)),J(`#wireframe`).addEventListener(`change`,e=>r.setWireframe(e.target.checked)),J(`#skeleton`).addEventListener(`change`,e=>r.setSkeleton(e.target.checked)),J(`#face`).addEventListener(`change`,e=>r.focusFace(e.target.checked))}function bo(e){let t=e=>JSON.stringify(e),n=t(e.params),r=0,i=[],a=[],o=[],s=()=>o.forEach(e=>e()),c=()=>{clearTimeout(r);let o=t(e.params);o!==n&&(i.push(n),i.length>100&&i.shift(),n=o,a.length=0,s())};e.on(`params`,()=>{clearTimeout(r),r=window.setTimeout(c,450)});let l=(t,r)=>{c();let i=t.pop();i!==void 0&&(r.push(n),n=i,e.replaceAll(JSON.parse(i)),s())},u={undo:()=>l(i,a),redo:()=>l(a,i),canUndo:()=>i.length>0||t(e.params)!==n,canRedo:()=>a.length>0,onChange:e=>void o.push(e)};return window.addEventListener(`keydown`,e=>{if(e.target.closest(`dialog, input[type=text], input[type=number], textarea, select, [contenteditable]`))return;let t=e.metaKey||e.ctrlKey,n=e.key.toLowerCase();t&&n===`z`?(e.preventDefault(),e.shiftKey?u.redo():u.undo()):t&&n===`y`&&(e.preventDefault(),u.redo())}),u}var xo=e=>e.gender>=.5?`man`:`woman`,So=e=>Vt(e.age)<18,Co=(e,t)=>e.reduce((e,n)=>t(n)<t(e)?n:e),wo=[{id:`woman`,label:`Woman`},{id:`man`,label:`Man`}],To=[{id:`teen`,label:`Teen`,years:16},{id:`young`,label:`Young adult`,years:24},{id:`adult`,label:`Adult`,years:35},{id:`middle`,label:`Middle-aged`,years:52},{id:`elder`,label:`Elder`,years:72}],Eo=e=>Co(To,t=>Math.abs(t.years-Vt(e.age))).id,Do=[{id:`slim`,label:`Slim`,adj:`slim`,muscle:.35,weight:.3},{id:`average`,label:`Average`,adj:``,muscle:.5,weight:.5},{id:`athletic`,label:`Athletic`,adj:`athletic`,muscle:.7,weight:.4},{id:`muscular`,label:`Muscular`,adj:`muscular`,muscle:.95,weight:.55},{id:`heavy`,label:`Heavy`,adj:`heavy-set`,muscle:.55,weight:.88}],Oo=e=>Co(Do,t=>Math.hypot(t.muscle-e.muscle,t.weight-e.weight)).id,ko=[{id:`short`,label:`Short`,height:.25},{id:`average`,label:`Average`,height:.5},{id:`tall`,label:`Tall`,height:.78}],Ao=e=>Co(ko,t=>Math.abs(t.height-e.height)).id,jo=[{id:`african`,label:`African`,adj:`African`,mix:[1,0,0],eyes:`blackbrown`},{id:`asian`,label:`Asian`,adj:`Asian`,mix:[0,1,0],eyes:`darkbrown`},{id:`caucasian`,label:`Caucasian`,adj:`Caucasian`,mix:[0,0,1],eyes:`brownlight`},{id:`mixed`,label:`Mixed`,adj:`mixed-heritage`,mix:[.34,.33,.33],eyes:`brown`}];function Mo(e){let t=[e.african,e.asian,e.caucasian],n=t[0]+t[1]+t[2]||1;return Math.max(...t)/n>=.7?jo[t.indexOf(Math.max(...t))].id:`mixed`}var No=[`outfit`,`top`,`jacket`,`bottom`,`underwear`,`shoes`,`hat`,`accessories`,`garmentStyles`,`carry`],Po=e=>({outfit:`none`,top:`none`,jacket:`none`,bottom:`none`,underwear:!0,shoes:`none`,hat:`none`,accessories:[],garmentStyles:{},carry:`none`,...e}),Fo=e=>Po(Object.fromEntries(No.filter(t=>t in Tt[e]).map(t=>[t,Tt[e][t]]))),Io=e=>{let t=A.get(e);return Po({outfit:e,shoes:t.shoes??`none`,hat:t.hat??`none`,accessories:[...t.accessories],carry:t.carry??`none`})},Lo=(e,t)=>Po({outfit:e,shoes:t}),Ro=[`Everyday`,`Work & formal`,`Uniforms & action`,`Bridal & evening`,`Traditional`,`Warriors`,`Beach`],zo=e=>({man:e,woman:e}),Bo=[{id:`casual`,label:`Casual`,phrase:`in casual clothes`,group:`Everyday`,man:Lo(`male_casualsuit01`,`shoes01`),woman:Lo(`female_casualsuit01`,`shoes03`)},{id:`tee`,label:`T-shirt & jeans`,phrase:`in a T-shirt and jeans`,group:`Everyday`,man:Lo(`male_casualsuit06`,`shoes03`),woman:Lo(`female_casualsuit02`,`shoes03`)},{id:`street`,label:`Streetwear`,phrase:`in streetwear`,group:`Everyday`,...zo(Io(`set_street_tee_jeans`))},{id:`smart`,label:`Smart casual`,phrase:`in smart casual clothes`,group:`Everyday`,man:Lo(`male_casualsuit05`,`shoes02`),woman:Lo(`female_elegantsuit01`,`heels`)},{id:`sporty`,label:`Sporty`,phrase:`in sportswear`,group:`Everyday`,man:Po({top:`tank_top`,bottom:`cargo_shorts`,shoes:`sneakers`}),woman:Lo(`female_sportsuit01`,`shoes03`)},{id:`adventurer`,label:`Adventurer`,phrase:`in adventure gear`,group:`Everyday`,...zo(Fo(`The Adventurer`))},{id:`business`,label:`Business suit`,phrase:`in a business suit`,group:`Work & formal`,man:Io(`set_suit_tie`),woman:Io(`set_pantsuit`)},{id:`classic`,label:`Classic suit`,phrase:`in a classic suit`,group:`Work & formal`,...zo(Lo(`male_elegantsuit01`,`shoes02`))},{id:`pastel`,label:`Pastel suit`,phrase:`in a pastel suit`,group:`Work & formal`,...zo(Io(`set_pastel_suit`))},{id:`clergy`,label:`Clergy`,phrase:`in clerical clothes`,group:`Work & formal`,...zo(Io(`set_clergy`))},{id:`workwear`,label:`Overalls`,phrase:`in work overalls`,group:`Work & formal`,...zo(Lo(`male_worksuit01`,`shoes04`))},{id:`soldier`,label:`Soldier`,phrase:`in combat fatigues`,group:`Uniforms & action`,...zo(Fo(`The Soldier`))},{id:`police`,label:`Police (Nigeria)`,phrase:`in a Nigeria Police uniform`,group:`Uniforms & action`,...zo(Fo(`The Police Officer (Nigeria)`))},{id:`frsc`,label:`Road marshal (FRSC)`,phrase:`in an FRSC uniform`,group:`Uniforms & action`,...zo(Fo(`The FRSC Officer (Nigeria)`))},{id:`sheriff`,label:`Sheriff`,phrase:`in a sheriff's uniform`,group:`Uniforms & action`,...zo(Fo(`The American Sheriff`))},{id:`prisoner`,label:`Prison jumpsuit`,phrase:`in a prison jumpsuit`,group:`Uniforms & action`,...zo(Io(`set_prison_jumpsuit`))},{id:`cyberpunk`,label:`Cyberpunk`,phrase:`in cyberpunk techwear`,group:`Uniforms & action`,...zo(Fo(`The Cyberpunk Hacker`))},{id:`survivor`,label:`Wasteland survivor`,phrase:`in wasteland gear`,group:`Uniforms & action`,...zo(Fo(`The Wasteland Survivor`))},{id:`wedding`,label:`Wedding gown & veil`,phrase:`in a wedding gown and veil`,group:`Bridal & evening`,woman:Io(`set_wedding_gown`),alt:`classic`},{id:`cocktail_dress`,label:`Red cocktail dress`,phrase:`in a short red cocktail dress`,group:`Bridal & evening`,woman:Io(`set_cocktail_dress`),alt:`classic`,adult:!0},{id:`buba`,label:`Buba & sokoto`,phrase:`in a Yoruba buba and sokoto`,group:`Traditional`,...zo(Po({top:`long_tunic`,bottom:`trousers`,shoes:`sandals`,accessories:[`fila_cap`],garmentStyles:Fo(`The Yoruba Warrior`).garmentStyles}))},{id:`ankara_gown`,label:`Ankara gown`,phrase:`in an ankara gown`,group:`Traditional`,woman:Io(`set_ankara_gown`),alt:`buba`},{id:`ankara_peplum`,label:`Ankara peplum & skirt`,phrase:`in an ankara peplum and skirt`,group:`Traditional`,woman:Io(`set_ankara_peplum`),alt:`buba`},{id:`aso_ebi`,label:`Aso-ebi lace & gele`,phrase:`in aso-ebi lace with a gele`,group:`Traditional`,woman:Io(`set_aso_ebi`),alt:`buba`},{id:`thobe`,label:`Thobe & keffiyeh`,phrase:`in a thobe and keffiyeh`,group:`Traditional`,man:Io(`set_thobe`),alt:`ankara_gown`},{id:`yoruba_warrior`,label:`Yoruba warrior`,phrase:`dressed as a Yoruba warrior`,group:`Warriors`,...zo(Fo(`The Yoruba Warrior`))},{id:`dahomey`,label:`Dahomey warrior`,phrase:`dressed as a Dahomey warrior`,group:`Warriors`,woman:Fo(`The Dahomey Warrior`),alt:`yoruba_warrior`},{id:`maasai`,label:`Maasai`,phrase:`in a Maasai shuka`,group:`Warriors`,man:Fo(`The Maasai Warrior`),alt:`dahomey`},{id:`zulu`,label:`Zulu warrior`,phrase:`dressed as a Zulu warrior`,group:`Warriors`,man:Fo(`The Zulu Warrior`),alt:`dahomey`},{id:`beach`,label:`Beachwear`,phrase:`in beachwear`,group:`Beach`,man:Po({bottom:`cargo_shorts`,shoes:`flipflops`,accessories:[`sunglasses`]}),woman:Io(`set_gold_bikini`),adult:!0}],Vo=new Map(Bo.map(e=>[e.id,e]));function Ho(e,t,n){let r=xo(t),i=e[r];if(!i)return`${e.label} is a ${r===`man`?`women's`:`men's`} outfit. Switch to ${r===`man`?`Woman`:`Man`} in Body to wear it.`;if(e.adult&&So(t))return`${e.label} is only for adult characters. Choose Young adult or older in Body.`;if(i.outfit&&i.outfit!==`none`&&!A.has(i.outfit)&&!n.outfits.some(e=>e.id===i.outfit))return`${e.label} needs outfit files this copy of the app doesn't have.`}function Uo(e){let t=t=>t.outfit===e.outfit&&(e.outfit!==`none`||t.top===e.top&&t.bottom===e.bottom&&t.jacket===e.jacket),n=t=>+(t.shoes===e.shoes)+(t.accessories??[]).filter(t=>e.accessories.includes(t)).length+Object.entries(t.garmentStyles??{}).filter(([t,n])=>e.garmentStyles[t]?.color===n.color).length,r=xo(e),i;for(let e of Bo)for(let[a,o]of[[`man`,e.man],[`woman`,e.woman]]){if(!o||!t(o))continue;let s=n(o)+(a===r?.5:0);(!i||s>i.score)&&(i={id:e.id,score:s})}return i?.id}var Wo=e=>ms.some(t=>t.id===e)||hs.some(t=>t.id===e)||gs.some(t=>t.id===e);function Go(e,t,n=xo(e)){let r=t[n],i=new Set(Bo.flatMap(e=>[...e.man?.accessories??[],...e.woman?.accessories??[]])),a=e.accessories.filter(e=>Wo(e)||!i.has(e)),o=[...new Set([...a,...r.accessories??[]])];return{...r,accessories:o,garmentStyles:{...e.garmentStyles,...r.garmentStyles},outfitTint:`#ffffff`}}var Ko=[[`black`,`Black`,`#16171a`],[`charcoal`,`Charcoal`,`#3a3d44`],[`grey`,`Grey`,`#8a8d93`],[`white`,`White`,`#f2f2ef`],[`cream`,`Cream`,`#e8dcc4`],[`tan`,`Tan`,`#c9b28d`],[`brown`,`Brown`,`#6b4a32`],[`red`,`Red`,`#b0211f`],[`burgundy`,`Burgundy`,`#5e1624`],[`orange`,`Orange`,`#d9731f`],[`gold`,`Gold`,`#c9a24a`],[`yellow`,`Yellow`,`#e3c33b`],[`green`,`Green`,`#2f6b3a`],[`olive`,`Olive`,`#5d5b3e`],[`teal`,`Teal`,`#2a6f73`],[`blue`,`Blue`,`#2b55a8`],[`navy`,`Navy`,`#1d2a4a`],[`purple`,`Purple`,`#5a2f7a`],[`pink`,`Pink`,`#e08aa8`]].map(([e,t,n])=>({id:e,label:t,swatch:n})),qo=[[`natural`,`Natural`,`#ffffff`],[`warm`,`Warm`,`#f2dcc0`],[`red`,`Red`,`#f0a8a0`],[`rose`,`Rose`,`#f0c0d0`],[`gold`,`Gold`,`#f0dc98`],[`green`,`Green`,`#b8dcb0`],[`teal`,`Teal`,`#a8d8d4`],[`blue`,`Blue`,`#a8c0f0`],[`purple`,`Purple`,`#cab4e8`],[`grey`,`Grey`,`#b8b8b8`],[`dark`,`Dark`,`#707070`]].map(([e,t,n])=>({id:e,label:t,swatch:n})),Jo={solid:`Plain`,khaki:`Khaki`,camo:`Camouflage`,kente:`Kente`,asooke:`Aso-oke`,ankara:`Ankara`,ankara_floral:`Ankara (floral)`,ankara_web:`Ankara (web)`,adire:`Adire`,adire_panel:`Adire panel`,lace:`Lace`,damask:`Damask`,pleated:`Pleated`,foil:`Metallic foil`,denim:`Denim`,jersey:`Jersey`,workwear:`Workwear`,tropical:`Tropical`,linen:`Linen`,suiting:`Suiting`,nappa:`Smooth leather`,patent:`Patent leather`,shemagh:`Shemagh`,satin:`Satin`,striped:`Striped`,shuka:`Shuka check`,leather:`Leather`,hide:`Hide`,leopard:`Leopard`,techwear:`Techwear`,tattered:`Worn`,molle:`MOLLE`,fur:`Fur`,beadbands:`Beads`,straw:`Straw`,rib:`Rib knit`},Yo=e=>Jo[e]??e.replace(/_/g,` `).replace(/^./,e=>e.toUpperCase());function Xo(e){let t=(t,n,r,i)=>{let a=e.garmentStyles[t]??{},o=a.pattern&&n.patterns.includes(a.pattern)?a.pattern:n.patterns[0];return{key:t,label:r,patterns:n.patterns,pattern:o,color:a.color??n.color,color2:a.color2??n.color2,names:i}},n=(e,n)=>{let r=fe.get(e);return r&&e!==`none`&&!r.patterns.includes(`beadbands`)?[t(r.id,r,n,r.colorLabels??[`Colour`,`Second colour`])]:[]},r=A.get(e.outfit);if(r){let e=r.patterns?ke(r):[];return[...r.patterns?[t(r.id,{patterns:r.patterns,color:r.color,color2:r.color2},`Outfit`,[`Main colour`,`Second colour`])]:[],...e.includes(r.top)?[]:n(r.top,`Top`),...r.patterns||r.bottom===`none`?[]:n(r.bottom,`Bottom`)]}return e.outfit===`none`?[...n(e.top,`Top`),...n(e.jacket,`Jacket`),...n(e.bottom,`Bottom`)]:[{key:``,label:`Outfit`,patterns:[],pattern:``,color:e.outfitTint,names:[`Tint`,``]}]}var Zo=[{id:`none`,label:`Bald`},{id:`buzz`,label:`Buzz cut`},{id:`short01`,label:`Short crop`},{id:`short02`,label:`Short tousled`},{id:`short03`,label:`Short side part`},{id:`short04`,label:`Short neat`},{id:`afro01`,label:`Afro`},{id:`cornrows`,label:`Cornrows`},{id:`box_braids`,label:`Box braids`},{id:`mohawk`,label:`Mohawk`},{id:`bob01`,label:`Bob`},{id:`bob02`,label:`Bob (fair)`},{id:`braid01`,label:`Long braid`},{id:`long01`,label:`Long`},{id:`ponytail01`,label:`Ponytail`}],Qo={none:`bald`,buzz:`with a buzz cut`,short01:`with short hair`,short02:`with short hair`,short03:`with short hair`,short04:`with short hair`,afro01:`with an afro`,cornrows:`with cornrows`,box_braids:`with box braids`,mohawk:`with a mohawk`,bob01:`with a bob`,bob02:`with a bob`,braid01:`with a long braid`,long01:`with long hair`,ponytail01:`with a ponytail`},$o={man:`short02`,woman:`long01`},es=[[`natural`,`Natural`,``],[`black`,`Black`,`#16120f`],[`darkbrown`,`Dark brown`,`#2e2019`],[`brown`,`Brown`,`#4a3226`],[`auburn`,`Auburn`,`#6a2f1e`],[`lightbrown`,`Light brown`,`#7c5c42`],[`blonde`,`Blonde`,`#b39563`],[`platinum`,`Platinum`,`#d6cdbb`],[`grey`,`Grey`,`#8c8c8a`],[`red`,`Red`,`#8c2a1c`],[`pink`,`Pink`,`#c86a96`],[`blue`,`Blue`,`#3b5aa8`],[`purple`,`Purple`,`#7a4aa8`]].map(([e,t,n])=>({id:e,label:t,swatch:n})),ts={afro01:[15,5,5],bob01:[38,31,33],bob02:[159,151,136],braid01:[24,19,16],long01:[49,28,21],ponytail01:[86,59,41],short01:[27,27,27],short02:[75,60,50],short03:[79,51,43],short04:[36,36,36]},ns=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),rs=e=>`#`+e.map(e=>Math.round(Math.max(0,Math.min(255,e))).toString(16).padStart(2,`0`)).join(``),is=`Bob (fair), Buzz cut, Cornrows, Box braids or Mohawk`;function as(e){let t=ts[e.hair],n=Zo.find(t=>t.id===e.hair)?.label??`This hairstyle`;return es.map(e=>e.id===`natural`||!t||ns(e.swatch).every((e,n)=>e<=t[n]*1.15+6)?e:{...e,blocked:`${n} is naturally darker than ${e.label.toLowerCase()}, and its colour can only be darkened. For ${e.label.toLowerCase()} hair, pick ${is}.`})}function os(e,t){let n=es.find(e=>e.id===t);if(t===`natural`)return{hairTint:`#ffffff`,hairColor:ot.hairColor,beardColor:ot.beardColor};let r=ts[e.hair];return{hairTint:r?rs(ns(n.swatch).map((e,t)=>Math.min(1,e/Math.max(1,r[t]))*255)):`#ffffff`,hairColor:n.swatch,beardColor:n.swatch}}function ss(e){return Ve(e.hair)?e.hairColor===ot.hairColor?`natural`:es.find(t=>t.swatch===e.hairColor)?.id:e.hairTint===`#ffffff`?`natural`:es.find(t=>t.swatch&&os(e,t.id).hairTint===e.hairTint)?.id}var cs=e=>({beardColor:es.find(t=>t.id===e)?.swatch||ot.beardColor}),ls=e=>e.beardColor===ot.beardColor?`natural`:es.find(t=>t.swatch===e.beardColor)?.id,us=Fe.map(e=>({id:e,label:Xt[e]})),ds={stubble:`stubble`,mustache:`a mustache`,mustache_stubble:`a mustache and stubble`,goatee:`a goatee`,short_beard:`a short beard`,full_beard:`a full beard`},fs=[[`blackbrown`,`Black-brown`,`#2a1a12`],[`darkbrown`,`Dark brown`,`#3d2414`],[`brown`,`Brown`,`#5a3a22`],[`brownlight`,`Light brown`,`#8a6a44`],[`green`,`Green`,`#4f7a3f`],[`bluegreen`,`Blue-green`,`#4f7f7a`],[`grey`,`Grey`,`#8a9096`],[`blue`,`Blue`,`#3f6fb0`],[`lightblue`,`Light blue`,`#7fa6cf`],[`deepblue`,`Deep blue`,`#234b8f`],[`ice`,`Ice`,`#b9d4e3`]].map(([e,t,n])=>({id:e,label:t,swatch:n})),ps=qe.map(e=>({id:e,label:Ze[e]})),ms=[{id:`none`,label:`None`},{id:`sunglasses`,label:`Sunglasses`},{id:`aviators`,label:`Aviators`},{id:`sunglasses_sleek`,label:`Cat-eye`}],hs=[`watch_gold`,`watch_silver`,`gold_necklace`,`fine_pendant`,`gold_chains`,`cuban_chain`,`pearl_necklace`,`silver_cross`,`gold_ring`,`bangles`,`wrist_beads`,`gloves`,`earpiece`].map(e=>({id:e,label:fe.get(e)?.label.replace(/ \(.*\)$/,``)??e})),gs=[{id:`none`,label:`None`},{id:`baseball_cap`,label:`Baseball cap`},{id:`fedora01`,label:`Fedora`},{id:`fedora_cocked`,label:`Fedora (tilted)`},{id:`cowboy_hat`,label:`Cowboy hat`},{id:`beret`,label:`Beret`}],_s=[`cowboy_hat`,`beret`],vs={gele:`Gele`,keffiyeh:`Keffiyeh`,helmet:`Helmet`,fila_cap:`Fila cap`,feather_headband:`Headband`,bead_headband:`Headband`,visor:`Visor`};function ys(e){return e.hat===`none`?e.accessories.find(e=>_s.includes(e))??(e.accessories.some(e=>e in vs)?`outfit`:`none`):e.hat}function bs(e){let t=e.hat===`keffiyeh`?`keffiyeh`:e.accessories.find(e=>e in vs);return t?vs[t]:void 0}function xs(e,t){let n=e.accessories.filter(e=>!_s.includes(e)&&!(e in vs));return _s.includes(t)?{hat:`none`,accessories:[...n,t]}:{hat:t,accessories:n}}var Ss=e=>ms.find(t=>t.id!==`none`&&e.accessories.includes(t.id))?.id??`none`,Cs=(e,t)=>({accessories:[...e.accessories.filter(e=>!ms.some(t=>t.id===e)),...t===`none`?[]:[t]]}),ws=(e,t)=>({accessories:e.accessories.includes(t)?e.accessories.filter(e=>e!==t):[...e.accessories,t]}),Ts=rt.map(e=>({id:e,label:et[e]})),Es=[{id:`gold`,label:`Gold`,swatch:`#d4af37`},{id:`silver`,label:`Silver`,swatch:`#c0c4ca`}];function Ds(e){return kt.map(t=>({id:t,label:yt[t].replace(/ \(.*\)$/,``),blocked:So(e)?`Tattoos are only for adult characters. Choose Young adult or older in Body.`:void 0}))}var Os=v.map(e=>({id:e,label:O[e]})),ks=nn.map(e=>({id:e,label:e===`none`?`Nothing`:_e[e]})),As=[{id:`none`,label:`On foot`},...pt.map(e=>({id:e,label:r[e]}))],js=(e,t)=>F(e.vehicle,t);function Ms(e,t){return{vehicle:`auto`,vehicleStyle:ue(t,e.vehicleStyle),rig:e.rig===`none`?`game`:e.rig,animations:!0}}var Ns=(e,t=h[e])=>{let n=$t[T(t)]===e?T(t):h[e],r=we.find(([,e])=>e===n)?.[0];return r?[`board_${r}`,n,`alight_${r}`]:[n]};function Ps(e,t=`idle`){let n=[`idle`,`walk`,`model_walk`,`run`,`wave`,`talk`,`laugh`,`cheer`,`sit_idle`,`jump`,`punch`],r={pistol:[`pistol_idle`,`pistol_aim`,`pistol_fire`],rifle:[`rifle_idle`,`rifle_aim`,`rifle_fire_auto`,`rifle_walk`,`rifle_reload`],sword:[`sword_idle`,`sword_slash`,`sword_block`],knife:[]},i=js(e,t);return[...n,...r[e.weapon]??[],...i?Ns(i,t):[]].map(e=>({id:e,label:``}))}function Fs(e){let t=Math.round(Vt(e.age)),n=xo(e),r=Do.find(t=>t.id===Oo(e)).adj,i=jo.find(t=>t.id===Mo(e)).adj,a=t<18?n===`man`?`boy`:`girl`:n,o=Vo.get(Uo(e)??``),s=n===`man`?ds[e.facialHair]:void 0,c=Qo[e.hair]??`with their own hairstyle`,l=c===`bald`,u=r||String(t),d=[{text:/^[aeiou]/i.test(u)||/^(8|11$|18$)/.test(u)?`An`:`A`}];return r&&d.push({text:r,step:`body`}),d.push({text:`${t}-year-old`,step:`body`},{text:i,step:`heritage`},{text:a,step:`body`}),d.push({text:o?o.phrase:`in their own outfit`,step:`outfit`},{text:`,`}),d.push({text:c,step:`hair`}),s&&d.push({text:l?`, with`:`and`},{text:s,step:`hair`}),d.push({text:`.`}),d}function Is(e,t,n){let r={gender:+(t===`man`)},i=[],a=Vo.get(Uo(e)??``);if(a){let n=a[t]?a:Vo.get(a.alt??``);n&&n!==a&&n[t]?(Object.assign(r,Go(e,n,t)),i.push(`${a.label} is a ${t===`man`?`women's`:`men's`} outfit, so the outfit is now ${n.label}.`)):n?.man&&n.woman&&n.man!==n.woman&&Object.assign(r,Go(e,n,t))}return t===`woman`&&e.facialHair!==`none`&&(r.facialHair=`none`),n.has(`hair`)||(r.hair=$o[t]),{patch:r,notes:i}}function Ls(e,t){let n=jo.find(t=>t.id===e),r={african:n.mix[0],asian:n.mix[1],caucasian:n.mix[2],skin:`auto`};return t.has(`eyes`)||(r.eyes=n.eyes),e===`african`&&(r.eyebrows=`eyebrow001`),r}var Rs={man:[`none`,`buzz`,`short01`,`short02`,`short03`,`short04`,`afro01`,`cornrows`,`box_braids`],woman:[`bob01`,`bob02`,`braid01`,`long01`,`ponytail01`,`afro01`,`cornrows`,`box_braids`]},zs=`3dgen.mode`,Bs=new URL(`../`,location.href).href,Vs=[{id:`body`,title:`Body`,detailed:`Body`},{id:`heritage`,title:`Heritage`,detailed:`Ethnicity`},{id:`outfit`,title:`Outfit`,detailed:`Clothing`},{id:`colours`,title:`Colours`,detailed:`Clothing`},{id:`hair`,title:`Hair & face`,detailed:`Hair`},{id:`extras`,title:`Extras`,detailed:`Accessories`},{id:`vehicle`,title:`Vehicle`,detailed:`Props`},{id:`action`,title:`Action`,detailed:``}],Hs={body:[`gender`,`age`,`build`,`height`],heritage:[`heritage`],outfit:[`style`],colours:[`colours`],hair:[`hair`,`hairColour`,`beard`,`eyes`,`expression`],extras:[`glasses`,`jewellery`,`earrings`,`hat`,`tattoos`,`bag`,`held`],vehicle:[`vehicle`,`vehicleColour`,`vehicleFinish`,`vehicleVariant`],action:[`action`]},Us=8;function Ws(e,t){let{store:n,cat:i}=e,a=Y(`div`,{id:`quick`});J(`#controls`).before(a);let s=new Set,c=`idle`,l=!1,u=()=>n.params,d=new Map,p=Y(`div`,{className:`mode-switch`,role:`tablist`,ariaLabel:`Editing mode`});for(let[e,t,n]of[[`quick`,`Quick build`,`Tap to build`],[`detailed`,`Detailed`,`Every setting`]]){let r=Y(`button`,{role:`tab`,title:n},Y(`b`,{textContent:t}),Y(`span`,{textContent:n}));r.addEventListener(`click`,()=>m(e)),d.set(e,r),p.append(r)}J(`#panel header h1`).after(p);function m(e,t=!0){if(document.body.dataset.mode=e,d.forEach((t,n)=>{t.ariaSelected=String(n===e),t.classList.toggle(`on`,n===e)}),t)try{localStorage.setItem(zs,e)}catch{}e===`quick`&&ie()}function g(e){m(`detailed`);let t=[...document.querySelectorAll(`#controls > details`)].find(t=>t.querySelector(`summary`)?.textContent===e);t&&(t.open=!0,t.scrollIntoView({behavior:`smooth`,block:`start`}),t.classList.remove(`flash`),t.offsetWidth,t.classList.add(`flash`))}let _=Y(`div`,{className:`qb-toast`,role:`status`,ariaLive:`polite`}),v=0;function y(e,t=`info`){_.textContent=e,_.dataset.kind=t,_.classList.remove(`show`),_.offsetWidth,_.classList.add(`show`),clearTimeout(v),v=window.setTimeout(()=>_.classList.remove(`show`),Math.max(3500,e.length*55))}function b(e,t,r=[]){s.add(e),n.set(t),n.emit(`sync`),r.length&&y(r.join(` `))}function x(e,t){s.clear(),n.replaceAll(e),y(t)}function S(e,t,n,r,i=`pills`,a,o){let s=Y(`div`,{className:`qb-opts qb-${i}`,role:`group`,ariaLabel:t});for(let t of n){let n=Y(`button`,{className:`qb-opt`,title:t.blocked??t.label,ariaPressed:String(t.on)});n.dataset.k=`${e}:${t.id}`,t.on&&n.classList.add(`on`),t.blocked&&(n.classList.add(`blocked`),n.ariaDisabled=`true`),i===`swatches`?(n.ariaLabel=t.label,t.swatch?n.style.setProperty(`--sw`,t.swatch):n.classList.add(`text`),n.append(Y(`span`,{className:`qb-sw`}),t.swatch?``:Y(`span`,{className:`qb-sw-label`,textContent:t.label}))):(t.thumb&&n.append(Y(`img`,{src:Bs+t.thumb,alt:``,loading:`lazy`})),n.append(Y(`span`,{textContent:t.label}))),n.addEventListener(`click`,()=>{let e=o?o(t.id):t.blocked;e?y(e,`why`):r(t.id)}),s.append(n)}return Y(`div`,{className:`qb-row`},Y(`div`,{className:`qb-label`,textContent:t}),s,...a?[Y(`div`,{className:`qb-note`,textContent:a})]:[])}function C(e,t,n,r,i){let a=r.toLowerCase(),o=n.some(e=>e.swatch?.toLowerCase()===a),s=S(e,t,n.map(e=>({...e,on:e.swatch?.toLowerCase()===a})),e=>i(n.find(t=>t.id===e).swatch),`swatches`),c=Y(`input`,{type:`color`,className:`qb-color-input`,tabIndex:-1,value:/^#[0-9a-f]{6}$/i.test(r)?r:`#888888`}),l=Y(`span`,{className:`qb-sw${o?` rainbow`:``}`});o||l.style.setProperty(`--sw`,r);let u=Y(`button`,{className:`qb-opt qb-custom${o?``:` on`}`,title:`${t}: any colour`,ariaPressed:String(!o)},l,Y(`span`,{textContent:o?`Custom…`:`Custom`}));return u.dataset.k=`${e}:${t}:custom`,u.addEventListener(`click`,()=>{try{c.showPicker()}catch{c.click()}}),c.addEventListener(`input`,()=>{l.classList.remove(`rainbow`),l.style.setProperty(`--sw`,c.value)}),c.addEventListener(`change`,()=>i(c.value)),s.querySelector(`.qb-opts`).append(Y(`span`,{className:`qb-custom-wrap`},u,c)),s}function w(e){let t=xo(e);return[S(`gender`,`Gender`,wo.map(e=>({...e,on:e.id===t})),e=>{if(e===xo(u()))return;let{patch:t,notes:n}=Is(u(),e,s);b(`gender`,t,n)}),S(`age`,`Age`,To.map(t=>({id:t.id,label:`${t.label} · ${t.years}`,on:t.id===Eo(e)})),e=>{let t=To.find(t=>t.id===e),n=u(),r={age:Jt(t.years)},i=[];if(t.years<18){n.tattoos.length&&(r.tattoos=[],i.push(`Tattoos are only for adult characters, so they were removed (Undo brings them back).`));let e=Vo.get(Uo(n)??``);e?.adult&&(Object.assign(r,Go(n,Vo.get(`casual`))),i.push(`${e.label} is only for adults, so the outfit is now Casual.`))}b(`age`,r,i)}),S(`build`,`Build`,Do.map(t=>({id:t.id,label:t.label,on:t.id===Oo(e)})),e=>{let t=Do.find(t=>t.id===e);b(`build`,{muscle:t.muscle,weight:t.weight})}),S(`height`,`Height`,ko.map(t=>({id:t.id,label:t.label,on:t.id===Ao(e)})),e=>b(`height`,{height:ko.find(t=>t.id===e).height}))]}function T(e){let t=Mo(e);return[S(`heritage`,`Heritage`,jo.map(e=>({id:e.id,label:e.label,on:e.id===t})),e=>b(`heritage`,Ls(e,s)),`pills`,`Sets the skin, face and eye colour. Blend them exactly in Detailed.`)]}function E(e){let t=Uo(e),n=xo(e),r=Ro.map(r=>S(`style`,r,Bo.filter(e=>e.group===r).map(r=>({id:r.id,label:r.label,on:r.id===t,blocked:Ho(r,e,i),thumb:`quick-thumbs/${r.id}-${r[n]?n:n===`man`?`woman`:`man`}.png`})),e=>b(`style`,Go(u(),Vo.get(e))),`thumbs`,void 0,e=>Ho(Vo.get(e),u(),i)));return t||r.unshift(Y(`div`,{className:`qb-note qb-own`,textContent:`Wearing an outfit of their own (from Detailed or a ready-made character). Pick a style to replace it.`})),r}function D(e){let t=Xo(e);return t.length?t.flatMap(e=>{let n=t.length>1?`${e.label}: `:``;if(!e.key)return[C(`colours`,`${n}Tint`,qo,e.color,e=>b(`colours`,{outfitTint:e})),Y(`div`,{className:`qb-note`,textContent:`A tint shades this outfit's own colours. For any colour you like, pick an outfit such as Business suit, Streetwear, Soldier or Buba & sokoto.`})];let r=t=>b(`colours`,{garmentStyles:{...u().garmentStyles,[e.key]:{pattern:e.pattern,color:e.color,color2:e.color2,...u().garmentStyles[e.key],...t}}});return[...e.patterns.length>1?[S(`colours`,`${n}Fabric`,e.patterns.map(t=>({id:t,label:Yo(t),on:t===e.pattern})),e=>r({pattern:e}))]:[],C(`colours`,`${n}${e.names[0]}`,Ko,e.color,e=>r({color:e})),...e.color2?[C(`colours`,`${n}${e.names[1]}`,Ko,e.color2,e=>r({color2:e}))]:[]]}):[Y(`div`,{className:`qb-note`,textContent:`This outfit's colours are fixed. Pick another outfit, or adjust it in Detailed.`})]}function O(e){let t=xo(e)===`man`,n=ss(e);return[S(`hair`,`Hairstyle`,Zo.map(t=>({...t,thumb:`quick-thumbs/hair-${t.id}.png`,on:t.id===e.hair})),e=>{let t={...u(),hair:e},n=ss(u()),r=n&&!as(t).find(e=>e.id===n)?.blocked;b(`hair`,{hair:e,...r?os(t,n):os(t,`natural`)},n&&n!==`natural`&&!r?[`${Zo.find(t=>t.id===e).label} can't be made ${es.find(e=>e.id===n).label.toLowerCase()}, so it has its natural colour.`]:[])},`thumbs`),...e.hair===`none`?t&&e.facialHair!==`none`?[S(`hairColour`,`Beard colour`,es.map(t=>({...t,on:t.id===ls(e)})),e=>b(`hairColour`,cs(e)),`swatches`)]:[]:[S(`hairColour`,`Hair colour`,as(e).map(e=>({...e,on:e.id===n})),e=>b(`hairColour`,os(u(),e)),`swatches`,void 0,e=>as(u()).find(t=>t.id===e)?.blocked)],...t?[S(`beard`,`Facial hair`,us.map(t=>({...t,on:t.id===e.facialHair})),e=>b(`beard`,{facialHair:e}))]:[],S(`eyes`,`Eyes`,fs.map(t=>({...t,on:t.id===e.eyes})),e=>b(`eyes`,{eyes:e}),`swatches`),S(`expression`,`Expression`,ps.map(t=>({...t,on:t.id===e.expression})),e=>b(`expression`,{expression:e}))]}function k(e){let t=bs(e),n=ys(e);return[S(`glasses`,`Glasses`,ms.map(t=>({...t,on:t.id===Ss(e)})),e=>b(`glasses`,Cs(u(),e))),S(`hat`,`Hat`,gs.map(e=>({...e,on:e.id===n})),e=>b(`hat`,xs(u(),e),t&&e!==`outfit`?[`The outfit's ${t.toLowerCase()} was taken off.`]:[]),`pills`,t?`Wearing the outfit's ${t.toLowerCase()}. Pick None to take it off.`:void 0),S(`jewellery`,`Jewellery & more`,hs.map(t=>({...t,on:e.accessories.includes(t.id)})),e=>b(`jewellery`,ws(u(),e)),`pills`,`Tap to add or remove; pick as many as you like.`),S(`earrings`,`Earrings`,Ts.map(t=>({...t,on:t.id===e.earrings})),e=>b(`earrings`,{earrings:e})),...e.earrings===`none`?[]:[S(`earrings`,`Metal`,Es.map(t=>({...t,on:t.id===e.earringMetal})),e=>b(`earrings`,{earringMetal:e}),`swatches`)],S(`tattoos`,`Tattoos`,Ds(e).map(t=>({...t,on:e.tattoos.includes(t.id)})),e=>{let t=e,n=u().tattoos;b(`tattoos`,{tattoos:n.includes(t)?n.filter(e=>e!==t):[...n,t]})},`pills`,void 0,e=>Ds(u()).find(t=>t.id===e)?.blocked),S(`bag`,`Bag`,Os.map(t=>({...t,on:t.id===e.carry})),e=>b(`bag`,{carry:e})),S(`held`,`In hand`,ks.map(t=>({...t,on:t.id===e.weapon})),e=>{b(`held`,{weapon:e},e!==`none`&&e!==`knife`?[`New moves for it are in Action below.`]:[])})]}function A(t){let n=js(t,c),r=n===`horse`,i=(e,t,n)=>b(n,{vehicleStyle:{...u().vehicleStyle,[e]:t}});return[S(`vehicle`,`Travel with`,As.map(e=>({...e,on:e.id===(n??`none`)})),t=>{t===`none`?(b(`vehicle`,{vehicle:`none`}),e.playClip(`idle`)):(b(`vehicle`,Ms(u(),t)),e.playClip(h[t]))},`pills`,`Pick a vehicle to try its riding animation. Other vehicle animations switch the model automatically.`),...n?[C(`vehicleColour`,r?`Coat colour`:`Body colour`,Ko,t.vehicleStyle.color,e=>i(`color`,e,`vehicleColour`)),S(`vehicleVariant`,r?`Tack style`:`Style`,ut.map(e=>({id:e,label:e===`sport`?`Sport`:r?`Traditional`:`Standard`,on:e===t.vehicleStyle.variant})),e=>i(`variant`,e,`vehicleVariant`)),...r?[]:[S(`vehicleFinish`,`Finish`,f.map(e=>({id:e,label:e[0].toUpperCase()+e.slice(1),on:e===t.vehicleStyle.finish})),e=>i(`finish`,e,`vehicleFinish`))],Y(`div`,{className:`qb-note`,textContent:r?`Adjust mane and tack colours in Detailed.`:`Adjust trim and seat colours in Detailed.`})]:[]]}function j(t){return[S(`action`,`Play`,Ps(t,c).map(e=>({id:e.id,label:o.get(e.id)?.name.replace(/ \((chair|low ready|guard)\)$/,``)??e.id,on:e.id===c})),t=>{s.add(`action`),e.playClip(t)},`pills`,`All animations are in the bar above the character.`)]}let M={body:w,heritage:T,outfit:E,colours:D,hair:O,extras:k,vehicle:A,action:j},ee={body:e=>[xo(e)===`man`?`Man`:`Woman`,To.find(t=>t.id===Eo(e)).label,Do.find(t=>t.id===Oo(e)).label].join(` · `),heritage:e=>jo.find(t=>t.id===Mo(e)).label,outfit:e=>Vo.get(Uo(e)??``)?.label??`Their own`,hair:e=>Zo.find(t=>t.id===e.hair)?.label??`Their own`,vehicle:e=>{let t=js(e,c);return t?r[t]:`On foot`},action:()=>o.get(c)?.name??`Bind pose`},N=e=>e[Math.floor(Math.random()*e.length)];function te(){let e={...u()},t=t=>e={...e,...t},r=e=>!s.has(e);r(`gender`)&&t(Is(e,N([`man`,`woman`]),new Set([...s,`hair`])).patch);let a=xo(e);if(r(`age`)&&t({age:Jt(N([24,30,35,42,52,64]))}),r(`build`)){let e=N(Do);t({muscle:e.muscle,weight:e.weight})}if(r(`height`)&&t({height:N(ko).height}),r(`heritage`)&&t(Ls(N(jo).id,s)),r(`style`)){let n=Bo.filter(t=>!Ho(t,e,i));t(Go(e,N(n)))}if(r(`colours`)&&Math.random()<.6)for(let n of Xo(e))n.key?t({garmentStyles:{...e.garmentStyles,[n.key]:{pattern:N(n.patterns),color:N(Ko).swatch,color2:N(Ko).swatch}}}):t({outfitTint:N(qo).swatch});if(r(`hair`)&&t({hair:N(Rs[a])}),r(`hairColour`)){let n=as(e).filter(e=>!e.blocked&&![`pink`,`blue`,`purple`].includes(e.id));t(os(e,Math.random()<.5||!n.length?`natural`:N(n).id))}if(r(`beard`)&&t({facialHair:a===`man`?N([`none`,`none`,`stubble`,`mustache`,`goatee`,`short_beard`,`full_beard`]):`none`}),r(`eyes`)){let n=Mo(e)!==`caucasian`;t({eyes:N(n?[`blackbrown`,`darkbrown`,`brown`]:fs.map(e=>e.id))})}r(`expression`)&&t({expression:N([`neutral`,`neutral`,`happy`,`determined`])}),n.replaceAll({...e,name:`character`,seed:Math.floor(Math.random()*1e6)}),y(s.size?`New random picks, keeping the ones you chose.`:`A random character. Tap anything below to change it.`)}function ne(){let e=Object.keys(Tt),t=l?e:e.slice(0,Us),n=Y(`div`,{className:`qb-opts qb-pills`,role:`group`,ariaLabel:`Ready-made characters`});for(let e of t){let t=Y(`button`,{className:`qb-opt`,textContent:e.replace(/^The /,``)});t.dataset.k=`ready:${e}`,t.addEventListener(`click`,()=>x({...ot,...Tt[e],name:e,detail:u().detail},`${e} is ready. Change anything below to make it yours.`)),n.append(t)}let r=Y(`button`,{className:`qb-opt qb-more`,textContent:l?`Show fewer`:`Show all ${e.length}`});return r.dataset.k=`ready:more`,r.addEventListener(`click`,()=>{l=!l,ie()}),n.append(r),Y(`section`,{className:`qb-step qb-ready`},Y(`div`,{className:`qb-head`},Y(`h2`,{},`Start from a ready-made character `,Y(`span`,{className:`qb-opt-tag`,textContent:`(optional)`}))),n)}function P(e){let t=Y(`p`,{className:`qb-sentence`});for(let n of Fs(e)){let e=/^[,.]/.test(n.text)||!t.childNodes.length?``:` `;if(e&&t.append(e),!n.step){t.append(n.text);continue}let r=Y(`button`,{className:`qb-chip`,textContent:n.text,title:`Change in ${Vs.find(e=>e.id===n.step).title}`});r.dataset.k=`chip:${n.step}:${n.text}`,r.addEventListener(`click`,()=>re(n.step)),t.append(r)}return t}function re(e){let t=a.querySelector(`[data-step="${e}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),t.classList.remove(`flash`),t.offsetWidth,t.classList.add(`flash`),t.querySelector(`.qb-opt.on, .qb-opt`)?.focus({preventScroll:!0}))}function ie(){if(document.body.dataset.mode!==`quick`)return;let e=u(),n=document.activeElement?.dataset?.k,r=Y(`button`,{className:`qb-act`,textContent:`↶ Undo`,title:`Undo (Ctrl/Cmd+Z)`,disabled:!t.canUndo()});r.addEventListener(`click`,()=>t.undo());let i=Y(`button`,{className:`qb-act`,textContent:`↷ Redo`,title:`Redo (Shift+Ctrl/Cmd+Z)`,disabled:!t.canRedo()});i.addEventListener(`click`,()=>t.redo());let o=Y(`button`,{className:`qb-act primary`,textContent:`🎲 Surprise me`,title:`Random picks for everything you haven't chosen yet`});o.addEventListener(`click`,te);let c=Y(`button`,{className:`qb-act`,textContent:`Start over`,title:`Back to a plain starting character`});c.addEventListener(`click`,()=>x({...ot,name:`character`,detail:e.detail},`Started over. Undo brings your character back.`));for(let[e,t]of[[r,`act:undo`],[i,`act:redo`],[o,`act:surprise`],[c,`act:restart`]])e.dataset.k=t;let l=Vs.map((t,n)=>{let r=Hs[t.id].some(e=>s.has(e)),i=Y(`section`,{className:`qb-step`},Y(`div`,{className:`qb-head`},Y(`span`,{className:`qb-num${r?` done`:``}`,textContent:r?`✓`:String(n+1),ariaLabel:r?`Chosen`:`Step ${n+1}`}),Y(`h2`,{textContent:t.title}),Y(`span`,{className:`qb-now`,textContent:ee[t.id]?.(e)??``})),...M[t.id](e));if(i.dataset.step=t.id,t.detailed){let e=Y(`button`,{className:`qb-fine`,textContent:`Fine-tune ${t.title.toLowerCase()} in Detailed ›`});e.dataset.k=`fine:${t.id}`,e.addEventListener(`click`,()=>g(t.detailed)),i.append(e)}return i});a.replaceChildren(Y(`section`,{className:`qb-summary`},Y(`div`,{className:`qb-kicker`,textContent:`Your character`}),P(e),Y(`div`,{className:`qb-actions`},r,i,o,c),Y(`div`,{className:`qb-hint`,textContent:`Tap any option below: the character updates as you go. Tap a highlighted word above to jump to it.`})),ne(),...l,Y(`section`,{className:`qb-done`},Y(`p`,{textContent:`Happy with your character? Download it with the button under the character, or share it.`}),(()=>{let e=Y(`button`,{textContent:`Fine-tune everything in Detailed ›`});return e.dataset.k=`fine:all`,e.addEventListener(`click`,()=>m(`detailed`)),e})()),_),n&&a.querySelector(`[data-k="${CSS.escape(n)}"]`)?.focus({preventScroll:!0})}let ae=0,F=()=>{ae||=requestAnimationFrame(()=>{ae=0,ie()})};n.on(`params`,F),n.on(`sync`,F),n.on(`clip`,e=>{c=e,F()}),t.onChange(F);let I=e=>{try{return localStorage.getItem(e)}catch{return null}};m(I(zs)??(I(`3dgen.human`)===null?`quick`:`detailed`),!1)}function Gs(e){J(`#share-btn`).addEventListener(`click`,()=>void Ks(e))}async function Ks(e){let{viewer:t}=e;await e.whenIdle();let n=e.store.params,r=Y(`dialog`,{className:`share-modal`}),i=Y(`button`,{className:`share-close`,textContent:`✕`,title:`Close`}),a=Y(`img`,{className:`share-preview`,alt:`Share image preview`}),o=Y(`textarea`,{className:`share-caption`,rows:3,value:_n(n.name)}),s=hn(n),c=Y(`input`,{className:`share-link`,value:s,readOnly:!0}),l=Y(`div`,{className:`share-note`}),u=e=>{l.textContent=e,l.classList.add(`on`),setTimeout(()=>l.classList.remove(`on`),1800)},d=async(e,t)=>{try{await navigator.clipboard.writeText(e),u(`${t} copied`)}catch{c.select(),u(`Press Ctrl/Cmd+C to copy`)}},f=await gn(t.canvasElement,t.characterRect(),n.name),p=URL.createObjectURL(f);a.src=p;let m=`${(n.name||`character`).replace(/[^a-z0-9]+/gi,`-`).replace(/^-|-$/g,``).toLowerCase()||`character`}-ara-3d-gen.png`,h=new File([f],m,{type:`image/png`}),g=Y(`div`,{className:`share-nets`});if(navigator.canShare?.({files:[h]})){let e=Y(`button`,{className:`primary share-native`,textContent:`↗ Share with image…`});e.addEventListener(`click`,async()=>{try{await navigator.share({files:[h],text:`${o.value} ${s}`,title:`Ara 3D Gen`})}catch{}}),g.append(e)}for(let e of yn){let t=Y(`a`,{className:`share-net net-${e.id}`,textContent:e.label,target:`_blank`,rel:`noopener`});t.addEventListener(`click`,()=>t.href=e.url(o.value,s)),t.href=e.url(o.value,s),g.append(t)}let _=Y(`a`,{className:`share-action`,textContent:`⬇ Download image`,href:p,download:m}),v=Y(`button`,{className:`share-action`,textContent:`🔗 Copy link`});v.addEventListener(`click`,()=>d(s,`Link`));let y=Y(`button`,{className:`share-action`,textContent:`📋 Copy caption + link`});y.addEventListener(`click`,()=>d(`${o.value} ${s}`,`Caption and link`)),r.append(Y(`div`,{className:`share-head`},Y(`b`,{textContent:`Share your character`}),i),a,Y(`label`,{className:`share-label`,textContent:`Caption`}),o,Y(`label`,{className:`share-label`,textContent:`Link (opens this exact character)`}),c,g,Y(`div`,{className:`share-actions`},_,v,y),Y(`div`,{className:`share-hint`,textContent:`Tip: X, Facebook and LinkedIn take the caption and link from websites, not images. Download the image to attach it to your post.`}),l);let b=()=>{r.close(),r.remove(),URL.revokeObjectURL(p)};i.addEventListener(`click`,b),r.addEventListener(`click`,e=>e.target===r&&b()),r.addEventListener(`cancel`,b),document.body.append(r),r.showModal()}var qs=e=>new URL(`../${e}`,location.href).href,Js=(e,t=`None`)=>[{id:`none`,name:t,src:qs(e)}];function Ys(e,t,...n){let r=Y(`details`,{open:t});return r.append(Y(`summary`,{textContent:e}),Y(`div`,{},...n)),r}function Xs(e,t,n,r,i=0,a=1,o=.01,s=e=>e.toFixed(2)){let c=Y(`input`,{type:`range`,min:String(i),max:String(a),step:String(o)}),l=Y(`output`),u=()=>{c.value=String(n()),l.textContent=s(n())};return c.addEventListener(`input`,()=>{r(Number(c.value)),l.textContent=s(Number(c.value))}),c.addEventListener(`dblclick`,()=>{r(i<0?0:(i+a)/2),u()}),e.store.on(`sync`,u),u(),Y(`div`,{className:`ctl`},Y(`span`,{textContent:t}),c,l)}var Zs=(e,t,n)=>Xs(e,t,()=>e.store.params[n],t=>e.store.set({[n]:t}));function Qs(e,t,n,r=!0){let i=Y(`input`,{type:`color`});return i.addEventListener(r?`input`:`change`,()=>e.store.set({[n]:i.value})),e.store.on(`sync`,()=>i.value=e.store.params[n]),i.value=e.store.params[n],Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:t}),i)}function $s(e,t,n,r=[],i=[]){let a=Y(`div`,{className:`picker`}),o=new Map;for(let s of[...r,...t,...i]){let t=`src`in s&&s.src?s.src:`thumb`in s&&s.thumb?e.lib.source.url(s.thumb):``,r=t?Y(`img`,{src:t,alt:``,loading:`lazy`}):s.name,i=Y(`button`,{title:s.name},r,Y(`span`,{className:`cap`,textContent:s.name}));i.addEventListener(`click`,()=>`pick`in s&&s.pick?s.pick():e.store.set({[n]:s.id})),o.set(s.id,i),a.append(i)}let s=()=>o.forEach((t,r)=>t.classList.toggle(`on`,e.store.params[n]===r));return e.store.on(`sync`,s),s(),a.addEventListener(`click`,()=>requestAnimationFrame(s)),a}function ec(e,t,n,r,i){let a=Y(`select`);for(let[e,t]of n)a.append(new Option(t,e));return a.addEventListener(`change`,()=>i(a.value)),e.store.on(`sync`,()=>a.value=r()),a.value=r(),Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:t}),a)}function tc(e,t){let{store:n}=e,r=Y(`div`,{className:`style-box`}),i=``,a=()=>{let e=t();if(e===i){r.querySelectorAll(`[data-sync]`).forEach(e=>e.dispatchEvent(new Event(`sync`)));return}i=e,r.replaceChildren();let a=A.get(e),o=fe.get(e)??(a?.patterns?{patterns:a.patterns,color:a.color,color2:a.color2}:re[e]);if(!o)return;let s=()=>n.params.garmentStyles[e]??{},c=t=>n.set({garmentStyles:{...n.params.garmentStyles,[e]:{...s(),...t}}});if(o.patterns.length>1){let e=Y(`select`);e.dataset.sync=`1`;for(let t of o.patterns.filter(e=>me.includes(e)))e.append(new Option(t,t));e.value=s().pattern??o.patterns[0],e.addEventListener(`change`,()=>c({pattern:e.value})),e.addEventListener(`sync`,()=>e.value=s().pattern??o.patterns[0]),r.append(Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:`Pattern`}),e))}let[l,u]=o.colorLabels??[`Colour`,`Accent`];for(let[e,t,n]of[[`color`,l,o.color],[`color2`,u,o.color2]]){let i=Y(`input`,{type:`color`,value:s()[e]??n});i.dataset.sync=`1`,i.addEventListener(`input`,()=>c({[e]:i.value})),i.addEventListener(`sync`,()=>i.value=s()[e]??n),r.append(Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:t}),i))}};return n.on(`sync`,a),a(),r}function nc(e){let{store:t}=e,n=(e,t)=>[[`none`,t],...G.filter(t=>t.slot===e&&t.id!==`briefs`&&!t.setOnly).map(e=>[e.id,e.label])],r=e=>{let n=A.get(t.params.outfit);n&&(e={top:n.top,jacket:n.jacket??`none`,bottom:n.bottom,garmentStyles:W(n,t.params.garmentStyles),...e}),t.set({...e,outfit:`none`}),t.emit(`sync`)},i=Y(`div`,{className:`hint`}),a=Y(`div`,{className:`pieces`},i,Y(`div`,{className:`sub`,textContent:`Top`}),ec(e,`Top`,n(`top`,`None (shirtless / topless)`),()=>t.params.top,e=>r({top:e})),tc(e,()=>t.params.top),Y(`div`,{className:`hint`,textContent:`Topless is available for adult characters; under-18 female characters automatically get a top.`}),Y(`div`,{className:`sub`,textContent:`Jacket`}),ec(e,`Jacket`,n(`jacket`,`None`),()=>t.params.jacket,e=>r({jacket:e})),tc(e,()=>t.params.jacket),Y(`div`,{className:`sub`,textContent:`Bottom`}),ec(e,`Bottom`,n(`bottom`,`None`),()=>t.params.bottom,e=>r({bottom:e})),tc(e,()=>t.params.bottom),rc(e)),o=()=>{let e=t.params.outfit!==`none`;a.classList.toggle(`inactive`,e),i.textContent=e?`A full outfit is selected. Choosing a top or bottom switches to separate pieces.`:``,i.style.display=e?``:`none`};return t.on(`sync`,o),o(),a}function rc(e){let{store:t}=e,n=Y(`input`,{type:`checkbox`}),r=Y(`div`,{className:`hint`});n.addEventListener(`change`,()=>t.set({underwear:n.checked}));let i=()=>{let e=Vt(t.params.age)<18;n.checked=t.params.underwear||e,n.disabled=e,r.textContent=e?`Under-18 characters always wear underwear.`:`Untick for no underwear (bottomless), adults only. Also applies under wrappers, aprons and loincloths.`};return t.on(`sync`,i),i(),Y(`div`,{},Y(`label`,{className:`acc`},n,`Underwear (briefs)`),r)}function ic(e){let{store:t}=e,n=Y(`div`,{});for(let r of G.filter(e=>e.slot===`acc`)){let i=Y(`input`,{type:`checkbox`});i.addEventListener(`change`,()=>{let e=t.params.accessories.includes(r.id);t.set({accessories:e?t.params.accessories.filter(e=>e!==r.id):[...t.params.accessories,r.id]})}),t.on(`sync`,()=>i.checked=t.params.accessories.includes(r.id)),i.checked=t.params.accessories.includes(r.id),n.append(Y(`label`,{className:`acc`},i,r.label)),r.patterns.includes(`beadbands`)||n.append(tc(e,()=>t.params.accessories.includes(r.id)?r.id:``))}return n}function ac(e){let{store:t}=e;return Mt.map(e=>({id:e.id,name:e.label,src:qs(`outfit-thumbs/${e.id}.png`),pick:()=>{let n=t.params;t.set({outfit:e.id,accessories:[...n.accessories,...e.accessories.filter(e=>!n.accessories.includes(e))],...e.shoes?{shoes:e.shoes}:{},...e.hat?{hat:e.hat}:{},...e.carry?{carry:e.carry}:{}}),t.emit(`sync`)}}))}function oc(e){let t=()=>A.get(e.store.params.outfit);return Y(`div`,{},tc(e,()=>t()?.patterns?t().id:``),tc(e,()=>t()&&!(t().patterns&&ke(t()).includes(t().top))?t().top:``),tc(e,()=>t()&&!t().patterns&&t().bottom!==`none`?t().bottom:``))}function sc(e){return tc(e,()=>fe.get(e.store.params.hat)?.slot===`hat`?e.store.params.hat:``)}var cc=G.filter(e=>e.slot===`hat`).map(e=>({id:e.id,name:e.label,src:qs(`picker-thumbs/hat-${e.id}.png`)}));function lc(e){return tc(e,()=>fe.get(e.store.params.shoes)?.slot===`feet`?e.store.params.shoes:``)}function uc(e){let{store:t}=e,n=Qs(e,`Hair tint`,`hairTint`),r=Qs(e,`Hair colour`,`hairColor`,!1),i=()=>{let e=Ve(t.params.hair);n.style.display=e||t.params.hair===`none`?`none`:``,r.style.display=e?``:`none`};t.on(`sync`,i),i();let a=$s(e,e.cat.hair,`hair`,[...Js(`quick-thumbs/hair-none.png`),...on.map(e=>({...e,src:qs(`quick-thumbs/hair-${e.id}.png`)}))]);return a.addEventListener(`click`,()=>requestAnimationFrame(i)),Y(`div`,{},a,n,r)}function dc(e){let{store:t}=e,n=Y(`div`,{}),r=Y(`div`,{className:`hint`}),i=[];for(let e of kt){let r=Y(`input`,{type:`checkbox`});r.addEventListener(`change`,()=>{let n=t.params.tattoos.includes(e);t.set({tattoos:n?t.params.tattoos.filter(t=>t!==e):[...t.params.tattoos,e]})}),i.push(r),n.append(Y(`label`,{className:`acc`},r,yt[e]))}let a=()=>{let e=Vt(t.params.age)>=18;kt.forEach((n,r)=>{i[r].checked=t.params.tattoos.includes(n),i[r].disabled=!e}),r.textContent=e?`Painted on the skin as a separate overlay layer, so they follow body shape and animation.`:`Tattoos are available for adult (18+) characters only.`};return t.on(`sync`,a),a(),n.addEventListener(`change`,()=>requestAnimationFrame(a)),n.append(Qs(e,`Ink colour`,`tattooInk`,!1),r),n}function fc(e){let{store:t}=e;return Y(`div`,{},Y(`div`,{className:`sub`,textContent:`Earrings`}),ec(e,`Earrings`,rt.map(e=>[e,et[e]]),()=>t.params.earrings,e=>t.set({earrings:e})),ec(e,`Metal`,[[`gold`,`Gold`],[`silver`,`Silver`]],()=>t.params.earringMetal,e=>t.set({earringMetal:e})))}var pc={rifle:`rifle_idle`,pistol:`pistol_idle`,sword:`sword_idle`,knife:`sword_idle`};function mc(e){let{store:t}=e;return Y(`div`,{},ec(e,`Held weapon`,nn.map(e=>[e,_e[e]]),()=>t.params.weapon,n=>{t.set({weapon:n});let r=pc[n];r&&t.params.rig!==`none`&&e.playClip(r)}),Y(`div`,{className:`hint`,textContent:`Held in the right hand on a "WeaponR" socket bone, the standard way games attach props. Shooter / sword animations are fitted to it. Export can keep it in the hand or save it as a separate prop file.`}))}function hc(e){let{store:t}=e;return Y(`div`,{},ec(e,`Carry`,v.map(e=>[e,O[e]]),()=>t.params.carry,n=>{t.set({carry:n}),n===`parcel`&&t.params.rig!==`none`&&e.playClip(`carry_idle`),t.emit(`sync`)}),tc(e,()=>t.params.carry===`none`?``:t.params.carry))}function gc(e){let{store:t}=e,n=``,r=!1,i=Y(`input`,{type:`checkbox`,ariaLabel:`Show vehicle`}),a=Y(`label`,{className:`acc`},i,`Show vehicle`);i.addEventListener(`change`,()=>{r=!i.checked,t.set({vehicle:i.checked?`auto`:`none`}),t.emit(`sync`)}),t.on(`clip`,e=>{n=e;let i=le[e];if(i&&!r){let e=ue(i,t.params.vehicleStyle);(t.params.vehicle!==`auto`||JSON.stringify(e)!==JSON.stringify(t.params.vehicleStyle))&&t.set({vehicle:`auto`,vehicleStyle:e})}t.emit(`sync`)});let o=Y(`div`,{}),s=(e,n)=>t.set({vehicleStyle:{...t.params.vehicleStyle,[e]:n}});for(let[e,n]of[[`color`,`Body / coat`],[`accentColor`,`Trim / mane`],[`seatColor`,`Seats / tack`]]){let r=Y(`input`,{type:`color`,ariaLabel:`Vehicle ${n}`});r.addEventListener(`change`,()=>s(e,r.value)),t.on(`sync`,()=>r.value=t.params.vehicleStyle[e]),r.value=t.params.vehicleStyle[e],o.append(Y(`label`,{className:`ctl wide`},Y(`span`,{textContent:n}),r))}for(let[n,r]of[[`finish`,f],[`variant`,ut]])o.append(ec(e,n===`finish`?`Finish`:`Style`,r.map(e=>[e,e[0].toUpperCase()+e.slice(1)]),()=>t.params.vehicleStyle[n],e=>s(n,e)));let c=()=>{i.checked=t.params.vehicle!==`none`,a.hidden=!le[n],o.hidden=!le[n]||t.params.vehicle===`none`};return t.on(`sync`,c),c(),Y(`div`,{},a,o,Y(`div`,{className:`hint`,textContent:`Choose a riding or driving animation to add its vehicle automatically. Appearance is editable here; vehicle selection follows the animation.`}))}function _c(e){let{store:t,cat:n}=e,r=()=>t.params,i=J(`#controls`);i.append(Ys(`Body`,!0,Xs(e,`Gender`,()=>r().gender,e=>t.set({gender:e}),0,1,.01,e=>e<.35?`female`:e>.65?`male`:`mixed`),Xs(e,`Age`,()=>Vt(r().age),e=>t.set({age:Jt(e)}),12,90,1,e=>`${e.toFixed(0)} y`),Zs(e,`Muscle`,`muscle`),Zs(e,`Weight`,`weight`),Zs(e,`Height`,`height`),Zs(e,`Proportions`,`proportions`),Zs(e,`Breast size`,`breastSize`),Zs(e,`Breast firmness`,`breastFirmness`)),Ys(`Ethnicity`,!1,Y(`div`,{className:`hint`,textContent:`Blended mix; also picks the matching skin texture in Auto mode.`}),Zs(e,`African`,`african`),Zs(e,`Asian`,`asian`),Zs(e,`Caucasian`,`caucasian`)),Ys(`Skin & eyes`,!0,$s(e,n.skins,`skin`,[{id:`auto`,name:`Auto`,src:qs(`picker-thumbs/skin-auto.png`)}]),Qs(e,`Skin tint`,`skinTint`),Y(`div`,{className:`sub`,textContent:`Eyes`}),$s(e,n.eyes,`eyes`),Y(`div`,{className:`sub`,textContent:`Eyebrows`}),$s(e,n.eyebrows,`eyebrows`,Js(`picker-thumbs/eyebrows-none.png`)),Y(`div`,{className:`sub`,textContent:`Eyelashes`}),$s(e,n.eyelashes,`eyelashes`,Js(`picker-thumbs/eyelashes-none.png`))),Ys(`Hair`,!0,uc(e)),Ys(`Expression`,!0,ec(e,`Expression`,qe.map(e=>[e,Ze[e]]),()=>r().expression,e=>t.set({expression:e})),Y(`div`,{className:`hint`,textContent:`The resting face in the viewer and in every exported animation. Characters also blink and glance around.`}),ec(e,`Teeth`,[[`none`,`None`],...(n.teeth??[]).map(e=>[e.id,e.id===`teeth_base`?`Natural`:e.name.replace(/^Teeth shape /,`Shape `)])],()=>r().teeth,e=>t.set({teeth:e}))),Ys(`Facial hair`,!1,ec(e,`Style`,Fe.map(e=>[e,Xt[e]]),()=>r().facialHair,e=>t.set({facialHair:e})),Qs(e,`Beard colour`,`beardColor`,!1)),Ys(`Tattoos`,!1,dc(e)),Ys(`Clothing`,!0,Y(`div`,{className:`hint`,textContent:`Pick a full outfit, or "Separate pieces" to combine tops, bottoms, wrappers and accessories.`}),$s(e,n.outfits,`outfit`,[{id:`none`,name:`Separate pieces`,src:qs(`picker-thumbs/separate-pieces.png`)}],ac(e)),oc(e),Qs(e,`Outfit tint`,`outfitTint`),nc(e),Y(`div`,{className:`sub`,textContent:`Footwear`}),$s(e,n.shoes,`shoes`,[[`none`,`Barefoot`],[`sandals`,`Sandals`],[`combat_boots`,`Combat boots`],[`heels`,`High heels`],[`flipflops`,`Flip-flops`],[`sneakers`,`Sneakers`],[`loafers`,`Loafers`],[`oxfords`,`Oxfords`],[`slides`,`Slides`]].map(([e,t])=>({id:e,name:t,src:qs(`picker-thumbs/shoes-${e}.png`)}))),lc(e),Y(`div`,{className:`sub`,textContent:`Hat`}),$s(e,n.hats,`hat`,[...Js(`picker-thumbs/hat-none.png`),...cc]),sc(e)),Ys(`Accessories`,!0,ic(e),fc(e)),Ys(`Props`,!1,mc(e),hc(e),gc(e)));let a=new Map;for(let i of n.sliders){let n=a.get(i.category)??[];n.push(Y(`div`,{className:`sub`,textContent:i.group}));for(let a of i.sliders)n.push(Xs(e,a.label,()=>r().modifiers[a.id]??0,e=>t.set({modifiers:{...r().modifiers,[a.id]:e}}),a.bipolar?-1:0,1));a.set(i.category,n)}for(let[e,t]of a)i.append(Ys(`${e} details`,!1,...t));let o=Y(`button`,{textContent:`Reset detail sliders`});o.addEventListener(`click`,()=>t.replaceAll({...r(),modifiers:{}}));let s=Y(`select`);for(let e of Re)s.append(new Option({low:`Low (game LOD, ~5k tris)`,medium:`Medium (~30k tris)`,high:`High / HD (~120k tris, subdivided)`}[e],e));s.addEventListener(`change`,()=>t.set({detail:s.value})),t.on(`sync`,()=>s.value=r().detail),s.value=r().detail,i.append(Ys(`Output`,!0,Y(`div`,{className:`ctl wide`},Y(`span`,{textContent:`Detail`}),s),o))}var vc=class{params=yc()??{...ot,name:`Athletic man`};current;exportSettings=bc();listeners={sync:[],params:[],export:[],character:[],clip:[]};on(e,t){this.listeners[e].push(t)}emit(e,...t){for(let n of this.listeners[e])n(...t)}set(e){this.params={...this.params,...e},(`age`in e||`outfit`in e)&&this.emit(`sync`),this.emit(`params`)}replaceAll(e){this.params=e,this.emit(`sync`),this.emit(`params`)}setQuiet(e){this.params={...this.params,...e}}setCharacter(e,t,n){this.current=e;try{localStorage.setItem(`3dgen.human`,JSON.stringify(t))}catch{}this.emit(`character`,e,t,n)}setExport(e){Object.assign(this.exportSettings,e);try{localStorage.setItem(`3dgen.export`,JSON.stringify(this.exportSettings))}catch{}this.exportSettings.mode!==`static`&&this.params.rig===`none`&&this.set({rig:`game`}),this.emit(`export`)}};function yc(){try{let e=localStorage.getItem(`3dgen.human`);return e?{...ot,...JSON.parse(e)}:null}catch{return null}}function bc(){try{return{...w,...JSON.parse(localStorage.getItem(`3dgen.export`)??`{}`)}}catch{return{...w}}}var xc={type:`change`},Sc={type:`start`},Cc={type:`end`},wc=new Pt,Tc=new st,Ec=Math.cos(70*C.DEG2RAD),Dc=new m,Oc=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,Ac=class extends _t{constructor(e,t=null){super(e,t),this.state=$.NONE,this.target=new m,this.cursor=new m,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Se.ROTATE,MIDDLE:Se.DOLLY,RIGHT:Se.PAN},this.touches={ONE:Ke.ROTATE,TWO:Ke.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new m,this._lastQuaternion=new Ht,this._lastTargetPosition=new m,this._quat=new Ht().setFromUnitVectors(e.up,new m(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qt,this._sphericalDelta=new qt,this._scale=1,this._panOffset=new m,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new m,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mc.bind(this),this._onPointerDown=jc.bind(this),this._onPointerUp=Nc.bind(this),this._onContextMenu=Bc.bind(this),this._onMouseWheel=Ic.bind(this),this._onKeyDown=Lc.bind(this),this._onTouchStart=Rc.bind(this),this._onTouchMove=zc.bind(this),this._onMouseDown=Pc.bind(this),this._onMouseMove=Fc.bind(this),this._interceptControlDown=Vc.bind(this),this._interceptControlUp=Hc.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=$.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xc),this.update(),this.state=$.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Dc.copy(t).sub(this.target),Dc.applyQuaternion(this._quat),this._spherical.setFromVector3(Dc),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Oc:n>Math.PI&&(n-=Oc),r<-Math.PI?r+=Oc:r>Math.PI&&(r-=Oc),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Dc.setFromSpherical(this._spherical),Dc.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dc),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Dc.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new m(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new m(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Dc.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<Ec?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Oc/60/60*this.autoRotateSpeed:Oc/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dc.setFromMatrixColumn(t,0),Dc.multiplyScalar(-e),this._panOffset.add(Dc)}_panUp(e,t){this.screenSpacePanning===!0?Dc.setFromMatrixColumn(t,1):(Dc.setFromMatrixColumn(t,0),Dc.crossVectors(this.object.up,Dc)),Dc.multiplyScalar(e),this._panOffset.add(Dc)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Dc.copy(r).sub(this.target);let i=Dc.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Oc*this._rotateDelta.x/t.clientHeight),this._rotateUp(Oc*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Oc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Oc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Oc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Oc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Oc*this._rotateDelta.x/t.clientHeight),this._rotateUp(Oc*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function jc(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Mc(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Nc(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Cc),this.state=$.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Pc(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=$.DOLLY;break;case Se.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}break;case Se.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Sc)}function Fc(e){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Ic(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===$.NONE&&(e.preventDefault(),this.dispatchEvent(Sc),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Cc))}function Lc(e){this.enabled!==!1&&this._handleKeyDown(e)}function Rc(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=$.TOUCH_ROTATE;break;case Ke.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case Ke.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$.TOUCH_DOLLY_PAN;break;case Ke.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Sc)}function zc(e){switch(this._trackPointer(e),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$.NONE}}function Bc(e){this.enabled!==!1&&e.preventDefault()}function Vc(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Hc(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Uc=class extends at{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new wt;e.deleteAttribute(`uv`);let t=new H({side:1}),n=new H,r=new Et(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new y(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new I(e,n,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new y(e,Wc(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new y(e,Wc(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new y(e,Wc(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new y(e,Wc(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new y(e,Wc(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new y(e,Wc(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wc(e){return new Ae({color:0,emissive:16777215,emissiveIntensity:e})}var Gc=class{canvas;textureUrl;renderer;scene=new at;camera=new Rt(30,1,.01,100);controls;mesh=null;helper=null;bones=[];animator=null;clip=null;clipStart=0;speed=1;rootMotion=!1;lastFrame=null;ride=null;rideKey=``;vehicleStyle=l;riderScale=1;vehicle=`none`;blendFrom=null;blendStart=0;onTick;loader=new Ot;texCache=new Map;framedHeight=0;height=0;wireframe=!1;showSkeleton=!1;constructor(e,t){this.canvas=e,this.textureUrl=t,this.renderer=new za({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1.1,this.scene.background=new q(`#2b2f38`);let n=new Kn(this.renderer);this.scene.environment=n.fromScene(new Uc,.04).texture,this.scene.environmentIntensity=.55;let r=new Zt(`#fff4ea`,2.4);r.position.set(2,4,3),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-4e-4,r.shadow.normalBias=.015,Object.assign(r.shadow.camera,{left:-1.5,right:1.5,top:2.5,bottom:-.5,near:.5,far:12}),this.scene.add(r);let i=new Zt(`#b8c8ff`,1.2);i.position.set(-2.5,3,-3),this.scene.add(i);let a=new y(new Kt(4,64).rotateX(-Math.PI/2),new H({color:`#363b46`,roughness:1}));a.receiveShadow=!0,this.scene.add(a);let o=new ct(8,32,`#4c5262`,`#3c414d`);o.material.transparent=!0,o.material.opacity=.5,o.position.y=.001,this.scene.add(o),this.controls=new Ac(this.camera,e),this.controls.enableDamping=!0,this.controls.minDistance=.3,this.camera.position.set(1.4,1.3,4.2),this.controls.target.set(0,.9,0),new ResizeObserver(()=>this.resize()).observe(e),this.resize();let s=()=>{this.tick(),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(s)};s()}resize(){let{clientWidth:e,clientHeight:t}=this.canvas;e&&t&&(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}texture(e,t){let n=e+t,r=this.texCache.get(n);return r||(r=this.loader.load(this.textureUrl(e)),r.colorSpace=t?xt:``,r.anisotropy=8,r.wrapS=r.wrapT=U,this.texCache.set(n,r)),r}show(e){let{mesh:n}=e;this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.forEach(e=>e.dispose()));let r=new He;r.setAttribute(`position`,new zt(n.positions,3)),r.setAttribute(`normal`,new zt(n.normals,3)),r.setAttribute(`uv`,new zt(n.uvs,2)),n.morphs&&(r.morphAttributes.position=n.morphs.deltas.map((e,t)=>{let r=new zt(e,3);return r.name=n.morphs.names[t],r}),r.morphTargetsRelative=!0);let i=n.groups.reduce((e,t)=>e+t.indices.length,0),a=new Uint32Array(i),o=0;for(let e of n.groups)a.set(e.indices,o),r.addGroup(o,e.indices.length,e.material),o+=e.indices.length;r.setIndex(new zt(a,1));let s=n.materials.map(e=>{let t=new H({name:e.name,color:new q(e.color),roughness:e.roughnessMap?1:e.roughness,metalness:e.metalness,map:e.map?this.texture(e.map,!0):null,normalMap:e.normalMap?this.texture(e.normalMap,!1):null,roughnessMap:e.roughnessMap?this.texture(e.roughnessMap,!1):null,side:e.doubleSided?2:0,emissive:e.emissive?new q(e.emissive):new q(0),emissiveIntensity:e.emissive?1.6:0,wireframe:this.wireframe});return e.doubleSided&&(t.shadowSide=0),e.alpha===`mask`?(t.alphaTest=.5,t.alphaToCoverage=!0):e.alpha===`blend`&&(t.transparent=!0,t.opacity=e.opacity??1,t.depthWrite=!1,e.map&&(t.alphaTest=.01)),t});if(e.rig&&n.joints&&n.weights){r.setAttribute(`skinIndex`,new vt(n.joints,4)),r.setAttribute(`skinWeight`,new u(n.weights,4));let t=new mt(r,s);this.bones=e.rig.bones.map((t,n)=>{let r=new it;r.name=t.name;let{t:i,R:a}=Je(e.rig.bones,n);return r.position.set(...i),r.quaternion.set(...Wt(a)),r}),e.rig.bones.forEach((e,n)=>(e.parent>=0?this.bones[e.parent]:t).add(this.bones[n])),t.updateMatrixWorld(!0),t.bind(new Bt(this.bones)),this.mesh=t}else this.bones=[],this.mesh=new y(r,s);n.morphs?.defaults.forEach((e,t)=>this.mesh.morphTargetInfluences&&(this.mesh.morphTargetInfluences[t]=e)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.drawSkeleton(),this.animator=e.rig&&this.bones.length?new t(e.rig,e.face):null,this.dropVehicle(),this.vehicle=e.params.vehicle??`none`,this.vehicleStyle=e.params.vehicleStyle??l,this.riderScale=e.rig?Math.max(...e.rig.bones.flatMap(e=>[e.head[1],e.tail[1]]))/1.8:e.height/1.8,this.height=e.height,(Math.abs(e.height-this.framedHeight)>.2||this.faceMode&&Math.abs(e.height-this.framedHeight)>.02)&&(this.framedHeight=e.height,this.frame()),this.tick()}faceMode=!1;frame(){let e=this.framedHeight||1.75;if(this.faceMode)this.controls.target.set(0,e*.93,.02),this.camera.position.set(.22,e*.95,.7);else if(this.ride){let e=this.ride.bounds,t=e.getSize(new m),n=e.getCenter(new m);n.y=Math.max(n.y,this.height*.55);let r=Math.max(t.x,t.y+this.height*.4,t.z)*1.4+.5;this.controls.target.copy(n),this.camera.position.copy(n).add(new m(r*.4,r*.28,r))}else{let t=e*2.45+.5;this.controls.target.set(0,e*.5,0),this.camera.position.set(t*.33,e*.6,t)}}focusFace(e){this.faceMode=e,this.height&&(this.framedHeight=this.height),this.frame()}drawSkeleton(){this.helper&&=(this.scene.remove(this.helper),this.helper.dispose(),null),this.mesh&&this.bones.length&&(this.helper=new Ue(this.mesh),this.helper.material.depthTest=!1,this.helper.renderOrder=10,this.helper.visible=this.showSkeleton,this.scene.add(this.helper))}tick(){if(!this.animator)return;let e=performance.now()/1e3,t=0,n;if(this.clip){let r=(e-this.clipStart)*this.speed;t=this.clip.loop?r%this.clip.duration:Math.min(r,this.clip.duration),n=this.animator.frame(this.clip,t,{rootMotion:this.rootMotion,faceTime:e,vehicleLift:F(this.vehicle,this.clip.id)?se(F(this.vehicle,this.clip.id),this.riderScale):0})}else n={...this.animator.bind(),morph:this.animator.restFace(e)};if(this.blendFrom){let t=Math.min(1,(e-this.blendStart)/.25);if(t>=1||this.blendFrom.rot.length!==n.rot.length)this.blendFrom=null;else{let e=this.blendFrom,r=new Ht,i=new Ht;n={...n,rot:n.rot.map((n,a)=>(r.set(...e.rot[a]),i.set(...n),r.slerp(i,t),[r.x,r.y,r.z,r.w])),rootPos:new Map([...n.rootPos].map(([n,r])=>{let i=e.rootPos.get(n)??r;return[n,[i[0]+(r[0]-i[0])*t,i[1]+(r[1]-i[1])*t,i[2]+(r[2]-i[2])*t]]})),morph:n.morph}}}if(this.clip&&this.animator.placeParcel(n,this.clip,t,this.rootMotion),this.lastFrame=n,this.rootMotion&&this.clip?.travel){let e=[...n.rootPos.values()][0];e&&this.controls.target.set(e[0],this.controls.target.y,e[2])}n.rot.forEach((e,t)=>{this.bones[t].quaternion.set(e[0],e[1],e[2],e[3]),this.bones[t].scale.set(...n.scale?.get(t)??[1,1,1])});for(let[e,t]of n.rootPos)this.bones[e].position.set(t[0],t[1],t[2]);let r=this.mesh?.morphTargetInfluences;if(r){let t=n.morph??this.animator.face?.defaults??[],i=this.blendFrom?Math.min(1,(e-this.blendStart)/.25):1;t.forEach((e,t)=>r[t]=r[t]+(e-r[t])*i)}this.updateVehicle(n,t),this.onTick?.(this.clip,t)}updateVehicle(e,t){let n=this.clip&&F(this.vehicle,this.clip.id),r=n?`${n}:${this.clip.id}`:``;n?(r!==this.rideKey&&(this.dropVehicle(),this.ride=new Ut(n,this.animator.rig,this.animator,this.clip,this.vehicleStyle),this.rideKey=r,this.scene.add(this.ride.group),this.faceMode||this.frame()),this.ride.update(t,e)):this.ride&&(this.dropVehicle(),this.faceMode||this.frame())}dropVehicle(){this.ride&&(this.scene.remove(this.ride.group),this.ride.dispose(),this.ride=null,this.rideKey=``)}play(e){this.lastFrame&&(this.blendFrom=this.lastFrame,this.blendStart=performance.now()/1e3),this.clip=e,this.clipStart=performance.now()/1e3,this.tick()}get playing(){return this.clip}setWireframe(e){if(this.wireframe=e,this.mesh)for(let t of this.mesh.material)t.wireframe=e}setSkeleton(e){this.showSkeleton=e,this.helper&&(this.helper.visible=e)}get canvasElement(){return this.canvas}characterRect(e=.08){if(!this.mesh)return null;this.mesh.updateMatrixWorld(!0);let t=new Ie().setFromObject(this.mesh);if(t.isEmpty())return null;let n=this.canvas.width,r=this.canvas.height,i=1/0,a=1/0,o=-1/0,s=-1/0;for(let e=0;e<8;e++){let c=new m(e&1?t.max.x:t.min.x,e&2?t.max.y:t.min.y,e&4?t.max.z:t.min.z).project(this.camera),l=(c.x+1)/2*n,u=(1-c.y)/2*r;i=Math.min(i,l),o=Math.max(o,l),a=Math.min(a,u),s=Math.max(s,u)}let c=(o-i)*e,l=(s-a)*e;return i=Math.max(0,i-c),a=Math.max(0,a-l),o=Math.min(n,o+c),s=Math.min(r,s+l),o>i&&s>a?{x:i,y:a,w:o-i,h:s-a}:null}async snapshot(){let e=await new Promise(e=>this.canvas.toBlob(e,`image/png`));return e?new Uint8Array(await e.arrayBuffer()):new Uint8Array}},Kc=new URL(`../assets/`,location.href).href,qc=await new xe(De(Kc)).initCatalog(),Jc=new Lt(qc,Kc),Yc=new Gc(J(`#viewport`),e=>qc.textureUrl(e)),Xc=new vc,Zc={lib:qc,cat:qc.catalog,viewer:Yc,engine:Jc,store:Xc},Qc=Ha(Zc),$c={...Zc,whenIdle:Qc.whenIdle,playClip:e=>el.playClip(e)};_c($c);var el=xn($c);yo($c);var tl=Ba($c);Gs($c);var nl=document.querySelector(`#cafe-use`);nl.hidden=window.parent===window,nl.addEventListener(`click`,async()=>{nl.disabled=!0;try{await $c.whenIdle();let e=pn({...Xc.params,rig:`game`,restPose:`A`,faceBones:!0,detail:`low`,weapon:`none`,carry:`none`,vehicle:`none`});if(e.length>3500)throw Error(`Cấu hình quá lớn, hãy giảm số lựa chọn tùy chỉnh.`);window.parent.postMessage({type:`coffee-avatar-recipe`,code:e},location.origin)}catch(e){alert(e.message)}finally{nl.disabled=!1}}),J(`#studio-btn`).addEventListener(`click`,async()=>{await $c.whenIdle();let e=new URL(`./studio/`,location.href),t=new URLSearchParams({c:pn(Xc.params),detail:Xc.params.detail}),n=new URLSearchParams(location.hash.slice(1)).get(`studioReturn`);n&&t.set(`studioReturn`,n),e.hash=t.toString(),location.assign(e.href)}),Yc.rootMotion=Xc.exportSettings.rootMotion,Xc.on(`export`,()=>Yc.rootMotion=Xc.exportSettings.rootMotion);var rl=new URLSearchParams(location.hash.slice(1)),il=rl.get(`c`),al=rl.get(`detail`),ol=al===`low`||al===`medium`||al===`high`?al:Xc.params.detail,sl=il?mn(il,ol):null,cl=rl.get(`preset`);sl?Xc.params=sl:cl&&Tt[cl]&&(Xc.params={...ot,...Tt[cl],name:cl,detail:Xc.params.detail}),Xc.emit(`sync`),Qc.regenerate(),Ws($c,bo(Xc)),ho($c);var ll=rl.get(`clip`);ll&&o.has(ll)&&el.setActive(ll),rl.has(`skeleton`)&&(J(`#skeleton`).checked=!0,Yc.setSkeleton(!0)),rl.has(`export`)&&tl.open(),rl.has(`demo`)&&Object.assign(window,{ara:{viewer:Yc,store:Xc,play:e=>el.playClip(e)}}),rl.has(`face`)&&(J(`#face`).checked=!0,Yc.focusFace(!0));