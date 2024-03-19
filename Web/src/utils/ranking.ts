import { Player } from "../models/types/player";

export const groupPlayersByRank = (players: Player[]): Player[][] => {
    const numPlayers = players.length;

    if (numPlayers <= 2) {
        return [[players[0]], [players[1]]];
    }

    const levelOne: Player | undefined = players.shift();
    if (!levelOne) return [[], [], []];

    const levelTwo = players.slice(0, 2);
    const levelThree = players.slice(2);

    return [[levelOne], levelTwo, levelThree];
};
