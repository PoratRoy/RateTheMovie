import { UseFormWatch } from "react-hook-form";
import { ChildernsProps } from ".";
import { Player } from "../player";
import { SetupInputSchema } from "../inputSchema";

export type PreviewProfileProps = {
    player: Player | undefined;
    avatarId: number | undefined;
    setValue: any;
    watch: UseFormWatch<SetupInputSchema>
};

export type AvatarProps = {
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
