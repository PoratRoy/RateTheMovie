import React from "react";
import PlayerCard from "../../single/PlayerCard";
import Pack from "../../core/Pack";
import NotEnoughMovies from "../../../common/NotEnoughMovies";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";
import { PackOfCardsProps } from "../../../../models/types/props/pack";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { fetchLoading, gameCards } = useGamePlayContext();
    return (
        <React.Fragment>
            {!gameCards[0]?.movie.imdbID && !fetchLoading ? (
                <NotEnoughMovies />
            ) : (
                <Pack packDisplay="wrap">
                    {gameCards.map((card: Card, i: number) => (
                        <PlayerCard key={i} card={card} player={player} loading={fetchLoading} />
                    ))}
                </Pack>
            )}
        </React.Fragment>
    );
};

export default PackOfCards;
