import React from "react";
import PlayBtn from "../../actions/btn/PlayBtn";
import MultiBtn from "../../actions/btn/MultiBtn";
import {
    DESCRIPTION_ID,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
    SingelPlayerRoom,
} from "../../../models/constants";
import { initPlayer } from "../../../models/initialization/player";
import { SessionKey } from "../../../models/enums/session";
import Session from "../../../utils/sessionStorage";
import { SetupOption } from "../../../models/enums/landing";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { LandingProps } from "../../../models/types/props";
import { useSocketContext } from "../../../context/SocketContext";
import Description from "../../common/Description";
import ImdbIcon from "../../common/ImdbIcon";
import style from "./Landing.module.css";

const Landing: React.FC<LandingProps> = ({ setSetupOption }) => {
    const { handleCreateNewRoom } = useSocketContext();

    const { setPlayers } = useGamePlayContext();

    const handlePlay = () => {
        const players = [initPlayer(0, "Player 1", "host")];
        Session.set(SessionKey.PLAYERS, players);
        Session.set(SessionKey.ROOM, SingelPlayerRoom);
        setPlayers(players);
        setSetupOption(SetupOption.SINGEL);
    };

    const handleMulti = () => {
        handleCreateNewRoom();
        setSetupOption(SetupOption.MULTI);
    };

    return (
        <section className={style.landingContainer}>
            <Description
                id={DESCRIPTION_ID}
                description={
                    <span>
                        According to <ImdbIcon /> rating
                    </span>
                }
            />
            <section className={style.btnsContainer}>
                <PlayBtn id={PLAY_BTN_ID} title="Play" onClicked={handlePlay} />
                <MultiBtn id={MULTIPLAYER_BTN_ID} title="Multiplayer" onClicked={handleMulti} />
            </section>
        </section>
    );
};

export default Landing;
