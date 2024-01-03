import React, { useEffect, useState } from "react";
import style from "./FinishBtn.module.css";
import { PACK_CARDS_NUM } from "../../../models/constants";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { Player } from "../../../models/types/player";

const FinishBtn: React.FC = () => {
    const { correctOrder, setPlayers, players, setFinish } = useGamePlayContext();
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        let finish = true;
        players.every((player: Player) => {
            const selectedCards = player.selectedCards;
            const isAllFilled = selectedCards.every((card) => card?.movie !== undefined);
            if (selectedCards.length !== PACK_CARDS_NUM || !isAllFilled) {
                finish = false;
                return;
            }
        });
        setIsFinished(finish);
    }, [players]);

    const handleFinish = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                let playerScore = 0;
                for (let i = 0; i < correctOrder.length; i++) {
                    if (correctOrder[i].movie === player.selectedCards[i]?.movie) {
                        playerScore += parseFloat(correctOrder[i]?.movie?.imdbRating || "0");
                    }
                }
                return {
                    ...player,
                    score: player.score + playerScore,
                };
            });
        });
        setFinish(true);
    };

    return (
        <button disabled={!isFinished} onClick={handleFinish} className={style.finishBtn}>
            Done
        </button>
    );
};

export default FinishBtn;
