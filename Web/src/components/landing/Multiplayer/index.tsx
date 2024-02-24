import { useGamePlayContext } from "../../../context/GamePlayContext";
import useInitialForm from "../../../hooks/useInitialForm";
import { SessionKey } from "../../../models/enums/session";
import { multiplayerInputs } from "../../../models/initialization/form";
import { MultiplayerInputSchema } from "../../../models/types/inputSchema";
import { MultiplayerProps } from "../../../models/types/props";
import { multiFormSchema } from "../../../models/validation/form";
import Session from "../../../utils/sessionStorage";
import RoomLink from "../../actions/RoomLink";
import NameInput from "../../actions/input/NameInput";
import { useParams } from "react-router-dom";
import MultiLayout from "../../layout/MultiLayout";
import { useEffect, useState } from "react";

const Multiplayer: React.FC<MultiplayerProps> = ({ setupOption, setSetupOption, playerRole }) => {
    const { players } = useGamePlayContext();
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

    const methods = useInitialForm<MultiplayerInputSchema>(multiFormSchema, {
        name: players[players.length - 1]?.name || "", //TODO: fix this
    });

    return (
        // <MultiLayout
        //     setLayoutOption={setSetupOption}
        //     methods={methods}
        //     playerRole={playerRole}
        // >
        //     <RoomLink roomLink={roomLink} />
        //     <NameInput
        //         id={multiplayerInputs.name.id}
        //         placeholder={multiplayerInputs.name.placeholder}
        //         label={multiplayerInputs.name.label}
        //     />
        // </MultiLayout>
        <div></div>
    );
};

export default Multiplayer;
