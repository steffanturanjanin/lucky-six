import { COMBINATION_SIZE, NUMBER_OF_BALLS_TO_DRAW, OVERALL_NUMBER_OF_BALLS } from "./constants";
import Ball from "./ball/ball";
import Combination from "./combination/combination";

import { SELECTED_NUMBERS, COMBINATIONS, TICKETS } from "./global";

import { restartSelectedNumbersUI } from "./combination/ui-creator";
import { disablePayButton } from "./ticket/ui-creator";
import { GET_ROUNDS } from "../api";
import { addRoundUI } from "./round/ui-creator";

export const createDrawnNumbersPlaceholder = () => {
    const drawnNumbersPlaceHolder = document.getElementById("drawn-numbers");
    for (let i = NUMBER_OF_BALLS_TO_DRAW; i > 0; i--) {
       const number = document.createElement("div");
       number.className = "number";

       const ordinal_number = document.createElement("p");
       const number_placeholder = document.createElement("div");
       number_placeholder.className = "circle";
       ordinal_number.innerText = i.toString();
       ordinal_number.className = "ordinal-number";

       number.appendChild(ordinal_number);
       number.appendChild(number_placeholder);

       drawnNumbersPlaceHolder.appendChild(number);
    }
};

export const createSelectNumbersPlaceholder = () => {
    const selectNumbers = document.getElementById("select-numbers");
    for (let i = 1; i <= OVERALL_NUMBER_OF_BALLS; i++) {
        const number = document.createElement("div");
        number.className = "circle";
        number.innerText = i.toString();
        number.onclick = selectNumber;

        selectNumbers.appendChild(number);
    }
};

const selectNumber = (event) => {
    const index = SELECTED_NUMBERS.indexOf(parseInt(event.target.innerHTML));
    if (index === -1) {
        if (SELECTED_NUMBERS.length < COMBINATION_SIZE) {
            SELECTED_NUMBERS.push(parseInt(event.target.innerHTML));
            event.target.style.borderColor = Ball.getColour(parseInt(event.target.innerHTML));
        }

        if (SELECTED_NUMBERS.length === COMBINATION_SIZE) {
            const addCombinationButton = document.getElementById("btn-add-combination");
            addCombinationButton.disabled = false;
        }

    } else {
        SELECTED_NUMBERS.splice(index, 1);
        event.target.style.borderColor = "#b9b9b9";

        const addCombinationButton = document.getElementById("btn-add-combination");
        addCombinationButton.disabled = true;
    }
};

export const addCombination = () => {
    COMBINATIONS.push(new Combination(SELECTED_NUMBERS));

    const ticketContainer = document.getElementById("ticket-purchase-container");
    const combination = document.createElement("div");
    combination.innerHTML = COMBINATIONS[COMBINATIONS.length - 1].numbers;
    combination.className = "col-12 combination";
    const span = document.createElement("span");
    span.innerText = "x";
    span.onclick = deleteCombination;
    combination.appendChild(span);
    ticketContainer.appendChild(combination);

    restartSelectedNumbersUI();
    SELECTED_NUMBERS.splice(0, SELECTED_NUMBERS.length);
};

const deleteCombination = (event) => {
    const combination = event.target.parentNode;
    let combinationsDOM =  Array.from(document.querySelectorAll(".combination"));
    COMBINATIONS.splice(combinationsDOM.indexOf(combination), 1);
    const ticketContainer = combination.parentNode;
    ticketContainer.removeChild(combination);
};

const addCombinationOnClickListener = () => {
    const addCombinationButton = document.getElementById("btn-add-combination");
    addCombinationButton.onclick = addCombination;
};

const createRoundHistory = () => {
    GET_ROUNDS()
        .then(rounds => rounds.filter(round => round.tickets.length > 0))
        .then(rounds => rounds.forEach(round => addRoundUI(round)))
};

export const initializeUI = () => {
    createDrawnNumbersPlaceholder();
    createSelectNumbersPlaceholder();
    addCombinationOnClickListener();
    createRoundHistory();
};

const restartPool = () => {
    const pool = document.querySelectorAll("#drawn-numbers .circle");
    pool.forEach((slot) => { slot.style.backgroundColor = "#2b2b2b"; slot.innerHTML = ""})
};

const restartTickets = () => {
    const ticketsContainer = document.getElementById("tickets-container");
    while (ticketsContainer.firstChild) {
        ticketsContainer.firstChild.remove();
    }
    TICKETS.length = 0;
};

export const restartUI = () => {
    restartPool();
    restartTickets();
    disablePayButton(false);
};
