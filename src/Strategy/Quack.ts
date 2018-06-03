import { QuackBehavior } from "./Interface";

export class Quack implements QuackBehavior {
    public quack = () => {
        console.log("꽥");
    }
}

export class MuteQuack implements QuackBehavior {
    public quack = () => {
        console.log("<< 조용~ >>");
    }
}

export class Squack implements QuackBehavior {
    public quack = () => {
        console.log("<< 조용~ >>");
    }
}