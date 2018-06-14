export abstract class Pizza{
    name: string = "";
    dough: string = "";
    sauce: string = "";
    toppings: string[] = [];
    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`Tossing dough ...`);
        console.log(`Adding sauce ...`);
        console.log(`Adding toppungs ...`);
        for(let i = 0; i < this.toppings.length; i++){
            console.log(`  ${this.toppings[i]}`);
        }
    }

    bake() {
        console.log(`Bake for 25 minutes at 350`)
    }

    cut() {
        console.log(`Cutting the pizza into diagonal slcie`)
    }

    box() {
        console.log(`Place pizza in offial PizzaStore box`)
    }

    public getName() {
        return this.name;
    }
}

export class NyStyleCheesePizza extends Pizza{
    constructor() {
        super();
        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';
        
        this.toppings.push('Grated Reggiano Cheese')
    }
}

export class NyStyleVeggiePizza extends NyStyleCheesePizza{
    constructor() {
        super();
        this.name = 'NY Style Sauce and Veggie Pizza';
        this.toppings.push('paprika', 'broccoli');
    }
}

export class NyStylePepperoniPizza extends NyStyleCheesePizza{
    constructor() {
        super();
        this.name = 'NY Style Sauce and Pepperoni Pizza';
        this.toppings.push('pepperoni');
    }
}


export class NyStyleClamPizza extends NyStyleCheesePizza{
    constructor() {
        super();
        this.name = 'NY Style Sauce and Clam Pizza';
        this.toppings.push('clam');
    }
}

export class ChicagoStyleCheesePizza extends Pizza{
    constructor() {
        super();
        this.name = 'Chicago Style Deep Dish and Cheese Pizza';
        this.dough = 'Extra Thick Crush Dough';
        this.sauce = 'Plum Tomato Sauce';
        
        this.toppings.push('Shredded Mozzarella Cheese')
    }
}

export class ChicagoStyleVeggiePizza extends ChicagoStyleCheesePizza{
    constructor() {
        super();
        this.name = 'Chicago Style Deep Dish and Veggie Pizza';
        this.toppings.push('paprika', 'broccoli');
    }
}

export class ChicagoStylePepperoniPizza extends ChicagoStyleCheesePizza{
    constructor() {
        super();
        this.name = 'Chicago Style Deep Dish and Pepperoni Pizza';
        this.toppings.push('pepperoni');
    }
}

export class ChicagoStyleClamPizza extends ChicagoStyleCheesePizza{
    constructor() {
        super();
        this.name = 'Chicago Style Deep Dish and Clam Pizza';
        this.toppings.push('clam');
    }
}
