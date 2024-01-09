import { useEffect, useState } from "react";
import { Player } from "../models/types/player";
import { PACK_CARDS_NUM } from "../models/constants";

const useFinishGame = (players: Player[]) => {
    const [isFinished, setIsFinished] = useState<boolean>(false);

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
        setIsFinished(finish);
    }, [players]);

    return { isFinished };
};

export default useFinishGame;
