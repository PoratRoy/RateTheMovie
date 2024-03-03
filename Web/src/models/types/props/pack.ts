import { ChildernsProps } from ".";
import { Movie } from "../movie";
import { Player } from "../player";
import { PackDisplay } from "../union";

export type PackProps = ChildernsProps & {
    packDisplay?: PackDisplay;
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

export type PackOfResultProps = {
    revealCards: Movie[];
    currentPlayer: Player | undefined;
}
