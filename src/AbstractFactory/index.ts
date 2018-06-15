import { PizzaStore, NYPizzaStore } from "./PizzaStore";
import PIZZA_TYPE from "./PizzaType";



const pizzaTestDrive = () => {
    const nyStore: PizzaStore = new NYPizzaStore();
    let pizza = nyStore.orderPizza(PIZZA_TYPE.CHEESE);
    console.log(`Ethan ordered a ${pizza.getName()} \n`);
    console.dir(pizza);

    pizza = nyStore.orderPizza(PIZZA_TYPE.PEPPERONI);
    console.log(`Ethan ordered a ${pizza.getName()} \n`);
    console.dir(pizza);
}

pizzaTestDrive();