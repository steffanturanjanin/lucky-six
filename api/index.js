import { ROUND_URL } from "./constants";

export const POST_ROUND = (round) => {
    return fetch(ROUND_URL, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(round)
    })
        .then(response => response.json())
};

export const GET_ROUNDS = () => {
    return fetch(ROUND_URL, {
        method: "GET"
    })
        .then(response => response.json())
};