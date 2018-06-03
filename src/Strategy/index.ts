import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import ModelDuck from "./ModelDuck";
import { FlyRocketPowered } from "./Fly";

const miniDuckSimulator = () => {
    const mallard: Duck = new MallardDuck();
    mallard.preformQuack();
    mallard.preformFly();

    const model: Duck = new ModelDuck();
    model.preformFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.preformFly();
}

miniDuckSimulator();