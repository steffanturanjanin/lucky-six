import { GET_ROUNDS } from "../../api";
import { addTicketRoundUI } from "../ticket/ui-creator";
import Ball from "../ball/ball";

export const addTicketOnClickEventListener = (round) => {
    const btnPay = document.getElementById("btn-pay");
    btnPay.onclick = round.addTicket;
};

export const addRoundUI = (round) => {
    if (round.tickets.length === 0) {
        return;
    }

    const roundHistory = document.getElementById("rounds-history");

    const roundContainer = document.createElement("div");
    roundContainer.className = "col-12 content-item";

    const roundId = document.createElement("p");
    roundId.innerText = "Round id: " + round.id;

    const drawnNumbers = document.createElement("div");
    drawnNumbers.className = "drawn-numbers";

    round.drawnBalls.forEach((ball) => {
       const circle = document.createElement("div");
       circle.className = "circle";
       circle.style.backgroundColor = Ball.getColour(ball.number);
       circle.style.margin = "2px";
       circle.innerHTML = ball.number;
       drawnNumbers.append(circle);
    });

    roundContainer.appendChild(roundId);
    roundContainer.appendChild(drawnNumbers);

    round.tickets.forEach((ticket) => {
        const ticketUI = addTicketRoundUI(ticket, round.drawnBalls);
        roundContainer.appendChild(ticketUI);
    });

    roundHistory.insertBefore(roundContainer, roundHistory.firstChild);
};

export const createRoundHistory = () => {
    GET_ROUNDS()
        .then(rounds => rounds.filter(round => round.tickets.length > 0))
        .then(rounds => rounds.forEach(round => addRoundUI(round)))
};
