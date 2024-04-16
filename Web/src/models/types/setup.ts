import { ModOption } from "../enums/game";
import { Player } from "./player";

export type SetupOption = {
    mod: ModOption;
    player?: Player;
    roomId?: string;
};

export type SetupInputSchema = {
    name: string | undefined;
    avatar: string | undefined;
    rounds: string | undefined;
    difficulty: string | undefined;
};
