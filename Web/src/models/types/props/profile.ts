import { ChildernsProps } from ".";
import { Player, RivalPlayer } from "../player";

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
    player: RivalPlayer;
};
