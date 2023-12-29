import React from "react";
import SelectedCard from "../../singel/SelectedCard";
import Pack from "../../core/Pack";
import { PACK_CARDS_NUM } from "../../../../models/constants";
import { useGamePlayContext } from "../../../../context/GamePlayContext";

const SelectedCards: React.FC = () => {
    const { players } = useGamePlayContext();

    return (
        <Pack>
            {[...Array(PACK_CARDS_NUM)].map((_, index) => {
                return <SelectedCard key={index} index={index} players={players} />;
            })}
        </Pack>
    );
};

export default SelectedCards;
