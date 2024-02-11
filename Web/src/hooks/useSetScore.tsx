import { useGamePlayContext } from "../context/GamePlayContext";
import { GameCard, PlayerCard } from "../models/types/card";
import { Player } from "../models/types/player";
import { movieRating } from "../utils/format";

const useSetScore = () => {
    const { gameCards, setPlayers } = useGamePlayContext();

    const setScore = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                let playerScore = 0;
                let electedCards: PlayerCard[] = [];

                player.electedCards.forEach((elected: PlayerCard | undefined, i: number) => {
                    if (elected) {
                        //TODO: extract to function
                        const card: GameCard | undefined = gameCards.find(
                            (gameCard) => gameCard.id === elected?.movieId,
                        );
                        if (card && card.correctPosition === i) {
                            playerScore += movieRating(card.movie.imdbRating);
                            elected.correct = true;
                        }
                        electedCards.push(elected);
                    }
                });
                return {
                    ...player,
                    electedCards,
                    score: player.score + playerScore,
                };
            });
        });
    };

    return { setScore };
};

export default useSetScore;

// for (let i = 0; i < gameCards.length; i++) {
//     const correctOrderMovies = filterMoviesById(correctOrder, movies);
//     if (correctOrderMovies[i] === player.selectedCards[i]?.movie) {
//         playerScore += movieRating(correctOrderMovies[i]?.imdbRating);
//         electedCards.push(correctOrderMovies[i]);
//     }
// }
