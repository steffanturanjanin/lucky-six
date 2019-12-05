import {TICKETS, uuidv4} from "../global";
import { COMBINATIONS } from "../global";
import { addTicketOnClickEventListener } from "./ui-creator";
import { addTicketUI } from "../ticket/ui-creator";
import { POST_ROUND } from "../../api";

export default class Round {
    constructor() {
        this.id = uuidv4();
        this.tickets = [];
        this.drawnBalls = [];

        addTicketOnClickEventListener(this);
    }

    save = () => {
        return POST_ROUND(this);
    };

    addTicket = () => {
        if (COMBINATIONS.length > 0) {
            addTicketUI(this.tickets);
        }
        console.log(this);
    };

    updatePredictedNumbers = (number) => {
        this.tickets.forEach((ticket) => {
            ticket.updatePredictedNumbers(number);
        })
    };

    updatePredictedCombinations = (drawn_balls, drawing_completed) => {
        this.tickets.forEach((ticket) => {
            ticket.updatePredictedCombinations(drawn_balls, drawing_completed);
        })
    };

    updateUnpredictedNumbers = (drawn_balls) => {
        this.tickets.forEach((ticket) => {
            ticket.updateUnpredictedNumbers(drawn_balls);
        })
    };

    updateUnpredictedCombinations = () => {
        this.tickets.forEach((ticket) => {
            ticket.updateUnpredictedCombinations();
        })
    };
}