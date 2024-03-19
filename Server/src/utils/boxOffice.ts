import { MovieDetailsTMDB } from "../model/types/movie";
import { fetchDetailsTMDB } from "./fetch";
import URL from "../model/constant/path.json";
import { REVENUE_NUM } from "../model/constant";

export const setIsBoxOffice = async (id: number) => {
    const result: MovieDetailsTMDB = await fetchDetailsTMDB(URL.tmdb.cast, id);
    const { revenue } = result;
    if(revenue > 0 && revenue > REVENUE_NUM) return true;
    return false;
};
