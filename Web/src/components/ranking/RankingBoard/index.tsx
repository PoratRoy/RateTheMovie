import React, { useCallback } from "react";
import style from "./RankingBoard.module.css";
import { RankingBoardProps } from "../../../models/types/props/common";
import { sortPlayersByScore } from "../../../utils/calc";
import ResultPlayerProfile from "../../profile/ResultPlayerProfile";
import { Player } from "../../../models/types/player";
import { GAMEOVER_BOARD_ID } from "../../../models/constant";
import { DisplayNone } from "../../../style/style";
import { groupPlayersByRank } from "../../../utils/ranking";

const RankingBoard: React.FC<RankingBoardProps> = ({ players }) => {
    const sortedPlayers = useCallback(() => sortPlayersByScore(players), [players]);
    const playersOrder = useCallback(() => groupPlayersByRank(sortedPlayers()), [sortedPlayers]);
    const levelOne = playersOrder()[0];
    const levelTwo = playersOrder()[1];
    const levelThree = playersOrder()[2];

    return (
        <section id={GAMEOVER_BOARD_ID} style={DisplayNone}>
            {!levelOne[0] || !levelTwo[0] ? (
                <React.Fragment />
            ) : (
                <section className={style.rankingBoard}>
                    <div className={style.rankingBoardLevelOne}>
                        <ResultPlayerProfile player={levelOne[0]} place={1} />
                    </div>
                    <div className={style.rankingBoardLevelTwo}>
                        {levelTwo.map((player: Player, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <ResultPlayerProfile player={player} place={index + 2} />
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <div className={style.rankingBoardLevelThree}>
                        {levelThree &&
                            levelThree.map((player: Player, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ResultPlayerProfile player={player} place={index + 4} />
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </section>
            )}
        </section>
    );
};

export default RankingBoard;