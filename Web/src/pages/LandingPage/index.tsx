import React, { useState } from "react";
import { useGamePlayContext } from "../../context/GamePlayContext";
import LandingLayout from "../../components/layout/LandingLayout";
import PlayBtn from "../../components/actions/btn/PlayBtn";
import PlayerBtn from "../../components/actions/btn/PlayerBtn";
import { PlayerColor } from "../../models/types/union";
import { initPlayer } from "../../models/initialization/player";
import { Colors, MULTIPLAYER_BTN_ID, PLAY_BTN_ID } from "../../models/constants";
import Session from "../../utils/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import Filter from "../../components/landing/Filter";
import Multiplayer from "../../components/landing/Multiplayer";

const LandingPage: React.FC = () => {
    const { setPlayers } = useGamePlayContext();

    const [isFilterLayout, setIsFilterLayout] = useState<boolean>(false);

    const onHandlePlay = () => {
        const players = [initPlayer(0, Colors[0] as PlayerColor)];
        Session.set(SessionKey.PLAYERS, players);
        setPlayers(players);
        setIsFilterLayout(true);
    };

    const onHandleMultiplayer = () => {
        const players = [initPlayer(0, Colors[0] as PlayerColor)];
        Session.set(SessionKey.PLAYERS, players);
        setPlayers(players);
    };

    return (
        <LandingLayout isFilterLayout={isFilterLayout}>
            <Filter />
            <Multiplayer />
            <PlayBtn id={PLAY_BTN_ID} title="Play" onClicked={onHandlePlay} />
            <PlayerBtn
                id={MULTIPLAYER_BTN_ID}
                title="Multiplayer"
                onClicked={onHandleMultiplayer}
                onFocused={false}
            />
        </LandingLayout>
    );
};

export default LandingPage;
