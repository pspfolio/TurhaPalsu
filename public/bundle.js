/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! D:\projects\TurhaPalsu\src\utils/helper.js */1);
	module.exports = __webpack_require__(/*! D:\projects\TurhaPalsu\src/index.js */2);


/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	window.helper = function () {
	
	  function handleElapsedTime(elapsed, runningSince) {
	    var totalElapsed = getTotalElapsed(elapsed, runningSince);
	    return convertMillisecondsToReadable(totalElapsed);
	  }
	
	  function countSpendedMoney(elapsed, runningSince, salaryPerHour, persons) {
	    var totalElapsed = getTotalElapsed(elapsed, runningSince);
	    var seconds = getRunnedBySeconds(totalElapsed);
	    var salaryPerSecond = salaryPerHour / 60 / 60;
	    return (seconds * salaryPerSecond * persons).toFixed(2);
	  }
	
	  function getTotalElapsed(elapsed, runningSince) {
	    var totalElapsed = elapsed;
	    if (runningSince) {
	      totalElapsed += Date.now() - runningSince;
	    }
	
	    return totalElapsed;
	  }
	
	  function convertMillisecondsToReadable(milliseconds) {
	    var seconds = Math.floor(milliseconds / 1000 % 60);
	    var minutes = Math.floor(milliseconds / 1000 / 60 % 60);
	    var hours = Math.floor(milliseconds / 1000 / 60 / 60);
	
	    var result = [pad(hours.toString(), 2), pad(minutes.toString(), 2), pad(seconds.toString(), 2)].join(':');
	
	    return result;
	  }
	
	  function pad(numberString, size) {
	    var padded = numberString;
	    while (padded.length < size) {
	      padded = '0' + padded;
	    }
	    return padded;
	  }
	
	  function getRunnedBySeconds(elapsed) {
	    var seconds = parseInt(elapsed / 1000);
	    return seconds;
	  }
	
	  return {
	    handleElapsedTime: handleElapsedTime,
	    countSpendedMoney: countSpendedMoney
	  };
	}();

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _dashboard = __webpack_require__(/*! ./components/dashboard */ 4);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./pwa.js */ 16);
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(_dashboard2.default, null);
	    }
	  }]);
	
	  return App;
	}(_preact.Component);
	
	(0, _preact.render)((0, _preact.h)(App, null), document.getElementById('app'));

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./~/preact/dist/preact.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = [];
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !1) {
	            if ('number' == typeof child || child === !0) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                children.push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) node.innerHTML = value && value.__html || ''; else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = parent instanceof SVGElement;
	            hydrating = dom && !(ATTR_KEY in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom && dom instanceof Text) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                if (dom) recollectNodeTree(dom);
	                dom = document.createTextNode(vnode);
	            }
	            dom[ATTR_KEY] = !0;
	            return dom;
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	            recollectNodeTree(dom);
	        }
	        var fc = out.firstChild, props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        diffAttributes(out, vnode.attributes, props);
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll);
	        if (originalAttributes && 'function' == typeof originalAttributes.ref) (props.ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (hydrating || props) children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
	                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
	                dom.insertBefore(child, originalChildren[i] || null);
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        while (min <= childrenLen) {
	            child = children[childrenLen--];
	            if (child) recollectNodeTree(child);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            var c;
	            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        for (var _name in old) if (!(attrs && _name in attrs) && null != old[_name]) setAccessor(dom, _name, old[_name], old[_name] = void 0, isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!('children' === _name2 || 'innerHTML' === _name2 || _name2 in old && attrs[_name2] === ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2]))) setAccessor(dom, _name2, old[_name2], old[_name2] = attrs[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            var c;
	            while (c = base.lastChild) recollectNodeTree(c, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 4 */
/*!*******************************************!*\
  !*** ./src/components/dashboard/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _header = __webpack_require__(/*! ../header */ 5);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _message = __webpack_require__(/*! ../message */ 7);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _counters = __webpack_require__(/*! ../counters */ 9);
	
	var _counters2 = _interopRequireDefault(_counters);
	
	var _controls = __webpack_require__(/*! ../controls */ 13);
	
	var _controls2 = _interopRequireDefault(_controls);
	
	var _dashboard = __webpack_require__(/*! ./dashboard.css */ 15);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_Component) {
	  _inherits(Dashboard, _Component);
	
	  function Dashboard() {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));
	
	    _this.state = {
	      persons: 5,
	      salary: 45,
	      elapsed: 0,
	      runningSince: null
	    };
	
	    _this.handleTimerPause = _this.handleTimerPause.bind(_this);
	    _this.handleTimerStart = _this.handleTimerStart.bind(_this);
	    _this.handleTimerRestart = _this.handleTimerRestart.bind(_this);
	    _this.handleCounter = _this.handleCounter.bind(_this);
	    return _this;
	  }
	
	  /*
	    Asetetaan timerin pause tilaan. Tallennetaan dashboardin tilaan kulunut aika,
	    josta jatkeaan, kun painetaan play painiketta
	   */
	
	
	  _createClass(Dashboard, [{
	    key: 'handleTimerPause',
	    value: function handleTimerPause() {
	      var lastElapsed = Date.now() - this.state.runningSince;
	      var elapsed = lastElapsed + this.state.elapsed;
	      this.setState({ elapsed: elapsed, runningSince: null });
	    }
	
	    /*
	      Käynnistetään ajastin  asettamalla käynnistyksen aloitusajankohta.
	    */
	
	  }, {
	    key: 'handleTimerStart',
	    value: function handleTimerStart() {
	      this.setState({ runningSince: Date.now() });
	    }
	
	    /*
	      Asetetaan oletusarvot ajastimelle, kun se resetoidaan
	    */
	
	  }, {
	    key: 'handleTimerRestart',
	    value: function handleTimerRestart() {
	      this.setState({ runningSince: null, elapsed: 0 });
	    }
	
	    /*
	      Lisätään tilaan salary tai persons (target) joko +1 tai -1
	      riippuen minkä tyyppinen action meille tulee
	    */
	
	  }, {
	    key: 'handleCounter',
	    value: function handleCounter(type, target, amount) {
	      var _this2 = this;
	
	      this.setState(function (prevState) {
	        switch (type) {
	          case 'INCREMENT':
	            return _defineProperty({}, target, prevState[target] + amount);
	          case 'DECREMENT':
	            if (_this2.state[target] > 1) {
	              return _defineProperty({}, target, prevState[target] - amount);
	            }
	          default:
	            return prevState;
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(
	        'div',
	        null,
	        (0, _preact.h)(_header2.default, null),
	        (0, _preact.h)(
	          'div',
	          { className: _dashboard2.default.app },
	          (0, _preact.h)(_message2.default, this.state),
	          (0, _preact.h)(_counters2.default, { persons: this.state.persons, salary: this.state.salary, handleCounter: this.handleCounter }),
	          (0, _preact.h)(_controls2.default, {
	            handleTimerPlayOrPause: this.state.runningSince ? this.handleTimerPause : this.handleTimerStart,
	            iconPath: this.state.runningSince ? 'pause.svg' : 'play.svg',
	            handleTimerRestart: this.handleTimerRestart
	          })
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_preact.Component);
	
	exports.default = Dashboard;

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _header = __webpack_require__(/*! ./header.css */ 6);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return (0, _preact.h)(
	    'header',
	    { className: _header2.default.header },
	    (0, _preact.h)(
	      'h1',
	      { className: _header2.default.title },
	      'Turha palsu'
	    )
	  );
	};

/***/ },
/* 6 */
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header__header___1ppLC","title":"header__title___2LAyN"};

/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./src/components/message/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _message = __webpack_require__(/*! ./message.css */ 8);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Message = function (_Component) {
	  _inherits(Message, _Component);
	
	  function Message(props) {
	    _classCallCheck(this, Message);
	
	    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));
	
	    _this.state = {
	      elapsed: '00:00:00',
	      spendedMoney: 0.00
	    };
	
	    _this.tick = _this.tick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Message, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateInterval = setInterval(this.tick, 50);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.updateInterval);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      var _window$helper = window.helper,
	          handleElapsedTime = _window$helper.handleElapsedTime,
	          countSpendedMoney = _window$helper.countSpendedMoney;
	
	      var elapsed = handleElapsedTime(this.props.elapsed, this.props.runningSince);
	      var spendedMoney = countSpendedMoney(this.props.elapsed, this.props.runningSince, this.props.salary, this.props.persons);
	      this.setState({ spendedMoney: spendedMoney, elapsed: elapsed });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = this.props.runningSince ? '' + _message2.default.text : _message2.default.text + ' ' + _message2.default.textPaused;
	      return (0, _preact.h)(
	        'div',
	        null,
	        (0, _preact.h)(
	          'div',
	          { className: _message2.default.container },
	          (0, _preact.h)(
	            'div',
	            { className: _message2.default.flexItem },
	            (0, _preact.h)(
	              'h3',
	              { className: _message2.default.header },
	              'Aikaa kulunut'
	            ),
	            (0, _preact.h)(
	              'p',
	              { className: style },
	              this.state.elapsed
	            )
	          ),
	          (0, _preact.h)(
	            'div',
	            { className: _message2.default.flexItem },
	            (0, _preact.h)(
	              'h3',
	              { className: _message2.default.header },
	              'Rahaa poltettu'
	            ),
	            (0, _preact.h)(
	              'p',
	              { className: style },
	              this.state.spendedMoney,
	              ' \u20AC'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Message;
	}(_preact.Component);
	
	exports.default = Message;

/***/ },
/* 8 */
/*!********************************************!*\
  !*** ./src/components/message/message.css ***!
  \********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"message__container___32MBp","flexItem":"message__flexItem___ZcQYf","text":"message__text___3_oVj","textPaused":"message__textPaused___1SaNt","header":"message__header___12BIp"};

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./src/components/counters/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _counter = __webpack_require__(/*! ../counter */ 10);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	var _settings = __webpack_require__(/*! ./settings.css */ 12);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var handleCounter = _ref.handleCounter,
	      persons = _ref.persons,
	      salary = _ref.salary;
	  return (0, _preact.h)(
	    'div',
	    null,
	    (0, _preact.h)(
	      'div',
	      { className: _settings2.default.container },
	      (0, _preact.h)(
	        'div',
	        { className: _settings2.default.item },
	        (0, _preact.h)(_counter2.default, {
	          header: 'Osallistujia',
	          handler: handleCounter,
	          target: 'persons',
	          amount: 1,
	          value: persons })
	      ),
	      (0, _preact.h)(
	        'div',
	        { className: _settings2.default.item },
	        (0, _preact.h)(_counter2.default, {
	          header: '€ / h',
	          handler: handleCounter,
	          target: 'salary',
	          amount: 5,
	          value: salary })
	      )
	    )
	  );
	};

/***/ },
/* 10 */
/*!*****************************************!*\
  !*** ./src/components/counter/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _counter = __webpack_require__(/*! ./counter.css */ 11);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Counter = function (_Component) {
	  _inherits(Counter, _Component);
	
	  function Counter(props) {
	    _classCallCheck(this, Counter);
	
	    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Counter, [{
	    key: 'handleClick',
	    value: function handleClick(type) {
	      this.props.handler(type, this.props.target, this.props.amount);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return (0, _preact.h)(
	        'section',
	        { className: _counter2.default.container },
	        (0, _preact.h)(
	          'h3',
	          { className: _counter2.default.counterHeader },
	          this.props.header
	        ),
	        (0, _preact.h)(
	          'span',
	          { className: _counter2.default.counter, onClick: function onClick() {
	              _this2.handleClick('INCREMENT');
	            } },
	          '+'
	        ),
	        (0, _preact.h)(
	          'span',
	          { className: _counter2.default.counterValue },
	          this.props.value
	        ),
	        (0, _preact.h)(
	          'span',
	          { className: _counter2.default.counter, onClick: function onClick() {
	              _this2.handleClick('DECREMENT');
	            } },
	          '-'
	        )
	      );
	    }
	  }]);
	
	  return Counter;
	}(_preact.Component);
	
	exports.default = Counter;

/***/ },
/* 11 */
/*!********************************************!*\
  !*** ./src/components/counter/counter.css ***!
  \********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"counter__container___3DQCl","counterHeader":"counter__counterHeader___DHU63","counter":"counter__counter___QyI2p","counterValue":"counter__counterValue___1Eglx"};

/***/ },
/* 12 */
/*!**********************************************!*\
  !*** ./src/components/counters/settings.css ***!
  \**********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"settings__container___2hmTp","item":"settings__item___3SWui"};

/***/ },
/* 13 */
/*!******************************************!*\
  !*** ./src/components/controls/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _preact = __webpack_require__(/*! preact */ 3);
	
	var _controls = __webpack_require__(/*! ./controls.css */ 14);
	
	var _controls2 = _interopRequireDefault(_controls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var handleTimerPlayOrPause = _ref.handleTimerPlayOrPause,
	      handleTimerRestart = _ref.handleTimerRestart,
	      iconPath = _ref.iconPath;
	  return (0, _preact.h)(
	    'div',
	    null,
	    (0, _preact.h)(
	      'div',
	      { className: _controls2.default.container },
	      (0, _preact.h)(
	        'div',
	        { className: _controls2.default.item },
	        (0, _preact.h)('img', { onClick: handleTimerPlayOrPause, className: _controls2.default.btn, src: './images/' + iconPath, alt: 'icon' })
	      ),
	      (0, _preact.h)(
	        'div',
	        { className: _controls2.default.item },
	        (0, _preact.h)('img', { onClick: handleTimerRestart, className: _controls2.default.btn, src: './images/restart.svg', alt: 'restart' })
	      )
	    )
	  );
	};

/***/ },
/* 14 */
/*!**********************************************!*\
  !*** ./src/components/controls/controls.css ***!
  \**********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"controls__container___1_Emy","item":"controls__item___1MrIf","btn":"controls__btn___rlB_Y"};

/***/ },
/* 15 */
/*!************************************************!*\
  !*** ./src/components/dashboard/dashboard.css ***!
  \************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"dashboard__app___2fVli","context":"dashboard__context___cpqhG"};

/***/ },
/* 16 */
/*!********************!*\
  !*** ./src/pwa.js ***!
  \********************/
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	  // Tarkastetaan, että selain tukee service workeriä
	  if ("serviceWorker" in navigator) {
	    navigator.serviceWorker.register('/sw.js').catch(function (err) {
	      console.log(err, "ERROR");
	    });
	  } else {
	    console.log("Serviceworker is not supported, keep going!");
	  }
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map