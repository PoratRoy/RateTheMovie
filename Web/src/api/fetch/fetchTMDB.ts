import axios from "axios";
import { MovieTMDB } from "../../models/types/movie";
import { discoverQueryParams } from "../utils/queryParams";
import { MovieFilters } from "../../models/types/filter";

const fetchTMDB = async (url: string, page: number, filters: MovieFilters | undefined) => {
    const response = await axios.get(url, { params: discoverQueryParams(page, filters) });
    return response.data.results as MovieTMDB[];
};

export default fetchTMDB;
