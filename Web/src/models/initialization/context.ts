import { PACK_CARDS_NUM } from "../constants";
import { FinishAnimation } from "../types/game";

export const initFinishAnimation: FinishAnimation = {
    playAgainBtn: false,
    showCorrectPack: [...Array(PACK_CARDS_NUM)],
    increaseScore: false,
    removePosition: false,
};


//TODO: in use?
// export const initMultiplayerState: MultiplayerState = {
//     socket: undefined,
//     warRoom: {
//         room: undefined,
//         players: [],
//         gameCards: [],
//         filters: {
//             year: undefined,
//             genre: undefined,
//             language: undefined,
//         },
//     },
// };
