"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = require("./MallardDuck");
var ModelDuck_1 = require("./ModelDuck");
var Fly_1 = require("./Fly");
var miniDuckSimulator = function () {
    var mallard = new MallardDuck_1.default();
    mallard.preformQuack();
    mallard.preformFly();
    var model = new ModelDuck_1.default();
    model.preformFly();
    model.setFlyBehavior(new Fly_1.FlyRocketPowered());
    model.preformFly();
};
miniDuckSimulator();
