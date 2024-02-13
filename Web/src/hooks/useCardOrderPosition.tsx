import { useEffect, useState } from "react";
import { useGamePlayContext } from "../context/GamePlayContext";
import { GameCard, PlayerCard } from "../models/types/card";
import { Player } from "../models/types/player";

const useCardOrderPosition = (player: Player, card: GameCard) => {
    const { finishAnimation, players } = useGamePlayContext();
    const [pos, setPos] = useState<number>(0);

    useEffect(() => {
        const electedCards = player?.electedCards;
        let match = false;
        if (electedCards && electedCards.length !== 0) {
            electedCards.forEach((playerCard: PlayerCard | undefined) => {
                if (playerCard) {
                    if (!match && playerCard.movie) {
                        if (playerCard.movie === card.movie) {
                            setPos(card.position + 1);
                            match = true;
                        }
                    }
                }
            });
        }
        if (!match) setPos(0);
    }, [players]);

    useEffect(() => {
        if (finishAnimation.removePosition) {
            const electedCards = player?.electedCards;
            electedCards.forEach((playerCard: PlayerCard | undefined) => {
                if (playerCard?.correct && playerCard.movie === card.movie) {
                    setPos(0);
                }
            });
        }
    }, [finishAnimation]);

    return pos;
};

export default useCardOrderPosition;

// electedCards.forEach((playerCard: PlayerCard | undefined) => {
//     if (playerCard) {
//         const card: GameCard | undefined = gameCards.find(
//             (gameCard) => gameCard.id === playerCard?.movieId,
//         );
//         if (!match && card?.id) {
//             if (playerCard.movieId === card.id) {
//                 setPos(card.position + 1);
//                 match = true;
//             }
//         }
//     }
// });

// useEffect(() => {
//     const selectedOrder = players[0]?.electedCards;
//     let match = false;
//     if (selectedOrder && selectedOrder.length !== 0) {
//         selectedOrder.forEach((card: Card | undefined) => {
//             if (card) {
//                 if (!match && card.movie?.imdbID) {
//                     if (card.movie === movie) {
//                         setPos(card.position + 1);
//                         match = true;
//                     }
//                 }
//             }
//         });
//     }
//     if (!match) setPos(0);
// }, [players]);

// useEffect(() => {
//     if (finishAnimation.removePosition) {
//         const rightChoices = players[0]?.rightChoices;
//         rightChoices.forEach((movieOption: Movie) => {
//             if (movieOption === movie) {
//                 setPos(0);
//             }
//         });
//     }
// }, [finishAnimation]);
