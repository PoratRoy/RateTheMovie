import { Filters } from "../../../models/types/filter";

export type GetMovieRequestBody = {
    filters: Filters;
    rounds: number;
};
