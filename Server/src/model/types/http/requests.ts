import { CreateFilters, Filters } from "../filter";

export type CreateMovieRequestBody = {
    filters: CreateFilters;
    page: number;
    iterations: number;
};

export type GetMovieRequestBody = {
    filters: Filters;
    rounds: number;
};
