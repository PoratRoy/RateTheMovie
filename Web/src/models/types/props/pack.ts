import { ChildernsProps } from ".";
import { Movie } from "../movie";
import { Player } from "../player";

export type PackProps = ChildernsProps & {
    isWrap?: boolean;
};

export type PackOfCardsProps = {
    player: Player;
};

export type PackWrapperProps = ChildernsProps;

export type ElectedPackLayoutProps = ChildernsProps;

export type PackOfElectedCardsProps = {
    currentPlayer: Player;
    showCorrectPack: Movie[];
};
