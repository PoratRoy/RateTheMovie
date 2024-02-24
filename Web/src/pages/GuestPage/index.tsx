import React, { useState } from "react";
import GuestLayout from "../../components/layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { SetupOption } from "../../models/enums/landing";
import { useParams } from "react-router-dom";
import { useSocketContext } from "../../context/SocketContext";
import { useSingleton } from "../../hooks/useSingleton";
import { SetupLayoutOption } from "../../models/types/setup";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const [roomLink, setRoomLink] = useState<string>("");
    const [setupOption, setSetupOption] = useState<SetupLayoutOption>({ option: SetupOption.NONE });

    const { handlePlayerJoinRoom } = useSocketContext();

    useSingleton(async () => {
        const roomLink = `http://localhost:5173/guest/${room || ""}`;
        setRoomLink(roomLink);
        handlePlayerJoinRoom(room || "", (players) => {
            if (players?.length > 0) {
                setSetupOption({ option: SetupOption.MULTI, player: players[players.length-1]});
            }
        });
    });

    return (
        <GuestLayout>
            <Setup
                roomLink={roomLink}
                playerRole="player"
                setupOption={setupOption}
            />
        </GuestLayout>
    );
};

export default GuestPage;
