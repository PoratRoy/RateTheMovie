import { MovieFilters, MovieTMDB } from "../../models/types/movie";
import { getRandomNumber } from "../../utils/calc";
import { TmdbBaseURL } from "../constants";
import path from "../path.json";
import { PACK_CARDS_NUM } from "../../models/constants";
import { isDateVaild } from "../../utils/date";
import { isGenreValid } from "../../utils/genre";
import fetchTMDB from "../fetch/fetchTMDB";

const useDiscoverMovies = () => {
    const discoverMovies = async (filters?: MovieFilters) => {
        const page = getRandomNumber(1, 500);
        const URL = `${TmdbBaseURL}${path.tmdb.discover}`;
        
        const resultsTMDB: MovieTMDB[] = await fetchTMDB(URL, page, filters);
        
        if (resultsTMDB && resultsTMDB.length >= PACK_CARDS_NUM) {
            const movies: MovieTMDB[] = resultsTMDB.filter((movie) => {
                const { title, release_date, id, genre_ids } = movie;
                const isValidDate = isDateVaild(release_date, filters);
                const isValidGenre = isGenreValid(genre_ids, filters);

                if (title && release_date && id && isValidDate && isValidGenre) {
                    return movie;
                }
            });
            return movies;
        }
        return [];
    };
    return { discoverMovies };
};

export default useDiscoverMovies;
