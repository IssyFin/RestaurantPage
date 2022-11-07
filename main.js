/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./RichEatin.otf */ "./src/RichEatin.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./waffles.jpg */ "./src/waffles.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyFont';\n    /* src: url('./lemon.ttf') format('ttf'); */\n    /* src: url('./RichEatin.otf') format('otf'); */\n    src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat:no-repeat;\n    background-attachment:fixed;\n    background-size:100vw 100vh;\n    margin:0;\n    padding:0;\n}\n\n.pageLayout{\n    display:grid;\n    grid-template-rows: 8vh 16vh 8fr 1fr; /*4 rows: banner space, header, content, and credit. Note preivously 2fr */\n    gap:2px ;\n    align-items:center;\n    padding-left:0px;\n}\n\n/*banner is positioned as absolute; no row is needed in grid*/\n.banner{\n    background-color:rgba(74,36,105,0.9);\n    margin-top:0;\n    padding:0px;\n    margin:0px;\n    display:grid;\n    grid-template-columns:5fr 1fr 1fr 1fr;\n    justify-items:center;\n    align-content:center;\n    position:fixed;\n    top:0;\n    width:100vw;\n    height:4vh;\n}\n\n.bannerLink{\n    color:white;\n    text-justify:center;\n    font-weight:bold;\n    text-decoration:none;\n    border:none;\n    background-color:rgba(0,0,0,0);\n}\n\n.bannerLink:hover{\n    cursor:pointer;\n    color:blueviolet;\n}\n\n/* .headerBlock{ */\n#headerBlock{\n    padding:0;\n    height:auto;\n    justify-items:flex-start;\n}\n\n/* .heading{ */\n#heading{\n    font-size:8vh;\n    color:white;\n    text-align:center;\n    background-color:rgba(2, 36, 105, 0.66);\n    padding-left:0px;\n    padding:0;\n    padding-top:4vh;\n    margin:0;\n    font-family: 'MyFont';\n}\n\n/* .tagline{ */\n#tagline{\n    color: white;\n    text-align:center; \n    padding:10px;\n    font-size:3vh;\n    background-color:rgba(2, 36, 105, 0.66);\n}\n\n/* .smallHeading{ */\n#smallHeading{\n    color:white;\n    background-color:rgba(2, 36, 105, 0.66);\n    font-size:6vh;\n    text-align:center;\n    align-self:flex-start;\n    font-family:\"MyFont\";\n    margin-top:0;\n}\n\n/* .contentBlock{ */\n #contentBlock{\n    display:grid;\n    gap:5vh;\n    padding:20px;\n    padding-top:40px;\n    align-items:flex-start;\n    justify-content:center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-auto-rows: auto;\n}\n\n.credit{\n    font-size:auto;\n    color:white;\n    position:fixed;\n    bottom:0;\n}\n\n.reviewCard{\n    width:40vw;\n    flex-wrap: wrap;\n    background-color:rgba(74,36,105,0.66);\n    border-radius:10px;\n    border:indigo solid 2px;\n    padding:10px;\n    color:white;\n    justify-self:center;\n    height:30vh;\n    display:grid;\n    grid-template-rows: 5fr 1fr;\n}\n\n.review{\n    font-size:5vh;\n    font-style:italic;\n    justify-self:flex-start;\n}\n\n.reviewCredit{\n    font-size:4vh;\n    justify-self:flex-end;\n}\n\n.menuBlock{\n    background-color:rgba(74,36,105,0.8);\n    display:grid;\n    grid-template-columns:1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-auto-rows: 1fr;\n    width:70vw;\n    justify-items:center;\n    align-items:center;\n    text-align:center;\n    justify-self:center;\n    gap:30px;\n    padding-top:30px;\n    padding-bottom:30px;\n    border-radius:20px;\n}\n\n.mealCard{\n    background-color:lightblue;\n    display:grid;\n    grid-template-rows: 4fr 1fr;\n}\n\n.foodPhoto{\n    width:10vw;\n    height:10vw;\n    gap:5px;\n    border:8px solid rgba(255,255,255,0.7);\n    border-radius:20px;\n}\n\n.foodTitle{\n    color:white;\n    font-size:3vh;\n}\n\n.foodCredit{\n    color:white;\n    font-size:2vh;\n}\n\n.contactBlock{\n    background-color:rgba(2, 36, 105, 0.8);\n    border-radius:10px;\n    border: 2px navy solid;\n    display:grid;\n    grid-template-rows: 1fr 1fr 5fr 1fr;\n    gap:2px;\n    height:40vh;\n    width:40vw;\n    justify-self:center;\n    justify-items:center;\n}\n\n.contactTitle{\n    font-size: 5vh;\n    color:white;\n}\n\n.contactName{\n    font-size:4vh;\n    color:white;\n}\n\n.contactPhoto{\n    background-color:white;\n    border:solid 2px black;\n    height:20vh;\n    width:20vh;\n}\n\n.contactNumber{\n    font-size:3vh;\n    font-style:italic;\n    color:white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C,+CAA+C;IAC/C,2CAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,yDAAsC;IACtC,2BAA2B;IAC3B,2BAA2B;IAC3B,2BAA2B;IAC3B,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,oCAAoC,EAAE,0EAA0E;IAChH,QAAQ;IACR,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,6DAA6D;AAC7D;IACI,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,UAAU;IACV,YAAY;IACZ,qCAAqC;IACrC,oBAAoB;IACpB,oBAAoB;IACpB,cAAc;IACd,KAAK;IACL,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA,kBAAkB;AAClB;IACI,SAAS;IACT,WAAW;IACX,wBAAwB;AAC5B;;AAEA,cAAc;AACd;IACI,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,uCAAuC;IACvC,gBAAgB;IAChB,SAAS;IACT,eAAe;IACf,QAAQ;IACR,qBAAqB;AACzB;;AAEA,cAAc;AACd;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uCAAuC;AAC3C;;AAEA,mBAAmB;AACnB;IACI,WAAW;IACX,uCAAuC;IACvC,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;AAChB;;AAEA,mBAAmB;CAClB;IACG,YAAY;IACZ,OAAO;IACP,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;IACtB,0BAA0B;IAC1B,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,cAAc;IACd,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,eAAe;IACf,qCAAqC;IACrC,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,iCAAiC;IACjC,2BAA2B;IAC3B,mBAAmB;IACnB,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,OAAO;IACP,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,mCAAmC;IACnC,OAAO;IACP,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    /* src: url('./lemon.ttf') format('ttf'); */\n    /* src: url('./RichEatin.otf') format('otf'); */\n    src:url('./RichEatin.otf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    background-image: url(\"./waffles.jpg\");\n    background-repeat:no-repeat;\n    background-attachment:fixed;\n    background-size:100vw 100vh;\n    margin:0;\n    padding:0;\n}\n\n.pageLayout{\n    display:grid;\n    grid-template-rows: 8vh 16vh 8fr 1fr; /*4 rows: banner space, header, content, and credit. Note preivously 2fr */\n    gap:2px ;\n    align-items:center;\n    padding-left:0px;\n}\n\n/*banner is positioned as absolute; no row is needed in grid*/\n.banner{\n    background-color:rgba(74,36,105,0.9);\n    margin-top:0;\n    padding:0px;\n    margin:0px;\n    display:grid;\n    grid-template-columns:5fr 1fr 1fr 1fr;\n    justify-items:center;\n    align-content:center;\n    position:fixed;\n    top:0;\n    width:100vw;\n    height:4vh;\n}\n\n.bannerLink{\n    color:white;\n    text-justify:center;\n    font-weight:bold;\n    text-decoration:none;\n    border:none;\n    background-color:rgba(0,0,0,0);\n}\n\n.bannerLink:hover{\n    cursor:pointer;\n    color:blueviolet;\n}\n\n/* .headerBlock{ */\n#headerBlock{\n    padding:0;\n    height:auto;\n    justify-items:flex-start;\n}\n\n/* .heading{ */\n#heading{\n    font-size:8vh;\n    color:white;\n    text-align:center;\n    background-color:rgba(2, 36, 105, 0.66);\n    padding-left:0px;\n    padding:0;\n    padding-top:4vh;\n    margin:0;\n    font-family: 'MyFont';\n}\n\n/* .tagline{ */\n#tagline{\n    color: white;\n    text-align:center; \n    padding:10px;\n    font-size:3vh;\n    background-color:rgba(2, 36, 105, 0.66);\n}\n\n/* .smallHeading{ */\n#smallHeading{\n    color:white;\n    background-color:rgba(2, 36, 105, 0.66);\n    font-size:6vh;\n    text-align:center;\n    align-self:flex-start;\n    font-family:\"MyFont\";\n    margin-top:0;\n}\n\n/* .contentBlock{ */\n #contentBlock{\n    display:grid;\n    gap:5vh;\n    padding:20px;\n    padding-top:40px;\n    align-items:flex-start;\n    justify-content:center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-auto-rows: auto;\n}\n\n.credit{\n    font-size:auto;\n    color:white;\n    position:fixed;\n    bottom:0;\n}\n\n.reviewCard{\n    width:40vw;\n    flex-wrap: wrap;\n    background-color:rgba(74,36,105,0.66);\n    border-radius:10px;\n    border:indigo solid 2px;\n    padding:10px;\n    color:white;\n    justify-self:center;\n    height:30vh;\n    display:grid;\n    grid-template-rows: 5fr 1fr;\n}\n\n.review{\n    font-size:5vh;\n    font-style:italic;\n    justify-self:flex-start;\n}\n\n.reviewCredit{\n    font-size:4vh;\n    justify-self:flex-end;\n}\n\n.menuBlock{\n    background-color:rgba(74,36,105,0.8);\n    display:grid;\n    grid-template-columns:1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-auto-rows: 1fr;\n    width:70vw;\n    justify-items:center;\n    align-items:center;\n    text-align:center;\n    justify-self:center;\n    gap:30px;\n    padding-top:30px;\n    padding-bottom:30px;\n    border-radius:20px;\n}\n\n.mealCard{\n    background-color:lightblue;\n    display:grid;\n    grid-template-rows: 4fr 1fr;\n}\n\n.foodPhoto{\n    width:10vw;\n    height:10vw;\n    gap:5px;\n    border:8px solid rgba(255,255,255,0.7);\n    border-radius:20px;\n}\n\n.foodTitle{\n    color:white;\n    font-size:3vh;\n}\n\n.foodCredit{\n    color:white;\n    font-size:2vh;\n}\n\n.contactBlock{\n    background-color:rgba(2, 36, 105, 0.8);\n    border-radius:10px;\n    border: 2px navy solid;\n    display:grid;\n    grid-template-rows: 1fr 1fr 5fr 1fr;\n    gap:2px;\n    height:40vh;\n    width:40vw;\n    justify-self:center;\n    justify-items:center;\n}\n\n.contactTitle{\n    font-size: 5vh;\n    color:white;\n}\n\n.contactName{\n    font-size:4vh;\n    color:white;\n}\n\n.contactPhoto{\n    background-color:white;\n    border:solid 2px black;\n    height:20vh;\n    width:20vh;\n}\n\n.contactNumber{\n    font-size:3vh;\n    font-style:italic;\n    color:white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/RichEatin.otf":
/*!***************************!*\
  !*** ./src/RichEatin.otf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e3179af9243862e952a.otf";

/***/ }),

/***/ "./src/applesauce.jpg":
/*!****************************!*\
  !*** ./src/applesauce.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ae71ed0bf787b788e9a.jpg";

/***/ }),

/***/ "./src/bacon.jpg":
/*!***********************!*\
  !*** ./src/bacon.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ae0fdae5823f8f98d00.jpg";

/***/ }),

/***/ "./src/berryWaffle.jpg":
/*!*****************************!*\
  !*** ./src/berryWaffle.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0672d0dc2252d6888bf4.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faecab72173fe024a693.jpg";

/***/ }),

/***/ "./src/chickenWaffle.jpg":
/*!*******************************!*\
  !*** ./src/chickenWaffle.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6b75eef721003a98d15.jpg";

/***/ }),

/***/ "./src/chocoWaffle.jpg":
/*!*****************************!*\
  !*** ./src/chocoWaffle.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23f72341bebe40a85cf0.jpg";

/***/ }),

/***/ "./src/coffee.jpg":
/*!************************!*\
  !*** ./src/coffee.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c84fbb92f28febcd6e95.jpg";

/***/ }),

/***/ "./src/espresso.jpg":
/*!**************************!*\
  !*** ./src/espresso.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6c8f363f4f37907fd74.jpg";

/***/ }),

/***/ "./src/fruit.jpg":
/*!***********************!*\
  !*** ./src/fruit.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9258596d4679938fc07.jpg";

/***/ }),

/***/ "./src/host.jpg":
/*!**********************!*\
  !*** ./src/host.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13fd7cb4df0a18f4624b.jpg";

/***/ }),

/***/ "./src/latte.jpg":
/*!***********************!*\
  !*** ./src/latte.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc19e6e6e7bb44bac2bc.jpg";

/***/ }),

/***/ "./src/manager.jpg":
/*!*************************!*\
  !*** ./src/manager.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89f75756fcc29fc2316f.jpg";

/***/ }),

/***/ "./src/milk.jpg":
/*!**********************!*\
  !*** ./src/milk.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3bbda377525116d5038.jpg";

/***/ }),

/***/ "./src/oatmeal.jpg":
/*!*************************!*\
  !*** ./src/oatmeal.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9a59a4b278fbf87565.jpg";

/***/ }),

/***/ "./src/oj.jpg":
/*!********************!*\
  !*** ./src/oj.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496ca1ff605bf18e9ee7.jpg";

/***/ }),

/***/ "./src/pbWaffle.jpg":
/*!**************************!*\
  !*** ./src/pbWaffle.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cef3d9ede126cbcdd4d.jpg";

/***/ }),

/***/ "./src/plainWaffle.jpg":
/*!*****************************!*\
  !*** ./src/plainWaffle.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0621e897ab7ee50c7e3f.jpg";

/***/ }),

/***/ "./src/sausage.jpg":
/*!*************************!*\
  !*** ./src/sausage.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a502e99fa8e68b2a388.jpg";

/***/ }),

/***/ "./src/tallWaffle.jpg":
/*!****************************!*\
  !*** ./src/tallWaffle.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d59899ff1de69e2a531d.jpg";

/***/ }),

/***/ "./src/tea.jpg":
/*!*********************!*\
  !*** ./src/tea.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09313b6cb2cba49f24f0.jpg";

/***/ }),

/***/ "./src/toast.jpg":
/*!***********************!*\
  !*** ./src/toast.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "380306a0749e9c048026.jpg";

/***/ }),

/***/ "./src/waffles.jpg":
/*!*************************!*\
  !*** ./src/waffles.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dd2cbf2508f2ac01663.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waffles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waffles.jpg */ "./src/waffles.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _manager_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager.jpg */ "./src/manager.jpg");
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");
/* harmony import */ var _host_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./host.jpg */ "./src/host.jpg");
/* harmony import */ var _plainWaffle_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plainWaffle.jpg */ "./src/plainWaffle.jpg");
/* harmony import */ var _berryWaffle_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./berryWaffle.jpg */ "./src/berryWaffle.jpg");
/* harmony import */ var _chocoWaffle_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chocoWaffle.jpg */ "./src/chocoWaffle.jpg");
/* harmony import */ var _pbWaffle_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pbWaffle.jpg */ "./src/pbWaffle.jpg");
/* harmony import */ var _chickenWaffle_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chickenWaffle.jpg */ "./src/chickenWaffle.jpg");
/* harmony import */ var _tallWaffle_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tallWaffle.jpg */ "./src/tallWaffle.jpg");
/* harmony import */ var _fruit_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fruit.jpg */ "./src/fruit.jpg");
/* harmony import */ var _bacon_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bacon.jpg */ "./src/bacon.jpg");
/* harmony import */ var _sausage_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sausage.jpg */ "./src/sausage.jpg");
/* harmony import */ var _toast_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toast.jpg */ "./src/toast.jpg");
/* harmony import */ var _oatmeal_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./oatmeal.jpg */ "./src/oatmeal.jpg");
/* harmony import */ var _applesauce_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./applesauce.jpg */ "./src/applesauce.jpg");
/* harmony import */ var _coffee_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./coffee.jpg */ "./src/coffee.jpg");
/* harmony import */ var _oj_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./oj.jpg */ "./src/oj.jpg");
/* harmony import */ var _milk_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./milk.jpg */ "./src/milk.jpg");
/* harmony import */ var _latte_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./latte.jpg */ "./src/latte.jpg");
/* harmony import */ var _espresso_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./espresso.jpg */ "./src/espresso.jpg");
/* harmony import */ var _tea_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tea.jpg */ "./src/tea.jpg");
//IMPORTS HERE



//Import contact photos




//Import food photos
//
//Added
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//OBJECTS AND ELEMENTS FOR EACH PAGE TO BE LOADED
const menuElements = [];
const menuObjects = [];
const contactElements = [];
const contactObjects = [];
const reviewElements = [];
const reviewObjects = [];
const headerElements = [];

//INITIAL PAGE LOAD (Append commonly used elements to the page and initialize the other cards to be used)
function pageLoad(){
    //Appending children
    const element = document.createElement('div');
    addPageElements(element);

    const reviewQuotes = ["Brioche french toast piled up high with whipped cream and maple syrup? Why eat anything but breakfast?",
                        "Their fruit is so fresh, you'd think they have an orchard right out back!",
                        "I come here every Saturday to read with resident cat Snuffles. Their bottomless coffee can't be beat."];
    const reviewNames = ["-Al Waiseating","-Trina B. Helthee","-Happy Lee Reed"];

        for(let i=0;i<reviewNames.length;i++){
            let review = new newReview(reviewQuotes[i],reviewNames[i]);
        }

        for(let i=0;i<reviewObjects.length;i++){
            let reviewCard = document.createElement('div');
            reviewCard.classList.add("reviewCard");
            let quote = document.createElement('div');
            quote.textContent = reviewObjects[i].quote;
            quote.classList.add('review');
            let name = document.createElement('div');
            name.textContent = reviewObjects[i].name;
            name.classList.add('reviewCredit');
            reviewCard.appendChild(quote);
            reviewCard.appendChild(name);
            reviewElements.push(reviewCard);
        }

    const menuPhotos = [_plainWaffle_jpg__WEBPACK_IMPORTED_MODULE_5__,_berryWaffle_jpg__WEBPACK_IMPORTED_MODULE_6__,_chocoWaffle_jpg__WEBPACK_IMPORTED_MODULE_7__,_pbWaffle_jpg__WEBPACK_IMPORTED_MODULE_8__,_chickenWaffle_jpg__WEBPACK_IMPORTED_MODULE_9__,_tallWaffle_jpg__WEBPACK_IMPORTED_MODULE_10__,
                        _fruit_jpg__WEBPACK_IMPORTED_MODULE_11__,_bacon_jpg__WEBPACK_IMPORTED_MODULE_12__,_sausage_jpg__WEBPACK_IMPORTED_MODULE_13__,_toast_jpg__WEBPACK_IMPORTED_MODULE_14__,_oatmeal_jpg__WEBPACK_IMPORTED_MODULE_15__,_applesauce_jpg__WEBPACK_IMPORTED_MODULE_16__,
                        _coffee_jpg__WEBPACK_IMPORTED_MODULE_17__,_oj_jpg__WEBPACK_IMPORTED_MODULE_18__,_milk_jpg__WEBPACK_IMPORTED_MODULE_19__,_latte_jpg__WEBPACK_IMPORTED_MODULE_20__,_espresso_jpg__WEBPACK_IMPORTED_MODULE_21__,_tea_jpg__WEBPACK_IMPORTED_MODULE_22__];
    const menuTitles = ['Plain Waffles', 'Berry Waffles', 'Chocolate Waffles', 'Peanut Butter Waffles',
                        'Chicken and Waffles', 'The Big Stack',
                        'Fruit Cup','Bacon','Sausage','Toast','Oatmeal','Applesauce',
                        'Coffee','Orange Juice','Milk','Latte','Espresso','Tea'];
    const menuCredits = ['Photo by Joyful on Unsplash','Photo by Sheelah Brennan on Unsplash','Photo by chris panas on Unsplash',
                        'Photo by Kevin Woblick on Unsplash','Photo by Tim Toomey on Unsplash','Photo by Slashio Photography on Unsplash',
                        'Photo by Dane Deaner on Unsplash','Photo by Michelle @Shelly Captures It on Unsplash','Photo by LikeMeat on Unsplash',
                        'Photo by Yukiko Kanada on Unsplash','Photo by Margarita Zueva on Unsplash','Photo by Rachel Loughman on Unsplash',
                        'Photo by Nathan Dumlao on Unsplash','Photo by Greg Rosenke on Unsplash','Photo by an_vision on Unsplash',
                        'Photo by Joshua Hill on Unsplash','Photo by Jarek Ceborski on Unsplash','Photo by Drew Jemmett on Unsplash'];

        for(let i=0;i<menuPhotos.length;i++){
            let meal = new newMeal(menuTitles[i],menuCredits[i]);
        }

        for(let i=0;i<menuObjects.length;i++){
            let mealCard = document.createElement('div');
            let photo = new Image();
            photo.src = menuPhotos[i];
            photo.classList.add("foodPhoto");
            let title = document.createElement('div');
            title.textContent = menuObjects[i].title;
            title.classList.add('foodTitle');
            let credit = document.createElement('div');
            credit.textContent = menuObjects[i].credit;
            credit.classList.add('foodCredit');
            mealCard.appendChild(photo);
            mealCard.appendChild(title);
            mealCard.appendChild(credit);
            menuElements.push(mealCard);
        }

    const contactTitles = ["Host","Chef","Manager"];
    const contactPhotos = [_host_jpg__WEBPACK_IMPORTED_MODULE_4__,_chef_jpg__WEBPACK_IMPORTED_MODULE_3__,_manager_jpg__WEBPACK_IMPORTED_MODULE_2__];
    const contactNames = ["Chowder","Mung Dahl","Truffles"];
    const contactNumbers = ["(555) 817-5309","(212) 664-7665","(311) 555-2368"];

        for(let i=0;i<contactPhotos.length;i++){
            let contact = new newContact(contactTitles[i],contactNames[i],contactNumbers[i]);
        }

        for(let i=0;i<contactObjects.length;i++){
            let contactCard = document.createElement('div');
            contactCard.classList.add("contactBlock");
            let photo = new Image();
            photo.src = contactPhotos[i];
            photo.classList.add("contactPhoto");
            let title = document.createElement('div');
            title.textContent = contactObjects[i].title;
            title.classList.add('contactTitle');
            let name = document.createElement('div');
            name.textContent = contactObjects[i].name;
            name.classList.add('contactName');
            let number =document.createElement('div');
            number.textContent = contactObjects[i].number;
            number.classList.add('contactNumber');
            contactCard.appendChild(title);
            contactCard.appendChild(name);
            contactCard.appendChild(photo);
            contactCard.appendChild(number);
            contactElements.push(contactCard);
        }
    return element;
}

//Page Function
function addPageElements(element){
    //ELEMENTS TO BE USED ON EACH PAGE (Banner, Header, Content, and Credit)
    element.classList.add("pageLayout");
    const banner = document.createElement('div');
    banner.classList.add("banner");
    addBanner(banner);
    const spacer = document.createElement('div');
    const headerBlock = document.createElement('div');
    addHeader(headerBlock);
    headerBlock.setAttribute('id','headerBlock');
    const content = document.createElement('div');
    content.setAttribute('id','contentBlock');
    const credit = document.createElement('div');
    credit.textContent = "Photo by Mae Mu on Unsplash";
    credit.classList.add("credit");
    element.appendChild(banner);
    element.appendChild(spacer);
    element.appendChild(headerBlock);
    element.appendChild(content);
    element.appendChild(credit);
}

//Banner Function
function addBanner(banner){
    const homeLink = document.createElement('button');
    homeLink.addEventListener("click",mainLoad);
    homeLink.textContent = ("Home");
    homeLink.classList.add("bannerLink");
    const menuLink = document.createElement('button');
    menuLink.addEventListener("click",menuLoad);
    menuLink.textContent = ("Menu");
    menuLink.classList.add("bannerLink");
    const contactLink =document.createElement('button');
    contactLink.addEventListener("click",contactLoad);
    contactLink.textContent = ("Contact");
    contactLink.classList.add("bannerLink");
    const spacer2 = document.createElement('div');
    banner.appendChild(spacer2);
    banner.appendChild(homeLink);
    banner.appendChild(menuLink);
    banner.appendChild(contactLink);
}

//Header Function
function addHeader(headerBlock){
    const smallHeading = document.createElement('div');
    smallHeading.textContent = "All Stacked Up!";
    smallHeading.setAttribute('id','smallHeading');
    const heading = document.createElement('div');
    heading.textContent = "All Stacked Up!";
    heading.setAttribute('id','heading');
    const tagline = document.createElement('div');
    tagline.textContent = "Serving the best meal of the day, all day, every day";
    tagline.setAttribute('id','tagline');
    headerElements.push(heading);
    headerElements.push(tagline);
    headerElements.push(smallHeading);
}

function smallHeader(){
    const headerBlock = document.getElementById("headerBlock");
    headerBlock.appendChild(headerElements[2]);
}

function bigHeader(){
    const headerBlock = document.getElementById("headerBlock");
    headerBlock.appendChild(headerElements[0]);
    headerBlock.appendChild(headerElements[1]);
}


//OBJECT CREATORS
function newReview(quote,name){
    this.quote = quote;
    this.name = name;
    reviewObjects.push(this);
}

function newMeal(title,credit){
    this.title = title;
    this.credit = credit;
    menuObjects.push(this);
}

function newContact(title,name,number){
    this.title = title;
    this.name = name;
    this.number = number;
    contactObjects.push(this);
}


//PAGE LOADERS
function mainLoad(){
    clearPage();
    const content = document.getElementById("contentBlock");
    bigHeader();
    for(let i=0;i<3;i++){
        content.appendChild(reviewElements[i]);
    }
}

function contactLoad(){
    clearPage();
    smallHeader();
    const content = document.getElementById("contentBlock");
    for(let i=0;i<3;i++){
        content.appendChild(contactElements[i]);
    }
}

function menuLoad(){
    clearPage();
    smallHeader();
    const content = document.getElementById("contentBlock");
    const waffleCategory = document.createElement('div');
    waffleCategory.classList.add("menuBlock");
    const sideCategory = document.createElement('div');
    sideCategory.classList.add("menuBlock");
    const drinkCategory = document.createElement('div');
    drinkCategory.classList.add("menuBlock");
    content.appendChild(waffleCategory);
    for(let i=0;i<6;i++){
        waffleCategory.appendChild(menuElements[i]);
    }
    content.appendChild(sideCategory);
    for(let i=6;i<12;i++){
        sideCategory.appendChild(menuElements[i]);
    }
    content.appendChild(drinkCategory);
    for(let i=12;i<menuElements.length;i++){
        drinkCategory.appendChild(menuElements[i]);
    }
}

function clearPage(){
    const content = document.getElementById("contentBlock");
    const headerBlock = document.getElementById("headerBlock");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    while(headerBlock.firstChild){
        headerBlock.removeChild(headerBlock.firstChild);
    }
}


//ON START
document.body.appendChild(pageLoad());
mainLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9SaWNoRWF0aW4ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi93YWZmbGVzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICAvKiBzcmM6IHVybCgnLi9sZW1vbi50dGYnKSBmb3JtYXQoJ3R0ZicpOyAqL1xcbiAgICAvKiBzcmM6IHVybCgnLi9SaWNoRWF0aW4ub3RmJykgZm9ybWF0KCdvdGYnKTsgKi9cXG4gICAgc3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMHZ3IDEwMHZoO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4ucGFnZUxheW91dHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxNnZoIDhmciAxZnI7IC8qNCByb3dzOiBiYW5uZXIgc3BhY2UsIGhlYWRlciwgY29udGVudCwgYW5kIGNyZWRpdC4gTm90ZSBwcmVpdm91c2x5IDJmciAqL1xcbiAgICBnYXA6MnB4IDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xcbn1cXG5cXG4vKmJhbm5lciBpcyBwb3NpdGlvbmVkIGFzIGFic29sdXRlOyBubyByb3cgaXMgbmVlZGVkIGluIGdyaWQqL1xcbi5iYW5uZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3NCwzNiwxMDUsMC45KTtcXG4gICAgbWFyZ2luLXRvcDowO1xcbiAgICBwYWRkaW5nOjBweDtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NWZyIDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB0b3A6MDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGhlaWdodDo0dmg7XFxufVxcblxcbi5iYW5uZXJMaW5re1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1qdXN0aWZ5OmNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCk7XFxufVxcblxcbi5iYW5uZXJMaW5rOmhvdmVye1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG59XFxuXFxuLyogLmhlYWRlckJsb2NreyAqL1xcbiNoZWFkZXJCbG9ja3tcXG4gICAgcGFkZGluZzowO1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAganVzdGlmeS1pdGVtczpmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiAuaGVhZGluZ3sgKi9cXG4jaGVhZGluZ3tcXG4gICAgZm9udC1zaXplOjh2aDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMiwgMzYsIDEwNSwgMC42Nik7XFxuICAgIHBhZGRpbmctbGVmdDowcHg7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgcGFkZGluZy10b3A6NHZoO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4vKiAudGFnbGluZXsgKi9cXG4jdGFnbGluZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgZm9udC1zaXplOjN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIsIDM2LCAxMDUsIDAuNjYpO1xcbn1cXG5cXG4vKiAuc21hbGxIZWFkaW5neyAqL1xcbiNzbWFsbEhlYWRpbmd7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMiwgMzYsIDEwNSwgMC42Nik7XFxuICAgIGZvbnQtc2l6ZTo2dmg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtZmFtaWx5OlxcXCJNeUZvbnRcXFwiO1xcbiAgICBtYXJnaW4tdG9wOjA7XFxufVxcblxcbi8qIC5jb250ZW50QmxvY2t7ICovXFxuICNjb250ZW50QmxvY2t7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjV2aDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDo0MHB4O1xcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxufVxcblxcbi5jcmVkaXR7XFxuICAgIGZvbnQtc2l6ZTphdXRvO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIGJvdHRvbTowO1xcbn1cXG5cXG4ucmV2aWV3Q2FyZHtcXG4gICAgd2lkdGg6NDB2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzQsMzYsMTA1LDAuNjYpO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGJvcmRlcjppbmRpZ28gc29saWQgMnB4O1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICBoZWlnaHQ6MzB2aDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnI7XFxufVxcblxcbi5yZXZpZXd7XFxuICAgIGZvbnQtc2l6ZTo1dmg7XFxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcbiAgICBqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXG59XFxuXFxuLnJldmlld0NyZWRpdHtcXG4gICAgZm9udC1zaXplOjR2aDtcXG4gICAganVzdGlmeS1zZWxmOmZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudUJsb2Nre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzQsMzYsMTA1LDAuOCk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIHdpZHRoOjcwdnc7XFxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICBnYXA6MzBweDtcXG4gICAgcGFkZGluZy10b3A6MzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbn1cXG5cXG4ubWVhbENhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmcjtcXG59XFxuXFxuLmZvb2RQaG90b3tcXG4gICAgd2lkdGg6MTB2dztcXG4gICAgaGVpZ2h0OjEwdnc7XFxuICAgIGdhcDo1cHg7XFxuICAgIGJvcmRlcjo4cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxufVxcblxcbi5mb29kVGl0bGV7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6M3ZoO1xcbn1cXG5cXG4uZm9vZENyZWRpdHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZToydmg7XFxufVxcblxcbi5jb250YWN0QmxvY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyLCAzNiwgMTA1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGJvcmRlcjogMnB4IG5hdnkgc29saWQ7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDVmciAxZnI7XFxuICAgIGdhcDoycHg7XFxuICAgIGhlaWdodDo0MHZoO1xcbiAgICB3aWR0aDo0MHZ3O1xcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RUaXRsZXtcXG4gICAgZm9udC1zaXplOiA1dmg7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uY29udGFjdE5hbWV7XFxuICAgIGZvbnQtc2l6ZTo0dmg7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uY29udGFjdFBob3Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBib3JkZXI6c29saWQgMnB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6MjB2aDtcXG4gICAgd2lkdGg6MjB2aDtcXG59XFxuXFxuLmNvbnRhY3ROdW1iZXJ7XFxuICAgIGZvbnQtc2l6ZTozdmg7XFxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsK0NBQStDO0lBQy9DLDJDQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0kseURBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsMEVBQTBFO0lBQ2hILFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBLDZEQUE2RDtBQUM3RDtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLEtBQUs7SUFDTCxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGVBQWU7SUFDZixRQUFRO0lBQ1IscUJBQXFCO0FBQ3pCOztBQUVBLGNBQWM7QUFDZDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7QUFDM0M7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksV0FBVztJQUNYLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7Q0FDbEI7SUFDRyxZQUFZO0lBQ1osT0FBTztJQUNQLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgLyogc3JjOiB1cmwoJy4vbGVtb24udHRmJykgZm9ybWF0KCd0dGYnKTsgKi9cXG4gICAgLyogc3JjOiB1cmwoJy4vUmljaEVhdGluLm90ZicpIGZvcm1hdCgnb3RmJyk7ICovXFxuICAgIHNyYzp1cmwoJy4vUmljaEVhdGluLm90ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3dhZmZsZXMuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwdncgMTAwdmg7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbi5wYWdlTGF5b3V0e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDE2dmggOGZyIDFmcjsgLyo0IHJvd3M6IGJhbm5lciBzcGFjZSwgaGVhZGVyLCBjb250ZW50LCBhbmQgY3JlZGl0LiBOb3RlIHByZWl2b3VzbHkgMmZyICovXFxuICAgIGdhcDoycHggO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDowcHg7XFxufVxcblxcbi8qYmFubmVyIGlzIHBvc2l0aW9uZWQgYXMgYWJzb2x1dGU7IG5vIHJvdyBpcyBuZWVkZWQgaW4gZ3JpZCovXFxuLmJhbm5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDc0LDM2LDEwNSwwLjkpO1xcbiAgICBtYXJnaW4tdG9wOjA7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczo1ZnIgMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgaGVpZ2h0OjR2aDtcXG59XFxuXFxuLmJhbm5lckxpbmt7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWp1c3RpZnk6Y2VudGVyO1xcbiAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtcXG59XFxuXFxuLmJhbm5lckxpbms6aG92ZXJ7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBjb2xvcjpibHVldmlvbGV0O1xcbn1cXG5cXG4vKiAuaGVhZGVyQmxvY2t7ICovXFxuI2hlYWRlckJsb2Nre1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOmZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIC5oZWFkaW5neyAqL1xcbiNoZWFkaW5ne1xcbiAgICBmb250LXNpemU6OHZoO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyLCAzNiwgMTA1LCAwLjY2KTtcXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBwYWRkaW5nLXRvcDo0dmg7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi8qIC50YWdsaW5leyAqL1xcbiN0YWdsaW5le1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyOyBcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBmb250LXNpemU6M3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMiwgMzYsIDEwNSwgMC42Nik7XFxufVxcblxcbi8qIC5zbWFsbEhlYWRpbmd7ICovXFxuI3NtYWxsSGVhZGluZ3tcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyLCAzNiwgMTA1LCAwLjY2KTtcXG4gICAgZm9udC1zaXplOjZ2aDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gICAgZm9udC1mYW1pbHk6XFxcIk15Rm9udFxcXCI7XFxuICAgIG1hcmdpbi10b3A6MDtcXG59XFxuXFxuLyogLmNvbnRlbnRCbG9ja3sgKi9cXG4gI2NvbnRlbnRCbG9ja3tcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6NXZoO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIHBhZGRpbmctdG9wOjQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG59XFxuXFxuLmNyZWRpdHtcXG4gICAgZm9udC1zaXplOmF1dG87XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgYm90dG9tOjA7XFxufVxcblxcbi5yZXZpZXdDYXJke1xcbiAgICB3aWR0aDo0MHZ3O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3NCwzNiwxMDUsMC42Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYm9yZGVyOmluZGlnbyBzb2xpZCAycHg7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIGhlaWdodDozMHZoO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmcjtcXG59XFxuXFxuLnJldmlld3tcXG4gICAgZm9udC1zaXplOjV2aDtcXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XFxuICAgIGp1c3RpZnktc2VsZjpmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucmV2aWV3Q3JlZGl0e1xcbiAgICBmb250LXNpemU6NHZoO1xcbiAgICBqdXN0aWZ5LXNlbGY6ZmxleC1lbmQ7XFxufVxcblxcbi5tZW51QmxvY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3NCwzNiwxMDUsMC44KTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6NzB2dztcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIGdhcDozMHB4O1xcbiAgICBwYWRkaW5nLXRvcDozMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxufVxcblxcbi5tZWFsQ2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyO1xcbn1cXG5cXG4uZm9vZFBob3Rve1xcbiAgICB3aWR0aDoxMHZ3O1xcbiAgICBoZWlnaHQ6MTB2dztcXG4gICAgZ2FwOjVweDtcXG4gICAgYm9yZGVyOjhweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG59XFxuXFxuLmZvb2RUaXRsZXtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTozdmg7XFxufVxcblxcbi5mb29kQ3JlZGl0e1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOjJ2aDtcXG59XFxuXFxuLmNvbnRhY3RCbG9ja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIsIDM2LCAxMDUsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYm9yZGVyOiAycHggbmF2eSBzb2xpZDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNWZyIDFmcjtcXG4gICAgZ2FwOjJweDtcXG4gICAgaGVpZ2h0OjQwdmg7XFxuICAgIHdpZHRoOjQwdnc7XFxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4uY29udGFjdFRpdGxle1xcbiAgICBmb250LXNpemU6IDV2aDtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5jb250YWN0TmFtZXtcXG4gICAgZm9udC1zaXplOjR2aDtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5jb250YWN0UGhvdG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlcjpzb2xpZCAycHggYmxhY2s7XFxuICAgIGhlaWdodDoyMHZoO1xcbiAgICB3aWR0aDoyMHZoO1xcbn1cXG5cXG4uY29udGFjdE51bWJlcntcXG4gICAgZm9udC1zaXplOjN2aDtcXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vSU1QT1JUUyBIRVJFXG5pbXBvcnQgSWNvbiBmcm9tICcuL3dhZmZsZXMuanBnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL0ltcG9ydCBjb250YWN0IHBob3Rvc1xuaW1wb3J0IFRydWZmbGVzIGZyb20gJy4vbWFuYWdlci5qcGcnO1xuaW1wb3J0IE11bmcgZnJvbSAnLi9jaGVmLmpwZyc7XG5pbXBvcnQgQ2hvd2RlciBmcm9tICcuL2hvc3QuanBnJztcblxuLy9JbXBvcnQgZm9vZCBwaG90b3NcbmltcG9ydCBwbGFpbldhZmZsZSBmcm9tICcuL3BsYWluV2FmZmxlLmpwZyc7Ly9cbmltcG9ydCBiZXJyeVdhZmZsZSBmcm9tICcuL2JlcnJ5V2FmZmxlLmpwZyc7Ly9BZGRlZFxuaW1wb3J0IGNob2NvV2FmZmxlIGZyb20gJy4vY2hvY29XYWZmbGUuanBnJzsvL1xuaW1wb3J0IHBiV2FmZmxlIGZyb20gJy4vcGJXYWZmbGUuanBnJzsvL1xuaW1wb3J0IGNoaWNrZW5XYWZmbGUgZnJvbSAnLi9jaGlja2VuV2FmZmxlLmpwZyc7Ly9cbmltcG9ydCB0YWxsV2FmZmxlIGZyb20gJy4vdGFsbFdhZmZsZS5qcGcnOy8vXG5pbXBvcnQgZnJ1aXQgZnJvbSAnLi9mcnVpdC5qcGcnOy8vXG5pbXBvcnQgYmFjb24gZnJvbSAnLi9iYWNvbi5qcGcnOy8vXG5pbXBvcnQgc2F1c2FnZSBmcm9tICcuL3NhdXNhZ2UuanBnJzsvL1xuaW1wb3J0IHRvYXN0IGZyb20gJy4vdG9hc3QuanBnJzsvL1xuaW1wb3J0IG9hdG1lYWwgZnJvbSAnLi9vYXRtZWFsLmpwZyc7Ly9cbmltcG9ydCBhcHBsZXNhdWNlIGZyb20gJy4vYXBwbGVzYXVjZS5qcGcnOy8vXG5pbXBvcnQgY29mZmVlIGZyb20gJy4vY29mZmVlLmpwZyc7Ly9cbmltcG9ydCBvaiBmcm9tICcuL29qLmpwZyc7Ly9cbmltcG9ydCBtaWxrIGZyb20gJy4vbWlsay5qcGcnOy8vXG5pbXBvcnQgbGF0dGUgZnJvbSAnLi9sYXR0ZS5qcGcnOy8vXG5pbXBvcnQgZXNwcmVzc28gZnJvbSAnLi9lc3ByZXNzby5qcGcnOy8vXG5pbXBvcnQgdGVhIGZyb20gJy4vdGVhLmpwZyc7Ly9cblxuXG4vL09CSkVDVFMgQU5EIEVMRU1FTlRTIEZPUiBFQUNIIFBBR0UgVE8gQkUgTE9BREVEXG5jb25zdCBtZW51RWxlbWVudHMgPSBbXTtcbmNvbnN0IG1lbnVPYmplY3RzID0gW107XG5jb25zdCBjb250YWN0RWxlbWVudHMgPSBbXTtcbmNvbnN0IGNvbnRhY3RPYmplY3RzID0gW107XG5jb25zdCByZXZpZXdFbGVtZW50cyA9IFtdO1xuY29uc3QgcmV2aWV3T2JqZWN0cyA9IFtdO1xuY29uc3QgaGVhZGVyRWxlbWVudHMgPSBbXTtcblxuLy9JTklUSUFMIFBBR0UgTE9BRCAoQXBwZW5kIGNvbW1vbmx5IHVzZWQgZWxlbWVudHMgdG8gdGhlIHBhZ2UgYW5kIGluaXRpYWxpemUgdGhlIG90aGVyIGNhcmRzIHRvIGJlIHVzZWQpXG5mdW5jdGlvbiBwYWdlTG9hZCgpe1xuICAgIC8vQXBwZW5kaW5nIGNoaWxkcmVuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFBhZ2VFbGVtZW50cyhlbGVtZW50KTtcblxuICAgIGNvbnN0IHJldmlld1F1b3RlcyA9IFtcIkJyaW9jaGUgZnJlbmNoIHRvYXN0IHBpbGVkIHVwIGhpZ2ggd2l0aCB3aGlwcGVkIGNyZWFtIGFuZCBtYXBsZSBzeXJ1cD8gV2h5IGVhdCBhbnl0aGluZyBidXQgYnJlYWtmYXN0P1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVpciBmcnVpdCBpcyBzbyBmcmVzaCwgeW91J2QgdGhpbmsgdGhleSBoYXZlIGFuIG9yY2hhcmQgcmlnaHQgb3V0IGJhY2shXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkkgY29tZSBoZXJlIGV2ZXJ5IFNhdHVyZGF5IHRvIHJlYWQgd2l0aCByZXNpZGVudCBjYXQgU251ZmZsZXMuIFRoZWlyIGJvdHRvbWxlc3MgY29mZmVlIGNhbid0IGJlIGJlYXQuXCJdO1xuICAgIGNvbnN0IHJldmlld05hbWVzID0gW1wiLUFsIFdhaXNlYXRpbmdcIixcIi1UcmluYSBCLiBIZWx0aGVlXCIsXCItSGFwcHkgTGVlIFJlZWRcIl07XG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTxyZXZpZXdOYW1lcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCByZXZpZXcgPSBuZXcgbmV3UmV2aWV3KHJldmlld1F1b3Rlc1tpXSxyZXZpZXdOYW1lc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGk9MDtpPHJldmlld09iamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgcmV2aWV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmV2aWV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwicmV2aWV3Q2FyZFwiKTtcbiAgICAgICAgICAgIGxldCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcXVvdGUudGV4dENvbnRlbnQgPSByZXZpZXdPYmplY3RzW2ldLnF1b3RlO1xuICAgICAgICAgICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncmV2aWV3Jyk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHJldmlld09iamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncmV2aWV3Q3JlZGl0Jyk7XG4gICAgICAgICAgICByZXZpZXdDYXJkLmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgICAgICAgICAgIHJldmlld0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICByZXZpZXdFbGVtZW50cy5wdXNoKHJldmlld0NhcmQpO1xuICAgICAgICB9XG5cbiAgICBjb25zdCBtZW51UGhvdG9zID0gW3BsYWluV2FmZmxlLGJlcnJ5V2FmZmxlLGNob2NvV2FmZmxlLHBiV2FmZmxlLGNoaWNrZW5XYWZmbGUsdGFsbFdhZmZsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZydWl0LGJhY29uLHNhdXNhZ2UsdG9hc3Qsb2F0bWVhbCxhcHBsZXNhdWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29mZmVlLG9qLG1pbGssbGF0dGUsZXNwcmVzc28sdGVhXTtcbiAgICBjb25zdCBtZW51VGl0bGVzID0gWydQbGFpbiBXYWZmbGVzJywgJ0JlcnJ5IFdhZmZsZXMnLCAnQ2hvY29sYXRlIFdhZmZsZXMnLCAnUGVhbnV0IEJ1dHRlciBXYWZmbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDaGlja2VuIGFuZCBXYWZmbGVzJywgJ1RoZSBCaWcgU3RhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ZydWl0IEN1cCcsJ0JhY29uJywnU2F1c2FnZScsJ1RvYXN0JywnT2F0bWVhbCcsJ0FwcGxlc2F1Y2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZScsJ09yYW5nZSBKdWljZScsJ01pbGsnLCdMYXR0ZScsJ0VzcHJlc3NvJywnVGVhJ107XG4gICAgY29uc3QgbWVudUNyZWRpdHMgPSBbJ1Bob3RvIGJ5IEpveWZ1bCBvbiBVbnNwbGFzaCcsJ1Bob3RvIGJ5IFNoZWVsYWggQnJlbm5hbiBvbiBVbnNwbGFzaCcsJ1Bob3RvIGJ5IGNocmlzIHBhbmFzIG9uIFVuc3BsYXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQaG90byBieSBLZXZpbiBXb2JsaWNrIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgVGltIFRvb21leSBvbiBVbnNwbGFzaCcsJ1Bob3RvIGJ5IFNsYXNoaW8gUGhvdG9ncmFwaHkgb24gVW5zcGxhc2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Bob3RvIGJ5IERhbmUgRGVhbmVyIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgTWljaGVsbGUgQFNoZWxseSBDYXB0dXJlcyBJdCBvbiBVbnNwbGFzaCcsJ1Bob3RvIGJ5IExpa2VNZWF0IG9uIFVuc3BsYXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQaG90byBieSBZdWtpa28gS2FuYWRhIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgTWFyZ2FyaXRhIFp1ZXZhIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgUmFjaGVsIExvdWdobWFuIG9uIFVuc3BsYXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQaG90byBieSBOYXRoYW4gRHVtbGFvIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgR3JlZyBSb3NlbmtlIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgYW5fdmlzaW9uIG9uIFVuc3BsYXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQaG90byBieSBKb3NodWEgSGlsbCBvbiBVbnNwbGFzaCcsJ1Bob3RvIGJ5IEphcmVrIENlYm9yc2tpIG9uIFVuc3BsYXNoJywnUGhvdG8gYnkgRHJldyBKZW1tZXR0IG9uIFVuc3BsYXNoJ107XG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTxtZW51UGhvdG9zLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IG1lYWwgPSBuZXcgbmV3TWVhbChtZW51VGl0bGVzW2ldLG1lbnVDcmVkaXRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bWVudU9iamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgbWVhbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBwaG90byA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGhvdG8uc3JjID0gbWVudVBob3Rvc1tpXTtcbiAgICAgICAgICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoXCJmb29kUGhvdG9cIik7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbWVudU9iamVjdHNbaV0udGl0bGU7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdmb29kVGl0bGUnKTtcbiAgICAgICAgICAgIGxldCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IG1lbnVPYmplY3RzW2ldLmNyZWRpdDtcbiAgICAgICAgICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKCdmb29kQ3JlZGl0Jyk7XG4gICAgICAgICAgICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgICAgICAgICBtZWFsQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChjcmVkaXQpO1xuICAgICAgICAgICAgbWVudUVsZW1lbnRzLnB1c2gobWVhbENhcmQpO1xuICAgICAgICB9XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGVzID0gW1wiSG9zdFwiLFwiQ2hlZlwiLFwiTWFuYWdlclwiXTtcbiAgICBjb25zdCBjb250YWN0UGhvdG9zID0gW0Nob3dkZXIsTXVuZyxUcnVmZmxlc107XG4gICAgY29uc3QgY29udGFjdE5hbWVzID0gW1wiQ2hvd2RlclwiLFwiTXVuZyBEYWhsXCIsXCJUcnVmZmxlc1wiXTtcbiAgICBjb25zdCBjb250YWN0TnVtYmVycyA9IFtcIig1NTUpIDgxNy01MzA5XCIsXCIoMjEyKSA2NjQtNzY2NVwiLFwiKDMxMSkgNTU1LTIzNjhcIl07XG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTxjb250YWN0UGhvdG9zLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGNvbnRhY3QgPSBuZXcgbmV3Q29udGFjdChjb250YWN0VGl0bGVzW2ldLGNvbnRhY3ROYW1lc1tpXSxjb250YWN0TnVtYmVyc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGk9MDtpPGNvbnRhY3RPYmplY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJsb2NrXCIpO1xuICAgICAgICAgICAgbGV0IHBob3RvID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwaG90by5zcmMgPSBjb250YWN0UGhvdG9zW2ldO1xuICAgICAgICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RQaG90b1wiKTtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0c1tpXS50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RUaXRsZScpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0TmFtZScpO1xuICAgICAgICAgICAgbGV0IG51bWJlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0c1tpXS5udW1iZXI7XG4gICAgICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdE51bWJlcicpO1xuICAgICAgICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICAgICAgY29udGFjdEVsZW1lbnRzLnB1c2goY29udGFjdENhcmQpO1xuICAgICAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vUGFnZSBGdW5jdGlvblxuZnVuY3Rpb24gYWRkUGFnZUVsZW1lbnRzKGVsZW1lbnQpe1xuICAgIC8vRUxFTUVOVFMgVE8gQkUgVVNFRCBPTiBFQUNIIFBBR0UgKEJhbm5lciwgSGVhZGVyLCBDb250ZW50LCBhbmQgQ3JlZGl0KVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBhZ2VMYXlvdXRcIik7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXJcIik7XG4gICAgYWRkQmFubmVyKGJhbm5lcik7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRIZWFkZXIoaGVhZGVyQmxvY2spO1xuICAgIGhlYWRlckJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXJCbG9jaycpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50QmxvY2snKTtcbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IE1hZSBNdSBvbiBVbnNwbGFzaFwiO1xuICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0XCIpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJCbG9jayk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XG59XG5cbi8vQmFubmVyIEZ1bmN0aW9uXG5mdW5jdGlvbiBhZGRCYW5uZXIoYmFubmVyKXtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG1haW5Mb2FkKTtcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IChcIkhvbWVcIik7XG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcImJhbm5lckxpbmtcIik7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixtZW51TG9hZCk7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAoXCJNZW51XCIpO1xuICAgIG1lbnVMaW5rLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXJMaW5rXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjb250YWN0TG9hZCk7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAoXCJDb250YWN0XCIpO1xuICAgIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXJMaW5rXCIpO1xuICAgIGNvbnN0IHNwYWNlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoc3BhY2VyMik7XG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICAgIGJhbm5lci5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG59XG5cbi8vSGVhZGVyIEZ1bmN0aW9uXG5mdW5jdGlvbiBhZGRIZWFkZXIoaGVhZGVyQmxvY2spe1xuICAgIGNvbnN0IHNtYWxsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNtYWxsSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFN0YWNrZWQgVXAhXCI7XG4gICAgc21hbGxIZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCdzbWFsbEhlYWRpbmcnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFN0YWNrZWQgVXAhXCI7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGluZycpO1xuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWdsaW5lLnRleHRDb250ZW50ID0gXCJTZXJ2aW5nIHRoZSBiZXN0IG1lYWwgb2YgdGhlIGRheSwgYWxsIGRheSwgZXZlcnkgZGF5XCI7XG4gICAgdGFnbGluZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGFnbGluZScpO1xuICAgIGhlYWRlckVsZW1lbnRzLnB1c2goaGVhZGluZyk7XG4gICAgaGVhZGVyRWxlbWVudHMucHVzaCh0YWdsaW5lKTtcbiAgICBoZWFkZXJFbGVtZW50cy5wdXNoKHNtYWxsSGVhZGluZyk7XG59XG5cbmZ1bmN0aW9uIHNtYWxsSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckJsb2NrXCIpO1xuICAgIGhlYWRlckJsb2NrLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnRzWzJdKTtcbn1cblxuZnVuY3Rpb24gYmlnSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckJsb2NrXCIpO1xuICAgIGhlYWRlckJsb2NrLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnRzWzBdKTtcbiAgICBoZWFkZXJCbG9jay5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50c1sxXSk7XG59XG5cblxuLy9PQkpFQ1QgQ1JFQVRPUlNcbmZ1bmN0aW9uIG5ld1JldmlldyhxdW90ZSxuYW1lKXtcbiAgICB0aGlzLnF1b3RlID0gcXVvdGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICByZXZpZXdPYmplY3RzLnB1c2godGhpcyk7XG59XG5cbmZ1bmN0aW9uIG5ld01lYWwodGl0bGUsY3JlZGl0KXtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jcmVkaXQgPSBjcmVkaXQ7XG4gICAgbWVudU9iamVjdHMucHVzaCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gbmV3Q29udGFjdCh0aXRsZSxuYW1lLG51bWJlcil7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgY29udGFjdE9iamVjdHMucHVzaCh0aGlzKTtcbn1cblxuXG4vL1BBR0UgTE9BREVSU1xuZnVuY3Rpb24gbWFpbkxvYWQoKXtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50QmxvY2tcIik7XG4gICAgYmlnSGVhZGVyKCk7XG4gICAgZm9yKGxldCBpPTA7aTwzO2krKyl7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3RWxlbWVudHNbaV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udGFjdExvYWQoKXtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBzbWFsbEhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRCbG9ja1wiKTtcbiAgICBmb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RWxlbWVudHNbaV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVudUxvYWQoKXtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBzbWFsbEhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRCbG9ja1wiKTtcbiAgICBjb25zdCB3YWZmbGVDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdhZmZsZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJtZW51QmxvY2tcIik7XG4gICAgY29uc3Qgc2lkZUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJtZW51QmxvY2tcIik7XG4gICAgY29uc3QgZHJpbmtDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm1lbnVCbG9ja1wiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdhZmZsZUNhdGVnb3J5KTtcbiAgICBmb3IobGV0IGk9MDtpPDY7aSsrKXtcbiAgICAgICAgd2FmZmxlQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQobWVudUVsZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQ2F0ZWdvcnkpO1xuICAgIGZvcihsZXQgaT02O2k8MTI7aSsrKXtcbiAgICAgICAgc2lkZUNhdGVnb3J5LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50c1tpXSk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtDYXRlZ29yeSk7XG4gICAgZm9yKGxldCBpPTEyO2k8bWVudUVsZW1lbnRzLmxlbmd0aDtpKyspe1xuICAgICAgICBkcmlua0NhdGVnb3J5LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50c1tpXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50QmxvY2tcIik7XG4gICAgY29uc3QgaGVhZGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckJsb2NrXCIpO1xuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUoaGVhZGVyQmxvY2suZmlyc3RDaGlsZCl7XG4gICAgICAgIGhlYWRlckJsb2NrLnJlbW92ZUNoaWxkKGhlYWRlckJsb2NrLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuXG4vL09OIFNUQVJUXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpO1xubWFpbkxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=