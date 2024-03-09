import React, { useCallback } from "react";
import style from "./RankingBoardTwo.module.css";
import { sortPlayersByScore } from "../../../utils/calc";
import { GAMEOVER_BOARD_ID } from "../../../models/constant";
import { DisplayNone } from "../../../style/style";
import { Player } from "../../../models/types/player";
import RankingPlayer from "../RankingPlayer";
import { RankingBoardTwoProps } from "../../../models/types/props/ranking";

const RankingBoardTwo: React.FC<RankingBoardTwoProps> = ({ players }) => {
    const sortedPlayersFunc = useCallback(() => sortPlayersByScore(players), [players]);
    const sortedPlayers = sortedPlayersFunc();

    return (
        <section className={style.rankingBoard} id={GAMEOVER_BOARD_ID} style={DisplayNone}>
            {sortedPlayers.map((player: Player, index: number) => (
                <React.Fragment key={index}>
                    <RankingPlayer player={player} place={index + 1} />
                </React.Fragment>
            ))}
        </section>
    );
};

export default RankingBoardTwo;
