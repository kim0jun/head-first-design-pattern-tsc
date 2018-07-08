import Adaptee from "./Adaptee";
import Adapter from "./Adapter";
import Target from "./Target.interface";

const main = () => {
    const adaptee: Adaptee = new Adaptee();
    const adapter: Target = new Adapter(adaptee);
    adapter.request(); // specificRequest;
}

main();