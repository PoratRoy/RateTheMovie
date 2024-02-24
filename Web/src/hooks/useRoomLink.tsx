import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SessionKey } from "../models/enums/session";
import Session from "../utils/sessionStorage";
import { SetupOption } from "../models/enums/landing";
import { PlayerRole } from "../models/types/union";

const useRoomLink = (setupOption: SetupOption | undefined, playerRole: PlayerRole) => {
    const { room } = useParams();

    const [roomLink, setRoomLink] = useState<string>("");

    useEffect(() => {
        if (playerRole === "player" && room) {
            setRoomLink(`http://localhost:5173/guest/${room || ""}`);
        } else {
            setTimeout(() => {
                const sessionRoom = Session.get(SessionKey.ROOM);
                if (playerRole === "host" && sessionRoom) {
                    setRoomLink(`http://localhost:5173/guest/${sessionRoom || ""}`);
                }
            }, 50);
        }
    }, [setupOption]);

    return { roomLink };
};

export default useRoomLink;
