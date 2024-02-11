import useHandleMovies from "../../hooks/context/useHandleMovies";
import { PACK_CARDS_NUM } from "../../models/constants";
import { MovieTMDB } from "../../models/types/movie";
import useGetMovieData from "./useGetMovieData";

const useSessionBackupMovies = (iterations: number = 2) => {
    const { getMovieRatingData, getMovieViewData } = useGetMovieData();
    const { handleBackupMovies } = useHandleMovies();

    const backupMovies = async (startMovies: MovieTMDB[]) => {
        let remainingMovies = [...startMovies]
        
        for (let i = 0; i < iterations; i++) {
            const [moviesWithRate, remaining] = await getMovieRatingData(remainingMovies);
            remainingMovies = [...remaining]

            if (moviesWithRate.length === PACK_CARDS_NUM) {
                const movies = await getMovieViewData(moviesWithRate);
                handleBackupMovies(movies);
            }
        }
    };

    return { backupMovies };
};

export default useSessionBackupMovies;
