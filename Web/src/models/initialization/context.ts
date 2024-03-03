
import { PACK_CARDS_NUM } from "../constant";
import { FinishAnimation } from "../types/game";

export const initFinishAnimation: FinishAnimation = {
    nextRound: false,
    showCorrectPack: [...Array(PACK_CARDS_NUM)],
    increaseScore: false,
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
