"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
        this.fly = function () {
            console.log("날고 있어요!");
        };
    }
    return FlyWithWings;
}());
exports.FlyWithWings = FlyWithWings;
var FlyWithNoWay = /** @class */ (function () {
    function FlyWithNoWay() {
        this.fly = function () {
            console.log("저는 못날아요");
        };
    }
    return FlyWithNoWay;
}());
exports.FlyWithNoWay = FlyWithNoWay;
var FlyRocketPowered = /** @class */ (function () {
    function FlyRocketPowered() {
        this.fly = function () {
            console.log("로켓 추진으로 날아갑니다.");
        };
    }
    return FlyRocketPowered;
}());
exports.FlyRocketPowered = FlyRocketPowered;
