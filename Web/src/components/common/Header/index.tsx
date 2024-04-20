import React from "react";
import style from "./Header.module.css";
import PlayerProfile from "../../profile/PlayerProfile";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import RivalsProfiles from "../../profile/RivalsProfiles";
import useMod from "../../../hooks/gameplay/useMod";
import { HeaderProps } from "../../../models/types/props/common";
import RoundTimer from "../../actions/timer/RoundTimer";
import QuitCircleBtn from "../../actions/widgets/btn/QuitCircleBtn";
import RoundsNumber from "../RoundsNumber";
import { ROUND_NUM } from "../../../models/constant";

const Header: React.FC<HeaderProps> = () => {
    const { currentPlayer, game } = useGamePlayContext();
    const { isMulti } = useMod();

    return (
        <section className={style.gameHeaderContainer}>
            <PlayerProfile currentPlayer={currentPlayer} isMotion />
            <section className={style.gameHeaderBtns}>
                <RoundsNumber current={game?.currentRound || 1} total={game?.rounds || ROUND_NUM} />

                {isMulti() ? <RivalsProfiles /> : <QuitCircleBtn close={() => {}} />}
            </section>

            {isMulti() ? <RoundTimer /> : null}
        </section>
    );
};

export default Header;
