import Drum from "./drum/drum";
import CountdownTimer from "./timer";

export const gameLogic = () => {
    let drum = new Drum();
    let timer = new CountdownTimer(1000, 0.5);

    timer.countDown(drum.startDrawing);
};
