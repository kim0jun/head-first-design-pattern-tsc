import { Command, NoCommand } from "./Command";

export class Invoker{
    command?: Command;
    undoCommand?: Command;

    constructor(){}
    setCommend(command: Command){
        this.command = command;
        this.undoCommand = new NoCommand();
    }

    onButtonWasPressed(){
        if( this.command){
            this.command.execute();
            this.undoCommand = this.command;
        } else 
            console.log("command doesn't exist ,please set command");
    }

    undoButtonWasPressed(){
        if( this.undoCommand){
            this.undoCommand.undo();
            this.undoCommand = new NoCommand();
        }else 
            console.log("undoCommand doesn't exist");
    }
}