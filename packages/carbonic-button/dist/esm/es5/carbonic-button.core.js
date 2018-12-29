/*!
 * CarbonicButton: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==O?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=r.n+i.mode,u=r[o];if((2===r.t||1===r.t&&!t.r.e)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.n+O]),u){var f=e.i.head;if(e.e)if(1===r.t)f=i.shadowRoot;else for(var c=i;c=e.o(c);)if(c.host&&c.host.shadowRoot){f=c.host.shadowRoot;break}var a=t.u.get(f);if(a||t.u.set(f,a={}),!a[o]){var s=void 0;if(t.f?s=t.f.c(i,o,u):((s=e.a("style")).innerHTML=u,a[o]=!0),s){var l=f.querySelectorAll("[data-styles]");e.s(f,s,l.length&&l[l.length-1].nextSibling||f.firstChild)}}}}function r(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(N,P(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(N,P(t),e):n.setAttribute(t,e))}function i(n,t,e,i,f,c,a){if("class"!==e||c)if("style"===e){for(var s in i)f&&null!=f[s]||(/-/.test(s)?t.style.removeProperty(s):t.style[s]="");for(var s in f)i&&f[s]===i[s]||(/-/.test(s)?t.style.setProperty(s,f[s]):t.style[s]=f[s])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof f)&&null!==f)){var l=n.l(t);l&&l.v&&l.v[e]?(u(t,e,f),a&&l.v[e].p&&r(t,l.v[e].d,f,4===l.v[e].y)):"ref"!==e&&(u(t,e,null==f?"":f),null!=f&&!1!==f||n.r.b(t,e))}else null!=f&&"key"!==e?r(t,e,f):(c||n.r.m(t,e)&&(null==f||!1===f))&&n.r.b(t,e);else e=P(e)in t?P(e.substring(2)):P(e[2])+e.substring(3),f?f!==i&&n.r.w(t,e,f):n.r.g(t,e);else if(i!==f){var v=o(i),p=o(f),d=v.filter(function(n){return!p.includes(n)}),h=o(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function o(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function u(n,t,e){try{n[t]=e}catch(n){}}function f(n,t,e,r,o){var u=11===e.M.nodeType&&e.M.host?e.M.host:e.M,f=t&&t.vattrs||S,c=e.vattrs||S;for(o in f)c&&null!=c[o]||null==f[o]||i(n,u,o,f[o],void 0,r,e.j);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||i(n,u,o,f[o],c[o],r,e.j)}function c(n,t){function e(i,o,u,c,a,v,b,m,w){if(m=o.vchildren[u],s||(p=!0,"slot"===m.vtag&&(l&&t.k(c,l+"-s"),m.vchildren?m.A=!0:m.C=!0)),_(m.vtext))m.M=t.O(m.vtext);else if(m.C)m.M=t.O("");else{if(v=m.M=R||"svg"===m.vtag?t.S("http://www.w3.org/2000/svg",m.vtag):t.a(m.A?"slot-fb":m.vtag),n.x(v)&&n._.delete(y),R="svg"===m.vtag||"foreignObject"!==m.vtag&&R,f(n,null,m,R),_(l)&&v["s-si"]!==l&&t.k(v,v["s-si"]=l),m.vchildren)for(a=0;a<m.vchildren.length;++a)(b=e(i,m,a,v))&&t.P(v,b);"svg"===m.vtag&&(R=!1)}return m.M["s-hn"]=h,(m.A||m.C)&&(m.M["s-sr"]=!0,m.M["s-cr"]=d,m.M["s-sn"]=m.vname||"",(w=i&&i.vchildren&&i.vchildren[u])&&w.vtag===m.vtag&&i.M&&r(i.M)),m.M}function r(e,i,o,u){n.T=!0;var f=t.W(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t.N(u),t.s(a(u),u,c(u)),t.N(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.T=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.o(l)||n).shadowRoot&&t.R(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=_(o[u].vtext)?t.O(o[u].vtext):e(null,i,u,n))&&(o[u].M=s,t.s(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)_(n[e])&&(o=n[e].M,v=!0,o["s-ol"]?t.N(o["s-ol"]):r(o,!0),t.N(o))}function u(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.o(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,b=[];return function m(w,g,M,j,k,$,A,E,C,O,S,x){if(y=w,h=t.R(y),d=y["s-cr"],s=j,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.M=l.M,h=l.vchildren,y=v.vchildren;R=v.M&&_(t.L(v.M))&&void 0!==v.M.ownerSVGElement,R="svg"===v.vtag||"foreignObject"!==v.vtag&&R,_(v.vtext)?(p=d["s-cr"])?t.D(t.o(p),v.vtext):l.vtext!==v.vtext&&t.D(d,v.vtext):("slot"!==v.vtag&&f(n,l,v,R),_(h)&&_(y)?function b(n,f,l,v,p,d,h,y){for(var b=0,m=0,w=f.length-1,g=f[0],M=f[w],j=v.length-1,k=v[0],$=v[j];b<=w&&m<=j;)if(null==g)g=f[++b];else if(null==M)M=f[--w];else if(null==k)k=v[++m];else if(null==$)$=v[--j];else if(u(g,k))s(g,k),g=f[++b],k=v[++m];else if(u(M,$))s(M,$),M=f[--w],$=v[--j];else if(u(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(g.M)),s(g,$),t.s(n,g.M,t.F(M.M)),g=f[++b],$=v[--j];else if(u(M,k))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(M.M)),s(M,k),t.s(n,M.M,g.M),M=f[--w],k=v[++m];else{for(p=null,d=b;d<=w;++d)if(f[d]&&_(f[d].vkey)&&f[d].vkey===k.vkey){p=d;break}_(p)?((y=f[p]).vtag!==k.vtag?h=e(f&&f[m],l,p,n):(s(y,k),f[p]=void 0,h=y.M),k=v[++m]):(h=e(f&&f[m],l,m,n),k=v[++m]),h&&t.s(a(g.M),h,c(g.M))}b>w?i(n,null==v[j+1]?null:v[j+1].M,l,v,m,j):m>j&&o(f,b,w)}(d,h,v,y):_(y)?(_(l.vtext)&&t.D(d,""),i(d,null,v,y,0,y.length-1)):_(h)&&o(h,0,h.length-1)),R&&"svg"===v.vtag&&(R=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.W(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.W(t.o(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.H(o))||8===l)&&""===s||1===l&&null===t.q(o,"slot")&&""===s||1===l&&t.q(o,"slot")===s)&&(b.some(function(n){return n.I===o})||(v=!0,o["s-sn"]=s,b.push({U:i,I:o})));1===t.H(i)&&n(i)}}(M.M),A=0;A<b.length;A++)(E=b[A]).I["s-ol"]||((C=t.O(""))["s-nr"]=E.I,t.s(t.o(E.I),E.I["s-ol"]=C,E.I));for(n.T=!0,A=0;A<b.length;A++){for(E=b[A],S=t.o(E.U),x=t.F(E.U),C=E.I["s-ol"];C=t.B(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.I["s-sn"]&&S===t.o(O)&&(O=t.F(O))&&O&&!O["s-nr"]){x=O;break}(!x&&S!==t.o(E.I)||t.F(E.I)!==x)&&E.I!==x&&(t.N(E.I),t.s(S,E.I,x))}n.T=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.W(e)).length;o<u;o++)if(r=i[o],1===t.H(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.H(i[f]),""!==c){if(1===a&&c===t.q(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.G(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.M),b.length=0,M}}function a(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.M),n.vchildren&&n.vchildren.forEach(function(n){a(n,t)}))}function s(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)L.push(arguments[f]);for(;L.length>0;){var c=L.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)L.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&L.push(f);t.class=L.join(" "),L.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],D):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,M:void 0,j:!1}}function l(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function v(n){return{Q:n[0],Y:n[1],Z:!!n[2],z:!!n[3],J:!!n[4]}}function p(n,t){if(_(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function d(n,t,e){n.K.add(t),n.V.has(t)||(n.V.set(t,!0),n.X?n.queue.write(function(){return h(n,t,e)}):n.queue.tick(function(){return h(n,t,e)}))}function h(n,e,r,i,o,u){return $(this,void 0,void 0,function(){var i,f;return A(this,function(c){switch(c.nn){case 0:return n.V.delete(e),n.tn.has(e)?[3,12]:(o=n.en.get(e))?[3,6]:(u=n.rn.get(e))&&!u["s-rn"]?((u["s-rc"]=u["s-rc"]||[]).push(function(){h(n,e,r)}),[2]):(o=function a(n,t,e,r,i,o,u,f){try{i=new(o=n.l(t).in),function c(n,t,e,r,i,o){n.on.set(r,e),n.un.has(e)||n.un.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function c(n,t,e,r,i,o,u,f,a){if(t.type||t.state){var s=n.un.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(f=o&&o.fn)&&_(a=f[t.attr])&&(s[i]=p(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=p(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),t.watchCallbacks&&(s[F+i]=t.watchCallbacks.slice()),m(r,i,function l(t){return(t=n.un.get(n.on.get(this)))&&t[i]},function v(e,r){(r=n.on.get(this))&&(t.state||t.mutable)&&y(n,r,i,e,u)})}else t.elementRef&&b(r,i,e)})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function a(n,t,e){if(t){var r=n.on.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.cn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.an(e,7,t,!0)}return n.en.set(t,i),i}(n,e,n.sn.get(e),r),[3,5]);case 1:return c.ln.push([1,4,,5]),o.componentWillLoad?[4,o.componentWillLoad()]:[3,3];case 2:c.vn(),c.nn=3;case 3:return[3,5];case 4:return i=c.vn(),n.an(i,3,e),[3,5];case 5:case 6:return[3,11];case 7:return c.ln.push([7,10,,11]),o.componentWillUpdate?[4,o.componentWillUpdate()]:[3,9];case 8:c.vn(),c.nn=9;case 9:return[3,11];case 10:return f=c.vn(),n.an(f,5,e),[3,11];case 11:(function l(n,e,r,i,o){try{var u,f=e.in.host,c=e.in.encapsulation,a="shadow"===c&&n.r.e,l=r;if(u=function v(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(e.in.properties,i),a&&(l=r.shadowRoot),!r["s-rn"]){n.pn(n,n.r,e,r);var p=r["s-sc"];p&&(n.r.k(r,t(p,!0)),"scoped"===c&&n.r.k(r,t(p)))}if(i.render||i.hostData||f||u){n.dn=!0;var d=i.render&&i.render(),h=void 0;u&&(h=h?Object.assign(h,u):u),n.dn=!1;var y=n.hn.get(r)||{};y.M=l;var b=s(null,h,d);b.j=!0,n.hn.set(r,n.render(r,y,b,a,c))}n.f&&n.f.yn(r),r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.dn=!1,n.an(t,8,r,!0)}})(n,n.l(e),e,o),e["s-init"](),c.nn=12;case 12:return[2]}})})}function y(n,t,e,r,i,o){var u=n.un.get(t);u||n.un.set(t,u={}),r!==u[e]&&(u[e]=r,n.en.get(t)&&!n.dn&&t["s-rn"]&&d(n,t,i))}function b(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function m(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function w(n,t,e,r,i,o){if(n.K.delete(t),(i=n.rn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.rn.delete(t)),n.bn.length&&!n.K.size)for(;o=n.bn.shift();)o()}function g(n,t,e,r,i){if(e.connectedCallback=function(){(function e(n,t,r,i){n.tn.delete(r),n.mn.has(r)||(r["s-id"]||(r["s-id"]=n.wn()),n.gn=!0,n.K.add(r),n.mn.set(r,!0),function o(n,t,e){for(e=t;e=n.r.L(e);)if(n.x(e)){n._.has(t)||(n.rn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.sn.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.Mn(r)),r["s-cr"]||n.q(r,C)||n.e&&1===t.t||(r["s-cr"]=n.O(""),r["s-cr"]["s-cn"]=!0,n.s(r,r["s-cr"],n.W(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),1===t.t&&n.e&&!r.shadowRoot&&n.jn(r,{mode:"open"}),i={kn:r["s-id"],fn:{}},t.v&&Object.keys(t.v).forEach(function(e){(o=t.v[e].d)&&(i.fn[o]=n.q(r,o))}),i}(n.r,t,r)),n.$n(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e,r){!n.T&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.H(t);t=n.o(t)}}(n.r,e)&&(n.tn.set(e,!0),w(n,e),a(n.hn.get(e),!0),n.r.g(e),n.An.delete(e),n.f&&n.f.En(e),[n.rn,n.Cn,n.sn].forEach(function(n){return n.delete(e)}))})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u,f){if(n.en.get(e)&&!n.tn.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n._.set(e,!0),n.On.has(e)||(n.On.set(e,!0),e["s-ld"]=void 0,n.r.k(e,r));try{a(n.hn.get(e)),(u=n.Cn.get(e))&&(u.forEach(function(n){return n(e)}),n.Cn.delete(e))}catch(t){n.an(t,4,e)}w(n,e)}})(n,this,r)},e.forceUpdate=function(){d(n,this,i)},t.v){var o=Object.entries(t.v),u={};o.forEach(function(n){var t=n[0],e=n[1].d;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[P(e)];o&&(t[o]=i)})(u,this,n,e)},function f(n,t,e,r){t.forEach(function(t){var i=t[0],o=t[1],u=o.Sn;3&u?m(e,i,function t(){return(n.un.get(this)||{})[i]},function t(e){y(n,this,i,p(o.y,e),r)}):32===u&&b(e,i,W)})}(n,o,e,i)}}function M(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.a(e),n.P(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function j(n,t,r,i,o,u,f){var a=r.performance,l={html:{}},v={},p=r[n]=r[n]||{},h=function y(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,xn:!1,H:function(n){return n.nodeType},a:function(n){return e.createElement(n)},S:function(n,t){return e.createElementNS(n,t)},O:function(n){return e.createTextNode(n)},_n:function(n){return e.createComment(n)},s:function(n,t,e){return n.insertBefore(t,e)},N:function(n){return n.remove()},P:function(n,t){return n.appendChild(t)},k:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},W:function(n){return n.childNodes},o:function(n){return n.parentNode},F:function(n){return n.nextSibling},B:function(n){return n.previousSibling},R:function(n){return P(n.nodeName)},G:function(n){return n.textContent},D:function(n,t){return n.textContent=t},q:function(n,t){return n.getAttribute(t)},Pn:function(n,t,e){return n.setAttribute(t,e)},Tn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},b:function(n,t){return n.removeAttribute(t)},m:function(n,t){return n.hasAttribute(t)},Mn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Wn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.L(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},w:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.Wn(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.Wn(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===x[s[1]]&&o(n)}),a=i.xn?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},g:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Nn:function(n,e,r){var i=new t.CustomEvent(e,r);return n&&n.dispatchEvent(i),i},L:function(n,t){return(t=i.o(n))&&11===i.H(t)?t.host:t},jn:function(n,t){return n.attachShadow(t)}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.xn=!0}}))}catch(n){}return i}(p,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.emit=function(n,e,r){return h.Nn(n,t.eventNameFn?t.eventNameFn(e):e,r)},p.h=s,p.Context=t;var b=r["s-defined"]=r["s-defined"]||{},m=0,w={r:h,Rn:function j(n,t){var e=n.n;r.customElements.get(e)||(g(w,l[e]=n,t.prototype,u,a),t.observedAttributes=Object.values(n.v).map(function(n){return n.d}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},cn:t.emit,l:function(n){return l[h.R(n)]},Ln:function(n){return t[n]},isClient:!0,x:function(n){return!(!b[h.R(n)]&&!w.l(n))},wn:function(){return n+m++},an:function(n,t,e){},Dn:function(n){return function t(n,e,r){return{create:M(n,e,r,"create"),componentOnReady:M(n,e,r,"componentOnReady")}}(h,v,n)},queue:t.queue=function k(n,t){function e(t){return function(e){t.push(e),d||(d=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){p++,r(s);var t=f?u()+7*Math.ceil(p*(1/22)):Infinity;i(l,t),i(v,t),l.length>0&&(v.push.apply(v,l),l.length=0),(d=s.length+l.length+v.length>0)?n.raf(o):p=0}var u=function(){return t.performance.now()},f=!1!==n.asyncQueue,c=Promise.resolve(),a=[],s=[],l=[],v=[],p=0,d=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){a.push(n),1===a.length&&c.then(function(){return r(a)})},read:e(s),write:e(l)}}(p,r),$n:function $(n,t,e){if(n.in)d(w,t,a);else{var r=!h.e,i={mode:t.mode,scoped:r};n.Fn(i).then(function(e){try{n.in=e,function r(n,t,e,i,o,u){if(i){var f=t.n+(o||O);t[f]||(t[f]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.in=function i(){}}d(w,t,a)})}},dn:!1,X:!1,T:!1,pn:e,rn:new WeakMap,u:new WeakMap,mn:new WeakMap,An:new WeakMap,On:new WeakMap,_:new WeakMap,on:new WeakMap,sn:new WeakMap,en:new WeakMap,tn:new WeakMap,V:new WeakMap,Cn:new WeakMap,Hn:new WeakMap,hn:new WeakMap,un:new WeakMap,K:new Set,bn:[]};p.onReady=function(){return new Promise(function(n){return w.queue.write(function(){return w.K.size?w.bn.push(n):n()})})},w.render=c(w,h);var A=h.i.documentElement;return A["s-ld"]=[],A["s-rn"]=!0,A["s-init"]=function(){w._.set(A,p.loaded=w.X=!0),h.Nn(r,"appload",{detail:{namespace:n}})},function E(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.l(t);if(r)if(n._.has(t))e(t);else{var i=n.Cn.get(t)||[];i.push(e),n.Cn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(w,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,w}function k(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"CarbonicButton";return q||(q=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){if(!H[c]){var r={},u=e.resourcesUrl||"./";E(c,r,n,i,u,o),H[c]=j(c,r,n,i,u,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),H[c].Rn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{d:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={Sn:c[1],p:!!c[2],d:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,y:c[4]}}return{n:t,Fn:e,v:Object.assign({},u),t:i,qn:o?o.map(v):void 0}}(n),r=t.Fn,i=T(n[0]);return t.Fn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)})})}this&&this.In||(Object.setPrototypeOf||Array);var $=this&&this.Un||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.Bn(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.Gn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).Bn())})},A=this&&this.Qn||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.Bn)&&!(o=o.call(i,e[1])).Gn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.nn++,{value:e[1],Gn:!1};case 5:f.nn++,i=e[1],e=[0];continue;case 7:e=f.Yn.pop(),f.ln.pop();continue;default:if(!(o=(o=f.ln).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.nn=e[1];break}if(6===e[0]&&f.nn<o[1]){f.nn=o[1],o=e;break}if(o&&f.nn<o[2]){f.nn=o[2],f.Yn.push(e);break}o[2]&&f.Yn.pop(),f.ln.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,Gn:!0}}([e,u])}}var r,i,o,u,f={nn:0,vn:function(){if(1&o[0])throw o[1];return o[1]},ln:[],Yn:[]};return u={Bn:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},E=function(){};function applyPolyfills(n){n.Zn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.zn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Jn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.zn===P?s(n,t.Jn):t.zn===T?l(n,t.Jn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Kn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Vn&&n.Vn(n.Jn),p(n)}function s(n,t){n.zn===_&&(n.Jn=t,n.zn=P,0!==n.Xn.length&&M(p,n))}function l(n,t){n.zn===_&&(n.zn=T,n.Jn=t,M(a,n))}function v(n,t,e,r){var i=n.Xn,o=i.length;n.Vn=null,i[o]=t,i[o+P]=e,i[o+T]=r,0===o&&n.zn&&M(p,n)}function p(n){var t=n.Xn,e=n.zn;if(0!==t.length){for(var r,i,o=n.Jn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Xn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.zn===_&&(i&&f?c(t,o):a?l(t,u):n===P?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.zn=void 0,n.Jn=void 0,n.Xn=[]}var y,b=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,w=void 0,g=void 0,M=function(n,t){O[m]=n,O[m+1]=t,2===(m+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.nt||j.tt;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.et.onmessage=e,function(){return n.rt.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().it("vertx");return void 0!==(w=n.ot||n.ut)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),_=void 0,P=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.ft=n,this.ct=new n(o),this.ct[x]||h(this.ct),b(t)?(this.at=this.length=t.length,this.Jn=Array(this.length),0===this.length?s(this.ct,this.Jn):(this.length=this.length||0,this.st(t),0===this.at&&s(this.ct,this.Jn))):l(this.ct,Error("Array Methods must be provided an Array"))}return n.prototype.st=function(n){for(var t=0;this.zn===_&&t<n.length;t++)this.lt(n[t],t)},n.prototype.lt=function(n,t){var e=this.ft,c=e.resolve;c===i?(c=u(n))===r&&n.zn!==_?this.vt(n.zn,t,n.Jn):"function"!=typeof c?(this.at--,this.Jn[t]=n):e===L?(f(e=new e(o),n,c),this.pt(e,t)):this.pt(new e(function(t){return t(n)}),t):this.pt(c(n),t)},n.prototype.vt=function(n,t,e){var r=this.ct;r.zn===_&&(this.at--,n===T?l(r,e):this.Jn[t]=e),0===this.at&&s(r,this.Jn)},n.prototype.pt=function(n,t){var e=this;v(n,void 0,function(n){return e.vt(P,t,n)},function(n){return e.vt(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Jn=this.zn=void 0,this.Xn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.dt=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).ct},L.race=function(n){var t=this;return b(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.ht=function(n){g=n},L.yt=function(n){M=n},L.bt=M,L.mt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.wt)return}n.Promise=L},L.Promise=L,L.mt(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.gt}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){t.applyPolyfill(n,n.document)})})}var C="ssrv",O="$",S={},x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},_=function(n){return null!=n},P=function(n){return n.toLowerCase()},T=function(n){return P(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},W=function(){},N="http://www.w3.org/1999/xlink",R=!1,L=[],D={forEach:function(n,t){n.forEach(function(n,e,r){return t(l(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(l(n),e,r))})}},F="wc-",H={},q=!1;export{k as defineCustomElement,s as h};