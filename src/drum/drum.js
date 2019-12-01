import { OVERALL_NUMBER_OF_BALLS } from "../constants";
import Ball from "../ball/ball";

import {Observable, timer, NEVER, BehaviorSubject, fromEvent, of, range, from, interval, empty, mapTo} from 'rxjs';
import {
    map,
    tap,
    takeWhile,
    takeUntil,
    share,
    startWith,
    switchMap,
    filter,
    concatMap,
    delay,
    scan, withLatestFrom
} from 'rxjs/operators';

//import {TICKETS} from '../ui-creator';
import {TICKETS, updateUnpredictedCombinations} from '../global';
import Ticket from "../ticket/ticket";
import Combination from "../combination/combination";
import { updatePredictedNumbers, updatePredictedCombinations, updateUnpredictedNumbers } from "../global";
import { gameLogic } from "../game";
import { restartUI } from "../ui-creator";

let tickets = new Ticket([new Combination([1, 2, 3, 4, 5, 6], 0)]);

export default class Drum {
    constructor() {
        this.balls = [];
        for (let i = 1; i <= OVERALL_NUMBER_OF_BALLS; i++) {
            this.balls.push(new Ball(i))
        }
        this.drawnBalls = [];
    }

    /*Maybe drawBall can be promise?*/

    asyncDrawBall = () => {
        return new Promise((resolve, reject) => {
                let index = Math.floor(Math.random() * this.balls.length);
                let drawnBall = this.balls[index];
                this.balls.splice(index, 1);

                this.drawnBalls.push(drawnBall);

                let ballSlots = document.querySelectorAll(".number > div");
                let number = this.drawnBalls[this.drawnBalls.length - 1].number;
                ballSlots[this.drawnBalls.length - 1].style.backgroundColor = Ball.getColour(number);
                ballSlots[this.drawnBalls.length - 1].innerHTML = number;

                resolve(drawnBall);
        })
    };

    drawBall = () => {
        let index = Math.floor(Math.random() * this.balls.length);
        let drawnBall = this.balls[index];
        this.balls.splice(index, 1);

        this.drawnBalls.push(drawnBall);

        let ballSlots = document.querySelectorAll(".number > div");
        let number = this.drawnBalls[this.drawnBalls.length - 1].number;
        ballSlots[this.drawnBalls.length - 1].style.backgroundColor = Ball.getColour(number);
        ballSlots[this.drawnBalls.length - 1].innerHTML = number;

        //console.log(this.balls);
        return drawnBall;
    };

    shuffleDrumUI = () => {
        let index = Math.floor(Math.random() * this.balls.length);
        let ball = this.balls[index];

        let drumSlot = document.querySelector(".drum > div");
        drumSlot.style.backgroundColor = Ball.getColour(ball.number);
        drumSlot.innerHTML = ball.number;
    };

    restartDrumUI = () => {
        let drumSlot = document.querySelector(".drum > div");
        drumSlot.style.backgroundColor = "#2b2b2b";
        drumSlot.innerHTML = '';
    };

    startDrawing = () => {

        let intervalShuffle$ = interval(100).pipe(
            map(val => this.drawnBalls.length),
            takeWhile(val => val < 36)
        );

        intervalShuffle$.subscribe({
            next: () => this.shuffleDrumUI(),
            complete: () => this.restartDrumUI()
        });


        /********************************************************************************/
        let interval$ = interval(1000);

        let intervalFilter$ = interval$.pipe(
            filter(() => this.drawnBalls.length > 35)
        );

        let drawing$ = interval$.pipe(
            takeUntil(intervalFilter$)
        );

        drawing$.subscribe({
            next: () => {
                this.asyncDrawBall()
                    .then((ball) => updatePredictedNumbers(ball.number))
                    .then(() => updatePredictedCombinations(this.drawnBalls, false))
            },
            complete: () => {
                console.log("Completed! Drawn numbers: ", this.drawnBalls);
                updateUnpredictedNumbers(this.drawnBalls);
                updatePredictedCombinations(this.drawnBalls, true);
                setTimeout(() => { restartUI(); gameLogic()}, 3000)
            }
        });

    }

}