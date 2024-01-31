import axios from "axios";
import { MovieOMDB } from "../../models/types/movie";

const fetchOMDB = async (url: string, title: string, year: string) => {
    const response = await axios.get(url, {
        params: {
            apikey: import.meta.env.VITE_OMDB_API_KEY || "",
            t: title,
            y: year,
            plot: "full",
        },
    });
    return response.data as MovieOMDB;
};

export default fetchOMDB;
