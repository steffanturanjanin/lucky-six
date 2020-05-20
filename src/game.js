import Drum from "./drum/drum";
import { countdownTimer } from "./timer";

export const gameLogic = () => {
    let drum = new Drum();
    countdownTimer(drum.startDrawing);
};
