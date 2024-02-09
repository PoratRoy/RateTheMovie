import React, { useEffect } from "react";
import ElectedCard from "../../singel/ElectedCard";
import { Card as CardModal } from "../../../../../../Common/model/card";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { motion } from "framer-motion";
import { springAnimation } from "../../../../style/animation";
import { isFinishPlacingElectedpCards } from "../../../../utils/finish";

const PackOfSelectedCards: React.FC = () => {
    const { players, finish, finishAnimation, setCorrectPack } = useGamePlayContext();

    useEffect(() => {
        if (!finish) {
            const selectedCards = isFinishPlacingElectedpCards(players);
            if (selectedCards) {
                setCorrectPack(selectedCards);
            }
        }
    }, [players]);
    //TODO: swiching places after fill all the cards triger the animation and not the dnd
    return (
        <Pack>
            {finishAnimation.showCorrectPack.map((card: CardModal | undefined, index: number) => (
                <motion.span key={card?.movie.id || index} layout transition={springAnimation}>
                    <ElectedCard index={index} player={players[0]} card={card} />
                </motion.span>
            ))}
        </Pack>
    );
};

export default PackOfSelectedCards;
