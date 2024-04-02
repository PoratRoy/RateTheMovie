import { Player } from "../models/types/player";

export const filterRivalPlayers = (players: Player[], playerId: string | undefined) => {
    if (!playerId) return players;
    return players.filter((p) => p.id !== playerId);
};

export const filterOnlyRivalPlayers = (players: Player[], currentPlayer: Player | undefined) => {
    if (!currentPlayer?.id) return [];
    return players.filter((p) => p.id !== currentPlayer.id);
}