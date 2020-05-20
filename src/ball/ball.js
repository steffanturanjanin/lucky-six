import { BLACK, BLUE, BROWN, COLOURS, GREEN, KHAKI, PURPLE, RED, YELLOW } from "../constants";

export default class Ball {
    constructor(number) {
        this.number = number;
        this.colour = COLOURS[(number - 1) % (COLOURS.length)];
    }

    static getColourName = (number) => {
        return COLOURS[(number - 1) % (COLOURS.length)];
    };

     static getColour = (number) => {
        switch (Ball.getColourName(number)) {
            case RED : {
                return "#eb3434"
            }

            case BLUE : {
                return "#3471eb"
            }

            case GREEN: {
                return "#6eeb34"
            }

            case PURPLE: {
                return "#d634eb"
            }

            case BROWN: {
                return "#a16c38";
            }

            case YELLOW: {
                return "#e3df05";
            }

            case KHAKI: {
                return "#f2be1f";
            }

            case BLACK: {
                return "#000000";
            }
        }
     }
}
