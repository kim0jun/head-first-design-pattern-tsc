import Espresso from "./Espresso";
import Beverage from "./Beverage";
import Mocha from "./Mocha";
import Whip from "./Whip";
import HouseBlend from "./HouseBlend";
import Soy from "./Soy";
import CodimentDecorator from "./CodimentDecorator";



const starBuzCoffee = () => {
    function printInfo(beverage: Beverage){
        console.log(`${beverage.getDescripton()}, $${beverage.cost()}`);
    }

    const beverage = new Espresso();
    printInfo(beverage);

    let beverage2 = new Espresso();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    printInfo(beverage2);

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    printInfo(beverage3);       
}

starBuzCoffee();