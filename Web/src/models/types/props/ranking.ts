import { ChildernsProps } from ".";
import { Player } from "../player";

export type RankingPlayerProps = {
    place: number;
    players: Player[];
};

export type PlayerPlaceProps = {
    place: number;
    player: Player;
};

export type RankingRoundBoardProps = {
    players: (Player | undefined)[];
};

export type RankingGameOverBoardProps = {
    players: (Player | undefined)[];
};

export type PlaceProps = ChildernsProps & {
    place: number;
    players?: Player[];
};
