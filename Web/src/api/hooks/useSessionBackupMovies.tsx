import { PACK_CARDS_NUM } from "../../models/constants";
import { SessionKey } from "../../models/enums/session";
import { MovieTMDB } from "../../models/types/movie";
import Session from "../../utils/sessionStorage";
import useGetMovieData from "./useGetMovieData";

const useSessionBackupMovies = (iterations: number = 2) => {
    const { dataMovies } = useGetMovieData();

    const backupMovies = async (moviesTMDB: MovieTMDB[]) => {
        let movies = [...moviesTMDB]
        
        for (let i = 0; i < iterations; i++) {
            const [moviesData, remainingMovies] = await dataMovies(movies);
            movies = [...remainingMovies]

            if (moviesData.length === PACK_CARDS_NUM) {
                Session.add(SessionKey.BACKUP, moviesData);
            }
        }
    };

    return { backupMovies };
};

export default useSessionBackupMovies;
