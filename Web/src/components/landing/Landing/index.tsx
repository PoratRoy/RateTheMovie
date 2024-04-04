import React from "react";
import PlayBtn from "../../actions/widgets/btn/PlayBtn";
import MultiBtn from "../../actions/widgets/btn/MultiBtn";
import { initPlayer } from "../../../models/initialization/player";
import { ModOption } from "../../../models/enums/landing";
import { useSocketContext } from "../../../context/SocketContext";
import Description from "../../common/Description";
import ImdbIcon from "../../common/widgets/ImdbIcon";
import style from "./Landing.module.css";
import { v4 as uuidv4 } from "uuid";
import { LandingProps } from "../../../models/types/props/landing";
import { DefualtPlayerName, SinglePlayerRoom } from "../../../models/constant";
import { DESCRIPTION_ID, MULTIPLAYER_BTN_ID, PLAY_BTN_ID } from "../../../models/constant/ids";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { Player } from "../../../models/types/player";

const Landing: React.FC<LandingProps> = ({ setSetupOption }) => {
    const { handleCreateNewRoom } = useSocketContext();
    const { currentPlayer } = useGamePlayContext();

    const handlePlay = () => {
        const player = currentPlayer
            ? currentPlayer
            : initPlayer(uuidv4(), DefualtPlayerName, "host");
        setSetupOption({ mod: ModOption.SINGLE, player, roomId: SinglePlayerRoom });
    };

    const handleMulti = () => {
        handleCreateNewRoom((details) => {
            const { roomId } = details;
            const player = currentPlayer
                ? ({
                      ...currentPlayer,
                      role: "host",
                  } as Player)
                : initPlayer(uuidv4(), DefualtPlayerName, "host");

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
                <MultiBtn
                    id={MULTIPLAYER_BTN_ID}
                    title="Play With Friends"
                    onClicked={handleMulti}
                />
                <PlayBtn id={PLAY_BTN_ID} title="Practice Yourself" onClicked={handlePlay} />
            </section>
        </section>
    );
};

export default Landing;
