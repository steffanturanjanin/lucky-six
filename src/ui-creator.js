import { NUMBER_OF_BALLS_TO_DRAW, OVERALL_NUMBER_OF_BALLS } from "./constants";
import Ball from "./ball/ball";
import Combination from "./combination/combination";


import {SELECTED_NUMBERS, COMBINATIONS, TICKETS} from "./global";
import Ticket from "./ticket/ticket";


/*let SELECTED_NUMBERS = [];
let COMBINATIONS = [];
export let TICKETS = [];*/

export const createDrawnNumbersPlaceholder = () => {
    const drawnNumbersPlaceHolder = document.getElementById("drawn-numbers");
    for (let i = NUMBER_OF_BALLS_TO_DRAW; i >= 0; i--) {
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
    let index = SELECTED_NUMBERS.indexOf(parseInt(event.target.innerHTML));
    if (index === -1) {
        if (SELECTED_NUMBERS.length < 6) {
            SELECTED_NUMBERS.push(parseInt(event.target.innerHTML));
            event.target.style.borderColor = Ball.getColour(parseInt(event.target.innerHTML));
        }

        if (SELECTED_NUMBERS.length === 6) {
            const addCombinationButton = document.getElementById("btn-add-combination");
            addCombinationButton.disabled = false;
        }

    } else {
        SELECTED_NUMBERS.splice(index, 1);
        event.target.style.borderColor = "#b9b9b9";

        const addCombinationButton = document.getElementById("btn-add-combination");
        addCombinationButton.disabled = true;
    }
    console.log(SELECTED_NUMBERS);
};

export const addCombination = () => {
    COMBINATIONS.push(new Combination(SELECTED_NUMBERS.slice(), 0));

    const ticketContainer = document.getElementById("ticket-purchase-container");
    const combination = document.createElement("div");
    combination.innerHTML = COMBINATIONS[COMBINATIONS.length - 1].numbers;
    combination.className = "col-12 combination";
    const span = document.createElement("span");
    span.innerText = "x";
    span.onclick = deleteCombination;
    combination.appendChild(span);
    ticketContainer.appendChild(combination);
    console.log(COMBINATIONS);
};

const deleteCombination = (event) => {
    const combination = event.target.parentNode;
    let combinationsDOM =  Array.from(document.querySelectorAll(".combination"));
    COMBINATIONS.splice(combinationsDOM.indexOf(combination), 1);
    const ticketContainer = combination.parentNode;
    ticketContainer.removeChild(combination);

    console.log(COMBINATIONS);
};

const addCombinationOnClickListener = () => {
    const addCombinationButton = document.getElementById("btn-add-combination");
    addCombinationButton.onclick = addCombination;
};

const addTicket = () => {
    const ticket = new Ticket(COMBINATIONS);
    const combinationValue = parseFloat(document.getElementById("txt-input-value").value);
    ticket.setCombinationValue(combinationValue);
    TICKETS.push(ticket);

    console.log(TICKETS);

    const ticketsContainer = document.getElementById("tickets-container");
    ticketsContainer.hidden = false;

    const ticketDiv = document.createElement("div");
    ticketDiv.className = "col-12 content-item";
    ticketDiv.id = ticket.id;


    ticket.combinations.forEach((combination, combinationIndex) => {
        const combinationContainerDiv = document.createElement("div");
        combinationContainerDiv.className = "col-4 combination";
        const col6Div = document.createElement("div");
        col6Div.className = "col-6";
        const combinationHolderDiv = document.createElement("div");
        combinationHolderDiv.className = "combination-holder";

        combination.numbers.forEach((number, numberIndex) => {
            const numberP = document.createElement("p");
            numberP.id = ticket.id + combinationIndex + numberIndex;
            numberP.innerText = number;
            combinationHolderDiv.appendChild(numberP);
        });

        const combinationInfoDiv = document.createElement("div");
        combinationInfoDiv.className = "col-6 combination-info";
        const wonP = document.createElement("p");
        wonP.innerText = "won: 0";
        const valueP = document.createElement("p");
        valueP.innerText = "value: 0";
        combinationInfoDiv.appendChild(wonP);
        combinationInfoDiv.appendChild(valueP);

        col6Div.appendChild(combinationHolderDiv);
        combinationContainerDiv.appendChild(col6Div);
        combinationContainerDiv.appendChild(combinationInfoDiv);

        ticketDiv.appendChild(combinationContainerDiv)

    });
    ticketsContainer.appendChild(ticketDiv);

    COMBINATIONS.length = 0;
    const ticketPurchaseContainer = document.getElementById("ticket-purchase-container");
    while (ticketPurchaseContainer.firstChild) {
        ticketPurchaseContainer.firstChild.remove();
    }
    console.log(COMBINATIONS);
};

const addTicketOnClickListener = () => {
    const payButton = document.getElementById("btn-pay");
    payButton.onclick = addTicket;
};

export const initializeUI = () => {
    createDrawnNumbersPlaceholder();
    createSelectNumbersPlaceholder();
    addCombinationOnClickListener();
    addTicketOnClickListener();

};