!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(10),e.exports=n(8)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,a,i,s=[];for(i=arguments.length;i-- >2;)V.push(arguments[i]);for(n&&n.children&&(V.length||V.push(n.children),delete n.children);V.length;)if((o=V.pop())instanceof Array)for(i=o.length;i--;)V.push(o[i]);else null!=o&&o!==!1&&("number"!=typeof o&&o!==!0||(o=String(o)),a="string"==typeof o,a&&r?s[s.length-1]+=o:(s.push(o),r=a));var u=new t(e,n||void 0,s);return W.vnode&&W.vnode(u),u}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function a(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function i(e){return"function"==typeof e}function s(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function l(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var r=t.split(".");return function(t){for(var o=t&&t.target||this,i={},u=i,l=s(n)?a(t,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:t,c=0;c<r.length-1;c++)u=u[r[c]]||(u[r[c]]=!c&&e.state[r[c]]||{});u[r[c]]=l,e.setState(i)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==q.push(e)&&(W.debounceRendering||z)(p)}function p(){var e,t=q;for(q=[];e=t.pop();)e._dirty&&R(e)}function d(e){var t=e&&e.nodeName;return t&&i(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(v(e),t||G)}function _(e,t){return s(t)?e instanceof Text:s(t.nodeName)?!e._componentConstructor&&m(e,t.nodeName):i(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||d(t):void 0}function m(e,t){return e.normalizedNodeName===t||H(e.nodeName)===H(t)}function v(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=u(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||s(r)||s(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!s(n))for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"!=typeof r[a]||Q[a]?r[a]:r[a]+"px"}}else if("dangerouslySetInnerHTML"===t)e.innerHTML=r&&r.__html||"";else if("o"==t[0]&&"n"==t[1]){var l=e._listeners||(e._listeners={});t=H(t.substring(2)),r?l[t]||e.addEventListener(t,x,!!Y[t]):l[t]&&e.removeEventListener(t,x,!!Y[t]),l[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)g(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var c=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",H(c[1])):e.removeAttribute(t):"object"==typeof r||i(r)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",H(c[1]),r):e.setAttribute(t,r))}else e.className=r||""}function g(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function N(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||H(e.nodeName);(K[t]||(K[t]=[])).push(e)}}function C(e,t){var n=H(e),r=K[n]&&K[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function k(){for(var e;e=X.pop();)W.afterMount&&W.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,r,o,a){Z++||(J=o instanceof SVGElement,$=e&&!(F in e));var i=S(e,t,n,r);return o&&i.parentNode!==o&&o.appendChild(i),--Z||($=!1,a||k()),i}function S(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),s(t))return e&&e instanceof Text?e.nodeValue!=t&&(e.nodeValue=t):(e&&P(e),e=document.createTextNode(t)),e[F]=!0,e;if(i(t.nodeName))return U(e,t,n,r);var a=e,u=String(t.nodeName),l=J,c=t.children;if(J="svg"===u||"foreignObject"!==u&&J,e){if(!m(e,u)){for(a=C(u,J);e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),P(e)}}else a=C(u,J);var f=a.firstChild,p=a[F];if(!p){a[F]=p={};for(var _=a.attributes,v=_.length;v--;)p[_[v].name]=_[v].value}return T(a,t.attributes,p),!$&&c&&1===c.length&&"string"==typeof c[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=c[0]&&(f.nodeValue=c[0]):(c&&c.length||f)&&O(a,c,n,r),o&&"function"==typeof o.ref&&(p.ref=o.ref)(a),J=l,a}function O(e,t,n,r){var o,a,i,s,u=e.childNodes,l=[],c={},f=0,p=0,d=u.length,h=0,m=t&&t.length;if(d)for(var v=0;v<d;v++){var b=u[v],g=b[F],x=m?(a=b._component)?a.__key:g?g.key:null:null;null!=x?(f++,c[x]=b):($||g)&&(l[h++]=b)}if(m)for(var v=0;v<m;v++){i=t[v],s=null;var x=i.key;if(null!=x)f&&x in c&&(s=c[x],c[x]=void 0,f--);else if(!s&&p<h)for(o=p;o<h;o++)if(a=l[o],a&&_(a,i)){s=a,l[o]=void 0,o===h-1&&h--,o===p&&p++;break}s=S(s,i,n,r),s&&s!==e&&(v>=d?e.appendChild(s):s!==u[v]&&(s===u[v+1]&&y(u[v]),e.insertBefore(s,u[v]||null)))}if(f)for(var v in c)c[v]&&P(c[v]);for(;p<=h;)s=l[h--],s&&P(s)}function P(e,t){var n=e._component;if(n)I(n,!t);else{e[F]&&e[F].ref&&e[F].ref(null),t||N(e);for(var r;r=e.lastChild;)P(r,t)}}function T(e,t,n){for(var r in n)t&&r in t||null==n[r]||b(e,r,n[r],n[r]=void 0,J);if(t)for(var o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||b(e,o,n[o],n[o]=t[o],J)}function j(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function M(e,t,n){var r=new e(t,n),o=ee[e.name];if(B.call(r,t,n),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.nextBase=o[a].nextBase,o.splice(a,1);break}return r}function E(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&W.syncComponentUpdates===!1&&e.base?f(e):R(e,1,o)),e.__ref&&e.__ref(e))}function R(e,t,n,a){if(!e._disable){var s,u,l,c,f=e.props,p=e.state,_=e.context,m=e.prevProps||f,y=e.prevState||p,b=e.prevContext||_,g=e.base,x=e.nextBase,N=g||x,C=e._component;if(g&&(e.props=m,e.state=y,e.context=b,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,_)===!1?s=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,_),e.props=f,e.state=p,e.context=_),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(u=e.render(f,p,_)),e.getChildContext&&(_=r(o(_),e.getChildContext()));d(u);)u=h(u,_);var S,O,T=u&&u.nodeName;if(i(T)){var j=v(u);l=C,l&&l.constructor===T&&j.key==l.__key?E(l,j,1,_):(S=l,l=M(T,j,_),l.nextBase=l.nextBase||x,l._parentComponent=e,e._component=l,E(l,j,0,_),R(l,1,n,!0)),O=l.base}else c=N,S=C,S&&(c=e._component=null),(N||1===t)&&(c&&(c._component=null),O=w(c,u,_,n||!g,N&&N.parentNode,!0));if(N&&O!==N&&l!==C){var U=N.parentNode;U&&O!==U&&(U.replaceChild(O,N),S||(N._component=null,P(N)))}if(S&&I(S,O!==N),e.base=O,O&&!a){for(var B=e,D=e;D=D._parentComponent;)(B=D).base=O;O._component=B,O._componentConstructor=B.constructor}}!g||n?X.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(m,y,b),W.afterUpdate&&W.afterUpdate(e));var V,A=e._renderCallbacks;if(A)for(;V=A.pop();)V.call(e);Z||a||k()}}function U(e,t,n,r){for(var o=e&&e._component,a=e,i=o&&e._componentConstructor===t.nodeName,s=i,u=v(t);o&&!s&&(o=o._parentComponent);)s=o.constructor===t.nodeName;return o&&s&&(!r||o._component)?(E(o,u,3,n,r),e=o.base):(o&&!i&&(I(o,!0),e=a=null),o=M(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,a=null),E(o,u,1,n,r),e=o.base,a&&e!==a&&(a._component=null,P(a))),e}function I(e,t){W.beforeUnmount&&W.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;if(r)I(r,t);else if(n){n[F]&&n[F].ref&&n[F].ref(null),e.nextBase=n,t&&(y(n),j(e));for(var o;o=n.lastChild;)P(o,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function B(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function D(e,t,n){return w(n,e,{},!1,t)}var W={},V=[],A={},H=function(e){return A[e]||(A[e]=e.toLowerCase())},L="undefined"!=typeof Promise&&Promise.resolve(),z=L?function(e){L.then(e)}:setTimeout,G={},F="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",Q={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},Y={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},q=[],K={},X=[],Z=0,J=!1,$=!1,ee={};r(B.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,i(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){R(this,2)},render:function(){}}),e.h=n,e.cloneElement=l,e.Component=B,e.render=D,e.rerender=p,e.options=W})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(11),i=r(a);t.default=function(e){var t=e.handleTimerPlayOrPause,n=e.handleTimerRestart,r=e.iconPath;return(0,o.h)("div",{className:i.default.settings},(0,o.h)("div",{className:i.default.item},(0,o.h)("img",{onClick:t,className:i.default.btn,src:"./images/"+r,alt:"icon"})),(0,o.h)("div",{className:i.default.item},(0,o.h)("img",{onClick:n,className:i.default.btn,src:"./images/restart.svg",alt:"restart"})))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=n(12),c=r(l),f=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return i(t,e),s(t,[{key:"handleClick",value:function(e){this.props.handler(e,this.props.target,this.props.amount)}},{key:"render",value:function(){var e=this;return(0,u.h)("section",{className:c.default.container},(0,u.h)("h3",{className:c.default.counterHeader},this.props.header),(0,u.h)("span",{className:c.default.counter,onClick:function(){e.handleClick("INCREMENT")}},"+"),(0,u.h)("span",{className:c.default.counterValue},this.props.value),(0,u.h)("span",{className:c.default.counter,onClick:function(){e.handleClick("DECREMENT")}},"-"))}}]),t}(u.Component);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(3),i=r(a),s=n(13),u=r(s);t.default=function(e){var t=e.handleCounter,n=e.persons,r=e.salary;return(0,o.h)("div",{className:u.default.container},(0,o.h)("div",{className:u.default.item},(0,o.h)(i.default,{header:"Osallistujia",handler:t,target:"persons",amount:1,value:n})),(0,o.h)("div",{className:u.default.item},(0,o.h)(i.default,{header:"€ / h",handler:t,target:"salary",amount:5,value:r})))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=n(6),f=r(c),p=n(7),d=r(p),h=n(4),_=r(h),m=n(2),v=r(m),y=n(14),b=r(y),g=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={persons:5,salary:45,elapsed:0,runningSince:null},e.handleTimerPause=e.handleTimerPause.bind(e),e.handleTimerStart=e.handleTimerStart.bind(e),e.handleTimerRestart=e.handleTimerRestart.bind(e),e.handleCounter=e.handleCounter.bind(e),e}return s(t,e),u(t,[{key:"handleTimerPause",value:function(){var e=Date.now()-this.state.runningSince,t=e+this.state.elapsed;this.setState({elapsed:t,runningSince:null})}},{key:"handleTimerStart",value:function(){this.setState({runningSince:Date.now()})}},{key:"handleTimerRestart",value:function(){this.setState({runningSince:null,elapsed:0})}},{key:"handleCounter",value:function(e,t,n){var r=this;this.setState(function(a){switch(e){case"INCREMENT":return o({},t,a[t]+n);case"DECREMENT":if(r.state[t]>1)return o({},t,a[t]-n);default:return a}})}},{key:"render",value:function(){return(0,l.h)("div",null,(0,l.h)(f.default,null),(0,l.h)("div",{className:b.default.app},(0,l.h)("section",{className:b.default.context},(0,l.h)(d.default,{salary:this.state.salary,persons:this.state.persons,runningSince:this.state.runningSince,elapsed:this.state.elapsed})),(0,l.h)("section",{className:b.default.context},(0,l.h)(_.default,{persons:this.state.persons,salary:this.state.salary,handleCounter:this.handleCounter})),(0,l.h)("section",{className:b.default.context},(0,l.h)(v.default,{handleTimerPlayOrPause:this.state.runningSince?this.handleTimerPause:this.handleTimerStart,iconPath:this.state.runningSince?"pause.svg":"play.svg",handleTimerRestart:this.handleTimerRestart}))))}}]),t}(l.Component);t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(15),i=r(a);t.default=function(){return(0,o.h)("header",{className:i.default.header},(0,o.h)("h1",{className:i.default.title},"Turha palsu"))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=n(16),c=r(l),f=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={elapsed:"00:00:00",spendedMoney:0},n.tick=n.tick.bind(n),n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.updateInterval=setInterval(this.tick,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateInterval)}},{key:"tick",value:function(){var e=window.helper,t=e.handleElapsedTime,n=e.countSpendedMoney,r=t(this.props.elapsed,this.props.runningSince),o=n(this.props.elapsed,this.props.runningSince,this.props.salary,this.props.persons);this.setState({spendedMoney:o,elapsed:r})}},{key:"render",value:function(){var e=this.props.runningSince?""+c.default.text:c.default.text+" "+c.default.textPaused;return(0,u.h)("div",{className:c.default.container},(0,u.h)("div",{className:c.default.flexItem},(0,u.h)("h3",{className:c.default.header},"Aikaa kulunut"),(0,u.h)("p",{className:e},this.state.elapsed)),(0,u.h)("div",{className:c.default.flexItem},(0,u.h)("h3",{className:c.default.header},"Rahaa poltettu"),(0,u.h)("p",{className:e},this.state.spendedMoney," €")))}}]),t}(u.Component);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=n(5),c=r(l);n(9);var f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return(0,u.h)(c.default,null)}}]),t}(u.Component);(0,u.render)((0,u.h)(f,null),document.getElementById("app"))},function(e,t){"use strict";!function(){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").catch(function(e){console.log(e,"ERROR")}):console.log("Serviceworker is not supported, keep going!")}()},function(e,t){"use strict";window.helper=function(){function e(e,t){var o=n(e,t);return r(o)}function t(e,t,r,o){var i=n(e,t),s=a(i),u=r/60/60;return(s*u*o).toFixed(2)}function n(e,t){var n=e;return t&&(n+=Date.now()-t),n}function r(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3/60/60),a=[o(r.toString(),2),o(n.toString(),2),o(t.toString(),2)].join(":");return a}function o(e,t){for(var n=e;n.length<t;)n="0"+n;return n}function a(e){var t=parseInt(e/1e3);return t}return{handleElapsedTime:e,countSpendedMoney:t}}()},function(e,t){e.exports={settings:"controls__settings___KsVmX",item:"controls__item___1MrIf",btn:"controls__btn___rlB_Y"}},function(e,t){e.exports={container:"counter__container___3DQCl",counterHeader:"counter__counterHeader___DHU63",counter:"counter__counter___QyI2p",counterValue:"counter__counterValue___1Eglx"}},function(e,t){e.exports={container:"settings__container___2hmTp",item:"settings__item___3SWui"}},function(e,t){e.exports={app:"dashboard__app___2fVli",context:"dashboard__context___cpqhG"}},function(e,t){e.exports={header:"header__header___1ppLC",title:"header__title___2LAyN"}},function(e,t){e.exports={container:"message__container___32MBp",flexItem:"message__flexItem___ZcQYf",text:"message__text___3_oVj",textPaused:"message__textPaused___1SaNt",header:"message__header___12BIp"}}]);