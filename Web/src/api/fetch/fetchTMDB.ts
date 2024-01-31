import axios from "axios";
import { MovieFilters, MovieTMDB } from "../../models/types/movie";
import { setQueryParams } from "../utils";

const fetchTMDB = async (url: string, page: number, filters: MovieFilters | undefined) => {
    const response = await axios.get(url, { params: setQueryParams(page, filters) });
    return response.data.results as MovieTMDB[];
};

export default fetchTMDB;
