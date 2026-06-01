/*!
 * (The MIT License)
 * 
 * Copyright (c) 2012-2014 Marcin Warpechowski
 * Copyright (c) 2015 Handsoncode sp. z o.o. <hello@handsoncode.net>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Version: 0.34.1
 * Release date: 06/09/2017 (built at 01/06/2026 09:26:56)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Handsontable", [], factory);
	else if(typeof exports === 'object')
		exports["Handsontable"] = factory();
	else
		root["Handsontable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HTML_CHARACTERS = undefined;
exports.getParent = getParent;
exports.closest = closest;
exports.closestDown = closestDown;
exports.isChildOf = isChildOf;
exports.isChildOfWebComponentTable = isChildOfWebComponentTable;
exports.polymerWrap = polymerWrap;
exports.polymerUnwrap = polymerUnwrap;
exports.index = index;
exports.overlayContainsElement = overlayContainsElement;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.removeTextNodes = removeTextNodes;
exports.empty = empty;
exports.fastInnerHTML = fastInnerHTML;
exports.fastInnerText = fastInnerText;
exports.isVisible = isVisible;
exports.offset = offset;
exports.getWindowScrollTop = getWindowScrollTop;
exports.getWindowScrollLeft = getWindowScrollLeft;
exports.getScrollTop = getScrollTop;
exports.getScrollLeft = getScrollLeft;
exports.getScrollableElement = getScrollableElement;
exports.getTrimmingContainer = getTrimmingContainer;
exports.getStyle = getStyle;
exports.getComputedStyle = getComputedStyle;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.getCaretPosition = getCaretPosition;
exports.getSelectionEndPosition = getSelectionEndPosition;
exports.getSelectionText = getSelectionText;
exports.setCaretPosition = setCaretPosition;
exports.getScrollbarWidth = getScrollbarWidth;
exports.hasVerticalScrollbar = hasVerticalScrollbar;
exports.hasHorizontalScrollbar = hasHorizontalScrollbar;
exports.setOverlayPosition = setOverlayPosition;
exports.getCssTransform = getCssTransform;
exports.resetCssTransform = resetCssTransform;
exports.isInput = isInput;
exports.isOutsideInput = isOutsideInput;

var _browser = __webpack_require__(9);

var _feature = __webpack_require__(14);

function getParent(element) {
  let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  let iteration = -1;
  let parent = null;

  while (element != null) {
    if (iteration === level) {
      parent = element;
      break;
    }

    if (element.host && element.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      element = element.host;
    } else {
      iteration++;
      element = element.parentNode;
    }
  }

  return parent;
}

function closest(element, nodes, until) {
  while (element != null && element !== until) {
    if (element.nodeType === Node.ELEMENT_NODE && (nodes.indexOf(element.nodeName) > -1 || nodes.indexOf(element) > -1)) {
      return element;
    }
    if (element.host && element.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      element = element.host;
    } else {
      element = element.parentNode;
    }
  }

  return null;
}

function closestDown(element, nodes, until) {
  const matched = [];

  while (element) {
    element = closest(element, nodes, until);

    if (!element || until && !until.contains(element)) {
      break;
    }
    matched.push(element);

    if (element.host && element.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      element = element.host;
    } else {
      element = element.parentNode;
    }
  }
  const length = matched.length;

  return length ? matched[length - 1] : null;
}

function isChildOf(child, parent) {
  var node = child.parentNode;
  var queriedParents = [];

  if (typeof parent === 'string') {
    queriedParents = Array.prototype.slice.call(document.querySelectorAll(parent), 0);
  } else {
    queriedParents.push(parent);
  }

  while (node != null) {
    if (queriedParents.indexOf(node) > -1) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

function isChildOfWebComponentTable(element) {
  var hotTableName = 'hot-table',
      result = false,
      parentNode;

  parentNode = polymerWrap(element);

  function isHotTable(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.nodeName === hotTableName.toUpperCase();
  }

  while (parentNode != null) {
    if (isHotTable(parentNode)) {
      result = true;
      break;
    } else if (parentNode.host && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      result = isHotTable(parentNode.host);

      if (result) {
        break;
      }
      parentNode = parentNode.host;
    }
    parentNode = parentNode.parentNode;
  }

  return result;
}

function polymerWrap(element) {
  return typeof Polymer !== 'undefined' && typeof wrap === 'function' ? wrap(element) : element;
}

function polymerUnwrap(element) {
  return typeof Polymer !== 'undefined' && typeof unwrap === 'function' ? unwrap(element) : element;
}

function index(element) {
  var i = 0;

  if (element.previousSibling) {
    while (element = element.previousSibling) {
      ++i;
    }
  }

  return i;
}

function overlayContainsElement(overlayType, element) {
  let overlayElement = document.querySelector(`.ht_clone_${overlayType}`);
  return overlayElement ? overlayElement.contains(element) : null;
}

var classListSupport = !!document.documentElement.classList;
var _hasClass, _addClass, _removeClass;

function filterEmptyClassNames(classNames) {
  var len = 0,
      result = [];

  if (!classNames || !classNames.length) {
    return result;
  }
  while (classNames[len]) {
    result.push(classNames[len]);
    len++;
  }

  return result;
}

if (classListSupport) {
  var isSupportMultipleClassesArg = function () {
    var element = document.createElement('div');

    element.classList.add('test', 'test2');

    return element.classList.contains('test2');
  }();

  _hasClass = function _hasClass(element, className) {
    if (element.classList === void 0 || className === '') {
      return false;
    }

    return element.classList.contains(className);
  };

  _addClass = function _addClass(element, className) {
    var len = 0;

    if (typeof className === 'string') {
      className = className.split(' ');
    }
    className = filterEmptyClassNames(className);

    if (isSupportMultipleClassesArg) {
      element.classList.add.apply(element.classList, className);
    } else {
      while (className && className[len]) {
        element.classList.add(className[len]);
        len++;
      }
    }
  };

  _removeClass = function _removeClass(element, className) {
    var len = 0;

    if (typeof className === 'string') {
      className = className.split(' ');
    }
    className = filterEmptyClassNames(className);

    if (isSupportMultipleClassesArg) {
      element.classList.remove.apply(element.classList, className);
    } else {
      while (className && className[len]) {
        element.classList.remove(className[len]);
        len++;
      }
    }
  };
} else {
  var createClassNameRegExp = function createClassNameRegExp(className) {
    return new RegExp(`(\\s|^)${className}(\\s|$)`);
  };

  _hasClass = function _hasClass(element, className) {
    return element.className !== void 0 && element.className.test(createClassNameRegExp(className));
  };

  _addClass = function _addClass(element, className) {
    var len = 0,
        _className = element.className;

    if (typeof className === 'string') {
      className = className.split(' ');
    }
    if (_className === '') {
      _className = className.join(' ');
    } else {
      while (className && className[len]) {
        if (!createClassNameRegExp(className[len]).test(_className)) {
          _className += ` ${className[len]}`;
        }
        len++;
      }
    }
    element.className = _className;
  };

  _removeClass = function _removeClass(element, className) {
    var len = 0,
        _className = element.className;

    if (typeof className === 'string') {
      className = className.split(' ');
    }
    while (className && className[len]) {
      _className = _className.replace(createClassNameRegExp(className[len]), ' ').trim();
      len++;
    }
    if (element.className !== _className) {
      element.className = _className;
    }
  };
}

function hasClass(element, className) {
  return _hasClass(element, className);
}

function addClass(element, className) {
  return _addClass(element, className);
}

function removeClass(element, className) {
  return _removeClass(element, className);
}

function removeTextNodes(element, parent) {
  if (element.nodeType === 3) {
    parent.removeChild(element);
  } else if (['TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR'].indexOf(element.nodeName) > -1) {
    var childs = element.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
      removeTextNodes(childs[i], element);
    }
  }
}

function empty(element) {
  var child;

  while (child = element.lastChild) {
    element.removeChild(child);
  }
}

const HTML_CHARACTERS = exports.HTML_CHARACTERS = /(<(.*)>|&(.*);)/;

function fastInnerHTML(element, content) {
  if (HTML_CHARACTERS.test(content)) {
    element.innerHTML = content;
  } else {
    fastInnerText(element, content);
  }
}

var textContextSupport = !!document.createTextNode('test').textContent;

function fastInnerText(element, content) {
  var child = element.firstChild;

  if (child && child.nodeType === 3 && child.nextSibling === null) {

    if (textContextSupport) {
      child.textContent = content;
    } else {
      child.data = content;
    }
  } else {
    empty(element);
    element.appendChild(document.createTextNode(content));
  }
}

function isVisible(elem) {
  var next = elem;

  while (polymerUnwrap(next) !== document.documentElement) {
    if (next === null) {
      return false;
    } else if (next.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      if (next.host) {
        if (next.host.impl) {
          return isVisible(next.host.impl);
        } else if (next.host) {
          return isVisible(next.host);
        }
        throw new Error('Lost in Web Components world');
      } else {
        return false;
      }
    } else if (next.style.display === 'none') {
      return false;
    }
    next = next.parentNode;
  }

  return true;
}

function offset(elem) {
  var offsetLeft, offsetTop, lastElem, docElem, box;

  docElem = document.documentElement;

  if ((0, _feature.hasCaptionProblem)() && elem.firstChild && elem.firstChild.nodeName === 'CAPTION') {
    box = elem.getBoundingClientRect();

    return {
      top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
    };
  }
  offsetLeft = elem.offsetLeft;
  offsetTop = elem.offsetTop;
  lastElem = elem;

  while (elem = elem.offsetParent) {
    if (elem === document.body) {
      break;
    }
    offsetLeft += elem.offsetLeft;
    offsetTop += elem.offsetTop;
    lastElem = elem;
  }

  if (lastElem && lastElem.style.position === 'fixed') {
    offsetLeft += window.pageXOffset || docElem.scrollLeft;
    offsetTop += window.pageYOffset || docElem.scrollTop;
  }

  return {
    left: offsetLeft,
    top: offsetTop
  };
}

function getWindowScrollTop() {
  var res = window.scrollY;

  if (res === void 0) {
    res = document.documentElement.scrollTop;
  }

  return res;
}

function getWindowScrollLeft() {
  var res = window.scrollX;

  if (res === void 0) {
    res = document.documentElement.scrollLeft;
  }

  return res;
}

function getScrollTop(element) {
  if (element === window) {
    return getWindowScrollTop();
  }
  return element.scrollTop;
}

function getScrollLeft(element) {
  if (element === window) {
    return getWindowScrollLeft();
  }
  return element.scrollLeft;
}

function getScrollableElement(element) {
  var el = element.parentNode,
      props = ['auto', 'scroll'],
      overflow,
      overflowX,
      overflowY,
      computedStyle = '',
      computedOverflow = '',
      computedOverflowY = '',
      computedOverflowX = '';

  while (el && el.style && document.body !== el) {
    overflow = el.style.overflow;
    overflowX = el.style.overflowX;
    overflowY = el.style.overflowY;

    if (overflow == 'scroll' || overflowX == 'scroll' || overflowY == 'scroll') {
      return el;
    } else if (window.getComputedStyle) {
      computedStyle = window.getComputedStyle(el);
      computedOverflow = computedStyle.getPropertyValue('overflow');
      computedOverflowY = computedStyle.getPropertyValue('overflow-y');
      computedOverflowX = computedStyle.getPropertyValue('overflow-x');

      if (computedOverflow === 'scroll' || computedOverflowX === 'scroll' || computedOverflowY === 'scroll') {
        return el;
      }
    }

    if (el.clientHeight <= el.scrollHeight && (props.indexOf(overflowY) !== -1 || props.indexOf(overflow) !== -1 || props.indexOf(computedOverflow) !== -1 || props.indexOf(computedOverflowY) !== -1)) {
      return el;
    }
    if (el.clientWidth <= el.scrollWidth && (props.indexOf(overflowX) !== -1 || props.indexOf(overflow) !== -1 || props.indexOf(computedOverflow) !== -1 || props.indexOf(computedOverflowX) !== -1)) {
      return el;
    }
    el = el.parentNode;
  }

  return window;
}

function getTrimmingContainer(base) {
  var el = base.parentNode;

  while (el && el.style && document.body !== el) {
    if (el.style.overflow !== 'visible' && el.style.overflow !== '') {
      return el;
    } else if (window.getComputedStyle) {
      var computedStyle = window.getComputedStyle(el);

      if (computedStyle.getPropertyValue('overflow') !== 'visible' && computedStyle.getPropertyValue('overflow') !== '') {
        return el;
      }
    }

    el = el.parentNode;
  }

  return window;
}

function getStyle(element, prop) {
  if (!element) {
    return;
  } else if (element === window) {
    if (prop === 'width') {
      return window.innerWidth + 'px';
    } else if (prop === 'height') {
      return window.innerHeight + 'px';
    }

    return;
  }

  var styleProp = element.style[prop],
      computedStyle;

  if (styleProp !== '' && styleProp !== void 0) {
    return styleProp;
  } else {
    computedStyle = getComputedStyle(element);

    if (computedStyle[prop] !== '' && computedStyle[prop] !== void 0) {
      return computedStyle[prop];
    }
  }
}

function getComputedStyle(element) {
  return element.currentStyle || document.defaultView.getComputedStyle(element);
}

function outerWidth(element) {
  return element.offsetWidth;
}

function outerHeight(elem) {
  if ((0, _feature.hasCaptionProblem)() && elem.firstChild && elem.firstChild.nodeName === 'CAPTION') {
    return elem.offsetHeight + elem.firstChild.offsetHeight;
  }

  return elem.offsetHeight;
}

function innerHeight(element) {
  return element.clientHeight || element.innerHeight;
}

function innerWidth(element) {
  return element.clientWidth || element.innerWidth;
}

function addEvent(element, event, callback) {
  if (window.addEventListener) {
    element.addEventListener(event, callback, false);
  } else {
    element.attachEvent('on' + event, callback);
  }
}

function removeEvent(element, event, callback) {
  if (window.removeEventListener) {
    element.removeEventListener(event, callback, false);
  } else {
    element.detachEvent('on' + event, callback);
  }
}

function getCaretPosition(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    let r = document.selection.createRange();

    if (r == null) {
      return 0;
    }
    let re = el.createTextRange();
    let rc = re.duplicate();

    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }

  return 0;
}

function getSelectionEndPosition(el) {
  if (el.selectionEnd) {
    return el.selectionEnd;
  } else if (document.selection) {
    let r = document.selection.createRange();

    if (r == null) {
      return 0;
    }
    let re = el.createTextRange();

    return re.text.indexOf(r.text) + r.text.length;
  }

  return 0;
}

function getSelectionText() {
  let text = '';

  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    text = document.selection.createRange().text;
  }

  return text;
}

function setCaretPosition(element, pos, endPos) {
  if (endPos === void 0) {
    endPos = pos;
  }
  if (element.setSelectionRange) {
    element.focus();

    try {
      element.setSelectionRange(pos, endPos);
    } catch (err) {
      var elementParent = element.parentNode;
      var parentDisplayValue = elementParent.style.display;
      elementParent.style.display = 'block';
      element.setSelectionRange(pos, endPos);
      elementParent.style.display = parentDisplayValue;
    }
  } else if (element.createTextRange) {
    var range = element.createTextRange();
    range.collapse(true);
    range.moveEnd('character', endPos);
    range.moveStart('character', pos);
    range.select();
  }
}

var cachedScrollbarWidth;

function walkontableCalculateScrollbarWidth() {
  var inner = document.createElement('div');
  inner.style.height = '200px';
  inner.style.width = '100%';

  var outer = document.createElement('div');
  outer.style.boxSizing = 'content-box';
  outer.style.height = '150px';
  outer.style.left = '0px';
  outer.style.overflow = 'hidden';
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.width = '200px';
  outer.style.visibility = 'hidden';
  outer.appendChild(inner);

  (document.body || document.documentElement).appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) {
    w2 = outer.clientWidth;
  }

  (document.body || document.documentElement).removeChild(outer);

  return w1 - w2;
}

function getScrollbarWidth() {
  if (cachedScrollbarWidth === void 0) {
    cachedScrollbarWidth = walkontableCalculateScrollbarWidth();
  }

  return cachedScrollbarWidth;
}

function hasVerticalScrollbar(element) {
  return element.offsetWidth !== element.clientWidth;
}

function hasHorizontalScrollbar(element) {
  return element.offsetHeight !== element.clientHeight;
}

function setOverlayPosition(overlayElem, left, top) {
  if ((0, _browser.isIE8)() || (0, _browser.isIE9)()) {
    overlayElem.style.top = top;
    overlayElem.style.left = left;
  } else if ((0, _browser.isSafari)()) {
    overlayElem.style['-webkit-transform'] = 'translate3d(' + left + ',' + top + ',0)';
  } else {
    overlayElem.style.transform = 'translate3d(' + left + ',' + top + ',0)';
  }
}

function getCssTransform(element) {
  var transform;

  if (element.style.transform && (transform = element.style.transform) !== '') {
    return ['transform', transform];
  } else if (element.style['-webkit-transform'] && (transform = element.style['-webkit-transform']) !== '') {

    return ['-webkit-transform', transform];
  }

  return -1;
}

function resetCssTransform(element) {
  if (element.style.transform && element.style.transform !== '') {
    element.style.transform = '';
  } else if (element.style['-webkit-transform'] && element.style['-webkit-transform'] !== '') {
    element.style['-webkit-transform'] = '';
  }
}

function isInput(element) {
  var inputs = ['INPUT', 'SELECT', 'TEXTAREA'];

  return element && (inputs.indexOf(element.nodeName) > -1 || element.contentEditable === 'true');
}

function isOutsideInput(element) {
  return isInput(element) && element.className.indexOf('handsontableInput') == -1 && element.className.indexOf('copyPaste') == -1;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.to2dArray = to2dArray;
exports.extendArray = extendArray;
exports.pivot = pivot;
exports.arrayReduce = arrayReduce;
exports.arrayFilter = arrayFilter;
exports.arrayMap = arrayMap;
exports.arrayEach = arrayEach;
exports.arraySum = arraySum;
exports.arrayMax = arrayMax;
exports.arrayMin = arrayMin;
exports.arrayAvg = arrayAvg;
exports.arrayFlatten = arrayFlatten;
exports.arrayUnique = arrayUnique;
function to2dArray(arr) {
  var i = 0,
      ilen = arr.length;

  while (i < ilen) {
    arr[i] = [arr[i]];
    i++;
  }
}

function extendArray(arr, extension) {
  var i = 0,
      ilen = extension.length;

  while (i < ilen) {
    arr.push(extension[i]);
    i++;
  }
}

function pivot(arr) {
  var pivotedArr = [];

  if (!arr || arr.length === 0 || !arr[0] || arr[0].length === 0) {
    return pivotedArr;
  }

  var rowCount = arr.length;
  var colCount = arr[0].length;

  for (var i = 0; i < rowCount; i++) {
    for (var j = 0; j < colCount; j++) {
      if (!pivotedArr[j]) {
        pivotedArr[j] = [];
      }

      pivotedArr[j][i] = arr[i][j];
    }
  }

  return pivotedArr;
}

function arrayReduce(array, iteratee, accumulator, initFromArray) {
  let index = -1,
      length = array.length;

  if (initFromArray && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}

function arrayFilter(array, predicate) {
  let index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    let value = array[index];

    if (predicate(value, index, array)) {
      result[++resIndex] = value;
    }
  }

  return result;
}

function arrayMap(array, iteratee) {
  let index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    let value = array[index];

    result[++resIndex] = iteratee(value, index, array);
  }

  return result;
}

function arrayEach(array, iteratee) {
  let index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

function arraySum(array) {
  return arrayReduce(array, (a, b) => a + b, 0);
}

function arrayMax(array) {
  return arrayReduce(array, (a, b) => a > b ? a : b, Array.isArray(array) ? array[0] : void 0);
}

function arrayMin(array) {
  return arrayReduce(array, (a, b) => a < b ? a : b, Array.isArray(array) ? array[0] : void 0);
}

function arrayAvg(array) {
  if (!array.length) {
    return 0;
  }

  return arraySum(array) / array.length;
}

function arrayFlatten(array) {
  return arrayReduce(array, (initial, value) => initial.concat(Array.isArray(value) ? arrayFlatten(value) : value), []);
}

function arrayUnique(array) {
  let unique = [];

  arrayEach(array, value => {
    if (unique.indexOf(value) === -1) {
      unique.push(value);
    }
  });

  return unique;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.duckSchema = duckSchema;
exports.inherit = inherit;
exports.extend = extend;
exports.deepExtend = deepExtend;
exports.deepClone = deepClone;
exports.clone = clone;
exports.mixin = mixin;
exports.isObjectEquals = isObjectEquals;
exports.isObject = isObject;
exports.defineGetter = defineGetter;
exports.objectEach = objectEach;
exports.getProperty = getProperty;
exports.deepObjectSize = deepObjectSize;
exports.createObjectPropListener = createObjectPropListener;
exports.hasOwnProperty = hasOwnProperty;

var _array = __webpack_require__(1);

function duckSchema(object) {
  var schema;

  if (Array.isArray(object)) {
    schema = [];
  } else {
    schema = {};

    objectEach(object, (value, key) => {
      if (key === '__children') {
        return;
      }

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        schema[key] = duckSchema(value);
      } else if (Array.isArray(value)) {
        if (value.length && typeof value[0] === 'object' && !Array.isArray(value[0])) {
          schema[key] = [duckSchema(value[0])];
        } else {
          schema[key] = [];
        }
      } else {
        schema[key] = null;
      }
    });
  }

  return schema;
}

function inherit(Child, Parent) {
  Parent.prototype.constructor = Parent;
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;

  return Child;
}

function extend(target, extension) {
  objectEach(extension, (value, key) => {
    target[key] = value;
  });

  return target;
}

function deepExtend(target, extension) {
  objectEach(extension, (value, key) => {
    if (extension[key] && typeof extension[key] === 'object') {
      if (!target[key]) {
        if (Array.isArray(extension[key])) {
          target[key] = [];
        } else if (Object.prototype.toString.call(extension[key]) === '[object Date]') {
          target[key] = extension[key];
        } else {
          target[key] = {};
        }
      }
      deepExtend(target[key], extension[key]);
    } else {
      target[key] = extension[key];
    }
  });
}

function deepClone(obj) {
  if (typeof obj === 'object') {
    return JSON.parse(JSON.stringify(obj));
  }

  return obj;
}

function clone(object) {
  let result = {};

  objectEach(object, (value, key) => {
    result[key] = value;
  });

  return result;
}

function mixin(Base) {
  if (!Base.MIXINS) {
    Base.MIXINS = [];
  }

  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  (0, _array.arrayEach)(mixins, mixin => {
    Base.MIXINS.push(mixin.MIXIN_NAME);

    objectEach(mixin, (value, key) => {
      if (Base.prototype[key] !== void 0) {
        throw new Error(`Mixin conflict. Property '${key}' already exist and cannot be overwritten.`);
      }
      if (typeof value === 'function') {
        Base.prototype[key] = value;
      } else {
        let getter = function _getter(propertyName, initialValue) {
          propertyName = `_${propertyName}`;

          let initValue = value => {
            if (Array.isArray(value) || isObject(value)) {
              value = deepClone(value);
            }

            return value;
          };

          return function () {
            if (this[propertyName] === void 0) {
              this[propertyName] = initValue(initialValue);
            }

            return this[propertyName];
          };
        };
        let setter = function _setter(propertyName) {
          propertyName = `_${propertyName}`;

          return function (value) {
            this[propertyName] = value;
          };
        };
        Object.defineProperty(Base.prototype, key, {
          get: getter(key, value),
          set: setter(key),
          configurable: true
        });
      }
    });
  });

  return Base;
}

function isObjectEquals(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}

function defineGetter(object, property, value, options) {
  options.value = value;
  options.writable = options.writable !== false;
  options.enumerable = options.enumerable !== false;
  options.configurable = options.configurable !== false;

  Object.defineProperty(object, property, options);
}

function objectEach(object, iteratee) {
  for (let key in object) {
    if (!object.hasOwnProperty || object.hasOwnProperty && Object.prototype.hasOwnProperty.call(object, key)) {
      if (iteratee(object[key], key, object) === false) {
        break;
      }
    }
  }

  return object;
}

function getProperty(object, name) {
  let names = name.split('.');
  let result = object;

  objectEach(names, name => {
    result = result[name];

    if (result === void 0) {
      result = void 0;

      return false;
    }
  });

  return result;
}

function deepObjectSize(object) {
  if (!isObject(object)) {
    return 0;
  }
  let recursObjLen = function recursObjLen(obj) {
    let result = 0;

    if (isObject(obj)) {
      objectEach(obj, key => {
        result += recursObjLen(key);
      });
    } else {
      result++;
    }

    return result;
  };

  return recursObjLen(object);
}

function createObjectPropListener(defaultValue) {
  let propertyToListen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';

  const privateProperty = `_${propertyToListen}`;
  const holder = {
    _touched: false,
    [privateProperty]: defaultValue,
    isTouched() {
      return this._touched;
    }
  };

  Object.defineProperty(holder, propertyToListen, {
    get() {
      return this[privateProperty];
    },
    set(value) {
      this._touched = true;
      this[privateProperty] = value;
    },
    enumerable: true,
    configurable: true
  });

  return holder;
}

function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNumeric = isNumeric;
exports.rangeEach = rangeEach;
exports.rangeEachReverse = rangeEachReverse;
exports.valueAccordingPercent = valueAccordingPercent;
function isNumeric(n) {
  var t = typeof n;

  return t == 'number' ? !isNaN(n) && isFinite(n) : t == 'string' ? !n.length ? false : n.length == 1 ? /\d/.test(n) : /^\s*[+-]?\s*(?:(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?)|(?:0x[a-f\d]+))\s*$/i.test(n) : t == 'object' ? !!n && typeof n.valueOf() == 'number' && !(n instanceof Date) : false;
}

function rangeEach(rangeFrom, rangeTo, iteratee) {
  let index = -1;

  if (typeof rangeTo === 'function') {
    iteratee = rangeTo;
    rangeTo = rangeFrom;
  } else {
    index = rangeFrom - 1;
  }
  while (++index <= rangeTo) {
    if (iteratee(index) === false) {
      break;
    }
  }
}

function rangeEachReverse(rangeFrom, rangeTo, iteratee) {
  let index = rangeFrom + 1;

  if (typeof rangeTo === 'function') {
    iteratee = rangeTo;
    rangeTo = 0;
  }
  while (--index >= rangeTo) {
    if (iteratee(index) === false) {
      break;
    }
  }
}

function valueAccordingPercent(value, percent) {
  percent = parseInt(percent.toString().replace('%', ''), 10);
  percent = parseInt(value * percent / 100, 10);

  return percent;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getListenersCounter = getListenersCounter;

var _element = __webpack_require__(0);

var _object = __webpack_require__(2);

var _feature = __webpack_require__(14);

var _event = __webpack_require__(5);

let listenersCounter = 0;

class EventManager {
  constructor() {
    let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.context = context || this;

    if (!this.context.eventListeners) {
      this.context.eventListeners = [];
    }
  }

  addEventListener(element, eventName, callback) {
    let context = this.context;

    function callbackProxy(event) {
      event = extendEvent(context, event);

      callback.call(this, event);
    }
    this.context.eventListeners.push({
      element,
      event: eventName,
      callback,
      callbackProxy
    });

    if (window.addEventListener) {
      element.addEventListener(eventName, callbackProxy, false);
    } else {
      element.attachEvent(`on${eventName}`, callbackProxy);
    }
    listenersCounter++;

    return () => {
      this.removeEventListener(element, eventName, callback);
    };
  }

  removeEventListener(element, eventName, callback) {
    let len = this.context.eventListeners.length;
    let tmpEvent;

    while (len--) {
      tmpEvent = this.context.eventListeners[len];

      if (tmpEvent.event == eventName && tmpEvent.element == element) {
        if (callback && callback != tmpEvent.callback) {
          continue;
        }
        this.context.eventListeners.splice(len, 1);

        if (tmpEvent.element.removeEventListener) {
          tmpEvent.element.removeEventListener(tmpEvent.event, tmpEvent.callbackProxy, false);
        } else {
          tmpEvent.element.detachEvent(`on${tmpEvent.event}`, tmpEvent.callbackProxy);
        }
        listenersCounter--;
      }
    }
  }

  clearEvents() {
    if (!this.context) {
      return;
    }
    let len = this.context.eventListeners.length;

    while (len--) {
      let event = this.context.eventListeners[len];

      if (event) {
        this.removeEventListener(event.element, event.event, event.callback);
      }
    }
  }

  clear() {
    this.clearEvents();
  }

  destroy() {
    this.clearEvents();
    this.context = null;
  }

  fireEvent(element, eventName) {
    let options = {
      bubbles: true,
      cancelable: eventName !== 'mousemove',
      view: window,
      detail: 0,
      screenX: 0,
      screenY: 0,
      clientX: 1,
      clientY: 1,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: undefined
    };
    var event;

    if (document.createEvent) {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent(eventName, options.bubbles, options.cancelable, options.view, options.detail, options.screenX, options.screenY, options.clientX, options.clientY, options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, options.relatedTarget || document.body.parentNode);
    } else {
      event = document.createEventObject();
    }

    if (element.dispatchEvent) {
      element.dispatchEvent(event);
    } else {
      element.fireEvent(`on${eventName}`, event);
    }
  }
}

function extendEvent(context, event) {
  let componentName = 'HOT-TABLE';
  let isHotTableSpotted;
  let fromElement;
  let realTarget;
  let target;
  let len;
  let nativeStopImmediatePropagation;

  event.isTargetWebComponent = false;
  event.realTarget = event.target;

  nativeStopImmediatePropagation = event.stopImmediatePropagation;
  event.stopImmediatePropagation = function () {
    nativeStopImmediatePropagation.apply(this);
    (0, _event.stopImmediatePropagation)(this);
  };

  if (!EventManager.isHotTableEnv) {
    return event;
  }
  event = (0, _element.polymerWrap)(event);
  len = event.path ? event.path.length : 0;

  while (len--) {
    if (event.path[len].nodeName === componentName) {
      isHotTableSpotted = true;
    } else if (isHotTableSpotted && event.path[len].shadowRoot) {
      target = event.path[len];

      break;
    }
    if (len === 0 && !target) {
      target = event.path[len];
    }
  }
  if (!target) {
    target = event.target;
  }
  event.isTargetWebComponent = true;

  if ((0, _feature.isWebComponentSupportedNatively)()) {
    event.realTarget = event.srcElement || event.toElement;
  } else if ((0, _object.hasOwnProperty)(context, 'hot') || context.isHotTableEnv || context.wtTable) {
    if ((0, _object.hasOwnProperty)(context, 'hot')) {
      fromElement = context.hot ? context.hot.view.wt.wtTable.TABLE : null;
    } else if (context.isHotTableEnv) {
      fromElement = context.view.activeWt.wtTable.TABLE.parentNode.parentNode;
    } else if (context.wtTable) {
      fromElement = context.wtTable.TABLE.parentNode.parentNode;
    }
    realTarget = (0, _element.closest)(event.target, [componentName], fromElement);

    if (realTarget) {
      event.realTarget = fromElement.querySelector(componentName) || event.target;
    } else {
      event.realTarget = event.target;
    }
  }

  Object.defineProperty(event, 'target', {
    get() {
      return (0, _element.polymerWrap)(target);
    },
    enumerable: true,
    configurable: true
  });

  return event;
}

exports.default = EventManager;
function getListenersCounter() {
  return listenersCounter;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stopImmediatePropagation = stopImmediatePropagation;
exports.isImmediatePropagationStopped = isImmediatePropagationStopped;
exports.stopPropagation = stopPropagation;
exports.pageX = pageX;
exports.pageY = pageY;
exports.isRightClick = isRightClick;
exports.isLeftClick = isLeftClick;

var _element = __webpack_require__(0);

function stopImmediatePropagation(event) {
  event.isImmediatePropagationEnabled = false;
  event.cancelBubble = true;
}

function isImmediatePropagationStopped(event) {
  return event.isImmediatePropagationEnabled === false;
}

function stopPropagation(event) {
  if (typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

function pageX(event) {
  if (event.pageX) {
    return event.pageX;
  }

  return event.clientX + (0, _element.getWindowScrollLeft)();
}

function pageY(event) {
  if (event.pageY) {
    return event.pageY;
  }

  return event.clientY + (0, _element.getWindowScrollTop)();
}

function isRightClick(event) {
  return event.button === 2;
}

function isLeftClick(event) {
  return event.button === 0;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

const REGISTERED_HOOKS = ['afterCellMetaReset', 'afterChange', 'afterChangesObserved', 'afterContextMenuDefaultOptions', 'beforeContextMenuSetItems', 'afterDropdownMenuDefaultOptions', 'beforeDropdownMenuSetItems', 'afterContextMenuHide', 'afterContextMenuShow', 'afterCopyLimit', 'beforeCreateCol', 'afterCreateCol', 'beforeCreateRow', 'afterCreateRow', 'afterDeselect', 'afterDestroy', 'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetRowHeader', 'afterInit', 'afterLoadData', 'afterMomentumScroll', 'afterOnCellCornerMouseDown', 'afterOnCellCornerDblClick', 'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterOnCellMouseOut', 'afterRemoveCol', 'afterRemoveRow', 'afterRender', 'beforeRenderer', 'afterRenderer', 'afterScrollHorizontally', 'afterScrollVertically', 'afterSelection', 'afterSelectionByProp', 'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterRemoveCellMeta', 'afterSetDataAtCell', 'afterSetDataAtRowProp', 'afterUpdateSettings', 'afterValidate', 'beforeAutofill', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeDrawBorders', 'beforeGetCellMeta', 'beforeRemoveCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown', 'beforeOnCellMouseOver', 'beforeOnCellMouseOut', 'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeSetRangeStart', 'beforeSetRangeEnd', 'beforeTouchScroll', 'beforeValidate', 'beforeValueRender', 'construct', 'init', 'modifyCol', 'unmodifyCol', 'unmodifyRow', 'modifyColHeader', 'modifyColWidth', 'modifyRow', 'modifyRowHeader', 'modifyRowHeight', 'modifyData', 'modifyRowData', 'persistentStateLoad', 'persistentStateReset', 'persistentStateSave', 'beforeColumnSort', 'afterColumnSort', 'modifyAutofillRange', 'modifyCopyableRange', 'beforeCut', 'afterCut', 'beforeCopy', 'afterCopy', 'beforePaste', 'afterPaste', 'beforeColumnMove', 'afterColumnMove', 'beforeRowMove', 'afterRowMove', 'beforeColumnResize', 'afterColumnResize', 'beforeRowResize', 'afterRowResize', 'afterGetColumnHeaderRenderers', 'afterGetRowHeaderRenderers', 'beforeStretchingColumnWidth', 'beforeFilter', 'afterFilter', 'modifyColumnHeaderHeight', 'beforeUndo', 'afterUndo', 'beforeRedo', 'afterRedo', 'modifyRowHeaderWidth', 'beforeAutofillInsidePopulate', 'modifyTransformStart', 'modifyTransformEnd', 'afterModifyTransformStart', 'afterModifyTransformEnd', 'afterViewportRowCalculatorOverride', 'afterViewportColumnCalculatorOverride', 'afterPluginsInitialized', 'manualRowHeights', 'skipLengthCache', 'afterTrimRow', 'afterUntrimRow', 'afterDropdownMenuShow', 'afterDropdownMenuHide', 'hiddenRow', 'hiddenColumn', 'beforeAddChild', 'afterAddChild', 'beforeDetachChild', 'afterDetachChild', 'afterBeginEditing'];

class Hooks {
  static getSingleton() {
    return globalSingleton;
  }

  constructor() {
    this.globalBucket = this.createEmptyBucket();
  }

  createEmptyBucket() {
    const bucket = Object.create(null);

    (0, _array.arrayEach)(REGISTERED_HOOKS, hook => bucket[hook] = []);

    return bucket;
  }

  getBucket() {
    let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (context) {
      if (!context.pluginHookBucket) {
        context.pluginHookBucket = this.createEmptyBucket();
      }

      return context.pluginHookBucket;
    }

    return this.globalBucket;
  }

  add(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (Array.isArray(callback)) {
      (0, _array.arrayEach)(callback, c => this.add(key, c, context));
    } else {
      const bucket = this.getBucket(context);

      if (typeof bucket[key] === 'undefined') {
        this.register(key);
        bucket[key] = [];
      }
      callback.skip = false;

      if (bucket[key].indexOf(callback) === -1) {
        let foundInitialHook = false;

        if (callback.initialHook) {
          (0, _array.arrayEach)(bucket[key], (cb, i) => {
            if (cb.initialHook) {
              bucket[key][i] = callback;
              foundInitialHook = true;

              return false;
            }
          });
        }

        if (!foundInitialHook) {
          bucket[key].push(callback);
        }
      }
    }

    return this;
  }

  once(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (Array.isArray(callback)) {
      (0, _array.arrayEach)(callback, c => this.once(key, c, context));
    } else {
      callback.runOnce = true;
      this.add(key, callback, context);
    }
  }

  remove(key, callback) {
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    let bucket = this.getBucket(context);

    if (typeof bucket[key] !== 'undefined') {
      if (bucket[key].indexOf(callback) >= 0) {
        callback.skip = true;

        return true;
      }
    }

    return false;
  }

  has(key) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    let bucket = this.getBucket(context);

    return !!(bucket[key] !== void 0 && bucket[key].length);
  }

  run(context, key, p1, p2, p3, p4, p5, p6) {
    {
      const globalHandlers = this.globalBucket[key];
      let index = -1;
      let length = globalHandlers ? globalHandlers.length : 0;

      if (length) {
        while (++index < length) {
          if (!globalHandlers[index] || globalHandlers[index].skip) {
            continue;
          }

          let res = globalHandlers[index].call(context, p1, p2, p3, p4, p5, p6);

          if (res !== void 0) {
            p1 = res;
          }
          if (globalHandlers[index] && globalHandlers[index].runOnce) {
            this.remove(key, globalHandlers[index]);
          }
        }
      }
    }
    {
      const localHandlers = this.getBucket(context)[key];
      let index = -1;
      let length = localHandlers ? localHandlers.length : 0;

      if (length) {
        while (++index < length) {
          if (!localHandlers[index] || localHandlers[index].skip) {
            continue;
          }

          let res = localHandlers[index].call(context, p1, p2, p3, p4, p5, p6);

          if (res !== void 0) {
            p1 = res;
          }
          if (localHandlers[index] && localHandlers[index].runOnce) {
            this.remove(key, localHandlers[index], context);
          }
        }
      }
    }

    return p1;
  }

  destroy() {
    let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    (0, _object.objectEach)(this.getBucket(context), (value, key, bucket) => bucket[key].length = 0);
  }

  register(key) {
    if (!this.isRegistered(key)) {
      REGISTERED_HOOKS.push(key);
    }
  }

  deregister(key) {
    if (this.isRegistered(key)) {
      REGISTERED_HOOKS.splice(REGISTERED_HOOKS.indexOf(key), 1);
    }
  }

  isRegistered(key) {
    return REGISTERED_HOOKS.indexOf(key) >= 0;
  }

  getRegistered() {
    return REGISTERED_HOOKS;
  }
}

const globalSingleton = new Hooks();

exports.default = Hooks;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getPluginName = exports.getRegistredPluginNames = exports.getPlugin = exports.registerPlugin = undefined;

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _object = __webpack_require__(2);

var _string = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registeredPlugins = new WeakMap();

function registerPlugin(pluginName, PluginClass) {
  pluginName = (0, _string.toUpperCaseFirst)(pluginName);

  _pluginHooks2.default.getSingleton().add('construct', function () {
    let holder;

    if (!registeredPlugins.has(this)) {
      registeredPlugins.set(this, {});
    }
    holder = registeredPlugins.get(this);

    if (!holder[pluginName]) {
      holder[pluginName] = new PluginClass(this);
    }
  });
  _pluginHooks2.default.getSingleton().add('afterDestroy', function () {
    if (registeredPlugins.has(this)) {
      let pluginsHolder = registeredPlugins.get(this);

      (0, _object.objectEach)(pluginsHolder, plugin => plugin.destroy());
      registeredPlugins.delete(this);
    }
  });
}

function getPlugin(instance, pluginName) {
  if (typeof pluginName != 'string') {
    throw Error('Only strings can be passed as "plugin" parameter');
  }
  let _pluginName = (0, _string.toUpperCaseFirst)(pluginName);

  if (!registeredPlugins.has(instance) || !registeredPlugins.get(instance)[_pluginName]) {
    return void 0;
  }

  return registeredPlugins.get(instance)[_pluginName];
}

function getRegistredPluginNames(hotInstance) {
  return registeredPlugins.has(hotInstance) ? Object.keys(registeredPlugins.get(hotInstance)) : [];
}

function getPluginName(hotInstance, plugin) {
  let pluginName = null;

  if (registeredPlugins.has(hotInstance)) {
    (0, _object.objectEach)(registeredPlugins.get(hotInstance), (pluginInstance, name) => {
      if (pluginInstance === plugin) {
        pluginName = name;
      }
    });
  }

  return pluginName;
}

exports.registerPlugin = registerPlugin;
exports.getPlugin = getPlugin;
exports.getRegistredPluginNames = getRegistredPluginNames;
exports.getPluginName = getPluginName;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Viewport = exports.TableRenderer = exports.Table = exports.Settings = exports.Selection = exports.Scroll = exports.Overlays = exports.Event = exports.Core = exports.default = exports.Border = exports.TopLeftCornerOverlay = exports.TopOverlay = exports.LeftOverlay = exports.DebugOverlay = exports.RowFilter = exports.ColumnFilter = exports.CellRange = exports.CellCoords = exports.ViewportRowsCalculator = exports.ViewportColumnsCalculator = undefined;

var _viewportColumns = __webpack_require__(35);

var _viewportColumns2 = _interopRequireDefault(_viewportColumns);

var _viewportRows = __webpack_require__(36);

var _viewportRows2 = _interopRequireDefault(_viewportRows);

var _coords = __webpack_require__(19);

var _coords2 = _interopRequireDefault(_coords);

var _range = __webpack_require__(28);

var _range2 = _interopRequireDefault(_range);

var _column = __webpack_require__(39);

var _column2 = _interopRequireDefault(_column);

var _row = __webpack_require__(40);

var _row2 = _interopRequireDefault(_row);

var _debug = __webpack_require__(58);

var _debug2 = _interopRequireDefault(_debug);

var _left = __webpack_require__(59);

var _left2 = _interopRequireDefault(_left);

var _top = __webpack_require__(60);

var _top2 = _interopRequireDefault(_top);

var _topLeftCorner = __webpack_require__(61);

var _topLeftCorner2 = _interopRequireDefault(_topLeftCorner);

var _border = __webpack_require__(34);

var _border2 = _interopRequireDefault(_border);

var _core = __webpack_require__(37);

var _core2 = _interopRequireDefault(_core);

var _event = __webpack_require__(38);

var _event2 = _interopRequireDefault(_event);

var _overlays = __webpack_require__(41);

var _overlays2 = _interopRequireDefault(_overlays);

var _scroll = __webpack_require__(42);

var _scroll2 = _interopRequireDefault(_scroll);

var _selection = __webpack_require__(62);

var _selection2 = _interopRequireDefault(_selection);

var _settings = __webpack_require__(43);

var _settings2 = _interopRequireDefault(_settings);

var _table = __webpack_require__(44);

var _table2 = _interopRequireDefault(_table);

var _tableRenderer = __webpack_require__(45);

var _tableRenderer2 = _interopRequireDefault(_tableRenderer);

var _viewport = __webpack_require__(46);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ViewportColumnsCalculator = _viewportColumns2.default;
exports.ViewportRowsCalculator = _viewportRows2.default;
exports.CellCoords = _coords2.default;
exports.CellRange = _range2.default;
exports.ColumnFilter = _column2.default;
exports.RowFilter = _row2.default;
exports.DebugOverlay = _debug2.default;
exports.LeftOverlay = _left2.default;
exports.TopOverlay = _top2.default;
exports.TopLeftCornerOverlay = _topLeftCorner2.default;
exports.Border = _border2.default;
exports.default = _core2.default;
exports.Core = _core2.default;
exports.Event = _event2.default;
exports.Overlays = _overlays2.default;
exports.Scroll = _scroll2.default;
exports.Selection = _selection2.default;
exports.Settings = _settings2.default;
exports.Table = _table2.default;
exports.TableRenderer = _tableRenderer2.default;
exports.Viewport = _viewport2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isIE8 = isIE8;
exports.isIE9 = isIE9;
exports.isSafari = isSafari;
exports.isChrome = isChrome;
exports.isMobileBrowser = isMobileBrowser;

var _isIE8 = !document.createTextNode('test').textContent;

function isIE8() {
  return _isIE8;
}

var _isIE9 = !!document.documentMode;

function isIE9() {
  return _isIE9;
}

var _isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

function isSafari() {
  return _isSafari;
}

var _isChrome = /Chrome/.test(navigator.userAgent) && /Google/.test(navigator.vendor);

function isChrome() {
  return _isChrome;
}

function isMobileBrowser(userAgent) {
  if (!userAgent) {
    userAgent = navigator.userAgent;
  }

  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _core = __webpack_require__(37);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registeredOverlays = {};

class Overlay {
  static get CLONE_TOP() {
    return 'top';
  }

  static get CLONE_BOTTOM() {
    return 'bottom';
  }

  static get CLONE_LEFT() {
    return 'left';
  }

  static get CLONE_TOP_LEFT_CORNER() {
    return 'top_left_corner';
  }

  static get CLONE_BOTTOM_LEFT_CORNER() {
    return 'bottom_left_corner';
  }

  static get CLONE_DEBUG() {
    return 'debug';
  }

  static get CLONE_TYPES() {
    return [Overlay.CLONE_TOP, Overlay.CLONE_BOTTOM, Overlay.CLONE_LEFT, Overlay.CLONE_TOP_LEFT_CORNER, Overlay.CLONE_BOTTOM_LEFT_CORNER, Overlay.CLONE_DEBUG];
  }

  static registerOverlay(type, overlayClass) {
    if (Overlay.CLONE_TYPES.indexOf(type) === -1) {
      throw new Error(`Unsupported overlay (${type}).`);
    }
    registeredOverlays[type] = overlayClass;
  }

  static createOverlay(type, wot) {
    return new registeredOverlays[type](wot);
  }

  static hasOverlay(type) {
    return registeredOverlays[type] !== void 0;
  }

  static isOverlayTypeOf(overlay, type) {
    if (!overlay || !registeredOverlays[type]) {
      return false;
    }

    return overlay instanceof registeredOverlays[type];
  }

  constructor(wotInstance) {
    (0, _object.defineGetter)(this, 'wot', wotInstance, {
      writable: false
    });

    this.instance = this.wot;

    this.type = '';
    this.mainTableScrollableElement = null;
    this.TABLE = this.wot.wtTable.TABLE;
    this.hider = this.wot.wtTable.hider;
    this.spreader = this.wot.wtTable.spreader;
    this.holder = this.wot.wtTable.holder;
    this.wtRootElement = this.wot.wtTable.wtRootElement;
    this.trimmingContainer = (0, _element.getTrimmingContainer)(this.hider.parentNode.parentNode);
    this.areElementSizesAdjusted = false;
    this.updateStateOfRendering();
  }

  updateStateOfRendering() {
    const previousState = this.needFullRender;

    this.needFullRender = this.shouldBeRendered();

    const changed = previousState !== this.needFullRender;

    if (changed && !this.needFullRender) {
      this.reset();
    }

    return changed;
  }

  shouldBeRendered() {
    return true;
  }

  updateTrimmingContainer() {
    this.trimmingContainer = (0, _element.getTrimmingContainer)(this.hider.parentNode.parentNode);
  }

  updateMainScrollableElement() {
    this.mainTableScrollableElement = (0, _element.getScrollableElement)(this.wot.wtTable.TABLE);
  }

  makeClone(direction) {
    if (Overlay.CLONE_TYPES.indexOf(direction) === -1) {
      throw new Error(`Clone type "${direction}" is not supported.`);
    }
    let clone = document.createElement('DIV');
    let clonedTable = document.createElement('TABLE');

    clone.className = `ht_clone_${direction} handsontable`;
    clone.style.position = 'absolute';
    clone.style.top = 0;
    clone.style.left = 0;
    clone.style.overflow = 'hidden';

    clonedTable.className = this.wot.wtTable.TABLE.className;
    clone.appendChild(clonedTable);

    this.type = direction;
    this.wot.wtTable.wtRootElement.parentNode.appendChild(clone);

    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (preventOverflow === true || preventOverflow === 'horizontal' && this.type === Overlay.CLONE_TOP || preventOverflow === 'vertical' && this.type === Overlay.CLONE_LEFT) {
      this.mainTableScrollableElement = window;
    } else {
      this.mainTableScrollableElement = (0, _element.getScrollableElement)(this.wot.wtTable.TABLE);
    }

    return new _core2.default({
      cloneSource: this.wot,
      cloneOverlay: this,
      table: clonedTable
    });
  }

  refresh() {
    let fastDraw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextCycleRenderFlag = this.shouldBeRendered();

    if (this.clone && (this.needFullRender || nextCycleRenderFlag)) {
      this.clone.draw(fastDraw);
    }
    this.needFullRender = nextCycleRenderFlag;
  }

  reset() {
    if (!this.clone) {
      return;
    }
    const holder = this.clone.wtTable.holder;
    const hider = this.clone.wtTable.hider;
    let holderStyle = holder.style;
    let hidderStyle = hider.style;
    let rootStyle = holder.parentNode.style;

    (0, _array.arrayEach)([holderStyle, hidderStyle, rootStyle], style => {
      style.width = '';
      style.height = '';
    });
  }

  destroy() {
    new _eventManager2.default(this.clone).destroy();
  }
}

exports.default = Overlay;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _recordTranslator = __webpack_require__(51);

var _plugins = __webpack_require__(7);

const privatePool = new WeakMap();
let initializedPlugins = null;

class BasePlugin {
  constructor(hotInstance) {
    (0, _object.defineGetter)(this, 'hot', hotInstance, {
      writable: false
    });
    (0, _object.defineGetter)(this, 't', (0, _recordTranslator.getTranslator)(hotInstance), {
      writable: false
    });

    privatePool.set(this, { hooks: {} });
    initializedPlugins = null;

    this.pluginName = null;
    this.pluginsInitializedCallbacks = [];
    this.isPluginsReady = false;
    this.enabled = false;
    this.initialized = false;

    this.hot.addHook('afterPluginsInitialized', () => this.onAfterPluginsInitialized());
    this.hot.addHook('afterUpdateSettings', () => this.onUpdateSettings());
    this.hot.addHook('beforeInit', () => this.init());
  }

  init() {
    this.pluginName = (0, _plugins.getPluginName)(this.hot, this);

    if (this.isEnabled && this.isEnabled()) {
      this.enablePlugin();
    }
    if (!initializedPlugins) {
      initializedPlugins = (0, _plugins.getRegistredPluginNames)(this.hot);
    }
    if (initializedPlugins.indexOf(this.pluginName) >= 0) {
      initializedPlugins.splice(initializedPlugins.indexOf(this.pluginName), 1);
    }
    if (!initializedPlugins.length) {
      this.hot.runHooks('afterPluginsInitialized');
    }
    this.initialized = true;
  }

  enablePlugin() {
    this.enabled = true;
  }

  disablePlugin() {
    if (this.eventManager) {
      this.eventManager.clear();
    }
    this.clearHooks();
    this.enabled = false;
  }

  addHook(name, callback) {
    privatePool.get(this).hooks[name] = privatePool.get(this).hooks[name] || [];

    const hooks = privatePool.get(this).hooks[name];

    this.hot.addHook(name, callback);
    hooks.push(callback);
    privatePool.get(this).hooks[name] = hooks;
  }

  removeHooks(name) {
    (0, _array.arrayEach)(privatePool.get(this).hooks[name] || [], callback => {
      this.hot.removeHook(name, callback);
    });
  }

  clearHooks() {
    const hooks = privatePool.get(this).hooks;

    (0, _object.objectEach)(hooks, (callbacks, name) => this.removeHooks(name));
    hooks.length = 0;
  }

  callOnPluginsReady(callback) {
    if (this.isPluginsReady) {
      callback();
    } else {
      this.pluginsInitializedCallbacks.push(callback);
    }
  }

  onAfterPluginsInitialized() {
    (0, _array.arrayEach)(this.pluginsInitializedCallbacks, callback => callback());
    this.pluginsInitializedCallbacks.length = 0;
    this.isPluginsReady = true;
  }

  onUpdateSettings() {
    if (this.isEnabled) {
      if (this.enabled && !this.isEnabled()) {
        this.disablePlugin();
      }
      if (!this.enabled && this.isEnabled()) {
        this.enablePlugin();
      }
      if (this.enabled && this.isEnabled()) {
        this.updatePlugin();
      }
    }
  }

  updatePlugin() {}

  destroy() {
    if (this.eventManager) {
      this.eventManager.destroy();
    }
    this.clearHooks();

    (0, _object.objectEach)(this, (value, property) => {
      if (property !== 'hot' && property !== 't') {
        this[property] = null;
      }
    });
    delete this.t;
    delete this.hot;
  }
}

exports.default = BasePlugin;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stringify = stringify;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.isRegExp = isRegExp;
exports._injectProductInfo = _injectProductInfo;

var _element = __webpack_require__(0);

var _templateLiteralTag = __webpack_require__(68);

function stringify(value) {
  let result;

  switch (typeof value) {
    case 'string':
    case 'number':
      result = `${value}`;
      break;

    case 'object':
      result = value === null ? '' : value.toString();
      break;
    case 'undefined':
      result = '';
      break;
    default:
      result = value.toString();
      break;
  }

  return result;
}

function isDefined(variable) {
  return typeof variable !== 'undefined';
}

function isUndefined(variable) {
  return typeof variable === 'undefined';
}

function isEmpty(variable) {
  return variable === null || variable === '' || isUndefined(variable);
}

function isRegExp(variable) {
  return Object.prototype.toString.call(variable) === '[object RegExp]';
}

const _m = '\x6C\x65\x6E\x67\x74\x68';
const _hd = v => parseInt(v, 16);
const _pi = v => parseInt(v, 10);
const _ss = (v, s, l) => v['\x73\x75\x62\x73\x74\x72'](s, l);
const _cp = v => v['\x63\x6F\x64\x65\x50\x6F\x69\x6E\x74\x41\x74'](0) - 65;
const _norm = v => v.replace(/\-/g, '');
const _extractTime = v => _hd(_ss(_norm(v), _hd('12'), _cp('\x46'))) / (_hd(_ss(_norm(v), _cp('\x42'), ~~![][_m])) || 9);
const _ignored = () => typeof location !== 'undefined' && /^([a-z0-9\-]+\.)?\x68\x61\x6E\x64\x73\x6F\x6E\x74\x61\x62\x6C\x65\x2E\x63\x6F\x6D$/i.test(location.host);
let _notified = false;

function _injectProductInfo(key, element) {
  key = _norm(key || '');

  let warningMessage = '';
  let showDomMessage = true;
  const schemaValidity = _checkKeySchema(key);
  const ignored = _ignored();
  const trial = isEmpty(key) || key === 'trial';

  if (trial || schemaValidity) {
    if (schemaValidity) {
      const releaseTime = Math.floor(moment('06/09/2017', 'DD/MM/YYYY').toDate().getTime() / 8.64e7);
      const keyGenTime = _extractTime(key);

      if (keyGenTime > 45000 || keyGenTime !== parseInt(keyGenTime, 10)) {
        warningMessage = 'The license key provided to Handsontable Pro is invalid. Make sure you pass it correctly.';
      }

      if (!warningMessage) {
        if (releaseTime > keyGenTime + 1) {
          warningMessage = _templateLiteralTag.toSingleLine`
          Your license key of Handsontable Pro has expired.‌‌‌‌\x20
          Renew your maintenance plan at https://handsontable.com or downgrade to the previous version of the software.
          `;
        }
        showDomMessage = releaseTime > keyGenTime + 15;
      }
    } else {
      warningMessage = 'Evaluation version of Handsontable Pro. Not licensed for use in a production environment.';
    }
  } else {
    warningMessage = 'The license key provided to Handsontable Pro is invalid. Make sure you pass it correctly.';
  }
  if (ignored) {
    warningMessage = false;
    showDomMessage = false;
  }

  if (warningMessage && !_notified) {
    console[trial ? 'info' : 'warn'](warningMessage);
    _notified = true;
  }
  if (showDomMessage && element.parentNode) {
    const message = document.createElement('div');

    (0, _element.addClass)(message, 'display-license-info');
    message.appendChild(document.createTextNode('Evaluation version of Handsontable Pro.'));
    message.appendChild(document.createElement('br'));
    message.appendChild(document.createTextNode('Not licensed for production use.'));

    element.parentNode.insertBefore(message, element.nextSibling);
  }
}

function _checkKeySchema(v) {
  let z = [][_m];
  let p = z;

  if (v[_m] !== _cp('\x5A')) {
    return false;
  }

  for (let c = '', i = '\x42\x3C\x48\x34\x50\x2B'.split(''), j = _cp(i.shift()); j; j = _cp(i.shift() || 'A')) {
    --j < ''[_m] ? p = p | (_pi(`${_pi(_hd(c) + (_hd(_ss(v, Math.abs(j), 2)) + []).padStart(2, '0'))}`) % _cp('\xA2') || 2) >> 1 : c = _ss(v, j, !j ? 6 : i[_m] === 1 ? 9 : 8);
  }

  return p === z;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeSelection = normalizeSelection;
exports.isSeparator = isSeparator;
exports.hasSubMenu = hasSubMenu;
exports.isDisabled = isDisabled;
exports.isSelectionDisabled = isSelectionDisabled;
exports.getValidSelection = getValidSelection;
exports.prepareVerticalAlignClass = prepareVerticalAlignClass;
exports.prepareHorizontalAlignClass = prepareHorizontalAlignClass;
exports.getAlignmentClasses = getAlignmentClasses;
exports.align = align;
exports.checkSelectionConsistency = checkSelectionConsistency;
exports.markLabelAsSelected = markLabelAsSelected;
exports.isItemHidden = isItemHidden;
exports.filterSeparators = filterSeparators;

var _array = __webpack_require__(1);

var _element = __webpack_require__(0);

var _separator = __webpack_require__(48);

function normalizeSelection(selRange) {
  return {
    start: selRange.getTopLeftCorner(),
    end: selRange.getBottomRightCorner()
  };
}

function isSeparator(cell) {
  return (0, _element.hasClass)(cell, 'htSeparator');
}

function hasSubMenu(cell) {
  return (0, _element.hasClass)(cell, 'htSubmenu');
}

function isDisabled(cell) {
  return (0, _element.hasClass)(cell, 'htDisabled');
}

function isSelectionDisabled(cell) {
  return (0, _element.hasClass)(cell, 'htSelectionDisabled');
}

function getValidSelection(hot) {
  let selected = hot.getSelected();

  if (!selected) {
    return null;
  }
  if (selected[0] < 0) {
    return null;
  }

  return selected;
}

function prepareVerticalAlignClass(className, alignment) {
  if (className.indexOf(alignment) != -1) {
    return className;
  }
  className = className.replace('htTop', '').replace('htMiddle', '').replace('htBottom', '').replace('  ', '');

  className += ` ${alignment}`;

  return className;
}

function prepareHorizontalAlignClass(className, alignment) {
  if (className.indexOf(alignment) != -1) {
    return className;
  }
  className = className.replace('htLeft', '').replace('htCenter', '').replace('htRight', '').replace('htJustify', '').replace('  ', '');

  className += ` ${alignment}`;

  return className;
}

function getAlignmentClasses(range, callback) {
  const classes = {};

  for (let row = range.from.row; row <= range.to.row; row++) {
    for (let col = range.from.col; col <= range.to.col; col++) {
      if (!classes[row]) {
        classes[row] = [];
      }
      classes[row][col] = callback(row, col);
    }
  }

  return classes;
}

function align(range, type, alignment, cellDescriptor, propertySetter) {
  if (range.from.row == range.to.row && range.from.col == range.to.col) {
    applyAlignClassName(range.from.row, range.from.col, type, alignment, cellDescriptor, propertySetter);
  } else {
    for (let row = range.from.row; row <= range.to.row; row++) {
      for (let col = range.from.col; col <= range.to.col; col++) {
        applyAlignClassName(row, col, type, alignment, cellDescriptor, propertySetter);
      }
    }
  }
}

function applyAlignClassName(row, col, type, alignment, cellDescriptor, propertySetter) {
  let cellMeta = cellDescriptor(row, col);
  let className = alignment;

  if (cellMeta.className) {
    if (type === 'vertical') {
      className = prepareVerticalAlignClass(cellMeta.className, alignment);
    } else {
      className = prepareHorizontalAlignClass(cellMeta.className, alignment);
    }
  }

  propertySetter(row, col, 'className', className);
}

function checkSelectionConsistency(range, comparator) {
  let result = false;

  if (range) {
    range.forAll((row, col) => {
      if (comparator(row, col)) {
        result = true;

        return false;
      }
    });
  }

  return result;
}

function markLabelAsSelected(label) {
  return `<span class="selected">${String.fromCharCode(10003)}</span>${label}`;
}

function isItemHidden(item, instance) {
  return !item.hidden || !(typeof item.hidden == 'function' && item.hidden.call(instance));
}

function shiftSeparators(items, separator) {
  let result = items.slice(0);

  for (let i = 0; i < result.length;) {
    if (result[i].name === separator) {
      result.shift();
    } else {
      break;
    }
  }
  return result;
}

function popSeparators(items, separator) {
  let result = items.slice(0);

  result.reverse();
  result = shiftSeparators(result, separator);
  result.reverse();

  return result;
}

function removeDuplicatedSeparators(items) {
  let result = [];

  (0, _array.arrayEach)(items, (value, index) => {
    if (index > 0) {
      if (result[result.length - 1].name !== value.name) {
        result.push(value);
      }
    } else {
      result.push(value);
    }
  });

  return result;
}

function filterSeparators(items) {
  let separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _separator.KEY;

  let result = items.slice(0);

  result = shiftSeparators(result, separator);
  result = popSeparators(result, separator);
  result = removeDuplicatedSeparators(result);

  return result;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.isTouchSupported = isTouchSupported;
exports.isWebComponentSupportedNatively = isWebComponentSupportedNatively;
exports.hasCaptionProblem = hasCaptionProblem;
exports.getComparisonFunction = getComparisonFunction;

let lastTime = 0;
let vendors = ['ms', 'moz', 'webkit', 'o'];
let _requestAnimationFrame = window.requestAnimationFrame;
let _cancelAnimationFrame = window.cancelAnimationFrame;

for (let x = 0; x < vendors.length && !_requestAnimationFrame; ++x) {
  _requestAnimationFrame = window[`${vendors[x]}RequestAnimationFrame`];
  _cancelAnimationFrame = window[`${vendors[x]}CancelAnimationFrame`] || window[`${vendors[x]}CancelRequestAnimationFrame`];
}

if (!_requestAnimationFrame) {
  _requestAnimationFrame = function _requestAnimationFrame(callback) {
    let currTime = new Date().getTime();
    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
    let id = window.setTimeout(() => {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;

    return id;
  };
}

if (!_cancelAnimationFrame) {
  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    clearTimeout(id);
  };
}

function requestAnimationFrame(callback) {
  return _requestAnimationFrame.call(window, callback);
}

function cancelAnimationFrame(id) {
  _cancelAnimationFrame.call(window, id);
}

function isTouchSupported() {
  return 'ontouchstart' in window;
}

function isWebComponentSupportedNatively() {
  var test = document.createElement('div');

  return !!(test.createShadowRoot && test.createShadowRoot.toString().match(/\[native code\]/));
}

var _hasCaptionProblem;

function detectCaptionProblem() {
  var TABLE = document.createElement('TABLE');
  TABLE.style.borderSpacing = 0;
  TABLE.style.borderWidth = 0;
  TABLE.style.padding = 0;
  var TBODY = document.createElement('TBODY');
  TABLE.appendChild(TBODY);
  TBODY.appendChild(document.createElement('TR'));
  TBODY.firstChild.appendChild(document.createElement('TD'));
  TBODY.firstChild.firstChild.innerHTML = '<tr><td>t<br>t</td></tr>';

  var CAPTION = document.createElement('CAPTION');
  CAPTION.innerHTML = 'c<br>c<br>c<br>c';
  CAPTION.style.padding = 0;
  CAPTION.style.margin = 0;
  TABLE.insertBefore(CAPTION, TBODY);

  document.body.appendChild(TABLE);
  _hasCaptionProblem = TABLE.offsetHeight < 2 * TABLE.lastChild.offsetHeight;
  document.body.removeChild(TABLE);
}

function hasCaptionProblem() {
  if (_hasCaptionProblem === void 0) {
    detectCaptionProblem();
  }

  return _hasCaptionProblem;
}

let comparisonFunction;

function getComparisonFunction(language) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (comparisonFunction) {
    return comparisonFunction;
  }

  if (typeof Intl === 'object') {
    comparisonFunction = new Intl.Collator(language, options).compare;
  } else if (typeof String.prototype.localeCompare === 'function') {
    comparisonFunction = (a, b) => `${a}`.localeCompare(b);
  } else {
    comparisonFunction = (a, b) => {
      if (a === b) {
        return 0;
      }

      return a > b ? -1 : 1;
    };
  }

  return comparisonFunction;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toUpperCaseFirst = toUpperCaseFirst;
exports.equalsIgnoreCase = equalsIgnoreCase;
exports.randomString = randomString;
exports.isPercentValue = isPercentValue;
exports.substitute = substitute;
exports.stripTags = stripTags;

var _mixed = __webpack_require__(12);

var _number = __webpack_require__(3);

function toUpperCaseFirst(string) {
  return string[0].toUpperCase() + string.substr(1);
}

function equalsIgnoreCase() {
  let unique = [];

  for (var _len = arguments.length, strings = Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  let length = strings.length;

  while (length--) {
    let string = (0, _mixed.stringify)(strings[length]).toLowerCase();

    if (unique.indexOf(string) === -1) {
      unique.push(string);
    }
  }

  return unique.length === 1;
}

function randomString() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + s4() + s4();
}

function isPercentValue(value) {
  return (/^([0-9][0-9]?%$)|(^100%$)/.test(value)
  );
}

function substitute(template) {
  let variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return `${template}`.replace(/(?:\\)?\[([^[\]]+)]/g, (match, name) => {
    if (match.charAt(0) === '\\') {
      return match.substr(1, match.length - 1);
    }

    return variables[name] === void 0 ? '' : variables[name];
  });
}

const STRIP_TAGS_REGEX = /<\/?\w+\/?>|<\w+[\s|/][^>]*>/gi;

function stripTags(string) {
  string += '';

  return string.replace(STRIP_TAGS_REGEX, '');
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY_CODES = undefined;
exports.isPrintableChar = isPrintableChar;
exports.isMetaKey = isMetaKey;
exports.isCtrlKey = isCtrlKey;
exports.isKey = isKey;

var _array = __webpack_require__(1);

const KEY_CODES = exports.KEY_CODES = {
  MOUSE_LEFT: 1,
  MOUSE_RIGHT: 3,
  MOUSE_MIDDLE: 2,
  BACKSPACE: 8,
  COMMA: 188,
  INSERT: 45,
  DELETE: 46,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  CONTROL_LEFT: 91,
  COMMAND_LEFT: 17,
  COMMAND_RIGHT: 93,
  ALT: 18,
  HOME: 36,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  SPACE: 32,
  SHIFT: 16,
  CAPS_LOCK: 20,
  TAB: 9,
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  A: 65,
  X: 88,
  C: 67,
  V: 86
};

function isPrintableChar(keyCode) {
  return keyCode == 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 111 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222 || keyCode >= 226 || keyCode >= 65 && keyCode <= 90;
}

function isMetaKey(keyCode) {
  var metaKeys = [KEY_CODES.ARROW_DOWN, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_RIGHT, KEY_CODES.HOME, KEY_CODES.END, KEY_CODES.DELETE, KEY_CODES.BACKSPACE, KEY_CODES.F1, KEY_CODES.F2, KEY_CODES.F3, KEY_CODES.F4, KEY_CODES.F5, KEY_CODES.F6, KEY_CODES.F7, KEY_CODES.F8, KEY_CODES.F9, KEY_CODES.F10, KEY_CODES.F11, KEY_CODES.F12, KEY_CODES.TAB, KEY_CODES.PAGE_DOWN, KEY_CODES.PAGE_UP, KEY_CODES.ENTER, KEY_CODES.ESCAPE, KEY_CODES.SHIFT, KEY_CODES.CAPS_LOCK, KEY_CODES.ALT];

  return metaKeys.indexOf(keyCode) !== -1;
}

function isCtrlKey(keyCode) {
  return [KEY_CODES.CONTROL_LEFT, 224, KEY_CODES.COMMAND_LEFT, KEY_CODES.COMMAND_RIGHT].indexOf(keyCode) !== -1;
}

function isKey(keyCode, baseCode) {
  let keys = baseCode.split('|');
  let result = false;

  (0, _array.arrayEach)(keys, key => {
    if (keyCode === KEY_CODES[key]) {
      result = true;

      return false;
    }
  });

  return result;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isFunction = isFunction;
exports.throttle = throttle;
exports.throttleAfterHits = throttleAfterHits;
exports.debounce = debounce;
exports.pipe = pipe;
exports.partial = partial;
exports.curry = curry;
exports.curryRight = curryRight;

var _array = __webpack_require__(1);

function isFunction(func) {
  return typeof func === 'function';
}

function throttle(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  let lastCalled = 0;
  let result = {
    lastCallThrottled: true
  };
  let lastTimer = null;

  function _throttle() {
    const args = arguments;
    let stamp = Date.now();
    let needCall = false;

    result.lastCallThrottled = true;

    if (!lastCalled) {
      lastCalled = stamp;
      needCall = true;
    }
    let remaining = wait - (stamp - lastCalled);

    if (needCall) {
      result.lastCallThrottled = false;
      func.apply(this, args);
    } else {
      if (lastTimer) {
        clearTimeout(lastTimer);
      }
      lastTimer = setTimeout(() => {
        result.lastCallThrottled = false;
        func.apply(this, args);
        lastCalled = 0;
        lastTimer = void 0;
      }, remaining);
    }

    return result;
  }

  return _throttle;
}

function throttleAfterHits(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  let hits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  const funcThrottle = throttle(func, wait);
  let remainHits = hits;

  function _clearHits() {
    remainHits = hits;
  }
  function _throttleAfterHits() {
    if (remainHits) {
      remainHits--;

      return func.apply(this, arguments);
    }

    return funcThrottle.apply(this, arguments);
  }
  _throttleAfterHits.clearHits = _clearHits;

  return _throttleAfterHits;
}

function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  let lastTimer = null;
  let result;

  function _debounce() {
    const args = arguments;

    if (lastTimer) {
      clearTimeout(lastTimer);
    }
    lastTimer = setTimeout(() => {
      result = func.apply(this, args);
    }, wait);

    return result;
  }

  return _debounce;
}

function pipe() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  const firstFunc = functions[0],
        restFunc = functions.slice(1);


  return function _pipe() {
    return (0, _array.arrayReduce)(restFunc, (acc, fn) => fn(acc), firstFunc.apply(this, arguments));
  };
}

function partial(func) {
  for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return function _partial() {
    for (var _len3 = arguments.length, restParams = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      restParams[_key3] = arguments[_key3];
    }

    return func.apply(this, params.concat(restParams));
  };
}

function curry(func) {
  const argsLength = func.length;

  function given(argsSoFar) {
    return function _curry() {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      const passedArgsSoFar = argsSoFar.concat(params);
      let result;

      if (passedArgsSoFar.length >= argsLength) {
        result = func.apply(this, passedArgsSoFar);
      } else {
        result = given(passedArgsSoFar);
      }

      return result;
    };
  }

  return given([]);
}

function curryRight(func) {
  const argsLength = func.length;

  function given(argsSoFar) {
    return function _curry() {
      for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
      }

      const passedArgsSoFar = argsSoFar.concat(params.reverse());
      let result;

      if (passedArgsSoFar.length >= argsLength) {
        result = func.apply(this, passedArgsSoFar);
      } else {
        result = given(passedArgsSoFar);
      }

      return result;
    };
  }

  return given([]);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRegisteredRenderers = exports.getRegisteredRendererNames = exports.hasRenderer = exports.getRenderer = exports.registerRenderer = undefined;

var _staticRegister2 = __webpack_require__(21);

var _staticRegister3 = _interopRequireDefault(_staticRegister2);

var _cellDecorator = __webpack_require__(100);

var _cellDecorator2 = _interopRequireDefault(_cellDecorator);

var _textRenderer = __webpack_require__(101);

var _textRenderer2 = _interopRequireDefault(_textRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _staticRegister = (0, _staticRegister3.default)('renderers');

const register = _staticRegister.register,
      getItem = _staticRegister.getItem,
      hasItem = _staticRegister.hasItem,
      getNames = _staticRegister.getNames,
      getValues = _staticRegister.getValues;


register('base', _cellDecorator2.default);
register('text', _textRenderer2.default);

function _getItem(name) {
  if (typeof name === 'function') {
    return name;
  }
  if (!hasItem(name)) {
    throw Error(`No registered renderer found under "${name}" name`);
  }

  return getItem(name);
}

exports.registerRenderer = register;
exports.getRenderer = _getItem;
exports.hasRenderer = hasItem;
exports.getRegisteredRendererNames = getNames;
exports.getRegisteredRenderers = getValues;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

class CellCoords {
  constructor(row, col) {
    if (typeof row !== 'undefined' && typeof col !== 'undefined') {
      this.row = row;
      this.col = col;
    } else {
      this.row = null;
      this.col = null;
    }
  }

  isValid(wotInstance) {
    if (this.row < 0 || this.col < 0) {
      return false;
    }

    if (this.row >= wotInstance.getSetting('totalRows') || this.col >= wotInstance.getSetting('totalColumns')) {
      return false;
    }

    return true;
  }

  isEqual(cellCoords) {
    if (cellCoords === this) {
      return true;
    }

    return this.row === cellCoords.row && this.col === cellCoords.col;
  }

  isSouthEastOf(testedCoords) {
    return this.row >= testedCoords.row && this.col >= testedCoords.col;
  }

  isNorthWestOf(testedCoords) {
    return this.row <= testedCoords.row && this.col <= testedCoords.col;
  }

  isSouthWestOf(testedCoords) {
    return this.row >= testedCoords.row && this.col <= testedCoords.col;
  }

  isNorthEastOf(testedCoords) {
    return this.row <= testedCoords.row && this.col >= testedCoords.col;
  }
}

exports.default = CellCoords;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRegisteredEditors = exports.getRegisteredEditorNames = exports.hasEditor = exports.getEditorInstance = exports.getEditor = exports.registerEditor = undefined;
exports.RegisteredEditor = RegisteredEditor;
exports._getEditorInstance = _getEditorInstance;

var _staticRegister2 = __webpack_require__(21);

var _staticRegister3 = _interopRequireDefault(_staticRegister2);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _baseEditor = __webpack_require__(29);

var _baseEditor2 = _interopRequireDefault(_baseEditor);

var _textEditor = __webpack_require__(67);

var _textEditor2 = _interopRequireDefault(_textEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registeredEditorClasses = new WeakMap();

var _staticRegister = (0, _staticRegister3.default)('editors');

const register = _staticRegister.register,
      getItem = _staticRegister.getItem,
      hasItem = _staticRegister.hasItem,
      getNames = _staticRegister.getNames,
      getValues = _staticRegister.getValues;


_register('base', _baseEditor2.default);
_register('text', _textEditor2.default);

function RegisteredEditor(editorClass) {
  let instances = {};
  const Clazz = editorClass;

  this.getConstructor = function () {
    return editorClass;
  };

  this.getInstance = function (hotInstance) {
    if (!(hotInstance.guid in instances)) {
      instances[hotInstance.guid] = new Clazz(hotInstance);
    }

    return instances[hotInstance.guid];
  };

  _pluginHooks2.default.getSingleton().add('afterDestroy', function () {
    instances = {};
  });
}

function _getEditorInstance(name, hotInstance) {
  let editor;

  if (typeof name === 'function') {
    if (!registeredEditorClasses.get(name)) {
      _register(null, name);
    }
    editor = registeredEditorClasses.get(name);
  } else if (typeof name === 'string') {
    editor = getItem(name);
  } else {
    throw Error('Only strings and functions can be passed as "editor" parameter');
  }

  if (!editor) {
    throw Error(`No editor registered under name "${name}"`);
  }

  return editor.getInstance(hotInstance);
}

function _getItem(name) {
  if (!hasItem(name)) {
    throw Error(`No registered editor found under "${name}" name`);
  }

  return getItem(name).getConstructor();
}

function _register(name, editorClass) {
  const editorWrapper = new RegisteredEditor(editorClass);

  if (typeof name === 'string') {
    register(name, editorWrapper);
  }
  registeredEditorClasses.set(editorClass, editorWrapper);
}

exports.registerEditor = _register;
exports.getEditor = _getItem;
exports.getEditorInstance = _getEditorInstance;
exports.hasEditor = hasItem;
exports.getRegisteredEditorNames = getNames;
exports.getRegisteredEditors = getValues;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = staticRegister;
const collection = exports.collection = new Map();

function staticRegister() {
  let namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'common';

  if (!collection.has(namespace)) {
    collection.set(namespace, new Map());
  }
  const subCollection = collection.get(namespace);

  function register(name, item) {
    subCollection.set(name, item);
  }

  function getItem(name) {
    return subCollection.get(name);
  }

  function hasItem(name) {
    return subCollection.has(name);
  }

  function getNames() {
    return [...subCollection.keys()];
  }

  function getValues() {
    return [...subCollection.values()];
  }

  return {
    register,
    getItem,
    hasItem,
    getNames,
    getValues
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRegisteredCellTypes = exports.getRegisteredCellTypeNames = exports.hasCellType = exports.getCellType = exports.registerCellType = undefined;

var _staticRegister2 = __webpack_require__(21);

var _staticRegister3 = _interopRequireDefault(_staticRegister2);

var _editors = __webpack_require__(20);

var _renderers = __webpack_require__(18);

var _validators = __webpack_require__(27);

var _textType = __webpack_require__(63);

var _textType2 = _interopRequireDefault(_textType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _staticRegister = (0, _staticRegister3.default)('cellTypes');

const register = _staticRegister.register,
      getItem = _staticRegister.getItem,
      hasItem = _staticRegister.hasItem,
      getNames = _staticRegister.getNames,
      getValues = _staticRegister.getValues;


_register('text', _textType2.default);

function _getItem(name) {
  if (!hasItem(name)) {
    throw Error(`You declared cell type "${name}" as a string that is not mapped to a known object.
                 Cell type must be an object or a string mapped to an object registered by "Handsontable.cellTypes.registerCellType" method`);
  }

  return getItem(name);
}

function _register(name, type) {
  const editor = type.editor,
        renderer = type.renderer,
        validator = type.validator;


  if (editor) {
    (0, _editors.registerEditor)(name, editor);
  }
  if (renderer) {
    (0, _renderers.registerRenderer)(name, renderer);
  }
  if (validator) {
    (0, _validators.registerValidator)(name, validator);
  }

  register(name, type);
}

exports.registerCellType = _register;
exports.getCellType = _getItem;
exports.hasCellType = hasItem;
exports.getRegisteredCellTypeNames = getNames;
exports.getRegisteredCellTypes = getValues;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Core;

var _element = __webpack_require__(0);

var _setting = __webpack_require__(25);

var _function = __webpack_require__(17);

var _mixed = __webpack_require__(12);

var _browser = __webpack_require__(9);

var _dataMap = __webpack_require__(64);

var _dataMap2 = _interopRequireDefault(_dataMap);

var _editorManager = __webpack_require__(66);

var _editorManager2 = _interopRequireDefault(_editorManager);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _plugins = __webpack_require__(7);

var _renderers = __webpack_require__(18);

var _validators = __webpack_require__(27);

var _string = __webpack_require__(15);

var _number = __webpack_require__(3);

var _tableView = __webpack_require__(102);

var _tableView2 = _interopRequireDefault(_tableView);

var _dataSource = __webpack_require__(65);

var _dataSource2 = _interopRequireDefault(_dataSource);

var _data = __webpack_require__(24);

var _recordTranslator = __webpack_require__(51);

var _rootInstance = __webpack_require__(32);

var _src = __webpack_require__(8);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _defaultSettings = __webpack_require__(31);

var _defaultSettings2 = _interopRequireDefault(_defaultSettings);

var _cellTypes = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let activeGuid = null;

function Core(rootElement, userSettings) {
  let rootInstanceSymbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var priv,
      datamap,
      dataSource,
      grid,
      selection,
      editorManager,
      instance = this,
      GridSettings = function GridSettings() {},
      eventManager = new _eventManager2.default(instance);

  (0, _object.extend)(GridSettings.prototype, _defaultSettings2.default.prototype);
  (0, _object.extend)(GridSettings.prototype, userSettings);
  (0, _object.extend)(GridSettings.prototype, expandType(userSettings));

  if ((0, _rootInstance.hasValidParameter)(rootInstanceSymbol)) {
    (0, _rootInstance.registerAsRootInstance)(this);
  }

  this.rootElement = rootElement;
  this.isHotTableEnv = (0, _element.isChildOfWebComponentTable)(this.rootElement);
  _eventManager2.default.isHotTableEnv = this.isHotTableEnv;

  this.container = document.createElement('div');
  this.renderCall = false;

  rootElement.insertBefore(this.container, rootElement.firstChild);

  if (false) {
    (0, _mixed._injectProductInfo)(userSettings.licenseKey, rootElement);
  }

  this.guid = `ht_${(0, _string.randomString)()}`;

  const recordTranslator = (0, _recordTranslator.getTranslator)(instance);

  dataSource = new _dataSource2.default(instance);

  if (!this.rootElement.id || this.rootElement.id.substring(0, 3) === 'ht_') {
    this.rootElement.id = this.guid;
  }
  priv = {
    cellSettings: [],
    columnSettings: [],
    columnsSettingConflicts: ['data', 'width'],
    settings: new GridSettings(),
    selRange: null,
    isPopulated: null,
    scrollable: null,
    firstRun: true
  };

  grid = {
    alter(action, index, amount, source, keepEmptyRows) {
      var delta;

      amount = amount || 1;

      function spliceWith(data, index, count, toInject) {
        let valueFactory = () => {
          let result;

          if (toInject === 'array') {
            result = [];
          } else if (toInject === 'object') {
            result = {};
          }

          return result;
        };
        let spliceArgs = (0, _array.arrayMap)(new Array(count), () => valueFactory());

        spliceArgs.unshift(index, 0);
        data.splice(...spliceArgs);
      }

      switch (action) {
        case 'insert_row':

          const numberOfSourceRows = instance.countSourceRows();

          if (instance.getSettings().maxRows === numberOfSourceRows) {
            return;
          }

          index = (0, _mixed.isDefined)(index) ? index : numberOfSourceRows;

          delta = datamap.createRow(index, amount, source);
          spliceWith(priv.cellSettings, index, amount, 'array');

          if (delta) {
            if (selection.isSelected() && priv.selRange.from.row >= index) {
              priv.selRange.from.row += delta;
              selection.transformEnd(delta, 0);
            } else {
              selection.refreshBorders();
            }
          }
          break;

        case 'insert_col':
          delta = datamap.createCol(index, amount, source);

          for (let row = 0, len = instance.countSourceRows(); row < len; row++) {
            if (priv.cellSettings[row]) {
              spliceWith(priv.cellSettings[row], index, amount);
            }
          }

          if (delta) {
            if (Array.isArray(instance.getSettings().colHeaders)) {
              var spliceArray = [index, 0];
              spliceArray.length += delta;
              Array.prototype.splice.apply(instance.getSettings().colHeaders, spliceArray);
            }

            if (selection.isSelected() && priv.selRange.from.col >= index) {
              priv.selRange.from.col += delta;
              selection.transformEnd(0, delta);
            } else {
              selection.refreshBorders();
            }
          }
          break;

        case 'remove_row':
          datamap.removeRow(index, amount, source);
          priv.cellSettings.splice(index, amount);

          var totalRows = instance.countRows();
          var fixedRowsTop = instance.getSettings().fixedRowsTop;
          if (fixedRowsTop >= index + 1) {
            instance.getSettings().fixedRowsTop -= Math.min(amount, fixedRowsTop - index);
          }

          var fixedRowsBottom = instance.getSettings().fixedRowsBottom;
          if (fixedRowsBottom && index >= totalRows - fixedRowsBottom) {
            instance.getSettings().fixedRowsBottom -= Math.min(amount, fixedRowsBottom);
          }

          grid.adjustRowsAndCols();
          selection.refreshBorders();
          break;

        case 'remove_col':
          let visualColumnIndex = recordTranslator.toPhysicalColumn(index);

          datamap.removeCol(index, amount, source);

          for (let row = 0, len = instance.countSourceRows(); row < len; row++) {
            if (priv.cellSettings[row]) {
              priv.cellSettings[row].splice(visualColumnIndex, amount);
            }
          }
          var fixedColumnsLeft = instance.getSettings().fixedColumnsLeft;

          if (fixedColumnsLeft >= index + 1) {
            instance.getSettings().fixedColumnsLeft -= Math.min(amount, fixedColumnsLeft - index);
          }

          if (Array.isArray(instance.getSettings().colHeaders)) {
            if (typeof visualColumnIndex === 'undefined') {
              visualColumnIndex = -1;
            }
            instance.getSettings().colHeaders.splice(visualColumnIndex, amount);
          }

          grid.adjustRowsAndCols();
          selection.refreshBorders();

          break;
        default:
          throw new Error(`There is no such action "${action}"`);
      }

      if (!keepEmptyRows) {
        grid.adjustRowsAndCols();
      }
    },

    adjustRowsAndCols() {
      if (priv.settings.minRows) {
        let rows = instance.countRows();

        if (rows < priv.settings.minRows) {
          for (let r = 0, minRows = priv.settings.minRows; r < minRows - rows; r++) {
            datamap.createRow(instance.countRows(), 1, 'auto');
          }
        }
      }
      if (priv.settings.minSpareRows) {
        let emptyRows = instance.countEmptyRows(true);

        if (emptyRows < priv.settings.minSpareRows) {
          for (; emptyRows < priv.settings.minSpareRows && instance.countSourceRows() < priv.settings.maxRows; emptyRows++) {
            datamap.createRow(instance.countRows(), 1, 'auto');
          }
        }
      }
      {
        let emptyCols;

        if (priv.settings.minCols || priv.settings.minSpareCols) {
          emptyCols = instance.countEmptyCols(true);
        }

        if (priv.settings.minCols && !priv.settings.columns && instance.countCols() < priv.settings.minCols) {
          for (; instance.countCols() < priv.settings.minCols; emptyCols++) {
            datamap.createCol(instance.countCols(), 1, 'auto');
          }
        }

        if (priv.settings.minSpareCols && !priv.settings.columns && instance.dataType === 'array' && emptyCols < priv.settings.minSpareCols) {
          for (; emptyCols < priv.settings.minSpareCols && instance.countCols() < priv.settings.maxCols; emptyCols++) {
            datamap.createCol(instance.countCols(), 1, 'auto');
          }
        }
      }
      let rowCount = instance.countRows();
      let colCount = instance.countCols();

      if (rowCount === 0 || colCount === 0) {
        selection.deselect();
      }

      if (selection.isSelected()) {
        let selectionChanged = false;
        let fromRow = priv.selRange.from.row;
        let fromCol = priv.selRange.from.col;
        let toRow = priv.selRange.to.row;
        let toCol = priv.selRange.to.col;

        if (fromRow > rowCount - 1) {
          fromRow = rowCount - 1;
          selectionChanged = true;

          if (toRow > fromRow) {
            toRow = fromRow;
          }
        } else if (toRow > rowCount - 1) {
          toRow = rowCount - 1;
          selectionChanged = true;

          if (fromRow > toRow) {
            fromRow = toRow;
          }
        }

        if (fromCol > colCount - 1) {
          fromCol = colCount - 1;
          selectionChanged = true;

          if (toCol > fromCol) {
            toCol = fromCol;
          }
        } else if (toCol > colCount - 1) {
          toCol = colCount - 1;
          selectionChanged = true;

          if (fromCol > toCol) {
            fromCol = toCol;
          }
        }

        if (selectionChanged) {
          instance.selectCell(fromRow, fromCol, toRow, toCol);
        }
      }
      if (instance.view) {
        instance.view.wt.wtOverlays.adjustElementsSize();
      }
    },

    populateFromArray(start, input, end, source, method, direction, deltas) {
      var r,
          rlen,
          c,
          clen,
          setData = [],
          current = {};

      rlen = input.length;

      if (rlen === 0) {
        return false;
      }

      var repeatCol,
          repeatRow,
          cmax,
          rmax,
          baseEnd = {
        row: end === null ? null : end.row,
        col: end === null ? null : end.col
      };

      switch (method) {
        case 'shift_down':
          repeatCol = end ? end.col - start.col + 1 : 0;
          repeatRow = end ? end.row - start.row + 1 : 0;
          input = (0, _data.translateRowsToColumns)(input);
          for (c = 0, clen = input.length, cmax = Math.max(clen, repeatCol); c < cmax; c++) {
            if (c < clen) {
              for (r = 0, rlen = input[c].length; r < repeatRow - rlen; r++) {
                input[c].push(input[c][r % rlen]);
              }
              input[c].unshift(start.col + c, start.row, 0);
              instance.spliceCol(...input[c]);
            } else {
              input[c % clen][0] = start.col + c;
              instance.spliceCol(...input[c % clen]);
            }
          }
          break;

        case 'shift_right':
          repeatCol = end ? end.col - start.col + 1 : 0;
          repeatRow = end ? end.row - start.row + 1 : 0;
          for (r = 0, rlen = input.length, rmax = Math.max(rlen, repeatRow); r < rmax; r++) {
            if (r < rlen) {
              for (c = 0, clen = input[r].length; c < repeatCol - clen; c++) {
                input[r].push(input[r][c % clen]);
              }
              input[r].unshift(start.row + r, start.col, 0);
              instance.spliceRow(...input[r]);
            } else {
              input[r % rlen][0] = start.row + r;
              instance.spliceRow(...input[r % rlen]);
            }
          }
          break;

        case 'overwrite':
        default:
          current.row = start.row;
          current.col = start.col;

          let selected = {
            row: end && start ? end.row - start.row + 1 : 1,
            col: end && start ? end.col - start.col + 1 : 1
          };
          let skippedRow = 0;
          let skippedColumn = 0;
          let pushData = true;
          let cellMeta;

          let getInputValue = function getInputValue(row) {
            let col = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            let rowValue = input[row % input.length];

            if (col !== null) {
              return rowValue[col % rowValue.length];
            }

            return rowValue;
          };
          let rowInputLength = input.length;
          let rowSelectionLength = end ? end.row - start.row + 1 : 0;

          if (end) {
            rlen = rowSelectionLength;
          } else {
            rlen = Math.max(rowInputLength, rowSelectionLength);
          }
          for (r = 0; r < rlen; r++) {
            if (end && current.row > end.row && rowSelectionLength > rowInputLength || !priv.settings.allowInsertRow && current.row > instance.countRows() - 1 || current.row >= priv.settings.maxRows) {
              break;
            }
            let visualRow = r - skippedRow;
            let colInputLength = getInputValue(visualRow).length;
            let colSelectionLength = end ? end.col - start.col + 1 : 0;

            if (end) {
              clen = colSelectionLength;
            } else {
              clen = Math.max(colInputLength, colSelectionLength);
            }
            current.col = start.col;
            cellMeta = instance.getCellMeta(current.row, current.col);

            if ((source === 'CopyPaste.paste' || source === 'Autofill.autofill') && cellMeta.skipRowOnPaste) {
              skippedRow++;
              current.row++;
              rlen++;

              continue;
            }
            skippedColumn = 0;

            for (c = 0; c < clen; c++) {
              if (end && current.col > end.col && colSelectionLength > colInputLength || !priv.settings.allowInsertColumn && current.col > instance.countCols() - 1 || current.col >= priv.settings.maxCols) {
                break;
              }
              cellMeta = instance.getCellMeta(current.row, current.col);

              if ((source === 'CopyPaste.paste' || source === 'Autofill.fill') && cellMeta.skipColumnOnPaste) {
                skippedColumn++;
                current.col++;
                clen++;
                continue;
              }
              if (cellMeta.readOnly) {
                current.col++;

                continue;
              }
              let visualColumn = c - skippedColumn;
              let value = getInputValue(visualRow, visualColumn);
              let orgValue = instance.getDataAtCell(current.row, current.col);
              let index = {
                row: visualRow,
                col: visualColumn
              };

              if (source === 'Autofill.fill') {
                let result = instance.runHooks('beforeAutofillInsidePopulate', index, direction, input, deltas, {}, selected);

                if (result) {
                  value = (0, _mixed.isUndefined)(result.value) ? value : result.value;
                }
              }
              if (value !== null && typeof value === 'object') {
                if (orgValue === null || typeof orgValue !== 'object') {
                  pushData = false;
                } else {
                  let orgValueSchema = (0, _object.duckSchema)(orgValue[0] || orgValue);
                  let valueSchema = (0, _object.duckSchema)(value[0] || value);

                  if ((0, _object.isObjectEquals)(orgValueSchema, valueSchema)) {
                    value = (0, _object.deepClone)(value);
                  } else {
                    pushData = false;
                  }
                }
              } else if (orgValue !== null && typeof orgValue === 'object') {
                pushData = false;
              }
              if (pushData) {
                setData.push([current.row, current.col, value]);
              }
              pushData = true;
              current.col++;
            }
            current.row++;
          }
          instance.setDataAtCell(setData, null, null, source || 'populateFromArray');
          break;
      }
    }
  };

  this.selection = selection = {
    inProgress: false,

    selectedHeader: {
      cols: false,
      rows: false
    },

    setSelectedHeaders() {
      let rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      let cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let corner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      instance.selection.selectedHeader.rows = rows;
      instance.selection.selectedHeader.cols = cols;
      instance.selection.selectedHeader.corner = corner;
    },

    begin() {
      instance.selection.inProgress = true;
    },

    finish() {
      var sel = instance.getSelected();
      instance.runHooks('afterSelectionEnd', sel[0], sel[1], sel[2], sel[3]);
      instance.runHooks('afterSelectionEndByProp', sel[0], instance.colToProp(sel[1]), sel[2], instance.colToProp(sel[3]));
      instance.selection.inProgress = false;
    },

    isInProgress() {
      return instance.selection.inProgress;
    },

    setRangeStart(coords, keepEditorOpened) {
      instance.runHooks('beforeSetRangeStart', coords);
      priv.selRange = new _src.CellRange(coords, coords, coords);
      selection.setRangeEnd(coords, null, keepEditorOpened);
    },

    setRangeStartOnly(coords) {
      instance.runHooks('beforeSetRangeStartOnly', coords);
      priv.selRange = new _src.CellRange(coords, coords, coords);
    },

    setRangeEnd(coords, scrollToCell, keepEditorOpened) {
      if (priv.selRange === null) {
        return;
      }
      var disableVisualSelection,
          isHeaderSelected = false,
          areCoordsPositive = true;

      var firstVisibleRow = instance.view.wt.wtTable.getFirstVisibleRow();
      var firstVisibleColumn = instance.view.wt.wtTable.getFirstVisibleColumn();
      var newRangeCoords = {
        row: null,
        col: null
      };

      instance.runHooks('beforeSetRangeEnd', coords);
      instance.selection.begin();

      newRangeCoords.row = coords.row < 0 ? firstVisibleRow : coords.row;
      newRangeCoords.col = coords.col < 0 ? firstVisibleColumn : coords.col;

      priv.selRange.to = new _src.CellCoords(newRangeCoords.row, newRangeCoords.col);

      if (!priv.settings.multiSelect) {
        priv.selRange.from = coords;
      }

      instance.view.wt.selections.current.clear();

      disableVisualSelection = instance.getCellMeta(priv.selRange.highlight.row, priv.selRange.highlight.col).disableVisualSelection;

      if (typeof disableVisualSelection === 'string') {
        disableVisualSelection = [disableVisualSelection];
      }

      if (disableVisualSelection === false || Array.isArray(disableVisualSelection) && disableVisualSelection.indexOf('current') === -1) {
        instance.view.wt.selections.current.add(priv.selRange.highlight);
      }

      instance.view.wt.selections.area.clear();

      if ((disableVisualSelection === false || Array.isArray(disableVisualSelection) && disableVisualSelection.indexOf('area') === -1) && selection.isMultiple()) {
        instance.view.wt.selections.area.add(priv.selRange.from);
        instance.view.wt.selections.area.add(priv.selRange.to);
      }

      if (priv.settings.currentHeaderClassName || priv.settings.currentRowClassName || priv.settings.currentColClassName) {
        instance.view.wt.selections.highlight.clear();
        instance.view.wt.selections.highlight.add(priv.selRange.from);
        instance.view.wt.selections.highlight.add(priv.selRange.to);
      }

      const preventScrolling = (0, _object.createObjectPropListener)('value');

      instance.runHooks('afterSelection', priv.selRange.from.row, priv.selRange.from.col, priv.selRange.to.row, priv.selRange.to.col, preventScrolling);
      instance.runHooks('afterSelectionByProp', priv.selRange.from.row, datamap.colToProp(priv.selRange.from.col), priv.selRange.to.row, datamap.colToProp(priv.selRange.to.col), preventScrolling);

      if (priv.selRange.from.row === 0 && priv.selRange.to.row === instance.countRows() - 1 && instance.countRows() > 1 || priv.selRange.from.col === 0 && priv.selRange.to.col === instance.countCols() - 1 && instance.countCols() > 1) {
        isHeaderSelected = true;
      }

      if (coords.row < 0 || coords.col < 0) {
        areCoordsPositive = false;
      }

      if (preventScrolling.isTouched()) {
        scrollToCell = !preventScrolling.value;
      }

      if (scrollToCell !== false && !isHeaderSelected && areCoordsPositive) {
        if (priv.selRange.from && !selection.isMultiple()) {
          instance.view.scrollViewport(priv.selRange.from);
        } else {
          instance.view.scrollViewport(coords);
        }
      }

      if (selection.selectedHeader.rows && selection.selectedHeader.cols) {
        (0, _element.addClass)(instance.rootElement, ['ht__selection--rows', 'ht__selection--columns']);
      } else if (selection.selectedHeader.rows) {
        (0, _element.removeClass)(instance.rootElement, 'ht__selection--columns');
        (0, _element.addClass)(instance.rootElement, 'ht__selection--rows');
      } else if (selection.selectedHeader.cols) {
        (0, _element.removeClass)(instance.rootElement, 'ht__selection--rows');
        (0, _element.addClass)(instance.rootElement, 'ht__selection--columns');
      } else {
        (0, _element.removeClass)(instance.rootElement, ['ht__selection--rows', 'ht__selection--columns']);
      }

      selection.refreshBorders(null, keepEditorOpened);
    },

    refreshBorders(revertOriginal, keepEditor) {
      if (!keepEditor) {
        editorManager.destroyEditor(revertOriginal);
      }
      instance.view.render();

      if (selection.isSelected() && !keepEditor) {
        editorManager.prepareEditor();
      }
    },

    isMultiple() {
      var isMultiple = !(priv.selRange.to.col === priv.selRange.from.col && priv.selRange.to.row === priv.selRange.from.row),
          modifier = instance.runHooks('afterIsMultipleSelection', isMultiple);

      if (isMultiple) {
        return modifier;
      }
    },

    transformStart(rowDelta, colDelta, force, keepEditorOpened) {
      var delta = new _src.CellCoords(rowDelta, colDelta),
          rowTransformDir = 0,
          colTransformDir = 0,
          totalRows,
          totalCols,
          coords,
          fixedRowsBottom;

      instance.runHooks('modifyTransformStart', delta);
      totalRows = instance.countRows();
      totalCols = instance.countCols();
      fixedRowsBottom = instance.getSettings().fixedRowsBottom;

      if (priv.selRange.highlight.row + rowDelta > totalRows - 1) {
        if (force && priv.settings.minSpareRows > 0 && !(fixedRowsBottom && priv.selRange.highlight.row >= totalRows - fixedRowsBottom - 1)) {
          instance.alter('insert_row', totalRows);
          totalRows = instance.countRows();
        } else if (priv.settings.autoWrapCol) {
          delta.row = 1 - totalRows;
          delta.col = priv.selRange.highlight.col + delta.col == totalCols - 1 ? 1 - totalCols : 1;
        }
      } else if (priv.settings.autoWrapCol && priv.selRange.highlight.row + delta.row < 0 && priv.selRange.highlight.col + delta.col >= 0) {
        delta.row = totalRows - 1;
        delta.col = priv.selRange.highlight.col + delta.col == 0 ? totalCols - 1 : -1;
      }

      if (priv.selRange.highlight.col + delta.col > totalCols - 1) {
        if (force && priv.settings.minSpareCols > 0) {
          instance.alter('insert_col', totalCols);
          totalCols = instance.countCols();
        } else if (priv.settings.autoWrapRow) {
          delta.row = priv.selRange.highlight.row + delta.row == totalRows - 1 ? 1 - totalRows : 1;
          delta.col = 1 - totalCols;
        }
      } else if (priv.settings.autoWrapRow && priv.selRange.highlight.col + delta.col < 0 && priv.selRange.highlight.row + delta.row >= 0) {
        delta.row = priv.selRange.highlight.row + delta.row == 0 ? totalRows - 1 : -1;
        delta.col = totalCols - 1;
      }

      coords = new _src.CellCoords(priv.selRange.highlight.row + delta.row, priv.selRange.highlight.col + delta.col);

      if (coords.row < 0) {
        rowTransformDir = -1;
        coords.row = 0;
      } else if (coords.row > 0 && coords.row >= totalRows) {
        rowTransformDir = 1;
        coords.row = totalRows - 1;
      }

      if (coords.col < 0) {
        colTransformDir = -1;
        coords.col = 0;
      } else if (coords.col > 0 && coords.col >= totalCols) {
        colTransformDir = 1;
        coords.col = totalCols - 1;
      }
      instance.runHooks('afterModifyTransformStart', coords, rowTransformDir, colTransformDir);
      selection.setRangeStart(coords, keepEditorOpened);
    },

    transformEnd(rowDelta, colDelta) {
      var delta = new _src.CellCoords(rowDelta, colDelta),
          rowTransformDir = 0,
          colTransformDir = 0,
          totalRows,
          totalCols,
          coords;

      instance.runHooks('modifyTransformEnd', delta);

      totalRows = instance.countRows();
      totalCols = instance.countCols();
      coords = new _src.CellCoords(priv.selRange.to.row + delta.row, priv.selRange.to.col + delta.col);

      if (coords.row < 0) {
        rowTransformDir = -1;
        coords.row = 0;
      } else if (coords.row > 0 && coords.row >= totalRows) {
        rowTransformDir = 1;
        coords.row = totalRows - 1;
      }

      if (coords.col < 0) {
        colTransformDir = -1;
        coords.col = 0;
      } else if (coords.col > 0 && coords.col >= totalCols) {
        colTransformDir = 1;
        coords.col = totalCols - 1;
      }
      instance.runHooks('afterModifyTransformEnd', coords, rowTransformDir, colTransformDir);
      selection.setRangeEnd(coords, true);
    },

    isSelected() {
      return priv.selRange !== null;
    },

    inInSelection(coords) {
      if (!selection.isSelected()) {
        return false;
      }

      return priv.selRange.includes(coords);
    },

    deselect() {
      if (!selection.isSelected()) {
        return;
      }
      instance.selection.inProgress = false;
      priv.selRange = null;
      instance.view.wt.selections.current.clear();
      instance.view.wt.selections.area.clear();
      if (priv.settings.currentHeaderClassName || priv.settings.currentRowClassName || priv.settings.currentColClassName) {
        instance.view.wt.selections.highlight.clear();
      }
      editorManager.destroyEditor();
      selection.refreshBorders();
      (0, _element.removeClass)(instance.rootElement, ['ht__selection--rows', 'ht__selection--columns']);
      instance.runHooks('afterDeselect');
    },

    selectAll() {
      if (!priv.settings.multiSelect) {
        return;
      }
      selection.setSelectedHeaders(true, true, true);
      selection.setRangeStart(new _src.CellCoords(0, 0));
      selection.setRangeEnd(new _src.CellCoords(instance.countRows() - 1, instance.countCols() - 1), false);
    },

    empty() {
      if (!selection.isSelected()) {
        return;
      }
      var topLeft = priv.selRange.getTopLeftCorner();
      var bottomRight = priv.selRange.getBottomRightCorner();
      var r,
          c,
          changes = [];

      for (r = topLeft.row; r <= bottomRight.row; r++) {
        for (c = topLeft.col; c <= bottomRight.col; c++) {
          if (!instance.getCellMeta(r, c).readOnly) {
            changes.push([r, c, '']);
          }
        }
      }
      instance.setDataAtCell(changes);
    }
  };

  this.init = function () {
    dataSource.setData(priv.settings.data);
    instance.runHooks('beforeInit');

    if ((0, _browser.isMobileBrowser)()) {
      (0, _element.addClass)(instance.rootElement, 'mobile');
    }

    this.updateSettings(priv.settings, true);

    this.view = new _tableView2.default(this);
    editorManager = new _editorManager2.default(instance, priv, selection, datamap);

    this.forceFullRender = true;

    instance.runHooks('init');
    this.view.render();

    if (typeof priv.firstRun === 'object') {
      instance.runHooks('afterChange', priv.firstRun[0], priv.firstRun[1]);
      priv.firstRun = false;
    }
    instance.runHooks('afterInit');
  };

  function ValidatorsQueue() {
    var resolved = false;

    return {
      validatorsInQueue: 0,
      valid: true,
      addValidatorToQueue() {
        this.validatorsInQueue++;
        resolved = false;
      },
      removeValidatorFormQueue() {
        this.validatorsInQueue = this.validatorsInQueue - 1 < 0 ? 0 : this.validatorsInQueue - 1;
        this.checkIfQueueIsEmpty();
      },
      onQueueEmpty(valid) {},
      checkIfQueueIsEmpty() {
        if (this.validatorsInQueue == 0 && resolved == false) {
          resolved = true;
          this.onQueueEmpty(this.valid);
        }
      }
    };
  }

  function validateChanges(changes, source, callback) {
    var waitingForValidator = new ValidatorsQueue();
    waitingForValidator.onQueueEmpty = resolve;

    for (var i = changes.length - 1; i >= 0; i--) {
      if (changes[i] === null) {
        changes.splice(i, 1);
      } else {
        var row = changes[i][0];
        var col = datamap.propToCol(changes[i][1]);

        var cellProperties = instance.getCellMeta(row, col);

        if (instance.getCellValidator(cellProperties)) {
          waitingForValidator.addValidatorToQueue();
          instance.validateCell(changes[i][3], cellProperties, function (i, cellProperties) {
            return function (result) {
              if (typeof result !== 'boolean') {
                throw new Error('Validation error: result is not boolean');
              }
              if (result === false && cellProperties.allowInvalid === false) {
                changes.splice(i, 1);
                cellProperties.valid = true;
                const cell = instance.getCell(cellProperties.row, cellProperties.col);
                (0, _element.removeClass)(cell, instance.getSettings().invalidCellClassName);
                --i;
              }
              waitingForValidator.removeValidatorFormQueue();
            };
          }(i, cellProperties), source);
        }
      }
    }
    waitingForValidator.checkIfQueueIsEmpty();

    function resolve() {
      var beforeChangeResult;

      if (changes.length) {
        beforeChangeResult = instance.runHooks('beforeChange', changes, source);
        if ((0, _function.isFunction)(beforeChangeResult)) {
          console.warn('Your beforeChange callback returns a function. It\'s not supported since Handsontable 0.12.1 (and the returned function will not be executed).');
        } else if (beforeChangeResult === false) {
          changes.splice(0, changes.length);
        }
      }
      callback();
    }
  }

  function applyChanges(changes, source) {
    let i = changes.length - 1;

    if (i < 0) {
      return;
    }

    for (; i >= 0; i--) {
      let skipThisChange = false;

      if (changes[i] === null) {
        changes.splice(i, 1);

        continue;
      }

      if (changes[i][2] == null && changes[i][3] == null) {
        continue;
      }

      if (priv.settings.allowInsertRow) {
        while (changes[i][0] > instance.countRows() - 1) {
          let numberOfCreatedRows = datamap.createRow(void 0, void 0, source);

          if (numberOfCreatedRows === 0) {
            skipThisChange = true;
            break;
          }
        }
      }

      if (skipThisChange) {
        continue;
      }

      if (instance.dataType === 'array' && (!priv.settings.columns || priv.settings.columns.length === 0) && priv.settings.allowInsertColumn) {
        while (datamap.propToCol(changes[i][1]) > instance.countCols() - 1) {
          datamap.createCol(void 0, void 0, source);
        }
      }

      datamap.set(changes[i][0], changes[i][1], changes[i][3]);
    }

    instance.forceFullRender = true;
    grid.adjustRowsAndCols();
    instance.runHooks('beforeChangeRender', changes, source);
    selection.refreshBorders(null, true);
    instance.view.wt.wtOverlays.adjustElementsSize();
    instance.runHooks('afterChange', changes, source || 'edit');

    let activeEditor = instance.getActiveEditor();

    if (activeEditor && (0, _mixed.isDefined)(activeEditor.refreshValue)) {
      activeEditor.refreshValue();
    }
  }

  this.validateCell = function (value, cellProperties, callback, source) {
    var validator = instance.getCellValidator(cellProperties);

    function done(valid) {
      var col = cellProperties.visualCol,
          row = cellProperties.visualRow,
          td = instance.getCell(row, col, true);

      if (td && td.nodeName != 'TH') {
        instance.view.wt.wtSettings.settings.cellRenderer(row, col, td);
      }
      callback(valid);
    }

    if ((0, _mixed.isRegExp)(validator)) {
      validator = function (validator) {
        return function (value, callback) {
          callback(validator.test(value));
        };
      }(validator);
    }

    if ((0, _function.isFunction)(validator)) {

      value = instance.runHooks('beforeValidate', value, cellProperties.visualRow, cellProperties.prop, source);

      instance._registerTimeout(setTimeout(() => {
        validator.call(cellProperties, value, valid => {
          valid = instance.runHooks('afterValidate', valid, value, cellProperties.visualRow, cellProperties.prop, source);
          cellProperties.valid = valid;

          done(valid);
          instance.runHooks('postAfterValidate', valid, value, cellProperties.visualRow, cellProperties.prop, source);
        });
      }, 0));
    } else {
      instance._registerTimeout(setTimeout(() => {
        cellProperties.valid = true;
        done(cellProperties.valid);
      }, 0));
    }
  };

  function setDataInputToArray(row, propOrCol, value) {
    if (typeof row === 'object') {
      return row;
    }
    return [[row, propOrCol, value]];
  }

  this.setDataAtCell = function (row, col, value, source) {
    var input = setDataInputToArray(row, col, value),
        i,
        ilen,
        changes = [],
        prop;

    for (i = 0, ilen = input.length; i < ilen; i++) {
      if (typeof input[i] !== 'object') {
        throw new Error('Method `setDataAtCell` accepts row number or changes array of arrays as its first parameter');
      }
      if (typeof input[i][1] !== 'number') {
        throw new Error('Method `setDataAtCell` accepts row and column number as its parameters. If you want to use object property name, use method `setDataAtRowProp`');
      }
      prop = datamap.colToProp(input[i][1]);
      changes.push([input[i][0], prop, dataSource.getAtCell(recordTranslator.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }

    if (!source && typeof row === 'object') {
      source = col;
    }

    instance.runHooks('afterSetDataAtCell', changes, source);

    validateChanges(changes, source, () => {
      applyChanges(changes, source);
    });
  };

  this.setDataAtRowProp = function (row, prop, value, source) {
    var input = setDataInputToArray(row, prop, value),
        i,
        ilen,
        changes = [];

    for (i = 0, ilen = input.length; i < ilen; i++) {
      changes.push([input[i][0], input[i][1], dataSource.getAtCell(recordTranslator.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }

    if (!source && typeof row === 'object') {
      source = prop;
    }

    instance.runHooks('afterSetDataAtRowProp', changes, source);

    validateChanges(changes, source, () => {
      applyChanges(changes, source);
    });
  };

  this.listen = function () {
    let invalidActiveElement = !document.activeElement || document.activeElement && document.activeElement.nodeName === void 0;

    if (document.activeElement && document.activeElement !== document.body && !invalidActiveElement) {
      document.activeElement.blur();
    } else if (invalidActiveElement) {
      document.body.focus();
    }

    activeGuid = instance.guid;
  };

  this.unlisten = function () {
    if (this.isListening()) {
      activeGuid = null;
    }
  };

  this.isListening = function () {
    return activeGuid === instance.guid;
  };

  this.destroyEditor = function (revertOriginal) {
    selection.refreshBorders(revertOriginal);
  };

  this.populateFromArray = function (row, col, input, endRow, endCol, source, method, direction, deltas) {
    var c;

    if (!(typeof input === 'object' && typeof input[0] === 'object')) {
      throw new Error('populateFromArray parameter `input` must be an array of arrays');
    }
    c = typeof endRow === 'number' ? new _src.CellCoords(endRow, endCol) : null;

    return grid.populateFromArray(new _src.CellCoords(row, col), input, c, source, method, direction, deltas);
  };

  this.spliceCol = function (col, index, amount) {
    return datamap.spliceCol(...arguments);
  };

  this.spliceRow = function (row, index, amount) {
    return datamap.spliceRow(...arguments);
  };

  this.getSelected = function () {
    if (selection.isSelected()) {
      return [priv.selRange.from.row, priv.selRange.from.col, priv.selRange.to.row, priv.selRange.to.col];
    }
  };

  this.getSelectedRange = function () {
    if (selection.isSelected()) {
      return priv.selRange;
    }
  };

  this.render = function () {
    if (instance.view) {
      instance.renderCall = true;
      instance.forceFullRender = true;
      selection.refreshBorders(null, true);
    }
  };

  this.loadData = function (data) {
    if (Array.isArray(priv.settings.dataSchema)) {
      instance.dataType = 'array';
    } else if ((0, _function.isFunction)(priv.settings.dataSchema)) {
      instance.dataType = 'function';
    } else {
      instance.dataType = 'object';
    }

    if (datamap) {
      datamap.destroy();
    }
    datamap = new _dataMap2.default(instance, priv, GridSettings);

    if (typeof data === 'object' && data !== null) {
      if (!(data.push && data.splice)) {
        data = [data];
      }
    } else if (data === null) {
      data = [];
      var row;
      var r = 0;
      var rlen = 0;
      var dataSchema = datamap.getSchema();

      for (r = 0, rlen = priv.settings.startRows; r < rlen; r++) {
        if ((instance.dataType === 'object' || instance.dataType === 'function') && priv.settings.dataSchema) {
          row = (0, _object.deepClone)(dataSchema);
          data.push(row);
        } else if (instance.dataType === 'array') {
          row = (0, _object.deepClone)(dataSchema[0]);
          data.push(row);
        } else {
          row = [];

          for (var c = 0, clen = priv.settings.startCols; c < clen; c++) {
            row.push(null);
          }

          data.push(row);
        }
      }
    } else {
      throw new Error(`loadData only accepts array of objects or array of arrays (${typeof data} given)`);
    }

    priv.isPopulated = false;
    GridSettings.prototype.data = data;

    if (Array.isArray(data[0])) {
      instance.dataType = 'array';
    }

    datamap.dataSource = data;
    dataSource.data = data;
    dataSource.dataType = instance.dataType;
    dataSource.colToProp = datamap.colToProp.bind(datamap);
    dataSource.propToCol = datamap.propToCol.bind(datamap);

    clearCellSettingCache();

    grid.adjustRowsAndCols();
    instance.runHooks('afterLoadData', priv.firstRun);

    if (priv.firstRun) {
      priv.firstRun = [null, 'loadData'];
    } else {
      instance.runHooks('afterChange', null, 'loadData');
      instance.render();
    }
    priv.isPopulated = true;

    function clearCellSettingCache() {
      priv.cellSettings.length = 0;
    }
  };

  this.getData = function (r, c, r2, c2) {
    if ((0, _mixed.isUndefined)(r)) {
      return datamap.getAll();
    }
    return datamap.getRange(new _src.CellCoords(r, c), new _src.CellCoords(r2, c2), datamap.DESTINATION_RENDERER);
  };

  this.getCopyableText = function (startRow, startCol, endRow, endCol) {
    return datamap.getCopyableText(new _src.CellCoords(startRow, startCol), new _src.CellCoords(endRow, endCol));
  };

  this.getCopyableData = function (row, column) {
    return datamap.getCopyable(row, datamap.colToProp(column));
  };

  this.getSchema = function () {
    return datamap.getSchema();
  };

  this.updateSettings = function (settings, init) {
    let columnsAsFunc = false;
    let i;
    let j;
    let clen;

    if ((0, _mixed.isDefined)(settings.rows)) {
      throw new Error('"rows" setting is no longer supported. do you mean startRows, minRows or maxRows?');
    }
    if ((0, _mixed.isDefined)(settings.cols)) {
      throw new Error('"cols" setting is no longer supported. do you mean startCols, minCols or maxCols?');
    }

    for (i in settings) {
      if (i === 'data') {
        continue;
      } else if (_pluginHooks2.default.getSingleton().getRegistered().indexOf(i) > -1) {
        if ((0, _function.isFunction)(settings[i]) || Array.isArray(settings[i])) {
          settings[i].initialHook = true;
          instance.addHook(i, settings[i]);
        }
      } else if (!init && (0, _object.hasOwnProperty)(settings, i)) {
        GridSettings.prototype[i] = settings[i];
      }
    }

    if (settings.data === void 0 && priv.settings.data === void 0) {
      instance.loadData(null);
    } else if (settings.data !== void 0) {
      instance.loadData(settings.data);
    } else if (settings.columns !== void 0) {
      datamap.createMap();
    }

    clen = instance.countCols();

    const columnSetting = settings.columns || GridSettings.prototype.columns;

    if (columnSetting && (0, _function.isFunction)(columnSetting)) {
      clen = instance.countSourceCols();
      columnsAsFunc = true;
    }

    if (settings.cell !== void 0 || settings.cells !== void 0 || settings.columns !== void 0) {
      priv.cellSettings.length = 0;
    }

    if (clen > 0) {
      let proto;
      let column;

      for (i = 0, j = 0; i < clen; i++) {
        if (columnsAsFunc && !columnSetting(i)) {
          continue;
        }
        priv.columnSettings[j] = (0, _setting.columnFactory)(GridSettings, priv.columnsSettingConflicts);

        proto = priv.columnSettings[j].prototype;

        if (columnSetting) {
          if (columnsAsFunc) {
            column = columnSetting(i);
          } else {
            column = columnSetting[j];
          }

          if (column) {
            (0, _object.extend)(proto, column);
            (0, _object.extend)(proto, expandType(column));
          }
        }

        j++;
      }
    }

    if ((0, _mixed.isDefined)(settings.cell)) {
      for (let key in settings.cell) {
        if ((0, _object.hasOwnProperty)(settings.cell, key)) {
          let cell = settings.cell[key];

          instance.setCellMetaObject(cell.row, cell.col, cell);
        }
      }
    }

    instance.runHooks('afterCellMetaReset');

    if ((0, _mixed.isDefined)(settings.className)) {
      if (GridSettings.prototype.className) {
        (0, _element.removeClass)(instance.rootElement, GridSettings.prototype.className);
      }
      if (settings.className) {
        (0, _element.addClass)(instance.rootElement, settings.className);
      }
    }

    let currentHeight = instance.rootElement.style.height;
    if (currentHeight !== '') {
      currentHeight = parseInt(instance.rootElement.style.height, 10);
    }

    let height = settings.height;
    if ((0, _function.isFunction)(height)) {
      height = height();
    }

    if (init) {
      let initialStyle = instance.rootElement.getAttribute('style');

      if (initialStyle) {
        instance.rootElement.setAttribute('data-initialstyle', instance.rootElement.getAttribute('style'));
      }
    }

    if (height === null) {
      let initialStyle = instance.rootElement.getAttribute('data-initialstyle');

      if (initialStyle && (initialStyle.indexOf('height') > -1 || initialStyle.indexOf('overflow') > -1)) {
        instance.rootElement.setAttribute('style', initialStyle);
      } else {
        instance.rootElement.style.height = '';
        instance.rootElement.style.overflow = '';
      }
    } else if (height !== void 0) {
      instance.rootElement.style.height = `${height}px`;
      instance.rootElement.style.overflow = 'hidden';
    }

    if (typeof settings.width !== 'undefined') {
      var width = settings.width;

      if ((0, _function.isFunction)(width)) {
        width = width();
      }

      instance.rootElement.style.width = `${width}px`;
    }

    if (!init) {
      datamap.clearLengthCache();

      if (instance.view) {
        instance.view.wt.wtViewport.resetHasOversizedColumnHeadersMarked();
      }

      instance.runHooks('afterUpdateSettings', settings);
    }

    grid.adjustRowsAndCols();
    if (instance.view && !priv.firstRun) {
      instance.forceFullRender = true;
      selection.refreshBorders(null, true);
    }

    if (!init && instance.view && (currentHeight === '' || height === '' || height === void 0) && currentHeight !== height) {
      instance.view.wt.wtOverlays.updateMainScrollableElements();
    }
  };

  this.getValue = function () {
    var sel = instance.getSelected();
    if (GridSettings.prototype.getValue) {
      if ((0, _function.isFunction)(GridSettings.prototype.getValue)) {
        return GridSettings.prototype.getValue.call(instance);
      } else if (sel) {
        return instance.getData()[sel[0]][GridSettings.prototype.getValue];
      }
    } else if (sel) {
      return instance.getDataAtCell(sel[0], sel[1]);
    }
  };

  function expandType(obj) {
    if (!(0, _object.hasOwnProperty)(obj, 'type')) {
      return;
    }

    var type,
        expandedType = {};

    if (typeof obj.type === 'object') {
      type = obj.type;
    } else if (typeof obj.type === 'string') {
      type = (0, _cellTypes.getCellType)(obj.type);
    }

    for (var i in type) {
      if ((0, _object.hasOwnProperty)(type, i) && !(0, _object.hasOwnProperty)(obj, i)) {
        expandedType[i] = type[i];
      }
    }

    return expandedType;
  }

  this.getSettings = function () {
    return priv.settings;
  };

  this.clear = function () {
    selection.selectAll();
    selection.empty();
  };

  this.alter = function (action, index, amount, source, keepEmptyRows) {
    grid.alter(action, index, amount, source, keepEmptyRows);
  };

  this.getCell = function (row, col, topmost) {
    return instance.view.getCellAtCoords(new _src.CellCoords(row, col), topmost);
  };

  this.getCoords = function (elem) {
    return this.view.wt.wtTable.getCoords.call(this.view.wt.wtTable, elem);
  };

  this.colToProp = function (col) {
    return datamap.colToProp(col);
  };

  this.propToCol = function (prop) {
    return datamap.propToCol(prop);
  };

  this.toVisualRow = row => recordTranslator.toVisualRow(row);

  this.toVisualColumn = column => recordTranslator.toVisualColumn(column);

  this.toPhysicalRow = row => recordTranslator.toPhysicalRow(row);

  this.toPhysicalColumn = column => recordTranslator.toPhysicalColumn(column);

  this.getDataAtCell = function (row, col) {
    return datamap.get(row, datamap.colToProp(col));
  };

  this.getDataAtRowProp = function (row, prop) {
    return datamap.get(row, prop);
  };

  this.getDataAtCol = function (col) {
    var out = [];
    return out.concat(...datamap.getRange(new _src.CellCoords(0, col), new _src.CellCoords(priv.settings.data.length - 1, col), datamap.DESTINATION_RENDERER));
  };

  this.getDataAtProp = function (prop) {
    var out = [],
        range;

    range = datamap.getRange(new _src.CellCoords(0, datamap.propToCol(prop)), new _src.CellCoords(priv.settings.data.length - 1, datamap.propToCol(prop)), datamap.DESTINATION_RENDERER);

    return out.concat(...range);
  };

  this.getSourceData = function (r, c, r2, c2) {
    let data;

    if (r === void 0) {
      data = dataSource.getData();
    } else {
      data = dataSource.getByRange(new _src.CellCoords(r, c), new _src.CellCoords(r2, c2));
    }

    return data;
  };

  this.getSourceDataArray = function (r, c, r2, c2) {
    let data;

    if (r === void 0) {
      data = dataSource.getData(true);
    } else {
      data = dataSource.getByRange(new _src.CellCoords(r, c), new _src.CellCoords(r2, c2), true);
    }

    return data;
  };

  this.getSourceDataAtCol = function (column) {
    return dataSource.getAtColumn(column);
  };

  this.getSourceDataAtRow = function (row) {
    return dataSource.getAtRow(row);
  };

  this.getSourceDataAtCell = function (row, column) {
    return dataSource.getAtCell(row, column);
  };

  this.getDataAtRow = function (row) {
    var data = datamap.getRange(new _src.CellCoords(row, 0), new _src.CellCoords(row, this.countCols() - 1), datamap.DESTINATION_RENDERER);

    return data[0] || [];
  };

  this.getDataType = function (rowFrom, columnFrom, rowTo, columnTo) {
    let previousType = null;
    let currentType = null;

    if (rowFrom === void 0) {
      rowFrom = 0;
      rowTo = this.countRows();
      columnFrom = 0;
      columnTo = this.countCols();
    }
    if (rowTo === void 0) {
      rowTo = rowFrom;
    }
    if (columnTo === void 0) {
      columnTo = columnFrom;
    }
    let type = 'mixed';

    (0, _number.rangeEach)(Math.min(rowFrom, rowTo), Math.max(rowFrom, rowTo), row => {
      let isTypeEqual = true;

      (0, _number.rangeEach)(Math.min(columnFrom, columnTo), Math.max(columnFrom, columnTo), column => {
        let cellType = this.getCellMeta(row, column);

        currentType = cellType.type;

        if (previousType) {
          isTypeEqual = previousType === currentType;
        } else {
          previousType = currentType;
        }

        return isTypeEqual;
      });
      type = isTypeEqual ? currentType : 'mixed';

      return isTypeEqual;
    });

    return type;
  };

  this.removeCellMeta = function (row, col, key) {
    var _recordTranslator$toP = recordTranslator.toPhysical(row, col),
        _recordTranslator$toP2 = _slicedToArray(_recordTranslator$toP, 2);

    const physicalRow = _recordTranslator$toP2[0],
          physicalColumn = _recordTranslator$toP2[1];

    let cachedValue = priv.cellSettings[physicalRow][physicalColumn][key];

    const hookResult = instance.runHooks('beforeRemoveCellMeta', row, col, key, cachedValue);

    if (hookResult !== false) {
      delete priv.cellSettings[physicalRow][physicalColumn][key];

      instance.runHooks('afterRemoveCellMeta', row, col, key, cachedValue);
    }

    cachedValue = null;
  };

  this.spliceCellsMeta = function (index, deleteAmount) {
    for (var _len = arguments.length, items = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      items[_key - 2] = arguments[_key];
    }

    priv.cellSettings.splice(index, deleteAmount, ...items);
  };

  this.setCellMetaObject = function (row, col, prop) {
    if (typeof prop === 'object') {
      for (var key in prop) {
        if ((0, _object.hasOwnProperty)(prop, key)) {
          var value = prop[key];
          this.setCellMeta(row, col, key, value);
        }
      }
    }
  };

  this.setCellMeta = function (row, col, key, val) {
    var _recordTranslator$toP3 = recordTranslator.toPhysical(row, col),
        _recordTranslator$toP4 = _slicedToArray(_recordTranslator$toP3, 2);

    const physicalRow = _recordTranslator$toP4[0],
          physicalColumn = _recordTranslator$toP4[1];


    if (!priv.columnSettings[physicalColumn]) {
      priv.columnSettings[physicalColumn] = (0, _setting.columnFactory)(GridSettings, priv.columnsSettingConflicts);
    }

    if (!priv.cellSettings[physicalRow]) {
      priv.cellSettings[physicalRow] = [];
    }
    if (!priv.cellSettings[physicalRow][physicalColumn]) {
      priv.cellSettings[physicalRow][physicalColumn] = new priv.columnSettings[physicalColumn]();
    }
    priv.cellSettings[physicalRow][physicalColumn][key] = val;
    instance.runHooks('afterSetCellMeta', row, col, key, val);
  };

  this.getCellsMeta = function () {
    return (0, _array.arrayFlatten)(priv.cellSettings);
  };

  this.getCellMeta = function (row, col) {
    const prop = datamap.colToProp(col);
    let cellProperties;

    var _recordTranslator$toP5 = recordTranslator.toPhysical(row, col),
        _recordTranslator$toP6 = _slicedToArray(_recordTranslator$toP5, 2);

    const physicalRow = _recordTranslator$toP6[0],
          physicalColumn = _recordTranslator$toP6[1];


    if (!priv.columnSettings[physicalColumn]) {
      priv.columnSettings[physicalColumn] = (0, _setting.columnFactory)(GridSettings, priv.columnsSettingConflicts);
    }

    if (!priv.cellSettings[physicalRow]) {
      priv.cellSettings[physicalRow] = [];
    }
    if (!priv.cellSettings[physicalRow][physicalColumn]) {
      priv.cellSettings[physicalRow][physicalColumn] = new priv.columnSettings[physicalColumn]();
    }

    cellProperties = priv.cellSettings[physicalRow][physicalColumn];

    cellProperties.row = physicalRow;
    cellProperties.col = physicalColumn;
    cellProperties.visualRow = row;
    cellProperties.visualCol = col;
    cellProperties.prop = prop;
    cellProperties.instance = instance;

    instance.runHooks('beforeGetCellMeta', row, col, cellProperties);
    (0, _object.extend)(cellProperties, expandType(cellProperties));

    if (cellProperties.cells) {
      const settings = cellProperties.cells.call(cellProperties, physicalRow, physicalColumn, prop);

      if (settings) {
        (0, _object.extend)(cellProperties, settings);
        (0, _object.extend)(cellProperties, expandType(settings));
      }
    }

    instance.runHooks('afterGetCellMeta', row, col, cellProperties);

    return cellProperties;
  };

  this.getCellMetaAtRow = function (row) {
    return priv.cellSettings[row];
  };

  this.isColumnModificationAllowed = function () {
    return !(instance.dataType === 'object' || instance.getSettings().columns);
  };

  const rendererLookup = (0, _data.cellMethodLookupFactory)('renderer');

  this.getCellRenderer = function (row, col) {
    return (0, _renderers.getRenderer)(rendererLookup.call(this, row, col));
  };

  this.getCellEditor = (0, _data.cellMethodLookupFactory)('editor');

  const validatorLookup = (0, _data.cellMethodLookupFactory)('validator');

  this.getCellValidator = function (row, col) {
    let validator = validatorLookup.call(this, row, col);

    if (typeof validator === 'string') {
      validator = (0, _validators.getValidator)(validator);
    }

    return validator;
  };

  this.validateCells = function (callback) {
    var waitingForValidator = new ValidatorsQueue();

    if (callback) {
      waitingForValidator.onQueueEmpty = callback;
    }

    let i = instance.countRows() - 1;

    while (i >= 0) {
      let j = instance.countCols() - 1;

      while (j >= 0) {
        waitingForValidator.addValidatorToQueue();

        instance.validateCell(instance.getDataAtCell(i, j), instance.getCellMeta(i, j), result => {
          if (typeof result !== 'boolean') {
            throw new Error('Validation error: result is not boolean');
          }
          if (result === false) {
            waitingForValidator.valid = false;
          }
          waitingForValidator.removeValidatorFormQueue();
        }, 'validateCells');
        j--;
      }
      i--;
    }
    waitingForValidator.checkIfQueueIsEmpty();
  };

  this.getRowHeader = function (row) {
    let rowHeader = priv.settings.rowHeaders;

    if (row !== void 0) {
      row = instance.runHooks('modifyRowHeader', row);
    }
    if (row === void 0) {
      rowHeader = [];
      (0, _number.rangeEach)(instance.countRows() - 1, i => {
        rowHeader.push(instance.getRowHeader(i));
      });
    } else if (Array.isArray(rowHeader) && rowHeader[row] !== void 0) {
      rowHeader = rowHeader[row];
    } else if ((0, _function.isFunction)(rowHeader)) {
      rowHeader = rowHeader(row);
    } else if (rowHeader && typeof rowHeader !== 'string' && typeof rowHeader !== 'number') {
      rowHeader = row + 1;
    }

    return rowHeader;
  };

  this.hasRowHeaders = function () {
    return !!priv.settings.rowHeaders;
  };

  this.hasColHeaders = function () {
    if (priv.settings.colHeaders !== void 0 && priv.settings.colHeaders !== null) {
      return !!priv.settings.colHeaders;
    }
    for (var i = 0, ilen = instance.countCols(); i < ilen; i++) {
      if (instance.getColHeader(i)) {
        return true;
      }
    }

    return false;
  };

  this.getColHeader = function (col) {
    let columnsAsFunc = priv.settings.columns && (0, _function.isFunction)(priv.settings.columns);
    let result = priv.settings.colHeaders;

    col = instance.runHooks('modifyColHeader', col);

    if (col === void 0) {
      let out = [];
      let ilen = columnsAsFunc ? instance.countSourceCols() : instance.countCols();

      for (let i = 0; i < ilen; i++) {
        out.push(instance.getColHeader(i));
      }

      result = out;
    } else {
      let translateVisualIndexToColumns = function translateVisualIndexToColumns(col) {
        let arr = [];
        let columnsLen = instance.countSourceCols();
        let index = 0;

        for (; index < columnsLen; index++) {
          if ((0, _function.isFunction)(instance.getSettings().columns) && instance.getSettings().columns(index)) {
            arr.push(index);
          }
        }

        return arr[col];
      };
      let baseCol = col;
      col = instance.runHooks('modifyCol', col);

      let prop = translateVisualIndexToColumns(col);

      if (priv.settings.columns && (0, _function.isFunction)(priv.settings.columns) && priv.settings.columns(prop) && priv.settings.columns(prop).title) {
        result = priv.settings.columns(prop).title;
      } else if (priv.settings.columns && priv.settings.columns[col] && priv.settings.columns[col].title) {
        result = priv.settings.columns[col].title;
      } else if (Array.isArray(priv.settings.colHeaders) && priv.settings.colHeaders[col] !== void 0) {
        result = priv.settings.colHeaders[col];
      } else if ((0, _function.isFunction)(priv.settings.colHeaders)) {
        result = priv.settings.colHeaders(col);
      } else if (priv.settings.colHeaders && typeof priv.settings.colHeaders !== 'string' && typeof priv.settings.colHeaders !== 'number') {
        result = (0, _data.spreadsheetColumnLabel)(baseCol);
      }
    }

    return result;
  };

  this._getColWidthFromSettings = function (col) {
    var cellProperties = instance.getCellMeta(0, col);
    var width = cellProperties.width;

    if (width === void 0 || width === priv.settings.width) {
      width = cellProperties.colWidths;
    }
    if (width !== void 0 && width !== null) {
      switch (typeof width) {
        case 'object':
          width = width[col];
          break;

        case 'function':
          width = width(col);
          break;
        default:
          break;
      }
      if (typeof width === 'string') {
        width = parseInt(width, 10);
      }
    }

    return width;
  };

  this.getColWidth = function (col) {
    let width = instance._getColWidthFromSettings(col);

    width = instance.runHooks('modifyColWidth', width, col);

    if (width === void 0) {
      width = _src.ViewportColumnsCalculator.DEFAULT_WIDTH;
    }

    return width;
  };

  this._getRowHeightFromSettings = function (row) {
    var height = priv.settings.rowHeights;

    if (height !== void 0 && height !== null) {
      switch (typeof height) {
        case 'object':
          height = height[row];
          break;

        case 'function':
          height = height(row);
          break;
        default:
          break;
      }
      if (typeof height === 'string') {
        height = parseInt(height, 10);
      }
    }

    return height;
  };

  this.getRowHeight = function (row) {
    var height = instance._getRowHeightFromSettings(row);

    height = instance.runHooks('modifyRowHeight', height, row);

    return height;
  };

  this.countSourceRows = function () {
    let sourceLength = instance.runHooks('modifySourceLength');
    return sourceLength || (instance.getSourceData() ? instance.getSourceData().length : 0);
  };

  this.countSourceCols = function () {
    let len = 0;
    let obj = instance.getSourceData() && instance.getSourceData()[0] ? instance.getSourceData()[0] : [];

    if ((0, _object.isObject)(obj)) {
      len = (0, _object.deepObjectSize)(obj);
    } else {
      len = obj.length || 0;
    }

    return len;
  };

  this.countRows = function () {
    return datamap.getLength();
  };

  this.countCols = function () {
    const maxCols = this.getSettings().maxCols;
    let dataHasLength = false;
    let dataLen = 0;

    if (instance.dataType === 'array') {
      dataHasLength = priv.settings.data && priv.settings.data[0] && priv.settings.data[0].length;
    }

    if (dataHasLength) {
      dataLen = priv.settings.data[0].length;
    }

    if (priv.settings.columns) {
      let columnsIsFunction = (0, _function.isFunction)(priv.settings.columns);

      if (columnsIsFunction) {
        if (instance.dataType === 'array') {
          let columnLen = 0;

          for (let i = 0; i < dataLen; i++) {
            if (priv.settings.columns(i)) {
              columnLen++;
            }
          }

          dataLen = columnLen;
        } else if (instance.dataType === 'object' || instance.dataType === 'function') {
          dataLen = datamap.colToPropCache.length;
        }
      } else {
        dataLen = priv.settings.columns.length;
      }
    } else if (instance.dataType === 'object' || instance.dataType === 'function') {
      dataLen = datamap.colToPropCache.length;
    }

    return Math.min(maxCols, dataLen);
  };

  this.rowOffset = function () {
    return instance.view.wt.wtTable.getFirstRenderedRow();
  };

  this.colOffset = function () {
    return instance.view.wt.wtTable.getFirstRenderedColumn();
  };

  this.countRenderedRows = function () {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getRenderedRowsCount() : -1;
  };

  this.countVisibleRows = function () {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getVisibleRowsCount() : -1;
  };

  this.countRenderedCols = function () {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getRenderedColumnsCount() : -1;
  };

  this.countVisibleCols = function () {
    return instance.view.wt.drawn ? instance.view.wt.wtTable.getVisibleColumnsCount() : -1;
  };

  this.countEmptyRows = function (ending) {
    var i = instance.countRows() - 1,
        empty = 0,
        row;

    while (i >= 0) {
      row = instance.runHooks('modifyRow', i);

      if (instance.isEmptyRow(row)) {
        empty++;
      } else if (ending) {
        break;
      }
      i--;
    }

    return empty;
  };

  this.countEmptyCols = function (ending) {
    if (instance.countRows() < 1) {
      return 0;
    }
    var i = instance.countCols() - 1,
        empty = 0;

    while (i >= 0) {
      if (instance.isEmptyCol(i)) {
        empty++;
      } else if (ending) {
        break;
      }
      i--;
    }

    return empty;
  };

  this.isEmptyRow = function (row) {
    return priv.settings.isEmptyRow.call(instance, row);
  };

  this.isEmptyCol = function (col) {
    return priv.settings.isEmptyCol.call(instance, col);
  };

  this.selectCell = function (row, col, endRow, endCol, scrollToCell, changeListener) {
    var coords;

    changeListener = (0, _mixed.isUndefined)(changeListener) || changeListener === true;

    if (typeof row !== 'number' || row < 0 || row >= instance.countRows()) {
      return false;
    }
    if (typeof col !== 'number' || col < 0 || col >= instance.countCols()) {
      return false;
    }
    if ((0, _mixed.isDefined)(endRow)) {
      if (typeof endRow !== 'number' || endRow < 0 || endRow >= instance.countRows()) {
        return false;
      }
      if (typeof endCol !== 'number' || endCol < 0 || endCol >= instance.countCols()) {
        return false;
      }
    }
    coords = new _src.CellCoords(row, col);
    priv.selRange = new _src.CellRange(coords, coords, coords);

    if (changeListener) {
      instance.listen();
    }

    if ((0, _mixed.isUndefined)(endRow)) {
      selection.setRangeEnd(priv.selRange.from, scrollToCell);
    } else {
      selection.setRangeEnd(new _src.CellCoords(endRow, endCol), scrollToCell);
    }
    instance.selection.finish();

    return true;
  };

  this.selectCellByProp = function (row, prop, endRow, endProp, scrollToCell) {
    arguments[1] = datamap.propToCol(arguments[1]);

    if ((0, _mixed.isDefined)(arguments[3])) {
      arguments[3] = datamap.propToCol(arguments[3]);
    }

    return instance.selectCell(...arguments);
  };

  this.deselectCell = function () {
    selection.deselect();
  };

  this.scrollViewportTo = function (row, column) {
    let snapToBottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let snapToRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (row !== void 0 && (row < 0 || row >= instance.countRows())) {
      return false;
    }
    if (column !== void 0 && (column < 0 || column >= instance.countCols())) {
      return false;
    }

    let result = false;

    if (row !== void 0 && column !== void 0) {
      instance.view.wt.wtOverlays.topOverlay.scrollTo(row, snapToBottom);
      instance.view.wt.wtOverlays.leftOverlay.scrollTo(column, snapToRight);

      result = true;
    }
    if (typeof row === 'number' && typeof column !== 'number') {
      instance.view.wt.wtOverlays.topOverlay.scrollTo(row, snapToBottom);

      result = true;
    }
    if (typeof column === 'number' && typeof row !== 'number') {
      instance.view.wt.wtOverlays.leftOverlay.scrollTo(column, snapToRight);

      result = true;
    }

    return result;
  };

  this.destroy = function () {

    instance._clearTimeouts();
    if (instance.view) {
      instance.view.destroy();
    }
    if (dataSource) {
      dataSource.destroy();
    }
    dataSource = null;

    const nextSibling = instance.rootElement.nextSibling;

    if ((0, _rootInstance.isRootInstance)(instance) && nextSibling) {
      instance.rootElement.parentNode.removeChild(nextSibling);
    }
    (0, _element.empty)(instance.rootElement);
    eventManager.destroy();

    instance.runHooks('afterDestroy');
    _pluginHooks2.default.getSingleton().destroy(instance);

    for (var i in instance) {
      if ((0, _object.hasOwnProperty)(instance, i)) {
        if ((0, _function.isFunction)(instance[i])) {
          instance[i] = postMortem;
        } else if (i !== 'guid') {
          instance[i] = null;
        }
      }
    }

    if (datamap) {
      datamap.destroy();
    }
    datamap = null;
    priv = null;
    grid = null;
    selection = null;
    editorManager = null;
    instance = null;
    GridSettings = null;
  };

  function postMortem() {
    throw new Error('This method cannot be called because this Handsontable instance has been destroyed');
  }

  this.getActiveEditor = function () {
    return editorManager.getActiveEditor();
  };

  this.getPlugin = function (pluginName) {
    return (0, _plugins.getPlugin)(this, pluginName);
  };

  this.getInstance = function () {
    return instance;
  };

  this.addHook = function (key, callback) {
    _pluginHooks2.default.getSingleton().add(key, callback, instance);
  };

  this.hasHook = function (key) {
    return _pluginHooks2.default.getSingleton().has(key, instance);
  };

  this.addHookOnce = function (key, callback) {
    _pluginHooks2.default.getSingleton().once(key, callback, instance);
  };

  this.removeHook = function (key, callback) {
    _pluginHooks2.default.getSingleton().remove(key, callback, instance);
  };

  this.runHooks = function (key, p1, p2, p3, p4, p5, p6) {
    return _pluginHooks2.default.getSingleton().run(instance, key, p1, p2, p3, p4, p5, p6);
  };

  this.timeouts = [];

  this._registerTimeout = function (handle) {
    this.timeouts.push(handle);
  };

  this._clearTimeouts = function () {
    for (var i = 0, ilen = this.timeouts.length; i < ilen; i++) {
      clearTimeout(this.timeouts[i]);
    }
  };

  _pluginHooks2.default.getSingleton().run(instance, 'construct');
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.spreadsheetColumnLabel = spreadsheetColumnLabel;
exports.spreadsheetColumnIndex = spreadsheetColumnIndex;
exports.createSpreadsheetData = createSpreadsheetData;
exports.createSpreadsheetObjectData = createSpreadsheetObjectData;
exports.createEmptySpreadsheetData = createEmptySpreadsheetData;
exports.translateRowsToColumns = translateRowsToColumns;
exports.cellMethodLookupFactory = cellMethodLookupFactory;

var _cellTypes = __webpack_require__(22);

var _object = __webpack_require__(2);

const COLUMN_LABEL_BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const COLUMN_LABEL_BASE_LENGTH = COLUMN_LABEL_BASE.length;

function spreadsheetColumnLabel(index) {
  let dividend = index + 1;
  let columnLabel = '';
  let modulo;

  while (dividend > 0) {
    modulo = (dividend - 1) % COLUMN_LABEL_BASE_LENGTH;
    columnLabel = String.fromCharCode(65 + modulo) + columnLabel;
    dividend = parseInt((dividend - modulo) / COLUMN_LABEL_BASE_LENGTH, 10);
  }

  return columnLabel;
}

function spreadsheetColumnIndex(label) {
  let result = 0;

  if (label) {
    for (let i = 0, j = label.length - 1; i < label.length; i += 1, j -= 1) {
      result += Math.pow(COLUMN_LABEL_BASE_LENGTH, j) * (COLUMN_LABEL_BASE.indexOf(label[i]) + 1);
    }
  }
  --result;

  return result;
}

function createSpreadsheetData() {
  let rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  let columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

  var _rows = [],
      i,
      j;

  for (i = 0; i < rows; i++) {
    var row = [];

    for (j = 0; j < columns; j++) {
      row.push(spreadsheetColumnLabel(j) + (i + 1));
    }
    _rows.push(row);
  }

  return _rows;
}

function createSpreadsheetObjectData() {
  let rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  let colCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

  var _rows = [],
      i,
      j;

  for (i = 0; i < rows; i++) {
    var row = {};

    for (j = 0; j < colCount; j++) {
      row[`prop${j}`] = spreadsheetColumnLabel(j) + (i + 1);
    }
    _rows.push(row);
  }

  return _rows;
}

function createEmptySpreadsheetData(rows, columns) {
  let data = [];
  let row;

  for (let i = 0; i < rows; i++) {
    row = [];
    for (let j = 0; j < columns; j++) {
      row.push('');
    }
    data.push(row);
  }

  return data;
}

function translateRowsToColumns(input) {
  var i,
      ilen,
      j,
      jlen,
      output = [],
      olen = 0;

  for (i = 0, ilen = input.length; i < ilen; i++) {
    for (j = 0, jlen = input[i].length; j < jlen; j++) {
      if (j == olen) {
        output.push([]);
        olen++;
      }
      output[j].push(input[i][j]);
    }
  }

  return output;
}

function cellMethodLookupFactory(methodName, allowUndefined) {

  allowUndefined = typeof allowUndefined == 'undefined' ? true : allowUndefined;

  return function cellMethodLookup(row, col) {
    return function getMethodFromProperties(properties) {

      if (!properties) {
        return;
      } else if ((0, _object.hasOwnProperty)(properties, methodName) && properties[methodName] !== void 0) {
        return properties[methodName];
      } else if ((0, _object.hasOwnProperty)(properties, 'type') && properties.type) {
        var type;

        if (typeof properties.type != 'string') {
          throw new Error('Cell type must be a string ');
        }
        type = (0, _cellTypes.getCellType)(properties.type);

        if ((0, _object.hasOwnProperty)(type, methodName)) {
          return type[methodName];
        } else if (allowUndefined) {
          return;
        }
      }

      return getMethodFromProperties(Object.getPrototypeOf(properties));
    }(typeof row == 'number' ? this.getCellMeta(row, col) : row);
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.columnFactory = columnFactory;

var _object = __webpack_require__(2);

function columnFactory(GridSettings, conflictList) {
  function ColumnSettings() {};

  (0, _object.inherit)(ColumnSettings, GridSettings);

  for (let i = 0, len = conflictList.length; i < len; i++) {
    ColumnSettings.prototype[conflictList[i]] = void 0;
  }

  return ColumnSettings;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _array = __webpack_require__(1);

class GhostTable {
  constructor(hotInstance) {
    this.hot = hotInstance;

    this.container = null;

    this.injected = false;

    this.rows = [];

    this.columns = [];

    this.samples = null;

    this.settings = {
      useHeaders: true
    };
  }

  addRow(row, samples) {
    if (this.columns.length) {
      throw new Error('Doesn\'t support multi-dimensional table');
    }
    if (!this.rows.length) {
      this.container = this.createContainer(this.hot.rootElement.className);
    }
    const rowObject = { row };
    this.rows.push(rowObject);

    this.samples = samples;
    this.table = this.createTable(this.hot.table.className);
    this.table.colGroup.appendChild(this.createColGroupsCol());
    this.table.tr.appendChild(this.createRow(row));
    this.container.container.appendChild(this.table.fragment);

    rowObject.table = this.table.table;
  }

  addColumnHeadersRow(samples) {
    if (this.hot.getColHeader(0) != null) {
      const rowObject = { row: -1 };
      this.rows.push(rowObject);

      this.container = this.createContainer(this.hot.rootElement.className);

      this.samples = samples;
      this.table = this.createTable(this.hot.table.className);
      this.table.colGroup.appendChild(this.createColGroupsCol());
      this.table.tHead.appendChild(this.createColumnHeadersRow());
      this.container.container.appendChild(this.table.fragment);

      rowObject.table = this.table.table;
    }
  }

  addColumn(column, samples) {
    if (this.rows.length) {
      throw new Error('Doesn\'t support multi-dimensional table');
    }
    if (!this.columns.length) {
      this.container = this.createContainer(this.hot.rootElement.className);
    }
    const columnObject = { col: column };
    this.columns.push(columnObject);

    this.samples = samples;
    this.table = this.createTable(this.hot.table.className);

    if (this.getSetting('useHeaders') && this.hot.getColHeader(column) !== null) {
      this.hot.view.appendColHeader(column, this.table.th);
    }
    this.table.tBody.appendChild(this.createCol(column));
    this.container.container.appendChild(this.table.fragment);

    columnObject.table = this.table.table;
  }

  getHeights(callback) {
    if (!this.injected) {
      this.injectTable();
    }
    (0, _array.arrayEach)(this.rows, row => {
      callback(row.row, (0, _element.outerHeight)(row.table) - 1);
    });
  }

  getWidths(callback) {
    if (!this.injected) {
      this.injectTable();
    }
    (0, _array.arrayEach)(this.columns, column => {
      callback(column.col, (0, _element.outerWidth)(column.table));
    });
  }

  setSettings(settings) {
    this.settings = settings;
  }

  setSetting(name, value) {
    if (!this.settings) {
      this.settings = {};
    }

    this.settings[name] = value;
  }

  getSettings() {
    return this.settings;
  }

  getSetting(name) {
    if (this.settings) {
      return this.settings[name];
    }
    return null;
  }

  createColGroupsCol() {
    const d = document;
    const fragment = d.createDocumentFragment();

    if (this.hot.hasRowHeaders()) {
      fragment.appendChild(this.createColElement(-1));
    }

    this.samples.forEach(sample => {
      (0, _array.arrayEach)(sample.strings, string => {
        fragment.appendChild(this.createColElement(string.col));
      });
    });

    return fragment;
  }

  createRow(row) {
    const d = document;
    const fragment = d.createDocumentFragment();
    const th = d.createElement('th');

    if (this.hot.hasRowHeaders()) {
      this.hot.view.appendRowHeader(row, th);

      fragment.appendChild(th);
    }

    this.samples.forEach(sample => {
      (0, _array.arrayEach)(sample.strings, string => {
        let column = string.col;
        let cellProperties = this.hot.getCellMeta(row, column);

        cellProperties.col = column;
        cellProperties.row = row;

        let renderer = this.hot.getCellRenderer(cellProperties);
        const td = d.createElement('td');

        renderer(this.hot, td, row, column, this.hot.colToProp(column), string.value, cellProperties);
        fragment.appendChild(td);
      });
    });

    return fragment;
  }

  createColumnHeadersRow() {
    const d = document;
    const fragment = d.createDocumentFragment();

    if (this.hot.hasRowHeaders()) {
      const th = d.createElement('th');
      this.hot.view.appendColHeader(-1, th);
      fragment.appendChild(th);
    }

    this.samples.forEach(sample => {
      (0, _array.arrayEach)(sample.strings, string => {
        let column = string.col;

        const th = d.createElement('th');

        this.hot.view.appendColHeader(column, th);
        fragment.appendChild(th);
      });
    });

    return fragment;
  }

  createCol(column) {
    const d = document;
    const fragment = d.createDocumentFragment();

    this.samples.forEach(sample => {
      (0, _array.arrayEach)(sample.strings, string => {
        let row = string.row;
        let cellProperties = this.hot.getCellMeta(row, column);

        cellProperties.col = column;
        cellProperties.row = row;

        let renderer = this.hot.getCellRenderer(cellProperties);
        const td = d.createElement('td');
        const tr = d.createElement('tr');

        renderer(this.hot, td, row, column, this.hot.colToProp(column), string.value, cellProperties);
        tr.appendChild(td);
        fragment.appendChild(tr);
      });
    });

    return fragment;
  }

  clean() {
    this.rows.length = 0;
    this.rows[-1] = void 0;
    this.columns.length = 0;

    if (this.samples) {
      this.samples.clear();
    }
    this.samples = null;
    this.removeTable();
  }

  injectTable() {
    let parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!this.injected) {
      (parent || this.hot.rootElement).appendChild(this.container.fragment);
      this.injected = true;
    }
  }

  removeTable() {
    if (this.injected && this.container.container.parentNode) {
      this.container.container.parentNode.removeChild(this.container.container);
      this.container = null;
      this.injected = false;
    }
  }

  createColElement(column) {
    const d = document;
    const col = d.createElement('col');

    col.style.width = `${this.hot.view.wt.wtTable.getStretchedColumnWidth(column)}px`;

    return col;
  }

  createTable() {
    let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    const d = document;
    const fragment = d.createDocumentFragment();
    const table = d.createElement('table');
    const tHead = d.createElement('thead');
    const tBody = d.createElement('tbody');
    const colGroup = d.createElement('colgroup');
    const tr = d.createElement('tr');
    const th = d.createElement('th');

    if (this.isVertical()) {
      table.appendChild(colGroup);
    }
    if (this.isHorizontal()) {
      tr.appendChild(th);
      tHead.appendChild(tr);
      table.style.tableLayout = 'auto';
      table.style.width = 'auto';
    }
    table.appendChild(tHead);

    if (this.isVertical()) {
      tBody.appendChild(tr);
    }
    table.appendChild(tBody);
    (0, _element.addClass)(table, className);
    fragment.appendChild(table);

    return { fragment, table, tHead, tBody, colGroup, tr, th };
  }

  createContainer() {
    let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    const d = document;
    const fragment = d.createDocumentFragment();
    const container = d.createElement('div');

    className = `htGhostTable htAutoSize ${className.trim()}`;
    (0, _element.addClass)(container, className);
    fragment.appendChild(container);

    return { fragment, container };
  }

  isVertical() {
    return !!(this.rows.length && !this.columns.length);
  }

  isHorizontal() {
    return !!(this.columns.length && !this.rows.length);
  }
}

exports.default = GhostTable;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRegisteredValidators = exports.getRegisteredValidatorNames = exports.hasValidator = exports.getValidator = exports.registerValidator = undefined;

var _staticRegister2 = __webpack_require__(21);

var _staticRegister3 = _interopRequireDefault(_staticRegister2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _staticRegister = (0, _staticRegister3.default)('validators');

const register = _staticRegister.register,
      getItem = _staticRegister.getItem,
      hasItem = _staticRegister.hasItem,
      getNames = _staticRegister.getNames,
      getValues = _staticRegister.getValues;

function _getItem(name) {
  if (typeof name === 'function') {
    return name;
  }
  if (!hasItem(name)) {
    throw Error(`No registered validator found under "${name}" name`);
  }

  return getItem(name);
}

exports.registerValidator = register;
exports.getValidator = _getItem;
exports.hasValidator = hasItem;
exports.getRegisteredValidatorNames = getNames;
exports.getRegisteredValidators = getValues;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _coords = __webpack_require__(19);

var _coords2 = _interopRequireDefault(_coords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CellRange {
  constructor(highlight, from, to) {
    this.highlight = highlight;
    this.from = from;
    this.to = to;
  }

  isValid(wotInstance) {
    return this.from.isValid(wotInstance) && this.to.isValid(wotInstance);
  }

  isSingle() {
    return this.from.row === this.to.row && this.from.col === this.to.col;
  }

  getHeight() {
    return Math.max(this.from.row, this.to.row) - Math.min(this.from.row, this.to.row) + 1;
  }

  getWidth() {
    return Math.max(this.from.col, this.to.col) - Math.min(this.from.col, this.to.col) + 1;
  }

  includes(cellCoords) {
    let row = cellCoords.row,
        col = cellCoords.col;

    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();

    return topLeft.row <= row && bottomRight.row >= row && topLeft.col <= col && bottomRight.col >= col;
  }

  includesRange(testedRange) {
    return this.includes(testedRange.getTopLeftCorner()) && this.includes(testedRange.getBottomRightCorner());
  }

  isEqual(testedRange) {
    return Math.min(this.from.row, this.to.row) == Math.min(testedRange.from.row, testedRange.to.row) && Math.max(this.from.row, this.to.row) == Math.max(testedRange.from.row, testedRange.to.row) && Math.min(this.from.col, this.to.col) == Math.min(testedRange.from.col, testedRange.to.col) && Math.max(this.from.col, this.to.col) == Math.max(testedRange.from.col, testedRange.to.col);
  }

  overlaps(testedRange) {
    return testedRange.isSouthEastOf(this.getTopLeftCorner()) && testedRange.isNorthWestOf(this.getBottomRightCorner());
  }

  isSouthEastOf(testedCoords) {
    return this.getTopLeftCorner().isSouthEastOf(testedCoords) || this.getBottomRightCorner().isSouthEastOf(testedCoords);
  }

  isNorthWestOf(testedCoords) {
    return this.getTopLeftCorner().isNorthWestOf(testedCoords) || this.getBottomRightCorner().isNorthWestOf(testedCoords);
  }

  expand(cellCoords) {
    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();

    if (cellCoords.row < topLeft.row || cellCoords.col < topLeft.col || cellCoords.row > bottomRight.row || cellCoords.col > bottomRight.col) {
      this.from = new _coords2.default(Math.min(topLeft.row, cellCoords.row), Math.min(topLeft.col, cellCoords.col));
      this.to = new _coords2.default(Math.max(bottomRight.row, cellCoords.row), Math.max(bottomRight.col, cellCoords.col));

      return true;
    }

    return false;
  }

  expandByRange(expandingRange) {
    if (this.includesRange(expandingRange) || !this.overlaps(expandingRange)) {
      return false;
    }

    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();
    let topRight = this.getTopRightCorner();
    let bottomLeft = this.getBottomLeftCorner();

    let expandingTopLeft = expandingRange.getTopLeftCorner();
    let expandingBottomRight = expandingRange.getBottomRightCorner();

    let resultTopRow = Math.min(topLeft.row, expandingTopLeft.row);
    let resultTopCol = Math.min(topLeft.col, expandingTopLeft.col);
    let resultBottomRow = Math.max(bottomRight.row, expandingBottomRight.row);
    let resultBottomCol = Math.max(bottomRight.col, expandingBottomRight.col);

    let finalFrom = new _coords2.default(resultTopRow, resultTopCol),
        finalTo = new _coords2.default(resultBottomRow, resultBottomCol);
    let isCorner = new CellRange(finalFrom, finalFrom, finalTo).isCorner(this.from, expandingRange),
        onlyMerge = expandingRange.isEqual(new CellRange(finalFrom, finalFrom, finalTo));

    if (isCorner && !onlyMerge) {
      if (this.from.col > finalFrom.col) {
        finalFrom.col = resultBottomCol;
        finalTo.col = resultTopCol;
      }
      if (this.from.row > finalFrom.row) {
        finalFrom.row = resultBottomRow;
        finalTo.row = resultTopRow;
      }
    }
    this.from = finalFrom;
    this.to = finalTo;

    return true;
  }

  getDirection() {
    if (this.from.isNorthWestOf(this.to)) {
      return 'NW-SE';
    } else if (this.from.isNorthEastOf(this.to)) {
      return 'NE-SW';
    } else if (this.from.isSouthEastOf(this.to)) {
      return 'SE-NW';
    } else if (this.from.isSouthWestOf(this.to)) {
      return 'SW-NE';
    }
  }

  setDirection(direction) {
    switch (direction) {
      case 'NW-SE':
        var _ref = [this.getTopLeftCorner(), this.getBottomRightCorner()];
        this.from = _ref[0];
        this.to = _ref[1];

        break;
      case 'NE-SW':
        var _ref2 = [this.getTopRightCorner(), this.getBottomLeftCorner()];
        this.from = _ref2[0];
        this.to = _ref2[1];

        break;
      case 'SE-NW':
        var _ref3 = [this.getBottomRightCorner(), this.getTopLeftCorner()];
        this.from = _ref3[0];
        this.to = _ref3[1];

        break;
      case 'SW-NE':
        var _ref4 = [this.getBottomLeftCorner(), this.getTopRightCorner()];
        this.from = _ref4[0];
        this.to = _ref4[1];

        break;
      default:
        break;
    }
  }

  getTopLeftCorner() {
    return new _coords2.default(Math.min(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  }

  getBottomRightCorner() {
    return new _coords2.default(Math.max(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  }

  getTopRightCorner() {
    return new _coords2.default(Math.min(this.from.row, this.to.row), Math.max(this.from.col, this.to.col));
  }

  getBottomLeftCorner() {
    return new _coords2.default(Math.max(this.from.row, this.to.row), Math.min(this.from.col, this.to.col));
  }

  isCorner(coords, expandedRange) {
    if (expandedRange) {
      if (expandedRange.includes(coords)) {
        if (this.getTopLeftCorner().isEqual(new _coords2.default(expandedRange.from.row, expandedRange.from.col)) || this.getTopRightCorner().isEqual(new _coords2.default(expandedRange.from.row, expandedRange.to.col)) || this.getBottomLeftCorner().isEqual(new _coords2.default(expandedRange.to.row, expandedRange.from.col)) || this.getBottomRightCorner().isEqual(new _coords2.default(expandedRange.to.row, expandedRange.to.col))) {
          return true;
        }
      }
    }

    return coords.isEqual(this.getTopLeftCorner()) || coords.isEqual(this.getTopRightCorner()) || coords.isEqual(this.getBottomLeftCorner()) || coords.isEqual(this.getBottomRightCorner());
  }

  getOppositeCorner(coords, expandedRange) {
    if (!(coords instanceof _coords2.default)) {
      return false;
    }

    if (expandedRange) {
      if (expandedRange.includes(coords)) {
        if (this.getTopLeftCorner().isEqual(new _coords2.default(expandedRange.from.row, expandedRange.from.col))) {
          return this.getBottomRightCorner();
        }
        if (this.getTopRightCorner().isEqual(new _coords2.default(expandedRange.from.row, expandedRange.to.col))) {
          return this.getBottomLeftCorner();
        }
        if (this.getBottomLeftCorner().isEqual(new _coords2.default(expandedRange.to.row, expandedRange.from.col))) {
          return this.getTopRightCorner();
        }
        if (this.getBottomRightCorner().isEqual(new _coords2.default(expandedRange.to.row, expandedRange.to.col))) {
          return this.getTopLeftCorner();
        }
      }
    }

    if (coords.isEqual(this.getBottomRightCorner())) {
      return this.getTopLeftCorner();
    } else if (coords.isEqual(this.getTopLeftCorner())) {
      return this.getBottomRightCorner();
    } else if (coords.isEqual(this.getTopRightCorner())) {
      return this.getBottomLeftCorner();
    } else if (coords.isEqual(this.getBottomLeftCorner())) {
      return this.getTopRightCorner();
    }
  }

  getBordersSharedWith(range) {
    if (!this.includesRange(range)) {
      return [];
    }

    const thisBorders = {
      top: Math.min(this.from.row, this.to.row),
      bottom: Math.max(this.from.row, this.to.row),
      left: Math.min(this.from.col, this.to.col),
      right: Math.max(this.from.col, this.to.col)
    };
    const rangeBorders = {
      top: Math.min(range.from.row, range.to.row),
      bottom: Math.max(range.from.row, range.to.row),
      left: Math.min(range.from.col, range.to.col),
      right: Math.max(range.from.col, range.to.col)
    };
    const result = [];

    if (thisBorders.top == rangeBorders.top) {
      result.push('top');
    }
    if (thisBorders.right == rangeBorders.right) {
      result.push('right');
    }
    if (thisBorders.bottom == rangeBorders.bottom) {
      result.push('bottom');
    }
    if (thisBorders.left == rangeBorders.left) {
      result.push('left');
    }

    return result;
  }

  getInner() {
    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();
    let out = [];

    for (let r = topLeft.row; r <= bottomRight.row; r++) {
      for (let c = topLeft.col; c <= bottomRight.col; c++) {
        if (!(this.from.row === r && this.from.col === c) && !(this.to.row === r && this.to.col === c)) {
          out.push(new _coords2.default(r, c));
        }
      }
    }
    return out;
  }

  getAll() {
    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();
    let out = [];

    for (let r = topLeft.row; r <= bottomRight.row; r++) {
      for (let c = topLeft.col; c <= bottomRight.col; c++) {
        if (topLeft.row === r && topLeft.col === c) {
          out.push(topLeft);
        } else if (bottomRight.row === r && bottomRight.col === c) {
          out.push(bottomRight);
        } else {
          out.push(new _coords2.default(r, c));
        }
      }
    }

    return out;
  }

  forAll(callback) {
    let topLeft = this.getTopLeftCorner();
    let bottomRight = this.getBottomRightCorner();

    for (let r = topLeft.row; r <= bottomRight.row; r++) {
      for (let c = topLeft.col; c <= bottomRight.col; c++) {
        let breakIteration = callback(r, c);

        if (breakIteration === false) {
          return;
        }
      }
    }
  }
}

exports.default = CellRange;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EditorState = undefined;

var _src = __webpack_require__(8);

var _mixed = __webpack_require__(12);

const EditorState = exports.EditorState = {
  VIRGIN: 'STATE_VIRGIN',
  EDITING: 'STATE_EDITING',
  WAITING: 'STATE_WAITING',
  FINISHED: 'STATE_FINISHED'
};

function BaseEditor(instance) {
  this.instance = instance;
  this.state = EditorState.VIRGIN;

  this._opened = false;
  this._fullEditMode = false;
  this._closeCallback = null;

  this.init();
}

BaseEditor.prototype._fireCallbacks = function (result) {
  if (this._closeCallback) {
    this._closeCallback(result);
    this._closeCallback = null;
  }
};

BaseEditor.prototype.init = function () {};

BaseEditor.prototype.getValue = function () {
  throw Error('Editor getValue() method unimplemented');
};

BaseEditor.prototype.setValue = function (newValue) {
  throw Error('Editor setValue() method unimplemented');
};

BaseEditor.prototype.open = function () {
  throw Error('Editor open() method unimplemented');
};

BaseEditor.prototype.close = function () {
  throw Error('Editor close() method unimplemented');
};

BaseEditor.prototype.prepare = function (row, col, prop, td, originalValue, cellProperties) {
  this.TD = td;
  this.row = row;
  this.col = col;
  this.prop = prop;
  this.originalValue = originalValue;
  this.cellProperties = cellProperties;
  this.state = EditorState.VIRGIN;
};

BaseEditor.prototype.extend = function () {
  var baseClass = this.constructor;

  function Editor() {
    baseClass.apply(this, arguments);
  }

  function inherit(Child, Parent) {
    function Bridge() {}
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;

    return Child;
  }

  return inherit(Editor, baseClass);
};

BaseEditor.prototype.saveValue = function (value, ctrlDown) {
  let selection;
  let tmp;

  if (ctrlDown) {
    selection = this.instance.getSelected();

    if (selection[0] > selection[2]) {
      tmp = selection[0];
      selection[0] = selection[2];
      selection[2] = tmp;
    }
    if (selection[1] > selection[3]) {
      tmp = selection[1];
      selection[1] = selection[3];
      selection[3] = tmp;
    }
  } else {
    selection = [this.row, this.col, null, null];
  }

  this.instance.populateFromArray(selection[0], selection[1], value, selection[2], selection[3], 'edit');
};

BaseEditor.prototype.beginEditing = function (initialValue, event) {
  if (this.state != EditorState.VIRGIN) {
    return;
  }
  this.instance.view.scrollViewport(new _src.CellCoords(this.row, this.col));
  this.instance.view.render();
  this.state = EditorState.EDITING;

  initialValue = typeof initialValue == 'string' ? initialValue : this.originalValue;
  this.setValue((0, _mixed.stringify)(initialValue));

  this.open(event);
  this._opened = true;
  this.focus();

  this.instance.view.render();

  this.instance.runHooks('afterBeginEditing', this.row, this.col);
};

BaseEditor.prototype.finishEditing = function (restoreOriginalValue, ctrlDown, callback) {
  var _this = this,
      val;

  if (callback) {
    var previousCloseCallback = this._closeCallback;

    this._closeCallback = function (result) {
      if (previousCloseCallback) {
        previousCloseCallback(result);
      }

      callback(result);
      _this.instance.view.render();
    };
  }

  if (this.isWaiting()) {
    return;
  }

  if (this.state == EditorState.VIRGIN) {
    this.instance._registerTimeout(setTimeout(() => {
      _this._fireCallbacks(true);
    }, 0));

    return;
  }

  if (this.state == EditorState.EDITING) {
    if (restoreOriginalValue) {
      this.cancelChanges();
      this.instance.view.render();

      return;
    }

    let value = this.getValue();

    if (this.instance.getSettings().trimWhitespace) {
      val = [[typeof value === 'string' ? String.prototype.trim.call(value || '') : value]];
    } else {
      val = [[value]];
    }

    this.state = EditorState.WAITING;
    this.saveValue(val, ctrlDown);

    if (this.instance.getCellValidator(this.cellProperties)) {
      this.instance.addHookOnce('postAfterValidate', result => {
        _this.state = EditorState.FINISHED;
        _this.discardEditor(result);
      });
    } else {
      this.state = EditorState.FINISHED;
      this.discardEditor(true);
    }
  }
};

BaseEditor.prototype.cancelChanges = function () {
  this.state = EditorState.FINISHED;
  this.discardEditor();
};

BaseEditor.prototype.discardEditor = function (result) {
  if (this.state !== EditorState.FINISHED) {
    return;
  }

  if (result === false && this.cellProperties.allowInvalid !== true) {
    this.instance.selectCell(this.row, this.col);
    this.focus();
    this.state = EditorState.EDITING;
    this._fireCallbacks(false);
  } else {
    this.close();
    this._opened = false;
    this._fullEditMode = false;
    this.state = EditorState.VIRGIN;
    this._fireCallbacks(true);
  }
};

BaseEditor.prototype.enableFullEditMode = function () {
  this._fullEditMode = true;
};

BaseEditor.prototype.isInFullEditMode = function () {
  return this._fullEditMode;
};

BaseEditor.prototype.isOpened = function () {
  return this._opened;
};

BaseEditor.prototype.isWaiting = function () {
  return this.state === EditorState.WAITING;
};

BaseEditor.prototype.checkEditorSection = function () {
  var totalRows = this.instance.countRows();
  var section = '';

  if (this.row < this.instance.getSettings().fixedRowsTop) {
    if (this.col < this.instance.getSettings().fixedColumnsLeft) {
      section = 'top-left-corner';
    } else {
      section = 'top';
    }
  } else if (this.instance.getSettings().fixedRowsBottom && this.row >= totalRows - this.instance.getSettings().fixedRowsBottom) {
    if (this.col < this.instance.getSettings().fixedColumnsLeft) {
      section = 'bottom-left-corner';
    } else {
      section = 'bottom';
    }
  } else if (this.col < this.instance.getSettings().fixedColumnsLeft) {
    section = 'left';
  }

  return section;
};

exports.default = BaseEditor;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ITEMS = exports.SEPARATOR = exports.ROW_BELOW = exports.ROW_ABOVE = exports.REMOVE_ROW = exports.REMOVE_COLUMN = exports.COLUMN_RIGHT = exports.COLUMN_LEFT = undefined;

var _columnLeft = __webpack_require__(79);

Object.defineProperty(exports, 'COLUMN_LEFT', {
  enumerable: true,
  get: function get() {
    return _columnLeft.KEY;
  }
});

var _columnRight = __webpack_require__(80);

Object.defineProperty(exports, 'COLUMN_RIGHT', {
  enumerable: true,
  get: function get() {
    return _columnRight.KEY;
  }
});

var _removeColumn = __webpack_require__(81);

Object.defineProperty(exports, 'REMOVE_COLUMN', {
  enumerable: true,
  get: function get() {
    return _removeColumn.KEY;
  }
});

var _removeRow = __webpack_require__(82);

Object.defineProperty(exports, 'REMOVE_ROW', {
  enumerable: true,
  get: function get() {
    return _removeRow.KEY;
  }
});

var _rowAbove = __webpack_require__(83);

Object.defineProperty(exports, 'ROW_ABOVE', {
  enumerable: true,
  get: function get() {
    return _rowAbove.KEY;
  }
});

var _rowBelow = __webpack_require__(84);

Object.defineProperty(exports, 'ROW_BELOW', {
  enumerable: true,
  get: function get() {
    return _rowBelow.KEY;
  }
});

var _separator = __webpack_require__(48);

Object.defineProperty(exports, 'SEPARATOR', {
  enumerable: true,
  get: function get() {
    return _separator.KEY;
  }
});
exports.predefinedItems = predefinedItems;
exports.addItem = addItem;

var _object = __webpack_require__(2);

var _columnLeft2 = _interopRequireDefault(_columnLeft);

var _columnRight2 = _interopRequireDefault(_columnRight);

var _removeColumn2 = _interopRequireDefault(_removeColumn);

var _removeRow2 = _interopRequireDefault(_removeRow);

var _rowAbove2 = _interopRequireDefault(_rowAbove);

var _rowBelow2 = _interopRequireDefault(_rowBelow);

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ITEMS = exports.ITEMS = [_rowAbove.KEY, _rowBelow.KEY, _columnLeft.KEY, _columnRight.KEY, _removeRow.KEY, _removeColumn.KEY, _separator.KEY];

const _predefinedItems = {
  [_separator.KEY]: _separator2.default,
  [_rowAbove.KEY]: _rowAbove2.default,
  [_rowBelow.KEY]: _rowBelow2.default,
  [_columnLeft.KEY]: _columnLeft2.default,
  [_columnRight.KEY]: _columnRight2.default,
  [_removeRow.KEY]: _removeRow2.default,
  [_removeColumn.KEY]: _removeColumn2.default
};

function predefinedItems() {
  const items = {};

  (0, _object.objectEach)(_predefinedItems, (itemFactory, key) => {
    items[key] = itemFactory();
  });

  return items;
}

function addItem(key, item) {
  if (ITEMS.indexOf(key) === -1) {
    _predefinedItems[key] = item;
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _mixed = __webpack_require__(12);

var _object = __webpack_require__(2);

function DefaultSettings() {};

DefaultSettings.prototype = {
  licenseKey: 'trial',

  data: void 0,

  dataSchema: void 0,

  width: void 0,

  height: void 0,

  startRows: 5,

  startCols: 5,

  rowHeaders: void 0,

  colHeaders: null,

  colWidths: void 0,

  rowHeights: void 0,

  columns: void 0,

  cells: void 0,

  cell: [],

  comments: false,

  customBorders: false,

  minRows: 0,

  minCols: 0,

  maxRows: Infinity,

  maxCols: Infinity,

  minSpareRows: 0,

  minSpareCols: 0,

  allowInsertRow: true,

  allowInsertColumn: true,

  allowRemoveRow: true,

  allowRemoveColumn: true,

  multiSelect: true,

  fillHandle: true,

  fixedRowsTop: 0,

  fixedRowsBottom: 0,

  fixedColumnsLeft: 0,

  outsideClickDeselects: true,

  enterBeginsEditing: true,

  enterMoves: { row: 1, col: 0 },

  tabMoves: { row: 0, col: 1 },

  autoWrapRow: false,

  autoWrapCol: false,

  persistentState: void 0,

  currentRowClassName: void 0,

  currentColClassName: void 0,

  currentHeaderClassName: 'ht__highlight',

  className: void 0,

  tableClassName: void 0,

  stretchH: 'none',

  isEmptyRow(row) {
    var col, colLen, value, meta;

    for (col = 0, colLen = this.countCols(); col < colLen; col++) {
      value = this.getDataAtCell(row, col);

      if (value !== '' && value !== null && (0, _mixed.isDefined)(value)) {
        if (typeof value === 'object') {
          meta = this.getCellMeta(row, col);

          return (0, _object.isObjectEquals)(this.getSchema()[meta.prop], value);
        }
        return false;
      }
    }

    return true;
  },

  isEmptyCol(col) {
    var row, rowLen, value;

    for (row = 0, rowLen = this.countRows(); row < rowLen; row++) {
      value = this.getDataAtCell(row, col);

      if (value !== '' && value !== null && (0, _mixed.isDefined)(value)) {
        return false;
      }
    }

    return true;
  },

  observeDOMVisibility: true,

  allowInvalid: true,

  allowEmpty: true,

  invalidCellClassName: 'htInvalid',

  placeholder: false,

  placeholderCellClassName: 'htPlaceholder',

  readOnlyCellClassName: 'htDimmed',

  renderer: void 0,

  commentedCellClassName: 'htCommentCell',

  fragmentSelection: false,

  readOnly: false,

  skipColumnOnPaste: false,

  search: false,

  type: 'text',

  copyable: true,

  editor: void 0,

  autoComplete: void 0,

  visibleRows: 10,

  trimDropdown: true,

  debug: false,

  wordWrap: true,

  noWordWrapClassName: 'htNoWrap',

  contextMenu: void 0,

  copyPaste: true,

  undo: void 0,

  columnSorting: void 0,

  manualColumnMove: void 0,

  manualColumnResize: void 0,

  manualRowMove: void 0,

  manualRowResize: void 0,

  mergeCells: false,

  viewportRowRenderingOffset: 'auto',

  viewportColumnRenderingOffset: 'auto',

  validator: void 0,

  disableVisualSelection: false,

  sortIndicator: void 0,

  manualColumnFreeze: void 0,

  trimWhitespace: true,

  settings: void 0,

  source: void 0,

  title: void 0,

  checkedTemplate: void 0,

  uncheckedTemplate: void 0,

  label: void 0,

  format: void 0,

  language: void 0,

  selectOptions: void 0,

  autoColumnSize: void 0,

  autoRowSize: void 0,

  dateFormat: void 0,

  correctFormat: false,

  defaultDate: void 0,

  strict: void 0,

  allowHtml: false,

  renderAllRows: void 0,

  preventOverflow: false,

  bindRowsWithHeaders: void 0,

  collapsibleColumns: void 0,

  columnSummary: void 0,

  dropdownMenu: void 0,

  filters: void 0,

  formulas: void 0,

  ganttChart: void 0,

  headerTooltips: void 0,

  hiddenColumns: void 0,

  hiddenRows: void 0,

  nestedHeaders: void 0,

  trimRows: void 0,

  rowHeaderWidth: void 0,

  columnHeaderHeight: void 0,

  observeChanges: void 0,

  sortFunction: void 0,

  sortByRelevance: true,

  filter: true,

  filteringCaseSensitive: false
};

exports.default = DefaultSettings;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerAsRootInstance = registerAsRootInstance;
exports.hasValidParameter = hasValidParameter;
exports.isRootInstance = isRootInstance;
const holder = exports.holder = new WeakMap();

const rootInstanceSymbol = exports.rootInstanceSymbol = Symbol('rootInstance');

function registerAsRootInstance(object) {
  holder.set(object, true);
}

function hasValidParameter(rootSymbol) {
  return rootSymbol === rootInstanceSymbol;
}

function isRootInstance(object) {
  return holder.has(object);
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (global) {
  "use strict";

  function countQuotes(str) {
    return str.split('"').length - 1;
  }

  var SheetClip = {
    parse: function parse(str) {
      var r,
          rLen,
          rows,
          arr = [],
          a = 0,
          c,
          cLen,
          multiline,
          last;

      rows = str.split('\n');

      if (rows.length > 1 && rows[rows.length - 1] === '') {
        rows.pop();
      }
      for (r = 0, rLen = rows.length; r < rLen; r += 1) {
        rows[r] = rows[r].split('\t');

        for (c = 0, cLen = rows[r].length; c < cLen; c += 1) {
          if (!arr[a]) {
            arr[a] = [];
          }
          if (multiline && c === 0) {
            last = arr[a].length - 1;
            arr[a][last] = arr[a][last] + '\n' + rows[r][0];

            if (multiline && countQuotes(rows[r][0]) & 1) {
              multiline = false;
              arr[a][last] = arr[a][last].substring(0, arr[a][last].length - 1).replace(/""/g, '"');
            }
          } else {
            if (c === cLen - 1 && rows[r][c].indexOf('"') === 0 && countQuotes(rows[r][c]) & 1) {
              arr[a].push(rows[r][c].substring(1).replace(/""/g, '"'));
              multiline = true;
            } else {
              arr[a].push(rows[r][c].replace(/""/g, '"'));
              multiline = false;
            }
          }
        }
        if (!multiline) {
          a += 1;
        }
      }

      return arr;
    },

    stringify: function stringify(arr) {
      var r,
          rLen,
          c,
          cLen,
          str = '',
          val;

      for (r = 0, rLen = arr.length; r < rLen; r += 1) {
        cLen = arr[r].length;

        for (c = 0; c < cLen; c += 1) {
          if (c > 0) {
            str += '\t';
          }
          val = arr[r][c];

          if (typeof val === 'string') {
            if (val.indexOf('\n') > -1) {
              str += '"' + val.replace(/"/g, '""') + '"';
            } else {
              str += val;
            }
          } else if (val === null || val === void 0) {
            str += '';
          } else {
            str += val;
          }
        }

        if (r !== rLen - 1) {
          str += '\n';
        }
      }

      return str;
    }
  };

  if (true) {
    exports.parse = SheetClip.parse;
    exports.stringify = SheetClip.stringify;
  } else {
    global.SheetClip = SheetClip;
  }
})(window);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _event = __webpack_require__(5);

var _object = __webpack_require__(2);

var _browser = __webpack_require__(9);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _coords = __webpack_require__(19);

var _coords2 = _interopRequireDefault(_coords);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Border {
  constructor(wotInstance, settings) {
    if (!settings) {
      return;
    }
    this.eventManager = new _eventManager2.default(wotInstance);
    this.instance = wotInstance;
    this.wot = wotInstance;
    this.settings = settings;
    this.mouseDown = false;
    this.main = null;

    this.top = null;
    this.left = null;
    this.bottom = null;
    this.right = null;

    this.topStyle = null;
    this.leftStyle = null;
    this.bottomStyle = null;
    this.rightStyle = null;

    this.cornerDefaultStyle = {
      width: '5px',
      height: '5px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#FFF'
    };
    this.corner = null;
    this.cornerStyle = null;

    this.createBorders(settings);
    this.registerListeners();
  }

  registerListeners() {
    this.eventManager.addEventListener(document.body, 'mousedown', () => this.onMouseDown());
    this.eventManager.addEventListener(document.body, 'mouseup', () => this.onMouseUp());

    for (let c = 0, len = this.main.childNodes.length; c < len; c++) {
      this.eventManager.addEventListener(this.main.childNodes[c], 'mouseenter', event => this.onMouseEnter(event, this.main.childNodes[c]));
    }
  }

  onMouseDown() {
    this.mouseDown = true;
  }

  onMouseUp() {
    this.mouseDown = false;
  }

  onMouseEnter(event, parentElement) {
    if (!this.mouseDown || !this.wot.getSetting('hideBorderOnMouseDownOver')) {
      return;
    }
    event.preventDefault();
    (0, _event.stopImmediatePropagation)(event);

    let _this = this;
    let bounds = parentElement.getBoundingClientRect();

    parentElement.style.display = 'none';

    function isOutside(event) {
      if (event.clientY < Math.floor(bounds.top)) {
        return true;
      }
      if (event.clientY > Math.ceil(bounds.top + bounds.height)) {
        return true;
      }
      if (event.clientX < Math.floor(bounds.left)) {
        return true;
      }
      if (event.clientX > Math.ceil(bounds.left + bounds.width)) {
        return true;
      }
    }

    function handler(event) {
      if (isOutside(event)) {
        _this.eventManager.removeEventListener(document.body, 'mousemove', handler);
        parentElement.style.display = 'block';
      }
    }

    this.eventManager.addEventListener(document.body, 'mousemove', handler);
  }

  createBorders(settings) {
    this.main = document.createElement('div');

    let borderDivs = ['top', 'left', 'bottom', 'right', 'corner'];
    let style = this.main.style;
    style.position = 'absolute';
    style.top = 0;
    style.left = 0;

    for (let i = 0; i < 5; i++) {
      let position = borderDivs[i];
      let div = document.createElement('div');
      div.className = `wtBorder ${this.settings.className || ''}`;

      if (this.settings[position] && this.settings[position].hide) {
        div.className += ' hidden';
      }
      style = div.style;
      style.backgroundColor = this.settings[position] && this.settings[position].color ? this.settings[position].color : settings.border.color;
      style.height = this.settings[position] && this.settings[position].width ? `${this.settings[position].width}px` : `${settings.border.width}px`;
      style.width = this.settings[position] && this.settings[position].width ? `${this.settings[position].width}px` : `${settings.border.width}px`;

      this.main.appendChild(div);
    }
    this.top = this.main.childNodes[0];
    this.left = this.main.childNodes[1];
    this.bottom = this.main.childNodes[2];
    this.right = this.main.childNodes[3];

    this.topStyle = this.top.style;
    this.leftStyle = this.left.style;
    this.bottomStyle = this.bottom.style;
    this.rightStyle = this.right.style;

    this.corner = this.main.childNodes[4];
    this.corner.className += ' corner';
    this.cornerStyle = this.corner.style;
    this.cornerStyle.width = this.cornerDefaultStyle.width;
    this.cornerStyle.height = this.cornerDefaultStyle.height;
    this.cornerStyle.border = [this.cornerDefaultStyle.borderWidth, this.cornerDefaultStyle.borderStyle, this.cornerDefaultStyle.borderColor].join(' ');

    if ((0, _browser.isMobileBrowser)()) {
      this.createMultipleSelectorHandles();
    }
    this.disappear();

    if (!this.wot.wtTable.bordersHolder) {
      this.wot.wtTable.bordersHolder = document.createElement('div');
      this.wot.wtTable.bordersHolder.className = 'htBorders';
      this.wot.wtTable.spreader.appendChild(this.wot.wtTable.bordersHolder);
    }
    this.wot.wtTable.bordersHolder.insertBefore(this.main, this.wot.wtTable.bordersHolder.firstChild);
  }

  createMultipleSelectorHandles() {
    this.selectionHandles = {
      topLeft: document.createElement('DIV'),
      topLeftHitArea: document.createElement('DIV'),
      bottomRight: document.createElement('DIV'),
      bottomRightHitArea: document.createElement('DIV')
    };
    let width = 10;
    let hitAreaWidth = 40;

    this.selectionHandles.topLeft.className = 'topLeftSelectionHandle';
    this.selectionHandles.topLeftHitArea.className = 'topLeftSelectionHandle-HitArea';
    this.selectionHandles.bottomRight.className = 'bottomRightSelectionHandle';
    this.selectionHandles.bottomRightHitArea.className = 'bottomRightSelectionHandle-HitArea';

    this.selectionHandles.styles = {
      topLeft: this.selectionHandles.topLeft.style,
      topLeftHitArea: this.selectionHandles.topLeftHitArea.style,
      bottomRight: this.selectionHandles.bottomRight.style,
      bottomRightHitArea: this.selectionHandles.bottomRightHitArea.style
    };

    let hitAreaStyle = {
      position: 'absolute',
      height: `${hitAreaWidth}px`,
      width: `${hitAreaWidth}px`,
      'border-radius': `${parseInt(hitAreaWidth / 1.5, 10)}px`
    };

    for (let prop in hitAreaStyle) {
      if ((0, _object.hasOwnProperty)(hitAreaStyle, prop)) {
        this.selectionHandles.styles.bottomRightHitArea[prop] = hitAreaStyle[prop];
        this.selectionHandles.styles.topLeftHitArea[prop] = hitAreaStyle[prop];
      }
    }

    let handleStyle = {
      position: 'absolute',
      height: `${width}px`,
      width: `${width}px`,
      'border-radius': `${parseInt(width / 1.5, 10)}px`,
      background: '#F5F5FF',
      border: '1px solid #4285c8'
    };

    for (let prop in handleStyle) {
      if ((0, _object.hasOwnProperty)(handleStyle, prop)) {
        this.selectionHandles.styles.bottomRight[prop] = handleStyle[prop];
        this.selectionHandles.styles.topLeft[prop] = handleStyle[prop];
      }
    }
    this.main.appendChild(this.selectionHandles.topLeft);
    this.main.appendChild(this.selectionHandles.bottomRight);
    this.main.appendChild(this.selectionHandles.topLeftHitArea);
    this.main.appendChild(this.selectionHandles.bottomRightHitArea);
  }

  isPartRange(row, col) {
    if (this.wot.selections.area.cellRange) {
      if (row != this.wot.selections.area.cellRange.to.row || col != this.wot.selections.area.cellRange.to.col) {
        return true;
      }
    }

    return false;
  }

  updateMultipleSelectionHandlesPosition(row, col, top, left, width, height) {
    let handleWidth = parseInt(this.selectionHandles.styles.topLeft.width, 10);
    let hitAreaWidth = parseInt(this.selectionHandles.styles.topLeftHitArea.width, 10);

    this.selectionHandles.styles.topLeft.top = `${parseInt(top - handleWidth, 10)}px`;
    this.selectionHandles.styles.topLeft.left = `${parseInt(left - handleWidth, 10)}px`;

    this.selectionHandles.styles.topLeftHitArea.top = `${parseInt(top - hitAreaWidth / 4 * 3, 10)}px`;
    this.selectionHandles.styles.topLeftHitArea.left = `${parseInt(left - hitAreaWidth / 4 * 3, 10)}px`;

    this.selectionHandles.styles.bottomRight.top = `${parseInt(top + height, 10)}px`;
    this.selectionHandles.styles.bottomRight.left = `${parseInt(left + width, 10)}px`;

    this.selectionHandles.styles.bottomRightHitArea.top = `${parseInt(top + height - hitAreaWidth / 4, 10)}px`;
    this.selectionHandles.styles.bottomRightHitArea.left = `${parseInt(left + width - hitAreaWidth / 4, 10)}px`;

    if (this.settings.border.multipleSelectionHandlesVisible && this.settings.border.multipleSelectionHandlesVisible()) {
      this.selectionHandles.styles.topLeft.display = 'block';
      this.selectionHandles.styles.topLeftHitArea.display = 'block';

      if (this.isPartRange(row, col)) {
        this.selectionHandles.styles.bottomRight.display = 'none';
        this.selectionHandles.styles.bottomRightHitArea.display = 'none';
      } else {
        this.selectionHandles.styles.bottomRight.display = 'block';
        this.selectionHandles.styles.bottomRightHitArea.display = 'block';
      }
    } else {
      this.selectionHandles.styles.topLeft.display = 'none';
      this.selectionHandles.styles.bottomRight.display = 'none';
      this.selectionHandles.styles.topLeftHitArea.display = 'none';
      this.selectionHandles.styles.bottomRightHitArea.display = 'none';
    }

    if (row == this.wot.wtSettings.getSetting('fixedRowsTop') || col == this.wot.wtSettings.getSetting('fixedColumnsLeft')) {
      this.selectionHandles.styles.topLeft.zIndex = '9999';
      this.selectionHandles.styles.topLeftHitArea.zIndex = '9999';
    } else {
      this.selectionHandles.styles.topLeft.zIndex = '';
      this.selectionHandles.styles.topLeftHitArea.zIndex = '';
    }
  }

  appear(corners) {
    if (this.disabled) {
      return;
    }
    var isMultiple, fromTD, toTD, fromOffset, toOffset, containerOffset, top, minTop, left, minLeft, height, width, fromRow, fromColumn, toRow, toColumn, trimmingContainer, cornerOverlappingContainer, ilen;

    ilen = this.wot.wtTable.getRenderedRowsCount();

    for (let i = 0; i < ilen; i++) {
      let s = this.wot.wtTable.rowFilter.renderedToSource(i);

      if (s >= corners[0] && s <= corners[2]) {
        fromRow = s;
        break;
      }
    }

    for (let i = ilen - 1; i >= 0; i--) {
      let s = this.wot.wtTable.rowFilter.renderedToSource(i);

      if (s >= corners[0] && s <= corners[2]) {
        toRow = s;
        break;
      }
    }

    ilen = this.wot.wtTable.getRenderedColumnsCount();

    for (let i = 0; i < ilen; i++) {
      let s = this.wot.wtTable.columnFilter.renderedToSource(i);

      if (s >= corners[1] && s <= corners[3]) {
        fromColumn = s;
        break;
      }
    }

    for (let i = ilen - 1; i >= 0; i--) {
      let s = this.wot.wtTable.columnFilter.renderedToSource(i);

      if (s >= corners[1] && s <= corners[3]) {
        toColumn = s;
        break;
      }
    }
    if (fromRow === void 0 || fromColumn === void 0) {
      this.disappear();

      return;
    }
    isMultiple = fromRow !== toRow || fromColumn !== toColumn;
    fromTD = this.wot.wtTable.getCell(new _coords2.default(fromRow, fromColumn));
    toTD = isMultiple ? this.wot.wtTable.getCell(new _coords2.default(toRow, toColumn)) : fromTD;
    fromOffset = (0, _element.offset)(fromTD);
    toOffset = isMultiple ? (0, _element.offset)(toTD) : fromOffset;
    containerOffset = (0, _element.offset)(this.wot.wtTable.TABLE);

    minTop = fromOffset.top;
    height = toOffset.top + (0, _element.outerHeight)(toTD) - minTop;
    minLeft = fromOffset.left;
    width = toOffset.left + (0, _element.outerWidth)(toTD) - minLeft;

    top = minTop - containerOffset.top - 1;
    left = minLeft - containerOffset.left - 1;
    let style = (0, _element.getComputedStyle)(fromTD);

    if (parseInt(style.borderTopWidth, 10) > 0) {
      top += 1;
      height = height > 0 ? height - 1 : 0;
    }
    if (parseInt(style.borderLeftWidth, 10) > 0) {
      left += 1;
      width = width > 0 ? width - 1 : 0;
    }

    this.topStyle.top = `${top}px`;
    this.topStyle.left = `${left}px`;
    this.topStyle.width = `${width}px`;
    this.topStyle.display = 'block';

    this.leftStyle.top = `${top}px`;
    this.leftStyle.left = `${left}px`;
    this.leftStyle.height = `${height}px`;
    this.leftStyle.display = 'block';

    let delta = Math.floor(this.settings.border.width / 2);

    this.bottomStyle.top = `${top + height - delta}px`;
    this.bottomStyle.left = `${left}px`;
    this.bottomStyle.width = `${width}px`;
    this.bottomStyle.display = 'block';

    this.rightStyle.top = `${top}px`;
    this.rightStyle.left = `${left + width - delta}px`;
    this.rightStyle.height = `${height + 1}px`;
    this.rightStyle.display = 'block';

    if ((0, _browser.isMobileBrowser)() || !this.hasSetting(this.settings.border.cornerVisible) || this.isPartRange(toRow, toColumn)) {
      this.cornerStyle.display = 'none';
    } else {
      this.cornerStyle.top = `${top + height - 4}px`;
      this.cornerStyle.left = `${left + width - 4}px`;
      this.cornerStyle.borderRightWidth = this.cornerDefaultStyle.borderWidth;
      this.cornerStyle.width = this.cornerDefaultStyle.width;

      this.cornerStyle.display = 'none';

      trimmingContainer = (0, _element.getTrimmingContainer)(this.wot.wtTable.TABLE);

      if (toColumn === this.wot.getSetting('totalColumns') - 1) {
        cornerOverlappingContainer = toTD.offsetLeft + (0, _element.outerWidth)(toTD) + parseInt(this.cornerDefaultStyle.width, 10) / 2 >= (0, _element.innerWidth)(trimmingContainer);

        if (cornerOverlappingContainer) {
          this.cornerStyle.left = `${Math.floor(left + width - 3 - parseInt(this.cornerDefaultStyle.width, 10) / 2)}px`;
          this.cornerStyle.borderRightWidth = 0;
        }
      }

      if (toRow === this.wot.getSetting('totalRows') - 1) {
        cornerOverlappingContainer = toTD.offsetTop + (0, _element.outerHeight)(toTD) + parseInt(this.cornerDefaultStyle.height, 10) / 2 >= (0, _element.innerHeight)(trimmingContainer);

        if (cornerOverlappingContainer) {
          this.cornerStyle.top = `${Math.floor(top + height - 3 - parseInt(this.cornerDefaultStyle.height, 10) / 2)}px`;
          this.cornerStyle.borderBottomWidth = 0;
        }
      }

      this.cornerStyle.display = 'block';
    }

    if ((0, _browser.isMobileBrowser)()) {
      this.updateMultipleSelectionHandlesPosition(fromRow, fromColumn, top, left, width, height);
    }
  }

  disappear() {
    this.topStyle.display = 'none';
    this.leftStyle.display = 'none';
    this.bottomStyle.display = 'none';
    this.rightStyle.display = 'none';
    this.cornerStyle.display = 'none';

    if ((0, _browser.isMobileBrowser)()) {
      this.selectionHandles.styles.topLeft.display = 'none';
      this.selectionHandles.styles.bottomRight.display = 'none';
    }
  }

  hasSetting(setting) {
    if (typeof setting === 'function') {
      return setting();
    }

    return !!setting;
  }
}

exports.default = Border;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
const privatePool = new WeakMap();

class ViewportColumnsCalculator {
  static get DEFAULT_WIDTH() {
    return 50;
  }

  constructor(viewportWidth, scrollOffset, totalColumns, columnWidthFn, overrideFn, onlyFullyVisible, stretchH) {
    let stretchingColumnWidthFn = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : width => width;

    privatePool.set(this, {
      viewportWidth,
      scrollOffset,
      totalColumns,
      columnWidthFn,
      overrideFn,
      onlyFullyVisible,
      stretchingColumnWidthFn
    });

    this.count = 0;

    this.startColumn = null;

    this.endColumn = null;

    this.startPosition = null;

    this.stretchAllRatio = 0;
    this.stretchLastWidth = 0;
    this.stretch = stretchH;
    this.totalTargetWidth = 0;
    this.needVerifyLastColumnWidth = true;
    this.stretchAllColumnsWidth = [];

    this.calculate();
  }

  calculate() {
    let sum = 0;
    let needReverse = true;
    let startPositions = [];
    let columnWidth;

    let priv = privatePool.get(this);
    let onlyFullyVisible = priv.onlyFullyVisible;
    let overrideFn = priv.overrideFn;
    let scrollOffset = priv.scrollOffset;
    let totalColumns = priv.totalColumns;
    let viewportWidth = priv.viewportWidth;

    for (let i = 0; i < totalColumns; i++) {
      columnWidth = this._getColumnWidth(i);

      if (sum <= scrollOffset && !onlyFullyVisible) {
        this.startColumn = i;
      }

      let compensatedViewportWidth = scrollOffset > 0 ? viewportWidth + 1 : viewportWidth;

      if (sum >= scrollOffset && sum + columnWidth <= scrollOffset + compensatedViewportWidth) {
        if (this.startColumn == null) {
          this.startColumn = i;
        }
        this.endColumn = i;
      }
      startPositions.push(sum);
      sum += columnWidth;

      if (!onlyFullyVisible) {
        this.endColumn = i;
      }
      if (sum >= scrollOffset + viewportWidth) {
        needReverse = false;
        break;
      }
    }

    if (this.endColumn === totalColumns - 1 && needReverse) {
      this.startColumn = this.endColumn;

      while (this.startColumn > 0) {
        let viewportSum = startPositions[this.endColumn] + columnWidth - startPositions[this.startColumn - 1];

        if (viewportSum <= viewportWidth || !onlyFullyVisible) {
          this.startColumn--;
        }
        if (viewportSum > viewportWidth) {
          break;
        }
      }
    }

    if (this.startColumn !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startColumn];

    if (this.startPosition == void 0) {
      this.startPosition = null;
    }
    if (this.startColumn !== null) {
      this.count = this.endColumn - this.startColumn + 1;
    }
  }

  refreshStretching(totalWidth) {
    if (this.stretch === 'none') {
      return;
    }
    this.totalTargetWidth = totalWidth;

    let priv = privatePool.get(this);
    let totalColumns = priv.totalColumns;
    let sumAll = 0;

    for (let i = 0; i < totalColumns; i++) {
      let columnWidth = this._getColumnWidth(i);
      let permanentColumnWidth = priv.stretchingColumnWidthFn(void 0, i);

      if (typeof permanentColumnWidth === 'number') {
        totalWidth -= permanentColumnWidth;
      } else {
        sumAll += columnWidth;
      }
    }
    let remainingSize = totalWidth - sumAll;

    if (this.stretch === 'all' && remainingSize > 0) {
      this.stretchAllRatio = totalWidth / sumAll;
      this.stretchAllColumnsWidth = [];
      this.needVerifyLastColumnWidth = true;
    } else if (this.stretch === 'last' && totalWidth !== Infinity) {
      let columnWidth = this._getColumnWidth(totalColumns - 1);
      let lastColumnWidth = remainingSize + columnWidth;

      this.stretchLastWidth = lastColumnWidth >= 0 ? lastColumnWidth : columnWidth;
    }
  }

  getStretchedColumnWidth(column, baseWidth) {
    let result = null;

    if (this.stretch === 'all' && this.stretchAllRatio !== 0) {
      result = this._getStretchedAllColumnWidth(column, baseWidth);
    } else if (this.stretch === 'last' && this.stretchLastWidth !== 0) {
      result = this._getStretchedLastColumnWidth(column);
    }

    return result;
  }

  _getStretchedAllColumnWidth(column, baseWidth) {
    let sumRatioWidth = 0;
    let priv = privatePool.get(this);
    let totalColumns = priv.totalColumns;

    if (!this.stretchAllColumnsWidth[column]) {
      let stretchedWidth = Math.round(baseWidth * this.stretchAllRatio);
      let newStretchedWidth = priv.stretchingColumnWidthFn(stretchedWidth, column);

      if (newStretchedWidth === void 0) {
        this.stretchAllColumnsWidth[column] = stretchedWidth;
      } else {
        this.stretchAllColumnsWidth[column] = isNaN(newStretchedWidth) ? this._getColumnWidth(column) : newStretchedWidth;
      }
    }

    if (this.stretchAllColumnsWidth.length === totalColumns && this.needVerifyLastColumnWidth) {
      this.needVerifyLastColumnWidth = false;

      for (let i = 0; i < this.stretchAllColumnsWidth.length; i++) {
        sumRatioWidth += this.stretchAllColumnsWidth[i];
      }
      if (sumRatioWidth !== this.totalTargetWidth) {
        this.stretchAllColumnsWidth[this.stretchAllColumnsWidth.length - 1] += this.totalTargetWidth - sumRatioWidth;
      }
    }

    return this.stretchAllColumnsWidth[column];
  }

  _getStretchedLastColumnWidth(column) {
    let priv = privatePool.get(this);
    let totalColumns = priv.totalColumns;

    if (column === totalColumns - 1) {
      return this.stretchLastWidth;
    }

    return null;
  }

  _getColumnWidth(column) {
    let width = privatePool.get(this).columnWidthFn(column);

    if (width === void 0) {
      width = ViewportColumnsCalculator.DEFAULT_WIDTH;
    }

    return width;
  }
}

exports.default = ViewportColumnsCalculator;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
const privatePool = new WeakMap();

class ViewportRowsCalculator {
  static get DEFAULT_HEIGHT() {
    return 23;
  }

  constructor(viewportHeight, scrollOffset, totalRows, rowHeightFn, overrideFn, onlyFullyVisible, horizontalScrollbarHeight) {
    privatePool.set(this, {
      viewportHeight,
      scrollOffset,
      totalRows,
      rowHeightFn,
      overrideFn,
      onlyFullyVisible,
      horizontalScrollbarHeight
    });

    this.count = 0;

    this.startRow = null;

    this.endRow = null;

    this.startPosition = null;

    this.calculate();
  }

  calculate() {
    let sum = 0;
    let needReverse = true;
    let startPositions = [];

    let priv = privatePool.get(this);
    let onlyFullyVisible = priv.onlyFullyVisible;
    let overrideFn = priv.overrideFn;
    let rowHeightFn = priv.rowHeightFn;
    let scrollOffset = priv.scrollOffset;
    let totalRows = priv.totalRows;
    let viewportHeight = priv.viewportHeight;
    let horizontalScrollbarHeight = priv.horizontalScrollbarHeight || 0;
    let rowHeight;

    for (let i = 0; i < totalRows; i++) {
      rowHeight = rowHeightFn(i);

      if (rowHeight === undefined) {
        rowHeight = ViewportRowsCalculator.DEFAULT_HEIGHT;
      }
      if (sum <= scrollOffset && !onlyFullyVisible) {
        this.startRow = i;
      }

      if (sum >= scrollOffset && sum + rowHeight <= scrollOffset + viewportHeight - horizontalScrollbarHeight) {
        if (this.startRow === null) {
          this.startRow = i;
        }
        this.endRow = i;
      }
      startPositions.push(sum);
      sum += rowHeight;

      if (!onlyFullyVisible) {
        this.endRow = i;
      }
      if (sum >= scrollOffset + viewportHeight - horizontalScrollbarHeight) {
        needReverse = false;
        break;
      }
    }

    if (this.endRow === totalRows - 1 && needReverse) {
      this.startRow = this.endRow;

      while (this.startRow > 0) {
        let viewportSum = startPositions[this.endRow] + rowHeight - startPositions[this.startRow - 1];

        if (viewportSum <= viewportHeight - horizontalScrollbarHeight || !onlyFullyVisible) {
          this.startRow--;
        }
        if (viewportSum >= viewportHeight - horizontalScrollbarHeight) {
          break;
        }
      }
    }

    if (this.startRow !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startRow];

    if (this.startPosition == void 0) {
      this.startPosition = null;
    }
    if (this.startRow !== null) {
      this.count = this.endRow - this.startRow + 1;
    }
  }
}

exports.default = ViewportRowsCalculator;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _object = __webpack_require__(2);

var _string = __webpack_require__(15);

var _event = __webpack_require__(38);

var _event2 = _interopRequireDefault(_event);

var _overlays = __webpack_require__(41);

var _overlays2 = _interopRequireDefault(_overlays);

var _scroll = __webpack_require__(42);

var _scroll2 = _interopRequireDefault(_scroll);

var _settings = __webpack_require__(43);

var _settings2 = _interopRequireDefault(_settings);

var _table = __webpack_require__(44);

var _table2 = _interopRequireDefault(_table);

var _viewport = __webpack_require__(46);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Walkontable {
  constructor(settings) {
    let originalHeaders = [];

    this.guid = `wt_${(0, _string.randomString)()}`;

    if (settings.cloneSource) {
      this.cloneSource = settings.cloneSource;
      this.cloneOverlay = settings.cloneOverlay;
      this.wtSettings = settings.cloneSource.wtSettings;
      this.wtTable = new _table2.default(this, settings.table, settings.wtRootElement);
      this.wtScroll = new _scroll2.default(this);
      this.wtViewport = settings.cloneSource.wtViewport;
      this.wtEvent = new _event2.default(this);
      this.selections = this.cloneSource.selections;
    } else {
      this.wtSettings = new _settings2.default(this, settings);
      this.wtTable = new _table2.default(this, settings.table);
      this.wtScroll = new _scroll2.default(this);
      this.wtViewport = new _viewport2.default(this);
      this.wtEvent = new _event2.default(this);
      this.selections = this.getSetting('selections');
      this.wtOverlays = new _overlays2.default(this);
      this.exportSettingsAsClassNames();
    }

    if (this.wtTable.THEAD.childNodes.length && this.wtTable.THEAD.childNodes[0].childNodes.length) {
      for (let c = 0, clen = this.wtTable.THEAD.childNodes[0].childNodes.length; c < clen; c++) {
        originalHeaders.push(this.wtTable.THEAD.childNodes[0].childNodes[c].innerHTML);
      }
      if (!this.getSetting('columnHeaders').length) {
        this.update('columnHeaders', [function (column, TH) {
          (0, _element.fastInnerText)(TH, originalHeaders[column]);
        }]);
      }
    }
    this.drawn = false;
    this.drawInterrupted = false;
  }

  draw() {
    let fastDraw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.drawInterrupted = false;

    if (!fastDraw && !(0, _element.isVisible)(this.wtTable.TABLE)) {
      this.drawInterrupted = true;
    } else {
      this.wtTable.draw(fastDraw);
    }

    return this;
  }

  getCell(coords) {
    let topmost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!topmost) {
      return this.wtTable.getCell(coords);
    }

    let totalRows = this.wtSettings.getSetting('totalRows');
    let fixedRowsTop = this.wtSettings.getSetting('fixedRowsTop');
    let fixedRowsBottom = this.wtSettings.getSetting('fixedRowsBottom');
    let fixedColumns = this.wtSettings.getSetting('fixedColumnsLeft');

    if (coords.row < fixedRowsTop && coords.col < fixedColumns) {
      return this.wtOverlays.topLeftCornerOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < fixedRowsTop) {
      return this.wtOverlays.topOverlay.clone.wtTable.getCell(coords);
    } else if (coords.col < fixedColumns && coords.row >= totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomLeftCornerOverlay && this.wtOverlays.bottomLeftCornerOverlay.clone) {
        return this.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.getCell(coords);
      }
    } else if (coords.col < fixedColumns) {
      return this.wtOverlays.leftOverlay.clone.wtTable.getCell(coords);
    } else if (coords.row < totalRows && coords.row > totalRows - fixedRowsBottom) {
      if (this.wtOverlays.bottomOverlay && this.wtOverlays.bottomOverlay.clone) {
        return this.wtOverlays.bottomOverlay.clone.wtTable.getCell(coords);
      }
    }

    return this.wtTable.getCell(coords);
  }

  update(settings, value) {
    return this.wtSettings.update(settings, value);
  }

  scrollVertical(row) {
    this.wtOverlays.topOverlay.scrollTo(row);
    this.getSetting('onScrollVertically');

    return this;
  }

  scrollHorizontal(column) {
    this.wtOverlays.leftOverlay.scrollTo(column);
    this.getSetting('onScrollHorizontally');

    return this;
  }

  scrollViewport(coords) {
    this.wtScroll.scrollViewport(coords);

    return this;
  }

  getViewport() {
    return [this.wtTable.getFirstVisibleRow(), this.wtTable.getFirstVisibleColumn(), this.wtTable.getLastVisibleRow(), this.wtTable.getLastVisibleColumn()];
  }

  getOverlayName() {
    return this.cloneOverlay ? this.cloneOverlay.type : 'master';
  }

  isOverlayName(name) {
    if (this.cloneOverlay) {
      return this.cloneOverlay.type === name;
    }

    return false;
  }

  exportSettingsAsClassNames() {
    let toExport = {
      rowHeaders: ['array'],
      columnHeaders: ['array']
    };
    let allClassNames = [];
    let newClassNames = [];

    (0, _object.objectEach)(toExport, (optionType, key) => {
      if (optionType.indexOf('array') > -1 && this.getSetting(key).length) {
        newClassNames.push(`ht${(0, _string.toUpperCaseFirst)(key)}`);
      }
      allClassNames.push(`ht${(0, _string.toUpperCaseFirst)(key)}`);
    });
    (0, _element.removeClass)(this.wtTable.wtRootElement.parentNode, allClassNames);
    (0, _element.addClass)(this.wtTable.wtRootElement.parentNode, newClassNames);
  }

  getSetting(key, param1, param2, param3, param4) {
    return this.wtSettings.getSetting(key, param1, param2, param3, param4);
  }

  hasSetting(key) {
    return this.wtSettings.has(key);
  }

  destroy() {
    this.wtOverlays.destroy();
    this.wtEvent.destroy();
  }
}

exports.default = Walkontable;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _function = __webpack_require__(17);

var _browser = __webpack_require__(9);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Event(instance) {
  const that = this;
  const eventManager = new _eventManager2.default(instance);

  this.instance = instance;

  var dblClickOrigin = [null, null];
  this.dblClickTimeout = [null, null];

  var onMouseDown = function onMouseDown(event) {
    const activeElement = document.activeElement;
    const getParentNode = (0, _function.partial)(_element.getParent, event.realTarget);
    const realTarget = event.realTarget;

    if (realTarget === activeElement || getParentNode(0) === activeElement || getParentNode(1) === activeElement) {
      return;
    }

    var cell = that.parentCell(realTarget);

    if ((0, _element.hasClass)(realTarget, 'corner')) {
      that.instance.getSetting('onCellCornerMouseDown', event, realTarget);
    } else if (cell.TD) {
      if (that.instance.hasSetting('onCellMouseDown')) {
        that.instance.getSetting('onCellMouseDown', event, cell.coords, cell.TD, that.instance);
      }
    }

    if (event.button !== 2) {
      if (cell.TD) {
        dblClickOrigin[0] = cell.TD;
        clearTimeout(that.dblClickTimeout[0]);
        that.dblClickTimeout[0] = setTimeout(() => {
          dblClickOrigin[0] = null;
        }, 1000);
      }
    }
  };

  var onTouchMove = function onTouchMove(event) {
    that.instance.touchMoving = true;
  };

  var longTouchTimeout;

  var onTouchStart = function onTouchStart(event) {
    var container = this;

    eventManager.addEventListener(this, 'touchmove', onTouchMove);

    that.checkIfTouchMove = setTimeout(() => {
      if (that.instance.touchMoving === true) {
        that.instance.touchMoving = void 0;

        eventManager.removeEventListener('touchmove', onTouchMove, false);
      }

      onMouseDown(event);
    }, 30);
  };

  var onMouseOver = function onMouseOver(event) {
    var table, td, mainWOT;

    if (that.instance.hasSetting('onCellMouseOver')) {
      table = that.instance.wtTable.TABLE;
      td = (0, _element.closestDown)(event.realTarget, ['TD', 'TH'], table);
      mainWOT = that.instance.cloneSource || that.instance;

      if (td && td !== mainWOT.lastMouseOver && (0, _element.isChildOf)(td, table)) {
        mainWOT.lastMouseOver = td;

        that.instance.getSetting('onCellMouseOver', event, that.instance.wtTable.getCoords(td), td, that.instance);
      }
    }
  };

  var onMouseOut = function onMouseOut(event) {
    let table;
    let lastTD;
    let nextTD;

    if (that.instance.hasSetting('onCellMouseOut')) {
      table = that.instance.wtTable.TABLE;
      lastTD = (0, _element.closestDown)(event.realTarget, ['TD', 'TH'], table);
      nextTD = (0, _element.closestDown)(event.relatedTarget, ['TD', 'TH'], table);

      if (lastTD && lastTD !== nextTD && (0, _element.isChildOf)(lastTD, table)) {
        that.instance.getSetting('onCellMouseOut', event, that.instance.wtTable.getCoords(lastTD), lastTD, that.instance);
      }
    }
  };

  var onMouseUp = function onMouseUp(event) {
    if (event.button !== 2) {
      var cell = that.parentCell(event.realTarget);

      if (cell.TD === dblClickOrigin[0] && cell.TD === dblClickOrigin[1]) {
        if ((0, _element.hasClass)(event.realTarget, 'corner')) {
          that.instance.getSetting('onCellCornerDblClick', event, cell.coords, cell.TD, that.instance);
        } else {
          that.instance.getSetting('onCellDblClick', event, cell.coords, cell.TD, that.instance);
        }

        dblClickOrigin[0] = null;
        dblClickOrigin[1] = null;
      } else if (cell.TD === dblClickOrigin[0]) {
        that.instance.getSetting('onCellMouseUp', event, cell.coords, cell.TD, that.instance);

        dblClickOrigin[1] = cell.TD;
        clearTimeout(that.dblClickTimeout[1]);
        that.dblClickTimeout[1] = setTimeout(() => {
          dblClickOrigin[1] = null;
        }, 500);
      } else if (cell.TD && that.instance.hasSetting('onCellMouseUp')) {
        that.instance.getSetting('onCellMouseUp', event, cell.coords, cell.TD, that.instance);
      }
    }
  };

  var onTouchEnd = function onTouchEnd(event) {
    clearTimeout(longTouchTimeout);


    event.preventDefault();
    onMouseUp(event);
  };

  eventManager.addEventListener(this.instance.wtTable.holder, 'mousedown', onMouseDown);
  eventManager.addEventListener(this.instance.wtTable.TABLE, 'mouseover', onMouseOver);
  eventManager.addEventListener(this.instance.wtTable.TABLE, 'mouseout', onMouseOut);
  eventManager.addEventListener(this.instance.wtTable.holder, 'mouseup', onMouseUp);

  if (this.instance.wtTable.holder.parentNode.parentNode && (0, _browser.isMobileBrowser)() && !that.instance.wtTable.isWorkingOnClone()) {
    var classSelector = `.${this.instance.wtTable.holder.parentNode.className.split(' ').join('.')}`;

    eventManager.addEventListener(this.instance.wtTable.holder, 'touchstart', event => {
      that.instance.touchApplied = true;
      if ((0, _element.isChildOf)(event.target, classSelector)) {
        onTouchStart.call(event.target, event);
      }
    });
    eventManager.addEventListener(this.instance.wtTable.holder, 'touchend', event => {
      that.instance.touchApplied = false;
      if ((0, _element.isChildOf)(event.target, classSelector)) {
        onTouchEnd.call(event.target, event);
      }
    });

    if (!that.instance.momentumScrolling) {
      that.instance.momentumScrolling = {};
    }
    eventManager.addEventListener(this.instance.wtTable.holder, 'scroll', event => {
      clearTimeout(that.instance.momentumScrolling._timeout);

      if (!that.instance.momentumScrolling.ongoing) {
        that.instance.getSetting('onBeforeTouchScroll');
      }
      that.instance.momentumScrolling.ongoing = true;

      that.instance.momentumScrolling._timeout = setTimeout(() => {
        if (!that.instance.touchApplied) {
          that.instance.momentumScrolling.ongoing = false;

          that.instance.getSetting('onAfterMomentumScroll');
        }
      }, 200);
    });
  }

  eventManager.addEventListener(window, 'resize', () => {
    if (that.instance.getSetting('stretchH') !== 'none') {
      that.instance.draw();
    }
  });

  this.destroy = function () {
    clearTimeout(this.dblClickTimeout[0]);
    clearTimeout(this.dblClickTimeout[1]);

    eventManager.destroy();
  };
}

Event.prototype.parentCell = function (elem) {
  var cell = {};
  var TABLE = this.instance.wtTable.TABLE;
  var TD = (0, _element.closestDown)(elem, ['TD', 'TH'], TABLE);

  if (TD) {
    cell.coords = this.instance.wtTable.getCoords(TD);
    cell.TD = TD;
  } else if ((0, _element.hasClass)(elem, 'wtBorder') && (0, _element.hasClass)(elem, 'current')) {
    cell.coords = this.instance.selections.current.cellRange.highlight;
    cell.TD = this.instance.wtTable.getCell(cell.coords);
  } else if ((0, _element.hasClass)(elem, 'wtBorder') && (0, _element.hasClass)(elem, 'area')) {
    if (this.instance.selections.area.cellRange) {
      cell.coords = this.instance.selections.area.cellRange.to;
      cell.TD = this.instance.wtTable.getCell(cell.coords);
    }
  }

  return cell;
};

exports.default = Event;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

class ColumnFilter {
  constructor(offset, total, countTH) {
    this.offset = offset;
    this.total = total;
    this.countTH = countTH;
  }

  offsetted(index) {
    return index + this.offset;
  }

  unOffsetted(index) {
    return index - this.offset;
  }

  renderedToSource(index) {
    return this.offsetted(index);
  }

  sourceToRendered(index) {
    return this.unOffsetted(index);
  }

  offsettedTH(index) {
    return index - this.countTH;
  }

  unOffsettedTH(index) {
    return index + this.countTH;
  }

  visibleRowHeadedColumnToSourceColumn(index) {
    return this.renderedToSource(this.offsettedTH(index));
  }

  sourceColumnToVisibleRowHeadedColumn(index) {
    return this.unOffsettedTH(this.sourceToRendered(index));
  }
}

exports.default = ColumnFilter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

class RowFilter {
  constructor(offset, total, countTH) {
    this.offset = offset;
    this.total = total;
    this.countTH = countTH;
  }

  offsetted(index) {
    return index + this.offset;
  }

  unOffsetted(index) {
    return index - this.offset;
  }

  renderedToSource(index) {
    return this.offsetted(index);
  }

  sourceToRendered(index) {
    return this.unOffsetted(index);
  }

  offsettedTH(index) {
    return index - this.countTH;
  }

  unOffsettedTH(index) {
    return index + this.countTH;
  }

  visibleColHeadedRowToSourceRow(index) {
    return this.renderedToSource(this.offsettedTH(index));
  }

  sourceRowToVisibleColHeadedRow(index) {
    return this.unOffsettedTH(this.sourceToRendered(index));
  }
}

exports.default = RowFilter;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _array = __webpack_require__(1);

var _unicode = __webpack_require__(16);

var _browser = __webpack_require__(9);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Overlays {
  constructor(wotInstance) {
    this.wot = wotInstance;

    this.instance = this.wot;
    this.eventManager = new _eventManager2.default(this.wot);

    this.wot.update('scrollbarWidth', (0, _element.getScrollbarWidth)());
    this.wot.update('scrollbarHeight', (0, _element.getScrollbarWidth)());

    this.scrollableElement = (0, _element.getScrollableElement)(this.wot.wtTable.TABLE);

    this.prepareOverlays();

    this.destroyed = false;
    this.keyPressed = false;
    this.spreaderLastSize = {
      width: null,
      height: null
    };
    this.overlayScrollPositions = {
      master: {
        top: 0,
        left: 0
      },
      top: {
        top: null,
        left: 0
      },
      bottom: {
        top: null,
        left: 0
      },
      left: {
        top: 0,
        left: null
      }
    };

    this.pendingScrollCallbacks = {
      master: {
        top: 0,
        left: 0
      },
      top: {
        left: 0
      },
      bottom: {
        left: 0
      },
      left: {
        top: 0
      }
    };

    this.verticalScrolling = false;
    this.horizontalScrolling = false;
    this.delegatedScrollCallback = false;

    this.registeredListeners = [];

    this.registerListeners();
  }

  prepareOverlays() {
    let syncScroll = false;

    if (this.topOverlay) {
      syncScroll = this.topOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.topOverlay = _base2.default.createOverlay(_base2.default.CLONE_TOP, this.wot);
    }

    if (!_base2.default.hasOverlay(_base2.default.CLONE_BOTTOM)) {
      this.bottomOverlay = {
        needFullRender: false,
        updateStateOfRendering: () => false
      };
    }
    if (!_base2.default.hasOverlay(_base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
      this.bottomLeftCornerOverlay = {
        needFullRender: false,
        updateStateOfRendering: () => false
      };
    }

    if (this.bottomOverlay) {
      syncScroll = this.bottomOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.bottomOverlay = _base2.default.createOverlay(_base2.default.CLONE_BOTTOM, this.wot);
    }

    if (this.leftOverlay) {
      syncScroll = this.leftOverlay.updateStateOfRendering() || syncScroll;
    } else {
      this.leftOverlay = _base2.default.createOverlay(_base2.default.CLONE_LEFT, this.wot);
    }

    if (this.topOverlay.needFullRender && this.leftOverlay.needFullRender) {
      if (this.topLeftCornerOverlay) {
        syncScroll = this.topLeftCornerOverlay.updateStateOfRendering() || syncScroll;
      } else {
        this.topLeftCornerOverlay = _base2.default.createOverlay(_base2.default.CLONE_TOP_LEFT_CORNER, this.wot);
      }
    }

    if (this.bottomOverlay.needFullRender && this.leftOverlay.needFullRender) {
      if (this.bottomLeftCornerOverlay) {
        syncScroll = this.bottomLeftCornerOverlay.updateStateOfRendering() || syncScroll;
      } else {
        this.bottomLeftCornerOverlay = _base2.default.createOverlay(_base2.default.CLONE_BOTTOM_LEFT_CORNER, this.wot);
      }
    }

    if (this.wot.getSetting('debug') && !this.debug) {
      this.debug = _base2.default.createOverlay(_base2.default.CLONE_DEBUG, this.wot);
    }

    return syncScroll;
  }

  refreshAll() {
    if (!this.wot.drawn) {
      return;
    }
    if (!this.wot.wtTable.holder.parentNode) {
      this.destroy();

      return;
    }
    this.wot.draw(true);

    if (this.verticalScrolling) {
      this.leftOverlay.onScroll();
    }

    if (this.horizontalScrolling) {
      this.topOverlay.onScroll();
    }

    this.verticalScrolling = false;
    this.horizontalScrolling = false;
  }

  registerListeners() {
    const topOverlayScrollable = this.topOverlay.mainTableScrollableElement;
    const leftOverlayScrollable = this.leftOverlay.mainTableScrollableElement;

    let listenersToRegister = [];
    listenersToRegister.push([document.documentElement, 'keydown', event => this.onKeyDown(event)]);
    listenersToRegister.push([document.documentElement, 'keyup', () => this.onKeyUp()]);
    listenersToRegister.push([document, 'visibilitychange', () => this.onKeyUp()]);
    listenersToRegister.push([topOverlayScrollable, 'scroll', event => this.onTableScroll(event)]);

    if (topOverlayScrollable !== leftOverlayScrollable) {
      listenersToRegister.push([leftOverlayScrollable, 'scroll', event => this.onTableScroll(event)]);
    }

    if (this.topOverlay.needFullRender) {
      listenersToRegister.push([this.topOverlay.clone.wtTable.holder, 'scroll', event => this.onTableScroll(event)]);
      listenersToRegister.push([this.topOverlay.clone.wtTable.holder, 'wheel', event => this.onTableScroll(event)]);
    }

    if (this.bottomOverlay.needFullRender) {
      listenersToRegister.push([this.bottomOverlay.clone.wtTable.holder, 'scroll', event => this.onTableScroll(event)]);
      listenersToRegister.push([this.bottomOverlay.clone.wtTable.holder, 'wheel', event => this.onTableScroll(event)]);
    }

    if (this.leftOverlay.needFullRender) {
      listenersToRegister.push([this.leftOverlay.clone.wtTable.holder, 'scroll', event => this.onTableScroll(event)]);
      listenersToRegister.push([this.leftOverlay.clone.wtTable.holder, 'wheel', event => this.onTableScroll(event)]);
    }

    if (this.topLeftCornerOverlay && this.topLeftCornerOverlay.needFullRender) {
      listenersToRegister.push([this.topLeftCornerOverlay.clone.wtTable.holder, 'wheel', event => this.onTableScroll(event)]);
    }

    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.needFullRender) {
      listenersToRegister.push([this.bottomLeftCornerOverlay.clone.wtTable.holder, 'wheel', event => this.onTableScroll(event)]);
    }

    if (this.topOverlay.trimmingContainer !== window && this.leftOverlay.trimmingContainer !== window) {
      listenersToRegister.push([window, 'wheel', event => {
        let overlay;
        let deltaY = event.wheelDeltaY || event.deltaY;
        let deltaX = event.wheelDeltaX || event.deltaX;

        if (this.topOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'top';
        } else if (this.bottomOverlay.clone && this.bottomOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'bottom';
        } else if (this.leftOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'left';
        } else if (this.topLeftCornerOverlay && this.topLeftCornerOverlay.clone && this.topLeftCornerOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'topLeft';
        } else if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone && this.bottomLeftCornerOverlay.clone.wtTable.holder.contains(event.realTarget)) {
          overlay = 'bottomLeft';
        }

        if (overlay == 'top' && deltaY !== 0 || overlay == 'left' && deltaX !== 0 || overlay == 'bottom' && deltaY !== 0 || (overlay === 'topLeft' || overlay === 'bottomLeft') && (deltaY !== 0 || deltaX !== 0)) {

          event.preventDefault();
        }
      }]);
    }

    while (listenersToRegister.length) {
      let listener = listenersToRegister.pop();
      this.eventManager.addEventListener(listener[0], listener[1], listener[2]);

      this.registeredListeners.push(listener);
    }
  }

  deregisterListeners() {
    while (this.registeredListeners.length) {
      let listener = this.registeredListeners.pop();
      this.eventManager.removeEventListener(listener[0], listener[1], listener[2]);
    }
  }

  onTableScroll(event) {
    if ((0, _browser.isMobileBrowser)()) {
      return;
    }
    const masterHorizontal = this.leftOverlay.mainTableScrollableElement;
    const masterVertical = this.topOverlay.mainTableScrollableElement;
    const target = event.target;

    if (this.keyPressed) {
      if (masterVertical !== window && target !== window && !event.target.contains(masterVertical) || masterHorizontal !== window && target !== window && !event.target.contains(masterHorizontal)) {
        return;
      }
    }

    if (event.type === 'scroll') {
      this.syncScrollPositions(event);
    } else {
      this.translateMouseWheelToScroll(event);
    }
  }

  onKeyDown(event) {
    this.keyPressed = (0, _unicode.isKey)(event.keyCode, 'ARROW_UP|ARROW_RIGHT|ARROW_DOWN|ARROW_LEFT');
  }

  onKeyUp() {
    this.keyPressed = false;
  }

  translateMouseWheelToScroll(event) {
    const topOverlay = this.topOverlay.clone.wtTable.holder;
    const bottomOverlay = this.bottomOverlay.clone ? this.bottomOverlay.clone.wtTable.holder : null;
    const leftOverlay = this.leftOverlay.clone.wtTable.holder;
    const topLeftCornerOverlay = this.topLeftCornerOverlay && this.topLeftCornerOverlay.clone ? this.topLeftCornerOverlay.clone.wtTable.holder : null;
    const bottomLeftCornerOverlay = this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone ? this.bottomLeftCornerOverlay.clone.wtTable.holder : null;
    const mouseWheelSpeedRatio = -0.2;
    let deltaY = event.wheelDeltaY || -1 * event.deltaY;
    let deltaX = event.wheelDeltaX || -1 * event.deltaX;
    let parentHolder = null;
    let eventMockup = { type: 'wheel' };
    let tempElem = event.target;
    let delta = null;

    if (event.deltaMode === 1) {
      deltaY *= 120;
      deltaX *= 120;
    }

    while (tempElem != document && tempElem != null) {
      if (tempElem.className.indexOf('wtHolder') > -1) {
        parentHolder = tempElem;
        break;
      }
      tempElem = tempElem.parentNode;
    }
    eventMockup.target = parentHolder;

    if (parentHolder === topLeftCornerOverlay || parentHolder === bottomLeftCornerOverlay) {
      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * deltaX, 'x');
      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * deltaY, 'y');
    } else {
      if (parentHolder === topOverlay || parentHolder === bottomOverlay) {
        delta = deltaY;
      } else if (parentHolder === leftOverlay) {
        delta = deltaX;
      }

      this.syncScrollPositions(eventMockup, mouseWheelSpeedRatio * delta);
    }

    return false;
  }

  syncScrollPositions(event) {
    let fakeScrollValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let fakeScrollDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (this.destroyed) {
      return;
    }
    if (arguments.length === 0) {
      this.syncScrollWithMaster();

      return;
    }
    let masterHorizontal = this.leftOverlay.mainTableScrollableElement;
    let masterVertical = this.topOverlay.mainTableScrollableElement;
    let target = event.target;
    let tempScrollValue = 0;
    let scrollValueChanged = false;
    let topOverlay;
    let leftOverlay;
    let topLeftCornerOverlay;
    let bottomLeftCornerOverlay;
    let bottomOverlay;
    let delegatedScroll = false;
    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (this.topOverlay.needFullRender) {
      topOverlay = this.topOverlay.clone.wtTable.holder;
    }

    if (this.bottomOverlay.needFullRender) {
      bottomOverlay = this.bottomOverlay.clone.wtTable.holder;
    }

    if (this.leftOverlay.needFullRender) {
      leftOverlay = this.leftOverlay.clone.wtTable.holder;
    }

    if (this.leftOverlay.needFullRender && this.topOverlay.needFullRender) {
      topLeftCornerOverlay = this.topLeftCornerOverlay.clone.wtTable.holder;
    }

    if (this.leftOverlay.needFullRender && this.bottomOverlay.needFullRender) {
      bottomLeftCornerOverlay = this.bottomLeftCornerOverlay.clone.wtTable.holder;
    }

    if (target === document) {
      target = window;
    }

    if (target === masterHorizontal || target === masterVertical) {
      if (preventOverflow) {
        tempScrollValue = (0, _element.getScrollLeft)(this.scrollableElement);
      } else {
        tempScrollValue = (0, _element.getScrollLeft)(target);
      }

      this.horizontalScrolling = true;
      this.overlayScrollPositions.master.left = tempScrollValue;
      scrollValueChanged = true;

      if (this.pendingScrollCallbacks.master.left > 0) {
        this.pendingScrollCallbacks.master.left--;
      } else {
        if (topOverlay && topOverlay.scrollLeft !== tempScrollValue) {

          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.top.left++;
          }

          topOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = masterHorizontal !== window;
        }

        if (bottomOverlay && bottomOverlay.scrollLeft !== tempScrollValue) {

          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.bottom.left++;
          }

          bottomOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = masterHorizontal !== window;
        }
      }

      tempScrollValue = (0, _element.getScrollTop)(target);

      this.verticalScrolling = true;
      this.overlayScrollPositions.master.top = tempScrollValue;
      scrollValueChanged = true;

      if (this.pendingScrollCallbacks.master.top > 0) {
        this.pendingScrollCallbacks.master.top--;
      } else if (leftOverlay && leftOverlay.scrollTop !== tempScrollValue) {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.left.top++;
        }

        leftOverlay.scrollTop = tempScrollValue;
        delegatedScroll = masterVertical !== window;
      }
    } else if (target === bottomOverlay) {
      tempScrollValue = (0, _element.getScrollLeft)(target);

      this.horizontalScrolling = true;
      this.overlayScrollPositions.bottom.left = tempScrollValue;
      scrollValueChanged = true;

      if (this.pendingScrollCallbacks.bottom.left > 0) {
        this.pendingScrollCallbacks.bottom.left--;
      } else {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.master.left++;
        }

        masterHorizontal.scrollLeft = tempScrollValue;

        if (topOverlay && topOverlay.scrollLeft !== tempScrollValue) {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.top.left++;
          }

          topOverlay.scrollLeft = tempScrollValue;
          delegatedScroll = masterVertical !== window;
        }
      }

      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollTop += fakeScrollValue;
      }
    } else if (target === topOverlay) {
      tempScrollValue = (0, _element.getScrollLeft)(target);

      this.horizontalScrolling = true;
      this.overlayScrollPositions.top.left = tempScrollValue;
      scrollValueChanged = true;

      if (this.pendingScrollCallbacks.top.left > 0) {
        this.pendingScrollCallbacks.top.left--;
      } else {

        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.master.left++;
        }

        masterHorizontal.scrollLeft = tempScrollValue;
      }

      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollTop += fakeScrollValue;
      }

      if (bottomOverlay && bottomOverlay.scrollLeft !== tempScrollValue) {
        if (fakeScrollValue == null) {
          this.pendingScrollCallbacks.bottom.left++;
        }

        bottomOverlay.scrollLeft = tempScrollValue;
        delegatedScroll = masterVertical !== window;
      }
    } else if (target === leftOverlay) {
      tempScrollValue = (0, _element.getScrollTop)(target);

      if (this.overlayScrollPositions.left.top !== tempScrollValue) {
        this.verticalScrolling = true;
        this.overlayScrollPositions.left.top = tempScrollValue;
        scrollValueChanged = true;

        if (this.pendingScrollCallbacks.left.top > 0) {
          this.pendingScrollCallbacks.left.top--;
        } else {
          if (fakeScrollValue == null) {
            this.pendingScrollCallbacks.master.top++;
          }

          masterVertical.scrollTop = tempScrollValue;
        }
      }

      if (fakeScrollValue !== null) {
        scrollValueChanged = true;
        masterVertical.scrollLeft += fakeScrollValue;
      }
    } else if (target === topLeftCornerOverlay || target === bottomLeftCornerOverlay) {
      if (fakeScrollValue !== null) {
        scrollValueChanged = true;

        if (fakeScrollDirection === 'x') {
          masterVertical.scrollLeft += fakeScrollValue;
        } else if (fakeScrollDirection === 'y') {
          masterVertical.scrollTop += fakeScrollValue;
        }
      }
    }

    if (!this.keyPressed && scrollValueChanged && event.type === 'scroll') {
      if (this.delegatedScrollCallback) {
        this.delegatedScrollCallback = false;
      } else {
        this.refreshAll();
      }

      if (delegatedScroll) {
        this.delegatedScrollCallback = true;
      }
    }
  }

  syncScrollWithMaster() {
    const master = this.topOverlay.mainTableScrollableElement;
    const scrollLeft = master.scrollLeft,
          scrollTop = master.scrollTop;


    if (this.topOverlay.needFullRender) {
      this.topOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.clone.wtTable.holder.scrollLeft = scrollLeft;
    }
    if (this.leftOverlay.needFullRender) {
      this.leftOverlay.clone.wtTable.holder.scrollTop = scrollTop;
    }
  }

  updateMainScrollableElements() {
    this.deregisterListeners();

    this.leftOverlay.updateMainScrollableElement();
    this.topOverlay.updateMainScrollableElement();

    if (this.bottomOverlay.needFullRender) {
      this.bottomOverlay.updateMainScrollableElement();
    }

    this.scrollableElement = (0, _element.getScrollableElement)(this.wot.wtTable.TABLE);

    this.registerListeners();
  }

  destroy() {
    this.eventManager.destroy();
    this.topOverlay.destroy();

    if (this.bottomOverlay.clone) {
      this.bottomOverlay.destroy();
    }
    this.leftOverlay.destroy();

    if (this.topLeftCornerOverlay) {
      this.topLeftCornerOverlay.destroy();
    }

    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone) {
      this.bottomLeftCornerOverlay.destroy();
    }

    if (this.debug) {
      this.debug.destroy();
    }
    this.destroyed = true;
  }

  refresh() {
    let fastDraw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this.topOverlay.areElementSizesAdjusted && this.leftOverlay.areElementSizesAdjusted) {
      let container = this.wot.wtTable.wtRootElement.parentNode || this.wot.wtTable.wtRootElement;
      let width = container.clientWidth;
      let height = container.clientHeight;

      if (width !== this.spreaderLastSize.width || height !== this.spreaderLastSize.height) {
        this.spreaderLastSize.width = width;
        this.spreaderLastSize.height = height;
        this.adjustElementsSize();
      }
    }

    if (this.bottomOverlay.clone) {
      this.bottomOverlay.refresh(fastDraw);
    }

    this.leftOverlay.refresh(fastDraw);
    this.topOverlay.refresh(fastDraw);

    if (this.topLeftCornerOverlay) {
      this.topLeftCornerOverlay.refresh(fastDraw);
    }

    if (this.bottomLeftCornerOverlay && this.bottomLeftCornerOverlay.clone) {
      this.bottomLeftCornerOverlay.refresh(fastDraw);
    }

    if (this.debug) {
      this.debug.refresh(fastDraw);
    }
  }

  adjustElementsSize() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    let totalColumns = this.wot.getSetting('totalColumns');
    let totalRows = this.wot.getSetting('totalRows');
    let headerRowSize = this.wot.wtViewport.getRowHeaderWidth();
    let headerColumnSize = this.wot.wtViewport.getColumnHeaderHeight();
    let hiderStyle = this.wot.wtTable.hider.style;

    hiderStyle.width = `${headerRowSize + this.leftOverlay.sumCellSizes(0, totalColumns)}px`;
    hiderStyle.height = `${headerColumnSize + this.topOverlay.sumCellSizes(0, totalRows) + 1}px`;

    this.topOverlay.adjustElementsSize(force);
    this.leftOverlay.adjustElementsSize(force);

    if (this.bottomOverlay.clone) {
      this.bottomOverlay.adjustElementsSize(force);
    }
  }

  applyToDOM() {
    if (!this.topOverlay.areElementSizesAdjusted || !this.leftOverlay.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    this.topOverlay.applyToDOM();

    if (this.bottomOverlay.clone) {
      this.bottomOverlay.applyToDOM();
    }

    this.leftOverlay.applyToDOM();
  }

  getParentOverlay(element) {
    if (!element) {
      return null;
    }

    let overlays = [this.topOverlay, this.leftOverlay, this.bottomOverlay, this.topLeftCornerOverlay, this.bottomLeftCornerOverlay];
    let result = null;

    (0, _array.arrayEach)(overlays, (elem, i) => {
      if (!elem) {
        return;
      }

      if (elem.clone && elem.clone.wtTable.TABLE.contains(element)) {
        result = elem.clone;
      }
    });

    return result;
  }
}

exports.default = Overlays;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _number = __webpack_require__(3);

class Scroll {
  constructor(wotInstance) {
    this.wot = wotInstance;

    this.instance = wotInstance;
  }

  scrollViewport(coords) {
    if (!this.wot.drawn) {
      return;
    }

    var _getVariables = this._getVariables();

    const topOverlay = _getVariables.topOverlay,
          leftOverlay = _getVariables.leftOverlay,
          totalRows = _getVariables.totalRows,
          totalColumns = _getVariables.totalColumns,
          fixedRowsTop = _getVariables.fixedRowsTop,
          fixedRowsBottom = _getVariables.fixedRowsBottom,
          fixedColumnsLeft = _getVariables.fixedColumnsLeft;


    if (coords.row < 0 || coords.row > Math.max(totalRows - 1, 0)) {
      throw new Error(`row ${coords.row} does not exist`);
    }

    if (coords.col < 0 || coords.col > Math.max(totalColumns - 1, 0)) {
      throw new Error(`column ${coords.col} does not exist`);
    }

    if (coords.row >= fixedRowsTop && coords.row < this.getFirstVisibleRow()) {
      topOverlay.scrollTo(coords.row);
    } else if (coords.row > this.getLastVisibleRow() && coords.row < totalRows - fixedRowsBottom) {
      topOverlay.scrollTo(coords.row, true);
    }

    if (coords.col >= fixedColumnsLeft && coords.col < this.getFirstVisibleColumn()) {
      leftOverlay.scrollTo(coords.col);
    } else if (coords.col > this.getLastVisibleColumn()) {
      leftOverlay.scrollTo(coords.col, true);
    }
  }

  getFirstVisibleRow() {
    var _getVariables2 = this._getVariables();

    const topOverlay = _getVariables2.topOverlay,
          wtTable = _getVariables2.wtTable,
          wtViewport = _getVariables2.wtViewport,
          totalRows = _getVariables2.totalRows,
          fixedRowsTop = _getVariables2.fixedRowsTop;


    let firstVisibleRow = wtTable.getFirstVisibleRow();

    if (topOverlay.mainTableScrollableElement === window) {
      const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
      const totalTableHeight = (0, _element.innerHeight)(wtTable.hider);
      const windowHeight = (0, _element.innerHeight)(window);
      const windowScrollTop = (0, _element.getScrollTop)(window);

      if (rootElementOffset.top + totalTableHeight - windowHeight <= windowScrollTop) {
        let rowsHeight = wtViewport.getColumnHeaderHeight();

        rowsHeight += topOverlay.sumCellSizes(0, fixedRowsTop);

        (0, _number.rangeEachReverse)(totalRows, 1, row => {
          rowsHeight += topOverlay.sumCellSizes(row - 1, row);

          if (rootElementOffset.top + totalTableHeight - rowsHeight <= windowScrollTop) {
            firstVisibleRow = row;

            return false;
          }
        });
      }
    }

    return firstVisibleRow;
  }

  getLastVisibleRow() {
    var _getVariables3 = this._getVariables();

    const topOverlay = _getVariables3.topOverlay,
          wtTable = _getVariables3.wtTable,
          wtViewport = _getVariables3.wtViewport,
          totalRows = _getVariables3.totalRows;


    let lastVisibleRow = wtTable.getLastVisibleRow();

    if (topOverlay.mainTableScrollableElement === window) {
      const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
      const windowHeight = (0, _element.innerHeight)(window);
      const windowScrollTop = (0, _element.getScrollTop)(window);

      if (rootElementOffset.top > windowScrollTop) {
        let rowsHeight = wtViewport.getColumnHeaderHeight();

        (0, _number.rangeEach)(1, totalRows, row => {
          rowsHeight += topOverlay.sumCellSizes(row - 1, row);

          if (rootElementOffset.top + rowsHeight - windowScrollTop >= windowHeight) {
            lastVisibleRow = row - 2;

            return false;
          }
        });
      }
    }

    return lastVisibleRow;
  }

  getFirstVisibleColumn() {
    var _getVariables4 = this._getVariables();

    const leftOverlay = _getVariables4.leftOverlay,
          wtTable = _getVariables4.wtTable,
          wtViewport = _getVariables4.wtViewport,
          totalColumns = _getVariables4.totalColumns,
          fixedColumnsLeft = _getVariables4.fixedColumnsLeft;


    let firstVisibleColumn = wtTable.getFirstVisibleColumn();

    if (leftOverlay.mainTableScrollableElement === window) {
      const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
      const totalTableWidth = (0, _element.innerWidth)(wtTable.hider);
      const windowWidth = (0, _element.innerWidth)(window);
      const windowScrollLeft = (0, _element.getScrollLeft)(window);

      if (rootElementOffset.left + totalTableWidth - windowWidth <= windowScrollLeft) {
        let columnsWidth = wtViewport.getRowHeaderWidth();

        (0, _number.rangeEachReverse)(totalColumns, 1, column => {
          columnsWidth += leftOverlay.sumCellSizes(column - 1, column);

          if (rootElementOffset.left + totalTableWidth - columnsWidth <= windowScrollLeft) {
            firstVisibleColumn = column;

            return false;
          }
        });
      }
    }

    return firstVisibleColumn;
  }

  getLastVisibleColumn() {
    var _getVariables5 = this._getVariables();

    const leftOverlay = _getVariables5.leftOverlay,
          wtTable = _getVariables5.wtTable,
          wtViewport = _getVariables5.wtViewport,
          totalColumns = _getVariables5.totalColumns;


    let lastVisibleColumn = wtTable.getLastVisibleColumn();

    if (leftOverlay.mainTableScrollableElement === window) {
      const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
      const windowWidth = (0, _element.innerWidth)(window);
      const windowScrollLeft = (0, _element.getScrollLeft)(window);

      if (rootElementOffset.left > windowScrollLeft) {
        let columnsWidth = wtViewport.getRowHeaderWidth();

        (0, _number.rangeEach)(1, totalColumns, column => {
          columnsWidth += leftOverlay.sumCellSizes(column - 1, column);

          if (rootElementOffset.left + columnsWidth - windowScrollLeft >= windowWidth) {
            lastVisibleColumn = column - 2;

            return false;
          }
        });
      }
    }

    return lastVisibleColumn;
  }

  _getVariables() {
    const wot = this.wot;
    const topOverlay = wot.wtOverlays.topOverlay;
    const leftOverlay = wot.wtOverlays.leftOverlay;
    const wtTable = wot.wtTable;
    const wtViewport = wot.wtViewport;
    const totalRows = wot.getSetting('totalRows');
    const totalColumns = wot.getSetting('totalColumns');
    const fixedRowsTop = wot.getSetting('fixedRowsTop');
    const fixedRowsBottom = wot.getSetting('fixedRowsBottom');
    const fixedColumnsLeft = wot.getSetting('fixedColumnsLeft');

    return {
      topOverlay,
      leftOverlay,
      wtTable,
      wtViewport,
      totalRows,
      totalColumns,
      fixedRowsTop,
      fixedRowsBottom,
      fixedColumnsLeft
    };
  }
}

exports.default = Scroll;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _object = __webpack_require__(2);

class Settings {
  constructor(wotInstance, settings) {
    this.wot = wotInstance;

    this.instance = wotInstance;

    this.defaults = {
      table: void 0,
      debug: false,
      externalRowCalculator: false,
      stretchH: 'none',
      currentRowClassName: null,
      currentColumnClassName: null,
      preventOverflow() {
        return false;
      },

      data: void 0,
      freezeOverlays: false,
      fixedColumnsLeft: 0,
      fixedRowsTop: 0,
      fixedRowsBottom: 0,
      minSpareRows: 0,

      rowHeaders() {
        return [];
      },

      columnHeaders() {
        return [];
      },
      totalRows: void 0,
      totalColumns: void 0,
      cellRenderer: (row, column, TD) => {
        let cellData = this.getSetting('data', row, column);

        (0, _element.fastInnerText)(TD, cellData === void 0 || cellData === null ? '' : cellData);
      },

      columnWidth(col) {},
      rowHeight(row) {},
      defaultRowHeight: 23,
      defaultColumnWidth: 50,
      selections: null,
      hideBorderOnMouseDownOver: false,
      viewportRowCalculatorOverride: null,
      viewportColumnCalculatorOverride: null,

      onCellMouseDown: null,
      onCellMouseOver: null,
      onCellMouseOut: null,
      onCellMouseUp: null,

      onCellDblClick: null,
      onCellCornerMouseDown: null,
      onCellCornerDblClick: null,
      beforeDraw: null,
      onDraw: null,
      onBeforeDrawBorders: null,
      onScrollVertically: null,
      onScrollHorizontally: null,
      onBeforeTouchScroll: null,
      onAfterMomentumScroll: null,
      onBeforeStretchingColumnWidth: width => width,
      onModifyRowHeaderWidth: null,

      scrollbarWidth: 10,
      scrollbarHeight: 10,

      renderAllRows: false,
      groups: false,
      rowHeaderWidth: null,
      columnHeaderHeight: null,
      headerClassName: null
    };

    this.settings = {};

    for (let i in this.defaults) {
      if ((0, _object.hasOwnProperty)(this.defaults, i)) {
        if (settings[i] !== void 0) {
          this.settings[i] = settings[i];
        } else if (this.defaults[i] === void 0) {
          throw new Error(`A required setting "${i}" was not provided`);
        } else {
          this.settings[i] = this.defaults[i];
        }
      }
    }
  }

  update(settings, value) {
    if (value === void 0) {
      for (let i in settings) {
        if ((0, _object.hasOwnProperty)(settings, i)) {
          this.settings[i] = settings[i];
        }
      }
    } else {
      this.settings[settings] = value;
    }
    return this.wot;
  }

  getSetting(key, param1, param2, param3, param4) {
    if (typeof this.settings[key] === 'function') {
      return this.settings[key](param1, param2, param3, param4);
    } else if (param1 !== void 0 && Array.isArray(this.settings[key])) {
      return this.settings[key][param1];
    }

    return this.settings[key];
  }

  has(key) {
    return !!this.settings[key];
  }
}

exports.default = Settings;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _function = __webpack_require__(17);

var _coords = __webpack_require__(19);

var _coords2 = _interopRequireDefault(_coords);

var _range = __webpack_require__(28);

var _range2 = _interopRequireDefault(_range);

var _column = __webpack_require__(39);

var _column2 = _interopRequireDefault(_column);

var _row = __webpack_require__(40);

var _row2 = _interopRequireDefault(_row);

var _tableRenderer = __webpack_require__(45);

var _tableRenderer2 = _interopRequireDefault(_tableRenderer);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Table {
  constructor(wotInstance, table) {
    this.wot = wotInstance;

    this.instance = this.wot;
    this.TABLE = table;
    this.TBODY = null;
    this.THEAD = null;
    this.COLGROUP = null;
    this.tableOffset = 0;
    this.holderOffset = 0;

    (0, _element.removeTextNodes)(this.TABLE);

    this.spreader = this.createSpreader(this.TABLE);
    this.hider = this.createHider(this.spreader);
    this.holder = this.createHolder(this.hider);

    this.wtRootElement = this.holder.parentNode;
    this.alignOverlaysWithTrimmingContainer();
    this.fixTableDomTree();

    this.colgroupChildrenLength = this.COLGROUP.childNodes.length;
    this.theadChildrenLength = this.THEAD.firstChild ? this.THEAD.firstChild.childNodes.length : 0;
    this.tbodyChildrenLength = this.TBODY.childNodes.length;

    this.rowFilter = null;
    this.columnFilter = null;
    this.correctHeaderWidth = false;

    const origRowHeaderWidth = this.wot.wtSettings.settings.rowHeaderWidth;

    this.wot.wtSettings.settings.rowHeaderWidth = () => this._modifyRowHeaderWidth(origRowHeaderWidth);
  }

  fixTableDomTree() {
    this.TBODY = this.TABLE.querySelector('tbody');

    if (!this.TBODY) {
      this.TBODY = document.createElement('tbody');
      this.TABLE.appendChild(this.TBODY);
    }
    this.THEAD = this.TABLE.querySelector('thead');

    if (!this.THEAD) {
      this.THEAD = document.createElement('thead');
      this.TABLE.insertBefore(this.THEAD, this.TBODY);
    }
    this.COLGROUP = this.TABLE.querySelector('colgroup');

    if (!this.COLGROUP) {
      this.COLGROUP = document.createElement('colgroup');
      this.TABLE.insertBefore(this.COLGROUP, this.THEAD);
    }

    if (this.wot.getSetting('columnHeaders').length && !this.THEAD.childNodes.length) {
      this.THEAD.appendChild(document.createElement('TR'));
    }
  }

  createSpreader(table) {
    const parent = table.parentNode;
    let spreader;

    if (!parent || parent.nodeType !== 1 || !(0, _element.hasClass)(parent, 'wtHolder')) {
      spreader = document.createElement('div');
      spreader.className = 'wtSpreader';

      if (parent) {
        parent.insertBefore(spreader, table);
      }
      spreader.appendChild(table);
    }
    spreader.style.position = 'relative';

    return spreader;
  }

  createHider(spreader) {
    const parent = spreader.parentNode;
    let hider;

    if (!parent || parent.nodeType !== 1 || !(0, _element.hasClass)(parent, 'wtHolder')) {
      hider = document.createElement('div');
      hider.className = 'wtHider';

      if (parent) {
        parent.insertBefore(hider, spreader);
      }
      hider.appendChild(spreader);
    }

    return hider;
  }

  createHolder(hider) {
    const parent = hider.parentNode;
    let holder;

    if (!parent || parent.nodeType !== 1 || !(0, _element.hasClass)(parent, 'wtHolder')) {
      holder = document.createElement('div');
      holder.style.position = 'relative';
      holder.className = 'wtHolder';

      if (parent) {
        parent.insertBefore(holder, hider);
      }
      if (!this.isWorkingOnClone()) {
        holder.parentNode.className += 'ht_master handsontable';
      }
      holder.appendChild(hider);
    }

    return holder;
  }

  alignOverlaysWithTrimmingContainer() {
    const trimmingElement = (0, _element.getTrimmingContainer)(this.wtRootElement);

    if (!this.isWorkingOnClone()) {
      this.holder.parentNode.style.position = 'relative';

      if (trimmingElement === window) {
        let preventOverflow = this.wot.getSetting('preventOverflow');

        if (!preventOverflow) {
          this.holder.style.overflow = 'visible';
          this.wtRootElement.style.overflow = 'visible';
        }
      } else {
        this.holder.style.width = (0, _element.getStyle)(trimmingElement, 'width');
        this.holder.style.height = (0, _element.getStyle)(trimmingElement, 'height');
        this.holder.style.overflow = '';
      }
    }
  }

  isWorkingOnClone() {
    return !!this.wot.cloneSource;
  }

  draw(fastDraw) {
    var _wot = this.wot;
    const wtOverlays = _wot.wtOverlays,
          wtViewport = _wot.wtViewport;

    let totalRows = this.instance.getSetting('totalRows');
    let rowHeaders = this.wot.getSetting('rowHeaders').length;
    let columnHeaders = this.wot.getSetting('columnHeaders').length;
    let syncScroll = false;

    if (!this.isWorkingOnClone()) {
      this.holderOffset = (0, _element.offset)(this.holder);
      fastDraw = wtViewport.createRenderCalculators(fastDraw);

      if (rowHeaders && !this.wot.getSetting('fixedColumnsLeft')) {
        const leftScrollPos = wtOverlays.leftOverlay.getScrollPosition();
        const previousState = this.correctHeaderWidth;

        this.correctHeaderWidth = leftScrollPos > 0;

        if (previousState !== this.correctHeaderWidth) {
          fastDraw = false;
        }
      }
    }

    if (!this.isWorkingOnClone()) {
      syncScroll = wtOverlays.prepareOverlays();
    }

    if (fastDraw) {
      if (!this.isWorkingOnClone()) {
        wtViewport.createVisibleCalculators();
      }
      if (wtOverlays) {
        wtOverlays.refresh(true);
      }
    } else {
      if (this.isWorkingOnClone()) {
        this.tableOffset = this.wot.cloneSource.wtTable.tableOffset;
      } else {
        this.tableOffset = (0, _element.offset)(this.TABLE);
      }
      let startRow;

      if (_base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_DEBUG) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_TOP) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_TOP_LEFT_CORNER)) {
        startRow = 0;
      } else if (_base2.default.isOverlayTypeOf(this.instance.cloneOverlay, _base2.default.CLONE_BOTTOM) || _base2.default.isOverlayTypeOf(this.instance.cloneOverlay, _base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
        startRow = Math.max(totalRows - this.wot.getSetting('fixedRowsBottom'), 0);
      } else {
        startRow = wtViewport.rowsRenderCalculator.startRow;
      }
      let startColumn;

      if (_base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_DEBUG) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_LEFT) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_TOP_LEFT_CORNER) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
        startColumn = 0;
      } else {
        startColumn = wtViewport.columnsRenderCalculator.startColumn;
      }
      this.rowFilter = new _row2.default(startRow, totalRows, columnHeaders);
      this.columnFilter = new _column2.default(startColumn, this.wot.getSetting('totalColumns'), rowHeaders);

      this.alignOverlaysWithTrimmingContainer();
      this._doDraw();
    }
    this.refreshSelections(fastDraw);

    if (!this.isWorkingOnClone()) {
      wtOverlays.topOverlay.resetFixedPosition();

      if (wtOverlays.bottomOverlay.clone) {
        wtOverlays.bottomOverlay.resetFixedPosition();
      }

      wtOverlays.leftOverlay.resetFixedPosition();

      if (wtOverlays.topLeftCornerOverlay) {
        wtOverlays.topLeftCornerOverlay.resetFixedPosition();
      }

      if (wtOverlays.bottomLeftCornerOverlay && wtOverlays.bottomLeftCornerOverlay.clone) {
        wtOverlays.bottomLeftCornerOverlay.resetFixedPosition();
      }
    }
    if (syncScroll) {
      wtOverlays.syncScrollWithMaster();
    }
    this.wot.drawn = true;

    return this;
  }

  _doDraw() {
    const wtRenderer = new _tableRenderer2.default(this);

    wtRenderer.render();
  }

  removeClassFromCells(className) {
    const nodes = this.TABLE.querySelectorAll(`.${className}`);

    for (let i = 0, len = nodes.length; i < len; i++) {
      (0, _element.removeClass)(nodes[i], className);
    }
  }

  refreshSelections(fastDraw) {
    if (!this.wot.selections) {
      return;
    }
    let len = this.wot.selections.length;

    if (fastDraw) {
      for (let i = 0; i < len; i++) {
        if (this.wot.selections[i].settings.className) {
          this.removeClassFromCells(this.wot.selections[i].settings.className);
        }
        if (this.wot.selections[i].settings.highlightHeaderClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightHeaderClassName);
        }
        if (this.wot.selections[i].settings.highlightRowClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightRowClassName);
        }
        if (this.wot.selections[i].settings.highlightColumnClassName) {
          this.removeClassFromCells(this.wot.selections[i].settings.highlightColumnClassName);
        }
      }
    }
    for (let i = 0; i < len; i++) {
      this.wot.selections[i].draw(this.wot, fastDraw);
    }
  }

  getCell(coords) {
    if (this.isRowBeforeRenderedRows(coords.row)) {
      return -1;
    } else if (this.isRowAfterRenderedRows(coords.row)) {
      return -2;
    }

    const TR = this.TBODY.childNodes[this.rowFilter.sourceToRendered(coords.row)];

    if (TR) {
      return TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(coords.col)];
    }
  }

  getColumnHeader(col) {
    let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    const TR = this.THEAD.childNodes[level];

    if (TR) {
      return TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(col)];
    }
  }

  getRowHeader(row) {
    if (this.columnFilter.sourceColumnToVisibleRowHeadedColumn(0) === 0) {
      return null;
    }
    const TR = this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];

    if (TR) {
      return TR.childNodes[0];
    }
  }

  getCoords(TD) {
    if (TD.nodeName !== 'TD' && TD.nodeName !== 'TH') {
      TD = (0, _element.closest)(TD, ['TD', 'TH']);
    }

    if (TD === null) {
      return null;
    }

    const TR = TD.parentNode;
    const CONTAINER = TR.parentNode;
    let row = (0, _element.index)(TR);
    let col = TD.cellIndex;

    if ((0, _element.overlayContainsElement)(_base2.default.CLONE_TOP_LEFT_CORNER, TD) || (0, _element.overlayContainsElement)(_base2.default.CLONE_TOP, TD)) {
      if (CONTAINER.nodeName === 'THEAD') {
        row -= CONTAINER.childNodes.length;
      }
    } else if (CONTAINER === this.THEAD) {
      row = this.rowFilter.visibleColHeadedRowToSourceRow(row);
    } else {
      row = this.rowFilter.renderedToSource(row);
    }

    if ((0, _element.overlayContainsElement)(_base2.default.CLONE_TOP_LEFT_CORNER, TD) || (0, _element.overlayContainsElement)(_base2.default.CLONE_LEFT, TD)) {
      col = this.columnFilter.offsettedTH(col);
    } else {
      col = this.columnFilter.visibleRowHeadedColumnToSourceColumn(col);
    }

    return new _coords2.default(row, col);
  }

  getTrForRow(row) {
    return this.TBODY.childNodes[this.rowFilter.sourceToRendered(row)];
  }

  getFirstRenderedRow() {
    return this.wot.wtViewport.rowsRenderCalculator.startRow;
  }

  getFirstVisibleRow() {
    return this.wot.wtViewport.rowsVisibleCalculator.startRow;
  }

  getFirstRenderedColumn() {
    return this.wot.wtViewport.columnsRenderCalculator.startColumn;
  }

  getFirstVisibleColumn() {
    return this.wot.wtViewport.columnsVisibleCalculator.startColumn;
  }

  getLastRenderedRow() {
    return this.wot.wtViewport.rowsRenderCalculator.endRow;
  }

  getLastVisibleRow() {
    return this.wot.wtViewport.rowsVisibleCalculator.endRow;
  }

  getLastRenderedColumn() {
    return this.wot.wtViewport.columnsRenderCalculator.endColumn;
  }

  getLastVisibleColumn() {
    return this.wot.wtViewport.columnsVisibleCalculator.endColumn;
  }

  isRowBeforeRenderedRows(row) {
    return this.rowFilter && this.rowFilter.sourceToRendered(row) < 0 && row >= 0;
  }

  isRowAfterViewport(row) {
    return this.rowFilter && this.rowFilter.sourceToRendered(row) > this.getLastVisibleRow();
  }

  isRowAfterRenderedRows(row) {
    return this.rowFilter && this.rowFilter.sourceToRendered(row) > this.getLastRenderedRow();
  }

  isColumnBeforeViewport(column) {
    return this.columnFilter && this.columnFilter.sourceToRendered(column) < 0 && column >= 0;
  }

  isColumnAfterViewport(column) {
    return this.columnFilter && this.columnFilter.sourceToRendered(column) > this.getLastVisibleColumn();
  }

  isLastRowFullyVisible() {
    return this.getLastVisibleRow() === this.getLastRenderedRow();
  }

  isLastColumnFullyVisible() {
    return this.getLastVisibleColumn() === this.getLastRenderedColumn();
  }

  getRenderedColumnsCount() {
    let columnsCount = this.wot.wtViewport.columnsRenderCalculator.count;
    let totalColumns = this.wot.getSetting('totalColumns');

    if (this.wot.isOverlayName(_base2.default.CLONE_DEBUG)) {
      columnsCount = totalColumns;
    } else if (this.wot.isOverlayName(_base2.default.CLONE_LEFT) || this.wot.isOverlayName(_base2.default.CLONE_TOP_LEFT_CORNER) || this.wot.isOverlayName(_base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
      return Math.min(this.wot.getSetting('fixedColumnsLeft'), totalColumns);
    }

    return columnsCount;
  }

  getRenderedRowsCount() {
    let rowsCount = this.wot.wtViewport.rowsRenderCalculator.count;
    let totalRows = this.wot.getSetting('totalRows');

    if (this.wot.isOverlayName(_base2.default.CLONE_DEBUG)) {
      rowsCount = totalRows;
    } else if (this.wot.isOverlayName(_base2.default.CLONE_TOP) || this.wot.isOverlayName(_base2.default.CLONE_TOP_LEFT_CORNER)) {
      rowsCount = Math.min(this.wot.getSetting('fixedRowsTop'), totalRows);
    } else if (this.wot.isOverlayName(_base2.default.CLONE_BOTTOM) || this.wot.isOverlayName(_base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
      rowsCount = Math.min(this.wot.getSetting('fixedRowsBottom'), totalRows);
    }

    return rowsCount;
  }

  getVisibleRowsCount() {
    return this.wot.wtViewport.rowsVisibleCalculator.count;
  }

  allRowsInViewport() {
    return this.wot.getSetting('totalRows') == this.getVisibleRowsCount();
  }

  getRowHeight(sourceRow) {
    let height = this.wot.wtSettings.settings.rowHeight(sourceRow);
    let oversizedHeight = this.wot.wtViewport.oversizedRows[sourceRow];

    if (oversizedHeight !== void 0) {
      height = height === void 0 ? oversizedHeight : Math.max(height, oversizedHeight);
    }

    return height;
  }

  getColumnHeaderHeight(level) {
    let height = this.wot.wtSettings.settings.defaultRowHeight;
    let oversizedHeight = this.wot.wtViewport.oversizedColumnHeaders[level];

    if (oversizedHeight !== void 0) {
      height = height ? Math.max(height, oversizedHeight) : oversizedHeight;
    }

    return height;
  }

  getVisibleColumnsCount() {
    return this.wot.wtViewport.columnsVisibleCalculator.count;
  }

  allColumnsInViewport() {
    return this.wot.getSetting('totalColumns') == this.getVisibleColumnsCount();
  }

  getColumnWidth(sourceColumn) {
    let width = this.wot.wtSettings.settings.columnWidth;

    if (typeof width === 'function') {
      width = width(sourceColumn);
    } else if (typeof width === 'object') {
      width = width[sourceColumn];
    }

    return width || this.wot.wtSettings.settings.defaultColumnWidth;
  }

  getStretchedColumnWidth(sourceColumn) {
    let columnWidth = this.getColumnWidth(sourceColumn);
    let width = columnWidth == null ? this.instance.wtSettings.settings.defaultColumnWidth : columnWidth;
    let calculator = this.wot.wtViewport.columnsRenderCalculator;

    if (calculator) {
      let stretchedWidth = calculator.getStretchedColumnWidth(sourceColumn, width);

      if (stretchedWidth) {
        width = stretchedWidth;
      }
    }

    return width;
  }

  _modifyRowHeaderWidth(rowHeaderWidthFactory) {
    let widths = (0, _function.isFunction)(rowHeaderWidthFactory) ? rowHeaderWidthFactory() : null;

    if (Array.isArray(widths)) {
      widths = [...widths];
      widths[widths.length - 1] = this._correctRowHeaderWidth(widths[widths.length - 1]);
    } else {
      widths = this._correctRowHeaderWidth(widths);
    }

    return widths;
  }

  _correctRowHeaderWidth(width) {
    if (typeof width !== 'number') {
      width = this.wot.getSetting('defaultColumnWidth');
    }
    if (this.correctHeaderWidth) {
      width++;
    }

    return width;
  }
}

exports.default = Table;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let performanceWarningAppeared = false;

class TableRenderer {
  constructor(wtTable) {
    this.wtTable = wtTable;
    this.wot = wtTable.instance;

    this.instance = wtTable.instance;

    this.rowFilter = wtTable.rowFilter;
    this.columnFilter = wtTable.columnFilter;

    this.TABLE = wtTable.TABLE;
    this.THEAD = wtTable.THEAD;
    this.TBODY = wtTable.TBODY;
    this.COLGROUP = wtTable.COLGROUP;

    this.rowHeaders = [];
    this.rowHeaderCount = 0;
    this.columnHeaders = [];
    this.columnHeaderCount = 0;
    this.fixedRowsTop = 0;
    this.fixedRowsBottom = 0;
  }

  render() {
    if (!this.wtTable.isWorkingOnClone()) {
      const skipRender = {};
      this.wot.getSetting('beforeDraw', true, skipRender);

      if (skipRender.skipRender === true) {
        return;
      }
    }

    this.rowHeaders = this.wot.getSetting('rowHeaders');
    this.rowHeaderCount = this.rowHeaders.length;
    this.fixedRowsTop = this.wot.getSetting('fixedRowsTop');
    this.fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
    this.columnHeaders = this.wot.getSetting('columnHeaders');
    this.columnHeaderCount = this.columnHeaders.length;

    let columnsToRender = this.wtTable.getRenderedColumnsCount();
    let rowsToRender = this.wtTable.getRenderedRowsCount();
    let totalColumns = this.wot.getSetting('totalColumns');
    let totalRows = this.wot.getSetting('totalRows');
    let workspaceWidth;
    let adjusted = false;

    if (_base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_BOTTOM) || _base2.default.isOverlayTypeOf(this.wot.cloneOverlay, _base2.default.CLONE_BOTTOM_LEFT_CORNER)) {
      this.columnHeaders = [];
      this.columnHeaderCount = 0;
    }

    if (totalColumns >= 0) {
      this.adjustAvailableNodes();
      adjusted = true;

      this.renderColumnHeaders();

      this.renderRows(totalRows, rowsToRender, columnsToRender);

      if (!this.wtTable.isWorkingOnClone()) {
        workspaceWidth = this.wot.wtViewport.getWorkspaceWidth();
        this.wot.wtViewport.containerWidth = null;
      }

      this.adjustColumnWidths(columnsToRender);
      this.markOversizedColumnHeaders();
      this.adjustColumnHeaderHeights();
    }

    if (!adjusted) {
      this.adjustAvailableNodes();
    }
    this.removeRedundantRows(rowsToRender);

    if (!this.wtTable.isWorkingOnClone() || this.wot.isOverlayName(_base2.default.CLONE_BOTTOM)) {
      this.markOversizedRows();
    }
    if (!this.wtTable.isWorkingOnClone()) {
      this.wot.wtViewport.createVisibleCalculators();
      this.wot.wtOverlays.refresh(false);

      this.wot.wtOverlays.applyToDOM();

      let hiderWidth = (0, _element.outerWidth)(this.wtTable.hider);
      let tableWidth = (0, _element.outerWidth)(this.wtTable.TABLE);

      if (hiderWidth !== 0 && tableWidth !== hiderWidth) {
        this.adjustColumnWidths(columnsToRender);
      }

      if (workspaceWidth !== this.wot.wtViewport.getWorkspaceWidth()) {
        this.wot.wtViewport.containerWidth = null;

        let firstRendered = this.wtTable.getFirstRenderedColumn();
        let lastRendered = this.wtTable.getLastRenderedColumn();
        let defaultColumnWidth = this.wot.getSetting('defaultColumnWidth');
        let rowHeaderWidthSetting = this.wot.getSetting('rowHeaderWidth');

        rowHeaderWidthSetting = this.instance.getSetting('onModifyRowHeaderWidth', rowHeaderWidthSetting);

        if (rowHeaderWidthSetting != null) {
          for (let i = 0; i < this.rowHeaderCount; i++) {
            let width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[i] : rowHeaderWidthSetting;

            width = width == null ? defaultColumnWidth : width;

            this.COLGROUP.childNodes[i].style.width = `${width}px`;
          }
        }

        for (let i = firstRendered; i < lastRendered; i++) {
          let width = this.wtTable.getStretchedColumnWidth(i);
          let renderedIndex = this.columnFilter.sourceToRendered(i);

          this.COLGROUP.childNodes[renderedIndex + this.rowHeaderCount].style.width = `${width}px`;
        }
      }

      this.wot.getSetting('onDraw', true);
    } else if (this.wot.isOverlayName(_base2.default.CLONE_BOTTOM)) {
      this.wot.cloneSource.wtOverlays.adjustElementsSize();
    }
  }

  removeRedundantRows(renderedRowsCount) {
    while (this.wtTable.tbodyChildrenLength > renderedRowsCount) {
      this.TBODY.removeChild(this.TBODY.lastChild);
      this.wtTable.tbodyChildrenLength--;
    }
  }

  renderRows(totalRows, rowsToRender, columnsToRender) {
    let lastTD, TR;
    let visibleRowIndex = 0;
    let sourceRowIndex = this.rowFilter.renderedToSource(visibleRowIndex);
    let isWorkingOnClone = this.wtTable.isWorkingOnClone();

    while (sourceRowIndex < totalRows && sourceRowIndex >= 0) {
      if (!performanceWarningAppeared && visibleRowIndex > 1000) {
        performanceWarningAppeared = true;
        console.warn('Performance tip: Handsontable rendered more than 1000 visible rows. Consider limiting the number ' + 'of rendered rows by specifying the table height and/or turning off the "renderAllRows" option.');
      }
      if (rowsToRender !== void 0 && visibleRowIndex === rowsToRender) {
        break;
      }
      TR = this.getOrCreateTrForRow(visibleRowIndex, TR);

      this.renderRowHeaders(sourceRowIndex, TR);

      this.adjustColumns(TR, columnsToRender + this.rowHeaderCount);

      lastTD = this.renderCells(sourceRowIndex, TR, columnsToRender);

      if (!isWorkingOnClone || this.wot.isOverlayName(_base2.default.CLONE_BOTTOM)) {
        this.resetOversizedRow(sourceRowIndex);
      }

      if (TR.firstChild) {
        let height = this.wot.wtTable.getRowHeight(sourceRowIndex);

        if (height) {
          height--;
          TR.firstChild.style.height = `${height}px`;
        } else {
          TR.firstChild.style.height = '';
        }
      }
      visibleRowIndex++;
      sourceRowIndex = this.rowFilter.renderedToSource(visibleRowIndex);
    }
  }

  resetOversizedRow(sourceRow) {
    if (this.wot.getSetting('externalRowCalculator')) {
      return;
    }
    if (this.wot.wtViewport.oversizedRows && this.wot.wtViewport.oversizedRows[sourceRow]) {
      this.wot.wtViewport.oversizedRows[sourceRow] = void 0;
    }
  }

  markOversizedRows() {
    if (this.wot.getSetting('externalRowCalculator')) {
      return;
    }
    let rowCount = this.instance.wtTable.TBODY.childNodes.length;
    let expectedTableHeight = rowCount * this.instance.wtSettings.settings.defaultRowHeight;
    let actualTableHeight = (0, _element.innerHeight)(this.instance.wtTable.TBODY) - 1;
    let previousRowHeight;
    let rowInnerHeight;
    let sourceRowIndex;
    let currentTr;
    let rowHeader;
    let totalRows = this.instance.getSetting('totalRows');

    if (expectedTableHeight === actualTableHeight && !this.instance.getSetting('fixedRowsBottom')) {
      return;
    }

    while (rowCount) {
      rowCount--;
      sourceRowIndex = this.instance.wtTable.rowFilter.renderedToSource(rowCount);
      previousRowHeight = this.instance.wtTable.getRowHeight(sourceRowIndex);
      currentTr = this.instance.wtTable.getTrForRow(sourceRowIndex);
      rowHeader = currentTr.querySelector('th');

      if (rowHeader) {
        rowInnerHeight = (0, _element.innerHeight)(rowHeader);
      } else {
        rowInnerHeight = (0, _element.innerHeight)(currentTr) - 1;
      }

      if (!previousRowHeight && this.instance.wtSettings.settings.defaultRowHeight < rowInnerHeight || previousRowHeight < rowInnerHeight) {
        this.instance.wtViewport.oversizedRows[sourceRowIndex] = ++rowInnerHeight;
      }
    }
  }

  markOversizedColumnHeaders() {
    let overlayName = this.wot.getOverlayName();

    if (!this.columnHeaderCount || this.wot.wtViewport.hasOversizedColumnHeadersMarked[overlayName] || this.wtTable.isWorkingOnClone()) {
      return;
    }
    let columnCount = this.wtTable.getRenderedColumnsCount();

    for (let i = 0; i < this.columnHeaderCount; i++) {
      for (let renderedColumnIndex = -1 * this.rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
        this.markIfOversizedColumnHeader(renderedColumnIndex);
      }
    }
    this.wot.wtViewport.hasOversizedColumnHeadersMarked[overlayName] = true;
  }

  adjustColumnHeaderHeights() {
    let columnHeaders = this.wot.getSetting('columnHeaders');
    let children = this.wot.wtTable.THEAD.childNodes;
    let oversizedColumnHeaders = this.wot.wtViewport.oversizedColumnHeaders;

    for (let i = 0, len = columnHeaders.length; i < len; i++) {
      if (oversizedColumnHeaders[i]) {
        if (!children[i] || children[i].childNodes.length === 0) {
          return;
        }
        children[i].childNodes[0].style.height = `${oversizedColumnHeaders[i]}px`;
      }
    }
  }

  markIfOversizedColumnHeader(col) {
    let sourceColIndex = this.wot.wtTable.columnFilter.renderedToSource(col);
    let level = this.columnHeaderCount;
    let defaultRowHeight = this.wot.wtSettings.settings.defaultRowHeight;
    let previousColHeaderHeight;
    let currentHeader;
    let currentHeaderHeight;
    let columnHeaderHeightSetting = this.wot.getSetting('columnHeaderHeight') || [];

    while (level) {
      level--;

      previousColHeaderHeight = this.wot.wtTable.getColumnHeaderHeight(level);
      currentHeader = this.wot.wtTable.getColumnHeader(sourceColIndex, level);

      if (!currentHeader) {
        continue;
      }
      currentHeaderHeight = (0, _element.innerHeight)(currentHeader);

      if (!previousColHeaderHeight && defaultRowHeight < currentHeaderHeight || previousColHeaderHeight < currentHeaderHeight) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = currentHeaderHeight;
      }

      if (Array.isArray(columnHeaderHeightSetting)) {
        if (columnHeaderHeightSetting[level] != null) {
          this.wot.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting[level];
        }
      } else if (!isNaN(columnHeaderHeightSetting)) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting;
      }

      if (this.wot.wtViewport.oversizedColumnHeaders[level] < (columnHeaderHeightSetting[level] || columnHeaderHeightSetting)) {
        this.wot.wtViewport.oversizedColumnHeaders[level] = columnHeaderHeightSetting[level] || columnHeaderHeightSetting;
      }
    }
  }

  renderCells(sourceRowIndex, TR, columnsToRender) {
    let TD;
    let sourceColIndex;

    for (let visibleColIndex = 0; visibleColIndex < columnsToRender; visibleColIndex++) {
      sourceColIndex = this.columnFilter.renderedToSource(visibleColIndex);

      if (visibleColIndex === 0) {
        TD = TR.childNodes[this.columnFilter.sourceColumnToVisibleRowHeadedColumn(sourceColIndex)];
      } else {
        TD = TD.nextSibling;
      }

      if (TD.nodeName == 'TH') {
        TD = replaceThWithTd(TD, TR);
      }
      if (!(0, _element.hasClass)(TD, 'hide')) {
        TD.className = '';
      }
      TD.removeAttribute('style');
      this.wot.wtSettings.settings.cellRenderer(sourceRowIndex, sourceColIndex, TD);
    }

    return TD;
  }

  adjustColumnWidths(columnsToRender) {
    let scrollbarCompensation = 0;
    let sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    let mainHolder = sourceInstance.wtTable.holder;
    let defaultColumnWidth = this.wot.getSetting('defaultColumnWidth');
    let rowHeaderWidthSetting = this.wot.getSetting('rowHeaderWidth');

    if (mainHolder.offsetHeight < mainHolder.scrollHeight) {
      scrollbarCompensation = (0, _element.getScrollbarWidth)();
    }
    this.wot.wtViewport.columnsRenderCalculator.refreshStretching(this.wot.wtViewport.getViewportWidth() - scrollbarCompensation);

    rowHeaderWidthSetting = this.instance.getSetting('onModifyRowHeaderWidth', rowHeaderWidthSetting);

    if (rowHeaderWidthSetting != null) {
      for (let i = 0; i < this.rowHeaderCount; i++) {
        let width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[i] : rowHeaderWidthSetting;

        width = width == null ? defaultColumnWidth : width;

        this.COLGROUP.childNodes[i].style.width = `${width}px`;
      }
    }

    for (let renderedColIndex = 0; renderedColIndex < columnsToRender; renderedColIndex++) {
      let width = this.wtTable.getStretchedColumnWidth(this.columnFilter.renderedToSource(renderedColIndex));

      this.COLGROUP.childNodes[renderedColIndex + this.rowHeaderCount].style.width = `${width}px`;
    }
  }

  appendToTbody(TR) {
    this.TBODY.appendChild(TR);
    this.wtTable.tbodyChildrenLength++;
  }

  getOrCreateTrForRow(rowIndex, currentTr) {
    let TR;

    if (rowIndex >= this.wtTable.tbodyChildrenLength) {
      TR = this.createRow();
      this.appendToTbody(TR);
    } else if (rowIndex === 0) {
      TR = this.TBODY.firstChild;
    } else {
      TR = currentTr.nextSibling;
    }
    if (TR.className) {
      TR.removeAttribute('class');
    }

    return TR;
  }

  createRow() {
    let TR = document.createElement('TR');

    for (let visibleColIndex = 0; visibleColIndex < this.rowHeaderCount; visibleColIndex++) {
      TR.appendChild(document.createElement('TH'));
    }

    return TR;
  }

  renderRowHeader(row, col, TH) {
    TH.className = '';
    TH.removeAttribute('style');
    this.rowHeaders[col](row, TH, col);
  }

  renderRowHeaders(row, TR) {
    for (let TH = TR.firstChild, visibleColIndex = 0; visibleColIndex < this.rowHeaderCount; visibleColIndex++) {
      if (!TH) {
        TH = document.createElement('TH');
        TR.appendChild(TH);
      } else if (TH.nodeName == 'TD') {
        TH = replaceTdWithTh(TH, TR);
      }
      this.renderRowHeader(row, visibleColIndex, TH);

      TH = TH.nextSibling;
    }
  }

  adjustAvailableNodes() {
    this.adjustColGroups();
    this.adjustThead();
  }

  renderColumnHeaders() {
    if (!this.columnHeaderCount) {
      return;
    }
    let columnCount = this.wtTable.getRenderedColumnsCount();

    for (let i = 0; i < this.columnHeaderCount; i++) {
      let TR = this.getTrForColumnHeaders(i);

      for (let renderedColumnIndex = -1 * this.rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
        let sourceCol = this.columnFilter.renderedToSource(renderedColumnIndex);

        this.renderColumnHeader(i, sourceCol, TR.childNodes[renderedColumnIndex + this.rowHeaderCount]);
      }
    }
  }

  adjustColGroups() {
    let columnCount = this.wtTable.getRenderedColumnsCount();

    while (this.wtTable.colgroupChildrenLength < columnCount + this.rowHeaderCount) {
      this.COLGROUP.appendChild(document.createElement('COL'));
      this.wtTable.colgroupChildrenLength++;
    }
    while (this.wtTable.colgroupChildrenLength > columnCount + this.rowHeaderCount) {
      this.COLGROUP.removeChild(this.COLGROUP.lastChild);
      this.wtTable.colgroupChildrenLength--;
    }
    if (this.rowHeaderCount) {
      (0, _element.addClass)(this.COLGROUP.childNodes[0], 'rowHeader');
    }
  }

  adjustThead() {
    let columnCount = this.wtTable.getRenderedColumnsCount();
    let TR = this.THEAD.firstChild;

    if (this.columnHeaders.length) {
      for (let i = 0, len = this.columnHeaders.length; i < len; i++) {
        TR = this.THEAD.childNodes[i];

        if (!TR) {
          TR = document.createElement('TR');
          this.THEAD.appendChild(TR);
        }
        this.theadChildrenLength = TR.childNodes.length;

        while (this.theadChildrenLength < columnCount + this.rowHeaderCount) {
          TR.appendChild(document.createElement('TH'));
          this.theadChildrenLength++;
        }
        while (this.theadChildrenLength > columnCount + this.rowHeaderCount) {
          TR.removeChild(TR.lastChild);
          this.theadChildrenLength--;
        }
      }
      let theadChildrenLength = this.THEAD.childNodes.length;

      if (theadChildrenLength > this.columnHeaders.length) {
        for (let i = this.columnHeaders.length; i < theadChildrenLength; i++) {
          this.THEAD.removeChild(this.THEAD.lastChild);
        }
      }
    } else if (TR) {
      (0, _element.empty)(TR);
    }
  }

  getTrForColumnHeaders(index) {
    return this.THEAD.childNodes[index];
  }

  renderColumnHeader(row, col, TH) {
    TH.className = '';
    TH.removeAttribute('style');

    return this.columnHeaders[row](col, TH, row);
  }

  adjustColumns(TR, desiredCount) {
    let count = TR.childNodes.length;

    while (count < desiredCount) {
      let TD = document.createElement('TD');

      TR.appendChild(TD);
      count++;
    }
    while (count > desiredCount) {
      TR.removeChild(TR.lastChild);
      count--;
    }
  }

  removeRedundantColumns(columnsToRender) {
    while (this.wtTable.tbodyChildrenLength > columnsToRender) {
      this.TBODY.removeChild(this.TBODY.lastChild);
      this.wtTable.tbodyChildrenLength--;
    }
  }
}

function replaceTdWithTh(TD, TR) {
  let TH = document.createElement('TH');

  TR.insertBefore(TH, TD);
  TR.removeChild(TD);

  return TH;
}

function replaceThWithTd(TH, TR) {
  let TD = document.createElement('TD');

  TR.insertBefore(TD, TH);
  TR.removeChild(TH);

  return TD;
}

exports.default = TableRenderer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _object = __webpack_require__(2);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _viewportColumns = __webpack_require__(35);

var _viewportColumns2 = _interopRequireDefault(_viewportColumns);

var _viewportRows = __webpack_require__(36);

var _viewportRows2 = _interopRequireDefault(_viewportRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Viewport {
  constructor(wotInstance) {
    this.wot = wotInstance;

    this.instance = this.wot;

    this.oversizedRows = [];
    this.oversizedColumnHeaders = [];
    this.hasOversizedColumnHeadersMarked = {};
    this.clientHeight = 0;
    this.containerWidth = NaN;
    this.rowHeaderWidth = NaN;
    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;

    this.eventManager = new _eventManager2.default(this.wot);
    this.eventManager.addEventListener(window, 'resize', () => {
      this.clientHeight = this.getWorkspaceHeight();
    });
  }

  getWorkspaceHeight() {
    let trimmingContainer = this.instance.wtOverlays.topOverlay.trimmingContainer;
    let elemHeight;
    let height = 0;

    if (trimmingContainer === window) {
      height = document.documentElement.clientHeight;
    } else {
      elemHeight = (0, _element.outerHeight)(trimmingContainer);

      height = elemHeight > 0 && trimmingContainer.clientHeight > 0 ? trimmingContainer.clientHeight : Infinity;
    }

    return height;
  }

  getWorkspaceWidth() {
    let width;
    let totalColumns = this.wot.getSetting('totalColumns');
    let trimmingContainer = this.instance.wtOverlays.leftOverlay.trimmingContainer;
    let overflow;
    let stretchSetting = this.wot.getSetting('stretchH');
    let docOffsetWidth = document.documentElement.offsetWidth;
    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (preventOverflow) {
      return (0, _element.outerWidth)(this.instance.wtTable.wtRootElement);
    }

    if (this.wot.getSetting('freezeOverlays')) {
      width = Math.min(docOffsetWidth - this.getWorkspaceOffset().left, docOffsetWidth);
    } else {
      width = Math.min(this.getContainerFillWidth(), docOffsetWidth - this.getWorkspaceOffset().left, docOffsetWidth);
    }

    if (trimmingContainer === window && totalColumns > 0 && this.sumColumnWidths(0, totalColumns - 1) > width) {
      return document.documentElement.clientWidth;
    }

    if (trimmingContainer !== window) {
      overflow = (0, _element.getStyle)(this.instance.wtOverlays.leftOverlay.trimmingContainer, 'overflow');

      if (overflow == 'scroll' || overflow == 'hidden' || overflow == 'auto') {
        return Math.max(width, trimmingContainer.clientWidth);
      }
    }

    if (stretchSetting === 'none' || !stretchSetting) {
      return Math.max(width, (0, _element.outerWidth)(this.instance.wtTable.TABLE));
    }

    return width;
  }

  hasVerticalScroll() {
    return this.getWorkspaceActualHeight() > this.getWorkspaceHeight();
  }

  hasHorizontalScroll() {
    return this.getWorkspaceActualWidth() > this.getWorkspaceWidth();
  }

  sumColumnWidths(from, length) {
    let sum = 0;

    while (from < length) {
      sum += this.wot.wtTable.getColumnWidth(from);
      from++;
    }

    return sum;
  }

  getContainerFillWidth() {
    if (this.containerWidth) {
      return this.containerWidth;
    }
    let mainContainer = this.instance.wtTable.holder;
    let fillWidth;
    let dummyElement;

    dummyElement = document.createElement('div');
    dummyElement.style.width = '100%';
    dummyElement.style.height = '1px';
    mainContainer.appendChild(dummyElement);
    fillWidth = dummyElement.offsetWidth;

    this.containerWidth = fillWidth;
    mainContainer.removeChild(dummyElement);

    return fillWidth;
  }

  getWorkspaceOffset() {
    return (0, _element.offset)(this.wot.wtTable.TABLE);
  }

  getWorkspaceActualHeight() {
    return (0, _element.outerHeight)(this.wot.wtTable.TABLE);
  }

  getWorkspaceActualWidth() {
    return (0, _element.outerWidth)(this.wot.wtTable.TABLE) || (0, _element.outerWidth)(this.wot.wtTable.TBODY) || (0, _element.outerWidth)(this.wot.wtTable.THEAD);
  }

  getColumnHeaderHeight() {
    if (isNaN(this.columnHeaderHeight)) {
      this.columnHeaderHeight = (0, _element.outerHeight)(this.wot.wtTable.THEAD);
    }

    return this.columnHeaderHeight;
  }

  getViewportHeight() {
    let containerHeight = this.getWorkspaceHeight();
    let columnHeaderHeight;

    if (containerHeight === Infinity) {
      return containerHeight;
    }
    columnHeaderHeight = this.getColumnHeaderHeight();

    if (columnHeaderHeight > 0) {
      containerHeight -= columnHeaderHeight;
    }

    return containerHeight;
  }

  getRowHeaderWidth() {
    let rowHeadersHeightSetting = this.instance.getSetting('rowHeaderWidth');
    let rowHeaders = this.instance.getSetting('rowHeaders');

    if (rowHeadersHeightSetting) {
      this.rowHeaderWidth = 0;

      for (let i = 0, len = rowHeaders.length; i < len; i++) {
        this.rowHeaderWidth += rowHeadersHeightSetting[i] || rowHeadersHeightSetting;
      }
    }

    if (this.wot.cloneSource) {
      return this.wot.cloneSource.wtViewport.getRowHeaderWidth();
    }

    if (isNaN(this.rowHeaderWidth)) {

      if (rowHeaders.length) {
        let TH = this.instance.wtTable.TABLE.querySelector('TH');
        this.rowHeaderWidth = 0;

        for (let i = 0, len = rowHeaders.length; i < len; i++) {
          if (TH) {
            this.rowHeaderWidth += (0, _element.outerWidth)(TH);
            TH = TH.nextSibling;
          } else {
            this.rowHeaderWidth += 50;
          }
        }
      } else {
        this.rowHeaderWidth = 0;
      }
    }

    this.rowHeaderWidth = this.instance.getSetting('onModifyRowHeaderWidth', this.rowHeaderWidth) || this.rowHeaderWidth;

    return this.rowHeaderWidth;
  }

  getViewportWidth() {
    let containerWidth = this.getWorkspaceWidth();
    let rowHeaderWidth;

    if (containerWidth === Infinity) {
      return containerWidth;
    }
    rowHeaderWidth = this.getRowHeaderWidth();

    if (rowHeaderWidth > 0) {
      return containerWidth - rowHeaderWidth;
    }

    return containerWidth;
  }

  createRowsCalculator() {
    let visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    let height;
    let pos;
    let fixedRowsTop;
    let scrollbarHeight;
    let fixedRowsBottom;
    let fixedRowsHeight;
    let totalRows;

    this.rowHeaderWidth = NaN;

    if (this.wot.wtSettings.settings.renderAllRows) {
      height = Infinity;
    } else {
      height = this.getViewportHeight();
    }
    pos = this.wot.wtOverlays.topOverlay.getScrollPosition() - this.wot.wtOverlays.topOverlay.getTableParentOffset();

    if (pos < 0) {
      pos = 0;
    }
    fixedRowsTop = this.wot.getSetting('fixedRowsTop');
    fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
    totalRows = this.wot.getSetting('totalRows');

    if (fixedRowsTop) {
      fixedRowsHeight = this.wot.wtOverlays.topOverlay.sumCellSizes(0, fixedRowsTop);
      pos += fixedRowsHeight;
      height -= fixedRowsHeight;
    }

    if (fixedRowsBottom && this.wot.wtOverlays.bottomOverlay.clone) {
      fixedRowsHeight = this.wot.wtOverlays.bottomOverlay.sumCellSizes(totalRows - fixedRowsBottom, totalRows);

      height -= fixedRowsHeight;
    }

    if (this.wot.wtTable.holder.clientHeight === this.wot.wtTable.holder.offsetHeight) {
      scrollbarHeight = 0;
    } else {
      scrollbarHeight = (0, _element.getScrollbarWidth)();
    }

    return new _viewportRows2.default(height, pos, this.wot.getSetting('totalRows'), sourceRow => this.wot.wtTable.getRowHeight(sourceRow), visible ? null : this.wot.wtSettings.settings.viewportRowCalculatorOverride, visible, scrollbarHeight);
  }

  createColumnsCalculator() {
    let visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    let width = this.getViewportWidth();
    let pos;
    let fixedColumnsLeft;

    this.columnHeaderHeight = NaN;

    pos = this.wot.wtOverlays.leftOverlay.getScrollPosition() - this.wot.wtOverlays.leftOverlay.getTableParentOffset();

    if (pos < 0) {
      pos = 0;
    }
    fixedColumnsLeft = this.wot.getSetting('fixedColumnsLeft');

    if (fixedColumnsLeft) {
      let fixedColumnsWidth = this.wot.wtOverlays.leftOverlay.sumCellSizes(0, fixedColumnsLeft);
      pos += fixedColumnsWidth;
      width -= fixedColumnsWidth;
    }
    if (this.wot.wtTable.holder.clientWidth !== this.wot.wtTable.holder.offsetWidth) {
      width -= (0, _element.getScrollbarWidth)();
    }

    return new _viewportColumns2.default(width, pos, this.wot.getSetting('totalColumns'), sourceCol => this.wot.wtTable.getColumnWidth(sourceCol), visible ? null : this.wot.wtSettings.settings.viewportColumnCalculatorOverride, visible, this.wot.getSetting('stretchH'), (stretchedWidth, column) => this.wot.getSetting('onBeforeStretchingColumnWidth', stretchedWidth, column));
  }

  createRenderCalculators() {
    let fastDraw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (fastDraw) {
      let proposedRowsVisibleCalculator = this.createRowsCalculator(true);
      let proposedColumnsVisibleCalculator = this.createColumnsCalculator(true);

      if (!(this.areAllProposedVisibleRowsAlreadyRendered(proposedRowsVisibleCalculator) && this.areAllProposedVisibleColumnsAlreadyRendered(proposedColumnsVisibleCalculator))) {
        fastDraw = false;
      }
    }

    if (!fastDraw) {
      this.rowsRenderCalculator = this.createRowsCalculator();
      this.columnsRenderCalculator = this.createColumnsCalculator();
    }

    this.rowsVisibleCalculator = null;
    this.columnsVisibleCalculator = null;

    return fastDraw;
  }

  createVisibleCalculators() {
    this.rowsVisibleCalculator = this.createRowsCalculator(true);
    this.columnsVisibleCalculator = this.createColumnsCalculator(true);
  }

  areAllProposedVisibleRowsAlreadyRendered(proposedRowsVisibleCalculator) {
    if (this.rowsVisibleCalculator) {
      if (proposedRowsVisibleCalculator.startRow < this.rowsRenderCalculator.startRow || proposedRowsVisibleCalculator.startRow === this.rowsRenderCalculator.startRow && proposedRowsVisibleCalculator.startRow > 0) {
        return false;
      } else if (proposedRowsVisibleCalculator.endRow > this.rowsRenderCalculator.endRow || proposedRowsVisibleCalculator.endRow === this.rowsRenderCalculator.endRow && proposedRowsVisibleCalculator.endRow < this.wot.getSetting('totalRows') - 1) {
        return false;
      }
      return true;
    }

    return false;
  }

  areAllProposedVisibleColumnsAlreadyRendered(proposedColumnsVisibleCalculator) {
    if (this.columnsVisibleCalculator) {
      if (proposedColumnsVisibleCalculator.startColumn < this.columnsRenderCalculator.startColumn || proposedColumnsVisibleCalculator.startColumn === this.columnsRenderCalculator.startColumn && proposedColumnsVisibleCalculator.startColumn > 0) {
        return false;
      } else if (proposedColumnsVisibleCalculator.endColumn > this.columnsRenderCalculator.endColumn || proposedColumnsVisibleCalculator.endColumn === this.columnsRenderCalculator.endColumn && proposedColumnsVisibleCalculator.endColumn < this.wot.getSetting('totalColumns') - 1) {
        return false;
      }
      return true;
    }

    return false;
  }

  resetHasOversizedColumnHeadersMarked() {
    (0, _object.objectEach)(this.hasOversizedColumnHeadersMarked, (value, key, object) => {
      object[key] = void 0;
    });
  }
}

exports.default = Viewport;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

const MIXIN_NAME = 'arrayMapper';

const arrayMapper = {
  _arrayMap: [],

  getValueByIndex(index) {
    let value;

    return (value = this._arrayMap[index]) === void 0 ? null : value;
  },

  getIndexByValue(value) {
    let index;

    return (index = this._arrayMap.indexOf(value)) === -1 ? null : index;
  },

  insertItems(index) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    let newIndex = (0, _array.arrayMax)(this._arrayMap) + 1;
    let addedItems = [];

    (0, _number.rangeEach)(amount - 1, count => {
      addedItems.push(this._arrayMap.splice(index + count, 0, newIndex + count));
    });

    return addedItems;
  },

  removeItems(index) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    let removedItems = [];

    if (Array.isArray(index)) {
      let mapCopy = [].concat(this._arrayMap);

      index.sort((a, b) => b - a);

      removedItems = (0, _array.arrayReduce)(index, (acc, item) => {
        this._arrayMap.splice(item, 1);

        return acc.concat(mapCopy.slice(item, item + 1));
      }, []);
    } else {
      removedItems = this._arrayMap.splice(index, amount);
    }

    return removedItems;
  },

  unshiftItems(index) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    let removedItems = this.removeItems(index, amount);

    function countRowShift(logicalRow) {
      return (0, _array.arrayReduce)(removedItems, (count, removedLogicalRow) => {
        if (logicalRow > removedLogicalRow) {
          count++;
        }

        return count;
      }, 0);
    }

    this._arrayMap = (0, _array.arrayMap)(this._arrayMap, (logicalRow, physicalRow) => {
      let rowShift = countRowShift(logicalRow);

      if (rowShift) {
        logicalRow -= rowShift;
      }

      return logicalRow;
    });
  },

  shiftItems(index) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    this._arrayMap = (0, _array.arrayMap)(this._arrayMap, row => {
      if (row >= index) {
        row += amount;
      }

      return row;
    });

    (0, _number.rangeEach)(amount - 1, count => {
      this._arrayMap.splice(index + count, 0, index + count);
    });
  },

  clearMap() {
    this._arrayMap.length = 0;
  }
};

(0, _object.defineGetter)(arrayMapper, 'MIXIN_NAME', MIXIN_NAME, {
  writable: false,
  enumerable: false
});

exports.default = arrayMapper;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = separatorItem;
const KEY = exports.KEY = '---------';

function separatorItem() {
  return {
    name: KEY
  };
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _number = __webpack_require__(3);

const STATE_INITIALIZED = 0;
const STATE_BUILT = 1;
const STATE_APPENDED = 2;
const UNIT = 'px';

class BaseUI {
  constructor(hotInstance) {
    this.hot = hotInstance;

    this._element = null;

    this.state = STATE_INITIALIZED;
  }

  appendTo(wrapper) {
    wrapper.appendChild(this._element);

    this.state = STATE_APPENDED;
  }

  build() {
    this._element = document.createElement('div');
    this.state = STATE_BUILT;
  }

  destroy() {
    if (this.isAppended()) {
      this._element.parentElement.removeChild(this._element);
    }

    this._element = null;
    this.state = STATE_INITIALIZED;
  }

  isAppended() {
    return this.state === STATE_APPENDED;
  }

  isBuilt() {
    return this.state >= STATE_BUILT;
  }

  setPosition(top, left) {
    if ((0, _number.isNumeric)(top)) {
      this._element.style.top = top + UNIT;
    }
    if ((0, _number.isNumeric)(left)) {
      this._element.style.left = left + UNIT;
    }
  }

  getPosition() {
    return {
      top: this._element.style.top ? parseInt(this._element.style.top, 10) : 0,
      left: this._element.style.left ? parseInt(this._element.style.left, 10) : 0
    };
  }

  setSize(width, height) {
    if ((0, _number.isNumeric)(width)) {
      this._element.style.width = width + UNIT;
    }
    if ((0, _number.isNumeric)(height)) {
      this._element.style.height = height + UNIT;
    }
  }

  getSize() {
    return {
      width: this._element.style.width ? parseInt(this._element.style.width, 10) : 0,
      height: this._element.style.height ? parseInt(this._element.style.height, 10) : 0
    };
  }

  setOffset(top, left) {
    if ((0, _number.isNumeric)(top)) {
      this._element.style.marginTop = top + UNIT;
    }
    if ((0, _number.isNumeric)(left)) {
      this._element.style.marginLeft = left + UNIT;
    }
  }

  getOffset() {
    return {
      top: this._element.style.marginTop ? parseInt(this._element.style.marginTop, 10) : 0,
      left: this._element.style.marginLeft ? parseInt(this._element.style.marginLeft, 10) : 0
    };
  }
}

exports.default = BaseUI;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
const STATE_INITIALIZED = 0;
const STATE_BUILT = 1;
const STATE_APPENDED = 2;
const UNIT = 'px';

class BaseUI {
  constructor(hotInstance) {
    this.hot = hotInstance;

    this._element = null;

    this.state = STATE_INITIALIZED;
  }

  appendTo(wrapper) {
    wrapper.appendChild(this._element);

    this.state = STATE_APPENDED;
  }

  build() {
    this._element = document.createElement('div');
    this.state = STATE_BUILT;
  }

  destroy() {
    if (this.isAppended()) {
      this._element.parentElement.removeChild(this._element);
    }

    this._element = null;
    this.state = STATE_INITIALIZED;
  }

  isAppended() {
    return this.state === STATE_APPENDED;
  }

  isBuilt() {
    return this.state >= STATE_BUILT;
  }

  setPosition(top, left) {
    if (top) {
      this._element.style.top = top + UNIT;
    }
    if (left) {
      this._element.style.left = left + UNIT;
    }
  }

  getPosition() {
    return {
      top: this._element.style.top ? parseInt(this._element.style.top, 10) : 0,
      left: this._element.style.left ? parseInt(this._element.style.left, 10) : 0
    };
  }

  setSize(width, height) {
    if (width) {
      this._element.style.width = width + UNIT;
    }
    if (height) {
      this._element.style.height = height + UNIT;
    }
  }

  getSize() {
    return {
      width: this._element.style.width ? parseInt(this._element.style.width, 10) : 0,
      height: this._element.style.height ? parseInt(this._element.style.height, 10) : 0
    };
  }

  setOffset(top, left) {
    if (top) {
      this._element.style.marginTop = top + UNIT;
    }
    if (left) {
      this._element.style.marginLeft = left + UNIT;
    }
  }

  getOffset() {
    return {
      top: this._element.style.marginTop ? parseInt(this._element.style.marginTop, 10) : 0,
      left: this._element.style.marginLeft ? parseInt(this._element.style.marginLeft, 10) : 0
    };
  }
}

exports.default = BaseUI;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RecordTranslator = undefined;
exports.registerIdentity = registerIdentity;
exports.getTranslator = getTranslator;

var _core = __webpack_require__(23);

var _core2 = _interopRequireDefault(_core);

var _object = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RecordTranslator {
  constructor(hot) {
    this.hot = hot;
  }

  toVisualRow(row) {
    return this.hot.runHooks('unmodifyRow', row);
  }

  toVisualColumn(column) {
    return this.hot.runHooks('unmodifyCol', column);
  }

  toVisual(row, column) {
    let result;

    if ((0, _object.isObject)(row)) {
      result = {
        row: this.toVisualRow(row.row),
        column: this.toVisualColumn(row.column)
      };
    } else {
      result = [this.toVisualRow(row), this.toVisualColumn(column)];
    }

    return result;
  }

  toPhysicalRow(row) {
    return this.hot.runHooks('modifyRow', row);
  }

  toPhysicalColumn(column) {
    return this.hot.runHooks('modifyCol', column);
  }

  toPhysical(row, column) {
    let result;

    if ((0, _object.isObject)(row)) {
      result = {
        row: this.toPhysicalRow(row.row),
        column: this.toPhysicalColumn(row.column)
      };
    } else {
      result = [this.toPhysicalRow(row), this.toPhysicalColumn(column)];
    }

    return result;
  }
}

exports.RecordTranslator = RecordTranslator;


const identities = new WeakMap();
const translatorSingletons = new WeakMap();

function registerIdentity(identity, hot) {
  identities.set(identity, hot);
}

function getTranslator(identity) {
  let singleton;

  if (!(identity instanceof _core2.default)) {
    if (!identities.has(identity)) {
      throw Error('Record translator was not registered for this object identity');
    }
    identity = identities.get(identity);
  }
  if (translatorSingletons.has(identity)) {
    singleton = translatorSingletons.get(identity);
  } else {
    singleton = new RecordTranslator(identity);
    translatorSingletons.set(identity, singleton);
  }

  return singleton;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

var _mixed = __webpack_require__(12);

class SamplesGenerator {
  static get SAMPLE_COUNT() {
    return 3;
  }

  constructor(dataFactory) {
    this.samples = null;

    this.dataFactory = dataFactory;

    this.customSampleCount = null;

    this.allowDuplicates = false;
  }

  getSampleCount() {
    if (this.customSampleCount) {
      return this.customSampleCount;
    }
    return SamplesGenerator.SAMPLE_COUNT;
  }
  setSampleCount(sampleCount) {
    this.customSampleCount = sampleCount;
  }

  setAllowDuplicates(allowDuplicates) {
    this.allowDuplicates = allowDuplicates;
  }

  generateRowSamples(rowRange, colRange) {
    return this.generateSamples('row', colRange, rowRange);
  }

  generateColumnSamples(colRange, rowRange) {
    return this.generateSamples('col', rowRange, colRange);
  }

  generateSamples(type, range, specifierRange) {
    const samples = new Map();

    if (typeof specifierRange === 'number') {
      specifierRange = { from: specifierRange, to: specifierRange };
    }
    (0, _number.rangeEach)(specifierRange.from, specifierRange.to, index => {
      const sample = this.generateSample(type, range, index);

      samples.set(index, sample);
    });

    return samples;
  }

  generateSample(type, range, specifierValue) {
    const samples = new Map();
    let sampledValues = [];
    let length;

    (0, _number.rangeEach)(range.from, range.to, index => {
      let value;

      if (type === 'row') {
        value = this.dataFactory(specifierValue, index);
      } else if (type === 'col') {
        value = this.dataFactory(index, specifierValue);
      } else {
        throw new Error('Unsupported sample type');
      }

      if ((0, _object.isObject)(value)) {
        length = Object.keys(value).length;
      } else if (Array.isArray(value)) {
        length = value.length;
      } else {
        length = (0, _mixed.stringify)(value).length;
      }

      if (!samples.has(length)) {
        samples.set(length, {
          needed: this.getSampleCount(),
          strings: []
        });
      }
      let sample = samples.get(length);

      if (sample.needed) {
        let duplicate = sampledValues.indexOf(value) > -1;

        if (!duplicate || this.allowDuplicates) {
          let computedKey = type === 'row' ? 'col' : 'row';

          sample.strings.push({ value, [computedKey]: index });
          sampledValues.push(value);
          sample.needed--;
        }
      }
    });

    return samples;
  }
}

exports.default = SamplesGenerator;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getNormalizedDate = getNormalizedDate;
function getNormalizedDate(dateString) {
  let nativeDate = new Date(dateString);

  if (!isNaN(new Date(`${dateString}T00:00`).getDate())) {
    return new Date(nativeDate.getTime() + nativeDate.getTimezoneOffset() * 60000);
  }

  return nativeDate;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = jQueryWrapper;
function jQueryWrapper(Handsontable) {
  const jQuery = typeof window === 'undefined' ? false : window.jQuery;

  if (!jQuery) {
    return;
  }

  jQuery.fn.handsontable = function (action) {
    const $this = this.first();
    let instance = $this.data('handsontable');

    if (typeof action !== 'string') {
      const userSettings = action || {};

      if (instance) {
        instance.updateSettings(userSettings);
      } else {
        instance = new Handsontable.Core($this[0], userSettings);
        $this.data('handsontable', instance);
        instance.init();
      }

      return $this;
    }

    const args = [];
    let output;

    if (arguments.length > 1) {
      for (let i = 1, ilen = arguments.length; i < ilen; i++) {
        args.push(arguments[i]);
      }
    }

    if (instance) {
      if (typeof instance[action] !== 'undefined') {
        output = instance[action].apply(instance, args);

        if (action === 'destroy') {
          $this.removeData();
        }
      } else {
        throw new Error('Handsontable do not provide action: ' + action);
      }
    }

    return output;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Base = exports.UndoRedo = exports.MergeCells = exports.ManualRowMove = exports.ManualColumnResize = exports.ManualColumnMove = exports.CopyPaste = exports.ContextMenu = exports.AutoRowSize = exports.AutoColumnSize = undefined;

var _autoColumnSize = __webpack_require__(72);

var _autoColumnSize2 = _interopRequireDefault(_autoColumnSize);

var _autoRowSize = __webpack_require__(73);

var _autoRowSize2 = _interopRequireDefault(_autoRowSize);

var _contextMenu = __webpack_require__(75);

var _contextMenu2 = _interopRequireDefault(_contextMenu);

var _copyPaste = __webpack_require__(87);

var _copyPaste2 = _interopRequireDefault(_copyPaste);

var _manualColumnMove = __webpack_require__(90);

var _manualColumnMove2 = _interopRequireDefault(_manualColumnMove);

var _manualColumnResize = __webpack_require__(93);

var _manualColumnResize2 = _interopRequireDefault(_manualColumnResize);

var _manualRowMove = __webpack_require__(94);

var _manualRowMove2 = _interopRequireDefault(_manualRowMove);

var _mergeCells = __webpack_require__(98);

var _mergeCells2 = _interopRequireDefault(_mergeCells);

var _undoRedo = __webpack_require__(99);

var _undoRedo2 = _interopRequireDefault(_undoRedo);

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AutoColumnSize = _autoColumnSize2.default;
exports.AutoRowSize = _autoRowSize2.default;
exports.ContextMenu = _contextMenu2.default;
exports.CopyPaste = _copyPaste2.default;
exports.ManualColumnMove = _manualColumnMove2.default;
exports.ManualColumnResize = _manualColumnResize2.default;
exports.ManualRowMove = _manualRowMove2.default;
exports.MergeCells = _mergeCells2.default;
exports.UndoRedo = _undoRedo2.default;
exports.Base = _base2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function autoResize() {
  var defaults = {
    minHeight: 200,
    maxHeight: 300,
    minWidth: 100,
    maxWidth: 300
  },
      el,
      body = document.body,
      text = document.createTextNode(''),
      span = document.createElement('SPAN'),
      observe = function observe(element, event, handler) {
    if (element.attachEvent) {
      element.attachEvent('on' + event, handler);
    } else {
      element.addEventListener(event, handler, false);
    }
  },
      _unObserve = function _unObserve(element, event, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(event, handler, false);
    } else {
      element.detachEvent('on' + event, handler);
    }
  },
      resize = function resize(newChar) {
    var width, scrollHeight;

    if (!newChar) {
      newChar = "";
    } else if (!/^[a-zA-Z \.,\\\/\|0-9]$/.test(newChar)) {
      newChar = ".";
    }

    if (text.textContent !== void 0) {
      text.textContent = el.value + newChar;
    } else {
      text.data = el.value + newChar;
    }
    span.style.fontSize = getComputedStyle(el).fontSize;
    span.style.fontFamily = getComputedStyle(el).fontFamily;
    span.style.whiteSpace = "pre";

    body.appendChild(span);
    width = span.clientWidth + 2;
    body.removeChild(span);

    el.style.height = defaults.minHeight + 'px';

    if (defaults.minWidth > width) {
      el.style.width = defaults.minWidth + 'px';
    } else if (width > defaults.maxWidth) {
      el.style.width = defaults.maxWidth + 'px';
    } else {
      el.style.width = width + 'px';
    }
    scrollHeight = el.scrollHeight ? el.scrollHeight - 1 : 0;

    if (defaults.minHeight > scrollHeight) {
      el.style.height = defaults.minHeight + 'px';
    } else if (defaults.maxHeight < scrollHeight) {
      el.style.height = defaults.maxHeight + 'px';
      el.style.overflowY = 'visible';
    } else {
      el.style.height = scrollHeight + 'px';
    }
  },
      delayedResize = function delayedResize() {
    window.setTimeout(resize, 0);
  },
      extendDefaults = function extendDefaults(config) {

    if (config && config.minHeight) {
      if (config.minHeight == 'inherit') {
        defaults.minHeight = el.clientHeight;
      } else {
        var minHeight = parseInt(config.minHeight);
        if (!isNaN(minHeight)) {
          defaults.minHeight = minHeight;
        }
      }
    }

    if (config && config.maxHeight) {
      if (config.maxHeight == 'inherit') {
        defaults.maxHeight = el.clientHeight;
      } else {
        var maxHeight = parseInt(config.maxHeight);
        if (!isNaN(maxHeight)) {
          defaults.maxHeight = maxHeight;
        }
      }
    }

    if (config && config.minWidth) {
      if (config.minWidth == 'inherit') {
        defaults.minWidth = el.clientWidth;
      } else {
        var minWidth = parseInt(config.minWidth);
        if (!isNaN(minWidth)) {
          defaults.minWidth = minWidth;
        }
      }
    }

    if (config && config.maxWidth) {
      if (config.maxWidth == 'inherit') {
        defaults.maxWidth = el.clientWidth;
      } else {
        var maxWidth = parseInt(config.maxWidth);
        if (!isNaN(maxWidth)) {
          defaults.maxWidth = maxWidth;
        }
      }
    }

    if (!span.firstChild) {
      span.className = "autoResize";
      span.style.display = 'inline-block';
      span.appendChild(text);
    }
  },
      _init = function _init(el_, config, doObserve) {
    el = el_;
    extendDefaults(config);

    if (el.nodeName == 'TEXTAREA') {

      el.style.resize = 'none';
      el.style.overflowY = '';
      el.style.height = defaults.minHeight + 'px';
      el.style.minWidth = defaults.minWidth + 'px';
      el.style.maxWidth = defaults.maxWidth + 'px';
      el.style.overflowY = 'hidden';
    }

    if (doObserve) {
      observe(el, 'change', resize);
      observe(el, 'cut', delayedResize);
      observe(el, 'paste', delayedResize);
      observe(el, 'drop', delayedResize);
      observe(el, 'keydown', delayedResize);
      observe(el, 'focus', resize);
    }

    resize();
  };

  function getComputedStyle(element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element);
  }

  return {
    init: function init(el_, config, doObserve) {
      _init(el_, config, doObserve);
    },
    unObserve: function unObserve() {
      _unObserve(el, 'change', resize);
      _unObserve(el, 'cut', delayedResize);
      _unObserve(el, 'paste', delayedResize);
      _unObserve(el, 'drop', delayedResize);
      _unObserve(el, 'keydown', delayedResize);
      _unObserve(el, 'focus', resize);
    },
    resize: resize
  };
}

if (true) {
  module.exports = autoResize;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DebugOverlay extends _base2.default {
  constructor(wotInstance) {
    super(wotInstance);

    this.clone = this.makeClone(_base2.default.CLONE_DEBUG);
    this.clone.wtTable.holder.style.opacity = 0.4;
    this.clone.wtTable.holder.style.textShadow = '0 0 2px #ff0000';

    (0, _element.addClass)(this.clone.wtTable.holder.parentNode, 'wtDebugVisible');
  }
}

_base2.default.registerOverlay(_base2.default.CLONE_DEBUG, DebugOverlay);

exports.default = DebugOverlay;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeftOverlay extends _base2.default {
  constructor(wotInstance) {
    super(wotInstance);
    this.clone = this.makeClone(_base2.default.CLONE_LEFT);
  }

  shouldBeRendered() {
    return !!(this.wot.getSetting('fixedColumnsLeft') || this.wot.getSetting('rowHeaders').length);
  }

  resetFixedPosition() {
    if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
      return;
    }
    let overlayRoot = this.clone.wtTable.holder.parentNode;
    let headerPosition = 0;
    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (this.trimmingContainer === window && (!preventOverflow || preventOverflow !== 'horizontal')) {
      let box = this.wot.wtTable.hider.getBoundingClientRect();
      let left = Math.ceil(box.left);
      let right = Math.ceil(box.right);
      let finalLeft;
      let finalTop;

      finalTop = this.wot.wtTable.hider.style.top;
      finalTop = finalTop === '' ? 0 : finalTop;

      if (left < 0 && right - overlayRoot.offsetWidth > 0) {
        finalLeft = -left;
      } else {
        finalLeft = 0;
      }
      headerPosition = finalLeft;
      finalLeft += 'px';

      (0, _element.setOverlayPosition)(overlayRoot, finalLeft, finalTop);
    } else {
      headerPosition = this.getScrollPosition();
      (0, _element.resetCssTransform)(overlayRoot);
    }
    this.adjustHeaderBordersPosition(headerPosition);

    this.adjustElementsSize();
  }

  setScrollPosition(pos) {
    if (this.mainTableScrollableElement === window) {
      window.scrollTo(pos, (0, _element.getWindowScrollTop)());
    } else {
      this.mainTableScrollableElement.scrollLeft = pos;
    }
  }

  onScroll() {
    this.wot.getSetting('onScrollVertically');
  }

  sumCellSizes(from, to) {
    let sum = 0;
    let defaultColumnWidth = this.wot.wtSettings.defaultColumnWidth;

    while (from < to) {
      sum += this.wot.wtTable.getStretchedColumnWidth(from) || defaultColumnWidth;
      from++;
    }

    return sum;
  }

  adjustElementsSize() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.updateTrimmingContainer();

    if (this.needFullRender || force) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();

      if (!force) {
        this.areElementSizesAdjusted = true;
      }
    }
  }

  adjustRootElementSize() {
    let masterHolder = this.wot.wtTable.holder;
    let scrollbarHeight = masterHolder.clientHeight === masterHolder.offsetHeight ? 0 : (0, _element.getScrollbarWidth)();
    let overlayRoot = this.clone.wtTable.holder.parentNode;
    let overlayRootStyle = overlayRoot.style;
    let preventOverflow = this.wot.getSetting('preventOverflow');
    let tableWidth;

    if (this.trimmingContainer !== window || preventOverflow === 'vertical') {
      let height = this.wot.wtViewport.getWorkspaceHeight() - scrollbarHeight;

      height = Math.min(height, (0, _element.innerHeight)(this.wot.wtTable.wtRootElement));

      overlayRootStyle.height = `${height}px`;
    } else {
      overlayRootStyle.height = '';
    }

    this.clone.wtTable.holder.style.height = overlayRootStyle.height;

    tableWidth = (0, _element.outerWidth)(this.clone.wtTable.TABLE);
    overlayRootStyle.width = `${tableWidth === 0 ? tableWidth : tableWidth + 4}px`;
  }

  adjustRootChildrenSize() {
    let scrollbarWidth = (0, _element.getScrollbarWidth)();

    this.clone.wtTable.hider.style.height = this.hider.style.height;
    this.clone.wtTable.holder.style.height = this.clone.wtTable.holder.parentNode.style.height;

    if (scrollbarWidth === 0) {
      scrollbarWidth = 30;
    }
    this.clone.wtTable.holder.style.width = `${parseInt(this.clone.wtTable.holder.parentNode.style.width, 10) + scrollbarWidth}px`;
  }

  applyToDOM() {
    let total = this.wot.getSetting('totalColumns');

    if (!this.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === 'number') {
      this.spreader.style.left = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
    } else if (total === 0) {
      this.spreader.style.left = '0';
    } else {
      throw new Error('Incorrect value of the columnsRenderCalculator');
    }
    this.spreader.style.right = '';

    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  }

  syncOverlayOffset() {
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === 'number') {
      this.clone.wtTable.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
    } else {
      this.clone.wtTable.spreader.style.top = '';
    }
  }

  scrollTo(sourceCol, beyondRendered) {
    let newX = this.getTableParentOffset();
    let sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    let mainHolder = sourceInstance.wtTable.holder;
    let scrollbarCompensation = 0;

    if (beyondRendered && mainHolder.offsetWidth !== mainHolder.clientWidth) {
      scrollbarCompensation = (0, _element.getScrollbarWidth)();
    }
    if (beyondRendered) {
      newX += this.sumCellSizes(0, sourceCol + 1);
      newX -= this.wot.wtViewport.getViewportWidth();
    } else {
      newX += this.sumCellSizes(this.wot.getSetting('fixedColumnsLeft'), sourceCol);
    }
    newX += scrollbarCompensation;

    this.setScrollPosition(newX);
  }

  getTableParentOffset() {
    let preventOverflow = this.wot.getSetting('preventOverflow');
    let offset = 0;

    if (!preventOverflow && this.trimmingContainer === window) {
      offset = this.wot.wtTable.holderOffset.left;
    }

    return offset;
  }

  getScrollPosition() {
    return (0, _element.getScrollLeft)(this.mainTableScrollableElement);
  }

  adjustHeaderBordersPosition(position) {
    const masterParent = this.wot.wtTable.holder.parentNode;
    const rowHeaders = this.wot.getSetting('rowHeaders');
    const fixedColumnsLeft = this.wot.getSetting('fixedColumnsLeft');
    const totalRows = this.wot.getSetting('totalRows');

    if (totalRows) {
      (0, _element.removeClass)(masterParent, 'emptyRows');
    } else {
      (0, _element.addClass)(masterParent, 'emptyRows');
    }

    if (fixedColumnsLeft && !rowHeaders.length) {
      (0, _element.addClass)(masterParent, 'innerBorderLeft');
    } else if (!fixedColumnsLeft && rowHeaders.length) {
      let previousState = (0, _element.hasClass)(masterParent, 'innerBorderLeft');

      if (position) {
        (0, _element.addClass)(masterParent, 'innerBorderLeft');
      } else {
        (0, _element.removeClass)(masterParent, 'innerBorderLeft');
      }
      if (!previousState && position || previousState && !position) {
        this.wot.wtOverlays.adjustElementsSize();
      }
    }
  }
}

_base2.default.registerOverlay(_base2.default.CLONE_LEFT, LeftOverlay);

exports.default = LeftOverlay;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopOverlay extends _base2.default {
  constructor(wotInstance) {
    super(wotInstance);
    this.clone = this.makeClone(_base2.default.CLONE_TOP);
  }

  shouldBeRendered() {
    return !!(this.wot.getSetting('fixedRowsTop') || this.wot.getSetting('columnHeaders').length);
  }

  resetFixedPosition() {
    if (!this.needFullRender || !this.wot.wtTable.holder.parentNode) {
      return;
    }
    let overlayRoot = this.clone.wtTable.holder.parentNode;
    let headerPosition = 0;
    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (this.trimmingContainer === window && (!preventOverflow || preventOverflow !== 'vertical')) {
      let box = this.wot.wtTable.hider.getBoundingClientRect();
      let top = Math.ceil(box.top);
      let bottom = Math.ceil(box.bottom);
      let finalLeft;
      let finalTop;

      finalLeft = this.wot.wtTable.hider.style.left;
      finalLeft = finalLeft === '' ? 0 : finalLeft;

      if (top < 0 && bottom - overlayRoot.offsetHeight > 0) {
        finalTop = -top;
      } else {
        finalTop = 0;
      }
      headerPosition = finalTop;
      finalTop += 'px';

      (0, _element.setOverlayPosition)(overlayRoot, finalLeft, finalTop);
    } else {
      headerPosition = this.getScrollPosition();
      (0, _element.resetCssTransform)(overlayRoot);
    }

    this.adjustHeaderBordersPosition(headerPosition);

    this.adjustElementsSize();
  }

  setScrollPosition(pos) {
    if (this.mainTableScrollableElement === window) {
      window.scrollTo((0, _element.getWindowScrollLeft)(), pos);
    } else {
      this.mainTableScrollableElement.scrollTop = pos;
    }
  }

  onScroll() {
    this.wot.getSetting('onScrollHorizontally');
  }

  sumCellSizes(from, to) {
    let sum = 0;
    let defaultRowHeight = this.wot.wtSettings.settings.defaultRowHeight;

    while (from < to) {
      let height = this.wot.wtTable.getRowHeight(from);

      sum += height === void 0 ? defaultRowHeight : height;
      from++;
    }

    return sum;
  }

  adjustElementsSize() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.updateTrimmingContainer();

    if (this.needFullRender || force) {
      this.adjustRootElementSize();
      this.adjustRootChildrenSize();

      if (!force) {
        this.areElementSizesAdjusted = true;
      }
    }
  }

  adjustRootElementSize() {
    let masterHolder = this.wot.wtTable.holder;
    let scrollbarWidth = masterHolder.clientWidth === masterHolder.offsetWidth ? 0 : (0, _element.getScrollbarWidth)();
    let overlayRoot = this.clone.wtTable.holder.parentNode;
    let overlayRootStyle = overlayRoot.style;
    let preventOverflow = this.wot.getSetting('preventOverflow');
    let tableHeight;

    if (this.trimmingContainer !== window || preventOverflow === 'horizontal') {
      let width = this.wot.wtViewport.getWorkspaceWidth() - scrollbarWidth;

      width = Math.min(width, (0, _element.innerWidth)(this.wot.wtTable.wtRootElement));

      overlayRootStyle.width = `${width}px`;
    } else {
      overlayRootStyle.width = '';
    }

    this.clone.wtTable.holder.style.width = overlayRootStyle.width;

    tableHeight = (0, _element.outerHeight)(this.clone.wtTable.TABLE);
    overlayRootStyle.height = `${tableHeight === 0 ? tableHeight : tableHeight + 4}px`;
  }

  adjustRootChildrenSize() {
    let scrollbarWidth = (0, _element.getScrollbarWidth)();

    this.clone.wtTable.hider.style.width = this.hider.style.width;
    this.clone.wtTable.holder.style.width = this.clone.wtTable.holder.parentNode.style.width;

    if (scrollbarWidth === 0) {
      scrollbarWidth = 30;
    }
    this.clone.wtTable.holder.style.height = `${parseInt(this.clone.wtTable.holder.parentNode.style.height, 10) + scrollbarWidth}px`;
  }

  applyToDOM() {
    let total = this.wot.getSetting('totalRows');

    if (!this.areElementSizesAdjusted) {
      this.adjustElementsSize();
    }
    if (typeof this.wot.wtViewport.rowsRenderCalculator.startPosition === 'number') {
      this.spreader.style.top = `${this.wot.wtViewport.rowsRenderCalculator.startPosition}px`;
    } else if (total === 0) {
      this.spreader.style.top = '0';
    } else {
      throw new Error('Incorrect value of the rowsRenderCalculator');
    }
    this.spreader.style.bottom = '';

    if (this.needFullRender) {
      this.syncOverlayOffset();
    }
  }

  syncOverlayOffset() {
    if (typeof this.wot.wtViewport.columnsRenderCalculator.startPosition === 'number') {
      this.clone.wtTable.spreader.style.left = `${this.wot.wtViewport.columnsRenderCalculator.startPosition}px`;
    } else {
      this.clone.wtTable.spreader.style.left = '';
    }
  }

  scrollTo(sourceRow, bottomEdge) {
    let newY = this.getTableParentOffset();
    let sourceInstance = this.wot.cloneSource ? this.wot.cloneSource : this.wot;
    let mainHolder = sourceInstance.wtTable.holder;
    let scrollbarCompensation = 0;

    if (bottomEdge && mainHolder.offsetHeight !== mainHolder.clientHeight) {
      scrollbarCompensation = (0, _element.getScrollbarWidth)();
    }

    if (bottomEdge) {
      let fixedRowsBottom = this.wot.getSetting('fixedRowsBottom');
      let fixedRowsTop = this.wot.getSetting('fixedRowsTop');
      let totalRows = this.wot.getSetting('totalRows');

      newY += this.sumCellSizes(0, sourceRow + 1);
      newY -= this.wot.wtViewport.getViewportHeight() - this.sumCellSizes(totalRows - fixedRowsBottom, totalRows);

      newY += 1;
    } else {
      newY += this.sumCellSizes(this.wot.getSetting('fixedRowsTop'), sourceRow);
    }
    newY += scrollbarCompensation;

    this.setScrollPosition(newY);
  }

  getTableParentOffset() {
    if (this.mainTableScrollableElement === window) {
      return this.wot.wtTable.holderOffset.top;
    }
    return 0;
  }

  getScrollPosition() {
    return (0, _element.getScrollTop)(this.mainTableScrollableElement);
  }

  redrawSelectionBorders(selection) {
    if (selection && selection.cellRange) {
      const border = selection.getBorder(this.wot);

      if (border) {
        const corners = selection.getCorners();
        border.disappear();
        border.appear(corners);
      }
    }
  }

  redrawAllSelectionsBorders() {
    const selections = this.wot.selections;

    this.redrawSelectionBorders(selections.current);
    this.redrawSelectionBorders(selections.area);
    this.redrawSelectionBorders(selections.fill);
    this.wot.wtTable.wot.wtOverlays.leftOverlay.refresh();
  }

  adjustHeaderBordersPosition(position) {
    const masterParent = this.wot.wtTable.holder.parentNode;
    const totalColumns = this.wot.getSetting('totalColumns');

    if (totalColumns) {
      (0, _element.removeClass)(masterParent, 'emptyColumns');
    } else {
      (0, _element.addClass)(masterParent, 'emptyColumns');
    }

    if (this.wot.getSetting('fixedRowsTop') === 0 && this.wot.getSetting('columnHeaders').length > 0) {
      let previousState = (0, _element.hasClass)(masterParent, 'innerBorderTop');

      if (position || this.wot.getSetting('totalRows') === 0) {
        (0, _element.addClass)(masterParent, 'innerBorderTop');
      } else {
        (0, _element.removeClass)(masterParent, 'innerBorderTop');
      }

      if (!previousState && position || previousState && !position) {
        this.wot.wtOverlays.adjustElementsSize();

        this.redrawAllSelectionsBorders();
      }
    }

    if (this.wot.getSetting('rowHeaders').length === 0) {
      let secondHeaderCell = this.clone.wtTable.THEAD.querySelectorAll('th:nth-of-type(2)');

      if (secondHeaderCell) {
        for (let i = 0; i < secondHeaderCell.length; i++) {
          secondHeaderCell[i].style['border-left-width'] = 0;
        }
      }
    }
  }
}

_base2.default.registerOverlay(_base2.default.CLONE_TOP, TopOverlay);

exports.default = TopOverlay;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopLeftCornerOverlay extends _base2.default {
  constructor(wotInstance) {
    super(wotInstance);
    this.clone = this.makeClone(_base2.default.CLONE_TOP_LEFT_CORNER);
  }

  shouldBeRendered() {
    return !!((this.wot.getSetting('fixedRowsTop') || this.wot.getSetting('columnHeaders').length) && (this.wot.getSetting('fixedColumnsLeft') || this.wot.getSetting('rowHeaders').length));
  }

  resetFixedPosition() {
    this.updateTrimmingContainer();

    if (!this.wot.wtTable.holder.parentNode) {
      return;
    }
    let overlayRoot = this.clone.wtTable.holder.parentNode;
    let tableHeight = (0, _element.outerHeight)(this.clone.wtTable.TABLE);
    let tableWidth = (0, _element.outerWidth)(this.clone.wtTable.TABLE);
    let preventOverflow = this.wot.getSetting('preventOverflow');

    if (this.trimmingContainer === window) {
      let box = this.wot.wtTable.hider.getBoundingClientRect();
      let top = Math.ceil(box.top);
      let left = Math.ceil(box.left);
      let bottom = Math.ceil(box.bottom);
      let right = Math.ceil(box.right);
      let finalLeft = '0';
      let finalTop = '0';

      if (!preventOverflow || preventOverflow === 'vertical') {
        if (left < 0 && right - overlayRoot.offsetWidth > 0) {
          finalLeft = `${-left}px`;
        }
      }

      if (!preventOverflow || preventOverflow === 'horizontal') {
        if (top < 0 && bottom - overlayRoot.offsetHeight > 0) {
          finalTop = `${-top}px`;
        }
      }
      (0, _element.setOverlayPosition)(overlayRoot, finalLeft, finalTop);
    } else {
      (0, _element.resetCssTransform)(overlayRoot);
    }
    overlayRoot.style.height = `${tableHeight === 0 ? tableHeight : tableHeight + 4}px`;
    overlayRoot.style.width = `${tableWidth === 0 ? tableWidth : tableWidth + 4}px`;
  }
}

_base2.default.registerOverlay(_base2.default.CLONE_TOP_LEFT_CORNER, TopLeftCornerOverlay);

exports.default = TopLeftCornerOverlay;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _border = __webpack_require__(34);

var _border2 = _interopRequireDefault(_border);

var _coords = __webpack_require__(19);

var _coords2 = _interopRequireDefault(_coords);

var _range = __webpack_require__(28);

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Selection {
  constructor(settings, cellRange) {
    this.settings = settings;
    this.cellRange = cellRange || null;
    this.instanceBorders = {};
  }

  getBorder(wotInstance) {
    if (this.instanceBorders[wotInstance.guid]) {
      return this.instanceBorders[wotInstance.guid];
    }

    this.instanceBorders[wotInstance.guid] = new _border2.default(wotInstance, this.settings);
  }

  isEmpty() {
    return this.cellRange === null;
  }

  add(coords) {
    if (this.isEmpty()) {
      this.cellRange = new _range2.default(coords, coords, coords);
    } else {
      this.cellRange.expand(coords);
    }
  }

  replace(oldCoords, newCoords) {
    if (!this.isEmpty()) {
      if (this.cellRange.from.isEqual(oldCoords)) {
        this.cellRange.from = newCoords;

        return true;
      }
      if (this.cellRange.to.isEqual(oldCoords)) {
        this.cellRange.to = newCoords;

        return true;
      }
    }

    return false;
  }

  clear() {
    this.cellRange = null;
  }

  getCorners() {
    let topLeft = this.cellRange.getTopLeftCorner();
    let bottomRight = this.cellRange.getBottomRightCorner();

    return [topLeft.row, topLeft.col, bottomRight.row, bottomRight.col];
  }

  addClassAtCoords(wotInstance, sourceRow, sourceColumn, className) {
    let TD = wotInstance.wtTable.getCell(new _coords2.default(sourceRow, sourceColumn));

    if (typeof TD === 'object') {
      (0, _element.addClass)(TD, className);
    }
  }

  draw(wotInstance) {
    if (this.isEmpty()) {
      if (this.settings.border) {
        let border = this.getBorder(wotInstance);

        if (border) {
          border.disappear();
        }
      }

      return;
    }
    let renderedRows = wotInstance.wtTable.getRenderedRowsCount();
    let renderedColumns = wotInstance.wtTable.getRenderedColumnsCount();
    let corners = this.getCorners();
    let sourceRow, sourceCol, TH;

    for (let column = 0; column < renderedColumns; column++) {
      sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(column);

      if (sourceCol >= corners[1] && sourceCol <= corners[3]) {
        TH = wotInstance.wtTable.getColumnHeader(sourceCol);

        if (TH) {
          let newClasses = [];

          if (this.settings.highlightHeaderClassName) {
            newClasses.push(this.settings.highlightHeaderClassName);
          }

          if (this.settings.highlightColumnClassName) {
            newClasses.push(this.settings.highlightColumnClassName);
          }

          (0, _element.addClass)(TH, newClasses);
        }
      }
    }

    for (let row = 0; row < renderedRows; row++) {
      sourceRow = wotInstance.wtTable.rowFilter.renderedToSource(row);

      if (sourceRow >= corners[0] && sourceRow <= corners[2]) {
        TH = wotInstance.wtTable.getRowHeader(sourceRow);

        if (TH) {
          let newClasses = [];

          if (this.settings.highlightHeaderClassName) {
            newClasses.push(this.settings.highlightHeaderClassName);
          }

          if (this.settings.highlightRowClassName) {
            newClasses.push(this.settings.highlightRowClassName);
          }

          (0, _element.addClass)(TH, newClasses);
        }
      }

      for (let column = 0; column < renderedColumns; column++) {
        sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(column);

        if (sourceRow >= corners[0] && sourceRow <= corners[2] && sourceCol >= corners[1] && sourceCol <= corners[3]) {
          if (this.settings.className) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.className);
          }
        } else if (sourceRow >= corners[0] && sourceRow <= corners[2]) {
          if (this.settings.highlightRowClassName) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.highlightRowClassName);
          }
        } else if (sourceCol >= corners[1] && sourceCol <= corners[3]) {
          if (this.settings.highlightColumnClassName) {
            this.addClassAtCoords(wotInstance, sourceRow, sourceCol, this.settings.highlightColumnClassName);
          }
        }
      }
    }
    wotInstance.getSetting('onBeforeDrawBorders', corners, this.settings.className);

    if (this.settings.border) {
      let border = this.getBorder(wotInstance);

      if (border) {
        border.appear(corners);
      }
    }
  }
}

exports.default = Selection;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _browser = __webpack_require__(9);

var _editors = __webpack_require__(20);

var _renderers = __webpack_require__(18);

const CELL_TYPE = 'text';

exports.default = {
  editor: (0, _browser.isMobileBrowser)() ? (0, _editors.getEditor)('mobile') : (0, _editors.getEditor)(CELL_TYPE),
  renderer: (0, _renderers.getRenderer)(CELL_TYPE)
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SheetClip = __webpack_require__(33);

var _SheetClip2 = _interopRequireDefault(_SheetClip);

var _data = __webpack_require__(24);

var _setting = __webpack_require__(25);

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _interval = __webpack_require__(103);

var _interval2 = _interopRequireDefault(_interval);

var _number = __webpack_require__(3);

var _multiMap = __webpack_require__(71);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataMap(instance, priv, GridSettings) {
  this.instance = instance;
  this.priv = priv;
  this.GridSettings = GridSettings;
  this.dataSource = this.instance.getSettings().data;
  this.cachedLength = null;
  this.skipCache = false;
  this.latestSourceRowsCount = 0;

  if (this.dataSource && this.dataSource[0]) {
    this.duckSchema = this.recursiveDuckSchema(this.dataSource[0]);
  } else {
    this.duckSchema = {};
  }
  this.createMap();
  this.interval = _interval2.default.create(() => this.clearLengthCache(), '15fps');

  this.instance.addHook('skipLengthCache', delay => this.onSkipLengthCache(delay));
  this.onSkipLengthCache(500);
}

DataMap.prototype.DESTINATION_RENDERER = 1;
DataMap.prototype.DESTINATION_CLIPBOARD_GENERATOR = 2;

DataMap.prototype.recursiveDuckSchema = function (object) {
  return (0, _object.duckSchema)(object);
};

DataMap.prototype.recursiveDuckColumns = function (schema, lastCol, parent) {
  var prop, i;
  if (typeof lastCol === 'undefined') {
    lastCol = 0;
    parent = '';
  }
  if (typeof schema === 'object' && !Array.isArray(schema)) {
    for (i in schema) {
      if ((0, _object.hasOwnProperty)(schema, i)) {
        if (schema[i] === null) {
          prop = parent + i;
          this.colToPropCache.push(prop);
          this.propToColCache.set(prop, lastCol);

          lastCol++;
        } else {
          lastCol = this.recursiveDuckColumns(schema[i], lastCol, `${i}.`);
        }
      }
    }
  }

  return lastCol;
};

DataMap.prototype.createMap = function () {
  let i;
  let schema = this.getSchema();

  if (typeof schema === 'undefined') {
    throw new Error('trying to create `columns` definition but you didn\'t provide `schema` nor `data`');
  }

  this.colToPropCache = [];
  this.propToColCache = new _multiMap2.default();

  let columns = this.instance.getSettings().columns;

  if (columns) {
    const maxCols = this.instance.getSettings().maxCols;
    let columnsLen = Math.min(maxCols, columns.length);
    let filteredIndex = 0;
    let columnsAsFunc = false;
    let schemaLen = (0, _object.deepObjectSize)(schema);

    if (typeof columns === 'function') {
      columnsLen = schemaLen > 0 ? schemaLen : this.instance.countSourceCols();
      columnsAsFunc = true;
    }

    for (i = 0; i < columnsLen; i++) {
      let column = columnsAsFunc ? columns(i) : columns[i];

      if ((0, _object.isObject)(column)) {
        if (typeof column.data !== 'undefined') {
          let index = columnsAsFunc ? filteredIndex : i;
          this.colToPropCache[index] = column.data;
          this.propToColCache.set(column.data, index);
        }

        filteredIndex++;
      }
    }
  } else {
    this.recursiveDuckColumns(schema);
  }
};

DataMap.prototype.colToProp = function (col) {
  col = this.instance.runHooks('modifyCol', col);

  if (!isNaN(col) && this.colToPropCache && typeof this.colToPropCache[col] !== 'undefined') {
    return this.colToPropCache[col];
  }

  return col;
};

DataMap.prototype.propToCol = function (prop) {
  var col;

  if (typeof this.propToColCache.get(prop) === 'undefined') {
    col = prop;
  } else {
    col = this.propToColCache.get(prop);
  }
  col = this.instance.runHooks('unmodifyCol', col);

  return col;
};

DataMap.prototype.getSchema = function () {
  var schema = this.instance.getSettings().dataSchema;

  if (schema) {
    if (typeof schema === 'function') {
      return schema();
    }
    return schema;
  }

  return this.duckSchema;
};

DataMap.prototype.createRow = function (index, amount, source) {
  var row,
      colCount = this.instance.countCols(),
      numberOfCreatedRows = 0,
      currentIndex;

  if (!amount) {
    amount = 1;
  }

  if (typeof index !== 'number' || index >= this.instance.countSourceRows()) {
    index = this.instance.countSourceRows();
  }
  this.instance.runHooks('beforeCreateRow', index, amount, source);

  currentIndex = index;
  var maxRows = this.instance.getSettings().maxRows;

  while (numberOfCreatedRows < amount && this.instance.countSourceRows() < maxRows) {
    if (this.instance.dataType === 'array') {
      if (this.instance.getSettings().dataSchema) {
        row = (0, _object.deepClone)(this.getSchema());
      } else {
        row = [];

        (0, _number.rangeEach)(colCount - 1, () => row.push(null));
      }
    } else if (this.instance.dataType === 'function') {
      row = this.instance.getSettings().dataSchema(index);
    } else {
      row = {};
      (0, _object.deepExtend)(row, this.getSchema());
    }

    if (index === this.instance.countSourceRows()) {
      this.dataSource.push(row);
    } else {
      this.spliceData(index, 0, row);
    }

    numberOfCreatedRows++;
    currentIndex++;
  }

  this.instance.runHooks('afterCreateRow', index, numberOfCreatedRows, source);
  this.instance.forceFullRender = true;

  return numberOfCreatedRows;
};

DataMap.prototype.createCol = function (index, amount, source) {
  if (!this.instance.isColumnModificationAllowed()) {
    throw new Error('Cannot create new column. When data source in an object, ' + 'you can only have as much columns as defined in first data row, data schema or in the \'columns\' setting.' + 'If you want to be able to add new columns, you have to use array datasource.');
  }
  var rlen = this.instance.countSourceRows(),
      data = this.dataSource,
      constructor,
      numberOfCreatedCols = 0,
      currentIndex;

  if (!amount) {
    amount = 1;
  }

  if (typeof index !== 'number' || index >= this.instance.countCols()) {
    index = this.instance.countCols();
  }
  this.instance.runHooks('beforeCreateCol', index, amount, source);

  currentIndex = index;

  var maxCols = this.instance.getSettings().maxCols;
  while (numberOfCreatedCols < amount && this.instance.countCols() < maxCols) {
    constructor = (0, _setting.columnFactory)(this.GridSettings, this.priv.columnsSettingConflicts);

    if (typeof index !== 'number' || index >= this.instance.countCols()) {
      if (rlen > 0) {
        for (var r = 0; r < rlen; r++) {
          if (typeof data[r] === 'undefined') {
            data[r] = [];
          }
          data[r].push(null);
        }
      } else {
        data.push([null]);
      }

      this.priv.columnSettings.push(constructor);
    } else {
      for (let r = 0; r < rlen; r++) {
        data[r].splice(currentIndex, 0, null);
      }

      this.priv.columnSettings.splice(currentIndex, 0, constructor);
    }

    numberOfCreatedCols++;
    currentIndex++;
  }

  this.instance.runHooks('afterCreateCol', index, numberOfCreatedCols, source);
  this.instance.forceFullRender = true;

  return numberOfCreatedCols;
};

DataMap.prototype.removeRow = function (index, amount, source) {
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number') {
    index = -amount;
  }

  amount = this.instance.runHooks('modifyRemovedAmount', amount, index);

  index = (this.instance.countSourceRows() + index) % this.instance.countSourceRows();

  let logicRows = this.visualRowsToPhysical(index, amount);
  let actionWasNotCancelled = this.instance.runHooks('beforeRemoveRow', index, amount, logicRows, source);

  if (actionWasNotCancelled === false) {
    return;
  }

  let data = this.dataSource;
  let newData;

  newData = this.filterData(index, amount);

  if (newData) {
    data.length = 0;
    Array.prototype.push.apply(data, newData);
  }

  this.instance.runHooks('afterRemoveRow', index, amount, logicRows, source);

  this.instance.forceFullRender = true;
};

DataMap.prototype.removeCol = function (index, amount, source) {
  if (this.instance.dataType === 'object' || this.instance.getSettings().columns) {
    throw new Error('cannot remove column with object data source or columns option specified');
  }
  if (!amount) {
    amount = 1;
  }
  if (typeof index !== 'number') {
    index = -amount;
  }

  index = (this.instance.countCols() + index) % this.instance.countCols();

  let logicColumns = this.visualColumnsToPhysical(index, amount);
  let descendingLogicColumns = logicColumns.slice(0).sort((a, b) => b - a);
  let actionWasNotCancelled = this.instance.runHooks('beforeRemoveCol', index, amount, logicColumns, source);

  if (actionWasNotCancelled === false) {
    return;
  }

  let isTableUniform = true;
  let removedColumnsCount = descendingLogicColumns.length;
  let data = this.dataSource;

  for (let c = 0; c < removedColumnsCount; c++) {
    if (isTableUniform && logicColumns[0] !== logicColumns[c] - c) {
      isTableUniform = false;
    }
  }

  if (isTableUniform) {
    for (let r = 0, rlen = this.instance.countSourceRows(); r < rlen; r++) {
      data[r].splice(logicColumns[0], amount);
    }
  } else {
    for (let r = 0, rlen = this.instance.countSourceRows(); r < rlen; r++) {
      for (let c = 0; c < removedColumnsCount; c++) {
        data[r].splice(descendingLogicColumns[c], 1);
      }
    }

    for (let c = 0; c < removedColumnsCount; c++) {
      this.priv.columnSettings.splice(logicColumns[c], 1);
    }
  }

  this.instance.runHooks('afterRemoveCol', index, amount, logicColumns, source);

  this.instance.forceFullRender = true;
};

DataMap.prototype.spliceCol = function (col, index, amount) {
  var elements = arguments.length >= 4 ? [].slice.call(arguments, 3) : [];

  var colData = this.instance.getDataAtCol(col);
  var removed = colData.slice(index, index + amount);
  var after = colData.slice(index + amount);

  (0, _array.extendArray)(elements, after);
  var i = 0;
  while (i < amount) {
    elements.push(null);
    i++;
  }
  (0, _array.to2dArray)(elements);
  this.instance.populateFromArray(index, col, elements, null, null, 'spliceCol');

  return removed;
};

DataMap.prototype.spliceRow = function (row, index, amount) {
  var elements = arguments.length >= 4 ? [].slice.call(arguments, 3) : [];

  var rowData = this.instance.getSourceDataAtRow(row);
  var removed = rowData.slice(index, index + amount);
  var after = rowData.slice(index + amount);

  (0, _array.extendArray)(elements, after);
  var i = 0;
  while (i < amount) {
    elements.push(null);
    i++;
  }
  this.instance.populateFromArray(row, index, [elements], null, null, 'spliceRow');

  return removed;
};

DataMap.prototype.spliceData = function (index, amount, element) {
  let continueSplicing = this.instance.runHooks('beforeDataSplice', index, amount, element);

  if (continueSplicing !== false) {
    this.dataSource.splice(index, amount, element);
  }
};

DataMap.prototype.filterData = function (index, amount) {
  let physicalRows = this.visualRowsToPhysical(index, amount);
  let continueSplicing = this.instance.runHooks('beforeDataFilter', index, amount, physicalRows);

  if (continueSplicing !== false) {
    let newData = this.dataSource.filter((row, index) => physicalRows.indexOf(index) == -1);

    return newData;
  }
};

DataMap.prototype.get = function (row, prop) {
  row = this.instance.runHooks('modifyRow', row);

  let dataRow = this.dataSource[row];

  let modifiedRowData = this.instance.runHooks('modifyRowData', row);

  dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;


  let value = null;

  if (dataRow && dataRow.hasOwnProperty && (0, _object.hasOwnProperty)(dataRow, prop)) {
    value = dataRow[prop];
  } else if (typeof prop === 'string' && prop.indexOf('.') > -1) {
    let sliced = prop.split('.');
    let out = dataRow;

    if (!out) {
      return null;
    }
    for (let i = 0, ilen = sliced.length; i < ilen; i++) {
      out = out[sliced[i]];

      if (typeof out === 'undefined') {
        return null;
      }
    }
    value = out;
  } else if (typeof prop === 'function') {
    value = prop(this.dataSource.slice(row, row + 1)[0]);
  }

  if (this.instance.hasHook('modifyData')) {
    const valueHolder = (0, _object.createObjectPropListener)(value);

    this.instance.runHooks('modifyData', row, this.propToCol(prop), valueHolder, 'get');

    if (valueHolder.isTouched()) {
      value = valueHolder.value;
    }
  }

  return value;
};

var copyableLookup = (0, _data.cellMethodLookupFactory)('copyable', false);

DataMap.prototype.getCopyable = function (row, prop) {
  if (copyableLookup.call(this.instance, row, this.propToCol(prop))) {
    return this.get(row, prop);
  }
  return '';
};

DataMap.prototype.set = function (row, prop, value, source) {
  row = this.instance.runHooks('modifyRow', row, source || 'datamapGet');

  let dataRow = this.dataSource[row];

  let modifiedRowData = this.instance.runHooks('modifyRowData', row);

  dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;


  if (this.instance.hasHook('modifyData')) {
    const valueHolder = (0, _object.createObjectPropListener)(value);

    this.instance.runHooks('modifyData', row, this.propToCol(prop), valueHolder, 'set');

    if (valueHolder.isTouched()) {
      value = valueHolder.value;
    }
  }

  if (dataRow && dataRow.hasOwnProperty && (0, _object.hasOwnProperty)(dataRow, prop)) {
    dataRow[prop] = value;
  } else if (typeof prop === 'string' && prop.indexOf('.') > -1) {
    let sliced = prop.split('.');
    let out = dataRow;
    let i = 0;
    let ilen;

    for (i = 0, ilen = sliced.length - 1; i < ilen; i++) {
      if (typeof out[sliced[i]] === 'undefined') {
        out[sliced[i]] = {};
      }
      out = out[sliced[i]];
    }
    out[sliced[i]] = value;
  } else if (typeof prop === 'function') {
    prop(this.dataSource.slice(row, row + 1)[0], value);
  } else {
    dataRow[prop] = value;
  }
};

DataMap.prototype.visualRowsToPhysical = function (index, amount) {
  var totalRows = this.instance.countSourceRows();
  var physicRow = (totalRows + index) % totalRows;
  var logicRows = [];
  var rowsToRemove = amount;
  var row;

  while (physicRow < totalRows && rowsToRemove) {
    row = this.instance.runHooks('modifyRow', physicRow);
    logicRows.push(row);

    rowsToRemove--;
    physicRow++;
  }

  return logicRows;
};

DataMap.prototype.visualColumnsToPhysical = function (index, amount) {
  let totalCols = this.instance.countCols();
  let physicalCol = (totalCols + index) % totalCols;
  let visualCols = [];
  let colsToRemove = amount;

  while (physicalCol < totalCols && colsToRemove) {
    let col = this.instance.runHooks('modifyCol', physicalCol);

    visualCols.push(col);

    colsToRemove--;
    physicalCol++;
  }

  return visualCols;
};

DataMap.prototype.clear = function () {
  for (var r = 0; r < this.instance.countSourceRows(); r++) {
    for (var c = 0; c < this.instance.countCols(); c++) {
      this.set(r, this.colToProp(c), '');
    }
  }
};

DataMap.prototype.clearLengthCache = function () {
  this.cachedLength = null;
};

DataMap.prototype.getLength = function () {
  let maxRows,
      maxRowsFromSettings = this.instance.getSettings().maxRows;

  if (maxRowsFromSettings < 0 || maxRowsFromSettings === 0) {
    maxRows = 0;
  } else {
    maxRows = maxRowsFromSettings || Infinity;
  }

  let length = this.instance.countSourceRows();

  if (this.instance.hasHook('modifyRow')) {
    let reValidate = this.skipCache;

    this.interval.start();
    if (length !== this.latestSourceRowsCount) {
      reValidate = true;
    }

    this.latestSourceRowsCount = length;
    if (this.cachedLength === null || reValidate) {
      (0, _number.rangeEach)(length - 1, row => {
        row = this.instance.runHooks('modifyRow', row);

        if (row === null) {
          --length;
        }
      });
      this.cachedLength = length;
    } else {
      length = this.cachedLength;
    }
  } else {
    this.interval.stop();
  }

  return Math.min(length, maxRows);
};

DataMap.prototype.getAll = function () {
  const start = {
    row: 0,
    col: 0
  };

  let end = {
    row: Math.max(this.instance.countSourceRows() - 1, 0),
    col: Math.max(this.instance.countCols() - 1, 0)
  };

  if (start.row - end.row === 0 && !this.instance.countSourceRows()) {
    return [];
  }

  return this.getRange(start, end, DataMap.prototype.DESTINATION_RENDERER);
};

DataMap.prototype.getRange = function (start, end, destination) {
  var r,
      rlen,
      c,
      clen,
      output = [],
      row;

  const maxRows = this.instance.getSettings().maxRows;
  const maxCols = this.instance.getSettings().maxCols;

  if (maxRows === 0 || maxCols === 0) {
    return [];
  }

  var getFn = destination === this.DESTINATION_CLIPBOARD_GENERATOR ? this.getCopyable : this.get;

  rlen = Math.min(Math.max(maxRows - 1, 0), Math.max(start.row, end.row));
  clen = Math.min(Math.max(maxCols - 1, 0), Math.max(start.col, end.col));

  for (r = Math.min(start.row, end.row); r <= rlen; r++) {
    row = [];
    let physicalRow = this.instance.runHooks('modifyRow', r);

    for (c = Math.min(start.col, end.col); c <= clen; c++) {

      if (physicalRow === null) {
        break;
      }
      row.push(getFn.call(this, r, this.colToProp(c)));
    }
    if (physicalRow !== null) {
      output.push(row);
    }
  }

  return output;
};

DataMap.prototype.getText = function (start, end) {
  return _SheetClip2.default.stringify(this.getRange(start, end, this.DESTINATION_RENDERER));
};

DataMap.prototype.getCopyableText = function (start, end) {
  return _SheetClip2.default.stringify(this.getRange(start, end, this.DESTINATION_CLIPBOARD_GENERATOR));
};

DataMap.prototype.onSkipLengthCache = function (delay) {
  this.skipCache = true;
  setTimeout(() => {
    this.skipCache = false;
  }, delay);
};

DataMap.prototype.destroy = function () {
  this.interval.stop();

  this.interval = null;
  this.instance = null;
  this.priv = null;
  this.GridSettings = null;
  this.dataSource = null;
  this.cachedLength = null;
  this.duckSchema = null;
};

exports.default = DataMap;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _number = __webpack_require__(3);

class DataSource {
  constructor(hotInstance) {
    let dataSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    this.hot = hotInstance;

    this.data = dataSource;

    this.dataType = 'array';

    this.colToProp = () => {};
    this.propToCol = () => {};
  }

  getData() {
    let toArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    let result = this.data;

    if (toArray) {
      result = this.getByRange({ row: 0, col: 0 }, { row: Math.max(this.countRows() - 1, 0), col: Math.max(this.countColumns() - 1, 0) }, true);
    }

    return result;
  }

  setData(data) {
    this.data = data;
  }

  getAtColumn(column) {
    let result = [];

    (0, _array.arrayEach)(this.data, row => {
      let property = this.colToProp(column);

      if (typeof property === 'string') {
        row = (0, _object.getProperty)(row, property);
      } else {
        row = row[property];
      }
      result.push(row);
    });

    return result;
  }

  getAtRow(row) {
    return this.data[row];
  }

  getAtCell(row, column) {
    let result = null;

    let modifyRowData = this.hot.runHooks('modifyRowData', row);

    let dataRow = isNaN(modifyRowData) ? modifyRowData : this.data[row];

    if (dataRow) {
      let prop = this.colToProp(column);

      if (typeof prop === 'string') {
        result = (0, _object.getProperty)(dataRow, prop);
      } else if (typeof prop === 'function') {
        result = prop(this.data.slice(row, row + 1)[0]);
      } else {
        result = dataRow[prop];
      }
    }

    return result;
  }

  getByRange(start, end) {
    let toArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    let startRow = Math.min(start.row, end.row);
    let startCol = Math.min(start.col, end.col);
    let endRow = Math.max(start.row, end.row);
    let endCol = Math.max(start.col, end.col);
    let result = [];

    (0, _number.rangeEach)(startRow, endRow, currentRow => {
      let row = this.getAtRow(currentRow);
      let newRow;

      if (this.dataType === 'array') {
        newRow = row.slice(startCol, endCol + 1);
      } else if (this.dataType === 'object') {
        newRow = toArray ? [] : {};

        (0, _number.rangeEach)(startCol, endCol, column => {
          let prop = this.colToProp(column);

          if (toArray) {
            newRow.push(row[prop]);
          } else {
            newRow[prop] = row[prop];
          }
        });
      }

      result.push(newRow);
    });

    return result;
  }

  countRows() {
    return Array.isArray(this.data) ? this.data.length : 0;
  }

  countColumns() {
    let result = 0;

    if (Array.isArray(this.data)) {
      if (this.dataType === 'array') {
        result = this.data[0].length;
      } else if (this.dataType === 'object') {
        result = Object.keys(this.data[0]).length;
      }
    }

    return result;
  }

  destroy() {
    this.data = null;
    this.hot = null;
  }
}

exports.default = DataSource;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _src = __webpack_require__(8);

var _unicode = __webpack_require__(16);

var _event = __webpack_require__(5);

var _editors = __webpack_require__(20);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _baseEditor = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EditorManager(instance, priv, selection) {
  var _this = this,
      destroyed = false,
      eventManager,
      activeEditor;

  eventManager = new _eventManager2.default(instance);

  function moveSelectionAfterEnter(shiftKey) {
    selection.setSelectedHeaders(false, false, false);
    var enterMoves = typeof priv.settings.enterMoves === 'function' ? priv.settings.enterMoves(event) : priv.settings.enterMoves;

    if (shiftKey) {
      selection.transformStart(-enterMoves.row, -enterMoves.col);
    } else {
      selection.transformStart(enterMoves.row, enterMoves.col, true);
    }
  }

  function moveSelectionUp(shiftKey) {
    if (shiftKey) {
      if (selection.selectedHeader.cols) {
        selection.setSelectedHeaders(selection.selectedHeader.rows, false, false);
      }
      selection.transformEnd(-1, 0);
    } else {
      selection.setSelectedHeaders(false, false, false);
      selection.transformStart(-1, 0);
    }
  }

  function moveSelectionDown(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(1, 0);
    } else {
      selection.setSelectedHeaders(false, false, false);
      selection.transformStart(1, 0);
    }
  }

  function moveSelectionRight(shiftKey) {
    if (shiftKey) {
      selection.transformEnd(0, 1);
    } else {
      selection.setSelectedHeaders(false, false, false);
      selection.transformStart(0, 1);
    }
  }

  function moveSelectionLeft(shiftKey) {
    if (shiftKey) {
      if (selection.selectedHeader.rows) {
        selection.setSelectedHeaders(false, selection.selectedHeader.cols, false);
      }
      selection.transformEnd(0, -1);
    } else {
      selection.setSelectedHeaders(false, false, false);
      selection.transformStart(0, -1);
    }
  }

  function onKeyDown(event) {
    var ctrlDown, rangeModifier;

    if (!instance.isListening()) {
      return;
    }
    instance.runHooks('beforeKeyDown', event);

    if (destroyed) {
      return;
    }
    if ((0, _event.isImmediatePropagationStopped)(event)) {
      return;
    }
    priv.lastKeyCode = event.keyCode;

    if (!selection.isSelected()) {
      return;
    }

    ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;

    if (activeEditor && !activeEditor.isWaiting()) {
      if (!(0, _unicode.isMetaKey)(event.keyCode) && !(0, _unicode.isCtrlKey)(event.keyCode) && !ctrlDown && !_this.isEditorOpened()) {
        _this.openEditor('', event);

        return;
      }
    }
    rangeModifier = event.shiftKey ? selection.setRangeEnd : selection.setRangeStart;

    switch (event.keyCode) {
      case _unicode.KEY_CODES.A:
        if (!_this.isEditorOpened() && ctrlDown) {
          selection.selectAll();

          event.preventDefault();
          (0, _event.stopPropagation)(event);
        }
        break;

      case _unicode.KEY_CODES.ARROW_UP:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }
        moveSelectionUp(event.shiftKey);

        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.ARROW_DOWN:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }

        moveSelectionDown(event.shiftKey);

        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.ARROW_RIGHT:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }

        moveSelectionRight(event.shiftKey);

        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.ARROW_LEFT:
        if (_this.isEditorOpened() && !activeEditor.isWaiting()) {
          _this.closeEditorAndSaveChanges(ctrlDown);
        }

        moveSelectionLeft(event.shiftKey);

        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.TAB:
        selection.setSelectedHeaders(false, false, false);
        var tabMoves = typeof priv.settings.tabMoves === 'function' ? priv.settings.tabMoves(event) : priv.settings.tabMoves;

        if (event.shiftKey) {
          selection.transformStart(-tabMoves.row, -tabMoves.col);
        } else {
          selection.transformStart(tabMoves.row, tabMoves.col, true);
        }
        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.BACKSPACE:
      case _unicode.KEY_CODES.DELETE:
        selection.empty(event);
        _this.prepareEditor();
        event.preventDefault();
        break;

      case _unicode.KEY_CODES.F2:
        _this.openEditor(null, event);

        if (activeEditor) {
          activeEditor.enableFullEditMode();
        }
        event.preventDefault();
        break;

      case _unicode.KEY_CODES.ENTER:
        if (_this.isEditorOpened()) {

          if (activeEditor && activeEditor.state !== _baseEditor.EditorState.WAITING) {
            _this.closeEditorAndSaveChanges(ctrlDown);
          }
          moveSelectionAfterEnter(event.shiftKey);
        } else if (instance.getSettings().enterBeginsEditing) {
          _this.openEditor(null, event);

          if (activeEditor) {
            activeEditor.enableFullEditMode();
          }
        } else {
          moveSelectionAfterEnter(event.shiftKey);
        }
        event.preventDefault();
        (0, _event.stopImmediatePropagation)(event);
        break;

      case _unicode.KEY_CODES.ESCAPE:
        if (_this.isEditorOpened()) {
          _this.closeEditorAndRestoreOriginalValue(ctrlDown);
        }
        event.preventDefault();
        break;

      case _unicode.KEY_CODES.HOME:
        selection.setSelectedHeaders(false, false, false);
        if (event.ctrlKey || event.metaKey) {
          rangeModifier(new _src.CellCoords(0, priv.selRange.from.col));
        } else {
          rangeModifier(new _src.CellCoords(priv.selRange.from.row, 0));
        }
        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.END:
        selection.setSelectedHeaders(false, false, false);
        if (event.ctrlKey || event.metaKey) {
          rangeModifier(new _src.CellCoords(instance.countRows() - 1, priv.selRange.from.col));
        } else {
          rangeModifier(new _src.CellCoords(priv.selRange.from.row, instance.countCols() - 1));
        }
        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.PAGE_UP:
        selection.setSelectedHeaders(false, false, false);
        selection.transformStart(-instance.countVisibleRows(), 0);
        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;

      case _unicode.KEY_CODES.PAGE_DOWN:
        selection.setSelectedHeaders(false, false, false);
        selection.transformStart(instance.countVisibleRows(), 0);
        event.preventDefault();
        (0, _event.stopPropagation)(event);
        break;
      default:
        break;
    }
  }

  function init() {
    instance.addHook('afterDocumentKeyDown', onKeyDown);

    eventManager.addEventListener(document.documentElement, 'keydown', event => {
      if (!destroyed) {
        instance.runHooks('afterDocumentKeyDown', event);
      }
    });

    function onDblClick(event, coords, elem) {
      if (elem.nodeName == 'TD') {
        _this.openEditor();

        if (activeEditor) {
          activeEditor.enableFullEditMode();
        }
      }
    }
    instance.view.wt.update('onCellDblClick', onDblClick);

    instance.addHook('afterDestroy', () => {
      destroyed = true;
    });
  }

  this.destroyEditor = function (revertOriginal) {
    this.closeEditor(revertOriginal);
  };

  this.getActiveEditor = function () {
    return activeEditor;
  };

  this.prepareEditor = function () {
    var row, col, prop, td, originalValue, cellProperties, editorClass;

    if (activeEditor && activeEditor.isWaiting()) {
      this.closeEditor(false, false, dataSaved => {
        if (dataSaved) {
          _this.prepareEditor();
        }
      });

      return;
    }
    row = priv.selRange.highlight.row;
    col = priv.selRange.highlight.col;
    prop = instance.colToProp(col);
    td = instance.getCell(row, col);

    originalValue = instance.getSourceDataAtCell(instance.runHooks('modifyRow', row), col);
    cellProperties = instance.getCellMeta(row, col);
    editorClass = instance.getCellEditor(cellProperties);

    if (editorClass) {
      activeEditor = (0, _editors.getEditorInstance)(editorClass, instance);
      activeEditor.prepare(row, col, prop, td, originalValue, cellProperties);
    } else {
      activeEditor = void 0;
    }
  };

  this.isEditorOpened = function () {
    return activeEditor && activeEditor.isOpened();
  };

  this.openEditor = function (initialValue, event) {
    if (activeEditor && !activeEditor.cellProperties.readOnly) {
      activeEditor.beginEditing(initialValue, event);
    } else if (activeEditor && activeEditor.cellProperties.readOnly) {
      if (event && event.keyCode === _unicode.KEY_CODES.ENTER) {
        moveSelectionAfterEnter();
      }
    }
  };

  this.closeEditor = function (restoreOriginalValue, ctrlDown, callback) {
    if (activeEditor) {
      activeEditor.finishEditing(restoreOriginalValue, ctrlDown, callback);
    } else if (callback) {
      callback(false);
    }
  };

  this.closeEditorAndSaveChanges = function (ctrlDown) {
    return this.closeEditor(false, ctrlDown);
  };

  this.closeEditorAndRestoreOriginalValue = function (ctrlDown) {
    return this.closeEditor(true, ctrlDown);
  };

  init();
}

exports.default = EditorManager;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _autoResize = __webpack_require__(57);

var _autoResize2 = _interopRequireDefault(_autoResize);

var _baseEditor = __webpack_require__(29);

var _baseEditor2 = _interopRequireDefault(_baseEditor);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _unicode = __webpack_require__(16);

var _event = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextEditor = _baseEditor2.default.prototype.extend();

TextEditor.prototype.init = function () {
  var that = this;
  this.createElements();
  this.eventManager = new _eventManager2.default(this);
  this.bindEvents();
  this.autoResize = (0, _autoResize2.default)();

  this.instance.addHook('afterDestroy', () => {
    that.destroy();
  });
};

TextEditor.prototype.getValue = function () {
  return this.TEXTAREA.value;
};

TextEditor.prototype.setValue = function (newValue) {
  this.TEXTAREA.value = newValue;
};

var onBeforeKeyDown = function onBeforeKeyDown(event) {
  var instance = this,
      that = instance.getActiveEditor(),
      ctrlDown;

  ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;

  if (event.target !== that.TEXTAREA || (0, _event.isImmediatePropagationStopped)(event)) {
    return;
  }

  if (event.keyCode === 17 || event.keyCode === 224 || event.keyCode === 91 || event.keyCode === 93) {
    (0, _event.stopImmediatePropagation)(event);
    return;
  }

  switch (event.keyCode) {
    case _unicode.KEY_CODES.ARROW_RIGHT:
      if (that.isInFullEditMode()) {
        if (!that.isWaiting() && !that.allowKeyEventPropagation || !that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode)) {
          (0, _event.stopImmediatePropagation)(event);
        }
      }
      break;
    case _unicode.KEY_CODES.ARROW_LEFT:
      if (that.isInFullEditMode()) {
        if (!that.isWaiting() && !that.allowKeyEventPropagation || !that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode)) {
          (0, _event.stopImmediatePropagation)(event);
        }
      }
      break;
    case _unicode.KEY_CODES.ARROW_UP:
    case _unicode.KEY_CODES.ARROW_DOWN:
      if (that.isInFullEditMode()) {
        if (!that.isWaiting() && !that.allowKeyEventPropagation || !that.isWaiting() && that.allowKeyEventPropagation && !that.allowKeyEventPropagation(event.keyCode)) {
          (0, _event.stopImmediatePropagation)(event);
        }
      }
      break;

    case _unicode.KEY_CODES.ENTER:
      var selected = that.instance.getSelected();
      var isMultipleSelection = !(selected[0] === selected[2] && selected[1] === selected[3]);
      if (ctrlDown && !isMultipleSelection || event.altKey) {
        if (that.isOpened()) {
          var caretPosition = (0, _element.getCaretPosition)(that.TEXTAREA),
              value = that.getValue();

          var newValue = `${value.slice(0, caretPosition)}\n${value.slice(caretPosition)}`;

          that.setValue(newValue);

          (0, _element.setCaretPosition)(that.TEXTAREA, caretPosition + 1);
        } else {
          that.beginEditing(`${that.originalValue}\n`);
        }
        (0, _event.stopImmediatePropagation)(event);
      }
      event.preventDefault();
      break;

    case _unicode.KEY_CODES.A:
    case _unicode.KEY_CODES.X:
    case _unicode.KEY_CODES.C:
    case _unicode.KEY_CODES.V:
      if (ctrlDown) {
        (0, _event.stopImmediatePropagation)(event);
      }
      break;

    case _unicode.KEY_CODES.BACKSPACE:
    case _unicode.KEY_CODES.DELETE:
    case _unicode.KEY_CODES.HOME:
    case _unicode.KEY_CODES.END:
      (0, _event.stopImmediatePropagation)(event);
      break;
    default:
      break;
  }

  if ([_unicode.KEY_CODES.ARROW_UP, _unicode.KEY_CODES.ARROW_RIGHT, _unicode.KEY_CODES.ARROW_DOWN, _unicode.KEY_CODES.ARROW_LEFT].indexOf(event.keyCode) === -1) {
    that.autoResize.resize(String.fromCharCode(event.keyCode));
  }
};

TextEditor.prototype.open = function () {
  this.refreshDimensions();

  this.instance.addHook('beforeKeyDown', onBeforeKeyDown);
};

TextEditor.prototype.close = function (tdOutside) {
  this.textareaParentStyle.display = 'none';

  this.autoResize.unObserve();

  if (document.activeElement === this.TEXTAREA) {
    this.instance.listen();
  }
  this.instance.removeHook('beforeKeyDown', onBeforeKeyDown);
};

TextEditor.prototype.focus = function () {
  this.TEXTAREA.focus();
  (0, _element.setCaretPosition)(this.TEXTAREA, this.TEXTAREA.value.length);
};

TextEditor.prototype.createElements = function () {

  this.TEXTAREA = document.createElement('TEXTAREA');

  (0, _element.addClass)(this.TEXTAREA, 'handsontableInput');

  this.textareaStyle = this.TEXTAREA.style;
  this.textareaStyle.width = 0;
  this.textareaStyle.height = 0;

  this.TEXTAREA_PARENT = document.createElement('DIV');
  (0, _element.addClass)(this.TEXTAREA_PARENT, 'handsontableInputHolder');

  this.textareaParentStyle = this.TEXTAREA_PARENT.style;
  this.textareaParentStyle.top = 0;
  this.textareaParentStyle.left = 0;
  this.textareaParentStyle.display = 'none';

  this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);

  this.instance.rootElement.appendChild(this.TEXTAREA_PARENT);

  var that = this;
  this.instance._registerTimeout(setTimeout(() => {
    that.refreshDimensions();
  }, 0));
};

TextEditor.prototype.getEditedCell = function () {
  var editorSection = this.checkEditorSection(),
      editedCell;

  switch (editorSection) {
    case 'top':
      editedCell = this.instance.view.wt.wtOverlays.topOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 101;
      break;
    case 'top-left-corner':
      editedCell = this.instance.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 103;
      break;
    case 'bottom-left-corner':
      editedCell = this.instance.view.wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 103;
      break;
    case 'left':
      editedCell = this.instance.view.wt.wtOverlays.leftOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 102;
      break;
    case 'bottom':
      editedCell = this.instance.view.wt.wtOverlays.bottomOverlay.clone.wtTable.getCell({
        row: this.row,
        col: this.col
      });
      this.textareaParentStyle.zIndex = 102;
      break;
    default:
      editedCell = this.instance.getCell(this.row, this.col);
      this.textareaParentStyle.zIndex = '';
      break;
  }

  return editedCell != -1 && editedCell != -2 ? editedCell : void 0;
};

TextEditor.prototype.refreshValue = function () {
  let sourceData = this.instance.getSourceDataAtCell(this.row, this.prop);
  this.originalValue = sourceData;

  this.setValue(sourceData);
  this.refreshDimensions();
};

TextEditor.prototype.refreshDimensions = function () {
  if (this.state !== _baseEditor.EditorState.EDITING) {
    return;
  }
  this.TD = this.getEditedCell();

  if (!this.TD) {
    this.close(true);

    return;
  }
  var currentOffset = (0, _element.offset)(this.TD),
      containerOffset = (0, _element.offset)(this.instance.rootElement),
      scrollableContainer = (0, _element.getScrollableElement)(this.TD),
      totalRowsCount = this.instance.countRows(),
      editTopModifier = currentOffset.top === containerOffset.top ? 0 : 1,
      editTop = currentOffset.top - containerOffset.top - editTopModifier - (scrollableContainer.scrollTop || 0),
      editLeft = currentOffset.left - containerOffset.left - 1 - (scrollableContainer.scrollLeft || 0),
      settings = this.instance.getSettings(),
      rowHeadersCount = this.instance.hasRowHeaders(),
      colHeadersCount = this.instance.hasColHeaders(),
      editorSection = this.checkEditorSection(),
      backgroundColor = this.TD.style.backgroundColor,
      cssTransformOffset;

  switch (editorSection) {
    case 'top':
      cssTransformOffset = (0, _element.getCssTransform)(this.instance.view.wt.wtOverlays.topOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'left':
      cssTransformOffset = (0, _element.getCssTransform)(this.instance.view.wt.wtOverlays.leftOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'top-left-corner':
      cssTransformOffset = (0, _element.getCssTransform)(this.instance.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'bottom-left-corner':
      cssTransformOffset = (0, _element.getCssTransform)(this.instance.view.wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder.parentNode);
      break;
    case 'bottom':
      cssTransformOffset = (0, _element.getCssTransform)(this.instance.view.wt.wtOverlays.bottomOverlay.clone.wtTable.holder.parentNode);
      break;
    default:
      break;
  }

  if (colHeadersCount && this.instance.getSelected()[0] === 0 || settings.fixedRowsBottom && this.instance.getSelected()[0] === totalRowsCount - settings.fixedRowsBottom) {
    editTop += 1;
  }

  if (this.instance.getSelected()[1] === 0) {
    editLeft += 1;
  }

  if (cssTransformOffset && cssTransformOffset != -1) {
    this.textareaParentStyle[cssTransformOffset[0]] = cssTransformOffset[1];
  } else {
    (0, _element.resetCssTransform)(this.TEXTAREA_PARENT);
  }

  this.textareaParentStyle.top = `${editTop}px`;
  this.textareaParentStyle.left = `${editLeft}px`;

  let firstRowOffset = this.instance.view.wt.wtViewport.rowsRenderCalculator.startPosition;
  let firstColumnOffset = this.instance.view.wt.wtViewport.columnsRenderCalculator.startPosition;
  let horizontalScrollPosition = this.instance.view.wt.wtOverlays.leftOverlay.getScrollPosition();
  let verticalScrollPosition = this.instance.view.wt.wtOverlays.topOverlay.getScrollPosition();
  let scrollbarWidth = (0, _element.getScrollbarWidth)();

  let cellTopOffset = this.TD.offsetTop + firstRowOffset - verticalScrollPosition;
  let cellLeftOffset = this.TD.offsetLeft + firstColumnOffset - horizontalScrollPosition;

  let width = (0, _element.innerWidth)(this.TD) - 8;
  let actualVerticalScrollbarWidth = (0, _element.hasVerticalScrollbar)(scrollableContainer) ? scrollbarWidth : 0;
  let actualHorizontalScrollbarWidth = (0, _element.hasHorizontalScrollbar)(scrollableContainer) ? scrollbarWidth : 0;
  let maxWidth = this.instance.view.maximumVisibleElementWidth(cellLeftOffset) - 9 - actualVerticalScrollbarWidth;
  let height = this.TD.scrollHeight + 1;
  let maxHeight = Math.max(this.instance.view.maximumVisibleElementHeight(cellTopOffset) - actualHorizontalScrollbarWidth, 23);

  const cellComputedStyle = (0, _element.getComputedStyle)(this.TD);

  this.TEXTAREA.style.fontSize = cellComputedStyle.fontSize;
  this.TEXTAREA.style.fontFamily = cellComputedStyle.fontFamily;
  this.TEXTAREA.style.backgroundColor = '';
  this.TEXTAREA.style.backgroundColor = backgroundColor ? backgroundColor : (0, _element.getComputedStyle)(this.TEXTAREA).backgroundColor;

  this.autoResize.init(this.TEXTAREA, {
    minHeight: Math.min(height, maxHeight),
    maxHeight,
    minWidth: Math.min(width, maxWidth),
    maxWidth }, true);

  this.textareaParentStyle.display = 'block';
};

TextEditor.prototype.bindEvents = function () {
  var editor = this;

  this.eventManager.addEventListener(this.TEXTAREA, 'cut', event => {
    (0, _event.stopPropagation)(event);
  });

  this.eventManager.addEventListener(this.TEXTAREA, 'paste', event => {
    (0, _event.stopPropagation)(event);
  });

  this.instance.addHook('afterScrollHorizontally', () => {
    editor.refreshDimensions();
  });

  this.instance.addHook('afterScrollVertically', () => {
    editor.refreshDimensions();
  });

  this.instance.addHook('afterColumnResize', () => {
    editor.refreshDimensions();
    editor.focus();
  });

  this.instance.addHook('afterRowResize', () => {
    editor.refreshDimensions();
    editor.focus();
  });

  this.instance.addHook('afterDestroy', () => {
    editor.eventManager.destroy();
  });
};

TextEditor.prototype.destroy = function () {
  this.eventManager.destroy();
};

exports.default = TextEditor;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toSingleLine = toSingleLine;

var _array = __webpack_require__(1);

function toSingleLine(strings) {
  for (var _len = arguments.length, expressions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  let result = (0, _array.arrayReduce)(strings, (previousValue, currentValue, index) => {

    const valueWithoutWhiteSpaces = currentValue.replace(/(?:\r?\n\s+)/g, '');
    const expressionForIndex = expressions[index] ? expressions[index] : '';

    return previousValue + valueWithoutWhiteSpaces + expressionForIndex;
  }, '');

  return result.trim();
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(56);

var _editors = __webpack_require__(20);

var _renderers = __webpack_require__(18);

var _validators = __webpack_require__(27);

var _cellTypes = __webpack_require__(22);

var _core = __webpack_require__(23);

var _core2 = _interopRequireDefault(_core);

var _jquery = __webpack_require__(54);

var _jquery2 = _interopRequireDefault(_jquery);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _ghostTable = __webpack_require__(26);

var _ghostTable2 = _interopRequireDefault(_ghostTable);

var _array = __webpack_require__(1);

var arrayHelpers = _interopRequireWildcard(_array);

var _browser = __webpack_require__(9);

var browserHelpers = _interopRequireWildcard(_browser);

var _data = __webpack_require__(24);

var dataHelpers = _interopRequireWildcard(_data);

var _date = __webpack_require__(53);

var dateHelpers = _interopRequireWildcard(_date);

var _feature = __webpack_require__(14);

var featureHelpers = _interopRequireWildcard(_feature);

var _function = __webpack_require__(17);

var functionHelpers = _interopRequireWildcard(_function);

var _mixed = __webpack_require__(12);

var mixedHelpers = _interopRequireWildcard(_mixed);

var _number = __webpack_require__(3);

var numberHelpers = _interopRequireWildcard(_number);

var _object = __webpack_require__(2);

var objectHelpers = _interopRequireWildcard(_object);

var _setting = __webpack_require__(25);

var settingHelpers = _interopRequireWildcard(_setting);

var _string = __webpack_require__(15);

var stringHelpers = _interopRequireWildcard(_string);

var _unicode = __webpack_require__(16);

var unicodeHelpers = _interopRequireWildcard(_unicode);

var _element = __webpack_require__(0);

var domHelpers = _interopRequireWildcard(_element);

var _event = __webpack_require__(5);

var domEventHelpers = _interopRequireWildcard(_event);

var _index = __webpack_require__(55);

var plugins = _interopRequireWildcard(_index);

var _plugins = __webpack_require__(7);

var _defaultSettings = __webpack_require__(31);

var _defaultSettings2 = _interopRequireDefault(_defaultSettings);

var _rootInstance = __webpack_require__(32);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Handsontable(rootElement, userSettings) {
  const instance = new _core2.default(rootElement, userSettings || {}, _rootInstance.rootInstanceSymbol);

  instance.init();

  return instance;
}

(0, _jquery2.default)(Handsontable);

Handsontable.Core = _core2.default;
Handsontable.DefaultSettings = _defaultSettings2.default;
Handsontable.EventManager = _eventManager2.default;
Handsontable._getListenersCounter = _eventManager.getListenersCounter;

Handsontable.buildDate = '01/06/2026 09:26:56';
Handsontable.packageName = 'handsontable';
Handsontable.version = '0.34.1';

const baseVersion = '';

if (baseVersion) {
  Handsontable.baseVersion = baseVersion;
}

Handsontable.hooks = _pluginHooks2.default.getSingleton();

Handsontable.__GhostTable = _ghostTable2.default;

const HELPERS = [arrayHelpers, browserHelpers, dataHelpers, dateHelpers, featureHelpers, functionHelpers, mixedHelpers, numberHelpers, objectHelpers, settingHelpers, stringHelpers, unicodeHelpers];
const DOM = [domHelpers, domEventHelpers];

Handsontable.helper = {};
Handsontable.dom = {};

arrayHelpers.arrayEach(HELPERS, helper => {
  arrayHelpers.arrayEach(Object.getOwnPropertyNames(helper), key => {
    if (key.charAt(0) !== '_') {
      Handsontable.helper[key] = helper[key];
    }
  });
});

arrayHelpers.arrayEach(DOM, helper => {
  arrayHelpers.arrayEach(Object.getOwnPropertyNames(helper), key => {
    if (key.charAt(0) !== '_') {
      Handsontable.dom[key] = helper[key];
    }
  });
});

Handsontable.cellTypes = {};

arrayHelpers.arrayEach((0, _cellTypes.getRegisteredCellTypeNames)(), cellTypeName => {
  Handsontable.cellTypes[cellTypeName] = (0, _cellTypes.getCellType)(cellTypeName);
});

Handsontable.cellTypes.registerCellType = _cellTypes.registerCellType;
Handsontable.cellTypes.getCellType = _cellTypes.getCellType;

Handsontable.editors = {};

arrayHelpers.arrayEach((0, _editors.getRegisteredEditorNames)(), editorName => {
  Handsontable.editors[`${stringHelpers.toUpperCaseFirst(editorName)}Editor`] = (0, _editors.getEditor)(editorName);
});

Handsontable.editors.registerEditor = _editors.registerEditor;
Handsontable.editors.getEditor = _editors.getEditor;

Handsontable.renderers = {};

arrayHelpers.arrayEach((0, _renderers.getRegisteredRendererNames)(), rendererName => {
  const renderer = (0, _renderers.getRenderer)(rendererName);

  if (rendererName === 'base') {
    Handsontable.renderers.cellDecorator = renderer;
  }
  Handsontable.renderers[`${stringHelpers.toUpperCaseFirst(rendererName)}Renderer`] = renderer;
});

Handsontable.renderers.registerRenderer = _renderers.registerRenderer;
Handsontable.renderers.getRenderer = _renderers.getRenderer;

Handsontable.validators = {};

arrayHelpers.arrayEach((0, _validators.getRegisteredValidatorNames)(), validatorName => {
  Handsontable.validators[`${stringHelpers.toUpperCaseFirst(validatorName)}Validator`] = (0, _validators.getValidator)(validatorName);
});

Handsontable.validators.registerValidator = _validators.registerValidator;
Handsontable.validators.getValidator = _validators.getValidator;

Handsontable.plugins = {};

arrayHelpers.arrayEach(Object.getOwnPropertyNames(plugins), pluginName => {
  const plugin = plugins[pluginName];

  if (pluginName === 'Base') {
    Handsontable.plugins[`${pluginName}Plugin`] = plugin;
  } else {
    Handsontable.plugins[pluginName] = plugin;
  }
});

Handsontable.plugins.registerPlugin = _plugins.registerPlugin;

module.exports = Handsontable;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

const MIXIN_NAME = 'localHooks';

const localHooks = {
  _localHooks: Object.create(null),

  addLocalHook(key, callback) {
    if (!this._localHooks[key]) {
      this._localHooks[key] = [];
    }
    this._localHooks[key].push(callback);
  },

  runLocalHooks(key) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    if (this._localHooks[key]) {
      (0, _array.arrayEach)(this._localHooks[key], callback => callback.apply(this, params));
    }
  },

  clearLocalHooks() {
    this._localHooks = {};
  }
};

(0, _object.defineGetter)(localHooks, 'MIXIN_NAME', MIXIN_NAME, {
  writable: false,
  enumerable: false
});

exports.default = localHooks;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function MultiMap() {
  var map = {
    arrayMap: [],
    weakMap: new WeakMap()
  };

  return {
    get(key) {
      if (canBeAnArrayMapKey(key)) {
        return map.arrayMap[key];
      } else if (canBeAWeakMapKey(key)) {
        return map.weakMap.get(key);
      }
    },

    set(key, value) {
      if (canBeAnArrayMapKey(key)) {
        map.arrayMap[key] = value;
      } else if (canBeAWeakMapKey(key)) {
        map.weakMap.set(key, value);
      } else {
        throw new Error('Invalid key type');
      }
    },

    delete(key) {
      if (canBeAnArrayMapKey(key)) {
        delete map.arrayMap[key];
      } else if (canBeAWeakMapKey(key)) {
        map.weakMap.delete(key);
      }
    }
  };

  function canBeAnArrayMapKey(obj) {
    return obj !== null && !isNaNSymbol(obj) && (typeof obj == 'string' || typeof obj == 'number');
  }

  function canBeAWeakMapKey(obj) {
    return obj !== null && (typeof obj == 'object' || typeof obj == 'function');
  }

  function isNaNSymbol(obj) {
    return obj !== obj;
  }
}

exports.default = MultiMap;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _array = __webpack_require__(1);

var _feature = __webpack_require__(14);

var _element = __webpack_require__(0);

var _ghostTable = __webpack_require__(26);

var _ghostTable2 = _interopRequireDefault(_ghostTable);

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

var _plugins = __webpack_require__(7);

var _samplesGenerator = __webpack_require__(52);

var _samplesGenerator2 = _interopRequireDefault(_samplesGenerator);

var _string = __webpack_require__(15);

var _src = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const privatePool = new WeakMap();

class AutoColumnSize extends _base2.default {
  static get CALCULATION_STEP() {
    return 50;
  }

  static get SYNC_CALCULATION_LIMIT() {
    return 50;
  }

  constructor(hotInstance) {
    super(hotInstance);
    privatePool.set(this, {
      cachedColumnHeaders: []
    });

    this.widths = [];

    this.ghostTable = new _ghostTable2.default(this.hot);

    this.samplesGenerator = new _samplesGenerator2.default((row, col) => this.hot.getDataAtCell(row, col));

    this.firstCalculation = true;

    this.inProgress = false;

    this.addHook('beforeColumnResize', (col, size, isDblClick) => this.onBeforeColumnResize(col, size, isDblClick));
  }

  isEnabled() {
    return this.hot.getSettings().autoColumnSize !== false && !this.hot.getSettings().colWidths;
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    let setting = this.hot.getSettings().autoColumnSize;

    if (setting && setting.useHeaders != null) {
      this.ghostTable.setSetting('useHeaders', setting.useHeaders);
    }

    this.addHook('afterLoadData', () => this.onAfterLoadData());
    this.addHook('beforeChange', changes => this.onBeforeChange(changes));

    this.addHook('beforeRender', force => this.onBeforeRender(force));
    this.addHook('modifyColWidth', (width, col) => this.getColumnWidth(col, width));
    this.addHook('afterInit', () => this.onAfterInit());
    super.enablePlugin();
  }

  updatePlugin() {
    const changedColumns = this.findColumnsWhereHeaderWasChanged();

    if (changedColumns.length) {
      this.clearCache(changedColumns);
    }
    super.updatePlugin();
  }

  disablePlugin() {
    super.disablePlugin();
  }

  calculateColumnsWidth() {
    let colRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { from: 0, to: this.hot.countCols() - 1 };
    let rowRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: 0, to: this.hot.countRows() - 1 };
    let force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (typeof colRange === 'number') {
      colRange = { from: colRange, to: colRange };
    }
    if (typeof rowRange === 'number') {
      rowRange = { from: rowRange, to: rowRange };
    }

    (0, _number.rangeEach)(colRange.from, colRange.to, col => {
      if (force || this.widths[col] === void 0 && !this.hot._getColWidthFromSettings(col)) {
        const samples = this.samplesGenerator.generateColumnSamples(col, rowRange);

        samples.forEach((sample, col) => this.ghostTable.addColumn(col, sample));
      }
    });

    if (this.ghostTable.columns.length) {
      this.ghostTable.getWidths((col, width) => {
        this.widths[col] = width;
      });
      this.ghostTable.clean();
    }
  }

  calculateAllColumnsWidth() {
    let rowRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { from: 0, to: this.hot.countRows() - 1 };

    let current = 0;
    let length = this.hot.countCols() - 1;
    let timer = null;

    this.inProgress = true;

    let loop = () => {
      if (!this.hot) {
        (0, _feature.cancelAnimationFrame)(timer);
        this.inProgress = false;

        return;
      }

      this.calculateColumnsWidth({
        from: current,
        to: Math.min(current + AutoColumnSize.CALCULATION_STEP, length)
      }, rowRange);

      current = current + AutoColumnSize.CALCULATION_STEP + 1;

      if (current < length) {
        timer = (0, _feature.requestAnimationFrame)(loop);
      } else {
        (0, _feature.cancelAnimationFrame)(timer);
        this.inProgress = false;

        this.hot.view.wt.wtOverlays.adjustElementsSize(true);

        if (this.hot.view.wt.wtOverlays.leftOverlay.needFullRender) {
          this.hot.view.wt.wtOverlays.leftOverlay.clone.draw();
        }
      }
    };

    if (this.firstCalculation && this.getSyncCalculationLimit()) {
      this.calculateColumnsWidth({ from: 0, to: this.getSyncCalculationLimit() }, rowRange);
      this.firstCalculation = false;
      current = this.getSyncCalculationLimit() + 1;
    }

    if (current < length) {
      loop();
    } else {
      this.inProgress = false;
    }
  }

  setSamplingOptions() {
    let setting = this.hot.getSettings().autoColumnSize;
    let samplingRatio = setting && (0, _object.hasOwnProperty)(setting, 'samplingRatio') ? this.hot.getSettings().autoColumnSize.samplingRatio : void 0;
    let allowSampleDuplicates = setting && (0, _object.hasOwnProperty)(setting, 'allowSampleDuplicates') ? this.hot.getSettings().autoColumnSize.allowSampleDuplicates : void 0;

    if (samplingRatio && !isNaN(samplingRatio)) {
      this.samplesGenerator.setSampleCount(parseInt(samplingRatio, 10));
    }

    if (allowSampleDuplicates) {
      this.samplesGenerator.setAllowDuplicates(allowSampleDuplicates);
    }
  }

  recalculateAllColumnsWidth() {
    if (this.hot.view && (0, _element.isVisible)(this.hot.view.wt.wtTable.TABLE)) {
      this.clearCache();
      this.calculateAllColumnsWidth();
    }
  }

  getSyncCalculationLimit() {
    let limit = AutoColumnSize.SYNC_CALCULATION_LIMIT;
    let colsLimit = this.hot.countCols() - 1;

    if ((0, _object.isObject)(this.hot.getSettings().autoColumnSize)) {
      limit = this.hot.getSettings().autoColumnSize.syncLimit;

      if ((0, _string.isPercentValue)(limit)) {
        limit = (0, _number.valueAccordingPercent)(colsLimit, limit);
      } else {
        limit >>= 0;
      }
    }

    return Math.min(limit, colsLimit);
  }

  getColumnWidth(col) {
    let defaultWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
    let keepMinimum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    let width = defaultWidth;

    if (width === void 0) {
      width = this.widths[col];

      if (keepMinimum && typeof width === 'number') {
        width = Math.max(width, _src.ViewportColumnsCalculator.DEFAULT_WIDTH);
      }
    }

    return width;
  }

  getFirstVisibleColumn() {
    const wot = this.hot.view.wt;

    if (wot.wtViewport.columnsVisibleCalculator) {
      return wot.wtTable.getFirstVisibleColumn();
    }
    if (wot.wtViewport.columnsRenderCalculator) {
      return wot.wtTable.getFirstRenderedColumn();
    }

    return -1;
  }

  getLastVisibleColumn() {
    const wot = this.hot.view.wt;

    if (wot.wtViewport.columnsVisibleCalculator) {
      return wot.wtTable.getLastVisibleColumn();
    }
    if (wot.wtViewport.columnsRenderCalculator) {
      return wot.wtTable.getLastRenderedColumn();
    }

    return -1;
  }

  findColumnsWhereHeaderWasChanged() {
    const columnHeaders = this.hot.getColHeader();

    var _privatePool$get = privatePool.get(this);

    const cachedColumnHeaders = _privatePool$get.cachedColumnHeaders;


    const changedColumns = (0, _array.arrayReduce)(columnHeaders, (acc, columnTitle, physicalColumn) => {
      const cachedColumnsLength = cachedColumnHeaders.length;

      if (cachedColumnsLength - 1 < physicalColumn || cachedColumnHeaders[physicalColumn] !== columnTitle) {
        acc.push(physicalColumn);
      }
      if (cachedColumnsLength - 1 < physicalColumn) {
        cachedColumnHeaders.push(columnTitle);
      } else {
        cachedColumnHeaders[physicalColumn] = columnTitle;
      }

      return acc;
    }, []);

    return changedColumns;
  }

  clearCache() {
    let columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (columns.length) {
      (0, _array.arrayEach)(columns, physicalIndex => {
        this.widths[physicalIndex] = void 0;
      });
    } else {
      this.widths.length = 0;
    }
  }

  isNeedRecalculate() {
    return !!(0, _array.arrayFilter)(this.widths, item => item === void 0).length;
  }

  onBeforeRender() {
    const force = this.hot.renderCall;
    const rowsCount = this.hot.countRows();

    if (!rowsCount) {
      return;
    }

    this.calculateColumnsWidth({ from: this.getFirstVisibleColumn(), to: this.getLastVisibleColumn() }, void 0, force);

    if (this.isNeedRecalculate() && !this.inProgress) {
      this.calculateAllColumnsWidth();
    }
  }

  onAfterLoadData() {
    if (this.hot.view) {
      this.recalculateAllColumnsWidth();
    } else {
      setTimeout(() => {
        if (this.hot) {
          this.recalculateAllColumnsWidth();
        }
      }, 0);
    }
  }

  onBeforeChange(changes) {
    const changedColumns = (0, _array.arrayMap)(changes, (_ref) => {
      var _ref2 = _slicedToArray(_ref, 2);

      let row = _ref2[0],
          column = _ref2[1];
      return this.hot.propToCol(column);
    });

    this.clearCache(changedColumns);
  }

  onBeforeColumnResize(col, size, isDblClick) {
    if (isDblClick) {
      this.calculateColumnsWidth(col, void 0, true);
      size = this.getColumnWidth(col, void 0, false);
    }

    return size;
  }

  onAfterInit() {
    privatePool.get(this).cachedColumnHeaders = this.hot.getColHeader();
  }

  destroy() {
    this.ghostTable.clean();
    super.destroy();
  }
}

(0, _plugins.registerPlugin)('autoColumnSize', AutoColumnSize);

exports.default = AutoColumnSize;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _array = __webpack_require__(1);

var _feature = __webpack_require__(14);

var _element = __webpack_require__(0);

var _ghostTable = __webpack_require__(26);

var _ghostTable2 = _interopRequireDefault(_ghostTable);

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

var _plugins = __webpack_require__(7);

var _samplesGenerator = __webpack_require__(52);

var _samplesGenerator2 = _interopRequireDefault(_samplesGenerator);

var _string = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AutoRowSize extends _base2.default {
  static get CALCULATION_STEP() {
    return 50;
  }

  static get SYNC_CALCULATION_LIMIT() {
    return 500;
  }

  constructor(hotInstance) {
    super(hotInstance);

    this.heights = [];

    this.ghostTable = new _ghostTable2.default(this.hot);

    this.samplesGenerator = new _samplesGenerator2.default((row, col) => {
      if (row >= 0) {
        return this.hot.getDataAtCell(row, col);
      } else if (row === -1) {
        return this.hot.getColHeader(col);
      }
      return null;
    });

    this.firstCalculation = true;

    this.inProgress = false;

    this.addHook('beforeRowResize', (row, size, isDblClick) => this.onBeforeRowResize(row, size, isDblClick));
  }

  isEnabled() {
    return this.hot.getSettings().autoRowSize === true || (0, _object.isObject)(this.hot.getSettings().autoRowSize);
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    this.setSamplingOptions();

    this.addHook('afterLoadData', () => this.onAfterLoadData());
    this.addHook('beforeChange', changes => this.onBeforeChange(changes));
    this.addHook('beforeColumnMove', () => this.recalculateAllRowsHeight());
    this.addHook('beforeColumnResize', () => this.recalculateAllRowsHeight());
    this.addHook('beforeColumnSort', () => this.clearCache());
    this.addHook('beforeRender', force => this.onBeforeRender(force));
    this.addHook('beforeRowMove', (rowStart, rowEnd) => this.onBeforeRowMove(rowStart, rowEnd));
    this.addHook('modifyRowHeight', (height, row) => this.getRowHeight(row, height));
    this.addHook('modifyColumnHeaderHeight', () => this.getColumnHeaderHeight());
    super.enablePlugin();
  }

  disablePlugin() {
    super.disablePlugin();
  }

  calculateRowsHeight() {
    let rowRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { from: 0, to: this.hot.countRows() - 1 };
    let colRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: 0, to: this.hot.countCols() - 1 };
    let force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (typeof rowRange === 'number') {
      rowRange = { from: rowRange, to: rowRange };
    }
    if (typeof colRange === 'number') {
      colRange = { from: colRange, to: colRange };
    }

    if (this.hot.getColHeader(0) !== null) {
      const samples = this.samplesGenerator.generateRowSamples(-1, colRange);

      this.ghostTable.addColumnHeadersRow(samples.get(-1));
    }

    (0, _number.rangeEach)(rowRange.from, rowRange.to, row => {
      if (force || this.heights[row] === void 0) {
        const samples = this.samplesGenerator.generateRowSamples(row, colRange);

        samples.forEach((sample, row) => {
          this.ghostTable.addRow(row, sample);
        });
      }
    });
    if (this.ghostTable.rows.length) {
      this.ghostTable.getHeights((row, height) => {
        this.heights[row] = height;
      });
      this.ghostTable.clean();
    }
  }

  calculateAllRowsHeight() {
    let colRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { from: 0, to: this.hot.countCols() - 1 };

    let current = 0;
    let length = this.hot.countRows() - 1;
    let timer = null;

    this.inProgress = true;

    let loop = () => {
      if (!this.hot) {
        (0, _feature.cancelAnimationFrame)(timer);
        this.inProgress = false;

        return;
      }
      this.calculateRowsHeight({ from: current, to: Math.min(current + AutoRowSize.CALCULATION_STEP, length) }, colRange);
      current = current + AutoRowSize.CALCULATION_STEP + 1;

      if (current < length) {
        timer = (0, _feature.requestAnimationFrame)(loop);
      } else {
        (0, _feature.cancelAnimationFrame)(timer);
        this.inProgress = false;

        this.hot.view.wt.wtOverlays.adjustElementsSize(true);

        if (this.hot.view.wt.wtOverlays.leftOverlay.needFullRender) {
          this.hot.view.wt.wtOverlays.leftOverlay.clone.draw();
        }
      }
    };

    if (this.firstCalculation && this.getSyncCalculationLimit()) {
      this.calculateRowsHeight({ from: 0, to: this.getSyncCalculationLimit() }, colRange);
      this.firstCalculation = false;
      current = this.getSyncCalculationLimit() + 1;
    }

    if (current < length) {
      loop();
    } else {
      this.inProgress = false;
      this.hot.view.wt.wtOverlays.adjustElementsSize(false);
    }
  }

  setSamplingOptions() {
    let setting = this.hot.getSettings().autoRowSize;
    let samplingRatio = setting && (0, _object.hasOwnProperty)(setting, 'samplingRatio') ? this.hot.getSettings().autoRowSize.samplingRatio : void 0;
    let allowSampleDuplicates = setting && (0, _object.hasOwnProperty)(setting, 'allowSampleDuplicates') ? this.hot.getSettings().autoRowSize.allowSampleDuplicates : void 0;

    if (samplingRatio && !isNaN(samplingRatio)) {
      this.samplesGenerator.setSampleCount(parseInt(samplingRatio, 10));
    }

    if (allowSampleDuplicates) {
      this.samplesGenerator.setAllowDuplicates(allowSampleDuplicates);
    }
  }

  recalculateAllRowsHeight() {
    if ((0, _element.isVisible)(this.hot.view.wt.wtTable.TABLE)) {
      this.clearCache();
      this.calculateAllRowsHeight();
    }
  }

  getSyncCalculationLimit() {
    let limit = AutoRowSize.SYNC_CALCULATION_LIMIT;
    let rowsLimit = this.hot.countRows() - 1;

    if ((0, _object.isObject)(this.hot.getSettings().autoRowSize)) {
      limit = this.hot.getSettings().autoRowSize.syncLimit;

      if ((0, _string.isPercentValue)(limit)) {
        limit = (0, _number.valueAccordingPercent)(rowsLimit, limit);
      } else {
        limit >>= 0;
      }
    }

    return Math.min(limit, rowsLimit);
  }

  getRowHeight(row) {
    let defaultHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;

    let height = defaultHeight;

    if (this.heights[row] !== void 0 && this.heights[row] > (defaultHeight || 0)) {
      height = this.heights[row];
    }

    return height;
  }

  getColumnHeaderHeight() {
    return this.heights[-1];
  }

  getFirstVisibleRow() {
    const wot = this.hot.view.wt;

    if (wot.wtViewport.rowsVisibleCalculator) {
      return wot.wtTable.getFirstVisibleRow();
    }
    if (wot.wtViewport.rowsRenderCalculator) {
      return wot.wtTable.getFirstRenderedRow();
    }

    return -1;
  }

  getLastVisibleRow() {
    const wot = this.hot.view.wt;

    if (wot.wtViewport.rowsVisibleCalculator) {
      return wot.wtTable.getLastVisibleRow();
    }
    if (wot.wtViewport.rowsRenderCalculator) {
      return wot.wtTable.getLastRenderedRow();
    }

    return -1;
  }

  clearCache() {
    this.heights.length = 0;
    this.heights[-1] = void 0;
  }

  clearCacheByRange(range) {
    if (typeof range === 'number') {
      range = { from: range, to: range };
    }
    (0, _number.rangeEach)(Math.min(range.from, range.to), Math.max(range.from, range.to), row => {
      this.heights[row] = void 0;
    });
  }

  isNeedRecalculate() {
    return !!(0, _array.arrayFilter)(this.heights, item => item === void 0).length;
  }

  onBeforeRender() {
    let force = this.hot.renderCall;
    this.calculateRowsHeight({ from: this.getFirstVisibleRow(), to: this.getLastVisibleRow() }, void 0, force);

    let fixedRowsBottom = this.hot.getSettings().fixedRowsBottom;

    if (fixedRowsBottom) {
      let totalRows = this.hot.countRows() - 1;
      this.calculateRowsHeight({ from: totalRows - fixedRowsBottom, to: totalRows });
    }

    if (this.isNeedRecalculate() && !this.inProgress) {
      this.calculateAllRowsHeight();
    }
  }

  onBeforeRowMove(from, to) {
    this.clearCacheByRange({ from, to });
    this.calculateAllRowsHeight();
  }

  onBeforeRowResize(row, size, isDblClick) {
    if (isDblClick) {
      this.calculateRowsHeight(row, void 0, true);
      size = this.getRowHeight(row);
    }

    return size;
  }

  onAfterLoadData() {
    if (this.hot.view) {
      this.recalculateAllRowsHeight();
    } else {
      setTimeout(() => {
        if (this.hot) {
          this.recalculateAllRowsHeight();
        }
      }, 0);
    }
  }

  onBeforeChange(changes) {
    let range = null;

    if (changes.length === 1) {
      range = changes[0][0];
    } else if (changes.length > 1) {
      range = {
        from: changes[0][0],
        to: changes[changes.length - 1][0]
      };
    }
    if (range !== null) {
      this.clearCacheByRange(range);
    }
  }

  destroy() {
    this.ghostTable.clean();
    super.destroy();
  }
}

(0, _plugins.registerPlugin)('autoRowSize', AutoRowSize);

exports.default = AutoRowSize;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

class CommandExecutor {
  constructor(hotInstance) {
    this.hot = hotInstance;
    this.commands = {};
    this.commonCallback = null;
  }

  registerCommand(name, commandDescriptor) {
    this.commands[name] = commandDescriptor;
  }

  setCommonCallback(callback) {
    this.commonCallback = callback;
  }

  execute(commandName) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    let commandSplit = commandName.split(':');
    commandName = commandSplit[0];

    let subCommandName = commandSplit.length === 2 ? commandSplit[1] : null;
    let command = this.commands[commandName];

    if (!command) {
      throw new Error(`Menu command '${commandName}' not exists.`);
    }
    if (subCommandName && command.submenu) {
      command = findSubCommand(subCommandName, command.submenu.items);
    }
    if (command.disabled === true) {
      return;
    }
    if (typeof command.disabled == 'function' && command.disabled.call(this.hot) === true) {
      return;
    }
    if ((0, _object.hasOwnProperty)(command, 'submenu')) {
      return;
    }
    let callbacks = [];

    if (typeof command.callback === 'function') {
      callbacks.push(command.callback);
    }
    if (typeof this.commonCallback === 'function') {
      callbacks.push(this.commonCallback);
    }
    params.unshift(commandSplit.join(':'));
    (0, _array.arrayEach)(callbacks, callback => callback.apply(this.hot, params));
  }
}

function findSubCommand(subCommandName, subCommands) {
  let command;

  (0, _array.arrayEach)(subCommands, cmd => {
    let cmds = cmd.key ? cmd.key.split(':') : null;

    if (Array.isArray(cmds) && cmds[1] === subCommandName) {
      command = cmd;

      return false;
    }
  });

  return command;
}

exports.default = CommandExecutor;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _array = __webpack_require__(1);

var _commandExecutor = __webpack_require__(74);

var _commandExecutor2 = _interopRequireDefault(_commandExecutor);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _itemsFactory = __webpack_require__(77);

var _itemsFactory2 = _interopRequireDefault(_itemsFactory);

var _menu = __webpack_require__(78);

var _menu2 = _interopRequireDefault(_menu);

var _plugins = __webpack_require__(7);

var _event = __webpack_require__(5);

var _element = __webpack_require__(0);

var _predefinedItems = __webpack_require__(30);

__webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pluginHooks2.default.getSingleton().register('afterContextMenuDefaultOptions');
_pluginHooks2.default.getSingleton().register('afterContextMenuShow');
_pluginHooks2.default.getSingleton().register('afterContextMenuHide');
_pluginHooks2.default.getSingleton().register('afterContextMenuExecute');

class ContextMenu extends _base2.default {
  static get DEFAULT_ITEMS() {
    return [_predefinedItems.ROW_ABOVE, _predefinedItems.ROW_BELOW, _predefinedItems.SEPARATOR, _predefinedItems.COLUMN_LEFT, _predefinedItems.COLUMN_RIGHT, _predefinedItems.SEPARATOR, _predefinedItems.REMOVE_ROW, _predefinedItems.REMOVE_COLUMN];
  }

  constructor(hotInstance) {
    super(hotInstance);

    this.eventManager = new _eventManager2.default(this);

    this.commandExecutor = new _commandExecutor2.default(this.hot);

    this.itemsFactory = null;

    this.menu = null;
  }

  isEnabled() {
    return this.hot.getSettings().contextMenu;
  }

  enablePlugin() {
    var _this = this;

    if (this.enabled) {
      return;
    }
    this.itemsFactory = new _itemsFactory2.default(this.hot, ContextMenu.DEFAULT_ITEMS);

    const settings = this.hot.getSettings().contextMenu;
    let predefinedItems = {
      items: this.itemsFactory.getItems(settings)
    };
    this.registerEvents();

    if (typeof settings.callback === 'function') {
      this.commandExecutor.setCommonCallback(settings.callback);
    }
    super.enablePlugin();

    this.callOnPluginsReady(() => {
      this.hot.runHooks('afterContextMenuDefaultOptions', predefinedItems);

      this.itemsFactory.setPredefinedItems(predefinedItems.items);
      let menuItems = this.itemsFactory.getItems(settings);

      this.menu = new _menu2.default(this.hot, {
        className: 'htContextMenu',
        keepInViewport: true
      });
      this.hot.runHooks('beforeContextMenuSetItems', menuItems);

      this.menu.setMenuItems(menuItems);

      this.menu.addLocalHook('afterOpen', () => this.onMenuAfterOpen());
      this.menu.addLocalHook('afterClose', () => this.onMenuAfterClose());
      this.menu.addLocalHook('executeCommand', function () {
        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        return _this.executeCommand.apply(_this, params);
      });

      (0, _array.arrayEach)(menuItems, command => this.commandExecutor.registerCommand(command.key, command));
    });
  }

  updatePlugin() {
    this.disablePlugin();
    this.enablePlugin();

    super.updatePlugin();
  }

  disablePlugin() {
    this.close();

    if (this.menu) {
      this.menu.destroy();
      this.menu = null;
    }
    super.disablePlugin();
  }

  registerEvents() {
    this.eventManager.addEventListener(this.hot.rootElement, 'contextmenu', event => this.onContextMenu(event));
  }

  open(event) {
    if (!this.menu) {
      return;
    }
    this.menu.open();
    this.menu.setPosition({
      top: parseInt((0, _event.pageY)(event), 10) - (0, _element.getWindowScrollTop)(),
      left: parseInt((0, _event.pageX)(event), 10) - (0, _element.getWindowScrollLeft)()
    });

    this.menu.hotMenu.isHotTableEnv = this.hot.isHotTableEnv;
  }

  close() {
    if (!this.menu) {
      return;
    }
    this.menu.close();
  }

  executeCommand() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    this.commandExecutor.execute.apply(this.commandExecutor, params);
  }

  onContextMenu(event) {
    let settings = this.hot.getSettings();
    let showRowHeaders = settings.rowHeaders;
    let showColHeaders = settings.colHeaders;

    function isValidElement(element) {
      return element.nodeName === 'TD' || element.parentNode.nodeName === 'TD';
    }

    let element = event.realTarget;
    this.close();

    if ((0, _element.hasClass)(element, 'handsontableInput')) {
      return;
    }

    event.preventDefault();
    (0, _event.stopPropagation)(event);

    if (!(showRowHeaders || showColHeaders)) {
      if (!isValidElement(element) && !((0, _element.hasClass)(element, 'current') && (0, _element.hasClass)(element, 'wtBorder'))) {
        return;
      }
    }

    this.open(event);
  }

  onMenuAfterOpen() {
    this.hot.runHooks('afterContextMenuShow', this);
  }

  onMenuAfterClose() {
    this.hot.listen();
    this.hot.runHooks('afterContextMenuHide', this);
  }

  destroy() {
    this.close();

    if (this.menu) {
      this.menu.destroy();
    }
    super.destroy();
  }
}

ContextMenu.SEPARATOR = {
  name: _predefinedItems.SEPARATOR
};

(0, _plugins.registerPlugin)('contextMenu', ContextMenu);

exports.default = ContextMenu;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _event = __webpack_require__(5);

class Cursor {
  constructor(object) {
    let windowScrollTop = (0, _element.getWindowScrollTop)();
    let windowScrollLeft = (0, _element.getWindowScrollLeft)();
    let top, topRelative;
    let left, leftRelative;
    let cellHeight, cellWidth;

    this.type = this.getSourceType(object);

    if (this.type === 'literal') {
      top = parseInt(object.top, 10);
      left = parseInt(object.left, 10);
      cellHeight = object.height || 0;
      cellWidth = object.width || 0;
      topRelative = top;
      leftRelative = left;
      top += windowScrollTop;
      left += windowScrollLeft;
    } else if (this.type === 'event') {
      top = parseInt((0, _event.pageY)(object), 10);
      left = parseInt((0, _event.pageX)(object), 10);
      cellHeight = object.target.clientHeight;
      cellWidth = object.target.clientWidth;
      topRelative = top - windowScrollTop;
      leftRelative = left - windowScrollLeft;
    }

    this.top = top;
    this.topRelative = topRelative;
    this.left = left;
    this.leftRelative = leftRelative;
    this.scrollTop = windowScrollTop;
    this.scrollLeft = windowScrollLeft;
    this.cellHeight = cellHeight;
    this.cellWidth = cellWidth;
  }

  getSourceType(object) {
    let type = 'literal';

    if (object instanceof Event) {
      type = 'event';
    }

    return type;
  }

  fitsAbove(element) {
    return this.topRelative >= element.offsetHeight;
  }

  fitsBelow(element) {
    let viewportHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerHeight;

    return this.topRelative + element.offsetHeight <= viewportHeight;
  }

  fitsOnRight(element) {
    let viewportWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerWidth;

    return this.leftRelative + this.cellWidth + element.offsetWidth <= viewportWidth;
  }

  fitsOnLeft(element) {
    return this.leftRelative >= element.offsetWidth;
  }
}

exports.default = Cursor;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _object = __webpack_require__(2);

var _array = __webpack_require__(1);

var _predefinedItems = __webpack_require__(30);

class ItemsFactory {
  constructor(hotInstance) {
    let orderPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    this.hot = hotInstance;
    this.predefinedItems = (0, _predefinedItems.predefinedItems)();
    this.defaultOrderPattern = orderPattern;
  }

  setPredefinedItems(predefinedItems) {
    let items = {};

    this.defaultOrderPattern.length = 0;

    (0, _object.objectEach)(predefinedItems, (value, key) => {
      let menuItemKey = '';

      if (value.name === _predefinedItems.SEPARATOR) {
        items[_predefinedItems.SEPARATOR] = value;
        menuItemKey = _predefinedItems.SEPARATOR;
      } else if (isNaN(parseInt(key, 10))) {
        value.key = value.key === void 0 ? key : value.key;
        items[key] = value;
        menuItemKey = value.key;
      } else {
        items[value.key] = value;
        menuItemKey = value.key;
      }
      this.defaultOrderPattern.push(menuItemKey);
    });
    this.predefinedItems = items;
  }

  getItems() {
    let pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    return getItems(pattern, this.defaultOrderPattern, this.predefinedItems);
  }
}

function getItems() {
  let pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let defaultPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  let result = [];

  if (pattern && pattern.items) {
    pattern = pattern.items;
  } else if (!Array.isArray(pattern)) {
    pattern = defaultPattern;
  }
  if ((0, _object.isObject)(pattern)) {
    (0, _object.objectEach)(pattern, (value, key) => {
      let item = items[typeof value === 'string' ? value : key];

      if (!item) {
        item = value;
      }
      if ((0, _object.isObject)(value)) {
        (0, _object.extend)(item, value);
      } else if (typeof item === 'string') {
        item = { name: item };
      }
      if (item.key === void 0) {
        item.key = key;
      }
      result.push(item);
    });
  } else {
    (0, _array.arrayEach)(pattern, (name, key) => {
      let item = items[name];

      if (!item && _predefinedItems.ITEMS.indexOf(name) >= 0) {
        return;
      }
      if (!item) {
        item = { name, key: `${key}` };
      }
      if ((0, _object.isObject)(name)) {
        (0, _object.extend)(item, name);
      }
      if (item.key === void 0) {
        item.key = key;
      }
      result.push(item);
    });
  }

  return result;
}

exports.default = ItemsFactory;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _core = __webpack_require__(23);

var _core2 = _interopRequireDefault(_core);

var _element = __webpack_require__(0);

var _array = __webpack_require__(1);

var _cursor = __webpack_require__(76);

var _cursor2 = _interopRequireDefault(_cursor);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _object = __webpack_require__(2);

var _function = __webpack_require__(17);

var _utils = __webpack_require__(13);

var _unicode = __webpack_require__(16);

var _localHooks = __webpack_require__(70);

var _localHooks2 = _interopRequireDefault(_localHooks);

var _predefinedItems = __webpack_require__(30);

var _event = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Menu {
  constructor(hotInstance, options) {
    this.hot = hotInstance;
    this.options = options || {
      parent: null,
      name: null,
      className: '',
      keepInViewport: true,
      standalone: false
    };
    this.eventManager = new _eventManager2.default(this);
    this.container = this.createContainer(this.options.name);
    this.hotMenu = null;
    this.hotSubMenus = {};
    this.parentMenu = this.options.parent || null;
    this.menuItems = null;
    this.origOutsideClickDeselects = null;
    this.keyEvent = false;

    this.offset = {
      above: 0,
      below: 0,
      left: 0,
      right: 0
    };
    this._afterScrollCallback = null;

    this.registerEvents();
  }

  registerEvents() {
    this.eventManager.addEventListener(document.documentElement, 'mousedown', event => this.onDocumentMouseDown(event));
  }

  setMenuItems(menuItems) {
    this.menuItems = menuItems;
  }

  setOffset(area) {
    let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.offset[area] = offset;
  }

  isSubMenu() {
    return this.parentMenu !== null;
  }

  open() {
    this.container.removeAttribute('style');
    this.container.style.display = 'block';

    const delayedOpenSubMenu = (0, _function.debounce)(row => this.openSubMenu(row), 300);

    let filteredItems = (0, _array.arrayFilter)(this.menuItems, item => (0, _utils.isItemHidden)(item, this.hot));

    filteredItems = (0, _utils.filterSeparators)(filteredItems, _predefinedItems.SEPARATOR);

    let settings = {
      data: filteredItems,
      colHeaders: false,
      colWidths: [200],
      autoRowSize: false,
      readOnly: true,
      copyPaste: false,
      columns: [{
        data: 'name',
        renderer: (hot, TD, row, col, prop, value) => this.menuItemRenderer(hot, TD, row, col, prop, value)
      }],
      renderAllRows: true,
      fragmentSelection: 'cell',
      disableVisualSelection: 'area',
      beforeKeyDown: event => this.onBeforeKeyDown(event),
      afterOnCellMouseOver: (event, coords, TD) => {
        if (this.isAllSubMenusClosed()) {
          delayedOpenSubMenu(coords.row);
        } else {
          this.openSubMenu(coords.row);
        }
      },
      rowHeights: row => filteredItems[row].name === _predefinedItems.SEPARATOR ? 1 : 23
    };
    this.origOutsideClickDeselects = this.hot.getSettings().outsideClickDeselects;
    this.hot.getSettings().outsideClickDeselects = false;
    this.hotMenu = new _core2.default(this.container, settings);
    this.hotMenu.addHook('afterInit', () => this.onAfterInit());
    this.hotMenu.addHook('afterSelection', (r, c, r2, c2, preventScrolling) => this.onAfterSelection(r, c, r2, c2, preventScrolling));
    this.hotMenu.init();
    this.hotMenu.listen();
    this.blockMainTableCallbacks();
    this.runLocalHooks('afterOpen');
  }

  close() {
    let closeParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!this.isOpened()) {
      return;
    }
    if (closeParent && this.parentMenu) {
      this.parentMenu.close();
    } else {
      this.closeAllSubMenus();
      this.container.style.display = 'none';
      this.releaseMainTableCallbacks();
      this.hotMenu.destroy();
      this.hotMenu = null;
      this.hot.getSettings().outsideClickDeselects = this.origOutsideClickDeselects;
      this.runLocalHooks('afterClose');

      if (this.parentMenu) {
        this.parentMenu.hotMenu.listen();
      }
    }
  }

  openSubMenu(row) {
    if (!this.hotMenu) {
      return false;
    }
    let cell = this.hotMenu.getCell(row, 0);

    this.closeAllSubMenus();

    if (!cell || !(0, _utils.hasSubMenu)(cell)) {
      return false;
    }
    let dataItem = this.hotMenu.getSourceDataAtRow(row);
    let subMenu = new Menu(this.hot, {
      parent: this,
      name: dataItem.name,
      className: this.options.className,
      keepInViewport: true
    });
    subMenu.setMenuItems(dataItem.submenu.items);
    subMenu.open();
    subMenu.setPosition(cell.getBoundingClientRect());
    this.hotSubMenus[dataItem.key] = subMenu;

    return subMenu;
  }

  closeSubMenu(row) {
    let dataItem = this.hotMenu.getSourceDataAtRow(row);
    let menus = this.hotSubMenus[dataItem.key];

    if (menus) {
      menus.destroy();
      delete this.hotSubMenus[dataItem.key];
    }
  }

  closeAllSubMenus() {
    (0, _array.arrayEach)(this.hotMenu.getData(), (value, row) => this.closeSubMenu(row));
  }

  isAllSubMenusClosed() {
    return Object.keys(this.hotSubMenus).length === 0;
  }

  destroy() {
    this.clearLocalHooks();
    this.close();
    this.parentMenu = null;
    this.eventManager.destroy();
  }

  isOpened() {
    return this.hotMenu !== null;
  }

  executeCommand(event) {
    if (!this.isOpened() || !this.hotMenu.getSelected()) {
      return;
    }
    const selectedItem = this.hotMenu.getSourceDataAtRow(this.hotMenu.getSelected()[0]);

    this.runLocalHooks('select', selectedItem, event);

    if (selectedItem.isCommand === false || selectedItem.name === _predefinedItems.SEPARATOR) {
      return;
    }
    const selRange = this.hot.getSelectedRange();
    const normalizedSelection = selRange ? (0, _utils.normalizeSelection)(selRange) : {};
    let autoClose = true;

    if (selectedItem.disabled === true || typeof selectedItem.disabled === 'function' && selectedItem.disabled.call(this.hot) === true || selectedItem.submenu) {
      autoClose = false;
    }

    this.runLocalHooks('executeCommand', selectedItem.key, normalizedSelection, event);

    if (this.isSubMenu()) {
      this.parentMenu.runLocalHooks('executeCommand', selectedItem.key, normalizedSelection, event);
    }

    if (autoClose) {
      this.close(true);
    }
  }

  setPosition(coords) {
    const cursor = new _cursor2.default(coords);

    if (this.options.keepInViewport) {
      if (cursor.fitsBelow(this.container)) {
        this.setPositionBelowCursor(cursor);
      } else if (cursor.fitsAbove(this.container)) {
        this.setPositionAboveCursor(cursor);
      } else {
        this.setPositionBelowCursor(cursor);
      }
      if (cursor.fitsOnRight(this.container)) {
        this.setPositionOnRightOfCursor(cursor);
      } else {
        this.setPositionOnLeftOfCursor(cursor);
      }
    } else {
      this.setPositionBelowCursor(cursor);
      this.setPositionOnRightOfCursor(cursor);
    }
  }

  setPositionAboveCursor(cursor) {
    let top = this.offset.above + cursor.top - this.container.offsetHeight;

    if (this.isSubMenu()) {
      top = cursor.top + cursor.cellHeight - this.container.offsetHeight + 3;
    }
    this.container.style.top = `${top}px`;
  }

  setPositionBelowCursor(cursor) {
    let top = this.offset.below + cursor.top;

    if (this.isSubMenu()) {
      top = cursor.top - 1;
    }
    this.container.style.top = `${top}px`;
  }

  setPositionOnRightOfCursor(cursor) {
    let left;

    if (this.isSubMenu()) {
      left = 1 + cursor.left + cursor.cellWidth;
    } else {
      left = this.offset.right + 1 + cursor.left;
    }

    this.container.style.left = `${left}px`;
  }

  setPositionOnLeftOfCursor(cursor) {
    let left = this.offset.left + cursor.left - this.container.offsetWidth + (0, _element.getScrollbarWidth)() + 4;

    this.container.style.left = `${left}px`;
  }

  selectFirstCell() {
    let cell = this.hotMenu.getCell(0, 0);

    if ((0, _utils.isSeparator)(cell) || (0, _utils.isDisabled)(cell) || (0, _utils.isSelectionDisabled)(cell)) {
      this.selectNextCell(0, 0);
    } else {
      this.hotMenu.selectCell(0, 0);
    }
  }

  selectLastCell() {
    let lastRow = this.hotMenu.countRows() - 1;
    let cell = this.hotMenu.getCell(lastRow, 0);

    if ((0, _utils.isSeparator)(cell) || (0, _utils.isDisabled)(cell) || (0, _utils.isSelectionDisabled)(cell)) {
      this.selectPrevCell(lastRow, 0);
    } else {
      this.hotMenu.selectCell(lastRow, 0);
    }
  }

  selectNextCell(row, col) {
    let nextRow = row + 1;
    let cell = nextRow < this.hotMenu.countRows() ? this.hotMenu.getCell(nextRow, col) : null;

    if (!cell) {
      return;
    }
    if ((0, _utils.isSeparator)(cell) || (0, _utils.isDisabled)(cell) || (0, _utils.isSelectionDisabled)(cell)) {
      this.selectNextCell(nextRow, col);
    } else {
      this.hotMenu.selectCell(nextRow, col);
    }
  }

  selectPrevCell(row, col) {
    let prevRow = row - 1;
    let cell = prevRow >= 0 ? this.hotMenu.getCell(prevRow, col) : null;

    if (!cell) {
      return;
    }
    if ((0, _utils.isSeparator)(cell) || (0, _utils.isDisabled)(cell) || (0, _utils.isSelectionDisabled)(cell)) {
      this.selectPrevCell(prevRow, col);
    } else {
      this.hotMenu.selectCell(prevRow, col);
    }
  }

  menuItemRenderer(hot, TD, row, col, prop, value) {
    let item = hot.getSourceDataAtRow(row);
    let wrapper = document.createElement('div');

    let isSubMenu = item => (0, _object.hasOwnProperty)(item, 'submenu');
    let itemIsSeparator = item => new RegExp(_predefinedItems.SEPARATOR, 'i').test(item.name);
    let itemIsDisabled = item => item.disabled === true || typeof item.disabled == 'function' && item.disabled.call(this.hot) === true;
    let itemIsSelectionDisabled = item => item.disableSelection;

    if (typeof value === 'function') {
      value = value.call(this.hot);
    }
    (0, _element.empty)(TD);
    (0, _element.addClass)(wrapper, 'htItemWrapper');
    (0, _element.addClass)(wrapper, item.key);
    TD.appendChild(wrapper);

    if (itemIsSeparator(item)) {
      (0, _element.addClass)(TD, 'htSeparator');
    } else if (typeof item.renderer === 'function') {
      (0, _element.addClass)(TD, 'htCustomMenuRenderer');
      TD.appendChild(item.renderer(hot, wrapper, row, col, prop, value));
    } else {
      (0, _element.fastInnerHTML)(wrapper, value);
    }
    if (itemIsDisabled(item)) {
      (0, _element.addClass)(TD, 'htDisabled');
      this.eventManager.addEventListener(TD, 'mouseenter', () => hot.deselectCell());
    } else if (itemIsSelectionDisabled(item)) {
      (0, _element.addClass)(TD, 'htSelectionDisabled');
      this.eventManager.addEventListener(TD, 'mouseenter', () => hot.deselectCell());
    } else if (isSubMenu(item)) {
      (0, _element.addClass)(TD, 'htSubmenu');

      if (itemIsSelectionDisabled(item)) {
        this.eventManager.addEventListener(TD, 'mouseenter', () => hot.deselectCell());
      } else {
        this.eventManager.addEventListener(TD, 'mouseenter', () => hot.selectCell(row, col, void 0, void 0, false, false));
      }
    } else {
      (0, _element.removeClass)(TD, 'htSubmenu');
      (0, _element.removeClass)(TD, 'htDisabled');

      if (itemIsSelectionDisabled(item)) {
        this.eventManager.addEventListener(TD, 'mouseenter', () => hot.deselectCell());
      } else {
        this.eventManager.addEventListener(TD, 'mouseenter', () => hot.selectCell(row, col, void 0, void 0, false, false));
      }
    }
  }

  createContainer() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (name) {
      name = name.replace(/[^A-z0-9]/g, '_');
      name = `${this.options.className}Sub_${name}`;
    }
    let container;

    if (name) {
      container = document.querySelector(`.${this.options.className}.${name}`);
    } else {
      container = document.querySelector(`.${this.options.className}`);
    }
    if (!container) {
      container = document.createElement('div');
      (0, _element.addClass)(container, `htMenu ${this.options.className}`);

      if (name) {
        (0, _element.addClass)(container, name);
      }
      document.getElementsByTagName('body')[0].appendChild(container);
    }

    return container;
  }

  blockMainTableCallbacks() {
    this._afterScrollCallback = function () {};
    this.hot.addHook('afterScrollVertically', this._afterScrollCallback);
    this.hot.addHook('afterScrollHorizontally', this._afterScrollCallback);
  }

  releaseMainTableCallbacks() {
    if (this._afterScrollCallback) {
      this.hot.removeHook('afterScrollVertically', this._afterScrollCallback);
      this.hot.removeHook('afterScrollHorizontally', this._afterScrollCallback);
      this._afterScrollCallback = null;
    }
  }

  onBeforeKeyDown(event) {
    let selection = this.hotMenu.getSelected();
    let stopEvent = false;
    this.keyEvent = true;

    switch (event.keyCode) {
      case _unicode.KEY_CODES.ESCAPE:
        this.close();
        stopEvent = true;
        break;

      case _unicode.KEY_CODES.ENTER:
        if (selection) {
          if (this.hotMenu.getSourceDataAtRow(selection[0]).submenu) {
            stopEvent = true;
          } else {
            this.executeCommand(event);
            this.close(true);
          }
        }
        break;

      case _unicode.KEY_CODES.ARROW_DOWN:
        if (selection) {
          this.selectNextCell(selection[0], selection[1]);
        } else {
          this.selectFirstCell();
        }
        stopEvent = true;
        break;

      case _unicode.KEY_CODES.ARROW_UP:
        if (selection) {
          this.selectPrevCell(selection[0], selection[1]);
        } else {
          this.selectLastCell();
        }
        stopEvent = true;
        break;

      case _unicode.KEY_CODES.ARROW_RIGHT:
        if (selection) {
          let menu = this.openSubMenu(selection[0]);

          if (menu) {
            menu.selectFirstCell();
          }
        }
        stopEvent = true;

        break;

      case _unicode.KEY_CODES.ARROW_LEFT:
        if (selection && this.isSubMenu()) {
          this.close();

          if (this.parentMenu) {
            this.parentMenu.hotMenu.listen();
          }
          stopEvent = true;
        }
        break;
      default:
        break;
    }
    if (stopEvent) {
      event.preventDefault();
      (0, _event.stopImmediatePropagation)(event);
    }

    this.keyEvent = false;
  }

  onAfterInit() {
    const data = this.hotMenu.getSettings().data;
    const hiderStyle = this.hotMenu.view.wt.wtTable.hider.style;
    const holderStyle = this.hotMenu.view.wt.wtTable.holder.style;
    let currentHiderWidth = parseInt(hiderStyle.width, 10);

    let realHeight = (0, _array.arrayReduce)(data, (accumulator, value) => accumulator + (value.name === _predefinedItems.SEPARATOR ? 1 : 26), 0);

    holderStyle.width = `${currentHiderWidth + 22}px`;
    holderStyle.height = `${realHeight + 4}px`;
    hiderStyle.height = holderStyle.height;
  }

  onAfterSelection(r, c, r2, c2, preventScrolling) {
    if (this.keyEvent === false) {
      preventScrolling.value = true;
    }
  }

  onDocumentMouseDown(event) {
    if (!this.isOpened()) {
      return;
    }
    if (this.container && (0, _element.isChildOf)(event.target, this.container)) {
      this.executeCommand(event);
    }

    if (this.options.standalone && this.hotMenu && !(0, _element.isChildOf)(event.target, this.hotMenu.rootElement)) {
      this.close(true);
    } else if ((this.isAllSubMenusClosed() || this.isSubMenu()) && !(0, _element.isChildOf)(event.target, '.htMenu') && (0, _element.isChildOf)(event.target, document)) {
      this.close(true);
    }
  }
}

(0, _object.mixin)(Menu, _localHooks2.default);

exports.default = Menu;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = columnLeftItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'col_left';

function columnLeftItem() {
  return {
    key: KEY,
    name: 'Insert column on the left',
    callback(key, selection) {
      this.alter('insert_col', selection.start.col, 1, 'ContextMenu.columnLeft');
    },
    disabled() {
      let selected = (0, _utils.getValidSelection)(this);

      if (!selected) {
        return true;
      }
      if (!this.isColumnModificationAllowed()) {
        return true;
      }
      let entireRowSelection = [selected[0], 0, selected[0], this.countCols() - 1];
      let rowSelected = entireRowSelection.join(',') == selected.join(',');
      let onlyOneColumn = this.countCols() === 1;

      return selected[1] < 0 || this.countCols() >= this.getSettings().maxCols || !onlyOneColumn && rowSelected;
    },
    hidden() {
      return !this.getSettings().allowInsertColumn;
    }
  };
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = columnRightItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'col_right';

function columnRightItem() {
  return {
    key: KEY,
    name: 'Insert column on the right',

    callback(key, selection) {
      this.alter('insert_col', selection.end.col + 1, 1, 'ContextMenu.columnRight');
    },
    disabled() {
      let selected = (0, _utils.getValidSelection)(this);

      if (!selected) {
        return true;
      }
      if (!this.isColumnModificationAllowed()) {
        return true;
      }
      let entireRowSelection = [selected[0], 0, selected[0], this.countCols() - 1];
      let rowSelected = entireRowSelection.join(',') == selected.join(',');
      let onlyOneColumn = this.countCols() === 1;

      return selected[1] < 0 || this.countCols() >= this.getSettings().maxCols || !onlyOneColumn && rowSelected;
    },
    hidden() {
      return !this.getSettings().allowInsertColumn;
    }
  };
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = removeColumnItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'remove_col';

function removeColumnItem() {
  return {
    key: KEY,
    name: 'Remove column',

    callback(key, selection) {
      let amount = selection.end.col - selection.start.col + 1;

      this.alter('remove_col', selection.start.col, amount, 'ContextMenu.removeColumn');
    },
    disabled() {
      const selected = (0, _utils.getValidSelection)(this);
      const totalColumns = this.countCols();

      return !selected || this.selection.selectedHeader.rows || this.selection.selectedHeader.corner || !this.isColumnModificationAllowed() || !totalColumns;
    },
    hidden() {
      return !this.getSettings().allowRemoveColumn;
    }
  };
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = removeRowItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'remove_row';

function removeRowItem() {
  return {
    key: KEY,
    name: 'Remove row',

    callback(key, selection) {
      let amount = selection.end.row - selection.start.row + 1;

      this.alter('remove_row', selection.start.row, amount, 'ContextMenu.removeRow');
    },
    disabled() {
      const selected = (0, _utils.getValidSelection)(this);
      const totalRows = this.countRows();

      return !selected || this.selection.selectedHeader.cols || this.selection.selectedHeader.corner || !totalRows;
    },
    hidden() {
      return !this.getSettings().allowRemoveRow;
    }
  };
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = rowAboveItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'row_above';

function rowAboveItem() {
  return {
    key: KEY,
    name: 'Insert row above',

    callback(key, selection) {
      this.alter('insert_row', selection.start.row, 1, 'ContextMenu.rowAbove');
    },
    disabled() {
      let selected = (0, _utils.getValidSelection)(this);

      return !selected || this.selection.selectedHeader.cols || this.countRows() >= this.getSettings().maxRows;
    },
    hidden() {
      return !this.getSettings().allowInsertRow;
    }
  };
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEY = undefined;
exports.default = rowBelowItem;

var _utils = __webpack_require__(13);

const KEY = exports.KEY = 'row_below';

function rowBelowItem() {
  return {
    key: KEY,
    name: 'Insert row below',

    callback(key, selection) {
      this.alter('insert_row', selection.end.row + 1, 1, 'ContextMenu.rowBelow');
    },
    disabled() {
      let selected = (0, _utils.getValidSelection)(this);

      return !selected || this.selection.selectedHeader.cols || this.countRows() >= this.getSettings().maxRows;
    },
    hidden() {
      return !this.getSettings().allowInsertRow;
    }
  };
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = copyItem;
function copyItem(copyPastePlugin) {
  return {
    key: 'copy',
    name: 'Copy',
    callback() {
      copyPastePlugin.setCopyableText();
      copyPastePlugin.copy(true);
    },
    disabled() {
      return !copyPastePlugin.hot.getSelected();
    },
    hidden: false
  };
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = cutItem;
function cutItem(copyPastePlugin) {
  return {
    key: 'cut',
    name: 'Cut',
    callback() {
      copyPastePlugin.setCopyableText();
      copyPastePlugin.cut(true);
    },
    disabled() {
      return !copyPastePlugin.hot.getSelected();
    },
    hidden: false
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _SheetClip = __webpack_require__(33);

var _SheetClip2 = _interopRequireDefault(_SheetClip);

var _src = __webpack_require__(8);

var _unicode = __webpack_require__(16);

var _element = __webpack_require__(0);

var _array = __webpack_require__(1);

var _number = __webpack_require__(3);

var _event = __webpack_require__(5);

var _plugins = __webpack_require__(7);

var _textarea = __webpack_require__(88);

var _textarea2 = _interopRequireDefault(_textarea);

var _copy = __webpack_require__(85);

var _copy2 = _interopRequireDefault(_copy);

var _cut = __webpack_require__(86);

var _cut2 = _interopRequireDefault(_cut);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pluginHooks2.default.getSingleton().register('afterCopyLimit');
_pluginHooks2.default.getSingleton().register('modifyCopyableRange');
_pluginHooks2.default.getSingleton().register('beforeCut');
_pluginHooks2.default.getSingleton().register('afterCut');
_pluginHooks2.default.getSingleton().register('beforePaste');
_pluginHooks2.default.getSingleton().register('afterPaste');
_pluginHooks2.default.getSingleton().register('beforeCopy');
_pluginHooks2.default.getSingleton().register('afterCopy');

const ROWS_LIMIT = 1000;
const COLUMNS_LIMIT = 1000;
const privatePool = new WeakMap();

class CopyPaste extends _base2.default {
  constructor(hotInstance) {
    super(hotInstance);

    this.eventManager = new _eventManager2.default(this);

    this.columnsLimit = COLUMNS_LIMIT;

    this.copyableRanges = [];

    this.pasteMode = 'overwrite';

    this.rowsLimit = ROWS_LIMIT;

    this.textarea = void 0;

    privatePool.set(this, {
      isTriggeredByPaste: false
    });
  }

  isEnabled() {
    return !!this.hot.getSettings().copyPaste;
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    const settings = this.hot.getSettings();

    this.textarea = _textarea2.default.getSingleton();

    if (typeof settings.copyPaste === 'object') {
      this.pasteMode = settings.copyPaste.pasteMode || this.pasteMode;
      this.rowsLimit = settings.copyPaste.rowsLimit || this.rowsLimit;
      this.columnsLimit = settings.copyPaste.columnsLimit || this.columnsLimit;
    }

    this.addHook('afterContextMenuDefaultOptions', options => this.onAfterContextMenuDefaultOptions(options));
    this.addHook('beforeKeyDown', event => this.onBeforeKeyDown(event));

    this.registerEvents();

    super.enablePlugin();
  }

  updatePlugin() {
    this.disablePlugin();
    this.enablePlugin();

    super.updatePlugin();
  }

  disablePlugin() {
    if (this.textarea) {
      this.textarea.destroy();
    }

    super.disablePlugin();
  }

  setCopyableText() {
    let selRange = this.hot.getSelectedRange();

    if (!selRange) {
      return;
    }

    let topLeft = selRange.getTopLeftCorner();
    let bottomRight = selRange.getBottomRightCorner();
    let startRow = topLeft.row;
    let startCol = topLeft.col;
    let endRow = bottomRight.row;
    let endCol = bottomRight.col;
    let finalEndRow = Math.min(endRow, startRow + this.rowsLimit - 1);
    let finalEndCol = Math.min(endCol, startCol + this.columnsLimit - 1);

    this.copyableRanges.length = 0;

    this.copyableRanges.push({
      startRow,
      startCol,
      endRow: finalEndRow,
      endCol: finalEndCol
    });

    this.copyableRanges = this.hot.runHooks('modifyCopyableRange', this.copyableRanges);

    let copyableData = this.getRangedCopyableData(this.copyableRanges);

    this.textarea.setValue(copyableData);

    if (endRow !== finalEndRow || endCol !== finalEndCol) {
      this.hot.runHooks('afterCopyLimit', endRow - startRow + 1, endCol - startCol + 1, this.rowsLimit, this.columnsLimit);
    }
  }

  getRangedCopyableData(ranges) {
    let dataSet = [];
    let copyableRows = [];
    let copyableColumns = [];

    (0, _array.arrayEach)(ranges, range => {
      (0, _number.rangeEach)(range.startRow, range.endRow, row => {
        if (copyableRows.indexOf(row) === -1) {
          copyableRows.push(row);
        }
      });
      (0, _number.rangeEach)(range.startCol, range.endCol, column => {
        if (copyableColumns.indexOf(column) === -1) {
          copyableColumns.push(column);
        }
      });
    });

    (0, _array.arrayEach)(copyableRows, row => {
      let rowSet = [];

      (0, _array.arrayEach)(copyableColumns, column => {
        rowSet.push(this.hot.getCopyableData(row, column));
      });

      dataSet.push(rowSet);
    });

    return _SheetClip2.default.stringify(dataSet);
  }

  getRangedData(ranges) {
    let dataSet = [];
    let copyableRows = [];
    let copyableColumns = [];

    (0, _array.arrayEach)(ranges, range => {
      (0, _number.rangeEach)(range.startRow, range.endRow, row => {
        if (copyableRows.indexOf(row) === -1) {
          copyableRows.push(row);
        }
      });
      (0, _number.rangeEach)(range.startCol, range.endCol, column => {
        if (copyableColumns.indexOf(column) === -1) {
          copyableColumns.push(column);
        }
      });
    });

    (0, _array.arrayEach)(copyableRows, row => {
      let rowSet = [];

      (0, _array.arrayEach)(copyableColumns, column => {
        rowSet.push(this.hot.getCopyableData(row, column));
      });

      dataSet.push(rowSet);
    });

    return dataSet;
  }

  copy(isTriggeredByClick) {
    let rangedData = this.getRangedData(this.copyableRanges);

    let allowCopying = !!this.hot.runHooks('beforeCopy', rangedData, this.copyableRanges);

    if (allowCopying) {
      this.textarea.setValue(_SheetClip2.default.stringify(rangedData));
      this.textarea.select();

      if (isTriggeredByClick) {
        document.execCommand('copy');
      }

      this.hot.runHooks('afterCopy', rangedData, this.copyableRanges);
    } else {
      this.textarea.setValue('');
    }
  }

  cut(isTriggeredByClick) {
    let rangedData = this.getRangedData(this.copyableRanges);

    let allowCuttingOut = !!this.hot.runHooks('beforeCut', rangedData, this.copyableRanges);

    if (allowCuttingOut) {
      this.textarea.setValue(_SheetClip2.default.stringify(rangedData));
      this.hot.selection.empty();
      this.textarea.select();

      if (isTriggeredByClick) {
        document.execCommand('cut');
      }

      this.hot.runHooks('afterCut', rangedData, this.copyableRanges);
    } else {
      this.textarea.setValue('');
    }
  }

  paste() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    this.textarea.setValue(value);

    this.onPaste();
    this.onInput();
  }

  registerEvents() {
    this.eventManager.addEventListener(this.textarea.element, 'paste', event => this.onPaste(event));
    this.eventManager.addEventListener(this.textarea.element, 'input', event => this.onInput(event));
  }

  triggerPaste() {
    this.textarea.select();

    this.onPaste();
  }

  onPaste() {
    const priv = privatePool.get(this);

    priv.isTriggeredByPaste = true;
  }

  onInput() {
    const priv = privatePool.get(this);

    if (!this.hot.isListening() || !priv.isTriggeredByPaste) {
      return;
    }

    priv.isTriggeredByPaste = false;

    let input, inputArray, selected, coordsFrom, coordsTo, cellRange, topLeftCorner, bottomRightCorner, areaStart, areaEnd;

    input = this.textarea.getValue();
    inputArray = _SheetClip2.default.parse(input);

    let allowPasting = !!this.hot.runHooks('beforePaste', inputArray, this.copyableRanges);

    if (!allowPasting) {
      return;
    }

    selected = this.hot.getSelected();
    coordsFrom = new _src.CellCoords(selected[0], selected[1]);
    coordsTo = new _src.CellCoords(selected[2], selected[3]);
    cellRange = new _src.CellRange(coordsFrom, coordsFrom, coordsTo);
    topLeftCorner = cellRange.getTopLeftCorner();
    bottomRightCorner = cellRange.getBottomRightCorner();
    areaStart = topLeftCorner;
    areaEnd = new _src.CellCoords(Math.max(bottomRightCorner.row, inputArray.length - 1 + topLeftCorner.row), Math.max(bottomRightCorner.col, inputArray[0].length - 1 + topLeftCorner.col));

    let isSelRowAreaCoverInputValue = coordsTo.row - coordsFrom.row >= inputArray.length - 1;
    let isSelColAreaCoverInputValue = coordsTo.col - coordsFrom.col >= inputArray[0].length - 1;

    this.hot.addHookOnce('afterChange', (changes, source) => {
      let changesLength = changes ? changes.length : 0;

      if (changesLength) {
        let offset = { row: 0, col: 0 };
        let highestColumnIndex = -1;

        (0, _array.arrayEach)(changes, (change, index) => {
          let nextChange = changesLength > index + 1 ? changes[index + 1] : null;

          if (nextChange) {
            if (!isSelRowAreaCoverInputValue) {
              offset.row += Math.max(nextChange[0] - change[0] - 1, 0);
            }
            if (!isSelColAreaCoverInputValue && change[1] > highestColumnIndex) {
              highestColumnIndex = change[1];
              offset.col += Math.max(nextChange[1] - change[1] - 1, 0);
            }
          }
        });
        this.hot.selectCell(areaStart.row, areaStart.col, areaEnd.row + offset.row, areaEnd.col + offset.col);
      }
    });

    this.hot.populateFromArray(areaStart.row, areaStart.col, inputArray, areaEnd.row, areaEnd.col, 'CopyPaste.paste', this.pasteMode);
    this.hot.runHooks('afterPaste', inputArray, this.copyableRanges);
  }

  onAfterContextMenuDefaultOptions(options) {
    options.items.push({
      name: '---------'
    }, (0, _copy2.default)(this), (0, _cut2.default)(this));
  }

  onBeforeKeyDown(event) {
    if (!this.hot.getSelected()) {
      return;
    }
    if (this.hot.getActiveEditor() && this.hot.getActiveEditor().isOpened()) {
      return;
    }
    if ((0, _event.isImmediatePropagationStopped)(event)) {
      return;
    }
    if (!this.textarea.isActive() && (0, _element.getSelectionText)()) {
      return;
    }

    if ((0, _unicode.isCtrlKey)(event.keyCode)) {
      if (this.hot.getSettings().fragmentSelection && (0, _element.getSelectionText)()) {
        return;
      }

      this.setCopyableText();
      (0, _event.stopImmediatePropagation)(event);

      return;
    }

    let ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;

    if (ctrlDown) {
      if (event.keyCode == _unicode.KEY_CODES.A) {
        setTimeout(() => {
          this.setCopyableText();
        }, 0);
      }
      if (event.keyCode == _unicode.KEY_CODES.X) {
        this.cut();
      }
      if (event.keyCode == _unicode.KEY_CODES.C) {
        this.copy();
      }
      if (event.keyCode == _unicode.KEY_CODES.V) {
        this.triggerPaste();
      }
    }
  }

  destroy() {
    if (this.textarea) {
      this.textarea.destroy();
    }

    super.destroy();
  }
}

(0, _plugins.registerPlugin)('CopyPaste', CopyPaste);

exports.default = CopyPaste;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

class Textarea {
  static getSingleton() {
    globalSingleton.append();

    return globalSingleton;
  }

  constructor() {
    this.element = void 0;

    this.isAppended = false;

    this.refCounter = 0;
  }

  append() {
    if (this.hasBeenDestroyed()) {
      this.create();
    }

    this.refCounter++;

    if (!this.isAppended && document.body) {
      if (document.body) {
        this.isAppended = true;
        document.body.appendChild(this.element);
      }
    }
  }

  create() {
    this.element = document.createElement('textarea');
    this.element.id = 'HandsontableCopyPaste';
    this.element.className = 'copyPaste';
    this.element.tabIndex = -1;
    this.element.autocomplete = 'off';
    this.element.wrap = 'off';
  }

  deselect() {
    if (this.element === document.activeElement) {
      document.activeElement.blur();
    }
  }

  destroy() {
    this.refCounter--;
    this.refCounter = this.refCounter < 0 ? 0 : this.refCounter;

    if (this.hasBeenDestroyed() && this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
      this.isAppended = false;
    }
  }

  getValue() {
    return this.element.value;
  }

  hasBeenDestroyed() {
    return this.refCounter < 1;
  }

  isActive() {
    return this.element === document.activeElement;
  }

  select() {
    this.element.focus();
    this.element.select();
  }

  setValue(data) {
    this.element.value = data;
  }
}

const globalSingleton = new Textarea();

exports.default = Textarea;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _arrayMapper = __webpack_require__(47);

var _arrayMapper2 = _interopRequireDefault(_arrayMapper);

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ColumnsMapper {
  constructor(manualColumnMove) {
    this.manualColumnMove = manualColumnMove;
  }

  createMap(length) {
    let originLength = length === void 0 ? this._arrayMap.length : length;

    this._arrayMap.length = 0;

    (0, _number.rangeEach)(originLength - 1, itemIndex => {
      this._arrayMap[itemIndex] = itemIndex;
    });
  }

  destroy() {
    this._arrayMap = null;
  }

  moveColumn(from, to) {
    let indexToMove = this._arrayMap[from];
    this._arrayMap[from] = null;
    this._arrayMap.splice(to, 0, indexToMove);
  }

  clearNull() {
    this._arrayMap = (0, _array.arrayFilter)(this._arrayMap, i => i !== null);
  }
}

(0, _object.mixin)(ColumnsMapper, _arrayMapper2.default);

exports.default = ColumnsMapper;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _array = __webpack_require__(1);

var _element = __webpack_require__(0);

var _number = __webpack_require__(3);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _plugins = __webpack_require__(7);

var _columnsMapper = __webpack_require__(89);

var _columnsMapper2 = _interopRequireDefault(_columnsMapper);

var _backlight = __webpack_require__(91);

var _backlight2 = _interopRequireDefault(_backlight);

var _guideline = __webpack_require__(92);

var _guideline2 = _interopRequireDefault(_guideline);

var _src = __webpack_require__(8);

__webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pluginHooks2.default.getSingleton().register('beforeColumnMove');
_pluginHooks2.default.getSingleton().register('afterColumnMove');
_pluginHooks2.default.getSingleton().register('unmodifyCol');

const privatePool = new WeakMap();
const CSS_PLUGIN = 'ht__manualColumnMove';
const CSS_SHOW_UI = 'show-ui';
const CSS_ON_MOVING = 'on-moving--columns';
const CSS_AFTER_SELECTION = 'after-selection--columns';

class ManualColumnMove extends _base2.default {
  constructor(hotInstance) {
    super(hotInstance);

    privatePool.set(this, {
      columnsToMove: [],
      countCols: 0,
      fixedColumns: 0,
      pressed: void 0,
      disallowMoving: void 0,
      target: {
        eventPageX: void 0,
        coords: void 0,
        TD: void 0,
        col: void 0
      }
    });

    this.removedColumns = [];

    this.columnsMapper = new _columnsMapper2.default(this);

    this.eventManager = new _eventManager2.default(this);

    this.backlight = new _backlight2.default(hotInstance);

    this.guideline = new _guideline2.default(hotInstance);
  }

  isEnabled() {
    return !!this.hot.getSettings().manualColumnMove;
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    this.addHook('beforeOnCellMouseDown', (event, coords, TD, blockCalculations) => this.onBeforeOnCellMouseDown(event, coords, TD, blockCalculations));
    this.addHook('beforeOnCellMouseOver', (event, coords, TD, blockCalculations) => this.onBeforeOnCellMouseOver(event, coords, TD, blockCalculations));
    this.addHook('afterScrollVertically', () => this.onAfterScrollVertically());
    this.addHook('modifyCol', (row, source) => this.onModifyCol(row, source));
    this.addHook('beforeRemoveCol', (index, amount) => this.onBeforeRemoveCol(index, amount));
    this.addHook('afterRemoveCol', (index, amount) => this.onAfterRemoveCol(index, amount));
    this.addHook('afterCreateCol', (index, amount) => this.onAfterCreateCol(index, amount));
    this.addHook('afterLoadData', firstTime => this.onAfterLoadData(firstTime));
    this.addHook('unmodifyCol', column => this.onUnmodifyCol(column));

    this.registerEvents();

    (0, _element.addClass)(this.hot.rootElement, CSS_PLUGIN);

    super.enablePlugin();
  }

  updatePlugin() {
    this.disablePlugin();
    this.enablePlugin();

    this.onAfterPluginsInitialized();

    super.updatePlugin();
  }

  disablePlugin() {
    let pluginSettings = this.hot.getSettings().manualColumnMove;

    if (Array.isArray(pluginSettings)) {
      this.columnsMapper.clearMap();
    }

    (0, _element.removeClass)(this.hot.rootElement, CSS_PLUGIN);

    this.unregisterEvents();
    this.backlight.destroy();
    this.guideline.destroy();

    super.disablePlugin();
  }

  moveColumn(column, target) {
    this.moveColumns([column], target);
  }

  moveColumns(columns, target) {
    let priv = privatePool.get(this);
    let beforeColumnHook = this.hot.runHooks('beforeColumnMove', columns, target);

    priv.disallowMoving = !beforeColumnHook;

    if (beforeColumnHook !== false) {
      (0, _array.arrayEach)(columns, (column, index, array) => {
        array[index] = this.columnsMapper.getValueByIndex(column);
      });

      (0, _array.arrayEach)(columns, (column, index) => {
        let actualPosition = this.columnsMapper.getIndexByValue(column);

        if (actualPosition !== target) {
          this.columnsMapper.moveColumn(actualPosition, target + index);
        }
      });

      this.columnsMapper.clearNull();
    }

    this.hot.runHooks('afterColumnMove', columns, target);
  }

  changeSelection(startColumn, endColumn) {
    let selection = this.hot.selection;
    let lastRowIndex = this.hot.countRows() - 1;

    selection.setRangeStartOnly(new _src.CellCoords(0, startColumn));
    selection.setRangeEnd(new _src.CellCoords(lastRowIndex, endColumn), false);
  }

  getColumnsWidth(from, to) {
    let width = 0;

    for (let i = from; i < to; i++) {
      let columnWidth = 0;

      if (i < 0) {
        columnWidth = this.hot.view.wt.wtTable.getColumnWidth(i) || 0;
      } else {
        columnWidth = this.hot.view.wt.wtTable.getStretchedColumnWidth(i) || 0;
      }

      width += columnWidth;
    }

    return width;
  }

  initialSettings() {
    let pluginSettings = this.hot.getSettings().manualColumnMove;

    if (Array.isArray(pluginSettings)) {
      this.moveColumns(pluginSettings, 0);
    } else if (pluginSettings !== void 0) {
      this.persistentStateLoad();
    }
  }

  isFixedColumnsLeft(column) {
    return column < this.hot.getSettings().fixedColumnsLeft;
  }

  persistentStateSave() {
    this.hot.runHooks('persistentStateSave', 'manualColumnMove', this.columnsMapper._arrayMap);
  }

  persistentStateLoad() {
    let storedState = {};

    this.hot.runHooks('persistentStateLoad', 'manualColumnMove', storedState);

    if (storedState.value) {
      this.columnsMapper._arrayMap = storedState.value;
    }
  }

  prepareColumnsToMoving(start, end) {
    let selectedColumns = [];

    (0, _number.rangeEach)(start, end, i => {
      selectedColumns.push(i);
    });

    return selectedColumns;
  }

  refreshPositions() {
    let priv = privatePool.get(this);
    let firstVisible = this.hot.view.wt.wtTable.getFirstVisibleColumn();
    let lastVisible = this.hot.view.wt.wtTable.getLastVisibleColumn();
    let wtTable = this.hot.view.wt.wtTable;
    let scrollableElement = this.hot.view.wt.wtOverlays.scrollableElement;
    let scrollLeft = typeof scrollableElement.scrollX === 'number' ? scrollableElement.scrollX : scrollableElement.scrollLeft;
    let tdOffsetLeft = this.hot.view.THEAD.offsetLeft + this.getColumnsWidth(0, priv.coordsColumn);
    let mouseOffsetLeft = priv.target.eventPageX - (priv.rootElementOffset - (scrollableElement.scrollX === void 0 ? scrollLeft : 0));
    let hiderWidth = wtTable.hider.offsetWidth;
    let tbodyOffsetLeft = wtTable.TBODY.offsetLeft;
    let backlightElemMarginLeft = this.backlight.getOffset().left;
    let backlightElemWidth = this.backlight.getSize().width;
    let rowHeaderWidth = 0;

    if (priv.rootElementOffset + wtTable.holder.offsetWidth + scrollLeft < priv.target.eventPageX) {
      if (priv.coordsColumn < priv.countCols) {
        priv.coordsColumn++;
      }
    }

    if (priv.hasRowHeaders) {
      rowHeaderWidth = this.hot.view.wt.wtOverlays.leftOverlay.clone.wtTable.getColumnHeader(-1).offsetWidth;
    }
    if (this.isFixedColumnsLeft(priv.coordsColumn)) {
      tdOffsetLeft += scrollLeft;
    }
    tdOffsetLeft += rowHeaderWidth;

    if (priv.coordsColumn < 0) {
      if (priv.fixedColumns > 0) {
        priv.target.col = 0;
      } else {
        priv.target.col = firstVisible > 0 ? firstVisible - 1 : firstVisible;
      }
    } else if (priv.target.TD.offsetWidth / 2 + tdOffsetLeft <= mouseOffsetLeft) {
      let newCoordsCol = priv.coordsColumn >= priv.countCols ? priv.countCols - 1 : priv.coordsColumn;

      priv.target.col = newCoordsCol + 1;

      tdOffsetLeft += priv.target.TD.offsetWidth;

      if (priv.target.col > lastVisible) {
        this.hot.scrollViewportTo(void 0, lastVisible + 1, void 0, true);
      }
    } else {
      priv.target.col = priv.coordsColumn;

      if (priv.target.col <= firstVisible && priv.target.col >= priv.fixedColumns) {
        this.hot.scrollViewportTo(void 0, firstVisible - 1);
      }
    }

    if (priv.target.col <= firstVisible && priv.target.col >= priv.fixedColumns) {
      this.hot.scrollViewportTo(void 0, firstVisible - 1);
    }

    let backlightLeft = mouseOffsetLeft;
    let guidelineLeft = tdOffsetLeft;

    if (mouseOffsetLeft + backlightElemWidth + backlightElemMarginLeft >= hiderWidth) {
      backlightLeft = hiderWidth - backlightElemWidth - backlightElemMarginLeft;
    } else if (mouseOffsetLeft + backlightElemMarginLeft < tbodyOffsetLeft + rowHeaderWidth) {
      backlightLeft = tbodyOffsetLeft + rowHeaderWidth + Math.abs(backlightElemMarginLeft);
    }

    if (tdOffsetLeft >= hiderWidth - 1) {
      guidelineLeft = hiderWidth - 1;
    } else if (guidelineLeft === 0) {
      guidelineLeft = 1;
    } else if (scrollableElement.scrollX !== void 0 && priv.coordsColumn < priv.fixedColumns) {
      guidelineLeft -= priv.rootElementOffset <= scrollableElement.scrollX ? priv.rootElementOffset : 0;
    }

    this.backlight.setPosition(null, backlightLeft);
    this.guideline.setPosition(null, guidelineLeft);
  }

  updateColumnsMapper() {
    let countCols = this.hot.countSourceCols();
    let columnsMapperLen = this.columnsMapper._arrayMap.length;

    if (columnsMapperLen === 0) {
      this.columnsMapper.createMap(countCols || this.hot.getSettings().startCols);
    } else if (columnsMapperLen < countCols) {
      let diff = countCols - columnsMapperLen;

      this.columnsMapper.insertItems(columnsMapperLen, diff);
    } else if (columnsMapperLen > countCols) {
      let maxIndex = countCols - 1;
      let columnsToRemove = [];

      (0, _array.arrayEach)(this.columnsMapper._arrayMap, (value, index, array) => {
        if (value > maxIndex) {
          columnsToRemove.push(index);
        }
      });

      this.columnsMapper.removeItems(columnsToRemove);
    }
  }

  registerEvents() {
    this.eventManager.addEventListener(document.documentElement, 'mousemove', event => this.onMouseMove(event));
    this.eventManager.addEventListener(document.documentElement, 'mouseup', () => this.onMouseUp());
  }

  unregisterEvents() {
    this.eventManager.clear();
  }

  onBeforeOnCellMouseDown(event, coords, TD, blockCalculations) {
    let wtTable = this.hot.view.wt.wtTable;
    let isHeaderSelection = this.hot.selection.selectedHeader.cols;
    let selection = this.hot.getSelectedRange();
    let priv = privatePool.get(this);
    let isSortingElement = event.realTarget.className.indexOf('columnSorting') > -1;

    if (!selection || !isHeaderSelection || priv.pressed || event.button !== 0 || isSortingElement) {
      priv.pressed = false;
      priv.columnsToMove.length = 0;
      (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI]);
      return;
    }

    let guidelineIsNotReady = this.guideline.isBuilt() && !this.guideline.isAppended();
    let backlightIsNotReady = this.backlight.isBuilt() && !this.backlight.isAppended();

    if (guidelineIsNotReady && backlightIsNotReady) {
      this.guideline.appendTo(wtTable.hider);
      this.backlight.appendTo(wtTable.hider);
    }

    let from = selection.from,
        to = selection.to;

    let start = Math.min(from.col, to.col);
    let end = Math.max(from.col, to.col);

    if (coords.row < 0 && coords.col >= start && coords.col <= end) {
      blockCalculations.column = true;
      priv.pressed = true;
      priv.target.eventPageX = event.pageX;
      priv.coordsColumn = coords.col;
      priv.target.TD = TD;
      priv.target.col = coords.col;
      priv.columnsToMove = this.prepareColumnsToMoving(start, end);
      priv.hasRowHeaders = !!this.hot.getSettings().rowHeaders;
      priv.countCols = this.hot.countCols();
      priv.fixedColumns = this.hot.getSettings().fixedColumnsLeft;
      priv.rootElementOffset = (0, _element.offset)(this.hot.rootElement).left;

      let countColumnsFrom = priv.hasRowHeaders ? -1 : 0;
      let topPos = wtTable.holder.scrollTop + wtTable.getColumnHeaderHeight(0) + 1;
      let fixedColumns = coords.col < priv.fixedColumns;
      let scrollableElement = this.hot.view.wt.wtOverlays.scrollableElement;
      let wrapperIsWindow = scrollableElement.scrollX ? scrollableElement.scrollX - priv.rootElementOffset : 0;

      let mouseOffset = event.layerX - (fixedColumns ? wrapperIsWindow : 0);
      let leftOffset = Math.abs(this.getColumnsWidth(start, coords.col) + mouseOffset);

      this.backlight.setPosition(topPos, this.getColumnsWidth(countColumnsFrom, start) + leftOffset);
      this.backlight.setSize(this.getColumnsWidth(start, end + 1), wtTable.hider.offsetHeight - topPos);
      this.backlight.setOffset(null, leftOffset * -1);

      (0, _element.addClass)(this.hot.rootElement, CSS_ON_MOVING);
    } else {
      (0, _element.removeClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
      priv.pressed = false;
      priv.columnsToMove.length = 0;
    }
  }

  onMouseMove(event) {
    let priv = privatePool.get(this);

    if (!priv.pressed) {
      return;
    }

    if (event.realTarget === this.backlight.element) {
      let width = this.backlight.getSize().width;
      this.backlight.setSize(0);

      setTimeout(function () {
        this.backlight.setPosition(width);
      });
    }

    priv.target.eventPageX = event.pageX;
    this.refreshPositions();
  }

  onBeforeOnCellMouseOver(event, coords, TD, blockCalculations) {
    let selectedRange = this.hot.getSelectedRange();
    let priv = privatePool.get(this);

    if (!selectedRange || !priv.pressed) {
      return;
    }

    if (priv.columnsToMove.indexOf(coords.col) > -1) {
      (0, _element.removeClass)(this.hot.rootElement, CSS_SHOW_UI);
    } else {
      (0, _element.addClass)(this.hot.rootElement, CSS_SHOW_UI);
    }

    blockCalculations.row = true;
    blockCalculations.column = true;
    blockCalculations.cell = true;
    priv.coordsColumn = coords.col;
    priv.target.TD = TD;
  }

  onMouseUp() {
    let priv = privatePool.get(this);

    priv.coordsColumn = void 0;
    priv.pressed = false;
    priv.backlightWidth = 0;

    (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI, CSS_AFTER_SELECTION]);

    if (this.hot.selection.selectedHeader.cols) {
      (0, _element.addClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
    }
    if (priv.columnsToMove.length < 1 || priv.target.col === void 0 || priv.columnsToMove.indexOf(priv.target.col) > -1) {
      return;
    }

    this.moveColumns(priv.columnsToMove, priv.target.col);
    this.persistentStateSave();
    this.hot.render();
    this.hot.view.wt.wtOverlays.adjustElementsSize(true);

    if (!priv.disallowMoving) {
      let selectionStart = this.columnsMapper.getIndexByValue(priv.columnsToMove[0]);
      let selectionEnd = this.columnsMapper.getIndexByValue(priv.columnsToMove[priv.columnsToMove.length - 1]);
      this.changeSelection(selectionStart, selectionEnd);
    }

    priv.columnsToMove.length = 0;
  }

  onAfterScrollVertically() {
    let wtTable = this.hot.view.wt.wtTable;
    let headerHeight = wtTable.getColumnHeaderHeight(0) + 1;
    let scrollTop = wtTable.holder.scrollTop;
    let posTop = headerHeight + scrollTop;

    this.backlight.setPosition(posTop);
    this.backlight.setSize(null, wtTable.hider.offsetHeight - posTop);
  }

  onAfterCreateCol(index, amount) {
    this.columnsMapper.shiftItems(index, amount);
  }

  onBeforeRemoveCol(index, amount) {
    this.removedColumns.length = 0;

    if (index !== false) {
      (0, _number.rangeEach)(index, index + amount - 1, removedIndex => {
        this.removedColumns.push(this.hot.runHooks('modifyCol', removedIndex, this.pluginName));
      });
    }
  }

  onAfterRemoveCol(index, amount) {
    this.columnsMapper.unshiftItems(this.removedColumns);
  }

  onAfterLoadData(firstTime) {
    this.updateColumnsMapper();
  }

  onModifyCol(column, source) {
    if (source !== this.pluginName) {
      let columnInMapper = this.columnsMapper.getValueByIndex(column);
      column = columnInMapper === null ? column : columnInMapper;
    }

    return column;
  }

  onUnmodifyCol(column) {
    let indexInMapper = this.columnsMapper.getIndexByValue(column);

    return indexInMapper === null ? column : indexInMapper;
  }

  onAfterPluginsInitialized() {
    this.updateColumnsMapper();
    this.initialSettings();
    this.backlight.build();
    this.guideline.build();
  }

  destroy() {
    this.backlight.destroy();
    this.guideline.destroy();

    super.destroy();
  }
}

(0, _plugins.registerPlugin)('ManualColumnMove', ManualColumnMove);

exports.default = ManualColumnMove;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

var _element = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_CLASSNAME = 'ht__manualColumnMove--backlight';

class BacklightUI extends _base2.default {
  build() {
    super.build();

    (0, _element.addClass)(this._element, CSS_CLASSNAME);
  }
}

exports.default = BacklightUI;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

var _element = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_CLASSNAME = 'ht__manualColumnMove--guideline';

class GuidelineUI extends _base2.default {
  build() {
    super.build();

    (0, _element.addClass)(this._element, CSS_CLASSNAME);
  }
}

exports.default = GuidelineUI;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _element = __webpack_require__(0);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _event = __webpack_require__(5);

var _array = __webpack_require__(1);

var _number = __webpack_require__(3);

var _plugins = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ManualColumnResize extends _base2.default {

  constructor(hotInstance) {
    super(hotInstance);

    this.currentTH = null;
    this.currentCol = null;
    this.selectedCols = [];
    this.currentWidth = null;
    this.newSize = null;
    this.startY = null;
    this.startWidth = null;
    this.startOffset = null;
    this.handle = document.createElement('DIV');
    this.guide = document.createElement('DIV');
    this.eventManager = new _eventManager2.default(this);
    this.pressed = null;
    this.dblclick = 0;
    this.autoresizeTimeout = null;
    this.manualColumnWidths = [];

    (0, _element.addClass)(this.handle, 'manualColumnResizer');
    (0, _element.addClass)(this.guide, 'manualColumnResizerGuide');
  }

  isEnabled() {
    return this.hot.getSettings().manualColumnResize;
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    this.manualColumnWidths = [];
    let initialColumnWidth = this.hot.getSettings().manualColumnResize;
    let loadedManualColumnWidths = this.loadManualColumnWidths();

    this.addHook('modifyColWidth', (width, col) => this.onModifyColWidth(width, col));
    this.addHook('beforeStretchingColumnWidth', (stretchedWidth, column) => this.onBeforeStretchingColumnWidth(stretchedWidth, column));
    this.addHook('beforeColumnResize', (currentColumn, newSize, isDoubleClick) => this.onBeforeColumnResize(currentColumn, newSize, isDoubleClick));

    if (typeof loadedManualColumnWidths != 'undefined') {
      this.manualColumnWidths = loadedManualColumnWidths;
    } else if (Array.isArray(initialColumnWidth)) {
      this.manualColumnWidths = initialColumnWidth;
    } else {
      this.manualColumnWidths = [];
    }

    this.bindEvents();

    super.enablePlugin();
  }

  updatePlugin() {
    let initialColumnWidth = this.hot.getSettings().manualColumnResize;

    if (Array.isArray(initialColumnWidth)) {
      this.manualColumnWidths = initialColumnWidth;
    } else if (!initialColumnWidth) {
      this.manualColumnWidths = [];
    }
  }

  disablePlugin() {
    super.disablePlugin();
  }

  saveManualColumnWidths() {
    this.hot.runHooks('persistentStateSave', 'manualColumnWidths', this.manualColumnWidths);
  }

  loadManualColumnWidths() {
    let storedState = {};

    this.hot.runHooks('persistentStateLoad', 'manualColumnWidths', storedState);

    return storedState.value;
  }

  setupHandlePosition(TH) {
    if (!TH.parentNode) {
      return false;
    }

    this.currentTH = TH;

    let col = this.hot.view.wt.wtTable.getCoords(TH).col;
    let headerHeight = (0, _element.outerHeight)(this.currentTH);

    if (col >= 0) {
      let box = this.currentTH.getBoundingClientRect();

      this.currentCol = col;
      this.selectedCols = [];

      if (this.hot.selection.isSelected() && this.hot.selection.selectedHeader.cols) {
        var _hot$getSelectedRange = this.hot.getSelectedRange();

        let from = _hot$getSelectedRange.from,
            to = _hot$getSelectedRange.to;

        let start = from.col;
        let end = to.col;

        if (start >= end) {
          start = to.col;
          end = from.col;
        }

        if (this.currentCol >= start && this.currentCol <= end) {
          (0, _number.rangeEach)(start, end, i => this.selectedCols.push(i));
        } else {
          this.selectedCols.push(this.currentCol);
        }
      } else {
        this.selectedCols.push(this.currentCol);
      }

      this.startOffset = box.left - 6;
      this.startWidth = parseInt(box.width, 10);
      this.handle.style.top = `${box.top}px`;
      this.handle.style.left = `${this.startOffset + this.startWidth}px`;
      this.handle.style.height = `${headerHeight}px`;
      this.hot.rootElement.appendChild(this.handle);
    }
  }

  refreshHandlePosition() {
    this.handle.style.left = `${this.startOffset + this.currentWidth}px`;
  }

  setupGuidePosition() {
    let handleHeight = parseInt((0, _element.outerHeight)(this.handle), 10);
    let handleBottomPosition = parseInt(this.handle.style.top, 10) + handleHeight;
    let maximumVisibleElementHeight = parseInt(this.hot.view.maximumVisibleElementHeight(0), 10);

    (0, _element.addClass)(this.handle, 'active');
    (0, _element.addClass)(this.guide, 'active');

    this.guide.style.top = `${handleBottomPosition}px`;
    this.guide.style.left = this.handle.style.left;
    this.guide.style.height = `${maximumVisibleElementHeight - handleHeight}px`;
    this.hot.rootElement.appendChild(this.guide);
  }

  refreshGuidePosition() {
    this.guide.style.left = this.handle.style.left;
  }

  hideHandleAndGuide() {
    (0, _element.removeClass)(this.handle, 'active');
    (0, _element.removeClass)(this.guide, 'active');
  }

  checkIfColumnHeader(element) {
    if (element != this.hot.rootElement) {
      let parent = element.parentNode;

      if (parent.tagName === 'THEAD') {
        return true;
      }

      return this.checkIfColumnHeader(parent);
    }

    return false;
  }

  getTHFromTargetElement(element) {
    if (element.tagName != 'TABLE') {
      if (element.tagName == 'TH') {
        return element;
      }
      return this.getTHFromTargetElement(element.parentNode);
    }

    return null;
  }

  onMouseOver(event) {
    if (this.checkIfColumnHeader(event.target)) {
      let th = this.getTHFromTargetElement(event.target);

      if (!th) {
        return;
      }

      let colspan = th.getAttribute('colspan');

      if (th && (colspan === null || colspan === 1)) {
        if (!this.pressed) {
          this.setupHandlePosition(th);
        }
      }
    }
  }

  afterMouseDownTimeout() {
    const render = () => {
      this.hot.forceFullRender = true;
      this.hot.view.render();
      this.hot.view.wt.wtOverlays.adjustElementsSize(true);
    };
    const resize = (selectedCol, forceRender) => {
      let hookNewSize = this.hot.runHooks('beforeColumnResize', selectedCol, this.newSize, true);

      if (hookNewSize !== void 0) {
        this.newSize = hookNewSize;
      }

      if (this.hot.getSettings().stretchH === 'all') {
        this.clearManualSize(selectedCol);
      } else {
        this.setManualSize(selectedCol, this.newSize);
      }

      if (forceRender) {
        render();
      }

      this.saveManualColumnWidths();

      this.hot.runHooks('afterColumnResize', selectedCol, this.newSize, true);
    };

    if (this.dblclick >= 2) {
      let selectedColsLength = this.selectedCols.length;

      if (selectedColsLength > 1) {
        (0, _array.arrayEach)(this.selectedCols, selectedCol => {
          resize(selectedCol);
        });
        render();
      } else {
        (0, _array.arrayEach)(this.selectedCols, selectedCol => {
          resize(selectedCol, true);
        });
      }
    }
    this.dblclick = 0;
    this.autoresizeTimeout = null;
  }

  onMouseDown(event) {
    if ((0, _element.hasClass)(event.target, 'manualColumnResizer')) {
      this.setupGuidePosition();
      this.pressed = this.hot;

      if (this.autoresizeTimeout === null) {
        this.autoresizeTimeout = setTimeout(() => this.afterMouseDownTimeout(), 500);

        this.hot._registerTimeout(this.autoresizeTimeout);
      }
      this.dblclick++;

      this.startX = (0, _event.pageX)(event);
      this.newSize = this.startWidth;
    }
  }

  onMouseMove(event) {
    if (this.pressed) {
      this.currentWidth = this.startWidth + ((0, _event.pageX)(event) - this.startX);

      (0, _array.arrayEach)(this.selectedCols, selectedCol => {
        this.newSize = this.setManualSize(selectedCol, this.currentWidth);
      });

      this.refreshHandlePosition();
      this.refreshGuidePosition();
    }
  }

  onMouseUp(event) {
    const render = () => {
      this.hot.forceFullRender = true;
      this.hot.view.render();
      this.hot.view.wt.wtOverlays.adjustElementsSize(true);
    };
    const resize = (selectedCol, forceRender) => {
      this.hot.runHooks('beforeColumnResize', selectedCol, this.newSize);

      if (forceRender) {
        render();
      }

      this.saveManualColumnWidths();

      this.hot.runHooks('afterColumnResize', selectedCol, this.newSize);
    };

    if (this.pressed) {
      this.hideHandleAndGuide();
      this.pressed = false;

      if (this.newSize != this.startWidth) {
        let selectedColsLength = this.selectedCols.length;

        if (selectedColsLength > 1) {
          (0, _array.arrayEach)(this.selectedCols, selectedCol => {
            resize(selectedCol);
          });
          render();
        } else {
          (0, _array.arrayEach)(this.selectedCols, selectedCol => {
            resize(selectedCol, true);
          });
        }
      }

      this.setupHandlePosition(this.currentTH);
    }
  }

  bindEvents() {
    this.eventManager.addEventListener(this.hot.rootElement, 'mouseover', e => this.onMouseOver(e));
    this.eventManager.addEventListener(this.hot.rootElement, 'mousedown', e => this.onMouseDown(e));
    this.eventManager.addEventListener(window, 'mousemove', e => this.onMouseMove(e));
    this.eventManager.addEventListener(window, 'mouseup', e => this.onMouseUp(e));
  }

  setManualSize(column, width) {
    width = Math.max(width, 20);

    column = this.hot.runHooks('modifyCol', column);

    this.manualColumnWidths[column] = width;

    return width;
  }

  clearManualSize(column) {
    column = this.hot.runHooks('modifyCol', column);

    this.manualColumnWidths[column] = void 0;
  }

  onModifyColWidth(width, column) {
    if (this.enabled) {
      column = this.hot.runHooks('modifyCol', column);

      if (this.hot.getSettings().manualColumnResize && this.manualColumnWidths[column]) {
        return this.manualColumnWidths[column];
      }
    }

    return width;
  }

  onBeforeStretchingColumnWidth(stretchedWidth, column) {
    let width = this.manualColumnWidths[column];

    if (width === void 0) {
      width = stretchedWidth;
    }

    return width;
  }

  onBeforeColumnResize() {
    this.hot.view.wt.wtViewport.hasOversizedColumnHeadersMarked = {};
  }
}

(0, _plugins.registerPlugin)('manualColumnResize', ManualColumnResize);

exports.default = ManualColumnResize;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _array = __webpack_require__(1);

var _element = __webpack_require__(0);

var _number = __webpack_require__(3);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _plugins = __webpack_require__(7);

var _rowsMapper = __webpack_require__(95);

var _rowsMapper2 = _interopRequireDefault(_rowsMapper);

var _backlight = __webpack_require__(96);

var _backlight2 = _interopRequireDefault(_backlight);

var _guideline = __webpack_require__(97);

var _guideline2 = _interopRequireDefault(_guideline);

var _src = __webpack_require__(8);

__webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pluginHooks2.default.getSingleton().register('beforeRowMove');
_pluginHooks2.default.getSingleton().register('afterRowMove');
_pluginHooks2.default.getSingleton().register('unmodifyRow');

const privatePool = new WeakMap();
const CSS_PLUGIN = 'ht__manualRowMove';
const CSS_SHOW_UI = 'show-ui';
const CSS_ON_MOVING = 'on-moving--rows';
const CSS_AFTER_SELECTION = 'after-selection--rows';

class ManualRowMove extends _base2.default {
  constructor(hotInstance) {
    super(hotInstance);

    privatePool.set(this, {
      rowsToMove: [],
      pressed: void 0,
      disallowMoving: void 0,
      target: {
        eventPageY: void 0,
        coords: void 0,
        TD: void 0,
        row: void 0
      }
    });

    this.removedRows = [];

    this.rowsMapper = new _rowsMapper2.default(this);

    this.eventManager = new _eventManager2.default(this);

    this.backlight = new _backlight2.default(hotInstance);

    this.guideline = new _guideline2.default(hotInstance);
  }

  isEnabled() {
    return !!this.hot.getSettings().manualRowMove;
  }

  enablePlugin() {
    if (this.enabled) {
      return;
    }

    this.addHook('beforeOnCellMouseDown', (event, coords, TD, blockCalculations) => this.onBeforeOnCellMouseDown(event, coords, TD, blockCalculations));
    this.addHook('beforeOnCellMouseOver', (event, coords, TD, blockCalculations) => this.onBeforeOnCellMouseOver(event, coords, TD, blockCalculations));
    this.addHook('afterScrollHorizontally', () => this.onAfterScrollHorizontally());
    this.addHook('modifyRow', (row, source) => this.onModifyRow(row, source));
    this.addHook('beforeRemoveRow', (index, amount) => this.onBeforeRemoveRow(index, amount));
    this.addHook('afterRemoveRow', (index, amount) => this.onAfterRemoveRow(index, amount));
    this.addHook('afterCreateRow', (index, amount) => this.onAfterCreateRow(index, amount));
    this.addHook('afterLoadData', firstTime => this.onAfterLoadData(firstTime));
    this.addHook('beforeColumnSort', (column, order) => this.onBeforeColumnSort(column, order));
    this.addHook('unmodifyRow', row => this.onUnmodifyRow(row));

    this.registerEvents();

    (0, _element.addClass)(this.hot.rootElement, CSS_PLUGIN);

    super.enablePlugin();
  }

  updatePlugin() {
    this.disablePlugin();
    this.enablePlugin();

    this.onAfterPluginsInitialized();

    super.updatePlugin();
  }

  disablePlugin() {
    let pluginSettings = this.hot.getSettings().manualRowMove;

    if (Array.isArray(pluginSettings)) {
      this.rowsMapper.clearMap();
    }

    (0, _element.removeClass)(this.hot.rootElement, CSS_PLUGIN);

    this.unregisterEvents();
    this.backlight.destroy();
    this.guideline.destroy();

    super.disablePlugin();
  }

  moveRow(row, target) {
    this.moveRows([row], target);
  }

  moveRows(rows, target) {
    let priv = privatePool.get(this);
    let beforeMoveHook = this.hot.runHooks('beforeRowMove', rows, target);

    priv.disallowMoving = beforeMoveHook === false;

    if (!priv.disallowMoving) {
      (0, _array.arrayEach)(rows, (row, index, array) => {
        array[index] = this.rowsMapper.getValueByIndex(row);
      });

      (0, _array.arrayEach)(rows, (row, index) => {
        let actualPosition = this.rowsMapper.getIndexByValue(row);

        if (actualPosition !== target) {
          this.rowsMapper.moveRow(actualPosition, target + index);
        }
      });

      this.rowsMapper.clearNull();
    }

    this.hot.runHooks('afterRowMove', rows, target);
  }

  changeSelection(startRow, endRow) {
    let selection = this.hot.selection;
    let lastColIndex = this.hot.countCols() - 1;

    selection.setRangeStartOnly(new _src.CellCoords(startRow, 0));
    selection.setRangeEnd(new _src.CellCoords(endRow, lastColIndex), false);
  }

  getRowsHeight(from, to) {
    let height = 0;

    for (let i = from; i < to; i++) {
      let rowHeight = this.hot.view.wt.wtTable.getRowHeight(i) || 23;

      height += rowHeight;
    }

    return height;
  }

  initialSettings() {
    let pluginSettings = this.hot.getSettings().manualRowMove;

    if (Array.isArray(pluginSettings)) {
      this.moveRows(pluginSettings, 0);
    } else if (pluginSettings !== void 0) {
      let persistentState = this.persistentStateLoad();

      if (persistentState.length) {
        this.moveRows(persistentState, 0);
      }
    }
  }

  isFixedRowTop(row) {
    return row < this.hot.getSettings().fixedRowsTop;
  }

  isFixedRowBottom(row) {
    return row > this.hot.getSettings().fixedRowsBottom;
  }

  persistentStateSave() {
    this.hot.runHooks('persistentStateSave', 'manualRowMove', this.rowsMapper._arrayMap);
  }

  persistentStateLoad() {
    let storedState = {};

    this.hot.runHooks('persistentStateLoad', 'manualRowMove', storedState);

    return storedState.value ? storedState.value : [];
  }

  prepareRowsToMoving() {
    let selection = this.hot.getSelectedRange();
    let selectedRows = [];

    if (!selection) {
      return selectedRows;
    }

    let from = selection.from,
        to = selection.to;

    let start = Math.min(from.row, to.row);
    let end = Math.max(from.row, to.row);

    (0, _number.rangeEach)(start, end, i => {
      selectedRows.push(i);
    });

    return selectedRows;
  }

  refreshPositions() {
    let priv = privatePool.get(this);
    let coords = priv.target.coords;
    let firstVisible = this.hot.view.wt.wtTable.getFirstVisibleRow();
    let lastVisible = this.hot.view.wt.wtTable.getLastVisibleRow();
    let fixedRows = this.hot.getSettings().fixedRowsTop;
    let countRows = this.hot.countRows();

    if (coords.row < fixedRows && firstVisible > 0) {
      this.hot.scrollViewportTo(firstVisible - 1);
    }
    if (coords.row >= lastVisible && lastVisible < countRows) {
      this.hot.scrollViewportTo(lastVisible + 1, undefined, true);
    }

    let wtTable = this.hot.view.wt.wtTable;
    let TD = priv.target.TD;
    let rootElementOffset = (0, _element.offset)(this.hot.rootElement);
    let tdOffsetTop = this.hot.view.THEAD.offsetHeight + this.getRowsHeight(0, coords.row);
    let mouseOffsetTop = priv.target.eventPageY - rootElementOffset.top + wtTable.holder.scrollTop;
    let hiderHeight = wtTable.hider.offsetHeight;
    let tbodyOffsetTop = wtTable.TBODY.offsetTop;
    let backlightElemMarginTop = this.backlight.getOffset().top;
    let backlightElemHeight = this.backlight.getSize().height;

    if (this.isFixedRowTop(coords.row)) {
      tdOffsetTop += wtTable.holder.scrollTop;
    }

    if (coords.row < 0) {
      priv.target.row = firstVisible > 0 ? firstVisible - 1 : firstVisible;
    } else if (TD.offsetHeight / 2 + tdOffsetTop <= mouseOffsetTop) {
      priv.target.row = coords.row + 1;

      tdOffsetTop += coords.row === 0 ? TD.offsetHeight - 1 : TD.offsetHeight;
    } else {
      priv.target.row = coords.row;
    }

    let backlightTop = mouseOffsetTop;
    let guidelineTop = tdOffsetTop;

    if (mouseOffsetTop + backlightElemHeight + backlightElemMarginTop >= hiderHeight) {
      backlightTop = hiderHeight - backlightElemHeight - backlightElemMarginTop;
    } else if (mouseOffsetTop + backlightElemMarginTop < tbodyOffsetTop) {
      backlightTop = tbodyOffsetTop + Math.abs(backlightElemMarginTop);
    }

    if (tdOffsetTop >= hiderHeight - 1) {
      guidelineTop = hiderHeight - 1;
    }

    let topOverlayHeight = 0;
    if (this.hot.view.wt.wtOverlays.topOverlay) {
      topOverlayHeight = this.hot.view.wt.wtOverlays.topOverlay.clone.wtTable.TABLE.offsetHeight;
    }

    if (coords.row >= fixedRows && guidelineTop - wtTable.holder.scrollTop < topOverlayHeight) {
      this.hot.scrollViewportTo(coords.row);
    }

    this.backlight.setPosition(backlightTop);
    this.guideline.setPosition(guidelineTop);
  }

  updateRowsMapper() {
    let countRows = this.hot.countSourceRows();
    let rowsMapperLen = this.rowsMapper._arrayMap.length;

    if (rowsMapperLen === 0) {
      this.rowsMapper.createMap(countRows || this.hot.getSettings().startRows);
    } else if (rowsMapperLen < countRows) {
      let diff = countRows - rowsMapperLen;

      this.rowsMapper.insertItems(rowsMapperLen, diff);
    } else if (rowsMapperLen > countRows) {
      let maxIndex = countRows - 1;
      let rowsToRemove = [];

      (0, _array.arrayEach)(this.rowsMapper._arrayMap, (value, index, array) => {
        if (value > maxIndex) {
          rowsToRemove.push(index);
        }
      });

      this.rowsMapper.removeItems(rowsToRemove);
    }
  }

  registerEvents() {
    this.eventManager.addEventListener(document.documentElement, 'mousemove', event => this.onMouseMove(event));
    this.eventManager.addEventListener(document.documentElement, 'mouseup', () => this.onMouseUp());
  }

  unregisterEvents() {
    this.eventManager.clear();
  }

  onBeforeColumnSort(column, order) {
    let priv = privatePool.get(this);

    priv.disallowMoving = order !== void 0;
  }

  onBeforeOnCellMouseDown(event, coords, TD, blockCalculations) {
    let wtTable = this.hot.view.wt.wtTable;
    let isHeaderSelection = this.hot.selection.selectedHeader.rows;
    let selection = this.hot.getSelectedRange();
    let priv = privatePool.get(this);

    if (!selection || !isHeaderSelection || priv.pressed || event.button !== 0) {
      priv.pressed = false;
      priv.rowsToMove.length = 0;
      (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI]);
      return;
    }

    let guidelineIsNotReady = this.guideline.isBuilt() && !this.guideline.isAppended();
    let backlightIsNotReady = this.backlight.isBuilt() && !this.backlight.isAppended();

    if (guidelineIsNotReady && backlightIsNotReady) {
      this.guideline.appendTo(wtTable.hider);
      this.backlight.appendTo(wtTable.hider);
    }

    let from = selection.from,
        to = selection.to;

    let start = Math.min(from.row, to.row);
    let end = Math.max(from.row, to.row);

    if (coords.col < 0 && coords.row >= start && coords.row <= end) {
      blockCalculations.row = true;
      priv.pressed = true;
      priv.target.eventPageY = event.pageY;
      priv.target.coords = coords;
      priv.target.TD = TD;
      priv.rowsToMove = this.prepareRowsToMoving();

      let leftPos = wtTable.holder.scrollLeft + wtTable.getColumnWidth(-1);

      this.backlight.setPosition(null, leftPos);
      this.backlight.setSize(wtTable.hider.offsetWidth - leftPos, this.getRowsHeight(start, end + 1));
      this.backlight.setOffset((this.getRowsHeight(start, coords.row) + event.layerY) * -1, null);

      (0, _element.addClass)(this.hot.rootElement, CSS_ON_MOVING);

      this.refreshPositions();
    } else {
      (0, _element.removeClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
      priv.pressed = false;
      priv.rowsToMove.length = 0;
    }
  }

  onMouseMove(event) {
    let priv = privatePool.get(this);

    if (!priv.pressed) {
      return;
    }

    if (event.realTarget === this.backlight.element) {
      let height = this.backlight.getSize().height;
      this.backlight.setSize(null, 0);

      setTimeout(function () {
        this.backlight.setPosition(null, height);
      });
    }

    priv.target.eventPageY = event.pageY;
    this.refreshPositions();
  }

  onBeforeOnCellMouseOver(event, coords, TD, blockCalculations) {
    let selectedRange = this.hot.getSelectedRange();
    let priv = privatePool.get(this);

    if (!selectedRange || !priv.pressed) {
      return;
    }

    if (priv.rowsToMove.indexOf(coords.row) > -1) {
      (0, _element.removeClass)(this.hot.rootElement, CSS_SHOW_UI);
    } else {
      (0, _element.addClass)(this.hot.rootElement, CSS_SHOW_UI);
    }

    blockCalculations.row = true;
    blockCalculations.column = true;
    blockCalculations.cell = true;
    priv.target.coords = coords;
    priv.target.TD = TD;
  }

  onMouseUp() {
    let priv = privatePool.get(this);
    let target = priv.target.row;
    let rowsLen = priv.rowsToMove.length;

    priv.pressed = false;
    priv.backlightHeight = 0;

    (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI, CSS_AFTER_SELECTION]);

    if (this.hot.selection.selectedHeader.rows) {
      (0, _element.addClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
    }

    if (rowsLen < 1 || target === void 0 || priv.rowsToMove.indexOf(target) > -1 || priv.rowsToMove[rowsLen - 1] === target - 1) {
      return;
    }

    this.moveRows(priv.rowsToMove, target);

    this.persistentStateSave();
    this.hot.render();

    if (!priv.disallowMoving) {
      let selectionStart = this.rowsMapper.getIndexByValue(priv.rowsToMove[0]);
      let selectionEnd = this.rowsMapper.getIndexByValue(priv.rowsToMove[rowsLen - 1]);
      this.changeSelection(selectionStart, selectionEnd);
    }

    priv.rowsToMove.length = 0;
  }

  onAfterScrollHorizontally() {
    let wtTable = this.hot.view.wt.wtTable;
    let headerWidth = wtTable.getColumnWidth(-1);
    let scrollLeft = wtTable.holder.scrollLeft;
    let posLeft = headerWidth + scrollLeft;

    this.backlight.setPosition(null, posLeft);
    this.backlight.setSize(wtTable.hider.offsetWidth - posLeft);
  }

  onAfterCreateRow(index, amount) {
    this.rowsMapper.shiftItems(index, amount);
  }

  onBeforeRemoveRow(index, amount) {
    this.removedRows.length = 0;

    if (index !== false) {
      (0, _number.rangeEach)(index, index + amount - 1, removedIndex => {
        this.removedRows.push(this.hot.runHooks('modifyRow', removedIndex, this.pluginName));
      });
    }
  }

  onAfterRemoveRow(index, amount) {
    this.rowsMapper.unshiftItems(this.removedRows);
  }

  onAfterLoadData(firstTime) {
    this.updateRowsMapper();
  }

  onModifyRow(row, source) {
    if (source !== this.pluginName) {
      let rowInMapper = this.rowsMapper.getValueByIndex(row);
      row = rowInMapper === null ? row : rowInMapper;
    }

    return row;
  }

  onUnmodifyRow(row) {
    let indexInMapper = this.rowsMapper.getIndexByValue(row);

    return indexInMapper === null ? row : indexInMapper;
  }

  onAfterPluginsInitialized() {
    this.updateRowsMapper();
    this.initialSettings();
    this.backlight.build();
    this.guideline.build();
  }

  destroy() {
    this.backlight.destroy();
    this.guideline.destroy();

    super.destroy();
  }
}

(0, _plugins.registerPlugin)('ManualRowMove', ManualRowMove);

exports.default = ManualRowMove;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _arrayMapper = __webpack_require__(47);

var _arrayMapper2 = _interopRequireDefault(_arrayMapper);

var _array = __webpack_require__(1);

var _object = __webpack_require__(2);

var _number = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RowsMapper {
  constructor(manualRowMove) {
    this.manualRowMove = manualRowMove;
  }

  createMap(length) {
    let originLength = length === void 0 ? this._arrayMap.length : length;

    this._arrayMap.length = 0;

    (0, _number.rangeEach)(originLength - 1, itemIndex => {
      this._arrayMap[itemIndex] = itemIndex;
    });
  }

  destroy() {
    this._arrayMap = null;
  }

  moveRow(from, to) {
    let indexToMove = this._arrayMap[from];
    this._arrayMap[from] = null;
    this._arrayMap.splice(to, 0, indexToMove);
  }

  clearNull() {
    this._arrayMap = (0, _array.arrayFilter)(this._arrayMap, i => i !== null);
  }
}

(0, _object.mixin)(RowsMapper, _arrayMapper2.default);

exports.default = RowsMapper;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(50);

var _base2 = _interopRequireDefault(_base);

var _element = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_CLASSNAME = 'ht__manualRowMove--backlight';

class BacklightUI extends _base2.default {
  build() {
    super.build();

    (0, _element.addClass)(this._element, CSS_CLASSNAME);
  }
}

exports.default = BacklightUI;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _base = __webpack_require__(50);

var _base2 = _interopRequireDefault(_base);

var _element = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_CLASSNAME = 'ht__manualRowMove--guideline';

class GuidelineUI extends _base2.default {
  build() {
    super.build();

    (0, _element.addClass)(this._element, CSS_CLASSNAME);
  }
}

exports.default = GuidelineUI;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _plugins = __webpack_require__(7);

var _event = __webpack_require__(5);

var _src = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CellInfoCollection() {
  var collection = [];

  collection.getInfo = function (row, col) {
    for (var i = 0, ilen = this.length; i < ilen; i++) {
      if (this[i].row <= row && this[i].row + this[i].rowspan - 1 >= row && this[i].col <= col && this[i].col + this[i].colspan - 1 >= col) {
        return this[i];
      }
    }
  };

  collection.setInfo = function (info) {
    for (var i = 0, ilen = this.length; i < ilen; i++) {
      if (this[i].row === info.row && this[i].col === info.col) {
        this[i] = info;
        return;
      }
    }
    this.push(info);
  };

  collection.removeInfo = function (row, col) {
    for (var i = 0, ilen = this.length; i < ilen; i++) {
      if (this[i].row === row && this[i].col === col) {
        this.splice(i, 1);
        break;
      }
    }
  };

  return collection;
}

function MergeCells(mergeCellsSetting) {
  this.mergedCellInfoCollection = new CellInfoCollection();

  if (Array.isArray(mergeCellsSetting)) {
    for (var i = 0, ilen = mergeCellsSetting.length; i < ilen; i++) {
      this.mergedCellInfoCollection.setInfo(mergeCellsSetting[i]);
    }
  }
}

MergeCells.prototype.canMergeRange = function (cellRange) {
  return !cellRange.isSingle();
};

MergeCells.prototype.mergeRange = function (cellRange) {
  if (!this.canMergeRange(cellRange)) {
    return;
  }

  var topLeft = cellRange.getTopLeftCorner();
  var bottomRight = cellRange.getBottomRightCorner();

  var mergeParent = {};
  mergeParent.row = topLeft.row;
  mergeParent.col = topLeft.col;

  mergeParent.rowspan = bottomRight.row - topLeft.row + 1;
  mergeParent.colspan = bottomRight.col - topLeft.col + 1;
  this.mergedCellInfoCollection.setInfo(mergeParent);
};

MergeCells.prototype.mergeOrUnmergeSelection = function (cellRange) {
  var info = this.mergedCellInfoCollection.getInfo(cellRange.from.row, cellRange.from.col);
  if (info) {
    this.unmergeSelection(cellRange.from);
  } else {
    this.mergeSelection(cellRange);
  }
};

MergeCells.prototype.mergeSelection = function (cellRange) {
  this.mergeRange(cellRange);
};

MergeCells.prototype.unmergeSelection = function (cellRange) {
  var info = this.mergedCellInfoCollection.getInfo(cellRange.row, cellRange.col);
  this.mergedCellInfoCollection.removeInfo(info.row, info.col);
};

MergeCells.prototype.applySpanProperties = function (TD, row, col) {
  var info = this.mergedCellInfoCollection.getInfo(row, col);

  if (info) {
    if (info.row === row && info.col === col) {
      TD.setAttribute('rowspan', info.rowspan);
      TD.setAttribute('colspan', info.colspan);
    } else {
      TD.removeAttribute('rowspan');
      TD.removeAttribute('colspan');

      TD.style.display = 'none';
    }
  } else {
    TD.removeAttribute('rowspan');
    TD.removeAttribute('colspan');
  }
};

MergeCells.prototype.modifyTransform = function (hook, currentSelectedRange, delta) {
  var sameRowspan = function sameRowspan(merged, coords) {
    if (coords.row >= merged.row && coords.row <= merged.row + merged.rowspan - 1) {
      return true;
    }
    return false;
  },
      sameColspan = function sameColspan(merged, coords) {
    if (coords.col >= merged.col && coords.col <= merged.col + merged.colspan - 1) {
      return true;
    }
    return false;
  },
      getNextPosition = function getNextPosition(newDelta) {
    return new _src.CellCoords(currentSelectedRange.to.row + newDelta.row, currentSelectedRange.to.col + newDelta.col);
  };

  var newDelta = {
    row: delta.row,
    col: delta.col
  };

  if (hook == 'modifyTransformStart') {
    var nextPosition;

    if (!this.lastDesiredCoords) {
      this.lastDesiredCoords = new _src.CellCoords(null, null);
    }
    var currentPosition = new _src.CellCoords(currentSelectedRange.highlight.row, currentSelectedRange.highlight.col),
        mergedParent = this.mergedCellInfoCollection.getInfo(currentPosition.row, currentPosition.col),
        currentRangeContainsMerge;

    for (var i = 0, mergesLength = this.mergedCellInfoCollection.length; i < mergesLength; i++) {
      var range = this.mergedCellInfoCollection[i];
      range = new _src.CellCoords(range.row + range.rowspan - 1, range.col + range.colspan - 1);
      if (currentSelectedRange.includes(range)) {
        currentRangeContainsMerge = true;
        break;
      }
    }

    if (mergedParent) {
      let mergeTopLeft = new _src.CellCoords(mergedParent.row, mergedParent.col);
      let mergeBottomRight = new _src.CellCoords(mergedParent.row + mergedParent.rowspan - 1, mergedParent.col + mergedParent.colspan - 1);
      let mergeRange = new _src.CellRange(mergeTopLeft, mergeTopLeft, mergeBottomRight);

      if (!mergeRange.includes(this.lastDesiredCoords)) {
        this.lastDesiredCoords = new _src.CellCoords(null, null);
      }

      newDelta.row = this.lastDesiredCoords.row ? this.lastDesiredCoords.row - currentPosition.row : newDelta.row;
      newDelta.col = this.lastDesiredCoords.col ? this.lastDesiredCoords.col - currentPosition.col : newDelta.col;

      if (delta.row > 0) {
        newDelta.row = mergedParent.row + mergedParent.rowspan - 1 - currentPosition.row + delta.row;
      } else if (delta.row < 0) {
        newDelta.row = currentPosition.row - mergedParent.row + delta.row;
      }
      if (delta.col > 0) {
        newDelta.col = mergedParent.col + mergedParent.colspan - 1 - currentPosition.col + delta.col;
      } else if (delta.col < 0) {
        newDelta.col = currentPosition.col - mergedParent.col + delta.col;
      }
    }

    nextPosition = new _src.CellCoords(currentSelectedRange.highlight.row + newDelta.row, currentSelectedRange.highlight.col + newDelta.col);

    var nextParentIsMerged = this.mergedCellInfoCollection.getInfo(nextPosition.row, nextPosition.col);

    if (nextParentIsMerged) {
      this.lastDesiredCoords = nextPosition;
      newDelta = {
        row: nextParentIsMerged.row - currentPosition.row,
        col: nextParentIsMerged.col - currentPosition.col
      };
    }
  } else if (hook == 'modifyTransformEnd') {
    for (let i = 0, mergesLength = this.mergedCellInfoCollection.length; i < mergesLength; i++) {
      let currentMerge = this.mergedCellInfoCollection[i];
      let mergeTopLeft = new _src.CellCoords(currentMerge.row, currentMerge.col);
      let mergeBottomRight = new _src.CellCoords(currentMerge.row + currentMerge.rowspan - 1, currentMerge.col + currentMerge.colspan - 1);
      let mergedRange = new _src.CellRange(mergeTopLeft, mergeTopLeft, mergeBottomRight);
      let sharedBorders = currentSelectedRange.getBordersSharedWith(mergedRange);

      if (mergedRange.isEqual(currentSelectedRange)) {
        currentSelectedRange.setDirection('NW-SE');
      } else if (sharedBorders.length > 0) {
        var mergeHighlighted = currentSelectedRange.highlight.isEqual(mergedRange.from);

        if (sharedBorders.indexOf('top') > -1) {
          if (currentSelectedRange.to.isSouthEastOf(mergedRange.from) && mergeHighlighted) {
            currentSelectedRange.setDirection('NW-SE');
          } else if (currentSelectedRange.to.isSouthWestOf(mergedRange.from) && mergeHighlighted) {
            currentSelectedRange.setDirection('NE-SW');
          }
        } else if (sharedBorders.indexOf('bottom') > -1) {
          if (currentSelectedRange.to.isNorthEastOf(mergedRange.from) && mergeHighlighted) {
            currentSelectedRange.setDirection('SW-NE');
          } else if (currentSelectedRange.to.isNorthWestOf(mergedRange.from) && mergeHighlighted) {
            currentSelectedRange.setDirection('SE-NW');
          }
        }
      }

      nextPosition = getNextPosition(newDelta);
      var withinRowspan = sameRowspan(currentMerge, nextPosition),
          withinColspan = sameColspan(currentMerge, nextPosition);

      if (currentSelectedRange.includesRange(mergedRange) && (mergedRange.includes(nextPosition) || withinRowspan || withinColspan)) {
        if (withinRowspan) {
          if (newDelta.row < 0) {
            newDelta.row -= currentMerge.rowspan - 1;
          } else if (newDelta.row > 0) {
            newDelta.row += currentMerge.rowspan - 1;
          }
        }
        if (withinColspan) {
          if (newDelta.col < 0) {
            newDelta.col -= currentMerge.colspan - 1;
          } else if (newDelta.col > 0) {
            newDelta.col += currentMerge.colspan - 1;
          }
        }
      }
    }
  }

  if (newDelta.row !== 0) {
    delta.row = newDelta.row;
  }
  if (newDelta.col !== 0) {
    delta.col = newDelta.col;
  }
};

MergeCells.prototype.shiftCollection = function (direction, index, count) {
  var shiftVector = [0, 0];

  switch (direction) {
    case 'right':
      shiftVector[0] += 1;

      break;
    case 'left':
      shiftVector[0] -= 1;

      break;
    case 'down':
      shiftVector[1] += 1;

      break;
    case 'up':
      shiftVector[1] -= 1;

      break;
    default:
      break;
  }

  for (var i = 0; i < this.mergedCellInfoCollection.length; i++) {
    var currentMerge = this.mergedCellInfoCollection[i];

    if (direction === 'right' || direction === 'left') {
      if (index <= currentMerge.col) {
        currentMerge.col += shiftVector[0];
      }
    } else if (index <= currentMerge.row) {
      currentMerge.row += shiftVector[1];
    }
  }
};

var beforeInit = function beforeInit() {
  var instance = this;
  var mergeCellsSetting = instance.getSettings().mergeCells;

  if (mergeCellsSetting) {
    if (!instance.mergeCells) {
      instance.mergeCells = new MergeCells(mergeCellsSetting);
    }
  }
};

var afterInit = function afterInit() {
  var instance = this;
  if (instance.mergeCells) {
    instance.view.wt.wtTable.getCell = function (coords) {
      if (instance.getSettings().mergeCells) {
        var mergeParent = instance.mergeCells.mergedCellInfoCollection.getInfo(coords.row, coords.col);
        if (mergeParent) {
          coords = mergeParent;
        }
      }
      return _src.Table.prototype.getCell.call(this, coords);
    };
  }
};

var afterUpdateSettings = function afterUpdateSettings() {
  var instance = this;
  var mergeCellsSetting = instance.getSettings().mergeCells;

  if (mergeCellsSetting) {
    if (instance.mergeCells) {
      instance.mergeCells.mergedCellInfoCollection = new CellInfoCollection();

      if (Array.isArray(mergeCellsSetting)) {
        for (var i = 0, ilen = mergeCellsSetting.length; i < ilen; i++) {
          instance.mergeCells.mergedCellInfoCollection.setInfo(mergeCellsSetting[i]);
        }
      }
    } else {
      instance.mergeCells = new MergeCells(mergeCellsSetting);
    }
  } else if (instance.mergeCells) {
    instance.mergeCells.mergedCellInfoCollection = new CellInfoCollection();
  }
};

var onBeforeKeyDown = function onBeforeKeyDown(event) {
  if (!this.mergeCells) {
    return;
  }

  var ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;

  if (ctrlDown) {
    if (event.keyCode === 77) {
      this.mergeCells.mergeOrUnmergeSelection(this.getSelectedRange());
      this.render();
      (0, _event.stopImmediatePropagation)(event);
    }
  }
};

var addMergeActionsToContextMenu = function addMergeActionsToContextMenu(defaultOptions) {
  if (!this.getSettings().mergeCells) {
    return;
  }

  defaultOptions.items.push({ name: '---------' });
  defaultOptions.items.push({
    key: 'mergeCells',
    name() {
      var sel = this.getSelected();
      var info = this.mergeCells.mergedCellInfoCollection.getInfo(sel[0], sel[1]);
      if (info) {
        return 'Unmerge cells';
      }
      return 'Merge cells';
    },
    callback() {
      this.mergeCells.mergeOrUnmergeSelection(this.getSelectedRange());
      this.render();
    },
    disabled() {
      return this.selection.selectedHeader.corner;
    }
  });
};

var afterRenderer = function afterRenderer(TD, row, col, prop, value, cellProperties) {
  if (this.mergeCells) {
    this.mergeCells.applySpanProperties(TD, row, col);
  }
};

var modifyTransformFactory = function modifyTransformFactory(hook) {
  return function (delta) {
    var mergeCellsSetting = this.getSettings().mergeCells;
    if (mergeCellsSetting) {
      var currentSelectedRange = this.getSelectedRange();
      this.mergeCells.modifyTransform(hook, currentSelectedRange, delta);

      if (hook === 'modifyTransformEnd') {
        var totalRows = this.countRows();
        var totalCols = this.countCols();
        if (currentSelectedRange.from.row < 0) {
          currentSelectedRange.from.row = 0;
        } else if (currentSelectedRange.from.row > 0 && currentSelectedRange.from.row >= totalRows) {
          currentSelectedRange.from.row = currentSelectedRange.from - 1;
        }

        if (currentSelectedRange.from.col < 0) {
          currentSelectedRange.from.col = 0;
        } else if (currentSelectedRange.from.col > 0 && currentSelectedRange.from.col >= totalCols) {
          currentSelectedRange.from.col = totalCols - 1;
        }
      }
    }
  };
};

var beforeSetRangeEnd = function beforeSetRangeEnd(coords) {

  this.lastDesiredCoords = null;
  var mergeCellsSetting = this.getSettings().mergeCells;
  if (mergeCellsSetting) {
    var selRange = this.getSelectedRange();
    selRange.highlight = new _src.CellCoords(selRange.highlight.row, selRange.highlight.col);
    selRange.to = coords;

    var rangeExpanded = false;
    do {
      rangeExpanded = false;

      for (var i = 0, ilen = this.mergeCells.mergedCellInfoCollection.length; i < ilen; i++) {
        var cellInfo = this.mergeCells.mergedCellInfoCollection[i];
        var mergedCellTopLeft = new _src.CellCoords(cellInfo.row, cellInfo.col);
        var mergedCellBottomRight = new _src.CellCoords(cellInfo.row + cellInfo.rowspan - 1, cellInfo.col + cellInfo.colspan - 1);

        var mergedCellRange = new _src.CellRange(mergedCellTopLeft, mergedCellTopLeft, mergedCellBottomRight);
        if (selRange.expandByRange(mergedCellRange)) {
          coords.row = selRange.to.row;
          coords.col = selRange.to.col;

          rangeExpanded = true;
        }
      }
    } while (rangeExpanded);
  }
};

var beforeDrawAreaBorders = function beforeDrawAreaBorders(corners, className) {
  if (className && className == 'area') {
    var mergeCellsSetting = this.getSettings().mergeCells;
    if (mergeCellsSetting) {
      var selRange = this.getSelectedRange();
      var startRange = new _src.CellRange(selRange.from, selRange.from, selRange.from);
      var stopRange = new _src.CellRange(selRange.to, selRange.to, selRange.to);

      for (var i = 0, ilen = this.mergeCells.mergedCellInfoCollection.length; i < ilen; i++) {
        var cellInfo = this.mergeCells.mergedCellInfoCollection[i];
        var mergedCellTopLeft = new _src.CellCoords(cellInfo.row, cellInfo.col);
        var mergedCellBottomRight = new _src.CellCoords(cellInfo.row + cellInfo.rowspan - 1, cellInfo.col + cellInfo.colspan - 1);
        var mergedCellRange = new _src.CellRange(mergedCellTopLeft, mergedCellTopLeft, mergedCellBottomRight);

        if (startRange.expandByRange(mergedCellRange)) {
          corners[0] = startRange.from.row;
          corners[1] = startRange.from.col;
        }

        if (stopRange.expandByRange(mergedCellRange)) {
          corners[2] = stopRange.from.row;
          corners[3] = stopRange.from.col;
        }
      }
    }
  }
};

var afterGetCellMeta = function afterGetCellMeta(row, col, cellProperties) {
  var mergeCellsSetting = this.getSettings().mergeCells;
  if (mergeCellsSetting) {
    var mergeParent = this.mergeCells.mergedCellInfoCollection.getInfo(row, col);
    if (mergeParent && (mergeParent.row != row || mergeParent.col != col)) {
      cellProperties.copyable = false;
    }
  }
};

var afterViewportRowCalculatorOverride = function afterViewportRowCalculatorOverride(calc) {
  var mergeCellsSetting = this.getSettings().mergeCells;
  if (mergeCellsSetting) {
    var colCount = this.countCols();
    var mergeParent;
    for (var c = 0; c < colCount; c++) {
      mergeParent = this.mergeCells.mergedCellInfoCollection.getInfo(calc.startRow, c);
      if (mergeParent) {
        if (mergeParent.row < calc.startRow) {
          calc.startRow = mergeParent.row;
          return afterViewportRowCalculatorOverride.call(this, calc);
        }
      }
      mergeParent = this.mergeCells.mergedCellInfoCollection.getInfo(calc.endRow, c);
      if (mergeParent) {
        var mergeEnd = mergeParent.row + mergeParent.rowspan - 1;
        if (mergeEnd > calc.endRow) {
          calc.endRow = mergeEnd;
          return afterViewportRowCalculatorOverride.call(this, calc);
        }
      }
    }
  }
};

var afterViewportColumnCalculatorOverride = function afterViewportColumnCalculatorOverride(calc) {
  var mergeCellsSetting = this.getSettings().mergeCells;
  if (mergeCellsSetting) {
    var rowCount = this.countRows();
    var mergeParent;
    for (var r = 0; r < rowCount; r++) {
      mergeParent = this.mergeCells.mergedCellInfoCollection.getInfo(r, calc.startColumn);

      if (mergeParent) {
        if (mergeParent.col < calc.startColumn) {
          calc.startColumn = mergeParent.col;
          return afterViewportColumnCalculatorOverride.call(this, calc);
        }
      }
      mergeParent = this.mergeCells.mergedCellInfoCollection.getInfo(r, calc.endColumn);
      if (mergeParent) {
        var mergeEnd = mergeParent.col + mergeParent.colspan - 1;
        if (mergeEnd > calc.endColumn) {
          calc.endColumn = mergeEnd;
          return afterViewportColumnCalculatorOverride.call(this, calc);
        }
      }
    }
  }
};

var isMultipleSelection = function isMultipleSelection(isMultiple) {
  if (isMultiple && this.mergeCells) {
    var mergedCells = this.mergeCells.mergedCellInfoCollection,
        selectionRange = this.getSelectedRange();

    for (var group in mergedCells) {
      if (selectionRange.highlight.row == mergedCells[group].row && selectionRange.highlight.col == mergedCells[group].col && selectionRange.to.row == mergedCells[group].row + mergedCells[group].rowspan - 1 && selectionRange.to.col == mergedCells[group].col + mergedCells[group].colspan - 1) {
        return false;
      }
    }
  }
  return isMultiple;
};

function modifyAutofillRange(select, drag) {
  var mergeCellsSetting = this.getSettings().mergeCells;

  if (!mergeCellsSetting || this.selection.isMultiple()) {
    return;
  }
  var info = this.mergeCells.mergedCellInfoCollection.getInfo(select[0], select[1]);

  if (info) {
    select[0] = info.row;
    select[1] = info.col;
    select[2] = info.row + info.rowspan - 1;
    select[3] = info.col + info.colspan - 1;
  }
}

function onAfterCreateCol(col, count) {
  if (this.mergeCells) {
    this.mergeCells.shiftCollection('right', col, count);
  }
}

function onAfterRemoveCol(col, count) {
  if (this.mergeCells) {
    this.mergeCells.shiftCollection('left', col, count);
  }
}

function onAfterCreateRow(row, count) {
  if (this.mergeCells) {
    this.mergeCells.shiftCollection('down', row, count);
  }
}

function onAfterRemoveRow(row, count) {
  if (this.mergeCells) {
    this.mergeCells.shiftCollection('up', row, count);
  }
}

const hook = _pluginHooks2.default.getSingleton();

hook.add('beforeInit', beforeInit);
hook.add('afterInit', afterInit);
hook.add('afterUpdateSettings', afterUpdateSettings);
hook.add('beforeKeyDown', onBeforeKeyDown);
hook.add('modifyTransformStart', modifyTransformFactory('modifyTransformStart'));
hook.add('modifyTransformEnd', modifyTransformFactory('modifyTransformEnd'));
hook.add('beforeSetRangeEnd', beforeSetRangeEnd);
hook.add('beforeDrawBorders', beforeDrawAreaBorders);
hook.add('afterIsMultipleSelection', isMultipleSelection);
hook.add('afterRenderer', afterRenderer);
hook.add('afterContextMenuDefaultOptions', addMergeActionsToContextMenu);
hook.add('afterGetCellMeta', afterGetCellMeta);
hook.add('afterViewportRowCalculatorOverride', afterViewportRowCalculatorOverride);
hook.add('afterViewportColumnCalculatorOverride', afterViewportColumnCalculatorOverride);
hook.add('modifyAutofillRange', modifyAutofillRange);
hook.add('afterCreateCol', onAfterCreateCol);
hook.add('afterRemoveCol', onAfterRemoveCol);
hook.add('afterCreateRow', onAfterCreateRow);
hook.add('afterRemoveRow', onAfterRemoveRow);

exports.default = MergeCells;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pluginHooks = __webpack_require__(6);

var _pluginHooks2 = _interopRequireDefault(_pluginHooks);

var _array = __webpack_require__(1);

var _number = __webpack_require__(3);

var _object = __webpack_require__(2);

var _event = __webpack_require__(5);

var _src = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UndoRedo(instance) {
  let plugin = this;
  this.instance = instance;
  this.doneActions = [];
  this.undoneActions = [];
  this.ignoreNewActions = false;

  instance.addHook('afterChange', (changes, source) => {
    if (changes && source !== 'UndoRedo.undo' && source !== 'UndoRedo.redo') {
      plugin.done(new UndoRedo.ChangeAction(changes));
    }
  });

  instance.addHook('afterCreateRow', (index, amount, source) => {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.undo' || source === 'auto') {
      return;
    }

    let action = new UndoRedo.CreateRowAction(index, amount);
    plugin.done(action);
  });

  instance.addHook('beforeRemoveRow', (index, amount, logicRows, source) => {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    var originalData = plugin.instance.getSourceDataArray();

    index = (originalData.length + index) % originalData.length;

    var removedData = (0, _object.deepClone)(originalData.slice(index, index + amount));

    plugin.done(new UndoRedo.RemoveRowAction(index, removedData));
  });

  instance.addHook('afterCreateCol', (index, amount, source) => {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    plugin.done(new UndoRedo.CreateColumnAction(index, amount));
  });

  instance.addHook('beforeRemoveCol', (index, amount, logicColumns, source) => {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    let originalData = plugin.instance.getSourceDataArray();

    index = (plugin.instance.countCols() + index) % plugin.instance.countCols();

    let removedData = [];
    let headers = [];
    let indexes = [];

    (0, _number.rangeEach)(originalData.length - 1, i => {
      let column = [];
      let origRow = originalData[i];

      (0, _number.rangeEach)(index, index + (amount - 1), j => {
        column.push(origRow[instance.runHooks('modifyCol', j)]);
      });
      removedData.push(column);
    });

    (0, _number.rangeEach)(amount - 1, i => {
      indexes.push(instance.runHooks('modifyCol', index + i));
    });

    if (Array.isArray(instance.getSettings().colHeaders)) {
      (0, _number.rangeEach)(amount - 1, i => {
        headers.push(instance.getSettings().colHeaders[instance.runHooks('modifyCol', index + i)] || null);
      });
    }

    let manualColumnMovePlugin = plugin.instance.getPlugin('manualColumnMove');

    let columnsMap = manualColumnMovePlugin.isEnabled() ? manualColumnMovePlugin.columnsMapper.__arrayMap : [];
    let action = new UndoRedo.RemoveColumnAction(index, indexes, removedData, headers, columnsMap);

    plugin.done(action);
  });

  instance.addHook('beforeCellAlignment', (stateBefore, range, type, alignment) => {
    let action = new UndoRedo.CellAlignmentAction(stateBefore, range, type, alignment);
    plugin.done(action);
  });

  instance.addHook('beforeFilter', conditionsStack => {
    plugin.done(new UndoRedo.FiltersAction(conditionsStack));
  });

  instance.addHook('beforeRowMove', (movedRows, target) => {
    if (movedRows === false) {
      return;
    }

    plugin.done(new UndoRedo.RowMoveAction(movedRows, target));
  });
};

UndoRedo.prototype.done = function (action) {
  if (!this.ignoreNewActions) {
    this.doneActions.push(action);
    this.undoneActions.length = 0;
  }
};

UndoRedo.prototype.undo = function () {
  if (this.isUndoAvailable()) {
    let action = this.doneActions.pop();
    let actionClone = (0, _object.deepClone)(action);
    let instance = this.instance;

    let continueAction = instance.runHooks('beforeUndo', actionClone);

    if (continueAction === false) {
      return;
    }

    this.ignoreNewActions = true;
    let that = this;
    action.undo(this.instance, () => {
      that.ignoreNewActions = false;
      that.undoneActions.push(action);
    });

    instance.runHooks('afterUndo', actionClone);
  }
};

UndoRedo.prototype.redo = function () {
  if (this.isRedoAvailable()) {
    let action = this.undoneActions.pop();
    let actionClone = (0, _object.deepClone)(action);
    let instance = this.instance;

    let continueAction = instance.runHooks('beforeRedo', actionClone);

    if (continueAction === false) {
      return;
    }

    this.ignoreNewActions = true;
    let that = this;
    action.redo(this.instance, () => {
      that.ignoreNewActions = false;
      that.doneActions.push(action);
    });

    instance.runHooks('afterRedo', actionClone);
  }
};

UndoRedo.prototype.isUndoAvailable = function () {
  return this.doneActions.length > 0;
};

UndoRedo.prototype.isRedoAvailable = function () {
  return this.undoneActions.length > 0;
};

UndoRedo.prototype.clear = function () {
  this.doneActions.length = 0;
  this.undoneActions.length = 0;
};

UndoRedo.Action = function () {};
UndoRedo.Action.prototype.undo = function () {};
UndoRedo.Action.prototype.redo = function () {};

UndoRedo.ChangeAction = function (changes) {
  this.changes = changes;
  this.actionType = 'change';
};
(0, _object.inherit)(UndoRedo.ChangeAction, UndoRedo.Action);

UndoRedo.ChangeAction.prototype.undo = function (instance, undoneCallback) {
  let data = (0, _object.deepClone)(this.changes),
      emptyRowsAtTheEnd = instance.countEmptyRows(true),
      emptyColsAtTheEnd = instance.countEmptyCols(true);

  for (let i = 0, len = data.length; i < len; i++) {
    data[i].splice(3, 1);
  }

  instance.addHookOnce('afterChange', undoneCallback);

  instance.setDataAtRowProp(data, null, null, 'UndoRedo.undo');

  for (let i = 0, len = data.length; i < len; i++) {
    if (instance.getSettings().minSpareRows && data[i][0] + 1 + instance.getSettings().minSpareRows === instance.countRows() && emptyRowsAtTheEnd == instance.getSettings().minSpareRows) {

      instance.alter('remove_row', parseInt(data[i][0] + 1, 10), instance.getSettings().minSpareRows);
      instance.undoRedo.doneActions.pop();
    }

    if (instance.getSettings().minSpareCols && data[i][1] + 1 + instance.getSettings().minSpareCols === instance.countCols() && emptyColsAtTheEnd == instance.getSettings().minSpareCols) {

      instance.alter('remove_col', parseInt(data[i][1] + 1, 10), instance.getSettings().minSpareCols);
      instance.undoRedo.doneActions.pop();
    }
  }
};
UndoRedo.ChangeAction.prototype.redo = function (instance, onFinishCallback) {
  let data = (0, _object.deepClone)(this.changes);

  for (let i = 0, len = data.length; i < len; i++) {
    data[i].splice(2, 1);
  }

  instance.addHookOnce('afterChange', onFinishCallback);
  instance.setDataAtRowProp(data, null, null, 'UndoRedo.redo');
};

UndoRedo.CreateRowAction = function (index, amount) {
  this.index = index;
  this.amount = amount;
  this.actionType = 'insert_row';
};
(0, _object.inherit)(UndoRedo.CreateRowAction, UndoRedo.Action);

UndoRedo.CreateRowAction.prototype.undo = function (instance, undoneCallback) {
  let rowCount = instance.countRows(),
      minSpareRows = instance.getSettings().minSpareRows;

  if (this.index >= rowCount && this.index - minSpareRows < rowCount) {
    this.index -= minSpareRows;
  }

  instance.addHookOnce('afterRemoveRow', undoneCallback);
  instance.alter('remove_row', this.index, this.amount, 'UndoRedo.undo');
};
UndoRedo.CreateRowAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterCreateRow', redoneCallback);
  instance.alter('insert_row', this.index, this.amount, 'UndoRedo.redo');
};

UndoRedo.RemoveRowAction = function (index, data) {
  this.index = index;
  this.data = data;
  this.actionType = 'remove_row';
};
(0, _object.inherit)(UndoRedo.RemoveRowAction, UndoRedo.Action);

UndoRedo.RemoveRowAction.prototype.undo = function (instance, undoneCallback) {
  instance.alter('insert_row', this.index, this.data.length, 'UndoRedo.undo');
  instance.addHookOnce('afterRender', undoneCallback);
  instance.populateFromArray(this.index, 0, this.data, void 0, void 0, 'UndoRedo.undo');
};
UndoRedo.RemoveRowAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterRemoveRow', redoneCallback);
  instance.alter('remove_row', this.index, this.data.length, 'UndoRedo.redo');
};

UndoRedo.CreateColumnAction = function (index, amount) {
  this.index = index;
  this.amount = amount;
  this.actionType = 'insert_col';
};
(0, _object.inherit)(UndoRedo.CreateColumnAction, UndoRedo.Action);

UndoRedo.CreateColumnAction.prototype.undo = function (instance, undoneCallback) {
  instance.addHookOnce('afterRemoveCol', undoneCallback);
  instance.alter('remove_col', this.index, this.amount, 'UndoRedo.undo');
};
UndoRedo.CreateColumnAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterCreateCol', redoneCallback);
  instance.alter('insert_col', this.index, this.amount, 'UndoRedo.redo');
};

UndoRedo.RemoveColumnAction = function (index, indexes, data, headers, columnPositions) {
  this.index = index;
  this.indexes = indexes;
  this.data = data;
  this.amount = this.data[0].length;
  this.headers = headers;
  this.columnPositions = columnPositions.slice(0);
  this.actionType = 'remove_col';
};
(0, _object.inherit)(UndoRedo.RemoveColumnAction, UndoRedo.Action);

UndoRedo.RemoveColumnAction.prototype.undo = function (instance, undoneCallback) {
  let row;
  let ascendingIndexes = this.indexes.slice(0).sort();
  let sortByIndexes = (elem, j, arr) => arr[this.indexes.indexOf(ascendingIndexes[j])];

  let sortedData = [];
  (0, _number.rangeEach)(this.data.length - 1, i => {
    sortedData[i] = (0, _array.arrayMap)(this.data[i], sortByIndexes);
  });

  let sortedHeaders = [];
  sortedHeaders = (0, _array.arrayMap)(this.headers, sortByIndexes);

  var changes = [];

  instance.runHooks('beforeCreateCol', this.indexes[0], this.indexes[this.indexes.length - 1], 'UndoRedo.undo');

  (0, _number.rangeEach)(this.data.length - 1, i => {
    row = instance.getSourceDataAtRow(i);

    (0, _number.rangeEach)(ascendingIndexes.length - 1, j => {
      row.splice(ascendingIndexes[j], 0, sortedData[i][j]);
      changes.push([i, ascendingIndexes[j], null, sortedData[i][j]]);
    });
  });

  if (instance.getPlugin('formulas')) {
    instance.getPlugin('formulas').onAfterSetDataAtCell(changes);
  }

  if (typeof this.headers !== 'undefined') {
    (0, _number.rangeEach)(sortedHeaders.length - 1, j => {
      instance.getSettings().colHeaders.splice(ascendingIndexes[j], 0, sortedHeaders[j]);
    });
  }

  if (instance.getPlugin('manualColumnMove')) {
    instance.getPlugin('manualColumnMove').columnsMapper.__arrayMap = this.columnPositions;
  }

  instance.addHookOnce('afterRender', undoneCallback);

  instance.runHooks('afterCreateCol', this.indexes[0], this.indexes[this.indexes.length - 1], 'UndoRedo.undo');

  if (instance.getPlugin('formulas')) {
    instance.getPlugin('formulas').recalculateFull();
  }

  instance.render();
};

UndoRedo.RemoveColumnAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterRemoveCol', redoneCallback);
  instance.alter('remove_col', this.index, this.amount, 'UndoRedo.redo');
};

UndoRedo.CellAlignmentAction = function (stateBefore, range, type, alignment) {
  this.stateBefore = stateBefore;
  this.range = range;
  this.type = type;
  this.alignment = alignment;
};
UndoRedo.CellAlignmentAction.prototype.undo = function (instance, undoneCallback) {
  if (!instance.getPlugin('contextMenu').isEnabled()) {
    return;
  }
  for (var row = this.range.from.row; row <= this.range.to.row; row++) {
    for (var col = this.range.from.col; col <= this.range.to.col; col++) {
      instance.setCellMeta(row, col, 'className', this.stateBefore[row][col] || ' htLeft');
    }
  }

  instance.addHookOnce('afterRender', undoneCallback);
  instance.render();
};
UndoRedo.CellAlignmentAction.prototype.redo = function (instance, undoneCallback) {
  if (!instance.getPlugin('contextMenu').isEnabled()) {
    return;
  }
  instance.selectCell(this.range.from.row, this.range.from.col, this.range.to.row, this.range.to.col);
  instance.getPlugin('contextMenu').executeCommand(`alignment:${this.alignment.replace('ht', '').toLowerCase()}`);

  instance.addHookOnce('afterRender', undoneCallback);
  instance.render();
};

UndoRedo.FiltersAction = function (conditionsStack) {
  this.conditionsStack = conditionsStack;
  this.actionType = 'filter';
};
(0, _object.inherit)(UndoRedo.FiltersAction, UndoRedo.Action);

UndoRedo.FiltersAction.prototype.undo = function (instance, undoneCallback) {
  let filters = instance.getPlugin('filters');

  instance.addHookOnce('afterRender', undoneCallback);

  filters.conditionCollection.importAllConditions(this.conditionsStack.slice(0, this.conditionsStack.length - 1));
  filters.filter();
};
UndoRedo.FiltersAction.prototype.redo = function (instance, redoneCallback) {
  let filters = instance.getPlugin('filters');

  instance.addHookOnce('afterRender', redoneCallback);

  filters.conditionCollection.importAllConditions(this.conditionsStack);
  filters.filter();
};

UndoRedo.RowMoveAction = function (movedRows, target) {
  this.rows = movedRows.slice();
  this.target = target;
};
(0, _object.inherit)(UndoRedo.RowMoveAction, UndoRedo.Action);

UndoRedo.RowMoveAction.prototype.undo = function (instance, undoneCallback) {
  let manualRowMove = instance.getPlugin('manualRowMove');

  instance.addHookOnce('afterRender', undoneCallback);
  let mod = this.rows[0] < this.target ? -1 * this.rows.length : 0;
  let newTarget = this.rows[0] > this.target ? this.rows[0] + this.rows.length : this.rows[0];
  let newRows = [];
  let rowsLen = this.rows.length + mod;

  for (let i = mod; i < rowsLen; i++) {
    newRows.push(this.target + i);
  }
  manualRowMove.moveRows(newRows.slice(), newTarget);
  instance.render();

  instance.selection.setRangeStartOnly(new _src.CellCoords(this.rows[0], 0));
  instance.selection.setRangeEnd(new _src.CellCoords(this.rows[this.rows.length - 1], instance.countCols() - 1));
};
UndoRedo.RowMoveAction.prototype.redo = function (instance, redoneCallback) {
  let manualRowMove = instance.getPlugin('manualRowMove');

  instance.addHookOnce('afterRender', redoneCallback);
  manualRowMove.moveRows(this.rows.slice(), this.target);
  instance.render();
  let startSelection = this.rows[0] < this.target ? this.target - this.rows.length : this.target;
  instance.selection.setRangeStartOnly(new _src.CellCoords(startSelection, 0));
  instance.selection.setRangeEnd(new _src.CellCoords(startSelection + this.rows.length - 1, instance.countCols() - 1));
};

function init() {
  let instance = this;
  let pluginEnabled = typeof instance.getSettings().undo == 'undefined' || instance.getSettings().undo;

  if (pluginEnabled) {
    if (!instance.undoRedo) {
      instance.undoRedo = new UndoRedo(instance);

      exposeUndoRedoMethods(instance);

      instance.addHook('beforeKeyDown', onBeforeKeyDown);
      instance.addHook('afterChange', onAfterChange);
    }
  } else if (instance.undoRedo) {
    delete instance.undoRedo;

    removeExposedUndoRedoMethods(instance);

    instance.removeHook('beforeKeyDown', onBeforeKeyDown);
    instance.removeHook('afterChange', onAfterChange);
  }
}

function onBeforeKeyDown(event) {
  let instance = this;

  let ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey;

  if (ctrlDown) {
    if (event.keyCode === 89 || event.shiftKey && event.keyCode === 90) {
      instance.undoRedo.redo();
      (0, _event.stopImmediatePropagation)(event);
    } else if (event.keyCode === 90) {
      instance.undoRedo.undo();
      (0, _event.stopImmediatePropagation)(event);
    }
  }
}

function onAfterChange(changes, source) {
  let instance = this;
  if (source === 'loadData') {
    return instance.undoRedo.clear();
  }
}

function exposeUndoRedoMethods(instance) {
  instance.undo = function () {
    return instance.undoRedo.undo();
  };

  instance.redo = function () {
    return instance.undoRedo.redo();
  };

  instance.isUndoAvailable = function () {
    return instance.undoRedo.isUndoAvailable();
  };

  instance.isRedoAvailable = function () {
    return instance.undoRedo.isRedoAvailable();
  };

  instance.clearUndo = function () {
    return instance.undoRedo.clear();
  };
}

function removeExposedUndoRedoMethods(instance) {
  delete instance.undo;
  delete instance.redo;
  delete instance.isUndoAvailable;
  delete instance.isRedoAvailable;
  delete instance.clearUndo;
}

const hook = _pluginHooks2.default.getSingleton();

hook.add('afterInit', init);
hook.add('afterUpdateSettings', init);

hook.register('beforeUndo');
hook.register('afterUndo');
hook.register('beforeRedo');
hook.register('afterRedo');

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

function cellDecorator(instance, TD, row, col, prop, value, cellProperties) {
  if (cellProperties.className) {
    if (TD.className) {
      TD.className = `${TD.className} ${cellProperties.className}`;
    } else {
      TD.className = cellProperties.className;
    }
  }

  if (cellProperties.readOnly) {
    (0, _element.addClass)(TD, cellProperties.readOnlyCellClassName);
  }

  if (cellProperties.valid === false && cellProperties.invalidCellClassName) {
    (0, _element.addClass)(TD, cellProperties.invalidCellClassName);
  } else {
    (0, _element.removeClass)(TD, cellProperties.invalidCellClassName);
  }

  if (cellProperties.wordWrap === false && cellProperties.noWordWrapClassName) {
    (0, _element.addClass)(TD, cellProperties.noWordWrapClassName);
  }

  if (!value && cellProperties.placeholder) {
    (0, _element.addClass)(TD, cellProperties.placeholderCellClassName);
  }
}

exports.default = cellDecorator;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _element = __webpack_require__(0);

var _mixed = __webpack_require__(12);

var _index = __webpack_require__(18);

function textRenderer(instance, TD, row, col, prop, value, cellProperties) {
  (0, _index.getRenderer)('base').apply(this, arguments);

  if (!value && cellProperties.placeholder) {
    value = cellProperties.placeholder;
  }

  var escaped = (0, _mixed.stringify)(value);

  if (!instance.getSettings().trimWhitespace) {
    escaped = escaped.replace(/ /g, String.fromCharCode(160));
  }

  if (cellProperties.rendererTemplate) {
    (0, _element.empty)(TD);
    var TEMPLATE = document.createElement('TEMPLATE');
    TEMPLATE.setAttribute('bind', '{{}}');
    TEMPLATE.innerHTML = cellProperties.rendererTemplate;
    HTMLTemplateElement.decorate(TEMPLATE);
    TEMPLATE.model = instance.getSourceDataAtRow(row);
    TD.appendChild(TEMPLATE);
  } else {
    (0, _element.fastInnerText)(TD, escaped);
  }
}

exports.default = textRenderer;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _element = __webpack_require__(0);

var _browser = __webpack_require__(9);

var _eventManager = __webpack_require__(4);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _event = __webpack_require__(5);

var _src = __webpack_require__(8);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableView(instance) {
  var that = this;

  this.eventManager = new _eventManager2.default(instance);
  this.instance = instance;
  this.settings = instance.getSettings();
  this.selectionMouseDown = false;

  var originalStyle = instance.rootElement.getAttribute('style');

  if (originalStyle) {
    instance.rootElement.setAttribute('data-originalstyle', originalStyle);
  }

  (0, _element.addClass)(instance.rootElement, 'handsontable');

  var table = document.createElement('TABLE');
  (0, _element.addClass)(table, 'htCore');

  if (instance.getSettings().tableClassName) {
    (0, _element.addClass)(table, instance.getSettings().tableClassName);
  }
  this.THEAD = document.createElement('THEAD');
  table.appendChild(this.THEAD);
  this.TBODY = document.createElement('TBODY');
  table.appendChild(this.TBODY);

  instance.table = table;

  instance.container.insertBefore(table, instance.container.firstChild);

  this.eventManager.addEventListener(instance.rootElement, 'mousedown', function (event) {
    this.selectionMouseDown = true;

    if (!that.isTextSelectionAllowed(event.target)) {
      clearTextSelection();
      event.preventDefault();
      window.focus();
    }
  });
  this.eventManager.addEventListener(instance.rootElement, 'mouseup', function (event) {
    this.selectionMouseDown = false;
  });
  this.eventManager.addEventListener(instance.rootElement, 'mousemove', function (event) {
    if (this.selectionMouseDown && !that.isTextSelectionAllowed(event.target)) {
      clearTextSelection();
      event.preventDefault();
    }
  });

  this.eventManager.addEventListener(document.documentElement, 'keyup', function (event) {
    if (instance.selection.isInProgress() && !event.shiftKey) {
      instance.selection.finish();
    }
  });

  var isMouseDown;
  this.isMouseDown = function () {
    return isMouseDown;
  };

  this.eventManager.addEventListener(document.documentElement, 'mouseup', function (event) {
    if (instance.selection.isInProgress() && event.which === 1) {
      instance.selection.finish();
    }

    isMouseDown = false;

    if ((0, _element.isOutsideInput)(document.activeElement) || !instance.selection.isSelected()) {
      instance.unlisten();
    }
  });

  this.eventManager.addEventListener(document.documentElement, 'mousedown', function (event) {
    var originalTarget = event.target;
    var next = event.target;
    var eventX = event.x || event.clientX;
    var eventY = event.y || event.clientY;

    if (isMouseDown || !instance.rootElement) {
      return;
    }

    if (next === instance.view.wt.wtTable.holder) {
      var scrollbarWidth = (0, _element.getScrollbarWidth)();

      if (document.elementFromPoint(eventX + scrollbarWidth, eventY) !== instance.view.wt.wtTable.holder || document.elementFromPoint(eventX, eventY + scrollbarWidth) !== instance.view.wt.wtTable.holder) {
        return;
      }
    } else {
      while (next !== document.documentElement) {
        if (next === null) {
          if (event.isTargetWebComponent) {
            break;
          }

          return;
        }
        if (next === instance.rootElement) {
          return;
        }
        next = next.parentNode;
      }
    }

    var outsideClickDeselects = typeof that.settings.outsideClickDeselects === 'function' ? that.settings.outsideClickDeselects(originalTarget) : that.settings.outsideClickDeselects;

    if (outsideClickDeselects) {
      instance.deselectCell();
    } else if (!jQuery(originalTarget).parents('#link__wiz,#tool__bar,.picker').length) {
      instance.destroyEditor();
    }
  });

  this.eventManager.addEventListener(table, 'selectstart', function (event) {
    if (that.settings.fragmentSelection || (0, _element.isInput)(event.target)) {
      return;
    }

    event.preventDefault();
  });

  var clearTextSelection = function clearTextSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      document.selection.empty();
    }
  };

  var selections = [new _src.Selection({
    className: 'current',
    border: {
      width: 2,
      color: '#5292F7',

      cornerVisible: function cornerVisible() {
        return that.settings.fillHandle && !that.isCellEdited() && !instance.selection.isMultiple();
      },
      multipleSelectionHandlesVisible: function multipleSelectionHandlesVisible() {
        return !that.isCellEdited() && !instance.selection.isMultiple();
      }
    }
  }), new _src.Selection({
    className: 'area',
    border: {
      width: 1,
      color: '#89AFF9',

      cornerVisible: function cornerVisible() {
        return that.settings.fillHandle && !that.isCellEdited() && instance.selection.isMultiple();
      },
      multipleSelectionHandlesVisible: function multipleSelectionHandlesVisible() {
        return !that.isCellEdited() && instance.selection.isMultiple();
      }
    }
  }), new _src.Selection({
    className: 'highlight',
    highlightHeaderClassName: that.settings.currentHeaderClassName,
    highlightRowClassName: that.settings.currentRowClassName,
    highlightColumnClassName: that.settings.currentColClassName
  }), new _src.Selection({
    className: 'fill',
    border: {
      width: 1,
      color: 'red'
    }
  })];
  selections.current = selections[0];
  selections.area = selections[1];
  selections.highlight = selections[2];
  selections.fill = selections[3];

  var walkontableConfig = {
    debug: function debug() {
      return that.settings.debug;
    },
    externalRowCalculator: this.instance.getPlugin('autoRowSize') && this.instance.getPlugin('autoRowSize').isEnabled(),
    table: table,
    preventOverflow: () => this.settings.preventOverflow,
    stretchH: function stretchH() {
      return that.settings.stretchH;
    },
    data: instance.getDataAtCell,
    totalRows: () => instance.countRows(),
    totalColumns: () => instance.countCols(),
    fixedColumnsLeft: function fixedColumnsLeft() {
      return that.settings.fixedColumnsLeft;
    },
    fixedRowsTop: function fixedRowsTop() {
      return that.settings.fixedRowsTop;
    },
    fixedRowsBottom: function fixedRowsBottom() {
      return that.settings.fixedRowsBottom;
    },
    minSpareRows: function minSpareRows() {
      return that.settings.minSpareRows;
    },
    renderAllRows: that.settings.renderAllRows,
    rowHeaders: function rowHeaders() {
      let headerRenderers = [];

      if (instance.hasRowHeaders()) {
        headerRenderers.push(function (row, TH) {
          that.appendRowHeader(row, TH);
        });
      }
      instance.runHooks('afterGetRowHeaderRenderers', headerRenderers);

      return headerRenderers;
    },
    columnHeaders: function columnHeaders() {
      let headerRenderers = [];

      if (instance.hasColHeaders()) {
        headerRenderers.push(function (column, TH) {
          that.appendColHeader(column, TH);
        });
      }
      instance.runHooks('afterGetColumnHeaderRenderers', headerRenderers);

      return headerRenderers;
    },
    columnWidth: instance.getColWidth,
    rowHeight: instance.getRowHeight,
    cellRenderer: function cellRenderer(row, col, TD) {
      const cellProperties = that.instance.getCellMeta(row, col);
      const prop = that.instance.colToProp(col);
      let value = that.instance.getDataAtRowProp(row, prop);

      if (that.instance.hasHook('beforeValueRender')) {
        value = that.instance.runHooks('beforeValueRender', value);
      }

      that.instance.runHooks('beforeRenderer', TD, row, col, prop, value, cellProperties);
      that.instance.getCellRenderer(cellProperties)(that.instance, TD, row, col, prop, value, cellProperties);
      that.instance.runHooks('afterRenderer', TD, row, col, prop, value, cellProperties);
    },
    selections: selections,
    hideBorderOnMouseDownOver: function hideBorderOnMouseDownOver() {
      return that.settings.fragmentSelection;
    },
    onCellMouseDown: function onCellMouseDown(event, coords, TD, wt) {
      let blockCalculations = {
        row: false,
        column: false,
        cells: false
      };

      instance.listen();

      that.activeWt = wt;
      isMouseDown = true;

      instance.runHooks('beforeOnCellMouseDown', event, coords, TD, blockCalculations);

      if ((0, _event.isImmediatePropagationStopped)(event)) {
        return;
      }

      let actualSelection = instance.getSelectedRange();
      let selection = instance.selection;
      let selectedHeader = selection.selectedHeader;

      if (event.shiftKey && actualSelection) {
        if (coords.row >= 0 && coords.col >= 0 && !blockCalculations.cells) {
          selection.setSelectedHeaders(false, false);
          selection.setRangeEnd(coords);
        } else if ((selectedHeader.cols || selectedHeader.rows) && coords.row >= 0 && coords.col >= 0 && !blockCalculations.cells) {
          selection.setSelectedHeaders(false, false);
          selection.setRangeEnd(new _src.CellCoords(coords.row, coords.col));
        } else if (selectedHeader.cols && coords.row < 0 && !blockCalculations.column) {
          selection.setRangeEnd(new _src.CellCoords(actualSelection.to.row, coords.col));
        } else if (selectedHeader.rows && coords.col < 0 && !blockCalculations.row) {
          selection.setRangeEnd(new _src.CellCoords(coords.row, actualSelection.to.col));
        } else if ((!selectedHeader.cols && !selectedHeader.rows && coords.col < 0 || selectedHeader.cols && coords.col < 0) && !blockCalculations.row) {
          selection.setSelectedHeaders(true, false);
          selection.setRangeStartOnly(new _src.CellCoords(actualSelection.from.row, 0));
          selection.setRangeEnd(new _src.CellCoords(coords.row, instance.countCols() - 1));
        } else if ((!selectedHeader.cols && !selectedHeader.rows && coords.row < 0 || selectedHeader.rows && coords.row < 0) && !blockCalculations.column) {
          selection.setSelectedHeaders(false, true);
          selection.setRangeStartOnly(new _src.CellCoords(0, actualSelection.from.col));
          selection.setRangeEnd(new _src.CellCoords(instance.countRows() - 1, coords.col));
        }
      } else {
        let doNewSelection = true;

        if (actualSelection) {
          let from = actualSelection.from,
              to = actualSelection.to;

          let coordsNotInSelection = !selection.inInSelection(coords);

          if (coords.row < 0 && selectedHeader.cols) {
            let start = Math.min(from.col, to.col);
            let end = Math.max(from.col, to.col);

            doNewSelection = coords.col < start || coords.col > end;
          } else if (coords.col < 0 && selectedHeader.rows) {
            let start = Math.min(from.row, to.row);
            let end = Math.max(from.row, to.row);

            doNewSelection = coords.row < start || coords.row > end;
          } else {
            doNewSelection = coordsNotInSelection;
          }
        }

        const rightClick = (0, _event.isRightClick)(event);
        const leftClick = (0, _event.isLeftClick)(event) || event.type === 'touchstart';

        if (coords.row < 0 && coords.col >= 0 && !blockCalculations.column) {
          selection.setSelectedHeaders(false, true);

          if (leftClick || rightClick && doNewSelection) {
            selection.setRangeStartOnly(new _src.CellCoords(0, coords.col));
            selection.setRangeEnd(new _src.CellCoords(Math.max(instance.countRows() - 1, 0), coords.col), false);
          }
        } else if (coords.col < 0 && coords.row >= 0 && !blockCalculations.row) {
          selection.setSelectedHeaders(true, false);

          if (leftClick || rightClick && doNewSelection) {
            selection.setRangeStartOnly(new _src.CellCoords(coords.row, 0));
            selection.setRangeEnd(new _src.CellCoords(coords.row, Math.max(instance.countCols() - 1, 0)), false);
          }
        } else if (coords.col >= 0 && coords.row >= 0 && !blockCalculations.cells) {
          if (leftClick || rightClick && doNewSelection) {
            selection.setSelectedHeaders(false, false);
            selection.setRangeStart(coords);
          }
        } else if (coords.col < 0 && coords.row < 0) {
          coords.row = 0;
          coords.col = 0;

          selection.setSelectedHeaders(false, false, true);
          selection.setRangeStart(coords);
        }
      }

      instance.runHooks('afterOnCellMouseDown', event, coords, TD);
      that.activeWt = that.wt;
    },
    onCellMouseOut: function onCellMouseOut(event, coords, TD, wt) {
      that.activeWt = wt;
      instance.runHooks('beforeOnCellMouseOut', event, coords, TD);

      if ((0, _event.isImmediatePropagationStopped)(event)) {
        return;
      }

      instance.runHooks('afterOnCellMouseOut', event, coords, TD);
      that.activeWt = that.wt;
    },
    onCellMouseOver: function onCellMouseOver(event, coords, TD, wt) {
      let blockCalculations = {
        row: false,
        column: false,
        cell: false
      };

      that.activeWt = wt;
      instance.runHooks('beforeOnCellMouseOver', event, coords, TD, blockCalculations);

      if ((0, _event.isImmediatePropagationStopped)(event)) {
        return;
      }

      if (event.button === 0 && isMouseDown) {
        if (coords.row >= 0 && coords.col >= 0) {
          if (instance.selection.selectedHeader.cols && !blockCalculations.column) {
            instance.selection.setRangeEnd(new _src.CellCoords(instance.countRows() - 1, coords.col), false);
          } else if (instance.selection.selectedHeader.rows && !blockCalculations.row) {
            instance.selection.setRangeEnd(new _src.CellCoords(coords.row, instance.countCols() - 1), false);
          } else if (!blockCalculations.cell) {
            instance.selection.setRangeEnd(coords);
          }
        } else {
          if (instance.selection.selectedHeader.cols && !blockCalculations.column) {
            instance.selection.setRangeEnd(new _src.CellCoords(instance.countRows() - 1, coords.col), false);
          } else if (instance.selection.selectedHeader.rows && !blockCalculations.row) {
            instance.selection.setRangeEnd(new _src.CellCoords(coords.row, instance.countCols() - 1), false);
          } else if (!blockCalculations.cell) {
            instance.selection.setRangeEnd(coords);
          }
        }
      }

      instance.runHooks('afterOnCellMouseOver', event, coords, TD);
      that.activeWt = that.wt;
    },
    onCellMouseUp: function onCellMouseUp(event, coords, TD, wt) {
      that.activeWt = wt;
      instance.runHooks('beforeOnCellMouseUp', event, coords, TD);

      instance.runHooks('afterOnCellMouseUp', event, coords, TD);
      that.activeWt = that.wt;
    },
    onCellCornerMouseDown: function onCellCornerMouseDown(event) {
      event.preventDefault();
      instance.runHooks('afterOnCellCornerMouseDown', event);
    },
    onCellCornerDblClick: function onCellCornerDblClick(event) {
      event.preventDefault();
      instance.runHooks('afterOnCellCornerDblClick', event);
    },
    beforeDraw: function beforeDraw(force, skipRender) {
      that.beforeRender(force, skipRender);
    },
    onDraw: function onDraw(force) {
      that.onDraw(force);
    },
    onScrollVertically: function onScrollVertically() {
      instance.runHooks('afterScrollVertically');
    },
    onScrollHorizontally: function onScrollHorizontally() {
      instance.runHooks('afterScrollHorizontally');
    },
    onBeforeDrawBorders: function onBeforeDrawBorders(corners, borderClassName) {
      instance.runHooks('beforeDrawBorders', corners, borderClassName);
    },
    onBeforeTouchScroll: function onBeforeTouchScroll() {
      instance.runHooks('beforeTouchScroll');
    },
    onAfterMomentumScroll: function onAfterMomentumScroll() {
      instance.runHooks('afterMomentumScroll');
    },
    onBeforeStretchingColumnWidth: function onBeforeStretchingColumnWidth(stretchedWidth, column) {
      return instance.runHooks('beforeStretchingColumnWidth', stretchedWidth, column);
    },
    onModifyRowHeaderWidth: function onModifyRowHeaderWidth(rowHeaderWidth) {
      return instance.runHooks('modifyRowHeaderWidth', rowHeaderWidth);
    },
    viewportRowCalculatorOverride: function viewportRowCalculatorOverride(calc) {
      let rows = instance.countRows();
      let viewportOffset = that.settings.viewportRowRenderingOffset;

      if (viewportOffset === 'auto' && that.settings.fixedRowsTop) {
        viewportOffset = 10;
      }
      if (typeof viewportOffset === 'number') {
        calc.startRow = Math.max(calc.startRow - viewportOffset, 0);
        calc.endRow = Math.min(calc.endRow + viewportOffset, rows - 1);
      }
      if (viewportOffset === 'auto') {
        let center = calc.startRow + calc.endRow - calc.startRow;
        let offset = Math.ceil(center / rows * 12);

        calc.startRow = Math.max(calc.startRow - offset, 0);
        calc.endRow = Math.min(calc.endRow + offset, rows - 1);
      }
      instance.runHooks('afterViewportRowCalculatorOverride', calc);
    },
    viewportColumnCalculatorOverride: function viewportColumnCalculatorOverride(calc) {
      let cols = instance.countCols();
      let viewportOffset = that.settings.viewportColumnRenderingOffset;

      if (viewportOffset === 'auto' && that.settings.fixedColumnsLeft) {
        viewportOffset = 10;
      }
      if (typeof viewportOffset === 'number') {
        calc.startColumn = Math.max(calc.startColumn - viewportOffset, 0);
        calc.endColumn = Math.min(calc.endColumn + viewportOffset, cols - 1);
      }
      if (viewportOffset === 'auto') {
        let center = calc.startColumn + calc.endColumn - calc.startColumn;
        let offset = Math.ceil(center / cols * 12);

        calc.startRow = Math.max(calc.startColumn - offset, 0);
        calc.endColumn = Math.min(calc.endColumn + offset, cols - 1);
      }
      instance.runHooks('afterViewportColumnCalculatorOverride', calc);
    },
    rowHeaderWidth: function rowHeaderWidth() {
      return that.settings.rowHeaderWidth;
    },
    columnHeaderHeight: function columnHeaderHeight() {
      const columnHeaderHeight = instance.runHooks('modifyColumnHeaderHeight');
      return that.settings.columnHeaderHeight || columnHeaderHeight;
    }
  };

  instance.runHooks('beforeInitWalkontable', walkontableConfig);

  this.wt = new _src2.default(walkontableConfig);
  this.activeWt = this.wt;

  if (!(0, _browser.isChrome)() && !(0, _browser.isSafari)()) {
    this.eventManager.addEventListener(instance.rootElement, 'wheel', event => {
      event.preventDefault();

      const lineHeight = parseInt((0, _element.getComputedStyle)(document.body)['font-size'], 10);
      const holder = that.wt.wtOverlays.scrollableElement;

      let deltaY = event.wheelDeltaY || event.deltaY;
      let deltaX = event.wheelDeltaX || event.deltaX;

      switch (event.deltaMode) {
        case 0:
          holder.scrollLeft += deltaX;
          holder.scrollTop += deltaY;
          break;

        case 1:
          holder.scrollLeft += deltaX * lineHeight;
          holder.scrollTop += deltaY * lineHeight;
          break;

        default:
          break;
      }
    });
  }

  this.eventManager.addEventListener(that.wt.wtTable.spreader, 'mousedown', function (event) {
    if (event.target === that.wt.wtTable.spreader && event.which === 3) {
      (0, _event.stopPropagation)(event);
    }
  });

  this.eventManager.addEventListener(that.wt.wtTable.spreader, 'contextmenu', function (event) {
    if (event.target === that.wt.wtTable.spreader && event.which === 3) {
      (0, _event.stopPropagation)(event);
    }
  });

  this.eventManager.addEventListener(document.documentElement, 'click', function () {
    if (that.settings.observeDOMVisibility) {
      if (that.wt.drawInterrupted) {
        that.instance.forceFullRender = true;
        that.render();
      }
    }
  });
}

TableView.prototype.isTextSelectionAllowed = function (el) {
  if ((0, _element.isInput)(el)) {
    return true;
  }
  let isChildOfTableBody = (0, _element.isChildOf)(el, this.instance.view.wt.wtTable.spreader);

  if (this.settings.fragmentSelection === true && isChildOfTableBody) {
    return true;
  }
  if (this.settings.fragmentSelection === 'cell' && this.isSelectedOnlyCell() && isChildOfTableBody) {
    return true;
  }
  if (!this.settings.fragmentSelection && this.isCellEdited() && this.isSelectedOnlyCell()) {
    return true;
  }

  return false;
};

TableView.prototype.isSelectedOnlyCell = function () {
  var _ref = this.instance.getSelected() || [],
      _ref2 = _slicedToArray(_ref, 4),
      row = _ref2[0],
      col = _ref2[1],
      rowEnd = _ref2[2],
      colEnd = _ref2[3];

  return row !== void 0 && row === rowEnd && col === colEnd;
};

TableView.prototype.isCellEdited = function () {
  var activeEditor = this.instance.getActiveEditor();

  return activeEditor && activeEditor.isOpened();
};

TableView.prototype.beforeRender = function (force, skipRender) {
  if (force) {
    this.instance.runHooks('beforeRender', this.instance.forceFullRender, skipRender);
  }
};

TableView.prototype.onDraw = function (force) {
  if (force) {
    this.instance.runHooks('afterRender', this.instance.forceFullRender);
  }
};

TableView.prototype.render = function () {
  this.wt.draw(!this.instance.forceFullRender);
  this.instance.forceFullRender = false;
  this.instance.renderCall = false;
};

TableView.prototype.getCellAtCoords = function (coords, topmost) {
  var td = this.wt.getCell(coords, topmost);

  if (td < 0) {
    return null;
  }

  return td;
};

TableView.prototype.scrollViewport = function (coords) {
  this.wt.scrollViewport(coords);
};

TableView.prototype.appendRowHeader = function (row, TH) {
  if (TH.firstChild) {
    let container = TH.firstChild;

    if (!(0, _element.hasClass)(container, 'relative')) {
      (0, _element.empty)(TH);
      this.appendRowHeader(row, TH);

      return;
    }
    this.updateCellHeader(container.querySelector('.rowHeader'), row, this.instance.getRowHeader);
  } else {
    let div = document.createElement('div');
    let span = document.createElement('span');

    div.className = 'relative';
    span.className = 'rowHeader';
    this.updateCellHeader(span, row, this.instance.getRowHeader);

    div.appendChild(span);
    TH.appendChild(div);
  }

  this.instance.runHooks('afterGetRowHeader', row, TH);
};

TableView.prototype.appendColHeader = function (col, TH) {
  if (TH.firstChild) {
    let container = TH.firstChild;

    if ((0, _element.hasClass)(container, 'relative')) {
      this.updateCellHeader(container.querySelector('.colHeader'), col, this.instance.getColHeader);
    } else {
      (0, _element.empty)(TH);
      this.appendColHeader(col, TH);
    }
  } else {
    var div = document.createElement('div');
    let span = document.createElement('span');

    div.className = 'relative';
    span.className = 'colHeader';
    this.updateCellHeader(span, col, this.instance.getColHeader);

    div.appendChild(span);
    TH.appendChild(div);
  }

  this.instance.runHooks('afterGetColHeader', col, TH);
};

TableView.prototype.updateCellHeader = function (element, index, content) {
  let renderedIndex = index;
  let parentOverlay = this.wt.wtOverlays.getParentOverlay(element) || this.wt;

  if (element.parentNode) {
    if ((0, _element.hasClass)(element, 'colHeader')) {
      renderedIndex = parentOverlay.wtTable.columnFilter.sourceToRendered(index);
    } else if ((0, _element.hasClass)(element, 'rowHeader')) {
      renderedIndex = parentOverlay.wtTable.rowFilter.sourceToRendered(index);
    }
  }

  if (renderedIndex > -1) {
    (0, _element.fastInnerHTML)(element, content(index));
  } else {
    (0, _element.fastInnerText)(element, String.fromCharCode(160));
    (0, _element.addClass)(element, 'cornerHeader');
  }
};

TableView.prototype.maximumVisibleElementWidth = function (leftOffset) {
  var workspaceWidth = this.wt.wtViewport.getWorkspaceWidth();
  var maxWidth = workspaceWidth - leftOffset;
  return maxWidth > 0 ? maxWidth : 0;
};

TableView.prototype.maximumVisibleElementHeight = function (topOffset) {
  var workspaceHeight = this.wt.wtViewport.getWorkspaceHeight();
  var maxHeight = workspaceHeight - topOffset;
  return maxHeight > 0 ? maxHeight : 0;
};

TableView.prototype.mainViewIsActive = function () {
  return this.wt === this.activeWt;
};

TableView.prototype.destroy = function () {
  this.wt.destroy();
  this.eventManager.destroy();
};

exports.default = TableView;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseDelay = parseDelay;

var _feature = __webpack_require__(14);

class Interval {
  static create(func, delay) {
    return new Interval(func, delay);
  }

  constructor(func, delay) {
    this.timer = null;

    this.func = func;

    this.delay = parseDelay(delay);

    this.stopped = true;

    this._then = null;

    this._callback = () => this.__callback();
  }

  start() {
    if (this.stopped) {
      this._then = Date.now();
      this.stopped = false;
      this.timer = (0, _feature.requestAnimationFrame)(this._callback);
    }

    return this;
  }

  stop() {
    if (!this.stopped) {
      this.stopped = true;
      (0, _feature.cancelAnimationFrame)(this.timer);
      this.timer = null;
    }

    return this;
  }

  __callback() {
    this.timer = (0, _feature.requestAnimationFrame)(this._callback);

    if (this.delay) {
      const now = Date.now();
      const elapsed = now - this._then;

      if (elapsed > this.delay) {
        this._then = now - elapsed % this.delay;
        this.func();
      }
    } else {
      this.func();
    }
  }
}

exports.default = Interval;
function parseDelay(delay) {
  if (typeof delay === 'string' && /fps$/.test(delay)) {
    delay = 1000 / parseInt(delay.replace('fps', '') || 0, 10);
  }

  return delay;
}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});