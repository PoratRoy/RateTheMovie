import React, { useEffect, useState } from "react";
import PackOfSelectedCards from "../../cards/pack/PackOfSelectedCards";
import FinishBtn from "../../actions/btn/FinishBtn";
import style from "./ElectedPackLayout.module.css";
import PlayAgainBtn from "../../actions/btn/PlayAgainBtn";
import { useGamePlayContext } from "../../../context/GamePlayContext";
import { isFinishPlacingElectedCards } from "../../../utils/finish";

const ElectedPackLayout: React.FC = () => {
    const { finishAnimation } = useGamePlayContext();
    const { players, gameCards, finish, setCorrectPack } = useGamePlayContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!finish) {
            const selectedCards = isFinishPlacingElectedCards(players, gameCards);
            if (selectedCards) {
                setCorrectPack(selectedCards);
                setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
            }
        }
    }, [players]);

    return (
        <section className={style.electedPackContainer}>
            <div className={style.electedPack}>
                <PackOfSelectedCards />
            </div>
            {finishAnimation.playAgainBtn ? (
                <div className={style.playAgain}>
                    <div className={style.playAgainDescription}>
                        {/* TODO: fix it */}
                        {players[0].electedCards.length} correct ratings !
                    </div>
                    <PlayAgainBtn />
                </div>
            ) : (
                <div className={style.electedPackBtns}>
                    <FinishBtn isFinishPlacing={isFinishPlacing} />
                </div>
            )}
        </section>
    );
};

export default ElectedPackLayout;
