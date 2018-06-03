"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var Fly_1 = require("./Fly");
var Quack_1 = require("./Quack");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new Fly_1.FlyWithWings();
        _this.quackBehavior = new Quack_1.Quack();
        return _this;
    }
    return MallardDuck;
}(Duck_1.default));
exports.default = MallardDuck;
