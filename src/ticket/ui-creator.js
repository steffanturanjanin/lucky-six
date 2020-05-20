import Ticket from "./ticket";
import { COMBINATIONS } from "../global";
import { addCombinationRoundUI } from "../combination/ui-creator";
import { DEFAULT_COMBINATION_VALUE } from "../constants";

export const disablePayButton = (disable) => {
    document.getElementById("btn-pay").disabled = disable;
};

export const addTicketUI = (tickets) => {
    const ticket = new Ticket(COMBINATIONS);
    let combinationValue = parseFloat(document.getElementById("txt-input-value").value);

    if (isNaN(combinationValue) || combinationValue < 0) {
        combinationValue = DEFAULT_COMBINATION_VALUE;
    }

    ticket.setCombinationValue(combinationValue);
    tickets.push(ticket);

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
        valueP.innerText = "value: " + combination.value;
        combinationInfoDiv.appendChild(wonP);
        combinationInfoDiv.appendChild(valueP);

        col6Div.appendChild(combinationHolderDiv);
        combinationContainerDiv.appendChild(col6Div);
        combinationContainerDiv.appendChild(combinationInfoDiv);

        ticketDiv.appendChild(combinationContainerDiv);

        ticketsContainer.appendChild(ticketDiv);

    });

    COMBINATIONS.length = 0;

    const ticketPurchaseContainer = document.getElementById("ticket-purchase-container");

    while (ticketPurchaseContainer.firstChild) {
        ticketPurchaseContainer.firstChild.remove();
    }
};

export const addTicketRoundUI = (ticket, drawn_balls) => {
    const ticketContainer = document.createElement("div");
    ticketContainer.className = "col-12 content-item";
    const ticketId = document.createElement("p");
    ticketId.style.cssFloat = "left";
    ticketId.style.margin = "0";
    ticketId.innerText = "Ticket id: " + ticket.id;

    const ticketInnerContainer = document.createElement("div");
    ticketInnerContainer.className = "col-12";
    ticketInnerContainer.style.display = "table-row";

    ticket.combinations.forEach((combination) => {
        ticketInnerContainer.appendChild(addCombinationRoundUI(combination, drawn_balls))
    });

    ticketContainer.appendChild(ticketId);
    ticketContainer.appendChild(ticketInnerContainer);

    return ticketContainer;
};
