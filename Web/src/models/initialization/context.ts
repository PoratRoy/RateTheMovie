import { PACK_CARDS_NUM } from "../constants";
import { FinishAnimation } from "../types/game";
import { MultiplayerState } from "../types/multiplayer";

export const initFinishAnimation: FinishAnimation = {
    playAgainBtn: false,
    showCorrectPack: [...Array(PACK_CARDS_NUM)],
    increaseScore: false,
    removePosition: false,
};

export const initMultiplayerState: MultiplayerState = {
    socket: undefined,
    gameRoom: {
        room: undefined,
        players: [],
        gameCards: [],
        filters: {
            year: undefined,
            genre: undefined,
            language: undefined,
        },
    },
};
