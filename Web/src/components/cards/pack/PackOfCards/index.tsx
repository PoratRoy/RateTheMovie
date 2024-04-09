import React from "react";
import PlayerCard from "../../single/PlayerCard";
import Pack from "../../core/Pack";
import NotEnoughMovies from "../../../error/NotEnoughMovies";
import { useGamePlayContext } from "../../../../context/GamePlayContext";
import { Card } from "../../../../models/types/card";
import { PackOfCardsProps } from "../../../../models/types/props/pack";
import Loading from "../../../actions/animation/Loading";
import style from "./PackOfCards.module.css";

const PackOfCards: React.FC<PackOfCardsProps> = ({ player }) => {
    const { gameCards, activateTimer } = useGamePlayContext();

    const setPackOfCards = () => {
        if (!gameCards[0]?.movie.imdbID) {
            if (!activateTimer) {
                return <NotEnoughMovies />;
            }
            return (
                <section className={style.noMovies}>
                    <Loading />
                </section>
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
