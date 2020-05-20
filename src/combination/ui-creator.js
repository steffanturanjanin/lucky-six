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
    combinationInfo.className = "col-6 combination-info"
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
