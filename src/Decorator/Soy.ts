import CodimentDecorator from "./CodimentDecorator";
import Beverage from "./Beverage";

export default class Soy extends CodimentDecorator {
    public beverage: Beverage;
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    public getDescripton(): string {
        return this.beverage.getDescripton() + ", 두유";
    }
    public cost(): number {
        return .10 + this.beverage.cost();
    }
}