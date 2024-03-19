import { Filters } from "../../../models/types/filter";

export type GetMovieRequestBody = {
    filters: Filters;
    amount: number;
};
