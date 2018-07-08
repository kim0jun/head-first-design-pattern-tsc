import { Invoker } from "./Invoker";
import { Reciver } from "./Reciver";
import { OnCommand } from "./Command";

const main = () => {
    
    let reciver = new Reciver();
    let command = new OnCommand(reciver);
    let invoker = new Invoker();
    invoker.onButtonWasPressed(); // =>  command doesn't exist ,please set command
    invoker.setCommend(command);
    invoker.onButtonWasPressed(); // => reciver on!
    invoker.undoButtonWasPressed(); // => reciver off!
    invoker.undoButtonWasPressed(); // => no command

}

main();