import { NUMBER_OF_BALLS_TO_DRAW } from "../constants";

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
