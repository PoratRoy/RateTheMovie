import { useEffect, useState } from "react";
import { Player } from "../../../Common/model/player";
import { isFinishPlacingElectedpCards } from "../utils/finish";

const useFinishPlacingCards = (players: Player[]) => {
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        const selectedCards = isFinishPlacingElectedpCards(players);
        setIsFinishPlacing(selectedCards[0] === undefined ? false : true);
    }, [players]);

    return { isFinishPlacing };
};

export default useFinishPlacingCards;
