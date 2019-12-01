

export const updatePredictedNumbersUI = (ticket_id, combination_id, number_id, predicted) => {
    const numberP = document.getElementById(ticket_id + combination_id + number_id);
    numberP.style.color = predicted ? "#32CD32" : "#FF0000";
    console.log(numberP);
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