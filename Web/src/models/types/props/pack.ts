import { ChildernsProps } from ".";
import { Card } from "../card";
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
    showCorrectPack: Card[];
};

export type PackOfResultProps = {
    revealCards: Card[];
    currentPlayer: Player | undefined;
}
