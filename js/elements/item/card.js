"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart(bookIds) {
        this.bookIds = [];
        this.bookIds = bookIds;
        this.itemsElement = document.getElementById("basketItems");
        this.updateStorage();
    }
    Cart.prototype.isInCart = function (bookId) {
        return this.bookIds.includes(bookId);
    };
    Cart.prototype.add = function (bookId) {
        this.bookIds.push(bookId);
        this.updateStorage();
    };
    Cart.prototype.remove = function (bookId) {
        var index = this.bookIds.indexOf(bookId);
        if (index > -1) {
            this.bookIds.splice(index, 1);
            this.updateStorage();
        }
    };
    Cart.prototype.updateStorage = function () {
        window.localStorage.setItem("cart", JSON.stringify(this.bookIds));
        var itemsCount = this.bookIds.length;
        if (itemsCount) {
            this.itemsElement.setAttribute("style", "display: flex;");
            this.itemsElement.innerText = itemsCount.toString();
        }
        else {
            this.itemsElement.setAttribute("style", "display: none;");
            this.itemsElement.innerText = "";
        }
    };
    return Cart;
}());
exports.default = Cart;
