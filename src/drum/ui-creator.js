import Ball from "../ball/ball";

export const shuffleDrumUI = (ball) => {
    const drumSlot = document.querySelector(".drum > div");
    drumSlot.style.backgroundColor = Ball.getColour(ball.number);
    drumSlot.innerHTML = ball.number;
};

export const restartDrumUI = () => {
    const drumSlot = document.querySelector(".drum > div");
    drumSlot.style.backgroundColor = "#2b2b2b";
    drumSlot.innerHTML = '';
};

export const fillBallSlotUI = (pair) => {
    const ballSlots = document.querySelectorAll(".number > div");
    const number = pair.ball.number;
    ballSlots[ballSlots.length - pair.order].style.backgroundColor = Ball.getColour(number);
    ballSlots[ballSlots.length - pair.order].innerHTML = number;
};

export const restartPool = () => {
    const pool = document.querySelectorAll("#drawn-numbers .circle");
    pool.forEach((slot) => { slot.style.backgroundColor = "#2b2b2b"; slot.innerHTML = "" })
};
