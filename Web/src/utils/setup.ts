import { SinglePlayerRoom } from "../models/constant";
import { ModOption } from "../models/enums/game";
import { Player } from "../models/types/player";
import { SetupOption } from "../models/types/setup";

export const setSingleSetup = (player?: Player | undefined) => {
    return {
        mod: ModOption.SINGLE,
        player,
        roomId: SinglePlayerRoom,
    } as SetupOption;
};

export const setMultiSetup = (player: Player, roomId: string | undefined) => {
    return {
        mod: ModOption.MULTI,
        player,
        roomId,
    } as SetupOption;
};
