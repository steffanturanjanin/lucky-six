import { NUMBER_OF_BALLS_TO_DRAW, OVERALL_NUMBER_OF_BALLS } from "../constants";
import Ball from "../ball/ball";

import { interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

import { gameLogic } from "../game";
import { restartUI } from "../ui-creator";
import Round from "../round/round";
import { addRoundUI } from "../round/ui-creator";

export default class Drum {
    constructor() {
        this.round = new Round();

        this.balls = [];
        for (let i = 1; i <= OVERALL_NUMBER_OF_BALLS; i++) {
            this.balls.push(new Ball(i))
        }

        this.drawnBalls = [];
    }

    asyncDrawBall = () => {
        return new Promise((resolve) => {
            const index = Math.floor(Math.random() * this.balls.length);
            const drawnBall = this.balls[index];
            this.balls.splice(index, 1);

            this.drawnBalls.push(drawnBall);

            const ballSlots = document.querySelectorAll(".number > div");
            const number = this.drawnBalls[this.drawnBalls.length - 1].number;
            ballSlots[this.drawnBalls.length - 1].style.backgroundColor = Ball.getColour(number);
            ballSlots[this.drawnBalls.length - 1].innerHTML = number;

            resolve(drawnBall);
        })
    };

    shuffleDrumUI = () => {
        const index = Math.floor(Math.random() * this.balls.length);
        const ball = this.balls[index];

        const drumSlot = document.querySelector(".drum > div");
        drumSlot.style.backgroundColor = Ball.getColour(ball.number);
        drumSlot.innerHTML = ball.number;
    };

    restartDrumUI = () => {
        const drumSlot = document.querySelector(".drum > div");
        drumSlot.style.backgroundColor = "#2b2b2b";
        drumSlot.innerHTML = '';
    };

    startDrawing = () => {
        const intervalShuffle$ = interval(100).pipe(
            map(() => this.drawnBalls.length),
            takeWhile(val => val < NUMBER_OF_BALLS_TO_DRAW)
        );

        intervalShuffle$.subscribe({
            next: () => this.shuffleDrumUI(),
            complete: () => this.restartDrumUI()
        });

        const intervalDrawing$ = interval(1000).pipe(
            takeWhile(() => this.drawnBalls.length < NUMBER_OF_BALLS_TO_DRAW)
        );

        intervalDrawing$.subscribe({
            next: () => {
                this.asyncDrawBall()
                    .then((ball) => this.round.updatePredictedNumbers(ball.number))
                    .then(() => this.round.updatePredictedCombinations(this.drawnBalls, false))
            },
            complete: () => {
                this.round.updateUnpredictedNumbers(this.drawnBalls);
                this.round.updatePredictedCombinations(this.drawnBalls, true);
                this.round.drawnBalls = this.drawnBalls;
                this.round.save()
                    .then(round => addRoundUI(round));
                setTimeout(() => { restartUI(); gameLogic() }, 5000)
            }
        });
    }
}
