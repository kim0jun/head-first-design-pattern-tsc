import { FlyBehavior } from "./Interface";

export class FlyWithWings implements FlyBehavior {
    public fly = () => {
        console.log("날고 있어요!");
    }
}

export class FlyWithNoWay implements FlyBehavior {
    public fly = () => {
        console.log("저는 못날아요");
    }
}

export class FlyRocketPowered implements FlyBehavior {
    public fly = () => {
        console.log("로켓 추진으로 날아갑니다.");
    }
}
