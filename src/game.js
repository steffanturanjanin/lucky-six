import Drum from "./drum/drum";
import Round from "./round/round";
import { countdownTimer } from "./timer";

import { GET_ROUNDS } from "../api";

export const gameLogic = () => {
    GET_ROUNDS();
    let drum = new Drum();

    countdownTimer(drum.startDrawing);
};