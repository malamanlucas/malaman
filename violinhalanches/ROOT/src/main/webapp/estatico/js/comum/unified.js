/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();if("area"===u){r=t.parentNode;i=r.name;if(!t.href||!i||r.nodeName.toLowerCase()!=="map"){return false}o=e("img[usemap=#"+i+"]")[0];return!!o&&s(o)}return(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});e.fn.extend({focus:function(t){return function(n,r){return typeof n==="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus();if(r){r.call(t)}},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;if(e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0)}else{t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t){return this.css("zIndex",n)}if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0){return s}}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++n}})},removeUniqueId:function(){return this.each(function(){if(r.test(this.id)){e(this).removeAttr("id")}})}});e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}});if(!e("<a>").outerWidth(1).jquery){e.each(["Width","Height"],function(n,r){function u(t,n,r,s){e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0;if(r){n-=parseFloat(e.css(t,"border"+this+"Width"))||0}if(s){n-=parseFloat(e.css(t,"margin"+this))||0}});return n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){if(n===t){return o["inner"+r].call(this)}return this.each(function(){e(this).css(s,u(this,n)+"px")})};e.fn["outer"+r]=function(t,n){if(typeof t!=="number"){return o["outer"+r].call(this,t)}return this.each(function(){e(this).css(s,u(this,t,true,n)+"px")})}})}if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}if(e("<a>").data("a-b","a").removeData("a-b").data("a-b")){e.fn.removeData=function(t){return function(n){if(arguments.length){return t.call(this,e.camelCase(n))}else{return t.call(this)}}}(e.fn.removeData)}e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());e.support.selectstart="onselectstart"in document.createElement("div");e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r){s.plugins[i]=s.plugins[i]||[];s.plugins[i].push([n,r[i]])}},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return}for(r=0;r<i.length;r++){if(e.options[i[r][0]]){i[r][1].apply(e.element,n)}}}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden"){return false}var r=n&&n==="left"?"scrollLeft":"scrollTop",i=false;if(t[r]>0){return true}t[r]=1;i=t[r]>0;t[r]=0;return i}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++){try{e(r).triggerHandler("remove")}catch(s){}}i(t)};e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1];i=f+"-"+t;if(!r){r=n;n=e.Widget}e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)};e[f]=e[f]||{};s=e[f][t];o=e[f][t]=function(e,t){if(!this._createWidget){return new o(e,t)}if(arguments.length){this._createWidget(e,t)}};e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]});u=new n;u.options=e.widget.extend({},u.options);e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;this._super=e;this._superApply=i;s=r.apply(this,arguments);this._super=t;this._superApply=n;return s}}()});o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i});if(s){e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)});delete s._childConstructors}else{n._childConstructors.push(o)}e.widget.bridge(t,o)};e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++){for(u in i[s]){a=i[s][u];if(i[s].hasOwnProperty(u)&&a!==t){if(e.isPlainObject(a)){n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a)}else{n[u]=a}}}}return n};e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o==="string",a=r.call(arguments,1),f=this;o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o;if(u){this.each(function(){var r,i=e.data(this,s);if(!i){return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'")}if(!e.isFunction(i[o])||o.charAt(0)==="_"){return e.error("no such method '"+o+"' for "+n+" widget instance")}r=i[o].apply(i,a);if(r!==i&&r!==t){f=r&&r.jquery?f.pushStack(r.get()):r;return false}})}else{this.each(function(){var t=e.data(this,s);if(t){t.option(o||{})._init()}else{e.data(this,s,new i(o,this))}})}return f}};e.Widget=function(){};e.Widget._childConstructors=[];e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0];this.element=e(r);this.uuid=n++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=e.widget.extend({},this.options,this._getCreateOptions(),t);this.bindings=e();this.hoverable=e();this.focusable=e();if(r!==this){e.data(r,this.widgetFullName,this);this._on(true,this.element,{remove:function(e){if(e.target===r){this.destroy()}}});this.document=e(r.style?r.ownerDocument:r.document||r);this.window=e(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0){return e.widget.extend({},this.options)}if(typeof n==="string"){i={};s=n.split(".");n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++){o[s[u]]=o[s[u]]||{};o=o[s[u]]}n=s.pop();if(r===t){return o[n]===t?null:o[n]}o[n]=r}else{if(r===t){return this.options[n]===t?null:this.options[n]}i[n]=r}}this._setOptions(i);return this},_setOptions:function(e){var t;for(t in e){this._setOption(t,e[t])}return this},_setOption:function(e,t){this.options[e]=t;if(e==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(t,n,r){var i,s=this;if(typeof t!=="boolean"){r=n;n=t;t=false}if(!r){r=n;n=this.element;i=this.widget()}else{n=i=e(n);this.bindings=this.bindings.add(n)}e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===true||e(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?s[o]:o).apply(s,arguments)}if(typeof o!=="string"){u.guid=o.guid=o.guid||u.guid||e.guid++}var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];if(l){i.delegate(l,f,u)}else{n.bind(f,u)}})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e==="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{};n=e.Event(n);n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase();n.target=this.element[0];s=n.originalEvent;if(s){for(i in s){if(!(i in n)){n[i]=s[i]}}}this.element.trigger(n,r);return!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===false||n.isDefaultPrevented())}};e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){if(typeof i==="string"){i={effect:i}}var o,u=!i?t:i===true||typeof i==="number"?n:i.effect||n;i=i||{};if(typeof i==="number"){i={duration:i}}o=!e.isEmptyObject(i);i.complete=s;if(i.delay){r.delay(i.delay)}if(o&&e.effects&&e.effects.effect[u]){r[t](i)}else if(u!==t&&r[u]){r[u](i.duration,i.easing,s)}else{r.queue(function(n){e(this)[t]();if(s){s.call(r[0])}n()})}}})})(jQuery);(function(e,t){var n=false;e(document).mouseup(function(){n=false});e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(true===e.data(n.target,t.widgetName+".preventClickEvent")){e.removeData(n.target,t.widgetName+".preventClickEvent");n.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(t){if(n){return}this._mouseStarted&&this._mouseUp(t);this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel==="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:false;if(!i||s||!this._mouseCapture(t)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==false;if(!this._mouseStarted){t.preventDefault();return true}}if(true===e.data(t.target,this.widgetName+".preventClickEvent")){e.removeData(t.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(e){return r._mouseMove(e)};this._mouseUpDelegate=function(e){return r._mouseUp(e)};e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);t.preventDefault();n=true;return true},_mouseMove:function(t){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button){return this._mouseUp(t)}if(this._mouseStarted){this._mouseDrag(t);return t.preventDefault()}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==false;this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)}return!this._mouseStarted},_mouseUp:function(t){e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(t.target===this._mouseDownEvent.target){e.data(t.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(t)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);(function(e,t){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];if(n.nodeType===9){return{width:t.width(),height:t.height(),offset:{top:0,left:0}}}if(e.isWindow(n)){return{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}}if(n.preventDefault){return{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}}return{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t){return n}var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];e("body").append(s);r=o.offsetWidth;s.css("overflow","scroll");i=o.offsetWidth;if(r===i){i=s[0].clientWidth}s.remove();return n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}};e.fn.position=function(t){if(!t||!t.of){return c.apply(this,arguments)}t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};y=d(b);if(b[0].preventDefault){t.at="left top"}l=y.width;v=y.height;m=y.offset;g=e.extend({},m);e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;if(e.length===1){e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]}e[0]=o.test(e[0])?e[0]:"center";e[1]=u.test(e[1])?e[1]:"center";n=a.exec(e[0]);r=a.exec(e[1]);x[this]=[n?n[0]:0,r?r[0]:0];t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]});if(S.length===1){S[1]=S[0]}if(t.at[0]==="right"){g.left+=l}else if(t.at[0]==="center"){g.left+=l/2}if(t.at[1]==="bottom"){g.top+=v}else if(t.at[1]==="center"){g.top+=v/2}n=h(x.at,l,v);g.left+=n[0];g.top+=n[1];return this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());if(t.my[0]==="right"){C.left-=f}else if(t.my[0]==="center"){C.left-=f/2}if(t.my[1]==="bottom"){C.top-=c}else if(t.my[1]==="center"){C.top-=c/2}C.left+=k[0];C.top+=k[1];if(!e.support.offsetFractions){C.left=s(C.left);C.top=s(C.top)}o={marginLeft:d,marginTop:y};e.each(["left","top"],function(r,i){if(e.ui.position[S[r]]){e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}});if(t.using){u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};if(l<f&&i(n+s)<l){h.horizontal="center"}if(v<c&&i(o+u)<v){h.vertical="middle"}if(r(i(n),i(s))>r(i(o),i(u))){h.important="horizontal"}else{h.important="vertical"}t.using.call(this,e,h)}}a.offset(e.extend(C,{using:u}))})};e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;if(t.collisionWidth>s){if(u>0&&a<=0){f=e.left+u+t.collisionWidth-s-i;e.left+=u-f}else if(a>0&&u<=0){e.left=i}else{if(u>a){e.left=i+s-t.collisionWidth}else{e.left=i}}}else if(u>0){e.left+=u}else if(a>0){e.left-=a}else{e.left=r(e.left-o,e.left)}},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;if(t.collisionHeight>s){if(u>0&&a<=0){f=e.top+u+t.collisionHeight-s-i;e.top+=u-f}else if(a>0&&u<=0){e.top=i}else{if(u>a){e.top=i+s-t.collisionHeight}else{e.top=i}}}else if(u>0){e.top+=u}else if(a>0){e.top-=a}else{e.top=r(e.top-o,e.top)}}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a)){e.left+=l+c+h}}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f){e.left+=l+c+h}}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;if(a<0){v=e.top+c+h+p+t.collisionHeight-s-r;if(e.top+c+h+p>a&&(v<0||v<i(a))){e.top+=c+h+p}}else if(f>0){d=e.top-t.collisionPosition.marginTop+c+h+p-o;if(e.top+c+h+p>f&&(d>0||i(d)<f)){e.top+=c+h+p}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments);e.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body");r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(o){e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"})}for(s in r){t.style[s]=r[s]}t.appendChild(u);n=o||document.documentElement;n.insertBefore(t,n.firstChild);u.style.cssText="position: absolute; left: 10.7432222px;";i=e(u).offset().left;e.support.offsetFractions=i>10&&i<11;t.innerHTML="";n.removeChild(t)})()})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;if(this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(t);if(!this.handle){return false}e(n.iframeFix===true?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")});return true},_mouseStart:function(t){var n=this.options;this.helper=this._createHelper(t);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(e.ui.ddmanager){e.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offsetParent=this.helper.offsetParent();this.offsetParentCssPosition=this.offsetParent.css("position");this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.offset.scroll=false;e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(t);this.originalPageX=t.pageX;this.originalPageY=t.pageY;n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt);this._setContainment();if(this._trigger("start",t)===false){this._clear();return false}this._cacheHelperProportions();if(e.ui.ddmanager&&!n.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}this._mouseDrag(t,true);if(e.ui.ddmanager){e.ui.ddmanager.dragStart(this,t)}return true},_mouseDrag:function(t,n){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(t);this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===false){this._mouseUp({});return false}this.position=r.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.positionAbs.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.positionAbs.top+"px"}if(e.ui.ddmanager){e.ui.ddmanager.drag(this,t)}return false},_mouseStop:function(t){var n=this,r=false;if(e.ui.ddmanager&&!this.options.dropBehaviour){r=e.ui.ddmanager.drop(this,t)}if(this.dropped){r=this.dropped;this.dropped=false}if(this.options.helper==="original"&&!e.contains(this.element[0].ownerDocument,this.element[0])){return false}if(this.options.revert==="invalid"&&!r||this.options.revert==="valid"&&r||this.options.revert===true||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,r)){e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(n._trigger("stop",t)!==false){n._clear()}})}else{if(this._trigger("stop",t)!==false){this._clear()}}return false},_mouseUp:function(t){e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(e.ui.ddmanager){e.ui.ddmanager.dragStop(this,t)}return e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:true},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;if(!r.parents("body").length){r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo)}if(r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))){r.css("position","absolute")}return r},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if(e.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){var t=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft();t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;if(!i.containment){this.containment=null;return}if(i.containment==="window"){this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment==="document"){this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment.constructor===Array){this.containment=i.containment;return}if(i.containment==="parent"){i.containment=this.helper[0].parentNode}n=e(i.containment);r=n[0];if(!r){return}t=n.css("overflow")!=="hidden";this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=n},_convertPositionTo:function(t,n){if(!n){n=this.position}var r=t==="absolute"?1:-1,i=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;if(!this.offset.scroll){this.offset.scroll={top:i.scrollTop(),left:i.scrollLeft()}}return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=t.pageX,f=t.pageY;if(!this.offset.scroll){this.offset.scroll={top:u.scrollTop(),left:u.scrollLeft()}}if(this.originalPosition){if(this.containment){if(this.relative_container){r=this.relative_container.offset();n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]}else{n=this.containment}if(t.pageX-this.offset.click.left<n[0]){a=n[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<n[1]){f=n[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>n[2]){a=n[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>n[3]){f=n[3]+this.offset.click.top}}if(o.grid){i=o.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;f=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i;s=o.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;a=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s}}return{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(t,n,r){r=r||this._uiHash();e.ui.plugin.call(this,t,[n,r]);if(t==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[];e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");if(n&&!n.options.disabled){r.sortables.push({instance:n,shouldRevert:n.options.revert});n.refreshPositions();n._trigger("activate",t,s)}})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;r.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=this.shouldRevert}this.instance._mouseStop(t);this.instance.options.helper=this.instance.options._helper;if(r.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",t,i)}})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=false,o=this;this.instance.positionAbs=r.positionAbs;this.instance.helperProportions=r.helperProportions;this.instance.offset.click=r.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){s=true;e.each(r.sortables,function(){this.instance.positionAbs=r.positionAbs;this.instance.helperProportions=r.helperProportions;this.instance.offset.click=r.offset.click;if(this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])){s=false}return s})}if(s){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return n.helper[0]};t.target=this.instance.currentItem[0];this.instance._mouseCapture(t,true);this.instance._mouseStart(t,true,true);this.instance.offset.click.top=r.offset.click.top;this.instance.offset.click.left=r.offset.click.left;this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top;r._trigger("toSortable",t);r.dropped=this.instance.element;r.currentItem=r.element;this.instance.fromOutside=r}if(this.instance.currentItem){this.instance._mouseDrag(t)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",t,this.instance._uiHash(this.instance));this.instance._mouseStop(t,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}r._trigger("fromSortable",t);r.dropped=false}}})}});e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;if(t.css("cursor")){n._cursor=t.css("cursor")}t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;if(t._cursor){e("body").css("cursor",t._cursor)}}});e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;if(r.css("opacity")){i._opacity=r.css("opacity")}r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;if(r._opacity){e(n.helper).css("opacity",r._opacity)}}});e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");if(t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"){t.overflowOffset=t.scrollParent.offset()}},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=false;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x"){if(n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity){n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed}else if(t.pageY-n.overflowOffset.top<r.scrollSensitivity){n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed}}if(!r.axis||r.axis!=="y"){if(n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity){n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed}else if(t.pageX-n.overflowOffset.left<r.scrollSensitivity){n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed}}}else{if(!r.axis||r.axis!=="x"){if(t.pageY-e(document).scrollTop()<r.scrollSensitivity){i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed)}else if(e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity){i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed)}}if(!r.axis||r.axis!=="y"){if(t.pageX-e(document).scrollLeft()<r.scrollSensitivity){i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed)}else if(e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity){i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed)}}}if(i!==false&&e.ui.ddmanager&&!r.dropBehaviour){e.ui.ddmanager.prepareOffsets(n,t)}}});e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[];e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();if(this!==t.element[0]){t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})}})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left;a=u+p.snapElements[c].width;f=p.snapElements[c].top;l=f+p.snapElements[c].height;if(g<u-v||m>a+v||b<f-v||y>l+v||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)){if(p.snapElements[c].snapping){p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item}))}p.snapElements[c].snapping=false;continue}if(d.snapMode!=="inner"){r=Math.abs(f-b)<=v;i=Math.abs(l-y)<=v;s=Math.abs(u-g)<=v;o=Math.abs(a-m)<=v;if(r){n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top}if(i){n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top}if(s){n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left}if(o){n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left}}h=r||i||s||o;if(d.snapMode!=="outer"){r=Math.abs(f-y)<=v;i=Math.abs(l-b)<=v;s=Math.abs(u-m)<=v;o=Math.abs(a-g)<=v;if(r){n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top}if(i){n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top}if(s){n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left}if(o){n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left}}if(!p.snapElements[c].snapping&&(r||i||s||o||h)){p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item}))}p.snapElements[c].snapping=r||i||s||o||h}}});e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length){return}t=parseInt(e(r[0]).css("zIndex"),10)||0;e(r).each(function(n){e(this).css("zIndex",t+n)});this.css("zIndex",t+r.length)}});e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;if(r.css("zIndex")){i._zIndex=r.css("zIndex")}r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;if(r._zIndex){e(n.helper).css("zIndex",r._zIndex)}}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;this.isover=false;this.isout=true;this.accept=e.isFunction(n)?n:function(e){return e.is(n)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[];e.ui.ddmanager.droppables[t.scope].push(this);t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];for(;t<n.length;t++){if(n[t]===this){n.splice(t,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){if(t==="accept"){this.accept=e.isFunction(n)?n:function(e){return e.is(n)}}e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(n){this._trigger("activate",t,this.ui(n))}},_deactivate:function(t){var n=e.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(n){this._trigger("deactivate",t,this.ui(n))}},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],n.currentItem||n.element)){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",t,this.ui(n))}},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],n.currentItem||n.element)){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",t,this.ui(n))}},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=false;if(!r||(r.currentItem||r.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)){i=true;return false}});if(i){return false}if(this.accept.call(this.element[0],r.currentItem||r.element)){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",t,this.ui(r));return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}});e.ui.intersect=function(e,t,r){if(!t.offset){return false}var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;case"pointer":i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left;s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top;return n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return false}};e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element)){continue}for(i=0;i<u.length;i++){if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}}s[r].visible=s[r].element.css("display")!=="none";if(!s[r].visible){continue}if(o==="mousedown"){s[r]._activate.call(s[r],n)}s[r].offset=s[r].element.offset();s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(t,n){var r=false;e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)){r=this._drop.call(this,n)||r}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)){this.isout=true;this.isover=false;this._deactivate.call(this,n)}});return r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){if(!t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}})},drag:function(t,n){if(t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;if(!u){return}if(this.options.greedy){i=this.options.scope;s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i});if(s.length){r=e.data(s[0],"ui-droppable");r.greedyChild=u==="isover"}}if(r&&u==="isover"){r.isover=false;r.isout=true;r._out.call(r,n)}this[u]=true;this[u==="isout"?"isover":"isout"]=false;this[u==="isover"?"_over":"_out"].call(this,n);if(r&&u==="isout"){r.isout=false;r.isover=true;r._over.call(r,n)}})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable");if(!t.options.refreshPositions){e.ui.ddmanager.prepareOffsets(t,n)}}}})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=u.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}t=this.handles.split(",");this.handles={};for(n=0;n<t.length;n++){r=e.trim(t[n]);s="ui-resizable-"+r;i=e("<div class='ui-resizable-handle "+s+"'></div>");i.css({zIndex:u.zIndex});if("se"===r){i.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[r]=".ui-resizable-"+r;this.element.append(i)}}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){if(this.handles[n].constructor===String){this.handles[n]=e(this.handles[n],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){r=e(this.handles[n],this.element);s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(i,s);this._proportionallyResize()}if(!e(this.handles[n]).length){continue}}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!o.resizing){if(this.className){i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}o.axis=i&&i[1]?i[1]:"se"}});if(u.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled){return}e(this).removeClass("ui-resizable-autohide");o._handles.show()}).mouseleave(function(){if(u.disabled){return}if(!o.resizing){e(this).addClass("ui-resizable-autohide");o._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){n(this.element);t=this.element;this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t);t.remove()}this.originalElement.css("resize",this.originalResizeStyle);n(this.originalElement);return this},_mouseCapture:function(t){var n,r,i=false;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target)){i=true}}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;this.resizing=true;if(/absolute/.test(a.css("position"))){a.css({position:"absolute",top:a.css("top"),left:a.css("left")})}else if(a.is(".ui-draggable")){a.css({position:"absolute",top:u.top,left:u.left})}this._renderProxy();r=n(this.helper.css("left"));i=n(this.helper.css("top"));if(o.containment){r+=e(o.containment).scrollLeft()||0;i+=e(o.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:r,top:i};this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()};this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()};this.originalPosition={left:r,top:i};this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()};this.originalMousePosition={left:t.pageX,top:t.pageY};this.aspectRatio=typeof o.aspectRatio==="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;s=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",s==="auto"?this.axis+"-resize":s);a.addClass("ui-resizable-resizing");this._propagate("start",t);return true},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p){return false}n=p.apply(this,[t,c,h]);this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey){n=this._updateRatio(n,t)}n=this._respectSize(n,t);this._updateCache(n);this._propagate("resize",t);if(this.position.top!==u){i.top=this.position.top+"px"}if(this.position.left!==a){i.left=this.position.left+"px"}if(this.size.width!==f){i.width=this.size.width+"px"}if(this.size.height!==l){i.height=this.size.height+"px"}r.css(i);if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!e.isEmptyObject(i)){this._trigger("resize",t,this.ui())}return false},_mouseStop:function(t){this.resizing=false;var n,r,i,s,o,u,a,f=this.options,l=this;if(this._helper){n=this._proportionallyResizeElements;r=n.length&&/textarea/i.test(n[0].nodeName);i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height;s=r?0:l.sizeDiff.width;o={width:l.helper.width()-s,height:l.helper.height()-i};u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null;a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null;if(!f.animate){this.element.css(e.extend(o,{top:a,left:u}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!f.animate){this._proportionallyResize()}}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",t);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e){t=o.minHeight*this.aspectRatio;i=o.minWidth/this.aspectRatio;n=o.maxHeight*this.aspectRatio;s=o.maxWidth/this.aspectRatio;if(t>o.minWidth){o.minWidth=t}if(i>o.minHeight){o.minHeight=i}if(n<o.maxWidth){o.maxWidth=n}if(s<o.maxHeight){o.maxHeight=s}}this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset();if(r(e.left)){this.position.left=e.left}if(r(e.top)){this.position.top=e.top}if(r(e.height)){this.size.height=e.height}if(r(e.width)){this.size.width=e.width}},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;if(r(e.height)){e.width=e.height*this.aspectRatio}else if(r(e.width)){e.height=e.width/this.aspectRatio}if(i==="sw"){e.left=t.left+(n.width-e.width);e.top=null}if(i==="nw"){e.top=t.top+(n.height-e.height);e.left=t.left+(n.width-e.width)}return e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);if(o){e.width=t.minWidth}if(u){e.height=t.minHeight}if(i){e.width=t.maxWidth}if(s){e.height=t.maxHeight}if(o&&l){e.left=a-t.minWidth}if(i&&l){e.left=a-t.maxWidth}if(u&&c){e.top=f-t.minHeight}if(s&&c){e.top=f-t.maxHeight}if(!e.width&&!e.height&&!e.left&&e.top){e.top=null}else if(!e.width&&!e.height&&!e.top&&e.left){e.left=null}return e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[];n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")];r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++){this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||e("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]);t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(i&&i.length){e(i[0]).css({width:r.width,height:r.height})}n._updateCache(r);n._propagate("resize",t)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p){return}f.containerElement=e(p);if(/document/.test(h)||h===document){f.containerOffset={left:0,top:0};f.containerPosition={left:0,top:0};f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{t=e(p);r=[];e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))});f.containerOffset=t.offset();f.containerPosition=t.position();f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]};i=f.containerOffset;s=f.containerSize.height;o=f.containerSize.width;u=e.ui.hasScroll(p,"left")?p.scrollWidth:o;a=e.ui.hasScroll(p)?p.scrollHeight:s;f.parentData={element:p,left:i.left,top:i.top,width:u,height:a}}},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;if(h[0]!==document&&/static/.test(h.css("position"))){c=a}if(f.left<(o._helper?a.left:0)){o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left);if(l){o.size.height=o.size.width/o.aspectRatio}o.position.left=u.helper?a.left:0}if(f.top<(o._helper?a.top:0)){o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top);if(l){o.size.width=o.size.height*o.aspectRatio}o.position.top=o._helper?a.top:0}o.offset.left=o.parentData.left+o.position.left;o.offset.top=o.parentData.top+o.position.top;n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width);r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height);i=o.containerElement.get(0)===o.element.parent().get(0);s=/relative|absolute/.test(o.containerElement.css("position"));if(i&&s){n-=o.parentData.left}if(n+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-n;if(l){o.size.height=o.size.width/o.aspectRatio}}if(r+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-r;if(l){o.size.width=o.size.height*o.aspectRatio}}},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;if(t._helper&&!n.animate&&/relative/.test(s.css("position"))){e(this).css({left:u.left-i.left-r.left,width:a,height:f})}if(t._helper&&!n.animate&&/static/.test(s.css("position"))){e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}});e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};if(typeof n.alsoResize==="object"&&!n.alsoResize.parentNode){if(n.alsoResize.length){n.alsoResize=n.alsoResize[0];r(n.alsoResize)}else{e.each(n.alsoResize,function(e){r(e)})}}else{r(n.alsoResize)}},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);if(n&&n>=0){s[t]=n||null}});t.css(s)})};if(typeof i.alsoResize==="object"&&!i.alsoResize.nodeType){e.each(i.alsoResize,function(e,t){a(e,t)})}else{a(i.alsoResize)}},stop:function(){e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone();t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost==="string"?n.ghost:"");t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");if(t.ghost){t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})}},stop:function(){var t=e(this).data("ui-resizable");if(t.ghost&&t.helper){t.helper.get(0).removeChild(t.ghost.get(0))}}});e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid==="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u;if(m){h=h+a}if(g){p=p+f}if(d){h=h-a}if(v){p=p-f}if(/^(se|s|e)$/.test(o)){t.size.width=h;t.size.height=p}else if(/^(ne)$/.test(o)){t.size.width=h;t.size.height=p;t.position.top=s.top-c}else if(/^(sw)$/.test(o)){t.size.width=h;t.size.height=p;t.position.left=s.left-l}else{t.size.width=h;t.size.height=p;t.position.top=s.top-c;t.position.left=s.left-l}}})})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){t=e(n.options.filter,n.element[0]);t.addClass("ui-selectee");t.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:false,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})};this.refresh();this.selectees=t.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(t){var n=this,r=this.options;this.opos=[t.pageX,t.pageY];if(this.options.disabled){return}this.selectees=e(r.filter,this.element[0]);this._trigger("start",t);e(r.appendTo).append(this.helper);this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0});if(r.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=true;if(!t.metaKey&&!t.ctrlKey){r.$element.removeClass("ui-selected");r.selected=false;r.$element.addClass("ui-unselecting");r.unselecting=true;n._trigger("unselecting",t,{unselecting:r.element})}});e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");if(i){r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected");i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting");i.unselecting=!r;i.selecting=r;i.selected=r;if(r){n._trigger("selecting",t,{selecting:i.element})}else{n._trigger("unselecting",t,{unselecting:i.element})}return false}})},_mouseDrag:function(t){this.dragged=true;if(this.options.disabled){return}var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;if(s>u){n=u;u=s;s=n}if(o>a){n=a;a=o;o=n}this.helper.css({left:s,top:o,width:u-s,height:a-o});this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=false;if(!n||n.element===r.element[0]){return}if(i.tolerance==="touch"){f=!(n.left>u||n.right<s||n.top>a||n.bottom<o)}else if(i.tolerance==="fit"){f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a}if(f){if(n.selected){n.$element.removeClass("ui-selected");n.selected=false}if(n.unselecting){n.$element.removeClass("ui-unselecting");n.unselecting=false}if(!n.selecting){n.$element.addClass("ui-selecting");n.selecting=true;r._trigger("selecting",t,{selecting:n.element})}}else{if(n.selecting){if((t.metaKey||t.ctrlKey)&&n.startselected){n.$element.removeClass("ui-selecting");n.selecting=false;n.$element.addClass("ui-selected");n.selected=true}else{n.$element.removeClass("ui-selecting");n.selecting=false;if(n.startselected){n.$element.addClass("ui-unselecting");n.unselecting=true}r._trigger("unselecting",t,{unselecting:n.element})}}if(n.selected){if(!t.metaKey&&!t.ctrlKey&&!n.startselected){n.$element.removeClass("ui-selected");n.selected=false;n.$element.addClass("ui-unselecting");n.unselecting=true;r._trigger("unselecting",t,{unselecting:n.element})}}}});return false},_mouseStop:function(t){var n=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting");r.unselecting=false;r.startselected=false;n._trigger("unselected",t,{unselected:r.element})});e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected");r.selecting=false;r.selected=true;r.startselected=true;n._trigger("selected",t,{selected:r.element})});this._trigger("stop",t);this.helper.remove();return false}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}function r(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?e.axis==="x"||r(this.items[0].item):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--){this.items[e].item.removeData(this.widgetName+"-item")}return this},_setOption:function(t,n){if(t==="disabled"){this.options[t]=n;this.widget().toggleClass("ui-sortable-disabled",!!n)}else{e.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(t,n){var r=null,i=false,s=this;if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(t);e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s){r=e(this);return false}});if(e.data(t.target,s.widgetName+"-item")===s){r=e(t.target)}if(!r){return false}if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){if(this===t.target){i=true}});if(!i){return false}}this.currentItem=r;this._removeCurrentsFromItems();return true},_mouseStart:function(t,n,r){var i,s,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(t);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(t);this.originalPageX=t.pageX;this.originalPageY=t.pageY;o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(o.containment){this._setContainment()}if(o.cursor&&o.cursor!=="auto"){s=this.document.find("body");this.storedCursor=s.css("cursor");s.css("cursor",o.cursor);this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(s)}if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",o.opacity)}if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",o.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",t,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!r){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",t,this._uiHash(this))}}if(e.ui.ddmanager){e.ui.ddmanager.current=this}if(e.ui.ddmanager&&!o.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(t);return true},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=false;this.position=this._generatePosition(t);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed}else if(t.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed}else if(t.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed}}else{if(t.pageY-e(document).scrollTop()<o.scrollSensitivity){u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed)}else if(e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity){u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)}if(t.pageX-e(document).scrollLeft()<o.scrollSensitivity){u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed)}else if(e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity){u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed)}}if(u!==false&&e.ui.ddmanager&&!o.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,t)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(n=this.items.length-1;n>=0;n--){r=this.items[n];i=r.item[0];s=this._intersectsWithPointer(r);if(!s){continue}if(r.instance!==this.currentContainer){continue}if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):true)){this.direction=s===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(r)){this._rearrange(t,r)}else{break}this._trigger("change",t,this._uiHash());break}}this._contactContainers(t);if(e.ui.ddmanager){e.ui.ddmanager.drag(this,t)}this._trigger("sort",t,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(t,n){if(!t){return}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,t)}if(this.options.revert){var r=this,i=this.placeholder.offset(),s=this.options.axis,o={};if(!s||s==="x"){o.left=i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)}if(!s||s==="y"){o.top=i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)}this.reverting=true;e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else{this._clear(t,n)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var t=this.containers.length-1;t>=0;t--){this.containers[t]._trigger("deactivate",null,this._uiHash(this));if(this.containers[t].containerCache.over){this.containers[t]._trigger("out",null,this._uiHash(this));this.containers[t].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)}else{e(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];t=t||{};e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);if(n){r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}});if(!r.length&&t.key){r.push(t.key+"=")}return r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];t=t||{};n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")});return r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=this.options.axis==="x"||r+f>u&&r+f<a,h=this.options.axis==="y"||t+l>s&&t+l<o,p=c&&h;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]){return p}else{return s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a}},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();if(!i){return false}return this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1)},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();if(this.floating&&s){return s==="right"&&r||s==="left"&&!r}else{return i&&(i==="down"&&t||i==="up"&&!t)}},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){this._refreshItems(e);this.refreshPositions();return this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t){for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--){s=e.data(i[r],this.widgetFullName);if(s&&s!==this&&!s.options.disabled){u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}}}}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--){u[n][0].each(function(){o.push(this)})}return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++){if(t[n]===e.item[0]){return false}}return true})},_refreshItems:function(t){this.items=[];this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready){for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--){s=e.data(i[r],this.widgetFullName);if(s&&s!==this&&!s.options.disabled){c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]);this.containers.push(s)}}}}for(n=c.length-1;n>=0;n--){o=c[n][1];u=c[n][0];for(r=0,f=u.length;r<f;r++){a=e(u[r]);a.data(this.widgetName+"-item",o);l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0]){continue}i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;if(!t){r.width=i.outerWidth();r.height=i.outerHeight()}s=i.offset();r.left=s.left;r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(n=this.containers.length-1;n>=0;n--){s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left;this.containers[n].containerCache.top=s.top;this.containers[n].containerCache.width=this.containers[n].element.outerWidth();this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}}return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String){n=r.placeholder;r.placeholder={element:function(){var r=t.currentItem[0].nodeName.toLowerCase(),i=e("<"+r+">",t.document[0]).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(r==="tr"){t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})}else if(r==="img"){i.attr("src",t.currentItem.attr("src"))}if(!n){i.css("visibility","hidden")}return i},update:function(e,i){if(n&&!r.forcePlaceholderSize){return}if(!i.height()){i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10))}if(!i.width()){i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}}t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem));t.currentItem.after(t.placeholder);r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,o,u,a,f,l,c,h,p,d=null,v=null;for(i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0])){continue}if(this._intersectsWith(this.containers[i].containerCache)){if(d&&e.contains(this.containers[i].element[0],d.element[0])){continue}d=this.containers[i];v=i}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",t,this._uiHash(this));this.containers[i].containerCache.over=0}}}if(!d){return}if(this.containers.length===1){if(!this.containers[v].containerCache.over){this.containers[v]._trigger("over",t,this._uiHash(this));this.containers[v].containerCache.over=1}}else{o=1e4;u=null;p=d.floating||r(this.currentItem);a=p?"left":"top";f=p?"width":"height";l=this.positionAbs[a]+this.offset.click[a];for(s=this.items.length-1;s>=0;s--){if(!e.contains(this.containers[v].element[0],this.items[s].item[0])){continue}if(this.items[s].item[0]===this.currentItem[0]){continue}if(p&&!n(this.positionAbs.top+this.offset.click.top,this.items[s].top,this.items[s].height)){continue}c=this.items[s].item.offset()[a];h=false;if(Math.abs(c-l)>Math.abs(c+this.items[s][f]-l)){h=true;c+=this.items[s][f]}if(Math.abs(c-l)<o){o=Math.abs(c-l);u=this.items[s];this.direction=h?"up":"down"}}if(!u&&!this.options.dropOnEmpty){return}if(this.currentContainer===this.containers[v]){return}u?this._rearrange(t,u,null,true):this._rearrange(t,null,this.containers[v].element,true);this._trigger("change",t,this._uiHash());this.containers[v]._trigger("change",t,this._uiHash(this));this.currentContainer=this.containers[v];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[v]._trigger("over",t,this._uiHash(this));this.containers[v].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;if(!r.parents("body").length){e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0])}if(r[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!r[0].style.width||n.forceHelperSize){r.width(this.currentItem.width())}if(!r[0].style.height||n.forceHelperSize){r.height(this.currentItem.height())}return r},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if(e.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft();t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;if(i.containment==="parent"){i.containment=this.helper[0].parentNode}if(i.containment==="document"||i.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(i.containment)){t=e(i.containment)[0];n=e(i.containment).offset();r=e(t).css("overflow")!=="hidden";this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){if(!n){n=this.position}var r=t==="absolute"?1:-1,i=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=/(html|body)/i.test(u[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(t.pageX-this.offset.click.left<this.containment[0]){s=this.containment[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<this.containment[1]){o=this.containment[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>this.containment[2]){s=this.containment[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>this.containment[3]){o=this.containment[3]+this.offset.click.top}}if(i.grid){n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1];o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n;r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0];s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){if(i===this.counter){this.refreshPositions(!r)}})},_clear:function(e,t){this.reverting=false;var n,r=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(n in this._storedCSS){if(this._storedCSS[n]==="auto"||this._storedCSS[n]==="static"){this._storedCSS[n]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!t){r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!t){r.push(function(e){this._trigger("update",e,this._uiHash())})}if(this!==this.currentContainer){if(!t){r.push(function(e){this._trigger("remove",e,this._uiHash())});r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer));r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))}}for(n=this.containers.length-1;n>=0;n--){if(!t){r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[n]))}if(this.containers[n].containerCache.over){r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[n]));this.containers[n].containerCache.over=0}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove()}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!t){this._trigger("beforeStop",e,this._uiHash());for(n=0;n<r.length;n++){r[n].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false;return false}if(!t){this._trigger("beforeStop",e,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null;if(!t){for(n=0;n<r.length;n++){r[n].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide";i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show";e.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");if(!t.collapsible&&(t.active===false||t.active==null)){t.active=0}this._processPanels();if(t.active<0){t.active+=this.headers.length}this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?e():this.active.next(),content:!this.active.length?e():this.active.next()}},_createIcons:function(){var t=this.options.icons;if(t){e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){e.css("height","")}},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(t)}this._super(e,t);if(e==="collapsible"&&!t&&this.options.active===false){this._activate(0)}if(e==="icons"){this._destroyIcons();if(t){this._createIcons()}}if(e==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)}},_keydown:function(t){if(t.altKey||t.ctrlKey){return}var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=false;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1];break}if(s){e(t.target).attr("tabIndex",-1);e(s).attr("tabIndex",0);s.focus();t.preventDefault()}},_panelKeyDown:function(t){if(t.keyCode===e.ui.keyCode.UP&&t.ctrlKey){e(t.currentTarget).prev().focus()}},refresh:function(){var t=this.options;this._processPanels();if(t.active===false&&t.collapsible===true||!this.headers.length){t.active=false;this.active=e()}else if(t.active===false){this._activate(0)}else if(this.active.length&&!e.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){t.active=false;this.active=e()}else{this._activate(Math.max(0,t.active-1))}}else{t.active=this.headers.index(this.active)}this._destroyIcons();this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");if(!r){r=o+"-header-"+t;n.attr("id",r)}if(!s){s=o+"-panel-"+t;i.attr("id",s)}n.attr("aria-controls",s);i.attr("aria-labelledby",r)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._createIcons();this._setupEvents(r.event);if(i==="fill"){t=s.height();this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed"){return}t-=n.outerHeight(true)});this.headers.each(function(){t-=e(this).outerHeight(true)});this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")}else if(i==="auto"){t=0;this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t)}},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0]){return}n=n||this.active[0];this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t==="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};if(t){e.each(t.split(" "),function(e,t){n[t]="_eventHandler"})}this._off(this.headers.add(this.headers.next()));this._on(this.headers,n);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===false){return}n.active=o?false:this.headers.index(i);this.active=s?e():i;this._toggle(f);r.removeClass("ui-accordion-header-active ui-state-active");if(n.icons){r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)}if(!s){i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)}i.next().addClass("ui-accordion-content-active")}},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=n;this.prevHide=r;if(this.options.animate){this._animate(n,r,t)}else{r.hide();n.show();this._toggleComplete(t)}r.attr({"aria-expanded":"false","aria-hidden":"true"});r.prev().attr("aria-selected","false");if(n.length&&r.length){r.prev().attr("tabIndex",-1)}else if(n.length){this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1)}n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};if(typeof h==="number"){u=h}if(typeof h==="string"){o=h}o=o||h.easing||c.easing;u=u||h.duration||c.duration;if(!t.length){return e.animate(i,u,o,p)}if(!e.length){return t.animate(r,u,o,p)}s=e.show().outerHeight();t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}});e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e);if(n.prop!=="height"){f+=n.now}else if(a.options.heightStyle!=="content"){n.now=Math.round(s-t.outerHeight()-f);f=0}}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(t.length){t.parent()[0].className=t.parent()[0].className}this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?true:o?false:this.element.prop("isContentEditable");this.valueMethod=this.element[s||o?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=true;r=true;n=true;return}t=false;r=false;n=false;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=true;this._move("previousPage",i);break;case s.PAGE_DOWN:t=true;this._move("nextPage",i);break;case s.UP:t=true;this._keyEvent("previous",i);break;case s.DOWN:t=true;this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:if(this.menu.active){t=true;i.preventDefault();this.menu.select(i)}break;case s.TAB:if(this.menu.active){this.menu.select(i)}break;case s.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(i);i.preventDefault()}break;default:n=true;this._searchTimeout(i);break}},keypress:function(r){if(t){t=false;if(!this.isMultiLine||this.menu.element.is(":visible")){r.preventDefault()}return}if(n){return}var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r);break}},input:function(e){if(r){r=false;e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(e);this._change(e)}});this._initSource();this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");this._on(this.menu.element,{mousedown:function(t){t.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];if(!e(t.target).closest(".ui-menu-item").length){this._delay(function(){var t=this;this.document.one("mousedown",function(r){if(r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)){t.close()}})})}},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=false;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",t,{item:r})){if(t.originalEvent&&/^key/.test(t.originalEvent.type)){this._value(r.value)}}else{this.liveRegion.text(r.value)}},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=r;this._delay(function(){this.previous=r;this.selectedItem=n})}if(false!==this._trigger("select",e,{item:n})){this._value(n.value)}this.term=this._value();this.close(e);this.selectedItem=n}});this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t);if(e==="source"){this._initSource()}if(e==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(e==="disabled"&&t&&this.xhr){this.xhr.abort()}},_appendTo:function(){var t=this.options.appendTo;if(t){t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)}if(!t){t=this.element.closest(".ui-front")}if(!t.length){t=this.document[0].body}return t},_initSource:function(){var t,n,r=this;if(e.isArray(this.options.source)){t=this.options.source;this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}}else if(typeof this.options.source==="string"){n=this.options.source;this.source=function(t,i){if(r.xhr){r.xhr.abort()}r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}}else{this.source=this.options.source}},_searchTimeout:function(e){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,e)}},this.options.delay)},search:function(e,t){e=e!=null?e:this._value();this.term=this._value();if(e.length<this.options.minLength){return this.close(t)}if(this._trigger("search",t)===false){return}return this._search(e)},_search:function(e){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){if(t===n){e.__response(r)}e.pending--;if(!e.pending){e.element.removeClass("ui-autocomplete-loading")}}},__response:function(e){if(e){e=this._normalize(e)}this._trigger("response",null,{content:e});if(!this.options.disabled&&e&&e.length&&!this.cancelSearch){this._suggest(e);this._trigger("open")}else{this._close()}},close:function(e){this.cancelSearch=true;this._close(e)},_close:function(e){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",e)}},_change:function(e){if(this.previous!==this._value()){this._trigger("change",e,{item:this.selectedItem})}},_normalize:function(t){if(t.length&&t[0].label&&t[0].value){return t}return e.map(t,function(t){if(typeof t==="string"){return{label:t,value:t}}return e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t);this.isNewMenu=true;this.menu.refresh();n.show();this._resizeMenu();n.position(e.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,t);t.preventDefault()}}});e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}});e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(e&&e.length){t=this.options.messages.results(e.length)}else{t=this.options.messages.noResults}this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);if(n){n=n.replace(/'/g,"\\'");if(r){i=e(r).find("[name='"+n+"']")}else{i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})}}return i};e.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=!a?"ui-state-active":"",h="ui-state-focus";if(u.label===null){u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()}this._hoverable(this.buttonElement);this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled){return}if(this===n){e(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled){return}e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){if(u.disabled){e.preventDefault();e.stopImmediatePropagation()}});this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)});if(a){this.element.bind("change"+this.eventNamespace,function(){if(s){return}t.refresh()});this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled){return}s=false;r=e.pageX;i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled){return}if(r!==e.pageX||i!==e.pageY){s=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s){return false}})}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s){return false}e(this).addClass("ui-state-active");t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled){return false}e(this).addClass("ui-state-active");n=this;t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled){return false}e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled){return false}if(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER){e(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(t){if(t.keyCode===e.ui.keyCode.SPACE){e(this).click()}})}}this._setOption("disabled",u.disabled);this._resetButton()},_determineButtonType:function(){var e,t,n;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else if(this.element.is("[type=radio]")){this.type="radio"}else if(this.element.is("input")){this.type="input"}else{this.type="button"}if(this.type==="checkbox"||this.type==="radio"){e=this.element.parents().last();t="label[for='"+this.element.attr("id")+"']";this.buttonElement=e.find(t);if(!this.buttonElement.length){e=e.length?e.siblings():this.element.siblings();this.buttonElement=e.filter(t);if(!this.buttonElement.length){this.buttonElement=e.find(t)}}this.element.addClass("ui-helper-hidden-accessible");n=this.element.is(":checked");if(n){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",n)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){if(t){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(t!==this.options.disabled){this._setOption("disabled",t)}if(this.type==="radio"){l(this.element[0]).each(function(){if(e(this).is(":checked")){e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];if(r.primary||r.secondary){if(this.options.text){s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary"))}if(r.primary){t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>")}if(r.secondary){t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>")}if(!this.options.text){s.push(i?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){t.attr("title",e.trim(n))}}}else{s.push("ui-button-text-only")}t.addClass(s.join(" "))}});e.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){if(e==="disabled"){this.buttons.button("option",e,t)}this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function i(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesInteger:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesInteger:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,intYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};e.extend(this._defaults,this.regional[""]);this.dpDiv=s(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n,"mouseout",function(){e(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).removeClass("ui-datepicker-next-hover")}}).delegate(n,"mouseover",function(){if(!e.datepicker._isDisabledDatepicker(r.inline?t.parent()[0]:r.input[0])){e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");e(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).addClass("ui-datepicker-next-hover")}}})}function o(t,n){e.extend(t,n);for(var r in n){if(n[r]==null){t[r]=n[r]}}return t}e.extend(e.ui,{datepicker:{version:"1.10.3"}});var n="datepicker",r;e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){o(this._defaults,e||{});return this},_attachDatepicker:function(t,n){var r,i,s;r=t.nodeName.toLowerCase();i=r==="div"||r==="span";if(!t.id){this.uuid+=1;t.id="dp"+this.uuid}s=this._newInst(e(t),i);s.settings=e.extend({},n||{});if(r==="input"){this._connectDatepicker(t,s)}else if(i){this._inlineDatepicker(t,s)}},_newInst:function(t,n){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:!n?this.dpDiv:s(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}},_connectDatepicker:function(t,r){var i=e(t);r.append=e([]);r.trigger=e([]);if(i.hasClass(this.markerClassName)){return}this._attachments(i,r);i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(r);e.data(t,n,r);if(r.settings.disabled){this._disableDatepicker(t)}},_attachments:function(t,n){var r,i,s,o=this._get(n,"appendText"),u=this._get(n,"isRTL");if(n.append){n.append.remove()}if(o){n.append=e("<span class='"+this._appendClass+"'>"+o+"</span>");t[u?"before":"after"](n.append)}t.unbind("focus",this._showDatepicker);if(n.trigger){n.trigger.remove()}r=this._get(n,"showOn");if(r==="focus"||r==="both"){t.focus(this._showDatepicker)}if(r==="button"||r==="both"){i=this._get(n,"buttonText");s=this._get(n,"buttonImage");n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):e("<button type='button'></button>").addClass(this._triggerClass).html(!s?i:e("<img/>").attr({src:s,alt:i,title:i})));t[u?"before":"after"](n.trigger);n.trigger.click(function(){if(e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]){e.datepicker._hideDatepicker()}else if(e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]){e.datepicker._hideDatepicker();e.datepicker._showDatepicker(t[0])}else{e.datepicker._showDatepicker(t[0])}return false})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,r,i,s=new Date(2009,12-1,20),o=this._get(e,"dateFormat");if(o.match(/[DM]/)){t=function(e){n=0;r=0;for(i=0;i<e.length;i++){if(e[i].length>n){n=e[i].length;r=i}}return r};s.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesInteger")));s.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesInteger"))+20-s.getDay())}e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,r){var i=e(t);if(i.hasClass(this.markerClassName)){return}i.addClass(this.markerClassName).append(r.dpDiv);e.data(t,n,r);this._setDate(r,this._getDefaultDate(r),true);this._updateDatepicker(r);this._updateAlternate(r);if(r.settings.disabled){this._disableDatepicker(t)}r.dpDiv.css("display","block")},_dialogDatepicker:function(t,r,i,s,u){var a,f,l,c,h,p=this._dialogInst;if(!p){this.uuid+=1;a="dp"+this.uuid;this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);e("body").append(this._dialogInput);p=this._dialogInst=this._newInst(this._dialogInput,false);p.settings={};e.data(this._dialogInput[0],n,p)}o(p.settings,s||{});r=r&&r.constructor===Date?this._formatDate(p,r):r;this._dialogInput.val(r);this._pos=u?u.length?u:[u.pageX,u.pageY]:null;if(!this._pos){f=document.documentElement.clientWidth;l=document.documentElement.clientHeight;c=document.documentElement.scrollLeft||document.body.scrollLeft;h=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[f/2-100+c,l/2-150+h]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");p.settings.onSelect=i;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if(e.blockUI){e.blockUI(this.dpDiv)}e.data(this._dialogInput[0],n,p);return this},_destroyDatepicker:function(t){var r,i=e(t),s=e.data(t,n);if(!i.hasClass(this.markerClassName)){return}r=t.nodeName.toLowerCase();e.removeData(t,n);if(r==="input"){s.append.remove();s.trigger.remove();i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(r==="div"||r==="span"){i.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName)){return}r=t.nodeName.toLowerCase();if(r==="input"){t.disabled=false;o.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(r==="div"||r==="span"){i=s.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled");i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName)){return}r=t.nodeName.toLowerCase();if(r==="input"){t.disabled=true;o.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(r==="div"||r==="span"){i=s.children("."+this._inlineClass);i.children().addClass("ui-state-disabled");i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e});this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e){return false}for(var t=0;t<this._disabledInputs.length;t++){if(this._disabledInputs[t]===e){return true}}return false},_getInst:function(t){try{return e.data(t,n)}catch(r){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,r,i){var s,u,a,f,l=this._getInst(n);if(arguments.length===2&&typeof r==="string"){return r==="defaults"?e.extend({},e.datepicker._defaults):l?r==="all"?e.extend({},l.settings):this._get(l,r):null}s=r||{};if(typeof r==="string"){s={};s[r]=i}if(l){if(this._curInst===l){this._hideDatepicker()}u=this._getDateDatepicker(n,true);a=this._getMinMaxDate(l,"min");f=this._getMinMaxDate(l,"max");o(l.settings,s);if(a!==null&&s.dateFormat!==t&&s.minDate===t){l.settings.minDate=this._formatDate(l,a)}if(f!==null&&s.dateFormat!==t&&s.maxDate===t){l.settings.maxDate=this._formatDate(l,f)}if("disabled"in s){if(s.disabled){this._disableDatepicker(n)}else{this._enableDatepicker(n)}}this._attachments(e(n),l);this._autoSize(l);this._setDate(l,u);this._updateAlternate(l);this._updateDatepicker(l)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);if(t){this._updateDatepicker(t)}},_setDateDatepicker:function(e,t){var n=this._getInst(e);if(n){this._setDate(n,t);this._updateDatepicker(n);this._updateAlternate(n)}},_getDateDatepicker:function(e,t){var n=this._getInst(e);if(n&&!n.inline){this._setDateFromField(n,t)}return n?this._getDate(n):null},_doKeyDown:function(t){var n,r,i,s=e.datepicker._getInst(t.target),o=true,u=s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent=true;if(e.datepicker._datepickerShowing){switch(t.keyCode){case 9:e.datepicker._hideDatepicker();o=false;break;case 13:i=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv);if(i[0]){e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0])}n=e.datepicker._get(s,"onSelect");if(n){r=e.datepicker._formatDate(s);n.apply(s.input?s.input[0]:null,[r,s])}else{e.datepicker._hideDatepicker()}return false;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 35:if(t.ctrlKey||t.metaKey){e.datepicker._clearDate(t.target)}o=t.ctrlKey||t.metaKey;break;case 36:if(t.ctrlKey||t.metaKey){e.datepicker._gotoToday(t.target)}o=t.ctrlKey||t.metaKey;break;case 37:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,u?+1:-1,"D")}o=t.ctrlKey||t.metaKey;if(t.originalEvent.altKey){e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M")}break;case 38:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,-7,"D")}o=t.ctrlKey||t.metaKey;break;case 39:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,u?-1:+1,"D")}o=t.ctrlKey||t.metaKey;if(t.originalEvent.altKey){e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M")}break;case 40:if(t.ctrlKey||t.metaKey){e.datepicker._adjustDate(t.target,+7,"D")}o=t.ctrlKey||t.metaKey;break;default:o=false}}else if(t.keyCode===36&&t.ctrlKey){e.datepicker._showDatepicker(this)}else{o=false}if(o){t.preventDefault();t.stopPropagation()}},_doKeyPress:function(t){var n,r,i=e.datepicker._getInst(t.target);if(e.datepicker._get(i,"constrainInput")){n=e.datepicker._possibleChars(e.datepicker._get(i,"dateFormat"));r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode);return t.ctrlKey||t.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(t){var n,r=e.datepicker._getInst(t.target);if(r.input.val()!==r.lastVal){try{n=e.datepicker.parseDate(e.datepicker._get(r,"dateFormat"),r.input?r.input.val():null,e.datepicker._getFormatConfig(r));if(n){e.datepicker._setDateFromField(r);e.datepicker._updateAlternate(r);e.datepicker._updateDatepicker(r)}}catch(i){}}return true},_showDatepicker:function(t){t=t.target||t;if(t.nodeName.toLowerCase()!=="input"){t=e("input",t.parentNode)[0]}if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t){return}var n,r,i,s,u,a,f;n=e.datepicker._getInst(t);if(e.datepicker._curInst&&e.datepicker._curInst!==n){e.datepicker._curInst.dpDiv.stop(true,true);if(n&&e.datepicker._datepickerShowing){e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])}}r=e.datepicker._get(n,"beforeShow");i=r?r.apply(t,[t,n]):{};if(i===false){return}o(n.settings,i);n.lastVal=null;e.datepicker._lastInput=t;e.datepicker._setDateFromField(n);if(e.datepicker._inDialog){t.value=""}if(!e.datepicker._pos){e.datepicker._pos=e.datepicker._findPos(t);e.datepicker._pos[1]+=t.offsetHeight}s=false;e(t).parents().each(function(){s|=e(this).css("position")==="fixed";return!s});u={left:e.datepicker._pos[0],top:e.datepicker._pos[1]};e.datepicker._pos=null;n.dpDiv.empty();n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});e.datepicker._updateDatepicker(n);u=e.datepicker._checkOffset(n,u,s);n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:u.left+"px",top:u.top+"px"});if(!n.inline){a=e.datepicker._get(n,"showAnim");f=e.datepicker._get(n,"duration");n.dpDiv.zIndex(e(t).zIndex()+1);e.datepicker._datepickerShowing=true;if(e.effects&&e.effects.effect[a]){n.dpDiv.show(a,e.datepicker._get(n,"showOptions"),f)}else{n.dpDiv[a||"show"](a?f:null)}if(e.datepicker._shouldFocusInput(n)){n.input.focus()}e.datepicker._curInst=n}},_updateDatepicker:function(t){this.maxRows=4;r=t;t.dpDiv.empty().append(this._generateHTML(t));this._attachHandlers(t);t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var n,i=this._getNumberOfMonths(t),s=i[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(s>1){t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em")}t.dpDiv[(i[0]!==1||i[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)){t.input.focus()}if(t.yearshtml){n=t.yearshtml;setTimeout(function(){if(n===t.yearshtml&&t.yearshtml){t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml)}n=t.yearshtml=null},0)}},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,n,r){var i=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,u=t.input?t.input.outerHeight():0,a=document.documentElement.clientWidth+(r?0:e(document).scrollLeft()),f=document.documentElement.clientHeight+(r?0:e(document).scrollTop());n.left-=this._get(t,"isRTL")?i-o:0;n.left-=r&&n.left===t.input.offset().left?e(document).scrollLeft():0;n.top-=r&&n.top===t.input.offset().top+u?e(document).scrollTop():0;n.left-=Math.min(n.left,n.left+i>a&&a>i?Math.abs(n.left+i-a):0);n.top-=Math.min(n.top,n.top+s>f&&f>s?Math.abs(s+u):0);return n},_findPos:function(t){var n,r=this._getInst(t),i=this._get(r,"isRTL");while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t))){t=t[i?"previousSibling":"nextSibling"]}n=e(t).offset();return[n.left,n.top]},_hideDatepicker:function(t){var r,i,s,o,u=this._curInst;if(!u||t&&u!==e.data(t,n)){return}if(this._datepickerShowing){r=this._get(u,"showAnim");i=this._get(u,"duration");s=function(){e.datepicker._tidyDialog(u)};if(e.effects&&(e.effects.effect[r]||e.effects[r])){u.dpDiv.hide(r,e.datepicker._get(u,"showOptions"),i,s)}else{u.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?i:null,s)}if(!r){s()}this._datepickerShowing=false;o=this._get(u,"onClose");if(o){o.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(e.blockUI){e.unblockUI();e("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst){return}var n=e(t.target),r=e.datepicker._getInst(n[0]);if(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&!(e.datepicker._inDialog&&e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==r){e.datepicker._hideDatepicker()}},_adjustDate:function(t,n,r){var i=e(t),s=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0])){return}this._adjustInstDate(s,n+(r==="M"?this._get(s,"showCurrentAtPos"):0),r);this._updateDatepicker(s)},_gotoToday:function(t){var n,r=e(t),i=this._getInst(r[0]);if(this._get(i,"gotoCurrent")&&i.currentDay){i.selectedDay=i.currentDay;i.drawMonth=i.selectedMonth=i.currentMonth;i.drawYear=i.selectedYear=i.currentYear}else{n=new Date;i.selectedDay=n.getDate();i.drawMonth=i.selectedMonth=n.getMonth();i.drawYear=i.selectedYear=n.getFullYear()}this._notifyChange(i);this._adjustDate(r)},_selectMonthYear:function(t,n,r){var i=e(t),s=this._getInst(i[0]);s["selected"+(r==="M"?"Month":"Year")]=s["draw"+(r==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10);this._notifyChange(s);this._adjustDate(i)},_selectDay:function(t,n,r,i){var s,o=e(t);if(e(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])){return}s=this._getInst(o[0]);s.selectedDay=s.currentDay=e("a",i).html();s.selectedMonth=s.currentMonth=n;s.selectedYear=s.currentYear=r;this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t);this._selectDate(n,"")},_selectDate:function(t,n){var r,i=e(t),s=this._getInst(i[0]);n=n!=null?n:this._formatDate(s);if(s.input){s.input.val(n)}this._updateAlternate(s);r=this._get(s,"onSelect");if(r){r.apply(s.input?s.input[0]:null,[n,s])}else if(s.input){s.input.trigger("change")}if(s.inline){this._updateDatepicker(s)}else{this._hideDatepicker();this._lastInput=s.input[0];if(typeof s.input[0]!=="object"){s.input.focus()}this._lastInput=null}},_updateAlternate:function(t){var n,r,i,s=this._get(t,"altField");if(s){n=this._get(t,"altFormat")||this._get(t,"dateFormat");r=this._getDate(t);i=this.formatDate(n,r,this._getFormatConfig(t));e(s).each(function(){e(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime());n.setDate(n.getDate()+4-(n.getDay()||7));t=n.getTime();n.setMonth(0);n.setDate(1);return Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,r){if(t==null||n==null){throw"Invalid arguments"}n=typeof n==="object"?n.toString():n+"";if(n===""){return null}var i,s,o,u=0,a=(r?r.intYearCutoff:null)||this._defaults.intYearCutoff,f=typeof a!=="string"?a:(new Date).getFullYear()%100+parseInt(a,10),l=(r?r.dayNamesInteger:null)||this._defaults.dayNamesInteger,c=(r?r.dayNames:null)||this._defaults.dayNames,h=(r?r.monthNamesInteger:null)||this._defaults.monthNamesInteger,p=(r?r.monthNames:null)||this._defaults.monthNames,d=-1,v=-1,m=-1,g=-1,y=false,b,w=function(e){var n=i+1<t.length&&t.charAt(i+1)===e;if(n){i++}return n},E=function(e){var t=w(e),r=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=n.substring(u).match(i);if(!s){throw"Missing number at position "+u}u+=s[0].length;return parseInt(s[0],10)},S=function(t,r,i){var s=-1,o=e.map(w(t)?i:r,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});e.each(o,function(e,t){var r=t[1];if(n.substr(u,r.length).toLowerCase()===r.toLowerCase()){s=t[0];u+=r.length;return false}});if(s!==-1){return s+1}else{throw"Unknown name at position "+u}},x=function(){if(n.charAt(u)!==t.charAt(i)){throw"Unexpected literal at position "+u}u++};for(i=0;i<t.length;i++){if(y){if(t.charAt(i)==="'"&&!w("'")){y=false}else{x()}}else{switch(t.charAt(i)){case"d":m=E("d");break;case"D":S("D",l,c);break;case"o":g=E("o");break;case"m":v=E("m");break;case"M":v=S("M",h,p);break;case"y":d=E("y");break;case"@":b=new Date(E("@"));d=b.getFullYear();v=b.getMonth()+1;m=b.getDate();break;case"!":b=new Date((E("!")-this._ticksTo1970)/1e4);d=b.getFullYear();v=b.getMonth()+1;m=b.getDate();break;case"'":if(w("'")){x()}else{y=true}break;default:x()}}}if(u<n.length){o=n.substr(u);if(!/^\s+/.test(o)){throw"Extra/unparsed characters found in date: "+o}}if(d===-1){d=(new Date).getFullYear()}else if(d<100){d+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d<=f?0:-100)}if(g>-1){v=1;m=g;do{s=this._getDaysInMonth(d,v-1);if(m<=s){break}v++;m-=s}while(true)}b=this._daylightSavingAdjust(new Date(d,v-1,m));if(b.getFullYear()!==d||b.getMonth()+1!==v||b.getDate()!==m){throw"Invalid date"}return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7,formatDate:function(e,t,n){if(!t){return""}var r,i=(n?n.dayNamesInteger:null)||this._defaults.dayNamesInteger,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesInteger:null)||this._defaults.monthNamesInteger,u=(n?n.monthNames:null)||this._defaults.monthNames,a=function(t){var n=r+1<e.length&&e.charAt(r+1)===t;if(n){r++}return n},f=function(e,t,n){var r=""+t;if(a(e)){while(r.length<n){r="0"+r}}return r},l=function(e,t,n,r){return a(e)?r[t]:n[t]},c="",h=false;if(t){for(r=0;r<e.length;r++){if(h){if(e.charAt(r)==="'"&&!a("'")){h=false}else{c+=e.charAt(r)}}else{switch(e.charAt(r)){case"d":c+=f("d",t.getDate(),2);break;case"D":c+=l("D",t.getDay(),i,s);break;case"o":c+=f("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":c+=f("m",t.getMonth()+1,2);break;case"M":c+=l("M",t.getMonth(),o,u);break;case"y":c+=a("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=t.getTime()*1e4+this._ticksTo1970;break;case"'":if(a("'")){c+="'"}else{h=true}break;default:c+=e.charAt(r)}}}}return c},_possibleChars:function(e){var t,n="",r=false,i=function(n){var r=t+1<e.length&&e.charAt(t+1)===n;if(r){t++}return r};for(t=0;t<e.length;t++){if(r){if(e.charAt(t)==="'"&&!i("'")){r=false}else{n+=e.charAt(t)}}else{switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789";break;case"D":case"M":return null;case"'":if(i("'")){n+="'"}else{r=true}break;default:n+=e.charAt(t)}}}return n},_get:function(e,n){return e.settings[n]!==t?e.settings[n]:this._defaults[n]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal){return}var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i=this._getDefaultDate(e),s=i,o=this._getFormatConfig(e);try{s=this.parseDate(n,r,o)||i}catch(u){r=t?"":r}e.selectedDay=s.getDate();e.drawMonth=e.selectedMonth=s.getMonth();e.drawYear=e.selectedYear=s.getFullYear();e.currentDay=r?s.getDate():0;e.currentMonth=r?s.getMonth():0;e.currentYear=r?s.getFullYear():0;this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,r){var i=function(e){var t=new Date;t.setDate(t.getDate()+e);return t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(r){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),o=i.getMonth(),u=i.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,f=a.exec(n);while(f){switch(f[2]||"d"){case"d":case"D":u+=parseInt(f[1],10);break;case"w":case"W":u+=parseInt(f[1],10)*7;break;case"m":case"M":o+=parseInt(f[1],10);u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(f[1],10);u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break}f=a.exec(n)}return new Date(s,o,u)},o=n==null||n===""?r:typeof n==="string"?s(n):typeof n==="number"?isNaN(n)?r:i(n):new Date(n.getTime());o=o&&o.toString()==="Invalid Date"?r:o;if(o){o.setHours(0);o.setMinutes(0);o.setSeconds(0);o.setMilliseconds(0)}return this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){if(!e){return null}e.setHours(e.getHours()>12?e.getHours()+2:0);return e},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate();e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth();e.drawYear=e.selectedYear=e.currentYear=o.getFullYear();if((i!==e.selectedMonth||s!==e.selectedYear)&&!n){this._notifyChange(e)}this._adjustInstDate(e);if(e.input){e.input.val(r?"":this._formatDate(e))}},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),r="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(r,-n,"M")},next:function(){e.datepicker._adjustDate(r,+n,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(r)},selectDay:function(){e.datepicker._selectDay(r,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){e.datepicker._selectMonthYear(r,this,"M");return false},selectYear:function(){e.datepicker._selectMonthYear(r,this,"Y");return false}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=new Date,R=this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())),U=this._get(e,"isRTL"),z=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),X=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),$=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),K=V[0]!==1||V[1]!==1,Q=this._daylightSavingAdjust(!e.currentDay?new Date(9999,9,9):new Date(e.currentYear,e.currentMonth,e.currentDay)),G=this._getMinMaxDate(e,"min"),Y=this._getMinMaxDate(e,"max"),Z=e.drawMonth-$,et=e.drawYear;if(Z<0){Z+=12;et--}if(Y){t=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-V[0]*V[1]+1,Y.getDate()));t=G&&t<G?G:t;while(this._daylightSavingAdjust(new Date(et,Z,1))>t){Z--;if(Z<0){Z=11;et--}}}e.drawMonth=Z;e.drawYear=et;n=this._get(e,"prevText");n=!X?n:this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e));r=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>";i=this._get(e,"nextText");i=!X?i:this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e));s=this._canAdjustMonth(e,+1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>";o=this._get(e,"currentText");u=this._get(e,"gotoCurrent")&&e.currentDay?Q:R;o=!X?o:this.formatDate(o,u,this._getFormatConfig(e));a=!e.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>":"";f=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(U?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+o+"</button>":"")+(U?"":a)+"</div>":"";l=parseInt(this._get(e,"firstDay"),10);l=isNaN(l)?0:l;c=this._get(e,"showWeek");h=this._get(e,"dayNames");p=this._get(e,"dayNamesMin");d=this._get(e,"monthNames");v=this._get(e,"monthNamesInteger");m=this._get(e,"beforeShowDay");g=this._get(e,"showOtherMonths");y=this._get(e,"selectOtherMonths");b=this._getDefaultDate(e);w="";E;for(S=0;S<V[0];S++){x="";this.maxRows=4;for(T=0;T<V[1];T++){N=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay));C=" ui-corner-all";k="";if(K){k+="<div class='ui-datepicker-group";if(V[1]>1){switch(T){case 0:k+=" ui-datepicker-group-first";C=" ui-corner-"+(U?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last";C=" ui-corner-"+(U?"left":"right");break;default:k+=" ui-datepicker-group-middle";C="";break}}k+="'>"}k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&S===0?U?s:r:"")+(/all|right/.test(C)&&S===0?U?r:s:"")+this._generateMonthYearHeader(e,Z,et,G,Y,S>0||T>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";L=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(E=0;E<7;E++){A=(E+l)%7;L+="<th"+((E+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[A]+"'>"+p[A]+"</span></th>"}k+=L+"</tr></thead><tbody>";O=this._getDaysInMonth(et,Z);if(et===e.selectedYear&&Z===e.selectedMonth){e.selectedDay=Math.min(e.selectedDay,O)}M=(this._getFirstDayOfMonth(et,Z)-l+7)%7;_=Math.ceil((M+O)/7);D=K?this.maxRows>_?this.maxRows:_:_;this.maxRows=D;P=this._daylightSavingAdjust(new Date(et,Z,1-M));for(H=0;H<D;H++){k+="<tr>";B=!c?"":"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>";for(E=0;E<7;E++){j=m?m.apply(e.input?e.input[0]:null,[P]):[true,""];F=P.getMonth()!==Z;I=F&&!y||!j[0]||G&&P<G||Y&&P>Y;B+="<td class='"+((E+l+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(P.getTime()===N.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===P.getTime()&&b.getTime()===N.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!g?"":" "+j[1]+(P.getTime()===Q.getTime()?" "+this._currentClass:"")+(P.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!F||g)&&j[2]?" title='"+j[2].replace(/'/g,"&#39;")+"'":"")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(F&&!g?"&#xa0;":I?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===R.getTime()?" ui-state-highlight":"")+(P.getTime()===Q.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+P.getDate()+"</a>")+"</td>";P.setDate(P.getDate()+1);P=this._daylightSavingAdjust(P)}k+=B+"</tr>"}Z++;if(Z>11){Z=0;et++}k+="</tbody></table>"+(K?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");x+=k}w+=x}w+=f;e._keyEvent=false;return w},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a,f,l,c,h,p,d,v,m=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",w="";if(s||!m){w+="<span class='ui-datepicker-month'>"+o[t]+"</span>"}else{a=r&&r.getFullYear()===n;f=i&&i.getFullYear()===n;w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(l=0;l<12;l++){if((!a||l>=r.getMonth())&&(!f||l<=i.getMonth())){w+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+u[l]+"</option>"}}w+="</select>"}if(!y){b+=w+(s||!(m&&g)?"&#xa0;":"")}if(!e.yearshtml){e.yearshtml="";if(s||!g){b+="<span class='ui-datepicker-year'>"+n+"</span>"}else{c=this._get(e,"yearRange").split(":");h=(new Date).getFullYear();p=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t};d=p(c[0]);v=Math.max(d,p(c[1]||""));d=r?Math.max(d,r.getFullYear()):d;v=i?Math.min(v,i.getFullYear()):v;e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;d<=v;d++){e.yearshtml+="<option value='"+d+"'"+(d===n?" selected='selected'":"")+">"+d+"</option>"}e.yearshtml+="</select>";b+=e.yearshtml;e.yearshtml=null}}b+=this._get(e,"yearSuffix");if(y){b+=(s||!(m&&g)?"&#xa0;":"")+w}b+="</div>";return b},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n==="Y"?t:0),i=e.drawMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n==="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate();e.drawMonth=e.selectedMonth=o.getMonth();e.drawYear=e.selectedYear=o.getFullYear();if(n==="M"||n==="Y"){this._notifyChange(e)}},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return r&&i>r?r:i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");if(t){t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])}},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t==="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));if(t<0){s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth()))}return this._isInRange(e,s)},_isInRange:function(e,t){var n,r,i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),o=null,u=null,a=this._get(e,"yearRange");if(a){n=a.split(":");r=(new Date).getFullYear();o=parseInt(n[0],10);u=parseInt(n[1],10);if(n[0].match(/[+\-].*/)){o+=r}if(n[1].match(/[+\-].*/)){u+=r}}return(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())&&(!o||t.getFullYear()>=o)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(e){var t=this._get(e,"intYearCutoff");t=typeof t!=="string"?t:(new Date).getFullYear()%100+parseInt(t,10);return{intYearCutoff:t,dayNamesInteger:this._get(e,"dayNamesInteger"),dayNames:this._get(e,"dayNames"),monthNamesInteger:this._get(e,"monthNamesInteger"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){if(!t){e.currentDay=e.selectedDay;e.currentMonth=e.selectedMonth;e.currentYear=e.selectedYear}var i=t?typeof t==="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}});e.fn.datepicker=function(t){if(!this.length){return this}if(!e.datepicker.initialized){e(document).mousedown(e.datepicker._checkExternalClick);e.datepicker.initialized=true}if(e("#"+e.datepicker._mainDivId).length===0){e("body").append(e.datepicker.dpDiv)}var n=Array.prototype.slice.call(arguments,1);if(typeof t==="string"&&(t==="isDisabled"||t==="getDate"||t==="widget")){return e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))}if(t==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))}return this.each(function(){typeof t==="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)})};e.datepicker=new i;e.datepicker.initialized=false;e.datepicker.uuid=(new Date).getTime();e.datepicker.version="1.10.3"})(jQuery);(function(e,t){var n={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},r={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};e.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;if(n<0){e(this).css("top",t.top-n)}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&e.fn.draggable){this._makeDraggable()}if(this.options.resizable&&e.fn.resizable){this._makeResizable()}this._isOpen=false},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var t=this.options.appendTo;if(t&&(t.jquery||t.nodeType)){return e(t)}return this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}e=t.parent.children().eq(t.index);if(e.length&&e[0]!==this.element[0]){e.before(this.element)}else{t.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===false){return}this._isOpen=false;this._destroyOverlay();if(!this.opener.filter(":focusable").focus().length){e(this.document[0].activeElement).blur()}this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;if(n&&!t){this._trigger("focus",e)}return n},open:function(){var t=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}return}this._isOpen=true;this.opener=e(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);this._show(this.uiDialog,this.options.show,function(){t._focusTabbable();t._trigger("focus")});this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");if(!e.length){e=this.element.find(":tabbable")}if(!e.length){e=this.uiDialogButtonPane.find(":tabbable")}if(!e.length){e=this.uiDialogTitlebarClose.filter(":tabbable")}if(!e.length){e=this.uiDialog}e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);if(!n){this._focusTabbable()}}t.preventDefault();n.call(this);this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault();this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB){return}var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");if((t.target===i[0]||t.target===this.uiDialog[0])&&!t.shiftKey){r.focus(1);t.preventDefault()}else if((t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey){i.focus(1);t.preventDefault()}},mousedown:function(e){if(this._moveToTop(e)){this._focusTabbable()}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(t){if(!e(t.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}});this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault();this.close(e)}});t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(t);this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){if(!this.options.title){e.html("&#160;")}e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r;r=e.extend({type:"button"},r);i=r.click;r.click=function(){i.apply(t.element[0],arguments)};s={icons:r.icons,text:r.showText};delete r.icons;delete r.showText;e("<button></button>",r).button(s).appendTo(t.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging");t._blockFrames();t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()];e(this).removeClass("ui-dialog-dragging");t._unblockFrames();t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r==="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing");t._blockFrames();t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height();n.width=e(this).width();e(this).removeClass("ui-dialog-resizing");t._unblockFrames();t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");if(!e){this.uiDialog.show()}this.uiDialog.position(this.options.position);if(!e){this.uiDialog.hide()}},_setOptions:function(t){var i=this,s=false,o={};e.each(t,function(e,t){i._setOption(e,t);if(e in n){s=true}if(e in r){o[e]=t}});if(s){this._size();this._position()}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",o)}},_setOption:function(e,t){var n,r,i=this.uiDialog;if(e==="dialogClass"){i.removeClass(this.options.dialogClass).addClass(t)}if(e==="disabled"){return}this._super(e,t);if(e==="appendTo"){this.uiDialog.appendTo(this._appendTo())}if(e==="buttons"){this._createButtons()}if(e==="closeText"){this.uiDialogTitlebarClose.button({label:""+t})}if(e==="draggable"){n=i.is(":data(ui-draggable)");if(n&&!t){i.draggable("destroy")}if(!n&&t){this._makeDraggable()}}if(e==="position"){this._position()}if(e==="resizable"){r=i.is(":data(ui-resizable)");if(r&&!t){i.resizable("destroy")}if(r&&typeof t==="string"){i.resizable("option","handles",t)}if(!r&&t!==false){this._makeResizable()}}if(e==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(r.minWidth>r.width){r.width=r.minWidth}e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight();t=Math.max(0,r.minHeight-e);n=typeof r.maxHeight==="number"?Math.max(0,r.maxHeight-e):"none";if(r.height==="auto"){this.element.css({minHeight:t,maxHeight:n,height:"auto"})}else{this.element.height(Math.max(0,r.height-e))}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_allowInteraction:function(t){if(e(t.target).closest(".ui-dialog").length){return true}return!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal){return}var t=this,n=this.widgetFullName;if(!e.ui.dialog.overlayInstances){this._delay(function(){if(e.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(r){if(!t._allowInteraction(r)){r.preventDefault();e(".ui-dialog:visible:last .ui-dialog-content").data(n)._focusTabbable()}})}})}this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal){return}if(this.overlay){e.ui.dialog.overlayInstances--;if(!e.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")}this.overlay.remove();this.overlay=null}}});e.ui.dialog.overlayInstances=0;if(e.uiBackCompat!==false){e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t==="string"||typeof t==="object"&&"0"in t){n=t.split?t.split(" "):[t[0],t[1]];if(n.length===1){n[1]=n[0]}e.each(["left","top"],function(e,t){if(+n[e]===n[e]){r[e]=n[e];n[e]=t}});t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")}}t=e.extend({},e.ui.dialog.prototype.options.position,t)}else{t=e.ui.dialog.prototype.options.position}i=this.uiDialog.is(":visible");if(!i){this.uiDialog.show()}this.uiDialog.position(t);if(!i){this.uiDialog.hide()}}})}})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){if(this.options.disabled){e.preventDefault()}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");if(!this.mouseHandled&&n.not(".ui-state-disabled").length){this.mouseHandled=true;this.select(t);if(n.has(".ui-menu").length){this.expand(t)}else if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);if(!t){this.focus(e,n)}},blur:function(t){this._delay(function(){if(!e.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(t)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(t){if(!e(t.target).closest(".ui-menu").length){this.collapseAll(t)}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);if(t.data("ui-menu-submenu-carat")){t.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=true;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(t)}break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=false;r=this.previousFilter||"";i=String.fromCharCode(t.keyCode);s=false;clearTimeout(this.filterTimer);if(i===r){s=true}else{i=r+i}o=new RegExp("^"+a(i),"i");n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())});n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n;if(!n.length){i=String.fromCharCode(t.keyCode);o=new RegExp("^"+a(i),"i");n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})}if(n.length){this.focus(t,n);if(n.length>1){this.previousFilter=i;this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(u){t.preventDefault()}},_activate:function(e){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(e)}else{this.select(e)}}},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",true);r.attr("aria-haspopup","true").prepend(i);t.attr("aria-labelledby",r.attr("id"))});t=r.add(this.element);t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});t.children(":not(.ui-menu-item)").each(function(){var t=e(this);if(!/[^\-\u2014\u2013\s]/.test(t.text())){t.addClass("ui-widget-content ui-menu-divider")}});t.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!e.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if(e==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu)}this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus");this._scrollIntoView(t);this.active=t.first();r=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",r.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(e&&e.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}n=t.children(".ui-menu");if(n.length&&/^mouse/.test(e.type)){this._startOpening(n)}this.activeMenu=t.parent();this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;if(this._hasScroll()){n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0;r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0;i=t.offset().top-this.activeMenu.offset().top-n-r;s=this.activeMenu.scrollTop();o=this.activeMenu.height();u=t.height();if(i<0){this.activeMenu.scrollTop(s+i)}else if(i+u>o){this.activeMenu.scrollTop(s+i-o+u)}}},blur:function(e,t){if(!t){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true");t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer);this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));if(!r.length){r=this.element}this._close(r);this.blur(t);this.activeMenu=r},this.delay)},_close:function(e){if(!e){e=this.active?this.active.parent():this.element}e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(t&&t.length){this._close();this.focus(e,t)}},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(t&&t.length){this._open(t.parent());this._delay(function(){this.focus(e,t)})}},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;if(this.active){if(e==="first"||e==="last"){r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{r=this.active[e+"All"](".ui-menu-item").eq(0)}}if(!r||!r.length||!this.active){r=this.activeMenu.children(".ui-menu-item")[t]()}this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem()){return}if(this._hasScroll()){r=this.active.offset().top;i=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){n=e(this);return n.offset().top-r-i<0});this.focus(t,n)}else{this.focus(t,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem()){return}if(this._hasScroll()){r=this.active.offset().top;i=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){n=e(this);return n.offset().top-r+i>0});this.focus(t,n)}else{this.focus(t,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(t,true)}this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(e){if(e===t){return this.options.value}this.options.value=this._constrainedValue(e);this._refreshValue()},_constrainedValue:function(e){if(e===t){e=this.options.value}this.indeterminate=e===false;if(typeof e!=="number"){e=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value;this._super(e);this.options.value=this._constrainedValue(t);this._refreshValue()},_setOption:function(e,t){if(e==="max"){t=Math.max(this.min,t)}this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,n=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(n.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}if(this.oldValue!==t){this.oldValue=t;this._trigger("change")}if(t===this.options.max){this._trigger("complete")}}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];n=r.values&&r.values.length||1;if(i.length>n){i.slice(n).remove();i=i.slice(0,n)}for(t=i.length;t<n;t++){o.push(s)}this.handles=i.add(e(o.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";if(t.range){if(t.range===true){if(!t.values){t.values=[this._valueMin(),this._valueMin()]}else if(t.values.length&&t.values.length!==2){t.values=[t.values[0],t.values[0]]}else if(e.isArray(t.values)){t.values=t.values.slice(0)}}if(!this.range||!this.range.length){this.range=e("<div></div>").appendTo(this.element);n="ui-slider-range"+" ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))}else{this.range=e([])}},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e);this._on(e,this._handleEvents);this._hoverable(e);this._focusable(e)},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;if(c.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();n={x:t.pageX,y:t.pageY};r=this._normValueFromMouse(n);i=this._valueMax()-this._valueMin()+1;this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min)){i=n;s=e(this);o=t}});u=this._start(t,o);if(u===false){return false}this._mouseSliding=true;this._handleIndex=o;s.addClass("ui-state-active").focus();a=s.offset();f=!e(t.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(t,o,r)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);this._slide(e,this._handleIndex,n);return false},_mouseStop:function(e){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(e,this._handleIndex);this._change(e,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;if(this.orientation==="horizontal"){t=this.elementSize.width;n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{t=this.elementSize.height;n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}r=n/t;if(r>1){r=1}if(r<0){r=0}if(this.orientation==="vertical"){r=1-r}i=this._valueMax()-this._valueMin();s=this._valueMin()+r*i;return this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};if(this.options.values&&this.options.values.length){n.value=this.values(t);n.values=this.values()}return this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;if(this.options.values&&this.options.values.length){r=this.values(t?0:1);if(this.options.values.length===2&&this.options.range===true&&(t===0&&n>r||t===1&&n<r)){n=r}if(n!==this.values(t)){i=this.values();i[t]=n;s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i});r=this.values(t?0:1);if(s!==false){this.values(t,n,true)}}}else{if(n!==this.value()){s=this._trigger("slide",e,{handle:this.handles[t],value:n});if(s!==false){this.value(n)}}}},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};if(this.options.values&&this.options.values.length){n.value=this.values(t);n.values=this.values()}this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};if(this.options.values&&this.options.values.length){n.value=this.values(t);n.values=this.values()}this._lastChangedValue=t;this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e);this._refreshValue();this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n);this._refreshValue();this._change(null,t);return}if(arguments.length){if(e.isArray(arguments[0])){r=this.options.values;i=arguments[0];for(s=0;s<r.length;s+=1){r[s]=this._trimAlignValue(i[s]);this._change(null,s)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(t)}else{return this.value()}}}else{return this._values()}},_setOption:function(t,n){var r,i=0;if(t==="range"&&this.options.range===true){if(n==="min"){this.options.value=this._values(0);this.options.values=null}else if(n==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null}}if(e.isArray(this.options.values)){i=this.options.values.length}e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(r=0;r<i;r+=1){this._change(null,r)}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break}},_value:function(){var e=this.options.value;e=this._trimAlignValue(e);return e},_values:function(e){var t,n,r;if(arguments.length){t=this.options.values[e];t=this._trimAlignValue(t);return t}else if(this.options.values&&this.options.values.length){n=this.options.values.slice();for(r=0;r<n.length;r+=1){n[r]=this._trimAlignValue(n[r])}return n}else{return[]}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()}if(e>=this._valueMax()){return this._valueMax()}var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;if(Math.abs(n)*2>=t){r+=n>0?t:-t}return parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=!this._animateOff?u.animate:false,l={};if(this.options.values&&this.options.values.length){this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100;l[a.orientation==="horizontal"?"left":"bottom"]=n+"%";e(this).stop(1,1)[f?"animate":"css"](l,u.animate);if(a.options.range===true){if(a.orientation==="horizontal"){if(r===0){a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate)}if(r===1){a.range[f?"animate":"css"]({width:n-t+"%"},{queue:false,duration:u.animate})}}else{if(r===0){a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate)}if(r===1){a.range[f?"animate":"css"]({height:n-t+"%"},{queue:false,duration:u.animate})}}}t=n})}else{r=this.value();i=this._valueMin();s=this._valueMax();n=s!==i?(r-i)/(s-i)*100:0;l[this.orientation==="horizontal"?"left":"bottom"]=n+"%";this.handle.stop(1,1)[f?"animate":"css"](l,u.animate);if(o==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate)}if(o==="max"&&this.orientation==="horizontal"){this.range[f?"animate":"css"]({width:100-n+"%"},{queue:false,duration:u.animate})}if(o==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate)}if(o==="max"&&this.orientation==="vertical"){this.range[f?"animate":"css"]({height:100-n+"%"},{queue:false,duration:u.animate})}}},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=true;e(t.target).addClass("ui-state-active");r=this._start(t,u);if(r===false){return}}break}o=this.options.step;if(this.options.values&&this.options.values.length){i=s=this.values(u)}else{i=s=this.value()}switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax()){return}s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin()){return}s=this._trimAlignValue(i-o);break}this._slide(t,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(t,n);this._change(t,n);e(t.target).removeClass("ui-state-active")}}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments);this._refresh();if(t!==this.element.val()){this._trigger("change")}}}e.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;e.each(["min","max","step"],function(e,r){var i=n.attr(r);if(i!==undefined&&i.length){t[r]=i}});return t},_events:{keydown:function(e){if(this._start(e)&&this._keydown(e)){e.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",e)}},mousewheel:function(e,t){if(!t){return}if(!this.spinning&&!this._start(e)){return false}this._spin((t>0?1:-1)*this.options.step,e);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(e)}},100);e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;if(!e){this.element.focus();this.previous=n;this._delay(function(){this.previous=n})}}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();t.preventDefault();r.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;r.call(this)});if(this._start(t)===false){return}this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active")){return}if(this._start(t)===false){return false}this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0){e.height(e.height())}if(this.options.disabled){this.disable()}},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:this._repeat(null,1,t);return true;case r.DOWN:this._repeat(null,-1,t);return true;case r.PAGE_UP:this._repeat(null,n.page,t);return true;case r.PAGE_DOWN:this._repeat(null,-n.page,t);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return""+"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>"+"<span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){if(!this.spinning&&this._trigger("start",e)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(e,t,n){e=e||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,t,n)},e);this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;if(!this.counter){this.counter=1}n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==false){this._value(n);this.counter++}},_increment:function(t){var n=this.options.incremental;if(n){return e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1)}return 1},_precision:function(){var e=this._precisionOf(this.options.step);if(this.options.min!==null){e=Math.max(e,this._precisionOf(this.options.min))}return e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;t=r.min!==null?r.min:0;n=e-t;n=Math.round(n/r.step)*r.step;e=t+n;e=parseFloat(e.toFixed(this._precision()));if(r.max!==null&&e>r.max){return r.max}if(r.min!==null&&e<r.min){return r.min}return e},_stop:function(e){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t;this.element.val(this._format(n));return}if(e==="max"||e==="min"||e==="step"){if(typeof t==="string"){t=this._parse(t)}}if(e==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)}this._super(e,t);if(e==="disabled"){if(t){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:t(function(e){this._super(e);this._value(this.element.val())}),_parse:function(e){if(typeof e==="string"&&e!==""){e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e}return e===""||isNaN(e)?null:e},_format:function(e){if(e===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;if(e!==""){n=this._parse(e);if(n!==null){if(!t){n=this._adjustValue(n)}e=this._format(n)}}this.element.val(e);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){if(this._start()){this._spin((e||1)*this.options.step);this._stop()}},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){if(this._start()){this._spin((e||1)*-this.options.step);this._stop()}},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length){return this._parse(this.element.val())}t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){if(e(this).is(".ui-state-disabled")){t.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(e(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();n.active=this._initialActive();if(e.isArray(n.disabled)){n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(n.active)}else{this.active=e()}this._refresh();if(this.active.length){this.load(n.active)}},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){if(r){this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r){t=n;return false}})}if(t===null){t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(t===null||t===-1){t=this.tabs.length?0:false}}if(t!==false){t=this.tabs.index(this.tabs.eq(t));if(t===-1){t=n?false:0}}if(!n&&t===false&&this.anchors.length){t=0}return t},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?e():this._getPanelForTab(this.active)}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=true;if(this._handlePageNav(t)){return}switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=false;r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault();clearTimeout(this.activating);this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault();clearTimeout(this.activating);this._activate(r===this.options.active?false:r);return;default:return}t.preventDefault();clearTimeout(this.activating);r=this._focusNextTab(r,i);if(!t.ctrlKey){n.attr("aria-selected","false");this.tabs.eq(r).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",r)},this.delay)}},_panelKeydown:function(t){if(this._handlePageNav(t)){return}if(t.ctrlKey&&t.keyCode===e.ui.keyCode.UP){t.preventDefault();this.active.focus()}},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(t,n){function i(){if(t>r){t=0}if(t<0){t=r}return t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1){t=n?t+1:t-1}return t},_focusNextTab:function(e,t){e=this._findNextTab(e,t);this.tabs.eq(e).focus();return e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t);if(e==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",t);if(!t&&this.options.active===false){this._activate(0)}}if(e==="event"){this._setupEvents(t)}if(e==="heightStyle"){this._setupHeightStyle(t)}},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)});this._processTabs();if(t.active===false||!this.anchors.length){t.active=false;this.active=e()}else if(this.active.length&&!e.contains(this.tablist[0],this.active[0])){if(this.tabs.length===t.disabled.length){t.active=false;this.active=e()}else{this._activate(this._findNextTab(Math.max(0,t.active-1),false))}}else{t.active=this.tabs.index(this.active)}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=e();this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");if(s(r)){i=r.hash;o=t.element.find(t._sanitizeSelector(i))}else{u=t._tabId(f);i="#"+u;o=t.element.find(i);if(!o.length){o=t._createPanel(u);o.insertAfter(t.panels[n-1]||t.tablist)}o.attr("aria-live","polite")}if(o.length){t.panels=t.panels.add(o)}if(l){f.data("ui-tabs-aria-controls",l)}f.attr({"aria-controls":i.substring(1),"aria-labelledby":a});o.attr("aria-labelledby",a)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(t){if(e.isArray(t)){if(!t.length){t=false}else if(t.length===this.anchors.length){t=true}}for(var n=0,r;r=this.tabs[n];n++){if(t===true||e.inArray(n,t)!==-1){e(r).addClass("ui-state-disabled").attr("aria-disabled","true")}else{e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};if(t){e.each(t.split(" "),function(e,t){n[t]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,n);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();if(t==="fill"){n=r.height();n-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed"){return}n-=t.outerHeight(true)});this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(true)});this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")}else if(t==="auto"){n=0;this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n)}},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=!r.length?e():this._getPanelForTab(r),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===false){return}n.active=u?false:this.tabs.index(s);this.active=o?e():s;if(this.xhr){this.xhr.abort()}if(!f.length&&!a.length){e.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(a.length){this.load(this.tabs.index(s),t)}this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=false;r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(i.length&&r.options.show){r._show(i,r.options.show,o)}else{i.show();o()}}var r=this,i=n.newPanel,s=n.oldPanel;this.running=true;if(s.length&&this.options.hide){this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");u()})}else{n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");s.hide();u()}s.attr({"aria-expanded":"false","aria-hidden":"true"});n.oldTab.attr("aria-selected","false");if(i.length&&s.length){n.oldTab.attr("tabIndex",-1)}else if(i.length){this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1)}i.attr({"aria-expanded":"true","aria-hidden":"false"});n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0]){return}if(!r.length){r=this.active}n=r.find(".ui-tabs-anchor")[0];this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===false?e():this.tabs.eq(t)},_getIndex:function(e){if(typeof e==="string"){e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))}return e},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if(e.data(this,"ui-tabs-destroy")){e(this).remove()}else{e(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");if(n){t.attr("aria-controls",n).removeData("ui-tabs-aria-controls")}else{t.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(n){var r=this.options.disabled;if(r===false){return}if(n===t){r=false}else{n=this._getIndex(n);if(e.isArray(r)){r=e.map(r,function(e){return e!==n?e:null})}else{r=e.map(this.tabs,function(e,t){return t!==n?t:null})}}this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===true){return}if(n===t){r=true}else{n=this._getIndex(n);if(e.inArray(n,r)!==-1){return}if(e.isArray(r)){r=e.merge([n],r).sort()}else{r=[n]}}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0])){return}this.xhr=e.ajax(this._ajaxSettings(o,n,a));if(this.xhr&&this.xhr.statusText!=="canceled"){i.addClass("ui-tabs-loading");u.attr("aria-busy","true");this.xhr.success(function(e){setTimeout(function(){u.html(e);r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){if(t==="abort"){r.panels.stop(false,true)}i.removeClass("ui-tabs-loading");u.removeAttr("aria-busy");if(e===r.xhr){delete r.xhr}},1)})}},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n);t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);if(i!==-1){r.splice(i,1)}t.removeData("ui-tooltip-id");r=e.trim(r.join(" "));if(r){t.attr("aria-describedby",r)}else{t.removeAttr("aria-describedby")}}var t=0;e.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"]();this.options[t]=n;return}this._super(t,n);if(t==="content"){e.each(this.tooltips,function(e,t){r._updateContent(t)})}},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0];t.close(i,true)});this.element.find(this.options.items).addBack().each(function(){var t=e(this);if(t.is("[title]")){t.data("ui-tooltip-title",t.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);if(t.data("ui-tooltip-title")){t.attr("title",t.data("ui-tooltip-title"))}})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id")){return}if(r.attr("title")){r.data("ui-tooltip-title",r.attr("title"))}r.data("ui-tooltip-open",true);if(t&&t.type==="mouseover"){r.parents().each(function(){var t=e(this),r;if(t.data("ui-tooltip-open")){r=e.Event("blur");r.target=r.currentTarget=this;n.close(r,true)}if(t.attr("title")){t.uniqueId();n.parents[this.id]={element:this,title:t.attr("title")};t.attr("title","")}})}this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r==="string"){return this._open(t,e,r)}n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open")){return}i._delay(function(){if(t){t.type=s}this._open(t,e,n)})});if(n){this._open(t,e,n)}},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden")){return}s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i){return}s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}if(r.is("[title]")){if(t&&t.type==="mouseover"){r.attr("title","")}else{r.removeAttr("title")}}s=this._tooltip(r);n(r,s.attr("id"));s.find(".ui-tooltip-content").html(i);if(this.options.track&&t&&/^mouse/.test(t.type)){this._on(this.document,{mousemove:f});f(t)}else{s.position(e.extend({of:r},this.options.position))}s.hide();this._show(s,this.options.show);if(this.options.show&&this.options.show.delay){u=this.delayedShow=setInterval(function(){if(s.is(":visible")){f(a.of);clearInterval(u)}},e.fx.interval)}this._trigger("open",t,{tooltip:s});o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0];this.close(n,true)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover"){o.mouseleave="close"}if(!t||t.type==="focusin"){o.focusout="close"}this._on(true,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing){return}clearInterval(this.delayedShow);if(i.data("ui-tooltip-title")){i.attr("title",i.data("ui-tooltip-title"))}r(i);s.stop(true);this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))});i.removeData("ui-tooltip-open");this._off(i,"mouseleave focusout keyup");if(i[0]!==this.element[0]){this._off(i,"remove")}this._off(this.document,"mousemove");if(t&&t.type==="mouseleave"){e.each(this.parents,function(t,r){e(r.element).attr("title",r.title);delete n.parents[t]})}this.closing=true;this._trigger("close",t,{tooltip:s});this.closing=false},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));e("<div>").addClass("ui-tooltip-content").appendTo(i);i.appendTo(this.document[0].body);this.tooltips[r]=n;return i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove();delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0];t.close(i,true);e("#"+n).remove();if(r.data("ui-tooltip-title")){r.attr("title",r.data("ui-tooltip-title"));r.removeData("ui-tooltip-title")}})}})})(jQuery);(function(e,t){var n="ui-effects-";e.effects={effect:{}};(function(e,t){function h(e,t,n){var r=u[t.type]||{};if(e==null){return n||!t.def?null:t.def}e=r.floor?~~e:parseFloat(e);if(isNaN(e)){return t.def}if(r.mod){return(e+r.mod)%r.mod}return 0>e?0:r.max<e?r.max:e}function p(t){var n=s(),r=n._rgba=[];t=t.toLowerCase();c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a){s=n[f](a);n[o[f].cache]=s[o[f].cache];r=n._rgba=s._rgba;return false}});if(r.length){if(r.join()==="0,0,0,0"){e.extend(r,l.transparent)}return n}return l[t]}function d(e,t,n){n=(n+1)%1;if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)";a.rgba=f.style.backgroundColor.indexOf("rgba")>-1;c(o,function(e,t){t.cache="_"+e;t.props.alpha={idx:3,type:"percent",def:1}});s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t){this._rgba=[null,null,null,null];return this}if(n.jquery||n.nodeType){n=e(n).css(r);r=t}var a=this,f=e.type(n),d=this._rgba=[];if(r!==t){n=[n,r,i,u];f="array"}if(f==="string"){return this.parse(p(n)||l._default)}if(f==="array"){c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)});return this}if(f==="object"){if(n instanceof s){c(o,function(e,t){if(n[t.cache]){a[t.cache]=n[t.cache].slice()}})}else{c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null){return}a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,true)});if(a[i]&&e.inArray(null,a[i].slice(0,3))<0){a[i][3]=1;if(r.from){a._rgba=r.from(a[i])}}})}return this}},is:function(e){var t=s(e),n=true,r=this;c(o,function(e,i){var s,o=t[i.cache];if(o){s=r[i.cache]||i.to&&i.to(r._rgba)||[];c(i.props,function(e,t){if(o[t.idx]!=null){n=o[t.idx]===s[t.idx];return n}})}return n});return n},_space:function(){var e=[],t=this;c(o,function(n,r){if(t[r.cache]){e.push(n)}});return e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();n=n[i.cache];c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null){return}if(s===null){l[i]=o}else{if(a.mod){if(o-s>a.mod/2){s+=a.mod}else if(s-o>a.mod/2){s-=a.mod}}l[i]=h((o-s)*t+s,r)}});return this[r](l)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});if(n[3]===1){n.pop();t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e});if(n[3]===1){n.pop();t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();if(t){n.push(~~(r*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16);return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});s.fn.parse.prototype=s.fn;o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;if(o===s){l=0}else if(t===s){l=60*(n-r)/u+360}else if(n===s){l=60*(r-t)/u+120}else{l=60*(t-n)/u+240}if(u===0){c=0}else if(f<=.5){c=u/a}else{c=u/(2-a)}return[Math.round(l)%360,c,f,i==null?1:i]};o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]};c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){if(a&&!this[u]){this[u]=a(this._rgba)}if(n===t){return this[u].slice()}var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();c(o,function(e,t){var n=l[i==="object"?e:t.idx];if(n==null){n=p[t.idx]}p[t.idx]=h(n,t)});if(f){r=s(f(p));r[u]=p;return r}else{return s(p)}};c(o,function(t,i){if(s.fn[t]){return}s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;if(o==="undefined"){return f}if(o==="function"){s=s.call(this,f);o=e.type(s)}if(s==null&&i.empty){return this}if(o==="string"){l=r.exec(s);if(l){s=f+parseFloat(l[2])*(l[1]==="+"?1:-1)}}a[i.idx]=s;return this[u](a)}})});s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style){try{u=e.css(o,"backgroundColor");o=o.parentNode}catch(f){}}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}};e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n);t.end=s(t.end);t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})};s.hook(n);e.cssHooks.borderColor={expand:function(e){var t={};c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e});return t}};l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--){n=i[r];if(typeof i[n]==="string"){s[e.camelCase(n)]=i[n]}}}else{for(n in i){if(typeof i[n]==="string"){s[n]=i[n]}}}return s}function s(t,n){var i={},s,o;for(s in n){o=n[s];if(t[s]!==o){if(!r[s]){if(e.fx.step[s]||!isNaN(parseFloat(o))){i[s]=o}}}}return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){jQuery.style(e.elem,n,e.end);e.setAttr=true}}});if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}});u=function(){e.each(n,function(e,n){if(t[n]){r[n+"Class"](t[n])}})};u();f=f.map(function(){this.end=i(this.el[0]);this.diff=s(this.start,this.end);return this});r.attr("class",o);f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:false,complete:function(){n.resolve(t)}});this.el.animate(this.diff,r);return n.promise()});e.when.apply(e,f.get()).done(function(){u();e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})});a.complete.call(r[0])})})};e.fn.extend({addClass:function(t){return function(n,r,i,s){return r?e.effects.animateClass.call(this,{add:n},r,i,s):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(n,r,i,s){return arguments.length>1?e.effects.animateClass.call(this,{remove:n},r,i,s):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(n){return function(r,i,s,o,u){if(typeof i==="boolean"||i===t){if(!s){return n.apply(this,arguments)}else{return e.effects.animateClass.call(this,i?{add:r}:{remove:r},s,o,u)}}else{return e.effects.animateClass.call(this,{toggle:r},i,s,o)}}}(e.fn.toggleClass),switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})})();(function(){function r(t,n,r,i){if(e.isPlainObject(t)){n=t;t=t.effect}t={effect:t};if(n==null){n={}}if(e.isFunction(n)){i=n;r=null;n={}}if(typeof n==="number"||e.fx.speeds[n]){i=r;r=n;n={}}if(e.isFunction(r)){i=r;r=null}if(n){e.extend(t,n)}r=r||n.duration;t.duration=e.fx.off?0:typeof r==="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default;t.complete=i||n.complete;return t}function i(t){if(!t||typeof t==="number"||e.fx.speeds[t]){return true}if(typeof t==="string"&&!e.effects.effect[t]){return true}if(e.isFunction(t)){return true}if(typeof t==="object"&&!t.effect){return true}return false}e.extend(e.effects,{version:"1.10.3",save:function(e,t){for(var r=0;r<t.length;r++){if(t[r]!==null){e.data(n+t[r],e[0].style[t[r]])}}},restore:function(e,r){var i,s;for(s=0;s<r.length;s++){if(r[s]!==null){i=e.data(n+r[s]);if(i===t){i=""}e.css(r[s],i)}}},setMode:function(e,t){if(t==="toggle"){t=e.is(":hidden")?"show":"hide"}return t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper")){return t.parent()}var n={width:t.outerWidth(true),height:t.outerHeight(true),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}t.wrap(r);if(t[0]===s||e.contains(t[0],s)){e(s).focus()}r=t.parent();if(t.css("position")==="static"){r.css({position:"relative"});t.css({position:"relative"})}else{e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")});e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r);if(isNaN(parseInt(n[r],10))){n[r]="auto"}});t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}t.css(i);return r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;if(t.parent().is(".ui-effects-wrapper")){t.parent().replaceWith(t);if(t[0]===n||e.contains(t[0],n)){e(n).focus()}}return t},setTransition:function(t,n,r,i){i=i||{};e.each(n,function(e,n){var s=t.cssUnit(n);if(s[0]>0){i[n]=s[0]*r+s[1]}});return i}});e.fn.extend({effect:function(){function o(n){function u(){if(e.isFunction(i)){i.call(r[0])}if(e.isFunction(n)){n()}}var r=e(this),i=t.complete,o=t.mode;if(r.is(":hidden")?o==="hide":o==="show"){r[o]();u()}else{s.call(r[0],t,u)}}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];if(e.fx.off||!s){if(n){return this[n](t.duration,t.complete)}else{return this.each(function(){if(t.complete){t.complete.call(this)}})}}return i===false?this.each(o):this.queue(i||"fx",o)},show:function(e){return function(t){if(i(t)){return e.apply(this,arguments)}else{var n=r.apply(this,arguments);n.mode="show";return this.effect.call(this,n)}}}(e.fn.show),hide:function(e){return function(t){if(i(t)){return e.apply(this,arguments)}else{var n=r.apply(this,arguments);n.mode="hide";return this.effect.call(this,n)}}}(e.fn.hide),toggle:function(e){return function(t){if(i(t)||typeof t==="boolean"){return e.apply(this,arguments)}else{var n=r.apply(this,arguments);n.mode="toggle";return this.effect.call(this,n)}}}(e.fn.toggle),cssUnit:function(t){var n=this.css(t),r=[];e.each(["em","px","%","pt"],function(e,t){if(n.indexOf(t)>0){r=[parseFloat(n),t]}});return r}})})();(function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}});e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}});e.each(t,function(t,n){e.easing["easeIn"+t]=n;e.easing["easeOut"+t]=function(e){return 1-n(1-e)};e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})})()})(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;if(s.parent().is(".ui-effects-wrapper")){e.effects.save(s.parent(),o)}else{e.effects.save(s,o)}s.show();v=e.effects.createWrapper(s).css({overflow:"hidden"});m=v[l]();g=parseFloat(v.css(c))||0;p[l]=d?m:0;if(!h){s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"});p[c]=d?g:m+g}if(d){v.css(l,0);if(!h){v.css(c,g+m)}}v.animate(p,{duration:t.duration,easing:t.easing,queue:false,complete:function(){if(u==="hide"){s.hide()}e.effects.restore(s,o);e.effects.removeWrapper(s);i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;if(u||o){i.push("opacity")}e.effects.save(r,i);r.show();e.effects.createWrapper(r);if(!f){f=r[d==="top"?"outerHeight":"outerWidth"]()/3}if(u){y={opacity:1};y[d]=0;r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)}if(o){f=f/Math.pow(2,l-1)}y={};y[d]=0;for(m=0;m<l;m++){g={};g[d]=(v?"-=":"+=")+f;r.animate(g,h,p).animate(y,h,p);f=o?f*2:f/2}if(o){g={opacity:0};g[d]=(v?"-=":"+=")+f;r.animate(g,h,p)}r.queue(function(){if(o){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()});if(w>1){b.splice.apply(b,[1,0].concat(b.splice(w,c+1)))}r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i);r.show();h=e.effects.createWrapper(r).css({overflow:"hidden"});p=r[0].tagName==="IMG"?h:r;d=p[f]();if(o){p.css(f,0);p.css(l,d/2)}c[f]=o?d:0;c[l]=o?0:d/2;p.animate(c,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(!o){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i);r.show();e.effects.createWrapper(r);c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](true)/2;if(o){r.css("opacity",0).css(a,f==="pos"?-c:c)}l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c;r.animate(l,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(s==="hide"){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this);if(c.length===r*i){b()}}function b(){s.css({visibility:"visible"});e(c).remove();if(!u){s.hide()}n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l;g=h-(r-1)/2;for(p=0;p<i;p++){d=a.left+p*f;m=p-(i-1)/2;s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:false,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i);r.show();d=e.effects.createWrapper(r).css({overflow:"hidden"});v=c?[d.width(),d.height()]:[d.height(),d.width()];if(f){a=parseInt(f[1],10)/100*v[u?0:1]}if(o){d.css(l?{height:0,width:a}:{height:a,width:0})}m[h[0]]=o?v[0]:a;g[h[1]]=o?v[1]:0;d.animate(m,p,t.easing).animate(g,p,t.easing,function(){if(u){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};if(s==="hide"){o.opacity=0}e.effects.save(r,i);r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(s==="hide"){r.hide()}e.effects.restore(r,i);n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible")){r.css("opacity",0).show();l=1}for(p=1;p<a;p++){r.animate({opacity:l},f,t.easing);l=1-l}r.animate({opacity:l},f,t.easing);r.queue(function(){if(o){r.hide()}n()});if(h>1){c.splice.apply(c,[1,0].concat(c.splice(h,a+1)))}r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:false,fade:true,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}});r.effect(t)};e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(true,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size";i.queue=false;i.complete=n;if(s!=="effect"){i.origin=a||["middle","center"];i.restore=true}i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f);i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x};if(i.fade){if(s==="show"){i.from.opacity=0;i.to.opacity=1}if(s==="hide"){i.from.opacity=1;i.to.opacity=0}}r.effect(i)};e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};if(p==="show"){o.show()}r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()};if(t.mode==="toggle"&&p==="show"){o.from=t.to||b;o.to=t.from||r}else{o.from=t.from||(p==="show"?b:r);o.to=t.to||(p==="hide"?b:r)}s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both"){if(s.from.y!==s.to.y){y=y.concat(c);o.from=e.effects.setTransition(o,c,s.from.y,o.from);o.to=e.effects.setTransition(o,c,s.to.y,o.to)}if(s.from.x!==s.to.x){y=y.concat(h);o.from=e.effects.setTransition(o,h,s.from.x,o.from);o.to=e.effects.setTransition(o,h,s.to.x,o.to)}}if(v==="content"||v==="both"){if(s.from.y!==s.to.y){y=y.concat(l).concat(f);o.from=e.effects.setTransition(o,l,s.from.y,o.from);o.to=e.effects.setTransition(o,l,s.to.y,o.to)}}e.effects.save(o,y);o.show();e.effects.createWrapper(o);o.css("overflow","hidden").css(o.from);if(m){i=e.effects.getBaseline(m,r);o.from.top=(r.outerHeight-o.outerHeight())*i.y;o.from.left=(r.outerWidth-o.outerWidth())*i.x;o.to.top=(r.outerHeight-o.to.outerHeight)*i.y;o.to.left=(r.outerWidth-o.to.outerWidth)*i.x}o.css(o.from);if(v==="content"||v==="both"){c=c.concat(["marginTop","marginBottom"]).concat(l);h=h.concat(["marginLeft","marginRight"]);f=u.concat(c).concat(h);o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};if(d){e.effects.save(n,f)}n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x};n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x};if(s.from.y!==s.to.y){n.from=e.effects.setTransition(n,c,s.from.y,n.from);n.to=e.effects.setTransition(n,c,s.to.y,n.to)}if(s.from.x!==s.to.x){n.from=e.effects.setTransition(n,h,s.from.x,n.from);n.to=e.effects.setTransition(n,h,s.to.x,n.to)}n.css(n.from);n.animate(n.to,t.duration,t.easing,function(){if(d){e.effects.restore(n,f)}})})}o.animate(o.to,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(o.to.opacity===0){o.css("opacity",o.from.opacity)}if(p==="hide"){o.hide()}e.effects.restore(o,y);if(!d){if(g==="static"){o.css({position:"relative",top:o.to.top,left:o.to.left})}else{e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;if(n==="auto"){return i+"px"}return r+i+"px"})})}}e.effects.removeWrapper(o);n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i);r.show();e.effects.createWrapper(r);p[c]=(h?"-=":"+=")+u;d[c]=(h?"+=":"-=")+u*2;v[c]=(h?"-=":"+=")+u*2;r.animate(p,l,t.easing);for(m=1;m<a;m++){r.animate(d,l,t.easing).animate(v,l,t.easing)}r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){if(s==="hide"){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()});if(y>1){g.splice.apply(g,[1,0].concat(g.splice(y,f+1)))}r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i);r.show();l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](true);e.effects.createWrapper(r).css({overflow:"hidden"});if(o){r.css(a,f?isNaN(l)?"-"+l:-l:l)}c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l;r.animate(c,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(s==="hide"){r.hide()}e.effects.restore(r,i);e.effects.removeWrapper(r);n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove();n()})}})(jQuery);
(function(c,b,a,e){var d=c(b);c.fn.lazyload=function(f){var h=this;var i;var g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function j(){var k=0;h.each(function(){var l=c(this);if(g.skip_invisible&&!l.is(":visible")){return}if(c.abovethetop(this,g)||c.leftofbegin(this,g)){}else{if(!c.belowthefold(this,g)&&!c.rightoffold(this,g)){l.trigger("appear");k=0}else{if(++k>g.failure_limit){return false}}}})}if(f){if(e!==f.failurelimit){f.failure_limit=f.failurelimit;delete f.failurelimit}if(e!==f.effectspeed){f.effect_speed=f.effectspeed;delete f.effectspeed}c.extend(g,f)}i=(g.container===e||g.container===b)?d:c(g.container);if(0===g.event.indexOf("scroll")){i.bind(g.event,function(){return j()})}this.each(function(){var k=this;var l=c(k);k.loaded=false;if(l.attr("src")===e||l.attr("src")===false){if(l.is("img")){l.attr("src",g.placeholder)}}l.one("appear",function(){if(!this.loaded){if(g.appear){var m=h.length;g.appear.call(k,m,g)}c("<img />").bind("load",function(){var o=l.attr("data-"+g.data_attribute);l.hide();if(l.is("img")){l.attr("src",o)}else{l.css("background-image","url('"+o+"')")}l[g.effect](g.effect_speed);k.loaded=true;var n=c.grep(h,function(q){return !q.loaded});h=c(n);if(g.load){var p=h.length;g.load.call(k,p,g)}}).attr("src",l.attr("data-"+g.data_attribute))}});if(0!==g.event.indexOf("scroll")){l.bind(g.event,function(){if(!k.loaded){l.trigger("appear")}})}});d.bind("resize",function(){j()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){d.bind("pageshow",function(k){if(k.originalEvent&&k.originalEvent.persisted){h.each(function(){c(this).trigger("appear")})}})}c(a).ready(function(){j()});return this};c.belowthefold=function(g,h){var f;if(h.container===e||h.container===b){f=(b.innerHeight?b.innerHeight:d.height())+d.scrollTop()}else{f=c(h.container).offset().top+c(h.container).height()}return f<=c(g).offset().top-h.threshold};c.rightoffold=function(g,h){var f;if(h.container===e||h.container===b){f=d.width()+d.scrollLeft()}else{f=c(h.container).offset().left+c(h.container).width()}return f<=c(g).offset().left-h.threshold};c.abovethetop=function(g,h){var f;if(h.container===e||h.container===b){f=d.scrollTop()}else{f=c(h.container).offset().top}return f>=c(g).offset().top+h.threshold+c(g).height()};c.leftofbegin=function(g,h){var f;if(h.container===e||h.container===b){f=d.scrollLeft()}else{f=c(h.container).offset().left}return f>=c(g).offset().left+h.threshold+c(g).width()};c.inviewport=function(f,g){return !c.rightoffold(f,g)&&!c.leftofbegin(f,g)&&!c.belowthefold(f,g)&&!c.abovethetop(f,g)};c.extend(c.expr[":"],{"below-the-fold":function(f){return c.belowthefold(f,{threshold:0})},"above-the-top":function(f){return !c.belowthefold(f,{threshold:0})},"right-of-screen":function(f){return c.rightoffold(f,{threshold:0})},"left-of-screen":function(f){return !c.rightoffold(f,{threshold:0})},"in-viewport":function(f){return c.inviewport(f,{threshold:0})},"above-the-fold":function(f){return !c.belowthefold(f,{threshold:0})},"right-of-fold":function(f){return c.rightoffold(f,{threshold:0})},"left-of-fold":function(f){return !c.rightoffold(f,{threshold:0})}})})(jQuery,window,document);
(function(g){"function"===typeof define&&define.amd?define(["jquery"],g):g(window.jQuery||window.Zepto)})(function(g){var z=function(a,e,b){var k=this,n,p;a=g(a);e="function"===typeof e?e(a.val(),void 0,a,b):e;var c={getCaret:function(){try{var d,f=0,c=a.get(0),h=document.selection,e=c.selectionStart;if(h&&!~navigator.appVersion.indexOf("MSIE 10"))d=h.createRange(),d.moveStart("character",a.is("input")?-a.val().length:-a.text().length),f=d.text.length;else if(e||"0"===e)f=e;return f}catch(b){}},setCaret:function(d){try{if(a.is(":focus")){var f,
c=a.get(0);c.setSelectionRange?c.setSelectionRange(d,d):c.createTextRange&&(f=c.createTextRange(),f.collapse(!0),f.moveEnd("character",d),f.moveStart("character",d),f.select())}}catch(h){}},events:function(){a.on("keydown.mask",function(){n=c.val()}).on("keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){n===a.val()||a.data("changed")||a.trigger("change");a.data("changed",
!1)}).on("focusout.mask",function(){b.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var d=[],f,a,c,b,l=0;l<e.length;l++)(f=k.translation[e[l]])?(a=f.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=f.optional,(f=f.recursive)?(d.push(e[l]),b={digit:e[l],pattern:a}):d.push(c||f?a+"?":a)):d.push("\\"+e[l]);d=d.join("");b&&(d=d.replace(RegExp("("+b.digit+"(.*"+b.digit+")?)"),"($1)?").replace(RegExp(b.digit,"g"),b.pattern));return RegExp(d)},destroyEvents:function(){a.off("keydown keyup paste drop change blur focusout DOMNodeInserted ".split(" ").join(".mask ")).removeData("changeCalled")},
val:function(d){var c=a.is("input");return 0<arguments.length?c?a.val(d):a.text(d):c?a.val():a.text()},getMCharsBeforeCount:function(d,a){for(var c=0,b=0,g=e.length;b<g&&b<d;b++)k.translation[e.charAt(b)]||(d=a?d+1:d,c++);return c},caretPos:function(d,a,b,h){return k.translation[e.charAt(Math.min(d-1,e.length-1))]?Math.min(d+b-a-h,b):c.caretPos(d+1,a,b,h)},behaviour:function(d){d=d||window.event;var a=d.keyCode||d.which;if(-1===g.inArray(a,k.byPassKeys)){var b=c.getCaret(),e=c.val(),u=e.length,l=
b<u,q=c.getMasked(),m=q.length,n=c.getMCharsBeforeCount(m-1)-c.getMCharsBeforeCount(u-1);q!==e&&c.val(q);!l||65===a&&d.ctrlKey||(8!==a&&46!==a&&(b=c.caretPos(b,u,m,n)),c.setCaret(b));return c.callbacks(d)}},getMasked:function(a){var f=[],g=c.val(),h=0,n=e.length,l=0,q=g.length,m=1,p="push",s=-1,r,v;b.reverse?(p="unshift",m=-1,r=0,h=n-1,l=q-1,v=function(){return-1<h&&-1<l}):(r=n-1,v=function(){return h<n&&l<q});for(;v();){var w=e.charAt(h),x=g.charAt(l),t=k.translation[w];if(t)x.match(t.pattern)?(f[p](x),
t.recursive&&(-1===s?s=h:h===r&&(h=s-m),r===s&&(h-=m)),h+=m):t.optional&&(h+=m,l-=m),l+=m;else{if(!a)f[p](w);x===w&&(l+=m);h+=m}}a=e.charAt(r);n!==q+1||k.translation[a]||f.push(a);return f.join("")},callbacks:function(d){var f=c.val(),g=f!==n;if(!0===g&&"function"===typeof b.onChange)b.onChange(f,d,a,b);if(!0===g&&"function"===typeof b.onKeyPress)b.onKeyPress(f,d,a,b);if("function"===typeof b.onComplete&&f.length===e.length)b.onComplete(f,d,a,b)}};k.remove=function(){var a;c.destroyEvents();c.val(k.getCleanVal()).removeAttr("maxlength");
a=c.getCaret();c.setCaret(a-c.getMCharsBeforeCount(a))};k.getCleanVal=function(){return c.getMasked(!0)};k.init=function(){b=b||{};k.byPassKeys=[9,16,17,18,36,37,38,39,40,91];k.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}};k.translation=g.extend({},k.translation,b.translation);k=g.extend(!0,{},k,b);p=c.getRegexMask();!1!==b.maxlength&&a.attr("maxlength",e.length);b.placeholder&&a.attr("placeholder",b.placeholder);
a.attr("autocomplete","off");c.destroyEvents();c.events();var d=c.getCaret();c.val(c.getMasked());c.setCaret(d+c.getMCharsBeforeCount(d,!0))}()},p={},y=function(){var a=g(this),e={};a.attr("data-mask-reverse")&&(e.reverse=!0);"false"===a.attr("data-mask-maxlength")&&(e.maxlength=!1);a.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);a.mask(a.attr("data-mask"),e)};g.fn.mask=function(a,e){var b=this.selector,k=function(b){if(!b.originalEvent||g(b.originalEvent.relatedNode)[0]!=g(this)[0])return g(this).data("mask",
new z(this,a,e))};this.each(k);b&&!p[b]&&(p[b]=!0,setTimeout(function(){g(document).on("DOMNodeInserted.mask",b,k)},500))};g.fn.unmask=function(){try{return this.each(function(){g(this).data("mask").remove()})}catch(a){}};g.fn.cleanVal=function(){return this.data("mask").getCleanVal()};g("*[data-mask]").each(y);g(document).on("DOMNodeInserted.mask","*[data-mask]",y)});
(function(b){if(!b.browser){b.browser={};b.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());b.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase());b.browser.opera=/opera/.test(navigator.userAgent.toLowerCase());b.browser.msie=/msie/.test(navigator.userAgent.toLowerCase())}var a={destroy:function(){var c=b(this);c.unbind(".maskMoney");if(b.browser.msie){this.onpaste=null}return this},mask:function(c){return this.each(function(){var e=b(this);if(typeof(c)=="number"){e.trigger("mask");var d=b(e.val().split(/\D/)).last()[0].length;c=c.toFixed(d);e.val(c)}return e.trigger("mask")})},unmasked:function(){return this.map(function(){var d=b(this);var f=(d.val()||"0");var c=f.indexOf("-")!=-1;var e=b(f.split(/\D/)).last()[0];f=f.replace(/\D/g,"");f=f.replace(new RegExp(e+"$"),"."+e);if(c){f="-"+f}return parseFloat(f)})},init:function(c){c=b.extend({symbol:"R$ ",symbolStay:false,thousands:".",decimal:",",precision:2,defaultZero:true,allowZero:false,allowNegative:false},c);return this.each(function(){var n=b(this);var i=false;function j(){i=true}function g(){i=false}function q(C){C=C||window.event;var w=C.which||C.charCode||C.keyCode;if(w==undefined){return false}if(w<48||w>57){if(w==45){j();n.val(m(n));return false}else{if(w==43){j();n.val(n.val().replace("-",""));return false}else{if(w==13||w==9){if(i){g();b(this).change()}return true}else{if(b.browser.mozilla&&(w==37||w==39)&&C.charCode==0){return true}else{k(C);return true}}}}}else{if(e(n)){return false}else{k(C);var A=String.fromCharCode(w);var v=n.get(0);var B=t(v);var z=B.start;var y=B.end;v.value=v.value.substring(0,z)+A+v.value.substring(y,v.value.length);h(v,z+1);j();return false}}}function e(x){var w=(x.val().length>=x.attr("maxlength")&&x.attr("maxlength")>=0);var y=t(x.get(0));var A=y.start;var v=y.end;var z=(y.start!=y.end&&x.val().substring(A,v).match(/\d/))?true:false;return w&&!z}function f(B){B=B||window.event;var w=B.which||B.charCode||B.keyCode;if(w==undefined){return false}var v=n.get(0);var A=t(v);var z=A.start;var y=A.end;if(w==8){k(B);if(z==y){v.value=v.value.substring(0,z-1)+v.value.substring(y,v.value.length);z=z-1}else{v.value=v.value.substring(0,z)+v.value.substring(y,v.value.length)}h(v,z);j();return false}else{if(w==9){if(i){b(this).change();g()}return true}else{if(w==46||w==63272){k(B);if(v.selectionStart==v.selectionEnd){v.value=v.value.substring(0,z)+v.value.substring(y+1,v.value.length)}else{v.value=v.value.substring(0,z)+v.value.substring(y,v.value.length)}h(v,z);j();return false}else{return true}}}}function d(x){var v=u();if(n.val()==v){n.val("")}else{if(n.val()==""&&c.defaultZero){n.val(l(v))}else{n.val(l(n.val()))}}if(this.createTextRange){var w=this.createTextRange();w.collapse(false);w.select()}}function o(v){if(b.browser.msie){q(v)}if(n.val()==""||n.val()==l(u())||n.val()==c.symbol){if(!c.allowZero){n.val("")}else{if(!c.symbolStay){n.val(u())}else{n.val(l(u()))}}}else{if(!c.symbolStay){n.val(n.val().replace(c.symbol,""))}else{if(c.symbolStay&&n.val()==c.symbol){n.val(l(u()))}}}}function k(v){if(v.preventDefault){v.preventDefault()}else{v.returnValue=false}}function h(v,y){var w=n.val().length;n.val(p(v.value));var z=n.val().length;y=y-(w-z);s(n,y)}function r(){var v=n.val();n.val(p(v))}function p(E){E=E.replace(c.symbol,"");var w="0123456789";var B=E.length;var D="",F="",z="";if(B!=0&&E.charAt(0)=="-"){E=E.replace("-","");if(c.allowNegative){z="-"}}if(B==0){if(!c.defaultZero){return F}F="0.00"}for(var A=0;A<B;A++){if((E.charAt(A)!="0")&&(E.charAt(A)!=c.decimal)){break}}for(;A<B;A++){if(w.indexOf(E.charAt(A))!=-1){D+=E.charAt(A)}}var y=parseFloat(D);y=isNaN(y)?0:y/Math.pow(10,c.precision);F=y.toFixed(c.precision);A=c.precision==0?0:1;var x,C=(F=F.split("."))[A].substr(0,c.precision);for(x=(F=F[0]).length;(x-=3)>=1;){F=F.substr(0,x)+c.thousands+F.substr(x)}return(c.precision>0)?l(z+F+c.decimal+C+Array((c.precision+1)-C.length).join(0)):l(z+F)}function u(){var v=parseFloat("0")/Math.pow(10,c.precision);return(v.toFixed(c.precision)).replace(new RegExp("\\.","g"),c.decimal)}function l(w){if(c.symbol!=""){var v="";if(w.length!=0&&w.charAt(0)=="-"){w=w.replace("-","");v="-"}if(w.substr(0,c.symbol.length)!=c.symbol){w=v+c.symbol+w}}return w}function m(w){var v=w.val();if(c.allowNegative){if(v!=""&&v.charAt(0)=="-"){return v.replace("-","")}else{return"-"+v}}else{return v}}function s(v,w){b(v).each(function(y,z){if(z.setSelectionRange){z.focus();z.setSelectionRange(w,w)}else{if(z.createTextRange){var x=z.createTextRange();x.collapse(true);x.moveEnd("character",w);x.moveStart("character",w);x.select()}}});return this}function t(z){var C=0,x=0,B,y,w,v,A;if(typeof z.selectionStart=="number"&&typeof z.selectionEnd=="number"){C=z.selectionStart;x=z.selectionEnd}else{y=document.selection.createRange();if(y&&y.parentElement()==z){v=z.value.length;B=z.value.replace(/\r\n/g,"\n");w=z.createTextRange();w.moveToBookmark(y.getBookmark());A=z.createTextRange();A.collapse(false);if(w.compareEndPoints("StartToEnd",A)>-1){C=x=v}else{C=-w.moveStart("character",-v);C+=B.slice(0,C).split("\n").length-1;if(w.compareEndPoints("EndToEnd",A)>-1){x=v}else{x=-w.moveEnd("character",-v);x+=B.slice(0,x).split("\n").length-1}}}}return{start:C,end:x}}n.unbind(".maskMoney");n.bind("keypress.maskMoney",q);n.bind("keydown.maskMoney",f);n.bind("blur.maskMoney",o);n.bind("focus.maskMoney",d);n.bind("mask.maskMoney",r)})}};b.fn.maskMoney=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method "+c+" does not exist on jQuery.maskMoney")}}}})(window.jQuery||window.Zepto);

(function($){$.fn.editable=function(target,options){if("disable"==target){$(this).data("disabled.editable",true);return}if("enable"==target){$(this).data("disabled.editable",false);return}if("destroy"==target){$(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");return}var settings=$.extend({},$.fn.editable.defaults,{target:target},options);var plugin=$.editable.types[settings.type].plugin||function(){};var submit=$.editable.types[settings.type].submit||function(){};var buttons=$.editable.types[settings.type].buttons||$.editable.types.defaults.buttons;var content=$.editable.types[settings.type].content||$.editable.types.defaults.content;var element=$.editable.types[settings.type].element||$.editable.types.defaults.element;var reset=$.editable.types[settings.type].reset||$.editable.types.defaults.reset;var callback=settings.callback||function(){};var onedit=settings.onedit||function(){};var onsubmit=settings.onsubmit||function(){};var onreset=settings.onreset||function(){};var onerror=settings.onerror||reset;if(settings.tooltip){$(this).attr("title",settings.tooltip)}settings.autowidth="auto"==settings.width;settings.autoheight="auto"==settings.height;return this.each(function(){var self=this;var savedwidth=$(self).width();var savedheight=$(self).height();$(this).data("event.editable",settings.event);if(!$.trim($(this).html())){$(this).html(settings.placeholder)}$(this).bind(settings.event,function(e){if(true===$(this).data("disabled.editable")){return}if(self.editing){return}if(false===onedit.apply(this,[settings,self])){return}e.preventDefault();e.stopPropagation();if(settings.tooltip){$(self).removeAttr("title")}if(0==$(self).width()){settings.width=savedwidth;settings.height=savedheight}else{if(settings.width!="none"){settings.width=settings.autowidth?$(self).width():settings.width}if(settings.height!="none"){settings.height=settings.autoheight?$(self).height():settings.height}}if($(this).html().toLowerCase().replace(/(;|")/g,"")==settings.placeholder.toLowerCase().replace(/(;|")/g,"")){$(this).html("")}self.editing=true;self.revert=$(self).html();$(self).html("");var form=$("<form />");if(settings.cssclass){if("inherit"==settings.cssclass){form.attr("class",$(self).attr("class"))}else{form.attr("class",settings.cssclass)}}if(settings.style){if("inherit"==settings.style){form.attr("style",$(self).attr("style"));form.css("display",$(self).css("display"))}else{form.attr("style",settings.style)}}var input=element.apply(form,[settings,self]);var input_content;if(settings.loadurl){var t=setTimeout(function(){input.disabled=true;content.apply(form,[settings.loadtext,settings,self])},100);var loaddata={};loaddata[settings.id]=self.id;if($.isFunction(settings.loaddata)){$.extend(loaddata,settings.loaddata.apply(self,[self.revert,settings]))}else{$.extend(loaddata,settings.loaddata)}$.ajax({type:settings.loadtype,url:settings.loadurl,data:loaddata,async:false,success:function(result){window.clearTimeout(t);input_content=result;input.disabled=false}})}else{if(settings.data){input_content=settings.data;if($.isFunction(settings.data)){input_content=settings.data.apply(self,[self.revert,settings])}}else{input_content=self.revert}}content.apply(form,[input_content,settings,self]);input.attr("name",settings.name);buttons.apply(form,[settings,self]);$(self).append(form);if($(".campoMoedaEdited input").length>0){$(".campoMoedaEdited input").maskMoney()}$("td form").css("width","100%");$("td form input").addClass("removerEstilo");$(self).find("form button[type='submit']").addClass("btn btn-sm btn-success");$(self).find("form button[type='cancel']").addClass("btn btn-sm btn-danger");plugin.apply(form,[settings,self]);$(":input:visible:enabled:first",form).focus();if(settings.select){input.select()}input.keydown(function(e){if(e.keyCode==27){e.preventDefault();reset.apply(form,[settings,self])}});var t;if("cancel"==settings.onblur){input.blur(function(e){t=setTimeout(function(){reset.apply(form,[settings,self])},500)})}else{if("submit"==settings.onblur){input.blur(function(e){t=setTimeout(function(){form.submit()},200)})}else{if($.isFunction(settings.onblur)){input.blur(function(e){settings.onblur.apply(self,[input.val(),settings])})}else{input.blur(function(e){})}}}form.submit(function(e){if(t){clearTimeout(t)}e.preventDefault();if(false!==onsubmit.apply(form,[settings,self])){if(false!==submit.apply(form,[settings,self])){if($.isFunction(settings.target)){var str=settings.target.apply(self,[input.val(),settings]);$(self).html(str);self.editing=false;callback.apply(self,[self.innerHTML,settings]);if(!$.trim($(self).html())){$(self).html(settings.placeholder)}}else{var submitdata={};submitdata[settings.name]=input.val();submitdata[settings.id]=self.id;if($.isFunction(settings.submitdata)){$.extend(submitdata,settings.submitdata.apply(self,[self.revert,settings]))}else{$.extend(submitdata,settings.submitdata)}if("PUT"==settings.method){submitdata._method="put"}$(self).html(settings.indicator);var ajaxoptions={type:"POST",data:submitdata,dataType:"html",url:settings.target,success:function(result,status){if(ajaxoptions.dataType=="html"){$(self).html(result)}self.editing=false;callback.apply(self,[result,settings]);if(!$.trim($(self).html())){$(self).html(settings.placeholder)}},error:function(xhr,status,error){onerror.apply(form,[settings,self,xhr])}};$.extend(ajaxoptions,settings.ajaxoptions);$.ajax(ajaxoptions)}}}$(self).attr("title",settings.tooltip);return false})});this.reset=function(form){if(this.editing){if(false!==onreset.apply(form,[settings,self])){$(self).html(self.revert);self.editing=false;if(!$.trim($(self).html())){$(self).html(settings.placeholder)}if(settings.tooltip){$(self).attr("title",settings.tooltip)}}}}})};$.editable={types:{defaults:{element:function(settings,original){var input=$('<input type="hidden"></input>');$(this).append(input);return(input)},content:function(string,settings,original){$(":input:first",this).val(string)},reset:function(settings,original){original.reset(this)},buttons:function(settings,original){var form=this;if(settings.submit){if(settings.submit.match(/>$/)){var submit=$(settings.submit).click(function(){if(submit.attr("type")!="submit"){form.submit()}})}else{var submit=$('<button type="submit" />');submit.html(settings.submit)}$(this).append(submit)}if(settings.cancel){if(settings.cancel.match(/>$/)){var cancel=$(settings.cancel)}else{var cancel=$('<button type="cancel" />');cancel.html(settings.cancel)}$(this).append(cancel);$(cancel).click(function(event){if($.isFunction($.editable.types[settings.type].reset)){var reset=$.editable.types[settings.type].reset}else{var reset=$.editable.types.defaults.reset}reset.apply(form,[settings,original]);return false})}}},text:{element:function(settings,original){var input=$("<input />");if(settings.width!="none"){input.width(settings.width)}if(settings.height!="none"){input.height(settings.height)}input.attr("autocomplete","off");$(this).append(input);return(input)}},textarea:{element:function(settings,original){var textarea=$("<textarea />");if(settings.rows){textarea.attr("rows",settings.rows)}else{if(settings.height!="none"){textarea.height(settings.height)}}if(settings.cols){textarea.attr("cols",settings.cols)}else{if(settings.width!="none"){textarea.width(settings.width)}}$(this).append(textarea);return(textarea)}},select:{element:function(settings,original){var select=$("<select />");$(this).append(select);return(select)},content:function(data,settings,original){if(String==data.constructor){eval("var json = "+data)}else{var json=data}for(var key in json){if(!json.hasOwnProperty(key)){continue}if("selected"==key){continue}var option=$("<option />").val(key).append(json[key]);$("select",this).append(option)}$("select",this).children().each(function(){if($(this).val()==json.selected||$(this).text()==$.trim(original.revert)){$(this).attr("selected","selected")}})}}},addInputType:function(name,input){console.log(input.attr("class"));$.editable.types[name]=input}};$.fn.editable.defaults={name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click.editable",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}}})(jQuery);

var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var stamp = document.createElement("DIV");
        stamp.setAttribute("id", id);

        obj.$Live = stamp;
    };
};


//$JssorEventManager$
var $JssorEventManager$ = function () {
    var self = this;
    // Fields

    var listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    self.$On = self.addEventListener = function (eventName, handler) {
        if (typeof (handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    self.$Off = self.removeEventListener = function (eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof (handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    self.$ClearEventListeners = function (eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    self.$TriggerEvent = function (eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                $JssorDebug$.$Error(e.name + " while executing " + eventName +
                        " handler: " + e.message, e);
            }
        }
    };
};
var $JssorPoint$;

(function () {

    $JssorPoint$ = function (x, y) {

        // Properties

        this.x = typeof (x) == "number" ? x : 0;
        this.y = typeof (y) == "number" ? y : 0;

    };

    // Methods

    var SDPointPrototype = $JssorPoint$.prototype;

    SDPointPrototype.$Plus = function (point) {
        return new $JssorPoint$(this.x + point.x, this.y + point.y);
    };

    SDPointPrototype.$Minus = function (point) {
        return new $JssorPoint$(this.x - point.x, this.y - point.y);
    };

    SDPointPrototype.$Times = function (factor) {
        return new $JssorPoint$(this.x * factor, this.y * factor);
    };

    SDPointPrototype.$Divide = function (factor) {
        return new $JssorPoint$(this.x / factor, this.y / factor);
    };

    SDPointPrototype.$Negate = function () {
        return new $JssorPoint$(-this.x, -this.y);
    };

    SDPointPrototype.$DistanceTo = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
                        Math.pow(this.y - point.y, 2));
    };

    SDPointPrototype.$Apply = function (func) {
        return new $JssorPoint$(func(this.x), func(this.y));
    };

    SDPointPrototype.$Equals = function (point) {
        return (point instanceof $JssorPoint$) &&
                (this.x === point.x) && (this.y === point.y);
    };

    SDPointPrototype.$ToString = function () {
        return "(" + this.x + "," + this.y + ")";
    };

})();

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseLinear: function (t) {
        return t;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    $LEFTRIGHT: 0x0003,
    $TOPBOTOM: 0x000C,
    $TOPLEFT: 0x0005,
    $TOPRIGHT: 0x0006,
    $BOTTOMLEFT: 0x0009,
    $BOTTOMRIGHT: 0x000A,
    $AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    $ChessHorizontal: function (direction) {
        return (~direction & 0x0003) + (direction & 0x000C);
    },
    $ChessVertical: function (direction) {
        return (~direction & 0x000C) + (direction & 0x0003);
    },
    $IsToLeft: function (direction) {
        return (direction & 0x0003) == 0x0001;
    },
    $IsToRight: function (direction) {
        return (direction & 0x0003) == 0x0002;
    },
    $IsToTop: function (direction) {
        return (direction & 0x000C) == 0x0004;
    },
    $IsToBottom: function (direction) {
        return (direction & 0x000C) == 0x0008;
    },
    $IsHorizontal: function (direction) {
        return (direction & 0x0003) > 0;
    },
    $IsVertical: function (direction) {
        return (direction & 0x000C) > 0;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

var $JssorAlignment$ = {
    $TopLeft: 0x11,
    $TopCenter: 0x12,
    $TopRight: 0x14,
    $MiddleLeft: 0x21,
    $MiddleCenter: 0x22,
    $MiddleRight: 0x24,
    $BottomLeft: 0x41,
    $BottomCenter: 0x42,
    $BottomRight: 0x44,

    $IsTop: function (aligment) {
        return aligment & 0x10 > 0;
    },
    $IsMiddle: function (alignment) {
        return alignment & 0x20 > 0;
    },
    $IsBottom: function (alignment) {
        return alignment & 0x40 > 0;
    },
    $IsLeft: function (alignment) {
        return alignment & 0x01 > 0;
    },
    $IsCenter: function (alignment) {
        return alignment & 0x02 > 0;
    },
    $IsRight: function (alignment) {
        return alignment & 0x04 > 0;
    }
};

var $JssorMatrix$;

var $JssorBrowser$ = {
    $UNKNOWN: 0,
    $IE: 1,
    $FIREFOX: 2,
    $SAFARI: 3,
    $CHROME: 4,
    $OPERA: 5
};

var $ROWSER_UNKNOWN$ = 0;
var $ROWSER_IE$ = 1;
var $ROWSER_FIREFOX$ = 2;
var $ROWSER_SAFARI$ = 3;
var $ROWSER_CHROME$ = 4;
var $ROWSER_OPERA$ = 5;

var $JssorAnimator$;

// $JssorUtils$ is a static class, so make it singleton instance
var $JssorUtils$ = window.$JssorUtils$ = new function () {

    // Fields

    var self = this;

    var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    var supportedImageFormats = {
        "bmp": false,
        "jpeg": true,
        "jpg": true,
        "png": true,
        "tif": false,
        "wdp": false
    };

    var browser = $JssorBrowser$.$UNKNOWN;
    var browserRuntimeVersion = 0;
    var browserEngineVersion = 0;
    var browserJavascriptVersion = 0;
    var webkitVersion = 0;

    var app = navigator.appName;
    var ver = navigator.appVersion;
    var ua = navigator.userAgent;

    var urlParams = {};

    function DetectBrowser() {
        if (!browser) {
            if (app == "Microsoft Internet Explorer" &&
                !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = ua.indexOf("MSIE");
                browser = $JssorBrowser$.$IE;
                browserEngineVersion = parseFloat(ua.substring(ieOffset + 5, ua.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                browserJavascriptVersion = @_jscript_version;
                @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self.
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    browserRuntimeVersion = docMode;
                //}

                browserRuntimeVersion = document.documentMode || browserEngineVersion;

            }
            else if (app == "Netscape" && !!window.addEventListener) {

                var ffOffset = ua.indexOf("Firefox");
                var saOffset = ua.indexOf("Safari");
                var chOffset = ua.indexOf("Chrome");
                var webkitOffset = ua.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    browser = $JssorBrowser$.$FIREFOX;
                    browserRuntimeVersion = parseFloat(ua.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = ua.substring(0, saOffset).lastIndexOf("/");
                    browser = (chOffset >= 0) ? $JssorBrowser$.$CHROME : $JssorBrowser$.$SAFARI;
                    browserRuntimeVersion = parseFloat(ua.substring(slash + 1, saOffset));
                }

                if (webkitOffset >= 0)
                    webkitVersion = parseFloat(ua.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
                if (match) {
                    browser = $JssorBrowser$.$OPERA;
                    browserRuntimeVersion = parseFloat(match[2]);
                }
            }
        }
    }

    function IsBrowserIE() {
        DetectBrowser();
        return browser == $ROWSER_IE$;
    }

    function IsBrowserIeQuirks() {

        return IsBrowserIE() && (browserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        DetectBrowser();
        return browser == $ROWSER_FIREFOX$;
    }

    function IsBrowserSafari() {
        DetectBrowser();
        return browser == $ROWSER_SAFARI$;
    }

    function IsBrowserChrome() {
        DetectBrowser();
        return browser == $ROWSER_CHROME$;
    }

    function IsBrowserOpera() {
        DetectBrowser();
        return browser == $ROWSER_OPERA$;
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (webkitVersion > 534) && (webkitVersion < 535);
    }

    function IsBrowserSafeHWA() {
        return IsBrowserSafari() && (webkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {

        //IE 8- and chrome 1 won't fade well
        return IsBrowserIE() && browserRuntimeVersion < 9; // || (IsBrowserChrome() && browserRuntimeVersion < 2);
    }

    var _TransformProperty;
    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (!self.$IsUndefined(elmt.style[property])) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Constructor
    {
        //Ignore urlParams
        //        // Url parameters

        //        var query = window.location.search.substring(1);    // ignore '?'
        //        var parts = query.split('&');

        //        for (var i = 0; i < parts.length; i++) {
        //            var part = parts[i];
        //            var sep = part.indexOf('=');

        //            if (sep > 0) {
        //                urlParams[part.substring(0, sep)] =
        //                        decodeURIComponent(part.substring(sep + 1));
        //            }
        //        }

        // Browser behaviors

    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return Object.prototype.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var class2type;

    function each(object, callback) {
        if (toString(object) == "[object Array]") {
            for (var i = 0; i < object.length; i++) {
                if (callback(object[i], i, object)) {
                    break;
                }
            }
        } else {
            for (var name in object) {
                if (callback(object[name], name, object)) {
                    break;
                }
            }
        }
    }

    function GetClass2Type() {
        if (!class2type) {
            class2type = {};
            each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return class2type;
    }

    function type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function isPlainObject(obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || type(obj) !== "object" || obj.nodeType || self.$IsWindow(obj)) {
            return false;
        }

        var hasOwn = Object.prototype.hasOwnProperty;

        try {
            // Not own constructor property must be Object
            if (obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            // IE8,9 Will throw exceptions on certain host objects #9897
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.

        var key;
        for (key in obj) { }

        return key === undefined || hasOwn.call(obj, key);
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (browserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (browserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            self.$CssMarginTop(elmt, offset.y);
            self.$CssMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    self.$IsBrowserIE = IsBrowserIE;

    self.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    self.$IsBrowserFireFox = IsBrowserFireFox;

    self.$IsBrowserSafari = IsBrowserSafari;

    self.$IsBrowserChrome = IsBrowserChrome;

    self.$IsBrowserOpera = IsBrowserOpera;

    self.$IsBrowserBadTransform = IsBrowserBadTransform;

    self.$IsBrowserSafeHWA = IsBrowserSafeHWA;

    self.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    self.$GetBrowserVersion = function () {
        return browserRuntimeVersion;
    };

    self.$GetBrowserEngineVersion = function () {
        return browserEngineVersion || browserRuntimeVersion;
    };

    self.$GetWebKitVersion = function () {
        return webkitVersion;
    };

    self.$Delay = Delay;

    self.$GetElement = function (elmt) {
        if (self.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    self.$GetElementPosition = function (elmt) {
        elmt = self.$GetElement(elmt);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/findpos.html
        // with special check for "fixed" elements.

        while (elmt) {
            result.x += elmt.offsetLeft;
            result.y += elmt.offsetTop;

            var isFixed = self.$GetElementStyle(elmt).position == "fixed";

            if (isFixed) {
                result = result.$Plus(self.$GetPageScroll(window));
            }

            elmt = getOffsetParent(elmt, isFixed);
        }

        return result;
    };

    self.$GetElementSize = function (elmt) {
        elmt = self.$GetElement(elmt);
        return new $JssorPoint$(elmt.clientWidth, elmt.clientHeight);
    };

    self.$GetEvent = function (event) {
        return event ? event : window.event;
    };

    self.$GetEventSrcElement = function (event) {
        event = self.$GetEvent(event);
        return event.target || event.srcElement || document;
    };

    self.$GetEventDstElement = function (event) {
        event = self.$GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    self.$GetMousePosition = function (event) {
        event = self.$GetEvent(event);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/events_properties.html

        if (event.type == "DOMMouseScroll" &&
                IsBrowserFireFox() && browserRuntimeVersion < 3) {
            // hack for FF2 which reports incorrect position for mouse scroll
            result.x = event.screenX;
            result.y = event.screenY;
        } else if (typeof (event.pageX) == "number") {
            result.x = event.pageX;
            result.y = event.pageY;
        } else if (typeof (event.clientX) == "number") {
            result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse position, no known technique.");
        }

        return result;
    };

    self.$GetMouseScroll = function (event) {
        event = self.$GetEvent(event);
        var delta = 0; // default value

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

        if (typeof (event.wheelDelta) == "number") {
            delta = event.wheelDelta;
        } else if (typeof (event.detail) == "number") {
            delta = event.detail * -1;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
        }

        // normalize value to [-1, 1]
        return delta ? delta / Math.abs(delta) : 0;
    };

    self.$GetPageScroll = function (window) {
        var result = new $JssorPoint$();
        var docElmt = window.document.documentElement || {};
        var body = window.document.body || {};

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        if (typeof (window.pageXOffset) == "number") {
            // most browsers
            result.x = window.pageXOffset;
            result.y = window.pageYOffset;
        } else if (body.scrollLeft || body.scrollTop) {
            // W3C spec, IE6+ in quirks mode
            result.x = body.scrollLeft;
            result.y = body.scrollTop;
        } else if (docElmt.scrollLeft || docElmt.scrollTop) {
            // IE6+ in standards mode
            result.x = docElmt.scrollLeft;
            result.y = docElmt.scrollTop;
        }

        // note: we specifically aren't testing for typeof here, because IE sets
        // the appropriate variables undefined instead of 0 under certain
        // conditions. self means we also shouldn't fail if none of the three
        // cases are hit; we'll just assume the page scroll is 0.

        return result;
    };

    self.$GetWindowSize = function (window) {
        var result = new $JssorPoint$();

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        //jQuery way to get window size, but support ie quirks mode
        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);

        result.x = checkElement.clientWidth;
        result.y = checkElement.clientHeight;

        return result;
    };

    //self.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($JssorUtils$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //self.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    function Css(elmt, name, value) {
        ///	<summary>
        ///		access css
        ///     $JssorUtils$.$Css(elmt, name);         //get css value
        ///     $JssorUtils$.$Css(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            elmt.style[name] = value;
        }
        else {
            var style = elmt.currentStyle || elmt.style;
            value = style[name];

            if(value == "" && window.getComputedStyle) {
                style = elmt.ownerDocument.defaultView.getComputedStyle(elmt, null);

                style && (value = style.getPropertyValue(name) || style[name]);
            }

            return value;
        }
    }

    function CssN(elmt, name, value, isDimensional) {
        ///	<summary>
        ///		access css as numeric
        ///     $JssorUtils$.$CssN(elmt, name);         //get css value
        ///     $JssorUtils$.$CssN(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            isDimensional && (value += "px");
            Css(elmt, name, value);
        }
        else {
            return parseFloat(Css(elmt, name));
        }
    }

    function CssP(elmt, name, value) {
        ///	<summary>
        ///		access css in pixel as numeric, like 'top', 'left', 'width', 'height'
        ///     $JssorUtils$.$CssP(elmt, name);         //get css value
        ///     $JssorUtils$.$CssP(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        return CssN(elmt, name, value, true);
    }

    function CssProxy(name, numericOrDimension) {
        ///	<summary>
        ///		create proxy to access css, CssProxy(name[, numericOrDimension]);
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="numericOrDimension" type="Number" optional="true">
        ///		not set: access original css, 1: access css as numeric, 2: access css in pixel as numeric
        ///	</param>
        var isDimensional = numericOrDimension & 2;
        var cssAccessor = numericOrDimension ? CssN : Css;
        return function (elmt, value) {
            return cssAccessor(elmt, name, value, isDimensional);
        };
    }

    function GetStyleOpacity(elmt) {
        if (IsBrowserIE() && browserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (parseFloat(match[1]) / 100) : 1;
        }
        else
            return parseFloat(elmt.style.opacity || "1");
    }

    function SetStyleOpacity(elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            //var filterName = "filter"; // browserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing self always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! self protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
                //elmt.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }

            //if (!IsBrowserIE() || browserEngineVersion >= 9) 
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    }

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale == undefined ? 1 : transform.$Scale;

        if (IsBrowserIe9Earlier()) {
            var matrix = self.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, self.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";
                if ($JssorUtils$.$IsBrowserChrome() && webkitVersion > 535)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    self.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(self.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    self.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    self.$SetStyleScale = function (elmt, scale) {

        if (IsBrowserIE() && browserEngineVersion < 9 || (browserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    self.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    self.$DisableHWA = function (elmt) {
        //if (force || elmt.style[GetTransformProperty(elmt)] == "perspective(2000px)")
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;
    var ie8WindowResizeCallbackHandlers;
    //var ie8LastVerticalScrollbar;
    //var toggleInfo = "";

    function Ie8WindowResizeFilter(window) {

        var trigger = true;

        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
        if (checkElement) {
            //check vertical bar
            //var hasVerticalBar = checkElement.scrollHeight > checkElement.clientHeight;
            //var verticalBarToggle = hasVerticalBar != ie8LastVerticalScrollbar;
            //ie8LastVerticalScrollbar = hasVerticalBar;

            var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
            var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
            if (widthChange || heightChange) {

                ie8OffsetWidth += widthChange;
                ie8OffsetHeight += heightChange;
            }
            else
                trigger = false;
        }

        trigger && each(ie8WindowResizeCallbackHandlers, function (handler) {
            handler();
        });
    }

    self.$OnWindowResize = function (window, handler) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            if (!ie8WindowResizeCallbackHandlers) {
                ie8WindowResizeCallbackHandlers = [handler];
                handler = self.$CreateCallback(null, Ie8WindowResizeFilter, window);
            }
            else {
                ie8WindowResizeCallbackHandlers.push(handler);
                return;
            }
        }

        self.$AddEvent(window, "resize", handler);
    };

    self.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

    };

    self.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.removeEventListener && !elmt.detachEvent) {
                $JssorDebug$.$Fail("Unable to detach event handler, no known technique.");
            }
        });
    };

    self.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();
            //event.eventType = ieEventName;
            //event.eventName = ieEventName;

            elmt.fireEvent(ieEventName, evento);
        }
    };

    self.$AddEventBrowserMouseUp = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseUp = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$AddEventBrowserMouseDown = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseDown = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$CancelEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    self.$StopEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    self.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [];
        for (var i = 2; i < arguments.length; i++) {
            initialArgs.push(arguments[i]);
        }

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([]);
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            return method.apply(object, args);
        };

        $JssorDebug$.$LiveStamp(callback, "callback_" + ($JssorUtils$.$GetNow() & 11111111));

        return callback;
    };

    var _Freeer;
    self.$FreeElement = function (elmt) {
        if (!_Freeer)
            _Freeer = self.$CreateDivElement();

        if (elmt) {
            $JssorUtils$.$AppendChild(_Freeer, elmt);
            $JssorUtils$.$ClearInnerHtml(_Freeer);
        }
    };

    self.$SetInnerText = function (elmt, text) {
        var textNode = document.createTextNode(text);
        self.$ClearInnerHtml(elmt);
        elmt.appendChild(textNode);
    };

    self.$GetInnerText = function (elmt) {
        return elmt.textContent || elmt.innerText;
    };

    self.$GetInnerHtml = function (elmt) {
        return elmt.innerHTML;
    };

    self.$SetInnerHtml = function (elmt, html) {
        elmt.innerHTML = html;
    };

    self.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    self.$EncodeHtml = function (text) {
        var div = self.$CreateDivElement();
        self.$SetInnerText(div, text);
        return self.$GetInnerHtml(div);
    };

    self.$DecodeHtml = function (html) {
        var div = self.$CreateDivElement();
        self.$SetInnerHtml(div, html);
        return self.$GetInnerText(div);
    };

    self.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    self.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    self.$GetChildren = function (elmt) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindFirstChildByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (self.$GetAttributeEx(elmt, attrName) == attrValue)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByAttribute = FindFirstChildByAttribute;

    function FindChildrenByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (self.$GetAttributeEx(elmt, attrName) == attrValue)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByAttribute = FindChildrenByAttribute;

    function FindFirstChildByTag(elmt, tagName, deep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByTag(elmt, tagName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByTag = FindFirstChildByTag;

    function FindChildrenByTag(elmt, tagName, deep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByTag(elmt, tagName, true);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByTag = FindChildrenByTag;

    self.$GetElementsByTagName = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    self.$Extend = function (target) {
        for (var i = 1; i < arguments.length; i++) {

            var options = arguments[i];

            // Only deal with non-null/undefined values
            if (options) {
                // Extend the base object
                for (var name in options) {
                    target[name] = options[name];
                }
            }
        }

        // Return the modified object
        return target;
    };

    self.$Unextend = function (target, options) {
        $JssorDebug$.$Assert(options);

        var unextended = {};

        // Extend the base object
        for (var name in target) {
            if (target[name] != options[name]) {
                unextended[name] = target[name];
            }
        }

        // Return the modified object
        return unextended;
    };

    self.$IsUndefined = function (obj) {
        return type(obj) == "undefined";
    };

    self.$IsFunction = function (obj) {
        return type(obj) == "function";
    };

    self.$IsArray = Array.isArray || function (obj) {
        return type(obj) == "array";
    };

    self.$IsString = function (obj) {
        return type(obj) == "string";
    };

    self.$IsNumeric = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };

    self.$IsWindow = function (obj) {
        return obj != null && obj == obj.window;
    };

    self.$Type = type;

    // args is for internal usage only
    self.$Each = each;

    self.$IsPlainObject = isPlainObject;

    self.$CreateDivElement = function (doc) {
        return self.$CreateElement("DIV", doc);
    };

    self.$CreateSpanElement = function (doc) {
        return self.$CreateElement("SPAN", doc);
    };

    self.$CreateElement = function (tagName, doc) {
        doc = doc || document;
        return doc.createElement(tagName);
    };

    self.$EmptyFunction = function () { };

    self.$GetAttribute = function (elmt, name) {
        return elmt.getAttribute(name);
    };

    self.$GetAttributeEx = function (elmt, name) {
        return self.$GetAttribute(elmt, name) || self.$GetAttribute(elmt, "data-" + name);
    };

    self.$SetAttribute = function (elmt, name, value) {
        elmt.setAttribute(name, value);
    };

    self.$GetClassName = function (elmt) {
        return elmt.className;
    };

    self.$SetClassName = function (elmt, className) {
        elmt.className = className || "";
    };

    self.$GetParentNode = function (elmt) {
        return elmt.parentNode;
    };

    self.$HideElement = function (elmt) {
        self.$CssDisplay(elmt, "none");
    };

    self.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$HideElement(elmts[i]);
        }
    };

    self.$ShowElement = function (elmt, show) {
        self.$CssDisplay(elmt, show == false ? "none" : "");
    };

    self.$ShowElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$ShowElement(elmts[i]);
        }
    };

    self.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    self.$CanClearClip = function () {
        //return !IsBrowserIE() || browserEngineVersion > 9 || (browserRuntimeVersion > 7 && !IsBrowserIeQuirks());
        return IsBrowserIE() && browserRuntimeVersion < 10;
    };

    self.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = elmt.style.cssText;
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $JssorUtils$.$CssCssText(elmt, newCssText);
        }
    };

    self.$GetNow = function () {
        return new Date().getTime();
    };

    self.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    self.$AppendChildren = function (elmt, children) {
        each(children, function (child) {
            self.$AppendChild(elmt, child);
        });
    };

    self.$InsertBefore = function (elmt, child, refObject) {
        elmt.insertBefore(child, refObject);
    };

    self.$InsertAdjacentHtml = function (elmt, where, text) {
        elmt.insertAdjacentHTML(where, text);
    };

    self.$RemoveChild = function (elmt, child) {
        elmt.removeChild(child);
    };

    self.$RemoveChildren = function (elmt, children) {
        each(children, function (child) {
            self.$RemoveChild(elmt, child);
        });
    };

    self.$ClearChildren = function (elmt) {
        self.$RemoveChildren(elmt, self.$GetChildren(elmt));
    };

    self.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    self.$ParseFloat = function (str) {
        return parseFloat(str);
    };

    self.$IsChild = function (elmtA, elmtB) {
        var body = document.body;
        while (elmtB && elmtA != elmtB && body != elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }
        return elmtA == elmtB;
    };

    self.$ToLowerCase = function (value) {
        if (value)
            value = value.toLowerCase();

        return value;
    };

    self.$CloneNode = function (elmt, deep) {
        return elmt.cloneNode(deep);
    };

    function LoadImageCallback(callback, image, abort) {
        image.onload = null;
        image.abort = null;

        if (callback)
            callback(image, abort);
    }

    self.$LoadImage = function (src, callback) {
        if (self.$IsBrowserOpera() && browserRuntimeVersion < 11.6 || !src) {
            LoadImageCallback(callback, null);
        }
        else {
            var image = new Image();
            image.onload = self.$CreateCallback(null, LoadImageCallback, callback, image);
            image.onabort = self.$CreateCallback(null, LoadImageCallback, callback, image, true);
            image.src = src;
        }
    };

    self.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {
            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        $JssorUtils$.$Each(imageElmts, function (imageElmt) {
            $JssorUtils$.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    self.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = $JssorUtils$.$CloneNode(template, true);

        var templateHolders = $JssorUtils$.$GetElementsByTagName(template, tagName);
        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = $JssorUtils$.$CloneNode(replacer, true);
            $JssorUtils$.$SetClassName(replaceItem, $JssorUtils$.$GetClassName(templateHolder));
            $JssorUtils$.$CssCssText(replaceItem, templateHolder.style.cssText);

            var thumbnailPlaceHolderParent = $JssorUtils$.$GetParentNode(templateHolder);
            $JssorUtils$.$InsertBefore(thumbnailPlaceHolderParent, replaceItem, templateHolder);
            $JssorUtils$.$RemoveChild(thumbnailPlaceHolderParent, templateHolder);
        }

        return template;
    };

    var _MouseDownButtons;
    var _MouseOverButtons = [];
    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName;

        var _IsMouseDown;   //class name 'dn'
        var _IsActive;      //class name 'av'

        function Highlight() {
            var className = _OriginClassName;

            if (_IsMouseDown) {
                className += 'dn';
            }
            else if (_IsActive) {
                className += "av";
            }

            $JssorUtils$.$SetClassName(elmt, className);
        }

        function OnMouseDown(event) {
            _MouseDownButtons.push(_Self);

            _IsMouseDown = true;

            Highlight();
        }

        _Self.$MouseUp = function () {
            ///	<summary>
            ///		Internal member function, do not use it.
            ///	</summary>
            ///	<private />

            _IsMouseDown = false;

            Highlight();
        };

        _Self.$Activate = function (activate) {
            _IsActive = activate;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = self.$GetElement(elmt);

            if (!_MouseDownButtons) {
                self.$AddEventBrowserMouseUp(function () {
                    var oldMouseDownButtons = _MouseDownButtons;
                    _MouseDownButtons = [];

                    each(oldMouseDownButtons, function (button) {
                        button.$MouseUp();
                    });
                });

                _MouseDownButtons = [];
            }

            _OriginClassName = self.$GetClassName(elmt);

            $JssorUtils$.$AddEvent(elmt, "mousedown", OnMouseDown);
        }
    }

    self.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    self.$Css = Css;
    self.$CssN = CssN;
    self.$CssP = CssP;

    self.$CssOverflow = CssProxy("overflow");

    self.$CssTop = CssProxy("top", 2);
    self.$CssLeft = CssProxy("left", 2);
    self.$CssWidth = CssProxy("width", 2);
    self.$CssHeight = CssProxy("height", 2);
    self.$CssMarginLeft = CssProxy("marginLeft", 2);
    self.$CssMarginTop = CssProxy("marginTop", 2);
    self.$CssPosition = CssProxy("position");
    self.$CssDisplay = CssProxy("display");
    self.$CssZIndex = CssProxy("zIndex", 1);
    self.$CssFloat = function (elmt, float) {
        return Css(elmt, IsBrowserIE() ? "styleFloat" : "cssFloat", float);
    };
    self.$CssOpacity = function (elmt, opacity, ie9EarlierForce) {
        if (opacity != undefined) {
            SetStyleOpacity(elmt, opacity, ie9EarlierForce);
        }
        else {
            return GetStyleOpacity(elmt);
        }
    };
    self.$CssCssText = function (elmt, text) {
        if (text != undefined) {
            elmt.style.cssText = text;
        }
        else {
            return elmt.style.cssText;
        }
    };

    var _StyleGetter = {
        $Opacity: self.$CssOpacity,
        $Top: self.$CssTop,
        $Left: self.$CssLeft,
        $Width: self.$CssWidth,
        $Height: self.$CssHeight,
        $Position: self.$CssPosition,
        $Display: self.$CssDisplay,
        $ZIndex: self.$CssZIndex
    };

    //var _StyleGetter = {
    //    $Opacity: self.$GetStyleOpacity,
    //    $Top: self.$GetStyleTop,
    //    $Left: self.$GetStyleLeft,
    //    $Width: self.$GetStyleWidth,
    //    $Height: self.$GetStyleHeight,
    //    $Position: self.$GetStylePosition,
    //    $Display: self.$GetStyleDisplay,
    //    $ZIndex: self.$GetStyleZIndex
    //};

    var _StyleSetterReserved;

    //var _StyleSetterReserved = {
    //    $Opacity: self.$SetStyleOpacity,
    //    $Top: self.$SetStyleTop,
    //    $Left: self.$SetStyleLeft,
    //    $Width: self.$SetStyleWidth,
    //    $Height: self.$SetStyleHeight,
    //    $Display: self.$SetStyleDisplay,
    //    $Clip: self.$SetStyleClip,
    //    $MarginLeft: self.$SetStyleMarginLeft,
    //    $MarginTop: self.$SetStyleMarginTop,
    //    $Transform: self.$SetStyleTransform,
    //    $Position: self.$SetStylePosition,
    //    $ZIndex: self.$SetStyleZIndex
    //};

    function GetStyleSetter() {
        if (!_StyleSetterReserved) {
            _StyleSetterReserved = self.$Extend({
                $MarginTop: self.$CssMarginTop,
                $MarginLeft: self.$CssMarginLeft,
                $Clip: self.$SetStyleClip,
                $Transform: self.$SetStyleTransform
            }, _StyleGetter);
        }
        return _StyleSetterReserved;
    }

    function GetStyleSetterEx() {
        GetStyleSetter();

        //For Compression Only
        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    self.$GetStyleSetter = GetStyleSetter;

    self.$GetStyleSetterEx = GetStyleSetterEx;

    self.$GetStyles = function (elmt, originStyles) {
        GetStyleSetter();

        var styles = {};

        each(originStyles, function (value, key) {
            if (_StyleGetter[key]) {
                styles[key] = _StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    self.$SetStyles = function (elmt, styles) {
        var styleSetter = GetStyleSetter();

        each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    self.$SetStylesEx = function (elmt, styles) {
        GetStyleSetterEx();

        self.$SetStyles(elmt, styles);
    };

    $JssorMatrix$ = new function () {
        var _This = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _This.$ScaleX = function (matrix, sx) {
            return _This.$ScaleXY(matrix, sx, 0);
        };

        _This.$ScaleY = function (matrix, sy) {
            return _This.$ScaleXY(matrix, 0, sy);
        };

        _This.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _This.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return new $JssorPoint$(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    self.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    self.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, height / 2));

        return new $JssorPoint$(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };
};

$JssorAnimator$ = function (delay, duration, options, elmt, fromStyles, toStyles) {
    delay = delay || 0;

    var _This = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        $JssorUtils$.$Each(_NestedAnimators, function (animator) {
            animator, animator.$Shift(offset);
        });
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _This.$Position_InnerBegin = _Position_InnerBegin;
        //    _This.$Position_InnerEnd = _Position_InnerEnd;
        //    _This.$Position_OuterBegin = _Position_OuterBegin;
        //    _This.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {
                if (toStyles) {
                    var currentStyles = toStyles;

                    if (fromStyles) {
                        var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);
                        if (options.$Optimize && $JssorUtils$.$IsBrowserChrome() && duration)
                            interPosition = Math.round(interPosition * duration / 16) / duration * 16;
                        if (options.$Reverse)
                            interPosition = 1 - interPosition;

                        currentStyles = {};

                        for (var key in toStyles) {
                            var round = _SubRounds[key] || 1;
                            var during = _SubDurings[key] || [0, 1];
                            var propertyInterPosition = (interPosition - during[0]) / during[1];
                            propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                            propertyInterPosition = propertyInterPosition * round;
                            var floorPosition = Math.floor(propertyInterPosition);
                            if (propertyInterPosition != floorPosition)
                                propertyInterPosition -= floorPosition;

                            var easing = _SubEasings[key] || _SubEasings.$Default;
                            var easingValue = easing(propertyInterPosition);
                            var currentPropertyValue;
                            var value = fromStyles[key];
                            var toValue = toStyles[key];

                            if ($JssorUtils$.$IsNumeric(toValue)) {
                                currentPropertyValue = value + (toValue - value) * easingValue;
                            }
                            else {
                                currentPropertyValue = $JssorUtils$.$Extend({ $Offset: {} }, fromStyles[key]);

                                $JssorUtils$.$Each(toValue.$Offset, function (rectX, n) {
                                    var offsetValue = rectX * easingValue;
                                    currentPropertyValue.$Offset[n] = offsetValue;
                                    currentPropertyValue[n] += offsetValue;
                                });
                            }
                            currentStyles[key] = currentPropertyValue;
                        }
                    }

                    if (fromStyles.$Zoom) {
                        currentStyles.$Transform = { $Rotate: currentStyles.$Rotate || 0, $Scale: currentStyles.$Zoom, $OriginalWidth: options.$OriginalWidth, $OriginalHeight: options.$OriginalHeight };
                    }

                    if (toStyles.$Clip && options.$Move) {
                        var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

                        var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                        var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                        currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
                        currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
                        currentStyles.$Clip.$Left -= offsetX;
                        currentStyles.$Clip.$Right -= offsetX;
                        currentStyles.$Clip.$Top -= offsetY;
                        currentStyles.$Clip.$Bottom -= offsetY;
                    }

                    if (currentStyles.$Clip && $JssorUtils$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
                        currentStyles.$Clip = null;

                    $JssorUtils$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _This.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);
            }

            _Position_Display = positionToDisplay;

            $JssorUtils$.$Each(_NestedAnimators, function (animator, i) {
                var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                nestedAnimator.$GoToPosition(positionOuter, force);
            });

            var positionOld = _Position_Current;
            var positionNew = positionOuter;

            _Position_Current = trimedPositionOuter;
            _Hooked = true;

            _This.$OnPositionChange(positionOld, positionNew);
        }
    }

    function Join(animator, combineMode) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd());
        _NestedAnimators.push(animator);
    }

    function PlayFrame() {
        if (_AutoPlay) {
            var now = $JssorUtils$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, $JssorUtils$.$IsBrowserOpera() ? 80 : 20);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                $JssorUtils$.$Delay(PlayFrame, options.$Interval);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _This.$OnStart();
            _TimeStampLastFrame = $JssorUtils$.$GetNow();
            PlayFrame();
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _This.$OnStop();

            if (callback)
                callback();
        }
    }

    _This.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _This.$PlayToPosition = function (position, callback, noStop) {
        PlayToPosition(position, callback, noStop);
    };

    _This.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _This.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _This.$Stop = function () {
        Stop();
    };

    _This.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _This.$GetPosition = function () {
        return _Position_Current;
    };

    _This.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _This.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _This.$GoToPosition = GoToPosition;

    _This.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _This.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _This.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _This.$CombineMode = function () {
        return _CombineMode;
    };

    _This.$GetDuration = function () {
        return duration;
    };

    _This.$IsPlaying = function () {
        return _AutoPlay;
    };

    _This.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _This.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _This.$Locate = Locate;

    _This.$Shift = Shift;

    _This.$Join = Join;

    _This.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _This.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _This.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _This.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _This.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _This.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _This.$OnPositionChange = $JssorUtils$.$EmptyFunction;
    _This.$OnStart = $JssorUtils$.$EmptyFunction;
    _This.$OnStop = $JssorUtils$.$EmptyFunction;
    _This.$OnInnerOffsetChange = $JssorUtils$.$EmptyFunction;
    _This.$Version = $JssorUtils$.$GetNow();

    //Constructor`  1
    {
        options = $JssorUtils$.$Extend({
            $Interval: 16
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $JssorUtils$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $JssorUtils$.$Extend({}, $JssorUtils$.$GetStyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        var _SubRounds = options.$Round || {};
        var _SubDurings = options.$During || {};
        _SubEasings = $JssorUtils$.$Extend({ $Default: $JssorUtils$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing }, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _SelfPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $JssorUtils$.$GetEventSrcElement(event);
            _PlayerInstance = srcElement.pInstance;

            $JssorUtils$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $JssorUtils$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $JssorUtils$.$GetAttributeEx(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $JssorUtils$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($JssorUtils$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $JssorUtils$.$GetChildren(playerElement);

                $JssorUtils$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _SelfPlayer.$EVT_SWITCH = 21;

    _SelfPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $JssorUtils$.$FindChildrenByAttribute(elmt, "player", null, true);

        $JssorUtils$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
}

var $JssorSlider$;
var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = {};
var $JssorSlideshowRunner$;

var jssor_slider = new function () {
    //Constants +++++++

    var COLUMN_INCREASE = 0;
    var COLUMN_DECREASE = 1;
    var ROW_INCREASE = 2;
    var ROW_DECREASE = 3;

    var DIRECTION_HORIZONTAL = 0x0003;
    var DIRECTION_VERTICAL = 0x000C;

    var TO_LEFT = 0x0001;
    var TO_RIGHT = 0x0002;
    var TO_TOP = 0x0004;
    var TO_BOTTOM = 0x0008;

    var FROM_LEFT = 0x0100;
    var FROM_TOP = 0x0200;
    var FROM_RIGHT = 0x0400;
    var FROM_BOTTOM = 0x0800;

    var ASSEMBLY_BOTTOM_LEFT = FROM_BOTTOM + TO_LEFT;
    var ASSEMBLY_BOTTOM_RIGHT = FROM_BOTTOM + TO_RIGHT;
    var ASSEMBLY_TOP_LEFT = FROM_TOP + TO_LEFT;
    var ASSEMBLY_TOP_RIGHT = FROM_TOP + TO_RIGHT;
    var ASSEMBLY_LEFT_TOP = FROM_LEFT + TO_TOP;
    var ASSEMBLY_LEFT_BOTTOM = FROM_LEFT + TO_BOTTOM;
    var ASSEMBLY_RIGHT_TOP = FROM_RIGHT + TO_TOP;
    var ASSEMBLY_RIGHT_BOTTOM = FROM_RIGHT + TO_BOTTOM;

    //Constants -------

    //Formation Definition +++++++
    function isToLeft(roadValue) {
        return (roadValue & TO_LEFT) == TO_LEFT;
    }

    function isToRight(roadValue) {
        return (roadValue & TO_RIGHT) == TO_RIGHT;
    }

    function isToTop(roadValue) {
        return (roadValue & TO_TOP) == TO_TOP;
    }

    function isToBottom(roadValue) {
        return (roadValue & TO_BOTTOM) == TO_BOTTOM;
    }

    function PushFormationOrder(arr, order, formationItem) {
        formationItem.push(order);
        arr[order] = arr[order] || [];
        arr[order].push(formationItem);
    }

    $JssorSlideshowFormations$.$FormationStraight = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var order;
        for (r = 0; r < rows; r++) {
            for (col = 0; col < cols; col++) {
                cr = r + ',' + col;
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                        order = il - (col * rows + (rl - r));
                        break;
                    case ASSEMBLY_RIGHT_TOP:
                        order = il - (r * cols + (cl - col));
                        break;
                    case ASSEMBLY_TOP_LEFT:
                        order = il - (col * rows + r);
                    case ASSEMBLY_LEFT_TOP:
                        order = il - (r * cols + col);
                        break;
                    case ASSEMBLY_BOTTOM_RIGHT:
                        order = col * rows + r;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                        order = r * cols + (cl - col);
                        break;
                    case ASSEMBLY_TOP_RIGHT:
                        order = col * rows + (rl - r);
                        break;
                    default:
                        order = r * cols + col;
                        break; //ASSEMBLY_RIGHT_BOTTOM
                }
                PushFormationOrder(a, order, [r, col]);
            }
        }

        return a;
    };

    $JssorSlideshowFormations$.$FormationSwirl = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var hit = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && !hit[cr]) {
                //a[cr] = i++;
                hit[cr] = true;
                PushFormationOrder(a, i++, [r, col]);
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
            }

            switch (courses[course % courses.length]) {
                case COLUMN_INCREASE:
                    col++;
                    break;
                case ROW_INCREASE:
                    r++;
                    break;
                case COLUMN_DECREASE:
                    col--;
                    break;
                case ROW_DECREASE:
                    r--;
                    break;
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationZigZag = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_INCREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && typeof (a[cr]) == 'undefined') {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
                switch (courses[course % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationStraightStairs = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
            case ASSEMBLY_TOP_RIGHT:
            case ASSEMBLY_TOP_LEFT:
            case ASSEMBLY_BOTTOM_RIGHT:
                var C = 0;
                var R = 0;
                break;
            case ASSEMBLY_LEFT_BOTTOM:
            case ASSEMBLY_RIGHT_TOP:
            case ASSEMBLY_LEFT_TOP:
            case ASSEMBLY_RIGHT_BOTTOM:
                var C = cl;
                var R = 0;
                break;
            default:
                formationDirection = ASSEMBLY_RIGHT_BOTTOM;
                var C = cl;
                var R = 0;
                break;
        }
        col = C;
        r = R;
        while (i < count) {
            cr = r + ',' + col;
            if (isToTop(formationDirection) || isToRight(formationDirection)) {
                PushFormationOrder(a, il - i++, [r, col]);
                //a[cr] = il - i++;
            }
            else {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
            }
            switch (formationDirection) {
                case ASSEMBLY_BOTTOM_LEFT:
                case ASSEMBLY_TOP_RIGHT:
                    col--;
                    r++;
                    break;
                case ASSEMBLY_TOP_LEFT:
                case ASSEMBLY_BOTTOM_RIGHT:
                    col++;
                    r--;
                    break;
                case ASSEMBLY_LEFT_BOTTOM:
                case ASSEMBLY_RIGHT_TOP:
                    col--;
                    r--;
                    break;
                case ASSEMBLY_RIGHT_BOTTOM:
                case ASSEMBLY_LEFT_TOP:
                default:
                    col++;
                    r++;
                    break;
            }
            if (col < 0 || r < 0 || col > cl || r > rl) {
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                    case ASSEMBLY_TOP_RIGHT:
                        C++;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                    case ASSEMBLY_RIGHT_TOP:
                    case ASSEMBLY_TOP_LEFT:
                    case ASSEMBLY_BOTTOM_RIGHT:
                        R++;
                        break;
                    case ASSEMBLY_RIGHT_BOTTOM:
                    case ASSEMBLY_LEFT_TOP:
                    default:
                        C--;
                        break;
                }
                if (C < 0 || R < 0 || C > cl || R > rl) {
                    switch (formationDirection) {
                        case ASSEMBLY_BOTTOM_LEFT:
                        case ASSEMBLY_TOP_RIGHT:
                            C = cl;
                            R++;
                            break;
                        case ASSEMBLY_TOP_LEFT:
                        case ASSEMBLY_BOTTOM_RIGHT:
                            R = rl;
                            C++;
                            break;
                        case ASSEMBLY_LEFT_BOTTOM:
                        case ASSEMBLY_RIGHT_TOP: R = rl; C--;
                            break;
                        case ASSEMBLY_RIGHT_BOTTOM:
                        case ASSEMBLY_LEFT_TOP:
                        default:
                            C = 0;
                            R++;
                            break;
                    }
                    if (R > rl)
                        R = rl;
                    else if (R < 0)
                        R = 0;
                    else if (C > cl)
                        C = cl;
                    else if (C < 0)
                        C = 0;
                }
                r = R;
                col = C;
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationSquare = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var dc;
        var dr;
        var cr;
        dc = cols < rows ? (rows - cols) / 2 : 0;
        dr = cols > rows ? (cols - rows) / 2 : 0;
        cr = Math.round(Math.max(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1 + dc, r + 1 + dr, cols - col + dc, rows - r + dr), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRectangle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var cr;
        cr = Math.round(Math.min(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1, r + 1, cols - col, rows - r), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRandom = function (transition) {
        var a = [];
        var r, col, i;
        for (r = 0; r < transition.$Rows; r++) {
            for (col = 0; col < transition.$Cols; col++)
                PushFormationOrder(a, Math.ceil(100000 * Math.random()) % 13, [r, col]);
        }

        return a;
    };

    $JssorSlideshowFormations$.$FormationCircle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.sqrt(Math.pow(col - hc, 2) + Math.pow(r - hr, 2))), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.min(Math.abs(col - hc), Math.abs(r - hr))), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRectangleCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        var cr = Math.max(hc, hr) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(cr - Math.max(hc - Math.abs(col - hc), hr - Math.abs(r - hr))) - 1, [r, col]);
        }
        return arr;
    };

    function GetFormation(transition) {

        var formationInstance = transition.$Formation(transition);

        return transition.$Reverse ? formationInstance.reverse() : formationInstance;

    } //GetFormation

    //var _PrototypeTransitions = [];
    function EnsureTransitionInstance(options, slideshowInterval) {

        var _SlideshowTransition = {
            $Interval: slideshowInterval,  //Delay to play next frame
            $Duration: 1, //Duration to finish the entire transition
            $Delay: 0,  //Delay to assembly blocks
            $Cols: 1,   //Number of columns
            $Rows: 1,   //Number of rows
            $Opacity: 0,   //Fade block or not
            $Zoom: 0,   //Zoom block or not
            $Clip: 0,   //Clip block or not
            $Move: false,   //Move block or not
            $SlideOut: false,   //Slide the previous slide out to display next slide instead
            $FlyDirection: 0,   //Specify fly transform with direction
            $Reverse: false,    //Reverse the assembly or not
            $Formation: $JssorSlideshowFormations$.$FormationRandom,    //Shape that assembly blocks as
            $Assembly: ASSEMBLY_RIGHT_BOTTOM,   //The way to assembly blocks
            $ChessMode: { $Column: 0, $Row: 0 },    //Chess move or fly direction
            $Easing: $JssorEasing$.$EaseSwing,  //Specify variation of speed during transition
            $Round: {},
            $Blocks: [],
            $During: {}
        };

        $JssorUtils$.$Extend(_SlideshowTransition, options);

        _SlideshowTransition.$Count = _SlideshowTransition.$Cols * _SlideshowTransition.$Rows;
        if ($JssorUtils$.$IsFunction(_SlideshowTransition.$Easing))
            _SlideshowTransition.$Easing = { $Default: _SlideshowTransition.$Easing };

        _SlideshowTransition.$FramesCount = Math.ceil(_SlideshowTransition.$Duration / _SlideshowTransition.$Interval);
        _SlideshowTransition.$EasingInstance = GetEasing(_SlideshowTransition);

        _SlideshowTransition.$GetBlocks = function (width, height) {
            width /= _SlideshowTransition.$Cols;
            height /= _SlideshowTransition.$Rows;
            var wh = width + 'x' + height;
            if (!_SlideshowTransition.$Blocks[wh]) {
                _SlideshowTransition.$Blocks[wh] = { $Width: width, $Height: height };
                for (var col = 0; col < _SlideshowTransition.$Cols; col++) {
                    for (var r = 0; r < _SlideshowTransition.$Rows; r++)
                        _SlideshowTransition.$Blocks[wh][r + ',' + col] = { $Top: r * height, $Right: col * width + width, $Bottom: r * height + height, $Left: col * width };
                }
            }

            return _SlideshowTransition.$Blocks[wh];
        };

        if (_SlideshowTransition.$Brother) {
            _SlideshowTransition.$Brother = EnsureTransitionInstance(_SlideshowTransition.$Brother, slideshowInterval);
            _SlideshowTransition.$SlideOut = true;
        }

        return _SlideshowTransition;
    }

    function GetEasing(transition) {
        var easing = transition.$Easing;
        if (!easing.$Default)
            easing.$Default = $JssorEasing$.$EaseSwing;

        var duration = transition.$FramesCount;

        var cache = easing.$Cache;
        if (!cache) {
            var enumerator = $JssorUtils$.$Extend({}, transition.$Easing, transition.$Round);
            cache = easing.$Cache = {};

            $JssorUtils$.$Each(enumerator, function (v, easingName) {
                var easingFunction = easing[easingName] || easing.$Default;
                var round = transition.$Round[easingName] || 1;

                if (!$JssorUtils$.$IsArray(easingFunction.$Cache))
                    easingFunction.$Cache = [];

                var easingFunctionCache = easingFunction.$Cache[duration] = easingFunction.$Cache[duration] || [];

                if (!easingFunctionCache[round]) {
                    easingFunctionCache[round] = [0];
                    for (var t = 1; t <= duration; t++) {
                        var tRound = t / duration * round;
                        var tRoundFloor = Math.floor(tRound);
                        if (tRound != tRoundFloor)
                            tRound -= tRoundFloor;
                        easingFunctionCache[round][t] = easingFunction(tRound);
                    }
                }

                cache[easingName] = easingFunctionCache;

            });
        }

        return cache;
    } //GetEasing

    //Formation Definition -------

    function JssorSlideshowPlayer(slideContainer, slideElement, slideTransition, beginTime, slideContainerWidth, slideContainerHeight) {
        var _Self = this;

        var _Block;
        var _StartStylesArr = {};
        var _AnimationStylesArrs = {};
        var _AnimationBlockItems = [];
        var _StyleStart;
        var _StyleEnd;
        var _StyleDif;
        var _ChessModeColumn = slideTransition.$ChessMode.$Column || 0;
        var _ChessModeRow = slideTransition.$ChessMode.$Row || 0;

        var _Blocks = slideTransition.$GetBlocks(slideContainerWidth, slideContainerHeight);
        var _FormationInstance = GetFormation(slideTransition);
        var _MaxOrder = _FormationInstance.length - 1;
        var _Period = slideTransition.$Duration + slideTransition.$Delay * _MaxOrder;
        var _EndTime = beginTime + _Period;

        var _SlideOut = slideTransition.$SlideOut;
        var _IsIn;

        _EndTime += $JssorUtils$.$IsBrowserChrome() ? 260 : 50;

        _Self.$EndTime = _EndTime;

        _Self.$ShowFrame = function (time) {
            time -= beginTime;

            var isIn = time < _Period;

            if (isIn || _IsIn) {
                _IsIn = isIn;

                if (!_SlideOut)
                    time = _Period - time;

                var frameIndex = Math.ceil(time / slideTransition.$Interval);

                $JssorUtils$.$Each(_AnimationStylesArrs, function (value, index) {

                    var itemFrameIndex = Math.max(frameIndex, value.$Min);
                    itemFrameIndex = Math.min(itemFrameIndex, value.length - 1);

                    if (value.$LastFrameIndex != itemFrameIndex) {
                        if (!value.$LastFrameIndex && !_SlideOut) {
                            $JssorUtils$.$ShowElement(_AnimationBlockItems[index]);
                        }
                        else if (itemFrameIndex == value.$Max && _SlideOut) {
                            $JssorUtils$.$HideElement(_AnimationBlockItems[index]);
                        }
                        value.$LastFrameIndex = itemFrameIndex;
                        $JssorUtils$.$SetStylesEx(_AnimationBlockItems[index], value[itemFrameIndex]);
                    }
                });
            }
        };

        function DisableHWA(elmt) {
            $JssorUtils$.$DisableHWA(elmt);

            var children = $JssorUtils$.$GetChildren(elmt);

            $JssorUtils$.$Each(children, function (child) {
                DisableHWA(child);
            });
        }

        //constructor
        {
            slideElement = $JssorUtils$.$CloneNode(slideElement, true);
            DisableHWA(slideElement);
            if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                var hasImage = !slideElement["no-image"];
                var slideChildElements = $JssorUtils$.$FindChildrenByTag(slideElement, null, true);
                $JssorUtils$.$Each(slideChildElements, function (slideChildElement) {
                    if (hasImage || slideChildElement["jssor-slider"])
                        $JssorUtils$.$CssOpacity(slideChildElement, $JssorUtils$.$CssOpacity(slideChildElement), true);
                });
            }

            $JssorUtils$.$Each(_FormationInstance, function (formationItems, order) {
                $JssorUtils$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];
                    {
                        var columnRow = row + ',' + col;

                        var chessHorizontal = false;
                        var chessVertical = false;
                        var chessRotate = false;

                        if (_ChessModeColumn && col % 2) {
                            if ($JssorDirection$.$IsHorizontal(_ChessModeColumn)) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if ($JssorDirection$.$IsVertical(_ChessModeColumn)) {
                                chessVertical = !chessVertical;
                            }

                            if (_ChessModeColumn & 16)
                                chessRotate = !chessRotate;
                        }

                        if (_ChessModeRow && row % 2) {
                            if ($JssorDirection$.$IsHorizontal(_ChessModeRow)) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if ($JssorDirection$.$IsVertical(_ChessModeRow)) {
                                chessVertical = !chessVertical;
                            }
                            if (_ChessModeRow & 16)
                                chessRotate = !chessRotate;
                        }

                        slideTransition.$Top = slideTransition.$Top || (slideTransition.$Clip & 4);
                        slideTransition.$Bottom = slideTransition.$Bottom || (slideTransition.$Clip & 8);
                        slideTransition.$Left = slideTransition.$Left || (slideTransition.$Clip & 1);
                        slideTransition.$Right = slideTransition.$Right || (slideTransition.$Clip & 2);

                        var topBenchmark = chessVertical ? slideTransition.$Bottom : slideTransition.$Top;
                        var bottomBenchmark = chessVertical ? slideTransition.$Top : slideTransition.$Bottom;
                        var leftBenchmark = chessHorizontal ? slideTransition.$Right : slideTransition.$Left;
                        var rightBenchmark = chessHorizontal ? slideTransition.$Left : slideTransition.$Right;

                        //$JssorDebug$.$Execute(function () {
                        //    topBenchmark = bottomBenchmark = leftBenchmark = rightBenchmark = false;
                        //});

                        slideTransition.$Clip = topBenchmark || bottomBenchmark || leftBenchmark || rightBenchmark;

                        _StyleDif = {};
                        _StyleEnd = { $Top: 0, $Left: 0, $Opacity: 1, $Width: slideContainerWidth, $Height: slideContainerHeight };
                        _StyleStart = $JssorUtils$.$Extend({}, _StyleEnd);
                        _Block = $JssorUtils$.$Extend({}, _Blocks[columnRow]);

                        if (slideTransition.$Opacity) {
                            _StyleEnd.$Opacity = 2 - slideTransition.$Opacity;
                        }

                        if (slideTransition.$ZIndex) {
                            _StyleEnd.$ZIndex = slideTransition.$ZIndex;
                            _StyleStart.$ZIndex = 0;
                        }

                        var allowClip = slideTransition.$Cols * slideTransition.$Rows > 1 || slideTransition.$Clip;

                        if (slideTransition.$Zoom || slideTransition.$Rotate) {
                            var allowRotate = true;
                            if ($JssorUtils$.$IsBrowserIE() && $JssorUtils$.$GetBrowserEngineVersion() < 9) {
                                if (slideTransition.$Cols * slideTransition.$Rows > 1)
                                    allowRotate = false;
                                else
                                    allowClip = false;
                            }

                            if (allowRotate) {
                                _StyleEnd.$Zoom = slideTransition.$Zoom ? slideTransition.$Zoom - 1 : 1;
                                _StyleStart.$Zoom = 1;

                                if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera())
                                    _StyleEnd.$Zoom = Math.min(_StyleEnd.$Zoom, 2);

                                var rotate = slideTransition.$Rotate;
                                if (rotate == true)
                                    rotate = 1;

                                _StyleEnd.$Rotate = rotate * 360 * ((chessRotate) ? -1 : 1);
                                _StyleStart.$Rotate = 0;
                            }
                        }

                        if (allowClip) {
                            if (slideTransition.$Clip) {
                                var clipScale = slideTransition.$ScaleClip || 1;
                                var blockOffset = _Block.$Offset = {};
                                if (topBenchmark && bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height / 2 * clipScale;
                                    blockOffset.$Bottom = -blockOffset.$Top;
                                }
                                else if (topBenchmark) {
                                    blockOffset.$Bottom = -_Blocks.$Height * clipScale;
                                }
                                else if (bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height * clipScale;
                                }

                                if (leftBenchmark && rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width / 2 * clipScale;
                                    blockOffset.$Right = -blockOffset.$Left;
                                }
                                else if (leftBenchmark) {
                                    blockOffset.$Right = -_Blocks.$Width * clipScale;
                                }
                                else if (rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width * clipScale;
                                }
                            }

                            _StyleDif.$Clip = _Block;
                            _StyleStart.$Clip = _Blocks[columnRow];
                        }

                        if (slideTransition.$FlyDirection) {

                            var direction = slideTransition.$FlyDirection;

                            if (!chessHorizontal)
                                direction = $JssorDirection$.$ChessHorizontal(direction);

                            if (!chessVertical)
                                direction = $JssorDirection$.$ChessVertical(direction);

                            var scaleHorizontal = slideTransition.$ScaleHorizontal || 1;
                            var scaleVertical = slideTransition.$ScaleVertical || 1;

                            if ($JssorDirection$.$IsToLeft(direction)) {
                                _StyleEnd.$Left += slideContainerWidth * scaleHorizontal;
                            }
                            else if ($JssorDirection$.$IsToRight(direction)) {
                                _StyleEnd.$Left -= slideContainerWidth * scaleHorizontal;
                            }
                            if ($JssorDirection$.$IsToTop(direction)) {
                                _StyleEnd.$Top += slideContainerHeight * scaleVertical;
                            }
                            else if ($JssorDirection$.$IsToBottom(direction)) {
                                _StyleEnd.$Top -= slideContainerHeight * scaleVertical;
                            }
                        }

                        $JssorUtils$.$Each(_StyleEnd, function (propertyEnd, property) {
                            if ($JssorUtils$.$IsNumeric(propertyEnd)) {
                                if (propertyEnd != _StyleStart[property]) {
                                    _StyleDif[property] = propertyEnd - _StyleStart[property];
                                }
                            }
                        });

                        _StartStylesArr[columnRow] = _SlideOut ? _StyleStart : _StyleEnd;

                        var animationStylesArr = [];
                        var virtualFrameCount = Math.round(order * slideTransition.$Delay / slideTransition.$Interval);
                        _AnimationStylesArrs[columnRow] = new Array(virtualFrameCount);
                        _AnimationStylesArrs[columnRow].$Min = virtualFrameCount;

                        var framesCount = slideTransition.$FramesCount;
                        for (var frameN = 0; frameN <= framesCount; frameN++) {
                            var styleFrameN = {};

                            $JssorUtils$.$Each(_StyleDif, function (propertyDiff, property) {
                                var propertyEasings = slideTransition.$EasingInstance[property] || slideTransition.$EasingInstance.$Default;
                                var propertyEasingArray = propertyEasings[slideTransition.$Round[property] || 1];

                                var propertyDuring = slideTransition.$During[property] || [0, 1];
                                var propertyFrameN = (frameN / framesCount - propertyDuring[0]) / propertyDuring[1] * framesCount;
                                propertyFrameN = Math.round(Math.min(framesCount, Math.max(propertyFrameN, 0)));

                                var propertyEasingValue = propertyEasingArray[propertyFrameN];

                                if ($JssorUtils$.$IsNumeric(propertyDiff)) {
                                    styleFrameN[property] = _StyleStart[property] + propertyDiff * propertyEasingValue;
                                }
                                else {
                                    var value = styleFrameN[property] = $JssorUtils$.$Extend({}, _StyleStart[property]);
                                    value.$Offset = [];
                                    $JssorUtils$.$Each(propertyDiff.$Offset, function (rectX, n) {
                                        var offsetValue = rectX * propertyEasingValue;
                                        value.$Offset[n] = offsetValue;
                                        value[n] += offsetValue;
                                    });
                                }
                            });

                            if (_StyleStart.$Zoom) {
                                styleFrameN.$Transform = { $Rotate: styleFrameN.$Rotate || 0, $Scale: styleFrameN.$Zoom, $OriginalWidth: slideContainerWidth, $OriginalHeight: slideContainerHeight };
                            }
                            if (styleFrameN.$Clip && slideTransition.$Move) {
                                var styleFrameNClipOffset = styleFrameN.$Clip.$Offset;
                                var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                                var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                                styleFrameN.$Left = (styleFrameN.$Left || 0) + offsetX;
                                styleFrameN.$Top = (styleFrameN.$Top || 0) + offsetY;
                                styleFrameN.$Clip.$Left -= offsetX;
                                styleFrameN.$Clip.$Right -= offsetX;
                                styleFrameN.$Clip.$Top -= offsetY;
                                styleFrameN.$Clip.$Bottom -= offsetY;
                            }

                            styleFrameN.$ZIndex = styleFrameN.$ZIndex || 1;

                            _AnimationStylesArrs[columnRow].push(styleFrameN);
                        }

                    } //for
                });
            });

            _FormationInstance.reverse();
            $JssorUtils$.$Each(_FormationInstance, function (formationItems) {
                $JssorUtils$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];

                    var columnRow = row + ',' + col;

                    var image = slideElement;
                    if (col || row)
                        image = $JssorUtils$.$CloneNode(slideElement, true);

                    $JssorUtils$.$SetStyles(image, _StartStylesArr[columnRow]);
                    $JssorUtils$.$CssOverflow(image, "hidden");

                    $JssorUtils$.$CssPosition(image, "absolute");
                    slideContainer.$AddClipElement(image);
                    _AnimationBlockItems[columnRow] = image;
                    $JssorUtils$.$ShowElement(image, _SlideOut);
                });
            });
        }
    }

    //JssorSlideshowRunner++++++++
    var _SlideshowRunnerCount = 1;
    $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function (slideContainer, slideContainerWidth, slideContainerHeight, slideshowOptions, handleTouchEventOnly) {

        var _SelfSlideshowRunner = this;

        //var _State = 0; //-1 fullfill, 0 clean, 1 initializing, 2 stay, 3 playing
        var _EndTime;

        var _SliderFrameCount;

        var _SlideshowPlayerBelow;
        var _SlideshowPlayerAbove;

        var _PrevItem;
        var _SlideItem;

        var _TransitionIndex = 0;
        var _TransitionsOrder = slideshowOptions.$TransitionsOrder;

        var _SlideshowTransition;

        var _SlideshowPerformance = 16;

        function SlideshowProcessor() {
            var _SelfSlideshowProcessor = this;
            var _CurrentTime = 0;

            $JssorAnimator$.call(_SelfSlideshowProcessor, 0, _EndTime);

            _SelfSlideshowProcessor.$OnPositionChange = function (oldPosition, newPosition) {
                if ((newPosition - _CurrentTime) > _SlideshowPerformance) {
                    _CurrentTime = newPosition;

                    _SlideshowPlayerAbove && _SlideshowPlayerAbove.$ShowFrame(newPosition);
                    _SlideshowPlayerBelow && _SlideshowPlayerBelow.$ShowFrame(newPosition);
                }
            };

            _SelfSlideshowProcessor.$Transition = _SlideshowTransition;
        }

        //member functions
        _SelfSlideshowRunner.$GetTransition = function (slideCount) {
            var n = 0;

            var transitions = slideshowOptions.$Transitions;

            var transitionCount = transitions.length;

            if (_TransitionsOrder) { /*Sequence*/
                if (transitionCount > slideCount && ($JssorUtils$.$IsBrowserChrome() || $JssorUtils$.$IsBrowserSafari() || $JssorUtils$.$IsBrowserFireFox())) {
                    transitionCount -= transitionCount % slideCount;
                }
                n = _TransitionIndex++ % transitionCount;
            }
            else { /*Random*/
                n = Math.floor(Math.random() * transitionCount);
            }

            transitions[n] && (transitions[n].$Index = n);

            return transitions[n];
        };

        _SelfSlideshowRunner.$Initialize = function (slideIndex, prevIndex, slideItem, prevItem, slideshowTransition) {
            $JssorDebug$.$Execute(function () {
                if (_SlideshowPlayerBelow) {
                    $JssorDebug$.$Fail("slideshow runner has not been cleared.");
                }
            });

            _SlideshowTransition = slideshowTransition;

            slideshowTransition = EnsureTransitionInstance(slideshowTransition, _SlideshowPerformance);

            _SlideItem = slideItem;
            _PrevItem = prevItem;

            var prevSlideElement = prevItem.$Item;
            var currentSlideElement = slideItem.$Item;
            prevSlideElement["no-image"] = !prevItem.$Image;
            currentSlideElement["no-image"] = !slideItem.$Image;

            var slideElementAbove = prevSlideElement;
            var slideElementBelow = currentSlideElement;

            var slideTransitionAbove = slideshowTransition;
            var slideTransitionBelow = slideshowTransition.$Brother || EnsureTransitionInstance({}, _SlideshowPerformance);

            if (!slideshowTransition.$SlideOut) {
                slideElementAbove = currentSlideElement;
                slideElementBelow = prevSlideElement;
            }

            var shift = slideTransitionBelow.$Shift || 0;

            _SlideshowPlayerBelow = new JssorSlideshowPlayer(slideContainer, slideElementBelow, slideTransitionBelow, Math.max(shift - slideTransitionBelow.$Interval, 0), slideContainerWidth, slideContainerHeight);
            _SlideshowPlayerAbove = new JssorSlideshowPlayer(slideContainer, slideElementAbove, slideTransitionAbove, Math.max(slideTransitionBelow.$Interval - shift, 0), slideContainerWidth, slideContainerHeight);

            _SlideshowPlayerBelow.$ShowFrame(0);
            _SlideshowPlayerAbove.$ShowFrame(0);

            _EndTime = Math.max(_SlideshowPlayerBelow.$EndTime, _SlideshowPlayerAbove.$EndTime);

            _SelfSlideshowRunner.$Index = slideIndex;
        };

        _SelfSlideshowRunner.$Clear = function () {
            slideContainer.$Clear();
            _SlideshowPlayerBelow = null;
            _SlideshowPlayerAbove = null;
        };

        _SelfSlideshowRunner.$GetProcessor = function () {
            var slideshowProcessor = null;

            if (_SlideshowPlayerAbove)
                slideshowProcessor = new SlideshowProcessor();

            return slideshowProcessor;
        };

        //Constructor
        {
            if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera() || (handleTouchEventOnly && $JssorUtils$.$GetWebKitVersion < 537)) {
                _SlideshowPerformance = 32;
            }

            $JssorEventManager$.call(_SelfSlideshowRunner);
            $JssorAnimator$.call(_SelfSlideshowRunner, -10000000, 10000000);

            $JssorDebug$.$LiveStamp(_SelfSlideshowRunner, "slideshow_runner_" + _SlideshowRunnerCount++);
        }
    };
    //JssorSlideshowRunner--------

    //JssorSlider
    function JssorSlider(elmt, options) {
        var _SelfSlider = this;

        //private classes
        function Conveyor() {
            var _SelfConveyor = this;
            $JssorAnimator$.call(_SelfConveyor, -100000000, 200000000);

            _SelfConveyor.$GetCurrentSlideInfo = function () {
                var positionDisplay = _SelfConveyor.$GetPosition_Display();
                var virtualIndex = Math.floor(positionDisplay);
                var slideIndex = GetRealIndex(virtualIndex);
                var slidePosition = positionDisplay - Math.floor(positionDisplay);

                return { $Index: slideIndex, $VirtualIndex: virtualIndex, $Position: slidePosition };
            };

            _SelfConveyor.$OnPositionChange = function (oldPosition, newPosition) {
                var index = Math.floor(newPosition);
                if (index != newPosition && newPosition > oldPosition)
                    index++;

                ResetNavigator(index, true);

                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_POSITION_CHANGE, GetRealIndex(newPosition), GetRealIndex(oldPosition), newPosition, oldPosition);
            };
        }

        //Carousel
        function Carousel() {
            var _SelfCarousel = this;

            $JssorAnimator$.call(_SelfCarousel, 0, 0, { $LoopLength: _SlideCount });

            //Carousel Constructor
            {
                $JssorUtils$.$Each(_SlideItems, function (slideItem) {
                    (_Loop & 1) && slideItem.$SetLoopLength(_SlideCount);
                    _SelfCarousel.$Chain(slideItem);
                    slideItem.$Shift(_ParkingPosition / _StepLength);
                });
            }
        }
        //Carousel

        //Slideshow
        function Slideshow() {
            var _SelfSlideshow = this;
            var _Wrapper = _SlideContainer.$Elmt;

            $JssorAnimator$.call(_SelfSlideshow, -1, 2, { $Easing: $JssorEasing$.$EaseLinear, $Setter: { $Position: SetPosition }, $LoopLength: _SlideCount }, _Wrapper, { $Position: 1 }, { $Position: -1 });

            _SelfSlideshow.$Wrapper = _Wrapper;

            //Slideshow Constructor
            {
                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_SlideContainer.$Elmt, "debug-id", "slide_container");
                });
            }
        }
        //Slideshow

        //CarouselPlayer
        function CarouselPlayer(carousel, slideshow) {
            var _SelfCarouselPlayer = this;
            var _FromPosition;
            var _ToPosition;
            var _Duration;
            var _StandBy;
            var _StandByPosition;

            $JssorAnimator$.call(_SelfCarouselPlayer, -100000000, 200000000);

            _SelfCarouselPlayer.$OnStart = function () {
                _IsSliding = true;
                _LoadingTicket = null;

                //EVT_SWIPE_START
                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SWIPE_START, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());
            };

            _SelfCarouselPlayer.$OnStop = function () {

                _IsSliding = false;
                _StandBy = false;

                var currentSlideInfo = _Conveyor.$GetCurrentSlideInfo();

                //EVT_SWIPE_END
                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SWIPE_END, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());

                if (!currentSlideInfo.$Position) {
                    OnPark(currentSlideInfo.$VirtualIndex, _CurrentSlideIndex);
                }
            };

            _SelfCarouselPlayer.$OnPositionChange = function (oldPosition, newPosition) {
                var toPosition;

                if (_StandBy)
                    toPosition = _StandByPosition;
                else {
                    toPosition = _ToPosition;

                    if (_Duration)
                        toPosition = _Options.$SlideEasing(newPosition / _Duration) * (_ToPosition - _FromPosition) + _FromPosition;
                }

                _Conveyor.$GoToPosition(toPosition);
            };

            _SelfCarouselPlayer.$PlayCarousel = function (fromPosition, toPosition, duration, callback) {
                $JssorDebug$.$Execute(function () {
                    if (_SelfCarouselPlayer.$IsPlaying())
                        $JssorDebug$.$Fail("The carousel is already playing.");
                });

                _FromPosition = fromPosition;
                _ToPosition = toPosition;
                _Duration = duration;

                _Conveyor.$GoToPosition(fromPosition);
                _SelfCarouselPlayer.$GoToPosition(0);

                _SelfCarouselPlayer.$PlayToPosition(duration, callback);
            };

            _SelfCarouselPlayer.$StandBy = function (standByPosition) {
                _StandBy = true;
                _StandByPosition = standByPosition;
                _SelfCarouselPlayer.$Play(standByPosition, null, true);
            };

            _SelfCarouselPlayer.$SetStandByPosition = function (standByPosition) {
                _StandByPosition = standByPosition;
            };

            _SelfCarouselPlayer.$MoveCarouselTo = function (position) {
                _Conveyor.$GoToPosition(position);
            };

            //CarouselPlayer Constructor
            {
                _Conveyor = new Conveyor();

                _Conveyor.$Combine(carousel);
                _Conveyor.$Combine(slideshow);
            }
        }
        //CarouselPlayer

        //SlideContainer
        function SlideContainer() {
            var _Self = this;
            var elmt = CreatePanel();

            $JssorUtils$.$CssZIndex(elmt, 0);

            _Self.$Elmt = elmt;

            _Self.$AddClipElement = function (clipElement) {
                $JssorUtils$.$AppendChild(elmt, clipElement);
                $JssorUtils$.$ShowElement(elmt);
            };

            _Self.$Clear = function () {
                $JssorUtils$.$HideElement(elmt);
                $JssorUtils$.$ClearInnerHtml(elmt);
            };
        }
        //SlideContainer

        //SlideItem
        function SlideItem(slideElmt, slideIndex) {

            var _SelfSlideItem = this;

            var _CaptionSliderIn;
            var _CaptionSliderOut;
            var _CaptionSliderCurrent;
            var _IsCaptionSliderPlayingWhenDragStart;

            var _Wrapper;
            var _BaseElement = slideElmt;

            var _LoadingScreen;

            var _ImageItem;
            var _ImageElmts = [];
            var _LinkItemOrigin;
            var _LinkItem;
            var _ImageLoading;
            var _ImageLoaded;
            var _ImageLazyLoading;
            var _ContentRefreshed;

            var _Processor;

            var _PlayerInstanceElement;
            var _PlayerInstance;

            var _SequenceNumber;    //for debug only

            $JssorAnimator$.call(_SelfSlideItem, -_DisplayPieces, _DisplayPieces + 1, { $SlideItemAnimator: true });

            function ResetCaptionSlider(fresh) {
                _CaptionSliderOut && _CaptionSliderOut.$Revert();
                _CaptionSliderIn && _CaptionSliderIn.$Revert();

                RefreshContent(slideElmt, fresh);
                _ContentRefreshed = true;

                _CaptionSliderIn = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions, 1);
                $JssorDebug$.$LiveStamp(_CaptionSliderIn, "caption_slider_" + _CaptionSliderCount + "_in");
                _CaptionSliderOut = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions);
                $JssorDebug$.$LiveStamp(_CaptionSliderOut, "caption_slider_" + _CaptionSliderCount + "_out");

                $JssorDebug$.$Execute(function () {
                    _CaptionSliderCount++;
                });

                _CaptionSliderOut.$GoToBegin();
                _CaptionSliderIn.$GoToBegin();
            }

            function EnsureCaptionSliderVersion() {
                if (_CaptionSliderIn.$Version < _CaptionSliderOptions.$Version) {
                    ResetCaptionSlider();
                }
            }

            //event handling begin
            function LoadImageCompleteEventHandler(completeCallback, loadingScreen, image) {
                if (!_ImageLoaded) {
                    _ImageLoaded = true;

                    if (_ImageItem && image) {
                        var imageWidth = image.width;
                        var imageHeight = image.height;
                        var fillWidth = imageWidth;
                        var fillHeight = imageHeight;

                        if (imageWidth && imageHeight && _Options.$FillMode) {

                            //0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
                            if (_Options.$FillMode & 3 && (!(_Options.$FillMode & 4) || imageWidth > _SlideWidth || imageHeight > _SlideHeight)) {
                                var fitHeight = false;
                                var ratio = _SlideWidth / _SlideHeight * imageHeight / imageWidth;

                                if (_Options.$FillMode & 1) {
                                    fitHeight = (ratio > 1);
                                }
                                else if (_Options.$FillMode & 2) {
                                    fitHeight = (ratio < 1);
                                }
                                fillWidth = fitHeight ? imageWidth * _SlideHeight / imageHeight : _SlideWidth;
                                fillHeight = fitHeight ? _SlideHeight : imageHeight * _SlideWidth / imageWidth;
                            }

                            $JssorUtils$.$CssWidth(_ImageItem, fillWidth);
                            $JssorUtils$.$CssHeight(_ImageItem, fillHeight);
                            $JssorUtils$.$CssTop(_ImageItem, (_SlideHeight - fillHeight) / 2);
                            $JssorUtils$.$CssLeft(_ImageItem, (_SlideWidth - fillWidth) / 2);
                        }

                        $JssorUtils$.$CssPosition(_ImageItem, "absolute");

                        _SelfSlider.$TriggerEvent(JssorSlider.$EVT_LOAD_END, slideItem);
                    }
                }

                $JssorUtils$.$HideElement(loadingScreen);
                completeCallback && completeCallback(_SelfSlideItem);
            }

            function LoadSlideshowImageCompleteEventHandler(nextIndex, nextItem, slideshowTransition, loadingTicket) {
                if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex && _AutoPlay) {
                    if (!_Frozen) {
                        var nextRealIndex = GetRealIndex(nextIndex);
                        _SlideshowRunner.$Initialize(nextRealIndex, slideIndex, nextItem, _SelfSlideItem, slideshowTransition);
                        nextItem.$HideContentForSlideshow();
                        _Slideshow.$Locate(nextRealIndex, 1);
                        _Slideshow.$GoToPosition(nextRealIndex);
                        _CarouselPlayer.$PlayCarousel(nextIndex, nextIndex, 0);
                    }
                }
            }

            function SlideReadyEventHandler(loadingTicket) {
                if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex) {

                    if (!_Processor) {
                        var slideshowProcessor = null;
                        if (_SlideshowRunner) {
                            if (_SlideshowRunner.$Index == slideIndex)
                                slideshowProcessor = _SlideshowRunner.$GetProcessor();
                            else
                                _SlideshowRunner.$Clear();
                        }

                        EnsureCaptionSliderVersion();

                        _Processor = new Processor(slideIndex, slideshowProcessor, _SelfSlideItem.$GetCaptionSliderIn(), _SelfSlideItem.$GetCaptionSliderOut());
                        _Processor.$SetPlayer(_PlayerInstance);
                    }

                    !_Processor.$IsPlaying() && _Processor.$Replay();
                }
            }

            function ParkEventHandler(currentIndex, previousIndex) {
                if (currentIndex == slideIndex) {

                    if (currentIndex != previousIndex)
                        _SlideItems[previousIndex] && _SlideItems[previousIndex].$ParkOut();

                    _PlayerInstance && _PlayerInstance.$Enable();

                    //park in
                    var loadingTicket = _LoadingTicket = $JssorUtils$.$GetNow();
                    _SelfSlideItem.$LoadImage($JssorUtils$.$CreateCallback(null, SlideReadyEventHandler, loadingTicket));
                }
                else {
                    var distance = Math.abs(slideIndex - currentIndex);
                    var loadRange = _DisplayPieces + _Options.$LazyLoading;
                    if (!_ImageLazyLoading || distance <= loadRange || _SlideCount - distance <= loadRange) {
                        _SelfSlideItem.$LoadImage();
                    }
                }
            }

            function SwipeStartEventHandler() {
                if (_CurrentSlideIndex == slideIndex && _Processor) {
                    _Processor.$Stop();
                    _PlayerInstance && _PlayerInstance.$Quit();
                    _PlayerInstance && _PlayerInstance.$Disable();
                    _Processor.$OpenSlideshowPanel();
                }
            }

            function DragStartEventHandler() {
                if (_CurrentSlideIndex == slideIndex && _Processor) {
                    _Processor.$Stop();
                }
            }

            function LinkClickEventHandler(event) {
                if (_LastDragSucceded) {
                    $JssorUtils$.$CancelEvent(event);
                }
                else {
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_CLICK, slideIndex, event);
                }
            }

            function PlayerAvailableEventHandler() {
                _PlayerInstance = _PlayerInstanceElement.pInstance;
                _Processor && _Processor.$SetPlayer(_PlayerInstance);
            }

            _SelfSlideItem.$LoadImage = function (completeCallback, loadingScreen) {
                loadingScreen = loadingScreen || _LoadingScreen;

                if (_ImageElmts.length && !_ImageLoaded) {

                    $JssorUtils$.$ShowElement(loadingScreen);

                    if (!_ImageLoading) {
                        _ImageLoading = true;
                        _SelfSlider.$TriggerEvent(JssorSlider.$EVT_LOAD_START);

                        $JssorUtils$.$Each(_ImageElmts, function (imageElmt) {

                            if (!imageElmt.src) {
                                imageElmt.src = $JssorUtils$.$GetAttributeEx(imageElmt, "src2");
                                $JssorUtils$.$CssDisplay(imageElmt, imageElmt["display-origin"]);
                            }
                        });
                    }
                    $JssorUtils$.$LoadImages(_ImageElmts, _ImageItem, $JssorUtils$.$CreateCallback(null, LoadImageCompleteEventHandler, completeCallback, loadingScreen));
                }
                else {
                    LoadImageCompleteEventHandler(completeCallback, loadingScreen);
                }
            };

            _SelfSlideItem.$GoForNextSlide = function () {
                if (_SlideshowRunner) {
                    var slideshowTransition = _SlideshowRunner.$GetTransition(_SlideCount);

                    if (slideshowTransition) {
                        var loadingTicket = _LoadingTicket = $JssorUtils$.$GetNow();

                        var nextIndex = slideIndex + 1 * _PlayReverse;
                        var nextItem = _SlideItems[GetRealIndex(nextIndex)];
                        return nextItem.$LoadImage($JssorUtils$.$CreateCallback(null, LoadSlideshowImageCompleteEventHandler, nextIndex, nextItem, slideshowTransition, loadingTicket), _LoadingScreen);
                    }
                }

                PlayTo(_CurrentSlideIndex + _Options.$AutoPlaySteps * _PlayReverse);
            };

            _SelfSlideItem.$TryActivate = function () {
                ParkEventHandler(slideIndex, slideIndex);
            };

            _SelfSlideItem.$ParkOut = function () {
                //park out
                _PlayerInstance && _PlayerInstance.$Quit();
                _PlayerInstance && _PlayerInstance.$Disable();
                _SelfSlideItem.$UnhideContentForSlideshow();
                _Processor && _Processor.$Abort();
                _Processor = null;
                ResetCaptionSlider();
            };

            //for debug only
            _SelfSlideItem.$StampSlideItemElements = function (stamp) {
                stamp = _SequenceNumber + "_" + stamp;

                $JssorDebug$.$Execute(function () {
                    if (_ImageItem)
                        $JssorUtils$.$SetAttribute(_ImageItem, "debug-id", stamp + "_slide_item_image_id");

                    $JssorUtils$.$SetAttribute(slideElmt, "debug-id", stamp + "_slide_item_item_id");
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_Wrapper, "debug-id", stamp + "_slide_item_wrapper_id");
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_LoadingScreen, "debug-id", stamp + "_loading_container_id");
                });
            };

            _SelfSlideItem.$HideContentForSlideshow = function () {
                $JssorUtils$.$HideElement(slideElmt);
            };

            _SelfSlideItem.$UnhideContentForSlideshow = function () {
                $JssorUtils$.$ShowElement(slideElmt);
            };

            _SelfSlideItem.$EnablePlayer = function () {
                _PlayerInstance && _PlayerInstance.$Enable();
            };

            function RefreshContent(elmt, fresh, level) {
                if (elmt["jssor-slider"] || $JssorUtils$.$GetAttribute(elmt, "u") == "thumb")
                    return;

                level = level || 0;

                if (!_ContentRefreshed) {
                    if (elmt.tagName == "IMG") {
                        _ImageElmts.push(elmt);

                        if (!elmt.src) {
                            _ImageLazyLoading = true;
                            elmt["display-origin"] = $JssorUtils$.$CssDisplay(elmt);
                            $JssorUtils$.$HideElement(elmt);
                        }
                    }
                    if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                        $JssorUtils$.$CssZIndex(elmt, ($JssorUtils$.$CssZIndex(elmt) || 0) + 1);
                    }
                    if (_Options.$HWA && $JssorUtils$.$GetWebKitVersion() > 0) {
                        //if ((_HandleTouchEventOnly && ($JssorUtils$.$GetWebKitVersion() < 534 || !_SlideshowEnabled)) || (!_HandleTouchEventOnly && $JssorUtils$.$GetWebKitVersion() < 535)) {
                        //    $JssorUtils$.$EnableHWA(elmt);
                        //}
                        if (!_HandleTouchEventOnly || ($JssorUtils$.$GetWebKitVersion() < 534 || !_SlideshowEnabled)) {
                            $JssorUtils$.$EnableHWA(elmt);
                        }
                    }
                }

                var childElements = $JssorUtils$.$GetChildren(elmt);

                $JssorUtils$.$Each(childElements, function (childElement, i) {

                    var uAttribute = $JssorUtils$.$GetAttributeEx(childElement, "u");
                    if (uAttribute == "player" && !_PlayerInstanceElement) {
                        _PlayerInstanceElement = childElement;
                        if (_PlayerInstanceElement.pInstance) {
                            PlayerAvailableEventHandler();
                        }
                        else {
                            $JssorUtils$.$AddEvent(_PlayerInstanceElement, "dataavailable", PlayerAvailableEventHandler);
                        }
                    }

                    if (uAttribute == "caption") {
                        if (!$JssorUtils$.$IsBrowserIE() && !fresh) {
                            var captionElement = $JssorUtils$.$CloneNode(childElement, true);
                            $JssorUtils$.$InsertBefore(elmt, captionElement, childElement);
                            $JssorUtils$.$RemoveChild(elmt, childElement);
                            childElement = captionElement;

                            fresh = true;
                        }
                    }
                    else if (!_ContentRefreshed && !level && !_ImageItem && $JssorUtils$.$GetAttributeEx(childElement, "u") == "image") {
                        _ImageItem = childElement;

                        if (_ImageItem) {
                            if (_ImageItem.tagName == "A") {
                                _LinkItemOrigin = _ImageItem;
                                $JssorUtils$.$SetStyles(_LinkItemOrigin, _StyleDef);

                                _LinkItem = $JssorUtils$.$CloneNode(_ImageItem, false);
                                //cancel click event on <A> element when a drag of slide succeeded
                                $JssorUtils$.$AddEvent(_LinkItem, "click", LinkClickEventHandler);

                                $JssorUtils$.$SetStyles(_LinkItem, _StyleDef);
                                $JssorUtils$.$CssDisplay(_LinkItem, "block");
                                $JssorUtils$.$CssOpacity(_LinkItem, 0);
                                $JssorUtils$.$Css(_LinkItem, "backgroundColor", "#000");

                                _ImageItem = $JssorUtils$.$FindFirstChildByTag(_ImageItem, "IMG");

                                $JssorDebug$.$Execute(function () {
                                    if (!_ImageItem) {
                                        $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + elmt.outerHTML);
                                    }
                                });
                            }
                            _ImageItem.border = 0;

                            $JssorUtils$.$SetStyles(_ImageItem, _StyleDef);
                        }
                    }

                    RefreshContent(childElement, fresh, level + 1);
                });
            }

            _SelfSlideItem.$OnInnerOffsetChange = function (oldOffset, newOffset) {
                var slidePosition = _DisplayPieces - newOffset;

                SetPosition(_Wrapper, slidePosition);

                //following lines are for future usage, not ready yet
                //if (!_IsDragging || !_IsCaptionSliderPlayingWhenDragStart) {
                //    var _DealWithParallax;
                //    if (IsCurrentSlideIndex(slideIndex)) {
                //        if (_CaptionSliderOptions.$PlayOutMode == 2)
                //            _DealWithParallax = true;
                //    }
                //    else {
                //        if (!_CaptionSliderOptions.$PlayInMode) {
                //            //PlayInMode: 0 none
                //            _CaptionSliderIn.$GoToEnd();
                //        }
                //        //else if (_CaptionSliderOptions.$PlayInMode == 1) {
                //        //    //PlayInMode: 1 chain
                //        //    _CaptionSliderIn.$GoToBegin();
                //        //}
                //        else if (_CaptionSliderOptions.$PlayInMode == 2) {
                //            //PlayInMode: 2 parallel
                //            _DealWithParallax = true;
                //        }
                //    }

                //    if (_DealWithParallax) {
                //        _CaptionSliderIn.$GoToPosition((_CaptionSliderIn.$GetPosition_OuterEnd() - _CaptionSliderIn.$GetPosition_OuterBegin()) * Math.abs(newOffset - 1) * .8 + _CaptionSliderIn.$GetPosition_OuterBegin());
                //    }
                //}
            };

            _SelfSlideItem.$GetCaptionSliderIn = function () {
                return _CaptionSliderIn;
            };

            _SelfSlideItem.$GetCaptionSliderOut = function () {
                return _CaptionSliderOut;
            };

            _SelfSlideItem.$Index = slideIndex;

            $JssorEventManager$.call(_SelfSlideItem);

            //SlideItem Constructor
            {

                var thumb = $JssorUtils$.$FindFirstChildByAttribute(slideElmt, "thumb");
                if (thumb) {
                    _SelfSlideItem.$Thumb = $JssorUtils$.$CloneNode(thumb, true);
                    $JssorUtils$.$RemoveAttribute(thumb, "id");
                    $JssorUtils$.$HideElement(thumb);
                }
                $JssorUtils$.$ShowElement(slideElmt);

                _LoadingScreen = $JssorUtils$.$CloneNode(_LoadingContainer, true);
                $JssorUtils$.$CssZIndex(_LoadingScreen, 1000);

                //cancel click event on <A> element when a drag of slide succeeded
                $JssorUtils$.$AddEvent(slideElmt, "click", LinkClickEventHandler);

                ResetCaptionSlider(true);

                _SelfSlideItem.$Image = _ImageItem;
                _SelfSlideItem.$Link = _LinkItem;

                _SelfSlideItem.$Item = slideElmt;

                _SelfSlideItem.$Wrapper = _Wrapper = slideElmt;
                $JssorUtils$.$AppendChild(_Wrapper, _LoadingScreen);

                _SelfSlider.$On(203, ParkEventHandler);
                _SelfSlider.$On(22, DragStartEventHandler);
                _SelfSlider.$On(24, SwipeStartEventHandler);

                $JssorDebug$.$Execute(function () {
                    _SequenceNumber = _SlideItemCreatedCount++;
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_Wrapper, "debug-id", "slide-" + slideIndex);
                });
            }
        }
        //SlideItem

        //Processor
        function Processor(slideIndex, slideshowProcessor, captionSliderIn, captionSliderOut) {

            var _SelfProcessor = this;

            var _ProgressBegin = 0;
            var _SlideshowBegin = 0;
            var _SlideshowEnd;
            var _CaptionInBegin;
            var _IdleBegin;
            var _IdleEnd;
            var _ProgressEnd;

            var _IsSlideshowRunning;
            var _IsRollingBack;

            var _PlayerInstance;
            var _IsPlayerOnService;

            var slideItem = _SlideItems[slideIndex];

            $JssorAnimator$.call(_SelfProcessor, 0, 0);

            function UpdateLink() {

                $JssorUtils$.$ClearChildren(_LinkContainer);

                if (_ShowLink && _IsSlideshowRunning && slideItem.$Link) {
                    $JssorUtils$.$AppendChild(_LinkContainer, slideItem.$Link);
                }

                $JssorUtils$.$ShowElement(_LinkContainer, _IsSlideshowRunning || !slideItem.$Image);
            }

            function ProcessCompleteEventHandler() {

                if (_IsRollingBack) {
                    _IsRollingBack = false;
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_ROLLBACK_END, slideIndex, _IdleEnd, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                    _SelfProcessor.$GoToPosition(_IdleBegin);
                }

                _SelfProcessor.$Replay();
            }

            function PlayerSwitchEventHandler(isOnService) {
                _IsPlayerOnService = isOnService;

                _SelfProcessor.$Stop();
                _SelfProcessor.$Replay();
            }

            _SelfProcessor.$Replay = function () {

                var currentPosition = _SelfProcessor.$GetPosition_Display();

                if (!_IsDragging && !_IsSliding && !_IsPlayerOnService && _CurrentSlideIndex == slideIndex) {

                    if (!currentPosition) {
                        if (_SlideshowEnd && !_IsSlideshowRunning) {
                            _IsSlideshowRunning = true;

                            _SelfProcessor.$OpenSlideshowPanel(true);

                            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SLIDESHOW_START, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                        }

                        UpdateLink();
                    }

                    var toPosition;
                    var stateEvent = JssorSlider.$EVT_STATE_CHANGE;

                    if (currentPosition != _ProgressEnd) {
                        if (currentPosition == _IdleEnd) {
                            toPosition = _ProgressEnd;
                        }
                        else if (currentPosition == _IdleBegin) {
                            toPosition = _IdleEnd;
                        }
                        else if (!currentPosition) {
                            toPosition = _IdleBegin;
                        }
                        else if (currentPosition > _IdleEnd) {
                            _IsRollingBack = true;
                            toPosition = _IdleEnd;
                            stateEvent = JssorSlider.$EVT_ROLLBACK_START;
                        }
                        else {
                            //continue from break (by drag or lock)
                            toPosition = _SelfProcessor.$GetPlayToPosition();
                        }
                    }

                    _SelfSlider.$TriggerEvent(stateEvent, slideIndex, currentPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);

                    var allowAutoPlay = _AutoPlay && (!_HoverToPause || _HoverStatus);

                    if (currentPosition == _ProgressEnd) {
                        allowAutoPlay && slideItem.$GoForNextSlide();
                    }
                    else if (allowAutoPlay || currentPosition != _IdleEnd) {
                        _SelfProcessor.$PlayToPosition(toPosition, ProcessCompleteEventHandler);
                    }
                }
            };

            _SelfProcessor.$Abort = function () {
                _SlideshowRunner && _SlideshowRunner.$Index == slideIndex && _SlideshowRunner.$Clear();

                var currentPosition = _SelfProcessor.$GetPosition_Display();
                if (currentPosition < _ProgressEnd) {
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_STATE_CHANGE, slideIndex, -currentPosition - 1, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                }
            };

            _SelfProcessor.$OpenSlideshowPanel = function (open) {
                if (slideshowProcessor) {
                    $JssorUtils$.$CssOverflow(_SlideshowPanel, open && slideshowProcessor.$Transition.$Outside ? "" : "hidden");
                }
            };

            _SelfProcessor.$OnInnerOffsetChange = function (oldPosition, newPosition) {

                if (_IsSlideshowRunning && newPosition >= _SlideshowEnd) {
                    _IsSlideshowRunning = false;
                    UpdateLink();
                    slideItem.$UnhideContentForSlideshow();
                    _SlideshowRunner.$Clear();

                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SLIDESHOW_END, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                }

                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_PROGRESS_CHANGE, slideIndex, newPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
            };

            _SelfProcessor.$SetPlayer = function (playerInstance) {
                if (playerInstance && !_PlayerInstance) {
                    _PlayerInstance = playerInstance;

                    playerInstance.$On($JssorPlayer$.$EVT_SWITCH, PlayerSwitchEventHandler);
                }
            };

            //Processor Constructor
            {
                if (slideshowProcessor) {
                    _SelfProcessor.$Chain(slideshowProcessor);
                }

                _SlideshowEnd = _SelfProcessor.$GetPosition_OuterEnd();
                _CaptionInBegin = _SelfProcessor.$GetPosition_OuterEnd();
                _SelfProcessor.$Chain(captionSliderIn);
                _IdleBegin = captionSliderIn.$GetPosition_OuterEnd();
                _IdleEnd = _IdleBegin + _Options.$AutoPlayInterval;

                captionSliderOut.$Shift(_IdleEnd);
                _SelfProcessor.$Combine(captionSliderOut);
                _ProgressEnd = _SelfProcessor.$GetPosition_OuterEnd();
            }
        }
        //Processor
        //private classes

        function SetPosition(elmt, position) {
            var orientation = _DragOrientation > 0 ? _DragOrientation : _PlayOrientation;
            var x = _StepLengthX * position * (orientation & 1);
            var y = _StepLengthY * position * ((orientation >> 1) & 1);

            if (!$JssorUtils$.$IsBrowserChrome()) {
                x = Math.round(x);
                y = Math.round(y);
            }

            if ($JssorUtils$.$IsBrowserIE() && $JssorUtils$.$GetBrowserVersion() >= 10 && $JssorUtils$.$GetBrowserVersion() < 11) {
                elmt.style.msTransform = "translate(" + x + "px, " + y + "px)";
            }
            else if ($JssorUtils$.$IsBrowserChrome() && $JssorUtils$.$GetBrowserVersion() >= 30 && $JssorUtils$.$GetBrowserVersion() < 34) {
                elmt.style.WebkitTransition = "transform 0s";
                elmt.style.WebkitTransform = "translate3d(" + x + "px, " + y + "px, 0px) perspective(2000px)";
            }
            else {
                $JssorUtils$.$CssLeft(elmt, x);
                $JssorUtils$.$CssTop(elmt, y);
            }
        }

        //Event handling begin

        function OnMouseDown(event) {
            _LastDragSucceded = 0;

            var tagName = $JssorUtils$.$GetEventSrcElement(event).tagName;
            if (!_DragOrientationRegistered && tagName != "INPUT" && tagName != "TEXTAREA" && RegisterDrag()) {
                OnDragStart(event);
            }
        }

        function OnDragStart(event) {
            _DragStart_CarouselPlaying = _IsSliding;

            _IsDragging = true;
            _DragInvalid = false;
            _LoadingTicket = null;

            $JssorUtils$.$AddEvent(document, _MoveEvent, OnDragMove);

            _LastTimeMoveByDrag = $JssorUtils$.$GetNow() - 50;
            _DragStartPlayToPosition = _CarouselPlayer.$GetPlayToPosition();
            _CarouselPlayer.$Stop();

            if (!_DragStart_CarouselPlaying)
                _DragOrientation = 0;

            if (_HandleTouchEventOnly) {
                var touchPoint = event.touches[0];
                _DragStartMouseX = touchPoint.clientX;
                _DragStartMouseY = touchPoint.clientY;
            }
            else {
                var mousePoint = $JssorUtils$.$GetMousePosition(event);

                _DragStartMouseX = mousePoint.x;
                _DragStartMouseY = mousePoint.y;

                $JssorUtils$.$CancelEvent(event);
            }

            _DragOffsetTotal = 0;
            _DragOffsetLastTime = 0;
            _DragIndexAdjust = 0;
            _DragStartPosition = _Conveyor.$GetPosition();

            //Trigger EVT_DRAGSTART
            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_DRAG_START, GetRealIndex(_DragStartPosition), _DragStartPosition, event);
        }

        function OnDragMove(event) {
            if (_IsDragging && (!$JssorUtils$.$IsBrowserIe9Earlier() || event.button)) {
                var actionPoint;

                if (_HandleTouchEventOnly) {
                    var touches = event.touches;
                    if (touches && touches.length > 0) {
                        actionPoint = new $JssorPoint$(touches[0].clientX, touches[0].clientY);
                    }
                }
                else {
                    actionPoint = $JssorUtils$.$GetMousePosition(event);
                }

                if (actionPoint) {
                    var distanceX = actionPoint.x - _DragStartMouseX;
                    var distanceY = actionPoint.y - _DragStartMouseY;


                    if (Math.floor(_DragStartPosition) != _DragStartPosition)
                        _DragOrientation = _DragOrientation || (_PlayOrientation & _DragOrientationRegistered);

                    if ((distanceX || distanceY) && !_DragOrientation) {
                        if (_DragOrientationRegistered == 3) {
                            if (Math.abs(distanceY) > Math.abs(distanceX)) {
                                _DragOrientation = 2;
                            }
                            else
                                _DragOrientation = 1;
                        }
                        else {
                            _DragOrientation = _DragOrientationRegistered;
                        }

                        if (_HandleTouchEventOnly && _DragOrientation == 1 && Math.abs(distanceY) - Math.abs(distanceX) > 3) {
                            _DragInvalid = true;
                        }
                    }

                    if (_DragOrientation) {
                        var distance = distanceY;
                        var stepLength = _StepLengthY;

                        if (_DragOrientation == 1) {
                            distance = distanceX;
                            stepLength = _StepLengthX;
                        }

                        if (!(_Loop & 1)) {
                            if (distance > 0) {
                                var normalDistance = stepLength * _CurrentSlideIndex;
                                var sqrtDistance = distance - normalDistance;
                                if (sqrtDistance > 0) {
                                    distance = normalDistance + Math.sqrt(sqrtDistance) * 5;
                                }
                            }

                            if (distance < 0) {
                                var normalDistance = stepLength * (_SlideCount - _DisplayPieces - _CurrentSlideIndex);
                                var sqrtDistance = -distance - normalDistance;

                                if (sqrtDistance > 0) {
                                    distance = -normalDistance - Math.sqrt(sqrtDistance) * 5;
                                }
                            }
                        }

                        if (_DragOffsetTotal - _DragOffsetLastTime < -2) {
                            _DragIndexAdjust = 1;
                        }
                        else if (_DragOffsetTotal - _DragOffsetLastTime > 2) {
                            _DragIndexAdjust = 0;
                        }

                        _DragOffsetLastTime = _DragOffsetTotal;
                        _DragOffsetTotal = distance;
                        _PositionToGoByDrag = _DragStartPosition - _DragOffsetTotal / stepLength / (_ScaleRatio || 1);

                        if (_DragOffsetTotal && _DragOrientation && !_DragInvalid) {
                            $JssorUtils$.$CancelEvent(event);
                            if (!_IsSliding) {
                                _CarouselPlayer.$StandBy(_PositionToGoByDrag);
                            }
                            else
                                _CarouselPlayer.$SetStandByPosition(_PositionToGoByDrag);
                        }
                        else if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                            $JssorUtils$.$CancelEvent(event);
                        }
                    }
                }
            }
            else {
                OnDragEnd(event);
            }
        }

        function OnDragEnd(event) {
            UnregisterDrag();

            if (_IsDragging) {

                _IsDragging = false;

                _LastTimeMoveByDrag = $JssorUtils$.$GetNow();

                $JssorUtils$.$RemoveEvent(document, _MoveEvent, OnDragMove);

                _LastDragSucceded = _DragOffsetTotal;

                _LastDragSucceded && $JssorUtils$.$CancelEvent(event);

                _CarouselPlayer.$Stop();

                var currentPosition = _Conveyor.$GetPosition();

                //Trigger EVT_DRAG_END
                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_DRAG_END, GetRealIndex(currentPosition), currentPosition, GetRealIndex(_DragStartPosition), _DragStartPosition, event);

                var toPosition = Math.floor(_DragStartPosition);

                if (Math.abs(_DragOffsetTotal) >= _Options.$MinDragOffsetToSlide) {
                    toPosition = Math.floor(currentPosition);
                    toPosition += _DragIndexAdjust;
                }

                if (!(_Loop & 1)) {
                    toPosition = Math.min(_SlideCount - _DisplayPieces, Math.max(toPosition, 0));
                }

                var t = Math.abs(toPosition - currentPosition);
                t = 1 - Math.pow(1 - t, 5);

                if (!_LastDragSucceded && _DragStart_CarouselPlaying) {
                    _CarouselPlayer.$Continue(_DragStartPlayToPosition);
                }
                else if (currentPosition == toPosition) {
                    _CurrentSlideItem.$EnablePlayer();
                    _CurrentSlideItem.$TryActivate();
                }
                else {
                    _CarouselPlayer.$PlayCarousel(currentPosition, toPosition, t * _SlideDuration);
                }
            }
        }
        //Event handling end

        function SetCurrentSlideIndex(index) {
            _PrevSlideItem = _SlideItems[_CurrentSlideIndex];
            _PreviousSlideIndex = _CurrentSlideIndex;
            _CurrentSlideIndex = GetRealIndex(index);
            _CurrentSlideItem = _SlideItems[_CurrentSlideIndex];
            ResetNavigator(index);
            return _CurrentSlideIndex;
        }

        function OnPark(slideIndex, prevIndex) {
            _DragOrientation = 0;

            SetCurrentSlideIndex(slideIndex);

            //Trigger EVT_PARK
            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_PARK, GetRealIndex(slideIndex), prevIndex);
        }

        function ResetNavigator(index, temp) {
            _TempSlideIndex = index;
            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$SetCurrentIndex(GetRealIndex(index), index, temp);
            });
        }

        function RegisterDrag() {
            var dragRegistry = JssorSlider.$DragRegistry || 0;
            var dragOrientation = _DragEnabled;
            if (_HandleTouchEventOnly)
                (dragOrientation & 1) && (dragOrientation &= 1);
            JssorSlider.$DragRegistry |= dragOrientation;

            return (_DragOrientationRegistered = dragOrientation & ~dragRegistry);
        }

        function UnregisterDrag() {
            if (_DragOrientationRegistered) {
                JssorSlider.$DragRegistry &= ~_DragEnabled;
                _DragOrientationRegistered = 0;
            }
        }

        function CreatePanel() {
            var div = $JssorUtils$.$CreateDivElement();

            $JssorUtils$.$SetStyles(div, _StyleDef);
            $JssorUtils$.$CssPosition(div, "absolute");

            return div;
        }

        function GetRealIndex(index) {
            return (index % _SlideCount + _SlideCount) % _SlideCount;
        }

        function IsCurrentSlideIndex(index) {
            return GetRealIndex(index) == _CurrentSlideIndex;
        }

        function IsPreviousSlideIndex(index) {
            return GetRealIndex(index) == _PreviousSlideIndex;
        }

        //Navigation Request Handler
        function NavigationClickHandler(index, relative) {
            if (relative) {
                if (!_Loop) {
                    //Stop at threshold
                    index = Math.min(Math.max(index + _TempSlideIndex, 0), _SlideCount - _DisplayPieces);
                    relative = false;
                }
                else if (_Loop & 2) {
                    //Rewind
                    index = GetRealIndex(index + _TempSlideIndex);
                    relative = false;
                }
            }
            PlayTo(index, _Options.$SlideDuration, relative);
        }

        function ShowNavigators() {
            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$Show(navigator.$Options.$ChanceToShow > _HoverStatus);
            });
        }

        function MainContainerMouseOutEventHandler(event) {
            event = $JssorUtils$.$GetEvent(event);
            // we have to watch out for a tricky case: a mouseout occurs on a
            // child element, but the mouse is still inside the parent element.
            // the mouseout event will bubble up to us. this happens in all
            // browsers, so we need to correct for this. technique from:
            // http://www.quirksmode.org/js/events_mouse.html
            var from = event.target ? event.target : event.srcElement;
            var to = event.relatedTarget ? event.relatedTarget : event.toElement;

            if (!$JssorUtils$.$IsChild(elmt, from) || $JssorUtils$.$IsChild(elmt, to)) {
                // the mouseout needs to start from this or a child node, and it
                // needs to end on this or an outer node.
                return;
            }

            _HoverStatus = 1;

            ShowNavigators();

            _SlideItems[_CurrentSlideIndex].$TryActivate();
        }

        function MainContainerMouseOverEventHandler() {
            _HoverStatus = 0;

            ShowNavigators();
        }

        function AdjustSlidesContainerSize() {
            _StyleDef = { $Width: _SlideWidth, $Height: _SlideHeight, $Top: 0, $Left: 0 };

            $JssorUtils$.$Each(_SlideElmts, function (slideElmt, i) {

                $JssorUtils$.$SetStyles(slideElmt, _StyleDef);
                $JssorUtils$.$CssPosition(slideElmt, "absolute");
                $JssorUtils$.$CssOverflow(slideElmt, "hidden");

                $JssorUtils$.$HideElement(slideElmt);
            });

            $JssorUtils$.$SetStyles(_LoadingContainer, _StyleDef);
        }

        function PlayToOffset(offset, slideDuration) {
            PlayTo(offset, slideDuration, true);
        }

        function PlayTo(slideIndex, slideDuration, relative) {
            ///	<summary>
            ///		PlayTo( slideIndex [, slideDuration] ); //Play slider to position 'slideIndex' within a period calculated base on 'slideDuration'.
            ///	</summary>
            ///	<param name="slideIndex" type="Number">
            ///		slide slideIndex or position will be playing to
            ///	</param>
            ///	<param name="slideDuration" type="Number" optional="true">
            ///		base slide duration in milliseconds to calculate the whole duration to complete this play request.
            ///	    default value is '$SlideDuration' value which is specified when initialize the slider.
            ///	</param>
            /// http://msdn.microsoft.com/en-us/library/vstudio/bb385682.aspx
            /// http://msdn.microsoft.com/en-us/library/vstudio/hh542720.aspx
            if (_CarouselEnabled && (!_IsDragging || _Options.$NaviQuitDrag)) {
                _IsSliding = true;
                _IsDragging = false;
                _CarouselPlayer.$Stop();

                {
                    //Slide Duration
                    if ($JssorUtils$.$IsUndefined(slideDuration))
                        slideDuration = _SlideDuration;

                    var positionDisplay = _Carousel.$GetPosition_Display();
                    var positionTo = slideIndex;
                    if (relative) {
                        positionTo = positionDisplay + slideIndex;
                        if (slideIndex > 0)
                            positionTo = Math.ceil(positionTo);
                        else
                            positionTo = Math.floor(positionTo);
                    }


                    if (!(_Loop & 1)) {
                        positionTo = GetRealIndex(positionTo);
                        positionTo = Math.max(0, Math.min(positionTo, _SlideCount - _DisplayPieces));
                    }

                    var positionOffset = (positionTo - positionDisplay) % _SlideCount;
                    positionTo = positionDisplay + positionOffset;

                    var duration = positionDisplay == positionTo ? 0 : slideDuration * Math.abs(positionOffset);
                    duration = Math.min(duration, slideDuration * _DisplayPieces * 1.5);

                    _CarouselPlayer.$PlayCarousel(positionDisplay, positionTo, duration || 1);
                }
            }
        }

        //private functions

        //member functions

        _SelfSlider.$PlayTo = PlayTo;

        _SelfSlider.$GoTo = function (slideIndex) {
            ///	<summary>
            ///		instance.$GoTo( slideIndex );   //Go to the specifed slide immediately with no play.
            ///	</summary>
            PlayTo(slideIndex, 1);
        };

        _SelfSlider.$Next = function () {
            ///	<summary>
            ///		instance.$Next();   //Play the slider to next slide.
            ///	</summary>
            PlayToOffset(1);
        };

        _SelfSlider.$Prev = function () {
            ///	<summary>
            ///		instance.$Prev();   //Play the slider to previous slide.
            ///	</summary>
            PlayToOffset(-1);
        };

        _SelfSlider.$Pause = function () {
            ///	<summary>
            ///		instance.$Pause();   //Pause the slider, prevent it from auto playing.
            ///	</summary>
            _AutoPlay = false;
        };

        _SelfSlider.$Play = function () {
            ///	<summary>
            ///		instance.$Play();   //Start auto play if the slider is currently paused.
            ///	</summary>
            if (!_AutoPlay) {
                _AutoPlay = true;
                _SlideItems[_CurrentSlideIndex] && _SlideItems[_CurrentSlideIndex].$TryActivate();
            }
        };

        _SelfSlider.$SetSlideshowTransitions = function (transitions) {
            ///	<summary>
            ///		instance.$SetSlideshowTransitions( transitions );   //Reset slideshow transitions for the slider.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!transitions || !transitions.length) {
                    $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.");
                }
            });

            _Options.$SlideshowOptions.$Transitions = transitions;
        };

        _SelfSlider.$SetCaptionTransitions = function (transitions) {
            ///	<summary>
            ///		instance.$SetCaptionTransitions( transitions );   //Reset caption transitions for the slider.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!transitions || !transitions.length) {
                    $JssorDebug$.$Error("Can not set caption transitions, no transitions specified");
                }
            });

            _CaptionSliderOptions.$CaptionTransitions = transitions;
            _CaptionSliderOptions.$Version = $JssorUtils$.$GetNow();
        };

        _SelfSlider.$SlidesCount = function () {
            ///	<summary>
            ///		instance.$SlidesCount();   //Retrieve slides count of the slider.
            ///	</summary>
            return _SlideElmts.length;
        };

        _SelfSlider.$CurrentIndex = function () {
            ///	<summary>
            ///		instance.$CurrentIndex();   //Retrieve current slide index of the slider.
            ///	</summary>
            return _CurrentSlideIndex;
        };

        _SelfSlider.$IsAutoPlaying = function () {
            ///	<summary>
            ///		instance.$IsAutoPlaying();   //Retrieve auto play status of the slider.
            ///	</summary>
            return _AutoPlay;
        };

        _SelfSlider.$IsDragging = function () {
            ///	<summary>
            ///		instance.$IsDragging();   //Retrieve drag status of the slider.
            ///	</summary>
            return _IsDragging;
        };

        _SelfSlider.$IsSliding = function () {
            ///	<summary>
            ///		instance.$IsSliding();   //Retrieve right<-->left sliding status of the slider.
            ///	</summary>
            return _IsSliding;
        };

        _SelfSlider.$IsMouseOver = function () {
            ///	<summary>
            ///		instance.$IsMouseOver();   //Retrieve mouse over status of the slider.
            ///	</summary>
            return !_HoverStatus;
        };

        _SelfSlider.$LastDragSucceded = function () {
            ///	<summary>
            ///		instance.$IsLastDragSucceded();   //Retrieve last drag succeded status, returns 0 if failed, returns drag offset if succeded
            ///	</summary>
            return _LastDragSucceded;
        };

        _SelfSlider.$GetOriginalWidth = function () {
            ///	<summary>
            ///		instance.$GetOriginalWidth();   //Retrieve original width of the slider.
            ///	</summary>
            return $JssorUtils$.$CssWidth(_ScaleWrapper || elmt);
        };

        _SelfSlider.$GetOriginalHeight = function () {
            ///	<summary>
            ///		instance.$GetOriginalWidth();   //Retrieve original height of the slider.
            ///	</summary>
            return $JssorUtils$.$CssHeight(_ScaleWrapper || elmt);
        };

        _SelfSlider.$GetScaleWidth = function () {
            ///	<summary>
            ///		instance.$GetScaleWidth();   //Retrieve scaled width the slider currently displays.
            ///	</summary>
            return $JssorUtils$.$CssWidth(elmt);
        };

        _SelfSlider.$GetScaleHeight = function () {
            ///	<summary>
            ///		instance.$GetScaleHeight();   //Retrieve scaled height the slider currently displays.
            ///	</summary>
            return $JssorUtils$.$CssHeight(elmt);
        };

        _SelfSlider.$SetScaleWidth = function (width) {
            ///	<summary>
            ///		instance.$SetScaleWidth( width );   //Scale the slider to new width and keep aspect ratio.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!width || width < 0) {
                    $JssorDebug$.$Fail("'$SetScaleWidth' error, 'width' should be positive value.");
                }
            });

            if (!_ScaleWrapper) {
                $JssorDebug$.$Execute(function () {
                    var originalWidthStr = $JssorUtils$.$Css(elmt, "width");
                    var originalHeightStr = $JssorUtils$.$Css(elmt, "height");
                    var originalWidth = $JssorUtils$.$CssP(elmt, "width");
                    var originalHeight = $JssorUtils$.$CssP(elmt, "height");

                    if (!originalWidthStr) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                    }

                    if (!originalHeightStr) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                    }

                    if (originalWidthStr.indexOf('%') != -1) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                    }

                    if (originalHeightStr.indexOf('%') != -1) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                    }

                    if (!originalWidth) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'");
                    }

                    if (!originalHeight) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'");
                    }
                });

                //var innerWrapper = $JssorUtils$.$CloneNode(elmt, false);
                //$JssorUtils$.$RemoveAttribute(innerWrapper, "id");
                var innerWrapper = $JssorUtils$.$CreateDivElement(document);
                $JssorUtils$.$CssCssText(innerWrapper, $JssorUtils$.$CssCssText(elmt));
                $JssorUtils$.$SetClassName(innerWrapper, $JssorUtils$.$GetClassName(elmt));

                $JssorUtils$.$CssPosition(innerWrapper, "relative");
                $JssorUtils$.$CssTop(innerWrapper, 0);
                $JssorUtils$.$CssLeft(innerWrapper, 0);
                $JssorUtils$.$CssOverflow(innerWrapper, "visible");

                //_ScaleWrapper = $JssorUtils$.$CloneNode(elmt, false);
                //$JssorUtils$.$RemoveAttribute(_ScaleWrapper, "id");
                //$JssorUtils$.$CssCssText(_ScaleWrapper, "");
                _ScaleWrapper = $JssorUtils$.$CreateDivElement(document);

                $JssorUtils$.$CssPosition(_ScaleWrapper, "absolute");
                $JssorUtils$.$CssTop(_ScaleWrapper, 0);
                $JssorUtils$.$CssLeft(_ScaleWrapper, 0);
                $JssorUtils$.$CssWidth(_ScaleWrapper, $JssorUtils$.$CssWidth(elmt));
                $JssorUtils$.$CssHeight(_ScaleWrapper, $JssorUtils$.$CssHeight(elmt));
                $JssorUtils$.$SetStyleTransformOrigin(_ScaleWrapper, "0 0");

                $JssorUtils$.$AppendChild(_ScaleWrapper, innerWrapper);

                var children = $JssorUtils$.$GetChildren(elmt);
                $JssorUtils$.$AppendChild(elmt, _ScaleWrapper);

                $JssorUtils$.$Css(elmt, "backgroundImage", "");

                var noMoveElmts = {
                    "navigator": _BulletNavigatorOptions && _BulletNavigatorOptions.$Scale == false,
                    "arrowleft": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
                    "arrowright": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
                    "thumbnavigator": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false,
                    "thumbwrapper": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false
                };

                $JssorUtils$.$Each(children, function (child) {
                    $JssorUtils$.$AppendChild(noMoveElmts[$JssorUtils$.$GetAttributeEx(child, "u")] ? elmt : innerWrapper, child);
                });

                $JssorUtils$.$ShowElement(innerWrapper);
                $JssorUtils$.$ShowElement(_ScaleWrapper);
            }

            $JssorDebug$.$Execute(function () {
                if (!_InitialScrollWidth) {
                    _InitialScrollWidth = _SelfSlider.$Elmt.scrollWidth;
                }
            });

            _ScaleRatio = width / $JssorUtils$.$CssWidth(_ScaleWrapper);
            $JssorUtils$.$SetStyleScale(_ScaleWrapper, _ScaleRatio);

            $JssorUtils$.$CssWidth(elmt, width);
            $JssorUtils$.$CssHeight(elmt, _ScaleRatio * $JssorUtils$.$CssHeight(_ScaleWrapper));

            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$Relocate();
            });
        };

        _SelfSlider.$GetVirtualIndex = function (index) {
            var parkingIndex = Math.ceil(GetRealIndex(_ParkingPosition / _StepLength));
            var displayIndex = GetRealIndex(index - _CurrentSlideIndex + parkingIndex);

            if (displayIndex > _DisplayPieces) {
                if (index - _CurrentSlideIndex > _SlideCount / 2)
                    index -= _SlideCount;
                else if (index - _CurrentSlideIndex <= -_SlideCount / 2)
                    index += _SlideCount;
            }
            else {
                index = _CurrentSlideIndex + displayIndex - parkingIndex;
            }

            return index;
        };

        //member functions

        //Inherit $JssorEventManager$
        $JssorEventManager$.call(this);

        //initialize member variables
        _SelfSlider.$Elmt = elmt = $JssorUtils$.$GetElement(elmt);
        //initialize member variables

        var _InitialScrollWidth;    //for debug only
        var _CaptionSliderCount = 1;    //for debug only

        $JssorDebug$.$Execute(function () {
            var outerContainerElmt = $JssorUtils$.$GetElement(elmt);
            if (!outerContainerElmt)
                $JssorDebug$.$Fail("Outer container '" + elmt + "' not found.");
        });

        var _Options = $JssorUtils$.$Extend({
            $FillMode: 0,                   //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
            $LazyLoading: 1,                //[Optional] For image with  lazy loading format (<IMG src2="url" .../>), by default it will be loaded only when the slide comes.
            //But an integer value (maybe 1, 2 or 3) indicates that how far of nearby slides should be loaded immediately as well, default value is 1.
            $StartIndex: 0,                 //[Optional] Index of slide to display when initialize, default value is 0
            $AutoPlay: false,               //[Optional] Whether to auto play, default value is false
            $Loop: 1,                       //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
            $HWA: true,                     //[Optional] Enable hardware acceleration or not, default value is true
            $NaviQuitDrag: true,
            $AutoPlaySteps: 1,              //[Optional] Steps to go of every play (this options applys only when slideshow disabled), default value is 1
            $AutoPlayInterval: 3000,        //[Optional] Interval to play next slide since the previous stopped if a slideshow is auto playing, default value is 3000
            $PauseOnHover: 1,               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
            
            $SlideDuration: 500,            //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 400
            $SlideEasing: $JssorEasing$.$EaseOutQuad,   //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
            $MinDragOffsetToSlide: 20,      //[Optional] Minimum drag offset that trigger slide, default value is 20
            $SlideSpacing: 0, 				//[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 1,              //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), default value is 1
            $ParkingPosition: 0,            //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1,               //[Optional] The way (0 parellel, 1 recursive, default value is recursive) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc.
            $PlayOrientation: 1,            //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 1             //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 both, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $ArrowKeyNavigation: undefined,
                $SlideWidth: undefined,
                $SlideHeight: undefined,
                $SlideshowOptions: undefined,
                $CaptionSliderOptions: undefined,
                $BulletNavigatorOptions: undefined,
                $ArrowNavigatorOptions: undefined,
                $ThumbnailNavigatorOptions: undefined
            },
            _Options);
        });

        var _PlayOrientation = _Options.$PlayOrientation & 3;
        var _PlayReverse = (_Options.$PlayOrientation & 4) / -4 || 1;

        var _SlideshowOptions = _Options.$SlideshowOptions;
        var _CaptionSliderOptions = $JssorUtils$.$Extend({ $Class: $JssorCaptionSliderBase$, $PlayInMode: 1, $PlayOutMode: 1 }, _Options.$CaptionSliderOptions);
        var _BulletNavigatorOptions = _Options.$BulletNavigatorOptions;
        var _ArrowNavigatorOptions = _Options.$ArrowNavigatorOptions;
        var _ThumbnailNavigatorOptions = _Options.$ThumbnailNavigatorOptions;

        $JssorDebug$.$Execute(function () {
            if (_SlideshowOptions && !_SlideshowOptions.$Class) {
                $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_Options.$CaptionSliderOptions && !_Options.$CaptionSliderOptions.$Class) {
                $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_BulletNavigatorOptions && !_BulletNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_ArrowNavigatorOptions && !_ArrowNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
            }
        });

        var _UISearchMode = _Options.$UISearchMode;
        var _ScaleWrapper;
        var _SlidesContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "slides", null, _UISearchMode);
        var _LoadingContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "loading", null, _UISearchMode) || $JssorUtils$.$CreateDivElement(document);
        var _NavigatorContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "navigator", null, _UISearchMode);

        var _ArrowLeft = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowleft", null, _UISearchMode);
        var _ArrowRight = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowright", null, _UISearchMode);

        var _ThumbnailNavigatorContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "thumbnavigator", null, _UISearchMode);

        var _SlidesContainerWidth = $JssorUtils$.$CssWidth(_SlidesContainer);
        var _SlidesContainerHeight = $JssorUtils$.$CssHeight(_SlidesContainer);

        $JssorDebug$.$Execute(function () {
            if (isNaN(_SlidesContainerWidth))
                $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified by inline style in pixels (like style='width: 600px;').");

            if ($JssorUtils$.$IsUndefined(_SlidesContainerWidth))
                $JssorDebug$.$Fail("Width of slides container not specified, it should be specified by inline style in pixels (like style='width: 600px;').");

            if (isNaN(_SlidesContainerHeight))
                $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified by inline style in pixels (like style='height: 300px;').");

            if ($JssorUtils$.$IsUndefined(_SlidesContainerHeight))
                $JssorDebug$.$Fail("Height of slides container not specified, it should be specified by inline style in pixels (like style='height: 300px;').");

            var slidesContainerOverflow = $JssorUtils$.$CssOverflow(_SlidesContainer);
            var slidesContainerOverflowX = $JssorUtils$.$Css(_SlidesContainer, "overflowX");
            var slidesContainerOverflowY = $JssorUtils$.$Css(_SlidesContainer, "overflowY");
            if (slidesContainerOverflow != "hidden" && (slidesContainerOverflowX != "hidden" || slidesContainerOverflowY != "hidden"))
                $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').");

            //var slidesContainerTop = $JssorUtils$.$CssTop(_SlidesContainer);
            //var slidesContainerLeft = $JssorUtils$.$CssLeft(_SlidesContainer);

            //if (isNaN(slidesContainerTop))
            //    $JssorDebug$.$Fail("Top of slides container wrong specification, it should be specified by inline style in pixels (like style='top: 0px;').");

            //if ($JssorUtils$.$IsUndefined(slidesContainerTop))
            //    $JssorDebug$.$Fail("Top of slides container not specified, it should be specified by inline style in pixels (like style='top: 0px;').");

            //if (isNaN(slidesContainerLeft))
            //    $JssorDebug$.$Fail("Left of slides container wrong specification, it should be specified by inline style in pixels (like style='left: 0px;').");

            //if ($JssorUtils$.$IsUndefined(slidesContainerLeft))
            //    $JssorDebug$.$Fail("Left of slides container not specified, it should be specified by inline style in pixels (like style='left: 0px;').");
        });

        $JssorDebug$.$Execute(function () {
            if (!$JssorUtils$.$IsNumeric(_Options.$DisplayPieces))
                $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");

            if (_Options.$DisplayPieces < 1)
                $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");

            if (_Options.$DisplayPieces > 1 && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
                $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");

            if (!$JssorUtils$.$IsNumeric(_Options.$ParkingPosition))
                $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");

            if (_Options.$ParkingPosition && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
                $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.");
        });

        var _StyleDef;

        var _SlideElmts = [];

        {
            var slideElmts = $JssorUtils$.$GetChildren(_SlidesContainer);
            $JssorUtils$.$Each(slideElmts, function (slideElmt) {
                if (slideElmt.tagName == "DIV" && !$JssorUtils$.$GetAttributeEx(slideElmt, "u")) {
                    _SlideElmts.push(slideElmt);
                }
            });
        }

        $JssorDebug$.$Execute(function () {
            if (_SlideElmts.length < 1) {
                $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.");
            }
        });

        var _SlideItemCreatedCount = 0; //for debug only
        var _SlideItemReleasedCount = 0;    //for debug only

        var _PreviousSlideIndex;
        var _CurrentSlideIndex = -1;
        var _TempSlideIndex;
        var _PrevSlideItem;
        var _CurrentSlideItem;
        var _SlideCount = _SlideElmts.length;

        var _SlideWidth = _Options.$SlideWidth || _SlidesContainerWidth;
        var _SlideHeight = _Options.$SlideHeight || _SlidesContainerHeight;

        var _SlideSpacing = _Options.$SlideSpacing;
        var _StepLengthX = _SlideWidth + _SlideSpacing;
        var _StepLengthY = _SlideHeight + _SlideSpacing;
        var _StepLength = (_PlayOrientation & 1) ? _StepLengthX : _StepLengthY;
        var _DisplayPieces = Math.min(_Options.$DisplayPieces, _SlideCount);

        var _SlideshowPanel;
        var _CurrentBoardIndex = 0;
        var _DragOrientation;
        var _DragOrientationRegistered;
        var _DragInvalid;

        var _HandleTouchEventOnly;

        var _Navigators = [];
        var _BulletNavigator;
        var _ArrowNavigator;
        var _ThumbnailNavigator;

        var _ShowLink;

        var _Frozen;
        var _AutoPlay;
        var _AutoPlaySteps = _Options.$AutoPlaySteps;
        var _HoverToPause = _Options.$PauseOnHover;
        var _AutoPlayInterval = _Options.$AutoPlayInterval;
        var _SlideDuration = _Options.$SlideDuration;

        var _SlideshowRunnerClass;
        var _TransitionsOrder;

        var _SlideshowEnabled;
        var _ParkingPosition;
        var _CarouselEnabled = _DisplayPieces < _SlideCount;
        var _Loop = _CarouselEnabled ? _Options.$Loop : 0;

        var _DragEnabled;
        var _LastDragSucceded;

        var _HoverStatus = 1;   //0 Hovering, 1 Not hovering

        //Variable Definition
        var _IsSliding;
        var _IsDragging;
        var _LoadingTicket;

        //The X position of mouse/touch when a drag start
        var _DragStartMouseX = 0;
        //The Y position of mouse/touch when a drag start
        var _DragStartMouseY = 0;
        var _DragOffsetTotal;
        var _DragOffsetLastTime;
        var _DragIndexAdjust;

        var _Carousel;
        var _Conveyor;
        var _Slideshow;
        var _CarouselPlayer;
        var _SlideContainer = new SlideContainer();
        var _ScaleRatio;

        //$JssorSlider$ Constructor
        {
            _AutoPlay = _Options.$AutoPlay;
            _SelfSlider.$Options = options;

            AdjustSlidesContainerSize();

            elmt["jssor-slider"] = true;

            //_SlideshowPanel = CreatePanel();
            //$JssorUtils$.$CssZIndex(elmt, $JssorUtils$.$CssZIndex(elmt));
            //$JssorUtils$.$CssLeft(_SlideshowPanel, $JssorUtils$.$CssLeft(_SlidesContainer));
            //$JssorUtils$.$CssZIndex(_SlidesContainer, $JssorUtils$.$CssZIndex(_SlidesContainer));
            //$JssorUtils$.$CssTop(_SlideshowPanel, $JssorUtils$.$CssTop(_SlidesContainer));
            $JssorUtils$.$CssZIndex(_SlidesContainer, $JssorUtils$.$CssZIndex(_SlidesContainer) || 0);
            $JssorUtils$.$CssPosition(_SlidesContainer, "absolute");
            _SlideshowPanel = $JssorUtils$.$CloneNode(_SlidesContainer);
            $JssorUtils$.$InsertBefore($JssorUtils$.$GetParentNode(_SlidesContainer), _SlideshowPanel, _SlidesContainer);

            if (_SlideshowOptions) {
                _ShowLink = _SlideshowOptions.$ShowLink;
                _SlideshowRunnerClass = _SlideshowOptions.$Class;

                $JssorDebug$.$Execute(function () {
                    if (!_SlideshowOptions.$Transitions || !_SlideshowOptions.$Transitions.length) {
                        $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.");
                    }
                });

                _SlideshowEnabled = _DisplayPieces == 1 && _SlideCount > 1 && _SlideshowRunnerClass && (!$JssorUtils$.$IsBrowserIE() || $JssorUtils$.$GetBrowserVersion() >= 8);
            }

            _ParkingPosition = (_SlideshowEnabled || _DisplayPieces >= _SlideCount || !(_Loop & 1)) ? 0 : _Options.$ParkingPosition;

            _DragEnabled = ((_DisplayPieces > 1 || _ParkingPosition) ? _PlayOrientation : -1) & _Options.$DragOrientation;

            //SlideBoard
            var _SlideboardElmt = _SlidesContainer;
            var _SlideItems = [];

            var _SlideshowRunner;
            var _LinkContainer;

            var _DownEvent = "mousedown";
            var _MoveEvent = "mousemove";
            var _UpEvent = "mouseup";
            var _CancelEvent;

            var _LastTimeMoveByDrag;
            var _DragStartPosition;
            var _DragStart_CarouselPlaying;
            var _DragStartPlayToPosition;
            var _PositionToGoByDrag;

            //SlideBoard Constructor
            {

                if (window.navigator.msPointerEnabled) {

                    _DownEvent = "MSPointerDown";
                    _MoveEvent = "MSPointerMove";
                    _UpEvent = "MSPointerUp";
                    _CancelEvent = "MSPointerCancel";

                    if (_DragEnabled) {
                        var touchAction = "none";
                        if (_DragEnabled == 1) {
                            touchAction = "pan-y";
                        }
                        else if (_DragEnabled == 2) {
                            touchAction = "pan-x";
                        }

                        $JssorUtils$.$SetAttribute(_SlideboardElmt.style, "-ms-touch-action", touchAction);
                    }
                }
                else if ("ontouchstart" in window || "createTouch" in document) {
                    _HandleTouchEventOnly = true;

                    _DownEvent = "touchstart";
                    _MoveEvent = "touchmove";
                    _UpEvent = "touchend";
                    _CancelEvent = "touchcancel";
                }

                _Slideshow = new Slideshow();

                if (_SlideshowEnabled)
                    _SlideshowRunner = new _SlideshowRunnerClass(_SlideContainer, _SlideWidth, _SlideHeight, _SlideshowOptions, _HandleTouchEventOnly);

                $JssorUtils$.$AppendChild(_SlideshowPanel, _Slideshow.$Wrapper);
                $JssorUtils$.$CssOverflow(_SlidesContainer, "hidden");

                //link container
                {
                    _LinkContainer = CreatePanel();
                    $JssorUtils$.$Css(_LinkContainer, "backgroundColor", "#000");
                    $JssorUtils$.$CssOpacity(_LinkContainer, 0);
                    $JssorUtils$.$InsertBefore(_SlideboardElmt, _LinkContainer, _SlideboardElmt.firstChild);
                }

                for (var i = 0; i < _SlideElmts.length; i++) {
                    var slideElmt = _SlideElmts[i];
                    var slideItem = new SlideItem(slideElmt, i);
                    _SlideItems.push(slideItem);
                }

                $JssorUtils$.$HideElement(_LoadingContainer);

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_LoadingContainer, "debug-id", "loading-container");
                });

                _Carousel = new Carousel()
                _CarouselPlayer = new CarouselPlayer(_Carousel, _Slideshow);

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_SlideboardElmt, "debug-id", "slide-board");
                });

                if (_DragEnabled) {
                    $JssorUtils$.$AddEvent(_SlidesContainer, _DownEvent, OnMouseDown);
                    $JssorUtils$.$AddEvent(document, _UpEvent, OnDragEnd);
                    _CancelEvent && $JssorUtils$.$AddEvent(document, _CancelEvent, OnDragEnd);
                }
            }
            //SlideBoard

            _HoverToPause &= _HandleTouchEventOnly ? 2 : 1;

            //Bullet Navigator
            if (_NavigatorContainer && _BulletNavigatorOptions) {
                _BulletNavigator = new _BulletNavigatorOptions.$Class(_NavigatorContainer, _BulletNavigatorOptions);
                _Navigators.push(_BulletNavigator);
            }

            //Arrow Navigator
            if (_ArrowNavigatorOptions && _ArrowLeft && _ArrowRight) {
                _ArrowNavigator = new _ArrowNavigatorOptions.$Class(_ArrowLeft, _ArrowRight, _ArrowNavigatorOptions);
                _Navigators.push(_ArrowNavigator);
            }

            //Thumbnail Navigator
            if (_ThumbnailNavigatorContainer && _ThumbnailNavigatorOptions) {
                _ThumbnailNavigatorOptions.$StartIndex = _Options.$StartIndex;
                _ThumbnailNavigator = new _ThumbnailNavigatorOptions.$Class(_ThumbnailNavigatorContainer, _ThumbnailNavigatorOptions);
                _Navigators.push(_ThumbnailNavigator);
            }

            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$Reset(_SlideCount, _SlideItems, _LoadingContainer);
                navigator.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, NavigationClickHandler);
            });

            _SelfSlider.$SetScaleWidth(_SelfSlider.$GetOriginalWidth());

            $JssorUtils$.$AddEvent(elmt, "mouseout", MainContainerMouseOutEventHandler);
            $JssorUtils$.$AddEvent(elmt, "mouseover", MainContainerMouseOverEventHandler);

            ShowNavigators();

            //Keyboard Navigation
            if (_Options.$ArrowKeyNavigation) {
                $JssorUtils$.$AddEvent(document, "keydown", function (e) {
                    if (e.keyCode == $JssorKeyCode$.$LEFT) {
                        //Arrow Left
                        PlayToOffset(-1);
                    }
                    else if (e.keyCode == $JssorKeyCode$.$RIGHT) {
                        //Arrow Right
                        PlayToOffset(1);
                    }
                });
            }

            var startPosition = _Options.$StartIndex;
            if (!(_Loop & 1)) {
                startPosition = Math.max(0, Math.min(startPosition, _SlideCount - _DisplayPieces));
            }
            _CarouselPlayer.$PlayCarousel(startPosition, startPosition, 0);
        }
    }
    //Jssor Slider

    //JssorSlider.$ASSEMBLY_BOTTOM_LEFT = ASSEMBLY_BOTTOM_LEFT;
    //JssorSlider.$ASSEMBLY_BOTTOM_RIGHT = ASSEMBLY_BOTTOM_RIGHT;
    //JssorSlider.$ASSEMBLY_TOP_LEFT = ASSEMBLY_TOP_LEFT;
    //JssorSlider.$ASSEMBLY_TOP_RIGHT = ASSEMBLY_TOP_RIGHT;
    //JssorSlider.$ASSEMBLY_LEFT_TOP = ASSEMBLY_LEFT_TOP;
    //JssorSlider.$ASSEMBLY_LEFT_BOTTOM = ASSEMBLY_LEFT_BOTTOM;
    //JssorSlider.$ASSEMBLY_RIGHT_TOP = ASSEMBLY_RIGHT_TOP;
    //JssorSlider.$ASSEMBLY_RIGHT_BOTTOM = ASSEMBLY_RIGHT_BOTTOM;

    JssorSlider.$EVT_CLICK = 21;
    JssorSlider.$EVT_DRAG_START = 22;
    JssorSlider.$EVT_DRAG_END = 23;
    JssorSlider.$EVT_SWIPE_START = 24;
    JssorSlider.$EVT_SWIPE_END = 25;

    JssorSlider.$EVT_LOAD_START = 26;
    JssorSlider.$EVT_LOAD_END = 27;

    JssorSlider.$EVT_POSITION_CHANGE = 202;
    JssorSlider.$EVT_PARK = 203;

    JssorSlider.$EVT_SLIDESHOW_START = 206;
    JssorSlider.$EVT_SLIDESHOW_END = 207;

    JssorSlider.$EVT_PROGRESS_CHANGE = 208;
    JssorSlider.$EVT_STATE_CHANGE = 209;
    JssorSlider.$EVT_ROLLBACK_START = 210;
    JssorSlider.$EVT_ROLLBACK_END = 211;

    window.$JssorSlider$ = $JssorSlider$ = JssorSlider;

    //(function ($) {
    //    jQuery.fn.jssorSlider = function (options) {
    //        return this.each(function () {
    //            return $(this).data('jssorSlider') || $(this).data('jssorSlider', new JssorSlider(this, options));
    //        });
    //    };
    //})(jQuery);

    //window.jQuery && (jQuery.fn.jssorSlider = function (options) {
    //    return this.each(function () {
    //        return jQuery(this).data('jssorSlider') || jQuery(this).data('jssorSlider', new JssorSlider(this, options));
    //    });
    //});
};

//$JssorBulletNavigator$
var $JssorNavigatorEvents$ = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
};

var $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function (elmt, options) {
    var self = this;
    $JssorEventManager$.call(self);

    elmt = $JssorUtils$.$GetElement(elmt);

    var _Count;
    var _Length;
    var _Width;
    var _Height;
    var _CurrentIndex;
    var _CurrentInnerIndex = 0;
    var _Options;
    var _Steps;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _Orientation;
    var _ItemPrototype;
    var _PrototypeWidth;
    var _PrototypeHeight;

    var _ButtonElements = [];
    var _Buttons = [];

    function Highlight(index) {
        if (index != -1)
            _Buttons[index].$Activate(index == _CurrentInnerIndex);
    }

    function OnNavigationRequest(index) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, index * _Steps);
    }

    self.$Elmt = elmt;
    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index) {
        if (index != _CurrentIndex) {
            var lastInnerIndex = _CurrentInnerIndex;
            var innerIndex = Math.floor(index / _Steps);
            _CurrentInnerIndex = innerIndex;
            _CurrentIndex = index;

            Highlight(lastInnerIndex);
            Highlight(innerIndex);

            //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
        }
    };

    self.$Show = function (show) {
        $JssorUtils$.$ShowElement(elmt, show);
    };

    var _Located;
    self.$Relocate = function (force) {
        if (!_Located || _Options.$Scale == false) {
            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$CssLeft(elmt, ($JssorUtils$.$CssWidth($JssorUtils$.$GetParentNode(elmt)) - _Width) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$CssTop(elmt, ($JssorUtils$.$CssHeight($JssorUtils$.$GetParentNode(elmt)) - _Height) / 2);
            }
            
            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(length / _Steps);
            _CurrentInnerIndex = 0;

            var itemOffsetX = _PrototypeWidth + _SpacingX;
            var itemOffsetY = _PrototypeHeight + _SpacingY;

            var maxIndex = Math.ceil(_Count / _Lanes) - 1;

            _Width = _PrototypeWidth + itemOffsetX * (!_Orientation ? maxIndex : _Lanes - 1);
            _Height = _PrototypeHeight + itemOffsetY * (_Orientation ? maxIndex : _Lanes - 1);

            $JssorUtils$.$CssWidth(elmt, _Width);
            $JssorUtils$.$CssHeight(elmt, _Height);

            //self.$Relocate(true);

            for (var buttonIndex = 0; buttonIndex < _Count; buttonIndex++) {

                var numberDiv = $JssorUtils$.$CreateSpanElement();
                $JssorUtils$.$SetInnerText(numberDiv, buttonIndex + 1);

                var div = $JssorUtils$.$BuildElement(_ItemPrototype, "NumberTemplate", numberDiv, true);
                $JssorUtils$.$CssPosition(div, "absolute");

                var columnIndex = buttonIndex % (maxIndex + 1);
                $JssorUtils$.$CssLeft(div, !_Orientation ? itemOffsetX * columnIndex : buttonIndex % _Lanes * itemOffsetX);
                $JssorUtils$.$CssTop(div, _Orientation ? itemOffsetY * columnIndex : Math.floor(buttonIndex / (maxIndex + 1)) * itemOffsetY);

                $JssorUtils$.$AppendChild(elmt, div);
                _ButtonElements[buttonIndex] = div;

                if (_Options.$ActionMode & 1)
                    $JssorUtils$.$AddEvent(div, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, buttonIndex));

                if (_Options.$ActionMode & 2)
                    $JssorUtils$.$AddEvent(div, "mouseover", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, buttonIndex));

                _Buttons[buttonIndex] = $JssorUtils$.$Buttonize(div);
            }

            //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
            _Initialized = true;
        }
    };

    //JssorBulletNavigator Constructor
    {
        self.$Options = _Options = $JssorUtils$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $Steps: undefined,
                $Lanes: undefined
            }, _Options);
        });

        _ItemPrototype = $JssorUtils$.$FindFirstChildByAttribute(elmt, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ItemPrototype)
                $JssorDebug$.$Fail("Navigator item prototype not defined.");

            if (isNaN($JssorUtils$.$CssWidth(_ItemPrototype))) {
                $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            }

            if (isNaN($JssorUtils$.$CssHeight(_ItemPrototype))) {
                $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.");
            }
        });

        _PrototypeWidth = $JssorUtils$.$CssWidth(_ItemPrototype);
        _PrototypeHeight = $JssorUtils$.$CssHeight(_ItemPrototype);

        $JssorUtils$.$RemoveChild(elmt, _ItemPrototype);

        _Steps = _Options.$Steps || 1;
        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _Orientation = _Options.$Orientation - 1;
    }
};

var $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function (arrowLeft, arrowRight, options) {
    var self = this;
    $JssorEventManager$.call(self);

    $JssorDebug$.$Execute(function () {
        //var arrowLeft = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowleft", null, uiSearchMode);
        //var arrowRight = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowright", null, uiSearchMode);

        if (!arrowLeft)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (!arrowRight)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (isNaN($JssorUtils$.$CssWidth(arrowLeft))) {
            $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
        }

        if (isNaN($JssorUtils$.$CssWidth(arrowRight))) {
            $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
        }

        if (isNaN($JssorUtils$.$CssHeight(arrowLeft))) {
            $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
        }

        if (isNaN($JssorUtils$.$CssHeight(arrowRight))) {
            $JssorDebug$.$Fail("Height of 'arrow right' not specified.");
        }
    });

    //var arrowLeft = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowleft", null, uiSearchMode);
    //var arrowRight = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowright", null, uiSearchMode);
    var _Length;
    var _CurrentIndex;
    var _Options;
    var _Steps;
    var _ParentNode = $JssorUtils$.$GetParentNode(arrowLeft);
    var _ArrowWidth = $JssorUtils$.$CssWidth(arrowLeft);
    var _ArrowHeight = $JssorUtils$.$CssHeight(arrowLeft);

    function OnNavigationRequest(steps) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, steps, true);
    }

    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        if (temp) {
            _CurrentIndex = virtualIndex;
        }
        else {
            _CurrentIndex = index;
        }
        //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
    };

    self.$Show = function (show) {
        $JssorUtils$.$ShowElement(arrowLeft, show);
        $JssorUtils$.$ShowElement(arrowRight, show);
    };

    var _Located;
    self.$Relocate = function (force) {
        if (!_Located || _Options.$Scale == false) {

            var containerWidth = $JssorUtils$.$CssWidth(_ParentNode);
            var containerHeight = $JssorUtils$.$CssHeight(_ParentNode);

            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$CssLeft(arrowLeft, (containerWidth - _ArrowWidth) / 2);
                $JssorUtils$.$CssLeft(arrowRight, (containerWidth - _ArrowWidth) / 2);
            }

            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$CssTop(arrowLeft, (containerHeight - _ArrowHeight) / 2);
                $JssorUtils$.$CssTop(arrowRight, (containerHeight - _ArrowHeight) / 2);
            }

            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        _Length = length;
        _CurrentIndex = 0;

        if (!_Initialized) {

            //self.$Relocate(true);

            $JssorUtils$.$AddEvent(arrowLeft, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, -_Steps));
            $JssorUtils$.$AddEvent(arrowRight, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, _Steps));

            $JssorUtils$.$Buttonize(arrowLeft);
            $JssorUtils$.$Buttonize(arrowRight);

            _Initialized = true;
        }

        //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorArrowNavigator Constructor
    {
        self.$Options = _Options = $JssorUtils$.$Extend({
            $Steps: 1
        }, options);

        _Steps = _Options.$Steps;
    }
};

//$JssorThumbnailNavigator$
var $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function (elmt, options) {
    var _Self = this;
    var _Length;
    var _Count;
    var _CurrentIndex;
    var _Options;
    var _NavigationItems = [];

    var _Width;
    var _Height;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _PrototypeWidth;
    var _PrototypeHeight;
    var _DisplayPieces;

    var _Slider;
    var _CurrentMouseOverIndex = -1;

    var _SlidesContainer;
    var _ThumbnailPrototype;

    $JssorEventManager$.call(_Self);
    elmt = $JssorUtils$.$GetElement(elmt);

    function NavigationItem(item, index) {
        var self = this;
        var _Wrapper;
        var _Button;
        var _Thumbnail;

        function Highlight(mouseStatus) {
            _Button.$Activate(_CurrentIndex == index);
        }

        function OnNavigationRequest(event) {
            if (!_Slider.$LastDragSucceded()) {
                var tail = _Lanes - index % _Lanes;
                var slideVirtualIndex = _Slider.$GetVirtualIndex((index + tail) / _Lanes - 1);
                var itemVirtualIndex = slideVirtualIndex * _Lanes + _Lanes - tail;
                _Self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, itemVirtualIndex);
            }
        }

        $JssorDebug$.$Execute(function () {
            self.$Wrapper = undefined;
        });

        self.$Index = index;

        self.$Highlight = Highlight;

        //NavigationItem Constructor
        {
            _Thumbnail = item.$Thumb || item.$Image || $JssorUtils$.$CreateDivElement();
            self.$Wrapper = _Wrapper = $JssorUtils$.$BuildElement(_ThumbnailPrototype, "ThumbnailTemplate", _Thumbnail, true);

            _Button = $JssorUtils$.$Buttonize(_Wrapper);
            if (_Options.$ActionMode & 1)
                $JssorUtils$.$AddEvent(_Wrapper, "click", OnNavigationRequest);
            if (_Options.$ActionMode & 2)
                $JssorUtils$.$AddEvent(_Wrapper, "mouseover", OnNavigationRequest);
        }
    }

    _Self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    _Self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        var oldIndex = _CurrentIndex;
        _CurrentIndex = index;
        if (oldIndex != -1)
            _NavigationItems[oldIndex].$Highlight();
        _NavigationItems[index].$Highlight();

        if (!temp) {
            _Slider.$PlayTo(_Slider.$GetVirtualIndex(Math.floor(virtualIndex / _Lanes)));
        }
    };

    _Self.$Show = function (show) {
        $JssorUtils$.$ShowElement(elmt, show);
    };

    _Self.$Relocate = $JssorUtils$.$EmptyFunction;

    var _Initialized;
    _Self.$Reset = function (length, items, loadingContainer) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(_Length / _Lanes);
            _CurrentIndex = -1;
            _DisplayPieces = Math.min(_DisplayPieces, items.length);

            var horizontal = _Options.$Orientation & 1;

            var slideWidth = _PrototypeWidth + (_PrototypeWidth + _SpacingX) * (_Lanes - 1) * (1 - horizontal);
            var slideHeight = _PrototypeHeight + (_PrototypeHeight + _SpacingY) * (_Lanes - 1) * horizontal;

            var slidesContainerWidth = slideWidth + (slideWidth + _SpacingX) * (_DisplayPieces - 1) * horizontal;
            var slidesContainerHeight = slideHeight + (slideHeight + _SpacingY) * (_DisplayPieces - 1) * (1 - horizontal);

            $JssorUtils$.$CssPosition(_SlidesContainer, "absolute");
            $JssorUtils$.$CssOverflow(_SlidesContainer, "hidden");
            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$CssLeft(_SlidesContainer, (_Width - slidesContainerWidth) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$CssTop(_SlidesContainer, (_Height - slidesContainerHeight) / 2);
            }
            //$JssorDebug$.$Execute(function () {
            //    if (!_Options.$AutoCenter) {
            //        var slidesContainerTop = $JssorUtils$.$CssTop(_SlidesContainer);
            //        var slidesContainerLeft = $JssorUtils$.$CssLeft(_SlidesContainer);

            //        if (isNaN(slidesContainerTop)) {
            //            $JssorDebug$.$Fail("Position 'top' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified by inline style in pixels (like <div u=\"slides\" style=\"top: 0px;\">)");
            //        }

            //        if (isNaN(slidesContainerLeft)) {
            //            $JssorDebug$.$Fail("Position 'left' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified by inline style in pixels (like <div u=\"slides\" style=\"left: 0px;\">)");
            //        }
            //    }
            //});
            $JssorUtils$.$CssWidth(_SlidesContainer, slidesContainerWidth);
            $JssorUtils$.$CssHeight(_SlidesContainer, slidesContainerHeight);

            var slideItemElmts = [];
            $JssorUtils$.$Each(items, function (item, index) {
                var navigationItem = new NavigationItem(item, index);
                var navigationItemWrapper = navigationItem.$Wrapper;

                var columnIndex = Math.floor(index / _Lanes);
                var laneIndex = index % _Lanes;

                $JssorUtils$.$CssLeft(navigationItemWrapper, (_PrototypeWidth + _SpacingX) * laneIndex * (1 - horizontal));
                $JssorUtils$.$CssTop(navigationItemWrapper, (_PrototypeHeight + _SpacingY) * laneIndex * horizontal);

                if (!slideItemElmts[columnIndex]) {
                    slideItemElmts[columnIndex] = $JssorUtils$.$CreateDivElement();
                    $JssorUtils$.$AppendChild(_SlidesContainer, slideItemElmts[columnIndex]);
                }

                $JssorUtils$.$AppendChild(slideItemElmts[columnIndex], navigationItemWrapper);

                _NavigationItems.push(navigationItem);
            });

            var thumbnailSliderOptions = $JssorUtils$.$Extend({
                $AutoPlay: false,
                $NaviQuitDrag: false,
                $SlideWidth: slideWidth,
                $SlideHeight: slideHeight,
                $SlideSpacing: _SpacingX * horizontal + _SpacingY * (1 - horizontal),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 1,
                $PlayOrientation: _Options.$Orientation,
                $DragOrientation: _Options.$DisableDrag ? 0 : _Options.$Orientation
            }, _Options);

            _Slider = new $JssorSlider$(elmt, thumbnailSliderOptions);

            _Initialized = true;
        }

        //_Self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorThumbnailNavigator Constructor
    {
        _Self.$Options = _Options = $JssorUtils$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $Lanes: undefined,
                $Width: undefined,
                $Height: undefined
            }, _Options);
        });

        _Width = $JssorUtils$.$CssWidth(elmt);
        _Height = $JssorUtils$.$CssHeight(elmt);

        $JssorDebug$.$Execute(function () {
            if (!_Width)
                $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            if (!_Height)
                $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.");
        });

        _SlidesContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "slides");
        _ThumbnailPrototype = $JssorUtils$.$FindFirstChildByAttribute(_SlidesContainer, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ThumbnailPrototype)
                $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.");
        });

        _PrototypeWidth = $JssorUtils$.$CssWidth(_ThumbnailPrototype);
        _PrototypeHeight = $JssorUtils$.$CssHeight(_ThumbnailPrototype);

        $JssorUtils$.$RemoveChild(_SlidesContainer, _ThumbnailPrototype);

        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _DisplayPieces = _Options.$DisplayPieces;
    }
};

//$JssorCaptionSlider$
function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $JssorUtils$.$EmptyFunction;
}

var $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function (container, captionSlideOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.");
        }
        //else if (!$JssorUtils$.$IsArray(captionSlideOptions.$CaptionTransitions)) {
        //    $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' is not an array.");
        //}
    });

    var _Self = this;
    var _ImmediateOutCaptionHanger;
    var _PlayMode = playIn ? captionSlideOptions.$PlayInMode : captionSlideOptions.$PlayOutMode;

    var _CaptionTransitions = captionSlideOptions.$CaptionTransitions;
    var _CaptionTuningFetcher = { $Transition: "t", $Delay: "d", $Duration: "du", $ScaleHorizontal: "x", $ScaleVertical: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" };
    var _CaptionTuningTransfer = {
        $Default: function (value, tuningValue) {
            if (!isNaN(tuningValue.$Value))
                value = tuningValue.$Value;
            else
                value *= tuningValue.$Percent;

            return value;
        },
        $Opacity: function (value, tuningValue) {
            return this.$Default(value - 1, tuningValue);
        }
    };
    _CaptionTuningTransfer.$Zoom = _CaptionTuningTransfer.$Opacity;

    $JssorAnimator$.call(_Self, 0, 0);

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];
        var lastTransitionName;
        var namedTransitions = [];
        var namedTransitionOrders = [];

        //$JssorDebug$.$Execute(function () {

        //    var debugInfoElement = $JssorUtils$.$GetElement("debugInfo");

        //    if (debugInfoElement && playIn) {

        //        var text = $JssorUtils$.$GetInnerHtml(debugInfoElement) + "<br>";

        //        $JssorUtils$.$SetInnerHtml(debugInfoElement, text);
        //    }
        //});

        function FetchRawTransition(captionElmt, index) {
            var rawTransition = {};

            $JssorUtils$.$Each(_CaptionTuningFetcher, function (fetchAttribute, fetchProperty) {
                var attributeValue = $JssorUtils$.$GetAttributeEx(captionElmt, fetchAttribute + (index || ""));
                if (attributeValue) {
                    var propertyValue = {};

                    if (fetchAttribute == "t") {
                        //if (($JssorUtils$.$IsBrowserChrome() || $JssorUtils$.$IsBrowserSafari() || $JssorUtils$.$IsBrowserFireFox()) && attributeValue == "*") {
                        //    attributeValue = Math.floor(Math.random() * captionSlideOptions.$CaptionTransitions.length);
                        //    $JssorUtils$.$SetAttribute(captionElmt, fetchAttribute + (index || ""), attributeValue);
                        //}

                        propertyValue.$Value = attributeValue;
                    }
                    else if (attributeValue.indexOf("%") + 1)
                        propertyValue.$Percent = $JssorUtils$.$ParseFloat(attributeValue) / 100;
                    else
                        propertyValue.$Value = $JssorUtils$.$ParseFloat(attributeValue);

                    rawTransition[fetchProperty] = propertyValue;
                }
            });

            return rawTransition;
        }

        function GetRandomTransition() {
            //return _CaptionTransitions.length && _CaptionTransitions[Math.floor(Math.random() * 42737 / (i + 1)) % _CaptionTransitions.length];
            return _CaptionTransitions[Math.floor(Math.random() * _CaptionTransitions.length)];
        }

        function EvaluateCaptionTransition(transitionName) {

            var transition;

            if (transitionName == "*") {
                transition = GetRandomTransition();
            }
            else if (transitionName) {

                //indexed transition allowed, just the same as named transition
                var tempTransition = _CaptionTransitions[$JssorUtils$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                if ($JssorUtils$.$IsArray(tempTransition)) {
                    if (transitionName != lastTransitionName) {
                        lastTransitionName = transitionName;
                        namedTransitionOrders[transitionName] = 0;

                        namedTransitions[transitionName] = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                    }
                    else {
                        namedTransitionOrders[transitionName]++;
                    }

                    tempTransition = namedTransitions[transitionName];

                    if ($JssorUtils$.$IsArray(tempTransition)) {
                        tempTransition = tempTransition.length && tempTransition[namedTransitionOrders[transitionName] % tempTransition.length];

                        if ($JssorUtils$.$IsArray(tempTransition)) {
                            //got transition from array level 3, random for all captions
                            tempTransition = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                        }
                        //else {
                        //    //got transition from array level 2, in sequence for all adjacent captions with same name specified
                        //    transition = tempTransition;
                        //}
                    }
                    //else {
                    //    //got transition from array level 1, random but same for all adjacent captions with same name specified
                    //    transition = tempTransition;
                    //}
                }
                //else {
                //    //got transition directly from a simple transition object
                //    transition = tempTransition;
                //}

                transition = tempTransition;

                if ($JssorUtils$.$IsString(transition))
                    transition = EvaluateCaptionTransition(transition);
            }

            return transition;
        }

        var captionElmts = $JssorUtils$.$GetChildren(element);
        $JssorUtils$.$Each(captionElmts, function (captionElmt, i) {

            var transitionsWithTuning = [];
            transitionsWithTuning.$Elmt = captionElmt;
            var isCaption = $JssorUtils$.$GetAttributeEx(captionElmt, "u") == "caption";

            $JssorUtils$.$Each(playIn ? [0, 3] : [2], function (j, k) {

                if (isCaption) {
                    var transition;
                    var rawTransition;

                    if (j != 2 || !$JssorUtils$.$GetAttributeEx(captionElmt, "t3")) {
                        rawTransition = FetchRawTransition(captionElmt, j);

                        if (j == 2 && !rawTransition.$Transition) {
                            rawTransition.$Delay = rawTransition.$Delay || { $Value: 0 };
                            rawTransition = $JssorUtils$.$Extend(FetchRawTransition(captionElmt, 0), rawTransition);
                        }
                    }

                    if (rawTransition && rawTransition.$Transition) {

                        transition = EvaluateCaptionTransition(rawTransition.$Transition.$Value);

                        if (transition) {

                            var transitionWithTuning = $JssorUtils$.$Extend({ $Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1 }, transition);

                            $JssorUtils$.$Each(rawTransition, function (rawPropertyValue, propertyName) {
                                var tuningPropertyValue = (_CaptionTuningTransfer[propertyName] || _CaptionTuningTransfer.$Default).apply(_CaptionTuningTransfer, [transitionWithTuning[propertyName], rawTransition[propertyName]]);
                                if (!isNaN(tuningPropertyValue))
                                    transitionWithTuning[propertyName] = tuningPropertyValue;
                            });

                            if (!k) {
                                if (rawTransition.$BeginTime)
                                    transitionWithTuning.$BeginTime = rawTransition.$BeginTime.$Value || 0;
                                else if ((_PlayMode) & 2)
                                    transitionWithTuning.$BeginTime = 0;
                            }
                        }
                    }

                    transitionsWithTuning.push(transitionWithTuning);
                }

                if ((level % 2) && !k) {
                    //transitionsWithTuning.$Children = GetCaptionItems(captionElmt, lastTransitionName, [].concat(namedTransitions), [].concat(namedTransitionOrders), level + 1);
                    transitionsWithTuning.$Children = GetCaptionItems(captionElmt, level + 1);
                }
            });

            itemsToPlay.push(transitionsWithTuning);
        });

        return itemsToPlay;
    }

    function CreateAnimator(item, transition, immediateOut) {

        var animatorOptions = {
            $Easing: transition.$Easing,
            $Round: transition.$Round,
            $During: transition.$During,
            $Reverse: playIn && !immediateOut,
            $Optimize: true
        };

        $JssorDebug$.$Execute(function () {
            animatorOptions.$CaptionAnimator = true;
        });

        var captionItem = item;
        var captionParent = $JssorUtils$.$GetParentNode(item);

        var captionItemWidth = $JssorUtils$.$CssWidth(captionItem);
        var captionItemHeight = $JssorUtils$.$CssHeight(captionItem);
        var captionParentWidth = $JssorUtils$.$CssWidth(captionParent);
        var captionParentHeight = $JssorUtils$.$CssHeight(captionParent);

        var toStyles = {};
        var fromStyles = {};
        var scaleClip = transition.$ScaleClip || 1;

        //Opacity
        if (transition.$Opacity) {
            toStyles.$Opacity = 2 - transition.$Opacity;
        }

        animatorOptions.$OriginalWidth = captionItemWidth;
        animatorOptions.$OriginalHeight = captionItemHeight;

        //Transform
        if (transition.$Zoom || transition.$Rotate) {
            toStyles.$Zoom = transition.$Zoom ? transition.$Zoom - 1 : 1;

            if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera())
                toStyles.$Zoom = Math.min(toStyles.$Zoom, 2);

            fromStyles.$Zoom = 1;

            var rotate = transition.$Rotate || 0;
            if (rotate == true)
                rotate = 1;

            toStyles.$Rotate = rotate * 360;
            fromStyles.$Rotate = 0;
        }
            //Clip
        else if (transition.$Clip) {
            var fromStyleClip = { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 };
            var toStyleClip = $JssorUtils$.$Extend({}, fromStyleClip);

            var blockOffset = toStyleClip.$Offset = {};

            var topBenchmark = transition.$Clip & 4;
            var bottomBenchmark = transition.$Clip & 8;
            var leftBenchmark = transition.$Clip & 1;
            var rightBenchmark = transition.$Clip & 2;

            if (topBenchmark && bottomBenchmark) {
                blockOffset.$Top = captionItemHeight / 2 * scaleClip;
                blockOffset.$Bottom = -blockOffset.$Top;
            }
            else if (topBenchmark)
                blockOffset.$Bottom = -captionItemHeight * scaleClip;
            else if (bottomBenchmark)
                blockOffset.$Top = captionItemHeight * scaleClip;

            if (leftBenchmark && rightBenchmark) {
                blockOffset.$Left = captionItemWidth / 2 * scaleClip;
                blockOffset.$Right = -blockOffset.$Left;
            }
            else if (leftBenchmark)
                blockOffset.$Right = -captionItemWidth * scaleClip;
            else if (rightBenchmark)
                blockOffset.$Left = captionItemWidth * scaleClip;

            animatorOptions.$Move = transition.$Move;
            toStyles.$Clip = toStyleClip;
            fromStyles.$Clip = fromStyleClip;
        }

        //Fly
        {
            var direction = transition.$FlyDirection;

            var toLeft = 0;
            var toTop = 0;

            var scaleHorizontal = transition.$ScaleHorizontal;
            var scaleVertical = transition.$ScaleVertical;

            if ($JssorDirection$.$IsToLeft(direction)) {
                toLeft -= captionParentWidth * scaleHorizontal;
            }
            else if ($JssorDirection$.$IsToRight(direction)) {
                toLeft += captionParentWidth * scaleHorizontal;
            }

            if ($JssorDirection$.$IsToTop(direction)) {
                toTop -= captionParentHeight * scaleVertical;
            }
            else if ($JssorDirection$.$IsToBottom(direction)) {
                toTop += captionParentHeight * scaleVertical;
            }

            if (toLeft || toTop || animatorOptions.$Move) {
                toStyles.$Left = toLeft + $JssorUtils$.$CssLeft(captionItem);
                toStyles.$Top = toTop + $JssorUtils$.$CssTop(captionItem);
            }
        }

        //duration
        var duration = transition.$Duration;

        fromStyles = $JssorUtils$.$Extend(fromStyles, $JssorUtils$.$GetStyles(captionItem, toStyles));

        animatorOptions.$Setter = $JssorUtils$.$GetStyleSetterEx();

        return new $JssorAnimator$(transition.$Delay, duration, animatorOptions, captionItem, fromStyles, toStyles);
    }

    function CreateAnimators(streamLineLength, captionItems) {

        $JssorUtils$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $JssorUtils$.$CssTop(captionItem.$Elmt);
                    var left = $JssorUtils$.$CssLeft(captionItem.$Elmt);
                    var width = $JssorUtils$.$CssWidth(captionItem.$Elmt);
                    var height = $JssorUtils$.$CssHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(left))
                        error = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(width))
                        error = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(height))
                        error = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";

                    if (error)
                        $JssorDebug$.$Error("Caption " + (i + 1) + " definition error, \r\n" + error + "\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var animator;
            var captionElmt = captionItem.$Elmt;
            var transition = captionItem[0];
            var transition3 = captionItem[1];

            if (transition) {

                animator = CreateAnimator(captionElmt, transition);
                streamLineLength = animator.$Locate($JssorUtils$.$IsUndefined(transition.$BeginTime) ? streamLineLength : transition.$BeginTime, 1);
            }

            streamLineLength = CreateAnimators(streamLineLength, captionItem.$Children);

            if (transition3) {
                var animator3 = CreateAnimator(captionElmt, transition3, 1);
                animator3.$Locate(streamLineLength, 1);
                _Self.$Combine(animator3);
                _ImmediateOutCaptionHanger.$Combine(animator3);
            }

            if (animator)
                _Self.$Combine(animator);
        });

        return streamLineLength;
    }

    _Self.$Revert = function () {
        _Self.$GoToPosition(_Self.$GetPosition_OuterEnd() * (playIn || 0));
        _ImmediateOutCaptionHanger.$GoToBegin();
    };

    //Constructor
    {
        _ImmediateOutCaptionHanger = new $JssorAnimator$(0, 0);

        //var streamLineLength = 0;
        //var captionItems = GetCaptionItems(container, null, [], [], 1);

        CreateAnimators(0, _PlayMode ? GetCaptionItems(container, 1) : []);
    }
};
var JSON;JSON||(JSON={}),function(){function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o;return i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o;return i}}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function f(e){return e<10?"0"+e:e}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}();SockJS=function(){var e=document;var t=window;var n={};var r=function(){};r.prototype.addEventListener=function(e,t){if(!this._listeners){this._listeners={}}if(!(e in this._listeners)){this._listeners[e]=[]}var r=this._listeners[e];if(n.arrIndexOf(r,t)===-1){r.push(t)}return};r.prototype.removeEventListener=function(e,t){if(!(this._listeners&&e in this._listeners)){return}var r=this._listeners[e];var i=n.arrIndexOf(r,t);if(i!==-1){if(r.length>1){this._listeners[e]=r.slice(0,i).concat(r.slice(i+1))}else{delete this._listeners[e]}return}return};r.prototype.dispatchEvent=function(e){var t=e.type;var n=Array.prototype.slice.call(arguments,0);if(this["on"+t]){this["on"+t].apply(this,n)}if(this._listeners&&t in this._listeners){for(var r=0;r<this._listeners[t].length;r++){this._listeners[t][r].apply(this,n)}}};var i=function(e,t){this.type=e;if(typeof t!=="undefined"){for(var n in t){if(!t.hasOwnProperty(n))continue;this[n]=t[n]}}};i.prototype.toString=function(){var e=[];for(var t in this){if(!this.hasOwnProperty(t))continue;var n=this[t];if(typeof n==="function")n="[function]";e.push(t+"="+n)}return"SimpleEvent("+e.join(", ")+")"};var s=function(e){var t=this;t._events=e||[];t._listeners={}};s.prototype.emit=function(e){var t=this;t._verifyType(e);if(t._nuked)return;var n=Array.prototype.slice.call(arguments,1);if(t["on"+e]){t["on"+e].apply(t,n)}if(e in t._listeners){for(var r=0;r<t._listeners[e].length;r++){t._listeners[e][r].apply(t,n)}}};s.prototype.on=function(e,t){var n=this;n._verifyType(e);if(n._nuked)return;if(!(e in n._listeners)){n._listeners[e]=[]}n._listeners[e].push(t)};s.prototype._verifyType=function(e){var t=this;if(n.arrIndexOf(t._events,e)===-1){n.log("Event "+JSON.stringify(e)+" not listed "+JSON.stringify(t._events)+" in "+t)}};s.prototype.nuke=function(){var e=this;e._nuked=true;for(var t=0;t<e._events.length;t++){delete e[e._events[t]]}e._listeners={}};var o="abcdefghijklmnopqrstuvwxyz0123456789_";n.random_string=function(e,t){t=t||o.length;var n,r=[];for(n=0;n<e;n++){r.push(o.substr(Math.floor(Math.random()*t),1))}return r.join("")};n.random_number=function(e){return Math.floor(Math.random()*e)};n.random_number_string=function(e){var t=(""+(e-1)).length;var r=Array(t+1).join("0");return(r+n.random_number(e)).slice(-t)};n.getOrigin=function(e){e+="/";var t=e.split("/").slice(0,3);return t.join("/")};n.isSameOriginUrl=function(e,n){if(!n)n=t.location.href;return e.split("/").slice(0,3).join("/")===n.split("/").slice(0,3).join("/")};n.getParentDomain=function(e){if(/^[0-9.]*$/.test(e))return e;if(/^\[/.test(e))return e;if(!/[.]/.test(e))return e;var t=e.split(".").slice(1);return t.join(".")};n.objectExtend=function(e,t){for(var n in t){if(t.hasOwnProperty(n)){e[n]=t[n]}}return e};var u="_jp";n.polluteGlobalNamespace=function(){if(!(u in t)){t[u]={}}};n.closeFrame=function(e,t){return"c"+JSON.stringify([e,t])};n.userSetCode=function(e){return e===1e3||e>=3e3&&e<=4999};n.countRTO=function(e){var t;if(e>100){t=3*e}else{t=e+200}return t};n.log=function(){if(t.console&&console.log&&console.log.apply){console.log.apply(console,arguments)}};n.bind=function(e,t){if(e.bind){return e.bind(t)}else{return function(){return e.apply(t,arguments)}}};n.flatUrl=function(e){return e.indexOf("?")===-1&&e.indexOf("#")===-1};n.amendUrl=function(t){var r=e.location;if(!t){throw new Error("Wrong url for SockJS")}if(!n.flatUrl(t)){throw new Error("Only basic urls are supported in SockJS")}if(t.indexOf("//")===0){t=r.protocol+t}if(t.indexOf("/")===0){t=r.protocol+"//"+r.host+t}t=t.replace(/[/]+$/,"");return t};n.arrIndexOf=function(e,t){for(var n=0;n<e.length;n++){if(e[n]===t){return n}}return-1};n.arrSkip=function(e,t){var r=n.arrIndexOf(e,t);if(r===-1){return e.slice()}else{var i=e.slice(0,r);return i.concat(e.slice(r+1))}};n.isArray=Array.isArray||function(e){return{}.toString.call(e).indexOf("Array")>=0};n.delay=function(e,t){if(typeof e==="function"){t=e;e=0}return setTimeout(t,e)};var a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\0":"\\u0000","":"\\u0001","":"\\u0002","":"\\u0003","":"\\u0004","":"\\u0005","":"\\u0006","":"\\u0007","\b":"\\b","	":"\\t","\n":"\\n","":"\\u000b","\f":"\\f","\r":"\\r","":"\\u000e","":"\\u000f","":"\\u0010","":"\\u0011","":"\\u0012","":"\\u0013","":"\\u0014","":"\\u0015","":"\\u0016","":"\\u0017","":"\\u0018","":"\\u0019","":"\\u001a","":"\\u001b","":"\\u001c","":"\\u001d","":"\\u001e","":"\\u001f",'"':'\\"',"\\":"\\\\","":"\\u007f","":"\\u0080","":"\\u0081","":"\\u0082","":"\\u0083","":"\\u0084","":"\\u0085","":"\\u0086","":"\\u0087","":"\\u0088","":"\\u0089","":"\\u008a","":"\\u008b","":"\\u008c","":"\\u008d","":"\\u008e","":"\\u008f","":"\\u0090","":"\\u0091","":"\\u0092","":"\\u0093","":"\\u0094","":"\\u0095","":"\\u0096","":"\\u0097","":"\\u0098","":"\\u0099","":"\\u009a","":"\\u009b","":"\\u009c","":"\\u009d","":"\\u009e","":"\\u009f","­":"\\u00ad","؀":"\\u0600","؁":"\\u0601","؂":"\\u0602","؃":"\\u0603","؄":"\\u0604","܏":"\\u070f","឴":"\\u17b4","឵":"\\u17b5","‌":"\\u200c","‍":"\\u200d","‎":"\\u200e","‏":"\\u200f","\u2028":"\\u2028","\u2029":"\\u2029","‪":"\\u202a","‫":"\\u202b","‬":"\\u202c","‭":"\\u202d","‮":"\\u202e"," ":"\\u202f","⁠":"\\u2060","⁡":"\\u2061","⁢":"\\u2062","⁣":"\\u2063","⁤":"\\u2064","⁥":"\\u2065","⁦":"\\u2066","⁧":"\\u2067","⁨":"\\u2068","⁩":"\\u2069","⁪":"\\u206a","⁫":"\\u206b","⁬":"\\u206c","⁭":"\\u206d","⁮":"\\u206e","⁯":"\\u206f","﻿":"\\ufeff","￰":"\\ufff0","￱":"\\ufff1","￲":"\\ufff2","￳":"\\ufff3","￴":"\\ufff4","￵":"\\ufff5","￶":"\\ufff6","￷":"\\ufff7","￸":"\\ufff8","￹":"\\ufff9","￺":"\\ufffa","￻":"\\ufffb","￼":"\\ufffc","�":"\\ufffd","￾":"\\ufffe","￿":"\\uffff"};var l=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,c;var h=JSON&&JSON.stringify||function(e){a.lastIndex=0;if(a.test(e)){e=e.replace(a,function(e){return f[e]})}return'"'+e+'"'};var p=function(e){var t;var n={};var r=[];for(t=0;t<65536;t++){r.push(String.fromCharCode(t))}e.lastIndex=0;r.join("").replace(e,function(e){n[e]="\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);return""});e.lastIndex=0;return n};n.quote=function(e){var t=h(e);l.lastIndex=0;if(!l.test(t)){return t}if(!c)c=p(l);return t.replace(l,function(e){return c[e]})};var d=["websocket","xdr-streaming","xhr-streaming","iframe-eventsource","iframe-htmlfile","xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"];n.probeProtocols=function(){var e={};for(var t=0;t<d.length;t++){var n=d[t];e[n]=T[n]&&T[n].enabled()}return e};n.detectProtocols=function(e,t,n){var r={},i=[];if(!t)t=d;for(var s=0;s<t.length;s++){var o=t[s];r[o]=e[o]}var u=function(e){var t=e.shift();if(r[t]){i.push(t)}else{if(e.length>0){u(e)}}};if(n.websocket!==false){u(["websocket"])}if(r["xhr-streaming"]&&!n.null_origin){i.push("xhr-streaming")}else{if(r["xdr-streaming"]&&!n.cookie_needed&&!n.null_origin){i.push("xdr-streaming")}else{u(["iframe-eventsource","iframe-htmlfile"])}}if(r["xhr-polling"]&&!n.null_origin){i.push("xhr-polling")}else{if(r["xdr-polling"]&&!n.cookie_needed&&!n.null_origin){i.push("xdr-polling")}else{u(["iframe-xhr-polling","jsonp-polling"])}}return i};var v="_sockjs_global";n.createHook=function(){var e="a"+n.random_string(8);if(!(v in t)){var r={};t[v]=function(e){if(!(e in r)){r[e]={id:e,del:function(){delete r[e]}}}return r[e]}}return t[v](e)};n.attachMessage=function(e){n.attachEvent("message",e)};n.attachEvent=function(n,r){if(typeof t.addEventListener!=="undefined"){t.addEventListener(n,r,false)}else{e.attachEvent("on"+n,r);t.attachEvent("on"+n,r)}};n.detachMessage=function(e){n.detachEvent("message",e)};n.detachEvent=function(n,r){if(typeof t.addEventListener!=="undefined"){t.removeEventListener(n,r,false)}else{e.detachEvent("on"+n,r);t.detachEvent("on"+n,r)}};var m={};var g=false;var y=function(){for(var e in m){m[e]();delete m[e]}};var b=function(){if(g)return;g=true;y()};n.attachEvent("unload",b);n.unload_add=function(e){var t=n.random_string(8);m[t]=e;if(g){n.delay(y)}return t};n.unload_del=function(e){if(e in m)delete m[e]};n.createIframe=function(t,r){var i=e.createElement("iframe");var s,o;var u=function(){clearTimeout(s);try{i.onload=null}catch(e){}i.onerror=null};var a=function(){if(i){u();setTimeout(function(){if(i){i.parentNode.removeChild(i)}i=null},0);n.unload_del(o)}};var f=function(e){if(i){a();r(e)}};var l=function(e,t){try{if(i&&i.contentWindow){i.contentWindow.postMessage(e,t)}}catch(n){}};i.src=t;i.style.display="none";i.style.position="absolute";i.onerror=function(){f("onerror")};i.onload=function(){clearTimeout(s);s=setTimeout(function(){f("onload timeout")},2e3)};e.body.appendChild(i);s=setTimeout(function(){f("timeout")},15e3);o=n.unload_add(a);return{post:l,cleanup:a,loaded:u}};n.createHtmlfile=function(e,r){var i=new ActiveXObject("htmlfile");var s,o;var a;var f=function(){clearTimeout(s)};var l=function(){if(i){f();n.unload_del(o);a.parentNode.removeChild(a);a=i=null;CollectGarbage()}};var c=function(e){if(i){l();r(e)}};var h=function(e,t){try{if(a&&a.contentWindow){a.contentWindow.postMessage(e,t)}}catch(n){}};i.open();i.write("<html><s"+"cript>"+'document.domain="'+document.domain+'";'+"</s"+"cript></html>");i.close();i.parentWindow[u]=t[u];var p=i.createElement("div");i.body.appendChild(p);a=i.createElement("iframe");p.appendChild(a);a.src=e;s=setTimeout(function(){c("timeout")},15e3);o=n.unload_add(l);return{post:h,cleanup:l,loaded:f}};var w=function(){};w.prototype=new s(["chunk","finish"]);w.prototype._start=function(e,r,i,s){var o=this;try{o.xhr=new XMLHttpRequest}catch(u){}if(!o.xhr){try{o.xhr=new t.ActiveXObject("Microsoft.XMLHTTP")}catch(u){}}if(t.ActiveXObject||t.XDomainRequest){r+=(r.indexOf("?")===-1?"?":"&")+"t="+ +(new Date)}o.unload_ref=n.unload_add(function(){o._cleanup(true)});try{o.xhr.open(e,r,true)}catch(a){o.emit("finish",0,"");o._cleanup();return}if(!s||!s.no_credentials){o.xhr.withCredentials="true"}if(s&&s.headers){for(var f in s.headers){o.xhr.setRequestHeader(f,s.headers[f])}}o.xhr.onreadystatechange=function(){if(o.xhr){var e=o.xhr;switch(e.readyState){case 3:try{var t=e.status;var n=e.responseText}catch(e){}if(t===1223)t=204;if(n&&n.length>0){o.emit("chunk",t,n)}break;case 4:var t=e.status;if(t===1223)t=204;o.emit("finish",t,e.responseText);o._cleanup(false);break}}};o.xhr.send(i)};w.prototype._cleanup=function(e){var t=this;if(!t.xhr)return;n.unload_del(t.unload_ref);t.xhr.onreadystatechange=function(){};if(e){try{t.xhr.abort()}catch(r){}}t.unload_ref=t.xhr=null};w.prototype.close=function(){var e=this;e.nuke();e._cleanup(true)};var E=n.XHRCorsObject=function(){var e=this,t=arguments;n.delay(function(){e._start.apply(e,t)})};E.prototype=new w;var S=n.XHRLocalObject=function(e,t,r){var i=this;n.delay(function(){i._start(e,t,r,{no_credentials:true})})};S.prototype=new w;var x=n.XDRObject=function(e,t,r){var i=this;n.delay(function(){i._start(e,t,r)})};x.prototype=new s(["chunk","finish"]);x.prototype._start=function(e,t,r){var i=this;var s=new XDomainRequest;t+=(t.indexOf("?")===-1?"?":"&")+"t="+ +(new Date);var o=s.ontimeout=s.onerror=function(){i.emit("finish",0,"");i._cleanup(false)};s.onprogress=function(){i.emit("chunk",200,s.responseText)};s.onload=function(){i.emit("finish",200,s.responseText);i._cleanup(false)};i.xdr=s;i.unload_ref=n.unload_add(function(){i._cleanup(true)});try{i.xdr.open(e,t);i.xdr.send(r)}catch(u){o()}};x.prototype._cleanup=function(e){var t=this;if(!t.xdr)return;n.unload_del(t.unload_ref);t.xdr.ontimeout=t.xdr.onerror=t.xdr.onprogress=t.xdr.onload=null;if(e){try{t.xdr.abort()}catch(r){}}t.unload_ref=t.xdr=null};x.prototype.close=function(){var e=this;e.nuke();e._cleanup(true)};n.isXHRCorsCapable=function(){if(t.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest){return 1}if(t.XDomainRequest&&e.domain){return 2}if(j.enabled()){return 3}return 4};var T=function(e,r,i){if(this===t){return new T(e,r,i)}var s=this,o;s._options={devel:false,debug:false,protocols_whitelist:[],info:undefined,rtt:undefined};if(i){n.objectExtend(s._options,i)}s._base_url=n.amendUrl(e);s._server=s._options.server||n.random_number_string(1e3);if(s._options.protocols_whitelist&&s._options.protocols_whitelist.length){o=s._options.protocols_whitelist}else{if(typeof r==="string"&&r.length>0){o=[r]}else if(n.isArray(r)){o=r}else{o=null}if(o){s._debug('Deprecated API: Use "protocols_whitelist" option '+"instead of supplying protocol list as a second "+"parameter to SockJS constructor.")}}s._protocols=[];s.protocol=null;s.readyState=T.CONNECTING;s._ir=W(s._base_url);s._ir.onfinish=function(e,t){s._ir=null;if(e){if(s._options.info){e=n.objectExtend(e,s._options.info)}if(s._options.rtt){t=s._options.rtt}s._applyInfo(e,t,o);s._didClose()}else{s._didClose(1002,"Can't connect to server",true)}}};T.prototype=new r;T.version="0.3.4";T.CONNECTING=0;T.OPEN=1;T.CLOSING=2;T.CLOSED=3;T.prototype._debug=function(){if(this._options.debug)n.log.apply(n,arguments)};T.prototype._dispatchOpen=function(){var e=this;if(e.readyState===T.CONNECTING){if(e._transport_tref){clearTimeout(e._transport_tref);e._transport_tref=null}e.readyState=T.OPEN;e.dispatchEvent(new i("open"))}else{e._didClose(1006,"Server lost session")}};T.prototype._dispatchMessage=function(e){var t=this;if(t.readyState!==T.OPEN)return;t.dispatchEvent(new i("message",{data:e}))};T.prototype._dispatchHeartbeat=function(e){var t=this;if(t.readyState!==T.OPEN)return;t.dispatchEvent(new i("heartbeat",{}))};T.prototype._didClose=function(e,t,r){var s=this;if(s.readyState!==T.CONNECTING&&s.readyState!==T.OPEN&&s.readyState!==T.CLOSING)throw new Error("INVALID_STATE_ERR");if(s._ir){s._ir.nuke();s._ir=null}if(s._transport){s._transport.doCleanup();s._transport=null}var o=new i("close",{code:e,reason:t,wasClean:n.userSetCode(e)});if(!n.userSetCode(e)&&s.readyState===T.CONNECTING&&!r){if(s._try_next_protocol(o)){return}o=new i("close",{code:2e3,reason:"All transports failed",wasClean:false,last_event:o})}s.readyState=T.CLOSED;n.delay(function(){s.dispatchEvent(o)})};T.prototype._didMessage=function(e){var t=this;var n=e.slice(0,1);switch(n){case"o":t._dispatchOpen();break;case"a":var r=JSON.parse(e.slice(1)||"[]");for(var i=0;i<r.length;i++){t._dispatchMessage(r[i])}break;case"m":var r=JSON.parse(e.slice(1)||"null");t._dispatchMessage(r);break;case"c":var r=JSON.parse(e.slice(1)||"[]");t._didClose(r[0],r[1]);break;case"h":t._dispatchHeartbeat();break}};T.prototype._try_next_protocol=function(t){var r=this;if(r.protocol){r._debug("Closed transport:",r.protocol,""+t);r.protocol=null}if(r._transport_tref){clearTimeout(r._transport_tref);r._transport_tref=null}while(1){var i=r.protocol=r._protocols.shift();if(!i){return false}if(T[i]&&T[i].need_body===true&&(!e.body||typeof e.readyState!=="undefined"&&e.readyState!=="complete")){r._protocols.unshift(i);r.protocol="waiting-for-load";n.attachEvent("load",function(){r._try_next_protocol()});return true}if(!T[i]||!T[i].enabled(r._options)){r._debug("Skipping transport:",i)}else{var s=T[i].roundTrips||1;var o=(r._options.rto||0)*s||5e3;r._transport_tref=n.delay(o,function(){if(r.readyState===T.CONNECTING){r._didClose(2007,"Transport timeouted")}});var u=n.random_string(8);var a=r._base_url+"/"+r._server+"/"+u;r._debug("Opening transport:",i," url:"+a," RTO:"+r._options.rto);r._transport=new T[i](r,a,r._base_url);return true}}};T.prototype.close=function(e,t){var r=this;if(e&&!n.userSetCode(e))throw new Error("INVALID_ACCESS_ERR");if(r.readyState!==T.CONNECTING&&r.readyState!==T.OPEN){return false}r.readyState=T.CLOSING;r._didClose(e||1e3,t||"Normal closure");return true};T.prototype.send=function(e){var t=this;if(t.readyState===T.CONNECTING)throw new Error("INVALID_STATE_ERR");if(t.readyState===T.OPEN){t._transport.doSend(n.quote(""+e))}return true};T.prototype._applyInfo=function(t,r,i){var s=this;s._options.info=t;s._options.rtt=r;s._options.rto=n.countRTO(r);s._options.info.null_origin=!e.domain;var o=n.probeProtocols();s._protocols=n.detectProtocols(o,i,t)};var N=T.websocket=function(e,r){var i=this;var s=r+"/websocket";if(s.slice(0,5)==="https"){s="wss"+s.slice(5)}else{s="ws"+s.slice(4)}i.ri=e;i.url=s;var o=t.WebSocket||t.MozWebSocket;i.ws=new o(i.url);i.ws.onmessage=function(e){i.ri._didMessage(e.data)};i.unload_ref=n.unload_add(function(){i.ws.close()});i.ws.onclose=function(){i.ri._didMessage(n.closeFrame(1006,"WebSocket connection broken"))}};N.prototype.doSend=function(e){this.ws.send("["+e+"]")};N.prototype.doCleanup=function(){var e=this;var t=e.ws;if(t){t.onmessage=t.onclose=null;t.close();n.unload_del(e.unload_ref);e.unload_ref=e.ri=e.ws=null}};N.enabled=function(){return!!(t.WebSocket||t.MozWebSocket)};N.roundTrips=2;var C=function(){};C.prototype.send_constructor=function(e){var t=this;t.send_buffer=[];t.sender=e};C.prototype.doSend=function(e){var t=this;t.send_buffer.push(e);if(!t.send_stop){t.send_schedule()}};C.prototype.send_schedule_wait=function(){var e=this;var t;e.send_stop=function(){e.send_stop=null;clearTimeout(t)};t=n.delay(25,function(){e.send_stop=null;e.send_schedule()})};C.prototype.send_schedule=function(){var e=this;if(e.send_buffer.length>0){var t="["+e.send_buffer.join(",")+"]";e.send_stop=e.sender(e.trans_url,t,function(t,n){e.send_stop=null;if(t===false){e.ri._didClose(1006,"Sending error "+n)}else{e.send_schedule_wait()}});e.send_buffer=[]}};C.prototype.send_destructor=function(){var e=this;if(e._send_stop){e._send_stop()}e._send_stop=null};var k=function(t,r,i){var s=this;if(!("_send_form"in s)){var o=s._send_form=e.createElement("form");var u=s._send_area=e.createElement("textarea");u.name="d";o.style.display="none";o.style.position="absolute";o.method="POST";o.enctype="application/x-www-form-urlencoded";o.acceptCharset="UTF-8";o.appendChild(u);e.body.appendChild(o)}var o=s._send_form;var u=s._send_area;var a="a"+n.random_string(8);o.target=a;o.action=t+"/jsonp_send?i="+a;var f;try{f=e.createElement('<iframe name="'+a+'">')}catch(l){f=e.createElement("iframe");f.name=a}f.id=a;o.appendChild(f);f.style.display="none";try{u.value=r}catch(c){n.log("Your browser is seriously broken. Go home! "+c.message)}o.submit();var h=function(e){if(!f.onerror)return;f.onreadystatechange=f.onerror=f.onload=null;n.delay(500,function(){f.parentNode.removeChild(f);f=null});u.value="";i(true)};f.onerror=f.onload=h;f.onreadystatechange=function(e){if(f.readyState=="complete")h()};return h};var L=function(e){return function(t,n,r){var i=new e("POST",t+"/xhr_send",n);i.onfinish=function(e,t){r(e===200||e===204,"http status "+e)};return function(e){r(false,e)}}};var A=function(t,r){var i;var s=e.createElement("script");var o;var u=function(e){if(o){o.parentNode.removeChild(o);o=null}if(s){clearTimeout(i);s.parentNode.removeChild(s);s.onreadystatechange=s.onerror=s.onload=s.onclick=null;s=null;r(e);r=null}};var a=false;var f=null;s.id="a"+n.random_string(8);s.src=t;s.type="text/javascript";s.charset="UTF-8";s.onerror=function(e){if(!f){f=setTimeout(function(){if(!a){u(n.closeFrame(1006,"JSONP script loaded abnormally (onerror)"))}},1e3)}};s.onload=function(e){u(n.closeFrame(1006,"JSONP script loaded abnormally (onload)"))};s.onreadystatechange=function(e){if(/loaded|closed/.test(s.readyState)){if(s&&s.htmlFor&&s.onclick){a=true;try{s.onclick()}catch(t){}}if(s){u(n.closeFrame(1006,"JSONP script loaded abnormally (onreadystatechange)"))}}};if(typeof s.async==="undefined"&&e.attachEvent){if(!/opera/i.test(navigator.userAgent)){try{s.htmlFor=s.id;s.event="onclick"}catch(l){}s.async=true}else{o=e.createElement("script");o.text="try{var a = document.getElementById('"+s.id+"'); if(a)a.onerror();}catch(x){};";s.async=o.async=false}}if(typeof s.async!=="undefined"){s.async=true}i=setTimeout(function(){u(n.closeFrame(1006,"JSONP script loaded abnormally (timeout)"))},35e3);var c=e.getElementsByTagName("head")[0];c.insertBefore(s,c.firstChild);if(o){c.insertBefore(o,c.firstChild)}return u};var O=T["jsonp-polling"]=function(e,t){n.polluteGlobalNamespace();var r=this;r.ri=e;r.trans_url=t;r.send_constructor(k);r._schedule_recv()};O.prototype=new C;O.prototype._schedule_recv=function(){var e=this;var t=function(t){e._recv_stop=null;if(t){if(!e._is_closing){e.ri._didMessage(t)}}if(!e._is_closing){e._schedule_recv()}};e._recv_stop=M(e.trans_url+"/jsonp",A,t)};O.enabled=function(){return true};O.need_body=true;O.prototype.doCleanup=function(){var e=this;e._is_closing=true;if(e._recv_stop){e._recv_stop()}e.ri=e._recv_stop=null;e.send_destructor()};var M=function(e,r,i){var s="a"+n.random_string(6);var o=e+"?c="+escape(u+"."+s);var a=0;var f=function(e){switch(a){case 0:delete t[u][s];i(e);break;case 1:i(e);a=2;break;case 2:delete t[u][s];break}};var l=r(o,f);t[u][s]=l;var c=function(){if(t[u][s]){a=1;t[u][s](n.closeFrame(1e3,"JSONP user aborted read"))}};return c};var _=function(){};_.prototype=new C;_.prototype.run=function(e,t,n,r,i){var s=this;s.ri=e;s.trans_url=t;s.send_constructor(L(i));s.poll=new Y(e,r,t+n,i)};_.prototype.doCleanup=function(){var e=this;if(e.poll){e.poll.abort();e.poll=null}};var D=T["xhr-streaming"]=function(e,t){this.run(e,t,"/xhr_streaming",rt,n.XHRCorsObject)};D.prototype=new _;D.enabled=function(){return t.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&!/opera/i.test(navigator.userAgent)};D.roundTrips=2;D.need_body=true;var P=T["xdr-streaming"]=function(e,t){this.run(e,t,"/xhr_streaming",rt,n.XDRObject)};P.prototype=new _;P.enabled=function(){return!!t.XDomainRequest};P.roundTrips=2;var H=T["xhr-polling"]=function(e,t){this.run(e,t,"/xhr",rt,n.XHRCorsObject)};H.prototype=new _;H.enabled=D.enabled;H.roundTrips=2;var B=T["xdr-polling"]=function(e,t){this.run(e,t,"/xhr",rt,n.XDRObject)};B.prototype=new _;B.enabled=P.enabled;B.roundTrips=2;var j=function(){};j.prototype.i_constructor=function(e,t,r){var i=this;i.ri=e;i.origin=n.getOrigin(r);i.base_url=r;i.trans_url=t;var s=r+"/iframe.html";if(i.ri._options.devel){s+="?t="+ +(new Date)}i.window_id=n.random_string(8);s+="#"+i.window_id;i.iframeObj=n.createIframe(s,function(e){i.ri._didClose(1006,"Unable to load an iframe ("+e+")")});i.onmessage_cb=n.bind(i.onmessage,i);n.attachMessage(i.onmessage_cb)};j.prototype.doCleanup=function(){var e=this;if(e.iframeObj){n.detachMessage(e.onmessage_cb);try{if(e.iframeObj.iframe.contentWindow){e.postMessage("c")}}catch(t){}e.iframeObj.cleanup();e.iframeObj=null;e.onmessage_cb=e.iframeObj=null}};j.prototype.onmessage=function(e){var t=this;if(e.origin!==t.origin)return;var n=e.data.slice(0,8);var r=e.data.slice(8,9);var i=e.data.slice(9);if(n!==t.window_id)return;switch(r){case"s":t.iframeObj.loaded();t.postMessage("s",JSON.stringify([T.version,t.protocol,t.trans_url,t.base_url]));break;case"t":t.ri._didMessage(i);break}};j.prototype.postMessage=function(e,t){var n=this;n.iframeObj.post(n.window_id+e+(t||""),n.origin)};j.prototype.doSend=function(e){this.postMessage("m",e)};j.enabled=function(){var e=navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Konqueror")!==-1;return(typeof t.postMessage==="function"||typeof t.postMessage==="object")&&!e};var F;var I=function(e,r){if(parent!==t){parent.postMessage(F+e+(r||""),"*")}else{n.log("Can't postMessage, no parent window.",e,r)}};var q=function(){};q.prototype._didClose=function(e,t){I("t",n.closeFrame(e,t))};q.prototype._didMessage=function(e){I("t",e)};q.prototype._doSend=function(e){this._transport.doSend(e)};q.prototype._doCleanup=function(){this._transport.doCleanup()};n.parent_origin=undefined;T.bootstrap_iframe=function(){var r;F=e.location.hash.slice(1);var i=function(e){if(e.source!==parent)return;if(typeof n.parent_origin==="undefined")n.parent_origin=e.origin;if(e.origin!==n.parent_origin)return;var i=e.data.slice(0,8);var s=e.data.slice(8,9);var o=e.data.slice(9);if(i!==F)return;switch(s){case"s":var u=JSON.parse(o);var a=u[0];var f=u[1];var l=u[2];var c=u[3];if(a!==T.version){n.log("Incompatibile SockJS! Main site uses:"+' "'+a+'", the iframe:'+' "'+T.version+'".')}if(!n.flatUrl(l)||!n.flatUrl(c)){n.log("Only basic urls are supported in SockJS");return}if(!n.isSameOriginUrl(l)||!n.isSameOriginUrl(c)){n.log("Can't connect to different domain from within an "+"iframe. ("+JSON.stringify([t.location.href,l,c])+")");return}r=new q;r._transport=new q[f](r,l,c);break;case"m":r._doSend(o);break;case"c":if(r)r._doCleanup();r=null;break}};n.attachMessage(i);I("s")};var R=function(e,t){var r=this;n.delay(function(){r.doXhr(e,t)})};R.prototype=new s(["finish"]);R.prototype.doXhr=function(e,t){var r=this;var i=(new Date).getTime();var s=new t("GET",e+"/info");var o=n.delay(8e3,function(){s.ontimeout()});s.onfinish=function(e,t){clearTimeout(o);o=null;if(e===200){var n=(new Date).getTime()-i;var s=JSON.parse(t);if(typeof s!=="object")s={};r.emit("finish",s,n)}else{r.emit("finish")}};s.ontimeout=function(){s.close();r.emit("finish")}};var U=function(t){var r=this;var i=function(){var e=new j;e.protocol="w-iframe-info-receiver";var n=function(t){if(typeof t==="string"&&t.substr(0,1)==="m"){var n=JSON.parse(t.substr(1));var i=n[0],s=n[1];r.emit("finish",i,s)}else{r.emit("finish")}e.doCleanup();e=null};var i={_options:{},_didClose:n,_didMessage:n};e.i_constructor(i,t,t)};if(!e.body){n.attachEvent("load",i)}else{i()}};U.prototype=new s(["finish"]);var z=function(){var e=this;n.delay(function(){e.emit("finish",{},2e3)})};z.prototype=new s(["finish"]);var W=function(e){if(n.isSameOriginUrl(e)){return new R(e,n.XHRLocalObject)}switch(n.isXHRCorsCapable()){case 1:return new R(e,n.XHRLocalObject);case 2:return new R(e,n.XDRObject);case 3:return new U(e);default:return new z}};var X=q["w-iframe-info-receiver"]=function(e,t,r){var i=new R(r,n.XHRLocalObject);i.onfinish=function(t,n){e._didMessage("m"+JSON.stringify([t,n]));e._didClose()}};X.prototype.doCleanup=function(){};var V=T["iframe-eventsource"]=function(){var e=this;e.protocol="w-iframe-eventsource";e.i_constructor.apply(e,arguments)};V.prototype=new j;V.enabled=function(){return"EventSource"in t&&j.enabled()};V.need_body=true;V.roundTrips=3;var $=q["w-iframe-eventsource"]=function(e,t){this.run(e,t,"/eventsource",Z,n.XHRLocalObject)};$.prototype=new _;var J=T["iframe-xhr-polling"]=function(){var e=this;e.protocol="w-iframe-xhr-polling";e.i_constructor.apply(e,arguments)};J.prototype=new j;J.enabled=function(){return t.XMLHttpRequest&&j.enabled()};J.need_body=true;J.roundTrips=3;var K=q["w-iframe-xhr-polling"]=function(e,t){this.run(e,t,"/xhr",rt,n.XHRLocalObject)};K.prototype=new _;var Q=T["iframe-htmlfile"]=function(){var e=this;e.protocol="w-iframe-htmlfile";e.i_constructor.apply(e,arguments)};Q.prototype=new j;Q.enabled=function(){return j.enabled()};Q.need_body=true;Q.roundTrips=3;var G=q["w-iframe-htmlfile"]=function(e,t){this.run(e,t,"/htmlfile",nt,n.XHRLocalObject)};G.prototype=new _;var Y=function(e,t,n,r){var i=this;i.ri=e;i.Receiver=t;i.recv_url=n;i.AjaxObject=r;i._scheduleRecv()};Y.prototype._scheduleRecv=function(){var e=this;var t=e.poll=new e.Receiver(e.recv_url,e.AjaxObject);var n=0;t.onmessage=function(t){n+=1;e.ri._didMessage(t.data)};t.onclose=function(n){e.poll=t=t.onmessage=t.onclose=null;if(!e.poll_is_closing){if(n.reason==="permanent"){e.ri._didClose(1006,"Polling error ("+n.reason+")")}else{e._scheduleRecv()}}}};Y.prototype.abort=function(){var e=this;e.poll_is_closing=true;if(e.poll){e.poll.abort()}};var Z=function(e){var t=this;var r=new EventSource(e);r.onmessage=function(e){t.dispatchEvent(new i("message",{data:unescape(e.data)}))};t.es_close=r.onerror=function(e,s){var o=s?"user":r.readyState!==2?"network":"permanent";t.es_close=r.onmessage=r.onerror=null;r.close();r=null;n.delay(200,function(){t.dispatchEvent(new i("close",{reason:o}))})}};Z.prototype=new r;Z.prototype.abort=function(){var e=this;if(e.es_close){e.es_close({},true)}};var et;var tt=function(){if(et===undefined){if("ActiveXObject"in t){try{et=!!(new ActiveXObject("htmlfile"))}catch(e){}}else{et=false}}return et};var nt=function(e){var r=this;n.polluteGlobalNamespace();r.id="a"+n.random_string(6,26);e+=(e.indexOf("?")===-1?"?":"&")+"c="+escape(u+"."+r.id);var s=tt()?n.createHtmlfile:n.createIframe;var o;t[u][r.id]={start:function(){o.loaded()},message:function(e){r.dispatchEvent(new i("message",{data:e}))},stop:function(){r.iframe_close({},"network")}};r.iframe_close=function(e,n){o.cleanup();r.iframe_close=o=null;delete t[u][r.id];r.dispatchEvent(new i("close",{reason:n}))};o=s(e,function(e){r.iframe_close({},"permanent")})};nt.prototype=new r;nt.prototype.abort=function(){var e=this;if(e.iframe_close){e.iframe_close({},"user")}};var rt=function(e,t){var n=this;var r=0;n.xo=new t("POST",e,null);n.xo.onchunk=function(e,t){if(e!==200)return;while(1){var s=t.slice(r);var o=s.indexOf("\n");if(o===-1)break;r+=o+1;var u=s.slice(0,o);n.dispatchEvent(new i("message",{data:u}))}};n.xo.onfinish=function(e,t){n.xo.onchunk(e,t);n.xo=null;var r=e===200?"network":"permanent";n.dispatchEvent(new i("close",{reason:r}))}};rt.prototype=new r;rt.prototype.abort=function(){var e=this;if(e.xo){e.xo.close();e.dispatchEvent(new i("close",{reason:"user"}));e.xo=null}};T.getUtils=function(){return n};T.getIframeTransport=function(){return j};return T}();if("_sockjs_onload"in window)setTimeout(_sockjs_onload,1);if(typeof define==="function"&&define.amd){define("sockjs",[],function(){return SockJS})}
(function(){var e,t,n,r,i={}.hasOwnProperty,s=[].slice;e={LF:"\n",NULL:"\0"};n=function(){function n(e,t,n){this.command=e;this.headers=t!=null?t:{};this.body=n!=null?n:""}var t;n.prototype.toString=function(){var t,r,s,o,u;t=[this.command];s=this.headers["content-length"]===false?true:false;if(s){delete this.headers["content-length"]}u=this.headers;for(r in u){if(!i.call(u,r))continue;o=u[r];t.push(""+r+":"+o)}if(this.body&&!s){t.push("content-length:"+n.sizeOfUTF8(this.body))}t.push(e.LF+this.body);return t.join(e.LF)};n.sizeOfUTF8=function(e){if(e){return encodeURI(e).match(/%..|./g).length}else{return 0}};t=function(t){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;o=t.search(RegExp(""+e.LF+e.LF));u=t.substring(0,o).split(e.LF);s=u.shift();a={};d=function(e){return e.replace(/^\s+|\s+$/g,"")};y=u.reverse();for(v=0,g=y.length;v<g;v++){h=y[v];l=h.indexOf(":");a[d(h.substring(0,l))]=d(h.substring(l+1))}r="";p=o+2;if(a["content-length"]){c=parseInt(a["content-length"]);r=(""+t).substring(p,p+c)}else{i=null;for(f=m=p,b=t.length;p<=b?m<b:m>b;f=p<=b?++m:--m){i=t.charAt(f);if(i===e.NULL){break}r+=i}}return new n(s,a,r)};n.unmarshall=function(n){var r,i,s,o;i=n.split(RegExp(""+e.NULL+e.LF+"*"));o={frames:[],partial:""};o.frames=function(){var e,n,s,o;s=i.slice(0,-1);o=[];for(e=0,n=s.length;e<n;e++){r=s[e];o.push(t(r))}return o}();s=i.slice(-1)[0];if(s===e.LF||s.search(RegExp(""+e.NULL+e.LF+"*$"))!==-1){o.frames.push(t(s))}else{o.partial=s}return o};n.marshall=function(t,r,i){var s;s=new n(t,r,i);return s.toString()+e.NULL};return n}();t=function(){function i(e){this.ws=e;this.ws.binaryType="arraybuffer";this.counter=0;this.connected=false;this.heartbeat={outgoing:1e4,incoming:1e4};this.maxWebSocketFrameSize=16*1024;this.subscriptions={};this.partialData=""}var t;i.prototype.debug=function(e){var t;return typeof window!=="undefined"&&window!==null?(t=window.console)!=null?t.log(e):void 0:void 0};t=function(){if(Date.now){return Date.now()}else{return(new Date).valueOf}};i.prototype._transmit=function(e,t,r){var i;i=n.marshall(e,t,r);if(typeof this.debug==="function"){this.debug(">>> "+i)}while(true){if(i.length>this.maxWebSocketFrameSize){this.ws.send(i.substring(0,this.maxWebSocketFrameSize));i=i.substring(this.maxWebSocketFrameSize);if(typeof this.debug==="function"){this.debug("remaining = "+i.length)}}else{return this.ws.send(i)}}};i.prototype._setupHeartbeat=function(n){var i,s,o,u,a,f;if((a=n.version)!==r.VERSIONS.V1_1&&a!==r.VERSIONS.V1_2){return}f=function(){var e,t,r,i;r=n["heart-beat"].split(",");i=[];for(e=0,t=r.length;e<t;e++){u=r[e];i.push(parseInt(u))}return i}(),s=f[0],i=f[1];if(!(this.heartbeat.outgoing===0||i===0)){o=Math.max(this.heartbeat.outgoing,i);if(typeof this.debug==="function"){this.debug("send PING every "+o+"ms")}this.pinger=r.setInterval(o,function(t){return function(){t.ws.send(e.LF);return typeof t.debug==="function"?t.debug(">>> PING"):void 0}}(this))}if(!(this.heartbeat.incoming===0||s===0)){o=Math.max(this.heartbeat.incoming,s);if(typeof this.debug==="function"){this.debug("check PONG every "+o+"ms")}return this.ponger=r.setInterval(o,function(e){return function(){var n;n=t()-e.serverActivity;if(n>o*2){if(typeof e.debug==="function"){e.debug("did not receive server activity for the last "+n+"ms")}return e.ws.close()}}}(this))}};i.prototype._parseConnect=function(){var e,t,n,r;e=1<=arguments.length?s.call(arguments,0):[];r={};switch(e.length){case 2:r=e[0],t=e[1];break;case 3:if(e[1]instanceof Function){r=e[0],t=e[1],n=e[2]}else{r.login=e[0],r.passcode=e[1],t=e[2]}break;case 4:r.login=e[0],r.passcode=e[1],t=e[2],n=e[3];break;default:r.login=e[0],r.passcode=e[1],t=e[2],n=e[3],r.host=e[4]}return[r,t,n]};i.prototype.connect=function(){var i,o,u,a;i=1<=arguments.length?s.call(arguments,0):[];a=this._parseConnect.apply(this,i);u=a[0],this.connectCallback=a[1],o=a[2];if(typeof this.debug==="function"){this.debug("Opening Web Socket...")}this.ws.onmessage=function(r){return function(i){var s,u,a,f,l,c,h,p,d,v,m,g,y;f=typeof ArrayBuffer!=="undefined"&&i.data instanceof ArrayBuffer?(s=new Uint8Array(i.data),typeof r.debug==="function"?r.debug("--- got data length: "+s.length):void 0,function(){var e,t,n;n=[];for(e=0,t=s.length;e<t;e++){u=s[e];n.push(String.fromCharCode(u))}return n}().join("")):i.data;r.serverActivity=t();if(f===e.LF){if(typeof r.debug==="function"){r.debug("<<< PONG")}return}if(typeof r.debug==="function"){r.debug("<<< "+f)}d=n.unmarshall(r.partialData+f);r.partialData=d.partial;g=d.frames;y=[];for(v=0,m=g.length;v<m;v++){l=g[v];switch(l.command){case"CONNECTED":if(typeof r.debug==="function"){r.debug("connected to server "+l.headers.server)}r.connected=true;r._setupHeartbeat(l.headers);y.push(typeof r.connectCallback==="function"?r.connectCallback(l):void 0);break;case"MESSAGE":p=l.headers.subscription;h=r.subscriptions[p]||r.onreceive;if(h){a=r;c=l.headers["message-id"];l.ack=function(e){if(e==null){e={}}return a.ack(c,p,e)};l.nack=function(e){if(e==null){e={}}return a.nack(c,p,e)};y.push(h(l))}else{y.push(typeof r.debug==="function"?r.debug("Unhandled received MESSAGE: "+l):void 0)}break;case"RECEIPT":y.push(typeof r.onreceipt==="function"?r.onreceipt(l):void 0);break;case"ERROR":y.push(typeof o==="function"?o(l):void 0);break;default:y.push(typeof r.debug==="function"?r.debug("Unhandled frame: "+l):void 0)}}return y}}(this);this.ws.onclose=function(e){return function(){var t;t="Whoops! Lost connection to "+e.ws.url;if(typeof e.debug==="function"){e.debug(t)}e._cleanUp();return typeof o==="function"?o(t):void 0}}(this);return this.ws.onopen=function(e){return function(){if(typeof e.debug==="function"){e.debug("Web Socket Opened...")}u["accept-version"]=r.VERSIONS.supportedVersions();u["heart-beat"]=[e.heartbeat.outgoing,e.heartbeat.incoming].join(",");return e._transmit("CONNECT",u)}}(this)};i.prototype.disconnect=function(e,t){if(t==null){t={}}this._transmit("DISCONNECT",t);this.ws.onclose=null;this.ws.close();this._cleanUp();return typeof e==="function"?e():void 0};i.prototype._cleanUp=function(){this.connected=false;if(this.pinger){r.clearInterval(this.pinger)}if(this.ponger){return r.clearInterval(this.ponger)}};i.prototype.send=function(e,t,n){if(t==null){t={}}if(n==null){n=""}t.destination=e;return this._transmit("SEND",t,n)};i.prototype.subscribe=function(e,t,n){var r;if(n==null){n={}}if(!n.id){n.id="sub-"+this.counter++}n.destination=e;this.subscriptions[n.id]=t;this._transmit("SUBSCRIBE",n);r=this;return{id:n.id,unsubscribe:function(){return r.unsubscribe(n.id)}}};i.prototype.unsubscribe=function(e){delete this.subscriptions[e];return this._transmit("UNSUBSCRIBE",{id:e})};i.prototype.begin=function(e){var t,n;n=e||"tx-"+this.counter++;this._transmit("BEGIN",{transaction:n});t=this;return{id:n,commit:function(){return t.commit(n)},abort:function(){return t.abort(n)}}};i.prototype.commit=function(e){return this._transmit("COMMIT",{transaction:e})};i.prototype.abort=function(e){return this._transmit("ABORT",{transaction:e})};i.prototype.ack=function(e,t,n){if(n==null){n={}}n["message-id"]=e;n.subscription=t;return this._transmit("ACK",n)};i.prototype.nack=function(e,t,n){if(n==null){n={}}n["message-id"]=e;n.subscription=t;return this._transmit("NACK",n)};return i}();r={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.1,1.0"}},client:function(e,n){var i,s;if(n==null){n=["v10.stomp","v11.stomp"]}i=r.WebSocketClass||WebSocket;s=new i(e,n);return new t(s)},over:function(e){return new t(e)},Frame:n};if(typeof exports!=="undefined"&&exports!==null){exports.Stomp=r}if(typeof window!=="undefined"&&window!==null){r.setInterval=function(e,t){return window.setInterval(t,e)};r.clearInterval=function(e){return window.clearInterval(e)};window.Stomp=r}else if(!exports){self.Stomp=r}}).call(this)
function carousel(){$(".jssora14l,.jssora14r,.jssora14ldn,.jssora14rdn").css("background-image","url("+$("#url_icon_arrows").val()+")");new $JssorSlider$("slider_container",options);applyAll()}function applyAll(){applyResponsive($("#slider_container"));applyResponsive($("#slider_container").children());applyResponsive($("#slider_container").children().children());applyResponsive($(".slide:eq(0)").parent());applyResponsive($(".slide"));applyResponsive($(".slide").children());applyResponsive($(".slide .img_item"));applyResponsive($(".slide .img_item"));$(".arrow").css("top","50%").css("margin-top","-25px")}function applyResponsive(e){e.css("width","100%").css("height","100%")}var options={$AutoPlay:true,$BulletNavigatorOptions:{$Class:$JssorBulletNavigator$,$ChanceToShow:2},$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$ChanceToShow:2,$AutoCenter:2,$Steps:1}};$(window).resize(function(){applyAll()})
function defaultPopulate(e,t,n,r,i){var s={start:n,qtd:r,page:i};defaultAjax("GET",e,t,s,false)}function defaultAjaxUpdateReturningJsonWithoutLoader(e,t,n,r){$.ajax({type:e,url:t,async:true,data:n,accepts:{text:"application/json"},success:function(e){if(r!=undefined){r(e)}},error:handleErrorAjax})}function defaultAjaxUpdateReturningJson(e,t,n,r,i){$.ajax({beforeSend:function(){showLoader()},type:e,url:t,async:r,data:n,accepts:{text:"application/json"},success:function(e){if(i!=undefined){i(e)}},error:handleErrorAjax,complete:function(){hideLoader()}})}function handleErrorAjax(e,t,n){console.log(n);if(n=="Forbidden"){}else{}}function defaultAjaxUpdate(e,t,n,r){$.ajax({beforeSend:function(){showLoader()},type:e,url:t,async:true,data:n,success:function(e){if(e==true){console.log("status atualizado com sucesso")}if(r!=undefined){r()}},error:handleErrorAjax,complete:function(){hideLoader()}})}function defaultAjax(e,t,n,r,i,s){$.ajax({type:e,url:t,async:i,data:r,success:function(e){redirectIfErrorAcessControl(e);$(n).html(e);imageLazyLoad();if(s!=undefined){s()}},error:handleErrorAjax})}function redirectIfErrorAcessControl(e){e=$(e);if(e.find("#btn_logar").length!=0){location.href=$("#url_login").val()}else if(e.find("#acesso_negado").length!=0){location.href=$("#url_negado").val()}}function initComponents(){loader=$("#wrapper_load");painelSucesso=$("#painel-sucesso");painelErro=$("#painel-erro");formLogout=$("#form_logout");url_add_carrinho=$("#url_add_carrinho").val()}function showLoader(){loader.show()}function hideLoader(){loader.hide()}function numberToMoeda(e){return"R$ "+numberToString(e)}function loadCarousel(){var e=$("#url_carousel_ajax").val();var t=$("#carousel");defaultAjax("POST",e,t,{},true,carousel)}function numberToString(e,t){var n=isNaN(t)?2:Math.abs(t);var r=",";var i=typeof thousands_sep==="undefined"?".":thousands_sep;var s=e<0?"-":"";var o=parseInt(e=Math.abs(e).toFixed(n))+"";var u=(u=o.length)>3?u%3:0;return s+(u?o.substr(0,u)+i:"")+o.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+i)+(n?r+Math.abs(e-o).toFixed(n).slice(2):"")}function aplicarEstiloValidacao(){if(painelErro.length==1&&$("#painel-erro ul").length==1){painelErro.show();painelSucesso.hide()}$(".required label").prepend('<span style="color:red">*</span>');$(".required-file #btn_cancel_foto").after('<span style="color:red;font-size:1.2em"> (Obrigatório)</span>');hideSucess()}function hideSucess(){painelSucesso.fadeOut({duration:4e3})}function showSucessMsg(e){painelSucesso.html(e).fadeIn({duration:500,complete:function(){hideSucess()}})}function stringToNumber(e){if(typeof e=="number")return e;if(e.indexOf("R$")!=-1){e=$.trim(e.replace("R$",""))}return parseFloat(e.replace(",","."))}function stringToMoeda(e){return"R$ "+stringToNumber(e)}function XMLtoString(e){var t;if(e instanceof jQuery)e=e.get(0);try{t=(new XMLSerializer).serializeToString(e)}catch(n){t=e.xml}return t}function cancelarImagem(){$("#hasImage").val("false");$("#local_foto .erro").empty();$("#foto_item").css("display","none");$("#sem_foto").css("display","inline");$("#btn_foto").attr("value","Selecionar Foto");$("#info_foto").css("display","none");$("#btn_cancel_foto").css("display","none")}function imagemSetada(){$("#hasImage").val("true");$("#sem_foto").css("display","none");$("#btn_foto").attr("value","Trocar Foto");$("#info_foto").css("display","inline");$("#btn_cancel_foto").css("display","inline-block")}function updateStatusFirst(e){$(".loading-status").hide();$("#icon-establishment, #icon_sale").show();updateStatus(e)}function updateTest(e){console.log("não implementado")}function updateStatus(e){var t=e.saleOpened;var n=e.trailerOpened;$("#status_sale").val(t);$("#status_establishment").val(n);if(t){changeIcon($("#icon_sale"),"icon-online_sale_closed","icon-online_sale_open")}else{changeIcon($("#icon_sale"),"icon-online_sale_open","icon-online_sale_closed")}if(n){changeIcon($("#icon-establishment"),"icon-establishment_closed","icon-establishment_open")}else{changeIcon($("#icon-establishment"),"icon-establishment_open","icon-establishment_closed")}}function changeIcon(e,t,n){e.removeClass(t);e.addClass(n)}function applyMask(){$(".mask").each(function(){$(this).mask($(this).attr("mask"))})}function applyActionsIcons(){$(".icon, .icon_manager").hover(function(){$(this).removeClass($(this).attr("icon"));$(this).addClass($(this).attr("icon_hover"))},function(){$(this).removeClass($(this).attr("icon_hover"));$(this).addClass($(this).attr("icon"))})}function buildFunctionsGlobal(){aplicarEstiloValidacao();$("#btn_logout").click(function(){formLogout.submitar()});$("#btn_salvar").click(function(){$(this).parents("form").submitar()});if($(".campoMoeda").length>0){$(".campoMoeda").maskMoney()}applyTitleTrack();$("#reload_captcha").click(function(){urlCaptcha=$("#url_captcha").val();container=$("#container_captcha");key=$("#captcha_key").val();defaultAjax("GET",urlCaptcha,container,{key:key},false)});if($(".img-lazyload").length>0){imageLazyLoad()}}function applyActionsSubmitForm(){$(".submit-form").click(function(){var e=$(this).attr("url");showLoader();location.href=e})}function applyTitleTrack(){$("#content").tooltip({track:true})}function imageLazyLoad(){$(".img-lazyload").lazyload({effect:"fadeIn",threshold:1e3})}function showError(e){painelSucesso.hide();painelErro.show().empty().html(e)}function hideError(){painelErro.hide()}function changeImagem(e){f=e.target.files[0];if(!f.type.match("image.*")){$("#local_foto .erro").removeClass("sucess").html("Só é permitido imagens");return}tmKB=Math.round(parseInt(f.size)/1024).toFixed(0);if(tmKB>1e3){$("#local_foto .erro").removeClass("sucess").html("Excedeu o limite máximo de 1000KB");return}$("#local_foto .erro").addClass("sucess").html("Imagem pronta para ser salva.");$("#nome_foto").html(f.name);$("#tm_foto").html(tmKB);r=new FileReader;r.onabort=function(e){alert("cancelado")};r.onload=function(e){$("#foto_item").attr("src",e.target.result).css("height","100%").css("width","100%").css("display","inline");imagemSetada()};r.readAsDataURL(f)}function startCheckingStatus(){defaultAjaxUpdateReturningJsonWithoutLoader("POST",$("#url_new_status").val(),{},updateStatusFirst);var e=new SockJS($("#websocket_url").val());stompClient=Stomp.over(e);stompClient.connect({},function(e){console.log("Connected: "+e);stompClient.subscribe("/off/refresh/status",function(e){var t=JSON.parse(e.body);updateStatus(t.status)});stompClient.subscribe("/user/off/monitor/pedido",updateTest);stompClient.subscribe("/user/dashboard/notify/pedidos",notifyDashboard);stompClient.subscribe("/user/dashboard/refresh/pedido",refreshPedidoDashboard)})}function notifyDashboard(e){console.log("loadPedido não implementado")}function refreshPedidoDashboard(e){console.log("refreshPedidoDashboard não implementado")}var regex_onlyLetters=/[^a-zA-Z áéíóúãõâêîôûÁÉÍÓÚÀÈÌÒÙàèìòùÂÊÎÔÛÃÕ]/;var loader,url_add_carrinho,painelSucesso,painelErro,url_check_status,stompClient;$(document).ready(function(){$("#painel-itens_cart").bind("click",function(){$("#itens_into_cart").fadeToggle("fast")});applyActionsSubmitForm();startCheckingStatus();loadCarousel();initComponents();applyActionsIcons();applyMask();buildFunctionsGlobal()});$(function(){$.fn.submitar=function(){showLoader();$(".mask").each(function(){$(this).val($(this).valNoMask())});stompClient.disconnect();$(this).submit()};$.fn.valNoMask=function(){var e=$(this).val();return e.replace(/[^A-Za-z 0-9]/g,"")}});$(function(){var e=$("#foto");if(e.length>0){e.get(0).addEventListener("change",changeImagem,false);$("#btn_foto").click(function(){e.trigger("click")});$("#btn_cancel_foto").click(cancelarImagem)}})
function build(e,t){$("body").css("overflow","hidden");t.show();e.fadeIn();janelaModal=$('<div id="janelaModal" style="display:none"></div>');$("body").append(janelaModal);buildDimensions(janelaModal,$("body"),0);janelaModal.fadeIn();janelaModal.append('<div class="fecharModal"><a class="icon icon-less35"></a></div><div id="conteudoModal"></div>');$(".fecharModal").click(function(){$(this).fecharModal()});$("body").bind("keyup",function(e){if(e.keyCode===$.ui.keyCode.ESCAPE){$("body").unbind("keyup");$(this).fecharModal(janelaModal)}});conteudoModal=janelaModal.find("#conteudoModal");content=$('<div id="modal" />').html(t);conteudoModal.empty().html(content);conteudoModal.css("max-width","95%");conteudoModal.css("width","100%");content.css("max-width","60%");centralizar(janelaModal);buildFunctionsGlobal();janelaModal.show()}function buildDimensions(e,t,n){n=typeof n==="undefined"?0:n;width=t.css("width").replace("px","");height=t.css("height").replace("px","");maxwidth=width-width*n;e.css("max-width",maxwidth)}function centralizar(e){height=e.css("height");width=e.css("width");marginleft=parseFloat(width.replace("px","")/2)*-1;margintop=parseFloat(height.replace("px","")/2)*-1;e.css("width",width).css("margin-left",marginleft).css("height",height).css("margin-top",margintop)}$(function(){$("body").append('<div id="fundoModal"></div>');var e=$("#fundoModal");$.fn.abrirModalWithNoClone=function(){if(this.parents("#modal").length==0){build(e,$(this))}else{alert("Não é possível abrir uma janela sobre a outra")}};$.fn.abrirModal=function(){if(this.parents("#modal").length==0){build(e,$(this).clone())}else{alert("Não é possível abrir uma janela sobre a outra")}};$.fn.fecharModal=function(){janelaModal=$("#janelaModal");janelaModal.fadeOut({duration:250,complete:function(){$("#janelaModal").remove();$("#modal").empty();$("body").css("overflow","visible");e.fadeOut({duration:250})}})}})
var Pagination={};Pagination.Pager=function(){this.init=function(e,t,n){this.itens=n;this.itensPerPage=e;this.container=t;this.showPage(1)};this.getNumberOfPage=function(){var e=0;if(this.itens!=null&&this.itensPerPage!=null){e=Math.ceil(this.itens.length/this.itensPerPage)}return e};this.showPage=function(t){this.currentPage=t;var n="";start=(t-1)*this.itensPerPage;end=(t-1)*this.itensPerPage+this.itensPerPage;console.log(start+" - "+end);this.itens.slice(start,end).each(function(){className=this.className;n+='<div class="'+className+'">'+$(this).html()+"</div>"});$(this.container).html(n);e(this.currentPage,this.getNumberOfPage())};var e=function(e,t){var n="<div class='main-controls'><div class='msg-control'>Páginas: </div> <ul>";for(var r=1;r<=t;r++){if(r!=e){n+='<li class="btn-control"><span onclick="pager.showPage('+r+');callBackPage();">'+r+"</span></li>"}else{n+='<li class="btn-control"><span class="active">'+r+"</span></li>"}}n+="</ul></div>";$(this.container).append(n)}}
var PaginationAjax={};PaginationAjax.Pager=function(){function e(e,t){$.ajax({beforeSend:function(){t.showLoader()},type:"GET",url:t.urlRequest,async:true,data:e,success:function(e){$(t.container).html(e);t.afterPopulate()},complete:function(){hideLoader()}})}this.txtLoader='<div class="wrapper txt31 center negrito italico">Carregando...'+'<img src="'+$("#context_estatico").val()+'img/loader.gif" style="max-width:45px" /></div>';this.messageDelete="Não foi especificado uma mensagem de sucesso para exclusão";this.callBackPostRender=function(){console.log("callBackPostRender Não implementada")};this.actionDelete=undefined;this.init=function(e,t,n,r,i,s){this.urlRequest=e;this.urlPage=t;this.itensPerPage=n;this.container=r;this.setTotal(i);if(s!=undefined){this.callBackPostRender=s}msgDelete=$("#message_delete").val();if(msgDelete!=undefined){this.messageDelete=msgDelete}this.showPage(1)};this.setTotal=function(e){this.total=parseInt(e)};this.showLoader=function(){this.old=$(".active").attr("id");$(this.container).empty().html(this.txtLoader)};this.getNumberOfPage=function(){var e=0;e=Math.ceil(this.total/this.itensPerPage);return e};this.showMessageNoItems=function(){$(this.container).empty().html('<div class="wrapper txt31 center negrito italico">Não há registros </div>')};this.postDelete=function(e){this.actionDelete=true;this.showPage(e);showSucessMsg(this.messageDelete)};this.setContainerMainControls=function(e){this.containerMainControls=e};this.showPage=function(t){if(this.page==0||this.total==0){this.showMessageNoItems();return}this.currentPage=t;start=(t-1)*this.itensPerPage;if(this.actionDelete!=undefined){var n=parseInt($("#totais").text());if(start>0&&this.currentPage>Math.ceil(n/this.itensPerPage)){start-=this.itensPerPage}this.actionDelete=undefined}params={start:start,qtd:this.itensPerPage,page:pager.urlPage};$(this.containerMainControls).empty();e(params,this)};this.afterPopulate=function(){imageLazyLoad();this.renderControls(this.currentPage,this.getNumberOfPage());this.applyEvents();this.callBackPostRender()};this.renderControls=function(e,t){var n="<div class='main-controls'><div class='msg-control'>Páginas: </div> <ul>";if(parseInt(e)>t)e=t;for(var r=1;r<=t;r++){if(r!=e){n+='<li class="btn-control"><span id="'+r+'">'+r+"</span></li>"}else{n+='<li class="btn-control"><span id="'+r+'" class="active">'+r+"</span></li>"}}n+="</ul></div>";$(this.containerMainControls).append(n)};this.applyEvents=function(){$(".btn-control span[class!='active']").click(function(){pager.showPage($(this).attr("id"))})}}
