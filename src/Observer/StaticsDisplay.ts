import { Observer, DisplayElement, Subject } from "./interface";

export default class StaticsDisplay implements Observer, DisplayElement {
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
        const {temperature, humidity, pressure} = this;
        console.log(`statics: ${temperature}/ ${humidity}/ ${pressure}`);
    }
}