import React from "react";
import GuestLayout from "../layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { useParams } from "react-router-dom";
import useGuestPlayer from "../../hooks/multiplayer/useGuestPlayer";
import { ModOption } from "../../models/enums/landing";
import GameAlreadyStart from "../../components/error/GameAlreadyStart";
import JoinRoom from "../../components/info/JoinRoom";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const { setupOption } = useGuestPlayer(room);

    return (
        <GuestLayout>
            {setupOption.mod === ModOption.MULTI ? (
                <Setup playerRole="player" setupOption={setupOption} />
            ) : setupOption.mod === ModOption.STARTED ? (
                <GameAlreadyStart />
            ) : (
                <JoinRoom />
            )}
        </GuestLayout>
    );
};

export default GuestPage;
