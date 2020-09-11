import { notificationEvent } from "./notifications";
import { disablePayButton, restartTickets } from "../ticket/ui-creator";
import { createDrawnNumbersPlaceholder }  from "../ball/ui-creator";
import { createRoundHistory } from "../round/ui-creator";
import { restartPool } from "../drum/ui-creator";
import {
    addCombinationOnClickListener,
    createSelectNumbersPlaceholder,
} from "../combination/ui-creator";

export const initializeUI = () => {
    createDrawnNumbersPlaceholder();
    createSelectNumbersPlaceholder();
    addCombinationOnClickListener();
    createRoundHistory();
    notificationEvent();
};


export const restartUI = () => {
    restartPool();
    restartTickets();
    disablePayButton(false);
};
