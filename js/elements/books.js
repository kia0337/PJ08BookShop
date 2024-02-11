"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../elements/api/api");
var apiItem_1 = require("../elements/api/apiItem");
var card_1 = require("../elements/item/card");
var sidebar_1 = require("./sidebar");
var bookIds = JSON.parse((_a = window.localStorage.getItem("cart")) !== null && _a !== void 0 ? _a : "[]");
var cart = new card_1.default(bookIds);
var bookList = document.getElementById("bookList");
var sidebar = document.getElementById("sidebar");
var initialCategory = (0, apiItem_1.getCategory)(sidebar);
var loader = new api_1.default(initialCategory, 0, 6);
var loadBtn = (document.getElementById("loadBtn"));
loadBtn.addEventListener("click", function () {
    var startIndex = parseInt(loadBtn.dataset.startIndex ? loadBtn.dataset.startIndex : "0");
    loader.setParams((0, apiItem_1.getCategory)(sidebar), startIndex, 6);
    loader.getBooks().then(function (data) {
        (0, apiItem_1.bookListRender)(data, bookList, cart);
        loadBtn.dataset.startIndex = (startIndex + 6).toString();
    });
});
loader.getBooks().then(function (data) {
    (0, apiItem_1.bookListRender)(data, bookList, cart);
    loadBtn.dataset.startIndex = "6";
});
var sidebarMenu = new sidebar_1.default(loader, bookList, cart);
sidebarMenu.render();
