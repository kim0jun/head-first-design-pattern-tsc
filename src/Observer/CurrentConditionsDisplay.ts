import { Observer, DisplayElement, Subject } from "./interface";

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor(wetherData: Subject){
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;

        wetherData.registerObserver(this);
    }

    public update(temperature: number, humadity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humadity;
        this.pressure = pressure;
        this.display();
    }

    public display(){
        const {temperature, humidity} = this;
        console.log(`Current Conditions: ${temperature}F degrees and ${humidity}% humidity`);
    }
}