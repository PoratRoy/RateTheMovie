import { useState } from "react";
import { SetupOption } from "../../models/types/setup";
import { RoomStatus } from "../../models/enums/game";
import { useSocketContext } from "../../context/SocketContext";
import { useSingleton } from "../global/useSingleton";
import { initPlayer } from "../../models/initialization/player";
import { v4 as uuidv4 } from "uuid";
import { WarRoomStatus } from "../../models/types/warRoom";
import { setMultiSetup } from "../../utils/setup";

const useGuestPlayer = (room: string | undefined) => {
    const [status, setStatus] = useState<RoomStatus>(RoomStatus.PROGRSS);
    const [setupOption, setSetupOption] = useState<SetupOption | undefined>();
    const { handlePlayerWantToJoin } = useSocketContext();

    useSingleton(async () => {
        handlePlayerWantToJoin(room, (props: WarRoomStatus) => {
            if (props && props.details && props.status === RoomStatus.OK) {
                const { numberOfPlayers, roomId } = props.details;
                const name = `Player ${numberOfPlayers + 1}`;
                const player = initPlayer(uuidv4(), name, "player");
                setSetupOption(setMultiSetup(player, roomId));
                setStatus(RoomStatus.OK);
            } else {
                switch (props.status) {
                    case RoomStatus.FULL:
                        setStatus(RoomStatus.FULL);
                        break;
                    case RoomStatus.STARTED:
                        setStatus(RoomStatus.STARTED);
                        break;
                    default:
                        setStatus(RoomStatus.NOT_EXISTS);
                        break;
                }
            }
        });
    });

    return { status, setupOption };
};

export default useGuestPlayer;
