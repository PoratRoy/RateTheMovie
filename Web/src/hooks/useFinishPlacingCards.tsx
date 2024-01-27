import { useEffect, useState } from "react";
import { Player } from "../models/types/player";
import { isFinishPlacingElectedpCards } from "../utils/finish";

const useFinishPlacingCards = (players: Player[]) => {
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        const selectedCards = isFinishPlacingElectedpCards(players);
        setIsFinishPlacing(selectedCards ? true : false);
    }, [players]);

    return { isFinishPlacing };
};

export default useFinishPlacingCards;
