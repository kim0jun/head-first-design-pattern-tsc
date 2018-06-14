import PIZZA_TYPE from "./PizzaType";
import { Pizza, NyStyleCheesePizza, NyStyleVeggiePizza, NyStylePepperoniPizza, NyStyleClamPizza, ChicagoStyleCheesePizza, ChicagoStylePepperoniPizza, ChicagoStyleClamPizza, ChicagoStyleVeggiePizza } from "./Pizza";

export abstract class PizzaStore{
    public orderPizza(type: PIZZA_TYPE){
        const pizza: Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    abstract createPizza(type: PIZZA_TYPE): Pizza;
}

export class NYPizzaStore extends PizzaStore{
    createPizza(type: PIZZA_TYPE): Pizza {
        switch(type){
        case PIZZA_TYPE.CHEESE:
            return new NyStyleCheesePizza();
        case PIZZA_TYPE.PEPPERONI:
            return new NyStylePepperoniPizza();
        case PIZZA_TYPE.CLAM:
            return new NyStyleClamPizza();
        case PIZZA_TYPE.VEGGIE:
            return new NyStyleVeggiePizza();
        default:
            return new NyStyleCheesePizza();
        }
    };
}

export class ChicagoPizzaStore extends PizzaStore{
    createPizza(type: PIZZA_TYPE): Pizza {
        switch(type){
        case PIZZA_TYPE.CHEESE:
            return new ChicagoStyleCheesePizza();
        case PIZZA_TYPE.PEPPERONI:
            return new ChicagoStylePepperoniPizza();
        case PIZZA_TYPE.CLAM:
            return new ChicagoStyleClamPizza();
        case PIZZA_TYPE.VEGGIE:
            return new ChicagoStyleVeggiePizza();
        default:
            return new ChicagoStyleCheesePizza();
        }
    };
}