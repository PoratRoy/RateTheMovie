import { UseFormWatch } from "react-hook-form";
import { ChildernsProps } from ".";
import { Player } from "../player";
import { SetupInputSchema } from "../inputSchema";
import { AvatarSize } from "../union";

export type PreviewProfileProps = {
    player: Player | undefined;
    avatarId: number | undefined;
    setValue: any;
    watch: UseFormWatch<SetupInputSchema>;
};

export type AvatarProps = {
    img?: string;
    size?: AvatarSize;
};

export type PlayerProfileProps = {
    currentPlayer: Player | undefined;
    isMotion?: boolean;
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

export type WatingRoomProps = {
    rivalPlayers: Player[];
};
