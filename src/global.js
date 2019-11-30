import Ticket from './ticket/ticket';

export let SELECTED_NUMBERS = [];
export let COMBINATIONS = [];
export let TICKETS = [];

export const updatePredictedNumbers = (number) => {
    TICKETS.forEach((ticket) => {
        ticket.updatePredictedNumbers(number);
    })
};

export const updatePredictedCombinations = (drawn_balls, drawing_completed) => {
    TICKETS.forEach((ticket) => {
        ticket.updatePredictedCombinations(drawn_balls, drawing_completed);
    })
};

export const updateUnpredictedNumbers = (drawn_balls) => {
    TICKETS.forEach((ticket) => {
        ticket.updateUnpredictedNumbers(drawn_balls);
    })
};

export const updateUnpredictedCombinations = () => {
    TICKETS.forEach((ticket) => {
        ticket.updateUnpredictedCombinations();
    })
};