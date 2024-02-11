/*! For license information please see index.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./js/elements/api/api.js":function(__unused_webpack_module,exports){"use strict";eval('\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator["throw"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    "throw": verb(1),\n    "return": verb(2)\n  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError("Generator is already executing.");\n    while (g && (g = 0, op[0] && (_ = 0)), _) try {\n      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n        case 7:\n          op = _.ops.pop();\n          _.trys.pop();\n          continue;\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n            _.ops.push(op);\n            break;\n          }\n          if (t[2]) _.ops.pop();\n          _.trys.pop();\n          continue;\n      }\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nvar settings = {\n  BOOKS_API_KEY: "AIzaSyC8zjtqULIX-63Q17PB9Qp0JariKSp5-yE"\n};\nvar BookLoader = /** @class */function () {\n  function BookLoader(category, startIndex, maxResults) {\n    this.category = category;\n    this.startIndex = Number(startIndex);\n    this.maxResults = maxResults;\n    if (this.params) {\n      this.params.append("q", "\\"subject:".concat(category, "\\""));\n      this.params.append("key", settings.BOOKS_API_KEY);\n      this.params.append("printType", "books");\n      this.params.append("startIndex", startIndex.toString());\n      this.params.append("maxResults", maxResults.toString());\n    }\n    this.apiUrl = "https://www.googleapis.com/books/v1/volumes?";\n  }\n  BookLoader.prototype.setParams = function (category, startIndex, maxResults) {\n    var params = new URLSearchParams();\n    params.append("q", "\\"subject:".concat(category, "\\""));\n    params.append("key", settings.BOOKS_API_KEY);\n    params.append("printType", "books");\n    params.append("startIndex", startIndex.toString());\n    params.append("maxResults", maxResults.toString());\n    this.params = params;\n    return params;\n  };\n  BookLoader.prototype.getBooks = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var response;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            return [4 /*yield*/, fetch("".concat(this.apiUrl).concat(this.params ? this.params : ""))];\n          case 1:\n            response = _a.sent();\n            return [2 /*return*/, response.json()];\n        }\n      });\n    });\n  };\n  return BookLoader;\n}();\nexports["default"] = BookLoader;\n\n//# sourceURL=webpack://bookshop/./js/elements/api/api.js?')},"./js/elements/api/apiItem.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports.getCategory = exports.bookListRender = void 0;\nvar book_1 = __webpack_require__(/*! ../item/book */ "./js/elements/item/book.js");\nfunction bookListRender(data, bookList, cart) {\n  var _a, _b;\n  var items = data["items"];\n  if (items && items.length) {\n    var books = [];\n    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {\n      var item = items_1[_i];\n      var thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "https://picsum.photos/220/340";\n      books.push(new book_1.Book(item.id, item.volumeInfo.title, item.saleInfo.saleability, thumbnail, item.volumeInfo.description, item.volumeInfo.authors, item.volumeInfo.averageRating, item.volumeInfo.ratingsCount, cart, (_a = item.saleInfo.listPrice) === null || _a === void 0 ? void 0 : _a.amount, (_b = item.saleInfo.listPrice) === null || _b === void 0 ? void 0 : _b.currencyCode));\n    }\n    for (var _c = 0, books_1 = books; _c < books_1.length; _c++) {\n      var book = books_1[_c];\n      bookList.appendChild(book.render());\n    }\n  }\n}\nexports.bookListRender = bookListRender;\nfunction getCategory(sidebar) {\n  return sidebar.dataset.category ? sidebar.dataset.category : "Architecture";\n}\nexports.getCategory = getCategory;\n\n//# sourceURL=webpack://bookshop/./js/elements/api/apiItem.js?')},"./js/elements/books.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('\n\nvar _a;\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nvar api_1 = __webpack_require__(/*! ../elements/api/api */ "./js/elements/api/api.js");\nvar apiItem_1 = __webpack_require__(/*! ../elements/api/apiItem */ "./js/elements/api/apiItem.js");\nvar card_1 = __webpack_require__(/*! ../elements/item/card */ "./js/elements/item/card.js");\nvar sidebar_1 = __webpack_require__(/*! ./sidebar */ "./js/elements/sidebar.js");\nvar bookIds = JSON.parse((_a = window.localStorage.getItem("cart")) !== null && _a !== void 0 ? _a : "[]");\nvar cart = new card_1["default"](bookIds);\nvar bookList = document.getElementById("bookList");\nvar sidebar = document.getElementById("sidebar");\nvar initialCategory = (0, apiItem_1.getCategory)(sidebar);\nvar loader = new api_1["default"](initialCategory, 0, 6);\nvar loadBtn = document.getElementById("loadBtn");\nloadBtn.addEventListener("click", function () {\n  var startIndex = parseInt(loadBtn.dataset.startIndex ? loadBtn.dataset.startIndex : "0");\n  loader.setParams((0, apiItem_1.getCategory)(sidebar), startIndex, 6);\n  loader.getBooks().then(function (data) {\n    (0, apiItem_1.bookListRender)(data, bookList, cart);\n    loadBtn.dataset.startIndex = (startIndex + 6).toString();\n  });\n});\nloader.getBooks().then(function (data) {\n  (0, apiItem_1.bookListRender)(data, bookList, cart);\n  loadBtn.dataset.startIndex = "6";\n});\nvar sidebarMenu = new sidebar_1["default"](loader, bookList, cart);\nsidebarMenu.render();\n\n//# sourceURL=webpack://bookshop/./js/elements/books.js?')},"./js/elements/item/book.js":(__unused_webpack_module,exports)=>{"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports.Book = void 0;\nvar Book = /** @class */function () {\n  function Book(id, title, saleability, imgSrc, description, authors, rating, ratingsCount, cart, price, currency) {\n    this.isInCart = false;\n    this.id = id;\n    if (authors) {\n      this.authors = authors.join(", ");\n    } else {\n      this.authors = "";\n    }\n    this.title = title;\n    this.description = description ? description : "";\n    this.imgSrc = imgSrc;\n    this.saleability = saleability === "FOR_SALE" ? true : false;\n    if (saleability && price && currency) {\n      this.price = price;\n      this.currency = currency;\n    }\n    this.rating = rating;\n    this.ratingsCount = ratingsCount;\n    this.cart = cart;\n    this.isInCart = cart.isInCart(this.id);\n  }\n  Book.prototype.render = function () {\n    var bookElement = document.createElement("div");\n    bookElement.innerHTML = "\\n    <div class=\\"book\\">\\n            <div class=\\"book__poster\\">\\n              <img\\n                src=\\"".concat(this.imgSrc, "\\"\\n                alt=\\"").concat(this.title, "\\"\\n                width=\\"212\\"\\n                height=\\"auto\\"\\n              />\\n            </div>\\n            <div class=\\"book__details\\">\\n              <div class=\\"book__author\\">").concat(this.authors, "</div>\\n              <div class=\\"book__title\\">").concat(this.title, "</div>\\n              <div class=\\"book__rating\\">\\n                <div class=\\"book__rating__stars\\" style=\\"--rating: ").concat(this.rating ? this.rating : 0, "\\"></div>\\n                <div class=\\"book__rating__reviews\\">").concat(this.ratingsCount ? this.ratingsCount : 0, " review</div>\\n              </div>\\n              <div class=\\"book__description\\">\\n              ").concat(this.description.substring(0, 100)).concat(this.description.length > 100 ? "..." : "", "\\n              </div>\\n              <div class=\\"book__price\\">").concat(this.saleability ? [this.price, this.currency].join(" ") : "NOT FOR SALE", "</div>\\n              <button class=\\"btn ").concat(this.isInCart ? "btn__secondary" : "btn__first", "\\" id=\\"book__").concat(this.id, "\\" ").concat(this.saleability ? "" : "disabled", ">").concat(this.isInCart ? "In the cart" : "Buy now", "</button>\\n            </div>\\n          </div>\\n    ");\n    var addToCartBtn = bookElement.querySelector("#book__".concat(this.id));\n    this.addToCartClick(addToCartBtn);\n    return bookElement;\n  };\n  Book.prototype.addToCartClick = function (btnElement) {\n    var _this = this;\n    btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener("click", function () {\n      var rerenderBtn = document.getElementById("book__".concat(_this.id));\n      if (_this.isInCart) {\n        _this.removeFromCart();\n        rerenderBtn.classList.replace("btn__secondary", "btn__first");\n        rerenderBtn.innerText = "Buy now";\n      } else {\n        _this.addToCart();\n        rerenderBtn.classList.replace("btn__first", "btn__secondary");\n        rerenderBtn.innerText = "In the cart";\n      }\n    });\n  };\n  Book.prototype.addToCart = function () {\n    if (!this.cart.isInCart(this.id)) {\n      this.cart.add(this.id);\n    }\n    this.isInCart = true;\n  };\n  Book.prototype.removeFromCart = function () {\n    this.cart.remove(this.id);\n    this.isInCart = false;\n  };\n  return Book;\n}();\nexports.Book = Book;\n\n//# sourceURL=webpack://bookshop/./js/elements/item/book.js?')},"./js/elements/item/card.js":(__unused_webpack_module,exports)=>{"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nvar Cart = /** @class */function () {\n  function Cart(bookIds) {\n    this.bookIds = [];\n    this.bookIds = bookIds;\n    this.itemsElement = document.getElementById("basketItems");\n    this.updateStorage();\n  }\n  Cart.prototype.isInCart = function (bookId) {\n    return this.bookIds.includes(bookId);\n  };\n  Cart.prototype.add = function (bookId) {\n    this.bookIds.push(bookId);\n    this.updateStorage();\n  };\n  Cart.prototype.remove = function (bookId) {\n    var index = this.bookIds.indexOf(bookId);\n    if (index > -1) {\n      this.bookIds.splice(index, 1);\n      this.updateStorage();\n    }\n  };\n  Cart.prototype.updateStorage = function () {\n    window.localStorage.setItem("cart", JSON.stringify(this.bookIds));\n    var itemsCount = this.bookIds.length;\n    if (itemsCount) {\n      this.itemsElement.setAttribute("style", "display: flex;");\n      this.itemsElement.innerText = itemsCount.toString();\n    } else {\n      this.itemsElement.setAttribute("style", "display: none;");\n      this.itemsElement.innerText = "";\n    }\n  };\n  return Cart;\n}();\nexports["default"] = Cart;\n\n//# sourceURL=webpack://bookshop/./js/elements/item/card.js?')},"./js/elements/sidebar.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nvar apiItem_1 = __webpack_require__(/*! ./api/apiItem */ "./js/elements/api/apiItem.js");\nvar Sidebar = /** @class */function () {\n  function Sidebar(loader, bookList, cart) {\n    this.links = ["Architecture", "Art & Fashion", "Biography", "Business", "Crafts & Hobbies", "Drama", "Fiction", "Food & Drink", "Health & Wellbeing", "History & Politics", "Humor", "Poetry", "Psychology", "Science", "Technology", "Travel & Maps"];\n    this.active = 0;\n    this.loader = loader;\n    this.bookList = bookList;\n    this.cart = cart;\n  }\n  Sidebar.prototype.render = function () {\n    var _this = this;\n    var element = document.getElementById("sidebar");\n    element.innerHTML = "";\n    var loadBtn = document.getElementById("loadBtn");\n    var _loop_1 = function _loop_1(i) {\n      var li = document.createElement("li");\n      li.classList.add("sidebar__link");\n      li.innerText = this_1.links[i];\n      if (i === this_1.active) {\n        li.classList.add("sidebar__link__active");\n        element.dataset.category = this_1.links[i];\n      } else {\n        this_1.bookList.innerHTML = \'\';\n        li.addEventListener("click", function (e) {\n          _this.loader.setParams(_this.links[i], 0, 6);\n          _this.loader.getBooks().then(function (data) {\n            (0, apiItem_1.bookListRender)(data, _this.bookList, _this.cart);\n            loadBtn.dataset.startIndex = "6";\n          });\n          _this.active = i;\n          _this.render();\n        });\n      }\n      element.appendChild(li);\n    };\n    var this_1 = this;\n    for (var i = 0; i < this.links.length; i++) {\n      _loop_1(i);\n    }\n  };\n  return Sidebar;\n}();\nexports["default"] = Sidebar;\n\n//# sourceURL=webpack://bookshop/./js/elements/sidebar.js?')},"./js/elements/slider.js":()=>{eval('var Slider = /** @class */function () {\n  function Slider(items, element, controls) {\n    var _this = this;\n    this.items = items;\n    this.currentItem = this.items[0];\n    this.element = element;\n    this.controls = controls;\n    this.initControls();\n    this.setImage();\n    this.intervalId = setInterval(function () {\n      _this.switchItem();\n    }, 5000);\n  }\n  Slider.prototype.getNextItem = function (nextId) {\n    if (!nextId) {\n      nextId = this.currentItem.id + 1;\n    }\n    var nextItem = this.items.find(function (item) {\n      return item.id === nextId;\n    });\n    if (!nextItem) {\n      return this.items[0];\n    }\n    return nextItem;\n  };\n  Slider.prototype.initControls = function () {\n    var _this = this;\n    var _a;\n    var _loop_1 = function _loop_1(item) {\n      var control = document.createElement("a");\n      control.classList.add("slider__control");\n      control.id = "slide-".concat(item.id);\n      control.addEventListener(\'click\', function () {\n        _this.switchItem(item.id);\n        clearInterval(_this.intervalId);\n        _this.intervalId = setInterval(function () {\n          _this.switchItem();\n        }, 5000);\n      });\n      this_1.controls.appendChild(control);\n    };\n    var this_1 = this;\n    for (var _i = 0, _b = this.items; _i < _b.length; _i++) {\n      var item = _b[_i];\n      _loop_1(item);\n    }\n    (_a = this.controls.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add("slider__control__active");\n  };\n  Slider.prototype.switchItem = function (nextId) {\n    var nextItem = this.getNextItem(nextId);\n    var currentControl = document.getElementById("slide-".concat(this.currentItem.id));\n    currentControl.classList.remove("slider__control__active");\n    this.currentItem = nextItem;\n    var nextControl = document.getElementById("slide-".concat(this.currentItem.id));\n    nextControl.classList.add("slider__control__active");\n    this.setImage();\n  };\n  Slider.prototype.setImage = function () {\n    this.element.src = this.currentItem.src;\n    this.element.style.animation = "none";\n    this.element.offsetHeight;\n    this.element.style.animation = "fade-in 2s";\n  };\n  return Slider;\n}();\nvar sliderImg = document.getElementById("sliderImg");\nvar sliderItems = [{\n  id: 1,\n  src: "../../img/placeholder1.svg"\n}, {\n  id: 2,\n  src: "../../img/placeholder2.svg"\n}, {\n  id: 3,\n  src: "../../img/placeholder3.svg"\n}];\nvar sliderControls = document.getElementById("sliderControls");\nvar slider = new Slider(sliderItems, sliderImg, sliderControls);\n\n//# sourceURL=webpack://bookshop/./js/elements/slider.js?')},"./js/main.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\n__webpack_require__(/*! ./elements/slider */ "./js/elements/slider.js");\n__webpack_require__(/*! ./elements/books */ "./js/elements/books.js");\n\n//# sourceURL=webpack://bookshop/./js/main.js?')},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheet_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet/main.css */ "./stylesheet/main.css");\n/* harmony import */ var _stylesheet_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/main.js */ "./js/main.js");\n\n\n\n//# sourceURL=webpack://bookshop/./src/index.ts?')},"./stylesheet/main.css":()=>{eval('throw new Error("Module parse failed: Unexpected character \'@\' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @charset \\"UTF-8\\";\\n| @import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,900;1,500&display=swap\\");\\n| @import url(\\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\\");");\n\n//# sourceURL=webpack://bookshop/./stylesheet/main.css?')}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.ts")})();