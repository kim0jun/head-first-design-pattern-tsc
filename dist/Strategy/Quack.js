"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quack = /** @class */ (function () {
    function Quack() {
        this.quack = function () {
            console.log("꽥");
        };
    }
    return Quack;
}());
exports.Quack = Quack;
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
        this.quack = function () {
            console.log("<< 조용~ >>");
        };
    }
    return MuteQuack;
}());
exports.MuteQuack = MuteQuack;
var Squack = /** @class */ (function () {
    function Squack() {
        this.quack = function () {
            console.log("<< 조용~ >>");
        };
    }
    return Squack;
}());
exports.Squack = Squack;
