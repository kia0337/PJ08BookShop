var Slider = /** @class */ (function () {
    function Slider(items, element, controls) {
        var _this = this;
        this.items = items;
        this.currentItem = this.items[0];
        this.element = element;
        this.controls = controls;
        this.initControls();
        this.setImage();
        this.intervalId = setInterval(function () {
            _this.switchItem();
        }, 5000);
    }
    Slider.prototype.getNextItem = function (nextId) {
        if (!nextId) {
            nextId = this.currentItem.id + 1;
        }
        var nextItem = this.items.find(function (item) { return item.id === nextId; });
        if (!nextItem) {
            return this.items[0];
        }
        return nextItem;
    };
    Slider.prototype.initControls = function () {
        var _this = this;
        var _a;
        var _loop_1 = function (item) {
            var control = document.createElement("a");
            control.classList.add("slider__control");
            control.id = "slide-".concat(item.id);
            control.addEventListener('click', function () {
                _this.switchItem(item.id);
                clearInterval(_this.intervalId);
                _this.intervalId = setInterval(function () {
                    _this.switchItem();
                }, 5000);
            });
            this_1.controls.appendChild(control);
        };
        var this_1 = this;
        for (var _i = 0, _b = this.items; _i < _b.length; _i++) {
            var item = _b[_i];
            _loop_1(item);
        }
        (_a = this.controls.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add("slider__control__active");
    };
    Slider.prototype.switchItem = function (nextId) {
        var nextItem = this.getNextItem(nextId);
        var currentControl = (document.getElementById("slide-".concat(this.currentItem.id)));
        currentControl.classList.remove("slider__control__active");
        this.currentItem = nextItem;
        var nextControl = document.getElementById("slide-".concat(this.currentItem.id));
        nextControl.classList.add("slider__control__active");
        this.setImage();
    };
    Slider.prototype.setImage = function () {
        this.element.src = this.currentItem.src;
        this.element.style.animation = "none";
        this.element.offsetHeight;
        this.element.style.animation = "fade-in 2s";
    };
    return Slider;
}());
var sliderImg = (document.getElementById("sliderImg"));
var sliderItems = [
    { id: 1, src: "../../img/placeholder1.svg" },
    { id: 2, src: "../../img/placeholder2.svg" },
    { id: 3, src: "../../img/placeholder3.svg" },
];
var sliderControls = (document.getElementById("sliderControls"));
var slider = new Slider(sliderItems, sliderImg, sliderControls);
