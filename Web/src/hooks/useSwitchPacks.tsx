import { PACK_CARDS_NUM } from "../models/constants";
import { Card as CardModal } from "../models/types/card";
import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { isFinishPlacingElectedpCards } from "../utils/finish";

const useSwitchPacks = () => {
    const [pack, setPack] = useState<(CardModal | undefined)[]>([...Array(PACK_CARDS_NUM)]);
    const { players, correctOrder, finish } = useGamePlayContext();

    useEffect(() => {
        const selectedCards = isFinishPlacingElectedpCards(players);
        if (selectedCards) {
            setPack(selectedCards);
        }
    }, [players]);

    useEffect(() => {
        if (finish) {
            setPack(correctOrder);
        }
    }, [finish]);

    return { pack };
};

export default useSwitchPacks;
