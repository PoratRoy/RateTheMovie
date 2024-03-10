import React from "react";
import style from "./Header.module.css";
import Logo from "../widgets/Logo";
import PlayerProfile from "../../profile/PlayerProfile";
import RoundTitle from "../RoundTitle";
import PauseBtn from "../../actions/widgets/btn/PauseBtn";
import PauseModal from "../../view/modals/PauseModal";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import TimerBar from "../../actions/animation/TimerBar";
import RivalsProfiles from "../../profile/RivalsProfiles";
import useMod from "../../../hooks/gameplay/useMod";
import { ROUND_NUM } from "../../../models/constant";
import useShowModal from "../../../hooks/global/useShowModal";
import { HeaderProps } from "../../../models/types/props/common";

const Header: React.FC<HeaderProps> = ({ activateTimer }) => {
    const { showModal, handleOpen, handleClose } = useShowModal();
    const { currentPlayer, game } = useGamePlayContext();
    const { isMulti } = useMod();

    const handlePause = () => {
        handleOpen();
    };

    return (
        <section className={style.gameHeaderContainer}>
            <section className={style.gameHeaderContainerFix} />
            <PlayerProfile currentPlayer={currentPlayer} />
            {/* <div className={style.gameHeaderCenter}>
                <Logo size="small" />
                <RoundTitle current={game?.currentRound || 1} total={game?.rounds || ROUND_NUM} />
            </div> */}
            {isMulti() ? <RivalsProfiles /> : <PauseBtn onClicked={handlePause} />}
            {isMulti() ? <TimerBar position="absolute" activate={activateTimer} /> : null}
            {showModal ? <PauseModal close={handleClose} /> : null}
        </section>
    );
};

export default Header;
