import { updatePredictedNumbersUI } from "../combination/ui-creator";
import { uuidv4 } from "../global";
import Combination from "../combination/combination";

export default class Ticket {
    constructor(combinations) {
        this.id = uuidv4();
        this.combinations = [];
        combinations.forEach((combination) => {
            this.combinations.push(new Combination(combination.numbers, 0));
        });
    }

    updatePredictedNumbers = (number) => {
        this.combinations.forEach((combination, combination_id) => {
            const number_id = combination.predictedNumber(number);
            if (number_id !== -1) {
                updatePredictedNumbersUI(this.id, combination_id, number_id, true);
            }
        });
    };

    updatePredictedCombinations = (drawn_balls, drawing_completed) => {
        this.combinations.forEach((combination, combination_id) => {
            combination.updatePredictedCombination(drawn_balls, drawing_completed, this.id, combination_id);
        })
    };

    updateUnpredictedNumbers = (drawn_balls) => {
        this.combinations.forEach((combination, combination_id) => {
            combination.updateUnpredictedNumbers(drawn_balls, this.id, combination_id);
        });
    };

    updateUnpredictedCombinations = () => {
        this.combinations.forEach((combination, combination_id) => {
            combination.updateUnpredictedCombinations(this.id, combination_id);
        })
    };

    setCombinationValue = (value) => {
        const combinationValue = Math.round((value / this.combinations.length) * 100) / 100;
        this.combinations.forEach((combination) => {
            combination.value = combinationValue;
        })
    }
}
