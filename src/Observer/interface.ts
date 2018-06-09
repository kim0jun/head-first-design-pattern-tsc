export interface Subject{
    registerObserver: (o: Observer) => void;
    removeObserver: (o: Observer) => void;
    notifyObserver: () => void;
}

export interface Observer{
    update: (temperature: number, humadity: number, pressure: number) => void;
}

export interface DisplayElement{
    display: () => void;
}