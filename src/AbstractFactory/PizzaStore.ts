import PIZZA_TYPE from "./PizzaType";
import { Pizza, CheesePizza, PepperoniPizza, ClamsPizza, VeggiePizza} from "./Pizza";
import { PizzaIngredientFactory, NYPizzaIngredientFactory } from "./PizzaIngredientFactory";
import { Pepperoni } from "./Ingredient/Pepperoni";

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
        const pizzaIngrientFactory: PizzaIngredientFactory = new  NYPizzaIngredientFactory();
        let pizza: Pizza;
        
        switch(type){
        case PIZZA_TYPE.CHEESE:
            pizza = new CheesePizza(pizzaIngrientFactory);
            pizza.setName('NY Style Sauce and Cheese Pizza');
            return pizza;
        case PIZZA_TYPE.PEPPERONI:
            pizza = new PepperoniPizza(pizzaIngrientFactory);
            pizza.setName('NY Style Sauce and Pepperoni Pizza');
            return pizza;
        case PIZZA_TYPE.CLAM:
            pizza = new ClamsPizza(pizzaIngrientFactory);
            pizza.setName('NY Style Sauce and Clam Pizza');
            return pizza;
        case PIZZA_TYPE.VEGGIE:
            pizza = new VeggiePizza(pizzaIngrientFactory);
            pizza.setName('NY Style Sauce and Veggie Pizza');
            return pizza;
        default:
            pizza = new CheesePizza(pizzaIngrientFactory);
            pizza.setName('default is NY Style Sauce and Cheese Pizza');
            return pizza;
        }
    };
}

