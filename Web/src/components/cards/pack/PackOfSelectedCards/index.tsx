import React, { useEffect, useState } from "react";
import ElectedCard from "../../singel/ElectedCard";
import { Card as CardModal } from "../../../../models/types/card";
import Pack from "../../core/Pack";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";

const PackOfSelectedCards: React.FC = () => {
    const [pack, setPack] = useState<(CardModal | undefined)[]>([...Array(PACK_CARDS_NUM)]);
    const { players, correctOrder, finish } = useGamePlayContext();

    useEffect(() => {
        if (players[0]?.selectedCards?.length === PACK_CARDS_NUM) {
            const selectedCards = players[0].selectedCards;
            setPack(selectedCards);
        }
    }, [players]);

    useEffect(() => {
        if (finish) {
            setPack(correctOrder);
        }
    }, [finish]);

    return (
        <Pack>
            {correctOrder.length !== 0 &&
                pack.map((card: CardModal | undefined, index: number) => (
                    <motion.span key={card?.movie.id || index} layout transition={springAnimation}>
                        <ElectedCard index={index} player={players[0]} card={card} />
                    </motion.span>
                ))}
        </Pack>
    );
};

export default PackOfSelectedCards;
