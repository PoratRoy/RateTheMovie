import { ModOption } from "../enums/game";
import { Player } from "./player";

export type SetupOption = {
    mod: ModOption;
    player?: Player;
    roomId?: string;
};
