"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
        var _this = this;
        this.preformFly = function () {
            _this.flyBehavior.fly();
        };
        this.preformQuack = function () {
            _this.quackBehavior.quack();
        };
        this.display = function () {
            console.log("내가 보이나요?");
        };
        this.swim = function () {
            console.log("풍덩 풍덩 저는 수영하고 있어요~");
        };
        this.setFlyBehavior = function (flyBehavior) {
            _this.flyBehavior = flyBehavior;
        };
        this.setQuackBehavior = function (quackBehavior) {
            _this.quackBehavior = quackBehavior;
        };
    }
    return Duck;
}());
exports.default = Duck;
