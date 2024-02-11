"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiItem_1 = require("./api/apiItem");
var Sidebar = /** @class */ (function () {
    function Sidebar(loader, bookList, cart) {
        this.links = [
            "Architecture",
            "Art & Fashion",
            "Biography",
            "Business",
            "Crafts & Hobbies",
            "Drama",
            "Fiction",
            "Food & Drink",
            "Health & Wellbeing",
            "History & Politics",
            "Humor",
            "Poetry",
            "Psychology",
            "Science",
            "Technology",
            "Travel & Maps"
        ];
        this.active = 0;
        this.loader = loader;
        this.bookList = bookList;
        this.cart = cart;
    }
    Sidebar.prototype.render = function () {
        var _this = this;
        var element = (document.getElementById("sidebar"));
        element.innerHTML = "";
        var loadBtn = (document.getElementById("loadBtn"));
        var _loop_1 = function (i) {
            var li = document.createElement("li");
            li.classList.add("sidebar__link");
            li.innerText = this_1.links[i];
            if (i === this_1.active) {
                li.classList.add("sidebar__link__active");
                element.dataset.category = this_1.links[i];
            }
            else {
                this_1.bookList.innerHTML = '';
                li.addEventListener("click", function (e) {
                    _this.loader.setParams(_this.links[i], 0, 6);
                    _this.loader.getBooks().then(function (data) {
                        (0, apiItem_1.bookListRender)(data, _this.bookList, _this.cart);
                        loadBtn.dataset.startIndex = "6";
                    });
                    _this.active = i;
                    _this.render();
                });
            }
            element.appendChild(li);
        };
        var this_1 = this;
        for (var i = 0; i < this.links.length; i++) {
            _loop_1(i);
        }
    };
    return Sidebar;
}());
exports.default = Sidebar;
