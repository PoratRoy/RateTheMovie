import axios from "axios";
import { GetMovieRequestBody } from "../types/requests";
import { Filters } from "../../models/types/filter";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { GetMovieResponse } from "../types/responses";

const useGetMovies = () => {
    const { setFetchLoading } = useGamePlayContext();
    const getMovies = async (rounds: number, filters: Filters) => {
        const URL = `${import.meta.env.VITE_BE_URL}/api/movie`
        const body: GetMovieRequestBody = {
            filters,
            rounds,
        };
        setFetchLoading(true);
        const response = await axios.post(URL, body);
        setFetchLoading(false);
        return response.data.data as GetMovieResponse;
    };
    return { getMovies };
};

export default useGetMovies;
