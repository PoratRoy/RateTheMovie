import { GameStatus, WaitingRoom } from "../types/gameStatus";

export const initGameStatus: GameStatus = {
    isGameStart: false,
    isRoundStart: false,
    isPlayerFinishRound: false,
    isRoundFinished: false,
    isGameOver: false,
};

export const initWaitingRoom: WaitingRoom = {
    isWaiting: true,
};
