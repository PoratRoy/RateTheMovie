import { useMovieContext } from "../../context/MovieContext";
import { PACK_CARDS_NUM } from "../../models/constants";
import { SessionKey } from "../../models/enums/session";
import { Movie } from "../../models/types/movie";
import Session from "../../utils/sessionStorage";
import useCorrectOrder from "../useCorrectOrder";

const useHandleMovies = () => {
    const { correctOrder } = useCorrectOrder();
    const { setMovies, setMovieLoading } = useMovieContext();

    const handleMovies = (movies: Movie[]) => {
        console.log(`Set ${PACK_CARDS_NUM} movies: `, movies);
        setMovieLoading(true);
        setTimeout(() => {
            setMoviesOnStateAndSession(movies);
            correctOrder(movies);
            setMovieLoading(false);
        }, 1000);
    };

    const handleMoreMovieData = (movies: Movie[]) => {
        setMoviesOnStateAndSession(movies);
    };

    const handleBackupMovies = (movies: Movie[]) => {
        Session.add(SessionKey.BACKUP, movies);
    };

    const handleMoreBackupMoviesDate = (movies: Movie[]) => {
        Session.remove(SessionKey.BACKUP);
        Session.add(SessionKey.BACKUP, movies);
    };

    const setMoviesOnStateAndSession = (movies: Movie[]) => {
        setMovies(movies);
        Session.remove(SessionKey.MOVIES);
        Session.set(SessionKey.MOVIES, movies);
    };

    return { handleMovies, handleMoreMovieData, handleBackupMovies, handleMoreBackupMoviesDate };
};

export default useHandleMovies;
