import useGetMovies from "../../api/hooks/useGetMovies";
import { GetMovieResponse } from "../../api/model/types/responses";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { SessionKey } from "../../models/enums/session";
import { Game } from "../../models/types/game";
import { culcNumOfMovies } from "../../utils/calc";
import { splitRoundsMovies } from "../../utils/movie";
import Session from "../../utils/storage/sessionStorage";
import useHandleMovies from "./useHandleMovies";

const useMoviesGame = () => {
    const { getMovies } = useGetMovies();
    const { setRoundsMovies } = useGamePlayContext();
    const { handleMovieCards } = useHandleMovies();

    const setMoviesGame = async (game: Game | undefined) => {
        if (game) {
            const { filters, rounds, mod } = game;
            const numOfMovies = culcNumOfMovies(rounds);
            const movies: GetMovieResponse = await getMovies(numOfMovies, filters);
            const splitMovies = splitRoundsMovies(movies.movies, numOfMovies, rounds);
            setRoundsMovies(splitMovies);
            Session.set(SessionKey.ROUNDS_MOVIES, splitMovies);
            handleMovieCards(splitMovies[0], mod);
        }
    };

    return { setMoviesGame };
};

export default useMoviesGame;
