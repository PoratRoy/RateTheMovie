import { getRandomNumber } from "../../utils/calc";
import { Player, RivalPlayer } from "../types/player";
import { PlayerRole } from "../types/union";

export const initPlayer = (id: string, name: string, role: PlayerRole = "player"): Player => {
    return {
        id,
        name,
        avater: getRandomNumber(0, 9),
        role,
        score: 0,
        electedCards: { order: [] },
    } as Player;
};

export const updatePlayer = (player: Player, name: string, avater: number): Player => {
    return {
        ...player,
        name,
        avater,
    };
};

export const initRivalPlayer = (player: Player, name: string, avater: number): RivalPlayer => {
    const { id, score, role } = player;
    return {
        id,
        name,
        role,
        avater,
        score,
        cards: [],
    } as RivalPlayer;
};

export const RivalPlayerToPlayer = (rivalPlayer: RivalPlayer): Player => {
    const { id, name, avater, score, role } = rivalPlayer;
    return {
        id,
        name,
        avater,
        role,
        score,
        electedCards: { order: [] },
    } as Player;
};
