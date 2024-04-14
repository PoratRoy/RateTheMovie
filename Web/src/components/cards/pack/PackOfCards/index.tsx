import React from "react";
import PlayerCard from "../../single/PlayerCard";
import Pack from "../../core/Pack";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";
import { PackOfCardsProps } from "../../../../models/types/props/pack";
import BackCard from "../../single/BackCard";
import { PACK_CARDS_NUM } from "../../../../models/constant";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { gameCards } = useGamePlayContext();

    const setPackOfCards = () => {
        if (!gameCards[0]?.movie.imdbID) {
            return (
                <Pack packDisplay="wrap">
                    {[...Array(PACK_CARDS_NUM)].map((_: any, i: number) => (
                        <BackCard key={i} />
                    ))}
                </Pack>
            );
        }
        return (
            <Pack packDisplay="wrap">
                {gameCards.map((card: Card, i: number) => (
                    <PlayerCard key={i} card={card} player={player} />
                ))}
            </Pack>
        );
    };

    return setPackOfCards();
};

export default PackOfCards;
