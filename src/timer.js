import { timer, NEVER, BehaviorSubject } from 'rxjs';
import { map, takeWhile, startWith, switchMap } from 'rxjs/operators';

import { disablePayButton } from "./ticket/ui-creator";

export const countdownTimer = (onCompleteCallback) => {

    const toggle$ = new BehaviorSubject(true);

    const K = 1000;
    const INTERVAL = K;
    const MINUTES = 0.5;
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
    const toRemainingSeconds = (timer) => currentSeconds() - timer;

    const logic = () => {
        const remainingSeconds$ = toggle$.pipe(
            switchMap((running) => (running ? timer(0, INTERVAL) : NEVER)),
            map((timer) => toRemainingSeconds(timer)),
            takeWhile(t => t >= 0),
        );

        const ms$ = remainingSeconds$.pipe(
            map(toMs),
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
