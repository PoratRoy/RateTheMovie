import React from "react";
import style from "./GameOverBoard.module.css";
import { GameOverBoardProps } from "../../../models/types/props/common";
import { groupPlayersByRank, sortPlayersByScore } from "../../../utils/calc";
import ResultPlayerProfile from "../../profile/ResultPlayerProfile";
import { Player } from "../../../models/types/player";
import { GAMEOVER_BOARD_ID } from "../../../models/constant";
import { DisplayNone } from "../../../style/style";

const GameOverBoard: React.FC<GameOverBoardProps> = ({ players }) => {
    //TODO: useCallback
    const sortedPlayers = sortPlayersByScore(players);
    const playersOrder = groupPlayersByRank(sortedPlayers);
    const levelOne = playersOrder[0];
    const levelTwo = playersOrder[1];
    const levelThree = playersOrder[2];

    return (
        <section id={GAMEOVER_BOARD_ID} style={DisplayNone}>
            {!levelOne[0] || !levelTwo[0] ? (
                <React.Fragment />
            ) : (
                <section className={style.gameOverBoard}>
                    <div className={style.gameOverBoardLevelOne}>
                        <ResultPlayerProfile player={levelOne[0]} place={1} />
                    </div>
                    <div className={style.gameOverBoardLevelTwo}>
                        {levelTwo.map((player: Player, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <ResultPlayerProfile player={player} place={index + 2} />
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <div className={style.gameOverBoardLevelThree}>
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

export default GameOverBoard;
