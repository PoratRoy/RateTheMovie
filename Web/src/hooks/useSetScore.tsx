import { useGamePlayContext } from "../context/GamePlayContext";
import { useMovieContext } from "../context/MovieContext";
import { Player } from "../models/types/player";
import { movieRating } from "../utils/format";
import { filterMoviesById } from "../utils/movie";

const useSetScore = () => {
    const { correctOrder, setPlayers } = useGamePlayContext();
    const { movies } = useMovieContext();

    const setScore = () => {
        setPlayers((prev) => {
            return prev.map((player: Player) => {
                let playerScore = 0;
                let rightChoices = [];
                for (let i = 0; i < correctOrder.length; i++) {
                    const correctOrderMovies = filterMoviesById(correctOrder, movies);
                    if (correctOrderMovies[i] === player.selectedCards[i]?.movie) {
                        playerScore += movieRating(correctOrderMovies[i]?.imdbRating);
                        rightChoices.push(correctOrderMovies[i]);
                    }
                }
                return {
                    ...player,
                    rightChoices,
                    score: player.score + playerScore,
                };
            });
        });
    };

    return { setScore };
};

export default useSetScore;
