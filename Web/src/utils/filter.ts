import { Colors } from "../models/constants";
import { initPlayer } from "../models/initialization/player";
import { Player } from "../models/types/player";
import { PlayerColor } from "../models/types/union";

export const switchPlayers = (numberOfPlayers: number): Player[] => {
    let players: Player[] = [];
    for (let i = 0; i <= numberOfPlayers; i++) {
        players.push(initPlayer(i, Colors[i] as PlayerColor));
    }
    return players;
};
