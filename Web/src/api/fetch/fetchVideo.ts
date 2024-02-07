import axios from "axios";
import { MovieVideo } from "../../models/types/movie";
import { moviesQueryParams } from "../utils/queryParams";

const fetchVideo = async (url: string, id: string) => {
    const URL = `${url}/${id}/videos`;
    const response = await axios.get(URL, { params: moviesQueryParams });
    const results: MovieVideo[] = response.data.results;
    return results;
};

export default fetchVideo;
