import React from "react";
import GuestLayout from "../layout/GuestLayout";
import Setup from "../../components/landing/Setup";
import { useParams } from "react-router-dom";
import useGuestPlayer from "../../hooks/multiplayer/useGuestPlayer";
import { RoomStatus } from "../../models/enums/game";
import GameAlreadyStart from "../../components/error/GameAlreadyStart";
import JoinRoom from "../../components/info/JoinRoom";
import RoomFull from "../../components/error/RoomFull";
import GameNotExists from "../../components/error/GameNotExists";

const GuestPage: React.FC = () => {
    const { room } = useParams();
    const { status, setupOption } = useGuestPlayer(room);

    const setPage = () => {
        if (status === RoomStatus.OK && setupOption) {
            return <Setup playerRole="player" setupOption={setupOption} />;
        }

        switch (status) {
            case RoomStatus.STARTED:
                return <GameAlreadyStart />;
            case RoomStatus.FULL:
                return <RoomFull />;
            case RoomStatus.NOT_EXISTS:
                return <GameNotExists />;
            default:
                return <JoinRoom />;
        }
    };

    return <GuestLayout>{setPage()}</GuestLayout>;
};

export default GuestPage;
