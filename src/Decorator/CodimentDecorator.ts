import Beverage from "./Beverage";

abstract class CodimentDecorator extends Beverage {
    public abstract getDescripton(): string;
    public abstract cost(): number;
} 

export default CodimentDecorator;