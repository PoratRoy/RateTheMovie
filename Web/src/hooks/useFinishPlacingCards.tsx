import { useEffect, useState } from "react";
import { isFinishPlacingElectedpCards } from "../utils/finish";
import { Player } from "../models/types/player";

const useFinishPlacingCards = (players: Player[]) => {
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        const selectedCards = isFinishPlacingElectedpCards(players);
        setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
    }, [players]);

    return { isFinishPlacing };
};

export default useFinishPlacingCards;
