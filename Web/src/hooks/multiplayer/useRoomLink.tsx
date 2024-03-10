import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModOption } from "../../models/enums/landing";
import { PlayerRole } from "../../models/types/union";
import useMod from "../gameplay/useMod";

const useRoomLink = (mod: ModOption, playerRole: PlayerRole, roomId?: string) => {
    const { isNoneMode } = useMod();
    const { room } = useParams();
    const [roomLink, setRoomLink] = useState<string>("");

    useEffect(() => {
        if (isNoneMode(mod)) return;

        if (playerRole === "player" && room) {
            setRoomLink(`http://localhost:5173/guest/${room || ""}`);
        } else {
            setTimeout(() => {
                if (playerRole === "host" && roomId) {
                    setRoomLink(`http://localhost:5173/guest/${roomId || ""}`);
                }
            }, 50);
        }
    }, [mod, roomId]);

    return { roomLink };
};

export default useRoomLink;
