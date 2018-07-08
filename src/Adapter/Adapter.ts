import Target from "./Target.interface";
import Adaptee from "./Adaptee";

export default class Adapter implements Target{
    adaptee: Adaptee;
    constructor(adaptee: Adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.specificRequest();
    }
}