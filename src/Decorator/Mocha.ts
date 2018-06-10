import CodimentDecorator from "./CodimentDecorator";
import Beverage from "./Beverage";

export default class Mocha extends CodimentDecorator {
    public beverage: Beverage;
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    public getDescripton(): string {
        return this.beverage.getDescripton() + ", 모카";
    }
    public cost(): number {
        return .20 + this.beverage.cost();
    }
}