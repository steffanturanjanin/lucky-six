import { updatePredictedCombinationUI, updatePredictedNumbersUI } from "./ui-creator";
import { NUMBER_OF_BALLS_TO_DRAW } from "../constants";

export default class Combination {
    constructor(numbers, round) {
        this.numbers = numbers.slice();
        this.round = round;
        this.value = 0;
        this.price = 0;
        this.won = false;
        this.wonAt = -1;
    }

    predictedNumber = (number) => {
        return this.numbers.indexOf(number);
    };

    predictedCombination = (drawn_balls) => {
        return this.numbers.reduce((accumulator, currentValue) =>
             accumulator && (drawn_balls.map(ball => ball.number).indexOf(currentValue) !== -1)
        , true);
    };

    updatePredictedCombination = (drawn_balls, drawing_completed, ticket_id, combination_id) => {
        if (!drawing_completed) {
            if (!this.won) {
                if (this.predictedCombination(drawn_balls)) {
                    this.won = true;
                    this.wonAt = NUMBER_OF_BALLS_TO_DRAW - drawn_balls.length;
                    this.price = this.value * this.wonAt;

                    updatePredictedCombinationUI(ticket_id, combination_id, this.won, this.value, this.price);
                }
            }
        } else {
            updatePredictedCombinationUI(ticket_id, combination_id, this.won, this.value, this.price);
        }
    };

    updateUnpredictedNumbers = (drawn_balls, ticket_id, combination_id) => {
        if (!this.won) {
            this.numbers.forEach((number, number_id) => {
                if (drawn_balls.map(ball => ball.number).indexOf(number) === -1) {
                    updatePredictedNumbersUI(ticket_id, combination_id, number_id, false);
                }
            })
        }
    };
}
