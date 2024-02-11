"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, saleability, imgSrc, description, authors, rating, ratingsCount, cart, price, currency) {
        this.isInCart = false;
        this.id = id;
        if (authors) {
            this.authors = authors.join(", ");
        }
        else {
            this.authors = "";
        }
        this.title = title;
        this.description = description ? description : "";
        this.imgSrc = imgSrc;
        this.saleability = saleability === "FOR_SALE" ? true : false;
        if (saleability && price && currency) {
            this.price = price;
            this.currency = currency;
        }
        this.rating = rating;
        this.ratingsCount = ratingsCount;
        this.cart = cart;
        this.isInCart = cart.isInCart(this.id);
    }
    Book.prototype.render = function () {
        var bookElement = document.createElement("div");
        bookElement.innerHTML = "\n    <div class=\"book\">\n            <div class=\"book__poster\">\n              <img\n                src=\"".concat(this.imgSrc, "\"\n                alt=\"").concat(this.title, "\"\n                width=\"212\"\n                height=\"auto\"\n              />\n            </div>\n            <div class=\"book__details\">\n              <div class=\"book__author\">").concat(this.authors, "</div>\n              <div class=\"book__title\">").concat(this.title, "</div>\n              <div class=\"book__rating\">\n                <div class=\"book__rating__stars\" style=\"--rating: ").concat(this.rating ? this.rating : 0, "\"></div>\n                <div class=\"book__rating__reviews\">").concat(this.ratingsCount ? this.ratingsCount : 0, " review</div>\n              </div>\n              <div class=\"book__description\">\n              ").concat(this.description.substring(0, 100)).concat(this.description.length > 100 ? "..." : "", "\n              </div>\n              <div class=\"book__price\">").concat(this.saleability
            ? [this.price, this.currency].join(" ")
            : "NOT FOR SALE", "</div>\n              <button class=\"btn ").concat(this.isInCart ? "btn__secondary" : "btn__first", "\" id=\"book__").concat(this.id, "\" ").concat(this.saleability ? "" : "disabled", ">").concat(this.isInCart ? "In the cart" : "Buy now", "</button>\n            </div>\n          </div>\n    ");
        var addToCartBtn = (bookElement.querySelector("#book__".concat(this.id)));
        this.addToCartClick(addToCartBtn);
        return bookElement;
    };
    Book.prototype.addToCartClick = function (btnElement) {
        var _this = this;
        btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener("click", function () {
            var rerenderBtn = (document.getElementById("book__".concat(_this.id)));
            if (_this.isInCart) {
                _this.removeFromCart();
                rerenderBtn.classList.replace("btn__secondary", "btn__first");
                rerenderBtn.innerText = "Buy now";
            }
            else {
                _this.addToCart();
                rerenderBtn.classList.replace("btn__first", "btn__secondary");
                rerenderBtn.innerText = "In the cart";
            }
        });
    };
    Book.prototype.addToCart = function () {
        if (!this.cart.isInCart(this.id)) {
            this.cart.add(this.id);
        }
        this.isInCart = true;
    };
    Book.prototype.removeFromCart = function () {
        this.cart.remove(this.id);
        this.isInCart = false;
    };
    return Book;
}());
exports.Book = Book;
