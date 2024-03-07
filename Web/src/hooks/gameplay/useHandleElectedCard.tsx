import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../../utils/finish";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useHandleElectedCard = () => {
    const { currentPlayer, finishRound, setCorrectOrder } = useGamePlayContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!finishRound && currentPlayer) {
            const selectedCards = isFinishPlacingElectedCards(currentPlayer);
            setCorrectOrder(selectedCards);
            setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
        }
    }, [currentPlayer]);

    return { isFinishPlacing };
};

export default useHandleElectedCard;
