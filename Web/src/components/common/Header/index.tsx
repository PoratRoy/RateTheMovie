import React from "react";
import style from "./Header.module.css";
import PlayerProfile from "../../profile/PlayerProfile";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import RivalsProfiles from "../../profile/RivalsProfiles";
import useMod from "../../../hooks/gameplay/useMod";
import { HeaderProps } from "../../../models/types/props/common";
import RoundTimer from "../../actions/timer/RoundTimer";
import QuitCircleBtn from "../../actions/widgets/btn/QuitCircleBtn";
import RestartCircleBtn from "../../actions/widgets/btn/RestartCircleBtn";

const Header: React.FC<HeaderProps> = () => {
    const { currentPlayer } = useGamePlayContext();
    const { isMulti } = useMod();

    return (
        <section className={style.gameHeaderContainer}>
            <PlayerProfile currentPlayer={currentPlayer} isMotion />

            {isMulti() ? (
                <RivalsProfiles />
            ) : (
                <section className={style.gameHeaderBtns}>
                    <RestartCircleBtn close={() => {}} />
                    <QuitCircleBtn close={() => {}} />
                </section>
            )}
            {isMulti() ? <RoundTimer /> : null}
        </section>
    );
};

export default Header;
