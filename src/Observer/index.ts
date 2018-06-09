import { WetherData } from "./WetherData";
import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import StaticsDisplay from "./StaticsDisplay";

const weatherStation = () => {
    const wetherData = new WetherData();
    const currentConditionsDisplay = new CurrentConditionsDisplay(wetherData);
    const staticDisplay = new StaticsDisplay(wetherData);

    wetherData.setMeasurements(50, 60, 77);
    wetherData.setMeasurements(90, 20, 30);
    wetherData.removeObserver(staticDisplay);
    wetherData.setMeasurements(10, 10, 10);

}

weatherStation();