import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../utils/finish";
import { useGamePlayContext } from "../context/GamePlayContext";

const useHandleElectedCard = () => {
    const { players, finish, setCorrectPack } = useGamePlayContext();
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        if (!finish) {
            const selectedCards = isFinishPlacingElectedCards(players);
            if (selectedCards) {
                setCorrectPack(selectedCards);
                setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
            }
        }
    }, [players]);

    return { isFinishPlacing };
};

export default useHandleElectedCard;
