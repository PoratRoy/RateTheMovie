import React from "react";
import PlayerCard from "../../singel/PlayerCard";
import Pack from "../../core/Pack";
import { PackOfCardsProps } from "../../../../models/types/props";
import NotEnoughMovies from "../../../common/NotEnoughMovies";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { GameCard } from "../../../../models/types/card";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { fetchLoading, gameCards } = useGamePlayContext();
    return (
        <React.Fragment>
            {!gameCards[0]?.movie.imdbID && !fetchLoading ? (
                <NotEnoughMovies />
            ) : (
                <Pack isWrap>
                    {gameCards.map((card: GameCard, i: number) => (
                        <PlayerCard key={i} card={card} player={player} loading={fetchLoading} />
                    ))}
                </Pack>
            )}
        </React.Fragment>
    );
};

export default PackOfCards;
