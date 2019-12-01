import { Observable, timer, NEVER, BehaviorSubject, fromEvent, of } from 'rxjs';
import { map, tap, takeWhile, takeUntil, share, startWith, switchMap, filter } from 'rxjs/operators';

import { disablePayButton } from "./ticket/ui-creator";

export const countdownTimer = (onCompleteCallback) => {

    const toggle$ = new BehaviorSubject(true);

    const K = 1000;
    const INTERVAL = K;
    const MINUTES = 0.15;
    const TIME = MINUTES * K * 60;

    let current;
    let time = TIME;

    const toMinutesDisplay = (ms) => Math.floor(ms / K / 60);
    const toSecondsDisplay = (ms) => Math.floor(ms / K) % 60;

    const toSecondsDisplayString = (ms) => {
        const seconds = toSecondsDisplay(ms);
        return seconds < 10 ? `0${seconds}` : seconds.toString();
    };

    const currentSeconds = () => time / INTERVAL;
    const toMs = (t) => t * INTERVAL;
    const toRemainingSeconds = (t) => currentSeconds() - t;

    const logic = () => {
        const remainingSeconds$ = toggle$.pipe(
            switchMap((running) => (running ? timer(0, INTERVAL) : NEVER)),
            map(toRemainingSeconds),
            takeWhile(t => t >= 0),
        );

        const ms$ = remainingSeconds$.pipe(
            map(toMs),
            //tap(t => current = t)
        );

        const minutes$ = ms$.pipe(
            map(toMinutesDisplay),
            map(s => s.toString()),
            startWith(toMinutesDisplay(time).toString())
        );

        const seconds$ = ms$.pipe(
            map(toSecondsDisplayString),
            startWith(toSecondsDisplayString(time).toString())
        );

        // update DOM
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        updateDom(minutes$, minutesElement);
        updateDom(seconds$, secondsElement);

        remainingSeconds$.subscribe({
            complete: () => {
                disablePayButton(true);
                onCompleteCallback();
            }
        });

        function updateDom(source$, element) {
            source$.subscribe((value) => element.innerHTML = value);
        }
    };

    logic();
};