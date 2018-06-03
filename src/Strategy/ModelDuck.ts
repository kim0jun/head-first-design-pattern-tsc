import Duck from "./Duck";
import { FlyBehavior, QuackBehavior } from "./Interface";
import { FlyWithNoWay } from "./Fly";
import { Quack } from "./Quack";

export default class ModelDuck extends Duck {
    protected flyBehavior: FlyBehavior = new FlyWithNoWay();
    protected quackBehavior: QuackBehavior = new Quack();

    public display = () => {
        console.log("저는 모형 오리 입니다.")
    }
}
