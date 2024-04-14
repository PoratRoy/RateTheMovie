import { UseFormWatch } from "react-hook-form";
import { Avatar, Player } from "../player";
import { SetupInputSchema } from "../inputSchema";
import { AvatarSize } from "../union";

export type ProfileProps = {
    player: Player | undefined;
    avatarId: number | undefined;
    setValue: any;
    watch: UseFormWatch<SetupInputSchema>;
};

export type AvatarProps = {
    avatar?: Avatar;
    size?: AvatarSize;
};

export type PlayerProfileProps = {
    currentPlayer: Player | undefined;
    isMotion?: boolean;
};

export type RivalPlayerProfileProps = {
    player: Player;
    isYou?: boolean;
};

export type ResultPlayerProfileProps = {
    players: Player[];
    place: number;
};

export type WaitingRoomProps = {
    currentPlayer?: Player;
    rivalPlayers?: Player[];
};

export type EditAvatarProps = {
    player: Player | undefined;
    avatarId: number | undefined;
    setValue: any;
    watch: UseFormWatch<SetupInputSchema>;
};
