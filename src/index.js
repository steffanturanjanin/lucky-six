console.log('hello? from the other side??? is this working??');

import { createDrawnNumbersPlaceholder, createSelectNumbersPlaceholder } from "./ui-creator";
import {countdownTimer} from './timer';

createDrawnNumbersPlaceholder();
createSelectNumbersPlaceholder();

countdownTimer();

/*************************************************/

import {Observable, timer, NEVER, BehaviorSubject, fromEvent, of, range, from, interval} from 'rxjs';
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

import Drum from './drum';

let drum = new Drum();

console.log(drum);

drum.startDrawing();

/*import {niz} from "./ui-creator";
console.log(niz);*/

/*let drawnNumbers = [];

const drawNumber = () => {
    let drawnNumber = Math.floor(Math.random()*48+1);
    if (drawnNumbers.indexOf(drawnNumber) === -1) {
        drawnNumbers.push(drawnNumber);
        console.log(drawnNumbers);
        return drawnNumber;
    }
    console.log(-1);
    return -1;
};

let drawStream$ = interval(1000);



let overall$ = drawStream$.pipe(
    filter(val => drawnNumbers.length > 35)
);

let dr$ = drawStream$.pipe(
    takeUntil(overall$)
);

let observer = {
    next: () => drawNumber(),
    complete: () => console.log("Completed!")
};

dr$.subscribe(observer);*/

