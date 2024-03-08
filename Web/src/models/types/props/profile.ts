import { ChildernsProps } from ".";
import { Player } from "../player";

export type PreviewProfileProps = ChildernsProps & {
    profileName?: string;
    avaterId: number | undefined;
};

export type AvaterProps = {
    img?: string;
    isFocus?: boolean;
};

export type PlayerProfileProps = {
    currentPlayer: Player | undefined;
};

export type RivalPlayerProfileProps = {
    player: Player;
};

export type ResultPlayerProfileProps = {
    player: Player;
    place: number;
};

export type PlaceProps = ChildernsProps & {
    place: number;
};
