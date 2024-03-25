import { useState } from "react";
import { SetupOption } from "../../models/types/setup";
import { ModOption } from "../../models/enums/landing";
import { useSocketContext } from "../../context/SocketContext";
import { useSingleton } from "../global/useSingleton";
import { initPlayer } from "../../models/initialization/player";

const useGuestPlayer = (room: string | undefined) => {
    const [setupOption, setSetupOption] = useState<SetupOption>({ mod: ModOption.NONE });
    const { handlePlayerWantToJoin } = useSocketContext();

    useSingleton(async () => {
        handlePlayerWantToJoin(room, (details) => {
            if (details) {
                const { numberOfPlayers, roomId } = details;
                const name = `Player ${numberOfPlayers + 1}`;
                const player = initPlayer(numberOfPlayers.toString(), name, "player");
                setSetupOption({ mod: ModOption.MULTI, player, roomId });
            } else {
                setSetupOption({ mod: ModOption.STARTED });
            }
        });
    });

    return { setupOption };
};

export default useGuestPlayer;
