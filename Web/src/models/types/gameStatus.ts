export type GameStatus = {
    isGameStart: boolean; //for show the game page insted of the waiting room
    isRoundStart: boolean; // for start the timer
    isPlayerFinishRound: boolean;
    isRoundFinished: boolean;
    isGameOver: boolean;
};

export type WaitingRoom = {
    isWaiting: boolean;
};
