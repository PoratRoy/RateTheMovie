import useHandleMovies from "../../hooks/context/useHandleMovies";
import { PACK_CARDS_NUM } from "../../models/constants";
import { MovieTMDB } from "../../models/types/movie";
import useGetMovieData from "./useGetMovieData";

const useSessionBackupMovies = (iterations: number = 2) => {
    const { getMovieRatingData, getMovieViewData } = useGetMovieData();
    const { handleBackupMovies, handleMoreBackupMoviesDate } = useHandleMovies();

    const backupMovies = async (moviesTMDB: MovieTMDB[]) => {
        let movies = [...moviesTMDB]
        
        for (let i = 0; i < iterations; i++) {
            const [moviesOMDB, remainingMovies] = await getMovieRatingData(movies);
            movies = [...remainingMovies]

            if (moviesOMDB.length === PACK_CARDS_NUM) {
                handleBackupMovies(moviesOMDB);
            }

            const moviess = await getMovieViewData(moviesOMDB);
            handleMoreBackupMoviesDate(moviess);
        }
    };

    return { backupMovies };
};

export default useSessionBackupMovies;
