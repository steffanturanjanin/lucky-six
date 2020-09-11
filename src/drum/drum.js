import Ball from "../ball/ball";
import Round from "../round/round";

import { NUMBER_OF_BALLS_TO_DRAW, OVERALL_NUMBER_OF_BALLS } from "../constants";

import { interval, zip, from, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { gameLogic } from "../game";

import { restartUI } from "../ui/index";
import { addRoundUI } from "../round/ui-creator";
import { fillBallSlotUI, restartDrumUI, shuffleDrumUI } from "./ui-creator";

export default class Drum {
    constructor() {
        this.round = new Round();

        this.balls = [];

        for (let i = 1; i <= OVERALL_NUMBER_OF_BALLS; i++) {
            this.balls.push(new Ball(i))
        }

        this.orderNumbers = [];
        this.drawnBalls = [];

        for (let i = NUMBER_OF_BALLS_TO_DRAW; i > 0; i--) {
            this.orderNumbers.push(i);

            const index = Math.floor(Math.random() * this.balls.length);
            this.balls.splice(index, 1);

            const drawnBall = this.balls[index];
            this.drawnBalls.push(drawnBall);
        }

        this.finished$ = new Subject();
    }

    shuffleDrum = () => {
        const index = Math.floor(Math.random() * this.balls.length);
        const ball = this.balls[index];

        shuffleDrumUI(ball);
    };

    restartDrum = () => {
        restartDrumUI();
    };

    startDrawing = () => {
        const intervalShuffle$ = interval(100).pipe(
            takeUntil(this.finished$)
        );

        intervalShuffle$.subscribe({
            next: () => this.shuffleDrum(),
            complete: () => this.restartDrum()
        });

        const orderNumbers$ = from(this.orderNumbers);
        const drawnNumbers$ = from(this.drawnBalls);

        const zipped$ = zip(drawnNumbers$, orderNumbers$, interval(1000)).pipe(
            map(([ball, order]) => ({ ball, order })),
        );

        zipped$.subscribe({
            next: (pair) => {
                fillBallSlotUI(pair);
                this.round.updatePredictedNumbers(pair.ball.number);
                this.round.updatePredictedCombinations(this.drawnBalls, false);
            },
            complete: () => {
                this.finished$.next(true);
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
