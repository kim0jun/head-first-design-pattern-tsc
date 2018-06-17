import { PizzaStore, NYPizzaStore, ChicagoPizzaStore } from "./PizzaStore";
import PIZZA_TYPE from "./PizzaType";



const pizzaTestDrive = () => {
    const nyStore: PizzaStore = new NYPizzaStore();
    const chicagoStore: PizzaStore = new ChicagoPizzaStore();
    let pizza = nyStore.orderPizza(PIZZA_TYPE.CHEESE);
    console.log(`Ethan ordered a ${pizza.getName()} \n`);

    pizza = chicagoStore.orderPizza(PIZZA_TYPE.PEPPERONI);
    console.log(`Ethan ordered a ${pizza.getName()} \n`);
}

pizzaTestDrive();