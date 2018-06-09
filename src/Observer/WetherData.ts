import {Subject, Observer} from "./interface";

export class WetherData implements Subject{
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor(){
        this.observers = [] as Observer[];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    public registerObserver(o: Observer){
        this.observers.push(o);
    }

    public removeObserver(o: Observer){
        const index = this.observers.indexOf(o);
        if(index >= 0){
            this.observers.splice(index, 1)
        }
    }

    public notifyObserver(){
        let {temperature, humidity, pressure} = this;

        for(let i =0; i < this.observers.length; i++){
            this.observers[i].update(temperature, humidity, pressure);
        }
    }

    public measurementsChanged(){
        this.notifyObserver();
    }

    public setMeasurements(temperature: number, humadity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humadity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}