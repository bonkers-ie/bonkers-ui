var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{_ as u,q as h,a4 as b,aI as j,X as $,a3 as I,a8 as w,F as D,aJ as N,aK as S,N as y,a0 as p,f as E,aA as P}from"./index-ae7b3213.js";import{W as _}from"./index-681e4b07-45273f47.js";var A=u,F=h.findIndex,L=b,v="findIndex",O=!0;v in[]&&Array(1)[v](function(){O=!1});A({target:"Array",proto:!0,forced:O},{findIndex:i(function(r){return F(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});L(v);var M=u,q=_,R=b;M({target:"Array",proto:!0},{fill:q});R("fill");var T=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),U=$,W=j,C=I,G=w,c=T,d=D,K=N,V=S;W("search",function(e,r,t){return[i(function(a){var s=G(this),o=a==null?void 0:K(a,e);return o?U(o,a,s):new RegExp(a)[e](d(s))},"search"),function(n){var a=C(this),s=d(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=V(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var g=y,X=i(function(e){return e!==void 0&&(g(e,"value")||g(e,"writable"))},"isDataDescriptor$1"),J=u,k=$,z=p,B=I,H=X,Q=E,Y=P;function m(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(B(e)===t)return e[r];if(n=Q.f(e,r),n)return H(n)?n.value:n.get===void 0?void 0:k(n.get,t);if(z(a=Y(e)))return m(a,r,t)}i(m,"get");J({target:"Reflect",stat:!0},{get:m});var Z=p,rr=Math.floor,er=Number.isInteger||i(function(r){return!Z(r)&&isFinite(r)&&rr(r)===r},"isInteger"),ar=u,tr=er;ar({target:"Number",stat:!0},{isInteger:tr});export{er as i};
//# sourceMappingURL=es.number.is-integer-faaebefc.js.map