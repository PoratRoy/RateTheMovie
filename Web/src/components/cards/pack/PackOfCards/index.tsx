import React from "react";
import PlayerCard from "../../single/PlayerCard";
import Pack from "../../core/Pack";
import { PackOfCardsProps } from "../../../../models/types/props";
import NotEnoughMovies from "../../../common/NotEnoughMovies";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { fetchLoading, gameCards } = useGamePlayContext();
    return (
        <React.Fragment>
            {!gameCards[0]?.movie.imdbID && !fetchLoading ? (
                <NotEnoughMovies />
            ) : (
                <Pack isWrap>
                    {gameCards.map((card: Card, i: number) => (
                        <PlayerCard key={i} card={card} player={player} loading={fetchLoading} />
                    ))}
                </Pack>
            )}
        </React.Fragment>
    );
};

export default PackOfCards;
