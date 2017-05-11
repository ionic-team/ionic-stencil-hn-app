/*! document-register-element, 1.4.1
https://github.com/WebReflection/document-register-element
(C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e);-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,r=1),r&&(n=e[t+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=t!=="force"&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=String,tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n,xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||t==="force")tn();else try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e}}}})(window);
/*! (C) Ionic https://ionicframework.com - MIT License */
(function (window) {
    "use strict";

    function ConfigController(configObj, platforms) {
        configObj = configObj || {};
        function get(key) {
            var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (configObj[key] !== undefined) {
                return configObj[key];
            }
            var settings = null;
            for (var i = 0; i < platforms.length; i++) {
                settings = platforms[i]['settings'];
                if (settings && settings[key] !== undefined) {
                    return settings[key];
                }
            }
            return fallback;
        }
        function getBoolean(key) {
            var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var val = get(key);
            if (val === null) {
                return fallbackValue;
            }
            if (typeof val === 'string') {
                return val === 'true';
            }
            return !!val;
        }
        function getNumber(key) {
            var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;

            var val = parseFloat(get(key));
            return isNaN(val) ? fallbackValue : val;
        }
        return {
            get: get,
            getBoolean: getBoolean,
            getNumber: getNumber
        };
    }

    function DomClient(window) {
        var readCBs = [];
        var writeCBs = [];
        var rafPending = false;
        function domRead(cb) {
            readCBs.push(cb);
            if (!rafPending) {
                rafQueue();
            }
        }
        function domWrite(cb) {
            writeCBs.push(cb);
            if (!rafPending) {
                rafQueue();
            }
        }
        function rafQueue() {
            rafPending = true;
            window.requestAnimationFrame(function rafCallback(timeStamp) {
                rafFlush(timeStamp);
            });
        }
        function rafFlush(timeStamp, startTime, cb, err) {
            try {
                startTime = performance.now();
                // ******** DOM READS ****************
                while (cb = readCBs.shift()) {
                    cb(timeStamp);
                }
                // ******** DOM WRITES ****************
                while (cb = writeCBs.shift()) {
                    cb(timeStamp);
                    if (performance.now() - startTime > 8) {
                        break;
                    }
                }
            } catch (e) {
                err = e;
            }
            rafPending = false;
            if (readCBs.length || writeCBs.length) {
                rafQueue();
            }
            if (err) {
                throw err;
            }
        }
        return {
            read: domRead,
            write: domWrite,
            raf: window.requestAnimationFrame.bind(window)
        };
    }

    function NextTickClient(window) {
        var hostScheduleDeferredCallback = window.requestIdleCallback;
        var callbacks = [];
        var pending = false;
        function doWork(deadlineObj) {
            while (deadlineObj.timeRemaining() > 0 && callbacks.length > 0) {
                callbacks.shift()();
            }
            if (pending = callbacks.length > 0) {
                hostScheduleDeferredCallback(doWork);
            }
        }
        function queueNextTick(cb) {
            callbacks.push(cb);
            if (!pending) {
                pending = true;
                hostScheduleDeferredCallback(doWork);
            }
        }
        return {
            nextTick: queueNextTick
        };
    }

    function vnode(sel, data, children, text, elm) {
        var key = data === undefined ? undefined : data.key;
        return { sel: sel, vdata: data, vchildren: children,
            vtext: text, elm: elm, vkey: key };
    }

    function isDef(s) {
        return s !== undefined && s !== null;
    }
    function isUndef(s) {
        return s === undefined;
    }
    function isArray(val) {
        return !!val && val.constructor === Array;
    }
    function isObject(val) {
        return typeof val === 'object';
    }

    function isString(val) {
        return typeof val === 'string';
    }
    function isNumber(val) {
        return typeof val === 'number';
    }
    function isFunction(val) {
        return typeof val === 'function';
    }
    function isStringOrNumber(s) {
        return isString(s) || isNumber(s);
    }
    function toCamelCase(str) {
        return str.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
    }
    function toDashCase(str) {
        return str.replace(/([A-Z])/g, function (g) {
            return '-' + g[0].toLowerCase();
        });
    }
    function noop() {}

    function getElementReference(elm, ref) {
        if (ref === 'child') {
            return elm.firstElementChild;
        }
        if (ref === 'parent') {
            if (elm.parentElement) {
                // normal element with a parent element
                return elm.parentElement;
            }
            if (elm.parentNode && elm.parentNode.host) {
                // shadow dom's document fragment
                return elm.parentNode.host;
            }
        }
        if (ref === 'body') {
            return elm.ownerDocument.body;
        }
        if (ref === 'document') {
            return elm.ownerDocument;
        }
        if (ref === 'window') {
            return elm.ownerDocument.defaultView;
        }
        return elm;
    }
    function getKeyCodeByName(keyName) {
        if (keyName === 'enter') {
            return 13;
        }
        if (keyName === 'escape') {
            return 27;
        }
        if (keyName === 'space') {
            return 32;
        }
        if (keyName === 'tab') {
            return 9;
        }
        return null;
    }

    function addNS(data, children, sel) {
        data.ns = 'http://www.w3.org/2000/svg';
        if (sel !== 'foreignObject' && children !== undefined) {
            for (var i = 0; i < children.length; ++i) {
                var childData = children[i].vdata;
                if (childData !== undefined) {
                    addNS(childData, children[i].vchildren, children[i].sel);
                }
            }
        }
    }
    function h(sel, b, c) {
        var data = {},
            children,
            text,
            i;
        var elm = undefined;
        if (sel.nodeType) {
            elm = sel;
        }
        if (c !== undefined) {
            data = b;
            if (isArray(c)) {
                children = c;
            } else if (isStringOrNumber(c)) {
                text = c;
            } else if (c && c.sel) {
                children = [c];
            }
        } else if (b !== undefined) {
            if (isArray(b)) {
                children = b;
            } else if (isStringOrNumber(b)) {
                text = b;
            } else if (b && b.sel) {
                children = [b];
            } else {
                data = b;
            }
        }
        if (isArray(children)) {
            for (i = 0; i < children.length; ++i) {
                if (isStringOrNumber(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i]);
            }
        }
        if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' && (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
            addNS(data, children, sel);
        }
        return vnode(sel, data, children, text, elm);
    }

    var supportsOpts = null;
    function attachListeners(listeners, instance) {
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            if (listener.enabled !== false) {
                instance.$listeners = instance.$listeners || {};
                instance.$listeners[listener.eventName] = addEventListener(instance.$el, listener.eventName, instance[listener.methodName].bind(instance), listener);
            }
        }
    }
    function enableListener(instance, eventName, shouldEnable, attachTo) {
        if (instance && instance.$meta) {
            var listeners = instance.$meta.listeners;
            if (listeners) {
                var deregisterFns = instance.$listeners = instance.$listeners || {};
                for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    if (listener.eventName === eventName) {
                        if (shouldEnable && !deregisterFns[eventName]) {
                            var attachToEventName = attachTo ? attachTo + ':' + eventName : eventName;
                            deregisterFns[eventName] = addEventListener(instance.$el, attachToEventName, instance[listener.methodName].bind(instance), listener);
                        } else if (!shouldEnable && deregisterFns[eventName]) {
                            deregisterFns[eventName]();
                            delete instance.$listeners[eventName];
                        }
                        return;
                    }
                }
            }
        }
    }
    function addEventListener(elm, eventName, cb) {
        var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (!elm) {
            return noop;
        }
        if (supportsOpts === null) {
            supportsOpts = checkEventOptsSupport(elm);
        }
        var eventListenerOpts = supportsOpts ? {
            'capture': !!opts.capture,
            'passive': !!opts.passive
        } : !!opts.capture;
        var splt = eventName.split(':');
        if (splt.length > 1) {
            // document:mousemove
            // parent:touchend
            // body:keyup.enter
            elm = getElementReference(elm, splt[0]);
            eventName = splt[1];
        }
        splt = eventName.split('.');
        if (splt.length > 1) {
            // keyup.enter
            eventName = splt[0];
            var validKeycode = getKeyCodeByName(splt[1]);
            if (validKeycode !== null) {
                var orgCb = cb;
                cb = function (ev) {
                    if (ev.keyCode === validKeycode) {
                        orgCb(ev);
                    }
                };
            }
        }
        elm.addEventListener(eventName, cb, eventListenerOpts);
        return function removeListener() {
            if (elm) {
                elm.removeEventListener(eventName, cb, eventListenerOpts);
            }
        };
    }
    function detachListeners(instance) {
        var deregisterFns = instance.$listeners;
        if (deregisterFns) {
            var eventNames = Object.keys(deregisterFns);
            for (var i = 0; i < eventNames.length; i++) {
                deregisterFns[eventNames[i]]();
            }
            instance.$listeners = null;
        }
    }
    function checkEventOptsSupport(elm) {
        var hasEventOptionsSupport = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    hasEventOptionsSupport = true;
                }
            });
            elm.addEventListener('test', null, opts);
        } catch (e) {}
        return hasEventOptionsSupport;
    }

    function themeVNodeData(instance, cssClassName) {
        var vnodeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var cssClasses = vnodeData['class'] = vnodeData['class'] || {};
        var mode = instance.mode;
        var color = instance.color;
        var cssClassNames = cssClassName.split(' ');
        for (var i = 0; i < cssClassNames.length; i++) {
            cssClasses[cssClassNames[i]] = true;
            if (mode) {
                cssClasses[cssClassNames[i] + '-' + mode] = true;
                if (color) {
                    cssClasses[cssClassNames[i] + '-' + color] = cssClasses[cssClassNames[i] + '-' + mode + '-' + color] = true;
                }
            }
        }
        return vnodeData;
    }
    function collectedHostContentNodes(elm, namedSlots) {
        var childNodes = elm.childNodes;
        if (!namedSlots) {
            return {
                $defaultSlot: Array.apply(null, childNodes)
            };
        }
        var hostContentNodes = {
            $defaultSlot: [],
            $namedSlots: {}
        };
        var namedSlotsLen = namedSlots.length;
        var hostNamedSlots = hostContentNodes.$namedSlots;
        for (var i = 0, ilen = childNodes.length; i < ilen; i++) {
            var namedNode = false;
            var childNode = childNodes[i];
            if (childNode.nodeType === 1) {
                // element node
                for (var j = 0; j < namedSlotsLen; j++) {
                    if (childNode.getAttribute('slot') === namedSlots[j]) {
                        (hostNamedSlots[namedSlots[j]] = hostNamedSlots[namedSlots[j]] || []).push(childNode);
                        namedNode = true;
                        break;
                    }
                }
            }
            if (!namedNode) {
                hostContentNodes.$defaultSlot.push(childNode);
            }
        }
        return hostContentNodes;
    }

    function initInjectedIonic(IonicGlb, win, doc) {
        if (typeof win.CustomEvent !== 'function') {
            // CustomEvent polyfill
            var CustomEvent = function (event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };

            CustomEvent.prototype = win.Event.prototype;
            win.CustomEvent = CustomEvent;
        }
        IonicGlb.controllers = {};
        IonicGlb.config = IonicGlb.ConfigCtrl;
        IonicGlb.dom = IonicGlb.DomCtrl;
        IonicGlb.theme = themeVNodeData;
        IonicGlb.emit = function (instance, eventName) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (data.bubbles === undefined) {
                data.bubbles = true;
            }
            if (data.composed === undefined) {
                // https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom#events
                data.composed = true;
            }
            if (IonicGlb.eventNameFn) {
                eventName = IonicGlb.eventNameFn(eventName);
            }
            instance && instance.$el && instance.$el.dispatchEvent(new win.CustomEvent(eventName, data));
        };
        IonicGlb.listener = {
            enable: enableListener,
            add: addEventListener
        };
        var modalCtrl = IonicGlb.modal = {
            // stub function to startup the modal viewport if it hasn't been
            // loaded already. This will queue up all the create calls, and when
            // the modal viewport loads it'll then create the modal(s). This stub
            // function  will get replaced by the real "create" fn once loaded.
            create: function (tag, data, opts) {
                return new Promise(function (resolve) {
                    // generate a _create array if one wasn't already created
                    // once the viewport loads, it'll loop through this array
                    (modalCtrl._create = modalCtrl._create || []).push(tag /*0*/, data /*1*/, opts /*2*/, resolve /*3:create.resolve*/);
                    // add the viewport if one wasn't already added (one could be loading still)
                    if (!doc.querySelector('ion-modal-portal')) {
                        doc.body.appendChild(doc.createElement('ion-modal-portal'));
                    }
                });
            }
        };
        return IonicGlb;
    }

    function parseComponentModeData(registry, moduleImports, cmpModeData) {
        var i = 0;
        var cmpListenerData;
        var cmpWatchData;
        // tag name (ion-badge)
        // get component meta data by tag name
        var cmpMeta = registry[cmpModeData[0]];
        // component methods
        cmpMeta.methods = cmpModeData[1];
        // component listeners
        if (cmpModeData[2]) {
            cmpMeta.listeners = [];
            for (i = 0; i < cmpModeData[2].length; i++) {
                cmpListenerData = cmpModeData[2][i];
                cmpMeta.listeners.push({
                    methodName: cmpListenerData[0],
                    eventName: cmpListenerData[1],
                    capture: !!cmpListenerData[2],
                    passive: !!cmpListenerData[3],
                    enabled: !!cmpListenerData[4]
                });
            }
        }
        // component instance property watchers
        if (cmpModeData[3]) {
            cmpMeta.watchers = [];
            for (i = 0; i < cmpModeData[3].length; i++) {
                cmpWatchData = cmpModeData[3][i];
                cmpMeta.watchers.push({
                    propName: cmpWatchData[0],
                    fn: cmpWatchData[1]
                });
            }
        }
        // shadow
        cmpMeta.shadow = !!cmpModeData[4];
        // mode name (ios, md, wp)
        // get component mode
        if (isString(cmpModeData[6])) {
            var cmpMode = cmpMeta.modes.find(function (m) {
                return m.modeName === parseModeName(cmpModeData[5].toString());
            });
            if (cmpMode) {
                // component mode styles
                cmpMode.styles = cmpModeData[6];
            }
        }
        // get the component class which was added to moduleImports
        // component class name (Badge)
        cmpMeta.componentModule = moduleImports[cmpModeData[0]];
    }
    function parseModeName(modeCode) {
        switch (modeCode) {
            case '0':
                return 'default';
            case '1':
                return 'ios';
            case '2':
                return 'md';
            case '3':
                return 'wp';
        }
        return modeCode;
    }
    function parseProp(propData) {
        var props = [{ propName: 'color' }, { propName: 'mode' }, { propName: 'id' }];
        if (propData) {
            for (var i = 0; i < propData.length; i++) {
                props.push({
                    propName: propData[i][0],
                    propType: propData[i][1]
                });
            }
        }
        return props;
    }

    function PlatformClient(win, doc, IonicGbl, NextTickCtrl) {
        var registry = {};
        var loadedBundles = {};
        var bundleCallbacks = {};
        var activeJsonRequests = {};
        var moduleImports = {};
        var hasNativeShadowDom = !(win.ShadyDOM && win.ShadyDOM.inUse);
        var injectedIonic = initInjectedIonic(IonicGbl, win, doc);
        IonicGbl.loadComponents = function loadComponents(coreVersion, bundleId, importFn) {
            coreVersion;
            var args = arguments;
            // import component function
            // inject ionic globals
            importFn(moduleImports, h, injectedIonic);
            for (var i = 3; i < args.length; i++) {
                // first arg is core version
                // second arg is the bundleId
                // third arg is the importFn
                // each arg after that is a component/mode
                parseComponentModeData(registry, moduleImports, args[i]);
                // fire off all the callbacks waiting on this bundle to load
                var callbacks = bundleCallbacks[bundleId];
                if (callbacks) {
                    for (var j = 0, jlen = callbacks.length; j < jlen; j++) {
                        callbacks[j]();
                    }
                    delete bundleCallbacks[bundleId];
                }
                // remember that we've already loaded this bundle
                loadedBundles[bundleId] = true;
            }
        };
        function loadBundle(bundleId, priority, cb) {
            if (loadedBundles[bundleId]) {
                // we've already loaded this bundle
                cb();
            } else {
                // never seen this bundle before, let's start the request
                // and add it to the bundle callbacks to fire when it's loaded
                if (bundleCallbacks[bundleId]) {
                    bundleCallbacks[bundleId].push(cb);
                } else {
                    bundleCallbacks[bundleId] = [cb];
                }
                // create the url we'll be requesting
                var url = IonicGbl.staticDir + 'bundles/ionic.' + bundleId + '.js';
                if (!activeJsonRequests[url]) {
                    // not already actively requesting this url
                    // let's kick off the request
                    // remember that we're now actively requesting this url
                    activeJsonRequests[url] = true;
                    if (priority === 'low') {
                        // low priority which means its ok to load this behind
                        // UI components, for example: gestures, menu
                        if ('requestIdleCallback' in win) {
                            // kick off the request in a requestIdleCallback
                            win.requestIdleCallback(function () {
                                jsonp(url);
                            }, { timeout: 2000 });
                        } else {
                            // no support for requestIdleCallback, so instead throw it
                            // in a setTimeout just so all the UI components kick in first
                            setTimeout(function () {
                                jsonp(url);
                            }, 600);
                        }
                    } else {
                        // high priority component (normal UI components)
                        jsonp(url);
                    }
                }
            }
        }
        function jsonp(url) {
            // create a sript element to add to the document.head
            var scriptElm = createElement('script');
            scriptElm.charset = 'utf-8';
            scriptElm.async = true;
            scriptElm.src = url;
            // create a fallback timeout if something goes wrong
            var tmrId = setTimeout(onScriptComplete, 120000);
            function onScriptComplete() {
                clearTimeout(tmrId);
                scriptElm.onerror = scriptElm.onload = null;
                scriptElm.parentNode.removeChild(scriptElm);
                // remove from our list of active requests
                delete activeJsonRequests[url];
            }
            // add script completed listener to this script element
            scriptElm.onerror = scriptElm.onload = onScriptComplete;
            // inject a script tag in the head
            // kick off the actual request
            doc.head.appendChild(scriptElm);
        }
        function attachComponent(elm, cmpMeta, instance) {
            if (cmpMeta.shadow) {
                // cool, this component should use shadow dom
                instance.$root = elm.attachShadow({ mode: 'open' });
            }
            // look up which component mode this instance should use
            // if a mode isn't found then check if there's a default
            var cmpMode = cmpMeta.modes.find(function (m) {
                return m.modeName === instance.mode || m.modeName === 'default';
            });
            if (cmpMode && cmpMode.styles) {
                // this component mode has styles
                var cmpStyles = cmpMode.styles;
                if (cmpMeta.shadow && hasNativeShadowDom) {
                    // this component uses the shadow dom
                    // and this browser supports the shadow dom natively
                    if (!cmpMode.styleElm) {
                        // we're doing this so the browser only needs to parse
                        // the HTML once, and can clone it every time after that
                        cmpMode.styleElm = createElement('style');
                        cmpMode.styleElm.innerHTML = cmpStyles;
                    }
                    // attach our styles to the root
                    instance.$root.appendChild(cmpMode.styleElm.cloneNode(true));
                } else {
                    // this component does not use the shadow dom
                    // or this browser does not support shadow dom
                    var cmpModeId = cmpMeta.tag + '.' + instance.mode;
                    // remove any :host and :host-context stuff which is
                    // invalid css for browsers that don't support shadow dom
                    cmpStyles = cmpStyles.replace(/\:host\-context\((.*?)\)|:host\((.*?)\)|\:host/g, '__h');
                    // climb up the ancestors looking to see if this element
                    // is within another component with a shadow root
                    var node = elm;
                    var hostRoot = doc.head;
                    var styleElm = void 0;
                    while (node = node.parentNode) {
                        if (node.host && node.host.shadowRoot) {
                            // this element is within another shadow root
                            // so instead of attaching the styles to the head
                            // we need to attach the styles to this shadow root
                            hostRoot = node.host.shadowRoot;
                            hostRoot.$css = hostRoot.$css || {};
                            if (!hostRoot.$css[cmpModeId]) {
                                // only attach the styles if we haven't already done so for this host element
                                hostRoot.$css[cmpModeId] = true;
                                styleElm = hostRoot.querySelector('style');
                                if (styleElm) {
                                    styleElm.innerHTML = cmpStyles + styleElm.innerHTML;
                                } else {
                                    styleElm = createElement('style');
                                    styleElm.innerHTML = cmpStyles;
                                    insertBefore(hostRoot, styleElm, hostRoot.firstChild);
                                }
                            }
                            // the styles are added to this shadow root, no need to continue
                            return;
                        }
                    }
                    // this component is not within a parent shadow root
                    // so attach the styles to document.head
                    hostRoot.$css = hostRoot.$css || {};
                    if (!hostRoot.$css[cmpModeId]) {
                        // only attach the styles if we haven't already done so for this host element
                        hostRoot.$css[cmpModeId] = true;
                        // add these styles to document.head
                        var styleEle = createElement('style');
                        styleEle.dataset['cmp'] = cmpModeId;
                        // we're replacing the :host and :host-context stuff because
                        // it's invalid css for browsers that don't support shadow dom
                        styleEle.innerHTML = cmpStyles;
                        appendChild(hostRoot, styleEle);
                    }
                }
            }
        }
        function registerComponent(tag, data) {
            // data[0] = all of the mode and bundle maps
            // data[1] = properties
            // data[2] = bundle priority
            var modeBundleIds = data[0];
            var cmpMeta = registry[tag] = {
                tag: tag,
                modes: [],
                props: parseProp(data[1]),
                obsAttrs: []
            };
            if (data[2] === 0) {
                // priority
                cmpMeta.priority = 'low';
            }
            var keys = Object.keys(modeBundleIds);
            for (var i = 0; i < keys.length; i++) {
                cmpMeta.modes.push({
                    modeName: parseModeName(keys[i].toString()),
                    bundleId: modeBundleIds[keys[i]]
                });
            }
            for (i = 0; i < cmpMeta.props.length; i++) {
                cmpMeta.obsAttrs.push(toDashCase(cmpMeta.props[i].propName));
            }
            return cmpMeta;
        }
        function getComponentMeta(tag) {
            return registry[tag];
        }
        function createElement(tagName) {
            return doc.createElement(tagName);
        }
        function createElementNS(namespaceURI, qualifiedName) {
            return doc.createElementNS(namespaceURI, qualifiedName);
        }
        function createTextNode(text) {
            return doc.createTextNode(text);
        }
        function createComment(text) {
            return doc.createComment(text);
        }
        function insertBefore(parentNode, newNode, referenceNode) {
            parentNode.insertBefore(newNode, referenceNode);
        }
        function removeChild(parentNode, childNode) {
            parentNode.removeChild(childNode);
        }
        function appendChild(parentNode, childNode) {
            parentNode.appendChild(childNode);
        }
        function parentNode(node) {
            return node.parentNode;
        }
        function nextSibling(node) {
            return node.nextSibling;
        }
        function tagName(elm) {
            return (elm.tagName || '').toLowerCase();
        }
        function setTextContent(node, text) {
            node.textContent = text;
        }
        function getTextContent(node) {
            return node.textContent;
        }
        function getAttribute(elm, attrName) {
            return elm.getAttribute(attrName);
        }
        function isElement(node) {
            return node.nodeType === 1;
        }
        function isText(node) {
            return node.nodeType === 3;
        }
        function isComment(node) {
            return node.nodeType === 8;
        }
        return {
            registerComponent: registerComponent,
            getComponentMeta: getComponentMeta,
            loadBundle: loadBundle,
            isElement: isElement,
            isText: isText,
            isComment: isComment,
            nextTick: NextTickCtrl.nextTick.bind(NextTickCtrl),
            $createElement: createElement,
            $createElementNS: createElementNS,
            $createTextNode: createTextNode,
            $createComment: createComment,
            $insertBefore: insertBefore,
            $removeChild: removeChild,
            $appendChild: appendChild,
            $parentNode: parentNode,
            $nextSibling: nextSibling,
            $tagName: tagName,
            $setTextContent: setTextContent,
            $getTextContent: getTextContent,
            $getAttribute: getAttribute,
            $attachComponent: attachComponent
        };
    }

    /**
     * Property Types
     */
    var BOOLEAN_TYPE_CODE = 0;
    var NUMBER_TYPE_CODE = 1;
    /**
     * Queue Priorities
     */

    var HIGH_PRIORITY = 1;

    function attributeChangedCallback(elm, cmpMeta, attrName, oldVal, newVal) {
        if (oldVal !== newVal) {
            var propName = toCamelCase(attrName);
            var prop = cmpMeta.props.find(function (p) {
                return p.propName === propName;
            });
            if (prop) {
                if (prop.propType === BOOLEAN_TYPE_CODE) {
                    elm[propName] = newVal === null || newVal === 'false' ? false : true;
                } else if (prop.propType === NUMBER_TYPE_CODE) {
                    elm[propName] = parseFloat(newVal);
                } else {
                    elm[propName] = newVal;
                }
            }
        }
    }

    function initProxy(plt, config, renderer, elm, tag, instance, props, methods, watchers) {
        var i = 0;
        if (methods) {
            for (i = 0; i < methods.length; i++) {
                initMethod(methods[i], elm, instance);
            }
        }
        instance.$values = {};
        for (i = 0; i < props.length; i++) {
            initProp(props[i].propName, props[i].propType, plt, config, renderer, elm, tag, instance, watchers);
        }
    }
    function initMethod(methodName, elm, instance) {
        // dom's element instance
        Object.defineProperty(elm, methodName, {
            configurable: true,
            value: instance[methodName].bind(instance)
        });
    }
    function initProp(propName, propType, plt, config, renderer, elm, tag, instance, watchers) {
        instance.$values[propName] = getInitialValue(config, elm, instance, propType, propName);
        if (watchers) {
            for (var i = 0; i < watchers.length; i++) {
                if (watchers[i].propName === propName) {
                    (instance.$watchers = instance.$watchers || []).push(instance[watchers[i].fn].bind(instance));
                }
            }
        }
        function getPropValue() {
            return instance.$values[propName];
        }
        function setPropValue(value) {
            if (instance.$values[propName] !== value) {
                instance.$values[propName] = value;
                if (instance.$watchers) {
                    for (var i = 0; i < instance.$watchers.length; i++) {
                        instance.$watchers[i](value);
                    }
                }
                queueUpdate(plt, config, renderer, elm, tag);
            }
        }
        // dom's element instance
        Object.defineProperty(elm, propName, {
            configurable: true,
            get: getPropValue,
            set: setPropValue
        });
        // user's component class instance
        Object.defineProperty(instance, propName, {
            configurable: true,
            get: getPropValue,
            set: setPropValue
        });
    }
    function getInitialValue(config, elm, instance, propTypeCode, propName) {
        if (elm[propName] !== undefined) {
            return elm[propName];
        }
        if (instance[propName] !== undefined) {
            return instance[propName];
        }
        if (propTypeCode === BOOLEAN_TYPE_CODE) {
            return config.getBoolean(propName);
        }
        if (propTypeCode === NUMBER_TYPE_CODE) {
            return config.getNumber(propName);
        }
        return config.get(propName);
    }

    function queueUpdate(plt, config, renderer, elm, tag) {
        // only run patch if it isn't queued already
        if (!elm.$queued) {
            elm.$queued = true;
            // run the patch in the next tick
            plt.nextTick(function queueUpdateNextTick() {
                // vdom diff and patch the host element for differences
                update(plt, config, renderer, elm, tag);
                // no longer queued
                elm.$queued = false;
            });
        }
    }
    function update(plt, config, renderer, elm, tag) {
        var cmpMeta = plt.getComponentMeta(tag);
        var initalLoad = false;
        var instance = elm.$instance;
        if (!instance) {
            instance = elm.$instance = new cmpMeta.componentModule();
            instance.$el = elm;
            instance.$meta = cmpMeta;
            initProxy(plt, config, renderer, elm, tag, instance, cmpMeta.props, cmpMeta.methods, cmpMeta.watchers);
            plt.$attachComponent(elm, cmpMeta, instance);
            initalLoad = true;
            if (!cmpMeta.shadow && instance.render) {
                // this component is not using shadow dom
                // and it does have a render function
                // collect up the host content nodes so we can
                // manually move them around to the correct slot
                if (cmpMeta.tag === 'ion-item' || cmpMeta.tag === 'ion-item-divider') {
                    // TODO!!
                    cmpMeta.namedSlots = ['start', 'end'];
                }
                elm.$hostContent = collectedHostContentNodes(elm, cmpMeta.namedSlots);
            }
        }
        var vnode = instance.render && instance.render();
        if (vnode) {
            vnode.elm = elm;
            delete vnode.sel;
            instance.$vnode = renderer(instance.$vnode ? instance.$vnode : elm, vnode, elm.$hostContent);
        }
        if (initalLoad) {
            cmpMeta.listeners && attachListeners(cmpMeta.listeners, instance);
            instance.ionViewDidLoad && instance.ionViewDidLoad();
        }
    }

    function connectedCallback(plt, config, renderer, elm, cmpMeta) {
        if (!elm.$tmpDisconnected) {
            plt.nextTick(function () {
                var tag = cmpMeta.tag;
                // console.log(elm.nodeName, 'connectedCallback nextTick');
                var cmpMode = cmpMeta.modes.find(function (m) {
                    return m.modeName === getMode(plt, config, elm, 'mode') || m.modeName === 'default';
                });
                plt.loadBundle(cmpMode.bundleId, cmpMeta.priority, function loadComponentCallback() {
                    queueUpdate(plt, config, renderer, elm, tag);
                });
            });
        }
    }
    function getMode(plt, config, elm, propName) {
        var value = elm[propName];
        if (isDef(value)) {
            return value;
        }
        value = plt.$getAttribute(elm, propName);
        if (isDef(value)) {
            return value;
        }
        return config.get(propName, 'md');
    }

    var booleanAttrs = ['allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'disabled', 'draggable', 'enabled', 'formnovalidate', 'hidden', 'multiple', 'noresize', 'readonly', 'required', 'selected', 'spellcheck'];
    var xlinkNS = 'http://www.w3.org/1999/xlink';
    var xmlNS = 'http://www.w3.org/XML/1998/namespace';
    var booleanAttrsDict = Object.create(null);
    for (var i = 0, len = booleanAttrs.length; i < len; i++) {
        booleanAttrsDict[booleanAttrs[i]] = true;
    }
    function updateAttrs(oldVnode, vnode) {
        var key,
            cur,
            old,
            elm = vnode.elm,
            oldAttrs = oldVnode.vdata.attrs,
            attrs = vnode.vdata.attrs;
        if (!oldAttrs && !attrs) return;
        if (oldAttrs === attrs) return;
        oldAttrs = oldAttrs || {};
        attrs = attrs || {};
        // update modified attributes, add new attributes
        for (key in attrs) {
            cur = attrs[key];
            old = oldAttrs[key];
            if (old !== cur) {
                if (booleanAttrsDict[key]) {
                    if (cur) {
                        elm.setAttribute(key, '');
                    } else {
                        elm.removeAttribute(key);
                    }
                } else {
                    if (key.charCodeAt(0) !== 120) {
                        elm.setAttribute(key, cur);
                    } else if (key.charCodeAt(3) === 58) {
                        // Assume xml namespace
                        elm.setAttributeNS(xmlNS, key, cur);
                    } else if (key.charCodeAt(5) === 58) {
                        // Assume xlink namespace
                        elm.setAttributeNS(xlinkNS, key, cur);
                    } else {
                        elm.setAttribute(key, cur);
                    }
                }
            }
        }
        // remove removed attributes
        // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
        // the other option is to remove all attributes with value == undefined
        for (key in oldAttrs) {
            if (!(key in attrs)) {
                elm.removeAttribute(key);
            }
        }
    }

    function updateClass(oldVnode, vnode) {
        // ['class'] bracket notation for closure advanced
        var cur,
            name,
            elm = vnode.elm,
            oldClass = oldVnode.vdata['class'],
            klass = vnode.vdata['class'];
        if (!oldClass && !klass) return;
        if (oldClass === klass) return;
        oldClass = oldClass || {};
        klass = klass || {};
        for (name in oldClass) {
            if (!klass[name]) {
                elm.classList.remove(name);
            }
        }
        for (name in klass) {
            cur = klass[name];
            if (cur !== oldClass[name]) {
                elm.classList[cur ? 'add' : 'remove'](name);
            }
        }
    }

    var raf = typeof window !== 'undefined' && window.requestAnimationFrame || setTimeout;
    var nextFrame = function (fn) {
        raf(function () {
            raf(fn);
        });
    };
    function setNextFrame(obj, prop, val) {
        nextFrame(function () {
            obj[prop] = val;
        });
    }
    function updateStyle(oldVnode, vnode) {
        var cur,
            name,
            elm = vnode.elm,
            oldStyle = oldVnode.vdata.style,
            style = vnode.vdata.style;
        if (!oldStyle && !style) return;
        if (oldStyle === style) return;
        oldStyle = oldStyle || {};
        style = style || {};
        var oldHasDel = 'delayed' in oldStyle;
        for (name in oldStyle) {
            if (!style[name]) {
                if (name[0] === '-' && name[1] === '-') {
                    elm.style.removeProperty(name);
                } else {
                    elm.style[name] = '';
                }
            }
        }
        for (name in style) {
            cur = style[name];
            if (name === 'delayed') {
                for (name in style.delayed) {
                    cur = style.delayed[name];
                    if (!oldHasDel || cur !== oldStyle.delayed[name]) {
                        setNextFrame(elm.style, name, cur);
                    }
                }
            } else if (name !== 'remove' && cur !== oldStyle[name]) {
                if (name[0] === '-' && name[1] === '-') {
                    elm.style.setProperty(name, cur);
                } else {
                    elm.style[name] = cur;
                }
            }
        }
    }

    function invokeHandler(handler, vnode, event) {
        if (isFunction(handler)) {
            // call function handler
            handler.call(vnode, event, vnode);
        } else if (isObject(handler)) {
            // call handler with arguments
            if (isFunction(handler[0])) {
                // special case for single argument for performance
                if (handler.length === 2) {
                    handler[0].call(vnode, handler[1], event, vnode);
                } else {
                    var args = handler.slice(1);
                    args.push(event);
                    args.push(vnode);
                    handler[0].apply(vnode, args);
                }
            } else {
                // call multiple handlers
                for (var i = 0; i < handler.length; i++) {
                    invokeHandler(handler[i]);
                }
            }
        }
        var proxyElm = vnode.elm;
        while (proxyElm) {
            if (proxyElm.$queueUpdate) {
                proxyElm.$queueUpdate(HIGH_PRIORITY);
                break;
            }
            proxyElm = proxyElm.parentElement;
        }
    }
    function handleEvent(event, vnode) {
        var name = event.type,
            on = vnode.vdata.on;
        // call event handler(s) if exists
        if (on && on[name]) {
            invokeHandler(on[name], vnode, event);
        }
    }
    function createListener() {
        return function handler(event) {
            handleEvent(event, handler.vnode);
        };
    }
    function updateEventListeners(oldVnode, vnode) {
        var oldOn = oldVnode.vdata.on,
            oldListener = oldVnode.listener,
            oldElm = oldVnode.elm,
            on = vnode && vnode.vdata.on,
            elm = vnode && vnode.elm,
            name;
        // optimization for reused immutable handlers
        if (oldOn === on) {
            return;
        }
        // remove existing listeners which no longer used
        if (oldOn && oldListener) {
            // if element changed or deleted we remove all existing listeners unconditionally
            if (!on) {
                for (name in oldOn) {
                    // remove listener if element was changed or existing listeners removed
                    oldElm.removeEventListener(name, oldListener, false);
                }
            } else {
                for (name in oldOn) {
                    // remove listener if existing listener removed
                    if (!on[name]) {
                        oldElm.removeEventListener(name, oldListener, false);
                    }
                }
            }
        }
        // add new listeners which has not already attached
        if (on) {
            // reuse existing listener or create new
            var listener = vnode.listener = oldVnode.listener || createListener();
            // update vnode for listener
            listener.vnode = vnode;
            // if element changed or added we add all needed listeners unconditionally
            if (!oldOn) {
                for (name in on) {
                    // add listener if element was changed or new listeners added
                    elm.addEventListener(name, listener, false);
                }
            } else {
                for (name in on) {
                    // add listener if new listener added
                    if (!oldOn[name]) {
                        elm.addEventListener(name, listener, false);
                    }
                }
            }
        }
    }

    function updateProps(oldVnode, vnode) {
        var key,
            cur,
            old,
            elm = vnode.elm,
            oldProps = oldVnode.vdata.props,
            props = vnode.vdata.props;
        if (!oldProps && !props || oldProps === props) return;
        oldProps = oldProps || {};
        props = props || {};
        for (key in oldProps) {
            if (props[key] === undefined) {
                // only delete the old property when the
                // new property is undefined, otherwise we'll
                // end up deleting getters/setters
                delete elm[key];
            }
        }
        for (key in props) {
            cur = props[key];
            old = oldProps[key];
            if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
                elm[key] = cur;
            }
        }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
     *
     * Modified for Ionic's Web Component Renderer
     * /
    
    
    /* global module, document, Node */
    var emptyNode = vnode('', {}, [], undefined, undefined);
    function sameVnode(vnode1, vnode2) {
        return vnode1.vkey === vnode2.vkey && vnode1.sel === vnode2.sel;
    }
    function isVnode(vnode$$1) {
        return vnode$$1.sel !== undefined || vnode$$1.elm !== undefined;
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i = void 0,
            map = {},
            key = void 0,
            ch = void 0;
        for (i = beginIdx; i <= endIdx; ++i) {
            ch = children[i];
            if (ch != null) {
                key = ch.vkey;
                if (key !== undefined) map[key] = i;
            }
        }
        return map;
    }
    function Renderer(api) {
        function emptyNodeAt(elm) {
            var id = elm.id ? '#' + elm.id : '';
            var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
            return vnode(api.$tagName(elm) + id + c, {}, [], undefined, elm);
        }
        function createRmCb(childElm) {
            return function rmCb() {
                var parent = api.$parentNode(childElm);
                api.$removeChild(parent, childElm);
            };
        }
        function createElm(vnode$$1, insertedVnodeQueue, parentElm, hostContentNodes) {
            var i = void 0,
                data = vnode$$1.vdata;
            if (data !== undefined) {
                if (isDef(i = data.hook) && isDef(i = i.init)) {
                    i(vnode$$1);
                    data = vnode$$1.vdata;
                }
            }
            var children = vnode$$1.vchildren,
                sel = vnode$$1.sel;
            if (sel === '!') {
                if (isUndef(vnode$$1.vtext)) {
                    vnode$$1.vtext = '';
                }
                vnode$$1.elm = api.$createComment(vnode$$1.vtext);
            } else if (hostContentNodes && sel === 'slot') {
                // special case for manually relocating host content nodes
                // there their new home in either a named slot or the default slot
                var namedSlot = data.attrs && data.attrs.name;
                var slotNodes = void 0;
                if (namedSlot) {
                    slotNodes = hostContentNodes.$namedSlots && hostContentNodes.$namedSlots[namedSlot];
                } else {
                    slotNodes = hostContentNodes.$defaultSlot;
                }
                if (slotNodes) {
                    for (var nodeIndex = 0; nodeIndex < slotNodes.length; nodeIndex++) {
                        // remove the host content node from it's original parent node
                        slotNodes[nodeIndex].$tmpDisconnected = true;
                        api.$removeChild(slotNodes[nodeIndex].parentNode, slotNodes[nodeIndex]);
                        if (nodeIndex === slotNodes.length - 1) {
                            // return the last node that gets appended
                            // like any other Node that was created
                            return slotNodes[nodeIndex];
                        }
                        // relocate the node to it's new home
                        api.$appendChild(parentElm, slotNodes[nodeIndex]);
                        delete slotNodes[nodeIndex].$tmpDisconnect;
                    }
                }
            } else if (sel !== undefined) {
                // Parse selector
                var hashIdx = sel.indexOf('#');
                var dotIdx = sel.indexOf('.', hashIdx);
                var hash = hashIdx > 0 ? hashIdx : sel.length;
                var dot = dotIdx > 0 ? dotIdx : sel.length;
                var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
                var elm = vnode$$1.elm = isDef(data) && isDef(i = data.ns) ? api.$createElementNS(i, tag) : api.$createElement(tag);
                if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot));
                if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
                updateAttrs(emptyNode, vnode$$1);
                updateClass(emptyNode, vnode$$1);
                updateStyle(emptyNode, vnode$$1);
                updateEventListeners(emptyNode, vnode$$1);
                updateProps(emptyNode, vnode$$1);
                data.ref && data.ref(elm);
                if (isArray(children)) {
                    for (i = 0; i < children.length; ++i) {
                        var ch = children[i];
                        if (ch != null) {
                            ch = createElm(ch, insertedVnodeQueue, elm, hostContentNodes);
                            if (ch) {
                                api.$appendChild(elm, ch);
                            }
                        }
                    }
                } else if (isStringOrNumber(vnode$$1.vtext)) {
                    api.$appendChild(elm, api.$createTextNode(vnode$$1.vtext));
                }
                i = vnode$$1.vdata.hook; // Reuse variable
                if (isDef(i)) {
                    if (i.create) i.create(emptyNode, vnode$$1);
                    if (i.insert) insertedVnodeQueue.push(vnode$$1);
                }
            } else {
                vnode$$1.elm = api.$createTextNode(vnode$$1.vtext);
            }
            return vnode$$1.elm;
        }
        function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue, hostContentNodes) {
            for (; startIdx <= endIdx; ++startIdx) {
                var ch = vnodes[startIdx];
                if (ch != null) {
                    api.$insertBefore(parentElm, createElm(ch, insertedVnodeQueue, parentElm, hostContentNodes), before);
                }
            }
        }
        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
                var _i = void 0,
                    rm = void 0,
                    ch = vnodes[startIdx];
                if (ch != null) {
                    if (isDef(ch.sel)) {
                        invokeDestroyHook(ch);
                        rm = createRmCb(ch.elm);
                        if (isDef(_i = ch.vdata) && isDef(_i = _i.hook) && isDef(_i = _i.remove)) {
                            _i(ch, rm);
                        } else {
                            rm();
                        }
                    } else {
                        api.$removeChild(parentElm, ch.elm);
                    }
                }
            }
        }
        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, hostContentNodes) {
            var oldStartIdx = 0,
                newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx = void 0;
            var idxInOld = void 0;
            var elmToMove = void 0;
            var before = void 0;
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (oldStartVnode == null) {
                    oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
                } else if (oldEndVnode == null) {
                    oldEndVnode = oldCh[--oldEndIdx];
                } else if (newStartVnode == null) {
                    newStartVnode = newCh[++newStartIdx];
                } else if (newEndVnode == null) {
                    newEndVnode = newCh[--newEndIdx];
                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, hostContentNodes);
                    oldStartVnode = oldCh[++oldStartIdx];
                    newStartVnode = newCh[++newStartIdx];
                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, hostContentNodes);
                    oldEndVnode = oldCh[--oldEndIdx];
                    newEndVnode = newCh[--newEndIdx];
                } else if (sameVnode(oldStartVnode, newEndVnode)) {
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, hostContentNodes);
                    api.$insertBefore(parentElm, oldStartVnode.elm, api.$nextSibling(oldEndVnode.elm));
                    oldStartVnode = oldCh[++oldStartIdx];
                    newEndVnode = newCh[--newEndIdx];
                } else if (sameVnode(oldEndVnode, newStartVnode)) {
                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, hostContentNodes);
                    api.$insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                    oldEndVnode = oldCh[--oldEndIdx];
                    newStartVnode = newCh[++newStartIdx];
                } else {
                    if (oldKeyToIdx === undefined) {
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                    }
                    idxInOld = oldKeyToIdx[newStartVnode.vkey];
                    if (isUndef(idxInOld)) {
                        api.$insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue, parentElm, hostContentNodes), oldStartVnode.elm);
                        newStartVnode = newCh[++newStartIdx];
                    } else {
                        elmToMove = oldCh[idxInOld];
                        if (elmToMove.sel !== newStartVnode.sel) {
                            api.$insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue, parentElm, hostContentNodes), oldStartVnode.elm);
                        } else {
                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue, hostContentNodes);
                            oldCh[idxInOld] = undefined;
                            api.$insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                        }
                        newStartVnode = newCh[++newStartIdx];
                    }
                }
            }
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue, hostContentNodes);
            } else if (newStartIdx > newEndIdx) {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
        }
        function patchVnode(oldVnode, vnode$$1, insertedVnodeQueue, hostContentNodes) {
            if (!hostContentNodes && oldVnode.sel === 'slot') {
                return;
            }
            var i = void 0,
                hook = void 0;
            if (isDef(i = vnode$$1.vdata) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
                i(oldVnode, vnode$$1);
            }
            var elm = vnode$$1.elm = oldVnode.elm;
            var oldCh = oldVnode.vchildren;
            var ch = vnode$$1.vchildren;
            if (oldVnode === vnode$$1) return;
            if (vnode$$1.vdata !== undefined) {
                updateAttrs(oldVnode, vnode$$1);
                updateClass(oldVnode, vnode$$1);
                updateStyle(emptyNode, vnode$$1);
                updateEventListeners(oldVnode, vnode$$1);
                updateProps(oldVnode, vnode$$1);
                i = vnode$$1.vdata.hook;
                if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode$$1);
            }
            if (isUndef(vnode$$1.vtext)) {
                if (isDef(oldCh) && isDef(ch)) {
                    if (oldCh !== ch) {
                        updateChildren(elm.shadowRoot || elm, oldCh, ch, insertedVnodeQueue, hostContentNodes);
                    }
                } else if (isDef(ch)) {
                    if (isDef(oldVnode.vtext)) api.$setTextContent(elm, '');
                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue, null);
                } else if (isDef(oldCh)) {
                    removeVnodes(elm, oldCh, 0, oldCh.length - 1);
                } else if (isDef(oldVnode.vtext)) {
                    api.$setTextContent(elm, '');
                }
            } else if (oldVnode.vtext !== vnode$$1.vtext) {
                api.$setTextContent(elm, vnode$$1.vtext);
            }
            if (isDef(hook) && isDef(i = hook.postpatch)) {
                i(oldVnode, vnode$$1);
            }
        }
        return function patch(oldVnode, vnode$$1, hostContentNodes) {
            var elm = void 0,
                parent = void 0;
            var insertedVnodeQueue = [];
            if (!isVnode(oldVnode)) {
                oldVnode = emptyNodeAt(oldVnode);
            }
            if (vnode$$1.elm || sameVnode(oldVnode, vnode$$1)) {
                patchVnode(oldVnode, vnode$$1, insertedVnodeQueue, hostContentNodes);
            } else {
                elm = oldVnode.elm;
                parent = api.$parentNode(elm);
                createElm(vnode$$1, insertedVnodeQueue, parent, hostContentNodes);
                if (parent !== null) {
                    api.$insertBefore(parent, vnode$$1.elm, api.$nextSibling(elm));
                    removeVnodes(parent, [oldVnode], 0, 0);
                }
            }
            return vnode$$1;
        };
    }
    function invokeDestroyHook(vnode$$1) {
        var i = void 0,
            j = void 0,
            data = vnode$$1.vdata;
        if (data !== undefined) {
            updateEventListeners(vnode$$1);
            if (vnode$$1.vchildren !== undefined) {
                for (j = 0; j < vnode$$1.vchildren.length; ++j) {
                    i = vnode$$1.vchildren[j];
                    if (i != null && !isString(i)) {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }

    function disconnectedCallback(elm) {
        if (elm && !elm.$tmpDisconnected) {
            var instance = elm.$instance;
            if (instance) {
                instance.ionViewWillUnload && instance.ionViewWillUnload();
                detachListeners(instance);
                instance.$vnode && invokeDestroyHook(instance.$vnode);
                elm.$instance = elm.$hostContent = instance.$el = instance.$meta = instance.$root = instance.$vnode = instance.$watchers = instance.$values = null;
            }
        }
    }

    function registerComponentsES5(window, renderer, plt, config, components) {
        Object.keys(components || {}).forEach(function (tag) {
            var cmpMeta = plt.registerComponent(tag, components[tag]);
            function ProxyElement(self) {
                return HTMLElement.call(this, self);
            }
            ProxyElement.prototype = Object.create(HTMLElement.prototype, {
                constructor: { value: ProxyElement, configurable: true },
                connectedCallback: { configurable: true, value: function () {
                        connectedCallback(plt, config, renderer, this, cmpMeta);
                    }
                },
                attributeChangedCallback: { configurable: true, value: function (attrName, oldVal, newVal) {
                        attributeChangedCallback(this, cmpMeta, attrName, oldVal, newVal);
                    }
                },
                disconnectedCallback: { configurable: true, value: function () {
                        disconnectedCallback(this);
                    }
                }
            });
            ProxyElement.observedAttributes = cmpMeta.obsAttrs;
            window.customElements.define(tag, ProxyElement);
        });
    }

    function detectPlatforms(url, userAgent, platforms, defaultPlatform) {
        // bracket notation to ensure they're not property renamed
        var validPlatforms = platforms.filter(function (p) {
            return p['isMatch'] && p['isMatch'](url, userAgent);
        });
        if (!validPlatforms.length) {
            validPlatforms = platforms.filter(function (p) {
                return p['name'] === defaultPlatform;
            });
        }
        return validPlatforms;
    }
    function isPlatformMatch(url, userAgent, platformName, userAgentAtLeastHas, userAgentMustNotHave) {
        var queryValue = queryParam(url, 'ionicplatform');
        if (queryValue) {
            return queryValue === platformName;
        }
        userAgent = userAgent.toLowerCase();
        for (var i = 0; i < userAgentAtLeastHas.length; i++) {
            if (userAgent.indexOf(userAgentAtLeastHas[i]) > -1) {
                for (var j = 0; j < userAgentMustNotHave.length; j++) {
                    if (userAgent.indexOf(userAgentMustNotHave[j]) > -1) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
    function queryParam(url, key) {
        key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
        var results = regex.exec(url);
        return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
    }

    var IPAD = 'ipad';
    var IPHONE = 'iphone';
    var WINDOWS_PHONE = 'windows phone';
    // order from most specifc to least specific
    var PLATFORM_CONFIGS = [{
        'name': IPAD,
        'settings': {
            'keyboardHeight': 500
        },
        'isMatch': function (url, userAgent) {
            return isPlatformMatch(url, userAgent, IPAD, [IPAD], [WINDOWS_PHONE]);
        }
    }, {
        'name': IPHONE,
        'isMatch': function (url, userAgent) {
            return isPlatformMatch(url, userAgent, IPHONE, [IPHONE], [WINDOWS_PHONE]);
        }
    }, {
        'name': 'ios',
        'settings': {
            'autoFocusAssist': 'delay',
            'hoverCSS': false,
            'inputBlurring': true,
            'inputCloning': true,
            'keyboardHeight': 300,
            'mode': 'ios',
            'scrollAssist': true,
            'statusbarPadding': false,
            'swipeBackEnabled': true,
            'tapPolyfill': false,
            'virtualScrollEventAssist': false,
            'disableScrollAssist': true
        },
        'isMatch': function (url, userAgent) {
            return isPlatformMatch(url, userAgent, 'ios', [IPHONE, IPAD, 'ipod'], [WINDOWS_PHONE]);
        }
    }, {
        'name': 'android',
        'settings': {
            'activator': 'ripple',
            'autoFocusAssist': 'immediate',
            'inputCloning': true,
            'scrollAssist': true,
            'hoverCSS': false,
            'keyboardHeight': 300,
            'mode': 'md'
        },
        'isMatch': function (url, userAgent) {
            return isPlatformMatch(url, userAgent, 'android', ['android', 'silk'], [WINDOWS_PHONE]);
        }
    }, {
        'name': 'windows',
        'settings': {
            'mode': 'wp',
            'autoFocusAssist': 'immediate',
            'hoverCSS': false
        },
        'isMatch': function (url, userAgent) {
            return isPlatformMatch(url, userAgent, 'windows', [WINDOWS_PHONE], []);
        }
    }, {
        'name': 'core',
        'settings': {
            'mode': 'md',
            'keyboardHeight': 290
        }
    }];

    var IonicGbl = window.Ionic = window.Ionic || {};
    IonicGbl.DomCtrl = DomClient(window);
    IonicGbl.NextTickCtrl = NextTickClient(window);
    IonicGbl.ConfigCtrl = ConfigController(IonicGbl.config, detectPlatforms(window.location.href, window.navigator.userAgent, PLATFORM_CONFIGS, 'core'));
    var plt = PlatformClient(window, window.document, IonicGbl, IonicGbl.NextTickCtrl);
    registerComponentsES5(window, Renderer(plt), plt, IonicGbl.ConfigCtrl, IonicGbl.components);
})(window);