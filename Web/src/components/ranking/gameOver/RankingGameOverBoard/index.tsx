import React, { useCallback } from "react";
import style from "./RankingGameOverBoard.module.css";
import { sortPlayersByScore } from "../../../../utils/calc";
import ResultPlayerPlace from "../ResultPlayerPlace";
import { Player } from "../../../../models/types/player";
import { groupPlayersByRank } from "../../../../utils/ranking";
import { RankingGameOverBoardProps } from "../../../../models/types/props/ranking";

const RankingGameOverBoard: React.FC<RankingGameOverBoardProps> = ({ players }) => {
    const sortedPlayers = useCallback(() => sortPlayersByScore(players), [players]);
    const playersOrder = useCallback(() => groupPlayersByRank(sortedPlayers()), [sortedPlayers]);
    const levelOne = playersOrder()[0];
    const levelTwo = playersOrder()[1];
    const levelThree = playersOrder()[2];

    return (
        <section style={{width: "100%"}}>
            {!levelOne[0] || !levelTwo[0] ? (
                <React.Fragment />
            ) : (
                <section className={style.rankingBoard}>
                    <div className={style.rankingBoardLevelOne}>
                        <ResultPlayerPlace player={levelOne[0]} place={1} />
                    </div>
                    <div className={style.rankingBoardLevelTwo}>
                        {levelTwo.map((player: Player, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <ResultPlayerPlace player={player} place={index + 2} />
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <div className={style.rankingBoardLevelThree}>
                        {levelThree &&
                            levelThree.map((player: Player, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ResultPlayerPlace player={player} place={index + 4} />
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </section>
            )}
        </section>
    );
};

export default RankingGameOverBoard;
