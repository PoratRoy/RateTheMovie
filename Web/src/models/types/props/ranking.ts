import { ChildernsProps } from ".";
import { Player } from "../player";

export type RankingPlayerProps = {
    place: number;
    player: Player;
};

export type RankingRoundBoardProps = {
    players: Player[];
};

export type RankingGameOverBoardProps = {
    players: Player[];
};

export type PlaceProps = ChildernsProps & {
    place: number;
    playerId?: string;
    isOpen?: boolean;
};
