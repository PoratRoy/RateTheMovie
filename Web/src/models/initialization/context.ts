import { PACK_CARDS_NUM } from "../constants";
import { FinishAnimation } from "../types/game";
import { MultiplayerState } from "../types/socket";

export const initFinishAnimation: FinishAnimation = {
    playAgainBtn: false,
    showCorrectPack: [...Array(PACK_CARDS_NUM)],
    increaseScore: false,
    removePosition: false,
};

export const initMultiplayerState: MultiplayerState = {
    socket: undefined,
    room: undefined,
    players: [],
};
