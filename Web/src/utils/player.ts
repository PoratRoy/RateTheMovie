import { RivalPlayer } from "../models/types/player";

export const filterRivalPlayers = (players: RivalPlayer[], playerId: string | undefined) => {
    if (!playerId) return players;
    return players.filter((p) => p.id !== playerId);
};
