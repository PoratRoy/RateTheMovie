import axios from "axios";
import {
    MovieCast,
    MovieCrew,
    MovieDetailsTMDB,
    MovieOMDB,
    MovieTMDB,
    MovieVideo,
} from "../model/types/movie";
import { discoverQueryParams, moviesQueryParams } from "./queryParams";
import { CreateFilters } from "../model/types/filter";

export const fetchTMDB = async (url: string, page: number, filters: CreateFilters) => {
    const response = await axios.get(url, { params: discoverQueryParams(page, filters) });
    return response.data.results as MovieTMDB[];
};

export const fetchDetailsTMDB = async (url: string, id: number) => {
    const URL = `${url}/${id}?language=en-US`;
    const response = await axios.get(URL, { params: moviesQueryParams });
    return response.data as MovieDetailsTMDB;
};

export const fetchOMDB = async (url: string, title: string, year: string) => {
    const response = await axios.get(url, {
        params: {
            apikey: process.env.OMDB_API_KEY || "",
            t: title,
            y: year,
            plot: "full",
        },
    });
    return response.data as MovieOMDB;
};

export const fetchCast = async (url: string): Promise<[MovieCast[], MovieCrew[]]> => {
    const response = await axios.get(url, {
        params: moviesQueryParams,
    });
    const castResults: MovieCast[] = response.data.cast;
    const crewResults: MovieCrew[] = response.data.crew;
    return [castResults, crewResults];
};

export const fetchVideo = async (url: string, id: number) => {
    const URL = `${url}/${id}/videos`;
    const response = await axios.get(URL, { params: moviesQueryParams });
    return response.data.results as MovieVideo[];
};
