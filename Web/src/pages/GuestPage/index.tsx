import React from "react";
import GuestLayout from "../layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { useParams } from "react-router-dom";
import useGuestPlayer from "../../hooks/multiplayer/useGuestPlayer";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const { setupOption } = useGuestPlayer(room);

    return (
        <GuestLayout>
            <Setup playerRole="player" setupOption={setupOption} />
        </GuestLayout>
    );
};

export default GuestPage;
