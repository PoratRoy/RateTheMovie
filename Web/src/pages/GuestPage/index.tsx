import React, { useState } from "react";
import GuestLayout from "../layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { SetupOption } from "../../models/enums/landing";
import { useSocketContext } from "../../context/SocketContext";
import { useSingleton } from "../../hooks/global/useSingleton";
import { SetupLayoutOption } from "../../models/types/setup";
import { initPlayer } from "../../models/initialization/player";
import { useParams } from "react-router-dom";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const [setupOption, setSetupOption] = useState<SetupLayoutOption>({ option: SetupOption.NONE });

    const { handlePlayerWantToJoin } = useSocketContext();

    useSingleton(async () => {
        handlePlayerWantToJoin(room,(details) => {
            const { numberOfPlayers, roomId } = details;
            const name = `Player ${numberOfPlayers + 1}`
            const player = initPlayer(numberOfPlayers.toString(), name, "player");
            setSetupOption({ option: SetupOption.MULTI, player, roomId });
        });
    });

    return (
        <GuestLayout>
            <Setup playerRole="player" setupOption={setupOption} />
        </GuestLayout>
    );
};

export default GuestPage;
