import React, { useCallback } from "react";
import style from "./RankingRoundBoard.module.css";
import { sortPlayersByScore } from "../../../../utils/calc";
import { Player } from "../../../../models/types/player";
import RankingPlayer from "../RoundPlayerPlace";
import { RankingRoundBoardProps } from "../../../../models/types/props/ranking";

const RankingRoundBoard: React.FC<RankingRoundBoardProps> = ({ players }) => {
    const sortedPlayersFunc = useCallback(() => sortPlayersByScore(players), [players]);
    const sortedPlayers = sortedPlayersFunc();

    return (
        <section className={style.rankingBoard}>
            {sortedPlayers.map((player: Player, index: number) => (
                <React.Fragment key={index}>
                    <RankingPlayer player={player} place={index + 1} />
                </React.Fragment>
            ))}
        </section>
    );
};

export default RankingRoundBoard;
