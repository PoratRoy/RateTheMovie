import React from "react";
import PlayBtn from "../../actions/widgets/btn/PlayBtn";
import MultiBtn from "../../actions/widgets/btn/MultiBtn";
import { initPlayer } from "../../../models/initialization/player";
import { ModOption } from "../../../models/enums/landing";
import { useSocketContext } from "../../../context/SocketContext";
import Description from "../../common/Description";
import ImdbIcon from "../../common/widgets/ImdbIcon";
import style from "./Landing.module.css";
import {
    DESCRIPTION_ID,
    DefualtPlayerName,
    MULTIPLAYER_BTN_ID,
    PLAY_BTN_ID,
    SinglePlayerRoom,
} from "../../../models/constant";
import { LandingProps } from "../../../models/types/props/landing";

const Landing: React.FC<LandingProps> = ({ setSetupOption }) => {
    const { handleCreateNewRoom } = useSocketContext();

    const handlePlay = () => {
        const player = initPlayer("0", DefualtPlayerName, "host");
        setSetupOption({ mod: ModOption.SINGLE, player, roomId: SinglePlayerRoom });
    };

    const handleMulti = () => {
        handleCreateNewRoom((details) => {
            const { numberOfPlayers, roomId } = details;
            const player = initPlayer(numberOfPlayers.toString(), DefualtPlayerName, "host");
            setSetupOption({ mod: ModOption.MULTI, player, roomId });
        });
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
