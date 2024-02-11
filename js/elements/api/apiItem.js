"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = exports.bookListRender = void 0;
var book_1 = require("../item/book");
function bookListRender(data, bookList, cart) {
    var _a, _b;
    var items = data["items"];
    if (items && items.length) {
        var books = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var thumbnail = item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : "https://picsum.photos/220/340";
            books.push(new book_1.Book(item.id, item.volumeInfo.title, item.saleInfo.saleability, thumbnail, item.volumeInfo.description, item.volumeInfo.authors, item.volumeInfo.averageRating, item.volumeInfo.ratingsCount, cart, (_a = item.saleInfo.listPrice) === null || _a === void 0 ? void 0 : _a.amount, (_b = item.saleInfo.listPrice) === null || _b === void 0 ? void 0 : _b.currencyCode));
        }
        for (var _c = 0, books_1 = books; _c < books_1.length; _c++) {
            var book = books_1[_c];
            bookList.appendChild(book.render());
        }
    }
}
exports.bookListRender = bookListRender;
function getCategory(sidebar) {
    return sidebar.dataset.category ? sidebar.dataset.category : "Architecture";
}
exports.getCategory = getCategory;
