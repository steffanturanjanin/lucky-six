import { COMBINATION_SIZE, SHOW_NOTIFICATION } from "../constants";
import { COMBINATIONS, SELECTED_NUMBERS } from "../global";

import { fromEvent, merge, timer } from "rxjs";
import { switchMap, take } from "rxjs/operators";

export const notificationEvent = () => {
    const selectedNumberEvents$ = fromEvent(document.getElementById("select-numbers").querySelectorAll(".circle"), 'click');

    const addedCombinationEvents$ = fromEvent(document.getElementById("btn-add-combination"), 'click');

    const addedTicketEvents$ = fromEvent(document.getElementById("btn-pay"), 'click');

    const mergedEvents$ = merge(selectedNumberEvents$, addedCombinationEvents$, addedTicketEvents$);

    const notificationDiv = document.getElementById('notifications');

    let hideNotification$ = mergedEvents$.pipe(
        switchMap(() => timer(0, 1000).pipe(
            take(SHOW_NOTIFICATION)
        )),
    );

    hideNotification$.subscribe({
        next: (i) => {
            if (i === SHOW_NOTIFICATION - 1) {
                notificationDiv.hidden = true;
            }
        }
    });

    mergedEvents$.subscribe(event => {
        notificationDiv.hidden = false;
        notificationDiv.innerHTML = '';
        notificationDiv.className = 'content-item';

        const notificationParagraph = document.createElement('p');

        if (event.target.id.includes('circle')) {
            if (SELECTED_NUMBERS.length > 0 || SELECTED_NUMBERS.length === COMBINATION_SIZE) {
                notificationParagraph.innerText = "Selected numbers: " +  SELECTED_NUMBERS.toString();
            }
        }

        if (event.target.id.includes('delete-combination')) {
            console.log('deleted!!!');
            notificationParagraph.innerText = "Combination removed!";
        }

        if (event.target.id === "btn-add-combination") {
            notificationParagraph.innerText = "Combination: " +  SELECTED_NUMBERS.toString() + " added!";
        }

        if (event.target.id === "btn-pay") {
            if (COMBINATIONS.length > 0) {
                notificationParagraph.innerText = "Ticket added!";
            } else {
                notificationParagraph.innerText = "You have not added any combinations!";
            }
        }

        notificationDiv.appendChild(notificationParagraph);
    });
};
