export type PlayerScoreDetails = {
    score: number | string;
    date: string;
}

export type LeaderBoard = {
    playerId: string;
    scores: PlayerScoreDetails[];
}