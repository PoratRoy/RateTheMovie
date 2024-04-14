import useGetMovies from "../../api/hooks/useGetMovies";
import { GetMovieResponse } from "../../api/model/types/responses";
import { useErrorContext } from "../../context/ErrorContext";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { SessionKey } from "../../models/enums/session";
import { Game } from "../../models/types/game";
import Session from "../../utils/storage/sessionStorage";
import useHandleMovies from "./useHandleMovies";

const useMoviesGame = () => {
    const { getMovies } = useGetMovies();
    const { setRoundsMovies } = useGamePlayContext();
    const { handleMovieCards } = useHandleMovies();
    const { handleError } = useErrorContext();

    const setMoviesGame = async (game: Game | undefined) => {
        if (game) {
            try {
                const { filters, rounds, mod } = game;
                const response: GetMovieResponse = await getMovies(rounds, filters);
                setRoundsMovies(response.movies);
                Session.set(SessionKey.ROUNDS_MOVIES, response.movies);
                handleMovieCards(response.movies[0], mod);
            } catch (error) {
                handleError("Something went wrong");
            }
        }
    };

    return { setMoviesGame };
};

export default useMoviesGame;
