import axios from "axios";
import { MovieCast, MovieCrew } from "../../models/types/movie";
import URL from "../path.json";
import { moviesQueryParams } from "../utils/queryParams";

const fetchCast = async (url: string, id: string): Promise<[MovieCast[], MovieCrew[]]> => {
    const response = await axios.get(`${url}/${id}/${URL.tmdb.credits}`, {
        params: moviesQueryParams,
    });
    const castResults: MovieCast[] = response.data.cast;
    const crewResults: MovieCrew[] = response.data.crew;
    return [castResults, crewResults];
};

export default fetchCast;
