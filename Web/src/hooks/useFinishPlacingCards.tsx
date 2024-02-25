import { useEffect, useState } from "react";
import { isFinishPlacingElectedCards } from "../utils/finish";
import { Player } from "../models/types/player";

//TODO: not in use?
const useFinishPlacingCards = (player: Player) => {
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        const selectedCards = isFinishPlacingElectedCards(player);
        setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
    }, [player]);

    return { isFinishPlacing };
};

export default useFinishPlacingCards;
