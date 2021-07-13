module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/200","2":"pages/403","3":"pages/404","4":"pages/500","5":"pages/admin/categories/add/index","6":"pages/admin/categories/detail/_id/index","7":"pages/admin/categories/index","8":"pages/admin/index","9":"pages/admin/orders/add/index","10":"pages/admin/orders/detail/_id/edit","11":"pages/admin/orders/detail/_id/index","12":"pages/admin/orders/index","13":"pages/admin/stock/add/index","14":"pages/admin/stock/detail/_id/index","15":"pages/admin/stock/index","16":"pages/admin/tags/add/index","17":"pages/admin/tags/detail/_id/index","18":"pages/admin/tags/index","19":"pages/admin/titles/add/index","20":"pages/admin/titles/detail/_id/index","21":"pages/admin/titles/index","22":"pages/admin/users/add/index","23":"pages/admin/users/detail/_id/index","24":"pages/admin/users/index","25":"pages/ako-to-funguje/index","26":"pages/blog/index","27":"pages/index","28":"pages/kniznica/_id/_name/index","29":"pages/kniznica/index","30":"pages/najcastejsie-otazky/index","31":"pages/nas-pribeh/index","32":"pages/newsletter/index","33":"pages/odhlasenie/index","34":"pages/prihlasenie/code","35":"pages/prihlasenie/index","36":"pages/registracia/code","37":"pages/registracia/index","38":"pages/user/account/credits/add/index","39":"pages/user/account/credits/index","40":"pages/user/account/credits/success","41":"pages/user/account/index","42":"pages/user/account/settings/index","43":"pages/user/account/subscription/index","44":"pages/user/account/subscription/success","45":"pages/user/books/basket/confirm","46":"pages/user/books/basket/delivery","47":"pages/user/books/basket/index","48":"pages/user/books/basket/success","49":"pages/user/books/borrowed/index","50":"pages/user/books/index","51":"pages/user/books/rated/index","52":"pages/user/books/reserved/index","53":"pages/user/books/wishlist/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-icon.37814bb.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("b26a9ab0", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ee8236c8", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("bf85baa0", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.7154c2b.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-coin.9668ff1.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-basket.9aef0b2.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0803fdc5", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2ea937bf", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e04b1904", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("28fe6bb6", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a3f6d3ee", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("246ff273", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("aa2a2af2", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0ccd4767", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("19f287df", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  console.log('[Middleware] The auth Middleware is running');

  if (!context.store.getters['auth/isUserLoggedIn']) {
    context.redirect('/prihlasenie');
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  console.log('[Middleware] The check-auth Middleware is running');
  context.store.dispatch("auth/initAuth", context.req);
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  console.log('[Middleware] The check-userdata Middleware is running');

  if (false) {}

  context.store.dispatch("auth/initUserData", context.req);
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (contex) {// console.log('[Middleware] The log Middleware is running')
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_63cc7910_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_63cc7910_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_63cc7910_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_63cc7910_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_63cc7910_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-63cc7910]{font-size:30px;font-weight:400}h1[data-v-63cc7910],p[data-v-63cc7910]{text-align:center}div.grid[data-v-63cc7910]{height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#ffd401;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("1c496f4f", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;vertical-align:baseline}div{box-sizing:border-box}#used-layout{background-color:#000;color:#fff;display:none}body{color:#333;font-size:16px;line-height:1.688em;font-weight:400}body,h1,h2,h3,h4,h5,h6{font-family:\"Open sans\",sans-serif}h1,h2,h3,h4,h5,h6{line-height:1.4em}.h1,h1{font-size:2.063em;line-height:1.576em}.h1,.h2,h1,h2{font-weight:700}.h2,h2{font-size:1.625em;line-height:1.615em}.h3,h3{font-size:1.25em;line-height:1.65em}.h3,.h4,h3,h4{font-weight:600}.h4,h4{font-size:1em;line-height:1.688em}.h5,h5{font-size:.813em;font-weight:600;line-height:1.769em}.container-wide{max-width:100%;padding:20px;margin:80px auto}.container-standard{max-width:1200px;padding:20px;margin:80px auto}.container-hero{max-width:1200px;padding:20px;margin:40px auto}.container-narrow{max-width:976px;padding:20px;margin:80px auto}p{color:rgba(0,0,0,.72)}a.smaller,p.smaller{font-size:.713em;line-height:1.569em}a.small,p.small{font-size:.813em;line-height:1.769em}a,a.normal,p,p.normal{font-size:1em;line-height:1.688em}a.big,p.big{font-size:1.25em;line-height:1.65em}.gray,p.gray{color:#545454}.green,p.green{color:#39ac37}.red,p.red{color:#dc0016}a,p>a{color:#333;text-decoration:underline;font-weight:400;transition:.3s}a:hover,p>a:hover{text-decoration:none}a.white,p>a.white{color:#fff;text-decoration:underline}a.white:hover,p>a.white:hover{text-decoration:none}.button,button{font-family:\"Open sans\",sans-serif;cursor:pointer;transition:.3s;font-size:1em;line-height:1.688em;text-align:center;display:inline-block}.button.cta,button.cta{background:#39ac37;border:1px solid #39ac37;color:#fff;border-radius:2px;padding:10px 30px;font-weight:600;outline:none;text-decoration:none}.button.cta.white,button.cta.white{background:#fff;color:#000}.button.cta.black,.button.cta.white,button.cta.black,button.cta.white{border:1px solid #000;border-radius:2px;padding:10px 30px;font-weight:600;outline:none;text-decoration:none}.button.cta.black,button.cta.black{background:#000;color:#fff}.button.cta.red,button.cta.red{background:#fff;border:1px solid rgba(215,58,74,.48627);color:rgba(215,58,74,.48627);border-radius:2px;padding:10px 30px;font-weight:600;outline:none;text-decoration:none}.button.cta:hover,button.cta:hover{background:#000;border:1px solid #000}.button.cta.white:hover,button.cta.white:hover{background:#000;border:1px solid #000;color:#fff}.button.cta.black:hover,button.cta.black:hover{background:#333;border:1px solid #333;color:#fff}.button.cta.red:hover,button.cta.red:hover{background:#d73a4a;border:1px solid rgba(215,58,74,.48627);color:#fff}.button.small,button.small{padding:2px 8px!important;font-size:12px!important;font-weight:600!important;text-decoration:none}.button.big,button.big{padding:15px 50px!important;font-size:18px!important;font-weight:600!important;text-decoration:none}input,select{height:45px}.textarea,input,select,textarea{background:#fff;color:#000;border:1px solid #dadde3;border-left:2px solid #ffd401;border-radius:2px;padding:10px;font-size:1em;line-height:1.688em;font-weight:400;outline:none;display:block;width:100%;max-width:100%;font-family:\"Open sans\",sans-serif;box-sizing:border-box;transition:all .2s cubic-bezier(.165,.84,.44,1)}.textarea,textarea{position:relative;min-height:136.3px;word-wrap:break-word}.textarea.long,textarea.long{min-height:408.9px}input::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{color:#ccc;font-size:14px;font-weight:400;font-family:\"Open sans\",sans-serif}input:-ms-input-placeholder,select:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#ccc;font-size:14px;font-weight:400;font-family:\"Open sans\",sans-serif}input::placeholder,select::placeholder,textarea::placeholder{color:#ccc;font-size:14px;font-weight:400;font-family:\"Open sans\",sans-serif}input:focus,select:focus,textarea:focus{font-weight:400;font-family:\"Open sans\",sans-serif;background:#fff;color:#000;box-shadow:0 .125rem .125rem rgba(245,239,189,.1);border-left:4px solid #ffd401}label{font-size:.813em;line-height:1.769em;color:#000}label.normal{font-size:1em;line-height:1.688em;color:#000}img{border-radius:9px;width:auto;max-width:100%}.icon{height:1em}.hr{width:100%;border-bottom:1px solid #f5f5f5}a{cursor:pointer}.table-wrapper{max-width:1160px;min-width:auto;overflow:auto}.table-wrapper>div.table{min-width:1160px}.table{box-shadow:0 0 20px -14px hsla(0,0%,88.6%,.63922);background-color:rgba(249,249,250,0);border-radius:4px;border:1px solid #eaeaea}.table>div.table-head{font-weight:600}.table>div.table-head>div{border-bottom:1px solid #eaeaea;background-color:hsla(0,0%,91.8%,.18824)}.table>div.table-head,.table>div.table-row{display:contents!important}.table>div.table-head>div,.table>div.table-row>div{padding:10px 15px;border-right:1px solid #eaeaea;height:100%;display:grid;align-items:center}.table>div.table-head>div:last-child,.table>div.table-row>div:last-child{border-right:0}.table>div.table-head:hover>div,.table>div.table-row:hover>div{background-color:hsla(0,0%,91.8%,.18824)}@media only screen and (max-width:576px){.table{justify-content:stretch}}@media only screen and (min-width:768px){.table-wrapper{min-width:100%;max-width:100%}.table-wrapper>div.table{min-width:100%}}span.status,span.tag{font-size:12px;line-height:18px;font-weight:400;border-radius:2px;padding:4px 8px;margin:2px;border:1px solid #e8e8e8;display:inline-block;text-align:center}span.status{border:0;border-left:5px solid #e8e8e8;text-align:left;border-radius:0}span.tag.yellow{background-color:#fff4bf;color:#000}span.tag.gray{background-color:hsla(0,0%,91.8%,.56471);color:#000}span.tag.white{background-color:#fff;color:#000}span.status.orange{border-left-color:orange;color:orange}span.status.red{border-left-color:red;color:red}span.status.yellow{border-left-color:gold;color:gold}span.status.green{border-left-color:green;color:green}span.status.gray{border-left-color:grey;color:grey}p.success{color:#000;color:#39ac37;padding:6px 15px;border-radius:4px}p.success>a{color:#000;text-decoration:none;font-weight:600}p.error{color:#d73a4a;padding:6px 15px}p.error>a{color:#000;text-decoration:none;font-weight:600}p.note{background-color:#f9f9fa;color:#bbb;padding:6px 15px;border-radius:4px;display:inline-block}p.note>a{color:#30e7b6;text-decoration:none}.box-form{border:1px solid #eaeaea;border-bottom:6px solid #eee;padding:30px;border-radius:4px}.tags>div.tag{margin:3px;border:1px solid #eee;background-color:#fff;padding:10px 15px;color:#000;border-radius:2px;cursor:pointer}.tags>div.tag.active{border:1px solid #ffd401;background-color:#fff4bf;color:#333}.tags>div.tag.active:hover,.tags>div.tag:hover{border:1px solid #000;background-color:#000;color:#fff}.icon{height:10px;border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("09cfa468", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex{display:flex}.inline-flex{display:inline-flex}.flex.row{flex-direction:row}.flex.col{flex-direction:column}.flex.wrap{flex-wrap:wrap}.flex.nowrap{flex-wrap:nowrap}.flex.align-items-stretch{align-items:stretch}.flex.align-items-start{align-items:flex-start}.flex.align-items-end{align-items:flex-end}.flex.align-items-center{align-items:center}.flex.align-items-baseline{align-items:baseline}.flex.align-content-stretch{align-content:stretch}.flex.align-content-start{align-content:flex-start}.flex.align-content-end{align-content:flex-end}.flex.align-content-center{align-content:center}.flex.align-content-baseline{align-content:baseline}.flex.justify-content-start{justify-content:flex-start}.flex.justify-content-end{justify-content:flex-end}.flex.justify-content-center{justify-content:center}.flex.justify-content-space-between{justify-content:space-between}.flex.justify-content-space-around{justify-content:space-around}.flex.justify-content-space-evenly{justify-content:space-evenly}.flex>.align-self-stretch{align-self:auto}.flex>.align-self-start{align-self:flex-start}.flex>.align-self-end{align-self:flex-end}.flex>.align-self-center{align-self:center}.flex>.align-self-baseline{align-self:baseline}.flex>.align-self-stretch{align-self:stretch}.flex-col{flex-direction:column}.flex>.grow-0{flex:0 0%}.flex>.grow-10{flex:10 10%}.flex>.grow-20{flex:20 20%}.flex>.grow-25{flex:25 25%}.flex>.grow-30{flex:30 30%}.flex>.grow-33{flex:33 33%}.flex>.grow-40{flex:40 40%}.flex>.grow-50{flex:50 50%}.flex>.grow-60{flex:60 60%}.flex>.grow-67{flex:67 67%}.flex>.grow-70{flex:70 70%}.flex>.grow-75{flex:75 75%}.flex>.grow-80{flex:80 80%}.flex>.grow-90{flex:90 90%}.flex>.grow-100{flex:100 100%}@media only screen and (max-width:576px){.flex>.xs-grow-0{flex:0 0%}.flex>.xs-grow-10{flex:10 10%}.flex>.xs-grow-20{flex:20 20%}.flex>.xs-grow-25{flex:25 25%}.flex>.xs-grow-30{flex:30 30%}.flex>.xs-grow-33{flex:33 33%}.flex>.xs-grow-40{flex:40 40%}.flex>.xs-grow-50{flex:50 50%}.flex>.xs-grow-60{flex:60 60%}.flex>.xs-grow-67{flex:67 67%}.flex>.xs-grow-70{flex:70 70%}.flex>.xs-grow-75{flex:75 75%}.flex>.xs-grow-80{flex:80 80%}.flex>.xs-grow-90{flex:90 90%}.flex>.xs-grow-100{flex:100 100%}}@media only screen and (min-width:576px){.flex>.sm-grow-0{flex:0 0%}.flex>.sm-grow-10{flex:10 10%}.flex>.sm-grow-20{flex:20 20%}.flex>.sm-grow-25{flex:25 25%}.flex>.sm-grow-30{flex:30 30%}.flex>.sm-grow-33{flex:33 33%}.flex>.sm-grow-40{flex:40 40%}.flex>.sm-grow-50{flex:50 50%}.flex>.sm-grow-60{flex:60 60%}.flex>.sm-grow-67{flex:67 67%}.flex>.sm-grow-70{flex:70 70%}.flex>.sm-grow-75{flex:75 75%}.flex>.sm-grow-80{flex:80 80%}.flex>.sm-grow-90{flex:90 90%}.flex>.sm-grow-100{flex:100 100%}}@media only screen and (min-width:768px){.flex>.md-grow-0{flex:0 0%}.flex>.md-grow-10{flex:10 10%}.flex>.md-grow-20{flex:20 20%}.flex>.md-grow-25{flex:25 25%}.flex>.md-grow-30{flex:30 30%}.flex>.md-grow-33{flex:33 33%}.flex>.md-grow-40{flex:40 40%}.flex>.md-grow-50{flex:50 50%}.flex>.md-grow-60{flex:60 60%}.flex>.md-grow-67{flex:67 67%}.flex>.md-grow-70{flex:70 70%}.flex>.md-grow-75{flex:75 75%}.flex>.md-grow-80{flex:80 80%}.flex>.md-grow-90{flex:90 90%}.flex>.md-grow-100{flex:100 100%}}@media only screen and (min-width:992px){.flex>.lg-grow-0{flex:0 0%}.flex>.lg-grow-10{flex:10 10%}.flex>.lg-grow-20{flex:20 20%}.flex>.lg-grow-25{flex:25 25%}.flex>.lg-grow-30{flex:30 30%}.flex>.lg-grow-33{flex:33 33%}.flex>.lg-grow-40{flex:40 40%}.flex>.lg-grow-50{flex:50 50%}.flex>.lg-grow-60{flex:60 60%}.flex>.lg-grow-67{flex:67 67%}.flex>.lg-grow-70{flex:70 70%}.flex>.lg-grow-75{flex:75 75%}.flex>.lg-grow-80{flex:80 80%}.flex>.lg-grow-90{flex:90 90%}.flex>.lg-grow-100{flex:100 100%}}@media only screen and (min-width:1200px){.flex>.xl-grow-0{flex:0 0%}.flex>.xl-grow-10{flex:10 10%}.flex>.xl-grow-20{flex:20 20%}.flex>.xl-grow-25{flex:25 25%}.flex>.xl-grow-30{flex:30 30%}.flex>.xl-grow-33{flex:33 33%}.flex>.xl-grow-40{flex:40 40%}.flex>.xl-grow-50{flex:50 50%}.flex>.xl-grow-60{flex:60 60%}.flex>.xl-grow-67{flex:67 67%}.flex>.xl-grow-70{flex:70 70%}.flex>.xl-grow-75{flex:75 75%}.flex>.xl-grow-80{flex:80 80%}.flex>.xl-grow-90{flex:90 90%}.flex>.xl-grow-100{flex:100 100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("f6ade9a8", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid,.grid.col-1{grid-template-columns:repeat(1,1fr)}.grid,.grid.col-1,.grid.col-2{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-2{grid-template-columns:repeat(2,1fr)}.grid.col-3{grid-template-columns:repeat(3,1fr)}.grid.col-3,.grid.col-4{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-4{grid-template-columns:repeat(4,1fr)}.grid.col-5{grid-template-columns:repeat(5,1fr)}.grid.col-5,.grid.col-6{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-6{grid-template-columns:repeat(6,1fr)}.grid.col-7{grid-template-columns:repeat(7,1fr)}.grid.col-7,.grid.col-8{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-8{grid-template-columns:repeat(8,1fr)}.grid.col-9{grid-template-columns:repeat(9,1fr)}.grid.col-9,.grid.col-10{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-10{grid-template-columns:repeat(10,1fr)}.grid.col-11{grid-template-columns:repeat(11,1fr)}.grid.col-11,.grid.col-12{display:grid;grid-auto-columns:auto;grid-auto-rows:auto}.grid.col-12{grid-template-columns:repeat(12,1fr)}.grid.auto,.grid.col-1.auto{grid-template-columns:repeat(1,auto)}.grid.col-2.auto{grid-template-columns:repeat(2,auto)}.grid.col-3.auto{grid-template-columns:repeat(3,auto)}.grid.col-4.auto{grid-template-columns:repeat(4,auto)}.grid.col-5.auto{grid-template-columns:repeat(5,auto)}.grid.col-6.auto{grid-template-columns:repeat(6,auto)}.grid.col-7.auto{grid-template-columns:repeat(7,auto)}.grid.col-8.auto{grid-template-columns:repeat(8,auto)}.grid.col-9.auto{grid-template-columns:repeat(9,auto)}.grid.col-10.auto{grid-template-columns:repeat(10,auto)}.grid.col-11.auto{grid-template-columns:repeat(11,auto)}.grid.col-12.auto{grid-template-columns:repeat(12,auto)}.grid.justify-content-start,.grid.x-content-start,.grid.xc-start{justify-content:start}.grid.justify-content-center,.grid.x-content-center,.grid.xc-center{justify-content:center}.grid.justify-content-stretch,.grid.x-content-stretch,.grid.xc-stretch{justify-content:stretch}.grid.justify-content-end,.grid.x-content-end,.grid.xc-end{justify-content:end}.grid.justify-content-space-around,.grid.x-content-space-around,.grid.xc-space-around{justify-content:space-around}.grid.justify-content-space-between,.grid.x-content-space-between,.grid.xc-space-between{justify-content:space-between}.grid.justify-content-space-evenly,.grid.x-content-space-evenly,.grid.xc-space-evenly{justify-content:space-evenly}.grid.align-content-start,.grid.y-content-start,.grid.yc-start{align-content:start}.grid.align-content-center,.grid.y-content-center,.grid.yc-center{align-content:center}.grid.align-content-stretch,.grid.y-content-stretch,.grid.yc-stretch{align-content:stretch}.grid.align-content-end,.grid.y-content-end,.grid.yc-end{align-content:end}.grid.align-content-space-around,.grid.y-content-space-around,.grid.yc-space-around{align-content:space-around}.grid.align-content-space-between,.grid.y-content-space-between,.grid.yc-space-between{align-content:space-between}.grid.align-content-space-evenly,.grid.y-content-space-evenly,.grid.yc-space-evenly{align-content:space-evenly}.grid.justify-items-start,.grid.x-items-start,.grid.xi-start{justify-items:start}.grid.justify-items-center,.grid.x-items-center,.grid.xi-center{justify-items:center}.grid.justify-items-stretch,.grid.x-items-stretch,.grid.xi-stretch{justify-items:stretch}.grid.justify-items-end,.grid.x-items-end,.grid.xi-end{justify-items:end}.grid.align-items-start,.grid.y-items-start,.grid.yi-start{align-items:start}.grid.align-items-center,.grid.y-items-center,.grid.yi-center{align-items:center}.grid.align-items-stretch,.grid.y-items-stretch,.grid.yi-stretch{align-items:stretch}.grid.align-items-end,.grid.y-items-end,.grid.yi-end{align-items:end}.grid>.justify-self-start,.grid>.x-self-start,.grid>.xs-start{justify-self:start}.grid>.justify-self-center,.grid>.x-self-center,.grid>.xs-center{justify-self:center}.grid>.justify-self-stretch,.grid>.x-self-stretch,.grid>.xs-stretch{justify-self:stretch}.grid>.justify-self-end,.grid>.x-self-end,.grid>.xs-end{justify-self:end}.grid>.align-self-start,.grid>.y-self-start,.grid>.ys-start{align-self:start}.grid>.align-self-center,.grid>.y-self-center,.grid>.ys-center{align-self:center}.grid>.align-self-stretch,.grid>.y-self-stretch,.grid>.ys-stretch{align-self:stretch}.grid>.align-self-end,.grid>.y-self-end,.grid>.ys-end{align-self:end}.grid.auto-flow-row-dense{grid-auto-flow:column dense}.grid.gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.row-gap-1{grid-row-gap:1px}.grid.row-gap-2{grid-row-gap:2px}.grid.row-gap-3{grid-row-gap:3px}.grid.row-gap-4{grid-row-gap:4px}.grid.row-gap-5{grid-row-gap:5px}.grid.row-gap-6{grid-row-gap:6px}.grid.row-gap-7{grid-row-gap:7px}.grid.row-gap-8{grid-row-gap:8px}.grid.row-gap-9{grid-row-gap:9px}.grid.row-gap-10{grid-row-gap:10px}.grid.row-gap-15{grid-row-gap:15px}.grid.row-gap-20{grid-row-gap:20px}.grid.row-gap-30{grid-row-gap:30px}.grid.row-gap-40{grid-row-gap:40px}.grid.row-gap-50{grid-row-gap:50px}.grid.row-gap-60{grid-row-gap:60px}.grid.row-gap-70{grid-row-gap:70px}.grid.row-gap-80{grid-row-gap:80px}.grid.row-gap-90{grid-row-gap:90px}.grid.row-gap-100{grid-row-gap:100px}.grid.row-gap-125{grid-row-gap:125px}.grid.row-gap-150{grid-row-gap:150px}.grid.col-gap-1{grid-column-gap:1px}.grid.col-gap-2{grid-column-gap:2px}.grid.col-gap-3{grid-column-gap:3px}.grid.col-gap-4{grid-column-gap:4px}.grid.col-gap-5{grid-column-gap:5px}.grid.col-gap-6{grid-column-gap:6px}.grid.col-gap-7{grid-column-gap:7px}.grid.col-gap-8{grid-column-gap:8px}.grid.col-gap-9{grid-column-gap:9px}.grid.col-gap-10{grid-column-gap:10px}.grid.col-gap-15{grid-column-gap:15px}.grid.col-gap-20{grid-column-gap:20px}.grid.col-gap-30{grid-column-gap:30px}.grid.col-gap-40{grid-column-gap:40px}.grid.col-gap-50{grid-column-gap:50px}.grid.col-gap-60{grid-column-gap:60px}.grid.col-gap-70{grid-column-gap:70px}.grid.col-gap-80{grid-column-gap:80px}.grid.col-gap-90{grid-column-gap:90px}.grid.col-gap-100{grid-column-gap:100px}.grid.col-gap-125{grid-column-gap:125px}.grid.col-gap-150{grid-column-gap:150px}.grid>.col-start-12{grid-column-start:12}.grid>.col-start-11{grid-column-start:11}.grid>.col-start-10{grid-column-start:10}.grid>.col-start-9{grid-column-start:9}.grid>.col-start-8{grid-column-start:8}.grid>.col-start-7{grid-column-start:7}.grid>.col-start-6{grid-column-start:6}.grid>.col-start-5{grid-column-start:5}.grid>.col-start-4{grid-column-start:4}.grid>.col-start-3{grid-column-start:3}.grid>.col-start-2{grid-column-start:2}.grid>.col-start-1{grid-column-start:1}.grid>.row-start-12{grid-row-start:12}.grid>.row-start-11{grid-row-start:11}.grid>.row-start-10{grid-row-start:10}.grid>.row-start-9{grid-row-start:9}.grid>.row-start-8{grid-row-start:8}.grid>.row-start-7{grid-row-start:7}.grid>.row-start-6{grid-row-start:6}.grid>.row-start-5{grid-row-start:5}.grid>.row-start-4{grid-row-start:4}.grid>.row-start-3{grid-row-start:3}.grid>.row-start-2{grid-row-start:2}.grid>.row-start-1{grid-row-start:1}.grid>.span-12{grid-column-end:span 12}.grid>.span-11{grid-column-end:span 11}.grid>.span-10{grid-column-end:span 10}.grid>.span-9{grid-column-end:span 9}.grid>.span-8{grid-column-end:span 8}.grid>.span-7{grid-column-end:span 7}.grid>.span-6{grid-column-end:span 6}.grid>.span-5{grid-column-end:span 5}.grid>.span-4{grid-column-end:span 4}.grid>.span-3{grid-column-end:span 3}.grid>.span-2{grid-column-end:span 2}.grid>.span-1{grid-column-end:span 1}.grid>.fixcol-12{grid-column-end:span 12}.grid>.fixcol-11{grid-column-end:span 11}.grid>.fixcol-10{grid-column-end:span 10}.grid>.fixcol-9{grid-column-end:span 9}.grid>.fixcol-8{grid-column-end:span 8}.grid>.fixcol-7{grid-column-end:span 7}.grid>.fixcol-6{grid-column-end:span 6}.grid>.fixcol-5{grid-column-end:span 5}.grid>.fixcol-4{grid-column-end:span 4}.grid>.fixcol-3{grid-column-end:span 3}.grid>.fixcol-2{grid-column-end:span 2}.grid>.fixcol-1{grid-column-end:span 1}.grid>.row-1{grid-row-end:span 1}.grid>.row-2{grid-row-end:span 2}.grid>.row-3{grid-row-end:span 3}.grid>.row-4{grid-row-end:span 4}.grid>.row-5{grid-row-end:span 5}.grid>.row-6{grid-row-end:span 6}.grid>.row-7{grid-row-end:span 7}.grid>.row-8{grid-row-end:span 8}.grid>.row-9{grid-row-end:span 9}.grid>.row-10{grid-row-end:span 10}.grid>.row-11{grid-row-end:span 11}.grid>.row-12{grid-row-end:span 12}@media only screen and (max-width:576px){.grid>.xs-justify-self-start,.grid>.xs-x-self-start,.grid>.xs-xs-start{justify-self:start}.grid>.xs-justify-self-center,.grid>.xs-x-self-center,.grid>.xs-xs-center{justify-self:center}.grid>.xs-justify-self-stretch,.grid>.xs-x-self-stretch,.grid>.xs-xs-stretch{justify-self:stretch}.grid>.xs-justify-self-end,.grid>.xs-x-self-end,.grid>.xs-xs-end{justify-self:end}.grid>.xs-align-self-start,.grid>.xs-y-self-start,.grid>.xs-ys-start{align-self:start}.grid>.xs-align-self-center,.grid>.xs-y-self-center,.grid>.xs-ys-center{align-self:center}.grid>.xs-align-self-stretch,.grid>.xs-y-self-stretch,.grid>.xs-ys-stretch{align-self:stretch}.grid>.xs-align-self-end,.grid>.xs-y-self-end,.grid>.xs-ys-end{align-self:end}.grid.xs-gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.xs-gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.xs-gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.xs-gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.xs-gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.xs-gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.xs-gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.xs-gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.xs-gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.xs-gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.xs-gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.xs-gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.xs-gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.xs-gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.xs-gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.xs-gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.xs-gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.xs-gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.xs-gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.xs-gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.xs-gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.xs-gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.xs-row-gap-1{grid-row-gap:1px}.grid.xs-row-gap-2{grid-row-gap:2px}.grid.xs-row-gap-3{grid-row-gap:3px}.grid.xs-row-gap-4{grid-row-gap:4px}.grid.xs-row-gap-5{grid-row-gap:5px}.grid.xs-row-gap-6{grid-row-gap:6px}.grid.xs-row-gap-7{grid-row-gap:7px}.grid.xs-row-gap-8{grid-row-gap:8px}.grid.xs-row-gap-9{grid-row-gap:9px}.grid.xs-row-gap-10{grid-row-gap:10px}.grid.xs-row-gap-15{grid-row-gap:15px}.grid.xs-row-gap-20{grid-row-gap:20px}.grid.xs-row-gap-30{grid-row-gap:30px}.grid.xs-row-gap-40{grid-row-gap:40px}.grid.xs-row-gap-50{grid-row-gap:50px}.grid.xs-row-gap-60{grid-row-gap:60px}.grid.xs-row-gap-70{grid-row-gap:70px}.grid.xs-row-gap-80{grid-row-gap:80px}.grid.xs-row-gap-90{grid-row-gap:90px}.grid.xs-row-gap-100{grid-row-gap:100px}.grid.xs-row-gap-125{grid-row-gap:125px}.grid.xs-row-gap-150{grid-row-gap:150px}.grid.xs-col-gap-1{grid-column-gap:1px}.grid.xs-col-gap-2{grid-column-gap:2px}.grid.xs-col-gap-3{grid-column-gap:3px}.grid.xs-col-gap-4{grid-column-gap:4px}.grid.xs-col-gap-5{grid-column-gap:5px}.grid.xs-col-gap-6{grid-column-gap:6px}.grid.xs-col-gap-7{grid-column-gap:7px}.grid.xs-col-gap-8{grid-column-gap:8px}.grid.xs-col-gap-9{grid-column-gap:9px}.grid.xs-col-gap-10{grid-column-gap:10px}.grid.xs-col-gap-15{grid-column-gap:15px}.grid.xs-col-gap-20{grid-column-gap:20px}.grid.xs-col-gap-30{grid-column-gap:30px}.grid.xs-col-gap-40{grid-column-gap:40px}.grid.xs-col-gap-50{grid-column-gap:50px}.grid.xs-col-gap-60{grid-column-gap:60px}.grid.xs-col-gap-70{grid-column-gap:70px}.grid.xs-col-gap-80{grid-column-gap:80px}.grid.xs-col-gap-90{grid-column-gap:90px}.grid.xs-col-gap-100{grid-column-gap:100px}.grid.xs-col-gap-125{grid-column-gap:125px}.grid.xs-col-gap-150{grid-column-gap:150px}.grid>.xs-order-12{order:12}.grid>.xs-order-11{order:11}.grid>.xs-order-10{order:10}.grid>.xs-order-9{order:9}.grid>.xs-order-8{order:8}.grid>.xs-order-7{order:7}.grid>.xs-order-6{order:6}.grid>.xs-order-5{order:5}.grid>.xs-order-4{order:4}.grid>.xs-order-3{order:3}.grid>.xs-order-2{order:2}.grid>.xs-order-1{order:1}.grid>.xs-span-12{grid-column-end:span 12}.grid>.xs-span-11{grid-column-end:span 11}.grid>.xs-span-10{grid-column-end:span 10}.grid>.xs-span-9{grid-column-end:span 9}.grid>.xs-span-8{grid-column-end:span 8}.grid>.xs-span-7{grid-column-end:span 7}.grid>.xs-span-6{grid-column-end:span 6}.grid>.xs-span-5{grid-column-end:span 5}.grid>.xs-span-4{grid-column-end:span 4}.grid>.xs-span-3{grid-column-end:span 3}.grid>.xs-span-2{grid-column-end:span 2}.grid>.xs-span-1{grid-column-end:span 1}.grid.xs-col-1{grid-template-columns:repeat(1,1fr)}.grid.xs-col-2{grid-template-columns:repeat(2,1fr)}.grid.xs-col-3{grid-template-columns:repeat(3,1fr)}.grid.xs-col-4{grid-template-columns:repeat(4,1fr)}.grid.xs-col-5{grid-template-columns:repeat(5,1fr)}.grid.xs-col-6{grid-template-columns:repeat(6,1fr)}.grid.xs-col-7{grid-template-columns:repeat(7,1fr)}.grid.xs-col-8{grid-template-columns:repeat(8,1fr)}.grid.xs-col-9{grid-template-columns:repeat(9,1fr)}.grid.xs-col-10{grid-template-columns:repeat(10,1fr)}.grid.xs-col-11{grid-template-columns:repeat(11,1fr)}.grid.xs-col-12{grid-template-columns:repeat(12,1fr)}.grid.xs-col-1.auto{grid-template-columns:repeat(1,auto)}.grid.xs-col-2.auto{grid-template-columns:repeat(2,auto)}.grid.xs-col-3.auto{grid-template-columns:repeat(3,auto)}.grid.xs-col-4.auto{grid-template-columns:repeat(4,auto)}.grid.xs-col-5.auto{grid-template-columns:repeat(5,auto)}.grid.xs-col-6.auto{grid-template-columns:repeat(6,auto)}.grid.xs-col-7.auto{grid-template-columns:repeat(7,auto)}.grid.xs-col-8.auto{grid-template-columns:repeat(8,auto)}.grid.xs-col-9.auto{grid-template-columns:repeat(9,auto)}.grid.xs-col-10.auto{grid-template-columns:repeat(10,auto)}.grid.xs-col-11.auto{grid-template-columns:repeat(11,auto)}.grid.xs-col-12.auto{grid-template-columns:repeat(12,auto)}}@media only screen and (min-width:576px){.grid>.sm-justify-self-start,.grid>.sm-x-self-start,.grid>.sm-xs-start{justify-self:start}.grid>.sm-justify-self-center,.grid>.sm-x-self-center,.grid>.sm-xs-center{justify-self:center}.grid>.sm-justify-self-stretch,.grid>.sm-x-self-stretch,.grid>.sm-xs-stretch{justify-self:stretch}.grid>.sm-justify-self-end,.grid>.sm-x-self-end,.grid>.sm-xs-end{justify-self:end}.grid>.sm-align-self-start,.grid>.sm-y-self-start,.grid>.sm-ys-start{align-self:start}.grid>.sm-align-self-center,.grid>.sm-y-self-center,.grid>.sm-ys-center{align-self:center}.grid>.sm-align-self-stretch,.grid>.sm-y-self-stretch,.grid>.sm-ys-stretch{align-self:stretch}.grid>.sm-align-self-end,.grid>.sm-y-self-end,.grid>.sm-ys-end{align-self:end}.grid.sm-gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.sm-gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.sm-gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.sm-gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.sm-gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.sm-gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.sm-gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.sm-gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.sm-gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.sm-gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.sm-gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.sm-gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.sm-gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.sm-gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.sm-gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.sm-gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.sm-gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.sm-gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.sm-gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.sm-gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.sm-gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.sm-gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.sm-row-gap-1{grid-row-gap:1px}.grid.sm-row-gap-2{grid-row-gap:2px}.grid.sm-row-gap-3{grid-row-gap:3px}.grid.sm-row-gap-4{grid-row-gap:4px}.grid.sm-row-gap-5{grid-row-gap:5px}.grid.sm-row-gap-6{grid-row-gap:6px}.grid.sm-row-gap-7{grid-row-gap:7px}.grid.sm-row-gap-8{grid-row-gap:8px}.grid.sm-row-gap-9{grid-row-gap:9px}.grid.sm-row-gap-10{grid-row-gap:10px}.grid.sm-row-gap-15{grid-row-gap:15px}.grid.sm-row-gap-20{grid-row-gap:20px}.grid.sm-row-gap-30{grid-row-gap:30px}.grid.sm-row-gap-40{grid-row-gap:40px}.grid.sm-row-gap-50{grid-row-gap:50px}.grid.sm-row-gap-60{grid-row-gap:60px}.grid.sm-row-gap-70{grid-row-gap:70px}.grid.sm-row-gap-80{grid-row-gap:80px}.grid.sm-row-gap-90{grid-row-gap:90px}.grid.sm-row-gap-100{grid-row-gap:100px}.grid.sm-row-gap-125{grid-row-gap:125px}.grid.sm-row-gap-150{grid-row-gap:150px}.grid.sm-col-gap-1{grid-column-gap:1px}.grid.sm-col-gap-2{grid-column-gap:2px}.grid.sm-col-gap-3{grid-column-gap:3px}.grid.sm-col-gap-4{grid-column-gap:4px}.grid.sm-col-gap-5{grid-column-gap:5px}.grid.sm-col-gap-6{grid-column-gap:6px}.grid.sm-col-gap-7{grid-column-gap:7px}.grid.sm-col-gap-8{grid-column-gap:8px}.grid.sm-col-gap-9{grid-column-gap:9px}.grid.sm-col-gap-10{grid-column-gap:10px}.grid.sm-col-gap-15{grid-column-gap:15px}.grid.sm-col-gap-20{grid-column-gap:20px}.grid.sm-col-gap-30{grid-column-gap:30px}.grid.sm-col-gap-40{grid-column-gap:40px}.grid.sm-col-gap-50{grid-column-gap:50px}.grid.sm-col-gap-60{grid-column-gap:60px}.grid.sm-col-gap-70{grid-column-gap:70px}.grid.sm-col-gap-80{grid-column-gap:80px}.grid.sm-col-gap-90{grid-column-gap:90px}.grid.sm-col-gap-100{grid-column-gap:100px}.grid.sm-col-gap-125{grid-column-gap:125px}.grid.sm-col-gap-150{grid-column-gap:150px}.grid>.sm-order-12{order:12}.grid>.sm-order-11{order:11}.grid>.sm-order-10{order:10}.grid>.sm-order-9{order:9}.grid>.sm-order-8{order:8}.grid>.sm-order-7{order:7}.grid>.sm-order-6{order:6}.grid>.sm-order-5{order:5}.grid>.sm-order-4{order:4}.grid>.sm-order-3{order:3}.grid>.sm-order-2{order:2}.grid>.sm-order-1{order:1}.grid>.sm-span-12{grid-column-end:span 12}.grid>.sm-span-11{grid-column-end:span 11}.grid>.sm-span-10{grid-column-end:span 10}.grid>.sm-span-9{grid-column-end:span 9}.grid>.sm-span-8{grid-column-end:span 8}.grid>.sm-span-7{grid-column-end:span 7}.grid>.sm-span-6{grid-column-end:span 6}.grid>.sm-span-5{grid-column-end:span 5}.grid>.sm-span-4{grid-column-end:span 4}.grid>.sm-span-3{grid-column-end:span 3}.grid>.sm-span-2{grid-column-end:span 2}.grid>.sm-span-1{grid-column-end:span 1}.grid.sm-col-1{grid-template-columns:repeat(1,1fr)}.grid.sm-col-2{grid-template-columns:repeat(2,1fr)}.grid.sm-col-3{grid-template-columns:repeat(3,1fr)}.grid.sm-col-4{grid-template-columns:repeat(4,1fr)}.grid.sm-col-5{grid-template-columns:repeat(5,1fr)}.grid.sm-col-6{grid-template-columns:repeat(6,1fr)}.grid.sm-col-7{grid-template-columns:repeat(7,1fr)}.grid.sm-col-8{grid-template-columns:repeat(8,1fr)}.grid.sm-col-9{grid-template-columns:repeat(9,1fr)}.grid.sm-col-10{grid-template-columns:repeat(10,1fr)}.grid.sm-col-11{grid-template-columns:repeat(11,1fr)}.grid.sm-col-12{grid-template-columns:repeat(12,1fr)}.grid.sm-col-1.auto{grid-template-columns:repeat(1,auto)}.grid.sm-col-2.auto{grid-template-columns:repeat(2,auto)}.grid.sm-col-3.auto{grid-template-columns:repeat(3,auto)}.grid.sm-col-4.auto{grid-template-columns:repeat(4,auto)}.grid.sm-col-5.auto{grid-template-columns:repeat(5,auto)}.grid.sm-col-6.auto{grid-template-columns:repeat(6,auto)}.grid.sm-col-7.auto{grid-template-columns:repeat(7,auto)}.grid.sm-col-8.auto{grid-template-columns:repeat(8,auto)}.grid.sm-col-9.auto{grid-template-columns:repeat(9,auto)}.grid.sm-col-10.auto{grid-template-columns:repeat(10,auto)}.grid.sm-col-11.auto{grid-template-columns:repeat(11,auto)}.grid.sm-col-12.auto{grid-template-columns:repeat(12,auto)}}@media only screen and (min-width:768px){.grid>.md-justify-self-start,.grid>.md-x-self-start,.grid>.md-xs-start{justify-self:start}.grid>.md-justify-self-center,.grid>.md-x-self-center,.grid>.md-xs-center{justify-self:center}.grid>.md-justify-self-stretch,.grid>.md-x-self-stretch,.grid>.md-xs-stretch{justify-self:stretch}.grid>.md-justify-self-end,.grid>.md-x-self-end,.grid>.md-xs-end{justify-self:end}.grid>.md-align-self-start,.grid>.md-y-self-start,.grid>.md-ys-start{align-self:start}.grid>.md-align-self-center,.grid>.md-y-self-center,.grid>.md-ys-center{align-self:center}.grid>.md-align-self-stretch,.grid>.md-y-self-stretch,.grid>.md-ys-stretch{align-self:stretch}.grid>.md-align-self-end,.grid>.md-y-self-end,.grid>.md-ys-end{align-self:end}.grid.md-gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.md-gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.md-gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.md-gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.md-gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.md-gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.md-gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.md-gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.md-gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.md-gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.md-gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.md-gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.md-gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.md-gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.md-gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.md-gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.md-gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.md-gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.md-gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.md-gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.md-gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.md-gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.md-row-gap-1{grid-row-gap:1px}.grid.md-row-gap-2{grid-row-gap:2px}.grid.md-row-gap-3{grid-row-gap:3px}.grid.md-row-gap-4{grid-row-gap:4px}.grid.md-row-gap-5{grid-row-gap:5px}.grid.md-row-gap-6{grid-row-gap:6px}.grid.md-row-gap-7{grid-row-gap:7px}.grid.md-row-gap-8{grid-row-gap:8px}.grid.md-row-gap-9{grid-row-gap:9px}.grid.md-row-gap-10{grid-row-gap:10px}.grid.md-row-gap-15{grid-row-gap:15px}.grid.md-row-gap-20{grid-row-gap:20px}.grid.md-row-gap-30{grid-row-gap:30px}.grid.md-row-gap-40{grid-row-gap:40px}.grid.md-row-gap-50{grid-row-gap:50px}.grid.md-row-gap-60{grid-row-gap:60px}.grid.md-row-gap-70{grid-row-gap:70px}.grid.md-row-gap-80{grid-row-gap:80px}.grid.md-row-gap-90{grid-row-gap:90px}.grid.md-row-gap-100{grid-row-gap:100px}.grid.md-row-gap-125{grid-row-gap:125px}.grid.md-row-gap-150{grid-row-gap:150px}.grid.md-col-gap-1{grid-column-gap:1px}.grid.md-col-gap-2{grid-column-gap:2px}.grid.md-col-gap-3{grid-column-gap:3px}.grid.md-col-gap-4{grid-column-gap:4px}.grid.md-col-gap-5{grid-column-gap:5px}.grid.md-col-gap-6{grid-column-gap:6px}.grid.md-col-gap-7{grid-column-gap:7px}.grid.md-col-gap-8{grid-column-gap:8px}.grid.md-col-gap-9{grid-column-gap:9px}.grid.md-col-gap-10{grid-column-gap:10px}.grid.md-col-gap-15{grid-column-gap:15px}.grid.md-col-gap-20{grid-column-gap:20px}.grid.md-col-gap-30{grid-column-gap:30px}.grid.md-col-gap-40{grid-column-gap:40px}.grid.md-col-gap-50{grid-column-gap:50px}.grid.md-col-gap-60{grid-column-gap:60px}.grid.md-col-gap-70{grid-column-gap:70px}.grid.md-col-gap-80{grid-column-gap:80px}.grid.md-col-gap-90{grid-column-gap:90px}.grid.md-col-gap-100{grid-column-gap:100px}.grid.md-col-gap-125{grid-column-gap:125px}.grid.md-col-gap-150{grid-column-gap:150px}.grid>.md-order-12{order:12}.grid>.md-order-11{order:11}.grid>.md-order-10{order:10}.grid>.md-order-9{order:9}.grid>.md-order-8{order:8}.grid>.md-order-7{order:7}.grid>.md-order-6{order:6}.grid>.md-order-5{order:5}.grid>.md-order-4{order:4}.grid>.md-order-3{order:3}.grid>.md-order-2{order:2}.grid>.md-order-1{order:1}.grid>.md-span-12{grid-column-end:span 12}.grid>.md-span-11{grid-column-end:span 11}.grid>.md-span-10{grid-column-end:span 10}.grid>.md-span-9{grid-column-end:span 9}.grid>.md-span-8{grid-column-end:span 8}.grid>.md-span-7{grid-column-end:span 7}.grid>.md-span-6{grid-column-end:span 6}.grid>.md-span-5{grid-column-end:span 5}.grid>.md-span-4{grid-column-end:span 4}.grid>.md-span-3{grid-column-end:span 3}.grid>.md-span-2{grid-column-end:span 2}.grid>.md-span-1{grid-column-end:span 1}.grid.md-col-1{grid-template-columns:repeat(1,1fr)}.grid.md-col-2{grid-template-columns:repeat(2,1fr)}.grid.md-col-3{grid-template-columns:repeat(3,1fr)}.grid.md-col-4{grid-template-columns:repeat(4,1fr)}.grid.md-col-5{grid-template-columns:repeat(5,1fr)}.grid.md-col-6{grid-template-columns:repeat(6,1fr)}.grid.md-col-7{grid-template-columns:repeat(7,1fr)}.grid.md-col-8{grid-template-columns:repeat(8,1fr)}.grid.md-col-9{grid-template-columns:repeat(9,1fr)}.grid.md-col-10{grid-template-columns:repeat(10,1fr)}.grid.md-col-11{grid-template-columns:repeat(11,1fr)}.grid.md-col-12{grid-template-columns:repeat(12,1fr)}.grid.md-col-1.auto{grid-template-columns:repeat(1,auto)}.grid.md-col-2.auto{grid-template-columns:repeat(2,auto)}.grid.md-col-3.auto{grid-template-columns:repeat(3,auto)}.grid.md-col-4.auto{grid-template-columns:repeat(4,auto)}.grid.md-col-5.auto{grid-template-columns:repeat(5,auto)}.grid.md-col-6.auto{grid-template-columns:repeat(6,auto)}.grid.md-col-7.auto{grid-template-columns:repeat(7,auto)}.grid.md-col-8.auto{grid-template-columns:repeat(8,auto)}.grid.md-col-9.auto{grid-template-columns:repeat(9,auto)}.grid.md-col-10.auto{grid-template-columns:repeat(10,auto)}.grid.md-col-11.auto{grid-template-columns:repeat(11,auto)}.grid.md-col-12.auto{grid-template-columns:repeat(12,auto)}}@media only screen and (min-width:992px){.grid>.lg-justify-self-start,.grid>.lg-x-self-start,.grid>.lg-xs-start{justify-self:start}.grid>.lg-justify-self-center,.grid>.lg-x-self-center,.grid>.lg-xs-center{justify-self:center}.grid>.lg-justify-self-stretch,.grid>.lg-x-self-stretch,.grid>.lg-xs-stretch{justify-self:stretch}.grid>.lg-justify-self-end,.grid>.lg-x-self-end,.grid>.lg-xs-end{justify-self:end}.grid>.lg-align-self-start,.grid>.lg-y-self-start,.grid>.lg-ys-start{align-self:start}.grid>.lg-align-self-center,.grid>.lg-y-self-center,.grid>.lg-ys-center{align-self:center}.grid>.lg-align-self-stretch,.grid>.lg-y-self-stretch,.grid>.lg-ys-stretch{align-self:stretch}.grid>.lg-align-self-end,.grid>.lg-y-self-end,.grid>.lg-ys-end{align-self:end}.grid.lg-gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.lg-gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.lg-gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.lg-gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.lg-gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.lg-gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.lg-gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.lg-gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.lg-gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.lg-gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.lg-gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.lg-gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.lg-gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.lg-gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.lg-gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.lg-gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.lg-gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.lg-gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.lg-gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.lg-gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.lg-gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.lg-gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.lg-row-gap-1{grid-row-gap:1px}.grid.lg-row-gap-2{grid-row-gap:2px}.grid.lg-row-gap-3{grid-row-gap:3px}.grid.lg-row-gap-4{grid-row-gap:4px}.grid.lg-row-gap-5{grid-row-gap:5px}.grid.lg-row-gap-6{grid-row-gap:6px}.grid.lg-row-gap-7{grid-row-gap:7px}.grid.lg-row-gap-8{grid-row-gap:8px}.grid.lg-row-gap-9{grid-row-gap:9px}.grid.lg-row-gap-10{grid-row-gap:10px}.grid.lg-row-gap-15{grid-row-gap:15px}.grid.lg-row-gap-20{grid-row-gap:20px}.grid.lg-row-gap-30{grid-row-gap:30px}.grid.lg-row-gap-40{grid-row-gap:40px}.grid.lg-row-gap-50{grid-row-gap:50px}.grid.lg-row-gap-60{grid-row-gap:60px}.grid.lg-row-gap-70{grid-row-gap:70px}.grid.lg-row-gap-80{grid-row-gap:80px}.grid.lg-row-gap-90{grid-row-gap:90px}.grid.lg-row-gap-100{grid-row-gap:100px}.grid.lg-row-gap-125{grid-row-gap:125px}.grid.lg-row-gap-150{grid-row-gap:150px}.grid.lg-col-gap-1{grid-column-gap:1px}.grid.lg-col-gap-2{grid-column-gap:2px}.grid.lg-col-gap-3{grid-column-gap:3px}.grid.lg-col-gap-4{grid-column-gap:4px}.grid.lg-col-gap-5{grid-column-gap:5px}.grid.lg-col-gap-6{grid-column-gap:6px}.grid.lg-col-gap-7{grid-column-gap:7px}.grid.lg-col-gap-8{grid-column-gap:8px}.grid.lg-col-gap-9{grid-column-gap:9px}.grid.lg-col-gap-10{grid-column-gap:10px}.grid.lg-col-gap-15{grid-column-gap:15px}.grid.lg-col-gap-20{grid-column-gap:20px}.grid.lg-col-gap-30{grid-column-gap:30px}.grid.lg-col-gap-40{grid-column-gap:40px}.grid.lg-col-gap-50{grid-column-gap:50px}.grid.lg-col-gap-60{grid-column-gap:60px}.grid.lg-col-gap-70{grid-column-gap:70px}.grid.lg-col-gap-80{grid-column-gap:80px}.grid.lg-col-gap-90{grid-column-gap:90px}.grid.lg-col-gap-100{grid-column-gap:100px}.grid.lg-col-gap-125{grid-column-gap:125px}.grid.lg-col-gap-150{grid-column-gap:150px}.grid>.lg-order-12{order:12}.grid>.lg-order-11{order:11}.grid>.lg-order-10{order:10}.grid>.lg-order-9{order:9}.grid>.lg-order-8{order:8}.grid>.lg-order-7{order:7}.grid>.lg-order-6{order:6}.grid>.lg-order-5{order:5}.grid>.lg-order-4{order:4}.grid>.lg-order-3{order:3}.grid>.lg-order-2{order:2}.grid>.lg-order-1{order:1}.grid>.lg-span-12{grid-column-end:span 12}.grid>.lg-span-11{grid-column-end:span 11}.grid>.lg-span-10{grid-column-end:span 10}.grid>.lg-span-9{grid-column-end:span 9}.grid>.lg-span-8{grid-column-end:span 8}.grid>.lg-span-7{grid-column-end:span 7}.grid>.lg-span-6{grid-column-end:span 6}.grid>.lg-span-5{grid-column-end:span 5}.grid>.lg-span-4{grid-column-end:span 4}.grid>.lg-span-3{grid-column-end:span 3}.grid>.lg-span-2{grid-column-end:span 2}.grid>.lg-span-1{grid-column-end:span 1}.grid.lg-col-1{grid-template-columns:repeat(1,1fr)}.grid.lg-col-2{grid-template-columns:repeat(2,1fr)}.grid.lg-col-3{grid-template-columns:repeat(3,1fr)}.grid.lg-col-4{grid-template-columns:repeat(4,1fr)}.grid.lg-col-5{grid-template-columns:repeat(5,1fr)}.grid.lg-col-6{grid-template-columns:repeat(6,1fr)}.grid.lg-col-7{grid-template-columns:repeat(7,1fr)}.grid.lg-col-8{grid-template-columns:repeat(8,1fr)}.grid.lg-col-9{grid-template-columns:repeat(9,1fr)}.grid.lg-col-10{grid-template-columns:repeat(10,1fr)}.grid.lg-col-11{grid-template-columns:repeat(11,1fr)}.grid.lg-col-12{grid-template-columns:repeat(12,1fr)}.grid.lg-col-1.auto{grid-template-columns:repeat(1,auto)}.grid.lg-col-2.auto{grid-template-columns:repeat(2,auto)}.grid.lg-col-3.auto{grid-template-columns:repeat(3,auto)}.grid.lg-col-4.auto{grid-template-columns:repeat(4,auto)}.grid.lg-col-5.auto{grid-template-columns:repeat(5,auto)}.grid.lg-col-6.auto{grid-template-columns:repeat(6,auto)}.grid.lg-col-7.auto{grid-template-columns:repeat(7,auto)}.grid.lg-col-8.auto{grid-template-columns:repeat(8,auto)}.grid.lg-col-9.auto{grid-template-columns:repeat(9,auto)}.grid.lg-col-10.auto{grid-template-columns:repeat(10,auto)}.grid.lg-col-11.auto{grid-template-columns:repeat(11,auto)}.grid.lg-col-12.auto{grid-template-columns:repeat(12,auto)}}@media only screen and (min-width:1200px){.grid>.xl-justify-self-start,.grid>.xl-x-self-start,.grid>.xl-xs-start{justify-self:start}.grid>.xl-justify-self-center,.grid>.xl-x-self-center,.grid>.xl-xs-center{justify-self:center}.grid>.xl-justify-self-stretch,.grid>.xl-x-self-stretch,.grid>.xl-xs-stretch{justify-self:stretch}.grid>.xl-justify-self-end,.grid>.xl-x-self-end,.grid>.xl-xs-end{justify-self:end}.grid>.xl-align-self-start,.grid>.xl-y-self-start,.grid>.xl-ys-start{align-self:start}.grid>.xl-align-self-center,.grid>.xl-y-self-center,.grid>.xl-ys-center{align-self:center}.grid>.xl-align-self-stretch,.grid>.xl-y-self-stretch,.grid>.xl-ys-stretch{align-self:stretch}.grid>.xl-align-self-end,.grid>.xl-y-self-end,.grid>.xl-ys-end{align-self:end}.grid.xl-gap-1{grid-column-gap:1px;grid-row-gap:1px}.grid.xl-gap-2{grid-column-gap:2px;grid-row-gap:2px}.grid.xl-gap-3{grid-column-gap:3px;grid-row-gap:3px}.grid.xl-gap-4{grid-column-gap:4px;grid-row-gap:4px}.grid.xl-gap-5{grid-column-gap:5px;grid-row-gap:5px}.grid.xl-gap-6{grid-column-gap:6px;grid-row-gap:6px}.grid.xl-gap-7{grid-column-gap:7px;grid-row-gap:7px}.grid.xl-gap-8{grid-column-gap:8px;grid-row-gap:8px}.grid.xl-gap-9{grid-column-gap:9px;grid-row-gap:9px}.grid.xl-gap-10{grid-column-gap:10px;grid-row-gap:10px}.grid.xl-gap-15{grid-column-gap:15px;grid-row-gap:15px}.grid.xl-gap-20{grid-column-gap:20px;grid-row-gap:20px}.grid.xl-gap-30{grid-column-gap:30px;grid-row-gap:30px}.grid.xl-gap-40{grid-column-gap:40px;grid-row-gap:40px}.grid.xl-gap-50{grid-column-gap:50px;grid-row-gap:50px}.grid.xl-gap-60{grid-column-gap:60px;grid-row-gap:60px}.grid.xl-gap-70{grid-column-gap:70px;grid-row-gap:70px}.grid.xl-gap-80{grid-column-gap:80px;grid-row-gap:80px}.grid.xl-gap-90{grid-column-gap:90px;grid-row-gap:90px}.grid.xl-gap-100{grid-column-gap:100px;grid-row-gap:100px}.grid.xl-gap-125{grid-column-gap:125px;grid-row-gap:125px}.grid.xl-gap-150{grid-column-gap:150px;grid-row-gap:150px}.grid.xl-row-gap-1{grid-row-gap:1px}.grid.xl-row-gap-2{grid-row-gap:2px}.grid.xl-row-gap-3{grid-row-gap:3px}.grid.xl-row-gap-4{grid-row-gap:4px}.grid.xl-row-gap-5{grid-row-gap:5px}.grid.xl-row-gap-6{grid-row-gap:6px}.grid.xl-row-gap-7{grid-row-gap:7px}.grid.xl-row-gap-8{grid-row-gap:8px}.grid.xl-row-gap-9{grid-row-gap:9px}.grid.xl-row-gap-10{grid-row-gap:10px}.grid.xl-row-gap-15{grid-row-gap:15px}.grid.xl-row-gap-20{grid-row-gap:20px}.grid.xl-row-gap-30{grid-row-gap:30px}.grid.xl-row-gap-40{grid-row-gap:40px}.grid.xl-row-gap-50{grid-row-gap:50px}.grid.xl-row-gap-60{grid-row-gap:60px}.grid.xl-row-gap-70{grid-row-gap:70px}.grid.xl-row-gap-80{grid-row-gap:80px}.grid.xl-row-gap-90{grid-row-gap:90px}.grid.xl-row-gap-100{grid-row-gap:100px}.grid.xl-row-gap-125{grid-row-gap:125px}.grid.xl-row-gap-150{grid-row-gap:150px}.grid.xl-col-gap-1{grid-column-gap:1px}.grid.xl-col-gap-2{grid-column-gap:2px}.grid.xl-col-gap-3{grid-column-gap:3px}.grid.xl-col-gap-4{grid-column-gap:4px}.grid.xl-col-gap-5{grid-column-gap:5px}.grid.xl-col-gap-6{grid-column-gap:6px}.grid.xl-col-gap-7{grid-column-gap:7px}.grid.xl-col-gap-8{grid-column-gap:8px}.grid.xl-col-gap-9{grid-column-gap:9px}.grid.xl-col-gap-10{grid-column-gap:10px}.grid.xl-col-gap-15{grid-column-gap:15px}.grid.xl-col-gap-20{grid-column-gap:20px}.grid.xl-col-gap-30{grid-column-gap:30px}.grid.xl-col-gap-40{grid-column-gap:40px}.grid.xl-col-gap-50{grid-column-gap:50px}.grid.xl-col-gap-60{grid-column-gap:60px}.grid.xl-col-gap-70{grid-column-gap:70px}.grid.xl-col-gap-80{grid-column-gap:80px}.grid.xl-col-gap-90{grid-column-gap:90px}.grid.xl-col-gap-100{grid-column-gap:100px}.grid.xl-col-gap-125{grid-column-gap:125px}.grid.xl-col-gap-150{grid-column-gap:150px}.grid>.xl-order-12{order:12}.grid>.xl-order-11{order:11}.grid>.xl-order-10{order:10}.grid>.xl-order-9{order:9}.grid>.xl-order-8{order:8}.grid>.xl-order-7{order:7}.grid>.xl-order-6{order:6}.grid>.xl-order-5{order:5}.grid>.xl-order-4{order:4}.grid>.xl-order-3{order:3}.grid>.xl-order-2{order:2}.grid>.xl-order-1{order:1}.grid>.xl-span-12{grid-column-end:span 12}.grid>.xl-span-11{grid-column-end:span 11}.grid>.xl-span-10{grid-column-end:span 10}.grid>.xl-span-9{grid-column-end:span 9}.grid>.xl-span-8{grid-column-end:span 8}.grid>.xl-span-7{grid-column-end:span 7}.grid>.xl-span-6{grid-column-end:span 6}.grid>.xl-span-5{grid-column-end:span 5}.grid>.xl-span-4{grid-column-end:span 4}.grid>.xl-span-3{grid-column-end:span 3}.grid>.xl-span-2{grid-column-end:span 2}.grid>.xl-span-1{grid-column-end:span 1}.grid.xl-col-1{grid-template-columns:repeat(1,1fr)}.grid.xl-col-2{grid-template-columns:repeat(2,1fr)}.grid.xl-col-3{grid-template-columns:repeat(3,1fr)}.grid.xl-col-4{grid-template-columns:repeat(4,1fr)}.grid.xl-col-5{grid-template-columns:repeat(5,1fr)}.grid.xl-col-6{grid-template-columns:repeat(6,1fr)}.grid.xl-col-7{grid-template-columns:repeat(7,1fr)}.grid.xl-col-8{grid-template-columns:repeat(8,1fr)}.grid.xl-col-9{grid-template-columns:repeat(9,1fr)}.grid.xl-col-10{grid-template-columns:repeat(10,1fr)}.grid.xl-col-11{grid-template-columns:repeat(11,1fr)}.grid.xl-col-12{grid-template-columns:repeat(12,1fr)}.grid.xl-col-1.auto{grid-template-columns:repeat(1,auto)}.grid.xl-col-2.auto{grid-template-columns:repeat(2,auto)}.grid.xl-col-3.auto{grid-template-columns:repeat(3,auto)}.grid.xl-col-4.auto{grid-template-columns:repeat(4,auto)}.grid.xl-col-5.auto{grid-template-columns:repeat(5,auto)}.grid.xl-col-6.auto{grid-template-columns:repeat(6,auto)}.grid.xl-col-7.auto{grid-template-columns:repeat(7,auto)}.grid.xl-col-8.auto{grid-template-columns:repeat(8,auto)}.grid.xl-col-9.auto{grid-template-columns:repeat(9,auto)}.grid.xl-col-10.auto{grid-template-columns:repeat(10,auto)}.grid.xl-col-11.auto{grid-template-columns:repeat(11,auto)}.grid.xl-col-12.auto{grid-template-columns:repeat(12,auto)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("48e80a24", content, true)

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".p0{padding:0!important}.p2{padding:2px!important}.p3{padding:3px!important}.p5{padding:5px!important}.p7{padding:7px!important}.p8{padding:8px!important}.p10{padding:10px!important}.p15{padding:15px!important}.p20{padding:20px!important}.p25{padding:25px!important}.p30{padding:30px!important}.p40{padding:40px!important}.p45{padding:45px!important}.p50{padding:50px!important}.p60{padding:60px!important}.p70{padding:70px!important}.p80{padding:80px!important}.p100{padding:100px!important}.p120{padding:120px!important}.pb0{padding-bottom:0!important}.pb2{padding-bottom:2px!important}.pb5{padding-bottom:5px!important}.pb10{padding-bottom:10px!important}.pb15{padding-bottom:15px!important}.pb20{padding-bottom:20px!important}.pb25{padding-bottom:25px!important}.pb30{padding-bottom:30px!important}.pb40{padding-bottom:40px!important}.pb45{padding-bottom:45px!important}.pb50{padding-bottom:50px!important}.pb60{padding-bottom:60px!important}.pb70{padding-bottom:70px!important}.pb80{padding-bottom:80px!important}.pb100{padding-bottom:100px!important}.pb120{padding-bottom:120px!important}.pr0{padding-right:0!important}.pr2{padding-right:2px!important}.pr5{padding-right:5px!important}.pr10{padding-right:10px!important}.pr15{padding-right:15px!important}.pr20{padding-right:20px!important}.pr25{padding-right:25px!important}.pr30{padding-right:30px!important}.pr40{padding-right:40px!important}.pr45{padding-right:45px!important}.pr50{padding-right:50px!important}.pr60{padding-right:60px!important}.pr70{padding-right:70px!important}.pr80{padding-right:80px!important}.pr100{padding-right:100px!important}.pr120{padding-right:120px!important}.pl0{padding-left:0!important}.pl2{padding-left:2px!important}.pl5{padding-left:5px!important}.pl10{padding-left:10px!important}.pl15{padding-left:15px!important}.pl20{padding-left:20px!important}.pl25{padding-left:25px!important}.pl30{padding-left:30px!important}.pl40{padding-left:40px!important}.pl45{padding-left:45px!important}.pl50{padding-left:50px!important}.pl60{padding-left:60px!important}.pl70{padding-left:70px!important}.pl80{padding-left:80px!important}.pl100{padding-left:100px!important}.pl120{padding-left:120px!important}.pt0{padding-top:0!important}.pt2{padding-top:2px!important}.pt3{padding-top:3px!important}.pt5{padding-top:5px!important}.pt10{padding-top:10px!important}.pt15{padding-top:15px!important}.pt20{padding-top:20px!important}.pt25{padding-top:25px!important}.pt30{padding-top:30px!important}.pt40{padding-top:40px!important}.pt45{padding-top:45px!important}.pt50{padding-top:50px!important}.pt60{padding-top:60px!important}.pt70{padding-top:70px!important}.pt80{padding-top:80px!important}.pt90{padding-top:90px!important}.pt100{padding-top:100px!important}.pt120{padding-top:120px!important}.ptb5{padding-top:5px!important;padding-bottom:5px!important}.ptb10{padding-top:10px!important;padding-bottom:10px!important}.ptb15{padding-top:15px!important;padding-bottom:15px!important}.ptb20{padding-top:20px!important;padding-bottom:20px!important}.m0{margin:0!important}.m1{margin:1px!important}.m2{margin:2px!important}.m5{margin:5px!important}.m10{margin:10px!important}.m15{margin:15px!important}.m20{margin:20px!important}.m25{margin:25px!important}.m30{margin:30px!important}.m40{margin:40px!important}.m80{margin:80px!important}.m100{margin:100px!important}.mb0{margin-bottom:0!important}.mb1{margin-bottom:1px!important}.mb2{margin-bottom:2px!important}.mb5{margin-bottom:5px!important}.mb10{margin-bottom:10px!important}.mb15{margin-bottom:15px!important}.mb20{margin-bottom:20px!important}.mb25{margin-bottom:25px!important}.mb30{margin-bottom:30px!important}.mb40{margin-bottom:40px!important}.mb60{margin-bottom:60px!important}.mb70{margin-bottom:70px!important}.mb80{margin-bottom:80px!important}.mb100{margin-bottom:100px!important}.mt0{margin-top:0!important}.mt1{margin-top:1px!important}.mt2{margin-top:2px!important}.mt5{margin-top:5px!important}.mt10{margin-top:10px!important}.mt15{margin-top:15px!important}.mt20{margin-top:20px!important}.mt25{margin-top:25px!important}.mt30{margin-top:30px!important}.mt40{margin-top:40px!important}.mt60{margin-top:60px!important}.mt80{margin-top:80px!important}.mt100{margin-top:100px!important}.ml0{margin-left:0!important}.ml1{margin-left:1px!important}.ml2{margin-left:2px!important}.ml5{margin-left:5px!important}.ml10{margin-left:10px!important}.ml15{margin-left:15px!important}.ml20{margin-left:20px!important}.ml25{margin-left:25px!important}.ml30{margin-left:30px!important}.ml40{margin-left:40px!important}.ml80{margin-left:80px!important}.ml100{margin-left:100px!important}.mr0{margin-right:0!important}.mr1{margin-right:1px!important}.mr2{margin-right:2px!important}.mr5{margin-right:5px!important}.mr10{margin-right:10px!important}.mr15{margin-right:15px!important}.mr20{margin-right:20px!important}.mr25{margin-right:25px!important}.mr30{margin-right:30px!important}.mr40{margin-right:40px!important}.mr80{margin-right:80px!important}.mr100{margin-right:100px!important}.m-auto{margin:auto}.mlr-auto{margin:0 auto}.mtb-auto{margin:auto 0}.mmt20{margin-top:-20px}.mmt5{margin-top:-5px}.b0{border-width:0!important}.b1{border-width:1px!important}.b2{border-width:2px!important}.b5{border-width:5px!important}.b10{border-width:10px!important}.b15{border-width:15px!important}.b20{border-width:20px!important}.b25{border-width:25px!important}.b30{border-width:30px!important}.b40{border-width:40px!important}.bt0{border-top-width:0!important}.bt1{border-top-width:1px!important}.bt2{border-top-width:2px!important}.bt5{border-top-width:5px!important}.bt10{border-top-width:10px!important}.bt15{border-top-width:15px!important}.bt20{border-top-width:20px!important}.bt25{border-top-width:25px!important}.bt30{border-top-width:30px!important}.bt40{border-top-width:40px!important}.bb0{border-bottom-width:0!important}.bb1{border-bottom-width:1px!important}.bb2{border-bottom-width:2px!important}.bb5{border-bottom-width:5px!important}.bb10{border-bottom-width:10px!important}.bb15{border-bottom-width:15px!important}.bb20{border-bottom-width:20px!important}.bb25{border-bottom-width:25px!important}.bb30{border-bottom-width:30px!important}.bb40{border-bottom-width:40px!important}.br0{border-right-width:0!important}.br1{border-right-width:1px!important}.br2{border-right-width:2px!important}.br5{border-right-width:5px!important}.br10{border-right-width:10px!important}.br15{border-right-width:15px!important}.br20{border-right-width:20px!important}.br25{border-right-width:25px!important}.br30{border-right-width:30px!important}.br40{border-right-width:40px!important}.bl0{border-left-width:0!important}.bl1{border-left-width:1px!important}.bl2{border-left-width:2px!important}.bl5{border-left-width:5px!important}.bl10{border-left-width:10px!important}.bl15{border-left-width:15px!important}.bl20{border-left-width:20px!important}.bl25{border-left-width:25px!important}.bl30{border-left-width:30px!important}.bl40{border-left-width:40px!important}.text-justify{text-align:justify}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.left{float:left}.right{float:right}.clear,.clearfix:after{clear:both}.font8{font-size:8px!important}.font9{font-size:9px!important}.font10{font-size:10px!important}.font11{font-size:11px!important}.font12{font-size:12px!important}.font13{font-size:13px!important}.font14{font-size:14px!important}.font15{font-size:15px!important}.font16{font-size:16px!important}.font17{font-size:17px!important}.font18{font-size:18px!important}.font19{font-size:19px!important}.font20{font-size:20px!important}.font22{font-size:22px!important}.font24{font-size:24px!important}.font26{font-size:26px!important}.font28{font-size:28px!important}.font30{font-size:30px!important}.font32{font-size:32px!important}.bold{font-weight:700!important}.strong{font-weight:600!important}.semi{font-weight:500!important}.normal{font-weight:400!important}.thin{font-weight:300!important}.italic{font-style:italic}.underline{text-decoration:underline}.h30{height:30px}.h40{height:40px}.h45{height:45px}.h50{height:50px}.h60{height:60px}.h75{height:75px}.h100{height:100px}.h150{height:150px}.h200{height:200px}.h300{height:300px}.h400{height:400px}.h500{height:500px}.minh30{min-height:30px}.minh50{min-height:50px}.minh60{min-height:60px}.minh75{min-height:75px}.minh100{min-height:100px}.minh150{min-height:150px}.minh160{min-height:162px}.minh200{min-height:200px}.minh300{min-height:300px}.minh400{min-height:400px}.minh500{min-height:500px}.maxh30{max-height:30px}.maxh50{max-height:50px}.maxh60{max-height:60px}.maxh75{max-height:75px}.maxh100{max-height:100px}.maxh150{max-height:150px}.maxh160{max-height:162px}.maxh200{max-height:200px}.maxh300{max-height:300px}.maxh400{max-height:400px}.maxh450{max-height:450px}.maxh500{max-height:500px}.minw30{min-width:30px}.minw50{min-width:50px}.minw60{min-width:60px}.minw75{min-width:75px}.minw100{min-width:100px}.minw150{min-width:150px}.minw160{min-width:162px}.minw200{min-width:200px}.minw250{min-width:250px}.minw300{min-width:300px}.minw400{min-width:400px}.minw500{min-width:500px}.maxw30{max-width:30px}.maxw50{max-width:50px}.maxw60{max-width:60px}.maxw75{max-width:75px}.maxw100{max-width:100px}.maxw150{max-width:150px}.maxw160{max-width:162px}.maxw200{max-width:200px}.maxw250{max-width:250px}.maxw300{max-width:300px}.maxw350{max-width:350px}.maxw400{max-width:400px}.maxw450{max-width:450px}.maxw500{max-width:500px}.maxw550{max-width:550px}.maxw600{max-width:600px}.maxw650{max-width:650px}.line10{line-height:10px!important}.line11{line-height:11px!important}.line12{line-height:12px!important}.line13{line-height:13px!important}.line14{line-height:14px!important}.line15{line-height:15px!important}.line16{line-height:16px!important}.line17{line-height:17px!important}.line18{line-height:18px!important}.line19{line-height:19px!important}.line20{line-height:20px!important}.line21{line-height:21px!important}.line24{line-height:24px!important}.line25{line-height:25px!important}.line30{line-height:30px!important}.line35{line-height:35px!important}.line40{line-height:40px!important}.line60{line-height:60px!important}.line75{line-height:75px!important}.action,.action-toggle,.modal,.pointer{cursor:pointer}.mover{cursor:move}.cursor-stop{cursor:not-allowed}.cursor-alias{cursor:alias}.block{display:block}.inline{display:inline}.inline-block{display:inline-block}.show{display:inline-block!important}.hidden{display:none!important}.hidden-hover{display:none}.hidden-hover:hover{display:inline;display:initial}.overflow{overflow:hidden}.relative{position:relative}.absolute{position:absolute}.absolute-bot{bottom:0}.absolute-bot,.absolute-top{position:absolute!important;z-index:1}.absolute-top{top:0}.absolute-right{position:absolute!important;right:0;z-index:1}.absolute-left,.absolute-top-left{position:absolute!important;left:0;z-index:1}.absolute-top-left{top:0}.absolute-top-right{position:absolute!important;top:0;right:0;z-index:1}.absolute-bot-left{left:0}.absolute-bot-left,.absolute-bot-right{position:absolute!important;bottom:0;z-index:1}.absolute-bot-right{right:0}.uppercase{text-transform:uppercase}.noresize{resize:none}.hover:hover{background-color:#eee}hr{height:1px;background-color:#ddd;margin-top:10px}.rotate-45-right{transform:rotate(45deg)}.rotate-90-right{transform:rotate(90deg)}button,div,input{box-sizing:border-box}.w-auto{width:auto!important}.w100{width:100%}.w98{width:98%}.w95{width:95%}.w90{width:90%}.w85{width:85%}.w80{width:80%}.w75{width:75%}.w70{width:70%}.w66{width:66%}.w65{width:65%}.w60{width:60%}.w55{width:55%}.w50{width:50%}.w45{width:45%}.w40{width:40%}.w43{width:43%}.w35{width:35%}.w34{width:34%}.w33{width:33%}.w30{width:30%}.w25{width:25%}.w23{width:23%}.w20{width:20%}.w18{width:18%}.w16{width:16.666667%}.w15{width:15%}.w14{width:14.28571%}.w10{width:10%}.w8p3{width:8.33333%}.w8{width:8%}.w7{width:7.5%}.w5{width:5%}.w2{width:2%}.hidden-lg,.hidden-lx,.hidden-md,.hidden-sm{display:block}.table-list .hidden-lg,.table-list .hidden-lx,.table-list .hidden-md,.table-list .hidden-sm{display:table-cell}.show-ld,.show-lg,.show-md,.show-sm{display:none}@media only screen and (max-width:576px){.hidden-xs{display:none}.show-xs{display:inline!important;display:initial!important}.flex.show-xs{display:flex!important}}@media only screen and (min-width:576px){.wsm100{width:100%}.wsm98{width:98%}.wsm95{width:95%}.wsm90{width:90%}.wsm85{width:85%}.wsm80{width:80%}.wsm75{width:75%}.wsm70{width:70%}.wsm66{width:66%}.wsm65{width:65%}.wsm60{width:60%}.wsm55{width:55%}.wsm50{width:50%}.wsm45{width:45%}.wsm40{width:40%}.wsm43{width:43%}.wsm35{width:35%}.wsm34{width:34%}.wsm33{width:33%}.wsm30{width:30%}.wsm25{width:25%}.wsm23{width:23%}.wsm20{width:20%}.wsm15{width:15%}.wsm10{width:10%}.wsm5{width:5%}.wsm2{width:2%}.wsm-auto{width:auto}.hidden-sm{display:none!important}.show-sm{display:inline!important;display:initial!important}.flex.show-sm{display:flex!important}.table-list .hidden-sm{display:none}.table-list .show-sm{display:table-cell}.sm-h-auto{height:auto!important;min-height:auto!important}.sm-h100{min-height:100vh!important}}@media only screen and (min-width:768px){.wmd100{width:100%}.wmd98{width:98%}.wmd95{width:95%}.wmd90{width:90%}.wmd85{width:85%}.wmd80{width:80%}.wmd75{width:75%}.wmd70{width:70%}.wmd66{width:66%}.wmd65{width:65%}.wmd60{width:60%}.wmd55{width:55%}.wmd50{width:50%}.wmd45{width:45%}.wmd40{width:40%}.wmd43{width:43%}.wmd35{width:35%}.wmd34{width:34%}.wmd33{width:33%}.wmd30{width:30%}.wmd25{width:25%}.wmd23{width:23%}.wmd20{width:20%}.wmd15{width:15%}.wmd10{width:10%}.wmd5{width:5%}.wmd2{width:2%}.wmd-auto{width:auto}.hidden-md{display:none!important}.show-md{display:inline!important;display:initial!important}.flex.show-md{display:flex!important}.table-list .hidden-md{display:none}.table-list .show-md{display:table-cell}.md-h-auto{height:auto!important;min-height:auto!important}.md-h100{min-height:100vh!important}}@media only screen and (min-width:992px){.wlg100{width:100%}.wlg98{width:98%}.wlg95{width:95%}.wlg90{width:90%}.wlg85{width:85%}.wlg80{width:80%}.wlg75{width:75%}.wlg70{width:70%}.wlg66{width:66%}.wlg65{width:65%}.wlg60{width:60%}.wlg55{width:55%}.wlg50{width:50%}.wlg45{width:45%}.wlg40{width:40%}.wlg43{width:43%}.wlg35{width:35%}.wlg34{width:34%}.wlg33{width:33%}.wlg30{width:30%}.wlg25{width:25%}.wlg23{width:23%}.wlg20{width:20%}.wlg15{width:15%}.wlg10{width:10%}.wlg5{width:5%}.wlg2{width:2%}.wlg-auto{width:auto}.hidden-lg{display:none!important}.show-lg{display:inline!important;display:initial!important}.flex.show-lg{display:flex!important}.table-list .hidden-lg{display:none}.table-list .show-lg{display:table-cell}.lg-h-auto{height:auto!important;min-height:auto!important}.lg-h100{min-height:100vh!important}}@media only screen and (min-width:1200px){.wxl100{width:100%}.wxl98{width:98%}.wxl95{width:95%}.wxl90{width:90%}.wxl85{width:85%}.wxl80{width:80%}.wxl75{width:75%}.wxl70{width:70%}.wxl66{width:66%}.wxl65{width:65%}.wxl60{width:60%}.wxl55{width:55%}.wxl50{width:50%}.wxl45{width:45%}.wxl40{width:40%}.wxl43{width:43%}.wxl35{width:35%}.wxl34{width:34%}.wxl33{width:33%}.wxl30{width:30%}.wxl25{width:25%}.wxl23{width:23%}.wxl20{width:20%}.wxl15{width:15%}.wxl10{width:10%}.wxl5{width:5%}.wxl2{width:2%}.wxl-auto{width:auto}.hidden-xl{display:none!important}.show-xl{display:inline!important;display:initial!important}.flex.show-xl{display:flex!important}.table-list .hidden-xl{display:none}.table-list .show-xl{display:table-cell}.xl-h-auto{height:auto!important;min-height:auto!important}.xl-h100{min-height:100vh!important}}#cookie_bar{position:fixed;top:0;width:100%;background-color:hsla(0,0%,100%,.96078);border-bottom:1px solid hsla(0,0%,66.7%,.21961);z-index:100}#cookie_bar .ok-button{min-width:140px}#cookie_bar button{padding:12px 20px;background-color:#ffeb00;border:1px solid #ede8e8;color:#5a5a5a;border-radius:4px}#cookie_bar a{padding:0 4px;color:#5a5a5a;text-decoration:underline}#cookie_bar a:hover{color:#aaa;text-decoration:none}.c-container{display:block;position:relative;cursor:pointer;line-height:25px;font-size:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:25px;outline:none;padding-left:35px}.c-container input{position:absolute;opacity:0;cursor:pointer}.c-container .checkmark{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee}.c-container:hover input~.checkmark{background-color:#ccc}.c-container input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.c-container input:checked~.checkmark:after{display:block}.c-container .checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("60e7e48c", content, true)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".layout-enter-active,.layout-leave-active{transition:opacity .5s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .5s}.fade-enter,.page-enter,.page-leave-to{opacity:0}.fade-enter-active{transition:opacity 1s}.fade-leave{opacity:1}.fade-leave-active{transition:opacity 1s;opacity:0}.tab-enter{opacity:0;transform:translateY(150px)}.tab-enter-active{transition:all .4s ease-out}.tab-enter-to{opacity:1;transform:translateY(0)}.tab-leave{opacity:1}.tab-leave-active{transition:all .6s ease-in}.tab-leave-to{opacity:0}.tab-img-enter{opacity:0;transform:translateX(-150px)}.tab-img-enter-active{transition:all .4s ease-out}.tab-img-enter-to{opacity:1;transform:translateX(0)}.tab-img-leave{opacity:1}.tab-img-leave-active{transition:all .4s ease-in}.tab-img-leave-to{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_c998662e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_c998662e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_c998662e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_c998662e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_c998662e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-c998662e]{text-align:center;font-size:30px;font-weight:400}div.grid[data-v-c998662e]{height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_3303f4c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_3303f4c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_3303f4c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_3303f4c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_3303f4c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#topbar[data-v-3303f4c7]{position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:100;padding-top:12px;padding-bottom:12px}#topbar>.container-standard[data-v-3303f4c7]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.logo-text[data-v-3303f4c7]{max-height:45px}.logo-icon[data-v-3303f4c7],.logo-text[data-v-3303f4c7]{border:0;border-radius:0}.logo-icon[data-v-3303f4c7]{max-height:35px}.logo a[data-v-3303f4c7]{text-decoration:none}.nav>ul[data-v-3303f4c7]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-3303f4c7]{padding:16px 22px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block}.nav>ul>li>a[data-v-3303f4c7]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-3303f4c7]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li.sidenavtoggle[data-v-3303f4c7]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-3303f4c7]{width:30px;height:3px;background-color:#000;margin:5px 0;border-radius:4px}.nav>ul>li>a[data-v-3303f4c7]{color:rgba(0,0,0,.72157);line-height:24px;font-weight:500;text-decoration:none}.icon-basket[data-v-3303f4c7],.icon-coin[data-v-3303f4c7]{height:1em;border-radius:0}.basket[data-v-3303f4c7],.credit[data-v-3303f4c7]{padding:3px 10px;border-radius:40px;border:2px solid #ffd401;background-color:#fbf7ed;height:33px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-arrow-left.8e55a1e.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-arrow-right.06b4143.svg";

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_d88d17be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_d88d17be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_d88d17be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_d88d17be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_d88d17be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidenav-backdrop[data-v-d88d17be],.sidenav-container[data-v-d88d17be]{height:100%;width:100%}.sidenav-backdrop[data-v-d88d17be]{background-color:hsla(0,0%,90.6%,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav>ul[data-v-d88d17be]{list-style:none;margin:0;padding:0}.sidenav>ul>li>a[data-v-d88d17be]{color:#000;font-size:16px;line-height:23px;font-weight:500;text-decoration:none;transition:.3s}.sidenav[data-v-d88d17be]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;right:0;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-d88d17be],.slide-side-leave-active[data-v-d88d17be]{transition:all .3s ease-out}.slide-side-enter[data-v-d88d17be],.slide-side-leave-to[data-v-d88d17be]{transform:translateX(100%)}.logo-text[data-v-d88d17be]{max-height:45px}.logo-icon[data-v-d88d17be],.logo-text[data-v-d88d17be]{border:0;border-radius:0}.logo-icon[data-v-d88d17be]{max-height:35px}.logo a[data-v-d88d17be]{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0bcab297_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0bcab297_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0bcab297_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0bcab297_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0bcab297_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-0bcab297]{padding-bottom:0;background-color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-white.6d4000b.svg";

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2b2e03dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2b2e03dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2b2e03dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2b2e03dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2b2e03dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo a[data-v-2b2e03dc]{text-decoration:none}.logo img[data-v-2b2e03dc]{max-height:60px}#footer[data-v-2b2e03dc]{background-color:#000;padding-bottom:40px}#footer[data-v-2b2e03dc],#footer p[data-v-2b2e03dc]{color:hsla(0,0%,100%,.72157)}h4[data-v-2b2e03dc]{color:#fff}#footer>.container-narrow[data-v-2b2e03dc]{margin-bottom:0}ul[data-v-2b2e03dc]{list-style-type:none}li[data-v-2b2e03dc]{margin-bottom:5px}li>a[data-v-2b2e03dc]{color:inherit;text-decoration:none;display:block;padding:5px;transition:.3s;left:0;color:hsla(0,0%,100%,.72157)}li>a[data-v-2b2e03dc],li>a[data-v-2b2e03dc]:hover{position:relative}li>a[data-v-2b2e03dc]:hover{left:5px;color:#fff}p.contact[data-v-2b2e03dc]{color:hsla(0,0%,100%,.72157)}p.contact a[data-v-2b2e03dc]{color:#ffd401}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultAdmin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultAdmin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultAdmin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultAdmin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultAdmin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterClean_vue_vue_type_style_index_0_id_9addb124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterClean_vue_vue_type_style_index_0_id_9addb124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterClean_vue_vue_type_style_index_0_id_9addb124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterClean_vue_vue_type_style_index_0_id_9addb124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterClean_vue_vue_type_style_index_0_id_9addb124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#footer_clean[data-v-9addb124]{position:fixed;bottom:0;left:0;height:50px;background-color:hsla(0,0%,100%,.7);width:100%}.container[data-v-9addb124]{max-width:976px;margin:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultClean_vue_vue_type_style_index_0_id_fc67ec2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultClean_vue_vue_type_style_index_0_id_fc67ec2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultClean_vue_vue_type_style_index_0_id_fc67ec2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultClean_vue_vue_type_style_index_0_id_fc67ec2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultClean_vue_vue_type_style_index_0_id_fc67ec2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#layout_default_clean[data-v-fc67ec2c]{height:100vh;background-color:#f7f7f7}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_defaultUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
// import Vuex from "vuex";
// import Cookie from "js-cookie";
// const createStore = () => {
//   	return new Vuex.Store({
// 	state: {
// 		token: null,
// 		userData: null
// 	},
const actions = {
  nuxtServerInit({
    dispatch
  }, {
    context,
    req
  }) {
    // context.app.$axios.setHeader('AUTHTOKEN', auth_token)
    let auth_token;

    if (!req) {
      return;
    }

    if (!req.headers.cookie) {
      return;
    }

    const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));

    if (!tokenFromCookie) {
      return;
    }

    auth_token = tokenFromCookie.split("=")[1]; // console.log(auth_token);

    this.$axios.setHeader('AUTHTOKEN', auth_token);
    return dispatch("auth/setUser", {
      endpoint: '/user'
    });
  }

}; //     mutations: {
// 		setToken(state, token) {
// 			state.token = token;
// 		},
// 		setUserData(state, data) {
// 			state.userData = data;
// 		},
// 		clearToken(state) {
// 			state.token = null;
// 		},
// 		clearUserData(state) {
// 			state.userData = null;
// 		}
//     },
//     getters: {
// 		isUserLoggedIn(state) {
// 			return state.token != null;
// 		},
// 		getToken(state) {
// 			return state.token;
// 		},
// 		getUserData(state) {
// 			return state.userData;
// 		}
// 	},
//     actions: {
// 		async nuxtServerInit({ dispatch }, {context, req}) {
// 			// context.app.$axios.setHeader('AUTHTOKEN', auth_token)
// 			let auth_token
// 			if (!req) { return; }
// 			if (!req.headers.cookie) { return; }
// 			const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("manyletter.auth_token="))
// 			if (!tokenFromCookie) {
// 				return;
// 			  }
// 			  auth_token = tokenFromCookie.split("=")[1];
// 			// console.log(tokenFromCookie);
// 			this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			await dispatch("setUser")
// 		},
// 		// DONE
// 		async loginUser(vuexContext, authData) {
// 			return await this.$axios.$post('/api/maylday/auth/login', {
// 				email: authData.email,
// 				password: authData.password,
// 			})
// 			.then((response) => {
// 				// console.log(response);
// 				vuexContext.commit('setToken', response.auth_token)
// 				vuexContext.commit('setUserData', response.data)
// 				// localStorage.setItem('auth_token', response.auth_token)
// 				Cookie.set('manyletter.auth_token', response.auth_token)
// 				// vuexContext.dispatch("updateUser");
// 			}, (error) => {
// 				console.log(error);
// 				//this.res = error.response.data.message
// 			});
// 		},
// 		async setUser(vuexContext) {
// 			// if(auth_token) {
// 			// 	this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			// } else {
// 			// 	this.$axios.setHeader('AUTHTOKEN', vuexContext.state.token)
// 			// }
// 			return await this.$axios.$get('/api/maylday/user')
// 			.then((response) => {
// 				// console.log(response.data);
// 				vuexContext.commit('setUserData', response.data)
// 			}, (error) => {
// 				console.log(error);
// 				//this.res = error.response.data.message
// 			});
// 		},
// 		// DONE
// 		initAuth(vuexContext, req) {
// 			let auth_token;
// 			if (req) {
// 				if (!req.headers.cookie) { return; }
// 				const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("manyletter.auth_token="));
// 				if (!tokenFromCookie) { return; }
// 					auth_token = tokenFromCookie.split("=")[1];
// 			} else if(process.client) {
// 				// auth_token = localStorage.getItem("auth_token");
// 				auth_token = Cookie.get('manyletter.auth_token')
// 			}
// 			if (!auth_token) {
// 				console.log("No token");
// 				vuexContext.dispatch("logout");
// 				return;
// 			}
// 			vuexContext.commit("setToken", auth_token);
// 			this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			// Cookie.set('manyletter.auth_token', auth_token)
// 			// vuexContext.dispatch("setUser", auth_token);
// 		},
// 		logout(vuexContext) {
// 			vuexContext.commit("clearToken");
// 			vuexContext.commit("clearUserData");
// 			Cookie.remove("manyletter.auth_token");
// 			if (process.client) {
// 				// localStorage.removeItem("auth_token");
// 				// this.$router.push('/log-out')
// 			}
// 		}
//     },
//   });
// };
// export default createStore;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  token: null,
  userData: null
});
const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  setUserData(state, data) {
    state.userData = data;
  },

  clearToken(state) {
    state.token = null;
  },

  clearUserData(state) {
    state.userData = null;
  }

};
const getters = {
  isUserLoggedIn(state) {
    return state.token != null;
  },

  getToken(state) {
    return state.token;
  },

  getUserData(state) {
    return state.userData;
  }

};
const actions = {
  // DONE
  async loginUser(vuexContext, authData) {
    return await this.$axios.$post(authData.endpoint, {
      email: authData.email,
      password: authData.password
    }).then(response => {
      console.log(response);
      vuexContext.commit('setToken', response.auth_token);
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      localStorage.setItem("auth_token", JSON.stringify(response.auth_token)); // console.log('JANO')
      // console.log(response.data)

      vuexContext.commit('setUserData', response.data);
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('app.auth_token', response.auth_token);
      this.$axios.setHeader('AUTHTOKEN', response.auth_token); // vuexContext.dispatch("updateUser");
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  setUser(vuexContext, authData) {
    // if(auth_token) {
    // 	this.$axios.setHeader('AUTHTOKEN', auth_token)
    // } else {
    // 	this.$axios.setHeader('AUTHTOKEN', vuexContext.state.token)
    // }
    // return Promise.resolve(this.$axios.$get(authData.endpoint))
    return this.$axios.$get(authData.endpoint).then(response => {
      // console.log(response.data);
      vuexContext.commit('setUserData', response.data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  // Inicializacia autentifikacie - pouziva sa v check-auth middleware
  // Spusta sa na servery - z hlavicky requestu (req) je mozne dostat cookies a tie by mali obsahovat app.auth_token
  initAuth(vuexContext, req) {
    let auth_token;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }

      const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));

      if (!tokenFromCookie) {
        return;
      }

      auth_token = tokenFromCookie.split("=")[1];
      vuexContext.commit("setToken", auth_token);
      this.$axios.setHeader('AUTHTOKEN', auth_token); // return vuexContext.dispatch("setUser", {
      //     endpoint: '/user'
      // });
    } else if (false) {}

    if (!auth_token) {
      console.log("No token");
      vuexContext.dispatch("logout");
      return;
    }

    vuexContext.commit("setToken", auth_token);
    this.$axios.setHeader('AUTHTOKEN', auth_token); // Cookie.set('app.auth_token', auth_token)
    // vuexContext.dispatch("setUser", auth_token);
  },

  initUserData(vuexContext, req) {
    let auth_token;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }

      const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));

      if (!tokenFromCookie) {
        return;
      }

      auth_token = tokenFromCookie.split("=")[1];
      vuexContext.commit("setToken", auth_token);
      this.$axios.setHeader('AUTHTOKEN', auth_token); // return vuexContext.dispatch("setUser", {
      //     endpoint: '/user'
      // });
    } else if (false) {}

    vuexContext.commit("setToken", auth_token);
    this.$axios.setHeader('AUTHTOKEN', auth_token); // Cookie.set('app.auth_token', auth_token)
    // vuexContext.dispatch("setUser", auth_token);
  },

  logout(vuexContext) {
    if (false) {}

    vuexContext.commit("clearToken");
    vuexContext.commit("clearUserData");
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("app.auth_token");
  }

};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/book/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  // async getTagList({ commit }) {
  //     const [tagList] = await Promise.all ([
  //         this.$axios.$get('/tag/all'),
  //     ])
  //     commit('setTagList', tagList)
  // },
  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/book/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/book/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/category/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // const [dataList] = await Promise.all ([
    //     this.$axios.$get('/category/all'),
    // ])
    // if(Object.keys(state.dataListFiltered).length === 0) {
    //     commit('setDataList', dataList)
    //     commit('setDataListFiltered', null)
    // } else {
    //     dispatch('getDataListFiltered')
    // }

  },

  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/category/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error);
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/category/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error);
    });
  }

};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc",
    limit: 25
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/openbook/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  // async getTagList({ commit }) {
  //     const [tagList] = await Promise.all ([
  //         this.$axios.$get('/tag/all'),
  //     ])
  //     commit('setTagList', tagList)
  // },
  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/openbook/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/openbook/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataBasket: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  },

  getDataBasket(state) {
    return state.dataBasket;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataBasket(state, response) {
    state.dataBasket = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  },

  deleteItemBasket(state, data_items) {
    // state.dataList.data.splice(data.index, 1)
    state.dataBasket.data_items.splice(data_items.index, 1);
    state.dataBasket.count_items--;
    state.dataBasket.sum_price = state.dataBasket.sum_price - data_items.price + ".00";
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/order/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  async getDataBasket({
    commit,
    state,
    dispatch
  }) {
    const [dataBasket] = await Promise.all([this.$axios.$get('/order/basket')]);
    commit('setDataBasket', dataBasket);
  },

  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/order/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async deleteItemBasket(vuexContext, data) {
    return await this.$axios.$delete('/order/removeitem/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItemBasket', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/order/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/stock/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  // async getTagList({ commit }) {
  //     const [tagList] = await Promise.all ([
  //         this.$axios.$get('/tag/all'),
  //     ])
  //     commit('setTagList', tagList)
  // },
  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/stock/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/stock/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/stockstatus/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  // async getTagList({ commit }) {
  //     const [tagList] = await Promise.all ([
  //         this.$axios.$get('/tag/all'),
  //     ])
  //     commit('setTagList', tagList)
  // },
  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/stockstatus/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/stockstatus/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/tag/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // const [dataList] = await Promise.all ([
    //     this.$axios.$get('/tag/all'),
    // ])
    // if(Object.keys(state.dataListFiltered).length === 0) {
    //     commit('setDataList', dataList)
    //     commit('setDataListFiltered', null)
    // } else {
    //     dispatch('getDataListFiltered')
    // }

  },

  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/tag/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error);
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/tag/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error);
    });
  }

};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  dataList: {},
  dataListFiltered: {},
  filters: {
    search: "",
    name: "",
    sort: "id_asc"
  }
});
const getters = {
  getDataList(state) {
    return state.dataList;
  }

};
const mutations = {
  setDataList(state, response) {
    state.dataList = response;
  },

  setDataListFiltered(state, response) {
    state.dataListFiltered = response === null ? state.dataList : response;
  },

  setFilters(state, filters) {
    state.filters.search = filters.search, state.filters.name = filters.name, state.filters.author = filters.author, state.filters.price = filters.price, state.filters.sort = filters.sort;
  },

  deleteItem(state, data) {
    // state.dataList.data.splice(data.index, 1)
    state.dataListFiltered.data.splice(data.index, 1);
  }

};
const actions = {
  async getDataList({
    commit,
    state,
    dispatch
  }) {
    if (Object.keys(state.dataListFiltered).length == 0) {
      const [dataList] = await Promise.all([this.$axios.$get('/user/all')]);
      commit('setDataList', dataList);
      commit('setDataListFiltered', null);
    } else {
      dispatch('getDataListFiltered');
    } // console.log("Su dataListFilterd?")
    // console.log(Object.keys(state.dataListFiltered).length)
    // if(Object.keys(state.dataListFiltered).length == 0) {
    // console.log("NIE dataListFilterd?")
    // commit('setDataList', dataList)
    // commit('setDataListFiltered', null)
    // } else {
    // console.log("ANO dataListFilterd?")
    // dispatch('getDataListFiltered')
    // commit('setFilteredDealsList', state.filteredList)
    // }

  },

  // async getTagList({ commit }) {
  //     const [tagList] = await Promise.all ([
  //         this.$axios.$get('/tag/all'),
  //     ])
  //     commit('setTagList', tagList)
  // },
  async deleteItem(vuexContext, data) {
    return await this.$axios.$delete('/user/' + data.id).then(response => {
      console.log(response);
      vuexContext.commit('deleteItem', data);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  },

  async getDataListFiltered(vuexContext, state) {
    return await this.$axios.$post('/user/all', {
      "filters": vuexContext.state.filters
    }).then(response => {
      console.log(response);
      vuexContext.commit('setDataListFiltered', response);
    }, error => {
      console.log(error); //this.res = error.response.data.message
    });
  }

};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(28);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/middleware.js
const middleware = {};
middleware['auth'] = __webpack_require__(33);
middleware['auth'] = middleware['auth'].default || middleware['auth'];
middleware['check-auth'] = __webpack_require__(34);
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth'];
middleware['check-userdata'] = __webpack_require__(35);
middleware['check-userdata'] = middleware['check-userdata'].default || middleware['check-userdata'];
middleware['log'] = __webpack_require__(36);
middleware['log'] = middleware['log'].default || middleware['log'];
/* harmony default export */ var tulaveknizky_sk_middleware = (middleware);
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(29);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/router.js






const _ee460050 = () => interopDefault(__webpack_require__.e(/* import() | pages/200 */ 1).then(__webpack_require__.bind(null, 291)));

const _1a588646 = () => interopDefault(__webpack_require__.e(/* import() | pages/403 */ 2).then(__webpack_require__.bind(null, 292)));

const _1a3c5744 = () => interopDefault(__webpack_require__.e(/* import() | pages/404 */ 3).then(__webpack_require__.bind(null, 293)));

const _278fb19b = () => interopDefault(__webpack_require__.e(/* import() | pages/500 */ 4).then(__webpack_require__.bind(null, 294)));

const _4bf89126 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/index */ 8).then(__webpack_require__.bind(null, 277)));

const _811b96cc = () => interopDefault(__webpack_require__.e(/* import() | pages/ako-to-funguje/index */ 25).then(__webpack_require__.bind(null, 243)));

const _8d0336d4 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 26).then(__webpack_require__.bind(null, 278)));

const _0e98a5aa = () => interopDefault(__webpack_require__.e(/* import() | pages/kniznica/index */ 29).then(__webpack_require__.bind(null, 279)));

const _25a609b7 = () => interopDefault(__webpack_require__.e(/* import() | pages/najcastejsie-otazky/index */ 30).then(__webpack_require__.bind(null, 280)));

const _3c907c4d = () => interopDefault(__webpack_require__.e(/* import() | pages/nas-pribeh/index */ 31).then(__webpack_require__.bind(null, 281)));

const _258ba89f = () => interopDefault(__webpack_require__.e(/* import() | pages/newsletter/index */ 32).then(__webpack_require__.bind(null, 282)));

const _f99f9130 = () => interopDefault(__webpack_require__.e(/* import() | pages/odhlasenie/index */ 33).then(__webpack_require__.bind(null, 245)));

const _d179b20c = () => interopDefault(__webpack_require__.e(/* import() | pages/prihlasenie/index */ 35).then(__webpack_require__.bind(null, 246)));

const _3f3bbc66 = () => interopDefault(__webpack_require__.e(/* import() | pages/registracia/index */ 37).then(__webpack_require__.bind(null, 247)));

const _6ee93fd1 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/categories/index */ 7).then(__webpack_require__.bind(null, 248)));

const _6ff934e8 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/orders/index */ 12).then(__webpack_require__.bind(null, 249)));

const _0193909e = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/stock/index */ 15).then(__webpack_require__.bind(null, 250)));

const _7d41fff4 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tags/index */ 18).then(__webpack_require__.bind(null, 251)));

const _796cde1c = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/titles/index */ 21).then(__webpack_require__.bind(null, 252)));

const _65e19502 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/users/index */ 24).then(__webpack_require__.bind(null, 253)));

const _5abc6916 = () => interopDefault(__webpack_require__.e(/* import() | pages/prihlasenie/code */ 34).then(__webpack_require__.bind(null, 254)));

const _606a4eee = () => interopDefault(__webpack_require__.e(/* import() | pages/registracia/code */ 36).then(__webpack_require__.bind(null, 255)));

const _e7ce68cc = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/index */ 41).then(__webpack_require__.bind(null, 283)));

const _f6b1e386 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/index */ 50).then(__webpack_require__.bind(null, 284)));

const _7cafbaa2 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/categories/add/index */ 5).then(__webpack_require__.bind(null, 256)));

const _07905beb = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/orders/add/index */ 9).then(__webpack_require__.bind(null, 257)));

const _3722aec2 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/stock/add/index */ 13).then(__webpack_require__.bind(null, 258)));

const _f8eecf42 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tags/add/index */ 16).then(__webpack_require__.bind(null, 259)));

const _5529f621 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/titles/add/index */ 19).then(__webpack_require__.bind(null, 260)));

const _69e621b4 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/users/add/index */ 22).then(__webpack_require__.bind(null, 261)));

const _fb420a40 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/credits/index */ 39).then(__webpack_require__.bind(null, 262)));

const _23c95417 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/settings/index */ 42).then(__webpack_require__.bind(null, 285)));

const _473d9edd = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/subscription/index */ 43).then(__webpack_require__.bind(null, 263)));

const _b96e0392 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/basket/index */ 47).then(__webpack_require__.bind(null, 286)));

const _62f79d29 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/borrowed/index */ 49).then(__webpack_require__.bind(null, 287)));

const _36df4db3 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/rated/index */ 51).then(__webpack_require__.bind(null, 288)));

const _d03e1a56 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/reserved/index */ 52).then(__webpack_require__.bind(null, 289)));

const _460ef418 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/wishlist/index */ 53).then(__webpack_require__.bind(null, 290)));

const _7e2f90f3 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/credits/add/index */ 38).then(__webpack_require__.bind(null, 264)));

const _09d3cc11 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/credits/success */ 40).then(__webpack_require__.bind(null, 265)));

const _119964ce = () => interopDefault(__webpack_require__.e(/* import() | pages/user/account/subscription/success */ 44).then(__webpack_require__.bind(null, 266)));

const _0f2b5436 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/basket/confirm */ 45).then(__webpack_require__.bind(null, 267)));

const _79b7acc2 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/basket/delivery */ 46).then(__webpack_require__.bind(null, 268)));

const _cf6b54b0 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/books/basket/success */ 48).then(__webpack_require__.bind(null, 269)));

const _08eefe8c = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/categories/detail/_id/index */ 6).then(__webpack_require__.bind(null, 270)));

const _10886dfa = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/orders/detail/_id/index */ 11).then(__webpack_require__.bind(null, 271)));

const _3355564c = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/stock/detail/_id/index */ 14).then(__webpack_require__.bind(null, 272)));

const _34ba5177 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tags/detail/_id/index */ 17).then(__webpack_require__.bind(null, 273)));

const _0d8acd39 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/titles/detail/_id/index */ 20).then(__webpack_require__.bind(null, 276)));

const _4837b5cc = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/users/detail/_id/index */ 23).then(__webpack_require__.bind(null, 274)));

const _5031ade9 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/orders/detail/_id/edit */ 10).then(__webpack_require__.bind(null, 275)));

const _9be1bd8a = () => interopDefault(__webpack_require__.e(/* import() | pages/kniznica/_id/_name/index */ 28).then(__webpack_require__.bind(null, 242)));

const _35182910 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 27).then(__webpack_require__.bind(null, 244)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/200",
    component: _ee460050,
    name: "200"
  }, {
    path: "/403",
    component: _1a588646,
    name: "403"
  }, {
    path: "/404",
    component: _1a3c5744,
    name: "404"
  }, {
    path: "/500",
    component: _278fb19b,
    name: "500"
  }, {
    path: "/admin",
    component: _4bf89126,
    name: "admin"
  }, {
    path: "/ako-to-funguje",
    component: _811b96cc,
    name: "ako-to-funguje"
  }, {
    path: "/blog",
    component: _8d0336d4,
    name: "blog"
  }, {
    path: "/kniznica",
    component: _0e98a5aa,
    name: "kniznica"
  }, {
    path: "/najcastejsie-otazky",
    component: _25a609b7,
    name: "najcastejsie-otazky"
  }, {
    path: "/nas-pribeh",
    component: _3c907c4d,
    name: "nas-pribeh"
  }, {
    path: "/newsletter",
    component: _258ba89f,
    name: "newsletter"
  }, {
    path: "/odhlasenie",
    component: _f99f9130,
    name: "odhlasenie"
  }, {
    path: "/prihlasenie",
    component: _d179b20c,
    name: "prihlasenie"
  }, {
    path: "/registracia",
    component: _3f3bbc66,
    name: "registracia"
  }, {
    path: "/admin/categories",
    component: _6ee93fd1,
    name: "admin-categories"
  }, {
    path: "/admin/orders",
    component: _6ff934e8,
    name: "admin-orders"
  }, {
    path: "/admin/stock",
    component: _0193909e,
    name: "admin-stock"
  }, {
    path: "/admin/tags",
    component: _7d41fff4,
    name: "admin-tags"
  }, {
    path: "/admin/titles",
    component: _796cde1c,
    name: "admin-titles"
  }, {
    path: "/admin/users",
    component: _65e19502,
    name: "admin-users"
  }, {
    path: "/prihlasenie/code",
    component: _5abc6916,
    name: "prihlasenie-code"
  }, {
    path: "/registracia/code",
    component: _606a4eee,
    name: "registracia-code"
  }, {
    path: "/user/account",
    component: _e7ce68cc,
    name: "user-account"
  }, {
    path: "/user/books",
    component: _f6b1e386,
    name: "user-books"
  }, {
    path: "/admin/categories/add",
    component: _7cafbaa2,
    name: "admin-categories-add"
  }, {
    path: "/admin/orders/add",
    component: _07905beb,
    name: "admin-orders-add"
  }, {
    path: "/admin/stock/add",
    component: _3722aec2,
    name: "admin-stock-add"
  }, {
    path: "/admin/tags/add",
    component: _f8eecf42,
    name: "admin-tags-add"
  }, {
    path: "/admin/titles/add",
    component: _5529f621,
    name: "admin-titles-add"
  }, {
    path: "/admin/users/add",
    component: _69e621b4,
    name: "admin-users-add"
  }, {
    path: "/user/account/credits",
    component: _fb420a40,
    name: "user-account-credits"
  }, {
    path: "/user/account/settings",
    component: _23c95417,
    name: "user-account-settings"
  }, {
    path: "/user/account/subscription",
    component: _473d9edd,
    name: "user-account-subscription"
  }, {
    path: "/user/books/basket",
    component: _b96e0392,
    name: "user-books-basket"
  }, {
    path: "/user/books/borrowed",
    component: _62f79d29,
    name: "user-books-borrowed"
  }, {
    path: "/user/books/rated",
    component: _36df4db3,
    name: "user-books-rated"
  }, {
    path: "/user/books/reserved",
    component: _d03e1a56,
    name: "user-books-reserved"
  }, {
    path: "/user/books/wishlist",
    component: _460ef418,
    name: "user-books-wishlist"
  }, {
    path: "/user/account/credits/add",
    component: _7e2f90f3,
    name: "user-account-credits-add"
  }, {
    path: "/user/account/credits/success",
    component: _09d3cc11,
    name: "user-account-credits-success"
  }, {
    path: "/user/account/subscription/success",
    component: _119964ce,
    name: "user-account-subscription-success"
  }, {
    path: "/user/books/basket/confirm",
    component: _0f2b5436,
    name: "user-books-basket-confirm"
  }, {
    path: "/user/books/basket/delivery",
    component: _79b7acc2,
    name: "user-books-basket-delivery"
  }, {
    path: "/user/books/basket/success",
    component: _cf6b54b0,
    name: "user-books-basket-success"
  }, {
    path: "/admin/categories/detail/:id",
    component: _08eefe8c,
    name: "admin-categories-detail-id"
  }, {
    path: "/admin/orders/detail/:id",
    component: _10886dfa,
    name: "admin-orders-detail-id"
  }, {
    path: "/admin/stock/detail/:id",
    component: _3355564c,
    name: "admin-stock-detail-id"
  }, {
    path: "/admin/tags/detail/:id",
    component: _34ba5177,
    name: "admin-tags-detail-id"
  }, {
    path: "/admin/titles/detail/:id",
    component: _0d8acd39,
    name: "admin-titles-detail-id"
  }, {
    path: "/admin/users/detail/:id",
    component: _4837b5cc,
    name: "admin-users-detail-id"
  }, {
    path: "/admin/orders/detail/:id?/edit",
    component: _5031ade9,
    name: "admin-orders-detail-id-edit"
  }, {
    path: "/kniznica/:id/:name",
    component: _9be1bd8a,
    name: "kniznica-id-name"
  }, {
    path: "/",
    component: _35182910,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/error.vue?vue&type=template&id=63cc7910&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"layout_error"}},[_vm._ssrNode("<div id=\"used-layout\" data-v-63cc7910> Layout - error </div> <div class=\"grid col-1 auto align-items-center\" data-v-63cc7910>"+((_vm.error.statusCode === 404)?("<div data-v-63cc7910><h1 data-v-63cc7910>404 - Page not found</h1> <p data-v-63cc7910>"+_vm._ssrEscape(_vm._s(_vm.error.message))+"</p></div>"):("<h1 data-v-63cc7910>An error occurred</h1>"))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/error.vue?vue&type=template&id=63cc7910&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error'],
  layout: 'error-default' // you can set a custom layout for the error page

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "63cc7910",
  "489f8788"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "264c217a"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./apps/tulaveknizky.sk/assets/css/global.css
var css_global = __webpack_require__(41);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/assets/css/_system/flex.css
var flex = __webpack_require__(43);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/assets/css/_system/grid.css
var grid = __webpack_require__(45);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/assets/css/_system/webbase.css
var webbase = __webpack_require__(47);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/assets/css/_system/animations.css
var animations = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/default.vue?vue&type=template&id=c998662e&scoped=true&
var defaultvue_type_template_id_c998662e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"layout_default"}},[_vm._ssrNode("<div id=\"used-layout\" data-v-c998662e> Layout - default </div> <div class=\"grid col-1 auto\" data-v-c998662e><h1 class=\"col-1 align-self-center\" data-v-c998662e>Please define what layout to use with this view.</h1></div>")])}
var defaultvue_type_template_id_c998662e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/default.vue?vue&type=template&id=c998662e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_c998662e_scoped_true_render,
  defaultvue_type_template_id_c998662e_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "c998662e",
  "08f9ad41"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultAdmin.vue?vue&type=template&id=7424b935&
var defaultAdminvue_type_template_id_7424b935_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin-layout",attrs:{"id":"layout_default_admin"}},[_vm._ssrNode("<div id=\"used-layout\"> Layout - default_admin </div> "),_c('Header'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultAdminvue_type_template_id_7424b935_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultAdmin.vue?vue&type=template&id=7424b935&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Header.vue?vue&type=template&id=0bcab297&scoped=true&
var Headervue_type_template_id_0bcab297_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-0bcab297>","</div>",[_c('Topbar',{on:{"sidenavtoggle":function($event){_vm.displaySidebar = !_vm.displaySidebar}}}),_vm._ssrNode(" "),_c('Sidebar',{attrs:{"show":_vm.displaySidebar},on:{"close":function($event){_vm.displaySidebar = false}}})],2)])}
var Headervue_type_template_id_0bcab297_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Header.vue?vue&type=template&id=0bcab297&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Topbar.vue?vue&type=template&id=3303f4c7&scoped=true&
var Topbarvue_type_template_id_3303f4c7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"topbar\" data-v-3303f4c7>","</div>",[_vm._ssrNode("<div class=\"container-standard grid gap-20 align-items-center\" data-v-3303f4c7>","</div>",[_vm._ssrNode("<div class=\"grid auto col-2 md-col-1 lg-col-2 align-items-center gap-10\" data-v-3303f4c7>","</div>",[_vm._ssrNode("<div class=\"logo justify-self-start\" data-v-3303f4c7>","</div>",[_c('nuxt-link',{staticClass:"grid gap-10 col-2 auto align-items-center",attrs:{"to":"/"}},[_c('img',{staticClass:"logo-icon",attrs:{"src":__webpack_require__(11),"alt":""}}),_vm._v(" "),_c('img',{staticClass:"logo-text",attrs:{"src":__webpack_require__(15),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav justify-self-end\" data-v-3303f4c7>","</div>",[(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-3303f4c7>","</ul>",[_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/kniznica"}},[_vm._v("Knižnica")])],1),_vm._ssrNode(" <li data-v-3303f4c7>|</li> "),(_vm.$store.state.auth.userData.level == 104)?_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/orders"}},[_vm._v("Administrácia")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/user/books"}},[_vm._v("Moje knižky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/user/account"}},[_vm._v("Môj účet")])],1),_vm._ssrNode(" <li data-v-3303f4c7>|</li> "),_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_vm._ssrNode("<div class=\"grid col-2 auto gap-20 align-items-center ml20\" data-v-3303f4c7>","</div>",[_c('nuxt-link',{staticClass:"grid col-2 auto gap-10 align-items-center credit pointer",attrs:{"tag":"div","to":"/user/account/credits"}},[_c('p',{staticClass:"small"},[_vm._v("\n                                        "+_vm._s(_vm.$store.state.auth.userData.credit ? _vm.$store.state.auth.userData.credit-_vm.$store.state.auth.userData.credit_blocked + '.00' : "0.00")+"\n                                    ")]),_vm._v(" "),_c('img',{staticClass:"icon-coin",attrs:{"src":__webpack_require__(16),"alt":""}})]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"grid col-2 auto gap-10 align-items-center credit pointer",attrs:{"tag":"div","to":"/user/books/basket"}},[_c('p',{staticClass:"small"},[_vm._v("\n                                        "+_vm._s(_vm.$store.state.order.dataBasket.count_items ? _vm.$store.state.order.dataBasket.count_items : "0")+"\n                                    ")]),_vm._v(" "),_c('img',{staticClass:"icon-basket",attrs:{"src":__webpack_require__(17),"alt":""}})])],2)])],2):_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-3303f4c7>","</ul>",[_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/kniznica"}},[_vm._v("Knižnica")])],1),_vm._ssrNode(" <li data-v-3303f4c7>|</li> "),_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/prihlasenie"}},[_vm._v("Prihlásenie")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_c('nuxt-link',{attrs:{"to":"/registracia"}},[_vm._v("Registrácia")])],1)],2),_vm._ssrNode(" <ul data-v-3303f4c7><li class=\"sidenavtoggle hidden-md ml10\" data-v-3303f4c7><div data-v-3303f4c7></div> <div data-v-3303f4c7></div> <div data-v-3303f4c7></div></li></ul>")],2)],2),_vm._ssrNode(" "),(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<div class=\"nav justify-self-end hidden-md\" data-v-3303f4c7>","</div>",[_vm._ssrNode("<ul class=\"flex wrap align-items-center \" data-v-3303f4c7>","</ul>",[_vm._ssrNode("<li data-v-3303f4c7>","</li>",[_vm._ssrNode("<div class=\"grid col-2 auto gap-20 align-items-center ml20\" data-v-3303f4c7>","</div>",[_c('nuxt-link',{staticClass:"grid col-2 auto gap-10 align-items-center credit pointer",attrs:{"tag":"div","to":"/user/account/credits"}},[_c('p',{staticClass:"small"},[_vm._v("\n                                    "+_vm._s(_vm.$store.state.auth.userData.credit ? _vm.$store.state.auth.userData.credit-_vm.$store.state.auth.userData.credit_blocked + '.00' : "0.00")+"\n                                ")]),_vm._v(" "),_c('img',{staticClass:"icon-coin",attrs:{"src":__webpack_require__(16),"alt":""}})]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"grid col-2 auto gap-10 align-items-center credit pointer",attrs:{"tag":"div","to":"/user/books/basket"}},[_c('p',{staticClass:"small"},[_vm._v("\n                                    "+_vm._s(_vm.$store.state.order.dataBasket.count_items ? _vm.$store.state.order.dataBasket.count_items : "0")+"\n                                ")]),_vm._v(" "),_c('img',{staticClass:"icon-basket",attrs:{"src":__webpack_require__(17),"alt":""}})])],2)])])]):_vm._e()],2)])])}
var Topbarvue_type_template_id_3303f4c7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Topbar.vue?vue&type=template&id=3303f4c7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Topbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Topbarvue_type_script_lang_js_ = ({
  data() {
    return {// userName: this.$store.state.auth.userData.name,
    };
  },

  methods: {
    logout() {
      console.log('logout');
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/odhlasenie');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Topbar.vue



function Topbar_injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Topbar_component = Object(componentNormalizer["a" /* default */])(
  _common_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_3303f4c7_scoped_true_render,
  Topbarvue_type_template_id_3303f4c7_scoped_true_staticRenderFns,
  false,
  Topbar_injectStyles,
  "3303f4c7",
  "5b76caf4"
  
)

/* harmony default export */ var Topbar = (Topbar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Sidebar.vue?vue&type=template&id=d88d17be&scoped=true&
var Sidebarvue_type_template_id_d88d17be_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav-container"},[_vm._ssrNode("<div class=\"sidenav-backdrop\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-d88d17be></div> "),_c('transition',{attrs:{"name":"slide-side"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sidenav grid gap-20 align-content-start"},[_c('div',{staticClass:"logo justify-self-start"},[_c('nuxt-link',{staticClass:"grid gap-10 col-2 auto align-items-center",attrs:{"to":"/"}},[_c('img',{staticClass:"logo-icon",attrs:{"src":__webpack_require__(11),"alt":""}}),_vm._v(" "),_c('img',{staticClass:"logo-text",attrs:{"src":__webpack_require__(15),"alt":""}})])],1),_vm._v(" "),_c('div',{staticClass:"hr"}),_vm._v(" "),(_vm.$store.getters['auth/isUserLoggedIn'])?_c('ul',{staticClass:"grid col-1 gap-20"},[(_vm.showLevel)?_c('li',{staticClass:"pointer",on:{"click":function($event){return _vm.changeLinkLevel(null)}}},[_c('img',{staticClass:"icon icon-arrow-left",attrs:{"src":__webpack_require__(55),"alt":""}}),_vm._v(" späť")]):_vm._e(),_vm._v(" "),(_vm.showLevel)?_c('div',{staticClass:"hr"}):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('li',{on:{"click":function($event){return _vm.changeLinkLevel("knihy")}}},[_vm._v("Knižnica")]):_vm._e(),_vm._v(" "),(_vm.showLevel === 'knihy')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{attrs:{"to":"/kniznica"}},[_vm._v("Všetky knižky")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === null && _vm.$store.state.auth.userData.level == 104)?_c('li',{on:{"click":function($event){return _vm.changeLinkLevel("admin")}}},[_vm._v("Administrácia")]):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/orders"}},[_vm._v("Objednávky")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/categories"}},[_vm._v("Kategórie")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/tags"}},[_vm._v("Značky")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/titles"}},[_vm._v("Knižné tituly")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/stock"}},[_vm._v("Sklad")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'admin')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/users"}},[_vm._v("Používatelia")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('li',{on:{"click":function($event){return _vm.changeLinkLevel("mojeknizky")}}},[_vm._v("Moje knižky")]):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojeknizky')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/basket"}},[_vm._v("Batôžtek (košík)")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojeknizky')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/borrowed"}},[_vm._v("Požičané knižky")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojeknizky')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/wishlist"}},[_vm._v("Wishlist")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('li',{on:{"click":function($event){return _vm.changeLinkLevel("mojucet")}}},[_vm._v("Môj účet")]):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojucet')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/account/settings"}},[_vm._v("Nastavenia")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojucet')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/account/subscription"}},[_vm._v("Predplatné")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'mojucet')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/account/credits"}},[_vm._v("Kredity")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('li',{staticClass:"pointer",on:{"click":function($event){return _vm.changeLinkLevel("viac")}}},[_vm._v("viac "),_c('img',{staticClass:"icon icon-arrow-left",attrs:{"src":__webpack_require__(56),"alt":""}})]):_vm._e(),_vm._v(" "),(_vm.showLevel === 'viac')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/ako-to-funguje"}},[_vm._v("Ako to funguje?")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'viac')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/nas-pribeh"}},[_vm._v("Náš príbeh")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'viac')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/blog"}},[_vm._v("Náš blog")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === 'viac')?_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/newsletter"}},[_vm._v("Novinky emailom")])],1):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('div',{staticClass:"hr"}):_vm._e(),_vm._v(" "),(_vm.showLevel === null)?_c('li',[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.logout()}}},[_vm._v("Odhlásiť sa")])]):_vm._e()]):_c('ul',{staticClass:"grid col-1 gap-20"},[_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{attrs:{"to":"/kniznica"}},[_vm._v("Knižnica")])],1),_vm._v(" "),_c('div',{staticClass:"hr"}),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/ako-to-funguje"}},[_vm._v("Ako to funguje?")])],1),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/nas-pribeh"}},[_vm._v("Náš príbeh")])],1),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/blog"}},[_vm._v("Náš blog")])],1),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.$emit('close')}}},[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/newsletter"}},[_vm._v("Novinky emailom")])],1),_vm._v(" "),_c('div',{staticClass:"hr"}),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/prihlasenie"}},[_vm._v("Prihlásenie")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/registracia"}},[_vm._v("Registrácia")])],1)]),_vm._v(" "),_c('div',{staticClass:"hr"}),_vm._v(" "),_c('p',{staticClass:"small"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" tulaveknizky.sk")])])])],2)}
var Sidebarvue_type_template_id_d88d17be_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Sidebar.vue?vue&type=template&id=d88d17be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showLevel: null
    };
  },

  methods: {
    changeLinkLevel(level) {
      this.showLevel = level;
    },

    logout() {
      console.log('logout');
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/odhlasenie');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  _common_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_d88d17be_scoped_true_render,
  Sidebarvue_type_template_id_d88d17be_scoped_true_staticRenderFns,
  false,
  Sidebar_injectStyles,
  "d88d17be",
  "24b4eef6"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Topbar: Topbar,
    Sidebar: Sidebar
  },

  data() {
    return {
      displaySidebar: false
    };
  }

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  _common_Headervue_type_script_lang_js_,
  Headervue_type_template_id_0bcab297_scoped_true_render,
  Headervue_type_template_id_0bcab297_scoped_true_staticRenderFns,
  false,
  Header_injectStyles,
  "0bcab297",
  "77c75f63"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Footer.vue?vue&type=template&id=2b2e03dc&scoped=true&
var Footervue_type_template_id_2b2e03dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bt1",attrs:{"id":"footer"}},[_vm._ssrNode("<div class=\"container-standard mb40 mt40 pt40\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<div class=\"grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<div class=\"grid gap-10 xs-order-5 xs-span-2\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-2b2e03dc>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(61),"alt":""}})])],1),_vm._ssrNode(" <p class=\"small maxw200\" data-v-2b2e03dc>\n                    “Kto sa chce stať vzdelaným, musí nad zlato vážiť si knihy.”<br data-v-2b2e03dc>― Jan Amos Komenský\n                </p> <p class=\"small mt40\" data-v-2b2e03dc>"+_vm._ssrEscape("© "+_vm._s(new Date().getFullYear())+" tulaveknizky.sk")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid gap-10 xs-order-1\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<h4 data-v-2b2e03dc>Odkazy</h4> "),_vm._ssrNode("<ul data-v-2b2e03dc>","</ul>",[_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/kniznica"}},[_vm._v("Knižnica")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/ako-to-funguje"}},[_vm._v("Ako to funguje?")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog"}},[_vm._v("Náš blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/nas-pribeh"}},[_vm._v("Náš príbeh")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/newsletter"}},[_vm._v("Novinky emailom")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid gap-10 xs-order-2\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<h4 data-v-2b2e03dc>Služba</h4> "),_vm._ssrNode("<ul data-v-2b2e03dc>","</ul>",[(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/user/account"}},[_vm._v("Môj účet")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/user/books"}},[_vm._v("Moje knižky")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.$store.getters['auth/isUserLoggedIn'] && _vm.$store.state.auth.userData.level == 104)?_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/admin"}},[_vm._v("Administrácia")])],1):_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/prihlasenie"}},[_vm._v("Prihlásenie")])],1),_vm._ssrNode(" "),(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_vm._ssrNode("<a data-v-2b2e03dc>Odhlásiť sa</a>")],2):_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/registracia"}},[_vm._v("Registrácia")])],1)],2)],2),_vm._ssrNode(" <div class=\"grid gap-10 xs-order-3\" data-v-2b2e03dc><h4 data-v-2b2e03dc>Socialne siete</h4> <ul data-v-2b2e03dc><li data-v-2b2e03dc><a href=\"https://www.facebook.com/manylettercom\" target=\"_blank\" data-v-2b2e03dc>Facebook</a></li> <li data-v-2b2e03dc><a href=\"https://twitter.com/manyletterHQ\" target=\"_blank\" data-v-2b2e03dc>Instagram</a></li> <li data-v-2b2e03dc><a href=\"https://twitter.com/manyletterHQ\" target=\"_blank\" data-v-2b2e03dc>Twitter</a></li></ul></div> "),_vm._ssrNode("<div class=\"grid gap-10 xs-order-4\" data-v-2b2e03dc>","</div>",[_vm._ssrNode("<h4 data-v-2b2e03dc>Pomoc a kontakt</h4> "),_vm._ssrNode("<ul data-v-2b2e03dc>","</ul>",[_vm._ssrNode("<li data-v-2b2e03dc>","</li>",[_c('nuxt-link',{attrs:{"to":"/najcastejsie-otazky"}},[_vm._v("Najčastejsie otázky")])],1)]),_vm._ssrNode(" <p class=\"contact small\" data-v-2b2e03dc>Nebola tvoja otázka zodpovedaná? <br data-v-2b2e03dc>Napíš nám na <a href=\"mailto:ahoj@tulaveknizky.sk\" data-v-2b2e03dc>ahoj@tulaveknizky.sk</a>.</p>")],2)],2)])])}
var Footervue_type_template_id_2b2e03dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Footer.vue?vue&type=template&id=2b2e03dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {
    logout() {
      console.log('logout');
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/odhlasenie');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  _common_Footervue_type_script_lang_js_,
  Footervue_type_template_id_2b2e03dc_scoped_true_render,
  Footervue_type_template_id_2b2e03dc_scoped_true_staticRenderFns,
  false,
  Footer_injectStyles,
  "2b2e03dc",
  "5694fb71"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultAdmin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var defaultAdminvue_type_script_lang_js_ = ({
  middleware: ['log', 'check-auth', 'auth', 'check-userdata'],
  components: {
    Header: Header,
    Footer: Footer
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultAdmin.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultAdminvue_type_script_lang_js_ = (defaultAdminvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultAdmin.vue



function defaultAdmin_injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var defaultAdmin_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultAdminvue_type_script_lang_js_,
  defaultAdminvue_type_template_id_7424b935_render,
  defaultAdminvue_type_template_id_7424b935_staticRenderFns,
  false,
  defaultAdmin_injectStyles,
  null,
  "68fadd3e"
  
)

/* harmony default export */ var defaultAdmin = (defaultAdmin_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultClean.vue?vue&type=template&id=fc67ec2c&scoped=true&
var defaultCleanvue_type_template_id_fc67ec2c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"layout_default_clean"}},[_vm._ssrNode("<div id=\"used-layout\" data-v-fc67ec2c> Layout - default_page_clean </div> "),_c('nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultCleanvue_type_template_id_fc67ec2c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultClean.vue?vue&type=template&id=fc67ec2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/FooterClean.vue?vue&type=template&id=9addb124&scoped=true&
var FooterCleanvue_type_template_id_9addb124_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid align-items-center",attrs:{"id":"footer_clean"}},[_vm._ssrNode("<div class=\"container grid col-2 auto justify-items-center\" data-v-9addb124>","</div>",[_vm._ssrNode("<p class=\"small\" data-v-9addb124>","</p>",[_vm._ssrNode(_vm._ssrEscape("© "+_vm._s(new Date().getFullYear())+" ")),_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("tulaveknizky.sk")])],2)])])}
var FooterCleanvue_type_template_id_9addb124_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/FooterClean.vue?vue&type=template&id=9addb124&scoped=true&

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/FooterClean.vue

var script = {}
function FooterClean_injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FooterClean_component = Object(componentNormalizer["a" /* default */])(
  script,
  FooterCleanvue_type_template_id_9addb124_scoped_true_render,
  FooterCleanvue_type_template_id_9addb124_scoped_true_staticRenderFns,
  false,
  FooterClean_injectStyles,
  "9addb124",
  "fa3ad9f0"
  
)

/* harmony default export */ var FooterClean = (FooterClean_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultClean.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultCleanvue_type_script_lang_js_ = ({
  components: {
    Footer: FooterClean
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultClean.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultCleanvue_type_script_lang_js_ = (defaultCleanvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultClean.vue



function defaultClean_injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var defaultClean_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultCleanvue_type_script_lang_js_,
  defaultCleanvue_type_template_id_fc67ec2c_scoped_true_render,
  defaultCleanvue_type_template_id_fc67ec2c_scoped_true_staticRenderFns,
  false,
  defaultClean_injectStyles,
  "fc67ec2c",
  "1bb48338"
  
)

/* harmony default export */ var defaultClean = (defaultClean_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultPage.vue?vue&type=template&id=0cde39f6&
var defaultPagevue_type_template_id_0cde39f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-layout",attrs:{"id":"layout_default_page"}},[_vm._ssrNode("<div id=\"used-layout\"> Layout - default_page_home </div> "),_c('Header'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultPagevue_type_template_id_0cde39f6_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultPage.vue?vue&type=template&id=0cde39f6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var defaultPagevue_type_script_lang_js_ = ({
  middleware: ['log', 'check-userdata'],
  components: {
    Header: Header,
    Footer: Footer
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultPagevue_type_script_lang_js_ = (defaultPagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultPage.vue



function defaultPage_injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var defaultPage_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultPagevue_type_script_lang_js_,
  defaultPagevue_type_template_id_0cde39f6_render,
  defaultPagevue_type_template_id_0cde39f6_staticRenderFns,
  false,
  defaultPage_injectStyles,
  null,
  "69b1d020"
  
)

/* harmony default export */ var defaultPage = (defaultPage_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultUser.vue?vue&type=template&id=5ff0369a&
var defaultUservue_type_template_id_5ff0369a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-layout",attrs:{"id":"layout_default_user"}},[_vm._ssrNode("<div id=\"used-layout\"> Layout - default_user </div> "),_c('Header'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultUservue_type_template_id_5ff0369a_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultUser.vue?vue&type=template&id=5ff0369a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/defaultUser.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var defaultUservue_type_script_lang_js_ = ({
  middleware: ['log', 'check-auth', 'auth', 'check-userdata'],
  components: {
    Header: Header,
    Footer: Footer
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultUser.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultUservue_type_script_lang_js_ = (defaultUservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/defaultUser.vue



function defaultUser_injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var defaultUser_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultUservue_type_script_lang_js_,
  defaultUservue_type_template_id_5ff0369a_render,
  defaultUservue_type_template_id_5ff0369a_staticRenderFns,
  false,
  defaultUser_injectStyles,
  null,
  "efeab9a8"
  
)

/* harmony default export */ var defaultUser = (defaultUser_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/layouts/error-default.vue?vue&type=template&id=07305f54&
var error_defaultvue_type_template_id_07305f54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"layout_error_default"}},[_vm._ssrNode("<div id=\"used-layout\"> Layout - error_default </div> "),_c('nuxt')],2)}
var error_defaultvue_type_template_id_07305f54_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/error-default.vue?vue&type=template&id=07305f54&

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/layouts/error-default.vue

var error_default_script = {}


/* normalize component */

var error_default_component = Object(componentNormalizer["a" /* default */])(
  error_default_script,
  error_defaultvue_type_template_id_07305f54_render,
  error_defaultvue_type_template_id_07305f54_staticRenderFns,
  false,
  null,
  null,
  "2cba76fc"
  
)

/* harmony default export */ var error_default = (error_default_component.exports);
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/App.js
















const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_defaultAdmin": sanitizeComponent(defaultAdmin),
  "_defaultClean": sanitizeComponent(defaultClean),
  "_defaultPage": sanitizeComponent(defaultPage),
  "_defaultUser": sanitizeComponent(defaultUser),
  "_error-default": sanitizeComponent(error_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(74), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(75), 'auth.js');
  resolveStoreModules(__webpack_require__(76), 'book.js');
  resolveStoreModules(__webpack_require__(77), 'category.js');
  resolveStoreModules(__webpack_require__(78), 'openbook.js');
  resolveStoreModules(__webpack_require__(79), 'order.js');
  resolveStoreModules(__webpack_require__(80), 'stock.js');
  resolveStoreModules(__webpack_require__(81), 'stockStatus.js');
  resolveStoreModules(__webpack_require__(82), 'tag.js');
  resolveStoreModules(__webpack_require__(83), 'user.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/empty.js
var tulaveknizky_sk_empty = __webpack_require__(27);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(30);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(31);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var tulaveknizky_sk_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/plugins/axios.js
// import Cookie from "js-cookie";
/* harmony default export */ var plugins_axios = (function ({
  $axios,
  store,
  req,
  redirect
}) {
  // $axios.setToken(false)
  $axios.setBaseURL('https://secure.tulaveknizky.sk/api/tulaveknizky');
  $axios.setHeader('APITOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg'); // $axios.setHeader('AUTHTOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
  // if (!req.headers.cookie) { console.log("neni cookie"); return; }
  // const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
  // if (!tokenFromCookie) { return; }
  // const auth_token = tokenFromCookie.split("=")[1];
  // let auth_token;
  // if (req) {
  // if (!req.headers.cookie) { return; }
  // const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
  // if (!tokenFromCookie) { return; }
  // auth_token = tokenFromCookie.split("=")[1];
  // vuexContext.commit("setToken", auth_token);
  // $axios.setHeader('AUTHTOKEN', auth_token)
  // return vuexContext.dispatch("setUser", {
  //     endpoint: '/user'
  // });
  // } else if(process.client) {
  // auth_token = localStorage.getItem("auth_token");
  // auth_token = Cookie.get('app.auth_token')
  // if(vuexContext.state.userData === null) {
  // const userDataFromStorage = JSON.parse(localStorage.getItem("userData"))
  // console.log(JSON.parse(localStorage.getItem("userData")))
  // vuexContext.commit("setUserData", userDataFromStorage);
  // }
  // }
  // console.log(auth_token);
  // $axios.setHeader('AUTHTOKEN', auth_token)

  console.log(store.state);
  $axios.setHeader('AUTHTOKEN', store.state.auth.token); // $axios.setHeader('AUTHTOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJjcmVhdGVkX2F0IjoxNTkwNTAzNDkwLCJpcCI6IjE4OC4xNjcuMjMwLjIzMCIsImRvbWFpbiI6Ind3dy5tYW55bGV0dGVyLmNvbSJ9.ST5bErYNNDLHui6Nbn1O4DbhdTF0YhwjMMpqLYDx1GU')
  // $axios.setBaseURL('https://www.ymello.com/api/maylday')
  // $axios.setHeader('Referer', 'https://manyletter.com/')
  // $axios.setHeader('Accept', 'application/json')
  // $axios.setHeader('Access-Control-Allow-Origin', '*')
  // $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  // $axios.setHeader('Content-Type', 'application/json')

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 400) {
      // redirect('/400')
      console.log(error.response.data);
    }
  });
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/index.js












/* Plugins */

 // Source: .\\vue-scrollto.js (mode: 'client')

 // Source: .\\cookie-universal-nuxt.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\..\\plugins\\axios.js (mode: 'all')

 // Source: ..\\..\\plugins\\gtag.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "layout",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Túlavé knižky | Online požičovňa kníh.",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, {
        "hid": "title",
        "name": "title",
        "content": "Túlavé knižky | Online požičovňa kníh."
      }, {
        "hid": "description",
        "name": "description",
        "content": "Požičaj si najnovšie knižné tituly, bez navštevy knižnice."
      }, {
        "hid": "og-type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og-url",
        "property": "og:url",
        "content": "https:\u002F\u002Ftulaveknizky.sk\u002F"
      }, {
        "hid": "og-title",
        "property": "og:title",
        "content": "Túlavé knižky | Online požičovňa kníh."
      }, {
        "hid": "og-description",
        "property": "og:description",
        "content": "Požičaj si najnovšie knižné tituly, bez navštevy knižnice."
      }, {
        "hid": "og-image",
        "property": "og:image",
        "content": "https:\u002F\u002Ftulaveknizky.sk\u002F_static\u002Ftulaveknizky\u002Fcover-twitter.png"
      }, {
        "hid": "og-image:type",
        "property": "og:image:type",
        "content": "image\u002Fpng"
      }, {
        "hid": "og-image:width",
        "property": "og:image:width",
        "content": "1200"
      }, {
        "hid": "og-image:height",
        "property": "og:image:height",
        "content": "628"
      }, {
        "hid": "twitter-card",
        "property": "twitter:card",
        "content": "summary_large_image"
      }, {
        "hid": "twitter-url",
        "property": "twitter:url",
        "content": "https:\u002F\u002Ftulaveknizky.sk\u002F"
      }, {
        "hid": "twitter-title",
        "property": "twitter:title",
        "content": "Túlavé knižky | Online požičovňa kníh."
      }, {
        "hid": "twitter-description",
        "property": "twitter:description",
        "content": "Požičaj si najnovšie knižné tituly, bez navštevy knižnice."
      }, {
        "hid": "twitter-image",
        "property": "twitter:image",
        "content": "https:\u002F\u002Ftulaveknizky.sk\u002F_static\u002Ftulaveknizky\u002Fcover-twitter.png"
      }, {
        "hid": "apple-mobile-web-app-title",
        "name": "apple-mobile-web-app-title",
        "content": "Túlavé knižky | Online požičovňa kníh."
      }, {
        "hid": "application-name",
        "name": "application-name",
        "content": "Túlavé knižky | Online požičovňa kníh."
      }, {
        "hid": "msapplication-TileColor",
        "name": "msapplication-TileColor",
        "content": "#ffffff"
      }, {
        "hid": "msapplication-TileImage",
        "name": "msapplication-TileImage",
        "content": "\u002F_static\u002Ftulaveknizky\u002Fms-icon-144x144.png"
      }, {
        "hid": "theme-color",
        "name": "theme-color",
        "content": "#ffffff"
      }],
      "link": [{
        "hid": "apple-touch-icon-57x57",
        "rel": "apple-touch-icon",
        "sizes": "57x57",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-57x57.png"
      }, {
        "hid": "apple-touch-icon-60x60",
        "rel": "apple-touch-icon",
        "sizes": "60x60",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-60x60.png"
      }, {
        "hid": "apple-touch-icon-72x72",
        "rel": "apple-touch-icon",
        "sizes": "72x72",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-72x72.png"
      }, {
        "hid": "apple-touch-icon-76x76",
        "rel": "apple-touch-icon",
        "sizes": "76x76",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-76x76.png"
      }, {
        "hid": "apple-touch-icon-114x114",
        "rel": "apple-touch-icon",
        "sizes": "114x114",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-114x114.png"
      }, {
        "hid": "apple-touch-icon-120x120",
        "rel": "apple-touch-icon",
        "sizes": "120x120",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-120x120.png"
      }, {
        "hid": "apple-touch-icon-144x144",
        "rel": "apple-touch-icon",
        "sizes": "144x144",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-144x144.png"
      }, {
        "hid": "apple-touch-icon-152x152",
        "rel": "apple-touch-icon",
        "sizes": "152x152",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-152x152.png"
      }, {
        "hid": "apple-touch-icon-180x180",
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fapple-icon-180x180.png"
      }, {
        "hid": "icon-192x192",
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "192x192",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fandroid-icon-192x192.png"
      }, {
        "hid": "icon-32x32",
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "32x32",
        "href": "\u002F_static\u002Ftulaveknizky\u002Ffavicon-32x32.png"
      }, {
        "hid": "icon-96x96",
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "96x96",
        "href": "\u002F_static\u002Ftulaveknizky\u002Ffavicon-96x96.png"
      }, {
        "hid": "icon-16x16",
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "16x16",
        "href": "\u002F_static\u002Ftulaveknizky\u002Ffavicon-16x16.png"
      }, {
        "hid": "manifest",
        "rel": "manifest",
        "href": "\u002F_static\u002Ftulaveknizky\u002Fmanifest.json"
      }],
      "script": [{
        "src": "https:\u002F\u002Fjs.stripe.com\u002Fv3\u002F"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof tulaveknizky_sk_axios === 'function') {
    await tulaveknizky_sk_axios(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof tulaveknizky_sk_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return tulaveknizky_sk_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof tulaveknizky_sk_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return tulaveknizky_sk_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map