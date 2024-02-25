import { MovieFilters, MovieTMDB } from "../../models/types/movie";
import { getRandomNumber } from "../../utils/calc";
import URL from "../path.json";
import { isDateVaild } from "../../utils/date";
import { isGenreValid } from "../../utils/genre";
import fetchTMDB from "../fetch/fetchTMDB";
import { useErrorContext } from "../../context/ErrorContext";
import { isLanguageValid } from "../../utils/filter";
import { DISCOVERD_MOVIES_NUM, PACK_CARDS_NUM } from "../../models/constant";

const useDiscoverMovies = () => {
    const { handleError } = useErrorContext();

    const discoverTmdbMovies = async (filters?: MovieFilters) => {
        const page = getRandomNumber(1, 500);

        try {
            const resultsTMDB: MovieTMDB[] = await fetchTMDB(URL.tmdb.discover, page, filters);
            if (resultsTMDB && resultsTMDB.length >= PACK_CARDS_NUM) {
                const movies: MovieTMDB[] = resultsTMDB.filter((movie) => {
                    const { title, release_date, id, genre_ids, original_language, poster_path } =
                        movie;
                    const isValidDate = isDateVaild(release_date, filters);
                    const isValidGenre = isGenreValid(genre_ids, filters);
                    const isValidLanguage = isLanguageValid(original_language, filters);

                    if (
                        id &&
                        title &&
                        release_date &&
                        poster_path &&
                        isValidDate &&
                        isValidGenre &&
                        isValidLanguage
                    ) {
                        return movie;
                    }
                });
                return movies;
            }
        } catch (error) {
            console.error(error);
            handleError((error as Error).message || "Something went wrong");
        }
        return [];
    };

    const discoverMovies = async (filters?: MovieFilters) => {
        let increment: number = 0;
        let moviesTMDB: MovieTMDB[] = [];
        do {
            if (increment >= DISCOVERD_MOVIES_NUM / 2) {
                throw new Error("Not enough movies with thouse filters");
            }
            const newMovies: MovieTMDB[] = await discoverTmdbMovies(filters);
            moviesTMDB.push(...newMovies);
            increment++;
        } while (moviesTMDB.length <= DISCOVERD_MOVIES_NUM);

        return moviesTMDB;
    };

    return { discoverMovies };
};

export default useDiscoverMovies;
