import { ModOption } from "../enums/landing";
import { Player } from "./player";

export type SetupOption = {
    mod: ModOption;
    player?: Player;
    roomId?: string;
};
