import { timer } from 'rxjs';
import { map, takeWhile, startWith } from 'rxjs/operators';

import { disablePayButton } from "./ticket/ui-creator";

export default class CountdownTimer {
    constructor(interval, minutes ) {
        this.interval = interval;
        this.minutes = minutes;
        this.time = this.minutes * this.interval * 60;
    }

    toMinutesDisplay = (ms) => Math.floor(ms / this.interval / 60);

    toSecondsDisplay = (ms) => Math.floor(ms / this.interval) % 60;

    toSecondsDisplayString = (ms) => {
        const seconds = this.toSecondsDisplay(ms);
        return seconds < 10 ? `0${seconds}` : seconds.toString();
    };

    currentSeconds = () => this.time / this.interval;
    toMs = (t) => t * this.interval;
    toRemainingSeconds = (timer) => this.currentSeconds() - timer;

    countDown = (onCompleteCallback) => {
        const remainingSeconds$ = timer(0, this.interval).pipe(
            map((timer) => this.toRemainingSeconds(timer)),
            takeWhile(t => t >= 0),
        );

        const ms$ = remainingSeconds$.pipe(
            map(this.toMs),
        );

        const minutes$ = ms$.pipe(
            map(this.toMinutesDisplay),
            map(s => s.toString()),
            startWith(this.toMinutesDisplay(this.time).toString())
        );

        const seconds$ = ms$.pipe(
            map(this.toSecondsDisplayString),
            startWith(this.toSecondsDisplayString(this.time).toString())
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
    }
}
