import { FlyBehavior, QuackBehavior } from "./Interface";

export default abstract class Duck {
    protected flyBehavior!: FlyBehavior;
    protected quackBehavior!: QuackBehavior;

    public preformFly = () => {
        this.flyBehavior.fly();
    }

    public preformQuack = () => {
        this.quackBehavior.quack();
    }

    public display = () => {
        console.log("내가 보이나요?")
    }

    public swim = () => {
        console.log("풍덩 풍덩 저는 수영하고 있어요~")
    }

    public setFlyBehavior = (flyBehavior: FlyBehavior) => {
        this.flyBehavior = flyBehavior
    }

    protected setQuackBehavior = (quackBehavior: QuackBehavior) => {
        this.quackBehavior = quackBehavior
    }
}