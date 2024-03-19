import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../../utils/finish";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { useGameStatusContext } from "../../context/GameStatusContext";

const useHandleElectedCard = () => {
    const { currentPlayer, setCorrectOrder } = useGamePlayContext();
    const {
        gameStatus: { isPlayerFinishRound },
    } = useGameStatusContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!isPlayerFinishRound && currentPlayer) {
            const selectedCards = isFinishPlacingElectedCards(currentPlayer);
            setCorrectOrder(selectedCards);
            setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
        }
    }, [currentPlayer]);

    return { isFinishPlacing };
};

export default useHandleElectedCard;
