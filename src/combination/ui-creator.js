import { COMBINATION_SIZE, OVERALL_NUMBER_OF_BALLS } from "../constants";
import { COMBINATIONS, SELECTED_NUMBERS } from "../global";

import Ball from "../ball/ball";
import Combination from "./combination";

export const updatePredictedNumbersUI = (ticket_id, combination_id, number_id, predicted) => {
    const numberP = document.getElementById(ticket_id + combination_id + number_id);
    numberP.style.color = predicted ? "#32CD32" : "#FF0000";
};

export const updatePredictedCombinationUI = (ticket_id, combination_id, win, value, price) => {
    const ticketContainer = document.getElementById(ticket_id);
    const combinations = ticketContainer.childNodes;
    combinations[combination_id].style.borderColor = win ? "#32CD32": "#FF0000";
    const combinationInfo = combinations[combination_id].childNodes[1].childNodes;
    combinationInfo[0].textContent = "won: " + price;
    combinationInfo[1].textContent = "value: " + value;
};

export const restartSelectedNumbersUI = () => {
    const selectedNumbers = document.querySelectorAll("#select-numbers .circle");
    selectedNumbers.forEach((div) => {
        div.style.borderColor = "#b9b9b9";
    });

    document.getElementById("btn-add-combination").disabled = true;
};

export const addCombinationRoundUI = (combination, drawn_balls) => {
    const combinationContainer = document.createElement("div");
    combinationContainer.className = "col-4 combination";
    combinationContainer.style.margin = "3px";
    combinationContainer.style.maxWidth = "280px";
    combinationContainer.style.minHeight = "80px";
    combinationContainer.style.borderColor = combination.won ? "#32CD32" : "#FF0000";

    const combinationHolder = document.createElement("div");
    combinationHolder.className = "col-6 combination-holder";

    combination.numbers.forEach((number) => {
       const numberP = document.createElement("p");
       numberP.style.color = drawn_balls.map(ball => ball.number).indexOf(number) !== -1 ? "#32CD32" : "#FF0000";
       numberP.style.marginRight = "5px";
       numberP.innerText = number;

       combinationHolder.appendChild(numberP);
    });

    const combinationInfo = document.createElement("div");
    combinationInfo.className = "col-6 combination-info";
    const wonP = document.createElement("p");
    wonP.innerText = "won: " + combination.price;
    const valueP = document.createElement("p");
    valueP.innerText = "value: " + combination.value;

    combinationInfo.appendChild(wonP);
    combinationInfo.appendChild(valueP);

    combinationContainer.appendChild(combinationHolder);
    combinationContainer.appendChild(combinationInfo);

    return combinationContainer;
};

export const createSelectNumbersPlaceholder = () => {
    const selectNumbers = document.getElementById("select-numbers");

    for (let i = 1; i <= OVERALL_NUMBER_OF_BALLS; i++) {
        const number = document.createElement("div");
        number.className = "circle";
        number.id = `circle[${i}]`;
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
    span.style.cursor = "pointer";
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

export const addCombinationOnClickListener = () => {
    const addCombinationButton = document.getElementById("btn-add-combination");
    addCombinationButton.onclick = addCombination;
};
