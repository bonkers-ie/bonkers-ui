import{j as je}from"./jsx-runtime-D_zvdyIk.js";import{g as Re,r as Z}from"./index-DmM0KDA7.js";import{N as Q,b as De}from"./index-CkXizVTf.js";import"./iframe-DruSGu99.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";var Me=Object.defineProperty,n=(e,t)=>Me(e,"name",{value:t,configurable:!0});function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(null,arguments)}n(h,"_extends");function ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(ue,"_assertThisInitialized");function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},y(e,t)}n(y,"_setPrototypeOf");function fe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}n(fe,"_inheritsLoose");function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(e)}n(I,"_getPrototypeOf");function pe(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}n(pe,"_isNativeFunction");function K(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(K=n(function(){return!!e},"_isNativeReflectConstruct"))()}n(K,"_isNativeReflectConstruct");function de(e,t,r){if(K())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return r&&y(o,r.prototype),o}n(de,"_construct");function E(e){var t=typeof Map=="function"?new Map:void 0;return E=n(function(r){if(r===null||!pe(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return de(r,arguments,I(this).constructor)}return n(a,"Wrapper"),a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),y(a,r)},"_wrapNativeSuper"),E(e)}n(E,"_wrapNativeSuper");var Ae={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function ce(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],o=[],s;for(s=1;s<t.length;s+=1)o.push(t[s]);return o.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}n(ce,"format");var d=function(e){fe(t,e);function t(r){for(var a,o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return a=e.call(this,ce.apply(void 0,[Ae[r]].concat(s)))||this,ue(a)}return n(t,"PolishedError"),t}(E(Error));function P(e){return Math.round(e*255)}n(P,"colorToInt");function ge(e,t,r){return P(e)+","+P(t)+","+P(r)}n(ge,"convertToInt");function v(e,t,r,a){if(a===void 0&&(a=ge),t===0)return a(r,r,r);var o=(e%360+360)%360/60,s=(1-Math.abs(2*r-1))*t,i=s*(1-Math.abs(o%2-1)),u=0,f=0,p=0;o>=0&&o<1?(u=s,f=i):o>=1&&o<2?(u=i,f=s):o>=2&&o<3?(f=s,p=i):o>=3&&o<4?(f=i,p=s):o>=4&&o<5?(u=i,p=s):o>=5&&o<6&&(u=s,p=i);var c=r-s/2,g=u+c,m=f+c,M=p+c;return a(g,m,M)}n(v,"hslToRgb");var X={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function me(e){if(typeof e!="string")return e;var t=e.toLowerCase();return X[t]?"#"+X[t]:e}n(me,"nameToHex");var He=/^#[a-fA-F0-9]{6}$/,ze=/^#[a-fA-F0-9]{8}$/,qe=/^#[a-fA-F0-9]{3}$/,Ne=/^#[a-fA-F0-9]{4}$/,A=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,$e=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Le=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Ue=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function j(e){if(typeof e!="string")throw new d(3);var t=me(e);if(t.match(He))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ze)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(qe))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Ne)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var o=A.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var s=$e.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=Le.exec(t);if(i){var u=parseInt(""+i[1],10),f=parseInt(""+i[2],10)/100,p=parseInt(""+i[3],10)/100,c="rgb("+v(u,f,p)+")",g=A.exec(c);if(!g)throw new d(4,t,c);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10)}}var m=Ue.exec(t.substring(0,50));if(m){var M=parseInt(""+m[1],10),Be=parseInt(""+m[2],10)/100,Te=parseInt(""+m[3],10)/100,W="rgb("+v(M,Be,Te)+")",x=A.exec(W);if(!x)throw new d(4,t,W);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new d(5)}n(j,"parseToRgb");function be(e){var t=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(t,r,a),s=Math.min(t,r,a),i=(o+s)/2;if(o===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,f=o-s,p=i>.5?f/(2-o-s):f/(o+s);switch(o){case t:u=(r-a)/f+(r<a?6:0);break;case r:u=(a-t)/f+2;break;default:u=(t-r)/f+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:p,lightness:i,alpha:e.alpha}:{hue:u,saturation:p,lightness:i}}n(be,"rgbToHsl");function G(e){return be(j(e))}n(G,"parseToHsl");var Ye=n(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),L=Ye;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}n(b,"numberToHex");function _(e){return b(Math.round(e*255))}n(_,"colorToHex");function he(e,t,r){return L("#"+_(e)+_(t)+_(r))}n(he,"convertToHex");function S(e,t,r){return v(e,t,r,he)}n(S,"hslToHex");function ye(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return S(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return S(e.hue,e.saturation,e.lightness);throw new d(1)}n(ye,"hsl");function ve(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?S(e,t,r):"rgba("+v(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?S(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new d(2)}n(ve,"hsla");function F(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return L("#"+b(e)+b(t)+b(r));if(typeof e=="object"&&t===void 0&&r===void 0)return L("#"+b(e.red)+b(e.green)+b(e.blue));throw new d(6)}n(F,"rgb");function w(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var o=j(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?F(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?F(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new d(7)}n(w,"rgba");var Ke=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ge=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Ve=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Je=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function V(e){if(typeof e!="object")throw new d(8);if(Ge(e))return w(e);if(Ke(e))return F(e);if(Je(e))return ve(e);if(Ve(e))return ye(e);throw new d(8)}n(V,"toColorString");function J(e,t,r){return n(function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):J(e,t,a)},"fn")}n(J,"curried");function R(e){return J(e,e.length,[])}n(R,"curry");function D(e,t,r){return Math.max(e,Math.min(t,r))}n(D,"guard");function Se(e,t){if(t==="transparent")return t;var r=G(t);return V(h({},r,{lightness:D(0,1,r.lightness-parseFloat(e))}))}n(Se,"darken");var We=R(Se),Ze=We;function we(e,t){if(t==="transparent")return t;var r=G(t);return V(h({},r,{lightness:D(0,1,r.lightness+parseFloat(e))}))}n(we,"lighten");var Qe=R(we),Xe=Qe;function Ce(e,t){if(t==="transparent")return t;var r=j(t),a=typeof r.alpha=="number"?r.alpha:1,o=h({},r,{alpha:D(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return w(o)}n(Ce,"transparentize");var et=R(Ce),tt=et,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},ee={app:"#F6F9FC",hoverable:tt(.9,l.secondary)},B={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},rt={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},at=rt,ot={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:ee.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:ee.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},te=ot,nt=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:st}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:H}=nt,it=n(e=>typeof e!="string"?(st.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),lt=n(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),ut=n((e,t)=>e==="darken"?w(`${Ze(1,t)}`,.95):e==="lighten"?w(`${Xe(1,t)}`,.95):t,"applyPolished"),xe=n(e=>t=>{if(!it(t)||!lt(t))return t;try{return ut(e,t)}catch{return t}},"colorFactory");xe("lighten");xe("darken");var ft=n(()=>!H||!H.matchMedia?"light":H.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),z={light:te,dark:at,normal:te},q=ft(),ke=n((e={base:q},t)=>{let r={...z[q],...z[e.base]||{},...e,base:z[e.base]?e.base:q};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}},"create");const Oe={brandTitle:"Bonkers-UI Design System",brandUrl:"https://github.com/bonkers-ie/bonkers-ui",brandImage:"https://web-assets.bonkers.ie/packs/static/logo/bonkers_logo-279f0cff5a9b71e3059a.svg",fontBase:'"Inter", Helvetica, Arial, system-ui, sans-serif, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},Pe=ke({base:"light",...Oe,colorPrimary:"#56c55d",colorSecondary:"rgba(86, 197, 93, 0.9)",appBg:"#ffffff",appContentBg:"#ffffff",appPreviewBg:"#ffffff",appBorderColor:"#c2c9d1",appBorderRadius:0,textColor:"#0f131a",textMutedColor:"#6a737c",textInverseColor:"#ffffff",barTextColor:"#6a737c",barHoverColor:"#33373e",barSelectedColor:"#56c55d",barBg:"#ffffff",buttonBg:"#f6f7f9",buttonBorder:"#d6dbe1",inputBg:"#ffffff",inputBorder:"#c2c9d1",inputTextColor:"#56c55d",inputBorderRadius:4}),_e=ke({base:"dark",...Oe,colorPrimary:"#56c55d",colorSecondary:"rgba(86, 197, 93, 0.9)",appBg:"#0f131a",appContentBg:"#0f131a",appPreviewBg:"#0f131a",appBorderColor:"#1c1f25",appBorderRadius:0,textColor:"#ffffff",textMutedColor:"#6a737c",textInverseColor:"#ffffff",barTextColor:"#6a737c",barHoverColor:"#33373e"});var re="DARK_MODE",N,ae;function pt(){return ae||(ae=1,N=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,o,s;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(o=a;o--!==0;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(s=Object.keys(t),a=s.length,a!==Object.keys(r).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[o]))return!1;for(o=a;o--!==0;){var i=s[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}),N}var dt=pt();const oe=Re(dt);function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}var $;function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ne(Object(r),!0).forEach(function(a){ct(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ct(e,t,r){return t=gt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gt(e){var t=mt(e,"string");return C(t)==="symbol"?t:String(t)}function mt(e,t){if(C(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(C(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return vt(e)||yt(e)||ht(e)||bt()}function bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,t){if(e){if(typeof e=="string")return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}}function yt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vt(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const{global:St}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:jt,SET_STORIES:Rt,DOCS_RENDERED:Dt}=__STORYBOOK_MODULE_CORE_EVENTS__;var Ie=St,wt=Ie.document,T=Ie.window,Ee="sb-addon-themes-3";($=T.matchMedia)===null||$===void 0||$.call(T,"(prefers-color-scheme: dark)");var Y={classTarget:"body",dark:Q.dark,darkClass:["dark"],light:Q.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},ie=function(t){T.localStorage.setItem(Ee,JSON.stringify(t))},Ct=function(t,r){var a=r.current,o=r.darkClass,s=o===void 0?Y.darkClass:o,i=r.lightClass,u=i===void 0?Y.lightClass:i;if(a==="dark"){var f,p;(f=t.classList).remove.apply(f,k(O(u))),(p=t.classList).add.apply(p,k(O(s)))}else{var c,g;(c=t.classList).remove.apply(c,k(O(s))),(g=t.classList).add.apply(g,k(O(u)))}},O=function(t){var r=[];return r.concat(t).map(function(a){return a})},xt=function(t){var r=wt.querySelector(t.classTarget);r&&Ct(r,t)},kt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=T.localStorage.getItem(Ee);if(typeof r=="string"){var a=JSON.parse(r);return t&&(t.dark&&!oe(a.dark,t.dark)&&(a.dark=t.dark,ie(a)),t.light&&!oe(a.light,t.light)&&(a.light=t.light,ie(a))),a}return se(se({},Y),t)};xt(kt());const{addons:Mt,useState:At,useEffect:Ht}=__STORYBOOK_MODULE_PREVIEW_API__,{addons:Ot}=__STORYBOOK_MODULE_PREVIEW_API__,le=Ot.getChannel(),Fe=e=>{const[t,r]=Z.useState(document.body.classList.contains("dark"));Z.useEffect(()=>{const o=s=>{r(s)};return le.on(re,o),()=>{le.off(re,o)}},[]);const a=t?_e:Pe;return je.jsx(De,{...e,theme:a,context:e.context})};Fe.__docgenInfo={description:"",methods:[],displayName:"DocsContainer"};const zt={parameters:{options:{storySort:{method:"",order:["Example","Components"],locales:""}},docs:{container:Fe},darkMode:{classTarget:"body",stylePreview:!0,dark:_e,light:Pe},stylePreview:!0,actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"Bonkers",values:[{name:"Bonkers",value:"url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)"},{name:"Light",value:"#ccc"},{name:"Dark",value:"#202124"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{zt as default};
