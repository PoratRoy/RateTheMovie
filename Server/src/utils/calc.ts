import { Player } from "../model/types/player";

export const getPlayerIndex = (players: Player[]) => {
    return players.length;
}

export const getRandomNumber = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};