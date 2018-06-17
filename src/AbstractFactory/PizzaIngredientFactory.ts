import { Dough, ThinCrushtDough } from "./Ingredient/Dough";
import { Sauce, MarinaraSauce } from "./Ingredient/Sauce";
import { Cheese, ReggianoCheese } from "./Ingredient/Cheese";
import { Veggies, Garlic, Onion, Mushroom, RedPepper } from "./Ingredient/Veggies";
import { Pepperoni, SlicedPepperoni } from "./Ingredient/Pepperoni";
import { Clams, FreshClams } from "./Ingredient/Clams";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClams(): Clams;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory{
    public createDough = () => new ThinCrushtDough();
    public createSauce = () => new MarinaraSauce();
    public createCheese = () => new ReggianoCheese();
    public createVeggies = () => [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    public createPepperoni = () => new SlicedPepperoni();
    public createClams = () => new FreshClams();
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory{
    public createDough = () => new ThinCrushtDough();
    public createSauce = () => new MarinaraSauce();
    public createCheese = () => new ReggianoCheese();
    public createVeggies = () => [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    public createPepperoni = () => new SlicedPepperoni();
    public createClams = () => new FreshClams();
}
