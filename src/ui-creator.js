import { NUMBER_OF_BALLS_TO_DRAW, OVERALL_NUMBER_OF_BALLS } from "./constants";


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

        selectNumbers.appendChild(number);
    }
};