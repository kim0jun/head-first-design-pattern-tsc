import { Dough } from "./Ingredient/Dough";
import { Sauce } from "./Ingredient/Sauce";
import { Cheese } from "./Ingredient/Cheese";
import { Pepperoni } from "./Ingredient/Pepperoni";
import { Clams } from "./Ingredient/Clams";
import { Veggies } from "./Ingredient/Veggies";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export abstract class Pizza{
    name: string = "";
    dough?: Dough;
    sauce?: Sauce;
    veggies?: Veggies[];
    cheese?: Cheese;
    pepperoni?: Pepperoni;
    clams?: Clams;

    abstract prepare(): void;

    bake() {
        console.log(`Bake for 25 minutes at 350`)
    }

    cut() {
        console.log(`Cutting the pizza into diagonal slcie`)
    }

    box() {
        console.log(`Place pizza in offial PizzaStore box`)
    }

    setName(name :string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    public toString() {
        // 피자 이름을 출력 
    }
}

export class CheesePizza extends Pizza{
    ingredientFactory: PizzaIngredientFactory;    

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log(`Preparing ` + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

export class ClamsPizza extends CheesePizza{
    prepare() {
        super.prepare();
        this.clams = this.ingredientFactory.createClams();
    }
}

export class VeggiePizza extends CheesePizza{
    prepare() {
        super.prepare();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}

export class PepperoniPizza extends CheesePizza{
    prepare() {
        super.prepare();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}
