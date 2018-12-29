/*!
 * CarbonicDropdown: Core, es2017
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==O?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=r.n+i.mode,u=r[o];if((2===r.t||1===r.t&&!t.r.e)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.n+O]),u){var f=e.i.head;if(e.e)if(1===r.t)f=i.shadowRoot;else for(var c=i;c=e.o(c);)if(c.host&&c.host.shadowRoot){f=c.host.shadowRoot;break}var a=t.u.get(f);if(a||t.u.set(f,a={}),!a[o]){var s=void 0;if((s=e.f("style")).innerHTML=u,a[o]=!0,s){var l=f.querySelectorAll("[data-styles]");e.c(f,s,l.length&&l[l.length-1].nextSibling||f.firstChild)}}}}function r(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(N,P(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(N,P(t),e):n.setAttribute(t,e))}function i(n,t,e,i,f,c,a){if("class"!==e||c)if("style"===e){for(var s in i)f&&null!=f[s]||(/-/.test(s)?t.style.removeProperty(s):t.style[s]="");for(var s in f)i&&f[s]===i[s]||(/-/.test(s)?t.style.setProperty(s,f[s]):t.style[s]=f[s])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof f)&&null!==f)){var l=n.a(t);l&&l.s&&l.s[e]?(u(t,e,f),a&&l.s[e].l&&r(t,l.s[e].v,f,4===l.s[e].p)):"ref"!==e&&(u(t,e,null==f?"":f),null!=f&&!1!==f||n.r.d(t,e))}else null!=f&&"key"!==e?r(t,e,f):(c||n.r.y(t,e)&&(null==f||!1===f))&&n.r.d(t,e);else e=P(e)in t?P(e.substring(2)):P(e[2])+e.substring(3),f?f!==i&&n.r.b(t,e,f):n.r.m(t,e);else if(i!==f){var v=o(i),p=o(f),d=v.filter(function(n){return!p.includes(n)}),h=o(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function o(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function u(n,t,e){try{n[t]=e}catch(n){}}function f(n,t,e,r,o){var u=11===e.w.nodeType&&e.w.host?e.w.host:e.w,f=t&&t.vattrs||S,c=e.vattrs||S;for(o in f)c&&null!=c[o]||null==f[o]||i(n,u,o,f[o],void 0,r,e.g);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||i(n,u,o,f[o],c[o],r,e.g)}function c(n,t){function e(i,o,u,c,a,v,b,m,w){if(m=o.vchildren[u],s||(p=!0,"slot"===m.vtag&&(l&&t.M(c,l+"-s"),m.vchildren?m.j=!0:m.k=!0)),_(m.vtext))m.w=t.A(m.vtext);else if(m.k)m.w=t.A("");else{if(v=m.w=R||"svg"===m.vtag?t.C("http://www.w3.org/2000/svg",m.vtag):t.f(m.j?"slot-fb":m.vtag),n.O(v)&&n.S.delete(y),R="svg"===m.vtag||"foreignObject"!==m.vtag&&R,f(n,null,m,R),_(l)&&v["s-si"]!==l&&t.M(v,v["s-si"]=l),m.vchildren)for(a=0;a<m.vchildren.length;++a)(b=e(i,m,a,v))&&t.x(v,b);"svg"===m.vtag&&(R=!1)}return m.w["s-hn"]=h,(m.j||m.k)&&(m.w["s-sr"]=!0,m.w["s-cr"]=d,m.w["s-sn"]=m.vname||"",(w=i&&i.vchildren&&i.vchildren[u])&&w.vtag===m.vtag&&i.w&&r(i.w)),m.w}function r(e,i,o,u){n._=!0;var f=t.P(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t.T(u),t.c(a(u),u,c(u)),t.T(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n._=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.o(l)||n).shadowRoot&&t.W(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=_(o[u].vtext)?t.A(o[u].vtext):e(null,i,u,n))&&(o[u].w=s,t.c(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)_(n[e])&&(o=n[e].w,v=!0,o["s-ol"]?t.T(o["s-ol"]):r(o,!0),t.T(o))}function u(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.o(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,b=[];return function m(w,g,M,j,k,$,A,E,C,O,S,x){if(y=w,h=t.W(y),d=y["s-cr"],s=j,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.w=l.w,h=l.vchildren,y=v.vchildren;R=v.w&&_(t.N(v.w))&&void 0!==v.w.ownerSVGElement,R="svg"===v.vtag||"foreignObject"!==v.vtag&&R,_(v.vtext)?(p=d["s-cr"])?t.R(t.o(p),v.vtext):l.vtext!==v.vtext&&t.R(d,v.vtext):("slot"!==v.vtag&&f(n,l,v,R),_(h)&&_(y)?function b(n,f,l,v,p,d,h,y){for(var b=0,m=0,w=f.length-1,g=f[0],M=f[w],j=v.length-1,k=v[0],$=v[j];b<=w&&m<=j;)if(null==g)g=f[++b];else if(null==M)M=f[--w];else if(null==k)k=v[++m];else if(null==$)$=v[--j];else if(u(g,k))s(g,k),g=f[++b],k=v[++m];else if(u(M,$))s(M,$),M=f[--w],$=v[--j];else if(u(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(g.w)),s(g,$),t.c(n,g.w,t.L(M.w)),g=f[++b],$=v[--j];else if(u(M,k))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(M.w)),s(M,k),t.c(n,M.w,g.w),M=f[--w],k=v[++m];else{for(p=null,d=b;d<=w;++d)if(f[d]&&_(f[d].vkey)&&f[d].vkey===k.vkey){p=d;break}_(p)?((y=f[p]).vtag!==k.vtag?h=e(f&&f[m],l,p,n):(s(y,k),f[p]=void 0,h=y.w),k=v[++m]):(h=e(f&&f[m],l,m,n),k=v[++m]),h&&t.c(a(g.w),h,c(g.w))}b>w?i(n,null==v[j+1]?null:v[j+1].w,l,v,m,j):m>j&&o(f,b,w)}(d,h,v,y):_(y)?(_(l.vtext)&&t.R(d,""),i(d,null,v,y,0,y.length-1)):_(h)&&o(h,0,h.length-1)),R&&"svg"===v.vtag&&(R=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.P(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.P(t.o(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.D(o))||8===l)&&""===s||1===l&&null===t.F(o,"slot")&&""===s||1===l&&t.F(o,"slot")===s)&&(b.some(function(n){return n.H===o})||(v=!0,o["s-sn"]=s,b.push({q:i,H:o})));1===t.D(i)&&n(i)}}(M.w),A=0;A<b.length;A++)(E=b[A]).H["s-ol"]||((C=t.A(""))["s-nr"]=E.H,t.c(t.o(E.H),E.H["s-ol"]=C,E.H));for(n._=!0,A=0;A<b.length;A++){for(E=b[A],S=t.o(E.q),x=t.L(E.q),C=E.H["s-ol"];C=t.I(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.H["s-sn"]&&S===t.o(O)&&(O=t.L(O))&&O&&!O["s-nr"]){x=O;break}(!x&&S!==t.o(E.H)||t.L(E.H)!==x)&&E.H!==x&&(t.T(E.H),t.c(S,E.H,x))}n._=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.P(e)).length;o<u;o++)if(r=i[o],1===t.D(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.D(i[f]),""!==c){if(1===a&&c===t.F(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.U(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.w),b.length=0,M}}function a(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.w),n.vchildren&&n.vchildren.forEach(function(n){a(n,t)}))}function s(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)L.push(arguments[f]);for(;L.length>0;){var c=L.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)L.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&L.push(f);t.class=L.join(" "),L.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],D):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,w:void 0,g:!1}}function l(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function v(n){return{B:n[0],G:n[1],Q:!!n[2],Y:!!n[3],Z:!!n[4]}}function p(n,t){if(_(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function d(n,t,e){n.z.add(t),n.J.has(t)||(n.J.set(t,!0),n.K?n.queue.write(function(){return h(n,t,e)}):n.queue.tick(function(){return h(n,t,e)}))}function h(n,e,r,i,o,u){return $(this,void 0,void 0,function(){var i,f;return A(this,function(c){switch(c.V){case 0:return n.J.delete(e),n.X.has(e)?[3,12]:(o=n.nn.get(e))?[3,6]:(u=n.tn.get(e))&&!u["s-rn"]?((u["s-rc"]=u["s-rc"]||[]).push(function(){h(n,e,r)}),[2]):(o=function a(n,t,e,r,i,o,u,f){try{i=new(o=n.a(t).en),function c(n,t,e,r,i,o){n.rn.set(r,e),n.in.has(e)||n.in.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function c(n,t,e,r,i,o,u,f,a){if(t.type||t.state){var s=n.in.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(f=o&&o.on)&&_(a=f[t.attr])&&(s[i]=p(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=p(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),t.watchCallbacks&&(s[F+i]=t.watchCallbacks.slice()),m(r,i,function l(t){return(t=n.in.get(n.rn.get(this)))&&t[i]},function v(e,r){(r=n.rn.get(this))&&(t.state||t.mutable)&&y(n,r,i,e,u)})}else t.elementRef&&b(r,i,e)})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function a(n,t,e){if(t){var r=n.rn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.un(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.fn(e,7,t,!0)}return n.nn.set(t,i),i}(n,e,n.cn.get(e),r),[3,5]);case 1:return c.an.push([1,4,,5]),o.componentWillLoad?[4,o.componentWillLoad()]:[3,3];case 2:c.sn(),c.V=3;case 3:return[3,5];case 4:return i=c.sn(),n.fn(i,3,e),[3,5];case 5:case 6:return[3,11];case 7:return c.an.push([7,10,,11]),o.componentWillUpdate?[4,o.componentWillUpdate()]:[3,9];case 8:c.sn(),c.V=9;case 9:return[3,11];case 10:return f=c.sn(),n.fn(f,5,e),[3,11];case 11:(function l(n,e,r,i,o){try{var u,f=e.en.host,c=e.en.encapsulation,a="shadow"===c&&n.r.e,l=r;if(u=function v(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(e.en.properties,i),a&&(l=r.shadowRoot),!r["s-rn"]){n.ln(n,n.r,e,r);var p=r["s-sc"];p&&(n.r.M(r,t(p,!0)),"scoped"===c&&n.r.M(r,t(p)))}if(i.render||i.hostData||f||u){n.vn=!0;var d=i.render&&i.render(),h=void 0;u&&(h=h?Object.assign(h,u):u),n.vn=!1;var y=n.pn.get(r)||{};y.w=l;var b=s(null,h,d);b.g=!0,n.pn.set(r,n.render(r,y,b,a,c))}r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.vn=!1,n.fn(t,8,r,!0)}})(n,n.a(e),e,o),e["s-init"](),c.V=12;case 12:return[2]}})})}function y(n,t,e,r,i,o){var u=n.in.get(t);u||n.in.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.nn.get(t))){var c=u[F+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){}!n.vn&&t["s-rn"]&&d(n,t,i)}}function b(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function m(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function w(n,t,e,r,i,o){if(n.z.delete(t),(i=n.tn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.tn.delete(t)),n.dn.length&&!n.z.size)for(;o=n.dn.shift();)o()}function g(n,t,e,r,i){if(e.connectedCallback=function(){(function e(n,t,r,i){n.X.delete(r),n.hn.has(r)||(r["s-id"]||(r["s-id"]=n.yn()),n.bn=!0,n.z.add(r),n.hn.set(r,!0),function o(n,t,e){for(e=t;e=n.r.N(e);)if(n.O(e)){n.S.has(t)||(n.tn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.cn.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.mn(r)),r["s-cr"]||n.F(r,C)||n.e&&1===t.t||(r["s-cr"]=n.A(""),r["s-cr"]["s-cn"]=!0,n.c(r,r["s-cr"],n.P(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),1===t.t&&n.e&&!r.shadowRoot&&n.wn(r,{mode:"open"}),i={gn:r["s-id"],on:{}},t.s&&Object.keys(t.s).forEach(function(e){(o=t.s[e].v)&&(i.on[o]=n.F(r,o))}),i}(n.r,t,r)),n.Mn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e,r){if(!n._&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.D(t);t=n.o(t)}}(n.r,e)){n.X.set(e,!0),w(n,e),a(n.pn.get(e),!0),n.r.m(e),n.jn.delete(e);var o=n.nn.get(e);o&&o.componentDidUnload&&o.componentDidUnload(),[n.tn,n.kn,n.cn].forEach(function(n){return n.delete(e)})}})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u,f){if((o=n.nn.get(e))&&!n.X.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.S.set(e,!0),(f=n.$n.has(e))||(n.$n.set(e,!0),e["s-ld"]=void 0,n.r.M(e,r));try{a(n.pn.get(e)),(u=n.kn.get(e))&&(u.forEach(function(n){return n(e)}),n.kn.delete(e)),!f&&o.componentDidLoad&&o.componentDidLoad()}catch(t){n.fn(t,4,e)}w(n,e)}})(n,this,r)},e.forceUpdate=function(){d(n,this,i)},t.s){var o=Object.entries(t.s),u={};o.forEach(function(n){var t=n[0],e=n[1].v;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[P(e)];o&&(t[o]=i)})(u,this,n,e)},function f(n,t,e,r){t.forEach(function(t){var i=t[0],o=t[1],u=o.An;3&u?m(e,i,function t(){return(n.in.get(this)||{})[i]},function t(e){y(n,this,i,p(o.p,e),r)}):32===u&&b(e,i,W)})}(n,o,e,i)}}function M(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.f(e),n.x(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function j(n,t,r,i,o,u,f){var a=r.performance,l={html:{}},v={},p=r[n]=r[n]||{},h=function y(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,En:!1,D:function(n){return n.nodeType},f:function(n){return e.createElement(n)},C:function(n,t){return e.createElementNS(n,t)},A:function(n){return e.createTextNode(n)},Cn:function(n){return e.createComment(n)},c:function(n,t,e){return n.insertBefore(t,e)},T:function(n){return n.remove()},x:function(n,t){return n.appendChild(t)},M:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},P:function(n){return n.childNodes},o:function(n){return n.parentNode},L:function(n){return n.nextSibling},I:function(n){return n.previousSibling},W:function(n){return P(n.nodeName)},U:function(n){return n.textContent},R:function(n,t){return n.textContent=t},F:function(n,t){return n.getAttribute(t)},On:function(n,t,e){return n.setAttribute(t,e)},Sn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},d:function(n,t){return n.removeAttribute(t)},y:function(n,t){return n.hasAttribute(t)},mn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},xn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.N(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},b:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.xn(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.xn(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===x[s[1]]&&o(n)}),a=i.En?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},m:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},_n:function(n,e,r){var i=new t.CustomEvent(e,r);return n&&n.dispatchEvent(i),i},N:function(n,t){return(t=i.o(n))&&11===i.D(t)?t.host:t},wn:function(n,t){return n.attachShadow(t)}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.En=!0}}))}catch(n){}return i}(p,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.emit=function(n,e,r){return h._n(n,t.eventNameFn?t.eventNameFn(e):e,r)},p.h=s,p.Context=t;var b=r["s-defined"]=r["s-defined"]||{},m=0,w={r:h,Pn:function j(n,t){var e=n.n;r.customElements.get(e)||(g(w,l[e]=n,t.prototype,u,a),t.observedAttributes=Object.values(n.s).map(function(n){return n.v}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},un:t.emit,a:function(n){return l[h.W(n)]},Tn:function(n){return t[n]},isClient:!0,O:function(n){return!(!b[h.W(n)]&&!w.a(n))},yn:function(){return n+m++},fn:function(n,t,e){},Wn:function(n){return function t(n,e,r){return{create:M(n,e,r,"create"),componentOnReady:M(n,e,r,"componentOnReady")}}(h,v,n)},queue:t.queue=function k(n,t){function e(t){return function(e){t.push(e),d||(d=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){p++,r(s);var t=f?u()+7*Math.ceil(p*(1/22)):Infinity;i(l,t),i(v,t),l.length>0&&(v.push.apply(v,l),l.length=0),(d=s.length+l.length+v.length>0)?n.raf(o):p=0}var u=function(){return t.performance.now()},f=!1!==n.asyncQueue,c=Promise.resolve(),a=[],s=[],l=[],v=[],p=0,d=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){a.push(n),1===a.length&&c.then(function(){return r(a)})},read:e(s),write:e(l)}}(p,r),Mn:function $(n,t,e){if(n.en)d(w,t,a);else{var r=!h.e,i={mode:t.mode,scoped:r};n.Nn(i).then(function(e){try{n.en=e,function r(n,t,e,i,o,u){if(i){var f=t.n+(o||O);t[f]||(t[f]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.en=function i(){}}d(w,t,a)})}},vn:!1,K:!1,_:!1,ln:e,tn:new WeakMap,u:new WeakMap,hn:new WeakMap,jn:new WeakMap,$n:new WeakMap,S:new WeakMap,rn:new WeakMap,cn:new WeakMap,nn:new WeakMap,X:new WeakMap,J:new WeakMap,kn:new WeakMap,Rn:new WeakMap,pn:new WeakMap,in:new WeakMap,z:new Set,dn:[]};p.onReady=function(){return new Promise(function(n){return w.queue.write(function(){return w.z.size?w.dn.push(n):n()})})},w.render=c(w,h);var A=h.i.documentElement;return A["s-ld"]=[],A["s-rn"]=!0,A["s-init"]=function(){w.S.set(A,p.loaded=w.K=!0),h._n(r,"appload",{detail:{namespace:n}})},function E(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.a(t);if(r)if(n.S.has(t))e(t);else{var i=n.kn.get(t)||[];i.push(e),n.kn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(w,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,w}function k(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"CarbonicDropdown";return q||(q=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){if(!H[c]){var r={},u=e.resourcesUrl||"./";E(c,r,n,i,u,o),H[c]=j(c,r,n,i,u,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),H[c].Pn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{v:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={An:c[1],l:!!c[2],v:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,p:c[4]}}return{n:t,Nn:e,s:Object.assign({},u),t:i,Ln:o?o.map(v):void 0}}(n),r=t.Nn,i=T(n[0]);return t.Nn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)})})}this&&this.Dn||(Object.setPrototypeOf||Array);var $=this&&this.Fn||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.Hn(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.qn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).Hn())})},A=this&&this.In||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.Hn)&&!(o=o.call(i,e[1])).qn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.V++,{value:e[1],qn:!1};case 5:f.V++,i=e[1],e=[0];continue;case 7:e=f.Un.pop(),f.an.pop();continue;default:if(!(o=(o=f.an).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.V=e[1];break}if(6===e[0]&&f.V<o[1]){f.V=o[1],o=e;break}if(o&&f.V<o[2]){f.V=o[2],f.Un.push(e);break}o[2]&&f.Un.pop(),f.an.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,qn:!0}}([e,u])}}var r,i,o,u,f={V:0,sn:function(){if(1&o[0])throw o[1];return o[1]},an:[],Un:[]};return u={Hn:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},E=function(){};function applyPolyfills(n){n.Bn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.Gn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Qn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Gn===P?s(n,t.Qn):t.Gn===T?l(n,t.Qn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Yn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Zn&&n.Zn(n.Qn),p(n)}function s(n,t){n.Gn===_&&(n.Qn=t,n.Gn=P,0!==n.zn.length&&M(p,n))}function l(n,t){n.Gn===_&&(n.Gn=T,n.Qn=t,M(a,n))}function v(n,t,e,r){var i=n.zn,o=i.length;n.Zn=null,i[o]=t,i[o+P]=e,i[o+T]=r,0===o&&n.Gn&&M(p,n)}function p(n){var t=n.zn,e=n.Gn;if(0!==t.length){for(var r,i,o=n.Qn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.zn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Gn===_&&(i&&f?c(t,o):a?l(t,u):n===P?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.Gn=void 0,n.Qn=void 0,n.zn=[]}var y,b=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,w=void 0,g=void 0,M=function(n,t){O[m]=n,O[m+1]=t,2===(m+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.Jn||j.Kn;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.Vn.onmessage=e,function(){return n.Xn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().nt("vertx");return void 0!==(w=n.tt||n.et)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),_=void 0,P=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.rt=n,this.it=new n(o),this.it[x]||h(this.it),b(t)?(this.ot=this.length=t.length,this.Qn=Array(this.length),0===this.length?s(this.it,this.Qn):(this.length=this.length||0,this.ut(t),0===this.ot&&s(this.it,this.Qn))):l(this.it,Error("Array Methods must be provided an Array"))}return n.prototype.ut=function(n){for(var t=0;this.Gn===_&&t<n.length;t++)this.ft(n[t],t)},n.prototype.ft=function(n,t){var e=this.rt,c=e.resolve;c===i?(c=u(n))===r&&n.Gn!==_?this.ct(n.Gn,t,n.Qn):"function"!=typeof c?(this.ot--,this.Qn[t]=n):e===L?(f(e=new e(o),n,c),this.at(e,t)):this.at(new e(function(t){return t(n)}),t):this.at(c(n),t)},n.prototype.ct=function(n,t,e){var r=this.it;r.Gn===_&&(this.ot--,n===T?l(r,e):this.Qn[t]=e),0===this.ot&&s(r,this.Qn)},n.prototype.at=function(n,t){var e=this;v(n,void 0,function(n){return e.ct(P,t,n)},function(n){return e.ct(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Qn=this.Gn=void 0,this.zn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.st=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).it},L.race=function(n){var t=this;return b(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.lt=function(n){g=n},L.vt=function(n){M=n},L.pt=M,L.dt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.ht)return}n.Promise=L},L.Promise=L,L.dt(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.yt}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){t.applyPolyfill(n,n.document)})})}var C="ssrv",O="$",S={},x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},_=function(n){return null!=n},P=function(n){return n.toLowerCase()},T=function(n){return P(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},W=function(){},N="http://www.w3.org/1999/xlink",R=!1,L=[],D={forEach:function(n,t){n.forEach(function(n,e,r){return t(l(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(l(n),e,r))})}},F="wc-",H={},q=!1;export{k as defineCustomElement,s as h};