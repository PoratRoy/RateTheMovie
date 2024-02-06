import { useMovieContext } from "../../context/MovieContext";
import useHandleMovies from "../../hooks/context/useHandleMovies";
import { useSingleton } from "../../hooks/useSingleton";
import { SessionKey } from "../../models/enums/session";
import Session from "../../utils/sessionStorage";
import { checkMoviesAlreadySet } from "../utils/movie";

const useCheckMoviesAlreadySet = () => {
    const { movies, setMovieLoading } = useMovieContext();
    const { handleMovies } = useHandleMovies();

    useSingleton(async () => {
        setMovieLoading(true);
        if (!checkMoviesAlreadySet(movies)) {
            const sessionMovies = Session.get(SessionKey.MOVIES);
            if (sessionMovies && sessionMovies.length > 0) {
                handleMovies(sessionMovies);
            }
        } else {
            setMovieLoading(false);
        }
    });
};

export default useCheckMoviesAlreadySet;
