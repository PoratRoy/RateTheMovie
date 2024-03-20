import React from "react";
import PlayerCard from "../../single/PlayerCard";
import Pack from "../../core/Pack";
import NotEnoughMovies from "../../../error/NotEnoughMovies";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";
import { PackOfCardsProps } from "../../../../models/types/props/pack";
import { useGameStatusContext } from "../../../../context/GameStatusContext";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { gameCards } = useGamePlayContext();
    const { activateTimer } = useGameStatusContext();
    return (
        <React.Fragment>
            {!gameCards[0]?.movie.imdbID && !activateTimer ? (
                <NotEnoughMovies />
            ) : (
                <Pack packDisplay="wrap">
                    {gameCards.map((card: Card, i: number) => (
                        <PlayerCard key={i} card={card} player={player} />
                    ))}
                </Pack>
            )}
        </React.Fragment>
    );
};

export default PackOfCards;
