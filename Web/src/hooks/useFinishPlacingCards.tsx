import { useEffect, useState } from "react";
import { Player } from "../models/types/player";
import { PACK_CARDS_NUM } from "../models/constants";

const useFinishPlacingCards = (players: Player[]) => {
    const [isFinishPlacing, setIsFinishPlacing] = useState<boolean>(false);

    useEffect(() => {
        let finish = true;
        players.forEach((player: Player) => {
            const selectedCards = player.selectedCards;
            if (selectedCards.length === PACK_CARDS_NUM) {
                selectedCards.forEach((card) => {
                    if (!card || card.id === undefined) {
                        finish = false;
                        return;
                    }
                });
            } else {
                finish = false;
                return;
            }
        });
        setIsFinishPlacing(finish);
    }, [players]);

    return { isFinishPlacing };
};

export default useFinishPlacingCards;
