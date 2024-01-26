import React from "react";
import ElectedCard from "../../singel/ElectedCard";
import { Card as CardModal } from "../../../../models/types/card";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import useSwitchPacks from "../../../../hooks/useSwitchPacks";

const PackOfSelectedCards: React.FC = () => {
    const { players, correctOrder } = useGamePlayContext();
    const { pack } = useSwitchPacks();

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
