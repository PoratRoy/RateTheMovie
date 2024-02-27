import { ChildernsProps } from ".";
import { Player } from "../player";

export type PreviewProfileProps = ChildernsProps & {
    profileName?: string;
    avaterId: number;
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
