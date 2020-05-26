module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1Yx3":
/***/ (function(module, exports) {

module.exports = require("disqus-react");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7yNw");


/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "7yNw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gqKn");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bgFo");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// eslint-disable-line

// eslint-disable-line


const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.article.withConfig({
  displayName: "articles__Container",
  componentId: "wb6eo6-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;max-width:700px;width:100%;margin:35px auto;.more{display:flex;justify-content:center;align-items:center;margin:15px 0px;}@media (max-width:700px){padding:0px 10px;}"]);

const ArticlesComponent = props => {
  const {
    error,
    errorMessage,
    total
  } = props;
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.posts);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getMorePosts() {
    try {
      if (posts.length >= total) {
        return;
      }

      setLoading(true);
      const skip = posts.length;
      const response = await _services_contentful__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getEntries({
        content_type: 'article',
        limit: 5,
        skip
      });
      setPosts([...posts, ...response.items]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  if (error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Head */ "e"], null, __jsx("title", {
      key: "title"
    }, "404 | RDN Blog")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Header */ "f"], {
      title: "Share your knowledge"
    }), __jsx(Container, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Error */ "c"], {
      message: errorMessage
    })));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Head */ "e"], null, __jsx("title", {
    key: "title"
  }, "Artigos | RDN Blog")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Header */ "f"], {
    title: "Share your knowledge"
  }), __jsx(Container, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* SearchArticle */ "h"], {
    updatePosts: setPosts
  }), __jsx("h2", null, "\xDAltimas postagens"), posts.map(post => __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Article */ "a"], {
    data: post,
    key: post.fields.alias
  })), __jsx("div", {
    className: "more"
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "b"], {
    disabled: loading,
    hoverColor: "#c3b5d3",
    onClick: getMorePosts
  }, total <= posts.length ? 'Não há mais artigos' : loading ? 'Carregando' : 'Mostrar mais'))), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[/* Footer */ "d"], null));
};

ArticlesComponent.getInitialProps = async () => {
  let error = false;
  let errorMessage = '';
  let posts = null;
  let total = 0;

  try {
    const response = await _services_contentful__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getEntries({
      content_type: 'article',
      limit: 5
    });

    if (!response.items.length) {
      error = true;
      errorMessage = 'Nenhuma postagem encontrada';
      return {
        posts,
        errorMessage,
        error,
        total
      };
    }

    return {
      errorMessage,
      error,
      posts: response.items,
      total: response.total
    };
  } catch (err) {
    errorMessage = 'Houve um erro ao mostrar a postagem';
    error = true;
    return {
      posts,
      errorMessage,
      error,
      total
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ArticlesComponent);

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bgFo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ components_Header; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Head; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Article; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_Footer; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ components_PostContent; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ components_Error; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ SearchArticle; });

// UNUSED EXPORTS: DisqusComments

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Header/styles.ts

const Container = external_styled_components_default.a.header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-4fuzfv-0"
})(["height:100%;background-image:url(", ");background-position:center center;background-attachment:fixed;background-size:cover;.opacity{height:100%;width:100%;background-color:rgba(0,0,0,0.7);}.header{height:70px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;padding:0px 25px;background:linear-gradient( to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0) );}.title h1{font-family:Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:500;color:#fff;letter-spacing:4.5px;font-size:20px;cursor:pointer;}.navbar ul{display:flex;justify-content:center;align-items:center;}.navbar ul li{padding:0px 5px;}.navbar ul li a{font-family:Jost,Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:500;font-size:18px;text-transform:uppercase;text-decoration:none;}.social-media a{padding:0px 5px;}.mobile{display:none;}.phrase-container{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}.phrase-container h3{font-family:Balsamiq Sans,Roboto,Arial,Helvetica,sans-serif;font-weight:400;font-size:40px;text-align:center;z-index:10 !important;color:#fff;opacity:1;max-width:800px;width:100%;}.phrase-container .date{text-align:center;color:#ccc;font-family:Roboto,Jost,Arial,Helvetica,sans-serif;font-weight:400;}@media (max-width:700px){.header{padding:0px 15px;}.navbar{display:none;}.mobile{display:initial;}.mobile ul{display:flex;justify-content:center;align-items:center;}.mobile li{padding:0px 5px;}.mobile a{font-family:Jost,Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:500;font-size:18px;text-transform:uppercase;text-decoration:none;}.phrase-container h3{font-size:1.8rem;padding:0px 5px;}}"], props => props.image);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// CONCATENATED MODULE: ./components/Header/index.tsx
var __jsx = external_react_default.a.createElement;





const Header = ({
  backgroundImage,
  title,
  date
}) => {
  const image = wallpapers[Math.floor(Math.random() * wallpapers.length)];

  function formatDay(dateReceived) {
    return new Date(dateReceived).getDate();
  }

  function formatMonth(dateReceived) {
    const month = new Date(dateReceived).getMonth() + 1;

    switch (month) {
      case 1:
        return 'JAN';

      case 2:
        return 'FEV';

      case 3:
        return 'MAR';

      case 4:
        return 'ABR';

      case 5:
        return 'MAI';

      case 6:
        return 'JUN';

      case 7:
        return 'JUL';

      case 8:
        return 'AGO';

      case 9:
        return 'SET';

      case 10:
        return 'OUT';

      case 11:
        return 'NOV';

      case 12:
        return 'DEZ';

      default:
        return String(month);
    }
  }

  function formatYear(dateReceived) {
    return new Date(dateReceived).getFullYear();
  }

  const dateFormated = `${formatMonth(date)} ${formatDay(date)}, ${formatYear(date)}`;
  return __jsx(Container, {
    image: backgroundImage || image
  }, __jsx("div", {
    className: "opacity"
  }, __jsx("div", {
    className: "header"
  }, __jsx("div", {
    className: "title"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("h1", null, "rdnblog"))), __jsx("nav", {
    className: "navbar"
  }, __jsx("ul", null, __jsx("li", null, __jsx(link_default.a, {
    href: "/articles"
  }, __jsx("a", null, "Artigos"))), __jsx("li", null, __jsx("a", {
    href: "http://rodrigodn.netlify.com/",
    target: "__blank"
  }, "Sobre")))), __jsx("div", {
    className: "social-media"
  }, __jsx("a", {
    href: "https://twitter.com/roketman09",
    target: "__blank"
  }, __jsx(fi_["FiTwitter"], {
    size: 25
  })), __jsx("a", {
    href: "mailto:rodrigonoronha09@gmail.com",
    target: "__blank"
  }, __jsx(fi_["FiMail"], {
    size: 25
  })))), __jsx("div", {
    className: "mobile"
  }, __jsx("ul", null, __jsx("li", null, __jsx(link_default.a, {
    href: "/articles"
  }, __jsx("a", null, "Artigos"))), __jsx("li", null, __jsx("a", {
    href: "http://rodrigodn.netlify.com/",
    target: "__blank"
  }, "Sobre")))), __jsx("div", {
    className: "phrase-container"
  }, __jsx("h3", null, title || 'Do what you must need do!'), date && __jsx("time", {
    className: "date"
  }, dateFormated))));
};

const wallpapers = ['wp.jpg', 'pc.jpg', 'wp5.jpg', 'pc2.jpg', 'pc1.jpg', 'wp2.jpg'];
/* harmony default export */ var components_Header = (Object(external_react_["memo"])(Header));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head/index.tsx
var Head_jsx = external_react_default.a.createElement;



const HeadComponent = ({
  children
}) => Head_jsx(head_default.a, null, Head_jsx("meta", {
  name: "theme-color",
  content: "#222"
}), Head_jsx("link", {
  rel: "shortcut icon",
  href: "/favicon.png",
  type: "image/x-icon"
}), Head_jsx("link", {
  rel: "manifest",
  href: "/manifest.json"
}), Head_jsx("link", {
  rel: "shortcut icon",
  href: "/favicon.png",
  type: "image/x-icon"
}), Head_jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap",
  rel: "stylesheet"
}), Head_jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Roboto:wght@100;400;500;700&display=swap",
  rel: "stylesheet"
}), Head_jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap",
  rel: "stylesheet"
}), Head_jsx("title", {
  key: "title"
}, "RDN Blog"), Head_jsx("link", {
  rel: "manifest",
  href: "/manifest.json"
}), Head_jsx("link", {
  rel: "manifest",
  href: "/manifest.json"
}), Head_jsx("meta", {
  key: "og:title",
  property: "og:title",
  content: "RDN Blog - Dicas de Desenvolvimento de Software"
}), Head_jsx("meta", {
  property: "og:type",
  content: "website"
}), Head_jsx("meta", {
  property: "og:url",
  content: "https://rdn.now.sh"
}), Head_jsx("meta", {
  key: "og:image",
  property: "og:image",
  content: "http://vmorneau.me/content/images/2016/07/java-script.jpg"
}), Head_jsx("meta", {
  property: "og:author",
  content: "Rodrigo Dias Noronha"
}), Head_jsx("meta", {
  key: "og:description",
  property: "og:description",
  content: "RDN - Blog de dicas sobre Desenvolvimento de Software, criado por Rodrigo Dias Noronha"
}), Head_jsx("meta", {
  property: "og:determiner",
  content: "https://rdn.now.sh"
}), Head_jsx("meta", {
  property: "og:locale",
  content: "pt_BR"
}), Head_jsx("meta", {
  property: "og:locale:alternate",
  content: "es_ES"
}), Head_jsx("meta", {
  key: "og:site_name",
  property: "og:site_name",
  content: "RDN Blog - Dicas sobre Desenvolvimento de Software"
}), Head_jsx("meta", {
  property: "og:type",
  content: "website"
}), Head_jsx("meta", {
  name: "twitter:card",
  content: "summary"
}), Head_jsx("meta", {
  name: "twitter:site",
  content: "@roketman09"
}), Head_jsx("meta", {
  name: `twitter:title`,
  content: "RDN Blog - Dicas sobre Desenvolvimento de Software, criado por Rodrigo Dias Noronha"
}), Head_jsx("meta", {
  name: `twitter:image`,
  content: "http://vmorneau.me/content/images/2016/07/java-script.jpg"
}), children);

/* harmony default export */ var Head = (HeadComponent);
// CONCATENATED MODULE: ./components/Footer/styles.ts

const styles_Container = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__Container",
  componentId: "izbs2w-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid transparent;padding:10px;a{margin-left:8px;margin-right:8px;}a svg{color:#333;}a svg:hover{transition:0.5s;color:var(--lucyOrange);}.info{padding:5px;}.info span{font-size:14px;font-family:Roboto,Arial,'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;font-weight:500;}.links{padding:10px;padding-bottom:5px;}"]);
// CONCATENATED MODULE: ./components/Footer/index.tsx
var Footer_jsx = external_react_default.a.createElement;




const Footer = () => {
  return Footer_jsx(styles_Container, null, Footer_jsx("div", {
    className: "info"
  }, Footer_jsx("span", null, "RDN Blog \xA9 2020")), Footer_jsx("div", {
    className: "links"
  }, Footer_jsx("a", {
    href: "https://twitter.com/roketman09",
    target: "__blank"
  }, Footer_jsx(fi_["FiTwitter"], {
    size: 30
  })), Footer_jsx("a", {
    href: "https://github.com/rodrigodiasnoronha",
    target: "__blank"
  }, Footer_jsx(fi_["FiGithub"], {
    size: 30
  })), Footer_jsx("a", {
    href: "mailto:rodrigonoronha09@gmail.com",
    target: "__blank"
  }, Footer_jsx(fi_["FiMail"], {
    size: 30
  }))), Footer_jsx("script", {
    "data-ad-client": "ca-pub-7185437016073244",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  }));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Article/styles.ts

const Article_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-4tuqfb-0"
})(["border:1px solid transparent;border-top-color:var(--lucyPure2);padding-top:15px;display:flex;.title{flex:5;}.title a{color:#333;font-size:28px;font-family:Jost,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:400;text-decoration:none;}.title a:hover{color:var(--lucyOrange);transition:color 0.5s;}.date{flex:1;height:100%;display:flex;justify-content:center;align-items:center;}.date time{color:var(--textGray);font-family:Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:400;font-size:14px;}@media (max-width:700px){padding:10px;padding-top:15px;.title{padding:5px;}.title a{font-size:1.2rem;}.date time{font-size:0.8rem;}}"]);
// CONCATENATED MODULE: ./components/Article/index.tsx
var Article_jsx = external_react_default.a.createElement;




const Article = ({
  data
}) => {
  function formatDay(dateReceived) {
    return new Date(dateReceived).getDate();
  }

  function formatMonth(dateReceived) {
    const month = new Date(dateReceived).getMonth() + 1;

    switch (month) {
      case 1:
        return 'JAN';

      case 2:
        return 'FEB';

      case 3:
        return 'MAR';

      case 4:
        return 'APR';

      case 5:
        return 'MAY';

      case 6:
        return 'JUN';

      case 7:
        return 'JUL';

      case 8:
        return 'AUG';

      case 9:
        return 'SEP';

      case 10:
        return 'OCT';

      case 11:
        return 'NOV';

      case 12:
        return 'DEC';

      default:
        return String(month);
    }
  }

  function formatYear(dateReceived) {
    return new Date(dateReceived).getFullYear();
  }

  return Article_jsx(Article_styles_Container, null, Article_jsx("div", {
    className: "title"
  }, Article_jsx(link_default.a, {
    href: `/${data.fields.alias}`
  }, Article_jsx("a", null, data.fields.title))), Article_jsx("div", {
    className: "date"
  }, Article_jsx("time", null, formatMonth(data.fields.createdAt), ' ', formatDay(data.fields.createdAt), ', ', formatYear(data.fields.createdAt))));
};

/* harmony default export */ var components_Article = (Article);
// CONCATENATED MODULE: ./components/PostContent/styles.ts

const PostContent_styles_Container = external_styled_components_default.a.article.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1sbo77w-0"
})(["max-width:1000px;width:100%;margin:0px auto;margin-top:35px;.description{font-size:35px;font-family:Jost,Arial,Helvetica,sans-serif;font-weight:400;color:#333;max-width:700px;width:100%;margin:15px auto;@media (max-width:700px){padding:0px 15px;}}.author{border:1px solid transparent;max-width:700px;width:100%;margin:15px auto;display:flex;align-items:center;padding:10px 5px;border-top-color:#ccc;}.author img{height:50px;width:50px;border-radius:50%;margin:5px;}.author .info{display:flex;flex-direction:column;justify-content:center;padding:0px 10px;}.author .info span{font-family:Roboto,Jost,Arial,sans-serif;font-size:16px;color:#333;}.author .info time{font-size:14px;color:#999;font-family:Roboto,Jost,Arial,sans-serif;}.author .contact a{padding:3px;}.author .contact svg:hover{opacity:0.6;transition:opacity 0.5s;}.article-image{width:100%;margin:35px auto;border-radius:3px;overflow:hidden;@media (max-width:700px){margin:25px auto;}}.share-container{display:flex;flex-direction:column;padding:20px 0px;border:1px solid transparent;border-top-color:#ccc;}.share-container h5{text-align:center;}.share{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;}.body{font-family:Jost,Arial,Helvetica,sans-serif;font-weight:400;max-width:700px;width:100%;margin:0px auto;margin-bottom:35px;}.body *{font-size:1.2rem;font-family:Jost,Roboto,Arial,Helvetica,sans-serif;}@media (max-width:700px){.body{padding:0px 15px;overflow-x:hidden;}}.body a{color:#fb7da7;}.body a:hover{opacity:0.5;transition:opacity 1s;text-decoration-style:solid;text-decoration-line:underline;}.body a:active{opacity:0.2;transition:opacity 0.5s;}.body h5{font-size:24px;font-weight:500;margin:20px 0px;}.body h4{font-size:28px;font-weight:500;margin:20px 0px;}.body h3{font-size:32px;font-weight:500;margin:20px 0px;}.body h2{font-size:36px;font-weight:500;margin:20px 0px;}.body h1{font-size:40px;font-weight:500;margin:20px 0px;}.body code{font-family:monospace,consolas,sans-serif;font-size:87.5%;color:#01579b;word-wrap:break-word;}.body img{width:100% !important;margin:25px 0px;}.body{table{width:100%;margin-bottom:1rem;margin-top:1rem;color:#212529;overflow-x:scroll;}table th,table td{padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;}table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6;}table tbody + tbody{border-top:2px solid #dee2e6;}table th{color:#fff;background-color:#343a40;border-color:#454d55;font-size:20px;}}"]);
// EXTERNAL MODULE: external "disqus-react"
var external_disqus_react_ = __webpack_require__("1Yx3");

// CONCATENATED MODULE: ./components/DisqusComments/index.tsx
var DisqusComments_jsx = external_react_default.a.createElement;



const DisqusCommentsComponent = ({
  articleId,
  articleTitle,
  articleUrl
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return DisqusComments_jsx("div", null);
  } else {
    return DisqusComments_jsx(external_disqus_react_["DiscussionEmbed"], {
      shortname: "rdn-blog",
      config: {
        url: articleUrl,
        identifier: articleId,
        title: articleTitle
      }
    });
  }
};

/* harmony default export */ var DisqusComments = (DisqusCommentsComponent);
// EXTERNAL MODULE: external "remarkable"
var external_remarkable_ = __webpack_require__("u+BA");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// CONCATENATED MODULE: ./components/PostContent/index.tsx
var PostContent_jsx = external_react_default.a.createElement;


// eslint-disable-line




var md = new external_remarkable_["Remarkable"]({
  html: true,
  // Enable HTML tags in source
  langPrefix: 'language-' // CSS language prefix for fenced blocks

});

const PostContent = ({
  post
}) => {
  var _post$fields$author$f, _post$fields$author$f2, _post$fields$author$f3, _post$fields$author$f4, _post$fields$author$f5, _post$fields$author$f6, _post$fields$author$f7;

  const url = `https://rdn.now.sh/${post.fields.alias}`;

  function formatDay(dateReceived) {
    return new Date(dateReceived).getDate();
  }

  function formatMonth(dateReceived) {
    const month = new Date(dateReceived).getMonth() + 1;

    switch (month) {
      case 1:
        return 'JAN';

      case 2:
        return 'FEV';

      case 3:
        return 'MAR';

      case 4:
        return 'ABR';

      case 5:
        return 'MAI';

      case 6:
        return 'JUN';

      case 7:
        return 'JUL';

      case 8:
        return 'AGO';

      case 9:
        return 'SET';

      case 10:
        return 'OUT';

      case 11:
        return 'NOV';

      case 12:
        return 'DEZ';

      default:
        return String(month);
    }
  }

  function formatYear(dateReceived) {
    return new Date(dateReceived).getFullYear();
  }

  return PostContent_jsx(PostContent_styles_Container, null, PostContent_jsx("h4", {
    className: "description"
  }, post.fields.description), PostContent_jsx("div", {
    className: "author"
  }, PostContent_jsx("div", {
    className: "pic"
  }, PostContent_jsx("img", {
    loading: "lazy",
    src: (_post$fields$author$f = post.fields.author.fields) === null || _post$fields$author$f === void 0 ? void 0 : (_post$fields$author$f2 = _post$fields$author$f.avatar) === null || _post$fields$author$f2 === void 0 ? void 0 : (_post$fields$author$f3 = _post$fields$author$f2.fields) === null || _post$fields$author$f3 === void 0 ? void 0 : (_post$fields$author$f4 = _post$fields$author$f3.file) === null || _post$fields$author$f4 === void 0 ? void 0 : _post$fields$author$f4.url,
    alt: post.fields.author.fields.name,
    title: post.fields.author.fields.name
  })), PostContent_jsx("div", {
    className: "info"
  }, PostContent_jsx("span", null, post.fields.author.fields.name), PostContent_jsx("time", null, formatMonth(post.fields.createdAt), ' ', formatDay(post.fields.createdAt), ', ', formatYear(post.fields.createdAt))), PostContent_jsx("div", {
    className: "contact"
  }, PostContent_jsx("a", {
    target: "__blank",
    href: `https://twitter.com/${(_post$fields$author$f5 = post.fields.author.fields) === null || _post$fields$author$f5 === void 0 ? void 0 : _post$fields$author$f5.twitter}`
  }, PostContent_jsx(fi_["FiTwitter"], {
    color: "#1da1f2",
    size: 25
  })), ((_post$fields$author$f6 = post.fields.author.fields) === null || _post$fields$author$f6 === void 0 ? void 0 : _post$fields$author$f6.instagram) && PostContent_jsx("a", {
    target: "__blank",
    href: `https://instagram.com/${(_post$fields$author$f7 = post.fields.author.fields) === null || _post$fields$author$f7 === void 0 ? void 0 : _post$fields$author$f7.instagram}`
  }, PostContent_jsx(fi_["FiInstagram"], {
    color: "#fb7da7",
    size: 25
  })), PostContent_jsx("a", {
    href: `mailto:${post.fields.author.fields.email}`
  }, PostContent_jsx(fi_["FiMail"], {
    color: "#e3cf65",
    size: 25
  })))), PostContent_jsx("div", {
    className: "body",
    dangerouslySetInnerHTML: {
      __html: md.render(post.fields.body) || ''
    }
  }), PostContent_jsx("div", {
    className: "share-container"
  }, PostContent_jsx("h5", null, "Compartilhe este artigo"), PostContent_jsx("div", {
    className: "share"
  }, PostContent_jsx(external_react_share_["FacebookShareButton"], {
    url: url,
    quote: post.fields.title
  }, PostContent_jsx(external_react_share_["FacebookIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["WhatsappShareButton"], {
    title: post.fields.title,
    url: url
  }, PostContent_jsx(external_react_share_["WhatsappIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["TwitterShareButton"], {
    title: post.fields.title,
    url: url
  }, PostContent_jsx(external_react_share_["TwitterIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["TumblrShareButton"], {
    url: url,
    title: post.fields.title,
    caption: post.fields.description
  }, PostContent_jsx(external_react_share_["TumblrIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["RedditShareButton"], {
    url: url,
    title: post.fields.title
  }, PostContent_jsx(external_react_share_["RedditIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["TelegramShareButton"], {
    url: url,
    title: post.fields.title
  }, PostContent_jsx(external_react_share_["TelegramIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["EmailShareButton"], {
    url: url,
    subject: post.fields.title,
    body: post.fields.description
  }, PostContent_jsx(external_react_share_["EmailIcon"], {
    size: 50
  })), PostContent_jsx(external_react_share_["LinkedinShareButton"], {
    url: url,
    source: url,
    title: post.fields.title,
    summary: post.fields.description
  }, PostContent_jsx(external_react_share_["LinkedinIcon"], {
    size: 50
  }))), PostContent_jsx(DisqusComments, {
    articleId: post.fields.alias,
    articleUrl: `https://rdn.now.sh/${post.fields.alias}`,
    articleTitle: post.fields.title
  })));
};

/* harmony default export */ var components_PostContent = (PostContent);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// CONCATENATED MODULE: ./components/Button/index.tsx

/* harmony default export */ var Button = (external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1eqyw7m-0"
})(["border:1px solid transparent;padding:5px 8px;background-color:#fff;cursor:pointer;border-radius:4px;font-family:Roboto,Arial,Helvetica,sans-serif;font-weight:400;font-size:16px;margin:5px 0px;outline:0px;:hover{background-color:", ";transition:0.5s;color:#fff;}:active{opacity:0.5;transition:opacity 0.25s;}:disabled{opacity:0.5;}"], props => props.hoverColor || '#e02041'));
// CONCATENATED MODULE: ./components/Error/index.tsx
var Error_jsx = external_react_default.a.createElement;





const Error = ({
  message
}) => Error_jsx(Error_Container, null, Error_jsx(md_["MdSentimentNeutral"], {
  style: {
    color: '#e02041'
  },
  size: 100,
  color: "#e02041"
}), Error_jsx("span", null, message), Error_jsx(Button, {
  onClick: () => window.location.reload()
}, "Tentar novamente"));

const Error_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Error__Container",
  componentId: "sc-16akiad-0"
})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;span{font-size:20px;font-weight:400;text-align:center;}"]);
/* harmony default export */ var components_Error = (Error);
// EXTERNAL MODULE: ./services/contentful.ts
var contentful = __webpack_require__("gqKn");

// CONCATENATED MODULE: ./components/SearchArticle/styles.ts

const Form = external_styled_components_default.a.form.withConfig({
  displayName: "styles__Form",
  componentId: "sc-1qeqkbz-0"
})(["display:flex;align-items:center;height:50px;margin:15px 0px;input{flex:5;height:100%;padding-left:10px;border:1px solid transparent;border-top-left-radius:4px;border-bottom-left-radius:4px;background-color:#f5f5f5;font-family:Jost,Roboto,Arial,Helvetica,sans-serif;}button{width:50px;height:100%;border:1px solid transparent;border-top-right-radius:4px;border-bottom-right-radius:4px;background-color:#f5f5f5;}button:hover{background-color:var(--lucyOrange);transition:0.5s;}"]);
// CONCATENATED MODULE: ./components/SearchArticle/index.tsx
var SearchArticle_jsx = external_react_default.a.createElement;

// eslint-disable-line




const Search = ({
  updatePosts
}) => {
  const {
    0: query,
    1: setQuery
  } = Object(external_react_["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => setError(''), 5000);
  }, [error]);

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await contentful["a" /* default */].getEntries({
        content_type: 'article',
        'fields.title[match]': query
      });
      updatePosts(response.items);
    } catch (err) {
      setError('Ocorreu um erro ao pesquisar os artigos');
    }
  }

  return SearchArticle_jsx(external_react_default.a.Fragment, null, SearchArticle_jsx(Form, {
    onSubmit: submitHandler
  }, SearchArticle_jsx("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    type: "text",
    placeholder: "React Native..."
  }), SearchArticle_jsx("button", {
    type: "submit"
  }, SearchArticle_jsx(fi_["FiSearch"], {
    color: "#333",
    size: 30
  }))), error && SearchArticle_jsx("span", {
    style: {
      fontSize: 18,
      fontFamily: "'Roboto', 'Arial', 'sans-serif'",
      textAlign: 'center',
      fontWeight: 'normal',
      color: '#e02041',
      marginTop: 2,
      marginBottom: 5
    }
  }, error));
};

/* harmony default export */ var SearchArticle = (Search);
// CONCATENATED MODULE: ./components/index.ts











/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "gqKn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5NG/");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);

const keys = {
  spaceId: '4xlg4u86jlb1',
  accessToken: 'GdXhu9HIstYsZOjNFgh5-uO8bDpqUvwfzAzSipznYkQ'
};
const client = contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"]({
  accessToken: keys.accessToken,
  space: keys.spaceId
});
/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "u+BA":
/***/ (function(module, exports) {

module.exports = require("remarkable");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });