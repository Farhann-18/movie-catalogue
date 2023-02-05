/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n\n    .app-bar .app-bar__brand h1 {\n        font-size: 26px;\n    }\n\n    .app-bar .app-bar__menu {\n        display: none;\n    }\n\n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n\n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n\n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 100%;\n        text-align: center;\n        margin: 0;\n    }\n\n    .movies {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n\n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n    .movie-bg .movie-bg-header h1 {\n         font-size: 28px;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 28px;\n    }\n}\n\n@media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n    \n}\n\n@media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n          .movie-bg .movie-bg-header h1 {\n              font-size: 48px;\n          }\n    \n}\n\n@media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n          .movie-bg .movie-bg-header h1 {\n              font-size: 48px;\n          }\n}", "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,+BAA+B;QAC/B,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,WAAW;IACf;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,qBAAqB;QACrB,WAAW;QACX,kBAAkB;QAClB,SAAS;IACb;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,+BAA+B;IACnC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;IACA;SACK,eAAe;IACpB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;;AAEJ;;AAEA;IACI;QACI,qCAAqC;IACzC;UACM;cACI,eAAe;UACnB;;AAEV;;AAEA;IACI;QACI,qCAAqC;IACzC;UACM;cACI,eAAe;UACnB;AACV","sourcesContent":["@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n\n    .app-bar .app-bar__brand h1 {\n        font-size: 26px;\n    }\n\n    .app-bar .app-bar__menu {\n        display: none;\n    }\n\n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n\n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n\n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 100%;\n        text-align: center;\n        margin: 0;\n    }\n\n    .movies {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n\n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n    .movie-bg .movie-bg-header h1 {\n         font-size: 28px;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 28px;\n    }\n}\n\n@media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n    \n}\n\n@media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n          .movie-bg .movie-bg-header h1 {\n              font-size: 48px;\n          }\n    \n}\n\n@media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n          .movie-bg .movie-bg-header h1 {\n              font-size: 48px;\n          }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6835), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    background-color: #fff;\r\n    transition: ease 300ms;\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 100px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #9c9c9c;\r\n    border-radius: 100px;\r\n    height: 120px;\r\n}\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    top: 0;\r\n    z-index: 1000;\r\n    position: relative;\r\n    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */\r\n    /* height: 70px; */\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #1a1a1a;\r\n    /* text-transform: uppercase; */\r\n    font-size: 22px;\r\n    font-variant: small-caps;\r\n    font-weight: bold;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    font-weight: 500;\r\n}\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n    font-weight: bolder;\r\n}\r\n.app-bar .app-bar__navigation ul li a.active {\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n    background-position: center;\r\n    object-fit: cover;\r\n    background-size: cover;\r\n    transition: ease-in 300ms;\r\n    border-radius: 12px;\r\n    margin-bottom: 13px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 0px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    width: 100%;\r\n    margin: 0 0 10px 0;\r\n    overflow: hidden;\r\n    font-weight: 500;\r\n    color: #000;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n        width: 100%;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n    display: none;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n\r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter #footerTools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n/*\r\n  Button\r\n*/\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    background-color: #DB0000;\r\n    border: 1px solid #770000;\r\n    border-radius: 4px;\r\n\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n\r\n    cursor: pointer;\r\n    transition: .15s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #DB0000BB;\r\n}\r\n\r\n.btn:active {\r\n    background-color: #DB0000DD;\r\n}\r\n\r\n.btn:focus-visible {\r\n    outline: 3px solid #DB000055;\r\n}\r\n\r\n.movie-bg {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") !important;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    object-position: center;\r\n    object-fit: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.movie-bg .movie-bg-header {\r\n    padding-top: 160px;\r\n}\r\n\r\n.movie-bg .movie-bg-header h1 {\r\n    font-size: 31px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}\r\n.movie-bg .movie-bg-header p {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    background-color: #fff;\r\n    transition: ease 300ms;\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 100px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #9c9c9c;\r\n    border-radius: 100px;\r\n    height: 120px;\r\n}\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    top: 0;\r\n    z-index: 1000;\r\n    position: relative;\r\n    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */\r\n    /* height: 70px; */\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #1a1a1a;\r\n    /* text-transform: uppercase; */\r\n    font-size: 22px;\r\n    font-variant: small-caps;\r\n    font-weight: bold;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    font-weight: 500;\r\n}\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n    font-weight: bolder;\r\n}\r\n.app-bar .app-bar__navigation ul li a.active {\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n    background-position: center;\r\n    object-fit: cover;\r\n    background-size: cover;\r\n    transition: ease-in 300ms;\r\n    border-radius: 12px;\r\n    margin-bottom: 13px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 0px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    width: 100%;\r\n    margin: 0 0 10px 0;\r\n    overflow: hidden;\r\n    font-weight: 500;\r\n    color: #000;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n        width: 100%;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n    display: none;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n\r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter #footerTools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n/*\r\n  Button\r\n*/\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    background-color: #DB0000;\r\n    border: 1px solid #770000;\r\n    border-radius: 4px;\r\n\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n\r\n    cursor: pointer;\r\n    transition: .15s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #DB0000BB;\r\n}\r\n\r\n.btn:active {\r\n    background-color: #DB0000DD;\r\n}\r\n\r\n.btn:focus-visible {\r\n    outline: 3px solid #DB000055;\r\n}\r\n\r\n.movie-bg {\r\n    background-image: url('../public/images/bg_hero1.jpg') !important;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    object-position: center;\r\n    object-fit: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.movie-bg .movie-bg-header {\r\n    padding-top: 160px;\r\n}\r\n\r\n.movie-bg .movie-bg-header h1 {\r\n    font-size: 31px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}\r\n.movie-bg .movie-bg-header p {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9362:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5948);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 4915:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(890);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			400: 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmovie_catalogue"] = self["webpackChunkmovie_catalogue"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [179,194,2,17,337,268,378,924], () => (__webpack_require__(5253)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app~4e5ec22b.bundle.js.map