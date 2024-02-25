import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../utils/finish";
import { useGamePlayContext } from "../context/GamePlayContext";

const useHandleElectedCard = () => {
    const { currentPlayer, finish, setCorrectPack } = useGamePlayContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!finish && currentPlayer) {
            const selectedCards = isFinishPlacingElectedCards(currentPlayer);
            if (selectedCards) {
                setCorrectPack(selectedCards);
                setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
            }
        }
    }, [currentPlayer]);

    return { isFinishPlacing };
};

export default useHandleElectedCard;
