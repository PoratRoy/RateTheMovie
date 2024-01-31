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
        setMovieLoading(true);
        console.log(`Set ${PACK_CARDS_NUM} movies: `, movies);
        setTimeout(() => {
            setMovies(movies);
            correctOrder(movies);
            Session.set(SessionKey.MOVIES, movies);
            setMovieLoading(false);
        }, 1000);
    };

    return { handleMovies };
};

export default useHandleMovies;
