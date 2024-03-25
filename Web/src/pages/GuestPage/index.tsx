import React from "react";
import GuestLayout from "../layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { useParams } from "react-router-dom";
import useGuestPlayer from "../../hooks/multiplayer/useGuestPlayer";
import { ModOption } from "../../models/enums/landing";
import GameAlreadyStart from "../../components/error/GameAlreadyStart";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const { setupOption } = useGuestPlayer(room);
    // TODO: create loading component
    return (
        <GuestLayout>
            {setupOption.mod === ModOption.MULTI ? (
                <Setup playerRole="player" setupOption={setupOption} />
            ) : setupOption.mod === ModOption.STARTED ? (
                <GameAlreadyStart />
            ) : (
                <div>Loading...</div>
            )}
        </GuestLayout>
    );
};

export default GuestPage;
