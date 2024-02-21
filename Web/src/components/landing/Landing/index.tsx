import React from "react";
import PlayBtn from "../../actions/btn/PlayBtn";
import PlayerBtn from "../../actions/btn/PlayerBtn";
import { MULTIPLAYER_BTN_ID, PLAY_BTN_ID, SingelPlayerRoom } from "../../../models/constants";
import { initPlayer } from "../../../models/initialization/player";
import { SessionKey } from "../../../models/enums/session";
import Session from "../../../utils/sessionStorage";
import { LandingOpt } from "../../../models/enums/landing";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { LandingProps } from "../../../models/types/props";
import { useSocketContext } from "../../../context/SocketContext";

const Landing: React.FC<LandingProps> = ({ setLayoutOption }) => {
    const { handleCreateNewRoom } = useSocketContext();

    const { setPlayers } = useGamePlayContext();

    const handlePlay = () => {
        const players = [initPlayer(0, "Player 1", "host")];
        Session.set(SessionKey.PLAYERS, players);
        Session.set(SessionKey.ROOM, SingelPlayerRoom);
        setPlayers(players);
        setLayoutOption(LandingOpt.LANDING_FILTER);
    };

    const handleMulti = () => {
        handleCreateNewRoom();
        setLayoutOption(LandingOpt.LANDING_MULTI);
    };

    return (
        <React.Fragment>
            <PlayBtn id={PLAY_BTN_ID} title="Play" onClicked={handlePlay} />
            <PlayerBtn
                id={MULTIPLAYER_BTN_ID}
                title="Multiplayer"
                onClicked={handleMulti}
                onFocused={false}
            />
        </React.Fragment>
    );
};

export default Landing;
