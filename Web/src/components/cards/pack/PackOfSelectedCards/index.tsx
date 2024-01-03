import React from "react";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const PackOfSelectedCards: React.FC = () => {
    const { players, correctOrder } = useGamePlayContext();

    return (
        <Pack>
            {correctOrder.length !== 0 &&
                [...Array(PACK_CARDS_NUM)].map((_, index) => {
                    return (
                        <SelectedCard
                            key={index}
                            index={index}
                            players={players}
                            correctMovie={correctOrder[index].movie}
                        />
                    );
                })}
        </Pack>
    );
};

export default PackOfSelectedCards;
