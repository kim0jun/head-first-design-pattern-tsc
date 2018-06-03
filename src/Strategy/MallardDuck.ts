import Duck from "./Duck";
import { FlyBehavior, QuackBehavior } from "./Interface";
import { FlyWithWings } from "./Fly";
import { Quack } from "./Quack";

export default class MallardDuck extends Duck {
    protected flyBehavior: FlyBehavior = new FlyWithWings();
    protected quackBehavior: QuackBehavior = new Quack();
}
