import { SetupOption } from "../enums/landing";
import { Player } from "./player";

export type SetupLayoutOption = {
    option: SetupOption;
    player?: Player;
};
