import CodimentDecorator from "./CodimentDecorator";
import Beverage from "./Beverage";

export default class Whip extends CodimentDecorator {
    public beverage: Beverage;
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    public getDescripton(): string {
        return this.beverage.getDescripton() + ", 휘핑 크림";
    }
    public cost(): number {
        return .35 + this.beverage.cost();
    }
}