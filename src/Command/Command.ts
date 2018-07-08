import { Reciver } from "./Reciver";

export interface Command {
    execute: () => void;
    undo: () => void;
}


export class OnCommand implements Command {
    reciver: Reciver;
    constructor(reciver: Reciver) {
        this.reciver = reciver;
    }

    execute(): void{
        this.reciver.on();
    }

    undo(): void{
        this.reciver.off();
    }
}

export class NoCommand implements Command {
    execute(): void{
        console.log("no command");
    }

    undo(): void{
        console.log("no command");
    }
}