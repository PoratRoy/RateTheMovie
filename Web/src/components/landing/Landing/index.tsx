import React from "react";
import PlayBtn from "../../actions/btn/PlayBtn";
import PlayerBtn from "../../actions/btn/PlayerBtn";
import { Colors, MULTIPLAYER_BTN_ID, PLAY_BTN_ID } from "../../../models/constants";
import { initPlayer } from "../../../models/initialization/player";
import { PlayerColor } from "../../../models/types/union";
import { SessionKey } from "../../../models/enums/session";
import Session from "../../../utils/sessionStorage";
import { LandingOpt } from "../../../models/enums/landing";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { LandingProps } from "../../../models/types/props";

const Landing: React.FC<LandingProps> = ({ setLayoutOption }) => {
    const { setPlayers } = useGamePlayContext();

    const handlePlay = () => {
        const players = [initPlayer(0, Colors[0] as PlayerColor, "Player 1")];
        Session.set(SessionKey.PLAYERS, players);
        setPlayers(players);
        setLayoutOption(LandingOpt.LANDING_FILTER);
    };

    const handleMulti = () => {
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
