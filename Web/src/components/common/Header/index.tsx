import React, { useState } from "react";
import style from "./Header.module.css";
import Logo from "../widgets/Logo";
import PlayerProfile from "../../profile/PlayerProfile";
import RoundTitle from "../RoundTitle";
import PauseBtn from "../../actions/widgets/btn/PauseBtn";
import PauseModal from "../../view/modals/PauseModal";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import TimerBar from "../../actions/TimerBar";
import RivalsProfiles from "../../profile/RivalsProfiles";
import useMod from "../../../hooks/gameplay/useMod";

const Header: React.FC = () => {
    //TODO: extract to custom hook of open close modal
    const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
    const { currentPlayer } = useGamePlayContext();
    const { isMulti } = useMod();

    const handlePause = () => {
        setShowPauseModal(true);
    };

    return (
        <section className={style.gameHeaderContainer}>
            <section className={style.gameHeaderContainerFix} />
            <PlayerProfile currentPlayer={currentPlayer} />
            <div className={style.gameHeaderCenter}>
                <Logo size="small" />
                <RoundTitle />
            </div>
            {isMulti() ? <RivalsProfiles /> : <PauseBtn onClicked={handlePause} />}
            {showPauseModal ? <PauseModal close={() => setShowPauseModal(false)} /> : null}
            <TimerBar />
        </section>
    );
};

export default Header;
