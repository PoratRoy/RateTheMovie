import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../../utils/finish";
import { useGamePlayContext } from "../../context/GamePlayContext";

const useHandleElectedCard = () => {
    const { currentPlayer, finish, setCorrectOrder } = useGamePlayContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!finish && currentPlayer) {
            const selectedCards = isFinishPlacingElectedCards(currentPlayer);
            if (selectedCards) {
                setCorrectOrder(selectedCards);
                setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
            }
        }
    }, [currentPlayer]);

    return { isFinishPlacing };
};

export default useHandleElectedCard;
