import axios from "axios";
import { GetMovieRequestBody } from "../model/types/requests";
import { Filters } from "../../models/types/filter";
import { useGamePlayContext } from "../../context/GamePlayContext";
import { GetMovieResponse } from "../model/types/responses";

const useGetMovies = () => {
    const { setFetchLoading } = useGamePlayContext();
    const getMovies = async (amount: number, filters: Filters) => {
        const URL = "http://localhost:8080/api/movie";
        const body: GetMovieRequestBody = {
            filters,
            amount,
        };
        setFetchLoading(true);
        const response = await axios.post(URL, body);
        setFetchLoading(false);
        return response.data.data as GetMovieResponse;
    };
    return { getMovies };
};

export default useGetMovies;
