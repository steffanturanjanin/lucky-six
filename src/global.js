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

export const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};